// Chemistry demonstrations (see demos.js for the format). Points are in each
// model's own units (raw: true), as written in chemModels.js.

const ring = (r, n = 16, y = 0) => Array.from({ length: n + 1 }, (_, i) => [r * Math.cos((i / n) * Math.PI * 2), y, r * Math.sin((i / n) * Math.PI * 2)]);

const MATTER = {
  raw: true,
  steps: [
    {
      part: 'solid',
      name: ['Heat energy', 'Énergie thermique'],
      from: [-1.7, -1.3, 0.7],
      path: [[-1.7, -0.75, 0.7]],
      c: '#ff7043',
      r: 0.1,
      en: 'In a solid the particles are packed closely in a regular pattern. They cannot move from place to place: they only vibrate about fixed positions. That is why a solid keeps its own shape and volume.',
      fr: 'Dans un solide, les particules sont serrées et rangées régulièrement. Elles ne se déplacent pas : elles vibrent seulement autour de positions fixes. C’est pourquoi un solide garde sa forme et son volume.',
    },
    {
      part: 'liquid',
      path: [[-0.85, -0.3, 0.7], [0, -0.75, 0.7]],
      en: 'Heat the solid and its particles gain energy and vibrate more. At the melting point they break free of their fixed positions: the solid melts. In a liquid the particles are still close together, but they slide past one another, so a liquid flows and takes the shape of its container, while its volume stays the same.',
      fr: 'Chauffons le solide : ses particules gagnent de l’énergie et vibrent davantage. Au point de fusion, elles quittent leurs positions fixes : le solide fond. Dans un liquide, les particules restent proches mais glissent les unes sur les autres : le liquide coule et prend la forme du récipient, mais garde son volume.',
    },
    {
      part: 'gas',
      path: [[0.85, -0.3, 0.7], [1.7, -0.75, 0.7]],
      en: 'Heat the liquid more. At the boiling point the particles have enough energy to escape from one another completely: the liquid boils and becomes a gas. Gas particles are far apart and move fast in all directions. Their collisions with the walls of the container make the gas pressure.',
      fr: 'Chauffons encore. Au point d’ébullition, les particules ont assez d’énergie pour se séparer complètement : le liquide bout et devient un gaz. Les particules d’un gaz sont éloignées et se déplacent vite dans toutes les directions. Leurs chocs contre les parois du récipient créent la pression du gaz.',
    },
    {
      part: null,
      hide: true,
      en: 'Cooling does the opposite: a gas condenses into a liquid, and a liquid freezes into a solid. A few solids, such as iodine, turn straight into a gas when heated: this is sublimation.',
      fr: 'Le refroidissement fait l’inverse : un gaz se condense en liquide, et un liquide se solidifie. Quelques solides, comme le diiode, passent directement à l’état gazeux quand on les chauffe : c’est la sublimation.',
    },
  ],
};

const ATOMS = {
  raw: true,
  steps: [
    {
      part: 'nucleus',
      name: ['Nucleus', 'Noyau'],
      from: [0, 0.7, 0.3],
      path: [[0, 0.12, 0.2]],
      c: '#ffffff',
      r: 0.06,
      en: 'This is a sodium atom. At its centre is the tiny nucleus. It holds 11 protons, which are positive, shown in red, and 12 neutrons, which have no charge. Almost all the mass of the atom is in the nucleus.',
      fr: 'Voici un atome de sodium. En son centre se trouve le minuscule noyau. Il contient 11 protons, positifs, en rouge, et 12 neutrons, sans charge. Presque toute la masse de l’atome est dans le noyau.',
    },
    {
      part: 'shell1',
      name: ['Electron', 'Électron'],
      from: [0.6, 0, 0],
      path: ring(0.6),
      c: '#64b5f6',
      move: 5,
      en: 'Electrons are negative. They move round the nucleus in shells. The first shell can hold at most 2 electrons.',
      fr: 'Les électrons sont négatifs. Ils tournent autour du noyau sur des couches. La première couche contient au plus 2 électrons.',
    },
    {
      part: 'shell2',
      from: [1.05, 0, 0],
      path: ring(1.05),
      move: 6,
      en: 'The second shell can hold up to 8. Sodium has 11 electrons, the same as its number of protons, so after 2 and 8 there is one electron left over.',
      fr: 'La deuxième couche peut en contenir 8. Le sodium a 11 électrons, autant que de protons : après 2 et 8, il reste un électron.',
    },
    {
      part: 'outer',
      from: [1.5, 0, 0],
      path: ring(1.5, 20).slice(0, 4),
      en: 'That single electron is in the third shell, so sodium’s electron arrangement is 2, 8, 1. One outer electron puts sodium in Group 1, and three shells put it in Period 3.',
      fr: 'Cet électron unique est sur la troisième couche : la configuration du sodium est 2, 8, 1. Un électron périphérique place le sodium dans le groupe 1, et trois couches dans la période 3.',
    },
    {
      part: 'outer',
      name: ['Electron lost', 'Électron perdu'],
      path: [[2.4, 0.5, 1.6]],
      en: 'Atoms are most stable with a full outer shell. Sodium reacts by losing its one outer electron, which is easy. It becomes a sodium ion, Na plus, with the arrangement 2, 8.',
      fr: 'Un atome est plus stable avec une couche externe complète. Le sodium réagit en perdant son unique électron externe, ce qui est facile. Il devient un ion sodium, Na plus, de configuration 2, 8.',
    },
  ],
};

