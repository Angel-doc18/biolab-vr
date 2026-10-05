// Chemistry practicals (Paper 3 / alternative to practical skills). Readings
// practicals give a table, a graph and a worked result; comparison practicals
// show a control beside the test. All values come from real data with the small
// scatter real measurements have.
import { createElement as h } from 'react';
import { DiagramView } from '../../diagrams/Diagram';
import { APPARATUS_CHEM } from '../../diagrams/apparatusChem';
import { fitLine } from '../../ui/Graph';
import { mixHex } from '../../ui/labArt';

const jitter = (v, sd) => v + sd * (Math.random() + Math.random() + Math.random() - 1.5);
const live = (key, state, maxHeight = 220) => h(DiagramView, { spec: APPARATUS_CHEM[key], labels: false, state, maxHeight });
const to = (v, dp) => Number(v.toFixed(dp));
const halfStep = (v) => Math.round(v * 20) / 20; // burette readings end in 0 or 5
const lowerFirst = (t) => t.charAt(0).toLowerCase() + t.slice(1);
const ionName = (ion) => lowerFirst(ion.split(',')[0]);
const andList = (xs) => (xs.length < 2 ? xs.join('') : `${xs.slice(0, -1).join(', ')} and ${xs[xs.length - 1]}`);

// ---------- titration ----------
const NAOH = [0.0952, 0.112]; // mol/dm³, unknown to the student
const ACID = 0.1;

// ---------- rates ----------
const CONC = [0.5, 1.0, 1.5, 2.0];
const H2_MAX = 48; // cm³ of hydrogen from 0.05 g of magnesium
const h2At = (t, o) => H2_MAX * (1 - Math.exp(-0.03 * CONC[o] * t));
const MARBLE_K = [0.006, 0.015, 0.05];
const lossAt = (t, o) => 0.88 * (1 - Math.exp(-MARBLE_K[o] * t));
const crossTime = (T) => 120 * 2 ** (-(T - 20) / 10);

// ---------- electrolysis ----------
const CURRENT = [0.2, 0.4];
const copperGain = (min, o) => (CURRENT[o] * min * 60 * 63.5) / (2 * 96500);
const PRODUCTS = [
  {
    name: 'Dilute sulfuric acid',
    liquid: '#e8f1f8',
    anode: { product: 'Oxygen', test: 'Relights a glowing splint', rate: 0.5, colour: '#ffffff' },
    cathode: { product: 'Hydrogen', test: 'Burns with a squeaky pop', rate: 1, colour: '#ffffff' },
    equations: 'Anode: 4OH⁻ → O₂ + 2H₂O + 4e⁻. Cathode: 2H⁺ + 2e⁻ → H₂.',
    note: 'Twice as much hydrogen as oxygen is collected, so the overall change is the electrolysis of water.',
  },
  {
    name: 'Concentrated sodium chloride',
    liquid: '#eef4f8',
    anode: { product: 'Chlorine', test: 'Bleaches damp litmus paper', rate: 0.8, colour: '#dcebb0' },
    cathode: { product: 'Hydrogen', test: 'Burns with a squeaky pop', rate: 1, colour: '#ffffff' },
    equations: 'Anode: 2Cl⁻ → Cl₂ + 2e⁻. Cathode: 2H⁺ + 2e⁻ → H₂.',
    note: 'Sodium hydroxide is left in the solution. Hydrogen, not sodium, forms because sodium is more reactive than hydrogen.',
  },
  {
    name: 'Copper(II) sulfate',
    liquid: '#a9cdea',
    anode: { product: 'Oxygen', test: 'Relights a glowing splint', rate: 0.5, colour: '#ffffff' },
    cathode: { product: 'Copper', test: 'Pink-brown coating on the electrode', rate: 0, colour: null, deposit: '#e0896a' },
    equations: 'Anode: 4OH⁻ → O₂ + 2H₂O + 4e⁻. Cathode: Cu²⁺ + 2e⁻ → Cu.',
    note: 'The blue colour fades as copper ions leave the solution, and the solution becomes acidic.',
  },
  {
    name: 'Concentrated hydrochloric acid',
    liquid: '#eef4f8',
    anode: { product: 'Chlorine', test: 'Bleaches damp litmus paper', rate: 0.8, colour: '#dcebb0' },
    cathode: { product: 'Hydrogen', test: 'Burns with a squeaky pop', rate: 1, colour: '#ffffff' },
    equations: 'Anode: 2Cl⁻ → Cl₂ + 2e⁻. Cathode: 2H⁺ + 2e⁻ → H₂.',
    note: 'Both gases come from the acid itself.',
  },
];

// ---------- identifying ions ----------
const FLAME = [
  { ion: 'Lithium, Li⁺', colour: '#d9343a', name: 'Red' },
  { ion: 'Sodium, Na⁺', colour: '#f5a623', name: 'Yellow-orange' },
  { ion: 'Potassium, K⁺', colour: '#b38bd9', name: 'Lilac' },
  { ion: 'Calcium, Ca²⁺', colour: '#e2582a', name: 'Orange-red' },
  { ion: 'Barium, Ba²⁺', colour: '#a8d86a', name: 'Light green' },
  { ion: 'Copper(II), Cu²⁺', colour: '#2fb59a', name: 'Blue-green' },
];
const ORDER_FLAME = [1, 3, 5, 0, 4, 2]; // salt n holds FLAME[ORDER_FLAME[n]]

// For each ion, a result for sodium hydroxide and for aqueous ammonia:
// [precipitate colour or null, what is seen, dissolves in excess, colour then, name of that colour].
const CATIONS = [
  { ion: 'Copper(II), Cu²⁺', fill: '#bcdcf2', naoh: ['#7ab8e6', 'Light blue precipitate', false], nh3: ['#7ab8e6', 'Light blue precipitate', true, '#2a52be', 'dark blue solution'] },
  { ion: 'Iron(II), Fe²⁺', fill: '#e3eed0', naoh: ['#7c9a5a', 'Green precipitate', false], nh3: ['#7c9a5a', 'Green precipitate', false] },
  { ion: 'Iron(III), Fe³⁺', fill: '#f0dca0', naoh: ['#a0522d', 'Red-brown precipitate', false], nh3: ['#a0522d', 'Red-brown precipitate', false] },
  { ion: 'Zinc, Zn²⁺', fill: '#f1f6fb', naoh: ['#f7f7f2', 'White precipitate', true, '#f1f6fb', 'colourless solution'], nh3: ['#f7f7f2', 'White precipitate', true, '#f1f6fb', 'colourless solution'] },
  { ion: 'Aluminium, Al³⁺', fill: '#f1f6fb', naoh: ['#f7f7f2', 'White precipitate', true, '#f1f6fb', 'colourless solution'], nh3: ['#f7f7f2', 'White precipitate', false] },
  { ion: 'Calcium, Ca²⁺', fill: '#f1f6fb', naoh: ['#f7f7f2', 'White precipitate', false], nh3: [null, 'No precipitate, or a very slight one', false] },
  { ion: 'Chromium(III), Cr³⁺', fill: '#cfe2c8', naoh: ['#5f8f55', 'Green precipitate', true, '#2e6b3a', 'dark green solution'], nh3: ['#5f8f55', 'Green precipitate', false] },
  { ion: 'Ammonium, NH₄⁺', fill: '#f1f6fb', naoh: [null, 'No precipitate; on warming, ammonia turns damp red litmus blue', false], nh3: [null, 'No change', false] },
];
const ORDER_CATION = [2, 0, 4, 6, 1, 3, 7, 5];

const ANIONS = [
  { ion: 'Chloride, Cl⁻', ag: ['#f4f4ef', 'White precipitate'], ba: [null, 'No precipitate'] },
  { ion: 'Bromide, Br⁻', ag: ['#efe4c2', 'Cream precipitate'], ba: [null, 'No precipitate'] },
  { ion: 'Iodide, I⁻', ag: ['#f1de6a', 'Yellow precipitate'], ba: [null, 'No precipitate'] },
  { ion: 'Sulfate, SO₄²⁻', ag: [null, 'No precipitate'], ba: ['#f4f4ef', 'White precipitate'] },
  { ion: 'Carbonate, CO₃²⁻', fizz: true, ag: [null, 'Fizzes when the acid goes in; the gas turns limewater milky'], ba: [null, 'Fizzes when the acid goes in; the gas turns limewater milky'] },
  { ion: 'Nitrate, NO₃⁻', ag: [null, 'No precipitate'], ba: [null, 'No precipitate'] },
];
const ORDER_ANION = [3, 0, 4, 2, 5, 1];

// ---------- chromatography ----------
const DYES = { red: [0.72, '#d94a4a'], yellow: [0.55, '#e3b62c'], blue: [0.31, '#3f6fb5'], violet: [0.86, '#8e44ad'], black: [0, '#333333'] };
const INKS = [
  { name: 'Black ink', dyes: ['blue', 'red', 'yellow', 'black'] },
  { name: 'Green food colouring', dyes: ['blue', 'yellow'] },
  { name: 'Purple ink', dyes: ['red', 'blue'] },
  { name: 'Brown food colouring', dyes: ['red', 'yellow', 'violet'] },
  { name: 'Red dye E129', dyes: ['red'] },
];

