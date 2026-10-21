// A Level Mechanics and Probability figures (0765, Upper Sixth): forces on a
// particle with the triangle of forces, a beam on supports, Hooke’s law, a
// composite lamina and how it hangs, a block on a rough slope, a ladder, a
// velocity–time graph, variable acceleration, motion with vectors,
// projectiles, a river crossing, the conical pendulum, connected particles, an
// energy balance, power and maximum speed, collisions, a Venn diagram, a tree
// diagram and the setting-out of a mechanics answer. Lengths, angles and
// graphs are drawn to scale unless marked as a sketch.
import { Circle, Ellipse, G, Line, Path, Rect } from 'react-native-svg';
import { Txt } from './Diagram';
import { flowSpec } from './charts';
import { AM, Arrow, Axes, Dot, curve, frame, path, rad, ticks } from './aMaths';

const { O, GREY, BLUE, RED, GREEN, AMBER, SHADE, PINK, CREAM } = AM;
const WATER = '#d6ebf7';
const arcPath = (cx, cy, r, a1, a2) => `M${cx + r * Math.cos(rad(a1))} ${cy - r * Math.sin(rad(a1))} A${r} ${r} 0 0 0 ${cx + r * Math.cos(rad(a2))} ${cy - r * Math.sin(rad(a2))}`;

function Hatch({ x1, x2, y, up = true }) {
  const marks = [];
  for (let x = x1; x < x2; x += 10) marks.push(x);
  return (
    <G>
      <Line x1={x1} y1={y} x2={x2} y2={y} stroke={O} strokeWidth={1.6} />
      {marks.map((x) => (
        <Line key={x} x1={x} y1={y} x2={x + 6} y2={up ? y - 6 : y + 6} stroke={O} strokeWidth={0.8} />
      ))}
    </G>
  );
}

// ---------- a particle hanging from two strings ----------
function ForcesArt() {
  const P = [170, 110];
  const A = [170 - 80 / Math.tan(rad(30)), 30];
  const B = [170 + 80 / Math.tan(rad(60)), 30];
  const t = [290, 40];
  const w = [290, 120];
  const m = [290 - 40 * Math.cos(rad(30)), 120 - 40 * Math.sin(rad(30))];
  return (
    <G>
      <Hatch x1={20} x2={236} y={30} />
      <Line x1={A[0]} y1={A[1]} x2={P[0]} y2={P[1]} stroke={GREY} strokeWidth={1.4} />
      <Line x1={B[0]} y1={B[1]} x2={P[0]} y2={P[1]} stroke={GREY} strokeWidth={1.4} />
      <Line x1={118} y1={P[1]} x2={222} y2={P[1]} stroke={GREY} strokeWidth={0.8} strokeDasharray="3 3" />
      <Path d={arcPath(P[0], P[1], 24, 150, 180)} stroke={O} strokeWidth={1} fill="none" />
      <Path d={arcPath(P[0], P[1], 18, 0, 60)} stroke={O} strokeWidth={1} fill="none" />
      <Txt x={P[0] - 30} y={P[1] - 4} size={8.5} anchor="end">
        30°
      </Txt>
      <Txt x={P[0] + 22} y={P[1] - 8} size={8.5} anchor="start">
        60°
      </Txt>
      <Arrow x1={P[0]} y1={P[1]} x2={P[0] - 50 * Math.cos(rad(30))} y2={P[1] - 50 * Math.sin(rad(30))} c={BLUE} w={2.2} />
      <Arrow x1={P[0]} y1={P[1]} x2={P[0] + 60 * Math.cos(rad(60))} y2={P[1] - 60 * Math.sin(rad(60))} c={RED} w={2.2} />
      <Arrow x1={P[0]} y1={P[1]} x2={P[0]} y2={P[1] + 60} c={O} w={2.2} />
      <Circle cx={P[0]} cy={P[1]} r={5} fill={O} />
      <Txt x={P[0] - 48} y={P[1] - 12} size={9} weight="700" anchor="end" fill={BLUE}>
        T₁ = 10 N
      </Txt>
      <Txt x={P[0] + 42} y={P[1] - 56} size={9} weight="700" anchor="start" fill={RED}>
        T₂ = 17.3 N
      </Txt>
      <Txt x={P[0] + 6} y={P[1] + 58} size={9} weight="700" anchor="start">
        W = 20 N
      </Txt>
      <Arrow x1={t[0]} y1={t[1]} x2={w[0]} y2={w[1]} c={O} w={1.8} size={5} />
      <Arrow x1={w[0]} y1={w[1]} x2={m[0]} y2={m[1]} c={BLUE} w={1.8} size={5} />
      <Arrow x1={m[0]} y1={m[1]} x2={t[0]} y2={t[1]} c={RED} w={1.8} size={5} />
      <Txt x={296} y={84} size={8.5} weight="700" anchor="start">
        W
      </Txt>
      <Txt x={262} y={122} size={8.5} weight="700" anchor="end" fill={BLUE}>
        T₁
      </Txt>
      <Txt x={258} y={82} size={8.5} weight="700" anchor="end" fill={RED}>
        T₂
      </Txt>
      <Txt x={278} y={146} size={8.5} fill={GREY}>
        triangle of forces
      </Txt>
    </G>
  );
}

// ---------- a beam on two supports ----------
function BeamArt() {
  const X = (m) => 40 + m * 60;
  const support = (x) => `M${x} 102 L${x - 10} 120 L${x + 10} 120 Z`;
  return (
    <G>
      <Line x1={20} y1={120} x2={300} y2={120} stroke={GREY} strokeWidth={1} />
      <Rect x={X(0)} y={92} width={240} height={10} fill={CREAM} stroke={O} strokeWidth={1.2} />
      <Path d={support(X(0))} fill={GREY} />
      <Path d={support(X(3))} fill={GREY} />
      <Line x1={X(4)} y1={102} x2={X(4)} y2={124} stroke={O} strokeWidth={1.2} />
      <Rect x={X(4) - 12} y={124} width={24} height={20} fill={SHADE} stroke={O} strokeWidth={1} />
      <Arrow x1={X(2)} y1={102} x2={X(2)} y2={150} c={O} w={1.8} />
      <Arrow x1={X(4)} y1={144} x2={X(4)} y2={172} c={O} w={1.8} />
      <Arrow x1={X(0)} y1={168} x2={X(0)} y2={124} c={GREEN} w={2} />
      <Arrow x1={X(3)} y1={168} x2={X(3)} y2={124} c={GREEN} w={2} />
      <Txt x={X(2) + 6} y={146} size={9} weight="700" anchor="start">
        200 N
      </Txt>
      <Txt x={X(4) - 16} y={170} size={9} weight="700" anchor="end">
        150 N
      </Txt>
      <Txt x={X(0) + 6} y={166} size={9} weight="700" anchor="start" fill={GREEN}>
        R₁ = 16.7 N
      </Txt>
      <Txt x={X(3) - 6} y={166} size={9} weight="700" anchor="end" fill={GREEN}>
        R₂ = 333 N
      </Txt>
      <Line x1={X(0)} y1={74} x2={X(4)} y2={74} stroke={GREY} strokeWidth={0.9} />
      {[0, 2, 3, 4].map((m) => (
        <Line key={m} x1={X(m)} y1={70} x2={X(m)} y2={78} stroke={GREY} strokeWidth={0.9} />
      ))}
      {[[1, '2 m'], [2.5, '1 m'], [3.5, '1 m']].map(([m, t]) => (
        <Txt key={m} x={X(m)} y={68} size={8.5} fill={GREY}>
          {t}
        </Txt>
      ))}
      {[[0, 'A'], [3, 'C'], [4, 'B']].map(([m, t]) => (
        <Txt key={t} x={X(m)} y={88} size={9.5} weight="700">
          {t}
        </Txt>
      ))}
      <Txt x={160} y={192} size={8.5} fill={GREY}>
        Moments about A: 3R₂ = 200 × 2 + 150 × 4; vertically R₁ + R₂ = 350
      </Txt>
    </G>
  );
}

