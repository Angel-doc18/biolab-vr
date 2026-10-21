// A Level Pure Mathematics figures for the Lower Sixth (shared by 0765 and
// 0770): the discriminant and three parabolas, a sign diagram, a modulus
// inequality, a factorised cubic, the forms of partial fractions, a truth
// table, induction, perpendicular lines and the distance to a line, a circle
// and its tangent, 2ˣ and log₂ x, a Venn diagram, a relation as arrows, a
// translation, a function and its inverse, an AP and a GP, a cobweb for a
// recurrence, the standard sums, the method of differences, Pascal’s
// triangle, a sector and segment, the trigonometric graphs, R cos(θ − α),
// matrix products, Gaussian elimination, counting, vectors in 3D, the scalar
// product, lines in space, the foot of a perpendicular, limits and the papers.
// Graphs are calculated and drawn to scale; figures with right angles or
// circles use equal units on both axes.
import { Circle, G, Line, Path, Rect } from 'react-native-svg';
import { Head, Txt } from './Diagram';
import { columnsSpec, flowSpec } from './charts';

export const AM = { O: '#33414d', GRID: '#e3e8ee', GREY: '#6b7a88', BLUE: '#1f6fb2', RED: '#c8463d', GREEN: '#2e7d32', AMBER: '#b9770e', PURPLE: '#7b4fa8', SHADE: '#dbe8f6', PINK: '#f8ddd9', CREAM: '#fbefd0' };
const O = '#33414d';
const GRID = '#e3e8ee';
const GREY = '#6b7a88';
const BLUE = '#1f6fb2';
const RED = '#c8463d';
const GREEN = '#2e7d32';
const AMBER = '#b9770e';
const PURPLE = '#7b4fa8';
const SHADE = '#dbe8f6';
const PINK = '#f8ddd9';
const CREAM = '#fbefd0';
export const path = (pts) => pts.map(([x, y], i) => `${i ? 'L' : 'M'}${x.toFixed(1)} ${y.toFixed(1)}`).join(' ');
export const rad = (d) => (d * Math.PI) / 180;
const PI = Math.PI;

export function Arrow({ x1, y1, x2, y2, c = O, w = 1.4, size = 6, dash }) {
  const len = Math.hypot(x2 - x1, y2 - y1) || 1;
  return (
    <G>
      <Line x1={x1} y1={y1} x2={x2 - ((x2 - x1) / len) * size * 0.8} y2={y2 - ((y2 - y1) / len) * size * 0.8} stroke={c} strokeWidth={w} strokeDasharray={dash} />
      <Head x={x2} y={y2} dx={x2 - x1} dy={y2 - y1} size={size} fill={c} />
    </G>
  );
}

export function Dot({ x, y, c = O, r = 3, open }) {
  return <Circle cx={x} cy={y} r={r} fill={open ? '#ffffff' : c} stroke={c} strokeWidth={open ? 1.4 : 0} />;
}

// A small square marking a right angle at (x, y) between unit directions u and v.
export function RightAngle({ x, y, u, v, s = 7 }) {
  const p1 = [x + u[0] * s, y + u[1] * s];
  const p2 = [x + (u[0] + v[0]) * s, y + (u[1] + v[1]) * s];
  const p3 = [x + v[0] * s, y + v[1] * s];
  return <Path d={path([p1, p2, p3])} stroke={O} strokeWidth={1} fill="none" />;
}
export const unit = (dx, dy) => {
  const l = Math.hypot(dx, dy) || 1;
  return [dx / l, dy / l];
};

// A coordinate frame: (x, y) to the drawing, for x0 ≤ x ≤ x1 and y0 ≤ y ≤ y1.
export function frame({ left, top, ux, uy = ux, x0, x1, y0, y1 }) {
  const X = (x) => left + (x - x0) * ux;
  const Y = (y) => top + (y1 - y) * uy;
  return { X, Y, x0, x1, y0, y1 };
}

// The graph of fn between a and b, broken wherever it leaves the frame.
export function curve(f, fn, a, b, n = 200) {
  const segs = [];
  let cur = [];
  for (let i = 0; i <= n; i++) {
    const x = a + ((b - a) * i) / n;
    const y = fn(x);
    if (!Number.isFinite(y) || y < f.y0 - 1e-6 || y > f.y1 + 1e-6) {
      if (cur.length > 1) segs.push(cur);
      cur = [];
    } else cur.push([f.X(x), f.Y(y)]);
  }
  if (cur.length > 1) segs.push(cur);
  return segs.map(path).join(' ');
}

// Grid lines at whole units, axes through the origin, numbered ticks and the
// axis names. xs and ys are [value, text] pairs.
export function Axes({ f, xs = [], ys = [], grid = 1, xName = 'x', yName = 'y', origin = true, xLab }) {
  const { X, Y, x0, x1, y0, y1 } = f;
  const ax = Y(Math.min(Math.max(0, y0), y1));
  const ay = X(Math.min(Math.max(0, x0), x1));
  const gx = [];
  const gy = [];
  if (grid) {
    for (let v = Math.ceil(x0 / grid) * grid; v <= x1 + 1e-9; v += grid) gx.push(v);
    for (let v = Math.ceil(y0 / grid) * grid; v <= y1 + 1e-9; v += grid) gy.push(v);
  }
  return (
    <G>
      {gx.map((v) => (
        <Line key={`gx${v}`} x1={X(v)} y1={Y(y0)} x2={X(v)} y2={Y(y1)} stroke={GRID} strokeWidth={0.8} />
      ))}
      {gy.map((v) => (
        <Line key={`gy${v}`} x1={X(x0)} y1={Y(v)} x2={X(x1)} y2={Y(v)} stroke={GRID} strokeWidth={0.8} />
      ))}
      <Arrow x1={X(x0)} y1={ax} x2={X(x1) + 8} y2={ax} w={1.2} size={5} />
      <Arrow x1={ay} y1={Y(y0)} x2={ay} y2={Y(y1) - 8} w={1.2} size={5} />
      <Txt x={X(x1) + 10} y={ax + 12} size={9} italic>
        {xName}
      </Txt>
      <Txt x={ay - 8} y={Y(y1) - 4} size={9} italic>
        {yName}
      </Txt>
      {origin && (
        <Txt x={ay - 6} y={ax + 11} size={8.5} anchor="end">
          O
        </Txt>
      )}
      {xs.map(([v, t]) => (
        <G key={`x${v}`}>
          <Line x1={X(v)} y1={ax - 2} x2={X(v)} y2={ax + 2} stroke={O} strokeWidth={1} />
          <Txt x={X(v)} y={xLab ?? ax + 12} size={8.5}>
            {t}
          </Txt>
        </G>
      ))}
      {ys.map(([v, t]) => (
        <G key={`y${v}`}>
          <Line x1={ay - 2} y1={Y(v)} x2={ay + 2} y2={Y(v)} stroke={O} strokeWidth={1} />
          <Txt x={ay - 5} y={Y(v) + 3} size={8.5} anchor="end">
            {t}
          </Txt>
        </G>
      ))}
    </G>
  );
}
export const ticks = (vals) => vals.map((v) => [v, v < 0 ? `−${-v}` : `${v}`]);

// A matrix in brackets with its top-left corner at (x, y). `hl` lists cells
// [row, col] to shade; `bar` draws the augmented-matrix bar before that column.
export function Matrix({ x, y, rows, cw = 24, ch = 18, size = 9.5, hl = [], hlFill = CREAM, bar, italic }) {
  const h = rows.length * ch;
  const w = 16 + rows[0].length * cw;
  return (
    <G>
      {hl.map(([i, j]) => (
        <Rect key={`h${i}${j}`} x={x + 8 + j * cw} y={y + i * ch} width={cw} height={ch} fill={hlFill} />
      ))}
      <Path d={`M${x + 6} ${y} L${x} ${y} L${x} ${y + h} L${x + 6} ${y + h}`} stroke={O} strokeWidth={1.3} fill="none" />
      <Path d={`M${x + w - 6} ${y} L${x + w} ${y} L${x + w} ${y + h} L${x + w - 6} ${y + h}`} stroke={O} strokeWidth={1.3} fill="none" />
      {bar != null && <Line x1={x + 8 + bar * cw} y1={y + 2} x2={x + 8 + bar * cw} y2={y + h - 2} stroke={GREY} strokeWidth={1} />}
      {rows.map((r, i) =>
        r.map((v, j) => (
          <Txt key={`${i}${j}`} x={x + 8 + (j + 0.5) * cw} y={y + (i + 0.5) * ch + size * 0.35} size={size} italic={italic}>
            {v}
          </Txt>
        )),
      )}
    </G>
  );
}

// ---------- three parabolas and the discriminant ----------
const QF = frame({ left: 40, top: 16, ux: 40, uy: 24, x0: -1, x1: 5, y0: -2, y1: 7 });
function QuadArt() {
  const { X, Y } = QF;
  const rows = [
    [BLUE, 'y = x² − 4x + 3: Δ = 4 > 0, two roots (1 and 3)'],
    [GREEN, 'y = x² − 4x + 4: Δ = 0, one repeated root (2)'],
    [RED, 'y = x² − 4x + 6: Δ = −8 < 0, no real roots'],
  ];
  return (
    <G>
      <Axes f={QF} xs={ticks([-1, 1, 2, 3, 4])} ys={ticks([-2, 2])} />
      <Line x1={X(2)} y1={Y(-2)} x2={X(2)} y2={Y(7)} stroke={GREY} strokeWidth={1} strokeDasharray="4 3" />
      <Txt x={X(2) + 4} y={Y(6.6)} size={8.5} anchor="start" fill={GREY}>
        x = 2
      </Txt>
      <Path d={curve(QF, (x) => x * x - 4 * x + 3, -1, 5)} stroke={BLUE} strokeWidth={2} fill="none" />
      <Path d={curve(QF, (x) => x * x - 4 * x + 4, -1, 5)} stroke={GREEN} strokeWidth={2} fill="none" />
      <Path d={curve(QF, (x) => x * x - 4 * x + 6, -1, 5)} stroke={RED} strokeWidth={2} fill="none" />
      <Dot x={X(1)} y={Y(0)} c={BLUE} />
      <Dot x={X(3)} y={Y(0)} c={BLUE} />
      <Dot x={X(2)} y={Y(0)} c={GREEN} />
      <Dot x={X(2)} y={Y(2)} c={RED} />
      <Dot x={X(2)} y={Y(-1)} c={BLUE} />
      <Txt x={X(2) + 6} y={Y(-1) + 12} size={8.5} anchor="start" fill={BLUE}>
        vertex (2, −1)
      </Txt>
      {rows.map(([c, t], i) => (
        <G key={t}>
          <Line x1={20} y1={262 + i * 15} x2={36} y2={262 + i * 15} stroke={c} strokeWidth={2.4} />
          <Txt x={42} y={265 + i * 15} size={8.5} anchor="start">
            {t}
          </Txt>
        </G>
      ))}
    </G>
  );
}