const BONDING = {
  raw: true,
  steps: [
    {
      part: 'na',
      name: ['Electron', 'Électron'],
      from: [-0.5, 0.5, 0.5],
      path: [[-0.25, 0.85, 0.65], [0, 0.5, 0.5]],
      c: '#64b5f6',
      r: 0.06,
      en: 'Sodium chloride forms by ionic bonding. A sodium atom, 2, 8, 1, gives its one outer electron to a chlorine atom, 2, 8, 7. Watch the electron move across.',
      fr: 'Le chlorure de sodium se forme par liaison ionique. Un atome de sodium, 2, 8, 1, donne son électron externe à un atome de chlore, 2, 8, 7. Regardez l’électron passer de l’un à l’autre.',
    },
    {
      part: 'cl',
      en: 'Sodium becomes a positive ion, Na plus, and chlorine becomes a negative chloride ion, Cl minus. Both now have full outer shells, like a noble gas.',
      fr: 'Le sodium devient un ion positif, Na plus, et le chlore un ion négatif, chlorure, Cl moins. Tous deux ont maintenant une couche externe complète, comme un gaz noble.',
    },
    {
      part: 'lattice',
      name: ['Six neighbours', 'Six voisins'],
      from: [0, 0, 0],
      path: [[0.5, 0, 0], [0, 0.5, 0], [-0.5, 0, 0], [0, -0.5, 0], [0, 0, 0.5], [0, 0, -0.5], [0, 0, 0]],
      c: '#ffd54f',
      move: 9,
      en: 'Opposite charges attract strongly in every direction, so the ions pack into a giant lattice. Each chloride ion is surrounded by six sodium ions, and each sodium ion by six chloride ions.',
      fr: 'Les charges opposées s’attirent fortement dans toutes les directions : les ions s’empilent en un réseau géant. Chaque ion chlorure est entouré de six ions sodium, et chaque ion sodium de six ions chlorure.',
    },
    {
      part: 'lattice',
      hide: true,
      en: 'Breaking this lattice takes a lot of energy, so sodium chloride melts only at 801 °C. It conducts electricity when molten or dissolved in water, because then its ions are free to move, but not as a solid.',
      fr: 'Briser ce réseau demande beaucoup d’énergie : le chlorure de sodium ne fond qu’à 801 °C. Il conduit le courant fondu ou dissous dans l’eau, car ses ions sont alors libres de bouger, mais pas à l’état solide.',
    },
  ],
};

