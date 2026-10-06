// Builders for the simple teaching charts used across subjects: a sequence of
// steps (flow), a cycle, a classification tree and side-by-side columns. Each
// returns a diagram spec { title, w, h, art, labels }. Text in a box is given
// with "\n" for line breaks, so nothing depends on measuring text.
import { G, Line, Path, Rect } from 'react-native-svg';
import { Head, Txt } from './Diagram';

const O = '#33414d';
export const FILLS = ['#e6eef8', '#e3f0da', '#fbefd0', '#efe6f7', '#f8e3df', '#e0f2f1'];

function Box({ x, y, w, h, text, fill, size = 9.5, bold }) {
  const lines = String(text).split('\n');
  const step = size * 1.25;
  const top = y + h / 2 - ((lines.length - 1) * step) / 2 + size * 0.35;
  return (
    <G>
      <Rect x={x} y={y} width={w} height={h} rx={7} fill={fill} stroke={O} strokeWidth={1.2} />
      {lines.map((l, i) => (
        <Txt key={i} x={x + w / 2} y={top + i * step} size={size} weight={bold || (i === 0 && lines.length > 1) ? '700' : '500'}>
          {l}
        </Txt>
      ))}
    </G>
  );
}

function Arrow({ x1, y1, x2, y2, c = '#5a6b78' }) {
  return (
    <G>
      <Line x1={x1} y1={y1} x2={x2} y2={y2} stroke={c} strokeWidth={1.4} />
      <Head x={x2} y={y2} dx={x2 - x1} dy={y2 - y1} size={6} fill={c} />
    </G>
  );
}

// Steps in order. Horizontal rows wrap after `perRow` boxes, snaking back so the
// arrows stay short; `vertical` stacks them in one column.
export function flowSpec(title, steps, { perRow = 3, boxW = 104, boxH = 52, gap = 22, vertical = false, note } = {}) {
  const n = steps.length;
  const cols = vertical ? 1 : Math.min(perRow, n);
  const rows = Math.ceil(n / cols);
  const w = cols * boxW + (cols - 1) * gap + 8;
  const h = rows * boxH + (rows - 1) * gap + 8 + (note ? 22 : 0);
  const pos = steps.map((_, i) => {
    const r = Math.floor(i / cols);
    const k = i % cols;
    const c = r % 2 ? cols - 1 - k : k; // snake
    return { x: 4 + c * (boxW + gap), y: 4 + r * (boxH + gap) };
  });
  const art = () => (
    <G>
      {steps.slice(1).map((_, j) => {
        const a = pos[j];
        const b = pos[j + 1];
        if (a.y === b.y) {
          const right = b.x > a.x;
          return <Arrow key={j} x1={right ? a.x + boxW : a.x} y1={a.y + boxH / 2} x2={right ? b.x - 1 : b.x + boxW + 1} y2={b.y + boxH / 2} />;
        }
        return <Arrow key={j} x1={a.x + boxW / 2} y1={a.y + boxH} x2={b.x + boxW / 2} y2={b.y - 1} />;
      })}
      {steps.map((s, i) => (
        <Box key={i} {...pos[i]} w={boxW} h={boxH} text={`${i + 1}. ${s}`} fill={FILLS[i % FILLS.length]} />
      ))}
      {!!note && (
        <Txt x={w / 2} y={h - 6} size={9} italic>
          {note}
        </Txt>
      )}
    </G>
  );
  return { title, w, h, art, labels: [] };
}

// Stages that repeat, arranged round a circle with arrows between them.
export function cycleSpec(title, stages, { r = 78, boxW = 104, boxH = 44, centre } = {}) {
  const n = stages.length;
  // With an odd number of stages the last two sit side by side at the bottom, so
  // the circle is widened enough to leave room for the arrow between them.
  const rx = n % 2 ? Math.max(r, (boxW + 28) / (2 * Math.sin(Math.PI / n))) : r;
  const ry = n >= 5 ? r + 10 : r;
  const raw = stages.map((_, i) => {
    const a = (-Math.PI / 2) + (i * 2 * Math.PI) / n;
    return { x: rx * Math.cos(a), y: ry * Math.sin(a) };
  });
  const top = Math.min(...raw.map((p) => p.y)) - boxH / 2 - 6;
  const bottom = Math.max(...raw.map((p) => p.y)) + boxH / 2 + 6;
  const cx = rx + boxW / 2 + 6;
  const cy = -top;
  const w = cx * 2;
  const h = bottom - top;
  const pts = raw.map((p) => ({ x: cx + p.x, y: cy + p.y }));
  const art = () => (
    <G>
      {pts.map((p, i) => {
        const q = pts[(i + 1) % n];
        // a short arc-like arrow between neighbouring boxes, drawn as a straight
        // segment shortened at both ends so it does not run into the boxes
        const dx = q.x - p.x;
        const dy = q.y - p.y;
        const len = Math.hypot(dx, dy);
        const ux = dx / len;
        const uy = dy / len;
        const cut = (ax, ay) => Math.min(Math.abs(ax) > 1e-6 ? (boxW / 2) / Math.abs(ax) : Infinity, Math.abs(ay) > 1e-6 ? (boxH / 2) / Math.abs(ay) : Infinity) + 4;
        const s = cut(ux, uy);
        return <Arrow key={i} x1={p.x + ux * s} y1={p.y + uy * s} x2={q.x - ux * s} y2={q.y - uy * s} />;
      })}
      {pts.map((p, i) => (
        <Box key={i} x={p.x - boxW / 2} y={p.y - boxH / 2} w={boxW} h={boxH} text={stages[i]} fill={FILLS[i % FILLS.length]} />
      ))}
      {!!centre && (
        <Txt x={cx} y={cy + 4} size={10} weight="700">
          {centre}
        </Txt>
      )}
    </G>
  );
  return { title, w, h, art, labels: [] };
}

