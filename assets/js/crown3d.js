/* crown3d.js: our cap of thorns, turnable all the way round. Compact binary: quantized positions, vertex colors, uint16 indices. */
(function(){
  'use strict';
  window.initCrown3D=function(el){
    var THREE=window.THREE; if(!THREE)throw new Error('three missing');
    var base=el.getAttribute('data-base'), w=el.clientWidth, h=el.clientHeight;
    var r=new THREE.WebGLRenderer({antialias:true}); r.setPixelRatio(Math.min(2,window.devicePixelRatio||1)); r.setSize(w,h); r.outputColorSpace=THREE.SRGBColorSpace;
    el.insertBefore(r.domElement,el.firstChild);
    var s=new THREE.Scene(); s.background=new THREE.Color(0xe8edf2);
    var cam=new THREE.PerspectiveCamera(30,w/h,0.01,10);
    s.add(new THREE.HemisphereLight(0xffffff,0x8a7a66,1.3)); var k=new THREE.DirectionalLight(0xfff2de,1.8); k.position.set(-.6,1,.8); s.add(k);
    var g=new THREE.Group(); s.add(g); var needs=true;
    Promise.all([fetch(base+'.json').then(function(x){return x.json();}),fetch(base+'.bin').then(function(x){return x.arrayBuffer();})]).then(function(a){
      var M=a[0],buf=a[1],nv=M.nv,nf=M.nf,q=new Uint16Array(buf,0,nv*3),c8=new Uint8Array(buf,nv*6,nv*3),idx=new Uint16Array(buf.slice(nv*9+M.pad,nv*9+M.pad+nf*6));
      var pos=new Float32Array(nv*3),col=new Float32Array(nv*3);
      for(var i=0;i<nv;i++)for(var j=0;j<3;j++){pos[i*3+j]=M.lo[j]+q[i*3+j]/65535*(M.hi[j]-M.lo[j]);col[i*3+j]=Math.pow(c8[i*3+j]/255,2.2);}
      var geo=new THREE.BufferGeometry(); geo.setAttribute('position',new THREE.BufferAttribute(pos,3)); geo.setAttribute('color',new THREE.BufferAttribute(col,3)); geo.setIndex(new THREE.BufferAttribute(idx,1)); geo.computeVertexNormals();
      var m=new THREE.Mesh(geo,new THREE.MeshStandardMaterial({vertexColors:true,roughness:.8})); m.rotation.x=-Math.PI/2; m.position.y=-0.03; g.add(m);
      el.classList.add('is-ready'); needs=true;
    }).catch(function(e){console.error(e);var fb=el.querySelector('.viewer__fallback');if(fb)fb.hidden=false;});
    var yaw=0.6,pitch=0.35,R=0.46,auto=true,drag=null,t0=performance.now();
    function place(){cam.position.set(Math.sin(yaw)*R*Math.cos(pitch),R*Math.sin(pitch),Math.cos(yaw)*R*Math.cos(pitch));cam.lookAt(0,0.0,0);needs=true;}
    place();
    (function loop(t){if(auto&&!document.hidden){yaw=0.6+(t-t0)/9000;place();}if(needs){r.render(s,cam);needs=false;}requestAnimationFrame(loop);})(t0);
    el.addEventListener('pointerdown',function(e){auto=false;drag={x:e.clientX,y:e.clientY};el.setPointerCapture(e.pointerId);});
    el.addEventListener('pointermove',function(e){if(!drag)return;yaw-=(e.clientX-drag.x)*0.01;pitch=Math.max(-0.5,Math.min(1.35,pitch+(e.clientY-drag.y)*0.006));drag={x:e.clientX,y:e.clientY};place();});
    el.addEventListener('pointerup',function(){drag=null;}); el.addEventListener('pointercancel',function(){drag=null;});
    window.addEventListener('resize',function(){w=el.clientWidth;h=el.clientHeight;r.setSize(w,h);cam.aspect=w/h;cam.updateProjectionMatrix();needs=true;});
  };
})();
/* forearm overlay toggle */
(function(){document.querySelectorAll('[data-ov-toggle]').forEach(function(b){var t=document.getElementById(b.getAttribute('aria-controls')),L=JSON.parse(b.getAttribute('data-labels'));
  b.addEventListener('click',function(){var on=b.getAttribute('aria-pressed')!=='true';b.setAttribute('aria-pressed',on?'true':'false');t.classList.toggle('on',on);b.textContent=on?L[1]:L[0];});});})();
