# CLAUDE.md: seetheshroud.org (Unless I See)

## What this is
Pro bono EKY project for Nelson Inno. A bilingual (EN at /, ES at /es/) educational site about the Shroud of Turin aimed at skeptics: fair "case file" framing, the strongest skeptic arguments at full strength, every claim sourced. Brand: Unless I See / Hasta que no vea (John 20:25). Every language's name is the exact wording of John 20:25 in the Bible quoted on that language's site (Spanish: La Biblia Latinoamericana). Main site is the Shroud; Nelson's testimony and "the pattern to God" will go on a separate subpage later.

## Repo and deploy
- Repo: github.com/nelsoninno/unlessisee (branch main). Commits authored as "Nelson Inno" with a non-personal email.
- Hosting: Cloudflare Pages, project unlessisee (unlessisee.pages.dev; deploys on push to main). Main domain seetheshroud.org; unlessisee.org also owned (Namecheap, DNS on Cloudflare).
- Tokens are supplied at runtime and never written to any file.

## Build
`node _build/build.mjs` from the repo root regenerates every page, sitemap.xml, llms.txt and llms-full.txt. Never hand-edit the generated .html files; edit `_build/content/*.mjs` or `_build/data/**` and rebuild.

## Content rules
- No em dashes. Plain language. Spanish with correct accents and opening marks.
- Claims the site must NOT make: radiocarbon "debunked"; statistical reanalyses pointing to the 1st century; WAXS/Fanti "dated it to Christ's time"; the sample proven to be a repair; coins over the eyes, inscriptions, flower images as evidence; Frei pollen as proof; AB blood type; Sudarium as support; "the Church declares it authentic".
- The emanation animation is always labeled "One hypothesis, visualized. Not evidence."

## Images and permissions
- Only public domain / CC0 / CC BY-SA images (credited on About). STURP photos (STERA, Joseph Marino) and Durante 2002 / Haltadefinizione 2008 (Archdiocese of Turin) need written permission; requests drafted for Nelson.
- Barrie Schwortz died in 2024; the Library page is dedicated to him.

## Publishing (current workaround)
This session's GitHub proxy cannot push to the repo, so pushes go through Nelson's computer: build here, bundle the commits, copy the bundle to the project folder, then fetch and push from the computer. A copy of the site is kept in the project folder as `unlessisee-website`.

## Status (21 Oct 2026)
- Pages: home, explore, case file, weigh it yourself (weigh.html, in the menu), wounds, carbon dating, how it formed, timeline (with route map and icon overlay), videos checked, library (2,400+ items), what now, about.
- Fact-check pass applied to English (report in the build session); Spanish synced.
- Live languages: en, es, pt, fr, it, de, pl, tl (tag fil), zh (tag zh-Hans), ko, ar (RTL), hi. All 12 planned languages are live. Each language is content/LANG.mjs + data/LANG/; add it to `_build/config.json` only when its files are complete.
- Bible versions: en WEB (PD), es La Biblia Latinoamericana (© San Pablo / Verbo Divino; short quotes, credited; text typed from Nelson's own copy), pt Bíblia Livre (CC BY 4.0), fr Louis Segond 1910 (PD), de Lutherbibel 1912 (PD), pl Uwspółcześniona Biblia Gdańska (CC BY-ND 4.0, quoted verbatim), zh 新标点和合本 (listed PD by ebible; confirm), ko 개역한글 via ebible 'kor' (listed PD; confirm), hi IRV 2019 (CC BY-SA 4.0), it Riveduta 1927 (PD), tl Ang Dating Biblia 1905 (PD, via CrossWire), ar Smith and Van Dyck (PD).
- RTL: logical CSS properties; SVG charts and the before/after slider stay left-to-right; nothing may be parked off-screen with left:-999px (it widens RTL pages).
- Weigh it yourself: 14 statements, five answer buttons each, a two-sided bar for the result, and the strongest counter-argument per point (pulled from that language's evidence.json skeptic/reply field). Structure and weights: `_build/data/weigh-structure.json`. Statements: `_build/data/<lang>/weigh.json`. Page copy and menu label: `_build/content/weigh/<lang>.json` (merged in by build.mjs). The two strongest arguments (carbon date against, unreproduced image for) weigh 3.
- Your verdict presets (data/weigh-presets.json): honest skeptic about 24%, neutral 69% (Claude Opus 5.5 reading of the evidence, stated on the page), honest believer about 92%. Nelson approved these values on 22 Oct 2026.
- FAQ page (faq.html): 19 search-shaped questions, content in content/faq/<lang>.json, FAQPage JSON-LD; llms.txt lists every question.
- Emanation animation: the body glows evenly through the cloth from the start; at about 3/4 the cloth falls through a body of light that rises and fades.
- Touch screens: nothing may trap scrolling. Sticky elements are wide-screen only; the explorer uses one finger to scroll the page and two fingers to move or zoom; 3D viewers use touch-action pan-y on touch screens.
- Logo: an eye with a gold iris and a light cross (header mark in build.mjs, favicons from tools/icon.mjs, share images from tools/share.mjs).
- 3D relief viewers: rotation limited to about 24 degrees left/right and a little up/down so the cloth always faces the viewer.
- Explore markers are callouts (dot on the detail, thin line, number off to the side; offsets dx/dy and highlight radius r in data/en/spots.json). Selecting one dims the rest and shows that area in negative inside a glowing ring.
- The header nav collapses into the Menu button whenever a language's labels do not fit (main.js measures it).
- Discoverability gate (22 Oct 2026): one H1 per page, no heading skips, titles over 65 chars drop the brand suffix automatically, descriptions sized per language, llms files in sitemap; tools/seoaudit.py re-runs it. _redirects keeps CLAUDE.md, README.md and _build/ off the website.
- Domains: seetheshroud.org is the main domain (canonical, sitemap, image names end in seetheshroud.org). unlessisee.org is reserved for later (Nelson's testimony); Nelson handles it and the Cloudflare side himself.
- Pending: seetheshroud.org activation on Cloudflare Pages, permission replies for STURP and 2002/2008 photos, Nelson's story page.
