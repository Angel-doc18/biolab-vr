// Mathematics figures for Form 1: numerals, periods and bases, constructions
// with compasses, number properties and the order of operations, time and
// temperature, the protractor and angle facts, dot patterns, divisibility,
// HCF and LCM, the circle, fractions and decimals, standard form, triangles,
// ratio, percentage and proportion, quadrilaterals and their areas, symmetry,
// solids, and simple statistics. Angles, lengths, scales and charts are drawn
// to scale from the numbers in the lessons.
import { Circle, Ellipse, G, Line, Path, Polygon, Rect } from 'react-native-svg';
import { Head, Txt } from './Diagram';
import { O } from './kit';

const MUTED = '#6b7a88';
const BLUE = '#3f6fb5';
const RED = '#c8463d';
const GREEN = '#2f7d4f';
const AMBER = '#d4a72c';
const GOLD = '#9a7414';
const PURPLE = '#7b5ea7';
const SHADE = '#cfe0f2';
const PALE = '#eef3fa';
const WARM = '#fbefd0';
const LEAF = '#e3f0da';
const ROSE = '#f8e3df';
const LINE = '#d5dde5';
const range = (n, f) => Array.from({ length: n }, (_, i) => f(i));
const rad = (d) => (d * Math.PI) / 180;
// The point at angle a (degrees, anticlockwise from east) and distance r from (cx, cy).
const at = (cx, cy, r, a) => [cx + r * Math.cos(rad(a)), cy - r * Math.sin(rad(a))];
// The direction (degrees, anticlockwise from east) from p to q.
const dir = (p, q) => (Math.atan2(p[1] - q[1], q[0] - p[0]) * 180) / Math.PI;
const poly = (pts) => pts.map((p) => p.join(',')).join(' ');
const mid = (p, q) => [(p[0] + q[0]) / 2, (p[1] + q[1]) / 2];

function Arrow({ x1, y1, x2, y2, c = O, w = 1.3, size = 6 }) {
  return (
    <G>
      <Line x1={x1} y1={y1} x2={x2} y2={y2} stroke={c} strokeWidth={w} />
      <Head x={x2} y={y2} dx={x2 - x1} dy={y2 - y1} size={size} fill={c} />
    </G>
  );
}

// An arc of a circle at (cx, cy) turning anticlockwise from direction a1 to a2.
function Arc({ cx, cy, r, a1, a2, c = O, w = 1.2, dash }) {
  const [x1, y1] = at(cx, cy, r, a1);
  const [x2, y2] = at(cx, cy, r, a2);
  return <Path d={`M${x1} ${y1} A${r} ${r} 0 ${a2 - a1 > 180 ? 1 : 0} 0 ${x2} ${y2}`} fill="none" stroke={c} strokeWidth={w} strokeDasharray={dash} />;
}

// A filled sector of a circle from direction a1 to a2 (anticlockwise).
function Sector({ cx, cy, r, a1, a2, fill, stroke = 'none' }) {
  const [x1, y1] = at(cx, cy, r, a1);
  const [x2, y2] = at(cx, cy, r, a2);
  return <Path d={`M${cx} ${cy} L${x1} ${y1} A${r} ${r} 0 ${a2 - a1 > 180 ? 1 : 0} 0 ${x2} ${y2} Z`} fill={fill} stroke={stroke} strokeWidth={1} />;
}

// A right-angle mark at (x, y) between directions a and a + 90.
function RightAngle({ x, y, a, s = 7, c = O }) {
  const [x1, y1] = at(x, y, s, a);
  const [x3, y3] = at(x, y, s, a + 90);
  return <Path d={`M${x1} ${y1} L${x1 + x3 - x} ${y1 + y3 - y} L${x3} ${y3}`} fill="none" stroke={c} strokeWidth={1} />;
}

// n small strokes across the middle of segment pq: segments with the same
// number of strokes are equal.
function Ticks({ p, q, n = 1, c = O }) {
  const [mx, my] = mid(p, q);
  const len = Math.hypot(q[0] - p[0], q[1] - p[1]) || 1;
  const ux = (q[0] - p[0]) / len;
  const uy = (q[1] - p[1]) / len;
  return (
    <G>
      {range(n, (k) => {
        const o = (k - (n - 1) / 2) * 3.6;
        const x = mx + ux * o;
        const y = my + uy * o;
        return <Line key={k} x1={x - uy * 4.5} y1={y + ux * 4.5} x2={x + uy * 4.5} y2={y - ux * 4.5} stroke={c} strokeWidth={1.2} />;
      })}
    </G>
  );
}

const Dot = ({ p, c = O, r = 2.6 }) => <Circle cx={p[0]} cy={p[1]} r={r} fill={c} />;
const Seg = ({ p, q, c = O, w = 1.4, dash }) => <Line x1={p[0]} y1={p[1]} x2={q[0]} y2={q[1]} stroke={c} strokeWidth={w} strokeDasharray={dash} />;
const Brace = ({ x1, x2, y, up, c = O }) => <Path d={`M${x1} ${y} L${x1} ${y + (up ? -6 : 6)} L${x2} ${y + (up ? -6 : 6)} L${x2} ${y}`} fill="none" stroke={c} strokeWidth={1.3} />;

// ---------- numerals ----------
function Lotus({ x, y }) {
  return (
    <G>
      <Line x1={x} y1={y} x2={x} y2={y - 13} stroke={GREEN} strokeWidth={1.6} />
      <Path d={`M${x} ${y - 5} Q${x - 7} ${y - 9} ${x - 9} ${y - 5}`} fill="none" stroke={GREEN} strokeWidth={1.4} />
      <Path d={`M${x} ${y - 13} Q${x - 8} ${y - 18} ${x - 6} ${y - 26} Q${x - 3} ${y - 20} ${x} ${y - 28} Q${x + 3} ${y - 20} ${x + 6} ${y - 26} Q${x + 8} ${y - 18} ${x} ${y - 13} Z`} fill="#f3d9e6" stroke={O} strokeWidth={1.1} />
    </G>
  );
}
function Coil({ x, y }) {
  const pts = range(80, (i) => {
    const t = (i / 79) * 2.6 * 2 * Math.PI;
    const r = 1.2 + (7.6 * i) / 79;
    return [x + r * Math.cos(t), y - r * Math.sin(t)];
  });
  return <Path d={`M${pts.map((p) => p.map((v) => v.toFixed(1)).join(' ')).join(' L')}`} fill="none" stroke={AMBER} strokeWidth={1.5} />;
}
const HeelBone = ({ x, y }) => <Path d={`M${x - 5} ${y} L${x - 5} ${y - 12} Q${x - 5} ${y - 22} ${x} ${y - 22} Q${x + 5} ${y - 22} ${x + 5} ${y - 12} L${x + 5} ${y}`} fill="none" stroke={BLUE} strokeWidth={1.6} />;
const Stroke = ({ x, y }) => <Line x1={x} y1={y} x2={x} y2={y - 22} stroke={RED} strokeWidth={1.8} />;

const COLS = [125, 172, 232, 280]; // thousands, hundreds, tens, units
function NumeralsArt() {
  const yb = 50;
  const row = (y, items, size, fill = O, weight = '700') =>
    items.map((v, i) => (
      <Txt key={`${y}${i}`} x={COLS[i]} y={y} size={size} fill={fill} weight={weight}>
        {v}
      </Txt>
    ));
  return (
    <G>
      {[66, 122].map((y) => (
        <Line key={y} x1={8} y1={y} x2={338} y2={y} stroke={LINE} strokeWidth={1} />
      ))}
      {[
        ['Egyptian', 36],
        ['Roman', 94],
        ['Hindu-Arabic', 148],
      ].map(([t, y]) => (
        <Txt key={t} x={10} y={y} size={9.5} anchor="start" weight="700">
          {t}
        </Txt>
      ))}
      <Lotus x={COLS[0]} y={yb} />
      {[152, 172, 192].map((x) => (
        <Coil key={x} x={x} y={yb - 11} />
      ))}
      {[214, 226, 238, 250].map((x) => (
        <HeelBone key={x} x={x} y={yb} />
      ))}
      {[276, 284].map((x) => (
        <Stroke key={x} x={x} y={yb} />
      ))}
      {row(yb + 11, ['1000', '300', '40', '2'], 7.5, MUTED, '500')}
      {row(98, ['M', 'CCC', 'XL', 'II'], 15)}
      {row(112, ['1000', '300', '40', '2'], 7.5, MUTED, '500')}
      {row(152, ['1', '3', '4', '2'], 17)}
      {row(166, ['thousands', 'hundreds', 'tens', 'units'], 7.5, MUTED, '500')}
      <Txt x={320} y={yb - 6} size={10} weight="700">
        = 1342
      </Txt>
      <Txt x={318} y={98} size={9} weight="700">
        MCCCXLII
      </Txt>
      <Txt x={320} y={150} size={10} weight="700">
        1342
      </Txt>
    </G>
  );
}

// ---------- periods ----------
function PeriodsArt() {
  const x0 = 17;
  const cw = 34;
  const periods = [
    ['Millions', ROSE],
    ['Thousands', LEAF],
    ['Units', PALE],
  ];
  const digits = ['', '2', '7', '9', '1', '4', '6', '0', '0'];
  return (
    <G>
      {periods.map(([name, fill], p) => (
        <G key={name}>
          <Rect x={x0 + p * 3 * cw} y={14} width={3 * cw} height={20} fill={fill} stroke={O} strokeWidth={1} />
          <Txt x={x0 + p * 3 * cw + 1.5 * cw} y={28} size={9.5} weight="700">
            {name}
          </Txt>
        </G>
      ))}
      {range(9, (i) => (
        <G key={i}>
          <Rect x={x0 + i * cw} y={34} width={cw} height={16} fill="#ffffff" stroke={O} strokeWidth={1} />
          <Txt x={x0 + i * cw + cw / 2} y={45.5} size={8.5} fill={MUTED} weight="700">
            {['H', 'T', 'U'][i % 3]}
          </Txt>
          <Rect x={x0 + i * cw} y={50} width={cw} height={32} fill="#ffffff" stroke={O} strokeWidth={1} />
          <Txt x={x0 + i * cw + cw / 2} y={72} size={18} weight="700">
            {digits[i]}
          </Txt>
        </G>
      ))}
      {[1, 2].map((p) => (
        <Line key={p} x1={x0 + p * 3 * cw} y1={14} x2={x0 + p * 3 * cw} y2={82} stroke={O} strokeWidth={2.4} />
      ))}
      <Txt x={170} y={104} size={13} weight="700">
        27 914 600
      </Txt>
      <Txt x={170} y={124} size={8.4}>
        twenty-seven million, nine hundred and fourteen thousand, six hundred
      </Txt>
    </G>
  );
}

// ---------- counting in fives ----------
function Orange({ x, y }) {
  return (
    <G>
      <Circle cx={x} cy={y} r={6} fill="#f0a23a" stroke="#b56f12" strokeWidth={1} />
      <Line x1={x} y1={y - 6} x2={x + 2} y2={y - 9} stroke={GREEN} strokeWidth={1.4} />
    </G>
  );
}
function BasesArt() {
  const spots = [
    [-14, -6],
    [0, -6],
    [14, -6],
    [-7, 8],
    [7, 8],
  ];
  return (
    <G>
      {range(4, (b) => {
        const cx = 40 + b * 62;
        return (
          <G key={b}>
            <Rect x={cx - 28} y={36} width={56} height={44} rx={10} fill={WARM} stroke={O} strokeWidth={1.2} />
            {spots.map(([dx, dy], k) => (
              <Orange key={k} x={cx + dx} y={58 + dy} />
            ))}
          </G>
        );
      })}
      {[274, 292, 310].map((x) => (
        <Orange key={x} x={x} y={62} />
      ))}
      <Txt x={133} y={24} size={9.5} weight="700">
        4 bags of five
      </Txt>
      <Txt x={292} y={24} size={9.5} weight="700">
        3 left over
      </Txt>
      {[
        [60, 'fives', '4', BLUE],
        [116, 'units', '3', RED],
      ].map(([x, head, d, c]) => (
        <G key={head}>
          <Rect x={x} y={104} width={56} height={18} fill={SHADE} stroke={O} strokeWidth={1} />
          <Rect x={x} y={122} width={56} height={30} fill="#ffffff" stroke={O} strokeWidth={1} />
          <Txt x={x + 28} y={117} size={9} weight="700">
            {head}
          </Txt>
          <Txt x={x + 28} y={144} size={17} weight="700" fill={c}>
            {d}
          </Txt>
        </G>
      ))}
      <Txt x={262} y={124} size={16} weight="700">
        23 = 43₅
      </Txt>
      <Txt x={262} y={144} size={9.5} fill={MUTED}>
        4 × 5 + 3 = 23
      </Txt>
    </G>
  );
}

