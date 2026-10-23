// pages.mjs: one render function per page. Copy comes from content/<lang>.mjs, facts from data/<lang>/*.json.
import { layout, esc, attr, json, CONFIG } from './build.mjs';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
const DATA = path.join(path.dirname(fileURLToPath(import.meta.url)), 'data');
const readJ = (f, fb) => { try { return JSON.parse(fs.readFileSync(path.join(DATA, f), 'utf8')); } catch (e) { return fb; } };

const IMG = 'assets/images/';
const strengthN = { strong: 4, moderate: 3, disputed: 2, weak: 1, debunked: 0 };
const leanOf = it => it.lean || (String(it.id).startsWith('against') ? 'against' : 'for');

function srcList(sources) {
  if (!sources || !sources.length) return '';
  return `<p class="sources">${sources.map(s => `<a href="${attr(s.url)}" target="_blank" rel="noopener">${esc(s.label)}</a>`).join(' &middot; ')}</p>`;
}
function meter(c, s) { const n = strengthN[s] || 0; return `<span class="meter" data-s="${n}" title="${attr(c.strength[s] || s)}"><i></i><i></i><i></i><i></i> ${esc(c.strength[s] || s)}</span>`; }

function pageHead(ctx, p, extra = '') {
  return `<section class="linen"><div class="wrap page-head">
<h1>${p.h1}</h1>
${p.lede ? `<p class="lede">${p.lede}</p>` : ''}
${extra}
</div></section>`;
}

function siteGraph(ctx, page, p, extraNodes = []) {
  const base = `https://${CONFIG.domain}/`;
  return {
    '@context': 'https://schema.org',
    '@graph': [
      { '@type': 'Organization', '@id': base + '#org', name: 'Unless I See', alternateName: ['Hasta que no vea', 'UnlessISee', 'See the Shroud'], url: base,
        logo: base + 'android-chrome-512x512.png', description: ctx.L.copy.orgDescription,
        founder: { '@type': 'Person', name: 'Nelson Inno', url: 'https://nelsoninno.com' }, knowsLanguage: CONFIG.langs.map(l => l.code),
        knowsAbout: ['Shroud of Turin', 'Shroud of Jesus', 'Holy Shroud', 'Sindonology', 'Radiocarbon dating of the Shroud of Turin', 'Image formation on the Shroud of Turin', 'Evidence for and against the authenticity of the Shroud of Turin', 'Christian apologetics'] },
      { '@type': 'WebSite', '@id': base + '#website', url: base, name: ctx.L.copy.brand, alternateName: ['Unless I See', 'Hasta que no vea', 'See the Shroud', 'Shroud of Turin: the evidence for and against'], description: ctx.L.copy.orgDescription, keywords: ctx.L.copy.keywords, isAccessibleForFree: true, inLanguage: CONFIG.langs.map(l => l.code), publisher: { '@id': base + '#org' }, about: { '@id': base + '#shroud' } },
      { '@type': 'Thing', '@id': base + '#shroud', name: 'Shroud of Turin', alternateName: ['Turin Shroud', 'Holy Shroud', 'Shroud of Jesus', 'Sábana Santa de Turín', 'Sindone di Torino'], sameAs: ['https://en.wikipedia.org/wiki/Shroud_of_Turin', 'https://www.wikidata.org/wiki/Q150401'] },
      { '@type': page.slug === 'index' ? 'WebPage' : (page.schemaType || 'WebPage'), '@id': ctx.abs(page.slug) + '#page', url: ctx.abs(page.slug), name: p.title, description: p.description,
        inLanguage: ctx.lang, isPartOf: { '@id': base + '#website' }, keywords: ctx.L.copy.keywords, isAccessibleForFree: true,
        about: [{ '@id': base + '#shroud' }, { '@type': 'Person', name: 'Jesus', sameAs: 'https://www.wikidata.org/wiki/Q302' }] },
      ...extraNodes
    ]
  };
}

// ---------- shared figures ----------
function scaleFigure(c, ctx) {
  const f = IMG + 'shroud/cloth-';
  return `<figure class="fold-fig"><div class="fold" data-folded="false">
  <div class="fold__half fold__front"><img src="${ctx.asset(f + 'front-half-shroud-of-turin-seetheshroud.org.webp')}" alt="${attr(c.foldFrontAlt)}" loading="lazy" width="1400" height="710"><span class="fold__tag">${esc(c.scaleFront)}</span><span class="fold__backside" aria-hidden="true"></span></div>
  <div class="fold__half fold__back"><img src="${ctx.asset(f + 'back-half-shroud-of-turin-seetheshroud.org.webp')}" alt="${attr(c.foldBackAlt)}" loading="lazy" width="1400" height="710"><span class="fold__tag">${esc(c.scaleBack)}</span></div>
  <span class="fold__axis" aria-hidden="true"></span>
</div>
<div class="fold__dims meta"><span>${esc(c.scaleLen)}</span><span>${esc(c.scaleWid)}</span></div>
<div class="btn-row" style="margin-top:1rem"><button class="btn" type="button" data-fold data-labels='${attr(JSON.stringify([c.foldBtn, c.unfoldBtn]))}'>${esc(c.foldBtn)}</button></div>
<figcaption>${c.scaleCaption}</figcaption></figure>`;
}

// Powers of ten: from the whole cloth to the colored layer of one fiber
function powers(ctx, c) {
  const P = c.powers;
  const svgs = [
    `<img src="${ctx.asset(IMG + 'shroud/full-cloth-shroud-of-turin-seetheshroud.org.webp')}" alt="" style="width:100%;height:auto;border-radius:8px">`,
    `<img src="${ctx.asset(IMG + 'hero/face-positive-shroud-of-turin-seetheshroud.org.webp')}" alt="" style="max-height:100%;width:auto;margin:0 auto;border-radius:8px">`,
    `<svg viewBox="0 0 400 260" aria-hidden="true"><defs><linearGradient id="th" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="var(--linen-deep)"/><stop offset=".5" stop-color="var(--white)"/><stop offset="1" stop-color="var(--linen-edge)"/></linearGradient></defs>${Array.from({length: 7}, (_, i) => `<path d="M0 ${70 + i * 18} C 100 ${55 + i * 18}, 300 ${85 + i * 18}, 400 ${70 + i * 18}" stroke="url(#th)" stroke-width="16" fill="none"/><path d="M0 ${70 + i * 18} C 100 ${55 + i * 18}, 300 ${85 + i * 18}, 400 ${70 + i * 18}" stroke="var(--linen-edge)" stroke-width="1" fill="none"/>`).join('')}<path d="M0 124 C 100 109, 300 139, 400 124" stroke="var(--sepia)" stroke-width="16" fill="none" opacity=".35"/></svg>`,
    `<svg viewBox="0 0 400 260" aria-hidden="true">${Array.from({length: 26}, (_, i) => { const y = 40 + (i % 13) * 14 + (i > 12 ? 7 : 0); const top = i % 13 < 3; return `<rect x="${i > 12 ? 30 : 10}" y="${y}" width="${i > 12 ? 360 : 380}" height="10" rx="5" fill="${top ? 'var(--light)' : 'var(--linen-deep)'}" stroke="var(--linen-edge)"/>`; }).join('')}<text x="200" y="250" text-anchor="middle" font-size="12" fill="var(--ink-soft)">${esc(P.fiberNote)}</text></svg>`,
    `<svg viewBox="0 0 400 260" aria-hidden="true"><circle cx="200" cy="130" r="105" fill="var(--linen-deep)" stroke="var(--linen-edge)" stroke-width="2"/><circle cx="200" cy="130" r="105" fill="none" stroke="var(--sepia)" stroke-width="4"/><circle cx="200" cy="130" r="22" fill="var(--white)" stroke="var(--linen-edge)"/><line x1="290" y1="70" x2="350" y2="35" stroke="var(--ink-soft)"/><text x="352" y="32" font-size="12" fill="var(--ink)">${esc(P.layerLabel)}</text><text x="200" y="134" text-anchor="middle" font-size="11" fill="var(--ink-soft)">${esc(P.lumen)}</text></svg>`
  ];
  return `<div class="powers" data-step="0">
  <div class="powers__stage">${P.steps.map((st, i) => `<div class="powers__frame" data-i="${i}"${i ? ' hidden' : ''}>${svgs[i]}</div>`).join('')}</div>
  <div class="powers__side">
    <p class="powers__size" aria-live="polite">${esc(P.steps[0].size)}</p>
    ${P.steps.map((st, i) => `<div class="powers__text" data-i="${i}"${i ? ' hidden' : ''}><h3>${esc(st.title)}</h3><p>${st.text}</p></div>`).join('')}
    <label class="sr" for="powers-range">${esc(P.label)}</label>
    <input id="powers-range" type="range" min="0" max="${P.steps.length - 1}" step="1" value="0">
    <div class="powers__ticks meta">${P.steps.map(st => `<span>${esc(st.size)}</span>`).join('')}</div>
    <div class="btn-row" style="margin-top:1rem"><button class="btn" type="button" data-pw="prev">${esc(P.prev)}</button><button class="btn btn--solid" type="button" data-pw="next">${esc(P.next)}</button></div>
  </div>
</div>`;
}