// ---------- Hooke’s law ----------
const SF = frame({ left: 40, top: 16, ux: 700, uy: 6, x0: 0, x1: 0.22, y0: 0, y1: 28 });
function SpringArt() {
  const { X, Y } = SF;
  const k = 150;
  return (
    <G>
      <Axes f={SF} grid={0} xs={[[0.1, '0.1'], [0.2, '0.2']]} ys={ticks([10, 20])} xName="x / m" yName="T / N" />
      <Path d={curve(SF, (x) => 122.5 * x, 0, 0.22, 4)} stroke={BLUE} strokeWidth={2} fill="none" />
      <Line x1={X(0.16)} y1={Y(19.6)} x2={X(0.16)} y2={Y(0)} stroke={GREY} strokeWidth={1} strokeDasharray="3 3" />
      <Line x1={X(0)} y1={Y(19.6)} x2={X(0.16)} y2={Y(19.6)} stroke={GREY} strokeWidth={1} strokeDasharray="3 3" />
      <Dot x={X(0.16)} y={Y(19.6)} c={RED} />
      <Txt x={X(0.16) - 6} y={Y(19.6) - 6} size={8.5} weight="700" anchor="end" fill={RED}>
        (0.16, 19.6)
      </Txt>
      <Txt x={X(0.02)} y={Y(25)} size={8.5} weight="700" anchor="start" fill={BLUE}>
        T = λx/l = 122.5x
      </Txt>
      <Hatch x1={250} x2={312} y={24} />
      <Line x1={280} y1={24} x2={280} y2={24 + 0.96 * k} stroke={AMBER} strokeWidth={2.2} />
      <Rect x={268} y={24 + 0.96 * k} width={24} height={20} fill={SHADE} stroke={O} strokeWidth={1} />
      <Txt x={280} y={24 + 0.96 * k + 14} size={8.5} weight="700">
        2 kg
      </Txt>
      <Line x1={258} y1={24} x2={258} y2={24 + 0.8 * k} stroke={GREY} strokeWidth={1} />
      <Line x1={254} y1={24 + 0.8 * k} x2={262} y2={24 + 0.8 * k} stroke={GREY} strokeWidth={1} />
      <Line x1={258} y1={24 + 0.8 * k} x2={258} y2={24 + 0.96 * k} stroke={RED} strokeWidth={2} />
      <Txt x={252} y={84} size={8.5} anchor="end" fill={GREY}>
        l = 0.8 m
      </Txt>
      <Txt x={252} y={24 + 0.88 * k + 3} size={8.5} weight="700" anchor="end" fill={RED}>
        x = 0.16 m
      </Txt>
      <Txt x={300} y={24 + 0.96 * k + 34} size={8.5} anchor="end">
        T = mg = 19.6 N
      </Txt>
    </G>
  );
}

// ---------- a composite lamina and how it hangs ----------
const LF = frame({ left: 30, top: 20, ux: 22, x0: 0, x1: 6, y0: 0, y1: 6 });
const L_SHAPE = [[0, 0], [6, 0], [6, 2], [2, 2], [2, 6], [0, 6]];
function CompositeArt() {
  const { X, Y } = LF;
  const s = 14;
  const c = Math.cos(rad(135));
  const sn = Math.sin(rad(135));
  const hang = ([x, y]) => {
    const sx = x * s;
    const sy = -y * s;
    return [264 + sx * c - sy * sn, 30 + sx * sn + sy * c];
  };
  const g = hang([2.2, 2.2]);
  return (
    <G>
      <Rect x={X(0)} y={Y(2)} width={6 * 22} height={2 * 22} fill={SHADE} stroke={O} strokeWidth={1.2} />
      <Rect x={X(0)} y={Y(6)} width={2 * 22} height={4 * 22} fill={CREAM} stroke={O} strokeWidth={1.2} />
      <Axes f={LF} grid={0} xs={ticks([2, 4, 6])} ys={ticks([2, 4, 6])} />
      <Dot x={X(3)} y={Y(1)} c={BLUE} />
      <Dot x={X(1)} y={Y(4)} c={AMBER} />
      <Txt x={X(3) + 6} y={Y(1) + 4} size={8} anchor="start" fill={BLUE}>
        12 at (3, 1)
      </Txt>
      <Txt x={X(2) + 6} y={Y(4) + 4} size={8} anchor="start" fill={AMBER}>
        8 at (1, 4)
      </Txt>
      <Circle cx={X(2.2)} cy={Y(2.2)} r={4} fill={RED} />
      <Txt x={X(2.2) + 8} y={Y(2.2) - 6} size={9} weight="700" anchor="start" fill={RED}>
        G(2.2, 2.2)
      </Txt>
      <Path d={path(L_SHAPE.map(hang)) + ' Z'} fill={SHADE} stroke={O} strokeWidth={1.2} />
      <Line x1={264} y1={14} x2={264} y2={150} stroke={RED} strokeWidth={1} strokeDasharray="4 3" />
      <Circle cx={264} cy={30} r={3.5} fill={O} />
      <Circle cx={g[0]} cy={g[1]} r={4} fill={RED} />
      <Txt x={270} y={26} size={9} weight="700" anchor="start">
        O
      </Txt>
      <Txt x={g[0] + 8} y={g[1] + 4} size={9} weight="700" anchor="start" fill={RED}>
        G
      </Txt>
      <Txt x={250} y={176} size={8.5} fill={GREY}>
        Hung from O, G is vertically below O,
      </Txt>
      <Txt x={250} y={190} size={8.5} fill={GREY}>
        so the edge on the x-axis is at 45° to the vertical
      </Txt>
    </G>
  );
}

