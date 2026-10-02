// Virtual Paper 3 practicals. Each lab models a control (panel A) against a
// treatment (panel B); readings are simulated from standard textbook behaviour.
import { createElement as h } from 'react';
import { ElodeaTube, OsmosisCell, Potometer, SpottingTile, TestTube } from '../ui/labArt';

const clamp = (v, a, b) => Math.min(b, Math.max(a, v));
const round1 = (x) => Math.round(x * 10) / 10;

const STEPS = {
  en: ['Prepare the specimen', 'Set up the control', 'Apply the treatment', 'Leave it to act', 'Observe and compare', 'Record in the workbook'],
  fr: ['Préparer le spécimen', 'Préparer le témoin', 'Appliquer le traitement', 'Laisser agir', 'Observer et comparer', 'Noter dans le cahier'],
};
export const labSteps = (lang) => STEPS[lang === 'fr' ? 'fr' : 'en'];

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

// ---------- photosynthesis ----------
const DIST = [10, 20, 40];
const BUBBLES_PER_MIN = [24, 6, 1.5];

// ---------- transpiration ----------
const TRANS = [
  { name: 'Still air (control)', rate: 3 },
  { name: 'Moving air (fan)', rate: 7 },
  { name: 'Humid (plastic bag)', rate: 1 },
  { name: 'Darkness', rate: 0.6 },
];

export const LABS = [
  {
    id: 'osmosis',
    unit: 'cell',
    unitN: 1,
    short: 'Osmosis & plasmolysis',
    title: 'Osmosis, turgidity & plasmolysis',
    desc: 'Mount red onion epidermis in distilled water and in sucrose solutions from 0.2 M to 1.0 M, and watch the protoplast pull away from the cell wall.',
    objective: 'Examine red onion epidermal cells in distilled water compared with sucrose solutions of increasing concentration.',
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
    unitN: 2,
    short: 'Food tests',
    title: 'Food tests: starch, reducing sugar, protein & fat',
    desc: 'Test a food suspension against a water control using iodine, Benedict’s, Biuret and the ethanol emulsion test.',
    objective: 'Identify the nutrients in a food sample by comparing each reagent with a water control.',
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
    unitN: 2,
    short: 'Enzyme and temperature',
    title: 'Enzyme activity: amylase and temperature',
    desc: 'Mix starch with amylase at 10 °C, 37 °C and 70 °C and test a drop with iodine every minute until the starch has gone.',
    objective: 'Find how temperature affects the time amylase takes to digest starch.',
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
    id: 'photosynthesis',
    unit: 'nutrition',
    unitN: 2,
    short: 'Light and photosynthesis',
    title: 'Photosynthesis rate: pondweed and light intensity',
    desc: 'Count oxygen bubbles from pondweed with a lamp at 10 cm, 20 cm and 40 cm, keeping temperature and carbon dioxide constant.',
    objective: 'Investigate how light intensity affects the rate of photosynthesis.',
    icon: 'bubble_chart',
    minutes: 22,
    level: 'Medium',
    options: ['Lamp 10 cm', 'Lamp 20 cm', 'Lamp 40 cm'],
    control: null,
    def: 0,
    slider: { label: 'Counting time', min: 1, max: 5, def: 3, unit: 'min', marks: ['1 min', '3 min', '5 min'] },
    model(r, t) {
      const rate = BUBBLES_PER_MIN[r];
      return {
        A: {
          head: 'Control (dark)',
          dot: 'secondary',
          view: h(ElodeaTube, { rate: 0 }),
          metrics: [
            ['Bubbles', '0', 'secondary'],
            ['Light', 'None', 'on-surface'],
          ],
        },
        B: {
          head: `${DIST[r]} cm from lamp`,
          dot: 'tertiary',
          view: h(ElodeaTube, { rate: rate / 6 }),
          metrics: [
            ['Bubbles counted', `${Math.round(rate * t)}`, 'primary-container'],
            ['Rate', `${rate} per min`, 'secondary'],
          ],
        },
        rate,
      };
    },
    tip: [
      ['Light intensity is proportional to ', null],
      ['1 / distance²', 'secondary'],
      ['. Keep temperature constant with a ', null],
      ['water heat shield', 'secondary'],
      [' between lamp and tube.', null],
    ],
    plate: { title: 'Bubble count method', sub: 'Pondweed in sodium hydrogencarbonate' },
    record(r, t) {
      const m = this.model(r, t);
      return {
        title: `Pondweed, lamp at ${DIST[r]} cm`,
        observation: `${Math.round(m.rate * t)} bubbles in ${t} minutes (${m.rate} per minute).`,
        conclusion: 'The closer the lamp, the higher the light intensity and the faster the rate of photosynthesis, until another factor becomes limiting.',
        result: `${m.rate}/min`,
      };
    },
  },
  {
    id: 'transpiration',
    unit: 'transport',
    unitN: 3,
    short: 'Transpiration',
    title: 'Transpiration: bubble potometer',
    desc: 'Measure how far an air bubble moves along a potometer in still air, moving air, humid air and darkness.',
    objective: 'Compare the rate of water uptake by a leafy shoot in different conditions.',
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
];

export const labById = (id) => LABS.find((l) => l.id === id);
export const labsForUnit = (unitId) => LABS.filter((l) => l.unit === unitId);
