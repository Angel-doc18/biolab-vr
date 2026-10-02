// Procedural 3D models for the Chemistry units. Part keys match unit.vr.parts in
// src/data/chemistry/units.js; each part's anchor is where its label points.
import * as THREE from 'three';

const PI = Math.PI;
const range = (n, f) => Array.from({ length: n }, (_, i) => f(i));

const C = { O: '#e04848', H: '#f2f4f5', C: '#3b4650', N: '#3f6fd8', Na: '#8e6cc4', Cl: '#3fb06a', bond: '#b9c2ca', glass: '#cfe6f5' };
const atom = (p, r, c) => ({ g: 'sphere', a: [r, 20, 20], p, c });

// A cylinder from point a to point b (cylinders are built along the y axis).
const UP = new THREE.Vector3(0, 1, 0);
function bond(a, b, r = 0.045, c = C.bond, shift = [0, 0, 0]) {
  const A = new THREE.Vector3(...a);
  const B = new THREE.Vector3(...b);
  const dir = B.clone().sub(A);
  const len = dir.length();
  const e = new THREE.Euler().setFromQuaternion(new THREE.Quaternion().setFromUnitVectors(UP, dir.normalize()));
  const mid = A.add(B).multiplyScalar(0.5);
  return { g: 'cyl', a: [r, r, len, 12], p: [mid.x + shift[0], mid.y + shift[1], mid.z + shift[2]], r: [e.x, e.y, e.z], c };
}
const doubleBond = (a, b, gap = 0.06) => [bond(a, b, 0.03, C.bond, [0, gap, 0]), bond(a, b, 0.03, C.bond, [0, -gap, 0])];
const add = (p, q) => [p[0] + q[0], p[1] + q[1], p[2] + q[2]];

// ---------- molecules ----------
const TETRA = [
  [0, 1, 0],
  [0.943, -0.333, 0],
  [-0.471, -0.333, 0.816],
  [-0.471, -0.333, -0.816],
];
function methane(o, s = 0.5) {
  const hs = TETRA.map((d) => add(o, d.map((v) => v * s)));
  return [atom(o, 0.2, C.C), ...hs.map((h) => atom(h, 0.13, C.H)), ...hs.map((h) => bond(o, h))];
}
function water(o, s = 0.45) {
  const a = (104.5 / 2) * (PI / 180);
  const h1 = add(o, [-Math.sin(a) * s, -Math.cos(a) * s, 0]);
  const h2 = add(o, [Math.sin(a) * s, -Math.cos(a) * s, 0]);
  return [atom(o, 0.2, C.O), atom(h1, 0.13, C.H), atom(h2, 0.13, C.H), bond(o, h1), bond(o, h2)];
}
function co2(o, s = 0.5) {
  const l = add(o, [-s, 0, 0]);
  const r = add(o, [s, 0, 0]);
  return [atom(o, 0.19, C.C), atom(l, 0.2, C.O), atom(r, 0.2, C.O), ...doubleBond(o, l), ...doubleBond(o, r)];
}
function diatomic(o, c, r = 0.14, s = 0.32) {
  const a = add(o, [-s / 2, 0, 0]);
  const b = add(o, [s / 2, 0, 0]);
  return [atom(a, r, c), atom(b, r, c), bond(a, b, 0.04)];
}
function ammonia(o, s = 0.42) {
  const hs = range(3, (i) => add(o, [Math.cos((i * 2 * PI) / 3) * s * 0.94, -s * 0.38, Math.sin((i * 2 * PI) / 3) * s * 0.94]));
  return [atom(o, 0.19, C.N), ...hs.map((h) => atom(h, 0.12, C.H)), ...hs.map((h) => bond(o, h))];
}
// Two carbons along x with their hydrogens; `end` adds -OH on the second carbon.
function twoCarbon(o, { double = false, oh = false } = {}) {
  const c1 = add(o, [-0.28, 0, 0]);
  const c2 = add(o, [0.28, 0, 0]);
  const out = [atom(c1, 0.18, C.C), atom(c2, 0.18, C.C), ...(double ? doubleBond(c1, c2) : [bond(c1, c2)])];
  const hs1 = double ? [add(c1, [-0.3, 0.36, 0]), add(c1, [-0.3, -0.36, 0])] : [add(c1, [-0.3, 0.32, 0.18]), add(c1, [-0.3, -0.32, 0.18]), add(c1, [-0.12, 0, -0.42])];
  const hs2 = double ? [add(c2, [0.3, 0.36, 0]), add(c2, [0.3, -0.36, 0])] : oh ? [add(c2, [0.12, 0.32, 0.3]), add(c2, [0.12, -0.32, 0.3])] : [add(c2, [0.3, 0.32, 0.18]), add(c2, [0.3, -0.32, 0.18]), add(c2, [0.12, 0, -0.42])];
  for (const [c, hs] of [
    [c1, hs1],
    [c2, hs2],
  ])
    for (const h of hs) out.push(atom(h, 0.11, C.H), bond(c, h, 0.035));
  if (oh) {
    const ox = add(c2, [0.24, 0, -0.38]);
    const ho = add(ox, [0.36, 0.04, -0.1]);
    out.push(atom(ox, 0.17, C.O), bond(c2, ox, 0.04), atom(ho, 0.11, C.H), bond(ox, ho, 0.035));
  }
  return out;
}

