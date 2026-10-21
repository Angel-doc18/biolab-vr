// A Level Pure Mathematics figures, Lower Sixth (part 2): chords closing in on
// a tangent, the standard derivatives, a tangent and a normal, stationary
// points with a table of variations, a sketched rational curve, a family of
// antiderivatives, the area under y = x², the techniques of integration, the
// vector product, the sine and cosine rules, a parametric parabola, and a
// matrix transforming the unit square. Graphs are calculated and drawn to scale.
import { G, Line, Path, Rect } from 'react-native-svg';
import { Txt } from './Diagram';
import { columnsSpec } from './charts';
import { AM, Arrow, Axes, Dot, Matrix, RightAngle, curve, frame, path, rad, ticks } from './aMaths';

const { O, GREY, BLUE, RED, GREEN, AMBER, PURPLE, SHADE, PINK, CREAM } = AM;

// ---------- chords PQ closing in on the tangent at P ----------
const HF = frame({ left: 30, top: 16, ux: 52, uy: 20, x0: -0.5, x1: 3.5, y0: -1, y1: 10 });
const CHORDS = [
  [3, BLUE, 'Q₁', 'Q₁: h = 2, m = 4'],
  [2, PURPLE, 'Q₂', 'Q₂: h = 1, m = 3'],
  [1.5, AMBER, 'Q₃', 'Q₃: h = 0.5, m = 2.5'],
];
function TangentChordArt() {
  const { X, Y } = HF;
  return (
    <G>
      <Axes f={HF} xs={ticks([1, 2, 3])} ys={ticks([2, 4, 6, 8])} />
      <Path d={curve(HF, (x) => x * x, -0.5, 3.5)} stroke={O} strokeWidth={2} fill="none" />
      <Path d={curve(HF, (x) => 2 * x - 1, 0, 3.4, 10)} stroke={RED} strokeWidth={2} fill="none" />
      {CHORDS.map(([q, c, name]) => (
        <G key={name}>
          <Line x1={X(1)} y1={Y(1)} x2={X(q)} y2={Y(q * q)} stroke={c} strokeWidth={1.6} />
          <Dot x={X(q)} y={Y(q * q)} c={c} />
        </G>
      ))}
      <Dot x={X(1)} y={Y(1)} c={RED} r={3.4} />
      <Txt x={X(1) + 8} y={Y(1) + 12} size={9} weight="700" anchor="start" fill={RED}>
        P(1, 1)
      </Txt>
      <Txt x={246} y={34} size={9} weight="700" anchor="start">
        y = x²
      </Txt>
      <Txt x={246} y={52} size={8} anchor="start" fill={GREY}>
        chord PQ: m = 2 + h
      </Txt>
      {CHORDS.map(([, c, , t], i) => (
        <Txt key={t} x={246} y={72 + i * 16} size={8} weight="700" anchor="start" fill={c}>
          {t}
        </Txt>
      ))}
      <Txt x={246} y={126} size={8} weight="700" anchor="start" fill={RED}>
        tangent: m = 2
      </Txt>
      <Txt x={246} y={144} size={8} anchor="start" fill={GREY}>
        as h → 0, m → 2
      </Txt>
    </G>
  );
}

// ---------- a tangent and a normal ----------
const NF = frame({ left: 26, top: 16, ux: 40, x0: -2.2, x1: 2.6, y0: -3.2, y1: 3 });
function TangentNormalArt() {
  const { X, Y } = NF;
  const r2 = Math.SQRT1_2;
  return (
    <G>
      <Axes f={NF} xs={ticks([-2, -1, 1, 2])} ys={ticks([-3, -2, -1, 1, 2])} />
      <Path d={curve(NF, (x) => x ** 3 - 2 * x, -2.2, 2.6)} stroke={BLUE} strokeWidth={2} fill="none" />
      <Path d={curve(NF, (x) => x - 2, -1, 2.6, 10)} stroke={RED} strokeWidth={1.8} fill="none" />
      <Path d={curve(NF, (x) => -x, -2.2, 2.6, 10)} stroke={GREEN} strokeWidth={1.8} fill="none" />
      <RightAngle x={X(1)} y={Y(-1)} u={[r2, -r2]} v={[-r2, -r2]} s={8} />
      <Dot x={X(1)} y={Y(-1)} />
      <Txt x={X(1.75)} y={Y(2.6)} size={9} weight="700" anchor="end" fill={BLUE}>
        y = x³ − 2x
      </Txt>
      <Txt x={X(1.6)} y={Y(-0.9)} size={8} weight="700" anchor="start" fill={RED}>
        tangent
      </Txt>
      <Txt x={X(-1.9)} y={Y(2.6)} size={8} weight="700" anchor="start" fill={GREEN}>
        normal
      </Txt>
      <Txt x={130} y={290} size={8.5} fill={GREY}>
        At P(1, −1): tangent y = x − 2, normal y = −x
      </Txt>
    </G>
  );
}

