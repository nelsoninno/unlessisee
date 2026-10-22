/* relief.js: turn image brightness into height, like the 1976 VP-8 Image Analyzer did.
   The height maps are precomputed (assets/js/data/*.js) so this also works when the page
   is opened straight from disk. Requires three.min.js (global THREE). */
(function(){
  'use strict';
  function b64ToBytes(b){var s=atob(b),a=new Uint8Array(s.length);for(var i=0;i<s.length;i++)a[i]=s.charCodeAt(i);return a;}
  function invertTexture(src,cb){var im=new Image();im.onload=function(){var c=document.createElement('canvas');c.width=im.width;c.height=im.height;var x=c.getContext('2d');x.filter='invert(1)';x.drawImage(im,0,0);cb(c);};im.src=src;}

  window.initRelief=function(el){
    if(!window.THREE)throw new Error('three missing');
    var rkey=el.getAttribute('data-relief');
    var R=(window.SHROUD_RELIEF||{})[rkey]; if(!R)throw new Error('no relief data '+rkey);
    var ui=JSON.parse(el.getAttribute('data-ui')||'{}');
    var THREE=window.THREE;
    var w=el.clientWidth,h=el.clientHeight;
    var renderer=new THREE.WebGLRenderer({antialias:true,alpha:false});
    renderer.setPixelRatio(Math.min(2,window.devicePixelRatio||1));
    renderer.setSize(w,h); renderer.outputColorSpace=THREE.SRGBColorSpace;
    el.insertBefore(renderer.domElement,el.firstChild);
    var scene=new THREE.Scene(); scene.background=new THREE.Color(0xe8edf2);
    var cam=new THREE.PerspectiveCamera(30,w/h,0.1,100);
    var aspect=R.w/R.h;
    var planeH=2, planeW=planeH*aspect;
    if(aspect>1.2){planeW=3;planeH=3/aspect;}
    var geo=new THREE.PlaneGeometry(planeW,planeH,R.w-1,R.h-1);
    var hm=b64ToBytes(R.hmap);
    var base=new Float32Array(geo.attributes.position.count);
    for(var i=0;i<base.length;i++)base[i]=hm[i]/255;
    var depth=parseFloat(el.getAttribute('data-depth')||'0.35');
    function displace(d){var p=geo.attributes.position;for(var i=0;i<p.count;i++)p.setZ(i,base[i]*d);p.needsUpdate=true;geo.computeVertexNormals();}
    displace(depth);
    var loader=new THREE.TextureLoader();
    var texPos=loader.load(R.tex,function(){render();}); texPos.colorSpace=THREE.SRGBColorSpace; texPos.anisotropy=4;
    var texNeg=null;
    var mat=new THREE.MeshStandardMaterial({map:texPos,roughness:.9,metalness:0,side:THREE.DoubleSide});
    var clay=new THREE.MeshStandardMaterial({color:0xcfc2a5,roughness:.75,metalness:0,side:THREE.DoubleSide});
    var startClay=el.getAttribute('data-clay')==='1'||!!R.clay;
    var mesh=new THREE.Mesh(geo,startClay?clay:mat);
    var group=new THREE.Group(); group.add(mesh); scene.add(group);
    scene.add(new THREE.HemisphereLight(0xffffff,0xb8c4d0,.55));
    var key=new THREE.DirectionalLight(0xfff4dd,2.2); scene.add(key);
    var rim=new THREE.DirectionalLight(0x9fb3c8,.6); rim.position.set(-2,-1,1); scene.add(rim);
    var lightA=parseFloat(el.getAttribute('data-light')||'0.25');
    function placeLight(){key.position.set(Math.cos(lightA)*2.5,1.6,Math.sin(lightA)*2.5+1.2);}
    placeLight();
    var YAW=0.42,PMIN=-0.4,PMAX=0.12; // limits: the relief always faces the viewer
    var yaw=Math.max(-YAW,Math.min(YAW,parseFloat(el.getAttribute('data-yaw')||'0.3'))),pitch=-0.12,dist=aspect>1.2?4.4:5.0,auto=true;
    function placeCam(){group.rotation.set(pitch,yaw,0);group.position.y=-0.12;cam.position.set(0,0,dist);cam.lookAt(0,0,0);}
    placeCam();
    var needs=true; function render(){needs=true;}
    var t0=performance.now();
    function loop(t){
      if(!document.body.contains(el))return;
      if(auto){yaw=0.32*Math.sin((t-t0)/2600);placeCam();needs=true;}
      if(needs&&inView){renderer.render(scene,cam);needs=false;}
      requestAnimationFrame(loop);
    }
    var inView=true;
    if('IntersectionObserver' in window){new IntersectionObserver(function(es){inView=es[0].isIntersecting;if(inView)render();}).observe(el);}
    requestAnimationFrame(loop);
    // Drag to rotate, wheel / pinch to zoom
    var drag=null;
    el.addEventListener('pointerdown',function(e){if(e.target.closest('.viewer__ui'))return;auto=false;drag={x:e.clientX,y:e.clientY};el.setPointerCapture(e.pointerId);});
    el.addEventListener('pointermove',function(e){if(!drag)return;yaw=Math.max(-YAW,Math.min(YAW,yaw+(e.clientX-drag.x)*0.006));pitch=Math.max(PMIN,Math.min(PMAX,pitch+(e.clientY-drag.y)*0.004));drag={x:e.clientX,y:e.clientY};placeCam();render();});
    el.addEventListener('pointerup',function(){drag=null;}); el.addEventListener('pointercancel',function(){drag=null;});
    el.addEventListener('wheel',function(e){e.preventDefault();auto=false;dist=Math.max(2.4,Math.min(6,dist*Math.exp(e.deltaY*0.001)));placeCam();render();},{passive:false});
    // UI controls
    var bar=document.createElement('div'); bar.className='viewer__ui';
    function addRange(label,min,max,val,step,fn){var l=document.createElement('label');l.innerHTML='<span>'+label+'</span>';var r=document.createElement('input');r.type='range';r.min=min;r.max=max;r.step=step;r.value=val;r.addEventListener('input',function(){auto=false;fn(parseFloat(r.value));render();});l.appendChild(r);bar.appendChild(l);}
    function addBtn(label,fn,pressed){var b=document.createElement('button');b.type='button';b.className='tool';b.textContent=label;b.setAttribute('aria-pressed',pressed?'true':'false');b.addEventListener('click',function(){var on=b.getAttribute('aria-pressed')!=='true';b.setAttribute('aria-pressed',on?'true':'false');fn(on);render();});bar.appendChild(b);}
    addRange(ui.depth||'Depth',0,0.9,depth,0.01,function(v){displace(v);});
    addRange(ui.light||'Light',-1.4,2.6,lightA,0.01,function(v){lightA=v;placeLight();});
    addBtn(ui.clay||'Clay',function(on){mesh.material=on?clay:mat;},startClay);
    if(!R.noNeg)addBtn(ui.negative||'Negative',function(on){
      if(on&&!texNeg){invertTexture(R.tex,function(c){texNeg=new THREE.CanvasTexture(c);texNeg.colorSpace=THREE.SRGBColorSpace;mat.map=texNeg;mat.needsUpdate=true;render();});}
      else{mat.map=on?texNeg:texPos;mat.needsUpdate=true;}
    },false);
    el.appendChild(bar);
    window.addEventListener('resize',function(){w=el.clientWidth;h=el.clientHeight;renderer.setSize(w,h);cam.aspect=w/h;cam.updateProjectionMatrix();render();});
    var fb=el.querySelector('.viewer__fallback'); if(fb)fb.hidden=true;
  };
})();
