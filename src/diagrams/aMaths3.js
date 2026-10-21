// A Level Pure Mathematics figures, Upper Sixth: standard integrals, the
// quarter circle ∫ √(1 − x²) dx, a solid of revolution, a centroid, Newton’s
// law of cooling, the integrating factor, damped oscillations, the Argand
// diagram, polar form, cube roots, loci of |z − a| and arg(z − a), planes, a
// line meeting a plane, Newton–Raphson, the trapezium rule and orthogonal
// circles. Graphs are calculated and drawn to scale; figures with circles or
// right angles use equal units on both axes.
import { Circle, Ellipse, G, Line, Path, Rect } from 'react-native-svg';
import { Txt } from './Diagram';
import { columnsSpec, flowSpec } from './charts';
import { AM, Arrow, Axes, Dot, RightAngle, curve, frame, path, rad, ticks } from './aMaths';

const { O, GREY, BLUE, RED, GREEN, AMBER, PURPLE, SHADE, PINK, CREAM } = AM;
const arcPath = (cx, cy, r, a1, a2) => `M${cx + r * Math.cos(rad(a1))} ${cy - r * Math.sin(rad(a1))} A${r} ${r} 0 0 0 ${cx + r * Math.cos(rad(a2))} ${cy - r * Math.sin(rad(a2))}`;

// ---------- the quarter circle ----------
const QF = frame({ left: 30, top: 16, ux: 130, x0: -0.2, x1: 1.3, y0: -0.2, y1: 1.3 });
function QuarterArt() {
  const { X, Y } = QF;
  const region = [[X(0), Y(0)]];
  for (let a = 0; a <= 90.001; a += 2) region.push([X(Math.sin(rad(a))), Y(Math.cos(rad(a)))]);
  const lines = [
    ['∫ (0 to 1) √(1 − x²) dx', O, true],
    ['x = sin θ, dx = cos θ dθ', GREY],
    ['= ∫ (0 to π/2) cos²θ dθ', O],
    ['= π/4 ≈ 0.785', BLUE, true],
  ];
  return (
    <G>
      <Path d={path(region) + ' Z'} fill={SHADE} />
      <Axes f={QF} grid={0} xs={[[1, '1']]} ys={[[1, '1']]} />
      <Path d={curve(QF, (x) => Math.sqrt(Math.max(0, 1 - x * x)), 0, 1, 120)} stroke={BLUE} strokeWidth={2} fill="none" />
      <Txt x={X(0.42)} y={Y(0.4)} size={9.5} weight="700" fill={BLUE}>
        area π/4
      </Txt>
      <Txt x={X(0.78) + 4} y={Y(0.8)} size={8.5} anchor="start" fill={BLUE}>
        y = √(1 − x²)
      </Txt>
      {lines.map(([t, c, b], i) => (
        <Txt key={t} x={236} y={60 + i * 20} size={8.5} weight={b ? '700' : '500'} anchor="start" fill={c}>
          {t}
        </Txt>
      ))}
    </G>
  );
}

// ---------- a solid of revolution ----------
const VF = frame({ left: 20, top: 16, ux: 60, uy: 50, x0: -0.3, x1: 4.6, y0: -2.4, y1: 2.4 });
function VolumeArt() {
  const { X, Y } = VF;
  const top = [];
  const bot = [];
  for (let x = 0; x <= 4.0001; x += 0.05) {
    top.push([X(x), Y(Math.sqrt(x))]);
    bot.push([X(x), Y(-Math.sqrt(x))]);
  }
  return (
    <G>
      <Path d={path([...top, ...bot.reverse()]) + ' Z'} fill={SHADE} fillOpacity={0.6} />
      <Path d={path([[X(0), Y(0)], ...top.slice(1), [X(4), Y(0)]]) + ' Z'} fill={SHADE} />
      <Axes f={VF} grid={0} xs={ticks([1, 2, 3, 4])} ys={[[2, '2'], [-2, '−2']]} />
      {[1, 2, 3, 4].map((x) => (
        <Ellipse key={x} cx={X(x)} cy={Y(0)} rx={8} ry={Math.sqrt(x) * 50} fill="none" stroke={GREY} strokeWidth={1} strokeDasharray={x < 4 ? '3 3' : undefined} />
      ))}
      <Rect x={X(2.5)} y={Y(Math.sqrt(2.5))} width={0.2 * 60} height={2 * Math.sqrt(2.5) * 50} fill={PINK} stroke={RED} strokeWidth={1.2} />
      <Path d={curve(VF, (x) => Math.sqrt(x), 0, 4, 120)} stroke={BLUE} strokeWidth={2} fill="none" />
      <Path d={curve(VF, (x) => -Math.sqrt(x), 0, 4, 120)} stroke={BLUE} strokeWidth={1.3} strokeDasharray="4 3" fill="none" />
      <Txt x={X(1.1)} y={Y(1.55)} size={9} weight="700" anchor="end" fill={BLUE}>
        y = √x
      </Txt>
      <Txt x={X(2.6)} y={Y(2.25)} size={8.5} weight="700" fill={RED}>
        disc: radius y, thickness δx
      </Txt>
      <Txt x={170} y={274} size={9} weight="700" fill={BLUE}>
        V = π ∫ (0 to 4) y² dx = π ∫ (0 to 4) x dx = 8π
      </Txt>
    </G>
  );
}

