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

## Status (Oct 2026)
- v1 built: home, explorer, case file + calculator, wounds, carbon dating, image formation (zoom, test grid, emanation), timeline, library, about.
- Pending: Spanish translation pass, library index, video findings, more languages (pt, fr, it, de, pl, tl, zh, ko, ar, hi), Cloudflare + domain, Nelson's story page.
