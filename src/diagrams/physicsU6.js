// A Level Physics figures for the 2026/2027 Upper Sixth scheme: equipotentials,
// capacitor discharge (V and ln V against t), the current balance, the e.m.f.
// of a magnet falling through a coil, LCR resonance curves, Kepler’s third law
// as a log-log plot, the resonance tube, a diffraction grating, the u-v graph
// for a lens, stopping potential against frequency, ln(count rate) against
// time, an inverting op-amp, an optical fibre, and fields compared. Graphs are
// calculated and drawn to scale.
import { Circle, G, Line, Path, Rect } from 'react-native-svg';
import { Head, Txt } from './Diagram';
import { columnsSpec } from './charts';
import { WATER } from './kit';

const O = '#33414d';
const RED = '#c8463d';
const BLUE = '#1f6fb2';
const GREEN = '#2e7d32';
const GREY = '#6b7a88';
const line = (pts) => pts.map(([x, y], i) => `${i ? 'L' : 'M'}${x.toFixed(1)} ${y.toFixed(1)}`).join(' ');
const rad = (d) => (d * Math.PI) / 180;

function Arrow({ x1, y1, x2, y2, c = O, w = 1.5, size = 6 }) {
  const len = Math.hypot(x2 - x1, y2 - y1) || 1;
  return (
    <G>
      <Line x1={x1} y1={y1} x2={x2 - ((x2 - x1) / len) * size} y2={y2 - ((y2 - y1) / len) * size} stroke={c} strokeWidth={w} />
      <Head x={x2} y={y2} dx={x2 - x1} dy={y2 - y1} size={size} fill={c} />
    </G>
  );
}

function Axes({ X, Y, x0, x1, y0, y1, xs, ys, xTitle, yTitle, yTitleX = 14, xAxisY }) {
  const ay = xAxisY ?? Y(y0);
  return (
    <G>
      <Line x1={X(x0)} y1={ay} x2={X(x1) + 4} y2={ay} stroke={O} strokeWidth={1.2} />
      <Line x1={X(x0)} y1={Y(y0)} x2={X(x0)} y2={Y(y1) - 4} stroke={O} strokeWidth={1.2} />
      {xs.map(([v, t]) => (
        <G key={`x${v}`}>
          <Line x1={X(v)} y1={ay} x2={X(v)} y2={ay + 4} stroke={O} strokeWidth={1} />
          <Txt x={X(v)} y={ay + 14} size={8.5}>
            {t}
          </Txt>
        </G>
      ))}
      {ys.map(([v, t]) => (
        <G key={`y${v}`}>
          <Line x1={X(x0) - 4} y1={Y(v)} x2={X(x0)} y2={Y(v)} stroke={O} strokeWidth={1} />
          <Txt x={X(x0) - 7} y={Y(v) + 3} size={8.5} anchor="end">
            {t}
          </Txt>
        </G>
      ))}
      <Txt x={(X(x0) + X(x1)) / 2} y={Y(y0) + 28} size={9} weight="700">
        {xTitle}
      </Txt>
      <Txt x={yTitleX} y={(Y(y0) + Y(y1)) / 2} size={9} weight="700" rotate={-90}>
        {yTitle}
      </Txt>
    </G>
  );
}

// ---------- equipotentials ----------
function EquipotentialArt() {
  return (
    <G>
      <Rect x={34} y={26} width={8} height={130} fill={RED} />
      <Rect x={158} y={26} width={8} height={130} fill={BLUE} />
      <Txt x={38} y={20} size={10} weight="700" fill={RED}>+6 V</Txt>
      <Txt x={162} y={20} size={10} weight="700" fill={BLUE}>0 V</Txt>
      {[40, 64, 88, 112, 136].map((y) => (
        <Arrow key={y} x1={44} y1={y} x2={156} y2={y} c={O} w={1.1} size={5} />
      ))}
      {[1, 2, 3, 4, 5].map((k) => (
        <G key={k}>
          <Line x1={38 + k * 20.7} y1={30} x2={38 + k * 20.7} y2={152} stroke={GREEN} strokeWidth={1.2} strokeDasharray="4 3" />
          <Txt x={38 + k * 20.7} y={168} size={8} fill={GREEN}>{`${6 - k} V`}</Txt>
        </G>
      ))}
      <Txt x={100} y={184} size={8.5} fill={GREY}>uniform field: E = V/d</Txt>
      {/* point charge */}
      {[18, 32, 54].map((r) => (
        <Circle key={r} cx={268} cy={92} r={r} fill="none" stroke={GREEN} strokeWidth={1.2} strokeDasharray="4 3" />
      ))}
      {[0, 45, 90, 135, 180, 225, 270, 315].map((a) => (
        <Arrow key={a} x1={268 + 9 * Math.cos(rad(a))} y1={92 - 9 * Math.sin(rad(a))} x2={268 + 72 * Math.cos(rad(a))} y2={92 - 72 * Math.sin(rad(a))} c={O} w={1.1} size={5} />
      ))}
      <Circle cx={268} cy={92} r={8} fill={RED} />
      <Txt x={268} y={96} size={10} weight="700" fill="#ffffff">+</Txt>
      <Txt x={268} y={184} size={8.5} fill={GREY}>radial field of a point charge</Txt>
    </G>
  );
}