// ---------- a block on a rough slope ----------
function RoughSlopeArt() {
  const u = [Math.cos(rad(30)), -Math.sin(rad(30))];
  const n = [-Math.sin(rad(30)), -Math.cos(rad(30))];
  const S = [30 + 140 * u[0], 170 + 140 * u[1]];
  const pt = (base, a, la, b = [0, 0], lb = 0) => [base[0] + a[0] * la + b[0] * lb, base[1] + a[1] * la + b[1] * lb];
  const block = [pt(S, u, -22), pt(S, u, 22), pt(S, u, 22, n, 26), pt(S, u, -22, n, 26)];
  const C = pt(S, n, 13);
  const R = pt(C, n, 55);
  const F = pt(C, u, 45);
  const sinc = pt(C, u, -35);
  const cosc = pt(C, n, -60.6);
  return (
    <G>
      <Path d="M30 170 L250 170 L250 43 Z" fill={CREAM} stroke={O} strokeWidth={1.4} />
      <Path d={arcPath(30, 170, 30, 0, 30)} stroke={O} strokeWidth={1} fill="none" />
      <Txt x={68} y={164} size={9} weight="700">
        α
      </Txt>
      <Path d={path(block) + ' Z'} fill={SHADE} stroke={O} strokeWidth={1.2} />
      <Arrow x1={C[0]} y1={C[1]} x2={sinc[0]} y2={sinc[1]} c={GREY} w={1.2} size={5} dash="3 3" />
      <Arrow x1={C[0]} y1={C[1]} x2={cosc[0]} y2={cosc[1]} c={GREY} w={1.2} size={5} dash="3 3" />
      <Arrow x1={C[0]} y1={C[1]} x2={R[0]} y2={R[1]} c={GREEN} w={2} />
      <Arrow x1={C[0]} y1={C[1]} x2={F[0]} y2={F[1]} c={RED} w={2} />
      <Arrow x1={C[0]} y1={C[1]} x2={C[0]} y2={C[1] + 70} c={O} w={2} />
      <Txt x={R[0] - 4} y={R[1]} size={9.5} weight="700" anchor="end" fill={GREEN}>
        R
      </Txt>
      <Txt x={F[0] + 4} y={F[1] - 2} size={9} weight="700" anchor="start" fill={RED}>
        F ≤ μR
      </Txt>
      <Txt x={C[0] + 6} y={C[1] + 70} size={9} weight="700" anchor="start">
        mg
      </Txt>
      <Txt x={sinc[0] - 4} y={sinc[1] + 10} size={8.5} anchor="end" fill={GREY}>
        mg sin α
      </Txt>
      <Txt x={cosc[0] + 6} y={cosc[1] + 2} size={8.5} anchor="start" fill={GREY}>
        mg cos α
      </Txt>
      <Txt x={150} y={190} size={8.5} fill={GREY}>
        R = mg cos α; on the point of slipping down, F = μR = mg sin α
      </Txt>
    </G>
  );
}

// ---------- a ladder against a smooth wall ----------
function LadderArt() {
  const foot = [100, 180];
  const top = [230, 180 - 130 * 1.25];
  const mid = [(foot[0] + top[0]) / 2, (foot[1] + top[1]) / 2];
  return (
    <G>
      <Hatch x1={20} x2={250} y={180} up={false} />
      <Line x1={230} y1={10} x2={230} y2={180} stroke={O} strokeWidth={1.6} />
      <Line x1={foot[0]} y1={foot[1]} x2={top[0]} y2={top[1]} stroke={AMBER} strokeWidth={5} />
      <Path d={arcPath(foot[0], foot[1], 24, 0, 51.34)} stroke={O} strokeWidth={1} fill="none" />
      <Txt x={foot[0] + 34} y={foot[1] - 10} size={9} weight="700">
        θ
      </Txt>
      <Arrow x1={top[0]} y1={top[1]} x2={top[0] - 45} y2={top[1]} c={GREEN} w={2} />
      <Arrow x1={mid[0]} y1={mid[1]} x2={mid[0]} y2={mid[1] + 52} c={O} w={2} />
      <Arrow x1={foot[0]} y1={foot[1]} x2={foot[0]} y2={foot[1] - 56} c={GREEN} w={2} />
      <Arrow x1={foot[0]} y1={foot[1] + 9} x2={foot[0] + 45} y2={foot[1] + 9} c={RED} w={2} />
      <Txt x={top[0] - 50} y={top[1] + 4} size={9.5} weight="700" anchor="end" fill={GREEN}>
        S
      </Txt>
      <Txt x={mid[0] + 6} y={mid[1] + 50} size={9.5} weight="700" anchor="start">
        W
      </Txt>
      <Txt x={foot[0] - 6} y={foot[1] - 50} size={9.5} weight="700" anchor="end" fill={GREEN}>
        R
      </Txt>
      <Txt x={foot[0] + 50} y={foot[1] + 13} size={9.5} weight="700" anchor="start" fill={RED}>
        F
      </Txt>
      <Txt x={236} y={60} size={8.5} anchor="start" fill={GREY}>
        smooth
      </Txt>
      <Txt x={236} y={72} size={8.5} anchor="start" fill={GREY}>
        wall
      </Txt>
      <Txt x={24} y={200} size={8.5} anchor="start" fill={GREY}>
        rough ground (μ)
      </Txt>
      <Txt x={150} y={214} size={8.5} weight="700">
        About to slip when tan θ = 1/(2μ)
      </Txt>
    </G>
  );
}

// ---------- a velocity–time graph ----------
const VF = frame({ left: 40, top: 20, ux: 1.3, uy: 7, x0: 0, x1: 210, y0: 0, y1: 22 });
function VtArt() {
  const { X, Y } = VF;
  const shape = [[0, 0], [40, 20], [160, 20], [210, 0]].map(([t, v]) => [X(t), Y(v)]);
  return (
    <G>
      <Path d={path(shape) + ' Z'} fill={SHADE} />
      <Axes f={VF} grid={0} xs={ticks([40, 160])} ys={ticks([10, 20])} xName="t / s" yName="v / m s⁻¹" />
      <Path d={path(shape)} stroke={BLUE} strokeWidth={2} fill="none" />
      {[40, 160].map((t) => (
        <Line key={t} x1={X(t)} y1={Y(20)} x2={X(t)} y2={Y(0)} stroke={GREY} strokeWidth={0.9} strokeDasharray="3 3" />
      ))}
      <Txt x={X(27)} y={Y(5)} size={8.5} weight="700" fill={BLUE}>
        400 m
      </Txt>
      <Txt x={X(100)} y={Y(10)} size={9} weight="700" fill={BLUE}>
        2400 m
      </Txt>
      <Txt x={X(176)} y={Y(5)} size={8.5} weight="700" fill={BLUE}>
        500 m
      </Txt>
      <Txt x={X(40) - 4} y={Y(21)} size={8.5} anchor="end" fill={RED}>
        a = 0.5 m s⁻²
      </Txt>
      <Txt x={X(190)} y={Y(14)} size={8.5} anchor="start" fill={RED}>
        −0.4 m s⁻²
      </Txt>
      <Txt x={170} y={206} size={8.5} weight="700">
        Total distance = area under the graph = 3300 m
      </Txt>
    </G>
  );
}

// ---------- variable acceleration ----------
const AF = frame({ left: 36, top: 16, ux: 60, uy: 13, x0: 0, x1: 4.2, y0: -3.5, y1: 9.5 });
const vt = (t) => 3 * t * t - 12 * t + 9;
function VariableArt() {
  const { X, Y } = AF;
  const fill = (a, b) => {
    const pts = [[X(a), Y(0)]];
    for (let t = a; t <= b + 1e-9; t += 0.05) pts.push([X(t), Y(vt(t))]);
    pts.push([X(b), Y(0)]);
    return path(pts) + ' Z';
  };
  return (
    <G>
      <Path d={fill(0, 1)} fill={SHADE} />
      <Path d={fill(1, 3)} fill={PINK} />
      <Axes f={AF} grid={0} xs={ticks([1, 2, 3, 4])} ys={ticks([-3, 3, 6, 9])} xName="t / s" yName="v / m s⁻¹" />
      <Path d={curve(AF, vt, 0, 4.2, 120)} stroke={BLUE} strokeWidth={2} fill="none" />
      <Dot x={X(1)} y={Y(0)} c={RED} />
      <Dot x={X(3)} y={Y(0)} c={RED} />
      <Txt x={X(0.32)} y={Y(1.6)} size={8.5} weight="700" fill={BLUE}>
        +4 m
      </Txt>
      <Txt x={X(2)} y={Y(-2.1)} size={8.5} weight="700" fill={RED}>
        −4 m
      </Txt>
      <Txt x={X(3.7)} y={Y(8.5)} size={8.5} weight="700" anchor="end" fill={BLUE}>
        v = 3t² − 12t + 9
      </Txt>
      <Txt x={X(2)} y={Y(1.2)} size={8} fill={GREY}>
        at rest at t = 1 and t = 3
      </Txt>
      <Txt x={160} y={206} size={8.5} fill={GREY}>
        From t = 0 to 3: displacement 4 − 4 = 0, distance 4 + 4 = 8 m
      </Txt>
    </G>
  );
}

