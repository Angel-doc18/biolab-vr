// A Level Further Mechanics figures (0775): the envelope of trajectories, a
// projectile on an inclined plane, work by a variable force, elastic energy,
// a banked track, centres of mass by integration, toppling on a slope,
// terminal velocity, a vertical circle, a projectile with air resistance,
// oblique impacts with a sphere and with a wall, simple harmonic motion, a
// mass on a spring, moments of inertia, the parallel axes theorem, rolling,
// the stability of a bead on a hoop, the catenary and a force field. Paths,
// graphs and angles are calculated and drawn to scale unless marked otherwise.
import { Circle, Ellipse, G, Line, Path, Rect } from 'react-native-svg';
import { Txt } from './Diagram';
import { AM, Arrow, Axes, Dot, curve, frame, path, rad, ticks } from './aMaths';

const { O, GREY, BLUE, RED, GREEN, AMBER, SHADE, PINK, CREAM } = AM;
const arcPath = (cx, cy, r, a1, a2) => `M${cx + r * Math.cos(rad(a1))} ${cy - r * Math.sin(rad(a1))} A${r} ${r} 0 0 0 ${cx + r * Math.cos(rad(a2))} ${cy - r * Math.sin(rad(a2))}`;
const pts = (f, fx, fy, a, b, n = 200) => path(Array.from({ length: n + 1 }, (_, i) => a + ((b - a) * i) / n).map((t) => [f.X(fx(t)), f.Y(fy(t))]));
const area = (f, fn, a, b, n = 120) => `${path([[f.X(a), f.Y(0)], ...Array.from({ length: n + 1 }, (_, i) => a + ((b - a) * i) / n).map((x) => [f.X(x), f.Y(fn(x))]), [f.X(b), f.Y(0)]])} Z`;

function Hatch({ x1, y1, x2, y2, side = 1 }) {
  const len = Math.hypot(x2 - x1, y2 - y1);
  const ux = (x2 - x1) / len;
  const uy = (y2 - y1) / len;
  const marks = [];
  for (let s = 4; s < len; s += 10) marks.push(s);
  return (
    <G>
      <Line x1={x1} y1={y1} x2={x2} y2={y2} stroke={O} strokeWidth={1.6} />
      {marks.map((s) => (
        <Line key={s} x1={x1 + ux * s} y1={y1 + uy * s} x2={x1 + ux * s + side * (uy * 6 - ux * 4)} y2={y1 + uy * s + side * (-ux * 6 - uy * 4)} stroke={O} strokeWidth={0.8} />
      ))}
    </G>
  );
}
// A coil spring from (x, y1) down to (x, y2).
function Coil({ x, y1, y2, n = 8, w = 9 }) {
  const step = (y2 - y1) / (n * 2 + 2);
  const p = [[x, y1], [x, y1 + step]];
  for (let i = 0; i < n * 2; i++) p.push([x + (i % 2 ? -w : w), y1 + step * (i + 1.5)]);
  p.push([x, y2 - step], [x, y2]);
  return <Path d={path(p)} stroke={O} strokeWidth={1.3} fill="none" />;
}

// ---------- the envelope of trajectories ----------
const EN = frame({ left: 34, top: 14, ux: 7, x0: 0, x1: 44, y0: 0, y1: 22 });
function EnvelopeArt() {
  const path_ = (deg) => {
    const t = Math.tan(rad(deg));
    const R = (400 * Math.sin(rad(2 * deg))) / 10;
    return curve(EN, (x) => x * t - (10 * x * x * (1 + t * t)) / 800, 0, R, 120);
  };
  return (
    <G>
      <Axes f={EN} grid={0} xs={ticks([10, 20, 30, 40])} ys={ticks([5, 10, 15, 20])} xName="x / m" yName="y / m" />
      {[15, 30, 45, 60, 75].map((d) => (
        <Path key={d} d={path_(d)} stroke={GREY} strokeWidth={1} fill="none" />
      ))}
      {[62.4, 37.1].map((d) => (
        <Path key={d} d={path_(d)} stroke={BLUE} strokeWidth={2} fill="none" />
      ))}
      <Path d={curve(EN, (x) => 20 - (x * x) / 80, 0, 40)} stroke={RED} strokeWidth={2} strokeDasharray="6 3" fill="none" />
      <Dot x={EN.X(30)} y={EN.Y(5)} c={BLUE} r={3.5} />
      <Line x1={EN.X(30)} y1={EN.Y(5)} x2={EN.X(33)} y2={EN.Y(14)} stroke={BLUE} strokeWidth={0.8} />
      <Txt x={EN.X(33) + 3} y={EN.Y(14) - 3} size={8.5} weight="700" anchor="start" fill={BLUE}>
        (30, 5): two paths
      </Txt>
      <Dot x={EN.X(30)} y={EN.Y(20)} c={RED} r={3.5} />
      <Txt x={EN.X(30) + 6} y={EN.Y(20) + 3} size={8.5} weight="700" anchor="start" fill={RED}>
        (30, 20): out of reach
      </Txt>
      <Txt x={EN.X(34)} y={EN.Y(10.5)} size={8.5} weight="700" anchor="start" fill={RED}>
        envelope
      </Txt>
      <Txt x={EN.X(34)} y={EN.Y(8.6)} size={8.5} anchor="start" fill={RED}>
        y = 20 − x²/80
      </Txt>
      <Txt x={190} y={208} size={9}>
        u = 20 m/s, g = 10 m/s²; paths at 15°, 30°, …, 75° and the two through (30, 5)
      </Txt>
    </G>
  );
}

// ---------- a projectile on an inclined plane ----------
const IP = frame({ left: 24, top: 16, ux: 10.5, x0: 0, x1: 28, y0: 0, y1: 17 });
function InclinedArt() {
  const { X, Y } = IP;
  const t30 = Math.tan(rad(30));
  const T = 2.309;
  const P = [11.547, 13.333];
  const foot = [14.434, 8.333];
  return (
    <G>
      <Line x1={X(0)} y1={Y(0)} x2={X(28)} y2={Y(0)} stroke={GREY} strokeWidth={1} />
      <Hatch x1={X(0)} y1={Y(0)} x2={X(28)} y2={Y(28 * t30)} side={-1} />
      <Path d={pts(IP, (t) => 10 * t, (t) => 17.32 * t - 5 * t * t, 0, T)} stroke={BLUE} strokeWidth={2} fill="none" />
      <Arrow x1={X(0)} y1={Y(0)} x2={X(5)} y2={Y(8.66)} c={RED} w={1.8} size={6} />
      <Txt x={X(5) - 8} y={Y(8.66) + 2} size={9} weight="700" anchor="end" fill={RED}>
        u = 20 m/s
      </Txt>
      <Path d={arcPath(X(0), Y(0), 34, 0, 30)} stroke={O} strokeWidth={1} fill="none" />
      <Txt x={X(0) + 40} y={Y(0) - 4} size={8.5} anchor="start">
        β = 30°
      </Txt>
      <Path d={arcPath(X(0), Y(0), 22, 30, 60)} stroke={RED} strokeWidth={1} fill="none" />
      <Txt x={X(0) + 18} y={Y(0) - 22} size={8.5} anchor="start" fill={RED}>
        θ
      </Txt>
      <Dot x={X(23.09)} y={Y(13.33)} c={BLUE} r={3.5} />
      <Line x1={X(P[0])} y1={Y(P[1])} x2={X(foot[0])} y2={Y(foot[1])} stroke={GREEN} strokeWidth={1.4} strokeDasharray="3 3" />
      <Txt x={(X(P[0]) + X(foot[0])) / 2 + 6} y={(Y(P[1]) + Y(foot[1])) / 2 + 2} size={8.5} weight="700" anchor="start" fill={GREEN}>
        5.77 m
      </Txt>
      <Txt x={X(23.09) + 6} y={Y(13.33) + 14} size={8.5} weight="700" anchor="start" fill={BLUE}>
        R = 26.7 m
      </Txt>
      <Txt x={170} y={214} size={9}>
        θ = 30° to the plane, the best angle 45° − β/2; time of flight 2.31 s
      </Txt>
    </G>
  );
}

