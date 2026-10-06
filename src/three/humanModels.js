// Procedural 3D models for the Human Biology topics that Biology has no model
// for: the endocrine glands, the female reproductive system, and pathogens with
// the body's defences. Same spec as models.js; part keys match the `vr.parts`
// of the units in src/data/humanbio/units.js. Pin anchors sit in front of the
// model (positive z) so they stay visible.

const PI = Math.PI;
const range = (n, f) => Array.from({ length: n }, (_, i) => f(i));

const SKIN = '#e9c7a8';

// A Y-shaped antibody made of three thin cylinders, centred at p and turned by a.
function antibody(p, a) {
  const [x, y, z] = p;
  const dx = Math.cos(a);
  const dy = Math.sin(a);
  const stem = [x - dx * 0.09, y - dy * 0.09, z];
  return [
    { g: 'cyl', a: [0.018, 0.018, 0.18, 6], p: stem, r: [0, 0, a - PI / 2], c: '#f59e0b' },
    { g: 'cyl', a: [0.016, 0.016, 0.14, 6], p: [x + Math.cos(a + 0.6) * 0.06, y + Math.sin(a + 0.6) * 0.06, z], r: [0, 0, a + 0.6 - PI / 2], c: '#f59e0b' },
    { g: 'cyl', a: [0.016, 0.016, 0.14, 6], p: [x + Math.cos(a - 0.6) * 0.06, y + Math.sin(a - 0.6) * 0.06, z], r: [0, 0, a - 0.6 - PI / 2], c: '#f59e0b' },
  ];
}

