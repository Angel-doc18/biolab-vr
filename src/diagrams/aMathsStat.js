// A Level Statistics figures (0770, Upper Sixth): a frequency bar chart, a
// cumulative frequency curve, a box plot, a histogram with unequal classes,
// scatter diagrams and a regression line, discrete distributions (including
// binomial and Poisson), a probability density function, normal curves, the
// normal approximation to the binomial, the Central Limit Theorem, confidence
// intervals and a critical region. Every distribution is calculated, and
// every graph is drawn to scale.
import { G, Line, Path, Rect } from 'react-native-svg';
import { Txt } from './Diagram';
import { flowSpec } from './charts';
import { AM, Axes, Dot, curve, frame, path, ticks } from './aMaths';

const { O, GREY, BLUE, RED, GREEN, AMBER, SHADE, PINK, CREAM } = AM;
const normal = (x, mu, s) => Math.exp(-((x - mu) ** 2) / (2 * s * s)) / (s * Math.sqrt(2 * Math.PI));
const logFact = (n) => {
  let t = 0;
  for (let k = 2; k <= n; k++) t += Math.log(k);
  return t;
};
const binom = (n, p, r) => Math.exp(logFact(n) - logFact(r) - logFact(n - r) + r * Math.log(p) + (n - r) * Math.log(1 - p));
const poisson = (l, r) => Math.exp(-l + r * Math.log(l) - logFact(r));

function Bars({ f, data, width, fill, stroke, hl = () => false, hlFill = PINK }) {
  return data.map(([x, h]) => (
    <Rect key={x} x={f.X(x - width / 2)} y={f.Y(h)} width={width * (f.X(1) - f.X(0))} height={f.Y(0) - f.Y(h)} fill={hl(x) ? hlFill : fill} stroke={stroke} strokeWidth={1} />
  ));
}

// Area under a curve between a and b, as a closed path.
function areaPath(f, fn, a, b, n = 80) {
  const pts = [[f.X(a), f.Y(0)]];
  for (let i = 0; i <= n; i++) {
    const x = a + ((b - a) * i) / n;
    pts.push([f.X(x), f.Y(fn(x))]);
  }
  pts.push([f.X(b), f.Y(0)]);
  return path(pts) + ' Z';
}

// ---------- children per family ----------
const FB = frame({ left: 36, top: 16, ux: 50, uy: 20, x0: 0, x1: 5.6, y0: 0, y1: 8 });
function FrequencyArt() {
  const { X, Y } = FB;
  const data = [[1, 2], [2, 5], [3, 7], [4, 4], [5, 2]];
  return (
    <G>
      <Axes f={FB} grid={0} xs={[[1, '0'], [2, '1'], [3, '2'], [4, '3'], [5, '4']]} ys={[]} xName="children" yName="families" origin={false} />
      <Bars f={FB} data={data} width={0.6} fill={SHADE} stroke={BLUE} hl={(x) => x === 3} hlFill={CREAM} />
      {data.map(([x, h]) => (
        <Txt key={x} x={X(x) + (x === 3 ? 9 : 0)} y={Y(h) - 4} size={8.5} weight="700" fill={BLUE}>
          {h}
        </Txt>
      ))}
      <Line x1={X(2.95)} y1={Y(0)} x2={X(2.95)} y2={Y(8)} stroke={RED} strokeWidth={1.4} strokeDasharray="4 3" />
      <Txt x={X(2.95) - 4} y={Y(7.8)} size={8.5} weight="700" anchor="end" fill={RED}>
        mean 1.95
      </Txt>
      <Txt x={X(3) + 18} y={Y(7) + 4} size={8.5} weight="700" anchor="start" fill={AMBER}>
        median = mode = 2
      </Txt>
    </G>
  );
}

