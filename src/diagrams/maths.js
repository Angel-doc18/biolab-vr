// Mathematics diagrams for Forms 1 and 2: place value, the number line, a factor
// tree, fraction bars, line notation, types of angle and triangle, the Cartesian
// plane, a cuboid and its net, a bar chart and pie chart, parallel lines and a
// transversal, Pythagoras’ theorem, a prism and a pyramid, and the probability
// scale. Drawn to scale where it matters (charts, coordinates, angles).
import { Circle, G, Line, Path, Rect } from 'react-native-svg';
import { Head, Txt } from './Diagram';
import { O } from './kit';

const range = (n, f) => Array.from({ length: n }, (_, i) => f(i));
const BLUE = '#3f6fb5';
const RED = '#c8463d';
const GREEN = '#2f7d4f';
const AMBER = '#d4a72c';
const SHADE = '#cfe0f2';
const rad = (d) => (d * Math.PI) / 180;

function Arrow({ x1, y1, x2, y2, c = O, w = 1.3, size = 6 }) {
  return (
    <G>
      <Line x1={x1} y1={y1} x2={x2} y2={y2} stroke={c} strokeWidth={w} />
      <Head x={x2} y={y2} dx={x2 - x1} dy={y2 - y1} size={size} fill={c} />
    </G>
  );
}

// ---------- place value ----------
function PlaceValueArt() {
  const heads = ['10 000', '1000', '100', '10', '1', '', '1/10', '1/100'];
  const digits = ['5', '2', '7', '0', '8', '.', '3', '6'];
  return (
    <G>
      {heads.map((h, i) => {
        const x = 10 + i * 40;
        const dot = h === '';
        return (
          <G key={i}>
            {!dot && <Rect x={x} y={20} width={38} height={22} fill={SHADE} stroke={O} strokeWidth={1} />}
            {!dot && <Rect x={x} y={42} width={38} height={34} fill="#ffffff" stroke={O} strokeWidth={1} />}
            <Txt x={x + 19} y={35} size={9} weight="700">{h}</Txt>
            <Txt x={x + 19} y={66} size={dot ? 22 : 18} weight="700">{digits[i]}</Txt>
          </G>
        );
      })}
      <Txt x={170} y={100} size={9.5}>52 708.36 = 50 000 + 2000 + 700 + 0 + 8 + 0.3 + 0.06</Txt>
    </G>
  );
}

// ---------- the number line ----------
const nx = (n) => 170 + n * 24;
function NumberLineArt() {
  return (
    <G>
      <Line x1={14} y1={80} x2={326} y2={80} stroke={O} strokeWidth={1.4} />
      <Head x={326} y={80} dx={1} dy={0} size={6} />
      <Head x={14} y={80} dx={-1} dy={0} size={6} />
      {range(13, (i) => {
        const n = i - 6;
        return (
          <G key={i}>
            <Line x1={nx(n)} y1={74} x2={nx(n)} y2={86} stroke={O} strokeWidth={1.2} />
            <Txt x={nx(n)} y={100} size={10} weight={n === 0 ? '700' : '500'}>{n < 0 ? `−${-n}` : `${n}`}</Txt>
          </G>
        );
      })}
      <Path d={`M${nx(-2)} 70 Q${(nx(-2) + nx(3)) / 2} 22 ${nx(3)} 70`} fill="none" stroke={BLUE} strokeWidth={1.6} />
      <Head x={nx(3)} y={70} dx={0.4} dy={1} size={6} fill={BLUE} />
      <Circle cx={nx(-2)} cy={80} r={4} fill={RED} />
      <Circle cx={nx(3)} cy={80} r={4} fill={BLUE} />
      <Txt x={(nx(-2) + nx(3)) / 2} y={34} size={10} weight="700" fill={BLUE}>+5</Txt>
      <Txt x={nx(-4)} y={120} size={9.5}>negative integers</Txt>
      <Txt x={nx(4)} y={120} size={9.5}>positive integers</Txt>
    </G>
  );
}