// ---------- glassware ----------
function flask(o, liquid, h = 1.2, r = 0.55) {
  return [
    { g: 'cone', a: [r, h * 0.7, 32, 1, true], p: add(o, [0, h * 0.35, 0]), c: C.glass, o: 0.3 },
    { g: 'cyl', a: [r * 0.24, r * 0.24, h * 0.42, 24, 1, true], p: add(o, [0, h * 0.88, 0]), c: C.glass, o: 0.3 },
    { g: 'cone', a: [r * 0.92, h * 0.34, 32], p: add(o, [0, h * 0.17, 0]), c: liquid, o: 0.75 },
  ];
}
function tube(o, ppt, fill = '#e8f1f8') {
  return [
    { g: 'capsule', a: [0.13, 0.9, 8, 20], p: add(o, [0, 0.45, 0]), c: C.glass, o: 0.25 },
    { g: 'capsule', a: [0.115, 0.35, 8, 20], p: add(o, [0, 0.2, 0]), c: fill, o: 0.6 },
    { g: 'sphere', a: [0.112, 16, 16], p: add(o, [0, 0.03, 0]), c: ppt },
    { g: 'cyl', a: [0.112, 0.112, 0.16, 16], p: add(o, [0, 0.1, 0]), c: ppt },
  ];
}

// Size arguments of each geometry that are lengths (the rest are segment counts).
const LENGTH_ARGS = { sphere: 1, box: 3, cyl: 3, cone: 2, torus: 2, capsule: 2 };
const scaleMesh = (m, k) => ({ ...m, p: (m.p || [0, 0, 0]).map((v) => v * k), a: m.a.map((v, i) => (i < LENGTH_ARGS[m.g] ? v * k : v)) });
// Shrinks a model so its widest point fits the viewer's frame (about 1.4 units
// from the centre), keeping the label anchors in step.
// Half-size of a mesh across (x) and up (y), ignoring its rotation.
function half(m) {
  const a = m.a;
  if (m.g === 'box') return [a[0] / 2, a[1] / 2];
  if (m.g === 'cyl') return [Math.max(a[0], a[1]), a[2] / 2];
  if (m.g === 'cone') return [a[0], a[1] / 2];
  if (m.g === 'torus') return [a[0] + a[1], a[0] + a[1]];
  if (m.g === 'capsule') return [a[0], a[1] / 2 + a[0]];
  return [a[0], a[0]];
}
function fit(model, reach = 1.4) {
  const meshes = [...model.shell, ...Object.values(model.parts).flatMap((q) => q.meshes)];
  const extent = Math.max(
    ...meshes.map((m) => {
      const [hx, hy] = half(m);
      return Math.max(Math.abs(m.p?.[0] || 0) + hx, Math.abs(m.p?.[1] || 0) + hy);
    })
  );
  const k = Math.min(1, reach / extent);
  if (k === 1) return model;
  return {
    ...model,
    shell: model.shell.map((m) => scaleMesh(m, k)),
    parts: Object.fromEntries(Object.entries(model.parts).map(([key, q]) => [key, { ...q, anchor: q.anchor.map((v) => v * k), meshes: q.meshes.map((m) => scaleMesh(m, k)) }])),
  };
}