// ---------- work done by a variable force ----------
const VF = frame({ left: 34, top: 14, ux: 45, uy: 15, x0: 0, x1: 6.4, y0: 0, y1: 10 });
function VariableForceArt() {
  const F = (x) => 6 * x - x * x;
  return (
    <G>
      <Path d={area(VF, F, 0, 3)} fill={SHADE} stroke="none" />
      <Axes f={VF} grid={0} xs={ticks([1, 2, 3, 4, 5, 6])} ys={ticks([3, 6, 9])} xName="x / m" yName="F / N" />
      <Path d={curve(VF, F, 0, 6)} stroke={BLUE} strokeWidth={2} fill="none" />
      <Txt x={VF.X(1.5)} y={VF.Y(2.2)} size={9} weight="700" fill={BLUE}>
        area = work
      </Txt>
      <Txt x={VF.X(1.5)} y={VF.Y(1.2)} size={9} weight="700" fill={BLUE}>
        = 18 J
      </Txt>
      <Txt x={VF.X(4.6)} y={VF.Y(8.6)} size={9} weight="700" anchor="start" fill={BLUE}>
        F = 6x − x²
      </Txt>
      <Txt x={170} y={202} size={9}>
        W = ∫ (0 to 3) (6x − x²) dx = 27 − 9 = 18 J
      </Txt>
    </G>
  );
}

// ---------- elastic potential energy ----------
const EE = frame({ left: 40, top: 14, ux: 1000, uy: 12, x0: 0, x1: 0.26, y0: 0, y1: 13 });
function ElasticArt() {
  const { X, Y } = EE;
  return (
    <G>
      <Path d={`M${X(0)} ${Y(0)} L${X(0.2)} ${Y(10)} L${X(0.2)} ${Y(0)} Z`} fill={PINK} stroke="none" />
      <Axes f={EE} grid={0} xs={[[0.1, '0.1'], [0.2, '0.2']]} ys={ticks([5, 10])} xName="x / m" yName="T / N" />
      <Line x1={X(0)} y1={Y(0)} x2={X(0.25)} y2={Y(12.5)} stroke={RED} strokeWidth={2} />
      <Line x1={X(0.2)} y1={Y(10)} x2={X(0)} y2={Y(10)} stroke={GREY} strokeWidth={1} strokeDasharray="3 3" />
      <Txt x={X(0.25) - 4} y={Y(12.5) - 4} size={9} weight="700" anchor="end" fill={RED}>
        T = λx/l
      </Txt>
      <Txt x={X(0.14)} y={Y(2.2)} size={9} weight="700" fill={RED}>
        EPE = area = 1 J
      </Txt>
      <Txt x={170} y={202} size={9}>
        λ = 40 N, l = 0.8 m, x = 0.2 m: EPE = λx²/(2l) = ½ × 0.2 × 10 = 1 J
      </Txt>
    </G>
  );
}

// ---------- a car on a banked track ----------
function BankedArt() {
  const th = 20;
  const u = [Math.cos(rad(th)), -Math.sin(rad(th))];
  const n = [-Math.sin(rad(th)), -Math.cos(rad(th))];
  const A = [40, 170];
  const B = [A[0] + 250 * u[0], A[1] + 250 * u[1]];
  const S = [A[0] + 140 * u[0], A[1] + 140 * u[1]];
  const pt = (base, a, la, b = [0, 0], lb = 0) => [base[0] + a[0] * la + b[0] * lb, base[1] + a[1] * la + b[1] * lb];
  const car = [pt(S, u, -26), pt(S, u, 26), pt(S, u, 26, n, 22), pt(S, u, -26, n, 22)];
  const C = pt(S, n, 11);
  const R = pt(C, n, 60);
  const F = pt(C, u, -46);
  return (
    <G>
      <Path d={`M${A[0]} ${A[1]} L${B[0]} ${A[1]} L${B[0]} ${B[1]} Z`} fill={CREAM} stroke={O} strokeWidth={1.4} />
      <Path d={arcPath(A[0], A[1], 36, 0, th)} stroke={O} strokeWidth={1} fill="none" />
      <Txt x={A[0] + 44} y={A[1] - 4} size={9} weight="700" anchor="start">
        θ
      </Txt>
      <Path d={`${path(car)} Z`} fill={SHADE} stroke={O} strokeWidth={1.2} />
      <Arrow x1={C[0]} y1={C[1]} x2={R[0]} y2={R[1]} c={GREEN} w={2} />
      <Arrow x1={C[0]} y1={C[1]} x2={F[0]} y2={F[1]} c={RED} w={2} />
      <Arrow x1={C[0]} y1={C[1]} x2={C[0]} y2={C[1] + 66} c={O} w={2} />
      <Arrow x1={C[0] - 30} y1={C[1] - 70} x2={C[0] - 100} y2={C[1] - 70} c={BLUE} w={1.6} size={6} />
      <Txt x={C[0] - 104} y={C[1] - 76} size={8.5} weight="700" anchor="start" fill={BLUE}>
        towards the centre
      </Txt>
      <Txt x={R[0] - 4} y={R[1]} size={9.5} weight="700" anchor="end" fill={GREEN}>
        R
      </Txt>
      <Txt x={F[0] - 4} y={F[1] + 12} size={9} weight="700" anchor="end" fill={RED}>
        F = μR
      </Txt>
      <Txt x={C[0] + 6} y={C[1] + 66} size={9} weight="700" anchor="start">
        mg
      </Txt>
      <Txt x={165} y={196} size={9}>
        greatest speed: friction down the slope
      </Txt>
      <Txt x={165} y={210} size={9}>
        R cos θ − F sin θ = mg, R sin θ + F cos θ = mv²/r
      </Txt>
    </G>
  );
}

