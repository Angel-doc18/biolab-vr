// Procedural 3D models for the Physics units. Part keys match unit.vr.parts in
// src/data/physics/units1.js and units2.js; each part's anchor is where its label points.
import * as THREE from 'three';
import { fit } from './chemModels';

const PI = Math.PI;
const range = (n, f) => Array.from({ length: n }, (_, i) => f(i));
const add = (p, q) => [p[0] + q[0], p[1] + q[1], p[2] + q[2]];
const mul = (p, k) => p.map((v) => v * k);

const METAL = '#c2c9d0';
const DARK = '#4b5560';
const WIRE = '#333a40';

// Rotation that turns the y axis (along which cylinders and cones are built) towards dir.
const UP = new THREE.Vector3(0, 1, 0);
function orient(dir) {
  const d = new THREE.Vector3(...dir).normalize();
  const e = new THREE.Euler().setFromQuaternion(new THREE.Quaternion().setFromUnitVectors(UP, d));
  return [e.x, e.y, e.z];
}
// A cylinder from point a to point b.
function rod(a, b, r = 0.03, c = WIRE, o) {
  const dir = [b[0] - a[0], b[1] - a[1], b[2] - a[2]];
  const len = Math.hypot(...dir);
  return { g: 'cyl', a: [r, r, len, 12], p: mul(add(a, b), 0.5), r: orient(dir), c, ...(o != null && { o }) };
}
// An arrowhead pointing from a towards b, centred at `at` (default: the middle of ab).
function head(a, b, c, size = 0.1, at) {
  const dir = [b[0] - a[0], b[1] - a[1], b[2] - a[2]];
  return { g: 'cone', a: [size, size * 1.8, 16], p: at || mul(add(a, b), 0.5), r: orient(dir), c };
}
// A force arrow starting at o, pointing along unit vector d, of length len.
function arrow(o, d, len, c, r = 0.05) {
  const neck = add(o, mul(d, len - 0.2));
  const tip = add(o, mul(d, len));
  return [rod(o, neck, r, c), head(neck, tip, c, r * 2.4, mul(add(neck, tip), 0.5))];
}
// A cylinder lying along the x axis, centred at x.
const alongX = (x, y, len, rad, c, z = 0, o) => ({ g: 'cyl', a: [rad, rad, len, 28], p: [x, y, z], r: [0, 0, PI / 2], c, ...(o != null && { o }) });
// A slotted mass hanging from a beam.
const hangingMass = (x, top, n) => [
  rod([x, top, 0], [x, top - 0.42, 0], 0.012, '#555c63'),
  ...range(n, (i) => ({ g: 'cyl', a: [0.16, 0.16, 0.11, 24], p: [x, top - 0.5 - i * 0.12, 0], c: i % 2 ? '#8e969e' : '#a5adb5' })),
];
// A flame on a burner top at (x, y).
const flame = (x, y, z = 0) => [
  { g: 'cone', a: [0.09, 0.3, 16], p: [x, y + 0.15, z], c: '#f2a33a', o: 0.85 },
  { g: 'cone', a: [0.05, 0.16, 12], p: [x, y + 0.08, z], c: '#3f6fd8' },
];

// The ray through the glass block (refractive index 1.5, angle of incidence 40 degrees).
const I = (40 * PI) / 180;
const R = Math.asin(Math.sin(I) / 1.5);
const ENTRY = [-0.2, 0.5, 0];
const START = [ENTRY[0] - Math.sin(I) * 1.0, ENTRY[1] + Math.cos(I) * 1.0, 0];
const EXIT = [ENTRY[0] + Math.tan(R) * 1.0, -0.5, 0];
const END = [EXIT[0] + Math.sin(I) * 1.0, EXIT[1] - Math.cos(I) * 1.0, 0];
const dashed = (x, y0, y1, n = 6) => range(n, (i) => rod([x, y0 + ((y1 - y0) * i) / n, 0.01], [x, y0 + ((y1 - y0) * (i + 0.55)) / n, 0.01], 0.012, '#7d8790'));

// The d.c. motor coil, turned 20 degrees about the axle (the z axis).
const TH = 0.35;
const side = (s) => [s * 0.55 * Math.cos(TH), s * 0.55 * Math.sin(TH)];
const [RX, RY] = side(1);
const [LX, LY] = side(-1);

