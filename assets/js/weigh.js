/* weigh.js: "Weigh it yourself". Each point gets one of five answers; the bar shows which side
   your own answers favor. Agreeing adds the point's weight to its side; disagreeing adds it to the other side. */
(function(){
  'use strict';
  var root=document.querySelector('.weigh2'); if(!root)return;
  var UI=JSON.parse(root.getAttribute('data-weigh')||'{}');
  var KEY='unlessisee-weigh-v1', ans={};
  try{ans=JSON.parse(localStorage.getItem(KEY)||'{}')||{};}catch(e){ans={};}
  function save(){try{localStorage.setItem(KEY,JSON.stringify(ans));}catch(e){}}
  var claims=[].slice.call(root.querySelectorAll('.claim'));
  var bars=document.querySelectorAll('[data-bar]');
  var pf=root.querySelector('[data-pct-for]'), pa=root.querySelector('[data-pct-against]');
  var vt=root.querySelector('[data-verdict]'), an=root.querySelector('[data-answered]');
  var strong=root.querySelector('[data-strong]'), strongText=root.querySelector('[data-strong-text]');
  var mini=document.querySelector('.verdict-mini'), miniTxt=mini&&mini.querySelector('[data-mini]');

  function mark(cl){
    var v=ans[cl.dataset.id];
    cl.querySelectorAll('[data-v]').forEach(function(b){b.setAttribute('aria-pressed',(v!==undefined&&parseFloat(b.dataset.v)===v)?'true':'false');});
    cl.classList.toggle('is-answered',v!==undefined);
  }
  claims.forEach(function(cl){
    cl.querySelectorAll('[data-v]').forEach(function(b){
      b.addEventListener('click',function(){
        var id=cl.dataset.id, v=parseFloat(b.dataset.v);
        if(ans[id]===v)delete ans[id]; else ans[id]=v;
        save(); mark(cl);
        var d=cl.querySelector('details'); if(d&&ans[id]!==undefined)d.open=true;
        calc();
      });
    });
    mark(cl);
  });

  function calc(){
    var F=0,A=0,n=0,parts=[];
    claims.forEach(function(cl){
      var v=ans[cl.dataset.id]; if(v===undefined)return; n++;
      var x=v*parseFloat(cl.dataset.w), side=cl.dataset.side, to=x>=0?side:(side==='for'?'against':'for'), amt=Math.abs(x);
      if(to==='for')F+=amt; else A+=amt;
      if(amt>0)parts.push({to:to,amt:amt,cl:cl,v:v});
    });
    var tot=F+A, p=tot>0?F/tot:0.5, pct=Math.round(p*100);
    bars.forEach(function(b){b.style.width=(p*100)+'%';});
    root.classList.toggle('is-empty',tot<=0);
    if(pf)pf.textContent=pct+'%'; if(pa)pa.textContent=(100-pct)+'%';
    var k=tot<=0?'none':(p>=0.6?'for':(p<=0.4?'against':'close'));
    vt.textContent=UI.verdict[k]; vt.dataset.k=k;
    an.textContent=UI.answered.replace('{n}',n).replace('{t}',UI.total);
    var best=null; parts.forEach(function(x){if((k==='for'||k==='against')&&x.to===k&&(!best||x.amt>best.amt))best=x;});
    if(best){
      var lab=best.cl.querySelector('[aria-pressed="true"]'), txt=best.cl.querySelector('.claim__text');
      strongText.textContent=(lab?'"'+lab.textContent+'": ':'')+(txt?txt.textContent:'');
      strong.hidden=false;
    } else strong.hidden=true;
    if(miniTxt)miniTxt.textContent=tot>0?(pct+'% / '+(100-pct)+'%'):UI.verdict.none;
  }
  // Viewpoint buttons: fill in a whole set of answers at once
  var pbtns=[].slice.call(root.querySelectorAll('[data-preset]'));
  function markPreset(k){pbtns.forEach(function(b){b.setAttribute('aria-pressed',b.dataset.preset===k?'true':'false');});}
  pbtns.forEach(function(b){b.addEventListener('click',function(){
    var set=(UI.presets||{})[b.dataset.preset]; if(!set)return;
    ans={}; Object.keys(set).forEach(function(id){ans[id]=set[id];});
    save(); claims.forEach(mark); markPreset(b.dataset.preset); calc();
    var v=document.getElementById('verdict'); if(v&&window.innerWidth<=900)v.scrollIntoView({behavior:'smooth',block:'start'});
  });});
  claims.forEach(function(cl){cl.querySelectorAll('[data-v]').forEach(function(x){x.addEventListener('click',function(){markPreset(null);});});});
  var reset=root.querySelector('[data-reset]');
  if(reset)reset.addEventListener('click',function(){ans={};markPreset(null);save();claims.forEach(function(cl){mark(cl);var d=cl.querySelector('details');if(d)d.open=false;});calc();});

  // Small result bar pinned to the bottom on phones while the list is on screen
  if(mini&&'IntersectionObserver' in window){
    var listIn=false, verdictIn=false, list=root.querySelector('.claims'), vEl=document.getElementById('verdict');
    function upd(){mini.hidden=!(listIn&&!verdictIn&&window.innerWidth<=900);}
    new IntersectionObserver(function(es){listIn=es[0].isIntersecting;upd();}).observe(list);
    new IntersectionObserver(function(es){verdictIn=es[0].isIntersecting;upd();}).observe(vEl);
    window.addEventListener('resize',upd);
  }
  calc();
})();
