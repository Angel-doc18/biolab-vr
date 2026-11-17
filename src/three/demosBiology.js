// Biology demonstrations (see demos.js for the format). Points were measured
// from the models: the downloaded anatomy files (tools/models) and the
// built-in shapes in models.js.

const FOOD = '#c08a4a';
const CHYME = '#e8d39a';
const DIGESTED = '#ffd54f';
const FAECES = '#7b4a24';
const DEOXY = '#3f5efb';
const OXY = '#e53935';
const IMPULSE = '#ffd600';

// ---------- digestion: a mouthful of food from the mouth to the anus ----------
const digestion = (P) => ({
  steps: [
    {
      part: null,
      name: ['Food', 'Aliment'],
      from: P.mouth,
      path: [P.mouth],
      c: FOOD,
      r: 0.075,
      en: 'Follow a mouthful of food through the digestive system. In the mouth the teeth cut and grind it into small pieces, which gives the enzymes a larger surface to work on. Saliva wets the food, and the enzyme amylase in it starts breaking starch down into maltose.',
      fr: 'Suivons une bouchée de nourriture dans le tube digestif. Dans la bouche, les dents la coupent et la broient en petits morceaux, ce qui donne aux enzymes une plus grande surface de travail. La salive humecte l’aliment, et son enzyme, l’amylase, commence à transformer l’amidon en maltose.',
    },
    {
      part: null,
      name: ['Bolus', 'Bol alimentaire'],
      path: P.eso,
      en: 'The tongue rolls the food into a soft ball called a bolus and pushes it to the back of the throat. We swallow, and the bolus enters the oesophagus. Rings of muscle in its wall contract one after the other, a wave called peristalsis, and push the bolus down to the stomach.',
      fr: 'La langue roule l’aliment en une boule molle, le bol alimentaire, et le pousse vers le fond de la gorge. Nous avalons et le bol entre dans l’œsophage. Les muscles de sa paroi se contractent l’un après l’autre, une onde appelée péristaltisme, et poussent le bol jusqu’à l’estomac.',
    },
    {
      part: 'stomach',
      name: ['Chyme', 'Chyme'],
      path: P.churn,
      c: CHYME,
      act: { stomach: { k: 'pulse', amp: 0.05, speed: 4, at: P.stomachAt } },
      en: 'The stomach wall is muscular. It churns the food for a few hours and mixes it with gastric juice. Hydrochloric acid kills most germs and gives the acid conditions that the enzyme pepsin needs to start digesting proteins into polypeptides. The food becomes a thick liquid called chyme.',
      fr: 'La paroi de l’estomac est musclée. Elle brasse l’aliment pendant quelques heures et le mélange au suc gastrique. L’acide chlorhydrique tue la plupart des microbes et crée le milieu acide dont la pepsine a besoin pour commencer à digérer les protéines en polypeptides. L’aliment devient une bouillie épaisse, le chyme.',
    },
    {
      part: 'liver',
      path: P.duo,
      flows: [{ pts: P.bile, c: '#7cb342', n: 5, speed: 0.45 }],
      en: 'A little at a time, chyme passes through a ring of muscle, the pyloric sphincter, into the duodenum, the first part of the small intestine. Bile arrives from the liver, where it is made, and the gall bladder, where it is stored. Bile is not an enzyme. It neutralises the acid and breaks fat into tiny droplets, emulsification, so that lipase can digest it faster.',
      fr: 'Petit à petit, le chyme passe par un anneau musculaire, le pylore, dans le duodénum, la première partie de l’intestin grêle. La bile arrive du foie, qui la fabrique, et de la vésicule biliaire, qui la stocke. La bile n’est pas une enzyme. Elle neutralise l’acide et divise les graisses en fines gouttelettes, l’émulsion, pour que la lipase les digère plus vite.',
    },
    {
      part: 'pancreas',
      path: P.duo2,
      flows: [{ pts: P.panc, c: '#fff59d', n: 5, speed: 0.4 }],
      en: 'The pancreas pours pancreatic juice into the duodenum. It is alkaline and holds three enzymes: amylase goes on digesting starch to maltose, trypsin digests proteins, and lipase digests fats into fatty acids and glycerol.',
      fr: 'Le pancréas déverse le suc pancréatique dans le duodénum. Il est basique et contient trois enzymes : l’amylase continue la digestion de l’amidon en maltose, la trypsine digère les protéines et la lipase digère les graisses en acides gras et glycérol.',
    },
    {
      part: 'villi',
      name: ['Digested food', 'Nutriments'],
      path: P.ileum,
      c: DIGESTED,
      r: 0.06,
      flows: [{ pts: P.portal, c: '#ef5350', n: 6, speed: 0.35, r: 0.03 }],
      en: 'In the ileum, enzymes from the intestine wall finish the work: maltose becomes glucose and peptides become amino acids. The wall is covered with millions of villi. Each villus is thin and full of capillaries, so glucose and amino acids pass into the blood, and fatty acids and glycerol into the lacteals. The hepatic portal vein carries the food to the liver.',
      fr: 'Dans l’iléon, les enzymes de la paroi intestinale terminent le travail : le maltose devient glucose et les peptides deviennent acides aminés. La paroi est couverte de millions de villosités. Chaque villosité est fine et pleine de capillaires : le glucose et les acides aminés passent dans le sang, les acides gras et le glycérol dans les vaisseaux chylifères. La veine porte hépatique conduit les nutriments au foie.',
    },
    {
      part: 'colon',
      name: ['Undigested waste', 'Déchets non digérés'],
      path: P.colon,
      c: FAECES,
      r: 0.065,
      flows: [{ pts: P.water, c: '#4fc3f7', n: 4, speed: 0.4, r: 0.028 }],
      en: 'What cannot be digested, mainly fibre from plants, moves into the colon. Here most of the remaining water and mineral salts are absorbed back into the blood, so the waste becomes firmer. Fibre gives the gut muscles something to push against, which prevents constipation.',
      fr: 'Ce qui ne peut pas être digéré, surtout les fibres végétales, passe dans le côlon. Là, presque toute l’eau qui reste et les sels minéraux sont réabsorbés dans le sang, et les déchets deviennent plus fermes. Les fibres donnent aux muscles de l’intestin un appui pour pousser, ce qui évite la constipation.',
    },
    {
      part: 'colon',
      name: ['Faeces', 'Selles'],
      path: P.rectum,
      en: 'The faeces are stored in the rectum and leave through the anus when we go to the toilet. Removing undigested food is egestion. Do not confuse it with excretion, which removes waste made by the body’s own chemical reactions, such as urea and carbon dioxide.',
      fr: 'Les selles sont stockées dans le rectum et sortent par l’anus quand nous allons aux toilettes. Rejeter les aliments non digérés s’appelle l’égestion. Ne la confondez pas avec l’excrétion, qui élimine les déchets produits par les réactions chimiques du corps, comme l’urée et le dioxyde de carbone.',
    },
    {
      part: null,
      hide: true,
      en: 'So nutrition in humans has five stages: ingestion, taking food into the mouth; digestion, breaking it down; absorption into the blood in the ileum; assimilation, when the cells use the food; and egestion, removing what was not digested.',
      fr: 'La nutrition chez l’homme a donc cinq étapes : l’ingestion, prendre l’aliment par la bouche ; la digestion, le décomposer ; l’absorption dans le sang au niveau de l’iléon ; l’assimilation, quand les cellules utilisent les nutriments ; et l’égestion, rejeter ce qui n’a pas été digéré.',
    },
  ],
});