// ---------- the centroid of the region under y = x² ----------
const CF = frame({ left: 30, top: 16, ux: 90, uy: 40, x0: -0.3, x1: 2.5, y0: -0.5, y1: 4.5 });
function CentroidArt() {
  const { X, Y } = CF;
  const region = [[X(0), Y(0)]];
  for (let x = 0; x <= 2.0001; x += 0.05) region.push([X(x), Y(x * x)]);
  region.push([X(2), Y(0)]);
  const gx = X(1.5);
  const gy = Y(1.2);
  return (
    <G>
      <Path d={path(region) + ' Z'} fill={SHADE} />
      <Rect x={X(1.2)} y={Y(1.44)} width={0.1 * 90} height={1.44 * 40} fill={CREAM} stroke={AMBER} strokeWidth={1} />
      <Dot x={X(1.25)} y={Y(0.72)} c={AMBER} r={2.4} />
      <Axes f={CF} grid={0} xs={ticks([1, 2])} ys={ticks([1, 2, 3, 4])} />
      <Path d={curve(CF, (x) => x * x, -0.3, 2.1, 100)} stroke={BLUE} strokeWidth={2} fill="none" />
      <Line x1={gx - 8} y1={gy} x2={gx + 8} y2={gy} stroke={RED} strokeWidth={1.6} />
      <Line x1={gx} y1={gy - 8} x2={gx} y2={gy + 8} stroke={RED} strokeWidth={1.6} />
      <Circle cx={gx} cy={gy} r={4} fill="none" stroke={RED} strokeWidth={1.4} />
      <Txt x={gx + 8} y={gy - 8} size={9} weight="700" anchor="start" fill={RED}>
        G(1.5, 1.2)
      </Txt>
      <Txt x={X(1.25)} y={Y(0) + 26} size={8} fill={AMBER}>
        strip: area y δx, centre (x, ½y)
      </Txt>
      {['A = ∫ y dx = 8/3', 'A x̄ = ∫ xy dx = 4', 'A ȳ = ∫ ½y² dx = 16/5'].map((t, i) => (
        <Txt key={t} x={X(0.05)} y={Y(4.2) + i * 15} size={8.5} weight="700" anchor="start" fill={i ? BLUE : O}>
          {t}
        </Txt>
      ))}
      <Txt x={X(2.12)} y={Y(3.6)} size={9} weight="700" anchor="start" fill={BLUE}>
        y = x²
      </Txt>
    </G>
  );
}

// ---------- Newton’s law of cooling ----------
const KK = Math.log(7 / 4) / 5;
const NF = frame({ left: 36, top: 16, ux: 9, uy: 2, x0: 0, x1: 30, y0: 0, y1: 100 });
function CoolingArt() {
  const { X, Y } = NF;
  const theta = (t) => 20 + 70 * Math.exp(-KK * t);
  return (
    <G>
      <Axes f={NF} grid={10} xs={ticks([10, 20])} ys={ticks([20, 40, 60, 80])} xName="t / min" yName="θ / °C" />
      <Line x1={X(0)} y1={Y(20)} x2={X(30)} y2={Y(20)} stroke={GREY} strokeWidth={1.2} strokeDasharray="5 4" />
      <Txt x={X(29)} y={Y(20) + 13} size={8.5} anchor="end" fill={GREY}>
        room temperature 20 °C
      </Txt>
      <Path d={curve(NF, theta, 0, 30, 120)} stroke={RED} strokeWidth={2} fill="none" />
      {[[0, 90], [5, 60], [11.2, 40]].map(([t, v]) => (
        <G key={t}>
          <Dot x={X(t)} y={Y(v)} c={RED} />
          <Line x1={X(t)} y1={Y(v)} x2={X(t)} y2={Y(0)} stroke={GREY} strokeWidth={0.8} strokeDasharray="2 3" />
        </G>
      ))}
      <Txt x={X(5) + 6} y={Y(60) - 4} size={8.5} anchor="start" fill={RED}>
        (5, 60)
      </Txt>
      <Txt x={X(11.2) + 6} y={Y(40) - 6} size={8.5} weight="700" anchor="start" fill={RED}>
        40 °C after 11.2 min
      </Txt>
      <Txt x={X(13)} y={Y(84)} size={9} weight="700" anchor="start" fill={RED}>
        θ = 20 + 70e^(−0.112t)
      </Txt>
    </G>
  );
}

// ---------- damped and undamped oscillations ----------
const DF = frame({ left: 30, top: 16, ux: 24, uy: 70, x0: 0, x1: 12, y0: -1.2, y1: 1.2 });
function DampedArt() {
  return (
    <G>
      <Axes f={DF} grid={0} xs={ticks([2, 4, 6, 8, 10, 12])} ys={[[1, '1'], [-1, '−1']]} xLab={DF.Y(-1.2) + 12} />
      <Path d={curve(DF, (x) => Math.cos(2 * x), 0, 12, 400)} stroke={GREY} strokeWidth={1.2} strokeDasharray="4 3" fill="none" />
      <Path d={curve(DF, (x) => Math.exp(-x / 4), 0, 12, 100)} stroke={AMBER} strokeWidth={1} strokeDasharray="2 3" fill="none" />
      <Path d={curve(DF, (x) => -Math.exp(-x / 4), 0, 12, 100)} stroke={AMBER} strokeWidth={1} strokeDasharray="2 3" fill="none" />
      <Path d={curve(DF, (x) => Math.exp(-x / 4) * Math.cos(2 * x), 0, 12, 400)} stroke={BLUE} strokeWidth={2} fill="none" />
      <Line x1={24} y1={216} x2={40} y2={216} stroke={GREY} strokeWidth={1.4} strokeDasharray="4 3" />
      <Txt x={46} y={219} size={8.5} anchor="start">
        y = cos 2x: simple harmonic motion, y″ + 4y = 0
      </Txt>
      <Line x1={24} y1={232} x2={40} y2={232} stroke={BLUE} strokeWidth={2} />
      <Txt x={46} y={235} size={8.5} anchor="start">
        y = e^(−x/4) cos 2x: damped, roots −¼ ± 2i
      </Txt>
      <Line x1={24} y1={248} x2={40} y2={248} stroke={AMBER} strokeWidth={1.2} strokeDasharray="2 3" />
      <Txt x={46} y={251} size={8.5} anchor="start">
        the envelope y = ±e^(−x/4)
      </Txt>
    </G>
  );
}