// ---------- centres of mass by integration ----------
function ComArt() {
  const r = 66;
  const A = [100, 130];
  const B = [262, 130];
  const gA = (4 * r) / (3 * Math.PI);
  const gB = (3 * r) / 8;
  return (
    <G>
      <Path d={`M${A[0] - r} ${A[1]} A${r} ${r} 0 0 1 ${A[0] + r} ${A[1]} Z`} fill={SHADE} stroke={BLUE} strokeWidth={2} />
      <Line x1={A[0]} y1={A[1]} x2={A[0]} y2={A[1] - r - 6} stroke={GREY} strokeWidth={1} strokeDasharray="3 3" />
      <Dot x={A[0]} y={A[1] - gA} c={RED} r={3.5} />
      <Txt x={A[0] + 6} y={A[1] - gA + 3} size={9} weight="700" anchor="start" fill={RED}>
        G
      </Txt>
      <Arrow x1={A[0] - 14} y1={A[1]} x2={A[0] - 14} y2={A[1] - gA} c={RED} w={1} size={4} />
      <Txt x={A[0] - 18} y={A[1] - gA / 2 + 3} size={8.5} weight="700" anchor="end" fill={RED}>
        4r/(3π)
      </Txt>
      <Dot x={A[0]} y={A[1]} />
      <Txt x={A[0]} y={A[1] + 16} size={9} weight="700">
        semicircular lamina
      </Txt>
      <Path d={`M${B[0] - r} ${B[1]} A${r} ${r} 0 0 1 ${B[0] + r} ${B[1]}`} fill={PINK} stroke={BLUE} strokeWidth={2} />
      <Ellipse cx={B[0]} cy={B[1]} rx={r} ry={12} fill={PINK} stroke={BLUE} strokeWidth={1.4} />
      <Line x1={B[0]} y1={B[1]} x2={B[0]} y2={B[1] - r - 6} stroke={GREY} strokeWidth={1} strokeDasharray="3 3" />
      <Dot x={B[0]} y={B[1] - gB} c={RED} r={3.5} />
      <Txt x={B[0] - 6} y={B[1] - gB + 3} size={9} weight="700" anchor="end" fill={RED}>
        G
      </Txt>
      <Arrow x1={B[0] + 14} y1={B[1]} x2={B[0] + 14} y2={B[1] - gB} c={RED} w={1} size={4} />
      <Txt x={B[0] + 18} y={B[1] - gB / 2 + 2} size={8.5} weight="700" anchor="start" fill={RED}>
        3r/8
      </Txt>
      <Txt x={B[0]} y={B[1] + 28} size={9} weight="700">
        solid hemisphere
      </Txt>
    </G>
  );
}

// ---------- about to topple on a slope ----------
function ToppleArt() {
  const a = Math.atan(0.5);
  const u = [Math.cos(a), -Math.sin(a)];
  const n = [-Math.sin(a), -Math.cos(a)];
  const A = [30, 190];
  const S = [A[0] + 150 * u[0], A[1] + 150 * u[1]];
  const s = 22;
  const pt = (base, p, lp, q = [0, 0], lq = 0) => [base[0] + p[0] * lp + q[0] * lq, base[1] + p[1] * lp + q[1] * lq];
  const box = [pt(S, u, -s), pt(S, u, s), pt(S, u, s, n, 4 * s), pt(S, u, -s, n, 4 * s)];
  const Gp = pt(S, n, 2 * s);
  const edge = pt(S, u, -s);
  const end = [A[0] + 260 * u[0], A[1] + 260 * u[1]];
  return (
    <G>
      <Path d={`M${A[0]} ${A[1]} L${end[0]} ${A[1]} L${end[0]} ${end[1]} Z`} fill={CREAM} stroke={O} strokeWidth={1.4} />
      <Path d={arcPath(A[0], A[1], 36, 0, (a * 180) / Math.PI)} stroke={O} strokeWidth={1} fill="none" />
      <Txt x={A[0] + 44} y={A[1] - 4} size={9} weight="700" anchor="start">
        α
      </Txt>
      <Path d={`${path(box)} Z`} fill={SHADE} stroke={O} strokeWidth={1.4} />
      <Line x1={Gp[0]} y1={Gp[1] - 20} x2={Gp[0]} y2={edge[1] + 20} stroke={RED} strokeWidth={1.4} strokeDasharray="4 3" />
      <Dot x={Gp[0]} y={Gp[1]} c={RED} r={3.5} />
      <Txt x={Gp[0] + 6} y={Gp[1] - 4} size={9} weight="700" anchor="start" fill={RED}>
        G
      </Txt>
      <Dot x={edge[0]} y={edge[1]} c={RED} />
      <Txt x={edge[0] - 6} y={edge[1] + 4} size={8.5} weight="700" anchor="end" fill={RED}>
        lower edge
      </Txt>
      <Txt x={box[2][0] + 10} y={box[2][1] + 4} size={8.5} anchor="start">
        width w, height h = 2w
      </Txt>
      <Txt x={170} y={206} size={9}>
        about to topple: the vertical through G
      </Txt>
      <Txt x={170} y={220} size={9}>
        passes through the lower edge, so tan α = w/h
      </Txt>
    </G>
  );
}

// ---------- terminal velocity ----------
const TV = frame({ left: 34, top: 14, ux: 14, uy: 3.5, x0: 0, x1: 20.5, y0: 0, y1: 46 });
function TerminalArt() {
  const v = (t) => 39.2 * (1 - Math.exp(-t / 4));
  return (
    <G>
      <Axes f={TV} grid={0} xs={ticks([4, 8, 12, 16, 20])} ys={ticks([10, 20, 30, 40])} xName="t / s" yName="v / m s⁻¹" />
      <Line x1={TV.X(0)} y1={TV.Y(39.2)} x2={TV.X(20.5)} y2={TV.Y(39.2)} stroke={RED} strokeWidth={1.2} strokeDasharray="5 3" />
      <Path d={curve(TV, (t) => 9.8 * t, 0, 4.7)} stroke={GREY} strokeWidth={1.2} strokeDasharray="4 3" fill="none" />
      <Path d={curve(TV, v, 0, 20.5)} stroke={BLUE} strokeWidth={2.2} fill="none" />
      <Dot x={TV.X(4)} y={TV.Y(v(4))} c={BLUE} r={3.5} />
      <Txt x={TV.X(4) + 6} y={TV.Y(v(4)) + 12} size={8.5} weight="700" anchor="start" fill={BLUE}>
        24.8 m/s after 4 s
      </Txt>
      <Txt x={TV.X(20.3)} y={TV.Y(39.2) - 5} size={8.5} weight="700" anchor="end" fill={RED}>
        terminal velocity mg/k = 39.2 m/s
      </Txt>
      <Txt x={TV.X(4.9)} y={TV.Y(44)} size={8.5} anchor="start" fill={GREY}>
        no resistance: v = 9.8t
      </Txt>
      <Txt x={175} y={202} size={9}>
        m = 2 kg, resistance 0.5v N: v = 39.2(1 − e^(−t/4))
      </Txt>
    </G>
  );
}