const DIG_REAL = {
  mouth: [0.03, 1.55, -0.05],
  eso: [[0.03, 1.27, -0.17], [0.03, 1.0, -0.14], [0.05, 0.8, -0.07], [0.09, 0.68, 0.02], [0.14, 0.6, 0.08]],
  churn: [[0.3, 0.62, 0.12], [0.42, 0.5, 0.12], [0.4, 0.33, 0.25], [0.25, 0.3, 0.32], [0.38, 0.45, 0.2], [0.28, 0.6, 0.12], [0.42, 0.42, 0.18], [0.2, 0.3, 0.3], [0.02, 0.3, 0.27]],
  stomachAt: [0.214, 0.47, 0.19],
  duo: [[-0.08, 0.28, 0.27], [-0.22, 0.18, 0.22], [-0.22, 0.05, 0.2]],
  duo2: [[-0.12, -0.04, 0.22], [0.05, -0.02, 0.25]],
  bile: [[-0.35, 0.24, 0.22], [-0.28, 0.2, 0.22], [-0.22, 0.12, 0.21]],
  panc: [[0.3, 0.3, 0.05], [0.1, 0.2, 0.1], [-0.1, 0.1, 0.15], [-0.2, 0.06, 0.2]],
  ileum: [[0.3, -0.12, 0.3], [0.3, -0.3, 0.3], [-0.12, -0.25, 0.32], [-0.15, -0.45, 0.3], [0.3, -0.5, 0.3], [0.25, -0.68, 0.28], [-0.12, -0.7, 0.25], [-0.1, -0.88, 0.2], [-0.3, -0.75, 0.18], [-0.42, -0.68, 0.08]],
  portal: [[0.05, -0.45, 0.35], [-0.02, -0.15, 0.32], [-0.1, 0.15, 0.28], [-0.25, 0.45, 0.25]],
  colon: [[-0.46, -0.62, 0.07], [-0.49, -0.44, 0.06], [-0.48, -0.25, 0.05], [-0.44, -0.05, 0.15], [-0.3, 0.12, 0.23], [0.0, 0.15, 0.24], [0.33, 0.12, 0.21], [0.48, 0.0, 0.12], [0.51, -0.25, 0.02], [0.52, -0.5, 0.03]],
  water: [[0.0, 0.15, 0.24], [0.02, 0.4, 0.4]],
  rectum: [[0.45, -0.65, 0.02], [0.25, -0.8, -0.05], [0.1, -0.95, -0.2], [0.03, -1.12, -0.36], [0.02, -1.32, -0.36], [0.02, -1.45, -0.36]],
};

const DIG_BUILT = {
  mouth: [0.3, 1.9, 0.1],
  eso: [[0.3, 1.65, 0.1], [0.3, 1.25, 0.1], [0.32, 0.95, 0.12]],
  churn: [[0.6, 0.75, 0.25], [0.55, 0.45, 0.25], [0.15, 0.42, 0.25], [0.45, 0.62, 0.3], [0.7, 0.55, 0.25], [0.25, 0.5, 0.25], [-0.1, 0.4, 0.2]],
  stomachAt: [0.35, 0.6, 0],
  duo: [[-0.2, 0.32, 0.25], [-0.32, 0.2, 0.28]],
  duo2: [[-0.3, 0.02, 0.3], [0.0, -0.12, 0.25]],
  bile: [[-0.35, 0.5, 0.35], [-0.33, 0.3, 0.32]],
  panc: [[0.65, 0.12, 0.3], [0.2, 0.12, 0.3], [-0.25, 0.12, 0.3]],
  ileum: [[0.35, -0.4, 0.2], [-0.35, -0.4, 0.2], [-0.35, -0.72, 0.2], [0.35, -0.72, 0.2], [0.0, -0.95, 0.15], [-0.56, -1.28, -0.1]],
  portal: [[0.0, -0.55, 0.25], [-0.2, 0.0, 0.35], [-0.45, 0.6, 0.35]],
  colon: [[-0.89, -0.87, -0.1], [-0.95, -0.55, -0.1], [-0.82, -0.08, -0.1], [-0.48, 0.27, -0.1], [0, 0.4, -0.1], [0.48, 0.27, -0.1], [0.82, -0.08, -0.1], [0.95, -0.55, -0.1], [0.82, -1.03, -0.1]],
  water: [[0, 0.4, -0.1], [0, 0.65, 0.1]],
  rectum: [[0.56, -1.32, -0.12], [0.25, -1.55, -0.12], [0.0, -1.75, -0.12], [0.0, -1.95, -0.12]],
};

