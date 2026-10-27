// A Level Further Mathematics figures (0775): a point in polar coordinates,
// polar curves and their areas, the hyperbolic functions and their inverses,
// the three papers, the kernel and image of a matrix, eigenvectors,
// diagonalisation, Maclaurin and Taylor polynomials, reduction formulae, arc
// length, a surface of revolution, improper integrals, conics, forced
// oscillations and resonance, Euler's method, Simpson's rule, a Cayley table
// and the symmetries of a triangle. Every graph is calculated and drawn to
// scale; figures with circles or angles use equal units on both axes.
import { Ellipse, G, Line, Path, Rect } from 'react-native-svg';
import { Head, Txt } from './Diagram';
import { columnsSpec } from './charts';
import { AM, Arrow, Axes, Dot, Matrix, curve, frame, path, rad, ticks } from './aMaths';

const { O, GRID, GREY, BLUE, RED, GREEN, AMBER, SHADE, PINK, CREAM } = AM;
const PI = Math.PI;

// A polar curve r = fn(θ) for a ≤ θ ≤ b, broken wherever r < 0.
function polar(f, fn, a, b, n = 360) {
  const segs = [];
  let cur = [];
  for (let i = 0; i <= n; i++) {
    const t = a + ((b - a) * i) / n;
    const r = fn(t);
    if (r < 0) {
      if (cur.length > 1) segs.push(cur);
      cur = [];
    } else cur.push([f.X(r * Math.cos(t)), f.Y(r * Math.sin(t))]);
  }
  if (cur.length > 1) segs.push(cur);
  return segs.map(path).join(' ');
}
// A parametric curve (x(t), y(t)).
const param = (f, fx, fy, a, b, n = 200) => path(Array.from({ length: n + 1 }, (_, i) => a + ((b - a) * i) / n).map((t) => [f.X(fx(t)), f.Y(fy(t))]));
// Plain axes through the origin of a frame, without numbers.
function Cross({ f, xName = 'x', yName = 'y' }) {
  return (
    <G>
      <Arrow x1={f.X(f.x0)} y1={f.Y(0)} x2={f.X(f.x1) + 6} y2={f.Y(0)} w={1.1} size={5} />
      <Arrow x1={f.X(0)} y1={f.Y(f.y0)} x2={f.X(0)} y2={f.Y(f.y1) - 6} w={1.1} size={5} />
      <Txt x={f.X(f.x1) + 8} y={f.Y(0) + 12} size={8.5} italic>
        {xName}
      </Txt>
      <Txt x={f.X(0) - 7} y={f.Y(f.y1) - 2} size={8.5} italic>
        {yName}
      </Txt>
    </G>
  );
}
// Small coloured line and text, for a key below a graph.
function Key({ x, y, c, dash, children }) {
  return (
    <G>
      <Line x1={x} y1={y - 3} x2={x + 16} y2={y - 3} stroke={c} strokeWidth={2.2} strokeDasharray={dash} />
      <Txt x={x + 21} y={y} size={8.5} anchor="start">
        {children}
      </Txt>
    </G>
  );
}

// ---------- a point in polar coordinates ----------
const PP = frame({ left: 20, top: 16, ux: 48, x0: -3.3, x1: 3.3, y0: -0.4, y1: 3.3 });
function PolarPointArt() {
  const { X, Y } = PP;
  const P = [-1, Math.sqrt(3)];
  return (
    <G>
      {[1, 2, 3].map((r) => (
        <Path key={r} d={`M${X(r)} ${Y(0)} A${r * 48} ${r * 48} 0 0 0 ${X(-r)} ${Y(0)}`} stroke={GRID} strokeWidth={1} fill="none" />
      ))}
      {[30, 60, 90, 120, 150].map((d) => (
        <Line key={d} x1={X(0)} y1={Y(0)} x2={X(3.1 * Math.cos(rad(d)))} y2={Y(3.1 * Math.sin(rad(d)))} stroke={GRID} strokeWidth={1} />
      ))}
      <Line x1={X(-3.3)} y1={Y(0)} x2={X(0)} y2={Y(0)} stroke={GREY} strokeWidth={1} />
      <Arrow x1={X(0)} y1={Y(0)} x2={X(3.3) + 4} y2={Y(0)} w={1.3} size={5} />
      <Txt x={X(3.2)} y={Y(0) - 6} size={8.5} anchor="end">
        initial line
      </Txt>
      {[1, 2, 3].map((r) => (
        <Txt key={r} x={X(r)} y={Y(0) + 12} size={8.5}>
          {r}
        </Txt>
      ))}
      <Dot x={X(0)} y={Y(0)} />
      <Txt x={X(0)} y={Y(0) + 12} size={8.5}>
        O
      </Txt>
      <Line x1={X(P[0])} y1={Y(P[1])} x2={X(P[0])} y2={Y(0)} stroke={GREY} strokeWidth={1} strokeDasharray="3 3" />
      <Line x1={X(P[0])} y1={Y(P[1])} x2={X(0)} y2={Y(P[1])} stroke={GREY} strokeWidth={1} strokeDasharray="3 3" />
      <Line x1={X(0)} y1={Y(0)} x2={X(P[0])} y2={Y(P[1])} stroke={BLUE} strokeWidth={2} />
      <Path d={`M${X(0.55)} ${Y(0)} A${0.55 * 48} ${0.55 * 48} 0 0 0 ${X(0.55 * Math.cos(rad(120)))} ${Y(0.55 * Math.sin(rad(120)))}`} stroke={RED} strokeWidth={1.4} fill="none" />
      <Txt x={X(0.95 * Math.cos(rad(55)))} y={Y(0.95 * Math.sin(rad(55)))} size={9} weight="700" fill={RED}>
        θ = 2π/3
      </Txt>
      <Txt x={X(-0.36)} y={Y(1.25)} size={9} weight="700" anchor="start" fill={BLUE}>
        r = 2
      </Txt>
      <Dot x={X(P[0])} y={Y(P[1])} c={RED} r={3.5} />
      <Txt x={X(P[0]) - 6} y={Y(P[1]) - 7} size={9} weight="700" anchor="end">
        P(2, 2π/3)
      </Txt>
      <Txt x={X(P[0])} y={Y(0) + 12} size={8.5} fill={GREY}>
        −1
      </Txt>
      <Txt x={X(0) + 5} y={Y(P[1]) + 3} size={8.5} anchor="start" fill={GREY}>
        √3
      </Txt>
      <Txt x={175} y={216} size={9}>
        x = r cos θ = 2 cos(2π/3) = −1
      </Txt>
      <Txt x={175} y={230} size={9}>
        y = r sin θ = 2 sin(2π/3) = √3
      </Txt>
    </G>
  );
}