// Hypotheses grid: which properties each idea explains
function grid(ctx, c) {
  const G = c.grid, mark = { y: ['g-yes', G.legend.y], p: ['g-part', G.legend.p], n: ['g-no', G.legend.n], u: ['g-unk', G.legend.u] };
  return `<div class="grid-wrap"><table class="hgrid">
<caption class="sr">${esc(G.caption)}</caption>
<thead><tr><th scope="col">${esc(G.corner)}</th>${G.cols.map(col => `<th scope="col"><span>${esc(col)}</span></th>`).join('')}</tr></thead>
<tbody>${G.rows.map(r => `<tr><th scope="row">${esc(r.name)}</th>${r.v.split('').map((k, i) => `<td class="${mark[k][0]}" title="${attr(G.cols[i] + ': ' + mark[k][1])}"><span class="sr">${esc(mark[k][1])}</span></td>`).join('')}</tr>`).join('')}</tbody></table></div>
<div class="grid-legend meta">${Object.values(mark).map(m => `<span><i class="${m[0]}"></i>${esc(m[1])}</span>`).join('')}</div>
<p class="meta measure" style="margin-top:1rem">${G.note}</p>`;
}

function compare(ctx, c, a, b, label) {
  return `<figure><div class="compare" style="aspect-ratio:${a.ratio || '3/4'}">
<img src="${ctx.asset(a.src)}" alt="${attr(a.alt)}" loading="lazy" width="${a.w}" height="${a.h}" style="width:100%;height:100%;object-fit:cover">
<div class="compare__top"><img src="${ctx.asset(b.src)}" alt="${attr(b.alt)}" loading="lazy"></div>
<div class="compare__handle"></div>
<input type="range" min="0" max="100" value="50" aria-label="${attr(label)}">
</div><div class="compare__labels meta"><span>${esc(b.label)}</span><span>${esc(a.label)}</span></div>
${a.caption ? `<figcaption>${a.caption}</figcaption>` : ''}</figure>`;
}

function relief(ctx, c, key, opts = {}) {
  return `<div class="viewer" data-lazy-init="initRelief" data-relief="${key}" data-depth="${opts.depth || 0.35}" data-yaw="${opts.yaw || 0.55}" data-clay="${opts.clay === false ? 0 : 1}" data-ui='${attr(JSON.stringify(c.ui3d))}' role="img" aria-label="${attr(opts.label || '')}" style="${opts.style || ''}">
<div class="viewer__fallback" hidden>${esc(c.ui3d.fallback)}</div></div>`;
}

function emanation(ctx, c) {
  return `<div class="viewer viewer--cinema" data-lazy-init="initEmanation" data-captions='${attr(JSON.stringify(c.emanation.captions))}' data-ui='${attr(JSON.stringify(c.emanation.ui))}' role="img" aria-label="${attr(c.emanation.alt)}">
<p class="viewer__caption" aria-live="polite"></p>
<div class="viewer__fallback" hidden>${esc(c.ui3d.fallback)}</div></div>`;
}

const v3d = ['assets/vendor/three.min.js', 'assets/js/relief.js'];