// ---------- the heart: blood through both sides ----------
const circulation = (P) => ({
  steps: [
    {
      part: 'venacava',
      name: ['Deoxygenated blood', 'Sang pauvre en oxygène'],
      from: P.svc[0],
      path: P.svc,
      c: DEOXY,
      r: 0.07,
      en: 'Blood that has given its oxygen to the body’s cells returns to the heart in the two venae cavae: the upper one from the head and arms, the lower one from the rest of the body. This blood is deoxygenated, shown here in blue.',
      fr: 'Le sang qui a donné son oxygène aux cellules revient au cœur par les deux veines caves : la supérieure depuis la tête et les bras, l’inférieure depuis le reste du corps. Ce sang est pauvre en oxygène, montré ici en bleu.',
    },
    {
      part: 'atria',
      path: P.rv,
      en: 'It fills the right atrium, a thin-walled chamber that receives blood. When the atrium contracts, the blood is pushed through the tricuspid valve into the right ventricle. The valve then shuts, so blood cannot flow back.',
      fr: 'Il remplit l’oreillette droite, une cavité à paroi mince qui reçoit le sang. Quand l’oreillette se contracte, le sang passe par la valvule tricuspide dans le ventricule droit. La valvule se ferme ensuite et le sang ne peut pas refluer.',
    },
    {
      part: 'lv',
      path: P.pa,
      en: 'The right ventricle contracts and sends the blood up the pulmonary artery to the lungs. Semilunar valves at its base stop the blood falling back. The right ventricle’s wall is thinner than the left one, because the lungs are close by.',
      fr: 'Le ventricule droit se contracte et envoie le sang dans l’artère pulmonaire vers les poumons. Des valvules sigmoïdes à sa base empêchent le sang de redescendre. La paroi du ventricule droit est plus mince que celle du gauche, car les poumons sont tout près.',
    },
    {
      part: null,
      name: ['Oxygenated blood', 'Sang riche en oxygène'],
      from: P.pvFrom,
      path: P.pv,
      c: OXY,
      en: 'In the lungs the blood takes in oxygen and gives out carbon dioxide. It comes back to the heart in the pulmonary veins, now oxygenated, shown in red, and enters the left atrium.',
      fr: 'Dans les poumons, le sang prend de l’oxygène et rejette du dioxyde de carbone. Il revient au cœur par les veines pulmonaires, maintenant riche en oxygène, en rouge, et entre dans l’oreillette gauche.',
    },
    {
      part: 'atria',
      path: P.lv,
      en: 'The left atrium contracts and pushes the blood through the bicuspid valve, also called the mitral valve, into the left ventricle.',
      fr: 'L’oreillette gauche se contracte et pousse le sang par la valvule bicuspide, ou mitrale, dans le ventricule gauche.',
    },
    {
      part: 'lv',
      path: [P.ao[0]],
      en: 'The left ventricle has the thickest, most muscular wall of the heart, because it must pump blood all round the body at high pressure. Watch it beat: when it contracts, the blood is forced out into the aorta.',
      fr: 'Le ventricule gauche a la paroi la plus épaisse et la plus musclée du cœur, car il doit pomper le sang dans tout le corps sous forte pression. Regardez-le battre : quand il se contracte, le sang est chassé dans l’aorte.',
    },
    {
      part: 'aorta',
      path: P.ao.slice(1),
      en: 'The aorta arches over the heart and its branches carry oxygenated blood to every organ. After the cells have used the oxygen, the blood comes back in the veins and the journey starts again. Blood passes through the heart twice in one complete circuit: this is double circulation.',
      fr: 'L’aorte forme une crosse au-dessus du cœur et ses branches portent le sang riche en oxygène à tous les organes. Une fois l’oxygène utilisé, le sang revient par les veines et le trajet recommence. Le sang passe deux fois par le cœur en un tour complet : c’est la double circulation.',
    },
  ],
});

const HEART_REAL = {
  svc: [[-0.48, 1.3, 0.01], [-0.48, 0.9, 0.01], [-0.47, 0.45, 0.05], [-0.46, 0.15, 0.08]],
  rv: [[-0.35, -0.1, 0.3], [-0.15, -0.4, 0.35], [-0.05, -0.6, 0.32]],
  pa: [[0.0, -0.2, 0.45], [0.12, 0.3, 0.42], [0.41, 0.63, 0.1], [0.34, 0.82, 0.01], [0.3, 1.03, 0.06], [-0.18, 1.02, -0.27], [-0.56, 0.83, -0.36], [-1.03, 0.42, -0.54], [-1.2, 0.05, -0.8]],
  pvFrom: [1.4, -0.2, -0.5],
  pv: [[0.94, -0.18, -0.5], [0.6, 0.02, -0.63], [0.46, 0.15, -0.53]],
  lv: [[0.55, 0.0, -0.2], [0.73, -0.32, 0.2], [0.7, -0.6, 0.3]],
  ao: [[0.5, -0.1, 0.25], [0.1, 0.25, 0.1], [-0.07, 0.53, -0.2], [-0.11, 0.97, -0.15], [0.1, 1.12, -0.5], [0.23, 0.96, -0.85], [0.25, 0.54, -0.83], [0.21, 0.11, -0.7], [0.18, -0.4, -0.75], [0.13, -1.3, -0.42]],
};

const HEART_BUILT = {
  svc: [[-0.75, 1.3, 0.0], [-0.75, 0.75, 0.0], [-0.5, 0.45, 0.25]],
  rv: [[-0.35, 0.0, 0.35], [-0.3, -0.4, 0.4]],
  pa: [[0.0, 0.05, 0.45], [0.47, 0.62, -0.1], [0.23, 1.28, -0.2], [0.05, 1.65, -0.3]],
  pvFrom: [1.3, 1.0, -0.2],
  pv: [[0.8, 0.6, -0.1], [0.5, 0.45, 0.15]],
  lv: [[0.4, 0.0, 0.4], [0.25, -0.6, 0.45]],
  ao: [[0.3, -0.1, 0.45], [0.45, 0.45, 0.1], [0.45, 0.95, 0.0], [0.1, 1.3, 0.0], [-0.25, 0.95, 0.0], [-0.3, 0.2, -0.35]],
};

// ---------- breathing and gas exchange ----------
const breathing = (P) => ({
  steps: [
    {
      part: 'diaphragm',
      name: ['Air', 'Air'],
      from: P.nose,
      path: [P.nose],
      c: '#90caf9',
      r: 0.07,
      en: 'Breathing in is done by muscles. Watch the diaphragm: it contracts and flattens, while the intercostal muscles between the ribs lift the ribs up and out. The chest gets bigger, the pressure inside the lungs falls below the air pressure outside, and air rushes in.',
      fr: 'L’inspiration est faite par des muscles. Regardez le diaphragme : il se contracte et s’aplatit, pendant que les muscles intercostaux soulèvent les côtes vers le haut et l’extérieur. La cage thoracique grandit, la pression dans les poumons devient plus basse que celle de l’air extérieur, et l’air entre.',
    },
    {
      part: 'trachea',
      path: P.trachea,
      en: 'Air enters through the nose, where hairs and mucus trap dust and the air is warmed and moistened. It goes down the trachea, which C-shaped rings of cartilage hold open. Tiny hairs called cilia sweep mucus, dust and germs up and away from the lungs.',
      fr: 'L’air entre par le nez, où les poils et le mucus retiennent la poussière et où l’air est réchauffé et humidifié. Il descend dans la trachée, maintenue ouverte par des anneaux de cartilage en forme de C. De petits cils balaient le mucus, la poussière et les microbes vers le haut, loin des poumons.',
    },
    {
      part: 'bronchi',
      path: P.bronchus,
      flows: [{ pts: P.other, c: '#90caf9', n: 4, speed: 0.4, r: 0.04 }],
      en: 'The trachea divides into two bronchi, one for each lung. Each bronchus branches again and again into smaller and smaller tubes, the bronchioles, carrying the air deep into the lung.',
      fr: 'La trachée se divise en deux bronches, une pour chaque poumon. Chaque bronche se ramifie encore et encore en tubes de plus en plus fins, les bronchioles, qui portent l’air au fond du poumon.',
    },
    {
      part: 'alveoli',
      path: P.alv,
      flows: [
        { pts: P.o2, c: OXY, n: 5, speed: 0.4, r: 0.042 },
        { pts: P.co2, c: '#9e9e9e', n: 5, speed: 0.4, r: 0.042 },
      ],
      en: 'Each bronchiole ends in clusters of tiny air sacs, the alveoli. Their walls are only one cell thick, moist, and wrapped in capillaries. So oxygen, in red, diffuses from the air into the blood, and carbon dioxide, in grey, diffuses from the blood into the air. Millions of alveoli give a huge surface for this gas exchange.',
      fr: 'Chaque bronchiole se termine par des grappes de minuscules sacs, les alvéoles. Leur paroi n’a qu’une cellule d’épaisseur, est humide et entourée de capillaires. L’oxygène, en rouge, diffuse donc de l’air vers le sang, et le dioxyde de carbone, en gris, du sang vers l’air. Des millions d’alvéoles offrent une très grande surface pour ces échanges gazeux.',
    },
    {
      part: 'diaphragm',
      name: ['Air breathed out', 'Air expiré'],
      path: P.out,
      c: '#b0bec5',
      en: 'Breathing out: the diaphragm relaxes and domes upwards, and the ribs move down and in. The chest gets smaller, the pressure in the lungs rises, and air with less oxygen and more carbon dioxide is pushed out.',
      fr: 'À l’expiration, le diaphragme se relâche et remonte en dôme, et les côtes s’abaissent et rentrent. La cage thoracique rétrécit, la pression dans les poumons augmente, et l’air plus pauvre en oxygène et plus riche en dioxyde de carbone est chassé.',
    },
    {
      part: null,
      hide: true,
      en: 'Remember: breathing moves air in and out, gas exchange happens only in the alveoli, and respiration is the release of energy from food inside every cell, using the oxygen the blood delivers.',
      fr: 'Retenez : la ventilation fait entrer et sortir l’air, les échanges gazeux ont lieu seulement dans les alvéoles, et la respiration est la libération d’énergie à partir des aliments dans chaque cellule, grâce à l’oxygène apporté par le sang.',
    },
  ],
});

