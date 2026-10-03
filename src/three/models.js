// Procedural 3D specimens, one per syllabus unit. Pure data so the same spec
// renders in the touch viewer and in stereoscopic VR, and ships with zero
// downloaded model files (everything works offline).
//
// mesh: { g: geometry, a: args, p: position, r: rotation, s: scale, c: colour, o: opacity }
// part.anchor is where that part's numbered pin sits (in model space).

import { ANATOMY, UNIT_MODEL } from './anatomy';
import { CHEM_MODELS } from './chemModels';
import { PHYS_MODELS } from './physModels';

const PI = Math.PI;
const range = (n, f) => Array.from({ length: n }, (_, i) => f(i));

function helix({ x = 0, steps = 14, h = 2, rad = 0.28, turns = 1.5, a = '#0369a1', b = '#006a61', rung = '#94ccff' }) {
  return range(steps, (i) => {
    const t = i / (steps - 1);
    const y = -h / 2 + t * h;
    const ang = t * PI * 2 * turns;
    const p1 = [x + Math.cos(ang) * rad, y, Math.sin(ang) * rad];
    const p2 = [x + Math.cos(ang + PI) * rad, y, Math.sin(ang + PI) * rad];
    return [
      { g: 'sphere', a: [0.055, 12, 12], p: p1, c: a },
      { g: 'sphere', a: [0.055, 12, 12], p: p2, c: b },
      { g: 'cyl', a: [0.018, 0.018, rad * 2, 6], p: [x, y, 0], r: [0, -ang, PI / 2], c: rung },
    ];
  }).flat();
}