const RAW = {
  // Unit 1: a micrometer screw gauge gripping a ball bearing
  'ph-measure': {
    rot: [0.25, -0.35],
    shell: [
      { g: 'torus', a: [0.7, 0.11, 12, 40, PI], p: [-0.65, 0.35, 0], r: [0, 0, PI], c: DARK },
      alongX(0.0, 0.35, 0.2, 0.16, DARK),
      { g: 'sphere', a: [0.07, 16, 16], p: [-1.05, 0.35, 0], c: '#c9a24a' },
    ],
    parts: {
      anvil: {
        anchor: [-1.2, 0.55, 0.55],
        meshes: [alongX(-1.25, 0.35, 0.25, 0.085, '#d8dde2'), alongX(-0.465, 0.35, 1.03, 0.085, '#d8dde2')],
      },
      sleeve: {
        anchor: [0.45, 0.6, 0.2],
        meshes: [
          alongX(0.475, 0.35, 0.75, 0.13, '#e3e7ea'),
          { g: 'box', a: [0.75, 0.012, 0.012], p: [0.475, 0.35, 0.132], c: '#222' },
          ...range(8, (i) => ({ g: 'box', a: [0.012, 0.05, 0.012], p: [0.15 + i * 0.09, 0.38, 0.127], c: '#222' })),
          ...range(7, (i) => ({ g: 'box', a: [0.012, 0.04, 0.012], p: [0.195 + i * 0.09, 0.325, 0.127], c: '#222' })),
        ],
      },
      thimble: {
        anchor: [1.05, 0.65, 0.2],
        meshes: [
          { g: 'cyl', a: [0.13, 0.19, 0.08, 32], p: [0.76, 0.35, 0], r: [0, 0, PI / 2], c: METAL },
          alongX(1.075, 0.35, 0.55, 0.19, METAL),
          ...range(9, (i) => {
            const a = -0.8 + i * 0.2;
            return { g: 'box', a: [0.09, 0.01, 0.01], p: [0.85, 0.35 + 0.192 * Math.sin(a), 0.192 * Math.cos(a)], c: '#222' };
          }),
        ],
      },
      ratchet: {
        anchor: [1.55, 0.55, 0.2],
        meshes: [
          alongX(1.5, 0.35, 0.3, 0.11, '#89929b'),
          ...range(5, (i) => ({ g: 'torus', a: [0.11, 0.014, 6, 24], p: [1.39 + i * 0.055, 0.35, 0], r: [0, PI / 2, 0], c: '#6f7880' })),
        ],
      },
    },
  },

  // Unit 2: a metre rule balanced on a pivot (3 N at 0.6 m balances 2 N at 0.9 m)
  'ph-forces': {
    rot: [0.15, -0.3],
    shell: [{ g: 'box', a: [0.9, 0.08, 0.5], p: [0, -0.64, 0], c: '#6b4f36' }],
    parts: {
      pivot: { anchor: [0.05, -0.4, 0.3], meshes: [{ g: 'cone', a: [0.25, 0.52, 3], p: [0, -0.34, 0], c: '#8a6a45' }] },
      beam: {
        anchor: [-1.3, 0.1, 0.55],
        meshes: [
          { g: 'box', a: [3.0, 0.08, 0.25], p: [0, -0.04, 0], c: '#e9cf8f' },
          ...range(11, (i) => ({ g: 'box', a: [0.012, 0.045, 0.01], p: [-1.5 + i * 0.3, -0.02, 0.128], c: '#333' })),
        ],
      },
      left: { anchor: [-0.6, -0.9, 0.45], meshes: hangingMass(-0.6, -0.08, 3) },
      right: { anchor: [0.9, -0.78, 0.3], meshes: hangingMass(0.9, -0.08, 2) },
    },
  },

  // Unit 3: the four forces on a car moving at steady speed
  'ph-motion': {
    rot: [0.2, -0.25],
    shell: [
      { g: 'box', a: [3.4, 0.04, 1.4], p: [0, -0.44, 0], c: '#8a8f94' },
      { g: 'box', a: [1.8, 0.4, 0.8], p: [0, 0, 0], c: '#2f6fb2' },
      { g: 'box', a: [0.95, 0.34, 0.72], p: [-0.1, 0.37, 0], c: '#cfe6f5', o: 0.7 },
      { g: 'box', a: [0.97, 0.05, 0.74], p: [-0.1, 0.56, 0], c: '#2a5f98' },
      ...[-0.55, 0.55].flatMap((x) => [-0.4, 0.4].map((z) => ({ g: 'cyl', a: [0.2, 0.2, 0.12, 24], p: [x, -0.22, z], r: [PI / 2, 0, 0], c: '#222' }))),
    ],
    parts: {
      thrust: { anchor: [1.55, 0.25, 0], meshes: arrow([0.92, 0, 0], [1, 0, 0], 0.8, '#2e9e5b') },
      drag: { anchor: [-1.55, 0.3, 0.6], meshes: arrow([-0.92, 0.05, 0], [-1, 0, 0], 0.8, '#d0503c') },
      weight: { anchor: [0.2, -1.1, 0.45], meshes: arrow([0, -0.1, 0.45], [0, -1, 0], 0.95, '#7a4bb3') },
      reaction: { anchor: [0.2, 1.3, 0.45], meshes: arrow([0, 0.6, 0.45], [0, 1, 0], 0.75, '#c9861a') },
    },
  },

  // Unit 4: a fixed pulley and a moving pulley (velocity ratio 2)
  'ph-energy': {
    rot: [0.12, -0.3],
    shell: [
      { g: 'box', a: [1.7, 0.12, 0.4], p: [0.05, 1.35, 0], c: '#6b4f36' },
      rod([0.34, 1.29, 0], [0.34, 0.85, 0], 0.03, DARK),
      rod([-0.5, 1.29, 0], [-0.5, -0.2, 0], 0.02, '#c8a46a'),
      rod([0.06, -0.2, 0], [0.06, 0.85, 0], 0.02, '#c8a46a'),
      rod([-0.22, -0.2, 0], [-0.22, -0.62, 0], 0.025, DARK),
    ],
    parts: {
      fixed: {
        anchor: [0.62, 1.1, 0.2],
        meshes: [
          { g: 'cyl', a: [0.28, 0.28, 0.1, 32], p: [0.34, 0.85, 0], r: [PI / 2, 0, 0], c: METAL },
          { g: 'torus', a: [0.28, 0.025, 8, 40], p: [0.34, 0.85, 0], c: '#8e969e' },
        ],
      },
      moving: {
        anchor: [-0.55, 0.05, 0.4],
        meshes: [
          { g: 'cyl', a: [0.28, 0.28, 0.1, 32], p: [-0.22, -0.2, 0], r: [PI / 2, 0, 0], c: METAL },
          { g: 'torus', a: [0.28, 0.025, 8, 40], p: [-0.22, -0.2, 0], c: '#8e969e' },
        ],
      },
      effort: { anchor: [0.62, -0.95, 0.2], meshes: [rod([0.62, 0.85, 0], [0.62, -0.45, 0], 0.02, '#c8a46a'), ...arrow([0.62, -0.45, 0], [0, -1, 0], 0.6, '#2e9e5b')] },
      load: { anchor: [-0.22, -0.75, 0.32], meshes: [{ g: 'box', a: [0.6, 0.5, 0.5], p: [-0.22, -0.87, 0], c: '#9b9890' }] },
    },
  },

  // Unit 5: a hydraulic press
  'ph-pressure': {
    rot: [0.25, -0.35],
    shell: [
      { g: 'cyl', a: [0.18, 0.18, 1.2, 24, 1, true], p: [-0.9, 0, 0], c: '#cfe6f5', o: 0.3 },
      { g: 'cyl', a: [0.55, 0.55, 1.2, 40, 1, true], p: [0.6, 0, 0], c: '#cfe6f5', o: 0.3 },
      { g: 'box', a: [1.5, 0.26, 0.32], p: [-0.15, -0.62, 0], c: '#cfe6f5', o: 0.3 },
    ],
    parts: {
      small: {
        anchor: [-0.9, 0.8, 0.35],
        meshes: [
          { g: 'cyl', a: [0.17, 0.17, 0.08, 24], p: [-0.9, 0.34, 0], c: '#8e969e' },
          rod([-0.9, 0.38, 0], [-0.9, 0.7, 0], 0.03, DARK),
          ...arrow([-0.9, 1.25, 0], [0, -1, 0], 0.5, '#2e9e5b'),
        ],
      },
      liquid: {
        anchor: [-0.15, -0.62, 0.45],
        meshes: [
          { g: 'cyl', a: [0.17, 0.17, 0.9, 24], p: [-0.9, -0.15, 0], c: '#e3b04a', o: 0.7 },
          { g: 'cyl', a: [0.54, 0.54, 0.7, 40], p: [0.6, -0.25, 0], c: '#e3b04a', o: 0.7 },
          { g: 'box', a: [1.4, 0.22, 0.27], p: [-0.15, -0.62, 0], c: '#e3b04a', o: 0.7 },
        ],
      },
      large: {
        anchor: [0.6, 0.75, 0.4],
        meshes: [
          { g: 'cyl', a: [0.54, 0.54, 0.1, 40], p: [0.6, 0.15, 0], c: '#8e969e' },
          { g: 'box', a: [0.7, 0.4, 0.6], p: [0.6, 0.4, 0], c: '#b8433f' },
        ],
      },
    },
  },

  // Unit 6: conduction along a rod, convection in water, radiation from a heater
  'ph-thermal': {
    rot: [0.15, -0.2],
    shell: [
      { g: 'cyl', a: [0.06, 0.08, 0.5, 16], p: [-1.75, -0.35, 0], c: DARK },
      { g: 'cyl', a: [0.46, 0.46, 1.0, 40, 1, true], p: [0, 0, 0], c: '#cfe6f5', o: 0.25 },
      { g: 'cyl', a: [0.44, 0.44, 0.8, 40], p: [0, -0.1, 0], c: '#5b9bd5', o: 0.3 },
      { g: 'cyl', a: [0.06, 0.08, 0.3, 16], p: [-0.22, -0.85, 0], c: DARK },
      { g: 'box', a: [0.16, 0.9, 0.5], p: [1.78, 0, 0], c: '#7a2a20' },
      { g: 'sphere', a: [0.06, 12, 12], p: [0.95, 0, 0], c: '#c0392b' },
      rod([0.95, 0.05, 0], [0.95, 0.5, 0], 0.02, '#e8e8e8'),
      ...flame(-1.75, -0.1),
      ...flame(-0.22, -0.7),
    ],
    parts: {
      conduction: {
        anchor: [-1.15, 0.5, 0.5],
        meshes: range(6, (i) => alongX(-1.75 + i * 0.2, 0.25, 0.2, 0.06, ['#e8502a', '#e0682f', '#d17d35', '#c68a3b', '#bd8b45', '#b87333'][i])),
      },
      convection: {
        anchor: [0, 0.6, 0.3],
        meshes: [
          { g: 'torus', a: [0.24, 0.022, 8, 40], p: [0, -0.1, 0.02], c: '#e04848' },
          head([-0.24, -0.2, 0.02], [-0.24, 0, 0.02], '#e04848', 0.06, [-0.24, -0.1, 0.02]),
          head([0.24, 0, 0.02], [0.24, -0.2, 0.02], '#3f6fd8', 0.06, [0.24, -0.1, 0.02]),
        ],
      },
      radiation: {
        anchor: [1.3, 0.5, 0.3],
        meshes: [
          ...[-0.3, 0, 0.3].map((y) => ({ g: 'cyl', a: [0.04, 0.04, 0.45, 12], p: [1.68, y, 0], r: [PI / 2, 0, 0], c: '#ff5a2a' })),
          ...[-0.3, 0, 0.3].flatMap((y) => range(9, (i) => ({ g: 'sphere', a: [0.025, 8, 8], p: [1.6 - i * 0.075, y + 0.05 * Math.sin(i * 1.4), 0], c: '#e8743b' }))),
        ],
      },
    },
  },

  // Unit 7: a transverse wave above a longitudinal wave on a spring
  'ph-waves': {
    rot: [0.1, -0.25],
    shell: [rod([-1.85, 0.6, 0], [1.85, 0.6, 0], 0.01, '#9aa3ab')],
    parts: {
      crest: {
        anchor: [-0.9, 0.95, 0.4],
        meshes: range(31, (i) => {
          const x = -1.8 + i * 0.12;
          return { g: 'sphere', a: [0.045, 12, 12], p: [x, 0.6 + 0.3 * Math.sin((2 * PI * x) / 1.2), 0], c: '#1f6fb2' };
        }),
      },
      wavelength: {
        anchor: [-0.3, 1.18, 0.3],
        meshes: [rod([-0.9, 1.05, 0], [0.3, 1.05, 0], 0.012, '#2e9e5b'), rod([-0.9, 0.98, 0], [-0.9, 1.12, 0], 0.012, '#2e9e5b'), rod([0.3, 0.98, 0], [0.3, 1.12, 0], 0.012, '#2e9e5b')],
      },
      amplitude: {
        anchor: [1.62, 0.75, 0.1],
        meshes: [rod([1.5, 0.6, 0.05], [1.5, 0.9, 0.05], 0.014, '#c9861a'), head([1.5, 0.6, 0.05], [1.5, 0.9, 0.05], '#c9861a', 0.035, [1.5, 0.86, 0.05])],
      },
      compression: {
        anchor: [0, -0.32, 0.35],
        meshes: range(30, (i) => {
          const base = -1.8 + i * 0.124;
          return { g: 'torus', a: [0.18, 0.014, 6, 24], p: [base - 0.07 * Math.sin((2 * PI * base) / 1.2), -0.6, 0], r: [0, PI / 2, 0], c: '#7a4bb3' };
        }),
      },
    },
  },

  // Unit 8: a ray refracted through a rectangular glass block
  'ph-light': {
    rot: [0.1, -0.25],
    shell: [...dashed(ENTRY[0], 0.1, 0.95), ...dashed(EXIT[0], -0.1, -0.95)],
    parts: {
      incident: { anchor: [-0.65, 1.05, 0.35], meshes: [rod(START, ENTRY, 0.025, '#e04848'), head(START, ENTRY, '#e04848', 0.06)] },
      block: { anchor: [0.5, 0.35, 0.2], meshes: [{ g: 'box', a: [1.2, 1.0, 0.3], p: [0, 0, 0], c: '#bfe0f2', o: 0.4 }] },
      refracted: { anchor: [0.05, -0.05, 0.2], meshes: [rod(ENTRY, EXIT, 0.025, '#e04848'), head(ENTRY, EXIT, '#e04848', 0.06)] },
      emergent: { anchor: [0.75, -1.05, 0.1], meshes: [rod(EXIT, END, 0.025, '#e04848'), head(EXIT, END, '#e04848', 0.06)] },
    },
  },

  // Unit 9: a cell, switch, ammeter and lamp in series, with a voltmeter across the lamp
  'ph-electricity': {
    rot: [0.6, 0.12],
    shell: [
      { g: 'box', a: [3.4, 0.08, 1.8], p: [0.25, -0.06, 0], c: '#c9a36b' },
      rod([-1.1, 0.02, -0.6], [1.1, 0.02, -0.6], 0.025),
      rod([1.1, 0.02, -0.6], [1.1, 0.02, 0.6], 0.025),
      rod([1.1, 0.02, 0.6], [-1.1, 0.02, 0.6], 0.025),
      rod([-1.1, 0.02, 0.6], [-1.1, 0.02, -0.6], 0.025),
      rod([1.1, 0.02, -0.3], [1.6, 0.02, -0.3], 0.02),
      rod([1.1, 0.02, 0.3], [1.6, 0.02, 0.3], 0.02),
    ],
    parts: {
      cell: {
        anchor: [-0.45, 0.4, 0.6],
        meshes: [alongX(-0.47, 0.16, 0.5, 0.14, '#2f2f2f', 0.6), alongX(-0.19, 0.16, 0.08, 0.145, '#d8a93a', 0.6), alongX(-0.12, 0.16, 0.06, 0.05, METAL, 0.6)],
      },
      switch: {
        anchor: [0.5, 0.35, 0.6],
        meshes: [{ g: 'box', a: [0.34, 0.05, 0.18], p: [0.5, 0.05, 0.6], c: '#444' }, rod([0.36, 0.1, 0.6], [0.64, 0.1, 0.6], 0.022, METAL)],
      },
      lamp: {
        anchor: [1.1, 0.65, 0],
        meshes: [
          { g: 'cyl', a: [0.12, 0.12, 0.12, 20], p: [1.1, 0.07, 0], c: '#3a3a3a' },
          { g: 'sphere', a: [0.18, 24, 24], p: [1.1, 0.3, 0], c: '#f6e27a', o: 0.75 },
          { g: 'torus', a: [0.05, 0.01, 6, 16], p: [1.1, 0.3, 0], c: '#e8743b' },
        ],
      },
      ammeter: {
        anchor: [-1.1, 0.4, 0],
        meshes: [
          { g: 'cyl', a: [0.25, 0.25, 0.12, 32], p: [-1.1, 0.07, 0], c: '#eef1f3' },
          { g: 'torus', a: [0.25, 0.025, 8, 40], p: [-1.1, 0.13, 0], r: [PI / 2, 0, 0], c: '#c0392b' },
          rod([-1.1, 0.14, 0.08], [-0.98, 0.14, -0.08], 0.012, '#c0392b'),
        ],
      },
      voltmeter: {
        anchor: [1.6, 0.45, 0],
        meshes: [
          { g: 'cyl', a: [0.25, 0.25, 0.12, 32], p: [1.6, 0.07, 0], c: '#eef1f3' },
          { g: 'torus', a: [0.25, 0.025, 8, 40], p: [1.6, 0.13, 0], r: [PI / 2, 0, 0], c: '#1f6fb2' },
          rod([1.6, 0.14, 0.08], [1.72, 0.14, -0.08], 0.012, '#1f6fb2'),
        ],
      },
    },
  },

  // Unit 10: a simple d.c. motor
  'ph-magnetism': {
    rot: [0.4, 0.3],
    shell: [{ g: 'cyl', a: [0.035, 0.035, 1.75, 12], p: [0, 0, 0.08], r: [PI / 2, 0, 0], c: '#9aa3ab' }],
    parts: {
      magnets: {
        anchor: [-1.1, 0.55, 0.3],
        meshes: [
          { g: 'box', a: [0.36, 0.8, 0.8], p: [-1.1, 0, -0.1], c: '#c0392b' },
          { g: 'box', a: [0.36, 0.8, 0.8], p: [1.1, 0, -0.1], c: '#1f6fb2' },
        ],
      },
      coil: {
        anchor: [0.45, 0.45, 0.35],
        meshes: [
          rod([RX, RY, -0.6], [RX, RY, 0.4], 0.045, '#d35400'),
          rod([LX, LY, -0.6], [LX, LY, 0.4], 0.045, '#d35400'),
          rod([RX, RY, -0.6], [LX, LY, -0.6], 0.045, '#d35400'),
          rod([RX, RY, 0.4], [0.11, 0.04, 0.55], 0.035, '#d35400'),
          rod([LX, LY, 0.4], [-0.11, -0.04, 0.55], 0.035, '#d35400'),
        ],
      },
      commutator: {
        anchor: [0, 0.32, 0.75],
        meshes: [0.05, 1.05].map((s) => ({ g: 'cyl', a: [0.12, 0.12, 0.3, 16, 1, false, s * PI, 0.9 * PI], p: [0, 0, 0.7], r: [PI / 2, 0, 0], c: '#c98a3a' })),
      },
      brushes: {
        anchor: [0.42, -0.2, 0.75],
        meshes: [
          { g: 'box', a: [0.2, 0.1, 0.12], p: [-0.23, 0, 0.7], c: '#333' },
          { g: 'box', a: [0.2, 0.1, 0.12], p: [0.23, 0, 0.7], c: '#333' },
          rod([-0.33, 0, 0.7], [-0.33, -0.8, 0.7], 0.02, '#c0392b'),
          rod([0.33, 0, 0.7], [0.33, -0.8, 0.7], 0.02, '#1f1f1f'),
        ],
      },
    },
  },

  // Unit 11: alpha, beta and gamma from a source meeting paper, aluminium and lead
  'ph-atomic': {
    rot: [0.2, 0.25],
    shell: [],
    parts: {
      source: {
        anchor: [-1.7, 0.4, 0.3],
        meshes: [
          { g: 'box', a: [0.4, 0.4, 0.4], p: [-1.7, 0, 0], c: '#5d6770' },
          { g: 'sphere', a: [0.07, 16, 16], p: [-1.49, 0, 0], c: '#7dd87d' },
        ],
      },
      alpha: {
        anchor: [-0.7, 0.62, 0.4],
        meshes: [{ g: 'box', a: [0.02, 0.9, 0.9], p: [-0.7, 0, 0], c: '#f4f1e8' }, rod([-1.48, 0.02, 0], [-0.71, 0.25, 0], 0.045, '#e04848')],
      },
      beta: {
        anchor: [0.2, 0.62, 0.45],
        meshes: [{ g: 'box', a: [0.06, 0.9, 0.9], p: [0.2, 0, 0], c: '#c0c6cc' }, rod([-1.48, 0, 0], [0.17, 0, 0], 0.03, '#1f6fb2')],
      },
      gamma: {
        anchor: [1.2, 0.62, 0.55],
        meshes: [
          { g: 'box', a: [0.25, 0.9, 0.9], p: [1.2, 0, 0], c: DARK },
          rod([-1.48, -0.02, 0], [1.07, -0.25, 0], 0.02, '#7a4bb3'),
          rod([1.33, -0.26, 0], [1.85, -0.3, 0], 0.02, '#7a4bb3', 0.35),
        ],
      },
    },
  },
};

export const PHYS_MODELS = Object.fromEntries(Object.entries(RAW).map(([id, m]) => [id, fit(m)]));
