// Virtual Paper 3 practicals. Each lab models a control (panel A) against a
// treatment (panel B); readings are simulated from standard textbook behaviour.
import { createElement as h } from 'react';
import { ElodeaTube, OsmosisCell, Potometer, SpottingTile, TestTube, mixHex } from '../../ui/labArt';
import { DiagramView } from '../../diagrams/Diagram';
import { APPARATUS_BIO } from '../../diagrams/apparatusBio';
import { fitLine } from '../../ui/Graph';

// A reading with the small random scatter real measurements have.
const jitter = (v, sd) => v + sd * (Math.random() + Math.random() + Math.random() - 1.5);
const live = (key, state, maxHeight = 220) => h(DiagramView, { spec: APPARATUS_BIO[key], labels: false, state, maxHeight });

const clamp = (v, a, b) => Math.min(b, Math.max(a, v));
const round1 = (x) => Math.round(x * 10) / 10;

export const STEPS = {
  en: ['Prepare the specimen', 'Set up the control', 'Apply the treatment', 'Leave it to act', 'Observe and compare', 'Record in the workbook'],
  fr: ['Préparer le spécimen', 'Préparer le témoin', 'Appliquer le traitement', 'Laisser agir', 'Observer et comparer', 'Noter dans le cahier'],
};

// ---------- osmosis ----------
const CONC = [0, 0.2, 0.5, 1.0];
const P_EQ = [0, 0.06, 0.62, 1];
const osmosisP = (r, t) => P_EQ[r] * (1 - Math.exp(-t / 8));
function osmosisPanel(r, t, head) {
  const p = osmosisP(r, t);
  const state = p < 0.05 ? 'turgid' : p < 0.2 ? 'flaccid' : 'plasmolysed';
  return {
    head,
    dot: state === 'turgid' ? 'secondary' : state === 'flaccid' ? 'tertiary' : 'error',
    view: h(OsmosisCell, { p }),
    p,
    metrics: [
      ['Turgor pressure', state === 'turgid' ? 'High (turgid)' : state === 'flaccid' ? 'Low (flaccid)' : 'Zero (plasmolysed)', state === 'turgid' ? 'secondary' : state === 'flaccid' ? 'tertiary-container' : 'error'],
      ['Protoplast state', state === 'turgid' ? 'Fully expanded' : state === 'flaccid' ? 'Pulling from corners' : 'Detached from wall', state === 'turgid' ? 'on-surface' : 'error'],
      ['Protoplast length', `${round1(50 * (1 - 0.24 * p))} e.u.`, 'primary-container'],
    ],
    state,
  };
}

// ---------- food tests ----------
const BENEDICT = [['#2563eb', 'Blue'], ['#16a34a', 'Green'], ['#eab308', 'Yellow'], ['#ea580c', 'Orange'], ['#b91c1c', 'Brick-red']];
const FOOD = [
  { reagent: 'Iodine solution', control: ['#b45309', 'Yellow-brown'], test: () => ['#1e1b4b', 'Blue-black'], nutrient: 'starch', heat: false },
  { reagent: 'Benedict’s solution', control: ['#2563eb', 'Blue'], test: (t) => BENEDICT[clamp(Math.floor(t), 0, 4)], nutrient: 'reducing sugar', heat: true },
  { reagent: 'Biuret reagent', control: ['#3b82f6', 'Blue'], test: () => ['#7e22ce', 'Purple (violet)'], nutrient: 'protein', heat: false },
  { reagent: 'Ethanol, then water', control: ['#e0f2fe', 'Clear'], test: () => ['#f8fafc', 'Cloudy white emulsion'], nutrient: 'fat', heat: false },
];

// ---------- enzyme ----------
const ENZ_K = [0.12, 0.3, 0];


// ---------- transpiration ----------
const TRANS = [
  { name: 'Still air (control)', rate: 3 },
  { name: 'Moving air (fan)', rate: 7 },
  { name: 'Humid (plastic bag)', rate: 1 },
  { name: 'Darkness', rate: 0.6 },
];

// ---------- photosynthesis: bubbles per minute rise with light, then level off ----------
const photoRate = (d) => {
  const light = 1000 / (d * d);
  return (45 * light) / (light + 6);
};

// ---------- catalase: rate constant against temperature (denatured above about 45 °C) ----------
const CAT_T = [20, 30, 40, 50, 60];
const catalaseK = (T) => 0.035 * Math.exp(-(((T - 38) / (T > 38 ? 9 : 16)) ** 2));

// ---------- quadrats: plants per square metre follow a Poisson distribution ----------
function poisson(mean) {
  const limit = Math.exp(-mean);
  let k = 0;
  let p = 1;
  do {
    k += 1;
    p *= Math.random();
  } while (p > limit);
  return k - 1;
}

// ---------- germination ----------
function germPanel(r, t, head) {
  const count = r === 0 ? Math.max(0, Math.min(10, Math.round(10 * (1 - Math.exp(-(t - 1.5) / 1.2))))) : r === 3 ? (t >= 6 ? 1 : 0) : 0;
  const grown = r === 0 ? Math.max(0, (t - 1.5) * 4) : r === 3 && t >= 6 ? 1 : 0;
  return {
    head,
    count,
    view: live('seed-tube', { kind: r, grown, count }, 140),
    metrics: [
      ['Seeds germinated', `${count} of 10`, count ? 'secondary' : 'error'],
      ['Longest root', grown ? `${grown.toFixed(0)} mm` : 'None', 'on-surface'],
    ],
  };
}