// Dating charts
function compareChart(ctx, c, R, compact = false) {
  if (!R) return '';
  const rows = compact ? R.rows.filter(r => r.kind === 'c14') : R.rows;
  const lab = r => (c.dating.rowLabels && c.dating.rowLabels[r.key]) || r.label;
  const tipOf = r => (c.dating.rowTips && c.dating.rowTips[r.key]) || r.tip;
  const x0 = compact ? -200 : -1200, x1 = 2030, W = 900, left = compact ? 170 : 190, right = 24, rowH = 40, top = 44;
  const X = y => left + (y - x0) / (x1 - x0) * (W - left - right);
  const H = top + rows.length * rowH + 44;
  const step = compact ? 200 : 400;
  let s = `<div class="chart-wrap"><svg class="chart" viewBox="0 0 ${W} ${H}" role="img" aria-label="${attr(c.dating.chartAlt)}">`;
  s += `<defs><pattern id="hatch" width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><line x1="0" y1="0" x2="0" y2="6" stroke="var(--for)" stroke-width="3"/></pattern></defs><g class="grid">`;
  for (let y = Math.ceil(x0 / step) * step; y <= 2000; y += step) { s += `<line x1="${X(y)}" x2="${X(y)}" y1="${top - 12}" y2="${H - 30}"/><text x="${X(y)}" y="${H - 10}" text-anchor="middle">${y < 0 ? (-y) + ' ' + c.dating.bc : (y === 0 ? '1' : y)}</text>`; }
  s += '</g>';
  s += `<rect x="${X(1354)}" y="${top - 12}" width="${X(2026) - X(1354)}" height="${H - 30 - top + 12}" fill="var(--sepia)" opacity=".08"/><text x="${X(2026) - 4}" y="${top - 18}" text-anchor="end" fill="var(--ink-soft)">${esc(c.dating.documented)}</text>`;
  s += `<line x1="${X(30)}" x2="${X(30)}" y1="${top - 26}" y2="${H - 30}" stroke="var(--blood)" stroke-width="1.5" stroke-dasharray="4 3"/><text x="${X(30) - 6}" y="${top - 30}" text-anchor="end" fill="var(--blood)">${esc(c.dating.crucifixion)}</text>`;
  rows.forEach((r, i) => {
    const y = top + 16 + i * rowH;
    s += `<text x="${left - 12}" y="${y + 4}" text-anchor="end">${esc(lab(r))}</text>`;
    let g = `<g tabindex="0" data-tip="${attr(tipOf(r))}">`;
    r.segs.forEach(([a, b]) => {
      if (r.kind === 'point') g += `<circle cx="${X((a + b) / 2)}" cy="${y}" r="6" fill="none" stroke="var(--for)" stroke-width="2"/><circle cx="${X((a + b) / 2)}" cy="${y}" r="2" fill="var(--for)"/>`;
      else g += `<rect x="${X(a)}" y="${y - 8}" width="${Math.max(4, X(b) - X(a))}" height="16" rx="2" fill="${r.kind === 'c14' ? 'var(--against)' : 'url(#hatch)'}" ${r.kind === 'alt' ? 'stroke="var(--for)" stroke-width="1"' : ''}/>`;
    });
    if (r.mid != null) g += `<line x1="${X(r.mid)}" x2="${X(r.mid)}" y1="${y - 11}" y2="${y + 11}" stroke="var(--ink)" stroke-width="2"/>`;
    s += g + '</g>';
  });
  s += '</svg><div class="chart-tip" role="tooltip"></div></div>';
  return s;
}
function labsChart(ctx, c, R) {
  if (!R) return '';
  const rows = [];
  R.labs.forEach(L => { L.subs.forEach(sb => rows.push({ lab: L.name, id: sb[0], age: sb[1], err: sb[2] })); rows.push({ lab: L.name, id: c.dating.labMean, age: L.mean, err: L.err, mean: true }); });
  const x0 = 450, x1 = 950, W = 900, left = 210, right = 24, rowH = 22, top = 40;
  const X = v => left + (v - x0) / (x1 - x0) * (W - left - right);
  const H = top + rows.length * rowH + 50;
  let s = `<div class="chart-wrap"><svg class="chart" viewBox="0 0 ${W} ${H}" role="img" aria-label="${attr(c.dating.labsAlt)}"><g class="grid">`;
  for (let v = 500; v <= 900; v += 50) s += `<line x1="${X(v)}" x2="${X(v)}" y1="${top - 10}" y2="${H - 34}"/><text x="${X(v)}" y="${H - 14}" text-anchor="middle">${v}</text>`;
  s += `</g><text x="${(left + W - right) / 2}" y="${top - 20}" text-anchor="middle" fill="var(--ink-soft)">${esc(c.dating.bpAxis)}</text>`;
  const cw = R.combined.weighted;
  s += `<rect x="${X(cw[0] - cw[1])}" y="${top - 10}" width="${X(cw[0] + cw[1]) - X(cw[0] - cw[1])}" height="${H - 24 - top}" fill="var(--against)" opacity=".1"/>`;
  let prev = null;
  rows.forEach((r, i) => {
    const y = top + 10 + i * rowH;
    if (r.lab !== prev) { s += `<text x="${12}" y="${y + 4}" font-weight="600">${esc(r.lab)}</text>`; prev = r.lab; }
    s += `<text x="${left - 12}" y="${y + 4}" text-anchor="end" opacity="${r.mean ? 1 : .75}">${esc(r.id)}</text>`;
    s += `<g tabindex="0" data-tip="${attr(r.lab + ', ' + r.id + ': ' + r.age + ' ± ' + r.err + ' ' + c.dating.bpShort)}"><line x1="${X(r.age - r.err)}" x2="${X(r.age + r.err)}" y1="${y}" y2="${y}" stroke="${r.mean ? 'var(--against)' : 'currentColor'}" stroke-width="${r.mean ? 3 : 1.5}"/><circle cx="${X(r.age)}" cy="${y}" r="${r.mean ? 5 : 3.5}" fill="${r.mean ? 'var(--against)' : 'var(--linen)'}" stroke="${r.mean ? 'var(--against)' : 'currentColor'}" stroke-width="1.5"/></g>`;
  });
  s += '</svg><div class="chart-tip" role="tooltip"></div></div>';
  return s;
}
// ===================================================================== HOME
function home(ctx, page) {
  const c = ctx.L.copy, p = c.pages.index, R = ctx.L.data.radiocarbon;
  const faq = p.faq.map(f => `<details><summary>${esc(f.q)}</summary><p>${f.a}</p></details>`).join('');
  const faqLd = { '@type': 'FAQPage', '@id': ctx.abs('index') + '#faq', mainEntity: p.faq.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a.replace(/<[^>]+>/g, '') } })) };
  const body = `
<section class="linen"><div class="wrap hero">
  <div class="hero__text">
    <h1>${p.h1}</h1>
    <p class="lede">${p.lede}</p>
    <div class="btn-row"><a class="btn btn--solid" href="${ctx.href('explore')}">${esc(p.cta1)}</a><a class="btn" href="${ctx.href('evidence')}">${esc(p.cta2)}</a></div>
  </div>
  <figure>
    <div class="hero__face" tabindex="0" role="img" aria-label="${attr(p.faceAlt)}" data-hint2="${attr(p.hint2)}">
      <img class="pos" src="${ctx.asset(IMG + 'hero/face-positive-shroud-of-turin-seetheshroud.org.webp')}" alt="" width="900" height="1200" fetchpriority="high">
      <img class="neg" src="${ctx.asset(IMG + 'hero/face-negative-shroud-of-turin-seetheshroud.org.webp')}" alt="" width="900" height="1200">
      <span class="ring"></span>
      <span class="hero__hint">${esc(p.hint)}</span>
    </div>
    <figcaption class="hero__caption">${p.faceCaption}</figcaption>
  </figure>
</div></section>

<section class="plate band" id="thomas"><div class="wrap split split--wide-left" style="align-items:start">
  <div class="thomas"><h2 class="sr">${esc(ctx.L.thomas.ref)}</h2>
    ${ctx.L.thomas.verses.map(([n, t]) => `<p class="verse-line${n === 25 ? ' verse-line--key' : ''}"><sup>${n}</sup> ${esc(t)}</p>`).join('')}
    <p class="cite">${esc(ctx.L.thomas.ref)}, ${esc(ctx.L.thomas.version)}</p>
  </div>
  <div class="thomas-note">${p.thomasText}<div class="btn-row"><a class="btn btn--solid" href="${ctx.href('wounds')}">${esc(p.thomasCta)}</a></div></div>
</div></section>

<section class="linen band" id="object"><div class="wrap">
  <div class="measure"><h2>${p.objH}</h2><p class="lede">${p.objLede}</p></div>
  <div class="facts">${p.facts.map(f => `<div class="fact"><b>${f.n}</b><span>${f.t}</span></div>`).join('')}</div>
  ${scaleFigure(c.fig, ctx)}
</div></section>

<section class="plate band" id="negative"><div class="wrap split">
  ${compare(ctx, c, { src: IMG + 'hero/face-positive-shroud-of-turin-seetheshroud.org.webp', alt: p.cmpPosAlt, label: p.cmpPos, w: 900, h: 1200, caption: p.cmpCaption }, { src: IMG + 'hero/face-negative-shroud-of-turin-seetheshroud.org.webp', alt: p.cmpNegAlt, label: p.cmpNeg }, p.cmpLabel)}
  <div><p class="chapter__year">${p.negYear}</p><h2>${p.negH}</h2>${p.negText}<p class="note" style="margin-top:1.5rem">${p.negSkeptic}</p><div class="btn-row"><button class="btn" type="button" data-invert-page data-labels='${attr(JSON.stringify([p.invertBtn, p.invertBack]))}'>${esc(p.invertBtn)}</button></div></div>
</div></section>

<section class="plate band band--tight" id="three-d"><div class="wrap split split--wide-left">
  ${relief(ctx, c, 'face', { label: p.reliefAlt, depth: 0.45 })}
  <div><h2>${p.d3H}</h2>${p.d3Text}<p class="note" style="margin-top:1.5rem">${p.d3Skeptic}</p><div class="btn-row"><a class="btn" href="${ctx.href('explore')}#relief">${esc(p.d3Cta)}</a></div></div>
</div></section>

<section class="linen band" id="marks"><div class="wrap split">
  <div><h2>${p.marksH}</h2>${p.marksText}<div class="btn-row"><a class="btn btn--solid" href="${ctx.href('wounds')}">${esc(p.marksCta)}</a></div></div>
  <figure><img src="${ctx.asset(IMG + 'shroud/hands-negative-shroud-of-turin-seetheshroud.org.webp')}" alt="${attr(p.marksAlt)}" loading="lazy" width="900" height="900"><figcaption>${p.marksCaption}</figcaption></figure>
</div></section>

<section class="linen band" id="dating" style="border-top:1px solid var(--linen-edge)"><div class="wrap">
  <div class="measure"><h2>${p.dateH}</h2>${p.dateText}</div>
  <div style="margin-top:2rem">${compareChart(ctx, c, R, true)}</div>
  <div class="btn-row"><a class="btn btn--solid" href="${ctx.href('dating')}">${esc(p.dateCta)}</a></div>
</div></section>

<section class="plate band" id="how"><div class="wrap">
  <div class="measure"><span class="hypo">${esc(c.emanation.label)}</span><h2 style="margin-top:1rem">${p.howH}</h2><p class="lede">${p.howLede}</p></div>
  <div style="margin-top:2.5rem">${emanation(ctx, c)}</div>
  <div class="split" style="margin-top:3rem;align-items:start"><div>${p.howText}</div><div>${p.howEnea}</div></div>
  <div class="btn-row"><a class="btn" href="${ctx.href('image')}">${esc(p.howCta)}</a></div>
</div></section>

<section class="plate band" id="weigh" style="border-top:1px solid var(--plate-edge)"><div class="wrap split">
  <div><h2>${p.weighH}</h2>${c.pages.weigh.teaser}<div class="btn-row"><a class="btn btn--solid" href="${ctx.href('weigh')}">${esc(c.pages.weigh.cta)}</a></div></div>
  <div><blockquote class="pull">${p.quote}</blockquote><span class="cite">${p.quoteCite}</span></div>
</div></section>

<section class="plate band" id="freedom"><div class="wrap split" style="align-items:center">
  <div><h2>${p.freeH}</h2>${p.freeText}</div>
  <div><blockquote class="pull">${p.freeQuote}</blockquote><span class="cite">${p.freeCite}</span></div>
</div></section>

<section class="linen band faq" id="faq"><div class="wrap"><div class="measure"><h2>${p.faqH}</h2>${faq}${c.pages.faq ? `<div class="btn-row"><a class="btn" href="${ctx.href('faq')}">${esc(c.pages.faq.h1)}</a></div>` : ''}</div></div></section>

<section class="linen band band--tight"><div class="wrap"><h2 style="margin-bottom:1.5rem">${p.pathsH}</h2><div class="paths">
${p.paths.map(x => `<a class="path" href="${ctx.href(x.slug)}"><h3>${x.h}</h3><p>${x.t}</p></a>`).join('')}
</div></div></section>`;
  return layout(ctx, page, { title: p.title, description: p.description, preload: IMG + 'hero/face-positive-shroud-of-turin-seetheshroud.org.webp', jsonld: siteGraph(ctx, page, p, [faqLd]) }, body,
    ['assets/js/hero.js', 'assets/js/lists.js', ...v3d, 'assets/js/data/relief-face.js', 'assets/js/data/relief-body.js', 'assets/js/emanation.js']);
}

