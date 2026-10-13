// Mathematics figures for Form 4: the sets of numbers, base conversion,
// compound interest, a three-set Venn diagram, a feasible region, the straight
// line, simultaneous equations, completing the square, the discriminant,
// a parabola, direct and inverse variation, the circle and its theorems,
// vectors, transformations, enlargement, loci, elevation and bearings, the
// sine and cosine rules, trigonometric graphs, solids, an ogive, latitude and
// a network. Graphs and coordinates are drawn to scale.
import { Circle, G, Line, Path, Polygon, Rect } from 'react-native-svg';
import { Head, Txt } from './Diagram';
import { columnsSpec, flowSpec } from './charts';

const O = '#33414d';
const GRID = '#e3e8ee';
const MUTED = '#6b7a88';
const BLUE = '#3f6fb5';
const RED = '#c8463d';
const GREEN = '#2f7d4f';
const AMBER = '#d4a72c';
const range = (n, f) => Array.from({ length: n }, (_, i) => f(i));
const rad = (d) => (d * Math.PI) / 180;
// The point at angle a (degrees, anticlockwise from east) and distance r from (cx, cy).
const at = (cx, cy, r, a) => [cx + r * Math.cos(rad(a)), cy - r * Math.sin(rad(a))];
const poly = (pts) => pts.map((p) => p.join(',')).join(' ');
const minus = (v) => (v < 0 ? `−${-v}` : `${v}`);

function Arrow({ x1, y1, x2, y2, c = O, w = 1.4, size = 6 }) {
  return (
    <G>
      <Line x1={x1} y1={y1} x2={x2} y2={y2} stroke={c} strokeWidth={w} />
      <Head x={x2} y={y2} dx={x2 - x1} dy={y2 - y1} size={size} fill={c} />
    </G>
  );
}

// An angle mark at (cx, cy) turning anticlockwise from direction a1 to a2.
function Arc({ cx, cy, r, a1, a2, c = O, w = 1.2, dash }) {
  const [x1, y1] = at(cx, cy, r, a1);
  const [x2, y2] = at(cx, cy, r, a2);
  return <Path d={`M${x1} ${y1} A${r} ${r} 0 ${a2 - a1 > 180 ? 1 : 0} 0 ${x2} ${y2}`} fill="none" stroke={c} strokeWidth={w} strokeDasharray={dash} />;
}

// A right-angle mark at (x, y) between directions a and a + 90.
function RightAngle({ x, y, a, s = 8 }) {
  const [x1, y1] = at(x, y, s, a);
  const [x3, y3] = at(x, y, s, a + 90);
  return <Path d={`M${x1} ${y1} L${x1 + x3 - x} ${y1 + y3 - y} L${x3} ${y3}`} fill="none" stroke={O} strokeWidth={1} />;
}

// A grid with x and y axes; whole-number ticks from x0 to x1 and y0 to y1.
function Axes({ ox, oy, ux, uy, x0, x1, y0, y1, labels = true }) {
  const X = (x) => ox + x * ux;
  const Y = (y) => oy - y * uy;
  return (
    <G>
      {range(x1 - x0 + 1, (i) => (
        <Line key={`gx${i}`} x1={X(x0 + i)} y1={Y(y0)} x2={X(x0 + i)} y2={Y(y1)} stroke={GRID} strokeWidth={1} />
      ))}
      {range(y1 - y0 + 1, (i) => (
        <Line key={`gy${i}`} x1={X(x0)} y1={Y(y0 + i)} x2={X(x1)} y2={Y(y0 + i)} stroke={GRID} strokeWidth={1} />
      ))}
      <Arrow x1={X(x0) - 4} y1={oy} x2={X(x1) + 10} y2={oy} w={1.2} />
      <Arrow x1={ox} y1={Y(y0) + 4} x2={ox} y2={Y(y1) - 10} w={1.2} />
      <Txt x={X(x1) + 14} y={oy + 4} size={9} italic>
        x
      </Txt>
      <Txt x={ox - 9} y={Y(y1) - 6} size={9} italic>
        y
      </Txt>
      {labels &&
        range(x1 - x0 + 1, (i) =>
          x0 + i === 0 ? null : (
            <Txt key={`lx${i}`} x={X(x0 + i)} y={oy + 11} size={7.5} fill={MUTED}>
              {minus(x0 + i)}
            </Txt>
          )
        )}
      {labels &&
        range(y1 - y0 + 1, (i) =>
          y0 + i === 0 ? null : (
            <Txt key={`ly${i}`} x={ox - 5} y={Y(y0 + i) + 3} size={7.5} anchor="end" fill={MUTED}>
              {minus(y0 + i)}
            </Txt>
          )
        )}
      <Txt x={ox - 5} y={oy + 11} size={7.5} anchor="end" fill={MUTED}>
        0
      </Txt>
    </G>
  );
}

// ---------- the sets of numbers ----------
function NumberSetsArt() {
  const box = (x, y, w, h, fill) => <Rect x={x} y={y} width={w} height={h} rx={10} fill={fill} stroke={O} strokeWidth={1.2} />;
  const t = (x, y, s, size = 10, weight = '500') => (
    <Txt x={x} y={y} size={size} weight={weight}>
      {s}
    </Txt>
  );
  return (
    <G>
      {box(8, 22, 314, 160, '#eef3fa')}
      {box(18, 46, 200, 128, '#e3f0da')}
      {box(28, 72, 130, 94, '#fbefd0')}
      {box(38, 98, 70, 60, '#f8e3df')}
      <Txt x={16} y={38} size={10} anchor="start" weight="700">
        ℝ real numbers
      </Txt>
      <Txt x={26} y={62} size={10} anchor="start" weight="700">
        ℚ rational
      </Txt>
      <Txt x={36} y={88} size={10} anchor="start" weight="700">
        ℤ integers
      </Txt>
      <Txt x={46} y={114} size={10} anchor="start" weight="700">
        ℕ natural
      </Txt>
      {t(73, 134, '0, 1, 2,')}
      {t(73, 149, '3, 47, …')}
      {t(133, 122, '−1')}
      {t(133, 144, '−7')}
      {t(188, 94, '3/4')}
      {t(188, 116, '0.25')}
      {t(188, 138, '−2/5')}
      {t(188, 160, '1/3')}
      {t(270, 64, 'irrational', 10, '700')}
      {t(248, 98, '√2', 11)}
      {t(292, 98, 'π', 11)}
      {t(248, 132, '√5', 11)}
      {t(292, 132, '−√3', 11)}
      {t(270, 164, '0.101001…', 9)}
    </G>
  );
}

// ---------- changing 45 to base two ----------
function BaseArt() {
  const q = [45, 22, 11, 5, 2, 1, 0];
  const r = [null, 1, 0, 1, 1, 0, 1];
  const y = (i) => 30 + i * 22;
  return (
    <G>
      {q.map((n, i) => (
        <G key={i}>
          {i < 6 && (
            <Txt x={52} y={y(i)} size={12} weight="700">
              2
            </Txt>
          )}
          {i < 6 && <Line x1={62} y1={y(i) - 14} x2={62} y2={y(i) + 6} stroke={O} strokeWidth={1.2} />}
          {i < 6 && <Line x1={62} y1={y(i) + 6} x2={120} y2={y(i) + 6} stroke={O} strokeWidth={1.2} />}
          <Txt x={92} y={y(i)} size={12}>
            {`${n}`}
          </Txt>
          {r[i] != null && (
            <Txt x={148} y={y(i)} size={10} fill={MUTED}>
              r
            </Txt>
          )}
          {r[i] != null && (
            <Txt x={166} y={y(i)} size={13} weight="700" fill={RED}>
              {`${r[i]}`}
            </Txt>
          )}
        </G>
      ))}
      <Arrow x1={192} y1={y(6) + 2} x2={192} y2={y(1) - 12} c={RED} />
      <Txt x={204} y={y(3) - 8} size={9.5} anchor="start" fill={RED}>
        read the
      </Txt>
      <Txt x={204} y={y(3) + 5} size={9.5} anchor="start" fill={RED}>
        remainders
      </Txt>
      <Txt x={204} y={y(3) + 18} size={9.5} anchor="start" fill={RED}>
        upwards
      </Txt>
      <Txt x={150} y={190} size={12} weight="700">
        45 = 101101₂
      </Txt>
    </G>
  );
}

// ---------- compound and simple interest ----------
function CompoundArt() {
  const comp = [100000, 110000, 121000, 133100, 146410, 161051];
  const simp = [100000, 110000, 120000, 130000, 140000, 150000];
  const base = 170;
  const k = 150 / 180000;
  const gx = (i) => 56 + i * 46;
  return (
    <G>
      {[0, 50, 100, 150].map((v) => (
        <G key={v}>
          <Line x1={46} y1={base - v * 1000 * k} x2={322} y2={base - v * 1000 * k} stroke={GRID} strokeWidth={1} />
          <Txt x={42} y={base - v * 1000 * k + 3} size={8} anchor="end" fill={MUTED}>
            {`${v}`}
          </Txt>
        </G>
      ))}
      <Line x1={46} y1={base} x2={322} y2={base} stroke={O} strokeWidth={1.3} />
      <Line x1={46} y1={base} x2={46} y2={22} stroke={O} strokeWidth={1.3} />
      {comp.map((v, i) => (
        <G key={i}>
          <Rect x={gx(i)} y={base - v * k} width={16} height={v * k} fill={BLUE} />
          <Rect x={gx(i) + 18} y={base - simp[i] * k} width={16} height={simp[i] * k} fill={AMBER} />
          <Txt x={gx(i) + 8} y={base - v * k - 4} size={7.5} weight="700" fill={BLUE}>
            {(v / 1000).toFixed(i < 3 ? 0 : 1)}
          </Txt>
          <Txt x={gx(i) + 17} y={base + 12} size={8.5}>
            {`${i}`}
          </Txt>
        </G>
      ))}
      <Txt x={46} y={13} size={8} anchor="start" fill={MUTED}>
        thousand FCFA
      </Txt>
      <Rect x={130} y={7} width={9} height={9} fill={BLUE} />
      <Txt x={143} y={15} size={8.5} anchor="start">
        compound
      </Txt>
      <Rect x={200} y={7} width={9} height={9} fill={AMBER} />
      <Txt x={213} y={15} size={8.5} anchor="start">
        simple
      </Txt>
      <Txt x={300} y={196} size={8.5} fill={MUTED}>
        years
      </Txt>
    </G>
  );
}