// ---------- the cardioid and the rose ----------
const CA = frame({ left: 16, top: 14, ux: 30, x0: -0.8, x1: 4.4, y0: -2.8, y1: 2.8 });
const RS = frame({ left: 204, top: 10, ux: 28, x0: -3.2, x1: 3.2, y0: -3.2, y1: 3.2 });
function PolarCurvesArt() {
  const card = (t) => 2 * (1 + Math.cos(t));
  const rose = (t) => 3 * Math.sin(3 * t);
  return (
    <G>
      <Line x1={CA.X(-0.8)} y1={CA.Y(0)} x2={CA.X(4.4)} y2={CA.Y(0)} stroke={GREY} strokeWidth={1} />
      <Line x1={CA.X(0)} y1={CA.Y(-2.8)} x2={CA.X(0)} y2={CA.Y(2.8)} stroke={GREY} strokeWidth={1} />
      <Path d={`${polar(CA, card, 0, 2 * PI)} Z`} stroke={BLUE} strokeWidth={2} fill={SHADE} />
      <Dot x={CA.X(0)} y={CA.Y(0)} />
      <Txt x={CA.X(4) + 5} y={CA.Y(0) + 12} size={8.5} anchor="start">
        4
      </Txt>
      <Line x1={RS.X(-3.2)} y1={RS.Y(0)} x2={RS.X(3.2)} y2={RS.Y(0)} stroke={GREY} strokeWidth={1} />
      <Line x1={RS.X(0)} y1={RS.Y(-3.2)} x2={RS.X(0)} y2={RS.Y(3.2)} stroke={GREY} strokeWidth={1} />
      <Path d={`${polar(RS, rose, 0, PI / 3, 120)} Z`} stroke="none" fill={PINK} />
      <Path d={polar(RS, rose, 0, 2 * PI, 720)} stroke={RED} strokeWidth={2} fill="none" />
      <Dot x={RS.X(0)} y={RS.Y(0)} />
      <Txt x={RS.X(3)} y={RS.Y(0) + 12} size={8.5}>
        3
      </Txt>
      <Txt x={94} y={212} size={9} weight="700" fill={BLUE}>
        r = 2(1 + cos θ)
      </Txt>
      <Txt x={94} y={226} size={9}>
        enclosed area = 6π
      </Txt>
      <Txt x={294} y={212} size={9} weight="700" fill={RED}>
        r = 3 sin 3θ
      </Txt>
      <Txt x={294} y={226} size={9}>
        shaded petal = 3π/4
      </Txt>
    </G>
  );
}

// ---------- sinh, cosh and tanh ----------
const HF = frame({ left: 34, top: 14, ux: 52, uy: 26, x0: -2.6, x1: 2.6, y0: -3.2, y1: 4.2 });
function HyperbolicArt() {
  const { X, Y } = HF;
  return (
    <G>
      <Axes f={HF} xs={ticks([-2, -1, 1, 2])} ys={ticks([-2, -1, 1, 2, 3, 4])} />
      {[1, -1].map((v) => (
        <Line key={v} x1={X(-2.6)} y1={Y(v)} x2={X(2.6)} y2={Y(v)} stroke={GREEN} strokeWidth={1} strokeDasharray="4 3" />
      ))}
      <Path d={curve(HF, Math.cosh, -2.6, 2.6)} stroke={RED} strokeWidth={2} fill="none" />
      <Path d={curve(HF, Math.sinh, -2.6, 2.6)} stroke={BLUE} strokeWidth={2} fill="none" />
      <Path d={curve(HF, Math.tanh, -2.6, 2.6)} stroke={GREEN} strokeWidth={2} fill="none" />
      <Txt x={X(-1.85)} y={Y(3.75)} size={9} weight="700" anchor="start" fill={RED}>
        y = cosh x
      </Txt>
      <Txt x={X(-1.45)} y={Y(-2.65)} size={9} weight="700" anchor="start" fill={BLUE}>
        y = sinh x
      </Txt>
      <Txt x={X(1.5)} y={Y(0.55)} size={9} weight="700" anchor="start" fill={GREEN}>
        y = tanh x
      </Txt>
      <Txt x={X(-2.55)} y={Y(1) - 4} size={8.5} anchor="start" fill={GREEN}>
        y = 1
      </Txt>
      <Txt x={X(-2.55)} y={Y(-1) + 11} size={8.5} anchor="start" fill={GREEN}>
        y = −1
      </Txt>
    </G>
  );
}

// ---------- arsinh, arcosh and artanh ----------
const IF = frame({ left: 26, top: 14, ux: 36, x0: -4.2, x1: 4.4, y0: -2.6, y1: 2.6 });
function InverseHyperbolicArt() {
  const { X, Y } = IF;
  return (
    <G>
      <Axes f={IF} xs={ticks([-4, -3, -2, -1, 1, 2, 3, 4])} ys={ticks([-2, -1, 1, 2])} />
      {[1, -1].map((v) => (
        <Line key={v} x1={X(v)} y1={Y(-2.6)} x2={X(v)} y2={Y(2.6)} stroke={GREEN} strokeWidth={1} strokeDasharray="4 3" />
      ))}
      <Path d={curve(IF, Math.asinh, -4.2, 4.4)} stroke={BLUE} strokeWidth={2} fill="none" />
      <Path d={curve(IF, Math.acosh, 1, 4.4)} stroke={RED} strokeWidth={2} fill="none" />
      <Path d={curve(IF, Math.atanh, -0.996, 0.996, 400)} stroke={GREEN} strokeWidth={2} fill="none" />
      <Txt x={X(-4.1)} y={Y(-2.3)} size={9} weight="700" anchor="start" fill={BLUE}>
        y = arsinh x
      </Txt>
      <Txt x={X(3.2)} y={Y(1.15)} size={9} weight="700" fill={RED}>
        y = arcosh x
      </Txt>
      <Txt x={X(1.15)} y={Y(2.3)} size={9} weight="700" anchor="start" fill={GREEN}>
        y = artanh x
      </Txt>
      <Txt x={X(1) + 3} y={Y(-2.35)} size={8.5} anchor="start" fill={GREEN}>
        x = 1
      </Txt>
      <Txt x={X(-1) - 3} y={Y(-2.35)} size={8.5} anchor="end" fill={GREEN}>
        x = −1
      </Txt>
    </G>
  );
}

// ---------- the kernel and the image ----------
const KL = frame({ left: 22, top: 26, ux: 30, x0: -2.6, x1: 2.6, y0: -1.8, y1: 2.6 });
const KR = frame({ left: 226, top: 26, ux: 24, x0: -1.4, x1: 3.4, y0: -1.2, y1: 4.8 });
function KernelArt() {
  return (
    <G>
      <Txt x={(KL.X(-2.6) + KL.X(2.6)) / 2} y={14} size={9} weight="700">
        the plane
      </Txt>
      <Txt x={(KR.X(-1.4) + KR.X(3.4)) / 2} y={14} size={9} weight="700">
        its image
      </Txt>
      <Cross f={KL} />
      <Line x1={KL.X(-2.6)} y1={KL.Y(1.3)} x2={KL.X(2.6)} y2={KL.Y(-1.3)} stroke={RED} strokeWidth={2} />
      <Txt x={KL.X(-2.5)} y={KL.Y(-1.45)} size={8.5} weight="700" anchor="start" fill={RED}>
        kernel: x + 2y = 0
      </Txt>
      {[[1, 0, BLUE, '(1, 0)'], [0, 1, BLUE, '(0, 1)'], [2, -1, RED, '(2, −1)'], [-2, 1, RED, '(−2, 1)']].map(([x, y, c, t]) => (
        <G key={t}>
          <Dot x={KL.X(x)} y={KL.Y(y)} c={c} />
          <Txt x={KL.X(x) + (y < 0 ? -5 : 5)} y={KL.Y(y) + (y < 0 ? 12 : -5)} size={8.5} anchor={y < 0 ? 'end' : 'start'} fill={c}>
            {t}
          </Txt>
        </G>
      ))}
      <Arrow x1={184} y1={96} x2={220} y2={96} w={1.6} size={6} />
      <Txt x={202} y={88} size={9} weight="700" italic>
        M
      </Txt>
      <Cross f={KR} />
      <Line x1={KR.X(-0.6)} y1={KR.Y(-1.2)} x2={KR.X(2.4)} y2={KR.Y(4.8)} stroke={BLUE} strokeWidth={2} />
      {[[1, 2, '(1, 2)'], [2, 4, '(2, 4)']].map(([x, y, t]) => (
        <G key={t}>
          <Dot x={KR.X(x)} y={KR.Y(y)} c={BLUE} />
          <Txt x={KR.X(x) + 6} y={KR.Y(y) + 3} size={8.5} anchor="start" fill={BLUE}>
            {t}
          </Txt>
        </G>
      ))}
      <Dot x={KR.X(0)} y={KR.Y(0)} c={RED} r={3.5} />
      <Txt x={KR.X(0) + 6} y={KR.Y(0) + 12} size={8.5} anchor="start" fill={RED}>
        the kernel goes to O
      </Txt>
      <Txt x={KR.X(2.5)} y={KR.Y(4.4)} size={8.5} weight="700" anchor="start" fill={BLUE}>
        y = 2x
      </Txt>
      <Txt x={180} y={204} size={9}>
        M = [1 2; 2 4]: rank 1 + nullity 1 = 2 columns
      </Txt>
    </G>
  );
}