// ---------- the Argand diagram ----------
const AF = frame({ left: 50, top: 16, ux: 26, x0: -2, x1: 5, y0: -3, y1: 5 });
function ArgandArt() {
  const { X, Y } = AF;
  const pts = [
    [3, 2, 'z = 3 + 2i', BLUE, 'start', 6, 4],
    [3, -2, 'z̄ = 3 − 2i', PURPLE, 'start', 6, 4],
    [-1, 2, 'w = −1 + 2i', GREEN, 'end', -6, 4],
    [2, 4, 'z + w = 2 + 4i', RED, 'start', 6, -2],
  ];
  return (
    <G>
      <Axes f={AF} xs={ticks([-1, 1, 2, 3, 4])} ys={ticks([-2, -1, 1, 2, 3, 4])} xName="Re" yName="Im" />
      <Path d={path([[X(0), Y(0)], [X(3), Y(2)], [X(2), Y(4)], [X(-1), Y(2)]]) + ' Z'} fill={PINK} fillOpacity={0.5} stroke="none" />
      <Line x1={X(3)} y1={Y(2)} x2={X(2)} y2={Y(4)} stroke={GREY} strokeWidth={1} strokeDasharray="3 3" />
      <Line x1={X(-1)} y1={Y(2)} x2={X(2)} y2={Y(4)} stroke={GREY} strokeWidth={1} strokeDasharray="3 3" />
      <Line x1={X(3)} y1={Y(2)} x2={X(3)} y2={Y(-2)} stroke={PURPLE} strokeWidth={0.8} strokeDasharray="2 3" />
      <Arrow x1={X(0)} y1={Y(0)} x2={X(3)} y2={Y(2)} c={BLUE} w={1.8} />
      <Arrow x1={X(0)} y1={Y(0)} x2={X(-1)} y2={Y(2)} c={GREEN} w={1.8} />
      <Arrow x1={X(0)} y1={Y(0)} x2={X(2)} y2={Y(4)} c={RED} w={1.8} />
      <Dot x={X(3)} y={Y(-2)} c={PURPLE} />
      {pts.map(([x, y, t, c, an, dx, dy]) => (
        <Txt key={t} x={X(x) + dx} y={Y(y) + dy} size={8.5} weight="700" anchor={an} fill={c}>
          {t}
        </Txt>
      ))}
      {['z z̄ = 9 + 4 = 13', '|z| = √13', 'z̄: reflection of z', 'in the real axis'].map((t, i) => (
        <Txt key={t} x={252} y={70 + i * 16} size={8.5} anchor="start" fill={i < 2 ? O : GREY}>
          {t}
        </Txt>
      ))}
    </G>
  );
}

// ---------- modulus and argument ----------
const PF = frame({ left: 20, top: 16, ux: 60, x0: -2.6, x1: 1.6, y0: -0.8, y1: 2.4 });
function PolarArt() {
  const { X, Y } = PF;
  const zx = -Math.sqrt(3);
  return (
    <G>
      <Axes f={PF} grid={0} xs={[[-1, '−1'], [1, '1']]} ys={[[1, '1'], [2, '2']]} xName="Re" yName="Im" />
      <Line x1={X(zx)} y1={Y(1)} x2={X(zx)} y2={Y(0)} stroke={GREY} strokeWidth={1} strokeDasharray="3 3" />
      <Line x1={X(zx)} y1={Y(1)} x2={X(0)} y2={Y(1)} stroke={GREY} strokeWidth={1} strokeDasharray="3 3" />
      <Arrow x1={X(0)} y1={Y(0)} x2={X(zx)} y2={Y(1)} c={BLUE} w={2} />
      <Path d={arcPath(X(0), Y(0), 26, 0, 150)} stroke={RED} strokeWidth={1.4} fill="none" />
      <Dot x={X(zx)} y={Y(1)} c={BLUE} />
      <Txt x={X(zx) - 4} y={Y(1) - 10} size={9} weight="700" fill={BLUE}>
        z = −√3 + i
      </Txt>
      <Txt x={X(-0.95)} y={Y(0.6) + 14} size={9} weight="700" anchor="end" fill={BLUE}>
        r = 2
      </Txt>
      <Txt x={X(0) + 14} y={Y(0) - 32} size={9} weight="700" anchor="start" fill={RED}>
        θ = 5π/6
      </Txt>
      <Txt x={X(zx)} y={Y(0) + 14} size={8.5}>
        −√3
      </Txt>
      <Txt x={170} y={226} size={9} weight="700" fill={BLUE}>
        z = 2(cos 5π/6 + i sin 5π/6) = 2e^(5πi/6)
      </Txt>
    </G>
  );
}