// ---------- three sets ----------
function VennArt() {
  const c = (x, y, fill) => <Circle cx={x} cy={y} r={58} fill={fill} fillOpacity={0.35} stroke={O} strokeWidth={1.3} />;
  const n = (x, y, t) => (
    <Txt x={x} y={y} size={12} weight="700">
      {t}
    </Txt>
  );
  return (
    <G>
      <Rect x={10} y={10} width={280} height={200} fill="#ffffff" stroke={O} strokeWidth={1.3} />
      {c(115, 85, '#9cc0e8')}
      {c(185, 85, '#f2c46d')}
      {c(150, 145, '#a6d49a')}
      <Txt x={22} y={27} size={11} anchor="start" weight="700">
        ξ
      </Txt>
      <Txt x={92} y={23} size={9.5} weight="700">
        Biology 45
      </Txt>
      <Txt x={208} y={23} size={9.5} weight="700">
        Chemistry 40
      </Txt>
      <Txt x={252} y={180} size={9.5} weight="700">
        Physics 35
      </Txt>
      {n(85, 74, '23')}
      {n(215, 74, '20')}
      {n(150, 184, '18')}
      {n(150, 60, '10')}
      {n(110, 133, '7')}
      {n(190, 133, '5')}
      {n(150, 110, '5')}
      {n(36, 196, '12')}
    </G>
  );
}

// ---------- a feasible region ----------
function FeasibleArt() {
  const ox = 54;
  const oy = 224;
  const u = 24;
  const X = (x) => ox + x * u;
  const Y = (y) => oy - y * u;
  const dot = (x, y) => <Circle cx={X(x)} cy={Y(y)} r={3.2} fill={O} />;
  return (
    <G>
      <Axes ox={ox} oy={oy} ux={u} uy={u} x0={0} x1={9} y0={0} y1={8} />
      <Polygon points={poly([[X(0), Y(0)], [X(4), Y(0)], [X(2), Y(4)], [X(0), Y(6)]])} fill="#a6d49a" fillOpacity={0.5} />
      <Line x1={X(0)} y1={Y(6)} x2={X(6)} y2={Y(0)} stroke={BLUE} strokeWidth={1.8} />
      <Line x1={X(0)} y1={Y(8)} x2={X(4)} y2={Y(0)} stroke={RED} strokeWidth={1.8} />
      {dot(2, 4)}
      {dot(4, 0)}
      {dot(0, 6)}
      <Txt x={X(2) + 6} y={Y(4) - 6} size={8.5} anchor="start" weight="700">
        (2, 4)
      </Txt>
      <Txt x={X(4) + 5} y={Y(0) - 6} size={8.5} anchor="start" weight="700">
        (4, 0)
      </Txt>
      <Txt x={X(0) - 14} y={Y(6) - 6} size={8.5} anchor="end" weight="700">
        (0, 6)
      </Txt>
      <Txt x={X(5.4)} y={Y(1.2)} size={9} anchor="start" fill={BLUE} weight="700">
        x + y = 6
      </Txt>
      <Txt x={X(1.3)} y={Y(7.4)} size={9} anchor="start" fill={RED} weight="700">
        2x + y = 8
      </Txt>
      <Txt x={X(1.3)} y={Y(1.6)} size={16} weight="700" fill={GREEN}>
        R
      </Txt>
    </G>
  );
}

// ---------- gradient and midpoint ----------
function LineArt() {
  const ox = 40;
  const oy = 210;
  const X = (x) => ox + x * 36;
  const Y = (y) => oy - y * 18;
  return (
    <G>
      <Axes ox={ox} oy={oy} ux={36} uy={18} x0={0} x1={6} y0={0} y1={10} />
      <Line x1={X(0)} y1={Y(0)} x2={X(5.2)} y2={Y(10.4)} stroke={BLUE} strokeWidth={1.8} />
      <Line x1={X(1)} y1={Y(2)} x2={X(5)} y2={Y(2)} stroke={GREEN} strokeWidth={1.6} strokeDasharray="5 3" />
      <Line x1={X(5)} y1={Y(2)} x2={X(5)} y2={Y(10)} stroke={RED} strokeWidth={1.6} strokeDasharray="5 3" />
      {[[1, 2], [5, 10], [3, 6]].map(([x, y]) => (
        <Circle key={x} cx={X(x)} cy={Y(y)} r={3.4} fill={O} />
      ))}
      <Txt x={X(1) - 6} y={Y(2) - 4} size={9} anchor="end" weight="700">
        A(1, 2)
      </Txt>
      <Txt x={X(5) - 6} y={Y(10) - 4} size={9} anchor="end" weight="700">
        B(5, 10)
      </Txt>
      <Txt x={X(3) - 8} y={Y(6) - 4} size={9} anchor="end" weight="700">
        M(3, 6)
      </Txt>
      <Txt x={X(3)} y={Y(2) + 13} size={9} fill={GREEN} weight="700">
        run = 4
      </Txt>
      <Txt x={X(5) + 6} y={Y(6) + 3} size={9} anchor="start" fill={RED} weight="700">
        rise = 8
      </Txt>
      <Txt x={X(5) + 6} y={Y(8.4)} size={9} anchor="start" fill={BLUE} weight="700">
        y = 2x
      </Txt>
      <Txt x={150} y={236} size={9.5} weight="700">
        gradient = rise ÷ run = 8 ÷ 4 = 2
      </Txt>
    </G>
  );
}

// ---------- two lines crossing ----------
function SimultaneousArt() {
  const ox = 60;
  const oy = 180;
  const X = (x) => ox + x * 44;
  const Y = (y) => oy - y * 20;
  return (
    <G>
      <Axes ox={ox} oy={oy} ux={44} uy={20} x0={-1} x1={5} y0={-2} y1={8} />
      <Line x1={X(-0.5)} y1={Y(-2)} x2={X(4.5)} y2={Y(8)} stroke={BLUE} strokeWidth={1.8} />
      <Line x1={X(-1)} y1={Y(7.5)} x2={X(5)} y2={Y(-1.5)} stroke={RED} strokeWidth={1.8} />
      <Circle cx={X(2)} cy={Y(3)} r={4} fill={O} />
      <Txt x={X(2) + 18} y={Y(3) + 4} size={9.5} anchor="start" weight="700">
        (2, 3)
      </Txt>
      <Txt x={X(4.1)} y={Y(7.5)} size={9} anchor="end" fill={BLUE} weight="700">
        y = 2x − 1
      </Txt>
      <Txt x={X(3.1)} y={Y(-1.3)} size={9} anchor="start" fill={RED} weight="700">
        3x + 2y = 12
      </Txt>
    </G>
  );
}

// ---------- completing the square ----------
function CompleteSquareArt() {
  return (
    <G>
      <Rect x={40} y={30} width={100} height={100} fill="#cfe0f2" stroke={O} strokeWidth={1.3} />
      <Rect x={140} y={30} width={40} height={100} fill="#e3f0da" stroke={O} strokeWidth={1.3} />
      <Rect x={40} y={130} width={100} height={40} fill="#e3f0da" stroke={O} strokeWidth={1.3} />
      <Rect x={140} y={130} width={40} height={40} fill="#fbefd0" stroke={AMBER} strokeWidth={1.6} strokeDasharray="5 3" />
      <Txt x={90} y={85} size={15} weight="700">
        x²
      </Txt>
      <Txt x={160} y={85} size={12} weight="700">
        3x
      </Txt>
      <Txt x={90} y={155} size={12} weight="700">
        3x
      </Txt>
      <Txt x={160} y={155} size={13} weight="700" fill={AMBER}>
        9
      </Txt>
      <Txt x={90} y={23} size={10} italic>
        x
      </Txt>
      <Txt x={160} y={23} size={10}>
        3
      </Txt>
      <Txt x={30} y={84} size={10} italic>
        x
      </Txt>
      <Txt x={30} y={154} size={10}>
        3
      </Txt>
      <Txt x={198} y={60} size={9.5} anchor="start">
        x² + 6x is the square
      </Txt>
      <Txt x={198} y={75} size={9.5} anchor="start">
        and two 3-by-x strips.
      </Txt>
      <Txt x={198} y={98} size={9.5} anchor="start">
        Adding the corner, 9,
      </Txt>
      <Txt x={198} y={113} size={9.5} anchor="start">
        makes a square of
      </Txt>
      <Txt x={198} y={128} size={9.5} anchor="start">
        side x + 3:
      </Txt>
      <Txt x={198} y={154} size={9.5} anchor="start" weight="700">
        x² + 6x + 9 = (x + 3)²
      </Txt>
    </G>
  );
}