// ---------- a vertical circle ----------
function VerticalCircleArt() {
  const c = [130, 112];
  const a = 70;
  const th = 120;
  // θ is measured from the lowest point, turning anticlockwise on the page.
  const pos = [c[0] + a * Math.sin(rad(th)), c[1] + a * Math.cos(rad(th))];
  const tang = [Math.cos(rad(th)), -Math.sin(rad(th))];
  const toC = [(c[0] - pos[0]) / a, (c[1] - pos[1]) / a];
  return (
    <G>
      <Circle cx={c[0]} cy={c[1]} r={a} stroke={GREY} strokeWidth={1.2} strokeDasharray="4 3" fill="none" />
      <Dot x={c[0]} y={c[1]} />
      <Line x1={c[0]} y1={c[1]} x2={c[0]} y2={c[1] + a} stroke={GREY} strokeWidth={1} />
      <Line x1={c[0]} y1={c[1]} x2={pos[0]} y2={pos[1]} stroke={O} strokeWidth={1.4} />
      <Path d={`M${c[0]} ${c[1] + 22} A22 22 0 0 0 ${c[0] + 22 * Math.sin(rad(th))} ${c[1] + 22 * Math.cos(rad(th))}`} stroke={RED} strokeWidth={1.2} fill="none" />
      <Txt x={c[0] + 26} y={c[1] + 12} size={9} weight="700" anchor="start" fill={RED}>
        θ
      </Txt>
      <Dot x={c[0]} y={c[1] + a} c={BLUE} r={3.5} />
      <Arrow x1={c[0]} y1={c[1] + a} x2={c[0] + 40} y2={c[1] + a} c={BLUE} w={1.6} size={5} />
      <Txt x={c[0] + 44} y={c[1] + a + 4} size={9} weight="700" anchor="start" fill={BLUE}>
        u
      </Txt>
      <Circle cx={pos[0]} cy={pos[1]} r={6} fill={SHADE} stroke={O} strokeWidth={1.2} />
      <Arrow x1={pos[0]} y1={pos[1]} x2={pos[0] + toC[0] * 34} y2={pos[1] + toC[1] * 34} c={GREEN} w={2} size={5} />
      <Txt x={pos[0] + toC[0] * 34 - 4} y={pos[1] + toC[1] * 34 - 4} size={9} weight="700" anchor="end" fill={GREEN}>
        T
      </Txt>
      <Arrow x1={pos[0]} y1={pos[1]} x2={pos[0]} y2={pos[1] + 40} c={O} w={2} size={5} />
      <Txt x={pos[0] + 6} y={pos[1] + 40} size={9} weight="700" anchor="start">
        mg
      </Txt>
      <Arrow x1={pos[0]} y1={pos[1]} x2={pos[0] + tang[0] * 38} y2={pos[1] + tang[1] * 38} c={BLUE} w={1.8} size={5} />
      <Txt x={pos[0] + tang[0] * 38 - 4} y={pos[1] + tang[1] * 38 - 2} size={9} weight="700" anchor="end" fill={BLUE}>
        v
      </Txt>
      <Line x1={pos[0]} y1={pos[1]} x2={262} y2={pos[1]} stroke={GREY} strokeWidth={1} strokeDasharray="2 3" />
      <Line x1={c[0]} y1={c[1] + a} x2={262} y2={c[1] + a} stroke={GREY} strokeWidth={1} strokeDasharray="2 3" />
      <Arrow x1={258} y1={c[1] + a} x2={258} y2={pos[1]} c={AMBER} w={1.2} size={5} />
      <Txt x={264} y={(pos[1] + c[1] + a) / 2 + 3} size={8.5} weight="700" anchor="start" fill={AMBER}>
        a(1 − cos θ)
      </Txt>
      <Txt x={170} y={214} size={9}>
        v² = u² − 2ga(1 − cos θ); T − mg cos θ = mv²/a
      </Txt>
      <Txt x={170} y={228} size={9}>
        on a string: complete circle if u² ≥ 5ga; on a rod if u² &gt; 4ga
      </Txt>
    </G>
  );
}

// ---------- a projectile with air resistance ----------
const RPF = frame({ left: 30, top: 14, ux: 3.7, uy: 11, x0: 0, x1: 82, y0: 0, y1: 13 });
function ResistedArt() {
  const k = 0.1;
  const g = 9.8;
  const us = 15;
  const uc = 25.98;
  const x = (t) => (uc / k) * (1 - Math.exp(-k * t));
  const y = (t) => (1 / k) * (us + g / k) * (1 - Math.exp(-k * t)) - (g * t) / k;
  let T = 2.5;
  while (y(T) > 0) T += 0.005;
  return (
    <G>
      <Axes f={RPF} grid={0} xs={ticks([20, 40, 60, 80])} ys={ticks([5, 10])} xName="x / m" yName="y / m" />
      <Path d={curve(RPF, (X) => X * Math.tan(rad(30)) - (g * X * X) / (2 * 900 * 0.75), 0, 79.5)} stroke={GREY} strokeWidth={1.4} strokeDasharray="5 3" fill="none" />
      <Path d={pts(RPF, x, y, 0, T)} stroke={RED} strokeWidth={2.2} fill="none" />
      <Txt x={RPF.X(52)} y={RPF.Y(11)} size={8.5} weight="700" anchor="start" fill={GREY}>
        no resistance: range 79.5 m
      </Txt>
      <Txt x={RPF.X(38)} y={RPF.Y(2.3)} size={8.5} weight="700" anchor="end" fill={RED}>
        {`k = 0.1 s⁻¹: range ${x(T).toFixed(1)} m`}
      </Txt>
      <Txt x={175} y={190} size={9}>
        u = 30 m/s at 30°: the resisted path is lower and comes down more steeply
      </Txt>
    </G>
  );
}

// ---------- oblique impact of smooth spheres ----------
function ObliqueArt() {
  const r = 24;
  const A = [130, 120];
  const B = [A[0] + 2 * r, A[1]];
  const k = 12;
  const dir = [Math.cos(rad(60)), -Math.sin(rad(60))];
  return (
    <G>
      <Line x1={40} y1={A[1]} x2={300} y2={A[1]} stroke={GREY} strokeWidth={1} strokeDasharray="5 3" />
      <Txt x={298} y={A[1] - 6} size={8.5} anchor="end" fill={GREY}>
        line of centres
      </Txt>
      <Arrow x1={A[0] - 5 * k * dir[0]} y1={A[1] - 5 * k * dir[1]} x2={A[0] - r * dir[0] * 0.2} y2={A[1] - r * dir[1] * 0.2} c={GREY} w={1.6} size={6} dash="4 3" />
      <Txt x={A[0] - 5 * k * dir[0] - 6} y={A[1] - 5 * k * dir[1] - 4} size={8.5} weight="700" anchor="end" fill={GREY}>
        before: 5 m/s at 60°
      </Txt>
      <Circle cx={A[0]} cy={A[1]} r={r} fill={SHADE} stroke={O} strokeWidth={1.4} />
      <Circle cx={B[0]} cy={B[1]} r={r} fill={PINK} stroke={O} strokeWidth={1.4} />
      <Txt x={A[0]} y={A[1] + 4} size={9} weight="700">
        A 2 kg
      </Txt>
      <Txt x={B[0]} y={B[1] + 4} size={9} weight="700">
        B 3 kg
      </Txt>
      <Arrow x1={A[0]} y1={A[1] - r} x2={A[0] + 0.25 * k} y2={A[1] - r - 4.33 * k} c={BLUE} w={2} size={6} />
      <Txt x={A[0] + 6} y={A[1] - r - 4.33 * k + 4} size={8.5} weight="700" anchor="start" fill={BLUE}>
        A after: 0.25 along, 4.33 across
      </Txt>
      <Arrow x1={B[0] + r} y1={B[1]} x2={B[0] + r + 1.5 * k * 2} y2={B[1]} c={RED} w={2} size={6} />
      <Txt x={B[0] + r + 2} y={B[1] + 14} size={8.5} weight="700" anchor="start" fill={RED}>
        B after: 1.5 m/s
      </Txt>
      <Txt x={170} y={196} size={9}>
        across the line: unchanged; along it: momentum and restitution (e = ½)
      </Txt>
    </G>
  );
}