// ---------- energetics ----------
const NAOH_CUP = 0.8; // mol/dm³ in the cup, unknown to the student
const cupTemp = (v) => {
  const end = (25 * NAOH_CUP) / 1.0;
  const n = Math.min(v, end) / 1000;
  return 22 + (57000 * n) / ((25 + v) * 4.2) - 0.012 * v;
};
const METALS = [
  { name: 'Magnesium', dH: 531, k: 0.05, colour: '#c0c7cd', fill: '#f1f6fb' },
  { name: 'Zinc', dH: 217, k: 0.03, colour: '#9aa3ab', fill: '#f1f6fb' },
  { name: 'Iron', dH: 153, k: 0.012, colour: '#6f777e', fill: '#dfeccb' },
  { name: 'Copper', dH: 0, k: 0.01, colour: '#c87a4a', fill: '#a9cdea' },
];
const metalRise = (o) => (0.005 * METALS[o].dH * 1000) / (25 * 4.2);
const metalTemp = (t, o) => 21 + metalRise(o) * (1 - Math.exp(-METALS[o].k * t)) * Math.exp(-0.0012 * t);
const FUELS = [
  { name: 'Methanol', carbons: 1, M: 32, dHc: 726 },
  { name: 'Ethanol', carbons: 2, M: 46, dHc: 1367 },
  { name: 'Propan-1-ol', carbons: 3, M: 60, dHc: 2021 },
  { name: 'Butan-1-ol', carbons: 4, M: 74, dHc: 2676 },
];

// ---------- solubility of potassium nitrate (g per 100 g of water) ----------
const KNO3 = [
  [0, 13],
  [10, 21],
  [20, 32],
  [30, 46],
  [40, 64],
  [50, 85],
  [60, 110],
  [70, 138],
  [80, 169],
];
const crystalTemp = (s) => {
  for (let i = 1; i < KNO3.length; i++) {
    const [t0, s0] = KNO3[i - 1];
    const [t1, s1] = KNO3[i];
    if (s <= s1) return t0 + ((s - s0) / (s1 - s0)) * (t1 - t0);
  }
  return 80;
};

// ---------- water of crystallisation ----------
const CRUCIBLE = 22.3;
const HYDRATED = 2.5;
const ANHYDROUS = (HYDRATED * 159.6) / 249.7;

// ---------- rusting ----------
const RUST = [
  { name: 'Water, no air', state: { water: 0.55, oil: true }, rate: 0, why: 'Boiling removed the dissolved air and the oil stops more dissolving, so there is no oxygen.' },
  { name: 'Air, no water', state: { water: 0, dry: true, bung: true }, rate: 0, why: 'Anhydrous calcium chloride absorbs water vapour, so the air is dry.' },
  { name: 'Salt water and air', state: { water: 0.45, salt: true }, rate: 1.6, why: 'Salt speeds rusting up; this is why cars rust faster near the sea.' },
  { name: 'Zinc-coated nail', state: { water: 0.45 }, rate: 0, why: 'Zinc is more reactive than iron, so it corrodes instead of the iron (sacrificial protection). Galvanised iron is made like this.' },
];

// ---------- reactivity with acid ----------
const METAL_ACID = [
  { name: 'Magnesium', colour: '#c0c7cd', fizz: 1, rise: 12, speed: 'Fast fizzing; the metal soon disappears' },
  { name: 'Zinc', colour: '#9aa3ab', fizz: 0.5, rise: 4, speed: 'Steady bubbles' },
  { name: 'Iron', colour: '#6f777e', fizz: 0.2, rise: 1.5, speed: 'A few slow bubbles' },
  { name: 'Copper', colour: '#c87a4a', fizz: 0, rise: 0, speed: 'No bubbles' },
];

// ---------- conductivity ----------
const SUBSTANCES = [
  { name: 'Solid sodium chloride', state: { solid: '#f4f4ef' }, glow: 0, why: 'In the solid the ions are held in a lattice and cannot move.' },
  { name: 'Sodium chloride solution', state: { liquid: '#e6f1fa' }, glow: 0.8, why: 'Dissolved, the ions are free to move and carry the charge.' },
  { name: 'Sugar solution', state: { liquid: '#f3f0e2' }, glow: 0, why: 'Sugar is a simple molecular substance: there are no ions or free electrons.' },
  { name: 'Graphite rod', state: { rod: '#4a525a' }, glow: 0.9, why: 'Each carbon atom has one delocalised electron that can move between the layers.' },
  { name: 'Copper wire', state: { rod: '#c87a4a' }, glow: 1, why: 'Metals have a sea of delocalised electrons that move through the structure.' },
  { name: 'Ethanol', state: { liquid: '#f6f9fb' }, glow: 0, why: 'Ethanol is covalent and contains no ions.' },
];

