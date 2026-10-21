// build.mjs: generates the static, multilingual site from content + data files.
// Run from the site root:  node _build/build.mjs
// Output is plain HTML (no runtime build). English at /, every other language at /<lang>/.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { pages } from './pages.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
export const CONFIG = JSON.parse(fs.readFileSync(path.join(__dirname, 'config.json'), 'utf8'));

const ekySvg = fs.readFileSync(path.join(__dirname, 'eky-credit.svg'), 'utf8')
  .replace(/<\?xml[^>]*>\s*/, '').replace(/ id="Layer_1" data-name="Layer 1"/, '');

export const esc = s => String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');
export const attr = esc;
export const json = o => JSON.stringify(o).replace(/</g, '\\u003c');

function readJSON(p, fallback) { try { return JSON.parse(fs.readFileSync(p, 'utf8')); } catch (e) { return fallback; } }

function deepMerge(base, over) {
  if (Array.isArray(base) || Array.isArray(over) || typeof base !== 'object' || typeof over !== 'object' || !base || !over) return over === undefined ? base : over;
  const out = { ...base };
  for (const k of Object.keys(over)) out[k] = deepMerge(base[k], over[k]);
  return out;
}
async function loadLang(lang) {
  let copy = (await import(path.join(__dirname, 'content', lang + '.mjs') + '?t=' + Date.now())).default;
  if (lang !== CONFIG.defaultLang) {
    const en = (await import(path.join(__dirname, 'content', CONFIG.defaultLang + '.mjs') + '?t=' + Date.now())).default;
    copy = deepMerge(en, copy); // missing keys fall back to English until translated
  }
  // "Weigh it yourself" copy lives in content/weigh/<lang>.json (nav label + page copy), English as fallback
  const wEn = readJSON(path.join(__dirname, 'content', 'weigh', CONFIG.defaultLang + '.json'), null);
  const wLoc = readJSON(path.join(__dirname, 'content', 'weigh', lang + '.json'), null) || wEn;
  if (wEn) {
    copy.pages = { ...copy.pages, weigh: deepMerge(wEn.page, wLoc.page) };
    if (!copy.nav.some(n => n.slug === 'weigh')) { const i = copy.nav.findIndex(n => n.slug === 'evidence'); copy.nav = [...copy.nav]; copy.nav.splice(i + 1, 0, { slug: 'weigh', label: wLoc.nav || wEn.nav }); }
  }
  const d = n => readJSON(path.join(__dirname, 'data', lang, n + '.json'), readJSON(path.join(__dirname, 'data', 'en', n + '.json'), null));
  // Positions, zoom levels and layers always come from the English data, so translations never drift.
  const enD = n => readJSON(path.join(__dirname, 'data', 'en', n + '.json'), null);
  const syncPos = (loc, en, listKey, fields) => { if (!loc || !en || loc === en) return loc; const by = {}; (en[listKey] || []).forEach(i => by[i.id] = i); (loc[listKey] || []).forEach(i => { const e = by[i.id]; if (e) fields.forEach(f => { if (e[f] !== undefined) i[f] = e[f]; }); }); if (en.image) loc.image = en.image; return loc; };
  const _spots = syncPos(d('spots'), enD('spots'), 'spots', ['x', 'y', 'zoom', 'layer', 'n']);
  const _wounds = syncPos(d('wounds'), enD('wounds'), 'items', ['x', 'y', 'side']);
  return { copy, data: { evidence: d('evidence'), timeline: d('timeline'), wounds: _wounds, radiocarbon: d('radiocarbon'), spots: _spots, weigh: d('weigh'), videos: d('videos'), keyreads: d('keyreads') }, map: readJSON(path.join(__dirname, 'data', 'map.json'), null), library: readJSON(path.join(__dirname, 'data', 'library.json'), { items: [] }), images: readJSON(path.join(__dirname, 'data', lang, 'images.json'), readJSON(path.join(__dirname, 'data', 'images.json'), {})), thomas: readJSON(path.join(__dirname, 'data', lang, 'thomas.json'), null) || readJSON(path.join(__dirname, 'data', 'thomas.json'), {})[lang] || readJSON(path.join(__dirname, 'data', 'thomas.json'), {}).en };
}

// URL helpers
export function makeCtx(lang, L) {
  const isDefault = lang === CONFIG.defaultLang;
  const up = isDefault ? '' : '../';
  const base = `https://${CONFIG.domain}/`;
  return {
    lang, L, up,
    asset: p => up + p,
    href: (slug, toLang = lang) => {
      const file = slug === 'index' ? 'index.html' : slug + '.html';
      if (toLang === lang) return file;
      if (toLang === CONFIG.defaultLang) return '../' + file;
      return (isDefault ? '' : '../') + toLang + '/' + file;
    },
    abs: (slug, toLang = lang) => base + (toLang === CONFIG.defaultLang ? '' : toLang + '/') + (slug === 'index' ? '' : slug + '.html'),
    absAsset: p => base + p,
  };
}