// ---------- a ball bouncing off a smooth surface ----------
function WallArt() {
  const P = [170, 160];
  const L1 = 120;
  const L2 = 108;
  const S = [P[0] - L1 * Math.cos(rad(30)), P[1] - L1 * Math.sin(rad(30))];
  const E = [P[0] + L2 * Math.cos(rad(16.1)), P[1] - L2 * Math.sin(rad(16.1))];
  return (
    <G>
      <Hatch x1={30} y1={P[1]} x2={310} y2={P[1]} side={-1} />
      <Arrow x1={S[0]} y1={S[1]} x2={P[0]} y2={P[1]} c={BLUE} w={2} size={6} />
      <Arrow x1={P[0]} y1={P[1]} x2={E[0]} y2={E[1]} c={RED} w={2} size={6} />
      <Circle cx={S[0]} cy={S[1]} r={7} fill={SHADE} stroke={O} strokeWidth={1.2} />
      <Path d={arcPath(P[0], P[1], 34, 150, 180)} stroke={BLUE} strokeWidth={1} fill="none" />
      <Txt x={P[0] - 42} y={P[1] - 6} size={9} weight="700" anchor="end" fill={BLUE}>
        30°
      </Txt>
      <Path d={arcPath(P[0], P[1], 46, 0, 16.1)} stroke={RED} strokeWidth={1} fill="none" />
      <Txt x={P[0] + 52} y={P[1] - 4} size={9} weight="700" anchor="start" fill={RED}>
        16.1°
      </Txt>
      <Txt x={(S[0] + P[0]) / 2 - 6} y={(S[1] + P[1]) / 2 + 16} size={9} weight="700" anchor="end" fill={BLUE}>
        10 m/s
      </Txt>
      <Txt x={(E[0] + P[0]) / 2 + 4} y={(E[1] + P[1]) / 2 - 10} size={9} weight="700" anchor="start" fill={RED}>
        9.01 m/s
      </Txt>
      <Txt x={170} y={190} size={9}>
        e = 0.5: along the surface 8.66 m/s, unchanged; across it 5 m/s becomes 2.5 m/s
      </Txt>
      <Txt x={170} y={204} size={9}>
        tan 16.1° = 0.5 tan 30°
      </Txt>
    </G>
  );
}

// ---------- simple harmonic motion ----------
const SA = frame({ left: 30, top: 18, ux: 25, uy: 150, x0: 0, x1: 8.4, y0: -0.4, y1: 0.4 });
const SB = frame({ left: 278, top: 22, ux: 140, uy: 100, x0: -0.4, x1: 0.4, y0: -0.55, y1: 0.55 });
function ShmArt() {
  const w = Math.PI / 2;
  return (
    <G>
      <Axes f={SA} grid={0} xs={ticks([2, 4, 6, 8])} ys={[[0.3, '0.3'], [-0.3, '−0.3']]} xName="t / s" yName="x / m" origin={false} xLab={SA.Y(-0.4) + 12} />
      <Path d={curve(SA, (t) => 0.3 * Math.sin(w * t), 0, 8.4, 300)} stroke={BLUE} strokeWidth={2} fill="none" />
      <Txt x={SA.X(4.2)} y={SA.Y(-0.4) + 28} size={9} weight="700" fill={BLUE}>
        x = 0.3 sin(πt/2): period 4 s
      </Txt>
      <Axes f={SB} grid={0} xs={[]} ys={[]} xName="x" yName="v" origin={false} />
      <Ellipse cx={SB.X(0)} cy={SB.Y(0)} rx={0.3 * 140} ry={0.471 * 100} stroke={RED} strokeWidth={2} fill="none" />
      <Txt x={SB.X(0)} y={SB.Y(-0.55) + 26} size={9} weight="700" fill={RED}>
        v² = ω²(a² − x²)
      </Txt>
      <Txt x={SB.X(0) + 4} y={SB.Y(0.471) - 4} size={8.5} anchor="start" fill={RED}>
        aω
      </Txt>
    </G>
  );
}

// ---------- a mass on a vertical spring ----------
function SpringShmArt() {
  const top = 26;
  const cols = [[70, 70, 'natural length l'], [170, 100, 'equilibrium: ke = mg'], [270, 130, 'x below: mẍ = −kx']];
  return (
    <G>
      <Hatch x1={30} y1={top} x2={320} y2={top} side={1} />
      {cols.map(([x, len, t]) => (
        <G key={x}>
          <Coil x={x} y1={top} y2={top + len} />
          {x !== 70 && <Rect x={x - 16} y={top + len} width={32} height={22} fill={SHADE} stroke={O} strokeWidth={1.2} />}
          <Txt x={x} y={top + 176} size={8.5} weight="700">
            {t}
          </Txt>
        </G>
      ))}
      <Line x1={50} y1={top + 70} x2={300} y2={top + 70} stroke={GREY} strokeWidth={1} strokeDasharray="3 3" />
      <Line x1={150} y1={top + 100} x2={300} y2={top + 100} stroke={GREEN} strokeWidth={1} strokeDasharray="3 3" />
      <Arrow x1={200} y1={top + 70} x2={200} y2={top + 100} c={AMBER} w={1.2} size={4} />
      <Txt x={204} y={top + 89} size={8.5} weight="700" anchor="start" fill={AMBER}>
        e
      </Txt>
      <Arrow x1={300} y1={top + 100} x2={300} y2={top + 130} c={RED} w={1.2} size={4} />
      <Txt x={304} y={top + 119} size={8.5} weight="700" anchor="start" fill={RED}>
        x
      </Txt>
      <Txt x={175} y={top + 192} size={9}>
        SHM about the equilibrium position, period 2π√(m/k)
      </Txt>
    </G>
  );
}

// ---------- elements for moments of inertia ----------
function InertiaArt() {
  const c = [96, 104];
  const a = 70;
  const r1 = 40;
  const r2 = 48;
  return (
    <G>
      <Circle cx={c[0]} cy={c[1]} r={a} fill={SHADE} stroke={BLUE} strokeWidth={2} />
      <Path d={`M${c[0] + r2} ${c[1]} A${r2} ${r2} 0 1 0 ${c[0] - r2} ${c[1]} A${r2} ${r2} 0 1 0 ${c[0] + r2} ${c[1]} M${c[0] + r1} ${c[1]} A${r1} ${r1} 0 1 1 ${c[0] - r1} ${c[1]} A${r1} ${r1} 0 1 1 ${c[0] + r1} ${c[1]} Z`} fill={PINK} stroke={RED} strokeWidth={1} fillRule="evenodd" />
      <Dot x={c[0]} y={c[1]} />
      <Line x1={c[0]} y1={c[1]} x2={c[0] + a} y2={c[1]} stroke={O} strokeWidth={1} />
      <Txt x={c[0] + a / 2 + 18} y={c[1] - 4} size={8.5} weight="700">
        a
      </Txt>
      <Txt x={c[0]} y={c[1] + a + 18} size={9} weight="700">
        disc: rings of radius r → ½ma²
      </Txt>
      <Line x1={200} y1={104} x2={340} y2={104} stroke={BLUE} strokeWidth={6} />
      <Line x1={270} y1={60} x2={270} y2={148} stroke={GREY} strokeWidth={1} strokeDasharray="4 3" />
      <Rect x={306} y={98} width={8} height={12} fill={RED} />
      <Arrow x1={270} y1={124} x2={310} y2={124} c={RED} w={1} size={4} />
      <Txt x={290} y={138} size={8.5} weight="700" fill={RED}>
        x
      </Txt>
      <Txt x={270} y={174} size={9} weight="700">
        rod of length 2a: pieces δx → ma²/3
      </Txt>
    </G>
  );
}