// ===================================================================== EXPLORE
function explore(ctx, page) {
  const c = ctx.L.copy, p = c.pages.explore, S = ctx.L.data.spots || { spots: [] };
  const data = { image: { w: 3000, h: 769, src: ctx.asset(IMG + 'shroud/full-cloth-shroud-of-turin-seetheshroud.org.webp'), srcHi: ctx.asset(IMG + 'shroud/full-cloth-hi-shroud-of-turin-seetheshroud.org.webp'), hiAt: 0.9, ...(S.image || {}) },
    spots: S.spots.map(s => ({ ...s, link: s.link ? ctx.href(s.link.split('#')[0]) + (s.link.includes('#') ? '#' + s.link.split('#')[1] : '') : null })), ui: p.ui };
  data.image.src = ctx.asset(S.image ? S.image.src : IMG + 'shroud/full-cloth-shroud-of-turin-seetheshroud.org.webp');
  if (S.image && S.image.srcHi) data.image.srcHi = ctx.asset(S.image.srcHi);
  const body = `
<section class="linen"><div class="wrap page-head" style="padding-bottom:1.5rem"><h1>${p.h1}</h1><p class="lede">${p.lede}</p></div></section>
<section class="explorer" aria-label="${attr(p.h1)}">
  <div class="explorer__bar" role="toolbar" aria-label="${attr(p.ui.tools)}">
    <button class="tool" type="button" data-tool="neg" aria-pressed="false">${esc(p.ui.negative)}</button>
    <button class="tool" type="button" data-tool="enh" aria-pressed="false">${esc(p.ui.enhance)}</button>
    <button class="tool tool--wounds" type="button" data-tool="layer-wounds" aria-pressed="true">${esc(p.ui.layerWounds)}</button>
    <button class="tool tool--damage" type="button" data-tool="layer-damage" aria-pressed="true">${esc(p.ui.layerDamage)}</button>
    <button class="tool tool--linen" type="button" data-tool="layer-linen" aria-pressed="true">${esc(p.ui.layerLinen)}</button>
    <span class="sep" aria-hidden="true"></span>
    <button class="tool" type="button" data-tool="tour">${esc(p.ui.tour)}</button>
    <button class="tool" type="button" data-tool="fit">${esc(p.ui.fit)}</button>
  </div>
  <div class="explorer__stage">
    <div class="explorer__canvas"><img src="${data.image.src}" alt="${attr(p.imgAlt)}" draggable="false"></div>
    <div class="explorer__zoom"><button type="button" data-tool="in" aria-label="${attr(p.ui.zoomIn)}">+</button><button type="button" data-tool="out" aria-label="${attr(p.ui.zoomOut)}">&minus;</button></div>
    <div class="explorer__minimap" aria-hidden="true"><img src="${data.image.src}" alt=""><div class="vp"></div></div>
    <aside class="explorer__panel" hidden aria-live="polite"></aside>
    <p class="explorer__help">${esc(p.ui.help)}</p>
  </div>
  <script type="application/json" id="explorer-data">${json(data)}</script>
</section>
<section class="plate band" id="relief"><div class="wrap">
  <div class="measure"><h2>${p.reliefH}</h2>${p.reliefText}</div>
  <div class="split" style="margin-top:2.5rem;align-items:start">
    <figure>${relief(ctx, c, 'face', { label: p.reliefFaceAlt, depth: 0.45 })}<figcaption>${p.reliefFaceCap}</figcaption></figure>
    <figure>${relief(ctx, c, 'painting', { label: p.reliefPaintAlt, depth: 0.45 })}<figcaption>${p.reliefPaintCap}</figcaption></figure>
  </div>
  <p class="note" style="margin-top:2rem">${p.reliefSkeptic}</p>
</div></section>
<section class="linen band band--tight"><div class="wrap prose"><h2>${p.photosH}</h2>${p.photosText}</div></section>`;
  return layout(ctx, page, { title: p.title, description: p.description, jsonld: siteGraph(ctx, page, p) }, body,
    ['assets/js/explorer.js', ...v3d, 'assets/js/data/relief-face.js', 'assets/js/data/relief-painting.js']);
}

// ===================================================================== EVIDENCE
function evidence(ctx, page) {
  const c = ctx.L.copy, p = c.pages.evidence, E = ctx.L.data.evidence || { items: [] };
  const items = E.items.slice().sort((a, b) => (a.exhibit || 0) - (b.exhibit || 0));
  const cats = [...new Set(items.map(i => i.category))];
  const nFor = items.filter(i => leanOf(i) === 'for').length, nAg = items.filter(i => leanOf(i) === 'against').length;
  const ex = items.map((it, k) => {
    const lean = leanOf(it);
    return `<article class="exhibit" id="${attr(it.id)}" data-lean="${lean}" data-cat="${attr(it.category)}">
<div class="exhibit__no">${esc(c.ui.exhibit)}<b>${String(k + 1).padStart(2, '0')}</b></div>
<div class="measure" style="max-width:72ch">
<div class="exhibit__head"><span class="exhibit__lean exhibit__lean--${lean}">${esc(c.lean[lean])}</span><span class="meta">${esc(c.categories[it.category] || it.category)}</span>${meter(c, it.strength)}</div>
<h2 class="exhibit__title">${esc(it.title)}</h2>
<p class="exhibit__claim">${esc(it.claim)}</p>
<details><summary>${esc(c.ui.detail)}</summary><p>${esc(it.detail)}</p>${it.strength_reason ? `<p class="meta" style="margin-top:.6rem">${esc(c.ui.whyRating)} ${esc(it.strength_reason)}</p>` : ''}</details>
${it.skeptic ? `<details class="skeptic"><summary>${esc(lean === 'against' ? c.ui.theCase : c.ui.skeptic)}</summary><p>${esc(it.skeptic)}</p></details>` : ''}
${it.reply ? `<details class="reply"><summary>${esc(lean === 'against' ? c.ui.replyAgainst : c.ui.reply)}</summary><p>${esc(it.reply)}</p></details>` : ''}
${srcList(it.sources)}
</div></article>`;
  }).join('\n');
  const chip = (g, v, label, on) => `<button class="chip" type="button" data-filter="${g}" data-value="${v}" aria-pressed="${on ? 'true' : 'false'}">${esc(label)}</button>`;
  const hp = c.pages.index, wp = c.pages.weigh;
  const weigh = `
<section class="plate band" id="weigh"><div class="wrap split">
  <div><h2>${hp.weighH}</h2>${wp.teaser}<div class="btn-row"><a class="btn btn--solid" href="${ctx.href('weigh')}">${esc(wp.cta)}</a></div></div>
  <div><blockquote class="pull">${hp.quote}</blockquote><span class="cite">${hp.quoteCite}</span></div>
</div></section>`;
  const body = `${pageHead(ctx, p, `<p class="meta" style="margin-top:1.5rem">${p.counts.replace('{n}', items.length).replace('{f}', nFor).replace('{a}', nAg)}</p>`)}
<section class="linen band band--tight" style="padding-top:0"><div class="wrap">
  <div class="note measure">${p.method}</div>
  <div class="filters" role="group" aria-label="${attr(p.filterLean)}">${chip('lean', 'all', c.ui.all, true)}${chip('lean', 'for', c.lean.for)}${chip('lean', 'against', c.lean.against)}</div>
  <div class="filters" role="group" aria-label="${attr(p.filterCat)}" style="margin-top:-1rem">${chip('cat', 'all', c.ui.allTopics, true)}${cats.map(k => chip('cat', k, c.categories[k] || k)).join('')}</div>
  <p class="meta"><span data-ex-count>${items.length}</span> ${esc(c.ui.shown)} &middot; <button class="meta" type="button" data-open-all style="text-decoration:underline">${esc(c.ui.openAll)}</button></p>
  <div class="exhibits">${ex}</div>
</div></section>${weigh}`;
  return layout(ctx, page, { title: p.title, description: p.description, jsonld: siteGraph(ctx, page, p) }, body, ['assets/js/evidence.js']);
}