const LUNGS_REAL = {
  nose: [0.0, 1.6, 0.0],
  trachea: [[0.0, 1.25, -0.07], [0.0, 0.95, -0.1], [0.0, 0.62, -0.15]],
  bronchus: [[-0.12, 0.47, -0.17], [-0.19, 0.27, -0.16], [-0.26, 0.09, -0.25]],
  other: [[0.0, 0.6, -0.15], [0.19, 0.46, -0.17], [0.31, 0.27, -0.23], [0.39, 0.18, -0.26], [0.5, -0.05, -0.1]],
  alv: [[-0.45, -0.05, -0.05], [-0.5, -0.25, 0.05]],
  o2: [[-0.55, -0.3, 0.25], [-0.35, -0.12, 0.25], [-0.08, 0.05, 0.2]],
  co2: [[-0.08, 0.0, 0.2], [-0.35, -0.2, 0.25], [-0.58, -0.38, 0.25]],
  out: [[-0.26, 0.09, -0.25], [-0.12, 0.47, -0.17], [0.0, 0.62, -0.15], [0.0, 1.25, -0.07], [0.0, 1.65, 0.05]],
};

const LUNGS_BUILT = {
  nose: [0, 1.75, 0.05],
  trachea: [[0, 1.4, 0.05], [0, 0.85, 0.05]],
  bronchus: [[0.04, 0.8, 0.08], [0.46, 0.3, 0.1]],
  other: [[0, 0.85, 0.05], [-0.04, 0.8, 0.08], [-0.46, 0.3, 0.1], [-0.62, -0.1, 0.25]],
  alv: [[0.62, -0.1, 0.38], [0.62, -0.2, 0.45]],
  o2: [[0.62, -0.2, 0.45], [0.35, -0.1, 0.45], [0.05, 0.0, 0.35]],
  co2: [[0.05, 0.05, 0.35], [0.35, -0.15, 0.45], [0.65, -0.25, 0.45]],
  out: [[0.46, 0.3, 0.1], [0.04, 0.8, 0.08], [0, 1.4, 0.05], [0, 1.8, 0.1]],
};

// ---------- the kidneys: making urine ----------
const urinary = (P) => ({
  steps: [
    {
      part: 'vessels',
      name: ['Blood with urea', 'Sang chargé d’urée'],
      from: P.artery[0],
      path: P.artery,
      c: '#d84343',
      r: 0.07,
      en: 'Blood reaches each kidney in a renal artery, a branch of the aorta. It carries urea, a poison made in the liver when extra amino acids are broken down, together with water and salts the body may not need.',
      fr: 'Le sang arrive à chaque rein par une artère rénale, une branche de l’aorte. Il transporte l’urée, un poison fabriqué par le foie quand les acides aminés en trop sont dégradés, avec de l’eau et des sels dont le corps n’a peut-être pas besoin.',
    },
    {
      part: 'kidney',
      path: P.filter,
      flows: [{ pts: P.filtrate, c: '#fff176', n: 5, speed: 0.45, r: 0.028 }],
      en: 'Inside the kidney, about a million tiny tubes called nephrons filter the blood under high pressure. Water, glucose, salts and urea are forced out of the blood into each nephron. Blood cells and proteins are too big to pass, so they stay in the blood.',
      fr: 'Dans le rein, environ un million de petits tubes, les néphrons, filtrent le sang sous forte pression. L’eau, le glucose, les sels et l’urée sont poussés hors du sang dans chaque néphron. Les cellules sanguines et les protéines sont trop grosses pour passer et restent dans le sang.',
    },
    {
      part: 'kidney',
      name: ['Urine', 'Urine'],
      path: [P.filter[0], P.filter[2]],
      c: '#f9d71c',
      en: 'Then everything useful is taken back into the blood: all of the glucose, and as much water and salt as the body needs. This is selective reabsorption. What is left in the nephron, urea dissolved in water with extra salts, is urine.',
      fr: 'Ensuite, tout ce qui est utile retourne dans le sang : tout le glucose, et autant d’eau et de sels que le corps en a besoin. C’est la réabsorption sélective. Ce qui reste dans le néphron, l’urée dissoute dans l’eau avec les sels en trop, est l’urine.',
    },
    {
      part: 'vessels',
      flows: [{ pts: P.vein, c: DEOXY, n: 5, speed: 0.4, r: 0.032 }],
      en: 'The cleaned blood leaves the kidney in the renal vein and goes back to the heart through the vena cava.',
      fr: 'Le sang purifié quitte le rein par la veine rénale et retourne au cœur par la veine cave.',
    },
    {
      part: 'ureter',
      path: P.ureter,
      en: 'Urine flows out of each kidney down a ureter. Muscles in the ureter wall squeeze it along by peristalsis, a little at a time, to the bladder.',
      fr: 'L’urine sort de chaque rein par un uretère. Les muscles de sa paroi la poussent par péristaltisme, petit à petit, jusqu’à la vessie.',
    },
    {
      part: 'bladder',
      path: P.out,
      act: { bladder: { k: 'grow', amp: 0.25, dur: 2.5, at: P.bladderAt } },
      en: 'The bladder stores urine. Its stretchy wall lets it hold about half a litre. When we choose to urinate, a ring of muscle, the sphincter, relaxes and urine leaves the body through the urethra.',
      fr: 'La vessie stocke l’urine. Sa paroi élastique lui permet d’en contenir environ un demi-litre. Quand nous décidons d’uriner, un anneau musculaire, le sphincter, se relâche et l’urine sort du corps par l’urètre.',
    },
    {
      part: null,
      hide: true,
      en: 'So the kidneys do two jobs: they excrete urea, and they control how much water and salt stays in the blood, which is called osmoregulation.',
      fr: 'Les reins ont donc deux rôles : ils excrètent l’urée et ils règlent la quantité d’eau et de sels du sang, ce qu’on appelle l’osmorégulation.',
    },
  ],
});

