// Geography lessons for Form 4, following the 2026/2027 national harmonised
// scheme of work: map work, the Earth's structure and rocks, tectonics and
// volcanoes, weathering and soils, rivers, the weather station, world climates
// and vegetation, ecosystems and hazards, population, migration and
// settlement. Examples are drawn from Cameroon wherever possible. Original
// text written for this app. **double asterisks** mark key terms. `examples`
// are worked examples.

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

export const LESSONS_4 = [
  // ---------- Map work ----------
  L('ge-scale-f4', 'ge-f4-mapwork', '1.1', 'Map scales, distances and areas', 12, ['Map work', 'Calculation'], [
    'The **scale** of a map is the relation between a distance on the map and the real distance on the ground. It is shown in three ways:\n- A **statement**: "1 cm represents 0.5 km".\n- A **representative fraction (RF)**: 1 : 50 000. One unit on the map stands for 50 000 of the same units on the ground, whatever the unit.\n- A **linear scale**: a line divided into ground distances.',
    'To convert:\n- **RF to statement:** 1 : 50 000 means 1 cm = 50 000 cm = 500 m = **0.5 km**. (Divide by 100 for metres and by 100 000 for kilometres.)\n- **Statement to RF:** "1 cm represents 2 km" means 1 cm = 200 000 cm, so the RF is **1 : 200 000**.',
    'A **large-scale** map, such as 1 : 25 000, shows a small area in great detail. A **small-scale** map, such as 1 : 1 000 000, shows a large area with little detail. Most topographic maps used in Cameroon schools are at 1 : 50 000.',
    'Measuring distance:\n- **Straight line:** measure with a ruler, then use the scale.\n- **Curved line** (a road, railway or river): lay the edge of a strip of paper along the route, turning it at each bend and marking it, or follow the route with a piece of thread; then straighten it against the linear scale.\nAlways give the answer with its unit, for example 4.5 km.',
    'Measuring area: on a 1 : 50 000 map the grid lines are usually 2 cm apart, so each grid square is 1 km by 1 km = **1 km²**. Count the whole squares, then count the part squares that are at least half covered as whole squares and ignore the smaller ones.',
  ], 'map-scales', 'At 1 : 50 000, **2 cm = 1 km**, and one grid square of 2 cm = **1 km²**.',
  ['On a 1 : 25 000 map, 1 cm represents:', ['250 m', '2.5 km', '25 m', '25 km'], '25 000 cm = 250 m.'],
  [['Scale', 'The relation between a distance on a map and the distance on the ground.'], ['Representative fraction', 'A scale written as a ratio, such as 1 : 50 000.'], ['Large-scale map', 'A map showing a small area in great detail.']],
  [
    { q: 'On a 1 : 50 000 map a road measures 13 cm along its bends. How long is it on the ground?', steps: ['1 cm = 0.5 km.', '13 × 0.5 = 6.5.', 'The road is **6.5 km** long.'] },
    { q: 'Convert the statement "1 cm represents 5 km" into a representative fraction.', steps: ['5 km = 5 × 100 000 cm = 500 000 cm.', 'RF = **1 : 500 000**.'] },
  ]),

  L('ge-gridref-f4', 'ge-f4-mapwork', '1.2', 'Grid references, direction and bearings', 11, ['Map work'], [
    'Topographic maps are covered by a **grid** of numbered lines. Lines running up and down the map are **eastings**; their numbers increase towards the east and are read along the bottom or top. Lines running across are **northings**; their numbers increase towards the north and are read up the sides.',
    'A **four-figure grid reference** names a whole square: the easting of its left-hand line, then the northing of its bottom line. "Along the corridor, then up the stairs": eastings first, northings second.',
    'A **six-figure grid reference** gives a point within the square. Imagine the square divided into ten in each direction. Give the easting and the tenths across, then the northing and the tenths up. A church 4 tenths across square 23 and 7 tenths up square 47 is at **234 477**.',
    'Direction is given by the **compass points** (N, NE, E, SE, S, SW, W, NW and the points between) or by a **bearing**: the angle measured **clockwise from north**, always written with three figures. North is 000°, east 090°, south 180° and west 270°.',
    'To find the bearing of B from A: join A to B, draw a north line at A, and measure the angle clockwise from the north line to the line AB with a protractor. The bearing of A from B (the **back bearing**) differs by 180°.',
  ], 'grid-reference', 'Eastings first, then northings: **along the corridor, then up the stairs**.',
  ['The bearing of a place to the south-west is:', ['225°', '135°', '315°', '045°'], 'South is 180°; south-west is 45° further clockwise.'],
  [['Easting', 'A grid line running north to south; its number is read first.'], ['Northing', 'A grid line running east to west; its number is read second.'], ['Bearing', 'A direction measured clockwise from north, in three figures.']],
  [
    { q: 'The bearing of a school from a market is 060°. What is the bearing of the market from the school?', steps: ['The back bearing differs by 180°.', '060° + 180° = **240°**.'] },
  ]),

  L('ge-contours-f4', 'ge-f4-mapwork', '1.3', 'Showing relief: contours and landforms', 12, ['Map work', 'Relief'], [
    '**Relief** is the shape and height of the land. On topographic maps it is shown by:\n- **Contours:** lines joining places of equal height above sea level.\n- **Spot heights:** a dot with the height beside it.\n- **Trigonometric stations:** a triangle with the height, marking surveyed points, usually on hilltops.\n- **Layer tinting:** colours for height bands, as on atlas maps.\n- **Hill shading:** shading on the slopes away from an imagined light.',
    'The **vertical interval** is the difference in height between two neighbouring contours, often 20 m on 1 : 50 000 maps. The spacing of contours shows the **slope**:\n- close together: **steep**\n- far apart: **gentle**\n- evenly spaced: an **even** slope\n- close at the top and far apart at the bottom: a **concave** slope\n- far apart at the top and close at the bottom: a **convex** slope.',
    'Landforms on contour maps:\n- **Hill:** closed contours, the highest in the middle.\n- **Valley:** contours form Vs that point **upstream**, to higher ground; a river often runs in it.\n- **Spur:** a tongue of high land; its contours form Vs or Us pointing **downhill**.\n- **Ridge:** a long, narrow strip of high land.\n- **Saddle (col):** a low point on a ridge between two hills.\n- **Plateau:** a large, high, fairly flat area, with steep edges.\n- **Escarpment:** a ridge with one steep and one gentle slope.\n- **Cliff:** contours that crowd together or merge.',
    'The **gradient** of a slope is its steepness: gradient = vertical interval ÷ horizontal equivalent, written as "1 in x". Both distances must be in the same units.',
  ], 'contour-landforms', 'Valley Vs point **uphill**; spur Vs point **downhill**.',
  ['Two points are 100 m apart in height and 2 km apart on the map. The gradient is:', ['1 in 20', '1 in 2', '1 in 200', '20 in 1'], '2 km = 2 000 m; 2 000 ÷ 100 = 20.'],
  [['Contour', 'A line on a map joining places of equal height.'], ['Vertical interval', 'The height difference between neighbouring contours.'], ['Gradient', 'The steepness of a slope: vertical interval ÷ horizontal equivalent.'], ['Spur', 'A tongue of high land jutting out from higher ground.']],
  [
    { q: 'A hilltop at 840 m is 3 km from a river at 240 m. Find the average gradient.', steps: ['Vertical interval: 840 − 240 = 600 m.', 'Horizontal equivalent: 3 km = 3 000 m.', '3 000 ÷ 600 = 5.', 'Gradient = **1 in 5**.'] },
  ]),

  L('ge-section-f4', 'ge-f4-mapwork', '1.4', 'Drawing cross-sections and profiles', 12, ['Map work', 'Practical'], [
    'A **cross-section** shows the shape of the land along a line drawn between two points on a map, as if the land had been cut through. Drawing one is a common examination question.',
    'Steps:\n- Place the straight edge of a strip of paper along the line, for example from X to Y.\n- Mark X and Y, and mark every place where a contour crosses the edge, writing its height. Mark rivers, roads and spot heights too.\n- Draw a horizontal base line exactly as long as XY, and a vertical scale for height. Choose a vertical scale that shows the shape clearly.\n- Lay the strip on the base line and plot each height above its mark.\n- Join the points with a **smooth curve**, label the features and give the section a title and both scales.',
    'Because the vertical scale is usually larger than the horizontal one, the section exaggerates the height. The **vertical exaggeration (VE)** = horizontal scale denominator ÷ vertical scale denominator. With a horizontal scale of 1 : 50 000 and a vertical scale of 1 cm to 100 m (1 : 10 000), VE = 50 000 ÷ 10 000 = **5**: heights look five times greater than they are.',
    'A cross-section also shows **intervisibility**: whether one point can be seen from another. If the land between them rises above the straight line joining them, the view is blocked.',
  ], 'cross-section', 'Smooth curve, labelled features, a title, **both scales** and the **VE**: that is a full-mark section.',
  ['Horizontal scale 1 : 50 000; vertical scale 1 : 5 000. The vertical exaggeration is:', ['10', '5', '50', '0.1'], '50 000 ÷ 5 000 = 10.'],
  [['Cross-section', 'A side view of the land along a line between two points.'], ['Vertical exaggeration', 'How many times the vertical scale is larger than the horizontal scale.'], ['Intervisibility', 'Whether one point can be seen from another.']],
  [
    { q: 'On a section, a hill between a fort and a tower rises above the straight line joining them. Can a guard in the fort see the tower?', steps: ['Draw a straight line from the fort to the tower on the section.', 'The hill rises above this line.', 'So the land blocks the view: the tower is **not intervisible** from the fort.'] },
  ]),

  // ---------- The Earth and rocks ----------
  L('ge-structure-f4', 'ge-f4-earth', '2.1', 'The internal structure of the Earth', 9, ['Physical geography'], [
    'The Earth is made of layers, like the layers of an onion, each denser than the one above:\n- The **crust** is the thin, solid outer layer. **Continental crust** (30 to 70 km thick) is made of lighter rocks rich in silica and aluminium, called **sial**. **Oceanic crust** (5 to 10 km thick) is made of heavier rocks rich in silica and magnesium, called **sima**.\n- The **mantle** reaches down to about 2 900 km. It is very hot rock; its upper part can flow slowly, carrying the plates of the crust.\n- The **outer core**, from about 2 900 to 5 100 km, is **liquid** iron and nickel. Its movement makes the Earth’s magnetic field.\n- The **inner core**, at the centre about 6 370 km down, is **solid** iron and nickel at over 5 000 °C, kept solid by the huge pressure.',
    'Scientists know this from **earthquake waves**: the way they speed up, slow down, bend or fail to pass through the layers shows what each layer is made of.',
    'The boundary between the crust and the mantle is the **Mohorovičić discontinuity** (the Moho).',
  ], 'earth-layers', 'Crust (thin, solid), mantle (thick), outer core (**liquid**), inner core (**solid**).',
  ['Which layer of the Earth is liquid?', ['The outer core', 'The inner core', 'The crust', 'The upper crust only'], 'The inner core is solid because of the pressure.'],
  [['Crust', 'The thin, solid outer layer of the Earth.'], ['Mantle', 'The thick layer of hot rock between the crust and the core.'], ['Sial', 'The lighter rocks of the continental crust, rich in silica and aluminium.'], ['Sima', 'The heavier rocks of the oceanic crust, rich in silica and magnesium.']],
  null),

  L('ge-rocks-f4', 'ge-f4-earth', '2.2', 'Igneous, sedimentary and metamorphic rocks', 11, ['Physical geography', 'Rocks'], [
    '**Igneous rocks** form when molten rock cools and hardens:\n- **Intrusive** (plutonic) igneous rocks cool slowly deep underground, so they have **large crystals**, such as **granite**.\n- **Extrusive** (volcanic) igneous rocks cool quickly from lava at the surface, so they have **small crystals**, such as **basalt**.\nIgneous rocks are hard and usually not in layers. Granite and gneiss form much of the old basement of Cameroon; basalt covers large areas of the Western Highlands and Mount Cameroon.',
    '**Sedimentary rocks** form from sediments (sand, mud, shells or plant remains) laid down in layers, usually in water, then pressed and cemented together over long periods:\n- from rock fragments: **sandstone**, **shale**, **clay**\n- from living things: **limestone** (shells), **coal** (plants)\n- from chemicals: **rock salt**.\nThey are in layers (strata) and may contain **fossils**. Sedimentary rocks are found in the Douala basin and the Benue lowlands; limestone is quarried at **Figuil** for cement.',
    '**Metamorphic rocks** are igneous or sedimentary rocks changed by great **heat and pressure**, without melting:\n- limestone becomes **marble**\n- shale or clay becomes **slate**\n- sandstone becomes **quartzite**\n- granite becomes **gneiss**.',
    'Rocks change from one type to another over millions of years in the **rock cycle**. Rocks are useful as building stone, gravel for roads, clay for bricks and pottery, limestone for cement, and as sources of minerals.',
  ], 'rock-cycle', 'Igneous = **fire** (cooled magma); sedimentary = **layers**; metamorphic = **changed** by heat and pressure.',
  ['Why does granite have larger crystals than basalt?', ['It cooled slowly underground', 'It cooled quickly on the surface', 'It formed in water', 'It is younger'], 'Slow cooling gives crystals time to grow.'],
  [['Igneous rock', 'Rock formed when magma or lava cools and hardens.'], ['Sedimentary rock', 'Rock formed from layers of sediment pressed and cemented together.'], ['Metamorphic rock', 'Rock changed by great heat and pressure.'], ['Fossil', 'The remains or trace of a living thing preserved in rock.']],
  [
    { q: 'A rock in layers contains shell fossils and fizzes with dilute acid. Name it and its group.', steps: ['Layers and fossils point to a **sedimentary** rock.', 'Fizzing with acid shows calcium carbonate.', 'It is **limestone**.'] },
  ]),

  // ---------- Tectonics and volcanoes ----------
  L('ge-plates-f4', 'ge-f4-tectonics', '3.1', 'Plate tectonics and earthquakes', 11, ['Physical geography', 'Tectonics'], [
    'In 1912 Alfred Wegener proposed **continental drift**: the continents were once joined in one supercontinent, **Pangaea**, and have slowly moved apart. Evidence:\n- the coasts of South America and Africa fit together like a jigsaw\n- the same fossils and rocks are found on both sides of the Atlantic\n- signs of old glaciers in lands that are now hot.',
    'Today we know the crust is broken into large **plates** that move a few centimetres a year, carried by slow currents in the mantle. Where plates meet there are **plate boundaries**:\n- **Constructive:** plates move apart and magma rises to make new crust, as at the Mid-Atlantic Ridge and in the East African Rift Valley.\n- **Destructive:** plates move together; the heavier oceanic plate sinks under the other. This causes volcanoes, earthquakes and **fold mountains** such as the Andes.\n- **Conservative:** plates slide past each other; no crust is made or destroyed, but there are strong earthquakes, as along the San Andreas Fault in California.',
    'An **earthquake** is a sudden shaking of the ground when rocks under stress snap and move. It starts at the **focus**, underground; the point on the surface above it is the **epicentre**, where shaking is usually strongest. Earthquakes are recorded by a **seismograph** and measured on a **magnitude** scale such as the Richter scale.',
    'Earthquakes can destroy buildings, roads and bridges, start fires and landslides, and under the sea cause giant waves called **tsunamis**. People are protected by strong building design, warning systems and drills.',
  ], 'plate-boundaries', 'Apart = **constructive**; together = **destructive**; sliding = **conservative**.',
  ['Fold mountains such as the Andes form at:', ['Destructive boundaries', 'Constructive boundaries', 'Conservative boundaries', 'The centre of plates'], 'The colliding plates crumple the rocks.'],
  [['Plate', 'A large, rigid section of the Earth’s crust that moves slowly.'], ['Focus', 'The point underground where an earthquake starts.'], ['Epicentre', 'The point on the surface directly above the focus.'], ['Tsunami', 'A giant sea wave caused by an earthquake under the sea.']],
  null),

  L('ge-volcano-f4', 'ge-f4-tectonics', '3.2', 'Volcanism: intrusive and extrusive features', 12, ['Physical geography', 'Volcanoes'], [
    '**Volcanism** is the movement of molten rock (**magma**) inside the crust and onto the surface, where it is called **lava**. Volcanoes occur mainly at plate boundaries and over hot spots.',
    'Magma that cools **underground** forms **intrusive features**:\n- A **dyke** is a wall-like sheet that cuts **across** the rock layers.\n- A **sill** is a sheet that lies **along** the layers.\n- A **laccolith** is a dome of magma that pushes the overlying layers up.\n- A **batholith** is a huge mass that cools deep down; when erosion removes the rocks above, it forms granite uplands.',
    'Lava and ash erupted at the surface form **extrusive features**:\n- A **composite cone** (strato-volcano) is a steep cone of alternating layers of ash and thick lava, such as Mount Cameroon.\n- A **shield volcano** is broad and gently sloping, built by runny lava, as in Hawaii.\n- A **crater** is the hollow at the top of the vent; a **caldera** is a much larger hollow formed when the top of a volcano collapses.\n- **Crater lakes** fill old craters, such as Lake Nyos, Lake Barombi Mbo and Lake Oku.',
    'Cameroon has a chain of volcanoes, the **Cameroon Volcanic Line**, running from the islands in the Gulf of Guinea through Mount Cameroon, Mount Manengouba, the Bamboutos Mountains and Mount Oku towards the Mandara area. **Mount Cameroon**, the highest mountain in West and Central Africa, is still active: it erupted in 1999 and in 2000.',
    'Effects on people:\n- **Benefits:** fertile volcanic soils for farming (tea, bananas, coffee, food crops around Buea and in the Western Highlands), tourism (the Mount Cameroon Race of Hope), building stone, and in some countries geothermal energy.\n- **Dangers:** lava flows, ash, poisonous gases and landslides. On 21 August 1986, **Lake Nyos** suddenly released a huge cloud of **carbon dioxide** that flowed down the valleys and suffocated about 1 700 people and thousands of animals. Pipes now let the gas escape safely from the lake bottom.',
  ], 'volcano-features', 'Underground: **dyke** (across), **sill** (along), **laccolith** (dome), **batholith** (huge). Surface: cones, craters, calderas.',
  ['A sheet of magma lying along the rock layers is a:', ['Sill', 'Dyke', 'Caldera', 'Crater'], 'A dyke cuts across the layers.'],
  [['Magma', 'Molten rock inside the Earth.'], ['Lava', 'Magma that reaches the surface.'], ['Composite cone', 'A steep volcano built of layers of ash and lava.'], ['Caldera', 'A large hollow formed when the top of a volcano collapses.'], ['Crater lake', 'A lake filling the crater of an old volcano.']],
  [
    { q: 'Explain why people live on the slopes of Mount Cameroon even though it is an active volcano.', steps: ['Its **volcanic soils** are very fertile, so farming (food crops, tea, bananas) gives good yields.', 'The cooler, wetter mountain climate suits crops and is pleasant to live in.', 'Eruptions are **rare** and usually slow lava flows that people can escape.', 'Tourism and the plantations provide jobs.'] },
  ]),

  // ---------- Weathering and soils ----------
  L('ge-weathering-f4', 'ge-f4-weathering', '4.1', 'Weathering processes', 11, ['Physical geography', 'Weathering'], [
    '**Weathering** is the breaking down of rocks **in place**, by the weather, chemicals and living things. **Erosion** is different: it wears rock away and carries it off, by rivers, waves, wind or ice.',
    '**Physical (mechanical) weathering** breaks rocks into smaller pieces without changing them chemically:\n- **Exfoliation (onion weathering):** in hot, dry places the outer layer of rock heats and expands by day and cools and contracts by night, until it peels off in curved sheets, leaving rounded domes.\n- **Block disintegration:** rocks with many joints break into blocks as they expand and contract.\n- **Frost shattering (frost wedging):** in cold mountains, water in cracks freezes, expands by about 9 per cent, and forces the cracks wider.',
    '**Chemical weathering** changes the minerals of the rock:\n- **Carbonation:** rainwater with carbon dioxide forms weak carbonic acid, which dissolves limestone.\n- **Oxidation:** iron minerals react with oxygen and water to form rust-coloured iron oxides; this gives many tropical soils their red colour.\n- **Hydrolysis:** water reacts with minerals such as the feldspar in granite, turning them into clay.\n- **Solution:** some minerals, such as rock salt, simply dissolve.',
    '**Biological weathering** is caused by living things: tree roots widen cracks, burrowing animals break rock, plants release acids, and people break rock in quarries and road building.',
    'Factors affecting the rate of weathering:\n- **Climate:** chemical weathering is fastest where it is **hot and wet**, as in southern Cameroon, so soils there are deep; physical weathering is important in hot deserts and cold mountains.\n- **Rock type:** limestone dissolves easily; granite with many joints breaks up faster.\n- **Vegetation**, **relief** (slopes lose debris) and **time**.',
  ], 'weathering-types', 'Weathering **breaks** rock in place; erosion **moves** it away.',
  ['In which climate is chemical weathering fastest?', ['Hot and wet', 'Cold and dry', 'Hot and dry', 'Polar'], 'Heat and water speed up the reactions.'],
  [['Weathering', 'The breaking down of rocks in place.'], ['Exfoliation', 'The peeling off of rock in curved layers through heating and cooling.'], ['Carbonation', 'The dissolving of limestone by weak carbonic acid in rainwater.'], ['Hydrolysis', 'A reaction of minerals with water that turns them into clay.']],
  null),

  L('ge-soil-f4', 'ge-f4-weathering', '4.2', 'How soil forms: components and profile', 10, ['Physical geography', 'Soils'], [
    '**Soil** is the loose top layer of the land in which plants grow. It is made of:\n- **mineral particles** from weathered rock (sand, silt, clay)\n- **humus:** decayed plant and animal matter, which makes soil fertile and dark\n- **water** and **air** in the spaces between the particles\n- **living things:** bacteria, fungi, earthworms and insects.',
    'Soil forms very slowly, often a few centimetres in hundreds of years. Its type depends on the **parent rock**, the **climate**, the **vegetation**, the **relief** and **time**.',
    'A vertical section through a soil shows its **profile**, made of layers called **horizons**:\n- **Topsoil (A horizon):** dark, rich in humus, with most roots and life.\n- **Subsoil (B horizon):** lighter, with minerals washed down from above.\n- **Weathered parent rock (C horizon):** broken pieces of rock.\n- **Bedrock** below.\nIn wet climates, heavy rain washes nutrients down out of the topsoil: this is **leaching**.',
    'Main soils of Cameroon:\n- **Ferralitic (red and yellow) soils** cover much of the south. They are deep and red from oxidation, but leached and poor in nutrients once the forest is cleared.\n- **Volcanic soils** around Mount Cameroon and in the Western Highlands are dark and very fertile.\n- **Alluvial soils** on river floodplains, such as along the Benue and Logone, are fertile and good for rice.\n- **Hydromorphic** (waterlogged) soils in swamps and mangroves.\n- **Sandy soils** in the far north, poor and easily eroded by wind.',
  ], 'weathering-types', 'Soil = minerals + **humus** + water + air + **life**.',
  ['Washing of nutrients down out of the topsoil by heavy rain is:', ['Leaching', 'Exfoliation', 'Deposition', 'Erosion by wind'], 'It makes many tropical soils poor.'],
  [['Humus', 'Decayed plant and animal matter in soil.'], ['Soil profile', 'A vertical section through the layers (horizons) of a soil.'], ['Leaching', 'The washing of nutrients down out of the topsoil.'], ['Alluvial soil', 'Fertile soil laid down by rivers on floodplains.']],
  null),

  // ---------- Rivers ----------
  L('ge-riverwork-f4', 'ge-f4-rivers', '5.1', 'The work of a river: erosion, transport and deposition', 11, ['Physical geography', 'Rivers'], [
    'A river does three kinds of work: it **erodes**, **transports** and **deposits**. How much it does depends on its **energy**, which grows with its volume and speed.',
    'River **erosion** works in four ways:\n- **Hydraulic action:** the force of the water, which can force air into cracks in the banks and break them.\n- **Abrasion (corrasion):** the load of stones scrapes and grinds the bed and banks.\n- **Attrition:** stones in the water knock against each other and become smaller and rounder.\n- **Solution (corrosion):** the water dissolves some rocks, such as limestone.\nErosion **downwards** deepens the valley (vertical erosion); erosion **sideways** widens it (lateral erosion).',
    'A river **transports** its load in four ways:\n- **Traction:** large boulders roll along the bed.\n- **Saltation:** small stones bounce along the bed.\n- **Suspension:** fine silt and clay are carried in the water, making it muddy.\n- **Solution:** dissolved minerals are carried invisibly.',
    'A river **deposits** (drops) its load when it loses energy: where it slows down on the inside of bends, where its gradient becomes gentle, when its volume falls in the dry season, and where it enters a lake or the sea. The heaviest material is dropped first.',
    'From source to mouth a river passes through three **courses**:\n- the **upper course**: steep, with vertical erosion\n- the **middle course**: gentler, with lateral erosion and meanders\n- the **lower course**: gentle, wide, with deposition.\nThe **Sanaga**, the longest river in Cameroon (about 920 km), rises on the Adamawa Plateau and reaches the sea south of Douala.',
  ], 'river-courses', 'Erosion: hydraulic action, abrasion, attrition, solution. Transport: traction, saltation, suspension, solution.',
  ['Silt carried along in the water, making it muddy, is transported by:', ['Suspension', 'Traction', 'Saltation', 'Attrition'], 'Fine material floats in the moving water.'],
  [['Abrasion', 'River erosion in which the load scrapes the bed and banks.'], ['Attrition', 'The wearing down of stones as they knock against each other.'], ['Saltation', 'The bouncing of small stones along the river bed.'], ['Deposition', 'The dropping of a river’s load when it loses energy.']],
  null),

  L('ge-riverforms-f4', 'ge-f4-rivers', '5.2', 'Upper course landforms: valleys, waterfalls and gorges', 11, ['Physical geography', 'Rivers'], [
    'In its **upper course** a river flows steeply over hard rock and erodes mainly **downwards**. Its valley is narrow and deep, with steep sides: a **V-shaped valley**. The river winds between hills that jut out alternately from each side, called **interlocking spurs**.',
    'A **waterfall** forms where a band of **hard, resistant rock** lies over **softer rock**:\n- The soft rock below wears away faster, so a step forms.\n- Water falling over the step swirls and erodes a deep **plunge pool** at its foot.\n- The soft rock behind the fall is **undercut**, leaving an **overhang** of hard rock.\n- The overhang finally collapses, and the waterfall moves back upstream, leaving a narrow, steep-sided **gorge**.',
    '**Rapids** form where bands of hard and soft rock alternate, making a series of small steps of fast, broken water. **Potholes** are round holes drilled in the river bed by stones swirling in eddies.',
    'Cameroon has many waterfalls: the **Lobé Falls** near Kribi, among the very few in the world that fall directly into the sea; the **Ekom-Nkam Falls** in the Littoral; and the **Menchum Falls** in the North-West. The Sanaga has rapids and falls that are used for hydroelectric power at Edéa and Song Loulou.',
  ], 'waterfall', 'Waterfall: **hard rock over soft**, plunge pool, undercut, overhang, collapse, **retreat** leaving a gorge.',
  ['Why does a waterfall move slowly upstream?', ['The undercut overhang collapses again and again', 'The river flows backwards', 'The sea pushes it', 'Rain adds more rock'], 'Each collapse moves the fall back, leaving a gorge.'],
  [['V-shaped valley', 'A narrow, deep valley formed by vertical erosion.'], ['Interlocking spurs', 'Hills jutting out alternately from each side of a valley.'], ['Plunge pool', 'A deep pool eroded at the foot of a waterfall.'], ['Gorge', 'A narrow, steep-sided valley left as a waterfall retreats.']],
  [
    { q: 'Explain, step by step, how a waterfall forms.', steps: ['A band of **hard rock** lies over **softer rock** across the river.', 'The soft rock is **eroded faster**, forming a step.', 'The falling water erodes a **plunge pool** and **undercuts** the soft rock, leaving an **overhang** of hard rock.', 'The overhang **collapses**, and the process repeats, so the fall **retreats upstream** and leaves a **gorge**.'] },
  ]),

  L('ge-meanders-f4', 'ge-f4-rivers', '5.3', 'Lower course landforms: meanders, floodplains and deltas', 11, ['Physical geography', 'Rivers'], [
    'In its middle and lower courses the river erodes **sideways** and deposits. Its valley becomes wide and flat, and the river swings in large bends called **meanders**:\n- On the **outside** of a bend the water is fast and deep; it erodes the bank, forming a steep **river cliff**.\n- On the **inside** it is slow and shallow; it deposits sand, forming a gentle **slip-off slope**.',
    'An **ox-bow lake** forms from a meander:\n- Erosion on the outside of two bends narrows the **neck** of land between them.\n- In a flood the river cuts straight through the neck.\n- Deposits seal off the old bend, which becomes a curved, still lake.\nIn time it fills with sediment and plants and becomes a swamp.',
    'When a river overflows its banks in a flood, it spreads out over the flat land beside it and drops silt. Layer after layer of this fertile **alluvium** builds a **floodplain**. The heaviest material is dropped right at the banks, building raised ridges called **levees**.',
    'At its **mouth** the river meets the sea:\n- An **estuary** is a wide, funnel-shaped mouth where tides keep the channel open, such as the **Wouri estuary** at Douala.\n- A **delta** forms where a river carries more sediment than the sea can remove; the sediment builds out into the sea, and the river splits into many channels (**distributaries**). The **Niger Delta** in Nigeria is a large example; the Rio del Rey area on Cameroon’s coast near Bakassi has many creeks and mangroves.',
    'Floodplains and deltas are densely farmed because the alluvial soil is fertile and water is near, as on the floodplains of the Logone and Benue, where rice is grown; but they are at risk of flooding.',
  ], 'oxbow-steps', 'Outside of a bend: **erosion** (river cliff). Inside: **deposition** (slip-off slope).',
  ['On the inside of a meander bend, the river:', ['Deposits, forming a slip-off slope', 'Erodes a river cliff', 'Forms a waterfall', 'Flows fastest'], 'The water there is slow and shallow.'],
  [['Meander', 'A large bend in a river.'], ['Ox-bow lake', 'A curved lake formed when a meander is cut off.'], ['Floodplain', 'Flat land beside a river built up by flood deposits.'], ['Levee', 'A raised bank along a river formed by flood deposits.'], ['Distributary', 'A channel that branches off a river in a delta.']],
  null),

  // ---------- Weather ----------
  L('ge-station-f4', 'ge-f4-weather', '6.1', 'The weather station and its instruments', 12, ['Weather', 'Practical'], [
    '**Weather** is the condition of the atmosphere at a place at a given time; **climate** is the average weather of a place over a long period, usually about 30 years. The main **elements** of weather are temperature, rainfall, atmospheric pressure, wind speed and direction, humidity, sunshine and cloud.',
    'Thermometers are kept in a **Stevenson screen**: a white wooden box with **louvred** (slatted) sides, on legs about 1.2 m above short grass. White reflects the sun’s heat, the louvres let air flow through but keep out direct sunshine and rain, and the height keeps the instruments away from heat from the ground.',
    'A **Six’s thermometer** records the **maximum** and **minimum** temperatures. It is a U-shaped tube with mercury in the bend and alcohol above it on both sides. As the temperature rises, the alcohol in the main bulb expands and pushes the mercury round, which pushes a small steel **index** up the maximum side. As the temperature falls, the mercury moves back and pushes the other index up the minimum side. Each index stays where it was pushed; the readings are taken at the **lower end** of each index, and the indexes are reset with a **magnet**.',
    'Other instruments:\n- **Rain gauge:** a funnel leading into a collecting bottle, set in open ground with its rim about 30 cm above the ground to avoid splashes; the water is measured daily in a measuring cylinder, in millimetres.\n- **Barometer:** measures atmospheric pressure in millibars (hectopascals). An **aneroid barometer** has a sealed metal box, partly emptied of air, that is squeezed or expands as the pressure changes and moves a pointer. Average sea-level pressure is about 1 013 mb.\n- **Anemometer:** spinning cups measure wind **speed**.\n- **Wind vane:** points to the direction the wind blows **from**; winds are named after it.\n- **Wet and dry bulb hygrometer:** two thermometers, one kept wet by a wick. Evaporation cools the wet bulb; the drier the air, the greater the difference, and tables turn the difference into **relative humidity**.\n- **Sunshine recorder:** a glass sphere focuses the sun’s rays to burn a trace on a card.',
  ], 'weather-instruments', 'A wind is named after where it comes **from**: the **north-east trades** blow from the north-east.',
  ['The wet-bulb reading is far below the dry-bulb reading. The air is:', ['Dry, with low relative humidity', 'Very humid', 'Saturated', 'Freezing'], 'Fast evaporation from the wet bulb means dry air.'],
  [['Weather', 'The condition of the atmosphere at a place at a given time.'], ['Climate', 'The average weather of a place over about 30 years.'], ['Stevenson screen', 'A white, louvred box that shelters thermometers.'], ['Relative humidity', 'The amount of water vapour in the air as a percentage of the most it could hold.']],
  null),

  L('ge-weathercalc-f4', 'ge-f4-weather', '6.2', 'Weather calculations and climate graphs', 12, ['Weather', 'Calculation'], [
    'Daily readings are turned into useful figures:\n- **Daily mean temperature** = (maximum + minimum) ÷ 2.\n- **Daily range of temperature** = maximum − minimum.\n- **Monthly mean temperature** = the sum of the daily means ÷ the number of days.\n- **Annual range of temperature** = the mean of the hottest month − the mean of the coldest month.\n- **Total annual rainfall** = the sum of the 12 monthly totals.',
    'A **climate graph** shows the climate of one place: **bars** for each month’s rainfall (scale on one side, in mm) and a **line** for each month’s mean temperature (scale on the other side, in °C).',
    'To describe a climate graph, give:\n- the **highest** and **lowest** monthly temperatures and the **annual range**\n- the **total** rainfall\n- the **wettest** and **driest** months, and how the rain is spread (all year, or wet and dry seasons)\n- then name the climate type.',
    'Lines on maps joining places with equal values are **isolines**: **isotherms** join places of equal temperature, **isobars** equal pressure, and **isohyets** equal rainfall.',
  ], 'climate-graph', 'Annual range = **hottest month − coldest month**; daily range = **max − min**.',
  ['A town’s hottest month averages 28 °C and its coldest 24 °C. Its annual range is:', ['4 °C', '26 °C', '52 °C', '24 °C'], '28 − 24 = 4.'],
  [['Daily mean temperature', 'The average of the maximum and minimum temperatures of a day.'], ['Annual range', 'The difference between the hottest and coldest monthly means.'], ['Isohyet', 'A line on a map joining places with equal rainfall.'], ['Isobar', 'A line joining places with equal atmospheric pressure.']],
  [
    { q: 'In one week the maximum temperatures were 31, 30, 32, 29, 31, 30, 31 °C. Find the mean maximum.', steps: ['Sum: 31 + 30 + 32 + 29 + 31 + 30 + 31 = 214.', '214 ÷ 7 = 30.6 (to one decimal place).', 'Mean maximum ≈ **30.6 °C**.'] },
    { q: 'Describe the climate of Douala from its graph.', steps: ['**Temperature:** hot all year, about 24.5 to 28 °C, so the annual range is small, about 3.5 °C.', '**Rainfall:** about 3 900 mm a year, very wet.', '**Pattern:** a short drier season from December to February; the wettest months are July and August, with about 700 mm each.', 'This is an **equatorial** climate with a monsoon effect.'] },
  ]),

  // ---------- Climates and vegetation ----------
  L('ge-hotclimates-f4', 'ge-f4-climates', '7.1', 'Hot climates: equatorial, tropical and desert', 12, ['Climate'], [
    '**Equatorial climate** (about 5° to 10° north and south of the Equator; the Congo Basin, the Amazon, Southern Cameroon):\n- hot all year, about **27 °C**, with a very small annual range (under 3 °C)\n- rain all year, usually **over 2 000 mm**, mostly in afternoon thunderstorms from rising, heated air (**convectional rain**)\n- very humid.\nNear the Equator there are often two rainier periods each year, when the overhead sun passes.',
    '**Tropical (savanna) climate** (about 5° to 15° or 20° north and south; Northern Cameroon, around Garoua):\n- hot all year, with a larger annual range\n- a **wet season** when the overhead sun and the moist winds come, and a **dry season** when dry winds such as the **harmattan** blow from the Sahara\n- about **500 to 1 500 mm** of rain, less towards the deserts.',
    '**Hot desert climate** (about 15° to 30° north and south, often on the western sides of continents; the Sahara, Kalahari and Namib):\n- **under 250 mm** of rain, very unreliable\n- very hot days, often over 40 °C, but cold nights, because clear skies let heat escape: a **large daily range**\n- low humidity.\nDeserts form where air sinks and becomes dry, far from the sea, or where cold ocean currents cool the coastal air.',
  ], 'hot-climates', 'Equatorial: **hot + wet all year**. Savanna: **wet + dry seasons**. Desert: **under 250 mm, hot days, cold nights**.',
  ['Afternoon thunderstorms from rising, heated air give:', ['Convectional rain', 'Relief rain', 'Frontal rain', 'No rain'], 'Typical of the equatorial climate.'],
  [['Equatorial climate', 'A climate that is hot and wet all year.'], ['Convectional rain', 'Rain from air that rises after being heated by the ground.'], ['Harmattan', 'A dry, dusty north-east wind from the Sahara.'], ['Daily range', 'The difference between the highest and lowest temperatures of a day.']],
  null),

  L('ge-coolclimates-f4', 'ge-f4-climates', '7.2', 'Cooler climates: Mediterranean, temperate and polar', 10, ['Climate'], [
    '**Mediterranean climate** (about 30° to 40° north and south, on the western sides of continents; lands around the Mediterranean Sea, California, central Chile, the Cape Town area and south-western Australia):\n- **hot, dry summers**, about 20 to 27 °C\n- **mild, wet winters**, about 10 °C, when rain-bearing westerly winds arrive\n- about 400 to 900 mm of rain, mostly in winter.',
    '**Cool temperate western margin climate** (about 40° to 60°, on the western sides of continents; Britain, north-western Europe, British Columbia):\n- mild summers, about 15 °C, and cool winters, about 5 °C: a small annual range for its latitude because of the warm sea\n- rain **all year** from westerly winds and depressions, often 750 to 1 500 mm.\nInland, far from the sea, winters are much colder and summers warmer: a **continental** climate.',
    '**Polar and tundra climates** (beyond about 66.5°, the Arctic and Antarctic Circles; northern Canada, Greenland, Antarctica):\n- very cold: the warmest month is **below 10 °C**\n- long, dark winters and short summers with long days\n- little precipitation, mostly snow.',
  ], 'cool-climates', 'Mediterranean rain falls in **winter**; temperate rain falls **all year**.',
  ['Why does Britain have mild winters for a place so far north?', ['Warm sea and westerly winds from the Atlantic', 'It is near the Equator', 'Its mountains are high', 'It has no wind'], 'The North Atlantic Drift warms the air.'],
  [['Mediterranean climate', 'A climate with hot, dry summers and mild, wet winters.'], ['Continental climate', 'A climate far from the sea, with very hot summers and very cold winters.'], ['Tundra', 'Cold, treeless land near the polar regions.']],
  null),

  L('ge-vegbelts-f4', 'ge-f4-climates', '7.3', 'Natural vegetation and how plants are adapted', 12, ['Vegetation'], [
    '**Natural vegetation** is the plant cover that grows without human interference. Each climate has its own, because plants are **adapted** to its heat and water.',
    '**Equatorial rainforest:**\n- dense, **evergreen** forest with many species, in **layers**: emergents (40 to 50 m), a closed **canopy**, an under-canopy, a shrub layer and a dark forest floor\n- broad leaves with **drip tips** shed the heavy rain\n- **buttress roots** support tall trees in shallow soil\n- climbing plants (**lianas**) and plants growing on other plants (**epiphytes**)\n- valuable hardwoods such as mahogany, iroko, sapele, ebony and ayous.',
    '**Savanna:** tall grasses, up to 3 m, with scattered trees such as the **baobab** and acacia. Trees have thick bark against fire, deep roots, and may shed their leaves in the dry season; the grass dries out and grows again when the rains come.',
    '**Desert:** sparse plants called **xerophytes**, adapted to drought: **cacti** store water in fleshy stems; plants have long roots to reach deep water, small, waxy or thorny leaves to lose little water, and seeds that wait years for rain. Date palms grow at **oases**.',
    '**Mediterranean:** evergreen trees and shrubs with thick bark and small, waxy leaves that resist the summer drought, such as the olive and cork oak. **Temperate deciduous forest:** trees such as oak and beech shed their leaves in winter. **Coniferous forest (taiga):** pine, spruce and fir, with needle leaves and a cone shape that sheds snow. **Tundra:** mosses, lichens and dwarf shrubs.',
  ], 'rainforest-layers', 'Every adaptation answers a problem: **too much water** (drip tips), **too little** (cacti), **fire** (thick bark), **snow** (cone shape).',
  ['Buttress roots help rainforest trees because:', ['They support tall trees in shallow soil', 'They store water for the dry season', 'They catch snow', 'They resist fire'], 'Most nutrients are near the surface, so roots are shallow.'],
  [['Natural vegetation', 'Plant cover that grows without human interference.'], ['Drip tip', 'A pointed leaf tip that sheds water quickly.'], ['Xerophyte', 'A plant adapted to very dry conditions.'], ['Deciduous', 'Shedding leaves in one season of the year.']],
  null),

  // ---------- Ecosystems and hazards ----------
  L('ge-ecosystem-f4', 'ge-f4-hazards', '8.1', 'Ecosystems: climate, soil and vegetation', 10, ['Environment', 'Ecosystems'], [
    'An **ecosystem** is a community of living things together with their **non-living environment**: climate, soil, water and rock. All the parts are linked, so a change in one affects the others.',
    'Climate, soil and vegetation work together:\n- The **climate** decides which plants can grow and how fast rocks weather into soil.\n- The **vegetation** gives the soil its humus and protects it from rain and wind.\n- The **soil** supplies the plants with water and nutrients.',
    'In the **equatorial rainforest**, the heat and rain make plants grow and rot very quickly. Most of the nutrients are held in the **plants**, not the soil: fallen leaves decay in weeks and their nutrients are taken up again at once. When the forest is cleared, heavy rain soon **leaches** the soil and washes it away, so farms there lose their fertility after a few years. This is why shifting cultivation moved on and why the forest must be managed carefully.',
    'People change ecosystems by clearing forest, burning grassland, farming, mining, building and polluting. Sustainable use, such as selective logging, replanting, protected areas and fallowing farmland, keeps ecosystems healthy.',
  ], 'shifting-cultivation', 'In the rainforest the nutrients are in the **trees**, not the soil.',
  ['Why do rainforest soils become poor soon after clearing?', ['Most nutrients were in the plants, and the rain leaches the rest', 'The soil freezes', 'The forest returns at once', 'Animals eat the soil'], 'The nutrient cycle is broken.'],
  [['Ecosystem', 'Living things and their non-living environment, linked together.'], ['Nutrient cycle', 'The movement of nutrients between soil, plants and decaying matter.'], ['Biotic', 'Living parts of an ecosystem.'], ['Abiotic', 'Non-living parts of an ecosystem, such as climate and soil.']],
  null),

  L('ge-hazards-f4', 'ge-f4-hazards', '8.2', 'Environmental hazards: droughts, floods and tropical cyclones', 12, ['Environment', 'Hazards'], [
    'A **natural hazard** is a natural event that threatens people and their property. It becomes a **disaster** when it causes great loss of life or damage.',
    '**Droughts** are long periods with much less rain than normal. They strike the **Sahel** and the Far North of Cameroon. Effects: crops fail, livestock die, wells dry up, food prices rise, people migrate and famine may follow. Responses: storing water in dams and wells, irrigation, drought-resistant crops such as millet and sorghum, planting trees against desertification, and early-warning systems with food reserves.',
    '**Floods** happen when water covers land that is normally dry. Causes:\n- very heavy or long rains\n- rivers overflowing their banks\n- the sea surging inland\n- **human causes:** building on floodplains and in valleys, drains blocked with rubbish, deforestation that lets rain run off quickly, and the release of water from dams.\nDouala and Limbe flood often in the rainy season, and in 2012 floods around Garoua followed heavy rain and the release of water from the Lagdo dam. Responses: clearing and enlarging drains, banning building in flood zones, embankments, reforestation and warnings.',
    '**Tropical cyclones** (called hurricanes over the Atlantic and typhoons over the Pacific) are huge, spinning storms that form over warm seas, warmer than about 27 °C, between about 5° and 30° from the Equator. Warm, moist air rises fast, leaving very low pressure; air spirals in round a calm **eye**, building towering clouds with torrential rain and winds over 119 km/h. On land they cause storm surges, floods and destruction. Cyclone **Idai** in 2019 killed more than a thousand people in Mozambique, Zimbabwe and Malawi. Cameroon lies outside the cyclone belt.',
  ], 'cyclone-steps', 'A hazard becomes a **disaster** when people are badly hurt. **Planning** reduces the damage.',
  ['Which is a human cause of floods in towns?', ['Drains blocked with rubbish', 'Heavy rain', 'A tropical cyclone', 'A high tide'], 'Rubbish stops the rainwater draining away.'],
  [['Natural hazard', 'A natural event that threatens people and property.'], ['Drought', 'A long period with much less rain than normal.'], ['Tropical cyclone', 'A huge, spinning storm that forms over warm tropical seas.'], ['Storm surge', 'A rise of the sea pushed inland by a storm.']],
  [
    { q: 'Suggest four ways the council of a town like Douala can reduce flooding.', steps: ['**Clear and widen** the drains and canals before the rains.', '**Stop building** in valleys and on floodplains.', 'Organise **rubbish collection** so waste does not block the drains.', '**Plant trees** and keep open green spaces so rain soaks in.'] },
  ]),

  // ---------- Population and migration ----------
  L('ge-popfactors-f4', 'ge-f4-population', '9.1', 'World population distribution and density', 11, ['Population'], [
    '**Population distribution** is the way people are spread over an area. **Population density** is the number of people per square kilometre: density = population ÷ area.',
    'The world’s population passed **8 billion** in 2022. It is very unevenly spread:\n- **Densely populated:** East Asia (eastern China, Japan), South Asia (India, Bangladesh), Europe, the north-eastern USA, the Nile valley and delta, and the coast of West Africa.\n- **Sparsely populated:** hot deserts (Sahara), cold lands (northern Canada, Siberia, Antarctica), high mountains, and dense rainforests (Amazon, Congo Basin).',
    '**Physical factors:**\n- **Climate:** moderate climates with enough rain attract people; very hot, cold or dry places do not.\n- **Relief:** lowlands and gentle slopes are easier for farming, building and transport than steep mountains.\n- **Soils:** fertile volcanic and alluvial soils support many people.\n- **Water**, **vegetation** (dense forest is hard to clear) and **minerals**.',
    '**Human factors:**\n- **Economic activities:** jobs in industry, trade, mining and services draw people to towns and ports.\n- **Transport and communication.**\n- **Government policy**, such as new towns or resettlement.\n- **History and culture.**\n- **Security:** people leave areas of conflict.',
    'In Cameroon, density is high in the **West** and **North-West** (fertile volcanic soils, a good climate), the **Littoral** (Douala), the **Centre** (Yaoundé) and the **Mandara Mountains** of the Far North; it is low in the **East** and **South** (dense forest) and on the **Adamawa Plateau**.',
  ], 'population-pyramid', 'Density = **population ÷ area**, in people per km².',
  ['Why is the East Region of Cameroon sparsely populated?', ['Dense forest, poor roads and few jobs', 'It is a desert', 'It is too cold', 'It has no rivers'], 'The forest is hard to clear and transport is difficult.'],
  [['Population distribution', 'The way people are spread over an area.'], ['Population density', 'The number of people per square kilometre.'], ['Sparsely populated', 'Having few people per square kilometre.']],
  [
    { q: 'Cameroon has about 28 million people on 475 442 km². Calculate its population density.', steps: ['Density = population ÷ area.', '28 000 000 ÷ 475 442 ≈ 59.', 'About **59 people per km²**, though some areas have far more and others far fewer.'] },
  ]),

  L('ge-popstats-f4', 'ge-f4-population', '9.2', 'Population growth: rates and pyramids', 12, ['Population', 'Calculation'], [
    'Population changes through births, deaths and migration. Rates are given **per thousand** (‰) people per year:\n- **Crude birth rate (CBR)** = (live births in a year ÷ total population) × 1 000.\n- **Crude death rate (CDR)** = (deaths in a year ÷ total population) × 1 000.\n- **Natural increase** = birth rate − death rate. As a percentage: (CBR − CDR) ÷ 10.',
    'The **growth rate** includes migration as well. A population growing at a steady rate doubles in about **70 ÷ growth rate (%)** years: at 2.5 % a year, it doubles in about 28 years.',
    'Birth rates are high where many children are wanted to help on farms and to support parents in old age, where marriage is early, where infant mortality is high and where family planning is little used. Death rates fall with better **health care**, **clean water**, **vaccination** and **food**. When death rates fall faster than birth rates, the population grows quickly, as in Cameroon today.',
    'A **population pyramid** shows the population by age group and sex: males on the left, females on the right, the youngest at the bottom.\n- A **wide base** and narrow top shows a young, fast-growing population with a high birth rate and short life expectancy, as in Cameroon.\n- Straighter sides and a narrow base show an **ageing** population with low birth rates and long lives, as in Japan.',
    'Rapid growth puts pressure on schools, hospitals, jobs, housing and land; a young population is also a future workforce. The **dependency ratio** compares the dependent population (under 15 and over 64) with those of working age (15 to 64).',
  ], 'population-pyramid', 'Natural increase = **birth rate − death rate**; doubling time ≈ **70 ÷ growth rate**.',
  ['Birth rate 36 ‰ and death rate 9 ‰. The natural increase is:', ['2.7 % a year', '45 % a year', '4.5 % a year', '27 % a year'], '36 − 9 = 27 per thousand = 2.7 per cent.'],
  [['Crude birth rate', 'Live births per thousand people per year.'], ['Natural increase', 'The birth rate minus the death rate.'], ['Population pyramid', 'A graph of a population by age group and sex.'], ['Dependency ratio', 'The number of dependants compared with people of working age.']],
  [
    { q: 'A town of 50 000 people had 1 900 births and 450 deaths in a year. Find the birth rate, death rate and natural increase.', steps: ['CBR = (1 900 ÷ 50 000) × 1 000 = **38 ‰**.', 'CDR = (450 ÷ 50 000) × 1 000 = **9 ‰**.', 'Natural increase = 38 − 9 = 29 ‰ = **2.9 %** a year.', 'At this rate the population would double in about 70 ÷ 2.9 ≈ **24 years**.'] },
  ]),

  L('ge-migrate-f4', 'ge-f4-migration', '10.1', 'Migration: types, causes and consequences', 12, ['Population', 'Migration'], [
    '**Migration** is the movement of people from one place to another to live, for a long time or for good. Short daily journeys to work are **commuting**, not migration.',
    'Types of migration:\n- **Internal:** within a country, such as from a village in the West to Douala (**rural-urban** migration, the most common in Cameroon), or from town back to village.\n- **International:** across borders, such as Cameroonians going to Gabon, Equatorial Guinea or Europe to work.\n- **Voluntary:** by choice, for work, study, marriage or a better life.\n- **Forced:** to escape war, persecution, insecurity or disaster. **Refugees** have crossed a border; **internally displaced persons (IDPs)** have fled but stayed inside their own country.\n- **Seasonal:** for part of the year, such as herders moving their cattle to dry-season pastures (transhumance).',
    '**Push factors** drive people out: unemployment, poverty, shortage of land, poor services, droughts, floods and insecurity. **Pull factors** draw people in: jobs, higher wages, schools, hospitals, electricity, safety and the bright lights of the town.',
    'Cameroon both receives and produces migrants. Refugees from the **Central African Republic** live in the East and Adamawa, and refugees from **Nigeria** at the **Minawao** camp in the Far North. Insecurity has also displaced many people within Cameroon, from parts of the Far North and of the North-West and South-West regions.',
    'Consequences:\n- **Source areas (where people leave):** fewer young workers, so farms are neglected; old people and children are left behind; but families receive **remittances** (money sent home) and returning migrants bring new skills.\n- **Destination areas:** more workers and markets, and mixing of cultures; but also overcrowding, **slums**, unemployment, crime and pressure on water, schools, hospitals and transport. Large refugee populations need food, shelter and health care, and can strain local resources.',
  ], 'migration-types', 'Push = **leave**; pull = **come**. Refugees cross a **border**; IDPs stay **inside** their country.',
  ['Herders moving their cattle to other pastures each dry season is:', ['Seasonal migration (transhumance)', 'International migration', 'Commuting', 'Urbanisation'], 'They return when the rains come.'],
  [['Migration', 'The movement of people to live in another place.'], ['Refugee', 'A person who has fled across a border to escape danger or persecution.'], ['Internally displaced person', 'A person forced to flee who stays inside their own country.'], ['Remittances', 'Money sent home by migrants.']],
  [
    { q: 'Give two push factors and two pull factors for a young person moving from a village in the North-West to Douala.', steps: ['**Push:** few paid jobs in the village; shortage of good farmland.', '**Pull:** jobs in the port, factories and trade in Douala; better schools and services.'] },
  ]),

  // ---------- Settlement ----------
  L('ge-rural-f4', 'ge-f4-settlement', '11.1', 'Settlements: sites, patterns and functions', 11, ['Settlement'], [
    'A **settlement** is a place where people live: from a single farmstead or **hamlet**, through a **village** and a **town**, to a **city** and a **conurbation** (towns joined together). This order is the **settlement hierarchy**: the bigger the settlement, the fewer there are and the more services they offer.',
    'The **site** is the actual land a settlement is built on. Good sites have:\n- a **water supply** (spring, river or well)\n- a **dry point** above flood level\n- **defence** (a hilltop or river bend)\n- **fertile land** nearby, building materials and fuel\n- a **route centre** or bridging point where routes meet.\nThe **situation** is its position in relation to the surrounding area: for example, Douala is situated on the Wouri estuary, the gateway between the sea and the interior.',
    'Settlement **patterns**:\n- **Nucleated** (clustered): houses grouped together, around a water source, a crossroads or a market, or for defence and community life. Common in the Northern regions.\n- **Dispersed** (scattered): houses spread out, each on its own farmland. Common in the Western Highlands, where families live on their own compounds.\n- **Linear**: houses in a line along a road, river, railway or coast, for easy transport and trade, as along the Douala to Yaoundé road.',
    'Settlements have **functions**:\n- **Rural** settlements: mainly farming, fishing and forestry.\n- **Urban** settlements: administrative (Yaoundé, the capital, and regional headquarters), commercial and port (Douala), industrial (Edéa), educational (Buea, Dschang and Soa, with universities), tourist (Kribi, Limbe), religious and cultural (Foumban), mining, and route centres (Ngaoundéré, the railway terminus).',
  ], 'settlement-sites', 'Site = **the land it stands on**; situation = **its position in the region**.',
  ['A settlement built on a hilltop for safety has a site chosen for:', ['Defence', 'Fertile soil', 'Trade', 'Fishing'], 'High ground is easier to defend.'],
  [['Settlement', 'A place where people live.'], ['Site', 'The land on which a settlement is built.'], ['Situation', 'The position of a settlement in relation to its surroundings.'], ['Nucleated settlement', 'A settlement with houses grouped closely together.'], ['Settlement hierarchy', 'The order of settlements by size and number of services.']],
  null),

  L('ge-towns-f4', 'ge-f4-settlement', '11.2', 'Towns and the problems of rapid urbanisation', 12, ['Settlement', 'Urbanisation'], [
    '**Urbanisation** is the growth in the proportion of a country’s people living in towns. In Cameroon it is fast, through **rural-urban migration** and **natural increase** in the towns. Today more than half of Cameroonians live in towns, and Douala and Yaoundé each have several million people.',
    'Towns have **zones**:\n- the **central business district (CBD)**: shops, banks, offices and markets, where land is dearest\n- **industrial zones**, often near the port, railway or river, such as Bassa and Bonabéri in Douala\n- **residential areas**: high-class planned areas and crowded low-income quarters\n- **suburbs** and **peri-urban** areas at the edge, where town meets countryside.',
    'Problems of rapid urban growth:\n- **Slums** and unplanned settlements without water, drainage or electricity, often on steep slopes or in flood-prone valleys.\n- **Traffic congestion**, with long jams and road accidents.\n- **Waste**: rubbish that is not collected blocks drains and spreads disease.\n- **Pollution** of air (vehicles, factories) and water.\n- **Unemployment** and street trading, and **crime**.\n- **Shortage of services:** water, electricity, schools and health centres cannot keep up.',
    'Solutions:\n- **Urban planning** and enforcing building rules.\n- Building **low-cost housing** and upgrading slums with water, drains and roads.\n- Better **public transport**, new roads and bridges, such as the second bridge over the Wouri.\n- Regular **waste collection** and recycling.\n- Creating jobs and developing **smaller towns and rural areas**, so that fewer people need to move to the big cities.',
  ], 'urban-problems', 'Urban problems: **slums, traffic, waste, pollution, unemployment**. Answer with problem → cause → solution.',
  ['Why do slums often grow on steep slopes and in valleys?', ['The land is cheap or unclaimed because it is hard to build on', 'The soil is best there', 'Planners chose these places', 'It is the CBD'], 'Poor migrants build where land is available, often in risky places.'],
  [['Urbanisation', 'The growth in the share of people living in towns.'], ['Central business district', 'The centre of a town with its shops, banks and offices.'], ['Slum', 'An area of poor, crowded, unplanned housing without proper services.'], ['Peri-urban area', 'The zone at the edge of a town where it meets the countryside.']],
  null),
];