// ===================================================================== WEIGH IT YOURSELF
function weigh(ctx, page) {
  const c = ctx.L.copy, p = c.pages.weigh, hp = c.pages.index, E = ctx.L.data.evidence || { items: [] };
  const S = readJ('weigh-structure.json', []);
  const stOf = f => Object.fromEntries(((f && f.items) || []).filter(i => i.statement).map(i => [i.id, i.statement]));
  const st = { ...stOf(readJ('en/weigh.json', null)), ...stOf(ctx.L.data.weigh) };
  const ev = Object.fromEntries(E.items.map(i => [i.id, i]));
  const vals = [1, 0.5, 0, -0.5, -1];
  const cards = S.map(s => {
    const e = ev[s.ev] || {}, obj = e[s.obj] || '';
    return `<article class="claim${s.top ? ' claim--top' : ''}" id="w-${attr(s.id)}" data-id="${attr(s.id)}" data-side="${s.side}" data-w="${s.w}">
${s.top ? `<p class="claim__top claim__top--${s.side}">${esc(s.side === 'for' ? p.topFor : p.topAgainst)}</p>` : ''}
<p class="claim__lean claim__lean--${s.side}">${esc(c.lean[s.side])}</p>
<h2 class="claim__text">${esc(st[s.id] || s.id)}</h2>
<div class="likert" role="group" aria-label="${attr(st[s.id] || s.id)}">${vals.map((v, k) => `<button type="button" data-v="${v}" aria-pressed="false">${esc(p.scale[k])}</button>`).join('')}</div>
${obj ? `<details class="claim__obj"><summary>${esc(p.obj)}</summary><p>${esc(obj)}</p><p><a href="${ctx.href('evidence')}#${attr(s.ev)}">${esc(p.more)}</a></p></details>` : ''}
</article>`;
  }).join('\n');
  const ui = { verdict: p.verdict, answered: p.answered, total: S.length, presets: readJ('weigh-presets.json', {}) };
  const pr = p.presets || {};
  const body = `${pageHead(ctx, p)}
<section class="linen band band--tight" style="padding-top:0"><div class="wrap">
<div class="weigh2" data-weigh='${attr(JSON.stringify(ui))}'>
  <div class="claims">
  ${pr.label ? `<div class="presets"><p class="presets__label">${esc(pr.label)}</p><div class="presets__row">${['skeptic', 'neutral', 'believer'].map(k => `<button class="tool presets__btn presets__btn--${k}" type="button" data-preset="${k}" aria-pressed="false">${esc(pr[k])}</button>`).join('')}</div><p class="meta">${esc(pr.note)}</p></div>` : ''}
  ${cards}</div>
  <aside class="verdict" id="verdict" aria-live="polite">
    <h2 class="verdict__h">${esc(p.resultH)}</h2>
    <div class="tug" aria-hidden="true"><i class="tug__for" data-bar></i><b class="tug__mid"></b></div>
    <div class="tug__labels"><p><b data-pct-for>50%</b> ${esc(p.sideFor)}<small>${esc(p.sideForLong)}</small></p><p><b data-pct-against>50%</b> ${esc(p.sideAgainst)}<small>${esc(p.sideAgainstLong)}</small></p></div>
    <p class="verdict__text" data-verdict>${esc(p.verdict.none)}</p>
    <p class="meta" data-answered>${esc(p.answered.replace('{n}', 0).replace('{t}', S.length))}</p>
    <p class="verdict__strong" data-strong hidden><span class="meta">${esc(p.strongest)}</span> <span data-strong-text></span></p>
    <button class="tool" type="button" data-reset>${esc(p.reset)}</button>
    <p class="meta verdict__caveat">${esc(p.caveat)}</p>
  </aside>
</div>
</div></section>
<a class="verdict-mini" href="#verdict" hidden><span class="tug" aria-hidden="true"><i class="tug__for" data-bar></i><b class="tug__mid"></b></span><span data-mini>50% / 50%</span><span class="verdict-mini__go">${esc(p.see)}</span></a>
<section class="plate band" id="freedom"><div class="wrap split" style="align-items:center">
  <div><h2>${hp.freeH}</h2>${hp.freeText}</div>
  <div><blockquote class="pull">${hp.freeQuote}</blockquote><span class="cite">${hp.freeCite}</span></div>
</div></section>`;
  return layout(ctx, page, { title: p.title, description: p.description, jsonld: siteGraph(ctx, page, p) }, body, ['assets/js/weigh.js']);
}

// ===================================================================== FAQ (questions people search for, answered directly)
function faqPage(ctx, page) {
  const c = ctx.L.copy, p = c.pages.faq, hp = c.pages.index;
  const items = p.items || [];
  const toc = `<nav class="faq-toc" aria-label="${attr(p.label)}"><ol>${items.map(f => `<li><a href="#${attr(f.id)}">${esc(f.q)}</a></li>`).join('')}</ol></nav>`;
  const list = items.map(f => `<section class="faq-item" id="${attr(f.id)}"><h2>${esc(f.q)}</h2><p>${esc(f.a)}</p><p class="faq-more"><a href="${ctx.href(f.link)}">${esc(p.more)}</a></p></section>`).join('\n');
  const ld = { '@type': 'FAQPage', '@id': ctx.abs(page.slug) + '#faq', inLanguage: ctx.lang, mainEntity: items.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a, url: ctx.abs(f.link) } })) };
  const body = `${pageHead(ctx, p)}
<section class="linen band band--tight" style="padding-top:0"><div class="wrap"><div class="measure">${toc}${list}</div></div></section>
<section class="plate band" id="freedom"><div class="wrap split" style="align-items:center">
  <div><h2>${hp.freeH}</h2>${hp.freeText}</div>
  <div><blockquote class="pull">${hp.freeQuote}</blockquote><span class="cite">${hp.freeCite}</span></div>
</div></section>`;
  return layout(ctx, page, { title: p.title, description: p.description, jsonld: siteGraph(ctx, page, p, [ld]) }, body, []);
}