const URINARY_REAL = {
  artery: [[0.05, 1.25, 0.2], [0.05, 0.62, 0.18], [-0.24, 0.58, 0.04], [-0.45, 0.6, 0.0]],
  filter: [[-0.55, 0.78, 0.0], [-0.52, 0.45, 0.0], [-0.4, 0.62, 0.02]],
  filtrate: [[-0.6, 0.8, 0.02], [-0.5, 0.62, 0.02], [-0.42, 0.45, 0.03]],
  vein: [[-0.4, 0.6, 0.04], [-0.12, 0.62, 0.18], [-0.12, 1.3, 0.18]],
  ureter: [[-0.47, 0.52, -0.05], [-0.38, 0.22, 0.03], [-0.27, -0.17, 0.15], [-0.29, -0.51, 0.01], [-0.32, -0.86, -0.25], [-0.1, -1.08, -0.05]],
  out: [[0.0, -1.15, 0.0], [0.0, -1.45, 0.0]],
  bladderAt: [0.009, -1.108, -0.101],
};

const URINARY_BUILT = {
  artery: [[0.0, 1.2, 0.12], [0.0, 0.6, 0.12], [-0.4, 0.55, 0.15]],
  filter: [[-0.65, 0.8, 0.15], [-0.6, 0.35, 0.15], [-0.5, 0.55, 0.18]],
  filtrate: [[-0.68, 0.85, 0.2], [-0.6, 0.55, 0.22], [-0.52, 0.25, 0.22]],
  vein: [[-0.4, 0.5, 0.2], [0.0, 0.5, 0.18], [0.0, 1.2, 0.18]],
  ureter: [[-0.5, 0.15, 0.12], [-0.42, -0.25, 0.12], [-0.3, -0.7, 0.15], [-0.05, -0.9, 0.3]],
  out: [[0.0, -1.0, 0.3], [0.0, -1.5, 0.3]],
  bladderAt: [0, -0.95, 0],
};

// ---------- the nervous system: a reflex, then the brain ----------
const nervous = (P) => ({
  steps: [
    {
      part: null,
      name: ['Nerve impulse', 'Influx nerveux'],
      from: P.hand,
      path: [P.hand],
      c: IMPULSE,
      r: 0.065,
      en: 'Nerves carry messages called nerve impulses. Watch what happens when your fingers touch a hot pan. Receptors in the skin detect the heat and start an impulse.',
      fr: 'Les nerfs transportent des messages appelés influx nerveux. Regardez ce qui se passe quand vos doigts touchent une marmite chaude. Les récepteurs de la peau détectent la chaleur et déclenchent un influx.',
    },
    {
      part: 'cord',
      path: P.inp,
      en: 'The impulse travels along a sensory neurone into the spinal cord. There a relay neurone passes it straight on, without waiting for the brain.',
      fr: 'L’influx parcourt un neurone sensitif jusqu’à la moelle épinière. Là, un neurone d’association le transmet aussitôt, sans attendre le cerveau.',
    },
    {
      part: 'cord',
      flows: [{ pts: P.reflex, c: '#ff9100', n: 5, speed: 0.6, r: 0.032 }],
      en: 'A motor neurone carries the impulse out to the arm muscle, the effector, which contracts and pulls your hand away. This is a reflex action: fast, automatic, and it protects the body before you even think.',
      fr: 'Un neurone moteur porte l’influx jusqu’au muscle du bras, l’effecteur, qui se contracte et retire la main. C’est un réflexe : rapide, automatique, il protège le corps avant même qu’on y pense.',
    },
    {
      part: 'brainstem',
      path: P.up,
      en: 'At the same time the impulse goes up the spinal cord to the brain. It passes the medulla, in the brainstem, which also controls the things you never think about: breathing, heartbeat and swallowing.',
      fr: 'En même temps, l’influx monte par la moelle épinière jusqu’au cerveau. Il passe par le bulbe rachidien, dans le tronc cérébral, qui commande aussi ce à quoi on ne pense jamais : la respiration, les battements du cœur et la déglutition.',
    },
    {
      part: 'cerebrum',
      path: P.cerebrum,
      en: 'It reaches the cerebrum, the large folded part of the brain. Only now do you feel the pain and understand what happened. The cerebrum controls thinking, memory, speech and every voluntary action, such as deciding to put the pan down carefully.',
      fr: 'Il atteint le cerveau proprement dit, la grande partie plissée. C’est seulement maintenant que vous sentez la douleur et comprenez ce qui s’est passé. Le cerveau commande la pensée, la mémoire, la parole et chaque action volontaire, comme décider de poser la marmite avec soin.',
    },
    {
      part: 'cerebellum',
      path: P.cerebellum,
      en: 'The cerebellum, at the back of the brain, coordinates the muscles, so your movements are smooth and accurate and you keep your balance.',
      fr: 'Le cervelet, à l’arrière du cerveau, coordonne les muscles : vos gestes sont précis et réguliers et vous gardez l’équilibre.',
    },
    {
      part: null,
      hide: true,
      en: 'So the brain and the spinal cord form the central nervous system, and the nerves that link them to every part of the body form the peripheral nervous system.',
      fr: 'Le cerveau et la moelle épinière forment donc le système nerveux central, et les nerfs qui les relient à toutes les parties du corps forment le système nerveux périphérique.',
    },
  ],
});

const BRAIN_REAL = {
  hand: [0.95, -1.25, 0.35],
  inp: [[0.4, -1.05, 0.05], [0.02, -1.0, -0.18]],
  reflex: [[0.02, -1.0, -0.18], [0.45, -1.2, 0.12], [0.95, -1.35, 0.35]],
  up: [[0.0, -0.7, -0.18], [0.0, -0.4, -0.1], [0.0, -0.2, -0.05]],
  cerebrum: [[0.0, 0.2, 0.0], [0.05, 0.7, 0.2], [0.0, 1.1, 0.1]],
  cerebellum: [[0.0, 0.5, -0.3], [0.0, -0.05, -0.5]],
};

const BRAIN_BUILT = {
  hand: [1.3, -0.6, 0.2],
  inp: [[0.6, -0.6, 0.0], [0.05, -0.6, -0.3]],
  reflex: [[0.05, -0.7, -0.3], [0.6, -0.75, 0.0], [1.3, -0.8, 0.2]],
  up: [[0.0, -0.2, -0.3], [0.0, 0.1, -0.25]],
  cerebrum: [[0.0, 0.45, 0.0], [0.0, 1.0, 0.4]],
  cerebellum: [[0.0, 0.6, -0.2], [0.0, 0.22, -0.55]],
};