// ---------- a cumulative frequency curve ----------
const OG = frame({ left: 40, top: 16, ux: 4.5, uy: 3, x0: 35, x1: 95, y0: 0, y1: 55 });
const OGIVE = [[40, 0], [50, 6], [60, 20], [70, 40], [80, 48], [90, 50]];
function OgiveArt() {
  const { X, Y } = OG;
  const reads = [[12.5, 54.6, 'Q₁ ≈ 54.6'], [25, 62.5, 'median ≈ 62.5'], [37.5, 68.75, 'Q₃ ≈ 68.75']];
  return (
    <G>
      <Axes f={OG} grid={0} xs={ticks([40, 50, 60, 70, 80, 90])} ys={ticks([10, 20, 30, 40, 50])} xName="mass / kg" yName="c.f." origin={false} />
      {reads.map(([c, x, t]) => (
        <G key={t}>
          <Line x1={X(35)} y1={Y(c)} x2={X(x)} y2={Y(c)} stroke={GREY} strokeWidth={1} strokeDasharray="3 3" />
          <Line x1={X(x)} y1={Y(c)} x2={X(x)} y2={Y(0)} stroke={RED} strokeWidth={1.2} strokeDasharray="3 3" />
          <Txt x={X(x) + 6} y={Y(c) + 12} size={8.5} weight="700" anchor="start" fill={RED}>
            {t}
          </Txt>
        </G>
      ))}
      <Path d={path(OGIVE.map(([x, c]) => [X(x), Y(c)]))} stroke={BLUE} strokeWidth={2} fill="none" />
      {OGIVE.map(([x, c]) => (
        <Dot key={x} x={X(x)} y={Y(c)} c={BLUE} r={2.6} />
      ))}
      <Txt x={170} y={212} size={8.5} fill={GREY}>
        Plotted at upper class boundaries; read at n/4, n/2 and 3n/4 (n = 50). IQR ≈ 14.1 kg.
      </Txt>
    </G>
  );
}

// ---------- a box plot ----------
function BoxplotArt() {
  const X = (v) => 20 + (v - 35) * 5;
  const five = [[40, 'min 40'], [54.6, 'Q₁ 54.6'], [62.5, 'median 62.5'], [68.75, 'Q₃ 68.75'], [90, 'max 90']];
  return (
    <G>
      <Line x1={X(35)} y1={120} x2={X(95)} y2={120} stroke={O} strokeWidth={1.2} />
      {[40, 50, 60, 70, 80, 90].map((v) => (
        <G key={v}>
          <Line x1={X(v)} y1={116} x2={X(v)} y2={124} stroke={O} strokeWidth={1} />
          <Txt x={X(v)} y={136} size={8.5}>
            {v}
          </Txt>
        </G>
      ))}
      <Txt x={X(95)} y={150} size={8.5} anchor="end" italic>
        mass / kg
      </Txt>
      <Line x1={X(40)} y1={70} x2={X(54.6)} y2={70} stroke={O} strokeWidth={1.4} />
      <Line x1={X(68.75)} y1={70} x2={X(90)} y2={70} stroke={O} strokeWidth={1.4} />
      <Line x1={X(40)} y1={60} x2={X(40)} y2={80} stroke={O} strokeWidth={1.4} />
      <Line x1={X(90)} y1={60} x2={X(90)} y2={80} stroke={O} strokeWidth={1.4} />
      <Rect x={X(54.6)} y={50} width={X(68.75) - X(54.6)} height={40} fill={SHADE} stroke={BLUE} strokeWidth={1.6} />
      <Line x1={X(62.5)} y1={50} x2={X(62.5)} y2={90} stroke={RED} strokeWidth={2} />
      <Txt x={X(40)} y={54} size={8.5}>
        {five[0][1]}
      </Txt>
      <Txt x={X(90)} y={54} size={8.5}>
        {five[4][1]}
      </Txt>
      <Txt x={X(54.6) - 3} y={104} size={8.5} weight="700" anchor="end" fill={BLUE}>
        {five[1][1]}
      </Txt>
      <Txt x={X(68.75) + 3} y={104} size={8.5} weight="700" anchor="start" fill={BLUE}>
        {five[3][1]}
      </Txt>
      <Txt x={X(62.5)} y={42} size={8.5} weight="700" fill={RED}>
        {five[2][1]}
      </Txt>
      <Txt x={170} y={174} size={8.5} fill={GREY}>
        Middle half of the masses: IQR ≈ 14.1 kg; range ≈ 50 kg (class limits)
      </Txt>
    </G>
  );
}

// ---------- a histogram with unequal classes ----------
const HG = frame({ left: 40, top: 16, ux: 5.4, uy: 34, x0: 0, x1: 52, y0: 0, y1: 4.5 });
const CLASSES = [[0, 10, 10], [10, 15, 15], [15, 20, 20], [20, 30, 10], [30, 50, 8]];
function HistogramArt() {
  const { X, Y } = HG;
  return (
    <G>
      <Axes f={HG} grid={0} xs={ticks([10, 20, 30, 40, 50])} ys={ticks([1, 2, 3, 4])} xName="minutes" yName="f.d." />
      {CLASSES.map(([a, b, fq], i) => {
        const d = fq / (b - a);
        return (
          <G key={a}>
            <Rect x={X(a)} y={Y(d)} width={X(b) - X(a)} height={Y(0) - Y(d)} fill={i % 2 ? CREAM : SHADE} stroke={BLUE} strokeWidth={1.2} />
            <Txt x={(X(a) + X(b)) / 2} y={Y(d) + (d > 0.8 ? 14 : -4)} size={8.5} weight="700" fill={BLUE}>
              {`${fq}`}
            </Txt>
            <Txt x={(X(a) + X(b)) / 2} y={Y(d) - (d > 0.8 ? 4 : 14)} size={7.5} fill={GREY}>
              {d.toFixed(d < 1 ? 1 : 0)}
            </Txt>
          </G>
        );
      })}
      <Txt x={170} y={200} size={8.5} fill={GREY}>
        Bar height = frequency density (grey); bar area = frequency (blue).
      </Txt>
    </G>
  );
}