// ---------- stationary points and a table of variations ----------
const SF = frame({ left: 30, top: 16, ux: 36, uy: 5, x0: -2.6, x1: 5.2, y0: -25, y1: 18 });
const cub = (x) => x ** 3 - 3 * x * x - 9 * x + 5;
function TableArrow({ x, up }) {
  return <Arrow x1={x - 9} y1={up ? 297 : 285} x2={x + 9} y2={up ? 285 : 297} c={O} w={1.2} size={5} />;
}
function StationaryArt() {
  const { X, Y } = SF;
  return (
    <G>
      <Axes f={SF} grid={0} xs={ticks([-2, -1, 1, 2, 3, 4, 5])} ys={ticks([-20, -10])} />
      {[-1, 3].map((x) => (
        <Line key={x} x1={X(x)} y1={Y(cub(x))} x2={X(x)} y2={Y(0)} stroke={GREY} strokeWidth={1} strokeDasharray="3 3" />
      ))}
      <Path d={curve(SF, cub, -2.6, 5.2)} stroke={BLUE} strokeWidth={2} fill="none" />
      <Dot x={X(-1)} y={Y(10)} c={RED} />
      <Dot x={X(3)} y={Y(-22)} c={GREEN} />
      <Dot x={X(1)} y={Y(-6)} c={PURPLE} />
      <Txt x={X(-1)} y={Y(10) - 8} size={9} weight="700" fill={RED}>
        maximum (−1, 10)
      </Txt>
      <Txt x={X(3)} y={Y(-22) + 14} size={9} weight="700" fill={GREEN}>
        minimum (3, −22)
      </Txt>
      <Line x1={X(-0.1)} y1={Y(-14.2)} x2={X(1) - 3} y2={Y(-6) + 3} stroke={PURPLE} strokeWidth={0.9} strokeDasharray="2 2" />
      <Txt x={X(-2.4)} y={Y(-15)} size={8} weight="700" anchor="start" fill={PURPLE}>
        point of inflexion
      </Txt>
      <Txt x={X(-2.4)} y={Y(-15) + 12} size={8} weight="700" anchor="start" fill={PURPLE}>
        (1, −6)
      </Txt>
      <Txt x={X(3.4)} y={Y(15)} size={8.5} anchor="end" fill={BLUE}>
        f(x) = x³ − 3x² − 9x + 5
      </Txt>
      <Rect x={6} y={244} width={318} height={60} fill="#ffffff" stroke={O} strokeWidth={1} />
      <Line x1={6} y1={262} x2={324} y2={262} stroke={O} strokeWidth={0.8} />
      <Line x1={6} y1={280} x2={324} y2={280} stroke={O} strokeWidth={0.8} />
      <Line x1={52} y1={244} x2={52} y2={304} stroke={O} strokeWidth={0.8} />
      <Txt x={12} y={257} size={9} weight="700" anchor="start">
        x
      </Txt>
      <Txt x={12} y={275} size={9} weight="700" anchor="start">
        f′(x)
      </Txt>
      <Txt x={12} y={296} size={9} weight="700" anchor="start">
        f(x)
      </Txt>
      <Txt x={X(-1)} y={257} size={9} weight="700">
        −1
      </Txt>
      <Txt x={X(3)} y={257} size={9} weight="700">
        3
      </Txt>
      {[[X(-1.5), '+', GREEN], [X(-1), '0', GREY], [X(1), '−', RED], [X(3), '0', GREY], [X(4.3), '+', GREEN]].map(([x, t, c]) => (
        <Txt key={`${x}`} x={x} y={276} size={11} weight="700" fill={c}>
          {t}
        </Txt>
      ))}
      <TableArrow x={X(-1.5)} up />
      <Txt x={X(-1)} y={290} size={9} weight="700" fill={RED}>
        10
      </Txt>
      <TableArrow x={X(1)} />
      <Txt x={X(3)} y={300} size={9} weight="700" fill={GREEN}>
        −22
      </Txt>
      <TableArrow x={X(4.3)} up />
    </G>
  );
}