// ---------- a factor tree ----------
function Node({ x, y, t, prime }) {
  return (
    <G>
      {prime && <Circle cx={x} cy={y - 4} r={12} fill="#fde68a" stroke={O} strokeWidth={1} />}
      <Txt x={x} y={y} size={12} weight="700">{t}</Txt>
    </G>
  );
}
function FactorTreeArt() {
  const edges = [[150, 26, 110, 58], [150, 26, 190, 62], [190, 80, 150, 104], [190, 80, 230, 108], [230, 126, 190, 150], [230, 126, 270, 150]];
  return (
    <G>
      {edges.map(([x1, y1, x2, y2], i) => (
        <Line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke={O} strokeWidth={1.2} />
      ))}
      <Node x={150} y={20} t="60" />
      <Node x={110} y={74} t="2" prime />
      <Node x={190} y={74} t="30" />
      <Node x={150} y={120} t="2" prime />
      <Node x={230} y={120} t="15" />
      <Node x={190} y={166} t="3" prime />
      <Node x={270} y={166} t="5" prime />
      <Txt x={170} y={200} size={10.5} weight="700">60 = 2 × 2 × 3 × 5 = 2² × 3 × 5</Txt>
    </G>
  );
}

// ---------- fraction bars ----------
function Bar({ y, parts, shaded, label }) {
  const w = 240 / parts;
  return (
    <G>
      {range(parts, (i) => (
        <Rect key={i} x={70 + i * w} y={y} width={w} height={22} fill={i < shaded ? SHADE : '#ffffff'} stroke={O} strokeWidth={1} />
      ))}
      <Txt x={62} y={y + 15} size={12} weight="700" anchor="end">{label}</Txt>
    </G>
  );
}
function FractionBarsArt() {
  return (
    <G>
      <Bar y={10} parts={1} shaded={0} label="1" />
      <Bar y={40} parts={2} shaded={1} label="1/2" />
      <Bar y={70} parts={4} shaded={2} label="2/4" />
      <Bar y={100} parts={8} shaded={4} label="4/8" />
      <Bar y={130} parts={4} shaded={3} label="3/4" />
      <Line x1={190} y1={36} x2={190} y2={126} stroke={RED} strokeWidth={1.2} strokeDasharray="4 3" />
    </G>
  );
}

// ---------- line notation ----------
function LinesArt() {
  const pts = (y) => (
    <G>
      <Circle cx={110} cy={y} r={3} fill={O} />
      <Circle cx={230} cy={y} r={3} fill={O} />
      <Txt x={110} y={y - 8} size={10} weight="700">A</Txt>
      <Txt x={230} y={y - 8} size={10} weight="700">B</Txt>
    </G>
  );
  return (
    <G>
      <Line x1={60} y1={30} x2={290} y2={30} stroke={BLUE} strokeWidth={1.6} />
      <Head x={290} y={30} dx={1} dy={0} size={6} fill={BLUE} />
      <Head x={60} y={30} dx={-1} dy={0} size={6} fill={BLUE} />
      {pts(30)}
      <Txt x={10} y={34} size={10.5} anchor="start">(AB) line</Txt>
      <Line x1={110} y1={80} x2={230} y2={80} stroke={BLUE} strokeWidth={1.6} />
      {pts(80)}
      <Circle cx={170} cy={80} r={3} fill={RED} />
      <Txt x={170} y={96} size={10} weight="700" fill={RED}>M</Txt>
      <Txt x={10} y={84} size={10.5} anchor="start">[AB] segment</Txt>
      <Line x1={110} y1={130} x2={290} y2={130} stroke={BLUE} strokeWidth={1.6} />
      <Head x={290} y={130} dx={1} dy={0} size={6} fill={BLUE} />
      {pts(130)}
      <Txt x={10} y={134} size={10.5} anchor="start">[AB) half-line</Txt>
    </G>
  );
}

// ---------- types of angles ----------
function AngleShape({ cx, cy, deg, name }) {
  const end = [cx + 34 * Math.cos(rad(-deg)), cy + 34 * Math.sin(rad(-deg))];
  const arcEnd = [cx + 14 * Math.cos(rad(-deg)), cy + 14 * Math.sin(rad(-deg))];
  const large = deg > 180 ? 1 : 0;
  return (
    <G>
      <Line x1={cx} y1={cy} x2={cx + 34} y2={cy} stroke={O} strokeWidth={1.5} />
      <Line x1={cx} y1={cy} x2={end[0]} y2={end[1]} stroke={O} strokeWidth={1.5} />
      {deg === 90 ? (
        <Path d={`M${cx + 10} ${cy} L${cx + 10} ${cy - 10} L${cx} ${cy - 10}`} fill="none" stroke={RED} strokeWidth={1.2} />
      ) : (
        <Path d={`M${cx + 14} ${cy} A14 14 0 ${large} 0 ${arcEnd[0]} ${arcEnd[1]}`} fill="none" stroke={RED} strokeWidth={1.2} />
      )}
      <Txt x={cx + 6} y={cy + 30} size={9.5} weight="700">{name}</Txt>
      <Txt x={cx + 6} y={cy + 42} size={9}>{`${deg}°`}</Txt>
    </G>
  );
}
function AnglesArt() {
  return (
    <G>
      <AngleShape cx={20} cy={60} deg={45} name="acute" />
      <AngleShape cx={86} cy={60} deg={90} name="right" />
      <AngleShape cx={158} cy={60} deg={130} name="obtuse" />
      <AngleShape cx={232} cy={60} deg={180} name="straight" />
      <AngleShape cx={300} cy={60} deg={250} name="reflex" />
    </G>
  );
}