// ---------- the discriminant ----------
function RootsArt() {
  const panels = [
    { head: 'b² − 4ac > 0', foot: 'two different roots', top: 35, vy: 125 },
    { head: 'b² − 4ac = 0', foot: 'two equal roots', top: 35, vy: 95 },
    { head: 'b² − 4ac < 0', foot: 'no real roots', top: 30, vy: 68 },
  ];
  const ax = 95;
  return (
    <G>
      {panels.map((p, i) => {
        const cx = 60 + i * 105;
        const k = (p.vy - p.top) / 1600;
        const roots = p.vy > ax ? [-1, 1].map((s) => cx + s * Math.sqrt((p.vy - ax) / k)) : p.vy === ax ? [cx] : [];
        return (
          <G key={i}>
            <Line x1={cx - 48} y1={ax} x2={cx + 48} y2={ax} stroke={O} strokeWidth={1.2} />
            <Path d={`M${cx - 40} ${p.top} Q${cx} ${2 * p.vy - p.top} ${cx + 40} ${p.top}`} fill="none" stroke={BLUE} strokeWidth={2} />
            {roots.map((x, j) => (
              <Circle key={j} cx={x} cy={ax} r={3.6} fill={RED} />
            ))}
            <Txt x={cx} y={18} size={9.5} weight="700">
              {p.head}
            </Txt>
            <Txt x={cx} y={148} size={9}>
              {p.foot}
            </Txt>
          </G>
        );
      })}
    </G>
  );
}

// ---------- y = x² − 2x − 3 ----------
function ParabolaArt() {
  const ox = 120;
  const oy = 128;
  const X = (x) => ox + x * 36;
  const Y = (y) => oy - y * 18;
  const f = (x) => x * x - 2 * x - 3;
  const curve = range(61, (i) => -2 + i * 0.1)
    .map((x, i) => `${i ? 'L' : 'M'}${X(x).toFixed(1)} ${Y(f(x)).toFixed(1)}`)
    .join(' ');
  const dot = (x, y, c = O) => <Circle cx={X(x)} cy={Y(y)} r={3.4} fill={c} />;
  return (
    <G>
      <Axes ox={ox} oy={oy} ux={36} uy={18} x0={-3} x1={4} y0={-5} y1={6} />
      <Line x1={X(1)} y1={Y(-5)} x2={X(1)} y2={Y(6)} stroke={GREEN} strokeWidth={1.3} strokeDasharray="5 3" />
      <Path d={curve} fill="none" stroke={BLUE} strokeWidth={2} />
      {dot(1, -4, RED)}
      {dot(-1, 0)}
      {dot(3, 0)}
      {dot(0, -3)}
      <Txt x={X(1.15)} y={Y(-4.75)} size={8.5} anchor="start" weight="700" fill={RED}>
        turning point (1, −4)
      </Txt>
      <Txt x={X(-1.4)} y={Y(0.33)} size={8.5} anchor="end" weight="700">
        (−1, 0)
      </Txt>
      <Txt x={X(3.22)} y={Y(0.33)} size={8.5} anchor="start" weight="700">
        (3, 0)
      </Txt>
      <Txt x={X(0.17)} y={Y(-2.67)} size={8.5} anchor="start" weight="700">
        (0, −3)
      </Txt>
      <Txt x={X(1.1)} y={Y(4.8)} size={8.5} anchor="start" fill={GREEN} weight="700">
        x = 1
      </Txt>
      <Txt x={X(1.2)} y={Y(3.6)} size={9.5} anchor="start" weight="700" fill={BLUE}>
        y = x² − 2x − 3
      </Txt>
    </G>
  );
}

// ---------- direct and inverse variation ----------
function DirectInverseArt() {
  const inv = range(49, (i) => 0.8 + i * 0.1)
    .map((x, i) => `${i ? 'L' : 'M'}${(190 + 20 * x).toFixed(1)} ${(140 - 80 / x).toFixed(1)}`)
    .join(' ');
  return (
    <G>
      <Arrow x1={30} y1={140} x2={148} y2={140} w={1.2} />
      <Arrow x1={30} y1={140} x2={30} y2={26} w={1.2} />
      <Line x1={30} y1={140} x2={138} y2={40} stroke={BLUE} strokeWidth={2} />
      <Circle cx={70} cy={103} r={3.4} fill={RED} />
      <Circle cx={110} cy={66} r={3.4} fill={RED} />
      <Txt x={56} y={50} size={9.5} anchor="start" weight="700" fill={BLUE}>
        y = kx
      </Txt>
      <Txt x={88} y={16} size={10.5} weight="700">
        y ∝ x
      </Txt>
      <Txt x={88} y={160} size={9}>
        double x, double y
      </Txt>
      <Arrow x1={190} y1={140} x2={312} y2={140} w={1.2} />
      <Arrow x1={190} y1={140} x2={190} y2={26} w={1.2} />
      <Path d={inv} fill="none" stroke={BLUE} strokeWidth={2} />
      <Circle cx={210} cy={60} r={3.4} fill={RED} />
      <Circle cx={230} cy={100} r={3.4} fill={RED} />
      <Txt x={244} y={72} size={9.5} anchor="start" weight="700" fill={BLUE}>
        y = k/x
      </Txt>
      <Txt x={250} y={16} size={10.5} weight="700">
        y ∝ 1/x
      </Txt>
      <Txt x={250} y={160} size={9}>
        double x, halve y
      </Txt>
    </G>
  );
}

// ---------- the circle with centre (a, b) ----------
function CircleEquationArt() {
  const [px, py] = at(130, 120, 72, 40);
  return (
    <G>
      <Arrow x1={36} y1={210} x2={262} y2={210} w={1.2} />
      <Arrow x1={40} y1={214} x2={40} y2={18} w={1.2} />
      <Txt x={268} y={214} size={9} italic>
        x
      </Txt>
      <Txt x={31} y={22} size={9} italic>
        y
      </Txt>
      <Circle cx={130} cy={120} r={72} fill="#eef3fa" stroke={BLUE} strokeWidth={2} />
      <Line x1={130} y1={120} x2={130} y2={210} stroke={MUTED} strokeWidth={1} strokeDasharray="4 3" />
      <Line x1={40} y1={120} x2={130} y2={120} stroke={MUTED} strokeWidth={1} strokeDasharray="4 3" />
      <Line x1={130} y1={120} x2={px} y2={120} stroke={GREEN} strokeWidth={1.6} strokeDasharray="5 3" />
      <Line x1={px} y1={120} x2={px} y2={py} stroke={GREEN} strokeWidth={1.6} strokeDasharray="5 3" />
      <Line x1={130} y1={120} x2={px} y2={py} stroke={RED} strokeWidth={2} />
      <RightAngle x={px} y={120} a={90} />
      <Circle cx={130} cy={120} r={3.4} fill={O} />
      <Circle cx={px} cy={py} r={3.4} fill={O} />
      <Txt x={126} y={136} size={9} anchor="end" weight="700">
        C(a, b)
      </Txt>
      <Txt x={px + 7} y={py - 4} size={9} anchor="start" weight="700">
        P(x, y)
      </Txt>
      <Txt x={(130 + px) / 2} y={133} size={9} weight="700" fill={GREEN}>
        x − a
      </Txt>
      <Txt x={px + 9} y={(120 + py) / 2 + 3} size={9} anchor="start" weight="700" fill={GREEN}>
        y − b
      </Txt>
      <Txt x={150} y={88} size={10} weight="700" fill={RED} italic>
        r
      </Txt>
      <Txt x={130} y={223} size={9} italic>
        a
      </Txt>
      <Txt x={33} y={124} size={9} anchor="end" italic>
        b
      </Txt>
      <Txt x={150} y={30} size={10.5} weight="700">
        (x − a)² + (y − b)² = r²
      </Txt>
    </G>
  );
}

// ---------- angle at the centre; angle in a semicircle ----------
function CircleTheoremsArt() {
  const A = at(85, 100, 70, -140);
  const B = at(85, 100, 70, -40);
  const C = at(85, 100, 70, 100);
  const P = at(250, 100, 70, 60);
  const seg = (p, q, c, w = 1.6) => <Line x1={p[0]} y1={p[1]} x2={q[0]} y2={q[1]} stroke={c} strokeWidth={w} />;
  return (
    <G>
      <Circle cx={85} cy={100} r={70} fill="none" stroke={O} strokeWidth={1.4} />
      {seg([85, 100], A, BLUE)}
      {seg([85, 100], B, BLUE)}
      {seg(C, A, RED)}
      {seg(C, B, RED)}
      <Arc cx={85} cy={100} r={14} a1={-140} a2={-40} c={BLUE} />
      <Arc cx={C[0]} cy={C[1]} r={18} a1={-110} a2={-60} c={RED} />
      <Circle cx={85} cy={100} r={2.6} fill={O} />
      <Txt x={85} y={129} size={9.5} weight="700" fill={BLUE}>
        2x
      </Txt>
      <Txt x={C[0] + 3} y={C[1] + 33} size={9.5} weight="700" fill={RED}>
        x
      </Txt>
      <Txt x={93} y={97} size={9} anchor="start" weight="700">
        O
      </Txt>
      <Txt x={A[0] - 5} y={A[1] + 10} size={9} anchor="end" weight="700">
        A
      </Txt>
      <Txt x={B[0] + 5} y={B[1] + 10} size={9} anchor="start" weight="700">
        B
      </Txt>
      <Txt x={C[0]} y={C[1] - 6} size={9} weight="700">
        C
      </Txt>
      <Txt x={85} y={188} size={8.5}>
        angle AOB = 2 × angle ACB
      </Txt>
      <Circle cx={250} cy={100} r={70} fill="none" stroke={O} strokeWidth={1.4} />
      {seg([180, 100], [320, 100], BLUE)}
      {seg([180, 100], P, RED)}
      {seg([320, 100], P, RED)}
      <RightAngle x={P[0]} y={P[1]} a={-150} s={9} />
      <Circle cx={250} cy={100} r={2.6} fill={O} />
      <Txt x={P[0] - 6} y={P[1] + 26} size={9} weight="700" fill={RED}>
        90°
      </Txt>
      <Txt x={250} y={115} size={8.5} fill={BLUE}>
        diameter
      </Txt>
      <Txt x={250} y={188} size={8.5}>
        angle in a semicircle = 90°
      </Txt>
    </G>
  );
}

