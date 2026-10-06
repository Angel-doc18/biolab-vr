// Geography lessons for Form 1, following the MINESEC harmonised scheme
// (competency-based approach): term 1 the field of geography and the Earth in
// space; term 2 the atmosphere, relief, water and vegetation of the local
// environment; term 3 people, local occupations and environmental sanitation.
// Original text written for this app. **double asterisks** mark key terms.
// `examples` are worked examples.

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

export const LESSONS_1 = [
  // ---------- The field of geography ----------
  L('ge-intro-1', 'ge-f1-intro', '1.1', 'What geography is, its branches and its tools', 8, ['Introduction'], [
    '**Geography** is the study of the **Earth’s surface**, its natural features, the **people** who live on it and how people and their **environment** affect each other. The word comes from Greek: *geo*, the Earth, and *graphein*, to describe.',
    'Geography has three main branches. **Physical geography** studies natural features: relief (mountains, plateaus, plains), rivers and lakes, weather and climate, soils and vegetation. **Human geography** studies people: population, settlements, cultures and how people live. **Economic geography** studies how people earn a living: farming, fishing, mining, industry, trade and transport.',
    'A geographer uses many **tools**. A **map** is a drawing of part of the Earth’s surface on a flat sheet, made smaller to a **scale**. An **atlas** is a book of maps. A **globe** is a small round model of the Earth. A **compass** shows direction. **Photographs**, including aerial photographs and **satellite images**, show what places look like. **Measuring instruments** such as thermometers and rain gauges record the weather, and a **notebook** is used to record observations during **fieldwork**. Today **GPS** on phones gives an exact position.',
    'Geography helps us to understand and protect our surroundings, to plan towns, farms and roads, to prepare for floods and droughts, and to travel and trade.',
  ], null, 'Learn the three branches with **two examples each**: physical (relief, climate), human (population, settlement), economic (farming, trade).',
  ['The study of population and settlements belongs to:', ['Human geography', 'Physical geography', 'Climatology only', 'Astronomy'], 'Human geography studies people, where and how they live.'],
  [['Geography', 'The study of the Earth’s surface, its people and how they affect each other.'], ['Map', 'A drawing of part of the Earth’s surface on a flat surface, to scale.'], ['Atlas', 'A book of maps.'], ['Globe', 'A round model of the Earth.']],
  [
    { q: 'Classify each topic under a branch of geography: (a) the Sanaga River, (b) the growth of Douala, (c) cocoa farming, (d) the rainy season.', steps: ['(a) A river is a natural feature: **physical geography**.', '(b) The growth of a town is about people and settlement: **human geography**.', '(c) Cocoa farming is a way of earning a living: **economic geography**.', '(d) The rainy season is weather and climate: **physical geography**.'] },
  ]),

  // ---------- Finding direction ----------
  L('ge-direction-1', 'ge-f1-direction', '2.1', 'Finding direction: cardinal and intermediate points', 9, ['Direction', 'Map skills'], [
    'The four **cardinal points** are **North (N)**, **East (E)**, **South (S)** and **West (W)**. Between them are the four **intermediate** (semi-cardinal) points: **North-East (NE)**, **South-East (SE)**, **South-West (SW)** and **North-West (NW)**. Together they make the eight points of the **compass rose**. On most maps North is at the top.',
    'The Sun helps us find direction. It **rises in the east** in the morning and **sets in the west** in the evening. If you stand with your **right hand** pointing to where the Sun rises, you are **facing north**; your left hand points west and south is behind you.',
    'A **magnetic compass** has a needle that always points to the north (magnetic north). Turn the compass until the needle lies over N, and you can read all the other directions. Local **landmarks**, such as a church, a hill or a main road, also help people find their way.',
    'Each direction has an **opposite**: north and south, east and west, north-east and south-west, north-west and south-east. If a market is north-east of the school, the school is **south-west** of the market.',
  ], 'compass-rose', 'To find the direction **from A to B**, imagine standing at A and looking towards B. The reverse direction is always the **opposite** point.',
  ['A pupil faces the rising Sun. Which direction is behind her?', ['West', 'East', 'North', 'South'], 'The Sun rises in the east, so facing it you look east and west is behind you.'],
  [['Cardinal points', 'The four main directions: north, east, south and west.'], ['Intermediate points', 'The directions between the cardinal points: NE, SE, SW and NW.'], ['Compass', 'An instrument with a magnetic needle that points north.']],
  [
    { q: 'Use a map of Cameroon to give the direction: (a) of Bamenda from Yaoundé, (b) of Kribi from Yaoundé, (c) of Yaoundé from Bamenda.', steps: ['(a) Bamenda lies further north and further west than Yaoundé: **north-west**.', '(b) Kribi lies to the south and to the west of Yaoundé: **south-west**.', '(c) This is the reverse of (a), so it is the opposite point: **south-east**.'] },
  ]),

  // ---------- The solar system ----------
  L('ge-solar-1', 'ge-f1-solar', '3.1', 'The Sun and the planets', 9, ['Earth in space'], [
    'The **solar system** is made up of the **Sun** and all the bodies that move around it: the **planets** and their **moons**, together with dwarf planets, asteroids and comets. The Sun is a **star**, a huge ball of very hot gases that gives out its own **light and heat**. Planets and moons give no light of their own; they shine by reflecting sunlight.',
    'There are **eight planets**. In order from the Sun they are **Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus and Neptune**. A sentence helps to remember them: "**M**y **V**ery **E**ducated **M**other **J**ust **S**erved **U**s **N**oodles". Pluto, once called the ninth planet, has been classed as a **dwarf planet** since 2006.',
    'The four **inner planets** (Mercury, Venus, Earth, Mars) are small and made of **rock**. The four **outer planets** (Jupiter, Saturn, Uranus, Neptune) are very large and made mostly of **gases**; Saturn is famous for its rings. **Jupiter** is the largest planet and **Mercury** the smallest and nearest to the Sun. **Venus** is the hottest, because its thick atmosphere traps heat. A belt of rocky **asteroids** lies between Mars and Jupiter.',
    'Each planet moves round the Sun along a path called its **orbit**. A **moon** (natural satellite) moves round a planet; the Earth has one Moon. The planets move round the Sun because of the pull of its **gravity**.',
  ], 'solar-system', 'Learn the order with the sentence, and the four "records": **largest** Jupiter, **smallest** Mercury, **hottest** Venus, **nearest** Mercury.',
  ['Which planet is the third from the Sun?', ['Earth', 'Mars', 'Venus', 'Jupiter'], 'Mercury, Venus, Earth: the Earth is third.'],
  [['Solar system', 'The Sun and all the bodies that move around it.'], ['Planet', 'A large body that moves around the Sun in an orbit.'], ['Orbit', 'The path of a body moving around another.'], ['Satellite', 'A body that moves around a planet, such as the Moon.']],
  [
    { q: 'State two differences between the Sun and the Earth.', steps: ['The Sun is a **star**; the Earth is a **planet**.', 'The Sun gives out its **own light and heat**; the Earth only **reflects** light from the Sun.', 'The Sun is at the **centre** of the solar system; the Earth **moves round** it.'] },
  ]),

  L('ge-living-1', 'ge-f1-solar', '3.2', 'The Earth: a living planet', 7, ['Earth in space'], [
    'The Earth is the **only planet known to have life**. This is because of several special conditions.',
    'It is at the **right distance** from the Sun, about **150 million km**: not so close that water boils away, as on Venus, and not so far that everything freezes, as on Mars. So it has **liquid water** in its oceans, rivers and lakes, which all living things need.',
    'It has an **atmosphere** containing **oxygen** for breathing and **carbon dioxide** for plants. The atmosphere also keeps the Earth **warm** at night, and its **ozone layer** blocks most of the Sun’s harmful **ultraviolet** rays. The Earth’s **magnetic field** turns away dangerous particles from the Sun.',
    'Because about **71%** of the Earth’s surface is covered by water, it looks blue from space and is often called the **blue planet**.',
  ], null, 'Give **three** conditions for life on Earth with a reason for each: right distance (liquid water), atmosphere (oxygen, warmth), ozone layer (protection).',
  ['Life is possible on Earth mainly because it:', ['Has liquid water and an atmosphere with oxygen', 'Is the largest planet', 'Is the nearest planet to the Sun', 'Has rings'], 'Water and oxygen are essential for life; the Earth is neither the largest nor the nearest planet.'],
  [['Atmosphere', 'The layer of gases surrounding the Earth.'], ['Ozone layer', 'A layer in the atmosphere that absorbs harmful ultraviolet rays.']],
  [
    { q: 'Explain why the Earth is called "the blue planet".', steps: ['About **71%** of the Earth’s surface is covered by **oceans and seas**.', 'Seen from space, these large areas of water look **blue**.', 'So the Earth appears mainly blue in photographs taken by satellites and astronauts.'] },
  ]),

  // ---------- Shape, size, latitude and longitude ----------
  L('ge-shape-1', 'ge-f1-earth', '4.1', 'The shape and size of the Earth', 8, ['Earth in space'], [
    'The Earth is almost a **sphere**, but it is slightly **flattened at the poles** and slightly **bulging at the Equator**. This shape is called an **oblate spheroid** (or **geoid**).',
    'There are several **proofs** that the Earth is round. **Photographs** from space and satellites show a round Earth. A **ship** sailing away from the coast disappears **hull first**, then its mast, because it goes over the curve of the Earth. Travellers have sailed **all the way round** the world, as the expedition of Magellan did between 1519 and 1522. During an **eclipse of the Moon**, the Earth’s shadow on the Moon is always **curved**. The **horizon** looks like a circle, and it gets wider the higher you climb.',
    'The Earth is very large. Its distance round the **Equator** (the equatorial circumference) is about **40 000 km**, and its **diameter** is about **12 700 km**; the diameter through the poles is a little shorter than through the Equator. Its surface area is about **510 million km²**.',
  ], null, 'Learn at least **three proofs** that the Earth is round, explained in a sentence each.',
  ['The equatorial circumference of the Earth is about:', ['40 000 km', '4 000 km', '400 000 km', '12 700 km'], '12 700 km is its diameter; the distance round the Equator is about 40 000 km.'],
  [['Sphere', 'A perfectly round ball.'], ['Oblate spheroid', 'A sphere slightly flattened at the poles; the shape of the Earth.'], ['Circumference', 'The distance round a circle or sphere.']],
  [
    { q: 'Explain how a ship sailing out to sea shows that the Earth is round.', steps: ['As the ship sails away, the **lower part (hull)** disappears first, then the mast.', 'If the Earth were flat, the whole ship would simply get **smaller** and smaller.', 'The ship disappears bit by bit because it moves over the **curved surface** of the Earth.'] },
  ]),

  L('ge-latlong-1', 'ge-f1-earth', '4.2', 'Lines of latitude and longitude', 10, ['Map skills', 'Calculation'], [
    'To locate places, geographers use imaginary lines drawn on maps and globes. **Lines of latitude** (parallels) run **east–west** round the Earth. They measure how far a place is **north or south of the Equator**, in **degrees**. The **Equator** is **0°**; the **North Pole** is **90°N** and the **South Pole** **90°S**.',
    'Important lines of latitude are the **Tropic of Cancer** (23½°N), the **Tropic of Capricorn** (23½°S), the **Arctic Circle** (66½°N) and the **Antarctic Circle** (66½°S). The Equator divides the Earth into the **Northern** and **Southern Hemispheres**.',
    '**Lines of longitude** (meridians) run **north–south** from pole to pole. They measure how far a place is **east or west** of the **Prime Meridian** (0°), which passes through **Greenwich** in London. Longitudes go up to **180°** east and west. The Prime Meridian and the 180° line divide the Earth into the **Eastern** and **Western Hemispheres**.',
    'A place is located by giving its latitude and then its longitude. **Cameroon** lies between about **2°N and 13°N** and about **8°E and 16°E**, so it is in the Northern and Eastern Hemispheres; **Yaoundé** is at about **3°52′N, 11°31′E**. One degree of latitude is about **111 km**, so latitude can be used to work out distances north and south.',
  ], 'lat-long-globe', 'Latitude: **north or south** of the Equator. Longitude: **east or west** of Greenwich. Always give **latitude first**.',
  ['The line of latitude at 23½°N is the:', ['Tropic of Cancer', 'Tropic of Capricorn', 'Arctic Circle', 'Equator'], 'The Tropic of Capricorn is at 23½°S and the Arctic Circle at 66½°N.'],
  [['Latitude', 'Distance north or south of the Equator, in degrees.'], ['Longitude', 'Distance east or west of the Prime Meridian, in degrees.'], ['Equator', 'The line of latitude 0°, dividing the Northern and Southern Hemispheres.'], ['Prime Meridian', 'The line of longitude 0°, through Greenwich.']],
  [
    { q: 'Two towns lie on the same meridian, one at 4°N and the other at 10°N. How far apart are they?', steps: ['Difference in latitude = 10° − 4° = **6°**.', 'One degree of latitude ≈ 111 km.', 'Distance ≈ 6 × 111 = **666 km**.'] },
    { q: 'In which hemispheres is a place at 5°S, 20°W?', steps: ['5°**S** is south of the Equator: **Southern Hemisphere**.', '20°**W** is west of the Prime Meridian: **Western Hemisphere**.'] },
  ]),

  // ---------- The atmosphere and weather ----------
  L('ge-atmos-1', 'ge-f1-weather', '5.1', 'The atmosphere, weather and climate', 9, ['Weather', 'Atmosphere'], [
    'The **atmosphere** is the layer of air that surrounds the Earth, held by gravity. It is a mixture of gases: about **78% nitrogen**, **21% oxygen**, nearly **1% argon** and very small amounts of **carbon dioxide** and **water vapour**, with dust. Its lowest layer, the **troposphere**, is where clouds form and all our **weather** happens; above it, the **stratosphere** contains the **ozone layer**.',
    'The atmosphere gives us oxygen to breathe and carbon dioxide for plants, keeps the Earth warm, blocks harmful rays from the Sun and burns up most meteors before they reach the ground.',
    '**Weather** is the condition of the atmosphere at a place at a particular **time**: today may be hot and sunny, tomorrow cloudy and rainy. **Climate** is the **average weather** of a place over a **long period**, usually 30 years or more: Maroua has a hot, dry climate with a short rainy season, while Debundscha near Mount Cameroon is one of the wettest places on Earth.',
    'The **elements of weather** are the things we observe and measure: **temperature**, **rainfall** (precipitation), **wind** (its direction and speed), **humidity** (water vapour in the air), **air pressure**, **sunshine** and **cloud cover**.',
  ], null, 'Weather = **short time** (today); climate = **long-term average** (30 years or more).',
  ['"It is raining in Bamenda this morning" describes:', ['Weather', 'Climate', 'Relief', 'Vegetation'], 'It is the condition of the atmosphere at one place at one time.'],
  [['Atmosphere', 'The layer of gases surrounding the Earth.'], ['Weather', 'The condition of the atmosphere at a place at a given time.'], ['Climate', 'The average weather of a place over a long period.'], ['Humidity', 'The amount of water vapour in the air.']],
  [
    { q: 'Say whether each statement describes weather or climate: (a) "Garoua has a long dry season every year", (b) "There was a strong wind in Limbe yesterday", (c) "The south of Cameroon is wet all year".', steps: ['(a) A pattern every year: **climate**.', '(b) One day at one place: **weather**.', '(c) The usual conditions over a long time: **climate**.'] },
  ]),

  L('ge-instruments-1', 'ge-f1-weather', '5.2', 'Measuring the weather', 10, ['Weather', 'Practical', 'Calculation'], [
    'Weather is measured at a **weather station**. **Temperature** is measured with a **thermometer** in degrees Celsius (°C). Thermometers are kept in a **Stevenson screen**, a white wooden box with slatted sides on legs about 1.2 m above the ground, so that they are in the **shade** with air moving freely around them. **Maximum and minimum thermometers** record the highest and lowest temperatures of the day.',
    '**Rainfall** is measured with a **rain gauge** in millimetres (mm). Rain falls into a funnel and collects in a bottle; each day the water is poured into a measuring cylinder and read. The gauge is placed in the **open**, away from trees and buildings, with its rim about 30 cm above the ground so that rain does not splash in.',
    'A **wind vane** shows the **direction** the wind is blowing **from**: a wind from the south-west is a **south-westerly** wind. An **anemometer** measures wind **speed**. A **barometer** measures air **pressure**, and a **hygrometer** (wet and dry bulb thermometer) measures **humidity**.',
    'From the readings we calculate: **mean daily temperature = (maximum + minimum) ÷ 2**; **daily range of temperature = maximum − minimum**; and **monthly rainfall** = the total of the daily amounts.',
  ], 'weather-instruments', 'Winds are named after the direction they **come from**. The harmattan comes from the north-east: it is a **north-easterly** wind.',
  ['The instrument used to measure rainfall is:', ['A rain gauge', 'A wind vane', 'A barometer', 'An anemometer'], 'A barometer measures pressure, a wind vane direction and an anemometer speed.'],
  [['Stevenson screen', 'A white louvred box that keeps thermometers in the shade.'], ['Rain gauge', 'An instrument that collects and measures rainfall.'], ['Wind vane', 'An instrument that shows the direction the wind blows from.'], ['Temperature range', 'The difference between the highest and lowest temperatures.']],
  [
    { q: 'On a day in Yaoundé the maximum temperature was 31 °C and the minimum 22 °C. Find the mean daily temperature and the daily range.', steps: ['Mean = (31 + 22) ÷ 2 = 53 ÷ 2 = **26.5 °C**.', 'Range = 31 − 22 = **9 °C**.'] },
    { q: 'A rain gauge collected 12 mm, 0 mm, 25 mm, 8 mm and 5 mm on five days. Find the total and the mean daily rainfall.', steps: ['Total = 12 + 0 + 25 + 8 + 5 = **50 mm**.', 'Mean = 50 ÷ 5 = **10 mm per day**.'] },
  ]),

  // ---------- Landforms ----------
  L('ge-relief-1', 'ge-f1-relief', '6.1', 'Landforms: mountains, plateaus, plains and valleys', 9, ['Relief'], [
    '**Relief** is the shape of the land: its high and low parts. Heights are given in metres **above sea level**. The main landforms are mountains, plateaus, plains and valleys.',
    'A **mountain** is land that rises **steeply** to a great height, with a pointed or rounded top called the **peak** or **summit**. **Mount Cameroon**, an active volcano near Buea, is the highest mountain in West and Central Africa, about **4 040 m** high (older books give 4 095 m). The **Mandara Mountains** are in the Far North. A **hill** is like a mountain but lower and less steep.',
    'A **plateau** is a large area of **high, fairly flat land**, with steep sides; it is sometimes called a **tableland**. The **Adamawa Plateau** in the centre of Cameroon and the **Western High Plateau** around Bamenda, Bafoussam and Dschang are examples. A **plain** is a large area of **low, flat** or gently rolling land, such as the **coastal plain** around Douala and the **Chad plain** in the Far North.',
    'A **valley** is a long, low area between hills or mountains, usually with a **river** flowing along it, such as the Benue valley around Garoua. Relief affects people: high areas are **cooler**, plains are easier for farming, roads and towns, and steep slopes suffer from **soil erosion** and landslides.',
  ], 'landforms', 'Describe each landform by **height** (high or low) and **shape** (steep, flat or rolling), and give a Cameroonian example.',
  ['A large area of high, fairly flat land is a:', ['Plateau', 'Plain', 'Valley', 'Delta'], 'A plain is also flat, but low.'],
  [['Relief', 'The shape of the land surface, its high and low parts.'], ['Plateau', 'A large area of high, fairly flat land.'], ['Plain', 'A large area of low, flat land.'], ['Valley', 'A long low area between hills, usually with a river.']],
  [
    { q: 'Give one advantage and one disadvantage for people of living on a high plateau such as the Western High Plateau.', steps: ['**Advantage:** the climate is **cooler** and healthier, with fewer mosquitoes, and the volcanic soils are **fertile** for crops such as coffee and potatoes.', '**Disadvantage:** steep slopes make **roads** hard to build and cause **soil erosion** and landslides.'] },
  ]),

  // ---------- Water bodies ----------
  L('ge-river-1', 'ge-f1-water', '7.1', 'Rivers, lakes and the sea', 10, ['Water bodies'], [
    'A **river** is a natural stream of water flowing in a channel towards the sea, a lake or another river. It begins at its **source**, often a spring or a stream in the hills. Smaller rivers that join it are **tributaries**, and the place where two rivers meet is a **confluence**. The river ends at its **mouth**. A wide, funnel-shaped mouth where sea water and river water mix is an **estuary**, such as the **Wouri estuary** at Douala. Where a river drops its mud and sand and splits into many channels, it forms a **delta**, like the Niger Delta in Nigeria. The area drained by a river and its tributaries is its **basin**.',
    'Cameroon’s longest river is the **Sanaga**, about 900 km long, which flows into the Atlantic Ocean; its dams at **Edéa** and **Song Loulou** produce electricity. Other rivers include the **Wouri**, **Nyong**, **Ntem**, **Mungo**, the **Benue**, which flows into Nigeria, and the **Logone** and **Chari**, which flow into **Lake Chad**.',
    'A **lake** is a body of water surrounded by land. **Lake Chad** in the Far North is shallow and has shrunk greatly in the last fifty years. **Lake Nyos** and **Lake Barombi Mbo** are **crater lakes** in old volcanoes; in **1986** a cloud of carbon dioxide gas from Lake Nyos killed about 1 700 people. **Lake Lagdo** is an **artificial** lake behind a dam on the Benue. Cameroon’s coast lies on the **Gulf of Guinea**, part of the **Atlantic Ocean**.',
    'Water bodies give us water for drinking and farming, **fish**, **transport**, **hydroelectricity** and places for tourism. They must be protected from **pollution** by refuse, chemicals and sewage.',
  ], 'river-parts', 'Learn the parts of a river **in order** from the hills to the sea: source, tributary, confluence, main channel, mouth (estuary or delta).',
  ['The place where a tributary joins a main river is the:', ['Confluence', 'Source', 'Estuary', 'Delta'], 'Con- means together: the rivers flow together there.'],
  [['Source', 'The place where a river begins.'], ['Tributary', 'A smaller river that joins a larger one.'], ['Confluence', 'The point where two rivers meet.'], ['Estuary', 'The wide tidal mouth of a river where it meets the sea.']],
  [
    { q: 'Give four uses of the Sanaga River to the people of Cameroon.', steps: ['**Electricity**: the dams at Edéa and Song Loulou produce hydroelectric power.', '**Fishing**: people catch fish for food and sale.', '**Water**: for drinking, washing and watering crops.', '**Sand**: sand dug from the river bed is used for building.'] },
  ]),

  // ---------- Vegetation ----------
  L('ge-vegetation-1', 'ge-f1-vegetation', '8.1', 'Natural vegetation in Cameroon', 9, ['Vegetation'], [
    '**Natural vegetation** is the plant cover that grows in an area **without being planted** by people. Its type depends mainly on **rainfall** and **temperature**, and also on the soil, the relief and human activities.',
    'The **equatorial rainforest** covers the south of Cameroon, where it is hot and wet all year. It has tall **evergreen** trees in several **layers**, with a thick canopy that shuts out much light, and valuable hardwoods such as sapelli and iroko. The **Dja Faunal Reserve** protects part of it. Along the coast, in muddy salty swamps, grow **mangrove** forests with roots standing out of the water, for example around Douala.',
    'Further north, where there is a **dry season**, the forest gives way to **savanna**: tall grasses with scattered trees such as the baobab and shea, as on the Adamawa Plateau and around Garoua. In the **Far North**, with a long dry season, the vegetation is **short grass and thorny bushes** (Sahel type). On the high **Western Highlands** there are **mountain grasslands** and forest patches.',
    'Vegetation gives us **timber**, **firewood**, **food**, **medicines** and **grazing**; it is a **home for animals**, holds the soil against **erosion** and gives out **oxygen**. It is threatened by **logging**, **bush fires**, **overgrazing** and clearing land for farms and towns.',
  ], null, 'Link each vegetation type to its **climate**: rainforest (wet all year), savanna (wet and dry seasons), Sahel (long dry season).',
  ['Tall grasses with scattered trees, in an area with a long dry season, describe:', ['Savanna', 'Rainforest', 'Mangrove', 'Montane forest'], 'Savanna grows where there is a wet and a dry season.'],
  [['Natural vegetation', 'Plants that grow in an area without being planted by people.'], ['Evergreen', 'Keeping leaves all year round.'], ['Savanna', 'Grassland with scattered trees, found where there is a dry season.'], ['Mangrove', 'Trees that grow in salty coastal swamps.']],
  [
    { q: 'Give three reasons why the forests of southern Cameroon should be protected.', steps: ['They provide **timber, food and medicines**, and jobs for many people.', 'They are the **home** of many animals and plants, some found nowhere else.', 'Tree roots **hold the soil** and stop erosion, and the trees take in carbon dioxide and give out **oxygen**.'] },
  ]),

  // ---------- People and settlement ----------
  L('ge-settlement-1', 'ge-f1-population', '9.1', 'People and settlements', 9, ['Population', 'Settlement'], [
    'The **population** of an area is the number of people who live there. It is counted in a **census**, an official count of all the people in a country, which also records their age, sex, work and housing.',
    'A **settlement** is a place where people live, from a single compound to a large city. **Rural** settlements (villages) are small and most people farm. **Urban** settlements (towns and cities) are large, and most people work in trade, industry and services.',
    'Settlements have different **patterns**. A **nucleated** (clustered) settlement has houses grouped closely together, often around a market, a chief’s palace or a water point. A **dispersed** (scattered) settlement has houses spread far apart, each surrounded by its farmland. A **linear** settlement has houses built in a line along a **road**, a **river** or the coast.',
    'People choose places to settle for good **reasons**: a supply of clean **water**, **fertile** soil, **flat** land for building, **safety**, **roads** and the chance of **jobs**. People leave a place because of **push factors** such as lack of jobs, poor schools and hospitals, poor harvests or insecurity, and are attracted to another by **pull factors** such as jobs, better services, electricity and safety.',
  ], 'settlement-patterns', 'Push factors **push** people **away** from a place; pull factors **pull** them **towards** another.',
  ['Houses built in a line along a main road form a:', ['Linear settlement', 'Nucleated settlement', 'Dispersed settlement', 'Census'], 'Linear means in a line.'],
  [['Population', 'The number of people living in an area.'], ['Census', 'An official count of the people of a country.'], ['Settlement', 'A place where people live.'], ['Push factor', 'Something that makes people want to leave a place.'], ['Pull factor', 'Something that attracts people to a place.']],
  [
    { q: 'A young man leaves his village for Douala. Give two push factors and two pull factors that may explain his move.', steps: ['**Push factors** (in the village): **no jobs** apart from farming, and **no electricity** or secondary school nearby.', '**Pull factors** (in Douala): the hope of **paid work** in the port, factories or trade, and **better services** such as hospitals, schools and electricity.'] },
  ]),

  // ---------- Local economic activities ----------
  L('ge-occupations-1', 'ge-f1-occupations', '10.1', 'How people earn a living in the local area', 9, ['Economic activities'], [
    'People work to earn a living. Their activities are grouped into three kinds. **Primary activities** take resources directly from nature: **farming**, **fishing**, **hunting**, **lumbering** (cutting timber) and **mining**. **Secondary activities** turn raw materials into finished goods: **manufacturing** in factories, and crafts such as weaving, carving, pottery and tailoring. **Tertiary activities** are **services**: trading, transport, teaching, health care and banking.',
    '**Subsistence farming** produces food mainly for the farmer’s own family, on small farms with simple tools such as the **hoe** and **cutlass**. Common crops are cassava, maize, cocoyams, plantains, groundnuts and beans. Any surplus is sold in the market. Farmers also keep **livestock**: goats, pigs, poultry and, in the north, cattle herded by Mbororo (Fulani) herders.',
    '**Cash crops** are grown mainly for sale: cocoa and coffee in the south and west, cotton in the north.',
    '**Petty trading** is buying and selling goods in small quantities, in markets, shops and along roads, like the "buyam-sellam" women who buy food in villages and sell it in towns. Trade links farmers with buyers and brings goods from towns to villages.',
  ], null, 'Classify any job by asking: does it **take from nature** (primary), **make goods** (secondary) or **provide a service** (tertiary)?',
  ['A woman who buys tomatoes in a village and sells them in a town market is doing:', ['Petty trading, a tertiary activity', 'Mining, a primary activity', 'Manufacturing, a secondary activity', 'Lumbering, a primary activity'], 'Trading is a service, a tertiary activity.'],
  [['Primary activity', 'Taking resources directly from nature, such as farming or fishing.'], ['Secondary activity', 'Making finished goods from raw materials.'], ['Tertiary activity', 'Providing a service, such as trading or teaching.'], ['Subsistence farming', 'Growing food mainly for the farmer’s own family.']],
  [
    { q: 'Classify these jobs as primary, secondary or tertiary: (a) a fisherman at Limbe, (b) a tailor, (c) a taxi driver, (d) a cocoa farmer, (e) a nurse.', steps: ['(a) Fisherman: **primary** (takes fish from nature).', '(b) Tailor: **secondary** (makes clothes from cloth).', '(c) Taxi driver: **tertiary** (transport service).', '(d) Cocoa farmer: **primary**.', '(e) Nurse: **tertiary** (health service).'] },
  ]),

  // ---------- Environmental sanitation ----------
  L('ge-waste-1', 'ge-f1-sanitation', '11.1', 'Managing waste: sorting, reducing and recycling', 9, ['Environment', 'Sanitation'], [
    '**Waste** (refuse) is anything thrown away because it is no longer wanted. **Organic** or **biodegradable** waste, such as food peelings, leaves and paper, rots and is broken down by bacteria and fungi. **Non-biodegradable** waste, such as **plastic bags and bottles**, glass, tins and old batteries, does not rot and stays in the environment for many years.',
    'Waste that is dumped carelessly causes **problems**: plastic blocks gutters and causes **flooding**; heaps of refuse breed **flies, rats and mosquitoes** that spread diseases such as cholera, typhoid and malaria; burning plastic gives off **poisonous smoke**; and plastics in rivers and the sea kill fish and other animals.',
    'Good waste management begins with **sorting** waste into organic and non-organic. Then follow the **3 Rs**: **Reduce** (use less, for example carry a basket instead of taking plastic bags), **Reuse** (use bottles and containers again) and **Recycle** (turn used materials into new products, such as plastic into new items). Organic waste can be turned into **compost**, a natural manure for gardens and farms.',
    'Put refuse in **dustbins** and at collection points; in towns it is collected by refuse trucks, such as those of HYSACAM. Take part in **clean-up campaigns** in your school and neighbourhood.',
  ], null, 'Learn the **3 Rs** in order of importance: **reduce** first, then **reuse**, then **recycle**.',
  ['Which waste is biodegradable?', ['Banana peels', 'Plastic bottles', 'Glass jars', 'Old batteries'], 'Banana peels rot naturally; the others last for many years.'],
  [['Biodegradable', 'Able to rot and be broken down naturally.'], ['Recycle', 'To turn used materials into new products.'], ['Compost', 'Manure made from rotted organic waste.']],
  [
    { q: 'Explain how plastic bags thrown in gutters can lead to flooding and disease in a town.', steps: ['Plastic bags **do not rot**, so they collect in gutters and drains and **block** them.', 'When it rains, the water cannot flow away, so it **overflows** into streets and houses: **flooding**.', 'Stagnant water and rotting refuse breed **mosquitoes and flies**, which spread **malaria, cholera** and other diseases.'] },
  ]),

  L('ge-protect-1', 'ge-f1-sanitation', '11.2', 'Protecting our environment: bush fires, trees and rivers', 8, ['Environment'], [
    '**Bush fires** are uncontrolled fires that burn grassland and forest, mostly in the **dry season**. They are started to clear farms, to hunt animals or to get fresh grass for cattle, and by careless smokers. Bush fires **destroy** crops, trees, animals and houses, leave the soil **bare** so it is easily eroded, kill the useful organisms in the soil and fill the air with **smoke**.',
    'Bush fires can be prevented by making **fire breaks** (strips of land cleared of grass, so the fire cannot cross), by **controlled early burning** where farmers agree, by teaching people about the dangers, and by laws against setting fires.',
    '**Planting trees** (afforestation and reforestation) gives shade, fruit, firewood and timber, holds the soil against erosion, protects water sources and takes in carbon dioxide. Schools can grow tree nurseries and plant trees around their compounds.',
    '**Rivers and streams** are protected by not throwing refuse or dead animals into them, not washing with chemicals or fishing with poisons, building latrines far from water sources, and keeping trees and grass along their banks.',
  ], null, 'For each problem give the **cause**, the **effect** and a **solution**: bush fires, from clearing farms, destroy soil life, prevented by fire breaks.',
  ['A strip of land cleared of grass to stop a bush fire spreading is a:', ['Fire break', 'Terrace', 'Compost heap', 'Contour'], 'With no fuel to burn, the fire stops at the cleared strip.'],
  [['Bush fire', 'An uncontrolled fire that burns grassland or forest.'], ['Fire break', 'A cleared strip of land that stops a fire from spreading.'], ['Afforestation', 'Planting trees where there were none before.']],
  [
    { q: 'Suggest three things your school can do to protect the environment.', steps: ['Start a **tree nursery** and plant trees around the school compound.', 'Put labelled **dustbins** for organic and plastic waste, and make **compost** for the school garden.', 'Hold regular **clean-up** days and teach the community about the dangers of **bush fires** and dumping refuse in streams.'] },
  ]),
];
