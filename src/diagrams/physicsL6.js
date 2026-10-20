// A Level Physics figures for the 2026/2027 Lower Sixth scheme: dot and cross
// products, a straight-line graph with error bars, s, v and a from calculus,
// the force table, a two-dimensional collision, work as the area under F-x, a
// banked road, resonance curves, calibrating a thermometer, calorimetry,
// thermal conductivities (log scale), Searle’s apparatus, Archimedes’
// principle, terminal velocity, isothermal and adiabatic curves, and the GCE
// papers (0780). Graphs are calculated and drawn to scale.
import { Circle, G, Line, Path, Rect } from 'react-native-svg';
import { Head, Txt } from './Diagram';
import { columnsSpec } from './charts';
import { Beaker, CellSymbol, Meter, ResistorSymbol, Thermometer, Wire, WATER } from './kit';

const O = '#33414d';
const RED = '#c8463d';
const BLUE = '#1f6fb2';
const GREEN = '#2e7d32';
const GREY = '#6b7a88';
const line = (pts) => pts.map(([x, y], i) => `${i ? 'L' : 'M'}${x.toFixed(1)} ${y.toFixed(1)}`).join(' ');
const rad = (d) => (d * Math.PI) / 180;

function Arrow({ x1, y1, x2, y2, c = O, w = 1.6, dash }) {
  const len = Math.hypot(x2 - x1, y2 - y1) || 1;
  return (
    <G>
      <Line x1={x1} y1={y1} x2={x2 - ((x2 - x1) / len) * 6} y2={y2 - ((y2 - y1) / len) * 6} stroke={c} strokeWidth={w} strokeDasharray={dash} />
      <Head x={x2} y={y2} dx={x2 - x1} dy={y2 - y1} size={7} fill={c} />
    </G>
  );
}