export const HUMAN_MODELS = {
  // Human Biology: the endocrine glands in an outline of the body
  'hb-hormones': {
    rot: [0.1, -0.35],
    shell: [
      { g: 'sphere', a: [0.32, 24, 24], p: [0, 1.32, 0], c: SKIN, o: 0.22 },
      { g: 'sphere', a: [0.24, 20, 20], p: [0, 1.38, 0], s: [1, 0.75, 1.1], c: '#f4a6c1', o: 0.35 },
      { g: 'cyl', a: [0.12, 0.14, 0.3, 16], p: [0, 0.98, 0], c: SKIN, o: 0.22 },
      { g: 'capsule', a: [0.46, 1.1, 12, 24], p: [0, 0.1, 0], c: SKIN, o: 0.16 },
      ...[-1, 1].map((sx) => ({ g: 'sphere', a: [0.12, 16, 16], p: [sx * 0.22, -0.08, -0.12], s: [0.7, 1, 0.6], c: '#a0522d', o: 0.75 })),
    ],
    parts: {
      pituitary: { anchor: [0.12, 1.24, 0.35], meshes: [{ g: 'sphere', a: [0.06, 14, 14], p: [0, 1.26, 0.04], c: '#7c3aed' }] },
      thyroid: {
        anchor: [0.2, 0.96, 0.25],
        meshes: [
          ...[-1, 1].map((sx) => ({ g: 'sphere', a: [0.06, 14, 14], p: [sx * 0.07, 0.95, 0.12], s: [0.8, 1.4, 0.7], c: '#dc2626' })),
          { g: 'cyl', a: [0.025, 0.025, 0.12, 8], p: [0, 0.93, 0.13], r: [0, 0, PI / 2], c: '#dc2626' },
        ],
      },
      adrenal: { anchor: [0.36, 0.14, 0.2], meshes: [-1, 1].map((sx) => ({ g: 'cone', a: [0.07, 0.1, 10], p: [sx * 0.22, 0.1, -0.1], c: '#f59e0b' })) },
      pancreas: { anchor: [0.32, -0.3, 0.35], meshes: [{ g: 'capsule', a: [0.055, 0.28, 8, 14], p: [0.06, -0.3, 0.16], r: [0, 0, PI / 2 + 0.2], c: '#facc15' }] },
      gonads: { anchor: [0.32, -0.55, 0.3], meshes: [-1, 1].map((sx) => ({ g: 'sphere', a: [0.07, 14, 14], p: [sx * 0.18, -0.55, 0.05], s: [1.2, 0.8, 0.8], c: '#ec4899' })) },
    },
  },

  // Human Biology: the female reproductive system, seen from the front
  'hb-reproduction': {
    rot: [0.15, -0.25],
    shell: [
      ...[-1, 1].map((sx) => ({ g: 'cone', a: [0.08, 0.16, 10], p: [sx * 0.9, 0.42, 0], r: [0, 0, sx * 1.2], c: '#f9a8d4' })),
    ],
    parts: {
      uterus: {
        anchor: [0.18, 0.15, 0.45],
        meshes: [
          { g: 'sphere', a: [0.5, 28, 28], p: [0, 0.12, 0], s: [1, 1.15, 0.7], c: '#f472b6' },
          { g: 'sphere', a: [0.34, 24, 24], p: [0, 0.15, 0.02], s: [1, 1.15, 0.7], c: '#fbcfe8', o: 0.6 },
        ],
      },
      oviduct: {
        anchor: [-0.62, 0.62, 0.15],
        meshes: [-1, 1].map((sx) => ({ g: 'torus', a: [0.32, 0.045, 10, 30, PI * 0.8], p: [sx * 0.62, 0.38, 0], r: [0, sx > 0 ? 0 : PI, PI * 0.05], c: '#ec4899' })),
      },
      ovary: { anchor: [1.0, 0.18, 0.25], meshes: [-1, 1].map((sx) => ({ g: 'sphere', a: [0.15, 18, 18], p: [sx * 0.95, 0.16, 0], s: [1.25, 0.8, 0.7], c: '#fde68a' })) },
      cervix: {
        anchor: [0.25, -0.75, 0.25],
        meshes: [
          { g: 'cyl', a: [0.15, 0.13, 0.25, 18], p: [0, -0.55, 0], c: '#db2777' },
          { g: 'cyl', a: [0.16, 0.2, 0.55, 18], p: [0, -0.95, 0], c: '#f9a8d4', o: 0.85 },
        ],
      },
    },
  },

  // Human Biology: pathogens and the body's defences
  'hb-health': {
    rot: [0.2, -0.2],
    shell: range(4, (i) => ({ g: 'sphere', a: [0.2, 18, 18], p: [-0.2 + i * 0.25, 0.05 + (i % 2) * 0.12, -0.6], s: [1, 0.35, 1], r: [PI / 2 - 0.3, 0, 0], c: '#ef4444', o: 0.55 })),
    parts: {
      virus: {
        anchor: [-0.75, 0.82, 0.3],
        meshes: [
          { g: 'sphere', a: [0.2, 20, 20], p: [-0.95, 0.55, 0], c: '#7c3aed' },
          ...range(14, (i) => {
            const t = (i / 14) * PI * 2;
            const u = ((i % 3) - 1) * 0.7;
            return { g: 'sphere', a: [0.035, 8, 8], p: [-0.95 + Math.cos(t) * Math.cos(u) * 0.25, 0.55 + Math.sin(u) * 0.25, Math.sin(t) * Math.cos(u) * 0.25], c: '#c4b5fd' };
          }),
        ],
      },
      bacterium: {
        anchor: [1.1, 0.78, 0.3],
        meshes: [
          { g: 'capsule', a: [0.13, 0.42, 10, 18], p: [0.85, 0.55, 0], r: [0, 0, PI / 2 - 0.3], c: '#16a34a' },
          ...range(5, (i) => ({ g: 'cyl', a: [0.012, 0.012, 0.12, 6], p: [1.2 + i * 0.1, 0.42 + (i % 2 ? 0.04 : -0.04), 0], r: [0, 0, i % 2 ? 0.8 : -0.8], c: '#166534' })),
        ],
      },
      plasmodium: {
        anchor: [-0.7, -0.35, 0.3],
        meshes: [
          { g: 'sphere', a: [0.3, 24, 24], p: [-0.85, -0.55, 0], s: [1, 1, 0.4], c: '#dc2626' },
          { g: 'torus', a: [0.09, 0.025, 8, 24], p: [-0.82, -0.52, 0.11], c: '#6d28d9' },
          { g: 'sphere', a: [0.035, 10, 10], p: [-0.75, -0.46, 0.12], c: '#4c1d95' },
        ],
      },
      antibodies: {
        anchor: [1.15, -0.2, 0.35],
        meshes: [
          { g: 'sphere', a: [0.28, 24, 24], p: [0.85, -0.55, 0], c: '#bae6fd', o: 0.5 },
          { g: 'sphere', a: [0.2, 20, 20], p: [0.87, -0.53, 0.06], c: '#6d28d9' },
          ...range(4, (i) => antibody([0.85 + Math.cos(i * 1.4 + 0.3) * 0.48, -0.55 + Math.sin(i * 1.4 + 0.3) * 0.48, 0.05], i * 1.4 + 0.3)).flat(),
        ],
      },
    },
  },
};