// ---------- eigenvectors of [4 1; 2 3] ----------
const EF = frame({ left: 30, top: 14, ux: 19, x0: -1.4, x1: 5.6, y0: -4.6, y1: 5.6 });
function EigenArt() {
  const { X, Y } = EF;
  const vec = (x, y, c, w = 1.6, dash) => <Arrow x1={X(0)} y1={Y(0)} x2={X(x)} y2={Y(y)} c={c} w={w} size={6} dash={dash} />;
  return (
    <G>
      <Axes f={EF} xs={ticks([1, 2, 3, 4, 5])} ys={ticks([-4, -2, 2, 4])} />
      <Line x1={X(-1.4)} y1={Y(-1.4)} x2={X(5.6)} y2={Y(5.6)} stroke={BLUE} strokeWidth={1} strokeDasharray="4 3" />
      <Line x1={X(-1.4)} y1={Y(2.8)} x2={X(2.3)} y2={Y(-4.6)} stroke={GREEN} strokeWidth={1} strokeDasharray="4 3" />
      {vec(5, 5, '#9cc3e6', 4)}
      {vec(1, 1, BLUE, 2)}
      {vec(2, -4, '#9fd0a2', 4)}
      {vec(1, -2, GREEN, 2)}
      {vec(4, 2, GREY, 1.4, '4 3')}
      {vec(1, 0, GREY, 2)}
      <Txt x={186} y={44} size={9.5} weight="700" anchor="start">
        A = [4 1; 2 3]
      </Txt>
      <Txt x={186} y={68} size={9} anchor="start" fill={BLUE}>
        (1, 1) → (5, 5): λ = 5
      </Txt>
      <Txt x={186} y={88} size={9} anchor="start" fill={GREEN}>
        (1, −2) → (2, −4): λ = 2
      </Txt>
      <Txt x={186} y={108} size={9} anchor="start" fill={GREY}>
        (1, 0) → (4, 2): turned,
      </Txt>
      <Txt x={186} y={122} size={9} anchor="start" fill={GREY}>
        so not an eigenvector
      </Txt>
      <Txt x={186} y={146} size={9} anchor="start">
        Dashed lines: the invariant
      </Txt>
      <Txt x={186} y={160} size={9} anchor="start">
        lines y = x and y = −2x
      </Txt>
    </G>
  );
}

// ---------- A = PDP⁻¹ ----------
function DiagonaliseArt() {
  return (
    <G>
      <Txt x={18} y={52} size={11} weight="700" anchor="start" italic>
        A
      </Txt>
      <Matrix x={32} y={30} rows={[['4', '1'], ['2', '3']]} />
      <Txt x={102} y={52} size={12}>
        =
      </Txt>
      <Matrix x={114} y={30} rows={[['1', '1'], ['1', '−2']]} hl={[[0, 0], [1, 0]]} hlFill={SHADE} />
      <Matrix x={186} y={30} rows={[['5', '0'], ['0', '2']]} hl={[[0, 0], [1, 1]]} />
      <Txt x={268} y={52} size={11}>
        ⅓
      </Txt>
      <Matrix x={276} y={30} rows={[['2', '1'], ['1', '−1']]} />
      <Txt x={146} y={84} size={8.5} fill={BLUE}>
        P: eigenvectors
      </Txt>
      <Txt x={218} y={84} size={8.5} fill={AMBER}>
        D: eigenvalues
      </Txt>
      <Txt x={308} y={84} size={8.5}>
        P⁻¹
      </Txt>
      <Txt x={18} y={140} size={11} weight="700" anchor="start">
        A³ = P
      </Txt>
      <Matrix x={64} y={118} rows={[['125', '0'], ['0', '8']]} cw={28} hl={[[0, 0], [1, 1]]} />
      <Txt x={142} y={140} size={11} weight="700" anchor="start">
        P⁻¹ =
      </Txt>
      <Matrix x={180} y={118} rows={[['86', '39'], ['78', '47']]} cw={28} />
      <Txt x={262} y={140} size={8.5} anchor="start" fill={GREY}>
        = A² × A
      </Txt>
    </G>
  );
}

// ---------- sin x and its Maclaurin polynomials ----------
const MF = frame({ left: 26, top: 14, ux: 31, uy: 42, x0: -5, x1: 5, y0: -2.1, y1: 2.1 });
function MaclaurinArt() {
  return (
    <G>
      <Axes f={MF} grid={0} xs={ticks([-4, -2, 2, 4])} ys={[[1, '1'], [-1, '−1']]} />
      <Path d={curve(MF, (x) => x, -5, 5)} stroke={GREY} strokeWidth={1.4} strokeDasharray="4 3" fill="none" />
      <Path d={curve(MF, (x) => x - x ** 3 / 6, -5, 5, 300)} stroke={BLUE} strokeWidth={1.8} fill="none" />
      <Path d={curve(MF, (x) => x - x ** 3 / 6 + x ** 5 / 120, -5, 5, 300)} stroke={GREEN} strokeWidth={1.8} fill="none" />
      <Path d={curve(MF, Math.sin, -5, 5, 300)} stroke={O} strokeWidth={2.4} fill="none" />
      <Key x={30} y={212} c={O}>
        sin x
      </Key>
      <Key x={110} y={212} c={GREY} dash="4 3">
        x
      </Key>
      <Key x={30} y={228} c={BLUE}>
        x − x³/3!
      </Key>
      <Key x={150} y={228} c={GREEN}>
        x − x³/3! + x⁵/5!
      </Key>
    </G>
  );
}

