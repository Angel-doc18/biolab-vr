// A Level Geology lessons (0755), Upper Sixth, Term 1: the final-year plan,
// absolute dating and the time scale, invertebrate fossils, complex maps,
// hydrogeology, applied geophysics, ore genesis, fossil fuels, and the
// Archaean Ntem Complex and Pan-African belt of Cameroon.

const PAPER = { Method: 'All papers', Practical: 'Practical', MCQ: 'Paper 1' };

const L = (id, unit, n, title, minutes, tags, body, figure, tip, check, terms, examples) => ({
  id,
  unit,
  n,
  title,
  minutes,
  paper: PAPER[tags[0]] || 'All papers',
  tags,
  body,
  figure,
  ...(examples ? { examples } : {}),
  tip,
  check: { q: check[0], a: check[1], why: check[2] },
  terms,
});

export const LESSONS_GLU6A = [
  // ---------- 1. Final year ----------
  L('agl-exam-1', 'agl-u6-exam', '1.1', 'The final year: papers, practical and plan', 16, ['Method'], [
    'In 2026 the 0755 examination ran: **practical** on Saturday 16 May; **Paper 1** (multiple choice, 1½ hours) on Thursday 4 June, morning; **Paper 2** (3 hours) the same afternoon. Practise sitting two papers in one day.',
    'The scheme finishes theory by week 22: Term 1 covers dating, fossils, complex maps, groundwater, geophysics, ores, fuels and the Cameroon basement; Term 2 the coastal and interior basins, the volcanic line, Cameroon’s minerals, engineering geology, remote sensing and Gondwana; Term 3 is for drills, the mock and corrections.',
    'The first week is a **diagnostic review**: crystal systems and Miller indices, QAPF, Barrovian zones, strike, dip and structure contours. Weak areas found here should be repaired early, because the Upper Sixth builds on them.',
  ], 'agl-gce-0755', 'Practical in May, written papers in June: revise identification skills first.',
  ['On which day were both written Geology papers in 2026?', ['Thursday 4 June', 'Saturday 16 May', 'Monday 8 June', 'Tuesday 2 June'], 'Morning and afternoon.'],
  [['Diagnostic review', 'A test at the start of a course to find weak areas.']],
  [
    { q: 'A student scores well on rocks but poorly on structure contours in the diagnostic. What should the plan include?', steps: ['Weekly **map exercises** with structure contours and three-point problems.', 'Redo Lower Sixth lessons **17.2 and 19.1**.', 'Check progress with a **timed section** in the first sequence test.'] },
  ]),
  L('agl-exam-2', 'agl-u6-exam', '1.2', 'Command words and how answers are marked', 14, ['Method'], [
    'Command words: **state** or **name** (a fact), **describe** (what is seen), **explain** (processes and reasons), **compare** (similarities and differences together), **calculate** (formula and working), **draw** or **sketch** (a labelled diagram), **discuss** or **evaluate** (evidence for and against, and a judgement).',
    'Good geological answers use **precise terms**, **named examples** (preferably from Cameroon), **labelled diagrams** and **evidence**. In calculations, show the formula, substitution, units and result.',
    'Time: divide minutes in proportion to marks, plan longer answers in a few lines first, and leave time to check.',
  ], 'agl-command', 'Explain = process. Describe = observation. Do not mix them up.',
  ['A question asking you to "explain the formation of bauxite" wants:', ['the weathering processes and conditions that concentrate aluminium', 'a list of bauxite mines', 'a drawing only', 'the price of aluminium'], 'Process and reason.'],
  [['Command word', 'The instruction word that sets the kind of answer required.']],
  [
    { q: 'Rewrite "Mount Cameroon is a volcano" as an explanation.', steps: ['Name the process: **partial melting in the mantle beneath the volcanic line produces basaltic magma**.', 'Add the result: **low-viscosity lava erupts effusively, building a large basaltic volcano**.', 'Add evidence: **eruptions in 1999 and 2000, basaltic lava fields on its flanks**.'] },
  ]),

  // ---------- 2. Dating ----------
  L('agl-dating-1', 'agl-u6-dating', '2.1', 'Radioactive decay and radiometric dating', 22, ['History'], [
    'Unstable **parent** isotopes decay to stable **daughter** isotopes at a constant rate. The **half-life** (T½) is the time for half the parent atoms to decay. After n half-lives the fraction of parent remaining is **(1⁄2)ⁿ**.',
    'If a mineral contained no daughter at formation, its age is **t = (T½ ÷ ln 2) × ln(1 + D⁄P)**, where D and P are the numbers of daughter and parent atoms now. When D = P, t = one half-life; when D = 3P, two half-lives.',
    'Methods:\n- **uranium-lead**: ²³⁸U → ²⁰⁶Pb (T½ about 4.47 billion years) and ²³⁵U → ²⁰⁷Pb (about 704 million years); used on **zircon**, the best method for old igneous and metamorphic rocks\n- **potassium-argon**: ⁴⁰K → ⁴⁰Ar (T½ about 1.25 billion years); argon escapes from melts, so the clock starts as volcanic rocks cool\n- **carbon-14**: T½ about **5,730 years**; dates organic remains up to about 50,000 years.',
    'The date records when the system **closed** (cooling of a mineral, death of an organism). Metamorphism or weathering that lets atoms escape resets or spoils the clock.',
  ], 'agl-decay', 'D⁄P = 1 means one half-life; D⁄P = 3 means two; D⁄P = 7 means three.',
  ['A zircon has three times as many daughter atoms as parent atoms (none at first). Its age is:', ['two half-lives', 'three half-lives', 'one half-life', 'one third of a half-life'], 'P = 1⁄4 of the original.'],
  [['Half-life', 'The time for half of the parent atoms to decay.'], ['Closure', 'The point at which a mineral stops losing or gaining parent or daughter atoms.']],
  [
    { q: 'A charcoal sample has 1⁄8 of the carbon-14 of living wood. How old is it?', steps: ['1⁄8 = (1⁄2)³: **three half-lives**.', 'Age = 3 × 5,730 = **17,190 years**.'] },
    { q: 'A volcanic rock has ⁴⁰Ar⁄⁴⁰K (radiogenic, corrected for branching) of 0.10. With T½ = 1.25 billion years, find its age.', steps: ['t = (1.25 ÷ 0.693) × ln(1.10).', '= 1.804 × 0.0953 = **0.172 billion years**.', '**About 172 million years.**'] },
  ]),
  L('agl-dating-2', 'agl-u6-dating', '2.2', 'Combining dates and the geological time scale', 18, ['History'], [
    'Sedimentary rocks are rarely dated directly (their grains are older than the rock). Instead, **igneous rocks** that cut or overlie them **bracket** their ages: a bed is younger than a lava below it and older than a dyke that cuts it. Volcanic **ash layers** within sequences give excellent dates.',
    'The **geological time scale** divides Earth history (about **4.54 billion years**) into eons, eras and periods. On the International Commission on Stratigraphy chart: the **Phanerozoic** began about **538.8 million years** ago (Cambrian); **Palaeozoic** era 538.8 to 251.9 Ma; **Mesozoic** 251.9 to 66.0 Ma (Triassic, Jurassic, Cretaceous); **Cenozoic** since 66.0 Ma. The **Precambrian** (Hadean, Archaean to 2,500 Ma, Proterozoic) makes up nearly 90% of Earth history.',
    'Boundaries often mark **mass extinctions**: end-Permian (251.9 Ma, the largest) and end-Cretaceous (66.0 Ma, dinosaurs and ammonites). Older charts give the base of the Cambrian as 541 Ma.',
  ], 'agl-timescale', 'Bracket a bed between the youngest rock below it and the oldest rock that cuts or covers it.',
  ['The Mesozoic era lasted from about:', ['251.9 to 66.0 million years ago', '538.8 to 251.9 million years ago', '66.0 million years ago to now', '4.54 to 2.5 billion years ago'], 'Triassic to Cretaceous.'],
  [['Geological time scale', 'The division of Earth history into eons, eras, periods and epochs.'], ['Mass extinction', 'The loss of a large share of species in a short time.']],
  [
    { q: 'A sandstone rests on a lava dated 182 Ma and is cut by a dyke dated 150 Ma. In which period(s) was it deposited?', steps: ['The sandstone is **younger than 182 Ma and older than 150 Ma**.', 'The Jurassic ran from about 201.4 to 145.0 Ma.', '**So it was deposited in the Jurassic.**'] },
  ]),

  // ---------- 3. Invertebrates ----------
  L('agl-invertebrates-1', 'agl-u6-invertebrates', '3.1', 'Brachiopods and bivalves compared', 18, ['History'], [
    '**Brachiopods** (Cambrian to present, most abundant in the Palaeozoic) are marine animals with two **unequal valves**: the larger **pedicle valve**, with an opening for the fleshy stalk (pedicle) that attached them to the sea floor, and the smaller **brachial valve**, which supported the feeding organ (lophophore). Each valve is **symmetrical about its own midline**.',
    '**Bivalves** (lamellibranchs; Cambrian to present, dominant since the Mesozoic) are molluscs with two **equal valves** that are mirror images of each other; the plane of symmetry runs **between** the valves, and each valve is usually **asymmetrical**. Features: **umbo**, hinge **teeth** and sockets, **ligament**, **adductor muscle scars** and the **pallial line** (with a sinus in burrowing forms).',
    'Life habits can be read from shape: thick, ribbed shells for rough shallow water; deep pallial sinus for deep burrowers; flat cemented forms (oysters) attached to hard ground.',
  ], 'agl-fossil-groups', 'Brachiopod: symmetry through each valve. Bivalve: symmetry between the valves.',
  ['In a bivalve, the plane of symmetry usually lies:', ['between the two valves', 'through each valve', 'along the pedicle', 'across the umbo of one valve only'], 'The valves are mirror images.'],
  [['Pedicle', 'The fleshy stalk attaching a brachiopod to the sea floor.'], ['Adductor muscle', 'The muscle that closes a bivalve’s shell, leaving scars inside.']],
  [
    { q: 'A fossil shell has two valves of different size; each valve is symmetrical about a line from the beak to the margin, and one beak has a hole. Identify it.', steps: ['Unequal valves, each **bilaterally symmetrical**: **brachiopod**.', 'The hole in the beak is the **pedicle opening**, in the larger pedicle valve.'] },
  ]),
  L('agl-invertebrates-2', 'agl-u6-invertebrates', '3.2', 'Gastropods, cephalopods and trilobites', 20, ['History'], [
    '**Gastropods** (Cambrian to present): a single shell, usually **coiled in a spiral** (helicoid), with **whorls**, **suture**, **spire** and **aperture**.',
    '**Cephalopods**: a chambered shell divided by **septa**, linked by the **siphuncle**, used for buoyancy. Ammonoids are planispirally coiled; where the septa meet the shell wall they form **suture lines** of increasing complexity: **goniatites** (simple angular sutures, Devonian to Permian), **ceratites** (frilled lobes, mainly Triassic), **ammonites** (highly frilled, Jurassic and Cretaceous). Ammonites evolved rapidly and spread widely, making them prime **index fossils**; they died out at the end of the Cretaceous.',
    '**Trilobites** (Cambrian to Permian) were marine arthropods with three parts lengthways (**cephalon**, **thorax**, **pygidium**) and three lobes across (an **axial lobe** and two **pleural lobes**). Many had compound eyes; they moulted, so many fossils are moults. They are index fossils for the Cambrian.',
  ], 'agl-ranges', 'Suture complexity dates an ammonoid: angular, then frilled lobes, then frilled everywhere.',
  ['An ammonoid with simple, angular suture lines is most likely a:', ['goniatite', 'ammonite', 'ceratite', 'trilobite'], 'Devonian to Permian.'],
  [['Septum', 'A wall dividing the chambers of a cephalopod shell.'], ['Siphuncle', 'A tube linking the chambers of a cephalopod.'], ['Pygidium', 'The tail shield of a trilobite.']],
  [
    { q: 'A shale contains ammonites with very complex sutures. What age is it, and why are these fossils useful?', steps: ['Highly frilled sutures: **true ammonites**.', 'Age: **Jurassic or Cretaceous**.', 'Useful because they **evolved quickly and spread widely**, allowing fine zones and long-distance correlation.'] },
  ]),

  // ---------- 4. Complex maps ----------
  L('agl-maps2-1', 'agl-u6-maps', '4.1', 'Maps with folds, faults, unconformities and intrusions', 22, ['Practical'], [
    'On complex maps, identify structures before drawing:\n- **folds**: repeated outcrops symmetrical about an axis, with older beds in the core (anticline) or younger (syncline); plunging folds close in Vs\n- **faults**: outcrops displaced or cut off along a line; use structure contours on both sides to find the **throw** and **downthrow side**\n- **unconformities**: a younger formation crossing the outcrops of older ones (overstep)\n- **intrusions**: dykes cut across (discordant); sills follow bedding (concordant); aureoles mark baked margins.',
    'Fault rules on eroded ground: for **dip-slip faults**, the outcrop of a dipping bed on the **upthrown side** is shifted in the **direction of dip**; across an anticline the outcrop widens on the upthrown side; across a syncline it narrows.',
    'On the section, offset beds across the fault plane by the throw, draw the fault at its measured dip, and show the sense of movement with half-arrows.',
  ], 'agl-complex-section', 'Find the fault throw from the same structure contour height on both sides.',
  ['A younger formation resting across the outcrops of several older formations shows:', ['an unconformity (overstep)', 'a fault', 'a sill', 'a syncline'], 'Erosion before deposition.'],
  [['Overstep', 'A younger bed resting on progressively older beds across an unconformity.'], ['Downthrow side', 'The side of a fault that moved down relative to the other.']],
  [
    { q: 'A limestone base has a 200 m structure contour on the east of a fault and the same position is crossed by its 120 m contour on the west. Find the throw and downthrow.', steps: ['At the same place the bed is **200 m (east)** and **120 m (west)**.', 'Throw = **80 m**.', '**Downthrow to the west.**'] },
  ]),
  L('agl-maps2-2', 'agl-u6-maps', '4.2', 'Writing the geological history of a map', 18, ['Practical'], [
    'A geological history lists events in order with the evidence for each:\n- deposition of each sedimentary formation (superposition, way-up)\n- folding (repeated outcrops) and its date relative to other events\n- faulting (cuts beds; may be cut by later intrusions or covered by unconformable beds)\n- intrusion (cross-cuts, aureoles, included fragments)\n- uplift and erosion (unconformities)\n- later deposition, and present-day erosion.',
    'Relative dating relies on: superposition, cross-cutting, included fragments, and the unconformity rule (beds below were folded or faulted before beds above were laid down if the structure does not continue upwards).',
    'Where absolute ages are given (for a dyke or lava), use them to bracket the events in years.',
  ], 'agl-history-steps', 'If a fault does not cut a bed, the fault is older than that bed.',
  ['A fault that displaces beds below an unconformity but not those above it is:', ['older than the beds above the unconformity', 'younger than all beds', 'the youngest event', 'impossible'], 'It was eroded before deposition resumed.'],
  [['Relative dating', 'Putting events in order without ages in years.']],
  [
    { q: 'A map shows: Carboniferous beds folded and faulted; a Triassic sandstone lying across them, unfaulted; a dyke cutting both. Write the history.', steps: ['Deposition of **Carboniferous** beds.', '**Folding**, then **faulting** of these beds.', 'Uplift and **erosion**: the unconformity.', 'Deposition of the **Triassic** sandstone.', 'Intrusion of the **dyke**, which cuts both.', '**Present-day erosion.**'] },
  ]),

  // ---------- 5. Hydrogeology ----------
  L('agl-hydro-1', 'agl-u6-hydro', '5.1', 'Porosity, permeability and aquifers', 18, ['Applied'], [
    '**Porosity** = volume of voids ÷ total volume × 100. **Effective porosity** counts only connected pores. **Permeability** is the ability to transmit fluid; hydraulic engineers use **hydraulic conductivity K** (m per day).',
    'High porosity does not guarantee high permeability: **clay** may have over 40% porosity but tiny, poorly connected pores and very low permeability; **well-sorted sand and gravel** and **fractured** limestone or granite transmit water readily.',
    'Underground: the **unsaturated zone** above, the **water table**, and the **saturated zone** below. An **aquifer** stores and yields useful water; an **aquitard** passes water slowly; an **aquiclude** is effectively impermeable. An **unconfined** aquifer has a free water table; a **confined** aquifer lies between aquicludes and is under pressure. If the **piezometric surface** is above the ground, a well flows without pumping: an **artesian well**.',
  ], 'geol-groundwater', 'Porosity is how much water a rock holds; permeability is how fast it lets it go.',
  ['A rock with high porosity but low permeability is:', ['clay', 'gravel', 'fractured limestone', 'well-sorted sand'], 'Tiny, poorly connected pores.'],
  [['Water table', 'The top of the saturated zone in an unconfined aquifer.'], ['Confined aquifer', 'An aquifer between impermeable layers, under pressure.'], ['Piezometric surface', 'The level to which water in a confined aquifer would rise.']],
  [
    { q: 'A 100 cm³ sample of dry sandstone absorbs 18 cm³ of water when saturated. Find its porosity.', steps: ['Porosity = 18 ÷ 100 × 100 = **18%**.', 'If only 12 cm³ drains freely, **effective porosity (specific yield) is 12%**.'] },
  ]),
  L('agl-hydro-2', 'agl-u6-hydro', '5.2', 'Darcy’s law, wells and groundwater pollution', 20, ['Applied'], [
    'Henry **Darcy** (1856) found that flow through sand is proportional to the head difference: **Q = KIA**, where Q is discharge (m³/day), K hydraulic conductivity (m/day), **I = hydraulic gradient** (head difference ÷ flow length, Δh ÷ L) and A the cross-sectional area (m²).',
    'The **Darcy velocity** is Q ÷ A; the actual **seepage velocity** through pores is faster: v = KI ÷ effective porosity.',
    'Pumping a well lowers the water table around it in a **cone of depression**; neighbouring wells may dry up, and near coasts **saltwater** can be drawn in. Groundwater is polluted by latrines and septic tanks too close to wells, landfill leachate, fuel leaks, fertilisers and mining waste; a safe distance and depth for wells, and protecting recharge areas, reduce the risk.',
  ], 'agl-darcy', 'Keep units consistent: K in m/day, A in m², gives Q in m³/day.',
  ['With K = 10 m/day, I = 0.01 and A = 500 m², Q is:', ['50 m³/day', '500 m³/day', '5 m³/day', '5,000 m³/day'], '10 × 0.01 × 500.'],
  [['Hydraulic gradient', 'The fall in water head per unit distance of flow.'], ['Hydraulic conductivity', 'A measure of how easily water flows through a rock.'], ['Cone of depression', 'The lowering of the water table around a pumped well.']],
  [
    { q: 'Two wells 400 m apart in a sandstone aquifer have water levels of 52 m and 48 m. K = 5 m/day and effective porosity 0.2. Find the seepage velocity and the time to travel 400 m.', steps: ['I = (52 − 48) ÷ 400 = **0.01**.', 'Darcy velocity = KI = 5 × 0.01 = **0.05 m/day**.', 'Seepage velocity = 0.05 ÷ 0.2 = **0.25 m/day**.', 'Time = 400 ÷ 0.25 = **1,600 days, about 4.4 years**.'] },
  ]),

  // ---------- 6. Geophysics ----------
  L('agl-geophysics-1', 'agl-u6-geophysics', '6.1', 'Seismic refraction and reflection', 22, ['Applied'], [
    'In **seismic refraction**, a source (hammer or explosive) sends waves into the ground; geophones record arrival times at increasing distances. Near the source the **direct wave** arrives first; beyond the **crossover distance**, the **refracted (head) wave**, which travels along a faster lower layer, overtakes it.',
    'On a **travel-time graph**, each segment is a straight line with **slope = 1 ÷ velocity**. For two layers (V1 above V2, V2 > V1), the depth to the boundary is **z = (xc ÷ 2) × √[(V2 − V1) ÷ (V2 + V1)]**, where xc is the crossover distance. Critical refraction happens at an angle where sin ic = V1 ÷ V2.',
    'In **seismic reflection**, waves bouncing off boundaries return to the surface; depth = **velocity × two-way time ÷ 2**. Reflection profiles image layers, folds, faults and oil traps and are the main tool of petroleum exploration. Refraction is used for depth to bedrock, the water table and engineering sites.',
  ], 'agl-refraction', 'Slope of a travel-time line is 1 ÷ velocity: the flatter line is the faster layer.',
  ['On a refraction travel-time graph, a steeper segment means:', ['a slower layer', 'a faster layer', 'a deeper source', 'no layer'], 'Slope = 1 ÷ V.'],
  [['Crossover distance', 'The distance where direct and refracted waves arrive together.'], ['Two-way time', 'The time for a reflected wave to travel down and back.']],
  [
    { q: 'Direct waves travel at 1,000 m/s in soil and refracted waves at 3,000 m/s in bedrock; the crossover distance is 100 m. Find the depth to bedrock.', steps: ['√[(3,000 − 1,000) ÷ (3,000 + 1,000)] = √0.5 = **0.707**.', 'z = (100 ÷ 2) × 0.707 = **35 m**.'] },
  ]),
  L('agl-geophysics-2', 'agl-u6-geophysics', '6.2', 'Resistivity, gravity and magnetic surveys', 18, ['Applied'], [
    '**Electrical resistivity**: current is passed between two electrodes and the voltage measured between two others (a Wenner array uses four equally spaced electrodes; apparent resistivity ρa = 2πaR). Dry rock and fresh granite have high resistivity; **water-saturated** sediments, **clay** and conductive ores have **low resistivity**. Widely used to site boreholes in hard-rock areas.',
    '**Gravity surveys** measure small variations in g (in milligals). After corrections, a **Bouguer anomaly** shows density differences below: **positive** over dense bodies (basic intrusions, ore bodies), **negative** over light ones (granite plutons, salt domes, thick sediments in basins).',
    '**Magnetic surveys** detect variations in the field caused by magnetic minerals: strong highs over **magnetite-rich iron ore** and basic intrusions. Airborne magnetic surveys map the basement under cover, as over southern Cameroon’s iron formations.',
  ], 'agl-anomalies', 'Dense below means positive gravity anomaly; light below means negative.',
  ['A salt dome is detected by:', ['a negative gravity anomaly', 'a positive gravity anomaly', 'very high resistivity of seawater', 'a strong magnetic high'], 'Salt is less dense than surrounding rocks.'],
  [['Bouguer anomaly', 'A corrected gravity value showing density differences below the surface.'], ['Apparent resistivity', 'The resistivity calculated from a field survey.']],
  [
    { q: 'A Wenner survey with spacing a = 10 m measures a resistance R of 3 ohms. Find the apparent resistivity and interpret it.', steps: ['ρa = 2π × 10 × 3 = **188 ohm-metres**.', 'Moderate value: possibly **weathered or fractured rock with some water**, worth testing for a borehole.'] },
  ]),

  // ---------- 7. Ore genesis ----------
  L('agl-ores-1', 'agl-u6-ores', '7.1', 'Ores, grade and magmatic and hydrothermal deposits', 20, ['Applied'], [
    'An **ore** is rock from which a metal or mineral can be extracted **at a profit**. **Ore minerals** carry the metal; **gangue** minerals (quartz, calcite, barite) are waste. **Grade** is the concentration (per cent for iron and copper, grams per tonne for gold); the **cut-off grade** is the lowest grade worth mining, which changes with prices and costs. A **resource** is what is known to exist; a **reserve** is the part that is economic to mine.',
    'Concentration factor = ore grade ÷ average crustal abundance: copper must be concentrated about 100 times, gold about 1,000 times or more.',
    '**Magmatic deposits**: **segregation** of chromite or magnetite layers by crystal settling in layered intrusions; nickel sulphides that separate as immiscible liquids. **Hydrothermal deposits**: hot water from magmas or deep circulation dissolves metals and deposits them as it cools: **veins** (quartz with galena, sphalerite, chalcopyrite, gold), **stockworks** (networks of small veins) and **porphyry copper** deposits around granite intrusions.',
  ], 'agl-ore-types', 'An ore is an economic idea as much as a geological one.',
  ['Gangue is:', ['the worthless minerals mined with the ore', 'the richest ore', 'an ore of lead', 'a type of rock'], 'Separated and discarded.'],
  [['Ore', 'Rock from which a metal or mineral can be extracted at a profit.'], ['Cut-off grade', 'The lowest grade that can be mined profitably.'], ['Hydrothermal', 'Formed from hot water solutions.']],
  [
    { q: 'Copper averages about 0.006% in the crust. A deposit grades 0.6%. Find the concentration factor.', steps: ['0.6 ÷ 0.006 = **100**.', 'The copper has been **concentrated 100 times** above average crust.'] },
  ]),
  L('agl-ores-2', 'agl-u6-ores', '7.2', 'Sedimentary, placer and residual deposits; the ore minerals', 18, ['Applied'], [
    '**Placer deposits**: heavy, resistant minerals (gold, diamond, cassiterite, rutile, zircon) are concentrated by running water or waves where currents slow: inside river bends, behind bars, in gravels on bedrock. Much of the gold of eastern Cameroon is alluvial.',
    '**Residual deposits**: intense tropical weathering leaches soluble elements and leaves insoluble ones: **bauxite** (aluminium hydroxides such as gibbsite) and **laterite** (iron), and nickel-cobalt laterites over ultrabasic rocks. **Supergene enrichment** concentrates copper below the water table.',
    '**Sedimentary deposits**: **banded iron formations** (BIF) of the Precambrian; evaporites (salt, potash); phosphates.',
    'Ore minerals to know: **magnetite** Fe3O4 and **haematite** Fe2O3 (iron); **chalcopyrite** CuFeS2 (copper); **galena** PbS (lead); **sphalerite** ZnS (zinc); **cassiterite** SnO2 (tin); **bauxite** (aluminium); **native gold**.',
  ], 'agl-ore-minerals', 'Placers need dense, hard, insoluble minerals; residual deposits need insoluble elements and long tropical weathering.',
  ['Which mineral is an ore of zinc?', ['sphalerite', 'galena', 'cassiterite', 'chalcopyrite'], 'ZnS.'],
  [['Placer', 'A deposit of heavy minerals concentrated by moving water.'], ['Residual deposit', 'A deposit left after weathering removes other elements.'], ['Supergene enrichment', 'Concentration of metals near the water table by weathering solutions.']],
  [
    { q: 'Explain why gold collects on the inside of river bends and in cracks in the river bed.', steps: ['Gold is **very dense** (SG about 19) and does not weather.', 'On the inside of bends and in cracks the **current slows**.', 'Dense grains **settle first**, so gold is concentrated there: a **placer**.'] },
  ]),

  // ---------- 8. Fossil fuels ----------
  L('agl-fuels-1', 'agl-u6-fuels', '8.1', 'The petroleum system', 20, ['Applied'], [
    'A working **petroleum system** needs:\n- a **source rock**: organic-rich shale or marl in which plankton and algae were preserved in oxygen-poor water\n- **maturation**: burial heats the organic matter (kerogen); oil forms mainly at about **60 to 120 °C** (the **oil window**), gas at higher temperatures\n- **migration**: oil and gas, less dense than water, move upwards through permeable rocks and faults\n- a **reservoir rock**: porous and permeable (sandstone, fractured or reef limestone)\n- a **cap rock** (seal): impermeable shale or salt\n- a **trap**, formed before migration ends.',
    'In the trap, fluids separate by density: **gas** at the top, **oil**, then **water**. Exploration uses seismic reflection to find traps, then wells and **well logs** (gamma ray for shale, resistivity for oil and water, porosity logs) to test them.',
  ], 'agl-petroleum', 'Source, maturation, migration, reservoir, seal, trap: miss one and there is no field.',
  ['Oil forms mainly in a temperature window of about:', ['60 to 120 °C', '0 to 30 °C', '300 to 500 °C', 'over 1,000 °C'], 'Hotter makes gas.'],
  [['Source rock', 'A rock rich in organic matter that generates oil or gas.'], ['Oil window', 'The temperature range in which oil forms.'], ['Cap rock', 'An impermeable seal above a reservoir.']],
  [
    { q: 'With a geothermal gradient of 30 °C per km and a surface temperature of 25 °C, at what depths is the oil window?', steps: ['60 °C: (60 − 25) ÷ 30 = **1.2 km**.', '120 °C: (120 − 25) ÷ 30 = **3.2 km**.', '**Oil forms at roughly 1.2 to 3.2 km depth.**'] },
  ]),
  L('agl-fuels-2', 'agl-u6-fuels', '8.2', 'Traps, and the formation of coal', 18, ['Applied'], [
    '**Structural traps**: **anticlines** (oil at the crest beneath a seal); **fault traps** (a reservoir sealed against impermeable rock across a fault); **salt domes** (rising salt bends beds and seals them at its sides). In deltas such as the Niger Delta, **growth faults** and rollover anticlines trap much oil.',
    '**Stratigraphic traps**: a reservoir sealed by a change in rock type: a **pinch-out** of sandstone into shale, a **reef** buried in mud, or beds truncated beneath an **unconformity**.',
    '**Coal** forms from plant material in swamps where waterlogging stops decay. Burial and heat raise its **rank**: **peat → lignite → sub-bituminous → bituminous coal → anthracite**, with rising carbon content and falling moisture and volatiles. Coal seams record ancient deltas and swamps, as in the Carboniferous.',
  ], ['agl-traps', 'geol-oil-trap'], 'Structural traps come from deformation; stratigraphic traps come from deposition.',
  ['An oil reservoir sealed where sandstone thins out into shale is:', ['a stratigraphic (pinch-out) trap', 'an anticline trap', 'a fault trap', 'a salt dome'], 'A change in rock type.'],
  [['Structural trap', 'A trap formed by folding, faulting or salt movement.'], ['Stratigraphic trap', 'A trap formed by changes in rock type or unconformities.'], ['Coal rank', 'The degree of change from peat to anthracite.']],
  [
    { q: 'A well finds gas at 2,000 m, oil from 2,030 m and water below 2,080 m in an anticline. Describe the trap.', steps: ['Fluids are **layered by density**: gas, oil, water.', 'The gas-oil contact is at **2,030 m** and the oil-water contact at **2,080 m**.', '**An anticlinal trap with a 50 m oil column beneath a gas cap.**'] },
  ]),

  // ---------- 9. Ntem Complex ----------
  L('agl-ntem-1', 'agl-u6-ntem', '9.1', 'The Ntem Complex and the Congo Craton', 18, ['Cameroon'], [
    'The **Ntem Complex** of southern Cameroon is the north-western part of the **Congo Craton**, a block of continental crust that has been stable since the **Archaean** (more than 2,500 million years ago). It extends into Gabon and Equatorial Guinea.',
    'Its rocks include **charnockites** (orthopyroxene-bearing granitic rocks formed at granulite facies), **tonalitic and granitic gneisses**, younger potassic granites, **greenstone belts** of metamorphosed volcanic and sedimentary rocks, and **banded iron formations**. Dolerite dykes cut the complex.',
    'At its north-western edge the **Nyong unit** was reworked about **2,000 million years ago** (the Eburnean event); to the north the craton is overthrust by the Pan-African belt. High-grade granulites show that deep crust has been uplifted and exposed by long erosion.',
  ], 'geol-cameroon-map', 'Ntem = Archaean, cratonic, south; Pan-African = younger, folded, centre and north.',
  ['The Ntem Complex belongs to the:', ['Congo Craton', 'Pan-African belt', 'Benue Trough', 'Cameroon Volcanic Line'], 'Archaean nucleus.'],
  [['Craton', 'An old, stable part of a continent.'], ['Charnockite', 'A granitic rock with orthopyroxene, formed at very high grade.'], ['Greenstone belt', 'A belt of metamorphosed volcanic and sedimentary rocks in a craton.']],
  [
    { q: 'Why is the south of Cameroon geologically "stable" compared with the west?', steps: ['The Ntem Complex is an **Archaean craton**, cold, thick and strong.', 'It has **not been folded or melted** for over 2,000 million years.', 'The west lies on the **younger Pan-African belt** and the **active volcanic line**.'] },
  ]),
  L('agl-ntem-2', 'agl-u6-ntem', '9.2', 'Banded iron formations and the iron ores of the south', 18, ['Cameroon'], [
    '**Banded iron formations** (BIF) are Precambrian sediments of alternating thin layers of **iron oxides** (magnetite, haematite) and **chert** (silica), deposited when iron dissolved in oxygen-poor oceans was precipitated as oxygen became available.',
    'In southern Cameroon, metamorphosed BIF (**itabirites**) occur in greenstone belts of the Ntem Complex and nearby units. Where weathering has removed silica, the iron is enriched to **high-grade haematite** near the surface. Major deposits include **Mbalam** (East region, near the Congo border) and **Nkout** (South region).',
    'Exploration uses **airborne magnetic surveys** (magnetite gives strong anomalies), drilling and grade analysis. Development needs large investment in a **railway and deep-water port** (Kribi) because iron ore is a bulk, low-value-per-tonne commodity.',
  ], 'agl-bif', 'BIF iron ore is upgraded by weathering: the richest ore is often near the surface.',
  ['Banded iron formations are layers of iron oxides and:', ['chert', 'coal', 'salt', 'mica'], 'Silica-rich layers.'],
  [['Banded iron formation', 'A Precambrian rock of alternating iron-oxide and chert layers.'], ['Itabirite', 'Metamorphosed banded iron formation.']],
  [
    { q: 'An itabirite averages 35% iron at depth but 60% at the surface. Explain the difference.', steps: ['Near the surface, **tropical weathering dissolves and removes silica** (chert).', 'Iron oxides are **left behind**, concentrated.', '**Supergene/residual enrichment** raises the grade to about 60% near the surface.'] },
  ]),

  // ---------- 10. Pan-African ----------
  L('agl-panafrican-1', 'agl-u6-panafrican', '10.1', 'The Central African Fold Belt', 20, ['Cameroon'], [
    'Most of Cameroon’s basement is the **Central African Fold Belt**, formed in the **Pan-African orogeny** about **600 million years ago** (Neoproterozoic), when continental blocks collided to assemble **Gondwana**. It lies north of the Congo Craton.',
    'Main domains:\n- the **southern (Yaoundé) domain**: metamorphosed sediments (schists, gneisses, high-pressure granulites with garnet and kyanite) thrust southwards as nappes onto the craton\n- the **Adamawa-Yadé domain** in the centre: older crust reworked in the orogeny, with many granites\n- the **western and northern domains**, with Neoproterozoic volcanic and sedimentary rocks and granitoids.',
    'A major ductile shear zone, the **Central Cameroon Shear Zone**, runs ENE across the country and continued into Brazil before the Atlantic opened.',
  ], 'agl-cmr-units', 'Pan-African = about 600 Ma, the collision that built Gondwana.',
  ['The Pan-African orogeny occurred about:', ['600 million years ago', '66 million years ago', '2.9 billion years ago', '200 million years ago'], 'Neoproterozoic.'],
  [['Orogeny', 'A mountain-building episode of deformation and metamorphism.'], ['Nappe', 'A large sheet of rock moved far along a thrust.']],
  [
    { q: 'Garnet-kyanite gneisses occur in the Yaoundé group. What do they show about its history?', steps: ['Kyanite and garnet: **high pressure and fairly high temperature**.', 'The rocks were buried **deep in a collision zone**.', 'They were then **thrust and uplifted**, and exposed by erosion.'] },
  ]),
  L('agl-panafrican-2', 'agl-u6-panafrican', '10.2', 'Pan-African granites and shear zones', 18, ['Cameroon'], [
    'Granites of the belt are grouped by timing: **syn-tectonic** granites (intruded during deformation, foliated, often aligned with the shear zones) and **late- to post-tectonic** granites (undeformed, cutting the earlier structures). Many hills and inselbergs of the centre and west are such granites.',
    'The **Central Cameroon Shear Zone** (with branches such as the Foumban and Sanaga zones) moved in a **ductile** way at depth, forming **mylonites** with strong lineations. Shear zones channelled granite magmas and later controlled the line of some rivers and the Cretaceous basins.',
    'Mineral potential: gold in quartz veins and shear zones (East region), and tin, tungsten and rare metals linked to late granites.',
  ], 'agl-panafrican', 'A foliated granite is syn-tectonic; an unfoliated one that cuts the foliation is younger.',
  ['A granite that cuts the foliation of surrounding gneisses and is itself unfoliated is:', ['late- to post-tectonic', 'syn-tectonic', 'older than the gneiss', 'a sediment'], 'Cross-cutting and undeformed.'],
  [['Syn-tectonic', 'Formed during deformation.'], ['Mylonite', 'A fine, banded rock formed by ductile shearing.']],
  [
    { q: 'In the field you find a foliated granite whose foliation parallels a nearby shear zone, cut by an unfoliated granite dyke. Order the events.', steps: ['**Syn-tectonic granite** intruded and deformed with the shear zone.', '**Shearing** continued, forming the foliation.', 'Later, the **unfoliated dyke** cut across: post-tectonic.'] },
  ]),
];
