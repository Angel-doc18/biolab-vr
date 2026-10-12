// Movement for the 3D models, so a model can show a process and not only a
// shape: particles vibrating in a solid, a wave travelling, a coil turning, a
// heart beating. A mesh or a part may carry `an`, one of:
//
//   { k: 'jiggle', amp, speed }        vibrate about its place (particles in a solid)
//   { k: 'slosh', amp, speed }         wander slowly about its place (a liquid)
//   { k: 'drift', box, speed }         fly in straight lines, bouncing off the walls of
//                                      box [x0, y0, z0, x1, y1, z1] (a gas)
//   { k: 'orbit', c, axis, speed }     go round centre c about axis 'x', 'y' or 'z'
//   { k: 'wave', dir, amp, kx, speed, rest, x0 } sit at rest + amp * sin(kx * x0 - speed * t) along dir
//   { k: 'breathe', amp, d, speed }    swell smoothly (and move by d) and back (a breath)
//   { k: 'ramp', d, speed }            move by d, fast then slower, and start again
//   { k: 'path', pts, speed, phase }   travel round a closed path of points
//   { k: 'fly', from, to, speed, phase } travel from one point to another, again and again
//   { k: 'slide', d, speed, phase }    move back and forth by vector d
//   { k: 'pulse', amp, speed, phase, at } grow and shrink about point at (a beat)
//   { k: 'spin', axis, speed, at }     turn about an axis through point at
//
// Speeds are in radians (or units) per second. Everything is a pure function of
// time, so a paused model always returns to the same resting place.
const AXES = { x: 0, y: 1, z: 2 };

// A steady pseudo-random number in [0, 1) for a seed, so every particle moves
// differently but the same way each time the model opens.
export function rand(seed) {
  const x = Math.sin(seed * 127.1 + 311.7) * 43758.5453;
  return x - Math.floor(x);
}

// Triangle wave in [0, 1]: goes up and comes back, for bouncing.
const tri = (u) => {
  const f = u - Math.floor(u);
  return f < 0.5 ? f * 2 : 2 - f * 2;
};

function rotateAbout(out, p, c, axis, ang) {
  const i = AXES[axis] ?? 1;
  const a = (i + 1) % 3;
  const b = (i + 2) % 3;
  const da = p[a] - c[a];
  const db = p[b] - c[b];
  const cos = Math.cos(ang);
  const sin = Math.sin(ang);
  out[i] = p[i];
  out[a] = c[a] + da * cos - db * sin;
  out[b] = c[b] + da * sin + db * cos;
  return out;
}

export function alongPath(out, pts, u) {
  const n = pts.length;
  let total = 0;
  const lens = pts.map((p, i) => {
    const q = pts[(i + 1) % n];
    const l = Math.hypot(q[0] - p[0], q[1] - p[1], q[2] - p[2]);
    total += l;
    return l;
  });
  let d = (u - Math.floor(u)) * total;
  for (let i = 0; i < n; i++) {
    if (d <= lens[i] || i === n - 1) {
      const p = pts[i];
      const q = pts[(i + 1) % n];
      const f = lens[i] ? d / lens[i] : 0;
      out[0] = p[0] + (q[0] - p[0]) * f;
      out[1] = p[1] + (q[1] - p[1]) * f;
      out[2] = p[2] + (q[2] - p[2]) * f;
      return out;
    }
    d -= lens[i];
  }
  return out;
}

