/* Light hypothesis video: loads when near, plays by itself when it scrolls into view (muted, looping),
   pauses off-screen, big play button whenever it is paused, highlights the step being shown */
function initLightVideo(fig){
  'use strict';
  var v=fig.querySelector('video'), btn=fig.querySelector('.lightvid__toggle'), big=fig.querySelector('.lightvid__big'),
      steps=[].slice.call(fig.querySelectorAll('.lightvid__steps li'));
  var times=JSON.parse(fig.getAttribute('data-steps')||'[]'), L=JSON.parse(btn.getAttribute('data-labels'));
  var reduce=window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches, wanted=!reduce, visible=false;
  [].forEach.call(v.querySelectorAll('source[data-src]'),function(s){s.src=s.getAttribute('data-src');});
  v.muted=true; v.load();
  function label(){var p=v.paused;fig.classList.toggle('is-paused',p);btn.textContent=p?L.play:L.pause;btn.setAttribute('aria-pressed',p?'false':'true');}
  function go(){if(wanted&&visible){var pr=v.play();if(pr&&pr.catch)pr.catch(function(){wanted=false;label();});}else if(!v.paused)v.pause();}
  function toggle(){wanted=v.paused;if(wanted)visible=true;go();}
  btn.addEventListener('click',toggle); big.addEventListener('click',toggle); v.addEventListener('click',toggle);
  v.addEventListener('play',label);v.addEventListener('pause',label);
  v.addEventListener('timeupdate',function(){var t=v.currentTime,k=0;for(var i=0;i<times.length;i++)if(t>=times[i])k=i;steps.forEach(function(li,i){li.classList.toggle('is-on',i===k);});});
  if('IntersectionObserver' in window)new IntersectionObserver(function(es){visible=es[0].isIntersecting;go();},{threshold:.35}).observe(v);
  else visible=true;
  label();go();
}