// ---------- motion described by vectors ----------
const MF = frame({ left: 30, top: 16, ux: 17, x0: -5, x1: 6, y0: 0, y1: 12 });
function VectorMotionArt() {
  const { X, Y } = MF;
  const pts = [];
  for (let t = 0; t <= 5.0001; t += 0.05) pts.push([X(t * t - 4 * t), Y(2 * t + 1)]);
  const marks = [[0, -4, 2], [2, 0, 2], [4, 4, 2]];
  return (
    <G>
      <Axes f={MF} xs={ticks([-4, -2, 2, 4])} ys={ticks([2, 4, 6, 8, 10])} />
      <Path d={path(pts)} stroke={BLUE} strokeWidth={2} fill="none" />
      {marks.map(([t, vx, vy]) => {
        const x = t * t - 4 * t;
        const y = 2 * t + 1;
        return (
          <G key={t}>
            <Arrow x1={X(x)} y1={Y(y)} x2={X(x + 0.5 * vx)} y2={Y(y + 0.5 * vy)} c={RED} w={1.8} />
            <Dot x={X(x)} y={Y(y)} c={BLUE} />
            <Txt x={X(x) + 6} y={Y(y) + 12} size={8.5} weight="700" anchor="start" fill={BLUE}>
              {`t = ${t}`}
            </Txt>
          </G>
        );
      })}
      {[['r = (t² − 4t)i + (2t + 1)j', BLUE, true], ['v = (2t − 4)i + 2j', RED, false], ['a = 2i', O, false], ['speed at t = 0: 2√5', O, false], ['parallel to j at t = 2', O, false]].map(([t, c, b], i) => (
        <Txt key={t} x={232} y={40 + i * 18} size={8} weight={b ? '700' : '500'} anchor="start" fill={c}>
          {t}
        </Txt>
      ))}
      <Txt x={232} y={140} size={8} anchor="start" fill={GREY}>
        red arrows: velocity
      </Txt>
    </G>
  );
}

// ---------- a projectile on level ground ----------
const PF = frame({ left: 20, top: 40, ux: 5, x0: 0, x1: 58, y0: 0, y1: 10 });
function ProjectileArt() {
  const { X, Y } = PF;
  const traj = (x) => x * Math.tan(rad(30)) - (9.8 * x * x) / (2 * 625 * Math.cos(rad(30)) ** 2);
  const R = (625 * Math.sin(rad(60))) / 9.8;
  const H = (625 * 0.25) / 19.6;
  return (
    <G>
      <Line x1={X(0)} y1={Y(0)} x2={X(58)} y2={Y(0)} stroke={O} strokeWidth={1.4} />
      <Path d={curve(PF, traj, 0, R, 120)} stroke={BLUE} strokeWidth={2} fill="none" />
      <Arrow x1={X(0)} y1={Y(0)} x2={X(0) + 40 * Math.cos(rad(30))} y2={Y(0) - 40 * Math.sin(rad(30))} c={RED} w={2} />
      <Path d={arcPath(X(0), Y(0), 16, 0, 30)} stroke={O} strokeWidth={1} fill="none" />
      <Txt x={X(0) + 22} y={Y(0) - 3} size={8} anchor="start">
        30°
      </Txt>
      <Txt x={X(0) + 6} y={Y(0) - 26} size={8.5} weight="700" anchor="start" fill={RED}>
        u = 25 m s⁻¹
      </Txt>
      <Line x1={X(R / 2)} y1={Y(0)} x2={X(R / 2)} y2={Y(H)} stroke={GREY} strokeWidth={1} strokeDasharray="3 3" />
      <Txt x={X(R / 2)} y={Y(H) - 6} size={8.5} weight="700" fill={GREY}>
        H = 7.97 m
      </Txt>
      <Line x1={X(0)} y1={Y(0) + 12} x2={X(R)} y2={Y(0) + 12} stroke={GREY} strokeWidth={1} />
      <Line x1={X(0)} y1={Y(0) + 8} x2={X(0)} y2={Y(0) + 16} stroke={GREY} strokeWidth={1} />
      <Line x1={X(R)} y1={Y(0) + 8} x2={X(R)} y2={Y(0) + 16} stroke={GREY} strokeWidth={1} />
      <Dot x={X(R)} y={Y(0)} c={BLUE} />
      <Txt x={X(R / 2)} y={Y(0) + 26} size={8.5} weight="700" fill={GREY}>
        R = 55.2 m, time of flight T = 2.55 s
      </Txt>
    </G>
  );
}

// ---------- a projectile from a cliff ----------
const CF = frame({ left: 40, top: 16, ux: 5, x0: -8, x1: 46, y0: 0, y1: 36 });
function CliffArt() {
  const { X, Y } = CF;
  const vx = 15 * Math.cos(rad(40));
  const vy = 15 * Math.sin(rad(40));
  const T = (vy + Math.sqrt(vy * vy + 4 * 4.9 * 30)) / 9.8;
  const pts = [];
  for (let t = 0; t <= T + 1e-9; t += T / 80) pts.push([X(vx * t), Y(30 + vy * t - 4.9 * t * t)]);
  return (
    <G>
      <Rect x={X(-8)} y={Y(30)} width={40} height={150} fill="#e1e5ea" stroke={O} strokeWidth={1} />
      <Line x1={X(0)} y1={Y(0)} x2={X(46)} y2={Y(0)} stroke={O} strokeWidth={1.4} />
      <Path d={path(pts)} stroke={BLUE} strokeWidth={2} fill="none" />
      <Arrow x1={X(0)} y1={Y(30)} x2={X(0) + 36 * Math.cos(rad(40))} y2={Y(30) - 36 * Math.sin(rad(40))} c={RED} w={2} />
      <Txt x={X(0) - 4} y={Y(30) - 20} size={8.5} weight="700" anchor="end" fill={RED}>
        15 m s⁻¹
      </Txt>
      <Txt x={X(0) - 4} y={Y(30) - 8} size={8.5} weight="700" anchor="end" fill={RED}>
        at 40°
      </Txt>
      <Txt x={X(-4)} y={Y(15)} size={9} weight="700">
        30 m
      </Txt>
      <Dot x={X(vx * T)} y={Y(0)} c={BLUE} />
      <Line x1={X(0)} y1={Y(0) + 10} x2={X(vx * T)} y2={Y(0) + 10} stroke={GREY} strokeWidth={1} />
      <Txt x={X(vx * T / 2)} y={Y(0) + 22} size={8.5} weight="700" fill={GREY}>
        41.9 m
      </Txt>
      <Txt x={X(vx * T)} y={Y(0) + 36} size={8.5} anchor="end" fill={BLUE}>
        lands after 3.65 s
      </Txt>
    </G>
  );
}