// ---------- capacitor discharge ----------
const RC = 47;
const DX = (t) => 56 + t * 1.2;
const VY = (v) => 92 - v * 12;
const LY = (l) => 140 + (2 - l) * 16;

function DischargeArt() {
  const pts = [];
  const lpts = [];
  for (let t = 0; t <= 200.001; t += 2) {
    pts.push([DX(t), VY(6 * Math.exp(-t / RC))]);
    lpts.push([DX(t), LY(Math.log(6) - t / RC)]);
  }
  const marks = [0, 20, 40, 60, 80, 100, 120, 140, 160, 180, 200];
  return (
    <G>
      <Axes X={DX} Y={VY} x0={0} x1={200} y0={0} y1={6.5} xs={[]} ys={[[0, '0'], [2, '2'], [4, '4'], [6, '6']]} xTitle="" yTitle="V / V" yTitleX={20} />
      <Path d={line(pts)} stroke={BLUE} strokeWidth={2} fill="none" />
      <Line x1={DX(RC)} y1={VY(0)} x2={DX(RC)} y2={VY(6 * Math.exp(-1))} stroke={GREY} strokeWidth={1} strokeDasharray="3 3" />
      <Line x1={DX(0)} y1={VY(6 * Math.exp(-1))} x2={DX(RC)} y2={VY(6 * Math.exp(-1))} stroke={GREY} strokeWidth={1} strokeDasharray="3 3" />
      <Txt x={DX(RC) + 5} y={VY(6 * Math.exp(-1)) - 5} size={8.5} anchor="start" fill={GREY}>t = RC = 47 s: V = 37% of 6.0 V</Txt>
      <Axes X={DX} Y={LY} x0={0} x1={200} y0={-2.6} y1={2} xs={marks.filter((t) => t % 40 === 0).map((t) => [t, `${t}`])} ys={[[2, '2'], [0, '0'], [-2, '−2']]} xTitle="t / s" yTitle="ln (V / V)" yTitleX={20} />
      <Line x1={DX(0)} y1={LY(0)} x2={DX(200)} y2={LY(0)} stroke={GREY} strokeWidth={0.8} />
      <Path d={line(lpts)} stroke={RED} strokeWidth={2} fill="none" />
      {marks.map((t) => (
        <Circle key={t} cx={DX(t)} cy={LY(Math.log(6) - t / RC)} r={2.4} fill={RED} />
      ))}
      <Txt x={DX(110)} y={LY(1.2)} size={8.5} weight="700" anchor="start" fill={RED}>gradient = −1/RC = −0.021 s⁻¹</Txt>
    </G>
  );
}

// ---------- the current balance ----------
function BalanceArt() {
  return (
    <G>
      <Rect x={70} y={168} width={180} height={34} rx={4} fill="#c4cbd2" stroke={O} strokeWidth={1.2} />
      <Rect x={186} y={176} width={56} height={18} rx={2} fill="#1f2933" />
      <Txt x={214} y={189} size={9.5} weight="700" fill="#7ee08a">101.53 g</Txt>
      <Rect x={90} y={158} width={140} height={10} fill="#a5adb5" stroke={O} strokeWidth={1} />
      {/* horseshoe magnet seen from the side, poles facing each other */}
      <Path d="M108 158 L108 92 L130 92 L130 140 L190 140 L190 92 L212 92 L212 158 Z" fill="#8d969f" stroke={O} strokeWidth={1.2} />
      <Rect x={108} y={72} width={22} height={20} fill={RED} stroke={O} strokeWidth={1} />
      <Rect x={190} y={72} width={22} height={20} fill={BLUE} stroke={O} strokeWidth={1} />
      <Txt x={119} y={86} size={10} weight="700" fill="#ffffff">N</Txt>
      <Txt x={201} y={86} size={10} weight="700" fill="#ffffff">S</Txt>
      <Arrow x1={134} y1={70} x2={186} y2={70} c={GREY} w={1.1} size={5} />
      <Txt x={142} y={64} size={8.5} weight="700" fill={GREY}>B</Txt>
      {/* the rod carries current out of the page; it is clamped at its ends, in front of and behind the magnet */}
      <Circle cx={160} cy={84} r={7} fill="#e8a46a" stroke={O} strokeWidth={1.2} />
      <Circle cx={160} cy={84} r={2} fill={O} />
      <Arrow x1={160} y1={76} x2={160} y2={40} c={RED} w={1.6} />
      <Txt x={166} y={46} size={8.5} weight="700" anchor="start" fill={RED}>F on rod</Txt>
      <Arrow x1={226} y1={112} x2={226} y2={146} c={GREY} w={1.2} size={5} />
      <Txt x={232} y={134} size={8} anchor="start" fill={GREY}>equal and opposite</Txt>
      <Txt x={232} y={146} size={8} anchor="start" fill={GREY}>force on the magnet</Txt>
    </G>
  );
}

