// Geology lessons for Form 5, term 1: the GCE papers and geological drawing,
// structural geology, stratigraphy, fossils, the time scale, groundwater,
// economic geology and the Precambrian basement of Cameroon. Original text
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

export const LESSONS_5A = [
  // ---------- Exam and drawing ----------
  L('gl-gceformat-5', 'gl-f5-blueprint', '1.1', 'The GCE O Level Geology examination', 12, ['Examination'], [
    'GCE O Level **Geology (0555)** is written in two papers:\n- **Paper 1**: **50 multiple-choice** items with four options each, in **1½ hours**; every item is worth one mark and there is no penalty for a wrong answer, so never leave an item blank\n- **Paper 2**: **structured questions** in **2½ hours**, with diagrams, maps, sections and data to interpret, short explanations and labelled sketches.',
    'The syllabus covers both years of the course: the Earth and its interior, minerals and crystals, igneous, sedimentary and metamorphic rocks, surface processes and hazards, structures, stratigraphy, fossils and time, groundwater, economic geology and the geology of **Cameroon**. Form 4 work is examined too, so revise it alongside the Form 5 topics.',
    'Plan the year: learn each topic with its diagrams, practise past questions after each sequence, and keep the last weeks for full timed papers. Check the official GCE Board timetable for the date and session of each paper.',
  ], 'geol-gce-0555', 'Paper 1: 50 MCQ in 1½ h. Paper 2: structured, 2½ h.',
  ['How many options does each Paper 1 item have?', ['four', 'two', 'five', 'six'], 'A to D.'],
  [['Multiple choice', 'A question answered by choosing one of several given options.'], ['Structured question', 'A question divided into parts, often based on a diagram or data.'], ['Syllabus', 'The official list of topics examined.']],
  [
    { q: 'You have 2½ hours for a paper of five questions of equal marks. How should you budget your time?', steps: ['2½ hours = **150 minutes.**', 'Keep about 10 minutes to read and 10 to check: 130 minutes left.', '130 ÷ 5 = **about 26 minutes per question.**'] },
  ]),

  L('gl-drawing-5', 'gl-f5-blueprint', '1.2', 'Drawing geological diagrams', 14, ['Examination'], [
    'Geologists communicate with three kinds of drawing:\n- a **geological map**: the rock units seen at the surface from above, with boundaries, a key and symbols for dip and strike\n- a **cross-section**: a vertical slice along a line on the map, showing how the rocks lie underground\n- a **block diagram**: a three-dimensional sketch showing the top surface and two sides at once.',
    'Rules for a good diagram:\n- use a sharp **pencil**, clear continuous lines and a reasonable size (at least a third of a page)\n- add a **title**, and a **key** and **scale** where needed\n- use standard **symbols**: dots for sandstone, short dashes for shale, a brick pattern for limestone, crosses or V marks for igneous rock, wavy lines for metamorphic rock\n- label with straight **label lines** that do not cross, ending exactly on the feature; write labels horizontally outside the drawing.',
    'Show the relationships that matter: draw a dyke cutting across the beds, a sill parallel to them, an unconformity as a wavy line, faults as heavy lines with half arrows showing the movement.',
  ], 'geol-section', 'Pencil, title, key, scale; label lines never cross.',
  ['On a cross-section, a brick pattern usually represents:', ['limestone', 'sandstone', 'shale', 'granite'], 'Standard rock symbols.'],
  [['Cross-section', 'A vertical slice showing rocks below the surface.'], ['Block diagram', 'A 3D sketch showing the surface and two sides.'], ['Key', 'An explanation of the symbols and colours used.']],
  [
    { q: 'State four marks of a well-drawn geological section.', steps: ['**A title naming what it shows.**', '**A key to the rock symbols, and a scale.**', '**Clear boundaries with structures (faults, unconformities) drawn correctly.**', '**Neat labels with straight, non-crossing lines.**'] },
  ]),

  // ---------- Structures ----------
  L('gl-folds-5', 'gl-f5-structures', '2.1', 'Dip, strike and folds', 15, ['Structural geology'], [
    'The orientation of a tilted bed is given by:\n- **strike**: the compass direction of a horizontal line on the bed\n- **dip**: the angle of maximum slope of the bed below the horizontal, measured with a **clinometer**, at right angles to the strike, with its direction (for example 30° to the east).',
    'A **fold** is a bend in rock layers produced by **compression**. Parts: the **limbs** (sides), the **hinge** (line of greatest curvature), the **axial plane** (dividing the fold into two halves) and the **crest** and **trough**.\nTypes:\n- **anticline**: an upfold, limbs dipping away from the axis, **oldest rocks in the core**\n- **syncline**: a downfold, limbs dipping towards the axis, **youngest rocks in the core**\n- **monocline**: a single step-like bend in otherwise flat beds\n- **symmetrical**, **asymmetrical**, **overturned** (one limb tilted past the vertical) and **recumbent** (lying on its side), in order of increasing compression.',
    'When folded rocks are eroded, the outcrop pattern on a map shows the beds **repeated symmetrically** on either side of the fold axis. In an anticline the oldest bed outcrops in the centre; in a syncline the youngest.',
  ], 'geol-folds-faults', 'Anticline: oldest in the core. Syncline: youngest in the core.',
  ['A fold lying almost flat on its side is:', ['recumbent', 'a monocline', 'symmetrical', 'a horst'], 'Extreme compression.'],
  [['Strike', 'The direction of a horizontal line on a tilted bed.'], ['Dip', 'The angle and direction of maximum slope of a bed.'], ['Anticline', 'An upfold with the oldest rocks in the core.'], ['Syncline', 'A downfold with the youngest rocks in the core.']],
  [
    { q: 'On a map, beds A, B, C, B, A outcrop in order across a valley, and A is the youngest. What structure is present?', steps: ['**The beds repeat symmetrically, so the structure is a fold.**', '**The oldest bed, C, lies in the centre.**', '**The oldest rocks in the core define an anticline (eroded down to its core).**'] },
  ]),

  L('gl-faults-5', 'gl-f5-structures', '2.2', 'Faults and joints', 15, ['Structural geology'], [
    'A **fault** is a fracture along which the rocks have **moved** (been displaced). The block above an inclined fault plane is the **hanging wall**; the block below is the **footwall**. The amount of movement is the **throw** (vertical) or displacement.',
    'Types:\n- **normal fault**: caused by **tension**; the hanging wall moves **down**; the crust is lengthened\n- **reverse fault**: caused by **compression**; the hanging wall moves **up**; a low-angle reverse fault is a **thrust**\n- **strike-slip (tear) fault**: horizontal movement along a vertical plane\n- **horst**: an upthrown block between two normal faults (block mountain)\n- **graben (rift valley)**: a block dropped down between two normal faults; the East African Rift is an example, and the Benue trough began as a rift.',
    'A **joint** is a fracture with **no** displacement. Joints form by cooling (columnar joints in basalt), by unloading as overlying rock is eroded (sheet joints in granite) and by tectonic stress. Faults and joints are weaknesses: they guide erosion, river courses and groundwater, and are zones of risk for dams and tunnels.',
  ], 'geol-folds-faults', 'Normal: tension, hanging wall down. Reverse: compression, hanging wall up.',
  ['A fracture in rock with no movement along it is a:', ['joint', 'normal fault', 'thrust', 'graben'], 'Faults show displacement.'],
  [['Fault', 'A fracture along which rocks have moved.'], ['Hanging wall', 'The block above an inclined fault plane.'], ['Throw', 'The vertical displacement on a fault.'], ['Graben', 'A down-dropped block between two faults.']],
  [
    { q: 'A bed is found 40 m lower on one side of a normal fault. Which block moved down and what force caused it?', steps: ['**In a normal fault the hanging wall moves down relative to the footwall.**', '**The throw is 40 m.**', '**The force was tension, pulling the crust apart.**'] },
  ]),

  // ---------- Stratigraphy ----------
  L('gl-principles-5', 'gl-f5-stratigraphy', '3.1', 'The principles of stratigraphy', 14, ['Stratigraphy'], [
    '**Stratigraphy** is the study of rock layers (strata) and their order. Its principles, many first stated by Nicolaus Steno in 1669, allow **relative dating** (older or younger):\n- **superposition**: in an undisturbed sequence, each bed is younger than the one below\n- **original horizontality**: sediments are laid down in nearly horizontal layers, so tilted or folded beds were disturbed later\n- **lateral continuity**: a bed extends sideways until it thins out or meets a barrier, so the same bed can be matched across a valley\n- **cross-cutting relationships**: a fault or intrusion is **younger** than the rocks it cuts\n- **inclusions**: fragments of one rock inside another are **older** than the rock that contains them\n- **faunal succession**: fossil groups follow each other in a definite order, so beds can be matched by their fossils.',
    'Matching beds of the same age from place to place is **correlation**. It uses rock type, distinctive marker beds (such as a volcanic ash layer) and, best of all, index fossils.',
    'Relative dating gives the **order** of events; it needs radiometric dating to give ages in years.',
  ], 'geol-section', 'Lower is older; what cuts is younger; what is included is older.',
  ['A granite contains pieces of the shale around it. Which is older?', ['the shale', 'the granite', 'both are the same age', 'cannot be told'], 'Inclusions are older than their host.'],
  [['Stratigraphy', 'The study of rock layers and their order.'], ['Superposition', 'In undisturbed beds the lowest is oldest.'], ['Cross-cutting relationships', 'A feature that cuts rocks is younger than them.'], ['Correlation', 'Matching rocks of the same age in different places.']],
  [
    { q: 'A dyke cuts beds 1 to 4 but is itself cut by a fault, and bed 5 lies across the top of both, unbroken. Put the events in order.', steps: ['**Deposition of beds 1 to 4 (1 oldest).**', '**Intrusion of the dyke.**', '**Faulting, which cuts the dyke.**', '**Erosion, then deposition of bed 5 over both: the youngest event.**'] },
  ]),

  L('gl-unconformities-5', 'gl-f5-stratigraphy', '3.2', 'Unconformities and geological history', 14, ['Stratigraphy'], [
    'An **unconformity** is a buried surface of **erosion or non-deposition**: it represents a **gap** in the rock record, sometimes of millions of years. Types:\n- **angular unconformity**: tilted or folded older beds below, horizontal younger beds above; the history is deposition, folding and uplift, erosion, subsidence, new deposition\n- **disconformity**: parallel beds above and below, with an uneven erosion surface between them\n- **nonconformity**: sedimentary rocks lying on eroded **igneous or metamorphic** basement.',
    'Clues to an unconformity: a sudden change in dip; an eroded, irregular surface; a **basal conglomerate** of pebbles from the rocks below; weathered soil horizons; a large jump in fossil ages.',
    'In Cameroon, the Cretaceous sediments of the coastal and Benue basins rest **nonconformably** on the eroded Precambrian basement: a gap of hundreds of millions of years.',
  ], 'geol-section', 'An unconformity is missing time.',
  ['Horizontal sandstone resting on eroded granite is an example of:', ['a nonconformity', 'an angular unconformity', 'a disconformity', 'a fault'], 'Sediment on igneous rock.'],
  [['Unconformity', 'A surface of erosion or non-deposition representing missing time.'], ['Angular unconformity', 'Younger flat beds over older tilted beds.'], ['Basal conglomerate', 'A pebbly bed lying just above an unconformity.']],
  [
    { q: 'Write the history shown by an angular unconformity.', steps: ['**Deposition of the lower beds, horizontally.**', '**Folding or tilting, and uplift above sea level.**', '**Erosion, producing a flat surface across the tilted beds.**', '**Subsidence and deposition of the younger, horizontal beds above.**'] },
  ]),

  // ---------- Fossils ----------
  L('gl-fossilisation-5', 'gl-f5-fossils', '4.1', 'How fossils form', 14, ['Palaeontology'], [
    'A **fossil** is the remains or trace of an organism that lived in the geological past, preserved in rock. Fossilisation is rare; it is favoured by:\n- **hard parts** (shells, bones, teeth, wood)\n- **rapid burial** in fine sediment, away from scavengers, oxygen and decay\n- little later disturbance: no deep weathering, melting or strong metamorphism.',
    'Modes of preservation:\n- **unaltered remains**: mammoths frozen in ice, insects in **amber**\n- **petrification (replacement and permineralisation)**: minerals such as silica or calcite fill or replace the tissue; petrified wood\n- **carbonisation**: only a thin film of carbon is left; leaves in shale and coal\n- **moulds and casts**: a shell dissolves leaving a hollow (**mould**), later filled by minerals (**cast**)\n- **trace fossils**: footprints, burrows, borings, droppings, which record activity rather than the body.',
    'Fossils are found mainly in **sedimentary rocks**, especially shale and limestone. They are almost never found in igneous rocks and are destroyed in high-grade metamorphic rocks.',
  ], 'geol-fossils', 'Hard parts plus rapid burial make fossils.',
  ['A hollow left in rock where a shell dissolved is a:', ['mould', 'cast', 'trace fossil', 'carbonised film'], 'A cast fills a mould.'],
  [['Fossil', 'The preserved remains or traces of a past organism.'], ['Petrification', 'Replacement of tissue by minerals.'], ['Mould', 'A hollow impression of an organism in rock.'], ['Trace fossil', 'Evidence of activity, such as a footprint or burrow.']],
  [
    { q: 'Explain why jellyfish fossils are very rare while shellfish fossils are common.', steps: ['**Jellyfish have no hard parts, so their soft bodies decay or are eaten quickly.**', '**Shellfish have hard shells of calcite or aragonite that resist decay.**', '**Shells buried in mud on the sea floor are easily preserved.**'] },
  ]),

  L('gl-indexfossils-5', 'gl-f5-fossils', '4.2', 'Index fossils and the uses of fossils', 14, ['Palaeontology'], [
    'An **index (zone) fossil** allows beds to be dated and correlated precisely. It must:\n- have lived for a **short** span of geological time (evolved rapidly)\n- have been **widespread** geographically\n- be **common** and **easy to recognise**.',
    'Important index fossils:\n- **trilobites**: marine arthropods of the **Palaeozoic**, especially the Cambrian\n- **graptolites**: colonial marine animals of the Ordovician and Silurian\n- **ammonites**: coiled shells with complex suture lines, of the **Mesozoic** (Jurassic and Cretaceous)\n- microfossils (foraminifera, pollen), which oil geologists use in borehole samples.',
    'Other uses of fossils:\n- **palaeoenvironments**: corals mean a warm, shallow, clear sea; coal and plant fossils a swamp; marine fossils on mountains show uplift\n- **evolution**: the changing forms of life through time\n- **palaeogeography**: identical fossils (such as the reptile *Mesosaurus*) in Africa and South America supported the idea of continental drift.',
  ], 'geol-fossils', 'Index fossil: short-lived, widespread, common.',
  ['Graptolites are index fossils of the:', ['Ordovician and Silurian', 'Cretaceous', 'Quaternary', 'Neogene'], 'Lower Palaeozoic.'],
  [['Index fossil', 'A fossil used to date and correlate rocks precisely.'], ['Trilobite', 'An extinct Palaeozoic marine arthropod.'], ['Ammonite', 'An extinct coiled cephalopod of the Mesozoic.'], ['Palaeoenvironment', 'The environment in which a rock formed.']],
  [
    { q: 'Why is a coral that lived for 200 million years a poor index fossil?', steps: ['**An index fossil must have lived for a short time.**', '**A form that lasted 200 million years could be any age within that span.**', '**It cannot date a bed precisely, though it still indicates a warm shallow sea.**'] },
  ]),

  // ---------- Time scale ----------
  L('gl-eras-5', 'gl-f5-timescale', '5.1', 'Eras, periods and radiometric dating', 15, ['Geological time'], [
    'Geological time is divided into **eons**, **eras**, **periods** and **epochs**:\n- **Precambrian**: from the formation of the Earth about **4,600 million years (Ma)** ago to **541 Ma**\n- **Palaeozoic era** (541 to 252 Ma): Cambrian, Ordovician, Silurian, Devonian, Carboniferous, Permian\n- **Mesozoic era** (252 to 66 Ma): Triassic, Jurassic, Cretaceous\n- **Cenozoic era** (66 Ma to the present): Palaeogene, Neogene, Quaternary.',
    '**Radiometric (absolute) dating** uses the steady decay of radioactive isotopes. The **half-life** is the time for half of the parent atoms to change into daughter atoms. After 1 half-life ½ of the parent is left, after 2 half-lives ¼, after 3 ⅛, and so on. Useful isotopes: uranium-238 to lead-206 (half-life about 4,500 Ma), potassium-40 to argon-40 (about 1,250 Ma), and carbon-14 (5,730 years) for remains younger than about 50,000 years.',
    'Igneous rocks are dated most reliably, because their minerals start the radioactive clock when they crystallise. Sedimentary beds are dated indirectly, from the igneous rocks that cut them or lie between them.',
  ], 'geol-timescale', 'Precambrian, then Palaeozoic 541, Mesozoic 252, Cenozoic 66.',
  ['After three half-lives, the fraction of parent isotope left is:', ['1/8', '1/3', '1/4', '1/6'], '½ × ½ × ½.'],
  [['Era', 'A major division of geological time.'], ['Half-life', 'The time for half the atoms of a radioactive isotope to decay.'], ['Absolute dating', 'Finding the age of a rock in years.'], ['Ma', 'Million years (ago).']],
  [
    { q: 'A mica crystal in a granite holds 25% of its original potassium-40. The half-life is 1,250 Ma. How old is the granite?', steps: ['100% to 50% to 25%: **two half-lives.**', 'Age = 2 × 1,250 = **2,500 Ma**, at the end of the Archaean.'] },
  ]),

  L('gl-milestones-5', 'gl-f5-timescale', '5.2', 'Milestones in the history of the Earth and life', 14, ['Geological time'], [
    'Main events:\n- **Precambrian**: formation of the Earth (4,600 Ma), the first crust and oceans, the first simple life (bacteria, over 3,500 Ma), oxygen building up in the atmosphere from photosynthesis, and the first many-celled organisms near its end; about **88%** of geological time\n- **Palaeozoic**: the "explosion" of animals with hard parts in the Cambrian; fish, then land plants, amphibians and reptiles; great coal forests in the Carboniferous; it ends with the **Permian mass extinction** (about 252 Ma), the largest ever\n- **Mesozoic**: the age of **reptiles**: dinosaurs, the first mammals and birds, flowering plants; the break-up of Gondwana and the opening of the South Atlantic; it ends with the **end-Cretaceous extinction** (66 Ma) of the dinosaurs and ammonites, linked to a large asteroid impact\n- **Cenozoic**: the age of **mammals**; the Alps and Himalayas rise; the Quaternary ice ages; modern humans.',
    'Cameroon’s own history fits this scale: the Ntem rocks are **Archaean** (Precambrian), the basement was deformed in the **Pan-African** event (about 600 Ma), the coastal and Benue basins opened in the **Cretaceous** as Africa separated from South America, and the Cameroon Volcanic Line has been active through the **Cenozoic** to the present.',
    'To picture the scale, imagine Earth history as one year: the dinosaurs die out on about 26 December and modern humans appear only in about the last 35 minutes of 31 December.',
  ], 'geol-timescale', 'Mass extinctions end the Palaeozoic and Mesozoic.',
  ['The dinosaurs died out at the end of the:', ['Cretaceous', 'Permian', 'Cambrian', 'Quaternary'], 'About 66 Ma.'],
  [['Mass extinction', 'The dying out of a large proportion of species in a short time.'], ['Gondwana', 'The southern supercontinent that included Africa and South America.'], ['Pan-African event', 'A mountain-building episode about 600 Ma ago.']],
  [
    { q: 'If the 4,600 million years of Earth history were one 24-hour day, at about what time would the Palaeozoic begin?', steps: ['Time since the Palaeozoic began = 541 Ma; fraction of the day = 541 ÷ 4,600 ≈ **0.118.**', '0.118 × 24 h ≈ **2.8 hours** before midnight.', 'So the Palaeozoic begins at about **9:10 pm.**'] },
  ]),

  // ---------- Groundwater ----------
  L('gl-porosity-5', 'gl-f5-groundwater', '6.1', 'Porosity, permeability and the water table', 14, ['Hydrogeology'], [
    'Water from rain soaks into the ground (**infiltration**) and moves down to fill the spaces in rocks.\n- **Porosity**: the percentage of a rock’s volume that is pore space. Well-sorted sand and gravel have high porosity; poorly sorted or well-cemented rock less; unfractured granite very little\n- **Permeability**: the ability of a rock to let water **pass through**. It needs pores that are large and **connected**, or open fractures.\nClay has high porosity (up to 50%) but very low permeability because its pores are tiny; jointed granite has low porosity but can be permeable along its fractures.',
    'Below the surface: the **unsaturated zone** (pores contain both air and water) lies above the **saturated zone** (all pores full). Their boundary is the **water table**. It follows the land surface in a subdued way, **rises** in the rainy season and **falls** in the dry season and when too much water is pumped.',
    'Porosity is calculated as: porosity (%) = (volume of pores ÷ total volume) × 100.',
  ], 'geol-groundwater', 'Porosity stores water; permeability moves it.',
  ['Which rock is porous but nearly impermeable?', ['clay', 'gravel', 'sandstone', 'jointed limestone'], 'Tiny pores hold water but do not release it.'],
  [['Porosity', 'The proportion of a rock that is pore space.'], ['Permeability', 'The ability of a rock to transmit fluids.'], ['Water table', 'The top of the saturated zone.'], ['Infiltration', 'The soaking of water into the ground.']],
  [
    { q: 'A 200 cm³ sandstone sample absorbs 50 cm³ of water when saturated. Calculate its porosity.', steps: ['Porosity = (pore volume ÷ total volume) × 100.', '= (50 ÷ 200) × 100 = **25%.**'] },
  ]),

  L('gl-aquifers-5', 'gl-f5-groundwater', '6.2', 'Aquifers, springs, wells and artesian basins', 15, ['Hydrogeology'], [
    'An **aquifer** is a rock or sediment that stores and **transmits** enough water to supply wells and springs: sand, gravel, sandstone, jointed limestone, fractured basalt and granite. An **aquiclude** (aquitard) is impermeable or nearly so: clay, shale.\n- an **unconfined** aquifer is open to the surface and recharged directly by rain\n- a **confined** aquifer lies between two aquicludes.',
    'A **spring** forms where the water table meets the ground surface, typically where a permeable rock lies on an impermeable one, at a fault, or at the foot of a lava flow. **Wells** reach below the water table; a well must be deep enough to stay below the dry-season level.\nIn an **artesian basin**, a confined aquifer is bent into a syncline and exposed in higher ground (the **recharge area**). Water in the aquifer is under pressure; a well drilled through the aquiclude will rise and may **flow at the surface without pumping** if the well-head is below the level of the recharge area (the potentiometric surface).',
    'Groundwater is polluted by pit latrines too close to wells, waste dumps, fertilisers and pesticides, fuel leaks and mine waste. Protection: siting latrines at least 30 m from and downslope of wells, lining well tops, protecting recharge areas and treating waste. Pumping too much near the coast can draw **salt water** into aquifers, a risk around Douala.',
  ], 'geol-groundwater', 'Artesian: confined aquifer, high recharge, water under pressure.',
  ['A well drilled into a confined aquifer flows at the surface because:', ['the water is under pressure from a higher recharge area', 'the aquifer is shallow', 'it is the rainy season', 'the rock is impermeable'], 'Artesian flow.'],
  [['Aquifer', 'A rock that stores and transmits useful amounts of water.'], ['Aquiclude', 'An impermeable layer that blocks water.'], ['Artesian well', 'A well in which water rises under pressure.'], ['Recharge area', 'Where water enters an aquifer.']],
  [
    { q: 'List three conditions for an artesian basin.', steps: ['**A permeable aquifer confined between impermeable layers above and below.**', '**The aquifer folded into a basin (syncline), exposed at the surface in higher ground.**', '**Rain falling on the outcrop recharges the aquifer, building pressure in its lower parts.**'] },
  ]),

  // ---------- Economic geology ----------
  L('gl-ores-5', 'gl-f5-economic', '7.1', 'Ore deposits', 15, ['Economic geology'], [
    'An **ore** is a natural concentration of minerals from which a metal can be extracted at a **profit**. The useful mineral is the **ore mineral** (hematite and magnetite for iron, cassiterite for tin, galena for lead, bauxite for aluminium); the waste is **gangue** (often quartz or calcite). The **grade** is the percentage of metal in the ore. Whether a deposit is an ore depends on grade, size, location, the metal price and the cost of mining.',
    'How ores form:\n- **magmatic**: heavy minerals settle in cooling magma (chromite, platinum, nickel sulphides in basic rocks)\n- **hydrothermal**: hot fluids from magma deposit metals in **veins** in cracks (gold, copper, lead, zinc, tin with quartz)\n- **placer**: heavy, resistant minerals (gold, diamond, cassiterite, rutile) concentrated by running water in river gravels and beaches\n- **residual**: intense tropical weathering removes soluble minerals and leaves insoluble ones concentrated: **bauxite** (aluminium) and lateritic nickel and cobalt\n- **sedimentary**: banded iron formations, evaporites.',
    'Mining methods: **open-pit (opencast)** mining for large shallow deposits, **underground** mining by shafts and tunnels for deep veins, **dredging** and panning for placers. Effects: land degradation, deforestation, water pollution (mercury, cyanide, acid mine drainage), dust, and loss of farmland; laws require restoration of mined land.',
  ], 'geol-oil-trap', 'Ore = profitable; gangue = waste.',
  ['Gold concentrated in river gravels is a:', ['placer deposit', 'residual deposit', 'magmatic deposit', 'evaporite'], 'Heavy grains settle where water slows.'],
  [['Ore mineral', 'The mineral from which a metal is extracted.'], ['Grade', 'The percentage of useful metal in an ore.'], ['Hydrothermal vein', 'A crack filled with minerals deposited by hot fluids.'], ['Placer', 'A deposit of heavy minerals concentrated by water.']],
  [
    { q: 'An ore contains 2% copper. How much rock must be mined to obtain 1 tonne of copper?', steps: ['2% means 2 t of copper in every 100 t of rock.', 'Rock needed = 1 ÷ 0.02 = **50 tonnes**, which shows why so much waste rock is produced.'] },
  ]),

  L('gl-fossilfuels-5', 'gl-f5-economic', '7.2', 'Coal, petroleum and natural gas', 15, ['Economic geology'], [
    '**Coal** forms from plant material that accumulated in swamps, was buried and converted by heat and pressure: peat, lignite, bituminous coal, anthracite.\n**Petroleum (crude oil) and natural gas** form from tiny marine organisms (plankton) buried in fine mud with little oxygen. As the mud becomes a **source rock** (black shale) and is buried to depths of about 2 to 5 km, heat converts the organic matter into oil (the "oil window") and, deeper and hotter, gas.',
    'Oil and gas are lighter than water, so they **migrate** upwards through permeable rock. They collect only where a **trap** stops them:\n- a **reservoir rock**: porous and permeable (sandstone, porous limestone)\n- a **cap rock** (seal): impermeable (shale, salt) above the reservoir\n- a **trap** structure: an **anticline**, a **fault** that puts a seal against the reservoir, a **salt dome**, or a reservoir that pinches out (stratigraphic trap).\nIn the trap the fluids separate by density: **gas** at the top, **oil** in the middle, **water** below.',
    'Exploration uses geological maps, **seismic** surveys (sound waves reflected from the layers) and test drilling. Cameroon’s oil comes from the offshore **Rio del Rey** and **Douala-Kribi-Campo** basins, and natural gas from fields offshore Kribi and at Logbaba near Douala.',
  ], 'geol-oil-trap', 'Source, migration, reservoir, cap rock, trap.',
  ['In an oil trap, the cap rock must be:', ['impermeable', 'porous and permeable', 'igneous', 'full of fossils'], 'It seals the oil in.'],
  [['Source rock', 'A rock rich in organic matter that generates oil or gas.'], ['Reservoir rock', 'A porous, permeable rock that holds oil or gas.'], ['Cap rock', 'An impermeable seal above a reservoir.'], ['Oil trap', 'A structure where oil and gas collect.']],
  [
    { q: 'Explain why gas lies above oil, and oil above water, in an anticline trap.', steps: ['**The three fluids do not mix and separate by density.**', '**Gas is the least dense, so it rises to the crest.**', '**Oil is less dense than water, so it floats on the water filling the lower parts of the reservoir.**'] },
  ]),

  // ---------- Cameroon basement ----------
  L('gl-cameroonmap-5', 'gl-f5-basement', '8.1', 'Reading the geological map of Cameroon', 14, ['Geology of Cameroon'], [
    'A simplified geological map of Cameroon shows four main units:\n- the **Precambrian basement**, covering most of the country: gneisses, schists, migmatites and granites\n- **sedimentary basins**: the coastal basins (Rio del Rey, Douala, Kribi-Campo), the inland Mamfe and Garoua (Benue) basins, and the Lake Chad basin in the far north\n- the **Cameroon Volcanic Line**: volcanic rocks from the coast through the Western Highlands to the Adamawa\n- recent **alluvium** along major rivers and the coast.',
    'How to read it: use the **key** to match each colour or symbol to a rock unit and its age; note the **boundaries** and the direction in which the units trend; relate the rocks to relief (volcanic highlands, basement plateaux, low sedimentary plains) and to resources (oil in basins, minerals in the basement, fertile soils on volcanics).',
    'The basement trends broadly **south-west to north-east**, the same direction as the Volcanic Line and the great **Central Cameroon Shear Zone**, a fault zone crossing the country from the Atlantic coast towards Chad.',
  ], 'geol-cameroon-map', 'Basement most of the country; basins in the coast and north; volcanoes in a line.',
  ['On the geological map of Cameroon, the Lake Chad basin is in the:', ['far north', 'south-west coast', 'east forest', 'centre'], 'Young lake sediments.'],
  [['Basement', 'Old crystalline rocks beneath younger cover.'], ['Migmatite', 'A rock partly melted during high-grade metamorphism.'], ['Shear zone', 'A broad zone of intense deformation along a fault.']],
  [
    { q: 'State three things a geological map of Cameroon shows that a political map does not.', steps: ['**The rock types and their ages at the surface.**', '**The boundaries between rock units, and faults.**', '**The location of volcanic rocks and sedimentary basins, which explain resources and relief.**'] },
  ]),

  L('gl-precambrian-5', 'gl-f5-basement', '8.2', 'The Precambrian basement of Cameroon', 15, ['Geology of Cameroon'], [
    'The **Ntem complex** in the south (around Ebolowa, Sangmélima and Djoum) is **Archaean**, over 2,500 Ma old, and forms the north-western edge of the **Congo craton**, a stable ancient block of the continent. It consists of granitic gneisses, charnockites and greenstone belts with **banded iron formations**, the host of the iron ore at **Mbalam** and of other deposits in the south.',
    'North of the craton lies the **Pan-African** fold belt (the Central African Fold Belt), deformed and metamorphosed about **600 Ma** ago when the Congo craton collided with blocks to the north. It includes the **Yaoundé** group of schists and gneisses (with garnet and kyanite), and the gneisses and granites of the **Adamawa-Yadé** and **West Cameroon** domains, cut by the Central Cameroon Shear Zone.',
    'Landforms and resources: granite **inselbergs** and domes (common in the North and around Ngaoundéré), dissected plateaux, and deep lateritic soils; resources include gold (East), iron (South), cobalt-nickel laterites (East), building stone and gravel, and **rutile** from weathered gneiss near Akonolinga.',
  ], 'geol-cameroon-map', 'Ntem: Archaean craton. Pan-African belt: about 600 Ma.',
  ['The Ntem complex is part of the:', ['Congo craton', 'Cameroon Volcanic Line', 'Douala basin', 'Benue trough'], 'Archaean.'],
  [['Craton', 'An old, stable part of a continent.'], ['Archaean', 'The eon from about 4,000 to 2,500 Ma.'], ['Banded iron formation', 'Precambrian layered rock of iron oxide and silica.'], ['Inselberg', 'An isolated steep hill rising from a plain.']],
  [
    { q: 'Explain why the rocks of the Yaoundé group are metamorphic.', steps: ['**About 600 Ma ago the Congo craton collided with blocks to the north (the Pan-African orogeny).**', '**Rocks caught in the collision were buried deep, heated and squeezed.**', '**Regional metamorphism turned them into schists and gneisses with minerals such as garnet and kyanite.**'] },
  ]),
];