// ---------- crossing a river ----------
function RiverArt() {
  const S = [60, 160];
  const Lp = [132, 40];
  return (
    <G>
      <Rect x={20} y={40} width={180} height={120} fill={WATER} />
      <Line x1={20} y1={40} x2={200} y2={40} stroke={O} strokeWidth={1.4} />
      <Line x1={20} y1={160} x2={200} y2={160} stroke={O} strokeWidth={1.4} />
      {[[40, 70], [120, 80], [70, 130], [150, 120]].map(([x, y]) => (
        <Arrow key={`${x}${y}`} x1={x} y1={y} x2={x + 26} y2={y} c="#5a8fb8" w={1.2} size={5} />
      ))}
      <Line x1={S[0]} y1={S[1]} x2={Lp[0]} y2={Lp[1]} stroke={RED} strokeWidth={1.6} strokeDasharray="5 3" />
      <Arrow x1={S[0]} y1={S[1]} x2={S[0]} y2={S[1] - 50} c={O} w={2} />
      <Dot x={S[0]} y={S[1]} c={RED} />
      <Dot x={Lp[0]} y={Lp[1]} c={RED} />
      <Txt x={S[0] + 4} y={S[1] + 14} size={8.5} anchor="start">
        start
      </Txt>
      <Line x1={S[0]} y1={30} x2={Lp[0]} y2={30} stroke={GREY} strokeWidth={1} />
      <Txt x={(S[0] + Lp[0]) / 2} y={24} size={8.5} weight="700" fill={GREY}>
        36 m downstream
      </Txt>
      <Txt x={26} y={104} size={8.5} weight="700" anchor="start" fill={GREY}>
        60 m
      </Txt>
      <Arrow x1={240} y1={160} x2={240} y2={85} c={O} w={2} />
      <Arrow x1={240} y1={85} x2={285} y2={85} c="#5a8fb8" w={2} />
      <Arrow x1={240} y1={160} x2={285} y2={85} c={RED} w={2} />
      <Txt x={234} y={126} size={8.5} weight="700" anchor="end">
        2.5
      </Txt>
      <Txt x={262} y={78} size={8.5} weight="700" fill="#3c6f96">
        1.5
      </Txt>
      <Txt x={270} y={130} size={8.5} weight="700" anchor="start" fill={RED}>
        2.92 m s⁻¹
      </Txt>
      <Txt x={260} y={182} size={8} fill={GREY}>
        velocities (m s⁻¹)
      </Txt>
    </G>
  );
}

// ---------- the conical pendulum ----------
function ConicalArt() {
  const top = [140, 20];
  const bob = [top[0] + 140 * Math.sin(rad(60)), top[1] + 140 * Math.cos(rad(60))];
  const centre = [top[0], bob[1]];
  const tens = [bob[0] - 50 * Math.sin(rad(60)), bob[1] - 50 * Math.cos(rad(60))];
  return (
    <G>
      <Hatch x1={110} x2={172} y={20} />
      <Ellipse cx={centre[0]} cy={centre[1]} rx={bob[0] - centre[0]} ry={20} fill="none" stroke={GREY} strokeWidth={1} strokeDasharray="4 3" />
      <Line x1={top[0]} y1={top[1]} x2={centre[0]} y2={centre[1]} stroke={GREY} strokeWidth={1} strokeDasharray="3 3" />
      <Line x1={centre[0]} y1={centre[1]} x2={bob[0]} y2={bob[1]} stroke={GREY} strokeWidth={1} strokeDasharray="3 3" />
      <Line x1={top[0]} y1={top[1]} x2={bob[0]} y2={bob[1]} stroke={O} strokeWidth={1.6} />
      <Path d={arcPath(top[0], top[1], 26, -90, -30)} stroke={O} strokeWidth={1} fill="none" />
      <Txt x={top[0] + 12} y={top[1] + 34} size={9} weight="700">
        θ
      </Txt>
      <Arrow x1={bob[0]} y1={bob[1]} x2={tens[0]} y2={tens[1]} c={RED} w={2} />
      <Arrow x1={bob[0]} y1={bob[1]} x2={bob[0]} y2={bob[1] + 50} c={O} w={2} />
      <Circle cx={bob[0]} cy={bob[1]} r={7} fill={AMBER} stroke={O} strokeWidth={1} />
      <Txt x={tens[0] - 4} y={tens[1] - 4} size={9.5} weight="700" anchor="end" fill={RED}>
        T
      </Txt>
      <Txt x={bob[0] + 6} y={bob[1] + 48} size={9.5} weight="700" anchor="start">
        mg
      </Txt>
      <Txt x={top[0] + 0.3 * (bob[0] - top[0]) + 4} y={top[1] + 0.3 * (bob[1] - top[1]) - 6} size={9} weight="700" anchor="start">
        l
      </Txt>
      <Txt x={(centre[0] + bob[0]) / 2} y={centre[1] - 5} size={8.5} fill={GREY}>
        r = l sin θ
      </Txt>
      {['T cos θ = mg (vertically)', 'T sin θ = mrω² (towards the centre)', 'so T = mlω² and cos θ = g/(lω²)'].map((t, i) => (
        <Txt key={t} x={150} y={162 + i * 14} size={8.5} weight={i === 2 ? '700' : '500'} fill={i === 2 ? BLUE : O}>
          {t}
        </Txt>
      ))}
    </G>
  );
}

// ---------- connected particles over a pulley ----------
function PulleyArt() {
  return (
    <G>
      <Rect x={20} y={100} width={180} height={6} fill={CREAM} stroke={O} strokeWidth={1.2} />
      <Line x1={30} y1={106} x2={30} y2={200} stroke={O} strokeWidth={1.2} />
      <Line x1={190} y1={106} x2={190} y2={200} stroke={O} strokeWidth={1.2} />
      <Rect x={80} y={74} width={60} height={26} fill={SHADE} stroke={O} strokeWidth={1.2} />
      <Txt x={110} y={91} size={9} weight="700">
        4 kg
      </Txt>
      <Circle cx={208} cy={92} r={8} fill="#ffffff" stroke={O} strokeWidth={1.4} />
      <Line x1={140} y1={86} x2={208} y2={84} stroke={O} strokeWidth={1.2} />
      <Line x1={216} y1={92} x2={216} y2={150} stroke={O} strokeWidth={1.2} />
      <Rect x={204} y={150} width={24} height={24} fill={PINK} stroke={O} strokeWidth={1.2} />
      <Txt x={216} y={166} size={8.5} weight="700">
        1 kg
      </Txt>
      <Arrow x1={146} y1={72} x2={180} y2={72} c={RED} w={1.8} />
      <Txt x={163} y={66} size={9} weight="700" fill={RED}>
        T
      </Txt>
      <Arrow x1={226} y1={148} x2={226} y2={116} c={RED} w={1.8} />
      <Txt x={232} y={128} size={9} weight="700" anchor="start" fill={RED}>
        T
      </Txt>
      <Arrow x1={216} y1={174} x2={216} y2={204} c={O} w={1.8} />
      <Txt x={222} y={202} size={9} weight="700" anchor="start">
        1g
      </Txt>
      <Arrow x1={96} y1={74} x2={96} y2={46} c={GREEN} w={1.8} />
      <Txt x={90} y={52} size={9} weight="700" anchor="end" fill={GREEN}>
        R
      </Txt>
      <Arrow x1={124} y1={100} x2={124} y2={130} c={O} w={1.8} />
      <Txt x={130} y={128} size={9} weight="700" anchor="start">
        4g
      </Txt>
      <Arrow x1={80} y1={92} x2={50} y2={92} c={AMBER} w={1.6} dash="3 2" />
      <Txt x={20} y={84} size={8} anchor="start" fill={AMBER}>
        μR if rough
      </Txt>
      <Arrow x1={194} y1={156} x2={194} y2={182} c={BLUE} w={1.4} size={5} />
      <Txt x={188} y={174} size={8.5} weight="700" anchor="end" fill={BLUE}>
        a
      </Txt>
      <Txt x={150} y={22} size={8.5} weight="700" fill={BLUE}>
        smooth table: a = 1.96 m s⁻², T = 7.84 N
      </Txt>
      <Txt x={150} y={36} size={8.5} fill={AMBER}>
        rough table, μ = 0.1: a = 1.18 m s⁻², T = 8.62 N
      </Txt>
    </G>
  );
}