// ---------- sketching y = x/(x² + 1) ----------
const KF = frame({ left: 20, top: 16, ux: 30, uy: 120, x0: -5, x1: 5, y0: -0.7, y1: 0.7 });
const rat = (x) => x / (x * x + 1);
function CurveSketchArt() {
  const { X, Y } = KF;
  return (
    <G>
      <Axes f={KF} grid={0} xs={ticks([-4, -2, 2, 4])} ys={[[0.5, '½'], [-0.5, '−½']]} />
      <Line x1={X(1)} y1={Y(0.5)} x2={X(1)} y2={Y(0)} stroke={GREY} strokeWidth={1} strokeDasharray="3 3" />
      <Line x1={X(-1)} y1={Y(-0.5)} x2={X(-1)} y2={Y(0)} stroke={GREY} strokeWidth={1} strokeDasharray="3 3" />
      <Path d={curve(KF, rat, -5, 5)} stroke={BLUE} strokeWidth={2} fill="none" />
      <Dot x={X(1)} y={Y(0.5)} c={RED} />
      <Dot x={X(-1)} y={Y(-0.5)} c={GREEN} />
      <Txt x={X(1) + 8} y={Y(0.5) - 4} size={9} weight="700" anchor="start" fill={RED}>
        maximum (1, ½)
      </Txt>
      <Txt x={X(-1) - 8} y={Y(-0.5) + 12} size={9} weight="700" anchor="end" fill={GREEN}>
        minimum (−1, −½)
      </Txt>
      <Txt x={X(-4.8)} y={Y(0.55)} size={9} weight="700" anchor="start" fill={BLUE}>
        y = x/(x² + 1)
      </Txt>
      <Txt x={X(4.9)} y={Y(0.1)} size={8} anchor="end" fill={GREY}>
        y → 0 as x → ±∞
      </Txt>
      <Rect x={6} y={196} width={328} height={60} fill="#ffffff" stroke={O} strokeWidth={1} />
      <Line x1={6} y1={214} x2={334} y2={214} stroke={O} strokeWidth={0.8} />
      <Line x1={6} y1={232} x2={334} y2={232} stroke={O} strokeWidth={0.8} />
      <Line x1={52} y1={196} x2={52} y2={256} stroke={O} strokeWidth={0.8} />
      <Txt x={12} y={209} size={9} weight="700" anchor="start">
        x
      </Txt>
      <Txt x={12} y={227} size={9} weight="700" anchor="start">
        f′(x)
      </Txt>
      <Txt x={12} y={248} size={9} weight="700" anchor="start">
        f(x)
      </Txt>
      <Txt x={X(-1)} y={209} size={9} weight="700">
        −1
      </Txt>
      <Txt x={X(1)} y={209} size={9} weight="700">
        1
      </Txt>
      {[[X(-3), '−', RED], [X(-1), '0', GREY], [X(0), '+', GREEN], [X(1), '0', GREY], [X(3), '−', RED]].map(([x, t, c]) => (
        <Txt key={`${x}`} x={x} y={228} size={11} weight="700" fill={c}>
          {t}
        </Txt>
      ))}
      <Arrow x1={X(-3) - 12} y1={237} x2={X(-3) + 12} y2={249} c={O} w={1.2} size={5} />
      <Txt x={X(-1)} y={252} size={9} weight="700" fill={GREEN}>
        −½
      </Txt>
      <Arrow x1={X(0) - 12} y1={249} x2={X(0) + 12} y2={237} c={O} w={1.2} size={5} />
      <Txt x={X(1)} y={242} size={9} weight="700" fill={RED}>
        ½
      </Txt>
      <Arrow x1={X(3) - 12} y1={237} x2={X(3) + 12} y2={249} c={O} w={1.2} size={5} />
    </G>
  );
}