// ---------- types of triangles ----------
function Tick({ x1, y1, x2, y2, n = 1 }) {
  const mx = (x1 + x2) / 2;
  const my = (y1 + y2) / 2;
  const dx = x2 - x1;
  const dy = y2 - y1;
  const len = Math.hypot(dx, dy);
  const ux = dx / len;
  const uy = dy / len;
  return (
    <G>
      {range(n, (i) => {
        const o = (i - (n - 1) / 2) * 4;
        const cx = mx + ux * o;
        const cy = my + uy * o;
        return <Line key={i} x1={cx - uy * 5} y1={cy + ux * 5} x2={cx + uy * 5} y2={cy - ux * 5} stroke={RED} strokeWidth={1.2} />;
      })}
    </G>
  );
}
function TrianglesArt() {
  return (
    <G>
      <Path d="M10 100 L80 100 L45 39.4 Z" fill={SHADE} stroke={O} strokeWidth={1.4} />
      <Tick x1={10} y1={100} x2={80} y2={100} />
      <Tick x1={80} y1={100} x2={45} y2={39.4} />
      <Tick x1={45} y1={39.4} x2={10} y2={100} />
      <Txt x={45} y={120} size={9.5} weight="700">equilateral</Txt>
      <Path d="M100 100 L160 100 L130 30 Z" fill={SHADE} stroke={O} strokeWidth={1.4} />
      <Tick x1={160} y1={100} x2={130} y2={30} n={2} />
      <Tick x1={130} y1={30} x2={100} y2={100} n={2} />
      <Txt x={130} y={120} size={9.5} weight="700">isosceles</Txt>
      <Path d="M180 100 L255 100 L200 50 Z" fill={SHADE} stroke={O} strokeWidth={1.4} />
      <Txt x={218} y={120} size={9.5} weight="700">scalene</Txt>
      <Path d="M275 100 L335 100 L275 45 Z" fill={SHADE} stroke={O} strokeWidth={1.4} />
      <Path d="M275 90 L285 90 L285 100" fill="none" stroke={RED} strokeWidth={1.2} />
      <Txt x={305} y={120} size={9.5} weight="700">right-angled</Txt>
      <Txt x={172} y={142} size={9.5}>In every triangle the angles add up to 180°.</Txt>
    </G>
  );
}

// ---------- the Cartesian plane ----------
const cpx = (x) => 160 + x * 22;
const cpy = (y) => 120 - y * 22;
function CartesianArt() {
  const pts = [['A', 3, 2], ['B', -4, 1], ['C', -2, -3], ['D', 4, -2]];
  return (
    <G>
      {range(11, (i) => (
        <G key={i}>
          <Line x1={cpx(i - 5)} y1={cpy(5)} x2={cpx(i - 5)} y2={cpy(-5)} stroke="#e1e6eb" strokeWidth={0.8} />
          <Line x1={cpx(-5)} y1={cpy(i - 5)} x2={cpx(5)} y2={cpy(i - 5)} stroke="#e1e6eb" strokeWidth={0.8} />
        </G>
      ))}
      <Line x1={cpx(-5.4)} y1={cpy(0)} x2={cpx(5.4)} y2={cpy(0)} stroke={O} strokeWidth={1.3} />
      <Line x1={cpx(0)} y1={cpy(-5.4)} x2={cpx(0)} y2={cpy(5.4)} stroke={O} strokeWidth={1.3} />
      <Head x={cpx(5.4)} y={cpy(0)} dx={1} dy={0} size={6} />
      <Head x={cpx(0)} y={cpy(5.4)} dx={0} dy={-1} size={6} />
      <Txt x={cpx(5.4) + 4} y={cpy(0) + 14} size={10} weight="700">x</Txt>
      <Txt x={cpx(0) + 10} y={cpy(5.4) + 4} size={10} weight="700">y</Txt>
      <Txt x={cpx(0) - 8} y={cpy(0) + 13} size={9}>O</Txt>
      {[-4, -2, 2, 4].map((v) => (
        <G key={v}>
          <Txt x={cpx(v)} y={cpy(0) + 13} size={8}>{v < 0 ? `−${-v}` : v}</Txt>
          <Txt x={cpx(0) - 7} y={cpy(v) + 3} size={8} anchor="end">{v < 0 ? `−${-v}` : v}</Txt>
        </G>
      ))}
      {pts.map(([n, x, y]) => (
        <G key={n}>
          <Circle cx={cpx(x)} cy={cpy(y)} r={3.5} fill={RED} />
          <Txt x={cpx(x) + (x > 0 ? 6 : -6)} y={cpy(y) - 6} size={9.5} weight="700" anchor={x > 0 ? 'start' : 'end'}>{`${n}(${x < 0 ? '−' + -x : x}, ${y < 0 ? '−' + -y : y})`}</Txt>
        </G>
      ))}
    </G>
  );
}

