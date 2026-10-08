// Form 5 Chemistry lessons added from the 2026/2027 harmonised scheme of work:
// alcohols, soaps, detergents and polymers, pollution, practical skills and the
// GCE examination. They sit beside the MINESEC Form 5 lessons. Original text
// written for this app. **double asterisks** mark key terms.

const L = (id, unit, n, title, minutes, tags, body, figure, tip, check, terms, examples) => ({
  id,
  unit,
  n,
  title,
  minutes,
  paper: 'Paper 1 & 2',
  tags,
  body,
  figure,
  ...(examples ? { examples } : {}),
  tip,
  check: { q: check[0], a: check[1], why: check[2] },
  terms,
});

export const LESSONS_F5 = [
  L(
    'ch-alcohols-f5',
    'ch-f5-organic',
    '6.2',
    'Alcohols: naming, making ethanol by fermentation, and their reactions',
    14,
    ['Organic', 'Practical'],
    [
      'The **alcohols** (alkanols) contain the **–OH** functional group. They are named from the alkane with the same number of carbons, changing **-e** to **-ol**, with a number for the position of the –OH group from three carbons on:\n- CH₃OH: **methanol**\n- C₂H₅OH: **ethanol**\n- C₃H₇OH: **propan-1-ol** (–OH on the end carbon) or propan-2-ol (on the middle carbon)\n- C₄H₉OH: **butan-1-ol**\nTheir general formula is CnH2n+1OH.',
      '**Practical: making ethanol by fermentation.** Dissolve sugar in warm water in a flask and add a little yeast. Close the flask with a tube leading into **limewater**, so air cannot get in. Keep it warm, at about 25 to 35 °C, for a few days:\n- bubbles of **carbon dioxide** turn the limewater milky\n- the yeast enzymes turn glucose into ethanol: C₆H₁₂O₆ → 2C₂H₅OH + 2CO₂\n- fermentation stops when the ethanol reaches about 15%, because it kills the yeast',
      'The ethanol is separated from the water by **fractional distillation**: ethanol boils at 78 °C and water at 100 °C, so the ethanol vapour reaches the top of the column first and is condensed. Palm wine and local brews are made by fermentation, which is why they contain alcohol.',
      'Reactions of ethanol:\n- **Combustion**: it burns with a clean blue flame, C₂H₅OH + 3O₂ → 2CO₂ + 3H₂O, so it is used as a fuel.\n- **Dehydration**: passed over hot aluminium oxide (or heated with excess concentrated sulphuric acid), it loses water and forms **ethene**: C₂H₅OH → C₂H₄ + H₂O.\n- **Oxidation**: warmed with acidified potassium dichromate(VI), which turns from **orange to green**, it is oxidised to **ethanoic acid**. Bacteria in air do the same slowly, which is why palm wine left open turns sour.',
      'Ethanol is used as a fuel, as a solvent (in perfumes, medicines and paints) and in drinks. Drinking too much damages the liver and brain, and methanol is very poisonous: even a small amount can cause blindness or death.',
    ],
    'organic-structures',
    'Learn the colour change for oxidation: acidified potassium dichromate(VI) goes from **orange to green** when an alcohol is oxidised.',
    ['Ethanol is dehydrated to ethene by passing its vapour over:', ['Hot aluminium oxide', 'Cold water', 'Yeast', 'Limewater'], 'Dehydration removes a molecule of water from each ethanol molecule.'],
    [
      ['Alcohol', 'A compound containing the –OH functional group, such as ethanol.'],
      ['Fermentation', 'The breakdown of sugar by yeast, without oxygen, into ethanol and carbon dioxide.'],
      ['Dehydration', 'Removal of water from a compound, as in ethanol → ethene.'],
      ['Oxidation of an alcohol', 'Its conversion to a carboxylic acid, for example by acidified potassium dichromate(VI).'],
    ],
    [
      {
        q: 'What mass of ethanol can be made by fermenting 90 g of glucose? (C₆H₁₂O₆ = 180, C₂H₅OH = 46)',
        steps: ['Moles of glucose = 90 ÷ 180 = 0.50 mol.', 'From the equation, 1 mol glucose gives 2 mol ethanol, so 1.0 mol ethanol.', 'Mass of ethanol = 1.0 × 46 = 46 g.'],
      },
    ]
  ),
  L(
    'ch-soaps-f5',
    'ch-f5-organic',
    '6.3',
    'Soaps, detergents and polymers',
    14,
    ['Organic', 'Practical'],
    [
      '**Soap** is made by boiling a fat or oil with a strong alkali, such as sodium hydroxide. This is **saponification**:\n- fat or oil + sodium hydroxide → soap + glycerol\n- the soap is the sodium salt of a long-chain carboxylic (fatty) acid\nIn Cameroon, soap is made from **palm oil**, palm kernel oil and other vegetable oils.',
      '**Practical: making soap.** Heat a little palm oil with concentrated sodium hydroxide solution, stirring, for about 10 minutes. Add a spoonful of salt and stir: the soap separates and floats to the top (**salting out**). Rinse it with a little cold water. Wear goggles and gloves: concentrated alkali burns skin and eyes.',
      'How soap cleans: a soap particle has two ends:\n- a long **hydrocarbon tail** that dissolves in grease and oil\n- an ionic **head** (–COO⁻ Na⁺) that dissolves in water\nThe tails push into a drop of grease and the heads stay in the water. The grease is lifted off the cloth and broken into tiny droplets that are rinsed away.',
      'In **hard water**, which contains calcium and magnesium ions, soap forms an insoluble grey **scum** and lathers poorly, so soap is wasted. **Soapless detergents** are made from crude oil and do not form scum, so they work well in hard water. However, some detergents are not **biodegradable**, so they cause foam on rivers, and the **phosphates** added to some detergents cause eutrophication.',
      '**Polymers** are very long molecules made by joining many small molecules called **monomers**:\n- **Addition polymerisation**: monomers with a C=C double bond simply add on to each other, and nothing else is formed. Examples: poly(ethene) for bags and bottles, PVC for pipes and insulation.\n- **Condensation polymerisation**: two different monomers join and a small molecule, usually **water**, is given off at each link. Examples: **nylon**, used for ropes, clothes and fishing nets, and **polyester** (Terylene), used for clothes.',
      'Most plastics are **not biodegradable**: they stay in the environment for hundreds of years, block gutters, cause floods and harm animals that eat them. Burning them releases poisonous gases. The answer is to **reduce** the use of plastics, **reuse** them and **recycle** them.',
    ],
    ['soap-action', 'polymer-types'],
    'For condensation polymerisation always say what small molecule is lost (water), and give a named example (nylon or polyester).',
    ['Soap forms a scum in hard water because it reacts with:', ['Calcium and magnesium ions', 'Sodium ions', 'Chloride ions', 'Oxygen'], 'The calcium and magnesium salts of the fatty acids are insoluble.'],
    [
      ['Saponification', 'Making soap by boiling a fat or oil with an alkali.'],
      ['Hard water', 'Water containing dissolved calcium and magnesium ions, which forms scum with soap.'],
      ['Soapless detergent', 'A cleaning agent made from crude oil that does not form scum in hard water.'],
      ['Condensation polymer', 'A polymer formed when monomers join and give off a small molecule such as water.'],
      ['Biodegradable', 'Able to be broken down by micro-organisms.'],
    ]
  ),
  L(
    'ch-pollution-f5',
    'ch-nonmetals',
    '5.3',
    'Chemicals and the environment: air and water pollution and waste',
    14,
    ['Environment', 'Practical'],
    [
      'Industry, transport and farming give us useful products, but their wastes can pollute the air, water and soil. Chemists help find cleaner ways of working.',
      'The **greenhouse effect**: gases such as **carbon dioxide** (from burning wood, charcoal, petrol and diesel) and **methane** (from cattle, rice fields and rotting refuse) trap heat radiated from the Earth. More of these gases cause **global warming**, with irregular rains, droughts in the north of Cameroon, floods in towns and the shrinking of Lake Chad.',
      'The **ozone layer** high in the atmosphere absorbs harmful **ultraviolet** light from the Sun. **CFCs** (chlorofluorocarbons) from old refrigerators, air conditioners and aerosol sprays break down ozone, so more ultraviolet reaches the ground, causing skin cancer and eye damage. The Montreal Protocol (1987) banned CFCs, and the ozone layer is slowly recovering.',
      '**Acid rain** forms when **sulphur dioxide** (from burning fuels containing sulphur) and **nitrogen oxides** (from car engines) dissolve in rain to form acids. It damages buildings made of limestone and marble, corrodes metals, kills trees and fish, and makes soils acidic.',
      '**Eutrophication**: fertilisers and sewage washed into rivers and lakes add nitrates and phosphates. Algae grow fast and cover the water. When they die, bacteria decaying them use up the dissolved oxygen, so fish and other animals die.',
      'Managing waste:\n- **reduce** what we use, **reuse** containers and **recycle** metals, glass, paper and plastics\n- treat factory waste water and sewage before release\n- fit filters (scrubbers) to factory chimneys and catalytic converters to cars\n- compost organic waste instead of burning it\n- use clean energy such as solar and hydroelectric power',
      '**Practical: acid rain and limestone.** Put a few marble chips (calcium carbonate) into dilute acid. They fizz and slowly dissolve: CaCO₃ + 2HCl → CaCl₂ + H₂O + CO₂. The gas turns limewater milky. This is what acid rain does, more slowly, to statues and limestone buildings.',
    ],
    'pollution-effects',
    'For each pollutant, give its source, its effect and one way to reduce it. For example: sulphur dioxide, from burning fuels, causes acid rain; remove it with scrubbers on chimneys.',
    ['The ozone layer is damaged mainly by:', ['CFCs from old fridges and aerosol sprays', 'Carbon dioxide', 'Nitrogen', 'Water vapour'], 'CFCs release chlorine that breaks down ozone molecules.'],
    [
      ['Greenhouse gas', 'A gas, such as carbon dioxide or methane, that traps heat in the atmosphere.'],
      ['Ozone layer', 'A layer of ozone high in the atmosphere that absorbs ultraviolet light.'],
      ['Acid rain', 'Rain made acidic by dissolved sulphur dioxide and nitrogen oxides.'],
      ['Eutrophication', 'Overgrowth of algae in water rich in nutrients, leading to lack of oxygen and death of animals.'],
    ]
  ),
  L(
    'ch-practical-f5',
    'ch-f5-exam',
    '7.1',
    'Practical skills: titration and qualitative analysis',
    14,
    ['Practical skills'],
    [
      'The practical paper tests how carefully you work and record. Two kinds of exercise are common: a **titration** and a **qualitative analysis** (identifying ions).',
      'Titration technique:\n- rinse the **burette** with the solution it will hold, and the **pipette** with its solution, not with water\n- fill the burette, run a little out to remove air from the tip, and read it at eye level, at the **bottom of the meniscus**\n- add a few drops of indicator to the pipetted solution in a conical flask on a white tile\n- do a rough titration first, then accurate ones, adding drop by drop near the end point and swirling the flask\n- repeat until two titres agree within **0.10 cm³** (concordant titres)',
      'Recording a titration:\n- draw a table with rows for the final reading, the initial reading and the titre\n- record every burette reading to **two decimal places**, ending in 0 or 5 (for example 23.40 or 23.45 cm³)\n- give the average of the concordant titres only',
      'Qualitative analysis is recorded in three columns:\n- **Test**: what you did (add aqueous sodium hydroxide, a few drops, then in excess)\n- **Observation**: exactly what you saw (a white precipitate, soluble in excess)\n- **Inference**: what it shows (Zn²⁺ or Al³⁺ may be present)\nWrite what you **see**, not what you expect. "No change" is a valid observation.',
      'Safety in the laboratory: wear goggles, tie back long hair, never point a heating test tube at anyone, smell gases by wafting, use a fume cupboard for poisonous gases, and wipe up spills at once.',
    ],
    'titration-apparatus',
    'Burette readings are always to two decimal places. Writing 23.4 instead of 23.40 loses marks for accuracy.',
    ['Concordant titres are titres that agree within:', ['0.10 cm³', '1.0 cm³', '5 cm³', '0.5 cm³'], 'Only concordant titres are used for the average.'],
    [
      ['Titre', 'The volume of solution added from the burette to reach the end point.'],
      ['Concordant titres', 'Titres that agree within 0.10 cm³.'],
      ['Meniscus', 'The curved surface of a liquid in a tube; read at the bottom of it.'],
      ['Inference', 'A conclusion drawn from an observation.'],
    ],
    [
      {
        q: 'Titres of 24.60 (rough), 24.15, 24.35 and 24.20 cm³ were obtained. Find the average titre.',
        steps: ['Ignore the rough titre.', 'Concordant titres (within 0.10 cm³): 24.15 and 24.20.', 'Average = (24.15 + 24.20) ÷ 2 = 24.18 cm³ (to 2 decimal places).'],
      },
    ]
  ),
  L(
    'ch-gceprep-f5',
    'ch-f5-exam',
    '7.2',
    'Answering the GCE Ordinary Level Chemistry papers',
    12,
    ['Examination'],
    [
      'The GCE Ordinary Level Chemistry examination has:\n- **Paper 1**: 50 multiple-choice questions in 1 hour 30 minutes\n- **Paper 2**: 2 hours 30 minutes of structured and longer questions. Section A has three compulsory structured questions and Section B two longer questions.\n- **Paper 3**: the practical paper, with exercises such as a titration and the identification of ions',
      'Calculations, in clear steps:\n- write the balanced equation\n- convert what you are given into **moles** (mass ÷ molar mass, concentration × volume in dm³, gas volume ÷ 24 dm³)\n- use the **mole ratio** from the equation\n- convert back to what is asked, with **units** and sensible significant figures',
      'Equations: always balance them and add **state symbols** when asked: (s), (l), (g), (aq). For ionic equations, leave out the spectator ions.',
      'Industrial processes are a favourite question. For the Haber, Contact and Ostwald processes and the blast furnace, learn:\n- the raw materials\n- the equation\n- the conditions (temperature, pressure, catalyst)\n- the uses of the product\nFor organic chemistry, learn how each family turns into the next: alkane, alkene, alcohol, carboxylic acid, ester.',
      'Command words: **state** (short answer), **describe** (what happens or is seen), **explain** (why, with chemistry), **suggest** (apply to a new situation), **calculate** (show working).',
      'Common mistakes to avoid:\n- unbalanced equations\n- forgetting units\n- confusing **atoms**, **ions** and **molecules**\n- writing "chlorine" for chloride ions\n- not giving the colour change for a test (say "from orange to green", not just "green")',
    ],
    null,
    'Practise past papers under timed conditions, then check every calculation step by step against the marking guide.',
    ['In a mole calculation, the first thing to write is:', ['The balanced equation', 'The final answer', 'The units only', 'The state symbols only'], 'The equation gives the mole ratio you need.'],
    [
      ['Mole ratio', 'The ratio of moles of substances in a balanced equation, used in calculations.'],
      ['Spectator ion', 'An ion present in a reaction mixture that does not take part in the reaction.'],
    ]
  ),
];
