// "Watch it work": for each 3D model, the teacher explains the process step by
// step while the model shows it happening. A step:
//
//   part   the labelled part that lights up and turns to the student (or null)
//   en, fr what the teacher says: what happens here and why
//   name   [en, fr] the name of what moves, shown next to it from this step on
//   path   points the moving thing travels through during the step (model space)
//   from   where it appears at the start of the step (a jump)
//   c, r   its colour and size from this step on
//   hide   nothing moves in this step
//   flows  streams of small dots: [{ pts, c, r, n, speed }]
//   act    parts (or keyed shell meshes) that move only now: { key: anim } (anim.js)
//
// Models with a real anatomy version have two sets of points: the downloaded
// model and the built-in one have different shapes.
//   raw    the points are in the model's own units, before it was shrunk to fit
//          the screen (chemModels.js fit): they are scaled by the model's k.
//   paint  { part: [from colour, to colour] }: that part's meshes of the first
//          colour change to the second, and stay so until the demonstration ends
import { BIOLOGY_DEMOS } from './demosBiology';
import { CHEMISTRY_DEMOS } from './demosChemistry';
import { scaleAnim } from './anim';

const ALL = { ...BIOLOGY_DEMOS, ...CHEMISTRY_DEMOS };

const v = (p, k) => p && p.map((x) => x * k);
function scaled(demo, k) {
  return {
    ...demo,
    steps: demo.steps.map((s) => ({
      ...s,
      ...(s.path && { path: s.path.map((p) => v(p, k)) }),
      ...(s.from && { from: v(s.from, k) }),
      ...(s.r != null && { r: s.r * k }),
      ...(s.flows && { flows: s.flows.map((f) => ({ ...f, pts: f.pts.map((p) => v(p, k)), r: (f.r ?? 0.035) * k })) }),
      ...(s.act && { act: Object.fromEntries(Object.entries(s.act).map(([key, an]) => [key, scaleAnim(an, k)])) }),
    })),
  };
}
const memo = new Map();

// The demonstration for a model ('digestive' for the real anatomy, 'nutrition'
// for the built-in one, 'ch-acids', ...), or null. spec: the model shown.
export function demoFor(name, spec) {
  const d = name && ALL[name];
  if (!d) return null;
  const k = d.raw ? spec?.k ?? 1 : 1;
  if (k === 1) return d;
  const id = `${name}:${k}`;
  if (!memo.has(id)) memo.set(id, scaled(d, k));
  return memo.get(id);
}

// About how long the teacher takes to say a step, in seconds.
export const sayTime = (text) => Math.max(2.5, String(text || '').split(/\s+/).length / 2.6);