// ---------- the cube roots of 8i ----------
const RF = frame({ left: 30, top: 16, ux: 42, x0: -2.8, x1: 2.8, y0: -2.8, y1: 2.8 });
function RootsArt() {
  const { X, Y } = RF;
  const roots = [[Math.sqrt(3), 1, '√3 + i', 'start', 6, -4], [-Math.sqrt(3), 1, '−√3 + i', 'end', -6, -4], [0, -2, '−2i', 'start', 7, 12]];
  return (
    <G>
      <Axes f={RF} grid={0} xs={[]} ys={[]} xName="Re" yName="Im" />
      <Circle cx={X(0)} cy={Y(0)} r={84} fill="none" stroke={GREY} strokeWidth={1} strokeDasharray="4 3" />
      <Path d={path(roots.map(([x, y]) => [X(x), Y(y)])) + ' Z'} fill={SHADE} fillOpacity={0.6} stroke={BLUE} strokeWidth={1.2} />
      {roots.map(([x, y, t, an, dx, dy]) => (
        <G key={t}>
          <Line x1={X(0)} y1={Y(0)} x2={X(x)} y2={Y(y)} stroke={BLUE} strokeWidth={1} />
          <Dot x={X(x)} y={Y(y)} c={RED} r={3.4} />
          <Txt x={X(x) + dx} y={Y(y) + dy} size={9} weight="700" anchor={an} fill={RED}>
            {t}
          </Txt>
        </G>
      ))}
      <Txt x={X(0.15)} y={Y(1.2)} size={8.5} anchor="start" fill={GREY}>
        120° apart
      </Txt>
      <Txt x={150} y={274} size={8.5} weight="700">
        z³ = 8i = 8e^(iπ/2): z = 2e^(i(π/2 + 2kπ)/3), k = 0, 1, 2
      </Txt>
      <Txt x={150} y={290} size={8} fill={GREY}>
        They lie on |z| = 2 at the corners of an equilateral triangle.
      </Txt>
    </G>
  );
}

// ---------- |z − 3 − 4i| = 2 ----------
const LF = frame({ left: 30, top: 16, ux: 32, x0: -0.6, x1: 6, y0: -0.6, y1: 6.6 });
function LociArt() {
  const { X, Y } = LF;
  return (
    <G>
      <Axes f={LF} xs={ticks([1, 2, 3, 4, 5])} ys={ticks([1, 2, 3, 4, 5, 6])} xName="Re" yName="Im" />
      <Circle cx={X(3)} cy={Y(4)} r={64} fill={SHADE} fillOpacity={0.5} stroke={BLUE} strokeWidth={2} />
      <Line x1={X(0)} y1={Y(0)} x2={X(4.2)} y2={Y(5.6)} stroke={GREY} strokeWidth={1} strokeDasharray="4 3" />
      <Dot x={X(3)} y={Y(4)} c={BLUE} />
      <Dot x={X(1.8)} y={Y(2.4)} c={GREEN} r={3.4} />
      <Dot x={X(4.2)} y={Y(5.6)} c={RED} r={3.4} />
      <Txt x={X(3) + 6} y={Y(4) + 12} size={8.5} weight="700" anchor="start" fill={BLUE}>
        3 + 4i
      </Txt>
      <Txt x={X(1.8) - 8} y={Y(2.4) + 3} size={8.5} weight="700" anchor="end" fill={GREEN}>
        |z| = 3
      </Txt>
      <Txt x={X(4.2) + 8} y={Y(5.6) + 3} size={8.5} weight="700" anchor="start" fill={RED}>
        |z| = 7
      </Txt>
      {[['|z − 3 − 4i| = 2: centre 3 + 4i, radius 2', BLUE, true], ['least |z| = 5 − 2 = 3; greatest |z| = 5 + 2 = 7', O]].map(([t, c, b], i) => (
        <Txt key={t} x={140} y={268 + i * 15} size={8.5} weight={b ? '700' : '500'} fill={c}>
          {t}
        </Txt>
      ))}
    </G>
  );
}

// ---------- half-lines and tangents from O ----------
const HL = frame({ left: 24, top: 24, ux: 30, x0: -0.5, x1: 4, y0: -0.5, y1: 4 });
const HR = frame({ left: 196, top: 16, ux: 22, x0: -3.2, x1: 3.2, y0: -0.5, y1: 6.5 });
function ArgLociArt() {
  const t = Math.sqrt(12);
  return (
    <G>
      <Axes f={HL} grid={0} xs={ticks([1, 2, 3])} ys={ticks([1, 2, 3])} xName="Re" yName="Im" />
      <Line x1={HL.X(1)} y1={HL.Y(1)} x2={HL.X(3.9)} y2={HL.Y(3.9)} stroke={BLUE} strokeWidth={2.2} />
      <Line x1={HL.X(1)} y1={HL.Y(1)} x2={HL.X(2.2)} y2={HL.Y(1)} stroke={GREY} strokeWidth={0.9} strokeDasharray="3 3" />
      <Path d={arcPath(HL.X(1), HL.Y(1), 18, 0, 45)} stroke={RED} strokeWidth={1.2} fill="none" />
      <Txt x={HL.X(1) + 22} y={HL.Y(1) - 6} size={8.5} weight="700" anchor="start" fill={RED}>
        π/4
      </Txt>
      <Dot x={HL.X(1)} y={HL.Y(1)} c={BLUE} r={3.4} open />
      <Txt x={HL.X(1.2)} y={HL.Y(1) + 14} size={8.5} anchor="start" fill={BLUE}>
        1 + i (not included)
      </Txt>
      <Axes f={HR} grid={0} xs={[[-2, '−2'], [2, '2']]} ys={[]} xName="Re" yName="Im" />
      <Circle cx={HR.X(0)} cy={HR.Y(4)} r={44} fill={SHADE} fillOpacity={0.5} stroke={BLUE} strokeWidth={1.8} />
      <Dot x={HR.X(0)} y={HR.Y(4)} c={BLUE} r={2.6} />
      <Txt x={HR.X(0) + 6} y={HR.Y(4) + 3} size={8.5} weight="700" anchor="start" fill={BLUE}>
        4i
      </Txt>
      {[60, 120].map((a) => (
        <G key={a}>
          <Line x1={HR.X(0)} y1={HR.Y(0)} x2={HR.X(1.3 * t * Math.cos(rad(a)))} y2={HR.Y(1.3 * t * Math.sin(rad(a)))} stroke={RED} strokeWidth={1.4} />
          <Dot x={HR.X(t * Math.cos(rad(a)))} y={HR.Y(t * Math.sin(rad(a)))} c={RED} />
        </G>
      ))}
      <Txt x={HR.X(2.4)} y={HR.Y(3.4)} size={8.5} weight="700" anchor="start" fill={RED}>
        π/3
      </Txt>
      <Txt x={HR.X(-2.4)} y={HR.Y(3.4)} size={8.5} weight="700" anchor="end" fill={RED}>
        2π/3
      </Txt>
      <Txt x={105} y={196} size={8.5} weight="700" fill={BLUE}>
        arg(z − 1 − i) = π/4
      </Txt>
      <Txt x={266} y={196} size={8.5} weight="700" fill={BLUE}>
        |z − 4i| = 2
      </Txt>
      <Txt x={266} y={210} size={8} fill={GREY}>
        π/3 ≤ arg z ≤ 2π/3
      </Txt>
    </G>
  );
}

