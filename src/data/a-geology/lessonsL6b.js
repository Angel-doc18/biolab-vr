// A Level Geology lessons (0755), Lower Sixth, Terms 2 and 3: sediment
// transport and diagenesis, sedimentary classification and environments,
// stratigraphy, metamorphic agents, zones and facies, metamorphic rocks,
// stress, strain and folds, faults and structure contours, palaeontology,
// geological maps and fieldwork, and the revision clinics.

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

export const LESSONS_GLL6B = [
  // ---------- 10. Transport and diagenesis ----------
  L('agl-sediments-1', 'agl-l6-sediments', '10.1', 'Sediment transport and the Hjulström curve', 20, ['Petrology'], [
    'Weathering produces **clasts** (rock and mineral fragments) and **ions in solution**. Water moves clasts by **traction** (rolling and sliding), **saltation** (bouncing), and **suspension**; dissolved ions travel in **solution**.',
    'The **Hjulström curve** (Filip Hjulström, 1935) plots flow velocity against grain size on logarithmic axes:\n- the **erosion curve**: the velocity needed to pick grains up\n- the **settling (deposition) curve**: the velocity below which grains are dropped.\nGrains of about **0.1 to 0.5 mm** (fine to medium sand) are easiest to erode. **Clay and silt** need higher velocities to erode because the particles are **cohesive**, yet once moving they stay in suspension until the water is almost still. Gravel needs high velocities because the grains are heavy.',
    'As a current slows, it drops the coarsest grains first, so sediments are **sorted** by size downstream; transport also **rounds** grains by abrasion. **Grain-size analysis**: sieve a dried sample through a stack of sieves, weigh each fraction, and plot a cumulative curve to measure sorting.',
  ], 'agl-hjulstrom', 'Read the curve vertically at one grain size: above the top curve it is eroded, between the curves transported, below the lower curve deposited.',
  ['On the Hjulström curve, clay needs a high velocity to be eroded because:', ['its particles are cohesive', 'it is coarse', 'it is heavy', 'it is soluble'], 'They stick together.'],
  [['Saltation', 'Transport of grains in short jumps along the bed.'], ['Sorting', 'The range of grain sizes in a sediment: well sorted means similar sizes.']],
  [
    { q: 'A river flowing at 50 cm/s carries sand, silt and pebbles of 20 mm. It slows to 5 cm/s. Which grains are deposited?', steps: ['At 5 cm/s, the settling curve shows **pebbles and medium to coarse sand** are deposited.', '**Fine silt and clay stay in suspension**, as their settling velocity is lower still.', 'Result: a **sorted** deposit, coarse first, with mud carried further.'] },
  ]),
  L('agl-sediments-2', 'agl-l6-sediments', '10.2', 'Diagenesis: from sediment to rock', 16, ['Petrology'], [
    '**Diagenesis** covers all the changes that turn loose sediment into **sedimentary rock** at low temperature and pressure (lithification), before metamorphism begins.',
    'Processes:\n- **compaction**: burial squeezes grains together, expelling water and reducing porosity, especially in muds\n- **cementation**: minerals precipitate from pore water and bind grains (silica, calcite, iron oxides such as haematite, which colours red sandstones)\n- **recrystallisation**: unstable minerals change to stable forms (aragonite shells to calcite)\n- **authigenesis**: new minerals grow in the sediment (glauconite, pyrite, clays)\n- **pressure solution**: grains dissolve at contacts, forming stylolites in limestone.',
    'Diagenesis lowers porosity and permeability, which matters greatly for groundwater and oil reservoirs.',
  ], 'agl-diagenesis', 'Compaction mostly affects mud; cementation mostly affects sand.',
  ['Haematite cement gives sandstone a:', ['red colour', 'green colour', 'white colour', 'black colour'], 'Iron oxide.'],
  [['Diagenesis', 'Low-temperature changes that turn sediment into rock.'], ['Cementation', 'Binding of grains by minerals precipitated from pore water.'], ['Authigenic mineral', 'A mineral that grows within the sediment after deposition.']],
  [
    { q: 'A sand with 40% porosity becomes a sandstone with 15% porosity. Suggest two causes and one consequence.', steps: ['**Compaction** packed grains more tightly.', '**Cementation** filled part of the pore space.', 'Consequence: **lower porosity and permeability**, so it holds and yields less water or oil.'] },
  ]),

  // ---------- 11. Classification and environments ----------
  L('agl-environments-1', 'agl-l6-environments', '11.1', 'Classifying sedimentary rocks: the Udden-Wentworth scale', 18, ['Petrology'], [
    'Clastic rocks are named by grain size on the **Udden-Wentworth scale**: **boulder** over 256 mm, **cobble** 64 to 256 mm, **pebble** 4 to 64 mm, **granule** 2 to 4 mm (rocks: conglomerate if rounded, breccia if angular); **sand** 1⁄16 to 2 mm (sandstone); **silt** 1⁄256 to 1⁄16 mm (siltstone); **clay** under 1⁄256 mm (claystone, shale if fissile). The **phi scale** writes size as φ = −log2(d in mm): 1 mm is φ 0, 2 mm is φ −1, 1⁄4 mm is φ 2.',
    'Sandstones are subdivided by composition: **quartz arenite** (over 90% quartz, mature), **arkose** (over 25% feldspar, immature, near granite sources), **greywacke** (poorly sorted with much muddy matrix, often turbidites).',
    '**Chemical** rocks precipitate from solution (rock salt, gypsum, oolitic limestone, chert); **biogenic** rocks are made of organic remains (shelly limestone, chalk, coal).',
  ], 'agl-wentworth', 'Each Wentworth boundary is a doubling: 1⁄16, 1⁄8, 1⁄4, 1⁄2, 1, 2, 4 mm.',
  ['A rock of rounded clasts 10 to 50 mm across is a:', ['conglomerate', 'breccia', 'sandstone', 'shale'], 'Pebbles, rounded.'],
  [['Udden-Wentworth scale', 'The standard scale of grain sizes for sediments.'], ['Arkose', 'A feldspar-rich sandstone.'], ['Greywacke', 'A poorly sorted sandstone with a muddy matrix.']],
  [
    { q: 'Convert grain sizes of 4 mm and 0.125 mm to phi units and name each class.', steps: ['4 mm: φ = −log2 4 = **−2**: the **granule/pebble** boundary.', '0.125 mm = 1⁄8 mm: φ = −log2(1⁄8) = **3**: **fine sand**.'] },
  ]),
  L('agl-environments-2', 'agl-l6-environments', '11.2', 'Sedimentary structures and depositional environments', 20, ['Petrology'], [
    'Structures record conditions at deposition:\n- **cross-bedding**: migrating ripples or dunes; the foresets dip down-current\n- **ripple marks**: symmetrical (waves) or asymmetrical (currents)\n- **graded bedding**: coarse to fine upwards, from waning flows such as turbidity currents\n- **desiccation cracks** and **raindrop prints**: exposure to air\n- **way-up criteria**: graded beds, cross-bed truncation and cracks show which way was up in folded rocks.',
    'Environments and their rocks:\n- **fluvial** (rivers): channel sandstones and conglomerates with cross-beds, overbank muds\n- **deltaic**: coarsening-upward sequences of mud, sand and coal-bearing tops\n- **shallow marine**: shelly limestones, well-sorted sands, ripples\n- **deep marine**: turbidites (graded greywackes), shales, chert\n- **lacustrine** (lakes): laminated muds, evaporites in dry climates\n- **aeolian** (desert wind): well-rounded, well-sorted, frosted red sands with large cross-beds.',
  ], 'agl-environments', 'Use several clues together: grain size, sorting, structures and fossils.',
  ['Large-scale cross-beds in well-rounded, frosted, red quartz sand suggest:', ['a desert dune environment', 'a deep ocean', 'a glacier', 'a coral reef'], 'Aeolian deposits.'],
  [['Cross-bedding', 'Inclined layers within a bed formed by migrating ripples or dunes.'], ['Turbidite', 'A graded bed laid down by a turbidity current.'], ['Way-up criteria', 'Features showing the original top of a bed.']],
  [
    { q: 'A sequence passes upwards from shale, to siltstone, to cross-bedded sandstone, capped by a coal seam. Interpret it.', steps: ['Grain size **increases upwards**: a coarsening-upward sequence.', 'Mud of the prodelta, then delta-front silts and sands.', 'Coal at the top: **swamps on the delta plain**.', '**A prograding delta.**'] },
  ]),

  // ---------- 12. Stratigraphy ----------
  L('agl-stratigraphy-1', 'agl-l6-stratigraphy', '12.1', 'The principles of stratigraphy', 18, ['History'], [
    'Nicolaus Steno set out three principles in **1669**:\n- **superposition**: in an undisturbed sequence, each bed is younger than the one below\n- **original horizontality**: sediments are laid down in nearly horizontal layers, so tilted or folded beds were disturbed later\n- **lateral continuity**: a bed extends sideways until it thins out or meets a barrier.',
    'Further principles:\n- **cross-cutting relationships**: a dyke, fault or erosion surface is younger than the rocks it cuts\n- **included fragments**: pieces of one rock inside another are older than the host\n- **faunal succession**: fossils follow one another in a definite order, so beds can be matched by their fossils (William Smith, whose geological map of England and Wales appeared in **1815**).',
    'With these principles a **relative** order of events can be worked out from any section, even without absolute dates.',
  ], 'agl-strat-laws', 'Work from the bottom of the section upwards, then fit in what cuts across.',
  ['A fault that cuts beds A, B and C but is covered by bed D is:', ['younger than C and older than D', 'older than A', 'younger than D', 'the same age as B'], 'Cross-cutting and superposition.'],
  [['Superposition', 'Younger beds lie on top of older ones in an undisturbed sequence.'], ['Faunal succession', 'Fossils occur in a definite, recognisable order.']],
  [
    { q: 'A granite contains fragments of schist, and is cut by a basalt dyke. Put granite, schist and dyke in order.', steps: ['Schist fragments are **included** in the granite: **schist is older**.', 'The dyke **cuts** the granite: **dyke is younger**.', '**Order: schist, granite, dyke.**'] },
  ]),
  L('agl-stratigraphy-2', 'agl-l6-stratigraphy', '12.2', 'Unconformities and correlation', 18, ['History'], [
    'An **unconformity** is a surface of erosion or non-deposition separating younger rocks from older ones; it represents missing time.\n- **angular unconformity**: older beds were tilted or folded and eroded before younger beds were laid on them (James Hutton’s Siccar Point, 1788)\n- **disconformity**: an erosion surface between parallel beds\n- **nonconformity**: sedimentary rocks resting on eroded igneous or metamorphic rocks.',
    '**Correlation** matches rocks of the same age from place to place:\n- **lithostratigraphy**: by rock type and sequence, over short distances (rock types change laterally)\n- **biostratigraphy**: by index fossils, over long distances\n- **chronostratigraphy**: by absolute ages and marker beds such as volcanic ash layers.',
    'On maps, an unconformity shows as younger beds cutting across the outcrops of older beds (**overstep**).',
  ], 'agl-unconformity', 'An angular unconformity records four events: deposition, tilting, erosion, deposition.',
  ['Sandstone lying on an eroded granite surface is an example of:', ['a nonconformity', 'a disconformity', 'an angular unconformity between sediments', 'a fault'], 'Sediment on crystalline rock.'],
  [['Unconformity', 'A buried erosion surface representing missing time.'], ['Correlation', 'Matching rocks of the same age between places.']],
  [
    { q: 'List the events shown by tilted shales overlain, across an erosion surface, by horizontal limestones.', steps: ['Deposition of **shales**.', '**Tilting** (and uplift).', '**Erosion** of the tilted shales.', 'Subsidence and deposition of **horizontal limestones**: an **angular unconformity**.'] },
  ]),

  // ---------- 13. Metamorphism ----------
  L('agl-metamorphism-1', 'agl-l6-metamorphism', '13.1', 'The agents of metamorphism', 18, ['Petrology'], [
    '**Metamorphism** is the change in mineralogy and texture of a rock in the **solid state** in response to changes in temperature, pressure and fluids, between diagenesis (below about 200 °C) and melting.',
    'Agents:\n- **temperature**: rises with depth along the **geothermal gradient** (about 25 to 30 °C per km in continental crust), and locally near intrusions; it drives reactions and recrystallisation\n- **lithostatic (confining) pressure**: equal in all directions from the weight of overlying rock, about 0.03 GPa per km; favours dense minerals\n- **directed (differential) stress**: greater in one direction, at plate collisions; aligns platy minerals to form **foliation**\n- **chemically active fluids**: water and CO2 carry ions and speed reactions; when they change the bulk composition the process is **metasomatism**\n- **time**: slow reactions need millions of years.',
  ], 'agl-meta-agents', 'Heat changes the minerals; directed stress changes the texture.',
  ['At a gradient of 25 °C per km and a surface temperature of 25 °C, the temperature at 20 km is about:', ['525 °C', '500 °C', '250 °C', '1,000 °C'], '25 + 25 × 20.'],
  [['Geothermal gradient', 'The rate at which temperature rises with depth.'], ['Metasomatism', 'Metamorphism that changes a rock’s bulk chemical composition through fluids.'], ['Foliation', 'A planar fabric of aligned minerals.']],
  [
    { q: 'Estimate the lithostatic pressure at 15 km depth, if rock density is 2,700 kg/m³ (g = 9.8 m/s²).', steps: ['P = ρgh = 2,700 × 9.8 × 15,000 Pa.', '= **3.97 × 10⁸ Pa**, about **0.4 GPa** (4 kbar).', 'About **0.03 GPa per km**, as expected.'] },
  ]),
  L('agl-metamorphism-2', 'agl-l6-metamorphism', '13.2', 'Types of metamorphism and their settings', 16, ['Petrology'], [
    '**Contact (thermal) metamorphism**: heat from an intrusion bakes the country rock in a **metamorphic aureole**; pressure is low and stress small, so rocks are non-foliated (hornfels, marble, quartzite). Grade falls away from the contact.',
    '**Regional (dynamothermal) metamorphism**: high temperature and directed stress over large areas in **mountain belts** at convergent margins; produces foliated slates, schists and gneisses.',
    '**Dynamic (cataclastic) metamorphism**: crushing and shearing along **fault and shear zones**: fault breccia near the surface, **mylonite** at depth.',
    '**Burial metamorphism**: low-grade changes in thick sedimentary piles. **Hydrothermal metamorphism**: hot fluids alter rocks, especially at mid-ocean ridges. **Shock metamorphism**: meteorite impacts.',
  ], 'geol-metamorphism', 'Contact: small and hot. Regional: big, hot and squeezed. Dynamic: squeezed and sheared.',
  ['Mylonite is produced by:', ['dynamic metamorphism in shear zones', 'contact metamorphism', 'weathering', 'diagenesis'], 'Ductile shearing.'],
  [['Metamorphic aureole', 'The zone of contact metamorphism around an intrusion.'], ['Mylonite', 'A fine-grained, banded rock formed by ductile shearing.']],
  [
    { q: 'A granite intruded mudstone. Describe how the rocks change towards the contact.', steps: ['Far away: **unaltered mudstone**.', 'Closer: **spotted rock**, with new minerals growing.', 'At the contact: **hornfels**, hard, fine and non-foliated.', 'The width of the aureole depends on the **size and temperature of the intrusion**.'] },
  ]),

  // ---------- 14. Zones and facies ----------
  L('agl-facies-1', 'agl-l6-facies', '14.1', 'Index minerals and Barrow’s zones', 18, ['Petrology'], [
    'George Barrow, mapping metamorphosed mudrocks (pelites) in the **Scottish Highlands** from 1893, found that certain **index minerals** appear in a fixed order as grade increases:\n**chlorite → biotite → garnet → staurolite → kyanite → sillimanite**.',
    'An **isograd** is the line on a map where an index mineral first appears; the ground between isograds is a **zone** named after its index mineral. Isograds show how temperature (and pressure) varied across the metamorphic belt.',
    'Grade rises from **low** (chlorite, biotite: slates and phyllites) through **medium** (garnet, staurolite: schists) to **high** (kyanite, sillimanite: gneisses). The **Al2SiO5** minerals record conditions: **kyanite** at higher pressure, **andalusite** at lower pressure, **sillimanite** at the highest temperature; all three are stable together only at about **500 °C and 0.4 GPa**.',
  ], 'agl-barrow', 'A rock belongs to the zone of the highest-grade index mineral it contains.',
  ['A schist with garnet but no staurolite lies in the:', ['garnet zone', 'biotite zone', 'kyanite zone', 'chlorite zone'], 'Highest index mineral present.'],
  [['Index mineral', 'A mineral whose first appearance marks a grade of metamorphism.'], ['Isograd', 'A line joining points of equal metamorphic grade.']],
  [
    { q: 'Along a traverse, samples contain: A chlorite; B biotite; C garnet; D staurolite and garnet; E kyanite. Describe the change in grade.', steps: ['From A to E, the index minerals appear in **Barrow’s order**.', 'Grade **increases from A (low) to E (high)**.', 'Isograds lie between each pair of samples; **temperature rose towards E**.'] },
  ]),
  L('agl-facies-2', 'agl-l6-facies', '14.2', 'Metamorphic facies', 18, ['Petrology'], [
    'Pentti **Eskola** (from 1915) defined a **metamorphic facies** as the set of mineral assemblages formed in rocks of different composition under the **same range of pressure and temperature**. A facies is named after the assemblage in metamorphosed basalt.',
    'The main facies:\n- **zeolite** and **prehnite-pumpellyite**: very low grade\n- **greenschist**: low to moderate temperature (chlorite, epidote, actinolite)\n- **amphibolite**: moderate to high temperature (hornblende, plagioclase)\n- **granulite**: very high temperature, dry (pyroxenes; charnockites)\n- **blueschist**: high pressure, low temperature, in subduction zones (glaucophane)\n- **eclogite**: very high pressure (garnet and omphacite)\n- **hornfels** facies: low pressure, high temperature, in contact aureoles.',
    'Each tectonic setting follows its own P-T path: subduction zones give blueschist and eclogite; continental collision gives Barrovian greenschist-amphibolite-granulite sequences; intrusions give hornfels.',
  ], 'agl-facies', 'Blueschist and eclogite say "subduction"; hornfels says "intrusion".',
  ['Glaucophane-bearing blueschists point to:', ['high pressure and low temperature at a subduction zone', 'contact metamorphism', 'the surface', 'a desert'], 'Cold slabs sink fast.'],
  [['Metamorphic facies', 'Assemblages formed under the same range of pressure and temperature.'], ['Eclogite', 'A very high-pressure rock of garnet and omphacite, from basalt.']],
  [
    { q: 'A basalt is metamorphosed to an assemblage of hornblende and plagioclase. Which facies, and what conditions?', steps: ['Hornblende + plagioclase in a basic rock: **amphibolite facies**.', 'Conditions: **moderate to high temperature (about 500 to 700 °C) and moderate pressure**.', 'Typical of **regional metamorphism** in a collision belt.'] },
  ]),

  // ---------- 15. Metamorphic rocks ----------
  L('agl-metarocks-1', 'agl-l6-metarocks', '15.1', 'Metamorphic textures', 18, ['Petrology'], [
    'Under directed stress, platy and elongate minerals grow parallel, forming a **foliation**:\n- **slaty cleavage**: microscopic aligned clays and micas; the rock splits into thin flat sheets, often at an angle to bedding (slate)\n- **phyllitic** texture: fine micas giving a silky sheen (phyllite)\n- **schistosity**: visible aligned micas, often with porphyroblasts (schist)\n- **gneissose banding**: alternating light (quartz, feldspar) and dark (biotite, hornblende) bands (gneiss).',
    'Without directed stress, minerals grow as interlocking equal grains: a **granoblastic** (or hornfelsic) texture, as in marble, quartzite and hornfels. A **lineation** is a linear fabric of elongate minerals.',
    '**Porphyroblasts** (garnet, staurolite, andalusite) are large crystals grown during metamorphism; inclusions trapped in them can record the deformation history.',
  ], 'agl-meta-textures', 'Fine to coarse foliation: slaty, phyllitic, schistose, gneissose.',
  ['Which texture shows alternating light and dark mineral bands?', ['gneissose banding', 'slaty cleavage', 'granoblastic', 'vesicular'], 'High grade.'],
  [['Slaty cleavage', 'A fine foliation along which a rock splits into thin sheets.'], ['Granoblastic', 'A texture of interlocking equant grains without foliation.'], ['Porphyroblast', 'A large crystal grown during metamorphism.']],
  [
    { q: 'A rock splits along planes at 40° to faint colour bands. What does this show?', steps: ['The splitting planes are **slaty cleavage**; the faint bands are **original bedding**.', 'Cleavage formed by **directed stress**, independent of bedding.', '**The rock is a slate, and the angle helps locate fold hinges.**'] },
  ]),
  L('agl-metarocks-2', 'agl-l6-metarocks', '15.2', 'Metamorphic rocks and their protoliths', 18, ['Practical'], [
    'From **mudrock (shale)**, rising grade gives **slate → phyllite → schist → gneiss**.',
    'From other protoliths:\n- **limestone → marble**: interlocking calcite, fizzes in acid, may be white or streaked\n- **quartz sandstone → quartzite**: very hard, breaks across the grains, not along them\n- **basalt or dolerite → greenschist → amphibolite**, or **eclogite** at very high pressure\n- **granite → granite gneiss**\n- **mudrock in an aureole → hornfels**, hard and splintery.',
    'In practical work, test: foliation or not; grain size; minerals visible (micas, garnet, hornblende); reaction with acid; whether it breaks across grains. Then state the likely **protolith** and **grade**.',
  ], 'geol-meta-rocks', 'Quartzite breaks across its grains; sandstone breaks around them.',
  ['A hard, non-foliated rock of interlocking grains that fizzes in dilute acid is:', ['marble', 'quartzite', 'hornfels', 'gneiss'], 'Calcite.'],
  [['Protolith', 'The original rock before metamorphism.'], ['Hornfels', 'A hard, fine, non-foliated contact metamorphic rock.']],
  [
    { q: 'Identify: dark, foliated, with silvery mica flakes and red garnet crystals 3 mm across.', steps: ['Visible aligned micas: **schistosity**.', 'Garnet porphyroblasts: **garnet zone**, medium grade.', '**Garnet-mica schist, from a mudrock protolith.**'] },
  ]),

  // ---------- 16. Stress, strain, folds ----------
  L('agl-folds-1', 'agl-l6-folds', '16.1', 'Stress, strain and the behaviour of rocks', 18, ['Structure'], [
    '**Stress** is force per unit area; **strain** is the change in shape or size that results. Rocks respond in three ways:\n- **elastic**: strain is recoverable when the stress is removed\n- **ductile (plastic)**: permanent deformation without breaking, producing **folds** and foliation\n- **brittle**: the rock fractures, producing **joints** and **faults**.',
    'Ductile behaviour is favoured by **high temperature**, **high confining pressure**, **slow strain rates**, **fluids** and weak rock types (salt, mudrock). Brittle behaviour is favoured near the surface, in cold, strong rocks and at fast strain rates.',
    'Measuring planes: **strike** is the bearing of a horizontal line on the plane; **dip** is the angle of steepest slope, measured at right angles to the strike, with its direction. **Apparent dip** in a section not at right angles to strike is less than the true dip: **tan(apparent) = tan(true) × sin(angle between section and strike)**.',
  ], 'agl-stress-strain', 'Same rock, different depth: brittle near the surface, ductile deep down.',
  ['Rocks deep in a mountain belt tend to fold rather than fault because:', ['high temperature and confining pressure make them ductile', 'they are colder', 'stress is sudden', 'they are dry and brittle'], 'Ductile conditions.'],
  [['Strike', 'The direction of a horizontal line on an inclined plane.'], ['Dip', 'The maximum angle of slope of a plane, at right angles to strike.'], ['Apparent dip', 'The smaller dip seen in a section not perpendicular to strike.']],
  [
    { q: 'A bed dips 40° due east (strike N–S). What apparent dip is seen in a section trending NE–SW?', steps: ['Angle between section (NE) and strike (N) = **45°**.', 'tan(apparent) = tan 40° × sin 45° = 0.839 × 0.707 = **0.593**.', 'Apparent dip = **about 31°**, less than the true 40°.'] },
  ]),
  L('agl-folds-2', 'agl-l6-folds', '16.2', 'The geometry and classification of folds', 18, ['Structure'], [
    'Parts of a fold: the **hinge** (line of maximum curvature), the **limbs** on either side, the **axial plane** (or axial surface) joining the hinges of successive layers, and the **interlimb angle** between the limbs. The **crest** and **trough** are the highest and lowest points.',
    'An **anticline** has the oldest beds in its core; a **syncline** the youngest (antiform and synform describe shape only when age is unknown). By the axial plane: **upright** (vertical), **inclined**, **overturned** (both limbs dip the same way, one inverted), **recumbent** (nearly horizontal axial plane). By interlimb angle: **gentle** (180° to 120°), **open** (120° to 70°), **close** (70° to 30°), **tight** (under 30°), **isoclinal** (limbs parallel).',
    'Other forms: **monocline** (a single step), **chevron** folds (straight limbs, sharp hinges), **plunging** folds (inclined hinge line), **domes** and **basins**. On a map, a plunging fold’s outcrop closes in a V or U shape.',
  ], 'agl-fold-parts', 'Anticline: oldest in the core. Syncline: youngest in the core.',
  ['A fold whose limbs meet at 50° is:', ['close', 'gentle', 'open', 'isoclinal'], '70° to 30°.'],
  [['Hinge', 'The line of maximum curvature of a folded layer.'], ['Axial plane', 'The surface joining the hinges of successive layers.'], ['Interlimb angle', 'The angle between the two limbs of a fold.']],
  [
    { q: 'In a fold, both limbs dip west, at 60° and 30°, and the older beds lie in the core. Describe it.', steps: ['Both limbs dip the same way: **overturned**.', 'Oldest beds in the core: **anticline**.', '**An overturned anticline**, with one limb inverted.'] },
  ]),

  // ---------- 17. Faults ----------
  L('agl-faults-1', 'agl-l6-faults', '17.1', 'Joints and faults', 18, ['Structure'], [
    'A **joint** is a fracture with no displacement (columnar joints in basalt; joints in granite from unloading). A **fault** is a fracture along which the rocks have moved. On an inclined fault, the block above is the **hanging wall** and the block below the **footwall**.',
    'Types:\n- **normal fault**: hanging wall moves **down**; caused by **tension**; lengthens the crust\n- **reverse fault**: hanging wall moves **up**; caused by **compression**; a **thrust** is a reverse fault dipping under about 45°\n- **strike-slip fault**: horizontal movement along strike, **dextral** (right-lateral) or **sinistral** (left-lateral)\n- **oblique-slip**: a combination.',
    'The **throw** is the vertical displacement and the **heave** the horizontal displacement. Paired normal faults produce a **graben** (rift valley, a block let down) and **horsts** (raised blocks). Fault features: slickensides, fault breccia, gouge, drag folds.',
  ], 'agl-fault-types', 'Normal: hanging wall goes down. Reverse: hanging wall goes up.',
  ['In a reverse fault, the hanging wall:', ['moves up relative to the footwall', 'moves down', 'moves sideways only', 'does not move'], 'Compression.'],
  [['Hanging wall', 'The block above an inclined fault plane.'], ['Throw', 'The vertical displacement on a fault.'], ['Graben', 'A down-dropped block between two normal faults.']],
  [
    { q: 'A coal seam is at 120 m depth on one side of a vertical-looking fault and 170 m on the other. The deeper side is the hanging wall. Name the fault and its throw.', steps: ['Throw = 170 − 120 = **50 m**.', 'Hanging wall is **downthrown**: a **normal fault**.', 'It formed under **tension**.'] },
  ]),
  L('agl-faults-2', 'agl-l6-faults', '17.2', 'Structure contours: dip and fault throw on maps', 20, ['Structure'], [
    '**Structure contours** are lines joining points of **equal height on a geological surface** (a bed boundary, fault or unconformity). They are drawn by joining points where the boundary crosses topographic contours of the same height.',
    'For a planar dipping surface, structure contours are straight, parallel and evenly spaced. Their **direction is the strike**; they fall in the **direction of dip**; and **tan(dip) = vertical interval ÷ horizontal spacing** (both in the same units).',
    'Across a fault, the same bed has structure contours offset in height: the **throw** is the height difference of the bed’s structure contours at the same place on either side. Where a bed’s structure contour has the same height as the ground contour, the bed crops out there.',
  ], 'agl-structure-contours', 'Draw structure contours in pencil, label their heights, and check that they are parallel and equally spaced.',
  ['Structure contours 50 m apart in height are spaced 100 m apart on the map. The dip is about:', ['27°', '63°', '45°', '11°'], 'tan(dip) = 0.5.'],
  [['Structure contour', 'A line joining points of equal height on a geological surface.']],
  [
    { q: 'A sandstone base crops out at 300 m height at point A and at 200 m at point B, 400 m due east of A, with strike N–S. Find the dip.', steps: ['Vertical interval = **100 m**; horizontal distance perpendicular to strike = **400 m**.', 'tan(dip) = 100 ÷ 400 = **0.25**.', 'Dip = **about 14° to the east**.'] },
  ]),

  // ---------- 18. Palaeontology ----------
  L('agl-fossils-1', 'agl-l6-fossils', '18.1', 'Taphonomy and modes of fossilisation', 18, ['History'], [
    '**Taphonomy** (a term coined by Ivan Efremov in 1940) studies what happens to an organism from death to discovery: decay, scavenging, transport, burial and diagenesis. Preservation is favoured by **hard parts**, **rapid burial**, **low oxygen** and fine sediment.',
    'Modes of fossilisation:\n- **unaltered** remains: shells, bones, insects in amber, mammoths in ice\n- **permineralisation** (petrification): minerals fill pores (petrified wood)\n- **replacement**: the original material is dissolved and replaced (by silica, pyrite or calcite)\n- **recrystallisation**: aragonite shells recrystallise to calcite, losing fine structure\n- **carbonisation**: a film of carbon remains (leaves, graptolites)\n- **moulds and casts**: an external or internal mould left in rock, later filled to make a cast.',
    '**Body fossils** are parts of organisms; **trace fossils** record activity: tracks, trails, burrows, borings and coprolites. Trace fossils are found in place and show behaviour and environment.',
  ], 'geol-fossils', 'Hard parts plus fast burial in fine sediment give the best fossils.',
  ['Petrified wood is an example of:', ['permineralisation', 'carbonisation', 'an unaltered remain', 'a trace fossil'], 'Minerals fill the cells.'],
  [['Taphonomy', 'The study of processes from death to fossilisation.'], ['Trace fossil', 'Evidence of an organism’s activity, such as a burrow.'], ['Cast', 'A filling of a mould that copies the original shape.']],
  [
    { q: 'An ammonite in a shale is preserved as golden pyrite. Explain the preservation and the environment.', steps: ['The shell was **replaced by pyrite** (iron sulphide).', 'Pyrite forms where **sulphate-reducing bacteria** live in **oxygen-poor** mud.', '**So the sea floor was poorly oxygenated: a quiet, deep or stagnant basin.**'] },
  ]),
  L('agl-fossils-2', 'agl-l6-fossils', '18.2', 'Fossils as tools: dating and environments', 16, ['History'], [
    'An **index (zone) fossil** has a **short time range**, a **wide geographical distribution**, is **abundant** and **easy to identify**: graptolites (Ordovician and Silurian), ammonites (Jurassic and Cretaceous), trilobites (Cambrian). A **biozone** is a body of rock defined by its fossil content.',
    '**Environmental indicators** (facies fossils): reef corals point to warm, clear, shallow seas; thick-shelled bivalves to high-energy shores; fine burrows and delicate fossils to quiet water; plant remains and coal to swamps.',
    'Fossils may be **in place** (a **life assemblage**) or **transported** (a **death assemblage**, broken and sorted); **derived** fossils are eroded from older rocks and redeposited, so they can mislead dating.',
  ], 'agl-fossilisation', 'A death assemblage tells you about currents as much as about life.',
  ['A good index fossil must have:', ['a short time range and a wide distribution', 'a long time range', 'a local distribution', 'a soft body'], 'For correlation.'],
  [['Index fossil', 'A fossil used to date and correlate rocks.'], ['Biozone', 'A body of rock defined by its fossils.'], ['Derived fossil', 'A fossil eroded from older rock and redeposited.']],
  [
    { q: 'A limestone contains broken, sorted shell fragments of many species and no burrows. Is it a life or death assemblage, and what does it show?', steps: ['Broken, sorted shells: **death assemblage**.', 'Transported by **currents or waves**.', '**A high-energy shallow environment**, not the place where the animals lived.'] },
  ]),

  // ---------- 19. Maps and fieldwork ----------
  L('agl-maps-1', 'agl-l6-maps', '19.1', 'Outcrop patterns and the V-rule', 20, ['Practical'], [
    'Outcrop patterns depend on **dip** and **topography**:\n- **horizontal** beds: boundaries follow the topographic contours\n- **vertical** beds: straight outcrops whatever the relief\n- **dipping** beds: boundaries cross contours; the gentler the dip, the more the outcrop bends with relief.',
    'The **V-rule** in valleys: beds **dipping upstream** form Vs pointing **upstream**; beds **dipping downstream** more steeply than the valley floor form Vs pointing **downstream**; beds dipping downstream less steeply than the valley floor form Vs pointing upstream; horizontal beds form Vs parallel to the contours; vertical beds form no V.',
    'Folds on maps: **older beds in the core** mean an eroded anticline; younger beds in the core a syncline. A **three-point problem** uses the heights of one bed at three points to draw structure contours and find strike and dip.',
  ], 'agl-v-rule', 'The V of a dipping bed points in the direction of dip, except in the rare case of a gentle downstream dip.',
  ['Beds that dip upstream form outcrop Vs that point:', ['upstream', 'downstream', 'nowhere', 'along the contours'], 'The V-rule.'],
  [['Outcrop', 'The area where a rock unit appears at the surface (exposed or under soil).'], ['V-rule', 'The rule relating outcrop Vs in valleys to the direction of dip.']],
  [
    { q: 'A bed is at 500 m at A, 400 m at B and 300 m at C. A and C are 1,000 m apart. Outline the three-point method.', steps: ['On line AC, the **400 m point** lies halfway (500 to 300 m): mark it D.', 'Join **B to D**: this is the **400 m structure contour**, the strike.', 'Draw parallel contours through A (500 m) and C (300 m).', 'Measure their spacing at right angles: **tan(dip) = 100 ÷ spacing**.'] },
  ]),
  L('agl-maps-2', 'agl-l6-maps', '19.2', 'Drawing cross-sections and writing a field report', 20, ['Practical'], [
    'Steps for a cross-section:\n- draw the **topographic profile** along the line of section using the contours, with a chosen vertical scale\n- mark where each geological boundary crosses the line\n- use structure contours or dips to draw each boundary at the correct angle (correct for **vertical exaggeration** and apparent dip)\n- add faults, intrusions and unconformities in their age order\n- add a **title, scales, orientation of the section and a key**.',
    '**Vertical exaggeration** = horizontal scale ÷ vertical scale. If the vertical scale is larger, dips appear steeper: tan(drawn dip) = VE × tan(true dip).',
    'A **field report** records for each locality: grid reference, rock description, dip and strike readings, sketches, samples taken and photographs, then a summary of the geological history. Field data are the evidence on which maps rest.',
  ], 'agl-section-steps', 'With vertical exaggeration, never draw dips at their true angle: steepen them.',
  ['With a horizontal scale of 1:10,000 and a vertical scale of 1:2,000, the vertical exaggeration is:', ['5', '0.2', '20', '2'], '10,000 ÷ 2,000.'],
  [['Vertical exaggeration', 'The ratio of horizontal to vertical scale on a section.'], ['Topographic profile', 'The outline of the ground surface along a line.']],
  [
    { q: 'A bed dips 20°. Draw it on a section with vertical exaggeration 3. At what angle?', steps: ['tan(drawn) = 3 × tan 20° = 3 × 0.364 = **1.09**.', 'Drawn dip = **about 47°**.', 'So exaggerated sections make dips look much steeper.'] },
  ]),

  // ---------- 20. Clinics ----------
  L('agl-clinics-1', 'agl-l6-papers', '20.1', 'Paper 1 sprint drills', 16, ['MCQ'], [
    'Paper 1 tests the whole syllabus quickly. High-yield topics in the Lower Sixth: Miller indices and crystal systems; silicate structures and cleavages; the Mohs scale; Bowen’s series; QAPF and silica limits; the Hjulström curve and Wentworth scale; stratigraphic principles; Barrow’s zones and facies; fold and fault geometry; structure contours and the V-rule.',
    'Technique:\n- work calculations on paper first (Miller indices, dips, spreading rates, vertical exaggeration)\n- eliminate clearly wrong options\n- watch for "not" and "except" in the stem\n- keep a steady pace and return to hard items.',
    'After each drill, record the error type: knowledge gap, misreading, or slip in calculation, and fix that specific weakness.',
  ], 'agl-paper-plan', 'Calculate first, then look at the options.',
  ['A face with intercepts 1, 2 and 2 has Miller indices:', ['(211)', '(122)', '(111)', '(100)'], 'Reciprocals 1, 1⁄2, 1⁄2, times 2.'],
  [['Distractor', 'A wrong option built from a common mistake.']],
  [
    { q: 'Answer quickly: a monoclinic mineral with two cleavages at 87° and 93°, dark green, in a gabbro.', steps: ['Cleavages near 90°: **pyroxene**.', 'Monoclinic, dark, in gabbro: **augite**.'] },
  ]),
  L('agl-clinics-2', 'agl-l6-papers', '20.2', 'Paper 2 clinics and the promotion examination', 18, ['Method'], [
    'Long questions combine skills: drawing and interpreting a **phase diagram**, describing a **thin section** or specimen, constructing a **cross-section** from a map, and writing a **geological history**.',
    'For a geological history from a map or section:\n- list events from **oldest to youngest**\n- for each, give the **evidence** (superposition, cross-cutting, included fragments, unconformity, metamorphic aureole)\n- include deposition, folding, faulting, intrusion, uplift and erosion, and present-day weathering.',
    'The promotion examination covers the whole Lower Sixth. Revise each topic with its key diagram and one calculation, and practise timed answers.',
  ], 'geol-section', 'Every event in a history needs its evidence written beside it.',
  ['In a geological history, the last event is usually:', ['present-day erosion and weathering', 'the first deposition', 'the oldest intrusion', 'folding'], 'Youngest last.'],
  [['Geological history', 'The sequence of events that produced the rocks of an area, oldest first.']],
  [
    { q: 'A section shows beds 1 to 3 tilted, an unconformity, horizontal beds 4 and 5, and a dyke cutting all beds. Write the history.', steps: ['Deposition of **beds 1, 2, 3** (superposition).', '**Tilting** and uplift.', '**Erosion**, forming the unconformity.', 'Deposition of **beds 4 and 5**.', 'Intrusion of the **dyke**, which cuts all beds.', 'Uplift and **present-day erosion**.'] },
  ]),
];