// ---------- magnet falling through a coil ----------
const FX = (t) => 50 + (t - 0.05) * 1550;
const FY = (e) => 102 - e * 44;

function FallingArt() {
  const pts = [];
  for (let t = 0.05; t <= 0.2101; t += 0.001) {
    const e = Math.exp(-(((t - 0.1) / 0.025) ** 2)) - 1.6 * Math.exp(-(((t - 0.16) / 0.0156) ** 2));
    pts.push([FX(t), FY(e)]);
  }
  const fill1 = [[FX(0.05), FY(0)], ...pts.filter(([x]) => x <= FX(0.135)), [FX(0.135), FY(0)]];
  const fill2 = [[FX(0.135), FY(0)], ...pts.filter(([x]) => x >= FX(0.135)), [FX(0.21), FY(0)]];
  return (
    <G>
      <Path d={line(fill1) + ' Z'} fill="#dbe8f6" />
      <Path d={line(fill2) + ' Z'} fill="#f8ddd9" />
      <Line x1={FX(0.05)} y1={FY(0)} x2={FX(0.21) + 4} y2={FY(0)} stroke={O} strokeWidth={1.2} />
      <Line x1={FX(0.05)} y1={FY(1.6)} x2={FX(0.05)} y2={FY(-1.8)} stroke={O} strokeWidth={1.2} />
      <Path d={line(pts)} stroke={BLUE} strokeWidth={2} fill="none" />
      <Txt x={FX(0.1)} y={FY(1.0) - 8} size={8.5} weight="700" fill={BLUE}>magnet enters</Txt>
      <Txt x={FX(0.172) + 4} y={FY(-1.6) + 6} size={8.5} weight="700" anchor="start" fill={RED}>leaves, faster</Txt>
      <Txt x={FX(0.13)} y={FY(-1.2)} size={8.5} anchor="end" fill={GREY}>equal areas: NΔΦ each</Txt>
      <Txt x={FX(0.13)} y={196} size={9} weight="700">Time</Txt>
      <Txt x={34} y={FY(0)} size={9} weight="700" rotate={-90}>Induced e.m.f.</Txt>
    </G>
  );
}

// ---------- series LCR resonance ----------
const QX = (f) => 56 + (f - 100) * 0.27;
const QY = (i) => 180 - i * 3.5;
const lcrI = (f, R) => (2.0 / Math.sqrt(R * R + (2 * Math.PI * f * 0.1 - 1 / (2 * Math.PI * f * 1e-6)) ** 2)) * 1000;

function LcrArt() {
  const curve = (R) => {
    const pts = [];
    for (let f = 100; f <= 1000.001; f += 4) pts.push([QX(f), QY(lcrI(f, R))]);
    return line(pts);
  };
  const f0 = 1 / (2 * Math.PI * Math.sqrt(0.1 * 1e-6));
  return (
    <G>
      <Axes X={QX} Y={QY} x0={100} x1={1000} y0={0} y1={45} xs={[[100, '100'], [300, '300'], [500, '500'], [700, '700'], [900, '900']]} ys={[[0, '0'], [10, '10'], [20, '20'], [30, '30'], [40, '40']]} xTitle="Frequency / Hz" yTitle="I(rms) / mA" yTitleX={20} />
      <Line x1={QX(f0)} y1={QY(0)} x2={QX(f0)} y2={QY(44)} stroke={GREY} strokeWidth={1} strokeDasharray="4 3" />
      <Path d={curve(50)} stroke={BLUE} strokeWidth={2} fill="none" />
      <Path d={curve(200)} stroke={RED} strokeWidth={2} fill="none" />
      <Txt x={QX(f0) + 8} y={QY(40)} size={8.5} weight="700" anchor="start" fill={BLUE}>R = 50 Ω</Txt>
      <Txt x={QX(700)} y={QY(12)} size={8.5} weight="700" anchor="start" fill={RED}>R = 200 Ω</Txt>
      <Txt x={QX(f0) - 4} y={QY(44) + 2} size={8} anchor="end" fill={GREY}>f₀ = 503 Hz</Txt>
    </G>
  );
}

// ---------- Kepler’s third law ----------
const PLANETS = [
  ['Mercury', 0.387, 0.241],
  ['Venus', 0.723, 0.615],
  ['Earth', 1.0, 1.0],
  ['Mars', 1.52, 1.88],
  ['Jupiter', 5.2, 11.9],
];
const KX = (l) => 60 + (l + 0.6) * 160;
const KY = (l) => 180 - (l + 0.8) * 76;

