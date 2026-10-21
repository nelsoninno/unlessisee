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