// ---------- hydrogencarbonate indicator: red at air level, yellow with more CO2, purple with less ----------
const RED = '#d94a4a';
const YELLOW = '#e3c23a';
const PURPLE = '#7a3fa0';
function indicatorPanel(r, t, head) {
  const speed = [1.5, 1, 2][r] || 0;
  const p = r < 0 ? 0 : Math.min(1, t / speed);
  const target = r === 2 ? PURPLE : YELLOW;
  const colour = mixHex(RED, target, p);
  const name = p < 0.35 ? 'Red' : r === 2 ? (p < 0.8 ? 'Red-purple' : 'Purple') : p < 0.8 ? 'Orange' : 'Yellow';
  return {
    head,
    name,
    view: live('indicator-tube', { colour, kind: r }, 140),
    metrics: [
      ['Indicator colour', name, 'on-surface'],
      ['Carbon dioxide', p < 0.35 ? 'Same as in air' : r === 2 ? 'Less than in air' : 'More than in air', p < 0.35 ? 'on-surface' : 'secondary'],
    ],
  };
}

export const LABS = [
  {
    id: 'osmosis',
    unit: 'cell',
    units: ['hb-cells'],
    subjects: ['humanbio'],
    short: 'Osmosis & plasmolysis',
    title: 'Osmosis, turgidity & plasmolysis',
    desc: 'Mount red onion epidermis in distilled water and in sucrose solutions from 0.2 M to 1.0 M, and watch the protoplast pull away from the cell wall.',
    objective: 'Examine red onion epidermal cells in distilled water compared with sucrose solutions of increasing concentration.',
    diagram: 'osmosis',
    method: [
      'Peel a thin strip of epidermis from the inside of a red onion scale leaf with forceps, and cut it into squares about 5 mm across.',
      'Put one square in distilled water and the others in 0.2, 0.5 and 1.0 mol/dm³ sucrose solution, in labelled dishes, for 30 minutes.',
      'Mount each square in a drop of its own solution on a slide and lower a coverslip at an angle so no air bubbles are trapped.',
      'Look at it under low power, then high power.',
      'Count how many cells in the field of view are plasmolysed, and draw one cell from each solution with ruled label lines.',
    ],
    magnify: '×400',
    optionsLabel: 'Solution',
    icon: 'water_drop',
    minutes: 15,
    level: 'Medium',
    options: ['0.0M Distilled', '0.2M Sucrose', '0.5M Sucrose', '1.0M Hypertonic'],
    control: 0,
    def: 3,
    slider: { label: 'Incubation duration', min: 0, max: 30, def: 15, unit: 'mins elapsed', marks: ['0 min (Start)', '15 min', '30 min (Severe)'] },
    model(r, t) {
      return { A: osmosisPanel(0, t, 'Control (0.0M)'), B: osmosisPanel(r, t, `${['0.0M Water', '0.2M Sucrose', '0.5M Sucrose', '1.0M Sucrose'][r]}`) };
    },
    tip: [
      ['Examiners penalise candidates who write that the ', null],
      ['“cell wall shrinks”', 'error'],
      ['. The cellulose wall stays fixed; only the ', null],
      ['protoplast', 'secondary'],
      [' shrinks inward as water leaves the vacuole by osmosis.', null],
    ],
    plate: { title: 'Plant cell plasmolysis series', sub: 'Turgid, flaccid, plasmolysed' },
    record(r, t) {
      const m = this.model(r, t).B;
      return {
        title: `Onion epidermis in ${CONC[r].toFixed(1)} M sucrose, ${t} min`,
        observation: `After ${t} minutes in ${CONC[r].toFixed(1)} M sucrose the cells were ${m.state}. Protoplast length about ${m.metrics[2][1]} (50 e.u. at the start).`,
        conclusion:
          m.state === 'plasmolysed'
            ? 'The solution had a lower water potential than the cell sap, so water left the vacuole by osmosis and the protoplast pulled away from the cell wall.'
            : m.state === 'flaccid'
            ? 'The solution was close to the water potential of the cell sap, so there was little net movement of water and the cells lost turgor.'
            : 'The water potential outside was higher than inside, so water entered by osmosis and the cells stayed turgid.',
        result: m.state,
      };
    },
  },
  {
    id: 'food',
    unit: 'nutrition',
    units: ['bi-f3-diet', 'hb-nutrition'],
    subjects: ['humanbio'],
    short: 'Food tests',
    title: 'Food tests: starch, reducing sugar, protein & fat',
    desc: 'Test a food suspension against a water control using iodine, Benedict’s, Biuret and the ethanol emulsion test.',
    objective: 'Identify the nutrients in a food sample by comparing each reagent with a water control.',
    diagram: 'food-test-apparatus',
    method: [
      'Grind the food with a little distilled water and pour off the liquid to make a food solution.',
      'Starch: add a few drops of iodine solution to 2 cm³ of the food solution.',
      'Reducing sugar: add an equal volume of Benedict’s solution and heat in a boiling water bath for 5 minutes.',
      'Protein: add an equal volume of Biuret reagent and shake gently.',
      'Fat: shake a little food with 2 cm³ of ethanol, then pour the ethanol into a test tube of water.',
      'Do every test on distilled water as well, as a control, and record all the colours.',
    ],
    icon: 'science',
    minutes: 20,
    level: 'Easy',
    options: ['Iodine', 'Benedict’s', 'Biuret', 'Emulsion'],
    control: null,
    def: 1,
    slider: { label: 'Water bath heating time', min: 0, max: 5, def: 3, unit: 'min', marks: ['0 min (cold)', '2 min', '5 min (boiling)'] },
    model(r, t) {
      const f = FOOD[r];
      const test = f.heat ? f.test(t) : f.test();
      const positive = !f.heat || t >= 1;
      return {
        A: {
          head: 'Control (water)',
          dot: 'secondary',
          view: h(TestTube, { color: f.control[0] }),
          metrics: [
            ['Contents', `Water + ${f.reagent}`, 'on-surface'],
            ['Colour', f.control[1], 'secondary'],
          ],
        },
        B: {
          head: 'Food sample',
          dot: positive ? 'error' : 'tertiary',
          view: h(TestTube, { color: r === 3 ? '#e0f2fe' : test[0], precipitate: f.heat && t >= 3 ? test[0] : null, layer: r === 3 ? '#ffffff' : null }),
          metrics: [
            ['Contents', `Food + ${f.reagent}`, 'on-surface'],
            ['Colour', f.heat && t < 1 ? 'Blue (heat it)' : test[1], positive ? 'secondary' : 'error'],
          ],
        },
        positive,
        test,
      };
    },
    tip: [
      ['Always state the colour ', null],
      ['before and after', 'secondary'],
      [' (for example blue to brick-red). Benedict’s must be ', null],
      ['heated in a water bath', 'secondary'],
      ['; a final colour alone earns no mark.', null],
    ],
    plate: { title: 'Food test colour chart', sub: 'Iodine, Benedict’s, Biuret, emulsion' },
    record(r, t) {
      const f = FOOD[r];
      const m = this.model(r, t);
      return {
        title: `${f.reagent} test`,
        observation: `Control stayed ${f.control[1].toLowerCase()}. Food sample turned ${m.B.metrics[1][1].toLowerCase()}.`,
        conclusion: m.positive ? `The food contains ${f.nutrient}.` : `No result yet: ${f.reagent} must be heated to show ${f.nutrient}.`,
        result: m.positive ? `${f.nutrient} present` : 'not heated',
      };
    },
  },
  {
    id: 'enzyme',
    unit: 'nutrition',
    units: ['hb-nutrition'],
    subjects: ['humanbio'],
    short: 'Enzyme and temperature',
    title: 'Enzyme activity: amylase and temperature',
    desc: 'Mix starch with amylase at 10 °C, 37 °C and 70 °C and test a drop with iodine every minute until the starch has gone.',
    objective: 'Find how temperature affects the time amylase takes to digest starch.',
    diagram: 'spotting-apparatus',
    method: [
      'Put a drop of iodine solution in each well of a spotting tile.',
      'Warm separate tubes of 5 cm³ starch solution and 2 cm³ amylase solution in a water bath at the test temperature for 5 minutes.',
      'Mix the amylase with the starch and start the stopwatch.',
      'Every minute, take one drop of the mixture with a dropping pipette and add it to the next well of iodine.',
      'Stop when the iodine stays yellow-brown: all the starch has been digested. Record the time.',
      'Repeat at the other temperatures and compare the times.',
    ],
    icon: 'thermostat',
    minutes: 18,
    level: 'Medium',
    options: ['10 °C', '37 °C', '70 °C'],
    control: null,
    def: 1,
    slider: { label: 'Sampling time', min: 1, max: 9, def: 5, unit: 'min', marks: ['1 min', '5 min', '9 min'] },
    model(r, t) {
      const k = ENZ_K[r];
      const wells = Array.from({ length: 9 }, (_, i) => (i < t ? Math.max(0, 1 - k * (i + 1)) : null));
      const end = k ? Math.ceil(1 / k) : null;
      return {
        A: {
          head: 'Control (boiled amylase)',
          dot: 'secondary',
          view: h(SpottingTile, { fractions: Array.from({ length: 9 }, (_, i) => (i < t ? 1 : null)) }),
          metrics: [
            ['Iodine', 'Blue-black every minute', 'secondary'],
            ['Starch', 'Not digested', 'on-surface'],
          ],
        },
        B: {
          head: `Amylase at ${this.options[r]}`,
          dot: r === 2 ? 'error' : 'tertiary',
          view: h(SpottingTile, { fractions: wells }),
          metrics: [
            ['End-point', end ? (t >= end ? `${end} min` : `after ${end} min`) : 'Never', end ? 'secondary' : 'error'],
            ['Rate (1/time)', end ? `${(1 / end).toFixed(2)} per min` : '0', end ? 'primary-container' : 'error'],
          ],
        },
        end,
      };
    },
    tip: [
      ['Above the optimum say the enzyme is ', null],
      ['denatured: its active site changes shape', 'secondary'],
      ['. Never write that the enzyme was ', null],
      ['“killed”', 'error'],
      ['.', null],
    ],
    plate: { title: 'Spotting tile end-point', sub: 'Iodine stays yellow-brown when starch is gone' },
    record(r, t) {
      const m = this.model(r, t);
      return {
        title: `Amylase at ${this.options[r]}`,
        observation: m.end ? `Iodine stopped turning blue-black after ${m.end} minutes.` : 'Iodine turned blue-black at every sample.',
        conclusion:
          r === 2
            ? 'At 70 °C amylase is denatured, so starch is not digested.'
            : r === 1
            ? 'Amylase works fastest near body temperature (its optimum).'
            : 'At low temperature molecules move slowly, so digestion is slow but the enzyme is not destroyed.',
        result: m.end ? `end-point ${m.end} min` : 'no digestion',
      };
    },
  },
  {
    id: 'transpiration',
    unit: 'bi-f4-plants',
    short: 'Transpiration',
    title: 'Transpiration: bubble potometer',
    desc: 'Measure how far an air bubble moves along a potometer in still air, moving air, humid air and darkness.',
    objective: 'Compare the rate of water uptake by a leafy shoot in different conditions.',
    diagram: 'potometer-apparatus',
    method: [
      'Cut a leafy shoot under water so that no air enters the xylem, and fit it into the potometer under water.',
      'Seal the joint with petroleum jelly so the apparatus is airtight, and dry the leaves.',
      'Let an air bubble into the end of the capillary tube.',
      'Measure how far the bubble moves along the scale in 5 minutes. Reset it with water from the reservoir.',
      'Repeat in moving air from a fan, in humid air inside a plastic bag, and in the dark.',
      'Calculate the rate in millimetres per minute for each condition.',
    ],
    icon: 'air',
    minutes: 16,
    level: 'Hard',
    options: TRANS.map((c) => c.name.replace(' (control)', '')),
    control: 0,
    def: 1,
    slider: { label: 'Time', min: 0, max: 10, def: 5, unit: 'min', marks: ['0 min', '5 min', '10 min'] },
    model(r, t) {
      const panel = (i, head) => {
        const d = TRANS[i].rate * t;
        return {
          head,
          dot: i === 0 ? 'secondary' : 'tertiary',
          view: h(Potometer, { pos: d / 70 }),
          metrics: [
            ['Bubble moved', `${round1(d)} mm`, 'primary-container'],
            ['Rate', `${TRANS[i].rate} mm per min`, 'secondary'],
          ],
          d,
        };
      };
      return { A: panel(0, 'Control (still air)'), B: panel(r, TRANS[r].name) };
    },
    tip: [
      ['A potometer measures ', null],
      ['water uptake', 'secondary'],
      [', not transpiration directly. Cut the shoot ', null],
      ['under water', 'secondary'],
      [' so no air enters the xylem.', null],
    ],
    plate: { title: 'Bubble potometer set-up', sub: 'Leafy shoot, capillary tube, reservoir' },
    record(r, t) {
      const m = this.model(r, t);
      return {
        title: `Potometer: ${TRANS[r].name.toLowerCase()}`,
        observation: `Bubble moved ${round1(m.B.d)} mm in ${t} minutes, compared with ${round1(m.A.d)} mm in still air.`,
        conclusion:
          r === 1
            ? 'Moving air removes water vapour near the leaf, increasing the diffusion gradient, so transpiration is faster.'
            : r === 2
            ? 'Humid air reduces the diffusion gradient, so transpiration is slower.'
            : r === 3
            ? 'In darkness the stomata close, so transpiration is very slow.'
            : 'This is the baseline rate for comparison.',
        result: `${TRANS[r].rate} mm/min`,
      };
    },
  },
  {
    id: 'photosynthesis',
    unit: 'bi-f4-plants',
    kind: 'readings',
    short: 'Light and photosynthesis',
    title: 'Photosynthesis rate: pondweed and light intensity',
    desc: 'Count the oxygen bubbles pondweed gives off with a lamp at different distances, then plot rate against light intensity.',
    objective: 'Investigate how light intensity affects the rate of photosynthesis.',
    icon: 'light_mode',
    minutes: 25,
    diagram: 'pondweed-apparatus',
    method: [
      'Put a piece of pondweed, cut end up, under an inverted funnel in a beaker of water containing a little sodium hydrogencarbonate, which supplies carbon dioxide.',
      'Fill a test tube with water and turn it upside down over the funnel stem to collect the gas.',
      'Place the lamp 10 cm from the pondweed and measure the distance with a metre rule.',
      'Leave the pondweed for 5 minutes to adjust to the light.',
      'Count the oxygen bubbles given off in one minute. Count again twice and use the mean.',
      'Move the lamp further away in steps and repeat. Keep the temperature the same, for example with a glass screen that absorbs heat from the lamp.',
    ],
    input: { label: 'Distance of the lamp', unit: 'cm', min: 10, max: 50, step: 5, def: 20 },
    view: (d) => live('pondweed-apparatus', { dist: d, rate: photoRate(d), gas: 4 + photoRate(d) / 2 }),
    measure: (d) => ({ light: 1000 / (d * d), rate: Math.max(0, Math.round(jitter(photoRate(d), 0.9))) }),
    columns: [
      { key: 'x', label: 'Distance / cm', dp: 0 },
      { key: 'light', label: 'Light (1000 / d²)', dp: 2 },
      { key: 'rate', label: 'Bubbles per min', dp: 0 },
    ],
    plot: { x: 'light', y: 'rate', xLabel: 'Light intensity (1000 / d²)', yLabel: 'Bubbles per minute', curve: true },
    minReadings: 5,
    say: (r) => `Lamp at ${r.x} centimetres: ${r.rate} ${r.rate === 1 ? 'bubble' : 'bubbles'} in one minute.`,
    analyse(rows, o) {
      const list = rows[o] || [];
      const near = list[0];
      const far = list[list.length - 1];
      return {
        lines: [
          `Nearest lamp, ${near.x} cm: ${near.rate} ${near.rate === 1 ? 'bubble' : 'bubbles'} per minute.`,
          `Furthest lamp, ${far.x} cm: ${far.rate} ${far.rate === 1 ? 'bubble' : 'bubbles'} per minute.`,
          'Light intensity is proportional to 1 / distance², so halving the distance makes the light about four times as bright.',
        ],
        result: `${near.rate} bubbles per minute at ${near.x} cm, ${far.rate} at ${far.x} cm`,
        conclusion: 'The rate of photosynthesis increases as light intensity increases, because light supplies the energy for photosynthesis. In the brightest light the increase slows down: another factor, such as carbon dioxide concentration or temperature, has become limiting.',
      };
    },
    tip: [
      ['Name the ', null],
      ['limiting factor', 'secondary'],
      [' when the graph levels off, and always say the ', null],
      ['temperature was kept constant', 'secondary'],
      [', because the lamp also heats the water.', null],
    ],
  },
  {
    id: 'catalase',
    unit: 'nutrition',
    units: ['hb-cells'],
    subjects: ['humanbio'],
    kind: 'readings',
    short: 'Catalase and temperature',
    title: 'Catalase activity at different temperatures',
    desc: 'Collect the oxygen produced when liver breaks down hydrogen peroxide, at five temperatures, and compare the rates.',
    objective: 'Find the effect of temperature on the activity of the enzyme catalase, and its optimum temperature.',
    icon: 'thermostat',
    minutes: 30,
    diagram: 'catalase-apparatus',
    method: [
      'Put 10 cm³ of hydrogen peroxide solution in a conical flask and stand it in a water bath at the test temperature for 5 minutes.',
      'Cut equal cubes of fresh liver, 1 cm each, and warm one to the same temperature.',
      'Add the liver to the flask, fit the bung and gas syringe at once, and start the stopwatch.',
      'Read the volume of oxygen in the syringe every 10 seconds for two minutes.',
      'Repeat with fresh liver and fresh hydrogen peroxide at each of the other temperatures.',
      'Keep the size of the liver, the volume and concentration of the hydrogen peroxide the same each time.',
    ],
    options: ['20 °C', '30 °C', '40 °C', '50 °C', '60 °C'],
    optionsLabel: 'Water bath temperature',
    def: 2,
    input: { label: 'Time after adding the liver', unit: 's', min: 0, max: 120, step: 10, def: 30 },
    view: (t, o) => live('catalase-apparatus', { open: Math.min(0.9, (40 * (1 - Math.exp(-catalaseK(CAT_T[o]) * t))) / 50) }),
    measure: (t, o) => ({ vol: t === 0 ? 0 : Math.max(0, jitter(40 * (1 - Math.exp(-catalaseK(CAT_T[o]) * t)), 0.4)) }),
    columns: [
      { key: 'x', label: 'Time / s', dp: 0 },
      { key: 'vol', label: 'Oxygen / cm³', dp: 1 },
    ],
    plot: { x: 'x', y: 'vol', xLabel: 'Time / s', yLabel: 'Volume of oxygen / cm³', curve: true },
    minReadings: 5,
    say: (r, o) => `At ${CAT_T[o]} degrees, after ${r.x} seconds: ${r.vol.toFixed(1)} centimetres cubed of oxygen.`,
    analyse(rows) {
      const rates = Object.entries(rows)
        .filter(([, list]) => list.filter((q) => q.x > 0).length)
        .map(([o, list]) => {
          const first = list.find((q) => q.x > 0);
          return { o: Number(o), rate: first.vol / first.x };
        });
      const best = rates.reduce((a, b) => (b.rate > a.rate ? b : a));
      return {
        lines: rates.map((q) => `${CAT_T[q.o]} °C: initial rate ${(q.rate * 60).toFixed(1)} cm³ of oxygen per minute.`),
        result: `Fastest at ${CAT_T[best.o]} °C`,
        conclusion:
          rates.length > 1
            ? `Catalase worked fastest at ${CAT_T[best.o]} °C of the temperatures you tested. Below the optimum the molecules move slowly, so there are fewer collisions between enzyme and substrate. Above it the enzyme is denatured: its active site changes shape and hydrogen peroxide no longer fits.`
            : 'Test at least one more temperature to compare rates and find the optimum.',
      };
    },
    tip: [
      ['Use the ', null],
      ['initial rate', 'secondary'],
      [' (the gradient at the start) to compare temperatures. Say the enzyme is ', null],
      ['denatured', 'secondary'],
      [', never that it is ', null],
      ['“killed”', 'error'],
      ['.', null],
    ],
  },
  {
    id: 'agar-cubes',
    unit: 'cell',
    units: ['hb-cells'],
    subjects: ['humanbio'],
    kind: 'readings',
    short: 'Surface area and diffusion',
    title: 'Surface area to volume ratio and diffusion in agar cubes',
    desc: 'Time how long acid takes to diffuse to the centre of agar cubes of different sizes.',
    objective: 'Find how the surface area to volume ratio of a block affects how quickly a substance diffuses to its centre.',
    icon: 'deployed_code',
    minutes: 25,
    diagram: 'agar-apparatus',
    method: [
      'Cut cubes of pink agar (made with sodium hydroxide and phenolphthalein indicator) with sides of 0.5, 1, 1.5, 2, 2.5 and 3 cm.',
      'Work out the surface area, volume and surface area to volume ratio of each cube.',
      'Put one cube in a beaker of dilute hydrochloric acid and start the stopwatch.',
      'The pink colour disappears as the acid diffuses in. Record the time when the cube has just turned completely colourless.',
      'Repeat for each size of cube, using fresh acid at the same concentration and temperature.',
    ],
    input: { label: 'Length of the side of the cube', unit: 'cm', min: 0.5, max: 3, step: 0.5, def: 1, dp: 1 },
    view: (s) => live('agar-apparatus', { t: 2 + s * 2 }),
    measure: (s) => {
      const time = 20 * (s / 2) ** 2;
      return { sa: 6 * s * s, vol: s ** 3, ratio: 6 / s, time: Math.max(0.5, jitter(time, 0.05 * time + 0.15)) };
    },
    columns: [
      { key: 'x', label: 'Side / cm', dp: 1 },
      { key: 'sa', label: 'Area / cm²', dp: 1 },
      { key: 'vol', label: 'Volume / cm³', dp: 2 },
      { key: 'ratio', label: 'Area : volume', dp: 1 },
      { key: 'time', label: 'Time / min', dp: 1 },
    ],
    plot: { x: 'ratio', y: 'time', xLabel: 'Surface area to volume ratio', yLabel: 'Time to lose colour / min', curve: true },
    minReadings: 5,
    say: (r) => `Cube of side ${r.x} centimetres: surface area to volume ratio ${r.ratio.toFixed(1)}, colourless after ${r.time.toFixed(1)} minutes.`,
    analyse(rows, o) {
      const list = rows[o] || [];
      const small = list[0];
      const big = list[list.length - 1];
      return {
        lines: [`Smallest cube, ${small.x} cm: ratio ${small.ratio.toFixed(1)}, ${small.time.toFixed(1)} min.`, `Largest cube, ${big.x} cm: ratio ${big.ratio.toFixed(1)}, ${big.time.toFixed(1)} min.`],
        result: `${small.x} cm cube in ${small.time.toFixed(1)} min, ${big.x} cm cube in ${big.time.toFixed(1)} min`,
        conclusion: 'The larger the cube, the smaller its surface area to volume ratio and the longer substances take to diffuse to its centre. This is why large organisms cannot rely on diffusion alone and need exchange surfaces and transport systems.',
      };
    },
    tip: [
      ['Show the working for ', null],
      ['surface area (6 × side²)', 'secondary'],
      [' and ', null],
      ['volume (side³)', 'secondary'],
      ['. Keep the acid concentration and temperature the same for every cube.', null],
    ],
  },
  {
    id: 'quadrat',
    unit: 'ecology',
    units: ['bi-f1-ecology'],
    kind: 'readings',
    short: 'Sampling with quadrats',
    title: 'Estimating a plant population with quadrats',
    desc: 'Place quadrats at random in a field, count the plants in each and estimate the whole population.',
    objective: 'Estimate the number of one species of plant in a field using randomly placed 1 m quadrats.',
    icon: 'grid_on',
    minutes: 20,
    diagram: 'quadrat-apparatus',
    method: [
      'Measure the field and lay two tape measures along two sides at right angles.',
      'Use random numbers to choose coordinates, so that you do not choose where to sample.',
      'Place a 1 m by 1 m quadrat at the coordinates and count the plants of the chosen species rooted inside it.',
      'Repeat for at least 10 quadrats.',
      'Calculate the mean number per quadrat and multiply by the area of the field in square metres.',
    ],
    action: 'Place a quadrat at random',
    view: (t, o, rows) => live('quadrat-apparatus', { placed: rows.slice(-8).map((q) => [q.qx, q.qy]) }),
    measure: () => {
      const x = Math.floor(Math.random() * 49);
      const y = Math.floor(Math.random() * 29);
      return { pos: `${x} m, ${y} m`, count: poisson(2.6), qx: (x / 50) * 250, qy: (y / 30) * 140 };
    },
    columns: [
      { key: 'x', label: 'Quadrat', dp: 0 },
      { key: 'pos', label: 'Position' },
      { key: 'count', label: 'Plants', dp: 0 },
    ],
    minReadings: 10,
    say: (r) => `Quadrat ${r.x}: ${r.count} plants.`,
    analyse(rows, o) {
      const list = rows[o] || [];
      const mean = list.reduce((a, q) => a + q.count, 0) / list.length;
      return {
        lines: [`Mean number per quadrat = ${list.reduce((a, q) => a + q.count, 0)} ÷ ${list.length} = ${mean.toFixed(1)}.`, 'Area of the field = 50 m × 30 m = 1500 m², and each quadrat is 1 m².', `Estimated population = ${mean.toFixed(1)} × 1500 = ${Math.round(mean * 1500)}.`],
        result: `About ${Math.round(mean * 1500)} plants`,
        conclusion: `The field holds about ${Math.round(mean * 1500)} plants of this species. Random sampling avoids bias, and the more quadrats you use the more reliable the estimate.`,
      };
    },
    tip: [
      ['Say how the quadrats were placed ', null],
      ['at random', 'secondary'],
      [' (random coordinates), and show the calculation: ', null],
      ['mean per quadrat × total area', 'secondary'],
      ['.', null],
    ],
  },
  {
    id: 'germination',
    unit: 'reproduction',
    short: 'Conditions for germination',
    title: 'Conditions needed for germination',
    desc: 'Set up four tubes of seeds, each missing one condition, and count how many germinate over a week.',
    objective: 'Show that seeds need water, oxygen and a suitable temperature to germinate.',
    icon: 'grass',
    minutes: 15,
    diagram: 'germination-apparatus',
    method: [
      'Put ten bean or maize seeds in each of four test tubes, labelled A to D.',
      'A: moist cotton wool, left in a warm room. This is the control, with all the conditions.',
      'B: dry cotton wool, in a warm room (no water).',
      'C: seeds covered with boiled and cooled water and a layer of oil on top (no oxygen).',
      'D: moist cotton wool, kept in a refrigerator at about 4 °C (cold).',
      'Count the seeds that have germinated in each tube every day for a week.',
    ],
    options: ['A: water, air, warmth', 'B: no water', 'C: no air', 'D: cold'],
    optionsLabel: 'Tube',
    control: 0,
    def: 1,
    slider: { label: 'Time', min: 0, max: 7, def: 4, unit: 'days', marks: ['Day 0', 'Day 4', 'Day 7'] },
    model(r, t) {
      return { A: germPanel(0, t, 'Tube A: control'), B: germPanel(r, t, this.options[r]) };
    },
    record(r, t) {
      const g = germPanel(r, t).count;
      return {
        title: `Germination, ${this.options[r]}, day ${t}`,
        observation: `After ${t} days, ${g} of 10 seeds had germinated in tube ${'ABCD'[r]}; ${germPanel(0, t).count} of 10 in the control.`,
        conclusion:
          r === 0
            ? 'With water, oxygen and warmth the seeds germinate within a few days.'
            : r === 1
            ? 'Without water the seeds do not germinate: water activates the enzymes and makes the seed swell.'
            : r === 2
            ? 'Without oxygen the seeds do not germinate, because they need aerobic respiration for energy to grow.'
            : 'In the cold the seeds germinate very slowly or not at all, because the enzymes work too slowly at low temperature.',
        result: `${g} of 10`,
      };
    },
    tip: [
      ['Tube A is the ', null],
      ['control', 'secondary'],
      [': it has every condition, so any difference in the others is caused by the one missing factor.', null],
    ],
  },
  {
    id: 'respiration-indicator',
    unit: 'gas',
    units: ['bi-f4-plants', 'hb-breathing'],
    subjects: ['humanbio'],
    short: 'Respiration and carbon dioxide',
    title: 'Carbon dioxide from respiring organisms',
    desc: 'Use hydrogencarbonate indicator to show which organisms give out or take in carbon dioxide.',
    objective: 'Show that living organisms give out carbon dioxide in respiration, and that green leaves in the light take it in.',
    icon: 'bubble_chart',
    minutes: 15,
    diagram: 'respiration-apparatus',
    method: [
      'Pour 5 cm³ of red hydrogencarbonate indicator into each boiling tube.',
      'Put a gauze platform in each tube so the organisms do not touch the indicator.',
      'Put germinating seeds in one tube, small animals such as woodlice in another, and a green leaf in another kept in bright light.',
      'Put the same mass of boiled (dead) seeds in a tube as the control, and close every tube with a bung.',
      'Leave for an hour and compare the colour of the indicator in each tube with the control.',
    ],
    options: ['Germinating seeds', 'Woodlice', 'Green leaf in the light'],
    optionsLabel: 'Tube',
    def: 0,
    slider: { label: 'Time', min: 0, max: 3, step: 0.5, def: 1, unit: 'h', marks: ['0 h', '1.5 h', '3 h'] },
    model(r, t) {
      return { A: indicatorPanel(-1, t, 'Boiled seeds: control'), B: indicatorPanel(r, t, this.options[r]) };
    },
    record(r, t) {
      const p = indicatorPanel(r, t);
      return {
        title: `Hydrogencarbonate indicator, ${this.options[r]}, ${t} h`,
        observation: `After ${t} hours the indicator with ${this.options[r].toLowerCase()} was ${p.name.toLowerCase()}; with boiled seeds it stayed red.`,
        conclusion: r === 2 ? 'The leaf photosynthesised faster than it respired, so it took in carbon dioxide and the indicator turned purple.' : 'The organisms respired and gave out carbon dioxide, which made the indicator more acidic and turned it yellow.',
        result: p.name,
      };
    },
    tip: [
      ['Red is the colour at normal air carbon dioxide; ', null],
      ['yellow means more', 'secondary'],
      [' carbon dioxide and ', null],
      ['purple means less', 'secondary'],
      ['.', null],
    ],
  },
  {
    id: 'pulse',
    unit: 'transport',
    units: ['hb-blood'],
    subjects: ['humanbio'],
    kind: 'readings',
    short: 'Pulse rate and exercise',
    title: 'The effect of exercise on pulse rate',
    desc: 'Measure your pulse rate after two minutes of step-ups until it returns to the resting rate.',
    objective: 'Find how exercise affects the pulse rate, and how long the pulse takes to return to its resting rate.',
    icon: 'monitor_heart',
    minutes: 20,
    diagram: 'pulse-apparatus',
    method: [
      'Sit quietly for five minutes, then find the pulse at your wrist with two fingertips, not the thumb.',
      'Count the beats for 30 seconds and double it to get beats per minute. This is the resting pulse rate.',
      'Do step-ups onto a low step for two minutes.',
      'Immediately sit down and take your pulse again.',
      'Take your pulse every minute until it is back to the resting rate.',
    ],
    input: { label: 'Time after exercise', unit: 'min', min: 0, max: 10, step: 1, def: 0 },
    view: (t, o, rows) => live('pulse-apparatus', { bpm: rows.length ? rows[rows.length - 1].bpm : null }, 180),
    measure: (t) => ({ bpm: Math.round(jitter(72 + 58 * Math.exp(-t / 2.2), 2)) }),
    columns: [
      { key: 'x', label: 'Time after exercise / min', dp: 0 },
      { key: 'bpm', label: 'Pulse / beats per min', dp: 0 },
    ],
    plot: { x: 'x', y: 'bpm', xLabel: 'Time after exercise / min', yLabel: 'Pulse rate / beats per minute', curve: true },
    minReadings: 6,
    say: (r) => `${r.x} minutes after exercise: ${r.bpm} beats per minute.`,
    analyse(rows, o) {
      const list = rows[o] || [];
      const peak = list.reduce((a, q) => (q.bpm > a.bpm ? q : a));
      const back = list.find((q) => q.x > peak.x && q.bpm <= 78);
      return {
        lines: [`Highest pulse: ${peak.bpm} beats per minute, ${peak.x} min after exercise.`, back ? `Back near the resting rate (about 72) after ${back.x} minutes.` : 'The pulse had not yet returned to the resting rate: take more readings.'],
        result: `Peak ${peak.bpm} beats per minute${back ? `, recovered in ${back.x} min` : ''}`,
        conclusion: 'During exercise the heart beats faster to deliver more oxygen and glucose to the muscles for respiration and to remove carbon dioxide. Afterwards the pulse falls back to the resting rate; a fitter person recovers faster.',
      };
    },
    tip: [
      ['Use ', null],
      ['two fingertips, not the thumb', 'secondary'],
      [', because the thumb has its own pulse. Count for 30 seconds and double, or for a full minute.', null],
    ],
  },
  {
    id: 'reaction-time',
    unit: 'nervous',
    units: ['hb-senses'],
    subjects: ['humanbio'],
    kind: 'readings',
    short: 'Reaction time',
    title: 'Measuring reaction time with a falling ruler',
    desc: 'Catch a falling ruler, record the distance it falls and work out your reaction time.',
    objective: 'Measure reaction time and see whether it improves with practice.',
    icon: 'timer',
    minutes: 15,
    diagram: 'reaction-apparatus',
    method: [
      'Your partner holds a 30 cm ruler vertically, with 0 cm at the bottom.',
      'Hold your thumb and first finger open, level with the 0 cm mark, without touching the ruler.',
      'Your partner drops the ruler without warning; catch it as quickly as you can.',
      'Read the distance the ruler fell, at the top of your thumb.',
      'Repeat at least five times and convert each distance into a reaction time.',
    ],
    action: 'Drop the ruler',
    view: (t, o, rows) => live('reaction-apparatus', { drop: rows.length ? rows[rows.length - 1].dist : 0 }),
    measure: (n) => {
      const d = Math.max(7, jitter(16 - 0.5 * Math.min(n, 8), 1.4));
      return { dist: d, time: Math.sqrt((2 * d) / 100 / 9.81) };
    },
    columns: [
      { key: 'x', label: 'Trial', dp: 0 },
      { key: 'dist', label: 'Distance / cm', dp: 1 },
      { key: 'time', label: 'Reaction time / s', dp: 2 },
    ],
    plot: { x: 'x', y: 'time', xLabel: 'Trial number', yLabel: 'Reaction time / s', curve: true },
    minReadings: 5,
    say: (r) => `Trial ${r.x}: caught at ${r.dist.toFixed(1)} centimetres, a reaction time of ${r.time.toFixed(2)} seconds.`,
    analyse(rows, o) {
      const list = rows[o] || [];
      const mean = list.reduce((a, q) => a + q.time, 0) / list.length;
      return {
        lines: [`Reaction time t = √(2d ÷ g), with d in metres and g = 9.8 m/s².`, `Mean reaction time = ${mean.toFixed(2)} s.`, `First trial ${list[0].time.toFixed(2)} s, last trial ${list[list.length - 1].time.toFixed(2)} s.`],
        result: `Mean ${mean.toFixed(2)} s`,
        conclusion: 'Catching the ruler is a voluntary action: light from the ruler is detected by the eyes, impulses travel to the brain, and motor neurones carry impulses to the muscles of the hand. This takes longer than a reflex. The time often falls with practice.',
      };
    },
    tip: [
      ['This is a ', null],
      ['voluntary response', 'secondary'],
      [' involving the brain, not a reflex. Repeat the test and use the mean to reduce the effect of random errors.', null],
    ],
  },
];
