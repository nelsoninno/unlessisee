// llms.txt and llms-full.txt: plain, factual, AI-readable summaries generated from the English content.
const strip = h => String(h || '').replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim();
export function llms(L, C) {
  const d = `https://${C.domain}/`;
  const c = L.copy;
  const faq = (c.pages.faq && c.pages.faq.items) || [];
  const langs = C.langs.map(l => `${l.name} (${l.code === C.defaultLang ? d : d + l.code + '/'})`).join(', ');
  return `# Unless I See (seetheshroud.org)

> The Shroud of Turin explained, with the evidence for and against its authenticity. A free, non-commercial educational website in 12 languages. It rates every argument by strength, gives the strongest skeptical arguments at full strength, links every claim to its source, and offers the most visual way to explore the cloth: high-resolution zoom, the photographic negative, a 3D relief, a wound map and an interactive verdict tool. Created by Nelson Inno as a pro bono project.

Also known as: See the Shroud; Hasta que no vea (Spanish). The subject is also called the Turin Shroud, the Holy Shroud and the Shroud of Jesus.

## Questions this site answers
${faq.map(f => `- [${f.q}](${d}faq.html#${f.id})`).join('\n')}

## What the site says, in brief
- The Shroud of Turin is a linen cloth about 4.4 by 1.1 meters with the faint front and back image of a man who appears to have been scourged and crucified. It has been kept in Turin, Italy, since 1578.
- Its documented history begins around 1354 in Lirey, France. Earlier history (Image of Edessa, Pray Codex, Constantinople) is hypothesized.
- The 1988 radiocarbon dating by Arizona, Oxford and Zurich gave AD 1260 to 1390 at 95% confidence (Damon and others, Nature, 1989). The site treats this as the strongest single argument that the cloth is medieval.
- Later statistical reanalyses of the raw data (Riani 2013, Casabianca 2019, Walsh and Schwalbe 2020) found the samples were not homogeneous, but none points to the first century; the largest proposed correction is 88 radiocarbon years.
- How the image formed is unexplained. The 1978 STURP team found no pigment or binder forming the image; the color is confined to the outermost layer of the top fibers (about 0.2 micrometers). No method has reproduced every property of the image at once.
- The strongest argument for authenticity is that no one has reproduced the image with all of its features, and no other burial cloth carries one like it. The strongest argument against is the 1988 carbon date.
- The site does not claim that science proves the Shroud is authentic, and it labels weak claims (coins over the eyes, flower images, inscriptions, some pollen claims, blood type AB) as weak.
- The Catholic Church has never officially declared the Shroud authentic.

## Pages
- [Home](${d}): overview, the negative image, 3D information, the wounds, the dating and the image-formation question
- [Questions and answers](${d}faq.html): the Shroud of Turin explained in ${faq.length} short, sourced answers
- [Explore the cloth](${d}explore.html): zoomable full-cloth image with negative filter and annotated marks
- [The case file](${d}evidence.html): ${L.data.evidence ? L.data.evidence.items.length : ''} arguments for and against, rated by strength, with the skeptic's best answer
- [Claims you will hear, checked](${d}evidence.html#claims): ${L.data.claims ? L.data.claims.items.length : ''} popular claims from both sides (Leonardo da Vinci, NASA, the Church, the carbon date, pollen, coins over the eyes and more), each with a verdict and sources
- [Your verdict](${d}weigh.html): weigh 14 key points yourself; skeptic, neutral and believer presets
- [The wounds](${d}wounds.html): each wound described by forensic pathologists, next to the Gospel text
- [Carbon dating](${d}dating.html): the 1988 test, all twelve measurements, the sample, the reanalyses
- [How was it made?](${d}image.html): image properties and every hypothesis, including painting, scorch, rubbing, proto-photography, Maillard reaction and radiation
- [Timeline](${d}timeline.html): documented and hypothesized history
- [Videos checked](${d}videos.html): three popular videos fact-checked claim by claim, plus one recommended conversation about the historical Jesus
- [Library](${d}library.html): searchable index of research papers, mostly from shroud.com
- [What now?](${d}next.html): next steps for skeptics, seekers and believers
- [About](${d}about.html): method, credits, contact

## Languages
${langs}

## Contact
hey@everybodyknowsyou.com
`;
}
export function llmsFull(L, C) {
  let s = llms(L, C) + '\n## Questions and answers\n';
  for (const f of ((L.copy.pages.faq && L.copy.pages.faq.items) || [])) s += `\n### ${f.q}\n${f.a}\n`;
  s += '\n## The case file, item by item\n';
  for (const it of (L.data.evidence ? L.data.evidence.items : [])) {
    s += `\n### ${it.title} (${it.lean === 'against' ? 'argument against authenticity' : it.lean === 'neutral' ? 'context' : 'argument for authenticity'}, rated ${it.strength})\n${strip(it.claim)}\n${strip(it.detail)}\nSkeptic: ${strip(it.skeptic)}\n${it.reply ? 'Reply: ' + strip(it.reply) + '\n' : ''}Sources: ${(it.sources || []).map(x => x.label + ' ' + x.url).join('; ')}\n`;
  }
  if (L.data.claims && L.data.claims.items) {
    const V = { false: 'false', noevidence: 'no evidence', unproven: 'unproven', overstated: 'overstated', partly: 'partly true' };
    s += '\n## Claims you will hear, checked\n';
    for (const cl of L.data.claims.items) s += `\n### "${cl.claim}" (usually said ${cl.side === 'against' ? 'against' : 'for'} authenticity; verdict: ${V[cl.verdict] || cl.verdict})\n${strip(cl.check)}\n${(cl.sources || []).length ? 'Sources: ' + cl.sources.map(x => x.label + ' ' + x.url).join('; ') + '\n' : ''}`;
  }
  s += '\n## Timeline\n';
  for (const e of (L.data.timeline ? L.data.timeline.events : [])) s += `- ${e.date_label}: ${e.title} (${e.certainty}). ${strip(e.text)}\n`;
  return s;
}