// ---------- a sign diagram ----------
const SX = [177, 230, 283];
const SC = [150.5, 203.5, 256.5, 309.5];
function SignArt() {
  const rows = [
    ['x + 2', ['−', '+', '+', '+'], 0],
    ['x − 1', ['−', '−', '+', '+'], 1],
    ['x − 3', ['−', '−', '−', '+'], 2],
  ];
  const sign = (s, x, y, big) => (
    <Txt key={`${x}${y}`} x={x} y={y} size={big ? 13 : 12} weight="700" fill={s === '+' ? GREEN : RED}>
      {s}
    </Txt>
  );
  return (
    <G>
      <Arrow x1={124} y1={40} x2={338} y2={40} w={1.2} size={5} />
      {SX.map((x, i) => (
        <G key={x}>
          <Line x1={x} y1={36} x2={x} y2={154} stroke={GREY} strokeWidth={1} strokeDasharray="3 3" />
          <Txt x={x} y={30} size={9.5} weight="700">
            {['−2', '1', '3'][i]}
          </Txt>
        </G>
      ))}
      {rows.map(([name, signs, root], r) => (
        <G key={name}>
          <Txt x={12} y={68 + r * 24} size={9.5} anchor="start">
            {name}
          </Txt>
          {signs.map((s, k) => sign(s, SC[k], 69 + r * 24))}
          <Rect x={SX[root] - 5} y={58 + r * 24} width={10} height={13} fill="#ffffff" />
          <Txt x={SX[root]} y={68 + r * 24} size={9} weight="700" fill={GREY}>
            0
          </Txt>
        </G>
      ))}
      <Line x1={10} y1={128} x2={336} y2={128} stroke={O} strokeWidth={1} />
      <Txt x={12} y={148} size={9.5} weight="700" anchor="start">
        (x − 1)(x + 2)
      </Txt>
      <Line x1={12} y1={152} x2={84} y2={152} stroke={O} strokeWidth={0.8} />
      <Txt x={48} y={163} size={9.5} weight="700">
        x − 3
      </Txt>
      {['−', '+', '−', '+'].map((s, k) => sign(s, SC[k], 152, true))}
      {[SX[0], SX[1]].map((x) => (
        <G key={`z${x}`}>
          <Rect x={x - 5} y={141} width={10} height={13} fill="#ffffff" />
          <Txt x={x} y={151} size={9} weight="700" fill={GREY}>
            0
          </Txt>
        </G>
      ))}
      <Circle cx={SX[2]} cy={148} r={4} fill="#ffffff" stroke={RED} strokeWidth={1.4} />
      <Txt x={170} y={186} size={8} fill={GREY}>
        Negative for x &lt; −2 or 1 &lt; x &lt; 3; positive for −2 &lt; x &lt; 1 or x &gt; 3.
      </Txt>
      <Txt x={170} y={200} size={8} fill={GREY}>
        x = 3 is never included: the expression is undefined there.
      </Txt>
    </G>
  );
}

// ---------- |2x − 3| < x ----------
const MF = frame({ left: 40, top: 16, ux: 40, uy: 22, x0: -1, x1: 5, y0: -3.5, y1: 6 });
function ModulusArt() {
  const { X, Y } = MF;
  return (
    <G>
      <Axes f={MF} xs={ticks([-1, 1, 2, 3, 4])} ys={ticks([-2, -1, 1, 2, 4, 5])} />
      <Path d={curve(MF, (x) => 2 * x - 3, 0, 1.5, 20)} stroke={BLUE} strokeWidth={1.4} strokeDasharray="4 3" fill="none" />
      <Path d={curve(MF, (x) => Math.abs(2 * x - 3), -1, 5)} stroke={BLUE} strokeWidth={2} fill="none" />
      <Path d={curve(MF, (x) => x, -1, 5)} stroke={RED} strokeWidth={2} fill="none" />
      <Line x1={X(1)} y1={Y(1)} x2={X(1)} y2={Y(0)} stroke={GREY} strokeWidth={1} strokeDasharray="3 3" />
      <Line x1={X(3)} y1={Y(3)} x2={X(3)} y2={Y(0)} stroke={GREY} strokeWidth={1} strokeDasharray="3 3" />
      <Line x1={X(1)} y1={Y(0)} x2={X(3)} y2={Y(0)} stroke={GREEN} strokeWidth={4} />
      <Dot x={X(1)} y={Y(1)} />
      <Dot x={X(3)} y={Y(3)} />
      <Txt x={X(0) + 6} y={Y(5.3)} size={9} weight="700" anchor="start" fill={BLUE}>
        y = |2x − 3|
      </Txt>
      <Txt x={X(4.55)} y={Y(4.55) + 14} size={9} weight="700" anchor="start" fill={RED}>
        y = x
      </Txt>
      <Txt x={X(2.6)} y={Y(-2.2)} size={9} weight="700" fill={GREEN}>
        solution 1 &lt; x &lt; 3
      </Txt>
      <Txt x={X(0.55)} y={Y(-2.9)} size={8} anchor="start" fill={BLUE}>
        y = 2x − 3 (part reflected)
      </Txt>
    </G>
  );
}

// ---------- the cubic f(x) = (x − 2)(2x − 1)(x + 3) ----------
const CF = frame({ left: 36, top: 34, ux: 40, uy: 6, x0: -4, x1: 3, y0: -14, y1: 24 });
const cubic = (x) => 2 * x ** 3 + x * x - 13 * x + 6;
function CubicArt() {
  const { X, Y } = CF;
  return (
    <G>
      <Axes f={CF} grid={0} xs={ticks([-2, -1, 1])} ys={ticks([-10, 20])} />
      <Path d={curve(CF, cubic, -4, 3)} stroke={BLUE} strokeWidth={2} fill="none" />
      <Dot x={X(-3)} y={Y(0)} c={RED} />
      <Dot x={X(0.5)} y={Y(0)} c={RED} />
      <Dot x={X(2)} y={Y(0)} c={RED} />
      <Dot x={X(0)} y={Y(6)} />
      <Txt x={X(-3) - 5} y={Y(0) - 6} size={9} weight="700" anchor="end" fill={RED}>
        x = −3
      </Txt>
      <Txt x={X(0.5) + 5} y={Y(0) - 6} size={9} weight="700" anchor="start" fill={RED}>
        x = ½
      </Txt>
      <Txt x={X(2) - 5} y={Y(0) - 6} size={9} weight="700" anchor="end" fill={RED}>
        x = 2
      </Txt>
      <Txt x={X(0) + 6} y={Y(6) - 4} size={8.5} anchor="start">
        (0, 6)
      </Txt>
      <Txt x={X(-4) + 2} y={10} size={9} weight="700" anchor="start" fill={BLUE}>
        f(x) = 2x³ + x² − 13x + 6 = (x − 2)(2x − 1)(x + 3)
      </Txt>
      <Txt x={X(1.3)} y={Y(-4.8) + 16} size={8.5} fill={GREY}>
        f(2) = 0, so (x − 2) is a factor
      </Txt>
    </G>
  );
}

// ---------- the forms of partial fractions ----------
const PF_BOXES = [
  ['Distinct linear factors', 'A/(x − a) + B/(x − b)', '(x + 5)/((x − 1)(x + 1))', '= 3/(x − 1) − 2/(x + 1)'],
  ['A repeated factor', 'A/(x − a) + B/(x − a)² + C/(x − b)', '(2x² + 1)/((x − 1)²(x + 2))', '= 1/(x−1) + 1/(x−1)² + 1/(x+2)'],
  ['An irreducible quadratic', 'A/(x − a) + (Bx + C)/(x² + b)', '(x² + 2x + 3)/((x + 1)(x² + 1))', '= 1/(x + 1) + 2/(x² + 1)'],
  ['Improper: divide first', '(x³ + 2)/(x² − 1)', '= x + (x + 2)/(x² − 1)', '= x + 3/(2(x − 1)) − 1/(2(x + 1))'],
];
const PF_FILLS = ['#e6eef8', '#e3f0da', '#fbefd0', '#efe6f7'];
function PartialArt() {
  return (
    <G>
      {PF_BOXES.map(([head, ...lines], i) => {
        const x = 6 + (i % 2) * 178;
        const y = 6 + Math.floor(i / 2) * 104;
        return (
          <G key={head}>
            <Rect x={x} y={y} width={172} height={96} rx={8} fill={PF_FILLS[i]} stroke={O} strokeWidth={1.1} />
            <Txt x={x + 86} y={y + 18} size={9.5} weight="700">
              {head}
            </Txt>
            <Line x1={x} y1={y + 26} x2={x + 172} y2={y + 26} stroke={O} strokeWidth={0.8} />
            {lines.map((t, k) => (
              <Txt key={t} x={x + 86} y={y + 44 + k * 18} size={8} fill={k === 0 && i < 3 ? GREY : O} weight={k === lines.length - 1 ? '700' : '500'}>
                {t}
              </Txt>
            ))}
          </G>
        );
      })}
      <Txt x={184} y={228} size={8} fill={GREY}>
        The number of unknown constants equals the degree of the denominator.
      </Txt>
    </G>
  );
}

// ---------- a truth table ----------
const TT_HEAD = ['p', 'q', '¬p', 'p ∧ q', 'p ∨ q', 'p ⇒ q', '¬p ∨ q', 'p ⇔ q'];
const TT_ROWS = [
  'TTFTTTTT',
  'TFFFTFFF',
  'FTTFTTTF',
  'FFTFFTTT',
];
function TruthArt() {
  const cx = (j) => 30 + j * 40;
  return (
    <G>
      <Rect x={cx(5) - 20} y={8} width={80} height={104} fill={CREAM} />
      <Rect x={10} y={8} width={320} height={104} fill="none" stroke={O} strokeWidth={1.1} />
      <Line x1={10} y1={30} x2={330} y2={30} stroke={O} strokeWidth={1.1} />
      <Line x1={90} y1={8} x2={90} y2={112} stroke={O} strokeWidth={1.1} />
      {TT_HEAD.map((t, j) => (
        <Txt key={t} x={cx(j)} y={23} size={9.5} weight="700">
          {t}
        </Txt>
      ))}
      {TT_ROWS.map((r, i) =>
        r.split('').map((v, j) => (
          <Txt key={`${i}${j}`} x={cx(j)} y={48 + i * 20} size={10} weight="700" fill={v === 'T' ? GREEN : RED}>
            {v}
          </Txt>
        )),
      )}
      <Txt x={170} y={132} size={8.5} fill={GREY}>
        The shaded columns p ⇒ q and ¬p ∨ q are identical, so they are equivalent.
      </Txt>
      <Txt x={170} y={148} size={8.5} fill={GREY}>
        p ⇒ q is false only when p is true and q is false.
      </Txt>
    </G>
  );
}

