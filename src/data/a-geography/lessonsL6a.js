// A Level Geography lessons (0750), Lower Sixth, Term 1: the 0750 papers and
// systems, advanced mapwork, statistical techniques, plate tectonics and the
// rock cycle, volcanism and seismology, folding and faulting, weathering, and
// slopes and mass movement.

const PAPER = { Method: 'All papers', Mapwork: 'Paper 2', Statistics: 'Paper 2', Physical: 'Papers 1 and 2', Human: 'Papers 1 and 3', Cameroon: 'Papers 1 and 3', MCQ: 'Paper 1' };

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

export const LESSONS_GL6A = [
  // ---------- 1. The papers and systems ----------
  L('agg-method-1', 'agg-l6-method', '1.1', 'The 0750 examination and what earns marks', 16, ['Method'], [
    'The GCE Advanced Level Geography examination (0750) has three papers. In June 2026: **Paper 1**, 1½ hours, multiple-choice questions on the whole syllabus (Saturday 6 June, afternoon); **Paper 2**, 3 hours, compulsory practical mapwork and statistical techniques with general physical geography (Monday 8 June, morning); **Paper 3**, 3¾ hours, human geography and the geography of Cameroon (Monday 8 June, afternoon).',
    'The scheme of work gives Geography 6 to 8 periods a week at A Level. The Lower Sixth builds the scientific and quantitative base (geomorphology, hydrology, climatology, biogeography and the first human theories); the Upper Sixth adds location models, global issues and the full geography of Cameroon.',
    'Answers are rewarded for:\n- **knowledge**: accurate terms, processes and located examples\n- **explanation**: how processes produce landforms and patterns\n- **skills**: precise measurement, calculation and clear diagrams\n- **evaluation**: weighing factors and reaching a judgement.\nDescription alone, however neat, stays in the lower mark levels.',
    'Diagrams are part of the answer, not decoration: a titled, annotated sketch that the text refers to can carry as much as a paragraph.',
  ], 'agg-gce-0750', 'Paper 1: precision. Paper 2: skills and physical processes. Paper 3: human and Cameroon.',
  ['Which paper contains the compulsory practical mapwork?', ['Paper 2', 'Paper 1', 'Paper 3', 'none of them'], 'With statistical techniques and physical geography.'],
  [['Annotation', 'Explanatory notes added to a diagram or map.'], ['Evaluation', 'Weighing the importance or success of something and judging.']],
  [
    { q: 'Turn this descriptive sentence into an explanation: "Douala floods often."', steps: ['Add the process: **heavy monsoon rain falls on low, flat land near sea level.**', 'Add the human factor: **concrete surfaces and blocked drains increase runoff.**', '**Explanation: "Douala floods because intense rainfall on low-lying land meets impermeable urban surfaces and poor drainage, so water collects faster than it can drain."**'] },
  ]),

  L('agg-method-2', 'agg-l6-method', '1.2', 'Systems, scale and the O Level baseline', 16, ['Method'], [
    'Geographers study the world as **systems**: sets of linked parts with **inputs** (rain, sunlight, people), **stores** (lakes, soil, cities), **flows** or transfers (rivers, migration) and **outputs** (water to the sea, exports). An **open system**, such as a drainage basin, exchanges energy and matter with its surroundings; a **closed system**, such as the global water cycle, exchanges energy but not matter.',
    'Systems tend towards **dynamic equilibrium**: a balance that adjusts to change. **Negative feedback** restores the balance (more evaporation, more cloud, less heating); **positive feedback** amplifies change (melting ice lowers albedo, so more melting).',
    '**Scale** matters: processes act at local (a slope), regional (a basin), national (Cameroon) and global (the general circulation) scales, and an explanation at one scale may fail at another.',
    'The diagnostic review checks O Level skills you will use every week: reading contours (spacing shows gradient, V-shapes pointing upstream show valleys), drawing cross-sections, and recognising basic landforms (spurs, valleys, plateaus, escarpments).',
  ], 'agg-open-system', 'Inputs, stores, flows, outputs; negative feedback balances, positive feedback amplifies.',
  ['Melting sea ice exposes dark water that absorbs more heat, causing more melting. This is:', ['positive feedback', 'negative feedback', 'a closed system', 'dynamic equilibrium'], 'The change amplifies itself.'],
  [['Open system', 'A system that exchanges both energy and matter with its surroundings.'], ['Dynamic equilibrium', 'A balance that adjusts as inputs change.'], ['Feedback', 'A change in a system that affects the process that caused it.']],
  [
    { q: 'Describe a drainage basin as a system.', steps: ['Input: **precipitation.**', 'Stores: **interception, surface water, soil moisture, groundwater, channel storage.**', 'Flows: **infiltration, percolation, throughflow, overland flow, groundwater flow.**', 'Outputs: **evaporation, transpiration and river discharge to the sea.**'] },
  ]),

  // ---------- 2. Mapwork ----------
  L('agg-mapwork-1', 'agg-l6-mapwork', '2.1', 'Gradient, sections and vertical exaggeration', 18, ['Mapwork'], [
    '**Gradient** = vertical interval ÷ horizontal equivalent, both in the same units, written as **1 in n**. Find the heights of the two points from contours or spot heights, measure the distance between them on the map and convert it with the scale (on 1:50,000, 1 cm = 500 m). The **angle of slope** can be found from tan θ = vertical interval ÷ horizontal distance.',
    'A **cross-section**: lay a strip of paper along the line, mark each contour where it crosses and note its height, transfer the marks to a base line at the same horizontal scale, plot heights on a chosen vertical scale, and join them with a smooth curve. Label rivers, roads and summits, add a title, both scales and the direction.',
    '**Vertical exaggeration (VE)** = horizontal scale denominator ÷ vertical scale denominator. On a 1:50,000 map with a vertical scale of 1 cm to 100 m (1:10,000), VE = 50,000 ÷ 10,000 = **5**: heights look five times steeper than reality. A VE that is too large distorts the landscape; too small, and relief disappears.',
    'Always show working: the heights read, the distance measured, the conversion and the final answer with units. Marks are given for method even if a reading is slightly off.',
  ], 'agg-gradient', 'Same units on top and bottom; VE is horizontal denominator ÷ vertical denominator.',
  ['Point A is at 450 m and point B at 250 m; they are 4 cm apart on a 1:50,000 map. The gradient is:', ['1 in 10', '1 in 20', '1 in 100', '1 in 5'], '4 cm = 2,000 m; 200 m ÷ 2,000 m = 1 in 10.'],
  [['Vertical interval', 'The difference in height between two points.'], ['Horizontal equivalent', 'The horizontal distance between two points on the ground.'], ['Vertical exaggeration', 'How many times the vertical scale of a section is larger than the horizontal scale.']],
  [
    { q: 'A spot height of 620 m and a river at 380 m are 3.6 cm apart on a 1:50,000 map. Find the gradient and the angle of slope.', steps: ['Vertical interval: **620 − 380 = 240 m.**', 'Horizontal equivalent: **3.6 × 500 = 1,800 m.**', 'Gradient: **1,800 ÷ 240 = 7.5, so 1 in 7.5.**', 'Angle: **tan θ = 240 ÷ 1,800 = 0.133, so θ ≈ 7.6°.**'] },
    { q: 'You draw a section from a 1:25,000 map with a vertical scale of 1 cm to 50 m. What is the vertical exaggeration?', steps: ['Vertical scale: **1 cm to 50 m = 1:5,000.**', 'VE: **25,000 ÷ 5,000 = 5.**', '**The section exaggerates heights five times.**'] },
  ]),

  L('agg-mapwork-2', 'agg-l6-mapwork', '2.2', 'Intervisibility, drainage basins and drainage density', 18, ['Mapwork'], [
    '**Intervisibility**: two points are intervisible if no ground rises above the straight line of sight joining them. Draw a section between the points and a straight line from one summit to the other; any part of the section above the line blocks the view. Convex slopes hide the ground below them; concave slopes give open views.',
    '**Delimiting a drainage basin**: follow the **watershed** from the river mouth or a chosen point, crossing contours at right angles and keeping to the highest ground (spurs and ridges), until the line returns to the river below the starting point.',
    '**Stream ordering (Strahler)**: fingertip tributaries are first order; two first-order streams form a second-order stream; two second-order streams form a third-order stream. A lower-order stream joining a higher one does not raise the order. Basins with higher orders are larger and more complex.',
    '**Drainage density** = total length of streams ÷ basin area (km per km²). It is high on impermeable rocks, steep slopes and where vegetation is sparse; low on permeable rocks such as limestone or sandstone, under forest, and on gentle slopes. **Drainage patterns** reveal structure: dendritic (uniform rock), radial (domes and volcanoes, as around Mount Cameroon), trellis (folded rocks), rectangular (jointed or faulted rock), centripetal (basins).',
  ], 'agg-stream-order', 'Watersheds follow the highest ground; order rises only when equal orders meet.',
  ['A third-order stream is formed when:', ['two second-order streams join', 'a first-order stream joins a second-order stream', 'three first-order streams join', 'a stream reaches the sea'], 'Strahler’s rule.'],
  [['Watershed', 'The boundary of a drainage basin along the highest ground.'], ['Stream order', 'A rank given to each stream according to its position in the network.'], ['Drainage density', 'The total length of streams per unit of basin area.']],
  [
    { q: 'A basin of 45 km² contains streams totalling 81 km. Find its drainage density and comment.', steps: ['Drainage density: **81 ÷ 45 = 1.8 km per km².**', 'Interpretation: **moderate density.**', 'Likely causes: **mixed rocks or moderate slopes; compare with neighbouring basins before concluding.**'] },
  ]),

  // ---------- 3. Statistics ----------
  L('agg-stats-1', 'agg-l6-stats', '3.1', 'Sampling and presenting geographical data', 17, ['Statistics'], [
    '**Sampling** gives a picture of a whole population when measuring everything is impossible:\n- **random**: every item has an equal chance (random number tables or a generator)\n- **systematic**: items at regular intervals (every 10 m along a transect, every fifth house)\n- **stratified**: the sample is divided in proportion to sub-groups (rock types, age groups, land uses)\n- point, line and area (quadrat) sampling apply these on maps and in the field.\nLarger samples reduce error; bias comes from choosing what is easy to reach.',
    'Choosing a chart:\n- **pie charts** for proportions of a whole (degrees = value ÷ total × 360)\n- **bar graphs** for separate categories, **histograms** for continuous classes (bars touch)\n- **line graphs** for change over time\n- **age-sex pyramids** for population structure (males left, females right, usually as percentages)\n- **isoline maps** for continuous data (isohyets, isotherms); **choropleth** maps for data by area.',
    'Central tendency: the **mean** (sum ÷ number), **median** (middle value) and **mode** (most frequent). Dispersion: the **range** and the **interquartile range**, which ignores extremes.',
    'A good chart has a title, labelled axes with units, a key where needed, and a source.',
  ], 'agg-sampling', 'Random, systematic, stratified; then the right chart for the data.',
  ['To compare the percentage of land under cocoa, food crops and forest in a village, the best chart is a:', ['pie chart', 'histogram', 'line graph', 'isoline map'], 'Proportions of one whole.'],
  [['Sample', 'A part of a population chosen to represent the whole.'], ['Bias', 'A systematic error that makes a sample unrepresentative.'], ['Median', 'The middle value when data are in order.']],
  [
    { q: 'Of 200 farmers surveyed, 90 grow cocoa, 70 grow coffee and 40 grow food crops only. Find the pie chart angles.', steps: ['Cocoa: **90 ÷ 200 × 360 = 162°.**', 'Coffee: **70 ÷ 200 × 360 = 126°.**', 'Food crops: **40 ÷ 200 × 360 = 72°.**', 'Check: **162 + 126 + 72 = 360°.**'] },
  ]),

  L('agg-stats-2', 'agg-l6-stats', '3.2', 'Spearman’s rank correlation coefficient', 18, ['Statistics'], [
    '**Spearman’s rank correlation coefficient** (rs) measures the strength and direction of the relationship between two sets of data, such as distance from the CBD and land value.\n\n**rs = 1 − (6Σd²) ÷ (n³ − n)**\n\nwhere d is the difference between the two ranks of each item and n is the number of pairs.',
    'Method:\n- rank each set separately (1 for the highest); tied values share the mean of the ranks they occupy\n- find d for each pair and square it\n- add the d² values\n- substitute into the formula.',
    'Interpretation: values near **+1** show a strong positive relationship, near **−1** a strong negative one, near **0** no relationship. Check **significance** in tables for the number of pairs: with few pairs (fewer than about 10) a high value can still arise by chance.',
    'Correlation is not causation: two variables may both depend on a third (both rainfall and forest cover fall northwards in Cameroon because of distance from the sea and the ITCZ).',
  ], 'agg-spearman', 'Rank, difference, square, sum, substitute; then test significance.',
  ['An rs of +0.92 from 12 pairs suggests:', ['a strong positive relationship, likely significant', 'a strong negative relationship', 'no relationship', 'that one variable causes the other'], 'Significance still needs checking in tables.'],
  [['Correlation', 'A statistical relationship between two variables.'], ['Significance', 'How unlikely a result is to have arisen by chance.'], ['Rank', 'The position of a value when data are put in order.']],
  [
    { q: 'For 6 stations the ranks of altitude and rainfall give d values of 0, 1, −1, 2, −1 and −1. Calculate rs.', steps: ['d²: **0, 1, 1, 4, 1, 1; Σd² = 8.**', 'n³ − n: **216 − 6 = 210.**', 'rs: **1 − (6 × 8) ÷ 210 = 1 − 0.229 = 0.77.**', 'Interpretation: **a fairly strong positive relationship, but with only 6 pairs it needs a significance test.**'] },
  ]),

  // ---------- 4. Plate tectonics and rocks ----------
  L('agg-tectonics-1', 'agg-l6-tectonics', '4.1', 'Plate tectonics: mechanisms and margins', 18, ['Physical'], [
    'The Earth has a **crust** (oceanic, thin and dense basalt; continental, thick and lighter granite), a **mantle** and a **core**. The rigid **lithosphere** (crust and upper mantle) is broken into plates that move over the weak **asthenosphere** at a few centimetres a year.',
    'Driving forces: **mantle convection**, **ridge push** (new, hot lithosphere slides away from raised ridges) and **slab pull** (cold, dense lithosphere sinking at subduction zones pulls the plate behind it), now seen as the strongest force. Evidence includes the fit of the continents, matching rocks and fossils, sea-floor spreading and the magnetic stripes either side of ridges.',
    'Margins:\n- **divergent**: plates move apart; ridges and rift valleys, basaltic volcanoes (Mid-Atlantic Ridge, East African Rift)\n- **convergent, ocean-continent**: the oceanic plate subducts; a **trench**, fold mountains and explosive volcanoes (Andes)\n- **convergent, ocean-ocean**: subduction forms an **island arc** and trench (Japan, the Mariana Trench)\n- **convergent, continent-continent**: collision with little volcanism; fold mountains (Himalayas)\n- **transform**: plates slide past; powerful earthquakes, no volcanoes (San Andreas).',
    'Not all volcanoes lie on margins: **hot spots** (Hawaii) and lines of weakness such as the **Cameroon Volcanic Line** produce volcanoes within plates.',
  ], 'agg-plate-margins', 'Ridge push, slab pull; divergent, convergent (three types), transform.',
  ['Slab pull is:', ['the pull of cold, dense lithosphere sinking at a subduction zone', 'the push of magma at a ridge', 'the drag of ocean currents', 'the Moon’s gravity'], 'Now thought to be the main driving force.'],
  [['Lithosphere', 'The rigid outer layer of the Earth: crust and upper mantle.'], ['Subduction', 'The sinking of one plate beneath another.'], ['Sea-floor spreading', 'The creation of new oceanic crust at mid-ocean ridges.']],
  [
    { q: 'Explain why the Andes have explosive volcanoes but the Mid-Atlantic Ridge has gentle eruptions.', steps: ['Andes: **subduction melts wet oceanic crust; magma rising through continental crust becomes silica-rich and viscous.**', 'Viscous magma traps gas: **explosive eruptions.**', 'Mid-Atlantic Ridge: **decompression melting of the mantle gives runny basaltic magma.**', 'Result: **gentle fissure eruptions of basalt.**'] },
  ]),

  L('agg-tectonics-2', 'agg-l6-tectonics', '4.2', 'The rock cycle: igneous, sedimentary and metamorphic rocks', 17, ['Physical'], [
    '**Igneous** rocks form from cooled magma. **Intrusive** (plutonic) rocks cool slowly underground and have large crystals (granite, gabbro); **extrusive** (volcanic) rocks cool quickly at the surface and have small crystals or glass (basalt, obsidian). Acid rocks are rich in silica and pale (granite); basic rocks are poorer in silica and dark (basalt).',
    '**Sedimentary** rocks form from sediments that are deposited, buried, compacted and cemented (**lithification**): clastic (sandstone, shale, conglomerate), organic (coal, some limestones) and chemical (rock salt, some limestones). They show **bedding planes** and may contain fossils. The Douala basin is filled with sedimentary rocks.',
    '**Metamorphic** rocks form when heat and/or pressure change existing rocks without melting them: limestone becomes **marble**, sandstone **quartzite**, shale **slate**, then schist and gneiss as conditions intensify. Regional metamorphism accompanies mountain building; contact metamorphism happens next to intrusions.',
    'The **rock cycle** links them: weathering and erosion turn any rock into sediment, burial makes it sedimentary, heat and pressure metamorphose it, melting returns it to magma. Much of Cameroon is Precambrian **basement** of granites, gneisses and schists over 500 million years old.',
  ], 'agg-rock-cycle', 'Cool, settle, squeeze: igneous, sedimentary, metamorphic, and round again.',
  ['Slate is formed from:', ['shale, by low-grade metamorphism', 'granite, by cooling', 'sand, by cementation', 'basalt, by weathering'], 'Fine, cleaved rock.'],
  [['Lithification', 'The compaction and cementation of sediment into rock.'], ['Intrusive rock', 'Igneous rock that cooled below the surface.'], ['Metamorphism', 'The change of rock by heat and pressure without melting.']],
  [
    { q: 'Trace a granite grain through the rock cycle to gneiss.', steps: ['Weathering: **hydrolysis frees quartz grains from granite.**', 'Transport and deposition: **rivers carry sand to a basin.**', 'Lithification: **burial and cementation make sandstone.**', 'Metamorphism: **deep burial in a mountain belt turns it into quartzite or, with mixed minerals, gneiss.**'] },
  ]),

  // ---------- 5. Volcanism and seismology ----------
  L('agg-volcanism-1', 'agg-l6-volcanism', '5.1', 'Eruptions, volcanic forms and Mount Cameroon', 18, ['Physical'], [
    'Eruption style depends on **magma viscosity** and **gas content**. Basaltic magma (about 50 per cent silica, very hot) is runny, lets gas escape and gives **effusive** eruptions of lava flows. Andesitic and rhyolitic magmas (60 to 70 per cent silica, cooler) are viscous, trap gas and erupt **explosively**, with ash, pumice and **pyroclastic flows**.',
    'Forms:\n- **shield volcanoes**: broad, gentle slopes of runny basalt (Mauna Loa)\n- **composite cones** (stratovolcanoes): steep layers of ash and lava (Fuji, Vesuvius)\n- **fissure eruptions**: lava plateaus from long cracks\n- **calderas**: huge collapse depressions after the magma chamber empties, often holding lakes\n- secondary features: hot springs, geysers, fumaroles, crater lakes.',
    '**Mount Cameroon** (about 4,000 m) is an active volcano of the Cameroon Volcanic Line, built mainly of basaltic lavas with many small cones on its flanks. It erupted several times in the twentieth century, including 1922, 1959 and 1982, and most recently in 1999 and 2000; in 1999 lava reached the coast road near Bakingili. Its fertile soils support plantations and dense settlement, which raises the risk.',
    'Volcanic hazards include lava flows, ash fall, pyroclastic flows, lahars (volcanic mudflows), gas emissions and earthquakes; benefits include fertile soils, geothermal energy, building stone and tourism.',
  ], 'agg-volcano-types', 'Silica and gas decide the eruption; the eruption decides the landform.',
  ['A volcano built of steep alternating layers of ash and lava is a:', ['composite cone', 'shield volcano', 'fissure volcano', 'caldera'], 'Viscous magma, explosive eruptions.'],
  [['Viscosity', 'Resistance to flow; viscous magma is thick and sticky.'], ['Pyroclastic flow', 'A fast, scorching avalanche of gas, ash and rock.'], ['Lahar', 'A volcanic mudflow of ash and water.']],
  [
    { q: 'Why do people live on the slopes of Mount Cameroon despite the risk?', steps: ['Soils: **weathered basalt and ash give very fertile soils.**', 'Economy: **plantations (CDC), farming and tourism provide jobs.**', 'Experience: **eruptions are infrequent and mostly effusive, so flows can be outrun.**', 'Judgement: **benefits are daily; the hazard is occasional, so people accept the risk.**'] },
  ]),

  L('agg-volcanism-2', 'agg-l6-volcanism', '5.2', 'Intrusions, seismic waves and hazard zoning', 18, ['Physical'], [
    'Not all magma reaches the surface. **Intrusive** features, revealed later by erosion:\n- **batholith**: a huge, deep dome of granite\n- **laccolith**: a dome-shaped intrusion that arches the overlying rocks\n- **dyke**: a vertical sheet cutting across the bedding (discordant)\n- **sill**: a horizontal sheet along the bedding (concordant)\nResistant dykes and sills form ridges and waterfalls when surrounding rocks are worn away.',
    'Earthquakes release stored strain along faults. Waves spread from the **focus** (underground) and the **epicentre** (directly above):\n- **P waves** (primary): compressional, fastest, pass through solids and liquids\n- **S waves** (secondary): shear, slower, cannot pass through liquids (evidence of the liquid outer core)\n- **surface (L) waves**: slowest, cause most damage.',
    'Size is measured as **magnitude** (energy released; the logarithmic Richter and moment magnitude scales, each unit about 32 times more energy) and **intensity** (observed effects; the Modified Mercalli scale, I to XII).',
    '**Hazard zoning** maps areas by risk (distance from faults, soil type, slope) and controls land use and building codes. Damage depends on magnitude, depth, distance, ground conditions, building quality, population density and preparedness.',
  ], ['agg-intrusions', 'agg-seismic'], 'Dyke cuts across, sill lies along; P waves first, surface waves worst.',
  ['S waves do not pass through the outer core because they:', ['cannot travel through liquids', 'are too fast', 'are surface waves', 'are absorbed by the crust'], 'Shear waves need a rigid medium.'],
  [['Focus', 'The point underground where an earthquake starts.'], ['Epicentre', 'The point on the surface directly above the focus.'], ['Magnitude', 'The energy released by an earthquake.'], ['Intensity', 'The effects of an earthquake at a place.']],
  [
    { q: 'Two earthquakes of the same magnitude strike a rich and a poor city. Explain why the death tolls differ.', steps: ['Buildings: **reinforced, code-built structures resist shaking; unreinforced ones collapse.**', 'Planning: **hazard zoning keeps buildings off weak ground.**', 'Response: **trained emergency services and hospitals save the injured.**', 'Judgement: **wealth and governance, more than magnitude, decide the toll.**'] },
  ]),

  // ---------- 6. Folding and faulting ----------
  L('agg-folding-1', 'agg-l6-folding', '6.1', 'Folds, orogenesis and inverted relief', 17, ['Physical'], [
    '**Orogenesis** (mountain building) happens mainly at convergent margins, where compression crumples sedimentary layers. Stress may be **compressional** (pushing together), **tensional** (pulling apart) or **shear** (sliding past).',
    'Types of fold:\n- **anticline**: an upfold, limbs dipping away from the axis\n- **syncline**: a downfold, limbs dipping towards the axis\n- **monocline**: a step-like bend in one direction\n- **asymmetrical** and **overfolds**: one limb steeper or overturned under strong pressure\n- **recumbent folds** and **nappes**: folds pushed over almost flat, sometimes torn and thrust many kilometres (the Alps).',
    'Fold mountains: young ranges such as the Alps, Andes and Himalayas are high and rugged; old ones such as the Appalachians are worn down.',
    '**Inverted relief**: the crest of an anticline is stretched and cracked, so it weathers and erodes faster; it may become an **anticlinal valley**, while the compressed trough of a syncline resists and stands up as a **synclinal hill**. Drainage on folded rocks often forms a **trellis** pattern, with rivers following the soft beds.',
  ], 'agg-folds', 'Anticline up, syncline down; erosion can turn them inside out.',
  ['An anticlinal valley forms because the crest of an anticline is:', ['stretched and jointed, so it erodes faster', 'harder than the syncline', 'covered in lava', 'protected by forest'], 'Inverted relief.'],
  [['Orogenesis', 'The process of mountain building.'], ['Anticline', 'An upfold of rock layers.'], ['Nappe', 'A large overfold thrust far from its origin.']],
  [
    { q: 'Explain the formation of a nappe.', steps: ['Compression: **plates converge and squeeze sedimentary layers.**', 'Folding: **layers buckle into overfolds as pressure grows.**', 'Recumbent fold: **the fold is pushed over almost flat.**', 'Thrusting: **the fold breaks along a thrust plane and is carried far forward as a nappe.**'] },
  ]),

  L('agg-folding-2', 'agg-l6-folding', '6.2', 'Faults, rift valleys and block mountains', 17, ['Physical'], [
    'A **fault** is a fracture along which rocks have moved. The block above an inclined fault plane is the **hanging wall**, below it the **footwall**:\n- **normal fault** (tension): the hanging wall moves down\n- **reverse fault** (compression): the hanging wall moves up; a low-angle reverse fault is a **thrust**\n- **tear (strike-slip) fault**: horizontal movement (the San Andreas)\nThe exposed fault plane forms a **fault scarp**.',
    'Faulted landforms:\n- **horst** (block mountain): a block raised between faults, or left standing as neighbours sank (the Vosges and Black Forest)\n- **graben** and **rift valley**: a block sunk between parallel faults (the East African Rift, the Rhine Rift)\n- **tilt blocks**: blocks tilted along one fault, with a steep scarp and a gentle back slope.',
    'In Cameroon the **Benue trough**, linked to the opening of the South Atlantic in the Cretaceous, is a faulted depression filled with sediments; faulting along the Cameroon Volcanic Line has guided magma to the surface.',
    'Effects on people: fault lines guide rivers and roads; scarps hinder communications; active faults bring earthquake risk; rift valleys hold lakes and fertile volcanic soils.',
  ], 'agg-faults', 'Normal under tension, reverse under compression; horst up, graben down.',
  ['A rift valley forms where:', ['a block sinks between two parallel normal faults', 'an anticline is eroded', 'a glacier deepens a valley', 'a river meanders'], 'Tension pulls the crust apart.'],
  [['Fault scarp', 'A steep slope formed by movement on a fault.'], ['Horst', 'A block raised between faults.'], ['Graben', 'A block sunk between faults.']],
  [
    { q: 'Compare the formation of a horst and a rift valley.', steps: ['Both: **form by vertical movement along parallel faults.**', 'Horst: **the central block rises, or stays while the sides sink.**', 'Rift valley: **the central block sinks under tension.**', 'Landscape: **a horst is a plateau with steep sides; a rift valley is a flat floor between steep walls.**'] },
  ]),

  // ---------- 7. Weathering ----------
  L('agg-weathering-1', 'agg-l6-weathering', '7.1', 'Mechanical and biological weathering', 17, ['Physical'], [
    '**Weathering** is the breakdown of rock in place by the atmosphere, water and organisms; **erosion** removes the debris. Weathering prepares material for transport and shapes landforms such as tors and inselbergs.',
    '**Mechanical (physical) weathering** breaks rock without changing its minerals:\n- **freeze-thaw (frost wedging)**: water in cracks expands about 9 per cent on freezing; repeated cycles prise rock apart, producing scree (high mountains, periglacial areas)\n- **insolation weathering**: daily heating and cooling expand and contract the outer layers, which peel off (**exfoliation**), especially in hot deserts\n- **pressure release (dilatation)**: when overlying rock is eroded, the rock below expands and splits into sheets parallel to the surface (granite domes)\n- **salt crystallisation**: growing salt crystals in pores shatter rock in deserts and on coasts.',
    '**Biological weathering**: roots widen cracks; burrowing animals expose rock; lichens and decaying plants release acids that also weather chemically.',
    'The rate depends on rock type (joints, bedding planes, grain size and mineral content), climate, vegetation and time.',
  ], 'agg-weathering-types', 'Mechanical changes size; chemical changes the minerals.',
  ['Freeze-thaw is most effective where temperatures:', ['often swing above and below 0 °C', 'stay above 30 °C', 'stay below −30 °C', 'never change'], 'Each freeze widens the crack a little.'],
  [['Exfoliation', 'The peeling of outer rock layers by repeated heating and cooling or by pressure release.'], ['Scree', 'Angular rock fragments at the foot of a slope.']],
  [
    { q: 'Explain why insolation weathering is strong in hot deserts.', steps: ['Large daily range: **clear skies give hot days and cold nights.**', 'Expansion and contraction: **the outer layer heats and cools more than the inside.**', 'Stress: **repeated cycles weaken the bonds between minerals and layers.**', 'Result: **outer shells and grains break off; a little moisture speeds the process.**'] },
  ]),

  L('agg-weathering-2', 'agg-l6-weathering', '7.2', 'Chemical weathering and Peltier’s climate model', 17, ['Physical'], [
    '**Chemical weathering** changes the minerals:\n- **hydrolysis**: water reacts with feldspar in granite, forming clay (kaolinite) and releasing quartz grains\n- **hydration**: minerals absorb water and swell (anhydrite to gypsum)\n- **carbonation**: rain with dissolved carbon dioxide forms carbonic acid, which dissolves limestone as calcium bicarbonate\n- **oxidation**: iron minerals combine with oxygen, giving red and yellow colours and weakening the rock\n- **solution**: soluble minerals such as rock salt dissolve directly.',
    'Chemical reactions speed up with heat and moisture (roughly doubling for each 10 °C rise), so weathering is fastest in the **humid tropics**, where it produces **regolith** tens of metres deep, as on the South Cameroon plateau.',
    '**Peltier’s diagram** (1950) plots mean annual temperature against mean annual rainfall and shows the dominant weathering: strong chemical weathering in hot, wet climates; frost action where it is cold but moist; weak weathering in cold or very dry climates.',
    'Rock type matters too: limestone is vulnerable to carbonation, granite to hydrolysis, quartzite resists almost everything. Joints let water in; deep weathering along joints leaves corestones that form **tors** and **inselbergs** when the regolith is stripped away.',
  ], 'agg-peltier', 'Heat and moisture drive chemical weathering; Peltier plots it.',
  ['According to Peltier’s diagram, chemical weathering is strongest where:', ['temperature and rainfall are both high', 'it is cold and dry', 'it is cold and wet', 'it is hot and dry'], 'The humid tropics.'],
  [['Hydrolysis', 'The reaction of minerals with water, forming clay.'], ['Carbonation', 'The dissolving of limestone by carbonic acid.'], ['Regolith', 'The layer of weathered material above solid rock.']],
  [
    { q: 'Explain the formation of an inselberg on the granite of the North region.', steps: ['Deep weathering: **hydrolysis attacks granite along joints under a once wetter climate.**', 'Corestones: **widely jointed blocks survive while closely jointed rock rots.**', 'Stripping: **erosion removes the regolith.**', 'Result: **a steep-sided residual hill of fresh granite stands above the plain.**'] },
  ]),

  // ---------- 8. Slopes ----------
  L('agg-slopes-1', 'agg-l6-slopes', '8.1', 'Slope stability: forces and thresholds', 17, ['Physical'], [
    'On a slope, gravity pulls material downhill. The downslope part of its weight is the **shear stress**; the resistance of the material (friction between particles, cohesion, roots, cementation) is the **shear strength**. A slope is stable while shear strength exceeds shear stress; it fails when stress exceeds strength.',
    'Factors increasing **shear stress**: a steeper slope (natural undercutting by rivers or waves, or road cuts), extra weight (saturation by rain, buildings, waste dumps) and shaking by earthquakes or heavy traffic.',
    'Factors reducing **shear strength**: weathering, rising **pore water pressure** (which pushes grains apart), the removal of vegetation and its roots, and weak layers such as clay beneath permeable rock.',
    'The **angle of repose** is the steepest angle at which loose dry material rests (about 30 to 35°). Cohesive soils and vegetated slopes can stand steeper, until a **trigger**, usually intense rain, tips them over a threshold.',
  ], 'agg-slope-forces', 'Failure when shear stress > shear strength; water raises one and lowers the other.',
  ['Rising pore water pressure makes slopes less stable because it:', ['pushes grains apart and reduces friction', 'adds roots', 'dries the soil', 'lowers the slope angle'], 'It cuts shear strength.'],
  [['Shear stress', 'The force acting to move material downslope.'], ['Shear strength', 'The internal resistance of material to moving.'], ['Pore water pressure', 'The pressure of water in the spaces between soil particles.']],
  [
    { q: 'Explain why landslides in the western highlands of Cameroon usually happen in the rainy season.', steps: ['Saturation: **long, heavy rain fills the pores of deep weathered soils.**', 'Stress: **the extra water weight increases shear stress.**', 'Strength: **pore water pressure reduces friction between particles.**', 'Human factors: **cleared slopes and road cuts remove support.**', 'Result: **shear stress exceeds shear strength and the slope fails.**'] },
  ]),

  L('agg-slopes-2', 'agg-l6-slopes', '8.2', 'Types of mass movement and their management', 17, ['Physical'], [
    'Mass movements are classified by speed and water content:\n- **soil creep**: very slow, a few millimetres a year, by wetting and drying or heating and cooling (leaning trees and posts, terracettes)\n- **solifluction**: slow flow of saturated soil over frozen ground in periglacial areas\n- **earthflows** and **mudflows**: faster flows of wet fine material; mudflows can travel kilometres along valleys\n- **slides**: material moves as a block along a slip plane; **rotational slumps** on curved planes in clay\n- **rockfalls**: free fall of rock from steep faces, building scree.',
    'Cameroon examples: landslides on the steep, deeply weathered slopes of the Bamboutos mountains and around Bamenda and Dschang; the **Gouache** landslide in Bafoussam in October 2019, after heavy rain on a steep, built-up slope, killed dozens of people.',
    'Management:\n- **reduce stress**: regrade slopes to gentler angles, avoid loading the top\n- **increase strength**: drainage to lower pore water pressure, retaining walls, rock bolts, gabions, terracing and replanting\n- **avoid the risk**: hazard maps, building controls on steep slopes, early warning from rain gauges.',
    'Poor communities often settle on steep, cheap land at the edge of towns; enforcement of building rules and resettlement are as important as engineering.',
  ], 'agg-mass-movement', 'Classify by speed and water; manage by reducing stress, raising strength or avoiding the slope.',
  ['A rotational slump moves:', ['along a curved slip plane, often in clay', 'as a free fall of rock', 'very slowly as creep', 'as a liquid flow over permafrost'], 'The block rotates backwards.'],
  [['Slump', 'A rotational slide along a curved surface.'], ['Gabion', 'A wire cage filled with stones used to support slopes and banks.'], ['Terracette', 'A small step on a slope formed by creep and grazing.']],
  [
    { q: 'Assess ways of reducing landslide risk in a hillside quarter of Bamenda.', steps: ['Engineering: **drains, retaining walls and terraces raise shear strength; effective but costly.**', 'Planting: **roots bind the soil; cheap but slow to work.**', 'Planning: **hazard maps and building bans on the steepest slopes prevent exposure.**', 'Judgement: **combining planning with low-cost drainage and planting offers the most sustainable protection.**'] },
  ]),
];
