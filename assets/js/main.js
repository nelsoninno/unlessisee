/* main.js: shared small interactions. No dependencies. */
(function(){
  'use strict';
  // Mobile menu
  var btn=document.querySelector('.menu-btn'), nav=document.querySelector('.nav');
  if(btn&&nav){btn.addEventListener('click',function(){var o=nav.classList.toggle('open');btn.setAttribute('aria-expanded',o?'true':'false');});}

  // Compare sliders (positive / negative)
  document.querySelectorAll('.compare').forEach(function(c){
    var input=c.querySelector('input[type=range]');
    if(!input)return;
    var set=function(){c.style.setProperty('--pos',input.value+'%');};
    input.addEventListener('input',set);set();
  });

  // Year in footer
  document.querySelectorAll('[data-year]').forEach(function(e){e.textContent=new Date().getFullYear();});

  // Lazy start for heavy viewers: anything with data-lazy-init="fnName" starts when near the viewport
  var lazy=document.querySelectorAll('[data-lazy-init]');
  if(lazy.length){
    var start=function(el){var fn=window[el.getAttribute('data-lazy-init')];if(typeof fn==='function'&&!el.__started){el.__started=true;try{fn(el);}catch(e){console.error(e);var fb=el.querySelector('.viewer__fallback');if(fb)fb.hidden=false;}}};
    if('IntersectionObserver' in window){
      var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){start(e.target);io.unobserve(e.target);}});},{rootMargin:'300px'});
      lazy.forEach(function(el){io.observe(el);});
    } else lazy.forEach(start);
  }
})();
