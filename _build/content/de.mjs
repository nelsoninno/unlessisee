// German copy (Deutsch). Plain language, no em dashes. HTML allowed in long fields.
// Bible quotations: Lutherbibel 1912 (public domain), original spelling.
export default {
  brand: 'Wenn ich nicht sehe',
  locale: 'de_DE',
  shareImage: 'social-share-unless-i-see-unlessisee.org.jpg',
  keywords: 'Grabtuch von Turin, Turiner Grabtuch, Grabtuch Jesu, Grabtuch von Turin Belege, Grabtuch von Turin Radiokarbondatierung, Grabtuch von Turin Negativ, Grabtuch von Turin 3D, ist das Grabtuch von Turin echt, Leichentuch Jesu, Sindonologie, Shroud of Turin, STURP, Secondo Pia',
  shareAlt: 'Das Gesicht auf dem Grabtuch von Turin als fotografisches Negativ',
  orgDescription: 'Wenn ich nicht sehe ist ein kostenloses, nicht kommerzielles Bildungsprojekt, das die Belege für und gegen die Echtheit des Grabtuchs von Turin vorstellt, mit Quellen und in vielen Sprachen.',
  ui: {
    skip: 'Zum Inhalt springen', menu: 'Menü', mainNav: 'Hauptnavigation', language: 'Sprache',
    exhibit: 'Beweisstück', detail: 'Die Einzelheiten', skeptic: 'Die beste Antwort der Skeptiker', reply: 'Die Erwiderung',
    theCase: 'Das ganze Argument', replyAgainst: 'Wie die Verteidiger antworten', whyRating: 'Warum diese Bewertung:',
    all: 'Alle', allTopics: 'Alle Themen', shown: 'angezeigt', openAll: 'Alle öffnen oder schließen',
    prev: 'Zurück', next: 'Weiter', problems: 'Probleme dieser Idee'
  },
  nav: [
    { slug: 'explore', label: 'Erkunden' },
    { slug: 'evidence', label: 'Fallakte' },
    { slug: 'wounds', label: 'Wunden' },
    { slug: 'dating', label: 'Datierung' },
    { slug: 'image', label: 'Wie es entstand' },
    { slug: 'timeline', label: 'Zeitleiste' },
    { slug: 'videos', label: 'Videos' },
    { slug: 'library', label: 'Bibliothek' },
    { slug: 'next', label: 'Und jetzt?' },
    { slug: 'about', label: 'Über' }
  ],
  footer: {
    about: 'Ein kostenloses, nicht kommerzielles Projekt. Jede Aussage ist in der Fallakte belegt, auch mit den Quellen, die uns widersprechen.',
    explore: 'Erkunden', more: 'Tiefer einsteigen', extra: [],
    rights: 'Text {year} Wenn ich nicht sehe. Frei teilbar mit einem Link auf diese Website. Bildnachweise auf der Seite Über.',
    eky: 'Website mit Liebe gemacht, von', ekyAria: 'Website mit Liebe gemacht von everybodyknowsyou.com'
  },
  strength: { strong: 'Stark', moderate: 'Mittel', weak: 'Schwach', disputed: 'Umstritten', debunked: 'Widerlegt' },
  lean: { for: 'Spricht für die Echtheit', against: 'Spricht für einen mittelalterlichen Ursprung', neutral: 'Kontext' },
  categories: { image: 'Das Bild', blood: 'Blut', anatomy: 'Anatomie und Wunden', textile: 'Das Leinen', dating: 'Datierung', history: 'Geschichte', botany: 'Pollen und Pflanzen', 'imaging-3d': '3D-Information', 'image-formation': 'Wie das Bild entstand', other: 'Sonstiges' },
  fig: {
    scaleAlt: 'Schema des 4,4 Meter langen Tuchs mit Vorder- und Rückenansicht eines Mannes, Kopf an Kopf',
    scaleFront: 'Vorderansicht', scaleBack: 'Rückenansicht', scaleLen: 'etwa 4,4 Meter', scaleWid: 'etwa 1,1 m',
    scaleCaption: 'Das ganze Tuch, fotografiert von Giuseppe Enrie im Jahr 1931. Der Körper lag auf einer Hälfte. Die andere Hälfte wurde über den Kopf und die Vorderseite bis zu den Füßen gelegt. Deshalb treffen sich Vorder- und Rückenansicht an den Köpfen.',
    foldFrontAlt: 'Vordere Hälfte des Grabtuchs mit der Vorderansicht des Mannes', foldBackAlt: 'Hintere Hälfte des Grabtuchs mit der Rückenansicht des Mannes',
    foldBtn: 'So falten, wie es den Körper umhüllte', unfoldBtn: 'Wieder auseinanderfalten'
  },
  ui3d: { depth: 'Tiefe', light: 'Licht', clay: 'Ton', negative: 'Negativ', fallback: 'Diese 3D-Ansicht braucht WebGL, und Ihr Browser hat es ausgeschaltet.' },
  emanation: {
    label: 'Eine Hypothese, veranschaulicht. Kein Beleg.',
    alt: 'Animation: Licht steigt von einem Körper unter einem Leinentuch auf, das Bild entsteht auf dem Tuch, und das Tuch fällt flach zusammen',
    captions: [
      'Ein Körper liegt im Dunkeln unter einem Leinentuch.',
      'Hypothese: eine kurze, starke Freisetzung von Energie aus dem Körper selbst.',
      'Das Licht geht senkrecht nach oben und senkrecht nach unten, nicht in alle Richtungen.',
      'Nur die äußerste Oberfläche der Fasern verfärbt sich. Keine Farbe, keine Versengung.',
      'Der Physiker John Jackson vermutete, dass das Tuch dann durch einen Körper fiel, der nicht mehr da war.',
      'Zurück bleibt ein blasses Bild, das bisher kein Experiment in allen Einzelheiten erreicht hat.'
    ],
    ui: { play: 'Abspielen', pause: 'Pause', replay: 'Noch einmal', time: 'Zeit' }
  },
  powers: {
    label: 'Vergrößerung', prev: 'Verkleinern', next: 'Vergrößern',
    fiberNote: 'Ein Faden ist ein Bündel von Fasern. Nur die obersten Fasern sind gefärbt.',
    layerLabel: 'gefärbte Schicht, etwa 0,2 µm', lumen: 'Inneres der Faser',
    steps: [
      { size: '4,4 m', title: 'Das ganze Tuch', text: 'Vorder- und Rückenansicht, Kopf an Kopf. Aus ein paar Schritten Entfernung ist der Mann kaum zu sehen. So blass ist das Bild.' },
      { size: '25 cm', title: 'Das Gesicht', text: 'Aus der Nähe hat das Gesicht keine Umrisse, keine Pinselstriche und keine Lichtrichtung. Hell und Dunkel sind vertauscht, wie bei einem fotografischen Negativ.' },
      { size: '0,25 mm', title: 'Ein einzelner Faden', text: 'Jeder Faden ist etwa einen Viertelmillimeter dick, gewebt drei über einen. Wo das Bild ist, sind nur die Oberseiten der Fäden gefärbt, die zum Körper zeigten. Die Fäden darunter bleiben weiß.' },
      { size: '15 µm', title: 'Die Fasern in einem Faden', text: 'Ein Faden besteht aus ungefähr 100 bis 200 Flachsfasern. In den Bildbereichen sind nur die obersten zwei oder drei Fasern gefärbt. Dunklere Stellen des Bildes haben keine dunkleren Fasern, sondern mehr gefärbte Fasern.' },
      { size: '0,2 µm', title: 'Die gefärbte Schicht', text: 'Innerhalb einer Faser beschränkt sich die Farbe auf die äußerste Schicht, etwa 200 Milliardstel Meter dick, so dick wie die primäre Zellwand der Faser. Das Innere der Faser ist unberührt. Diese eine Eigenschaft macht das Bild so schwer nachzubilden.' }
    ]
  },
  grid: {
    caption: 'Welche Eigenschaften des Bildes jede Hypothese erklären kann',
    corner: 'Hypothese',
    cols: ['0,2 µm dünn', 'Keine Farbe', 'Negativ', '3D', 'Blut zuerst', 'Kein UV-Leuchten', 'Nicht nur Kontakt', 'Halbton', 'Ganzes Bild im Labor erzeugt'],
    legend: { y: 'Erklärt es', p: 'Teilweise oder umstritten', n: 'Erklärt es nicht', u: 'Nicht getestet' },
    rows: [
      { name: 'Ein Gemälde', v: 'nnpnpyyny' },
      { name: 'Versengung durch eine heiße Statue', v: 'pyypnnnpy' },
      { name: 'Abreibung über einem Relief', v: 'ppypppppy' },
      { name: 'Frühe Fotografie', v: 'pnynuyynp' },
      { name: 'Reaktion mit Gasen eines Körpers', v: 'yyypyyppn' },
      { name: 'Ein Strahlungsstoß', v: 'pyyuyuyun' }
    ],
    note: 'Dies ist unsere Zusammenfassung dessen, was Befürworter und Kritiker jeder Idee berichten. Vernünftige Menschen bewerten manche Felder anders. Beachten Sie die letzte Spalte: Die Hypothesen, die die meisten Eigenschaften erklären, sind zugleich diejenigen, die im Labor noch nie ein ganzes Bild erzeugt haben.'
  },
  dating: {
    bc: 'v. Chr.', crucifixion: 'Kreuzigung, etwa 30 bis 33 n. Chr.', documented: 'Belegt ab etwa 1354',
    chartAlt: 'Diagramm, das den Datierungsbereich der Radiokarbonmethode von 1988 mit anderen Datierungsmethoden auf einer Zeitachse vergleicht',
    labsAlt: 'Diagramm der zwölf veröffentlichten Radiokarbonmessungen aus Arizona, Oxford und Zürich, mit Fehlerbalken',
    bpAxis: 'Radiokarbonalter in Jahren vor 1950 (BP). Niedriger heißt jünger.', bpShort: 'Radiokarbonjahre BP', labMean: 'Labormittel', combined: 'Gesamt'
  },
  notFound: { title: 'Seite nicht gefunden | Wenn ich nicht sehe', h1: 'Diese Seite gibt es hier nicht', text: 'Der Link ist vielleicht veraltet, oder die Adresse enthält einen Tippfehler. Alles auf der Website beginnt auf der Startseite.', cta: 'Zur Startseite' },

  pages: {
    index: {
      title: 'Grabtuch von Turin: Die Belege dafür und dagegen | Wenn ich nicht sehe',
      description: 'Ist das Grabtuch von Turin echt? Erkunden Sie das Tuch in hoher Auflösung, sehen Sie das Negativ und das 3D-Bild, und wägen Sie die Belege beider Seiten ab, mit allen Quellen.',
      h1: 'Prüfen Sie das Grabtuch von Turin selbst',
      lede: 'Ein Leinentuch, 4,4 Meter lang, trägt das blasse Bild eines Mannes, der gegeißelt und gekreuzigt wurde. Manche halten es für eine mittelalterliche Fälschung. Andere halten es für das Grabtuch Jesu. Hier finden Sie die Belege beider Seiten, mit allen Quellen, damit Sie selbst urteilen können.',
      cta1: 'Das Tuch erkunden', cta2: 'Die Fallakte lesen',
      faceAlt: 'Das Gesicht auf dem Grabtuch von Turin. Fahren Sie darüber, um es als fotografisches Negativ zu sehen.',
      hint: 'Sehen Sie zu, wie die Platte entwickelt wird',
      hint2: 'Fahren Sie über das Gesicht, um es so zu sehen, wie das Auge es sieht',
      faceCaption: 'Das Gesicht auf dem Grabtuch. Fotografie von Giuseppe Enrie, 1931.',
      thomasText: `<h2>Thomas wollte die Male sehen</h2>
<p>Diese Website ist nach dem ehrlichsten Skeptiker der Evangelien benannt. Thomas glaubte nicht, was seine Freunde ihm erzählten. Er wollte Belege, die er sehen und berühren konnte: die Male der Nägel, die Wunde in der Seite.</p>
<p>Das Grabtuch von Turin zeigt einen Mann mit Malen derselben Art. Ob es das ist, wofür viele es halten, ist die Frage, die diese Website Ihnen überlässt. Wir zeigen Ihnen die Male, die Untersuchungen, die Zweifel und die Antworten, und wir verweisen Sie auf jede Quelle.</p>`,
      thomasCta: 'Die Male ansehen',
      objH: 'Was es ist',
      objLede: 'Ein einziges Stück Leinen mit einer Vorder- und einer Rückenansicht eines nackten Mannes, Kopf an Kopf, dazu Blutflecken, Brandspuren und Wasserflecken aus seiner langen Geschichte. Seit 1578 wird es in Turin in Italien aufbewahrt, abgesehen von der Zeit des Zweiten Weltkriegs.',
      facts: [
        { n: '4,4 m', t: 'lang und etwa 1,1 m breit' },
        { n: '3 : 1', t: 'Fischgratköper, ein kostspieliges Webmuster' },
        { n: '0,2 µm', t: 'ungefähre Tiefe der Farbe in den Bildfasern. Ein Haar ist etwa 70 µm dick.' },
        { n: '1354', t: 'um dieses Jahr taucht es zum ersten Mal in den historischen Quellen auf, in Lirey in Frankreich' },
        { n: '1260 bis 1390', t: 'der Datierungsbereich der Radiokarbonmethode von 1988' }
      ],
      cmpPos: 'Wie das Auge es sieht', cmpNeg: 'Wie das Negativ von 1898 es zeigte',
      cmpPosAlt: 'Das Gesicht auf dem Grabtuch, wie es dem Auge erscheint', cmpNegAlt: 'Das Gesicht auf dem Grabtuch als fotografisches Negativ',
      cmpLabel: 'Schieben, um Positiv und Negativ zu vergleichen',
      cmpCaption: 'Ziehen Sie die Linie. Links: das fotografische Negativ. Rechts: was Sie auf dem Tuch sehen.',
      negYear: 'Turin, 28. Mai 1898',
      negH: 'Die Nacht, in der ein Foto die Frage veränderte',
      negText: `<p>Secondo Pia, Anwalt und Amateurfotograf, durfte die ersten Fotografien des Tuchs machen. Als er seine Glasplatte entwickelte, erwartete er ein umgekehrtes, geisterhaftes Bild. Stattdessen zeigte das Negativ ein klares, natürliches Porträt eines Mannes.</p>
<p>Das Bild auf dem Tuch verhält sich wie ein fotografisches Negativ: Hell und Dunkel sind vertauscht. Niemand hatte das vorher bemerkt, weil niemand das Bild umgekehrt gesehen hatte, bis es fotografiert wurde. Damit begann die moderne Erforschung des Grabtuchs.</p>`,
      invertBtn: 'Diese Seite umkehren, wie Pias Glasplatte', invertBack: 'Zurück zur normalen Ansicht',
      negSkeptic: 'Die Antwort der Skeptiker: Ein Bild, das entsteht, wenn man Stoff auf ein Relief drückt oder Pulver darüber reibt, ist ebenfalls tonwertverkehrt. Ein negatives Bild erfordert also für sich genommen weder eine Fotografie noch ein Wunder. Die eigentliche Frage ist, ob solche Methoden zu allem anderen am Bild passen.',
      reliefAlt: 'Das Gesicht auf dem Grabtuch, aus der Helligkeit des Bildes in ein 3D-Relief umgewandelt',
      d3H: 'Es enthält 3D-Information',
      d3Text: `<p>1976 gaben der Physiker John Jackson und der Ingenieur Eric Jumper eine Fotografie des Grabtuchs in einen VP-8 Image Analyzer ein, ein Gerät, das Helligkeit in Höhe umwandelt. Gewöhnliche Fotografien kommen dabei verzerrt heraus. Das Grabtuch ergab einen stimmigen Körper im Relief.</p>
<p>Der Grund: Wie dunkel das Bild an jedem Punkt ist, scheint davon abzuhängen, wie weit das Tuch an diesem Punkt vom Körper entfernt war. Die Messung dazu, 1984 veröffentlicht, war bescheiden: 13 Punkte, mit einer Korrelation von r Quadrat 0,60 und einer großen Fehlerspanne. Aber der Effekt ist leicht zu sehen. Diese 3D-Ansicht entsteht auf dieselbe Weise, direkt in Ihrem Browser, unmittelbar aus dem Bild. Ziehen Sie daran, um sie zu drehen.</p>`,
      d3Skeptic: 'Die Antwort der Skeptiker: Auch Bilder von einem flachen Relief, etwa eine Abreibung eines Flachreliefs, enthalten eine gewisse Tiefeninformation. 2025 argumentierte der 3D-Designer Cicero Moraes anhand von Computersimulationen, dass das Bild besser zu einem Flachrelief passt als zu einem vollständigen Körper. Gestritten wird darüber, wie gut jede Methode zum echten Tuch passt.',
      d3Cta: 'Mit einem Gemälde in 3D vergleichen',
      marksH: 'Die Male einer Kreuzigung',
      marksText: `<p>Forensische Pathologen, die das Bild untersucht haben, beschreiben mehr als hundert kleine Wunden von einer römischen Geißel, Stichwunden rund um den Kopf, ein geschwollenes Gesicht, Abschürfungen an den Schultern, eine Nagelwunde im Handgelenk statt in der Handfläche und eine Wunde in der Seite zwischen den Rippen, die nach dem Tod blutete.</p>
<p>Das passt zu den Berichten der Evangelien, die Geißelung, Dornen, Schläge, Nägel und einen Speer in der Seite erwähnen. Mehrere Details, etwa der Nagel im Handgelenk, widersprechen der Art, wie mittelalterliche Künstler die Kreuzigung meist malten.</p>`,
      marksAlt: 'Ausschnitt der gekreuzten Hände auf dem Grabtuch, mit der Wunde am Handgelenk', marksCaption: 'Die gekreuzten Hände. Der Blutfluss kommt vom Handgelenk, nicht von der Handfläche. Negativansicht.',
      marksCta: 'Jede Wunde ansehen, neben dem Text der Evangelien',
      dateH: 'Der Test, der „mittelalterlich“ ergab',
      dateText: `<p>1988 datierten drei Labore in Arizona, Oxford und Zürich kleine Proben aus einer Ecke des Tuchs mit der Radiokarbonmethode. Ihr gemeinsames Ergebnis, 1989 in der Zeitschrift Nature veröffentlicht, lautete 1260 bis 1390 n. Chr., mit 95 % Konfidenz. Das ist das stärkste einzelne Argument gegen die Echtheit, und wir widmen ihm eine ganze Seite.</p>
<p>Seitdem haben Forscher hinterfragt, wo die Probe entnommen wurde, ob die Proben miteinander übereinstimmten und ob die Rohdaten die veröffentlichte Genauigkeit stützten. Andere Datierungsmethoden haben ältere Daten ergeben, doch keine ist so etabliert wie die Radiokarbondatierung.</p>`,
      dateCta: 'Die ganze Geschichte der Datierung lesen',
      howH: 'Wie kam das Bild auf das Tuch?',
      howLede: 'Nach mehr als einem Jahrhundert Forschung hat niemand eine vollständige Antwort. Das ist kein Schlagwort, sondern der Stand der Wissenschaft. Hier ist eine der kühnsten Hypothesen, als Animation gezeigt.',
      howText: `<p>Das Bild hat eine strohgelbe Farbe auf den obersten Fasern des Leinens. Es gibt keine Farbe, keine Pinselstriche und kein Anzeichen, dass das Bild in die Fäden eingezogen ist. Es verhält sich nicht wie eine gewöhnliche Versengung: Die echten Brandspuren vom Feuer 1532 leuchten unter ultraviolettem Licht, das Körperbild nicht.</p>
<p>Forscher haben Farbe vorgeschlagen, eine erhitzte Statue, über ein Relief geriebenes Pulver, eine frühe Form der Fotografie, eine chemische Reaktion mit Gasen eines Körpers und einen Strahlungsstoß. Jede Idee erklärt einige Merkmale und hat mit anderen Mühe.</p>`,
      howEnea: `<h3>Was ein Laser kann und was nicht</h3>
<p>Zwischen 2005 und 2010 schossen Wissenschaftler der ENEA, der italienischen Nationalagentur für neue Technologien, sehr kurze Pulse ultravioletten Laserlichts auf Leinen. In einem engen Bereich von Einstellungen färbten sie Leinen strohgelb, ähnlich wie das Grabtuch, ohne es zu verbrennen. Bei den meisten Fasern ging die Farbe tiefer als beim Grabtuch. Bei mindestens einer Faser blieb sie in der dünnen Außenwand, wie beim Grabtuch.</p>
<p>Als grobe Rechnung multiplizierten sie die Laserintensität, die funktionierte, mit der Fläche eines menschlichen Körpers. Das Ergebnis, etwa 34 Billionen Watt, ist weit mehr als jede bisher gebaute ultraviolette Quelle. Das ist eine Überschlagsrechnung dafür, es mit einem einzigen Laserpuls zu tun. Es ist keine Messung dessen, wie das Bild tatsächlich entstand. Die Autoren schrieben, dass „niemand behaupten kann“, das Bild sei so entstanden, und dass sein Ursprung weiterhin unbekannt ist.</p>`,
      howCta: 'Alle Hypothesen vergleichen',
      weighH: 'Wägen Sie selbst ab',
      weighText: `<p>Die meisten Debatten über das Grabtuch sind eigentlich Debatten darüber, wie viel jeder einzelne Beleg zählen sollte. Deshalb haben wir einen kleinen Rechner gebaut. Sie entscheiden, wie stark jeder Punkt in die eine oder andere Richtung weist, und er zeigt Ihnen, wohin Ihre eigenen Urteile zusammen führen.</p>
<p>Er wird Ihnen die Antwort nicht sagen. Er zeigt Ihnen, von welchen Annahmen Ihre Antwort abhängt.</p>`,
      weighCta: 'Den Rechner öffnen',
      quote: 'Es sei denn, daß ich in seinen Händen sehe die Nägelmale ... will ich\'s nicht glauben.',
      quoteCite: 'Thomas, in Johannes 20,25',
      freeH: 'Warum es kein Beweis ist',
      freeText: `<p>Wenn Gott den Glauben erzwingen wollte, könnte er es. Ein Zeichen, das keinen Raum für Zweifel ließe, ließe auch keinen Raum für eine Entscheidung. Das Grabtuch tut etwas Leiseres: Es gibt einem ernsthaften Verstand genug, um die Frage ernst zu nehmen, und überlässt Ihnen den letzten Schritt.</p>
<p>Das Video von Truthly, das wir geprüft haben, endet mit diesem Gedanken, und wir halten das für den richtigen Schluss. Thomas durfte die Male sehen. Die Antwort, die er erhielt, galt allen, die nach ihm kommen.</p>`,
      freeQuote: 'Selig sind, die nicht sehen und doch glauben!',
      freeCite: 'Jesus zu Thomas, Johannes 20,29',
      faqH: 'Häufige Fragen',
      faq: [
        { q: 'Ist das Grabtuch von Turin echt?', a: 'Es ist ein echtes, sehr altes Leinentuch. Ob es das Grabtuch Jesu ist, ist umstritten. Die Radiokarbondatierung von 1988 ordnete es zwischen 1260 und 1390 n. Chr. ein. Viele Forscher bestreiten dieses Ergebnis, und bisher hat keine Methode alle Eigenschaften des Bildes zugleich nachgebildet. Diese Website stellt beide Seiten mit Quellen dar.' },
        { q: 'Was ergab die Radiokarbondatierung?', a: 'Labore in Arizona, Oxford und Zürich datierten 1988 Proben aus einer Ecke und berichteten 1260 bis 1390 n. Chr. mit 95 % Konfidenz (Damon und andere, Nature, 1989). Kritiker argumentieren, die Ecke könnte ausgebessert worden sein, und eine Neuauswertung der Rohdaten von 2019 fand, dass die Proben nicht so einheitlich waren wie berichtet.' },
        { q: 'Ist das Bild gemalt?', a: 'Das wissenschaftliche Team von 1978 (STURP) kam zu dem Schluss, dass es kein Gemälde ist: Es fand kein Pigment, das das Bild bildet, keine Pinselstriche und kein Bindemittel. Der Mikroskopiker Walter McCrone widersprach und berichtete von Eisenoxid und anderen Stoffen. Die meisten späteren Studien gaben STURP beim Bild recht und bestätigten zugleich, dass winzige Partikel vieler Stoffe auf dem Tuch vorhanden sind.' },
        { q: 'Warum ist das Bild ein Negativ?', a: 'Auf dem Tuch sind Hell und Dunkel im Vergleich zu einem normalen Bild vertauscht, sodass ein fotografisches Negativ davon wie ein natürliches Porträt aussieht. Secondo Pia entdeckte das 1898. Skeptiker weisen darauf hin, dass auch Bilder, die durch Kontakt mit einem Relief entstehen, umgekehrt sind.' },
        { q: 'Was sagt die katholische Kirche?', a: 'Die Kirche hat das Grabtuch nie offiziell für echt erklärt und verlangt von niemandem, das zu glauben. Die Päpste der jüngeren Zeit haben es eine Ikone des Leidens Christi genannt und davor gebetet. Seit 1983 gehört es dem Heiligen Stuhl, und der Erzbischof von Turin ist sein Kustos.' },
        { q: 'Kann ich es selbst sehen?', a: 'Es wird im Dom des heiligen Johannes des Täufers in Turin in einem klimatisierten Schrein aufbewahrt und ist meist nicht öffentlich zu sehen. Gezeigt wird es bei seltenen öffentlichen Ausstellungen, etwa 2010 und 2015, und 2020 in einer Liveübertragung.' }
      ],
      pathsH: 'Wie es weitergeht',
      paths: [
        { slug: 'evidence', h: 'Wenn Sie zweifeln', t: 'Beginnen Sie mit der Fallakte. Jedes Argument, dafür und dagegen, nach Stärke bewertet.' },
        { slug: 'explore', h: 'Wenn Sie es sehen wollen', t: 'Zoomen Sie in das ganze Tuch, schalten Sie auf Negativ, und finden Sie jedes Mal.' },
        { slug: 'library', h: 'Wenn Sie tief einsteigen wollen', t: 'Hunderte Artikel und Studien, durchsuchbar, mit Links zu den Originalen.' },
        { slug: 'next', h: 'Wenn Sie sich fragen, was jetzt', t: 'Ehrliche nächste Schritte, ob Sie zweifeln, sich wundern oder glauben.' }
      ]
    },

    explore: {
      title: 'Das Grabtuch von Turin in hoher Auflösung erkunden | Wenn ich nicht sehe',
      description: 'Zoomen Sie in das ganze Grabtuch von Turin, schalten Sie auf das fotografische Negativ, verstärken Sie das Bild, und finden Sie jede Wunde, jede Brandstelle und jeden Flicken, mit Erklärungen.',
      h1: 'Das Tuch erkunden',
      lede: 'Das ist das ganze Grabtuch, Vorder- und Rückenansicht, Kopf an Kopf. Ziehen zum Verschieben, scrollen oder mit zwei Fingern zoomen. Schalten Sie auf Negativ, um zu sehen, was Secondo Pia 1898 sah. Die nummerierten Markierungen erklären, was Sie sehen.',
      imgAlt: 'Das ganze Grabtuch von Turin, Vorder- und Rückenansicht',
      ui: { tools: 'Ansichtswerkzeuge', negative: 'Negativ', enhance: 'Verstärken', layerWounds: 'Wunden', layerDamage: 'Feuer und Wasser', layerLinen: 'Das Leinen', tour: 'Geführter Rundgang', fit: 'Ganzes Tuch', zoomIn: 'Vergrößern', zoomOut: 'Verkleinern', help: 'Ziehen zum Verschieben. Scrollen oder mit zwei Fingern zoomen. N drücken für Negativ.', close: 'Schließen', prev: 'Zurück', next: 'Weiter', more: 'Mehr lesen', skeptic: 'Die Antwort der Skeptiker' },
      reliefH: 'Das Bild in 3D',
      reliefText: `<p>Wenn man die Helligkeit einer normalen Fotografie in Höhe umwandelt, erhält man ein verzerrtes Durcheinander: Die Nase sinkt ein, die Schatten heben sich, der Hintergrund wölbt sich. Macht man dasselbe mit dem Grabtuch, erhält man ein stimmiges Gesicht und einen stimmigen Körper. Vergleichen Sie selbst. Beide Ansichten unten verwenden genau dieselbe Methode.</p>`,
      reliefFaceAlt: '3D-Relief des Gesichts auf dem Grabtuch', reliefFaceCap: 'Das Gesicht auf dem Grabtuch, Helligkeit in Höhe umgewandelt.',
      reliefPaintAlt: '3D-Relief eines gemalten Gesichts mit derselben Methode', reliefPaintCap: 'Ein gemaltes Gesicht, dieselbe Methode. Gemälde: Haupt Christi, gemeinfrei.',
      reliefBodyAlt: '3D-Relief der ganzen Vorderansicht des Grabtuchs', reliefBodyCap: 'Die ganze Vorderansicht im Relief. Drehen Sie sie, um die Form des Körpers zu sehen.',
      reliefSkeptic: 'Ein ehrlicher Hinweis: Unsere 3D-Ansichten sind eine einfache Nachbildung der VP-8-Idee, für das Web geglättet. Sie zeigen das Prinzip. Sie sind keine wissenschaftliche Messung.',
      photosH: 'Über diese Fotografien',
      photosText: `<p>Die Bilder des ganzen Tuchs hier sind gemeinfreie Fotografien. Die besten Fotografien des Grabtuchs, die Vernon Miller und Barrie Schwortz für das wissenschaftliche Team von 1978 aufgenommen haben, und die sehr hoch aufgelösten Bilder von 2002 und 2008 sind urheberrechtlich geschützt. Viele davon finden Sie auf <a href="https://www.shroud.com/" target="_blank" rel="noopener">shroud.com</a> und <a href="https://shroudphotos.com/" target="_blank" rel="noopener">shroudphotos.com</a>. Wir bitten um die Erlaubnis, sie hier zu zeigen.</p>`
    },

    evidence: {
      title: 'Grabtuch von Turin: Belege dafür und dagegen | Wenn ich nicht sehe',
      description: 'Jedes wichtige Argument über das Grabtuch von Turin, für und gegen die Echtheit, nach Stärke bewertet, mit der besten Antwort der Skeptiker und Links zu den Quellen.',
      h1: 'Die Fallakte',
      lede: 'Jedes wichtige Argument über das Grabtuch, dafür und dagegen. Jedes ist danach bewertet, wie stark es ist, mit dem besten Einwand, der besten Erwiderung und den Quellen. Die Argumente gegen die Echtheit zeigen wir in voller Stärke, denn Sie sollten sie zuerst von uns hören.',
      counts: '{n} Beweisstücke: {f} sprechen für die Echtheit, {a} für einen mittelalterlichen Ursprung.',
      method: 'So bewerten wir: Stark heißt, die Fakten sind gut belegt und der Schluss ist kaum zu vermeiden. Mittel heißt, es gibt echte Belege, aber auch einen berechtigten Einwand. Schwach heißt, bestenfalls ein Hinweis. Umstritten heißt, ernsthafte Forscher sind sich über die Fakten selbst uneinig. Widerlegt heißt, es sollte nicht verwendet werden. Wir bewerten Aussagen beider Seiten nach denselben Regeln.',
      filterLean: 'Nach Richtung filtern', filterCat: 'Nach Thema filtern',
      weighH: 'Wägen Sie selbst ab',
      weighText: `<p>Beginnen Sie mit Ihrer Ausgangsannahme: Wie wahrscheinlich ist es, vor allen Belegen, dass ein solches Tuch das echte Grabtuch Jesu ist? Entscheiden Sie dann bei jedem Punkt, um wie viel wahrscheinlicher Sie diesen Beleg sehen würden, wenn das Tuch echt wäre, als wenn es ein mittelalterliches Werk wäre. Schieben Sie einen Regler nach rechts, wenn der Beleg besser zur Echtheit passt, nach links, wenn er besser zu einem mittelalterlichen Ursprung passt.</p>
<p>Das ist die Bayes-Regel, der übliche Weg, Belege zu verbinden. Probieren Sie die Voreinstellungen für Skeptiker und Gläubige aus, um zu sehen, wie weit zwei vernünftige Menschen auseinander beginnen können und wohin die Belege sie bewegen.</p>`,
      wui: {
        neutral: 'Auf neutral zurücksetzen', skeptic: 'Einstellungen eines Skeptikers', believer: 'Einstellungen eines Gläubigen',
        prior: 'Ihr Ausgangspunkt (A-priori-Chancen)', priorHelp: 'Die meisten mittelalterlichen Reliquien waren nicht das, was sie zu sein vorgaben. Ein niedriger Ausgangspunkt ist daher vernünftig.',
        result: 'Ihr Ergebnis: Wahrscheinlichkeit, dass das Tuch echt ist', medieval: 'Mittelalterlich', authentic: 'Echt',
        noEffect: 'Keine Wirkung',
        favorsA: '{x}-mal wahrscheinlicher, wenn echt', favorsM: '{x}-mal wahrscheinlicher, wenn mittelalterlich',
        oddsFor: 'Chancen: {x} zu 1 für die Echtheit', oddsAgainst: 'Chancen: 1 zu {x}',
        caveat: 'Der Rechner behandelt jeden Punkt als unabhängig, was eine Vereinfachung ist. Manche Punkte hängen zusammen, zum Beispiel beruhen mehrere auf denselben Fotografien. Der Rechner zeigt, wie sich Ihre Urteile verbinden. Er ersetzt sie nicht.'
      }
    },

    wounds: {
      title: 'Die Wunden auf dem Grabtuch von Turin und die Evangelien | Wenn ich nicht sehe',
      description: 'Jede Wunde auf dem Grabtuch von Turin, von den Geißelspuren bis zum Nagel im Handgelenk und der Seitenwunde, auf dem Tuch gezeigt, neben dem Text der Evangelien, der sie beschreibt.',
      h1: 'Die Wunden und was die Evangelien sagen',
      lede: 'Klicken Sie auf eine Nummer auf dem Tuch oder auf eine Wunde in der Liste. Jedes Mal wird so erklärt, wie forensische Pathologen es beschreiben, neben dem Vers aus den Evangelien, dem es entspricht, und mit dem Hinweis der Skeptiker, wo es einen gibt.',
      front: 'Vorderansicht', back: 'Rückenansicht', alt_front: 'Vorderansicht des Mannes auf dem Grabtuch, Negativansicht', alt_back: 'Rückenansicht des Mannes auf dem Grabtuch, Negativansicht',
      figNote: 'Die Positionen sind ungefähr. Negativansicht, in der die Blutspuren hell erscheinen.',
      breath: {
        alt: 'Schema eines Gekreuzigten, der zwischen Zusammensacken und Hochstemmen zum Atmen wechselt',
        h: 'Warum das Blut an den Armen in zwei Richtungen läuft',
        text: `<p>An den Unterarmen laufen dünne Blutrinnsale in zwei leicht unterschiedlichen Winkeln, etwa zehn Grad auseinander. Pathologen wie Robert Bucklin deuten das so, dass die Arme in zwei Stellungen gehalten wurden, während das Blut floss.</p>
<p>Das passt dazu, wie die Kreuzigung tötet. Wer an den Armen hängt, kann schwer ausatmen. Das Opfer muss sich deshalb auf den angenagelten Füßen hochstemmen, um jeden Atemzug zu nehmen, und sackt dann wieder zusammen. Blut läuft immer senkrecht nach unten. Wenn sich also der Winkel der Arme ändert, ändert die Spur auf der Haut ihre Richtung. Drücken Sie die Taste, um es zu sehen.</p>`,
        up: 'Zum Atmen hochstemmen', down: 'Zusammensacken',
        skeptic: 'Die beste Antwort der Skeptiker: Eine Blutspurenstudie von Matteo Borrini und Luigi Garlaschelli aus dem Jahr 2018, mit einer Versuchsperson und echten Blutflüssen, fand, dass die Spuren an den Unterarmen andere Armhaltungen erfordern als eine einzige Kreuzigungshaltung, und hielt einige Flüsse für unrealistisch. Verteidiger antworten, dass ein Körper, der sich stundenlang bewegte, genau solche wechselnden Spuren hinterlassen würde.'
      },
      intro: '<p>Eine römische Kreuzigung war eine öffentliche Hinrichtung, die demütigen sollte. Die Evangelien beschreiben die eine, um die es hier geht, mit nüchternen Einzelheiten. Das Tuch zeigt eine Hinrichtung mit denselben Merkmalen, darunter einige, die die mittelalterliche Kunst falsch darstellte.</p>',
      after: `<h2>Warum das wichtig ist</h2>
<p>Ein Fälscher im 14. Jahrhundert hätte Details kennen müssen, die seine eigene Kultur nicht kannte oder nicht darstellte: dass die Nägel durch das Handgelenk gingen, dass ein römisches Flagrum hantelförmige Spuren hinterließ, dass sich das Blut eines Toten in Gerinnsel und Serum trennt. Skeptiker antworten, dass einige dieser Details umstritten sind und dass die Blutspuren selbst mit gemischten Ergebnissen untersucht wurden. Beide Seiten finden Sie in der <a href="evidence.html">Fallakte</a>.</p>`
    },

    dating: {
      title: 'Radiokarbondatierung des Grabtuchs von Turin: Ergebnisse von 1988 und die Debatte | Wenn ich nicht sehe',
      description: 'Die Radiokarbondatierung des Grabtuchs von Turin von 1988 ergab 1260 bis 1390 n. Chr. Sehen Sie alle 12 Labormessungen, woher die Probe stammte, die Neuauswertungen der Rohdaten und andere Datierungsmethoden.',
      h1: 'Die Radiokarbondatierung',
      lede: 'Das ist das stärkste einzelne Argument dafür, dass das Grabtuch mittelalterlich ist, und es verdient einen genauen Blick. Hier steht, was gemacht wurde, was herauskam, was Kritiker seitdem gefunden haben und was es beweist und was nicht.',
      compareH: 'Alle je vorgeschlagenen Daten auf einer Linie',
      chartNote: 'Rot: das Radiokarbonergebnis von 1988 bei 95 % Konfidenz. Grün schraffiert: andere Methoden, alle an losen Fasern unsicherer Herkunft angewandt und keine davon eine etablierte Datierungstechnik. Der Kreis markiert die Röntgenstudie, die einen Faden mit Leinen aus dem ersten Jahrhundert verglich und keinen Datierungsbereich ergab. Fahren Sie über einen Balken oder tippen Sie darauf, um die Einzelheiten zu sehen.',
      labsH: 'Die zwölf Messungen hinter dem Datum',
      labsText: 'Jede Zeile ist eine veröffentlichte Messung mit ihrem angegebenen Fehler. Das schattierte Band ist der gewichtete Mittelwert, 689 plus/minus 16 Radiokarbonjahre. Weil die Ergebnisse zu stark streuten, verwendete das veröffentlichte Datum einen einfachen Durchschnitt mit größerem Fehler, 691 plus/minus 31. Beachten Sie, wie Oxford abseits von Arizona liegt. Diese Streuung haben spätere Statistiker in Frage gestellt.',
      body: `<h2>Was gemacht wurde</h2>
<p>Am 21. April 1988 schnitt Giovanni Riggi in der Sakristei des Turiner Doms einen einzelnen Streifen aus einer Ecke des Tuchs, am Rand nahe den Füßen der Vorderansicht, knapp oberhalb der Stelle, an der 1973 eine Probe entnommen worden war. Die Textilexperten Franco Testore und Gabriel Vial sowie Vertreter der drei Labore sahen zu. Stücke von etwa 50 Milligramm gingen an drei Labore, die mit Beschleuniger-Massenspektrometrie arbeiteten: die University of Arizona, die Universität Oxford und die ETH Zürich. Jedes Labor erhielt außerdem drei Kontrollproben bekannten Alters. Der Test war nicht blind: Die ungewöhnliche Webart des Grabtuchs machte seine Probe leicht erkennbar, und die Autoren sagten, sie hätten auf blinde Verfahren verzichtet.</p>
<p>Die Kontrollen stimmten: Leinen aus einem nubischen Grab, Leinen von einer Mumie aus dem zweiten Jahrhundert und Fäden aus einem Chormantel des 13. Jahrhunderts wurden alle richtig datiert. Die drei Labormittelwerte wurden dann mit gleichem Gewicht gemittelt: 691 Radiokarbonjahre vor 1950, plus/minus 31. Die Autoren verwendeten diesen größeren Fehler, weil die Ergebnisse stärker streuten, als es die eigenen Fehlerbalken der Labore zuließen. In Kalenderjahre umgerechnet sind das 1262 bis 1312 n. Chr. oder 1353 bis 1384 n. Chr., gerundet veröffentlicht als 1260 bis 1390 n. Chr. Der von 21 Wissenschaftlern unterzeichnete Artikel in Nature nannte dies einen schlüssigen Beleg dafür, dass das Leinen mittelalterlich ist.</p>
<h2>Warum es so viel Gewicht hat</h2>
<p>Die Radiokarbondatierung ist eine ausgereifte, gut geprüfte Methode. Die Kontrollen funktionierten. Und das Datum fällt genau in die Zeit, in der die belegte Geschichte beginnt: Das Tuch taucht in den 1350er-Jahren in Lirey in Frankreich auf, und ein Bischof schrieb 1389, ein Künstler habe gestanden, es gemalt zu haben. Für viele Wissenschaftler war der Fall mit diesem Zusammentreffen abgeschlossen.</p>`,
      sampleH: 'Ein Streifen, eine Ecke',
      sampleText: `<p>Jedes Ergebnis stammte von einem einzigen Streifen, etwa 7 bis 8 Zentimeter lang, aus einer Ecke geschnitten. Diese Ecke wurde vermutlich über Jahrhunderte bei öffentlichen Ausstellungen angefasst, und sie liegt neben der Naht des Seitenstreifens. Manche Forscher haben argumentiert, sie sei im Mittelalter ausgebessert worden. Ein Workshop in Turin schlug 1986 sieben Labore mit zwei verschiedenen Methoden vor. 1987 wurde das auf drei Labore mit derselben Methode verringert und 1988 auf einen einzigen Streifen aus einer Ecke.</p>
<p>Kritiker sagen, eine einzige Ecke könne nicht für ein 4,4 Meter langes Tuch sprechen. Verteidiger des Datums antworten, dass die Labore die Probe unter dem Mikroskop untersuchten und sie wie das Haupttuch aussah. 2010 zeigte ein übrig gebliebenes Fragment aus Arizona keinen Farbstoff und keine Beschichtung und nur wenige vereinzelte Baumwollfasern. 2026 berichteten dieselben Forscher aus Arizona, dass zwei übrig gebliebene Fragmente zum Haupttuch passen und keine Verunreinigung zeigen.</p>`,
      sampleAlt: 'Die Ecke des Grabtuchs, an der 1988 die Probe entnommen wurde', sampleCap: 'Die Ecke der Probe (ungefähr), am Fußende der Vorderansicht. Fotografie von Enrie, 1931.',
      debateH: 'Warum Kritiker es in Frage stellen',
      defenseH: 'Warum es trotzdem das stärkste Argument dagegen ist',
      debateFor: `<p>Die Ergebnisse stimmen nicht so gut miteinander überein, wie ihre Fehlerbalken behaupteten. Der Artikel von 1989 räumte das ein: Die drei Labormittelwerte bestehen einen üblichen Konsistenztest nicht, mit einem Chi-Quadrat-Wert von 6,4, knapp über der 5-%-Schwelle. Der Artikel vergrößerte seinen Fehler, nannte das Ergebnis aber trotzdem schlüssig. 2017 wurden die Rohdaten nach einem rechtlichen Antrag freigegeben, und 2019 veröffentlichte ein Team um Tristan Casabianca eine Neuauswertung in Archaeometry. Ihr Konsistenztest ergab 15,99 bei einem kritischen Wert von 5,99, und sie kamen zu dem Schluss, dass die Proben nicht homogen waren.</p>
<p>Die Statistiker Marco Riani und Kollegen (2013) fanden, dass sich das gemessene Alter entlang des Streifens verschiebt, als würde sich etwas über die Probe hinweg verändern. Andere Forscher vermuteten ein mittelalterliches Einweben, eine Verunreinigung oder Brandschäden von 1532.</p>`,
      debateAgainst: `<p>Keine dieser Kritiken verweist auf das erste Jahrhundert. Unter den statistischen Neuauswertungen der Daten von 1988 beträgt die größte vorgeschlagene Verschiebung 88 Radiokarbonjahre (Walsh und Schwalbe, 2020), und damit bleibt das Tuch mittelalterlich. Jeder konkrete Mechanismus, mit dem das Datum wegerklärt werden sollte, etwa Feuer, Bakterien, Kohlenmonoxid oder ein Neutronenstoß, ist entweder in einem Test gescheitert oder lässt sich nicht testen.</p>
<p>Die einst beliebte Reparaturtheorie ist schwächer als 2005: Die 2010 und 2026 untersuchten übrig gebliebenen Fragmente zeigten keinen Farbstoff und keine Beschichtung und passten zum Haupttuch. Kurz gesagt zeigen die Neuauswertungen, dass der Test von 1988 kleiner und weniger sauber war, als er behauptete. Sie zeigen nicht, dass das Datum falsch ist.</p>`,
      verdict: `<h2>Unsere ehrliche Zusammenfassung</h2>
<p>Das Radiokarbondatum sagt „mittelalterlich“, und es ist der beste einzelne Beleg, den es gibt. Der Test von 1988 hatte aber auch echte Mängel in der Anlage: ein Streifen, eine Ecke, drei Labore und Ergebnisse, die nicht so sauber zusammenpassen wie berichtet. Das rechtfertigt einen neuen Test mit mehreren Proben von mehreren Stellen des Tuchs, offen durchgeführt. Es rechtfertigt nicht, das Ergebnis zu ignorieren.</p>
<p>Wenn Sie Skeptiker sind, ist das Ihre stärkste Karte, und Sie sollten sie behalten. Wenn Sie das Tuch für echt halten, ist das die Frage, die Sie ehrlich beantworten müssen. So oder so muss der Rest der Belege noch erklärt werden, angefangen damit, <a href="image.html">wie das Bild entstand</a>.</p>`
    },

    image: {
      title: 'Wie entstand das Bild auf dem Grabtuch von Turin? | Wenn ich nicht sehe',
      description: 'Farbe, Versengung, Abreibung, frühe Fotografie, eine chemische Reaktion oder ein Lichtblitz? Jede Hypothese zum Bild auf dem Grabtuch von Turin, mit dem, was sie erklärt, und dem, woran sie scheitert.',
      h1: 'Wie entstand das Bild?',
      lede: 'Das ist die tiefste offene Frage zum Grabtuch. Jede Erklärung, ob natürlich oder nicht, muss eine Reihe sehr seltsamer Eigenschaften erklären. Hier sind sie, gefolgt von jeder wichtigen Hypothese und ihren Problemen.',
      propsH: 'Was jede Erklärung erklären muss',
      propsLede: 'Das sind die Eigenschaften, die die wissenschaftlichen Teams berichtet haben, die das Tuch direkt untersucht haben. Manche sind im Detail umstritten. Zusammen sind sie der Grund, warum niemand das Bild in jeder Hinsicht nachgebildet hat.',
      hypH: 'Die Hypothesen',
      hypLede: 'Ungefähr geordnet von der natürlichsten zur am wenigsten natürlichen. Jede ist danach bewertet, wie gut sie zu den Eigenschaften oben passt.',
      props: [
        { n: '0,2 µm', t: 'Die Farbe sitzt nur auf der äußersten Schicht der obersten Fasern, nach Rogers und Fanti. Ein Haar ist etwa 70 µm dick.' },
        { n: 'Keine Farbe', t: 'Kein Pigment, kein Bindemittel und keine Pinselstriche bilden das Bild, nach dem Team von 1978.' },
        { n: 'Negativ', t: 'Hell und Dunkel sind vertauscht, sodass das fotografische Negativ natürlich aussieht.' },
        { n: '3D', t: 'Die Dunkelheit des Bildes folgt dem Abstand zwischen Tuch und Körper, sodass es sich in ein Relief umwandeln lässt.' },
        { n: 'Blut zuerst?', t: 'Tests fanden unter den Blutflecken kein Körperbild, was die meisten Forscher als „erst Blut, dann Bild“ deuten. Ein Artikel von 2026 argumentiert, dass dies die Reihenfolge nicht entscheidet.' },
        { n: 'Kein Leuchten', t: 'Unter ultraviolettem Licht leuchten die Brandspuren von 1532, das Körperbild nicht. Es ist keine einfache Versengung.' },
        { n: 'Auch Lücken', t: 'Einige Bildbereiche berührten den Körper nicht, etwa zwischen Nase und Wange. Es ist nicht nur ein Kontaktabdruck.' },
        { n: 'Halbton', t: 'Jede Bildfaser ist entweder gefärbt oder nicht. Dunklere Bereiche haben einfach mehr gefärbte Fasern, wie ein Zeitungsfoto.' }
      ],
      hypotheses: [
        { kind: 'Kunst', name: 'Ein Gemälde', strength: 'weak',
          text: 'Der Mikroskopiker Walter McCrone berichtete von rotem Ocker (Eisenoxid) auf Bild- und Blutfasern und von Zinnober auf Blutfasern. Er kam 1980 zu dem Schluss, dass ein mittelalterlicher Künstler das Bild um 1355 mit sehr verdünnter Farbe in einem Gelatine-Bindemittel gemalt habe.',
          problems: 'Das STURP-Team fand mit Röntgenfluoreszenz, Spektroskopie und Chemie am Tuch selbst kein Pigment, das das Bild bildet, und kein Bindemittel, und kam zu dem Schluss, dass es kein Gemälde ist. Farbe würde zwischen die Fäden einsickern; das Bild tut das nicht. Auf dem Tuch gibt es Partikel vieler Stoffe, plausibel von Künstlern, die über Jahrhunderte Kopien ihrer Gemälde an das Tuch drückten, wie es üblich war.',
          sources: [{ label: 'Schwalbe und Rogers 1982, Analytica Chimica Acta', url: 'https://shroud.com/pdfs/Physics%20Chemistry%20of%20Shroud%20Schwalbe%20Rogers%201981%20OCRsm.pdf' }, { label: 'STURP, Abschlussbericht 1981', url: 'https://www.shroud.com/78conclu.htm' }] },
        { kind: 'Hitze', name: 'Versengung durch eine erhitzte Statue', strength: 'weak',
          text: 'Eine erhitzte Statue oder ein erhitztes Relief aus Metall, mit dem Tuch bedeckt, würde eine bräunliche, tonwertverkehrte Versengung mit einer gewissen Tiefeninformation hinterlassen.',
          problems: 'Versengungen leuchten unter ultraviolettem Licht rötlich. Die echten Brandspuren vom Feuer 1532 tun das, das Körperbild nicht. Ein heißer Gegenstand würde das Tuch außerdem durchsengen und könnte keine Bereiche färben, die er nicht berührte.',
          sources: [{ label: 'STURP, Abschlussbericht 1981', url: 'https://www.shroud.com/78conclu.htm' }] },
        { kind: 'Kontakt', name: 'Über ein Relief geriebenes Pulver oder Säure', strength: 'disputed',
          text: 'Der Ermittler Joe Nickell erzeugte um 1980 ein Gesichtsbild, indem er Pulver auf nasses, über ein Flachrelief geformtes Leinen tupfte. 2009 erzeugte der Chemiker Luigi Garlaschelli ein lebensgroßes Bild, indem er ein säurehaltiges Pigment auf Leinen rieb, das über einer Versuchsperson und einem Flachrelief lag, und das Tuch dann erhitzte und wusch. Die Ergebnisse sind negativ und enthalten eine gewisse 3D-Information. 2025 argumentierte Cicero Moraes anhand von 3D-Simulationen, dass das Bild besser zu einem Flachrelief passt als zu einem vollständigen Körper.',
          problems: 'Verteidiger antworten, dass diese Kopien mit bloßem Auge auf eine Weise sichtbar sind, wie es das Grabtuch nicht ist, dass ihre Farbe in die Fasern eindringt, statt auf den äußeren 0,2 µm zu bleiben, dass sie Material zurücklassen und dass sie nicht erklären, warum das Blut zuerst da war. Befürworter der Abreibungsidee entgegnen, dass Alterung und Waschen über Jahrhunderte einen Teil dieser Lücke schließen könnten.',
          sources: [{ label: 'Garlaschelli 2010, Journal of Imaging Science and Technology', url: 'https://doi.org/10.2352/J.ImagingSci.Technol.2010.54.4.040301' }, { label: 'Wikipedia: Shroud of Turin, Bildanalyse', url: 'https://en.wikipedia.org/wiki/Shroud_of_Turin' }] },
        { kind: 'Optik', name: 'Mittelalterliche Protofotografie', strength: 'weak',
          text: 'Der Kunsthistoriker Nicholas Allen schlug in den 1990er-Jahren vor, eine mittelalterliche Werkstatt habe eine Camera obscura mit einer Quarzlinse und mit Silbersalzen behandeltes Leinen benutzt, um einen Leichnam oder eine Statue zu „fotografieren“.',
          problems: 'Für eine solche Technik gibt es noch weitere 450 Jahre lang keinen historischen Beleg, niemand hat Silber im Bild nachgewiesen, und eine Fotografie würde den Abstand zwischen Tuch und Körper nicht so kodieren, wie es das Grabtuch tut.',
          sources: [{ label: 'Wikipedia: Shroud of Turin', url: 'https://en.wikipedia.org/wiki/Shroud_of_Turin' }] },
        { kind: 'Chemie', name: 'Eine natürliche Reaktion mit Gasen eines Körpers', strength: 'disputed',
          text: 'Der Chemiker Raymond Rogers, Mitglied von STURP, schlug eine Maillard-Reaktion vor: Gase, die ein toter Körper freisetzt, reagieren mit einer dünnen Schicht aus Stärke- und Zuckerrückständen, die antike Webverfahren auf dem Leinen hinterließen, und erzeugen eine blasse gelbe Farbe nur an der Oberfläche.',
          problems: 'Das würde die Oberflächlichkeit und das Fehlen von Farbe erklären. Schwer erklärbar sind damit die Schärfe und die saubere Kodierung des Abstands, denn Gase breiten sich in alle Richtungen aus, und es setzt voraus, dass der Körper das Tuch verließ, bevor Verwesungsflecken entstanden. Niemand hat auf diese Weise ein ganzes Bild erzeugt.',
          sources: [{ label: 'Rogers und Arnoldi 2003, Melanoidins', url: 'https://shroud.com/pdfs/rogers7.pdf' }] },
        { kind: 'Physik', name: 'Ein kurzer Strahlungsstoß', strength: 'disputed',
          text: 'Mehrere Physiker vermuten, dass das Bild durch einen kurzen, starken Energiestoß aus dem Körper entstand. Wissenschaftler der ENEA färbten Leinen mit ultravioletten Laserpulsen auf eine Weise, die dem Grabtuch nahekommt. Giulio Fanti schlug eine Koronaentladung vor. John Jackson schlug vor, das Tuch sei durch den Körper hindurchgefallen, als dieser mechanisch „durchlässig“ wurde, und habe das Bild im Fallen aufgezeichnet.',
          problems: 'Es ist keine natürliche Quelle bekannt, aus der ein menschlicher Körper solche Strahlung abgeben könnte. Die Energieschätzungen sind gewaltig. Laserversuche färbten nur kleine Proben, kein Bild. Skeptiker weisen darauf hin, dass sich eine Hypothese, die ein Wunder voraussetzt, nicht wie eine natürliche testen lässt. Befürworter entgegnen, dass sie genau deshalb weiter im Raum steht.',
          sources: [{ label: 'Di Lazzaro und andere 2012, Applied Optics', url: 'https://doi.org/10.1364/AO.51.008567' }, { label: 'Di Lazzaro und andere 2010, ENEA-Workshop', url: 'https://www.sindone.info/DILAZZA1.PDF' }, { label: 'Jackson 1990, Shroud Spectrum International', url: 'https://shroud.com/pdfs/ssi34part3.pdf' }] }
      ],
      emText: `<p>Die Animation oben zeigt die Hypothese, die viele Menschen am überzeugendsten finden: ein Lichtblitz aus dem Körper, der senkrecht nach oben und unten geht, nur die Oberfläche der Fasern färbt, und danach fällt das Tuch hindurch. Wir haben sie gemacht, damit Sie sich die Idee vorstellen können. Sie ist das Bild einer Hypothese, keine Rekonstruktion eines Ereignisses und kein Beleg dafür.</p>
<p>Ein guter Test für jede Erklärung, ob natürlich oder übernatürlich, ist, ob sie alle acht Eigenschaften oben auf dieser Seite zugleich erklärt. Bisher wurde das für keine im Labor gezeigt.</p>`,
      enea: `<h3>Die Laserversuche der ENEA</h3>
<p>Von 2005 bis 2010 schoss ein Team um Paolo Di Lazzaro bei der ENEA in Frascati ultrakurze Pulse ultravioletten Lichts auf Leinen. In einem engen Bereich von Einstellungen nahm das Leinen eine strohgelbe Farbe an, ähnlich der des Grabtuchs. Längere oder stärkere Pulse verbrannten das Leinen, und schwächere hinterließen keine sichtbare Farbe, bis das Tuch gealtert wurde. Die Farbe ging meist mehrere Mikrometer tief. Bei mindestens einer Faser blieb sie in der 0,2 µm dünnen Außenwand, wie beim Grabtuch.</p>
<p>Als grobe Rechnung multiplizierten sie die Laserintensität, die funktionierte, mit der Fläche eines menschlichen Körpers. Das Ergebnis, etwa 34 Billionen Watt, ist weit mehr als jede bisher gebaute ultraviolette Quelle. Es ist eine Überschlagsrechnung dafür, es mit einem einzigen Puls zu tun, keine Messung dessen, wie das Bild entstand. Die Autoren schrieben, dass „niemand behaupten kann“, das Körperbild sei durch eine Folge ultravioletter Blitze entstanden, und dass seine Entstehung weiterhin unbekannt ist. Gezeigt haben sie, dass eine so dünne Färbung überhaupt schwer zu erzeugen ist.</p>`,
      emH: 'Die Licht-Hypothese, veranschaulicht',
      zoomH: 'Wie dünn ist das Bild?',
      zoomLede: 'Zoomen Sie mit dem Schieberegler vom ganzen Tuch bis auf eine einzelne Faser. Das ist die Eigenschaft, an der die meisten Erklärungen scheitern.',
      gridH: 'Jede Erklärung prüfen',
      gridLede: 'Hier sind die sechs wichtigsten Ideen, gemessen an den Eigenschaften oben, dazu eine weitere Frage: Hat jemand auf diese Weise ein ganzes Bild erzeugt?'
    },

    timeline: {
      title: 'Zeitleiste des Grabtuchs von Turin: Geschichte von Lirey bis heute | Wenn ich nicht sehe',
      description: 'Eine interaktive Zeitleiste des Grabtuchs von Turin: die vermutete frühe Geschichte, die belegte Überlieferung seit etwa 1354, die Brände, die Fotografien und die wissenschaftlichen Untersuchungen.',
      h1: 'Zeitleiste',
      lede: 'Die belegte Geschichte des Grabtuchs beginnt um 1354 in Frankreich. Davor ist seine Geschichte eine Hypothese, aufgebaut aus Bildern und Texten, die dieses Tuch beschreiben können oder auch nicht. Die Zeitleiste hält beides auseinander.',
      tracks: { cloth: 'Das Tuch', science: 'Wissenschaft', church: 'Kirche', world: 'Welt' },
      legend: { cloth: 'Belegtes Ereignis', science: 'Wissenschaftliche Studie', hyp: 'Vermutet oder legendär' },
      cert: { documented: 'Belegt', probable: 'Wahrscheinlich', hypothesized: 'Vermutet', legendary: 'Legende' },
      listH: 'Alle Ereignisse',
      icon: { h: 'Das Gesicht und eine Ikone aus dem 6. Jahrhundert',
        altShroud: 'Das Gesicht auf dem Grabtuch, Negativansicht', altIcon: 'Ikone Christus Pantokrator, Katharinenkloster, Sinai, 6. Jahrhundert',
        shroud: 'Grabtuch', iconLabel: 'Sinai-Ikone',
        text: `<p>Das ist die älteste erhaltene Ikone des Christus Pantokrator, gemalt im 6. Jahrhundert und aufbewahrt im Katharinenkloster auf dem Sinai. Schieben Sie zwischen ihr und dem Gesicht auf dem Grabtuch hin und her. Beide sind so skaliert, dass die Augen übereinanderliegen.</p>
<p>Befürworter einer frühen Geschichte verweisen auf gemeinsame Merkmale: die lange Nase, den gespaltenen Bart, die schweren Augenlider und die ungleichen Wangen. In den 1930er-Jahren zählte Paul Vignon kleine Eigenheiten auf, von denen er glaubte, dass byzantinische Künstler sie vom Tuch übernommen hatten, etwa eine viereckige Form zwischen den Augenbrauen.</p>`,
        skeptic: 'Die Antwort der Skeptiker: Ähnlichkeit kann nicht zeigen, was zuerst da war. Ein Künstler des 14. Jahrhunderts, der ein Grabtuch Jesu herstellte, hätte das Gesicht übernommen, das die Ikonen zum Standard gemacht hatten. Die Ähnlichkeit passt dazu, dass das Grabtuch alt ist, und ebenso gut dazu, dass es den Ikonen nachempfunden wurde.' },
      map: { h: 'Wo das Tuch gewesen ist', alt: 'Karte der belegten und vermuteten Wege des Grabtuchs, von Jerusalem nach Turin',
        keyDoc: 'Belegt', keyHyp: 'Vermutet',
        jerusalem: 'Jerusalem, 30 n. Chr.?', edessa: 'Edessa (Urfa), 6. bis 10. Jh.?', constantinople: 'Konstantinopel, 944 bis 1204?', athens: 'Athen, nach 1204?',
        lirey: 'Lirey, um 1354', chambery: 'Chambéry, 1502 bis 1578', turin: 'Turin, seit 1578',
        caption: 'Durchgezogene Linien sind belegt. Der gestrichelte Weg ist eine Hypothese, vor allem des Historikers Ian Wilson, die das Grabtuch mit dem Bild von Edessa (dem Mandylion) gleichsetzt. Die meisten Historiker lehnen diese Gleichsetzung ab. Zwischen 1453 und 1578 reiste das Tuch außerdem mit dem Haus Savoyen, sodass der tatsächlich belegte Weg mehr Stationen hat als gezeigt.' }
    },

    videos: {
      title: 'Videos über das Grabtuch von Turin, Aussage für Aussage geprüft | Wenn ich nicht sehe',
      description: 'Drei beliebte Videos über das Grabtuch von Turin, Aussage für Aussage mit Zeitmarken geprüft: was standhält, was umstritten ist und was falsch ist.',
      h1: 'Beliebte Videos, geprüft',
      lede: 'Die meisten Menschen begegnen dem Grabtuch über Videos. Wir haben drei beliebte Videos von Anfang bis Ende angesehen, einschließlich der Transkripte, und ihre wichtigsten Aussagen geprüft. Einige sind ausgezeichnet. Manche sind falsch. Klicken Sie auf eine Zeitangabe, um zu dieser Stelle zu springen.',
      play: 'Video abspielen (lädt YouTube)', watch: 'Auf YouTube ansehen',
      rate: { strong: 'Hält stand', disputed: 'Umstritten', weak: 'Falsch oder übertrieben' },
      missingH: 'Was keines der drei erwähnt',
      missingAfter: 'Eine faire Darstellung muss sich auch damit befassen. Jeden dieser Punkte finden Sie in der <a href="evidence.html">Fallakte</a>.'
    },
    library: {
      title: 'Forschungsbibliothek zum Grabtuch von Turin: Artikel und Studien | Wenn ich nicht sehe',
      description: 'Eine durchsuchbare Bibliothek mit Forschungsartikeln, Studien und Beiträgen zum Grabtuch von Turin, dafür und dagegen, mit direkten Links zu den Originalen auf shroud.com und in Fachzeitschriften.',
      h1: 'Bibliothek',
      lede: 'Mehr als 2.400 Artikel, Studien, Beiträge und Newsletter, fast alle aus dem Archiv von shroud.com, das Barrie Schwortz seit den 1990er-Jahren aufbaute und bis zu seinem Tod 2024 pflegte. Beginnen Sie mit den 25 wichtigsten Texten, suchen Sie dann nach Wörtern, filtern Sie nach Thema, und gehen Sie direkt zum Original.',
      keyH: 'Hier beginnen: 25 wichtige Texte, beide Seiten', keyLede: 'So ausgewählt, dass ein skeptischer Leser auf jeder Seite die stärksten Arbeiten kennenlernt, ungefähr in der Reihenfolge, in der sich die Debatte entwickelte.', allH: 'Die ganze Bibliothek',
      search: 'Titel, Autoren und Zeitschriften durchsuchen',
      count: 'Arbeiten angezeigt',
      peer: 'Begutachtet',
      topics: { radiocarbon: 'Radiokarbondatierung', blood: 'Blut', 'image-formation': 'Entstehung des Bildes', history: 'Geschichte', textile: 'Das Leinen', 'anatomy-medical': 'Medizin', 'pollen-botany': 'Pollen und Pflanzen', 'photography-imaging': 'Fotografie', '3d-vp8': '3D', coins: 'Münzen', sudarium: 'Sudarium', 'art-history': 'Kunstgeschichte', critique: 'Kritiken', overview: 'Übersichten', conference: 'Konferenzen' },
      stances: { 'pro-authenticity': 'Spricht für die Echtheit', skeptical: 'Skeptisch', neutral: 'Neutral' },
      more: `<h2>In Erinnerung an Barrie M. Schwortz (1946 bis 2024)</h2>
<p>Barrie Schwortz war der offizielle Dokumentarfotograf des Shroud of Turin Research Project von 1978. Er war Jude, begann als Skeptiker und verbrachte den Rest seines Lebens damit, die Forschung für alle kostenlos auf shroud.com zugänglich zu machen. Den größten Teil dieser Bibliothek gibt es, weil er sie bewahrt hat. Wir widmen ihm diese Seite.</p>
<p>Sie möchten weiterlesen? Das <a href="https://www.shroud.com/" target="_blank" rel="noopener">Archiv von shroud.com</a>, die offizielle Website der <a href="https://www.sindone.org/" target="_blank" rel="noopener">Erzdiözese Turin</a> und der Wikipedia-Artikel <a href="https://en.wikipedia.org/wiki/Shroud_of_Turin" target="_blank" rel="noopener">Shroud of Turin</a> (auf Englisch), der eher skeptisch ist und ein guter Test für Ihre Schlussfolgerungen.</p>`
    },

    next: {
      title: 'Und jetzt? Nach dem Grabtuch von Turin | Wenn ich nicht sehe',
      description: 'Sie haben die Belege zum Grabtuch von Turin gesehen. Ob Sie zweifeln, sich wundern oder glauben, hier sind ehrliche nächste Schritte.',
      h1: 'Und jetzt?',
      lede: 'Wo auch immer Sie nach dem Blick auf die Belege gelandet sind, es gibt einen sinnvollen nächsten Schritt. Keiner verlangt, dass Sie sich sicherer geben, als Sie sind.',
      paths: [
        { id: 'doubt', h: 'Wenn Sie noch zweifeln', body: `<p>Gut. Ein Zweifel, der weitersucht, ist ehrlich. Thomas zweifelte, und er wurde nicht abgewiesen.</p><ul><li>Lesen Sie die stärksten Argumente dagegen in der <a href="evidence.html">Fallakte</a> und die Quellen dahinter.</li><li>Probieren Sie den Rechner mit Ihren eigenen Zahlen aus, und achten Sie darauf, welche Annahme Ihre Antwort entscheidet.</li><li>Fragen Sie sich, welcher Beleg Ihre Meinung ändern würde und ob es ihn geben könnte.</li></ul>` },
        { id: 'wonder', h: 'Wenn Sie sich wundern', body: `<p>Das Grabtuch ist eine Frage nach einem Mann. Der beste nächste Schritt ist, ihm dort zu begegnen, wo er am ausführlichsten beschrieben wird.</p><ul><li>Lesen Sie das Johannesevangelium. Es dauert etwa zwei Stunden, und es endet mit Thomas.</li><li>Sprechen Sie mit jemandem, dem Sie vertrauen und der glaubt, und stellen Sie Ihre schwierigste Frage.</li><li>Wenn Sie noch nie gebetet haben, versuchen Sie ein einfaches, ehrliches Gebet: Wenn es dich gibt, zeig es mir.</li></ul>` },
        { id: 'believe', h: 'Wenn Sie glauben', body: `<p>Dann lautet die Frage nicht mehr, was das Tuch beweist, sondern wie Sie leben.</p><ul><li>Seien Sie jemand, dem ein Skeptiker vertrauen kann: fair, neugierig und freundlich, besonders gegenüber Menschen, die anderer Meinung sind.</li><li>Teilen Sie diese Website mit dem nachdenklichsten Skeptiker, den Sie kennen, und hören Sie zu, was er sagt.</li><li>Helfen Sie in dieser Woche jemandem, der in Not ist. Ein Glaube, der handelt, ist der beste Beleg, den die meisten Menschen je sehen werden.</li></ul>` }
      ],
      story: `<h2>Demnächst: die Geschichte eines Menschen</h2><p>Nelson Inno, der diese Website geschaffen hat, wird hier seine eigene Geschichte erzählen, dazu eine Betrachtung über das, was er das Muster nennt, das zu Gott führt. Sie wird auf einer eigenen Seite stehen, getrennt von den Belegen, damit Sie beides für sich abwägen können.</p>`,
      quote: 'Diese aber sind geschrieben, daß ihr glaubet, Jesus sei Christus, der Sohn Gottes.',
      quoteCite: 'Johannes 20,31'
    },
    about: {
      title: 'Über Wenn ich nicht sehe: Warum es diese Website gibt | Wenn ich nicht sehe',
      description: 'Wenn ich nicht sehe ist eine kostenlose, nicht kommerzielle Website über das Grabtuch von Turin. Wie wir Belege bewerten, woher unsere Bilder stammen und wer sie gebaut hat.',
      h1: 'Über diese Website',
      lede: 'Warum es sie gibt, wie wir arbeiten und woher alles stammt.',
      body: `<h2>Warum es diese Website gibt</h2>
<p>Das Grabtuch von Turin kann ein mittelalterliches Kunstwerk sein, eine bewusste Fälschung oder das Grabtuch von Jesus von Nazareth. Was auch immer es ist, es verdient mehr Gehör als eine Schlagzeile von zehn Sekunden. Das meiste, was man online findet, ist geschrieben, um zu gewinnen: Die eine Seite ruft „Beweis“, die andere „Fälschung“. Diese Website ist geschrieben, um zu informieren.</p>
<p>Sie ist nach Thomas benannt, der sich weigerte zu glauben, bevor er die Male der Nägel sehen konnte. Wir halten einen Zweifel wie seinen für ehrlich, und er verdient Belege, keinen Druck.</p>
<h2>Wer sie gemacht hat</h2>
<p>Wenn ich nicht sehe wurde von Nelson Inno, einem salvadorianischen Gründer, als kostenloses, ehrenamtliches Projekt geschaffen. Offen gesagt: Nelson hält das Grabtuch für echt. Genau deshalb hält sich die Website an eine Regel: Die stärksten Argumente gegen die Echtheit werden in voller Stärke gezeigt, direkt neben den Argumenten dafür. Wenn wir dem einmal nicht gerecht werden, wollen wir es wissen.</p>
<h2>Wie wir arbeiten</h2>
<ul>
<li>Jede Tatsachenbehauptung ist mit einer Quelle verlinkt. Wo möglich, ist die Quelle ein begutachteter Artikel oder ein Primärdokument.</li>
<li>Argumente beider Seiten werden auf derselben Skala bewertet: stark, mittel, schwach, umstritten oder widerlegt.</li>
<li>Beliebte Behauptungen, die nicht standhalten, werden als solche gekennzeichnet, auch wenn sie der Echtheit nützen würden.</li>
<li>Künstlerische Veranschaulichungen, wie die Licht-Animation, sind immer als Veranschaulichung einer Hypothese gekennzeichnet.</li>
<li>Keine Werbung, kein Tracking, nichts zu verkaufen.</li>
</ul>
<h2>Einen Fehler gefunden?</h2>
<p>Schreiben Sie an <a href="mailto:hey@everybodyknowsyou.com">hey@everybodyknowsyou.com</a>, mit der Seite, der Aussage und Ihrer Quelle. Korrekturen von Skeptikern sind besonders willkommen.</p>
<h2>Demnächst</h2>
<p>Nelsons eigene Geschichte und eine Betrachtung über das, was er das Muster nennt, das zu Gott führt, werden auf einer eigenen Seite stehen. Die Belege bleiben hier, getrennt, damit Sie sie für sich abwägen können.</p>`,
      creditsH: 'Bildnachweise', sourceLink: 'Quelle'
    }
  }
};