// ---------- a plane and its normal ----------
function PlaneArt() {
  const A = [150, 128];
  const P = [240, 40];
  const F = [240, 118];
  return (
    <G>
      <Path d="M40 150 L220 150 L280 100 L100 100 Z" fill={SHADE} stroke={BLUE} strokeWidth={1.4} />
      <Arrow x1={A[0]} y1={A[1]} x2={A[0]} y2={50} c={RED} w={2} />
      <RightAngle x={A[0]} y={A[1]} u={[1, 0]} v={[0, -1]} s={8} />
      <Dot x={A[0]} y={A[1]} c={O} />
      <Txt x={A[0] + 6} y={56} size={10} weight="700" anchor="start" fill={RED}>
        n
      </Txt>
      <Txt x={A[0] - 6} y={A[1] + 14} size={8.5} weight="700" anchor="end">
        A (position a)
      </Txt>
      <Line x1={P[0]} y1={P[1]} x2={F[0]} y2={F[1]} stroke={GREEN} strokeWidth={1.6} strokeDasharray="4 3" />
      <Dot x={P[0]} y={P[1]} c={GREEN} />
      <Dot x={F[0]} y={F[1]} c={GREEN} r={2.4} />
      <Txt x={P[0] + 6} y={P[1] + 4} size={10} weight="700" anchor="start" fill={GREEN}>
        P
      </Txt>
      <Txt x={P[0] + 6} y={(P[1] + F[1]) / 2} size={8.5} weight="700" anchor="start" fill={GREEN}>
        distance
      </Txt>
      <Txt x={196} y={144} size={8.5} weight="700" anchor="start" fill={BLUE}>
        r·n = a·n
      </Txt>
      <Txt x={160} y={176} size={8.5} weight="700" fill={BLUE}>
        Cartesian form: ax + by + cz = d, with n = ai + bj + ck
      </Txt>
      <Txt x={160} y={192} size={8} fill={GREEN}>
        distance from P(x₁, y₁, z₁) = |ax₁ + by₁ + cz₁ − d| ÷ √(a² + b² + c²)
      </Txt>
    </G>
  );
}

// ---------- a line meeting a plane ----------
function LinePlaneArt() {
  const Qp = [160, 125];
  const U = [90, 40];
  const Fp = [90, 132];
  const down = [Qp[0] + 0.55 * (Qp[0] - U[0]), Qp[1] + 0.55 * (Qp[1] - U[1])];
  const a1 = (Math.atan2(-(Fp[1] - Qp[1]), Fp[0] - Qp[0]) * 180) / Math.PI;
  const a2 = (Math.atan2(-(U[1] - Qp[1]), U[0] - Qp[0]) * 180) / Math.PI;
  return (
    <G>
      <Path d="M30 155 L220 155 L290 100 L100 100 Z" fill={SHADE} stroke={BLUE} strokeWidth={1.4} />
      <Line x1={U[0]} y1={U[1]} x2={Qp[0]} y2={Qp[1]} stroke={O} strokeWidth={2} />
      <Line x1={Qp[0]} y1={Qp[1]} x2={down[0]} y2={down[1]} stroke={O} strokeWidth={1.6} strokeDasharray="4 3" />
      <Line x1={U[0]} y1={U[1]} x2={Fp[0]} y2={Fp[1]} stroke={GREY} strokeWidth={1} strokeDasharray="3 3" />
      <Line x1={Fp[0]} y1={Fp[1]} x2={Qp[0]} y2={Qp[1]} stroke={GREEN} strokeWidth={1.6} />
      <Arrow x1={Qp[0]} y1={Qp[1]} x2={Qp[0]} y2={45} c={RED} w={1.8} />
      <Path d={arcPath(Qp[0], Qp[1], 26, a2, a1)} stroke={AMBER} strokeWidth={1.4} fill="none" />
      <Dot x={Qp[0]} y={Qp[1]} />
      <Txt x={Qp[0] - 34} y={Qp[1] - 6} size={10} weight="700" fill={AMBER}>
        θ
      </Txt>
      <Txt x={Qp[0] + 6} y={52} size={10} weight="700" anchor="start" fill={RED}>
        n
      </Txt>
      <Txt x={U[0] - 6} y={U[1] + 4} size={9} weight="700" anchor="end">
        line, direction d
      </Txt>
      <Txt x={Qp[0] - 10} y={Qp[1] + 18} size={8.5} weight="700" anchor="end">
        meets the plane
      </Txt>
      <Txt x={160} y={186} size={8.5} weight="700">
        sin θ = |d·n| ÷ (|d||n|): the line makes 90° − θ with the normal
      </Txt>
    </G>
  );
}