function KeplerArt() {
  return (
    <G>
      <Axes X={KX} Y={KY} x0={-0.6} x1={0.9} y0={-0.8} y1={1.3} xs={[[-0.4, '−0.4'], [0, '0'], [0.4, '0.4'], [0.8, '0.8']]} ys={[[-0.8, '−0.8'], [0, '0'], [0.4, '0.4'], [0.8, '0.8'], [1.2, '1.2']]} xTitle="lg (r / AU)" yTitle="lg (T / year)" yTitleX={18} />
      <Line x1={KX(-0.55)} y1={KY(-0.825)} x2={KX(0.85)} y2={KY(1.275)} stroke={BLUE} strokeWidth={1.6} />
      {PLANETS.map(([name, r, T]) => (
        <G key={name}>
          <Circle cx={KX(Math.log10(r))} cy={KY(Math.log10(T))} r={3.5} fill={RED} />
          <Txt x={KX(Math.log10(r)) + 7} y={KY(Math.log10(T)) + 4} size={8.5} anchor="start">
            {name}
          </Txt>
        </G>
      ))}
      <Txt x={KX(-0.55)} y={KY(1.1)} size={8.5} weight="700" anchor="start" fill={BLUE}>gradient = 1.5, so T² ∝ r³</Txt>
    </G>
  );
}

// ---------- the resonance tube ----------
const WATER_Y = 196;
const QL = 50;

function TubeArt() {
  const tube = (x, quarters, label) => {
    const top = WATER_Y - quarters * QL + 8;
    const env = (sgn) => {
      const pts = [];
      for (let y = WATER_Y; y >= WATER_Y - quarters * QL - 0.01; y -= 2) pts.push([x + 15 + sgn * 11 * Math.abs(Math.sin((Math.PI / 2) * ((WATER_Y - y) / QL))), y]);
      return line(pts);
    };
    return (
      <G>
        <Rect x={x - 22} y={WATER_Y} width={74} height={28} fill={WATER} stroke={O} strokeWidth={1} />
        <Rect x={x} y={top} width={30} height={WATER_Y + 18 - top} fill="none" stroke={O} strokeWidth={1.4} />
        <Rect x={x + 1} y={WATER_Y} width={28} height={17} fill={WATER} />
        <Path d={env(1)} stroke={BLUE} strokeWidth={1.4} fill="none" />
        <Path d={env(-1)} stroke={BLUE} strokeWidth={1.4} fill="none" />
        <Line x1={x - 8} y1={top} x2={x - 8} y2={WATER_Y} stroke={RED} strokeWidth={1} />
        <Txt x={x - 12} y={(top + WATER_Y) / 2} size={9} weight="700" anchor="end" fill={RED}>{label}</Txt>
        <Line x1={x + 38} y1={top - 8} x2={x + 38} y2={top} stroke={GREEN} strokeWidth={1.4} />
        <Txt x={x + 42} y={top - 1} size={8} anchor="start" fill={GREEN}>e</Txt>
        <Path d={`M${x + 8} ${top - 14} L${x + 8} ${top - 30} M${x + 22} ${top - 14} L${x + 22} ${top - 30} M${x + 8} ${top - 14} Q${x + 15} ${top - 8} ${x + 22} ${top - 14}`} stroke={O} strokeWidth={1.6} fill="none" />
      </G>
    );
  };
  return (
    <G>
      {tube(70, 1, 'L₁')}
      {tube(210, 3, 'L₂')}
      <Txt x={85} y={WATER_Y - QL - 46} size={8.5} weight="700">first resonance</Txt>
      <Txt x={85} y={WATER_Y - QL - 34} size={8.5}>L₁ + e = λ/4</Txt>
      <Txt x={130} y={60} size={8.5} weight="700">second resonance</Txt>
      <Txt x={130} y={72} size={8.5}>L₂ + e = 3λ/4</Txt>
      <Txt x={130} y={90} size={8.5} fill={BLUE}>so λ = 2(L₂ − L₁)</Txt>
    </G>
  );
}

// ---------- the diffraction grating ----------
const GY = 112;
const GD = 250;