// ---------- the parallel axes theorem ----------
function ParallelArt() {
  const c = [130, 104];
  const a = 72;
  const Q = [c[0], c[1] + a];
  return (
    <G>
      <Circle cx={c[0]} cy={c[1]} r={a} fill={SHADE} stroke={BLUE} strokeWidth={2} />
      <Line x1={c[0] - a - 12} y1={c[1]} x2={c[0] + a + 12} y2={c[1]} stroke={GREY} strokeWidth={1} strokeDasharray="4 3" />
      <Line x1={c[0]} y1={c[1] - a - 12} x2={c[0]} y2={c[1] + a + 12} stroke={GREY} strokeWidth={1} strokeDasharray="4 3" />
      <Txt x={c[0] + a + 14} y={c[1] + 4} size={8.5} anchor="start" fill={GREY}>
        x
      </Txt>
      <Txt x={c[0] + 5} y={c[1] - a - 6} size={8.5} anchor="start" fill={GREY}>
        y
      </Txt>
      <Dot x={c[0]} y={c[1]} c={RED} r={3.5} />
      <Txt x={c[0] - 6} y={c[1] - 6} size={9} weight="700" anchor="end" fill={RED}>
        G
      </Txt>
      <Dot x={Q[0]} y={Q[1]} c={GREEN} r={3.5} />
      <Txt x={Q[0] + 6} y={Q[1] + 12} size={9} weight="700" anchor="start" fill={GREEN}>
        Q
      </Txt>
      <Txt x={232} y={50} size={9} weight="700" anchor="start">
        Axes out of the page:
      </Txt>
      <Txt x={232} y={68} size={9} anchor="start" fill={RED}>
        through G: ½ma²
      </Txt>
      <Txt x={232} y={86} size={9} anchor="start" fill={GREEN}>
        through Q (d = a):
      </Txt>
      <Txt x={232} y={100} size={9} anchor="start" fill={GREEN}>
        ½ma² + ma² = 3ma²/2
      </Txt>
      <Txt x={232} y={126} size={9} weight="700" anchor="start">
        In the plane:
      </Txt>
      <Txt x={232} y={144} size={9} anchor="start" fill={GREY}>
        each diameter (x or y):
      </Txt>
      <Txt x={232} y={158} size={9} anchor="start" fill={GREY}>
        ½ × ½ma² = ¼ma²
      </Txt>
    </G>
  );
}

// ---------- rolling down a slope ----------
const RB = frame({ left: 222, top: 22, ux: 30, uy: 20, x0: 0, x1: 4.2, y0: 0, y1: 7 });
function RollingArt() {
  const th = 25;
  const u = [Math.cos(rad(th)), Math.sin(rad(th))];
  const n = [Math.sin(rad(th)), -Math.cos(rad(th))];
  const A = [20, 50];
  const end = [A[0] + 190 * u[0], A[1] + 190 * u[1]];
  const contact = [A[0] + 80 * u[0], A[1] + 80 * u[1]];
  const r = 20;
  const C = [contact[0] + n[0] * r, contact[1] + n[1] * r];
  const bars = [['hoop', 4.43, GREY], ['disc', 5.11, BLUE], ['sphere', 5.29, GREEN], ['sliding', 6.26, RED]];
  return (
    <G>
      <Path d={`M${A[0]} ${A[1]} L${end[0]} ${end[1]} L${A[0]} ${end[1]} Z`} fill={CREAM} stroke={O} strokeWidth={1.2} />
      <Circle cx={C[0]} cy={C[1]} r={r} fill={SHADE} stroke={O} strokeWidth={1.4} />
      <Dot x={C[0]} y={C[1]} />
      <Arrow x1={C[0]} y1={C[1]} x2={C[0] + u[0] * 40} y2={C[1] + u[1] * 40} c={BLUE} w={1.8} size={5} />
      <Txt x={C[0] + u[0] * 40 + 4} y={C[1] + u[1] * 40 + 4} size={9} weight="700" anchor="start" fill={BLUE}>
        v = aω
      </Txt>
      <Dot x={contact[0]} y={contact[1]} c={RED} />
      <Txt x={contact[0] - 6} y={contact[1] + 14} size={8.5} weight="700" anchor="end" fill={RED}>
        at rest
      </Txt>
      <Txt x={110} y={190} size={9}>
        mgh = ½mv² + ½Iω²
      </Txt>
      <Axes f={RB} grid={0} xs={[]} ys={ticks([2, 4, 6])} xName="" yName="v / m s⁻¹" origin={false} />
      {bars.map(([t, v, c], i) => (
        <G key={t}>
          <Rect x={RB.X(0.3 + i)} y={RB.Y(v)} width={20} height={RB.Y(0) - RB.Y(v)} fill={c} />
          <Txt x={RB.X(0.3 + i) + 10} y={RB.Y(v) - 4} size={8} weight="700">
            {v.toFixed(2)}
          </Txt>
          <Txt x={RB.X(0.3 + i) + 10} y={RB.Y(0) + 12} size={8}>
            {t}
          </Txt>
        </G>
      ))}
      <Txt x={RB.X(2.1)} y={RB.Y(0) + 30} size={8.5}>
        speeds after dropping 2 m
      </Txt>
    </G>
  );
}

// ---------- stability of a bead on a hoop ----------
const ST = frame({ left: 36, top: 14, ux: 0.85, uy: 45, x0: 0, x1: 365, y0: 0, y1: 3.2 });
function StabilityArt() {
  const V = (d) => {
    const s = Math.sin(rad(d / 2));
    return 6 * s * s - 8 * s + 3;
  };
  const marks = [[83.6, 'stable', GREEN], [276.4, 'stable', GREEN], [180, 'unstable', RED]];
  return (
    <G>
      <Axes f={ST} grid={0} xs={ticks([90, 180, 270, 360])} ys={ticks([1, 2, 3])} xName="θ°" yName="V/(Wa)" />
      <Path d={curve(ST, V, 0, 360, 360)} stroke={BLUE} strokeWidth={2.2} fill="none" />
      {marks.map(([d, t, c]) => (
        <G key={d}>
          <Dot x={ST.X(d)} y={ST.Y(V(d))} c={c} r={4} />
          <Txt x={ST.X(d)} y={ST.Y(V(d)) - 9} size={9} weight="700" fill={c}>
            {t}
          </Txt>
        </G>
      ))}
      <Txt x={ST.X(83.6)} y={ST.Y(V(83.6)) - 21} size={8.5} fill={GREEN}>
        θ ≈ 83.6°
      </Txt>
      <Txt x={190} y={200} size={9}>
        V = Wa(6s² − 8s + 3), s = sin(θ/2): minima stable, maximum unstable
      </Txt>
    </G>
  );
}