// ---------- a cyclic quadrilateral; tangent and alternate segment ----------
function CyclicTangentArt() {
  const A = at(85, 100, 70, 120);
  const B = at(85, 100, 70, 200);
  const C = at(85, 100, 70, 290);
  const D = at(85, 100, 70, 50);
  const T = [245, 150];
  const A2 = at(245, 95, 55, 40);
  const C2 = at(245, 95, 55, 150);
  const seg = (p, q, c, w = 1.6) => <Line x1={p[0]} y1={p[1]} x2={q[0]} y2={q[1]} stroke={c} strokeWidth={w} />;
  return (
    <G>
      <Circle cx={85} cy={100} r={70} fill="none" stroke={O} strokeWidth={1.4} />
      <Polygon points={poly([A, B, C, D])} fill="#e3f0da" stroke={GREEN} strokeWidth={1.6} />
      <Arc cx={A[0]} cy={A[1]} r={14} a1={-110} a2={-5} c={RED} />
      <Arc cx={C[0]} cy={C[1]} r={14} a1={80} a2={155} c={BLUE} />
      <Txt x={A[0] + 13} y={A[1] + 23} size={9.5} weight="700" fill={RED}>
        x
      </Txt>
      <Txt x={C[0] - 14} y={C[1] - 24} size={9} weight="700" fill={BLUE}>
        180° − x
      </Txt>
      <Txt x={A[0] - 4} y={A[1] - 6} size={9} weight="700">
        A
      </Txt>
      <Txt x={B[0] - 6} y={B[1] + 4} size={9} anchor="end" weight="700">
        B
      </Txt>
      <Txt x={C[0] + 6} y={C[1] + 8} size={9} anchor="start" weight="700">
        C
      </Txt>
      <Txt x={D[0] + 6} y={D[1] - 4} size={9} anchor="start" weight="700">
        D
      </Txt>
      <Txt x={85} y={196} size={8.5}>
        opposite angles add up to 180°
      </Txt>
      <Circle cx={245} cy={95} r={55} fill="none" stroke={O} strokeWidth={1.4} />
      {seg([175, 150], [320, 150], BLUE, 1.8)}
      {seg([245, 95], T, O, 1.3)}
      {seg(T, A2, RED)}
      {seg(C2, T, GREEN)}
      {seg(C2, A2, GREEN)}
      <RightAngle x={T[0]} y={T[1]} a={90} />
      <Arc cx={T[0]} cy={T[1]} r={18} a1={0} a2={65} c={RED} />
      <Arc cx={C2[0]} cy={C2[1]} r={16} a1={-60} a2={5} c={RED} />
      <Circle cx={245} cy={95} r={2.6} fill={O} />
      <Txt x={T[0] + 24} y={T[1] - 10} size={9.5} weight="700" fill={RED}>
        y
      </Txt>
      <Txt x={C2[0] + 25} y={C2[1] + 13} size={9.5} weight="700" fill={RED}>
        y
      </Txt>
      <Txt x={250} y={92} size={9} anchor="start" weight="700">
        O
      </Txt>
      <Txt x={T[0]} y={T[1] + 13} size={9} weight="700">
        T
      </Txt>
      <Txt x={A2[0] + 6} y={A2[1] - 3} size={9} anchor="start" weight="700">
        A
      </Txt>
      <Txt x={C2[0] - 6} y={C2[1] - 2} size={9} anchor="end" weight="700">
        C
      </Txt>
      <Txt x={248} y={182} size={8}>
        the tangent meets the radius at 90°
      </Txt>
      <Txt x={248} y={196} size={8}>
        alternate segment: the angles y are equal
      </Txt>
    </G>
  );
}

// ---------- adding vectors ----------
function VectorArt() {
  const ox = 30;
  const oy = 190;
  const X = (x) => ox + x * 34;
  const Y = (y) => oy - y * 34;
  return (
    <G>
      <Axes ox={ox} oy={oy} ux={34} uy={34} x0={0} x1={7} y0={0} y1={5} />
      <Arrow x1={X(0)} y1={Y(0)} x2={X(4)} y2={Y(1)} c={BLUE} w={2.2} size={8} />
      <Arrow x1={X(4)} y1={Y(1)} x2={X(5)} y2={Y(4)} c={RED} w={2.2} size={8} />
      <Arrow x1={X(0)} y1={Y(0)} x2={X(5)} y2={Y(4)} c={GREEN} w={2.2} size={8} />
      <Txt x={X(1.8)} y={Y(0.45) - 8} size={9.5} weight="700" fill={BLUE}>
        a = (4, 1)
      </Txt>
      <Txt x={X(4.5) + 10} y={Y(2.5) + 3} size={9.5} anchor="start" weight="700" fill={RED}>
        b = (1, 3)
      </Txt>
      <Txt x={X(2.5) - 10} y={Y(2) - 8} size={9.5} anchor="end" weight="700" fill={GREEN}>
        a + b = (5, 4)
      </Txt>
    </G>
  );
}

// ---------- reflection, rotation and translation ----------
function TransformArt() {
  const ox = 120;
  const oy = 120;
  const X = (x) => ox + x * 20;
  const Y = (y) => oy - y * 20;
  const tri = (pts, c) => <Polygon points={poly(pts.map(([x, y]) => [X(x), Y(y)]))} fill={c} fillOpacity={0.35} stroke={c} strokeWidth={1.8} />;
  const key = (y, c, lines) => (
    <G>
      <Rect x={236} y={y - 8} width={10} height={10} fill={c} fillOpacity={0.6} stroke={c} />
      {lines.map((l, i) => (
        <Txt key={i} x={252} y={y + i * 11} size={8} anchor="start">
          {l}
        </Txt>
      ))}
    </G>
  );
  return (
    <G>
      <Axes ox={ox} oy={oy} ux={20} uy={20} x0={-5} x1={5} y0={-5} y1={5} labels={false} />
      <Line x1={X(-5)} y1={Y(-5)} x2={X(5)} y2={Y(5)} stroke={GREEN} strokeWidth={1.2} strokeDasharray="5 3" />
      {tri([[1, 1], [4, 1], [1, 3]], BLUE)}
      {tri([[1, 1], [1, 4], [3, 1]], GREEN)}
      {tri([[1, -1], [1, -4], [3, -1]], RED)}
      {tri([[-5, 1], [-2, 1], [-5, 3]], AMBER)}
      <Txt x={X(1) - 3} y={Y(1) + 10} size={8} anchor="end" weight="700">
        A
      </Txt>
      <Txt x={X(4) + 3} y={Y(1) + 10} size={8} anchor="start" weight="700">
        B
      </Txt>
      <Txt x={X(1) - 4} y={Y(3) - 2} size={8} anchor="end" weight="700">
        C
      </Txt>
      <Txt x={X(5) - 2} y={Y(5) + 12} size={8} anchor="end" fill={GREEN}>
        y = x
      </Txt>
      <Txt x={ox - 6} y={oy + 11} size={8} anchor="end">
        O
      </Txt>
      {key(40, BLUE, ['object ABC'])}
      {key(66, GREEN, ['reflection in', 'the line y = x'])}
      {key(103, RED, ['rotation 90°', 'clockwise about O'])}
      {key(140, AMBER, ['translation by', 'the vector (−6, 0)'])}
    </G>
  );
}

// ---------- enlargement with scale factor 2 ----------
function EnlargeArt() {
  const ox = 24;
  const oy = 200;
  const X = (x) => ox + x * 32;
  const Y = (y) => oy - y * 32;
  const tri = (pts, c) => <Polygon points={poly(pts.map(([x, y]) => [X(x), Y(y)]))} fill={c} fillOpacity={0.3} stroke={c} strokeWidth={1.8} />;
  return (
    <G>
      <Axes ox={ox} oy={oy} ux={32} uy={32} x0={0} x1={8} y0={0} y1={5} />
      {[[3, 3], [7, 3], [3, 5]].map(([x, y]) => (
        <Line key={`${x}${y}`} x1={X(1)} y1={Y(1)} x2={X(x)} y2={Y(y)} stroke={MUTED} strokeWidth={1} strokeDasharray="4 3" />
      ))}
      {tri([[2, 2], [4, 2], [2, 3]], BLUE)}
      {tri([[3, 3], [7, 3], [3, 5]], GREEN)}
      <Circle cx={X(1)} cy={Y(1)} r={3.6} fill={RED} />
      <Txt x={X(1) - 6} y={Y(1) + 12} size={9} anchor="end" weight="700" fill={RED}>
        C(1, 1)
      </Txt>
      <Txt x={X(2.55)} y={Y(2.25)} size={8} weight="700" fill={BLUE}>
        object
      </Txt>
      <Txt x={X(4.1)} y={Y(3.5)} size={9} weight="700" fill={GREEN}>
        image
      </Txt>
      <Txt x={X(5.3)} y={Y(4.6)} size={9} anchor="start" weight="700">
        scale factor 2
      </Txt>
    </G>
  );
}