// ---------- ln x and its Taylor polynomials about x = 1 ----------
const TF = frame({ left: 30, top: 14, ux: 95, uy: 48, x0: 0, x1: 3.1, y0: -2.2, y1: 1.4 });
function TaylorArt() {
  const { X, Y } = TF;
  return (
    <G>
      <Axes f={TF} grid={0} xs={ticks([1, 2, 3])} ys={ticks([-2, -1, 1])} />
      <Path d={curve(TF, (x) => x - 1, 0, 3.1)} stroke={GREY} strokeWidth={1.4} strokeDasharray="4 3" fill="none" />
      <Path d={curve(TF, (x) => x - 1 - (x - 1) ** 2 / 2, 0, 3.1)} stroke={BLUE} strokeWidth={1.8} fill="none" />
      <Path d={curve(TF, (x) => x - 1 - (x - 1) ** 2 / 2 + (x - 1) ** 3 / 3, 0, 3.1)} stroke={GREEN} strokeWidth={1.8} fill="none" />
      <Path d={curve(TF, Math.log, 0.08, 3.1)} stroke={O} strokeWidth={2.4} fill="none" />
      <Dot x={X(1)} y={Y(0)} c={RED} r={3.5} />
      <Key x={30} y={212} c={O}>
        ln x
      </Key>
      <Key x={110} y={212} c={GREY} dash="4 3">
        x − 1
      </Key>
      <Key x={30} y={228} c={BLUE}>
        (x − 1) − (x − 1)²/2
      </Key>
      <Key x={190} y={228} c={GREEN}>
        … + (x − 1)³/3
      </Key>
    </G>
  );
}

// ---------- sinⁿx on [0, π/2] ----------
const RF = frame({ left: 30, top: 14, ux: 180, uy: 150, x0: 0, x1: PI / 2 + 0.05, y0: 0, y1: 1.1 });
function ReductionArt() {
  const { X, Y } = RF;
  const area = [[X(0), Y(0)], ...Array.from({ length: 121 }, (_, i) => [X((i / 120) * (PI / 2)), Y(Math.sin((i / 120) * (PI / 2)) ** 6)]), [X(PI / 2), Y(0)]];
  const rows = [
    [O, 1, 'sin x: I₁ = 1'],
    [BLUE, 2, 'sin²x: I₂ = π/4 ≈ 0.785'],
    [GREEN, 4, 'sin⁴x: I₄ = 3π/16 ≈ 0.589'],
    [RED, 6, 'sin⁶x: I₆ = 5π/32 ≈ 0.491'],
  ];
  return (
    <G>
      <Path d={`${path(area)} Z`} fill={PINK} stroke="none" />
      <Axes f={RF} grid={0} xs={[[PI / 4, 'π/4'], [PI / 2, 'π/2']]} ys={[[1, '1']]} />
      {rows.map(([c, n]) => (
        <Path key={n} d={curve(RF, (x) => Math.sin(x) ** n, 0, PI / 2)} stroke={c} strokeWidth={2} fill="none" />
      ))}
      {rows.map(([c, n, t], i) => (
        <Key key={t} x={i % 2 ? 180 : 30} y={i < 2 ? 210 : 226} c={c}>
          {t}
        </Key>
      ))}
    </G>
  );
}

// ---------- arc length ----------
const AF = frame({ left: 36, top: 14, ux: 150, uy: 60, x0: -0.05, x1: 1.55, y0: 0, y1: 2.6 });
function ArcArt() {
  const { X, Y } = AF;
  const a = 0.8;
  const b = 1.2;
  return (
    <G>
      <Axes f={AF} grid={0} xs={[[Math.log(2), 'ln 2'], [1, '1']]} ys={[[1, '1'], [2, '2']]} />
      <Path d={curve(AF, Math.cosh, -0.05, 1.55)} stroke={O} strokeWidth={1.8} fill="none" />
      <Path d={curve(AF, Math.cosh, 0, Math.log(2))} stroke={RED} strokeWidth={4} fill="none" />
      <Txt x={X(0.05)} y={Y(1.45)} size={9} weight="700" anchor="start" fill={RED}>
        length from 0 to ln 2 = ¾
      </Txt>
      <Line x1={X(a)} y1={Y(Math.cosh(a))} x2={X(b)} y2={Y(Math.cosh(a))} stroke={GREEN} strokeWidth={1.6} />
      <Line x1={X(b)} y1={Y(Math.cosh(a))} x2={X(b)} y2={Y(Math.cosh(b))} stroke={GREEN} strokeWidth={1.6} />
      <Line x1={X(a)} y1={Y(Math.cosh(a))} x2={X(b)} y2={Y(Math.cosh(b))} stroke={BLUE} strokeWidth={2.2} />
      <Txt x={(X(a) + X(b)) / 2} y={Y(Math.cosh(a)) + 12} size={9} weight="700" fill={GREEN}>
        δx
      </Txt>
      <Txt x={X(b) + 5} y={(Y(Math.cosh(a)) + Y(Math.cosh(b))) / 2 + 3} size={9} weight="700" anchor="start" fill={GREEN}>
        δy
      </Txt>
      <Txt x={(X(a) + X(b)) / 2 - 8} y={(Y(Math.cosh(a)) + Y(Math.cosh(b))) / 2 - 6} size={9} weight="700" anchor="end" fill={BLUE}>
        δs
      </Txt>
      <Txt x={X(1.5)} y={Y(2.45)} size={9} anchor="end">
        y = cosh x
      </Txt>
      <Txt x={170} y={204} size={9}>
        δs² ≈ δx² + δy², so s = ∫ √(1 + (dy/dx)²) dx
      </Txt>
    </G>
  );
}

// ---------- a surface of revolution ----------
const SF = frame({ left: 20, top: 16, ux: 62, uy: 40, x0: -0.2, x1: 4.3, y0: -2.4, y1: 2.4 });
function SurfaceArt() {
  const { X, Y } = SF;
  const rx = 9;
  const ring = (x, c, w = 1) => <Ellipse key={x} cx={X(x)} cy={Y(0)} rx={rx} ry={Math.sqrt(x) * 40} stroke={c} strokeWidth={w} fill="none" />;
  const a = 2.2;
  const b = 2.6;
  const band = `M${X(a)} ${Y(Math.sqrt(a))} L${X(b)} ${Y(Math.sqrt(b))} A${rx} ${Math.sqrt(b) * 40} 0 0 1 ${X(b)} ${Y(-Math.sqrt(b))} L${X(a)} ${Y(-Math.sqrt(a))} A${rx} ${Math.sqrt(a) * 40} 0 0 0 ${X(a)} ${Y(Math.sqrt(a))} Z`;
  return (
    <G>
      {[1, 3, 4].map((x) => ring(x, GREY))}
      <Path d={band} fill={PINK} stroke={RED} strokeWidth={1.4} />
      <Line x1={X(-0.2)} y1={Y(0)} x2={X(4.3)} y2={Y(0)} stroke={O} strokeWidth={1} strokeDasharray="6 3" />
      <Path d={curve(SF, Math.sqrt, 0, 4)} stroke={BLUE} strokeWidth={2.2} fill="none" />
      <Path d={curve(SF, (x) => -Math.sqrt(x), 0, 4)} stroke={BLUE} strokeWidth={1.2} strokeDasharray="4 3" fill="none" />
      <Line x1={X(2.4)} y1={Y(0)} x2={X(2.4)} y2={Y(Math.sqrt(2.4))} stroke={GREEN} strokeWidth={1.6} />
      <Txt x={X(2.4) - 4} y={Y(0.55)} size={9} weight="700" anchor="end" fill={GREEN}>
        y
      </Txt>
      <Txt x={X(2.4)} y={Y(Math.sqrt(2.4)) - 8} size={9} weight="700" fill={RED}>
        δs
      </Txt>
      <Txt x={X(0.7)} y={Y(1.55)} size={9} weight="700" anchor="start" fill={BLUE}>
        y = √x
      </Txt>
      <Txt x={165} y={214} size={9}>
        dashed line: the axis of rotation
      </Txt>
      <Txt x={165} y={228} size={9}>
        band area ≈ 2πy δs, so S = 2π ∫ y ds
      </Txt>
    </G>
  );
}