const MOLES = {
  raw: true,
  steps: [
    {
      part: 'water',
      name: ['Shared pair', 'Doublet partagé'],
      from: [-1.956, -0.176, 0.25],
      path: [[-1.6, 0.1, 0.25], [-1.244, -0.176, 0.25]],
      c: '#ffd54f',
      r: 0.05,
      en: 'In a molecule, atoms are held by covalent bonds: each bond is a pair of electrons shared by two atoms. Water, H2O, has one oxygen atom bonded to two hydrogen atoms.',
      fr: 'Dans une molécule, les atomes sont liés par des liaisons covalentes : chaque liaison est une paire d’électrons partagée par deux atomes. L’eau, H2O, a un atome d’oxygène lié à deux atomes d’hydrogène.',
    },
    {
      part: 'water',
      en: 'Add the relative atomic masses to get the relative molecular mass. Hydrogen is 1 and oxygen is 16, so water is 1 plus 1 plus 16, which is 18. One mole of water has a mass of 18 grams.',
      fr: 'On additionne les masses atomiques relatives pour obtenir la masse moléculaire relative. H vaut 1 et O vaut 16 : l’eau vaut 1 plus 1 plus 16, soit 18. Une mole d’eau a une masse de 18 grammes.',
    },
    {
      part: 'co2',
      path: [[-0.5, 0, 0.25], [0, 0, 0.25], [0.5, 0, 0.25]],
      en: 'Carbon dioxide, CO2, has one carbon atom joined to two oxygen atoms by double bonds, two shared pairs each. Its relative molecular mass is 12 plus 16 plus 16, which is 44, so one mole has a mass of 44 grams.',
      fr: 'Le dioxyde de carbone, CO2, a un atome de carbone lié à deux atomes d’oxygène par des doubles liaisons, deux paires partagées chacune. Sa masse moléculaire relative est 12 plus 16 plus 16, soit 44 : une mole a une masse de 44 grammes.',
    },
    {
      part: 'methane',
      path: [[1.6, 0, 0.25], [1.6, 0.5, 0.1], [1.6, 0, 0.25], [2.07, -0.167, 0.1], [1.6, 0, 0.25], [1.364, -0.167, 0.45]],
      en: 'Methane, CH4, has one carbon atom with four single bonds to hydrogen atoms, pointing to the corners of a tetrahedron. Its relative molecular mass is 12 plus 4, which is 16.',
      fr: 'Le méthane, CH4, a un atome de carbone avec quatre liaisons simples vers des atomes d’hydrogène, dirigées vers les sommets d’un tétraèdre. Sa masse moléculaire relative est 12 plus 4, soit 16.',
    },
    {
      part: null,
      hide: true,
      en: 'One mole of any substance contains the same number of particles: 6.02 times ten to the power 23, the Avogadro constant. So 18 grams of water and 16 grams of methane contain the same number of molecules. To find the number of moles, divide the mass by the molar mass.',
      fr: 'Une mole de n’importe quelle substance contient le même nombre de particules : 6,02 fois dix puissance 23, la constante d’Avogadro. Ainsi 18 grammes d’eau et 16 grammes de méthane contiennent le même nombre de molécules. Pour trouver le nombre de moles, on divise la masse par la masse molaire.',
    },
  ],
};

