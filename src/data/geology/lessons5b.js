// Geology lessons for Form 5, terms 2 and 3: the sedimentary basins and the
// Volcanic Line of Cameroon, its mineral and energy resources, and practice
// for GCE Papers 1 and 2 ending with the mock examination. Original text
// written for this app.

const L = (id, unit, n, title, minutes, tags, body, figure, tip, check, terms, examples) => ({
  id,
  unit,
  n,
  title,
  minutes,
  paper: 'Class work',
  tags,
  body,
  figure,
  ...(examples ? { examples } : {}),
  tip,
  check: { q: check[0], a: check[1], why: check[2] },
  terms,
});

export const LESSONS_5B = [
  // ---------- Basins and the Volcanic Line ----------
  L('gl-sedbasins-5', 'gl-f5-basins', '9.1', 'The sedimentary basins of Cameroon', 15, ['Geology of Cameroon'], [
    'Cameroon’s sedimentary basins formed mainly in the **Cretaceous**, when Africa and South America drifted apart and the South Atlantic opened. Stretching of the crust produced rifts and coastal basins that filled with sediment:\n- **Rio del Rey** basin: offshore in the far south-west, near Bakassi, the eastern edge of the Niger delta; Cameroon’s main **oil** province\n- **Douala** and **Kribi-Campo** basins: along the coast; Cretaceous to recent sandstones, shales and limestones; oil, **natural gas** (Logbaba, offshore Kribi), sand and clay.',
    'Inland basins:\n- the **Mamfe** basin (South-West): a Cretaceous rift linked to the Benue trough, with sandstones, shales and brine springs\n- the **Garoua** basin (North): part of the **Benue trough**, a long Cretaceous rift running from Nigeria into northern Cameroon, with sandstones and conglomerates\n- the **Lake Chad** basin (Far North): a wide, shallow basin filled with **Cenozoic** lake, river and wind-blown sediments.',
    'The basins lie **nonconformably** on the Precambrian basement. They are important for oil and gas, groundwater (thick sandy aquifers), clay for bricks and sand and gravel for construction.',
  ], 'geol-cameroon-map', 'Rio del Rey for oil; Douala-Kribi for oil and gas; Garoua in the Benue trough.',
  ['The Mamfe basin is linked to the:', ['Benue trough', 'Congo craton', 'Ntem complex', 'Lake Chad basin only'], 'A Cretaceous rift.'],
  [['Sedimentary basin', 'A low area of crust filled with thick sediments.'], ['Rift', 'A trough formed where the crust is pulled apart.'], ['Benue trough', 'A Cretaceous rift from Nigeria into northern Cameroon.']],
  [
    { q: 'Explain why most of Cameroon’s oil is found near the coast.', steps: ['**When the South Atlantic opened in the Cretaceous, thick marine sediments built up in coastal basins.**', '**Organic-rich shales became source rocks; sandstones became reservoirs, sealed by shales.**', '**The Rio del Rey and Douala-Kribi-Campo basins therefore contain the traps where oil collected.**'] },
  ]),

  L('gl-cvl-5', 'gl-f5-basins', '9.2', 'The Cameroon Volcanic Line', 15, ['Geology of Cameroon'], [
    'The **Cameroon Volcanic Line (CVL)** is a chain of volcanoes about **1,600 km** long running **south-west to north-east**. Its **oceanic** sector includes the islands of Annobón, São Tomé, Príncipe and **Bioko**; its **continental** sector includes **Mount Cameroon** (about 4,095 m, active), Mount **Manengouba**, the **Bamboutos** mountains, Mount **Oku**, and continues to the Adamawa and into Nigeria. It is unusual because it crosses from ocean to continent and is not at a plate boundary.',
    'Rocks and features: mainly **basalt** with trachyte and phonolite; volcanic cones, lava flows, plugs and crater lakes (**maars**) such as **Barombi Mbo**, **Nyos**, **Monoun** and Lake Oku. Weathered basalt and ash make deep, **fertile volcanic soils**: the coffee, tea, banana and food-crop farming of the Western Highlands and the plantations round Mount Cameroon depend on them.',
    'Resources and risks: basalt and **pozzolana** (volcanic ash used in cement) for construction, hot springs, fertile land and tourism; but also eruptions, earthquakes, gas outbursts and landslides on steep volcanic slopes. Monitoring of Mount Cameroon and degassing at Nyos and Monoun reduce the risks.',
  ], 'geol-cameroon-map', 'The CVL runs SW to NE from the islands to the Adamawa.',
  ['A crater lake formed by a volcanic explosion is a:', ['maar', 'graben', 'delta', 'lagoon'], 'Barombi Mbo, Nyos.'],
  [['Cameroon Volcanic Line', 'A chain of volcanoes from the Gulf of Guinea islands to the Adamawa.'], ['Maar', 'A broad, shallow crater formed by a volcanic explosion, often holding a lake.'], ['Pozzolana', 'Volcanic ash that sets like cement with lime.']],
  [
    { q: 'Give two benefits and two dangers of living on the Cameroon Volcanic Line.', steps: ['**Benefits: fertile volcanic soils for farming; building materials (basalt, pozzolana); tourism.**', '**Dangers: lava flows and earthquakes (Mount Cameroon); toxic gas outbursts (Nyos, Monoun); landslides on steep slopes.**'] },
  ]),

  // ---------- Resources ----------
  L('gl-hydrocarbons-5', 'gl-f5-resources', '10.1', 'Oil and gas in Cameroon', 14, ['Geology of Cameroon'], [
    'Commercial **oil** production in Cameroon began in the late **1970s**, mainly from offshore fields of the **Rio del Rey** basin, with smaller fields in the Douala-Kribi-Campo basin. Crude oil is refined at the **SONARA** refinery at **Limbe** (Cape Limboh) and exported.',
    '**Natural gas** comes from the Logbaba field near Douala and from offshore fields near **Kribi**, which feed the **Kribi gas power plant** and a floating plant that liquefies gas for export. The **Chad-Cameroon pipeline**, about 1,070 km long, carries crude oil from the Doba fields in Chad to a terminal offshore Kribi.',
    'Environmental issues: oil spills in mangroves and fishing grounds, gas flaring, and the need to restore land and protect water. Oil and gas are non-renewable; their revenue should build lasting assets such as schools, roads and power.',
  ], 'geol-cameroon-resources', 'Rio del Rey oil; Kribi gas; Limbe refinery.',
  ['Cameroon’s oil refinery is at:', ['Limbe', 'Garoua', 'Bertoua', 'Maroua'], 'SONARA.'],
  [['Crude oil', 'Unrefined petroleum.'], ['Refinery', 'A plant that separates crude oil into useful products.'], ['Gas flaring', 'Burning off unwanted gas at an oil field.']],
  [
    { q: 'Explain why the Chad-Cameroon pipeline ends at Kribi.', steps: ['**Chad is landlocked, so its oil must cross another country to reach the sea.**', '**Kribi is on Cameroon’s Atlantic coast, where tankers can load the oil offshore for export.**'] },
  ]),

  L('gl-minerals-cmr-5', 'gl-f5-resources', '10.2', 'Mineral resources of Cameroon', 15, ['Geology of Cameroon'], [
    'Main mineral resources and their geology:\n- **bauxite** (aluminium ore): residual laterites on the Adamawa plateau at **Minim-Martap** and **Ngaoundal**, and at Fongo-Tongo in the West\n- **iron ore**: banded iron formations of the Precambrian at **Mbalam** (East) and in the south near Kribi\n- **gold**: veins and placers in the East at **Bétaré-Oya** and **Batouri**, much of it worked by small-scale miners\n- **diamond**: at **Mobilong** in the East\n- **cobalt, nickel and manganese**: laterites at **Nkamouna** near Lomié\n- **rutile** (titanium ore): near **Akonolinga**; Cameroon was once a leading world producer\n- **limestone** at **Figuil** (and marble nearby at Bidzar) for cement and lime.',
    'Building materials are the most widely used: granite and basalt for crushed stone, sand and gravel from rivers, clay for bricks and tiles, and pozzolana for cement.',
    'Mining and the environment: artisanal gold mining leaves open pits that fill with water, destroys farmland and forest, and pollutes rivers with mud and **mercury**. Responsible mining requires permits, environmental impact assessments, safe handling of chemicals, and the **rehabilitation** of mined land, under the Mining Code.',
  ], 'geol-cameroon-resources', 'Bauxite Adamawa; iron Mbalam; gold Bétaré-Oya; diamond Mobilong.',
  ['Bauxite at Minim-Martap formed by:', ['intense tropical weathering (residual deposit)', 'evaporation', 'hydrothermal veins', 'placer concentration'], 'Laterite.'],
  [['Laterite', 'A red, iron- and aluminium-rich weathering crust.'], ['Artisanal mining', 'Small-scale mining with simple tools.'], ['Rehabilitation', 'Restoring mined land to a useful state.']],
  [
    { q: 'Match each resource to its location: rutile, cobalt, diamond, limestone.', steps: ['**Rutile: Akonolinga.**', '**Cobalt: Nkamouna, near Lomié.**', '**Diamond: Mobilong.**', '**Limestone: Figuil.**'] },
  ]),

  // ---------- Paper 1 ----------
  L('gl-mcq-5', 'gl-f5-paper1', '11.1', 'Multiple-choice technique', 12, ['Examination'], [
    'Paper 1 has **50 items in 1½ hours**: about **1¾ minutes** per item. Work steadily:\n- read the **stem** fully; watch for **NOT**, **EXCEPT**, **LEAST** and **MOST**\n- think of the answer **before** looking at the options\n- **eliminate** options you know are wrong, then choose among the rest\n- do not spend more than about 3 minutes on one item; mark it and come back\n- answer **every** item: there is no penalty for a wrong answer.',
    'Shade the answer sheet carefully with a soft pencil, one answer per item, and erase changes completely. Check that the item number on the sheet matches the question.',
    'Common traps: options that are true statements but do not answer the question; two options that mean the same thing (both are probably wrong); and units or ages that are close but wrong (66 Ma versus 252 Ma).',
  ], 'geol-paper1-plan', 'About 1¾ minutes per item; answer every one.',
  ['An item asks which rock is NOT metamorphic. You should:', ['look for the one igneous or sedimentary rock', 'choose the first metamorphic rock', 'leave it blank', 'pick two answers'], 'Read the negative.'],
  [['Stem', 'The question part of a multiple-choice item.'], ['Distractor', 'A wrong option designed to attract careless answers.'], ['Elimination', 'Removing options known to be wrong.']],
  [
    { q: 'You reach item 30 after 60 minutes. Are you on time?', steps: ['Target: 50 items in 90 minutes, so 30 items should take about 30 × 1.8 = **54 minutes.**', '**You are about 6 minutes behind; speed up on easier items and leave hard ones to revisit.**'] },
  ]),

  L('gl-quickfacts-5', 'gl-f5-paper1', '11.2', 'Quick facts for Paper 1', 14, ['Examination'], [
    'The Earth:\n- crust 5 to 70 km; Moho; mantle to 2,900 km; Gutenberg discontinuity; liquid outer core; solid inner core from about 5,150 km\n- P waves pass through solids and liquids; S waves through solids only\n- Mohs scale: talc, gypsum, calcite, fluorite, apatite, orthoclase, quartz, topaz, corundum, diamond.',
    'Rocks:\n- acid granite and rhyolite; basic gabbro and basalt\n- clastic conglomerate, sandstone, shale; evaporites; limestone, chalk, coal\n- shale to slate to schist to gneiss; limestone to marble; sandstone to quartzite\n- structures: anticline (oldest in core), syncline (youngest in core); normal fault (tension), reverse fault (compression); horst, graben.',
    'Time and Cameroon:\n- Precambrian to 541 Ma; Palaeozoic 541 to 252; Mesozoic 252 to 66; Cenozoic 66 to now\n- index fossils: trilobites and graptolites (Palaeozoic), ammonites (Mesozoic)\n- Ntem (Archaean, Congo craton); Pan-African belt (about 600 Ma); Rio del Rey oil; Mount Cameroon about 4,095 m; Nyos 1986, CO₂; bauxite at Minim-Martap.',
  ], 'geol-paper1-plan', 'Learn the numbers: 2,900 km, 541, 252, 66 Ma, 4,095 m.',
  ['The Gutenberg discontinuity is at a depth of about:', ['2,900 km', '35 km', '5,150 km', '670 km'], 'Mantle and core.'],
  [['Quick fact', 'A short, exact piece of knowledge often tested in multiple choice.'], ['Discontinuity', 'A boundary inside the Earth.']],
  [
    { q: 'Write a memory aid for the order of the eras, oldest first.', steps: ['**Precambrian, Palaeozoic (old life), Mesozoic (middle life), Cenozoic (recent life).**', '**"Ancient, Old, Middle, New": the Greek roots palaeo, meso and ceno mean old, middle and recent.**'] },
  ]),

  // ---------- Paper 2 ----------
  L('gl-blockdiagrams-5', 'gl-f5-paper2', '12.1', 'Interpreting cross-sections and block diagrams', 15, ['Examination'], [
    'To interpret a section or block diagram, work in this order:\n- **identify** each rock unit from the key: sedimentary beds, intrusions, lava flows\n- note **structures**: dips, folds, faults (and which way they moved), unconformities\n- apply the **principles**: superposition, cross-cutting relationships, inclusions, baked margins\n- write the **sequence of events**, oldest first, including deposition, folding, faulting, intrusion, uplift, erosion and later deposition.',
    'Clues on the diagram:\n- a **wavy line** is an erosion surface (unconformity)\n- a **baked (metamorphosed) zone** shows which rocks an intrusion touched while hot; a lava flow bakes only the bed below\n- a fault that **displaces** a dyke is younger than the dyke; a dyke that **cuts** a fault is younger than the fault\n- beds **repeated** on either side of an axis indicate a fold.',
    'Always say **how** you know, quoting the principle: "the dyke is younger than bed C because it cuts across it (cross-cutting relationships)".',
  ], 'geol-section', 'Units, structures, principles, then events oldest first.',
  ['A dyke displaced by a fault shows that the:', ['fault is younger than the dyke', 'dyke is younger than the fault', 'two are the same age', 'dyke is a sill'], 'Cross-cutting relationships.'],
  [['Sequence of events', 'The geological history in order, oldest first.'], ['Baked margin', 'Rock altered by heat at the contact with an intrusion.']],
  [
    { q: 'A section shows tilted beds 1 to 3, a granite cutting them, an erosion surface across both, and horizontal bed 4 above. Give the history.', steps: ['**Deposition of beds 1, 2, 3 (superposition).**', '**Tilting of the beds.**', '**Intrusion of the granite, which cuts the beds.**', '**Uplift and erosion, forming an unconformity.**', '**Subsidence and deposition of bed 4.**'] },
  ]),

  L('gl-structured-5', 'gl-f5-paper2', '12.2', 'Answering structured questions', 14, ['Examination'], [
    'Command words:\n- **state, name, list**: short answers, no explanation\n- **describe**: say what is there or what happens, in order\n- **explain**: give reasons, using "because" and "so"\n- **compare**: give similarities and differences, point by point\n- **draw / sketch**: a clear, labelled diagram\n- **calculate**: show the formula, working and unit.',
    'Use the **marks** as a guide: a 3-mark "explain" usually needs three linked points. Use correct terms (aureole, aquiclude, cap rock) and Cameroonian examples where asked (Nyos, Mount Cameroon, Rio del Rey, Minim-Martap).',
    'Labelled sketches often score faster than long sentences: a quick sketch of an anticline trap, an artesian basin or a normal fault, with labels, can earn most of the marks of a part question.',
  ], 'geol-section', 'The marks tell you how many points.',
  ['A question says "Explain, with the aid of a diagram, how an artesian well works." You should:', ['draw a labelled artesian basin and give the reasons', 'only draw', 'only list words', 'write the history of Cameroon'], 'Both parts of the command.'],
  [['Command word', 'The instruction word that tells you what kind of answer is needed.'], ['Mark allocation', 'The marks shown for each part of a question.']],
  [
    { q: 'Answer: "Explain why S waves do not reach the far side of the Earth from an earthquake. (3 marks)"', steps: ['**S waves are shear waves that can travel only through solids.** (1)', '**The outer core, from about 2,900 km, is liquid.** (1)', '**So S waves are stopped at the core boundary, leaving an S-wave shadow zone on the far side.** (1)'] },
  ]),

  // ---------- Mock and revision ----------
  L('gl-mock-5', 'gl-f5-mock', '13.1', 'Sitting the mock examination', 12, ['Examination'], [
    'The mock examination reproduces the GCE: **Paper 1** (50 multiple-choice items, 1½ hours) and **Paper 2** (structured questions, 2½ hours), under timed, silent conditions.',
    'Before: revise the whole course with your topic list; gather pens, pencils, ruler, eraser, sharpener and a calculator if allowed. During: read the instructions, plan your time, answer every item in Paper 1, and draw labelled diagrams in Paper 2. After: mark your papers with the scheme and record the marks for each topic.',
    'The mock tells you where you stand. A low mark in one topic is not a failure; it is information that tells you what to revise next.',
  ], 'geol-final-term', 'Treat the mock as the real thing.',
  ['The best use of a mock result is to:', ['find and revise weak topics', 'stop revising', 'compare only with friends', 'ignore it'], 'Diagnosis.'],
  [['Mock examination', 'A practice exam under real conditions.'], ['Marking scheme', 'The official list of answers and marks.']],
  [
    { q: 'You score 34/50 in Paper 1, losing most marks on fossils and time. What should you do?', steps: ['**34/50 = 68%, a solid base.**', '**Revise fossils and the time scale first: modes of preservation, index fossils, eras and dates, half-life.**', '**Then do a fresh set of items on those topics and check the improvement.**'] },
  ]),

  L('gl-remediation-5', 'gl-f5-mock', '13.2', 'Final revision and the examination day', 13, ['Examination'], [
    'Final revision plan:\n- list every topic of Forms 4 and 5 and rate yourself on each\n- spend most time on weak topics, but revise strong ones briefly too\n- **draw from memory** the key diagrams: Earth’s interior, igneous intrusions, the rock cycle, folds and faults, an unconformity, an artesian basin, an oil trap and the geological map of Cameroon\n- practise **past papers** under timed conditions and mark them.',
    'The examination day: sleep well the night before, eat, arrive early with your candidate number and equipment, read every instruction, and stay calm. Use any time left to check your answers and your shading.',
    'Remember the link between topics: minerals make rocks, rocks record structures and time, and the geology of Cameroon brings them all together in resources and hazards.',
  ], 'geol-final-term', 'Draw the key diagrams from memory.',
  ['Which diagram should you be able to draw from memory?', ['an anticline oil trap', 'a map of Europe', 'a flower', 'a circuit diagram'], 'Core geology.'],
  [['Revision timetable', 'A plan of what to revise and when.'], ['Past paper', 'A previous examination used for practice.']],
  [
    { q: 'Plan the last two weeks before the GCE for a student weak in structures and groundwater.', steps: ['**Week 1: structures (folds, faults, unconformities) and groundwater (porosity, aquifers, artesian basins), with diagrams and past questions.**', '**Week 2: one full timed Paper 1 and Paper 2, marked; a quick review of all other topics; rest the day before.**'] },
  ]),
];