// ---------- perpendicular bisector and angle bisector ----------
function LociArt() {
  const V = [180, 150];
  const P1 = [230, 150];
  const P2 = at(180, 150, 50, 50);
  const Q = at(180, 150, 79.3, 25);
  const end = at(180, 150, 140, 25);
  const arm = at(180, 150, 130, 50);
  return (
    <G>
      <Line x1={30} y1={110} x2={140} y2={110} stroke={O} strokeWidth={1.6} />
      <Arc cx={30} cy={110} r={75} a1={28} a2={58} c={MUTED} />
      <Arc cx={30} cy={110} r={75} a1={-58} a2={-28} c={MUTED} />
      <Arc cx={140} cy={110} r={75} a1={122} a2={152} c={MUTED} />
      <Arc cx={140} cy={110} r={75} a1={208} a2={238} c={MUTED} />
      <Line x1={85} y1={36} x2={85} y2={178} stroke={RED} strokeWidth={1.8} />
      <RightAngle x={85} y={110} a={0} />
      <Line x1={57.5} y1={105} x2={57.5} y2={115} stroke={O} strokeWidth={1.2} />
      <Line x1={112.5} y1={105} x2={112.5} y2={115} stroke={O} strokeWidth={1.2} />
      <Circle cx={30} cy={110} r={3} fill={O} />
      <Circle cx={140} cy={110} r={3} fill={O} />
      <Txt x={24} y={114} size={9.5} anchor="end" weight="700">
        A
      </Txt>
      <Txt x={146} y={114} size={9.5} anchor="start" weight="700">
        B
      </Txt>
      <Txt x={85} y={192} size={8.5}>
        perpendicular bisector of AB
      </Txt>
      <Line x1={V[0]} y1={V[1]} x2={310} y2={150} stroke={O} strokeWidth={1.6} />
      <Line x1={V[0]} y1={V[1]} x2={arm[0]} y2={arm[1]} stroke={O} strokeWidth={1.6} />
      <Arc cx={V[0]} cy={V[1]} r={50} a1={0} a2={50} c={MUTED} />
      <Arc cx={P1[0]} cy={P1[1]} r={40} a1={44} a2={70} c={MUTED} />
      <Arc cx={P2[0]} cy={P2[1]} r={40} a1={-20} a2={6} c={MUTED} />
      <Line x1={V[0]} y1={V[1]} x2={end[0]} y2={end[1]} stroke={RED} strokeWidth={1.8} />
      <Circle cx={Q[0]} cy={Q[1]} r={2.6} fill={RED} />
      <Txt x={245} y={192} size={8.5}>
        bisector of the angle
      </Txt>
    </G>
  );
}

// ---------- elevation and depression ----------
function ElevationArt() {
  const P = [60, 170];
  const T = [250, 40];
  const th = (Math.atan2(130, 190) * 180) / Math.PI;
  return (
    <G>
      <Line x1={20} y1={170} x2={300} y2={170} stroke={O} strokeWidth={1.6} />
      <Rect x={244} y={40} width={12} height={130} fill="#e6eef8" stroke={O} strokeWidth={1.2} />
      <Line x1={40} y1={40} x2={250} y2={40} stroke={MUTED} strokeWidth={1.1} strokeDasharray="5 3" />
      <Line x1={P[0]} y1={P[1]} x2={T[0]} y2={T[1]} stroke={RED} strokeWidth={1.8} />
      <Arc cx={P[0]} cy={P[1]} r={32} a1={0} a2={th} c={BLUE} w={1.5} />
      <Arc cx={T[0]} cy={T[1]} r={32} a1={180} a2={180 + th} c={BLUE} w={1.5} />
      <Circle cx={P[0]} cy={P[1]} r={3.4} fill={O} />
      <Circle cx={T[0]} cy={T[1]} r={3.4} fill={O} />
      <Txt x={P[0] - 6} y={P[1] + 4} size={9.5} anchor="end" weight="700">
        P
      </Txt>
      <Txt x={T[0] + 9} y={T[1] - 4} size={9.5} anchor="start" weight="700">
        T
      </Txt>
      <Txt x={98} y={163} size={9} anchor="start" fill={BLUE} weight="700">
        θ = angle of elevation
      </Txt>
      <Txt x={210} y={60} size={9} anchor="end" fill={BLUE} weight="700">
        angle of depression = θ
      </Txt>
      <Txt x={140} y={34} size={8.5} fill={MUTED}>
        horizontal
      </Txt>
      <Txt x={150} y={97} size={8.5} fill={RED} rotate={-th}>
        line of sight
      </Txt>
      <Arrow x1={276} y1={105} x2={276} y2={42} w={1.1} size={5} />
      <Arrow x1={276} y1={105} x2={276} y2={168} w={1.1} size={5} />
      <Txt x={284} y={109} size={10} anchor="start" italic weight="700">
        h
      </Txt>
      <Arrow x1={155} y1={186} x2={62} y2={186} w={1.1} size={5} />
      <Arrow x1={155} y1={186} x2={248} y2={186} w={1.1} size={5} />
      <Txt x={155} y={200} size={10} italic weight="700">
        d
      </Txt>
    </G>
  );
}

// ---------- a bearing and its back bearing ----------
function BearingsArt() {
  const A = [80, 150];
  const B = [80 + 150 * Math.sin(rad(60)), 150 - 150 * Math.cos(rad(60))];
  return (
    <G>
      <Arrow x1={A[0]} y1={A[1]} x2={A[0]} y2={62} w={1.3} />
      <Arrow x1={B[0]} y1={B[1]} x2={B[0]} y2={22} w={1.3} />
      <Txt x={A[0]} y={55} size={9.5} weight="700">
        N
      </Txt>
      <Txt x={B[0]} y={15} size={9.5} weight="700">
        N
      </Txt>
      <Line x1={A[0]} y1={A[1]} x2={B[0]} y2={B[1]} stroke={BLUE} strokeWidth={2} />
      <Arc cx={A[0]} cy={A[1]} r={30} a1={30} a2={90} c={RED} w={1.5} />
      <Arc cx={B[0]} cy={B[1]} r={22} a1={210} a2={450} c={GREEN} w={1.5} />
      <Circle cx={A[0]} cy={A[1]} r={3.4} fill={O} />
      <Circle cx={B[0]} cy={B[1]} r={3.4} fill={O} />
      <Txt x={A[0] - 7} y={A[1] + 12} size={9.5} anchor="end" weight="700">
        A
      </Txt>
      <Txt x={B[0] - 8} y={B[1] - 6} size={9.5} anchor="end" weight="700">
        B
      </Txt>
      <Txt x={A[0] + 22} y={A[1] - 36} size={9.5} weight="700" fill={RED}>
        060°
      </Txt>
      <Txt x={B[0] + 32} y={B[1] + 22} size={9.5} anchor="start" weight="700" fill={GREEN}>
        240°
      </Txt>
      <Txt x={150} y={190} size={9}>
        bearing of B from A: 060°; of A from B: 240°
      </Txt>
    </G>
  );
}

// ---------- triangle labelling for the sine and cosine rules ----------
function SineCosineArt() {
  return (
    <G>
      <Polygon points="40,140 250,140 150,30" fill="#eef3fa" stroke={O} strokeWidth={1.6} />
      <Arc cx={40} cy={140} r={18} a1={0} a2={45} c={RED} />
      <Arc cx={250} cy={140} r={18} a1={132.3} a2={180} c={RED} />
      <Arc cx={150} cy={30} r={16} a1={-135} a2={-47.7} c={RED} />
      <Txt x={32} y={150} size={10} anchor="end" weight="700">
        A
      </Txt>
      <Txt x={258} y={150} size={10} anchor="start" weight="700">
        B
      </Txt>
      <Txt x={150} y={22} size={10} weight="700">
        C
      </Txt>
      <Txt x={212} y={84} size={11} anchor="start" italic weight="700" fill={BLUE}>
        a
      </Txt>
      <Txt x={88} y={84} size={11} anchor="end" italic weight="700" fill={BLUE}>
        b
      </Txt>
      <Txt x={145} y={156} size={11} italic weight="700" fill={BLUE}>
        c
      </Txt>
      <Txt x={150} y={177} size={9.5} weight="700">
        a/sin A = b/sin B = c/sin C
      </Txt>
      <Txt x={150} y={193} size={9.5} weight="700">
        a² = b² + c² − 2bc cos A
      </Txt>
    </G>
  );
}

