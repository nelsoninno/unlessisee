// llms.txt and llms-full.txt: plain, factual, AI-readable summaries generated from the English content.
const strip = h => String(h || '').replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim();
export function llms(L, C) {
  const d = `https://${C.domain}/`;
  const c = L.copy;
  return `# Unless I See (unlessisee.org)

> A free, non-commercial, bilingual (English and Spanish) educational website about the Shroud of Turin. It presents the evidence for and against the authenticity of the Shroud, rates each argument by strength, gives the strongest skeptical arguments at full strength, and links every claim to its source. Created by Nelson Inno as a pro bono project.

## What the site says, in brief
- The Shroud of Turin is a linen cloth about 4.4 by 1.1 meters with the faint front and back image of a man who appears to have been scourged and crucified. It has been kept in Turin, Italy, since 1578.
- Its documented history begins around 1354 in Lirey, France. Earlier history (Image of Edessa, Pray Codex, Constantinople) is hypothesized.
- The 1988 radiocarbon dating by Arizona, Oxford and Zurich gave AD 1260 to 1390 at 95% confidence (Damon and others, Nature, 1989). The site treats this as the strongest single argument that the cloth is medieval.
- Later statistical reanalyses of the raw data (Riani 2013, Casabianca 2019, Walsh and Schwalbe 2020) found the samples were not homogeneous, but none points to the first century; the largest proposed correction is 88 radiocarbon years.
- How the image formed is unexplained. The 1978 STURP team found no pigment or binder forming the image; the color is confined to the outermost layer of the top fibers (about 0.2 micrometers). No method has reproduced every property of the image at once.
- The site does not claim that science proves the Shroud is authentic, and it labels weak claims (coins over the eyes, flower images, inscriptions, some pollen claims) as weak.
- The Catholic Church has never officially declared the Shroud authentic.

## Pages
- [Home](${d}): overview, the negative image, 3D information, the wounds, the dating and the image-formation question
- [Explore the cloth](${d}explore.html): zoomable full-cloth image with negative filter and annotated marks
- [The case file](${d}evidence.html): ${L.data.evidence ? L.data.evidence.items.length : ''} arguments for and against, rated by strength, plus a Bayesian "weigh it yourself" calculator
- [The wounds](${d}wounds.html): each wound described by forensic pathologists, next to the Gospel text
- [Carbon dating](${d}dating.html): the 1988 test, all twelve measurements, the sample, the reanalyses
- [How was it made?](${d}image.html): image properties and every hypothesis, including painting, scorch, rubbing, proto-photography, Maillard reaction and radiation
- [Timeline](${d}timeline.html): documented and hypothesized history
- [Library](${d}library.html): searchable index of research papers, mostly from shroud.com
- [About](${d}about.html): method, credits, contact
- Spanish version: ${d}es/

## Contact
hey@everybodyknowsyou.com
`;
}
export function llmsFull(L, C) {
  let s = llms(L, C) + '\n## The case file, item by item\n';
  for (const it of (L.data.evidence ? L.data.evidence.items : [])) {
    s += `\n### ${it.title} (${it.lean === 'against' ? 'argument against authenticity' : it.lean === 'neutral' ? 'context' : 'argument for authenticity'}, rated ${it.strength})\n${strip(it.claim)}\n${strip(it.detail)}\nSkeptic: ${strip(it.skeptic)}\n${it.reply ? 'Reply: ' + strip(it.reply) + '\n' : ''}Sources: ${(it.sources || []).map(x => x.label + ' ' + x.url).join('; ')}\n`;
  }
  s += '\n## Timeline\n';
  for (const e of (L.data.timeline ? L.data.timeline.events : [])) s += `- ${e.date_label}: ${e.title} (${e.certainty}). ${strip(e.text)}\n`;
  return s;
}