// ---------- three kinds of correlation ----------
const POS = [[1, 2], [2, 2.5], [3, 4], [4, 3.8], [5, 5.5], [6, 5.2], [7, 7], [8, 7.4], [9, 8.6]];
const NONE = [[1, 5], [2, 8], [3, 2], [4, 6], [5, 4], [6, 9], [7, 3], [8, 6.5], [9, 4.5]];
function CorrelationArt() {
  const panels = [
    [10, POS, 'strong positive', BLUE],
    [122, POS.map(([x, y]) => [x, 10 - y]), 'strong negative', RED],
    [234, NONE, 'little or none', GREY],
  ];
  return (
    <G>
      {panels.map(([x0, pts, cap, c]) => (
        <G key={cap}>
          <Rect x={x0} y={10} width={100} height={100} fill="#ffffff" stroke={O} strokeWidth={1} />
          {pts.map(([x, y]) => (
            <Dot key={`${x}${y}`} x={x0 + x * 10} y={110 - y * 10} c={c} r={3} />
          ))}
          <Txt x={x0 + 50} y={126} size={8.5} weight="700" fill={c}>
            {cap}
          </Txt>
        </G>
      ))}
      <Txt x={172} y={144} size={8.5} fill={GREY}>
        r near 1, r near −1, r near 0
      </Txt>
    </G>
  );
}

// ---------- a scatter diagram and regression line ----------
const SC = frame({ left: 40, top: 16, ux: 22, uy: 2.7, x0: 0, x1: 12, y0: 30, y1: 90 });
const STUDY = [[2, 40], [4, 50], [5, 58], [7, 65], [8, 70], [10, 82]];
function ScatterArt() {
  const { X, Y } = SC;
  return (
    <G>
      <Axes f={SC} xs={ticks([2, 4, 6, 8, 10])} ys={ticks([40, 50, 60, 70, 80])} xName="hours" yName="mark" origin={false} grid={10} />
      <Path d={curve(SC, (x) => 30.12 + 5.119 * x, 0.5, 11.5, 10)} stroke={RED} strokeWidth={1.8} fill="none" />
      {STUDY.map(([x, y]) => (
        <Dot key={x} x={X(x)} y={Y(y)} c={BLUE} r={3.4} />
      ))}
      <Dot x={X(6)} y={Y(60.83)} c={RED} r={3.6} open />
      <Txt x={X(6) + 7} y={Y(60.83) + 13} size={8.5} weight="700" anchor="start" fill={RED}>
        (x̄, ȳ) = (6, 60.8)
      </Txt>
      <Txt x={X(0.6)} y={Y(84)} size={9} weight="700" anchor="start" fill={RED}>
        y = 30.1 + 5.12x
      </Txt>
      <Txt x={X(0.6)} y={Y(84) + 14} size={8.5} anchor="start" fill={BLUE}>
        r = 0.996
      </Txt>
    </G>
  );
}

// ---------- a discrete probability distribution ----------
const PM = frame({ left: 44, top: 16, ux: 54, uy: 360, x0: 0, x1: 5, y0: 0, y1: 0.45 });
function PmfArt() {
  const { X, Y } = PM;
  return (
    <G>
      <Axes f={PM} grid={0} xs={ticks([1, 2, 3, 4])} ys={[[0.1, '0.1'], [0.2, '0.2'], [0.3, '0.3'], [0.4, '0.4']]} xName="x" yName="P(X = x)" origin={false} />
      {[1, 2, 3, 4].map((x) => (
        <G key={x}>
          <Line x1={X(x)} y1={Y(0)} x2={X(x)} y2={Y(0.1 * x)} stroke={BLUE} strokeWidth={4} />
          <Dot x={X(x)} y={Y(0.1 * x)} c={BLUE} r={3.6} />
        </G>
      ))}
      <Line x1={X(3)} y1={Y(0.44)} x2={X(3)} y2={Y(0)} stroke={RED} strokeWidth={1.2} strokeDasharray="4 3" />
      <Txt x={X(3) - 6} y={Y(0.42)} size={8.5} weight="700" anchor="end" fill={RED}>
        E(X) = 3
      </Txt>
      <Txt x={170} y={204} size={8.5} fill={GREY}>
        P(X = x) = 0.1x for x = 1, 2, 3, 4: E(X) = 3, E(X²) = 10, Var(X) = 1
      </Txt>
    </G>
  );
}