// ---------- the perpendicular bisector ----------
const PB = (() => {
  const r = 110;
  const h = Math.sqrt(r * r - 80 * 80);
  return { A: [70, 104], B: [230, 104], r, P: [150, 104 - h], Q: [150, 104 + h], M: [150, 104] };
})();
function PerpBisectorArt() {
  const { A, B, r, P, Q, M } = PB;
  const aA = dir(A, P);
  const aB = dir(B, P);
  const name = (p, dx, dy, t) => (
    <Txt x={p[0] + dx} y={p[1] + dy} size={11} weight="700">
      {t}
    </Txt>
  );
  return (
    <G>
      <Arc cx={A[0]} cy={A[1]} r={r} a1={aA - 13} a2={aA + 13} c={AMBER} w={1.3} />
      <Arc cx={A[0]} cy={A[1]} r={r} a1={-aA - 13} a2={-aA + 13} c={AMBER} w={1.3} />
      <Arc cx={B[0]} cy={B[1]} r={r} a1={aB - 13} a2={aB + 13} c={AMBER} w={1.3} />
      <Arc cx={B[0]} cy={B[1]} r={r} a1={360 - aB - 13} a2={360 - aB + 13} c={AMBER} w={1.3} />
      <Seg p={[150, P[1] - 12]} q={[150, Q[1] + 12]} c={BLUE} w={1.6} />
      <Seg p={A} q={B} w={1.8} />
      <RightAngle x={M[0]} y={M[1]} a={0} />
      <Ticks p={A} q={M} n={2} />
      <Ticks p={M} q={B} n={2} />
      {[A, B, M, P, Q].map((p, i) => (
        <Dot key={i} p={p} />
      ))}
      {name(A, -10, 4, 'A')}
      {name(B, 10, 4, 'B')}
      {name(M, -9, 15, 'M')}
      {name(P, 12, 2, 'P')}
      {name(Q, 12, 6, 'Q')}
      <Txt x={258} y={20} size={9} fill={BLUE} weight="700">
        perpendicular
      </Txt>
      <Txt x={258} y={31} size={9} fill={BLUE} weight="700">
        bisector (PQ)
      </Txt>
    </G>
  );
}

// ---------- parallel and perpendicular lines ----------
function ParallelArt() {
  const panel = (x0, kind) => {
    const L = x0 + 12;
    const R = x0 + 92;
    if (kind === 0)
      return (
        <G>
          {[22, 46, 70].map((y, i) => (
            <G key={y}>
              <Line x1={L} y1={y} x2={R} y2={y} stroke={i === 2 ? GREEN : BLUE} strokeWidth={1.5} />
              <Txt x={R + 3} y={y + 3} size={8} anchor="start">
                {`(d${['₁', '₂', '₃'][i]})`}
              </Txt>
            </G>
          ))}
        </G>
      );
    const xv = x0 + 50;
    return (
      <G>
        <Line x1={xv} y1={12} x2={xv} y2={82} stroke={kind === 1 ? GREEN : RED} strokeWidth={1.5} />
        <Txt x={xv + 4} y={16} size={8} anchor="start">
          (d)
        </Txt>
        {[34, 64].map((y, i) => (
          <G key={y}>
            <Line x1={L} y1={y} x2={R} y2={y} stroke={BLUE} strokeWidth={1.5} />
            <RightAngle x={xv} y={y} a={0} s={6} />
            <Txt x={R + 3} y={y + 3} size={8} anchor="start">
              {`(d${['₁', '₂'][i]})`}
            </Txt>
          </G>
        ))}
      </G>
    );
  };
  const caps = [
    ['(d₁) ∥ (d₃) and (d₂) ∥ (d₃)', 'so (d₁) ∥ (d₂)'],
    ['(d₁) ⊥ (d) and (d₂) ⊥ (d)', 'so (d₁) ∥ (d₂)'],
    ['(d₁) ∥ (d₂) and (d) ⊥ (d₁)', 'so (d) ⊥ (d₂)'],
  ];
  return (
    <G>
      {[0, 1, 2].map((k) => (
        <G key={k}>
          {panel(4 + k * 118, k)}
          <Txt x={4 + k * 118 + 58} y={102} size={8}>
            {caps[k][0]}
          </Txt>
          <Txt x={4 + k * 118 + 58} y={116} size={8.5} weight="700">
            {caps[k][1]}
          </Txt>
        </G>
      ))}
      {[120, 238].map((x) => (
        <Line key={x} x1={x} y1={10} x2={x} y2={120} stroke={LINE} strokeWidth={1} />
      ))}
    </G>
  );
}

// ---------- properties of addition and multiplication ----------
function PropertiesArt() {
  const xs = [6, 92, 222, 352];
  const rows = [
    ['commutative', '7 + 5 = 5 + 7', '4 × 9 = 9 × 4'],
    ['associative', '(8 + 6) + 4 = 8 + (6 + 4)', '(2 × 9) × 5 = 2 × (9 × 5)'],
    ['identity', '9 + 0 = 9', '9 × 1 = 9'],
    ['distributive', '6 × (10 + 3) = 6 × 10 + 6 × 3 = 78'],
  ];
  const rh = 30;
  const cell = (x1, x2, y, j) => <Rect x={x1} y={y} width={x2 - x1} height={rh} fill={j % 2 ? '#ffffff' : PALE} stroke={O} strokeWidth={1} />;
  return (
    <G>
      <Rect x={xs[0]} y={10} width={xs[3] - xs[0]} height={22} fill={SHADE} stroke={O} strokeWidth={1} />
      {['Property', 'Addition', 'Multiplication'].map((t, i) => (
        <Txt key={t} x={(xs[i] + xs[i + 1]) / 2} y={25} size={9.5} weight="700">
          {t}
        </Txt>
      ))}
      {rows.map((r, j) => {
        const y = 32 + j * rh;
        return (
          <G key={r[0]}>
            {cell(xs[0], xs[1], y, j)}
            <Txt x={xs[0] + 6} y={y + 19} size={9} anchor="start" weight="700">
              {r[0]}
            </Txt>
            {r.length === 2 ? (
              <G>
                {cell(xs[1], xs[3], y, j)}
                <Txt x={(xs[1] + xs[3]) / 2} y={y + 19} size={9}>
                  {r[1]}
                </Txt>
              </G>
            ) : (
              [1, 2].map((c) => (
                <G key={c}>
                  {cell(xs[c], xs[c + 1], y, j)}
                  <Txt x={(xs[c] + xs[c + 1]) / 2} y={y + 19} size={8.6}>
                    {r[c]}
                  </Txt>
                </G>
              ))
            )}
          </G>
        );
      })}
    </G>
  );
}

// ---------- the order of operations ----------
function BodmasArt() {
  const steps = ['20 − (1 + 2)² × 4 ÷ 6', '= 20 − 3² × 4 ÷ 6', '= 20 − 9 × 4 ÷ 6', '= 20 − 36 ÷ 6', '= 20 − 6', '= 14'];
  const ys = [24, 56, 86, 116, 146, 176];
  const boxes = [
    ['B', ['Brackets'], 42, 70, SHADE],
    ['O', ['Orders: powers'], 72, 100, LEAF],
    ['DM', ['÷ and ×, from', 'left to right'], 102, 160, WARM],
    ['AS', ['+ and −, from', 'left to right'], 162, 190, ROSE],
  ];
  const colour = [O, BLUE, GREEN, AMBER, AMBER, RED];
  return (
    <G>
      {boxes.map(([k, lines, y1, y2, fill]) => (
        <G key={k}>
          <Rect x={8} y={y1} width={150} height={y2 - y1 - 2} rx={6} fill={fill} stroke={O} strokeWidth={1} />
          <Txt x={32} y={(y1 + y2) / 2 + 4} size={15} weight="700">
            {k}
          </Txt>
          {lines.map((t, i) => (
            <Txt key={t} x={58} y={(y1 + y2) / 2 + 2 + (i - (lines.length - 1) / 2) * 12} size={9} anchor="start">
              {t}
            </Txt>
          ))}
        </G>
      ))}
      {steps.map((s, i) => (
        <G key={s}>
          {i > 0 && <Circle cx={170} cy={ys[i] - 4} r={3.2} fill={colour[i]} />}
          <Txt x={180} y={ys[i]} size={11} anchor="start" weight={i === 5 ? '700' : '500'}>
            {s}
          </Txt>
        </G>
      ))}
    </G>
  );
}

// ---------- BC and AD ----------
function BcAdArt() {
  const X = (y) => 20 + ((y + 600) * 300) / 2700;
  const yl = 58;
  const marks = [
    [-500, '500 BC', -1],
    [-100, '100 BC', 1],
    [1, 'AD 1', -1],
    [1000, 'AD 1000', 1],
    [2026, 'AD 2026', -1],
  ];
  return (
    <G>
      <Line x1={14} y1={yl} x2={326} y2={yl} stroke={O} strokeWidth={1.6} />
      <Head x={326} y={yl} dx={1} dy={0} size={6} />
      <Head x={14} y={yl} dx={-1} dy={0} size={6} />
      {marks.map(([y, t, s]) => (
        <G key={t}>
          <Line x1={X(y)} y1={yl - 6} x2={X(y)} y2={yl + 6} stroke={O} strokeWidth={1.4} />
          <Txt x={y === 2026 ? X(y) + 4 : X(y)} y={s < 0 ? yl - 11 : yl + 18} size={8.5} weight="700" anchor={y === 2026 ? 'end' : 'middle'}>
            {t}
          </Txt>
        </G>
      ))}
      <Txt x={14} y={20} size={8.5} fill={RED} anchor="start">
        BC: counted backwards
      </Txt>
      <Txt x={326} y={20} size={8.5} fill={BLUE} anchor="end">
        AD: counted forwards
      </Txt>
      <Brace x1={X(-500)} x2={X(2026)} y={yl + 26} c={GREEN} />
      <Txt x={170} y={yl + 46} size={9} fill={GREEN} weight="700">
        from 500 BC to AD 2026: 500 + 2026 − 1 = 2525 years
      </Txt>
      {['3 BC', '2 BC', '1 BC', 'AD 1', 'AD 2', 'AD 3'].map((t, i) => (
        <G key={t}>
          <Rect x={41 + i * 43} y={124} width={43} height={20} fill={i < 3 ? ROSE : PALE} stroke={O} strokeWidth={1} />
          <Txt x={62.5 + i * 43} y={137.5} size={8.5} weight="700">
            {t}
          </Txt>
        </G>
      ))}
      <Txt x={170} y={160} size={8.5} fill={MUTED}>
        no year 0: 1 BC is followed by AD 1
      </Txt>
    </G>
  );
}

// ---------- the 24-hour clock ----------
function ClockArt() {
  const cx = 150;
  const cy = 112;
  const p = (r, deg) => [cx + r * Math.sin(rad(deg)), cy - r * Math.cos(rad(deg))];
  const hand = (r, deg, w, c) => {
    const [x, y] = p(r, deg);
    return <Line x1={cx} y1={cy} x2={x} y2={y} stroke={c} strokeWidth={w} strokeLinecap="round" />;
  };
  return (
    <G>
      <Circle cx={cx} cy={cy} r={99} fill="#ffffff" stroke={O} strokeWidth={2.2} />
      <Circle cx={cx} cy={cy} r={72} fill={PALE} stroke="none" />
      {range(60, (i) => {
        const [x1, y1] = p(95, i * 6);
        const [x2, y2] = p(i % 5 ? 91 : 87, i * 6);
        return <Line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke={O} strokeWidth={i % 5 ? 0.8 : 1.6} />;
      })}
      {range(12, (i) => {
        const h = i + 1;
        const [x, y] = p(58, h * 30);
        const [ox, oy] = p(80, h * 30);
        return (
          <G key={h}>
            <Txt x={x} y={y + 4.5} size={13} weight="700">
              {`${h}`}
            </Txt>
            <Txt x={ox} y={oy + 3} size={8.5} weight="700" fill={BLUE}>
              {h === 12 ? '00' : `${h + 12}`}
            </Txt>
          </G>
        );
      })}
      {hand(42, 7.5 * 30, 4.2, O)}
      {hand(50, 180, 2.6, RED)}
      <Circle cx={cx} cy={cy} r={4} fill={O} />
    </G>
  );
}

