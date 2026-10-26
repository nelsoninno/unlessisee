/* Light hypothesis video: loads when near, loops muted, pauses off-screen, highlights the step being shown */
function initLightVideo(fig){
  'use strict';
  var v=fig.querySelector('video'), btn=fig.querySelector('.lightvid__toggle'), steps=[].slice.call(fig.querySelectorAll('.lightvid__steps li'));
  var times=JSON.parse(fig.getAttribute('data-steps')||'[]'), L=JSON.parse(btn.getAttribute('data-labels'));
  var reduce=window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches, wanted=!reduce, visible=true;
  [].forEach.call(v.querySelectorAll('source[data-src]'),function(s){s.src=s.getAttribute('data-src');});
  v.load();
  function label(){var p=v.paused;btn.textContent=p?L.play:L.pause;btn.setAttribute('aria-pressed',p?'false':'true');}
  function go(){if(wanted&&visible){var pr=v.play();if(pr&&pr.catch)pr.catch(function(){wanted=false;label();});}else v.pause();}
  btn.addEventListener('click',function(){wanted=v.paused;go();});
  v.addEventListener('play',label);v.addEventListener('pause',label);
  v.addEventListener('timeupdate',function(){var t=v.currentTime,k=0;for(var i=0;i<times.length;i++)if(t>=times[i])k=i;steps.forEach(function(li,i){li.classList.toggle('is-on',i===k);});});
  if('IntersectionObserver' in window)new IntersectionObserver(function(es){visible=es[0].isIntersecting;go();},{threshold:.25}).observe(v);
  label();go();
}
