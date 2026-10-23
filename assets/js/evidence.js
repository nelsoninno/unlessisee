/* evidence.js: filter the exhibits. */
(function(){
  'use strict';
  // ---------- Filters ----------
  var list=document.querySelector('.exhibits');
  if(list){
    var state={lean:'all',cat:'all'};
    var count=document.querySelector('[data-ex-count]');
    function run(){var shown=0;list.querySelectorAll('.exhibit').forEach(function(ex){
      var ok=(state.lean==='all'||ex.dataset.lean===state.lean)&&(state.cat==='all'||ex.dataset.cat===state.cat);
      ex.hidden=!ok; if(ok)shown++;});
      if(count)count.textContent=shown;}
    document.querySelectorAll('[data-filter]').forEach(function(b){
      b.addEventListener('click',function(){
        var g=b.dataset.filter; state[g]=b.dataset.value;
        document.querySelectorAll('[data-filter="'+g+'"]').forEach(function(o){o.setAttribute('aria-pressed',o===b?'true':'false');});
        run();
      });
    });
    var openAll=document.querySelector('[data-open-all]');
    if(openAll)openAll.addEventListener('click',function(){var any=list.querySelector('details:not([open])');list.querySelectorAll('details').forEach(function(d){d.open=!!any;});});
  }

})();
/* Case file: filter the "claims you will hear" by side, and highlight the section being read */
(function(){
  'use strict';
  var box=document.querySelector('.heards');
  if(box){
    document.querySelectorAll('[data-cfilter]').forEach(function(b){
      b.addEventListener('click',function(){
        var v=b.dataset.cfilter;
        document.querySelectorAll('[data-cfilter]').forEach(function(o){o.setAttribute('aria-pressed',o===b?'true':'false');});
        box.querySelectorAll('.heard').forEach(function(h){h.hidden=!(v==='all'||h.dataset.side===v);});
      });
    });
  }
  var jump=document.querySelector('.jump'); if(!jump||!('IntersectionObserver' in window))return;
  var links=[].slice.call(jump.querySelectorAll('[data-jump]'));
  function on(id){links.forEach(function(a){a.classList.toggle('is-on',a.dataset.jump===id);});}
  var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting)on(e.target.id);});},{rootMargin:'-40% 0px -55% 0px'});
  links.forEach(function(a){var t=document.getElementById(a.dataset.jump); if(t)io.observe(t); a.addEventListener('click',function(){on(a.dataset.jump);});});
  // A link to an exhibit from a claim: make sure the exhibit is visible even if a filter hid it
  document.querySelectorAll('.heard__see a').forEach(function(a){a.addEventListener('click',function(){var t=document.getElementById(a.getAttribute('href').slice(1)); if(t&&t.hidden){document.querySelectorAll('[data-filter][data-value="all"]').forEach(function(b){b.click();});}});});
})();
