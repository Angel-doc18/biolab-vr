// Geology lessons for Form 4, terms 2 and 3: sedimentary and metamorphic
// petrology, earth-surface hazards and practical rock identification.
// Original text written for this app, with Cameroonian examples.

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

export const LESSONS_4B = [
  // ---------- Genesis of sediments ----------
  L('gl-sedcycle-4', 'gl-f4-sedgenesis', '8.1', 'The sedimentary cycle', 14, ['Sedimentary petrology'], [
    'Sedimentary rocks form at the Earth’s surface through a chain of processes called the **sedimentary cycle**:\n- **weathering**: rocks break down in place\n- **erosion**: the weathered material is removed by running water, wind, ice or waves\n- **transport**: it is carried away, as rolling and bouncing grains, in suspension, or **dissolved** in solution\n- **deposition**: when the agent loses energy (a river slows on entering a lake or the sea, wind drops), the load settles, coarsest first\n- **lithification**: the deposited sediment slowly hardens into rock.',
    'Transport changes the sediment. Grains become **rounded** as their corners are knocked off, and **sorted** as the agent drops grains of different size in different places. A **well-sorted** sediment has grains of similar size (beach and desert sand); a **poorly sorted** one mixes sizes (glacial till, landslide debris).',
    'In Cameroon, the Sanaga and the Wouri carry sand and mud to the coast, where it is deposited in estuaries, mangroves and the sea. The **Douala basin** contains thousands of metres of such sediments laid down over millions of years.',
  ], 'geol-sed-cycle', 'Weather, erode, transport, deposit, lithify.',
  ['A sediment with grains all about the same size is:', ['well sorted', 'poorly sorted', 'angular', 'unconsolidated lava'], 'The agent dropped one size in one place.'],
  [['Erosion', 'The removal of weathered material by water, wind or ice.'], ['Deposition', 'The settling of sediment when the agent loses energy.'], ['Sorting', 'How uniform the grain sizes of a sediment are.'], ['Rounding', 'The wearing down of grain corners during transport.']],
  [
    { q: 'A river carries boulders in the mountains but only mud at its mouth. Explain.', steps: ['**In the steep mountain section the water flows fast and has enough energy to move boulders.**', '**Downstream the gradient falls and the river slows, so the heavy particles are dropped first.**', '**Only the finest particles stay in suspension long enough to reach the mouth.**'] },
  ]),

  L('gl-diagenesis-4', 'gl-f4-sedgenesis', '8.2', 'Diagenesis and lithification', 13, ['Sedimentary petrology'], [
    '**Diagenesis** is the set of physical and chemical changes that affect a sediment **after deposition**, at the low temperatures and pressures of the upper crust. It turns loose sediment into rock (**lithification**) and stops well short of metamorphism.',
    'The main processes:\n- **compaction**: the weight of younger layers squeezes the grains together, presses out water and reduces the pore space; it is most important in mud, which can lose over half its volume\n- **cementation**: minerals crystallise from water moving through the pores and glue the grains together; common cements are **silica** (quartz), **calcite** and **iron oxides** (which colour sandstones red or brown)\n- **recrystallisation**: unstable minerals change into more stable ones, for example aragonite shells changing to calcite.',
    'The cement controls how strong and how porous a rock is. A well-cemented sandstone is hard and makes good building stone; a poorly cemented one crumbles in the hand and can hold much water or oil.',
  ], 'geol-sed-cycle', 'Compaction squeezes; cementation glues.',
  ['Which process is most important in turning mud into shale?', ['compaction', 'cementation by calcite only', 'melting', 'contact metamorphism'], 'Mud loses most of its water under load.'],
  [['Diagenesis', 'Changes to sediment after deposition at low temperature and pressure.'], ['Lithification', 'The hardening of sediment into rock.'], ['Compaction', 'Squeezing of sediment by the weight of overlying layers.'], ['Cement', 'Mineral matter that binds grains together.']],
  [
    { q: 'A red sandstone and a white sandstone are made of similar quartz grains. Suggest why their colours differ.', steps: ['**The colour comes mainly from the cement, not the grains.**', '**The red sandstone is cemented by iron oxide (hematite).**', '**The white sandstone is cemented by silica or calcite, which are colourless.**'] },
  ]),

  // ---------- Sedimentary rocks ----------
  L('gl-clastic-4', 'gl-f4-sedrocks', '9.1', 'Clastic sedimentary rocks', 14, ['Sedimentary petrology'], [
    '**Clastic** (detrital, mechanically formed) rocks are made of fragments (**clasts**) of older rocks and minerals. They are classified by **grain size**:\n- **conglomerate**: rounded pebbles and gravel (over 2 mm) set in a finer matrix; shows long transport by rivers or waves\n- **breccia**: like conglomerate but with **angular** fragments; little transport (scree, fault zones)\n- **sandstone**: sand grains 1/16 to 2 mm, mostly quartz; feels gritty\n- **siltstone**: grains finer than sand but still felt between the teeth\n- **shale** and **mudstone**: clay-sized particles under 1/256 mm; shale splits into thin layers (**fissility**).',
    'Sedimentary features:\n- **stratification (bedding)**: layers separated by bedding planes\n- **cross-bedding**: inclined layers formed by migrating dunes or river bars; shows the current direction\n- **ripple marks**, **mud cracks** (drying in the sun) and **graded bedding** (coarse at the base, fine at the top)\n- **fossils**, preserved mostly in fine-grained rocks.',
    'In Cameroon, Cretaceous sandstones and conglomerates outcrop in the **Garoua** and **Mamfe** basins, and in the coastal Douala basin.',
  ], 'geol-sed-class', 'Clastic rocks are named by grain size.',
  ['A rock of large angular fragments cemented together is:', ['breccia', 'conglomerate', 'shale', 'chalk'], 'Angular means little transport.'],
  [['Clast', 'A fragment of an older rock or mineral.'], ['Conglomerate', 'A clastic rock of rounded pebbles.'], ['Breccia', 'A clastic rock of angular fragments.'], ['Cross-bedding', 'Inclined layers within a bed, formed by migrating dunes or bars.']],
  [
    { q: 'How could you tell sandstone from shale in the field?', steps: ['**Sandstone grains are visible with a hand lens and feel gritty; shale grains are too fine to see.**', '**Shale is soft, often dark, and splits into thin flakes; sandstone breaks into blocks.**'] },
  ]),

  L('gl-chemorganic-4', 'gl-f4-sedrocks', '9.2', 'Chemical and organic sedimentary rocks', 14, ['Sedimentary petrology'], [
    '**Chemically formed** rocks precipitate from solution:\n- **evaporites**: when seawater or lake water evaporates in a hot, dry climate, dissolved salts crystallise in order of solubility: a little calcite first, then **gypsum**, then **halite** (rock salt), then potassium salts\n- **chemical limestone**: calcium carbonate precipitated from warm water, such as oolitic limestone of small rounded grains, and **travertine** around springs.',
    '**Organically (biologically) formed** rocks are made from the remains of living things:\n- **shelly** and **reef limestones**: shells and corals cemented together\n- **chalk**: a soft, white, pure limestone of microscopic plankton shells\n- **coal**: plant remains buried in swamps, compressed in stages: peat, lignite, bituminous coal, anthracite; the carbon content rises at each stage.',
    'All limestones are made mainly of **calcite** and **fizz** with cold dilute hydrochloric acid. In Cameroon, limestone is quarried at **Figuil** in the North Region for cement and lime.',
  ], 'geol-sed-class', 'Evaporites from salty water; coal from plants.',
  ['As seawater evaporates, which salt crystallises before halite?', ['gypsum', 'potassium salts', 'quartz', 'feldspar'], 'Gypsum is less soluble than halite.'],
  [['Evaporite', 'A rock formed by the evaporation of salty water.'], ['Limestone', 'A rock made mainly of calcium carbonate.'], ['Peat', 'Partly decayed plant matter, the first stage of coal.'], ['Anthracite', 'The hardest, highest-carbon coal.']],
  [
    { q: 'Arrange peat, anthracite, lignite and bituminous coal in order of increasing carbon content and explain.', steps: ['**Peat, lignite, bituminous coal, anthracite.**', '**With deeper burial, heat and pressure drive off water and gases, so the proportion of carbon rises at each stage.**'] },
  ]),

  // ---------- Metamorphism ----------
  L('gl-agents-4', 'gl-f4-metamorphism', '10.1', 'The agents of metamorphism', 14, ['Metamorphic petrology'], [
    '**Metamorphism** is the change in the minerals and texture of an existing rock (igneous, sedimentary or metamorphic) caused by heat, pressure and fluids, while the rock stays **solid**. If the rock melts, it becomes magma and the process becomes igneous.',
    'The agents:\n- **heat** (temperature): speeds up reactions and allows new minerals to grow; it comes from depth (the geothermal gradient, about 25 to 30 °C per km) and from nearby magma\n- **confining pressure**: equal in all directions, from the weight of overlying rock; it makes rocks denser\n- **directed (differential) pressure**: stronger in one direction, during plate collision; flat and long minerals grow at right angles to it, producing **foliation**\n- **chemically active fluids**: hot water carrying dissolved ions, which add or remove elements (**metasomatism**).',
    'The intensity of metamorphism is its **grade**. Low-grade rocks formed at modest temperature and pressure (slate); high-grade rocks at high temperature and pressure (gneiss). The parent rock is the **protolith**.',
  ], 'geol-metamorphism', 'Heat, pressure and fluids change a solid rock.',
  ['The original rock before metamorphism is called the:', ['protolith', 'aureole', 'phenocryst', 'matrix'], 'The parent rock.'],
  [['Metamorphism', 'Change in a solid rock by heat, pressure or fluids.'], ['Directed pressure', 'Pressure stronger in one direction than others.'], ['Metasomatism', 'Change of rock composition by fluids.'], ['Grade', 'The intensity of metamorphism.']],
  [
    { q: 'At a geothermal gradient of 30 °C per km and a surface temperature of 25 °C, what is the temperature at 10 km depth?', steps: ['Rise = 30 × 10 = **300 °C.**', 'Temperature = 25 + 300 = **325 °C**, enough for low to medium grade metamorphism.'] },
  ]),

  L('gl-contactregional-4', 'gl-f4-metamorphism', '10.2', 'Contact and regional metamorphism', 14, ['Metamorphic petrology'], [
    '**Contact (thermal) metamorphism** happens when magma intrudes cooler rock. **Heat** is the main agent; pressure is low. A zone of baked rock, the **contact aureole**, surrounds the intrusion; it may be a few metres wide round a dyke and several kilometres round a batholith. The grade is highest next to the intrusion and decreases outwards. Typical rock: **hornfels**, hard, fine-grained and **non-foliated**.',
    '**Regional (dynamothermal) metamorphism** affects very large areas, thousands of square kilometres, during **mountain building** at converging plate boundaries. Both **heat** and **directed pressure** act, so the rocks are usually **foliated**: slate, schist, gneiss.',
    'Other types: **dynamic (cataclastic)** metamorphism along fault zones, where rocks are crushed and ground (mylonite); **burial** metamorphism under thick sediment piles. Much of the Cameroon basement, for example the **Pan-African belt** of the Centre and Adamawa, consists of regionally metamorphosed schists and gneisses.',
  ], 'geol-metamorphism', 'Contact: heat, small area. Regional: heat and pressure, big area.',
  ['Gneiss covering a large area of an old mountain belt is a product of:', ['regional metamorphism', 'contact metamorphism', 'weathering', 'evaporation'], 'Heat and directed pressure.'],
  [['Contact aureole', 'A zone of baked rock around an intrusion.'], ['Hornfels', 'A hard, fine, non-foliated contact rock.'], ['Regional metamorphism', 'Metamorphism of large areas during mountain building.'], ['Mylonite', 'A finely crushed rock from a fault zone.']],
  [
    { q: 'Give two differences between contact and regional metamorphism.', steps: ['**Area: contact is local, around an intrusion; regional covers huge areas.**', '**Agents: contact is mainly heat; regional is heat plus directed pressure.**', '**Texture: contact rocks are usually non-foliated (hornfels); regional rocks are foliated (schist, gneiss).**'] },
  ]),

  // ---------- Metamorphic rocks ----------
  L('gl-foliation-4', 'gl-f4-metarocks', '11.1', 'Metamorphic textures', 13, ['Metamorphic petrology'], [
    '**Foliated** textures have minerals aligned in parallel layers, produced by directed pressure. In order of increasing grade:\n- **slaty cleavage**: microscopic micas aligned so the rock splits into thin, flat sheets (slate)\n- **phyllitic** texture: a silky sheen from fine mica (phyllite)\n- **schistosity**: visible, shiny flakes of mica in parallel layers; the rock splits along them (schist)\n- **gneissose banding**: alternating light (quartz, feldspar) and dark (biotite, hornblende) bands of coarse minerals (gneiss).',
    '**Non-foliated** (granoblastic) textures have equal-sized, interlocking grains with no alignment. They form where pressure is equal in all directions or the rock contains mainly one mineral, such as calcite or quartz: **marble**, **quartzite**, **hornfels**.',
    'Note: foliation is different from **bedding**. Bedding is the original sedimentary layering; slaty cleavage often cuts across it at an angle.',
  ], 'geol-meta-rocks', 'Slate, phyllite, schist, gneiss: grade rises.',
  ['Alternating bands of light and dark minerals describe:', ['gneissose banding', 'slaty cleavage', 'bedding', 'vesicular texture'], 'Coarse, high grade.'],
  [['Foliation', 'A parallel alignment of minerals in a metamorphic rock.'], ['Slaty cleavage', 'The ability of slate to split into thin sheets.'], ['Schistosity', 'Foliation with visible, parallel mica flakes.'], ['Granoblastic', 'A non-foliated texture of interlocking equal grains.']],
  [
    { q: 'Explain why marble is not foliated even after regional metamorphism.', steps: ['**Marble is made almost entirely of calcite, which forms equal-sided grains.**', '**There are no flat or long minerals such as mica to line up under directed pressure.**', '**So the recrystallised grains interlock without a parallel alignment.**'] },
  ]),

  L('gl-metaid-4', 'gl-f4-metarocks', '11.2', 'Identifying metamorphic rocks', 14, ['Metamorphic petrology'], [
    'Common metamorphic rocks and their **parent rocks**:\n- **slate** from shale or mudstone: dark, fine, splits into thin flat sheets; used for roofing and blackboards\n- **schist** from shale at higher grade: shiny mica flakes, may contain garnet crystals\n- **gneiss** from shale or granite: coarse, banded\n- **marble** from limestone: crystalline, fizzes with dilute acid, can be scratched by a knife; used as ornamental stone\n- **quartzite** from sandstone: very hard (scratches glass), breaks **through** the grains, not round them.',
    'Distinguishing marble from quartzite (both can be white and sugary): marble fizzes with acid and is scratched by steel; quartzite does not fizz and scratches glass.',
    'The **metamorphic sequence of shale**: shale, slate, phyllite, schist, gneiss. Each step needs higher temperature and pressure; grain size increases and the foliation becomes coarser.',
  ], 'geol-meta-rocks', 'Marble fizzes; quartzite scratches glass.',
  ['A hard, white rock that breaks through its grains and does not fizz with acid is:', ['quartzite', 'marble', 'chalk', 'slate'], 'Metamorphosed sandstone.'],
  [['Slate', 'Low-grade metamorphosed shale that splits into sheets.'], ['Schist', 'Medium-grade foliated rock with visible mica.'], ['Marble', 'Metamorphosed limestone.'], ['Quartzite', 'Metamorphosed sandstone.']],
  [
    { q: 'Complete: shale gives ___, limestone gives ___, sandstone gives ___.', steps: ['**Shale gives slate (then schist and gneiss at higher grade).**', '**Limestone gives marble.**', '**Sandstone gives quartzite.**'] },
  ]),

  // ---------- Hazards ----------
  L('gl-masswasting-4', 'gl-f4-hazards', '12.1', 'Landslides, mudflows and rockfalls', 14, ['Environmental geology'], [
    '**Mass wasting** is the downslope movement of rock and soil under **gravity**. Types:\n- **soil creep**: very slow; seen in bent tree trunks and tilted fences\n- **landslide (slide)**: a mass of rock or soil moving rapidly along a slip surface\n- **mudflow**: a fast flow of water-saturated fine material, often after heavy rain\n- **rockfall**: blocks falling freely from a steep cliff or road cutting.',
    'Causes:\n- **heavy or prolonged rain**, which adds weight and reduces friction between grains\n- **steep slopes**, made steeper by road and house construction\n- **deforestation**, which removes roots that bind the soil\n- weak, deeply weathered rock and clay layers\n- earthquakes and volcanic activity.',
    'Cameroon examples: the **Gouache** landslide in Bafoussam (October **2019**) buried homes and killed over 40 people; landslides regularly cut roads in the Western Highlands and on Mount Cameroon. Prevention: **reforestation**, **drainage** channels, terracing, retaining walls, and land-use planning that keeps homes off unstable slopes.',
  ], 'geol-hazards', 'Rain, steep slopes and bare soil cause landslides.',
  ['Bent tree trunks on a hillside are evidence of:', ['soil creep', 'a rockfall', 'a volcanic eruption', 'an evaporite'], 'Very slow movement.'],
  [['Mass wasting', 'The downslope movement of material under gravity.'], ['Soil creep', 'The very slow downslope movement of soil.'], ['Mudflow', 'A fast flow of saturated fine sediment.'], ['Retaining wall', 'A wall built to hold back soil on a slope.']],
  [
    { q: 'Explain how heavy rain can trigger a landslide.', steps: ['**Water fills the pores, adding weight to the slope.**', '**Water pressure between grains reduces friction, weakening the soil.**', '**When the pull of gravity exceeds the strength of the slope, it fails along a slip surface.**'] },
  ]),

  L('gl-volcanichazards-4', 'gl-f4-hazards', '12.2', 'Volcanic eruptions and gas outbursts', 15, ['Environmental geology'], [
    'Volcanic hazards include **lava flows**, **ash falls**, **pyroclastic flows** (hot ash and gas racing downhill), **lahars** (volcanic mudflows), earthquakes and **toxic gases**. **Mount Cameroon** erupted in **1999** and **2000**; lava flows threatened villages and roads near Bakingili and Limbe.',
    '**Limnic eruptions** are gas outbursts from deep lakes:\n- at **Lake Monoun** (1984) a gas release killed 37 people\n- at **Lake Nyos** (21 August **1986**) a huge release of **carbon dioxide** killed about **1,700** people and thousands of cattle.\nCarbon dioxide from magma below seeps into the deep water and stays dissolved under pressure. A trigger (perhaps a landslide into the lake) made it come out of solution suddenly. Because CO₂ is **denser than air**, the cloud flowed down valleys and suffocated people and animals.',
    'Prevention and preparedness: **degassing pipes** installed from 2001 at Nyos and from 2003 at Monoun bring deep water up so the gas escapes gradually; monitoring of gas levels and of seismic activity on Mount Cameroon; warning systems, evacuation plans and education; avoiding settlement in low valleys near the lakes.',
  ], 'geol-hazards', 'Nyos 1986: CO₂ is denser than air and suffocates.',
  ['Degassing pipes at Lake Nyos work by:', ['bringing gas-rich deep water up so the gas escapes gradually', 'adding gas to the lake', 'draining the lake completely', 'cooling the magma'], 'Controlled release.'],
  [['Limnic eruption', 'A sudden release of dissolved gas from a deep lake.'], ['Pyroclastic flow', 'A fast, hot flow of volcanic ash and gas.'], ['Lahar', 'A volcanic mudflow.'], ['Degassing', 'The controlled removal of dissolved gas.']],
  [
    { q: 'Why did most victims of the Nyos disaster live in valleys below the lake?', steps: ['**Carbon dioxide is about 1.5 times denser than air.**', '**The gas cloud flowed downhill and collected in low valleys, displacing the air.**', '**People and animals there were left without oxygen and suffocated.**'] },
  ]),

  // ---------- Practical ----------
  L('gl-handspecimen-4', 'gl-f4-practical', '13.1', 'Describing a hand specimen', 14, ['Practical'], [
    'A **hand specimen** is a fist-sized piece of rock examined with simple tools: a **hand lens** (×10), a steel knife or nail, a streak plate, a piece of glass, a magnet and a dropper of **cold dilute hydrochloric acid**. Always describe before you name.',
    'Describe in this order:\n- **colour**: overall, and light or dark minerals\n- **grain size**: coarse (visible), medium (visible with lens), fine (not visible)\n- **texture**: crystalline (interlocking) or clastic (grains and cement); layered, banded or massive; vesicles, fossils\n- **minerals**: identify those you can, using colour, lustre, hardness and cleavage\n- **reaction to acid**: does it fizz?\n- **hardness** and any other property (density, magnetism).',
    'Safety: wear goggles when using acid and when breaking rocks; wash acid off the specimen; never taste or sniff samples. Record observations in a table, then reach a name and the rock group, giving reasons.',
  ], 'geol-rock-key', 'Observe colour, grain size, texture, minerals, acid test.',
  ['Before naming a rock, you should first:', ['describe what you observe', 'look up its price', 'break it with acid', 'guess its age'], 'Description comes first.'],
  [['Hand specimen', 'A small rock sample examined by eye and simple tools.'], ['Hand lens', 'A small magnifier, usually ×10.'], ['Massive', 'Having no layering or banding.']],
  [
    { q: 'Describe a granite specimen in exam style.', steps: ['**Colour: light grey to pink, speckled with black.**', '**Grain size: coarse; crystals 2 to 5 mm, visible without a lens.**', '**Texture: crystalline, interlocking, massive (no layering).**', '**Minerals: glassy grey quartz, pink or white feldspar with cleavage faces, black shiny mica.**', '**No reaction with acid. Name: granite, an acid intrusive igneous rock.**'] },
  ]),

  L('gl-rockkey-4', 'gl-f4-practical', '13.2', 'A key for identifying rocks', 15, ['Practical'], [
    'A simple **dichotomous key** separates the three rock groups:\n- **crystalline, interlocking grains, no layers** → igneous; then coarse (granite light, gabbro dark) or fine (rhyolite light, basalt dark); glassy → obsidian; full of holes → pumice or scoria\n- **grains with cement, or layers, or fossils** → sedimentary; fizzes → limestone or chalk; otherwise name by grain size: conglomerate, breccia, sandstone, shale\n- **aligned minerals or bands, or sugary recrystallised grains** → metamorphic; foliated → slate, schist, gneiss; non-foliated → marble (fizzes) or quartzite (very hard).',
    'Common mistakes: confusing **gneiss** (banded, metamorphic) with granite (no banding, igneous); **quartzite** with sandstone (quartzite breaks through the grains, sandstone around them); **marble** with limestone (marble is crystalline and has no fossils or clastic texture).',
    'Revision for promotion: the seven crystal systems, symmetry elements of a cube, the Mohs scale and the main rock-forming minerals are tested together with rock identification at the end of Form 4.',
  ], 'geol-rock-key', 'Crystals = igneous; grains and layers = sedimentary; aligned = metamorphic.',
  ['A specimen with interlocking crystals arranged in light and dark bands is:', ['gneiss', 'granite', 'sandstone', 'basalt'], 'Banding means metamorphic.'],
  [['Dichotomous key', 'A key that divides at each step into two choices.'], ['Igneous rock', 'Rock formed from cooled magma or lava.'], ['Sedimentary rock', 'Rock formed from deposited sediment.'], ['Metamorphic rock', 'Rock changed by heat and pressure.']],
  [
    { q: 'Use the key: a fine, dark rock with gas holes and no reaction with acid.', steps: ['**Crystalline, no clastic grains or layers: igneous.**', '**Fine-grained and dark: basic, extrusive.**', '**Gas holes: vesicular basalt (or scoria if very holey).**'] },
  ]),
];