const RAW = {
  // Unit 1: the three states of matter in boxes
  'ch-matter': {
    rot: [0.22, -0.12],
    shell: [-1.7, 0, 1.7].map((x) => ({ g: 'box', a: [1.2, 1.2, 1.2], p: [x, 0, 0], c: '#d7e3ee', o: 0.12 })),
    parts: {
      solid: {
        anchor: [-1.7, 0.75, 0.3],
        meshes: range(27, (i) => atom([-1.7 + ((i % 3) - 1) * 0.3, -0.3 + Math.floor(i / 9) * 0.3, ((Math.floor(i / 3) % 3) - 1) * 0.3], 0.14, '#5b8fd6')),
      },
      liquid: {
        anchor: [0, 0.35, 0.3],
        meshes: range(22, (i) => {
          const a = i * 2.39996;
          const rr = 0.42 * Math.sqrt((i % 11) / 11);
          return atom([Math.cos(a) * rr, -0.45 + Math.floor(i / 11) * 0.27 + (i % 3) * 0.04, Math.sin(a) * rr], 0.14, '#5b8fd6');
        }),
      },
      gas: {
        anchor: [1.7, 0.75, 0.3],
        meshes: [
          [1.35, 0.35, 0.3],
          [2.0, 0.4, -0.25],
          [1.55, -0.35, -0.3],
          [2.1, -0.3, 0.35],
          [1.75, 0.05, 0],
          [1.4, -0.1, 0.4],
        ].map((p) => atom(p, 0.14, '#5b8fd6')),
      },
    },
  },

  // Unit 2: a sodium atom, 2, 8, 1
  'ch-atoms': {
    rot: [0.45, -0.2],
    shell: [],
    parts: {
      nucleus: {
        anchor: [0, 0.25, 0.2],
        meshes: range(23, (i) => {
          const phi = Math.acos(1 - (2 * (i + 0.5)) / 23);
          const th = PI * (1 + Math.sqrt(5)) * i;
          const rr = 0.2 * Math.cbrt((i + 1) / 23);
          return atom([rr * Math.cos(th) * Math.sin(phi), rr * Math.sin(th) * Math.sin(phi), rr * Math.cos(phi)], 0.075, i < 11 ? '#e05555' : '#9aa3ab');
        }),
      },
      shell1: {
        anchor: [0.55, 0.3, 0],
        meshes: [{ g: 'torus', a: [0.6, 0.008, 8, 64], r: [PI / 2, 0, 0], c: '#7a8794' }, ...[0, PI].map((a) => atom([0.6 * Math.cos(a), 0, 0.6 * Math.sin(a)], 0.06, '#3f6fd8'))],
      },
      shell2: {
        anchor: [-1.0, 0.25, 0],
        meshes: [{ g: 'torus', a: [1.05, 0.008, 8, 80], r: [PI / 2, 0, 0], c: '#7a8794' }, ...range(8, (i) => atom([1.05 * Math.cos((i * PI) / 4), 0, 1.05 * Math.sin((i * PI) / 4)], 0.06, '#3f6fd8'))],
      },
      outer: {
        anchor: [1.0, 0.1, 1.0],
        meshes: [{ g: 'torus', a: [1.5, 0.008, 8, 96], r: [PI / 2, 0, 0], c: '#7a8794' }, atom([1.5 * Math.cos(PI / 4), 0, 1.5 * Math.sin(PI / 4)], 0.07, '#3f6fd8')],
      },
    },
  },

  // Unit 3: part of the sodium chloride lattice
  'ch-bonding': {
    rot: [0.5, -0.6],
    shell: [],
    parts: (() => {
      const pts = [];
      for (let x = -1; x <= 1; x++) for (let y = -1; y <= 1; y++) for (let z = -1; z <= 1; z++) pts.push([x, y, z]);
      const s = 0.5;
      const pos = (q) => q.map((v) => v * s);
      const lines = [];
      for (const q of pts) {
        if (q[0] < 1) lines.push(bond(pos(q), pos([q[0] + 1, q[1], q[2]]), 0.015, '#9aa3ab'));
        if (q[1] < 1) lines.push(bond(pos(q), pos([q[0], q[1] + 1, q[2]]), 0.015, '#9aa3ab'));
        if (q[2] < 1) lines.push(bond(pos(q), pos([q[0], q[1], q[2] + 1]), 0.015, '#9aa3ab'));
      }
      const even = (q) => (q[0] + q[1] + q[2]) % 2 === 0;
      return {
        na: { anchor: [-0.5, 0.5, 0.5], meshes: pts.filter((q) => !even(q)).map((q) => atom(pos(q), 0.11, C.Na)) },
        cl: { anchor: [0.5, 0.5, 0.5], meshes: pts.filter(even).map((q) => atom(pos(q), 0.19, C.Cl)) },
        lattice: { anchor: [0.5, -0.5, 0.8], meshes: lines },
      };
    })(),
  },

  // Unit 4: three simple molecules
  'ch-moles': {
    rot: [0.1, -0.1],
    shell: [],
    parts: {
      water: { anchor: [-1.6, 0.35, 0], meshes: water([-1.6, 0.1, 0]) },
      co2: { anchor: [0, 0.35, 0], meshes: co2([0, 0, 0]) },
      methane: { anchor: [1.6, 0.6, 0], meshes: methane([1.6, 0, 0]) },
    },
  },

  // Unit 5: titration apparatus
  'ch-acids': {
    rot: [0.12, -0.4],
    shell: [],
    parts: {
      stand: {
        anchor: [-0.8, -1.3, 0.4],
        meshes: [
          { g: 'box', a: [1.6, 0.08, 1.0], p: [-0.4, -1.4, 0], c: '#9aa3ab' },
          { g: 'cyl', a: [0.04, 0.04, 3.2, 12], p: [-0.9, 0.2, 0], c: '#c4cbd2' },
          { g: 'box', a: [0.75, 0.05, 0.08], p: [-0.55, 1.0, 0], c: '#8d969f' },
          { g: 'box', a: [0.9, 0.03, 0.7], p: [0.1, -1.34, 0], c: '#ffffff' },
        ],
      },
      burette: {
        anchor: [0.1, 1.2, 0.1],
        meshes: [
          { g: 'cyl', a: [0.07, 0.07, 2.2, 20, 1, true], p: [0.1, 0.55, 0], c: C.glass, o: 0.35 },
          { g: 'cyl', a: [0.06, 0.06, 1.7, 20], p: [0.1, 0.3, 0], c: '#eaf3fa', o: 0.7 },
        ],
      },
      tap: {
        anchor: [0.35, -0.6, 0.1],
        meshes: [
          { g: 'cyl', a: [0.025, 0.025, 0.2, 10], p: [0.1, -0.62, 0], c: '#eaf3fa' },
          { g: 'box', a: [0.22, 0.05, 0.05], p: [0.1, -0.6, 0], c: '#5f6b75' },
          { g: 'cone', a: [0.025, 0.12, 10], p: [0.1, -0.78, 0], r: [PI, 0, 0], c: '#eaf3fa' },
        ],
      },
      flask: { anchor: [0.55, -1.0, 0.2], meshes: flask([0.1, -1.32, 0], '#f2a7c9', 0.75, 0.38) },
    },
  },

  // Unit 6: an electrolysis cell
  'ch-redox': {
    rot: [0.25, -0.3],
    shell: [{ g: 'cyl', a: [0.9, 0.9, 1.2, 40, 1, true], p: [0, -0.5, 0], c: C.glass, o: 0.22 }],
    parts: {
      electrolyte: { anchor: [0.75, -0.6, 0.4], meshes: [{ g: 'cyl', a: [0.86, 0.86, 0.9, 40], p: [0, -0.64, 0], c: '#8fb9e0', o: 0.45 }] },
      anode: { anchor: [-0.4, 0.25, 0.2], meshes: [{ g: 'box', a: [0.14, 1.5, 0.3], p: [-0.4, -0.3, 0], c: '#3d4650' }, ...range(5, (i) => atom([-0.32, -0.9 + i * 0.16, 0.12], 0.025, '#ffffff'))] },
      cathode: { anchor: [0.4, 0.25, 0.2], meshes: [{ g: 'box', a: [0.14, 1.5, 0.3], p: [0.4, -0.3, 0], c: '#3d4650' }, ...range(5, (i) => atom([0.48, -0.85 + i * 0.16, 0.12], 0.025, '#ffffff'))] },
      supply: {
        anchor: [0, 1.05, 0.2],
        meshes: [
          { g: 'box', a: [0.7, 0.32, 0.32], p: [0, 0.9, 0], c: '#2f3a44' },
          bond([-0.4, 0.45, 0], [-0.4, 0.9, 0], 0.015, '#c0392b'),
          bond([-0.4, 0.9, 0], [-0.35, 0.9, 0], 0.015, '#c0392b'),
          bond([0.4, 0.45, 0], [0.4, 0.9, 0], 0.015, '#2c3e50'),
          bond([0.4, 0.9, 0], [0.35, 0.9, 0], 0.015, '#2c3e50'),
        ],
      },
    },
  },

  // Unit 7: marble chips and acid with a gas syringe
  'ch-energy': {
    rot: [0.15, -0.35],
    shell: [],
    parts: {
      flask: { anchor: [-0.9, 0.5, 0.3], meshes: flask([-0.8, -0.9, 0], '#e3edf5', 1.3, 0.6) },
      chips: { anchor: [-0.8, -0.6, 0.5], meshes: range(7, (i) => ({ g: 'box', a: [0.14, 0.1, 0.12], p: [-1.0 + (i % 4) * 0.13, -0.84 + Math.floor(i / 4) * 0.08, (i % 3) * 0.1 - 0.1], r: [i, i * 0.7, 0], c: '#ebe5da' })) },
      syringe: {
        anchor: [0.9, 0.85, 0.2],
        meshes: [
          bond([-0.8, 0.35, 0], [-0.8, 0.6, 0], 0.025, '#dfe6ec'),
          bond([-0.8, 0.6, 0], [0.1, 0.6, 0], 0.025, '#dfe6ec'),
          { g: 'cyl', a: [0.15, 0.15, 1.3, 24, 1, true], p: [0.75, 0.6, 0], r: [0, 0, PI / 2], c: C.glass, o: 0.35 },
          { g: 'cyl', a: [0.13, 0.13, 0.05, 24], p: [0.55, 0.6, 0], r: [0, 0, PI / 2], c: '#8d969f' },
          { g: 'cyl', a: [0.025, 0.025, 1.1, 10], p: [1.1, 0.6, 0], r: [0, 0, PI / 2], c: '#a5adb5' },
        ],
      },
    },
  },

  // Unit 8: the blast furnace
  'ch-metals': {
    rot: [0.1, -0.3],
    shell: [{ g: 'cyl', a: [0.6, 0.85, 2.8, 32, 1, true], p: [0, 0.2, 0], c: '#c9b8a6', o: 0.28 }],
    parts: {
      charge: {
        anchor: [0, 1.6, 0.3],
        meshes: range(18, (i) => ({ g: 'sphere', a: [0.09, 10, 10], p: [Math.cos(i * 2.4) * 0.35 * ((i % 4) / 4 + 0.3), 1.2 + (i % 3) * 0.12, Math.sin(i * 2.4) * 0.35 * ((i % 4) / 4 + 0.3)], c: ['#7d2f27', '#2f2f2f', '#d8d0c4'][i % 3] })),
      },
      reduction: { anchor: [0.7, 0.4, 0.3], meshes: [{ g: 'cyl', a: [0.62, 0.7, 0.6, 32], p: [0, 0.4, 0], c: '#e8743b', o: 0.45 }] },
      air: {
        anchor: [-1.2, -0.5, 0.3],
        meshes: [
          { g: 'cyl', a: [0.07, 0.07, 0.7, 12], p: [-1.1, -0.55, 0], r: [0, 0, PI / 2], c: '#a5adb5' },
          { g: 'cyl', a: [0.07, 0.07, 0.7, 12], p: [1.1, -0.55, 0], r: [0, 0, PI / 2], c: '#a5adb5' },
        ],
      },
      slag: { anchor: [0.9, -0.75, 0.3], meshes: [{ g: 'cyl', a: [0.8, 0.82, 0.18, 32], p: [0, -0.8, 0], c: '#e3b04a' }] },
      iron: { anchor: [0.9, -1.05, 0.3], meshes: [{ g: 'cyl', a: [0.82, 0.84, 0.22, 32], p: [0, -1.0, 0], c: '#e85d2a' }] },
    },
  },

  // Unit 9: the Haber process reactants and product
  'ch-nonmetals': {
    rot: [0.12, -0.12],
    shell: [],
    parts: {
      n2: { anchor: [-1.6, 0.7, 0], meshes: [[-1.7, 0.3, 0], [-1.4, -0.4, 0.3]].flatMap((p) => diatomic(p, C.N, 0.15, 0.3)) },
      h2: { anchor: [0, 0.8, 0], meshes: [[-0.3, 0.4, 0], [0.3, 0.1, 0.3], [0, -0.4, -0.2]].flatMap((p) => diatomic(p, C.H, 0.1, 0.24)) },
      nh3: { anchor: [1.6, 0.7, 0], meshes: [...ammonia([1.5, 0.25, 0]), ...ammonia([1.8, -0.45, 0.3])] },
    },
  },

  // Unit 10: ethane, ethene and ethanol
  'ch-organic': {
    rot: [0.15, -0.1],
    shell: [],
    parts: {
      ethane: { anchor: [-1.7, 0.6, 0], meshes: twoCarbon([-1.8, 0, 0]) },
      ethene: { anchor: [0, 0.6, 0], meshes: twoCarbon([0, 0, 0], { double: true }) },
      ethanol: { anchor: [1.8, 0.6, 0], meshes: twoCarbon([1.7, 0, 0], { oh: true }) },
    },
  },

  // Unit 11: hydroxide precipitates
  'ch-analysis': {
    rot: [0.12, -0.1],
    shell: [{ g: 'box', a: [2.6, 0.1, 0.5], p: [0, -0.12, 0], c: '#c9a36b' }],
    parts: {
      cu: { anchor: [-0.9, 1.15, 0], meshes: tube([-0.9, 0, 0], '#7ab8e6', '#cfe3f3') },
      fe2: { anchor: [-0.3, 1.15, 0], meshes: tube([-0.3, 0, 0], '#7c9a5a', '#e3eed0') },
      fe3: { anchor: [0.3, 1.15, 0], meshes: tube([0.3, 0, 0], '#a0522d', '#f0dca0') },
      zn: { anchor: [0.9, 1.15, 0], meshes: tube([0.9, 0, 0], '#f4f4ef', '#f1f6fb') },
    },
  },
};

export const CHEM_MODELS = Object.fromEntries(Object.entries(RAW).map(([id, m]) => [id, fit(m)]));