// ---------- perpendicular lines and the distance from a point ----------
const LF = frame({ left: 30, top: 16, ux: 30, x0: -1, x1: 6.5, y0: -1.5, y1: 6.5 });
function LinesArt() {
  const { X, Y } = LF;
  const s5 = Math.sqrt(5);
  return (
    <G>
      <Axes f={LF} xs={ticks([1, 2, 3, 4, 5, 6])} ys={ticks([-1, 1, 2, 3, 4, 5, 6])} />
      <Path d={curve(LF, (x) => 2 * x - 1, -1, 6.5)} stroke={BLUE} strokeWidth={2} fill="none" />
      <Path d={curve(LF, (x) => -0.5 * x + 4, -1, 6.5)} stroke={RED} strokeWidth={2} fill="none" />
      <RightAngle x={X(2)} y={Y(3)} u={[1 / s5, -2 / s5]} v={[-2 / s5, -1 / s5]} />
      <Dot x={X(2)} y={Y(3)} />
      <Line x1={X(4)} y1={Y(4)} x2={X(2.8)} y2={Y(4.6)} stroke={GREEN} strokeWidth={1.6} strokeDasharray="4 3" />
      <RightAngle x={X(2.8)} y={Y(4.6)} u={[-1 / s5, 2 / s5]} v={[2 / s5, 1 / s5]} />
      <Dot x={X(4)} y={Y(4)} c={GREEN} />
      <Dot x={X(2.8)} y={Y(4.6)} c={GREEN} r={2.5} />
      <Txt x={X(4) + 6} y={Y(4) + 4} size={9} weight="700" anchor="start" fill={GREEN}>
        P(4, 4)
      </Txt>
      <Txt x={X(2.8) - 7} y={Y(4.6) - 3} size={8.5} anchor="end" fill={GREEN}>
        F(2.8, 4.6)
      </Txt>
      <Txt x={X(4) + 6} y={Y(4) + 17} size={8.5} anchor="start" fill={GREEN}>
        d = PF = 3/√5 ≈ 1.34
      </Txt>
      <Txt x={X(3.35) - 4} y={Y(6.2)} size={9} weight="700" anchor="end" fill={BLUE}>
        y = 2x − 1
      </Txt>
      <Txt x={X(5.3)} y={Y(2.05)} size={9} weight="700" fill={RED}>
        y = −½x + 4
      </Txt>
      <Txt x={X(2.1)} y={Y(0.95)} size={8} anchor="start" fill={GREY}>
        m₁m₂ = 2 × (−½) = −1
      </Txt>
    </G>
  );
}

// ---------- a circle and the tangent at P ----------
const KF = frame({ left: 26, top: 16, ux: 18, x0: -4.5, x1: 9.5, y0: -3.5, y1: 9.5 });
function CircleArt() {
  const { X, Y } = KF;
  return (
    <G>
      <Axes f={KF} grid={1} xs={ticks([-4, -2, 2, 4, 6, 8])} ys={ticks([-2, 2, 4, 6, 8])} />
      <Circle cx={X(1)} cy={Y(2)} r={5 * 18} fill="none" stroke={BLUE} strokeWidth={2} />
      <Path d={curve(KF, (x) => 9 - 0.75 * x, 1.5, 9.5, 20)} stroke={GREEN} strokeWidth={2} fill="none" />
      <Line x1={X(1)} y1={Y(2)} x2={X(4)} y2={Y(6)} stroke={RED} strokeWidth={1.8} />
      <RightAngle x={X(4)} y={Y(6)} u={[-0.6, 0.8]} v={[0.8, 0.6]} />
      <Dot x={X(1)} y={Y(2)} c={RED} />
      <Dot x={X(4)} y={Y(6)} c={GREEN} />
      <Txt x={X(1) + 4} y={Y(2) + 13} size={9} weight="700" anchor="start" fill={RED}>
        C(1, 2)
      </Txt>
      <Txt x={X(4) + 6} y={Y(6) - 6} size={9} weight="700" anchor="start" fill={GREEN}>
        P(4, 6)
      </Txt>
      <Txt x={X(2.5) - 6} y={Y(4)} size={9} weight="700" anchor="end" fill={RED}>
        r = 5
      </Txt>
      <Txt x={X(7)} y={Y(5.6)} size={8.5} weight="700" anchor="start" fill={GREEN}>
        tangent
      </Txt>
      <Txt x={X(7)} y={Y(5.6) + 11} size={8.5} weight="700" anchor="start" fill={GREEN}>
        3x + 4y = 36
      </Txt>
      <Txt x={X(9.5)} y={Y(-2.6)} size={8.5} weight="700" anchor="end" fill={BLUE}>
        (x − 1)² + (y − 2)² = 25
      </Txt>
    </G>
  );
}

// ---------- 2ˣ and log₂ x ----------
const EF = frame({ left: 30, top: 16, ux: 26, x0: -3, x1: 5, y0: -3, y1: 5 });
function ExpLogArt() {
  const { X, Y } = EF;
  return (
    <G>
      <Axes f={EF} xs={ticks([-2, -1, 1, 2, 3, 4])} ys={ticks([-2, -1, 1, 2, 3, 4])} />
      <Path d={curve(EF, (x) => x, -3, 5, 10)} stroke={GREY} strokeWidth={1.2} strokeDasharray="5 4" fill="none" />
      <Path d={curve(EF, (x) => 2 ** x, -3, 5)} stroke={BLUE} strokeWidth={2} fill="none" />
      <Path d={curve(EF, (x) => Math.log2(x), 0.125, 5)} stroke={RED} strokeWidth={2} fill="none" />
      {[[0, 1], [1, 2], [2, 4]].map(([x, y]) => (
        <G key={`e${x}`}>
          <Dot x={X(x)} y={Y(y)} c={BLUE} r={2.6} />
          <Dot x={X(y)} y={Y(x)} c={RED} r={2.6} />
        </G>
      ))}
      <Txt x={X(1.85)} y={Y(4.4)} size={9} weight="700" anchor="end" fill={BLUE}>
        y = 2ˣ
      </Txt>
      <Txt x={X(4.1)} y={Y(2.6)} size={9} weight="700" fill={RED}>
        y = log₂ x
      </Txt>
      <Txt x={X(4.3)} y={Y(4.85)} size={9} anchor="end" fill={GREY}>
        y = x
      </Txt>
      <Txt x={X(0) - 5} y={Y(1) - 6} size={8} anchor="end" fill={BLUE}>
        (0, 1)
      </Txt>
      <Txt x={X(1) + 4} y={Y(-0.9)} size={8} anchor="start" fill={RED}>
        (1, 0)
      </Txt>
    </G>
  );
}

// ---------- a Venn diagram ----------
function VennArt() {
  return (
    <G>
      <Rect x={10} y={10} width={280} height={168} rx={6} fill="#ffffff" stroke={O} strokeWidth={1.2} />
      <Txt x={22} y={26} size={9.5} weight="700" anchor="start">
        U: 40 students
      </Txt>
      <Circle cx={118} cy={98} r={62} fill={SHADE} fillOpacity={0.75} stroke={BLUE} strokeWidth={1.6} />
      <Circle cx={186} cy={98} r={55} fill={PINK} fillOpacity={0.6} stroke={RED} strokeWidth={1.6} />
      <Txt x={78} y={42} size={9.5} weight="700" fill={BLUE}>
        P (25)
      </Txt>
      <Txt x={228} y={48} size={9.5} weight="700" fill={RED}>
        C (18)
      </Txt>
      <Txt x={88} y={102} size={13} weight="700">
        17
      </Txt>
      <Txt x={153} y={102} size={13} weight="700">
        8
      </Txt>
      <Txt x={214} y={102} size={13} weight="700">
        10
      </Txt>
      <Txt x={266} y={166} size={13} weight="700">
        5
      </Txt>
      <Txt x={150} y={196} size={8.5} fill={GREY}>
        n(P ∪ C) = 25 + 18 − 8 = 35, so 40 − 35 = 5 study neither
      </Txt>
    </G>
  );
}

// ---------- a relation as an arrow diagram ----------
const MY = [52, 88, 124];
const REL = [[0, 0], [1, 1], [2, 2], [0, 1], [1, 0]];
function MappingArt() {
  return (
    <G>
      {[56, 166].map((x) => (
        <Rect key={x} x={x - 22} y={28} width={44} height={120} rx={22} fill={SHADE} stroke={BLUE} strokeWidth={1.2} />
      ))}
      <Txt x={56} y={20} size={9.5} weight="700">
        A
      </Txt>
      <Txt x={166} y={20} size={9.5} weight="700">
        A
      </Txt>
      {MY.map((y, i) => (
        <G key={y}>
          <Txt x={56} y={y + 4} size={11} weight="700">
            {i + 1}
          </Txt>
          <Txt x={166} y={y + 4} size={11} weight="700">
            {i + 1}
          </Txt>
        </G>
      ))}
      {REL.map(([a, b]) => (
        <Arrow key={`${a}${b}`} x1={66} y1={MY[a]} x2={155} y2={MY[b]} c={a === b ? GREEN : RED} w={1.3} size={5} />
      ))}
      <Txt x={111} y={170} size={8.5} fill={GREY}>
        R = {'{'}(1, 1), (2, 2), (3, 3), (1, 2), (2, 1){'}'}
      </Txt>
      <Txt x={278} y={20} size={9.5} weight="700">
        Equivalence classes
      </Txt>
      <Rect x={226} y={30} width={104} height={118} rx={8} fill="#ffffff" stroke={O} strokeWidth={1.2} />
      <Line x1={226} y1={106} x2={330} y2={106} stroke={O} strokeWidth={1.2} />
      <Txt x={266} y={64} size={11} weight="700" fill={PURPLE}>
        1
      </Txt>
      <Txt x={290} y={64} size={11} weight="700" fill={PURPLE}>
        2
      </Txt>
      <Txt x={278} y={84} size={8.5} fill={PURPLE}>
        [1] = {'{'}1, 2{'}'}
      </Txt>
      <Txt x={278} y={126} size={11} weight="700" fill={AMBER}>
        3
      </Txt>
      <Txt x={278} y={141} size={8.5} fill={AMBER}>
        [3] = {'{'}3{'}'}
      </Txt>
      <Txt x={278} y={170} size={8} fill={GREY}>
        an equivalence relation
      </Txt>
    </G>
  );
}

// ---------- a translation of y = x² ----------
const TF = frame({ left: 30, top: 16, ux: 26, x0: -3, x1: 6, y0: -1, y1: 7 });
function TransformArt() {
  const { X, Y } = TF;
  return (
    <G>
      <Axes f={TF} xs={ticks([-2, -1, 1, 2, 3, 4, 5])} ys={ticks([1, 2, 3, 4, 5, 6])} />
      <Path d={curve(TF, (x) => x * x, -3, 6)} stroke={BLUE} strokeWidth={2} fill="none" />
      <Path d={curve(TF, (x) => (x - 3) ** 2 + 1, -3, 6)} stroke={RED} strokeWidth={2} fill="none" />
      <Arrow x1={X(0)} y1={Y(0)} x2={X(3)} y2={Y(1)} c={AMBER} w={1.8} />
      <Arrow x1={X(-2)} y1={Y(4)} x2={X(1)} y2={Y(5)} c={AMBER} w={1.4} size={5} dash="4 3" />
      <Dot x={X(3)} y={Y(1)} c={RED} />
      <Txt x={X(3)} y={Y(1) + 13} size={8.5} fill={RED}>
        (3, 1)
      </Txt>
      <Txt x={X(-1)} y={Y(5.6)} size={9} weight="700" fill={BLUE}>
        y = x²
      </Txt>
      <Txt x={X(4.45)} y={Y(2)} size={8.5} weight="700" anchor="start" fill={RED}>
        y = (x − 3)² + 1
      </Txt>
      <Txt x={150} y={248} size={8.5} fill={GREY}>
        f(x) → f(x − 3) + 1: a translation by the vector (3, 1)
      </Txt>
    </G>
  );
}