// ---------- the thermometer ----------
function ThermometerArt() {
  const Y = (t) => 196 - (t + 10) * 3.4;
  const tx = 148;
  const right = [
    [37, 30, '37 °C: body temperature'],
    [9, 116, '9 °C'],
    [0, 150, '0 °C: water freezes'],
    [-2, 172, '−2 °C is warmer'],
    [-9, 194, '−9 °C is colder'],
  ];
  return (
    <G>
      <Rect x={tx - 8} y={Y(44)} width={16} height={Y(-10) - Y(44) + 8} rx={8} fill="#ffffff" stroke={O} strokeWidth={1.4} />
      <Rect x={tx - 3.5} y={Y(9)} width={7} height={Y(-10) - Y(9) + 14} fill={RED} />
      <Circle cx={tx} cy={Y(-10) + 18} r={13} fill={RED} stroke={O} strokeWidth={1.4} />
      {range(26, (i) => {
        const t = -10 + i * 2;
        const big = t % 10 === 0;
        return <Line key={t} x1={tx - 8 - (big ? 12 : 6)} y1={Y(t)} x2={tx - 8} y2={Y(t)} stroke={O} strokeWidth={big ? 1.4 : 0.9} />;
      })}
      {[-10, 0, 10, 20, 30, 40].map((t) => (
        <Txt key={t} x={tx - 24} y={Y(t) + 3.5} size={9} anchor="end" weight={t === 0 ? '700' : '500'}>
          {t < 0 ? `−${-t}` : `${t}`}
        </Txt>
      ))}
      <Txt x={tx - 24} y={Y(44) - 2} size={8.5} anchor="end" fill={MUTED}>
        °C
      </Txt>
      {right.map(([t, ty, s]) => (
        <G key={s}>
          <Line x1={tx + 9} y1={Y(t)} x2={tx + 26} y2={ty} stroke={MUTED} strokeWidth={0.8} />
          <Circle cx={tx + 9} cy={Y(t)} r={1.8} fill={O} />
          <Txt x={tx + 30} y={ty + 3} size={8.6} anchor="start" weight={t === 9 ? '700' : '500'}>
            {s}
          </Txt>
        </G>
      ))}
      <Arrow x1={66} y1={Y(-4)} x2={66} y2={Y(9)} c={GREEN} w={1.8} />
      <Txt x={60} y={Y(-4) + 3} size={8.5} anchor="end">
        −4 °C
      </Txt>
      <Txt x={60} y={Y(9) + 3} size={8.5} anchor="end">
        9 °C
      </Txt>
      <Txt x={60} y={(Y(9) + Y(-4)) / 2 + 3} size={9} anchor="end" weight="700" fill={GREEN}>
        rise 13°
      </Txt>
    </G>
  );
}

// ---------- the protractor ----------
function ProtractorArt() {
  const cx = 160;
  const cy = 168;
  const R = 132;
  const a = 50;
  const [ax, ay] = at(cx, cy, R + 24, a);
  const [lx, ly] = at(cx, cy, R + 34, a);
  return (
    <G>
      <Path d={`M${cx - R} ${cy} A${R} ${R} 0 0 1 ${cx + R} ${cy} Z`} fill="#eef6fb" stroke={O} strokeWidth={1.4} />
      <Path d={`M${cx - 26} ${cy} A26 26 0 0 1 ${cx + 26} ${cy}`} fill="none" stroke={MUTED} strokeWidth={1} />
      {range(37, (i) => {
        const d = i * 5;
        const [x1, y1] = at(cx, cy, R, d);
        const [x2, y2] = at(cx, cy, R - (d % 10 ? 5 : 9), d);
        return <Line key={d} x1={x1} y1={y1} x2={x2} y2={y2} stroke={O} strokeWidth={d % 10 ? 0.7 : 1.1} />;
      })}
      <Line x1={cx - R - 8} y1={cy} x2={cx + R + 22} y2={cy} stroke={O} strokeWidth={2} />
      <Line x1={cx} y1={cy} x2={ax} y2={ay} stroke={O} strokeWidth={2} />
      {range(19, (i) => {
        const d = i * 10;
        const lift = d === 0 || d === 180 ? -7 : 0;
        const [ox, oy] = at(cx, cy, R - 17, d);
        const [ix, iy] = at(cx, cy, R - 31, d);
        const hit = d === a;
        return (
          <G key={d}>
            <Txt x={ox} y={oy + 2.5 + lift} size={7} fill={hit ? MUTED : O}>
              {`${180 - d}`}
            </Txt>
            {hit && <Circle cx={ix} cy={iy} r={7.5} fill="#ffffff" stroke={RED} strokeWidth={1} />}
            <Txt x={ix} y={iy + (hit ? 3 : 2.5) + lift} size={hit ? 8.5 : 7} weight={hit ? '700' : '500'} fill={hit ? RED : BLUE}>
              {`${d}`}
            </Txt>
          </G>
        );
      })}
      <Arc cx={cx} cy={cy} r={40} a1={0} a2={a} c={RED} w={1.8} />
      <Dot p={[cx, cy]} r={3} />
      <Txt x={cx} y={cy + 15} size={11} weight="700">
        B
      </Txt>
      <Txt x={cx + R + 28} y={cy + 4} size={11} weight="700">
        C
      </Txt>
      <Txt x={lx} y={ly + 4} size={11} weight="700">
        A
      </Txt>
      <Txt x={cx + 52} y={cy - 12} size={9.5} weight="700" fill={RED}>
        50°
      </Txt>
    </G>
  );
}

// ---------- angle facts ----------
function AngleFactsArt() {
  const A = [62, 88];
  const B = [178, 76];
  const C = [292, 76];
  const ray = (c, r, d) => {
    const [x, y] = at(c[0], c[1], r, d);
    return <Line key={d} x1={c[0]} y1={c[1]} x2={x} y2={y} stroke={O} strokeWidth={1.6} />;
  };
  const lab = (c, r, d, t, col) => {
    const [x, y] = at(c[0], c[1], r, d);
    return (
      <Txt x={x} y={y + 3} size={8.5} weight="700" fill={col}>
        {t}
      </Txt>
    );
  };
  const caption = (x, a, b) => (
    <G>
      <Txt x={x} y={140} size={8.5} weight="700">
        {a}
      </Txt>
      <Txt x={x} y={153} size={8.5}>
        {b}
      </Txt>
    </G>
  );
  return (
    <G>
      <Line x1={A[0] - 52} y1={A[1]} x2={A[0] + 52} y2={A[1]} stroke={O} strokeWidth={1.6} />
      {ray(A, 50, 50)}
      <Arc cx={A[0]} cy={A[1]} r={16} a1={0} a2={50} c={BLUE} w={1.5} />
      <Arc cx={A[0]} cy={A[1]} r={12} a1={50} a2={180} c={RED} w={1.5} />
      {lab(A, 29, 22, '50°', BLUE)}
      {lab(A, 27, 118, '130°', RED)}
      {[90, 210, 305].map((d) => ray(B, 46, d))}
      <Arc cx={B[0]} cy={B[1]} r={12} a1={90} a2={210} c={BLUE} w={1.4} />
      <Arc cx={B[0]} cy={B[1]} r={14} a1={210} a2={305} c={GREEN} w={1.4} />
      <Arc cx={B[0]} cy={B[1]} r={10} a1={305} a2={450} c={RED} w={1.4} />
      {lab(B, 28, 150, '120°', BLUE)}
      {lab(B, 29, 257, '95°', GREEN)}
      {lab(B, 28, 17, '145°', RED)}
      {[35, 105, 215, 285].map((d) => ray(C, 46, d))}
      <Arc cx={C[0]} cy={C[1]} r={13} a1={35} a2={105} c={BLUE} w={1.5} />
      <Arc cx={C[0]} cy={C[1]} r={13} a1={215} a2={285} c={BLUE} w={1.5} />
      {lab(C, 27, 70, '70°', BLUE)}
      {lab(C, 27, 250, '70°', BLUE)}
      {lab(C, 28, 160, '110°', MUTED)}
      {lab(C, 28, 340, '110°', MUTED)}
      {caption(A[0], 'on a straight line', '130° + 50° = 180°')}
      {caption(B[0], 'at a point', '120° + 95° + 145° = 360°')}
      {caption(C[0], 'vertically opposite', '70° = 70°, 110° = 110°')}
    </G>
  );
}

// ---------- bisecting an angle ----------
const BIS = (() => {
  const B = [40, 172];
  const half = 92 * Math.sin(rad(25));
  const BR = 92 * Math.cos(rad(25)) + Math.sqrt(72 * 72 - half * half);
  return { B, A: at(40, 172, 205, 50), C: [292, 172], P: at(40, 172, 92, 50), Q: at(40, 172, 92, 0), R: at(40, 172, BR, 25), end: at(40, 172, 240, 25) };
})();
function AngleBisectorArt() {
  const { A, B, C, P, Q, R, end } = BIS;
  const aP = dir(P, R);
  const aQ = dir(Q, R);
  const name = (p, dx, dy, t) => (
    <Txt x={p[0] + dx} y={p[1] + dy} size={11} weight="700">
      {t}
    </Txt>
  );
  return (
    <G>
      <Seg p={B} q={A} w={1.8} />
      <Seg p={B} q={C} w={1.8} />
      <Arc cx={B[0]} cy={B[1]} r={92} a1={-6} a2={56} c={AMBER} w={1.3} />
      <Arc cx={P[0]} cy={P[1]} r={72} a1={aP - 14} a2={aP + 14} c={AMBER} w={1.3} />
      <Arc cx={Q[0]} cy={Q[1]} r={72} a1={aQ - 14} a2={aQ + 14} c={AMBER} w={1.3} />
      <Seg p={B} q={end} c={BLUE} w={1.8} />
      <Arc cx={B[0]} cy={B[1]} r={30} a1={0} a2={25} c={RED} w={1.4} />
      <Arc cx={B[0]} cy={B[1]} r={30} a1={25} a2={50} c={RED} w={1.4} />
      {[12.5, 37.5].map((d) => {
        const [x1, y1] = at(B[0], B[1], 26, d);
        const [x2, y2] = at(B[0], B[1], 34, d);
        return <Line key={d} x1={x1} y1={y1} x2={x2} y2={y2} stroke={RED} strokeWidth={1.3} />;
      })}
      {[P, Q, R, B].map((p, i) => (
        <Dot key={i} p={p} />
      ))}
      {name(B, -8, 12, 'B')}
      {name(A, 4, -4, 'A')}
      {name(C, 9, 4, 'C')}
      {name(P, -11, -2, 'P')}
      {name(Q, 2, 15, 'Q')}
      {name(R, 2, -9, 'R')}
      <Txt x={end[0] - 4} y={end[1] - 8} size={9} weight="700" fill={BLUE}>
        bisector [BR)
      </Txt>
    </G>
  );
}

// ---------- dot patterns ----------
function DotPatternsArt() {
  const s = 11;
  const grid = (cols, rows) => range(cols * rows, (k) => [k % cols, Math.floor(k / cols)]);
  const triangle = [
    [1.5, 0],
    [1, 1],
    [2, 1],
    [0.5, 2],
    [1.5, 2],
    [2.5, 2],
    [0, 3],
    [1, 3],
    [2, 3],
    [3, 3],
  ];
  const groups = [
    [10, grid(4, 2), BLUE, '8 is even', 'two equal rows'],
    [74, [...grid(3, 2), [3, 0]], RED, '7 is odd', 'one dot over'],
    [138, grid(4, 4), GREEN, '16 = 4 × 4', 'a square number'],
    [206, triangle, AMBER, '10 = 1 + 2 + 3 + 4', 'triangular'],
    [272, grid(4, 3), PURPLE, '12 = 3 × 4', 'a rectangle'],
  ];
  return (
    <G>
      {groups.map(([x, pts, c, t1, t2]) => (
        <G key={t1}>
          {pts.map(([i, j], k) => (
            <Circle key={k} cx={x + 8 + i * s} cy={36 + j * s} r={3.6} fill={c} />
          ))}
          <Txt x={x + 25} y={104} size={8.2} weight="700">
            {t1}
          </Txt>
          <Txt x={x + 25} y={116} size={8} fill={MUTED}>
            {t2}
          </Txt>
        </G>
      ))}
    </G>
  );
}

// ---------- tests of divisibility ----------
function DivisibilityArt() {
  const rows = [
    ['2', 'last digit 6 is even', true],
    ['3', '7 + 2 + 3 + 6 = 18', true],
    ['4', 'last two digits: 36 = 4 × 9', true],
    ['5', 'last digit is not 0 or 5', false],
    ['6', 'divisible by 2 and by 3', true],
    ['10', 'last digit is not 0', false],
  ];
  const xs = [8, 70, 268, 332];
  const rh = 21;
  return (
    <G>
      <Txt x={170} y={14} size={10} weight="700">
        Is 7 236 divisible by ...
      </Txt>
      <Rect x={xs[0]} y={22} width={xs[3] - xs[0]} height={20} fill={SHADE} stroke={O} strokeWidth={1} />
      {['by', 'test', 'answer'].map((t, i) => (
        <Txt key={t} x={(xs[i] + xs[i + 1]) / 2} y={36} size={9} weight="700">
          {t}
        </Txt>
      ))}
      {rows.map(([n, test, yes], j) => {
        const y = 42 + j * rh;
        return (
          <G key={n}>
            {[0, 1, 2].map((c) => (
              <Rect key={c} x={xs[c]} y={y} width={xs[c + 1] - xs[c]} height={rh} fill={j % 2 ? '#ffffff' : PALE} stroke={O} strokeWidth={1} />
            ))}
            <Txt x={(xs[0] + xs[1]) / 2} y={y + 14.5} size={10} weight="700">
              {n}
            </Txt>
            <Txt x={xs[1] + 8} y={y + 14.5} size={9} anchor="start">
              {test}
            </Txt>
            <Txt x={(xs[2] + xs[3]) / 2} y={y + 14.5} size={9.5} weight="700" fill={yes ? GREEN : RED}>
              {yes ? 'yes' : 'no'}
            </Txt>
          </G>
        );
      })}
    </G>
  );
}