function GratingArt() {
  const th1 = Math.asin(0.195);
  const th2 = Math.asin(0.39);
  const spots = [
    [0, 0, 'n = 0'],
    [th1, 1, 'n = 1'],
    [-th1, 1, 'n = 1'],
    [th2, 2, 'n = 2'],
    [-th2, 2, 'n = 2'],
  ];
  return (
    <G>
      <Arrow x1={8} y1={GY} x2={46} y2={GY} c={RED} w={2} />
      <Txt x={14} y={GY - 8} size={8} anchor="start" fill={RED}>laser</Txt>
      <Line x1={50} y1={GY - 40} x2={50} y2={GY + 40} stroke={O} strokeWidth={2} />
      {[-36, -24, -12, 0, 12, 24, 36].map((d) => (
        <Line key={d} x1={46} y1={GY + d} x2={54} y2={GY + d} stroke={O} strokeWidth={1} />
      ))}
      <Line x1={300} y1={4} x2={300} y2={GY * 2 - 4} stroke={O} strokeWidth={2} />
      {spots.map(([th, n, t], i) => {
        const y = GY - GD * Math.tan(th);
        return (
          <G key={i}>
            <Line x1={50} y1={GY} x2={300} y2={y} stroke={RED} strokeWidth={n === 0 ? 1.6 : 1.1} strokeDasharray={n === 0 ? undefined : '6 3'} />
            <Circle cx={300} cy={y} r={4} fill={RED} />
            <Txt x={308} y={y + 3} size={8.5} anchor="start">
              {t}
            </Txt>
          </G>
        );
      })}
      <Path d={`M100 ${GY} A50 50 0 0 0 ${50 + 50 * Math.cos(th1)} ${GY - 50 * Math.sin(th1)}`} stroke={O} strokeWidth={1} fill="none" />
      <Txt x={108} y={GY - 6} size={9} anchor="start">θ</Txt>
      <Line x1={50} y1={GY * 2 - 10} x2={300} y2={GY * 2 - 10} stroke={GREY} strokeWidth={0.8} />
      <Txt x={175} y={GY * 2 - 14} size={8.5} fill={GREY}>D</Txt>
      <Line x1={286} y1={GY} x2={286} y2={GY - GD * Math.tan(th1)} stroke={BLUE} strokeWidth={1.2} />
      <Txt x={282} y={GY - 22} size={8.5} anchor="end" fill={BLUE}>x</Txt>
      <Txt x={170} y={18} size={9} weight="700">d sin θ = nλ, with tan θ = x/D</Txt>
    </G>
  );
}

// ---------- the u-v graph for a lens ----------
const UX = (v) => 60 + v * 3500;
const UY = (v) => 190 - v * 2400;
const UV = [20, 25, 30, 40, 60];

function UvArt() {
  return (
    <G>
      <Axes X={UX} Y={UY} x0={0} x1={0.07} y0={0} y1={0.07} xs={[[0, '0'], [0.02, '0.02'], [0.04, '0.04'], [0.06, '0.06']]} ys={[[0, '0'], [0.02, '0.02'], [0.04, '0.04'], [0.06, '0.06']]} xTitle="1/u / cm⁻¹" yTitle="1/v / cm⁻¹" yTitleX={16} />
      <Line x1={UX(0)} y1={UY(1 / 15)} x2={UX(1 / 15)} y2={UY(0)} stroke={BLUE} strokeWidth={1.8} />
      {UV.map((u) => (
        <Circle key={u} cx={UX(1 / u)} cy={UY(1 / 15 - 1 / u)} r={3} fill={RED} />
      ))}
      <Txt x={UX(0) + 6} y={UY(1 / 15) - 6} size={8.5} weight="700" anchor="start" fill={BLUE}>intercept 1/f = 0.067</Txt>
      <Txt x={UX(1 / 15)} y={UY(0) - 8} size={8.5} weight="700" anchor="start" fill={BLUE}>1/f</Txt>
      <Txt x={UX(0.045)} y={UY(0.05)} size={8.5} anchor="start" fill={GREY}>f = 15 cm</Txt>
    </G>
  );
}

// ---------- stopping potential against frequency ----------
const HX = (f) => 56 + f * 1.6e-13;
const HY = (v) => 186 - v * 32;
const HE = 4.14e-15;
const METALS = [
  { name: 'potassium, φ = 2.3 eV', phi: 2.3, c: BLUE },
  { name: 'zinc, φ = 4.3 eV', phi: 4.3, c: RED },
];

function PlanckArt() {
  return (
    <G>
      <Axes X={HX} Y={HY} x0={0} x1={1.6e15} y0={0} y1={5} xs={[[0, '0'], [4e14, '4'], [8e14, '8'], [12e14, '12'], [16e14, '16']]} ys={[[0, '0'], [1, '1'], [2, '2'], [3, '3'], [4, '4'], [5, '5']]} xTitle="Frequency / 10¹⁴ Hz" yTitle="Stopping potential / V" yTitleX={16} />
      {METALS.map((m) => {
        const f0 = m.phi / HE;
        return (
          <G key={m.name}>
            <Line x1={HX(f0)} y1={HY(0)} x2={HX(1.6e15)} y2={HY(HE * 1.6e15 - m.phi)} stroke={m.c} strokeWidth={2} />
            <Circle cx={HX(f0)} cy={HY(0)} r={3} fill={m.c} />
            <Txt x={HX(f0)} y={HY(0) - 8} size={8} anchor="end" fill={m.c}>{`f₀ = ${(f0 / 1e14).toFixed(1)}`}</Txt>
            <Txt x={HX(1.6e15) - 2} y={HY(HE * 1.6e15 - m.phi) - 6} size={8.5} weight="700" anchor="end" fill={m.c}>
              {m.name}
            </Txt>
          </G>
        );
      })}
      <Txt x={HX(0.2e15)} y={HY(4.4)} size={8.5} weight="700" anchor="start">same gradient: h/e = 4.1 × 10⁻¹⁵ V s</Txt>
    </G>
  );
}

