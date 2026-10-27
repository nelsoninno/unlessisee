// Texto em português do Brasil. Linguagem simples, sem travessões. HTML permitido nos campos longos.
export default {
  brand: 'See The Shroud',
  locale: 'pt_BR',
  shareImage: 'social-share-see-the-shroud-seetheshroud.org.jpg',
  keywords: 'See The Shroud, explorar o Santo Sudário de Turim, examinar o Santo Sudário de Turim, ver o Santo Sudário de perto, Santo Sudário interativo, site interativo do Santo Sudário, Santo Sudário em alta resolução, guia visual do Santo Sudário, tudo sobre o Santo Sudário de Turim, Santo Sudário de Turim, Sudário de Turim, Santo Sudário, Santo Sudário evidências, Santo Sudário datação por carbono, Santo Sudário imagem negativa, Santo Sudário 3D, o Santo Sudário é verdadeiro, mortalha de Jesus, sindonologia, Shroud of Turin, STURP, Secondo Pia',
  shareAlt: 'O rosto do Santo Sudário de Turim como negativo fotográfico',
  orgDescription: 'See The Shroud é um site educativo gratuito e sem fins comerciais onde você pode explorar e examinar de perto o Santo Sudário de Turim (em alta resolução, em negativo e em 3D) e pesar as evidências a favor e contra a sua autenticidade, com todas as fontes, em 12 idiomas.',
  ui: {
    skip: 'Pular para o conteúdo', menu: 'Menu', mainNav: 'Principal', language: 'Idioma',
    exhibit: 'Item', detail: 'Os detalhes', skeptic: 'A melhor resposta cética', reply: 'A réplica',
    theCase: 'O argumento completo', replyAgainst: 'O que respondem os defensores', whyRating: 'Por que esta classificação:',
    all: 'Todos', allTopics: 'Todos os temas', shown: 'exibidos', openAll: 'Abrir ou fechar todos',
    prev: 'Anterior', next: 'Próximo', problems: 'Problemas desta ideia'
  },
  nav: [
    { slug: 'explore', label: 'Explorar' },
    { slug: 'evidence', label: 'Dossiê' },
    { slug: 'wounds', label: 'Feridas' },
    { slug: 'dating', label: 'Datação' },
    { slug: 'image', label: 'Como se formou' },
    { slug: 'timeline', label: 'Linha do tempo' },
    { slug: 'videos', label: 'Vídeos' },
    { slug: 'library', label: 'Biblioteca' },
    { slug: 'next', label: 'E agora?' },
    { slug: 'about', label: 'Sobre' }
  ],
  footer: {
    about: 'Um projeto gratuito e sem fins comerciais. Cada afirmação tem fonte no dossiê, inclusive as fontes que discordam de nós.',
    explore: 'Explorar', more: 'Aprofundar', extra: [],
    rights: 'Texto {year} See The Shroud. Livre para compartilhar com um link para o site. Créditos das imagens na página Sobre.',
    eky: 'Site feito com amor, por', ekyAria: 'Site feito com amor por everybodyknowsyou.com'
  },
  strength: { strong: 'Forte', moderate: 'Moderada', weak: 'Fraca', disputed: 'Contestada', debunked: 'Refutada' },
  lean: { for: 'Aponta para a autenticidade', against: 'Aponta para uma origem medieval', neutral: 'Contexto' },
  categories: { image: 'A imagem', blood: 'Sangue', anatomy: 'Anatomia e feridas', textile: 'O linho', dating: 'Datação', history: 'História', botany: 'Pólen e plantas', 'imaging-3d': 'Informação 3D', 'image-formation': 'Como a imagem se formou', other: 'Outros' },
  fig: {
    scaleAlt: 'Diagrama do pano de 4,4 metros com as imagens frontal e dorsal de um homem, cabeça com cabeça',
    scaleFront: 'Imagem frontal', scaleBack: 'Imagem dorsal', scaleLen: 'cerca de 4,4 metros', scaleWid: 'cerca de 1,1 m',
    scaleCaption: 'O pano inteiro, fotografado por Giuseppe Enrie em 1931. O corpo ficou deitado sobre uma metade. A outra metade foi dobrada sobre a cabeça e estendida pela frente até os pés. Por isso as imagens frontal e dorsal se encontram nas cabeças.',
    foldFrontAlt: 'Metade frontal do Sudário, com a imagem frontal do homem', foldBackAlt: 'Metade dorsal do Sudário, com a imagem dorsal do homem',
    foldBtn: 'Dobrar como envolveu o corpo', unfoldBtn: 'Desdobrar de novo'
  },
  ui3d: { depth: 'Profundidade', light: 'Luz', clay: 'Argila', negative: 'Negativo', fallback: 'Esta visualização 3D precisa de WebGL, que está desativado no seu navegador.' },
  emanation: {
    label: 'Uma hipótese, visualizada. Não é evidência.',
    note: "Apenas para ilustração. Para simplificar, o vídeo mostra só a metade da frente do pano, com a luz projetada em linha reta do corpo até ele.",
    alt: 'Animação: uma luz sobe de um corpo sob um pano de linho, a imagem se forma no pano e o pano cai, plano',
    captions: [
      'Um corpo está sob um pano de linho, no escuro.',
      "Primeiro, o sangue impregna o pano por contato. As análises não encontraram imagem debaixo das manchas de sangue.",
      'Hipótese: uma liberação de energia curta e intensa, vinda do próprio corpo.',
      'A luz segue em linha reta para cima e para baixo, não em todas as direções.',
      'Só a superfície mais externa das fibras escurece. Sem tinta, sem queimadura.',
      'O físico John Jackson propôs que o pano então caiu através de um corpo que já não estava ali.',
      'O que fica é uma imagem tênue que nenhum experimento conseguiu reproduzir em todos os detalhes.'
    ],
    ui: { play: 'Reproduzir', pause: 'Pausar', replay: 'Ver de novo', time: 'Tempo' }
  },
  powers: {
    label: 'Nível de zoom', prev: 'Afastar', next: 'Aproximar',
    fiberNote: 'Um fio é um feixe de fibras. Só as fibras de cima estão coloridas.',
    layerLabel: 'camada colorida, cerca de 0,2 µm', lumen: 'interior da fibra',
    steps: [
      { size: '4,4 m', title: 'O pano inteiro', text: 'Imagens frontal e dorsal, cabeça com cabeça. A poucos passos de distância, mal se vê o homem. A imagem é tênue assim.' },
      { size: '25 cm', title: 'O rosto', text: 'De perto, o rosto não tem contornos, nem pinceladas, nem direção de luz. Claro e escuro estão invertidos, como num negativo fotográfico.' },
      { size: '0,25 mm', title: 'Um único fio', text: 'Cada fio tem cerca de um quarto de milímetro de espessura, tecido em padrão de três por um. Onde está a imagem, só o alto dos fios voltados para o corpo está colorido. Os fios de baixo continuam brancos.' },
      { size: '15 µm', title: 'As fibras de um fio', text: 'Um fio é feito de cerca de 100 a 200 fibras de linho. Nas áreas da imagem, só as duas ou três fibras mais de cima estão coloridas. As áreas mais escuras da imagem não têm fibras mais escuras, têm mais fibras coloridas.' },
      { size: '0,2 µm', title: 'A camada colorida', text: 'Dentro de uma fibra, a cor fica restrita à camada mais externa, com cerca de 200 bilionésimos de metro de espessura, a espessura da parede celular primária da fibra. O interior da fibra fica intacto. Esta é a propriedade que mais dificulta reproduzir a imagem.' }
    ]
  },
  grid: {
    caption: 'Quais propriedades da imagem cada hipótese consegue explicar',
    corner: 'Hipótese',
    cols: ['Só 0,2 µm', 'Sem tinta', 'Negativo', '3D', 'Sangue primeiro', 'Sem brilho UV', 'Não só contato', 'Meio-tom', 'Imagem completa feita em laboratório'],
    legend: { y: 'Explica', p: 'Em parte, ou contestado', n: 'Não explica', u: 'Não testado' },
    rows: [
      { name: 'Uma pintura', v: 'nnpnpyyny' },
      { name: 'Queimadura de uma estátua aquecida', v: 'pyypnnnpy' },
      { name: 'Fricção sobre um relevo', v: 'ppypppppy' },
      { name: 'Fotografia primitiva', v: 'pnynuyynp' },
      { name: 'Reação com gases do corpo', v: 'yyypyyppn' },
      { name: 'Uma explosão de radiação', v: 'pyyuyuyun' }
    ],
    note: 'Este é o nosso resumo do que defensores e críticos de cada ideia relatam. Pessoas sensatas pontuariam algumas células de outro jeito. Repare na última coluna: as hipóteses que explicam mais propriedades são também as que nunca produziram uma imagem completa em laboratório.'
  },
  dating: {
    bc: 'a.C.', crucifixion: 'Crucificação, por volta de 30 a 33 d.C.', documented: 'Documentado, desde cerca de 1354',
    chartAlt: 'Gráfico que compara o intervalo da datação por radiocarbono de 1988 com outros métodos de datação, num eixo de anos do calendário',
    labsAlt: 'Gráfico das doze medições de radiocarbono publicadas pelos laboratórios do Arizona, de Oxford e de Zurique, com barras de erro',
    bpAxis: 'Idade por radiocarbono, em anos antes de 1950 (AP). Menor significa mais recente.', bpShort: 'anos de radiocarbono AP', labMean: 'Média do laboratório', combined: 'Combinado'
  },
  notFound: { title: 'Página não encontrada | See The Shroud', h1: 'Esta página não está aqui', text: 'O link pode ser antigo, ou o endereço pode ter um erro de digitação. Tudo no site começa na página inicial.', cta: 'Ir para a página inicial' },

  pages: {
    index: {
      title: 'See The Shroud: explore o Santo Sudário de Turim e suas evidências',
      description: "Explore o Santo Sudário de Turim online, de graça: dê zoom, veja o negativo e a imagem em 3D, encontre cada ferida e pese as evidências a favor e contra.",
      h1: 'Examine o Santo Sudário de Turim por conta própria',
      lede: 'Um pano de linho de 4,4 metros traz a imagem tênue de um homem que foi flagelado e crucificado. Uns dizem que é uma falsificação medieval. Outros, que é a mortalha de Jesus. Aqui estão as evidências dos dois lados, com todas as fontes, para que você mesmo julgue.',
      cta1: 'Explorar o pano', cta2: 'Ler o dossiê',
      faceAlt: 'O rosto do Santo Sudário de Turim. Passe o cursor sobre ele para vê-lo como negativo fotográfico.',
      hint: 'Veja a chapa se revelar',
      hint2: 'Passe o cursor sobre o rosto para vê-lo como o olho o vê',
      faceCaption: 'O rosto do Sudário. Fotografia de Giuseppe Enrie, 1931.',
      thomasText: `<h2>Tomé pediu para ver as marcas</h2>
<p>Este site foi feito no espírito do cético mais honesto dos Evangelhos. Tomé não acreditou no que os amigos lhe contaram. Ele queria uma prova que pudesse ver e tocar: as marcas dos cravos, a ferida no lado.</p>
<p>O Santo Sudário de Turim mostra um homem com marcas do mesmo tipo. Se ele é o que muitos acreditam que é, essa é a pergunta que este site deixa para você. Vamos mostrar as marcas, os testes, as dúvidas e as respostas, e indicar cada fonte.</p>`,
      thomasCta: 'Ver as marcas',
      objH: 'O que é',
      objLede: 'Uma única peça de linho com uma imagem frontal e uma dorsal de um homem nu, cabeça com cabeça, além de manchas de sangue, marcas de queimadura e manchas de água deixadas por sua longa história. Está guardado em Turim, na Itália, desde 1578, exceto durante a Segunda Guerra Mundial.',
      facts: [
        { n: '4,4 m', t: 'de comprimento, e cerca de 1,1 m de largura' },
        { n: '3 : 1', t: 'tecido em sarja espinha de peixe, um padrão caro' },
        { n: '0,2 µm', t: 'profundidade aproximada da cor nas fibras da imagem. Um fio de cabelo tem cerca de 70 µm.' },
        { n: '1354', t: 'por volta deste ano ele aparece pela primeira vez nos registros históricos, em Lirey, na França' },
        { n: '1260 a 1390', t: 'o intervalo de datas da datação por carbono de 1988' }
      ],
      cmpPos: 'Como o olho o vê', cmpNeg: 'Como o negativo de 1898 o mostrou',
      cmpPosAlt: 'O rosto do Sudário como aparece a olho nu', cmpNegAlt: 'O rosto do Sudário como negativo fotográfico',
      cmpLabel: 'Deslize para comparar o positivo e o negativo',
      cmpCaption: 'Arraste a linha. À esquerda: o negativo fotográfico. À direita: o que você vê no pano.',
      negYear: 'Turim, 28 de maio de 1898',
      negH: 'A noite em que uma fotografia mudou a pergunta',
      negText: `<p>Secondo Pia, advogado e fotógrafo amador, recebeu permissão para tirar as primeiras fotografias do pano. Quando revelou sua chapa de vidro, esperava ver uma imagem invertida e fantasmagórica. Em vez disso, o negativo mostrou um retrato nítido e natural de um homem.</p>
<p>A imagem no pano se comporta como um negativo fotográfico: claro e escuro estão invertidos. Ninguém tinha percebido isso antes, porque ninguém tinha visto a imagem invertida até ela ser fotografada. É por isso que o estudo moderno do Sudário começou.</p>`,
      invertBtn: 'Inverter esta página, como a chapa de vidro de Pia', invertBack: 'Voltar ao normal',
      negSkeptic: 'A resposta cética: uma imagem feita pressionando um pano sobre um relevo, ou esfregando pó sobre ele, também tem os tons invertidos. Então uma imagem negativa, por si só, não exige uma fotografia nem um milagre. A verdadeira pergunta é se esses métodos correspondem a todo o resto da imagem.',
      reliefAlt: 'O rosto do Sudário transformado num relevo 3D a partir do brilho da imagem',
      d3H: 'Ela contém informação 3D',
      d3Text: `<p>Em 1976, o físico John Jackson e o engenheiro Eric Jumper colocaram uma fotografia do Sudário num VP-8 Image Analyzer, um aparelho feito para transformar brilho em altura. Fotografias comuns saem distorcidas. O Sudário saiu como um corpo coerente em relevo.</p>
<p>O motivo: o quanto a imagem é escura em cada ponto parece acompanhar a distância entre o pano e o corpo naquele ponto. A medição por trás disso, publicada em 1984, foi modesta: 13 pontos, com correlação de r ao quadrado de 0,60 e uma ampla margem de erro. Mas o efeito é fácil de ver. Esta visualização 3D é feita do mesmo jeito, ao vivo no seu navegador, direto da imagem. Arraste para girá-la.</p>`,
      d3Skeptic: 'A resposta cética: imagens feitas a partir de um relevo raso, como uma fricção sobre um baixo-relevo, também trazem alguma informação de profundidade. Em 2025, um designer 3D, Cicero Moraes, argumentou com base em simulação por computador que a imagem se ajusta melhor a um baixo-relevo do que a um corpo inteiro. O debate é sobre o quanto cada método corresponde ao pano real.',
      d3Cta: 'Comparar com uma pintura em 3D',
      marksH: 'As marcas de uma crucificação',
      marksText: `<p>Patologistas forenses que estudaram a imagem descrevem mais de cem pequenas feridas de um flagelo romano, feridas perfurantes ao redor da cabeça, um rosto inchado, escoriações nos ombros, uma ferida de cravo no pulso e não na palma da mão, e uma ferida no lado, entre as costelas, que sangrou depois da morte.</p>
<p>Isso corresponde aos relatos dos Evangelhos, que mencionam flagelação, espinhos, golpes, cravos e uma lança no lado. Vários detalhes, como o cravo no pulso, contrariam o modo como os artistas medievais costumavam pintar a crucificação.</p>`,
      marksAlt: 'Detalhe das mãos cruzadas no Sudário, com a ferida no pulso', marksCaption: 'As mãos cruzadas. O fluxo de sangue sai do pulso, não da palma. Vista em negativo.',
      marksCta: 'Ver cada ferida ao lado do texto do Evangelho',
      dateH: 'O teste que disse medieval',
      dateText: `<p>Em 1988, três laboratórios, no Arizona, em Oxford e em Zurique, dataram por carbono pequenas amostras de um canto do pano. O resultado combinado, publicado na revista Nature em 1989, foi de 1260 a 1390 d.C., com 95% de confiança. Este é o argumento isolado mais forte contra a autenticidade, e dedicamos a ele uma página inteira.</p>
<p>Desde então, pesquisadores questionaram o lugar de onde a amostra foi tirada, se as amostras eram coerentes entre si e se os dados brutos sustentavam a precisão publicada. Outros métodos de datação deram datas mais antigas, embora nenhum seja tão consolidado quanto a datação por radiocarbono.</p>`,
      dateCta: 'Ler a história completa da datação',
      howH: 'Como a imagem foi parar ali?',
      howLede: 'Depois de mais de um século de estudo, ninguém tem uma resposta completa. Isso não é um slogan, é onde a ciência está. Aqui está uma das hipóteses mais ousadas, mostrada como animação.',
      howText: `<p>A imagem tem uma cor amarelo-palha, só nas fibras mais de cima do linho. Não há tinta, nem pinceladas, nem sinal de que a imagem tenha penetrado nos fios. Ela não se comporta como uma queimadura comum: as verdadeiras marcas de queimadura do incêndio de 1532 brilham sob luz ultravioleta, e a imagem do corpo não.</p>
<p>Os pesquisadores já propuseram tinta, uma estátua aquecida, pó esfregado sobre um relevo, uma forma primitiva de fotografia, uma reação química com gases de um corpo e uma explosão de radiação. Cada ideia explica algumas características e tem dificuldade com outras.</p>`,
      howEnea: `<h3>O que um laser consegue e o que não consegue fazer</h3>
<p>Entre 2005 e 2010, cientistas da ENEA, a agência nacional italiana para novas tecnologias, dispararam pulsos muito curtos de luz laser ultravioleta contra o linho. Numa faixa estreita de ajustes, eles coloriram o linho num amarelo-palha parecido com o do Sudário, sem queimá-lo. Na maioria das fibras, a cor foi mais fundo do que no Sudário. Em pelo menos uma fibra, ficou na fina parede externa, como no Sudário.</p>
<p>Numa conta aproximada, eles multiplicaram a intensidade de laser que funcionou pela área de um corpo humano. O resultado, cerca de 34 trilhões de watts, é muito maior do que o de qualquer fonte ultravioleta construída até hoje. É uma estimativa grosseira para fazer isso com um único pulso de laser. Não é uma medição de como a imagem foi realmente feita. Os autores escreveram que “ninguém pode afirmar” que a imagem foi feita assim, e que sua origem continua desconhecida.</p>`,
      howCta: 'Comparar todas as hipóteses',
      weighH: 'Pese você mesmo',
      weighText: `<p>A maioria dos debates sobre o Sudário são, na verdade, debates sobre quanto cada evidência deve pesar. Por isso fizemos uma pequena calculadora. Você decide com que força cada item aponta para um lado ou para o outro, e ela mostra aonde os seus próprios julgamentos levam.</p>
<p>Ela não vai lhe dar a resposta. Vai mostrar de quais suposições a sua resposta depende.</p>`,
      weighCta: 'Abrir a calculadora',
      quote: 'Se em suas mãos não vir o sinal dos cravos ... em maneira nenhuma crerei.',
      quoteCite: 'Tomé, em João 20:25',
      freeH: 'Por que não é uma prova',
      freeText: `<p>Se Deus quisesse forçar a fé, poderia. Um sinal que não deixasse espaço para a dúvida também não deixaria espaço para escolher. O Sudário faz algo mais discreto: dá a uma mente séria o suficiente para levar a pergunta a sério, e deixa o último passo para você.</p>
<p>O vídeo da Truthly que verificamos termina com essa ideia, e achamos que é o lugar certo para terminar. Tomé pôde ver as marcas. A resposta que ele recebeu falava de todos os que viriam depois dele.</p>`,
      freeQuote: 'Bem-aventurados aqueles que não virem, e crerem.',
      freeCite: 'Jesus a Tomé, João 20:29',
      faqH: 'Perguntas frequentes',
      faq: [
        { q: 'O Santo Sudário de Turim é verdadeiro?', a: 'É um pano de linho real e muito antigo. Se é a mortalha de Jesus, isso é contestado. A datação por carbono de 1988 o situou entre 1260 e 1390 d.C. Muitos pesquisadores contestam esse resultado, e nenhum método conseguiu ainda reproduzir todas as propriedades da imagem ao mesmo tempo. Este site apresenta os dois lados, com fontes.' },
        { q: 'O que a datação por carbono encontrou?', a: 'Laboratórios do Arizona, de Oxford e de Zurique dataram amostras de um canto em 1988 e relataram de 1260 a 1390 d.C., com 95% de confiança (Damon e outros, Nature, 1989). Os críticos argumentam que o canto pode ter sido remendado, e uma reanálise dos dados brutos feita em 2019 concluiu que as amostras não eram tão coerentes quanto se relatou.' },
        { q: 'A imagem é pintada?', a: 'A equipe científica de 1978 (STURP) concluiu que não é uma pintura: não encontrou pigmento formando a imagem, nem pinceladas, nem aglutinante. O microscopista Walter McCrone discordou e relatou óxido de ferro e outros materiais. A maioria dos estudos posteriores deu razão ao STURP quanto à imagem, embora concorde que há minúsculas partículas de muitos materiais no pano.' },
        { q: 'Por que a imagem é um negativo?', a: 'No pano, claro e escuro estão invertidos em relação a uma imagem normal, então um negativo fotográfico dele parece um retrato natural. Isso foi descoberto por Secondo Pia em 1898. Os céticos lembram que imagens feitas por contato com um relevo também ficam invertidas.' },
        { q: 'O que diz a Igreja Católica?', a: 'A Igreja nunca declarou oficialmente que o Sudário é autêntico, e não exige que ninguém acredite nisso. Os papas recentes o chamaram de ícone do sofrimento de Cristo e rezaram diante dele. A Santa Sé é sua proprietária desde 1983, e o arcebispo de Turim é o seu guardião.' },
        { q: 'Posso vê-lo pessoalmente?', a: 'Ele fica guardado na Catedral de São João Batista, em Turim, numa urna com clima controlado, e normalmente não está exposto ao público. É mostrado em raras exposições públicas, como as de 2010 e 2015, e numa transmissão ao vivo em 2020.' }
      ],
      pathsH: 'Para onde ir agora',
      paths: [
        { slug: 'evidence', h: 'Se você duvida', t: 'Comece pelo dossiê. Todos os argumentos, a favor e contra, classificados pela força.' },
        { slug: 'explore', h: 'Se você quer ver', t: 'Aproxime o pano inteiro, mude para o negativo e encontre cada marca.' },
        { slug: 'library', h: 'Se você quer se aprofundar', t: 'Centenas de artigos e estudos, pesquisáveis, com links para os originais.' },
        { slug: 'next', h: 'Se você se pergunta e agora', t: 'Próximos passos honestos, quer você duvide, se pergunte ou creia.' }
      ]
    },

    explore: {
      title: 'Explore o Santo Sudário de Turim: interativo e em alta resolução | See The Shroud',
      description: 'Visualização interativa do Santo Sudário de Turim inteiro: dê zoom, mude para o negativo, realce a imagem e ache cada ferida, queimadura e remendo, explicados.',
      h1: 'Explore o pano',
      lede: 'Este é o Sudário inteiro, com as imagens frontal e dorsal, cabeça com cabeça. Arraste para mover, role ou faça o gesto de pinça para dar zoom. Mude para o negativo para ver o que Secondo Pia viu em 1898. As marcas numeradas explicam o que você está vendo.',
      imgAlt: 'O Santo Sudário de Turim inteiro, imagens frontal e dorsal',
      ui: { tools: 'Ferramentas de visualização', negative: 'Negativo', enhance: 'Realçar', layerWounds: 'Feridas', layerDamage: 'Fogo e água', layerLinen: 'O linho', tour: 'Visita guiada', fit: 'Pano inteiro', zoomIn: 'Aproximar', zoomOut: 'Afastar', help: 'Arraste para mover. Role ou faça o gesto de pinça para dar zoom. Aperte N para o negativo.', close: 'Fechar', prev: 'Anterior', next: 'Próximo', more: 'Ler mais', skeptic: 'A resposta cética' },
      reliefH: 'A imagem em 3D',
      reliefText: `<p>Quando você transforma o brilho de uma fotografia comum em altura, o resultado é uma bagunça distorcida: o nariz afunda, as sombras sobem, o fundo se estufa. Quando faz o mesmo com o Sudário, obtém um rosto e um corpo coerentes. Compare você mesmo. As duas visualizações abaixo usam exatamente o mesmo método.</p>`,
      reliefFaceAlt: 'Relevo 3D do rosto do Sudário', reliefFaceCap: 'O rosto do Sudário, com o brilho transformado em altura.',
      reliefPaintAlt: 'Relevo 3D de um rosto pintado, com o mesmo método', reliefPaintCap: 'Um rosto pintado, com o mesmo método: não contém informação 3D útil. Pintura: Cabeça de Cristo.',
      reliefBodyAlt: 'Relevo 3D da imagem frontal completa do Sudário', reliefBodyCap: 'A imagem frontal completa em relevo. Gire para ver a forma do corpo.',
      reliefSkeptic: 'Um aviso justo: as nossas visualizações 3D são uma recriação simples da ideia do VP-8, suavizada para a web. Elas mostram o princípio. Não são uma medição científica.',
      photosH: 'Sobre estas fotografias',
      photosText: `<p>As imagens do pano inteiro aqui são fotografias de domínio público. As melhores fotografias do Sudário, feitas por Vernon Miller e Barrie Schwortz para a equipe científica de 1978, e as imagens de altíssima resolução de 2002 e 2008, são protegidas por direitos autorais. Você pode ver muitas delas em <a href="https://www.shroud.com/" target="_blank" rel="noopener">shroud.com</a> e <a href="https://shroudphotos.com/" target="_blank" rel="noopener">shroudphotos.com</a>. Estamos pedindo permissão para mostrá-las aqui.</p>`
    },

    evidence: {
      title: "Santo Sudário de Turim: autêntico ou falso? Provas a favor e contra | See The Shroud",
      description: "O Santo Sudário de Turim é autêntico ou falso? Os grandes argumentos a favor e contra, avaliados pela força, com a melhor resposta cética e as fontes.",
      h1: 'O dossiê',
      lede: 'Todos os principais argumentos sobre o Sudário, a favor e contra. Cada um é classificado pela sua força, com a melhor objeção, a melhor réplica e as fontes. Incluímos os argumentos contra a autenticidade com toda a sua força, porque você deve ouvi-los primeiro de nós.',
      counts: '{n} itens: {f} apontam para a autenticidade, {a} apontam para uma origem medieval.',
      method: 'Como classificamos: Forte significa que os fatos estão bem documentados e que a conclusão é difícil de evitar. Moderada significa evidência real, com uma objeção justa. Fraca significa, no máximo, sugestiva. Contestada significa que pesquisadores sérios discordam sobre os próprios fatos. Refutada significa que não deve ser usada. Classificamos as afirmações dos dois lados com as mesmas regras.',
      filterLean: 'Filtrar por direção', filterCat: 'Filtrar por tema',
      weighH: 'Pese você mesmo',
      weighText: `<p>Comece pela sua probabilidade inicial: antes de qualquer evidência, qual a chance de um pano como este ser a verdadeira mortalha de Jesus? Depois, para cada item, decida quanto mais provável seria ver essa evidência se o pano fosse autêntico do que se fosse uma obra medieval. Mova o controle para a direita se a evidência combina melhor com a autenticidade, e para a esquerda se combina melhor com uma origem medieval.</p>
<p>Esta é a regra de Bayes, a forma padrão de combinar evidências. Experimente as configurações do cético e do crente para ver quão longe uma da outra duas pessoas sensatas podem começar, e para onde a evidência as leva.</p>`,
      wui: {
        neutral: 'Voltar ao neutro', skeptic: 'Configuração de um cético', believer: 'Configuração de um crente',
        prior: 'Seu ponto de partida (chances iniciais)', priorHelp: 'A maioria das relíquias medievais não era o que dizia ser, então um ponto de partida baixo é razoável.',
        result: 'Seu resultado: chance de o pano ser autêntico', medieval: 'Medieval', authentic: 'Autêntico',
        noEffect: 'Sem efeito',
        favorsA: '{x} vezes mais provável se for autêntico', favorsM: '{x} vezes mais provável se for medieval',
        oddsFor: 'Chances: {x} para 1 a favor da autenticidade', oddsAgainst: 'Chances: 1 em {x}',
        caveat: 'Isto trata cada item como independente, o que é uma simplificação. Alguns itens estão ligados, por exemplo, vários dependem das mesmas fotografias. A calculadora mostra como os seus julgamentos se combinam. Ela não os substitui.'
      }
    },

    wounds: {
      title: 'As feridas do Santo Sudário de Turim e os Evangelhos | See The Shroud',
      description: 'Cada ferida do Santo Sudário de Turim, das marcas do flagelo ao cravo no pulso e à ferida no lado, mostrada no pano ao lado do texto do Evangelho.',
      h1: 'As feridas, e o que dizem os Evangelhos',
      lede: 'Clique num número no pano ou numa ferida da lista. Cada marca é explicada do jeito que os patologistas forenses a descrevem, ao lado do versículo do Evangelho a que corresponde, e com a observação cética quando há uma.',
      front: 'Frente', back: 'Costas', alt_front: 'Imagem frontal do homem do Sudário, vista em negativo', alt_back: 'Imagem dorsal do homem do Sudário, vista em negativo',
      figNote: 'As posições são aproximadas. Vista em negativo, em que as marcas de sangue aparecem claras.',
      breath: {
        alt: 'Diagrama de um homem crucificado que alterna entre cair e se erguer para respirar',
        h: 'Por que o sangue nos braços escorre em duas direções',
        text: `<p>Nos antebraços, filetes finos de sangue escorrem em dois ângulos um pouco diferentes, com cerca de dez graus de diferença. Patologistas como Robert Bucklin interpretam isso como sinal de que os braços estiveram em duas posições enquanto o sangue escorria.</p>
<p>Isso combina com o modo como a crucificação mata. Ficar pendurado pelos braços dificulta expirar, então a vítima precisa se erguer apoiando-se nos pés cravados para cada respiração, e depois cair de novo. O sangue sempre escorre para baixo, em linha reta, então quando os braços mudam de ângulo, o rastro na pele muda de direção. Aperte o botão para ver.</p>`,
        up: 'Erguer-se para respirar', down: 'Cair de novo',
        skeptic: 'A melhor resposta cética: um estudo de padrões de manchas de sangue feito em 2018 por Matteo Borrini e Luigi Garlaschelli, com um voluntário e fluxos de sangue reais, concluiu que os rastros dos antebraços exigem posições dos braços diferentes de uma única postura de crucificação, e julgou alguns fluxos irrealistas. Os defensores respondem que um corpo que se moveu durante horas deixaria exatamente esses rastros variados.'
      },
      intro: '<p>A crucificação romana era uma execução pública feita para humilhar. Os Evangelhos descrevem com detalhes simples aquela que importa aqui. O pano registra uma execução com as mesmas características, incluindo algumas que a arte medieval representou errado.</p>',
      after: `<h2>Por que isso importa</h2>
<p>Um falsificador do século XIV teria de conhecer detalhes que a sua própria cultura não conhecia ou não mostrava: que os cravos atravessavam o pulso, que um flagrum romano deixava marcas em forma de halteres, que o sangue de um corpo morto se separa em coágulo e soro. Os céticos respondem que alguns desses detalhes são contestados, e que as próprias marcas de sangue foram estudadas com resultados mistos. Os dois lados estão no <a href="evidence.html">dossiê</a>.</p>`
    },

    dating: {
      title: 'Datação por carbono do Santo Sudário de Turim e o debate | See The Shroud',
      description: 'A datação por radiocarbono do Santo Sudário de Turim, em 1988, deu 1260 a 1390 d.C. Veja as 12 medições, a origem da amostra, as reanálises e outros métodos.',
      h1: 'A datação por carbono',
      lede: 'Este é o argumento isolado mais forte de que o Sudário é medieval, e ele merece um olhar cuidadoso. Aqui está o que foi feito, o que se encontrou, o que os críticos encontraram desde então e o que isso prova e não prova.',
      compareH: 'Todas as datas já propostas, numa só linha',
      chartNote: 'Vermelho: o resultado do radiocarbono de 1988, com 95% de confiança. Verde hachurado: outros métodos, todos aplicados a fibras soltas de origem incerta, e nenhum deles uma técnica de datação consolidada. O círculo marca o estudo com raios X, que comparou um fio com linho do século I e não produziu um intervalo de datas. Passe o cursor ou toque em qualquer barra para ver os detalhes.',
      labsH: 'As doze medições por trás da data',
      labsText: 'Cada linha é uma medição publicada, com o erro declarado. A faixa sombreada é a média ponderada, 689 anos de radiocarbono, com margem de 16 para mais ou para menos. Como os resultados se dispersaram demais, a data publicada usou uma média simples com um erro maior, 691 com margem de 31 para mais ou para menos. Repare como Oxford fica afastada do Arizona. Essa dispersão é o que estatísticos questionaram depois.',
      body: `<h2>O que foi feito</h2>
<p>Em 21 de abril de 1988, na sacristia da Catedral de Turim, Giovanni Riggi cortou uma única tira de um canto do pano, na borda perto dos pés da imagem frontal, logo acima de onde uma amostra tinha sido retirada em 1973. Os especialistas em tecidos Franco Testore e Gabriel Vial e representantes dos três laboratórios acompanharam. Pedaços de cerca de 50 miligramas foram para três laboratórios que usavam espectrometria de massa com acelerador: a Universidade do Arizona, a Universidade de Oxford e o ETH de Zurique. Cada laboratório recebeu também três amostras de controle de idade conhecida. O teste não foi cego: o tecido incomum do Sudário tornava sua amostra fácil de reconhecer, e os autores disseram que tinham desistido dos procedimentos cegos.</p>
<p>Os controles deram certo: linho de um túmulo núbio, linho de uma múmia do século II e fios de uma capa pluvial do século XIII foram todos datados corretamente. As médias dos três laboratórios foram então combinadas numa média com peso igual: 691 anos de radiocarbono antes de 1950, com margem de 31 para mais ou para menos. Os autores usaram esse erro maior porque os resultados se dispersaram mais do que as barras de erro dos próprios laboratórios permitiam. Convertido em anos do calendário, isso dá de 1262 a 1312 d.C. ou de 1353 a 1384 d.C., publicado de forma arredondada como de 1260 a 1390 d.C. O artigo na Nature, assinado por 21 cientistas, chamou isso de prova conclusiva de que o linho é medieval.</p>
<h2>Por que isso importa tanto</h2>
<p>A datação por radiocarbono é um método maduro e bem testado. Os controles funcionaram. E a data cai exatamente onde começa a história documentada: o pano aparece em Lirey, na França, na década de 1350, e um bispo escreveu em 1389 que um artista tinha confessado tê-lo pintado. Para muitos cientistas, essa coincidência encerrou o caso.</p>`,
      sampleH: 'Uma tira, um canto',
      sampleText: `<p>Todos os resultados vieram de uma única tira, com cerca de 7 a 8 centímetros de comprimento, cortada de um canto. Acredita-se que esse canto tenha sido manuseado durante séculos nas exposições públicas, e ele fica ao lado da costura da faixa lateral. Alguns pesquisadores argumentaram que ele foi remendado na Idade Média. Um encontro de trabalho realizado em Turim em 1986 propôs sete laboratórios usando dois métodos diferentes. Em 1987 isso foi reduzido a três laboratórios, todos usando o mesmo método, e em 1988 a uma única tira de um canto.</p>
<p>Os críticos dizem que um único canto não pode falar por um pano de 4,4 metros. Os defensores da data respondem que os laboratórios examinaram a amostra ao microscópio e que ela parecia igual ao pano principal. Em 2010, um fragmento que sobrou no Arizona não mostrou tinta nem revestimento, e só algumas fibras de algodão soltas. Em 2026, os mesmos pesquisadores do Arizona relataram que dois fragmentos restantes correspondem ao pano principal e não mostram contaminação.</p>`,
      sampleAlt: 'O canto do Sudário onde a amostra de 1988 foi cortada', sampleCap: 'O canto da amostra (aproximado), na extremidade dos pés da imagem frontal. Fotografia de Enrie, 1931.',
      debateH: 'Por que os críticos o questionam',
      defenseH: 'Por que continua sendo o argumento contrário mais forte',
      debateFor: `<p>Os resultados não concordam entre si tão bem quanto suas barras de erro afirmavam. O artigo de 1989 admitiu isso: as médias dos três laboratórios não passam num teste padrão de consistência, com um valor de qui-quadrado de 6,4, pouco acima do limite de 5%. O artigo ampliou o erro, mas ainda assim chamou o resultado de conclusivo. Em 2017, os dados brutos foram liberados após um pedido legal, e em 2019 uma equipe liderada por Tristan Casabianca publicou uma reanálise na Archaeometry. O teste de consistência deles deu 15,99, contra um valor crítico de 5,99, e eles concluíram que as amostras não eram homogêneas.</p>
<p>Os estatísticos Marco Riani e colegas (2013) encontraram uma variação da idade medida ao longo da tira, como se algo mudasse ao longo da amostra. Outros pesquisadores sugeriram uma recostura medieval, contaminação ou danos do incêndio de 1532.</p>`,
      debateAgainst: `<p>Nenhuma dessas críticas aponta para o século I. Entre as reanálises estatísticas dos dados de 1988, o maior desvio proposto é de 88 anos de radiocarbono (Walsh e Schwalbe, 2020), o que ainda deixa o pano na Idade Média. Todo mecanismo específico proposto para explicar a data, como fogo, bactérias, monóxido de carbono ou uma explosão de nêutrons, ou falhou num teste ou não pode ser testado.</p>
<p>A teoria do remendo, antes popular, está mais fraca do que em 2005: os fragmentos restantes estudados em 2010 e 2026 não mostraram tinta nem revestimento e corresponderam ao pano principal. Em resumo, as reanálises mostram que o teste de 1988 foi menor e menos limpo do que afirmava. Elas não mostram que a data está errada.</p>`,
      verdict: `<h2>O nosso resumo honesto</h2>
<p>A data do radiocarbono diz medieval, e é a melhor evidência isolada que alguém tem. O teste de 1988 também teve falhas reais de desenho: uma tira, um canto, três laboratórios e resultados que não se encaixam tão bem quanto se relatou. Isso justifica um novo teste, com várias amostras de vários lugares do pano, feito de forma aberta. Não justifica ignorar o resultado.</p>
<p>Se você é cético, esta é a sua carta mais forte, e deve mantê-la. Se você acredita que o pano é autêntico, esta é a pergunta que precisa responder com honestidade. Seja como for, o resto da evidência ainda precisa ser explicado, a começar por <a href="image.html">como a imagem foi feita</a>.</p>`
    },

    image: {
      title: 'Como foi feita a imagem do Santo Sudário de Turim? | See The Shroud',
      description: 'Todas as hipóteses para a imagem do Santo Sudário de Turim, da tinta e queimadura a uma reação química ou explosão de luz, com o que explicam e onde falham.',
      h1: 'Como a imagem foi feita?',
      lede: 'Esta é a pergunta em aberto mais profunda sobre o Sudário. Qualquer explicação, natural ou não, tem de dar conta de uma lista de propriedades muito estranhas. Aqui estão elas, seguidas de todas as principais hipóteses e de seus problemas.',
      propsH: 'O que qualquer explicação precisa explicar',
      propsLede: 'Estas são as propriedades relatadas pelas equipes científicas que estudaram o pano diretamente. Algumas são contestadas nos detalhes. Juntas, elas são o motivo pelo qual ninguém reproduziu a imagem em todos os aspectos.',
      hypH: 'As hipóteses',
      hypLede: 'Em ordem aproximada, da mais natural à menos natural. Cada uma é classificada pelo quanto se ajusta às propriedades acima.',
      props: [
        { n: '0,2 µm', t: 'A cor fica só na camada mais externa das fibras de cima, segundo Rogers e Fanti. Um fio de cabelo tem cerca de 70 µm de espessura.' },
        { n: 'Sem tinta', t: 'Nenhum pigmento, aglutinante ou pincelada forma a imagem, segundo a equipe de 1978.' },
        { n: 'Negativo', t: 'Claro e escuro estão invertidos, então o negativo fotográfico parece natural.' },
        { n: '3D', t: 'O escuro da imagem acompanha a distância entre o pano e o corpo, então ela pode ser transformada num relevo.' },
        { n: 'Sangue primeiro?', t: 'Os testes não encontraram imagem do corpo sob as manchas de sangue, o que a maioria dos pesquisadores interpreta como sangue primeiro, imagem depois. Um artigo de 2026 argumenta que isso não resolve a ordem.' },
        { n: 'Sem brilho', t: 'Sob luz ultravioleta, as queimaduras de 1532 brilham e a imagem do corpo não. Não é uma simples queimadura.' },
        { n: 'Também nos vãos', t: 'Algumas áreas da imagem não estavam tocando o corpo, como entre o nariz e a bochecha. Não é só uma impressão por contato.' },
        { n: 'Meio-tom', t: 'Cada fibra da imagem está colorida ou não está. As áreas mais escuras só têm mais fibras coloridas, como uma foto de jornal.' }
      ],
      hypotheses: [
        { kind: 'Arte', name: 'Uma pintura', strength: 'weak',
          text: 'O microscopista Walter McCrone relatou ocre vermelho (óxido de ferro) em fibras da imagem e do sangue, e vermelhão em fibras do sangue. Ele concluiu em 1980 que um artista medieval pintou a imagem por volta de 1355, com uma tinta muito diluída num aglutinante de gelatina.',
          problems: 'A equipe do STURP, usando fluorescência de raios X, espectroscopia e química no próprio pano, não encontrou pigmento formando a imagem nem aglutinante, e concluiu que não é uma pintura. A tinta penetraria entre os fios; a imagem não penetra. Há partículas de muitos materiais no pano, provavelmente de artistas que encostavam cópias das suas pinturas nele, como se fez durante séculos.',
          sources: [{ label: 'Schwalbe e Rogers 1982, Analytica Chimica Acta', url: 'https://shroud.com/pdfs/Physics%20Chemistry%20of%20Shroud%20Schwalbe%20Rogers%201981%20OCRsm.pdf' }, { label: 'Resumo final do STURP, 1981', url: 'https://www.shroud.com/78conclu.htm' }] },
        { kind: 'Calor', name: 'Uma queimadura feita por uma estátua aquecida', strength: 'weak',
          text: 'Uma estátua ou um relevo de metal, aquecido e coberto com o pano, deixaria uma queimadura acastanhada, com tons invertidos e alguma informação de profundidade.',
          problems: 'As queimaduras brilham num tom avermelhado sob luz ultravioleta. As verdadeiras queimaduras do incêndio de 1532 brilham, e a imagem do corpo não. Um objeto quente também queimaria o pano de lado a lado e não poderia colorir áreas que não tocou.',
          sources: [{ label: 'Resumo final do STURP, 1981', url: 'https://www.shroud.com/78conclu.htm' }] },
        { kind: 'Contato', name: 'Pó ou ácido esfregado sobre um relevo', strength: 'disputed',
          text: 'O investigador Joe Nickell, por volta de 1980, fez a imagem de um rosto aplicando pó em linho molhado moldado sobre um baixo-relevo. Em 2009, o químico Luigi Garlaschelli fez uma imagem em tamanho natural esfregando um pigmento ácido em linho colocado sobre um voluntário e um baixo-relevo, e depois aquecendo e lavando o pano. Os resultados são negativos e trazem alguma informação 3D. Em 2025, Cicero Moraes argumentou com base em simulação 3D que a imagem se ajusta melhor a um baixo-relevo do que a um corpo inteiro.',
          problems: 'Os defensores respondem que essas cópias são visíveis a olho nu de um jeito que o Sudário não é, que sua cor penetra nas fibras em vez de ficar nos 0,2 µm externos, que deixam material para trás e que não explicam por que o sangue veio primeiro. Os defensores da ideia da fricção respondem que o envelhecimento e as lavagens ao longo de séculos poderiam reduzir parte dessa diferença.',
          sources: [{ label: 'Garlaschelli 2010, Journal of Imaging Science and Technology', url: 'https://doi.org/10.2352/J.ImagingSci.Technol.2010.54.4.040301' }, { label: 'Wikipédia: Shroud of Turin, análise da imagem', url: 'https://en.wikipedia.org/wiki/Shroud_of_Turin' }] },
        { kind: 'Óptica', name: 'Protofotografia medieval', strength: 'weak',
          text: 'O historiador da arte Nicholas Allen propôs nos anos 1990 que uma oficina medieval usou uma câmara escura com lente de quartzo e linho tratado com sais de prata para “fotografar” um cadáver ou uma estátua.',
          problems: 'Não há registro histórico de uma tecnologia assim por mais 450 anos, ninguém relatou prata na imagem, e uma fotografia não registraria a distância entre o pano e o corpo do jeito que o Sudário registra.',
          sources: [{ label: 'Wikipédia: Shroud of Turin', url: 'https://en.wikipedia.org/wiki/Shroud_of_Turin' }] },
        { kind: 'Química', name: 'Uma reação natural com gases de um corpo', strength: 'disputed',
          text: 'O químico Raymond Rogers, membro do STURP, propôs uma reação de Maillard: gases liberados por um corpo morto reagem com uma fina camada de resíduos de amido e açúcar deixada no linho pelos métodos antigos de tecelagem, produzindo uma cor amarela tênue só na superfície.',
          problems: 'Isso explicaria a superficialidade e a ausência de tinta. Tem dificuldade para explicar a nitidez e a codificação limpa da distância, já que os gases se espalham em todas as direções, e exige que o corpo deixe o pano antes que se formem manchas de decomposição. Ninguém produziu uma imagem completa desse jeito.',
          sources: [{ label: 'Rogers e Arnoldi 2003, Melanoidins', url: 'https://shroud.com/pdfs/rogers7.pdf' }] },
        { kind: 'Física', name: 'Uma explosão curta de radiação', strength: 'disputed',
          text: 'Vários físicos sugerem que a imagem foi causada por uma explosão de energia breve e intensa, vinda do corpo. Cientistas da ENEA coloriram linho com pulsos de laser ultravioleta de um modo parecido com o Sudário. Giulio Fanti propôs uma descarga corona. John Jackson propôs que o pano desabou através do corpo quando este se tornou mecanicamente “transparente”, registrando a imagem enquanto caía.',
          problems: 'Não se conhece nenhuma fonte natural de uma radiação assim vinda de um corpo humano. As estimativas de energia são enormes. Os experimentos com laser coloriram só pequenas amostras, não uma imagem. Os céticos lembram que uma hipótese que exige um milagre não pode ser testada como uma hipótese natural. Os defensores respondem que é exatamente por isso que ela continua em discussão.',
          sources: [{ label: 'Di Lazzaro e outros 2012, Applied Optics', url: 'https://doi.org/10.1364/AO.51.008567' }, { label: 'Di Lazzaro e outros 2010, encontro de trabalho da ENEA', url: 'https://www.sindone.info/DILAZZA1.PDF' }, { label: 'Jackson 1990, Shroud Spectrum International', url: 'https://shroud.com/pdfs/ssi34part3.pdf' }] }
      ],
      emText: `<p>A animação acima mostra a hipótese que muita gente acha mais convincente: uma explosão de luz vinda do corpo, seguindo em linha reta para cima e para baixo, colorindo só a superfície das fibras, e em seguida o pano caindo através dele. Nós a fizemos para ajudar você a visualizar a ideia. É a imagem de uma hipótese, não a reconstrução de um acontecimento nem uma evidência dele.</p>
<p>Um bom teste para qualquer explicação, natural ou sobrenatural, é ver se ela dá conta das oito propriedades do alto desta página ao mesmo tempo. Até agora, nenhuma demonstrou isso em laboratório.</p>`,
      enea: `<h3>Os experimentos com laser da ENEA</h3>
<p>De 2005 a 2010, uma equipe liderada por Paolo Di Lazzaro na ENEA, em Frascati, disparou pulsos ultracurtos de luz ultravioleta contra o linho. Numa faixa estreita de ajustes, o linho ganhou uma cor amarelo-palha parecida com a do Sudário. Pulsos mais longos ou mais fortes queimaram o linho, e pulsos mais fracos não deixaram cor visível até que o pano fosse envelhecido. A cor costumava ir a vários micrômetros de profundidade. Em pelo menos uma fibra, ficou na parede externa de 0,2 µm, como no Sudário.</p>
<p>Numa conta aproximada, eles multiplicaram a intensidade de laser que funcionou pela área de um corpo humano. O resultado, cerca de 34 trilhões de watts, é muito maior do que o de qualquer fonte ultravioleta construída até hoje. É uma estimativa grosseira para fazer isso num único pulso, não uma medição de como a imagem foi feita. Os autores escreveram que “ninguém pode afirmar” que a imagem do corpo foi feita por uma explosão de flashes ultravioleta, e que o modo como ela se formou continua desconhecido. O que eles mostraram é que esse tipo de coloração fina é extremamente difícil de produzir, para começo de conversa.</p>`,
      emH: 'A hipótese da luz, visualizada',
      zoomH: 'Quão fina é a imagem?',
      zoomLede: 'Use o controle deslizante para ir do pano inteiro até uma única fibra. Esta é a propriedade que derruba a maioria das explicações.',
      gridH: 'Teste cada explicação',
      gridLede: 'Aqui estão as seis ideias principais diante das propriedades acima, mais uma pergunta: alguém já fez uma imagem completa desse jeito?'
    },

    timeline: {
      title: 'Linha do tempo do Santo Sudário de Turim: de Lirey até hoje | See The Shroud',
      description: 'Linha do tempo interativa do Santo Sudário de Turim: a história antiga hipotética, o registro desde cerca de 1354, os incêndios, as fotografias e os testes.',
      h1: 'Linha do tempo',
      lede: 'A história documentada do Sudário começa na França por volta de 1354. Antes disso, sua história é uma hipótese, construída a partir de imagens e textos que podem ou não descrever este pano. A linha do tempo mantém as duas coisas separadas.',
      tracks: { cloth: 'O pano', science: 'Ciência', church: 'Igreja', world: 'Mundo' },
      legend: { cloth: 'Evento documentado', science: 'Estudo científico', hyp: 'Hipotético ou lendário' },
      cert: { documented: 'Documentado', probable: 'Provável', hypothesized: 'Hipotético', legendary: 'Lenda' },
      listH: 'Todos os eventos',
      icon: { h: 'O rosto e um ícone do século VI',
        altShroud: 'O rosto do Sudário, vista em negativo', altIcon: 'Ícone do Cristo Pantocrator, Mosteiro de Santa Catarina, Sinai, século VI',
        shroud: 'Sudário', iconLabel: 'Ícone do Sinai',
        text: `<p>Este é o ícone mais antigo que se conserva do Cristo Pantocrator, pintado no século VI e guardado no Mosteiro de Santa Catarina, no Sinai. Deslize entre ele e o rosto do Sudário. Os dois estão em escala para que os olhos fiquem alinhados.</p>
<p>Os defensores de uma história antiga apontam traços em comum: o nariz comprido, a barba bifurcada, as pálpebras pesadas e as maçãs do rosto desiguais. Nos anos 1930, Paul Vignon listou pequenas peculiaridades que, segundo ele, os artistas bizantinos copiaram do pano, como uma forma quadrada entre as sobrancelhas.</p>`,
        skeptic: 'A resposta cética: a semelhança não diz o que veio primeiro. Um artista do século XIV que fizesse uma mortalha de Jesus teria copiado o rosto que os ícones tinham tornado padrão. A semelhança é compatível com o Sudário ser antigo, e igualmente com ele ter sido feito para se parecer com os ícones.' },
      map: { h: 'Por onde o pano passou', alt: 'Mapa das rotas documentadas e hipotéticas do Sudário, de Jerusalém a Turim',
        keyDoc: 'Documentado', keyHyp: 'Hipotético',
        jerusalem: 'Jerusalém, 30 d.C.?', edessa: 'Edessa (Urfa), séculos VI a X?', constantinople: 'Constantinopla, 944 a 1204?', athens: 'Atenas, depois de 1204?',
        lirey: 'Lirey, por volta de 1354', chambery: 'Chambéry, 1502 a 1578', turin: 'Turim, desde 1578',
        caption: 'As linhas contínuas são documentadas. A rota tracejada é uma hipótese, sobretudo do historiador Ian Wilson, que identifica o Sudário com a Imagem de Edessa (o Mandylion). A maioria dos historiadores não aceita essa identificação. Entre 1453 e 1578, o pano também viajou com a Casa de Saboia, então o caminho documentado real tem mais paradas do que as mostradas.' }
    },

    videos: {
      title: 'Vídeos do Santo Sudário de Turim: afirmações verificadas | See The Shroud',
      description: 'Três vídeos populares sobre o Santo Sudário de Turim, verificados afirmação por afirmação: o que se sustenta, o que é contestado e o que está errado.',
      h1: 'Vídeos populares, verificados',
      lede: 'A maioria das pessoas conhece o Sudário por vídeos. Assistimos a três vídeos populares do começo ao fim, incluindo as transcrições, e verificamos suas principais afirmações. Vários são excelentes. Alguns estão errados. Clique num horário para ir àquele momento.',
      play: 'Reproduzir vídeo (carrega o YouTube)', watch: 'Assistir no YouTube',
      rate: { strong: 'Se sustenta', disputed: 'Contestado', weak: 'Errado ou exagerado' },
      missingH: 'O que nenhum dos três menciona',
      missingAfter: 'Uma análise justa também precisa lidar com isto. Você encontra cada ponto no <a href="evidence.html">dossiê</a>.'
    },
    library: {
      title: 'Biblioteca de pesquisa sobre o Santo Sudário de Turim | See The Shroud',
      description: 'Biblioteca pesquisável de artigos e estudos sobre o Santo Sudário de Turim, a favor e contra, com links diretos para os originais no shroud.com e em revistas.',
      h1: 'Biblioteca',
      lede: 'Mais de 2.400 artigos, estudos, textos e boletins, quase todos do arquivo do shroud.com, que Barrie Schwortz criou e manteve desde os anos 1990 até a sua morte, em 2024. Comece pelas 25 leituras essenciais, depois pesquise por palavra, filtre por tema e vá direto ao original.',
      keyH: 'Comece aqui: 25 leituras essenciais, dos dois lados', keyLede: 'Escolhidas para que um leitor cético encontre os trabalhos mais fortes de cada lado, mais ou menos na ordem em que o debate se desenrolou.', allH: 'A biblioteca completa',
      search: 'Pesquise títulos, autores e revistas',
      count: 'artigos exibidos',
      peer: 'Revisado por pares',
      topics: { radiocarbon: 'Datação por carbono', blood: 'Sangue', 'image-formation': 'Formação da imagem', history: 'História', textile: 'O linho', 'anatomy-medical': 'Medicina', 'pollen-botany': 'Pólen e plantas', 'photography-imaging': 'Fotografia', '3d-vp8': '3D', coins: 'Moedas', sudarium: 'Sudário de Oviedo', 'art-history': 'História da arte', critique: 'Críticas', overview: 'Visões gerais', conference: 'Congressos' },
      stances: { 'pro-authenticity': 'A favor da autenticidade', skeptical: 'Cético', neutral: 'Neutro' },
      more: `<h2>Em memória de Barrie M. Schwortz (1946 a 2024)</h2>
<p>Barrie Schwortz foi o fotógrafo oficial de documentação do Shroud of Turin Research Project de 1978. Era judeu, começou como cético e passou o resto da vida tornando a pesquisa acessível a todos, de graça, no shroud.com. A maior parte desta biblioteca existe porque ele a preservou. Dedicamos esta página a ele.</p>
<p>Quer ir mais longe? O <a href="https://www.shroud.com/" target="_blank" rel="noopener">arquivo do shroud.com</a>, o site oficial da <a href="https://www.sindone.org/" target="_blank" rel="noopener">Arquidiocese de Turim</a> e o artigo <a href="https://en.wikipedia.org/wiki/Shroud_of_Turin" target="_blank" rel="noopener">Shroud of Turin</a> da Wikipédia em inglês, que pende para o ceticismo e é um bom teste para as suas conclusões.</p>`
    },

    next: {
      title: 'E agora? Depois do Santo Sudário de Turim | See The Shroud',
      description: 'Você viu as evidências sobre o Santo Sudário de Turim. Quer você duvide, se pergunte ou creia, aqui estão próximos passos honestos.',
      h1: 'E agora?',
      lede: 'Onde quer que você tenha chegado depois de olhar as evidências, existe um próximo passo sensato. Nenhum deles exige que você finja ter mais certeza do que tem.',
      paths: [
        { id: 'doubt', h: 'Se você ainda duvida', body: `<p>Ótimo. A dúvida que continua procurando é honesta. Tomé duvidou, e não foi rejeitado.</p><ul><li>Leia o argumento contrário mais forte no <a href="evidence.html">dossiê</a>, e as fontes por trás dele.</li><li>Experimente a calculadora com os seus próprios números, e repare qual suposição decide a sua resposta.</li><li>Pergunte a si mesmo que evidência mudaria a sua opinião, e se ela poderia existir.</li></ul>` },
        { id: 'wonder', h: 'Se você se pergunta', body: `<p>O Sudário é uma pergunta sobre um homem. O melhor próximo passo é conhecê-lo onde ele é descrito de forma mais completa.</p><ul><li>Leia o Evangelho de João. Leva cerca de duas horas, e termina com Tomé.</li><li>Converse com alguém em quem você confia e que tenha fé, e faça a sua pergunta mais difícil.</li><li>Se você nunca rezou, experimente uma oração simples e honesta: se você está aí, mostre-se para mim.</li></ul>` },
        { id: 'believe', h: 'Se você crê', body: `<p>Então a pergunta já não é o que o pano prova, mas como você vive.</p><ul><li>Seja alguém em quem um cético possa confiar: justo, curioso e gentil, sobretudo com quem discorda de você.</li><li>Compartilhe este site com o cético mais ponderado que você conhece, e ouça o que ele tem a dizer.</li><li>Sirva alguém que precisa nesta semana. Uma fé que age é a melhor evidência que a maioria das pessoas vai ver.</li></ul>` }
      ],
      story: `<h2>Em breve: a história de uma pessoa</h2><p>Nelson Inno, que criou este site, vai compartilhar a sua própria história e uma reflexão sobre o que ele chama de padrão que leva a Deus num site separado. Manter as duas coisas separadas permite que você pese cada uma nos seus próprios termos.</p>`,
      quote: 'Estes estão escritos, para que creiais que Jesus é o Cristo, o Filho de Deus.',
      quoteCite: 'João 20:31'
    },
    about: {
      title: 'Sobre o See The Shroud: por que este site existe | See The Shroud',
      description: 'See The Shroud é um site gratuito e não comercial sobre o Santo Sudário de Turim. Como avaliamos a evidência, de onde vêm as imagens e quem o fez.',
      h1: 'Sobre este site',
      lede: 'Por que ele existe, como trabalhamos e de onde vem tudo.',
      body: `<h2>Por que este site existe</h2>
<p>O Santo Sudário de Turim pode ser uma obra de arte medieval, uma falsificação deliberada ou a mortalha de Jesus de Nazaré. Seja o que for, merece ser ouvido com mais cuidado do que numa manchete de dez segundos. A maior parte do que se encontra na internet é escrita para vencer: um lado grita “prova”, o outro grita “falso”. Este site é escrito para informar.</p>
<p>O nome, See The Shroud, quer dizer “veja o Sudário”, e é um convite: veja o Santo Sudário por conta própria, de perto, e julgue as evidências. O espírito vem de Tomé, que se recusou a crer até poder ver as marcas dos cravos. Achamos que uma dúvida como a dele é honesta, e que ela merece evidências, não pressão.</p>
<h2>Quem o fez</h2>
<p>See The Shroud foi criado por Nelson Inno, um empreendedor salvadorenho, como um projeto gratuito e pro bono. Para total transparência: Nelson acredita que o Sudário é autêntico. É exatamente por isso que o site segue uma regra: os argumentos mais fortes contra a autenticidade são mostrados com toda a sua força, logo ao lado dos argumentos a favor. Se algum dia não cumprirmos isso, queremos saber.</p>
<h2>Como trabalhamos</h2>
<ul>
<li>Cada afirmação factual tem um link para uma fonte. Sempre que possível, a fonte é um artigo revisado por pares ou um documento primário.</li>
<li>Os argumentos dos dois lados são classificados com a mesma escala de força: forte, moderada, fraca, contestada ou refutada.</li>
<li>Afirmações populares que não se sustentam são identificadas como tais, mesmo quando ajudariam a defesa da autenticidade.</li>
<li>As visualizações artísticas, como a animação da luz, são sempre identificadas como visualizações de uma hipótese.</li>
<li>Sem anúncios, sem rastreamento, nada à venda.</li>
</ul>
<h2>Encontrou um erro?</h2>
<p>Escreva para <a href="mailto:hey@everybodyknowsyou.com">hey@everybodyknowsyou.com</a> com a página, a afirmação e a sua fonte. Correções de céticos são especialmente bem-vindas.</p>
<h2>Em breve</h2>
<p>A história do próprio Nelson, e uma reflexão sobre o que ele chama de padrão que leva a Deus, vão ficar num site separado chamado “Unless I See” (Se em suas mãos não vir), inspirado nas palavras de Tomé em João 20:25. As evidências ficam aqui, para que você possa pesá-las nos seus próprios termos.</p>`,
      creditsH: 'Créditos das imagens', sourceLink: 'fonte'
    }
  }
};