const ACIDS = {
  raw: true,
  // glassware is see-through already: nothing is dimmed
  see: false,
  steps: [
    {
      part: 'flask',
      name: ['Alkali and indicator', 'Base et indicateur'],
      from: [0.1, -1.15, 0.35],
      path: [[0.1, -1.18, 0.35]],
      c: '#f48fb1',
      r: 0.06,
      en: 'A titration finds the exact volume of acid that neutralises an alkali. With a pipette, 25.0 cubic centimetres of sodium hydroxide solution go into the conical flask, with a few drops of phenolphthalein indicator. In alkali, phenolphthalein is pink.',
      fr: 'Un titrage permet de trouver le volume exact d’acide qui neutralise une base. On verse à la pipette 25,0 centimètres cubes de solution d’hydroxyde de sodium dans l’erlenmeyer, avec quelques gouttes de phénolphtaléine. En milieu basique, la phénolphtaléine est rose.',
    },
    {
      part: 'burette',
      name: ['Hydrochloric acid', 'Acide chlorhydrique'],
      from: [0.1, -0.5, 0.15],
      path: [[0.1, 1.1, 0.15]],
      c: '#90caf9',
      en: 'The burette is filled with hydrochloric acid of known concentration, and the starting reading is written down, reading from the bottom of the meniscus at eye level.',
      fr: 'La burette est remplie d’acide chlorhydrique de concentration connue, et on note la lecture de départ, au bas du ménisque, l’œil à hauteur du trait.',
    },
    {
      part: 'tap',
      path: [[0.1, -0.6, 0.15]],
      flows: [{ pts: [[0.1, -0.84, 0.05], [0.1, -1.12, 0.05]], c: '#90caf9', n: 3, speed: 0.9, r: 0.03 }],
      en: 'Open the tap and let the acid run into the flask while swirling it. Each drop reacts with the alkali: hydrogen ions from the acid join hydroxide ions from the alkali to make water. The pink colour flashes away where the acid lands, then comes back as you swirl.',
      fr: 'On ouvre le robinet et on laisse couler l’acide dans l’erlenmeyer en l’agitant. Chaque goutte réagit avec la base : les ions hydrogène de l’acide s’unissent aux ions hydroxyde pour former de l’eau. Le rose disparaît un instant là où tombe l’acide, puis revient quand on agite.',
    },
    {
      part: 'flask',
      name: ['End point', 'Point d’équivalence'],
      path: [[0.1, -1.15, 0.35]],
      c: '#eceff1',
      flows: [{ pts: [[0.1, -0.84, 0.05], [0.1, -1.12, 0.05]], c: '#90caf9', n: 1, speed: 0.5, r: 0.03 }],
      paint: { flask: ['#f2a7c9', '#eef3f7'] },
      move: 6,
      en: 'Near the end, add the acid drop by drop. When one drop turns the solution from pink to colourless, all the alkali has just been neutralised: this is the end point. Close the tap and read the burette again.',
      fr: 'Vers la fin, on ajoute l’acide goutte à goutte. Quand une seule goutte fait passer la solution du rose à l’incolore, toute la base vient d’être neutralisée : c’est le point d’équivalence. On ferme le robinet et on relit la burette.',
    },
    {
      part: null,
      hide: true,
      en: 'The volume of acid used is the final reading minus the first one. Repeat until two results agree within 0.10 cubic centimetres, take their mean, and use the equation, sodium hydroxide plus hydrochloric acid gives sodium chloride plus water, to calculate the concentration.',
      fr: 'Le volume d’acide versé est la lecture finale moins la première. On recommence jusqu’à ce que deux résultats concordent à 0,10 centimètre cube près, on prend leur moyenne, et on utilise l’équation, hydroxyde de sodium plus acide chlorhydrique donne chlorure de sodium plus eau, pour calculer la concentration.',
    },
  ],
};

const REDOX = {
  raw: true,
  // glassware is see-through already: nothing is dimmed
  see: false,
  steps: [
    {
      part: 'supply',
      name: ['Electrons', 'Électrons'],
      from: [0.3, 0.9, 0.2],
      path: [[0.4, 0.9, 0.2], [0.4, 0.45, 0.2], [0.4, -0.5, 0.2]],
      c: '#64b5f6',
      r: 0.06,
      en: 'Electrolysis uses electricity to break down a compound. The power supply pushes electrons out of its negative terminal, along the wire, into the negative electrode, the cathode.',
      fr: 'L’électrolyse utilise l’électricité pour décomposer un composé. Le générateur pousse les électrons hors de sa borne négative, le long du fil, jusqu’à l’électrode négative, la cathode.',
    },
    {
      part: 'electrolyte',
      flows: [
        { pts: [[-0.65, -0.8, 0.35], [0.3, -0.7, 0.3]], c: '#ef5350', n: 4, speed: 0.35, r: 0.04 },
        { pts: [[0.65, -0.6, 0.35], [-0.3, -0.75, 0.3]], c: '#42a5f5', n: 4, speed: 0.35, r: 0.04 },
      ],
      en: 'The electrolyte here is dilute sulfuric acid. It contains ions that are free to move: positive hydrogen ions, in red, and negative sulfate and hydroxide ions, in blue. Positive ions drift to the cathode and negative ions to the anode.',
      fr: 'L’électrolyte est ici de l’acide sulfurique dilué. Il contient des ions libres de se déplacer : des ions hydrogène positifs, en rouge, et des ions sulfate et hydroxyde négatifs, en bleu. Les ions positifs vont vers la cathode, les négatifs vers l’anode.',
    },
    {
      part: 'cathode',
      name: ['Hydrogen gas', 'Dihydrogène'],
      path: [[0.48, -0.9, 0.2], [0.48, -0.22, 0.2]],
      c: '#ffffff',
      flows: [{ pts: [[-0.65, -0.8, 0.35], [0.3, -0.7, 0.3]], c: '#ef5350', n: 4, speed: 0.35, r: 0.04 }],
      en: 'At the negative cathode, each hydrogen ion gains an electron. Gaining electrons is reduction. Hydrogen atoms pair up into molecules, and bubbles of hydrogen gas rise.',
      fr: 'À la cathode négative, chaque ion hydrogène gagne un électron. Gagner des électrons, c’est une réduction. Les atomes d’hydrogène s’unissent en molécules, et des bulles de dihydrogène montent.',
    },
    {
      part: 'anode',
      name: ['Electrons', 'Électrons'],
      from: [-0.4, -0.5, 0.2],
      path: [[-0.4, 0.45, 0.2], [-0.4, 0.9, 0.2], [-0.3, 0.9, 0.2]],
      c: '#64b5f6',
      flows: [{ pts: [[0.65, -0.6, 0.35], [-0.3, -0.75, 0.3]], c: '#42a5f5', n: 4, speed: 0.35, r: 0.04 }],
      en: 'At the positive anode, hydroxide ions lose electrons. Losing electrons is oxidation. Bubbles of oxygen gas form, and the electrons travel back along the wire to the positive terminal of the supply.',
      fr: 'À l’anode positive, les ions hydroxyde perdent des électrons. Perdre des électrons, c’est une oxydation. Des bulles de dioxygène se forment, et les électrons repartent par le fil vers la borne positive du générateur.',
    },
    {
      part: null,
      hide: true,
      en: 'Twice as much hydrogen as oxygen is made, because water is H2O. To remember which is which, think of OIL RIG: oxidation is loss of electrons, reduction is gain.',
      fr: 'On obtient deux fois plus de dihydrogène que de dioxygène, car l’eau est H2O. Pour s’en souvenir : l’oxydation est une perte d’électrons, la réduction un gain.',
    },
  ],
};

