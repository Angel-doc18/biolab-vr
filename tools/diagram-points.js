// Works out where the teacher's pointer rests for every fact of every drawn
// diagram, and writes src/diagrams/points.js.
//
//   node tools/diagram-points.js            write the table
//   node tools/diagram-points.js --report   also list facts placed by fallback
//
// The chart builders (flow, cycle, tree, columns) already give exact points.
// For drawn figures, each figure is rendered to SVG text, every piece of text
// on it is found with its position, and each fact is placed on the text that
// shares its rarest words and numbers (a label's ruled-line point counts too).
// A fact that shares nothing with the drawing rests on the drawing's centre.
// Run it again whenever diagrams or their facts change.
/* global __dirname */
/* eslint-disable react/display-name */
const path = require('path');
const fs = require('fs');
const Module = require('module');

const repo = path.join(__dirname, '..');
require(path.join(repo, 'node_modules/sucrase/register'));
const React = require(path.join(repo, 'node_modules/react'));
global.React = React;
const { renderToStaticMarkup } = require(path.join(repo, 'node_modules/react-dom/server'));

// Draw react-native-svg elements as plain SVG tags, and stub the app's UI.
const tag = (t) => ({ children, ...p }) => React.createElement(t, p, children);
const svg = {
  __esModule: true,
  default: ({ children, viewBox }) => React.createElement('svg', { viewBox }, children),
  Circle: tag('circle'),
  Ellipse: tag('ellipse'),
  G: ({ children, onPress, ...p }) => React.createElement('g', p, children),
  Line: tag('line'),
  Path: tag('path'),
  Rect: tag('rect'),
  Polygon: tag('polygon'),
  Polyline: tag('polyline'),
  Text: tag('text'),
  TSpan: tag('tspan'),
  Defs: tag('defs'),
  LinearGradient: tag('linearGradient'),
  Stop: tag('stop'),
  ClipPath: tag('clipPath'),
};
const rn = { __esModule: true, View: ({ children }) => React.createElement('div', null, children) };
const stub = new Proxy({}, { get: (t, k) => (k === '__esModule' ? true : k === 'default' ? stub : function Stub() { return null; }) });
const load = Module._load;
Module._load = function (r, p, m) {
  if (r === 'react-native-svg') return svg;
  if (r === 'react-native') return rn;
  if (r.endsWith('/i18n') || r.startsWith('expo') || r === 'twrnc' || r.includes('/ui/') || r.includes('/state/') || r.includes('/lib/')) return stub;
  if (r === './points') return { POINTS: {} };
  return load.call(this, r, p, m);
};
const { DIAGRAMS } = require(path.join(repo, 'src/diagrams/index.js'));
console.error = () => {};

// ---------- reading text and its position out of the SVG ----------
const num = (v, d = 0) => (v == null || v === '' || Number.isNaN(Number(v)) ? d : Number(v));
const attr = (s, name) => {
  const m = s.match(new RegExp(`\\s${name}="([^"]*)"`));
  return m ? m[1] : null;
};
const decode = (t) => t.replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&#x27;/g, "'").replace(/&#39;/g, "'").replace(/&amp;/g, '&');

// A transform as [a, b, c, d, e, f] (x' = a x + c y + e, y' = b x + d y + f).
function parseTransform(t) {
  let m = [1, 0, 0, 1, 0, 0];
  if (!t) return m;
  const mul = (p, q) => [p[0] * q[0] + p[2] * q[1], p[1] * q[0] + p[3] * q[1], p[0] * q[2] + p[2] * q[3], p[1] * q[2] + p[3] * q[3], p[0] * q[4] + p[2] * q[5] + p[4], p[1] * q[4] + p[3] * q[5] + p[5]];
  for (const [, fn, args] of t.matchAll(/(\w+)\s*\(([^)]*)\)/g)) {
    const a = args.split(/[\s,]+/).filter(Boolean).map(Number);
    if (fn === 'translate') m = mul(m, [1, 0, 0, 1, a[0] || 0, a[1] || 0]);
    else if (fn === 'scale') m = mul(m, [a[0], 0, 0, a[1] ?? a[0], 0, 0]);
    else if (fn === 'matrix') m = mul(m, a);
    else if (fn === 'rotate') {
      const r = ((a[0] || 0) * Math.PI) / 180;
      const [cx, cy] = [a[1] || 0, a[2] || 0];
      m = mul(m, [1, 0, 0, 1, cx, cy]);
      m = mul(m, [Math.cos(r), Math.sin(r), -Math.sin(r), Math.cos(r), 0, 0]);
      m = mul(m, [1, 0, 0, 1, -cx, -cy]);
    }
  }
  return m;
}
const apply = (m, x, y) => [m[0] * x + m[2] * y + m[4], m[1] * x + m[3] * y + m[5]];
const mulM = (p, q) => [p[0] * q[0] + p[2] * q[1], p[1] * q[0] + p[3] * q[1], p[0] * q[2] + p[2] * q[3], p[1] * q[2] + p[3] * q[3], p[0] * q[4] + p[2] * q[5] + p[4], p[1] * q[4] + p[3] * q[5] + p[5]];