// ---------- a family of antiderivatives ----------
const FF = frame({ left: 30, top: 16, ux: 70, uy: 16, x0: -1.2, x1: 2.7, y0: -2, y1: 12 });
const g0 = (x) => x ** 3 - 2 * x * x;
function FamilyArt() {
  const { X, Y } = FF;
  const slope = 3 * 1.5 * 1.5 - 4 * 1.5;
  return (
    <G>
      <Axes f={FF} grid={0} xs={ticks([-1, 1, 2])} ys={ticks([2, 4, 6, 8, 10])} />
      {[1, 3, 5, 7].map((c) => (
        <G key={c}>
          <Path d={curve(FF, (x) => g0(x) + c, -1.2, 2.7)} stroke={c === 5 ? RED : GREY} strokeWidth={c === 5 ? 2.4 : 1.4} fill="none" />
          <Line x1={X(1.15)} y1={Y(g0(1.5) + c - 0.35 * slope)} x2={X(1.85)} y2={Y(g0(1.5) + c + 0.35 * slope)} stroke={AMBER} strokeWidth={1.6} />
          <Txt x={X(2.7) + 4} y={Y(Math.min(g0(2.7) + c, 11.8)) + 4} size={8.5} weight="700" anchor="start" fill={c === 5 ? RED : GREY}>
            {`c = ${c}`}
          </Txt>
        </G>
      ))}
      <Dot x={X(2)} y={Y(5)} c={RED} />
      <Txt x={X(2) - 8} y={Y(5) + 4} size={9} weight="700" anchor="end" fill={RED}>
        (2, 5)
      </Txt>
      <Txt x={170} y={256} size={8.5} fill={GREY}>
        y = x³ − 2x² + c: every curve has gradient 3x² − 4x
      </Txt>
      <Txt x={170} y={270} size={8.5} fill={GREY}>
        (so their tangents at x = 1.5 are parallel)
      </Txt>
    </G>
  );
}

// ---------- the area under y = x² from 1 to 3 ----------
const UF = frame({ left: 30, top: 16, ux: 70, uy: 18, x0: -0.3, x1: 3.6, y0: -0.8, y1: 11 });
function AreaArt() {
  const { X, Y } = UF;
  const region = [[X(1), Y(0)]];
  for (let x = 1; x <= 3.0001; x += 0.05) region.push([X(x), Y(x * x)]);
  region.push([X(3), Y(0)]);
  const strips = Array.from({ length: 8 }, (_, i) => 1 + i * 0.25);
  return (
    <G>
      <Path d={`${path(region)} Z`} fill={SHADE} />
      {strips.map((x) => (
        <Rect key={x} x={X(x)} y={Y(x * x)} width={0.25 * 70} height={Y(0) - Y(x * x)} fill="none" stroke={BLUE} strokeWidth={0.8} />
      ))}
      <Axes f={UF} grid={0} xs={ticks([1, 2, 3])} ys={ticks([2, 4, 6, 8, 10])} />
      <Path d={curve(UF, (x) => x * x, -0.3, 3.3)} stroke={O} strokeWidth={2} fill="none" />
      <Txt x={X(3)} y={Y(10.6)} size={9} weight="700" anchor="end">
        y = x²
      </Txt>
      <Txt x={X(0.1)} y={Y(9.3)} size={9} weight="700" anchor="start" fill={BLUE}>
        area = ∫ (1 to 3) x² dx
      </Txt>
      <Txt x={X(0.1)} y={Y(9.3) + 15} size={9} weight="700" anchor="start" fill={BLUE}>
        = [x³/3] (1 to 3) = 26/3
      </Txt>
      <Txt x={X(0.1)} y={Y(9.3) + 30} size={8.5} anchor="start" fill={GREY}>
        strips: Σ y δx → ∫ y dx
      </Txt>
    </G>
  );
}