// ---------- ln(count rate) against time ----------
const LAMBDA = Math.LN2 / 70;
const NOISE = [0.03, -0.04, 0.02, 0.05, -0.03, 0.01, -0.05, 0.04, -0.02, 0.03, -0.04];
const CX = (t) => 56 + t * 1.2;
const CY = (l) => 182 - (l - 1.4) * 60;

function LnDecayArt() {
  return (
    <G>
      <Axes X={CX} Y={CY} x0={0} x1={200} y0={1.4} y1={4.0} xs={[[0, '0'], [50, '50'], [100, '100'], [150, '150'], [200, '200']]} ys={[[1.5, '1.5'], [2.0, '2.0'], [2.5, '2.5'], [3.0, '3.0'], [3.5, '3.5'], [4.0, '4.0']]} xTitle="t / s" yTitle="ln (count rate / s⁻¹)" yTitleX={16} />
      <Line x1={CX(0)} y1={CY(Math.log(40))} x2={CX(200)} y2={CY(Math.log(40) - LAMBDA * 200)} stroke={BLUE} strokeWidth={1.8} />
      {NOISE.map((n, i) => (
        <Circle key={i} cx={CX(i * 20)} cy={CY(Math.log(40) - LAMBDA * i * 20 + n)} r={2.6} fill={RED} />
      ))}
      <Txt x={CX(80)} y={CY(3.6)} size={8.5} weight="700" anchor="start" fill={BLUE}>gradient = −λ = −0.0099 s⁻¹</Txt>
      <Txt x={CX(80)} y={CY(3.6) + 13} size={8.5} anchor="start" fill={BLUE}>t½ = 0.693/λ = 70 s</Txt>
      <Txt x={CX(80)} y={CY(3.6) + 26} size={8} anchor="start" fill={GREY}>(background already subtracted)</Txt>
    </G>
  );
}

// ---------- the inverting amplifier ----------
function OpAmpArt() {
  const res = (x, y, w = 36) => <Rect x={x} y={y - 6} width={w} height={12} fill="#ffffff" stroke={O} strokeWidth={1.4} />;
  return (
    <G>
      <Path d="M150 50 L150 130 L220 90 Z" fill="#ffffff" stroke={O} strokeWidth={1.6} />
      <Txt x={158} y={72} size={12} weight="700" anchor="start">−</Txt>
      <Txt x={158} y={116} size={12} weight="700" anchor="start">+</Txt>
      {/* input resistor to the inverting input */}
      <Line x1={30} y1={70} x2={70} y2={70} stroke={O} strokeWidth={1.4} />
      {res(70, 70)}
      <Line x1={106} y1={70} x2={150} y2={70} stroke={O} strokeWidth={1.4} />
      <Circle cx={30} cy={70} r={3} fill="#ffffff" stroke={O} strokeWidth={1.2} />
      <Txt x={88} y={58} size={9} weight="700">R(in)</Txt>
      {/* feedback resistor */}
      <Line x1={128} y1={70} x2={128} y2={26} stroke={O} strokeWidth={1.4} />
      <Line x1={128} y1={26} x2={160} y2={26} stroke={O} strokeWidth={1.4} />
      {res(160, 26)}
      <Line x1={196} y1={26} x2={240} y2={26} stroke={O} strokeWidth={1.4} />
      <Line x1={240} y1={26} x2={240} y2={90} stroke={O} strokeWidth={1.4} />
      <Txt x={178} y={14} size={9} weight="700">R(f)</Txt>
      <Circle cx={128} cy={70} r={2.5} fill={O} />
      {/* output */}
      <Line x1={220} y1={90} x2={290} y2={90} stroke={O} strokeWidth={1.4} />
      <Circle cx={240} cy={90} r={2.5} fill={O} />
      <Circle cx={290} cy={90} r={3} fill="#ffffff" stroke={O} strokeWidth={1.2} />
      {/* non-inverting input to earth */}
      <Line x1={150} y1={110} x2={128} y2={110} stroke={O} strokeWidth={1.4} />
      <Line x1={128} y1={110} x2={128} y2={140} stroke={O} strokeWidth={1.4} />
      <Line x1={116} y1={140} x2={140} y2={140} stroke={O} strokeWidth={1.4} />
      <Line x1={120} y1={145} x2={136} y2={145} stroke={O} strokeWidth={1.4} />
      <Line x1={124} y1={150} x2={132} y2={150} stroke={O} strokeWidth={1.4} />
      <Line x1={30} y1={150} x2={290} y2={150} stroke={GREY} strokeWidth={1} strokeDasharray="4 3" />
      <Txt x={30} y={94} size={9} weight="700">V(in)</Txt>
      <Txt x={290} y={114} size={9} weight="700">V(out)</Txt>
      <Txt x={128} y={88} size={8} anchor="end" fill={BLUE}>virtual earth</Txt>
      <Txt x={160} y={172} size={9.5} weight="700">inverting: gain = −R(f)/R(in)</Txt>
      <Txt x={160} y={187} size={8.5} fill={GREY}>non-inverting: gain = 1 + R(f)/R₁</Txt>
    </G>
  );
}

