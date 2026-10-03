// Form 3 Chemistry lessons for the topics of the MINESEC Form 3 syllabus that the
// first lessons did not cover: the chemistry of the halogens, oxygen, sulphur,
// nitrogen, phosphorus, carbon and hydrogen. Original text written for this app.
// **double asterisks** mark key terms (rendered bold). `examples` are worked examples.

export const LESSONS_3 = [
  // ---------------- The halogens ----------------
  {
    id: 'ch-halogens-1',
    unit: 'ch-f3-halogens',
    n: '5.1',
    title: 'Chlorine: preparation, properties and uses',
    minutes: 9,
    paper: 'Paper 1 & 2',
    tags: ['Chlorine', 'Gas preparation'],
    body: [
      'The **halogens** are the elements of **Group VII**: fluorine, chlorine, bromine and iodine. Each atom has **seven outer electrons**, so it gains one electron to form a halide ion with a charge of −1 (Cl⁻, Br⁻, I⁻), or shares one electron in a covalent bond. They exist as **diatomic molecules**: F₂, Cl₂, Br₂ and I₂.',
      'In the laboratory, **chlorine** is made by warming concentrated hydrochloric acid with **manganese(IV) oxide**, which oxidises it: MnO₂ + 4HCl → MnCl₂ + Cl₂ + 2H₂O. The gas is passed through **water** to remove hydrogen chloride, then through **concentrated sulphuric acid** to dry it, and is collected by **downward delivery** because it is denser than air. It is poisonous, so it is prepared in a fume cupboard.',
      'Chlorine is a **greenish-yellow** gas with a choking smell. It **bleaches damp litmus paper**, turning blue litmus red and then white; this is the test for chlorine. It is a strong **oxidising agent**: it combines with hot iron to form iron(III) chloride, burns in hydrogen to form hydrogen chloride and oxidises iron(II) ions to iron(III) ions.',
      'Chlorine dissolves in water to form hydrochloric acid and **chloric(I) acid** (HOCl), which kills bacteria and bleaches. Chlorine is therefore used to **treat drinking water** and swimming pools, and to make bleach, disinfectants and PVC plastics.',
    ],
    figure: 'chlorine-preparation',
    tip: 'In the test for chlorine, say that **damp** litmus paper is **bleached**. Dry litmus paper is not affected, because the bleaching needs water.',
    check: {
      q: 'Why is chlorine collected by downward delivery?',
      a: ['It is denser than air', 'It is less dense than air', 'It is very soluble in water', 'It is colourless'],
      why: 'A gas denser than air sinks to the bottom of the jar and pushes the air out of the top.',
    },
    terms: [
      ['Halogen', 'An element of Group VII.'],
      ['Diatomic molecule', 'A molecule made of two atoms, such as Cl₂.'],
      ['Oxidising agent', 'A substance that oxidises another and is itself reduced.'],
    ],
  },
  {
    id: 'ch-halogens-2',
    unit: 'ch-f3-halogens',
    n: '5.2',
    title: 'The halogen family: trends, displacement and uses',
    minutes: 9,
    paper: 'Paper 1 & 2',
    tags: ['Group trends', 'Displacement'],
    body: [
      'Going **down Group VII** the halogens become **darker** and their melting and boiling points rise: fluorine is a pale yellow gas, chlorine a greenish-yellow gas, bromine a red-brown liquid, and iodine a grey-black solid that gives a purple vapour when warmed.',
      '**Reactivity decreases** down the group, because the atoms get larger and attract an extra electron less strongly. A more reactive halogen **displaces** a less reactive one from a solution of its salt: Cl₂ + 2KBr → 2KCl + Br₂ (the solution turns orange) and Cl₂ + 2KI → 2KCl + I₂ (it turns brown). Bromine displaces iodine, but iodine displaces neither.',
      'The halogens react with hydrogen to form **hydrogen halides**. Hydrogen chloride, HCl, is a colourless gas that fumes in moist air, dissolves in water to give hydrochloric acid and forms dense white fumes of ammonium chloride with ammonia.',
      'Halide ions are identified with **silver nitrate** solution in dilute nitric acid: chloride gives a **white** precipitate (AgCl), bromide a **cream** one (AgBr) and iodide a **yellow** one (AgI). Iodine solution is used as an antiseptic and to test for starch, iodised salt prevents goitre, fluoride is added to toothpaste and silver bromide is used in photography.',
    ],
    figure: 'periodic-table',
    tip: 'In a displacement question, compare positions in the group: a halogen **higher up** displaces one **below** it, never the other way round.',
    check: {
      q: 'Chlorine water is added to potassium iodide solution. What is seen?',
      a: ['The solution turns brown as iodine forms', 'There is no change', 'A white precipitate forms', 'The solution turns green'],
      why: 'Chlorine is more reactive than iodine, so it displaces iodine from the iodide: Cl₂ + 2KI → 2KCl + I₂.',
    },
    terms: [
      ['Displacement reaction', 'A more reactive element takes the place of a less reactive one in a compound.'],
      ['Hydrogen halide', 'A compound of hydrogen and a halogen, such as HCl.'],
      ['Halide ion', 'A halogen atom that has gained one electron, such as Cl⁻.'],
    ],
  },

  // ---------------- Oxygen ----------------
  {
    id: 'ch-oxygen-1',
    unit: 'ch-f3-oxygen',
    n: '6.1',
    title: 'Oxygen: preparation, properties and oxides',
    minutes: 9,
    paper: 'Paper 1 & 2',
    tags: ['Oxygen', 'Types of oxide'],
    body: [
      'Oxygen makes up about **21%** of dry air. In the laboratory it is made by decomposing **hydrogen peroxide** solution with **manganese(IV) oxide** as a catalyst: 2H₂O₂ → 2H₂O + O₂. It is collected **over water**, because it is only slightly soluble. Industrially it is obtained by the fractional distillation of liquid air.',
      'Oxygen is a colourless, odourless gas, slightly denser than air. It **relights a glowing splint**, which is the test for oxygen. It supports burning and is needed for respiration.',
      'Many elements burn in oxygen to form **oxides**. Metals form **basic oxides**: magnesium burns with a dazzling white flame to give magnesium oxide, which reacts with acids. Non-metals form **acidic oxides**, such as carbon dioxide and sulphur dioxide, which dissolve in water to give acids. **Amphoteric** oxides, such as aluminium oxide and zinc oxide, react with both acids and alkalis; **neutral** oxides, such as carbon monoxide and water, react with neither.',
      '**Combustion** is burning in oxygen, giving out heat and light. Oxygen is used in hospitals for patients who have difficulty breathing, by divers and climbers, in oxy-acetylene welding and cutting, and in steel making to burn off impurities.',
    ],
    figure: 'oxygen-preparation',
    tip: 'Learn the four types of oxide with one example each: **basic** (MgO), **acidic** (SO₂), **amphoteric** (Al₂O₃) and **neutral** (CO).',
    check: {
      q: 'Which oxide dissolves in water to give an acidic solution?',
      a: ['Sulphur dioxide', 'Magnesium oxide', 'Sodium oxide', 'Carbon monoxide'],
      why: 'Non-metal oxides such as sulphur dioxide are acidic; metal oxides are basic, and carbon monoxide is neutral.',
    },
    terms: [
      ['Catalyst', 'A substance that speeds up a reaction without being used up.'],
      ['Acidic oxide', 'An oxide of a non-metal that reacts with alkalis.'],
      ['Amphoteric oxide', 'An oxide that reacts with both acids and alkalis.'],
    ],
  },

  // ---------------- Sulphur ----------------
  {
    id: 'ch-sulphur-1',
    unit: 'ch-f3-sulphur',
    n: '7.1',
    title: 'Sulphur and sulphur dioxide',
    minutes: 9,
    paper: 'Paper 1 & 2',
    tags: ['Allotropes', 'Sulphur dioxide'],
    body: [
      'Sulphur is a yellow non-metal. It is found as the element near volcanoes and in underground deposits, and combined in metal sulphide ores, crude oil and natural gas. It does not dissolve in water and burns with a **blue flame**.',
      'Sulphur has **allotropes**, different forms of the same element: **rhombic** sulphur is stable below 96 °C and **monoclinic** sulphur above it. Both are made of S₈ molecules packed differently. When sulphur is heated it melts to an amber liquid that turns dark and thick; poured into cold water it forms rubbery **plastic sulphur**.',
      'Sulphur burns in oxygen to form **sulphur dioxide**: S + O₂ → SO₂. Sulphur dioxide is a colourless, poisonous gas with a choking smell. It is an **acidic oxide** that dissolves in water to form sulphurous acid. It turns acidified **potassium dichromate(VI)** from **orange to green**, which is the test for it, and it acts as a bleach and a reducing agent.',
      'Sulphur is used to make sulphuric acid, to vulcanise (harden) rubber and in fungicides. Sulphur dioxide is used to bleach paper and wool and to preserve foods and fruit juices. When fossil fuels containing sulphur are burned, the sulphur dioxide released forms **acid rain**, which damages buildings, plants and lakes.',
    ],
    figure: null,
    tip: 'The test for sulphur dioxide: acidified **potassium dichromate(VI)** changes from **orange to green**.',
    check: {
      q: 'Rhombic sulphur and monoclinic sulphur are:',
      a: ['Allotropes', 'Isotopes', 'Isomers', 'Compounds'],
      why: 'They are two forms of the same element, sulphur, with the S₈ molecules arranged differently.',
    },
    terms: [
      ['Allotropes', 'Different forms of the same element in the same state.'],
      ['Plastic sulphur', 'A rubbery form made by pouring hot liquid sulphur into cold water.'],
      ['Acid rain', 'Rain made acidic by sulphur dioxide and nitrogen oxides.'],
    ],
  },
  {
    id: 'ch-sulphur-2',
    unit: 'ch-f3-sulphur',
    n: '7.2',
    title: 'Sulphuric acid: the Contact process and its properties',
    minutes: 10,
    paper: 'Paper 1 & 2',
    tags: ['Contact process', 'Dehydration'],
    body: [
      'Sulphuric acid is made by the **Contact process**. Sulphur is burned in air to form sulphur dioxide. The sulphur dioxide is purified, dried, mixed with air and passed over a **vanadium(V) oxide** catalyst at about **450 °C** and 1 to 2 atmospheres, where it is oxidised to sulphur trioxide: 2SO₂ + O₂ ⇌ 2SO₃.',
      'Sulphur trioxide is not dissolved directly in water, because the reaction gives out so much heat that a dangerous mist of acid forms. Instead it is absorbed in concentrated sulphuric acid to form **oleum**: SO₃ + H₂SO₄ → H₂S₂O₇, which is then diluted with the correct amount of water: H₂S₂O₇ + H₂O → 2H₂SO₄.',
      '**Dilute** sulphuric acid has the usual acid properties: it gives hydrogen with zinc, sulphates with bases and carbon dioxide with carbonates. **Concentrated** sulphuric acid is a **dehydrating agent**: it turns sugar into black carbon and blue copper(II) sulphate crystals white, and is used to dry gases. Always add concentrated acid slowly to water, never water to the acid.',
      'Sulphuric acid is one of the most important industrial chemicals. It is used to make fertilisers such as ammonium sulphate, detergents, paints, dyes and plastics, and it is the electrolyte in car batteries.',
    ],
    figure: 'contact-process',
    tip: 'Give the **conditions** of the Contact process (vanadium(V) oxide catalyst, about 450 °C) and explain why sulphur trioxide is absorbed in concentrated acid rather than water.',
    check: {
      q: 'In the Contact process, sulphur trioxide is absorbed in:',
      a: ['Concentrated sulphuric acid', 'Water', 'Sodium hydroxide solution', 'Dilute hydrochloric acid'],
      why: 'Absorbing it in water would give out so much heat that a mist of acid forms; concentrated acid takes it up safely as oleum.',
    },
    terms: [
      ['Contact process', 'The industrial manufacture of sulphuric acid.'],
      ['Oleum', 'H₂S₂O₇, formed when sulphur trioxide dissolves in concentrated sulphuric acid.'],
      ['Dehydrating agent', 'A substance that removes water, or the elements of water, from another.'],
    ],
  },

  // ---------------- Nitrogen ----------------
  {
    id: 'ch-nitrogen-1',
    unit: 'ch-f3-nitrogen',
    n: '8.1',
    title: 'Nitrogen and ammonia',
    minutes: 10,
    paper: 'Paper 1 & 2',
    tags: ['Ammonia', 'Haber process'],
    body: [
      '**Nitrogen** makes up about **78%** of the air. It is a colourless, odourless and very **unreactive** gas, because the two atoms in an N₂ molecule are held by a strong **triple bond**. Because it is unreactive, nitrogen is used to fill food packets and to store grain, keeping oxygen out.',
      '**Ammonia**, NH₃, is made in the laboratory by warming an ammonium salt with an alkali: 2NH₄Cl + Ca(OH)₂ → CaCl₂ + 2H₂O + 2NH₃. It is dried with **calcium oxide** and collected by **upward delivery**, because it is less dense than air.',
      'Ammonia is a colourless gas with a sharp smell and is **very soluble** in water, giving an alkaline solution. It turns **damp red litmus paper blue**, which is the test for it, and it forms dense white fumes of ammonium chloride with hydrogen chloride.',
      'Industrially, ammonia is made by the **Haber process**. Nitrogen from the air and hydrogen from natural gas are mixed in the ratio 1 : 3 and passed over an **iron catalyst** at about **450 °C** and **200 atmospheres**: N₂ + 3H₂ ⇌ 2NH₃. The ammonia is cooled and liquefied, and the unreacted gases are recycled. Most ammonia is used to make fertilisers and nitric acid.',
    ],
    figure: 'haber-process',
    tip: 'Ammonia is dried with **calcium oxide**, not concentrated sulphuric acid: ammonia is alkaline and would react with the acid.',
    check: {
      q: 'Ammonia is collected by upward delivery because it is:',
      a: ['Less dense than air', 'Denser than air', 'Insoluble in water', 'Coloured'],
      why: 'A gas lighter than air rises into an upside-down jar and pushes the air out of the bottom. Ammonia is too soluble to collect over water.',
    },
    terms: [
      ['Haber process', 'The industrial manufacture of ammonia from nitrogen and hydrogen.'],
      ['Upward delivery', 'Collecting a gas lighter than air in an upside-down jar.'],
      ['Triple bond', 'Three shared pairs of electrons between two atoms.'],
    ],
  },
  {
    id: 'ch-nitrogen-2',
    unit: 'ch-f3-nitrogen',
    n: '8.2',
    title: 'Nitric acid, nitrates and fertilisers',
    minutes: 9,
    paper: 'Paper 1 & 2',
    tags: ['Nitrates', 'Fertilisers'],
    body: [
      '**Nitric acid** is made from ammonia by the **Ostwald process**: ammonia is oxidised by air over a hot platinum catalyst to nitrogen monoxide, which reacts with more oxygen to form nitrogen dioxide; this is dissolved in water with air to give nitric acid.',
      'Dilute nitric acid is a strong acid that forms salts called **nitrates** with bases and carbonates. Concentrated nitric acid is also a strong **oxidising agent**: it reacts with copper, giving off brown nitrogen dioxide gas.',
      'All nitrates are soluble in water, and nearly all **decompose when heated**. Sodium and potassium nitrates give the nitrite and oxygen. Most other metal nitrates, such as copper(II) nitrate, give the metal oxide, brown **nitrogen dioxide** and oxygen.',
      'Plants need nitrogen to make proteins. **Nitrogenous fertilisers**, such as ammonium nitrate, ammonium sulphate and urea, supply it. When too much fertiliser is washed into rivers and lakes, algae grow rapidly; when they die, bacteria that decay them use up the oxygen in the water and fish die. This is **eutrophication**.',
    ],
    figure: null,
    tip: 'To compare fertilisers, work out the **percentage of nitrogen** by mass: mass of nitrogen in the formula ÷ Mr × 100.',
    examples: [
      {
        q: 'Calculate the percentage of nitrogen in ammonium nitrate, NH₄NO₃. (N = 14, H = 1, O = 16)',
        steps: ['Mr = 14 + (4 × 1) + 14 + (3 × 16) = 80', 'Mass of nitrogen in one formula = 2 × 14 = 28', 'Percentage of nitrogen = 28 ÷ 80 × 100 = 35%'],
      },
    ],
    check: {
      q: 'What is formed when copper(II) nitrate is heated strongly?',
      a: ['Copper(II) oxide, nitrogen dioxide and oxygen', 'Copper, nitrogen and water', 'Copper(II) nitrite and oxygen', 'Copper(II) oxide and ammonia'],
      why: 'Nitrates of metals other than sodium and potassium decompose to the oxide, brown nitrogen dioxide and oxygen.',
    },
    terms: [
      ['Ostwald process', 'The manufacture of nitric acid from ammonia.'],
      ['Nitrogenous fertiliser', 'A fertiliser that supplies nitrogen to plants.'],
      ['Eutrophication', 'Overgrowth of algae in water rich in nutrients, leading to loss of oxygen.'],
    ],
  },

  // ---------------- Phosphorus ----------------
  {
    id: 'ch-phosphorus-1',
    unit: 'ch-f3-phosphorus',
    n: '9.1',
    title: 'Phosphorus and phosphate fertilisers',
    minutes: 7,
    paper: 'Paper 1',
    tags: ['Allotropes', 'NPK'],
    body: [
      'Phosphorus is a non-metal in **Group V**, below nitrogen. It is too reactive to be found as the free element; it occurs in **phosphate rocks**, which are mined, and as calcium phosphate in bones and teeth.',
      'Phosphorus has allotropes. **White phosphorus** is a waxy, very poisonous solid that catches fire in air by itself, so it is stored **under water**. **Red phosphorus** is more stable, does not catch fire on its own and is not poisonous; it is used on the striking side of match boxes.',
      'Phosphorus burns in plenty of air with a bright flame to form phosphorus(V) oxide, an **acidic oxide** that dissolves in water to give phosphoric acid.',
      'Plants need phosphorus for healthy roots and for energy transfer in their cells. Phosphate rock is insoluble, so it is treated with acid to make soluble **superphosphate** fertiliser. **NPK** fertilisers supply nitrogen, phosphorus and potassium, the three main plant nutrients, together.',
    ],
    figure: null,
    tip: 'The letters **N, P, K** on a fertiliser bag stand for nitrogen, phosphorus and potassium.',
    check: {
      q: 'White phosphorus is stored under water because it:',
      a: ['Catches fire in air by itself', 'Dissolves in oil', 'Reacts with water', 'Is a liquid at room temperature'],
      why: 'Water keeps air away from the phosphorus, and phosphorus does not react with water.',
    },
    terms: [
      ['Allotrope', 'One of the different forms of the same element.'],
      ['Superphosphate', 'A soluble phosphate fertiliser made from phosphate rock and acid.'],
      ['NPK fertiliser', 'A fertiliser supplying nitrogen, phosphorus and potassium.'],
    ],
  },

  // ---------------- Carbon ----------------
  {
    id: 'ch-carbon-1',
    unit: 'ch-f3-carbon',
    n: '10.1',
    title: 'Carbon and its oxides',
    minutes: 9,
    paper: 'Paper 1 & 2',
    tags: ['Allotropes of carbon', 'Oxides of carbon'],
    body: [
      'Carbon occurs as **diamond** and **graphite**, two **allotropes** with different structures. In diamond each atom is joined to four others in a rigid giant structure, so it is extremely hard and used in cutting tools and drills. In graphite the atoms form flat layers that slide over each other, with free electrons between them, so graphite is soft and slippery and conducts electricity; it is used in pencils, lubricants and electrodes. Charcoal and soot are impure forms of carbon.',
      'Carbon burns in plenty of oxygen to form **carbon dioxide**, and in a limited supply to form **carbon monoxide**. Carbon monoxide is colourless, has no smell and is very poisonous: it combines with haemoglobin and stops the blood carrying oxygen. Charcoal stoves and generators must never be used in closed rooms.',
      '**Carbon dioxide** is prepared by adding dilute hydrochloric acid to marble chips (calcium carbonate): CaCO₃ + 2HCl → CaCl₂ + H₂O + CO₂. It is denser than air, does not burn or support burning, and turns **limewater milky**, which is the test for it.',
      'Carbon dioxide is used in fire extinguishers, in fizzy drinks and, as solid "dry ice", to keep foods cold; plants use it for photosynthesis. Carbon monoxide is a **reducing agent** and is used in the blast furnace to remove oxygen from iron ore.',
    ],
    figure: ['giant-structures', 'gas-preparation'],
    tip: 'The test for carbon dioxide is **limewater turning milky**. Do not confuse it with the glowing splint test for oxygen.',
    check: {
      q: 'Why is carbon monoxide dangerous?',
      a: ['It combines with haemoglobin, so the blood carries less oxygen', 'It is a strong acid', 'It is very dense', 'It causes acid rain'],
      why: 'Carbon monoxide binds to haemoglobin more strongly than oxygen does, so the body is starved of oxygen.',
    },
    terms: [
      ['Allotropes of carbon', 'Diamond and graphite: forms of carbon with different structures.'],
      ['Reducing agent', 'A substance that removes oxygen from another.'],
      ['Limewater test', 'Carbon dioxide turns limewater milky.'],
    ],
  },
  {
    id: 'ch-carbon-2',
    unit: 'ch-f3-carbon',
    n: '10.2',
    title: 'Carbonates, hydrogencarbonates and the carbon cycle',
    minutes: 9,
    paper: 'Paper 1 & 2',
    tags: ['Carbonates', 'Carbon cycle'],
    body: [
      '**Carbonates** contain the CO₃²⁻ ion. All carbonates react with dilute acids to give a salt, water and carbon dioxide. Except for those of sodium and potassium, carbonates **decompose when heated** to the metal oxide and carbon dioxide: CaCO₃ → CaO + CO₂. Green copper(II) carbonate turns black as copper(II) oxide forms.',
      '**Limestone** (calcium carbonate) is heated in lime kilns to make **quicklime**, calcium oxide. Adding water to quicklime gives **slaked lime**, calcium hydroxide, which is used to neutralise acid soils and to make mortar. Limestone is also used to make cement and in the blast furnace.',
      '**Hydrogencarbonates** contain the HCO₃⁻ ion. Sodium hydrogencarbonate (baking soda) gives off carbon dioxide when heated, which makes bread and cakes rise, and it is used in antacids to neutralise excess stomach acid.',
      'The **carbon cycle** keeps the amount of carbon dioxide in the air roughly balanced: photosynthesis removes it, while respiration, decay and burning return it. Burning large amounts of fossil fuels and cutting down forests increase the carbon dioxide in the air, which adds to the **greenhouse effect** and global warming.',
    ],
    figure: null,
    tip: 'When asked about heating a carbonate, give the **products** and any **colour change**, such as green copper(II) carbonate turning black.',
    check: {
      q: 'Calcium carbonate is heated strongly. The products are:',
      a: ['Calcium oxide and carbon dioxide', 'Calcium and carbon dioxide', 'Calcium hydroxide and water', 'Calcium oxide and oxygen'],
      why: 'Thermal decomposition: CaCO₃ → CaO + CO₂.',
    },
    terms: [
      ['Quicklime', 'Calcium oxide, made by heating limestone.'],
      ['Slaked lime', 'Calcium hydroxide, made by adding water to quicklime.'],
      ['Greenhouse effect', 'Warming of the Earth by gases such as carbon dioxide trapping heat.'],
    ],
  },

  // ---------------- Hydrogen ----------------
  {
    id: 'ch-hydrogen-1',
    unit: 'ch-f3-hydrogen',
    n: '11.1',
    title: 'Hydrogen: preparation, properties and uses',
    minutes: 8,
    paper: 'Paper 1 & 2',
    tags: ['Hydrogen', 'Reduction'],
    body: [
      'Hydrogen is the lightest element. In the laboratory it is made by reacting **zinc** with **dilute hydrochloric or sulphuric acid**: Zn + 2HCl → ZnCl₂ + H₂. It is collected over water, or by **upward delivery** because it is much less dense than air.',
      'Hydrogen is a colourless, odourless gas that hardly dissolves in water. A lighted splint held at the mouth of a tube of hydrogen gives a **squeaky pop**, which is the test for it. It burns in air to form water: 2H₂ + O₂ → 2H₂O.',
      'Hydrogen is a **reducing agent**: passed over heated black copper(II) oxide, it removes the oxygen and leaves pink copper: CuO + H₂ → Cu + H₂O. Mixtures of hydrogen and air explode when lit, so the air is driven out of the apparatus before the hydrogen is lit or heated.',
      'Hydrogen is used to make ammonia in the Haber process, to harden vegetable oils into margarine, as a rocket fuel and in fuel cells. When it burns it forms only water, so it does not pollute the air.',
    ],
    figure: 'hydrogen-preparation',
    tip: 'Do not mix up the gas tests: hydrogen gives a **squeaky pop** with a **lighted** splint; oxygen **relights** a **glowing** splint.',
    check: {
      q: 'What is seen when hydrogen is passed over heated copper(II) oxide?',
      a: ['The black solid turns pink', 'The black solid turns white', 'A yellow flame appears', 'Nothing happens'],
      why: 'Hydrogen reduces copper(II) oxide to pink copper metal, and water forms.',
    },
    terms: [
      ['Reducing agent', 'A substance that removes oxygen from, or adds electrons to, another.'],
      ['Squeaky pop test', 'The test for hydrogen with a lighted splint.'],
      ['Fuel cell', 'A device that makes electricity from hydrogen and oxygen.'],
    ],
  },
];