// ---------- the energy balance on a rough slope ----------
function EnergyArt() {
  const base = 180;
  const k = 2;
  return (
    <G>
      <Path d="M20 170 L180 170 L180 77.6 Z" fill={CREAM} stroke={O} strokeWidth={1.4} />
      <Rect x={150} y={78} width={18} height={12} fill={SHADE} stroke={O} strokeWidth={1} transform="rotate(-30 159 84)" />
      <Rect x={70} y={140} width={18} height={12} fill={SHADE} stroke={O} strokeWidth={1} strokeDasharray="2 2" transform="rotate(-30 79 146)" />
      <Arrow x1={140} y1={108} x2={98} y2={132} c={RED} w={1.6} />
      <Txt x={112} y={112} size={8.5} weight="700" anchor="end">
        5 m
      </Txt>
      <Txt x={36} y={164} size={8.5} anchor="start">
        30°
      </Txt>
      <Txt x={100} y={190} size={8} fill={GREY}>
        3 kg from rest, μ = 0.2
      </Txt>
      <Line x1={196} y1={base} x2={322} y2={base} stroke={O} strokeWidth={1.2} />
      <Rect x={200} y={base - 73.5 * k} width={50} height={73.5 * k} fill={SHADE} stroke={BLUE} strokeWidth={1} />
      <Rect x={262} y={base - 48 * k} width={50} height={48 * k} fill="#e3f0da" stroke={GREEN} strokeWidth={1} />
      <Rect x={262} y={base - 73.5 * k} width={50} height={25.5 * k} fill={PINK} stroke={RED} strokeWidth={1} />
      <Txt x={225} y={96} size={8} weight="700" fill={BLUE}>
        PE lost
      </Txt>
      <Txt x={225} y={108} size={8} weight="700" fill={BLUE}>
        73.5 J
      </Txt>
      <Txt x={287} y={126} size={8} weight="700" fill={GREEN}>
        KE
      </Txt>
      <Txt x={287} y={138} size={8} weight="700" fill={GREEN}>
        48.0 J
      </Txt>
      <Txt x={287} y={54} size={8} weight="700" fill={RED}>
        friction
      </Txt>
      <Txt x={287} y={66} size={8} weight="700" fill={RED}>
        25.5 J
      </Txt>
      <Txt x={165} y={206} size={8.5} fill={GREY}>
        PE lost = KE gained + work against friction
      </Txt>
    </G>
  );
}

// ---------- power and maximum speed ----------
const WF = frame({ left: 44, top: 16, ux: 4.5, uy: 0.04, x0: 0, x1: 60, y0: 0, y1: 4500 });
function PowerArt() {
  const { X, Y } = WF;
  return (
    <G>
      <Axes f={WF} grid={0} xs={ticks([10, 20, 30, 40, 50])} ys={ticks([1000, 2000, 3000, 4000])} xName="v / m s⁻¹" yName="F / N" />
      <Path d={curve(WF, (v) => 40000 / v, 8, 60, 160)} stroke={BLUE} strokeWidth={2} fill="none" />
      <Line x1={X(0)} y1={Y(800)} x2={X(60)} y2={Y(800)} stroke={RED} strokeWidth={1.6} />
      <Line x1={X(20)} y1={Y(2000)} x2={X(20)} y2={Y(0)} stroke={GREY} strokeWidth={1} strokeDasharray="3 3" />
      <Line x1={X(0)} y1={Y(2000)} x2={X(20)} y2={Y(2000)} stroke={GREY} strokeWidth={1} strokeDasharray="3 3" />
      <Dot x={X(20)} y={Y(2000)} c={BLUE} />
      <Dot x={X(50)} y={Y(800)} c={RED} r={3.4} />
      <Txt x={X(13)} y={Y(3600)} size={8.5} weight="700" anchor="start" fill={BLUE}>
        driving force F = P/v (P = 40 kW)
      </Txt>
      <Txt x={X(30)} y={Y(800) + 12} size={8.5} anchor="start" fill={RED}>
        resistance 800 N
      </Txt>
      <Txt x={X(50)} y={Y(800) - 24} size={8.5} weight="700" fill={RED}>
        maximum speed 50 m s⁻¹
      </Txt>
      <Txt x={X(21)} y={Y(2000) - 6} size={8.5} anchor="start" fill={BLUE}>
        at 20 m s⁻¹: F = 2000 N, a = 1.2 m s⁻²
      </Txt>
    </G>
  );
}

// ---------- collisions ----------
function Ball({ x, y, r, m, fill }) {
  return (
    <G>
      <Circle cx={x} cy={y} r={r} fill={fill} stroke={O} strokeWidth={1.2} />
      <Txt x={x} y={y + 3} size={8} weight="700">
        {m}
      </Txt>
    </G>
  );
}
function Vel({ x, y, v, k = 6 }) {
  return (
    <G>
      <Arrow x1={x} y1={y} x2={x + v * k} y2={y} c={RED} w={1.8} size={5} />
      <Txt x={x + 2} y={y - 6} size={8} weight="700" anchor="start" fill={RED}>
        {`${v} m s⁻¹`}
      </Txt>
    </G>
  );
}
function CollisionArt() {
  return (
    <G>
      <Txt x={85} y={14} size={9} weight="700" fill={GREY}>
        before
      </Txt>
      <Txt x={250} y={14} size={9} weight="700" fill={GREY}>
        after
      </Txt>
      <Line x1={170} y1={20} x2={170} y2={156} stroke={GREY} strokeWidth={0.8} strokeDasharray="3 3" />
      <Txt x={10} y={32} size={8.5} weight="700" anchor="start" fill={BLUE}>
        Coalescing
      </Txt>
      <Ball x={40} y={56} r={16} m="3 kg" fill={SHADE} />
      <Vel x={56} y={56} v={4} />
      <Ball x={130} y={56} r={11} m="1 kg" fill={CREAM} />
      <Txt x={130} y={80} size={8} fill={GREY}>
        at rest
      </Txt>
      <Ball x={210} y={56} r={16} m="3 kg" fill={SHADE} />
      <Ball x={237} y={56} r={11} m="1 kg" fill={CREAM} />
      <Vel x={248} y={56} v={3} />
      <Txt x={10} y={106} size={8.5} weight="700" anchor="start" fill={BLUE}>
        Restitution, e = 0.5
      </Txt>
      <Ball x={40} y={130} r={14} m="2 kg" fill={SHADE} />
      <Vel x={54} y={130} v={6} />
      <Ball x={130} y={130} r={11} m="1 kg" fill={CREAM} />
      <Txt x={130} y={154} size={8} fill={GREY}>
        at rest
      </Txt>
      <Ball x={196} y={130} r={14} m="2 kg" fill={SHADE} />
      <Vel x={210} y={130} v={3} />
      <Ball x={258} y={130} r={11} m="1 kg" fill={CREAM} />
      <Vel x={269} y={130} v={6} />
      <Txt x={165} y={176} size={8.5} fill={GREY}>
        momentum: 3 × 4 = 4 × 3; and 2 × 6 = 2 × 3 + 1 × 6
      </Txt>
      <Txt x={165} y={190} size={8.5} fill={GREY}>
        restitution: 6 − 3 = 0.5 × (6 − 0)
      </Txt>
    </G>
  );
}