// ---------- the vector product ----------
function CrossArt() {
  const o = [40, 160];
  const a = [o[0] + 110, o[1]];
  const b = [o[0] + 48, o[1] - 34];
  const ab = [a[0] + 48, a[1] - 34];
  const top = [o[0], o[1] - 120];
  const bAng = Math.atan2(o[1] - b[1], b[0] - o[0]);
  const arc = `M${o[0] + 24} ${o[1]} A24 24 0 0 0 ${o[0] + 24 * Math.cos(bAng)} ${o[1] - 24 * Math.sin(bAng)}`;
  const text = [
    ['a × b is perpendicular', O, true],
    ['to both a and b', O, true],
    ['|a × b| = |a||b| sin θ', BLUE],
    ['= area of the parallelogram', BLUE],
    ['triangle: ½|a × b|', BLUE],
    ['b × a = −(a × b)', RED],
    ['i × j = k, j × k = i, k × i = j', GREY],
  ];
  return (
    <G>
      <Path d={path([o, a, ab, b]) + ' Z'} fill={SHADE} stroke={BLUE} strokeWidth={1} />
      <Line x1={a[0]} y1={a[1]} x2={b[0]} y2={b[1]} stroke={BLUE} strokeWidth={1} strokeDasharray="3 3" />
      <Arrow x1={o[0]} y1={o[1]} x2={a[0]} y2={a[1]} c={O} w={2.2} />
      <Arrow x1={o[0]} y1={o[1]} x2={b[0]} y2={b[1]} c={O} w={2.2} />
      <Arrow x1={o[0]} y1={o[1]} x2={top[0]} y2={top[1]} c={RED} w={2.4} size={7} />
      <RightAngle x={o[0]} y={o[1]} u={[1, 0]} v={[0, -1]} s={9} />
      <Path d={arc} stroke={O} strokeWidth={1} fill="none" />
      <Txt x={o[0] + 34} y={o[1] - 6} size={9} weight="700">
        θ
      </Txt>
      <Txt x={a[0] + 4} y={a[1] + 14} size={10} weight="700" anchor="start">
        a
      </Txt>
      <Txt x={b[0] - 4} y={b[1] - 6} size={10} weight="700" anchor="end">
        b
      </Txt>
      <Txt x={top[0] + 8} y={top[1] + 8} size={10} weight="700" anchor="start" fill={RED}>
        a × b
      </Txt>
      <Txt x={o[0] - 6} y={o[1] + 12} size={9} anchor="end">
        O
      </Txt>
      {text.map(([t, c, b2], i) => (
        <Txt key={t} x={214} y={34 + i * 17 + (i > 1 ? 6 : 0) + (i > 4 ? 6 : 0)} size={8} weight={b2 ? '700' : '500'} anchor="start" fill={c}>
          {t}
        </Txt>
      ))}
    </G>
  );
}

// ---------- the sine and cosine rules ----------
function SineCosineArt() {
  const k = 26;
  const A = [30, 170];
  const B = [A[0] + 8 * k, A[1]];
  const C = [A[0] + 2.5 * k, A[1] - 4.33 * k];
  const arc = (p, a1, a2, r) => `M${p[0] + r * Math.cos(rad(a1))} ${p[1] - r * Math.sin(rad(a1))} A${r} ${r} 0 0 0 ${p[0] + r * Math.cos(rad(a2))} ${p[1] - r * Math.sin(rad(a2))}`;
  const lines = [
    ['sine rule: a/sin A = b/sin B = c/sin C', O],
    ['cosine rule: a² = b² + c² − 2bc cos A', O],
    ['area = ½bc sin A = ½ × 5 × 8 × sin 60° = 10√3', BLUE],
  ];
  return (
    <G>
      <Path d={path([A, B, C]) + ' Z'} fill={CREAM} stroke={O} strokeWidth={1.6} />
      <Path d={arc(A, 0, 60, 22)} stroke={RED} strokeWidth={1.3} fill="none" />
      <Path d={arc(B, 141.79, 180, 22)} stroke={GREY} strokeWidth={1} fill="none" />
      <Txt x={A[0] + 32} y={A[1] - 8} size={9} weight="700" fill={RED}>
        60°
      </Txt>
      <Txt x={A[0] - 6} y={A[1] + 4} size={10} weight="700" anchor="end">
        A
      </Txt>
      <Txt x={B[0] + 6} y={B[1] + 4} size={10} weight="700" anchor="start">
        B
      </Txt>
      <Txt x={C[0]} y={C[1] - 7} size={10} weight="700">
        C
      </Txt>
      <Txt x={(A[0] + B[0]) / 2} y={A[1] + 15} size={9.5} weight="700" fill={BLUE}>
        c = 8
      </Txt>
      <Txt x={(A[0] + C[0]) / 2 - 8} y={(A[1] + C[1]) / 2} size={9.5} weight="700" anchor="end" fill={BLUE}>
        b = 5
      </Txt>
      <Txt x={(B[0] + C[0]) / 2 + 8} y={(B[1] + C[1]) / 2} size={9.5} weight="700" anchor="start" fill={BLUE}>
        a = 7
      </Txt>
      <Txt x={180} y={50} size={8.5} weight="700" anchor="start">
        cos A = (25 + 64 − 49)/80
      </Txt>
      <Txt x={180} y={66} size={8.5} weight="700" anchor="start">
        = 0.5, so A = 60°
      </Txt>
      <Txt x={180} y={84} size={8.5} anchor="start" fill={GREY}>
        B = 38.2°, C = 81.8°
      </Txt>
      {lines.map(([t, c], i) => (
        <Txt key={t} x={170} y={200 + i * 16} size={8.5} weight="700" fill={c}>
          {t}
        </Txt>
      ))}
    </G>
  );
}