// ---------- binomial and Poisson distributions ----------
const BL = frame({ left: 30, top: 28, ux: 19, uy: 380, x0: 0, x1: 7.5, y0: 0, y1: 0.4 });
const PR = frame({ left: 192, top: 28, ux: 12.5, uy: 380, x0: 0, x1: 11.5, y0: 0, y1: 0.4 });
function BinPoiArt() {
  const bin = Array.from({ length: 7 }, (_, r) => [r + 1, binom(12, 0.1, r)]);
  const poi = Array.from({ length: 11 }, (_, r) => [r + 1, poisson(4, r)]);
  return (
    <G>
      <Axes f={BL} grid={0} xs={[[1, '0'], [3, '2'], [5, '4'], [7, '6']]} ys={[[0.1, '0.1'], [0.2, '0.2'], [0.3, '0.3']]} xName="r" yName="" origin={false} />
      <Bars f={BL} data={bin} width={0.7} fill={SHADE} stroke={BLUE} />
      <Txt x={BL.X(4)} y={16} size={9.5} weight="700" fill={BLUE}>
        B(12, 0.1): mean 1.2
      </Txt>
      <Axes f={PR} grid={0} xs={[[1, '0'], [3, '2'], [5, '4'], [7, '6'], [9, '8'], [11, '10']]} ys={[[0.1, '0.1'], [0.2, '0.2'], [0.3, '0.3']]} xName="r" yName="" origin={false} />
      <Bars f={PR} data={poi} width={0.7} fill={CREAM} stroke={AMBER} />
      <Txt x={PR.X(6)} y={16} size={9.5} weight="700" fill={AMBER}>
        Po(4): mean = variance = 4
      </Txt>
      <Txt x={172} y={208} size={8.5} fill={GREY}>
        Seeds failing in a packet of 12; calls in 10 minutes
      </Txt>
    </G>
  );
}

// ---------- a probability density function ----------
const PD = frame({ left: 30, top: 16, ux: 110, uy: 100, x0: -0.3, x1: 2.4, y0: 0, y1: 1.6 });
const pdf = (x) => (x >= 0 && x <= 2 ? (3 * x * x) / 8 : 0);
function PdfArt() {
  const { X, Y } = PD;
  return (
    <G>
      <Path d={areaPath(PD, pdf, 0, 1)} fill={PINK} />
      <Axes f={PD} grid={0} xs={ticks([1, 2])} ys={[[0.5, '0.5'], [1, '1'], [1.5, '1.5']]} />
      <Path d={curve(PD, pdf, 0, 2, 100)} stroke={BLUE} strokeWidth={2} fill="none" />
      <Line x1={X(2)} y1={Y(1.5)} x2={X(2)} y2={Y(0)} stroke={BLUE} strokeWidth={1} strokeDasharray="3 3" />
      <Line x1={X(1.5)} y1={Y(pdf(1.5))} x2={X(1.5)} y2={Y(0)} stroke={GREEN} strokeWidth={1.2} strokeDasharray="4 3" />
      <Line x1={X(Math.cbrt(4))} y1={Y(pdf(Math.cbrt(4)))} x2={X(Math.cbrt(4))} y2={Y(0)} stroke={AMBER} strokeWidth={1.2} strokeDasharray="4 3" />
      <Txt x={X(1.5) - 4} y={Y(0.25)} size={8} weight="700" anchor="end" fill={GREEN}>
        mean 1.5
      </Txt>
      <Txt x={X(Math.cbrt(4)) + 4} y={Y(0.12)} size={8} weight="700" anchor="start" fill={AMBER}>
        median 1.59
      </Txt>
      <Txt x={X(2) + 4} y={Y(1.5) + 4} size={8} weight="700" anchor="start" fill={BLUE}>
        mode 2
      </Txt>
      <Txt x={X(0.65)} y={Y(0.4)} size={8.5} weight="700" fill={RED}>
        P(X &lt; 1) = 1/8
      </Txt>
      <Txt x={X(0.1)} y={Y(1.3)} size={9} weight="700" anchor="start" fill={BLUE}>
        f(x) = 3x²/8, 0 ≤ x ≤ 2
      </Txt>
    </G>
  );
}