// ---------- improper integrals ----------
const IMF = frame({ left: 30, top: 14, ux: 36, uy: 130, x0: 0, x1: 8.5, y0: 0, y1: 1.25 });
function ImproperArt() {
  const { X, Y } = IMF;
  const area = [[X(1), Y(0)], ...Array.from({ length: 151 }, (_, i) => [X(1 + (i / 150) * 7.5), Y(1 / (1 + (i / 150) * 7.5) ** 2)]), [X(8.5), Y(0)]];
  return (
    <G>
      <Path d={`${path(area)} Z`} fill={SHADE} stroke="none" />
      <Axes f={IMF} grid={0} xs={ticks([1, 2, 4, 6, 8])} ys={[[1, '1']]} />
      <Line x1={X(1)} y1={Y(0)} x2={X(1)} y2={Y(1.25)} stroke={GREY} strokeWidth={1} strokeDasharray="3 3" />
      <Path d={curve(IMF, (x) => 1 / x, 0.8, 8.5)} stroke={RED} strokeWidth={1.8} strokeDasharray="5 3" fill="none" />
      <Path d={curve(IMF, (x) => 1 / (x * x), 0.9, 8.5)} stroke={BLUE} strokeWidth={2.2} fill="none" />
      <Txt x={X(1.3)} y={Y(1.08)} size={9} weight="700" anchor="start" fill={BLUE}>
        y = 1/x²: the shaded area → 1
      </Txt>
      <Txt x={X(4.6)} y={Y(0.34)} size={9} weight="700" anchor="start" fill={RED}>
        y = 1/x: area ln b → ∞
      </Txt>
      <Txt x={175} y={212} size={9}>
        ∫ (1 to ∞) x⁻ᵖ dx converges only when p &gt; 1
      </Txt>
    </G>
  );
}

// ---------- the parabola and the ellipse ----------
const PA = frame({ left: 20, top: 16, ux: 14, x0: -3, x1: 6.6, y0: -5.2, y1: 5.2 });
const EL = frame({ left: 178, top: 40, ux: 14, x0: -6.6, x1: 6.6, y0: -3.6, y1: 3.6 });
function ConicsArt() {
  const P = [3, 2.4];
  return (
    <G>
      <Cross f={PA} />
      <Line x1={PA.X(-2)} y1={PA.Y(-5.2)} x2={PA.X(-2)} y2={PA.Y(5.2)} stroke={GREEN} strokeWidth={1.4} strokeDasharray="4 3" />
      <Path d={param(PA, (t) => 2 * t * t, (t) => 4 * t, -1.3, 1.3)} stroke={BLUE} strokeWidth={2} fill="none" />
      <Line x1={PA.X(-3)} y1={PA.Y(-1)} x2={PA.X(3.2)} y2={PA.Y(5.2)} stroke={GREY} strokeWidth={1} strokeDasharray="2 3" />
      <Line x1={PA.X(2)} y1={PA.Y(0)} x2={PA.X(2)} y2={PA.Y(4)} stroke={RED} strokeWidth={1.6} />
      <Line x1={PA.X(-2)} y1={PA.Y(4)} x2={PA.X(2)} y2={PA.Y(4)} stroke={GREEN} strokeWidth={1.6} />
      <Dot x={PA.X(2)} y={PA.Y(0)} c={RED} />
      <Dot x={PA.X(2)} y={PA.Y(4)} c={BLUE} r={3.5} />
      <Txt x={PA.X(2) + 4} y={PA.Y(0) + 12} size={8.5} weight="700" anchor="start" fill={RED}>
        S
      </Txt>
      <Txt x={PA.X(2) + 5} y={PA.Y(4) + 3} size={8.5} weight="700" anchor="start" fill={BLUE}>
        P
      </Txt>
      <Txt x={PA.X(-1)} y={PA.Y(4) - 5} size={8.5} fill={GREEN}>
        4
      </Txt>
      <Txt x={PA.X(2) + 4} y={PA.Y(2)} size={8.5} anchor="start" fill={RED}>
        4
      </Txt>
      <Txt x={PA.X(-2) - 3} y={PA.Y(-4.6)} size={8.5} anchor="end" fill={GREEN}>
        x = −2
      </Txt>
      <Cross f={EL} />
      {[-25 / 4, 25 / 4].map((x) => (
        <Line key={x} x1={EL.X(x)} y1={EL.Y(-3.6)} x2={EL.X(x)} y2={EL.Y(3.6)} stroke={GREEN} strokeWidth={1.2} strokeDasharray="4 3" />
      ))}
      <Ellipse cx={EL.X(0)} cy={EL.Y(0)} rx={70} ry={42} stroke={BLUE} strokeWidth={2} fill="none" />
      <Line x1={EL.X(4)} y1={EL.Y(0)} x2={EL.X(P[0])} y2={EL.Y(P[1])} stroke={RED} strokeWidth={1.4} />
      <Line x1={EL.X(-4)} y1={EL.Y(0)} x2={EL.X(P[0])} y2={EL.Y(P[1])} stroke={RED} strokeWidth={1.4} />
      {[-4, 4].map((x) => (
        <Dot key={x} x={EL.X(x)} y={EL.Y(0)} c={RED} />
      ))}
      <Dot x={EL.X(P[0])} y={EL.Y(P[1])} c={BLUE} r={3.5} />
      <Txt x={EL.X(4)} y={EL.Y(0) + 12} size={8.5} weight="700" fill={RED}>
        S
      </Txt>
      <Txt x={EL.X(-4)} y={EL.Y(0) + 12} size={8.5} weight="700" fill={RED}>
        S′
      </Txt>
      <Txt x={EL.X(P[0]) + 5} y={EL.Y(P[1]) - 4} size={8.5} weight="700" anchor="start" fill={BLUE}>
        P
      </Txt>
      <Txt x={88} y={186} size={9} weight="700" fill={BLUE}>
        y² = 8x, focus S(2, 0)
      </Txt>
      <Txt x={88} y={200} size={9}>
        at P(2, 4): SP = PM = 4
      </Txt>
      <Txt x={270} y={186} size={9} weight="700" fill={BLUE}>
        x²/25 + y²/9 = 1, e = 4/5
      </Txt>
      <Txt x={270} y={200} size={9}>
        SP + S′P = 2.6 + 7.4 = 10 = 2a
      </Txt>
    </G>
  );
}