// A root that divides into groups, each with a list of examples underneath.
export function treeSpec(title, root, groups, { colW = 104, gap = 10, itemH = 15 } = {}) {
  const n = groups.length;
  const w = n * colW + (n - 1) * gap + 8;
  const rootY = 6;
  const rootH = 26;
  const groupY = 62;
  const groupH = 40;
  const maxItems = Math.max(...groups.map((g) => g.items.length));
  const h = groupY + groupH + 12 + maxItems * itemH + 8;
  const xs = groups.map((_, i) => 4 + i * (colW + gap));
  const art = () => (
    <G>
      <Box x={w / 2 - 80} y={rootY} w={160} h={rootH} text={root} fill="#dbe7f5" bold size={10.5} />
      <Line x1={w / 2} y1={rootY + rootH} x2={w / 2} y2={44} stroke="#5a6b78" strokeWidth={1.3} />
      <Line x1={xs[0] + colW / 2} y1={44} x2={xs[n - 1] + colW / 2} y2={44} stroke="#5a6b78" strokeWidth={1.3} />
      {groups.map((g, i) => (
        <G key={i}>
          <Arrow x1={xs[i] + colW / 2} y1={44} x2={xs[i] + colW / 2} y2={groupY - 1} />
          <Box x={xs[i]} y={groupY} w={colW} h={groupH} text={g.name} fill={g.fill || FILLS[(i + 1) % FILLS.length]} size={9.5} />
          {g.items.map((it, k) => (
            <Txt key={k} x={xs[i] + colW / 2} y={groupY + groupH + 16 + k * itemH} size={9}>
              {it}
            </Txt>
          ))}
        </G>
      ))}
    </G>
  );
  return { title, w, h, art, labels: [] };
}

// Side-by-side columns, each with a heading and a list (for comparisons).
export function columnsSpec(title, columns, { colW = 110, gap = 10, itemH = 15, arrow } = {}) {
  const n = columns.length;
  const w = n * colW + (n - 1) * gap + 8;
  const maxItems = Math.max(...columns.map((c) => c.items.length));
  const h = 40 + 10 + maxItems * itemH + 12;
  const xs = columns.map((_, i) => 4 + i * (colW + gap));
  const art = () => (
    <G>
      {columns.map((c, i) => (
        <G key={i}>
          <Rect x={xs[i]} y={4} width={colW} height={h - 8} rx={8} fill={c.fill || FILLS[i % FILLS.length]} stroke={O} strokeWidth={1.1} />
          <Path d={`M${xs[i]} 40 L${xs[i] + colW} 40`} stroke={O} strokeWidth={0.8} />
          {String(c.head)
            .split('\n')
            .map((l, k, all) => (
              <Txt key={k} x={xs[i] + colW / 2} y={24 - ((all.length - 1) * 12) / 2 + k * 12} size={10} weight="700">
                {l}
              </Txt>
            ))}
          {c.items.map((it, k) => (
            <Txt key={k} x={xs[i] + colW / 2} y={58 + k * itemH} size={9}>
              {it}
            </Txt>
          ))}
        </G>
      ))}
      {!!arrow &&
        columns.slice(1).map((_, i) => (
          <G key={`a${i}`}>
            <Rect x={xs[i] + colW - 4} y={h / 2 - 12} width={gap + 8} height={24} fill="#ffffff" />
            <Arrow x1={xs[i] + colW - 2} y1={h / 2} x2={xs[i + 1] + 2} y2={h / 2} c={O} />
          </G>
        ))}
    </G>
  );
  return { title, w, h, art, labels: [] };
}
