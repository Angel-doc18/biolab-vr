// Extra questions for the Upper Sixth A Level Geology lessons (0755).
//
// Convention: the correct option is written first; options are shuffled when shown.

const Q = (q, a, why) => ({ q, a, why });

export const QUESTIONS_U6 = {
  // ---------- Term 1 ----------
  'agl-exam-1': [
    Q('Paper 2 of A Level Geology lasted:', ['3 hours', '1½ hours', '2 hours', '45 minutes'], 'Thursday 4 June, afternoon.'),
    Q('Term 3 of Upper Sixth is planned for:', ['drills, the mock and corrections', 'new theory', 'field trips only', 'holidays only'], 'Theory ends by week 22.'),
    Q('The diagnostic review covers:', ['crystallography, QAPF, Barrovian zones and structure contours', 'only fossils', 'only Cameroon', 'nothing'], 'Lower Sixth base.'),
    Q('Because the practical is in May, students should:', ['revise identification and map skills early', 'leave practical skills to June', 'skip practical work', 'revise only essays'], 'Timing.'),
  ],
  'agl-exam-2': [
    Q('"Describe" asks for:', ['what is observed', 'reasons and processes', 'a judgement', 'a calculation'], 'Observation.'),
    Q('"Discuss" requires:', ['evidence for and against and a judgement', 'a list', 'a definition', 'a drawing only'], 'Balanced.'),
    Q('Good geological answers include:', ['named examples and labelled diagrams', 'only general statements', 'no diagrams', 'long quotations'], 'Specific evidence.'),
    Q('A calculation answer should show:', ['formula, substitution, units and result', 'only the result', 'only the formula', 'a guess'], 'Method marks.'),
  ],
  'agl-dating-1': [
    Q('After two half-lives, the fraction of parent left is:', ['1⁄4', '1⁄2', '1⁄8', '0'], '(1⁄2)².'),
    Q('Zircon is ideal for U-Pb dating because it:', ['takes in uranium but little lead when it forms', 'contains carbon', 'is soft', 'forms only in shells'], 'A clean start.'),
    Q('Charcoal with 1⁄8 of its original C-14 is about:', ['17,190 years old', '5,730 years old', '45,840 years old', '716 years old'], 'Three half-lives.'),
    Q('A radiometric date records when the mineral:', ['closed to loss or gain of atoms', 'was discovered', 'was weathered', 'was eroded'], 'Closure.'),
  ],
  'agl-dating-2': [
    Q('The Cenozoic era began about:', ['66.0 million years ago', '251.9 million years ago', '538.8 million years ago', '2.58 million years ago'], 'After the end-Cretaceous extinction.'),
    Q('The largest mass extinction was at the end of the:', ['Permian', 'Cretaceous', 'Jurassic', 'Quaternary'], '251.9 Ma.'),
    Q('The Precambrian makes up about what share of Earth history?', ['nearly 90%', 'about 10%', 'half', 'under 1%'], 'Over 4 billion years.'),
    Q('A bed between a 182 Ma lava and a 150 Ma dyke is of:', ['Jurassic age', 'Cretaceous age', 'Triassic age', 'Permian age'], 'Jurassic: 201.4 to 145.0 Ma.'),
  ],
  'agl-invertebrates-1': [
    Q('The larger valve of a brachiopod is the:', ['pedicle valve', 'brachial valve', 'left valve', 'umbo'], 'With the pedicle opening.'),
    Q('Brachiopods were most abundant in the:', ['Palaeozoic', 'Cenozoic', 'Quaternary', 'Precambrian'], 'Bivalves dominate later.'),
    Q('A deep pallial sinus in a bivalve shows:', ['a deep-burrowing life habit', 'a cemented habit', 'a swimming habit', 'a land habit'], 'Long siphons.'),
    Q('Oysters live:', ['cemented to hard surfaces', 'deep in burrows', 'swimming freely', 'on land'], 'Flat, irregular shells.'),
  ],
  'agl-invertebrates-2': [
    Q('Ceratites lived mainly in the:', ['Triassic', 'Cambrian', 'Cretaceous', 'Quaternary'], 'Frilled lobes only.'),
    Q('The siphuncle of a cephalopod:', ['links the chambers and controls buoyancy', 'is the mouth', 'is a valve', 'is a tooth'], 'Gas and fluid.'),
    Q('Many trilobite fossils are:', ['moults shed as the animal grew', 'complete soft bodies', 'eggs', 'tracks only'], 'Exoskeletons.'),
    Q('The parts of a gastropod shell include:', ['spire, whorls, suture and aperture', 'cephalon, thorax and pygidium', 'pedicle and brachial valves', 'septa and siphuncle only'], 'Coiled shell.'),
  ],
  'agl-maps2-1': [
    Q('A dyke on a map is:', ['discordant, cutting across beds', 'always concordant', 'a fold', 'an unconformity'], 'Cross-cutting.'),
    Q('If the same bed is at 200 m east and 120 m west of a fault at one place, the throw is:', ['80 m, down to the west', '80 m, down to the east', '320 m', '0 m'], 'Height difference.'),
    Q('Across an eroded anticline, the outcrop on the upthrown side of a dip-slip fault:', ['widens', 'narrows', 'stays the same', 'disappears'], 'Lower beds exposed.'),
    Q('On a section, fault movement is shown with:', ['half-arrows on either side of the fault', 'colours only', 'contour lines', 'no symbol'], 'Sense of slip.'),
  ],
  'agl-maps2-2': [
    Q('A fault not continuing into beds above an unconformity is:', ['older than those beds', 'younger than all beds', 'the youngest event', 'undatable'], 'Eroded first.'),
    Q('A geological history ends with:', ['present-day erosion', 'the first deposition', 'folding', 'the oldest intrusion'], 'Youngest last.'),
    Q('Absolute ages of intrusions are used to:', ['bracket other events in years', 'find ore', 'name rocks', 'find dip'], 'Combine relative and absolute.'),
    Q('Folding is dated relative to an unconformity by whether:', ['the beds above are folded too', 'the beds are red', 'fossils are present', 'the dip is east'], 'Structures stop at the unconformity if older.'),
  ],
  'agl-hydro-1': [
    Q('An aquitard:', ['passes water slowly', 'is a productive aquifer', 'is impermeable', 'is the water table'], 'Leaky layer.'),
    Q('A sample of 100 cm³ holding 18 cm³ of water has porosity:', ['18%', '82%', '1.8%', '0.18%'], 'Voids ÷ total.'),
    Q('Effective porosity counts:', ['only connected pores', 'all pores', 'only cracks', 'only grains'], 'Pores that let water flow.'),
    Q('A well in a confined aquifer flows at the surface when:', ['the piezometric surface is above ground', 'the aquifer is unconfined', 'the water table is deep', 'it is dry season'], 'Artesian.'),
  ],
  'agl-hydro-2': [
    Q('Darcy published his law in:', ['1856', '1669', '1935', '1963'], 'Fountains of Dijon.'),
    Q('Seepage velocity equals:', ['KI ÷ effective porosity', 'KIA', 'K ÷ I', 'Q × A'], 'Faster than Darcy velocity.'),
    Q('Near the coast, over-pumping can cause:', ['saltwater intrusion', 'more fresh water', 'volcanic eruptions', 'folding'], 'Seawater drawn in.'),
    Q('Latrines too close to wells can cause:', ['groundwater pollution', 'artesian flow', 'higher water tables', 'no effect'], 'Bacteria and nitrates.'),
  ],
  'agl-geophysics-1': [
    Q('Beyond the crossover distance, the first wave to arrive is the:', ['refracted (head) wave', 'direct wave', 'reflected wave only', 'surface wave'], 'Travels in the faster layer.'),
    Q('With V1 = 1,000 m/s, V2 = 3,000 m/s and xc = 100 m, the depth is about:', ['35 m', '50 m', '100 m', '71 m'], '50 × √0.5.'),
    Q('Seismic reflection depth equals:', ['velocity × two-way time ÷ 2', 'velocity × two-way time', 'time ÷ velocity', 'velocity ÷ time'], 'Down and back.'),
    Q('Refraction surveys are often used to find:', ['depth to bedrock and the water table', 'fossils', 'crystal systems', 'Miller indices'], 'Engineering and water.'),
  ],
  'agl-geophysics-2': [
    Q('A Wenner array uses:', ['four equally spaced electrodes', 'one electrode', 'geophones', 'a magnet'], 'ρa = 2πaR.'),
    Q('Fresh, dry granite has:', ['high resistivity', 'low resistivity', 'no resistivity', 'negative resistivity'], 'Few conductive paths.'),
    Q('A basic intrusion shows:', ['a positive gravity anomaly', 'a negative gravity anomaly', 'no anomaly', 'only a seismic gap'], 'Dense rock.'),
    Q('Airborne magnetic surveys help map:', ['basement structures and magnetite-rich iron ore under cover', 'fossil ranges', 'rainfall', 'cleavage'], 'Fast coverage.'),
  ],
  'agl-ores-1': [
    Q('A reserve differs from a resource because it is:', ['economic to mine now', 'larger', 'always gold', 'unknown'], 'Proven and profitable.'),
    Q('Gold grade is usually given in:', ['grams per tonne', 'per cent', 'metres', 'kilograms per litre'], 'Precious metals.'),
    Q('Porphyry copper deposits form around:', ['granite intrusions with hydrothermal systems', 'coral reefs', 'deserts', 'glaciers'], 'Disseminated ore and stockworks.'),
    Q('A grade of 0.6% copper over a crustal average of 0.006% is a concentration factor of:', ['100', '10', '1,000', '0.01'], '0.6 ÷ 0.006.'),
  ],
  'agl-ores-2': [
    Q('Cassiterite is an ore of:', ['tin', 'lead', 'zinc', 'aluminium'], 'SnO2.'),
    Q('Magnetite has the formula:', ['Fe3O4', 'Fe2O3', 'FeS2', 'PbS'], 'Magnetic iron oxide.'),
    Q('Nickel-cobalt laterites form over:', ['ultrabasic rocks under tropical weathering', 'limestone in deserts', 'sandstone in glaciers', 'coal seams'], 'Residual enrichment.'),
    Q('Gold collects on the inside of river bends because:', ['the current slows and dense grains settle', 'the current is fastest there', 'gold floats', 'it dissolves'], 'Placer.'),
  ],
  'agl-fuels-1': [
    Q('Kerogen is:', ['organic matter in a source rock that can generate oil and gas', 'a reservoir rock', 'a cap rock', 'a mineral ore'], 'Matures with heat.'),
    Q('With 30 °C per km and 25 °C at the surface, the top of the oil window (60 °C) is at about:', ['1.2 km', '2 km', '3.2 km', '0.5 km'], '(60 − 25) ÷ 30.'),
    Q('A gamma-ray well log mainly identifies:', ['shale', 'oil', 'water', 'salt only'], 'Radioactive potassium in clays.'),
    Q('Oil migrates because it is:', ['less dense than pore water', 'magnetic', 'solid', 'denser than water'], 'Buoyancy.'),
  ],
  'agl-fuels-2': [
    Q('A reef buried in mud can form:', ['a stratigraphic trap', 'a fault trap', 'a salt dome', 'no trap'], 'Porous reef sealed by shale.'),
    Q('Anthracite is:', ['the highest rank of coal', 'the lowest rank', 'peat', 'lignite'], 'Most carbon.'),
    Q('In a trap, the oil-water contact lies:', ['below the oil column', 'above the gas', 'at the surface', 'nowhere'], 'Density layering.'),
    Q('Rollover anticlines beside growth faults are typical of:', ['deltas such as the Niger Delta', 'cratons', 'deserts', 'glaciers'], 'Delta traps.'),
  ],
  'agl-ntem-1': [
    Q('The Archaean eon ended about:', ['2,500 million years ago', '66 million years ago', '538.8 million years ago', '4.54 billion years ago'], 'Then the Proterozoic.'),
    Q('Dolerite dykes cutting the Ntem Complex are:', ['younger than the complex', 'older than the complex', 'the same age', 'sedimentary'], 'Cross-cutting.'),
    Q('The Ntem Complex extends into:', ['Gabon and Equatorial Guinea', 'Nigeria and Chad', 'the Central African Republic only', 'Brazil today'], 'The Congo Craton.'),
    Q('The Nyong unit was reworked in the:', ['Eburnean event about 2,000 million years ago', 'Pan-African orogeny only', 'Cretaceous', 'Quaternary'], 'Palaeoproterozoic.'),
  ],
  'agl-ntem-2': [
    Q('BIFs formed when dissolved iron in the oceans:', ['was precipitated as oxygen became available', 'was evaporated', 'froze', 'was eroded'], 'Precambrian oceans.'),
    Q('High-grade haematite near the surface of an itabirite forms by:', ['weathering that removes silica', 'magma intrusion', 'evaporation', 'folding'], 'Supergene enrichment.'),
    Q('Iron ore deposits are found from the air by:', ['magnetic surveys', 'radar only', 'gravity of water', 'resistivity of air'], 'Magnetite anomalies.'),
    Q('Exporting iron ore from Mbalam needs:', ['a railway and a deep-water port', 'only a road', 'an airport', 'nothing'], 'Bulk commodity.'),
  ],
  'agl-panafrican-1': [
    Q('The Pan-African orogeny assembled:', ['Gondwana', 'Pangaea in the Cenozoic', 'the Atlantic', 'the CVL'], 'Collision of blocks.'),
    Q('The Yaoundé group was thrust:', ['southwards onto the Congo Craton', 'northwards into Chad', 'into the sea', 'nowhere'], 'Nappes.'),
    Q('The Central Cameroon Shear Zone trends:', ['ENE across the country', 'north to south', 'along the coast', 'east to west in the Far North only'], 'Into Brazil before drift.'),
    Q('The Adamawa-Yadé domain lies in:', ['central Cameroon', 'the coastal basins', 'the Ntem Complex', 'offshore'], 'Many granites.'),
  ],
  'agl-panafrican-2': [
    Q('Syn-tectonic granites are usually:', ['foliated', 'undeformed', 'glassy', 'sedimentary'], 'Deformed during intrusion.'),
    Q('Shear zones at depth form:', ['mylonites', 'breccias only', 'evaporites', 'coal'], 'Ductile deformation.'),
    Q('Gold in eastern Cameroon is linked to:', ['quartz veins in Pan-African shear zones and placers', 'coal seams', 'salt domes', 'coral reefs'], 'Hydrothermal and alluvial.'),
    Q('Inselbergs in central Cameroon are often:', ['resistant granite masses', 'volcanic cones', 'sand dunes', 'limestone reefs'], 'Late granites.'),
  ],

  // ---------- Term 2 ----------
  'agl-coastal-1': [
    Q('The rift stage of a margin is filled with:', ['continental river and lake sediments', 'deep-sea chalk', 'lava only', 'ice'], 'Before the sea entered.'),
    Q('Salt in a margin sequence records:', ['a restricted early sea that evaporated', 'a glacier', 'a volcano', 'a desert dune'], 'Transitional stage.'),
    Q('In the drift stage the margin:', ['cools and subsides under marine sediments', 'rises', 'erupts', 'folds strongly'], 'Thermal subsidence.'),
    Q('The West African margin today is:', ['passive', 'a subduction zone', 'a transform plate boundary', 'a collision zone'], 'No plate boundary.'),
  ],
  'agl-coastal-2': [
    Q('Gas from offshore Kribi feeds:', ['a floating LNG plant exporting since 2018', 'the Garoua basin', 'Lake Nyos', 'Mount Cameroon'], 'Liquefied natural gas.'),
    Q('Crude oil is refined at:', ['Limbe', 'Garoua', 'Bertoua', 'Maroua'], 'Near the coast.'),
    Q('Growth faults have:', ['thicker beds on the downthrown side', 'no displacement', 'thinner beds downthrown', 'only igneous rocks'], 'Active during deposition.'),
    Q('The Rio del Rey basin is part of the:', ['Niger Delta system', 'Benue Trough', 'Congo Craton', 'Lake Chad basin'], 'Western offshore.'),
  ],
  'agl-interior-1': [
    Q('The Benue Trough is described as an aulacogen because it is:', ['a failed arm of the Atlantic rift', 'a volcano', 'a craton', 'a delta'], 'Rifting stopped.'),
    Q('The Garoua basin is a:', ['half-graben bounded by normal faults', 'fold belt', 'volcanic crater', 'coral reef'], 'Cretaceous rift.'),
    Q('The Mamfe basin is known for its:', ['salt springs', 'volcanoes', 'glaciers', 'diamond pipes'], 'Cretaceous trough.'),
    Q('Lake shales in rift basins can be:', ['good oil source rocks', 'reservoir rocks only', 'metamorphic', 'igneous'], 'Organic-rich.'),
  ],
  'agl-interior-2': [
    Q('Lake Chad basin sediments are:', ['young Cenozoic lake and river deposits', 'Archaean gneisses', 'Pan-African schists', 'Jurassic marine limestones'], 'Cover over the rifts.'),
    Q('Lake Chad has shrunk since the 1960s mainly because of:', ['drought and water use', 'volcanic eruptions', 'earthquakes', 'glaciers'], 'Climate and people.'),
    Q('Interior basins differ from coastal basins because they:', ['stayed continental and never became ocean margins', 'are volcanic', 'are all Archaean', 'have no sediments'], 'Failed rifts.'),
    Q('Over-pumping groundwater in the Far North causes:', ['falling water tables', 'artesian flow', 'more rainfall', 'no change'], 'Sustainable use matters.'),
  ],
  'agl-cvl-1': [
    Q('The CVL is about how long?', ['1,600 km', '160 km', '16,000 km', '16 km'], 'From Annobón to the Biu plateau.'),
    Q('Which is NOT part of the CVL?', ['Mount Kilimanjaro', 'Bioko', 'Mount Oku', 'Manengouba'], 'Kilimanjaro is in East Africa.'),
    Q('A hot-spot origin predicts:', ['a steady age progression along the chain', 'no volcanoes', 'subduction', 'folding'], 'Plate over a fixed plume.'),
    Q('CVL magmas are rich in:', ['sodium and potassium (alkaline)', 'silica only', 'carbon', 'iron only'], 'Alkaline series.'),
  ],
  'agl-cvl-2': [
    Q('The Lake Monoun disaster occurred in:', ['1984', '1986', '1999', '2000'], '37 deaths.'),
    Q('Since 2001, Lake Nyos has been made safer by:', ['degassing pipes', 'draining the lake', 'filling it with sand', 'nothing'], 'Gas released gradually.'),
    Q('CO2 is dangerous in valleys because it is:', ['denser than air and displaces oxygen', 'lighter than air', 'poisonous only to plants', 'hot'], 'Pools in low ground.'),
    Q('A benefit of Mount Cameroon to people is:', ['fertile volcanic soils', 'gold', 'coal', 'salt'], 'Plantations.'),
  ],
  'agl-cmr-ores-1': [
    Q('Nkamouna near Lomié contains:', ['cobalt and nickel laterite', 'oil', 'coal', 'diamonds'], 'Over ultrabasic rocks.'),
    Q('Diamonds at Mobilong occur in:', ['alluvial gravels', 'basalt', 'granite veins', 'coal'], 'Placer deposits.'),
    Q('Limestone at Figuil is used to make:', ['cement', 'steel', 'glass only', 'fuel'], 'North region.'),
    Q('Rutile is an ore of:', ['titanium', 'tin', 'copper', 'lead'], 'TiO2.'),
  ],
  'agl-cmr-ores-2': [
    Q('Gold can be mined on a small scale because:', ['it has high value per tonne', 'it is a bulk commodity', 'it needs railways', 'it is very common'], 'Unlike iron ore.'),
    Q('Mercury used in artisanal gold mining:', ['pollutes rivers and harms health', 'cleans water', 'is harmless', 'adds value'], 'Toxic.'),
    Q('An environmental impact assessment is done:', ['before a project begins', 'after the mine closes', 'never', 'only for oil'], 'Plan to reduce harm.'),
    Q('Mine rehabilitation includes:', ['backfilling, topsoil replacement and replanting', 'abandoning pits', 'dumping in rivers', 'burning'], 'Restore the land.'),
  ],
  'agl-engineering-1': [
    Q('Coulomb’s equation for shear strength is:', ['τ = c + σ tan φ', 'Q = KIA', 'P = ρgh', 'E = mc²'], 'Cohesion plus friction.'),
    Q('The most effective way to stabilise a wet slope is usually:', ['drainage', 'adding weight to the top', 'cutting the toe', 'removing plants'], 'Lower pore pressure.'),
    Q('Discontinuities that dip into a slope make it:', ['more stable than those dipping out of it', 'less stable', 'collapse at once', 'no different'], 'No free face to slide on.'),
    Q('The Bafoussam landslide of 2019 followed:', ['heavy rain on steep, weathered slopes', 'a volcanic eruption', 'an earthquake swarm', 'a drought'], 'Western Highlands.'),
  ],
  'agl-engineering-2': [
    Q('The Malpasset dam failed in:', ['1959', '1963', '1986', '2001'], 'Foundation weakness.'),
    Q('A good dam site avoids:', ['soluble rocks and active faults', 'strong rock', 'narrow valleys', 'impermeable foundations'], 'Leaks and failure.'),
    Q('Grouting is used to:', ['seal joints and cracks in foundations', 'add weight', 'drain reservoirs', 'date rocks'], 'Reduce leakage.'),
    Q('Acid mine drainage comes from:', ['oxidation of sulphide minerals in waste', 'limestone', 'salt', 'clay'], 'Pyrite forms sulphuric acid.'),
  ],
  'agl-remote-1': [
    Q('Sentinel-2 satellites have imaged the Earth since:', ['2015', '1972', '1957', '1990'], 'European programme.'),
    Q('Water in a false-colour composite appears:', ['dark blue or black', 'bright red', 'white', 'green'], 'Absorbs near-infrared.'),
    Q('Clays and iron oxides can be mapped from space because they:', ['absorb at particular wavelengths', 'emit light', 'are magnetic', 'are always red'], 'Spectral signatures.'),
    Q('Radar is useful in cloudy forest regions because it:', ['penetrates cloud and shows relief', 'needs sunlight', 'sees colours', 'measures gravity'], 'Active sensor.'),
  ],
  'agl-remote-2': [
    Q('A GIS combines:', ['layers of mapped data', 'rock samples', 'fossils', 'thin sections'], 'Overlay analysis.'),
    Q('A landslide hazard map might overlay:', ['slope, soil and rainfall', 'fossil ranges', 'crystal systems', 'Miller indices'], 'Factors of instability.'),
    Q('Ground truth means:', ['checking image interpretations in the field', 'satellite orbit', 'map colour', 'GPS only'], 'Validation.'),
    Q('Veins often follow lineaments because:', ['fluids moved along faults and fractures', 'lineaments are roads', 'veins are sedimentary', 'lineaments are clouds'], 'Mineral exploration.'),
  ],
  'agl-gondwana-1': [
    Q('The Borborema province lies in:', ['north-east Brazil', 'southern Cameroon', 'Nigeria', 'India'], 'Pan-African counterpart.'),
    Q('Correlation across the Atlantic uses:', ['rock types, ages, structures and fossils', 'only coastlines', 'only rivers', 'only languages'], 'Several lines of evidence.'),
    Q('The Pernambuco shear zone is thought to line up with the:', ['Central Cameroon Shear Zone', 'CVL', 'Benue Trough', 'Ntem Complex'], 'Fitted continents.'),
    Q('Gondwana correlations help mineral exploration because:', ['deposit types on one side may continue on the other', 'minerals move with water', 'they predict rainfall', 'they date fossils'], 'Shared geology.'),
  ],
  'agl-gondwana-2': [
    Q('Glossopteris was a:', ['seed fern found across the southern continents', 'marine reptile', 'trilobite', 'coral'], 'Gondwana flora.'),
    Q('Wegener’s weakness was that he lacked:', ['a convincing mechanism', 'fossil evidence', 'maps', 'rock evidence'], 'Plate tectonics later supplied it.'),
    Q('The continental fit is best at:', ['the edge of the continental shelf', 'the present coastline', 'the river mouths', 'the mountain tops'], 'True continental edge.'),
    Q('A practical logbook should be:', ['complete, dated and checked by week 22', 'started in June', 'blank', 'copied from others'], 'Syllabus closure.'),
  ],

  // ---------- Term 3 ----------
  'agl-drills-1': [
    Q('In a three-point problem with heights 600, 400 and 500 m, the 500 m point on the line from 600 to 400 lies:', ['halfway along it', 'at the 600 m point', 'at the 400 m point', 'off the line'], 'Linear interpolation.'),
    Q('A common mapping error is:', ['using the wrong vertical exaggeration', 'labelling the section', 'adding a key', 'using a pencil'], 'Check scales.'),
    Q('High-yield Paper 1 topics include:', ['dating calculations and Darcy’s law', 'only the history of geology', 'spelling', 'only fossils'], 'Calculations recur.'),
    Q('Fault throw on a map is found from:', ['structure contours of one bed on each side', 'the length of the fault', 'the colour of beds', 'fossils'], 'Height difference.'),
  ],
  'agl-drills-2': [
    Q('The mock should include:', ['the practical and both written papers under exam timing', 'only Paper 1', 'open-book work', 'no timing'], 'Full rehearsal.'),
    Q('A strong essay on Cameroon geology names:', ['units, ages, rock types and deposits', 'only general ideas', 'no places', 'only other countries'], 'Specific detail.'),
    Q('Miscalculated decay ages often come from:', ['wrong numbers of half-lives or units', 'using a calculator', 'labelling', 'neat writing'], 'Check the steps.'),
    Q('Remediation means:', ['targeted correction of weaknesses found in a test', 'starting new topics', 'resting', 'repeating easy questions'], 'Fix what was wrong.'),
  ],
};