// ---------- a cuboid and its net ----------
function CuboidArt() {
  return (
    <G>
      {/* cuboid 60 x 40 x 30 in oblique view */}
      <G transform="translate(14, 0)">
      <Path d="M20 70 L80 70 L80 110 L20 110 Z" fill={SHADE} stroke={O} strokeWidth={1.3} />
      <Path d="M20 70 L40 52 L100 52 L80 70 Z" fill="#e4eef8" stroke={O} strokeWidth={1.3} />
      <Path d="M80 70 L100 52 L100 92 L80 110 Z" fill="#b9cfe6" stroke={O} strokeWidth={1.3} />
      <Path d="M20 110 L40 92 L100 92 M40 92 L40 52" fill="none" stroke={O} strokeWidth={1} strokeDasharray="3 3" />
      <Txt x={50} y={124} size={9}>length</Txt>
      <Txt x={8} y={90} size={9} rotate={-90}>height</Txt>
      <Txt x={106} y={62} size={9} anchor="start">width</Txt>
      </G>
      {/* net */}
      {[
        [190, 10, 60, 25],
        [150, 35, 40, 40],
        [190, 35, 60, 40],
        [250, 35, 40, 40],
        [290, 35, 60, 40],
        [190, 75, 60, 25],
      ].map(([x, y, w, h], i) => (
        <Rect key={i} x={x} y={y} width={w} height={h} fill={i === 2 ? SHADE : '#ffffff'} stroke={O} strokeWidth={1.2} />
      ))}
      <Txt x={250} y={124} size={9.5} weight="700">net of the cuboid: 6 rectangles</Txt>
    </G>
  );
}

// ---------- bar chart and pie chart ----------
const DATA = [['Walk', 30, '#3f6fb5'], ['Taxi', 15, '#c8463d'], ['Bike', 10, '#2f7d4f'], ['Car', 5, '#d4a72c']];
function ChartsArt() {
  let a0 = -90;
  return (
    <G>
      <Line x1={30} y1={150} x2={160} y2={150} stroke={O} strokeWidth={1.2} />
      <Line x1={30} y1={150} x2={30} y2={20} stroke={O} strokeWidth={1.2} />
      {[0, 10, 20, 30].map((v) => (
        <G key={v}>
          <Line x1={26} y1={150 - v * 4} x2={30} y2={150 - v * 4} stroke={O} strokeWidth={1} />
          <Txt x={23} y={153 - v * 4} size={8} anchor="end">{v}</Txt>
        </G>
      ))}
      {DATA.map(([n, v, c], i) => (
        <G key={n}>
          <Rect x={38 + i * 30} y={150 - v * 4} width={20} height={v * 4} fill={c} />
          <Txt x={48 + i * 30} y={163} size={8.5}>{n}</Txt>
        </G>
      ))}
      <Txt x={14} y={86} size={8.5} rotate={-90}>pupils</Txt>
      {DATA.map(([n, v, c]) => {
        const a1 = a0 + (v / 60) * 360;
        const p = (a) => `${(250 + 60 * Math.cos(rad(a))).toFixed(1)} ${(90 + 60 * Math.sin(rad(a))).toFixed(1)}`;
        const mid = (a0 + a1) / 2;
        const d = `M250 90 L${p(a0)} A60 60 0 ${a1 - a0 > 180 ? 1 : 0} 1 ${p(a1)} Z`;
        const lx = 250 + 38 * Math.cos(rad(mid));
        const ly = 90 + 38 * Math.sin(rad(mid));
        const out = <G key={n}><Path d={d} fill={c} stroke="#ffffff" strokeWidth={1.5} /><Txt x={lx} y={ly + 3} size={8.5} weight="700" fill="#ffffff">{`${Math.round((v / 60) * 360)}°`}</Txt></G>;
        a0 = a1;
        return out;
      })}
      <Txt x={250} y={170} size={9}>Walk 180°, Taxi 90°, Bike 60°, Car 30°</Txt>
    </G>
  );
}