// ---------- HCF and LCM ----------
function HcfVennArt() {
  const half = Math.sqrt(64 * 64 - 40 * 40);
  const n = (x, y, t, c = O) => (
    <Txt x={x} y={y} size={14} weight="700" fill={c}>
      {t}
    </Txt>
  );
  return (
    <G>
      <Circle cx={120} cy={88} r={64} fill={SHADE} stroke="none" />
      <Circle cx={200} cy={88} r={64} fill={WARM} stroke="none" />
      <Path d={`M160 ${88 - half} A64 64 0 0 1 160 ${88 + half} A64 64 0 0 1 160 ${88 - half} Z`} fill={LEAF} stroke="none" />
      <Circle cx={120} cy={88} r={64} fill="none" stroke={BLUE} strokeWidth={1.6} />
      <Circle cx={200} cy={88} r={64} fill="none" stroke={AMBER} strokeWidth={1.6} />
      <Txt x={84} y={14} size={10.5} weight="700" fill={BLUE}>
        24 = 2 × 2 × 2 × 3
      </Txt>
      <Txt x={240} y={14} size={10.5} weight="700" fill={GOLD}>
        36 = 2 × 2 × 3 × 3
      </Txt>
      {n(92, 94, '2', BLUE)}
      {n(152, 78, '2')}
      {n(168, 78, '2')}
      {n(160, 106, '3')}
      {n(228, 94, '3', GOLD)}
      <Txt x={160} y={172} size={10} weight="700" fill={GREEN}>
        HCF = 2 × 2 × 3 = 12 (the overlap)
      </Txt>
      <Txt x={160} y={188} size={10} weight="700">
        LCM = 2 × 2 × 2 × 3 × 3 = 72 (all of them)
      </Txt>
    </G>
  );
}

// ---------- parts of a circle ----------
const CP = { cx: 120, cy: 104, r: 80 };
const cp = (a, r = CP.r) => at(CP.cx, CP.cy, r, a);
function CirclePartsArt() {
  const { cx, cy, r } = CP;
  const c1 = cp(200);
  const c2 = cp(260);
  const s1 = cp(290);
  const s2 = cp(340);
  const ext = (p, q, k) => [p[0] + (p[0] - q[0]) * k, p[1] + (p[1] - q[1]) * k];
  return (
    <G>
      <Sector cx={cx} cy={cy} r={r} a1={60} a2={108} fill={SHADE} />
      <Path d={`M${c1[0]} ${c1[1]} A${r} ${r} 0 0 0 ${c2[0]} ${c2[1]} Z`} fill={WARM} stroke="none" />
      <Circle cx={cx} cy={cy} r={r} fill="none" stroke={O} strokeWidth={1.8} />
      <Arc cx={cx} cy={cy} r={r} a1={132} a2={168} c={RED} w={3.6} />
      <Seg p={[cx - r, cy]} q={[cx + r, cy]} c={BLUE} w={1.5} />
      <Seg p={[cx, cy]} q={cp(60)} c={GREEN} w={1.6} />
      <Seg p={[cx, cy]} q={cp(108)} c={MUTED} w={1} />
      <Seg p={c1} q={c2} c={AMBER} w={1.6} />
      <Seg p={ext(s1, s2, 0.45)} q={ext(s2, s1, 0.45)} c={PURPLE} w={1.5} />
      <Dot p={s1} />
      <Dot p={s2} />
      <Dot p={[cx, cy]} r={3} />
      <Txt x={cx - 2} y={cy + 13} size={10} weight="700">
        O
      </Txt>
    </G>
  );
}

// ---------- the area of a circle ----------
function CircleAreaArt() {
  const cx = 62;
  const cy = 84;
  const r = 46;
  const w = (Math.PI * r) / 6; // the arc of one sector, laid flat
  const x0 = 140;
  const yT = 52;
  const yB = yT + r;
  return (
    <G>
      {range(12, (i) => (
        <Sector key={i} cx={cx} cy={cy} r={r} a1={i * 30} a2={(i + 1) * 30} fill={i % 2 ? WARM : SHADE} stroke={O} />
      ))}
      <Arrow x1={116} y1={84} x2={132} y2={84} />
      {range(6, (i) => {
        const a = x0 + i * w;
        return <Path key={`u${i}`} d={`M${a + w / 2} ${yT} L${a} ${yB} Q${a + w / 2} ${yB + 3} ${a + w} ${yB} Z`} fill={SHADE} stroke={O} strokeWidth={1} />;
      })}
      {range(6, (i) => {
        const a = x0 + w / 2 + i * w;
        return <Path key={`d${i}`} d={`M${a + w / 2} ${yB} L${a} ${yT} Q${a + w / 2} ${yT - 3} ${a + w} ${yT} Z`} fill={WARM} stroke={O} strokeWidth={1} />;
      })}
      <Brace x1={x0} x2={x0 + 6 * w} y={yB + 12} c={BLUE} />
      <Txt x={x0 + 3 * w} y={yB + 32} size={9.5} weight="700" fill={BLUE}>
        half the circumference = πr
      </Txt>
      <Line x1={x0 + 6.5 * w + 8} y1={yT} x2={x0 + 6.5 * w + 8} y2={yB} stroke={RED} strokeWidth={1.3} />
      <Txt x={x0 + 6.5 * w + 14} y={(yT + yB) / 2 + 4} size={11} weight="700" fill={RED} anchor="start">
        r
      </Txt>
      <Txt x={x0 + 3 * w} y={22} size={10} weight="700">
        area ≈ πr × r = πr²
      </Txt>
    </G>
  );
}

// ---------- multiplying fractions ----------
function FractionAreaArt() {
  const x0 = 26;
  const y0 = 22;
  const W = 176;
  const H = 120;
  const cw = W / 4;
  const rh = H / 3;
  return (
    <G>
      {range(12, (k) => {
        const c = k % 4;
        const r = Math.floor(k / 4);
        const inThree = c < 3;
        const both = inThree && r < 2;
        return <Rect key={k} x={x0 + c * cw} y={y0 + r * rh} width={cw} height={rh} fill={both ? '#7d9fd0' : inThree ? SHADE : '#ffffff'} stroke={O} strokeWidth={1} />;
      })}
      <Rect x={x0} y={y0} width={W} height={H} fill="none" stroke={O} strokeWidth={2} />
      <Brace x1={x0} x2={x0 + 3 * cw} y={y0 + H + 8} />
      <Txt x={x0 + 1.5 * cw} y={y0 + H + 26} size={9.5} weight="700">
        3/4 of the rectangle
      </Txt>
      <Path d={`M${x0 - 8} ${y0} L${x0 - 13} ${y0} L${x0 - 13} ${y0 + 2 * rh} L${x0 - 8} ${y0 + 2 * rh}`} fill="none" stroke={BLUE} strokeWidth={1.2} />
      <Txt x={x0 - 17} y={y0 + rh} size={9.5} weight="700" fill={BLUE} rotate={-90}>
        2/3 of it
      </Txt>
      <Txt x={268} y={58} size={11} weight="700">
        2/3 × 3/4
      </Txt>
      <Txt x={268} y={80} size={11} weight="700">
        = 6/12
      </Txt>
      <Txt x={268} y={102} size={11} weight="700" fill={BLUE}>
        = 1/2
      </Txt>
      <Txt x={268} y={124} size={8.5} fill={MUTED}>
        6 dark parts of 12
      </Txt>
    </G>
  );
}

// ---------- a hundred square ----------
function HundredSquareArt() {
  const x0 = 18;
  const y0 = 16;
  const s = 14.5;
  return (
    <G>
      {range(100, (k) => {
        const c = Math.floor(k / 10);
        const r = k % 10;
        const on = k < 37;
        return <Rect key={k} x={x0 + c * s} y={y0 + r * s} width={s} height={s} fill={on ? (c < 3 ? '#7d9fd0' : '#86b998') : '#ffffff'} stroke="#9aa7b4" strokeWidth={0.6} />;
      })}
      <Rect x={x0} y={y0} width={10 * s} height={10 * s} fill="none" stroke={O} strokeWidth={1.6} />
      <Txt x={240} y={44} size={11} weight="700">
        37 out of 100
      </Txt>
      <Txt x={240} y={66} size={11} weight="700">
        = 37/100 = 0.37
      </Txt>
      <Txt x={240} y={96} size={9.5} fill={BLUE} weight="700">
        3 tenths (3 columns)
      </Txt>
      <Txt x={240} y={114} size={9.5} fill={GREEN} weight="700">
        + 7 hundredths
      </Txt>
      <Txt x={240} y={138} size={8.5} fill={MUTED}>
        0.37 = 0.3 + 0.07
      </Txt>
    </G>
  );
}

// ---------- standard form ----------
function StandardFormArt() {
  const row = (y, digits, from, to, label, note) => {
    const x0 = 24;
    const s = 24;
    const gap = (i) => x0 + i * s;
    return (
      <G>
        {digits.map((d, i) => (
          <Txt key={i} x={x0 + i * s + s / 2} y={y} size={17} weight="700">
            {d}
          </Txt>
        ))}
        <Circle cx={gap(from)} cy={y + 2} r={2.6} fill={RED} />
        {range(to - from, (k) => {
          const a = gap(from + k);
          const b = gap(from + k + 1);
          return (
            <G key={k}>
              <Path d={`M${a} ${y - 16} Q${(a + b) / 2} ${y - 32} ${b} ${y - 16}`} fill="none" stroke={BLUE} strokeWidth={1.3} />
              <Head x={b} y={y - 16} dx={0.5} dy={1} size={5} fill={BLUE} />
              <Txt x={(a + b) / 2} y={y - 29} size={7.5} fill={BLUE} weight="700">
                {`${k + 1}`}
              </Txt>
            </G>
          );
        })}
        <Txt x={232} y={y - 4} size={11.5} weight="700">
          {label}
        </Txt>
        <Txt x={232} y={y + 12} size={8.5} fill={MUTED}>
          {note}
        </Txt>
      </G>
    );
  };
  return (
    <G>
      {row(50, ['4', '5', '0', '0', '0'], 1, 5, '45 000 = 4.5 × 10⁴', 'the point moves 4 places')}
      {row(110, ['3', '5', '2', '7'], 1, 3, '352.7 = 3.527 × 10²', 'the point moves 2 places')}
      <Txt x={170} y={146} size={9} weight="700" fill={GREEN}>
        Earth to Sun: about 150 000 000 km = 1.5 × 10⁸ km
      </Txt>
    </G>
  );
}

// ---------- the angle sum of a triangle ----------
const TS = (() => {
  const A = [24, 132];
  return { A, B: [164, 132], C: at(24, 132, (140 * Math.sin(rad(60))) / Math.sin(rad(70)), 50) };
})();
function AngleSumArt() {
  const { A, B, C } = TS;
  const P = [262, 132];
  const parts = [
    [0, 60, GREEN, '60°'],
    [60, 130, RED, '70°'],
    [130, 180, BLUE, '50°'],
  ];
  return (
    <G>
      <Polygon points={poly([A, B, C])} fill={PALE} stroke={O} strokeWidth={1.6} />
      <Sector cx={A[0]} cy={A[1]} r={24} a1={0} a2={50} fill={BLUE} />
      <Sector cx={B[0]} cy={B[1]} r={24} a1={120} a2={180} fill={GREEN} />
      <Sector cx={C[0]} cy={C[1]} r={22} a1={230} a2={300} fill={RED} />
      <Txt x={A[0] + 38} y={A[1] - 8} size={9} weight="700" fill={BLUE}>
        50°
      </Txt>
      <Txt x={B[0] - 38} y={B[1] - 8} size={9} weight="700" fill={GREEN}>
        60°
      </Txt>
      <Txt x={C[0]} y={C[1] + 36} size={9} weight="700" fill={RED}>
        70°
      </Txt>
      <Txt x={A[0] - 8} y={A[1] + 12} size={11} weight="700">
        A
      </Txt>
      <Txt x={B[0] + 8} y={B[1] + 12} size={11} weight="700">
        B
      </Txt>
      <Txt x={C[0]} y={C[1] - 7} size={11} weight="700">
        C
      </Txt>
      <Arrow x1={184} y1={92} x2={208} y2={92} />
      <Line x1={196} y1={P[1]} x2={330} y2={P[1]} stroke={O} strokeWidth={1.6} />
      {parts.map(([a1, a2, c, t]) => {
        const [x, y] = at(P[0], P[1], 34, (a1 + a2) / 2);
        return (
          <G key={t}>
            <Sector cx={P[0]} cy={P[1]} r={52} a1={a1} a2={a2} fill={c} stroke="#ffffff" />
            <Txt x={x} y={y + 3} size={9} weight="700" fill="#ffffff">
              {t}
            </Txt>
          </G>
        );
      })}
      <Txt x={P[0]} y={P[1] + 20} size={9.5} weight="700">
        50° + 60° + 70° = 180°
      </Txt>
    </G>
  );
}