// ---------- Newton–Raphson ----------
const NR = frame({ left: 30, top: 16, ux: 190, uy: 9, x0: 1.8, x1: 3.2, y0: -4, y1: 18 });
const nf = (x) => x ** 3 - 2 * x - 5;
const nd = (x) => 3 * x * x - 2;
function NewtonArt() {
  const { X, Y } = NR;
  const xs = [3];
  for (let k = 0; k < 3; k++) xs.push(xs[k] - nf(xs[k]) / nd(xs[k]));
  const names = ['x₀', 'x₁', 'x₂'];
  return (
    <G>
      <Axes f={NR} grid={0} xs={[]} ys={ticks([5, 10, 15])} origin={false} />
      <Path d={curve(NR, nf, 1.8, 3.2, 200)} stroke={BLUE} strokeWidth={2} fill="none" />
      {xs.slice(0, 3).map((x, k) => (
        <G key={k}>
          <Line x1={X(x)} y1={Y(0)} x2={X(x)} y2={Y(nf(x))} stroke={GREY} strokeWidth={1} strokeDasharray="3 3" />
          <Line x1={X(x)} y1={Y(nf(x))} x2={X(xs[k + 1])} y2={Y(0)} stroke={RED} strokeWidth={1.5} />
          <Dot x={X(x)} y={Y(nf(x))} c={RED} r={2.6} />
          <Txt x={X(x)} y={Y(0) + 13} size={9} weight="700" fill={RED}>
            {names[k]}
          </Txt>
        </G>
      ))}
      <Txt x={X(1.85)} y={Y(16)} size={9} weight="700" anchor="start" fill={BLUE}>
        y = x³ − 2x − 5
      </Txt>
      {[`x₀ = 3`, `x₁ = ${xs[1].toFixed(3)}`, `x₂ = ${xs[2].toFixed(3)}`, `x₃ = ${xs[3].toFixed(4)}`].map((t, i) => (
        <Txt key={t} x={X(1.85)} y={Y(13) + i * 14} size={8.5} anchor="start" fill={RED}>
          {t}
        </Txt>
      ))}
      <Txt x={160} y={226} size={8.5} weight="700">
        xₙ₊₁ = xₙ − f(xₙ)/f′(xₙ): follow each tangent down to the x-axis
      </Txt>
    </G>
  );
}

// ---------- the trapezium rule ----------
const TF = frame({ left: 30, top: 16, ux: 220, uy: 160, x0: -0.1, x1: 1.25, y0: -0.1, y1: 1.15 });
const gauss = (x) => Math.exp(-x * x);
function TrapeziumArt() {
  const { X, Y } = TF;
  const xs = [0, 0.25, 0.5, 0.75, 1];
  return (
    <G>
      {xs.slice(0, 4).map((x, i) => (
        <Path key={x} d={path([[X(x), Y(0)], [X(x), Y(gauss(x))], [X(xs[i + 1]), Y(gauss(xs[i + 1]))], [X(xs[i + 1]), Y(0)]]) + ' Z'} fill={i % 2 ? SHADE : CREAM} stroke={AMBER} strokeWidth={1.1} />
      ))}
      <Axes f={TF} grid={0} xs={[[0.25, '0.25'], [0.5, '0.5'], [0.75, '0.75'], [1, '1']]} ys={[[0.5, '0.5'], [1, '1']]} />
      <Path d={curve(TF, gauss, -0.1, 1.2, 120)} stroke={BLUE} strokeWidth={2} fill="none" />
      {xs.map((x, i) => (
        <Txt key={x} x={X(x) + 4} y={Y(gauss(x)) - 6} size={8} weight="700" anchor="start" fill={AMBER}>
          {`y${'₀₁₂₃₄'[i]} = ${gauss(x).toFixed(3)}`}
        </Txt>
      ))}
      <Txt x={X(0.375)} y={Y(0.25)} size={9} weight="700" fill={O}>
        ≈ 0.743
      </Txt>
      <Txt x={X(1.2)} y={Y(0.66)} size={8.5} weight="700" anchor="end" fill={BLUE}>
        y = e^(−x²)
      </Txt>
      <Txt x={170} y={240} size={8.5} fill={GREY}>
        ½h[y₀ + y₄ + 2(y₁ + y₂ + y₃)] with h = 0.25; the true value is 0.747
      </Txt>
    </G>
  );
}