// ---------- the hyperbola and the rectangular hyperbola ----------
const HA = frame({ left: 16, top: 16, ux: 9, x0: -9.5, x1: 9.5, y0: -7, y1: 7 });
const HB = frame({ left: 205, top: 16, ux: 8.5, x0: -1, x1: 18, y0: -1, y1: 13 });
function HyperbolaArt() {
  return (
    <G>
      <Cross f={HA} />
      {[0.75, -0.75].map((m) => (
        <Line key={m} x1={HA.X(-9.33)} y1={HA.Y(-9.33 * m)} x2={HA.X(9.33)} y2={HA.Y(9.33 * m)} stroke={GREY} strokeWidth={1} strokeDasharray="4 3" />
      ))}
      {[1, -1].map((s) => (
        <Path key={s} d={param(HA, (u) => s * 4 * Math.cosh(u), (u) => 3 * Math.sinh(u), -1.5, 1.5)} stroke={BLUE} strokeWidth={2} fill="none" />
      ))}
      {[-5, 5].map((x) => (
        <Dot key={x} x={HA.X(x)} y={HA.Y(0)} c={RED} />
      ))}
      <Txt x={HA.X(5)} y={HA.Y(0) + 12} size={8.5} weight="700" fill={RED}>
        S
      </Txt>
      <Txt x={HA.X(-5)} y={HA.Y(0) + 12} size={8.5} weight="700" fill={RED}>
        S′
      </Txt>
      <Txt x={HA.X(9.3)} y={HA.Y(7) + 2} size={8.5} anchor="end" fill={GREY}>
        y = ¾x
      </Txt>
      <Cross f={HB} />
      <Path d={curve(HB, (x) => 16 / x, 1.25, 18)} stroke={BLUE} strokeWidth={2} fill="none" />
      <Line x1={HB.X(0)} y1={HB.Y(4)} x2={HB.X(16)} y2={HB.Y(0)} stroke={RED} strokeWidth={1.6} />
      <Dot x={HB.X(8)} y={HB.Y(2)} c={BLUE} r={3.5} />
      {[[0, 4], [16, 0]].map(([x, y]) => (
        <Dot key={x} x={HB.X(x)} y={HB.Y(y)} c={RED} />
      ))}
      <Txt x={HB.X(8) + 4} y={HB.Y(2) - 7} size={8.5} weight="700" anchor="start" fill={BLUE}>
        (8, 2)
      </Txt>
      <Txt x={HB.X(16)} y={HB.Y(0) + 12} size={8.5} fill={RED}>
        16
      </Txt>
      <Txt x={HB.X(0) - 4} y={HB.Y(4) + 3} size={8.5} anchor="end" fill={RED}>
        4
      </Txt>
      <Txt x={100} y={166} size={9} weight="700" fill={BLUE}>
        x²/16 − y²/9 = 1: e = 5/4
      </Txt>
      <Txt x={100} y={180} size={9}>
        foci (±5, 0), asymptotes y = ±¾x
      </Txt>
      <Txt x={286} y={166} size={9} weight="700" fill={BLUE}>
        xy = 16: the axes are asymptotes
      </Txt>
      <Txt x={286} y={180} size={9}>
        tangent at (8, 2): x + 4y = 16
      </Txt>
    </G>
  );
}

// ---------- forced oscillations and resonance ----------
const F1 = frame({ left: 30, top: 18, ux: 25, uy: 26, x0: 0, x1: 12.4, y0: -1.6, y1: 1.6 });
const F2 = frame({ left: 30, top: 140, ux: 25, uy: 9, x0: 0, x1: 12.4, y0: -6.6, y1: 6.6 });
function ForcedArt() {
  return (
    <G>
      <Axes f={F1} grid={0} xs={[]} ys={[[1, '1'], [-1, '−1']]} xName="t" yName="x" origin={false} />
      <Path d={curve(F1, (t) => Math.sin(t) - Math.sin(2 * t) / 2, 0, 12.4, 400)} stroke={BLUE} strokeWidth={2} fill="none" />
      <Txt x={175} y={124} size={9} weight="700" fill={BLUE}>
        ẍ + 4x = 3 sin t: x = sin t − ½ sin 2t stays bounded
      </Txt>
      <Axes f={F2} grid={0} xs={ticks([2, 4, 6, 8, 10, 12])} ys={ticks([-6, -3, 3, 6])} xName="t" yName="x" origin={false} xLab={F2.Y(-6.6) + 12} />
      <Path d={curve(F2, (t) => t / 2, 0, 12.4)} stroke={AMBER} strokeWidth={1} strokeDasharray="3 3" fill="none" />
      <Path d={curve(F2, (t) => -t / 2, 0, 12.4)} stroke={AMBER} strokeWidth={1} strokeDasharray="3 3" fill="none" />
      <Path d={curve(F2, (t) => (t / 2) * Math.sin(2 * t), 0, 12.4, 500)} stroke={RED} strokeWidth={2} fill="none" />
      <Txt x={175} y={288} size={9} weight="700" fill={RED}>
        ẍ + 4x = 2 cos 2t: x = ½t sin 2t grows (resonance)
      </Txt>
    </G>
  );
}

// ---------- Euler's method ----------
const EUF = frame({ left: 34, top: 14, ux: 400, uy: 120, x0: 0, x1: 0.65, y0: 0.8, y1: 2.15 });
function EulerArt() {
  const { X, Y } = EUF;
  const pts = [[0, 1]];
  for (let i = 0; i < 6; i++) {
    const [x, y] = pts[i];
    pts.push([Math.round((x + 0.1) * 10) / 10, y + 0.1 * (x + y)]);
  }
  const exact = (x) => 2 * Math.exp(x) - x - 1;
  return (
    <G>
      <Axes f={EUF} grid={0} xs={ticks([0.1, 0.2, 0.3, 0.4, 0.5, 0.6])} ys={[[1, '1'], [1.5, '1.5'], [2, '2']]} origin={false} />
      <Path d={curve(EUF, exact, 0, 0.65)} stroke={RED} strokeWidth={2} fill="none" />
      <Path d={path(pts.map(([x, y]) => [X(x), Y(y)]))} stroke={BLUE} strokeWidth={1.8} fill="none" />
      {pts.map(([x, y]) => (
        <Dot key={x} x={X(x)} y={Y(y)} c={BLUE} />
      ))}
      <Dot x={X(0.6)} y={Y(exact(0.6))} c={RED} />
      <Txt x={X(0.6) + 6} y={Y(exact(0.6)) + 3} size={8.5} weight="700" anchor="start" fill={RED}>
        2.044
      </Txt>
      <Txt x={X(0.6) + 6} y={Y(pts[6][1]) + 3} size={8.5} weight="700" anchor="start" fill={BLUE}>
        1.943
      </Txt>
      <Txt x={X(0.08)} y={Y(2.0)} size={9} weight="700" anchor="start" fill={RED}>
        exact: y = 2eˣ − x − 1
      </Txt>
      <Txt x={X(0.08)} y={Y(1.86)} size={9} weight="700" anchor="start" fill={BLUE}>
        Euler’s method, h = 0.1
      </Txt>
      <Txt x={170} y={210} size={9}>
        yₙ₊₁ = yₙ + h(xₙ + yₙ), starting at (0, 1)
      </Txt>
    </G>
  );
}

// ---------- Simpson's rule ----------
const SMF = frame({ left: 30, top: 14, ux: 260, uy: 140, x0: 0, x1: 1.12, y0: 0, y1: 1.12 });
function SimpsonArt() {
  const { X, Y } = SMF;
  const f = (x) => Math.exp(-x * x);
  const xs = [0, 0.25, 0.5, 0.75, 1];
  const area = [[X(0), Y(0)], ...Array.from({ length: 101 }, (_, i) => [X(i / 100), Y(f(i / 100))]), [X(1), Y(0)]];
  return (
    <G>
      <Path d={`${path(area)} Z`} fill={SHADE} stroke="none" />
      <Axes f={SMF} grid={0} xs={[[0.25, '0.25'], [0.5, '0.5'], [0.75, '0.75'], [1, '1']]} ys={[[0.5, '0.5'], [1, '1']]} />
      {xs.map((x, i) => (
        <G key={x}>
          <Line x1={X(x)} y1={Y(0)} x2={X(x)} y2={Y(f(x))} stroke={GREY} strokeWidth={1.2} />
          <Dot x={X(x)} y={Y(f(x))} c={RED} />
          <Txt x={X(x) + (i === 0 ? 8 : 0)} y={Y(f(x)) - 7} size={8.5} weight="700" anchor={i === 0 ? 'start' : 'middle'}>
            {`y${'₀₁₂₃₄'[i]}`}
          </Txt>
          <Txt x={X(x)} y={Y(0) + 26} size={9} weight="700" fill={BLUE}>
            {['1', '4', '2', '4', '1'][i]}
          </Txt>
        </G>
      ))}
      <Path d={curve(SMF, f, 0, 1.1)} stroke={RED} strokeWidth={2} fill="none" />
      <Txt x={X(0.62)} y={Y(0.95)} size={9} weight="700" anchor="start" fill={RED}>
        y = e^(−x²)
      </Txt>
      <Txt x={X(1.08)} y={Y(0) + 26} size={8.5} anchor="end" fill={BLUE}>
        weights
      </Txt>
      <Txt x={170} y={212} size={9}>
        (h/3)[y₀ + y₄ + 4(y₁ + y₃) + 2y₂] = 0.74686
      </Txt>
    </G>
  );
}

