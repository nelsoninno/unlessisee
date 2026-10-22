/* explorer.js: pan and zoom over the full cloth, negative and enhance filters, marked wounds, guided tour. */
(function(){
  'use strict';
  var root=document.querySelector('.explorer');
  if(!root)return;
  var D=JSON.parse(document.getElementById('explorer-data').textContent);
  var stage=root.querySelector('.explorer__stage');
  var canvas=root.querySelector('.explorer__canvas');
  var img=canvas.querySelector('img');
  var panel=root.querySelector('.explorer__panel');
  var mini=root.querySelector('.explorer__minimap');
  var vp=mini?mini.querySelector('.vp'):null;
  var help=root.querySelector('.explorer__help');
  var W=D.image.w, H=D.image.h;
  img.width=W; img.height=H; img.style.width=W+'px'; img.style.height=H+'px';
  var s=1, tx=0, ty=0, minS=0.05, maxS=4;
  var hiLoaded=false;

  // Hotspots
  // Each marker is a callout: a small dot on the detail, a thin line, and the number placed off to the side,
  // so the number never covers what it points at.
  D.spots.forEach(function(sp,i){
    var b=document.createElement('button');
    b.className='hotspot hotspot--callout'; b.type='button';
    b.innerHTML='<span class="hotspot__line"></span><span class="hotspot__dot"></span><span class="hotspot__num">'+(sp.n||(i+1))+'</span>';
    b.style.left=(sp.x*W)+'px'; b.style.top=(sp.y*H)+'px';
    b.setAttribute('aria-label',sp.title); b.setAttribute('aria-expanded','false'); b.dataset.id=sp.id; b.dataset.layer=sp.layer||'wounds'; b.classList.add('layer-'+(sp.layer||'wounds'));
    b.addEventListener('pointerdown',function(e){e.stopPropagation();});
    b.addEventListener('click',function(e){e.stopPropagation();open(i,false);});
    canvas.appendChild(b); sp.el=b; callout(sp,0);
  });
  // Place a marker's number at its offset; when selected, push it just outside the highlighted circle
  function callout(sp,minLen){
    var dx=sp.dx||0, dy=(sp.dy==null?-64:sp.dy), len=Math.hypot(dx,dy)||1, k=Math.max(len,minLen)/len;
    dx*=k; dy*=k; len*=k;
    var line=sp.el.querySelector('.hotspot__line'), num=sp.el.querySelector('.hotspot__num');
    line.style.width=Math.max(0,len-15)+'px'; line.style.transform='rotate('+(Math.atan2(dy,dx)*180/Math.PI)+'deg)';
    num.style.left=dx+'px'; num.style.top=dy+'px';
  }

  function apply(){
    canvas.style.transform='translate('+tx+'px,'+ty+'px) scale('+s+')';
    // keep hotspot size constant on screen
    var inv=1/s;
    D.spots.forEach(function(sp){sp.el.style.transform='scale('+inv+')';});
    canvas.style.setProperty('--inv',inv);
    if(cur>=0){var c=D.spots[cur];callout(c,(c.r||150)*s+26);}
    if(!hiLoaded&&D.image.srcHi&&s>D.image.hiAt){hiLoaded=true;var hi=new Image();hi.onload=function(){img.src=D.image.srcHi;lensImg.src=D.image.srcHi;};hi.src=D.image.srcHi;}
    if(vp){var mw=mini.clientWidth/W;var r=stage.getBoundingClientRect();
      vp.style.left=Math.max(0,(-tx/s)*mw)+'px'; vp.style.top=Math.max(0,(-ty/s)*mw)+'px';
      vp.style.width=Math.min(mini.clientWidth,(r.width/s)*mw)+'px'; vp.style.height=Math.min(mini.clientHeight,(r.height/s)*mw)+'px';}
  }
  function fit(){
    var r=stage.getBoundingClientRect();
    if(r.width<r.height){ // portrait phone: fill the height and start on the front face
      s=r.height*0.9/H; minS=Math.min(r.width/W,r.height/H)*0.9;
      tx=r.width/2-0.43*W*s; ty=(r.height-H*s)/2; apply(); return;
    }
    s=Math.min(r.width/W,r.height/H)*0.94; minS=s*0.6;
    tx=(r.width-W*s)/2; ty=(r.height-H*s)/2; apply();
  }
  function zoomAt(f,cx,cy,anim){
    var ns=Math.max(minS,Math.min(maxS,s*f));
    var k=ns/s; tx=cx-(cx-tx)*k; ty=cy-(cy-ty)*k; s=ns;
    canvas.style.transition=anim?'transform .45s cubic-bezier(.3,0,.2,1)':'none'; apply();
  }
  function flyTo(x,y,ns){
    var r=stage.getBoundingClientRect();
    s=Math.max(minS,Math.min(maxS,ns));
    var open_=panel&&!panel.hidden, panelW=(open_&&r.width>720)?Math.min(380,r.width*0.4):0;
    var cy=r.height/2;
    if(open_&&r.width<=720){ // phone: the card sits at the bottom, so frame the area in the space above it
      var room=r.height-panel.offsetHeight-16; cy=Math.max(80,room/2);
      if(cur>=0){var rr=D.spots[cur].r||150; s=Math.max(minS,Math.min(s,(room/2-34)/rr));}
    }
    tx=(r.width-panelW)/2-x*W*s; ty=cy-y*H*s;
    canvas.style.transition='transform .9s cubic-bezier(.3,0,.2,1)'; apply();
  }

  // Spotlight for the selected marker: the rest of the cloth dims, the area itself shows as a negative
  var dim=document.createElement('div'); dim.className='explorer__dim';
  var lens=document.createElement('div'); lens.className='explorer__lens';
  var lensImg=document.createElement('img'); lensImg.alt=''; lensImg.src=img.getAttribute('src'); lensImg.draggable=false;
  lensImg.style.width=W+'px'; lensImg.style.height=H+'px'; lens.appendChild(lensImg);
  var ring=document.createElement('div'); ring.className='explorer__ring';
  var after=img;[dim,lens,ring].forEach(function(e){e.setAttribute('aria-hidden','true');e.style.width=W+'px';e.style.height=H+'px';canvas.insertBefore(e,after.nextSibling);after=e;});
  ring.style.width=ring.style.height='0px';
  function spotlight(sp){
    if(!sp){canvas.classList.remove('spot-on');return;}
    var x=sp.x*W, y=sp.y*H, r=sp.r||150;
    var g='radial-gradient(circle at '+x+'px '+y+'px, transparent '+r+'px, #000 '+(r+60)+'px)';
    dim.style.webkitMaskImage=dim.style.maskImage=g;
    lens.style.clipPath='circle('+r+'px at '+x+'px '+y+'px)';
    ring.style.left=(x-r)+'px'; ring.style.top=(y-r)+'px'; ring.style.width=ring.style.height=(2*r)+'px';
    canvas.classList.add('spot-on');
  }

  // Panel
  var cur=-1;
  function open(i,fly){
    if(cur>=0&&cur!==i)callout(D.spots[cur],0);
    cur=i; var sp=D.spots[i];
    D.spots.forEach(function(o){o.el.setAttribute('aria-expanded','false');});
    sp.el.setAttribute('aria-expanded','true'); spotlight(sp); if(help)help.style.opacity=0;
    var h='<button class="close" type="button" aria-label="'+D.ui.close+'">&times;</button>';
    h+='<p class="meta">'+(sp.n||i+1)+' / '+D.spots.length+(sp.region?' &middot; '+sp.region:'')+'</p>';
    h+='<h3>'+sp.title+'</h3><p>'+sp.text+'</p>';
    if(sp.verse)h+='<p class="verse">'+sp.verse+(sp.verseRef?' <span class="meta">('+sp.verseRef+')</span>':'')+'</p>';
    if(sp.skeptic)h+='<p style="margin-top:1rem"><span class="meta">'+D.ui.skeptic+'</span><br>'+sp.skeptic+'</p>';
    if(sp.link)h+='<p style="margin-top:1rem" class="ui"><a href="'+sp.link+'">'+D.ui.more+'</a></p>';
    h+='<div class="btn-row" style="margin-top:1.2rem"><button class="tool" data-a="prev" type="button">'+D.ui.prev+'</button><button class="tool" data-a="next" type="button">'+D.ui.next+'</button></div>';
    panel.innerHTML=h; panel.hidden=false;
    panel.querySelector('.close').onclick=close;
    panel.querySelector('[data-a=prev]').onclick=function(){open((cur-1+D.spots.length)%D.spots.length,true);};
    panel.querySelector('[data-a=next]').onclick=function(){open((cur+1)%D.spots.length,true);};
    if(fly!==false||true)flyTo(sp.x,sp.y,Math.max(s,sp.zoom||0.9));
    if(history.replaceState)history.replaceState(null,'','#'+sp.id);
  }
  function close(){spotlight(null);if(cur>=0)callout(D.spots[cur],0);panel.hidden=true;D.spots.forEach(function(o){o.el.setAttribute('aria-expanded','false');});cur=-1;}

  // Pointer pan and pinch
  var pts=new Map(), last=null, pinch=null, moved=false;
  stage.addEventListener('pointerdown',function(e){
    if(e.pointerType==='touch')return; // touch is handled below: one finger scrolls the page, two fingers move the cloth
    if(e.target.closest('.explorer__panel,.explorer__zoom,.explorer__minimap'))return;
    stage.setPointerCapture(e.pointerId); pts.set(e.pointerId,{x:e.clientX,y:e.clientY}); moved=false;
    canvas.style.transition='none'; stage.classList.add('dragging');
    if(pts.size===2){var a=Array.from(pts.values());pinch={d:Math.hypot(a[0].x-a[1].x,a[0].y-a[1].y)};}
    last={x:e.clientX,y:e.clientY}; if(help)help.style.opacity=0;
  });
  stage.addEventListener('pointermove',function(e){
    if(!pts.has(e.pointerId))return;
    pts.set(e.pointerId,{x:e.clientX,y:e.clientY});
    if(pts.size===2&&pinch){
      var a=Array.from(pts.values()),d=Math.hypot(a[0].x-a[1].x,a[0].y-a[1].y),r=stage.getBoundingClientRect();
      zoomAt(d/pinch.d,(a[0].x+a[1].x)/2-r.left,(a[0].y+a[1].y)/2-r.top,false); pinch.d=d; moved=true; return;
    }
    if(last){var dx=e.clientX-last.x,dy=e.clientY-last.y; if(Math.abs(dx)+Math.abs(dy)>2)moved=true; tx+=dx;ty+=dy;last={x:e.clientX,y:e.clientY};apply();}
  });
  function up(e){pts.delete(e.pointerId);if(pts.size<2)pinch=null;if(pts.size===0){last=null;stage.classList.remove('dragging');}else{var a=Array.from(pts.values())[0];last={x:a.x,y:a.y};}}
  stage.addEventListener('pointerup',up); stage.addEventListener('pointercancel',up);
  // Touch: cooperative gestures, so the page can always be scrolled past the viewer
  var HINTS={en:'Use two fingers to move or zoom the cloth',es:'Usa dos dedos para mover o ampliar la tela',pt:'Use dois dedos para mover ou ampliar o pano',fr:'Utilisez deux doigts pour déplacer ou agrandir le linge',it:'Usa due dita per spostare o ingrandire il telo',de:'Mit zwei Fingern verschieben oder vergrößern',pl:'Użyj dwóch palców, aby przesunąć lub powiększyć płótno',fil:'Gumamit ng dalawang daliri para igalaw o i-zoom ang tela',zh:'用两根手指移动或缩放这块布',ko:'두 손가락으로 천을 움직이거나 확대하십시오',ar:'استخدم إصبعين لتحريك القماش أو تكبيره',hi:'कपड़े को खिसकाने या बड़ा करने के लिए दो उंगलियों का इस्तेमाल करें'};
  var hl=(document.documentElement.lang||'en').split('-')[0], hint=document.createElement('div'), hintT=0, tp=null;
  if(help&&window.matchMedia&&matchMedia('(pointer:coarse)').matches)help.textContent=HINTS[hl]||HINTS.en;
  hint.className='explorer__twofinger'; hint.textContent=HINTS[hl]||HINTS.en; hint.setAttribute('aria-hidden','true'); stage.appendChild(hint);
  function mid(t){return {x:(t[0].clientX+t[1].clientX)/2,y:(t[0].clientY+t[1].clientY)/2,d:Math.hypot(t[0].clientX-t[1].clientX,t[0].clientY-t[1].clientY)};}
  stage.addEventListener('touchstart',function(e){
    if(e.touches.length>=2){tp=mid(e.touches);canvas.style.transition='none';hint.classList.remove('on');if(help)help.style.opacity=0;}
  },{passive:true});
  stage.addEventListener('touchmove',function(e){
    if(e.touches.length>=2&&tp){
      e.preventDefault();
      var m=mid(e.touches),r=stage.getBoundingClientRect();
      tx+=m.x-tp.x; ty+=m.y-tp.y; zoomAt(m.d/tp.d,m.x-r.left,m.y-r.top,false); tp=m;
    } else if(e.touches.length===1&&!e.target.closest('.explorer__panel')){
      hint.classList.add('on'); clearTimeout(hintT); hintT=setTimeout(function(){hint.classList.remove('on');},1400);
    }
  },{passive:false});
  stage.addEventListener('touchend',function(e){if(e.touches.length<2)tp=null;},{passive:true});
  stage.addEventListener('wheel',function(e){e.preventDefault();var r=stage.getBoundingClientRect();zoomAt(Math.exp(-e.deltaY*0.0015),e.clientX-r.left,e.clientY-r.top,false);},{passive:false});
  stage.addEventListener('dblclick',function(e){if(e.target.closest('.explorer__panel'))return;var r=stage.getBoundingClientRect();zoomAt(2,e.clientX-r.left,e.clientY-r.top,true);});

  // Toolbar
  function toggle(btn,cls,target){var on=btn.getAttribute('aria-pressed')!=='true';btn.setAttribute('aria-pressed',on?'true':'false');(target||canvas).classList.toggle(cls,on);return on;}
  root.querySelectorAll('[data-tool]').forEach(function(b){
    b.addEventListener('click',function(){
      var t=b.dataset.tool;
      if(t==='neg')toggle(b,'neg');
      else if(t==='enh')toggle(b,'enh');
      else if(t.indexOf('layer-')===0){var on=b.getAttribute('aria-pressed')!=='true';b.setAttribute('aria-pressed',on?'true':'false');stage.classList.toggle('hide-'+t,!on);if(!on&&cur>=0&&D.spots[cur].layer===t.slice(6))close();}
      else if(t==='fit'){close();canvas.style.transition='transform .6s';fit();}
      else if(t==='tour'){var n=cur;for(var k=0;k<D.spots.length;k++){n=(n+1)%D.spots.length;if(!stage.classList.contains('hide-layer-'+(D.spots[n].layer||'wounds')))break;}open(n,true);}
      else if(t==='in'||t==='out'){var r=stage.getBoundingClientRect();zoomAt(t==='in'?1.6:1/1.6,r.width/2,r.height/2,true);}
    });
  });
  document.addEventListener('keydown',function(e){
    if(e.target.closest('input,textarea'))return;
    var k=e.key.toLowerCase();
    if(k==='n')root.querySelector('[data-tool=neg]').click();
    else if(k==='e')root.querySelector('[data-tool=enh]').click();
    else if(k==='escape')close();
    else if(k==='arrowright'&&cur>=0)open((cur+1)%D.spots.length,true);
    else if(k==='arrowleft'&&cur>=0)open((cur-1+D.spots.length)%D.spots.length,true);
    else if(k==='+'||k==='=')root.querySelector('[data-tool=in]').click();
    else if(k==='-')root.querySelector('[data-tool=out]').click();
  });
  if(mini){mini.addEventListener('click',function(e){var r=mini.getBoundingClientRect();flyTo((e.clientX-r.left)/r.width,(e.clientY-r.top)/r.height,s);});}

  window.addEventListener('resize',function(){fit();});
  function init(){fit();var h=location.hash.slice(1);if(h){for(var i=0;i<D.spots.length;i++)if(D.spots[i].id===h){open(i,true);break;}}
    var p=new URLSearchParams(location.search);if(p.get('view')==='negative')root.querySelector('[data-tool=neg]').click();}
  if(img.complete)init(); else img.addEventListener('load',init);
})();