// ---------- orthogonal circles ----------
const OF = frame({ left: 24, top: 16, ux: 24, x0: -3.4, x1: 4.4, y0: -6.4, y1: 2.4 });
function OrthogonalArt() {
  const { X, Y } = OF;
  return (
    <G>
      <Axes f={OF} grid={0} xs={ticks([-2, 2, 4])} ys={ticks([-6, -4, -2, 2])} />
      <Circle cx={X(2)} cy={Y(0)} r={48} fill="none" stroke={BLUE} strokeWidth={2} />
      <Circle cx={X(0)} cy={Y(-3)} r={72} fill="none" stroke={RED} strokeWidth={2} />
      <Line x1={X(-1.5)} y1={Y(1)} x2={X(4.2)} y2={Y(-2.8)} stroke={GREEN} strokeWidth={1.4} strokeDasharray="5 3" />
      <Line x1={X(2)} y1={Y(0)} x2={X(0)} y2={Y(0)} stroke={BLUE} strokeWidth={1.4} />
      <Line x1={X(0)} y1={Y(-3)} x2={X(0)} y2={Y(0)} stroke={RED} strokeWidth={1.4} />
      <RightAngle x={X(0)} y={Y(0)} u={[1, 0]} v={[0, 1]} s={8} />
      <Dot x={X(2)} y={Y(0)} c={BLUE} />
      <Dot x={X(0)} y={Y(-3)} c={RED} />
      <Dot x={X(36 / 13)} y={Y(-24 / 13)} c={GREEN} />
      <Txt x={X(2)} y={Y(0) - 7} size={8.5} weight="700" fill={BLUE}>
        C₁
      </Txt>
      <Txt x={X(0) + 6} y={Y(-3) + 4} size={8.5} weight="700" anchor="start" fill={RED}>
        C₂
      </Txt>
      {[['C₁(2, 0), r₁ = 2', BLUE], ['C₂(0, −3), r₂ = 3', RED], ['C₁C₂² = 13', O], ['= r₁² + r₂²', O], ['radii at O are', GREY], ['perpendicular', GREY], ['common chord:', GREEN], ['2x + 3y = 0', GREEN]].map(([t, c], i) => (
        <Txt key={t} x={226} y={40 + i * 17} size={8.5} weight={i === 2 || i === 3 ? '700' : '500'} anchor="start" fill={c}>
          {t}
        </Txt>
      ))}
    </G>
  );
}

