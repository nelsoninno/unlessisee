# CLAUDE.md: unlessisee.org

## What this is
Pro bono EKY project for Nelson Inno. A bilingual (EN at /, ES at /es/) educational site about the Shroud of Turin aimed at skeptics: fair "case file" framing, the strongest skeptic arguments at full strength, every claim sourced. Brand: Unless I See / Si no veo (John 20:25). Main site is the Shroud; Nelson's testimony and "the pattern to God" will go on a separate subpage later.

## Repo and deploy
- Repo: github.com/nelsoninno/unlessisee (branch main). Commits authored as "Nelson Inno" with a non-personal email.
- Hosting: Cloudflare Pages, live at unlessisee.pages.dev (deploys on push to main). Domain unlessisee.org at Namecheap (Nelson buying; suggested extras sinoveo.org, unlessisee.net).
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
- Bible versions: en WEB (PD), es RV1909 (PD), pt Bíblia Livre (CC BY 4.0), fr Louis Segond 1910 (PD), de Lutherbibel 1912 (PD), pl Uwspółcześniona Biblia Gdańska (CC BY-ND 4.0, quoted verbatim), zh 新标点和合本 (listed PD by ebible; confirm), ko 개역한글 via ebible 'kor' (listed PD; confirm), hi IRV 2019 (CC BY-SA 4.0), it Riveduta 1927 (PD), tl Ang Dating Biblia 1905 (PD, via CrossWire), ar Smith and Van Dyck (PD).
- RTL: logical CSS properties; SVG charts and the before/after slider stay left-to-right; nothing may be parked off-screen with left:-999px (it widens RTL pages).
- Weigh it yourself: 14 statements, five answer buttons each, a two-sided bar for the result, and the strongest counter-argument per point (pulled from that language's evidence.json skeptic/reply field). Structure and weights: `_build/data/weigh-structure.json`. Statements: `_build/data/<lang>/weigh.json`. Page copy and menu label: `_build/content/weigh/<lang>.json` (merged in by build.mjs). The two strongest arguments (carbon date against, unreproduced image for) weigh 3.
- Emanation animation: the body glows evenly through the cloth from the start; at about 3/4 the cloth falls through a body of light that rises and fades.
- Touch screens: nothing may trap scrolling. Sticky elements are wide-screen only; the explorer uses one finger to scroll the page and two fingers to move or zoom; 3D viewers use touch-action pan-y on touch screens.
- The header nav collapses into the Menu button whenever a language's labels do not fit (main.js measures it).
- Pending: custom domain unlessisee.org, permission replies for STURP and 2002/2008 photos, Nelson's story page.