// ---------- lines in a triangle ----------
const sub = (p, q) => [p[0] - q[0], p[1] - q[1]];
function foot(P, A, B) {
  const d = sub(B, A);
  const t = ((P[0] - A[0]) * d[0] + (P[1] - A[1]) * d[1]) / (d[0] * d[0] + d[1] * d[1]);
  return [A[0] + t * d[0], A[1] + t * d[1]];
}
function circumcentre(A, B, C) {
  const D = 2 * (A[0] * (B[1] - C[1]) + B[0] * (C[1] - A[1]) + C[0] * (A[1] - B[1]));
  const a = A[0] ** 2 + A[1] ** 2;
  const b = B[0] ** 2 + B[1] ** 2;
  const c = C[0] ** 2 + C[1] ** 2;
  return [(a * (B[1] - C[1]) + b * (C[1] - A[1]) + c * (A[1] - B[1])) / D, (a * (C[0] - B[0]) + b * (A[0] - C[0]) + c * (B[0] - A[0])) / D];
}
function TriangleLinesArt() {
  const tri = (x0) => [
    [x0 + 18, 134],
    [x0 + 96, 134],
    [x0 + 46, 60],
  ];
  const names = (T) =>
    ['A', 'B', 'C'].map((n, i) => (
      <Txt key={n} x={T[i][0] + [-7, 7, 0][i]} y={T[i][1] + [12, 12, -6][i]} size={10} weight="700">
        {n}
      </Txt>
    ));
  const one = tri(4);
  const two = tri(118);
  const three = tri(232);
  const O1 = circumcentre(...one);
  const H = [one[0][0] + one[1][0] + one[2][0] - 2 * O1[0], one[0][1] + one[1][1] + one[2][1] - 2 * O1[1]];
  const G2 = [(two[0][0] + two[1][0] + two[2][0]) / 3, (two[0][1] + two[1][1] + two[2][1]) / 3];
  const O3 = circumcentre(...three);
  const R3 = Math.hypot(three[0][0] - O3[0], three[0][1] - O3[1]);
  return (
    <G>
      <Polygon points={poly(one)} fill={PALE} stroke={O} strokeWidth={1.5} />
      {one.map((p, i) => {
        const f = foot(p, one[(i + 1) % 3], one[(i + 2) % 3]);
        return (
          <G key={i}>
            <Seg p={p} q={f} c={BLUE} w={1.2} dash="4 3" />
            <RightAngle x={f[0]} y={f[1]} a={dir(f, one[(i + 1) % 3])} s={5} c={BLUE} />
          </G>
        );
      })}
      <Dot p={H} c={RED} r={3} />
      <Txt x={H[0] + 9} y={H[1] + 1} size={10} weight="700" fill={RED}>
        H
      </Txt>
      {names(one)}
      <Polygon points={poly(two)} fill={PALE} stroke={O} strokeWidth={1.5} />
      {two.map((v, i) => {
        const m = mid(two[(i + 1) % 3], two[(i + 2) % 3]);
        return (
          <G key={i}>
            <Seg p={v} q={m} c={GREEN} w={1.2} />
            <Dot p={m} c={GREEN} r={2.2} />
          </G>
        );
      })}
      <Dot p={G2} c={RED} r={3} />
      <Txt x={G2[0] + 8} y={G2[1] - 5} size={10} weight="700" fill={RED}>
        G
      </Txt>
      {names(two)}
      <Circle cx={O3[0]} cy={O3[1]} r={R3} fill="none" stroke={AMBER} strokeWidth={1.2} strokeDasharray="4 3" />
      <Polygon points={poly(three)} fill={PALE} stroke={O} strokeWidth={1.5} />
      {three.map((p, i) => {
        const q = three[(i + 1) % 3];
        const m = mid(p, q);
        return (
          <G key={i}>
            <Seg p={m} q={O3} c={AMBER} w={1.2} />
            <RightAngle x={m[0]} y={m[1]} a={dir(m, q)} s={4.5} c={AMBER} />
          </G>
        );
      })}
      <Dot p={O3} c={RED} r={3} />
      <Txt x={O3[0] + 8} y={O3[1] + 4} size={10} weight="700" fill={RED}>
        O
      </Txt>
      {names(three)}
      <Txt x={61} y={172} size={8.6} weight="700" fill={BLUE}>
        heights meet at H
      </Txt>
      <Txt x={175} y={172} size={8.6} weight="700" fill={GREEN}>
        medians meet at G
      </Txt>
      <Txt x={289} y={172} size={8.6} weight="700" fill={GOLD}>
        bisectors meet at O
      </Txt>
    </G>
  );
}

// ---------- constructing a triangle from three sides ----------
const CT = (() => {
  const u = 35; // 1 cm
  const A = [52, 164];
  const x = (25 + 36 - 16) / 12; // distance of C along AB from A, in cm
  const y = Math.sqrt(25 - x * x);
  return { u, A, B: [52 + 6 * u, 164], C: [A[0] + x * u, A[1] - y * u] };
})();
function ConstructTriangleArt() {
  const { u, A, B, C } = CT;
  const aA = dir(A, C);
  const aB = dir(B, C);
  return (
    <G>
      <Polygon points={poly([A, B, C])} fill={PALE} stroke="none" />
      <Arc cx={A[0]} cy={A[1]} r={5 * u} a1={aA - 12} a2={aA + 12} c={AMBER} w={1.3} />
      <Arc cx={B[0]} cy={B[1]} r={4 * u} a1={aB - 12} a2={aB + 12} c={AMBER} w={1.3} />
      <Seg p={A} q={B} w={2} />
      <Seg p={A} q={C} c={BLUE} w={1.6} />
      <Seg p={B} q={C} c={GREEN} w={1.6} />
      {[A, B, C].map((p, i) => (
        <Dot key={i} p={p} />
      ))}
      <Txt x={A[0] - 9} y={A[1] + 5} size={11} weight="700">
        A
      </Txt>
      <Txt x={B[0] + 9} y={B[1] + 5} size={11} weight="700">
        B
      </Txt>
      <Txt x={C[0]} y={C[1] - 10} size={11} weight="700">
        C
      </Txt>
      <Txt x={(A[0] + B[0]) / 2} y={A[1] + 16} size={9.5} weight="700">
        AB = 6 cm
      </Txt>
      <Txt x={(A[0] + C[0]) / 2 - 8} y={(A[1] + C[1]) / 2 - 4} size={9.5} weight="700" fill={BLUE} anchor="end">
        AC = 5 cm
      </Txt>
      <Txt x={(B[0] + C[0]) / 2 + 8} y={(B[1] + C[1]) / 2 - 4} size={9.5} weight="700" fill={GREEN} anchor="start">
        BC = 4 cm
      </Txt>
    </G>
  );
}

// ---------- sharing in a ratio ----------
function RatioBarArt() {
  const x0 = 20;
  const s = 58;
  const y = 50;
  return (
    <G>
      <Brace x1={x0} x2={x0 + 5 * s} y={y - 8} up />
      <Txt x={x0 + 2.5 * s} y={y - 20} size={10} weight="700">
        12 000 FCFA in 5 equal shares
      </Txt>
      {range(5, (i) => (
        <G key={i}>
          <Rect x={x0 + i * s} y={y} width={s} height={34} fill={i < 2 ? SHADE : WARM} stroke={O} strokeWidth={1.2} />
          <Txt x={x0 + i * s + s / 2} y={y + 21} size={9.5} weight="700">
            2400
          </Txt>
        </G>
      ))}
      <Rect x={x0} y={y} width={5 * s} height={34} fill="none" stroke={O} strokeWidth={2} />
      <Brace x1={x0} x2={x0 + 2 * s - 2} y={y + 42} c={BLUE} />
      <Brace x1={x0 + 2 * s + 2} x2={x0 + 5 * s} y={y + 42} c={GOLD} />
      <Txt x={x0 + s} y={y + 62} size={9.5} weight="700" fill={BLUE}>
        2 shares
      </Txt>
      <Txt x={x0 + s} y={y + 76} size={9.5} weight="700" fill={BLUE}>
        4800 FCFA
      </Txt>
      <Txt x={x0 + 3.5 * s} y={y + 62} size={9.5} weight="700" fill={GOLD}>
        3 shares
      </Txt>
      <Txt x={x0 + 3.5 * s} y={y + 76} size={9.5} weight="700" fill={GOLD}>
        7200 FCFA
      </Txt>
    </G>
  );
}

// ---------- a percentage increase ----------
function PercentBarArt() {
  const x0 = 16;
  const u = 2.4; // 1% of the price
  const y = 52;
  return (
    <G>
      {range(10, (i) => (
        <Rect key={i} x={x0 + i * 10 * u} y={y} width={10 * u} height={32} fill={SHADE} stroke="#9aa7b4" strokeWidth={0.6} />
      ))}
      <Rect x={x0} y={y} width={100 * u} height={32} fill="none" stroke={O} strokeWidth={1.6} />
      <Rect x={x0 + 100 * u} y={y} width={15 * u} height={32} fill={AMBER} stroke={O} strokeWidth={1.6} />
      <Txt x={x0 + 50 * u} y={y - 10} size={9.5} weight="700" fill={BLUE}>
        100% = 20 000 FCFA
      </Txt>
      <Txt x={x0 + 107.5 * u} y={y - 22} size={9} weight="700" fill={GOLD}>
        +15%
      </Txt>
      <Txt x={x0 + 107.5 * u} y={y - 10} size={9} weight="700" fill={GOLD}>
        = 3000
      </Txt>
      <Txt x={x0 + 5 * u} y={y + 20} size={7.5} fill={MUTED}>
        10%
      </Txt>
      <Brace x1={x0} x2={x0 + 115 * u} y={y + 40} />
      <Txt x={x0 + 57.5 * u} y={y + 62} size={10} weight="700">
        115% = 23 000 FCFA
      </Txt>
      <Txt x={x0 + 57.5 * u} y={y + 78} size={9} fill={MUTED}>
        20 000 × 1.15 = 23 000
      </Txt>
    </G>
  );
}

// ---------- a table of proportionality ----------
function ProportionTableArt() {
  const xs = [8, 116, 158, 200, 242, 284];
  const row = (y, cells, fill) =>
    cells.map((t, i) => (
      <G key={`${y}${i}`}>
        <Rect x={xs[i]} y={y} width={xs[i + 1] - xs[i]} height={30} fill={i === 0 ? fill : '#ffffff'} stroke={O} strokeWidth={1} />
        <Txt x={i === 0 ? xs[0] + 6 : (xs[i] + xs[i + 1]) / 2} y={y + 19} size={i === 0 ? 9 : 11} weight="700" anchor={i === 0 ? 'start' : 'middle'}>
          {t}
        </Txt>
      </G>
    ));
  return (
    <G>
      {row(20, ['Number of books', '1', '2', '4', '10'], PALE)}
      {row(50, ['Price (FCFA)', '250', '500', '1000', '2500'], WARM)}
      <Path d={`M${xs[5] + 4} 35 Q${xs[5] + 22} 50 ${xs[5] + 4} 65`} fill="none" stroke={RED} strokeWidth={1.5} />
      <Head x={xs[5] + 4} y={65} dx={-1} dy={0.8} size={6} fill={RED} />
      <Txt x={xs[5] + 20} y={53} size={10} weight="700" fill={RED} anchor="start">
        × 250
      </Txt>
      <Txt x={160} y={102} size={9} fill={MUTED}>
        250 ÷ 1 = 500 ÷ 2 = 1000 ÷ 4 = 2500 ÷ 10 = 250
      </Txt>
    </G>
  );
}