// Axes with ticks: xs and ys are [value, label] lists already mapped by X and Y.
function Axes({ X, Y, x0, x1, y0, y1, xs, ys, xTitle, yTitle, yTitleX = 14 }) {
  return (
    <G>
      <Line x1={X(x0)} y1={Y(y0)} x2={X(x1) + 4} y2={Y(y0)} stroke={O} strokeWidth={1.2} />
      <Line x1={X(x0)} y1={Y(y0)} x2={X(x0)} y2={Y(y1) - 4} stroke={O} strokeWidth={1.2} />
      {xs.map(([v, t]) => (
        <G key={`x${v}`}>
          <Line x1={X(v)} y1={Y(y0)} x2={X(v)} y2={Y(y0) + 4} stroke={O} strokeWidth={1} />
          <Txt x={X(v)} y={Y(y0) + 14} size={8.5}>
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

// ---------- dot and cross products ----------
function DotCrossArt() {
  const bx = 40 + 90 * Math.cos(rad(50));
  const by = 130 - 90 * Math.sin(rad(50));
  const cx = 200 + 70 * Math.cos(rad(60));
  const cy = 130 - 70 * Math.sin(rad(60));
  return (
    <G>
      <Arrow x1={40} y1={130} x2={150} y2={130} c={BLUE} />
      <Arrow x1={40} y1={130} x2={bx} y2={by} c={RED} />
      <Line x1={bx} y1={by} x2={bx} y2={130} stroke={GREY} strokeWidth={1} strokeDasharray="3 3" />
      <Line x1={40} y1={140} x2={bx} y2={140} stroke={RED} strokeWidth={1.4} />
      <Txt x={(40 + bx) / 2} y={152} size={8.5} fill={RED}>|B| cos θ</Txt>
      <Path d={`M62 130 A22 22 0 0 0 ${40 + 22 * Math.cos(rad(50))} ${130 - 22 * Math.sin(rad(50))}`} stroke={O} strokeWidth={1} fill="none" />
      <Txt x={68} y={122} size={9}>θ</Txt>
      <Txt x={154} y={126} size={10} weight="700" fill={BLUE} anchor="start">A</Txt>
      <Txt x={bx - 6} y={by - 4} size={10} weight="700" fill={RED}>B</Txt>
      <Txt x={95} y={20} size={9.5} weight="700">A·B = |A||B| cos θ</Txt>
      <Txt x={95} y={33} size={8.5} fill={GREY}>a scalar: A times the part of B along A</Txt>
      {/* cross product */}
      <Path d={line([[200, 130], [300, 130], [300 + cx - 200, cy], [cx, cy]]) + ' Z'} fill="#e6eef8" stroke="none" />
      <Line x1={300} y1={130} x2={300 + cx - 200} y2={cy} stroke={GREY} strokeWidth={1} strokeDasharray="3 3" />
      <Line x1={cx} y1={cy} x2={300 + cx - 200} y2={cy} stroke={GREY} strokeWidth={1} strokeDasharray="3 3" />
      <Arrow x1={200} y1={130} x2={300} y2={130} c={BLUE} />
      <Arrow x1={200} y1={130} x2={cx} y2={cy} c={RED} />
      <Circle cx={200} cy={130} r={7} fill="#ffffff" stroke={O} strokeWidth={1.2} />
      <Circle cx={200} cy={130} r={2} fill={O} />
      <Txt x={304} y={126} size={10} weight="700" fill={BLUE} anchor="start">A</Txt>
      <Txt x={cx - 8} y={cy - 4} size={10} weight="700" fill={RED}>B</Txt>
      <Txt x={262} y={108} size={8.5} fill={GREY}>area = |A||B| sin θ</Txt>
      <Txt x={262} y={20} size={9.5} weight="700">|A × B| = |A||B| sin θ</Txt>
      <Txt x={262} y={33} size={8.5} fill={GREY}>a vector; here it points out of the page</Txt>
      <Txt x={210} y={152} size={8.5} anchor="start" fill={GREY}>⊙ = out of the page</Txt>
    </G>
  );
}

// ---------- straight-line graph with error bars ----------
const BF = [
  [0.2, 0.82],
  [0.4, 1.58],
  [0.6, 2.44],
  [0.8, 3.22],
  [1.0, 4.04],
];
const BAR = 0.04;
const fitBF = () => {
  const n = BF.length;
  const mx = BF.reduce((s, p) => s + p[0], 0) / n;
  const my = BF.reduce((s, p) => s + p[1], 0) / n;
  const b = BF.reduce((s, p) => s + (p[0] - mx) * (p[1] - my), 0) / BF.reduce((s, p) => s + (p[0] - mx) ** 2, 0);
  return { b, a: my - b * mx };
};
const LX = (l) => 56 + l * 240;
const LY = (t) => 186 - t * 38;

function BestFitArt() {
  const { a, b } = fitBF();
  const w0 = BF[0][1] - BAR;
  const wb = (BF[4][1] + BAR - w0) / (BF[4][0] - BF[0][0]);
  return (
    <G>
      <Axes X={LX} Y={LY} x0={0} x1={1.05} y0={0} y1={4.4} xs={[[0, '0'], [0.2, '0.2'], [0.4, '0.4'], [0.6, '0.6'], [0.8, '0.8'], [1.0, '1.0']]} ys={[[0, '0'], [1, '1'], [2, '2'], [3, '3'], [4, '4']]} xTitle="l / m" yTitle="T² / s²" yTitleX={20} />
      <Line x1={LX(0.05)} y1={LY(a + b * 0.05)} x2={LX(1.05)} y2={LY(a + b * 1.05)} stroke={BLUE} strokeWidth={1.8} />
      <Line x1={LX(0.15)} y1={LY(w0 + wb * -0.05)} x2={LX(1.05)} y2={LY(w0 + wb * 0.85)} stroke={RED} strokeWidth={1.2} strokeDasharray="5 3" />
      {BF.map(([l, t]) => (
        <G key={l}>
          <Line x1={LX(l)} y1={LY(t - BAR)} x2={LX(l)} y2={LY(t + BAR)} stroke={O} strokeWidth={1.2} />
          <Line x1={LX(l) - 3} y1={LY(t - BAR)} x2={LX(l) + 3} y2={LY(t - BAR)} stroke={O} strokeWidth={1.2} />
          <Line x1={LX(l) - 3} y1={LY(t + BAR)} x2={LX(l) + 3} y2={LY(t + BAR)} stroke={O} strokeWidth={1.2} />
          <Circle cx={LX(l)} cy={LY(t)} r={2.2} fill={O} />
        </G>
      ))}
      <Txt x={LX(0.05)} y={30} size={8.5} weight="700" anchor="start" fill={BLUE}>
        {`best line: gradient ${b.toFixed(2)} s² m⁻¹, g = ${((4 * Math.PI * Math.PI) / b).toFixed(1)} m s⁻²`}
      </Txt>
      <Txt x={LX(0.05)} y={43} size={8.5} anchor="start" fill={RED}>
        {`worst acceptable line: gradient ${wb.toFixed(2)} s² m⁻¹`}
      </Txt>
    </G>
  );
}

// ---------- s, v and a from calculus ----------
const CT = (t) => 66 + t * 115;
const PANELS = [
  { name: 's / m', f: (t) => 2 * t ** 3 - 3 * t * t, lo: -1.5, hi: 4.5, top: 18, ticks: [-1, 0, 2, 4], c: BLUE },
  { name: 'v / m s⁻¹', f: (t) => 6 * t * t - 6 * t, lo: -3, hi: 12, top: 112, ticks: [0, 6, 12], c: GREEN },
  { name: 'a / m s⁻²', f: (t) => 12 * t - 6, lo: -6, hi: 18, top: 206, ticks: [-6, 0, 6, 12, 18], c: RED },
];
const PH = 80;

function CalculusArt() {
  return (
    <G>
      {PANELS.map((p) => {
        const Y = (v) => p.top + PH - ((v - p.lo) / (p.hi - p.lo)) * PH;
        const pts = [];
        for (let t = 0; t <= 2.0001; t += 0.02) pts.push([CT(t), Y(p.f(t))]);
        return (
          <G key={p.name}>
            <Line x1={CT(0)} y1={p.top} x2={CT(0)} y2={p.top + PH} stroke={O} strokeWidth={1.1} />
            <Line x1={CT(0)} y1={Y(0)} x2={CT(2) + 4} y2={Y(0)} stroke={O} strokeWidth={1.1} />
            {p.ticks.map((v) => (
              <G key={v}>
                <Line x1={CT(0) - 4} y1={Y(v)} x2={CT(0)} y2={Y(v)} stroke={O} strokeWidth={1} />
                <Txt x={CT(0) - 7} y={Y(v) + 3} size={8} anchor="end">
                  {v < 0 ? `−${-v}` : `${v}`}
                </Txt>
              </G>
            ))}
            <Path d={line(pts)} stroke={p.c} strokeWidth={2} fill="none" />
            <Txt x={16} y={p.top + PH / 2} size={8.5} weight="700" rotate={-90} fill={p.c}>
              {p.name}
            </Txt>
          </G>
        );
      })}
      <Line x1={CT(1)} y1={18} x2={CT(1)} y2={286} stroke={GREY} strokeWidth={1} strokeDasharray="4 3" />
      <Txt x={CT(1) + 4} y={110} size={8} anchor="start" fill={GREY}>
        t = 1 s: v = 0, s least
      </Txt>
      {[0, 0.5, 1, 1.5, 2].map((t) => (
        <Txt key={t} x={CT(t)} y={300} size={8.5}>
          {t}
        </Txt>
      ))}
      <Txt x={CT(1)} y={314} size={9} weight="700">
        t / s
      </Txt>
      <Txt x={CT(0.05)} y={30} size={8.5} anchor="start" fill={BLUE}>
        s = 2t³ − 3t²
      </Txt>
      <Txt x={CT(0.05)} y={124} size={8.5} anchor="start" fill={GREEN}>
        v = ds/dt = 6t² − 6t
      </Txt>
      <Txt x={CT(0.05)} y={218} size={8.5} anchor="start" fill={RED}>
        a = dv/dt = 12t − 6
      </Txt>
    </G>
  );
}

// ---------- force table and triangle of forces ----------
const FT = [
  { f: 3.0, a: 0, c: BLUE },
  { f: 4.0, a: 90, c: GREEN },
  { f: 5.0, a: 233.13, c: RED },
];

function ForceTableArt() {
  const cx = 96;
  const cy = 100;
  const R = 70;
  const S = 22;
  return (
    <G>
      <Circle cx={cx} cy={cy} r={R} fill="#f2f5f8" stroke={O} strokeWidth={1.2} />
      {FT.map((f) => {
        const ex = cx + R * Math.cos(rad(f.a));
        const ey = cy - R * Math.sin(rad(f.a));
        const lx = cx + (R + 16) * Math.cos(rad(f.a));
        const ly = cy - (R + 16) * Math.sin(rad(f.a));
        return (
          <G key={f.a}>
            <Line x1={cx} y1={cy} x2={ex} y2={ey} stroke={f.c} strokeWidth={1.6} />
            <Circle cx={ex} cy={ey} r={5} fill="#ffffff" stroke={O} strokeWidth={1.2} />
            <Txt x={lx} y={ly + 3} size={8.5} weight="700" fill={f.c}>
              {`${f.f.toFixed(1)} N`}
            </Txt>
          </G>
        );
      })}
      <Circle cx={cx} cy={cy} r={5} fill="#ffffff" stroke={O} strokeWidth={1.4} />
      <Txt x={cx} y={190} size={8.5} fill={GREY}>force table (from above)</Txt>
      {/* triangle of forces, 22 units per newton */}
      <Arrow x1={226} y1={150} x2={226 + 3 * S} y2={150} c={BLUE} />
      <Arrow x1={226 + 3 * S} y1={150} x2={226 + 3 * S} y2={150 - 4 * S} c={GREEN} />
      <Arrow x1={226 + 3 * S} y1={150 - 4 * S} x2={226} y2={150} c={RED} />
      <Txt x={226 + 1.5 * S} y={164} size={8.5} fill={BLUE}>3.0 N</Txt>
      <Txt x={226 + 3 * S + 5} y={150 - 2 * S} size={8.5} anchor="start" fill={GREEN}>4.0 N</Txt>
      <Txt x={226 + 1.5 * S - 10} y={150 - 2 * S} size={8.5} anchor="end" fill={RED}>5.0 N</Txt>
      <Txt x={262} y={190} size={8.5} fill={GREY}>head to tail: a closed triangle</Txt>
    </G>
  );
}

// ---------- a two-dimensional collision ----------
function CollisionArt() {
  const S = 250;
  const x0 = 30;
  const y0 = 110;
  const p1 = [x0 + 0.3 * S * Math.cos(rad(60)), y0 - 0.3 * S * Math.sin(rad(60))];
  const end = [x0 + 0.6 * S, y0];
  return (
    <G>
      <Arrow x1={x0} y1={y0} x2={end[0]} y2={end[1]} c={O} w={2} />
      <Arrow x1={x0} y1={y0} x2={p1[0]} y2={p1[1]} c={BLUE} w={2} />
      <Arrow x1={p1[0]} y1={p1[1]} x2={end[0]} y2={end[1]} c={RED} w={2} />
      <Txt x={(x0 + end[0]) / 2} y={y0 + 16} size={8.5} weight="700">p before = 0.60</Txt>
      <Txt x={(x0 + p1[0]) / 2 - 8} y={(y0 + p1[1]) / 2} size={8.5} weight="700" anchor="end" fill={BLUE}>0.30</Txt>
      <Txt x={(p1[0] + end[0]) / 2 + 8} y={(p1[1] + end[1]) / 2 - 4} size={8.5} weight="700" anchor="start" fill={RED}>0.52</Txt>
      <Path d={`M${p1[0] + 9 * Math.cos(rad(-60))} ${p1[1] - 9 * Math.sin(rad(-60))} L${p1[0] + 9 * Math.cos(rad(-60)) + 9 * Math.cos(rad(-30))} ${p1[1] - 9 * Math.sin(rad(-60)) - 9 * Math.sin(rad(-30))} L${p1[0] + 9 * Math.cos(rad(-30))} ${p1[1] - 9 * Math.sin(rad(-30))}`} stroke={GREY} strokeWidth={1} fill="none" />
      <Txt x={250} y={36} size={9} weight="700">Momentum / kg m s⁻¹</Txt>
      <Txt x={250} y={56} size={8.5}>before: 0.60 along the line</Txt>
      <Txt x={250} y={72} size={8.5} fill={BLUE}>puck 1 after: 0.30 at 60°</Txt>
      <Txt x={250} y={88} size={8.5} fill={RED}>puck 2 after: 0.52 at 30°</Txt>
      <Txt x={250} y={110} size={8.5} fill={GREY}>the two after-vectors add</Txt>
      <Txt x={250} y={123} size={8.5} fill={GREY}>to the vector before,</Txt>
      <Txt x={250} y={136} size={8.5} fill={GREY}>at 90° to each other</Txt>
    </G>
  );
}

// ---------- work as the area under F-x ----------
const WX = (x) => 56 + x * 2300;
const WY = (f) => 168 - f * 6.4;

function WorkArt() {
  return (
    <G>
      <Path d={line([[WX(0), WY(0)], [WX(0.1), WY(20)], [WX(0.1), WY(0)]]) + ' Z'} fill="#dff0d8" />
      <Axes X={WX} Y={WY} x0={0} x1={0.11} y0={0} y1={22} xs={[[0, '0'], [0.02, '0.02'], [0.04, '0.04'], [0.06, '0.06'], [0.08, '0.08'], [0.1, '0.10']]} ys={[[0, '0'], [5, '5'], [10, '10'], [15, '15'], [20, '20']]} xTitle="Extension x / m" yTitle="Force F / N" yTitleX={18} />
      <Line x1={WX(0)} y1={WY(0)} x2={WX(0.105)} y2={WY(21)} stroke={BLUE} strokeWidth={2} />
      <Txt x={WX(0.066)} y={WY(5)} size={8.5} weight="700" fill={GREEN}>
        area = ½Fx
      </Txt>
      <Txt x={WX(0.066)} y={WY(5) + 12} size={8.5} fill={GREEN}>
        = ½ × 20 × 0.10 = 1.0 J
      </Txt>
      <Txt x={WX(0.01)} y={WY(20)} size={8.5} anchor="start" fill={BLUE}>
        k = 200 N m⁻¹
      </Txt>
    </G>
  );
}

// ---------- a car on a banked road ----------
function BankedArt() {
  const th = Math.atan(80 / 240);
  const deg = (th * 180) / Math.PI;
  const cx = 168;
  const cy = 122;
  const nx = -Math.sin(th);
  const ny = -Math.cos(th);
  return (
    <G>
      <Path d="M40 170 L280 90 L280 170 Z" fill="#e8e2d6" stroke={O} strokeWidth={1.2} />
      <G transform={`rotate(${-deg} ${cx} ${cy + 12})`}>
        <Rect x={cx - 26} y={cy - 6} width={52} height={18} rx={4} fill="#9ec3e6" stroke={O} strokeWidth={1.2} />
        <Circle cx={cx - 15} cy={cy + 13} r={5} fill={O} />
        <Circle cx={cx + 15} cy={cy + 13} r={5} fill={O} />
      </G>
      <Arrow x1={cx} y1={cy} x2={cx} y2={cy + 62} c={RED} />
      <Txt x={cx + 6} y={cy + 58} size={9} weight="700" anchor="start" fill={RED}>mg</Txt>
      <Arrow x1={cx} y1={cy} x2={cx + nx * 76} y2={cy + ny * 76} c={BLUE} />
      <Txt x={cx + nx * 76 - 6} y={cy + ny * 76 + 14} size={9} weight="700" anchor="end" fill={BLUE}>R</Txt>
      <Line x1={cx + nx * 76} y1={cy + ny * 76} x2={cx} y2={cy + ny * 76} stroke={BLUE} strokeWidth={1} strokeDasharray="3 3" />
      <Txt x={cx + 4} y={cy + ny * 76 + 3} size={8} anchor="start" fill={BLUE}>R cos θ</Txt>
      <Txt x={cx + (nx * 76) / 2} y={cy + ny * 76 - 6} size={8} fill={BLUE}>R sin θ</Txt>
      <Arrow x1={110} y1={16} x2={44} y2={16} c={GREY} w={1.2} />
      <Txt x={116} y={19} size={8.5} anchor="start" fill={GREY}>to the centre of the bend</Txt>
      <Line x1={cx} y1={cy + ny * 76} x2={cx} y2={cy} stroke={BLUE} strokeWidth={1} strokeDasharray="3 3" />
      <Path d={`M70 170 A30 30 0 0 0 ${40 + 30 * Math.cos(th)} ${170 - 30 * Math.sin(th)}`} stroke={O} strokeWidth={1} fill="none" />
      <Txt x={80} y={164} size={9}>θ</Txt>
      <Txt x={160} y={204} size={8.5} weight="700">R sin θ = mv²/r, R cos θ = mg, so tan θ = v²/rg</Txt>
    </G>
  );
}

// ---------- resonance curves ----------
const RX = (r) => 52 + r * 130;
const RY = (a) => 182 - a * 30;
const RES = [
  { q: 5, name: 'light damping', c: BLUE },
  { q: 2, name: 'more damping', c: GREEN },
  { q: 1, name: 'heavy damping', c: RED },
];

function ResonanceArt() {
  return (
    <G>
      <Axes X={RX} Y={RY} x0={0} x1={2} y0={0} y1={5.3} xs={[[0, '0'], [0.5, '0.5'], [1, '1.0'], [1.5, '1.5'], [2, '2.0']]} ys={[[0, '0'], [1, '1'], [2, '2'], [3, '3'], [4, '4'], [5, '5']]} xTitle="Driving frequency ÷ natural frequency" yTitle="Amplitude (× static)" yTitleX={16} />
      <Line x1={RX(1)} y1={RY(0)} x2={RX(1)} y2={RY(5.3)} stroke={GREY} strokeWidth={1} strokeDasharray="4 3" />
      {RES.map((k) => {
        const pts = [];
        for (let r = 0; r <= 2.0001; r += 0.01) pts.push([RX(r), RY(1 / Math.sqrt((1 - r * r) ** 2 + (r / k.q) ** 2))]);
        return <Path key={k.q} d={line(pts)} stroke={k.c} strokeWidth={2} fill="none" />;
      })}
      <Txt x={RX(1.12)} y={RY(4.2)} size={8.5} weight="700" anchor="start" fill={BLUE}>light damping</Txt>
      <Txt x={RX(1.3)} y={RY(2.3)} size={8.5} weight="700" anchor="start" fill={GREEN}>more damping</Txt>
      <Txt x={RX(0.05)} y={RY(0.5)} size={8.5} weight="700" anchor="start" fill={RED}>heavy damping</Txt>
      <Txt x={RX(1) - 4} y={RY(5.3) + 8} size={8} anchor="end" fill={GREY}>natural frequency</Txt>
    </G>
  );
}

// ---------- calibrating a thermometer ----------
const TB = 200;
const TL = (cm) => TB - cm * 7.5;

function CalibrationArt() {
  return (
    <G>
      <Rect x={76} y={22} width={8} height={TB - 18} rx={4} fill="#ffffff" stroke={O} strokeWidth={1.2} />
      <Rect x={78.5} y={TL(9.5)} width={3} height={TB - TL(9.5)} fill={RED} />
      <Circle cx={80} cy={TB + 6} r={10} fill={RED} stroke={O} strokeWidth={1.2} />
      {[[2.0, 'ice point: 2.0 cm', BLUE], [22.0, 'steam point: 22.0 cm', RED], [9.5, 'warm water: 9.5 cm', GREEN]].map(([cm, t, c]) => (
        <G key={cm}>
          <Line x1={70} y1={TL(cm)} x2={96} y2={TL(cm)} stroke={c} strokeWidth={1.6} />
          <Txt x={102} y={TL(cm) + 3} size={8.5} weight="700" anchor="start" fill={c}>
            {t}
          </Txt>
        </G>
      ))}
      <Line x1={56} y1={TB} x2={56} y2={TL(22)} stroke={GREY} strokeWidth={0.8} />
      <Txt x={50} y={(TB + TL(22)) / 2} size={8} rotate={-90} fill={GREY}>length of column from the bulb</Txt>
      <Txt x={232} y={100} size={9} weight="700">θ = (9.5 − 2.0) ÷ (22.0 − 2.0) × 100</Txt>
      <Txt x={232} y={116} size={9.5} weight="700" fill={GREEN}>= 37.5 °C</Txt>
    </G>
  );
}

// ---------- electrical calorimetry ----------
function CalorimetryArt() {
  return (
    <G>
      {/* circuit */}
      <Wire d="M20 30 L52 30 M58 30 L90 30 L90 55 M90 85 L90 110 L20 110 L20 81 M20 59 L20 30" />
      <CellSymbol x={55} y={30} />
      <Meter x={20} y={70} letter="A" />
      <ResistorSymbol x={90} y={70} vertical />
      <Wire d="M90 45 L122 45 L122 59 M122 81 L122 95 L90 95" />
      <Meter x={122} y={70} letter="V" />
      <Txt x={78} y={73} size={8} anchor="end" fill={GREY}>heater</Txt>
      {/* lagged block */}
      <Rect x={164} y={70} width={124} height={130} rx={4} fill="#f3e3b8" stroke={O} strokeWidth={1} />
      <Rect x={176} y={82} width={100} height={110} fill="#c4cbd2" stroke={O} strokeWidth={1.2} />
      <Rect x={198} y={58} width={12} height={110} rx={2} fill="#6b5847" stroke={O} strokeWidth={1} />
      <Wire d="M201 58 L201 40 M207 58 L207 40" />
      <Thermometer x={252} y={22} h={150} fill={0.3} />
    </G>
  );
}

// ---------- thermal conductivities, log scale ----------
const COND = [
  { name: 'copper', k: 390 },
  { name: 'iron', k: 80 },
  { name: 'glass', k: 1.0 },
  { name: 'water', k: 0.6 },
  { name: 'wood', k: 0.15 },
  { name: 'air', k: 0.025 },
];
const KX = (k) => 104 + (Math.log10(k) + 2) * 42;

function ConductivityArt() {
  return (
    <G>
      {COND.map((m, i) => {
        const y = 14 + i * 26;
        return (
          <G key={m.name}>
            <Txt x={96} y={y + 12} size={9.5} weight="700" anchor="end">
              {m.name}
            </Txt>
            <Rect x={KX(0.01)} y={y} width={KX(m.k) - KX(0.01)} height={16} fill={i < 2 ? '#f2a7a0' : '#9ec3e6'} stroke={O} strokeWidth={0.8} />
            <Txt x={KX(m.k) + 4} y={y + 12} size={8.5} anchor="start">
              {m.k}
            </Txt>
          </G>
        );
      })}
      <Line x1={KX(0.01)} y1={172} x2={KX(1000)} y2={172} stroke={O} strokeWidth={1.2} />
      {[0.01, 0.1, 1, 10, 100, 1000].map((k) => (
        <G key={k}>
          <Line x1={KX(k)} y1={172} x2={KX(k)} y2={176} stroke={O} strokeWidth={1} />
          <Txt x={KX(k)} y={186} size={8.5}>
            {k}
          </Txt>
        </G>
      ))}
      <Txt x={KX(3)} y={200} size={9} weight="700">
        Thermal conductivity / W m⁻¹ K⁻¹ (log scale)
      </Txt>
    </G>
  );
}

// ---------- Searle’s apparatus ----------
function SearleArt() {
  return (
    <G>
      <Rect x={70} y={10} width={180} height={12} fill="#8d969f" stroke={O} strokeWidth={1} />
      <Line x1={120} y1={22} x2={120} y2={140} stroke={O} strokeWidth={1.4} />
      <Line x1={200} y1={22} x2={200} y2={140} stroke={O} strokeWidth={1.4} />
      <Rect x={108} y={140} width={24} height={34} fill="#e6eef8" stroke={O} strokeWidth={1.1} />
      <Rect x={188} y={140} width={24} height={34} fill="#e6eef8" stroke={O} strokeWidth={1.1} />
      <Rect x={132} y={150} width={56} height={6} rx={3} fill="#cfe6c8" stroke={O} strokeWidth={0.9} />
      <Circle cx={160} cy={153} r={2} fill={O} />
      <Rect x={190} y={128} width={20} height={10} fill="#c4cbd2" stroke={O} strokeWidth={0.9} />
      <Rect x={109} y={180} width={22} height={22} fill="#6f5a48" />
      {[0, 1, 2, 3].map((i) => (
        <Rect key={i} x={186} y={180 + i * 9} width={28} height={8} rx={2} fill="#a5adb5" stroke={O} strokeWidth={0.8} />
      ))}
      <Line x1={120} y1={174} x2={120} y2={180} stroke={O} strokeWidth={1.2} />
      <Line x1={200} y1={174} x2={200} y2={180} stroke={O} strokeWidth={1.2} />
    </G>
  );
}

// ---------- Archimedes’ principle ----------
function ArchimedesArt() {
  return (
    <G>
      <Line x1={90} y1={4} x2={90} y2={14} stroke={O} strokeWidth={1.4} />
      <Rect x={80} y={14} width={20} height={56} rx={3} fill="#e6eef8" stroke={O} strokeWidth={1.2} />
      {[0, 1, 2, 3, 4].map((i) => (
        <Line key={i} x1={84} y1={24 + i * 9} x2={92} y2={24 + i * 9} stroke={O} strokeWidth={0.8} />
      ))}
      <Line x1={90} y1={70} x2={90} y2={150} stroke={O} strokeWidth={1.2} />
      <Beaker x={40} y={110} w={100} h={96} fill={WATER} level={0.82} />
      <Rect x={74} y={150} width={32} height={26} rx={4} fill="#8d8a80" stroke={O} strokeWidth={1.2} />
      <Arrow x1={90} y1={176} x2={90} y2={204} c={RED} w={1.8} />
      <Txt x={96} y={202} size={8.5} weight="700" anchor="start" fill={RED}>W</Txt>
      <Arrow x1={114} y1={176} x2={114} y2={154} c={BLUE} w={1.8} />
      <Txt x={119} y={160} size={8.5} weight="700" anchor="start" fill={BLUE}>U</Txt>
      <Txt x={232} y={60} size={9} weight="700">weight in air W₁ = 5.0 N</Txt>
      <Txt x={232} y={78} size={9} weight="700">weight in water W₂ = 3.0 N</Txt>
      <Txt x={232} y={100} size={9} fill={BLUE}>upthrust = W₁ − W₂ = 2.0 N</Txt>
      <Txt x={232} y={122} size={9} fill={GREEN}>relative density</Txt>
      <Txt x={232} y={136} size={9} fill={GREEN}>= W₁ ÷ (W₁ − W₂) = 2.5</Txt>
    </G>
  );
}

// ---------- terminal velocity ----------
const VX = (t) => 50 + t * 44;
const VY = (v) => 170 - v * 120;

function TerminalArt() {
  const pts = [];
  for (let t = 0; t <= 5.0001; t += 0.05) pts.push([VX(t), VY(1 - Math.exp(-t))]);
  return (
    <G>
      <Axes X={VX} Y={VY} x0={0} x1={5} y0={0} y1={1.15} xs={[[0, '0'], [1, 'τ'], [2, '2τ'], [3, '3τ'], [4, '4τ'], [5, '5τ']]} ys={[]} xTitle="Time" yTitle="Speed" yTitleX={30} />
      <Line x1={VX(0)} y1={VY(1)} x2={VX(5)} y2={VY(1)} stroke={GREY} strokeWidth={1} strokeDasharray="4 3" />
      <Path d={line(pts)} stroke={BLUE} strokeWidth={2.2} fill="none" />
      <Txt x={VX(2.5)} y={VY(1) - 10} size={8.5} weight="700" fill={GREY}>terminal velocity V</Txt>
      {/* forces on the falling sphere */}
      <Circle cx={292} cy={102} r={10} fill="#a5adb5" stroke={O} strokeWidth={1.2} />
      <Arrow x1={292} y1={112} x2={292} y2={160} c={RED} />
      <Txt x={298} y={156} size={8.5} weight="700" anchor="start" fill={RED}>weight</Txt>
      <Arrow x1={286} y1={92} x2={286} y2={70} c={GREEN} />
      <Arrow x1={298} y1={92} x2={298} y2={58} c={BLUE} />
      <Txt x={282} y={70} size={8} weight="700" anchor="end" fill={GREEN}>upthrust</Txt>
      <Txt x={302} y={56} size={8} weight="700" anchor="start" fill={BLUE}>drag</Txt>
      <Txt x={292} y={38} size={8} fill={GREY}>balanced at V</Txt>
    </G>
  );
}

// ---------- isothermal and adiabatic curves ----------
const PX = (v) => 56 + (v - 0.5) * 68;
const PY = (p) => 186 - p * 36;

function PvArt() {
  const iso = [];
  const adi = [];
  for (let v = 0.9; v <= 4.0001; v += 0.05) {
    iso.push([PX(v), PY(4 / v)]);
    adi.push([PX(v), PY(4 * v ** -1.4)]);
  }
  const area = [[PX(1), PY(0)], ...iso.filter(([x]) => x >= PX(1) - 0.1), [PX(4), PY(0)]];
  return (
    <G>
      <Path d={line(area) + ' Z'} fill="#e6eef8" />
      <Axes X={PX} Y={PY} x0={0.5} x1={4.2} y0={0} y1={4.5} xs={[[1, '1'], [2, '2'], [3, '3'], [4, '4']]} ys={[[0, '0'], [1, '1'], [2, '2'], [3, '3'], [4, '4']]} xTitle="Volume (relative)" yTitle="Pressure (relative)" yTitleX={18} />
      <Path d={line(iso.filter(([x]) => x >= PX(0.95)))} stroke={BLUE} strokeWidth={2} fill="none" />
      <Path d={line(adi.filter(([x]) => x >= PX(0.95)))} stroke={RED} strokeWidth={2} fill="none" />
      <Circle cx={PX(1)} cy={PY(4)} r={3.5} fill={O} />
      <Txt x={PX(1) + 6} y={PY(4) - 2} size={8.5} weight="700" anchor="start">start</Txt>
      <Txt x={PX(2.6)} y={PY(4 / 2.6) - 8} size={8.5} weight="700" anchor="start" fill={BLUE}>isothermal: pV = constant</Txt>
      <Txt x={PX(1.08)} y={PY(0.6)} size={8.5} weight="700" anchor="start" fill={RED}>adiabatic: pVᵞ = constant</Txt>
      <Txt x={PX(3.2)} y={PY(0.25)} size={8} fill={BLUE}>shaded: work done by the gas</Txt>
    </G>
  );
}

export const PHYSICS_L6 = {
  'ap-dot-cross': {
    title: 'Scalar (dot) and vector (cross) products',
    w: 340,
    h: 160,
    art: DotCrossArt,
    labels: [],
    facts: [
      'The dot product A·B = |A||B| cos θ is a scalar: A multiplied by the component of B along A. Work W = F·s is an example.',
      'The cross product has magnitude |A||B| sin θ, the area of the parallelogram the vectors make, and points at right angles to both.',
      'With A to the right and B turned anticlockwise from it, A × B points out of the page (right-hand rule).',
    ],
  },
  'ap-best-fit': {
    title: 'A straight-line graph with error bars: T² against l',
    w: 320,
    h: 222,
    art: BestFitArt,
    labels: [],
    facts: [
      'Pendulum results: T² against l should be a straight line through the origin, because T² = (4π²/g) l.',
      'The best line has a gradient of about 4.0 s² m⁻¹, so g = 4π² ÷ gradient ≈ 9.8 m s⁻².',
      'The worst acceptable line passes through every error bar; its gradient, about 4.1 s² m⁻¹, gives the uncertainty: g = 9.8 ± 0.2 m s⁻².',
    ],
  },
  'ap-calculus-graphs': {
    title: 'Displacement, velocity and acceleration from calculus',
    w: 320,
    h: 320,
    art: CalculusArt,
    labels: [],
    facts: [
      'For s = 2t³ − 3t², differentiating gives v = 6t² − 6t and a = 12t − 6.',
      'At t = 1 s the velocity is zero and the displacement is least (−1 m); the gradient of each graph is the next graph.',
      'Going back up, the area under the a-t graph gives the change in v, and the area under the v-t graph gives the change in s.',
    ],
  },
  'ap-force-table': {
    title: 'The force table and the triangle of forces',
    w: 340,
    h: 196,
    art: ForceTableArt,
    labels: [],
    facts: [
      'Three strings pull the central ring with 3.0 N at 0°, 4.0 N at 90° and 5.0 N at 233°.',
      'The ring stays at rest because the forces drawn head to tail, to scale, close into a triangle: the resultant is zero.',
      'The 5.0 N force is the equilibrant of the other two: equal and opposite to their resultant.',
    ],
  },
  'ap-2d-collision': {
    title: 'Momentum in a two-dimensional collision',
    w: 330,
    h: 150,
    art: CollisionArt,
    labels: [],
    facts: [
      'A 0.20 kg puck at 3.0 m s⁻¹ (momentum 0.60 kg m s⁻¹) strikes an identical puck at rest.',
      'Afterwards their momenta, 0.30 kg m s⁻¹ at 60° and 0.52 kg m s⁻¹ at 30° on the other side, add as vectors to the momentum before.',
      'Because the collision is elastic and the pucks are identical, they move off at 90° to each other.',
    ],
  },
  'ap-force-extension-work': {
    title: 'Work done stretching a spring',
    w: 320,
    h: 200,
    art: WorkArt,
    labels: [],
    facts: [
      'For a spring with k = 200 N m⁻¹, the force rises in proportion to the extension: F = kx.',
      'The work done, and the elastic potential energy stored, is the area under the F-x graph.',
      'At 0.10 m the force is 20 N and the energy stored is ½ × 20 × 0.10 = 1.0 J.',
    ],
  },
  'ap-banked-track': {
    title: 'A car on a banked road',
    w: 320,
    h: 210,
    art: BankedArt,
    labels: [],
    facts: [
      'Only the weight mg and the normal reaction R act when no friction is needed.',
      'R tilts towards the centre of the bend: its horizontal component R sin θ provides the centripetal force mv²/r, and R cos θ balances mg.',
      'Dividing gives tan θ = v²/(rg), the banking angle for the design speed.',
    ],
  },
  'ap-resonance-curves': {
    title: 'Resonance: amplitude against driving frequency',
    w: 330,
    h: 218,
    art: ResonanceArt,
    labels: [],
    facts: [
      'The amplitude is greatest when the driving frequency is close to the natural frequency.',
      'With light damping the peak is high and sharp (here 5 times the static amplitude); more damping makes it lower and broader and moves it to slightly lower frequencies.',
      'Calculated for amplitude = 1 ÷ √((1 − r²)² + (r/Q)²), where r is the frequency ratio and Q = 5, 2 and 1.',
    ],
  },
  'ap-thermometer-calibration': {
    title: 'Calibrating a thermometer from two fixed points',
    w: 320,
    h: 220,
    art: CalibrationArt,
    labels: [],
    facts: [
      'The column is 2.0 cm long in melting ice (0 °C) and 22.0 cm in steam (100 °C).',
      'In warm water it is 9.5 cm, so θ = (9.5 − 2.0) ÷ (22.0 − 2.0) × 100 = 37.5 °C.',
      'The scale assumes the column length changes in equal steps with temperature between the fixed points.',
    ],
  },
  'ap-calorimetry': {
    title: 'Specific heat capacity by the electrical method',
    w: 300,
    h: 206,
    art: CalorimetryArt,
    labels: [
      ['Heater', 216, 40, 210, 70],
      ['Thermometer', 300, 30, 256, 60],
      ['Lagging', 300, 190, 284, 180],
      ['Metal block', 150, 200, 180, 180],
    ],
    facts: [
      'The ammeter and voltmeter give the heater’s power VI; the energy supplied in time t is VIt.',
      'The lagged block warms by Δθ, so c = VIt ÷ (mΔθ).',
      'Heat lost to the surroundings makes the value too large; lagging and a cooling correction reduce the error.',
    ],
  },
  'ap-conductivity': {
    title: 'Thermal conductivities compared',
    w: 330,
    h: 206,
    art: ConductivityArt,
    labels: [],
    facts: [
      'Approximate thermal conductivities in W m⁻¹ K⁻¹: copper 390, iron 80, glass 1.0, water 0.6, wood 0.15, air 0.025.',
      'The scale is logarithmic: each step is ten times the one before, so copper conducts about 16 000 times better than air.',
      'Metals conduct best because free electrons carry energy; trapped air makes good insulation.',
    ],
  },
  'ap-searle': {
    title: 'Searle’s apparatus for the Young modulus',
    w: 300,
    h: 220,
    art: SearleArt,
    labels: [
      ['Reference wire', 40, 70, 120, 70],
      ['Test wire', 270, 70, 200, 70],
      ['Spirit level', 160, 200, 160, 156],
      ['Micrometer', 270, 130, 210, 133],
      ['Fixed load', 40, 190, 109, 190],
      ['Slotted masses', 270, 200, 214, 200],
    ],
    facts: [
      'Two identical wires hang from the same support: a reference wire with a fixed load and a test wire that is loaded in steps.',
      'The micrometer re-levels the spirit level after each load, measuring the extension of the test wire to 0.01 mm.',
      'Because both wires are affected equally, sagging of the support and changes of temperature cancel out.',
    ],
  },
  'ap-archimedes': {
    title: 'Upthrust and relative density',
    w: 330,
    h: 212,
    art: ArchimedesArt,
    labels: [],
    facts: [
      'A stone weighing 5.0 N in air reads 3.0 N on the spring balance when fully under water.',
      'The loss in weight, 2.0 N, is the upthrust: the weight of the water displaced.',
      'Relative density = weight in air ÷ loss of weight in water = 5.0 ÷ 2.0 = 2.5.',
    ],
  },
  'ap-terminal-velocity': {
    title: 'Falling through a viscous liquid',
    w: 330,
    h: 206,
    art: TerminalArt,
    labels: [],
    facts: [
      'The sphere starts from rest and accelerates, but the drag grows with speed.',
      'The speed approaches the terminal velocity V, here drawn as v = V(1 − e^(−t/τ)).',
      'At terminal velocity, weight = upthrust + drag, so the resultant force and the acceleration are zero.',
    ],
  },
  'ap-pv-curves': {
    title: 'Isothermal and adiabatic expansion',
    w: 320,
    h: 218,
    art: PvArt,
    labels: [],
    facts: [
      'From the same starting point, the isothermal curve follows pV = constant and the adiabatic curve pVᵞ = constant (γ = 1.4 for air).',
      'The adiabatic curve is steeper: expanding to four times the volume, the pressure falls to 0.25 of its value isothermally but to about 0.14 adiabatically.',
      'The shaded area under the isothermal curve is the work done by the gas as it expands.',
    ],
  },
  'ap-gce-0780': columnsSpec('GCE A Level Physics (0780)', [
    { head: 'Paper 1', items: ['multiple choice', '1½ hours', '6 June 2026'] },
    { head: 'Paper 2', items: ['5 short questions', '1 long, from 2', 'data analysis', '2 options', '3 hours, 8 June'] },
    { head: 'Paper 3', items: ['practical', '21 to 23 May', '2026'] },
  ], { colW: 118 }),
};