// ---------- a parametric parabola ----------
const PF = frame({ left: 30, top: 16, ux: 24, x0: -0.6, x1: 5.4, y0: -4.8, y1: 4.8 });
function LocusArt() {
  const { X, Y } = PF;
  const pts = [];
  for (let t = -2.2; t <= 2.2001; t += 0.05) pts.push([X(t * t), Y(2 * t)]);
  const marks = [-2, -1, 0, 1, 2];
  const table = [
    ['t', '−2', '−1', '0', '1', '2'],
    ['x', '4', '1', '0', '1', '4'],
    ['y', '−4', '−2', '0', '2', '4'],
  ];
  return (
    <G>
      <Axes f={PF} xs={ticks([2, 4])} ys={ticks([-4, -2, 2, 4])} />
      <Path d={path(pts)} stroke={BLUE} strokeWidth={2} fill="none" />
      {marks.map((t) => (
        <G key={t}>
          <Dot x={X(t * t)} y={Y(2 * t)} c={RED} />
          {Math.abs(t) === 2 && (
            <Txt x={X(t * t) - 5} y={Y(2 * t) + (t > 0 ? -6 : 13)} size={8} weight="700" anchor="end" fill={RED}>
              {`t = ${t < 0 ? '−' : ''}${Math.abs(t)}`}
            </Txt>
          )}
        </G>
      ))}
      <Txt x={X(0) + 5} y={Y(0) + 13} size={8} weight="700" anchor="start" fill={RED}>
        t = 0
      </Txt>
      <Txt x={X(1) + 6} y={Y(2) + 12} size={8} weight="700" anchor="start" fill={RED}>
        t = 1
      </Txt>
      <Txt x={X(1) + 6} y={Y(-2) - 6} size={8} weight="700" anchor="start" fill={RED}>
        t = −1
      </Txt>
      {['x = t², y = 2t', 't = y/2, so x = y²/4', 'y² = 4x: a parabola'].map((t, i) => (
        <Txt key={t} x={196} y={40 + i * 18} size={8.5} weight={i === 2 ? '700' : '500'} anchor="start" fill={i === 2 ? BLUE : O}>
          {t}
        </Txt>
      ))}
      {table.map((r, i) =>
        r.map((v, j) => (
          <Txt key={`${i}${j}`} x={204 + j * 24} y={124 + i * 18} size={8.5} weight={j === 0 ? '700' : '500'}>
            {v}
          </Txt>
        )),
      )}
      <Line x1={192} y1={129} x2={336} y2={129} stroke={O} strokeWidth={0.8} />
      <Line x1={216} y1={110} x2={216} y2={164} stroke={O} strokeWidth={0.8} />
    </G>
  );
}