// ---------- a Cayley table ----------
function CayleyArt() {
  const set = [1, 3, 5, 7];
  const cell = 34;
  const x0 = 60;
  const y0 = 30;
  const cells = [['×', ...set], ...set.map((a) => [a, ...set.map((b) => (a * b) % 8)])];
  return (
    <G>
      <Txt x={x0 + cell * 2.5} y={20} size={9} weight="700">
        multiplication modulo 8
      </Txt>
      {cells.map((row, i) =>
        row.map((v, j) => {
          const head = i === 0 || j === 0;
          const diag = i > 0 && i === j;
          return (
            <G key={`${i}${j}`}>
              <Rect x={x0 + j * cell} y={y0 + i * cell} width={cell} height={cell} fill={head ? SHADE : diag ? CREAM : '#ffffff'} stroke={O} strokeWidth={0.8} />
              <Txt x={x0 + j * cell + cell / 2} y={y0 + i * cell + cell / 2 + 4} size={11} weight={head || diag ? '700' : '500'}>
                {String(v)}
              </Txt>
            </G>
          );
        }),
      )}
    </G>
  );
}

// ---------- the symmetries of an equilateral triangle ----------
function SymmetryArt() {
  const cx = 110;
  const cy = 120;
  const R = 78;
  const at = (deg, r = R) => [cx + r * Math.cos(rad(deg)), cy - r * Math.sin(rad(deg))];
  const V = [[90, 'A'], [210, 'B'], [330, 'C']];
  const arc = [30, 150].map((d) => at(d, 30));
  return (
    <G>
      <Path d={`${path(V.map(([d]) => at(d)))} Z`} fill={SHADE} stroke={BLUE} strokeWidth={2} />
      {V.map(([d]) => {
        const [x1, y1] = at(d, R + 14);
        const [x2, y2] = at(d + 180, R * 0.62);
        return <Line key={d} x1={x1} y1={y1} x2={x2} y2={y2} stroke={GREY} strokeWidth={1} strokeDasharray="4 3" />;
      })}
      {V.map(([d, t]) => {
        const [x, y] = at(d, R + 12);
        return (
          <Txt key={t} x={x} y={y + 4} size={11} weight="700">
            {t}
          </Txt>
        );
      })}
      <Dot x={cx} y={cy} />
      <Path d={`M${arc[0][0]} ${arc[0][1]} A30 30 0 0 0 ${arc[1][0]} ${arc[1][1]}`} stroke={RED} strokeWidth={1.6} fill="none" />
      <Head x={arc[1][0]} y={arc[1][1]} dx={-Math.sin(rad(150))} dy={-Math.cos(rad(150))} size={6} fill={RED} />
      <Txt x={cx + 5} y={cy - 36} size={9} weight="700" anchor="start" fill={RED}>
        120°
      </Txt>
      <Txt x={214} y={56} size={9.5} weight="700" anchor="start">
        6 symmetries
      </Txt>
      <Txt x={214} y={76} size={9} anchor="start" fill={RED}>
        rotations: 0°, 120°, 240°
      </Txt>
      <Txt x={214} y={94} size={9} anchor="start" fill={GREY}>
        reflections in the three
      </Txt>
      <Txt x={214} y={108} size={9} anchor="start" fill={GREY}>
        dashed axes of symmetry
      </Txt>
      <Txt x={214} y={132} size={9} anchor="start">
        a group of order 6,
      </Txt>
      <Txt x={214} y={146} size={9} anchor="start">
        not abelian
      </Txt>
    </G>
  );
}

