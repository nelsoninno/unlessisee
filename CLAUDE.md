# CLAUDE.md: unlessisee.org

## What this is
Pro bono EKY project for Nelson Inno. A bilingual (EN at /, ES at /es/) educational site about the Shroud of Turin aimed at skeptics: fair "case file" framing, the strongest skeptic arguments at full strength, every claim sourced. Brand: Unless I See / Si no veo (John 20:25). Main site is the Shroud; Nelson's testimony and "the pattern to God" will go on a separate subpage later.

## Repo and deploy
- Repo: github.com/nelsoninno/unlessisee (branch main). Commits authored as "Nelson Inno" with a non-personal email.
- Hosting: Cloudflare Pages (to be connected). Domain unlessisee.org at Namecheap (Nelson buying; suggested extras sinoveo.org, unlessisee.net).
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
- Pages (EN and ES): home, explore, case file + calculator, wounds, carbon dating, how it formed, timeline (with route map and icon overlay), videos checked, library (2,400+ items), what now, about.
- Fact-check pass applied to English (report in the build session); Spanish synced.
- In progress: pt, fr, it, de, pl, tl, zh, ko, ar, hi translations (each is content/LANG.mjs + data/LANG/). Add a language to `_build/config.json` only when its files are complete.
- Pending: Cloudflare Pages + unlessisee.org, permission replies for STURP and 2002/2008 photos, Nelson's story page.
