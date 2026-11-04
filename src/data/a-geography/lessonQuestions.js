// Extra questions for the end of the A Level Geography lessons (0750), so that
// every lesson ends with at least five questions on what it teaches.
//
// Convention: the correct option is written first; options are shuffled when shown.
import { QUESTIONS_U6 } from './lessonQuestionsU6';

const Q = (q, a, why) => ({ q, a, why });

export const LESSON_QUESTIONS = {
  // ---------- Lower Sixth, Term 1 ----------
  'agg-method-1': [
    Q('Paper 1 of A Level Geography is sat on:', ['Saturday 6 June, afternoon', 'Monday 8 June, morning', 'Monday 8 June, afternoon', 'Tuesday 2 June, morning'], 'June 2026 timetable.'),
    Q('Paper 3 lasts:', ['3¾ hours', '1½ hours', '3 hours', '2 hours'], 'The longest paper.'),
    Q('An answer that only describes, however neat, usually:', ['stays in the lower mark levels', 'earns full marks', 'is marked as Paper 1', 'is not marked'], 'Explanation and evaluation are needed.'),
    Q('A diagram in an answer should be:', ['titled, annotated and referred to in the text', 'decorative', 'left unlabelled', 'placed after the conclusion only'], 'It carries explanation.'),
  ],
  'agg-method-2': [
    Q('A closed system exchanges:', ['energy but not matter with its surroundings', 'matter but not energy', 'both energy and matter', 'nothing'], 'The global water cycle.'),
    Q('Negative feedback:', ['restores a system towards balance', 'amplifies change', 'destroys the system', 'stops all flows'], 'Self-regulation.'),
    Q('In a drainage basin, groundwater is a:', ['store', 'input', 'output', 'flow only'], 'Water held in rock.'),
    Q('Contour V-shapes pointing upstream show:', ['a valley', 'a spur', 'a plateau', 'a ridge'], 'Spurs point downhill.'),
  ],
  'agg-mapwork-1': [
    Q('On a 1:50,000 map, 1 cm represents:', ['500 m', '50 m', '5 km', '50 km'], '50,000 cm = 500 m.'),
    Q('A slope of 1 in 4 is:', ['steeper than 1 in 10', 'gentler than 1 in 10', 'flat', 'the same as 1 in 40'], 'Smaller n, steeper slope.'),
    Q('The angle of slope can be found from:', ['tan θ = vertical interval ÷ horizontal distance', 'sin θ = distance ÷ height', 'θ = height × distance', 'cos θ = height'], 'Trigonometry.'),
    Q('A cross-section must show:', ['a title, both scales and the direction of the line', 'only the river names', 'the map’s publisher', 'colours only'], 'Complete presentation.'),
  ],
  'agg-mapwork-2': [
    Q('A watershed is drawn by:', ['following the highest ground and crossing contours at right angles', 'following rivers', 'joining towns', 'tracing roads'], 'It divides basins.'),
    Q('Convex slopes:', ['hide the ground below them from a viewer above', 'always give open views', 'are flat', 'are only found in deserts'], 'The bulge blocks the line of sight.'),
    Q('A lower-order stream joining a higher-order stream:', ['does not raise the order', 'always raises it by one', 'ends the river', 'creates a delta'], 'Strahler’s rule.'),
    Q('A trellis pattern suggests:', ['folded rocks of alternating hardness', 'a volcano', 'a flat plain of uniform rock', 'a coastal delta'], 'Rivers follow soft beds.'),
  ],
  'agg-stats-1': [
    Q('Choosing every tenth house along a street is:', ['systematic sampling', 'random sampling', 'stratified sampling', 'no sampling'], 'Regular interval.'),
    Q('The angle for 25 per cent in a pie chart is:', ['90°', '25°', '45°', '180°'], '0.25 × 360.'),
    Q('The interquartile range ignores:', ['extreme values', 'the median', 'the middle half', 'all data'], 'It measures the middle 50 per cent.'),
    Q('Isohyets join places of equal:', ['rainfall', 'temperature', 'pressure', 'height'], 'Rain isolines.'),
  ],
  'agg-stats-2': [
    Q('In Spearman’s rank, d is:', ['the difference between the two ranks of each item', 'the distance between points', 'the data value', 'the degrees of freedom'], 'Then square it.'),
    Q('Tied values are given:', ['the mean of the ranks they would occupy', 'the same highest rank', 'no rank', 'rank zero'], 'For example, 3.5 and 3.5.'),
    Q('An rs value close to 0 shows:', ['no relationship', 'a perfect positive relationship', 'a perfect negative relationship', 'a significant result'], 'Little or no correlation.'),
    Q('A significance test checks whether a result:', ['could have arisen by chance', 'is spelled correctly', 'is positive', 'uses enough colours'], 'Use tables for n pairs.'),
  ],
  'agg-tectonics-1': [
    Q('Oceanic crust is:', ['thinner and denser than continental crust', 'thicker and lighter', 'made of granite', 'older than all continents'], 'Basaltic.'),
    Q('Magnetic stripes on the ocean floor are evidence of:', ['sea-floor spreading', 'river erosion', 'glaciation', 'coral growth'], 'Reversals recorded either side of ridges.'),
    Q('Continent-continent collision produces:', ['fold mountains with little volcanic activity', 'island arcs', 'mid-ocean ridges', 'hot spots'], 'The Himalayas.'),
    Q('Volcanoes far from plate margins, such as Hawaii, form over:', ['hot spots', 'transform faults', 'trenches', 'rift valleys only'], 'Mantle plumes.'),
  ],
  'agg-tectonics-2': [
    Q('Granite has large crystals because it:', ['cooled slowly underground', 'cooled quickly in air', 'formed from sediment', 'was compressed'], 'Intrusive rock.'),
    Q('Sandstone metamorphoses into:', ['quartzite', 'marble', 'slate', 'basalt'], 'Recrystallised quartz.'),
    Q('Coal is a sedimentary rock of:', ['organic origin', 'volcanic origin', 'chemical origin only', 'metamorphic origin'], 'Compressed plant remains.'),
    Q('Contact metamorphism takes place:', ['next to an igneous intrusion', 'only at the surface', 'in rivers', 'in the atmosphere'], 'Heat from the magma.'),
  ],
  'agg-volcanism-1': [
    Q('Basaltic magma contains about:', ['50 per cent silica', '90 per cent silica', '10 per cent silica', 'no silica'], 'Low silica, runny.'),
    Q('A pyroclastic flow is:', ['a fast, scorching avalanche of gas, ash and rock', 'a slow lava flow', 'a mudflow of ash and water', 'a gas cloud from a lake'], 'The deadliest volcanic hazard.'),
    Q('A lahar is:', ['a volcanic mudflow', 'a lava tube', 'a crater lake', 'a type of ash'], 'Ash mixed with water.'),
    Q('In 1999 lava from Mount Cameroon reached:', ['the coast road near Bakingili', 'Douala', 'Yaoundé', 'Lake Nyos'], 'It cut the road.'),
  ],
  'agg-volcanism-2': [
    Q('A laccolith is:', ['a dome-shaped intrusion that arches the rocks above', 'a vertical sheet', 'a lava plateau', 'a crater'], 'Mushroom-shaped.'),
    Q('The epicentre is:', ['the point on the surface above the focus', 'the deepest point of the earthquake', 'the fault plane', 'the seismograph station'], 'Directly above the focus.'),
    Q('Surface (L) waves:', ['are the slowest but cause most damage', 'are the fastest', 'pass through the core', 'cannot be felt'], 'They travel along the surface.'),
    Q('The Modified Mercalli scale measures:', ['the intensity of shaking and its effects', 'the energy released', 'the depth of the focus', 'wave speed'], 'From I to XII.'),
  ],
  'agg-folding-1': [
    Q('A monocline is:', ['a step-like bend in rock layers', 'a double upfold', 'a fault', 'a volcanic dome'], 'One-sided fold.'),
    Q('A recumbent fold is:', ['a fold pushed over until it lies almost flat', 'an upright anticline', 'a syncline', 'a rift'], 'Strong compression.'),
    Q('Drainage on folded rocks often forms a:', ['trellis pattern', 'radial pattern', 'centripetal pattern', 'dendritic pattern'], 'Rivers follow soft beds.'),
    Q('The Alps contain many:', ['nappes', 'calderas', 'deltas', 'inselbergs'], 'Thrust overfolds.'),
  ],
  'agg-folding-2': [
    Q('A tear (strike-slip) fault involves:', ['horizontal movement of blocks', 'vertical movement only', 'folding', 'no movement'], 'The San Andreas Fault.'),
    Q('A tilt block has:', ['a steep scarp on one side and a gentle back slope', 'two equal slopes', 'no faults', 'a crater'], 'Tilted along one fault.'),
    Q('The Benue trough in northern Cameroon is:', ['a faulted depression filled with sediments', 'a volcanic cone', 'a fold mountain', 'a glacial valley'], 'Linked to the opening of the South Atlantic.'),
    Q('A thrust fault is:', ['a low-angle reverse fault', 'a normal fault', 'a tear fault', 'a joint'], 'Caused by compression.'),
  ],
  'agg-weathering-1': [
    Q('Scree is produced mainly by:', ['freeze-thaw on steep rock faces', 'chemical weathering in rainforests', 'deposition by rivers', 'wind in deserts'], 'Angular fragments.'),
    Q('Salt crystallisation is common in:', ['deserts and on coasts', 'rainforests', 'tundra lakes', 'glaciers'], 'Growing crystals split rock.'),
    Q('Roots widening cracks in rock is an example of:', ['biological weathering', 'chemical weathering only', 'erosion', 'deposition'], 'Living things at work.'),
    Q('Rocks with many joints weather:', ['faster, because water and roots get in', 'slower', 'not at all', 'only at night'], 'Joints are lines of weakness.'),
  ],
  'agg-weathering-2': [
    Q('Hydration is:', ['minerals absorbing water and swelling', 'minerals dissolving in acid', 'iron reacting with oxygen', 'rock freezing'], 'Anhydrite to gypsum.'),
    Q('Chemical reaction rates roughly double for each rise in temperature of:', ['10 °C', '1 °C', '50 °C', '100 °C'], 'Hence fast weathering in the tropics.'),
    Q('Quartzite resists weathering because:', ['quartz is hard and chemically stable', 'it is soft', 'it dissolves easily', 'it contains salt'], 'Very resistant rock.'),
    Q('A tor is:', ['an outcrop of resistant jointed rock left after the regolith is removed', 'a river cliff', 'a delta', 'a volcano'], 'Exposed corestones.'),
  ],
  'agg-slopes-1': [
    Q('Shear strength comes from:', ['friction, cohesion, roots and cementation', 'gravity alone', 'rainfall', 'slope angle'], 'Resistance to movement.'),
    Q('An earthquake can trigger a landslide by:', ['shaking and suddenly increasing shear stress', 'drying the soil', 'adding roots', 'lowering slopes'], 'A common trigger in mountains.'),
    Q('A clay layer beneath permeable rock can act as:', ['a slip plane', 'a root mat', 'an aquifer', 'a terrace'], 'Water collects on it.'),
    Q('The angle of repose of dry sand is about:', ['30 to 35°', '5°', '60°', '90°'], 'Steeper angles collapse.'),
  ],
  'agg-slopes-2': [
    Q('Terracettes on a hillside are evidence of:', ['soil creep and grazing', 'rockfall', 'mudflow', 'volcanic activity'], 'Small steps on slopes.'),
    Q('Gabions are:', ['wire cages filled with stones used to support slopes and banks', 'drainage pipes', 'trees', 'warning sirens'], 'Engineering structures.'),
    Q('Draining a slope helps because it:', ['lowers pore water pressure', 'adds weight', 'removes roots', 'steepens the slope'], 'Raises shear strength.'),
    Q('Poor households often settle on steep slopes at the edge of towns because:', ['the land is cheap or unclaimed', 'the soil is always stable', 'the views are good', 'there are no rules anywhere'], 'Hence planning matters.'),
  ],

  // ---------- Lower Sixth, Term 2 ----------
  'agg-hydrology-1': [
    Q('Percolation is:', ['water moving from soil into the rock below', 'water moving over the surface', 'rain caught by leaves', 'evaporation from lakes'], 'Recharge of groundwater.'),
    Q('Saturation-excess overland flow happens when:', ['the soil is already full of water', 'rain is very light', 'the ground is frozen only', 'the river is dry'], 'No more space for water.'),
    Q('The falling limb of a hydrograph shows:', ['discharge returning towards base flow', 'rising discharge', 'rainfall', 'the lag time'], 'Also called the recession limb.'),
    Q('Forest cover usually:', ['lengthens lag time and lowers the peak', 'shortens lag time', 'raises the peak', 'has no effect'], 'Interception and infiltration.'),
  ],
  'agg-hydrology-2': [
    Q('Hydraulic action is:', ['the force of water breaking rock, including compressed air in cracks', 'chemical solution', 'grinding by the load', 'particles hitting each other'], 'Mechanical force of water.'),
    Q('Traction moves:', ['large boulders rolled along the bed', 'dissolved minerals', 'fine silt', 'floating leaves'], 'The heaviest load.'),
    Q('A river deposits its load mainly when:', ['its velocity falls', 'its discharge rises', 'it floods its upper course', 'it meets rapids'], 'Less energy.'),
    Q('Vertical erosion dominates in the:', ['upper course', 'lower course', 'delta', 'estuary'], 'Steep gradient, deep valleys.'),
  ],
  'agg-channels-1': [
    Q('A V-shaped valley is typical of the:', ['upper course', 'floodplain', 'delta', 'estuary'], 'Vertical erosion with weathering of the sides.'),
    Q('An entrenched meander is:', ['symmetrical and cut by rapid downcutting', 'a meander on a floodplain', 'an ox-bow lake', 'a delta channel'], 'Incised meander type.'),
    Q('A gorge forms when:', ['a waterfall retreats upstream', 'a delta grows', 'a river freezes', 'sea level rises'], 'Undercutting and collapse.'),
    Q('The base level of rivers in the Chad basin is:', ['Lake Chad', 'the Atlantic', 'the Mediterranean', 'the Congo'], 'An inland basin.'),
  ],
  'agg-channels-2': [
    Q('The slip-off slope of a meander is on the:', ['inner bank', 'outer bank', 'river bed', 'levée'], 'Deposition where water is slow.'),
    Q('Helicoidal flow is:', ['a corkscrew flow carrying sediment from the outer to the inner bank', 'a straight flow', 'a tidal flow', 'a flood wave'], 'In meanders.'),
    Q('A cuspate delta is shaped by:', ['strong waves from two directions', 'weak waves', 'tides only', 'wind'], 'The Tiber.'),
    Q('Backswamps on a floodplain are:', ['low, wet areas of fine silt and clay behind the levées', 'high gravel ridges', 'river cliffs', 'waterfalls'], 'Poorly drained.'),
  ],
  'agg-atmosphere-1': [
    Q('Nitrogen makes up about what share of the atmosphere?', ['78 per cent', '21 per cent', '1 per cent', '50 per cent'], 'Oxygen about 21 per cent.'),
    Q('The troposphere is thickest over the:', ['equator', 'poles', 'oceans only', 'mountains only'], 'About 16 km.'),
    Q('The coldest layer of the atmosphere is the top of the:', ['mesosphere', 'troposphere', 'stratosphere', 'thermosphere'], 'Below about −80 °C.'),
    Q('The troposphere is heated mainly:', ['from below, by the ground', 'from above, by the Sun directly', 'by the ozone layer', 'by the core'], 'Hence cooling with height.'),
  ],
  'agg-atmosphere-2': [
    Q('The planetary albedo of the Earth is about:', ['30 per cent', '5 per cent', '70 per cent', '95 per cent'], 'Reflected by clouds, air and surface.'),
    Q('Latent heat is released when:', ['water vapour condenses', 'ice melts', 'water evaporates', 'air sinks'], 'It powers storms.'),
    Q('Continentality causes:', ['large temperature ranges far from the sea', 'constant temperatures', 'more rain on coasts', 'colder coasts'], 'Land heats and cools quickly.'),
    Q('The enhanced greenhouse effect is caused mainly by:', ['extra greenhouse gases from human activities', 'more ozone', 'a cooler Sun', 'volcanic ash only'], 'Burning fuels and clearing forests.'),
  ],
  'agg-circulation-1': [
    Q('Mean sea-level pressure is about:', ['1,013 mb', '500 mb', '2,000 mb', '100 mb'], 'Millibars or hectopascals.'),
    Q('Closely spaced isobars indicate:', ['strong winds', 'calm conditions', 'high temperatures', 'rain'], 'A steep pressure gradient.'),
    Q('In the northern hemisphere, winds blow around a low:', ['anticlockwise and inwards', 'clockwise and outwards', 'straight into the centre', 'not at all'], 'The reverse in the south.'),
    Q('Friction is greatest:', ['near the ground', 'at the tropopause', 'in the stratosphere', 'over the open sea only'], 'It slows surface winds.'),
  ],
  'agg-circulation-2': [
    Q('The Ferrel cell lies between about:', ['30° and 60°', '0° and 30°', '60° and 90°', '10° and 20°'], 'An indirect cell.'),
    Q('The polar front lies near:', ['60°', '30°', 'the equator', 'the poles'], 'Where polar easterlies meet westerlies.'),
    Q('The pressure belts shift north in July because:', ['the overhead sun moves north', 'the Earth spins faster', 'the poles warm', 'the oceans freeze'], 'Seasonal migration.'),
    Q('In the northern winter, northern Cameroon is covered by:', ['the Harmattan', 'the monsoon', 'polar air', 'a tropical cyclone'], 'Dry Saharan air.'),
  ],
  'agg-airmass-1': [
    Q('A maritime polar (mP) air mass is:', ['cool and moist', 'hot and dry', 'warm and moist', 'freezing and dry'], 'Formed over cold oceans.'),
    Q('At a warm front:', ['warm air rises gently over cold air, giving steady rain', 'cold air undercuts warm air steeply', 'skies are always clear', 'thunderstorms are certain'], 'Layered clouds.'),
    Q('After a cold front passes, temperatures usually:', ['fall', 'rise', 'stay the same', 'become tropical'], 'Colder air arrives.'),
    Q('Frontogenesis is:', ['the formation or strengthening of a front', 'the end of a front', 'a type of cloud', 'a sea breeze'], 'Opposite of frontolysis.'),
  ],
  'agg-airmass-2': [
    Q('Mid-latitude depressions are steered mainly by the:', ['polar front jet stream', 'trade winds', 'Harmattan', 'monsoon'], 'They move eastwards.'),
    Q('The deadliest effect of tropical cyclones on coasts is often the:', ['storm surge', 'cloud cover', 'cool air', 'dust'], 'Sea flooding.'),
    Q('Hurricane-force winds exceed about:', ['119 km/h', '20 km/h', '50 km/h', '500 km/h'], 'The tropical cyclone threshold.'),
    Q('West African storms are mainly:', ['squall lines and thunderstorms', 'tropical cyclones', 'blizzards', 'tornadoes every day'], 'Cyclones are almost unknown in the Gulf of Guinea.'),
  ],
  'agg-soils-1': [
    Q('Eluviation is:', ['the washing out of material from an upper horizon', 'the accumulation of material', 'the formation of humus', 'the freezing of soil'], 'Mainly in the A horizon.'),
    Q('A catena is:', ['a sequence of soils down a slope', 'a soil horizon', 'a type of rock', 'a farming system'], 'Relief controls the soils.'),
    Q('Grey and blue colours in a soil usually indicate:', ['waterlogging (gleying)', 'high humus', 'iron oxidation', 'salt'], 'Lack of oxygen.'),
    Q('Salinisation happens when:', ['evaporation draws salts up to the surface', 'heavy rain leaches salts', 'roots add salt', 'frost acts'], 'In dry, irrigated land.'),
  ],
  'agg-soils-2': [
    Q('An iron pan in a podzol:', ['can block drainage and roots', 'improves fertility', 'is found in deserts', 'is volcanic'], 'Hard layer in the B horizon.'),
    Q('Chernozems form under:', ['temperate grasslands', 'tropical rainforest', 'coniferous forest', 'tundra'], 'Deep, dark, fertile.'),
    Q('Andosols form on:', ['volcanic ash', 'limestone', 'coral', 'sand dunes'], 'Fertile young soils.'),
    Q('In ferrallitisation, silica is:', ['leached away', 'concentrated', 'turned into iron', 'unchanged'], 'Iron and aluminium remain.'),
  ],
  'agg-biomes-1': [
    Q('Herbivores are:', ['primary consumers', 'producers', 'decomposers', 'tertiary consumers'], 'They eat plants.'),
    Q('Net primary productivity is highest in:', ['tropical rainforests and estuaries', 'deserts', 'tundra', 'open ocean'], 'Warm, wet, well-lit.'),
    Q('Denitrifying bacteria:', ['return nitrogen to the atmosphere', 'fix nitrogen', 'make carbon dioxide only', 'photosynthesise'], 'Part of the nitrogen cycle.'),
    Q('The Gersmehl model shows nutrient stores in:', ['biomass, litter and soil', 'rocks, rivers and seas', 'air only', 'animals only'], 'With flows between them.'),
  ],
  'agg-biomes-2': [
    Q('Buttress roots support:', ['tall rainforest trees on shallow soils', 'cacti', 'tundra mosses', 'grasses'], 'Wide bases.'),
    Q('The baobab is a typical tree of the:', ['savanna', 'tundra', 'temperate forest', 'mangrove'], 'Stores water in its trunk.'),
    Q('Permafrost is:', ['ground that stays frozen for at least two years', 'snow on mountains', 'frozen lakes only', 'summer ice'], 'Typical of the tundra.'),
    Q('Brown earth soils are typical of:', ['temperate deciduous forest', 'hot desert', 'rainforest', 'tundra'], 'Moderately leached, fertile.'),
  ],

  // ---------- Lower Sixth, Term 3 ----------
  'agg-population-1': [
    Q('The total fertility rate is:', ['the average number of children born per woman', 'births per thousand people', 'deaths of infants', 'the number of women'], 'A key fertility measure.'),
    Q('A natural increase of 2 per cent a year doubles a population in about:', ['35 years', '2 years', '200 years', '10 years'], 'Rule of 70: 70 ÷ 2.'),
    Q('In stage 5 of the DTM:', ['the death rate exceeds the birth rate and population falls', 'growth is fastest', 'birth rates are highest', 'death rates are highest'], 'Ageing populations.'),
    Q('Cameroon is best placed in DTM stage:', ['late 2 or early 3', '1', '4', '5'], 'Death rates fell; birth rates falling slowly.'),
  ],
  'agg-population-2': [
    Q('Malthus’s preventive checks:', ['lower births, for example through later marriage', 'raise deaths through famine', 'increase food supply', 'encourage migration'], 'Moral restraint.'),
    Q('Neo-Malthusians include the authors of:', ['Limits to Growth (1972)', 'The Isolated State', 'The Wealth of Nations', 'The Origin of Species'], 'The Club of Rome.'),
    Q('Underpopulation means:', ['too few people to use resources fully', 'too many people', 'a high density', 'many children'], 'Resources under-used.'),
    Q('The Green Revolution raised food output through:', ['high-yielding seeds, fertiliser and irrigation', 'shifting cultivation', 'fewer farmers', 'abandoning land'], 'Since the 1960s.'),
  ],
  'agg-settlement-1': [
    Q('The site of a settlement is:', ['the land on which it stands', 'its position relative to surrounding places', 'its population', 'its function'], 'Situation is the wider position.'),
    Q('Low-order goods have:', ['small thresholds and small ranges', 'large thresholds', 'large ranges', 'no customers'], 'Bread, matches.'),
    Q('K = 4 is Christaller’s:', ['transport principle', 'marketing principle', 'administrative principle', 'agricultural principle'], 'Centres along main routes.'),
    Q('An isotropic plain is:', ['uniform in all directions', 'mountainous', 'covered in rivers', 'coastal'], 'A model assumption.'),
  ],
  'agg-settlement-2': [
    Q('The zone in transition in Burgess’s model lies:', ['around the CBD', 'at the edge of the city', 'in the commuter zone', 'outside the city'], 'Old housing and light industry.'),
    Q('In Hoyt’s model, high-class housing follows:', ['pleasant high ground away from industry', 'the railway', 'the river port', 'the CBD only'], 'Sectors.'),
    Q('Bonanjo in Douala is an example of:', ['a colonial administrative and business quarter', 'a rural village', 'an industrial free zone', 'a mangrove'], 'Near the old port.'),
    Q('Invasion and succession describe:', ['the replacement of one land use or group by another', 'the arrival of an army', 'river flooding', 'a model of farming'], 'Burgess’s mechanism.'),
  ],
  'agg-clinics-1': [
    Q('The height range of an area is:', ['the highest point minus the lowest point', 'the average height', 'the contour interval', 'the number of hills'], 'Quote both heights.'),
    Q('A centripetal drainage pattern drains:', ['into a central basin', 'outwards from a dome', 'in parallel lines', 'in a grid'], 'Inland basins.'),
    Q('The direction of river flow can be found from:', ['contours and spot heights', 'the map title', 'the key only', 'road numbers'], 'Water flows downhill.'),
    Q('Roads following contours indicate:', ['an attempt to avoid steep gradients', 'flat land everywhere', 'a river', 'a railway'], 'Relief controls routes.'),
  ],
  'agg-clinics-2': [
    Q('An introduction to a physical essay should:', ['define key terms and state the argument', 'tell a story', 'give the conclusion only', 'list every fact'], 'Set out the plan.'),
    Q('"Assess" requires you to:', ['weigh factors and reach a judgement', 'list facts', 'draw only', 'define only'], 'Judgement.'),
    Q('A named, located example:', ['strengthens a paragraph', 'is irrelevant', 'loses marks', 'should be avoided'], 'Evidence.'),
    Q('In the revision weeks, students should practise:', ['timed mapwork and essays', 'only reading', 'only new topics', 'nothing'], 'Before the promotion exam.'),
  ],

  ...QUESTIONS_U6,
};