// ---------- the arm: muscles bend and straighten the elbow ----------
const arm = (P) => ({
  steps: [
    {
      part: 'humerus',
      hide: true,
      en: 'The arm works as a lever. The humerus is the bone of the upper arm. At the elbow it meets the two bones of the forearm, the radius and the ulna. Muscles are fixed to the bones by tendons.',
      fr: 'Le bras fonctionne comme un levier. L’humérus est l’os du bras. Au coude, il rencontre les deux os de l’avant-bras, le radius et le cubitus. Les muscles sont fixés aux os par des tendons.',
    },
    {
      part: 'biceps',
      name: ['Nerve impulse', 'Influx nerveux'],
      from: P.toBiceps[0],
      path: P.toBiceps.slice(1),
      c: IMPULSE,
      r: 0.06,
      act: P.flex,
      en: 'To bend the arm, a nerve impulse makes the biceps contract. It gets shorter and fatter and pulls on the radius through its tendon, so the forearm rises. Watch it bend.',
      fr: 'Pour plier le bras, un influx nerveux fait contracter le biceps. Il se raccourcit, grossit et tire sur le radius par son tendon : l’avant-bras se lève. Regardez-le se plier.',
    },
    {
      part: 'elbow',
      hide: true,
      act: P.hinge,
      en: 'The elbow is a hinge joint: it lets the forearm move in one plane only, up and down, like a door on its hinges. Smooth cartilage covers the ends of the bones, and synovial fluid lubricates the joint, so the bones move without wearing away.',
      fr: 'Le coude est une articulation en charnière : l’avant-bras ne bouge que dans un plan, de haut en bas, comme une porte sur ses gonds. Un cartilage lisse couvre les extrémités des os et le liquide synovial lubrifie l’articulation, pour que les os bougent sans s’user.',
    },
    {
      part: 'triceps',
      from: P.toTriceps[0],
      path: P.toTriceps.slice(1),
      act: P.extend,
      en: 'A muscle can only pull, never push. So to straighten the arm, the triceps at the back contracts while the biceps relaxes. The two work as an antagonistic pair: when one contracts, the other relaxes.',
      fr: 'Un muscle peut seulement tirer, jamais pousser. Pour tendre le bras, le triceps, à l’arrière, se contracte pendant que le biceps se relâche. Ils forment un couple antagoniste : quand l’un se contracte, l’autre se relâche.',
    },
    {
      part: 'elbow',
      hide: true,
      act: P.rest,
      en: 'Tendons join muscle to bone and do not stretch, so all of the muscle’s pull reaches the bone. Ligaments join bone to bone and hold the joint together.',
      fr: 'Les tendons relient les muscles aux os et ne s’étirent pas : toute la traction du muscle arrive à l’os. Les ligaments relient les os entre eux et maintiennent l’articulation.',
    },
  ],
});

const ELBOW_REAL = [-0.27, -0.15, 0.05];
const ARM_REAL = {
  toBiceps: [[0.15, 1.3, 0.15], [0.0, 0.9, 0.2], [-0.1, 0.5, 0.22]],
  toTriceps: [[0.1, 1.25, -0.1], [0.0, 0.8, -0.15], [-0.13, 0.35, -0.15]],
  flex: { elbow: { k: 'turn', axis: 'x', at: ELBOW_REAL, from: 0, to: -1.7, dur: 2.5 } },
  hinge: { elbow: { k: 'swing', axis: 'x', at: ELBOW_REAL, from: -1.7, to: -0.8, speed: 1.4 } },
  extend: { elbow: { k: 'turn', axis: 'x', at: ELBOW_REAL, from: -1.7, to: 0, dur: 2.5 } },
  rest: null,
};

const ELBOW_BUILT = [0, -0.25, 0];
const ARM_BUILT = {
  toBiceps: [[0.15, 1.35, 0.2], [0.13, 0.9, 0.3], [0.13, 0.55, 0.32]],
  toTriceps: [[-0.1, 1.35, -0.1], [-0.14, 0.9, -0.15], [-0.14, 0.5, -0.18]],
  flex: { forearm: { k: 'turn', axis: 'z', at: ELBOW_BUILT, from: 0, to: 0.7, dur: 2.5 } },
  hinge: { forearm: { k: 'swing', axis: 'z', at: ELBOW_BUILT, from: 0.7, to: -0.3, speed: 1.4 } },
  extend: { forearm: { k: 'turn', axis: 'z', at: ELBOW_BUILT, from: 0.7, to: -2.2, dur: 2.5 } },
  rest: { forearm: { k: 'turn', axis: 'z', at: ELBOW_BUILT, from: -2.2, to: -2.2, dur: 1 } },
};