const GAS_PATH = [[-0.9, -0.72, 0.1], [-0.8, -0.2, 0.05], [-0.8, 0.35, 0], [-0.8, 0.6, 0], [0.1, 0.6, 0], [0.45, 0.6, 0]];
const RATES = {
  raw: true,
  // glassware is see-through already: nothing is dimmed
  see: false,
  steps: [
    {
      part: 'chips',
      name: ['Carbon dioxide', 'Dioxyde de carbone'],
      from: GAS_PATH[0],
      path: [GAS_PATH[0]],
      c: '#eceff1',
      r: 0.07,
      en: 'Marble chips are calcium carbonate. In hydrochloric acid they react: calcium carbonate plus hydrochloric acid gives calcium chloride, water and carbon dioxide gas. Watch the bubbles.',
      fr: 'Les éclats de marbre sont du carbonate de calcium. Dans l’acide chlorhydrique, ils réagissent : carbonate de calcium plus acide chlorhydrique donne chlorure de calcium, eau et dioxyde de carbone. Regardez les bulles.',
    },
    {
      part: 'flask',
      path: GAS_PATH.slice(1),
      flows: [{ pts: GAS_PATH, c: '#eceff1', n: 6, speed: 0.3, r: 0.035 }],
      en: 'The carbon dioxide rises out of the acid, up through the delivery tube and into the gas syringe.',
      fr: 'Le dioxyde de carbone sort de l’acide, monte dans le tube à dégagement et entre dans la seringue à gaz.',
    },
    {
      part: 'syringe',
      flows: [{ pts: GAS_PATH, c: '#eceff1', n: 6, speed: 0.3, r: 0.035 }],
      en: 'As the gas collects, it pushes the plunger out. Read the volume every 30 seconds: the volume made each second is the rate of reaction. The plunger moves quickly at first, then more and more slowly, because the acid is being used up.',
      fr: 'En s’accumulant, le gaz pousse le piston. On lit le volume toutes les 30 secondes : le volume produit par seconde est la vitesse de réaction. Le piston avance vite au début, puis de plus en plus lentement, car l’acide s’épuise.',
    },
    {
      part: 'chips',
      path: [[-0.9, -0.72, 0.25]],
      en: 'The reaction is faster if the acid is more concentrated, if it is warmer, or if the marble is in smaller pieces, because smaller pieces have a larger surface area. Each change gives more successful collisions between particles every second.',
      fr: 'La réaction est plus rapide si l’acide est plus concentré, s’il est plus chaud, ou si le marbre est en plus petits morceaux, car ils offrent une plus grande surface. Chacun de ces changements donne plus de chocs efficaces entre particules chaque seconde.',
    },
    {
      part: null,
      hide: true,
      en: 'The reaction stops when one reactant is used up. The same mass of marble as a powder makes the same total volume of gas, only faster.',
      fr: 'La réaction s’arrête quand un réactif est épuisé. La même masse de marbre en poudre donne le même volume total de gaz, seulement plus vite.',
    },
  ],
};