// ---------- a function and its inverse ----------
const IF = frame({ left: 30, top: 16, ux: 22, x0: 0, x1: 9, y0: 0, y1: 9 });
function InverseArt() {
  const { X, Y } = IF;
  return (
    <G>
      <Axes f={IF} xs={ticks([1, 2, 3, 4, 5, 6, 7, 8])} ys={ticks([1, 2, 3, 4, 5, 6, 7, 8])} />
      <Path d={curve(IF, (x) => x, 0, 9, 10)} stroke={GREY} strokeWidth={1.2} strokeDasharray="5 4" fill="none" />
      <Path d={curve(IF, (x) => (x - 1) ** 2 + 3, 1, 9)} stroke={BLUE} strokeWidth={2} fill="none" />
      <Path d={curve(IF, (x) => 1 + Math.sqrt(x - 3), 3, 9)} stroke={RED} strokeWidth={2} fill="none" />
      <Line x1={X(1)} y1={Y(3)} x2={X(3)} y2={Y(1)} stroke={GREY} strokeWidth={1} strokeDasharray="2 3" />
      <Line x1={X(2)} y1={Y(4)} x2={X(4)} y2={Y(2)} stroke={GREY} strokeWidth={1} strokeDasharray="2 3" />
      <Dot x={X(1)} y={Y(3)} c={BLUE} />
      <Dot x={X(3)} y={Y(1)} c={RED} />
      <Dot x={X(2)} y={Y(4)} c={BLUE} r={2.4} />
      <Dot x={X(4)} y={Y(2)} c={RED} r={2.4} />
      <Txt x={X(3) + 2} y={Y(1) + 12} size={8} anchor="start" fill={RED}>
        (3, 1)
      </Txt>
      <Txt x={X(2.4)} y={Y(7.5)} size={9} weight="700" anchor="end" fill={BLUE}>
        y = f(x)
      </Txt>
      <Txt x={X(7)} y={Y(3.85)} size={9} weight="700" fill={RED}>
        y = f⁻¹(x)
      </Txt>
      <Txt x={X(8.2)} y={Y(8.5)} size={9} anchor="end" fill={GREY}>
        y = x
      </Txt>
    </G>
  );
}

// ---------- an AP and a GP ----------
const AP = [3, 7, 11, 15, 19, 23];
const GP = [8, 4, 2, 1, 0.5, 0.25];
const BASE = 160;
function ApGpArt() {
  const ya = (v) => BASE - v * (130 / 24);
  const yg = (v) => BASE - v * (130 / 16);
  const sums = GP.map((_, i) => GP.slice(0, i + 1).reduce((t, g) => t + g, 0));
  return (
    <G>
      <Line x1={30} y1={BASE} x2={162} y2={BASE} stroke={O} strokeWidth={1.2} />
      <Line x1={30} y1={BASE} x2={30} y2={ya(24) - 4} stroke={O} strokeWidth={1.2} />
      {[0, 8, 16, 24].map((v) => (
        <Txt key={`a${v}`} x={26} y={ya(v) + 3} size={8} anchor="end">
          {v}
        </Txt>
      ))}
      {AP.map((v, i) => (
        <G key={`ap${i}`}>
          <Rect x={36 + i * 21} y={ya(v)} width={16} height={BASE - ya(v)} fill={SHADE} stroke={BLUE} strokeWidth={1} />
          <Txt x={44 + i * 21} y={ya(v) - 4} size={8} weight="700" fill={BLUE}>
            {v}
          </Txt>
          <Txt x={44 + i * 21} y={172} size={8}>
            {i + 1}
          </Txt>
        </G>
      ))}
      <Line x1={200} y1={BASE} x2={334} y2={BASE} stroke={O} strokeWidth={1.2} />
      <Line x1={200} y1={BASE} x2={200} y2={yg(16) - 4} stroke={O} strokeWidth={1.2} />
      {[0, 4, 8, 12, 16].map((v) => (
        <Txt key={`g${v}`} x={196} y={yg(v) + 3} size={8} anchor="end">
          {v}
        </Txt>
      ))}
      <Line x1={200} y1={yg(16)} x2={334} y2={yg(16)} stroke={RED} strokeWidth={1} strokeDasharray="4 3" />
      {GP.map((v, i) => (
        <G key={`gp${i}`}>
          <Rect x={206 + i * 21} y={yg(v)} width={16} height={BASE - yg(v)} fill={CREAM} stroke={AMBER} strokeWidth={1} />
          <Txt x={214 + i * 21} y={172} size={8}>
            {i + 1}
          </Txt>
        </G>
      ))}
      <Path d={path(sums.map((v, i) => [214 + i * 21, yg(v)]))} stroke={RED} strokeWidth={1.4} fill="none" />
      {sums.map((v, i) => (
        <Dot key={`s${i}`} x={214 + i * 21} y={yg(v)} c={RED} r={2.6} />
      ))}
      <Txt x={334} y={yg(16) - 5} size={8.5} weight="700" anchor="end" fill={RED}>
        S∞ = 16
      </Txt>
      <Txt x={206} y={yg(16) - 5} size={8} anchor="start" fill={RED}>
        dots: Sₙ
      </Txt>
      <Txt x={96} y={190} size={9} weight="700" fill={BLUE}>
        AP: a = 3, d = 4
      </Txt>
      <Txt x={267} y={190} size={9} weight="700" fill={AMBER}>
        GP: a = 8, r = ½
      </Txt>
    </G>
  );
}

// ---------- a cobweb for uₙ₊₁ = 0.5uₙ + 3 ----------
const WF = frame({ left: 30, top: 16, ux: 24, x0: 0, x1: 8, y0: 0, y1: 8 });
function CobwebArt() {
  const { X, Y } = WF;
  const pts = [[X(2), Y(0)]];
  let u = 2;
  for (let k = 0; k < 6; k++) {
    const v = 0.5 * u + 3;
    pts.push([X(u), Y(v)], [X(v), Y(v)]);
    u = v;
  }
  return (
    <G>
      <Axes f={WF} xs={[[2, '2'], [4, '4'], [5, '5'], [6, '6'], [8, '8']]} ys={ticks([2, 4, 6, 8])} xName="uₙ" yName="uₙ₊₁" />
      <Path d={curve(WF, (x) => x, 0, 8, 10)} stroke={GREY} strokeWidth={1.2} strokeDasharray="5 4" fill="none" />
      <Path d={curve(WF, (x) => 0.5 * x + 3, 0, 8, 10)} stroke={BLUE} strokeWidth={2} fill="none" />
      <Path d={path(pts)} stroke={RED} strokeWidth={1.4} fill="none" />
      <Dot x={X(2)} y={Y(0)} c={RED} />
      <Dot x={X(6)} y={Y(6)} c={GREEN} r={3.4} />
      <Txt x={X(6) - 6} y={Y(6) - 6} size={9} weight="700" anchor="end" fill={GREEN}>
        L = 6
      </Txt>
      <Txt x={X(6.0)} y={Y(5.2)} size={8.5} weight="700" anchor="start" fill={BLUE}>
        y = 0.5x + 3
      </Txt>
      <Txt x={X(7.6)} y={Y(7.9)} size={8.5} anchor="end" fill={GREY}>
        y = x
      </Txt>
      <Txt x={X(2) + 4} y={Y(0.5)} size={8} anchor="start" fill={RED}>
        u₁ = 2
      </Txt>
    </G>
  );
}

// ---------- the method of differences ----------
const TEL = [
  ['r = 1', '1', '½'],
  ['r = 2', '½', '⅓'],
  ['r = 3', '⅓', '¼'],
  ['⋮', '⋮', '⋮'],
  ['r = n', '1/n', '1/(n + 1)'],
];
function TelescopeArt() {
  const y = (i) => 44 + i * 22;
  return (
    <G>
      <Txt x={160} y={18} size={10} weight="700">
        1/(r(r + 1)) = 1/r − 1/(r + 1)
      </Txt>
      {TEL.map(([r, a, b], i) => (
        <G key={r + i}>
          <Txt x={30} y={y(i)} size={9.5} anchor="start" fill={GREY}>
            {r}
          </Txt>
          <Txt x={130} y={y(i)} size={11} weight="700" fill={i === 0 ? GREEN : O}>
            {a}
          </Txt>
          <Txt x={170} y={y(i)} size={11} weight="700">
            {i === 3 ? '' : '−'}
          </Txt>
          <Txt x={215} y={y(i)} size={11} weight="700" fill={i === 4 ? GREEN : O}>
            {b}
          </Txt>
        </G>
      ))}
      {[0, 1, 2].map((i) => (
        <Line key={`s${i}`} x1={205} y1={y(i) + 2} x2={225} y2={y(i) - 10} stroke={RED} strokeWidth={1.4} />
      ))}
      {[1, 2, 4].map((i) => (
        <Line key={`f${i}`} x1={120} y1={y(i) + 2} x2={140} y2={y(i) - 10} stroke={RED} strokeWidth={1.4} />
      ))}
      {[0, 1, 2, 3].map((i) => (
        <Line key={`d${i}`} x1={203} y1={y(i) + 4} x2={142} y2={y(i + 1) - 12} stroke={RED} strokeWidth={0.9} strokeDasharray="3 3" />
      ))}
      <Rect x={118} y={y(0) - 13} width={24} height={18} rx={4} fill="none" stroke={GREEN} strokeWidth={1.4} />
      <Rect x={186} y={y(4) - 13} width={58} height={18} rx={4} fill="none" stroke={GREEN} strokeWidth={1.4} />
      <Txt x={160} y={166} size={9.5} weight="700" fill={GREEN}>
        Sum = 1 − 1/(n + 1) = n/(n + 1) → 1 as n → ∞
      </Txt>
      <Txt x={160} y={184} size={8.5} fill={GREY}>
        Each −1/(r + 1) cancels the +1/(r + 1) below it.
      </Txt>
    </G>
  );
}

// ---------- Pascal’s triangle ----------
const choose = (n, r) => {
  let v = 1;
  for (let k = 1; k <= r; k++) v = (v * (n - k + 1)) / k;
  return Math.round(v);
};
function PascalArt() {
  const px = (n, k) => 178 + (k - n / 2) * 36;
  const py = (n) => 20 + n * 24;
  return (
    <G>
      <Rect x={px(4, 0) - 16} y={py(4) - 13} width={36 * 4 + 32} height={26} rx={13} fill={CREAM} />
      <Arrow x1={px(3, 1) + 4} y1={py(3) + 9} x2={px(4, 2) - 4} y2={py(4) - 9} c={RED} w={1.2} size={5} />
      <Arrow x1={px(3, 2) - 4} y1={py(3) + 9} x2={px(4, 2) + 4} y2={py(4) - 9} c={RED} w={1.2} size={5} />
      {Array.from({ length: 7 }, (_, n) => (
        <G key={`n${n}`}>
          <Txt x={16} y={py(n) + 3} size={8.5} anchor="start" fill={GREY}>
            {`n = ${n}`}
          </Txt>
          {Array.from({ length: n + 1 }, (_, k) => (
            <G key={`k${k}`}>
              <Circle cx={px(n, k)} cy={py(n)} r={11} fill="#ffffff" stroke={n === 4 ? AMBER : BLUE} strokeWidth={1.1} />
              <Txt x={px(n, k)} y={py(n) + 3.5} size={9.5} weight="700">
                {choose(n, k)}
              </Txt>
            </G>
          ))}
        </G>
      ))}
      <Txt x={272} y={py(3) + 16} size={8} anchor="start" fill={RED}>
        3 + 3 = 6
      </Txt>
      <Txt x={170} y={192} size={9} weight="700" fill={AMBER}>
        (a + b)⁴ = a⁴ + 4a³b + 6a²b² + 4ab³ + b⁴
      </Txt>
      <Txt x={170} y={208} size={8.5} fill={GREY}>
        nCr + nC(r + 1) = (n + 1)C(r + 1)
      </Txt>
    </G>
  );
}