// ===================================================================== WOUNDS
function wounds(ctx, page) {
  const c = ctx.L.copy, p = c.pages.wounds, Wn = ctx.L.data.wounds || { items: [] };
  const spot = (w, i) => w.x != null ? `<button class="hotspot" type="button" data-id="${attr(w.id)}" style="left:${w.x * 100}%;top:${w.y * 100}%" aria-label="${attr(w.name)}">${i + 1}</button>` : '';
  const fig = side => `<div class="bodymap__fig" data-side="${side}"><img src="${ctx.asset(IMG + 'shroud/body-' + side + '-shroud-of-turin-seetheshroud.org.webp')}" alt="${attr(p['alt_' + side])}" loading="lazy">${Wn.items.map((w, i) => w.side === side ? spot(w, i) : '').join('')}</div>`;
  const list = Wn.items.map((w, i) => `<div class="wound" tabindex="0" data-id="${attr(w.id)}" data-side="${w.side}"><p class="meta">${i + 1} &middot; ${esc(w.side === 'front' ? p.front : p.back)}${w.body_region ? ' &middot; ' + esc(w.body_region) : ''}</p><h2 class="wound__title">${esc(w.name)}</h2><p>${esc(w.description)}</p>${w.verse ? `<p class="gospel">${esc(w.verse)} <span class="meta">(${esc(w.gospel)})</span></p>` : (w.gospel ? `<p class="meta" style="margin-top:.5rem">${esc(w.gospel)}</p>` : '')}${w.skeptic ? `<p class="meta" style="margin-top:.6rem">${esc(c.ui.skeptic)}: ${esc(w.skeptic)}</p>` : ''}${srcList(w.sources)}</div>`).join('');
  const body = `${pageHead(ctx, p)}
<section class="plate band"><div class="wrap bodymap">
  <div class="bodymap__stick">
    <div class="bodymap__toggle"><button class="tool" type="button" data-side-btn="front" aria-pressed="true">${esc(p.front)}</button><button class="tool" type="button" data-side-btn="back" aria-pressed="false">${esc(p.back)}</button><button class="tool" type="button" data-neg-btn aria-pressed="true">${esc(c.pages.explore.ui.negative)}</button></div>
    ${fig('front')}${fig('back')}
    <p class="meta" style="margin-top:.8rem">${p.figNote}</p>
  </div>
  <div><div class="measure" style="margin-bottom:1.5rem">${p.intro}</div><div class="wound-list">${list}</div></div>
</div></section>
<section class="linen band"><div class="wrap">${breathFigure(ctx, c)}</div></section>
<section class="linen band band--tight" style="border-top:1px solid var(--linen-edge)"><div class="wrap prose">${p.after}</div></section>`;
  return layout(ctx, page, { title: p.title, description: p.description, jsonld: siteGraph(ctx, page, p) }, body, ['assets/js/lists.js']);
}

function breathFigure(ctx, c) {
  const B = c.pages.wounds.breath;
  return `<div class="breath split" style="align-items:center">
<figure class="breath__fig"><svg viewBox="0 0 320 360" role="img" aria-label="${attr(B.alt)}" data-breath>
  <rect x="152" y="20" width="16" height="330" rx="2" class="wood"/><rect x="40" y="62" width="240" height="14" rx="2" class="wood"/>
  <g class="fig"><line class="arm" data-arm="l" x1="62" y1="70" x2="135" y2="128"/><line class="arm" data-arm="r" x1="258" y1="70" x2="185" y2="128"/>
  <g data-body><circle cx="160" cy="106" r="15" class="skin"/><path d="M135 128 Q160 122 185 128 L178 210 Q160 216 142 210 Z" class="skin"/><path d="M144 210 L150 300 M176 210 L170 300" class="leg"/></g></g>
  <g data-drips><line x1="72" y1="78" x2="72" y2="112" class="drip"/><line x1="248" y1="78" x2="248" y2="112" class="drip"/></g>
  <circle cx="62" cy="70" r="4" class="nail"/><circle cx="258" cy="70" r="4" class="nail"/>
</svg></figure>
<div><h2>${B.h}</h2>${B.text}<div class="btn-row"><button class="btn btn--solid" type="button" data-breath-btn data-labels='${attr(JSON.stringify([B.up, B.down]))}'>${esc(B.up)}</button></div><p class="note" style="margin-top:1.5rem">${B.skeptic}</p></div>
</div>`;
}

// ===================================================================== DATING
function dating(ctx, page) {
  const c = ctx.L.copy, p = c.pages.dating, R = ctx.L.data.radiocarbon;
  const body = `${pageHead(ctx, p)}
<section class="linen band band--tight" style="padding-top:0"><div class="wrap">
  <h2 style="font-size:1.6rem;margin-bottom:1rem">${p.compareH}</h2>
  ${compareChart(ctx, c, R, false)}
  <p class="meta" style="margin-top:1rem">${p.chartNote}</p>
  <h2 style="font-size:1.6rem;margin:3rem 0 1rem">${p.labsH}</h2>
  <p class="measure" style="margin-bottom:1rem">${p.labsText}</p>
  ${labsChart(ctx, c, R)}
</div></section>
<section class="linen band band--tight"><div class="wrap prose">${p.body}</div></section>
<section class="plate band"><div class="wrap split" style="align-items:start">
  <div><h2>${p.sampleH}</h2>${p.sampleText}</div>
  <figure><img src="${ctx.asset(IMG + 'shroud/sample-corner-shroud-of-turin-seetheshroud.org.webp')}" alt="${attr(p.sampleAlt)}" loading="lazy"><figcaption>${p.sampleCap}</figcaption></figure>
</div></section>
<section class="linen band"><div class="wrap split" style="align-items:start">
  <div><h2>${p.debateH}</h2>${p.debateFor}</div>
  <div><h2>${p.defenseH}</h2>${p.debateAgainst}</div>
</div></section>
<section class="linen band band--tight" style="border-top:1px solid var(--linen-edge)"><div class="wrap prose">${p.verdict}</div></section>`;
  return layout(ctx, page, { title: p.title, description: p.description, jsonld: siteGraph(ctx, page, p) }, body, ['assets/js/lists.js']);
}

// ===================================================================== IMAGE FORMATION
function image(ctx, page) {
  const c = ctx.L.copy, p = c.pages.image;
  const hyps = p.hypotheses.map(h => `<article class="exhibit" style="grid-template-columns:5.5rem minmax(0,1fr)"><div class="exhibit__no">${esc(h.kind)}</div><div class="measure" style="max-width:72ch"><div class="exhibit__head">${meter(c, h.strength)}</div><h3>${esc(h.name)}</h3><p>${h.text}</p><details class="skeptic"><summary>${esc(c.ui.problems)}</summary><p>${h.problems}</p></details>${srcList(h.sources)}</div></article>`).join('');
  const body = `${pageHead(ctx, p)}
<section class="plate band"><div class="wrap">
  <div class="measure"><h2>${p.propsH}</h2><p class="lede">${p.propsLede}</p></div>
  <div class="facts">${p.props.map(f => `<div class="fact"><b>${f.n}</b><span>${f.t}</span></div>`).join('')}</div>
</div></section>
<section class="linen band" id="zoom"><div class="wrap"><div class="measure"><h2>${p.zoomH}</h2><p class="lede">${p.zoomLede}</p></div><div style="margin-top:2.5rem">${powers(ctx, c)}</div></div></section>
<section class="plate band" id="test"><div class="wrap"><div class="measure"><h2>${p.gridH}</h2><p class="lede">${p.gridLede}</p></div><div style="margin-top:2rem">${grid(ctx, c)}</div></div></section>
<section class="linen band"><div class="wrap"><div class="measure"><h2>${p.hypH}</h2><p class="lede">${p.hypLede}</p></div><div class="exhibits" style="margin-top:2rem">${hyps}</div></div></section>
<section class="plate band" id="emanation"><div class="wrap">
  <div class="measure"><span class="hypo">${esc(c.emanation.label)}</span><h2 style="margin-top:1rem">${p.emH}</h2></div>
  <div style="margin-top:2rem">${emanation(ctx, c)}</div>
  <div class="split" style="margin-top:3rem;align-items:start"><div>${p.emText}</div><div>${p.enea}</div></div>
</div></section>`;
  return layout(ctx, page, { title: p.title, description: p.description, jsonld: siteGraph(ctx, page, p) }, body, ['assets/js/lists.js', ...v3d, 'assets/js/data/relief-body.js', 'assets/js/emanation.js']);
}

