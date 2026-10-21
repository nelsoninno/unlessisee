/* emanation.js: a cinematic visualization of ONE hypothesis for how the image formed
   (a short, intense burst of light from the body, then the cloth falling through, after
   John Jackson). It is labelled on the page as a hypothesis, not evidence.
   Requires three.min.js and the "body" relief data. */
(function(){
  'use strict';
  function b64ToBytes(b){var s=atob(b),a=new Uint8Array(s.length);for(var i=0;i<s.length;i++)a[i]=s.charCodeAt(i);return a;}
  function smooth(t){t=Math.max(0,Math.min(1,t));return t*t*(3-2*t);}
  function seg(t,a,b){return smooth((t-a)/(b-a));}

  window.initEmanation=function(el){
    var THREE=window.THREE; if(!THREE)throw new Error('three missing');
    var R=(window.SHROUD_RELIEF||{}).body; if(!R)throw new Error('no body data');
    var caps=JSON.parse(el.getAttribute('data-captions')||'[]');
    var ui=JSON.parse(el.getAttribute('data-ui')||'{}');
    var capEl=el.querySelector('.viewer__caption');
    var w=el.clientWidth,h=el.clientHeight;
    var renderer=new THREE.WebGLRenderer({antialias:true});
    renderer.setPixelRatio(Math.min(2,window.devicePixelRatio||1)); renderer.setSize(w,h);
    renderer.outputColorSpace=THREE.SRGBColorSpace; renderer.toneMapping=THREE.ACESFilmicToneMapping; renderer.toneMappingExposure=1.0;
    el.insertBefore(renderer.domElement,el.firstChild);
    var scene=new THREE.Scene(); scene.background=new THREE.Color(0x07090a); scene.fog=new THREE.Fog(0x07090a,6,16);
    var cam=new THREE.PerspectiveCamera(32,w/h,0.05,60);

    // Cloth geometry: long axis along X (head to the left)
    var L=4.0, Wd=L*R.h/R.w; // R is stored landscape (w > h)
    var geo=new THREE.PlaneGeometry(L,Wd,R.w-1,R.h-1);
    var hm=b64ToBytes(R.hmap), n=geo.attributes.position.count, base=new Float32Array(n);
    for(var i=0;i<n;i++)base[i]=hm[i]/255;
    var lift=0.32;
    function drape(k){ // k: 1 = draped over the body, 0 = flat
      var p=geo.attributes.position;
      for(var i=0;i<n;i++)p.setZ(i,base[i]*lift*k+0.01);
      p.needsUpdate=true; geo.computeVertexNormals();
    }
    drape(1);
    geo.rotateX(-Math.PI/2);
    // after rotate, Z displacement became Y. Rebuild drape on rotated geometry:
    var rest=geo.attributes.position.array.slice(0);
    function drapeR(k){var p=geo.attributes.position;for(var i=0;i<n;i++){p.setY(i,base[i]*lift*k+0.012);}p.needsUpdate=true;geo.computeVertexNormals();}

    // Cloth texture: plain linen that receives the image progressively
    var cv=document.createElement('canvas'); cv.width=1024; cv.height=Math.round(1024*R.h/R.w);
    var cx=cv.getContext('2d'); var linen='#d8cdb2';
    var imgEl=new Image(), imgReady=false; imgEl.onload=function(){imgReady=true;paint(0);}; imgEl.src=R.tex;
    // fine weave noise
    var weave=document.createElement('canvas'); weave.width=cv.width; weave.height=cv.height;
    (function(){var g=weave.getContext('2d');g.fillStyle=linen;g.fillRect(0,0,weave.width,weave.height);
      for(var y=0;y<weave.height;y+=2){g.fillStyle='rgba(120,100,70,'+(0.04+Math.random()*0.05)+')';g.fillRect(0,y,weave.width,1);}
      for(var x=0;x<weave.width;x+=3){g.fillStyle='rgba(255,250,235,'+(Math.random()*0.05)+')';g.fillRect(x,0,1,weave.height);} })();
    var ctex=new THREE.CanvasTexture(cv); ctex.colorSpace=THREE.SRGBColorSpace;
    function paint(p){
      cx.globalCompositeOperation='source-over'; cx.globalAlpha=1; cx.drawImage(weave,0,0);
      if(imgReady&&p>0){cx.globalCompositeOperation='multiply';cx.globalAlpha=Math.min(1,p);cx.drawImage(imgEl,0,0,cv.width,cv.height);}
      cx.globalCompositeOperation='source-over'; cx.globalAlpha=1; ctex.needsUpdate=true;
    }
    paint(0);
    var clothMat=new THREE.MeshStandardMaterial({map:ctex,roughness:.95,metalness:0,side:THREE.DoubleSide,emissive:new THREE.Color(0xffe7b0),emissiveIntensity:0});
    var cloth=new THREE.Mesh(geo,clothMat); scene.add(cloth);

    // Stone slab
    var slab=new THREE.Mesh(new THREE.BoxGeometry(L+0.8,0.5,Wd+0.7),new THREE.MeshStandardMaterial({color:0x2a2622,roughness:1}));
    slab.position.y=-0.25; scene.add(slab);
    var floor=new THREE.Mesh(new THREE.PlaneGeometry(30,30),new THREE.MeshStandardMaterial({color:0x0d0f10,roughness:1}));
    floor.rotation.x=-Math.PI/2; floor.position.y=-0.5; scene.add(floor);

    // Lights
    var amb=new THREE.AmbientLight(0x8fa3b8,.18); scene.add(amb);
    var moon=new THREE.DirectionalLight(0x9fb3c8,.55); moon.position.set(-3,5,2); scene.add(moon);
    var glow=new THREE.PointLight(0xffe2a0,0,8,1.6); glow.position.set(0,0.15,0); scene.add(glow);
    var glow2=new THREE.PointLight(0xffe2a0,0,8,1.6); glow2.position.set(-1.2,0.2,0); scene.add(glow2);
    var glow3=new THREE.PointLight(0xffe2a0,0,8,1.6); glow3.position.set(1.2,0.15,0); scene.add(glow3);

    // Particles: collimated light rising from the body shape
    var PN=5200, pg=new THREE.BufferGeometry(), pp=new Float32Array(PN*3), seed=new Float32Array(PN*3);
    var cand=[]; for(var j=0;j<n;j++){if(base[j]>0.25)cand.push(j);} if(!cand.length)for(j=0;j<n;j++)cand.push(j);
    for(i=0;i<PN;i++){var v=cand[(Math.random()*cand.length)|0];seed[i*3]=rest[v*3];seed[i*3+1]=base[v]*lift;seed[i*3+2]=rest[v*3+2];seed[i*3+1]+=Math.random()*0.02;pp[i*3+1]=-10;}
    pg.setAttribute('position',new THREE.BufferAttribute(pp,3));
    var spr=document.createElement('canvas'); spr.width=spr.height=64; var sg=spr.getContext('2d'); var gr=sg.createRadialGradient(32,32,0,32,32,32);
    gr.addColorStop(0,'rgba(255,248,225,1)'); gr.addColorStop(.35,'rgba(255,225,160,.55)'); gr.addColorStop(1,'rgba(255,200,120,0)'); sg.fillStyle=gr; sg.fillRect(0,0,64,64);
    var pmat=new THREE.PointsMaterial({size:0.05,map:new THREE.CanvasTexture(spr),transparent:true,depthWrite:false,blending:THREE.AdditiveBlending,opacity:0});
    var pts=new THREE.Points(pg,pmat); scene.add(pts);
    var speeds=new Float32Array(PN); for(i=0;i<PN;i++)speeds[i]=0.6+Math.random()*1.8;

    // Timeline (seconds)
    var T=20, t=0, playing=false, last=0, started=false;
    var capTimes=[0,3,6.5,10,13.5,17];
    function frame(tt){
      // camera: slow move from low side angle to above
      var c=seg(tt,0,T);
      var ang=-0.9+c*0.9, rad=5.4-c*1.4, hy=1.2+c*3.2;
      cam.position.set(Math.sin(ang)*rad*0.55, hy, Math.cos(ang)*rad); cam.lookAt(0,0.05,0);
      // glow build and burst
      var g=seg(tt,3,6)*(1-seg(tt,10,12.5));
      var burst=seg(tt,6.2,7)*(1-seg(tt,7,9.5));
      glow.intensity=glow2.intensity=glow3.intensity=g*6+burst*30;
      clothMat.emissiveIntensity=g*0.35+burst*0.9;
      renderer.toneMappingExposure=1+burst*0.8;
      // particles rise straight up during the burst window
      var pa=seg(tt,6,7)*(1-seg(tt,9.5,11)); pmat.opacity=pa;
      var arr=pg.attributes.position.array;
      for(var i=0;i<PN;i++){var life=((tt-6)*speeds[i]+ (i%97)/97)%1.4;
        if(tt<6||pa<=0.001){arr[i*3+1]=-10;continue;}
        arr[i*3]=seed[i*3]; arr[i*3+2]=seed[i*3+2]; arr[i*3+1]=seed[i*3+1]+life*2.2;}
      pg.attributes.position.needsUpdate=true;
      // image forms on the cloth
      paint(seg(tt,7,11.5));
      // cloth falls flat
      drapeR(1-seg(tt,12.5,15.5));
      // caption
      var ci=0; for(var k=0;k<capTimes.length;k++)if(tt>=capTimes[k])ci=k;
      if(capEl&&caps[ci]!==capEl.dataset.cur){capEl.style.opacity=0;(function(txt){setTimeout(function(){capEl.textContent=txt||'';capEl.dataset.cur=txt;capEl.style.opacity=1;},350);})(caps[ci]);capEl.dataset.cur=caps[ci];}
      if(scrub)scrub.value=tt/T;
      renderer.render(scene,cam);
    }
    function loop(now){
      if(playing){if(!last)last=now;t+=(now-last)/1000;last=now;if(t>=T){t=T;playing=false;setBtn();}frame(t);}
      requestAnimationFrame(loop);
    }
    // UI
    var bar=document.createElement('div'); bar.className='viewer__ui';
    var play=document.createElement('button'); play.type='button'; play.className='tool';
    function setBtn(){play.textContent=playing?(ui.pause||'Pause'):(t>=T?(ui.replay||'Replay'):(ui.play||'Play'));}
    play.addEventListener('click',function(){if(t>=T)t=0;playing=!playing;last=0;setBtn();});
    var lab=document.createElement('label'); lab.innerHTML='<span>'+(ui.time||'Time')+'</span>';
    var scrub=document.createElement('input'); scrub.type='range'; scrub.min=0; scrub.max=1; scrub.step=0.001; scrub.value=0;
    scrub.addEventListener('input',function(){playing=false;t=parseFloat(scrub.value)*T;setBtn();frame(t);});
    lab.appendChild(scrub); bar.appendChild(play); bar.appendChild(lab); el.appendChild(bar);
    setBtn(); frame(0); requestAnimationFrame(loop);
    // autoplay once when scrolled into view (unless reduced motion)
    var reduce=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if(!reduce&&'IntersectionObserver' in window){var io=new IntersectionObserver(function(es){if(es[0].isIntersecting&&!started){started=true;playing=true;last=0;setBtn();io.disconnect();}},{threshold:.6});io.observe(el);}
    window.addEventListener('resize',function(){w=el.clientWidth;h=el.clientHeight;renderer.setSize(w,h);cam.aspect=w/h;cam.updateProjectionMatrix();frame(t);});
    var fb=el.querySelector('.viewer__fallback'); if(fb)fb.hidden=true;
  };
})();
