/* lists.js: timeline interactions, library search and filters, body map, dating chart tooltips. */
(function(){
  'use strict';
  function norm(s){return (s||'').toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g,'');}

  // ---------- Library ----------
  var lib=document.querySelector('.lib');
  if(lib){
    var q=document.querySelector('[data-lib-search]'), cnt=document.querySelector('[data-lib-count]');
    var st={topic:'all',stance:'all',pr:'all'};
    var items=[].slice.call(lib.children);
    function run(){var term=norm(q?q.value:''),n=0;
      items.forEach(function(li){var ok=(!term||norm(li.dataset.text).indexOf(term)>-1)
        &&(st.topic==='all'||(' '+li.dataset.topics+' ').indexOf(' '+st.topic+' ')>-1)
        &&(st.stance==='all'||li.dataset.stance===st.stance)
        &&(st.pr==='all'||li.dataset.pr==='true');
        li.hidden=!ok;if(ok)n++;});
      if(cnt)cnt.textContent=n;}
    if(q)q.addEventListener('input',run);
    document.querySelectorAll('[data-lib-filter]').forEach(function(b){b.addEventListener('click',function(){
      var g=b.dataset.libFilter; st[g]=b.dataset.value;
      document.querySelectorAll('[data-lib-filter="'+g+'"]').forEach(function(o){o.setAttribute('aria-pressed',o===b?'true':'false');});run();});});
    run();
  }

  // ---------- Timeline ----------
  var tl=document.getElementById('tl-data');
  if(tl){
    var T=JSON.parse(tl.textContent), track=document.querySelector('.tl__track'), card=document.querySelector('.tl__card');
    // piecewise scale: compress the first 13 centuries, expand the documented era
    var segs=[[0,1300,0,0.28],[1300,1900,0.28,0.66],[1900,2030,0.66,1]];
    function X(y){for(var i=0;i<segs.length;i++){var s=segs[i];if(y<=s[1]){return s[2]+(y-s[0])/(s[1]-s[0])*(s[3]-s[2]);}}return 1;}
    var width=Math.max(1100,track.parentElement.clientWidth); track.style.width=width+'px';
    var px=function(y){return 24+X(y)*(width-48);};
    var eras=[{a:30,b:1354,c:'hyp'},{a:1354,b:2030,c:'doc'}];
    eras.forEach(function(e){var d=document.createElement('div');d.className='tl__era tl__era--'+e.c;d.style.left=px(e.a)+'px';d.style.width=(px(e.b)-px(e.a))+'px';d.style.height='4px';d.style.top='90px';track.appendChild(d);});
    [30,500,1000,1300,1400,1500,1600,1700,1800,1900,1950,2000].forEach(function(y){var t=document.createElement('span');t.className='tl__tick';t.style.left=px(y)+'px';t.textContent=y;track.appendChild(t);});
    var dots=[], filt={track:'all'};
    var lanes={cloth:0,science:-34,church:34,world:-64};
    T.events.forEach(function(ev,i){var b=document.createElement('button');b.type='button';b.className='tl__dot';b.dataset.c=ev.certainty;b.dataset.track=ev.track;
      b.style.left=px(ev.year)+'px';b.style.top=(84+(lanes[ev.track]||0))+'px';b.setAttribute('aria-label',ev.date_label+': '+ev.title);b.setAttribute('aria-pressed','false');
      b.addEventListener('click',function(){show(i);});track.appendChild(b);dots.push(b);});
    function show(i){var ev=T.events[i];dots.forEach(function(d,j){d.setAttribute('aria-pressed',j===i?'true':'false');});
      var src=(ev.sources||[]).map(function(s){return '<a href="'+s.url+'" target="_blank" rel="noopener">'+s.label+'</a>';}).join(' &middot; ');
      card.innerHTML='<p class="yr">'+ev.date_label+' &middot; '+(T.ui.cert[ev.certainty]||ev.certainty)+'</p><h3>'+ev.title+'</h3><p class="measure">'+ev.text+'</p>'+(src?'<p class="meta" style="margin-top:.8rem">'+src+'</p>':'')+
        '<div class="btn-row" style="margin-top:1rem"><button class="tool" type="button" data-tl="prev">'+T.ui.prev+'</button><button class="tool" type="button" data-tl="next">'+T.ui.next+'</button></div>';
      card.querySelector('[data-tl=prev]').onclick=function(){step(i,-1);};card.querySelector('[data-tl=next]').onclick=function(){step(i,1);};
      var d=dots[i],sc=track.parentElement;sc.scrollTo({left:Math.max(0,parseFloat(d.style.left)-sc.clientWidth/2),behavior:'smooth'});
      cur=i;}
    function visible(i){var ev=T.events[i];return filt.track==='all'||ev.track===filt.track;}
    function step(i,dir){var j=i;for(var k=0;k<T.events.length;k++){j=(j+dir+T.events.length)%T.events.length;if(visible(j)){show(j);return;}}}
    var cur=0;
    document.querySelectorAll('[data-tl-filter]').forEach(function(b){b.addEventListener('click',function(){filt.track=b.dataset.value;
      document.querySelectorAll('[data-tl-filter]').forEach(function(o){o.setAttribute('aria-pressed',o===b?'true':'false');});
      dots.forEach(function(d,i){d.style.display=visible(i)?'':'none';});});});
    document.addEventListener('keydown',function(e){if(e.target.closest('input'))return;if(e.key==='ArrowRight')step(cur,1);if(e.key==='ArrowLeft')step(cur,-1);});
    show(T.start||0);
  }

  // ---------- Body map (wounds) ----------
  var bm=document.querySelector('.bodymap');
  if(bm){
    var figs=bm.querySelectorAll('.bodymap__fig[data-side]'), wl=bm.querySelectorAll('.wound');
    function side(s){figs.forEach(function(f){f.hidden=f.dataset.side!==s;});
      bm.querySelectorAll('[data-side-btn]').forEach(function(b){b.setAttribute('aria-pressed',b.dataset.sideBtn===s?'true':'false');});}
    bm.querySelectorAll('[data-side-btn]').forEach(function(b){b.addEventListener('click',function(){side(b.dataset.sideBtn);});});
    function act(id){wl.forEach(function(w){w.classList.toggle('active',w.dataset.id===id);});
      bm.querySelectorAll('.hotspot').forEach(function(h){h.setAttribute('aria-expanded',h.dataset.id===id?'true':'false');});
      var w=bm.querySelector('.wound[data-id="'+id+'"]');if(w){side(w.dataset.side);}}
    bm.querySelectorAll('.hotspot').forEach(function(h){h.addEventListener('click',function(){act(h.dataset.id);var w=bm.querySelector('.wound[data-id="'+h.dataset.id+'"]');if(w)w.scrollIntoView({behavior:'smooth',block:'nearest'});});});
    wl.forEach(function(w){w.addEventListener('click',function(){act(w.dataset.id);});w.addEventListener('keydown',function(e){if(e.key==='Enter')act(w.dataset.id);});});
    bm.querySelectorAll('[data-neg-btn]').forEach(function(b){b.addEventListener('click',function(){var on=b.getAttribute('aria-pressed')!=='true';b.setAttribute('aria-pressed',on?'true':'false');figs.forEach(function(f){var i=f.querySelector('img');if(i)i.style.filter=on?'invert(1) grayscale(1) contrast(1.15)':'';});});});
    side('front');
    bm.querySelectorAll('[data-neg-btn][aria-pressed="true"]').forEach(function(b){figs.forEach(function(f){var i=f.querySelector('img');if(i)i.style.filter='invert(1) grayscale(1) contrast(1.15)';});});
  }

  // ---------- Chart tooltips ----------
  document.querySelectorAll('.chart-wrap').forEach(function(wrap){
    var tip=wrap.querySelector('.chart-tip'); if(!tip)return;
    wrap.querySelectorAll('[data-tip]').forEach(function(m){
      function on(e){var r=wrap.getBoundingClientRect();tip.innerHTML=m.getAttribute('data-tip');tip.style.opacity=1;
        var x=(e.clientX||r.left+r.width/2)-r.left+12,y=(e.clientY||r.top)-r.top+12;tip.style.left=Math.min(x,r.width-270)+'px';tip.style.top=y+'px';}
      m.addEventListener('pointerenter',on);m.addEventListener('pointermove',on);m.addEventListener('focus',on);
      m.addEventListener('pointerleave',function(){tip.style.opacity=0;});m.addEventListener('blur',function(){tip.style.opacity=0;});
    });
  });
})();
/* fold + powers of ten */
(function(){
  'use strict';
  document.querySelectorAll('[data-fold]').forEach(function(b){
    var f=b.closest('figure').querySelector('.fold'), labels=JSON.parse(b.getAttribute('data-labels')||'null');
    b.addEventListener('click',function(){var on=f.getAttribute('data-folded')!=='true';f.setAttribute('data-folded',on?'true':'false');if(labels)b.textContent=on?labels[1]:labels[0];});
  });
  document.querySelectorAll('.powers').forEach(function(p){
    var r=p.querySelector('input[type=range]'), size=p.querySelector('.powers__size'), max=parseInt(r.max);
    var sizes=[].map.call(p.querySelectorAll('.powers__ticks span'),function(s){return s.textContent;});
    function go(i){i=Math.max(0,Math.min(max,i));r.value=i;
      p.querySelectorAll('.powers__frame').forEach(function(f){f.hidden=+f.dataset.i!==i;});
      p.querySelectorAll('.powers__text').forEach(function(f){f.hidden=+f.dataset.i!==i;});
      size.textContent=sizes[i];}
    r.addEventListener('input',function(){go(+r.value);});
    p.querySelector('[data-pw=prev]').addEventListener('click',function(){go(+r.value-1);});
    p.querySelector('[data-pw=next]').addEventListener('click',function(){go(+r.value+1);});
  });
})();
/* video facades (load YouTube only on click) + invert the page */
(function(){
  'use strict';
  document.querySelectorAll('[data-yt]').forEach(function(b){
    b.addEventListener('click',function(){
      var f=document.createElement('iframe');
      f.src='https://www.youtube-nocookie.com/embed/'+b.getAttribute('data-yt')+'?autoplay=1&rel=0';
      f.title=b.getAttribute('aria-label')||'Video'; f.allow='autoplay; encrypted-media; picture-in-picture'; f.allowFullscreen=true; f.className='vid__frame';
      b.replaceWith(f);
    });
  });
  document.querySelectorAll('[data-invert-page]').forEach(function(b){
    var labels=JSON.parse(b.getAttribute('data-labels')||'null');
    b.addEventListener('click',function(){
      var on=document.documentElement.classList.toggle('inverted');
      if(labels)b.textContent=on?labels[1]:labels[0];
    });
  });
})();
/* breathing diagram: body rises and falls, arms re-angle, blood keeps running straight down */
(function(){
  'use strict';
  var svg=document.querySelector('[data-breath]'), btn=document.querySelector('[data-breath-btn]');
  if(!svg||!btn)return;
  var body=svg.querySelector('[data-body]'), arms=svg.querySelectorAll('.arm'), drips=svg.querySelectorAll('.drip');
  var labels=JSON.parse(btn.getAttribute('data-labels')); var up=0, target=0, raf=null;
  function draw(k){ // k: 0 slumped, 1 pushed up
    var dy=-34*k; body.setAttribute('transform','translate(0,'+dy+')');
    var sy=128+dy; arms[0].setAttribute('y2',sy); arms[1].setAttribute('y2',sy);
    // blood runs straight down from a point on the forearm near the wrist
    [[62,70,135],[258,70,185]].forEach(function(a,i){var x=a[0]+(a[2]-a[0])*0.15, y=a[1]+(sy-a[1])*0.15; drips[i].setAttribute('x1',x); drips[i].setAttribute('y1',y); drips[i].setAttribute('x2',x); drips[i].setAttribute('y2',y+34);});
  }
  function step(){up+=(target-up)*0.12; if(Math.abs(target-up)<0.003)up=target; draw(up); if(up!==target)raf=requestAnimationFrame(step); else raf=null;}
  btn.addEventListener('click',function(){target=target?0:1;btn.textContent=target?labels[1]:labels[0];if(!raf)step();});
  draw(0);
})();