function head(ctx, page, meta) {
  const { L, lang } = ctx, c = L.copy;
  const alts = CONFIG.langs.map(l => `<link rel="alternate" hreflang="${l.tag || l.code}" href="${ctx.abs(page.slug, l.code)}">`).join('\n');
  const fontUrl = 'https://fonts.googleapis.com/css2?family=Schibsted+Grotesk:wght@400;500;600&family=Spectral:ital,wght@0,300;0,400;0,600;1,300;1,400&display=swap';
  const share = ctx.absAsset('assets/images/social-share/' + (c.shareImage || 'social-share-unless-i-see-unlessisee.org.jpg'));
  const ld = meta.jsonld ? `<script type="application/ld+json">${json(meta.jsonld)}</script>` : '';
  return `<!DOCTYPE html>
<html lang="${(CONFIG.langs.find(x => x.code === lang) || {}).tag || lang}"${c.dir ? ` dir="${c.dir}"` : ''}>
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${esc(meta.title)}</title>
<meta name="description" content="${attr(meta.description)}">
<meta name="keywords" content="${attr(c.keywords)}">
<link rel="canonical" href="${ctx.abs(page.slug)}">
${alts}
<link rel="alternate" hreflang="x-default" href="${ctx.abs(page.slug, CONFIG.defaultLang)}">
<meta property="og:title" content="${attr(meta.title)}">
<meta property="og:description" content="${attr(meta.description)}">
<meta property="og:type" content="website">
<meta property="og:url" content="${ctx.abs(page.slug)}">
<meta property="og:image" content="${share}">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:image:alt" content="${attr(c.shareAlt)}">
<meta property="og:site_name" content="${attr(c.brand)}">
<meta property="og:locale" content="${c.locale}">
${CONFIG.langs.filter(l => l.code !== lang).map(l => `<meta property="og:locale:alternate" content="${l.locale}">`).join('\n')}
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${attr(meta.title)}">
<meta name="twitter:description" content="${attr(meta.description)}">
<meta name="twitter:image" content="${share}">
<meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1">
<meta name="author" content="Nelson Inno">
<meta name="theme-color" content="#1D2327">
<meta http-equiv="content-language" content="${lang}">
<link rel="icon" href="${ctx.asset('favicon.ico')}" sizes="any">
<link rel="icon" type="image/png" sizes="32x32" href="${ctx.asset('favicon-32x32.png')}">
<link rel="icon" type="image/png" sizes="16x16" href="${ctx.asset('favicon-16x16.png')}">
<link rel="apple-touch-icon" sizes="180x180" href="${ctx.asset('apple-touch-icon.png')}">
<link rel="manifest" href="${ctx.asset('site.webmanifest')}">
<link rel="alternate" type="text/plain" title="llms.txt" href="https://${CONFIG.domain}/llms.txt">
${meta.preload ? `<link rel="preload" as="image" href="${ctx.asset(meta.preload)}" type="image/webp">` : ''}
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="preload" as="style" href="${fontUrl}">
<link rel="stylesheet" href="${fontUrl}" media="print" onload="this.media='all'">
<noscript><link rel="stylesheet" href="${fontUrl}"></noscript>
<link rel="stylesheet" href="${ctx.asset('assets/css/tokens.css')}">
<link rel="stylesheet" href="${ctx.asset('assets/css/styles.css')}">
${c.fontUrl ? `<link rel="stylesheet" href="${c.fontUrl}"><style>:root{${c.fontVars || ''}}</style>` : ''}
${ld}
</head>`;
}

const mark = `<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="7" y="1.5" width="10" height="21" rx="1" fill="none" stroke="currentColor" stroke-width="1.3"/><ellipse cx="12" cy="7" rx="2" ry="2.6" fill="currentColor" opacity=".55"/><path d="M9.6 10.5h4.8l-.6 9h-3.6z" fill="currentColor" opacity=".35"/></svg>`;

function langSwitch(ctx, page, inFooter = false) {
  const cur = CONFIG.langs.find(l => l.code === ctx.lang);
  if (CONFIG.langs.length <= 3) return `<div class="lang" aria-label="${attr(ctx.L.copy.ui.language)}">` + CONFIG.langs.map((l, i) =>
    (i ? '<span aria-hidden="true">/</span>' : '') + (l.code === ctx.lang ? `<span class="active" lang="${l.tag || l.code}">${l.short}</span>` : `<a href="${ctx.href(page.slug, l.code)}" lang="${l.tag || l.code}" hreflang="${l.tag || l.code}">${l.short}</a>`)).join('') + `</div>`;
  return `<details class="langmenu${inFooter ? ' langmenu--up' : ''}"><summary aria-label="${attr(ctx.L.copy.ui.language)}">${cur.short}</summary><ul>` + CONFIG.langs.map(l =>
    `<li>${l.code === ctx.lang ? `<span class="active" lang="${l.tag || l.code}">${esc(l.name)}</span>` : `<a href="${ctx.href(page.slug, l.code)}" lang="${l.tag || l.code}" hreflang="${l.tag || l.code}">${esc(l.name)}</a>`}</li>`).join('') + `</ul></details>`;
}