export const A_MATHS_3 = {
  'am-integrals-table': columnsSpec(
    'Standard integrals and the choice of method',
    [
      { head: 'Standard forms', items: ['∫ 1/(a² + x²) dx', '= (1/a) tan⁻¹(x/a) + c', '∫ 1/√(a² − x²) dx', '= sin⁻¹(x/a) + c', '∫ tan x dx', '= ln|sec x| + c'] },
      { head: 'Trigonometric', items: ['sin²x = ½(1 − cos 2x)', 'cos²x = ½(1 + cos 2x)', 'tan²x = sec²x − 1', '2 sin A cos B =', 'sin(A + B) + sin(A − B)'] },
      { head: 'Choosing a method', items: ['f′/f: a logarithm', 'composite: substitute', 'product: by parts', 'rational: split first', '√(a² − x²): x = a sin θ'] },
    ],
    { colW: 118 },
  ),
  'am-quarter-circle': {
    title: '∫ (0 to 1) √(1 − x²) dx: a quarter circle',
    w: 345,
    h: 226,
    art: QuarterArt,
    labels: [],
    facts: [
      'y = √(1 − x²) for 0 ≤ x ≤ 1 is a quarter of the circle x² + y² = 1.',
      'The substitution x = sin θ turns the integral into ∫ (0 to π/2) cos²θ dθ.',
      'Its value π/4 ≈ 0.785 is a quarter of the area π of the unit circle.',
    ],
  },
  'am-volume-revolution': {
    title: 'A solid of revolution: y = √x rotated about the x-axis',
    w: 340,
    h: 284,
    art: VolumeArt,
    labels: [],
    facts: [
      'Rotating the region under y = √x, from x = 0 to x = 4, through 360° about the x-axis makes a bowl-shaped solid.',
      'A thin slice is a disc of radius y and thickness δx, with volume πy² δx.',
      'Adding the discs: V = π ∫ (0 to 4) x dx = 8π ≈ 25.1 cubic units.',
    ],
  },
  'am-centroid': {
    title: 'The centroid of the region under y = x²',
    w: 320,
    h: 244,
    art: CentroidArt,
    labels: [],
    facts: [
      'The region under y = x² from 0 to 2 has area A = 8/3.',
      'Each strip of area y δx has its centre at (x, ½y), so A x̄ = ∫ xy dx = 4 and A ȳ = ∫ ½y² dx = 16/5.',
      'The centroid is G(1.5, 1.2), nearer the tall right-hand side.',
    ],
  },
  'am-cooling': {
    title: 'Newton’s law of cooling',
    w: 340,
    h: 246,
    art: CoolingArt,
    labels: [],
    facts: [
      'dθ/dt = −k(θ − 20) gives θ = 20 + 70e^(−kt) for tea starting at 90 °C in a room at 20 °C.',
      'It is at 60 °C after 5 minutes, so k = ⅕ ln(7/4) ≈ 0.112 per minute.',
      'It reaches 40 °C after about 11.2 minutes, and approaches 20 °C but never reaches it.',
    ],
  },
  'am-if-steps': flowSpec(
    'Solving dy/dx + P(x)y = Q(x)',
    ['Standard form\ndy/dx + Py = Q', 'Integrating factor\nI = e^(∫P dx)', 'Multiply through\nd/dx (Iy) = IQ', 'Integrate\nIy = ∫ IQ dx', 'Divide by I\nuse the condition'],
    { perRow: 3, boxW: 108, note: 'dy/dx + 2y/x = x: I = x², so x²y = ¼x⁴ + c and y = ¼x² + c/x².' },
  ),
  'am-damped': {
    title: 'Simple harmonic and damped oscillations',
    w: 340,
    h: 258,
    art: DampedArt,
    labels: [],
    facts: [
      'y = cos 2x solves y″ + 4y = 0: an oscillation of period π that never dies away.',
      'y = e^(−x/4) cos 2x solves y″ + ½y′ + 4.0625y = 0, whose auxiliary roots are −¼ ± 2i.',
      'The factor e^(−x/4) is the envelope: the damped oscillations shrink inside it.',
    ],
  },
  'am-argand': {
    title: 'The Argand diagram',
    w: 340,
    h: 250,
    art: ArgandArt,
    labels: [],
    facts: [
      'z = 3 + 2i is the point (3, 2); its conjugate z̄ = 3 − 2i is its reflection in the real axis.',
      'Adding w = −1 + 2i gives z + w = 2 + 4i, the fourth corner of the parallelogram on O, z and w.',
      'z z̄ = 3² + 2² = 13 = |z|².',
    ],
  },
  'am-polar': {
    title: 'Modulus and argument of z = −√3 + i',
    w: 340,
    h: 236,
    art: PolarArt,
    labels: [],
    facts: [
      'z = −√3 + i lies in the second quadrant, 2 units from O, so |z| = 2.',
      'It makes π/6 with the negative real axis, so arg z = π − π/6 = 5π/6.',
      'In polar form z = 2(cos 5π/6 + i sin 5π/6) = 2e^(5πi/6).',
    ],
  },
  'am-roots': {
    title: 'The cube roots of 8i',
    w: 300,
    h: 298,
    art: RootsArt,
    labels: [],
    facts: [
      '8i = 8e^(iπ/2), so the cube roots are 2e^(i(π/2 + 2kπ)/3) for k = 0, 1, 2.',
      'They are √3 + i, −√3 + i and −2i, all of modulus 2.',
      'They are 120° (2π/3) apart, at the corners of an equilateral triangle.',
    ],
  },
  'am-argand-loci': {
    title: 'The locus |z − 3 − 4i| = 2',
    w: 280,
    h: 292,
    art: LociArt,
    labels: [],
    facts: [
      '|z − (3 + 4i)| = 2 is the circle with centre 3 + 4i and radius 2.',
      'The centre is |3 + 4i| = 5 from O, so along the line through O and the centre the circle is 3 and 7 from O.',
      'On this locus 3 ≤ |z| ≤ 7.',
    ],
  },
  'am-arg-loci': {
    title: 'Half-lines and the extreme arguments on a circle',
    w: 350,
    h: 216,
    art: ArgLociArt,
    labels: [],
    facts: [
      'arg(z − 1 − i) = π/4 is the half-line from 1 + i at 45°; the point 1 + i itself is excluded.',
      'For the circle |z − 4i| = 2, the tangents from O touch it where sin α = 2/4, α = π/6 either side of the imaginary axis.',
      'So arg z on that circle lies between π/3 and 2π/3.',
    ],
  },
  'am-plane': {
    title: 'A plane, its normal and the distance from a point',
    w: 320,
    h: 200,
    art: PlaneArt,
    labels: [],
    facts: [
      'A plane through A with normal n is r·n = a·n; in Cartesian form ax + by + cz = d.',
      'The normal n = ai + bj + ck is perpendicular to every line in the plane.',
      'The perpendicular distance from P to the plane is |ax₁ + by₁ + cz₁ − d| ÷ √(a² + b² + c²).',
    ],
  },
  'am-line-plane': {
    title: 'The angle between a line and a plane',
    w: 320,
    h: 196,
    art: LinePlaneArt,
    labels: [],
    facts: [
      'A line meets the plane at one point, found by substituting r = a + λd into the plane’s equation.',
      'The angle θ between the line and the plane is measured to the line’s projection in the plane.',
      'The line makes 90° − θ with the normal, so sin θ = |d·n| ÷ (|d||n|).',
    ],
  },
  'am-newton-raphson': {
    title: 'Newton–Raphson for x³ − 2x − 5 = 0',
    w: 330,
    h: 236,
    art: NewtonArt,
    labels: [],
    facts: [
      'Starting from x₀ = 3, each step follows the tangent at (xₙ, f(xₙ)) down to the x-axis.',
      'The iterates 3, 2.360, 2.127, 2.095 close in quickly on the root 2.0946.',
      'xₙ₊₁ = xₙ − f(xₙ)/f′(xₙ), with f′(x) = 3x² − 2.',
    ],
  },
  'am-trapezium': {
    title: 'The trapezium rule for ∫ (0 to 1) e^(−x²) dx',
    w: 340,
    h: 248,
    art: TrapeziumArt,
    labels: [],
    facts: [
      'Four strips of width 0.25 replace the curve by chords; the ordinates are 1, 0.939, 0.779, 0.570 and 0.368.',
      '½ × 0.25 × [1 + 0.368 + 2(0.939 + 0.779 + 0.570)] ≈ 0.743.',
      'The true value is 0.747; more strips would give a closer estimate.',
    ],
  },
  'am-orthogonal-circles': {
    title: 'Orthogonal circles and their common chord',
    w: 340,
    h: 236,
    art: OrthogonalArt,
    labels: [],
    facts: [
      'x² + y² − 4x = 0 has centre (2, 0) and radius 2; x² + y² + 6y = 0 has centre (0, −3) and radius 3.',
      'C₁C₂² = 4 + 9 = 13 = r₁² + r₂², so the circles cut at right angles: at O the two radii are perpendicular.',
      'Subtracting the equations gives the common chord 2x + 3y = 0, through O and (36/13, −24/13).',
    ],
  },
};