// ---------- the catenary ----------
const CT = frame({ left: 60, top: 14, ux: 10, x0: -11, x1: 11, y0: 0, y1: 16.5 });
function CatenaryArt() {
  const c = 8;
  const y = (x) => c * Math.cosh(x / c);
  const sag = y(10) - c;
  const X6 = 6;
  const slope = Math.sinh(X6 / c);
  const len = Math.hypot(1, slope);
  return (
    <G>
      <Axes f={CT} grid={0} xs={ticks([-10, -5, 5, 10])} ys={ticks([8, 15])} />
      <Path d={curve(CT, (x) => c + (sag / 100) * x * x, -10, 10)} stroke={GREY} strokeWidth={1.2} strokeDasharray="4 3" fill="none" />
      <Path d={curve(CT, y, -10, 10)} stroke={BLUE} strokeWidth={2.2} fill="none" />
      {[-10, 10].map((x) => (
        <Rect key={x} x={CT.X(x) - 3} y={CT.Y(y(10)) - 8} width={6} height={8} fill={O} />
      ))}
      <Arrow x1={CT.X(0)} y1={CT.Y(c)} x2={CT.X(-3.5)} y2={CT.Y(c)} c={RED} w={1.8} size={5} />
      <Txt x={CT.X(-3.6)} y={CT.Y(c) + 13} size={9} weight="700" anchor="start" fill={RED}>
        T₀
      </Txt>
      <Arrow x1={CT.X(X6)} y1={CT.Y(y(X6))} x2={CT.X(X6 + 3 / len)} y2={CT.Y(y(X6) + (3 * slope) / len)} c={RED} w={1.8} size={5} />
      <Txt x={CT.X(X6 + 3 / len) + 4} y={CT.Y(y(X6) + (3 * slope) / len) + 2} size={9} weight="700" anchor="start" fill={RED}>
        T at angle ψ
      </Txt>
      <Arrow x1={CT.X(3)} y1={CT.Y(y(3))} x2={CT.X(3)} y2={CT.Y(y(3) - 3.2)} c={O} w={1.6} size={5} />
      <Txt x={CT.X(3) + 5} y={CT.Y(y(3) - 2.6)} size={9} weight="700" anchor="start">
        ws
      </Txt>
      <Txt x={CT.X(0.8)} y={CT.Y(15)} size={8.5} weight="700" anchor="start" fill={BLUE}>
        y = 8 cosh(x/8)
      </Txt>
      <Txt x={CT.X(0.8)} y={CT.Y(13.7)} size={8.5} anchor="start" fill={GREY}>
        parabola, dashed
      </Txt>
      <Txt x={170} y={202} size={9}>
        T cos ψ = T₀ and T sin ψ = ws, so s = c tan ψ with c = T₀/w
      </Txt>
    </G>
  );
}

// ---------- a force field and two paths ----------
const FF = frame({ left: 40, top: 14, ux: 150, uy: 70, x0: -0.1, x1: 1.45, y0: -0.1, y1: 2.45 });
function FieldArt() {
  const { X, Y } = FF;
  const grid = [];
  for (const x of [0.25, 0.6, 0.95, 1.3]) for (const y of [0.4, 1.0, 1.6, 2.2]) grid.push([x, y]);
  const mag = (x, y) => Math.hypot(2 * x * y, x * x);
  const big = Math.max(...grid.map(([x, y]) => mag(x, y)));
  return (
    <G>
      <Axes f={FF} grid={0} xs={[[1, '1']]} ys={[[1, '1'], [2, '2']]} />
      {grid.map(([x, y]) => {
        const m = mag(x, y);
        const L = 8 + 18 * (m / big);
        const dx = (2 * x * y) / m;
        const dy = (x * x) / m;
        return <Arrow key={`${x}${y}`} x1={X(x)} y1={Y(y)} x2={X(x) + dx * L} y2={Y(y) - dy * L} c={AMBER} w={1.2} size={4} />;
      })}
      <Path d={curve(FF, (x) => 2 * x, 0, 1)} stroke={BLUE} strokeWidth={2.2} fill="none" />
      <Path d={curve(FF, (x) => 2 * x * x, 0, 1)} stroke={GREEN} strokeWidth={2.2} fill="none" />
      <Dot x={X(1)} y={Y(2)} c={RED} r={3.5} />
      <Txt x={X(1) + 6} y={Y(2) - 4} size={9} weight="700" anchor="start" fill={RED}>
        (1, 2)
      </Txt>
      <Txt x={X(0.55)} y={Y(1.35)} size={8.5} weight="700" anchor="end" fill={BLUE}>
        y = 2x
      </Txt>
      <Txt x={X(0.72)} y={Y(0.55)} size={8.5} weight="700" anchor="start" fill={GREEN}>
        y = 2x²
      </Txt>
      <Txt x={170} y={210} size={9}>
        F = 2xy i + x² j does work 2 along both paths: it is conservative
      </Txt>
    </G>
  );
}