// ---------- a Venn diagram of probabilities ----------
function VennProbArt() {
  return (
    <G>
      <Rect x={10} y={10} width={280} height={160} rx={6} fill="#ffffff" stroke={O} strokeWidth={1.2} />
      <Txt x={22} y={26} size={9.5} weight="700" anchor="start">
        S
      </Txt>
      <Circle cx={115} cy={90} r={60} fill={SHADE} fillOpacity={0.75} stroke={BLUE} strokeWidth={1.6} />
      <Circle cx={185} cy={90} r={55} fill={PINK} fillOpacity={0.6} stroke={RED} strokeWidth={1.6} />
      <Txt x={76} y={40} size={9.5} weight="700" fill={BLUE}>
        A
      </Txt>
      <Txt x={226} y={44} size={9.5} weight="700" fill={RED}>
        B
      </Txt>
      <Txt x={84} y={94} size={12} weight="700">
        0.3
      </Txt>
      <Txt x={151} y={94} size={12} weight="700">
        0.2
      </Txt>
      <Txt x={212} y={94} size={12} weight="700">
        0.2
      </Txt>
      <Txt x={262} y={158} size={12} weight="700">
        0.3
      </Txt>
      <Txt x={150} y={190} size={8.5} fill={GREY}>
        P(A) = 0.5, P(B) = 0.4, P(A ∩ B) = 0.2, P(A ∪ B) = 0.7
      </Txt>
    </G>
  );
}

// ---------- a tree diagram for a medical test ----------
function TreeArt() {
  const root = [24, 105];
  const nodes = [[120, 50, 'D', '0.02', true], [120, 160, 'D′', '0.98', false]];
  const leaves = [
    [216, 25, '+', '0.95', '0.019', 0, true],
    [216, 75, '−', '0.05', '0.001', 0, false],
    [216, 135, '+', '0.04', '0.0392', 1, true],
    [216, 185, '−', '0.96', '0.9408', 1, false],
  ];
  return (
    <G>
      {nodes.map(([x, y, name, p, up]) => (
        <G key={name}>
          <Line x1={root[0]} y1={root[1]} x2={x} y2={y} stroke={O} strokeWidth={1.3} />
          <Txt x={66} y={up ? 74 : 146} size={8.5} weight="700" anchor="end" fill={BLUE}>
            {p}
          </Txt>
          <Txt x={x - 6} y={up ? y - 6 : y + 14} size={9.5} weight="700" anchor="end">
            {name}
          </Txt>
        </G>
      ))}
      {leaves.map(([x, y, s, p, prod, from, pos]) => {
        const [nx, ny] = nodes[from];
        const above = y < ny;
        return (
          <G key={`${x}${y}`}>
            <Line x1={nx} y1={ny} x2={x} y2={y} stroke={pos ? RED : O} strokeWidth={pos ? 1.8 : 1.2} />
            <Txt x={168} y={above ? (ny + y) / 2 - 6 : (ny + y) / 2 + 12} size={8.5} weight="700" fill={BLUE}>
              {p}
            </Txt>
            <Txt x={x + 6} y={y + 4} size={10} weight="700" anchor="start" fill={pos ? RED : O}>
              {s}
            </Txt>
            <Txt x={244} y={y + 4} size={8.5} weight={pos ? '700' : '500'} anchor="start" fill={pos ? RED : GREY}>
              {prod}
            </Txt>
          </G>
        );
      })}
      <Circle cx={root[0]} cy={root[1]} r={3} fill={O} />
      <Txt x={165} y={210} size={8.5} weight="700" fill={RED}>
        P(+) = 0.019 + 0.0392 = 0.0582
      </Txt>
      <Txt x={165} y={225} size={8.5} weight="700" fill={RED}>
        P(D | +) = 0.019 ÷ 0.0582 ≈ 0.326
      </Txt>
    </G>
  );
}