// ---------- a matrix transforming the unit square ----------
const MF = frame({ left: 30, top: 16, ux: 40, x0: -0.5, x1: 4.6, y0: -0.5, y1: 3.6 });
function TransformArt() {
  const { X, Y } = MF;
  const sq = [[0, 0], [1, 0], [1, 1], [0, 1]].map(([x, y]) => [X(x), Y(y)]);
  const im = [[0, 0], [3, 1], [4, 3], [1, 2]].map(([x, y]) => [X(x), Y(y)]);
  return (
    <G>
      <Axes f={MF} xs={ticks([1, 2, 3, 4])} ys={ticks([1, 2, 3])} />
      <Path d={path(im) + ' Z'} fill={PINK} fillOpacity={0.7} stroke={RED} strokeWidth={1.6} />
      <Path d={path(sq) + ' Z'} fill={SHADE} stroke={BLUE} strokeWidth={1.6} />
      <Arrow x1={X(0)} y1={Y(0)} x2={X(3)} y2={Y(1)} c={GREEN} w={1.8} />
      <Arrow x1={X(0)} y1={Y(0)} x2={X(1)} y2={Y(2)} c={AMBER} w={1.8} />
      <Txt x={X(4) + 4} y={Y(3) - 6} size={8.5} anchor="start" fill={RED}>
        (4, 3)
      </Txt>
      <Txt x={X(0.5)} y={Y(0.5) + 3} size={8.5} weight="700" fill={BLUE}>
        1
      </Txt>
      <Txt x={X(2)} y={Y(1.6) + 3} size={9} weight="700" fill={RED}>
        area 5
      </Txt>
      <Txt x={262} y={30} size={9} weight="700" anchor="start">
        M =
      </Txt>
      <Matrix x={286} y={14} rows={[['3', '1'], ['1', '2']]} cw={18} />
      <Txt x={262} y={72} size={8.5} weight="700" anchor="start" fill={GREEN}>
        (1, 0) → (3, 1)
      </Txt>
      <Txt x={262} y={88} size={8.5} weight="700" anchor="start" fill={AMBER}>
        (0, 1) → (1, 2)
      </Txt>
      <Txt x={262} y={108} size={8.5} anchor="start">
        det M = 6 − 1 = 5
      </Txt>
      <Txt x={262} y={126} size={8.5} weight="700" anchor="start" fill={RED}>
        area × |det M|
      </Txt>
    </G>
  );
}

