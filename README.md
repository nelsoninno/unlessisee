# seetheshroud.org

Unless I See (in Spanish, Hasta que no vea) is a free, pro bono educational website about the Shroud of Turin: the evidence for and against, with sources, in English and Spanish (more languages coming).

Built by everybodyknowsyou.com for Nelson Inno.

## How it is built
- Plain static HTML, CSS and JavaScript. No framework, nothing to install to view it.
- The pages are generated from content files by a small script: `node _build/build.mjs` (Node 18+).
  - Text: `_build/content/en.mjs` (English) and `_build/content/es.mjs` (Spanish).
  - Facts and data: `_build/data/en/*.json` and `_build/data/es/*.json` (case file, timeline, wounds, carbon dating, explorer marks, calculator).
  - Library: `_build/data/library.json` (index of papers, mostly from shroud.com).
- Colors and fonts: `assets/css/tokens.css` only.
- 3D views: three.js (vendored in `assets/vendor/`), with height maps precomputed in `assets/js/data/` so the 3D also works when a page is opened straight from disk.

## To change something
Ask for the change in plain words (page, what to change, both languages). Edit the content file, run the build, check the page, publish.

## Images
All images are public domain, CC0 or CC BY-SA, credited on the About page. Do not add photographs from shroud.com, STERA or the Archdiocese of Turin without written permission.
