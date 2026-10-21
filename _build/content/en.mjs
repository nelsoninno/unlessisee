// English copy. Plain language, no em dashes. HTML allowed in long fields.
export default {
  brand: 'Unless I See',
  locale: 'en_US',
  keywords: 'Shroud of Turin, Turin Shroud, Shroud of Turin evidence, Shroud of Turin carbon dating, Shroud of Turin negative image, Shroud of Turin 3D, is the Shroud of Turin real, Jesus burial cloth, sindonology, Sábana Santa de Turín, STURP, Secondo Pia',
  shareAlt: 'The face on the Shroud of Turin as a photographic negative',
  orgDescription: 'Unless I See is a free, non-commercial educational project that presents the evidence for and against the authenticity of the Shroud of Turin, with sources, in many languages.',
  ui: {
    skip: 'Skip to content', menu: 'Menu', mainNav: 'Main', language: 'Language',
    exhibit: 'Exhibit', detail: 'The details', skeptic: 'The skeptic\'s best answer', reply: 'The reply',
    theCase: 'The full argument', replyAgainst: 'How defenders answer', whyRating: 'Why this rating:',
    all: 'All', allTopics: 'All topics', shown: 'shown', openAll: 'Open or close all',
    prev: 'Previous', next: 'Next', problems: 'Problems with this idea'
  },
  nav: [
    { slug: 'explore', label: 'Explore the cloth' },
    { slug: 'evidence', label: 'The case file' },
    { slug: 'wounds', label: 'The wounds' },
    { slug: 'dating', label: 'Carbon dating' },
    { slug: 'image', label: 'How was it made?' },
    { slug: 'timeline', label: 'Timeline' },
    { slug: 'library', label: 'Library' },
    { slug: 'about', label: 'About' }
  ],
  footer: {
    about: 'A free, non-commercial project. Every claim on this site links to its source, including the sources that disagree with us.',
    explore: 'Explore', more: 'Go deeper', extra: [],
    rights: 'Text {year} Unless I See. Free to share with a link back. Image credits on the About page.',
    eky: 'Website made with love, by', ekyAria: 'Website made with love by everybodyknowsyou.com'
  },
  strength: { strong: 'Strong', moderate: 'Moderate', weak: 'Weak', disputed: 'Disputed', debunked: 'Debunked' },
  lean: { for: 'Points to authenticity', against: 'Points to a medieval origin', neutral: 'Context' },
  categories: { image: 'The image', blood: 'Blood', anatomy: 'Anatomy and wounds', textile: 'The linen', dating: 'Dating', history: 'History', botany: 'Pollen and plants', 'imaging-3d': '3D information', 'image-formation': 'How the image formed', other: 'Other' },
  fig: {
    scaleAlt: 'Diagram of the 4.4 meter cloth with front and back images of a man, head to head',
    scaleFront: 'Front image', scaleBack: 'Back image', scaleLen: 'about 4.4 meters', scaleWid: 'about 1.1 m',
    scaleCaption: 'The whole cloth, as photographed by Giuseppe Enrie in 1931. The body lay on one half. The other half was folded over the head and down the front to the feet. That is why the front and back images meet at the heads.',
    foldFrontAlt: 'Front half of the Shroud, with the front image of the man', foldBackAlt: 'Back half of the Shroud, with the back image of the man',
    foldBtn: 'Fold it the way it wrapped the body', unfoldBtn: 'Unfold it again'
  },
  ui3d: { depth: 'Depth', light: 'Light', clay: 'Clay', negative: 'Negative', fallback: 'This 3D view needs WebGL, which your browser has turned off.' },
  emanation: {
    label: 'One hypothesis, visualized. Not evidence.',
    alt: 'Animation: light rises from a body beneath a linen cloth, the image forms on the cloth, and the cloth falls flat',
    captions: [
      'A body lies under a linen cloth, in the dark.',
      'Hypothesis: a short, intense release of energy from the body itself.',
      'The light travels straight up and straight down, not in all directions.',
      'Only the outermost surface of the fibers darkens. No paint, no scorch.',
      'Physicist John Jackson proposed that the cloth then fell through a body that was no longer there.',
      'What remains is a faint image that no experiment has yet matched in every detail.'
    ],
    ui: { play: 'Play', pause: 'Pause', replay: 'Replay', time: 'Time' }
  },
  powers: {
    label: 'Zoom level', prev: 'Zoom out', next: 'Zoom in',
    fiberNote: 'A thread is a bundle of fibers. Only the top fibers are colored.',
    layerLabel: 'colored layer, about 0.2 µm', lumen: 'inside of the fiber',
    steps: [
      { size: '4.4 m', title: 'The whole cloth', text: 'Front and back images, head to head. From a few steps away, the man is barely visible. The image is that faint.' },
      { size: '25 cm', title: 'The face', text: 'Up close, the face has no outlines, no brush strokes, no direction of light. Light and dark are reversed, like a photographic negative.' },
      { size: '0.25 mm', title: 'A single thread', text: 'Each thread is about a quarter of a millimeter thick, woven three over one. Where the image is, only the tops of the threads facing the body are colored. The threads underneath stay white.' },
      { size: '15 µm', title: 'The fibers in a thread', text: 'A thread is made of roughly 100 to 200 flax fibers. In image areas, only the topmost two or three fibers are colored. Darker areas of the image do not have darker fibers, they have more colored fibers.' },
      { size: '0.2 µm', title: 'The colored layer', text: 'Inside one fiber, the color is confined to the outermost layer, about 200 billionths of a meter thick, the thickness of the fiber\'s primary cell wall. The inside of the fiber is untouched. This is the single property that makes the image so hard to reproduce.' }
    ]
  },
  grid: {
    caption: 'Which of the image properties each hypothesis can explain',
    corner: 'Hypothesis',
    cols: ['0.2 µm thin', 'No paint', 'Negative', '3D', 'Blood first', 'No UV glow', 'Not only contact', 'Half-tone', 'Full image made in a lab'],
    legend: { y: 'Explains it', p: 'Partly, or disputed', n: 'Does not explain it', u: 'Untested' },
    rows: [
      { name: 'A painting', v: 'nnpnpyyny' },
      { name: 'Scorch from a hot statue', v: 'pyypnnnpy' },
      { name: 'Rubbing over a relief', v: 'ppypppppy' },
      { name: 'Early photography', v: 'pnynuyynp' },
      { name: 'Reaction with body gases', v: 'yyypyyppn' },
      { name: 'A burst of radiation', v: 'yyyuyuyun' }
    ],
    note: 'This is our summary of what proponents and critics of each idea report. Reasonable people score some cells differently. Note the last column: the hypotheses that explain the most properties are also the ones that have never produced a full image in a lab.'
  },
  dating: {
    bc: 'BC', crucifixion: 'Crucifixion, about AD 30 to 33', documented: 'Documented, from about 1354',
    chartAlt: 'Chart comparing the 1988 radiocarbon date range with other dating methods on a calendar axis',
    labsAlt: 'Chart of the twelve published radiocarbon measurements from Arizona, Oxford and Zurich, with error bars',
    bpAxis: 'Radiocarbon age, years before 1950 (BP). Lower means younger.', bpShort: 'radiocarbon years BP', labMean: 'Lab mean', combined: 'Combined'
  },
  notFound: { title: 'Page not found | Unless I See', h1: 'This page is not here', text: 'The link may be old, or the address may have a typo. Everything on the site starts from the home page.', cta: 'Go to the home page' },

  pages: {
    index: {
      title: 'Shroud of Turin: The Evidence For and Against | Unless I See',
      description: 'Is the Shroud of Turin real? Explore the cloth in high resolution, see the negative and the 3D image, and weigh the evidence on both sides, with every source.',
      h1: 'Examine the Shroud of Turin for yourself',
      lede: 'A linen cloth, 4.4 meters long, carries the faint image of a man who was scourged and crucified. Some call it a medieval forgery. Others call it the burial cloth of Jesus. Here is the evidence from both sides, with every source, so you can judge it yourself.',
      cta1: 'Explore the cloth', cta2: 'Read the case file',
      faceAlt: 'The face on the Shroud of Turin. Move over it to see it as a photographic negative.',
      hint: 'Move over the face to see the negative',
      faceCaption: 'The face on the Shroud. Photograph by Giuseppe Enrie, 1931.',
      thomasText: `<h2>Thomas asked to see the marks</h2>
<p>This site is named after the most honest skeptic in the Gospels. Thomas did not believe what his friends told him. He wanted evidence he could see and touch: the marks of the nails, the wound in the side.</p>
<p>The Shroud of Turin shows a man with exactly those marks. Whether it is what many believe it is, is the question this site leaves to you. We will show you the marks, the tests, the doubts and the answers, and point you to every source.</p>`,
      thomasCta: 'See the marks',
      objH: 'What it is',
      objLede: 'A single piece of linen with a front and a back image of a naked man, head to head, plus blood stains, burn marks and water stains from its long history. It has been kept in Turin, Italy, since 1578.',
      facts: [
        { n: '4.4 m', t: 'long, and about 1.1 m wide' },
        { n: '3 : 1', t: 'herringbone twill weave, a costly pattern' },
        { n: '0.2 µm', t: 'approximate depth of the color in the image fibers. A hair is about 70 µm.' },
        { n: '1354', t: 'around this year it first appears in the historical record, in Lirey, France' },
        { n: '1260 to 1390', t: 'the date range from the 1988 carbon dating' }
      ],
      cmpPos: 'As the eye sees it', cmpNeg: 'As the 1898 negative showed it',
      cmpPosAlt: 'The face on the Shroud as it appears to the eye', cmpNegAlt: 'The face on the Shroud as a photographic negative',
      cmpLabel: 'Slide to compare the positive and the negative',
      cmpCaption: 'Drag the line. Left: the photographic negative. Right: what you see on the cloth.',
      negYear: 'Turin, 28 May 1898',
      negH: 'The night a photograph changed the question',
      negText: `<p>Secondo Pia, a lawyer and amateur photographer, was allowed to take the first photographs of the cloth. When he developed his glass plate, he expected to see a reversed, ghostly image. Instead, the negative showed a clear, natural portrait of a man.</p>
<p>The image on the cloth behaves like a photographic negative: light and dark are reversed. Nobody had noticed this before, because photography did not exist. It is the reason modern study of the Shroud began.</p>`,
      negSkeptic: 'The skeptic\'s answer: an image made by pressing cloth onto a relief, or by rubbing powder over it, is also tonally reversed. So a negative image does not by itself require a photograph or a miracle. The real question is whether such methods match everything else about the image.',
      reliefAlt: 'The face on the Shroud turned into a 3D relief from the brightness of the image',
      d3H: 'It holds 3D information',
      d3Text: `<p>In 1976, physicists John Jackson and Eric Jumper put a photograph of the Shroud into a VP-8 Image Analyzer, a device built to turn brightness into height. Ordinary photographs come out distorted. The Shroud came out as a coherent body in relief.</p>
<p>The reason: how dark the image is at each point seems to track how far the cloth was from the body at that point. The original measurement was statistically modest, based on 13 points, but the effect is easy to see. This 3D view is built the same way, live in your browser, straight from the image. Drag it to turn it.</p>`,
      d3Skeptic: 'The skeptic\'s answer: images made from a shallow relief, such as a bas-relief rubbing, also carry some depth information. In 2025 a 3D designer, Cicero Moraes, argued from computer simulation that the image fits a low relief better than a full body. The debate is over how well each method matches the real cloth.',
      d3Cta: 'Compare it with a painting in 3D',
      marksH: 'The marks of a crucifixion',
      marksText: `<p>Forensic pathologists who studied the image describe more than a hundred small wounds from a Roman scourge, puncture wounds around the head, a swollen face, abrasions on the shoulders, a nail wound in the wrist rather than the palm, and a wound in the side between the ribs that bled after death.</p>
<p>Each of these matches what the Gospels say happened to Jesus. Several of them, like the nail in the wrist, go against how medieval artists painted the crucifixion.</p>`,
      marksAlt: 'Detail of the crossed hands on the Shroud, with the wrist wound', marksCaption: 'The crossed hands. The blood flow comes from the wrist, not the palm. Negative view.',
      marksCta: 'See every wound, next to the Gospel text',
      dateH: 'The test that said medieval',
      dateText: `<p>In 1988, three laboratories in Arizona, Oxford and Zurich carbon dated small samples from one corner of the cloth. Their combined result, published in the journal Nature in 1989, was 1260 to 1390 AD, with 95% confidence. This is the strongest single argument against authenticity, and we put it first.</p>
<p>Since then, researchers have questioned where the sample was taken from, whether the samples were consistent with each other, and whether the raw data supported the published precision. Other dating methods have given older dates, though none is as established as radiocarbon dating.</p>`,
      dateCta: 'Read the full dating story',
      howH: 'How did the image get there?',
      howLede: 'After more than a century of study, nobody has a complete answer. That is not a slogan, it is where the science stands. Here is one of the boldest hypotheses, shown as an animation.',
      howText: `<p>The image is a straw-yellow color on the very top fibers of the linen. There is no paint, no brush strokes and no sign of the image soaking into the threads. It is not a scorch: real scorch marks from a 1532 fire glow under ultraviolet light, and the body image does not.</p>
<p>Researchers have proposed paint, a heated statue, powder rubbed over a relief, an early form of photography, a chemical reaction with gases from a body, and a burst of radiation. Each idea explains some features and struggles with others.</p>`,
      howEnea: `<h3>The 34 trillion watts</h3>
<p>Between 2005 and 2010, scientists at ENEA, Italy's national agency for new technologies, fired very short pulses of ultraviolet laser light at linen. They managed to color the linen in a way that matched the Shroud closely: only the outermost layer of the fibers, with no burning.</p>
<p>They estimated that coloring a whole body's worth of image in one go would need ultraviolet light with a power of about 34 trillion watts, far beyond any laser that exists. The team was careful: they did not reproduce the image itself, only small colored samples, and they did not claim a miracle. They said their results show how hard it is to make the image by ordinary means.</p>`,
      howCta: 'Compare every hypothesis',
      weighH: 'Weigh it yourself',
      weighText: `<p>Most debates about the Shroud are really debates about how much each piece of evidence should count. So we built a small calculator. You decide how strongly each item points one way or the other, and it shows you where your own judgments add up.</p>
<p>It will not tell you the answer. It will show you which assumptions your answer depends on.</p>`,
      weighCta: 'Open the calculator',
      quote: 'Unless I see in his hands the print of the nails, I will not believe.',
      quoteCite: 'Thomas, in John 20:25',
      faqH: 'Questions people ask',
      faq: [
        { q: 'Is the Shroud of Turin real?', a: 'It is a real, very old linen cloth. Whether it is the burial cloth of Jesus is disputed. The 1988 carbon dating placed it between 1260 and 1390 AD. Many researchers dispute that result, and no one has explained how the image was made. This site lays out both sides with sources.' },
        { q: 'What did the carbon dating find?', a: 'Laboratories in Arizona, Oxford and Zurich dated samples from one corner in 1988 and reported 1260 to 1390 AD with 95% confidence (Damon and others, Nature, 1989). Critics argue the corner may have been repaired, and a 2019 reanalysis of the raw data found the samples were not as consistent as reported.' },
        { q: 'Is the image painted?', a: 'The 1978 scientific team (STURP) concluded it is not a painting: they found no pigment forming the image, no brush strokes and no binder. Microscopist Walter McCrone disagreed and reported iron oxide and other materials. Most later studies sided with STURP on the image, while agreeing that tiny particles of many materials are present on the cloth.' },
        { q: 'Why is the image a negative?', a: 'On the cloth, light and dark are reversed compared with a normal picture, so a photographic negative of it looks like a natural portrait. This was discovered by Secondo Pia in 1898. Skeptics point out that images made by contact with a relief are also reversed.' },
        { q: 'What does the Catholic Church say?', a: 'The Church has never officially declared the Shroud authentic, and does not require anyone to believe it is. Recent popes have called it an icon of the suffering of Christ and have prayed before it. The Holy See has owned it since 1983, and the Archbishop of Turin is its custodian.' },
        { q: 'Can I see it in person?', a: 'It is kept in the Cathedral of Saint John the Baptist in Turin, in a climate-controlled case, and is usually not on public view. It is shown during rare public exhibitions, such as those in 2010 and 2015, and in a 2020 live broadcast.' }
      ],
      pathsH: 'Where to go next',
      paths: [
        { slug: 'evidence', h: 'If you doubt it', t: 'Start with the case file. Every argument, for and against, rated by strength.' },
        { slug: 'explore', h: 'If you want to see it', t: 'Zoom into the whole cloth, switch to negative, and find each mark.' },
        { slug: 'library', h: 'If you want to go deep', t: 'Hundreds of papers and studies, searchable, with links to the originals.' },
        { slug: 'about', h: 'If you are wondering who made this', t: 'Why this site exists, how we rate evidence, and image credits.' }
      ]
    },

    explore: {
      title: 'Explore the Shroud of Turin in High Resolution | Unless I See',
      description: 'Zoom into the full Shroud of Turin, switch to the photographic negative, enhance the image, and find each wound, burn and patch, with explanations.',
      h1: 'Explore the cloth',
      lede: 'This is the whole Shroud, front and back image, head to head. Drag to move, scroll or pinch to zoom. Switch to the negative to see what Secondo Pia saw in 1898. The numbered marks explain what you are looking at.',
      imgAlt: 'The full Shroud of Turin, front and back image',
      ui: { tools: 'Viewing tools', negative: 'Negative', enhance: 'Enhance', layerWounds: 'Wounds', layerDamage: 'Fire and water', layerLinen: 'The linen', tour: 'Guided tour', fit: 'Whole cloth', zoomIn: 'Zoom in', zoomOut: 'Zoom out', help: 'Drag to move. Scroll or pinch to zoom. Press N for negative.', close: 'Close', prev: 'Previous', next: 'Next', more: 'Read more', skeptic: 'The skeptic\'s answer' },
      reliefH: 'The image in 3D',
      reliefText: `<p>When you turn the brightness of a normal photograph into height, you get a distorted mess: the nose sinks, the shadows rise, the background bulges. When you do the same with the Shroud, you get a coherent face and body. Compare them yourself. Both views below use exactly the same method.</p>`,
      reliefFaceAlt: '3D relief of the face on the Shroud', reliefFaceCap: 'The Shroud face, brightness turned into height.',
      reliefPaintAlt: '3D relief of a painted face using the same method', reliefPaintCap: 'A painted face, same method. Painting: Head of Christ, public domain.',
      reliefBodyAlt: '3D relief of the full front image of the Shroud', reliefBodyCap: 'The full front image in relief. Turn it to see the shape of the body.',
      reliefSkeptic: 'Fair warning: our 3D views are a simple re-creation of the VP-8 idea, smoothed for the web. They show the principle. They are not a scientific measurement.',
      photosH: 'About these photographs',
      photosText: `<p>The full-cloth images here are public domain photographs. The finest photographs of the Shroud, taken by Barrie Schwortz for the 1978 scientific team, and the very high resolution scans from 2002 and 2008, are protected by copyright. You can see many of them at <a href="https://www.shroud.com/" target="_blank" rel="noopener">shroud.com</a> and <a href="https://shroudphotos.com/" target="_blank" rel="noopener">shroudphotos.com</a>. We have asked for permission to show them here.</p>`
    },

    evidence: {
      title: 'Shroud of Turin Evidence, For and Against | Unless I See',
      description: 'Every major argument about the Shroud of Turin, for and against authenticity, rated by strength, with the skeptic\'s best answer and links to the sources.',
      h1: 'The case file',
      lede: 'Every major argument about the Shroud, for and against. Each one is rated by how strong it is, with the best objection, the best reply and the sources. We include the arguments against authenticity at full strength, because you should hear them from us first.',
      counts: '{n} exhibits: {f} pointing toward authenticity, {a} pointing toward a medieval origin.',
      method: 'How we rate: Strong means the facts are well documented and the inference is hard to avoid. Moderate means real evidence with a fair objection. Weak means suggestive at best. Disputed means serious researchers disagree about the facts themselves. Debunked means it should not be used. We rate claims on both sides with the same rules.',
      filterLean: 'Filter by direction', filterCat: 'Filter by topic',
      weighH: 'Weigh it yourself',
      weighText: `<p>Start with your prior: before any evidence, how likely is it that a cloth like this is the real burial cloth of Jesus? Then, for each item, decide how much more likely you would be to see that evidence if the cloth were authentic than if it were a medieval work. Move a slider right if the evidence fits authenticity better, left if it fits a medieval origin better.</p>
<p>This is Bayes' rule, the standard way to combine evidence. Try the skeptic and believer presets to see how far apart two reasonable people can start, and where the evidence moves them.</p>`,
      wui: {
        neutral: 'Reset to neutral', skeptic: 'A skeptic\'s settings', believer: 'A believer\'s settings',
        prior: 'Your starting point (prior odds)', priorHelp: 'Most medieval relics were not what they claimed to be, so a low starting point is reasonable.',
        result: 'Your result: chance the cloth is authentic', medieval: 'Medieval', authentic: 'Authentic',
        noEffect: 'No effect',
        favorsA: '{x} times more likely if authentic', favorsM: '{x} times more likely if medieval',
        oddsFor: 'Odds: {x} to 1 for authenticity', oddsAgainst: 'Odds: 1 in {x}',
        caveat: 'This treats each item as independent, which is a simplification. Some items are linked, for example several depend on the same photographs. The calculator shows how your judgments combine. It does not replace them.'
      }
    },

    wounds: {
      title: 'The Wounds on the Shroud of Turin and the Gospels | Unless I See',
      description: 'Each wound on the Shroud of Turin, from the scourge marks to the nail in the wrist and the side wound, shown on the cloth next to the Gospel text that describes it.',
      h1: 'The wounds, and what the Gospels say',
      lede: 'Click a number on the cloth or a wound in the list. Each mark is explained the way forensic pathologists describe it, next to the Gospel verse it corresponds to, and the skeptic\'s note where there is one.',
      front: 'Front', back: 'Back', alt_front: 'Front image of the man on the Shroud, negative view', alt_back: 'Back image of the man on the Shroud, negative view',
      figNote: 'Positions are approximate. Negative view, where the blood marks appear light.',
      intro: '<p>A Roman crucifixion was a public execution meant to humiliate. The Gospels describe the one that matters here in plain detail. The cloth records an execution with the same features, including some that medieval art got wrong.</p>',
      after: `<h2>Why this matters</h2>
<p>A forger in the 1300s would have to know details that his own culture did not know or did not show: that nails went through the wrist, that a Roman flagrum left dumbbell-shaped marks, that blood from a dead body separates into clot and serum. Skeptics answer that some of these details are disputed, and that the blood marks themselves have been studied with mixed results. Both sides are in the <a href="evidence.html">case file</a>.</p>`
    },

    dating: {
      title: 'Shroud of Turin Carbon Dating: 1988 Results and the Debate | Unless I See',
      description: 'The 1988 radiocarbon dating of the Shroud of Turin gave AD 1260 to 1390. See all 12 lab measurements, where the sample came from, the raw data reanalyses and other dating methods.',
      h1: 'The carbon dating',
      lede: 'This is the strongest single argument that the Shroud is medieval, and it deserves a careful look. Here is what was done, what was found, what critics have found since, and what it does and does not prove.',
      compareH: 'Every date ever proposed, on one line',
      chartNote: 'Red: the 1988 radiocarbon result at 95% confidence. Hatched green: other methods, all applied to loose fibres of uncertain origin and none of them established dating techniques. The circle marks the X-ray study, which compared one thread with first-century linen and did not produce a date range. Hover or tap any bar for the details.',
      labsH: 'The twelve measurements behind the date',
      labsText: 'Each line is one published measurement, with its stated error. The shaded band is the combined weighted mean, 689 plus or minus 16 radiocarbon years. Notice how Oxford sits apart from Arizona. That spread is what later statisticians questioned.',
      body: `<h2>What was done</h2>
<p>On 21 April 1988, in the sacristy of Turin Cathedral, textile expert Giovanni Riggi cut a single strip from one corner of the cloth, at the edge near the feet of the front image, just above where a sample had been removed in 1973. Pieces of about 50 milligrams went to three laboratories using accelerator mass spectrometry: the University of Arizona, Oxford University and ETH Zurich. Each lab also received three control samples of known age, without being told which was which.</p>
<p>The controls came out right: linen from a Nubian tomb, linen from a second-century mummy, and threads from a 13th-century cope were all dated correctly. The Shroud samples came out at 689 radiocarbon years before 1950, plus or minus 16. Converted to calendar years, that is AD 1262 to 1312 or AD 1353 to 1384, published rounded as AD 1260 to 1390. The paper in Nature, signed by 21 scientists, called this conclusive evidence that the linen is medieval.</p>
<h2>Why it matters so much</h2>
<p>Radiocarbon dating is a mature, well-tested method. The controls worked. And the date lands exactly where the documented history begins: the cloth appears in Lirey, France, in the 1350s, and a bishop wrote in 1389 that an artist had confessed to painting it. For many scientists, that coincidence closed the case.</p>`,
      sampleH: 'One strip, one corner',
      sampleText: `<p>Every result came from a single strip, about 7 to 8 centimeters long, cut from one corner. That corner had been handled for centuries during public showings, and lies near old seams and repairs. The original plan agreed with the Vatican in 1986 called for seven laboratories and several sampling sites. It was cut down to three labs and one site.</p>
<p>Critics say a single corner cannot speak for a 4.4 meter cloth. Defenders reply that the labs examined the sample under the microscope, that it looked like the main cloth, and that two later examinations of leftover Arizona fragments, in 2010 and again in 2026, found no dye, no coating and no sign of a repair.</p>`,
      sampleAlt: 'The corner of the Shroud where the 1988 sample was cut', sampleCap: 'The sample corner (approximate), at the feet end of the front image. Enrie 1931 photograph.',
      debateH: 'Why critics question it',
      defenseH: 'Why it is still the strongest argument against',
      debateFor: `<p>The results do not agree with each other as well as the paper implied. The three lab means fail a standard consistency test, and the authors reported a chi-squared value of 6.4, just past the 5% threshold. In 2017 the raw data were released after a legal request, and in 2019 a team led by Tristan Casabianca published a reanalysis in Archaeometry. Their consistency test gave 15.99 against a critical value of 5.99, and they concluded the samples were not homogeneous.</p>
<p>Statisticians Marco Riani and colleagues (2013) found that the measured age drifts along the length of the strip, as if something varies across the sample. Other researchers suggested a medieval reweave, contamination, or fire damage from 1532.</p>`,
      debateAgainst: `<p>None of these critiques points to the first century. The largest correction anyone has proposed in a peer-reviewed paper is 88 radiocarbon years (Walsh and Schwalbe, 2020), which still leaves the cloth medieval. Every specific mechanism offered to explain the date away, such as fire, bacteria, carbon monoxide or a burst of neutrons, has either failed a test or cannot be tested.</p>
<p>The repair theory, once popular, is weaker than it was in 2005: the leftover fragments studied in 2010 and 2026 showed no dye or reweaving. In short, the reanalyses show the 1988 test was smaller and less clean than it claimed. They do not show the date is wrong.</p>`,
      verdict: `<h2>Our honest summary</h2>
<p>The radiocarbon date says medieval, and it is the best single piece of evidence anyone has. The 1988 test also had real design flaws: one strip, one corner, three labs, and results that do not sit together as neatly as reported. That justifies a new test, with several samples from several places on the cloth, done openly. It does not justify ignoring the result.</p>
<p>If you are a skeptic, this is your strongest card, and you should hold it. If you believe the cloth is authentic, this is the question you have to answer honestly. Either way, the rest of the evidence still has to be explained, starting with <a href="image.html">how the image was made</a>.</p>`
    },

    image: {
      title: 'How Was the Image on the Shroud of Turin Made? | Unless I See',
      description: 'Paint, scorch, rubbing, early photography, a chemical reaction or a burst of light? Every hypothesis for the Shroud of Turin image, with what it explains and where it fails.',
      h1: 'How was the image made?',
      lede: 'This is the deepest open question about the Shroud. Any explanation, natural or not, has to account for a list of very strange properties. Here they are, followed by every major hypothesis and its problems.',
      propsH: 'What any explanation must account for',
      propsLede: 'These are the properties reported by the scientific teams that studied the cloth directly. Some are disputed in detail. Together, they are why no one has reproduced the image in every respect.',
      hypH: 'The hypotheses',
      hypLede: 'Ordered roughly from the most natural to the least. Each one is rated by how well it fits the properties above.',
      props: [
        { n: '0.2 µm', t: 'The color sits only on the outermost layer of the top fibers. A hair is about 70 µm thick.' },
        { n: 'No paint', t: 'No pigment, binder or brush strokes form the image, according to the 1978 team.' },
        { n: 'Negative', t: 'Light and dark are reversed, so the photographic negative looks natural.' },
        { n: '3D', t: 'Image darkness tracks cloth-to-body distance, so it can be turned into a relief.' },
        { n: 'Blood first?', t: 'Tests found no body image under the blood stains, which most researchers read as blood first, image second. A 2026 paper argues this does not settle the order.' },
        { n: 'No glow', t: 'Under ultraviolet light the 1532 scorches glow and the body image does not. It is not a simple scorch.' },
        { n: 'Gaps too', t: 'Some image areas were not touching the body, such as between nose and cheek. It is not only a contact print.' },
        { n: 'Half-tone', t: 'Each image fiber is either colored or not. Darker areas just have more colored fibers, like a newspaper photo.' }
      ],
      hypotheses: [
        { kind: 'Art', name: 'A painting', strength: 'weak',
          text: 'Microscopist Walter McCrone reported iron oxide and vermilion particles and concluded in 1980 that the image was painted by a medieval artist, possibly using a thin watercolor.',
          problems: 'The STURP team, using X-ray fluorescence, spectroscopy and chemistry on the cloth itself, found no pigment forming the image and no binder, and concluded it is not a painting. Paint would soak between threads; the image does not. Particles of many materials exist on the cloth, plausibly from artists who pressed copies of their paintings against it, as was done for centuries.',
          sources: [{ label: 'Schwalbe and Rogers 1982, Analytica Chimica Acta', url: 'https://www.shroud.com/pdfs/Schwalbe%20and%20Rogers%201982.pdf' }, { label: 'STURP final summary, 1981', url: 'https://www.shroud.com/78conclu.htm' }] },
        { kind: 'Heat', name: 'A scorch from a heated statue', strength: 'weak',
          text: 'A metal statue or relief, heated and covered with the cloth, would leave a brownish, tonally reversed scorch with some depth information.',
          problems: 'Scorches glow reddish under ultraviolet light. The real scorches from the 1532 fire do, and the body image does not. A hot object would also scorch through the cloth and could not color areas it did not touch.',
          sources: [{ label: 'STURP final summary, 1981', url: 'https://www.shroud.com/78conclu.htm' }] },
        { kind: 'Contact', name: 'Powder or acid rubbed over a relief', strength: 'disputed',
          text: 'Joe Nickell in the 1980s, and chemist Luigi Garlaschelli in 2009, made full-size images by rubbing pigment or acid onto linen laid over a person or a bas-relief, then aging the cloth. The results are negative and carry some 3D information. In 2025, Cicero Moraes argued from 3D simulation that the image fits a low relief better than a full body.',
          problems: 'Defenders answer that these copies are visible to the naked eye in ways the Shroud is not, that their color penetrates the fibers rather than staying on the outer 0.2 µm, that they leave material behind, and that they do not explain why the blood came first. Supporters reply that aging and washing over centuries could close part of that gap.',
          sources: [{ label: 'Garlaschelli 2010, Journal of Imaging Science and Technology', url: 'https://www.imaging.org/common/uploaded%20files/pdfs/Papers/2010/JIST/JIST0040301.pdf' }, { label: 'Wikipedia: Shroud of Turin, image analysis', url: 'https://en.wikipedia.org/wiki/Shroud_of_Turin' }] },
        { kind: 'Optics', name: 'Medieval proto-photography', strength: 'weak',
          text: 'Art historian Nicholas Allen proposed in the 1990s that a medieval workshop used a camera obscura with a quartz lens and linen treated with silver salts to "photograph" a corpse or statue.',
          problems: 'There is no historical record of such a technology for another 450 years, no silver residue has been found in the image, and a photograph would not encode cloth-to-body distance the way the Shroud does.',
          sources: [{ label: 'Wikipedia: Shroud of Turin', url: 'https://en.wikipedia.org/wiki/Shroud_of_Turin' }] },
        { kind: 'Chemistry', name: 'A natural reaction with gases from a body', strength: 'disputed',
          text: 'Chemist Raymond Rogers, a STURP member, proposed a Maillard reaction: gases released by a dead body react with a thin layer of starch and sugar residues left on the linen by ancient weaving methods, producing a faint yellow color only on the surface.',
          problems: 'This would explain the superficiality and the lack of paint. It struggles to explain the sharpness and the clean distance coding, since gases spread in all directions, and it requires the body to leave the cloth before decay stains formed. No one has produced a full image this way.',
          sources: [{ label: 'Rogers and Arnoldi 2003, Melanoidins', url: 'https://www.shroud.com/pdfs/rogers5.pdf' }] },
        { kind: 'Physics', name: 'A short burst of radiation', strength: 'disputed',
          text: 'Several physicists suggest the image was caused by a brief, intense burst of energy from the body. ENEA scientists colored linen with ultraviolet laser pulses in a way close to the Shroud. Giulio Fanti proposed a corona discharge. John Jackson proposed that the cloth collapsed through the body as it became mechanically "transparent", recording the image as it fell.',
          problems: 'There is no known natural source for such radiation from a human body. The energy estimates are enormous. Laser experiments colored only small samples, not an image. Skeptics point out that a hypothesis that requires a miracle cannot be tested like a natural one. Supporters reply that this is exactly why it remains on the table.',
          sources: [{ label: 'Di Lazzaro and others 2012, ENEA', url: 'https://www.shroud.com/pdfs/dilazzaro2012.pdf' }, { label: 'Jackson 1991, Foundations of Physics', url: 'https://doi.org/10.1007/BF00733262' }] }
      ],
      emText: `<p>The animation above shows the hypothesis many people find most compelling: a burst of light from the body, traveling straight up and down, coloring only the surface of the fibers, followed by the cloth falling through. We made it to help you picture the idea. It is a picture of a hypothesis, not a reconstruction of an event and not evidence for it.</p>
<p>A good test of any explanation, natural or supernatural, is whether it accounts for all eight properties at the top of this page at once. So far, none has been demonstrated in the lab to do so.</p>`,
      enea: `<h3>The ENEA laser experiments</h3>
<p>From 2005 to 2010, a team led by Paolo Di Lazzaro at ENEA in Frascati fired ultra-short pulses of ultraviolet light at linen. Within a narrow range of settings, the linen took on a straw-yellow color confined to the outermost surface of the fibers, very close to the Shroud's color and depth. Longer or stronger pulses burned the linen, and weaker ones did nothing.</p>
<p>Scaling up, they estimated that coloring an area the size of a human body in one go would take about 34 thousand billion watts (34 trillion) of ultraviolet power, far more than any existing ultraviolet source. In their own words, the results do not prove a miracle and do not explain how the image formed. They show how difficult it is to produce this kind of coloring at all.</p>`,
      emH: 'The light hypothesis, visualized',
      zoomH: 'How thin is the image?',
      zoomLede: 'Use the slider to zoom from the whole cloth down to a single fiber. This is the property that defeats most explanations.',
      gridH: 'Test each explanation',
      gridLede: 'Here are the six main ideas against the properties above, plus one more question: has anyone made a full image this way?'
    },

    timeline: {
      title: 'Shroud of Turin Timeline: History From Lirey to Today | Unless I See',
      description: 'An interactive timeline of the Shroud of Turin: the hypothesized early history, the documented record since about 1354, the fires, the photographs and the scientific tests.',
      h1: 'Timeline',
      lede: 'The documented history of the Shroud starts in France around 1354. Before that, its history is a hypothesis, built from images and texts that may or may not describe this cloth. The timeline keeps the two apart.',
      tracks: { cloth: 'The cloth', science: 'Science', church: 'Church', world: 'World' },
      legend: { cloth: 'Documented event', science: 'Scientific study', hyp: 'Hypothesized or legendary' },
      cert: { documented: 'Documented', probable: 'Probable', hypothesized: 'Hypothesized', legendary: 'Legend' },
      listH: 'Every event'
    },

    library: {
      title: 'Shroud of Turin Research Library: Papers and Studies | Unless I See',
      description: 'A searchable library of research papers, studies and articles on the Shroud of Turin, for and against, with direct links to the originals on shroud.com and journals.',
      h1: 'Library',
      lede: 'Every paper and study we could find, most of them from the archive at shroud.com that Barrie Schwortz has kept since 1996. Search by word, filter by topic, and go straight to the original.',
      search: 'Search titles, authors and journals',
      count: 'papers shown',
      peer: 'Peer reviewed',
      topics: { radiocarbon: 'Carbon dating', blood: 'Blood', 'image-formation': 'Image formation', history: 'History', textile: 'The linen', 'anatomy-medical': 'Medical', 'pollen-botany': 'Pollen and plants', 'photography-imaging': 'Photography', '3d-vp8': '3D', coins: 'Coins', sudarium: 'Sudarium', 'art-history': 'Art history', critique: 'Critiques', overview: 'Overviews', conference: 'Conferences' },
      stances: { 'pro-authenticity': 'Favors authenticity', skeptical: 'Skeptical', neutral: 'Neutral' },
      more: `<h2>In memory of Barrie M. Schwortz (1946 to 2024)</h2>
<p>Barrie Schwortz was the official documenting photographer of the 1978 Shroud of Turin Research Project. He was Jewish, began as a skeptic, and spent the rest of his life making the research available to everyone, for free, at shroud.com. Most of this library exists because he kept it. We dedicate this page to him.</p>
<p>Want to go further? The <a href="https://www.shroud.com/" target="_blank" rel="noopener">shroud.com archive</a>, the official site of the <a href="https://www.sindone.org/" target="_blank" rel="noopener">Archdiocese of Turin</a>, and Wikipedia's <a href="https://en.wikipedia.org/wiki/Shroud_of_Turin" target="_blank" rel="noopener">Shroud of Turin</a> article, which leans skeptical and is a good test of your conclusions.</p>`
    },

    about: {
      title: 'About Unless I See: Why This Site Exists | Unless I See',
      description: 'Unless I See is a free, non-commercial site about the Shroud of Turin. How we rate evidence, where our images come from, and who built it.',
      h1: 'About this site',
      lede: 'Why it exists, how we work, and where everything comes from.',
      body: `<h2>Why this site exists</h2>
<p>The Shroud of Turin is either one of the most remarkable forgeries ever made, or the most direct physical trace we have of the death and resurrection of Jesus of Nazareth. Either way, it deserves a better hearing than a ten-second headline. Most of what people find online is written to win: one side shouts "proof", the other shouts "fake". This site is written to inform.</p>
<p>It is named after Thomas, who refused to believe until he could see the marks of the nails. We think doubt like his is honest, and that it deserves evidence, not pressure.</p>
<h2>Who made it</h2>
<p>Unless I See was created by Nelson Inno, a Salvadoran founder, as a free, pro bono project. Full disclosure: Nelson believes the Shroud is authentic. That is exactly why the site holds itself to one rule: the strongest arguments against authenticity are shown at full strength, right next to the arguments for it. If we ever fall short of that, we want to know.</p>
<h2>How we work</h2>
<ul>
<li>Every factual claim links to a source. Where possible, the source is a peer-reviewed paper or a primary document.</li>
<li>Arguments on both sides are rated with the same scale: strong, moderate, weak, disputed or debunked.</li>
<li>Popular claims that do not hold up are labeled as such, even when they would help the case for authenticity.</li>
<li>Artistic visualizations, like the light animation, are always labeled as visualizations of a hypothesis.</li>
<li>No ads, no tracking, nothing for sale.</li>
</ul>
<h2>Found an error?</h2>
<p>Write to <a href="mailto:hey@everybodyknowsyou.com">hey@everybodyknowsyou.com</a> with the page, the claim and your source. Corrections from skeptics are especially welcome.</p>
<h2>Coming soon</h2>
<p>Nelson's own story, and a reflection on what he calls the pattern to God, will live on their own page. The evidence stays here, separate, so you can weigh it on its own terms.</p>`,
      creditsH: 'Image credits', sourceLink: 'source'
    }
  }
};
