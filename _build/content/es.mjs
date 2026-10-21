// Spanish copy (Latin American, El Salvador). Plain language, no em dashes. HTML allowed in long fields.
export default {
  brand: 'Si no veo',
  locale: 'es_SV',
  shareImage: 'social-share-si-no-veo-unlessisee.org.jpg',
  keywords: 'Sábana Santa de Turín, Síndone de Turín, evidencia de la Sábana Santa, datación de la Sábana Santa, carbono 14 Sábana Santa, negativo de la Sábana Santa, Sábana Santa en 3D, es real la Sábana Santa, sudario de Jesús, sindonología, Shroud of Turin, STURP, Secondo Pia',
  shareAlt: 'El rostro de la Sábana Santa de Turín como negativo fotográfico',
  orgDescription: 'Si no veo es un proyecto educativo gratuito y sin fines de lucro que presenta la evidencia a favor y en contra de la autenticidad de la Sábana Santa de Turín, con sus fuentes, en varios idiomas.',
  ui: {
    skip: 'Ir al contenido', menu: 'Menú', mainNav: 'Principal', language: 'Idioma',
    exhibit: 'Prueba', detail: 'Los detalles', skeptic: 'La mejor respuesta escéptica', reply: 'La réplica',
    theCase: 'El argumento completo', replyAgainst: 'Cómo responden los defensores', whyRating: 'Por qué esta calificación:',
    all: 'Todo', allTopics: 'Todos los temas', shown: 'mostradas', openAll: 'Abrir o cerrar todo',
    prev: 'Anterior', next: 'Siguiente', problems: 'Problemas de esta idea'
  },
  nav: [
    { slug: 'explore', label: 'Explora' },
    { slug: 'evidence', label: 'Expediente' },
    { slug: 'wounds', label: 'Heridas' },
    { slug: 'dating', label: 'Datación' },
    { slug: 'image', label: 'Cómo se formó' },
    { slug: 'timeline', label: 'Cronología' },
    { slug: 'videos', label: 'Videos' },
    { slug: 'library', label: 'Biblioteca' },
    { slug: 'about', label: 'Acerca de' }
  ],
  footer: {
    about: 'Un proyecto gratuito y sin fines de lucro. Cada afirmación de este sitio enlaza a su fuente, incluidas las fuentes que no están de acuerdo con nosotros.',
    explore: 'Explora', more: 'Profundiza', extra: [],
    rights: 'Texto {year} Si no veo. Puedes compartirlo libremente con un enlace a este sitio. Créditos de las imágenes en la página Acerca de.',
    eky: 'Sitio web hecho con amor, por', ekyAria: 'Sitio web hecho con amor por everybodyknowsyou.com'
  },
  strength: { strong: 'Sólida', moderate: 'Moderada', weak: 'Débil', disputed: 'Disputada', debunked: 'Descartada' },
  lean: { for: 'Apunta a la autenticidad', against: 'Apunta a un origen medieval', neutral: 'Contexto' },
  categories: { image: 'La imagen', blood: 'La sangre', anatomy: 'Anatomía y heridas', textile: 'El lino', dating: 'Datación', history: 'Historia', botany: 'Polen y plantas', 'imaging-3d': 'Información 3D', 'image-formation': 'Cómo se formó la imagen', other: 'Otros' },
  fig: {
    scaleAlt: 'Diagrama de la tela de 4,4 metros con las imágenes frontal y dorsal de un hombre, cabeza con cabeza',
    scaleFront: 'Imagen frontal', scaleBack: 'Imagen dorsal', scaleLen: 'unos 4,4 metros', scaleWid: 'unos 1,1 m',
    scaleCaption: 'La tela completa, fotografiada por Giuseppe Enrie en 1931. El cuerpo descansaba sobre una mitad. La otra mitad se dobló sobre la cabeza y bajó por el frente hasta los pies. Por eso las imágenes frontal y dorsal se encuentran en las cabezas.',
    foldFrontAlt: 'Mitad frontal de la Sábana Santa, con la imagen frontal del hombre', foldBackAlt: 'Mitad dorsal de la Sábana Santa, con la imagen dorsal del hombre',
    foldBtn: 'Dóblala como envolvía el cuerpo', unfoldBtn: 'Desdóblala otra vez'
  },
  ui3d: { depth: 'Profundidad', light: 'Luz', clay: 'Arcilla', negative: 'Negativo', fallback: 'Esta vista en 3D necesita WebGL, y tu navegador lo tiene desactivado.' },
  emanation: {
    label: 'Una hipótesis, visualizada. No es evidencia.',
    alt: 'Animación: una luz sube desde un cuerpo bajo una tela de lino, la imagen se forma en la tela y la tela cae plana',
    captions: [
      'Un cuerpo yace bajo una tela de lino, en la oscuridad.',
      'Hipótesis: una liberación de energía breve e intensa, desde el propio cuerpo.',
      'La luz viaja en línea recta hacia arriba y hacia abajo, no en todas las direcciones.',
      'Solo se oscurece la superficie más externa de las fibras. Sin pintura, sin quemadura.',
      'El físico John Jackson propuso que la tela cayó luego a través de un cuerpo que ya no estaba.',
      'Lo que queda es una imagen tenue que ningún experimento ha igualado todavía en todos sus detalles.'
    ],
    ui: { play: 'Reproducir', pause: 'Pausa', replay: 'Repetir', time: 'Tiempo' }
  },
  powers: {
    label: 'Nivel de acercamiento', prev: 'Alejar', next: 'Acercar',
    fiberNote: 'Un hilo es un haz de fibras. Solo las fibras de arriba tienen color.',
    layerLabel: 'capa coloreada, unos 0,2 µm', lumen: 'interior de la fibra',
    steps: [
      { size: '4,4 m', title: 'La tela completa', text: 'Imágenes frontal y dorsal, cabeza con cabeza. A unos pasos de distancia, el hombre apenas se distingue. Así de tenue es la imagen.' },
      { size: '25 cm', title: 'El rostro', text: 'De cerca, el rostro no tiene contornos, ni pinceladas, ni una dirección de luz. La luz y la sombra están invertidas, como en un negativo fotográfico.' },
      { size: '0,25 mm', title: 'Un solo hilo', text: 'Cada hilo mide cerca de un cuarto de milímetro de grosor, tejido tres sobre uno. Donde está la imagen, solo tienen color las partes altas de los hilos que miraban al cuerpo. Los hilos de abajo siguen blancos.' },
      { size: '15 µm', title: 'Las fibras de un hilo', text: 'Un hilo está hecho de unas 100 a 200 fibras de lino. En las zonas de la imagen, solo tienen color las dos o tres fibras de más arriba. Las zonas más oscuras de la imagen no tienen fibras más oscuras: tienen más fibras coloreadas.' },
      { size: '0,2 µm', title: 'La capa coloreada', text: 'Dentro de una fibra, el color se limita a la capa más externa, de unas 200 milmillonésimas de metro de grosor, el grosor de la pared celular primaria de la fibra. El interior de la fibra está intacto. Esta es la propiedad que hace tan difícil reproducir la imagen.' }
    ]
  },
  grid: {
    caption: 'Qué propiedades de la imagen puede explicar cada hipótesis',
    corner: 'Hipótesis',
    cols: ['Solo 0,2 µm', 'Sin pintura', 'Negativo', '3D', 'Primero la sangre', 'Sin brillo UV', 'No solo contacto', 'Semitono', 'Imagen completa hecha en laboratorio'],
    legend: { y: 'Lo explica', p: 'En parte, o en disputa', n: 'No lo explica', u: 'Sin probar' },
    rows: [
      { name: 'Una pintura', v: 'nnpnpyyny' },
      { name: 'Quemadura con una estatua caliente', v: 'pyypnnnpy' },
      { name: 'Frotado sobre un relieve', v: 'ppypppppy' },
      { name: 'Fotografía primitiva', v: 'pnynuyynp' },
      { name: 'Reacción con gases del cuerpo', v: 'yyypyyppn' },
      { name: 'Un estallido de radiación', v: 'yyyuyuyun' }
    ],
    note: 'Este es nuestro resumen de lo que reportan quienes defienden y quienes critican cada idea. Personas razonables califican algunas casillas de otra manera. Fíjate en la última columna: las hipótesis que explican más propiedades son también las que nunca han producido una imagen completa en un laboratorio.'
  },
  dating: {
    bc: 'a. C.', crucifixion: 'Crucifixión, hacia el 30 a 33 d. C.', documented: 'Documentada, desde hacia 1354',
    chartAlt: 'Gráfico que compara el rango de la datación por radiocarbono de 1988 con otros métodos de datación en un eje de años',
    labsAlt: 'Gráfico de las doce mediciones de radiocarbono publicadas por Arizona, Oxford y Zúrich, con sus barras de error',
    bpAxis: 'Edad por radiocarbono, años antes de 1950 (AP). Menos significa más reciente.', bpShort: 'años de radiocarbono AP', labMean: 'Media del laboratorio', combined: 'Combinada'
  },
  notFound: { title: 'Página no encontrada | Si no veo', h1: 'Esta página no está aquí', text: 'Puede que el enlace sea antiguo o que la dirección tenga un error. Todo el sitio parte de la página de inicio.', cta: 'Ir a la página de inicio' },

  pages: {
    index: {
      title: 'Sábana Santa de Turín: la evidencia a favor y en contra | Si no veo',
      description: '¿Es real la Sábana Santa de Turín? Explora la tela en alta resolución, mira el negativo y la imagen en 3D, y pesa la evidencia de ambos lados, con todas las fuentes.',
      h1: 'Examina tú mismo la Sábana Santa de Turín',
      lede: 'Una tela de lino de 4,4 metros de largo lleva la imagen tenue de un hombre que fue flagelado y crucificado. Algunos la llaman una falsificación medieval. Otros, la mortaja de Jesús. Aquí está la evidencia de ambos lados, con todas las fuentes, para que la juzgues tú mismo.',
      cta1: 'Explora la tela', cta2: 'Lee el expediente',
      faceAlt: 'El rostro de la Sábana Santa de Turín. Pasa el cursor sobre él para verlo como negativo fotográfico.',
      hint: 'Mira cómo se revela la placa',
      hint2: 'Pasa el cursor sobre el rostro para verlo como lo ve el ojo',
      faceCaption: 'El rostro de la Sábana Santa. Fotografía de Giuseppe Enrie, 1931.',
      thomasText: `<h2>Tomás pidió ver las marcas</h2>
<p>Este sitio lleva el nombre del escéptico más honesto de los Evangelios. Tomás no creyó lo que le contaron sus amigos. Quería evidencia que pudiera ver y tocar: las marcas de los clavos, la herida del costado.</p>
<p>La Sábana Santa de Turín muestra a un hombre con exactamente esas marcas. Si es lo que muchos creen que es, esa pregunta este sitio te la deja a ti. Te mostraremos las marcas, las pruebas, las dudas y las respuestas, y te indicaremos cada fuente.</p>`,
      thomasCta: 'Mira las marcas',
      objH: 'Qué es',
      objLede: 'Una sola pieza de lino con una imagen frontal y otra dorsal de un hombre desnudo, cabeza con cabeza, además de manchas de sangre, marcas de quemaduras y manchas de agua de su larga historia. Se guarda en Turín, Italia, desde 1578.',
      facts: [
        { n: '4,4 m', t: 'de largo, y cerca de 1,1 m de ancho' },
        { n: '3 : 1', t: 'tejido de sarga en espiga, un patrón costoso' },
        { n: '0,2 µm', t: 'profundidad aproximada del color en las fibras de la imagen. Un cabello mide unos 70 µm.' },
        { n: '1354', t: 'hacia este año aparece por primera vez en los registros históricos, en Lirey, Francia' },
        { n: '1260 a 1390', t: 'el rango de fechas de la prueba del carbono 14 de 1988' }
      ],
      cmpPos: 'Como la ve el ojo', cmpNeg: 'Como la mostró el negativo de 1898',
      cmpPosAlt: 'El rostro de la Sábana Santa tal como se ve a simple vista', cmpNegAlt: 'El rostro de la Sábana Santa como negativo fotográfico',
      cmpLabel: 'Desliza para comparar el positivo y el negativo',
      cmpCaption: 'Arrastra la línea. A la izquierda: el negativo fotográfico. A la derecha: lo que ves en la tela.',
      negYear: 'Turín, 28 de mayo de 1898',
      negH: 'La noche en que una fotografía cambió la pregunta',
      negText: `<p>A Secondo Pia, abogado y fotógrafo aficionado, le permitieron tomar las primeras fotografías de la tela. Al revelar su placa de vidrio, esperaba ver una imagen invertida y fantasmal. En cambio, el negativo mostró un retrato claro y natural de un hombre.</p>
<p>La imagen de la tela se comporta como un negativo fotográfico: la luz y la sombra están invertidas. Nadie lo había notado antes, porque la fotografía no existía. Por esto comenzó el estudio moderno de la Sábana Santa.</p>`,
      invertBtn: 'Invierte esta página, como la placa de vidrio de Pia', invertBack: 'Volver a lo normal',
      negSkeptic: 'La respuesta escéptica: una imagen hecha presionando una tela sobre un relieve, o frotando polvo sobre ella, también sale con los tonos invertidos. Así que una imagen en negativo no exige, por sí sola, una fotografía ni un milagro. La verdadera pregunta es si esos métodos coinciden con todo lo demás de la imagen.',
      reliefAlt: 'El rostro de la Sábana Santa convertido en un relieve 3D a partir del brillo de la imagen',
      d3H: 'Contiene información en 3D',
      d3Text: `<p>En 1976, los físicos John Jackson y Eric Jumper pasaron una fotografía de la Sábana Santa por un VP-8 Image Analyzer, un aparato hecho para convertir el brillo en altura. Las fotografías comunes salen deformadas. La Sábana Santa salió como un cuerpo coherente en relieve.</p>
<p>La razón: lo oscura que es la imagen en cada punto parece corresponder a la distancia entre la tela y el cuerpo en ese punto. La medición original era modesta en términos estadísticos, basada en 13 puntos, pero el efecto se ve con facilidad. Esta vista en 3D se construye de la misma manera, en vivo en tu navegador, directamente a partir de la imagen. Arrástrala para girarla.</p>`,
      d3Skeptic: 'La respuesta escéptica: las imágenes hechas a partir de un relieve poco profundo, como un frotado sobre un bajorrelieve, también contienen algo de información de profundidad. En 2025, un diseñador 3D, Cicero Moraes, argumentó con simulaciones por computadora que la imagen encaja mejor con un relieve bajo que con un cuerpo completo. El debate es qué tan bien coincide cada método con la tela real.',
      d3Cta: 'Compárala con una pintura en 3D',
      marksH: 'Las marcas de una crucifixión',
      marksText: `<p>Los patólogos forenses que estudiaron la imagen describen más de cien pequeñas heridas de un flagelo romano, heridas punzantes alrededor de la cabeza, un rostro hinchado, raspones en los hombros, una herida de clavo en la muñeca y no en la palma, y una herida en el costado, entre las costillas, que sangró después de la muerte.</p>
<p>Cada una coincide con lo que los Evangelios dicen que le pasó a Jesús. Varias de ellas, como el clavo en la muñeca, van en contra de cómo los artistas medievales pintaban la crucifixión.</p>`,
      marksAlt: 'Detalle de las manos cruzadas en la Sábana Santa, con la herida de la muñeca', marksCaption: 'Las manos cruzadas. La sangre sale de la muñeca, no de la palma. Vista en negativo.',
      marksCta: 'Mira cada herida, junto al texto del Evangelio',
      dateH: 'La prueba que dijo medieval',
      dateText: `<p>En 1988, tres laboratorios en Arizona, Oxford y Zúrich dataron con carbono 14 pequeñas muestras de una esquina de la tela. Su resultado combinado, publicado en la revista Nature en 1989, fue de 1260 a 1390 d. C., con un 95% de confianza. Es el argumento individual más fuerte contra la autenticidad, y por eso lo ponemos primero.</p>
<p>Desde entonces, varios investigadores han cuestionado de dónde se tomó la muestra, si las muestras eran coherentes entre sí y si los datos originales justificaban la precisión publicada. Otros métodos de datación han dado fechas más antiguas, aunque ninguno está tan establecido como la datación por radiocarbono.</p>`,
      dateCta: 'Lee toda la historia de la datación',
      howH: '¿Cómo llegó ahí la imagen?',
      howLede: 'Después de más de un siglo de estudio, nadie tiene una respuesta completa. No es un eslogan: así está la ciencia hoy. Aquí tienes una de las hipótesis más audaces, en forma de animación.',
      howText: `<p>La imagen es de un color amarillo pajizo y está en las fibras más superficiales del lino. No hay pintura, ni pinceladas, ni señales de que la imagen haya penetrado en los hilos. No es una quemadura: las quemaduras reales de un incendio de 1532 brillan bajo la luz ultravioleta, y la imagen del cuerpo no.</p>
<p>Los investigadores han propuesto pintura, una estatua caliente, polvo frotado sobre un relieve, una forma primitiva de fotografía, una reacción química con gases de un cuerpo y un estallido de radiación. Cada idea explica algunos rasgos y tiene problemas con otros.</p>`,
      howEnea: `<h3>Los 34 billones de vatios</h3>
<p>Entre 2005 y 2010, científicos de ENEA, la agencia nacional italiana de nuevas tecnologías, dispararon pulsos muy breves de láser ultravioleta sobre lino. Lograron colorear el lino de una forma muy parecida a la Sábana Santa: solo la capa más externa de las fibras, sin quemarlas.</p>
<p>Calcularon que colorear de una sola vez una imagen del tamaño de un cuerpo entero requeriría luz ultravioleta con una potencia de unos 34 billones de vatios, muy por encima de cualquier láser que exista. El equipo fue prudente: no reprodujo la imagen en sí, solo pequeñas muestras coloreadas, y no habló de un milagro. Dijeron que sus resultados muestran lo difícil que es producir la imagen por medios comunes.</p>`,
      howCta: 'Compara todas las hipótesis',
      weighH: 'Pésalo tú mismo',
      weighText: `<p>La mayoría de los debates sobre la Sábana Santa son, en realidad, debates sobre cuánto debe contar cada prueba. Por eso hicimos una pequeña calculadora. Tú decides con cuánta fuerza apunta cada elemento hacia un lado o hacia el otro, y ella te muestra a dónde suman tus propios juicios.</p>
<p>No te dirá la respuesta. Te mostrará de qué supuestos depende tu respuesta.</p>`,
      weighCta: 'Abre la calculadora',
      quote: 'Si no viere en sus manos la señal de los clavos, […] no creeré.',
      quoteCite: 'Tomás, en Juan 20:25',
      freeH: 'Por qué no es una prueba',
      freeText: `<p>Si Dios quisiera obligar a creer, podría hacerlo. Una señal que no dejara lugar a la duda tampoco dejaría lugar para elegir. La Sábana Santa hace algo más discreto: le da a una mente seria lo suficiente para tomarse la pregunta en serio, y te deja a ti el último paso.</p>
<p>El video de Truthly que verificamos termina con esta idea, y creemos que es el lugar correcto para terminar. Tomás pudo ver las marcas. La respuesta que recibió hablaba de todos los que vienen después de él.</p>`,
      freeQuote: 'Bienaventurados los que no vieron y creyeron.',
      freeCite: 'Jesús a Tomás, Juan 20:29',
      faqH: 'Preguntas frecuentes',
      faq: [
        { q: '¿Es real la Sábana Santa de Turín?', a: 'Es una tela de lino real y muy antigua. Si es la mortaja de Jesús está en disputa. La prueba del carbono 14 de 1988 la ubicó entre 1260 y 1390 d. C. Muchos investigadores cuestionan ese resultado, y nadie ha explicado cómo se formó la imagen. Este sitio presenta ambos lados con sus fuentes.' },
        { q: '¿Qué encontró la datación por radiocarbono?', a: 'En 1988, laboratorios de Arizona, Oxford y Zúrich dataron muestras de una esquina y reportaron de 1260 a 1390 d. C., con un 95% de confianza (Damon y otros, Nature, 1989). Los críticos sostienen que esa esquina pudo haber sido reparada, y un nuevo análisis de los datos originales en 2019 encontró que las muestras no eran tan coherentes como se informó.' },
        { q: '¿La imagen está pintada?', a: 'El equipo científico de 1978 (STURP) concluyó que no es una pintura: no encontró pigmento que formara la imagen, ni pinceladas, ni aglutinante. El microscopista Walter McCrone no estuvo de acuerdo y reportó óxido de hierro y otros materiales. La mayoría de los estudios posteriores dieron la razón a STURP sobre la imagen, aunque aceptan que en la tela hay partículas diminutas de muchos materiales.' },
        { q: '¿Por qué la imagen es un negativo?', a: 'En la tela, la luz y la sombra están invertidas respecto a una imagen normal, así que un negativo fotográfico de ella parece un retrato natural. Lo descubrió Secondo Pia en 1898. Los escépticos señalan que las imágenes hechas por contacto con un relieve también salen invertidas.' },
        { q: '¿Qué dice la Iglesia católica?', a: 'La Iglesia nunca ha declarado oficialmente que la Sábana Santa sea auténtica, y no obliga a nadie a creerlo. Los papas recientes la han llamado un ícono del sufrimiento de Cristo y han orado ante ella. La Santa Sede es su dueña desde 1983, y el arzobispo de Turín es su custodio.' },
        { q: '¿Puedo verla en persona?', a: 'Se guarda en la catedral de San Juan Bautista, en Turín, en una urna con clima controlado, y por lo general no está expuesta al público. Se muestra en exposiciones públicas poco frecuentes, como las de 2010 y 2015, y en una transmisión en vivo en 2020.' }
      ],
      pathsH: 'A dónde ir ahora',
      paths: [
        { slug: 'evidence', h: 'Si tienes dudas', t: 'Empieza por el expediente. Cada argumento, a favor y en contra, calificado según su fuerza.' },
        { slug: 'explore', h: 'Si quieres verla', t: 'Acércate a la tela completa, cambia al negativo y encuentra cada marca.' },
        { slug: 'library', h: 'Si quieres profundizar', t: 'Cientos de artículos y estudios, con buscador y enlaces a los originales.' },
        { slug: 'about', h: 'Si te preguntas quién hizo esto', t: 'Por qué existe este sitio, cómo calificamos la evidencia y los créditos de las imágenes.' }
      ]
    },

    explore: {
      title: 'Explora la Sábana Santa de Turín en alta resolución | Si no veo',
      description: 'Acércate a toda la Sábana Santa de Turín, cambia al negativo fotográfico, realza la imagen y encuentra cada herida, quemadura y remiendo, con explicaciones.',
      h1: 'Explora la tela',
      lede: 'Esta es la Sábana Santa completa, imagen frontal y dorsal, cabeza con cabeza. Arrastra para moverte, usa la rueda o pellizca para acercar. Cambia al negativo para ver lo que vio Secondo Pia en 1898. Las marcas numeradas explican lo que estás viendo.',
      imgAlt: 'La Sábana Santa de Turín completa, imagen frontal y dorsal',
      ui: { tools: 'Herramientas de visualización', negative: 'Negativo', enhance: 'Realzar', layerWounds: 'Heridas', layerDamage: 'Fuego y agua', layerLinen: 'El lino', tour: 'Recorrido guiado', fit: 'Tela completa', zoomIn: 'Acercar', zoomOut: 'Alejar', help: 'Arrastra para moverte. Usa la rueda o pellizca para acercar. Presiona N para ver el negativo.', close: 'Cerrar', prev: 'Anterior', next: 'Siguiente', more: 'Leer más', skeptic: 'La respuesta escéptica' },
      reliefH: 'La imagen en 3D',
      reliefText: `<p>Cuando conviertes el brillo de una fotografía normal en altura, obtienes un desorden deformado: la nariz se hunde, las sombras se elevan, el fondo se abomba. Cuando haces lo mismo con la Sábana Santa, obtienes un rostro y un cuerpo coherentes. Compáralos tú mismo. Las dos vistas de abajo usan exactamente el mismo método.</p>`,
      reliefFaceAlt: 'Relieve 3D del rostro de la Sábana Santa', reliefFaceCap: 'El rostro de la Sábana Santa, con el brillo convertido en altura.',
      reliefPaintAlt: 'Relieve 3D de un rostro pintado, con el mismo método', reliefPaintCap: 'Un rostro pintado, con el mismo método. Pintura: Cabeza de Cristo, dominio público.',
      reliefBodyAlt: 'Relieve 3D de la imagen frontal completa de la Sábana Santa', reliefBodyCap: 'La imagen frontal completa en relieve. Gírala para ver la forma del cuerpo.',
      reliefSkeptic: 'Una advertencia justa: nuestras vistas en 3D son una recreación sencilla de la idea del VP-8, suavizada para la web. Muestran el principio. No son una medición científica.',
      photosH: 'Sobre estas fotografías',
      photosText: `<p>Las imágenes de la tela completa que ves aquí son fotografías de dominio público. Las mejores fotografías de la Sábana Santa, tomadas por Barrie Schwortz para el equipo científico de 1978, y los escaneos de altísima resolución de 2002 y 2008, están protegidos por derechos de autor. Puedes ver muchos de ellos en <a href="https://www.shroud.com/" target="_blank" rel="noopener">shroud.com</a> y <a href="https://shroudphotos.com/" target="_blank" rel="noopener">shroudphotos.com</a>. Hemos pedido permiso para mostrarlos aquí.</p>`
    },

    evidence: {
      title: 'Evidencia sobre la Sábana Santa de Turín, a favor y en contra | Si no veo',
      description: 'Cada argumento importante sobre la Sábana Santa de Turín, a favor y en contra de su autenticidad, calificado según su fuerza, con la mejor respuesta escéptica y enlaces a las fuentes.',
      h1: 'El expediente',
      lede: 'Cada argumento importante sobre la Sábana Santa, a favor y en contra. Cada uno está calificado según su fuerza, con la mejor objeción, la mejor réplica y las fuentes. Incluimos los argumentos contra la autenticidad con toda su fuerza, porque debes escucharlos primero de nosotros.',
      counts: '{n} pruebas: {f} apuntan a la autenticidad y {a} apuntan a un origen medieval.',
      method: 'Cómo calificamos: Sólida significa que los hechos están bien documentados y que la conclusión es difícil de evitar. Moderada significa evidencia real con una objeción razonable. Débil significa, como mucho, algo sugerente. Disputada significa que investigadores serios no se ponen de acuerdo sobre los hechos mismos. Descartada significa que no se debe usar. Calificamos las afirmaciones de ambos lados con las mismas reglas.',
      filterLean: 'Filtrar por dirección', filterCat: 'Filtrar por tema',
      weighH: 'Pésalo tú mismo',
      weighText: `<p>Empieza por tu punto de partida: antes de ver cualquier evidencia, ¿qué tan probable es que una tela como esta sea la verdadera mortaja de Jesús? Luego, para cada elemento, decide cuánto más probable sería ver esa evidencia si la tela fuera auténtica que si fuera una obra medieval. Mueve el control hacia la derecha si la evidencia encaja mejor con la autenticidad, y hacia la izquierda si encaja mejor con un origen medieval.</p>
<p>Esta es la regla de Bayes, la forma estándar de combinar evidencia. Prueba los ajustes del escéptico y del creyente para ver qué tan lejos pueden empezar dos personas razonables, y hacia dónde las mueve la evidencia.</p>`,
      wui: {
        neutral: 'Volver a neutral', skeptic: 'Ajustes de un escéptico', believer: 'Ajustes de un creyente',
        prior: 'Tu punto de partida (probabilidad previa)', priorHelp: 'La mayoría de las reliquias medievales no eran lo que decían ser, así que un punto de partida bajo es razonable.',
        result: 'Tu resultado: probabilidad de que la tela sea auténtica', medieval: 'Medieval', authentic: 'Auténtica',
        noEffect: 'Sin efecto',
        favorsA: '{x} veces más probable si es auténtica', favorsM: '{x} veces más probable si es medieval',
        oddsFor: 'Probabilidad: {x} a 1 a favor de la autenticidad', oddsAgainst: 'Probabilidad: 1 entre {x}',
        caveat: 'Esto trata cada elemento como independiente, lo cual es una simplificación. Algunos elementos están relacionados; por ejemplo, varios dependen de las mismas fotografías. La calculadora muestra cómo se combinan tus juicios. No los reemplaza.'
      }
    },

    wounds: {
      title: 'Las heridas de la Sábana Santa de Turín y los Evangelios | Si no veo',
      description: 'Cada herida de la Sábana Santa de Turín, desde las marcas del flagelo hasta el clavo en la muñeca y la herida del costado, mostrada en la tela junto al texto del Evangelio que la describe.',
      h1: 'Las heridas, y lo que dicen los Evangelios',
      lede: 'Haz clic en un número sobre la tela o en una herida de la lista. Cada marca se explica como la describen los patólogos forenses, junto al versículo del Evangelio al que corresponde y, cuando la hay, la nota del escéptico.',
      front: 'Frente', back: 'Espalda', alt_front: 'Imagen frontal del hombre de la Sábana Santa, vista en negativo', alt_back: 'Imagen dorsal del hombre de la Sábana Santa, vista en negativo',
      figNote: 'Las posiciones son aproximadas. Vista en negativo, donde las marcas de sangre se ven claras.',
      breath: {
        alt: 'Diagrama de un hombre crucificado que alterna entre dejarse caer y empujarse hacia arriba para respirar',
        h: 'Por qué la sangre de los brazos corre en dos direcciones',
        text: `<p>En los antebrazos, unos hilillos delgados de sangre corren en dos ángulos un poco distintos, separados unos diez grados. Patólogos como Robert Bucklin lo interpretan como señal de que los brazos estuvieron en dos posiciones mientras corría la sangre.</p>
<p>Eso encaja con la forma en que mata la crucifixión. Colgar de los brazos hace difícil sacar el aire, así que la víctima tiene que empujarse hacia arriba sobre los pies clavados para tomar cada respiración, y luego vuelve a dejarse caer. La sangre siempre corre en línea recta hacia abajo, así que cuando los brazos cambian de ángulo, el rastro sobre la piel cambia de dirección. Presiona el botón para verlo.</p>`,
        up: 'Empujarse para respirar', down: 'Dejarse caer',
        skeptic: 'La mejor respuesta escéptica: un estudio de 2018 sobre el patrón de las manchas de sangre, de Matteo Borrini y Luigi Garlaschelli, con un voluntario y flujos de sangre reales, encontró que los rastros de los antebrazos requieren posiciones de los brazos distintas de una sola postura de crucifixión, y consideró irreales algunos flujos. Los defensores responden que un cuerpo que se movió durante horas dejaría justamente rastros así de variados.'
      },
      intro: '<p>Una crucifixión romana era una ejecución pública pensada para humillar. Los Evangelios describen con detalle sencillo la que aquí importa. La tela registra una ejecución con los mismos rasgos, incluidos algunos que el arte medieval representó mal.</p>',
      after: `<h2>Por qué importa</h2>
<p>Un falsificador del siglo XIV habría tenido que conocer detalles que su propia cultura no conocía o no mostraba: que los clavos atravesaban la muñeca, que un flagrum romano dejaba marcas en forma de pesa, que la sangre de un cuerpo muerto se separa en coágulo y suero. Los escépticos responden que algunos de estos detalles están en disputa, y que las propias marcas de sangre se han estudiado con resultados mixtos. Ambos lados están en el <a href="evidence.html">expediente</a>.</p>`
    },

    dating: {
      title: 'Datación por radiocarbono de la Sábana Santa de Turín: los resultados de 1988 y el debate | Si no veo',
      description: 'La datación por radiocarbono de 1988 dio para la Sábana Santa de Turín de 1260 a 1390 d. C. Mira las 12 mediciones de los laboratorios, de dónde salió la muestra, los nuevos análisis de los datos originales y otros métodos de datación.',
      h1: 'La prueba del carbono 14',
      lede: 'Este es el argumento individual más fuerte de que la Sábana Santa es medieval, y merece una mirada cuidadosa. Aquí está lo que se hizo, lo que se encontró, lo que los críticos han encontrado desde entonces y lo que prueba y no prueba.',
      compareH: 'Todas las fechas propuestas, en una sola línea',
      chartNote: 'En rojo: el resultado del radiocarbono de 1988, con un 95% de confianza. En verde rayado: otros métodos, todos aplicados a fibras sueltas de origen incierto y ninguno de ellos una técnica de datación establecida. El círculo marca el estudio con rayos X, que comparó un hilo con lino del siglo I y no produjo un rango de fechas. Pasa el cursor o toca cualquier barra para ver los detalles.',
      labsH: 'Las doce mediciones detrás de la fecha',
      labsText: 'Cada línea es una medición publicada, con su margen de error declarado. La franja sombreada es la media ponderada combinada: 689 más o menos 16 años de radiocarbono. Fíjate en cómo Oxford queda aparte de Arizona. Esa dispersión es lo que después cuestionaron los estadísticos.',
      body: `<h2>Qué se hizo</h2>
<p>El 21 de abril de 1988, en la sacristía de la catedral de Turín, el experto en textiles Giovanni Riggi cortó una sola tira de una esquina de la tela, en el borde cerca de los pies de la imagen frontal, justo encima de donde se había retirado una muestra en 1973. Trozos de unos 50 miligramos fueron a tres laboratorios que usaban espectrometría de masas con acelerador: la Universidad de Arizona, la Universidad de Oxford y el ETH de Zúrich. Cada laboratorio recibió además tres muestras de control de edad conocida, sin que se le dijera cuál era cuál.</p>
<p>Los controles salieron bien: lino de una tumba de Nubia, lino de una momia del siglo II e hilos de una capa pluvial del siglo XIII se dataron correctamente. Las muestras de la Sábana Santa dieron 689 años de radiocarbono antes de 1950, más o menos 16. En años de calendario, eso es de 1262 a 1312 d. C. o de 1353 a 1384 d. C., publicado redondeado como de 1260 a 1390 d. C. El artículo en Nature, firmado por 21 científicos, lo llamó evidencia concluyente de que el lino es medieval.</p>
<h2>Por qué importa tanto</h2>
<p>La datación por radiocarbono es un método maduro y bien probado. Los controles funcionaron. Y la fecha cae justo donde comienza la historia documentada: la tela aparece en Lirey, Francia, en la década de 1350, y un obispo escribió en 1389 que un artista había confesado haberla pintado. Para muchos científicos, esa coincidencia cerró el caso.</p>`,
      sampleH: 'Una tira, una esquina',
      sampleText: `<p>Todos los resultados salieron de una sola tira, de unos 7 a 8 centímetros de largo, cortada de una esquina. Esa esquina había sido manipulada durante siglos en las exposiciones públicas, y está cerca de costuras y reparaciones antiguas. El plan original, acordado con el Vaticano en 1986, contemplaba siete laboratorios y varios puntos de muestreo. Se redujo a tres laboratorios y un solo punto.</p>
<p>Los críticos dicen que una sola esquina no puede representar a una tela de 4,4 metros. Los defensores responden que los laboratorios examinaron la muestra al microscopio, que se veía igual que la tela principal, y que dos exámenes posteriores de fragmentos sobrantes de Arizona, en 2010 y de nuevo en 2026, no encontraron tinte, ni recubrimiento, ni señales de reparación.</p>`,
      sampleAlt: 'La esquina de la Sábana Santa donde se cortó la muestra de 1988', sampleCap: 'La esquina de la muestra (aproximada), en el extremo de los pies de la imagen frontal. Fotografía de Enrie, 1931.',
      debateH: 'Por qué los críticos la cuestionan',
      defenseH: 'Por qué sigue siendo el argumento más fuerte en contra',
      debateFor: `<p>Los resultados no concuerdan entre sí tan bien como dio a entender el artículo. Las medias de los tres laboratorios no pasan una prueba estándar de coherencia, y los autores reportaron un valor de chi cuadrado de 6,4, apenas por encima del umbral del 5%. En 2017 se liberaron los datos originales tras una solicitud legal, y en 2019 un equipo dirigido por Tristan Casabianca publicó un nuevo análisis en Archaeometry. Su prueba de coherencia dio 15,99 frente a un valor crítico de 5,99, y concluyeron que las muestras no eran homogéneas.</p>
<p>El estadístico Marco Riani y sus colegas (2013) encontraron que la edad medida cambia a lo largo de la tira, como si algo variara a través de la muestra. Otros investigadores sugirieron un remiendo medieval, contaminación o daños del incendio de 1532.</p>`,
      debateAgainst: `<p>Ninguna de estas críticas apunta al siglo I. La mayor corrección que alguien ha propuesto en un artículo revisado por pares es de 88 años de radiocarbono (Walsh y Schwalbe, 2020), y con eso la tela sigue siendo medieval. Cada mecanismo concreto que se ha ofrecido para descartar la fecha, como el fuego, las bacterias, el monóxido de carbono o un estallido de neutrones, o falló en una prueba o no se puede probar.</p>
<p>La teoría del remiendo, popular en su momento, es más débil que en 2005: los fragmentos sobrantes estudiados en 2010 y 2026 no mostraron tinte ni remiendos. En resumen, los nuevos análisis muestran que la prueba de 1988 fue más pequeña y menos limpia de lo que afirmó. No muestran que la fecha esté equivocada.</p>`,
      verdict: `<h2>Nuestro resumen honesto</h2>
<p>La fecha del radiocarbono dice medieval, y es la mejor prueba individual que alguien tiene. La prueba de 1988 también tuvo fallas reales de diseño: una tira, una esquina, tres laboratorios y resultados que no encajan entre sí tan bien como se informó. Eso justifica una nueva prueba, con varias muestras de varios lugares de la tela, hecha de forma abierta. No justifica ignorar el resultado.</p>
<p>Si eres escéptico, esta es tu carta más fuerte, y debes conservarla. Si crees que la tela es auténtica, esta es la pregunta que tienes que responder con honestidad. En cualquier caso, el resto de la evidencia todavía necesita una explicación, empezando por <a href="image.html">cómo se formó la imagen</a>.</p>`
    },

    image: {
      title: '¿Cómo se formó la imagen de la Sábana Santa de Turín? | Si no veo',
      description: '¿Pintura, quemadura, frotado, fotografía primitiva, una reacción química o un estallido de luz? Todas las hipótesis sobre la imagen de la Sábana Santa de Turín, con lo que explican y dónde fallan.',
      h1: '¿Cómo se formó la imagen?',
      lede: 'Esta es la pregunta abierta más profunda sobre la Sábana Santa. Cualquier explicación, natural o no, tiene que dar cuenta de una lista de propiedades muy extrañas. Aquí están, seguidas de cada hipótesis importante y sus problemas.',
      propsH: 'Lo que cualquier explicación debe explicar',
      propsLede: 'Estas son las propiedades que reportaron los equipos científicos que estudiaron la tela directamente. Algunas están en disputa en sus detalles. Juntas, son la razón por la que nadie ha reproducido la imagen en todos sus aspectos.',
      hypH: 'Las hipótesis',
      hypLede: 'Ordenadas, más o menos, de la más natural a la menos natural. Cada una está calificada según qué tan bien encaja con las propiedades de arriba.',
      props: [
        { n: '0,2 µm', t: 'El color está solo en la capa más externa de las fibras superiores. Un cabello mide unos 70 µm de grosor.' },
        { n: 'Sin pintura', t: 'Ningún pigmento, aglutinante ni pincelada forma la imagen, según el equipo de 1978.' },
        { n: 'Negativo', t: 'La luz y la sombra están invertidas, así que el negativo fotográfico se ve natural.' },
        { n: '3D', t: 'Lo oscuro de la imagen corresponde a la distancia entre la tela y el cuerpo, así que se puede convertir en un relieve.' },
        { n: '¿Primero la sangre?', t: 'Las pruebas no encontraron imagen del cuerpo bajo las manchas de sangre, lo que la mayoría de los investigadores interpreta como primero la sangre y después la imagen. Un artículo de 2026 sostiene que esto no resuelve el orden.' },
        { n: 'Sin brillo', t: 'Bajo la luz ultravioleta, las quemaduras de 1532 brillan y la imagen del cuerpo no. No es una simple quemadura.' },
        { n: 'También huecos', t: 'Algunas zonas de la imagen no estaban en contacto con el cuerpo, como entre la nariz y la mejilla. No es solo una impresión por contacto.' },
        { n: 'Semitono', t: 'Cada fibra de la imagen está coloreada o no lo está. Las zonas más oscuras solo tienen más fibras coloreadas, como una foto de periódico.' }
      ],
      hypotheses: [
        { kind: 'Arte', name: 'Una pintura', strength: 'weak',
          text: 'El microscopista Walter McCrone reportó partículas de óxido de hierro y bermellón, y concluyó en 1980 que la imagen la pintó un artista medieval, quizá con una acuarela diluida.',
          problems: 'El equipo de STURP, usando fluorescencia de rayos X, espectroscopia y química sobre la tela misma, no encontró pigmento que formara la imagen ni aglutinante, y concluyó que no es una pintura. La pintura se filtraría entre los hilos; la imagen no lo hace. En la tela hay partículas de muchos materiales, probablemente de artistas que presionaron copias de sus pinturas contra ella, como se hizo durante siglos.',
          sources: [{ label: 'Schwalbe y Rogers 1982, Analytica Chimica Acta', url: 'https://www.shroud.com/pdfs/Schwalbe%20and%20Rogers%201982.pdf' }, { label: 'Resumen final de STURP, 1981', url: 'https://www.shroud.com/78conclu.htm' }] },
        { kind: 'Calor', name: 'Una quemadura con una estatua caliente', strength: 'weak',
          text: 'Una estatua o un relieve de metal, calentado y cubierto con la tela, dejaría una quemadura parda, con los tonos invertidos y algo de información de profundidad.',
          problems: 'Las quemaduras brillan con un tono rojizo bajo la luz ultravioleta. Las quemaduras reales del incendio de 1532 lo hacen, y la imagen del cuerpo no. Además, un objeto caliente quemaría la tela de lado a lado y no podría colorear zonas que no tocaba.',
          sources: [{ label: 'Resumen final de STURP, 1981', url: 'https://www.shroud.com/78conclu.htm' }] },
        { kind: 'Contacto', name: 'Polvo o ácido frotado sobre un relieve', strength: 'disputed',
          text: 'Joe Nickell en la década de 1980, y el químico Luigi Garlaschelli en 2009, hicieron imágenes de tamaño real frotando pigmento o ácido sobre un lino colocado encima de una persona o de un bajorrelieve, y luego envejecieron la tela. Los resultados salen en negativo y contienen algo de información en 3D. En 2025, Cicero Moraes argumentó con simulaciones 3D que la imagen encaja mejor con un relieve bajo que con un cuerpo completo.',
          problems: 'Los defensores responden que estas copias se ven a simple vista de una forma en que la Sábana Santa no se ve, que su color penetra las fibras en vez de quedarse en los 0,2 µm externos, que dejan material encima y que no explican por qué la sangre llegó primero. Quienes apoyan la idea replican que el envejecimiento y los lavados durante siglos podrían cerrar parte de esa brecha.',
          sources: [{ label: 'Garlaschelli 2010, Journal of Imaging Science and Technology', url: 'https://www.imaging.org/common/uploaded%20files/pdfs/Papers/2010/JIST/JIST0040301.pdf' }, { label: 'Wikipedia: Shroud of Turin, análisis de la imagen', url: 'https://en.wikipedia.org/wiki/Shroud_of_Turin' }] },
        { kind: 'Óptica', name: 'Protofotografía medieval', strength: 'weak',
          text: 'El historiador del arte Nicholas Allen propuso en la década de 1990 que un taller medieval usó una cámara oscura con una lente de cuarzo y un lino tratado con sales de plata para "fotografiar" un cadáver o una estatua.',
          problems: 'No hay registro histórico de una tecnología así sino hasta 450 años después, no se ha encontrado residuo de plata en la imagen, y una fotografía no codificaría la distancia entre la tela y el cuerpo como lo hace la Sábana Santa.',
          sources: [{ label: 'Wikipedia: Shroud of Turin', url: 'https://en.wikipedia.org/wiki/Shroud_of_Turin' }] },
        { kind: 'Química', name: 'Una reacción natural con gases de un cuerpo', strength: 'disputed',
          text: 'El químico Raymond Rogers, miembro de STURP, propuso una reacción de Maillard: los gases que libera un cuerpo muerto reaccionan con una capa delgada de residuos de almidón y azúcar que dejaron en el lino los métodos antiguos de tejido, y producen un color amarillo tenue solo en la superficie.',
          problems: 'Esto explicaría lo superficial de la imagen y la ausencia de pintura. Le cuesta explicar la nitidez y la codificación limpia de la distancia, porque los gases se dispersan en todas las direcciones, y exige que el cuerpo saliera de la tela antes de que se formaran manchas de descomposición. Nadie ha producido una imagen completa de esta manera.',
          sources: [{ label: 'Rogers y Arnoldi 2003, Melanoidins', url: 'https://www.shroud.com/pdfs/rogers5.pdf' }] },
        { kind: 'Física', name: 'Un breve estallido de radiación', strength: 'disputed',
          text: 'Varios físicos sugieren que la imagen se debió a un estallido de energía breve e intenso desde el cuerpo. Científicos de ENEA colorearon lino con pulsos de láser ultravioleta de una forma parecida a la Sábana Santa. Giulio Fanti propuso una descarga de corona. John Jackson propuso que la tela se desplomó a través del cuerpo cuando este se volvió mecánicamente "transparente", y registró la imagen mientras caía.',
          problems: 'No se conoce ninguna fuente natural de una radiación así en un cuerpo humano. Los cálculos de energía son enormes. Los experimentos con láser colorearon solo muestras pequeñas, no una imagen. Los escépticos señalan que una hipótesis que requiere un milagro no se puede poner a prueba como una natural. Quienes la apoyan responden que justamente por eso sigue sobre la mesa.',
          sources: [{ label: 'Di Lazzaro y otros 2012, ENEA', url: 'https://www.shroud.com/pdfs/dilazzaro2012.pdf' }, { label: 'Jackson 1991, Foundations of Physics', url: 'https://doi.org/10.1007/BF00733262' }] }
      ],
      emText: `<p>La animación de arriba muestra la hipótesis que a muchas personas les parece más convincente: un estallido de luz desde el cuerpo, que viaja en línea recta hacia arriba y hacia abajo, colorea solo la superficie de las fibras, y después la tela cae a través del cuerpo. La hicimos para ayudarte a imaginar la idea. Es la imagen de una hipótesis, no la reconstrucción de un hecho ni una evidencia a su favor.</p>
<p>Una buena prueba para cualquier explicación, natural o sobrenatural, es si da cuenta de las ocho propiedades del inicio de esta página al mismo tiempo. Hasta ahora, ninguna lo ha logrado en un laboratorio.</p>`,
      enea: `<h3>Los experimentos con láser de ENEA</h3>
<p>De 2005 a 2010, un equipo dirigido por Paolo Di Lazzaro en ENEA, en Frascati, disparó pulsos ultracortos de luz ultravioleta sobre lino. Dentro de un rango estrecho de ajustes, el lino tomó un color amarillo pajizo limitado a la superficie más externa de las fibras, muy cercano al color y la profundidad de la Sábana Santa. Los pulsos más largos o más fuertes quemaron el lino, y los más débiles no hicieron nada.</p>
<p>Al escalar el resultado, calcularon que colorear de una sola vez un área del tamaño de un cuerpo humano requeriría unos 34 billones de vatios (34 millones de millones) de potencia ultravioleta, mucho más que cualquier fuente ultravioleta que exista. En sus propias palabras, los resultados no prueban un milagro y no explican cómo se formó la imagen. Muestran lo difícil que es producir este tipo de coloración.</p>`,
      emH: 'La hipótesis de la luz, visualizada',
      zoomH: '¿Qué tan delgada es la imagen?',
      zoomLede: 'Usa el control para acercarte desde la tela completa hasta una sola fibra. Esta es la propiedad que derrota a la mayoría de las explicaciones.',
      gridH: 'Pon a prueba cada explicación',
      gridLede: 'Aquí están las seis ideas principales frente a las propiedades de arriba, más una pregunta adicional: ¿alguien ha hecho una imagen completa de esta manera?'
    },

    timeline: {
      title: 'Cronología de la Sábana Santa de Turín: su historia desde Lirey hasta hoy | Si no veo',
      description: 'Una cronología interactiva de la Sábana Santa de Turín: la historia temprana hipotética, el registro documentado desde hacia 1354, los incendios, las fotografías y las pruebas científicas.',
      h1: 'Cronología',
      lede: 'La historia documentada de la Sábana Santa comienza en Francia hacia 1354. Antes de eso, su historia es una hipótesis, construida con imágenes y textos que pueden o no describir esta tela. La cronología mantiene separadas las dos cosas.',
      tracks: { cloth: 'La tela', science: 'Ciencia', church: 'Iglesia', world: 'Mundo' },
      legend: { cloth: 'Hecho documentado', science: 'Estudio científico', hyp: 'Hipotético o legendario' },
      cert: { documented: 'Documentado', probable: 'Probable', hypothesized: 'Hipotético', legendary: 'Leyenda' },
      listH: 'Todos los hechos',
      icon: { h: 'El rostro y un ícono del siglo VI',
        altShroud: 'El rostro de la Sábana Santa en negativo', altIcon: 'Ícono de Cristo Pantocrátor, Monasterio de Santa Catalina, Sinaí, siglo VI',
        shroud: 'Sábana Santa', iconLabel: 'Ícono del Sinaí',
        text: `<p>Este es el ícono más antiguo que se conserva de Cristo Pantocrátor, pintado en el siglo VI y guardado en el Monasterio de Santa Catalina, en el Sinaí. Desliza entre él y el rostro de la Sábana Santa. Ambos están a la misma escala para que los ojos coincidan.</p>
<p>Quienes defienden una historia temprana señalan rasgos en común: la nariz larga, la barba partida, los párpados pesados y las mejillas desiguales. En los años treinta, Paul Vignon enumeró pequeñas rarezas que, según él, los artistas bizantinos copiaron de la tela, como una forma cuadrada entre las cejas.</p>`,
        skeptic: 'La respuesta escéptica: el parecido no dice qué vino primero. Un artista del siglo XIV que hiciera una mortaja de Jesús habría copiado el rostro que los íconos ya habían hecho tradicional. La semejanza es compatible con que la Sábana sea antigua, y también con que se hiciera para parecerse a los íconos.' },
      map: { h: 'Dónde ha estado la tela', alt: 'Mapa de las rutas documentadas e hipotéticas de la Sábana Santa, de Jerusalén a Turín',
        keyDoc: 'Documentada', keyHyp: 'Hipotética',
        jerusalem: 'Jerusalén, ¿30 d. C.?', edessa: 'Edesa (Urfa), ¿siglos VI a X?', constantinople: 'Constantinopla, ¿944 a 1204?', athens: 'Atenas, ¿después de 1204?',
        lirey: 'Lirey, hacia 1354', chambery: 'Chambéry, 1502 a 1578', turin: 'Turín, desde 1578',
        caption: 'Las líneas continuas están documentadas. La ruta punteada es una hipótesis, sobre todo del historiador Ian Wilson, que identifica la Sábana Santa con la Imagen de Edesa (el Mandylion). La mayoría de los historiadores no acepta esa identificación. Entre 1453 y 1578 la tela también viajó con la Casa de Saboya, así que el recorrido documentado real tiene más paradas de las que se muestran.' }
    },

    videos: {
      title: 'Videos sobre la Sábana Santa de Turín, verificados afirmación por afirmación | Si no veo',
      description: 'Tres videos populares sobre la Sábana Santa de Turín, verificados afirmación por afirmación y con marcas de tiempo: qué se sostiene, qué está en disputa y qué es falso.',
      h1: 'Videos populares, verificados',
      lede: 'La mayoría de la gente conoce la Sábana Santa por medio de videos. Vimos tres videos populares de principio a fin, incluidas sus transcripciones, y verificamos sus afirmaciones principales. Varias son excelentes. Algunas son falsas. Haz clic en un tiempo para saltar a ese momento.',
      play: 'Reproducir el video (carga YouTube)', watch: 'Ver en YouTube',
      rate: { strong: 'Se sostiene', disputed: 'En disputa', weak: 'Falso o exagerado' },
      missingH: 'Lo que ninguno de los tres menciona',
      missingAfter: 'Un caso justo también tiene que ocuparse de esto. Encontrarás cada punto en el <a href="evidence.html">expediente</a>.'
    },

    library: {
      title: 'Biblioteca de investigación sobre la Sábana Santa de Turín: artículos y estudios | Si no veo',
      description: 'Una biblioteca con buscador de artículos científicos, estudios y textos sobre la Sábana Santa de Turín, a favor y en contra, con enlaces directos a los originales en shroud.com y en revistas.',
      h1: 'Biblioteca',
      lede: 'Más de 2.400 artículos, estudios, textos y boletines, casi todos del archivo que Barrie Schwortz creó en shroud.com a partir de 1996. Empieza por las 25 lecturas clave; luego busca por palabra, filtra por tema y ve directo al original.',
      keyH: 'Empieza aquí: 25 lecturas clave, de ambos lados', keyLede: 'Elegidas para que un lector escéptico conozca el trabajo más sólido de cada lado, más o menos en el orden en que se desarrolló el debate.', allH: 'La biblioteca completa',
      search: 'Busca títulos, autores y revistas',
      count: 'artículos mostrados',
      peer: 'Revisado por pares',
      topics: { radiocarbon: 'Carbono 14', blood: 'La sangre', 'image-formation': 'Formación de la imagen', history: 'Historia', textile: 'El lino', 'anatomy-medical': 'Medicina', 'pollen-botany': 'Polen y plantas', 'photography-imaging': 'Fotografía', '3d-vp8': '3D', coins: 'Monedas', sudarium: 'Sudario', 'art-history': 'Historia del arte', critique: 'Críticas', overview: 'Panoramas generales', conference: 'Congresos' },
      stances: { 'pro-authenticity': 'A favor de la autenticidad', skeptical: 'Escéptico', neutral: 'Neutral' },
      more: `<h2>En memoria de Barrie M. Schwortz (1946 a 2024)</h2>
<p>Barrie Schwortz fue el fotógrafo oficial de documentación del Shroud of Turin Research Project de 1978. Era judío, empezó como escéptico y dedicó el resto de su vida a poner la investigación al alcance de todos, gratis, en shroud.com. La mayor parte de esta biblioteca existe porque él la conservó. Le dedicamos esta página.</p>
<p>¿Quieres ir más lejos? El <a href="https://www.shroud.com/" target="_blank" rel="noopener">archivo de shroud.com</a>, el sitio oficial de la <a href="https://www.sindone.org/" target="_blank" rel="noopener">Arquidiócesis de Turín</a> y el artículo de Wikipedia sobre la <a href="https://en.wikipedia.org/wiki/Shroud_of_Turin" target="_blank" rel="noopener">Sábana Santa de Turín</a> (en inglés), que se inclina hacia el escepticismo y es una buena prueba para tus conclusiones.</p>`
    },

    about: {
      title: 'Acerca de Si no veo: por qué existe este sitio | Si no veo',
      description: 'Si no veo es un sitio gratuito y sin fines de lucro sobre la Sábana Santa de Turín. Cómo calificamos la evidencia, de dónde vienen nuestras imágenes y quién lo hizo.',
      h1: 'Acerca de este sitio',
      lede: 'Por qué existe, cómo trabajamos y de dónde viene todo.',
      body: `<h2>Por qué existe este sitio</h2>
<p>La Sábana Santa de Turín es, o una de las falsificaciones más notables jamás hechas, o el rastro físico más directo que tenemos de la muerte y la resurrección de Jesús de Nazaret. En cualquier caso, merece algo mejor que un titular de diez segundos. Casi todo lo que la gente encuentra en internet está escrito para ganar: un lado grita "prueba", el otro grita "falso". Este sitio está escrito para informar.</p>
<p>Lleva el nombre de Tomás, que se negó a creer hasta poder ver las marcas de los clavos. Creemos que una duda como la suya es honesta, y que merece evidencia, no presión.</p>
<h2>Quién lo hizo</h2>
<p>Si no veo fue creado por Nelson Inno, un fundador salvadoreño, como un proyecto gratuito y pro bono. Para ser totalmente transparentes: Nelson cree que la Sábana Santa es auténtica. Justamente por eso el sitio se exige una regla: los argumentos más fuertes contra la autenticidad se muestran con toda su fuerza, justo al lado de los argumentos a favor. Si alguna vez no cumplimos con eso, queremos saberlo.</p>
<h2>Cómo trabajamos</h2>
<ul>
<li>Cada afirmación sobre hechos enlaza a una fuente. Cuando es posible, la fuente es un artículo revisado por pares o un documento original.</li>
<li>Los argumentos de ambos lados se califican con la misma escala: sólida, moderada, débil, disputada o descartada.</li>
<li>Las afirmaciones populares que no se sostienen se señalan como tales, aunque ayudarían a la causa de la autenticidad.</li>
<li>Las visualizaciones artísticas, como la animación de la luz, siempre se identifican como visualizaciones de una hipótesis.</li>
<li>Sin anuncios, sin rastreo, nada a la venta.</li>
</ul>
<h2>¿Encontraste un error?</h2>
<p>Escribe a <a href="mailto:hey@everybodyknowsyou.com">hey@everybodyknowsyou.com</a> con la página, la afirmación y tu fuente. Las correcciones de los escépticos son especialmente bienvenidas.</p>
<h2>Muy pronto</h2>
<p>La historia de Nelson, y una reflexión sobre lo que él llama el patrón hacia Dios, tendrán su propia página. La evidencia se queda aquí, aparte, para que puedas pesarla en sus propios términos.</p>`,
      creditsH: 'Créditos de las imágenes', sourceLink: 'fuente'
    }
  }
};
