// Testi in italiano. Linguaggio semplice, niente lineette lunghe. HTML ammesso nei campi lunghi.
// Testo biblico: Riveduta 1927 (pubblico dominio), da ebible.org.
export default {
  brand: "See The Shroud",
  locale: "it_IT",
  shareImage: "social-share-see-the-shroud-seetheshroud.org.jpg",
  keywords: "See The Shroud, esplorare la Sindone di Torino, esaminare la Sindone di Torino, vedere la Sindone di Torino da vicino, Sindone di Torino interattiva, sito interattivo sulla Sindone di Torino, Sindone di Torino in alta risoluzione, Sindone di Torino online, guida visiva alla Sindone di Torino, tutto sulla Sindone di Torino, Sindone di Torino, Sacra Sindone, prove sulla Sindone di Torino, datazione al carbonio della Sindone, negativo fotografico della Sindone, Sindone 3D, la Sindone di Torino è vera, telo funerario di Gesù, sindonologia, Shroud of Turin, STURP, Secondo Pia",
  shareAlt: "Il volto della Sindone di Torino come negativo fotografico",
  orgDescription: "See The Shroud è un sito educativo gratuito e senza scopo di lucro dove puoi esplorare ed esaminare da vicino la Sindone di Torino (in alta risoluzione, in negativo e in 3D) e valutare le prove a favore e contro la sua autenticità, con tutte le fonti, in 12 lingue.",
  ui: {
    skip: "Vai al contenuto", menu: "Menu", mainNav: "Principale", language: "Lingua",
    exhibit: "Reperto", detail: "I dettagli", skeptic: "La migliore risposta dello scettico", reply: "La replica",
    theCase: "L'argomentazione completa", replyAgainst: "Come rispondono i sostenitori", whyRating: "Perché questa valutazione:",
    all: "Tutti", allTopics: "Tutti gli argomenti", shown: "visualizzati", openAll: "Apri o chiudi tutto",
    prev: "Precedente", next: "Successivo", problems: "Problemi di questa idea"
  },
  nav: [
    { slug: 'explore', label: "Esplora" },
    { slug: 'evidence', label: "Fascicolo" },
    { slug: 'wounds', label: "Ferite" },
    { slug: 'dating', label: "Datazione" },
    { slug: 'image', label: "Come si è formata" },
    { slug: 'timeline', label: "Cronologia" },
    { slug: 'videos', label: "Video" },
    { slug: 'library', label: "Biblioteca" },
    { slug: 'next', label: "E adesso?" },
    { slug: 'about', label: "Chi siamo" }
  ],
  footer: {
    about: "Un progetto gratuito e senza scopo di lucro. Ogni affermazione ha la sua fonte nel fascicolo, comprese le fonti che non sono d'accordo con noi.",
    explore: "Esplora", more: "Approfondisci", extra: [],
    rights: "Testi {year} See The Shroud. Liberi di essere condivisi con un link alla fonte. Crediti delle immagini nella pagina Chi siamo.",
    eky: "Sito web realizzato con amore, da", ekyAria: "Sito web realizzato con amore da everybodyknowsyou.com"
  },
  strength: { strong: "Forte", moderate: "Moderata", weak: "Debole", disputed: "Contestata", debunked: "Smentita" },
  lean: { for: "Indica l'autenticità", against: "Indica un'origine medievale", neutral: "Contesto" },
  categories: { image: "L'immagine", blood: "Il sangue", anatomy: "Anatomia e ferite", textile: "Il lino", dating: "Datazione", history: "Storia", botany: "Pollini e piante", 'imaging-3d': "Informazioni 3D", 'image-formation': "Come si è formata l'immagine", other: "Altro" },
  fig: {
    scaleAlt: "Schema del telo di 4,4 metri con l'immagine frontale e quella dorsale di un uomo, testa contro testa",
    scaleFront: "Immagine frontale", scaleBack: "Immagine dorsale", scaleLen: "circa 4,4 metri", scaleWid: "circa 1,1 m",
    scaleCaption: "Il telo intero, come lo fotografò Giuseppe Enrie nel 1931. Il corpo era disteso su una metà. L'altra metà era ripiegata sopra la testa e lungo la parte anteriore fino ai piedi. Per questo le immagini frontale e dorsale si incontrano all'altezza delle teste.",
    foldFrontAlt: "Metà frontale della Sindone, con l'immagine frontale dell'uomo", foldBackAlt: "Metà dorsale della Sindone, con l'immagine dorsale dell'uomo",
    foldBtn: "Piegalo come avvolgeva il corpo", unfoldBtn: "Riaprilo"
  },
  ui3d: { depth: "Profondità", light: "Luce", clay: "Argilla", negative: "Negativo", fallback: "Questa vista 3D richiede WebGL, che il tuo browser ha disattivato." },
  emanation: {
    label: "Un'ipotesi, visualizzata. Non è una prova.",
    note: "Solo a scopo illustrativo. Per semplificare, il video mostra solo la metà anteriore del telo, con la luce proiettata in linea retta dal corpo verso di esso.",
    alt: "Animazione: la luce sale da un corpo sotto un telo di lino, l'immagine si forma sul telo e il telo ricade piatto",
    captions: [
      "Un corpo giace sotto un telo di lino, al buio.",
      "Prima il sangue impregna il telo per contatto. Le analisi non hanno trovato immagine sotto le macchie di sangue.",
      "Ipotesi: un breve e intenso rilascio di energia dal corpo stesso.",
      "La luce viaggia dritta verso l'alto e dritta verso il basso, non in tutte le direzioni.",
      "Si scurisce solo la superficie più esterna delle fibre. Nessuna pittura, nessuna bruciatura.",
      "Il fisico John Jackson ha proposto che il telo sia poi ricaduto attraverso un corpo che non c'era più.",
      "Resta un'immagine debole che nessun esperimento ha ancora riprodotto in ogni dettaglio."
    ],
    ui: { play: "Riproduci", pause: "Pausa", replay: "Riproduci di nuovo", time: "Tempo" }
  },
  powers: {
    label: "Livello di zoom", prev: "Riduci", next: "Ingrandisci",
    fiberNote: "Un filo è un fascio di fibre. Solo le fibre superiori sono colorate.",
    layerLabel: "strato colorato, circa 0,2 µm", lumen: "interno della fibra",
    steps: [
      { size: "4,4 m", title: "Il telo intero", text: "Immagine frontale e dorsale, testa contro testa. A pochi passi di distanza, l'uomo si vede appena. L'immagine è così debole." },
      { size: "25 cm", title: "Il volto", text: "Da vicino, il volto non ha contorni, né pennellate, né una direzione della luce. Chiari e scuri sono invertiti, come in un negativo fotografico." },
      { size: "0,25 mm", title: "Un singolo filo", text: "Ogni filo è spesso circa un quarto di millimetro, intrecciato tre sopra e uno sotto. Dove c'è l'immagine, sono colorate solo le sommità dei fili rivolte verso il corpo. I fili sottostanti restano bianchi." },
      { size: "15 µm", title: "Le fibre di un filo", text: "Un filo è fatto di circa 100-200 fibre di lino. Nelle zone dell'immagine sono colorate solo le due o tre fibre più in alto. Le zone più scure dell'immagine non hanno fibre più scure: hanno più fibre colorate." },
      { size: "0,2 µm", title: "Lo strato colorato", text: "All'interno di una fibra, il colore è confinato nello strato più esterno, spesso circa 200 miliardesimi di metro, lo spessore della parete cellulare primaria della fibra. L'interno della fibra è intatto. È questa la proprietà che rende l'immagine così difficile da riprodurre." }
    ]
  },
  grid: {
    caption: "Quali proprietà dell'immagine può spiegare ciascuna ipotesi",
    corner: "Ipotesi",
    cols: ["Sottile 0,2 µm", "Niente pittura", "Negativo", "3D", "Prima il sangue", "Niente fluorescenza UV", "Non solo contatto", "A mezzitoni", "Immagine intera fatta in laboratorio"],
    legend: { y: "La spiega", p: "In parte, o contestato", n: "Non la spiega", u: "Non verificato" },
    rows: [
      { name: "Un dipinto", v: 'nnpnpyyny' },
      { name: "Bruciatura da una statua calda", v: 'pyypnnnpy' },
      { name: "Sfregamento su un rilievo", v: 'ppypppppy' },
      { name: "Fotografia primitiva", v: 'pnynuyynp' },
      { name: "Reazione con i gas del corpo", v: 'yyypyyppn' },
      { name: "Un lampo di radiazione", v: 'pyyuyuyun' }
    ],
    note: "È la nostra sintesi di ciò che riferiscono sostenitori e critici di ciascuna idea. Persone ragionevoli valutano alcune caselle in modo diverso. Osserva l'ultima colonna: le ipotesi che spiegano più proprietà sono anche quelle che non hanno mai prodotto un'immagine intera in laboratorio."
  },
  dating: {
    bc: "a.C.", crucifixion: "Crocifissione, tra il 30 e il 33 d.C. circa", documented: "Documentata, dal 1354 circa",
    chartAlt: "Grafico che confronta l'intervallo della datazione al radiocarbonio del 1988 con altri metodi di datazione su un asse di anni di calendario",
    labsAlt: "Grafico delle dodici misure al radiocarbonio pubblicate da Arizona, Oxford e Zurigo, con le barre d'errore",
    bpAxis: "Età radiocarbonica, anni prima del 1950 (BP). Un valore più basso significa più recente.", bpShort: "anni radiocarbonici BP", labMean: "Media del laboratorio", combined: "Combinato"
  },
  notFound: { title: "Pagina non trovata | See The Shroud", h1: "Questa pagina non c'è", text: "Il link potrebbe essere vecchio, o l'indirizzo potrebbe contenere un errore di battitura. Tutto il sito parte dalla pagina iniziale.", cta: "Vai alla pagina iniziale" },

  pages: {
    index: {
      title: "See The Shroud: esplora la Sindone di Torino e le sue prove",
      description: "Scopri la Sindone di Torino online e gratis: ingrandisci, guarda il negativo e l'immagine in 3D, trova ogni ferita e valuta le prove a favore e contro.",
      h1: "Esamina con i tuoi occhi la Sindone di Torino",
      lede: "Un telo di lino lungo 4,4 metri porta l'immagine debole di un uomo flagellato e crocifisso. Alcuni lo considerano un falso medievale. Altri, il telo funerario di Gesù. Ecco le prove di entrambe le parti, con tutte le fonti, perché tu possa giudicare con la tua testa.",
      cta1: "Esplora il telo", cta2: "Leggi il fascicolo",
      faceAlt: "Il volto della Sindone di Torino. Passaci sopra per vederlo come negativo fotografico.",
      hint: "Guarda la lastra che si sviluppa",
      hint2: "Passa sopra il volto per vederlo come lo vede l'occhio",
      faceCaption: "Il volto della Sindone. Fotografia di Giuseppe Enrie, 1931.",
      thomasText: `<h2>Tommaso chiese di vedere i segni</h2>
<p>Questo sito nasce nello spirito dello scettico più onesto dei Vangeli. Tommaso non credette a ciò che gli dicevano i suoi amici. Voleva prove che potesse vedere e toccare: i segni dei chiodi, la ferita nel costato.</p>
<p>La Sindone di Torino mostra un uomo con segni dello stesso tipo. Se sia ciò che molti credono che sia, è la domanda che questo sito lascia a te. Ti mostreremo i segni, i test, i dubbi e le risposte, e ti indicheremo ogni fonte.</p>`,
      thomasCta: "Guarda i segni",
      objH: "Che cos'è",
      objLede: "Un unico pezzo di lino con l'immagine frontale e quella dorsale di un uomo nudo, testa contro testa, più macchie di sangue, bruciature e macchie d'acqua dovute alla sua lunga storia. È conservato a Torino dal 1578, tranne che durante la Seconda guerra mondiale.",
      facts: [
        { n: "4,4 m", t: "di lunghezza, e circa 1,1 m di larghezza" },
        { n: "3 : 1", t: "armatura diagonale a spina di pesce, un tessuto costoso" },
        { n: "0,2 µm", t: "profondità approssimativa del colore nelle fibre dell'immagine. Un capello misura circa 70 µm." },
        { n: "1354", t: "intorno a quest'anno compare per la prima volta nelle fonti storiche, a Lirey, in Francia" },
        { n: "1260-1390", t: "l'intervallo di date della datazione al carbonio del 1988" }
      ],
      cmpPos: "Come lo vede l'occhio", cmpNeg: "Come lo mostrò il negativo del 1898",
      cmpPosAlt: "Il volto della Sindone come appare all'occhio", cmpNegAlt: "Il volto della Sindone come negativo fotografico",
      cmpLabel: "Scorri per confrontare il positivo e il negativo",
      cmpCaption: "Trascina la linea. A sinistra: il negativo fotografico. A destra: ciò che vedi sul telo.",
      negYear: "Torino, 28 maggio 1898",
      negH: "La notte in cui una fotografia cambiò la domanda",
      negText: `<p>Secondo Pia, avvocato e fotografo dilettante, ebbe il permesso di scattare le prime fotografie del telo. Quando sviluppò la sua lastra di vetro, si aspettava di vedere un'immagine invertita e spettrale. Invece il negativo mostrò il ritratto chiaro e naturale di un uomo.</p>
<p>L'immagine sul telo si comporta come un negativo fotografico: chiari e scuri sono invertiti. Nessuno se n'era accorto prima, perché nessuno aveva mai visto l'immagine invertita finché non fu fotografata. È il motivo per cui è cominciato lo studio moderno della Sindone.</p>`,
      invertBtn: "Inverti questa pagina, come la lastra di Pia", invertBack: "Torna alla normalità",
      negSkeptic: "La risposta dello scettico: anche un'immagine ottenuta premendo un telo su un rilievo, o sfregandoci sopra della polvere, ha i toni invertiti. Quindi un'immagine negativa non richiede di per sé né una fotografia né un miracolo. La vera domanda è se questi metodi corrispondano a tutto il resto dell'immagine.",
      reliefAlt: "Il volto della Sindone trasformato in un rilievo 3D a partire dalla luminosità dell'immagine",
      d3H: "Contiene informazioni 3D",
      d3Text: `<p>Nel 1976 il fisico John Jackson e l'ingegnere Eric Jumper inserirono una fotografia della Sindone in un VP-8 Image Analyzer, un dispositivo costruito per trasformare la luminosità in altezza. Le fotografie comuni ne escono distorte. La Sindone ne uscì come un corpo coerente in rilievo.</p>
<p>Il motivo: quanto è scura l'immagine in ogni punto sembra seguire quanto il telo distava dal corpo in quel punto. La misura alla base di questo, pubblicata nel 1984, era modesta: 13 punti, con una correlazione di r al quadrato pari a 0,60 e un ampio margine d'errore. Ma l'effetto è facile da vedere. Questa vista 3D è costruita allo stesso modo, in tempo reale nel tuo browser, direttamente dall'immagine. Trascinala per ruotarla.</p>`,
      d3Skeptic: "La risposta dello scettico: anche le immagini ottenute da un rilievo poco profondo, come lo sfregamento su un bassorilievo, contengono qualche informazione di profondità. Nel 2025 un designer 3D, Cicero Moraes, ha sostenuto con una simulazione al computer che l'immagine corrisponde meglio a un bassorilievo che a un corpo intero. Il dibattito riguarda quanto bene ciascun metodo corrisponda al telo reale.",
      d3Cta: "Confrontala in 3D con un dipinto",
      marksH: "I segni di una crocifissione",
      marksText: `<p>I medici legali che hanno studiato l'immagine descrivono più di cento piccole ferite di un flagello romano, ferite da puntura intorno alla testa, un volto tumefatto, abrasioni sulle spalle, una ferita da chiodo nel polso anziché nel palmo e una ferita al costato, tra le costole, che sanguinò dopo la morte.</p>
<p>Questi segni corrispondono ai racconti dei Vangeli, che parlano di flagellazione, spine, percosse, chiodi e una lancia nel costato. Diversi dettagli, come il chiodo nel polso, vanno contro il modo in cui gli artisti medievali dipingevano di solito la crocifissione.</p>`,
      marksAlt: "Particolare delle mani incrociate sulla Sindone, con la ferita al polso", marksCaption: "Le mani incrociate. Il sangue esce dal polso, non dal palmo. Vista in negativo.",
      marksCta: "Guarda ogni ferita, accanto al testo del Vangelo",
      dateH: "Il test che disse medievale",
      dateText: `<p>Nel 1988 tre laboratori, in Arizona, a Oxford e a Zurigo, datarono al carbonio piccoli campioni presi da un angolo del telo. Il loro risultato combinato, pubblicato sulla rivista Nature nel 1989, fu dal 1260 al 1390 d.C., con una confidenza del 95%. È il singolo argomento più forte contro l'autenticità, e gli dedichiamo un'intera pagina.</p>
<p>Da allora alcuni ricercatori hanno messo in dubbio il punto da cui fu prelevato il campione, la coerenza dei campioni tra loro e il fatto che i dati grezzi giustificassero la precisione pubblicata. Altri metodi di datazione hanno dato date più antiche, anche se nessuno è consolidato quanto la datazione al radiocarbonio.</p>`,
      dateCta: "Leggi tutta la storia della datazione",
      howH: "Come si è formata l'immagine?",
      howLede: "Dopo più di un secolo di studi, nessuno ha una risposta completa. Non è uno slogan: è lo stato attuale della scienza. Ecco una delle ipotesi più audaci, mostrata come animazione.",
      howText: `<p>L'immagine ha un colore giallo paglia sulle fibre più superficiali del lino. Non c'è pittura, non ci sono pennellate e nessun segno che l'immagine sia penetrata nei fili. Non si comporta come una normale bruciatura: le vere bruciature dell'incendio del 1532 emettono fluorescenza alla luce ultravioletta, l'immagine del corpo no.</p>
<p>I ricercatori hanno proposto la pittura, una statua riscaldata, polvere sfregata su un rilievo, una forma primitiva di fotografia, una reazione chimica con i gas di un corpo e un lampo di radiazione. Ogni idea spiega alcune caratteristiche e fatica con altre.</p>`,
      howEnea: `<h3>Che cosa può fare un laser, e che cosa no</h3>
<p>Tra il 2005 e il 2010, gli scienziati dell'ENEA, l'agenzia nazionale italiana per le nuove tecnologie, hanno colpito il lino con impulsi brevissimi di luce laser ultravioletta. In un intervallo ristretto di impostazioni, hanno colorato il lino di un giallo paglia simile a quello della Sindone, senza bruciarlo. Nella maggior parte delle fibre il colore è penetrato più a fondo che sulla Sindone. In almeno una fibra è rimasto nella sottile parete esterna, come sulla Sindone.</p>
<p>Con un calcolo approssimativo, hanno moltiplicato l'intensità del laser che funzionava per la superficie di un corpo umano. Il risultato, circa 34.000 miliardi di watt, è molto superiore a ciò che può fornire qualsiasi sorgente ultravioletta costruita finora. È una stima di massima per farlo con un solo impulso laser. Non è una misura di come l'immagine sia stata davvero prodotta. Gli autori hanno scritto che «nessuno può affermare» che l'immagine sia stata prodotta così, e che la sua origine è ancora sconosciuta.</p>`,
      howCta: "Confronta tutte le ipotesi",
      weighH: "Valuta tu",
      weighText: `<p>La maggior parte dei dibattiti sulla Sindone sono in realtà dibattiti su quanto debba contare ciascuna prova. Per questo abbiamo costruito un piccolo calcolatore. Sei tu a decidere quanto ciascun elemento punta in una direzione o nell'altra, e il calcolatore ti mostra dove portano i tuoi giudizi, messi insieme.</p>
<p>Non ti dirà la risposta. Ti mostrerà da quali presupposti dipende la tua risposta.</p>`,
      weighCta: "Apri il calcolatore",
      quote: "Se io non vedo nelle sue mani il segno de’ chiodi ... io non crederò.",
      quoteCite: "Tommaso, in Giovanni 20,25",
      freeH: "Perché non è una prova",
      freeText: `<p>Se Dio volesse costringere a credere, potrebbe farlo. Un segno che non lasciasse spazio al dubbio non lascerebbe spazio nemmeno alla scelta. La Sindone fa qualcosa di più discreto: dà a una mente seria abbastanza elementi per prendere sul serio la domanda, e lascia a te l'ultimo passo.</p>
<p>Il video di Truthly che abbiamo verificato si chiude su questa idea, e pensiamo che sia il punto giusto in cui chiudere. Tommaso poté vedere i segni. La risposta che ricevette riguardava tutti quelli che vengono dopo di lui.</p>`,
      freeQuote: "Beati quelli che non han veduto, e hanno creduto!",
      freeCite: "Gesù a Tommaso, Giovanni 20,29",
      faqH: "Le domande più comuni",
      faq: [
        { q: "La Sindone di Torino è vera?", a: "È un vero telo di lino, molto antico. Se sia il telo funerario di Gesù è controverso. La datazione al carbonio del 1988 l'ha collocata tra il 1260 e il 1390 d.C. Molti ricercatori contestano quel risultato, e nessun metodo ha ancora riprodotto tutte insieme le proprietà dell'immagine. Questo sito presenta entrambe le parti, con le fonti." },
        { q: "Che cosa ha trovato la datazione al carbonio?", a: "Nel 1988 i laboratori di Arizona, Oxford e Zurigo datarono campioni presi da un angolo e riportarono un intervallo dal 1260 al 1390 d.C. con una confidenza del 95% (Damon e altri, Nature, 1989). I critici sostengono che l'angolo potrebbe essere stato rammendato, e una rianalisi dei dati grezzi del 2019 ha trovato che i campioni non erano coerenti quanto era stato riferito." },
        { q: "L'immagine è dipinta?", a: "La squadra scientifica del 1978 (STURP) concluse che non è un dipinto: non trovò pigmenti che formassero l'immagine, né pennellate, né leganti. Il microscopista Walter McCrone non era d'accordo e riferì ossido di ferro e altri materiali. La maggior parte degli studi successivi ha dato ragione allo STURP sull'immagine, pur riconoscendo che sul telo sono presenti minuscole particelle di molti materiali." },
        { q: "Perché l'immagine è un negativo?", a: "Sul telo chiari e scuri sono invertiti rispetto a una normale immagine, quindi un suo negativo fotografico sembra un ritratto naturale. Lo scoprì Secondo Pia nel 1898. Gli scettici fanno notare che anche le immagini ottenute per contatto con un rilievo sono invertite." },
        { q: "Che cosa dice la Chiesa cattolica?", a: "La Chiesa non ha mai dichiarato ufficialmente autentica la Sindone e non chiede a nessuno di crederlo. I papi recenti l'hanno definita un'icona della sofferenza di Cristo e hanno pregato davanti a essa. La Santa Sede ne è proprietaria dal 1983, e l'arcivescovo di Torino ne è il custode." },
        { q: "Posso vederla di persona?", a: "È conservata nel Duomo di San Giovanni Battista a Torino, in una teca a clima controllato, e di solito non è esposta al pubblico. Viene mostrata durante rare ostensioni pubbliche, come quelle del 2010 e del 2015, e in una diretta televisiva del 2020." }
      ],
      pathsH: "Dove andare adesso",
      paths: [
        { slug: 'evidence', h: "Se ne dubiti", t: "Comincia dal fascicolo. Ogni argomento, a favore e contro, valutato per forza." },
        { slug: 'explore', h: "Se vuoi vederla", t: "Ingrandisci il telo intero, passa al negativo e trova ogni segno." },
        { slug: 'library', h: "Se vuoi approfondire", t: "Centinaia di articoli e studi, consultabili, con i link agli originali." },
        { slug: 'next', h: "Se ti chiedi che cosa fare adesso", t: "Passi successivi onesti, che tu dubiti, ti interroghi o creda." }
      ]
    },

    explore: {
      title: "Esplora la Sindone di Torino: vista interattiva in alta risoluzione | See The Shroud",
      description: "Vista interattiva della Sindone di Torino intera: ingrandisci, passa al negativo, migliora l'immagine e trova ogni ferita, bruciatura e toppa, con spiegazioni.",
      h1: "Esplora il telo",
      lede: "Questa è la Sindone intera, immagine frontale e dorsale, testa contro testa. Trascina per spostarti, scorri o pizzica per ingrandire. Passa al negativo per vedere ciò che vide Secondo Pia nel 1898. I segni numerati spiegano ciò che stai guardando.",
      imgAlt: "La Sindone di Torino intera, immagine frontale e dorsale",
      ui: { tools: "Strumenti di visualizzazione", negative: "Negativo", enhance: "Migliora", layerWounds: "Ferite", layerDamage: "Fuoco e acqua", layerLinen: "Il lino", tour: "Visita guidata", fit: "Telo intero", zoomIn: "Ingrandisci", zoomOut: "Riduci", help: "Trascina per spostarti. Scorri o pizzica per ingrandire. Premi N per il negativo.", close: "Chiudi", prev: "Precedente", next: "Successivo", more: "Leggi di più", skeptic: "La risposta dello scettico" },
      reliefH: "L'immagine in 3D",
      reliefText: `<p>Se trasformi in altezza la luminosità di una fotografia normale, ottieni un groviglio distorto: il naso sprofonda, le ombre si sollevano, lo sfondo si gonfia. Se fai lo stesso con la Sindone, ottieni un volto e un corpo coerenti. Confrontali con i tuoi occhi. Entrambe le viste qui sotto usano esattamente lo stesso metodo.</p>`,
      reliefFaceAlt: "Rilievo 3D del volto della Sindone", reliefFaceCap: "Il volto della Sindone, con la luminosità trasformata in altezza.",
      reliefPaintAlt: "Rilievo 3D di un volto dipinto, ottenuto con lo stesso metodo", reliefPaintCap: "Un volto dipinto, con lo stesso metodo: non contiene informazioni 3D utili. Dipinto: Testa di Cristo.",
      reliefBodyAlt: "Rilievo 3D dell'intera immagine frontale della Sindone", reliefBodyCap: "L'intera immagine frontale in rilievo. Ruotala per vedere la forma del corpo.",
      reliefSkeptic: "Un avvertimento onesto: le nostre viste 3D sono una semplice ricostruzione dell'idea del VP-8, levigata per il web. Mostrano il principio. Non sono una misura scientifica.",
      photosH: "Queste fotografie",
      photosText: `<p>Le immagini del telo intero qui presenti sono fotografie di pubblico dominio. Le migliori fotografie della Sindone, scattate da Vernon Miller e Barrie Schwortz per la squadra scientifica del 1978, e le immagini ad altissima risoluzione del 2002 e del 2008 sono protette dal diritto d'autore. Molte si possono vedere su <a href="https://www.shroud.com/" target="_blank" rel="noopener">shroud.com</a> e <a href="https://shroudphotos.com/" target="_blank" rel="noopener">shroudphotos.com</a>. Stiamo chiedendo il permesso di mostrarle qui.</p>`
    },

    evidence: {
      title: "Sindone di Torino: autentica o falsa? Le prove a favore e contro | See The Shroud",
      description: "La Sindone di Torino è autentica o un falso? I principali argomenti a favore e contro, valutati per forza, con la migliore risposta scettica e le fonti.",
      h1: "Il fascicolo",
      lede: "Tutti i principali argomenti sulla Sindone, a favore e contro. Ognuno è valutato in base alla sua forza, con l'obiezione migliore, la replica migliore e le fonti. Presentiamo gli argomenti contro l'autenticità con tutta la loro forza, perché è giusto che tu li senta prima da noi.",
      counts: "{n} reperti: {f} a favore dell'autenticità, {a} a favore di un'origine medievale.",
      method: "Come valutiamo: Forte significa che i fatti sono ben documentati e la conclusione è difficile da evitare. Moderata significa prove reali con un'obiezione fondata. Debole significa, al massimo, un indizio. Contestata significa che ricercatori seri non concordano sui fatti stessi. Smentita significa che non dovrebbe essere usata. Valutiamo le affermazioni di entrambe le parti con le stesse regole.",
      filterLean: "Filtra per direzione", filterCat: "Filtra per argomento",
      weighH: "Valuta tu",
      weighText: `<p>Parti dalla tua probabilità iniziale: prima di qualsiasi prova, quanto è probabile che un telo come questo sia il vero telo funerario di Gesù? Poi, per ogni elemento, decidi quanto sarebbe più probabile osservare quella prova se il telo fosse autentico rispetto a se fosse un'opera medievale. Sposta un cursore a destra se la prova si adatta meglio all'autenticità, a sinistra se si adatta meglio a un'origine medievale.</p>
<p>È la regola di Bayes, il modo standard di combinare le prove. Prova le impostazioni dello scettico e del credente per vedere quanto lontano possono partire due persone ragionevoli, e dove le spostano le prove.</p>`,
      wui: {
        neutral: "Torna a neutro", skeptic: "Le impostazioni di uno scettico", believer: "Le impostazioni di un credente",
        prior: "Il tuo punto di partenza (probabilità a priori)", priorHelp: "La maggior parte delle reliquie medievali non era ciò che diceva di essere, quindi un punto di partenza basso è ragionevole.",
        result: "Il tuo risultato: probabilità che il telo sia autentico", medieval: "Medievale", authentic: "Autentico",
        noEffect: "Nessun effetto",
        favorsA: "{x} volte più probabile se autentico", favorsM: "{x} volte più probabile se medievale",
        oddsFor: "Rapporto di probabilità: {x} a 1 a favore dell'autenticità", oddsAgainst: "Rapporto di probabilità: 1 su {x}",
        caveat: "Questo calcolo tratta ogni elemento come indipendente, il che è una semplificazione. Alcuni elementi sono collegati: per esempio, diversi dipendono dalle stesse fotografie. Il calcolatore mostra come si combinano i tuoi giudizi. Non li sostituisce."
      }
    },

    wounds: {
      title: "Le ferite sulla Sindone di Torino e i Vangeli | See The Shroud",
      description: "Ogni ferita sulla Sindone di Torino, dai segni del flagello al chiodo nel polso e alla ferita al costato, mostrata sul telo accanto al testo del Vangelo.",
      h1: "Le ferite, e che cosa dicono i Vangeli",
      lede: "Clicca su un numero sul telo o su una ferita nell'elenco. Ogni segno è spiegato come lo descrivono i medici legali, accanto al versetto del Vangelo a cui corrisponde, con la nota dello scettico dove c'è.",
      front: "Fronte", back: "Retro", alt_front: "Immagine frontale dell'uomo della Sindone, vista in negativo", alt_back: "Immagine dorsale dell'uomo della Sindone, vista in negativo",
      figNote: "Le posizioni sono approssimative. Vista in negativo, in cui le macchie di sangue appaiono chiare.",
      breath: {
        alt: "Schema di un crocifisso che passa dall'accasciarsi al sollevarsi per respirare",
        h: "Perché il sangue sulle braccia scorre in due direzioni",
        text: `<p>Sugli avambracci, sottili rivoli di sangue scorrono con due angoli leggermente diversi, a circa dieci gradi l'uno dall'altro. Medici legali come Robert Bucklin lo interpretano come il segno di braccia tenute in due posizioni mentre il sangue scorreva.</p>
<p>Questo corrisponde al modo in cui uccide la crocifissione. Restare appesi per le braccia rende difficile espirare, quindi la vittima deve spingersi in alto sui piedi inchiodati per ogni respiro, e poi accasciarsi di nuovo. Il sangue scorre sempre dritto verso il basso, quindi quando le braccia cambiano angolo, la traccia sulla pelle cambia direzione. Premi il pulsante per vederlo.</p>`,
        up: "Sollevati per respirare", down: "Accasciati",
        skeptic: "La migliore risposta dello scettico: uno studio del 2018 sulle macchie di sangue di Matteo Borrini e Luigi Garlaschelli, con un volontario e vere colature di sangue, ha trovato che le tracce sugli avambracci richiedono posizioni delle braccia diverse da un'unica posa da crocifisso, e ha giudicato irrealistiche alcune colature. I sostenitori rispondono che un corpo che si è mosso per ore lascerebbe proprio tracce così varie."
      },
      intro: "<p>Una crocifissione romana era un'esecuzione pubblica pensata per umiliare. I Vangeli descrivono con dettagli semplici quella che qui ci interessa. Il telo registra un'esecuzione con le stesse caratteristiche, comprese alcune che l'arte medievale rappresentava in modo sbagliato.</p>",
      after: `<h2>Perché è importante</h2>
<p>Un falsario del Trecento avrebbe dovuto conoscere dettagli che la sua cultura non conosceva o non mostrava: che i chiodi passavano per il polso, che un flagrum romano lasciava segni a forma di manubrio, che il sangue di un corpo morto si separa in coagulo e siero. Gli scettici rispondono che alcuni di questi dettagli sono contestati, e che le macchie di sangue stesse sono state studiate con risultati contrastanti. Entrambe le parti sono nel <a href="evidence.html">fascicolo</a>.</p>`
    },

    dating: {
      title: "Datazione al carbonio della Sindone di Torino e il dibattito | See The Shroud",
      description: "La datazione al radiocarbonio della Sindone di Torino del 1988 diede 1260-1390 d.C. Le 12 misure, l'origine del campione, le rianalisi e gli altri metodi.",
      h1: "La datazione al carbonio",
      lede: "È il singolo argomento più forte a favore dell'origine medievale della Sindone, e merita un esame attento. Ecco che cosa fu fatto, che cosa si trovò, che cosa hanno trovato i critici in seguito, e che cosa dimostra e non dimostra.",
      compareH: "Tutte le date mai proposte, su una sola linea",
      chartNote: "In rosso: il risultato al radiocarbonio del 1988 con una confidenza del 95%. Tratteggio verde: altri metodi, tutti applicati a fibre sciolte di origine incerta e nessuno dei quali è una tecnica di datazione consolidata. Il cerchio indica lo studio a raggi X, che confrontò un filo con un lino del I secolo e non produsse un intervallo di date. Passa sopra o tocca una barra per i dettagli.",
      labsH: "Le dodici misure dietro la data",
      labsText: "Ogni linea è una misura pubblicata, con l'errore dichiarato. La fascia ombreggiata è la media ponderata, 689 più o meno 16 anni radiocarbonici. Poiché i risultati erano troppo dispersi, la data pubblicata usò una media semplice con un errore più ampio, 691 più o meno 31. Nota come Oxford si discosta dall'Arizona. È proprio questa dispersione che gli statistici hanno messo in dubbio in seguito.",
      body: `<h2>Che cosa fu fatto</h2>
<p>Il 21 aprile 1988, nella sacrestia del Duomo di Torino, Giovanni Riggi tagliò una sola striscia da un angolo del telo, sul bordo vicino ai piedi dell'immagine frontale, appena sopra il punto in cui era stato prelevato un campione nel 1973. Erano presenti gli esperti tessili Franco Testore e Gabriel Vial e i rappresentanti dei tre laboratori. Pezzi di circa 50 milligrammi andarono a tre laboratori che usavano la spettrometria di massa con acceleratore: l'Università dell'Arizona, l'Università di Oxford e il Politecnico federale di Zurigo (ETH). Ogni laboratorio ricevette anche tre campioni di controllo di età nota. Il test non fu cieco: l'armatura insolita della Sindone rendeva il suo campione facile da riconoscere, e gli autori dissero di aver rinunciato alle procedure alla cieca.</p>
<p>I controlli diedero risultati corretti: un lino da una tomba nubiana, un lino da una mummia del II secolo e fili di un piviale del XIII secolo furono tutti datati correttamente. Le medie dei tre laboratori furono poi mediate con lo stesso peso: 691 anni radiocarbonici prima del 1950, più o meno 31. Gli autori usarono questo errore più ampio perché i risultati erano più dispersi di quanto consentissero le barre d'errore dei laboratori stessi. Convertito in anni di calendario, il risultato è dal 1262 al 1312 d.C. o dal 1353 al 1384 d.C., pubblicato arrotondato come 1260-1390 d.C. L'articolo su Nature, firmato da 21 scienziati, lo definì una prova conclusiva che il lino è medievale.</p>
<h2>Perché conta così tanto</h2>
<p>La datazione al radiocarbonio è un metodo maturo e ben collaudato. I controlli funzionarono. E la data cade esattamente dove comincia la storia documentata: il telo compare a Lirey, in Francia, negli anni Cinquanta del Trecento, e un vescovo scrisse nel 1389 che un artista aveva confessato di averlo dipinto. Per molti scienziati, questa coincidenza chiuse il caso.</p>`,
      sampleH: "Una striscia, un angolo",
      sampleText: `<p>Tutti i risultati vennero da una sola striscia, lunga circa 7-8 centimetri, tagliata da un angolo. Si pensa che quell'angolo sia stato maneggiato per secoli durante le ostensioni pubbliche, e si trova accanto alla cucitura della striscia laterale. Alcuni ricercatori hanno sostenuto che sia stato rammendato nel Medioevo. Un incontro di lavoro tenuto a Torino nel 1986 aveva proposto sette laboratori con due metodi diversi. Nel 1987 si scese a tre laboratori, tutti con lo stesso metodo, e nel 1988 a una sola striscia da un solo angolo.</p>
<p>I critici dicono che un solo angolo non può rappresentare un telo di 4,4 metri. Chi difende la data risponde che i laboratori esaminarono il campione al microscopio e che sembrava uguale al telo principale. Nel 2010 un frammento avanzato in Arizona non mostrò coloranti né rivestimenti, e solo poche fibre di cotone isolate. Nel 2026 gli stessi ricercatori dell'Arizona hanno riferito che due frammenti avanzati corrispondono al telo principale e non mostrano contaminazioni.</p>`,
      sampleAlt: "L'angolo della Sindone dove fu tagliato il campione del 1988", sampleCap: "L'angolo del campione (posizione approssimativa), all'estremità dei piedi dell'immagine frontale. Fotografia di Enrie del 1931.",
      debateH: "Perché i critici la mettono in dubbio",
      defenseH: "Perché resta l'argomento contrario più forte",
      debateFor: `<p>I risultati non concordano tra loro quanto dichiaravano le barre d'errore. L'articolo del 1989 lo ammetteva: le medie dei tre laboratori non superano un test di coerenza standard, con un valore del chi quadrato di 6,4, appena oltre la soglia del 5%. L'articolo allargò il proprio errore, ma definì comunque il risultato conclusivo. Nel 2017 i dati grezzi furono resi pubblici dopo una richiesta legale, e nel 2019 un gruppo guidato da Tristan Casabianca pubblicò una rianalisi su Archaeometry. Il loro test di coerenza diede 15,99 contro un valore critico di 5,99, e conclusero che i campioni non erano omogenei.</p>
<p>Lo statistico Marco Riani e i suoi colleghi (2013) trovarono che l'età misurata varia lungo la striscia, come se qualcosa cambiasse attraverso il campione. Altri ricercatori hanno ipotizzato un rammendo medievale, una contaminazione o i danni dell'incendio del 1532.</p>`,
      debateAgainst: `<p>Nessuna di queste critiche indica il I secolo. Tra le rianalisi statistiche dei dati del 1988, lo spostamento più grande proposto è di 88 anni radiocarbonici (Walsh e Schwalbe, 2020), che lascia comunque il telo nel Medioevo. Ogni meccanismo specifico proposto per spiegare la data, come l'incendio, i batteri, il monossido di carbonio o un lampo di neutroni, o ha fallito un test o non si può verificare.</p>
<p>La teoria del rammendo, un tempo popolare, è più debole di quanto fosse nel 2005: i frammenti avanzati studiati nel 2010 e nel 2026 non mostravano coloranti né rivestimenti e corrispondevano al telo principale. In breve, le rianalisi mostrano che il test del 1988 fu più ridotto e meno pulito di quanto dichiarasse. Non mostrano che la data sia sbagliata.</p>`,
      verdict: `<h2>La nostra sintesi onesta</h2>
<p>La data al radiocarbonio dice medievale, ed è la singola prova migliore di cui chiunque disponga. Il test del 1988 ebbe anche veri difetti di impostazione: una striscia, un angolo, tre laboratori e risultati che non concordano tra loro così bene come fu riferito. Questo giustifica un nuovo test, con più campioni da più punti del telo, condotto in modo trasparente. Non giustifica il fatto di ignorare il risultato.</p>
<p>Se sei scettico, questa è la tua carta più forte, e fai bene a tenertela. Se credi che il telo sia autentico, questa è la domanda a cui devi rispondere con onestà. In entrambi i casi, il resto delle prove va comunque spiegato, a cominciare da <a href="image.html">come è stata prodotta l'immagine</a>.</p>`
    },

    image: {
      title: "Come si è formata l'immagine della Sindone di Torino? | See The Shroud",
      description: "Tutte le ipotesi sull'immagine della Sindone di Torino, dalla pittura alla bruciatura fino a un lampo di luce, con ciò che spiegano e dove falliscono.",
      h1: "Come si è formata l'immagine?",
      lede: "È la questione aperta più profonda sulla Sindone. Qualsiasi spiegazione, naturale o no, deve rendere conto di un elenco di proprietà molto strane. Eccole, seguite da tutte le principali ipotesi e dai loro problemi.",
      propsH: "Ciò di cui ogni spiegazione deve rendere conto",
      propsLede: "Sono le proprietà riferite dalle squadre scientifiche che hanno studiato direttamente il telo. Alcune sono contestate nei dettagli. Insieme, sono il motivo per cui nessuno ha riprodotto l'immagine sotto ogni aspetto.",
      hypH: "Le ipotesi",
      hypLede: "Ordinate, a grandi linee, dalla più naturale alla meno naturale. Ciascuna è valutata in base a quanto si adatta alle proprietà elencate sopra.",
      props: [
        { n: "0,2 µm", t: "Il colore si trova solo sullo strato più esterno delle fibre superiori, secondo Rogers e Fanti. Un capello è spesso circa 70 µm." },
        { n: "Niente pittura", t: "Nessun pigmento, legante o pennellata forma l'immagine, secondo la squadra del 1978." },
        { n: "Negativo", t: "Chiari e scuri sono invertiti, quindi il negativo fotografico appare naturale." },
        { n: "3D", t: "L'intensità dell'immagine segue la distanza tra telo e corpo, quindi può essere trasformata in un rilievo." },
        { n: "Prima il sangue?", t: "I test non hanno trovato immagine del corpo sotto le macchie di sangue, e la maggior parte dei ricercatori lo interpreta così: prima il sangue, poi l'immagine. Un articolo del 2026 sostiene che questo non stabilisce l'ordine." },
        { n: "Niente fluorescenza", t: "Alla luce ultravioletta le bruciature del 1532 emettono fluorescenza e l'immagine del corpo no. Non è una semplice bruciatura." },
        { n: "Anche senza contatto", t: "Alcune zone dell'immagine non toccavano il corpo, come tra il naso e la guancia. Non è solo un'impronta da contatto." },
        { n: "Mezzitoni", t: "Ogni fibra dell'immagine è colorata oppure no. Le zone più scure hanno semplicemente più fibre colorate, come una foto di giornale." }
      ],
      hypotheses: [
        { kind: "Arte", name: "Un dipinto", strength: 'weak',
          text: "Il microscopista Walter McCrone riferì ocra rossa (ossido di ferro) su fibre dell'immagine e del sangue e vermiglione su fibre del sangue. Nel 1980 concluse che un artista medievale aveva dipinto l'immagine intorno al 1355 con una pittura molto diluita in un legante di gelatina.",
          problems: "La squadra dello STURP, usando la fluorescenza a raggi X, la spettroscopia e la chimica direttamente sul telo, non trovò pigmenti che formassero l'immagine né leganti, e concluse che non è un dipinto. La pittura penetrerebbe tra i fili; l'immagine no. Sul telo esistono particelle di molti materiali, plausibilmente lasciate da artisti che vi premevano copie dei loro dipinti, come si fece per secoli.",
          sources: [{ label: "Schwalbe e Rogers 1982, Analytica Chimica Acta", url: 'https://shroud.com/pdfs/Physics%20Chemistry%20of%20Shroud%20Schwalbe%20Rogers%201981%20OCRsm.pdf' }, { label: "Sintesi finale dello STURP, 1981", url: 'https://www.shroud.com/78conclu.htm' }] },
        { kind: "Calore", name: "Una bruciatura da una statua riscaldata", strength: 'weak',
          text: "Una statua o un rilievo di metallo, riscaldati e coperti dal telo, lascerebbero una bruciatura brunastra, con i toni invertiti e qualche informazione di profondità.",
          problems: "Le bruciature emettono una fluorescenza rossastra alla luce ultravioletta. Le vere bruciature dell'incendio del 1532 la emettono, l'immagine del corpo no. Un oggetto caldo brucerebbe anche attraverso il telo e non potrebbe colorare le zone che non toccava.",
          sources: [{ label: "Sintesi finale dello STURP, 1981", url: 'https://www.shroud.com/78conclu.htm' }] },
        { kind: "Contatto", name: "Polvere o acido sfregati su un rilievo", strength: 'disputed',
          text: "Intorno al 1980 l'investigatore Joe Nickell ottenne l'immagine di un volto tamponando polvere su un lino bagnato modellato su un bassorilievo. Nel 2009 il chimico Luigi Garlaschelli realizzò un'immagine a grandezza naturale sfregando un pigmento acido su un lino steso su un volontario e su un bassorilievo, poi cuocendo e lavando il telo. I risultati sono negativi e contengono qualche informazione 3D. Nel 2025 Cicero Moraes ha sostenuto con una simulazione 3D che l'immagine corrisponde meglio a un bassorilievo che a un corpo intero.",
          problems: "I sostenitori dell'autenticità rispondono che queste copie sono visibili a occhio nudo in un modo in cui la Sindone non lo è, che il loro colore penetra nelle fibre invece di restare negli 0,2 µm più esterni, che lasciano materiale e che non spiegano perché il sangue sia venuto prima. Chi sostiene l'idea dello sfregamento replica che l'invecchiamento e i lavaggi nei secoli potrebbero colmare in parte questa distanza.",
          sources: [{ label: "Garlaschelli 2010, Journal of Imaging Science and Technology", url: 'https://doi.org/10.2352/J.ImagingSci.Technol.2010.54.4.040301' }, { label: "Wikipedia: Shroud of Turin, analisi dell'immagine", url: 'https://en.wikipedia.org/wiki/Shroud_of_Turin' }] },
        { kind: "Ottica", name: "Protofotografia medievale", strength: 'weak',
          text: "Lo storico dell'arte Nicholas Allen propose negli anni Novanta che una bottega medievale avesse usato una camera oscura con una lente di quarzo e un lino trattato con sali d'argento per «fotografare» un cadavere o una statua.",
          problems: "Non esiste alcuna testimonianza storica di una simile tecnologia per altri 450 anni, nessuno ha riferito tracce d'argento nell'immagine, e una fotografia non codificherebbe la distanza tra telo e corpo come fa la Sindone.",
          sources: [{ label: "Wikipedia: Shroud of Turin", url: 'https://en.wikipedia.org/wiki/Shroud_of_Turin' }] },
        { kind: "Chimica", name: "Una reazione naturale con i gas di un corpo", strength: 'disputed',
          text: "Il chimico Raymond Rogers, membro dello STURP, propose una reazione di Maillard: i gas rilasciati da un cadavere reagiscono con un sottile strato di residui di amido e zuccheri lasciati sul lino dagli antichi metodi di tessitura, producendo un debole colore giallo solo in superficie.",
          problems: "Questo spiegherebbe la superficialità e l'assenza di pittura. Fatica a spiegare la nitidezza e la precisa codifica della distanza, perché i gas si diffondono in tutte le direzioni, e richiede che il corpo abbia lasciato il telo prima che si formassero macchie di decomposizione. Nessuno ha prodotto un'immagine intera in questo modo.",
          sources: [{ label: "Rogers e Arnoldi 2003, Melanoidins", url: 'https://shroud.com/pdfs/rogers7.pdf' }] },
        { kind: "Fisica", name: "Un breve lampo di radiazione", strength: 'disputed',
          text: "Diversi fisici ipotizzano che l'immagine sia stata causata da un breve e intenso rilascio di energia dal corpo. Gli scienziati dell'ENEA hanno colorato il lino con impulsi laser ultravioletti in un modo vicino a quello della Sindone. Giulio Fanti ha proposto una scarica a effetto corona. John Jackson ha proposto che il telo sia collassato attraverso il corpo mentre questo diventava meccanicamente «trasparente», registrando l'immagine mentre cadeva.",
          problems: "Non è nota alcuna sorgente naturale di una simile radiazione da un corpo umano. Le stime dell'energia sono enormi. Gli esperimenti con il laser hanno colorato solo piccoli campioni, non un'immagine. Gli scettici fanno notare che un'ipotesi che richiede un miracolo non si può verificare come una naturale. I sostenitori rispondono che è proprio per questo che resta sul tavolo.",
          sources: [{ label: "Di Lazzaro e altri 2012, Applied Optics", url: 'https://doi.org/10.1364/AO.51.008567' }, { label: "Di Lazzaro e altri 2010, workshop ENEA", url: 'https://www.sindone.info/DILAZZA1.PDF' }, { label: "Jackson 1990, Shroud Spectrum International", url: 'https://shroud.com/pdfs/ssi34part3.pdf' }] }
      ],
      emText: `<p>L'animazione qui sopra mostra l'ipotesi che molti trovano più convincente: un lampo di luce dal corpo, che viaggia dritto verso l'alto e verso il basso e colora solo la superficie delle fibre, seguito dal telo che ricade attraverso il corpo. L'abbiamo realizzata per aiutarti a immaginare l'idea. È l'immagine di un'ipotesi, non la ricostruzione di un evento e non una prova a suo favore.</p>
<p>Un buon test per qualsiasi spiegazione, naturale o soprannaturale, è se renda conto di tutte e otto le proprietà in cima a questa pagina insieme. Finora nessuna ha dimostrato in laboratorio di riuscirci.</p>`,
      enea: `<h3>Gli esperimenti laser dell'ENEA</h3>
<p>Dal 2005 al 2010, un gruppo guidato da Paolo Di Lazzaro all'ENEA di Frascati ha colpito il lino con impulsi ultrabrevi di luce ultravioletta. In un intervallo ristretto di impostazioni, il lino ha assunto un colore giallo paglia simile a quello della Sindone. Impulsi più lunghi o più forti bruciavano il lino, e quelli più deboli non lasciavano alcun colore visibile finché il tessuto non veniva invecchiato. Di solito il colore penetrava per diversi micrometri. In almeno una fibra è rimasto nella parete esterna di 0,2 µm, come sulla Sindone.</p>
<p>Con un calcolo approssimativo, hanno moltiplicato l'intensità del laser che funzionava per la superficie di un corpo umano. Il risultato, circa 34.000 miliardi di watt, è molto superiore a ciò che può fornire qualsiasi sorgente ultravioletta costruita finora. È una stima di massima per farlo con un solo impulso, non una misura di come l'immagine sia stata prodotta. Gli autori hanno scritto che «nessuno può affermare» che l'immagine del corpo sia stata prodotta da una serie di lampi ultravioletti, e che il modo in cui si è formata è ancora sconosciuto. Ciò che hanno mostrato è che questo tipo di colorazione sottile è estremamente difficile da ottenere in assoluto.</p>`,
      emH: "L'ipotesi della luce, visualizzata",
      zoomH: "Quanto è sottile l'immagine?",
      zoomLede: "Usa il cursore per passare dal telo intero a una singola fibra. È la proprietà che mette in crisi la maggior parte delle spiegazioni.",
      gridH: "Metti alla prova ogni spiegazione",
      gridLede: "Ecco le sei idee principali confrontate con le proprietà qui sopra, più un'ultima domanda: qualcuno ha mai prodotto un'immagine intera in questo modo?"
    },

    timeline: {
      title: "Cronologia della Sindone di Torino: da Lirey a oggi | See The Shroud",
      description: "Cronologia interattiva della Sindone di Torino: la storia antica ipotizzata, la documentazione dal 1354 circa, gli incendi, le foto e i test scientifici.",
      h1: "Cronologia",
      lede: "La storia documentata della Sindone comincia in Francia intorno al 1354. Prima di allora, la sua storia è un'ipotesi, costruita su immagini e testi che potrebbero descrivere o non descrivere questo telo. La cronologia tiene separate le due cose.",
      tracks: { cloth: "Il telo", science: "Scienza", church: "Chiesa", world: "Mondo" },
      legend: { cloth: "Evento documentato", science: "Studio scientifico", hyp: "Ipotizzato o leggendario" },
      cert: { documented: "Documentato", probable: "Probabile", hypothesized: "Ipotizzato", legendary: "Leggenda" },
      listH: "Tutti gli eventi",
      icon: { h: "Il volto e un'icona del VI secolo",
        altShroud: "Il volto della Sindone, vista in negativo", altIcon: "Icona del Cristo Pantocratore, Monastero di Santa Caterina, Sinai, VI secolo",
        shroud: "Sindone", iconLabel: "Icona del Sinai",
        text: `<p>È la più antica icona superstite del Cristo Pantocratore, dipinta nel VI secolo e conservata nel Monastero di Santa Caterina, nel Sinai. Scorri tra l'icona e il volto della Sindone. Entrambi sono in scala in modo che gli occhi siano allineati.</p>
<p>Chi sostiene una storia antica indica caratteristiche comuni: il naso lungo, la barba biforcuta, gli occhi dalle palpebre pesanti e le guance asimmetriche. Negli anni Trenta Paul Vignon elencò piccole stranezze che secondo lui gli artisti bizantini avevano copiato dal telo, come una forma quadrata tra le sopracciglia.</p>`,
        skeptic: "La risposta dello scettico: la somiglianza non può dire che cosa sia venuto prima. Un artista del XIV secolo che realizzava un telo funerario di Gesù avrebbe copiato il volto che le icone avevano reso canonico. La somiglianza è compatibile con una Sindone antica, e allo stesso modo con una Sindone fatta per somigliare alle icone." },
      map: { h: "Dove è stato il telo", alt: "Mappa dei percorsi documentati e ipotizzati della Sindone, da Gerusalemme a Torino",
        keyDoc: "Documentato", keyHyp: "Ipotizzato",
        jerusalem: "Gerusalemme, 30 d.C.?", edessa: "Edessa (Urfa), VI-X sec.?", constantinople: "Costantinopoli, 944-1204?", athens: "Atene, dopo il 1204?",
        lirey: "Lirey, 1354 circa", chambery: "Chambéry, 1502-1578", turin: "Torino, dal 1578",
        caption: "Le linee continue sono documentate. Il percorso tratteggiato è un'ipotesi, soprattutto dello storico Ian Wilson, che identifica la Sindone con l'Immagine di Edessa (il Mandylion). La maggior parte degli storici non accetta questa identificazione. Tra il 1453 e il 1578 il telo viaggiò anche con i Savoia, quindi il vero percorso documentato ha più tappe di quelle mostrate." }
    },

    videos: {
      title: "Video sulla Sindone di Torino: affermazioni verificate | See The Shroud",
      description: "Tre video popolari sulla Sindone di Torino, verificati affermazione per affermazione: che cosa regge, che cosa è contestato e che cosa è sbagliato.",
      h1: "Video popolari, verificati",
      lede: "La maggior parte delle persone conosce la Sindone attraverso i video. Ne abbiamo guardati tre molto popolari dall'inizio alla fine, comprese le trascrizioni, e ne abbiamo verificato le affermazioni principali. Diverse sono eccellenti. Alcune sono sbagliate. Clicca su un orario per saltare a quel momento.",
      play: "Riproduci il video (carica YouTube)", watch: "Guarda su YouTube",
      rate: { strong: "Regge", disputed: "Contestata", weak: "Sbagliata o esagerata" },
      missingH: "Ciò che nessuno dei tre menziona",
      missingAfter: `Un'argomentazione onesta deve fare i conti anche con questi punti. Li trovi tutti nel <a href="evidence.html">fascicolo</a>.`
    },
    library: {
      title: "Biblioteca di ricerca sulla Sindone di Torino | See The Shroud",
      description: "Biblioteca consultabile di articoli e studi sulla Sindone di Torino, a favore e contro, con link diretti agli originali su shroud.com e sulle riviste.",
      h1: "Biblioteca",
      lede: "Più di 2.400 articoli, studi, testi e notiziari, quasi tutti dall'archivio di shroud.com, che Barrie Schwortz creò e curò dagli anni Novanta fino alla sua morte nel 2024. Comincia dalle 25 letture chiave, poi cerca per parola, filtra per argomento e vai direttamente all'originale.",
      keyH: "Comincia da qui: 25 letture chiave, da entrambe le parti", keyLede: "Scelte perché un lettore scettico incontri il lavoro più solido di ciascuna parte, più o meno nell'ordine in cui si è svolto il dibattito.", allH: "La biblioteca completa",
      search: "Cerca per titolo, autore e rivista",
      count: "articoli visualizzati",
      peer: "Con revisione paritaria",
      topics: { radiocarbon: "Datazione al carbonio", blood: "Sangue", 'image-formation': "Formazione dell'immagine", history: "Storia", textile: "Il lino", 'anatomy-medical': "Medicina", 'pollen-botany': "Pollini e piante", 'photography-imaging': "Fotografia", '3d-vp8': "3D", coins: "Monete", sudarium: "Sudario", 'art-history': "Storia dell'arte", critique: "Critiche", overview: "Panoramiche", conference: "Convegni" },
      stances: { 'pro-authenticity': "A favore dell'autenticità", skeptical: "Scettico", neutral: "Neutrale" },
      more: `<h2>In memoria di Barrie M. Schwortz (1946-2024)</h2>
<p>Barrie Schwortz fu il fotografo ufficiale di documentazione dello Shroud of Turin Research Project del 1978. Era ebreo, partì da scettico e dedicò il resto della sua vita a rendere la ricerca disponibile a tutti, gratuitamente, su shroud.com. Gran parte di questa biblioteca esiste perché lui l'ha conservata. Dedichiamo a lui questa pagina.</p>
<p>Vuoi andare oltre? L'<a href="https://www.shroud.com/" target="_blank" rel="noopener">archivio di shroud.com</a>, il sito ufficiale dell'<a href="https://www.sindone.org/" target="_blank" rel="noopener">Arcidiocesi di Torino</a> e la voce <a href="https://en.wikipedia.org/wiki/Shroud_of_Turin" target="_blank" rel="noopener">Shroud of Turin</a> della Wikipedia in inglese, che tende allo scetticismo ed è un buon banco di prova per le tue conclusioni.</p>`
    },

    next: {
      title: "E adesso? Dopo la Sindone di Torino | See The Shroud",
      description: "E adesso, dopo la Sindone di Torino? Hai visto le prove. Che tu dubiti, ti interroghi o creda, ecco alcuni passi successivi onesti per continuare.",
      h1: "E adesso?",
      lede: "Qualunque sia la tua conclusione dopo aver esaminato le prove, c'è un passo successivo sensato. Nessuno di questi passi ti chiede di fingere più certezza di quella che hai.",
      paths: [
        { id: 'doubt', h: "Se dubiti ancora", body: `<p>Bene. Un dubbio che continua a cercare è onesto. Tommaso dubitò, e non fu respinto.</p><ul><li>Leggi gli argomenti contrari più forti nel <a href="evidence.html">fascicolo</a>, e le fonti su cui si basano.</li><li>Prova il calcolatore con i tuoi numeri, e osserva quale presupposto decide la tua risposta.</li><li>Chiediti quale prova ti farebbe cambiare idea, e se potrebbe esistere.</li></ul>` },
        { id: 'wonder', h: "Se ti stai interrogando", body: `<p>La Sindone è una domanda su un uomo. Il passo migliore è incontrarlo dove è descritto in modo più completo.</p><ul><li>Leggi il Vangelo di Giovanni. Richiede circa due ore, e finisce con Tommaso.</li><li>Parla con una persona di cui ti fidi e che crede, e falle la tua domanda più difficile.</li><li>Se non hai mai pregato, prova con una preghiera semplice e sincera: se ci sei, mostrati a me.</li></ul>` },
        { id: 'believe', h: "Se credi", body: `<p>Allora la domanda non è più che cosa dimostri il telo, ma come vivi.</p><ul><li>Sii una persona di cui uno scettico possa fidarsi: equa, curiosa e gentile, soprattutto con chi non è d'accordo.</li><li>Condividi questo sito con lo scettico più riflessivo che conosci, e ascolta ciò che ti dice.</li><li>Questa settimana aiuta qualcuno nel bisogno. Una fede che si traduce in azioni è la prova migliore che la maggior parte delle persone vedrà mai.</li></ul>` }
      ],
      story: `<h2>Prossimamente: la storia di una persona</h2><p>Nelson Inno, che ha creato questo sito, racconterà la sua storia, insieme a una riflessione su ciò che chiama «il disegno che porta a Dio», su un sito separato. Tenerla distinta dalle prove ti permette di valutare ciascuna cosa per quello che è.</p>`,
      quote: "Queste cose sono scritte, affinché crediate che Gesù è il Cristo, il Figliuol di Dio.",
      quoteCite: "Giovanni 20,31"
    },
    about: {
      title: "Chi siamo: perché esiste See The Shroud | See The Shroud",
      description: "See The Shroud è un sito gratuito e senza scopo di lucro sulla Sindone di Torino. Come valutiamo le prove, da dove vengono le immagini e chi lo ha fatto.",
      h1: "Informazioni su questo sito",
      lede: "Perché esiste, come lavoriamo e da dove viene tutto ciò che contiene.",
      body: `<h2>Perché esiste questo sito</h2>
<p>La Sindone di Torino può essere un'opera d'arte medievale, un falso deliberato o il telo funerario di Gesù di Nazaret. Qualunque cosa sia, merita più attenzione di un titolo da dieci secondi. La maggior parte di ciò che si trova online è scritto per vincere: una parte grida «prova», l'altra grida «falso». Questo sito è scritto per informare.</p>
<p>Il suo nome è un invito: guarda la Sindone con i tuoi occhi, da vicino, e giudica le prove. Lo spirito viene da Tommaso, che si rifiutò di credere finché non avesse visto i segni dei chiodi. Pensiamo che un dubbio come il suo sia onesto, e che meriti prove, non pressioni.</p>
<h2>Chi lo ha realizzato</h2>
<p>See The Shroud è stato creato da Nelson Inno, fondatore salvadoregno, come progetto gratuito e pro bono. Per trasparenza: Nelson crede che la Sindone sia autentica. È proprio per questo che il sito si impone una regola: gli argomenti più forti contro l'autenticità sono mostrati con tutta la loro forza, accanto agli argomenti a favore. Se mai non fossimo all'altezza di questa regola, vogliamo saperlo.</p>
<h2>Come lavoriamo</h2>
<ul>
<li>Ogni affermazione fattuale rimanda a una fonte. Dove possibile, la fonte è un articolo con revisione paritaria o un documento primario.</li>
<li>Gli argomenti di entrambe le parti sono valutati con la stessa scala: forte, moderata, debole, contestata o smentita.</li>
<li>Le affermazioni popolari che non reggono sono indicate come tali, anche quando aiuterebbero la tesi dell'autenticità.</li>
<li>Le visualizzazioni artistiche, come l'animazione della luce, sono sempre indicate come visualizzazioni di un'ipotesi.</li>
<li>Niente pubblicità, nessun tracciamento, niente in vendita.</li>
</ul>
<h2>Hai trovato un errore?</h2>
<p>Scrivi a <a href="mailto:hey@everybodyknowsyou.com">hey@everybodyknowsyou.com</a> indicando la pagina, l'affermazione e la tua fonte. Le correzioni degli scettici sono particolarmente gradite.</p>
<h2>Prossimamente</h2>
<p>La storia di Nelson, e una riflessione su ciò che chiama «il disegno che porta a Dio», avranno un sito a sé, chiamato «Unless I See» («Se io non vedo»), dalle parole di Tommaso in Giovanni 20,25. Le prove restano qui, così potrai valutarle per quello che sono.</p>`,
      creditsH: "Crediti delle immagini", sourceLink: "fonte"
    }
  }
};