// ---------- y = sin x and y = cos x ----------
function TrigGraphArt() {
  const X = (d) => 40 + 0.75 * d;
  const Y = (v) => 100 - 50 * v;
  const wave = (fn) =>
    range(73, (i) => i * 5)
      .map((d, i) => `${i ? 'L' : 'M'}${X(d).toFixed(1)} ${Y(fn(rad(d))).toFixed(1)}`)
      .join(' ');
  return (
    <G>
      {[90, 180, 270, 360].map((d) => (
        <G key={d}>
          <Line x1={X(d)} y1={Y(1)} x2={X(d)} y2={Y(-1)} stroke={GRID} strokeWidth={1} />
          <Txt x={X(d)} y={166} size={8} fill={MUTED}>
            {`${d}°`}
          </Txt>
        </G>
      ))}
      {[1, -1].map((v) => (
        <G key={v}>
          <Line x1={X(0)} y1={Y(v)} x2={X(360)} y2={Y(v)} stroke={GRID} strokeWidth={1} />
          <Txt x={34} y={Y(v) + 3} size={8} anchor="end" fill={MUTED}>
            {minus(v)}
          </Txt>
        </G>
      ))}
      <Arrow x1={36} y1={100} x2={318} y2={100} w={1.2} />
      <Arrow x1={40} y1={158} x2={40} y2={40} w={1.2} />
      <Line x1={X(0)} y1={Y(0.5)} x2={X(360)} y2={Y(0.5)} stroke={GREEN} strokeWidth={1.1} strokeDasharray="5 3" />
      <Path d={wave(Math.cos)} fill="none" stroke={RED} strokeWidth={2} />
      <Path d={wave(Math.sin)} fill="none" stroke={BLUE} strokeWidth={2} />
      <Circle cx={X(30)} cy={Y(0.5)} r={3.4} fill={GREEN} />
      <Circle cx={X(150)} cy={Y(0.5)} r={3.4} fill={GREEN} />
      <Txt x={56} y={68} size={8.5} anchor="end" weight="700" fill={GREEN}>
        30°
      </Txt>
      <Txt x={165} y={68} size={8.5} anchor="start" weight="700" fill={GREEN}>
        150°
      </Txt>
      <Txt x={313} y={78} size={8} anchor="start" fill={GREEN}>
        0.5
      </Txt>
      <Line x1={226} y1={22} x2={240} y2={22} stroke={BLUE} strokeWidth={2} />
      <Txt x={244} y={25} size={8.5} anchor="start" weight="700">
        y = sin x
      </Txt>
      <Line x1={226} y1={36} x2={240} y2={36} stroke={RED} strokeWidth={2} />
      <Txt x={244} y={39} size={8.5} anchor="start" weight="700">
        y = cos x
      </Txt>
    </G>
  );
}

// ---------- cylinder, cone, sphere and pyramid ----------
function SolidsArt() {
  const label = (x, lines, name) => (
    <G>
      {lines.map((l, i) => (
        <Txt key={i} x={x} y={140 + i * 14} size={8.5} weight="700">
          {l}
        </Txt>
      ))}
      <Txt x={x} y={172} size={8.5} fill={MUTED}>
        {name}
      </Txt>
    </G>
  );
  const fill = '#e6eef8';
  return (
    <G>
      <Path d="M17 38 L17 108 A28 8 0 0 0 73 108 L73 38 Z" fill={fill} stroke={O} strokeWidth={1.3} />
      <Path d="M17 108 A28 8 0 0 1 73 108" fill="none" stroke={O} strokeWidth={1} strokeDasharray="3 3" />
      <Path d="M17 38 A28 8 0 0 0 73 38 A28 8 0 0 0 17 38 Z" fill="#cfe0f2" stroke={O} strokeWidth={1.3} />
      <Line x1={45} y1={38} x2={73} y2={38} stroke={RED} strokeWidth={1.3} />
      <Txt x={59} y={51} size={9} italic weight="700" fill={RED}>
        r
      </Txt>
      <Txt x={80} y={78} size={9} anchor="start" italic weight="700" fill={RED}>
        h
      </Txt>
      {label(45, ['V = πr²h', 'A = 2πr² + 2πrh'], 'cylinder')}
      <Path d="M100 108 L130 28 L160 108 A30 8 0 0 1 100 108 Z" fill={fill} stroke={O} strokeWidth={1.3} />
      <Path d="M100 108 A30 8 0 0 1 160 108" fill="none" stroke={O} strokeWidth={1} strokeDasharray="3 3" />
      <Line x1={130} y1={28} x2={130} y2={108} stroke={RED} strokeWidth={1.2} strokeDasharray="4 3" />
      <Line x1={130} y1={108} x2={160} y2={108} stroke={RED} strokeWidth={1.3} />
      <Txt x={125} y={74} size={9} anchor="end" italic weight="700" fill={RED}>
        h
      </Txt>
      <Txt x={145} y={127} size={9} italic weight="700" fill={RED}>
        r
      </Txt>
      <Txt x={151} y={64} size={9} anchor="start" italic weight="700" fill={RED}>
        l
      </Txt>
      {label(130, ['V = 1/3 πr²h', 'curved A = πrl'], 'cone')}
      <Circle cx={215} cy={70} r={38} fill={fill} stroke={O} strokeWidth={1.3} />
      <Path d="M177 70 A38 10 0 0 0 253 70" fill="none" stroke={O} strokeWidth={1.1} />
      <Path d="M177 70 A38 10 0 0 1 253 70" fill="none" stroke={O} strokeWidth={1} strokeDasharray="3 3" />
      <Line x1={215} y1={70} x2={253} y2={70} stroke={RED} strokeWidth={1.3} />
      <Txt x={234} y={66} size={9} italic weight="700" fill={RED}>
        r
      </Txt>
      {label(215, ['V = 4/3 πr³', 'A = 4πr²'], 'sphere')}
      <Polygon points="272,110 318,110 330,94 300,30" fill={fill} stroke={O} strokeWidth={1.3} />
      <Line x1={300} y1={30} x2={272} y2={110} stroke={O} strokeWidth={1.3} />
      <Line x1={300} y1={30} x2={318} y2={110} stroke={O} strokeWidth={1.3} />
      <Line x1={300} y1={30} x2={284} y2={94} stroke={O} strokeWidth={1} strokeDasharray="3 3" />
      <Line x1={272} y1={110} x2={284} y2={94} stroke={O} strokeWidth={1} strokeDasharray="3 3" />
      <Line x1={284} y1={94} x2={330} y2={94} stroke={O} strokeWidth={1} strokeDasharray="3 3" />
      <Line x1={300} y1={30} x2={301} y2={102} stroke={RED} strokeWidth={1.2} strokeDasharray="4 3" />
      <Txt x={296} y={74} size={9} anchor="end" italic weight="700" fill={RED}>
        h
      </Txt>
      {label(298, ['V = 1/3 × A × h', 'A = base area'], 'pyramid')}
    </G>
  );
}

// ---------- the ogive of 40 pupils' masses ----------
const OGX = [29.5, 34.5, 39.5, 44.5, 49.5, 54.5];
const OGY = [0, 4, 14, 29, 37, 40];
// A smooth curve through the points that never turns back (monotone cubic).
function smooth(xs, ys) {
  const n = xs.length;
  const d = range(n - 1, (i) => (ys[i + 1] - ys[i]) / (xs[i + 1] - xs[i]));
  const m = range(n, (i) => (i === 0 ? d[0] : i === n - 1 ? d[n - 2] : d[i - 1] * d[i] <= 0 ? 0 : (d[i - 1] + d[i]) / 2));
  for (let i = 0; i < n - 1; i++) {
    if (d[i] === 0) {
      m[i] = 0;
      m[i + 1] = 0;
    } else {
      const a = m[i] / d[i];
      const b = m[i + 1] / d[i];
      const s = a * a + b * b;
      if (s > 9) {
        m[i] = (3 / Math.sqrt(s)) * a * d[i];
        m[i + 1] = (3 / Math.sqrt(s)) * b * d[i];
      }
    }
  }
  return (x) => {
    let i = 0;
    while (i < n - 2 && x > xs[i + 1]) i++;
    const h = xs[i + 1] - xs[i];
    const t = (x - xs[i]) / h;
    return (2 * t ** 3 - 3 * t ** 2 + 1) * ys[i] + (t ** 3 - 2 * t ** 2 + t) * h * m[i] + (-2 * t ** 3 + 3 * t ** 2) * ys[i + 1] + (t ** 3 - t ** 2) * h * m[i + 1];
  };
}
function OgiveArt() {
  const X = (v) => 50 + (v - 29.5) * 9.6;
  const Y = (c) => 210 - c * 4.5;
  const f = smooth(OGX, OGY);
  const xs = range(101, (i) => 29.5 + i * 0.25);
  const curve = xs.map((x, i) => `${i ? 'L' : 'M'}${X(x).toFixed(1)} ${Y(f(x)).toFixed(1)}`).join(' ');
  const read = (c) => xs.find((x) => f(x) >= c);
  const line = (c, col, name) => {
    const x = read(c);
    return (
      <G>
        <Line x1={X(29.5)} y1={Y(c)} x2={X(x)} y2={Y(c)} stroke={col} strokeWidth={1.2} strokeDasharray="4 3" />
        <Line x1={X(x)} y1={Y(c)} x2={X(x)} y2={Y(0)} stroke={col} strokeWidth={1.2} strokeDasharray="4 3" />
        <Txt x={X(x) + 3} y={204} size={8} anchor="start" weight="700" fill={col}>
          {name}
        </Txt>
      </G>
    );
  };
  return (
    <G>
      {OGX.map((v) => (
        <G key={v}>
          <Line x1={X(v)} y1={Y(0)} x2={X(v)} y2={Y(40)} stroke={GRID} strokeWidth={1} />
          <Txt x={X(v)} y={222} size={7.5} fill={MUTED}>
            {`${v}`}
          </Txt>
        </G>
      ))}
      {[10, 20, 30, 40].map((c) => (
        <G key={c}>
          <Line x1={X(29.5)} y1={Y(c)} x2={X(54.5)} y2={Y(c)} stroke={GRID} strokeWidth={1} />
          <Txt x={45} y={Y(c) + 3} size={7.5} anchor="end" fill={MUTED}>
            {`${c}`}
          </Txt>
        </G>
      ))}
      <Arrow x1={46} y1={Y(0)} x2={302} y2={Y(0)} w={1.2} />
      <Arrow x1={50} y1={214} x2={50} y2={20} w={1.2} />
      {line(10, GREEN, 'Q₁')}
      {line(20, RED, 'median')}
      {line(30, GREEN, 'Q₃')}
      <Path d={curve} fill="none" stroke={BLUE} strokeWidth={2} />
      {OGX.map((v, i) => (
        <G key={`p${v}`}>
          <Line x1={X(v) - 3} y1={Y(OGY[i]) - 3} x2={X(v) + 3} y2={Y(OGY[i]) + 3} stroke={O} strokeWidth={1.3} />
          <Line x1={X(v) - 3} y1={Y(OGY[i]) + 3} x2={X(v) + 3} y2={Y(OGY[i]) - 3} stroke={O} strokeWidth={1.3} />
        </G>
      ))}
      <Txt x={170} y={240} size={8.5} fill={MUTED}>
        mass (kg), upper class boundaries
      </Txt>
      <Txt x={56} y={14} size={8.5} anchor="start" fill={MUTED}>
        cumulative frequency
      </Txt>
    </G>
  );
}