function provenanceMap(ctx, c) {
  const M = ctx.L.map; if (!M) return '';
  const P = c.pages.timeline.map, q = M.pts;
  const leg = (a, b, doc, bend = 0.18) => { const [x1, y1] = q[a], [x2, y2] = q[b]; const mx = (x1 + x2) / 2, my = (y1 + y2) / 2, dx = x2 - x1, dy = y2 - y1; const cx = mx - dy * bend, cy = my + dx * bend; return `<path d="M${x1} ${y1} Q${cx} ${cy} ${x2} ${y2}" class="${doc ? 'rt-doc' : 'rt-hyp'}"/>`; };
  const dot = (k, label, dx = 8, dy = -8, anchor = 'start', doc = true) => `<g class="${doc ? 'pl-doc' : 'pl-hyp'}"><circle cx="${q[k][0]}" cy="${q[k][1]}" r="5"/><text x="${q[k][0] + dx}" y="${q[k][1] + dy}" text-anchor="${anchor}">${esc(label)}</text></g>`;
  return `<figure class="pmap"><svg viewBox="0 0 ${M.W} ${M.H}" role="img" aria-label="${attr(P.alt)}">
<rect width="${M.W}" height="${M.H}" class="sea"/><path d="${M.land}" class="land"/>
${leg('Jerusalem', 'Edessa', false, -0.2)}${leg('Edessa', 'Constantinople', false, 0.15)}${leg('Constantinople', 'Athens', false, 0.2)}${leg('Athens', 'Lirey', false, 0.12)}
${leg('Lirey', 'Chambery', true, 0.2)}${leg('Chambery', 'Turin', true, 0.3)}
${dot('Jerusalem', P.jerusalem, -10, 18, 'end', false)}${dot('Edessa', P.edessa, -8, -10, 'end', false)}${dot('Constantinople', P.constantinople, 8, -10, 'start', false)}${dot('Athens', P.athens, -8, 18, 'end', false)}
${dot('Lirey', P.lirey, 10, -6)}${dot('Chambery', P.chambery, -10, 4, 'end')}${dot('Turin', P.turin, 10, 14)}
</svg><figcaption><span class="pm-key"><i class="k-doc"></i>${esc(P.keyDoc)}</span> <span class="pm-key"><i class="k-hyp"></i>${esc(P.keyHyp)}</span><br>${P.caption}</figcaption></figure>`;
}

// ===================================================================== TIMELINE
function timeline(ctx, page) {
  const c = ctx.L.copy, p = c.pages.timeline, T = ctx.L.data.timeline || { events: [] };
  const ev = T.events.slice().sort((a, b) => a.year - b.year);
  const startIdx = Math.max(0, ev.findIndex(e => e.year >= 1350));
  const chip = (v, label, on) => `<button class="chip" type="button" data-tl-filter data-value="${v}" aria-pressed="${on ? 'true' : 'false'}">${esc(label)}</button>`;
  const body = `${pageHead(ctx, p)}
<section class="plate band band--tight"><div class="wrap">
  <div class="tl-controls">${chip('all', c.ui.all, true)}${Object.entries(p.tracks).map(([k, v]) => chip(k, v)).join('')}</div>
  <div class="tl"><div class="tl__track"><div class="tl__axis"></div></div></div>
  <div class="tl__legend"><span><i style="background:var(--silver)"></i>${esc(p.legend.cloth)}</span><span><i style="background:var(--light)"></i>${esc(p.legend.science)}</span><span><i style="border:2px dashed var(--silver-soft)"></i>${esc(p.legend.hyp)}</span></div>
  <div class="tl__card" aria-live="polite"></div>
  <script type="application/json" id="tl-data">${json({ events: ev, start: startIdx, ui: { prev: c.ui.prev, next: c.ui.next, cert: p.cert } })}</script>
  <h2 style="margin-top:3rem;font-size:1.8rem">${p.map.h}</h2>
  ${provenanceMap(ctx, c)}
  <h2 style="margin-top:3rem;font-size:1.8rem">${p.icon.h}</h2>
  <div class="split" style="align-items:center;margin-top:1.5rem">
    <figure><div class="overlay" style="--o:.5"><img src="${ctx.asset(IMG + 'hero/face-negative-shroud-of-turin-seetheshroud.org.webp')}" alt="${attr(p.icon.altShroud)}" loading="lazy" width="900" height="1200"><img class="overlay__top" src="${ctx.asset(IMG + 'history/icon-sinai-pantocrator-face-seetheshroud.org.webp')}" alt="${attr(p.icon.altIcon)}" loading="lazy" width="900" height="1200"></div>
    <label class="overlay__ctl ui" for="ov-range"><span>${esc(p.icon.shroud)}</span><input id="ov-range" type="range" min="0" max="1" step="0.01" value="0.5" data-overlay><span>${esc(p.icon.iconLabel)}</span></label></figure>
    <div>${p.icon.text}<p class="note" style="margin-top:1.5rem">${p.icon.skeptic}</p></div>
  </div>
  <h2 style="margin-top:3rem;font-size:1.8rem">${p.listH}</h2>
  <ol class="tl-list">${ev.map(e => `<li><span class="yr">${esc(e.date_label)}</span><div><h3 style="font-size:1.15rem">${esc(e.title)} <span class="meta">(${esc(p.cert[e.certainty] || e.certainty)})</span></h3><p>${esc(e.text)}</p>${srcList(e.sources)}</div></li>`).join('')}</ol>
</div></section>`;
  return layout(ctx, page, { title: p.title, description: p.description, jsonld: siteGraph(ctx, page, p) }, body, ['assets/js/lists.js']);
}

// ===================================================================== VIDEOS
function videos(ctx, page) {
  const c = ctx.L.copy, p = c.pages.videos, V = ctx.L.data.videos || { videos: [] };
  const secs = t => t.split(':').reduce((a, b) => a * 60 + parseInt(b, 10), 0);
  const rate = { strong: p.rate.strong, disputed: p.rate.disputed, weak: p.rate.weak };
  // Order chosen by Nelson: Barrie Schwortz (TEDx), then Truthly, then Jeremiah Johnston
  const ORDER = ['4G4sj8hUVaY', 'DA9unW5A0pk', 'rKMQY49py4w'];
  const vids = V.videos.slice().sort((a, b) => (ORDER.indexOf(a.id) + 1 || 99) - (ORDER.indexOf(b.id) + 1 || 99));
  const pick = `<nav class="vid-pick" aria-label="${attr(p.h1)}">${vids.map((v, i) => `<a class="vid-pick__item" href="#v-${attr(v.id)}" data-vid="${attr(v.id)}"><span class="vid-pick__thumb" style="background-image:url(https://i.ytimg.com/vi/${attr(v.id)}/mqdefault.jpg)"><b>${i + 1}</b></span><span class="vid-pick__text"><span class="meta">${esc(v.channel)}</span><span class="vid-pick__title">${esc(v.title)}</span></span></a>`).join('')}</nav>`;
  const body = `${pageHead(ctx, p)}
<section class="linen band band--tight" style="padding-top:0"><div class="wrap">
${pick}
${vids.map(v => `<article class="vid" id="v-${attr(v.id)}">
  <div class="vid__head">
    <button class="vid__facade" type="button" data-yt="${attr(v.id)}" aria-label="${attr(p.play + ': ' + v.title)}" style="background-image:url(https://i.ytimg.com/vi/${attr(v.id)}/hqdefault.jpg)"><span>${esc(p.play)}</span></button>
    <div><p class="meta">${esc(v.channel)} &middot; ${v.year} &middot; ${esc(v.length)}</p><h2 class="vid__title">${esc(v.title)}</h2><p>${esc(v.summary)}</p>
    <p class="meta" style="margin-top:.8rem"><a href="https://www.youtube.com/watch?v=${attr(v.id)}" target="_blank" rel="noopener">${esc(p.watch)}</a></p></div>
  </div>
  <ol class="vclaims">${v.claims.map(cl => `<li><a class="vt" href="https://www.youtube.com/watch?v=${attr(v.id)}&amp;t=${secs(cl.t)}s" target="_blank" rel="noopener">${esc(cl.t)}</a><div><div>${meter({ strength: rate }, cl.r)}</div><p class="vc">${esc(cl.c)}</p><p class="meta">${esc(cl.n)}</p></div></li>`).join('')}</ol>
</article>`).join('')}
<div class="note measure" style="margin-top:3rem"><p><strong style="font-weight:600">${esc(p.missingH)}</strong></p><ul style="margin:.6rem 0 0 1.1rem">${(V.missing || []).map(m => `<li>${esc(m)}</li>`).join('')}</ul><p style="margin-top:.8rem">${p.missingAfter}</p></div>
</div></section>`;
  return layout(ctx, page, { title: p.title, description: p.description, jsonld: siteGraph(ctx, page, p) }, body, ['assets/js/lists.js']);
}