const FURNACE = {
  raw: true,
  // glassware is see-through already: nothing is dimmed
  see: false,
  steps: [
    {
      part: 'charge',
      name: ['Charge', 'Charge'],
      from: [0, 2.1, 0.25],
      path: [[0, 1.3, 0.25]],
      c: '#8d6e63',
      r: 0.09,
      en: 'The blast furnace makes iron from haematite, an ore of iron(III) oxide. The charge, a mixture of iron ore, coke and limestone, is added at the top.',
      fr: 'Le haut fourneau produit du fer à partir de l’hématite, un minerai d’oxyde de fer(III). La charge, un mélange de minerai, de coke et de calcaire, est introduite par le haut.',
    },
    {
      part: 'air',
      flows: [
        { pts: [[-1.5, -0.55, 0.15], [-0.5, -0.55, 0.15]], c: '#ffb74d', n: 4, speed: 0.6, r: 0.045 },
        { pts: [[1.5, -0.55, 0.15], [0.5, -0.55, 0.15]], c: '#ffb74d', n: 4, speed: 0.6, r: 0.045 },
      ],
      en: 'Hot air is blown in near the bottom. Coke, which is carbon, burns in the oxygen of the air to make carbon dioxide. This reaction gives out a great deal of heat.',
      fr: 'De l’air chaud est soufflé près du bas. Le coke, du carbone, brûle dans l’oxygène de l’air en donnant du dioxyde de carbone. Cette réaction dégage énormément de chaleur.',
    },
    {
      part: 'reduction',
      name: ['Iron ore', 'Minerai de fer'],
      path: [[0, 0.4, 0.4]],
      flows: [{ pts: [[0, -0.45, 0.3], [0, 0.35, 0.3]], c: '#b0bec5', n: 4, speed: 0.4, r: 0.04 }],
      en: 'Higher up, the carbon dioxide reacts with more coke to make carbon monoxide, in grey. Carbon monoxide takes the oxygen away from the iron oxide: the iron oxide is reduced to iron, and the carbon monoxide is oxidised to carbon dioxide.',
      fr: 'Plus haut, le dioxyde de carbone réagit avec du coke pour donner du monoxyde de carbone, en gris. Le monoxyde de carbone enlève l’oxygène de l’oxyde de fer : l’oxyde de fer est réduit en fer, et le monoxyde de carbone oxydé en dioxyde de carbone.',
    },
    {
      part: 'iron',
      name: ['Molten iron', 'Fer fondu'],
      path: [[0, -0.3, 0.4], [0, -1.0, 0.5]],
      c: '#ff5722',
      en: 'The iron is molten at this temperature. It trickles down and collects at the bottom of the furnace, where it is tapped off.',
      fr: 'À cette température, le fer est fondu. Il coule vers le bas et s’accumule au fond du fourneau, d’où on le soutire.',
    },
    {
      part: 'slag',
      flows: [{ pts: [[0.25, 0.3, 0.35], [0.35, -0.3, 0.4], [0.45, -0.78, 0.6]], c: '#ffd54f', n: 4, speed: 0.35, r: 0.04 }],
      en: 'The limestone breaks down into calcium oxide, which reacts with the sandy impurities, silicon dioxide, to make slag, calcium silicate. Slag is less dense than iron, so it floats on top and is tapped off separately. It is used for roads and cement.',
      fr: 'Le calcaire se décompose en oxyde de calcium, qui réagit avec les impuretés sableuses, le dioxyde de silicium, pour former le laitier, du silicate de calcium. Moins dense que le fer, le laitier flotte au-dessus et est soutiré à part. Il sert pour les routes et le ciment.',
    },
  ],
};