// ---------- the normal distribution ----------
const NM = frame({ left: 30, top: 20, ux: 4.6, uy: 2800, x0: 133, x1: 197, y0: 0, y1: 0.055 });
function NormalArt() {
  const { X, Y } = NM;
  const f = (x) => normal(x, 165, 8);
  return (
    <G>
      <Path d={areaPath(NM, f, 175, 197)} fill={PINK} />
      <Line x1={X(133)} y1={Y(0)} x2={X(197)} y2={Y(0)} stroke={O} strokeWidth={1.2} />
      <Path d={curve(NM, f, 133, 197, 160)} stroke={BLUE} strokeWidth={2} fill="none" />
      {[149, 157, 165, 173, 181].map((x, i) => (
        <G key={x}>
          <Line x1={X(x)} y1={Y(0)} x2={X(x)} y2={Y(0) + 4} stroke={O} strokeWidth={1} />
          <Txt x={X(x)} y={Y(0) + 14} size={8.5}>
            {x}
          </Txt>
          <Txt x={X(x)} y={Y(0) + 27} size={8.5} fill={GREY}>
            {['−2', '−1', '0', '1', '2'][i]}
          </Txt>
        </G>
      ))}
      <Line x1={X(165)} y1={Y(normal(165, 165, 8))} x2={X(165)} y2={Y(0)} stroke={GREY} strokeWidth={1} strokeDasharray="3 3" />
      <Line x1={X(175)} y1={Y(f(175))} x2={X(175)} y2={Y(0)} stroke={RED} strokeWidth={1.4} />
      <Txt x={X(177)} y={Y(0.03)} size={8.5} weight="700" anchor="start" fill={RED}>
        P(X &gt; 175)
      </Txt>
      <Txt x={X(177)} y={Y(0.03) + 13} size={8.5} weight="700" anchor="start" fill={RED}>
        = 1 − Φ(1.25) = 0.106
      </Txt>
      <Txt x={X(134)} y={Y(0) + 14} size={8.5} anchor="start" italic>
        x (cm)
      </Txt>
      <Txt x={X(134)} y={Y(0) + 27} size={8.5} anchor="start" italic fill={GREY}>
        z
      </Txt>
      <Txt x={X(140)} y={Y(0.045)} size={9} weight="700" anchor="start" fill={BLUE}>
        X ~ N(165, 8²)
      </Txt>
      <Txt x={170} y={214} size={8.5} fill={GREY}>
        Z = (X − 165)/8 turns every x into a z-value for the table
      </Txt>
    </G>
  );
}

// ---------- the normal approximation to B(100, 0.5) ----------
const NA = frame({ left: 30, top: 20, ux: 9, uy: 1800, x0: 34, x1: 66, y0: 0, y1: 0.085 });
function NormalApproxArt() {
  const { X, Y } = NA;
  const bars = Array.from({ length: 31 }, (_, i) => [35 + i, binom(100, 0.5, 35 + i)]);
  return (
    <G>
      <Path d={areaPath(NA, (x) => normal(x, 50, 5), 59.5, 66)} fill={PINK} />
      <Bars f={NA} data={bars} width={1} fill="none" stroke={BLUE} hl={(x) => x >= 60} hlFill={PINK} />
      <Line x1={X(34)} y1={Y(0)} x2={X(66)} y2={Y(0)} stroke={O} strokeWidth={1.2} />
      <Path d={curve(NA, (x) => normal(x, 50, 5), 34, 66, 160)} stroke={RED} strokeWidth={2} fill="none" />
      {[40, 45, 50, 55, 60, 65].map((x) => (
        <Txt key={x} x={X(x)} y={Y(0) + 14} size={8.5}>
          {x}
        </Txt>
      ))}
      <Line x1={X(59.5)} y1={Y(0.03)} x2={X(59.5)} y2={Y(0)} stroke={RED} strokeWidth={1.2} strokeDasharray="3 3" />
      <Txt x={X(59.5) + 2} y={Y(0.036)} size={8.5} weight="700" anchor="start" fill={RED}>
        59.5
      </Txt>
      <Txt x={X(35)} y={Y(0.075)} size={8.5} weight="700" anchor="start" fill={BLUE}>
        bars: B(100, 0.5)
      </Txt>
      <Txt x={X(35)} y={Y(0.075) + 13} size={8.5} weight="700" anchor="start" fill={RED}>
        curve: N(50, 25)
      </Txt>
      <Txt x={170} y={214} size={8.5} fill={GREY}>
        P(X ≥ 60) ≈ P(Y &gt; 59.5) = 1 − Φ(1.9) = 0.0287
      </Txt>
    </G>
  );
}