export const A_MATHS_MECH = {
  'am-forces-resolve': {
    title: 'A particle in equilibrium under three forces',
    w: 330,
    h: 186,
    art: ForcesArt,
    labels: [],
    facts: [
      'A 20 N weight hangs from two strings at 30° and 60° to the horizontal.',
      'Resolving horizontally and vertically gives T₁ = 10 N and T₂ = 10√3 ≈ 17.3 N.',
      'Drawn head to tail, the three forces make a closed triangle: the triangle of forces, which leads to Lami’s theorem.',
    ],
  },
  'am-beam': {
    title: 'A uniform beam on two supports',
    w: 320,
    h: 200,
    art: BeamArt,
    labels: [],
    facts: [
      'A uniform 4 m beam of weight 200 N rests on supports at A and at C, 1 m from B, with a 150 N load at B; the reactions are R₁ at A and R₂ at C.',
      'Taking moments about A removes R₁: 3R₂ = 200 × 2 + 150 × 4 = 1000, so R₂ = 333 N.',
      'Resolving vertically, R₁ = 350 − 333 = 16.7 N: the beam is close to tipping about C.',
    ],
  },
  'am-spring': {
    title: 'Hooke’s law: tension against extension',
    w: 340,
    h: 216,
    art: SpringArt,
    labels: [],
    facts: [
      'For a string of natural length 0.8 m and modulus 98 N, T = λx/l = 122.5x: a straight line through the origin.',
      'A 2 kg mass hangs at rest when T = mg = 19.6 N, that is at an extension of 0.16 m.',
      'The stretched string is 0.8 + 0.16 = 0.96 m long.',
    ],
  },
  'am-composite-lamina': {
    title: 'The centre of mass of an L-shaped lamina',
    w: 340,
    h: 198,
    art: CompositeArt,
    labels: [],
    facts: [
      'The L-shape is a 6 × 2 rectangle (area 12, centre (3, 1)) and a 2 × 4 rectangle (area 8, centre (1, 4)).',
      'x̄ = (12 × 3 + 8 × 1)/20 = 2.2 and ȳ = (12 × 1 + 8 × 4)/20 = 2.2, so G = (2.2, 2.2).',
      'Hung from the corner O, G lies vertically below O, so the edge along the x-axis makes 45° with the vertical.',
    ],
  },
  'am-rough-slope': {
    title: 'A block on a rough inclined plane',
    w: 300,
    h: 198,
    art: RoughSlopeArt,
    labels: [],
    facts: [
      'The weight mg splits into mg sin α down the slope and mg cos α into the slope.',
      'The normal reaction balances mg cos α, so R = mg cos α.',
      'Friction acts up the slope against the tendency to slide; at the point of slipping F = μR, which gives μ = tan α.',
    ],
  },
  'am-ladder': {
    title: 'A ladder against a smooth wall',
    w: 300,
    h: 222,
    art: LadderArt,
    labels: [],
    facts: [
      'The smooth wall gives only a horizontal reaction S; the rough ground gives a normal reaction R and friction F towards the wall.',
      'Resolving: F = S and R = W; moments about the foot: S × 2a sin θ = W × a cos θ.',
      'The ladder is about to slip when ½W cot θ = μW, that is tan θ = 1/(2μ).',
    ],
  },
  'am-vt-graph': {
    title: 'A velocity–time graph for a train',
    w: 340,
    h: 214,
    art: VtArt,
    labels: [],
    facts: [
      'The train accelerates at 0.5 m s⁻² for 40 s, runs at 20 m s⁻¹ for 120 s, then decelerates at 0.4 m s⁻² for 50 s.',
      'The gradient of each part is the acceleration.',
      'The area under the graph, 400 + 2400 + 500 = 3300 m, is the distance travelled.',
    ],
  },
  'am-variable-motion': {
    title: 'Velocity v = 3t² − 12t + 9',
    w: 320,
    h: 214,
    art: VariableArt,
    labels: [],
    facts: [
      'v = 3(t − 1)(t − 3), so the particle is at rest at t = 1 s and t = 3 s.',
      'From t = 0 to 1 it moves forward 4 m (the area above the axis); from t = 1 to 3 it moves back 4 m.',
      'Its displacement from t = 0 to 3 is 0, but it travels 8 m.',
    ],
  },
  'am-vector-motion': {
    title: 'Motion described by a position vector',
    w: 350,
    h: 240,
    art: VectorMotionArt,
    labels: [],
    facts: [
      'r = (t² − 4t)i + (2t + 1)j traces a parabola as t goes from 0 to 5.',
      'v = dr/dt = (2t − 4)i + 2j: at t = 2 it is 2j, so the particle moves parallel to j.',
      'a = 2i is constant; the speed at t = 0 is √(16 + 4) = 2√5 m s⁻¹.',
    ],
  },
  'am-projectile': {
    title: 'A projectile: 25 m s⁻¹ at 30°',
    w: 330,
    h: 128,
    art: ProjectileArt,
    labels: [],
    facts: [
      'Drawn to scale: horizontally 25 cos 30° = 21.65 m s⁻¹ throughout; vertically 12.5 m s⁻¹ at first, slowed by g.',
      'Greatest height H = u² sin²α/(2g) = 7.97 m, halfway along.',
      'Range R = u² sin 2α/g = 55.2 m after T = 2u sin α/g = 2.55 s.',
    ],
  },
  'am-projectile-cliff': {
    title: 'Projection from the top of a cliff',
    w: 330,
    h: 240,
    art: CliffArt,
    labels: [],
    facts: [
      'A stone is thrown at 15 m s⁻¹, 40° above the horizontal, from a cliff 30 m high.',
      'Vertically, −30 = 9.64t − 4.9t² gives t = 3.65 s.',
      'Horizontally it travels 11.49 × 3.65 ≈ 41.9 m from the foot of the cliff.',
    ],
  },
  'am-river': {
    title: 'Crossing a river: true velocity',
    w: 330,
    h: 190,
    art: RiverArt,
    labels: [],
    facts: [
      'The swimmer heads straight across at 2.5 m s⁻¹ while the current carries her at 1.5 m s⁻¹.',
      'Her true velocity is their vector sum, √(2.5² + 1.5²) ≈ 2.92 m s⁻¹.',
      'She takes 60 ÷ 2.5 = 24 s to cross and lands 1.5 × 24 = 36 m downstream.',
    ],
  },
  'am-conical-pendulum': {
    title: 'The conical pendulum',
    w: 300,
    h: 196,
    art: ConicalArt,
    labels: [],
    facts: [
      'The bob moves in a horizontal circle of radius r = l sin θ below the point of support.',
      'Vertically the tension balances the weight: T cos θ = mg.',
      'Horizontally T sin θ provides the force mrω² towards the centre, so T = mlω² and cos θ = g/(lω²).',
    ],
  },
  'am-pulley': {
    title: 'Connected particles over a pulley',
    w: 300,
    h: 214,
    art: PulleyArt,
    labels: [],
    facts: [
      'A 4 kg block on a table is joined over a smooth pulley to a 1 kg mass hanging freely; the tension T is the same on both sides.',
      'Smooth table: 1g − T = 1a and T = 4a give a = 1.96 m s⁻² and T = 7.84 N.',
      'Rough table (μ = 0.1): friction 3.92 N opposes the block, giving a = 1.18 m s⁻² and T = 8.62 N.',
    ],
  },
  'am-energy-slope': {
    title: 'An energy balance on a rough slope',
    w: 330,
    h: 212,
    art: EnergyArt,
    labels: [],
    facts: [
      'A 3 kg block slides 5 m from rest down a slope at 30° with μ = 0.2.',
      'It loses 3 × 9.8 × 2.5 = 73.5 J of potential energy.',
      'Of this, 25.5 J is done against friction and 48.0 J becomes kinetic energy, so v = 5.66 m s⁻¹.',
    ],
  },
  'am-power-curve': {
    title: 'Driving force, resistance and maximum speed',
    w: 340,
    h: 226,
    art: PowerArt,
    labels: [],
    facts: [
      'At a constant power of 40 kW, the driving force F = P/v falls as the speed rises.',
      'With a resistance of 800 N, the maximum speed is where F = 800 N: v = 50 m s⁻¹.',
      'At 20 m s⁻¹, F = 2000 N, so a 1000 kg car accelerates at (2000 − 800)/1000 = 1.2 m s⁻².',
    ],
  },
  'am-collision': {
    title: 'Momentum in collisions',
    w: 330,
    h: 196,
    art: CollisionArt,
    labels: [],
    facts: [
      'A 3 kg trolley at 4 m s⁻¹ sticks to a 1 kg trolley at rest: momentum 12 N s gives a common velocity of 3 m s⁻¹.',
      'A 2 kg sphere at 6 m s⁻¹ hits a 1 kg sphere at rest with e = 0.5: afterwards they move at 3 m s⁻¹ and 6 m s⁻¹.',
      'Both collisions conserve momentum but lose kinetic energy (6 J and 9 J).',
    ],
  },
  'am-venn-prob': {
    title: 'A Venn diagram of probabilities',
    w: 300,
    h: 196,
    art: VennProbArt,
    labels: [],
    facts: [
      'P(A) = 0.5 and P(B) = 0.4, with P(A ∩ B) = 0.2 in the overlap.',
      'A only = 0.3, B only = 0.2, and the four regions add up to 1.',
      'P(A ∪ B) = 0.5 + 0.4 − 0.2 = 0.7, so P(neither) = 0.3.',
    ],
  },
  'am-tree': {
    title: 'A tree diagram and Bayes’ theorem',
    w: 330,
    h: 232,
    art: TreeArt,
    labels: [],
    facts: [
      '2% have the disease (D). The test is positive for 95% of them and for 4% of those without it.',
      'Multiplying along the branches: P(D and +) = 0.019 and P(D′ and +) = 0.0392, so P(+) = 0.0582.',
      'Bayes’ theorem: P(D | +) = 0.019 ÷ 0.0582 ≈ 0.326.',
    ],
  },
  'am-mech-method': flowSpec(
    'Setting out a mechanics answer',
    ['Diagram\nall forces shown', 'Direction\nchoose positive', 'Principle\nstate it in words', 'Equations\none per particle', 'Solve\nthen 3 s.f.', 'Check\nsigns and units'],
    { perRow: 3, boxW: 108, note: 'Most lost marks come from a missing force or a sign error.' },
  ),
};
