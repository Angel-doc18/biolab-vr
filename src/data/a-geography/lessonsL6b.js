// A Level Geography lessons (0750), Lower Sixth, Terms 2 and 3: drainage
// basins and storm hydrographs, river channels and landforms, the atmosphere
// and energy budget, pressure and global winds, air masses and storms, soils,
// ecosystems and biomes, population theories, settlement theory, and the
// mapwork and essay clinics.

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

export const LESSONS_GL6B = [
  // ---------- 9. Drainage basins ----------
  L('agg-hydrology-1', 'agg-l6-hydrology', '9.1', 'The drainage basin system and the storm hydrograph', 18, ['Physical'], [
    'A **drainage basin** is an open system. **Input**: precipitation. **Stores**: interception by vegetation, surface storage (puddles, lakes), soil moisture, groundwater and channel storage. **Flows**: infiltration (into the soil), percolation (into rock), throughflow (through the soil), overland flow (over the surface) and groundwater flow. **Outputs**: evaporation, transpiration (together **evapotranspiration**) and river discharge.',
    '**Overland flow** happens when rain falls faster than the soil can absorb it (infiltration-excess, on bare or compacted ground) or when the soil is already full (saturation-excess). It reaches the channel quickly; throughflow and groundwater flow are slower.',
    'A **storm hydrograph** plots discharge (m³/s) against time after a storm, with rainfall shown as bars. Its parts: the **rising limb**, **peak discharge**, the **lag time** (from peak rainfall to peak discharge), the **falling (recession) limb** and **base flow** from groundwater.',
    'Factors that shorten lag time and raise the peak ("flashy" rivers): intense or long rain on saturated ground, steep slopes, impermeable rock and soils, a small circular basin, high drainage density, little vegetation, and urban surfaces and drains. Forest, permeable rock, gentle slopes and large elongated basins give flatter hydrographs.',
  ], 'agg-hydrograph', 'Short lag and high peak: steep, impermeable, bare, urban.',
  ['On a storm hydrograph, lag time is measured from:', ['peak rainfall to peak discharge', 'the start of the rain to the end', 'base flow to peak', 'peak discharge to the end of the recession limb'], 'It shows how quickly water reaches the channel.'],
  [['Evapotranspiration', 'Evaporation and transpiration together.'], ['Base flow', 'The part of river discharge supplied by groundwater.'], ['Discharge', 'The volume of water passing a point per second (m³/s).']],
  [
    { q: 'Explain why a stream draining central Douala responds faster to a storm than a forest stream of the same size in the East region.', steps: ['Surfaces: **roofs and roads are impermeable, so infiltration is low.**', 'Drains: **gutters and channels carry water straight to the stream.**', 'Vegetation: **little interception in the city; the forest stores and delays rain.**', 'Result: **a shorter lag time and higher peak in Douala, raising flood risk.**'] },
  ]),

  L('agg-hydrology-2', 'agg-l6-hydrology', '9.2', 'River erosion, transport and deposition', 17, ['Physical'], [
    'A river’s energy depends on its **discharge** and **gradient**; most is used to overcome friction with the bed and banks. Only the surplus erodes and transports.',
    'Erosion:\n- **hydraulic action**: the force of water compresses air in cracks and breaks rock\n- **cavitation**: collapsing air bubbles in very fast water produce shock waves that pit rock\n- **abrasion (corrasion)**: the load scrapes and grinds the bed and banks; potholes form where pebbles swirl\n- **attrition**: load particles knock together and become smaller and rounder\n- **corrosion (solution)**: acids dissolve soluble rocks such as limestone.\nErosion acts **vertically** (deepening) in the upper course and **laterally** (widening) in the middle and lower course.',
    'Transport:\n- **traction**: large boulders rolled along the bed\n- **saltation**: sand and gravel bounced along\n- **suspension**: fine silt and clay carried in the water (the brown colour of the Wouri in flood)\n- **solution**: dissolved minerals.\nThe **competence** of a river is the largest particle it can carry; its **capacity** is the total load.',
    'Deposition occurs when velocity falls: on the inside of bends, where a river enters a lake or the sea, when discharge drops after a flood, or when the load increases. Larger particles are deposited first, so sediments are sorted.',
  ], 'agg-river-processes', 'Erode, carry, drop: all depend on velocity.',
  ['Attrition differs from abrasion because attrition:', ['wears the load particles themselves smaller and rounder', 'wears away the river bed', 'dissolves limestone', 'compresses air in cracks'], 'Particles hit each other.'],
  [['Competence', 'The largest particle a river can transport.'], ['Capacity', 'The total load a river can transport.'], ['Pothole', 'A hollow in a river bed drilled by swirling pebbles.']],
  [
    { q: 'Explain why rivers are often most erosive during floods.', steps: ['Discharge: **a rise in volume increases velocity and energy.**', 'Surplus energy: **more energy is left after friction.**', 'Load: **larger, more numerous particles are moved, increasing abrasion.**', 'Result: **banks and bed are eroded far faster than at normal flow.**'] },
  ]),

  // ---------- 10. Channels and landforms ----------
  L('agg-channels-1', 'agg-l6-channels', '10.1', 'Long profiles, base level and rejuvenation', 18, ['Physical'], [
    'The **long profile** of a river, from source to mouth, is ideally a smooth **concave** curve: steep in the upper course, gentle in the lower. A **graded** river has adjusted its profile so that, over time, erosion and deposition balance. **Cross profiles** change downstream from narrow V-shaped valleys to wide, flat floodplains.',
    '**Base level** is the lowest level to which a river can erode, usually sea level (or a lake for an inland basin such as the Chad basin). A **fall in base level** (falling sea level) or a **rise of the land** (tectonic uplift, as along parts of the Cameroon Volcanic Line) gives the river new energy to cut down: **rejuvenation**.',
    'Landforms of rejuvenation:\n- **knickpoints**: breaks of slope in the long profile, often marked by waterfalls or rapids, which retreat upstream\n- **river terraces**: remnants of former floodplains left above the new one; paired terraces at the same height on both sides\n- **incised meanders**: meanders cut deep into rock; **entrenched** (symmetrical) where downcutting was fast, **ingrown** (asymmetrical) where it was slow.',
    'Waterfalls also form where a river crosses hard rock above soft rock: the soft rock is undercut, the overhang collapses and the fall retreats, leaving a **gorge**. The Lobé falls near Kribi drop straight into the sea over crystalline rock.',
  ], 'agg-long-profile', 'Lower the base level, and the river cuts down again.',
  ['Paired river terraces at the same height on both sides of a valley suggest:', ['rapid rejuvenation that cut down through the old floodplain', 'deposition by the sea', 'a glacier', 'a fault scarp'], 'The old floodplain survives as steps.'],
  [['Graded profile', 'A long profile in balance between erosion and deposition.'], ['Knickpoint', 'A break of slope in the long profile, often from rejuvenation.'], ['Incised meander', 'A meander cut deeply into the land.']],
  [
    { q: 'Explain the formation of river terraces.', steps: ['Starting point: **a river meanders across a wide floodplain.**', 'Rejuvenation: **base level falls or the land rises.**', 'Downcutting: **the river cuts a new, lower channel into its old floodplain.**', 'Result: **the old floodplain is left as a terrace; repeated episodes leave a staircase of terraces.**'] },
  ]),

  L('agg-channels-2', 'agg-l6-channels', '10.2', 'Meanders, floodplains and deltas', 18, ['Physical'], [
    '**Meanders** develop where the flow forms **pools** (deep) and **riffles** (shallow) and swings from side to side. The fastest water (the **thalweg**) hits the outer bank, eroding a **river cliff**; slower water on the inside deposits a **slip-off slope** (point bar). A **helicoidal** (corkscrew) flow carries sediment from the outer to the inner bank. Over time meanders migrate downstream and widen the valley.',
    '**Ox-bow lakes**: erosion narrows the meander neck until a flood cuts through; deposition seals the old loop, which becomes a lake and then a marsh.',
    '**Floodplains** are built by lateral erosion and deposition during floods. **Levées** form because the river drops its coarsest load first as it spills over the banks and loses speed; repeated floods build raised embankments. Behind them lie **backswamps** of fine silt and clay.',
    '**Deltas** form where a river deposits more sediment than waves and tides can remove, aided by **flocculation** (clay particles clumping in salt water):\n- **arcuate** (fan-shaped): the Nile, the Niger\n- **bird’s foot**: long fingers of distributaries where waves are weak (the Mississippi)\n- **cuspate**: a pointed shape shaped by strong waves from two sides (the Tiber).\nWhere strong tides scour the mouth, an **estuary** forms instead, as on the Wouri at Douala.',
  ], 'agg-delta-types', 'Fast outside, slow inside; deltas need more sediment than the sea can remove.',
  ['The Wouri at Douala ends in an estuary rather than a delta mainly because:', ['tides scour the mouth and remove sediment', 'it carries no sediment', 'it flows into a lake', 'it has no current'], 'The sea removes deposits faster than they arrive.'],
  [['Thalweg', 'The line of fastest flow in a river channel.'], ['Levée', 'A natural embankment built by flood deposits.'], ['Flocculation', 'The clumping of clay particles in salt water, which speeds deposition.']],
  [
    { q: 'Explain the formation of a levée.', steps: ['Flood: **the river overflows its banks.**', 'Friction: **velocity drops sharply at the channel edge.**', 'Sorting: **the coarsest sediment is dropped first, beside the channel; finer silt travels further.**', 'Repetition: **each flood adds a layer, building a raised bank.**'] },
  ]),

  // ---------- 11. The atmosphere ----------
  L('agg-atmosphere-1', 'agg-l6-atmosphere', '11.1', 'The structure of the atmosphere', 17, ['Physical'], [
    'The atmosphere is mostly **nitrogen** (about 78 per cent) and **oxygen** (21 per cent), with argon, carbon dioxide (about 0.04 per cent), variable water vapour, and aerosols such as dust and salt.',
    'Layers, defined by temperature:\n- **troposphere** (to about 8 km at the poles and 16 km at the equator): temperature falls with height at about **6.5 °C per km** (the environmental lapse rate); almost all weather and water vapour\n- **tropopause**: the boundary where the fall stops\n- **stratosphere** (to about 50 km): temperature rises with height because **ozone** absorbs ultraviolet radiation\n- **mesosphere** (to about 80 km): temperature falls again, to the coldest levels\n- **thermosphere**: temperature rises with absorption of high-energy radiation.',
    'Why the troposphere cools upwards: it is heated mainly from below, by the ground that absorbs solar radiation, and air expands and cools as pressure falls with height.',
    'This explains the temperature of Cameroon’s highlands: Buea (about 900 m) and Bamenda (about 1,200 m) are several degrees cooler than Douala at sea level.',
  ], 'agg-atmosphere', 'Down in the troposphere, up in the stratosphere, down, then up again.',
  ['Temperature rises with height in the stratosphere because:', ['ozone absorbs ultraviolet radiation', 'it is closer to the Sun', 'warm air rises into it', 'clouds trap heat there'], 'The ozone layer heats it.'],
  [['Environmental lapse rate', 'The rate at which temperature falls with height in still air, about 6.5 °C per km.'], ['Tropopause', 'The boundary between the troposphere and stratosphere.'], ['Ozone', 'A form of oxygen (O3) that absorbs ultraviolet radiation.']],
  [
    { q: 'Douala is at about 10 m and 27 °C. Estimate the temperature at the summit of Mount Cameroon, about 4,000 m.', steps: ['Height difference: **about 4 km.**', 'Fall: **4 × 6.5 = 26 °C.**', 'Estimate: **27 − 26 ≈ 1 °C.**', 'Comment: **frost can occur near the summit, though actual lapse rates vary with humidity.**'] },
  ]),

  L('agg-atmosphere-2', 'agg-l6-atmosphere', '11.2', 'The global energy budget and the greenhouse effect', 17, ['Physical'], [
    'The Sun emits **short-wave** radiation. Of the incoming energy at the top of the atmosphere, roughly 30 per cent is reflected back to space by clouds, the air and the surface (the planetary **albedo**); about a fifth is absorbed by the atmosphere; about half is absorbed by the surface.',
    'The warmed surface emits **long-wave** (infrared) radiation. **Greenhouse gases** (water vapour, carbon dioxide, methane, nitrous oxide) absorb much of it and re-radiate it, partly back downwards: the natural **greenhouse effect** keeps the mean surface temperature near 15 °C instead of about −18 °C. Burning fossil fuels and clearing forests add carbon dioxide and enhance the effect.',
    'Heat is also moved from the surface to the air as **sensible heat** (conduction and convection) and **latent heat** (absorbed in evaporation and released in condensation, a major source of energy for tropical storms).',
    'Latitude: low latitudes receive more insolation than they lose (a **surplus**, roughly between 35°N and 35°S); high latitudes lose more than they receive (a **deficit**). Winds and ocean currents carry the surplus poleward. Local factors also control temperature: altitude, distance from the sea (**continentality**), ocean currents, cloud cover, aspect and albedo.',
  ], 'agg-energy-budget', 'Short-wave in, long-wave out; greenhouse gases hold some of the long-wave back.',
  ['Without the natural greenhouse effect, the Earth’s mean surface temperature would be about:', ['−18 °C', '15 °C', '30 °C', '0 °C exactly'], 'Instead of about 15 °C.'],
  [['Albedo', 'The share of incoming radiation reflected by a surface.'], ['Latent heat', 'Energy absorbed or released when water changes state.'], ['Insolation', 'Incoming solar radiation.']],
  [
    { q: 'Explain why the tropics have an energy surplus.', steps: ['Sun angle: **the midday sun is high all year, so radiation is concentrated on a small area.**', 'Path length: **rays pass through less atmosphere.**', 'Day length: **about 12 hours all year, with no long winter.**', 'Result: **more energy arrives than is lost; the excess is carried poleward.**'] },
  ]),

  // ---------- 12. Pressure and winds ----------
  L('agg-circulation-1', 'agg-l6-circulation', '12.1', 'Forces that drive the winds', 17, ['Physical'], [
    'Air pressure is the weight of the air above a point, measured in millibars (hectopascals); the mean at sea level is about 1,013 mb. Pressure differences arise because heated air expands and rises (low pressure) while cooled air sinks (high pressure). **Isobars** join places of equal pressure.',
    'Three forces control the wind:\n- the **pressure gradient force** drives air from high to low pressure; closer isobars mean stronger winds\n- the **Coriolis force**, from the Earth’s rotation, deflects moving air to the **right in the northern hemisphere** and to the **left in the southern**; it is zero at the equator and greatest at the poles\n- **friction** with the surface slows the wind, which weakens the Coriolis effect, so surface winds cross the isobars towards low pressure.',
    'In the upper air, away from friction, the pressure gradient force and the Coriolis force balance and the wind blows parallel to the isobars: the **geostrophic wind**.',
    'Consequences: winds spiral **anticlockwise into lows** and **clockwise out of highs** in the northern hemisphere (the reverse in the south). Local winds such as land and sea breezes and mountain and valley winds come from local pressure differences; Douala’s afternoon sea breeze is one example.',
  ], 'agg-wind-forces', 'Pressure gradient pushes, Coriolis deflects, friction slows.',
  ['Surface winds cross the isobars towards low pressure because:', ['friction slows them and weakens the Coriolis effect', 'the Coriolis force is strongest at the surface', 'pressure gradients reverse at ground level', 'they follow the sun'], 'In the upper air they blow parallel to the isobars.'],
  [['Isobar', 'A line joining places of equal pressure.'], ['Coriolis force', 'The apparent deflection of moving air caused by the Earth’s rotation.'], ['Geostrophic wind', 'An upper wind blowing parallel to the isobars.']],
  [
    { q: 'Explain the afternoon sea breeze on the Cameroon coast.', steps: ['Day: **land heats faster than the sea.**', 'Pressure: **warm air rises over the land, lowering pressure; the sea stays cooler with higher pressure.**', 'Wind: **air flows from sea to land.**', 'Night: **the pattern reverses, giving a weaker land breeze.**'] },
  ]),

  L('agg-circulation-2', 'agg-l6-circulation', '12.2', 'The three-cell model, jet streams and monsoons', 18, ['Physical'], [
    'The **three-cell model** of the general circulation:\n- **Hadley cell**: air heated at the equator rises (the equatorial low and the ITCZ), flows poleward aloft, cools and sinks near **30°** (the subtropical highs), and returns to the equator as the **trade winds**\n- **Ferrel cell**: an indirect cell between about 30° and 60°, with surface **westerlies** blowing poleward\n- **polar cell**: cold air sinks at the poles (polar highs) and flows towards 60° as the **polar easterlies**, meeting the westerlies at the **polar front**.',
    'Pressure belts: equatorial low, subtropical highs (about 30°: the hot deserts, Sahara and Kalahari), sub-polar lows (about 60°) and polar highs. They shift north and south with the overhead sun.',
    '**Jet streams** are narrow bands of very fast westerly winds near the tropopause: the **polar front jet** steers mid-latitude depressions; the **subtropical jet** lies above the subtropical highs. A tropical easterly jet appears over West Africa in the northern summer.',
    '**Monsoons** are seasonal reversals of wind caused by the different heating of land and sea and the shift of the ITCZ. In the West African monsoon, south-west winds of moist Atlantic air reach Cameroon as the ITCZ moves north (wet season); in the northern winter the dry north-east **Harmattan** blows from the Sahara.',
  ], 'agg-tricellular', 'Hadley, Ferrel, polar: rising air at 0° and 60°, sinking air at 30° and 90°.',
  ['The hot deserts lie near 30° because:', ['air sinks in the subtropical highs and warms as it descends', 'the ITCZ is there all year', 'the westerlies bring rain', 'ocean currents are warm'], 'Sinking air prevents clouds forming.'],
  [['Hadley cell', 'The tropical circulation cell between the equator and about 30°.'], ['Jet stream', 'A narrow band of very fast wind near the tropopause.'], ['ITCZ', 'The Intertropical Convergence Zone, where the trade winds meet.']],
  [
    { q: 'Explain the seasonal pattern of rainfall in Garoua (about 9°N).', steps: ['Northern summer: **the overhead sun and the ITCZ move north.**', 'Monsoon: **moist south-west winds reach the north and convection brings rain (roughly May to October).**', 'Northern winter: **the ITCZ moves south; the Harmattan blows from the Sahara.**', 'Result: **one rainy season and one long dry season.**'] },
  ]),

  // ---------- 13. Air masses and storms ----------
  L('agg-airmass-1', 'agg-l6-airmasses', '13.1', 'Air masses and fronts', 17, ['Physical'], [
    'An **air mass** is a huge body of air with similar temperature and humidity at each level, acquired from its **source region**, a large uniform surface where air stays for days (oceans, deserts, ice sheets). Air masses are named by moisture (**maritime** m, **continental** c) and temperature (**tropical** T, **polar** P, **arctic** A): mT warm and moist, cT hot and dry, mP cool and moist, cP cold and dry.',
    'Over West Africa: **mT** air from the Gulf of Guinea brings the monsoon rains; **cT** air from the Sahara brings the dry, dusty Harmattan. Their meeting zone is the ITCZ (FIT).',
    'A **front** is the boundary between two air masses:\n- **warm front**: warm air rises gently over cold air; a long, gentle slope with layered clouds (cirrus, altostratus, nimbostratus) and steady rain\n- **cold front**: cold air undercuts warm air steeply; towering cumulonimbus, heavy showers, a sudden temperature drop and veering wind\n- **occluded front**: the faster cold front overtakes the warm front and lifts the warm air off the ground.',
    '**Frontogenesis** is the formation or strengthening of a front; frontolysis its weakening.',
  ], 'agg-air-masses', 'Maritime or continental, tropical or polar; fronts are their battle lines.',
  ['The Harmattan is associated with which air mass?', ['continental tropical (cT)', 'maritime tropical (mT)', 'maritime polar (mP)', 'continental polar (cP)'], 'Hot, dry air from the Sahara.'],
  [['Air mass', 'A large body of air with uniform temperature and humidity.'], ['Source region', 'The area where an air mass gains its character.'], ['Front', 'The boundary between two air masses.']],
  [
    { q: 'Describe the weather as a cold front passes.', steps: ['Before: **warm, humid air; cloud building.**', 'At the front: **cumulonimbus, heavy showers, gusty wind, possible thunder.**', 'After: **temperature and humidity fall; the wind veers; skies clear with scattered showers.**'] },
  ]),

  L('agg-airmass-2', 'agg-l6-airmasses', '13.2', 'Mid-latitude depressions and tropical cyclones', 18, ['Physical'], [
    '**Mid-latitude depressions** form on the polar front where warm tropical and cold polar air meet. A wave develops; warm air rises over cold air, pressure falls, and a **warm sector** forms between a warm front and a cold front. Steered by the polar front jet, the depression moves eastwards; the cold front catches the warm front, the system **occludes** and dies. They bring the changeable, wet and windy weather of western Europe.',
    '**Tropical cyclones** (hurricanes, typhoons) are intense low-pressure storms with winds above 119 km/h. They need:\n- sea temperatures above about **26 to 27 °C** to a depth of some 60 m\n- latitudes of about **5° to 20°**, where the Coriolis force can start rotation\n- low vertical wind shear and moist air.\nLatent heat released in condensation powers them; an **eye** of sinking, calm air is surrounded by the **eyewall** of the strongest winds and rain. They weaken over land or cold water.',
    'Hazards: winds, torrential rain and floods, landslides and **storm surges** (sea-level rises driven by wind and low pressure), the deadliest effect. Tropical cyclones are almost unknown in the Gulf of Guinea, whose waters and wind conditions rarely suit them; West African storms are mainly squall lines and thunderstorms.',
    'Comparison: depressions are larger, weaker, frontal and form over land or sea in mid-latitudes; tropical cyclones are smaller, far more intense, have no fronts and form only over warm oceans.',
  ], 'agg-depression-cyclone', 'Depressions: fronts and the jet. Cyclones: warm sea and latent heat.',
  ['Tropical cyclones lose strength when they move over land because:', ['they lose their supply of warm, moist air and latent heat', 'the Coriolis force increases', 'pressure falls', 'they meet the ITCZ'], 'And friction increases.'],
  [['Warm sector', 'The wedge of warm air between the warm and cold fronts of a depression.'], ['Storm surge', 'A rise in sea level caused by a storm’s winds and low pressure.'], ['Eyewall', 'The ring of strongest winds around the eye of a tropical cyclone.']],
  [
    { q: 'Compare a mid-latitude depression with a tropical cyclone.', steps: ['Origin: **depressions on the polar front; cyclones over warm tropical oceans.**', 'Structure: **depressions have fronts and a warm sector; cyclones have an eye and eyewall, no fronts.**', 'Energy: **depressions from contrasting air masses; cyclones from latent heat.**', 'Intensity: **cyclone winds are far stronger, with storm surges.**'] },
  ]),

  // ---------- 14. Soils ----------
  L('agg-soils-1', 'agg-l6-soils', '14.1', 'Soil formation, profiles and properties', 17, ['Physical'], [
    'Soil is a mixture of mineral particles, organic matter (humus), water and air. Its formation (**pedogenesis**) depends on five factors (Jenny, 1941): **parent material** (the rock it forms from), **climate** (temperature and rainfall control weathering, leaching and organic decay), **relief** (slope, drainage and aspect), **organisms** (plants, animals, microbes, people) and **time**.',
    'The **soil profile** shows horizons:\n- **O**: organic litter and humus\n- **A**: topsoil, mineral matter mixed with humus; often the zone of **eluviation** (washing out)\n- **B**: subsoil, the zone of **illuviation** (accumulation) of clay, iron or calcium\n- **C**: weathered parent material over bedrock.',
    'Properties: **texture** (proportions of sand, silt and clay), **structure** (how particles clump: crumb, blocky, platy), **colour** (red from iron oxides, black from humus, grey from waterlogging), **pH**, organic content and fertility.',
    'Soil processes include **leaching** (removal of soluble bases downward), **eluviation** and **illuviation**, **humification** (decay of litter into humus), **gleying** (waterlogging, giving grey and blue colours) and **salinisation** (salts drawn up by evaporation).',
  ], 'agg-soil-profile', 'O, A, B, C: from litter down to rock.',
  ['The B horizon is the zone of:', ['illuviation, where washed-down materials accumulate', 'eluviation', 'leaf litter', 'unweathered rock'], 'Clay, iron or calcium collect there.'],
  [['Pedogenesis', 'The formation of soil.'], ['Eluviation', 'The washing out of material from an upper horizon.'], ['Gleying', 'Waterlogging that gives grey or blue soil colours.']],
  [
    { q: 'Explain how relief affects soils on a hillside.', steps: ['Summit: **thin, well-drained soil.**', 'Steep slope: **soil moves downhill, staying thin and stony.**', 'Foot of slope: **deep soil accumulates from above.**', 'Valley floor: **waterlogged, gleyed soils.**', 'This sequence is called a **catena**.'] },
  ]),

  L('agg-soils-2', 'agg-l6-soils', '14.2', 'Podzolisation, ferrallitisation and calcification', 17, ['Physical'], [
    '**Podzolisation** happens in cool, wet climates under coniferous forest. Rainfall exceeds evaporation and acid needle litter forms acid humus; acids wash iron and aluminium down (**cheluviation**), leaving a bleached, ash-grey **E horizon** and a dark B horizon, sometimes with a hard **iron pan** that blocks drainage. Podzols are acidic and infertile.',
    '**Ferrallitisation (laterisation)** happens in hot, humid tropical regions. Intense chemical weathering and leaching remove silica and bases, leaving **iron and aluminium oxides** that colour the soil red or yellow. Soils are deep but poor in nutrients; fertility depends on the rapid recycling of litter. Exposed and dried, iron-rich layers can harden into **laterite** crusts (cuirasse), common in the savanna of northern Cameroon.',
    '**Calcification** happens where evaporation equals or exceeds rainfall, as in temperate grasslands. Leaching is weak; grasses return bases to the surface and calcium carbonate accumulates in the B horizon as nodules. The result is deep, dark, fertile **chernozems**, among the world’s best farming soils.',
    'Other tropical soils: **vertisols** (dark, cracking clays in the Far North plains), **andosols** on volcanic ash (fertile, around Mount Cameroon and in the West), and **hydromorphic** soils in swamps and floodplains.',
  ], 'agg-pedogenesis', 'Cool and wet: podzol. Hot and wet: ferrallitic. Dry: calcified.',
  ['Ferrallitic soils are often infertile because:', ['heavy leaching removes nutrients, leaving iron and aluminium oxides', 'they are too shallow to dig', 'they are frozen', 'they contain too much calcium'], 'Fertility lives in the biomass, not the soil.'],
  [['Podzol', 'An acid, leached soil of cool, wet climates.'], ['Laterite', 'A hard iron-rich crust formed in tropical soils.'], ['Chernozem', 'A deep, dark, fertile grassland soil.']],
  [
    { q: 'Explain why clearing rainforest in the South region quickly reduces soil fertility.', steps: ['Nutrient store: **most nutrients are held in the living biomass, not the soil.**', 'Clearing: **removes the biomass and the litter supply.**', 'Exposure: **heavy rain leaches the remaining nutrients and erodes topsoil.**', 'Result: **yields fall within a few years unless fallow or fertiliser restores the soil.**'] },
  ]),

  // ---------- 15. Ecosystems and biomes ----------
  L('agg-biomes-1', 'agg-l6-biomes', '15.1', 'Energy flow and nutrient cycles', 17, ['Physical'], [
    'An **ecosystem** links living organisms (biotic) and their environment (abiotic). **Producers** (green plants) capture solar energy by photosynthesis; **primary consumers** (herbivores) eat them; **secondary** and **tertiary consumers** (carnivores) follow; **decomposers** (fungi, bacteria) break down dead matter. Each step is a **trophic level**.',
    'Energy flows one way: at each level most energy is lost as heat in respiration, so only about **10 per cent** passes on. This limits food chains to four or five levels and makes ecological pyramids narrow upwards. **Net primary productivity** (energy stored by plants after their own respiration) is highest in tropical rainforests and estuaries, lowest in deserts and tundra.',
    'Nutrients cycle. In the **carbon cycle**, photosynthesis removes carbon dioxide from the air; respiration, decomposition and burning return it; oceans, rocks and fossil fuels are long-term stores. In the **nitrogen cycle**, nitrogen-fixing bacteria (some in legume roots) and lightning turn atmospheric nitrogen into compounds plants can use; decomposition and denitrifying bacteria return it.',
    'The **Gersmehl model** shows nutrients in three stores (biomass, litter, soil) and the flows between them; the size of each store differs from biome to biome.',
  ], 'agg-energy-flow', 'Energy flows and is lost; nutrients cycle and are reused.',
  ['Food chains rarely have more than four or five links because:', ['about 90 per cent of energy is lost at each trophic level', 'animals refuse to eat each other', 'plants grow too slowly', 'decomposers eat everything'], 'Too little energy remains at the top.'],
  [['Trophic level', 'A feeding level in a food chain.'], ['Net primary productivity', 'The energy stored by plants after their own respiration.'], ['Decomposer', 'An organism that breaks down dead matter.']],
  [
    { q: 'Compare nutrient stores in a rainforest and a temperate grassland.', steps: ['Rainforest: **largest store in the biomass; small litter and soil stores; fast cycling.**', 'Grassland: **largest store in the soil; grasses die back and return nutrients each year.**', 'Consequence: **clearing a forest removes most nutrients; ploughing grassland keeps a rich soil.**'] },
  ]),

  L('agg-biomes-2', 'agg-l6-biomes', '15.2', 'The world’s major biomes', 18, ['Physical'], [
    '**Equatorial rainforest** (about 10°N to 10°S; the Congo basin and southern Cameroon, Amazonia): hot (about 27 °C) and wet (over 2,000 mm) all year; layered forest (emergents, canopy, under-canopy, shrub layer) with buttress roots, lianas and drip-tip leaves; very high biodiversity; ferrallitic soils.',
    '**Tropical savanna** (northern Cameroon, East Africa): one wet and one long dry season; grassland with scattered drought-resistant trees (baobab, acacia); fire and grazing maintain it; ferruginous soils with laterite.',
    '**Hot desert** (Sahara, Kalahari): under 250 mm of rain, huge daily temperature range; sparse xerophytes with deep or wide roots, water storage and small or waxy leaves; thin, often saline soils.',
    '**Temperate deciduous forest** (western Europe, eastern USA): mild, wet, four seasons; broadleaf trees (oak, beech) shed leaves in winter; brown earth soils. **Tundra** (northern Canada, Siberia): long, very cold winters, a short summer and **permafrost**; mosses, lichens, sedges and dwarf shrubs.',
    'Human impact: deforestation and farming in rainforest and savanna, overgrazing and desertification on desert margins, oil and mining in the tundra; conservation, sustainable forestry and protected areas (the Dja reserve in Cameroon) aim to limit the damage.',
  ], 'agg-biomes', 'Climate sets the biome; soil and people modify it.',
  ['Drip-tip leaves in the rainforest help plants to:', ['shed heavy rain quickly', 'store water for drought', 'survive frost', 'attract animals'], 'Water runs off and fungi cannot grow.'],
  [['Biome', 'A large ecosystem defined by its climate and vegetation.'], ['Xerophyte', 'A plant adapted to drought.'], ['Permafrost', 'Ground that stays frozen for at least two years.']],
  [
    { q: 'Explain how savanna vegetation is adapted to the dry season.', steps: ['Roots: **deep or wide roots reach water.**', 'Leaves: **trees shed leaves or have small, waxy leaves to cut transpiration.**', 'Bark: **thick bark resists fire.**', 'Grass: **dies back above ground and regrows from roots when the rains return.**'] },
  ]),

  // ---------- 16. Population theory ----------
  L('agg-population-1', 'agg-l6-population', '16.1', 'Measuring population change and the demographic transition', 18, ['Human'], [
    'Measures: the **crude birth rate** and **crude death rate** (per thousand per year), **natural increase** (birth rate minus death rate), the **total fertility rate** (average children per woman), **infant mortality rate** (deaths under one year per thousand live births), **life expectancy**, and **net migration**. Population change = natural increase + net migration.',
    'The **demographic transition model (DTM)** describes changes as countries develop:\n- **stage 1** (high fluctuating): high birth and death rates; little growth\n- **stage 2** (early expanding): death rates fall with better food, water, sanitation and medicine; birth rates stay high; rapid growth\n- **stage 3** (late expanding): birth rates fall with urbanisation, education of women, contraception and lower child mortality; growth slows\n- **stage 4** (low fluctuating): both low; little growth\n- **stage 5** (declining): birth rates below death rates; population ageing and falling (Japan, parts of Europe).',
    'Cameroon is in **late stage 2 or early stage 3**: death rates have fallen; birth rates remain high but are falling slowly, especially in towns.',
    'Limitations: based on the European experience; ignores migration; assumes development causes falling fertility; timing is far faster in some countries; culture, religion and government policy (China’s former one-child policy) can change the pattern; HIV/AIDS and conflict can raise death rates again.',
  ], 'agg-dtm', 'Death rates fall first, birth rates later: the gap is growth.',
  ['Rapid population growth occurs mainly in DTM stage:', ['2', '1', '4', '5'], 'Death rates fall while birth rates stay high.'],
  [['Total fertility rate', 'The average number of children born per woman.'], ['Infant mortality rate', 'Deaths under one year of age per thousand live births.'], ['Natural increase', 'Birth rate minus death rate.']],
  [
    { q: 'A country has a birth rate of 36‰ and a death rate of 9‰. Find the rate of natural increase as a percentage and comment.', steps: ['Natural increase: **36 − 9 = 27 per thousand.**', 'Percentage: **27 ÷ 10 = 2.7 per cent a year.**', 'Comment: **rapid growth, typical of late stage 2; the population would double in about 26 years (70 ÷ 2.7).**'] },
  ]),

  L('agg-population-2', 'agg-l6-population', '16.2', 'Population and resources: Malthus, Boserup and the optimum', 17, ['Human'], [
    '**Thomas Malthus**, in his *Essay on the Principle of Population* (1798), argued that population tends to grow **geometrically** (1, 2, 4, 8) while food supply grows **arithmetically** (1, 2, 3, 4). When population outruns food, **positive checks** (famine, disease, war) raise deaths, unless **preventive checks** (later marriage, abstinence) lower births. Neo-Malthusians (the Club of Rome’s *Limits to Growth*, 1972) applied the idea to resources and the environment.',
    '**Ester Boserup**, in *The Conditions of Agricultural Growth* (1965), argued the opposite: population pressure **stimulates** innovation. As land becomes scarce, farmers intensify: fallow shortens, then terracing, irrigation, manure and multiple cropping raise output. The densely farmed terraces of the Bamileke and Bamenda highlands, or the Mandara mountains, fit her model.',
    'Evaluation: the Green Revolution and global food output have so far proved Malthus wrong at the world scale, but famines, land degradation and climate change show limits locally; Boserup’s model assumes time, markets and knowledge that poor farmers may lack.',
    'The **optimum population** gives the highest standard of living for the resources and technology available. **Overpopulation** means too many people for those resources (falling living standards); **underpopulation** means too few to develop them fully. All three change with technology and trade.',
  ], 'agg-malthus-boserup', 'Malthus: people outrun food. Boserup: people find ways to grow more.',
  ['Boserup’s theory is best supported by:', ['intensive terraced farming in densely settled highlands', 'famines in war zones', 'empty frontier land', 'falling crop yields after deforestation'], 'Pressure led to innovation.'],
  [['Positive check', 'In Malthus’s theory, a rise in deaths through famine, disease or war.'], ['Optimum population', 'The population giving the highest living standard with given resources.'], ['Intensification', 'Raising output per unit of land with more labour or capital.']],
  [
    { q: '"Malthus has been proved wrong." Discuss.', steps: ['For: **world food output has grown faster than population since 1960 through technology and trade.**', 'Against: **hunger persists in parts of Africa and Asia; soils and water are being depleted.**', 'Boserup: **innovation follows pressure, but only where farmers have resources.**', 'Judgement: **wrong at the global scale so far, but his warning about limits remains relevant locally.**'] },
  ]),

  // ---------- 17. Settlement theory ----------
  L('agg-settlement-1', 'agg-l6-settlement', '17.1', 'Site, situation and central place theory', 18, ['Human'], [
    '**Site** is the land a settlement stands on (a dry point, a defensive hill, a bridging point, a spring line); **situation** is its position relative to the surrounding area (routes, resources, other towns). Douala grew on its estuary site with a situation commanding trade with the interior.',
    '**Walter Christaller’s central place theory** (1933) explains the number, size and spacing of settlements that serve a surrounding area. Key ideas:\n- a **central place** provides goods and services to its hinterland\n- the **threshold** is the minimum population needed to support a service\n- the **range** is the maximum distance people will travel for it\n- **low-order** goods (bread, matches) have small thresholds and ranges; **high-order** goods (hospitals, universities) large ones.',
    'Assumptions: an isotropic (uniform) plain, evenly spread population with equal purchasing power, equal transport in all directions, and consumers using the nearest centre. Market areas become **hexagons**, the shape that covers a plain without gaps or overlaps. A **hierarchy** results: few large centres, many small ones.',
    '**K values**: K = 3 (marketing principle: each centre serves the equivalent of three lower-order market areas), K = 4 (transport principle: centres on the main routes), K = 7 (administrative principle: each higher-order area wholly contains six lower-order areas besides its own). Criticisms: uniform plains and equal incomes do not exist; modern transport and online shopping change ranges; but the hierarchy of villages, towns, regional capitals and Yaoundé and Douala in Cameroon broadly fits.',
  ], 'agg-central-place', 'Threshold sets the minimum; range sets the reach; hexagons fill the plain.',
  ['A hospital has a larger threshold than a bakery because it:', ['needs many more customers to be viable', 'is closer to people', 'sells cheaper goods', 'opens more often'], 'High-order service.'],
  [['Threshold', 'The minimum population needed to support a service.'], ['Range', 'The maximum distance people will travel for a good or service.'], ['Hinterland', 'The area served by a central place.']],
  [
    { q: 'Explain why there are many villages but few cities in a settlement hierarchy.', steps: ['Low-order goods: **small thresholds, so many small centres can survive close together.**', 'High-order goods: **large thresholds need big hinterlands.**', 'Result: **only a few centres gather enough customers for high-order services.**', 'Hierarchy: **a pyramid of many villages, fewer towns, very few cities.**'] },
  ]),

  L('agg-settlement-2', 'agg-l6-settlement', '17.2', 'Models of urban structure and African cities', 18, ['Human'], [
    '**Burgess (1925)**, from Chicago: concentric zones around the **CBD**: a zone in transition (old housing, light industry), working-class housing, middle-class housing and a commuter zone. Growth happens by **invasion and succession** as each zone pushes outwards.',
    '**Hoyt (1939)**: land use forms **sectors** along transport routes and from the centre; industry follows railways and rivers, high-class housing follows pleasant, high ground away from industry.',
    '**Harris and Ullman (1945)**: cities grow around **multiple nuclei**: the CBD, an industrial district, a university, an airport, suburbs with their own centres, because some activities attract each other and others repel.',
    'African cities, including **Douala** and **Yaoundé**, differ: a colonial core with the administrative quarter and former European residential areas (Bonanjo, Bonapriso in Douala; the administrative quarter in Yaoundé); dense indigenous quarters; large **informal settlements** on marginal land (flood-prone valleys in Douala, steep slopes in Yaoundé); industrial zones near the port and railway (Bassa, Bonabéri); and rapid, unplanned **peri-urban** growth along main roads. Elements of all three models appear, but colonial planning, informality and rapid growth matter more.',
  ], 'agg-urban-models', 'Rings, sectors, nuclei: each fits part of a real city.',
  ['Hoyt’s model differs from Burgess’s because it shows land use:', ['in sectors along transport routes', 'only in concentric rings', 'without a CBD', 'in rural areas'], 'Growth follows routes.'],
  [['CBD', 'The central business district, the most accessible part of a city.'], ['Invasion and succession', 'The replacement of one group or land use by another as a city grows.'], ['Peri-urban', 'The zone at the edge of a city where urban and rural uses mix.']],
  [
    { q: 'How far does Burgess’s model explain the structure of Douala?', steps: ['Fits: **a central commercial core near the port, with denser older areas around it.**', 'Does not fit: **industry along the port and railway forms sectors; informal settlements occupy valleys and wetlands at all distances.**', 'Other models: **several nuclei, such as Bonabéri and the airport area, act as centres.**', 'Judgement: **Burgess explains little on its own; a mix of Hoyt, multiple nuclei and colonial history fits better.**'] },
  ]),

  // ---------- 18. Clinics ----------
  L('agg-clinics-1', 'agg-l6-papers', '18.1', 'Describing relief and drainage from a map', 17, ['Mapwork'], [
    'A clear **relief description** moves from general to particular:\n- the overall pattern: highest and lowest land, general slope direction, with heights\n- the main landforms: plateau, ridge, escarpment, valley, spur, plain, with grid references\n- the nature of slopes: steep or gentle, convex or concave, evidence from contour spacing\n- the height range: highest spot height minus lowest point.',
    'A **drainage description**: the main river and its direction of flow (from contours and spot heights), tributaries, the drainage pattern and density, features (meanders, waterfalls, marshes, braided channels) and what they suggest about rock and relief.',
    'Common patterns: **dendritic** (uniform rock), **radial** (around a dome or volcano), **trellis** (folded rocks, tributaries at right angles), **rectangular** (joints and faults), **centripetal** (draining into a basin), **parallel** (uniform steep slopes).',
    'Link relief to human use when asked: settlements on dry, gentle land; roads along valleys and contours; farming on gentle slopes and plains; forest on steep land.',
  ], 'agg-drainage-patterns', 'General, then particular; always give heights and grid references.',
  ['A drainage pattern with streams flowing outwards in all directions from a central point indicates:', ['a dome or a volcanic cone', 'folded rocks', 'a rift valley', 'a delta'], 'Radial drainage, as around Mount Cameroon.'],
  [['Spot height', 'A point on a map marked with its exact height.'], ['Escarpment', 'A steep slope bounding a plateau or ridge.'], ['Braided channel', 'A river divided into many channels by deposits.']],
  [
    { q: 'Write a model opening sentence for a relief description.', steps: ['Pattern: **"The land rises from below 200 m in the south-east to over 800 m in the north-west."**', 'Feature: **"A steep escarpment runs north-east to south-west across grid squares 4526 to 4831."**', 'Evidence: **"Closely spaced contours mark its face, and a spot height of 812 m at 452294 marks the summit."**'] },
  ]),

  L('agg-clinics-2', 'agg-l6-papers', '18.2', 'Writing physical geography essays with diagrams', 17, ['Method'], [
    'Plan before writing: decode the command word (explain, assess, compare, discuss), the topic and any place or scale; list the processes and landforms; decide your line of argument.',
    'Structure:\n- **introduction**: define key terms and state the argument\n- **paragraphs**: each makes one point, explains the **process**, shows the **resulting landform or pattern** and gives a **named, located example**\n- **diagrams**: titled, labelled and annotated, referred to in the text ("Figure 1 shows...")\n- **conclusion**: answer the question with a judgement.',
    'Typical faults: describing landforms without explaining processes, unlabelled sketches, no examples, ignoring the "assess" part of the question, and running out of time.',
    'The end-of-year promotion examination covers the whole Lower Sixth: rehearse timed mapwork exercises and two physical essays a week in the revision weeks.',
  ], 'agg-essay-plan', 'Process, form, example, diagram, judgement.',
  ['In a landform essay, each paragraph should link:', ['a process to the landform it produces, with a named example', 'a date to a person', 'two unrelated facts', 'a definition to a poem'], 'The process-form link.'],
  [['Command word', 'The word that says what the question asks you to do.'], ['Annotated diagram', 'A diagram with explanatory notes.']],
  [
    { q: 'Plan an answer to: "Assess the role of rock type in the formation of waterfalls."', steps: ['Argument: **rock type is the main control, but base-level change also forms falls.**', 'Paragraph 1: **hard rock over soft: undercutting, overhang collapse, retreat, gorge (annotated diagram).**', 'Paragraph 2: **rejuvenation: knickpoints form falls regardless of rock type.**', 'Paragraph 3: **faults and resistant intrusions (dykes) create steps.**', 'Conclusion: **rock type explains most falls, but not all; judgement stated.**'] },
  ]),
];
