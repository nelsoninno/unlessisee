/* main.js: shared small interactions. No dependencies. */
(function(){
  'use strict';
  // Mobile menu
  var btn=document.querySelector('.menu-btn'), nav=document.querySelector('.nav');
  if(btn&&nav){btn.addEventListener('click',function(){var o=nav.classList.toggle('open');btn.setAttribute('aria-expanded',o?'true':'false');});}
  // Collapse the nav into the menu button when this language's labels do not fit on one line
  var head=document.querySelector('.site-head'), hw=head&&head.querySelector('.wrap');
  function fit(){if(!hw)return;head.classList.remove('compact');var cs=getComputedStyle(hw),room=hw.clientWidth-parseFloat(cs.paddingLeft)-parseFloat(cs.paddingRight),gap=parseFloat(cs.columnGap)||0,used=0,n=0;
    Array.prototype.forEach.call(hw.children,function(el){var w=el.offsetWidth;if(w){used+=w;n++;}});
    if(used+gap*Math.max(0,n-1)>room+1)head.classList.add('compact');}
  if(hw){fit();window.addEventListener('resize',fit);if(document.fonts&&document.fonts.ready)document.fonts.ready.then(fit);}

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