// ---------- latitude and the radius of a parallel ----------
function LatitudeArt() {
  const P = at(130, 120, 90, 40);
  return (
    <G>
      <Circle cx={130} cy={120} r={90} fill="#eaf2fb" stroke={O} strokeWidth={1.5} />
      <Line x1={130} y1={30} x2={130} y2={210} stroke={MUTED} strokeWidth={1.1} strokeDasharray="5 3" />
      <Line x1={40} y1={120} x2={220} y2={120} stroke={BLUE} strokeWidth={1.8} />
      <Line x1={260 - P[0]} y1={P[1]} x2={P[0]} y2={P[1]} stroke={GREEN} strokeWidth={2} />
      <Line x1={130} y1={120} x2={P[0]} y2={P[1]} stroke={RED} strokeWidth={1.8} />
      <Arc cx={130} cy={120} r={26} a1={0} a2={40} c={RED} />
      <RightAngle x={130} y={P[1]} a={-90} s={7} />
      <Circle cx={130} cy={120} r={2.8} fill={O} />
      <Circle cx={P[0]} cy={P[1]} r={3.4} fill={O} />
      <Txt x={130} y={22} size={9.5} weight="700">
        N
      </Txt>
      <Txt x={130} y={224} size={9.5} weight="700">
        S
      </Txt>
      <Txt x={124} y={133} size={9} anchor="end" weight="700">
        O
      </Txt>
      <Txt x={P[0]} y={P[1] - 10} size={9.5} weight="700">
        P
      </Txt>
      <Txt x={226} y={124} size={9} anchor="start" weight="700" fill={BLUE}>
        Equator
      </Txt>
      <Txt x={163} y={110} size={10} italic weight="700" fill={RED}>
        α
      </Txt>
      <Txt x={157} y={86} size={10} italic weight="700" fill={RED}>
        R
      </Txt>
      <Txt x={(130 + P[0]) / 2} y={P[1] - 6} size={8.5} weight="700" fill={GREEN}>
        R cos α
      </Txt>
      <Txt x={212} y={60} size={8.5} anchor="start" fill={GREEN}>
        parallel of
      </Txt>
      <Txt x={212} y={72} size={8.5} anchor="start" fill={GREEN}>
        latitude α
      </Txt>
    </G>
  );
}

// ---------- a network and the orders of its vertices ----------
function NetworkArt() {
  const V = { A: [40, 100], B: [130, 40], C: [130, 160], D: [220, 100], E: [280, 100] };
  const order = { A: 2, B: 3, C: 3, D: 3, E: 1 };
  const edges = ['AB', 'AC', 'BC', 'BD', 'CD', 'DE'];
  const pos = { A: [40, 128, 'middle'], B: [108, 36, 'end'], C: [108, 172, 'end'], D: [220, 128, 'middle'], E: [280, 128, 'middle'] };
  return (
    <G>
      {edges.map((e) => (
        <Line key={e} x1={V[e[0]][0]} y1={V[e[0]][1]} x2={V[e[1]][0]} y2={V[e[1]][1]} stroke={O} strokeWidth={1.8} />
      ))}
      {Object.entries(V).map(([k, [x, y]]) => (
        <G key={k}>
          <Circle cx={x} cy={y} r={13} fill={order[k] % 2 ? RED : BLUE} stroke={O} strokeWidth={1.2} />
          <Txt x={x} y={y + 4} size={11} weight="700" fill="#ffffff">
            {k}
          </Txt>
          <Txt x={pos[k][0]} y={pos[k][1]} size={10} anchor={pos[k][2]} weight="700" fill={order[k] % 2 ? RED : BLUE}>
            {`${order[k]}`}
          </Txt>
        </G>
      ))}
      <Txt x={10} y={14} size={8} anchor="start" fill={MUTED}>
        The numbers are the orders of the vertices.
      </Txt>
      <Circle cx={232} cy={30} r={6} fill={RED} />
      <Txt x={242} y={33} size={8.5} anchor="start">
        odd vertex
      </Txt>
      <Circle cx={232} cy={48} r={6} fill={BLUE} />
      <Txt x={242} y={51} size={8.5} anchor="start">
        even vertex
      </Txt>
    </G>
  );
}

