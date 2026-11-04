// A Level Geology lessons (0755), Upper Sixth, Terms 2 and 3: the coastal and
// interior basins of Cameroon, the Cameroon Volcanic Line, Cameroon’s mineral
// deposits, engineering geology, remote sensing and GIS, Gondwana and
// syllabus closure, and the final drills.

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

export const LESSONS_GLU6B = [
  // ---------- 11. Coastal basins ----------
  L('agl-coastal-1', 'agl-u6-coastal', '11.1', 'The opening of the South Atlantic and passive margins', 18, ['Cameroon'], [
    'In the **Cretaceous**, Africa and South America rifted apart and the **South Atlantic** opened. Along the new continental margins, the crust stretched, thinned and subsided, creating **sedimentary basins**.',
    'Stages of a **passive margin**:\n- **rift stage**: normal faults bound tilted blocks; continental sediments (river and lake sands and shales) fill the rifts; lake shales can be oil source rocks\n- **transitional stage**: the sea enters a narrow, restricted gulf; evaporites (salt) may form\n- **drift stage**: as the ocean widens, the margin cools and subsides, and thick marine sediments, then deltaic deposits, build out over it.',
    'Today the West African margin is **passive**: no plate boundary lies along it, though old faults and the volcanic line affect the Cameroon coast.',
  ], 'agl-rift-margin', 'Rift sediments are continental; drift sediments are marine.',
  ['Cameroon’s coastal basins formed when:', ['the South Atlantic opened in the Cretaceous', 'the Pan-African belt formed', 'the Ntem Complex formed', 'glaciers retreated'], 'Rifting of Gondwana.'],
  [['Passive margin', 'A continental margin with no active plate boundary.'], ['Rift stage', 'The early faulting and subsidence before an ocean opens.']],
  [
    { q: 'A borehole on the coast passes down from deltaic sands, to marine shales, to salt, to lake shales and conglomerates on basement. Interpret it.', steps: ['Lowest: **conglomerates and lake shales**: the **rift stage**.', 'Salt: a **restricted early sea** (transitional stage).', 'Marine shales: the **drift stage**, open ocean.', 'Top: **deltaic sands** building out over the margin.'] },
  ]),
  L('agl-coastal-2', 'agl-u6-coastal', '11.2', 'The Rio del Rey, Douala and Kribi-Campo basins', 18, ['Cameroon'], [
    'Cameroon’s coastal basins:\n- the **Rio del Rey basin**, offshore in the far west, the eastern edge of the **Niger Delta** system: thick Cenozoic deltaic sands and shales with **growth faults** and rollover anticlines; Cameroon’s main **oil**-producing area\n- the **Douala basin**, onshore and offshore around Douala: Cretaceous and Cenozoic sediments with gas and some oil\n- the **Kribi-Campo basin**, a narrow basin to the south; offshore gas from this area supplies a **floating liquefied natural gas (FLNG)** plant that began exporting in **2018**.',
    'Crude oil is refined at **Limbe**. Exploration relies on seismic reflection surveys, which show tilted fault blocks below and deltaic wedges above.',
  ], 'agl-coastal-basins', 'Rio del Rey for oil; Douala and Kribi for gas.',
  ['Cameroon’s main oil-producing basin is:', ['the Rio del Rey basin', 'the Garoua basin', 'the Logone Birni basin', 'the Mamfe basin'], 'Part of the Niger Delta system.'],
  [['Growth fault', 'A fault active during deposition, with thicker beds on the downthrown side.'], ['FLNG', 'A floating plant that liquefies natural gas for export.']],
  [
    { q: 'Seismic profiles of the Rio del Rey basin show beds that thicken across faults. Explain.', steps: ['The faults moved **while sediment was being deposited**: **growth faults**.', 'More space opened on the **downthrown side**, so beds are thicker there.', 'Rollover anticlines beside them form **oil traps**.'] },
  ]),

  // ---------- 12. Interior basins ----------
  L('agl-interior-1', 'agl-u6-interior', '12.1', 'The Benue Trough and the Garoua basin', 18, ['Cameroon'], [
    'During the Cretaceous opening of the Atlantic, rifts also cut deep into Africa: the **West and Central African Rift System**. The **Benue Trough**, often described as a failed arm of the Atlantic rift (an aulacogen), runs north-east across Nigeria; the **Garoua basin** in northern Cameroon is its eastern branch.',
    'The Garoua basin is a **half-graben** bounded by normal faults, filled with Cretaceous **continental sandstones and conglomerates** and lake shales. The **Mamfe basin** in the South-West region is a similar Cretaceous trough near the Nigerian border, known for its salt springs.',
    'Rift basins are explored for oil because **lake shales** can be rich source rocks and **tilted fault blocks** make traps.',
  ], 'agl-interior', 'A rift that never became an ocean is a failed rift: the Benue Trough.',
  ['The Garoua basin is part of the:', ['Benue Trough', 'Congo Craton', 'Rio del Rey basin', 'Cameroon Volcanic Line'], 'A Cretaceous rift.'],
  [['Aulacogen', 'A failed arm of a rift that extends into a continent.'], ['Half-graben', 'A basin bounded by a major fault on one side only.']],
  [
    { q: 'Why might a Cretaceous lake basin inland be worth exploring for oil?', steps: ['Lakes in rifts accumulate **organic-rich shales**: potential **source rocks**.', 'Fault blocks and sandstones give **traps and reservoirs**.', '**Similar rift basins in Chad and Sudan produce oil.**'] },
  ]),
  L('agl-interior-2', 'agl-u6-interior', '12.2', 'The Logone Birni and Lake Chad basins', 16, ['Cameroon'], [
    'The **Logone Birni basin** in the Far North, beside the border with Chad, is another Cretaceous rift of the Central African Rift System, linked to the oil-bearing basins of southern Chad. It is buried beneath younger cover.',
    'Over the rifts lie young (Cenozoic) **lake and river deposits** of the **Lake Chad basin**, important aquifers in a dry region. Lake Chad itself has shrunk greatly since the 1960s because of drought and water use.',
    'Comparing basins: the coastal basins became an **ocean margin** with marine sediments; the interior basins remained **continental** rifts, with river and lake sediments.',
  ], 'agl-cmr-units', 'Coastal basins became marine; interior basins stayed continental.',
  ['The Logone Birni basin lies:', ['in the Far North, near Chad', 'on the coast', 'in the South region', 'in the Adamawa plateau'], 'Central African Rift System.'],
  [['Rift system', 'A linked set of fault-bounded basins formed by stretching.']],
  [
    { q: 'Explain why groundwater from Lake Chad basin sediments matters to the Far North.', steps: ['Rainfall is **low and seasonal**.', 'Thick **porous sands** of the basin are **aquifers**.', 'Boreholes supply towns and farms, but **overpumping** lowers water tables.'] },
  ]),

  // ---------- 13. The volcanic line ----------
  L('agl-cvl-1', 'agl-u6-cvl', '13.1', 'The structure and origin of the Cameroon Volcanic Line', 20, ['Cameroon'], [
    'The **Cameroon Volcanic Line** (CVL) is a chain of volcanoes and plutonic complexes about **1,600 km** long, running from **Annobón** (Pagalu) in the Gulf of Guinea through **São Tomé**, **Príncipe** and **Bioko**, to **Mount Cameroon**, **Manengouba**, the **Bamboutos** and **Oku** highlands, and on to the **Adamawa** and **Biu** plateaus. It is unique in crossing from **oceanic** to **continental** crust.',
    'Its lavas form an **alkaline** series: **basalt → hawaiite → trachyte → phonolite**, silica-undersaturated and rich in Na and K, typical of **intraplate** volcanism.',
    'Origin is debated. The line shows **no simple age progression**, which argues against a single fixed **hot spot**. Other models link it to melting along an old **lithospheric weakness** (such as the Central Cameroon Shear Zone) reactivated during Cretaceous and later stresses, or to small-scale convection at the edge of the Congo Craton.',
  ], 'agl-cvl', 'Oceanic in the south-west, continental in the north-east: one line across both.',
  ['The CVL’s lavas belong to:', ['an alkaline series from basalt to phonolite', 'a calc-alkaline andesite series', 'mid-ocean ridge basalts only', 'rhyolites only'], 'Intraplate volcanism.'],
  [['Intraplate volcanism', 'Volcanism away from plate boundaries.'], ['Phonolite', 'A silica-undersaturated, alkali-rich volcanic rock.']],
  [
    { q: 'Give one argument for and one against a hot-spot origin of the CVL.', steps: ['For: **alkaline basalts** like those of known hot spots, and a long line of centres.', 'Against: **no steady age progression** along the line, as a plate moving over a fixed plume would give.', '**So many geologists favour melting along an old lithospheric weakness.**'] },
  ]),
  L('agl-cvl-2', 'agl-u6-cvl', '13.2', 'Volcanic hazards: Mount Cameroon, Monoun and Nyos', 20, ['Cameroon'], [
    '**Mount Cameroon** is the most active volcano of the line, with basaltic flank eruptions during the 20th century and in **1999** and **2000**. Hazards: lava flows down valleys, ash, gas, earthquakes and landslides on its steep slopes. Benefits: fertile soils for plantations and tourism.',
    'The crater lakes of the line pose a rarer hazard. On **15 August 1984**, **Lake Monoun** released a cloud of carbon dioxide that killed **37** people. On **21 August 1986**, **Lake Nyos** released a far larger cloud that flowed down the valleys and killed about **1,700** people and thousands of cattle.',
    'Cause: CO2 from magma below seeps into the deep water and builds up in the dense, stratified bottom layer. A trigger (perhaps a landslide or overturn) brings deep water up; the gas comes out of solution like a shaken soft drink. Since 2001, **degassing pipes** have lifted deep water to the surface so the gas escapes gradually.',
  ], 'agl-nyos', 'CO2 is denser than air: it flowed down valleys and pooled in low ground.',
  ['The Lake Nyos disaster happened in:', ['1986', '1984', '1999', '1922'], 'About 1,700 people died.'],
  [['Limnic eruption', 'A sudden release of dissolved gas from a lake.'], ['Degassing', 'The controlled release of gas from a lake through pipes.']],
  [
    { q: 'Why did the Nyos gas cloud kill people in villages several kilometres from the lake?', steps: ['CO2 is about **1.5 times denser than air**.', 'The cloud **flowed down valleys** and settled in low ground.', 'It **displaced oxygen**, suffocating people and animals asleep at night.'] },
  ]),

  // ---------- 14. Cameroon's minerals ----------
  L('agl-cmr-ores-1', 'agl-u6-cmr-ores', '14.1', 'Mineral resources of Cameroon and their geology', 20, ['Cameroon'], [
    'Cameroon’s main deposits, with their geological origin:\n- **iron ore**: **Mbalam** (East) and **Nkout** (South), in banded iron formations of the old basement, enriched by weathering\n- **bauxite**: **Minim-Martap** and **Ngaoundal** on the Adamawa plateau, residual deposits formed by long tropical weathering of aluminium-rich rocks\n- **gold**: alluvial placers and quartz veins in the **East** (Bétaré-Oya, Batouri), linked to Pan-African shear zones\n- **diamonds**: alluvial gravels at **Mobilong** (East region)\n- **cobalt-nickel**: laterites at **Nkamouna** near Lomié, over ultrabasic rocks\n- **rutile**: residual and placer concentrations around Akonolinga\n- **limestone**: Figuil (North), for cement\n- **oil and gas**: coastal basins.',
    'Note how each deposit matches a process: residual weathering (bauxite, laterite, enriched iron ore), placers (gold, diamond, rutile), hydrothermal veins (gold), sedimentary (BIF, limestone).',
  ], 'geol-cameroon-resources', 'Link every Cameroonian deposit to its process: that is what essay questions reward.',
  ['The bauxite of Minim-Martap is a:', ['residual deposit from tropical weathering', 'hydrothermal vein', 'placer', 'magmatic segregation'], 'Silica leached out.'],
  [['Laterite', 'A red, iron- and aluminium-rich soil or rock formed by tropical weathering.']],
  [
    { q: 'Explain why the Adamawa plateau has bauxite while the Far North does not.', steps: ['Bauxite needs **long, intense weathering** in a **hot, wet climate** and good drainage.', 'The Adamawa plateau has **old surfaces** with seasonal heavy rain and aluminium-rich rocks.', 'The **drier Far North** lacks the leaching, and much is covered by young sediments.'] },
  ]),
  L('agl-cmr-ores-2', 'agl-u6-cmr-ores', '14.2', 'Mining in Cameroon: economics and environment', 18, ['Applied'], [
    'Whether a deposit is mined depends on **grade**, **tonnage**, **depth**, **transport** and **world prices**. Iron ore at Mbalam and bauxite at Minim-Martap need **railways** and a **deep-water port** (Kribi) to be economic; gold and diamonds, high in value per tonne, can be mined on a small scale.',
    '**Artisanal mining** of gold in the East gives incomes but brings unsafe pits, deforestation, river silting, **mercury** pollution, child labour and loss of tax revenue. Semi-mechanised mining can leave open pits that fill with water.',
    'Good practice: environmental impact assessment before mining, safe pit design, settling ponds for wastewater, mercury-free gold recovery, **rehabilitation** (backfilling, topsoil replacement, replanting), and benefit-sharing with local communities, as required by mining law.',
  ], 'agl-cmr-ores', 'Bulk ores need railways; precious metals need regulation.',
  ['A major problem of artisanal gold mining is:', ['mercury pollution and unsafe open pits', 'too much rehabilitation', 'very high taxes paid', 'no rivers'], 'Health and environment.'],
  [['Artisanal mining', 'Small-scale mining with simple tools.'], ['Environmental impact assessment', 'A study of a project’s likely effects before it begins.']],
  [
    { q: 'An iron ore deposit has 300 million tonnes at 40% iron, 500 km from the coast. What would decide whether it is mined?', steps: ['**Grade and tonnage**: large but moderate grade; may need beneficiation.', '**Transport**: a railway and port are needed; their cost must be covered.', '**World price** of iron ore and long-term contracts.', '**Financing and environmental approval.**'] },
  ]),

  // ---------- 15. Engineering geology ----------
  L('agl-engineering-1', 'agl-u6-engineering', '15.1', 'Slope stability and landslides', 20, ['Applied'], [
    'A slope is stable while the **shear strength** of its material exceeds the **shear stress** pulling it down. The **factor of safety** = resisting forces ÷ driving forces; below 1, failure occurs. Shear strength depends on cohesion and friction (Coulomb: τ = c + σ tan φ).',
    'Factors lowering stability: **steep slopes**; **weak, weathered** materials; **discontinuities** (bedding, joints, faults) that **dip out of the slope**; **water**, which raises pore pressure and weight; removal of support at the toe (road cuts, river erosion); loading of the top; earthquakes; and loss of vegetation.',
    'Stabilisation: **drainage** (the most effective), reducing slope angle (terracing), **retaining walls**, **rock bolts** and anchors, nets and shotcrete, buttresses, and planting. Landslides in the **Western Highlands** of Cameroon, on steep slopes of weathered volcanic soils after heavy rain, have caused deaths in recent years, for example near Bafoussam in 2019.',
  ], 'agg-slope-forces', 'Water is usually the trigger: drain the slope first.',
  ['A factor of safety of 0.8 means the slope is:', ['likely to fail', 'very stable', 'exactly balanced', 'dry'], 'Driving forces exceed resistance.'],
  [['Shear strength', 'The resistance of a material to sliding.'], ['Factor of safety', 'Resisting forces divided by driving forces.'], ['Pore pressure', 'The pressure of water in the pores of a soil or rock.']],
  [
    { q: 'A road cut is made in shale whose bedding dips 35° towards the road. Assess the risk and suggest remedies.', steps: ['Bedding **dips out of the cut**: blocks can slide along bedding planes (planar failure).', 'Shale weakens when wet: **high risk** in the rainy season.', 'Remedies: **drainage**, a gentler cut angle, **rock bolts** across bedding, and a retaining wall at the toe.'] },
  ]),
  L('agl-engineering-2', 'agl-u6-engineering', '15.2', 'Dams, foundations and mine rehabilitation', 18, ['Applied'], [
    'A dam site needs a narrow valley with **strong, impermeable** foundations and abutments, **no active faults**, no soluble rocks (limestone, gypsum) or open joints that could leak, and stable reservoir slopes. Site investigation uses mapping, boreholes, geophysics and permeability tests; grouting seals joints.',
    'Two classic failures:\n- **Malpasset**, France (1959): the arch dam failed because of weakness in its rock foundation along a fault and joints; over 400 people died\n- **Vajont**, Italy (1963): a huge landslide on weak, clay-rich beds dipping into the reservoir pushed a wave over the dam, killing about 2,000 people; the dam itself stood.',
    'Mine **rehabilitation** restores land after mining: stabilising waste dumps, backfilling pits, replacing topsoil, controlling acid drainage and replanting with native species. It should be planned and funded before mining begins.',
  ], 'agl-dams', 'At Vajont the dam held but the valley side failed: geology, not concrete, decided it.',
  ['At Vajont in 1963:', ['a landslide into the reservoir sent water over the dam', 'the dam collapsed in an earthquake', 'a volcano erupted', 'nothing happened'], 'The reservoir slope failed.'],
  [['Abutment', 'The valley side against which a dam rests.'], ['Grouting', 'Injecting cement or chemicals to seal cracks in rock.']],
  [
    { q: 'A proposed dam site lies on limestone cut by a fault. List the risks.', steps: ['**Limestone dissolves**: caves and joints may let the reservoir **leak**.', 'The **fault** may be weak or active: foundation failure or earthquakes.', '**Conclusion: unsuitable unless extensive grouting and investigation show otherwise.**'] },
  ]),

  // ---------- 16. Remote sensing ----------
  L('agl-remote-1', 'agl-u6-remote', '16.1', 'Satellite images and false-colour composites', 18, ['Applied'], [
    '**Remote sensing** collects information about the surface from aircraft or satellites. The **Landsat** programme has imaged the Earth since **1972**; Sentinel-2 satellites since 2015. Sensors record reflected energy in **bands**: blue, green, red, near-infrared and shortwave infrared, plus thermal and radar.',
    'A **true-colour composite** shows red, green and blue bands as they appear. In a standard **false-colour composite**, **near-infrared is shown as red**, so healthy **vegetation appears red**, water dark blue or black, bare rock and soil in browns and greys.',
    'Rocks and minerals have **spectral signatures**: clays and iron oxides absorb at particular wavelengths, so **hydrothermally altered** zones can be mapped from space. **Radar** sees through cloud, valuable in the humid forests of southern Cameroon.',
  ], 'agl-remote', 'False colour: red means plants.',
  ['In a standard false-colour composite, healthy vegetation appears:', ['red', 'green', 'white', 'black'], 'Near-infrared is shown in red.'],
  [['Spectral band', 'A range of wavelengths recorded by a sensor.'], ['False-colour composite', 'An image showing non-visible bands as visible colours.']],
  [
    { q: 'Why is radar useful for geological mapping in southern Cameroon?', steps: ['The region is often **cloud-covered** and under **dense forest**.', 'Radar **penetrates cloud** and shows **surface relief**.', 'Relief reveals **lineaments, ridges and valleys** that follow structures.'] },
  ]),
  L('agl-remote-2', 'agl-u6-remote', '16.2', 'Lineaments and GIS', 18, ['Applied'], [
    'A **lineament** is a straight or gently curved line on an image (aligned valleys, ridges, vegetation or drainage) that often marks a **fault, fracture zone, dyke or shear zone**. Lineament maps guide **groundwater** drilling in hard-rock areas (fractures hold water), **mineral exploration** (veins follow faults) and **hazard** studies.',
    'A **geographic information system** (GIS) stores mapped data as **layers** (geology, topography, slope, drainage, lineaments, soils, rainfall, land use) and combines them. Overlay analysis can produce **landslide hazard maps** (steep slopes + weak soils + high rainfall), **groundwater potential maps** (fractures + permeable rocks + low slope) and **mineral prospectivity maps**.',
    'Remote sensing never replaces fieldwork: features must be **ground-truthed** in the field.',
  ], 'agl-gis', 'Every lineament is a hypothesis until it is checked in the field.',
  ['Lineaments are used in groundwater exploration because:', ['fracture zones can store and transmit water in hard rock', 'they are always dry', 'they show oil', 'they show clay'], 'Drill on fractures.'],
  [['Lineament', 'A linear feature on an image, often reflecting a geological structure.'], ['Ground truth', 'Checking remote observations in the field.']],
  [
    { q: 'Plan a GIS map of groundwater potential for a granite area.', steps: ['Layers: **lineament density**, **weathered-zone thickness**, **slope**, **drainage**, **rainfall**.', 'Score each layer (high near fractures, gentle slopes, thick weathering).', '**Overlay and add the scores**; check high-scoring sites with resistivity before drilling.'] },
  ]),

  // ---------- 17. Gondwana ----------
  L('agl-gondwana-1', 'agl-u6-gondwana', '17.1', 'Cameroon and Brazil in Gondwana', 18, ['Cameroon'], [
    'Before the South Atlantic opened, Cameroon lay against north-east **Brazil** in the supercontinent **Gondwana**. Geologists match the two sides:\n- the **Congo Craton** (with the Ntem Complex) continues as the **São Francisco Craton**\n- the **Central African Fold Belt** continues as the **Borborema province** of north-east Brazil\n- the **Central Cameroon Shear Zone** lines up with major shear zones of the Borborema, such as the **Pernambuco** shear zone.',
    'Such correlations use rock types, ages, metamorphic grade, structural trends and fossils. They support plate reconstructions and help explore for minerals: a deposit type known on one side may be sought on the other.',
  ], 'agl-gondwana', 'Close the Atlantic on paper and Cameroon’s structures run straight into Brazil.',
  ['The Congo Craton’s counterpart in South America is the:', ['São Francisco Craton', 'Andes', 'Amazon basin', 'Guiana Shield only'], 'Joined in Gondwana.'],
  [['Gondwana', 'The southern supercontinent that included Africa, South America, India, Antarctica and Australia.'], ['Correlation', 'Matching rocks and structures across regions.']],
  [
    { q: 'How could a geologist test the match between the Central Cameroon Shear Zone and a Brazilian shear zone?', steps: ['Compare **ages** of shearing and granites (similar Pan-African dates).', 'Compare **rock types, metamorphic grade and sense of movement**.', 'Check that the zones **line up** when the continents are fitted together.'] },
  ]),
  L('agl-gondwana-2', 'agl-u6-gondwana', '17.2', 'Evidence for drift, and closing the syllabus', 16, ['Method'], [
    'Alfred **Wegener** (The Origin of Continents and Oceans, **1915**) used several lines of evidence: the **jigsaw fit** of coastlines (better at the edge of the continental shelf); **matching rock belts and structures**; identical **fossils** on now-separate continents (the reptile **Mesosaurus** in Brazil and southern Africa; the plant **Glossopteris** across the southern continents); and **tillites** and striations showing a late Palaeozoic ice sheet across joined continents. Plate tectonics later supplied the mechanism.',
    'Closing the syllabus: by week 22, all theory and practical work should be complete. Assemble the **practical logbook**: dated, labelled records of specimens, thin sections or sketches, map sections and calculations, checked and corrected.',
  ], 'agl-drift-evidence', 'Fossils that could not swim oceans prove the continents were joined.',
  ['Mesosaurus fossils in Brazil and southern Africa support drift because:', ['this freshwater reptile could not cross an ocean', 'it was a strong swimmer in the sea', 'it lived everywhere', 'it was a plant'], 'Matching fossils.'],
  [['Tillite', 'Lithified glacial till.'], ['Continental drift', 'Wegener’s idea that continents move across the Earth’s surface.']],
  [
    { q: 'Tillites of the same age occur in South America, Africa, India and Australia, some now near the equator. Explain.', steps: ['Tillites record **glaciation**.', 'Glaciers could not form near the equator at sea level.', 'So these lands were **joined near the South Pole** in Gondwana and have **drifted** since.'] },
  ]),

  // ---------- 18. Final drills ----------
  L('agl-drills-1', 'agl-u6-drills', '18.1', 'Paper 1 marathons and Paper 2 mapping clinics', 18, ['MCQ'], [
    'High-yield items for Paper 1: Miller indices; crystal systems; silicate structures; Mohs scale; Bowen’s series and phase diagrams; QAPF and silica limits; Hjulström and Wentworth; stratigraphic principles; Barrow’s zones and facies; folds and faults; dating calculations; index fossils and their ranges; Darcy’s law; geophysical methods; ore types; traps; and Cameroon’s units and deposits.',
    'Mapping clinics: draw a profile, add structure contours, construct the section with the correct **vertical exaggeration**, solve **three-point problems**, find fault **throw**, and write the geological history with evidence.',
    'Check calculations: half-lives (powers of 1⁄2), Darcy units, refraction depth, VE, and tan(dip).',
  ], 'agl-key-skills', 'Most lost marks in mapping come from wrong scales and misplaced boundaries: check each against the map.',
  ['The vertical exaggeration of a section with scales 1:25,000 (horizontal) and 1:5,000 (vertical) is:', ['5', '0.2', '25', '125'], '25,000 ÷ 5,000.'],
  [['Three-point problem', 'Finding strike and dip from three heights of one surface.']],
  [
    { q: 'A bed is at 600 m at A, 400 m at B and 500 m at C, with B 2 km from A. Find where the 500 m strike line starts.', steps: ['On AB, 500 m is **halfway** (600 to 400 m): 1 km from A.', 'Join that point to **C (500 m)**: the **500 m structure contour**, the strike.', 'Draw parallel lines through A and B; their spacing gives the dip.'] },
  ]),
  L('agl-drills-2', 'agl-u6-drills', '18.2', 'The mock, remediation and essay clinics', 16, ['Method'], [
    'The mock should copy the real examination: the practical, then Paper 1 and Paper 2 on one day, under strict timing.',
    'Remediation: correct every script against the mark scheme; redo questions with **misaligned fault planes**, wrong **vertical profiles** or **miscalculated decay ages**; rewrite one essay per weak topic.',
    'Essay clinics on Cameroon geology, ore genesis, hydrogeology and geophysics: plan with **headings**, use **named examples** (Ntem Complex, Pan-African belt, Rio del Rey, CVL, Lake Nyos, Mbalam, Minim-Martap), **labelled diagrams**, and finish with a clear conclusion.',
  ], 'agl-final-term', 'Name places, ages and rock types: specific beats general every time.',
  ['After the mock, the most useful task is:', ['correcting answers and redoing weak questions', 'starting new topics', 'only noting the marks', 'stopping practice'], 'Turn errors into marks.'],
  [['Remediation', 'Targeted work to correct weaknesses found in a test.']],
  [
    { q: 'Plan an essay: "Discuss the geological factors that explain the distribution of mineral resources in Cameroon."', steps: ['Introduction: **the main geological units** (craton, Pan-African belt, basins, CVL).', 'Craton and BIF: **iron ore** (Mbalam, Nkout).', 'Weathering on old surfaces: **bauxite** (Minim-Martap) and **laterites** (Nkamouna).', 'Shear zones and placers: **gold and diamonds** in the East.', 'Basins: **oil and gas** (Rio del Rey, Kribi).', 'Conclusion: **geology sets where deposits form; economics decides which are mined**.'] },
  ]),
];