// ---------- special quadrilaterals ----------
function QuadsArt() {
  const cells = [6, 92, 178, 264];
  const par = [
    [cells[0] + 6, 100],
    [cells[0] + 62, 100],
    [cells[0] + 80, 44],
    [cells[0] + 24, 44],
  ];
  const rect = [
    [cells[1] + 8, 44],
    [cells[1] + 78, 44],
    [cells[1] + 78, 100],
    [cells[1] + 8, 100],
  ];
  const rc = [cells[2] + 43, 72];
  const rh = [
    [rc[0] - 36, rc[1]],
    [rc[0], rc[1] - 28],
    [rc[0] + 36, rc[1]],
    [rc[0], rc[1] + 28],
  ];
  const sq = [
    [cells[3] + 15, 44],
    [cells[3] + 71, 44],
    [cells[3] + 71, 100],
    [cells[3] + 15, 100],
  ];
  const caps = [
    ['parallelogram', 'opposite sides', 'equal and parallel'],
    ['rectangle', 'four right angles,', 'equal diagonals'],
    ['rhombus', 'four equal sides,', 'diagonals at 90°'],
    ['square', 'all of these', ''],
  ];
  return (
    <G>
      <Polygon points={poly(par)} fill={PALE} stroke={O} strokeWidth={1.5} />
      <Ticks p={par[0]} q={par[1]} n={1} />
      <Ticks p={par[3]} q={par[2]} n={1} />
      <Ticks p={par[1]} q={par[2]} n={2} />
      <Ticks p={par[0]} q={par[3]} n={2} />
      <Polygon points={poly(rect)} fill={LEAF} stroke={O} strokeWidth={1.5} />
      <Seg p={rect[0]} q={rect[2]} c={GREEN} w={1.1} dash="4 3" />
      <Seg p={rect[1]} q={rect[3]} c={GREEN} w={1.1} dash="4 3" />
      {rect.map((p, i) => (
        <RightAngle key={i} x={p[0]} y={p[1]} a={[270, 180, 90, 0][i]} s={6} />
      ))}
      <Polygon points={poly(rh)} fill={WARM} stroke={O} strokeWidth={1.5} />
      <Seg p={rh[0]} q={rh[2]} c={AMBER} w={1.1} />
      <Seg p={rh[1]} q={rh[3]} c={AMBER} w={1.1} />
      <RightAngle x={rc[0]} y={rc[1]} a={0} s={6} />
      {[0, 1, 2, 3].map((i) => (
        <Ticks key={i} p={rh[i]} q={rh[(i + 1) % 4]} n={1} />
      ))}
      <Polygon points={poly(sq)} fill={ROSE} stroke={O} strokeWidth={1.5} />
      <Seg p={sq[0]} q={sq[2]} c={RED} w={1.1} />
      <Seg p={sq[1]} q={sq[3]} c={RED} w={1.1} />
      <RightAngle x={cells[3] + 43} y={72} a={-45} s={6} />
      {[0, 1, 2, 3].map((i) => (
        <Ticks key={`s${i}`} p={sq[i]} q={sq[(i + 1) % 4]} n={1} />
      ))}
      {caps.map(([a, b, c], i) => (
        <G key={a}>
          <Txt x={cells[i] + 43} y={122} size={9} weight="700">
            {a}
          </Txt>
          <Txt x={cells[i] + 43} y={135} size={8} fill={MUTED}>
            {b}
          </Txt>
          <Txt x={cells[i] + 43} y={146} size={8} fill={MUTED}>
            {c}
          </Txt>
        </G>
      ))}
    </G>
  );
}

// ---------- area formulas ----------
function AreaFormulasArt() {
  const f = (x, y, t) => (
    <Txt x={x} y={y} size={9.5} weight="700">
      {t}
    </Txt>
  );
  const small = (x, y, t, c = MUTED, anchor = 'middle') => (
    <Txt x={x} y={y} size={9} fill={c} italic anchor={anchor}>
      {t}
    </Txt>
  );
  const par = [
    [134, 80],
    [204, 80],
    [222, 34],
    [152, 34],
  ];
  const tra = [
    [246, 80],
    [330, 80],
    [306, 34],
    [262, 34],
  ];
  const kite = [
    [86, 152],
    [118, 128],
    [150, 152],
    [118, 196],
  ];
  return (
    <G>
      <Rect x={18} y={34} width={76} height={46} fill={PALE} stroke={O} strokeWidth={1.5} />
      {small(56, 94, 'l')}
      {small(100, 61, 'w', MUTED, 'start')}
      {f(56, 112, 'A = l × w')}
      <Polygon points={poly(par)} fill={LEAF} stroke={O} strokeWidth={1.5} />
      <Seg p={[176, 34]} q={[176, 80]} c={RED} w={1.1} dash="4 3" />
      <RightAngle x={176} y={80} a={0} s={6} c={RED} />
      {small(169, 94, 'b')}
      {small(181, 62, 'h', RED, 'start')}
      {f(178, 112, 'A = b × h')}
      <Polygon points={poly(tra)} fill={WARM} stroke={O} strokeWidth={1.5} />
      <Seg p={[284, 34]} q={[284, 80]} c={RED} w={1.1} dash="4 3" />
      <RightAngle x={284} y={80} a={0} s={6} c={RED} />
      {small(288, 94, 'b')}
      {small(284, 27, 'a')}
      {small(289, 62, 'h', RED, 'start')}
      {f(288, 112, 'A = ½(a + b) × h')}
      <Rect x={22} y={132} width={46} height={46} fill={ROSE} stroke={O} strokeWidth={1.5} />
      {small(45, 192, 's')}
      {f(45, 210, 'A = s²')}
      <Polygon points={poly(kite)} fill="#efe6f7" stroke={O} strokeWidth={1.5} />
      <Seg p={kite[0]} q={kite[2]} c={PURPLE} w={1.2} />
      <Seg p={kite[1]} q={kite[3]} c={PURPLE} w={1.2} />
      {small(100, 147, 'd₁', PURPLE)}
      {small(122, 180, 'd₂', PURPLE, 'start')}
      {f(176, 210, 'A = ½ × d₁ × d₂ (rhombus, kite)')}
      <Txt x={264} y={150} size={8.6} fill={MUTED}>
        h is always measured
      </Txt>
      <Txt x={264} y={163} size={8.6} fill={MUTED}>
        at right angles to the base
      </Txt>
    </G>
  );
}

// ---------- line symmetry ----------
function LineSymmetryArt() {
  const ax = 150;
  const left = [
    [64, 36],
    [124, 58],
    [102, 112],
    [76, 136],
  ];
  const right = left.map(([x, y]) => [2 * ax - x, y]);
  const M = left[2];
  const M2 = right[2];
  return (
    <G>
      <Polygon points={poly(left)} fill={SHADE} stroke={O} strokeWidth={1.5} />
      <Polygon points={poly(right)} fill={WARM} stroke={O} strokeWidth={1.5} />
      <Line x1={ax} y1={14} x2={ax} y2={168} stroke={RED} strokeWidth={1.6} strokeDasharray="10 4 2 4" />
      <Seg p={M} q={M2} c={BLUE} w={1.3} dash="4 3" />
      <RightAngle x={ax} y={M[1]} a={0} s={6} />
      <Ticks p={M} q={[ax, M[1]]} n={1} c={BLUE} />
      <Ticks p={[ax, M[1]]} q={M2} n={1} c={BLUE} />
      <Dot p={M} />
      <Dot p={M2} />
      <Txt x={M[0] - 12} y={M[1] - 6} size={11} weight="700">
        M
      </Txt>
      <Txt x={M2[0] + 12} y={M2[1] - 6} size={11} weight="700">
        M′
      </Txt>
      <Txt x={ax + 14} y={22} size={11} weight="700" fill={RED}>
        (D)
      </Txt>
    </G>
  );
}

// ---------- point symmetry ----------
function PointSymmetryArt() {
  const C0 = [150, 92];
  const tri = [
    [72, 36],
    [124, 52],
    [84, 78],
  ];
  const img = tri.map(([x, y]) => [2 * C0[0] - x, 2 * C0[1] - y]);
  const names = ['A', 'B', 'C'];
  const off = [
    [-8, -4],
    [6, -7],
    [-10, 6],
  ];
  return (
    <G>
      {tri.map((p, i) => (
        <G key={i}>
          <Seg p={p} q={img[i]} c={MUTED} w={1} dash="4 3" />
          <Ticks p={p} q={C0} n={i + 1} c={BLUE} />
          <Ticks p={C0} q={img[i]} n={i + 1} c={BLUE} />
        </G>
      ))}
      <Polygon points={poly(tri)} fill={SHADE} stroke={O} strokeWidth={1.5} />
      <Polygon points={poly(img)} fill={WARM} stroke={O} strokeWidth={1.5} />
      {tri.map((p, i) => (
        <G key={`n${i}`}>
          <Txt x={p[0] + off[i][0]} y={p[1] + off[i][1]} size={10.5} weight="700">
            {names[i]}
          </Txt>
          <Txt x={img[i][0] - off[i][0]} y={img[i][1] - off[i][1] + 6} size={10.5} weight="700">
            {`${names[i]}′`}
          </Txt>
        </G>
      ))}
      <Dot p={C0} c={RED} r={3.2} />
      <Txt x={C0[0] + 12} y={C0[1] - 4} size={11} weight="700" fill={RED}>
        O
      </Txt>
    </G>
  );
}

// ---------- solids ----------
function SolidsArt() {
  const box = (x, y, w, h, dx, dy, fill) => {
    const f = [
      [x, y],
      [x + w, y],
      [x + w, y + h],
      [x, y + h],
    ];
    const b = f.map(([a, c]) => [a + dx, c - dy]);
    return (
      <G>
        <Polygon points={poly([f[0], f[1], b[1], b[0]])} fill={fill} stroke={O} strokeWidth={1.4} />
        <Polygon points={poly([f[1], f[2], b[2], b[1]])} fill={fill} stroke={O} strokeWidth={1.4} />
        <Polygon points={poly(f)} fill="#ffffff" fillOpacity={0.55} stroke={O} strokeWidth={1.4} />
        <Seg p={f[3]} q={b[3]} c={MUTED} w={1} dash="3 3" />
        <Seg p={b[3]} q={b[0]} c={MUTED} w={1} dash="3 3" />
        <Seg p={b[3]} q={b[2]} c={MUTED} w={1} dash="3 3" />
      </G>
    );
  };
  const ap = [292, 26];
  const bc = [292, 112];
  const L = [bc[0] - 34, bc[1]];
  const R = [bc[0] + 34, bc[1]];
  return (
    <G>
      {box(18, 52, 56, 56, 22, 18, SHADE)}
      {box(122, 62, 92, 46, 26, 20, LEAF)}
      <Path d={`M${ap[0]} ${ap[1]} L${L[0]} ${L[1]} A34 9 0 0 0 ${R[0]} ${R[1]} Z`} fill={WARM} stroke={O} strokeWidth={1.4} />
      <Path d={`M${L[0]} ${L[1]} A34 9 0 0 1 ${R[0]} ${R[1]}`} fill="none" stroke={MUTED} strokeWidth={1} strokeDasharray="3 3" />
      <Seg p={ap} q={bc} c={RED} w={1.2} dash="4 3" />
      <Seg p={bc} q={R} c={MUTED} w={1} dash="3 3" />
      <RightAngle x={bc[0]} y={bc[1]} a={0} s={6} c={RED} />
      <Txt x={bc[0] - 6} y={72} size={10} weight="700" fill={RED} italic>
        h
      </Txt>
      <Txt x={bc[0] + 25} y={66} size={10} weight="700" fill={BLUE} italic>
        l
      </Txt>
      <Txt x={ap[0]} y={ap[1] - 6} size={8.5} fill={MUTED}>
        apex
      </Txt>
      {[
        [57, 'cube', '6 squares, 12 edges,', '8 vertices'],
        [181, 'cuboid', '6 rectangles, 12 edges,', '8 vertices'],
        [292, 'cone', 'circular base,', 'one apex'],
      ].map(([x, a, b, c]) => (
        <G key={a}>
          <Txt x={x} y={140} size={9.5} weight="700">
            {a}
          </Txt>
          <Txt x={x} y={153} size={8} fill={MUTED}>
            {b}
          </Txt>
          <Txt x={x} y={164} size={8} fill={MUTED}>
            {c}
          </Txt>
        </G>
      ))}
    </G>
  );
}

// ---------- counting unit cubes ----------
function VolumeCubesArt() {
  const u = 26;
  const dx = 13;
  const dy = 10;
  const x0 = 34;
  const y0 = 92;
  const F = (i, j) => [x0 + i * u, y0 + j * u]; // front face: i across, j down
  const T = (i, k) => [x0 + i * u + k * dx, y0 - k * dy]; // top face: k going back
  const S = (k, j) => [x0 + 4 * u + k * dx, y0 + j * u - k * dy]; // right face
  return (
    <G>
      <Polygon points={poly([T(0, 0), T(4, 0), T(4, 3), T(0, 3)])} fill={SHADE} stroke="none" />
      <Polygon points={poly([S(0, 0), S(3, 0), S(3, 2), S(0, 2)])} fill="#a9c4e4" stroke="none" />
      <Rect x={x0} y={y0} width={4 * u} height={2 * u} fill="#dfeaf6" stroke="none" />
      {range(5, (i) => (
        <Seg key={`fv${i}`} p={F(i, 0)} q={F(i, 2)} w={1} />
      ))}
      {range(3, (j) => (
        <Seg key={`fh${j}`} p={F(0, j)} q={F(4, j)} w={1} />
      ))}
      {range(5, (i) => (
        <Seg key={`tv${i}`} p={T(i, 0)} q={T(i, 3)} w={1} />
      ))}
      {range(4, (k) => (
        <Seg key={`th${k}`} p={T(0, k)} q={T(4, k)} w={1} />
      ))}
      {range(4, (k) => (
        <Seg key={`sv${k}`} p={S(k, 0)} q={S(k, 2)} w={1} />
      ))}
      {range(3, (j) => (
        <Seg key={`sh${j}`} p={S(0, j)} q={S(3, j)} w={1} />
      ))}
      <Txt x={x0 + 2 * u} y={y0 + 2 * u + 16} size={10} weight="700">
        4 cm
      </Txt>
      <Txt x={x0 - 6} y={y0 + u + 4} size={10} weight="700" anchor="end">
        2 cm
      </Txt>
      <Txt x={S(1.5, 2)[0] + 8} y={S(1.5, 2)[1] + 12} size={10} weight="700" anchor="start">
        3 cm
      </Txt>
      <Txt x={254} y={56} size={9.5} weight="700">
        4 × 3 = 12 cubes
      </Txt>
      <Txt x={254} y={70} size={9.5}>
        in each layer
      </Txt>
      <Txt x={254} y={92} size={9.5}>
        2 layers
      </Txt>
      <Txt x={254} y={118} size={10.5} weight="700" fill={BLUE}>
        V = 4 × 3 × 2
      </Txt>
      <Txt x={254} y={134} size={10.5} weight="700" fill={BLUE}>
        = 24 cm³
      </Txt>
    </G>
  );
}