// ---------- an optical fibre ----------
function FibreArt() {
  const ray = [[20, 74], [60, 90], [104, 70], [148, 110], [192, 70], [236, 110], [280, 70], [318, 88]];
  return (
    <G>
      <Rect x={50} y={50} width={270} height={80} fill="#d9ecf7" stroke={O} strokeWidth={1.2} />
      <Rect x={50} y={70} width={270} height={40} fill="#f4fbff" stroke={O} strokeWidth={1} />
      <Path d={line(ray.slice(1))} stroke={RED} strokeWidth={1.8} fill="none" />
      <Arrow x1={ray[0][0]} y1={ray[0][1]} x2={ray[1][0]} y2={ray[1][1]} c={RED} w={1.8} size={5} />
      <Line x1={148} y1={110} x2={148} y2={86} stroke={GREY} strokeWidth={1} strokeDasharray="3 3" />
      <Path d={`M148 96 A14 14 0 0 0 ${148 - 14 * Math.sin(Math.atan(44 / 40))} ${110 - 14 * Math.cos(Math.atan(44 / 40))}`} stroke={GREY} strokeWidth={1} fill="none" />
      <Txt x={136} y={93} size={8.5} anchor="end" fill={GREY}>i {'>'} c</Txt>
      <Txt x={300} y={64} size={8.5} anchor="end">cladding, n = 1.48</Txt>
      <Txt x={300} y={124} size={8.5} anchor="end">cladding</Txt>
      <Txt x={262} y={93} size={8.5} weight="700">core, n = 1.50</Txt>
      <Txt x={185} y={152} size={9} weight="700">total internal reflection at every boundary</Txt>
      <Txt x={185} y={168} size={8.5} fill={GREY}>attenuation = 10 lg(P₁/P₂) dB; every 10 dB divides the power by 10</Txt>
    </G>
  );
}