// ---------- a sector and a segment ----------
function SectorArt() {
  const cx = 104;
  const cy = 112;
  const r = 82;
  const at = (a) => [cx + r * Math.cos(rad(a)), cy - r * Math.sin(rad(a))];
  const [ax, ay] = at(30);
  const [bx, by] = at(150);
  const arc = `M${ax.toFixed(1)} ${ay.toFixed(1)} A${r} ${r} 0 0 0 ${bx.toFixed(1)} ${by.toFixed(1)}`;
  const mark = `M${cx + 18 * Math.cos(rad(30))} ${cy - 18 * Math.sin(rad(30))} A18 18 0 0 0 ${cx + 18 * Math.cos(rad(150))} ${cy - 18 * Math.sin(rad(150))}`;
  const text = [
    ['r = 10 cm, θ = 2π/3', O, true],
    ['Arc: s = rθ = 20.94 cm', O],
    ['Sector: ½r²θ', O],
    ['= 104.72 cm²', O, true],
    ['Triangle: ½r² sin θ', BLUE],
    ['= 43.30 cm²', BLUE, true],
    ['Segment: ½r²(θ − sin θ)', RED],
    ['= 61.4 cm²', RED, true],
  ];
  return (
    <G>
      <Circle cx={cx} cy={cy} r={r} fill="none" stroke={GREY} strokeWidth={1} />
      <Path d={`${arc} Z`} fill={PINK} stroke="none" />
      <Path d={`M${cx} ${cy} L${ax} ${ay} L${bx} ${by} Z`} fill={SHADE} stroke={O} strokeWidth={1.3} />
      <Path d={arc} stroke={RED} strokeWidth={2.2} fill="none" />
      <Path d={mark} stroke={O} strokeWidth={1.1} fill="none" />
      <Dot x={cx} y={cy} />
      <Txt x={cx} y={cy - 24} size={10} weight="700">
        θ
      </Txt>
      <Txt x={(cx + bx) / 2 - 8} y={(cy + by) / 2 + 12} size={10} weight="700" italic>
        r
      </Txt>
      <Txt x={(cx + ax) / 2 + 8} y={(cy + ay) / 2 + 12} size={10} weight="700" italic>
        r
      </Txt>
      <Txt x={cx} y={cy - r - 6} size={9} weight="700" fill={RED}>
        arc s
      </Txt>
      <Txt x={cx} y={ay - 12} size={8.5} weight="700" fill={RED}>
        segment
      </Txt>
      {text.map(([t, c, b], i) => (
        <Txt key={t} x={208} y={34 + i * 18 + (i > 0 ? 6 : 0) + (i > 1 ? 4 : 0)} size={8.5} weight={b ? '700' : '500'} anchor="start" fill={c}>
          {t}
        </Txt>
      ))}
    </G>
  );
}

// ---------- sin, cos and tan ----------
const SF = frame({ left: 36, top: 16, ux: 270 / (2 * PI), uy: 40, x0: 0, x1: 2 * PI, y0: -1.2, y1: 1.2 });
const NF = frame({ left: 36, top: 140, ux: 270 / (2 * PI), uy: 16, x0: 0, x1: 2 * PI, y0: -3, y1: 3 });
const PI_TICKS = [[PI / 2, 'π/2'], [PI, 'π'], [(3 * PI) / 2, '3π/2'], [2 * PI, '2π']];
function TrigArt() {
  return (
    <G>
      {PI_TICKS.map(([a]) => (
        <Line key={`g${a}`} x1={SF.X(a)} y1={SF.Y(1.2)} x2={SF.X(a)} y2={SF.Y(-1.2)} stroke={GRID} strokeWidth={1} />
      ))}
      <Axes f={SF} grid={0} xs={PI_TICKS} ys={[[1, '1'], [-1, '−1']]} xLab={SF.Y(-1.2) + 12} />
      <Path d={curve(SF, Math.sin, 0, 2 * PI)} stroke={BLUE} strokeWidth={2} fill="none" />
      <Path d={curve(SF, Math.cos, 0, 2 * PI)} stroke={RED} strokeWidth={2} fill="none" />
      <Txt x={SF.X(1.08 * PI)} y={26} size={8.5} weight="700" fill={BLUE}>
        y = sin x
      </Txt>
      <Txt x={SF.X(1.08 * PI)} y={38} size={8.5} weight="700" fill={RED}>
        y = cos x
      </Txt>
      <Axes f={NF} grid={0} xs={PI_TICKS} ys={[[2, '2'], [-2, '−2']]} origin={false} />
      {[PI / 2, (3 * PI) / 2].map((a) => (
        <Line key={a} x1={NF.X(a)} y1={NF.Y(3)} x2={NF.X(a)} y2={NF.Y(-3)} stroke={GREY} strokeWidth={1} strokeDasharray="4 3" />
      ))}
      <Path d={curve(NF, Math.tan, 0, 2 * PI, 400)} stroke={GREEN} strokeWidth={2} fill="none" />
      <Txt x={NF.X(PI)} y={NF.Y(2.4)} size={8.5} weight="700" fill={GREEN}>
        y = tan x (period π)
      </Txt>
    </G>
  );
}

// ---------- 3 cos θ + 4 sin θ = 5 cos(θ − 53.13°) = 2 ----------
const RF = frame({ left: 36, top: 18, ux: 0.75, uy: 18, x0: 0, x1: 360, y0: -5.5, y1: 5.5 });
const rcos = (t) => 5 * Math.cos(rad(t - 53.13));
function RcosArt() {
  const { X, Y } = RF;
  return (
    <G>
      <Axes f={RF} grid={0} xs={[[90, '90°'], [180, '180°'], [270, '270°'], [360, '360°']]} ys={[[5, '5'], [2, '2'], [-5, '−5']]} xName="θ" />
      <Line x1={X(0)} y1={Y(2)} x2={X(360)} y2={Y(2)} stroke={GREEN} strokeWidth={1.4} strokeDasharray="5 3" />
      <Path d={curve(RF, rcos, 0, 360)} stroke={BLUE} strokeWidth={2} fill="none" />
      {[119.6, 346.7].map((t) => (
        <G key={t}>
          <Line x1={X(t)} y1={Y(2)} x2={X(t)} y2={Y(0)} stroke={GREY} strokeWidth={1} strokeDasharray="3 3" />
          <Dot x={X(t)} y={Y(2)} c={RED} />
        </G>
      ))}
      <Txt x={X(119.6) + 5} y={Y(2) - 6} size={8.5} weight="700" anchor="start" fill={RED}>
        θ = 119.6°
      </Txt>
      <Txt x={X(346.7) - 5} y={Y(2) - 6} size={8.5} weight="700" anchor="end" fill={RED}>
        346.7°
      </Txt>
      <Dot x={X(53.13)} y={Y(5)} c={BLUE} r={2.6} />
      <Txt x={X(53.13) + 6} y={Y(5) - 4} size={8} anchor="start" fill={BLUE}>
        max R = 5 at 53.13°
      </Txt>
      <Txt x={X(4) + 2} y={Y(2) - 5} size={8.5} anchor="start" fill={GREEN}>
        y = 2
      </Txt>
      <Txt x={X(360)} y={Y(4.6)} size={8.5} weight="700" anchor="end" fill={BLUE}>
        y = 3 cos θ + 4 sin θ
      </Txt>
      <Txt x={X(360)} y={Y(3.75)} size={8.5} weight="700" anchor="end" fill={BLUE}>
        = 5 cos(θ − 53.13°)
      </Txt>
    </G>
  );
}

// ---------- matrix products and the 2 × 2 inverse ----------
function MatrixArt() {
  return (
    <G>
      <Matrix x={14} y={24} rows={[['1', '2'], ['3', '4']]} hl={[[0, 0], [0, 1]]} />
      <Txt x={84} y={45} size={12} weight="700">
        ×
      </Txt>
      <Matrix x={96} y={24} rows={[['0', '1'], ['−1', '2']]} hl={[[0, 1], [1, 1]]} />
      <Txt x={170} y={45} size={12} weight="700">
        =
      </Txt>
      <Matrix x={182} y={24} rows={[['−2', '5'], ['−4', '11']]} cw={26} hl={[[0, 1]]} hlFill={PINK} />
      <Txt x={46} y={76} size={9} weight="700">
        A
      </Txt>
      <Txt x={128} y={76} size={9} weight="700">
        B
      </Txt>
      <Txt x={216} y={76} size={9} weight="700">
        AB
      </Txt>
      <Txt x={170} y={96} size={8.5} fill={GREY}>
        row 1 of A × column 2 of B: 1 × 1 + 2 × 2 = 5
      </Txt>
      <Txt x={56} y={133} size={9.5} weight="700" anchor="end">
        BA =
      </Txt>
      <Matrix x={62} y={116} rows={[['3', '4'], ['5', '6']]} />
      <Txt x={136} y={133} size={9} weight="700" anchor="start" fill={RED}>
        ≠ AB (not commutative)
      </Txt>
      <Txt x={14} y={176} size={9} weight="700" anchor="start">
        Inverse:
      </Txt>
      <Matrix x={14} y={184} rows={[['a', 'b'], ['c', 'd']]} italic />
      <Txt x={82} y={186} size={8} weight="700" anchor="start">
        −1
      </Txt>
      <Txt x={104} y={206} size={12} weight="700">
        =
      </Txt>
      <Txt x={142} y={198} size={9}>
        1
      </Txt>
      <Line x1={118} y1={202} x2={166} y2={202} stroke={O} strokeWidth={1} />
      <Txt x={142} y={214} size={9} italic>
        ad − bc
      </Txt>
      <Matrix x={172} y={184} rows={[['d', '−b'], ['−c', 'a']]} italic />
      <Txt x={248} y={204} size={8.5} anchor="start" fill={GREY}>
        when ad − bc ≠ 0
      </Txt>
    </G>
  );
}