// ---------- the Central Limit Theorem ----------
const CL = frame({ left: 30, top: 16, ux: 36, uy: 120, x0: 0, x1: 8, y0: 0, y1: 1.3 });
function CltArt() {
  return (
    <G>
      <Axes f={CL} grid={0} xs={ticks([1, 2, 3, 4, 5, 6, 7])} ys={[[0.5, '0.5'], [1, '1']]} xName="x" yName="" />
      <Path d={areaPath(CL, (x) => 0.5 * Math.exp(-x / 2), 0, 8)} fill={CREAM} />
      <Path d={curve(CL, (x) => 0.5 * Math.exp(-x / 2), 0, 8, 120)} stroke={AMBER} strokeWidth={2} fill="none" />
      <Path d={curve(CL, (x) => normal(x, 2, 1 / 3), 0.5, 3.5, 160)} stroke={BLUE} strokeWidth={2.2} fill="none" />
      <Line x1={CL.X(2)} y1={CL.Y(1.3)} x2={CL.X(2)} y2={CL.Y(0)} stroke={GREY} strokeWidth={1} strokeDasharray="3 3" />
      <Txt x={CL.X(2.7)} y={CL.Y(1.0)} size={8.5} weight="700" anchor="start" fill={BLUE}>
        means of samples of 36:
      </Txt>
      <Txt x={CL.X(2.7)} y={CL.Y(1.0) + 13} size={8.5} weight="700" anchor="start" fill={BLUE}>
        approximately N(2, (1/3)²)
      </Txt>
      <Txt x={CL.X(3.6)} y={CL.Y(0.3)} size={8.5} weight="700" anchor="start" fill={AMBER}>
        population: skewed, mean 2, σ = 2
      </Txt>
      <Txt x={170} y={204} size={8.5} fill={GREY}>
        The spread of the mean is σ/√n = 2/6, and its shape is close to normal.
      </Txt>
    </G>
  );
}

// ---------- confidence intervals from repeated samples ----------
const MEANS = [49.1, 51.8, 47.6, 52.9, 50.4, 48.2, 55.1, 49.7, 51.2, 46.8, 50.9, 48.9];
function ConfidenceArt() {
  const X = (v) => 40 + (v - 40) * 13;
  const h = 3.92;
  return (
    <G>
      <Line x1={X(50)} y1={14} x2={X(50)} y2={186} stroke={GREEN} strokeWidth={1.6} />
      <Txt x={X(50)} y={10} size={8.5} weight="700" fill={GREEN}>
        μ = 50
      </Txt>
      {MEANS.map((m, i) => {
        const y = 26 + i * 13;
        const miss = m - h > 50 || m + h < 50;
        const c = miss ? RED : BLUE;
        return (
          <G key={m}>
            <Line x1={X(m - h)} y1={y} x2={X(m + h)} y2={y} stroke={c} strokeWidth={2} />
            <Line x1={X(m - h)} y1={y - 3} x2={X(m - h)} y2={y + 3} stroke={c} strokeWidth={1.4} />
            <Line x1={X(m + h)} y1={y - 3} x2={X(m + h)} y2={y + 3} stroke={c} strokeWidth={1.4} />
            <Dot x={X(m)} y={y} c={c} r={2.4} />
          </G>
        );
      })}
      <Line x1={X(40)} y1={190} x2={X(60)} y2={190} stroke={O} strokeWidth={1} />
      {[40, 45, 50, 55, 60].map((v) => (
        <Txt key={v} x={X(v)} y={203} size={8.5}>
          {v}
        </Txt>
      ))}
      <Txt x={X(59.02) + 6} y={26 + 6 * 13 + 4} size={8.5} weight="700" anchor="start" fill={RED}>
        misses μ
      </Txt>
      <Txt x={170} y={222} size={8.5} fill={GREY}>
        95% intervals x̄ ± 3.92 from 12 samples (σ = 10, n = 25): one misses μ.
      </Txt>
    </G>
  );
}