export const MODELS = {
  ...CHEM_MODELS,
  ...PHYS_MODELS,

  // Unit 1: mitochondrion cut-away (matches the design's centrepiece)
  cell: {
    rot: [0.35, -0.45],
    shell: [
      { g: 'capsule', a: [0.78, 1.7, 12, 32], r: [0, 0, PI / 2], c: '#9fdcec', o: 0.18 },
    ],
    parts: {
      inner: {
        anchor: [-1.15, 0.5, 0.3],
        meshes: [{ g: 'capsule', a: [0.68, 1.55, 12, 32], r: [0, 0, PI / 2], c: '#38bdf8', o: 0.28 }],
      },
      cristae: {
        anchor: [1.2, 0.12, 0.35],
        meshes: range(8, (i) => ({
          g: 'box',
          a: [0.07, 0.9, 0.95],
          p: [-1.05 + i * 0.3, i % 2 ? -0.22 : 0.22, 0],
          c: '#14b8a6',
        })),
      },
      matrix: {
        anchor: [-0.75, -0.5, 0.35],
        meshes: [
          { g: 'capsule', a: [0.55, 1.4, 8, 24], r: [0, 0, PI / 2], c: '#f5c451', o: 0.22 },
          { g: 'torus', a: [0.18, 0.025, 8, 32], p: [-0.45, -0.3, 0.2], r: [0.6, 0.3, 0], c: '#d97706' },
          ...range(10, (i) => ({ g: 'sphere', a: [0.04, 8, 8], p: [-1 + i * 0.22, (i % 3) * 0.18 - 0.2, 0.3 - (i % 2) * 0.5], c: '#eab308' })),
        ],
      },
      atp: {
        anchor: [0.55, -0.6, 0.35],
        meshes: range(16, (i) => {
          const col = i % 8;
          const top = i < 8;
          return { g: 'sphere', a: [0.05, 10, 10], p: [-1.05 + col * 0.3, (col % 2 ? -0.22 : 0.22) + (top ? 0.47 : -0.47), 0.3 - (i % 3) * 0.3], c: '#1d4ed8' };
        }),
      },
    },
  },

  // Unit 2: digestive system
  nutrition: {
    rot: [0.2, -0.35],
    shell: [
      { g: 'cyl', a: [0.09, 0.09, 0.8, 12], p: [0.3, 1.3, 0], c: '#e7a38c' },
      { g: 'torus', a: [0.95, 0.12, 12, 40, PI * 1.6], p: [0, -0.55, -0.15], r: [0, 0, -PI * 0.3], c: '#c98a6b' },
    ],
    parts: {
      stomach: { anchor: [0.62, 0.62, 0.35], meshes: [{ g: 'sphere', a: [0.55, 24, 24], p: [0.35, 0.6, 0], s: [1, 0.7, 0.7], c: '#e07a5f' }] },
      liver: { anchor: [-0.85, 0.85, 0.35], meshes: [{ g: 'sphere', a: [0.6, 24, 24], p: [-0.55, 0.85, 0], s: [1.3, 0.55, 0.7], c: '#8c3b2e' }, { g: 'sphere', a: [0.13, 12, 12], p: [-0.35, 0.5, 0.3], c: '#6b8e23' }] },
      pancreas: { anchor: [0.3, 0.12, 0.3], meshes: [{ g: 'capsule', a: [0.12, 0.8, 8, 16], p: [0.25, 0.12, 0.15], r: [0, 0, PI / 2], c: '#f2c14e' }] },
      villi: {
        anchor: [0, -0.55, 0.35],
        meshes: range(6, (i) => ({ g: 'torus', a: [0.17, 0.07, 10, 24], p: [-0.35 + (i % 3) * 0.35, -0.4 - Math.floor(i / 3) * 0.32, 0.05], c: '#f4a6a0' })),
      },
    },
  },

  // Unit 3: heart
  transport: {
    rot: [0.15, -0.3],
    shell: [
      { g: 'sphere', a: [0.55, 24, 24], p: [-0.3, -0.25, 0.15], c: '#c2413a' },
      { g: 'cyl', a: [0.12, 0.12, 0.7, 14], p: [0.35, 0.95, -0.2], r: [0, 0, 0.35], c: '#3f6fb5' },
    ],
    parts: {
      lv: { anchor: [0.5, -0.55, 0.5], meshes: [{ g: 'sphere', a: [0.62, 24, 24], p: [0.25, -0.35, 0.1], s: [1, 1.15, 1], c: '#9b1c1c' }, { g: 'cone', a: [0.5, 0.7, 24], p: [0.1, -1.0, 0.1], r: [PI, 0, 0.25], c: '#9b1c1c' }] },
      atria: { anchor: [-0.55, 0.55, 0.35], meshes: [{ g: 'sphere', a: [0.36, 20, 20], p: [-0.45, 0.45, 0.1], c: '#e8837c' }, { g: 'sphere', a: [0.33, 20, 20], p: [0.45, 0.42, -0.05], c: '#e8837c' }] },
      aorta: { anchor: [0.15, 1.3, 0.15], meshes: [{ g: 'torus', a: [0.35, 0.12, 12, 24, PI], p: [0.1, 0.95, 0], c: '#e4483c' }, { g: 'cyl', a: [0.12, 0.12, 0.5, 14], p: [0.45, 0.7, 0], c: '#e4483c' }] },
      venacava: { anchor: [-0.8, 1.1, 0.1], meshes: [{ g: 'cyl', a: [0.13, 0.13, 1.1, 14], p: [-0.75, 0.7, -0.1], c: '#4a5a8c' }] },
    },
  },

  // Unit 4: lungs
  gas: {
    rot: [0.1, -0.25],
    shell: [
      { g: 'sphere', a: [0.6, 24, 24], p: [-0.62, -0.05, 0], s: [0.8, 1.25, 0.6], c: '#f28b82', o: 0.55 },
      { g: 'sphere', a: [0.6, 24, 24], p: [0.62, -0.05, 0], s: [0.8, 1.25, 0.6], c: '#f28b82', o: 0.55 },
    ],
    parts: {
      trachea: { anchor: [0, 1.25, 0.2], meshes: [{ g: 'cyl', a: [0.13, 0.13, 0.8, 16], p: [0, 1.1, 0], c: '#cfd8dc' }, ...range(4, (i) => ({ g: 'torus', a: [0.14, 0.025, 6, 20], p: [0, 0.8 + i * 0.18, 0], r: [PI / 2, 0, 0], c: '#90a4ae' }))] },
      bronchi: { anchor: [-0.35, 0.55, 0.2], meshes: [{ g: 'cyl', a: [0.08, 0.08, 0.65, 12], p: [-0.25, 0.55, 0], r: [0, 0, -0.7], c: '#b0bec5' }, { g: 'cyl', a: [0.08, 0.08, 0.65, 12], p: [0.25, 0.55, 0], r: [0, 0, 0.7], c: '#b0bec5' }] },
      alveoli: { anchor: [0.72, -0.2, 0.45], meshes: range(9, (i) => ({ g: 'sphere', a: [0.075, 10, 10], p: [0.62 + Math.cos(i) * 0.14, -0.2 + Math.sin(i * 1.7) * 0.14, 0.32 + (i % 3) * 0.04], c: '#e11d48' })) },
      diaphragm: { anchor: [0, -1.0, 0.9], meshes: [{ g: 'sphere', a: [1.25, 32, 12, 0, PI * 2, 0, 0.5], p: [0, -1.95, 0], c: '#b5651d', o: 0.85 }] },
    },
  },

  // Unit 5: kidneys & urinary tract
  kidney: {
    rot: [0.1, -0.3],
    shell: [{ g: 'sphere', a: [0.55, 24, 24], p: [0.6, 0.55, 0], s: [0.55, 0.9, 0.45], c: '#8e3b46' }],
    parts: {
      kidney: { anchor: [-0.8, 0.8, 0.25], meshes: [{ g: 'sphere', a: [0.55, 24, 24], p: [-0.6, 0.55, 0], s: [0.55, 0.9, 0.45], c: '#9f4450' }] },
      vessels: { anchor: [0.6, 0.55, 0.35], meshes: [{ g: 'sphere', a: [0.07, 12, 12], p: [0.6, 0.8, 0.28], c: '#f2c14e' }, { g: 'torus', a: [0.1, 0.028, 8, 20, PI], p: [0.6, 0.35, 0.28], r: [0, 0, PI], c: '#fde68a' }, { g: 'cyl', a: [0.028, 0.028, 0.45, 8], p: [0.5, 0.57, 0.28], c: '#fde68a' }, { g: 'cyl', a: [0.028, 0.028, 0.45, 8], p: [0.7, 0.57, 0.28], c: '#fde68a' }] },
      ureter: { anchor: [-0.45, -0.25, 0.15], meshes: [{ g: 'cyl', a: [0.05, 0.05, 0.95, 10], p: [-0.42, -0.25, 0], r: [0, 0, -0.25], c: '#e6c3a1' }, { g: 'cyl', a: [0.05, 0.05, 0.95, 10], p: [0.42, -0.25, 0], r: [0, 0, 0.25], c: '#e6c3a1' }] },
      bladder: { anchor: [0, -0.95, 0.4], meshes: [{ g: 'sphere', a: [0.38, 22, 22], p: [0, -0.95, 0], c: '#e8b4b8' }] },
    },
  },

  // Unit 6: brain, spinal cord & neurone
  nervous: {
    rot: [0.15, -0.55],
    shell: [],
    parts: {
      cerebrum: { anchor: [0.35, 1.05, 0.5], meshes: [{ g: 'sphere', a: [0.7, 32, 24], p: [0, 0.75, 0.05], s: [1.1, 0.8, 0.95], c: '#f4a3b4' }] },
      cerebellum: { anchor: [0, 0.2, -0.6], meshes: [{ g: 'sphere', a: [0.35, 20, 16], p: [0, 0.22, -0.4], s: [1.1, 0.6, 0.8], c: '#d97791' }] },
      cord: { anchor: [0, -0.9, -0.15], meshes: [{ g: 'cyl', a: [0.1, 0.08, 1.7, 14], p: [0, -0.6, -0.3], c: '#f7d6c4' }] },
      brainstem: {
        anchor: [0.95, -0.6, 0.2],
        meshes: [
          { g: 'sphere', a: [0.1, 12, 12], p: [0.12, -0.6, -0.2], c: '#2563eb' },
          { g: 'cyl', a: [0.025, 0.025, 0.9, 8], p: [0.55, -0.6, -0.05], r: [0, 0.35, PI / 2], c: '#3b82f6' },
          ...range(3, (i) => ({ g: 'cyl', a: [0.015, 0.015, 0.25, 6], p: [1.05, -0.6 + (i - 1) * 0.1, 0.15], r: [0, 0, PI / 2 + (i - 1) * 0.5], c: '#60a5fa' })),
        ],
      },
    },
  },

  // Unit 7: arm, elbow & antagonistic muscles
  locomotion: {
    rot: [0.1, -0.5],
    shell: [{ g: 'cyl', a: [0.08, 0.07, 1.3, 14], p: [0.46, 0.21, 0], r: [0, 0, -PI / 4], c: '#e8dcc3' }],
    parts: {
      humerus: { anchor: [0, 1.15, 0.12], meshes: [{ g: 'cyl', a: [0.1, 0.09, 1.5, 16], p: [0, 0.5, 0], c: '#eee4d0' }] },
      biceps: { anchor: [0.2, 0.55, 0.35], meshes: [{ g: 'capsule', a: [0.17, 0.65, 8, 16], p: [0.13, 0.55, 0.14], c: '#d9534f' }] },
      triceps: { anchor: [-0.3, 0.5, -0.05], meshes: [{ g: 'capsule', a: [0.16, 0.8, 8, 16], p: [-0.14, 0.5, -0.1], c: '#b23a3a' }] },
      elbow: { anchor: [0, -0.25, 0.25], meshes: [{ g: 'sphere', a: [0.17, 18, 18], p: [0, -0.25, 0], c: '#7fb3d5', o: 0.9 }] },
    },
  },

  // Unit 8: flower
  reproduction: {
    rot: [0.45, -0.3],
    shell: [
      { g: 'cyl', a: [0.05, 0.05, 1.1, 10], p: [0, -0.6, 0], c: '#558b2f' },
      ...range(5, (i) => {
        const t = (i / 5) * PI * 2 + 0.3;
        return { g: 'sphere', a: [0.3, 14, 14], p: [Math.cos(t) * 0.35, -0.12, Math.sin(t) * 0.35], s: [1, 0.15, 0.5], r: [0, -t, 0], c: '#7cb342' };
      }),
      { g: 'cyl', a: [0.03, 0.03, 0.55, 8], p: [0, 0.38, 0], c: '#9ccc65' },
    ],
    parts: {
      petal: {
        anchor: [0.95, 0.05, 0.3],
        meshes: range(5, (i) => {
          const t = (i / 5) * PI * 2;
          return { g: 'sphere', a: [0.45, 16, 16], p: [Math.cos(t) * 0.55, 0, Math.sin(t) * 0.55], s: [1, 0.16, 0.55], r: [0, -t, 0.25], c: '#f06292' };
        }),
      },
      anther: {
        anchor: [0.3, 0.55, 0.12],
        meshes: range(5, (i) => {
          const t = (i / 5) * PI * 2 + 0.6;
          return [
            { g: 'cyl', a: [0.012, 0.012, 0.45, 6], p: [Math.cos(t) * 0.2, 0.22, Math.sin(t) * 0.2], c: '#fff59d' },
            { g: 'capsule', a: [0.05, 0.08, 6, 10], p: [Math.cos(t) * 0.2, 0.48, Math.sin(t) * 0.2], c: '#fbc02d' },
          ];
        }).flat(),
      },
      stigma: { anchor: [0, 0.72, 0.05], meshes: [{ g: 'sphere', a: [0.08, 12, 12], p: [0, 0.68, 0], c: '#689f38' }] },
      ovary: { anchor: [0, 0.05, 0.28], meshes: [{ g: 'sphere', a: [0.2, 18, 18], p: [0, 0.05, 0], s: [1, 1.15, 1], c: '#aed581' }] },
    },
  },

  // Unit 9: chromosome + DNA helix
  genetics: {
    rot: [0.1, -0.2],
    shell: [
      { g: 'capsule', a: [0.14, 0.75, 8, 16], p: [-0.55, 0.42, 0], r: [0, 0, -0.32], c: '#60a5fa' },
      { g: 'capsule', a: [0.14, 0.75, 8, 16], p: [-0.55, -0.42, 0], r: [0, 0, 0.32], c: '#60a5fa' },
    ],
    parts: {
      chromatid: {
        anchor: [-1.05, -0.5, 0.15],
        meshes: [
          { g: 'capsule', a: [0.14, 0.75, 8, 16], p: [-0.85, 0.42, 0], r: [0, 0, 0.32], c: '#2563eb' },
          { g: 'capsule', a: [0.14, 0.75, 8, 16], p: [-0.85, -0.42, 0], r: [0, 0, -0.32], c: '#2563eb' },
        ],
      },
      centromere: { anchor: [-0.7, 0, 0.2], meshes: [{ g: 'sphere', a: [0.15, 16, 16], p: [-0.7, 0, 0], c: '#f59e0b' }] },
      dna: { anchor: [0.85, 0.35, 0.3], meshes: helix({ x: 0.8 }) },
      gene: { anchor: [-0.95, 0.55, 0.2], meshes: [{ g: 'cyl', a: [0.16, 0.16, 0.14, 16], p: [-0.94, 0.62, 0], r: [0, 0, 0.32], c: '#10b981' }] },
    },
  },

  // Unit 10: energy pyramid
  ecology: {
    rot: [0.3, -0.45],
    shell: [
      { g: 'box', a: [0.32, 0.3, 0.32], p: [0, 0.48, 0], c: '#e65100' },
      ...range(4, (i) => ({ g: 'cone', a: [0.12, 0.3, 10], p: [-0.85 + i * 0.25, -0.38, 0.4], c: '#2e7d32' })),
    ],
    parts: {
      producers: { anchor: [0.95, -0.72, 0.55], meshes: [{ g: 'box', a: [2.0, 0.35, 1.0], p: [0, -0.72, 0], c: '#3d8b40' }] },
      primary: { anchor: [0.65, -0.32, 0.45], meshes: [{ g: 'box', a: [1.4, 0.35, 0.8], p: [0, -0.33, 0], c: '#9ccc65' }] },
      secondary: { anchor: [0.35, 0.08, 0.35], meshes: [{ g: 'box', a: [0.8, 0.35, 0.6], p: [0, 0.07, 0], c: '#f9a825' }] },
      decomposers: {
        anchor: [1.3, -0.95, 0.5],
        meshes: range(3, (i) => [
          { g: 'cyl', a: [0.03, 0.035, 0.14, 8], p: [1.15 + i * 0.13, -1.0, 0.35], c: '#efebe9' },
          { g: 'sphere', a: [0.08, 12, 8, 0, PI * 2, 0, PI / 2], p: [1.15 + i * 0.13, -0.93, 0.35], c: '#8d6e63' },
        ]).flat(),
      },
    },
  },
};

// Real anatomy for the units that have it (see anatomy.js). Labelled parts keep the
// keys used by the unit's lesson content; unlabelled ones form the shell.

export function realSpec(unitId) {
  const name = UNIT_MODEL[unitId];
  const m = name && ANATOMY[name];
  if (!m) return null;
  const all = Object.entries(m.parts);
  return {
    real: name,
    rot: m.view,
    parts: Object.fromEntries(all.filter(([, p]) => p.label).map(([k, p]) => [k, p])),
    shell: all.filter(([, p]) => !p.label).map(([k, p]) => ({ key: k, ...p })),
  };
}