// ---------- Gaussian elimination ----------
const GAUSS = [
  ['Augmented matrix', [['1', '1', '1', '6'], ['2', '−1', '1', '3'], ['1', '2', '−1', '2']], 'the three equations as rows'],
  ['R2 − 2R1, R3 − R1', [['1', '1', '1', '6'], ['0', '−3', '−1', '−9'], ['0', '1', '−2', '−4']], 'x cleared below row 1'],
  ['3R3 + R2', [['1', '1', '1', '6'], ['0', '−3', '−1', '−9'], ['0', '0', '−7', '−21']], 'echelon form'],
];
const GPOS = [[6, 6], [176, 6], [176, 142]];
function GaussArt() {
  return (
    <G>
      {GAUSS.map(([head, rows, note], i) => {
        const [x, y] = GPOS[i];
        return (
          <G key={head}>
            <Rect x={x} y={y} width={158} height={112} rx={8} fill={['#e6eef8', '#e3f0da', '#fbefd0'][i]} stroke={O} strokeWidth={1.1} />
            <Txt x={x + 79} y={y + 17} size={9} weight="700">
              {`${i + 1}. ${head}`}
            </Txt>
            <Matrix x={x + 23} y={y + 28} rows={rows} cw={28} bar={3} size={9} />
            <Txt x={x + 79} y={y + 100} size={8} fill={GREY}>
              {note}
            </Txt>
          </G>
        );
      })}
      <Rect x={6} y={142} width={158} height={112} rx={8} fill="#efe6f7" stroke={O} strokeWidth={1.1} />
      <Txt x={85} y={159} size={9} weight="700">
        4. Back substitution
      </Txt>
      {['−7z = −21, so z = 3', '−3y − 3 = −9, so y = 2', 'x + 2 + 3 = 6, so x = 1'].map((t, k) => (
        <Txt key={t} x={85} y={182 + k * 17} size={8.5} weight={k === 2 ? '700' : '500'}>
          {t}
        </Txt>
      ))}
      <Txt x={85} y={242} size={8} fill={GREY}>
        check: 1 + 4 − 3 = 2 ✓
      </Txt>
      <Arrow x1={164} y1={62} x2={175} y2={62} c={O} />
      <Arrow x1={255} y1={118} x2={255} y2={141} c={O} />
      <Arrow x1={176} y1={198} x2={165} y2={198} c={O} />
    </G>
  );
}

// ---------- a vector in three dimensions ----------
const P3 = (x, y, z) => [110 - 9.33 * x + 22 * y, 172 + 9.33 * x - 18 * z];
function Vector3dArt() {
  const L = (a, b, c = GREY, w = 1, dash = '3 3') => {
    const [x1, y1] = P3(...a);
    const [x2, y2] = P3(...b);
    return <Line key={`${a}${b}`} x1={x1} y1={y1} x2={x2} y2={y2} stroke={c} strokeWidth={w} strokeDasharray={dash} />;
  };
  const edges = [
    [[2, 0, 0], [2, 3, 0]], [[0, 3, 0], [2, 3, 0]], [[2, 0, 0], [2, 0, 6]], [[0, 3, 0], [0, 3, 6]], [[2, 3, 0], [2, 3, 6]],
    [[0, 0, 6], [2, 0, 6]], [[0, 0, 6], [0, 3, 6]], [[2, 0, 6], [2, 3, 6]], [[0, 3, 6], [2, 3, 6]],
  ];
  const [ox, oy] = P3(0, 0, 0);
  const [px, py] = P3(2, 3, 6);
  const end = (v) => P3(...v);
  const text = [
    ['p = 2i + 3j + 6k', RED, true],
    ['|p| = √(2² + 3² + 6²)', O],
    ['= √49 = 7', O, true],
    ['unit vector:', O],
    ['p̂ = (2i + 3j + 6k)/7', O, true],
  ];
  return (
    <G>
      {edges.map(([a, b]) => L(a, b))}
      <Arrow x1={ox} y1={oy} x2={end([4.2, 0, 0])[0]} y2={end([4.2, 0, 0])[1]} w={1.2} size={5} />
      <Arrow x1={ox} y1={oy} x2={end([0, 6, 0])[0]} y2={end([0, 6, 0])[1]} w={1.2} size={5} />
      <Arrow x1={ox} y1={oy} x2={end([0, 0, 7.4])[0]} y2={end([0, 0, 7.4])[1]} w={1.2} size={5} />
      <Txt x={end([4.2, 0, 0])[0] - 6} y={end([4.2, 0, 0])[1] + 4} size={9} italic anchor="end">
        x
      </Txt>
      <Txt x={end([0, 6, 0])[0] + 8} y={end([0, 6, 0])[1] + 4} size={9} italic>
        y
      </Txt>
      <Txt x={end([0, 0, 7.4])[0] - 8} y={end([0, 0, 7.4])[1] + 4} size={9} italic>
        z
      </Txt>
      <Arrow x1={ox} y1={oy} x2={end([1, 0, 0])[0]} y2={end([1, 0, 0])[1]} c={GREEN} w={2.4} size={6} />
      <Arrow x1={ox} y1={oy} x2={end([0, 1, 0])[0]} y2={end([0, 1, 0])[1]} c={GREEN} w={2.4} size={6} />
      <Arrow x1={ox} y1={oy} x2={end([0, 0, 1])[0]} y2={end([0, 0, 1])[1]} c={GREEN} w={2.4} size={6} />
      <Txt x={end([1, 0, 0])[0] - 8} y={end([1, 0, 0])[1] + 2} size={9} weight="700" fill={GREEN}>
        i
      </Txt>
      <Txt x={end([0, 1, 0])[0] - 2} y={end([0, 1, 0])[1] + 13} size={9} weight="700" fill={GREEN}>
        j
      </Txt>
      <Txt x={end([0, 0, 1])[0] - 7} y={end([0, 0, 1])[1] + 2} size={9} weight="700" fill={GREEN}>
        k
      </Txt>
      <Arrow x1={ox} y1={oy} x2={px} y2={py} c={RED} w={2.2} size={7} />
      <Dot x={px} y={py} c={RED} />
      <Txt x={180} y={60} size={9} weight="700" anchor="start" fill={RED}>
        P(2, 3, 6)
      </Txt>
      <Txt x={ox - 6} y={oy + 4} size={9} anchor="end">
        O
      </Txt>
      {text.map(([t, c, b], i) => (
        <Txt key={t} x={232} y={70 + i * 17} size={8.5} weight={b ? '700' : '500'} anchor="start" fill={c}>
          {t}
        </Txt>
      ))}
    </G>
  );
}

// ---------- the scalar product and the angle ----------
const DOT_CASES = [
  [50, 'a·b > 0: acute', GREEN],
  [90, 'a·b = 0: perpendicular', BLUE],
  [130, 'a·b < 0: obtuse', RED],
];
function DotArt() {
  return (
    <G>
      {DOT_CASES.map(([deg, cap, c], i) => {
        const ox = 4 + i * 112 + 46;
        const oy = 104;
        const bx = ox + 58 * Math.cos(rad(deg));
        const by = oy - 58 * Math.sin(rad(deg));
        const fx = ox + 58 * Math.cos(rad(deg));
        const arcR = 16;
        return (
          <G key={deg}>
            {deg > 90 && <Line x1={ox} y1={oy} x2={fx - 6} y2={oy} stroke={GREY} strokeWidth={1} strokeDasharray="3 3" />}
            <Arrow x1={ox} y1={oy} x2={ox + 56} y2={oy} c={O} w={1.8} />
            <Arrow x1={ox} y1={oy} x2={bx} y2={by} c={c} w={1.8} />
            {deg !== 90 && <Line x1={bx} y1={by} x2={fx} y2={oy} stroke={GREY} strokeWidth={1} strokeDasharray="3 3" />}
            {deg !== 90 && <Line x1={ox} y1={oy + 1} x2={fx} y2={oy + 1} stroke={c} strokeWidth={3} strokeOpacity={0.5} />}
            {deg === 90 ? (
              <RightAngle x={ox} y={oy} u={[1, 0]} v={[0, -1]} s={9} />
            ) : (
              <Path d={`M${ox + arcR} ${oy} A${arcR} ${arcR} 0 0 0 ${ox + arcR * Math.cos(rad(deg))} ${oy - arcR * Math.sin(rad(deg))}`} stroke={O} strokeWidth={1} fill="none" />
            )}
            <Txt x={ox + 22 * Math.cos(rad(deg / 2)) + 3} y={oy - 22 * Math.sin(rad(deg / 2)) + 3} size={9} weight="700">
              θ
            </Txt>
            <Txt x={ox + 60} y={oy + 4} size={9.5} weight="700" anchor="start">
              a
            </Txt>
            <Txt x={bx + (deg > 90 ? -8 : 7)} y={by + 2} size={9.5} weight="700" fill={c}>
              b
            </Txt>
            <Txt x={4 + i * 112 + 54} y={128} size={8} weight="700" fill={c}>
              {cap}
            </Txt>
          </G>
        );
      })}
      <Txt x={170} y={154} size={9} weight="700">
        a·b = |a||b| cos θ = a₁b₁ + a₂b₂ + a₃b₃
      </Txt>
      <Txt x={170} y={170} size={8.5} fill={GREY}>
        cos θ = a·b ÷ (|a||b|); the thick part is the projection of b on a.
      </Txt>
    </G>
  );
}

// ---------- parallel, intersecting and skew lines ----------
const HIDDEN = new Set(['04', '45', '74']);
function SkewArt() {
  const box = [[240, 120], [310, 120], [310, 70], [240, 70], [262, 104], [332, 104], [332, 54], [262, 54]];
  const e = [[0, 1], [1, 2], [2, 3], [3, 0], [4, 5], [5, 6], [6, 7], [7, 4], [0, 4], [1, 5], [2, 6], [3, 7]];
  return (
    <G>
      <Arrow x1={14} y1={110} x2={100} y2={60} c={BLUE} w={2} />
      <Arrow x1={14} y1={140} x2={100} y2={90} c={RED} w={2} />
      <Txt x={56} y={72} size={9} weight="700" anchor="end" fill={BLUE}>
        d₁
      </Txt>
      <Txt x={72} y={124} size={9} weight="700" anchor="start" fill={RED}>
        d₂ = kd₁
      </Txt>
      <Txt x={57} y={164} size={8.5} weight="700">
        Parallel
      </Txt>
      <Txt x={57} y={177} size={8} fill={GREY}>
        d₂ is a multiple of d₁
      </Txt>
      <Arrow x1={124} y1={130} x2={210} y2={60} c={BLUE} w={2} />
      <Arrow x1={124} y1={70} x2={210} y2={124} c={RED} w={2} />
      <Dot x={165.6} y={96.1} c={GREEN} r={3.6} />
      <Txt x={167} y={164} size={8.5} weight="700">
        Intersecting
      </Txt>
      <Txt x={167} y={177} size={8} fill={GREY}>
        one common point
      </Txt>
      {e.map(([a, b]) => (
        <Line key={`${a}${b}`} x1={box[a][0]} y1={box[a][1]} x2={box[b][0]} y2={box[b][1]} stroke={GREY} strokeWidth={0.9} strokeDasharray={HIDDEN.has(`${a}${b}`) ? '2 3' : undefined} />
      ))}
      <Arrow x1={226} y1={120} x2={326} y2={120} c={BLUE} w={2} />
      <Arrow x1={229} y1={78} x2={280} y2={41} c={RED} w={2} />
      <Line x1={240} y1={120} x2={240} y2={70} stroke={GREEN} strokeWidth={2.2} />
      <RightAngle x={240} y={120} u={[1, 0]} v={[0, -1]} s={6} />
      <Txt x={322} y={134} size={9} weight="700" fill={BLUE}>
        L₁
      </Txt>
      <Txt x={290} y={42} size={9} weight="700" fill={RED}>
        L₂
      </Txt>
      <Txt x={279} y={164} size={8.5} weight="700">
        Skew
      </Txt>
      <Txt x={279} y={177} size={8} fill={GREY}>
        not parallel, never meet
      </Txt>
    </G>
  );
}

