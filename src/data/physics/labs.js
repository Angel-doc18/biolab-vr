// Physics practicals (Paper 3 / alternative to practical skills). Readings
// practicals give a table, a graph and a worked result; comparison practicals
// show a control beside the test. Values come from the physics with the small
// scatter real measurements have.
import { createElement as h } from 'react';
import { DiagramView } from '../../diagrams/Diagram';
import { APPARATUS_PHYS } from '../../diagrams/apparatusPhys';
import { fitLine } from '../../ui/Graph';

const jitter = (v, sd) => v + sd * (Math.random() + Math.random() + Math.random() - 1.5);
const live = (key, state, maxHeight = 220) => h(DiagramView, { spec: APPARATUS_PHYS[key], labels: false, state, maxHeight });
const to = (v, dp) => Number(v.toFixed(dp));
const rad = (d) => (d * Math.PI) / 180;
const dgr = (r) => (r * 180) / Math.PI;
const last = (list) => list?.[list.length - 1];

// ---------- measurement ----------
const G = 9.81;
const period = (lcm) => 2 * Math.PI * Math.sqrt(lcm / 100 / G);
const MATERIALS = [
  { name: 'Iron', rho: 7.87, colour: '#6f777e' },
  { name: 'Aluminium', rho: 2.7, colour: '#c0c7cd' },
  { name: 'Copper', rho: 8.96, colour: '#c87a4a' },
  { name: 'Glass', rho: 2.5, colour: '#cfe6f0' },
];
const TABLE = [
  ['Glass', 2.5],
  ['Aluminium', 2.7],
  ['Iron', 7.87],
  ['Brass', 8.5],
  ['Copper', 8.96],
  ['Lead', 11.3],
];

// ---------- forces and motion ----------
const K_SPRING = 2.0; // cm per newton up to the limit
const LIMIT = 6; // N
const extension = (L) => (L <= LIMIT ? L * K_SPRING : LIMIT * K_SPRING + (L - LIMIT) * K_SPRING + (L - LIMIT) ** 2 * 0.9);
const UNKNOWN_W = 3.0; // N
const A_RAMP = 0.8; // m/s²
const PULLEY_W = 1.0; // N, weight of the moving pulley

// ---------- thermal ----------
const BLOCKS = [
  { name: 'Aluminium block', c: 900, colour: '#c0c7cd' },
  { name: 'Copper block', c: 390, colour: '#c87a4a' },
  { name: 'Iron block', c: 450, colour: '#7d868f' },
];
const HEATER = 50; // W
const blockTemp = (t, o) => 20 + (HEATER * 0.92 * t) / (1.0 * BLOCKS[o].c);
const MP = 69; // stearic acid
const T1 = Math.log(65 / (MP - 25)) / 0.12;
const coolTemp = (t) => (t <= T1 ? 25 + 65 * Math.exp(-0.12 * t) : t <= T1 + 6 ? MP : 25 + (MP - 25) * Math.exp(-0.15 * (t - T1 - 6)));
const solidAt = (t) => (t <= T1 ? 0 : t <= T1 + 6 ? (t - T1) / 6 : 1);
const RODS = [
  { name: 'Aluminium', rate: 1.0, colour: '#c0c7cd' },
  { name: 'Brass', rate: 0.6, colour: '#d4b04a' },
  { name: 'Iron', rate: 0.35, colour: '#6f777e' },
  { name: 'Glass', rate: 0.02, colour: '#cfe6f0' },
];

// ---------- waves and light ----------
const RIPPLE = [
  { name: 'Into shallow water', kind: 'shallow', what: 'The waves slow down in shallow water, so the wavelength gets shorter. The frequency does not change. This is refraction.' },
  { name: 'Through a narrow gap', kind: 'narrow', what: 'The gap is about one wavelength wide, so the waves spread out in circles behind it. This is diffraction; it is strongest when the gap is about the size of the wavelength.' },
  { name: 'Through a wide gap', kind: 'wide', what: 'The gap is much wider than the wavelength, so the waves pass through almost straight, spreading only a little at the edges.' },
  { name: 'At a straight barrier', kind: 'barrier', what: 'The waves reflect. The angle of incidence equals the angle of reflection, and the wavelength and speed do not change.' },
];
const N_GLASS = 1.5;
const F_LENS = 15; // cm

// ---------- electricity ----------
const lampCurrent = (V) => 0.3 * (V / 6) ** 0.55;
const R_PER_CM = 0.135; // ohms per cm of nichrome wire, 0.32 mm diameter
const R_LAMP = 12;
const MOTIONS = [
  { name: 'Pushed in slowly', k: 0.3, what: 'A small deflection: the field through the coil changes slowly, so the induced current is small.' },
  { name: 'Pushed in quickly', k: 1, what: 'A large deflection: the faster the field changes, the larger the induced e.m.f. and current.' },
  { name: 'Held still inside', k: 0, what: 'No deflection: the field through the coil is not changing, so nothing is induced, even though the magnet is inside.' },
  { name: 'Pulled out quickly', k: -1, what: 'A large deflection the other way: removing the magnet changes the field in the opposite sense, so the current reverses.' },
  { name: 'South pole pushed in', k: -0.9, what: 'The deflection reverses: changing the pole reverses the direction of the induced current.' },
];

// ---------- atomic ----------
const HALF = 70; // s, protactinium-234
const BACKGROUND = 20;