// ---------- cells: what each part does ----------
const CELL = {
  steps: [
    {
      part: 'membrane',
      name: ['Glucose and oxygen', 'Glucose et oxygène'],
      from: [-2.4, 0.7, 0.3],
      path: [[-1.9, 0.45, 0.25], [-1.6, 0.1, 0.2], [-1.5, -0.18, 0.16]],
      c: '#ffca28',
      r: 0.06,
      en: 'Watch a cell at work. The cell membrane is a thin layer that controls what goes in and out. Glucose and oxygen, which the cell needs, pass in through it.',
      fr: 'Regardons une cellule au travail. La membrane cellulaire est une fine couche qui contrôle ce qui entre et ce qui sort. Le glucose et l’oxygène, dont la cellule a besoin, entrent à travers elle.',
    },
    {
      part: 'mitochondrion',
      name: ['Energy released', 'Énergie libérée'],
      path: [[-1.47, -0.22, 0.16]],
      c: '#ff7043',
      flows: [{ pts: [[-1.47, -0.22, 0.16], [-1.75, -0.45, 0.25], [-2.2, -0.7, 0.3]], c: '#9e9e9e', n: 4, speed: 0.4, r: 0.026 }],
      en: 'In the mitochondria, glucose reacts with oxygen. This is aerobic respiration. It releases the energy the cell uses to move, grow and build new materials. Carbon dioxide and water are made and leave the cell.',
      fr: 'Dans les mitochondries, le glucose réagit avec l’oxygène. C’est la respiration aérobie. Elle libère l’énergie dont la cellule a besoin pour bouger, grandir et fabriquer de nouvelles substances. Du dioxyde de carbone et de l’eau sont produits et sortent de la cellule.',
    },
    {
      part: 'nucleus',
      name: ['', ''],
      path: [[-1.2, 0.0, 0.25], [-1.05, 0.06, 0.3]],
      c: '#b39ddb',
      en: 'The nucleus contains the chromosomes. It controls everything the cell does, and its instructions are copied whenever the cell divides.',
      fr: 'Le noyau contient les chromosomes. Il commande toutes les activités de la cellule, et ses instructions sont copiées chaque fois que la cellule se divise.',
    },
    {
      part: 'cytoplasm',
      path: [[-0.75, -0.3, 0.25], [-1.3, -0.35, 0.25], [-0.8, 0.3, 0.25]],
      en: 'The cytoplasm is a watery jelly where most of the cell’s chemical reactions take place, each one speeded up by an enzyme.',
      fr: 'Le cytoplasme est une gelée aqueuse où se déroulent la plupart des réactions chimiques de la cellule, chacune accélérée par une enzyme.',
    },
    {
      part: 'chloroplast',
      name: ['Light energy', 'Énergie lumineuse'],
      from: [2.3, 1.3, 0.5],
      path: [[1.6, 0.7, 0.3], [0.62, 0.05, 0.16]],
      c: '#fff176',
      flows: [{ pts: [[0.62, 0.0, 0.16], [0.4, 0.6, 0.3], [0.2, 1.1, 0.4]], c: '#4fc3f7', n: 4, speed: 0.35, r: 0.026 }],
      en: 'A plant cell has three extra parts. Its chloroplasts contain green chlorophyll, which traps light energy for photosynthesis: carbon dioxide and water are made into glucose, and oxygen, in blue, is given off. Watch the chloroplasts being carried round the cell by the moving cytoplasm.',
      fr: 'La cellule végétale a trois parties en plus. Ses chloroplastes contiennent la chlorophylle verte, qui capte l’énergie lumineuse pour la photosynthèse : le dioxyde de carbone et l’eau donnent du glucose, et de l’oxygène, en bleu, est rejeté. Regardez les chloroplastes entraînés autour de la cellule par le cytoplasme qui bouge.',
    },
    {
      part: 'vacuole',
      hide: true,
      act: { vacuole: { k: 'breathe', amp: 0.14, speed: 1.4, at: [1.0, -0.02, 0] } },
      en: 'The large vacuole is full of cell sap. When it takes in water it swells and presses outwards on the cell, making it firm, or turgid. Turgid cells hold up the stems and leaves of plants that have no wood.',
      fr: 'La grande vacuole est remplie de suc vacuolaire. Quand elle absorbe de l’eau, elle gonfle et pousse la cellule vers l’extérieur, qui devient ferme, ou turgescente. Les cellules turgescentes soutiennent les tiges et les feuilles des plantes sans bois.',
    },
    {
      part: 'wall',
      name: ['Water', 'Eau'],
      from: [2.3, 0.2, 0.25],
      path: [[1.65, 0.1, 0.25], [1.3, 0.0, 0.2]],
      c: '#4fc3f7',
      en: 'The cell wall is made of cellulose. It is strong, so the cell does not burst when it takes in water, and it gives the cell a fixed shape. Water and dissolved substances pass through it freely.',
      fr: 'La paroi est faite de cellulose. Elle est solide : la cellule n’éclate pas quand elle absorbe de l’eau, et elle garde une forme fixe. L’eau et les substances dissoutes la traversent librement.',
    },
  ],
};

// ---------- the flower: pollination and fertilisation ----------
const FLOWER = {
  steps: [
    {
      part: 'petal',
      hide: true,
      en: 'Watch how a flower makes seeds. Its bright petals, its scent and the sweet nectar inside attract insects such as bees.',
      fr: 'Regardons comment une fleur fabrique des graines. Ses pétales vifs, son parfum et le nectar sucré attirent les insectes comme les abeilles.',
    },
    {
      part: 'anther',
      name: ['Pollen grain', 'Grain de pollen'],
      from: [0.165, 0.5, 0.113],
      path: [[0.17, 0.52, 0.12]],
      c: '#fbc02d',
      r: 0.05,
      en: 'The anthers, at the top of the stamens, make pollen grains. Each grain carries a male nucleus, the male gamete.',
      fr: 'Les anthères, en haut des étamines, fabriquent les grains de pollen. Chaque grain porte un noyau mâle, le gamète mâle.',
    },
    {
      part: 'stigma',
      path: [[0.45, 0.85, 0.35], [0.25, 1.0, 0.2], [0.0, 0.74, 0.02]],
      en: 'Pollination is the transfer of pollen from an anther to a stigma. An insect carries it: pollen sticks to its hairy body and rubs off on the sticky stigma of the next flower of the same kind it visits. This is cross-pollination.',
      fr: 'La pollinisation est le transport du pollen d’une anthère vers un stigmate. Un insecte le transporte : le pollen colle à son corps poilu et se dépose sur le stigmate collant de la fleur de même espèce qu’il visite ensuite. C’est la pollinisation croisée.',
    },
    {
      part: 'stigma',
      name: ['Pollen tube', 'Tube pollinique'],
      path: [[0.0, 0.6, 0.0], [0.0, 0.35, 0.0], [0.0, 0.12, 0.05]],
      move: 6,
      en: 'The pollen grain grows a pollen tube down through the style to the ovary. The male nucleus travels down inside the tube.',
      fr: 'Le grain de pollen fait pousser un tube pollinique à travers le style jusqu’à l’ovaire. Le noyau mâle descend à l’intérieur du tube.',
    },
    {
      part: 'ovary',
      name: ['Zygote', 'Zygote'],
      path: [[0.0, 0.05, 0.12]],
      c: '#9ccc65',
      en: 'Inside an ovule in the ovary, the male nucleus fuses with the female nucleus of the egg cell. This is fertilisation, and the new cell it makes is the zygote.',
      fr: 'Dans un ovule de l’ovaire, le noyau mâle s’unit au noyau femelle de l’oosphère. C’est la fécondation, et la cellule formée est le zygote.',
    },
    {
      part: 'ovary',
      hide: true,
      act: { ovary: { k: 'grow', amp: 0.6, dur: 4, at: [0, 0.05, 0] } },
      en: 'The zygote grows into an embryo, the ovule becomes the seed, and the ovary swells and becomes the fruit. The petals and stamens are no longer needed: they wither and fall.',
      fr: 'Le zygote devient un embryon, l’ovule devient la graine et l’ovaire grossit pour devenir le fruit. Les pétales et les étamines ne servent plus : ils fanent et tombent.',
    },
  ],
};

