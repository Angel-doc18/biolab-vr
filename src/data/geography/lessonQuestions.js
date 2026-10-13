// Extra questions for the end of Geography lessons, so that every lesson ends
// with at least five questions on what it teaches (see src/lib/lessonQuiz.js).
//
// Convention: the correct option is written first; options are shuffled when shown.

const Q = (q, a, why) => ({ q, a, why });

export const LESSON_QUESTIONS = {
  'ge-living-1': [
    Q('The Earth is about how far from the Sun?', ['150 million km', '15 million km', '1 million km', '1500 million km'], 'At this distance water stays liquid.'),
    Q('About how much of the Earth’s surface is covered by water?', ['71%', '29%', '50%', '90%'], 'That is why it is called the blue planet.'),
    Q('The Earth’s magnetic field protects life by:', ['Turning away dangerous particles from the Sun', 'Making rain', 'Producing oxygen', 'Heating the oceans'], 'The ozone layer protects against ultraviolet rays.'),
  ],
  'ge-shape-1': [
    Q('The shape of the Earth, slightly flattened at the poles, is called:', ['An oblate spheroid', 'A perfect cube', 'A flat disc', 'A cylinder'], 'It bulges slightly at the Equator.'),
    Q('Magellan’s expedition of 1519 to 1522 helped prove the Earth is round by:', ['Sailing all the way round the world', 'Flying over it', 'Digging through it', 'Measuring the Moon'], 'The ships returned from the opposite direction.'),
  ],
  'ge-atmos-1': [
    Q('The layer of the atmosphere where all our weather happens is the:', ['Troposphere', 'Stratosphere', 'Ozone layer', 'Thermosphere'], 'Clouds form in the troposphere.'),
    Q('Which of these is an element of weather?', ['Wind', 'Vegetation', 'Population', 'Relief'], 'Temperature, rainfall, humidity and pressure are others.'),
  ],
  'ge-protect-1': [
    Q('Bush fires harm the soil because they:', ['Leave it bare and kill useful soil organisms', 'Add water to it', 'Make it fertile for ever', 'Plant trees'], 'Bare soil is then easily eroded.'),
    Q('Which action protects a stream?', ['Building latrines far from it', 'Washing with chemicals in it', 'Fishing with poison', 'Throwing refuse into it'], 'Trees and grass along the banks also help.'),
  ],
  'ge-rotation-2': [
    Q('The Earth’s axis is tilted at about:', ['23½° from the upright', '45°', '90°', '0°'], 'The tilt, with revolution, causes the seasons.'),
    Q('Compared with a place further west, a place further east sees the Sun rise:', ['Earlier', 'Later', 'At the same time', 'Never'], 'The Earth turns from west to east.'),
  ],
  'ge-africarelief-2': [
    Q('The largest hot desert in the world is the:', ['Sahara', 'Kalahari', 'Namib', 'Gobi'], 'It covers much of North Africa.'),
    Q('The Congo Basin and the Chad Basin are:', ['Large areas of low land surrounded by higher land', 'Mountain ranges', 'Rift valleys', 'River deltas'], 'Parts of the plateau have sunk to form them.'),
  ],
  'ge-popgrowth-2': [
    Q('The rate of natural increase is:', ['Birth rate − death rate', 'Birth rate + death rate', 'Death rate − birth rate', 'Births ÷ area'], 'Divide by 10 to change per 1 000 into a percentage.'),
    Q('Rapid population growth puts pressure on:', ['Schools, hospitals, jobs and housing', 'Nothing at all', 'Only the weather', 'Only the rivers'], 'Services must grow as fast as the population.'),
  ],
  'ge-energy-2': [
    Q('Most rural households in Africa cook mainly with:', ['Firewood and charcoal', 'Nuclear power', 'Coal', 'Electricity from the grid'], 'This leads to deforestation; improved stoves help.'),
    Q('Geothermal power uses:', ['Heat from hot rocks underground', 'Wind', 'Falling water', 'Sunlight'], 'Kenya uses it at Olkaria in the Rift Valley.'),
  ],
  // ---------- Form 4 ----------
  'ge-scale-f4': [
    Q('Which map shows more detail: 1 : 25 000 or 1 : 250 000?', ['1 : 25 000', '1 : 250 000', 'They show the same', 'Neither'], 'A larger-scale map shows a smaller area in more detail.'),
    Q('On a 1 : 50 000 map, a grid square 2 cm by 2 cm covers:', ['1 km²', '4 km²', '2 km²', '0.5 km²'], 'Each side is 1 km.'),
    Q('To measure a winding road on a map you can use:', ['The edge of a strip of paper or a thread', 'A protractor only', 'A thermometer', 'The key'], 'Follow the bends, then straighten it against the scale.'),
    Q('Convert 1 : 100 000 into a statement:', ['1 cm represents 1 km', '1 cm represents 10 km', '1 cm represents 100 m', '1 cm represents 100 km'], '100 000 cm = 1 km.'),
  ],
  'ge-gridref-f4': [
    Q('A four-figure grid reference identifies:', ['A whole grid square', 'An exact point', 'A height', 'A bearing'], 'Six figures give a point within the square.'),
    Q('Bearings are measured:', ['Clockwise from north', 'Anticlockwise from east', 'Clockwise from south', 'From the map edge'], 'And written with three figures.'),
    Q('The bearing of west is:', ['270°', '090°', '180°', '360°'], 'Clockwise from north: east 090°, south 180°, west 270°.'),
    Q('Eastings are the grid lines that run:', ['From north to south, numbered along the bottom', 'From east to west, numbered up the side', 'Diagonally', 'Round the hills'], 'Their numbers increase towards the east.'),
  ],
  'ge-contours-f4': [
    Q('A dot with a height written beside it on a map is a:', ['Spot height', 'Trigonometric station', 'Contour', 'Bench mark only'], 'A trigonometric station is shown by a triangle.'),
    Q('Contours close at the top of a slope and far apart at the bottom show a:', ['Concave slope', 'Convex slope', 'Even slope', 'Flat plain'], 'The slope is steep above and gentle below.'),
    Q('A long, narrow strip of high land is a:', ['Ridge', 'Saddle', 'Valley', 'Plain'], 'A saddle is a low point along a ridge.'),
  ],
  'ge-section-f4': [
    Q('The first step in drawing a cross-section is to:', ['Mark where contours cross the edge of a paper strip laid along the line', 'Draw the curve freehand', 'Colour the map', 'Measure a bearing'], 'Each mark needs its height.'),
    Q('A vertical exaggeration of 5 means the heights on the section look:', ['Five times greater than they are', 'Five times smaller', 'Correct', 'Upside down'], 'The vertical scale is five times the horizontal one.'),
    Q('Points on a section should be joined with:', ['A smooth curve', 'Straight lines only', 'Dots', 'Arrows'], 'Land rarely has sharp corners between contours.'),
    Q('A full section must show:', ['A title, both scales and labelled features', 'Only the curve', 'Only the heights', 'A key of colours'], 'Examiners give marks for each of these.'),
    Q('Two points are intervisible if:', ['No land rises above the straight line joining them', 'They are on the same contour', 'They are in the same grid square', 'They have the same bearing'], 'Higher land between them blocks the view.'),
  ],
  'ge-structure-f4': [
    Q('Oceanic crust is:', ['Thinner and heavier than continental crust', 'Thicker than continental crust', 'Liquid', 'Made of ice'], 'It is made of sima.'),
    Q('Scientists learned about the Earth’s inner layers mainly from:', ['Earthquake waves', 'Digging to the core', 'Satellite photographs', 'Volcanic ash'], 'The waves change as they pass through each layer.'),
    Q('The boundary between the crust and the mantle is called the:', ['Moho', 'Equator', 'Epicentre', 'Tropopause'], 'The Mohorovičić discontinuity.'),
  ],
  'ge-rocks-f4': [
    Q('Shale changed by heat and pressure becomes:', ['Slate', 'Marble', 'Basalt', 'Coal'], 'Slate splits into thin sheets.'),
    Q('Coal is a sedimentary rock formed from:', ['Plant remains', 'Shells', 'Lava', 'Salt'], 'Ancient swamp plants were buried and compressed.'),
    Q('Which rock type often contains fossils?', ['Sedimentary', 'Igneous', 'Metamorphic', 'None'], 'Living things were buried in the sediment.'),
  ],
  'ge-plates-f4': [
    Q('Wegener’s supercontinent was called:', ['Pangaea', 'Gondwana only', 'Atlantis', 'Africa'], 'It broke up to form today’s continents.'),
    Q('A giant sea wave caused by an earthquake under the sea is a:', ['Tsunami', 'Tide', 'Cyclone', 'Monsoon'], 'It can travel across whole oceans.'),
    Q('An instrument that records earthquake waves is a:', ['Seismograph', 'Barometer', 'Hygrometer', 'Anemometer'], 'The size is given on a magnitude scale.'),
  ],
  'ge-volcano-f4': [
    Q('Molten rock that reaches the surface is called:', ['Lava', 'Magma', 'Sediment', 'Humus'], 'Underground it is magma.'),
    Q('A broad, gently sloping volcano built of runny lava is a:', ['Shield volcano', 'Composite cone', 'Caldera', 'Dyke'], 'Hawaii’s volcanoes are examples.'),
    Q('Which is a crater lake in Cameroon?', ['Lake Barombi Mbo', 'Lake Chad', 'Lagdo reservoir', 'Lake Victoria'], 'Lakes Nyos and Oku are crater lakes too.'),
  ],
  'ge-weathering-f4': [
    Q('Water freezing in cracks and widening them is:', ['Frost shattering', 'Carbonation', 'Oxidation', 'Exfoliation'], 'Ice takes up about 9 per cent more space than water.'),
    Q('Feldspar in granite turning into clay through reaction with water is:', ['Hydrolysis', 'Oxidation', 'Solution', 'Attrition'], 'This is why granite areas often have clay soils.'),
    Q('How does erosion differ from weathering?', ['Erosion moves the material away', 'Erosion happens only underground', 'They are the same', 'Erosion only affects limestone'], 'Weathering breaks rock in place.'),
  ],
  'ge-soil-f4': [
    Q('Which soil layer contains the most humus?', ['The topsoil', 'The subsoil', 'The parent rock', 'The bedrock'], 'Decaying leaves collect at the surface.'),
    Q('The fertile soils on the floodplains of the Logone and Benue are:', ['Alluvial soils', 'Desert soils', 'Volcanic soils', 'Ice soils'], 'They are laid down by floods.'),
    Q('Which is NOT a factor in soil formation?', ['The colour of the farmer’s house', 'Parent rock', 'Climate', 'Time'], 'Relief and vegetation are factors too.'),
  ],
  'ge-riverwork-f4': [
    Q('Large boulders rolled along the river bed are moved by:', ['Traction', 'Saltation', 'Suspension', 'Solution'], 'Only strong currents can move them.'),
    Q('A river deposits its load when:', ['It loses energy, for example as it slows down', 'Its speed increases', 'It flows over a waterfall', 'It is in flood in the upper course'], 'Heavier material is dropped first.'),
    Q('Erosion that deepens a valley is:', ['Vertical erosion', 'Lateral erosion', 'Deposition', 'Weathering'], 'Lateral erosion widens it.'),
  ],
  'ge-riverforms-f4': [
    Q('Hills that jut out alternately from each side of a young valley are:', ['Interlocking spurs', 'Levees', 'Meanders', 'Deltas'], 'The river winds between them.'),
    Q('A deep pool at the foot of a waterfall is a:', ['Plunge pool', 'Pothole', 'Delta', 'Levee'], 'Swirling water and stones erode it.'),
    Q('Rapids form where:', ['Bands of hard and soft rock alternate', 'The river reaches the sea', 'The river is very slow', 'There is no rock'], 'They make a series of small steps.'),
  ],
  'ge-meanders-f4': [
    Q('The steep bank on the outside of a meander is a:', ['River cliff', 'Slip-off slope', 'Levee', 'Delta'], 'Fast water erodes it.'),
    Q('Raised banks of sediment along a river are:', ['Levees', 'Spurs', 'Gorges', 'Plunge pools'], 'They form when floods drop their heaviest load at the banks.'),
    Q('The Wouri at Douala reaches the sea through a wide, funnel-shaped mouth called an:', ['Estuary', 'Ox-bow lake', 'Waterfall', 'Gorge'], 'Tides keep it open.'),
    Q('Channels that branch off a river in a delta are:', ['Distributaries', 'Tributaries', 'Meanders', 'Rapids'], 'Tributaries join a river; distributaries leave it.'),
  ],
  'ge-station-f4': [
    Q('Thermometers are kept in the shade of a Stevenson screen because:', ['Direct sunshine would give false, high readings', 'They are fragile', 'Rain improves them', 'It is the law'], 'We want the temperature of the air.'),
    Q('The indexes of a Six’s thermometer are reset with a:', ['Magnet', 'Hammer', 'Battery', 'Thread'], 'They are small steel pins.'),
    Q('Average atmospheric pressure at sea level is about:', ['1 013 mb', '100 mb', '5 000 mb', '13 mb'], 'Low pressure often brings rain.'),
  ],
  'ge-weathercalc-f4': [
    Q('The total annual rainfall is found by:', ['Adding the 12 monthly totals', 'Averaging the hottest and coldest months', 'Taking the wettest month', 'Dividing by 12'], 'It is a total, not an average.'),
    Q('Lines joining places of equal temperature are:', ['Isotherms', 'Isohyets', 'Isobars', 'Contours'], 'Isohyets show rainfall and isobars pressure.'),
    Q('On a climate graph, rainfall is usually shown by:', ['Bars', 'A line', 'Dots only', 'Arrows'], 'Temperature is shown by a line.'),
  ],
  'ge-hotclimates-f4': [
    Q('Which climate has the largest daily range of temperature?', ['Hot desert', 'Equatorial', 'Cool temperate', 'Maritime'], 'Clear skies let heat escape at night.'),
    Q('The dry, dusty wind that blows from the Sahara in the dry season is the:', ['Harmattan', 'Monsoon', 'Westerly', 'Trade wind from the sea'], 'It brings dust to Northern Cameroon.'),
    Q('Rainfall in hot deserts is usually less than:', ['250 mm a year', '2 000 mm a year', '1 000 mm a year', '5 000 mm a year'], 'And it is very unreliable.'),
  ],
  'ge-coolclimates-f4': [
    Q('In a Mediterranean climate, most rain falls in:', ['Winter', 'Summer', 'Every month equally', 'Never'], 'Summers are hot and dry.'),
    Q('The tundra’s warmest month is:', ['Below 10 °C', 'Above 25 °C', 'About 27 °C', 'Over 40 °C'], 'Trees cannot grow there.'),
    Q('A climate far inland, with very hot summers and very cold winters, is:', ['Continental', 'Maritime', 'Equatorial', 'Mediterranean'], 'The sea’s moderating effect is missing.'),
    Q('Which city has a Mediterranean climate?', ['Cape Town', 'Douala', 'Garoua', 'Kinshasa'], 'The far south-west of Africa has hot, dry summers and wet winters.'),
  ],
  'ge-vegbelts-f4': [
    Q('Plants that grow on other plants to reach the light in the rainforest are:', ['Epiphytes', 'Xerophytes', 'Conifers', 'Lichens only'], 'Lianas climb from the ground instead.'),
    Q('Savanna trees have thick bark mainly to resist:', ['Fire', 'Snow', 'Floods', 'Salt'], 'Grass fires are common in the dry season.'),
    Q('Trees of the coniferous forest are cone-shaped so that:', ['Snow slides off', 'They catch more rain', 'They resist fire', 'They grow faster'], 'Branches would break under heavy snow.'),
  ],
  'ge-ecosystem-f4': [
    Q('Which is an abiotic part of an ecosystem?', ['Rainfall', 'Trees', 'Insects', 'Fungi'], 'Abiotic means non-living.'),
    Q('Leaves on a rainforest floor decay:', ['Within weeks, because of the heat and moisture', 'After many years', 'Never', 'Only in the dry season'], 'Their nutrients are quickly taken up again.'),
    Q('Selective logging and replanting are examples of:', ['Sustainable use of the forest', 'Clear felling', 'Desertification', 'Overgrazing'], 'They keep the forest ecosystem working.'),
  ],
  'ge-hazards-f4': [
    Q('A crop suited to drought-prone areas of the Far North is:', ['Millet or sorghum', 'Rice in paddies', 'Cocoa', 'Rubber'], 'They need little water.'),
    Q('Tropical cyclones over the western Pacific are called:', ['Typhoons', 'Hurricanes', 'Tornadoes', 'Monsoons'], 'Over the Atlantic they are hurricanes.'),
    Q('A natural hazard becomes a disaster when:', ['It causes great loss of life or damage', 'It is reported on the news', 'It lasts a day', 'It happens at night'], 'Preparation reduces the damage.'),
  ],
  'ge-popfactors-f4': [
    Q('Which part of Cameroon is densely populated mainly because of fertile volcanic soils?', ['The West and North-West', 'The East', 'The South', 'The Adamawa Plateau'], 'A cool, healthy climate helps too.'),
    Q('A human factor that keeps population low is:', ['Insecurity', 'Fertile soil', 'A good climate', 'Flat land'], 'People leave areas of conflict.'),
    Q('Which world region is densely populated?', ['South Asia', 'Antarctica', 'The Sahara', 'Siberia'], 'India and Bangladesh have very high densities.'),
  ],
  'ge-popstats-f4': [
    Q('At a growth rate of 2 % a year, a population doubles in about:', ['35 years', '2 years', '70 years', '140 years'], '70 ÷ 2 = 35.'),
    Q('A population pyramid with a narrow base and wide top shows:', ['An ageing population', 'A young, fast-growing population', 'Many births', 'High death rates of the old'], 'Birth rates are low and people live long.'),
    Q('Better health care and clean water mainly lower the:', ['Death rate', 'Birth rate only', 'Area of the country', 'Migration'], 'Then the population grows faster for a time.'),
  ],
  'ge-migrate-f4': [
    Q('Which is a pull factor of a town?', ['Hospitals and schools', 'Drought', 'Shortage of land', 'Insecurity'], 'Pull factors attract people.'),
    Q('A family fleeing fighting but staying inside their own country are:', ['Internally displaced persons', 'Refugees', 'International migrants', 'Commuters'], 'Refugees cross a border.'),
    Q('Rural-urban migration often leaves villages with:', ['Mostly old people and children', 'Too many young workers', 'New factories', 'Traffic jams'], 'Young adults leave to find work.'),
  ],
  'ge-rural-f4': [
    Q('Houses grouped closely around a market or water point form a:', ['Nucleated settlement', 'Dispersed settlement', 'Linear settlement', 'Conurbation'], 'Common in the Northern regions.'),
    Q('Ngaoundéré grew as a route centre because it is:', ['The terminus of the Transcameroon railway', 'A sea port', 'A fishing village', 'On Mount Cameroon'], 'Goods change from rail to road there.'),
    Q('In the settlement hierarchy, which is the smallest?', ['A hamlet', 'A town', 'A city', 'A conurbation'], 'It has only a few houses and no services.'),
  ],
  'ge-towns-f4': [
    Q('The main cause of urban growth in Cameroon is:', ['Rural-urban migration and natural increase', 'Falling birth rates', 'People leaving towns', 'Earthquakes'], 'Both add people to the towns.'),
    Q('Industrial zones in Douala, such as Bassa and Bonabéri, are near:', ['The port and transport routes', 'The forest', 'Mount Cameroon', 'The Sahara'], 'Factories need to move goods.'),
    Q('Upgrading a slum means:', ['Adding water, drains, roads and lighting where people already live', 'Moving everyone away', 'Building a stadium', 'Closing the market'], 'It improves conditions without destroying homes.'),
  ],
  'ge-subsistence-f5': [
    Q('In shifting cultivation, the farmer moves to a new plot mainly because:', ['The soil loses its fertility after a few years', 'The government orders it', 'The rains stop for ever', 'Rice needs new land each season'], 'The old plot is left fallow to recover.'),
    Q('Growing cassava, maize and groundnuts together on one plot is called:', ['Mixed cropping', 'Monoculture', 'Ranching', 'Terracing'], 'It spreads risk and covers the soil.'),
    Q('Wet rice is first sown in a nursery and then:', ['Transplanted by hand into flooded paddies', 'Burnt with the bush', 'Left to grow wild', 'Sown by aeroplane'], 'Transplanting gives strong, evenly spaced plants.'),
    Q('Why can farmers in Monsoon Asia grow two or three rice crops a year?', ['It is warm all year and water is plentiful', 'The soil is never used', 'They use no labour', 'The fields are dry'], 'Warmth and irrigation allow continuous growth.'),
  ],
  'ge-commercial-f5': [
    Q('Growing one crop over a very large area is called:', ['Monoculture', 'Mixed cropping', 'Shifting cultivation', 'Bush fallowing'], 'Plantations usually grow a single crop.'),
    Q('Which Cameroonian corporation runs banana, oil palm, rubber and tea estates in the South-West?', ['CDC', 'SODECOTON', 'SEMRY', 'UNVDA'], 'It was founded in 1947.'),
    Q('The Pampas of Argentina are well known for:', ['Extensive cattle ranching', 'Wet rice cultivation', 'Cocoa plantations', 'Shifting cultivation'], 'Large grasslands with few workers.'),
    Q('A major problem for cattle in parts of the Adamawa Plateau is:', ['Tsetse flies that carry sleeping sickness', 'Snow in winter', 'Too much pasture in the dry season', 'Lack of grass in the rainy season'], 'Tsetse flies live in wooded, damp areas.'),
  ],
  'ge-industry-f5': [
    Q('Making cement from limestone is an example of a:', ['Secondary activity', 'Primary activity', 'Tertiary activity', 'Subsistence activity'], 'It manufactures a product from a raw material.'),
    Q('Banking and teaching are examples of:', ['Tertiary activities', 'Primary activities', 'Secondary activities', 'Heavy industries'], 'They provide services.'),
    Q('A sugar factory is built close to the cane fields because:', ['Cane is bulky and loses weight when processed', 'Sugar is sold only in villages', 'Cane needs no transport', 'It needs cold weather'], 'Transporting raw cane far would be costly.'),
    Q('One way of reducing air pollution from factories is:', ['Fitting filters on chimneys', 'Building taller houses', 'Burning more waste', 'Dumping waste in rivers'], 'Filters trap smoke and harmful particles.'),
  ],
  'ge-cmrgeology-f5': [
    Q('Cameroon lies roughly between latitudes:', ['2° N and 13° N', '10° S and 2° S', '20° N and 30° N', '13° S and 2° N'], 'It is entirely north of the Equator.'),
    Q('Cameroon is called "Africa in miniature" because:', ['It has almost every kind of African landscape and climate', 'It is the smallest country in Africa', 'It has no forests', 'It is an island'], 'From rainforest to Sahel, coast to mountains.'),
    Q('The oldest rocks of Cameroon, underlying about two-thirds of the country, are the:', ['Precambrian basement complex', 'Sedimentary basins', 'Young volcanic rocks', 'Coral reefs'], 'They are more than 600 million years old.'),
    Q('Which of these belongs to the Cameroon Volcanic Line?', ['Mount Oku', 'The Southern Plateau', 'The Chad plain', 'The Benue lowlands'], 'The line runs from the Gulf of Guinea islands through the Western Highlands.'),
  ],
  'ge-cmrrelief-f5': [
    Q('The highest mountain in West and Central Africa is:', ['Mount Cameroon', 'Mount Oku', 'Mount Manengouba', 'The Bamboutos'], 'It rises to about 4 100 m near Buea.'),
    Q('The Southern Plateau lies mostly at about:', ['650 to 900 m', '0 to 200 m', '2 000 to 3 000 m', 'Below sea level'], 'It is gently rolling land in the Centre, South and East.'),
    Q('The Mandara Mountains are found:', ['Along the Nigerian border in the Far North', 'Near Kribi', 'In the East Region', 'Around Douala'], 'Rhumsiki is in these mountains.'),
    Q('The Western Highlands support many people mainly because of:', ['Fertile volcanic soils and a cool climate', 'Dense rainforest', 'A desert climate', 'Oil fields'], 'Volcanic rocks weather into rich soils.'),
  ],
  'ge-cmrclimate-f5': [
    Q('The dry, dusty wind that blows from the Sahara in the dry season is the:', ['Harmattan', 'South-west monsoon', 'Sea breeze', 'Trade wind from the Atlantic'], 'It brings dust and cool nights.'),
    Q('Yaoundé has a climate with:', ['Two wet and two dry seasons', 'One wet season only', 'No rain at all', 'Snow in the dry season'], 'This is the southern equatorial (Guinea) type.'),
    Q('Debundscha is one of the wettest places on Earth because:', ['Moist sea winds are forced up Mount Cameroon', 'It is in the Sahel', 'It is far from the sea', 'It lies on the Adamawa Plateau'], 'This produces heavy relief rain.'),
    Q('Moving from Douala to Kousseri, rainfall:', ['Decreases and the dry season lengthens', 'Increases steadily', 'Stays the same', 'Falls only as snow'], 'The north is further from the moist Atlantic winds.'),
  ],
  'ge-cmrdrainage-f5': [
    Q('The longest river in Cameroon is the:', ['Sanaga', 'Wouri', 'Mungo', 'Logone'], 'It is about 920 km long.'),
    Q('The Logone and Chari flow into:', ['Lake Chad', 'The Atlantic Ocean', 'The Congo River', 'The River Niger'], 'Lake Chad has no outlet to the sea.'),
    Q('The Sangha and the Dja belong to the:', ['Congo basin', 'Niger basin', 'Chad basin', 'Atlantic basin directly'], 'They drain the south-east.'),
    Q('One reason the port of Douala must be dredged is that:', ['Rivers deposit silt in the channel', 'The sea is too deep', 'The river is frozen', 'Ships are too small'], 'Silt makes the channel shallow.'),
  ],
  'ge-cmrveg-f5': [
    Q('Trees with stilt roots growing in salty, muddy water along the coast are:', ['Mangroves', 'Baobabs', 'Acacias', 'Shea trees'], 'Found in the Wouri estuary and the Rio del Rey.'),
    Q('The vegetation of the Far North is mainly:', ['Sahel steppe with thorny shrubs', 'Dense evergreen rainforest', 'Mangrove swamp', 'Montane forest'], 'It is adapted to a long dry season.'),
    Q('In semi-deciduous forest:', ['Some trees shed their leaves in the dry season', 'No trees grow', 'All trees are evergreen', 'Only grass grows'], 'It lies on the northern edge of the rainforest.'),
    Q('Which human activity has turned forest edges into savanna?', ['Farming and repeated bush fires', 'Tree planting', 'Creating national parks', 'Fish farming'], 'Fires stop trees from growing back.'),
  ],
  'ge-cmrpop-f5': [
    Q('Cameroon’s last fully published national census was held in:', ['2005', '1976', '1987', '2020'], 'It counted about 17.5 million people.'),
    Q('More than four in ten Cameroonians are under 15. This means the population is:', ['Young', 'Ageing', 'Shrinking', 'Stable'], 'The pyramid has a wide base.'),
    Q('Which region is sparsely populated?', ['The East', 'The West', 'The North-West', 'The Littoral'], 'Dense forest, poor roads and few jobs.'),
    Q('A fast-growing young population puts pressure on:', ['Schools, health services and jobs', 'The number of old people only', 'The height of mountains', 'The length of rivers'], 'More children need more services.'),
  ],
  'ge-cmrurban-f5': [
    Q('Which city is the political capital of Cameroon?', ['Yaoundé', 'Douala', 'Garoua', 'Bamenda'], 'Douala is the economic capital.'),
    Q('Which is a pull factor drawing people to towns?', ['Jobs and better services', 'Shortage of land in the village', 'Poor roads in the village', 'Drought'], 'Push factors drive people out of rural areas.'),
    Q('Building more roads and bridges in Douala is meant to reduce:', ['Traffic congestion', 'Rainfall', 'Population growth', 'Farming'], 'The second Wouri bridge is an example.'),
    Q('Decentralisation helps reduce migration to the big cities by:', ['Giving regions and councils more power and money to develop', 'Closing village schools', 'Moving all factories to Douala', 'Banning travel'], 'Better services at home mean fewer people need to move.'),
  ],
  'ge-cmrfarming-f5': [
    Q('Arabica coffee is grown mainly in the:', ['Cool West and North-West highlands', 'Sahel', 'Coastal mangroves', 'Chad plain'], 'Arabica prefers a cool climate.'),
    Q('Cotton in Cameroon is grown mainly in the:', ['North and Far North', 'South-West', 'Littoral', 'East'], 'It suits the savanna with one rainy season.'),
    Q('Cocoa in Cameroon is grown mostly by:', ['Small farmers in the Centre, South and South-West', 'Large estates in the Sahel', 'Cattle herders', 'Fishermen'], 'It is a forest-zone crop.'),
    Q('Which food crops are typical of the Far North?', ['Millet and sorghum', 'Cocoyams and plantains', 'Cocoa and rubber', 'Tea and coffee'], 'They tolerate low and irregular rainfall.'),
  ],
  'ge-cmrcorps-f5': [
    Q('SODECOTON helps cotton farmers by:', ['Supplying seeds and fertiliser and buying their cotton', 'Growing bananas for them', 'Fishing on Lake Chad', 'Building oil refineries'], 'It gins the cotton and makes cotton oil.'),
    Q('SEMRY grows irrigated rice around:', ['Yagoua and Maga in the Far North', 'Ndop in the North-West', 'Kribi', 'Bertoua'], 'It uses water from the Logone.'),
    Q('A major problem of farming in Cameroon is:', ['Poor farm-to-market roads', 'Too many young farmers', 'Too much credit', 'Very low input costs'], 'Crops spoil before reaching buyers.'),
    Q('IRAD helps agriculture mainly through:', ['Research and improved seeds', 'Banking', 'Building ports', 'Selling fish'], 'It is the national agricultural research institute.'),
  ],
  'ge-cmrforestry-f5': [
    Q('The biggest cause of deforestation in Cameroon is:', ['Clearing land for farming', 'National parks', 'Tree planting', 'Fishing'], 'Farms expand into the forest.'),
    Q('Cameroon’s forestry law that created community forests was passed in:', ['1994', '1947', '1977', '2018'], 'Law No. 94/01.'),
    Q('The Dja Faunal Reserve is important because it is:', ['A UNESCO World Heritage Site protecting rainforest', 'An oil field', 'A rice project', 'A sea port'], 'It was listed in 1987.'),
    Q('Eru, bush mango and honey are examples of:', ['Non-timber forest products', 'Hardwoods', 'Minerals', 'Cash crops grown on plantations'], 'They come from the forest without felling trees.'),
  ],
  'ge-cmrfishing-f5': [
    Q('Most of the sea fish eaten in Cameroon comes from:', ['Artisanal fishing in canoes', 'Industrial trawlers only', 'Fish ponds only', 'Imports from Chad'], 'Canoe fishermen land fish at Limbe, Idenau and Kribi.'),
    Q('Inland fishing takes place on:', ['Lake Chad and the Lagdo reservoir', 'The open Atlantic only', 'The Sahara', 'Mount Cameroon'], 'Much of the catch is smoked or dried.'),
    Q('Nets with very small holes are a problem because they:', ['Catch young fish before they can breed', 'Catch too few fish', 'Break easily', 'Float away'], 'This leads to overfishing.'),
    Q('Lack of cold storage means that:', ['Fish rots before it can be sold', 'Fish lasts for ever', 'Fewer fish are caught', 'Prices always fall'], 'Ice plants and cold stores solve this.'),
  ],
  'ge-cmrenergy-f5': [
    Q('Song Loulou and Edéa power stations are on the river:', ['Sanaga', 'Benue', 'Ntem', 'Logone'], 'The Sanaga provides most of Cameroon’s hydroelectricity.'),
    Q('The Lagdo dam on the Benue mainly supplies power to the:', ['North', 'South-West', 'Littoral', 'East'], 'It is far from the southern grid.'),
    Q('The Kribi power station uses:', ['Natural gas', 'Coal', 'Wind', 'Firewood'], 'Gas comes from offshore fields near Kribi.'),
    Q('Most rural households in Cameroon cook with:', ['Firewood and charcoal', 'Electricity', 'Natural gas pipelines', 'Solar cookers only'], 'This adds to deforestation.'),
  ],
  'ge-cmrmining-f5': [
    Q('Limestone for cement is quarried at:', ['Figuil', 'Kribi', 'Limbe', 'Ebolowa'], 'Figuil is in the North Region.'),
    Q('Large bauxite reserves are found at:', ['Minim-Martap and Ngaoundal', 'Douala', 'Buea', 'Maroua'], 'They are in the Adamawa and not yet mined on a large scale.'),
    Q('The largest group of industries in Cameroon is:', ['Agro-processing', 'Shipbuilding', 'Car manufacturing', 'Computer chips'], 'Breweries, sugar, palm oil and cocoa processing.'),
    Q('Which problem raises the cost of running factories in Cameroon?', ['Frequent power cuts', 'Too many skilled workers', 'Very cheap capital', 'A huge home market'], 'Factories must use costly generators.'),
  ],
  'ge-cmrtransport-f5': [
    Q('The Transcameroon railway reached Ngaoundéré in:', ['1974', '1947', '2003', '2018'], 'It runs from Douala through Yaoundé and Belabo.'),
    Q('Kribi deep-water port opened in:', ['2018', '1974', '1990', '2003'], 'It can receive very large ships.'),
    Q('The Chad to Cameroon pipeline carries:', ['Crude oil from southern Chad to the coast near Kribi', 'Water to Yaoundé', 'Gas to Garoua', 'Cotton to Douala'], 'It was completed in 2003.'),
    Q('Garoua’s river port can be used only:', ['A few months in the rainy season', 'All year round', 'In the dry season', 'At night'], 'The Benue is too low at other times.'),
  ],
  'ge-cmrtrade-f5': [
    Q('Which is a main export of Cameroon?', ['Crude oil', 'Rice', 'Frozen fish', 'Vehicles'], 'Rice, fish and vehicles are imported.'),
    Q('Goods passing through Cameroon to Chad are called:', ['Transit trade', 'Internal trade', 'Barter', 'Retail trade'], 'Cameroon earns money from handling them.'),
    Q('The royal palace and museums of Foumban attract:', ['Cultural tourism', 'Ecotourism only', 'Industrial tourism', 'Beach tourism'], 'They show the history of the Bamoun kingdom.'),
    Q('An obstacle to tourism in Cameroon is:', ['Poor roads and accommodation', 'Too many national parks', 'Lack of landscapes', 'A cold climate everywhere'], 'Tourists need easy access and good hotels.'),
  ],
  'ge-mapcalc-f5': [
    Q('On a 1 : 50 000 map, 7 cm represents:', ['3.5 km', '7 km', '35 km', '0.35 km'], '1 cm = 0.5 km.'),
    Q('A slope rises 100 m over a horizontal distance of 1 500 m. The gradient is:', ['1 in 15', '1 in 150', '1 in 1.5', '15 in 1'], '1 500 ÷ 100 = 15.'),
    Q('A horizontal scale of 1 : 50 000 and a vertical scale of 1 : 5 000 give a vertical exaggeration of:', ['10 times', '5 times', '50 times', '100 times'], '50 000 ÷ 5 000 = 10.'),
    Q('The back bearing of 070° is:', ['250°', '110°', '290°', '070°'], '70 + 180 = 250.'),
  ],
  'ge-mapread-f5': [
    Q('Tributaries joining the main river at right angles form a:', ['Trellis pattern', 'Dendritic pattern', 'Radial pattern', 'Parallel pattern'], 'It forms where hard and soft rocks alternate.'),
    Q('A tree-like drainage pattern is called:', ['Dendritic', 'Radial', 'Trellis', 'Annular'], 'It forms on rocks of equal hardness.'),
    Q('Houses strung out along a road form a:', ['Linear settlement', 'Nucleated settlement', 'Dispersed settlement', 'Conurbation'], 'They follow the line of transport.'),
    Q('Which is NOT needed on a sketch map?', ['Contours copied exactly', 'A title', 'A north arrow', 'A key'], 'A sketch map shows only what the question asks for.'),
  ],
  'ge-paper1-f5': [
    Q('The capital of the North-West Region is:', ['Bamenda', 'Buea', 'Bafoussam', 'Garoua'], 'Buea is the capital of the South-West.'),
    Q('The capital of the Adamawa Region is:', ['Ngaoundéré', 'Garoua', 'Maroua', 'Bertoua'], 'Garoua is the capital of the North.'),
    Q('In a multiple-choice question containing EXCEPT, you must choose the option that is:', ['Not true', 'True', 'The longest', 'The first'], 'Underline NOT and EXCEPT when you read.'),
    Q('Which instrument measures rainfall?', ['Rain gauge', 'Barometer', 'Wind vane', 'Hygrometer'], 'A barometer measures air pressure.'),
  ],
  'ge-paper2-f5': [
    Q('"Compare" in a question asks you to:', ['Give similarities and differences', 'Give reasons only', 'Draw a map only', 'List names'], 'Treat both items point by point.'),
    Q('"Describe" in a question asks you to:', ['Say what something is like', 'Explain why it happened', 'Give your opinion only', 'Calculate a gradient'], 'Explain asks for reasons.'),
    Q('A good paragraph in a Geography essay should:', ['State a point, explain it and give an example', 'Repeat the question', 'Contain only a diagram title', 'List ten points without explanation'], 'Examples from Cameroon earn credit.'),
    Q('In Paper 2, time should be shared according to:', ['The marks for each question', 'The length of the question', 'The order of the questions only', 'How easy the topic feels'], 'More marks need more time.'),
  ],
};
