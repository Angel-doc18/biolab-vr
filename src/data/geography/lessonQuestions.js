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
};