export const A_MATHS_2 = {
  'am-tangent-chord': {
    title: 'Chords closing in on the tangent',
    w: 340,
    h: 262,
    art: TangentChordArt,
    labels: [],
    facts: [
      'On y = x², the chord from P(1, 1) to the point where x = 1 + h has gradient [(1 + h)² − 1]/h = 2 + h.',
      'For h = 2, 1 and 0.5 the chord gradients are 4, 3 and 2.5.',
      'As h → 0 the chord turns into the tangent at P, whose gradient is the limit 2: the derivative 2x at x = 1.',
    ],
  },
  'am-derivatives': columnsSpec(
    'Standard derivatives and the rules',
    [
      { head: 'Functions', items: ['xⁿ → nxⁿ⁻¹', 'eˣ → eˣ', 'ln x → 1/x', 'sin x → cos x', 'cos x → −sin x', 'tan x → sec²x'] },
      { head: 'Rules', items: ['uv: uv′ + vu′', 'u/v: (vu′ − uv′)/v²', 'chain: f′(g(x)) g′(x)', 'ln f: f′/f'] },
      { head: 'Inverse trig', items: ['sin⁻¹x → 1/√(1 − x²)', 'cos⁻¹x → −1/√(1 − x²)', 'tan⁻¹x → 1/(1 + x²)'] },
    ],
    { colW: 116 },
  ),
  'am-tangent-normal': {
    title: 'The tangent and the normal at a point',
    w: 262,
    h: 298,
    art: TangentNormalArt,
    labels: [],
    facts: [
      'For y = x³ − 2x, dy/dx = 3x² − 2, which is 1 at P(1, −1).',
      'The tangent at P has gradient 1: y = x − 2.',
      'The normal is perpendicular to it, with gradient −1: y = −x, which passes through the origin.',
    ],
  },
  'am-stationary': {
    title: 'Stationary points and a table of variations',
    w: 330,
    h: 308,
    art: StationaryArt,
    labels: [],
    facts: [
      'f(x) = x³ − 3x² − 9x + 5 has f′(x) = 3(x − 3)(x + 1), which is zero at x = −1 and x = 3.',
      'f′ changes from + to − at x = −1, a maximum (−1, 10), and from − to + at x = 3, a minimum (3, −22).',
      'f″(x) = 6x − 6 changes sign at x = 1: the point of inflexion (1, −6).',
      'The table of variations shows f rising, falling between −1 and 3, then rising again.',
    ],
  },
  'am-curve-sketch': {
    title: 'Sketching y = x/(x² + 1)',
    w: 340,
    h: 260,
    art: CurveSketchArt,
    labels: [],
    facts: [
      'f′(x) = (1 − x²)/(x² + 1)², which is zero at x = ±1.',
      'f has a minimum (−1, −½) and a maximum (1, ½); it is odd, so its graph has rotational symmetry about the origin.',
      'As x → ±∞, f(x) → 0, so the x-axis is a horizontal asymptote.',
    ],
  },
  'am-integral-family': {
    title: 'A family of curves with the same gradient',
    w: 340,
    h: 278,
    art: FamilyArt,
    labels: [],
    facts: [
      'Integrating dy/dx = 3x² − 4x gives y = x³ − 2x² + c, one curve for every value of c.',
      'The curves are vertical translations of one another, so at any x their tangents are parallel.',
      'The boundary condition "through (2, 5)" picks out c = 5.',
    ],
  },
  'am-area-under': {
    title: 'The area under y = x² from x = 1 to x = 3',
    w: 320,
    h: 246,
    art: AreaArt,
    labels: [],
    facts: [
      'The area between y = x², the x-axis, x = 1 and x = 3 is ∫ (1 to 3) x² dx.',
      'Thin strips of width δx and height y have total area Σ y δx, which tends to the integral as δx → 0.',
      '[x³/3] from 1 to 3 = 9 − ⅓ = 26/3 ≈ 8.67 square units.',
    ],
  },
  'am-integration-methods': columnsSpec(
    'Three techniques of integration',
    [
      { head: 'The f′/f form', items: ['∫ f′(x)/f(x) dx', '= ln|f(x)| + c', '2x/(x² + 1) gives', 'ln(x² + 1) + c'] },
      { head: 'Substitution', items: ['u = g(x)', 'du = g′(x) dx', 'change the limits too', 'x(x² + 3)⁵ gives', '(x² + 3)⁶/12 + c'] },
      { head: 'By parts', items: ['∫uv′ dx = uv − ∫vu′ dx', 'u: the factor that', 'simplifies when', 'differentiated', 'x eˣ gives eˣ(x − 1) + c'] },
    ],
    { colW: 120 },
  ),
  'am-cross-product': {
    title: 'The vector product a × b',
    w: 360,
    h: 182,
    art: CrossArt,
    labels: [],
    facts: [
      'a × b is perpendicular to both a and b, pointing by the right-hand rule.',
      'Its magnitude |a||b| sin θ is the area of the parallelogram with sides a and b; half of it is the area of the triangle.',
      'Reversing the order reverses the direction: b × a = −(a × b).',
    ],
  },
  'am-sine-cosine': {
    title: 'Solving a triangle: a = 7, b = 5, c = 8',
    w: 340,
    h: 240,
    art: SineCosineArt,
    labels: [],
    facts: [
      'By the cosine rule, cos A = (b² + c² − a²)/(2bc) = (25 + 64 − 49)/80 = 0.5, so A = 60°.',
      'Then cos B = (49 + 64 − 25)/112 = 0.786, so B = 38.2°, and C = 180° − 60° − 38.2° = 81.8°.',
      'The area is ½bc sin A = ½ × 5 × 8 × sin 60° = 10√3 ≈ 17.3 square units.',
    ],
  },
  'am-locus': {
    title: 'A parametric curve: x = t², y = 2t',
    w: 340,
    h: 262,
    art: LocusArt,
    labels: [],
    facts: [
      'Each value of the parameter t gives one point: t = −2, −1, 0, 1, 2 give (4, −4), (1, −2), (0, 0), (1, 2), (4, 4).',
      'Eliminating t: t = y/2, so x = y²/4, that is y² = 4x.',
      'The curve is a parabola, symmetric about the x-axis.',
    ],
  },
  'am-matrix-transform': {
    title: 'The unit square transformed by M = [3 1; 1 2]',
    w: 340,
    h: 206,
    art: TransformArt,
    labels: [],
    facts: [
      'The columns of M are the images of (1, 0) and (0, 1): (3, 1) and (1, 2).',
      'The unit square becomes the parallelogram with vertices O, (3, 1), (4, 3) and (1, 2).',
      'det M = 3 × 2 − 1 × 1 = 5, so the area is multiplied by 5.',
    ],
  },
};