export const A_FURTHER = {
  'am-polar-point': {
    title: 'A point in polar coordinates',
    w: 350,
    h: 238,
    art: PolarPointArt,
    labels: [],
    facts: [
      'P is 2 units from the pole O, at an angle of 2π/3 (120°) from the initial line.',
      'x = r cos θ = −1 and y = r sin θ = √3, so P is (−1, √3) in Cartesian coordinates.',
      'Back the other way, r = √(1 + 3) = 2, and θ is taken in the second quadrant.',
    ],
  },
  'am-polar-curves': {
    title: 'A cardioid and a three-petalled rose',
    w: 392,
    h: 236,
    art: PolarCurvesArt,
    labels: [],
    facts: [
      'The cardioid r = 2(1 + cos θ) meets the pole at θ = π and encloses an area of 6π.',
      'The rose r = 3 sin 3θ has three petals, drawn where sin 3θ ≥ 0.',
      'One petal, 0 ≤ θ ≤ π/3, has area ½ ∫ 9 sin²3θ dθ = 3π/4.',
    ],
  },
  'am-hyperbolic': {
    title: 'The graphs of sinh x, cosh x and tanh x',
    w: 340,
    h: 226,
    art: HyperbolicArt,
    labels: [],
    facts: [
      'cosh x is even, with its least value 1 at x = 0: the shape of a hanging chain.',
      'sinh x is odd and increasing, through the origin.',
      'tanh x is odd and lies between the asymptotes y = −1 and y = 1.',
    ],
  },
  'am-inverse-hyperbolic': {
    title: 'The inverse hyperbolic functions',
    w: 360,
    h: 222,
    art: InverseHyperbolicArt,
    labels: [],
    facts: [
      'arsinh x = ln(x + √(x² + 1)) is defined for every x.',
      'arcosh x = ln(x + √(x² − 1)) starts at (1, 0) and is never negative.',
      'artanh x = ½ ln((1 + x)/(1 − x)) has the vertical asymptotes x = ±1.',
    ],
  },
  'am-gce-further': columnsSpec(
    'GCE A Level Further Mathematics 0775: the three papers',
    [
      { head: 'Paper 1', items: ['1½ hours', 'multiple choice', 'Sat 13 June 2026'] },
      { head: 'Paper 2', items: ['3 hours', 'structured questions', 'Sat 13 June 2026'] },
      { head: 'Paper 3', items: ['2½ hours', 'structured questions', 'Mon 15 June 2026'] },
    ],
    { colW: 106 },
  ),
  'am-kernel-image': {
    title: 'The kernel and the image of M = [1 2; 2 4]',
    w: 360,
    h: 214,
    art: KernelArt,
    labels: [],
    facts: [
      'M = [1 2; 2 4] sends every point of the plane onto the line y = 2x: the image, rank 1.',
      'Every point of the line x + 2y = 0, such as (2, −1), goes to O: the kernel, nullity 1.',
      'Rank + nullity = 1 + 1 = 2, the number of columns.',
    ],
  },
  'am-eigenvectors': {
    title: 'Eigenvectors of A = [4 1; 2 3]',
    w: 350,
    h: 222,
    art: EigenArt,
    labels: [],
    facts: [
      '(1, 1) is stretched by 5 to (5, 5): an eigenvector with eigenvalue 5.',
      '(1, −2) is stretched by 2 to (2, −4): an eigenvector with eigenvalue 2.',
      '(1, 0) goes to (4, 2) and changes direction, so it is not an eigenvector.',
    ],
  },
  'am-diagonalise': {
    title: 'Diagonalising A = [4 1; 2 3]',
    w: 350,
    h: 170,
    art: DiagonaliseArt,
    labels: [],
    facts: [
      'The columns of P are the eigenvectors (1, 1) and (1, −2).',
      'D holds the eigenvalues 5 and 2, in the same order.',
      'Aⁿ = PDⁿP⁻¹, so A³ = P[125 0; 0 8]P⁻¹ = [86 39; 78 47].',
    ],
  },
  'am-maclaurin': {
    title: 'sin x and its Maclaurin polynomials',
    w: 350,
    h: 236,
    art: MaclaurinArt,
    labels: [],
    facts: [
      'Each extra term of x − x³/3! + x⁵/5! − … follows sin x further from 0.',
      'Near 0 even x − x³/6 is very close: sin 0.5 = 0.4794 and 0.5 − 0.125/6 = 0.4792.',
      'Far from 0 the polynomials leave the curve, so more terms are needed there.',
    ],
  },
  'am-taylor': {
    title: 'ln x and its Taylor polynomials about x = 1',
    w: 350,
    h: 236,
    art: TaylorArt,
    labels: [],
    facts: [
      'ln x has no Maclaurin series, but about x = 1 it is (x − 1) − (x − 1)²/2 + (x − 1)³/3 − …',
      'The tangent y = x − 1 is the first approximation; each extra term follows the curve further.',
      'Close to x = 1 the error is roughly the first term left out.',
    ],
  },
  'am-reduction': {
    title: 'sinⁿx on [0, π/2] and the reduction formula',
    w: 350,
    h: 236,
    art: ReductionArt,
    labels: [],
    facts: [
      'Higher powers of sin x stay close to the x-axis for longer, so their areas shrink.',
      'Iₙ = ((n − 1)/n)Iₙ₋₂ gives I₂ = π/4, I₄ = 3π/16 and I₆ = 5π/32 from I₀ = π/2.',
      'From I₁ = 1 it gives I₃ = 2/3 and I₅ = 8/15.',
    ],
  },
  'am-arc-length': {
    title: 'Arc length: δs² ≈ δx² + δy²',
    w: 340,
    h: 214,
    art: ArcArt,
    labels: [],
    facts: [
      'A short piece of curve δs is almost the hypotenuse of a right-angled triangle with sides δx and δy.',
      'So δs² ≈ δx² + δy², and the arc length is s = ∫ √(1 + (dy/dx)²) dx.',
      'For y = cosh x from 0 to ln 2, √(1 + sinh²x) = cosh x and the length is ¾.',
    ],
  },
  'am-surface': {
    title: 'A surface of revolution',
    w: 330,
    h: 238,
    art: SurfaceArt,
    labels: [],
    facts: [
      'Turning the arc y = √x about the x-axis, a short piece δs sweeps out a band of radius y.',
      'The band has area about 2πy δs, so the surface area is S = 2π ∫ y ds.',
      'The volume of the same solid uses discs instead: π ∫ y² dx.',
    ],
  },
  'am-improper': {
    title: 'An improper integral that converges and one that diverges',
    w: 350,
    h: 222,
    art: ImproperArt,
    labels: [],
    facts: [
      'The area under y = 1/x² from 1 to b is 1 − 1/b, which tends to 1: the integral converges.',
      'The area under y = 1/x from 1 to b is ln b, which grows without limit: it diverges.',
      '∫ (1 to ∞) x⁻ᵖ dx converges only when p > 1.',
    ],
  },
  'am-conics': {
    title: 'The parabola and the ellipse: focus and directrix',
    w: 372,
    h: 210,
    art: ConicsArt,
    labels: [],
    facts: [
      'On y² = 8x, P(2, 4) is 4 units from the focus S(2, 0) and 4 units from the directrix x = −2.',
      'For x²/25 + y²/9 = 1, e = 4/5, the foci are (±4, 0) and the directrices x = ±25/4.',
      'From any point of the ellipse, the distances to the two foci add up to 2a = 10.',
    ],
  },
  'am-hyperbola': {
    title: 'A hyperbola and a rectangular hyperbola',
    w: 376,
    h: 190,
    art: HyperbolaArt,
    labels: [],
    facts: [
      'x²/16 − y²/9 = 1 has e = 5/4, foci (±5, 0) and asymptotes y = ±¾x.',
      'The rectangular hyperbola xy = 16 has the coordinate axes as asymptotes.',
      'Its tangent at (8, 2) is x + 4y = 16, meeting the axes at (16, 0) and (0, 4).',
    ],
  },
  'am-forced-oscillation': {
    title: 'Forced oscillations and resonance',
    w: 350,
    h: 298,
    art: ForcedArt,
    labels: [],
    facts: [
      'Forced at a different frequency, ẍ + 4x = 3 sin t gives x = sin t − ½ sin 2t, which stays bounded.',
      'Forced at the natural frequency, ẍ + 4x = 2 cos 2t gives x = ½t sin 2t: resonance, growing without limit.',
      'With damping, the complementary function dies away and only the steady state remains.',
    ],
  },
  'am-euler': {
    title: 'Euler’s method for dy/dx = x + y, y(0) = 1',
    w: 340,
    h: 222,
    art: EulerArt,
    labels: [],
    facts: [
      'Euler’s method steps along the tangent: yₙ₊₁ = yₙ + h(xₙ + yₙ) with h = 0.1.',
      'It gives y(0.6) ≈ 1.943, while the exact solution y = 2eˣ − x − 1 gives 2.044.',
      'The error grows step by step; halving h roughly halves it.',
    ],
  },
  'am-simpson': {
    title: 'Simpson’s rule for ∫ (0 to 1) e^(−x²) dx',
    w: 340,
    h: 222,
    art: SimpsonArt,
    labels: [],
    facts: [
      'With h = 0.25 the ordinates are 1, 0.9394, 0.7788, 0.5698 and 0.3679.',
      'Simpson’s rule weights them 1, 4, 2, 4, 1: (h/3)[y₀ + y₄ + 4(y₁ + y₃) + 2y₂] = 0.74686.',
      'The true value is 0.74682: an error under 0.0001 with only four strips.',
    ],
  },
  'am-cayley': {
    title: 'The Cayley table of {1, 3, 5, 7} under multiplication modulo 8',
    w: 290,
    h: 210,
    art: CayleyArt,
    labels: [],
    facts: [
      'Every product of 1, 3, 5 and 7 modulo 8 is again 1, 3, 5 or 7: the set is closed.',
      'Each element appears exactly once in every row and every column, as in every group table.',
      'The leading diagonal is all 1s: each element is its own inverse.',
    ],
  },
  'am-symmetry': {
    title: 'The symmetries of an equilateral triangle',
    w: 350,
    h: 214,
    art: SymmetryArt,
    labels: [],
    facts: [
      'The triangle has three rotations (0°, 120° and 240°) and three reflections, one in each axis of symmetry.',
      'Together they form a group of order 6, matching the permutations of A, B and C.',
      'It is not abelian: a reflection followed by a rotation differs from the rotation followed by the reflection.',
    ],
  },
};
