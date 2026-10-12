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
};