export const LABS = [
  // ---------------------------------------------------------------- measurement
  {
    id: 'ph-pendulum',
    unit: 'ph-measure',
    units: ['ph-f5-kinematics'],
    kind: 'readings',
    short: 'Simple pendulum',
    title: 'The simple pendulum: finding g',
    desc: 'Time 20 swings for different lengths of thread, plot T² against length, and work out the acceleration of free fall.',
    objective: 'Find how the period of a pendulum depends on its length, and use the results to find the acceleration of free fall, g.',
    icon: 'timer',
    minutes: 30,
    diagram: 'pendulum-apparatus',
    method: [
      'Clamp the thread between two halves of a split cork so it swings from a fixed point.',
      'Measure the length l from the point of suspension to the centre of the bob.',
      'Pull the bob aside through a small angle (less than 10°) and release it.',
      'Time 20 complete swings, starting and stopping as the bob passes the fiducial mark. Repeat and take the mean.',
      'Period T = time for 20 swings ÷ 20. Repeat for other lengths.',
      'Plot T² against l. The gradient is 4π² ÷ g.',
    ],
    input: { label: 'Length of the pendulum', unit: 'cm', min: 20, max: 100, step: 10, def: 50 },
    view: (l, o, mine) => {
      const r = last(mine);
      return live('pendulum-apparatus', { len: l, angle: 8, reading: r ? `T = ${r.T.toFixed(2)} s` : `l = ${l} cm` });
    },
    measure: (l) => {
      const t20 = to(jitter(20 * period(l), 0.15), 1);
      const T = t20 / 20;
      return { t20, T: to(T, 3), T2: to(T * T, 3) };
    },
    columns: [
      { key: 'x', label: 'l / cm', dp: 0 },
      { key: 't20', label: '20 swings / s', dp: 1 },
      { key: 'T', label: 'T / s', dp: 2 },
      { key: 'T2', label: 'T² / s²', dp: 2 },
    ],
    plot: { x: 'x', y: 'T2', xLabel: 'Length l / cm', yLabel: 'T² / s²', fit: 'origin' },
    minReadings: 5,
    say: (r) => `Length ${r.x} centimetres: 20 swings took ${r.t20.toFixed(1)} seconds, so the period is ${r.T.toFixed(2)} seconds.`,
    analyse(rows, o) {
      const list = rows[o] || [];
      const fit = fitLine(list.map((q) => ({ x: q.x, y: q.T2 })), true);
      const g = fit ? (4 * Math.PI ** 2) / (fit.m * 100) : null;
      return {
        lines: [
          'T² rises in proportion to l: the graph is a straight line through the origin.',
          `Gradient = ${fit ? fit.m.toFixed(4) : '-'} s² per cm, which is ${fit ? (fit.m * 100).toFixed(3) : '-'} s² per m.`,
          `g = 4π² ÷ gradient = ${g ? g.toFixed(2) : '-'} m/s².`,
        ],
        result: g ? `g = ${g.toFixed(1)} m/s²` : '',
        conclusion: `The period depends on the length (T² ∝ l), not on the mass of the bob. Your value of g is ${g ? g.toFixed(1) : '-'} m/s²; the accepted value is 9.8 m/s². Timing 20 swings makes your reaction time a small part of the total.`,
      };
    },
    tip: [
      ['Time ', null],
      ['20 swings', 'secondary'],
      [', not one, and measure l to the ', null],
      ['centre of the bob', 'secondary'],
      ['. Keep the angle small.', null],
    ],
  },
  {
    id: 'ph-density',
    unit: 'ph-f3-density',
    units: ['ph-f1-measure', 'ph-f2-method'],
    kind: 'readings',
    short: 'Density',
    title: 'Density of solids: identifying the material',
    desc: 'Weigh samples on a balance, find their volume by displacement, and identify the material from its density.',
    objective: 'Measure the density of a solid and use it to identify what the solid is made of.',
    icon: 'scale',
    minutes: 20,
    diagram: 'density-apparatus',
    method: [
      'Zero the balance, then find the mass of the sample.',
      'Half fill a measuring cylinder with water and read the volume at the bottom of the meniscus, at eye level.',
      'Tie the sample to a thread and lower it gently into the water so no water splashes out.',
      'Read the new volume. The rise in the level is the volume of the sample.',
      'Density = mass ÷ volume. Repeat with other pieces of the same material.',
    ],
    options: MATERIALS.map((_, i) => `Sample ${String.fromCharCode(65 + i)}`),
    optionsLabel: 'Unknown material',
    def: 0,
    view: (n, o, mine) => {
      const r = last(mine);
      return live('density-apparatus', { vol: r ? r.vol : 0, mass: r ? r.mass : 0, colour: MATERIALS[o].colour });
    },
    measure: (n, o) => {
      const vol = to(6 + Math.random() * 24, 1);
      const mass = to(jitter(vol * MATERIALS[o].rho, 0.3), 1);
      return { vol, mass, rho: to(mass / vol, 2) };
    },
    columns: [
      { key: 'x', label: 'Piece', dp: 0 },
      { key: 'mass', label: 'Mass / g', dp: 1 },
      { key: 'vol', label: 'Volume / cm³', dp: 1 },
      { key: 'rho', label: 'Density / g/cm³', dp: 2 },
    ],
    plot: { x: 'vol', y: 'mass', xLabel: 'Volume / cm³', yLabel: 'Mass / g', fit: 'origin' },
    minReadings: 3,
    action: 'Measure a piece',
    say: (r) => `Mass ${r.mass.toFixed(1)} grams, volume ${r.vol.toFixed(1)} cm³, density ${r.rho.toFixed(2)} grams per cm³.`,
    analyse(rows, o) {
      const list = rows[o] || [];
      const mean = list.reduce((a, q) => a + q.rho, 0) / list.length;
      const match = TABLE.reduce((a, b) => (Math.abs(b[1] - mean) < Math.abs(a[1] - mean) ? b : a));
      return {
        lines: [`Mean density = ${mean.toFixed(2)} g/cm³ = ${(mean * 1000).toFixed(0)} kg/m³.`, 'Mass against volume is a straight line through the origin: its gradient is the density.', `The closest value in the table is ${match[0]}, ${match[1]} g/cm³.`],
        result: `${mean.toFixed(2)} g/cm³: ${match[0].toLowerCase()}`,
        conclusion: `Every piece of the same material has the same density whatever its size. Sample ${String.fromCharCode(65 + Number(o))} is most likely ${match[0].toLowerCase()}.`,
      };
    },
    tip: [
      ['Volume by displacement = ', null],
      ['final reading − initial reading', 'secondary'],
      ['. Give density with its unit, g/cm³ or kg/m³ (× 1000).', null],
    ],
  },

  // ---------------------------------------------------------------- forces
  {
    id: 'ph-hooke',
    unit: 'ph-f3-elastic',
    kind: 'readings',
    short: 'Hooke’s law',
    title: 'Stretching a spring: Hooke’s law',
    desc: 'Add loads to a spring, measure the extension, find the spring constant and the limit of proportionality.',
    objective: 'Find how the extension of a spring depends on the load, the spring constant k, and the limit of proportionality.',
    icon: 'straighten',
    minutes: 20,
    diagram: 'hooke-apparatus',
    method: [
      'Hang the spring from a clamp next to a vertical metre rule. Fix a pointer to the bottom of the spring.',
      'Read the position of the pointer with no load, at eye level.',
      'Add 1 N loads one at a time and record the pointer position after each.',
      'Extension = new reading − original reading.',
      'Plot extension against load. Check the spring returns to its original length when unloaded.',
    ],
    input: { label: 'Load on the spring', unit: 'N', min: 0, max: 9, step: 1, def: 2 },
    view: (L) => live('hooke-apparatus', { load: L, ext: extension(L) }),
    measure: (L) => ({ ext: L === 0 ? 0 : to(Math.max(0, jitter(extension(L), 0.08)), 1) }),
    columns: [
      { key: 'x', label: 'Load / N', dp: 0 },
      { key: 'ext', label: 'Extension / cm', dp: 1 },
    ],
    plot: { x: 'x', y: 'ext', xLabel: 'Load / N', yLabel: 'Extension / cm' },
    minReadings: 6,
    say: (r) => `Load ${r.x} newtons: extension ${r.ext.toFixed(1)} centimetres.`,
    analyse(rows, o) {
      const list = [...(rows[o] || [])].sort((a, b) => a.x - b.x);
      const low = list.filter((q) => q.x <= 4);
      const fit = fitLine(low.map((q) => ({ x: q.x, y: q.ext })), true);
      const offAt = fit ? list.findIndex((q) => q.x > 0 && Math.abs(q.ext - fit.m * q.x) > 0.03 * fit.m * q.x + 0.25) : -1;
      const lastStraight = offAt > 0 ? list[offAt - 1].x : null;
      const k = fit ? 1 / (fit.m / 100) : null;
      return {
        lines: [
          `Up to the limit, extension rises by ${fit ? fit.m.toFixed(2) : '-'} cm for each newton.`,
          `Spring constant k = force ÷ extension = 1 ÷ ${fit ? (fit.m / 100).toFixed(4) : '-'} m = ${k ? k.toFixed(0) : '-'} N/m.`,
          lastStraight != null ? `The points leave the straight line after about ${lastStraight} N: that is the limit of proportionality.` : 'All your points lie on the straight line: add bigger loads to find the limit of proportionality.',
        ],
        result: k ? `k = ${k.toFixed(0)} N/m` : '',
        conclusion: 'Extension is proportional to load (Hooke’s law) up to the limit of proportionality. Beyond it the graph curves and the spring may not return to its original length.',
      };
    },
    tip: [
      ['Extension is the ', null],
      ['increase in length', 'secondary'],
      [', not the total length. Read the pointer at ', null],
      ['eye level', 'secondary'],
      [' to avoid parallax.', null],
    ],
  },
  {
    id: 'ph-moments',
    unit: 'ph-forces',
    units: ['ph-f1-tech'],
    kind: 'readings',
    short: 'Principle of moments',
    title: 'The principle of moments: weighing an unknown object',
    desc: 'Balance an unknown object against a known 2.0 N weight on a metre rule and use moments to find its weight.',
    objective: 'Use the principle of moments to find the weight of an unknown object.',
    icon: 'balance',
    minutes: 20,
    diagram: 'moments-apparatus',
    method: [
      'Balance the metre rule on a knife edge at its centre, the 50 cm mark.',
      'Hang the 2.0 N weight at a measured distance x on one side of the pivot.',
      'Move the unknown object on the other side until the rule balances again. Record its distance y.',
      'Repeat for several values of x.',
      'At balance, 2.0 × x = W × y, so W = 2.0 x ÷ y.',
    ],
    input: { label: 'Distance of the 2.0 N weight from the pivot', unit: 'cm', min: 10, max: 45, step: 5, def: 30 },
    view: (x) => live('moments-apparatus', { x, y: (2 * x) / UNKNOWN_W }),
    measure: (x) => ({ y: to(jitter((2 * x) / UNKNOWN_W, 0.25), 1) }),
    columns: [
      { key: 'x', label: 'x (2.0 N) / cm', dp: 0 },
      { key: 'y', label: 'y (object) / cm', dp: 1 },
    ],
    plot: { x: 'x', y: 'y', xLabel: 'x / cm', yLabel: 'y / cm', fit: 'origin' },
    minReadings: 5,
    say: (r) => `With the 2 newton weight at ${r.x} centimetres, the object balances at ${r.y.toFixed(1)} centimetres.`,
    analyse(rows, o) {
      const list = rows[o] || [];
      const fit = fitLine(list.map((q) => ({ x: q.x, y: q.y })), true);
      const W = fit ? 2 / fit.m : null;
      return {
        lines: [`y is proportional to x: gradient = ${fit ? fit.m.toFixed(3) : '-'}.`, `At balance 2.0 × x = W × y, so W = 2.0 ÷ gradient = ${W ? W.toFixed(2) : '-'} N.`, `Mass = W ÷ g = ${W ? (W / 10).toFixed(2) : '-'} kg.`],
        result: W ? `W = ${W.toFixed(2)} N` : '',
        conclusion: 'At balance the clockwise moment equals the anticlockwise moment. Using many readings and the gradient of the graph gives a more reliable weight than a single balance.',
      };
    },
    tip: [
      ['Measure distances from the ', null],
      ['pivot', 'secondary'],
      [', not from the end of the rule. Balancing at 50 cm means the rule’s own weight has ', null],
      ['no moment', 'secondary'],
      ['.', null],
    ],
  },

  // ---------------------------------------------------------------- motion
  {
    id: 'ph-ramp',
    unit: 'ph-f5-kinematics',
    kind: 'readings',
    short: 'Acceleration down a ramp',
    title: 'Acceleration of a trolley down a ramp',
    desc: 'Time a trolley from rest over different distances, plot distance against time squared, and find its acceleration.',
    objective: 'Show that a trolley rolling down a slope accelerates uniformly and measure its acceleration.',
    icon: 'speed',
    minutes: 25,
    diagram: 'ramp-apparatus',
    method: [
      'Raise one end of the ramp on a block so the trolley runs down by itself.',
      'Release the trolley from rest at the start line; do not push it.',
      'Use the light gates and timer to measure the time t to travel a distance d.',
      'Repeat each distance three times and take the mean time.',
      'Plot d against t². For uniform acceleration from rest, d = ½at², so a = 2 × gradient.',
    ],
    input: { label: 'Distance travelled from rest', unit: 'cm', min: 20, max: 100, step: 10, def: 50 },
    view: (d, o, mine) => {
      const r = last(mine);
      return live('ramp-apparatus', { d, pos: Math.min(d, 60), reading: r ? `${r.t.toFixed(2)} s` : `${d} cm` });
    },
    measure: (d) => {
      const t = to(jitter(Math.sqrt((2 * d) / 100 / A_RAMP), 0.012), 2);
      return { t, t2: to(t * t, 3) };
    },
    columns: [
      { key: 'x', label: 'd / cm', dp: 0 },
      { key: 't', label: 't / s', dp: 2 },
      { key: 't2', label: 't² / s²', dp: 3 },
    ],
    plot: { x: 't2', y: 'x', xLabel: 't² / s²', yLabel: 'Distance d / cm', fit: 'origin' },
    minReadings: 5,
    say: (r) => `${r.x} centimetres took ${r.t.toFixed(2)} seconds.`,
    analyse(rows, o) {
      const list = rows[o] || [];
      const fit = fitLine(list.map((q) => ({ x: q.t2, y: q.x })), true);
      const a = fit ? (2 * fit.m) / 100 : null;
      return {
        lines: ['d against t² is a straight line through the origin, so the acceleration is constant.', `Gradient = ${fit ? fit.m.toFixed(1) : '-'} cm/s².`, `a = 2 × gradient = ${a ? a.toFixed(2) : '-'} m/s².`],
        result: a ? `a = ${a.toFixed(2)} m/s²` : '',
        conclusion: 'The trolley accelerates uniformly because a constant resultant force (a part of its weight down the slope, minus friction) acts on it. A steeper ramp gives a larger acceleration.',
      };
    },
    tip: [
      ['Release from ', null],
      ['rest', 'secondary'],
      [' every time. Plot d against ', null],
      ['t²', 'secondary'],
      [', not t, to get a straight line.', null],
    ],
  },

  // ---------------------------------------------------------------- energy
  {
    id: 'ph-pulley',
    unit: 'ph-energy',
    kind: 'readings',
    short: 'Efficiency of a pulley',
    title: 'Mechanical advantage and efficiency of a pulley system',
    desc: 'Measure the effort needed to lift different loads and work out the mechanical advantage and efficiency.',
    objective: 'Find how the mechanical advantage and efficiency of a pulley system change with the load.',
    icon: 'settings',
    minutes: 20,
    diagram: 'pulley-apparatus',
    method: [
      'Set up a fixed pulley and a moving pulley as shown. The velocity ratio is 2.',
      'Hang a load from the moving pulley.',
      'Pull the free end with a spring balance so the load rises slowly at a steady speed. Read the effort.',
      'Repeat for larger loads.',
      'Mechanical advantage = load ÷ effort. Efficiency = MA ÷ VR × 100%.',
    ],
    input: { label: 'Load', unit: 'N', min: 2, max: 14, step: 2, def: 4 },
    view: (L, o, mine) => {
      const r = last(mine);
      return live('pulley-apparatus', { load: L, reading: r ? `${r.effort.toFixed(1)} N` : '' });
    },
    measure: (L) => {
      const effort = to(jitter((L + PULLEY_W) / 2 + 0.3, 0.05), 2);
      const ma = L / effort;
      return { effort, ma: to(ma, 2), eff: to((ma / 2) * 100, 0) };
    },
    columns: [
      { key: 'x', label: 'Load / N', dp: 0 },
      { key: 'effort', label: 'Effort / N', dp: 2 },
      { key: 'ma', label: 'MA', dp: 2 },
      { key: 'eff', label: 'Efficiency / %', dp: 0 },
    ],
    plot: { x: 'x', y: 'eff', xLabel: 'Load / N', yLabel: 'Efficiency / %', curve: true },
    minReadings: 5,
    say: (r) => `A load of ${r.x} newtons needs an effort of ${r.effort.toFixed(1)} newtons. Efficiency ${r.eff} percent.`,
    analyse(rows, o) {
      const list = [...(rows[o] || [])].sort((a, b) => a.x - b.x);
      const lo = list[0];
      const hi = list[list.length - 1];
      return {
        lines: [`At ${lo.x} N the efficiency is ${lo.eff}%; at ${hi.x} N it is ${hi.eff}%.`, 'The velocity ratio stays 2, but the mechanical advantage rises towards 2 as the load increases.'],
        result: `${lo.eff}% to ${hi.eff}%`,
        conclusion: 'Efficiency is always below 100% because some of the work done goes into lifting the moving pulley and overcoming friction. With heavier loads these become a smaller fraction of the work, so the efficiency rises.',
      };
    },
    tip: [
      ['Efficiency = ', null],
      ['MA ÷ VR × 100%', 'secondary'],
      ['. Give two reasons it is less than 100%: ', null],
      ['friction and the weight of the moving pulley', 'secondary'],
      ['.', null],
    ],
  },

  // ---------------------------------------------------------------- pressure
  {
    id: 'ph-boyle',
    unit: 'ph-pressure',
    kind: 'readings',
    short: 'Boyle’s law',
    title: 'Boyle’s law: pressure and volume of a gas',
    desc: 'Pump oil to squeeze a trapped column of air, read its volume and pressure, and show that pV is constant.',
    objective: 'Find how the volume of a fixed mass of gas depends on its pressure at constant temperature.',
    icon: 'compress',
    minutes: 20,
    diagram: 'boyle-apparatus',
    method: [
      'Trap a column of air above oil in a sealed glass tube with a scale.',
      'Pump oil up the tube slowly to raise the pressure on the air.',
      'Wait a minute for the air to return to room temperature, then read the pressure gauge and the volume.',
      'Repeat at several pressures.',
      'Plot p against 1/V. A straight line through the origin shows p ∝ 1/V.',
    ],
    input: { label: 'Pressure on the gauge', unit: 'kPa', min: 100, max: 300, step: 25, def: 150 },
    view: (p) => live('boyle-apparatus', { vol: 4000 / p, p }),
    measure: (p) => {
      const vol = to(jitter(4000 / p, 0.25), 1);
      return { vol, inv: to(1 / vol, 4), pv: to(p * vol, 0) };
    },
    columns: [
      { key: 'x', label: 'p / kPa', dp: 0 },
      { key: 'vol', label: 'V / cm³', dp: 1 },
      { key: 'inv', label: '1/V / cm⁻³', dp: 4 },
      { key: 'pv', label: 'pV', dp: 0 },
    ],
    plot: { x: 'inv', y: 'x', xLabel: '1/V / cm⁻³', yLabel: 'Pressure / kPa', fit: 'origin' },
    minReadings: 5,
    say: (r) => `At ${r.x} kilopascals the volume is ${r.vol.toFixed(1)} cm³.`,
    analyse(rows, o) {
      const list = rows[o] || [];
      const mean = list.reduce((a, q) => a + q.pv, 0) / list.length;
      const spread = Math.max(...list.map((q) => Math.abs(q.pv - mean))) / mean;
      return {
        lines: [`pV stays close to ${mean.toFixed(0)} kPa cm³ (within ${(spread * 100).toFixed(1)}%).`, 'p against 1/V is a straight line through the origin.'],
        result: `pV ≈ ${mean.toFixed(0)}`,
        conclusion: 'For a fixed mass of gas at constant temperature, pressure is inversely proportional to volume (Boyle’s law, pV = constant). Squeezing the gas makes its molecules hit the walls more often, raising the pressure.',
      };
    },
    tip: [
      ['Change the pressure ', null],
      ['slowly', 'secondary'],
      [' so the temperature stays constant. Plot p against ', null],
      ['1/V', 'secondary'],
      [' for a straight line.', null],
    ],
  },

  // ---------------------------------------------------------------- thermal
  {
    id: 'ph-shc',
    unit: 'ph-thermal',
    kind: 'readings',
    short: 'Specific heat capacity',
    title: 'Specific heat capacity of a metal block',
    desc: 'Heat a 1 kg block with a 50 W heater, follow its temperature, and calculate its specific heat capacity.',
    objective: 'Measure the specific heat capacity of a metal using an electric heater.',
    icon: 'local_fire_department',
    minutes: 25,
    diagram: 'shc-apparatus',
    method: [
      'Wrap the 1.0 kg block in insulation. Put the heater and a thermometer (with a drop of oil) into its holes.',
      'Record the starting temperature.',
      'Switch on the 50 W heater and start the stopwatch.',
      'Record the temperature every minute for 10 minutes.',
      'Energy supplied = power × time. c = energy ÷ (mass × temperature rise).',
    ],
    options: BLOCKS.map((b) => b.name),
    optionsLabel: 'Block',
    def: 0,
    input: { label: 'Time since switching on', unit: 's', min: 0, max: 600, step: 60, def: 120 },
    view: (t, o) => live('shc-apparatus', { temp: blockTemp(t, o), time: `${t} s`, colour: BLOCKS[o].colour }),
    measure: (t, o) => ({ temp: to(jitter(blockTemp(t, o), 0.1), 1) }),
    columns: [
      { key: 'x', label: 'Time / s', dp: 0 },
      { key: 'temp', label: 'Temperature / °C', dp: 1 },
    ],
    plot: { x: 'x', y: 'temp', xLabel: 'Time / s', yLabel: 'Temperature / °C', fit: 'line' },
    minReadings: 5,
    say: (r) => `After ${r.x} seconds the block is at ${r.temp.toFixed(1)} degrees Celsius.`,
    analyse(rows, o) {
      const list = rows[o] || [];
      const fit = fitLine(list.map((q) => ({ x: q.x, y: q.temp })));
      const c = fit ? HEATER / (1.0 * fit.m) : null;
      return {
        lines: [`The temperature rises steadily: ${fit ? (fit.m * 60).toFixed(2) : '-'} °C per minute.`, `c = P ÷ (m × rate of rise) = 50 ÷ (1.0 × ${fit ? fit.m.toFixed(4) : '-'}) = ${c ? c.toFixed(0) : '-'} J/(kg °C).`, `The data book value for ${BLOCKS[o].name.split(' ')[0].toLowerCase()} is ${BLOCKS[o].c} J/(kg °C).`],
        result: c ? `${c.toFixed(0)} J/(kg °C)` : '',
        conclusion: 'Your value is a little higher than the data book value because some of the heater’s energy is lost to the surroundings instead of warming the block. Better insulation and a lid reduce the loss.',
      };
    },
    tip: [
      ['Energy = ', null],
      ['power × time', 'secondary'],
      ['. Explain why the measured c is ', null],
      ['too high', 'secondary'],
      [': heat lost to the surroundings.', null],
    ],
  },
  {
    id: 'ph-cooling',
    unit: 'ph-thermal',
    units: ['ph-f2-heatstate'],
    kind: 'readings',
    short: 'Cooling curve',
    title: 'Cooling curve: finding a melting point',
    desc: 'Let melted stearic acid cool, record its temperature every minute, and find its melting point from the flat part of the graph.',
    objective: 'Plot a cooling curve and use it to find the melting point of a substance.',
    icon: 'ac_unit',
    minutes: 20,
    diagram: 'cooling-apparatus',
    method: [
      'Melt the stearic acid in a boiling tube in a hot water bath until it reaches about 90 °C.',
      'Move the tube into an empty beaker so it cools slowly and evenly.',
      'Stir gently with the thermometer and record the temperature every minute.',
      'Continue until the solid has cooled well below its melting point.',
      'Plot temperature against time. The flat part shows the melting point.',
    ],
    input: { label: 'Time since removing from the bath', unit: 'min', min: 0, max: 15, step: 1, def: 2 },
    view: (t) => live('cooling-apparatus', { temp: coolTemp(t), solid: solidAt(t) }),
    measure: (t) => ({ temp: to(jitter(coolTemp(t), 0.15), 1) }),
    columns: [
      { key: 'x', label: 'Time / min', dp: 0 },
      { key: 'temp', label: 'Temperature / °C', dp: 1 },
    ],
    plot: { x: 'x', y: 'temp', xLabel: 'Time / min', yLabel: 'Temperature / °C', curve: true },
    minReadings: 10,
    say: (r) => `After ${r.x} minutes: ${r.temp.toFixed(1)} degrees Celsius.`,
    analyse(rows, o) {
      const list = [...(rows[o] || [])].sort((a, b) => a.x - b.x);
      let best = [];
      for (let i = 0; i < list.length; i++) {
        const run = [list[i]];
        for (let j = i + 1; j < list.length && Math.abs(list[j].temp - list[i].temp) <= 0.6; j++) run.push(list[j]);
        if (run.length > best.length) best = run;
      }
      const mp = best.length >= 2 ? best.reduce((a, q) => a + q.temp, 0) / best.length : null;
      return {
        lines: mp ? [`The temperature stays at about ${mp.toFixed(1)} °C from ${best[0].x} to ${best[best.length - 1].x} minutes.`, 'That flat part is where the liquid is turning into solid.'] : ['No flat part yet: take readings every minute right through the change of state.'],
        result: mp ? `melting point ${mp.toFixed(0)} °C` : 'no plateau yet',
        conclusion: mp
          ? `The melting point of stearic acid is about ${mp.toFixed(0)} °C. While it solidifies, the temperature stays constant because energy (latent heat) is released as bonds form between the molecules, balancing the heat lost to the room.`
          : 'Keep recording: the temperature levels off while the liquid freezes.',
      };
    },
    tip: [
      ['The melting point is the temperature of the ', null],
      ['flat part', 'secondary'],
      ['. Explain it with ', null],
      ['latent heat', 'secondary'],
      [', not “the heat stops”.', null],
    ],
  },
  {
    id: 'ph-conduction',
    unit: 'ph-thermal',
    units: ['ph-f1-insulation', 'ph-f1-heatflow', 'ph-f2-materials'],
    short: 'Conduction in rods',
    title: 'Which materials conduct heat best?',
    desc: 'Heat one end of rods of different materials with wax pins along them and compare how fast the pins fall off.',
    objective: 'Compare how well different materials conduct heat.',
    icon: 'thermostat',
    minutes: 15,
    diagram: 'heat-transfer',
    method: [
      'Fix small balls of wax at equal distances along rods of the same length and thickness.',
      'Heat the ends of the rods equally, for example in the same hot water or flame.',
      'Watch the wax pins fall off as the wax melts.',
      'Count how many have fallen from each rod after the same time.',
    ],
    level: 'Easy',
    options: RODS.map((r) => r.name),
    optionsLabel: 'Rod',
    control: null,
    def: 0,
    slider: { label: 'Time heated', min: 0, max: 5, step: 1, def: 2, unit: 'min', marks: ['0 min', '2 min', '5 min'] },
    model(r, t) {
      const rod = RODS[r];
      const cu = Math.min(5, Math.floor(1.6 * t));
      const n = Math.min(5, Math.floor(rod.rate * t));
      return {
        A: { head: 'Copper (comparison)', dot: 'secondary', view: live('rod-small', { colour: '#c87a4a', fallen: cu }, 130), metrics: [['Wax pins fallen', `${cu} of 5`, 'on-surface']] },
        B: { head: rod.name, dot: n ? 'secondary' : 'tertiary', view: live('rod-small', { colour: rod.colour, fallen: n }, 130), metrics: [['Wax pins fallen', `${n} of 5`, n ? 'secondary' : 'on-surface']] },
      };
    },
    record(r, t) {
      const rod = RODS[r];
      return {
        title: `Conduction along ${rod.name.toLowerCase()}`,
        observation: `After ${t} min, ${Math.min(5, Math.floor(1.6 * t))} pins fell from copper and ${Math.min(5, Math.floor(rod.rate * t))} from ${rod.name.toLowerCase()}.`,
        conclusion:
          rod.name === 'Glass'
            ? 'Glass is a poor conductor (an insulator): it has no free electrons, so energy passes only slowly by vibrations of particles.'
            : `${rod.name} conducts heat, but less well than copper. Metals conduct well because their free electrons carry energy along the rod quickly. Order: copper, aluminium, brass, iron, then glass.`,
        result: `${Math.min(5, Math.floor(rod.rate * t))} pins`,
      };
    },
    tip: [
      ['Keep it a ', null],
      ['fair test', 'secondary'],
      [': same length, thickness and heating. Metals conduct well because of ', null],
      ['free electrons', 'secondary'],
      ['.', null],
    ],
  },

  // ---------------------------------------------------------------- waves and light
  {
    id: 'ph-ripple',
    unit: 'ph-waves',
    short: 'Ripple tank',
    title: 'Water waves in a ripple tank',
    desc: 'Watch plane waves refract into shallow water, diffract through gaps and reflect from a barrier.',
    objective: 'Observe reflection, refraction and diffraction of water waves.',
    icon: 'waves',
    minutes: 15,
    diagram: 'transverse-wave',
    method: [
      'Fill the ripple tank with water to a depth of about 1 cm and level it.',
      'Switch on the vibrating bar to make straight (plane) waves; use the lamp to see their shadows on paper below.',
      'Put a glass plate in the tank to make shallow water, then watch the waves cross it.',
      'Replace it with two barriers making a narrow gap, then a wide gap.',
      'Finally place a straight barrier at an angle to the waves.',
    ],
    level: 'Easy',
    options: RIPPLE.map((x) => x.name),
    optionsLabel: 'Set-up',
    control: null,
    def: 0,
    slider: { label: 'Frequency of the vibrator', min: 5, max: 20, step: 5, def: 10, unit: 'Hz', marks: ['5 Hz', '10 Hz', '20 Hz'] },
    model(r, f) {
      const x = RIPPLE[r];
      const lamDeep = 30 / f; // cm, waves at 30 cm/s
      const px = Math.max(5, lamDeep * 6);
      return {
        A: { head: 'Deep water, no obstacle', dot: 'secondary', view: live('ripple-small', { kind: 'plane', lam: px }, 130), metrics: [['Wavelength', `${lamDeep.toFixed(1)} cm`, 'on-surface'], ['Speed', '30 cm/s', 'on-surface']] },
        B: { head: x.name, dot: 'tertiary', view: live('ripple-small', { kind: x.kind, lam: px }, 130), metrics: [['Wavelength after', `${(x.kind === 'shallow' ? lamDeep * 0.6 : lamDeep).toFixed(1)} cm`, 'secondary'], ['What happens', x.kind === 'shallow' ? 'Refraction' : x.kind === 'barrier' ? 'Reflection' : 'Diffraction', 'secondary']] },
      };
    },
    record(r, f) {
      const x = RIPPLE[r];
      return {
        title: `Ripple tank: ${x.name.toLowerCase()}`,
        observation: `At ${f} Hz the wavelength in deep water was ${(30 / f).toFixed(1)} cm.`,
        conclusion: `${x.what} Speed = frequency × wavelength.`,
        result: x.kind === 'shallow' ? 'refraction' : x.kind === 'barrier' ? 'reflection' : 'diffraction',
      };
    },
    tip: [
      ['In refraction the ', null],
      ['frequency stays the same', 'secondary'],
      ['; speed and wavelength change together (v = fλ). Diffraction is greatest when the gap ≈ ', null],
      ['the wavelength', 'secondary'],
      ['.', null],
    ],
  },
  {
    id: 'ph-refraction',
    unit: 'ph-light',
    kind: 'readings',
    short: 'Refraction of light',
    title: 'Refraction through a glass block: refractive index',
    desc: 'Trace rays through a glass block at different angles of incidence and find the refractive index from sin i ÷ sin r.',
    objective: 'Measure angles of refraction for different angles of incidence and find the refractive index of glass.',
    icon: 'light_mode',
    minutes: 25,
    diagram: 'refraction-apparatus',
    method: [
      'Draw round the glass block on paper and draw a normal where the ray will enter.',
      'Shine a narrow ray from a ray box at the normal, at a measured angle of incidence i.',
      'Mark the ray coming out of the other side with two crosses, then remove the block.',
      'Join the entry and exit points to draw the refracted ray and measure the angle of refraction r.',
      'Repeat for other angles. Plot sin i against sin r; the gradient is the refractive index.',
    ],
    input: { label: 'Angle of incidence', unit: '°', min: 10, max: 70, step: 10, def: 40 },
    view: (i) => live('refraction-apparatus', { i, r: dgr(Math.asin(Math.sin(rad(i)) / N_GLASS)) }),
    measure: (i) => {
      const r = to(jitter(dgr(Math.asin(Math.sin(rad(i)) / N_GLASS)), 0.6), 0);
      return { r, sini: to(Math.sin(rad(i)), 3), sinr: to(Math.sin(rad(r)), 3) };
    },
    columns: [
      { key: 'x', label: 'i / °', dp: 0 },
      { key: 'r', label: 'r / °', dp: 0 },
      { key: 'sini', label: 'sin i', dp: 3 },
      { key: 'sinr', label: 'sin r', dp: 3 },
    ],
    plot: { x: 'sinr', y: 'sini', xLabel: 'sin r', yLabel: 'sin i', fit: 'origin' },
    minReadings: 5,
    say: (r) => `Angle of incidence ${r.x} degrees: angle of refraction ${r.r} degrees.`,
    analyse(rows, o) {
      const list = rows[o] || [];
      const fit = fitLine(list.map((q) => ({ x: q.sinr, y: q.sini })), true);
      return {
        lines: ['r is always smaller than i: the ray bends towards the normal entering glass.', `sin i against sin r is a straight line through the origin with gradient ${fit ? fit.m.toFixed(2) : '-'}.`],
        result: fit ? `n = ${fit.m.toFixed(2)}` : '',
        conclusion: `The refractive index of the glass is about ${fit ? fit.m.toFixed(2) : '-'} (n = sin i ÷ sin r). Light slows down in glass, so it bends towards the normal.`,
      };
    },
    tip: [
      ['Measure angles from the ', null],
      ['normal', 'secondary'],
      [', not from the surface. Use a sharp pencil and ', null],
      ['widely spaced crosses', 'secondary'],
      [' to draw rays accurately.', null],
    ],
  },
  {
    id: 'ph-lens',
    unit: 'ph-light',
    units: ['ph-f2-health'],
    kind: 'readings',
    short: 'Focal length of a lens',
    title: 'Focal length of a converging lens',
    desc: 'Find where a sharp image forms for different object distances and calculate the focal length.',
    objective: 'Find the focal length of a converging lens from object and image distances.',
    icon: 'center_focus_strong',
    minutes: 25,
    diagram: 'lens-apparatus',
    method: [
      'Place the illuminated object, the lens and a white screen in a line on a metre rule.',
      'Set the object distance u from the lens.',
      'Move the screen until the image on it is sharp. Measure the image distance v.',
      'Repeat for other values of u.',
      'Calculate 1/u and 1/v. Since 1/u + 1/v = 1/f, plot 1/v against 1/u; the intercepts are 1/f.',
    ],
    input: { label: 'Object distance u', unit: 'cm', min: 20, max: 60, step: 5, def: 30 },
    view: (u) => live('lens-apparatus', { u, v: (u * F_LENS) / (u - F_LENS), sharp: true }),
    measure: (u) => {
      const v = to(jitter((u * F_LENS) / (u - F_LENS), 0.3), 1);
      return { v, iu: to(1 / u, 4), iv: to(1 / v, 4) };
    },
    columns: [
      { key: 'x', label: 'u / cm', dp: 0 },
      { key: 'v', label: 'v / cm', dp: 1 },
      { key: 'iu', label: '1/u', dp: 4 },
      { key: 'iv', label: '1/v', dp: 4 },
    ],
    plot: { x: 'iu', y: 'iv', xLabel: '1/u / cm⁻¹', yLabel: '1/v / cm⁻¹', fit: 'line' },
    minReadings: 5,
    say: (r) => `Object at ${r.x} centimetres: a sharp image formed ${r.v.toFixed(1)} centimetres from the lens.`,
    analyse(rows, o) {
      const list = rows[o] || [];
      const fs = list.map((q) => (q.x * q.v) / (q.x + q.v));
      const f = fs.reduce((a, b) => a + b, 0) / fs.length;
      const fit = fitLine(list.map((q) => ({ x: q.iu, y: q.iv })));
      return {
        lines: [`f = uv ÷ (u + v) for each pair; the mean is ${f.toFixed(1)} cm.`, fit ? `From the graph, the 1/v intercept is ${fit.c.toFixed(4)} cm⁻¹, giving f = ${(1 / fit.c).toFixed(1)} cm.` : ''].filter(Boolean),
        result: `f = ${f.toFixed(1)} cm`,
        conclusion: `The focal length of the lens is about ${f.toFixed(0)} cm. As the object moves closer to the lens, the image moves further away and gets larger; at u = 2f the image is the same size as the object.`,
      };
    },
    tip: [
      ['Use the lens formula ', null],
      ['1/u + 1/v = 1/f', 'secondary'],
      ['. Move the screen back and forth to find the ', null],
      ['sharpest', 'secondary'],
      [' image.', null],
    ],
  },

  // ---------------------------------------------------------------- electricity
  {
    id: 'ph-ohm',
    unit: 'ph-electricity',
    kind: 'readings',
    short: 'Current and voltage',
    title: 'Current-voltage graphs: resistor and filament lamp',
    desc: 'Measure the current for different voltages across a fixed resistor and a filament lamp, and compare their graphs.',
    objective: 'Find how the current through a resistor and a filament lamp depends on the potential difference across it.',
    icon: 'electric_bolt',
    minutes: 25,
    diagram: 'ohm-apparatus',
    method: [
      'Connect the component in series with an ammeter and a variable resistor; connect a voltmeter in parallel with the component.',
      'Use the variable resistor to set the voltage across the component.',
      'Read the current and the voltage.',
      'Repeat for voltages up to 6 V, then for the other component.',
      'Plot current against voltage. Resistance R = V ÷ I.',
    ],
    options: ['Fixed resistor', 'Filament lamp'],
    optionsLabel: 'Component',
    def: 0,
    input: { label: 'Voltage across the component', unit: 'V', min: 0, max: 6, step: 1, def: 3 },
    view: (V, o) => live('ohm-apparatus', { V, I: o === 1 ? lampCurrent(V) : V / 10, lamp: o === 1 }),
    measure: (V, o) => {
      const I = V === 0 ? 0 : to(Math.max(0, jitter(o === 1 ? lampCurrent(V) : V / 10, 0.003)), 3);
      return { I, R: I > 0 ? to(V / I, 1) : '-' };
    },
    columns: [
      { key: 'x', label: 'V / V', dp: 1 },
      { key: 'I', label: 'I / A', dp: 3 },
      { key: 'R', label: 'R = V/I / Ω', dp: 1 },
    ],
    plot: { x: 'x', y: 'I', xLabel: 'Voltage / V', yLabel: 'Current / A', curve: true },
    minReadings: 5,
    say: (r) => `${r.x} volts: ${r.I.toFixed(3)} amps.`,
    analyse(rows) {
      const lines = [];
      if (rows[0]?.length) {
        const fit = fitLine(rows[0].map((q) => ({ x: q.x, y: q.I })), true);
        lines.push(`Resistor: a straight line through the origin; R = 1 ÷ gradient = ${fit ? (1 / fit.m).toFixed(1) : '-'} Ω at every voltage.`);
      }
      if (rows[1]?.length) {
        const rs = rows[1].filter((q) => typeof q.R === 'number');
        if (rs.length) lines.push(`Lamp: a curve; R rises from ${rs[0].R} Ω to ${rs[rs.length - 1].R} Ω as the voltage increases.`);
      }
      return {
        lines,
        result: lines.length > 1 ? 'resistor straight, lamp curved' : 'test both components',
        conclusion:
          'The fixed resistor obeys Ohm’s law: at constant temperature, current is proportional to voltage. The lamp’s filament gets hotter as the current rises; its metal ions vibrate more and the resistance increases, so its graph curves.',
      };
    },
    tip: [
      ['Ammeter in ', null],
      ['series', 'secondary'],
      [', voltmeter in ', null],
      ['parallel', 'secondary'],
      ['. Ohm’s law needs constant temperature.', null],
    ],
  },
  {
    id: 'ph-wire',
    unit: 'ph-electricity',
    kind: 'readings',
    short: 'Resistance and length',
    title: 'Resistance of a wire against its length',
    desc: 'Move a crocodile clip along a nichrome wire, measure V and I for each length, and show that resistance is proportional to length.',
    objective: 'Find how the resistance of a wire depends on its length.',
    icon: 'cable',
    minutes: 20,
    diagram: 'wire-apparatus',
    method: [
      'Tape the nichrome wire along a metre rule. Connect one end into a circuit with a cell and an ammeter.',
      'Connect the crocodile clip to the wire at a measured length.',
      'Connect a voltmeter across the length of wire in the circuit.',
      'Record the voltage and the current; R = V ÷ I.',
      'Repeat for other lengths. Switch off between readings so the wire does not get hot.',
    ],
    input: { label: 'Length of wire in the circuit', unit: 'cm', min: 10, max: 100, step: 10, def: 50 },
    view: (L) => live('wire-apparatus', { len: L }),
    measure: (L) => {
      const R = L * R_PER_CM;
      const I = 2 / (R + 1.5);
      const V = I * R;
      const Vm = to(jitter(V, 0.008), 2);
      const Im = to(jitter(I, 0.004), 2);
      return { V: Vm, I: Im, R: to(Vm / Im, 2) };
    },
    columns: [
      { key: 'x', label: 'Length / cm', dp: 0 },
      { key: 'V', label: 'V / V', dp: 2 },
      { key: 'I', label: 'I / A', dp: 2 },
      { key: 'R', label: 'R / Ω', dp: 2 },
    ],
    plot: { x: 'x', y: 'R', xLabel: 'Length / cm', yLabel: 'Resistance / Ω', fit: 'origin' },
    minReadings: 5,
    say: (r) => `${r.x} centimetres of wire: resistance ${r.R.toFixed(2)} ohms.`,
    analyse(rows, o) {
      const list = rows[o] || [];
      const fit = fitLine(list.map((q) => ({ x: q.x, y: q.R })), true);
      const rho = fit ? fit.m * 100 * Math.PI * 0.00016 ** 2 : null;
      return {
        lines: ['Resistance against length is a straight line through the origin.', `Resistance per centimetre = ${fit ? fit.m.toFixed(3) : '-'} Ω.`, rho ? `Resistivity = R × area ÷ length = ${(rho * 1e6).toFixed(2)} × 10⁻⁶ Ω m (wire 0.32 mm across).` : ''].filter(Boolean),
        result: fit ? `${fit.m.toFixed(3)} Ω per cm` : '',
        conclusion: 'The resistance of a wire is proportional to its length: doubling the length doubles the resistance, because electrons collide with more metal ions on the way. A thicker wire would have less resistance.',
      };
    },
    tip: [
      ['Switch off between readings so the wire stays ', null],
      ['cool', 'secondary'],
      ['; a hot wire has a higher resistance. R ∝ L and R ∝ 1/A.', null],
    ],
  },
  {
    id: 'ph-circuits',
    unit: 'ph-electricity',
    units: ['ph-f2-electricity'],
    short: 'Series and parallel',
    title: 'Lamps in series and in parallel',
    desc: 'Add identical lamps in series and in parallel and compare their brightness and the current from the cell.',
    objective: 'Compare the current and brightness of lamps connected in series and in parallel.',
    icon: 'lightbulb',
    minutes: 15,
    diagram: 'series-parallel',
    method: [
      'Connect one lamp to the supply with an ammeter and note its brightness and the current.',
      'Add a second identical lamp in series and note the brightness and current.',
      'Now connect the two lamps in parallel instead.',
      'Repeat with three lamps.',
      'Unscrew one lamp in each circuit and see what happens to the others.',
    ],
    level: 'Easy',
    options: ['1 lamp', '2 lamps', '3 lamps'],
    optionsLabel: 'Number of lamps',
    control: null,
    def: 1,
    slider: { label: 'Supply voltage', min: 1.5, max: 6, step: 1.5, def: 3, unit: 'V', marks: ['1.5 V', '3 V', '6 V'] },
    model(r, V) {
      const n = r + 1;
      const Is = V / (n * R_LAMP);
      const Ip = (n * V) / R_LAMP;
      const glowS = Math.min(1, (V / n / 6) ** 2 * 1.4);
      const glowP = Math.min(1, (V / 6) ** 2 * 1.4);
      return {
        A: { head: 'In series', dot: 'secondary', view: live('lamps-small', { n, mode: 'series', glow: glowS }, 130), metrics: [['Current from the cell', `${Is.toFixed(2)} A`, 'on-surface'], ['Each lamp', n > 1 ? 'Dimmer' : 'Normal', n > 1 ? 'error' : 'on-surface']] },
        B: { head: 'In parallel', dot: 'secondary', view: live('lamps-small', { n, mode: 'parallel', glow: glowP }, 130), metrics: [['Current from the cell', `${Ip.toFixed(2)} A`, 'on-surface'], ['Each lamp', 'Full brightness', 'secondary']] },
      };
    },
    record(r, V) {
      const n = r + 1;
      return {
        title: `${n} lamp${n > 1 ? 's' : ''} at ${V} V`,
        observation: `Series: ${(V / (n * R_LAMP)).toFixed(2)} A, lamps ${n > 1 ? 'dimmer' : 'normal'}. Parallel: ${((n * V) / R_LAMP).toFixed(2)} A, lamps at full brightness.`,
        conclusion:
          'In series the lamps share the supply voltage and the total resistance adds up, so the current falls and each lamp is dimmer; if one breaks, all go out. In parallel each lamp gets the full voltage, so each is as bright as one lamp alone, but the cell supplies more current and runs down faster; if one breaks, the others stay on.',
        result: n > 1 ? 'series dimmer, parallel bright' : 'one lamp',
      };
    },
    tip: [
      ['Series: ', null],
      ['same current', 'secondary'],
      [', voltage shared. Parallel: ', null],
      ['same voltage', 'secondary'],
      [', currents add up.', null],
    ],
  },

  // ---------------------------------------------------------------- magnetism
  {
    id: 'ph-induction',
    unit: 'ph-magnetism',
    short: 'Electromagnetic induction',
    title: 'Electromagnetic induction with a magnet and a coil',
    desc: 'Move a magnet in and out of a coil connected to a galvanometer and find what makes the induced current bigger.',
    objective: 'Find the factors that affect the size and direction of an induced current.',
    icon: 'cyclone',
    minutes: 15,
    diagram: 'magnetic-field',
    method: [
      'Connect a coil to a sensitive centre-zero galvanometer.',
      'Push the north pole of a bar magnet into the coil and watch the needle.',
      'Hold the magnet still inside the coil, then pull it out.',
      'Repeat faster, then with the south pole, then with a coil of more turns.',
      'Record the size and direction of each deflection.',
    ],
    level: 'Easy',
    options: MOTIONS.map((m) => m.name),
    optionsLabel: 'Magnet movement',
    control: null,
    def: 1,
    slider: { label: 'Turns on the coil', min: 50, max: 300, step: 50, def: 150, unit: 'turns', marks: ['50', '150', '300'] },
    model(r, n) {
      const m = MOTIONS[r];
      const defl = Math.max(-1, Math.min(1, (m.k * n) / 300));
      const div = Math.round(defl * 10);
      return {
        A: { head: 'Magnet still outside', dot: 'secondary', view: live('induction-small', { defl: 0, mx: 0 }, 130), metrics: [['Galvanometer', '0 divisions', 'on-surface']] },
        B: { head: m.name, dot: div ? 'secondary' : 'tertiary', view: live('induction-small', { defl, mx: r === 2 ? 1 : 0.6 }, 130), metrics: [['Galvanometer', `${div > 0 ? '+' : ''}${div} divisions`, div ? 'secondary' : 'on-surface']] },
      };
    },
    record(r, n) {
      const m = MOTIONS[r];
      return {
        title: `Induction: ${m.name.toLowerCase()}`,
        observation: `With ${n} turns the needle moved ${Math.round(((m.k * n) / 300) * 10)} divisions.`,
        conclusion: `${m.what} A current is induced only while the magnetic field through the coil is changing. More turns, a stronger magnet or faster movement give a bigger current.`,
        result: `${Math.round(((m.k * n) / 300) * 10)} divisions`,
      };
    },
    tip: [
      ['Say the field must be ', null],
      ['changing', 'secondary'],
      ['. The induced current opposes the change that makes it (Lenz’s law).', null],
    ],
  },

  // ---------------------------------------------------------------- atomic
  {
    id: 'ph-halflife',
    unit: 'ph-atomic',
    kind: 'readings',
    short: 'Half-life',
    title: 'Half-life of protactinium-234',
    desc: 'Record the count rate from a protactinium source every 20 seconds, correct for background, and find its half-life from the graph.',
    objective: 'Measure the half-life of a radioactive isotope from its decay curve.',
    icon: 'atr',
    minutes: 15,
    diagram: 'halflife-apparatus',
    method: [
      'Measure the background count rate with no source nearby.',
      'Shake the protactinium generator and stand it by the Geiger-Muller tube.',
      'Record the count rate every 20 seconds for 5 minutes.',
      'Subtract the background count rate from each reading.',
      'Plot the corrected count rate against time and find the time for it to halve.',
    ],
    input: { label: 'Time after shaking the source', unit: 's', min: 0, max: 300, step: 20, def: 0 },
    view: (t, o, mine) => {
      const r = last(mine);
      return live('halflife-apparatus', { reading: r ? `${r.count} counts/min` : 'ready' });
    },
    measure: (t) => {
      const n = 800 * 0.5 ** (t / HALF) + BACKGROUND;
      const count = Math.max(0, Math.round(jitter(n, Math.sqrt(n) * 0.7)));
      return { count, corr: Math.max(0, count - BACKGROUND) };
    },
    columns: [
      { key: 'x', label: 'Time / s', dp: 0 },
      { key: 'count', label: 'Count rate / min⁻¹', dp: 0 },
      { key: 'corr', label: 'Corrected / min⁻¹', dp: 0 },
    ],
    plot: { x: 'x', y: 'corr', xLabel: 'Time / s', yLabel: 'Corrected count rate / per min', curve: true },
    minReadings: 8,
    say: (r) => `After ${r.x} seconds: ${r.count} counts per minute.`,
    analyse(rows, o) {
      const list = [...(rows[o] || [])].sort((a, b) => a.x - b.x);
      const first = list[0];
      const half = first.corr / 2;
      let t = null;
      for (let i = 1; i < list.length; i++) {
        if (list[i].corr <= half) {
          const a = list[i - 1];
          const b = list[i];
          t = a.x + ((a.corr - half) / (a.corr - b.corr || 1)) * (b.x - a.x) - first.x;
          break;
        }
      }
      return {
        lines: [`Background count rate: ${BACKGROUND} per minute, subtracted from every reading.`, `Starting corrected rate ${first.corr} per minute; half of that is ${half.toFixed(0)}.`, t ? `It falls to ${half.toFixed(0)} after about ${t.toFixed(0)} s.` : 'Take readings for longer to see the rate halve.'],
        result: t ? `half-life ≈ ${t.toFixed(0)} s` : 'keep counting',
        conclusion: `The half-life of protactinium-234 is about ${t ? t.toFixed(0) : '70'} s: the time for the count rate (and the number of undecayed nuclei) to halve. Decay is random, so individual readings scatter; the curve through them gives the half-life.`,
      };
    },
    tip: [
      ['Always ', null],
      ['subtract the background', 'secondary'],
      [' count. Read the half-life from the graph at ', null],
      ['two or three places', 'secondary'],
      [' and take the mean.', null],
    ],
  },
];