export const A_FURTHER_MECH = {
  'am-envelope': {
    title: 'The envelope of all paths at 20 m/s',
    w: 370,
    h: 216,
    art: EnvelopeArt,
    labels: [],
    facts: [
      'Every path launched at 20 m/s touches the bounding parabola y = 20 − x²/80 and none goes beyond it.',
      'The point (30, 5) lies inside the envelope, so two paths reach it, at about 62.4° and 37.1°.',
      'The point (30, 20) lies outside the envelope, so no angle of projection reaches it.',
    ],
  },
  'am-inclined-projectile': {
    title: 'A projectile on a plane inclined at 30°',
    w: 340,
    h: 222,
    art: InclinedArt,
    labels: [],
    facts: [
      'Projected at 20 m/s at 30° to a plane inclined at 30°, the ball lands 26.7 m up the plane after 2.31 s.',
      'Its greatest distance from the plane is 5.77 m, half-way through the flight.',
      'This is the greatest range up the plane, since 30° = 45° − β/2.',
    ],
  },
  'am-variable-force': {
    title: 'Work done by a variable force',
    w: 340,
    h: 210,
    art: VariableForceArt,
    labels: [],
    facts: [
      'The force F = 6x − x² N changes with position.',
      'The work done from x = 0 to x = 3 m is the area under the graph, ∫ (6x − x²) dx = 18 J.',
      'By the work–energy principle, that 18 J becomes kinetic energy.',
    ],
  },
  'am-elastic-energy': {
    title: 'Elastic potential energy as an area',
    w: 340,
    h: 210,
    art: ElasticArt,
    labels: [],
    facts: [
      'The tension grows in proportion to the extension: T = λx/l.',
      'The work done in stretching is the triangle under the graph, λx²/(2l).',
      'With λ = 40 N, l = 0.8 m and x = 0.2 m, the string stores 1 J.',
    ],
  },
  'am-banked': {
    title: 'Forces on a car on a banked track',
    w: 330,
    h: 218,
    art: BankedArt,
    labels: [],
    facts: [
      'The normal reaction R is tilted towards the centre of the bend, so part of it supplies the central force.',
      'At the greatest speed, friction μR acts down the slope; at the least speed, up the slope.',
      'Vertically R cos θ − F sin θ = mg, and towards the centre R sin θ + F cos θ = mv²/r.',
    ],
  },
  'am-com-calculus': {
    title: 'Centres of mass of a semicircular lamina and a solid hemisphere',
    w: 340,
    h: 170,
    art: ComArt,
    labels: [],
    facts: [
      'A uniform semicircular lamina has its centre of mass on its axis of symmetry, 4r/(3π) from the centre.',
      'A uniform solid hemisphere has it on its axis, 3r/8 from the plane face.',
      'Both are found by integration: strips for the lamina, discs for the hemisphere.',
    ],
  },
  'am-topple': {
    title: 'A block about to topple on a slope',
    w: 330,
    h: 230,
    art: ToppleArt,
    labels: [],
    facts: [
      'The block is on the point of toppling when the vertical through G passes through its lower edge.',
      'For width w and height h this happens when tan α = w/h; here h = 2w, so α ≈ 26.6°.',
      'If friction gives way first (μ < w/h), the block slides before it can topple.',
    ],
  },
  'am-terminal': {
    title: 'Falling against a resistance kv',
    w: 350,
    h: 210,
    art: TerminalArt,
    labels: [],
    facts: [
      'A 2 kg body falling against 0.5v N speeds up less and less: v = 39.2(1 − e^(−t/4)).',
      'Its speed approaches the terminal velocity mg/k = 39.2 m/s, where the resistance balances the weight.',
      'Without resistance it would follow v = 9.8t and keep speeding up.',
    ],
  },
  'am-vertical-circle': {
    title: 'A particle on a string in a vertical circle',
    w: 340,
    h: 236,
    art: VerticalCircleArt,
    labels: [],
    facts: [
      'Energy gives the speed: after rising a(1 − cos θ), v² = u² − 2ga(1 − cos θ).',
      'Newton’s second law towards the centre gives the tension: T − mg cos θ = mv²/a.',
      'On a string the circle is completed if u² ≥ 5ga; on a rod, if u² > 4ga.',
    ],
  },
  'am-resisted-projectile': {
    title: 'A projectile with and without air resistance',
    w: 350,
    h: 198,
    art: ResistedArt,
    labels: [],
    facts: [
      'Without resistance the path is a parabola with range 79.5 m and greatest height 11.5 m.',
      'With a resistance mkv (k = 0.1 s⁻¹) it is lower, shorter, and comes down more steeply.',
      'Its horizontal distance could never exceed u cos α/k, however long it flew.',
    ],
  },
  'am-oblique-impact': {
    title: 'An oblique impact of two smooth spheres',
    w: 340,
    h: 206,
    art: ObliqueArt,
    labels: [],
    facts: [
      'A (2 kg) moving at 5 m/s at 60° to the line of centres strikes B (3 kg) at rest, with e = ½.',
      'A’s component across the line, 4.33 m/s, is unchanged; along the line it falls to 0.25 m/s.',
      'B moves off along the line of centres at 1.5 m/s.',
    ],
  },
  'am-wall-impact': {
    title: 'A smooth ball bouncing off a smooth surface',
    w: 340,
    h: 212,
    art: WallArt,
    labels: [],
    facts: [
      'The ball arrives at 10 m/s at 30° to the surface; e = 0.5.',
      'Its component along the surface, 8.66 m/s, is unchanged; across it, 5 m/s becomes 2.5 m/s.',
      'It leaves at 9.01 m/s at 16.1° to the surface, since tan β = e tan α.',
    ],
  },
  'am-shm': {
    title: 'Simple harmonic motion: displacement and speed',
    w: 380,
    h: 200,
    art: ShmArt,
    labels: [],
    facts: [
      'x = 0.3 sin(πt/2) repeats every 4 s, whatever the amplitude.',
      'Plotting v against x gives an ellipse: v² = ω²(a² − x²).',
      'The speed is greatest, aω, at the centre, and zero at the ends.',
    ],
  },
  'am-spring-shm': {
    title: 'A mass oscillating on a vertical spring',
    w: 340,
    h: 226,
    art: SpringShmArt,
    labels: [],
    facts: [
      'At equilibrium the spring is stretched by e, with ke = mg.',
      'Displaced x further, the resultant force is −kx, so the mass moves with simple harmonic motion.',
      'It oscillates about the equilibrium position with period 2π√(m/k).',
    ],
  },
  'am-moment-inertia': {
    title: 'Elements for moments of inertia',
    w: 360,
    h: 196,
    art: InertiaArt,
    labels: [],
    facts: [
      'A disc is made of thin rings, each at one distance r from the axis: I = ∫ r² dm = ½ma².',
      'A rod is made of short pieces δx at distance x: about its centre I = ma²/3 for length 2a.',
      'Choosing elements all at one distance from the axis makes each integral simple.',
    ],
  },
  'am-parallel-axes': {
    title: 'The parallel and perpendicular axes theorems for a disc',
    w: 360,
    h: 200,
    art: ParallelArt,
    labels: [],
    facts: [
      'About the axis through G perpendicular to the disc, I = ½ma².',
      'About the parallel axis through Q on the rim, I = ½ma² + ma² = 3ma²/2.',
      'The two diameters x and y share ½ma² equally, so each gives ¼ma².',
    ],
  },
  'am-rolling': {
    title: 'Rolling down a slope',
    w: 370,
    h: 206,
    art: RollingArt,
    labels: [],
    facts: [
      'Rolling without slipping, v = aω and the contact point is momentarily at rest.',
      'The energy mgh is shared between ½mv² and ½Iω², so a larger I leaves less for speed.',
      'After dropping 2 m a hoop reaches 4.43 m/s, a disc 5.11 m/s, a solid sphere 5.29 m/s and a sliding block 6.26 m/s.',
    ],
  },
  'am-stability': {
    title: 'Potential energy of a bead on a hoop',
    w: 380,
    h: 210,
    art: StabilityArt,
    labels: [],
    facts: [
      'For the bead on the hoop with a spring of modulus 4W, V = Wa(6s² − 8s + 3) with s = sin(θ/2).',
      'V is least at θ ≈ 83.6° on either side of the top: stable equilibrium.',
      'V has a maximum at the lowest point, θ = 180°: unstable equilibrium.',
    ],
  },
  'am-catenary': {
    title: 'A cable hanging under its own weight',
    w: 340,
    h: 210,
    art: CatenaryArt,
    labels: [],
    facts: [
      'A uniform cable hangs as the catenary y = c cosh(x/c); here c = 8.',
      'The horizontal tension T₀ is the same at every point; the vertical part of T carries the weight ws below it.',
      'A parabola through the same three points (dashed) lies close to it but is not the same curve.',
    ],
  },
  'am-force-field': {
    title: 'The force field F = 2xy i + x² j and two paths',
    w: 340,
    h: 218,
    art: FieldArt,
    labels: [],
    facts: [
      'The arrows show the direction and relative size of F at points of the plane.',
      'Along y = 2x and along y = 2x², the work done from (0, 0) to (1, 2) is 2 both times.',
      'The work does not depend on the path, so the field is conservative.',
    ],
  },
};
