// Form 5 Chemistry topics added from the 2026/2027 harmonised scheme of work
// (term 2: alcohols, acids, esters, soaps and polymers; term 3: practical skills
// and the GCE examination). They sit beside the MINESEC Form 5 topics.
//
// Quiz convention: the correct option is written first in `a`; options are
// shuffled when shown.

const Q = (q, a, why) => ({ q, a, why });

export const UNITS_F5 = [
  {
    id: 'ch-f5-organic',
    form: 'Form 5',
    n: 6,
    term: 2,
    seq: 4,
    group: 'matter',
    icon: 'science',
    diagram: 'soap-action',
    ask: 'Why does soap form a scum in hard water?',
    title: 'Alcohols, Acids, Esters, Soaps and Polymers',
    short: 'Alcohols to Polymers',
    focus: 'Naming alcohols, fermentation, dehydration and oxidation of ethanol, carboxylic acids and esters, saponification, detergents, addition and condensation polymers',
    lessonIds: ['ch-organic-3', 'ch-alcohols-f5', 'ch-soaps-f5'],
    vr: null,
    quiz: [
      Q('The functional group of the alcohols is:', ['–OH', '–COOH', 'C=C', '–COO–'], '–COOH is the carboxylic acid group and –COO– the ester link.'),
      Q('The alcohol with three carbon atoms and the –OH on the end carbon is:', ['Propan-1-ol', 'Propan-2-ol', 'Butan-1-ol', 'Ethanol'], 'The number gives the position of the –OH group.'),
      Q('In fermentation, yeast turns glucose into:', ['Ethanol and carbon dioxide', 'Ethene and water', 'Ethanoic acid and hydrogen', 'Methane and oxygen'], 'C₆H₁₂O₆ → 2C₂H₅OH + 2CO₂.'),
      Q('Ethanol is separated from the fermented mixture by:', ['Fractional distillation', 'Filtration', 'Chromatography', 'Evaporation to dryness'], 'Ethanol (78 °C) boils before water (100 °C).'),
      Q('When ethanol is oxidised by acidified potassium dichromate(VI), the colour changes from:', ['Orange to green', 'Purple to colourless', 'Blue to white', 'Colourless to pink'], 'The ethanol becomes ethanoic acid.'),
      Q('An ester is formed when:', ['A carboxylic acid reacts with an alcohol', 'An alkene reacts with water', 'An alkane burns', 'A fat is boiled with alkali'], 'A little concentrated sulphuric acid is used as a catalyst.'),
      Q('Boiling palm oil with sodium hydroxide to make soap is called:', ['Saponification', 'Esterification', 'Fermentation', 'Cracking'], 'The products are soap and glycerol.'),
      Q('Soapless detergents are useful because they:', ['Do not form scum in hard water', 'Are made from palm oil', 'Are always biodegradable', 'Remove calcium from water'], 'Their calcium salts are soluble.'),
      Q('Nylon is an example of:', ['A condensation polymer', 'An addition polymer', 'An alkane', 'A soap'], 'Water is given off as the monomers join.'),
    ],
  },
  {
    id: 'ch-f5-exam',
    form: 'Form 5',
    n: 7,
    term: 3,
    seq: 5,
    group: 'matter',
    icon: 'edit_note',
    diagram: 'titration-apparatus',
    ask: 'How many decimal places should I give for a burette reading?',
    title: 'Practical Skills and the GCE Chemistry Examination',
    short: 'Exam Skills',
    focus: 'Titration technique and recording, qualitative analysis tables, laboratory safety, mole calculations and how to answer Papers 1, 2 and 3',
    lessonIds: ['ch-practical-f5', 'ch-gceprep-f5'],
    vr: null,
    quiz: [
      Q('Before a titration, the burette should be rinsed with:', ['The solution it will contain', 'Distilled water only', 'Ethanol', 'The indicator'], 'Water left inside would dilute the solution.'),
      Q('A burette reading is recorded as:', ['23.40 cm³', '23.4 cm³', '23 cm³', '23.400 cm³'], 'Two decimal places, ending in 0 or 5.'),
      Q('The volume added from the burette to reach the end point is the:', ['Titre', 'Meniscus', 'Aliquot', 'Indicator'], 'Concordant titres agree within 0.10 cm³.'),
      Q('In a qualitative analysis table, "a white precipitate soluble in excess" is written under:', ['Observation', 'Test', 'Inference', 'Conclusion of the paper'], 'The inference column gives what the observation shows.'),
      Q('The volume of 1 mole of any gas at room temperature and pressure is:', ['24 dm³', '22.4 cm³', '1 dm³', '100 cm³'], 'At s.t.p. it is 22.4 dm³.'),
      Q('In an ionic equation, the ions that do not take part are called:', ['Spectator ions', 'Cations', 'Electrolytes', 'Catalysts'], 'They are left out of the ionic equation.'),
      Q('The state symbol for a substance dissolved in water is:', ['(aq)', '(l)', '(s)', '(g)'], '(l) is for a pure liquid such as water itself.'),
      Q('Gases that are poisonous should be prepared:', ['In a fume cupboard', 'On the open bench near your face', 'In a closed cupboard', 'Outside the laboratory without supervision'], 'The fume cupboard draws the gas away safely.'),
    ],
  },
];