// ---------- parallel lines and a transversal ----------
function ParallelArt() {
  const y1 = 50;
  const y2 = 120;
  const t = (y) => 110 + (y - 20) * 0.75;
  const arc = (x, y, a0, a1, c) => {
    const r = 15;
    const p = (a) => `${(x + r * Math.cos(rad(a))).toFixed(1)} ${(y + r * Math.sin(rad(a))).toFixed(1)}`;
    return <Path d={`M${p(a0)} A${r} ${r} 0 0 1 ${p(a1)}`} fill="none" stroke={c} strokeWidth={2} />;
  };
  const tang = (Math.atan2(70, 52.5) * 180) / Math.PI;
  return (
    <G>
      <Line x1={20} y1={y1} x2={320} y2={y1} stroke={O} strokeWidth={1.4} />
      <Line x1={20} y1={y2} x2={320} y2={y2} stroke={O} strokeWidth={1.4} />
      {[y1, y2].map((y) => (
        <Path key={y} d={`M255 ${y - 5} L262 ${y} L255 ${y + 5}`} fill="none" stroke={O} strokeWidth={1.4} />
      ))}
      <Line x1={t(0)} y1={0} x2={t(138)} y2={138} stroke={BLUE} strokeWidth={1.4} />
      {arc(t(y1), y1, 0, tang, RED)}
      {arc(t(y2), y2, 0, tang, RED)}
      {arc(t(y2), y2, 180, 180 + tang, GREEN)}
      <Txt x={t(y1) + 24} y={y1 + 16} size={10} weight="700" fill={RED}>a</Txt>
      <Txt x={t(y2) + 24} y={y2 + 16} size={10} weight="700" fill={RED}>b</Txt>
      <Txt x={t(y2) - 24} y={y2 - 8} size={10} weight="700" fill={GREEN}>c</Txt>
      <Txt x={170} y={158} size={9}>a = b (corresponding)     a = c (alternate)</Txt>
    </G>
  );
}

// ---------- Pythagoras’ theorem ----------
function PythagorasArt() {
  // right angle at (120, 130): legs 3 (horizontal, 60 px) and 4 (vertical, 80 px)
  return (
    <G transform="translate(0, 16)">
      <Path d="M120 130 L180 130 L180 190 L120 190 Z" fill="#fde68a" stroke={O} strokeWidth={1} />
      <Path d="M120 130 L120 50 L40 50 L40 130 Z" fill="#bfdbfe" stroke={O} strokeWidth={1} />
      <Path d="M120 50 L180 130 L260 70 L200 -10 Z" fill="#fecaca" stroke={O} strokeWidth={1} />
      <Path d="M120 130 L180 130 L120 50 Z" fill="#ffffff" stroke={O} strokeWidth={1.6} />
      <Path d="M120 120 L130 120 L130 130" fill="none" stroke={O} strokeWidth={1.1} />
      <Txt x={150} y={164} size={11} weight="700">9</Txt>
      <Txt x={80} y={94} size={11} weight="700">16</Txt>
      <Txt x={190} y={64} size={11} weight="700">25</Txt>
      <Txt x={150} y={126} size={10}>3</Txt>
      <Txt x={125} y={106} size={10} anchor="start">4</Txt>
      <Txt x={146} y={98} size={10}>5</Txt>
    </G>
  );
}