function keyReads(ctx, c, Lb) {
  const K = ctx.L.data.keyreads; if (!K) return '';
  const by = {}; (Lb.items || []).forEach(i => by[i.id] = i);
  return `<h2 style="font-size:1.6rem;margin:1rem 0 .4rem">${esc(c.pages.library.keyH)}</h2><p class="meta measure">${esc(c.pages.library.keyLede)}</p>
<ol class="keyreads">${K.items.map(k => { const i = by[k.id]; if (!i) return ''; return `<li><a href="${attr(i.url)}" target="_blank" rel="noopener">${esc(i.title)}</a> <span class="meta">${esc((i.authors || []).slice(0, 2).join(', '))}${i.year ? ', ' + i.year : ''}</span><p>${esc(k.why)}</p></li>`; }).join('')}</ol>`;
}

// ===================================================================== LIBRARY
function library(ctx, page) {
  const c = ctx.L.copy, p = c.pages.library, Lb = ctx.L.library;
  const items = (Lb.items || []).slice().sort((a, b) => (b.year || 0) - (a.year || 0));
  const topics = [...new Set(items.flatMap(i => i.topics || []))].filter(t => p.topics[t]);
  const chip = (g, v, label, on) => `<button class="chip" type="button" data-lib-filter="${g}" data-value="${v}" aria-pressed="${on ? 'true' : 'false'}">${esc(label)}</button>`;
  const li = items.map(i => `<li data-topics="${attr((i.topics || []).join(' '))}" data-stance="${attr(i.stance || 'unclear')}" data-pr="${i.peer_reviewed ? 'true' : 'false'}" data-text="${attr([i.title, (i.authors || []).join(' '), i.venue, i.summary].join(' '))}">
<span class="yr">${i.year || ''}</span><div><a href="${attr(i.url)}" target="_blank" rel="noopener">${esc(i.title)}</a>
<p class="by">${esc((i.authors || []).join(', '))}${i.venue ? ' &middot; ' + esc(i.venue) : ''}</p>
${i.summary && ctx.lang === 'en' ? `<p class="by" style="margin-top:.2rem">${esc(i.summary)}</p>` : ''}
<div>${(i.topics || []).filter(t => p.topics[t]).map(t => `<span class="tag">${esc(p.topics[t])}</span>`).join('')}${i.peer_reviewed ? `<span class="tag tag--pr">${esc(p.peer)}</span>` : ''}${i.stance && p.stances[i.stance] ? `<span class="tag">${esc(p.stances[i.stance])}</span>` : ''}</div></div></li>`).join('\n');
  const body = `${pageHead(ctx, p)}
<section class="linen band band--tight" style="padding-top:0"><div class="wrap">
  ${keyReads(ctx, c, Lb)}
  <h2 style="font-size:1.6rem;margin:3rem 0 1rem">${esc(p.allH)}</h2>
  <label class="sr" for="lib-q">${esc(p.search)}</label><input id="lib-q" class="search" type="search" placeholder="${attr(p.search)}" data-lib-search>
  <div class="filters">${chip('topic', 'all', c.ui.allTopics, true)}${topics.map(t => chip('topic', t, p.topics[t])).join('')}</div>
  <div class="filters" style="margin-top:-1rem">${chip('stance', 'all', c.ui.all, true)}${Object.entries(p.stances).map(([k, v]) => chip('stance', k, v)).join('')}${chip('pr', 'true', p.peer)}</div>
  <p class="lib-count"><span data-lib-count>${items.length}</span> ${esc(p.count)}</p>
  <ul class="lib">${li}</ul>
  <div class="prose" style="margin-top:4rem">${p.more}</div>
</div></section>`;
  return layout(ctx, page, { title: p.title, description: p.description, jsonld: siteGraph(ctx, page, p) }, body, ['assets/js/lists.js']);
}

// ===================================================================== WHAT NOW
function next(ctx, page) {
  const c = ctx.L.copy, p = c.pages.next;
  const body = `${pageHead(ctx, p)}
<section class="linen band band--tight" style="padding-top:0"><div class="wrap"><div class="paths paths--3">
${p.paths.map(x => `<article class="path" id="${attr(x.id)}"><h2 style="font-size:1.6rem;margin-bottom:.6rem">${esc(x.h)}</h2>${x.body}</article>`).join('')}
</div></div></section>
<section class="plate band"><div class="wrap split" style="align-items:center"><div>${p.story}</div><div><blockquote class="pull">${p.quote}</blockquote><span class="cite">${p.quoteCite}</span></div></div></section>`;
  return layout(ctx, page, { title: p.title, description: p.description, jsonld: siteGraph(ctx, page, p) }, body, []);
}

// ===================================================================== ABOUT
function about(ctx, page) {
  const c = ctx.L.copy, p = c.pages.about, imgs = ctx.L.images.credits || [];
  const body = `${pageHead(ctx, p)}
<section class="linen band band--tight" style="padding-top:0"><div class="wrap prose">${p.body}
<h2>${p.creditsH}</h2><ul>${imgs.map(i => `<li>${esc(i.what)}: ${esc(i.author)}, ${esc(i.license)}${i.source ? `, <a href="${attr(i.source)}" target="_blank" rel="noopener">${esc(p.sourceLink)}</a>` : ''}</li>`).join('')}</ul>
${p.after || ''}</div></section>`;
  return layout(ctx, page, { title: p.title, description: p.description, jsonld: siteGraph(ctx, page, p) }, body, []);
}

export function notFound(ctx) {
  const c = ctx.L.copy;
  const page = { slug: '404' };
  // 404 is served at any depth, so it uses root-absolute paths (it only ever appears on the live site)
  const ctx2 = { ...ctx, asset: p => '/' + p, href: (slug) => '/' + (slug === 'index' ? '' : slug + '.html'), abs: ctx.abs };
  return layout(ctx2, { slug: 'index' }, { title: c.notFound.title, description: c.notFound.text },
    `<section class="linen"><div class="wrap page-head"><h1>${c.notFound.h1}</h1><p class="lede">${c.notFound.text}</p><div class="btn-row"><a class="btn btn--solid" href="/">${esc(c.notFound.cta)}</a><a class="btn" href="/es/">Ir al inicio en español</a></div></div></section>`).replace('<meta name="robots" content="index, follow', '<meta name="robots" content="noindex, follow');
}

export const pages = [
  { slug: 'index', render: home },
  { slug: 'explore', render: explore },
  { slug: 'evidence', render: evidence, schemaType: 'CollectionPage' },
  { slug: 'weigh', render: weigh },
  { slug: 'wounds', render: wounds, schemaType: 'Article' },
  { slug: 'dating', render: dating, schemaType: 'Article' },
  { slug: 'image', render: image, schemaType: 'Article' },
  { slug: 'timeline', render: timeline },
  { slug: 'videos', render: videos, schemaType: 'CollectionPage' },
  { slug: 'library', render: library, schemaType: 'CollectionPage' },
  { slug: 'next', render: next },
  { slug: 'about', render: about, schemaType: 'AboutPage' },
  { slug: 'faq', render: faqPage },
];
