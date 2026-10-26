/* figure3d.js: the artistic interpretation in 3D, standing in front of the 1931 photograph of the front image.
   The model is a compact binary (quantized positions and texture coordinates, triangle indices). Requires three.min.js. */
(function(){
  'use strict';
  window.initFigure3D=function(el){
    var THREE=window.THREE; if(!THREE)throw new Error('three missing');
    var base=el.getAttribute('data-base'), bg=el.getAttribute('data-bg'), place=JSON.parse(el.getAttribute('data-place'));
    var w=el.clientWidth,h=el.clientHeight;
    var renderer=new THREE.WebGLRenderer({antialias:true});
    renderer.setPixelRatio(Math.min(2,window.devicePixelRatio||1)); renderer.setSize(w,h); renderer.outputColorSpace=THREE.SRGBColorSpace;
    el.insertBefore(renderer.domElement,el.firstChild);
    var scene=new THREE.Scene(); scene.background=new THREE.Color(0xe8edf2);
    var cam=new THREE.PerspectiveCamera(30,w/h,0.05,50);
    scene.add(new THREE.HemisphereLight(0xffffff,0x8a7a66,1.15));
    var key=new THREE.DirectionalLight(0xffffff,1.6); key.position.set(-1.2,2,2.2); scene.add(key);
    var group=new THREE.Group(); scene.add(group);
    var loader=new THREE.TextureLoader(), needs=true;
    function render(){needs=true;}
    Promise.all([fetch(base+'.json').then(function(r){return r.json();}),fetch(base+'.bin').then(function(r){return r.arrayBuffer();})]).then(function(a){
      var M=a[0],buf=a[1],nv=M.nv,nf=M.nf;
      var q=new Uint16Array(buf,0,nv*3), uq=new Uint16Array(buf,nv*6,nv*2), idx=new Uint32Array(buf.slice(nv*10,nv*10+nf*12));
      var pos=new Float32Array(nv*3),uv=new Float32Array(nv*2);
      for(var i=0;i<nv;i++){for(var k=0;k<3;k++)pos[i*3+k]=M.lo[k]+q[i*3+k]/65535*(M.hi[k]-M.lo[k]);uv[i*2]=uq[i*2]/65535;uv[i*2+1]=uq[i*2+1]/65535;}
      var g=new THREE.BufferGeometry(); g.setAttribute('position',new THREE.BufferAttribute(pos,3)); g.setAttribute('uv',new THREE.BufferAttribute(uv,2)); g.setIndex(new THREE.BufferAttribute(idx,1)); g.computeVertexNormals();
      var tex=loader.load(base+'-tex.webp',render); tex.colorSpace=THREE.SRGBColorSpace; tex.anisotropy=4;
      var fig=new THREE.Mesh(g,new THREE.MeshStandardMaterial({map:tex,roughness:.72,metalness:0}));
      var H=M.hi[1]-M.lo[1]; fig.position.y=-H/2; group.add(fig);
      // the photograph behind, scaled so the figure covers the same part of the cloth as in the slider above
      var ph=H/place.height, pw=ph*place.aspect;
      var bgt=loader.load(bg,render); bgt.colorSpace=THREE.SRGBColorSpace; bgt.wrapS=THREE.RepeatWrapping; bgt.repeat.x=-1; bgt.offset.x=1; // mirrored, like the cloth's image of the body
      var plane=new THREE.Mesh(new THREE.PlaneGeometry(pw,ph),new THREE.MeshBasicMaterial({map:bgt}));
      // figure spans y in [-H/2, H/2]; on the photo it spans [top, top+height] of the height, measured from the top
      var yTopPhoto=H/2+place.top*ph, cy=yTopPhoto-ph/2;
      plane.position.set((0.5-(place.left+place.width/2))*pw, cy, -(M.hi[2]-M.lo[2])*0.62);
      group.add(plane);
      dist=(ph/2)/Math.tan(15*Math.PI/180)*1.06; placeCam(); el.classList.add('is-ready'); render();
    }).catch(function(e){console.error(e);var fb=el.querySelector('.viewer__fallback');if(fb)fb.hidden=false;});
    var YAW=1.1,yaw=0,pitch=-0.05,dist=3,auto=true,drag=null,t0=performance.now();
    function placeCam(){group.rotation.set(pitch,yaw,0);cam.position.set(0,0,dist);cam.lookAt(0,0,0);render();}
    (function loop(t){if(auto&&!document.hidden){yaw=0.32*Math.sin((t-t0)/3600);placeCam();}if(needs){renderer.render(scene,cam);needs=false;}requestAnimationFrame(loop);})(t0);
    el.addEventListener('pointerdown',function(e){auto=false;drag={x:e.clientX,y:e.clientY};el.setPointerCapture(e.pointerId);});
    el.addEventListener('pointermove',function(e){if(!drag)return;yaw=Math.max(-YAW,Math.min(YAW,yaw+(e.clientX-drag.x)*0.008));pitch=Math.max(-0.35,Math.min(0.2,pitch+(e.clientY-drag.y)*0.004));drag={x:e.clientX,y:e.clientY};placeCam();});
    el.addEventListener('pointerup',function(){drag=null;}); el.addEventListener('pointercancel',function(){drag=null;});
    window.addEventListener('resize',function(){var W=el.clientWidth,Hh=el.clientHeight;renderer.setSize(W,Hh);cam.aspect=W/Hh;cam.updateProjectionMatrix();render();});
  };
})();
/* overlay slider: fade the interpretation over the photograph */
(function(){
  document.querySelectorAll('[data-art-fade]').forEach(function(r){
    var fig=r.closest('.art').querySelector('.art__fig');
    function set(v){fig.style.opacity=v/100;r.value=v;}
    r.addEventListener('input',function(){set(+r.value);});
    r.closest('.art').querySelectorAll('[data-art-set]').forEach(function(b){b.addEventListener('click',function(){set(+b.dataset.artSet);});});
    set(+r.value);
  });
})();