export const PHYSICS_U6 = {
  'ap-equipotentials': {
    title: 'Field lines and equipotentials',
    w: 340,
    h: 190,
    art: EquipotentialArt,
    labels: [],
    facts: [
      'Between parallel plates at 6 V and 0 V the field is uniform: equally spaced field lines and equally spaced equipotentials at 5, 4, 3, 2 and 1 V.',
      'Around a point charge the field lines are radial and the equipotentials are circles, further apart as the distance grows.',
      'Field lines always cross equipotentials at right angles, pointing from high to low potential.',
    ],
  },
  'ap-rc-discharge': {
    title: 'Capacitor discharge: V and ln V against time',
    w: 320,
    h: 250,
    art: DischargeArt,
    labels: [],
    facts: [
      'A 1000 μF capacitor discharges from 6.0 V through 47 kΩ, so RC = 47 s.',
      'V falls exponentially: after 47 s it is 37% of its starting value.',
      'ln V against t is a straight line of gradient −1/RC = −0.021 s⁻¹, which gives C when R is known.',
    ],
  },
  'ap-current-balance': {
    title: 'Measuring B with a current balance',
    w: 300,
    h: 206,
    art: BalanceArt,
    labels: [
      ['Copper rod (current out of the page)', 40, 70, 153, 84],
      ['Horseshoe magnet', 268, 100, 212, 100],
      ['Top-pan balance', 40, 190, 70, 190],
    ],
    facts: [
      'A copper rod is clamped between the poles of a horseshoe magnet standing on a top-pan balance.',
      'With the current out of the page and the field from N to S, the force BIL on the rod is upwards (Fleming’s left-hand rule); the equal and opposite force pushes the magnet down, so the balance reading rises by Δm.',
      'BIL = Δm × g, so a graph of Δm against I has gradient BL/g, which gives B.',
    ],
  },
  'ap-falling-magnet': {
    title: 'E.m.f. induced by a magnet falling through a coil',
    w: 330,
    h: 200,
    art: FallingArt,
    labels: [],
    facts: [
      'As the magnet enters, the flux linkage rises and an e.m.f. is induced in one direction; as it leaves, the flux falls and the e.m.f. reverses.',
      'The second pulse is taller and narrower because the magnet is moving faster as it leaves.',
      'The areas under the two pulses are equal, because each equals the total change of flux linkage NΔΦ.',
    ],
  },
  'ap-lcr-resonance': {
    title: 'Resonance in a series LCR circuit',
    w: 320,
    h: 216,
    art: LcrArt,
    labels: [],
    facts: [
      'Calculated for L = 0.10 H and C = 1.0 μF on a 2.0 V rms supply: resonance at f₀ = 1/(2π√LC) = 503 Hz.',
      'With R = 50 Ω the current peaks at 40 mA; with R = 200 Ω the peak is only 10 mA and much broader.',
      'At resonance X(L) = X(C), so the impedance equals R and the current is in phase with the supply.',
    ],
  },
  'ap-kepler': {
    title: 'Kepler’s third law from planetary data',
    w: 320,
    h: 216,
    art: KeplerArt,
    labels: [],
    facts: [
      'Planetary data: Mercury 0.387 AU and 0.241 years; Venus 0.723 AU and 0.615 y; Earth 1 AU and 1 y; Mars 1.52 AU and 1.88 y; Jupiter 5.20 AU and 11.9 y.',
      'On a graph of lg T against lg r the points lie on a straight line of gradient 1.5.',
      'So T ∝ r^1.5, that is T² ∝ r³: Kepler’s third law.',
    ],
  },
  'ap-resonance-tube': {
    title: 'The resonance tube: first and second resonance',
    w: 310,
    h: 230,
    art: TubeArt,
    labels: [],
    facts: [
      'The water surface is a displacement node; an antinode forms a small distance e (the end correction) above the open end.',
      'The first resonance fits a quarter wavelength: L₁ + e = λ/4. The second fits three quarters: L₂ + e = 3λ/4.',
      'Subtracting removes the end correction: λ = 2(L₂ − L₁), and the speed of sound is v = fλ.',
    ],
  },
  'ap-grating': {
    title: 'Measuring a wavelength with a diffraction grating',
    w: 340,
    h: 224,
    art: GratingArt,
    labels: [],
    facts: [
      'A laser beam passes through a grating and forms spots on a screen a distance D away: the central beam (n = 0) and orders on either side.',
      'For each order, d sin θ = nλ, where d is the slit spacing; the angle is found from tan θ = x/D.',
      'Drawn for 650 nm light and 300 lines per mm: θ = 11.3° for n = 1 and 23° for n = 2.',
    ],
  },
  'ap-uv-graph': {
    title: 'Focal length from a 1/v against 1/u graph',
    w: 320,
    h: 220,
    art: UvArt,
    labels: [],
    facts: [
      'For a converging lens, 1/u + 1/v = 1/f, so the graph of 1/v against 1/u is a straight line of gradient −1.',
      'Both intercepts equal 1/f. Here they are 0.067 cm⁻¹, so f = 15 cm.',
      'Results drawn for object distances of 20, 25, 30, 40 and 60 cm.',
    ],
  },
  'ap-planck-graph': {
    title: 'Stopping potential against frequency',
    w: 330,
    h: 220,
    art: PlanckArt,
    labels: [],
    facts: [
      'eV(s) = hf − φ, so V(s) against f is a straight line of gradient h/e = 4.1 × 10⁻¹⁵ V s.',
      'Potassium (work function 2.3 eV) has a threshold frequency of 5.6 × 10¹⁴ Hz; zinc (4.3 eV) of 10.4 × 10¹⁴ Hz.',
      'The lines for different metals are parallel: the gradient is the same, only the threshold changes.',
    ],
  },
  'ap-ln-decay': {
    title: 'Half-life from a ln(count rate) graph',
    w: 320,
    h: 214,
    art: LnDecayArt,
    labels: [],
    facts: [
      'Count rates from protactinium-234m, with the background subtracted, are taken every 20 s.',
      'ln(count rate) against time is a straight line; the random scatter of the points is typical of counting.',
      'The gradient is −λ = −0.0099 s⁻¹, so the half-life is 0.693 ÷ 0.0099 = 70 s.',
    ],
  },
  'ap-opamp': {
    title: 'The inverting amplifier',
    w: 320,
    h: 192,
    art: OpAmpArt,
    labels: [],
    facts: [
      'The input passes through R(in) to the inverting input; R(f) feeds the output back to the same point; the non-inverting input is earthed.',
      'With negative feedback the inverting input stays at almost 0 V (a virtual earth), so the gain is −R(f)/R(in).',
      'The non-inverting amplifier has a gain of 1 + R(f)/R₁ and a very high input resistance.',
    ],
  },
  'ap-optical-fibre': {
    title: 'Light in an optical fibre',
    w: 340,
    h: 176,
    art: FibreArt,
    labels: [],
    facts: [
      'The core (n = 1.50) is surrounded by cladding of lower refractive index (n = 1.48), so the critical angle at the boundary is about 81°.',
      'Rays meeting the boundary at more than the critical angle are totally internally reflected along the fibre.',
      'Attenuation in decibels is 10 lg(P₁/P₂): each 10 dB of loss divides the power by 10.',
    ],
  },
  'ap-fields-compared': columnsSpec('Gravitational, electric and magnetic fields', [
    { head: 'Gravitational', items: ['acts on mass', 'F = Gm₁m₂/r²', 'g = GM/r²', 'V = −GM/r', 'always attracts'] },
    { head: 'Electric', items: ['acts on charge', 'F = Q₁Q₂/4πε₀r²', 'E = Q/4πε₀r²', 'V = Q/4πε₀r', 'attracts or repels'] },
    { head: 'Magnetic', items: ['acts on moving charge', 'F = Bqv and F = BIL', 'B = μ₀I/2πr (wire)', 'force ⊥ velocity', 'no single poles'] },
  ], { colW: 132 }),
};