// ---------- a prism and a pyramid ----------
function PrismPyramidArt() {
  return (
    <G>
      {/* triangular prism */}
      <Path d="M20 120 L80 120 L50 70 Z" fill={SHADE} stroke={O} strokeWidth={1.3} />
      <Path d="M80 120 L150 100 L120 50 L50 70" fill="none" stroke={O} strokeWidth={1.3} />
      <Path d="M20 120 L90 100 L150 100 M90 100 L120 50" fill="none" stroke={O} strokeWidth={1} strokeDasharray="3 3" />
      <Txt x={85} y={145} size={9.5} weight="700">triangular prism</Txt>
      {/* square-based pyramid */}
      <Path d="M200 120 L270 120 L300 100" fill="none" stroke={O} strokeWidth={1.3} />
      <Path d="M200 120 L230 100 L300 100" fill="none" stroke={O} strokeWidth={1} strokeDasharray="3 3" />
      <Path d="M250 30 L200 120 M250 30 L270 120 M250 30 L300 100" fill="none" stroke={O} strokeWidth={1.3} />
      <Path d="M250 30 L230 100" fill="none" stroke={O} strokeWidth={1} strokeDasharray="3 3" />
      <Line x1={250} y1={30} x2={250} y2={110} stroke={RED} strokeWidth={1} strokeDasharray="2 2" />
      <Circle cx={250} cy={30} r={3} fill={O} />
      <Txt x={258} y={28} size={8.5} anchor="start">apex</Txt>
      <Txt x={256} y={90} size={9} weight="700" fill={RED}>h</Txt>
      <Txt x={250} y={145} size={9.5} weight="700">square-based pyramid (h = height)</Txt>
    </G>
  );
}

// ---------- the probability scale ----------
function ProbabilityArt() {
  const px = (p) => 30 + p * 280;
  const marks = [[0, '0', 'impossible'], [0.25, '¼', 'unlikely'], [0.5, '½', 'even chance'], [0.75, '¾', 'likely'], [1, '1', 'certain']];
  return (
    <G>
      <Rect x={px(0)} y={52} width={280} height={12} fill="#e4eef8" stroke={O} strokeWidth={1} />
      {marks.map(([p, t, w]) => (
        <G key={t}>
          <Line x1={px(p)} y1={46} x2={px(p)} y2={70} stroke={O} strokeWidth={1.3} />
          <Txt x={px(p)} y={40} size={11} weight="700">{t}</Txt>
          <Txt x={px(p)} y={86} size={9}>{w}</Txt>
        </G>
      ))}
      <Txt x={px(0)} y={110} size={8.5}>snow in Douala</Txt>
      <Txt x={px(0.5)} y={110} size={8.5}>a coin lands heads</Txt>
      <Txt x={px(1)} y={110} size={8.5}>the sun rises</Txt>
    </G>
  );
}

export const MATHS = {
  'place-value': { title: 'Place value of the digits in 52 708.36', w: 330, h: 110, art: PlaceValueArt, labels: [] },
  'number-line': { title: 'The number line: −2 + 5 = 3', w: 340, h: 128, art: NumberLineArt, labels: [] },
  'factor-tree': { title: 'A factor tree for 60', w: 330, h: 210, art: FactorTreeArt, labels: [['Prime factors\nare circled', 30, 120, 98, 74]] },
  'fraction-bars': { title: 'Equivalent fractions: 1/2 = 2/4 = 4/8', w: 320, h: 158, art: FractionBarsArt, labels: [] },
  'lines-notation': { title: 'A line, a line segment and a half-line', w: 310, h: 150, art: LinesArt, labels: [['Midpoint M:\nAM = MB', 300, 92, 172, 82]] },
  'angle-types': { title: 'Types of angles', w: 340, h: 108, art: AnglesArt, labels: [] },
  'triangle-types': { title: 'Types of triangles (equal marks show equal sides)', w: 345, h: 150, art: TrianglesArt, labels: [] },
  'cartesian-plane': { title: 'Points on the Cartesian plane', w: 330, h: 240, art: CartesianArt, labels: [] },
  'cuboid-net': { title: 'A cuboid and its net', w: 360, h: 130, art: CuboidArt, labels: [] },
  'bar-pie-chart': { title: 'How 60 pupils travel to school: a bar chart and a pie chart', w: 330, h: 176, art: ChartsArt, labels: [] },
  'parallel-transversal': { title: 'Angles formed by a transversal crossing two parallel lines', w: 330, h: 164, art: ParallelArt, labels: [] },
  pythagoras: { title: 'Pythagoras’ theorem: 3² + 4² = 5²', w: 270, h: 222, art: PythagorasArt, labels: [['Hypotenuse, the\nlongest side', 276, 168, 158, 112]] },
  'prism-pyramid': { title: 'A triangular prism and a square-based pyramid', w: 320, h: 152, art: PrismPyramidArt, labels: [['cross-section', 46, 36, 46, 104]] },
  'probability-scale': { title: 'The probability scale', w: 340, h: 118, art: ProbabilityArt, labels: [] },
};