export const LABS = [
  // ---------------------------------------------------------------- separation
  {
    id: 'ch-chromatography',
    unit: 'ch-analysis',
    units: ['ch-f1-mixtures', 'ch-f2-purity', 'ac-organic1'],
    subjects: ['a-chemistry'],
    short: 'Chromatography',
    title: 'Paper chromatography of inks and food colourings',
    desc: 'Run an ink beside known dyes, watch the colours separate as the solvent rises, and identify them from their Rf values.',
    objective: 'Find out which dyes a mixture contains by comparing Rf values with known dyes.',
    icon: 'science',
    minutes: 20,
    diagram: 'chromatography',
    method: [
      'Draw a pencil start line 2 cm from the bottom of the chromatography paper. Pencil does not dissolve and run.',
      'Put a small spot of the ink on the line, and spots of the known dyes beside it.',
      'Stand the paper in a beaker with a little solvent. The solvent must be below the start line, or the spots dissolve into it.',
      'Put a lid on the beaker and leave the solvent to rise up the paper.',
      'Take the paper out before the solvent reaches the top and mark the solvent front in pencil.',
      'Measure how far each spot and the solvent moved, and work out Rf = distance moved by the spot ÷ distance moved by the solvent.',
    ],
    level: 'Easy',
    options: INKS.map((i) => i.name),
    optionsLabel: 'Sample',
    control: null,
    def: 0,
    slider: { label: 'Time the solvent has been rising', min: 0, max: 15, step: 1, def: 6, unit: 'min', marks: ['0 min', '8 min', '15 min'] },
    model(r, t) {
      const front = Math.min(1, t / 15);
      const ink = INKS[r];
      const spots = ink.dyes.map((d) => DYES[d]);
      const ready = front >= 0.6;
      const rfs = ink.dyes.filter((d) => d !== 'black').map((d) => DYES[d][0].toFixed(2));
      return {
        A: {
          head: 'Known dyes: red, yellow, blue',
          dot: 'secondary',
          view: live('chroma-strip', { front, spots: [DYES.red, DYES.yellow, DYES.blue] }, 140),
          metrics: [['Rf values', ready ? 'Red 0.72, yellow 0.55, blue 0.31' : 'Let the solvent rise further', 'on-surface']],
        },
        B: {
          head: ink.name,
          dot: 'tertiary',
          view: live('chroma-strip', { front, spots }, 140),
          metrics: [
            ['Spots that moved', ready ? `${rfs.length}` : 'Not separated yet', 'on-surface'],
            ['Rf values', ready ? rfs.join(', ') : '-', ready ? 'secondary' : 'on-surface'],
          ],
        },
        ready,
      };
    },
    record(r) {
      const ink = INKS[r];
      const known = ink.dyes.filter((d) => ['red', 'yellow', 'blue'].includes(d));
      const other = ink.dyes.filter((d) => d === 'violet');
      const stuck = ink.dyes.includes('black');
      return {
        title: `Chromatography of ${ink.name.toLowerCase()}`,
        observation: `${ink.name} separated into ${ink.dyes.length} spot${ink.dyes.length === 1 ? '' : 's'} with Rf values ${ink.dyes.map((d) => DYES[d][0].toFixed(2)).join(', ')}.`,
        conclusion:
          ink.dyes.length === 1
            ? `${ink.name} gives one spot, so it is a single pure dye. Its Rf matches the red dye.`
            : `It contains the ${known.join(', ')} dye${known.length === 1 ? '' : 's'}, matched by equal Rf values.${other.length ? ' One spot matches none of the known dyes, so it is a different dye.' : ''}${stuck ? ' The spot left on the start line is insoluble in this solvent.' : ''}`,
        result: `${ink.dyes.length} dye${ink.dyes.length === 1 ? '' : 's'}`,
      };
    },
    tip: [
      ['Draw the start line in ', null],
      ['pencil', 'secondary'],
      [', keep the solvent ', null],
      ['below the line', 'secondary'],
      [', and give Rf values to two decimal places. Rf can never be more than 1.', null],
    ],
  },
  {
    id: 'ch-solubility',
    unit: 'ch-f4-salts',
    units: ['ch-f1-solutions'],
    kind: 'readings',
    short: 'Solubility curve',
    title: 'Solubility of potassium nitrate at different temperatures',
    desc: 'Dissolve different masses of potassium nitrate in hot water, note when crystals appear on cooling, and draw a solubility curve.',
    objective: 'Find how the solubility of potassium nitrate changes with temperature and plot a solubility curve.',
    icon: 'thermostat',
    minutes: 30,
    diagram: 'solubility-apparatus',
    method: [
      'Weigh the potassium nitrate into a boiling tube and add 10.0 cm³ of water from a burette.',
      'Warm the tube in a hot water bath, stirring with the thermometer, until all the solid has dissolved.',
      'Take the tube out and let it cool, stirring gently.',
      'Record the temperature at which crystals first appear. The solution is saturated at that temperature.',
      'Add 1 g more potassium nitrate and repeat, or repeat with a different mass.',
      'Work out the solubility in grams per 100 g of water: mass in 10 g of water × 10.',
    ],
    input: { label: 'Mass of potassium nitrate in 10 g of water', unit: 'g', min: 2, max: 13, step: 1, def: 4 },
    view: (m, o, mine) => {
      const last = mine?.[mine.length - 1];
      return live('solubility-apparatus', { crystals: last ? 0.6 : 0, temp: last ? last.temp : 70 });
    },
    measure: (m) => ({ sol: m * 10, temp: to(jitter(crystalTemp(m * 10), 0.8), 0) }),
    columns: [
      { key: 'x', label: 'Mass in 10 g water / g', dp: 0 },
      { key: 'sol', label: 'Solubility / g per 100 g', dp: 0 },
      { key: 'temp', label: 'Crystals appear / °C', dp: 0 },
    ],
    plot: { x: 'temp', y: 'sol', xLabel: 'Temperature / °C', yLabel: 'Solubility / g per 100 g water', curve: true },
    minReadings: 5,
    action: 'Dissolve, cool and watch',
    say: (r) => `${r.x} grams in 10 grams of water: crystals appeared at ${r.temp} degrees Celsius.`,
    analyse(rows, o) {
      const list = [...(rows[o] || [])].sort((a, b) => a.temp - b.temp);
      const lo = list[0];
      const hi = list[list.length - 1];
      return {
        lines: [
          `At ${lo.temp} °C the solubility is ${lo.sol} g per 100 g of water.`,
          `At ${hi.temp} °C it is ${hi.sol} g per 100 g of water.`,
          'The curve gets steeper at higher temperatures.',
        ],
        result: `${lo.sol} g at ${lo.temp} °C, ${hi.sol} g at ${hi.temp} °C`,
        conclusion:
          'The solubility of potassium nitrate increases as the temperature rises. When a hot saturated solution cools, the water can hold less solid, so the extra comes out as crystals. This is how crystals of a salt are made.',
      };
    },
    tip: [
      ['Solubility is in ', null],
      ['grams per 100 g of water', 'secondary'],
      [', so multiply the mass in 10 g of water by 10. Draw a ', null],
      ['smooth curve', 'secondary'],
      [', not dot-to-dot lines.', null],
    ],
  },

  // ---------------------------------------------------------------- bonding
  {
    id: 'ch-conductivity',
    unit: 'ch-bonding',
    units: ['ch-f1-elements', 'ch-f2-electricity'],
    short: 'Which substances conduct?',
    title: 'Electrical conductivity and structure',
    desc: 'Test solids, solutions and rods in a circuit with a lamp, and link what conducts to ions, molecules and delocalised electrons.',
    objective: 'Find which substances conduct electricity and explain the results from their structure and bonding.',
    icon: 'bolt',
    minutes: 15,
    diagram: 'conductivity-apparatus',
    method: [
      'Set up a circuit with a cell, a lamp and two carbon electrodes, all in series.',
      'Touch the electrodes together first: the lamp lights, so the circuit works.',
      'Put the electrodes into, or onto, the substance being tested without letting them touch.',
      'Record whether the lamp lights.',
      'Rinse and dry the electrodes between tests so one sample does not contaminate the next.',
    ],
    level: 'Easy',
    options: SUBSTANCES.map((s) => s.name),
    optionsLabel: 'Substance',
    control: null,
    def: 1,
    slider: { label: 'Voltage of the supply', min: 0, max: 6, step: 1, def: 3, unit: 'V', marks: ['0 V', '3 V', '6 V'] },
    model(r, v) {
      const sub = SUBSTANCES[r];
      const glow = (sub.glow * v) / 6;
      return {
        A: {
          head: 'Electrodes touching (check)',
          dot: 'secondary',
          view: live('conduct-small', { glow: v / 6, rod: '#8f989f' }, 140),
          metrics: [['Lamp', v ? 'Lights' : 'Off: no voltage', v ? 'secondary' : 'on-surface']],
        },
        B: {
          head: sub.name,
          dot: sub.glow ? 'secondary' : 'error',
          view: live('conduct-small', { ...sub.state, glow }, 140),
          metrics: [
            ['Lamp', !v ? 'Off: no voltage' : sub.glow ? 'Lights' : 'Does not light', sub.glow && v ? 'secondary' : 'error'],
            ['Conducts?', sub.glow ? 'Yes' : 'No', sub.glow ? 'secondary' : 'error'],
          ],
        },
      };
    },
    record(r) {
      const sub = SUBSTANCES[r];
      return {
        title: `Does ${sub.name.toLowerCase()} conduct?`,
        observation: sub.glow ? 'The lamp lit.' : 'The lamp did not light.',
        conclusion: `${sub.name} ${sub.glow ? 'conducts' : 'does not conduct'}. ${sub.why}`,
        result: sub.glow ? 'conducts' : 'does not conduct',
      };
    },
    tip: [
      ['Say what moves: ', null],
      ['ions', 'secondary'],
      [' in molten or dissolved ionic compounds, ', null],
      ['electrons', 'secondary'],
      [' in metals and graphite. Never say electrons move through a solution.', null],
    ],
  },

  // ---------------------------------------------------------------- moles
  {
    id: 'ch-water-crystallisation',
    unit: 'ch-moles',
    units: ['ch-f4-salts', 'ac-mole'],
    subjects: ['a-chemistry'],
    kind: 'readings',
    short: 'Water of crystallisation',
    title: 'Water of crystallisation in copper(II) sulfate',
    desc: 'Heat blue copper(II) sulfate crystals to constant mass, then use moles to find x in CuSO₄·xH₂O.',
    objective: 'Find the number of molecules of water of crystallisation, x, in hydrated copper(II) sulfate, CuSO₄·xH₂O.',
    icon: 'local_fire_department',
    minutes: 30,
    diagram: 'crucible-heating',
    method: [
      'Weigh an empty crucible. Add about 2.5 g of hydrated copper(II) sulfate and weigh again.',
      'Heat the crucible gently on a pipeclay triangle, then more strongly. The blue crystals turn white as the water is driven off.',
      'Let the crucible cool with the lid on, so it does not absorb water from the air, then weigh it.',
      'Heat, cool and weigh again. Repeat until two masses in a row agree to within 0.01 g: this is constant mass.',
      'Work out the mass of water lost and the mass of anhydrous copper(II) sulfate left, then their moles.',
    ],
    view: (n, o, mine) => {
      const done = mine?.length || 0;
      const left = Math.exp(-1.3 * done);
      return live('crucible-heating', { colour: mixHex('#f2f2ee', '#3d7fd0', left), steam: done > 0 && left > 0.05 });
    },
    measure: (n) => {
      const left = Math.exp(-1.3 * n);
      return { mass: to(jitter(CRUCIBLE + ANHYDROUS + (HYDRATED - ANHYDROUS) * left, 0.003), 2) };
    },
    columns: [
      { key: 'x', label: 'Heating', dp: 0 },
      { key: 'mass', label: 'Crucible and contents / g', dp: 2 },
    ],
    minReadings: 3,
    action: 'Heat, cool and weigh',
    say: (r) => `After heating ${r.x}, the crucible and contents weigh ${r.mass.toFixed(2)} grams.`,
    analyse(rows, o) {
      const list = rows[o] || [];
      const last = list[list.length - 1];
      const prev = list[list.length - 2];
      const constant = prev && Math.abs(prev.mass - last.mass) <= 0.01;
      const start = CRUCIBLE + HYDRATED;
      const water = start - last.mass;
      const anhydrous = last.mass - CRUCIBLE;
      const nWater = water / 18;
      const nSalt = anhydrous / 159.6;
      const x = nWater / nSalt;
      return {
        lines: [
          `Crucible ${CRUCIBLE.toFixed(2)} g; crucible and hydrated salt ${start.toFixed(2)} g.`,
          constant ? `Constant mass reached: ${prev.mass.toFixed(2)} g and ${last.mass.toFixed(2)} g.` : 'Not yet constant: the last two masses differ by more than 0.01 g. Heat again.',
          `Water lost = ${water.toFixed(2)} g, which is ${nWater.toFixed(4)} mol (÷ 18).`,
          `Anhydrous CuSO₄ = ${anhydrous.toFixed(2)} g, which is ${nSalt.toFixed(4)} mol (÷ 159.6).`,
          `x = ${nWater.toFixed(4)} ÷ ${nSalt.toFixed(4)} = ${x.toFixed(2)}.`,
        ],
        result: constant ? `x = ${Math.round(x)}` : 'heat to constant mass',
        conclusion: constant
          ? `x is ${x.toFixed(2)}, so to the nearest whole number the formula is CuSO₄·${Math.round(x)}H₂O. Heating to constant mass makes sure all the water has gone.`
          : 'Keep heating until two masses agree within 0.01 g; otherwise some water is still in the crystals and x comes out too small.',
      };
    },
    tip: [
      ['Heat to ', null],
      ['constant mass', 'secondary'],
      [' and cool with the lid on. If the solid turns black it has decomposed, and x comes out ', null],
      ['too large', 'error'],
      ['.', null],
    ],
  },

  // ---------------------------------------------------------------- acids
  {
    id: 'ch-titration',
    unit: 'ch-f4-titration',
    units: ['ac-mole'],
    subjects: ['a-chemistry'],
    kind: 'readings',
    short: 'Acid-alkali titration',
    title: 'Titration: finding the concentration of sodium hydroxide',
    desc: 'Titrate 25.0 cm³ of sodium hydroxide with 0.100 mol/dm³ hydrochloric acid, get concordant titres and calculate the concentration.',
    objective: 'Find the concentration of a sodium hydroxide solution by titration with 0.100 mol/dm³ hydrochloric acid.',
    icon: 'science',
    minutes: 30,
    diagram: 'titration-apparatus',
    method: [
      'Rinse the burette with the hydrochloric acid, fill it, and run a little out so the jet is full. Read the burette at eye level, at the bottom of the meniscus.',
      'Use a pipette and filler to put exactly 25.0 cm³ of the sodium hydroxide into a conical flask. Add two drops of phenolphthalein: it turns pink.',
      'Stand the flask on a white tile and run in the acid while swirling, until the pink colour just disappears. This first run is a rough titration.',
      'Repeat carefully, adding the acid drop by drop near the end point.',
      'Record the initial and final burette readings to the nearest 0.05 cm³ and work out each titre.',
      'Repeat until two titres agree within 0.10 cm³ (concordant), and find their mean.',
    ],
    options: ['Solution A', 'Solution B'],
    optionsLabel: 'Sodium hydroxide solution',
    def: 0,
    view: (n, o, mine) => {
      const last = mine?.[mine.length - 1];
      return live('titration-apparatus', { level: last ? (50 - last.end) / 50 : 0.98, flask: last ? '#f8f1f5' : '#f6c3dc' });
    },
    measure: (n, o, mine) => {
      const exact = (25 * NAOH[o]) / ACID;
      const titre = halfStep(n === 1 ? exact + 0.4 + Math.random() * 0.6 : jitter(exact, 0.07));
      const prev = mine?.[mine.length - 1];
      const start = prev && 50 - prev.end > titre + 2 ? prev.end : halfStep(Math.random() * 0.5);
      return { start, end: to(start + titre, 2), titre };
    },
    columns: [
      { key: 'x', label: 'Run', dp: 0 },
      { key: 'start', label: 'Initial / cm³', dp: 2 },
      { key: 'end', label: 'Final / cm³', dp: 2 },
      { key: 'titre', label: 'Titre / cm³', dp: 2 },
    ],
    minReadings: 3,
    action: 'Do a titration',
    say: (r) => (r.x === 1 ? `Rough titration: ${r.titre.toFixed(2)} cm³.` : `Titration ${r.x}: ${r.titre.toFixed(2)} cm³.`),
    analyse(rows, o) {
      const list = rows[o] || [];
      const accurate = list.slice(1).map((q) => q.titre);
      let best = [];
      for (const a of accurate) {
        const group = accurate.filter((b) => b >= a && b - a <= 0.1 + 1e-9);
        if (group.length > best.length) best = group;
      }
      const ok = best.length >= 2;
      const mean = ok ? best.reduce((a, b) => a + b, 0) / best.length : null;
      const nAcid = ok ? (ACID * mean) / 1000 : null;
      const conc = ok ? nAcid / 0.025 : null;
      return {
        lines: ok
          ? [
              `Rough titre ${list[0].titre.toFixed(2)} cm³ is left out of the mean.`,
              `Concordant titres: ${andList(best.map((b) => b.toFixed(2)))} cm³ (within 0.10 cm³).`,
              `Mean titre = ${mean.toFixed(2)} cm³.`,
              `Moles of HCl = 0.100 × ${mean.toFixed(2)} ÷ 1000 = ${nAcid.toFixed(5)} mol.`,
              'HCl + NaOH → NaCl + H₂O, so the moles of NaOH are the same.',
              `Concentration of NaOH = ${nAcid.toFixed(5)} ÷ 0.0250 = ${conc.toFixed(3)} mol/dm³.`,
            ]
          : ['Your accurate titres do not agree within 0.10 cm³ yet. Do another titration.'],
        result: ok ? `${conc.toFixed(3)} mol/dm³` : 'not concordant yet',
        conclusion: ok
          ? `The sodium hydroxide is ${conc.toFixed(3)} mol/dm³. Using only concordant titres, and leaving out the rough one, makes the answer reliable.`
          : 'Titrate again, adding the acid drop by drop near the end point, until two titres agree within 0.10 cm³.',
      };
    },
    tip: [
      ['Give burette readings to ', null],
      ['two decimal places', 'secondary'],
      [' ending in 0 or 5, leave out the ', null],
      ['rough titre', 'secondary'],
      [', and average only concordant titres.', null],
    ],
  },
  {
    id: 'ch-neutralisation',
    unit: 'ch-f4-titration',
    units: ['ch-energy', 'ac-energetics'],
    subjects: ['a-chemistry'],
    kind: 'readings',
    short: 'Neutralisation temperature',
    title: 'Thermometric titration: the heat of neutralisation',
    desc: 'Add acid in 5 cm³ portions to sodium hydroxide in a polystyrene cup and find the end point from the highest temperature.',
    objective: 'Show that neutralisation is exothermic and find the volume of acid that exactly neutralises 25.0 cm³ of sodium hydroxide.',
    icon: 'thermostat',
    minutes: 25,
    diagram: 'neutralisation-cup',
    method: [
      'Put 25.0 cm³ of sodium hydroxide in a polystyrene cup standing in a beaker, and record its temperature.',
      'Add 5.0 cm³ of 1.00 mol/dm³ hydrochloric acid from a burette, stir with the thermometer, and record the highest temperature.',
      'Keep adding 5.0 cm³ portions, recording the temperature each time, until 40 cm³ has been added.',
      'Plot temperature against volume of acid. Draw one straight line through the rising points and one through the falling points.',
      'Where the two lines cross is the end point.',
    ],
    input: { label: 'Total volume of acid added', unit: 'cm³', min: 0, max: 40, step: 5, def: 0 },
    view: (v) => live('neutralisation-cup', { temp: cupTemp(v), level: 0.85 - v / 60 }),
    measure: (v) => ({ temp: to(jitter(cupTemp(v), 0.1), 1) }),
    columns: [
      { key: 'x', label: 'Acid added / cm³', dp: 0 },
      { key: 'temp', label: 'Temperature / °C', dp: 1 },
    ],
    plot: { x: 'x', y: 'temp', xLabel: 'Volume of acid / cm³', yLabel: 'Temperature / °C' },
    minReadings: 7,
    say: (r) => `${r.x} cm³ of acid added: ${r.temp.toFixed(1)} degrees Celsius.`,
    analyse(rows, o) {
      const list = [...(rows[o] || [])].sort((a, b) => a.x - b.x);
      const top = list.reduce((a, b) => (b.temp > a.temp ? b : a));
      const up = fitLine(list.filter((q) => q.x <= top.x).map((q) => ({ x: q.x, y: q.temp })));
      const down = fitLine(list.filter((q) => q.x >= top.x).map((q) => ({ x: q.x, y: q.temp })));
      const cross = up && down && up.m !== down.m ? (down.c - up.c) / (up.m - down.m) : top.x;
      const end = Math.max(0, Math.min(40, cross));
      const conc = (1.0 * end) / 25;
      return {
        lines: [
          `Starting temperature ${list[0].temp.toFixed(1)} °C; highest reading ${top.temp.toFixed(1)} °C at ${top.x} cm³.`,
          `The two straight lines cross at about ${end.toFixed(1)} cm³: this is the end point.`,
          `Concentration of NaOH = 1.00 × ${end.toFixed(1)} ÷ 25.0 = ${conc.toFixed(2)} mol/dm³.`,
        ],
        result: `end point about ${end.toFixed(1)} cm³`,
        conclusion:
          'The temperature rises while acid and alkali react, so neutralisation is exothermic. After the end point there is no alkali left to react, and the cooler acid added only cools and dilutes the mixture, so the temperature falls.',
      };
    },
    tip: [
      ['Use a ', null],
      ['polystyrene cup with a lid', 'secondary'],
      [' to cut heat loss, and find the end point where the ', null],
      ['two best-fit lines cross', 'secondary'],
      [', not at the highest reading alone.', null],
    ],
  },

  // ---------------------------------------------------------------- redox
  {
    id: 'ch-electrolysis-products',
    unit: 'ch-redox',
    units: ['ch-f2-electricity', 'ac-redox'],
    subjects: ['a-chemistry'],
    short: 'Products of electrolysis',
    title: 'Electrolysis of aqueous solutions: what forms at each electrode',
    desc: 'Electrolyse four solutions with carbon electrodes, collect the products and identify them with their tests.',
    objective: 'Identify the products at the anode and cathode when aqueous solutions are electrolysed with inert electrodes.',
    icon: 'bolt',
    minutes: 25,
    diagram: 'electrolysis',
    method: [
      'Fill the cell with the solution and fit a test tube full of the same solution over each carbon electrode.',
      'Connect the electrodes to a 6 V d.c. supply: the anode to positive, the cathode to negative.',
      'Watch each electrode and collect any gas in its tube.',
      'Test the gases: a lighted splint gives a squeaky pop with hydrogen; a glowing splint relights in oxygen; chlorine bleaches damp litmus paper.',
      'Look for any solid forming on the cathode, and any colour change in the solution.',
    ],
    level: 'Medium',
    options: PRODUCTS.map((p) => p.name),
    optionsLabel: 'Electrolyte',
    control: null,
    def: 0,
    slider: { label: 'Time the current has flowed', min: 0, max: 10, step: 1, def: 5, unit: 'min', marks: ['0 min', '5 min', '10 min'] },
    model(r, t) {
      const e = PRODUCTS[r];
      const f = t / 10;
      const liquid = e.cathode.deposit ? mixHex(e.liquid, '#e8f1f8', f * 0.6) : e.liquid;
      const side = (end, head) => ({
        head,
        dot: 'secondary',
        view: live('electrode-tube', { gas: end.rate * f * 0.85, gasColour: end.colour, liquid, deposit: end.deposit && t > 0 ? end.deposit : null }, 140),
        metrics: [
          ['Product', t ? end.product : 'Switch on the current', 'on-surface'],
          ['Test', t ? end.test : '-', t ? 'secondary' : 'on-surface'],
        ],
      });
      return { A: side(e.anode, 'Anode (+)'), B: side(e.cathode, 'Cathode (−)') };
    },
    record(r) {
      const e = PRODUCTS[r];
      return {
        title: `Electrolysis of ${e.name.toLowerCase()}`,
        observation: `Anode: ${e.anode.product.toLowerCase()} (${e.anode.test.toLowerCase()}). Cathode: ${e.cathode.product.toLowerCase()} (${e.cathode.test.toLowerCase()}).`,
        conclusion: `${e.equations} ${e.note}`,
        result: `${e.anode.product} and ${e.cathode.product.toLowerCase()}`,
      };
    },
    tip: [
      ['At the cathode, ', null],
      ['hydrogen', 'secondary'],
      [' forms unless the metal is less reactive than hydrogen. At the anode, a ', null],
      ['concentrated halide', 'secondary'],
      [' gives the halogen; otherwise oxygen forms.', null],
    ],
  },
  {
    id: 'ch-copper-plating',
    unit: 'ch-redox',
    units: ['ch-f2-electricity', 'ac-redox'],
    subjects: ['a-chemistry'],
    kind: 'readings',
    short: 'Electrolysis of copper sulfate',
    title: 'Electrolysis of copper(II) sulfate with copper electrodes',
    desc: 'Pass a steady current, weigh both electrodes every 5 minutes, and show the mass gained equals the mass lost.',
    objective: 'Find how the mass of copper deposited depends on time and current, and compare the anode and cathode.',
    icon: 'bolt',
    minutes: 40,
    diagram: 'copper-electrolysis',
    method: [
      'Clean two copper electrodes with sandpaper, wash them with propanone, dry and weigh them.',
      'Set up the cell with copper(II) sulfate solution, an ammeter and a variable resistor in series.',
      'Switch on and keep the current constant with the variable resistor.',
      'After 5 minutes, take the electrodes out, rinse them with water then propanone, dry and weigh them.',
      'Put them back and repeat every 5 minutes up to 30 minutes.',
    ],
    options: ['0.20 A', '0.40 A'],
    optionsLabel: 'Current',
    def: 1,
    input: { label: 'Time the current has flowed', unit: 'min', min: 0, max: 30, step: 5, def: 10 },
    view: (m, o) => live('copper-electrolysis', { t: copperGain(m, o) / copperGain(30, 1) }),
    measure: (m, o) => ({ gain: to(Math.max(0, jitter(copperGain(m, o), 0.002)), 3), loss: to(Math.max(0, jitter(copperGain(m, o), 0.002)), 3) }),
    columns: [
      { key: 'x', label: 'Time / min', dp: 0 },
      { key: 'gain', label: 'Cathode gain / g', dp: 3 },
      { key: 'loss', label: 'Anode loss / g', dp: 3 },
    ],
    plot: { x: 'x', y: 'gain', xLabel: 'Time / min', yLabel: 'Mass of copper deposited / g', fit: 'origin' },
    minReadings: 5,
    say: (r) => `After ${r.x} minutes: the cathode gained ${r.gain.toFixed(3)} grams and the anode lost ${r.loss.toFixed(3)} grams.`,
    analyse(rows) {
      const tested = Object.entries(rows).filter(([, l]) => l.length >= 2);
      const lines = tested.map(([o, l]) => {
        const fit = fitLine(l.map((q) => ({ x: q.x, y: q.gain })), true);
        return `${CURRENT[o].toFixed(2)} A: ${((fit?.m || 0) * 1000).toFixed(1)} mg of copper deposited each minute.`;
      });
      return {
        lines: [...lines, 'The cathode gains about the same mass as the anode loses.'],
        result: lines[0] || '',
        conclusion:
          'Mass deposited is proportional to the time, and doubling the current doubles it, because the mass depends on the charge that flows. Copper atoms at the anode lose electrons and go into solution (Cu → Cu²⁺ + 2e⁻); copper ions gain electrons at the cathode (Cu²⁺ + 2e⁻ → Cu). The blue colour stays the same. This is how copper is purified.',
      };
    },
    tip: [
      ['Keep the ', null],
      ['current constant', 'secondary'],
      [', and dry the electrodes with propanone before weighing. Oxidation (loss of electrons) is at the ', null],
      ['anode', 'secondary'],
      ['.', null],
    ],
  },

  // ---------------------------------------------------------------- energy and rates
  {
    id: 'ch-rate-concentration',
    unit: 'ch-f5-rates',
    units: ['ac-kinetics'],
    subjects: ['a-chemistry'],
    kind: 'readings',
    short: 'Concentration and rate',
    title: 'Rate of reaction: magnesium and hydrochloric acid',
    desc: 'Collect the hydrogen from magnesium ribbon in acids of four concentrations and compare the initial rates.',
    objective: 'Find how the concentration of hydrochloric acid affects the rate of its reaction with magnesium.',
    icon: 'speed',
    minutes: 30,
    diagram: 'rate-apparatus',
    method: [
      'Put 50 cm³ of hydrochloric acid of known concentration into a conical flask.',
      'Add a 5 cm length of clean magnesium ribbon (about 0.05 g), fit the bung and gas syringe at once, and start the stopwatch.',
      'Read the volume of hydrogen in the syringe every 10 seconds until it stops changing.',
      'Repeat with each of the other concentrations, using the same length of magnesium and the same volume of acid.',
      'Plot volume of gas against time for each concentration on the same axes.',
    ],
    options: CONC.map((c) => `${c.toFixed(1)} mol/dm³`),
    optionsLabel: 'Acid concentration',
    def: 1,
    input: { label: 'Time after adding the magnesium', unit: 's', min: 0, max: 120, step: 10, def: 20 },
    view: (t, o) => live('rate-apparatus', { open: Math.min(0.9, h2At(t, o) / 60) }),
    measure: (t, o) => ({ vol: t === 0 ? 0 : to(Math.max(0, jitter(h2At(t, o), 0.5)), 1) }),
    columns: [
      { key: 'x', label: 'Time / s', dp: 0 },
      { key: 'vol', label: 'Hydrogen / cm³', dp: 1 },
    ],
    plot: { x: 'x', y: 'vol', xLabel: 'Time / s', yLabel: 'Volume of hydrogen / cm³', curve: true },
    minReadings: 5,
    say: (r, o) => `${CONC[o].toFixed(1)} molar acid, after ${r.x} seconds: ${r.vol.toFixed(1)} cm³ of hydrogen.`,
    analyse(rows) {
      const rates = Object.entries(rows)
        .filter(([, list]) => list.some((q) => q.x > 0))
        .map(([o, list]) => {
          const first = list.filter((q) => q.x > 0).sort((a, b) => a.x - b.x)[0];
          return { o: Number(o), rate: first.vol / first.x };
        });
      const fast = rates.reduce((a, b) => (b.rate > a.rate ? b : a));
      return {
        lines: rates.map((q) => `${CONC[q.o].toFixed(1)} mol/dm³: initial rate ${q.rate.toFixed(2)} cm³ of hydrogen per second.`),
        result: `Fastest with ${CONC[fast.o].toFixed(1)} mol/dm³`,
        conclusion:
          rates.length > 1
            ? 'The more concentrated the acid, the faster the reaction. There are more acid particles in the same volume, so they collide with the magnesium more often. The final volume is the same each time because the same mass of magnesium was used up.'
            : 'Test at least one more concentration to compare the rates.',
      };
    },
    tip: [
      ['Compare rates with the ', null],
      ['gradient at the start', 'secondary'],
      ['. Explain with the ', null],
      ['frequency of collisions', 'secondary'],
      [', not just “more collisions”.', null],
    ],
  },
  {
    id: 'ch-marble-surface',
    unit: 'ch-f5-rates',
    units: ['ac-kinetics'],
    subjects: ['a-chemistry'],
    kind: 'readings',
    short: 'Surface area and rate',
    title: 'Rate of reaction: marble chips of different sizes',
    desc: 'Follow the loss in mass as carbon dioxide escapes from large chips, small chips and powder, and compare the rates.',
    objective: 'Find how the surface area of calcium carbonate affects the rate of its reaction with hydrochloric acid.',
    icon: 'speed',
    minutes: 30,
    diagram: 'marble-apparatus',
    method: [
      'Put 50 cm³ of dilute hydrochloric acid (in excess) in a conical flask on a top-pan balance.',
      'Weigh out 2.00 g of large marble chips. Add them, put a cotton wool plug in the neck and start the stopwatch.',
      'Record the mass every 30 seconds for 5 minutes.',
      'Repeat with 2.00 g of small chips, then 2.00 g of powdered marble.',
      'Work out the loss in mass, which is the mass of carbon dioxide given off.',
    ],
    options: ['Large chips', 'Small chips', 'Powder'],
    optionsLabel: 'Size of marble pieces',
    def: 0,
    input: { label: 'Time after adding the marble', unit: 's', min: 0, max: 300, step: 30, def: 60 },
    view: (t, o) => live('marble-apparatus', { size: o, mass: 152.4 - lossAt(t, o), fizz: Math.exp(-MARBLE_K[o] * t) * (0.4 + o * 0.3) }),
    measure: (t, o) => {
      const loss = t === 0 ? 0 : Math.max(0, jitter(lossAt(t, o), 0.006));
      return { mass: to(152.4 - loss, 2), loss: to(loss, 2) };
    },
    columns: [
      { key: 'x', label: 'Time / s', dp: 0 },
      { key: 'mass', label: 'Mass / g', dp: 2 },
      { key: 'loss', label: 'Loss / g', dp: 2 },
    ],
    plot: { x: 'x', y: 'loss', xLabel: 'Time / s', yLabel: 'Loss in mass / g', curve: true },
    minReadings: 5,
    say: (r, o) => `${['Large chips', 'Small chips', 'Powder'][o]}, after ${r.x} seconds: mass ${r.mass.toFixed(2)} grams, a loss of ${r.loss.toFixed(2)} grams.`,
    analyse(rows) {
      const names = ['large chips', 'small chips', 'powder'];
      const rates = Object.entries(rows)
        .filter(([, list]) => list.some((q) => q.x > 0))
        .map(([o, list]) => {
          const first = list.filter((q) => q.x > 0).sort((a, b) => a.x - b.x)[0];
          return { o: Number(o), rate: first.loss / first.x };
        });
      const fast = rates.reduce((a, b) => (b.rate > a.rate ? b : a));
      return {
        lines: rates.map((q) => `${names[q.o]}: initial rate ${(q.rate * 1000).toFixed(1)} mg of carbon dioxide per second.`),
        result: `Fastest with ${names[fast.o]}`,
        conclusion:
          rates.length > 1
            ? 'Smaller pieces react faster. The same mass cut smaller has a larger surface area, so more particles are exposed and acid particles collide with them more often. All three lose the same total mass, 0.88 g, because the same mass of marble reacts completely.'
            : 'Test another size of marble to compare the rates.',
      };
    },
    tip: [
      ['CaCO₃ + 2HCl → CaCl₂ + H₂O + CO₂. The loss in mass is the ', null],
      ['carbon dioxide', 'secondary'],
      [' escaping; the cotton wool lets it out but stops acid spray being lost.', null],
    ],
  },
  {
    id: 'ch-thiosulfate',
    unit: 'ch-f5-rates',
    units: ['ac-kinetics'],
    subjects: ['a-chemistry'],
    kind: 'readings',
    short: 'Temperature and rate',
    title: 'The disappearing cross: temperature and rate',
    desc: 'Time how long sodium thiosulfate and acid take to hide a cross at five temperatures, and plot the rate.',
    objective: 'Find how temperature affects the rate of reaction between sodium thiosulfate and hydrochloric acid.',
    icon: 'thermostat',
    minutes: 30,
    diagram: 'cross-apparatus',
    method: [
      'Draw a cross on a piece of paper and stand a conical flask on it.',
      'Warm 50 cm³ of sodium thiosulfate solution to the test temperature and pour it into the flask.',
      'Add 5 cm³ of dilute hydrochloric acid, swirl and start the stopwatch.',
      'Look down through the solution. Stop the clock when the cross can no longer be seen.',
      'Repeat at other temperatures with the same volumes and concentrations, and the same person watching.',
      'Rate is proportional to 1 ÷ time.',
    ],
    input: { label: 'Temperature of the thiosulfate', unit: '°C', min: 20, max: 60, step: 5, def: 30 },
    view: (T, o, mine) => live('cross-apparatus', { cloud: mine?.length ? 1 : 0.2 }),
    measure: (T) => {
      const time = Math.max(3, Math.round(jitter(crossTime(T), crossTime(T) * 0.04)));
      return { time, rate: to(1000 / time, 1) };
    },
    columns: [
      { key: 'x', label: 'Temperature / °C', dp: 0 },
      { key: 'time', label: 'Time / s', dp: 0 },
      { key: 'rate', label: 'Rate (1000 ÷ time)', dp: 1 },
    ],
    plot: { x: 'x', y: 'rate', xLabel: 'Temperature / °C', yLabel: 'Rate (1000 ÷ time)', curve: true },
    minReadings: 5,
    action: 'Time the cross disappearing',
    say: (r) => `At ${r.x} degrees Celsius the cross disappeared after ${r.time} seconds.`,
    analyse(rows, o) {
      const list = [...(rows[o] || [])].sort((a, b) => a.x - b.x);
      const lo = list[0];
      const hi = list[list.length - 1];
      return {
        lines: [
          `At ${lo.x} °C the cross disappeared after ${lo.time} s.`,
          `At ${hi.x} °C it took only ${hi.time} s.`,
          'Each 10 °C rise roughly halves the time, so the rate roughly doubles.',
        ],
        result: `${lo.time} s at ${lo.x} °C, ${hi.time} s at ${hi.x} °C`,
        conclusion:
          'The rate increases with temperature. Particles move faster, so they collide more often, and a bigger fraction of the collisions have at least the activation energy, so more of them succeed. Sulfur forms as a fine solid, which makes the mixture cloudy.',
      };
    },
    tip: [
      ['Keep the ', null],
      ['volumes, concentrations and the cross', 'secondary'],
      [' the same. Higher temperature means more collisions with energy ', null],
      ['above the activation energy', 'secondary'],
      ['.', null],
    ],
  },
  {
    id: 'ch-fuel-energy',
    unit: 'ch-organic',
    units: ['ch-energy', 'ac-energetics'],
    subjects: ['a-chemistry'],
    kind: 'readings',
    short: 'Energy from alcohols',
    title: 'Energy released when alcohols burn',
    desc: 'Burn four alcohols under a copper can of water, measure the temperature rise and fuel used, and compare energy per mole.',
    objective: 'Compare the energy given out per mole when methanol, ethanol, propan-1-ol and butan-1-ol burn.',
    icon: 'local_fire_department',
    minutes: 35,
    diagram: 'fuel-apparatus',
    method: [
      'Put 100 cm³ of water in a copper can, clamp it above a spirit burner and record the water temperature.',
      'Weigh the spirit burner with its cap on.',
      'Light the burner and stir the water with the thermometer until its temperature has risen by about 20 °C.',
      'Put the flame out, record the highest temperature, and weigh the burner again.',
      'Energy given to the water = 100 g × 4.2 J/g °C × temperature rise.',
      'Repeat with the other alcohols, keeping the volume of water and the height of the can the same.',
    ],
    options: FUELS.map((f) => f.name),
    optionsLabel: 'Alcohol',
    def: 1,
    view: (n, o, mine) => {
      const last = mine?.[mine.length - 1];
      return live('fuel-apparatus', { temp: last ? 22 + last.dt : 22 });
    },
    measure: (n, o) => {
      const f = FUELS[o];
      const dt = to(jitter(20, 0.5), 1);
      const q = (100 * 4.2 * dt) / 1000; // kJ given to the water
      const mass = to(jitter(q / ((f.dHc / f.M) * 0.35), 0.02), 2);
      return { dt, mass, carbons: f.carbons, kjmol: to(q / (mass / f.M), 0) };
    },
    columns: [
      { key: 'x', label: 'Run', dp: 0 },
      { key: 'dt', label: 'Rise / °C', dp: 1 },
      { key: 'mass', label: 'Fuel burned / g', dp: 2 },
      { key: 'kjmol', label: 'kJ per mol', dp: 0 },
    ],
    plot: { x: 'carbons', y: 'kjmol', xLabel: 'Number of carbon atoms', yLabel: 'Energy released / kJ per mol', fit: 'line' },
    minReadings: 2,
    action: 'Burn the fuel',
    say: (r, o) => `${FUELS[o].name}: the water warmed by ${r.dt.toFixed(1)} degrees and ${r.mass.toFixed(2)} grams of fuel burned.`,
    analyse(rows) {
      const tested = Object.entries(rows).filter(([, l]) => l.length);
      const means = tested.map(([o, l]) => ({ f: FUELS[o], kj: l.reduce((a, q) => a + q.kjmol, 0) / l.length }));
      return {
        lines: [
          ...means.map((m) => `${m.f.name}: ${m.kj.toFixed(0)} kJ per mol measured; the data book gives ${m.f.dHc} kJ per mol.`),
          'Energy per mole of fuel = energy to the water ÷ (mass burned ÷ molar mass).',
        ],
        result: means.map((m) => `${m.f.name} ${m.kj.toFixed(0)}`).join(', '),
        conclusion:
          means.length > 1
            ? 'The bigger the alcohol molecule, the more energy one mole gives out: each extra CH₂ adds about the same amount, because more bonds are broken and made. The measured values are well below the data book because much of the heat goes to the air and the can, and combustion is incomplete (soot forms).'
            : 'Burn at least one more alcohol to see the pattern down the series.',
      };
    },
    tip: [
      ['Name the main error: ', null],
      ['heat lost to the surroundings', 'secondary'],
      ['. Reduce it with a draught shield and a lid, and keep the flame the same distance below the can.', null],
    ],
  },

  // ---------------------------------------------------------------- metals
  {
    id: 'ch-displacement',
    unit: 'ch-metals',
    units: ['ch-redox', 'ac-energetics'],
    subjects: ['a-chemistry'],
    kind: 'readings',
    short: 'Displacement and energy',
    title: 'Displacement of copper: temperature rise and reactivity',
    desc: 'Add four metal powders to copper(II) sulfate solution, follow the temperature, and place the metals in order of reactivity.',
    objective: 'Use the temperature rise when a metal displaces copper to put the metals in order of reactivity.',
    icon: 'thermostat',
    minutes: 30,
    diagram: 'displacement-cup',
    method: [
      'Put 25 cm³ of 0.20 mol/dm³ copper(II) sulfate solution in a polystyrene cup and record its temperature.',
      'Add an excess of the metal powder (about 1 g), stir and start the stopwatch.',
      'Record the temperature every 20 seconds for three minutes.',
      'Repeat with each metal using fresh solution.',
      'Find the highest temperature rise for each metal.',
    ],
    options: METALS.map((m) => m.name),
    optionsLabel: 'Metal powder',
    def: 1,
    input: { label: 'Time after adding the metal', unit: 's', min: 0, max: 180, step: 20, def: 40 },
    view: (t, o) => {
      const m = METALS[o];
      const done = m.dH ? 1 - Math.exp(-m.k * t) : 0;
      return live('displacement-cup', { temp: metalTemp(t, o), fill: mixHex('#a9cdea', m.fill, done), solid: done > 0.3 ? mixHex(m.colour, '#c87a4a', done) : m.colour });
    },
    measure: (t, o) => ({ temp: to(jitter(metalTemp(t, o), 0.1), 1) }),
    columns: [
      { key: 'x', label: 'Time / s', dp: 0 },
      { key: 'temp', label: 'Temperature / °C', dp: 1 },
    ],
    plot: { x: 'x', y: 'temp', xLabel: 'Time / s', yLabel: 'Temperature / °C', curve: true },
    minReadings: 5,
    say: (r, o) => `${METALS[o].name}, after ${r.x} seconds: ${r.temp.toFixed(1)} degrees Celsius.`,
    analyse(rows) {
      const rises = Object.entries(rows)
        .filter(([, l]) => l.length)
        .map(([o, l]) => ({ m: METALS[o], rise: Math.max(...l.map((q) => q.temp)) - 21 }))
        .sort((a, b) => b.rise - a.rise);
      return {
        lines: rises.map((q) => `${q.m.name}: highest rise ${Math.max(0, q.rise).toFixed(1)} °C.`),
        result: rises.map((q) => q.m.name).join(' > '),
        conclusion:
          rises.length > 1
            ? `Order of reactivity from your results: ${rises.map((q) => q.m.name.toLowerCase()).join(', ')}. The further a metal is above copper in the reactivity series, the more energy is released when it displaces copper. A pink-brown solid (copper) forms and the blue colour fades. Copper itself gives no reaction.`
            : 'Test another metal to compare.',
      };
    },
    tip: [
      ['Use ', null],
      ['excess metal powder', 'secondary'],
      [' and the same volume and concentration each time. The metal is ', null],
      ['oxidised', 'secondary'],
      ['; copper ions are reduced: Zn + Cu²⁺ → Zn²⁺ + Cu.', null],
    ],
  },
  {
    id: 'ch-metal-acid',
    unit: 'ch-metals',
    units: ['ch-f1-acids'],
    short: 'Metals with acid',
    title: 'Reactivity of metals with dilute hydrochloric acid',
    desc: 'Drop four metals into dilute acid and compare the bubbles and the temperature to put them in order of reactivity.',
    objective: 'Place magnesium, zinc, iron and copper in order of reactivity from their reactions with dilute acid.',
    icon: 'science',
    minutes: 15,
    diagram: 'metal-acid-tubes',
    method: [
      'Put 5 cm³ of dilute hydrochloric acid into each of four test tubes and record the temperature.',
      'Add a similar-sized piece of a different clean metal to each tube.',
      'Watch the rate of bubbling and record the highest temperature.',
      'Test the gas with a lighted splint: hydrogen burns with a squeaky pop.',
    ],
    level: 'Easy',
    options: METAL_ACID.map((m) => m.name),
    optionsLabel: 'Metal',
    control: null,
    def: 0,
    slider: { label: 'Time in the acid', min: 0, max: 5, step: 1, def: 2, unit: 'min', marks: ['0 min', '2 min', '5 min'] },
    model(r, t) {
      const m = METAL_ACID[r];
      const going = t > 0;
      return {
        A: {
          head: 'Acid only (control)',
          dot: 'secondary',
          view: live('reagent-tube', { level: 0.5 }, 140),
          metrics: [
            ['Bubbles', 'None', 'on-surface'],
            ['Temperature', '21 °C', 'on-surface'],
          ],
        },
        B: {
          head: `${m.name} in acid`,
          dot: m.fizz ? 'secondary' : 'error',
          view: live('reagent-tube', { level: 0.5, metal: m.colour, fizz: going ? m.fizz : 0 }, 140),
          metrics: [
            ['Bubbles', going ? m.speed : 'Not added yet', m.fizz && going ? 'secondary' : 'on-surface'],
            ['Temperature', `${(21 + (going ? m.rise * Math.min(1, t / 2) : 0)).toFixed(0)} °C`, 'on-surface'],
          ],
        },
      };
    },
    record(r) {
      const m = METAL_ACID[r];
      return {
        title: `${m.name} with dilute hydrochloric acid`,
        observation: `${m.speed}. The temperature rose by ${m.rise} °C.`,
        conclusion: m.fizz
          ? `${m.name} reacts to give a salt and hydrogen, for example Mg + 2HCl → MgCl₂ + H₂. The faster the bubbles and the bigger the temperature rise, the more reactive the metal: magnesium > zinc > iron > copper.`
          : 'Copper is below hydrogen in the reactivity series, so it cannot displace hydrogen from the acid.',
        result: m.fizz ? m.speed.toLowerCase() : 'no reaction',
      };
    },
    tip: [
      ['Keep the ', null],
      ['acid concentration, volume and size of metal', 'secondary'],
      [' the same, and clean the metals first: an oxide layer slows the start.', null],
    ],
  },
  {
    id: 'ch-rusting',
    unit: 'ch-metals',
    units: ['ch-f2-oxygen'],
    short: 'Conditions for rusting',
    title: 'What iron needs to rust',
    desc: 'Leave iron nails in tubes with and without air and water for a week, and see which ones rust.',
    objective: 'Show that iron needs both oxygen (air) and water to rust, and how salt and a zinc coating affect rusting.',
    icon: 'science',
    minutes: 15,
    diagram: 'rusting-tubes',
    method: [
      'Clean five iron nails with sandpaper.',
      'Tube A: a nail in tap water open to the air.',
      'Tube B: a nail in boiled water (no dissolved air) with a layer of oil on top.',
      'Tube C: a nail in dry air with anhydrous calcium chloride and a bung.',
      'Tube D: a nail in salt water open to the air. Tube E: a zinc-coated nail in water and air.',
      'Leave them for a week and look for rust.',
    ],
    level: 'Easy',
    options: RUST.map((x) => x.name),
    optionsLabel: 'Test tube',
    control: null,
    def: 0,
    slider: { label: 'Days left', min: 0, max: 7, step: 1, def: 4, unit: 'days', marks: ['Day 0', 'Day 3', 'Day 7'] },
    model(r, d) {
      const x = RUST[r];
      const rustA = Math.min(1, d / 5);
      const rustB = Math.min(1, (x.rate * d) / 5);
      const word = (v) => (v > 0.6 ? 'Lots of rust' : v > 0.05 ? 'Some rust' : 'No rust');
      return {
        A: {
          head: 'Air and water (control)',
          dot: 'secondary',
          view: live('rust-tube', { water: 0.45, rust: rustA }, 140),
          metrics: [['After this time', word(rustA), rustA > 0.05 ? 'error' : 'on-surface']],
        },
        B: {
          head: x.name,
          dot: rustB > 0.05 ? 'error' : 'secondary',
          view: live('rust-tube', { ...x.state, rust: rustB }, 140),
          metrics: [['After this time', word(rustB), rustB > 0.05 ? 'error' : 'secondary']],
        },
      };
    },
    record(r, d) {
      const x = RUST[r];
      return {
        title: `Rusting: ${x.name.toLowerCase()}`,
        observation: `After ${d} days the control nail in air and water ${d >= 1 ? 'had rusted' : 'had not yet rusted'}; the nail in ${x.name.toLowerCase()} ${x.rate ? 'rusted even faster' : 'did not rust'}.`,
        conclusion: `${x.why} Iron rusts only when both oxygen and water are present.`,
        result: x.rate ? 'rusted faster' : 'no rust',
      };
    },
    tip: [
      ['Rust is ', null],
      ['hydrated iron(III) oxide', 'secondary'],
      ['. Boiling the water removes ', null],
      ['dissolved air', 'secondary'],
      ['; the oil stops air dissolving again.', null],
    ],
  },

  // ---------------------------------------------------------------- analysis
  {
    id: 'ch-flame-tests',
    unit: 'ch-analysis',
    units: ['ac-periodicity'],
    subjects: ['a-chemistry'],
    short: 'Flame tests',
    title: 'Flame tests for metal ions',
    desc: 'Hold six unknown salts in a blue Bunsen flame and identify the metal ion in each from the flame colour.',
    objective: 'Identify metal ions from the colours they give in a flame.',
    icon: 'local_fire_department',
    minutes: 15,
    diagram: 'flame-test',
    method: [
      'Clean a nichrome wire by dipping it in concentrated hydrochloric acid and holding it in a roaring blue flame until it gives no colour.',
      'Dip the wire in the acid again, then into the solid sample.',
      'Hold the sample at the edge of the blue flame and note the colour.',
      'Clean the wire again before the next sample.',
    ],
    level: 'Easy',
    options: ORDER_FLAME.map((_, i) => `Salt ${i + 1}`),
    optionsLabel: 'Unknown salt',
    control: null,
    def: 0,
    slider: { label: 'Time in the flame', min: 0, max: 3, step: 1, def: 2, unit: 's', marks: ['0 s', '1.5 s', '3 s'] },
    model(r, t) {
      const f = FLAME[ORDER_FLAME[r]];
      const on = t > 0;
      return {
        A: {
          head: 'Clean wire (control)',
          dot: 'secondary',
          view: live('flame-small', { colour: '#6a8fd8' }, 140),
          metrics: [['Flame', 'Blue: the wire is clean', 'on-surface']],
        },
        B: {
          head: `Salt ${r + 1}`,
          dot: 'tertiary',
          view: live('flame-small', { colour: on ? f.colour : '#6a8fd8' }, 140),
          metrics: [
            ['Flame colour', on ? f.name : 'Put it in the flame', on ? 'secondary' : 'on-surface'],
            ['Metal ion', on ? f.ion : '-', 'on-surface'],
          ],
        },
      };
    },
    record(r) {
      const f = FLAME[ORDER_FLAME[r]];
      return {
        title: `Flame test on salt ${r + 1}`,
        observation: `The flame turned ${f.name.toLowerCase()}.`,
        conclusion: `Salt ${r + 1} contains ${ionName(f.ion)} ions, ${f.ion.split(', ')[1]}.`,
        result: f.ion,
      };
    },
    tip: [
      ['Learn the colours: lithium ', null],
      ['red', 'secondary'],
      [', sodium yellow-orange, potassium lilac, calcium orange-red, barium light green, copper(II) blue-green. Always ', null],
      ['clean the wire', 'secondary'],
      [' first.', null],
    ],
  },
  {
    id: 'ch-cation-tests',
    unit: 'ch-analysis',
    units: ['ac-inorganic'],
    subjects: ['a-chemistry'],
    short: 'Tests for cations',
    title: 'Identifying metal ions with sodium hydroxide and ammonia',
    desc: 'Add sodium hydroxide and aqueous ammonia, a few drops and then in excess, to eight unknown solutions and identify the cation.',
    objective: 'Identify Al³⁺, NH₄⁺, Ca²⁺, Cr³⁺, Cu²⁺, Fe²⁺, Fe³⁺ and Zn²⁺ from the precipitates they form.',
    icon: 'science',
    minutes: 25,
    diagram: 'cation-tests',
    method: [
      'Put about 2 cm³ of the unknown solution into each of two test tubes.',
      'To the first, add aqueous sodium hydroxide a few drops at a time and note any precipitate and its colour.',
      'Keep adding sodium hydroxide until it is in excess and note whether the precipitate dissolves.',
      'Do the same with aqueous ammonia in the second tube.',
      'If there is no precipitate with sodium hydroxide, warm the tube and hold damp red litmus paper at the mouth.',
    ],
    level: 'Medium',
    options: ORDER_CATION.map((_, i) => `Solution ${String.fromCharCode(65 + i)}`),
    optionsLabel: 'Unknown solution',
    control: null,
    def: 0,
    slider: { label: 'Drops of reagent added', min: 0, max: 20, step: 1, def: 3, unit: 'drops', marks: ['0', '3 drops', '20 (excess)'] },
    model(r, d) {
      const c = CATIONS[ORDER_CATION[r]];
      const side = ([ppt, name, dissolves, colourAfter, after], head) => {
        const few = d > 0;
        const excess = d >= 12;
        const amount = !ppt || !few ? 0 : dissolves && excess ? Math.max(0, 1 - (d - 10) / 6) : Math.min(1, d / 3);
        const fill = dissolves && excess && colourAfter ? mixHex(c.fill, colourAfter, Math.min(1, (d - 10) / 6)) : c.fill;
        const said = !few
          ? `Solution: ${c.fill === '#f1f6fb' ? 'colourless' : 'coloured'}`
          : excess && dissolves
          ? `Precipitate dissolves: ${after}`
          : excess && ppt
          ? `${name}, stays in excess`
          : name;
        return {
          head,
          dot: ppt ? 'secondary' : 'tertiary',
          view: live('reagent-tube', { fill, ppt, amount }, 140),
          metrics: [['What you see', said, few ? 'secondary' : 'on-surface']],
        };
      };
      return { A: side(c.naoh, 'Sodium hydroxide'), B: side(c.nh3, 'Aqueous ammonia') };
    },
    record(r) {
      const c = CATIONS[ORDER_CATION[r]];
      const tell = ([ppt, name, dissolves, , after]) => (ppt ? `${name.toLowerCase()}${dissolves ? `, which dissolves in excess giving a ${after}` : ', insoluble in excess'}` : name.toLowerCase());
      const label = String.fromCharCode(65 + r);
      return {
        title: `Cation test on solution ${label}`,
        observation: `Sodium hydroxide: ${tell(c.naoh)}. Aqueous ammonia: ${tell(c.nh3)}.`,
        conclusion: `Solution ${label} contains ${ionName(c.ion)} ions, ${c.ion.split(', ')[1]}.`,
        result: c.ion,
      };
    },
    tip: [
      ['Give the ', null],
      ['colour of the precipitate', 'secondary'],
      [' and whether it is ', null],
      ['soluble in excess', 'secondary'],
      ['. Zinc and aluminium both give white precipitates with sodium hydroxide: ammonia tells them apart.', null],
    ],
  },
  {
    id: 'ch-anion-tests',
    unit: 'ch-analysis',
    units: ['ac-inorganic'],
    subjects: ['a-chemistry'],
    short: 'Tests for anions',
    title: 'Identifying anions: halides, sulfate, carbonate and nitrate',
    desc: 'Acidify six unknown salt solutions and add silver nitrate or barium nitrate to identify the anion in each.',
    objective: 'Identify Cl⁻, Br⁻, I⁻, SO₄²⁻, CO₃²⁻ and NO₃⁻ ions with their standard tests.',
    icon: 'science',
    minutes: 25,
    diagram: 'anion-tests',
    method: [
      'Carbonate: add dilute acid. Fizzing, with a gas that turns limewater milky, shows carbonate.',
      'Halides: acidify with dilute nitric acid, then add aqueous silver nitrate.',
      'Sulfate: acidify with dilute nitric acid, then add aqueous barium nitrate.',
      'Nitrate: warm with aqueous sodium hydroxide and aluminium foil; ammonia turns damp red litmus blue.',
      'The acid is added first to remove carbonate ions, which would also give a precipitate.',
    ],
    level: 'Medium',
    options: ORDER_ANION.map((_, i) => `Salt ${String.fromCharCode(80 + i)}`),
    optionsLabel: 'Unknown salt',
    control: null,
    def: 0,
    slider: { label: 'Drops of reagent added', min: 0, max: 10, step: 1, def: 4, unit: 'drops', marks: ['0', '5 drops', '10 drops'] },
    model(r, d) {
      const a = ANIONS[ORDER_ANION[r]];
      const side = ([ppt, name], head) => {
        const on = d > 0;
        return {
          head,
          dot: ppt ? 'secondary' : 'tertiary',
          view: live('reagent-tube', { ppt: on ? ppt : null, amount: Math.min(1, d / 4), fizz: a.fizz && on ? 0.8 : 0 }, 140),
          metrics: [['What you see', on ? name : 'Add the reagent', on && (ppt || a.fizz) ? 'secondary' : 'on-surface']],
        };
      };
      return { A: side(a.ag, 'Nitric acid + silver nitrate'), B: side(a.ba, 'Nitric acid + barium nitrate') };
    },
    record(r) {
      const a = ANIONS[ORDER_ANION[r]];
      const label = String.fromCharCode(80 + r);
      const nitrate = a.ion.startsWith('Nitrate');
      return {
        title: `Anion test on salt ${label}`,
        observation: `Silver nitrate: ${a.ag[1].toLowerCase()}. Barium nitrate: ${a.ba[1].toLowerCase()}.${nitrate ? ' Warmed with sodium hydroxide and aluminium: damp red litmus turned blue.' : ''}`,
        conclusion: `Salt ${label} contains ${ionName(a.ion)} ions, ${a.ion.split(', ')[1]}.`,
        result: a.ion,
      };
    },
    tip: [
      ['Always ', null],
      ['acidify first', 'secondary'],
      [' (nitric acid for both tests here). Silver halides: chloride ', null],
      ['white', 'secondary'],
      [', bromide cream, iodide yellow.', null],
    ],
  },
];
