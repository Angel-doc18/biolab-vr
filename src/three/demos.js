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
import { BIOLOGY_DEMOS } from './demosBiology';

const ALL = { ...BIOLOGY_DEMOS };

// The demonstration for a model ('digestive' for the real anatomy, 'nutrition'
// for the built-in one, 'ch-acids', ...), or null.
export function demoFor(name) {
  return (name && ALL[name]) || null;
}

// About how long the teacher takes to say a step, in seconds.
export const sayTime = (text) => Math.max(2.5, String(text || '').split(/\s+/).length / 2.6);