function header(ctx, page) {
  const c = ctx.L.copy;
  const links = c.nav.map(n => `<a href="${ctx.href(n.slug)}"${n.slug === page.slug ? ' aria-current="page"' : ''}>${esc(n.label)}</a>`).join('');
  return `<a class="skip" href="#main">${esc(c.ui.skip)}</a>
<header class="site-head"><div class="wrap">
<a class="brand" href="${ctx.href('index')}">${mark}<span>${esc(c.brand)}</span></a>
<button class="menu-btn" type="button" aria-expanded="false" aria-controls="nav">${esc(c.ui.menu)}</button>
<nav class="nav" id="nav" aria-label="${attr(c.ui.mainNav)}">${links}</nav>
${langSwitch(ctx, page)}
</div></header>`;
}

function footer(ctx, page) {
  const c = ctx.L.copy;
  const col = (title, items) => `<div><h4>${esc(title)}</h4><ul>${items.map(n => `<li><a href="${ctx.href(n.slug)}">${esc(n.label)}</a></li>`).join('')}</ul></div>`;
  return `<footer class="site-foot"><div class="wrap">
<div class="foot-grid">
<div><p style="font-family:var(--font-serif);font-size:1.4rem;color:#fff">${esc(c.brand)}</p><p style="margin-top:.6rem;max-width:42ch;color:var(--silver-soft)">${c.footer.about}</p></div>
${col(c.footer.explore, c.nav.slice(0, 5))}
${col(c.footer.more, c.nav.slice(5).concat(c.footer.extra || []))}
</div>
<div class="foot-base">
<div>${c.footer.rights.replace('{year}', '<span data-year>2026</span>')}</div>
${langSwitch(ctx, page, true)}
<a class="eky-credit" href="https://everybodyknowsyou.com" target="_blank" rel="noopener" aria-label="${attr(c.footer.ekyAria)}"><span class="eky-credit__text">${esc(c.footer.eky)}</span>${ekySvg}</a>
</div>
</div></footer>`;
}

export function layout(ctx, page, meta, body, scripts = []) {
  const s = ['assets/js/main.js', ...scripts].map(p => `<script src="${ctx.asset(p)}" defer></script>`).join('\n');
  return `${head(ctx, page, meta)}
<body class="page-${page.slug}">
${header(ctx, page)}
<main id="main">
${body}
</main>
${footer(ctx, page)}
${s}
</body>
</html>
`;
}

async function main() {
  let count = 0;
  for (const l of CONFIG.langs) {
    const L = await loadLang(l.code);
    const ctx = makeCtx(l.code, L);
    const outDir = l.code === CONFIG.defaultLang ? ROOT : path.join(ROOT, l.code);
    fs.mkdirSync(outDir, { recursive: true });
    for (const page of pages) {
      const html = page.render(ctx, page);
      fs.writeFileSync(path.join(outDir, page.slug + '.html'), html);
      count++;
    }
    // 404 only at the root, in the default language
    if (l.code === CONFIG.defaultLang) {
      const nf = (await import('./pages.mjs')).notFound;
      fs.writeFileSync(path.join(ROOT, '404.html'), nf(makeCtx(l.code, L)));
    }
  }
  // sitemap with hreflang alternates
  const today = new Date().toISOString().slice(0, 10);
  const ctxs = {}; for (const l of CONFIG.langs) ctxs[l.code] = makeCtx(l.code, { copy: {} });
  let sm = '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n';
  for (const l of CONFIG.langs) for (const page of pages) {
    const c0 = ctxs[l.code];
    sm += `  <url><loc>${c0.abs(page.slug)}</loc><lastmod>${today}</lastmod><changefreq>monthly</changefreq><priority>${page.slug === 'index' ? '1.0' : '0.8'}</priority>\n`;
    for (const l2 of CONFIG.langs) sm += `    <xhtml:link rel="alternate" hreflang="${l2.tag || l2.code}" href="${c0.abs(page.slug, l2.code)}"/>\n`;
    sm += `    <xhtml:link rel="alternate" hreflang="x-default" href="${c0.abs(page.slug, CONFIG.defaultLang)}"/>\n  </url>\n`;
  }
  sm += '</urlset>\n';
  fs.writeFileSync(path.join(ROOT, 'sitemap.xml'), sm);
  // llms.txt + llms-full.txt from the English content
  const L = await loadLang('en');
  const { llms, llmsFull } = await import('./llms.mjs');
  fs.writeFileSync(path.join(ROOT, 'llms.txt'), llms(L, CONFIG));
  fs.writeFileSync(path.join(ROOT, 'llms-full.txt'), llmsFull(L, CONFIG));
  console.log('built', count, 'pages');
}
main();