// Where an animated object should be at time t (seconds): position, uniform
// scale and rotation (Euler angles), from its resting position p.
export function pose(an, p, t, seed = 0) {
  const pos = [p[0], p[1], p[2]];
  let scale = 1;
  let rot = null;
  const r1 = rand(seed);
  const r2 = rand(seed + 1.7);
  const r3 = rand(seed + 3.1);
  switch (an.k) {
    case 'jiggle': {
      const s = an.speed ?? 14;
      const a = an.amp ?? 0.02;
      pos[0] += a * Math.sin(t * s * (0.8 + r1 * 0.4) + r2 * 6.28);
      pos[1] += a * Math.sin(t * s * (0.8 + r2 * 0.4) + r3 * 6.28);
      pos[2] += a * Math.sin(t * s * (0.8 + r3 * 0.4) + r1 * 6.28);
      break;
    }
    case 'slosh': {
      const s = an.speed ?? 1.4;
      const a = an.amp ?? 0.08;
      pos[0] += a * Math.sin(t * s * (0.7 + r1 * 0.6) + r2 * 6.28);
      pos[1] += a * 0.5 * Math.sin(t * s * (0.6 + r2 * 0.5) + r3 * 6.28);
      pos[2] += a * Math.sin(t * s * (0.7 + r3 * 0.6) + r1 * 6.28);
      break;
    }
    case 'drift': {
      const [x0, y0, z0, x1, y1, z1] = an.box;
      const s = an.speed ?? 0.5;
      const v = [r1 - 0.5, r2 - 0.5, r3 - 0.5];
      const len = Math.hypot(...v) || 1;
      const lo = [x0, y0, z0];
      const hi = [x1, y1, z1];
      for (let i = 0; i < 3; i++) {
        const span = hi[i] - lo[i] || 1;
        const start = (p[i] - lo[i]) / span / 2;
        pos[i] = lo[i] + span * tri(start + (t * s * v[i]) / len / span);
      }
      break;
    }
    case 'orbit':
      rotateAbout(pos, p, an.c || [0, 0, 0], an.axis || 'y', t * (an.speed ?? 0.8));
      break;
    case 'wave': {
      // `rest` is the undisturbed place and `x0` the place along the wave, so a
      // model drawn at the moment t = 0 starts exactly as drawn.
      const i = AXES[an.dir || 'y'];
      const rest = an.rest ?? p[i];
      const x0 = an.x0 ?? p[0];
      pos[i] = rest + (an.amp ?? 0.1) * Math.sin((an.kx ?? 3) * x0 - t * (an.speed ?? 3));
      break;
    }
    case 'breathe': {
      // In and out smoothly: grows (and moves by d) to the full breath, then back.
      const f = 0.5 - 0.5 * Math.cos(t * (an.speed ?? 1.3) + (an.phase ?? 0));
      scale = 1 + (an.amp ?? 0) * f;
      if (an.at && an.amp) for (let i = 0; i < 3; i++) pos[i] = an.at[i] + (p[i] - an.at[i]) * scale;
      if (an.d) for (let i = 0; i < 3; i++) pos[i] += an.d[i] * f;
      break;
    }
    case 'ramp': {
      // Moves by d quickly at first, then more and more slowly, and starts again:
      // the shape of a reaction that slows down as it uses up its reactants.
      const u = t * (an.speed ?? 0.15) + (an.phase ?? 0);
      const f = 1 - (1 - (u - Math.floor(u))) ** 3;
      for (let i = 0; i < 3; i++) pos[i] = p[i] + an.d[i] * f;
      break;
    }
    case 'path':
      alongPath(pos, an.pts, t * (an.speed ?? 0.2) + (an.phase ?? 0));
      break;
    case 'fly': {
      const u = t * (an.speed ?? 0.5) + (an.phase ?? 0);
      const f = u - Math.floor(u);
      for (let i = 0; i < 3; i++) pos[i] = an.from[i] + (an.to[i] - an.from[i]) * f;
      break;
    }
    case 'slide': {
      const w = Math.sin(t * (an.speed ?? 1.3) + (an.phase ?? 0));
      for (let i = 0; i < 3; i++) pos[i] = p[i] + an.d[i] * w;
      break;
    }
    case 'pulse': {
      // A beat: a quick squeeze, then a slower relaxation, about once a second.
      const ph = t * (an.speed ?? 6.3) + (an.phase ?? 0);
      const beat = Math.max(0, Math.sin(ph)) ** 3;
      scale = 1 - (an.amp ?? 0.06) * beat;
      if (an.at) for (let i = 0; i < 3; i++) pos[i] = an.at[i] + (p[i] - an.at[i]) * scale;
      break;
    }
    case 'spin': {
      const ang = t * (an.speed ?? 1.2);
      const i = AXES[an.axis || 'y'];
      rot = [0, 0, 0];
      rot[i] = ang;
      if (an.at) rotateAbout(pos, p, an.at, an.axis || 'y', ang);
      break;
    }
    default:
      break;
  }
  return { pos, scale, rot };
}

// Scales the lengths inside an animation, for models that are shrunk to fit.
export function scaleAnim(an, k) {
  if (!an) return an;
  const v = (a) => a && a.map((x) => x * k);
  return {
    ...an,
    ...(an.amp != null && an.k !== 'pulse' && an.k !== 'breathe' && { amp: an.amp * k }),
    ...(an.rest != null && { rest: an.rest * k }),
    ...(an.x0 != null && { x0: an.x0 * k }),
    ...(an.kx != null && { kx: an.kx / k }),
    ...(an.c && { c: v(an.c) }),
    ...(an.at && { at: v(an.at) }),
    ...(an.d && { d: v(an.d) }),
    ...(an.box && { box: v(an.box) }),
    ...(an.from && { from: v(an.from) }),
    ...(an.to && { to: v(an.to) }),
    ...(an.pts && { pts: an.pts.map(v) }),
  };
}

// True when a model has anything that moves.
export const hasMotion = (spec) =>
  !!spec &&
  (Object.values(spec.parts || {}).some((q) => q.an || (q.meshes || []).some((m) => m.an)) || (spec.shell || []).some((m) => m.an));