function textsOf(markup) {
  const out = [];
  const stack = [[1, 0, 0, 1, 0, 0]];
  let open = null;
  for (const m of markup.matchAll(/<(\/?)([a-zA-Z]+)([^>]*?)(\/?)>|([^<]+)/g)) {
    const [, close, name, rest, self, body] = m;
    if (body != null) {
      if (open) open.text += decode(body);
      continue;
    }
    if (name === 'g') {
      if (close) stack.pop();
      else if (!self) stack.push(mulM(stack[stack.length - 1], parseTransform(attr(rest, 'transform'))));
    } else if (name === 'text') {
      if (close) {
        if (open && open.text.trim()) out.push(open);
        open = null;
      } else {
        const own = parseTransform(attr(rest, 'transform'));
        const mm = mulM(stack[stack.length - 1], own);
        const [x, y] = apply(mm, num(attr(rest, 'x')), num(attr(rest, 'y')));
        open = { x, y, size: num(attr(rest, 'font-size'), 10), anchor: attr(rest, 'text-anchor') || 'start', text: '' };
      }
    }
  }
  return out;
}

// ---------- matching facts to the drawing ----------
const STOP = new Set('the and for are but not with that this from into onto over under than then when where which while what who whom whose was were has have had its it’s their there these those they them each every some any all one two three four five six also more most only very much many such same other another both either neither can could may might must shall should will would been being does did done how why here about above below after before between through during upon out off own per via its his her our your you yet so as at by in is it of on or to up an a be if no do we he she i'.split(' '));
const norm = (t) =>
  String(t)
    .toLowerCase()
    .replace(/[−–]/g, '-')
    .replace(/[’`]/g, "'");
// Words a fact may use for something the drawing shows as a symbol.
const SYNONYMS = {
  hydrogen: 'H₂', oxygen: 'O₂', nitrogen: 'N₂', chlorine: 'Cl₂', carbon: 'C', sodium: 'Na', potassium: 'K', calcium: 'Ca',
  magnesium: 'Mg', zinc: 'Zn', iron: 'Fe', copper: 'Cu', aluminium: 'Al', lead: 'Pb', silver: 'Ag', gold: 'Au', sulfur: 'S', sulphur: 'S',
  north: 'N', south: 'S', east: 'E', west: 'W',
};
const COMPASS = { 'north-east': 'NE', 'north-west': 'NW', 'south-east': 'SE', 'south-west': 'SW' };
const SYMBOLS = '∧∨⇒⇔⊃⊂×÷√∫∑πθλωαβγδΔ≥≤≠≈→←↔°~';

function tokens(t, isFact = false) {
  const src = String(t);
  const extra = [];
  for (const [w, c] of Object.entries(COMPASS)) if (src.toLowerCase().includes(w)) extra.push(`C:${c}`);
  for (const ch of SYMBOLS) if (src.includes(ch)) extra.push(`S:${ch}`);
  // A fact may spell out what the drawing abbreviates: "first come, first
  // served" for FCFS, "round robin" for RR.
  if (isFact) {
    const ws = src.split(/[^A-Za-z]+/).filter(Boolean);
    for (let i = 0; i < ws.length; i++) {
      for (let len = 2; len <= 5 && i + len <= ws.length; len++) {
        const acro = ws.slice(i, i + len).map((w) => w[0]).join('');
        extra.push(len === 2 ? `C:${acro.toUpperCase()}` : acro.toLowerCase());
      }
    }
  }
  if (isFact) for (const [w, c] of Object.entries(SYNONYMS)) if (new RegExp(`\\b${w}\\b`, 'i').test(src)) extra.push(`C:${c}`);
  const words = norm(t).match(/-?\d+(?:[.,]\d+)?|[a-zà-ÿ0-9²³⁰-⁹ⁿ₀-₉']+/g) || [];
  const out = new Set(extra);
  // Capital letters and short codes on a drawing (P wave, point A, CO, O₂)
  // are matched as written; a capital that only starts the sentence is not.
  const caps = [...src.matchAll(/(?<![A-Za-z₀-₉])([A-Z][A-Z0-9₀-₉′']?)(?![A-Za-z₀-₉])/g)];
  for (const m of caps) {
    if (isFact && m.index === 0) continue;
    out.add(`C:${m[1]}`);
  }
  for (let w of words) {
    w = w.replace(/^'+|'+$/g, '');
    if (/^-?\d/.test(w)) {
      out.add(w.replace(',', '.'));
      continue;
    }
    if (w.length < 3 || STOP.has(w)) continue;
    if (w.length > 4 && w.endsWith('s') && !w.endsWith('ss')) w = w.slice(0, -1);
    out.add(w);
  }
  return out;
}

function placeFacts(spec) {
  const facts = spec.facts || [];
  let markup = '';
  try {
    markup = renderToStaticMarkup(React.createElement('svg', null, spec.art()));
  } catch {
    markup = '';
  }
  const cands = textsOf(markup).map((t) => {
    const wide = t.text.length * t.size * 0.5;
    const cx = t.anchor === 'middle' ? t.x : t.anchor === 'end' ? t.x - wide / 2 : t.x + wide / 2;
    return { tok: tokens(t.text), at: [cx, t.y + 2], weight: 1, text: t.text };
  });
  for (const l of spec.labels || []) {
    if (l[3] == null) continue;
    cands.push({ tok: tokens(l[0]), at: [l[3], l[4]], weight: 1.3, text: String(l[0]) });
  }
  const df = new Map();
  for (const c of cands) for (const k of c.tok) df.set(k, (df.get(k) || 0) + 1);
  const idf = (k) => Math.log(1 + cands.length / (df.get(k) || 1));
  const used = new Map();
  const centre = [spec.w / 2, spec.h / 2];
  return facts.map((f) => {
    const ft = tokens(f, true);
    let best = null;
    let bestScore = 0;
    cands.forEach((c, i) => {
      let s = 0;
      for (const k of ft) if (c.tok.has(k)) s += idf(k) * (/^-?\d/.test(k) ? 1.6 : 1);
      // A long caption shares a few words with many facts; a short label that
      // matches is the more precise place to point.
      s *= (c.weight * 0.6 ** (used.get(i) || 0)) / (1 + 0.12 * Math.max(0, c.tok.size - 2));
      if (s > bestScore + 1e-9) {
        bestScore = s;
        best = i;
      }
    });
    if (best == null) return { at: centre, fallback: true };
    used.set(best, (used.get(best) || 0) + 1);
    return { at: cands[best].at, fallback: false, score: bestScore, text: cands[best].text };
  });
}

// ---------- the table ----------
const report = process.argv.includes('--report');
const lines = [];
let placed = 0;
let fallbacks = 0;
const weak = [];
for (const [key, spec] of Object.entries(DIAGRAMS).sort(([a], [b]) => (a < b ? -1 : 1))) {
  const facts = spec.facts || [];
  if (!facts.length) continue;
  if (spec.points && spec.points.length === facts.length) continue;
  const got = placeFacts(spec);
  placed += got.length;
  got.forEach((g, i) => {
    if (g.fallback) {
      fallbacks += 1;
      weak.push(`${key} #${i + 1}: ${facts[i]}`);
    }
  });
  const pts = got.map((g) => `[${g.at[0].toFixed(1)}, ${g.at[1].toFixed(1)}]`).join(', ');
  lines.push(`  '${key}': [${pts}],`);
}
const head = [
  '// Generated by tools/diagram-points.js. Do not edit by hand: change the',
  '// diagram or its facts and run `node tools/diagram-points.js` again.',
  '// For each drawn diagram, the [x, y] spot the teacher’s pointer rests on',
  '// while each of its facts is explained, in the order of its facts.',
  'export const POINTS = {',
];
fs.writeFileSync(path.join(repo, 'src/diagrams/points.js'), [...head, ...lines, '};', ''].join('\n'));
process.stdout.write(`diagrams ${lines.length}, facts ${placed}, on the drawing centre ${fallbacks}\n`);
if (report) process.stdout.write(weak.join('\n') + '\n');
