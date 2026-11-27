// The geometry of a study-space graph (scales, ticks, curve paths, points),
// shared by the screen (react-native-svg) and the downloadable PDF (an SVG
// string), so both draw exactly the same graph.
import { compile } from './plot';

export const GRAPH_COLOURS = ['#1c4ea3', '#c8463d', '#2e7d32', '#7a4fb3', '#c27c0e'];
export const PAD = { l: 38, r: 12, t: 14, b: 30 };

function niceStep(span) {
  const raw = span / 6 || 1;
  const p = 10 ** Math.floor(Math.log10(raw));
  const m = raw / p;
  return (m < 1.5 ? 1 : m < 3.5 ? 2 : m < 7.5 ? 5 : 10) * p;
}
export const fmt = (v) => (Math.abs(v) < 1e-9 ? '0' : Math.abs(v) >= 1000 || Math.abs(v) < 0.01 ? v.toExponential(0) : String(+v.toFixed(2)));

// null when there is nothing to draw.
export function graphModel(graph, width, height) {
  const fns = (graph.functions || []).map((f) => ({ ...f, fn: compile(f.expr) })).filter((f) => f.fn);
  const pts = (graph.points || []).filter((p) => Number.isFinite(p.x) && Number.isFinite(p.y));
  if (!fns.length && !pts.length) return null;
  let x0 = Number.isFinite(graph.xMin) ? graph.xMin : pts.length ? Math.min(...pts.map((p) => p.x)) : -5;
  let x1 = Number.isFinite(graph.xMax) ? graph.xMax : pts.length ? Math.max(...pts.map((p) => p.x)) : 5;
  if (x1 <= x0) x1 = x0 + 1;
  if (!Number.isFinite(graph.xMin) || !Number.isFinite(graph.xMax)) {
    const m = (x1 - x0) * 0.1 || 1;
    x0 -= m;
    x1 += m;
  }
  const N = 240;
  const samples = fns.map((f) =>
    Array.from({ length: N + 1 }, (_, i) => {
      const x = x0 + ((x1 - x0) * i) / N;
      const y = f.fn(x);
      return { x, y: Number.isFinite(y) && Math.abs(y) < 1e6 ? y : NaN };
    })
  );
  const ys = [...samples.flat().map((s) => s.y), ...pts.map((p) => p.y)].filter(Number.isFinite);
  let y0 = Number.isFinite(graph.yMin) ? graph.yMin : Math.min(0, ...ys);
  let y1 = Number.isFinite(graph.yMax) ? graph.yMax : Math.max(0, ...ys);
  if (y1 <= y0) y1 = y0 + 1;
  if (!Number.isFinite(graph.yMin) || !Number.isFinite(graph.yMax)) {
    const m = (y1 - y0) * 0.08 || 1;
    y0 -= m;
    y1 += m;
  }
  const W = Math.max(0, width - PAD.l - PAD.r);
  const H = height - PAD.t - PAD.b;
  const X = (x) => PAD.l + ((x - x0) / (x1 - x0)) * W;
  const Y = (y) => PAD.t + H - ((y - y0) / (y1 - y0)) * H;
  const ticks = (a, b, st) => {
    const out = [];
    for (let v = Math.ceil(a / st) * st; v <= b + 1e-9; v += st) out.push(+v.toFixed(10));
    return out;
  };
  const path = (list) => {
    let d = '';
    let pen = false;
    let prev = null;
    for (const s of list) {
      if (!Number.isFinite(s.y)) {
        pen = false;
        continue;
      }
      if (prev && Math.abs(s.y - prev.y) > (y1 - y0) * 0.9) pen = false; // an asymptote
      d += `${pen ? 'L' : 'M'}${X(s.x).toFixed(1)} ${Math.max(-1000, Math.min(1000, Y(s.y))).toFixed(1)} `;
      pen = true;
      prev = s;
    }
    return d;
  };
  return {
    W,
    H,
    xTicks: ticks(x0, x1, niceStep(x1 - x0)).map((v) => ({ v, at: X(v) })),
    yTicks: ticks(y0, y1, niceStep(y1 - y0)).map((v) => ({ v, at: Y(v) })),
    axisY: y0 <= 0 && y1 >= 0 ? Y(0) : Y(y0),
    axisX: x0 <= 0 && x1 >= 0 ? X(0) : X(x0),
    curves: samples.map((list, i) => ({ d: path(list), colour: GRAPH_COLOURS[i % GRAPH_COLOURS.length], label: fns[i].label })),
    // labels near the right edge go on the left of their point, so none is cut off
    points: pts.map((p) => ({ cx: X(p.x), cy: Y(p.y), right: X(p.x) > PAD.l + W * 0.72, label: p.label ? `${p.label} (${fmt(p.x)}, ${fmt(p.y)})` : '' })),
  };
}

const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]);

// The same graph as an SVG string (for the PDF).
export function graphSvg(graph, width = 520, height = 280) {
  const m = graphModel(graph, width, height);
  if (!m) return '';
  const INK = '#1f2933';
  const GRID = '#e3e8ee';
  const parts = [`<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" font-family="Arial">`];
  parts.push(`<rect x="${PAD.l}" y="${PAD.t}" width="${m.W}" height="${m.H}" fill="#fff"/>`);
  for (const t of m.xTicks) parts.push(`<line x1="${t.at}" y1="${PAD.t}" x2="${t.at}" y2="${PAD.t + m.H}" stroke="${GRID}"/><text x="${t.at}" y="${PAD.t + m.H + 14}" font-size="10" fill="${INK}" text-anchor="middle">${fmt(t.v)}</text>`);
  for (const t of m.yTicks) parts.push(`<line x1="${PAD.l}" y1="${t.at}" x2="${PAD.l + m.W}" y2="${t.at}" stroke="${GRID}"/><text x="${PAD.l - 5}" y="${t.at + 3}" font-size="10" fill="${INK}" text-anchor="end">${fmt(t.v)}</text>`);
  parts.push(`<line x1="${PAD.l}" y1="${m.axisY}" x2="${PAD.l + m.W}" y2="${m.axisY}" stroke="${INK}" stroke-width="1.4"/><line x1="${m.axisX}" y1="${PAD.t}" x2="${m.axisX}" y2="${PAD.t + m.H}" stroke="${INK}" stroke-width="1.4"/>`);
  parts.push(`<text x="${PAD.l + m.W}" y="${PAD.t + m.H + 26}" font-size="11" font-weight="bold" fill="${INK}" text-anchor="end">${esc(graph.xLabel || 'x')}</text><text x="${PAD.l + 4}" y="${PAD.t + 10}" font-size="11" font-weight="bold" fill="${INK}">${esc(graph.yLabel || 'y')}</text>`);
  for (const c of m.curves) parts.push(`<path d="${c.d}" stroke="${c.colour}" stroke-width="2.2" fill="none"/>`);
  for (const p of m.points) parts.push(`<circle cx="${p.cx}" cy="${p.cy}" r="4" fill="#c8463d"/>${p.label ? `<text x="${p.right ? p.cx - 6 : p.cx + 6}" y="${p.cy - 6}" font-size="10" font-weight="bold" fill="${INK}" text-anchor="${p.right ? 'end' : 'start'}">${esc(p.label)}</text>` : ''}`);
  parts.push('</svg>');
  return parts.join('');
}
