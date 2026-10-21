/* hero.js: the developing plate. The face starts as the faint positive (what the eye sees),
   then "develops" into the negative, as Secondo Pia's plate did in 1898. Afterwards a lens lets
   the visitor look back at the cloth as the eye sees it. */
(function(){
  'use strict';
  var face=document.querySelector('.hero__face');
  if(!face)return;
  var reduce=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var base=face.querySelector('.pos'), lens=face.querySelector('.neg'), hint=face.querySelector('.hero__hint');
  var posSrc=base.getAttribute('src'), negSrc=lens.getAttribute('src');
  var R=Math.round(face.clientWidth*0.26), big=Math.hypot(face.clientWidth,face.clientHeight);
  var developed=false;
  function set(x,y,r){face.style.setProperty('--x',x);face.style.setProperty('--y',y);face.style.setProperty('--r',r+'px');}
  function finish(){ // the negative becomes the base; the lens now shows the positive
    developed=true; face.classList.remove('developing');
    base.src=negSrc; base.classList.remove('pos'); base.classList.add('as-neg');
    set('50%','38%',0);
    setTimeout(function(){lens.src=posSrc; lens.classList.add('as-pos');},200);
    if(hint)hint.textContent=face.getAttribute('data-hint2')||hint.textContent;
  }
  set('50%','38%',0);
  if(reduce){finish();}
  else{
    face.classList.add('developing');
    setTimeout(function(){set('50%','38%',big);},900);
    setTimeout(finish,4200);
  }
  var touching=false;
  function move(e){
    if(!developed)return;
    var r=face.getBoundingClientRect();
    set((e.clientX-r.left)+'px',(e.clientY-r.top)+'px',R);face.style.setProperty('--ro',1);
  }
  face.addEventListener('pointermove',function(e){if(e.pointerType==='mouse'||touching)move(e);});
  face.addEventListener('pointerdown',function(e){touching=true;R=Math.round(face.clientWidth*0.3);move(e);});
  window.addEventListener('pointerup',function(){touching=false;});
  face.addEventListener('pointerleave',function(e){if(e.pointerType==='mouse'){set(face.style.getPropertyValue('--x'),face.style.getPropertyValue('--y'),0);face.style.setProperty('--ro',0);}});
  face.addEventListener('keydown',function(e){if((e.key==='Enter'||e.key===' ')&&developed){e.preventDefault();var on=face.dataset.on!=='1';face.dataset.on=on?'1':'0';face.classList.add('developing');set('50%','40%',on?big:0);}});
})();