// ---------- a one-tailed critical region ----------
const CR = frame({ left: 26, top: 20, ux: 42, uy: 360, x0: -3.5, x1: 3.5, y0: 0, y1: 0.42 });
function CriticalArt() {
  const { X, Y } = CR;
  const f = (z) => normal(z, 0, 1);
  return (
    <G>
      <Path d={areaPath(CR, f, -3.5, -1.645)} fill={PINK} />
      <Line x1={X(-3.5)} y1={Y(0)} x2={X(3.5)} y2={Y(0)} stroke={O} strokeWidth={1.2} />
      <Path d={curve(CR, f, -3.5, 3.5, 160)} stroke={BLUE} strokeWidth={2} fill="none" />
      {[-3, -2, -1, 0, 1, 2, 3].map((z) => (
        <G key={z}>
          <Line x1={X(z)} y1={Y(0)} x2={X(z)} y2={Y(0) + 4} stroke={O} strokeWidth={1} />
          <Txt x={X(z)} y={Y(0) + 14} size={8.5}>
            {z < 0 ? `−${-z}` : `${z}`}
          </Txt>
        </G>
      ))}
      <Line x1={X(-1.645)} y1={Y(f(-1.645)) - 20} x2={X(-1.645)} y2={Y(0)} stroke={RED} strokeWidth={1.4} />
      <Txt x={X(-1.645) - 4} y={Y(f(-1.645)) - 22} size={8.5} weight="700" anchor="end" fill={RED}>
        critical value −1.645
      </Txt>
      <Txt x={X(-2.6)} y={Y(0.04)} size={8.5} weight="700" fill={RED}>
        5%
      </Txt>
      <Dot x={X(-2)} y={Y(0)} c={GREEN} r={4} />
      <Txt x={X(-2)} y={Y(0) + 28} size={8.5} weight="700" fill={GREEN}>
        z = −2: reject H₀
      </Txt>
      <Txt x={X(1.2)} y={Y(0.3)} size={8.5} anchor="start" fill={BLUE}>
        Z ~ N(0, 1) if H₀ is true
      </Txt>
      <Txt x={170} y={214} size={8.5} fill={GREY}>
        H₀: μ = 500, H₁: μ &lt; 500 at 5%: the critical region is z &lt; −1.645
      </Txt>
    </G>
  );
}