// ---------- the net of a cylinder ----------
function CylinderNetArt() {
  const r = 25;
  const cx = 52;
  const top = 58;
  const bot = 128;
  const x1 = 140;
  const len = 2 * Math.PI * r;
  const cc = x1 + 48;
  return (
    <G>
      <Path d={`M${cx - r} ${top} L${cx - r} ${bot} A${r} 8 0 0 0 ${cx + r} ${bot} L${cx + r} ${top}`} fill={SHADE} stroke={O} strokeWidth={1.4} />
      <Path d={`M${cx - r} ${bot} A${r} 8 0 0 1 ${cx + r} ${bot}`} fill="none" stroke={MUTED} strokeWidth={1} strokeDasharray="3 3" />
      <Ellipse cx={cx} cy={top} rx={r} ry={8} fill={PALE} stroke={O} strokeWidth={1.4} />
      <Seg p={[cx, top]} q={[cx + r, top]} c={RED} w={1.2} />
      <Txt x={cx + r / 2} y={top - 11} size={9.5} weight="700" fill={RED} italic>
        r
      </Txt>
      <Seg p={[cx + r + 8, top]} q={[cx + r + 8, bot]} c={GREEN} w={1.2} />
      <Txt x={cx + r + 14} y={(top + bot) / 2 + 4} size={10} weight="700" fill={GREEN} italic anchor="start">
        h
      </Txt>
      <Arrow x1={106} y1={93} x2={130} y2={93} />
      <Rect x={x1} y={top} width={len} height={bot - top} fill={SHADE} stroke={O} strokeWidth={1.4} />
      <Circle cx={cc} cy={top - r} r={r} fill={PALE} stroke={O} strokeWidth={1.4} />
      <Circle cx={cc} cy={bot + r} r={r} fill={PALE} stroke={O} strokeWidth={1.4} />
      <Seg p={[cc, bot + r]} q={[cc + r, bot + r]} c={RED} w={1.2} />
      <Txt x={cc + r / 2} y={bot + r - 4} size={9.5} weight="700" fill={RED} italic>
        r
      </Txt>
      <Txt x={x1 + len / 2 + 24} y={(top + bot) / 2 - 2} size={10} weight="700">
        length = 2πr
      </Txt>
      <Txt x={x1 + len / 2 + 24} y={(top + bot) / 2 + 13} size={8.5} fill={MUTED}>
        (the curved surface)
      </Txt>
      <Txt x={x1 + len + 6} y={(top + bot) / 2 + 4} size={10} weight="700" fill={GREEN} italic anchor="start">
        h
      </Txt>
    </G>
  );
}

// ---------- a tally ----------
function Tally({ x, y, n }) {
  return (
    <G>
      {range(Math.ceil(n / 5), (g) => {
        const k = Math.min(5, n - g * 5);
        const gx = x + g * 34;
        return (
          <G key={g}>
            {range(Math.min(k, 4), (i) => (
              <Line key={i} x1={gx + i * 6} y1={y - 8} x2={gx + i * 6} y2={y + 8} stroke={O} strokeWidth={1.5} />
            ))}
            {k === 5 && <Line x1={gx - 4} y1={y + 6} x2={gx + 22} y2={y - 6} stroke={RED} strokeWidth={1.5} />}
          </G>
        );
      })}
    </G>
  );
}
function TallyArt() {
  const xs = [10, 104, 236, 320];
  const rows = [
    ['walk', 11],
    ['bus', 3],
    ['bike', 3],
    ['taxi', 3],
  ];
  const rh = 26;
  const yT = 32 + 4 * rh;
  return (
    <G>
      <Rect x={xs[0]} y={10} width={xs[3] - xs[0]} height={22} fill={SHADE} stroke={O} strokeWidth={1} />
      {['Transport', 'Tally', 'Frequency'].map((t, i) => (
        <Txt key={t} x={(xs[i] + xs[i + 1]) / 2} y={25} size={9.5} weight="700">
          {t}
        </Txt>
      ))}
      {rows.map(([name, n], j) => {
        const y = 32 + j * rh;
        return (
          <G key={name}>
            {[0, 1, 2].map((c) => (
              <Rect key={c} x={xs[c]} y={y} width={xs[c + 1] - xs[c]} height={rh} fill="#ffffff" stroke={O} strokeWidth={1} />
            ))}
            <Txt x={xs[0] + 10} y={y + 17} size={9.5} anchor="start">
              {name}
            </Txt>
            <Tally x={xs[1] + 14} y={y + 13} n={n} />
            <Txt x={(xs[2] + xs[3]) / 2} y={y + 17.5} size={11} weight="700">
              {`${n}`}
            </Txt>
          </G>
        );
      })}
      <Rect x={xs[0]} y={yT} width={xs[2] - xs[0]} height={rh} fill={PALE} stroke={O} strokeWidth={1} />
      <Rect x={xs[2]} y={yT} width={xs[3] - xs[2]} height={rh} fill={PALE} stroke={O} strokeWidth={1} />
      <Txt x={xs[0] + 10} y={yT + 17} size={9.5} anchor="start" weight="700">
        Total
      </Txt>
      <Txt x={(xs[2] + xs[3]) / 2} y={yT + 17.5} size={11} weight="700" fill={BLUE}>
        20
      </Txt>
    </G>
  );
}

// ---------- a pictogram ----------
function Sack({ x, y, half }) {
  const full = `M${x - 12} ${y + 13} Q${x - 15} ${y - 2} ${x - 6} ${y - 8} L${x - 4} ${y - 12} L${x + 4} ${y - 12} L${x + 6} ${y - 8} Q${x + 15} ${y - 2} ${x + 12} ${y + 13} Z`;
  const left = `M${x} ${y - 12} L${x - 4} ${y - 12} L${x - 6} ${y - 8} Q${x - 15} ${y - 2} ${x - 12} ${y + 13} L${x} ${y + 13} Z`;
  return (
    <G>
      <Path d={half ? left : full} fill="#c9a26b" stroke="#6b4a1f" strokeWidth={1.2} />
      <Line x1={x - 6} y1={y - 8} x2={half ? x : x + 6} y2={y - 8} stroke="#6b4a1f" strokeWidth={1.4} />
    </G>
  );
}
function PictogramArt() {
  const rows = [
    ['Monday', 3, 12],
    ['Tuesday', 4.5, 18],
    ['Wednesday', 1.5, 6],
  ];
  return (
    <G>
      {rows.map(([day, n, bags], j) => {
        const y = 32 + j * 38;
        return (
          <G key={day}>
            <Line x1={8} y1={y + 19} x2={332} y2={y + 19} stroke={LINE} strokeWidth={1} />
            <Txt x={10} y={y + 4} size={9.5} anchor="start" weight="700">
              {day}
            </Txt>
            {range(Math.ceil(n), (i) => (
              <Sack key={i} x={104 + i * 34} y={y} half={i + 1 > n} />
            ))}
            <Txt x={330} y={y + 4} size={9.5} anchor="end" fill={MUTED}>
              {`${bags} bags`}
            </Txt>
          </G>
        );
      })}
      <Rect x={70} y={136} width={200} height={30} rx={6} fill={PALE} stroke={O} strokeWidth={1} />
      <Txt x={84} y={155} size={9.5} anchor="start" weight="700">
        Key:
      </Txt>
      <Sack x={128} y={151} />
      <Txt x={146} y={155} size={9.5} anchor="start">
        = 4 bags of cocoa
      </Txt>
    </G>
  );
}

