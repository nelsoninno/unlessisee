// English copy. Plain language, no em dashes. HTML allowed in long fields.
export default {
  brand: 'See The Shroud',
  locale: 'en_US',
  keywords: 'See The Shroud, explore the Shroud of Turin, examine the Shroud of Turin, see the Shroud of Turin up close, interactive Shroud of Turin, Shroud of Turin interactive website, Shroud of Turin in high resolution, visual guide to the Shroud of Turin, everything about the Shroud of Turin, Shroud of Turin explained, Shroud of Jesus, Holy Shroud, is the Shroud of Turin real, is the Shroud of Turin authentic, Shroud of Turin real or fake, evidence the Shroud of Turin is authentic, evidence against the Shroud of Turin, the evidence behind the Shroud, Shroud of Turin facts, Shroud of Turin FAQ, Shroud of Turin, Turin Shroud, Shroud of Turin evidence, Shroud of Turin carbon dating, Shroud of Turin negative image, Shroud of Turin 3D, Jesus burial cloth, sindonology, Sábana Santa de Turín, STURP, Secondo Pia',
  shareAlt: 'The face on the Shroud of Turin as a photographic negative',
  orgDescription: 'See The Shroud is a free, non-commercial educational website where you can explore and examine the Shroud of Turin up close (in high resolution, in negative and in 3D) and weigh the evidence for and against its authenticity, with every source, in 12 languages.',
  ui: {
    skip: 'Skip to content', menu: 'Menu', mainNav: 'Main', language: 'Language',
    exhibit: 'Exhibit', detail: 'The details', skeptic: 'The skeptic\'s best answer', reply: 'The reply',
    theCase: 'The full argument', replyAgainst: 'How defenders answer', whyRating: 'Why this rating:',
    all: 'All', allTopics: 'All topics', shown: 'shown', openAll: 'Open or close all',
    prev: 'Previous', next: 'Next', problems: 'Problems with this idea'
  },
  nav: [
    { slug: 'explore', label: 'Explore' },
    { slug: 'evidence', label: 'Case file' },
    { slug: 'wounds', label: 'Wounds' },
    { slug: 'dating', label: 'Dating' },
    { slug: 'image', label: 'How it formed' },
    { slug: 'timeline', label: 'Timeline' },
    { slug: 'videos', label: 'Videos' },
    { slug: 'library', label: 'Library' },
    { slug: 'next', label: 'What now?' },
    { slug: 'about', label: 'About' }
  ],
  footer: {
    about: 'A free, non-commercial project. Every claim is sourced in the case file, including the sources that disagree with us.',
    explore: 'Explore', more: 'Go deeper', extra: [],
    rights: 'Text {year} See The Shroud. Free to share with a link back. Image credits on the About page.',
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
    note: "For illustration only. To keep it simple, the video shows only the front half of the cloth, with the light projecting straight up from the body onto it.",
    alt: 'Animation: light rises from a body beneath a linen cloth, the image forms on the cloth, and the cloth falls flat',
    captions: [
      'A body lies under a linen cloth, in the dark.',
      "The blood soaks into the cloth first, by contact. Tests found no image under the bloodstains.",
      'Hypothesis: a short, intense release of energy from the body itself.',
      "The image looks as if projected straight up and down: no sides of the body, and darker where the cloth was closer. The hypothesis needs energy that travels the same way.",
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
      { name: 'A burst of radiation', v: 'pyyuyuyun' }
    ],
    note: 'This is our summary of what proponents and critics of each idea report. Reasonable people score some cells differently. Note the last column: the hypotheses that explain the most properties are also the ones that have never produced a full image in a lab.'
  },
  dating: {
    bc: 'BC', crucifixion: 'Crucifixion, about AD 30 to 33', documented: 'Documented, from about 1354',
    chartAlt: 'Chart comparing the 1988 radiocarbon date range with other dating methods on a calendar axis',
    labsAlt: 'Chart of the twelve published radiocarbon measurements from Arizona, Oxford and Zurich, with error bars',
    bpAxis: 'Radiocarbon age, years before 1950 (BP). Lower means younger.', bpShort: 'radiocarbon years BP', labMean: 'Lab mean', combined: 'Combined'
  },
  notFound: { title: 'Page not found | See The Shroud', h1: 'This page is not here', text: 'The link may be old, or the address may have a typo. Everything on the site starts from the home page.', cta: 'Go to the home page' },

  pages: {
    index: {
      title: 'See The Shroud: Explore the Shroud of Turin and Its Evidence',
      description: "Experience the Shroud of Turin online, free: zoom in, see the negative and the 3D image, find each wound, and weigh the evidence for and against.",
      h1: 'Examine the Shroud of Turin for yourself',
      lede: 'A linen cloth, 4.4 meters long, carries the faint image of a man who was scourged and crucified. Some call it a medieval forgery. Others call it the burial cloth of Jesus. Here is the evidence from both sides, with every source, so you can judge it yourself.',
      cta1: 'Explore the cloth', cta2: 'Read the case file',
      faceAlt: 'The face on the Shroud of Turin. Move over it to see it as a photographic negative.',
      hint: 'Watch the plate develop',
      hint2: 'Move over the face to see it as the eye sees it',
      faceCaption: 'The face on the Shroud. Photograph by Giuseppe Enrie, 1931.',
      thomasText: `<h2>Thomas asked to see the marks</h2>
<p>This site is built in the spirit of the most honest skeptic in the Gospels. Thomas did not believe what his friends told him. He wanted evidence he could see and touch: the marks of the nails, the wound in the side.</p>
<p>The Shroud of Turin shows a man with marks of the same kind. Whether it is what many believe it is, is the question this site leaves to you. We will show you the marks, the tests, the doubts and the answers, and point you to every source.</p>`,
      thomasCta: 'See the marks',
      objH: 'What it is',
      objLede: 'A single piece of linen with a front and a back image of a naked man, head to head, plus blood stains, burn marks and water stains from its long history. It has been kept in Turin, Italy, since 1578, apart from the Second World War.',
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
<p>The image on the cloth behaves like a photographic negative: light and dark are reversed. Nobody had noticed this before, because no one had seen the image reversed until it was photographed. It is the reason modern study of the Shroud began.</p>`,
      invertBtn: 'Invert this page, like Pia\'s glass plate', invertBack: 'Back to normal',
      negSkeptic: 'The skeptic\'s answer: an image made by pressing cloth onto a relief, or by rubbing powder over it, is also tonally reversed. So a negative image does not by itself require a photograph or a miracle. The real question is whether such methods match everything else about the image.',
      reliefAlt: 'The face on the Shroud turned into a 3D relief from the brightness of the image',
      d3H: 'It holds 3D information',
      d3Text: `<p>In 1976, physicist John Jackson and engineer Eric Jumper put a photograph of the Shroud into a VP-8 Image Analyzer, a device built to turn brightness into height. Ordinary photographs come out distorted. The Shroud came out as a coherent body in relief.</p>
<p>The reason: how dark the image is at each point seems to track how far the cloth was from the body at that point. The measurement behind this, published in 1984, was modest: 13 points, with a correlation of r squared 0.60 and a wide margin of error. But the effect is easy to see. This 3D view is built the same way, live in your browser, straight from the image. Drag it to turn it.</p>`,
      d3Skeptic: 'The skeptic\'s answer: images made from a shallow relief, such as a bas-relief rubbing, also carry some depth information. In 2025 a 3D designer, Cicero Moraes, argued from computer simulation that the image fits a low relief better than a full body. The debate is over how well each method matches the real cloth.',
      d3Cta: 'Compare it with a painting in 3D',
      marksH: 'The marks of a crucifixion',
      marksText: `<p>Forensic pathologists who studied the image describe more than a hundred small wounds from a Roman scourge, puncture wounds around the head, a swollen face, abrasions on the shoulders, a nail wound in the wrist rather than the palm, and a wound in the side between the ribs that bled after death.</p>
<p>These fit the Gospel accounts, which mention scourging, thorns, blows, nails and a spear in the side. Several details, like the nail in the wrist, go against how medieval artists usually painted the crucifixion.</p>`,
      marksAlt: 'Detail of the crossed hands on the Shroud, with the wrist wound', marksCaption: 'The crossed hands. The blood flow comes from the wrist, not the palm. Negative view.',
      marksCta: 'See every wound, next to the Gospel text',
      dateH: 'The test that said medieval',
      dateText: `<p>In 1988, three laboratories in Arizona, Oxford and Zurich carbon dated small samples from one corner of the cloth. Their combined result, published in the journal Nature in 1989, was 1260 to 1390 AD, with 95% confidence. This is the strongest single argument against authenticity, and we give it a full page.</p>
<p>Since then, researchers have questioned where the sample was taken from, whether the samples were consistent with each other, and whether the raw data supported the published precision. Other dating methods have given older dates, though none is as established as radiocarbon dating.</p>`,
      dateCta: 'Read the full dating story',
      howH: 'How did the image get there?',
      howLede: 'After more than a century of study, nobody has a complete answer. That is not a slogan, it is where the science stands. Here is one of the boldest hypotheses, shown as an animation.',
      howText: `<p>The image is a straw-yellow color on the very top fibers of the linen. There is no paint, no brush strokes and no sign of the image soaking into the threads. It does not behave like an ordinary scorch: the real scorch marks from the 1532 fire glow under ultraviolet light, and the body image does not.</p>
<p>Researchers have proposed paint, a heated statue, powder rubbed over a relief, an early form of photography, a chemical reaction with gases from a body, and a burst of radiation. Each idea explains some features and struggles with others.</p>`,
      howEnea: `<h3>What a laser can and cannot do</h3>
<p>Between 2005 and 2010, scientists at ENEA, Italy's national agency for new technologies, fired very short pulses of ultraviolet laser light at linen. Within a narrow range of settings, they colored linen a straw yellow similar to the Shroud, without burning it. In most fibers the color went deeper than on the Shroud. In at least one fiber it stayed in the thin outer wall, as on the Shroud.</p>
<p>As a rough sum, they multiplied the laser intensity that worked by the area of a human body. The answer, about 34 trillion watts, is far more than any ultraviolet source built so far. This is a back-of-the-envelope figure for doing it with one laser pulse. It is not a measurement of how the image was actually made. The authors wrote that "nobody can claim" the image was made this way, and that its origin is still unknown.</p>`,
      howCta: 'Compare every hypothesis',
      weighH: 'Weigh it yourself',
      weighText: `<p>Most debates about the Shroud are really debates about how much each piece of evidence should count. So we built a small calculator. You decide how strongly each item points one way or the other, and it shows you where your own judgments add up.</p>
<p>It will not tell you the answer. It will show you which assumptions your answer depends on.</p>`,
      weighCta: 'Open the calculator',
      quote: 'Unless I see in his hands the print of the nails ... I will not believe.',
      quoteCite: 'Thomas, in John 20:25',
      freeH: 'Why it is not proof',
      freeText: `<p>If God wanted to force belief, he could. A sign that left no room for doubt would also leave no room to choose. The Shroud does something quieter: it gives a serious mind enough to take the question seriously, and leaves the last step to you.</p>
<p>The Truthly video we checked ends on this idea, and we think it is the right place to end. Thomas got to see the marks. The answer he received was about everyone who comes after him.</p>`,
      freeQuote: 'Blessed are those who have not seen and have believed.',
      freeCite: 'Jesus to Thomas, John 20:29',
      faqH: 'Questions people ask',
      faq: [
        { q: 'Is the Shroud of Turin real?', a: 'It is a real, very old linen cloth. Whether it is the burial cloth of Jesus is disputed. The 1988 carbon dating placed it between 1260 and 1390 AD. Many researchers dispute that result, and no method has yet reproduced every property of the image at once. This site lays out both sides with sources.' },
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
        { slug: 'next', h: 'If you are wondering what now', t: 'Honest next steps, whether you doubt, wonder or believe.' }
      ]
    },

    explore: {
      title: 'Explore the Shroud of Turin: Interactive High-Resolution View | See The Shroud',
      description: 'An interactive view of the whole Shroud of Turin: zoom in, switch to the negative, enhance the image, and find each wound, burn and patch, each explained.',
      h1: 'Explore the cloth',
      lede: 'This is the whole Shroud, front and back image, head to head. Drag to move, scroll or pinch to zoom. Switch to the negative to see what Secondo Pia saw in 1898. The numbered marks explain what you are looking at.',
      imgAlt: 'The full Shroud of Turin, front and back image',
      ui: { tools: 'Viewing tools', negative: 'Negative', enhance: 'Enhance', layerWounds: 'Wounds', layerDamage: 'Fire and water', layerLinen: 'The linen', tour: 'Guided tour', fit: 'Whole cloth', zoomIn: 'Zoom in', zoomOut: 'Zoom out', help: 'Drag to move. Scroll or pinch to zoom. Press N for negative.', close: 'Close', prev: 'Previous', next: 'Next', more: 'Read more', skeptic: 'The skeptic\'s answer' },
      reliefH: 'The image in 3D',
      reliefText: `<p>When you turn the brightness of a normal photograph into height, you get a distorted mess: the nose sinks, the shadows rise, the background bulges. When you do the same with the Shroud, you get a coherent face and body. Compare them yourself. Both views below use exactly the same method.</p>`,
      reliefFaceAlt: '3D relief of the face on the Shroud', reliefFaceCap: 'The Shroud face, brightness turned into height.',
      reliefPaintAlt: '3D relief of a painted face using the same method', reliefPaintCap: 'A painted face, using the same method: it holds no useful 3D information. Painting: Head of Christ.',
      reliefBodyAlt: '3D relief of the full front image of the Shroud', reliefBodyCap: 'The full front image in relief. Turn it to see the shape of the body.',
      reliefSkeptic: 'Fair warning: our 3D views are a simple re-creation of the VP-8 idea, smoothed for the web. They show the principle. They are not a scientific measurement.',
      photosH: 'About these photographs',
      photosText: `<p>The full-cloth images here are public domain photographs. The finest photographs of the Shroud, taken by Vernon Miller and Barrie Schwortz for the 1978 scientific team, and the very high resolution images from 2002 and 2008, are protected by copyright. You can see many of them at <a href="https://www.shroud.com/" target="_blank" rel="noopener">shroud.com</a> and <a href="https://shroudphotos.com/" target="_blank" rel="noopener">shroudphotos.com</a>. We are asking for permission to show them here.</p>`
    },

    evidence: {
      title: "Shroud of Turin: Authentic or Forgery? The Evidence For and Against | See The Shroud",
      description: "Is the Shroud of Turin authentic or a forgery? Every major argument for and against, rated by strength, with the skeptic's best answer and the sources.",
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
      title: 'The Wounds on the Shroud of Turin and the Gospels | See The Shroud',
      description: 'Each wound on the Shroud of Turin, from the scourge marks to the nail in the wrist and the side wound, shown on the cloth next to the Gospel text that describes it.',
      h1: 'The wounds, and what the Gospels say',
      lede: 'Click a number on the cloth or a wound in the list. Each mark is explained the way forensic pathologists describe it, next to the Gospel verse it corresponds to, and the skeptic\'s note where there is one.',
      front: 'Front', back: 'Back', alt_front: 'Front image of the man on the Shroud, negative view', alt_back: 'Back image of the man on the Shroud, negative view',
      figNote: 'Positions are approximate. Negative view, where the blood marks appear light.',
      breath: {
        alt: 'Diagram of a crucified man moving between slumping and pushing up to breathe',
        h: 'Why the blood on the arms runs two ways',
        text: `<p>On the forearms, thin rivulets of blood run at two slightly different angles, about ten degrees apart. Pathologists such as Robert Bucklin read this as the arms being held at two positions while the blood was flowing.</p>
<p>That fits how crucifixion kills. Hanging by the arms makes it hard to breathe out, so the victim has to push up on the nailed feet to take each breath, then slump again. Blood always runs straight down, so when the arms change angle, the trail on the skin changes direction. Press the button to see it.</p>`,
        up: 'Push up to breathe', down: 'Slump down',
        skeptic: 'The skeptic\'s best answer: a 2018 bloodstain pattern study by Matteo Borrini and Luigi Garlaschelli, using a volunteer and real blood flows, found the forearm trails need different arm positions than a single crucifixion pose, and judged some flows unrealistic. Defenders reply that a body that moved for hours would leave exactly such varied trails.'
      },
      intro: '<p>A Roman crucifixion was a public execution meant to humiliate. The Gospels describe the one that matters here in plain detail. The cloth records an execution with the same features, including some that medieval art got wrong.</p>',
      after: `<h2>Why this matters</h2>
<p>A forger in the 1300s would have to know details that his own culture did not know or did not show: that nails went through the wrist, that a Roman flagrum left dumbbell-shaped marks, that blood from a dead body separates into clot and serum. Skeptics answer that some of these details are disputed, and that the blood marks themselves have been studied with mixed results. Both sides are in the <a href="evidence.html">case file</a>.</p>`
    },

    dating: {
      title: 'Shroud of Turin Carbon Dating: 1988 Results and the Debate | See The Shroud',
      description: 'The 1988 radiocarbon dating put the Shroud of Turin at AD 1260 to 1390. See all 12 lab results, where the sample came from, the reanalyses and other methods.',
      h1: 'The carbon dating',
      lede: 'This is the strongest single argument that the Shroud is medieval, and it deserves a careful look. Here is what was done, what was found, what critics have found since, and what it does and does not prove.',
      compareH: 'Every date ever proposed, on one line',
      chartNote: 'Red: the 1988 radiocarbon result at 95% confidence. Hatched green: other methods, all applied to loose fibers of uncertain origin and none of them established dating techniques. The circle marks the X-ray study, which compared one thread with first-century linen and did not produce a date range. Hover or tap any bar for the details.',
      labsH: 'The twelve measurements behind the date',
      labsText: 'Each line is one published measurement, with its stated error. The shaded band is the weighted mean, 689 plus or minus 16 radiocarbon years. Because the results scattered too much, the published date used a simple average with a wider error, 691 plus or minus 31. Notice how Oxford sits apart from Arizona. That spread is what later statisticians questioned.',
      body: `<h2>What was done</h2>
<p>On 21 April 1988, in the sacristy of Turin Cathedral, Giovanni Riggi cut a single strip from one corner of the cloth, at the edge near the feet of the front image, just above where a sample had been removed in 1973. Textile experts Franco Testore and Gabriel Vial and representatives of the three laboratories watched. Pieces of about 50 milligrams went to three laboratories using accelerator mass spectrometry: the University of Arizona, Oxford University and ETH Zurich. Each lab also received three control samples of known age. The test was not blind: the Shroud's unusual weave made its sample easy to recognize, and the authors said they had given up on blind procedures.</p>
<p>The controls came out right: linen from a Nubian tomb, linen from a second-century mummy, and threads from a 13th-century cope were all dated correctly. The three laboratory averages were then averaged with equal weight: 691 radiocarbon years before 1950, plus or minus 31. The authors used this wider error because the results scattered more than the labs' own error bars allowed. Converted to calendar years, that is AD 1262 to 1312 or AD 1353 to 1384, published rounded as AD 1260 to 1390. The paper in Nature, signed by 21 scientists, called this conclusive evidence that the linen is medieval.</p>
<h2>Why it matters so much</h2>
<p>Radiocarbon dating is a mature, well-tested method. The controls worked. And the date lands exactly where the documented history begins: the cloth appears in Lirey, France, in the 1350s, and a bishop wrote in 1389 that an artist had confessed to painting it. For many scientists, that coincidence closed the case.</p>`,
      sampleH: 'One strip, one corner',
      sampleText: `<p>Every result came from a single strip, about 7 to 8 centimeters long, cut from one corner. That corner is thought to have been handled for centuries during public showings, and it lies next to the seam of the side strip. Some researchers have argued it was repaired in the Middle Ages. A 1986 workshop in Turin proposed seven laboratories using two different methods. In 1987 this was cut down to three laboratories, all using the same method, and in 1988 to a single strip from one corner.</p>
<p>Critics say a single corner cannot speak for a 4.4 meter cloth. Defenders of the date reply that the labs examined the sample under the microscope and it looked like the main cloth. In 2010 a leftover Arizona fragment showed no dye or coating and only a few stray cotton fibers. In 2026 the same Arizona researchers reported that two leftover fragments match the main cloth and show no contamination.</p>`,
      sampleAlt: 'The corner of the Shroud where the 1988 sample was cut', sampleCap: 'The sample corner (approximate), at the feet end of the front image. Enrie 1931 photograph.',
      debateH: 'Why critics question it',
      defenseH: 'Why it is still the strongest argument against',
      debateFor: `<p>The results do not agree with each other as well as their error bars claimed. The 1989 paper admitted this: the three lab averages fail a standard consistency test, with a chi-squared value of 6.4, just past the 5% threshold. The paper widened its error, but still called the result conclusive. In 2017 the raw data were released after a legal request, and in 2019 a team led by Tristan Casabianca published a reanalysis in Archaeometry. Their consistency test gave 15.99 against a critical value of 5.99, and they concluded the samples were not homogeneous.</p>
<p>Statisticians Marco Riani and colleagues (2013) found that the measured age drifts along the length of the strip, as if something varies across the sample. Other researchers suggested a medieval reweave, contamination, or fire damage from 1532.</p>`,
      debateAgainst: `<p>None of these critiques points to the first century. Among the statistical reanalyses of the 1988 data, the largest shift proposed is 88 radiocarbon years (Walsh and Schwalbe, 2020), which still leaves the cloth medieval. Every specific mechanism offered to explain the date away, such as fire, bacteria, carbon monoxide or a burst of neutrons, has either failed a test or cannot be tested.</p>
<p>The repair theory, once popular, is weaker than it was in 2005: the leftover fragments studied in 2010 and 2026 showed no dye or coating and matched the main cloth. In short, the reanalyses show the 1988 test was smaller and less clean than it claimed. They do not show the date is wrong.</p>`,
      verdict: `<h2>Our honest summary</h2>
<p>The radiocarbon date says medieval, and it is the best single piece of evidence anyone has. The 1988 test also had real design flaws: one strip, one corner, three labs, and results that do not sit together as neatly as reported. That justifies a new test, with several samples from several places on the cloth, done openly. It does not justify ignoring the result.</p>
<p>If you are a skeptic, this is your strongest card, and you should hold it. If you believe the cloth is authentic, this is the question you have to answer honestly. Either way, the rest of the evidence still has to be explained, starting with <a href="image.html">how the image was made</a>.</p>`
    },

    image: {
      title: 'How Was the Image on the Shroud of Turin Made? | See The Shroud',
      description: 'Paint, scorch, rubbing, early photography or a burst of light? Every hypothesis for the Shroud of Turin image, what it explains and where it fails.',
      h1: 'How was the image made?',
      lede: 'This is the deepest open question about the Shroud. Any explanation, natural or not, has to account for a list of very strange properties. Here they are, followed by every major hypothesis and its problems.',
      propsH: 'What any explanation must account for',
      propsLede: 'These are the properties reported by the scientific teams that studied the cloth directly. Some are disputed in detail. Together, they are why no one has reproduced the image in every respect.',
      hypH: 'The hypotheses',
      hypLede: 'Ordered roughly from the most natural to the least. Each one is rated by how well it fits the properties above.',
      props: [
        { n: '0.2 µm', t: 'The color sits only on the outermost layer of the top fibers, according to Rogers and Fanti. A hair is about 70 µm thick.' },
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
          text: 'Microscopist Walter McCrone reported red ochre (iron oxide) on image and blood fibers and vermilion on blood fibers. He concluded in 1980 that a medieval artist painted the image around 1355 with a very dilute paint in a gelatin binder.',
          problems: 'The STURP team, using X-ray fluorescence, spectroscopy and chemistry on the cloth itself, found no pigment forming the image and no binder, and concluded it is not a painting. Paint would soak between threads; the image does not. Particles of many materials exist on the cloth, plausibly from artists who pressed copies of their paintings against it, as was done for centuries.',
          sources: [{ label: 'Schwalbe and Rogers 1982, Analytica Chimica Acta', url: 'https://shroud.com/pdfs/Physics%20Chemistry%20of%20Shroud%20Schwalbe%20Rogers%201981%20OCRsm.pdf' }, { label: 'STURP final summary, 1981', url: 'https://www.shroud.com/78conclu.htm' }] },
        { kind: 'Heat', name: 'A scorch from a heated statue', strength: 'weak',
          text: 'A metal statue or relief, heated and covered with the cloth, would leave a brownish, tonally reversed scorch with some depth information.',
          problems: 'Scorches glow reddish under ultraviolet light. The real scorches from the 1532 fire do, and the body image does not. A hot object would also scorch through the cloth and could not color areas it did not touch.',
          sources: [{ label: 'STURP final summary, 1981', url: 'https://www.shroud.com/78conclu.htm' }] },
        { kind: 'Contact', name: 'Powder or acid rubbed over a relief', strength: 'disputed',
          text: 'Investigator Joe Nickell, around 1980, made a face image by dabbing powder onto wet linen molded over a bas-relief. In 2009 chemist Luigi Garlaschelli made a life-size image by rubbing an acidic pigment onto linen laid over a volunteer and a bas-relief, then baking and washing the cloth. The results are negative and carry some 3D information. In 2025, Cicero Moraes argued from 3D simulation that the image fits a low relief better than a full body.',
          problems: 'Defenders answer that these copies are visible to the naked eye in ways the Shroud is not, that their color penetrates the fibers rather than staying on the outer 0.2 µm, that they leave material behind, and that they do not explain why the blood came first. Supporters of the rubbing idea reply that aging and washing over centuries could close part of that gap.',
          sources: [{ label: 'Garlaschelli 2010, Journal of Imaging Science and Technology', url: 'https://doi.org/10.2352/J.ImagingSci.Technol.2010.54.4.040301' }, { label: 'Wikipedia: Shroud of Turin, image analysis', url: 'https://en.wikipedia.org/wiki/Shroud_of_Turin' }] },
        { kind: 'Optics', name: 'Medieval proto-photography', strength: 'weak',
          text: 'Art historian Nicholas Allen proposed in the 1990s that a medieval workshop used a camera obscura with a quartz lens and linen treated with silver salts to "photograph" a corpse or statue.',
          problems: 'There is no historical record of such a technology for another 450 years, no one has reported silver in the image, and a photograph would not encode cloth-to-body distance the way the Shroud does.',
          sources: [{ label: 'Wikipedia: Shroud of Turin', url: 'https://en.wikipedia.org/wiki/Shroud_of_Turin' }] },
        { kind: 'Chemistry', name: 'A natural reaction with gases from a body', strength: 'disputed',
          text: 'Chemist Raymond Rogers, a STURP member, proposed a Maillard reaction: gases released by a dead body react with a thin layer of starch and sugar residues left on the linen by ancient weaving methods, producing a faint yellow color only on the surface.',
          problems: 'This would explain the superficiality and the lack of paint. It struggles to explain the sharpness and the clean distance coding, since gases spread in all directions, and it requires the body to leave the cloth before decay stains formed. No one has produced a full image this way.',
          sources: [{ label: 'Rogers and Arnoldi 2003, Melanoidins', url: 'https://shroud.com/pdfs/rogers7.pdf' }] },
        { kind: 'Physics', name: 'A short burst of radiation', strength: 'disputed',
          text: 'Several physicists suggest the image was caused by a brief, intense burst of energy from the body. ENEA scientists colored linen with ultraviolet laser pulses in a way close to the Shroud. Giulio Fanti proposed a corona discharge. John Jackson proposed that the cloth collapsed through the body as it became mechanically "transparent", recording the image as it fell.',
          problems: 'There is no known natural source for such radiation from a human body. The energy estimates are enormous. Laser experiments colored only small samples, not an image. Skeptics point out that a hypothesis that requires a miracle cannot be tested like a natural one. Supporters reply that this is exactly why it remains on the table.',
          sources: [{ label: 'Di Lazzaro and others 2012, Applied Optics', url: 'https://doi.org/10.1364/AO.51.008567' }, { label: 'Di Lazzaro and others 2010, ENEA workshop', url: 'https://www.sindone.info/DILAZZA1.PDF' }, { label: 'Jackson 1990, Shroud Spectrum International', url: 'https://shroud.com/pdfs/ssi34part3.pdf' }] }
      ],
      emText: `<p>The animation above shows the hypothesis many people find most compelling: a burst of light from the body, traveling straight up and down, coloring only the surface of the fibers, followed by the cloth falling through. We made it to help you picture the idea. It is a picture of a hypothesis, not a reconstruction of an event and not evidence for it.</p>
<p>A good test of any explanation, natural or supernatural, is whether it accounts for all eight properties at the top of this page at once. So far, none has been demonstrated in the lab to do so.</p>`,
      enea: `<h3>The ENEA laser experiments</h3>
<p>From 2005 to 2010, a team led by Paolo Di Lazzaro at ENEA in Frascati fired ultra-short pulses of ultraviolet light at linen. Within a narrow range of settings, the linen took on a straw-yellow color similar to the Shroud's. Longer or stronger pulses burned the linen, and weaker ones left no visible color until the cloth was aged. The color usually went several micrometers deep. In at least one fiber it stayed in the 0.2 µm outer wall, as on the Shroud.</p>
<p>As a rough sum, they multiplied the laser intensity that worked by the area of a human body. The answer, about 34 trillion watts, is far more than any ultraviolet source built so far. It is a back-of-the-envelope figure for doing it in one pulse, not a measurement of how the image was made. The authors wrote that "nobody can claim" the body image was made by a burst of ultraviolet flashes, and that how it formed is still unknown. What they showed is that this kind of thin coloring is extremely hard to produce at all.</p>`,
      emH: 'The light hypothesis, visualized',
      zoomH: 'How thin is the image?',
      zoomLede: 'Use the slider to zoom from the whole cloth down to a single fiber. This is the property that defeats most explanations.',
      gridH: 'Test each explanation',
      gridLede: 'Here are the six main ideas against the properties above, plus one more question: has anyone made a full image this way?'
    },

    timeline: {
      title: 'Shroud of Turin Timeline: History From Lirey to Today | See The Shroud',
      description: 'Interactive timeline of the Shroud of Turin: its possible early history, the documented record since about 1354, the fires, the photographs and the tests.',
      h1: 'Timeline',
      lede: 'The documented history of the Shroud starts in France around 1354. Before that, its history is a hypothesis, built from images and texts that may or may not describe this cloth. The timeline keeps the two apart.',
      tracks: { cloth: 'The cloth', science: 'Science', church: 'Church', world: 'World' },
      legend: { cloth: 'Documented event', science: 'Scientific study', hyp: 'Hypothesized or legendary' },
      cert: { documented: 'Documented', probable: 'Probable', hypothesized: 'Hypothesized', legendary: 'Legend' },
      listH: 'Every event',
      icon: { h: 'The face and a 6th-century icon',
        altShroud: 'The face on the Shroud, negative view', altIcon: 'Christ Pantocrator icon, Saint Catherine\'s Monastery, Sinai, 6th century',
        shroud: 'Shroud', iconLabel: 'Sinai icon',
        text: `<p>This is the oldest surviving icon of Christ Pantocrator, painted in the 6th century and kept at Saint Catherine's Monastery in Sinai. Slide between it and the face on the Shroud. Both are scaled so the eyes line up.</p>
<p>Supporters of an early history point to shared features: the long nose, the forked beard, the heavy-lidded eyes and the uneven cheeks. In the 1930s Paul Vignon listed small oddities that he believed Byzantine artists copied from the cloth, such as a square shape between the brows.</p>`,
        skeptic: 'The skeptic\'s answer: resemblance cannot tell which came first. A 14th-century artist making a burial cloth of Jesus would have copied the face that icons had made standard. Similarity is consistent with the Shroud being old, and equally with it being made to look like the icons.' },
      map: { h: 'Where the cloth has been', alt: 'Map of the documented and hypothesized routes of the Shroud, from Jerusalem to Turin',
        keyDoc: 'Documented', keyHyp: 'Hypothesized',
        jerusalem: 'Jerusalem, AD 30?', edessa: 'Edessa (Urfa), 6th to 10th c.?', constantinople: 'Constantinople, 944 to 1204?', athens: 'Athens, after 1204?',
        lirey: 'Lirey, about 1354', chambery: 'Chambéry, 1502 to 1578', turin: 'Turin, since 1578',
        caption: 'Solid lines are documented. The dashed route is a hypothesis, mostly from the historian Ian Wilson, that identifies the Shroud with the Image of Edessa (the Mandylion). Most historians do not accept that identification. Between 1453 and 1578 the cloth also traveled with the House of Savoy, so the real documented path has more stops than shown.' }
    },

    videos: {
      title: 'Shroud of Turin Videos, Fact-Checked Claim by Claim | See The Shroud',
      description: 'Three popular videos about the Shroud of Turin, checked claim by claim with timestamps: what holds up, what is disputed and what is wrong.',
      h1: 'Popular videos, checked',
      lede: 'Most people meet the Shroud through videos. We watched three popular ones from start to finish, including the transcripts, and checked their main claims. Several are excellent. Some are wrong. Click a time to jump to that moment.',
      play: 'Play video (loads YouTube)', watch: 'Watch on YouTube',
      rate: { strong: 'Holds up', disputed: 'Disputed', weak: 'Wrong or overstated' },
      missingH: 'What none of the three mentions',
      missingAfter: 'A fair case has to deal with these too. You will find each of them in the <a href="evidence.html">case file</a>.'
    },
    library: {
      title: 'Shroud of Turin Research Library: Papers and Studies | See The Shroud',
      description: 'A searchable library of research papers, studies and articles on the Shroud of Turin, for and against, with direct links to the originals on shroud.com and journals.',
      h1: 'Library',
      lede: 'More than 2,400 papers, studies, articles and newsletters, almost all from the archive at shroud.com, which Barrie Schwortz built and kept from the 1990s until his death in 2024. Start with the 25 key readings, then search by word, filter by topic, and go straight to the original.',
      keyH: 'Start here: 25 key readings, both sides', keyLede: 'Chosen so a skeptical reader meets the strongest work on each side, in roughly the order the debate unfolded.', allH: 'The full library',
      search: 'Search titles, authors and journals',
      count: 'papers shown',
      peer: 'Peer reviewed',
      topics: { radiocarbon: 'Carbon dating', blood: 'Blood', 'image-formation': 'Image formation', history: 'History', textile: 'The linen', 'anatomy-medical': 'Medical', 'pollen-botany': 'Pollen and plants', 'photography-imaging': 'Photography', '3d-vp8': '3D', coins: 'Coins', sudarium: 'Sudarium', 'art-history': 'Art history', critique: 'Critiques', overview: 'Overviews', conference: 'Conferences' },
      stances: { 'pro-authenticity': 'Favors authenticity', skeptical: 'Skeptical', neutral: 'Neutral' },
      more: `<h2>In memory of Barrie M. Schwortz (1946 to 2024)</h2>
<p>Barrie Schwortz was the official documenting photographer of the 1978 Shroud of Turin Research Project. He was Jewish, began as a skeptic, and spent the rest of his life making the research available to everyone, for free, at shroud.com. Most of this library exists because he kept it. We dedicate this page to him.</p>
<p>Want to go further? The <a href="https://www.shroud.com/" target="_blank" rel="noopener">shroud.com archive</a>, the official site of the <a href="https://www.sindone.org/" target="_blank" rel="noopener">Archdiocese of Turin</a>, and Wikipedia's <a href="https://en.wikipedia.org/wiki/Shroud_of_Turin" target="_blank" rel="noopener">Shroud of Turin</a> article, which leans skeptical and is a good test of your conclusions.</p>`
    },

    next: {
      title: 'What Now? After the Shroud of Turin | See The Shroud',
      description: 'You have seen the evidence on the Shroud of Turin. Whether you doubt, wonder or believe, here are honest next steps: what to read, watch and ask next.',
      h1: 'What now?',
      lede: 'Wherever you landed after looking at the evidence, there is a sensible next step. None of them require you to pretend to be more certain than you are.',
      paths: [
        { id: 'doubt', h: 'If you still doubt', body: `<p>Good. Doubt that keeps looking is honest. Thomas doubted, and he was not turned away.</p><ul><li>Read the strongest case against in the <a href="evidence.html">case file</a>, and the sources behind it.</li><li>Try the calculator with your own numbers, and notice which assumption decides your answer.</li><li>Ask yourself what evidence would change your mind, and whether it could exist.</li></ul>` },
        { id: 'wonder', h: 'If you are wondering', body: `<p>The Shroud is a question about one man. The best next step is to meet him where he is described most fully.</p><ul><li>Read the Gospel of John. It takes about two hours, and it ends with Thomas.</li><li>Talk with someone you trust who believes, and ask your hardest question.</li><li>If you have never prayed, try a simple, honest one: if you are there, show me.</li></ul>` },
        { id: 'believe', h: 'If you believe', body: `<p>Then the question is no longer what the cloth proves, but how you live.</p><ul><li>Be someone a skeptic can trust: fair, curious and kind, especially with people who disagree.</li><li>Share this site with the most thoughtful skeptic you know, and listen to what they say.</li><li>Serve someone in need this week. Faith that takes action is the best evidence most people will ever see.</li></ul>` }
      ],
      story: `<h2>Coming soon: one person's story</h2><p>Nelson Inno, who created this site, will share his own story, and a reflection on what he calls the pattern to God, on a separate website. Keeping it apart from the evidence lets you weigh each on its own terms.</p>`,
      quote: 'These are written that you may believe that Jesus is the Christ, the Son of God.',
      quoteCite: 'John 20:31'
    },
    about: {
      title: 'About See The Shroud: Why This Site Exists | See The Shroud',
      description: 'See The Shroud is a free, non-commercial site about the Shroud of Turin. How we rate evidence, where our images come from, and who built it.',
      h1: 'About this site',
      lede: 'Why it exists, how we work, and where everything comes from.',
      body: `<h2>Why this site exists</h2>
<p>The Shroud of Turin may be a medieval work of art, a deliberate forgery, or the burial cloth of Jesus of Nazareth. Whichever it is, it deserves a better hearing than a ten-second headline. Most of what people find online is written to win: one side shouts "proof", the other shouts "fake". This site is written to inform.</p>
<p>Its name is an invitation: see the Shroud for yourself, up close, and judge the evidence. The spirit comes from Thomas, who refused to believe until he could see the marks of the nails. We think doubt like his is honest, and that it deserves evidence, not pressure.</p>
<h2>Who made it</h2>
<p>See The Shroud was created by Nelson Inno, a Salvadoran founder, as a free, pro bono project. Full disclosure: Nelson believes the Shroud is authentic. That is exactly why the site holds itself to one rule: the strongest arguments against authenticity are shown at full strength, right next to the arguments for it. If we ever fall short of that, we want to know.</p>
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
<p>Nelson's own story, and a reflection on what he calls the pattern to God, will live on a separate website called Unless I See, after the words of Thomas in John 20:25. The evidence stays here, so you can weigh it on its own terms.</p>`,
      creditsH: 'Image credits', sourceLink: 'source'
    }
  }
};