// ---------- the foot of the perpendicular ----------
function FootArt() {
  const A = [20, 150];
  const F = [152, 106];
  const P = [130, 40];
  const u = unit(180, -60);
  const steps = [
    ['1. F = a + λd', BLUE, true],
    ['(a general point of the line)', GREY],
    ['2. PF = f − p', O],
    ['3. PF·d = 0 gives λ, hence F', O],
    ['4. shortest distance = |PF|', O],
    ['Example: P(1, 1, 1),', GREY],
    ['r = (2, 0, 1) + λ(1, 1, 0)', GREY],
    ['λ = 0, F = (2, 0, 1)', GREEN, true],
    ['|PF| = √2', GREEN, true],
  ];
  return (
    <G>
      <Line x1={A[0] - 10} y1={A[1] + 3.3} x2={205} y2={88.3} stroke={BLUE} strokeWidth={2} />
      <Arrow x1={A[0] + 14} y1={A[1] - 4.7} x2={A[0] + 14 + 44 * u[0]} y2={A[1] - 4.7 + 44 * u[1]} c={AMBER} w={2.2} />
      <Txt x={A[0] + 40} y={A[1] - 22} size={9.5} weight="700" fill={AMBER}>
        d
      </Txt>
      <Dot x={A[0] + 14} y={A[1] - 4.7} c={BLUE} />
      <Txt x={A[0] + 18} y={A[1] + 12} size={9} weight="700" anchor="start" fill={BLUE}>
        A (position a)
      </Txt>
      <Line x1={P[0]} y1={P[1]} x2={F[0]} y2={F[1]} stroke={GREEN} strokeWidth={1.8} strokeDasharray="5 3" />
      <RightAngle x={F[0]} y={F[1]} u={[-u[0], -u[1]]} v={unit(P[0] - F[0], P[1] - F[1])} s={8} />
      <Dot x={P[0]} y={P[1]} c={GREEN} />
      <Dot x={F[0]} y={F[1]} c={GREEN} />
      <Txt x={P[0] - 6} y={P[1] - 2} size={10} weight="700" anchor="end" fill={GREEN}>
        P
      </Txt>
      <Txt x={F[0] + 6} y={F[1] + 14} size={10} weight="700" anchor="start" fill={GREEN}>
        F
      </Txt>
      <Txt x={150} y={64} size={8.5} weight="700" anchor="start" fill={GREEN}>
        PF·d = 0
      </Txt>
      {steps.map(([t, c, b], i) => (
        <Txt key={t} x={212} y={24 + i * 15 + (i > 4 ? 8 : 0)} size={8} weight={b ? '700' : '500'} anchor="start" fill={c}>
          {t}
        </Txt>
      ))}
    </G>
  );
}

// ---------- three kinds of limit ----------
function LimitsArt() {
  const panels = [
    frame({ left: 22, top: 26, ux: 21, uy: 15.7, x0: 0, x1: 4, y0: 0, y1: 7 }),
    frame({ left: 134, top: 26, ux: 42, uy: 22, x0: 0, x1: 2, y0: 0, y1: 5 }),
    frame({ left: 246, top: 26, ux: 3.9, uy: 183, x0: 0, x1: 20, y0: -0.1, y1: 0.5 }),
  ];
  const [a, b, c] = panels;
  const heads = ['Removable gap', 'A jump', 'At infinity'];
  const caps = [
    ['limit 4 as x → 2', 'but f(2) is undefined'],
    ['left 1, right 2', 'no limit at x = 1'],
    ['→ 2/5 as x → ∞', 'asymptote y = 0.4'],
  ];
  return (
    <G>
      {heads.map((t, i) => (
        <Txt key={t} x={4 + i * 112 + 54} y={12} size={9} weight="700">
          {t}
        </Txt>
      ))}
      <Axes f={a} grid={0} xs={[[2, '2']]} ys={[[4, '4']]} />
      <Line x1={a.X(2)} y1={a.Y(0)} x2={a.X(2)} y2={a.Y(4)} stroke={GREY} strokeWidth={1} strokeDasharray="3 3" />
      <Line x1={a.X(0)} y1={a.Y(4)} x2={a.X(2)} y2={a.Y(4)} stroke={GREY} strokeWidth={1} strokeDasharray="3 3" />
      <Path d={curve(a, (x) => x + 2, 0, 4, 10)} stroke={BLUE} strokeWidth={2} fill="none" />
      <Dot x={a.X(2)} y={a.Y(4)} c={BLUE} r={3.4} open />
      <Axes f={b} grid={0} xs={[[1, '1']]} ys={[[1, '1'], [2, '2']]} />
      <Path d={curve(b, (x) => x * x, 0, 1, 40)} stroke={RED} strokeWidth={2} fill="none" />
      <Path d={curve(b, (x) => 3 * x - 1, 1, 2, 10)} stroke={RED} strokeWidth={2} fill="none" />
      <Dot x={b.X(1)} y={b.Y(1)} c={RED} r={3.4} open />
      <Dot x={b.X(1)} y={b.Y(2)} c={RED} r={3.4} />
      <Axes f={c} grid={0} xs={[[10, '10'], [20, '20']]} ys={[[0.4, '0.4']]} />
      <Line x1={c.X(0)} y1={c.Y(0.4)} x2={c.X(20)} y2={c.Y(0.4)} stroke={GREY} strokeWidth={1} strokeDasharray="4 3" />
      <Path d={curve(c, (x) => (2 * x * x - x) / (5 * x * x + 3), 0, 20, 200)} stroke={GREEN} strokeWidth={2} fill="none" />
      {caps.map(([l1, l2], i) => (
        <G key={l1}>
          <Txt x={4 + i * 112 + 54} y={162} size={7.5} fill={[BLUE, RED, GREEN][i]} weight="700">
            {l1}
          </Txt>
          <Txt x={4 + i * 112 + 54} y={174} size={7.5} fill={GREY}>
            {l2}
          </Txt>
        </G>
      ))}
    </G>
  );
}