export const A_MATHS_STAT = {
  'am-frequency-bars': {
    title: 'Children per family: mean, median and mode',
    w: 350,
    h: 206,
    art: FrequencyArt,
    labels: [],
    facts: [
      'The bars show how many of the 20 families have 0, 1, 2, 3 or 4 children.',
      'The mean is Σfx ÷ Σf = 39 ÷ 20 = 1.95.',
      'The 10th and 11th values are both 2, so the median is 2; 2 is also the most frequent value, the mode.',
    ],
  },
  'am-grouped-median': {
    title: 'A cumulative frequency curve',
    w: 340,
    h: 220,
    art: OgiveArt,
    labels: [],
    facts: [
      'The cumulative frequencies 0, 6, 20, 40, 48 and 50 are plotted at the upper class boundaries 40, 50, …, 90 kg.',
      'Reading across at 25 (n/2) gives the median ≈ 62.5 kg; at 12.5 and 37.5, the quartiles ≈ 54.6 kg and 68.75 kg.',
      'The interquartile range is about 68.75 − 54.6 ≈ 14.1 kg.',
    ],
  },
  'am-boxplot': {
    title: 'A box plot of the masses',
    w: 340,
    h: 182,
    art: BoxplotArt,
    labels: [],
    facts: [
      'The box runs from Q₁ ≈ 54.6 kg to Q₃ ≈ 68.75 kg, with the median ≈ 62.5 kg inside it.',
      'The whiskers reach the smallest and largest values, here estimated by the class limits 40 and 90 kg.',
      'The longer right whisker hints at a slight tail of heavier students.',
    ],
  },
  'am-histogram': {
    title: 'A histogram with unequal class widths',
    w: 352,
    h: 208,
    art: HistogramArt,
    labels: [],
    facts: [
      'Waiting times are grouped in classes of width 10, 5, 5, 10 and 20 minutes.',
      'Each bar’s height is the frequency density: 1, 3, 4, 1 and 0.4 people per minute.',
      'Each bar’s area is the frequency (10, 15, 20, 10 and 8), so the wide last class is low but still holds 8 people.',
    ],
  },
  'am-correlation-types': {
    title: 'Positive, negative and no correlation',
    w: 344,
    h: 150,
    art: CorrelationArt,
    labels: [],
    facts: [
      'Points close to a rising line show strong positive correlation (r near 1).',
      'Points close to a falling line show strong negative correlation (r near −1).',
      'A shapeless cloud shows little or no linear correlation (r near 0).',
    ],
  },
  'am-scatter': {
    title: 'Study hours and marks: the regression line',
    w: 330,
    h: 206,
    art: ScatterArt,
    labels: [],
    facts: [
      'The six points lie very close to a rising straight line: r = 0.996.',
      'The least-squares line of y on x is y = 30.1 + 5.12x, through the mean point (6, 60.8).',
      'The gradient says that each extra hour of study goes with about 5 more marks.',
    ],
  },
  'am-pmf': {
    title: 'A discrete probability distribution',
    w: 330,
    h: 212,
    art: PmfArt,
    labels: [],
    facts: [
      'P(X = x) = 0.1x for x = 1, 2, 3, 4: the probabilities 0.1, 0.2, 0.3, 0.4 add up to 1.',
      'E(X) = Σ x P(X = x) = 3, the balance point of the distribution.',
      'E(X²) = 10, so Var(X) = 10 − 3² = 1.',
    ],
  },
  'am-binomial-poisson': {
    title: 'The binomial and Poisson distributions',
    w: 345,
    h: 214,
    art: BinPoiArt,
    labels: [],
    facts: [
      'B(12, 0.1) gives the number of failed seeds in a packet of 12: most likely 1, with mean np = 1.2.',
      'Po(4) gives the number of calls in 10 minutes at an average of 4: mean and variance are both 4.',
      'Both are discrete: the bars stand only at whole numbers.',
    ],
  },
  'am-pdf': {
    title: 'A probability density function',
    w: 340,
    h: 206,
    art: PdfArt,
    labels: [],
    facts: [
      'f(x) = 3x²/8 for 0 ≤ x ≤ 2: the total area under it is 1.',
      'The shaded area P(X < 1) = F(1) = 1/8.',
      'The mean is 1.5, the median ∛4 ≈ 1.59 and the mode 2, the highest point of the density.',
    ],
  },
  'am-normal': {
    title: 'The normal distribution N(165, 8²)',
    w: 340,
    h: 222,
    art: NormalArt,
    labels: [],
    facts: [
      'Heights are N(165, 8²): the curve is symmetrical about 165 cm.',
      'Each x has a z-value z = (x − 165)/8, shown under the axis.',
      'The shaded area P(X > 175) = 1 − Φ(1.25) = 0.106.',
    ],
  },
  'am-normal-approx': {
    title: 'The normal approximation to B(100, 0.5)',
    w: 340,
    h: 222,
    art: NormalApproxArt,
    labels: [],
    facts: [
      'The bars are the binomial probabilities for 100 tosses of a fair coin; the curve is N(50, 25).',
      'Each bar for r covers r − 0.5 to r + 0.5, which is why a continuity correction is needed.',
      'P(X ≥ 60) ≈ P(Y > 59.5) = 1 − Φ(1.9) = 0.0287.',
    ],
  },
  'am-clt': {
    title: 'The Central Limit Theorem',
    w: 340,
    h: 210,
    art: CltArt,
    labels: [],
    facts: [
      'The population (orange) is strongly skewed: an exponential distribution with mean 2 and standard deviation 2.',
      'Means of samples of 36 (blue) are approximately normal, centred on 2.',
      'Their standard deviation, the standard error, is σ/√n = 2/6 = 1/3, so they cluster much more tightly.',
    ],
  },
  'am-confidence': {
    title: 'What a 95% confidence interval means',
    w: 340,
    h: 228,
    art: ConfidenceArt,
    labels: [],
    facts: [
      'Each line is a 95% interval x̄ ± 3.92 from a different sample of 25 (σ = 10).',
      'All but one contain the true mean μ = 50; in the long run 95% of such intervals do.',
      'The interval moves from sample to sample; μ stays fixed.',
    ],
  },
  'am-critical-region': {
    title: 'A one-tailed test at the 5% level',
    w: 340,
    h: 222,
    art: CriticalArt,
    labels: [],
    facts: [
      'If H₀ is true, the test statistic Z follows N(0, 1).',
      'For H₁: μ < 500 at 5%, the critical region is the lowest 5% of the curve: z < −1.645.',
      'The packets give z = −2, inside the critical region, so H₀ is rejected.',
    ],
  },
  'am-stat-method': flowSpec(
    'Setting out a statistics answer',
    ['Define\nthe random variable', 'Distribution\nand parameters', 'Calculate\nshow standardising', 'Hypotheses\nH₀, H₁, level', 'Compare\nwith the critical value', 'Conclude\nin context'],
    { perRow: 3, boxW: 112, note: 'Unbiased variance: divide by n − 1.' },
  ),
};