export const MATHS_2 = {
  'number-sets': {
    title: 'The sets of numbers: ℕ ⊂ ℤ ⊂ ℚ ⊂ ℝ',
    w: 330,
    h: 190,
    art: NumberSetsArt,
    labels: [],
    facts: ['Every natural number is an integer, every integer is rational and every rational number is real.', 'Rational numbers include fractions such as 3/4 and decimals such as 0.25 and 1/3 = 0.333 …', 'Irrational numbers such as √2, √5 and π are real but cannot be written as fractions.'],
  },
  'base-conversion': {
    title: 'Changing 45 to base two by repeated division',
    w: 300,
    h: 200,
    art: BaseArt,
    labels: [],
    facts: ['45 is divided by 2 again and again, and each remainder is written down.', 'Reading the remainders from the bottom up gives 101101.', 'So 45 in base ten is 101101 in base two: 32 + 8 + 4 + 1 = 45.'],
  },
  'compound-interest': {
    title: '100 000 FCFA at 10 % a year: compound and simple interest',
    w: 330,
    h: 200,
    art: CompoundArt,
    labels: [],
    facts: ['With compound interest the amount grows to 110 000, 121 000, 133 100, 146 410 and 161 051 FCFA over five years.', 'With simple interest it grows by the same 10 000 FCFA each year, to 150 000 FCFA.', 'The gap widens every year because compound interest is earned on interest already added.'],
  },
  'venn-three': {
    title: 'Biology, Chemistry and Physics choices of 100 students',
    w: 300,
    h: 220,
    art: VennArt,
    labels: [],
    facts: ['The centre region, in all three sets, holds 5 students.', 'Exactly two subjects: Biology and Chemistry 10, Biology and Physics 7, Chemistry and Physics 5.', 'One subject only: Biology 23, Chemistry 20, Physics 18.', '12 students are outside all three circles: they take none of the three subjects.'],
  },
  'feasible-region': {
    title: 'The feasible region R: x + y ≤ 6, 2x + y ≤ 8, x ≥ 0, y ≥ 0',
    w: 300,
    h: 250,
    art: FeasibleArt,
    labels: [],
    facts: ['The boundary x + y = 6 passes through (0, 6) and (6, 0).', 'The boundary 2x + y = 8 passes through (0, 8) and (4, 0).', 'The feasible region R has vertices (0, 0), (4, 0), (2, 4) and (0, 6).', 'The two boundaries cross at (2, 4), where the farmer’s profit is greatest.'],
  },
  'straight-line': {
    title: 'The gradient and midpoint of AB, on the line y = 2x',
    w: 300,
    h: 240,
    art: LineArt,
    labels: [],
    facts: ['From A(1, 2) to B(5, 10) the run is 4 and the rise is 8.', 'The gradient is rise ÷ run = 8 ÷ 4 = 2.', 'The midpoint M of AB is (3, 6).', 'AB = √(4² + 8²) = √80 ≈ 8.94, and the line through A and B is y = 2x.'],
  },
  'simultaneous-graph': {
    title: 'Solving y = 2x − 1 and 3x + 2y = 12 with graphs',
    w: 300,
    h: 240,
    art: SimultaneousArt,
    labels: [],
    facts: ['The line y = 2x − 1 crosses the y-axis at −1 and rises 2 for every 1 across.', 'The line 3x + 2y = 12 passes through (0, 6) and (4, 0).', 'The lines cross at (2, 3), so x = 2 and y = 3 satisfy both equations.'],
  },
  'matrix-inverse': flowSpec('Finding the inverse of A = [a b; c d]', ['Find the\ndeterminant ad − bc', 'If it is 0, stop:\nno inverse', 'Swap a and d', 'Change the signs\nof b and c', 'Divide every entry\nby the determinant', 'Check that\nA × A⁻¹ = I'], { boxW: 112 }),
  'laws-indices': columnsSpec('Laws of indices, surds and logarithms', [
    { head: 'Indices', items: ['a^m × a^n = a^(m + n)', 'a^m ÷ a^n = a^(m − n)', '(a^m)^n = a^(mn)', 'a⁰ = 1 and a^(−n) = 1/a^n'] },
    { head: 'Surds', items: ['√(ab) = √a × √b', '√(a/b) = √a ÷ √b', '√a × √a = a', 'a/√b = a√b/b'] },
    { head: 'Logarithms', items: ['log MN = log M + log N', 'log (M/N) = log M − log N', 'log Mⁿ = n log M', 'log 10 = 1 and log 1 = 0'] },
  ], { colW: 128 }),
  'completing-square': {
    title: 'Completing the square: x² + 6x + 9 = (x + 3)²',
    w: 320,
    h: 190,
    art: CompleteSquareArt,
    labels: [],
    facts: ['The square of side x has area x².', 'The term 6x is split into two strips of 3 by x.', 'The 3 by 3 corner, of area 9, is missing; adding it completes a square of side x + 3.', 'So x² + 6x + 9 = (x + 3)², and x² + 6x = (x + 3)² − 9.'],
  },
  'quadratic-roots': {
    title: 'The discriminant tells how the parabola meets the x-axis',
    w: 330,
    h: 160,
    art: RootsArt,
    labels: [],
    facts: ['When b² − 4ac > 0 the parabola cuts the x-axis twice: two different real roots.', 'When b² − 4ac = 0 it touches the x-axis once: two equal roots.', 'When b² − 4ac < 0 it does not meet the x-axis: no real roots.'],
  },
  parabola: {
    title: 'The graph of y = x² − 2x − 3',
    w: 300,
    h: 250,
    art: ParabolaArt,
    labels: [],
    facts: ['The curve cuts the x-axis at (−1, 0) and (3, 0): these are the roots of x² − 2x − 3 = 0.', 'It cuts the y-axis at (0, −3).', 'The axis of symmetry is x = 1 and the turning point, a minimum, is (1, −4).'],
  },
  'direct-inverse': {
    title: 'Graphs of direct and inverse variation',
    w: 320,
    h: 170,
    art: DirectInverseArt,
    labels: [],
    facts: ['For direct variation, y = kx: a straight line through the origin; doubling x doubles y.', 'For inverse variation, y = k/x: a curve that comes closer to the axes; doubling x halves y.'],
  },
  'circle-equation': {
    title: 'The circle with centre (a, b) and radius r',
    w: 280,
    h: 240,
    art: CircleEquationArt,
    labels: [],
    facts: ['P(x, y) is any point on the circle and C(a, b) is its centre.', 'The horizontal distance from C to P is x − a and the vertical distance is y − b.', 'By Pythagoras’ theorem (x − a)² + (y − b)² = r², the equation of the circle.'],
  },
  'circle-theorems': {
    title: 'The angle at the centre and the angle in a semicircle',
    w: 330,
    h: 195,
    art: CircleTheoremsArt,
    labels: [],
    facts: ['Angle AOB at the centre is twice angle ACB at the circumference: 100° and 50° here.', 'An angle at the circumference standing on a diameter is 90°.'],
  },
  'cyclic-tangent': {
    title: 'A cyclic quadrilateral; a tangent and the alternate segment',
    w: 330,
    h: 205,
    art: CyclicTangentArt,
    labels: [],
    facts: ['In the cyclic quadrilateral ABCD the opposite angles A and C add up to 180°.', 'The tangent at T is perpendicular to the radius OT.', 'The angle between the tangent and the chord TA equals the angle TCA in the alternate segment.'],
  },
  'vector-triangle': {
    title: 'Adding vectors: a + b',
    w: 300,
    h: 220,
    art: VectorArt,
    labels: [],
    facts: ['a = (4, 1) goes 4 across and 1 up; b = (1, 3) goes 1 across and 3 up.', 'Following a and then b gives a + b = (5, 4).', 'The magnitude of a + b is √(5² + 4²) = √41 ≈ 6.40.'],
  },
  transformations: {
    title: 'Triangle ABC and three of its images',
    w: 330,
    h: 240,
    art: TransformArt,
    labels: [],
    facts: ['The object is A(1, 1), B(4, 1), C(1, 3).', 'Reflected in y = x it becomes (1, 1), (1, 4), (3, 1); A is invariant.', 'Rotated 90° clockwise about O it becomes (1, −1), (1, −4), (3, −1).', 'Translated by (−6, 0) it becomes (−5, 1), (−2, 1), (−5, 3).'],
  },
  enlargement: {
    title: 'An enlargement with centre C(1, 1) and scale factor 2',
    w: 300,
    h: 220,
    art: EnlargeArt,
    labels: [],
    facts: ['The object has vertices (2, 2), (4, 2) and (2, 3).', 'Each image point is twice as far from C as its object point, on the same line: (3, 3), (7, 3), (3, 5).', 'Lengths are doubled and the area is multiplied by 4.'],
  },
  loci: {
    title: 'Constructing the perpendicular bisector and an angle bisector',
    w: 320,
    h: 195,
    art: LociArt,
    labels: [],
    facts: ['Equal arcs from A and B cross at two points; the line through them is the perpendicular bisector of AB.', 'Every point on it is the same distance from A and from B.', 'An arc from the vertex cuts both arms; equal arcs from those points meet on the bisector of the angle.'],
  },
  'elevation-depression': {
    title: 'Angles of elevation and depression',
    w: 320,
    h: 205,
    art: ElevationArt,
    labels: [],
    facts: ['The angle of elevation θ at P is measured up from the horizontal ground to the top T.', 'The angle of depression at T is measured down from the horizontal to P.', 'The two angles are equal (alternate angles), and tan θ = h ÷ d.'],
  },
  'three-figure-bearings': {
    title: 'A bearing and its back bearing',
    w: 300,
    h: 200,
    art: BearingsArt,
    labels: [],
    facts: ['The bearing of B from A is 060°, measured clockwise from north at A.', 'The bearing of A from B is 060° + 180° = 240°, measured clockwise from north at B.'],
  },
  'sine-cosine-rule': {
    title: 'Labelling a triangle for the sine and cosine rules',
    w: 300,
    h: 200,
    art: SineCosineArt,
    labels: [],
    facts: ['Side a is opposite angle A, side b opposite angle B and side c opposite angle C.', 'Sine rule: a/sin A = b/sin B = c/sin C.', 'Cosine rule: a² = b² + c² − 2bc cos A.'],
  },
  'trig-graphs': {
    title: 'y = sin x and y = cos x from 0° to 360°',
    w: 330,
    h: 175,
    art: TrigGraphArt,
    labels: [],
    facts: ['y = sin x starts at 0, reaches 1 at 90°, 0 at 180°, −1 at 270° and 0 at 360°.', 'y = cos x starts at 1, is 0 at 90°, −1 at 180°, 0 at 270° and 1 at 360°.', 'The line y = 0.5 meets the sine curve at 30° and 150°: the solutions of sin x = 0.5.'],
  },
  'solid-formulas': {
    title: 'Volume and surface area of four solids',
    w: 340,
    h: 180,
    art: SolidsArt,
    labels: [],
    facts: ['Cylinder: volume πr²h, total surface area 2πr² + 2πrh.', 'Cone: volume ⅓πr²h, curved surface πrl, where l is the slant height.', 'Sphere: volume 4/3 πr³, surface area 4πr².', 'Pyramid: volume ⅓ × base area × height.'],
  },
  ogive: {
    title: 'The cumulative frequency curve of the masses of 40 pupils',
    w: 320,
    h: 245,
    art: OgiveArt,
    labels: [],
    facts: ['The cumulative frequencies 4, 14, 29, 37 and 40 are plotted at the upper class boundaries 34.5, 39.5, 44.5, 49.5 and 54.5 kg.', 'The median is read at 20, half of 40: about 41.5 kg.', 'The lower and upper quartiles are read at 10 and 30: about 38 kg and 45 kg.'],
  },
  'ap-gp': columnsSpec('Arithmetic and geometric progressions', [
    { head: 'Arithmetic (AP)', items: ['Add the same d each time', 'Example: 5, 8, 11, 14, …', 'nth term: a + (n − 1)d', 'Sum: n/2 [2a + (n − 1)d]', 'Mean of a and b: (a + b)/2'] },
    { head: 'Geometric (GP)', items: ['Multiply by the same r each time', 'Example: 3, 6, 12, 24, …', 'nth term: ar^(n − 1)', 'Sum: a(rⁿ − 1)/(r − 1)', 'Mean of a and b: √(ab)'] },
  ], { colW: 150 }),
  'latitude-longitude': {
    title: 'Latitude and the radius of a parallel of latitude',
    w: 300,
    h: 230,
    art: LatitudeArt,
    labels: [],
    facts: ['The latitude α of P is the angle at the centre O between OP and the plane of the Equator.', 'P lies on a parallel of latitude, a small circle whose radius is R cos α.', 'N and S are the poles, at 90° N and 90° S.'],
  },
  'network-graph': {
    title: 'A network with five vertices and six edges',
    w: 300,
    h: 190,
    art: NetworkArt,
    labels: [],
    facts: ['The vertices A, B, C, D and E have orders 2, 3, 3, 3 and 1.', 'B, C, D and E are odd vertices; with four odd vertices the network cannot be traced in one stroke.', 'The orders add up to 12, twice the number of edges.'],
  },
  'gce-maths-papers': columnsSpec('GCE Ordinary Level Mathematics (0570)', [
    { head: 'Paper 1 (1½ hours)', items: ['Multiple-choice questions', 'Questions from the whole syllabus', 'Estimate and eliminate options', 'Check by substituting'] },
    { head: 'Paper 2 (2½ hours)', items: ['Structured questions', 'Marks for the working shown', 'Graphs, constructions, proofs', 'Units and accuracy given'] },
  ], { colW: 150 }),
};