// ---------- chromosomes, genes and DNA ----------
const GENETICS = {
  steps: [
    {
      part: 'chromatid',
      name: ['', ''],
      from: [-1.0, 0.85, 0.2],
      path: [[-0.95, 0.2, 0.2], [-0.75, -0.6, 0.2]],
      c: '#ffffff',
      r: 0.05,
      en: 'The nucleus of each body cell holds chromosomes. Humans have 46, in 23 pairs. One chromosome of each pair came from the mother and the other from the father.',
      fr: 'Le noyau de chaque cellule du corps contient des chromosomes. L’homme en a 46, en 23 paires. Un chromosome de chaque paire vient de la mère, l’autre du père.',
    },
    {
      part: 'centromere',
      path: [[-0.7, 0.0, 0.2]],
      en: 'Before a cell divides, each chromosome copies itself. The two identical copies, the sister chromatids, stay joined at the centromere until they are pulled apart into the two new cells.',
      fr: 'Avant la division de la cellule, chaque chromosome se copie. Les deux copies identiques, les chromatides sœurs, restent unies au centromère jusqu’à ce qu’elles soient séparées vers les deux nouvelles cellules.',
    },
    {
      part: 'gene',
      name: ['Gene', 'Gène'],
      path: [[-0.94, 0.62, 0.22]],
      c: '#69f0ae',
      en: 'A gene is a short length of a chromosome. It controls one characteristic, such as your blood group, because it carries the instructions for making one protein.',
      fr: 'Un gène est un court segment de chromosome. Il commande un caractère, comme le groupe sanguin, parce qu’il porte les instructions pour fabriquer une protéine.',
    },
    {
      part: 'dna',
      name: ['DNA', 'ADN'],
      path: [[-0.4, 0.9, 0.4], [0.3, 0.9, 0.4], [0.8, 0.75, 0.35]],
      en: 'Zoom in on a chromosome and you find one very long molecule of DNA, tightly coiled. DNA is a double helix: two strands twisted round each other like a twisted ladder.',
      fr: 'Si on agrandit un chromosome, on trouve une très longue molécule d’ADN, très enroulée. L’ADN est une double hélice : deux brins enroulés l’un autour de l’autre comme une échelle tordue.',
    },
    {
      part: 'dna',
      name: ['Base pairs', 'Paires de bases'],
      path: [[0.8, 0.75, 0.0], [0.8, -0.85, 0.0]],
      en: 'The rungs of the ladder are pairs of bases. A always pairs with T, and C always pairs with G. The order of the bases along a strand is the genetic code.',
      fr: 'Les barreaux de l’échelle sont des paires de bases. A s’associe toujours avec T, et C toujours avec G. L’ordre des bases le long d’un brin est le code génétique.',
    },
    {
      part: null,
      hide: true,
      en: 'When DNA copies itself, the two strands separate and each one guides the building of a new matching strand. So every new cell receives an exact copy of the instructions.',
      fr: 'Quand l’ADN se copie, les deux brins se séparent et chacun guide la fabrication d’un nouveau brin complémentaire. Chaque nouvelle cellule reçoit ainsi une copie exacte des instructions.',
    },
  ],
};

// ---------- energy flow through an ecosystem ----------
const ECOLOGY = {
  steps: [
    {
      part: 'producers',
      name: ['Energy', 'Énergie'],
      from: [-1.7, 1.5, 0.6],
      path: [[-1.0, 0.6, 0.6], [0.0, -0.55, 0.55]],
      c: '#ffeb3b',
      r: 0.09,
      en: 'Almost all the energy in an ecosystem comes from the Sun. Green plants, the producers, trap light energy by photosynthesis and store it in the food they make.',
      fr: 'Presque toute l’énergie d’un écosystème vient du Soleil. Les plantes vertes, les producteurs, captent l’énergie lumineuse par photosynthèse et la stockent dans la matière qu’elles fabriquent.',
    },
    {
      part: 'primary',
      path: [[0.0, -0.18, 0.45]],
      r: 0.07,
      flows: [{ pts: [[0.0, -0.6, 0.5], [0.6, -0.3, 0.9], [1.2, 0.1, 1.1]], c: '#ef5350', n: 5, speed: 0.35, r: 0.03 }],
      en: 'Herbivores, the primary consumers, eat the plants. Only about a tenth of the energy passes on to them. The rest is lost, shown in red: used in respiration and given off as heat, or left in parts that are not eaten or digested.',
      fr: 'Les herbivores, consommateurs primaires, mangent les plantes. Seul un dixième environ de l’énergie leur parvient. Le reste est perdu, en rouge : utilisé par la respiration et rejeté en chaleur, ou laissé dans les parties non mangées ou non digérées.',
    },
    {
      part: 'secondary',
      path: [[0.0, 0.22, 0.35]],
      r: 0.055,
      flows: [{ pts: [[0.0, -0.25, 0.45], [0.6, 0.1, 0.8], [1.1, 0.4, 1.0]], c: '#ef5350', n: 5, speed: 0.35, r: 0.026 }],
      en: 'Carnivores that eat the herbivores are the secondary consumers. Again, only about a tenth of the energy passes on. Watch the energy get smaller at each level.',
      fr: 'Les carnivores qui mangent les herbivores sont les consommateurs secondaires. Là encore, un dixième environ de l’énergie passe. Regardez l’énergie diminuer à chaque niveau.',
    },
    {
      part: null,
      path: [[0.0, 0.63, 0.22]],
      r: 0.04,
      flows: [{ pts: [[0.0, 0.15, 0.35], [0.5, 0.45, 0.7], [1.0, 0.7, 0.9]], c: '#ef5350', n: 4, speed: 0.35, r: 0.022 }],
      en: 'So each level holds less energy than the one below. That is why the pyramid narrows to the top and why food chains rarely have more than four or five links.',
      fr: 'Chaque niveau contient donc moins d’énergie que celui du dessous. C’est pourquoi la pyramide se rétrécit vers le haut et pourquoi les chaînes alimentaires ont rarement plus de quatre ou cinq maillons.',
    },
    {
      part: 'decomposers',
      name: ['Dead remains', 'Restes morts'],
      path: [[0.6, 0.0, 0.4], [1.28, -0.9, 0.4]],
      c: '#8d6e63',
      r: 0.06,
      flows: [{ pts: [[1.28, -0.95, 0.4], [0.7, -0.85, 0.55], [0.1, -0.75, 0.55]], c: '#66bb6a', n: 5, speed: 0.35, r: 0.03 }],
      en: 'When living things die, decomposers such as bacteria and fungi feed on their remains. They return carbon dioxide and mineral salts, in green, to the air and soil for the producers to use again. Energy flows through an ecosystem, but nutrients are recycled.',
      fr: 'Quand les êtres vivants meurent, les décomposeurs comme les bactéries et les champignons se nourrissent de leurs restes. Ils rendent le dioxyde de carbone et les sels minéraux, en vert, à l’air et au sol pour que les producteurs les réutilisent. L’énergie traverse l’écosystème, mais la matière est recyclée.',
    },
  ],
};

export const BIOLOGY_DEMOS = {
  digestive: digestion(DIG_REAL),
  nutrition: digestion(DIG_BUILT),
  heart: circulation(HEART_REAL),
  transport: circulation(HEART_BUILT),
  lungs: breathing(LUNGS_REAL),
  gas: breathing(LUNGS_BUILT),
  urinary: urinary(URINARY_REAL),
  kidney: urinary(URINARY_BUILT),
  brain: nervous(BRAIN_REAL),
  nervous: nervous(BRAIN_BUILT),
  arm: arm(ARM_REAL),
  locomotion: arm(ARM_BUILT),
  cell: CELL,
  reproduction: FLOWER,
  genetics: GENETICS,
  ecology: ECOLOGY,
};