export const A_MATHS = {
  'am-quad-graph': {
    title: 'Three parabolas and the discriminant',
    w: 300,
    h: 302,
    art: QuadArt,
    labels: [],
    facts: [
      'All three parabolas have the axis of symmetry x = 2, because −b/2a = 4/2 = 2.',
      'y = x² − 4x + 3 has Δ = 16 − 12 = 4 > 0: it cuts the x-axis at x = 1 and x = 3, with vertex (2, −1).',
      'y = x² − 4x + 4 = (x − 2)² has Δ = 0: it touches the x-axis at x = 2.',
      'y = x² − 4x + 6 = (x − 2)² + 2 has Δ = −8 < 0: its minimum value is 2, so it never meets the x-axis.',
    ],
  },
  'am-sign-diagram': {
    title: 'A sign diagram for (x − 1)(x + 2)/(x − 3)',
    w: 340,
    h: 208,
    art: SignArt,
    labels: [],
    facts: [
      'The critical values −2, 1 and 3 split the number line into four intervals.',
      'Each factor changes sign at its own critical value; the sign of the quotient is the product of the signs.',
      'The expression is negative for x < −2, positive for −2 < x < 1, negative for 1 < x < 3 and positive for x > 3.',
      'It is zero at x = −2 and x = 1 and undefined at x = 3, which is never part of a solution.',
    ],
  },
  'am-modulus': {
    title: 'Solving |2x − 3| < x with graphs',
    w: 300,
    h: 260,
    art: ModulusArt,
    labels: [],
    facts: [
      'y = |2x − 3| is the line y = 2x − 3 with the part below the x-axis reflected upwards, giving a V with its vertex at (1.5, 0).',
      'The line y = x meets the V where −(2x − 3) = x, at (1, 1), and where 2x − 3 = x, at (3, 3).',
      'Between these points the V lies below the line, so |2x − 3| < x for 1 < x < 3.',
    ],
  },
  'am-cubic-graph': {
    title: 'The cubic f(x) = (x − 2)(2x − 1)(x + 3)',
    w: 340,
    h: 282,
    art: CubicArt,
    labels: [],
    facts: [
      'f(2) = 16 + 4 − 26 + 6 = 0, so (x − 2) is a factor by the factor theorem.',
      'Dividing gives 2x² + 5x − 3 = (2x − 1)(x + 3), so the roots are x = −3, x = ½ and x = 2.',
      'The graph crosses the y-axis at f(0) = 6; a positive leading coefficient means it rises to the right.',
    ],
  },
  'am-partial-fractions': {
    title: 'The forms of partial fractions',
    w: 362,
    h: 236,
    art: PartialArt,
    labels: [],
    facts: [
      'Distinct linear factors: (x + 5)/((x − 1)(x + 1)) = 3/(x − 1) − 2/(x + 1).',
      'A repeated factor needs both A/(x − a) and B/(x − a)²: (2x² + 1)/((x − 1)²(x + 2)) = 1/(x − 1) + 1/(x − 1)² + 1/(x + 2).',
      'An irreducible quadratic factor gets a linear numerator: (x² + 2x + 3)/((x + 1)(x² + 1)) = 1/(x + 1) + 2/(x² + 1).',
      'An improper fraction is divided first: (x³ + 2)/(x² − 1) = x + 3/(2(x − 1)) − 1/(2(x + 1)).',
    ],
  },
  'am-truth-table': {
    title: 'A truth table for the connectives',
    w: 340,
    h: 156,
    art: TruthArt,
    labels: [],
    facts: [
      'With two propositions there are four rows: TT, TF, FT and FF.',
      'p ∧ q is true only when both are true; p ∨ q is false only when both are false.',
      'p ⇒ q is false only in the row p true, q false, and its column matches ¬p ∨ q, so the two are equivalent.',
      'p ⇔ q is true when p and q have the same truth value.',
    ],
  },
  'am-induction': flowSpec(
    'Proof by mathematical induction',
    ['Base case\nshow P(1) is true', 'Assumption\nassume P(k) is true', 'Inductive step\nprove P(k + 1) from P(k)', 'Conclusion\ntrue for every n ≥ 1'],
    { perRow: 2, boxW: 140, boxH: 54, note: 'Like dominoes: the first falls, and each one knocks over the next.' },
  ),
  'am-lines': {
    title: 'Perpendicular lines and the distance from a point',
    w: 300,
    h: 284,
    art: LinesArt,
    labels: [],
    facts: [
      'y = 2x − 1 and y = −½x + 4 have gradients 2 and −½; their product is −1, so they are perpendicular and meet at (2, 3).',
      'The perpendicular from P(4, 4) to 2x − y − 1 = 0 meets it at the foot F(2.8, 4.6).',
      'The distance is d = |2(4) − 4 − 1| ÷ √(2² + 1²) = 3/√5 ≈ 1.34 units, the length PF.',
    ],
  },
  'am-circle': {
    title: 'A circle and the tangent at P',
    w: 300,
    h: 276,
    art: CircleArt,
    labels: [],
    facts: [
      'x² + y² − 2x − 4y − 20 = 0 is (x − 1)² + (y − 2)² = 25: centre C(1, 2), radius 5.',
      'The radius CP to P(4, 6) has gradient 4/3; the tangent is perpendicular to it, with gradient −3/4.',
      'The tangent at P is y − 6 = −¾(x − 4), that is 3x + 4y − 36 = 0.',
    ],
  },
  'am-exp-log': {
    title: 'y = 2ˣ and its inverse y = log₂ x',
    w: 262,
    h: 254,
    art: ExpLogArt,
    labels: [],
    facts: [
      'y = 2ˣ passes through (0, 1), (1, 2) and (2, 4); it is always positive and tends to 0 as x → −∞.',
      'y = log₂ x passes through (1, 0), (2, 1) and (4, 2); it is defined only for x > 0.',
      'Each graph is the reflection of the other in the line y = x, because they are inverse functions.',
    ],
  },
  'am-venn': {
    title: 'A Venn diagram: Physics and Chemistry',
    w: 300,
    h: 204,
    art: VennArt,
    labels: [],
    facts: [
      'Of 40 students, 25 study Physics, 18 study Chemistry and 8 study both.',
      'Physics only: 25 − 8 = 17; Chemistry only: 18 − 8 = 10.',
      'n(P ∪ C) = 25 + 18 − 8 = 35, so 5 students study neither.',
    ],
  },
  'am-mapping': {
    title: 'A relation as an arrow diagram',
    w: 340,
    h: 180,
    art: MappingArt,
    labels: [],
    facts: [
      'R on A = {1, 2, 3} contains (1, 1), (2, 2), (3, 3), (1, 2) and (2, 1).',
      'It is reflexive (every element maps to itself), symmetric ((1, 2) and (2, 1)) and transitive, so it is an equivalence relation.',
      'Its equivalence classes are {1, 2} and {3}: they do not overlap and together make up A.',
    ],
  },
  'am-transform': {
    title: 'A translation: y = x² to y = (x − 3)² + 1',
    w: 310,
    h: 256,
    art: TransformArt,
    labels: [],
    facts: [
      'Replacing x by x − 3 moves the graph 3 units to the right; adding 1 moves it 1 unit up.',
      'Every point moves by the vector (3, 1): the vertex (0, 0) goes to (3, 1) and (−2, 4) goes to (1, 5).',
      'In general y = f(x − a) + b is y = f(x) translated by (a, b).',
    ],
  },
  'am-inverse-graph': {
    title: 'f(x) = (x − 1)² + 3, x ≥ 1, and its inverse',
    w: 260,
    h: 248,
    art: InverseArt,
    labels: [],
    facts: [
      'With the domain x ≥ 1, f is one-to-one, with range f(x) ≥ 3.',
      'Its inverse is f⁻¹(x) = 1 + √(x − 3) for x ≥ 3: the domain of f⁻¹ is the range of f.',
      'The graph of f⁻¹ is the reflection of f in y = x: (1, 3) goes to (3, 1) and (2, 4) goes to (4, 2).',
    ],
  },
  'am-ap-gp': {
    title: 'An arithmetic and a geometric progression',
    w: 340,
    h: 198,
    art: ApGpArt,
    labels: [],
    facts: [
      'The AP 3, 7, 11, 15, … adds d = 4 each time: uₙ = 3 + 4(n − 1), so the bars rise in equal steps.',
      'The GP 8, 4, 2, 1, … multiplies by r = ½ each time: uₙ = 8(½)ⁿ⁻¹.',
      'The GP’s partial sums 8, 12, 14, 15, 15.5, … approach S∞ = a/(1 − r) = 8/(1 − ½) = 16.',
    ],
  },
  'am-recurrence': {
    title: 'A cobweb for uₙ₊₁ = 0.5uₙ + 3',
    w: 262,
    h: 244,
    art: CobwebArt,
    labels: [],
    facts: [
      'Starting from u₁ = 2, go up to the line y = 0.5x + 3 to read u₂ = 4, then across to y = x to use it as the next input.',
      'The terms 2, 4, 5, 5.5, 5.75, … close in on the point where the two lines cross.',
      'At the limit L = 0.5L + 3, so L = 6.',
    ],
  },
  'am-sums': columnsSpec(
    'The standard sums (with n = 10)',
    [
      { head: 'Σ r', items: ['½n(n + 1)', 'n = 10: 55'] },
      { head: 'Σ r²', items: ['⅙n(n + 1)(2n + 1)', 'n = 10: 385'] },
      { head: 'Σ r³', items: ['¼n²(n + 1)²', '= (Σ r)²', 'n = 10: 3025'] },
    ],
    { colW: 106 },
  ),
  'am-telescope': {
    title: 'The method of differences',
    w: 320,
    h: 196,
    art: TelescopeArt,
    labels: [],
    facts: [
      'By partial fractions, 1/(r(r + 1)) = 1/r − 1/(r + 1).',
      'Written out, the −½ of the first term cancels the +½ of the second, and so on down the list.',
      'Only 1 and −1/(n + 1) survive, so the sum is n/(n + 1), which tends to 1 as n → ∞.',
    ],
  },
  'am-pascal': {
    title: 'Pascal’s triangle, rows 0 to 6',
    w: 340,
    h: 216,
    art: PascalArt,
    labels: [],
    facts: [
      'Row n lists nC0, nC1, …, nCn; each entry is the sum of the two above it.',
      'Row 4 is 1 4 6 4 1, the coefficients of (a + b)⁴.',
      'The 6 in row 4 is 3 + 3 from row 3: nCr + nC(r + 1) = (n + 1)C(r + 1).',
    ],
  },
  'am-sector': {
    title: 'Arc, sector and segment (radians)',
    w: 340,
    h: 200,
    art: SectorArt,
    labels: [],
    facts: [
      'With θ in radians, the arc length is s = rθ and the sector area is ½r²θ.',
      'For r = 10 cm and θ = 2π/3, the sector is 104.72 cm² and the triangle of the two radii is ½r² sin θ = 43.30 cm².',
      'The segment between the chord and the arc is ½r²(θ − sin θ) = 61.4 cm².',
    ],
  },
  'am-trig-graphs': {
    title: 'The graphs of sin x, cos x and tan x',
    w: 330,
    h: 248,
    art: TrigArt,
    labels: [],
    facts: [
      'sin x and cos x have period 2π and amplitude 1; cos x is sin x shifted π/2 to the left.',
      'tan x has period π and vertical asymptotes at x = π/2 and x = 3π/2, where cos x = 0.',
      'sin x = 0 at 0, π and 2π; cos x = 0 at π/2 and 3π/2.',
    ],
  },
  'am-rcos': {
    title: 'Solving 3 cos θ + 4 sin θ = 2',
    w: 330,
    h: 236,
    art: RcosArt,
    labels: [],
    facts: [
      '3 cos θ + 4 sin θ = R cos(θ − α) with R = √(9 + 16) = 5 and tan α = 4/3, so α = 53.13°.',
      'The curve has maximum 5 at θ = 53.13° and minimum −5 at θ = 233.13°.',
      '5 cos(θ − 53.13°) = 2 gives θ − 53.13° = ±66.42°, so θ = 119.6° or 346.7° where the curve meets y = 2.',
    ],
  },
  'am-matrix': {
    title: 'Multiplying matrices; the 2 × 2 inverse',
    w: 340,
    h: 226,
    art: MatrixArt,
    labels: [],
    facts: [
      'Each entry of AB is a row of A times a column of B: row 1 by column 2 gives 1 × 1 + 2 × 2 = 5.',
      'For A = [1 2; 3 4] and B = [0 1; −1 2], AB = [−2 5; −4 11] but BA = [3 4; 5 6], so AB ≠ BA.',
      'The inverse of [a b; c d] swaps a and d, changes the signs of b and c, and divides by the determinant ad − bc, which must not be 0.',
    ],
  },
  'am-gauss': {
    title: 'Gaussian elimination and back substitution',
    w: 340,
    h: 260,
    art: GaussArt,
    labels: [],
    facts: [
      'The system x + y + z = 6, 2x − y + z = 3, x + 2y − z = 2 is written as an augmented matrix.',
      'R2 − 2R1 and R3 − R1 clear x below the first row; 3R3 + R2 then clears y, giving echelon form.',
      'The last row gives −7z = −21, so z = 3; back substitution gives y = 2 and x = 1.',
    ],
  },
  'am-counting': columnsSpec(
    'Arrangements, permutations and combinations',
    [
      { head: 'Arrangements', items: ['n! in a row', 'BANANA: 6!/(3! 2!)', '= 60', 'circle: (n − 1)!'] },
      { head: 'Permutations\nnPr', items: ['order matters', 'n!/(n − r)!', '6P2 = 30', '26P3 = 15 600'] },
      { head: 'Combinations\nnCr', items: ['order does not matter', 'n!/(r!(n − r)!)', '10C5 = 252', 'nCr = nPr ÷ r!'] },
    ],
    { colW: 112 },
  ),
  'am-vector-3d': {
    title: 'A position vector in three dimensions',
    w: 340,
    h: 222,
    art: Vector3dArt,
    labels: [],
    facts: [
      'The unit vectors i, j and k point along the x, y and z axes.',
      'P(2, 3, 6) has position vector p = 2i + 3j + 6k, the diagonal of a 2 by 3 by 6 box.',
      '|p| = √(2² + 3² + 6²) = √49 = 7, so the unit vector in its direction is (2i + 3j + 6k)/7.',
    ],
  },
  'am-dot-angle': {
    title: 'The scalar product and the angle between vectors',
    w: 340,
    h: 178,
    art: DotArt,
    labels: [],
    facts: [
      'a·b = |a||b| cos θ, and in components a·b = a₁b₁ + a₂b₂ + a₃b₃.',
      'a·b > 0 for an acute angle, a·b = 0 exactly when the vectors are perpendicular, and a·b < 0 for an obtuse angle.',
      '|b| cos θ is the projection of b on a, shown as the thick part along a.',
    ],
  },
  'am-skew-lines': {
    title: 'Parallel, intersecting and skew lines',
    w: 340,
    h: 184,
    art: SkewArt,
    labels: [],
    facts: [
      'Parallel lines have direction vectors that are multiples of each other.',
      'Intersecting lines have values of λ and μ that satisfy all three component equations.',
      'Skew lines are neither: like an edge along the floor of a box and an edge across its top, they never meet. The edge joining them is their common perpendicular.',
    ],
  },
  'am-foot-perp': {
    title: 'The foot of the perpendicular from a point to a line',
    w: 340,
    h: 172,
    art: FootArt,
    labels: [],
    facts: [
      'A general point of the line r = a + λd is F = a + λd.',
      'F is the foot of the perpendicular from P when PF·d = 0; this gives λ.',
      'The shortest distance from P to the line is |PF|. For P(1, 1, 1) and r = (2, 0, 1) + λ(1, 1, 0): λ = 0, F = (2, 0, 1) and |PF| = √2.',
    ],
  },
  'am-limits': {
    title: 'A removable gap, a jump and a limit at infinity',
    w: 340,
    h: 180,
    art: LimitsArt,
    labels: [],
    facts: [
      '(x² − 4)/(x − 2) equals x + 2 except at x = 2, where it is undefined; the limit as x → 2 is still 4.',
      'f(x) = x² for x < 1 and 3x − 1 for x ≥ 1 has left limit 1 and right limit 2 at x = 1, so the limit does not exist.',
      '(2x² − x)/(5x² + 3) → 2/5 as x → ∞, giving the horizontal asymptote y = 0.4.',
    ],
  },
  'am-gce-maths': columnsSpec(
    'GCE A Level 0765 and 0770: the three papers',
    [
      { head: 'Paper 1', items: ['1½ hours', 'multiple choice', 'Thu 11 June 2026'] },
      { head: 'Paper 2', items: ['3 hours', 'structured questions', 'Fri 12 June 2026'] },
      { head: 'Paper 3', items: ['3 hours', 'structured questions', 'Fri 12 June 2026'] },
    ],
    { colW: 106 },
  ),
};
