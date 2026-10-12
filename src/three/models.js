// Procedural 3D specimens, one per syllabus unit. Pure data so the same spec
// renders in the touch viewer and in stereoscopic VR, and ships with zero
// downloaded model files (everything works offline).
//
// mesh: { g: geometry, a: args, p: position, r: rotation, s: scale, c: colour, o: opacity,
//         an: movement (see anim.js) }
// part.anchor is where that part's numbered pin sits (in model space); part.an
// moves the whole part.

import { ANATOMY, UNIT_MODEL } from './anatomy';
import { alongPath } from './anim';
import { CHEM_MODELS } from './chemModels';
import { PHYS_MODELS } from './physModels';
import { HUMAN_MODELS } from './humanModels';

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
  ...HUMAN_MODELS,

  // Forms 1 and 3: an animal cell and a plant cell side by side, so the shared
  // parts and the three plant-only parts can be compared. The chloroplasts are
  // carried round the plant cell by the moving cytoplasm (cytoplasmic streaming).
  cell: (() => {
    const A = [-1.05, 0, 0]; // animal cell centre
    const P = [1.0, 0, 0]; // plant cell centre
    const at = (c, d) => [c[0] + d[0], c[1] + d[1], c[2] + d[2]];
    const mito = (pos, rz) => ({ g: 'capsule', a: [0.055, 0.17, 6, 12], p: pos, r: [0, 0, rz], c: '#e8833a' });
    // the chloroplasts' track: an ellipse between the vacuole and the membrane
    const track = range(28, (i) => {
      const t = (i / 28) * PI * 2;
      return [P[0] + 0.44 * Math.cos(t), 0.58 * Math.sin(t), 0.14];
    });
    const chloros = range(8, (i) => {
      const phase = i / 8;
      const pos = alongPath([0, 0, 0], track, phase);
      return { g: 'sphere', a: [0.085, 16, 12], p: pos, s: [1.35, 0.8, 0.75], c: '#2e8b3e', an: { k: 'path', pts: track, speed: 0.035, phase } };
    });
    return {
      rot: [0.12, -0.18],
      shell: [],
      parts: {
        membrane: {
          anchor: at(A, [-0.66, 0.42, 0.22]),
          meshes: [
            { g: 'sphere', a: [0.85, 40, 28], p: A, s: [1, 0.82, 0.62], c: '#e27d98', o: 0.22 },
            { g: 'box', a: [1.22, 1.52, 0.55], p: P, c: '#e27d98', o: 0.16 },
          ],
        },
        cytoplasm: {
          anchor: at(A, [0.45, -0.38, 0.25]),
          meshes: [
            { g: 'sphere', a: [0.8, 36, 24], p: A, s: [1, 0.8, 0.58], c: '#f6dcb0', o: 0.3 },
            { g: 'box', a: [1.17, 1.47, 0.5], p: P, c: '#f6dcb0', o: 0.22 },
          ],
        },
        nucleus: {
          anchor: at(A, [0, 0.07, 0.3]),
          meshes: [
            { g: 'sphere', a: [0.25, 28, 20], p: at(A, [0, 0.06, 0.02]), c: '#7b5ea7' },
            { g: 'sphere', a: [0.08, 14, 10], p: at(A, [0.06, 0.1, 0.2]), c: '#43286e' },
            { g: 'sphere', a: [0.16, 22, 16], p: at(P, [0.33, 0.52, 0.06]), c: '#7b5ea7' },
            { g: 'sphere', a: [0.05, 12, 8], p: at(P, [0.36, 0.55, 0.19]), c: '#43286e' },
          ],
        },
        mitochondrion: {
          anchor: at(A, [-0.42, -0.22, 0.22]),
          meshes: [
            mito(at(A, [-0.42, -0.22, 0.14]), 0.9),
            mito(at(A, [0.42, 0.22, 0.12]), -0.5),
            mito(at(A, [-0.35, 0.3, 0.1]), 0.2),
            mito(at(A, [0.25, -0.33, 0.1]), 1.4),
            mito(at(P, [-0.42, 0.6, 0.12]), 0.1),
            mito(at(P, [0.4, -0.62, 0.12]), 1.3),
          ],
        },
        wall: {
          anchor: at(P, [0.65, 0.66, 0.31]),
          meshes: [{ g: 'box', a: [1.3, 1.6, 0.62], p: P, c: '#6a9f4e', o: 0.3 }],
        },
        chloroplast: {
          anchor: at(P, [-0.44, -0.05, 0.22]),
          meshes: chloros,
        },
        vacuole: {
          anchor: at(P, [0.05, -0.2, 0.3]),
          meshes: [{ g: 'sphere', a: [0.3, 32, 24], p: at(P, [0, -0.02, 0]), s: [1, 1.42, 0.85], c: '#8ec9ea', o: 0.6 }],
        },
      },
    };
  })(),

  // Unit 2: digestive system
  nutrition: {
    rot: [0.2, -0.35],
    shell: [
      { g: 'cyl', a: [0.09, 0.09, 0.8, 12], p: [0.3, 1.3, 0], c: '#e7a38c' },
    ],
    parts: {
      stomach: { anchor: [0.62, 0.62, 0.35], meshes: [{ g: 'sphere', a: [0.55, 24, 24], p: [0.35, 0.6, 0], s: [1, 0.7, 0.7], c: '#e07a5f' }] },
      liver: { anchor: [-0.85, 0.85, 0.35], meshes: [{ g: 'sphere', a: [0.6, 24, 24], p: [-0.55, 0.85, 0], s: [1.3, 0.55, 0.7], c: '#8c3b2e' }, { g: 'sphere', a: [0.13, 12, 12], p: [-0.35, 0.5, 0.3], c: '#6b8e23' }] },
      pancreas: { anchor: [0.3, 0.12, 0.3], meshes: [{ g: 'capsule', a: [0.12, 0.8, 8, 16], p: [0.25, 0.12, 0.15], r: [0, 0, PI / 2], c: '#f2c14e' }] },
      colon: {
        anchor: [-0.95, -0.85, 0.1],
        meshes: [{ g: 'torus', a: [0.95, 0.12, 12, 40, PI * 1.6], p: [0, -0.55, -0.15], r: [0, 0, -PI * 0.3], c: '#c98a6b' }],
      },
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
      lv: { anchor: [0.5, -0.55, 0.5], an: { k: 'pulse', amp: 0.07, speed: 6.3, phase: -0.9, at: [0.2, -0.6, 0.1] }, meshes: [{ g: 'sphere', a: [0.62, 24, 24], p: [0.25, -0.35, 0.1], s: [1, 1.15, 1], c: '#9b1c1c' }, { g: 'cone', a: [0.5, 0.7, 24], p: [0.1, -1.0, 0.1], r: [PI, 0, 0.25], c: '#9b1c1c' }] },
      atria: { anchor: [-0.55, 0.55, 0.35], an: { k: 'pulse', amp: 0.06, speed: 6.3, at: [0, 0.44, 0.03] }, meshes: [{ g: 'sphere', a: [0.36, 20, 20], p: [-0.45, 0.45, 0.1], c: '#e8837c' }, { g: 'sphere', a: [0.33, 20, 20], p: [0.45, 0.42, -0.05], c: '#e8837c' }] },
      aorta: { anchor: [0.15, 1.3, 0.15], meshes: [{ g: 'torus', a: [0.35, 0.12, 12, 24, PI], p: [0.1, 0.95, 0], c: '#e4483c' }, { g: 'cyl', a: [0.12, 0.12, 0.5, 14], p: [0.45, 0.7, 0], c: '#e4483c' }] },
      venacava: { anchor: [-0.8, 1.1, 0.1], meshes: [{ g: 'cyl', a: [0.13, 0.13, 1.1, 14], p: [-0.75, 0.7, -0.1], c: '#4a5a8c' }] },
    },
  },

  // Unit 4: lungs
  gas: {
    rot: [0.1, -0.25],
    shell: [
      { g: 'sphere', a: [0.6, 24, 24], p: [-0.62, -0.05, 0], s: [0.8, 1.25, 0.6], c: '#f28b82', o: 0.55, an: { k: 'breathe', amp: 0.08, speed: 1.3 } },
      { g: 'sphere', a: [0.6, 24, 24], p: [0.62, -0.05, 0], s: [0.8, 1.25, 0.6], c: '#f28b82', o: 0.55, an: { k: 'breathe', amp: 0.08, speed: 1.3 } },
    ],
    parts: {
      trachea: { anchor: [0, 1.25, 0.2], meshes: [{ g: 'cyl', a: [0.13, 0.13, 0.8, 16], p: [0, 1.1, 0], c: '#cfd8dc' }, ...range(4, (i) => ({ g: 'torus', a: [0.14, 0.025, 6, 20], p: [0, 0.8 + i * 0.18, 0], r: [PI / 2, 0, 0], c: '#90a4ae' }))] },
      bronchi: { anchor: [-0.35, 0.55, 0.2], meshes: [{ g: 'cyl', a: [0.08, 0.08, 0.65, 12], p: [-0.25, 0.55, 0], r: [0, 0, -0.7], c: '#b0bec5' }, { g: 'cyl', a: [0.08, 0.08, 0.65, 12], p: [0.25, 0.55, 0], r: [0, 0, 0.7], c: '#b0bec5' }] },
      alveoli: { anchor: [0.72, -0.2, 0.45], meshes: range(9, (i) => ({ g: 'sphere', a: [0.075, 10, 10], p: [0.62 + Math.cos(i) * 0.14, -0.2 + Math.sin(i * 1.7) * 0.14, 0.32 + (i % 3) * 0.04], c: '#e11d48' })) },
      // Breathing in: the diaphragm contracts and flattens (moves down) as the lungs fill.
      diaphragm: { anchor: [0.3, -0.78, 0.32], an: { k: 'breathe', d: [0, -0.12, 0], speed: 1.3 }, meshes: [{ g: 'sphere', a: [1.25, 32, 12, 0, PI * 2, 0, 0.5], p: [0, -1.95, 0], c: '#b5651d', o: 0.85 }] },
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
      dna: { anchor: [0.85, 0.35, 0.3], an: { k: 'spin', axis: 'y', speed: 0.6, at: [0.8, 0, 0] }, meshes: helix({ x: 0.8 }) },
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

// Movement of the real anatomy parts, about each part's own centre.
const REAL_MOTION = {
  heart: { atria: { k: 'pulse', amp: 0.05, speed: 6.3 }, lv: { k: 'pulse', amp: 0.06, speed: 6.3, phase: -0.9 } },
  lungs: { alveoli: { k: 'breathe', amp: 0.07, speed: 1.3 }, bronchi: { k: 'breathe', amp: 0.03, speed: 1.3 }, diaphragm: { k: 'breathe', d: [0, -0.1, 0], speed: 1.3 } },
};

export function realSpec(unitId) {
  const name = UNIT_MODEL[unitId];
  const m = name && ANATOMY[name];
  if (!m) return null;
  const all = Object.entries(m.parts);
  const moves = REAL_MOTION[name] || {};
  const withMotion = (k, p) => (moves[k] ? { ...p, an: { ...moves[k], at: p.centre } } : p);
  return {
    real: name,
    rot: m.view,
    parts: Object.fromEntries(all.filter(([, p]) => p.label).map(([k, p]) => [k, withMotion(k, p)])),
    shell: all.filter(([, p]) => !p.label).map(([k, p]) => ({ key: k, ...p })),
  };
}
