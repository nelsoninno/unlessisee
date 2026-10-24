// French copy. Plain language, no em dashes. HTML allowed in long fields.
export default {
  brand: 'See The Shroud',
  locale: 'fr_FR',
  shareImage: 'social-share-see-the-shroud-seetheshroud.org.jpg',
  keywords: 'See The Shroud, explorer le Saint-Suaire de Turin, examiner le Saint-Suaire de Turin, voir le Saint-Suaire de près, Saint-Suaire de Turin interactif, site interactif sur le Saint-Suaire, Saint-Suaire de Turin en haute résolution, guide visuel du Saint-Suaire, tout sur le Saint-Suaire de Turin, Saint-Suaire de Turin, Suaire de Turin, Linceul de Turin, Saint-Suaire de Turin preuves, datation au carbone 14 du Saint-Suaire, Saint-Suaire négatif photographique, Saint-Suaire 3D, le Saint-Suaire est-il authentique, linceul de Jésus, sindonologie, Shroud of Turin, STURP, Secondo Pia',
  shareAlt: 'Le visage du Saint-Suaire de Turin en négatif photographique',
  orgDescription: 'See The Shroud est un site éducatif gratuit et non commercial où vous pouvez explorer et examiner de près le Saint-Suaire de Turin (en haute résolution, en négatif et en 3D) et peser les arguments pour et contre son authenticité, avec toutes les sources, en 12 langues.',
  ui: {
    skip: 'Aller au contenu', menu: 'Menu', mainNav: 'Navigation principale', language: 'Langue',
    exhibit: 'Pièce', detail: 'Les détails', skeptic: 'La meilleure réponse sceptique', reply: 'La réplique',
    theCase: 'L’argument complet', replyAgainst: 'Ce que répondent les défenseurs', whyRating: 'Pourquoi cette note :',
    all: 'Tout', allTopics: 'Tous les thèmes', shown: 'affichées', openAll: 'Tout ouvrir ou tout fermer',
    prev: 'Précédent', next: 'Suivant', problems: 'Les problèmes de cette idée'
  },
  nav: [
    { slug: 'explore', label: 'Explorer' },
    { slug: 'evidence', label: 'Le dossier' },
    { slug: 'wounds', label: 'Les blessures' },
    { slug: 'dating', label: 'La datation' },
    { slug: 'image', label: 'L’origine de l’image' },
    { slug: 'timeline', label: 'Chronologie' },
    { slug: 'videos', label: 'Vidéos' },
    { slug: 'library', label: 'Bibliothèque' },
    { slug: 'next', label: 'Et maintenant ?' },
    { slug: 'about', label: 'À propos' }
  ],
  footer: {
    about: 'Un projet gratuit et non commercial. Chaque affirmation est sourcée dans le dossier, y compris les sources qui nous contredisent.',
    explore: 'Explorer', more: 'Aller plus loin', extra: [],
    rights: 'Texte {year} See The Shroud. Libre de partage avec un lien vers ce site. Crédits des images sur la page À propos.',
    eky: 'Site web fait avec amour, par', ekyAria: 'Site web fait avec amour par everybodyknowsyou.com'
  },
  strength: { strong: 'Solide', moderate: 'Modéré', weak: 'Faible', disputed: 'Contesté', debunked: 'Réfuté' },
  lean: { for: 'Va dans le sens de l’authenticité', against: 'Va dans le sens d’une origine médiévale', neutral: 'Contexte' },
  categories: { image: 'L’image', blood: 'Le sang', anatomy: 'Anatomie et blessures', textile: 'Le lin', dating: 'La datation', history: 'L’histoire', botany: 'Pollen et plantes', 'imaging-3d': 'L’information 3D', 'image-formation': 'L’origine de l’image', other: 'Autres' },
  fig: {
    scaleAlt: 'Schéma du linge de 4,4 mètres, avec les images de face et de dos d’un homme, tête contre tête',
    scaleFront: 'Image de face', scaleBack: 'Image de dos', scaleLen: 'environ 4,4 mètres', scaleWid: 'environ 1,1 m',
    scaleCaption: 'Le linge entier, photographié par Giuseppe Enrie en 1931. Le corps reposait sur une moitié. L’autre moitié était repliée par-dessus la tête et descendait sur le devant jusqu’aux pieds. C’est pourquoi les images de face et de dos se rejoignent au niveau des têtes.',
    foldFrontAlt: 'Moitié avant du Saint-Suaire, avec l’image de face de l’homme', foldBackAlt: 'Moitié arrière du Saint-Suaire, avec l’image de dos de l’homme',
    foldBtn: 'Le replier comme il enveloppait le corps', unfoldBtn: 'Le déplier à nouveau'
  },
  ui3d: { depth: 'Profondeur', light: 'Lumière', clay: 'Argile', negative: 'Négatif', fallback: 'Cette vue 3D a besoin de WebGL, que votre navigateur a désactivé.' },
  emanation: {
    label: 'Une hypothèse, mise en images. Pas une preuve.',
    alt: 'Animation : une lumière s’élève d’un corps placé sous un linge, l’image se forme sur le linge, puis le linge retombe à plat',
    captions: [
      'Un corps repose sous un linge, dans l’obscurité.',
      'Hypothèse : une brève et intense libération d’énergie, venue du corps lui-même.',
      'La lumière va tout droit vers le haut et tout droit vers le bas, pas dans toutes les directions.',
      'Seule la surface la plus externe des fibres fonce. Ni peinture, ni brûlure.',
      'Le physicien John Jackson a proposé que le linge soit ensuite retombé à travers un corps qui n’était plus là.',
      'Il reste une image pâle qu’aucune expérience n’a encore reproduite dans tous ses détails.'
    ],
    ui: { play: 'Lecture', pause: 'Pause', replay: 'Revoir', time: 'Temps' }
  },
  powers: {
    label: 'Niveau de zoom', prev: 'Dézoomer', next: 'Zoomer',
    fiberNote: 'Un fil est un faisceau de fibres. Seules les fibres du dessus sont colorées.',
    layerLabel: 'couche colorée, environ 0,2 µm', lumen: 'intérieur de la fibre',
    steps: [
      { size: '4,4 m', title: 'Le linge entier', text: 'Images de face et de dos, tête contre tête. À quelques pas, l’homme se voit à peine. L’image est aussi pâle que cela.' },
      { size: '25 cm', title: 'Le visage', text: 'De près, le visage n’a ni contours, ni coups de pinceau, ni direction de lumière. Le clair et le sombre sont inversés, comme sur un négatif photographique.' },
      { size: '0,25 mm', title: 'Un seul fil', text: 'Chaque fil mesure environ un quart de millimètre d’épaisseur, tissé en trois lie un. Là où se trouve l’image, seul le sommet des fils tourné vers le corps est coloré. Les fils du dessous restent blancs.' },
      { size: '15 µm', title: 'Les fibres d’un fil', text: 'Un fil compte environ 100 à 200 fibres de lin. Dans les zones de l’image, seules les deux ou trois fibres du dessus sont colorées. Les zones plus sombres de l’image n’ont pas des fibres plus foncées, elles ont plus de fibres colorées.' },
      { size: '0,2 µm', title: 'La couche colorée', text: 'Dans une fibre, la couleur se limite à la couche la plus externe, épaisse d’environ 200 milliardièmes de mètre, soit l’épaisseur de la paroi cellulaire primaire de la fibre. L’intérieur de la fibre est intact. C’est cette propriété, à elle seule, qui rend l’image si difficile à reproduire.' }
    ]
  },
  grid: {
    caption: 'Les propriétés de l’image que chaque hypothèse peut expliquer',
    corner: 'Hypothèse',
    cols: ['Finesse de 0,2 µm', 'Pas de peinture', 'Négatif', '3D', 'Le sang d’abord', 'Pas de fluorescence UV', 'Pas seulement le contact', 'Demi-teinte', 'Image complète obtenue en laboratoire'],
    legend: { y: 'L’explique', p: 'En partie, ou contesté', n: 'Ne l’explique pas', u: 'Non testé' },
    rows: [
      { name: 'Une peinture', v: 'nnpnpyyny' },
      { name: 'Brûlure par une statue chauffée', v: 'pyypnnnpy' },
      { name: 'Frottis sur un relief', v: 'ppypppppy' },
      { name: 'Photographie primitive', v: 'pnynuyynp' },
      { name: 'Réaction avec les gaz d’un corps', v: 'yyypyyppn' },
      { name: 'Une brève émission de rayonnement', v: 'pyyuyuyun' }
    ],
    note: 'Ce tableau résume ce que rapportent les partisans et les critiques de chaque idée. Des personnes raisonnables noteraient certaines cases autrement. Regardez la dernière colonne : les hypothèses qui expliquent le plus de propriétés sont aussi celles qui n’ont jamais produit une image complète en laboratoire.'
  },
  dating: {
    bc: 'av. J.-C.', crucifixion: 'Crucifixion, vers 30 à 33 apr. J.-C.', documented: 'Documenté, à partir de 1354 environ',
    chartAlt: 'Graphique comparant la fourchette de la datation au radiocarbone de 1988 avec d’autres méthodes de datation, sur un axe en années civiles',
    labsAlt: 'Graphique des douze mesures au radiocarbone publiées par l’Arizona, Oxford et Zurich, avec leurs barres d’erreur',
    bpAxis: 'Âge radiocarbone, en années avant 1950 (BP). Plus bas signifie plus récent.', bpShort: 'années radiocarbone BP', labMean: 'Moyenne du labo', combined: 'Combiné'
  },
  notFound: { title: 'Page introuvable | See The Shroud', h1: 'Cette page n’existe pas', text: 'Le lien est peut-être ancien, ou l’adresse contient une faute de frappe. Tout le site part de la page d’accueil.', cta: 'Aller à la page d’accueil' },

  pages: {
    index: {
      title: 'See The Shroud : explorer le Saint-Suaire de Turin et ses preuves',
      description: 'Explorez et examinez de près le Saint-Suaire de Turin : zoom, négatif, 3D, carte des blessures, arguments pour et contre et sources. Gratuit, en 12 langues.',
      h1: 'Examinez vous-même le Saint-Suaire de Turin',
      lede: 'Un linge de lin, long de 4,4 mètres, porte l’image pâle d’un homme flagellé et crucifié. Certains y voient un faux médiéval. D’autres, le linceul de Jésus. Voici les arguments des deux camps, avec toutes les sources, pour que vous puissiez juger par vous-même.',
      cta1: 'Explorer le linge', cta2: 'Lire le dossier',
      faceAlt: 'Le visage du Saint-Suaire de Turin. Passez dessus pour le voir en négatif photographique.',
      hint: 'Regardez la plaque se révéler',
      hint2: 'Passez sur le visage pour le voir tel que l’œil le voit',
      faceCaption: 'Le visage du Saint-Suaire. Photographie de Giuseppe Enrie, 1931.',
      thomasText: `<h2>Thomas a demandé à voir les marques</h2>
<p>Ce site est conçu dans l’esprit du sceptique le plus honnête des Évangiles. Thomas n’a pas cru ce que ses amis lui disaient. Il voulait une preuve qu’il pourrait voir et toucher : la marque des clous, la blessure au côté.</p>
<p>Le Saint-Suaire de Turin montre un homme qui porte des marques du même genre. Est-il ce que beaucoup croient qu’il est ? Ce site vous laisse cette question. Nous vous montrerons les marques, les analyses, les doutes et les réponses, et nous vous indiquerons chaque source.</p>`,
      thomasCta: 'Voir les marques',
      objH: 'Ce que c’est',
      objLede: 'Une seule pièce de lin, avec une image de face et une image de dos d’un homme nu, tête contre tête, ainsi que des taches de sang, des traces de brûlure et des auréoles d’eau laissées par sa longue histoire. Il est conservé à Turin, en Italie, depuis 1578, sauf pendant la Seconde Guerre mondiale.',
      facts: [
        { n: '4,4 m', t: 'de long, pour environ 1,1 m de large' },
        { n: '3 : 1', t: 'sergé à chevrons, un tissage coûteux' },
        { n: '0,2 µm', t: 'profondeur approximative de la couleur dans les fibres de l’image. Un cheveu mesure environ 70 µm.' },
        { n: '1354', t: 'vers cette année, il apparaît pour la première fois dans les archives, à Lirey, en France' },
        { n: '1260 à 1390', t: 'la fourchette de dates donnée par la datation au carbone 14 de 1988' }
      ],
      cmpPos: 'Tel que l’œil le voit', cmpNeg: 'Tel que le négatif de 1898 l’a montré',
      cmpPosAlt: 'Le visage du Saint-Suaire tel qu’il apparaît à l’œil', cmpNegAlt: 'Le visage du Saint-Suaire en négatif photographique',
      cmpLabel: 'Faites glisser pour comparer le positif et le négatif',
      cmpCaption: 'Déplacez la ligne. À gauche : le négatif photographique. À droite : ce que l’on voit sur le linge.',
      negYear: 'Turin, 28 mai 1898',
      negH: 'La nuit où une photographie a changé la question',
      negText: `<p>Secondo Pia, avocat et photographe amateur, obtint l’autorisation de prendre les premières photographies du linge. En développant sa plaque de verre, il s’attendait à voir une image inversée et fantomatique. Le négatif montra au contraire un portrait net et naturel d’un homme.</p>
<p>L’image sur le linge se comporte comme un négatif photographique : le clair et le sombre sont inversés. Personne ne l’avait remarqué, car personne n’avait vu l’image inversée avant qu’elle soit photographiée. C’est de là qu’est partie l’étude moderne du Saint-Suaire.</p>`,
      invertBtn: 'Inverser cette page, comme la plaque de Pia', invertBack: 'Revenir à la normale',
      negSkeptic: 'La réponse sceptique : une image obtenue en pressant un linge sur un relief, ou en frottant de la poudre dessus, a elle aussi des valeurs inversées. Une image en négatif ne suppose donc, à elle seule, ni photographie ni miracle. La vraie question est de savoir si ces méthodes correspondent à tout le reste de l’image.',
      reliefAlt: 'Le visage du Saint-Suaire transformé en relief 3D à partir de la luminosité de l’image',
      d3H: 'Elle contient une information 3D',
      d3Text: `<p>En 1976, le physicien John Jackson et l’ingénieur Eric Jumper placèrent une photographie du Saint-Suaire dans un VP-8 Image Analyzer, un appareil conçu pour transformer la luminosité en hauteur. Les photographies ordinaires en sortent déformées. Le Saint-Suaire en sortit sous la forme d’un corps cohérent, en relief.</p>
<p>La raison : la densité de l’image en chaque point semble suivre la distance entre le linge et le corps en ce point. La mesure à l’appui, publiée en 1984, était modeste : 13 points, une corrélation r² de 0,60 et une large marge d’erreur. Mais l’effet se voit facilement. Cette vue 3D est construite de la même manière, en direct dans votre navigateur, directement à partir de l’image. Faites-la glisser pour la tourner.</p>`,
      d3Skeptic: 'La réponse sceptique : les images obtenues à partir d’un relief peu profond, comme un frottis sur un bas-relief, portent elles aussi une certaine information de profondeur. En 2025, un designer 3D, Cicero Moraes, a soutenu à partir d’une simulation informatique que l’image correspond mieux à un bas-relief qu’à un corps entier. Le débat porte sur la façon dont chaque méthode correspond au vrai linge.',
      d3Cta: 'La comparer avec une peinture en 3D',
      marksH: 'Les marques d’une crucifixion',
      marksText: `<p>Les médecins légistes qui ont étudié l’image décrivent plus d’une centaine de petites plaies laissées par un fouet romain, des plaies punctiformes autour de la tête, un visage tuméfié, des écorchures aux épaules, une plaie de clou au poignet plutôt qu’à la paume, et une plaie au côté, entre les côtes, qui a saigné après la mort.</p>
<p>Ces marques correspondent aux récits des Évangiles, qui mentionnent la flagellation, les épines, les coups, les clous et une lance dans le côté. Plusieurs détails, comme le clou au poignet, vont à l’encontre de la façon dont les artistes médiévaux peignaient d’habitude la crucifixion.</p>`,
      marksAlt: 'Détail des mains croisées sur le Saint-Suaire, avec la plaie au poignet', marksCaption: 'Les mains croisées. Le sang coule du poignet, pas de la paume. Vue en négatif.',
      marksCta: 'Voir chaque blessure, à côté du texte de l’Évangile',
      dateH: 'L’analyse qui a dit « médiéval »',
      dateText: `<p>En 1988, trois laboratoires, en Arizona, à Oxford et à Zurich, ont daté au carbone 14 de petits échantillons prélevés dans un coin du linge. Leur résultat combiné, publié dans la revue Nature en 1989, était de 1260 à 1390 apr. J.-C., avec un niveau de confiance de 95 %. C’est l’argument le plus fort contre l’authenticité, et nous lui consacrons une page entière.</p>
<p>Depuis, des chercheurs se sont interrogés sur l’endroit du prélèvement, sur la cohérence des échantillons entre eux, et sur la question de savoir si les données brutes justifiaient la précision publiée. D’autres méthodes de datation ont donné des dates plus anciennes, mais aucune n’est aussi établie que la datation au radiocarbone.</p>`,
      dateCta: 'Lire toute l’histoire de la datation',
      howH: 'Comment l’image s’est-elle formée ?',
      howLede: 'Après plus d’un siècle d’études, personne n’a de réponse complète. Ce n’est pas un slogan, c’est l’état actuel de la science. Voici l’une des hypothèses les plus audacieuses, présentée en animation.',
      howText: `<p>L’image est d’une couleur jaune paille, sur les toutes premières fibres du lin. Il n’y a ni peinture, ni coups de pinceau, ni aucun signe que l’image ait imprégné les fils. Elle ne se comporte pas comme une brûlure ordinaire : les vraies traces de brûlure de l’incendie de 1532 sont fluorescentes sous la lumière ultraviolette, et l’image du corps ne l’est pas.</p>
<p>Les chercheurs ont proposé une peinture, une statue chauffée, de la poudre frottée sur un relief, une forme primitive de photographie, une réaction chimique avec les gaz d’un corps, et une brève émission de rayonnement. Chaque idée explique certains traits et peine à en expliquer d’autres.</p>`,
      howEnea: `<h3>Ce qu’un laser peut faire, et ce qu’il ne peut pas faire</h3>
<p>Entre 2005 et 2010, des scientifiques de l’ENEA, l’agence nationale italienne pour les nouvelles technologies, ont envoyé sur du lin des impulsions très brèves de lumière laser ultraviolette. Dans une plage de réglages étroite, ils ont coloré le lin d’un jaune paille proche de celui du Saint-Suaire, sans le brûler. Dans la plupart des fibres, la couleur pénétrait plus profondément que sur le Saint-Suaire. Dans au moins une fibre, elle restait dans la fine paroi externe, comme sur le Saint-Suaire.</p>
<p>Pour un calcul approximatif, ils ont multiplié l’intensité laser efficace par la surface d’un corps humain. Le résultat, environ 34 000 milliards de watts, dépasse de loin toute source ultraviolette construite à ce jour. C’est un ordre de grandeur pour le faire en une seule impulsion laser. Ce n’est pas une mesure de la façon dont l’image a réellement été produite. Les auteurs ont écrit que « personne ne peut affirmer » que l’image a été faite ainsi, et que son origine reste inconnue.</p>`,
      howCta: 'Comparer toutes les hypothèses',
      weighH: 'Pesez vous-même',
      weighText: `<p>La plupart des débats sur le Saint-Suaire portent en réalité sur le poids à donner à chaque élément. Nous avons donc conçu un petit calculateur. Vous décidez dans quelle mesure chaque élément penche d’un côté ou de l’autre, et il vous montre où vos propres jugements vous mènent.</p>
<p>Il ne vous donnera pas la réponse. Il vous montrera de quelles hypothèses dépend votre réponse.</p>`,
      weighCta: 'Ouvrir le calculateur',
      quote: 'Si je ne vois dans ses mains la marque des clous ... je ne croirai point.',
      quoteCite: 'Thomas, dans Jean 20:25',
      freeH: 'Pourquoi ce n’est pas une preuve',
      freeText: `<p>Si Dieu voulait forcer la foi, il le pourrait. Un signe qui ne laisserait aucune place au doute ne laisserait pas non plus de place au choix. Le Saint-Suaire fait quelque chose de plus discret : il donne à un esprit sérieux assez de matière pour prendre la question au sérieux, et vous laisse le dernier pas.</p>
<p>La vidéo de Truthly que nous avons vérifiée se termine sur cette idée, et nous pensons que c’est la bonne façon de conclure. Thomas a pu voir les marques. La réponse qu’il a reçue concernait tous ceux qui viendraient après lui.</p>`,
      freeQuote: 'Heureux ceux qui n’ont pas vu, et qui ont cru!',
      freeCite: 'Jésus à Thomas, Jean 20:29',
      faqH: 'Les questions que l’on se pose',
      faq: [
        { q: 'Le Saint-Suaire de Turin est-il authentique ?', a: 'C’est un vrai linge de lin, très ancien. Qu’il soit le linceul de Jésus est contesté. La datation au carbone 14 de 1988 l’a situé entre 1260 et 1390 apr. J.-C. De nombreux chercheurs contestent ce résultat, et aucune méthode n’a encore reproduit en même temps toutes les propriétés de l’image. Ce site présente les deux camps, avec leurs sources.' },
        { q: 'Qu’a donné la datation au carbone 14 ?', a: 'En 1988, des laboratoires en Arizona, à Oxford et à Zurich ont daté des échantillons prélevés dans un coin et ont annoncé 1260 à 1390 apr. J.-C., avec un niveau de confiance de 95 % (Damon et autres, Nature, 1989). Les critiques avancent que ce coin a pu être réparé, et une nouvelle analyse des données brutes, en 2019, a montré que les échantillons n’étaient pas aussi cohérents qu’annoncé.' },
        { q: 'L’image est-elle peinte ?', a: 'L’équipe scientifique de 1978 (STURP) a conclu que ce n’est pas une peinture : elle n’a trouvé aucun pigment formant l’image, aucun coup de pinceau et aucun liant. Le microscopiste Walter McCrone n’était pas d’accord et a signalé de l’oxyde de fer et d’autres matières. La plupart des études ultérieures ont donné raison au STURP sur l’image, tout en reconnaissant que de minuscules particules de nombreuses matières se trouvent sur le linge.' },
        { q: 'Pourquoi l’image est-elle un négatif ?', a: 'Sur le linge, le clair et le sombre sont inversés par rapport à une image normale, si bien qu’un négatif photographique de l’image ressemble à un portrait naturel. Secondo Pia l’a découvert en 1898. Les sceptiques font remarquer que les images obtenues par contact avec un relief sont elles aussi inversées.' },
        { q: 'Que dit l’Église catholique ?', a: 'L’Église n’a jamais déclaré officiellement le Saint-Suaire authentique, et elle n’oblige personne à le croire. Les papes récents l’ont appelé une icône de la souffrance du Christ et ont prié devant lui. Le Saint-Siège en est propriétaire depuis 1983, et l’archevêque de Turin en est le gardien.' },
        { q: 'Peut-on le voir en vrai ?', a: 'Il est conservé dans la cathédrale Saint-Jean-Baptiste de Turin, dans une châsse à climat contrôlé, et il n’est généralement pas exposé au public. Il est montré lors de rares ostensions publiques, comme celles de 2010 et 2015, et lors d’une retransmission en direct en 2020.' }
      ],
      pathsH: 'Où aller ensuite',
      paths: [
        { slug: 'evidence', h: 'Si vous doutez', t: 'Commencez par le dossier. Chaque argument, pour et contre, noté selon sa solidité.' },
        { slug: 'explore', h: 'Si vous voulez le voir', t: 'Zoomez sur le linge entier, passez en négatif et retrouvez chaque marque.' },
        { slug: 'library', h: 'Si vous voulez approfondir', t: 'Des centaines d’articles et d’études, consultables par recherche, avec des liens vers les originaux.' },
        { slug: 'next', h: 'Si vous vous demandez quoi faire maintenant', t: 'Des prochaines étapes honnêtes, que vous doutiez, que vous vous interrogiez ou que vous croyiez.' }
      ]
    },

    explore: {
      title: 'Explorer le Saint-Suaire de Turin en haute résolution, en interactif | See The Shroud',
      description: 'Vue interactive du Saint-Suaire de Turin entier : zoomez, passez au négatif, renforcez l’image, trouvez chaque blessure, brûlure et pièce, toutes expliquées.',
      h1: 'Explorer le linge',
      lede: 'Voici le Saint-Suaire entier, image de face et image de dos, tête contre tête. Faites glisser pour vous déplacer, utilisez la molette ou pincez pour zoomer. Passez au négatif pour voir ce que Secondo Pia a vu en 1898. Les marques numérotées expliquent ce que vous regardez.',
      imgAlt: 'Le Saint-Suaire de Turin entier, image de face et image de dos',
      ui: { tools: 'Outils d’affichage', negative: 'Négatif', enhance: 'Renforcer', layerWounds: 'Blessures', layerDamage: 'Feu et eau', layerLinen: 'Le lin', tour: 'Visite guidée', fit: 'Linge entier', zoomIn: 'Zoomer', zoomOut: 'Dézoomer', help: 'Faites glisser pour vous déplacer. Molette ou pincement pour zoomer. Touche N pour le négatif.', close: 'Fermer', prev: 'Précédent', next: 'Suivant', more: 'En savoir plus', skeptic: 'La réponse sceptique' },
      reliefH: 'L’image en 3D',
      reliefText: `<p>Quand on transforme la luminosité d’une photographie ordinaire en hauteur, on obtient un amas déformé : le nez s’enfonce, les ombres se soulèvent, l’arrière-plan se bombe. Quand on fait la même chose avec le Saint-Suaire, on obtient un visage et un corps cohérents. Comparez vous-même. Les deux vues ci-dessous utilisent exactement la même méthode.</p>`,
      reliefFaceAlt: 'Relief 3D du visage du Saint-Suaire', reliefFaceCap: 'Le visage du Saint-Suaire, luminosité transformée en hauteur.',
      reliefPaintAlt: 'Relief 3D d’un visage peint, avec la même méthode', reliefPaintCap: 'Un visage peint, même méthode. Peinture : Tête du Christ, domaine public.',
      reliefBodyAlt: 'Relief 3D de toute l’image de face du Saint-Suaire', reliefBodyCap: 'Toute l’image de face en relief. Faites-la tourner pour voir la forme du corps.',
      reliefSkeptic: 'Mise en garde honnête : nos vues 3D sont une simple reconstitution de l’idée du VP-8, lissée pour le web. Elles montrent le principe. Ce ne sont pas des mesures scientifiques.',
      photosH: 'À propos de ces photographies',
      photosText: `<p>Les images du linge entier présentées ici sont des photographies du domaine public. Les plus belles photographies du Saint-Suaire, prises par Vernon Miller et Barrie Schwortz pour l’équipe scientifique de 1978, ainsi que les images en très haute résolution de 2002 et 2008, sont protégées par le droit d’auteur. Vous pouvez en voir beaucoup sur <a href="https://www.shroud.com/" target="_blank" rel="noopener">shroud.com</a> et <a href="https://shroudphotos.com/" target="_blank" rel="noopener">shroudphotos.com</a>. Nous demandons l’autorisation de les montrer ici.</p>`
    },

    evidence: {
      title: 'Saint-Suaire de Turin : les preuves pour et contre | See The Shroud',
      description: 'Les grands arguments sur le Saint-Suaire de Turin, pour et contre son authenticité, notés par solidité, avec la meilleure réponse sceptique et les sources.',
      h1: 'Le dossier',
      lede: 'Tous les grands arguments sur le Saint-Suaire, pour et contre. Chacun est noté selon sa solidité, avec la meilleure objection, la meilleure réplique et les sources. Nous présentons les arguments contre l’authenticité dans toute leur force, car vous devez d’abord les entendre de notre bouche.',
      counts: '{n} pièces : {f} vont dans le sens de l’authenticité, {a} dans le sens d’une origine médiévale.',
      method: 'Notre méthode de notation : Solide signifie que les faits sont bien documentés et que la conclusion est difficile à éviter. Modéré signifie une vraie preuve, face à une objection sérieuse. Faible signifie suggestif, au mieux. Contesté signifie que des chercheurs sérieux ne s’accordent pas sur les faits eux-mêmes. Réfuté signifie qu’il ne faut pas l’utiliser. Nous notons les affirmations des deux camps selon les mêmes règles.',
      filterLean: 'Filtrer par direction', filterCat: 'Filtrer par thème',
      weighH: 'Pesez vous-même',
      weighText: `<p>Commencez par votre a priori : avant toute preuve, quelle est la probabilité qu’un linge comme celui-ci soit le vrai linceul de Jésus ? Ensuite, pour chaque élément, décidez combien il serait plus probable d’observer cet élément si le linge était authentique plutôt que s’il était une œuvre médiévale. Déplacez un curseur vers la droite si l’élément s’accorde mieux avec l’authenticité, vers la gauche s’il s’accorde mieux avec une origine médiévale.</p>
<p>C’est la règle de Bayes, la façon classique de combiner des preuves. Essayez les réglages « sceptique » et « croyant » pour voir à quel point deux personnes raisonnables peuvent partir de points éloignés, et dans quel sens les preuves les font bouger.</p>`,
      wui: {
        neutral: 'Revenir au neutre', skeptic: 'Les réglages d’un sceptique', believer: 'Les réglages d’un croyant',
        prior: 'Votre point de départ (cote a priori)', priorHelp: 'La plupart des reliques médiévales n’étaient pas ce qu’elles prétendaient être, donc un point de départ bas est raisonnable.',
        result: 'Votre résultat : probabilité que le linge soit authentique', medieval: 'Médiéval', authentic: 'Authentique',
        noEffect: 'Sans effet',
        favorsA: '{x} fois plus probable s’il est authentique', favorsM: '{x} fois plus probable s’il est médiéval',
        oddsFor: 'Cote : {x} contre 1 pour l’authenticité', oddsAgainst: 'Cote : 1 sur {x}',
        caveat: 'Ce calcul traite chaque élément comme indépendant, ce qui est une simplification. Certains éléments sont liés, par exemple plusieurs reposent sur les mêmes photographies. Le calculateur montre comment vos jugements se combinent. Il ne les remplace pas.'
      }
    },

    wounds: {
      title: 'Les blessures du Saint-Suaire de Turin et les Évangiles | See The Shroud',
      description: 'Chaque blessure du Saint-Suaire de Turin, de la flagellation au clou dans le poignet et à la plaie du côté, montrée sur le linge face au texte de l’Évangile.',
      h1: 'Les blessures, et ce que disent les Évangiles',
      lede: 'Cliquez sur un numéro sur le linge ou sur une blessure dans la liste. Chaque marque est expliquée comme la décrivent les médecins légistes, à côté du verset de l’Évangile qui lui correspond, avec la remarque sceptique quand il y en a une.',
      front: 'Face', back: 'Dos', alt_front: 'Image de face de l’homme du Saint-Suaire, vue en négatif', alt_back: 'Image de dos de l’homme du Saint-Suaire, vue en négatif',
      figNote: 'Les positions sont approximatives. Vue en négatif, où les marques de sang apparaissent claires.',
      breath: {
        alt: 'Schéma d’un crucifié qui alterne entre s’affaisser et se redresser pour respirer',
        h: 'Pourquoi le sang sur les bras coule dans deux directions',
        text: `<p>Sur les avant-bras, de minces filets de sang coulent selon deux angles légèrement différents, écartés d’environ dix degrés. Des médecins légistes comme Robert Bucklin y voient des bras tenus dans deux positions pendant que le sang coulait.</p>
<p>Cela correspond à la façon dont la crucifixion tue. Suspendu par les bras, on a du mal à expirer : la victime doit prendre appui sur ses pieds cloués pour se redresser à chaque respiration, puis s’affaisser à nouveau. Le sang coule toujours tout droit vers le bas, donc quand l’angle des bras change, la trace sur la peau change de direction. Appuyez sur le bouton pour le voir.</p>`,
        up: 'Se redresser pour respirer', down: 'S’affaisser',
        skeptic: 'La meilleure réponse sceptique : en 2018, une étude de morphologie des traces de sang menée par Matteo Borrini et Luigi Garlaschelli, avec un volontaire et de vrais écoulements de sang, a conclu que les traces des avant-bras exigent d’autres positions des bras qu’une seule posture de crucifixion, et a jugé certains écoulements irréalistes. Les défenseurs répondent qu’un corps qui a bougé pendant des heures laisserait justement des traces aussi variées.'
      },
      intro: '<p>La crucifixion romaine était une exécution publique destinée à humilier. Les Évangiles décrivent en détail, et simplement, celle qui nous intéresse ici. Le linge garde la trace d’une exécution qui présente les mêmes caractéristiques, y compris certaines que l’art médiéval a mal représentées.</p>',
      after: `<h2>Pourquoi c’est important</h2>
<p>Un faussaire du XIVe siècle aurait dû connaître des détails que sa propre culture ignorait ou ne montrait pas : que les clous traversaient le poignet, qu’un flagrum romain laissait des marques en forme d’haltère, que le sang d’un corps mort se sépare en caillot et en sérum. Les sceptiques répondent que certains de ces détails sont contestés, et que les marques de sang elles-mêmes ont été étudiées avec des résultats mitigés. Les deux camps sont présentés dans le <a href="evidence.html">dossier</a>.</p>`
    },

    dating: {
      title: 'Datation au carbone 14 du Saint-Suaire de Turin et le débat | See The Shroud',
      description: 'La datation au carbone 14 du Saint-Suaire de Turin en 1988 a donné 1260 à 1390 apr. J.-C. Les 12 mesures, le prélèvement, les réanalyses et d’autres méthodes.',
      h1: 'La datation au carbone 14',
      lede: 'C’est l’argument le plus fort pour dire que le Saint-Suaire est médiéval, et il mérite un examen attentif. Voici ce qui a été fait, ce qui a été trouvé, ce que les critiques ont trouvé depuis, et ce que cela prouve ou ne prouve pas.',
      compareH: 'Toutes les dates jamais proposées, sur une seule ligne',
      chartNote: 'En rouge : le résultat du radiocarbone de 1988, avec un niveau de confiance de 95 %. Hachures vertes : les autres méthodes, toutes appliquées à des fibres détachées d’origine incertaine, et aucune n’étant une technique de datation établie. Le cercle indique l’étude aux rayons X, qui a comparé un fil avec du lin du Ier siècle et n’a pas donné de fourchette de dates. Survolez ou touchez une barre pour voir les détails.',
      labsH: 'Les douze mesures derrière la date',
      labsText: 'Chaque ligne est une mesure publiée, avec son erreur déclarée. La bande grisée est la moyenne pondérée, 689 plus ou moins 16 années radiocarbone. Comme les résultats étaient trop dispersés, la date publiée a utilisé une simple moyenne, avec une erreur plus large, 691 plus ou moins 31. Remarquez comme Oxford se tient à l’écart de l’Arizona. C’est cette dispersion que des statisticiens ont ensuite mise en question.',
      body: `<h2>Ce qui a été fait</h2>
<p>Le 21 avril 1988, dans la sacristie de la cathédrale de Turin, Giovanni Riggi découpa une seule bande dans un coin du linge, sur le bord proche des pieds de l’image de face, juste au-dessus de l’endroit où un échantillon avait été prélevé en 1973. Les experts textiles Franco Testore et Gabriel Vial, ainsi que des représentants des trois laboratoires, y assistaient. Des morceaux d’environ 50 milligrammes furent envoyés à trois laboratoires utilisant la spectrométrie de masse par accélérateur : l’université de l’Arizona, l’université d’Oxford et l’ETH de Zurich. Chaque laboratoire reçut aussi trois échantillons de contrôle d’âge connu. L’analyse n’était pas faite à l’aveugle : le tissage inhabituel du Saint-Suaire rendait son échantillon facile à reconnaître, et les auteurs ont dit avoir renoncé aux procédures à l’aveugle.</p>
<p>Les contrôles ont donné les bons résultats : du lin d’une tombe nubienne, du lin d’une momie du IIe siècle et des fils d’une chape du XIIIe siècle ont tous été correctement datés. Les moyennes des trois laboratoires ont ensuite été moyennées avec un poids égal : 691 années radiocarbone avant 1950, plus ou moins 31. Les auteurs ont utilisé cette erreur plus large parce que les résultats étaient plus dispersés que ne le permettaient les barres d’erreur des laboratoires eux-mêmes. Converti en années civiles, cela donne 1262 à 1312 ou 1353 à 1384 apr. J.-C., publié arrondi à 1260 à 1390 apr. J.-C. L’article de Nature, signé par 21 scientifiques, y voyait la preuve concluante que le lin est médiéval.</p>
<h2>Pourquoi c’est si important</h2>
<p>La datation au radiocarbone est une méthode mûre et bien éprouvée. Les contrôles ont fonctionné. Et la date tombe exactement là où commence l’histoire documentée : le linge apparaît à Lirey, en France, dans les années 1350, et un évêque écrivit en 1389 qu’un artiste avait avoué l’avoir peint. Pour beaucoup de scientifiques, cette coïncidence a clos le dossier.</p>`,
      sampleH: 'Une bande, un coin',
      sampleText: `<p>Tous les résultats proviennent d’une seule bande, longue d’environ 7 à 8 centimètres, découpée dans un coin. Ce coin aurait été manipulé pendant des siècles lors des ostensions publiques, et il jouxte la couture de la bande latérale. Certains chercheurs ont soutenu qu’il avait été réparé au Moyen Âge. Un atelier tenu à Turin en 1986 avait proposé sept laboratoires utilisant deux méthodes différentes. En 1987, on est passé à trois laboratoires, tous utilisant la même méthode, et en 1988 à une seule bande prise dans un coin.</p>
<p>Les critiques disent qu’un seul coin ne peut pas représenter un linge de 4,4 mètres. Les défenseurs de la date répondent que les laboratoires ont examiné l’échantillon au microscope et qu’il ressemblait au reste du linge. En 2010, un fragment restant de l’Arizona n’a montré ni teinture ni enduit, et seulement quelques fibres de coton isolées. En 2026, les mêmes chercheurs de l’Arizona ont indiqué que deux fragments restants correspondent au reste du linge et ne montrent aucune contamination.</p>`,
      sampleAlt: 'Le coin du Saint-Suaire où l’échantillon de 1988 a été découpé', sampleCap: 'Le coin du prélèvement (approximatif), du côté des pieds de l’image de face. Photographie d’Enrie, 1931.',
      debateH: 'Pourquoi les critiques la remettent en question',
      defenseH: 'Pourquoi elle reste l’argument le plus fort contre',
      debateFor: `<p>Les résultats ne concordent pas entre eux aussi bien que leurs barres d’erreur le prétendaient. L’article de 1989 l’a reconnu : les moyennes des trois laboratoires échouent à un test de cohérence classique, avec un khi-deux de 6,4, juste au-delà du seuil de 5 %. L’article a élargi son erreur, mais a tout de même qualifié le résultat de concluant. En 2017, les données brutes ont été communiquées à la suite d’une demande juridique, et en 2019 une équipe dirigée par Tristan Casabianca a publié une nouvelle analyse dans Archaeometry. Leur test de cohérence a donné 15,99 pour une valeur critique de 5,99, et ils ont conclu que les échantillons n’étaient pas homogènes.</p>
<p>Le statisticien Marco Riani et ses collègues (2013) ont trouvé que l’âge mesuré dérive le long de la bande, comme si quelque chose variait d’un bout à l’autre de l’échantillon. D’autres chercheurs ont évoqué un retissage médiéval, une contamination ou des dégâts dus à l’incendie de 1532.</p>`,
      debateAgainst: `<p>Aucune de ces critiques ne mène au Ier siècle. Parmi les nouvelles analyses statistiques des données de 1988, le plus grand décalage proposé est de 88 années radiocarbone (Walsh et Schwalbe, 2020), ce qui laisse le linge médiéval. Chaque mécanisme précis avancé pour écarter la date, comme le feu, les bactéries, le monoxyde de carbone ou un flux de neutrons, a soit échoué à un test, soit ne peut pas être testé.</p>
<p>La théorie de la réparation, autrefois populaire, est plus faible qu’en 2005 : les fragments restants étudiés en 2010 et en 2026 n’ont montré ni teinture ni enduit, et correspondaient au reste du linge. En bref, les nouvelles analyses montrent que l’analyse de 1988 était plus restreinte et moins propre qu’elle ne le prétendait. Elles ne montrent pas que la date est fausse.</p>`,
      verdict: `<h2>Notre résumé honnête</h2>
<p>La date au radiocarbone dit « médiéval », et c’est le meilleur élément isolé dont on dispose. L’analyse de 1988 avait aussi de vrais défauts de conception : une bande, un coin, trois laboratoires, et des résultats qui ne concordent pas aussi bien qu’annoncé. Cela justifie une nouvelle analyse, avec plusieurs échantillons pris à plusieurs endroits du linge, menée en toute transparence. Cela ne justifie pas d’ignorer le résultat.</p>
<p>Si vous êtes sceptique, c’est votre meilleure carte, et vous devez la garder. Si vous croyez que le linge est authentique, c’est la question à laquelle vous devez répondre honnêtement. Dans les deux cas, le reste des éléments doit encore être expliqué, à commencer par <a href="image.html">la façon dont l’image a été produite</a>.</p>`
    },

    image: {
      title: 'Comment l’image du Saint-Suaire de Turin s’est-elle formée ? | See The Shroud',
      description: 'Toutes les hypothèses sur l’image du Saint-Suaire de Turin, de la peinture à un éclair de lumière, avec ce qu’elles expliquent et là où elles échouent.',
      h1: 'Comment l’image s’est-elle formée ?',
      lede: 'C’est la question ouverte la plus profonde sur le Saint-Suaire. Toute explication, naturelle ou non, doit rendre compte d’une liste de propriétés très étranges. Les voici, suivies de chaque grande hypothèse et de ses problèmes.',
      propsH: 'Ce que toute explication doit expliquer',
      propsLede: 'Ce sont les propriétés rapportées par les équipes scientifiques qui ont étudié le linge directement. Certaines sont contestées dans le détail. Ensemble, elles expliquent pourquoi personne n’a reproduit l’image sur tous les points.',
      hypH: 'Les hypothèses',
      hypLede: 'Classées à peu près de la plus naturelle à la moins naturelle. Chacune est notée selon son accord avec les propriétés ci-dessus.',
      props: [
        { n: '0,2 µm', t: 'La couleur ne se trouve que sur la couche la plus externe des fibres du dessus, selon Rogers et Fanti. Un cheveu mesure environ 70 µm d’épaisseur.' },
        { n: 'Pas de peinture', t: 'Aucun pigment, aucun liant ni aucun coup de pinceau ne forme l’image, selon l’équipe de 1978.' },
        { n: 'Négatif', t: 'Le clair et le sombre sont inversés, si bien que le négatif photographique paraît naturel.' },
        { n: '3D', t: 'La densité de l’image suit la distance entre le linge et le corps, ce qui permet de la transformer en relief.' },
        { n: 'Le sang d’abord ?', t: 'Les analyses n’ont trouvé aucune image du corps sous les taches de sang, ce que la plupart des chercheurs interprètent ainsi : le sang d’abord, l’image ensuite. Un article de 2026 soutient que cela ne tranche pas l’ordre des événements.' },
        { n: 'Pas de fluorescence', t: 'Sous la lumière ultraviolette, les brûlures de 1532 sont fluorescentes et l’image du corps ne l’est pas. Ce n’est pas une simple brûlure.' },
        { n: 'Aussi des écarts', t: 'Certaines zones de l’image ne touchaient pas le corps, comme entre le nez et la joue. Ce n’est pas seulement une empreinte par contact.' },
        { n: 'Demi-teinte', t: 'Chaque fibre de l’image est soit colorée, soit non. Les zones plus sombres ont simplement plus de fibres colorées, comme une photo de journal.' }
      ],
      hypotheses: [
        { kind: 'Art', name: 'Une peinture', strength: 'weak',
          text: 'Le microscopiste Walter McCrone a signalé de l’ocre rouge (oxyde de fer) sur des fibres de l’image et du sang, et du vermillon sur des fibres du sang. Il a conclu en 1980 qu’un artiste médiéval avait peint l’image vers 1355, avec une peinture très diluée dans un liant à la gélatine.',
          problems: 'L’équipe du STURP, en utilisant la fluorescence X, la spectroscopie et la chimie sur le linge lui-même, n’a trouvé ni pigment formant l’image ni liant, et a conclu que ce n’est pas une peinture. La peinture s’infiltrerait entre les fils, ce que l’image ne fait pas. Des particules de nombreuses matières se trouvent sur le linge, venant sans doute d’artistes qui pressaient contre lui des copies de leurs peintures, comme cela s’est fait pendant des siècles.',
          sources: [{ label: 'Schwalbe et Rogers 1982, Analytica Chimica Acta', url: 'https://shroud.com/pdfs/Physics%20Chemistry%20of%20Shroud%20Schwalbe%20Rogers%201981%20OCRsm.pdf' }, { label: 'Résumé final du STURP, 1981', url: 'https://www.shroud.com/78conclu.htm' }] },
        { kind: 'Chaleur', name: 'Une brûlure par une statue chauffée', strength: 'weak',
          text: 'Une statue ou un relief en métal, chauffé puis recouvert du linge, laisserait une brûlure brunâtre, aux valeurs inversées, avec une certaine information de profondeur.',
          problems: 'Les brûlures sont fluorescentes, d’une teinte rougeâtre, sous la lumière ultraviolette. Les vraies brûlures de l’incendie de 1532 le sont, et l’image du corps ne l’est pas. Un objet chaud brûlerait aussi le linge en profondeur et ne pourrait pas colorer les zones qu’il ne touchait pas.',
          sources: [{ label: 'Résumé final du STURP, 1981', url: 'https://www.shroud.com/78conclu.htm' }] },
        { kind: 'Contact', name: 'Poudre ou acide frotté sur un relief', strength: 'disputed',
          text: 'Vers 1980, l’enquêteur Joe Nickell a obtenu une image de visage en tamponnant de la poudre sur un lin mouillé, moulé sur un bas-relief. En 2009, le chimiste Luigi Garlaschelli a réalisé une image grandeur nature en frottant un pigment acide sur un lin posé sur un volontaire et sur un bas-relief, puis en cuisant et en lavant le linge. Les résultats sont des négatifs et portent une certaine information 3D. En 2025, Cicero Moraes a soutenu, à partir d’une simulation 3D, que l’image correspond mieux à un bas-relief qu’à un corps entier.',
          problems: 'Les défenseurs répondent que ces copies sont visibles à l’œil nu d’une façon dont le Saint-Suaire ne l’est pas, que leur couleur pénètre les fibres au lieu de rester dans les 0,2 µm externes, qu’elles laissent de la matière derrière elles, et qu’elles n’expliquent pas pourquoi le sang est venu en premier. Les partisans de l’idée du frottis répliquent que le vieillissement et les lavages au fil des siècles pourraient combler une partie de cet écart.',
          sources: [{ label: 'Garlaschelli 2010, Journal of Imaging Science and Technology', url: 'https://doi.org/10.2352/J.ImagingSci.Technol.2010.54.4.040301' }, { label: 'Wikipédia : Shroud of Turin, analyse de l’image', url: 'https://en.wikipedia.org/wiki/Shroud_of_Turin' }] },
        { kind: 'Optique', name: 'Une protophotographie médiévale', strength: 'weak',
          text: 'Dans les années 1990, l’historien de l’art Nicholas Allen a proposé qu’un atelier médiéval ait utilisé une chambre noire avec une lentille de quartz et un lin traité aux sels d’argent pour « photographier » un cadavre ou une statue.',
          problems: 'Il n’existe aucune trace historique d’une telle technique avant 450 ans de plus, personne n’a signalé d’argent dans l’image, et une photographie n’encoderait pas la distance entre le linge et le corps comme le fait le Saint-Suaire.',
          sources: [{ label: 'Wikipédia : Shroud of Turin', url: 'https://en.wikipedia.org/wiki/Shroud_of_Turin' }] },
        { kind: 'Chimie', name: 'Une réaction naturelle avec les gaz d’un corps', strength: 'disputed',
          text: 'Le chimiste Raymond Rogers, membre du STURP, a proposé une réaction de Maillard : les gaz dégagés par un corps mort réagissent avec une fine couche de résidus d’amidon et de sucres laissés sur le lin par les méthodes de tissage antiques, ce qui produit une légère couleur jaune, uniquement en surface.',
          problems: 'Cela expliquerait le caractère superficiel et l’absence de peinture. L’hypothèse peine à expliquer la netteté et le codage précis de la distance, puisque les gaz se diffusent dans toutes les directions, et elle exige que le corps quitte le linge avant l’apparition de taches de décomposition. Personne n’a produit une image complète de cette façon.',
          sources: [{ label: 'Rogers et Arnoldi 2003, Melanoidins', url: 'https://shroud.com/pdfs/rogers7.pdf' }] },
        { kind: 'Physique', name: 'Une brève émission de rayonnement', strength: 'disputed',
          text: 'Plusieurs physiciens suggèrent que l’image a été causée par une brève et intense émission d’énergie venue du corps. Des scientifiques de l’ENEA ont coloré du lin avec des impulsions laser ultraviolettes d’une façon proche du Saint-Suaire. Giulio Fanti a proposé une décharge corona. John Jackson a proposé que le linge se soit effondré à travers le corps devenu mécaniquement « transparent », en enregistrant l’image pendant sa chute.',
          problems: 'On ne connaît aucune source naturelle d’un tel rayonnement venant d’un corps humain. Les estimations d’énergie sont énormes. Les expériences laser n’ont coloré que de petits échantillons, pas une image. Les sceptiques font remarquer qu’une hypothèse qui exige un miracle ne peut pas être testée comme une hypothèse naturelle. Ses partisans répondent que c’est justement pour cela qu’elle reste sur la table.',
          sources: [{ label: 'Di Lazzaro et autres 2012, Applied Optics', url: 'https://doi.org/10.1364/AO.51.008567' }, { label: 'Di Lazzaro et autres 2010, atelier de l’ENEA', url: 'https://www.sindone.info/DILAZZA1.PDF' }, { label: 'Jackson 1990, Shroud Spectrum International', url: 'https://shroud.com/pdfs/ssi34part3.pdf' }] }
      ],
      emText: `<p>L’animation ci-dessus montre l’hypothèse que beaucoup trouvent la plus convaincante : un éclair de lumière venu du corps, allant tout droit vers le haut et vers le bas, ne colorant que la surface des fibres, suivi de la chute du linge à travers le corps. Nous l’avons réalisée pour vous aider à vous représenter l’idée. C’est l’image d’une hypothèse, ni la reconstitution d’un événement ni une preuve en sa faveur.</p>
<p>Un bon test pour toute explication, naturelle ou surnaturelle, est de voir si elle rend compte en même temps des huit propriétés présentées en haut de cette page. Jusqu’ici, aucune n’a démontré en laboratoire qu’elle y parvient.</p>`,
      enea: `<h3>Les expériences laser de l’ENEA</h3>
<p>De 2005 à 2010, une équipe dirigée par Paolo Di Lazzaro à l’ENEA de Frascati a envoyé sur du lin des impulsions ultracourtes de lumière ultraviolette. Dans une plage de réglages étroite, le lin a pris une couleur jaune paille proche de celle du Saint-Suaire. Des impulsions plus longues ou plus fortes brûlaient le lin, et des impulsions plus faibles ne laissaient aucune couleur visible tant que le linge n’avait pas été vieilli. La couleur pénétrait en général sur plusieurs micromètres. Dans au moins une fibre, elle restait dans la paroi externe de 0,2 µm, comme sur le Saint-Suaire.</p>
<p>Pour un calcul approximatif, ils ont multiplié l’intensité laser efficace par la surface d’un corps humain. Le résultat, environ 34 000 milliards de watts, dépasse de loin toute source ultraviolette construite à ce jour. C’est un ordre de grandeur pour le faire en une seule impulsion, pas une mesure de la façon dont l’image a été produite. Les auteurs ont écrit que « personne ne peut affirmer » que l’image du corps a été produite par une série d’éclairs ultraviolets, et que la façon dont elle s’est formée reste inconnue. Ce qu’ils ont montré, c’est qu’une coloration aussi fine est difficile à obtenir, quelle que soit la méthode.</p>`,
      emH: 'L’hypothèse de la lumière, mise en images',
      zoomH: 'Quelle est la finesse de l’image ?',
      zoomLede: 'Utilisez le curseur pour zoomer du linge entier jusqu’à une seule fibre. C’est la propriété qui met en échec la plupart des explications.',
      gridH: 'Mettre chaque explication à l’épreuve',
      gridLede: 'Voici les six idées principales confrontées aux propriétés ci-dessus, plus une question : quelqu’un a-t-il obtenu une image complète de cette façon ?'
    },

    timeline: {
      title: 'Chronologie du Saint-Suaire de Turin : de Lirey à nos jours | See The Shroud',
      description: 'Chronologie interactive du Saint-Suaire de Turin : l’histoire ancienne supposée, les faits attestés depuis 1354 environ, les incendies, photos et analyses.',
      h1: 'Chronologie',
      lede: 'L’histoire documentée du Saint-Suaire commence en France vers 1354. Avant cela, son histoire est une hypothèse, construite à partir d’images et de textes qui décrivent peut-être ce linge, ou peut-être pas. La chronologie sépare les deux.',
      tracks: { cloth: 'Le linge', science: 'La science', church: 'L’Église', world: 'Le monde' },
      legend: { cloth: 'Fait documenté', science: 'Étude scientifique', hyp: 'Hypothèse ou légende' },
      cert: { documented: 'Documenté', probable: 'Probable', hypothesized: 'Hypothèse', legendary: 'Légende' },
      listH: 'Tous les événements',
      icon: { h: 'Le visage et une icône du VIe siècle',
        altShroud: 'Le visage du Saint-Suaire, vue en négatif', altIcon: 'Icône du Christ Pantocrator, monastère Sainte-Catherine du Sinaï, VIe siècle',
        shroud: 'Saint-Suaire', iconLabel: 'Icône du Sinaï',
        text: `<p>Voici la plus ancienne icône conservée du Christ Pantocrator, peinte au VIe siècle et gardée au monastère Sainte-Catherine du Sinaï. Faites glisser entre elle et le visage du Saint-Suaire. Les deux sont mis à l’échelle pour que les yeux soient alignés.</p>
<p>Les partisans d’une histoire ancienne soulignent des traits communs : le nez long, la barbe fourchue, les paupières lourdes et les joues inégales. Dans les années 1930, Paul Vignon a dressé la liste de petites singularités qu’il pensait copiées du linge par les artistes byzantins, comme une forme carrée entre les sourcils.</p>`,
        skeptic: 'La réponse sceptique : une ressemblance ne dit pas lequel est venu en premier. Un artiste du XIVe siècle fabriquant un linceul de Jésus aurait copié le visage que les icônes avaient rendu habituel. La ressemblance est compatible avec un Saint-Suaire ancien, et tout autant avec un Saint-Suaire fait pour ressembler aux icônes.' },
      map: { h: 'Les lieux où le linge a séjourné', alt: 'Carte des itinéraires documentés et supposés du Saint-Suaire, de Jérusalem à Turin',
        keyDoc: 'Documenté', keyHyp: 'Hypothèse',
        jerusalem: 'Jérusalem, 30 apr. J.-C. ?', edessa: 'Édesse (Urfa), VIe au Xe siècle ?', constantinople: 'Constantinople, 944 à 1204 ?', athens: 'Athènes, après 1204 ?',
        lirey: 'Lirey, vers 1354', chambery: 'Chambéry, 1502 à 1578', turin: 'Turin, depuis 1578',
        caption: 'Les traits pleins sont documentés. L’itinéraire en pointillés est une hypothèse, surtout due à l’historien Ian Wilson, qui identifie le Saint-Suaire à l’Image d’Édesse (le Mandylion). La plupart des historiens n’acceptent pas cette identification. Entre 1453 et 1578, le linge a aussi voyagé avec la maison de Savoie, si bien que le vrai parcours documenté compte plus d’étapes que celles indiquées.' }
    },

    videos: {
      title: 'Vidéos sur le Saint-Suaire de Turin : affirmations vérifiées | See The Shroud',
      description: 'Trois vidéos populaires sur le Saint-Suaire de Turin, vérifiées affirmation par affirmation : ce qui tient, ce qui est contesté et ce qui est faux.',
      h1: 'Des vidéos populaires, vérifiées',
      lede: 'La plupart des gens découvrent le Saint-Suaire par des vidéos. Nous en avons regardé trois, parmi les plus populaires, du début à la fin, transcriptions comprises, et nous avons vérifié leurs principales affirmations. Plusieurs sont excellentes. Certaines sont fausses. Cliquez sur un minutage pour aller à ce moment.',
      play: 'Lire la vidéo (charge YouTube)', watch: 'Regarder sur YouTube',
      rate: { strong: 'Tient la route', disputed: 'Contesté', weak: 'Faux ou exagéré' },
      missingH: 'Ce qu’aucune des trois ne mentionne',
      missingAfter: 'Une présentation honnête doit aussi traiter ces points. Vous trouverez chacun d’eux dans le <a href="evidence.html">dossier</a>.'
    },
    library: {
      title: 'Bibliothèque de recherche sur le Saint-Suaire de Turin | See The Shroud',
      description: 'Bibliothèque consultable d’études sur le Saint-Suaire de Turin, pour et contre, avec des liens directs vers les originaux sur shroud.com et dans les revues.',
      h1: 'Bibliothèque',
      lede: 'Plus de 2 400 articles, études, textes et bulletins, presque tous issus des archives de shroud.com, que Barrie Schwortz a créées et entretenues depuis les années 1990 jusqu’à sa mort en 2024. Commencez par les 25 lectures essentielles, puis cherchez par mot, filtrez par thème et allez directement à l’original.',
      keyH: 'Pour commencer : 25 lectures essentielles, des deux camps', keyLede: 'Choisies pour qu’un lecteur sceptique rencontre les travaux les plus solides de chaque camp, à peu près dans l’ordre où le débat s’est déroulé.', allH: 'Toute la bibliothèque',
      search: 'Chercher dans les titres, les auteurs et les revues',
      count: 'articles affichés',
      peer: 'Évalué par des pairs',
      topics: { radiocarbon: 'Datation au carbone 14', blood: 'Le sang', 'image-formation': 'Formation de l’image', history: 'L’histoire', textile: 'Le lin', 'anatomy-medical': 'Médecine', 'pollen-botany': 'Pollen et plantes', 'photography-imaging': 'Photographie', '3d-vp8': '3D', coins: 'Pièces de monnaie', sudarium: 'Soudarion', 'art-history': 'Histoire de l’art', critique: 'Critiques', overview: 'Vues d’ensemble', conference: 'Colloques' },
      stances: { 'pro-authenticity': 'Favorable à l’authenticité', skeptical: 'Sceptique', neutral: 'Neutre' },
      more: `<h2>À la mémoire de Barrie M. Schwortz (1946 à 2024)</h2>
<p>Barrie Schwortz était le photographe officiel chargé de la documentation du Shroud of Turin Research Project de 1978. Il était juif, il a commencé en sceptique, et il a passé le reste de sa vie à rendre la recherche accessible à tous, gratuitement, sur shroud.com. La plus grande partie de cette bibliothèque existe parce qu’il l’a conservée. Nous lui dédions cette page.</p>
<p>Vous voulez aller plus loin ? Les <a href="https://www.shroud.com/" target="_blank" rel="noopener">archives de shroud.com</a>, le site officiel de l’<a href="https://www.sindone.org/" target="_blank" rel="noopener">archidiocèse de Turin</a>, et l’article de Wikipédia en anglais sur le <a href="https://en.wikipedia.org/wiki/Shroud_of_Turin" target="_blank" rel="noopener">Saint-Suaire de Turin</a>, qui penche vers le scepticisme et constitue un bon test pour vos conclusions.</p>`
    },

    next: {
      title: 'Et maintenant ? Après le Saint-Suaire de Turin | See The Shroud',
      description: 'Vous avez vu les éléments sur le Saint-Suaire de Turin. Que vous doutiez, que vous vous interrogiez ou que vous croyiez, voici des prochaines étapes honnêtes.',
      h1: 'Et maintenant ?',
      lede: 'Où que vous en soyez après avoir examiné les éléments, il existe une prochaine étape raisonnable. Aucune ne vous demande de faire semblant d’être plus sûr que vous ne l’êtes.',
      paths: [
        { id: 'doubt', h: 'Si vous doutez encore', body: `<p>Très bien. Un doute qui continue de chercher est honnête. Thomas a douté, et il n’a pas été repoussé.</p><ul><li>Lisez les arguments contre les plus solides dans le <a href="evidence.html">dossier</a>, ainsi que les sources sur lesquelles ils reposent.</li><li>Essayez le calculateur avec vos propres chiffres, et remarquez quelle hypothèse décide de votre réponse.</li><li>Demandez-vous quelle preuve vous ferait changer d’avis, et si elle pourrait exister.</li></ul>` },
        { id: 'wonder', h: 'Si vous vous interrogez', body: `<p>Le Saint-Suaire pose une question sur un homme. La meilleure prochaine étape est d’aller à sa rencontre là où il est décrit le plus complètement.</p><ul><li>Lisez l’Évangile de Jean. Cela prend environ deux heures, et il se termine avec Thomas.</li><li>Parlez avec une personne croyante en qui vous avez confiance, et posez-lui votre question la plus difficile.</li><li>Si vous n’avez jamais prié, essayez une prière simple et honnête : si tu es là, montre-le-moi.</li></ul>` },
        { id: 'believe', h: 'Si vous croyez', body: `<p>Alors la question n’est plus de savoir ce que le linge prouve, mais comment vous vivez.</p><ul><li>Soyez quelqu’un en qui un sceptique peut avoir confiance : juste, curieux et bienveillant, surtout avec ceux qui ne sont pas d’accord.</li><li>Partagez ce site avec le sceptique le plus réfléchi que vous connaissez, et écoutez ce qu’il en dit.</li><li>Rendez service à quelqu’un dans le besoin cette semaine. Une foi qui agit est la meilleure preuve que la plupart des gens verront jamais.</li></ul>` }
      ],
      story: `<h2>Bientôt : le récit d’une personne</h2><p>Nelson Inno, qui a créé ce site, partagera son propre récit, ainsi qu’une réflexion sur ce qu’il appelle le motif qui mène à Dieu, sur un site web distinct. Les garder à part des éléments de preuve vous permet de juger chacun selon ses propres termes.</p>`,
      quote: 'Ces choses ont été écrites afin que vous croyiez que Jésus est le Christ, le Fils de Dieu.',
      quoteCite: 'Jean 20:31'
    },
    about: {
      title: 'À propos de See The Shroud : pourquoi ce site existe | See The Shroud',
      description: 'See The Shroud est un site gratuit et non commercial sur le Saint-Suaire de Turin. Comment nous évaluons les éléments, l’origine des images et qui l’a conçu.',
      h1: 'À propos de ce site',
      lede: 'Pourquoi il existe, comment nous travaillons, et d’où vient chaque chose.',
      body: `<h2>Pourquoi ce site existe</h2>
<p>Le Saint-Suaire de Turin est peut-être une œuvre d’art médiévale, un faux délibéré, ou le linceul de Jésus de Nazareth. Quoi qu’il en soit, il mérite mieux qu’un titre de dix secondes. La plupart de ce que l’on trouve en ligne est écrit pour gagner : un camp crie « preuve », l’autre crie « faux ». Ce site est écrit pour informer.</p>
<p>Son nom, See The Shroud, veut dire « voir le Suaire », et c’est une invitation : voyez le Saint-Suaire par vous-même, de près, et jugez les éléments de preuve. L’esprit vient de Thomas, qui refusait de croire tant qu’il n’aurait pas vu la marque des clous. Nous pensons qu’un doute comme le sien est honnête, et qu’il mérite des preuves, pas des pressions.</p>
<h2>Qui l’a conçu</h2>
<p>See The Shroud a été créé par Nelson Inno, un fondateur salvadorien, comme projet gratuit et bénévole. En toute transparence : Nelson croit que le Saint-Suaire est authentique. C’est justement pour cela que le site s’impose une règle : les arguments les plus solides contre l’authenticité sont présentés dans toute leur force, juste à côté des arguments en sa faveur. Si nous ne sommes pas à la hauteur de cette règle, nous voulons le savoir.</p>
<h2>Comment nous travaillons</h2>
<ul>
<li>Chaque affirmation factuelle renvoie à une source. Quand c’est possible, la source est un article évalué par des pairs ou un document de première main.</li>
<li>Les arguments des deux camps sont notés selon la même échelle : solide, modéré, faible, contesté ou réfuté.</li>
<li>Les affirmations populaires qui ne tiennent pas sont signalées comme telles, même quand elles serviraient la thèse de l’authenticité.</li>
<li>Les visualisations artistiques, comme l’animation de la lumière, sont toujours présentées comme des visualisations d’une hypothèse.</li>
<li>Pas de publicité, pas de pistage, rien à vendre.</li>
</ul>
<h2>Vous avez trouvé une erreur ?</h2>
<p>Écrivez à <a href="mailto:hey@everybodyknowsyou.com">hey@everybodyknowsyou.com</a> en indiquant la page, l’affirmation et votre source. Les corrections venant de sceptiques sont particulièrement bienvenues.</p>
<h2>Bientôt</h2>
<p>Le récit de Nelson, et une réflexion sur ce qu’il appelle le motif qui mène à Dieu, seront publiés sur un site web distinct appelé « Unless I See » (Si je ne vois), d’après les paroles de Thomas dans Jean 20:25. Les éléments de preuve restent ici, pour que vous puissiez les juger selon leurs propres termes.</p>`,
      creditsH: 'Crédits des images', sourceLink: 'source'
    }
  }
};
