/* evidence.js: filter the exhibits, and the "weigh it yourself" odds calculator. */
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

  // ---------- Weigh it yourself ----------
  var W=document.getElementById('weigh-data'); if(!W)return;
  var D=JSON.parse(W.textContent);
  var box=document.querySelector('.weigh__list'), big=document.querySelector('[data-post]'), odds=document.querySelector('[data-odds]'), beam=document.querySelector('[data-beam]');
  var priorIn=document.querySelector('[data-prior]'), priorOut=document.querySelector('[data-prior-out]');
  function lrText(v){ // v = log10 likelihood ratio
    if(Math.abs(v)<0.05)return D.ui.noEffect;
    var r=Math.pow(10,Math.abs(v)); var s=(r>=10?Math.round(r):Math.round(r*10)/10);
    return (v>0?D.ui.favorsA:D.ui.favorsM).replace('{x}',s);
  }
  var inputs=[];
  D.items.forEach(function(it){
    var row=document.createElement('div'); row.className='weigh__row';
    var id='w-'+it.id;
    row.innerHTML='<div><label for="'+id+'">'+it.label+'</label><output for="'+id+'"></output></div>';
    var r=document.createElement('input'); r.type='range'; r.id=id; r.min=-3; r.max=3; r.step=0.1; r.value=0;
    r.setAttribute('aria-describedby',id+'-o');
    var out=row.querySelector('output'); out.id=id+'-o';
    r.addEventListener('input',function(){out.textContent=lrText(parseFloat(r.value));calc();});
    row.appendChild(r); box.appendChild(row); inputs.push({it:it,r:r,out:out});
    out.textContent=lrText(0);
  });
  function fmtProb(p){
    if(p>0.999)return '>99.9%'; if(p<0.001)return '<0.1%';
    return (p*100).toFixed(p<0.1?1:0)+'%';
  }
  function fmtOdds(l){ // log10 odds
    if(l>=0){var x=Math.pow(10,l);return D.ui.oddsFor.replace('{x}',x>=1e6?x.toExponential(1):Math.round(x).toLocaleString());}
    var y=Math.pow(10,-l);return D.ui.oddsAgainst.replace('{x}',y>=1e6?y.toExponential(1):Math.round(y).toLocaleString());
  }
  function calc(){
    var pl=parseFloat(priorIn.value); // log10 prior odds
    priorOut.textContent=fmtOdds(pl);
    var sum=pl; inputs.forEach(function(x){sum+=parseFloat(x.r.value);});
    var p=1/(1+Math.pow(10,-sum));
    big.textContent=fmtProb(p); odds.textContent=fmtOdds(sum);
    if(beam){var a=Math.max(-14,Math.min(14,(p-0.5)*28));beam.setAttribute('transform','rotate('+(-a)+' 160 60)');}
  }
  priorIn.addEventListener('input',calc);
  document.querySelectorAll('[data-preset]').forEach(function(b){
    b.addEventListener('click',function(){
      var k=b.dataset.preset;
      priorIn.value=k==='neutral'?D.prior.neutral:D.prior[k];
      inputs.forEach(function(x){x.r.value=k==='neutral'?0:(x.it[k]||0);x.out.textContent=lrText(parseFloat(x.r.value));});
      calc();
    });
  });
  priorIn.value=D.prior.neutral; calc();
})();
