/* hero.js: the developing plate. The face starts as the faint positive (what the eye sees).
   On load the negative "develops" once, then the visitor uses a lens to look through the plate. */
(function(){
  'use strict';
  var face=document.querySelector('.hero__face');
  if(!face)return;
  var reduce=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var hint=face.querySelector('.hero__hint');
  var R=Math.round(face.clientWidth*0.26);
  function set(x,y,r){face.style.setProperty('--x',x);face.style.setProperty('--y',y);face.style.setProperty('--r',r+'px');}
  var big=Math.hypot(face.clientWidth,face.clientHeight);
  // Opening sequence: the plate develops fully, holds, then fades back to the faint positive
  set('50%','38%',0);
  if(!reduce){
    face.classList.add('developing');
    setTimeout(function(){set('50%','38%',big);},700);
    setTimeout(function(){set('50%','38%',0);},4600);
    setTimeout(function(){face.classList.remove('developing');},7100);
  }
  var touching=false;
  function move(e){
    var r=face.getBoundingClientRect();
    var x=e.clientX-r.left, y=e.clientY-r.top;
    face.classList.remove('developing');
    set(x+'px',y+'px',R);face.style.setProperty('--ro',1);
    if(hint)hint.style.opacity=0;
  }
  face.addEventListener('pointermove',function(e){if(e.pointerType==='mouse'||touching)move(e);});
  face.addEventListener('pointerdown',function(e){touching=true;R=Math.round(face.clientWidth*0.3);move(e);});
  window.addEventListener('pointerup',function(){if(touching){touching=false;}});
  face.addEventListener('pointerleave',function(e){if(e.pointerType==='mouse'){set(face.style.getPropertyValue('--x'),face.style.getPropertyValue('--y'),0);face.style.setProperty('--ro',0);}});
  // Keyboard: toggle the full negative
  face.addEventListener('keydown',function(e){if(e.key==='Enter'||e.key===' '){e.preventDefault();var on=face.dataset.on!=='1';face.dataset.on=on?'1':'0';face.classList.add('developing');set('50%','40%',on?big:0);}});
})();