const HABER = {
  raw: true,
  steps: [
    {
      part: 'n2',
      name: ['Nitrogen', 'Diazote'],
      from: [-1.7, 0.3, 0.35],
      path: [[-1.55, 0.0, 0.35]],
      c: '#5c8df6',
      r: 0.08,
      en: 'Ammonia is made by the Haber process. Nitrogen, N2, comes from the air, which is about 78 percent nitrogen.',
      fr: 'L’ammoniac est fabriqué par le procédé Haber. Le diazote, N2, vient de l’air, qui en contient environ 78 pour cent.',
    },
    {
      part: 'h2',
      flows: [{ pts: [[0, 0.4, 0.35], [-0.8, 0.0, 0.35]], c: '#eceff1', n: 3, speed: 0.4, r: 0.05 }],
      en: 'Hydrogen, H2, is made from natural gas and steam. The two gases are mixed in the ratio of one volume of nitrogen to three volumes of hydrogen, the ratio in the equation.',
      fr: 'Le dihydrogène, H2, est obtenu à partir du gaz naturel et de la vapeur d’eau. Les deux gaz sont mélangés à raison d’un volume de diazote pour trois de dihydrogène, comme dans l’équation.',
    },
    {
      part: null,
      name: ['Iron catalyst', 'Catalyseur au fer'],
      path: [[0.0, -0.15, 0.4]],
      c: '#ff7043',
      flows: [{ pts: [[-0.3, 0.4, 0.35], [0.0, -0.1, 0.4]], c: '#eceff1', n: 3, speed: 0.45, r: 0.05 }],
      en: 'The mixture passes over an iron catalyst at about 450 °C and 200 atmospheres. Nitrogen and hydrogen react to make ammonia, and the reaction is reversible: one nitrogen plus three hydrogen molecules give two ammonia molecules, and the ammonia can split up again.',
      fr: 'Le mélange passe sur un catalyseur au fer vers 450 °C et 200 atmosphères. Le diazote et le dihydrogène réagissent pour former de l’ammoniac, et la réaction est réversible : une molécule de diazote et trois de dihydrogène donnent deux molécules d’ammoniac, qui peuvent se décomposer à nouveau.',
    },
    {
      part: 'nh3',
      name: ['Ammonia', 'Ammoniac'],
      path: [[0.8, 0.1, 0.4], [1.5, 0.25, 0.35]],
      c: '#9575cd',
      en: 'Only about 15 percent of the gases turn into ammonia on each pass. The mixture is cooled so the ammonia liquefies and is removed, and the unreacted nitrogen and hydrogen are sent round again.',
      fr: 'Environ 15 pour cent seulement des gaz se transforment en ammoniac à chaque passage. Le mélange est refroidi, l’ammoniac se liquéfie et est retiré, et le diazote et le dihydrogène restants sont recyclés.',
    },
    {
      part: 'nh3',
      hide: true,
      en: 'Most of the ammonia is used to make fertilisers such as ammonium nitrate, which give crops the nitrogen they need to grow.',
      fr: 'La plus grande partie de l’ammoniac sert à fabriquer des engrais comme le nitrate d’ammonium, qui apportent aux cultures l’azote dont elles ont besoin.',
    },
  ],
};