export const MATHS_F1 = {
  'mf1-numerals': {
    title: '1342 in Egyptian, Roman and Hindu-Arabic numerals',
    w: 345,
    h: 176,
    art: NumeralsArt,
    labels: [],
    facts: [
      'In Egyptian numerals 1342 is 1 lotus flower (1000), 3 coils of rope (300), 4 heel bones (40) and 2 strokes (2): the values of the symbols are added.',
      'In Roman numerals 1342 is MCCCXLII: M = 1000, CCC = 300, XL = 40 (10 written before 50) and II = 2.',
      'In Hindu-Arabic numerals 1342 needs only four digits: 1 thousand, 3 hundreds, 4 tens and 2 units, because each place is worth ten times the place on its right.',
    ],
  },
  'mf1-periods': {
    title: 'Reading a large number period by period',
    w: 340,
    h: 134,
    art: PeriodsArt,
    labels: [],
    facts: [
      'The digits are split into groups of three from the right. Each group is a period: units, thousands, millions, and then billions.',
      'Each period has its own hundreds, tens and units: here 27 millions, 914 thousands and 600 units.',
      '27 914 600 is read period by period: twenty-seven million, nine hundred and fourteen thousand, six hundred.',
    ],
  },
  'mf1-bases': {
    title: 'Twenty-three oranges in bags of five: 23 = 43₅',
    w: 340,
    h: 160,
    art: BasesArt,
    labels: [],
    facts: ['The 23 oranges are grouped in fives: 4 full bags of five and 3 oranges left over.', 'In base five the places are units, fives and twenty-fives, so 4 fives and 3 units are written 43₅.', 'Check: 4 × 5 + 3 = 23.'],
  },
  'mf1-perp-bisector': {
    title: 'Constructing the perpendicular bisector of [AB]',
    w: 300,
    h: 210,
    art: PerpBisectorArt,
    labels: [],
    facts: [
      'With the compasses opened to more than half of AB, arcs are drawn above and below [AB] from A, then from B with the same opening.',
      'The arcs cross at P and Q. The line (PQ) is the perpendicular bisector of [AB].',
      '(PQ) cuts [AB] at its midpoint M at right angles, so AM = MB.',
    ],
  },
  'mf1-parallel': {
    title: 'Three properties of parallel and perpendicular lines',
    w: 354,
    h: 124,
    art: ParallelArt,
    labels: [],
    points: [[62, 50], [180, 50], [298, 50]],
    facts: [
      'Two lines that are both parallel to a third line are parallel to each other.',
      'Two lines that are both perpendicular to the same line (d) are parallel to each other.',
      'A line (d) perpendicular to one of two parallel lines is perpendicular to the other one too.',
    ],
  },
  'mf1-properties': {
    title: 'Properties of addition and multiplication in ℕ',
    w: 358,
    h: 156,
    art: PropertiesArt,
    labels: [],
    facts: [
      'Commutative: the order does not matter, so 7 + 5 = 5 + 7 and 4 × 9 = 9 × 4.',
      'Associative: the grouping does not matter, so (8 + 6) + 4 = 8 + (6 + 4) and (2 × 9) × 5 = 2 × (9 × 5).',
      'Identity: adding 0 or multiplying by 1 changes nothing, so 9 + 0 = 9 and 9 × 1 = 9.',
      'Distributive: multiplication spreads over addition, so 6 × (10 + 3) = 6 × 10 + 6 × 3 = 78.',
    ],
  },
  'mf1-bodmas': {
    title: 'The order of operations (BODMAS) step by step',
    w: 340,
    h: 196,
    art: BodmasArt,
    labels: [],
    facts: [
      'Brackets come first: in 20 − (1 + 2)² × 4 ÷ 6 the bracket (1 + 2) becomes 3.',
      'Orders (powers) come next: 3² = 9.',
      'Division and multiplication are done from left to right: 9 × 4 = 36 first, then 36 ÷ 6 = 6.',
      'Addition and subtraction come last: 20 − 6 = 14.',
    ],
  },
  'mf1-bc-ad': {
    title: 'Counting years BC and AD',
    w: 340,
    h: 168,
    art: BcAdArt,
    labels: [],
    facts: [
      'Years after the year 1 are written AD and counted forwards; years before it are written BC and counted backwards, so 500 BC is earlier than 100 BC.',
      'There is no year 0: 1 BC is followed directly by AD 1.',
      'From 500 BC to AD 2026 is 500 + 2026 − 1 = 2525 years.',
    ],
  },
  'mf1-clock24': {
    title: 'The 24-hour clock: 19:30 is 7:30 p.m.',
    w: 300,
    h: 222,
    art: ClockArt,
    labels: [],
    facts: [
      'The large inner numbers are the hours of the 12-hour clock.',
      'The small outer numbers are the hours 13 to 23 of the 24-hour clock, with 00 at the top for midnight.',
      'The hands show half past seven in the evening: 7:30 p.m. is 19:30, because 7 + 12 = 19.',
    ],
  },
  'mf1-thermometer': {
    title: 'A thermometer is an upright number line',
    w: 330,
    h: 232,
    art: ThermometerArt,
    labels: [],
    facts: [
      'Water freezes at 0 °C. Readings above 0 °C are positive and readings below it are negative.',
      'A healthy body is at about 37 °C.',
      '−2 °C is higher on the scale than −9 °C, so −2 °C is warmer.',
      'A rise from −4 °C to 9 °C is 9 − (−4) = 13 degrees.',
    ],
  },
  'mf1-protractor': {
    title: 'Measuring ∠ABC = 50° with a protractor',
    w: 330,
    h: 188,
    art: ProtractorArt,
    labels: [],
    facts: [
      'The centre of the protractor is on the vertex B, and its 0° line lies along the arm [BC).',
      'Read the scale that starts at 0° on [BC): here it is the inner scale, and the arm [BA) crosses it at 50°.',
      'The outer scale reads 130° at the same place, which is 180° − 50°: that is the wrong scale for this angle.',
    ],
  },
  'mf1-angle-facts': {
    title: 'Angles on a line, at a point and vertically opposite',
    w: 350,
    h: 160,
    art: AngleFactsArt,
    labels: [],
    facts: [
      'Angles on a straight line add up to 180°: 130° + 50° = 180°.',
      'Angles at a point add up to 360°: 120° + 95° + 145° = 360°.',
      'When two lines cross, vertically opposite angles are equal: 70° and 70°, 110° and 110°.',
    ],
  },
  'mf1-angle-bisector': {
    title: 'Bisecting the angle ABC with compasses',
    w: 320,
    h: 190,
    art: AngleBisectorArt,
    labels: [],
    facts: [
      'An arc centred on B cuts the arms at P and Q, so BP = BQ.',
      'Arcs of the same radius centred on P and on Q cross at R, so PR = QR.',
      'The half-line [BR) is the bisector: it cuts ∠ABC into two equal angles.',
    ],
  },
  'mf1-dot-patterns': {
    title: 'Numbers as patterns of dots',
    w: 340,
    h: 124,
    art: DotPatternsArt,
    labels: [],
    facts: [
      'An even number such as 8 makes two equal rows; an odd number such as 7 always leaves one dot over.',
      '16 dots make a square, 4 by 4, so 16 is a square number.',
      '10 dots make a triangle of rows 1, 2, 3 and 4, so 10 is a triangular number.',
      '12 dots make a rectangle 3 by 4, so 3 and 4 are factors of 12.',
    ],
  },
  'mf1-divisibility': {
    title: 'Tests of divisibility for 7 236',
    w: 340,
    h: 172,
    art: DivisibilityArt,
    labels: [],
    facts: [
      '7 236 is divisible by 2 because its last digit, 6, is even.',
      'It is divisible by 3 because 7 + 2 + 3 + 6 = 18, and 18 is divisible by 3.',
      'It is divisible by 4 because its last two digits make 36 = 4 × 9.',
      'It is divisible by 6 because it is divisible by both 2 and 3. It is not divisible by 5 or 10, because its last digit is not 0 or 5.',
    ],
  },
  'mf1-hcf-venn': {
    title: 'HCF and LCM of 24 and 36 from their prime factors',
    w: 330,
    h: 196,
    art: HcfVennArt,
    labels: [],
    facts: [
      '24 = 2 × 2 × 2 × 3 and 36 = 2 × 2 × 3 × 3.',
      'The common prime factors 2, 2 and 3 go in the overlap: the HCF is 2 × 2 × 3 = 12.',
      'The LCM uses every factor in the diagram once: 2 × 2 × 2 × 3 × 3 = 72.',
    ],
  },
  'mf1-circle-parts': {
    title: 'The parts of a circle',
    w: 270,
    h: 196,
    art: CirclePartsArt,
    labels: [
      ['centre O', -2, 124, CP.cx - 2, CP.cy + 2],
      ['sector', 236, 24, ...cp(84, 58)],
      ['radius', 236, 50, ...cp(60, 50)],
      ['diameter', 236, 92, CP.cx + 62, CP.cy],
      ['arc', -2, 30, ...cp(150)],
      ['segment', -2, 152, ...cp(230, 72)],
      ['chord', -2, 180, ...mid(cp(200), cp(260))],
      ['secant', 236, 140, 207.2, 119.4],
    ],
    facts: ['The diameter is a chord through the centre: it is the longest chord and is twice the radius, d = 2r.'],
  },
  'mf1-circle-area': {
    title: 'Why the area of a circle is πr²',
    w: 340,
    h: 140,
    art: CircleAreaArt,
    labels: [],
    points: [[62, 84], [214, 75], [214, 18]],
    facts: [
      'The disc is cut into 12 equal sectors.',
      'Laid top to tail, the sectors make a shape close to a rectangle whose length is half the circumference, πr, and whose width is the radius r.',
      'So the area of the circle is πr × r = πr².',
    ],
  },
  'mf1-fraction-area': {
    title: '2/3 of 3/4 of a rectangle is 1/2 of it',
    w: 320,
    h: 178,
    art: FractionAreaArt,
    labels: [],
    facts: ['Three of the four columns are shaded: 3/4 of the rectangle.', 'The top two of the three rows of that part are darker: 2/3 of 3/4.', 'The dark part is 6 of the 12 small rectangles, so 2/3 × 3/4 = 6/12 = 1/2.'],
  },
  'mf1-hundred-square': {
    title: '37 hundredths of a square: 0.37',
    w: 320,
    h: 176,
    art: HundredSquareArt,
    labels: [],
    facts: ['37 of the 100 small squares are shaded, so the shaded part is 37/100 = 0.37.', 'The 3 full columns are 3 tenths and the 7 extra squares are 7 hundredths: 0.37 = 0.3 + 0.07.'],
  },
  'mf1-standard-form': {
    title: 'Writing numbers in standard form A × 10ⁿ',
    w: 340,
    h: 156,
    art: StandardFormArt,
    labels: [],
    facts: [
      'In 4.5 × 10⁴ the point stands after the first digit, and moving it 4 places to the right gives 45 000 again.',
      'In 3.527 × 10² the point moves 2 places to give 352.7.',
      'Standard form is used for very large numbers: the distance from the Earth to the Sun is about 1.5 × 10⁸ km.',
    ],
  },
  'mf1-angle-sum': {
    title: 'The angles of a triangle make a straight angle',
    w: 340,
    h: 162,
    art: AngleSumArt,
    labels: [],
    points: [[96, 100], [262, 108], [262, 152]],
    facts: [
      'Triangle ABC has angles of 50° at A, 60° at B and 70° at C.',
      'Torn off and put side by side, the three corners fill a straight angle.',
      'So the angles of a triangle add up to 180°: 50° + 60° + 70° = 180°.',
    ],
  },
  'mf1-triangle-lines': {
    title: 'Heights, medians and perpendicular bisectors of a triangle',
    w: 350,
    h: 180,
    art: TriangleLinesArt,
    labels: [],
    facts: [
      'The three heights, each from a vertex at right angles to the opposite side, meet at the orthocentre H.',
      'The three medians, each from a vertex to the midpoint of the opposite side, meet at the centroid G.',
      'The perpendicular bisectors of the three sides meet at O, the centre of the circle through A, B and C.',
    ],
  },
  'mf1-construct-triangle': {
    title: 'Constructing a triangle with sides 6 cm, 5 cm and 4 cm',
    w: 320,
    h: 182,
    art: ConstructTriangleArt,
    labels: [],
    facts: ['[AB] is drawn 6 cm long.', 'An arc of radius 5 cm is drawn from A, and an arc of radius 4 cm from B.', 'The arcs cross at C; joining [AC] and [BC] completes the triangle.'],
  },
  'mf1-ratio-bar': {
    title: 'Sharing 12 000 FCFA in the ratio 2 : 3',
    w: 330,
    h: 136,
    art: RatioBarArt,
    labels: [],
    facts: [
      'The ratio 2 : 3 has 2 + 3 = 5 shares, so one share is 12 000 ÷ 5 = 2400 FCFA.',
      'The first person gets 2 shares: 2 × 2400 = 4800 FCFA.',
      'The second person gets 3 shares: 3 × 2400 = 7200 FCFA, and 4800 + 7200 = 12 000.',
    ],
  },
  'mf1-percent-bar': {
    title: 'A price of 20 000 FCFA rising by 15%',
    w: 330,
    h: 140,
    art: PercentBarArt,
    labels: [],
    facts: [
      'The original price, 20 000 FCFA, is 100%; each tenth of the bar is 10% = 2000 FCFA.',
      'The rise is 15% of the original price: 15/100 × 20 000 = 3000 FCFA.',
      'The new price is 115% of the old one: 20 000 × 1.15 = 23 000 FCFA.',
    ],
  },
  'mf1-proportion-table': {
    title: 'A table of proportionality: books at 250 FCFA each',
    w: 350,
    h: 112,
    art: ProportionTableArt,
    labels: [],
    facts: [
      'Each number in the second row is the number above it multiplied by 250, the coefficient of proportionality.',
      'Dividing each price by the number of books always gives 250, the price of one book, so the table is proportional.',
    ],
  },
  'mf1-quads': {
    title: 'The parallelogram and the special parallelograms',
    w: 350,
    h: 152,
    art: QuadsArt,
    labels: [],
    facts: [
      'In a parallelogram the opposite sides are parallel and equal.',
      'A rectangle has four right angles and equal diagonals.',
      'A rhombus has four equal sides, and its diagonals cross at right angles.',
      'A square is both a rectangle and a rhombus: equal sides, right angles, and equal diagonals that cross at right angles.',
    ],
  },
  'mf1-area-formulas': {
    title: 'Area formulas for quadrilaterals',
    w: 345,
    h: 216,
    art: AreaFormulasArt,
    labels: [],
    facts: [
      'Rectangle: A = l × w. Square: A = s².',
      'Parallelogram: A = b × h, where the height h is at right angles to the base, not along the slanting side.',
      'Trapezium: A = ½(a + b) × h, where a and b are the parallel sides.',
      'Rhombus and kite: A = ½ × d₁ × d₂, half the product of the diagonals.',
    ],
  },
  'mf1-line-symmetry': {
    title: 'Line symmetry with axis (D)',
    w: 300,
    h: 176,
    art: LineSymmetryArt,
    labels: [],
    facts: [
      'The image of the point M is the point M′ on the other side of the axis (D).',
      '[MM′] is perpendicular to (D), and M and M′ are the same distance from (D): (D) is the perpendicular bisector of [MM′].',
      'The shape and its image are the same size and shape, as if folded along (D).',
    ],
  },
  'mf1-point-symmetry': {
    title: 'Point symmetry with centre O',
    w: 300,
    h: 176,
    art: PointSymmetryArt,
    labels: [],
    points: [[96, 56], [150, 92], [204, 128]],
    facts: [
      'Each point A, B, C is joined through O to its image A′, B′, C′.',
      'O is the midpoint of [AA′], [BB′] and [CC′]: the equal marks show OA = OA′, OB = OB′ and OC = OC′.',
      'Point symmetry is a half turn, 180°, about O.',
    ],
  },
  'mf1-solids': {
    title: 'A cube, a cuboid and a cone',
    w: 340,
    h: 170,
    art: SolidsArt,
    labels: [],
    facts: [
      'A cube has 6 equal square faces, 12 edges and 8 vertices; hidden edges are drawn dashed.',
      'A cuboid has 6 rectangular faces in 3 equal pairs, 12 edges and 8 vertices; opposite faces are equal and parallel.',
      'A cone has a circular base, a curved surface and one apex; h is its height and l its slant height.',
    ],
  },
  'mf1-volume-cubes': {
    title: 'A cuboid 4 cm by 3 cm by 2 cm holds 24 unit cubes',
    w: 310,
    h: 160,
    art: VolumeCubesArt,
    labels: [],
    facts: ['Each layer has 4 × 3 = 12 centimetre cubes.', 'There are 2 layers, so the volume is 4 × 3 × 2 = 24 cm³.'],
  },
  'mf1-cylinder-net': {
    title: 'A cylinder and its net',
    w: 340,
    h: 186,
    art: CylinderNetArt,
    labels: [],
    points: [[214, 93], [242, 91], [52, 93]],
    facts: [
      'The net of a cylinder is a rectangle and two circles of radius r.',
      'The rectangle wraps round to make the curved surface: its length is the circumference of a base, 2πr, and its width is the height h.',
      'So the curved surface area is 2πrh.',
    ],
  },
  'mf1-tally': {
    title: 'A tally and frequency table: how 20 pupils travel',
    w: 330,
    h: 166,
    art: TallyArt,
    labels: [],
    points: [[164, 45], [278, 90], [278, 149]],
    facts: [
      'One stroke is made for each answer, and every fifth stroke is drawn across the four before it to make a gate of five.',
      'Counting the strokes gives the frequencies: walk 11, bus 3, bike 3 and taxi 3.',
      'The frequencies add up to 20, the number of pupils asked.',
    ],
  },
  'mf1-pictogram': {
    title: 'A pictogram of cocoa sold by a cooperative',
    w: 340,
    h: 172,
    art: PictogramArt,
    labels: [],
    facts: [
      'The key says that one sack stands for 4 bags of cocoa.',
      'Monday has 3 sacks, so 12 bags were sold; Wednesday has 1½ sacks, so 6 bags.',
      'Tuesday has 4½ sacks: half a sack stands for 2 bags, so 18 bags were sold.',
    ],
  },
};