const ORGANIC = {
  raw: true,
  steps: [
    {
      part: 'ethane',
      name: ['', ''],
      from: [-1.8, 0.6, 0.3],
      path: [[-1.8, 0.1, 0.3]],
      c: '#ffffff',
      r: 0.06,
      en: 'Ethane, C2H6, is an alkane. Each carbon atom has four single bonds, so ethane is saturated. Alkanes are fairly unreactive: they burn well, and react with chlorine only in sunlight.',
      fr: 'L’éthane, C2H6, est un alcane. Chaque atome de carbone a quatre liaisons simples : l’éthane est saturé. Les alcanes sont peu réactifs : ils brûlent bien et ne réagissent avec le dichlore qu’à la lumière.',
    },
    {
      part: 'ethene',
      name: ['Bromine water', 'Eau de brome'],
      from: [0, 0.9, 0.3],
      path: [[0, 0.1, 0.3]],
      c: '#ff9800',
      r: 0.08,
      en: 'Ethene, C2H4, is an alkene. It has a carbon to carbon double bond, so it is unsaturated. Shake it with orange bromine water and the colour disappears, because bromine adds across the double bond. This is the test for an alkene.',
      fr: 'L’éthène, C2H4, est un alcène. Il possède une double liaison carbone carbone : il est insaturé. Agité avec de l’eau de brome orange, il la décolore, car le brome s’additionne sur la double liaison. C’est le test des alcènes.',
    },
    {
      part: 'ethene',
      name: ['Steam', 'Vapeur d’eau'],
      from: [0, 0.9, 0.3],
      path: [[0, 0.1, 0.3]],
      c: '#b3e5fc',
      r: 0.07,
      en: 'Ethene also reacts with steam at about 300 °C and 60 to 70 atmospheres, with a phosphoric acid catalyst. The double bond opens and a water molecule adds across it.',
      fr: 'L’éthène réagit aussi avec la vapeur d’eau vers 300 °C et 60 à 70 atmosphères, avec un catalyseur à l’acide phosphorique. La double liaison s’ouvre et une molécule d’eau s’y additionne.',
    },
    {
      part: 'ethanol',
      name: ['Ethanol', 'Éthanol'],
      path: [[0.9, 0.2, 0.3], [1.7, 0.1, 0.3]],
      c: '#ce93d8',
      en: 'The product is ethanol, C2H5OH, an alcohol: it has the OH group. Ethanol is also made by fermenting sugar with yeast. It is used as a fuel and as a solvent.',
      fr: 'Le produit est l’éthanol, C2H5OH, un alcool : il porte le groupe OH. L’éthanol est aussi obtenu par fermentation du sucre par la levure. Il sert de carburant et de solvant.',
    },
  ],
};

const drop = (x) => ({ from: [x, 1.45, 0.2], path: [[x, 0.55, 0.2]] });
const ANALYSIS = {
  raw: true,
  // glassware is see-through already: nothing is dimmed
  see: false,
  steps: [
    {
      part: null,
      name: ['Sodium hydroxide', 'Hydroxyde de sodium'],
      from: [0, 1.45, 0.2],
      path: [[0, 1.45, 0.2]],
      c: '#e3f2fd',
      r: 0.07,
      en: 'To find which metal ion is in a solution, add a few drops of sodium hydroxide solution and look at the colour of the precipitate that forms.',
      fr: 'Pour identifier l’ion métallique d’une solution, on ajoute quelques gouttes de solution d’hydroxyde de sodium et on observe la couleur du précipité.',
    },
    { part: 'cu', ...drop(-0.9), en: 'Copper(II) ions give a blue precipitate of copper(II) hydroxide.', fr: 'Les ions cuivre(II) donnent un précipité bleu d’hydroxyde de cuivre(II).' },
    { part: 'fe2', ...drop(-0.3), en: 'Iron(II) ions give a green precipitate. Left in the air, it slowly turns brown at the surface as it is oxidised.', fr: 'Les ions fer(II) donnent un précipité vert. À l’air, il brunit lentement en surface en s’oxydant.' },
    { part: 'fe3', ...drop(0.3), en: 'Iron(III) ions give a red-brown precipitate.', fr: 'Les ions fer(III) donnent un précipité rouille.' },
    {
      part: 'zn',
      ...drop(0.9),
      en: 'Zinc ions give a white precipitate. Add more sodium hydroxide and it dissolves again, giving a colourless solution, because zinc hydroxide is amphoteric. Aluminium ions do the same, so a second test tells them apart.',
      fr: 'Les ions zinc donnent un précipité blanc. Avec un excès d’hydroxyde de sodium, il se redissout en une solution incolore, car l’hydroxyde de zinc est amphotère. Les ions aluminium font de même : un autre test permet de les distinguer.',
    },
  ],
};

export const CHEMISTRY_DEMOS = {
  'ch-matter': MATTER,
  'ch-atoms': ATOMS,
  'ch-bonding': BONDING,
  'ch-moles': MOLES,
  'ch-acids': ACIDS,
  'ch-redox': REDOX,
  'ch-energy': RATES,
  'ch-metals': FURNACE,
  'ch-nonmetals': HABER,
  'ch-organic': ORGANIC,
  'ch-analysis': ANALYSIS,
};
