// A Level Geology figures (0755). Drawn to scale where the numbers matter: the
// papers, magnetic stripes, Bowen’s series, the diopside-anorthite eutectic,
// the silica scale, the QAPF triangle, the Hjulström curve, the Wentworth
// scale, Barrow’s zones, radioactive decay, the time scale, fossil ranges,
// structure contours, Darcy flow and the refraction travel-time graph; and
// sections of plate mechanisms, unconformities, folds, faults, outcrop
// patterns, a faulted unconformity, a gravity anomaly and oil traps. Charts
// summarise the rest. Plotting helpers come from aEconomics.js and strata
// helpers from geology.js.
import { G, Line, Path, Polygon, Rect } from 'react-native-svg';
import { Head, Txt } from './Diagram';
import { columnsSpec, flowSpec, treeSpec } from './charts';
import { Arrow, Axes, Cv, Dot, Guide, Lb, fr, fpath, seg, smooth, O, MUTED, BLUE, RED, GREEN, GOLD, PURPLE, LEAF, GREY, DASH } from './aEconomics';
import { band, clipBox, pts } from './geology';

const SANDST = '#f0d9a0';
const SHALE = '#a7b1b8';
const LIMEST = '#d9e8f2';
const CONGL = '#e6c89c';
const GRANITE = '#f2c4c4';
const DYKE = '#7a5c58';
const OIL = '#3b2f2a';
const SALT = '#f3d1e0';
const WATERC = '#a9cbe8';

// Clip a polygon to a convex polygon (Sutherland-Hodgman), clockwise or not.
function clipConvex(poly, clip) {
  const n = clip.length;
  const area = clip.reduce((s, p, i) => s + (p[0] * clip[(i + 1) % n][1] - clip[(i + 1) % n][0] * p[1]), 0);
  const sign = area > 0 ? 1 : -1;
  let out = poly;
  for (let i = 0; i < n && out.length; i += 1) {
    const a = clip[i];
    const b = clip[(i + 1) % n];
    const side = (p) => sign * ((b[0] - a[0]) * (p[1] - a[1]) - (b[1] - a[1]) * (p[0] - a[0])) >= 0;
    const cross = (p, q) => {
      const d1 = (b[0] - a[0]) * (p[1] - a[1]) - (b[1] - a[1]) * (p[0] - a[0]);
      const d2 = (b[0] - a[0]) * (q[1] - a[1]) - (b[1] - a[1]) * (q[0] - a[0]);
      const t = d1 / (d1 - d2);
      return [p[0] + t * (q[0] - p[0]), p[1] + t * (q[1] - p[1])];
    };
    const src = out;
    out = [];
    src.forEach((p, k) => {
      const q = src[(k + 1) % src.length];
      if (side(q)) {
        if (!side(p)) out.push(cross(p, q));
        out.push(q);
      } else if (side(p)) out.push(cross(p, q));
    });
  }
  return out;
}
function Poly({ poly, fill, stroke = O, width = 0.8 }) {
  return poly.length > 2 ? <Polygon points={pts(poly)} fill={fill} stroke={stroke} strokeWidth={width} /> : null;
}
function Box({ x, y, w, h, fill, t, size = 8.5, color = O, bold = true }) {
  return (
    <G>
      <Rect x={x} y={y} width={w} height={h} rx={5} fill={fill} stroke={O} strokeWidth={1} />
      <Txt x={x + w / 2} y={y + h / 2 + 3} size={size} weight={bold ? '700' : '500'} fill={color}>
        {t}
      </Txt>
    </G>
  );
}
function HalfArrow({ x1, y1, x2, y2, c = O }) {
  return (
    <G>
      <Line x1={x1} y1={y1} x2={x2} y2={y2} stroke={c} strokeWidth={1.5} />
      <Head x={x2} y={y2} dx={x2 - x1} dy={y2 - y1} size={5.5} fill={c} />
    </G>
  );
}
function Plain({ x, y, t, size = 8, anchor = 'middle', fill = O, weight = '500' }) {
  return (
    <Txt x={x} y={y} size={size} anchor={anchor} fill={fill} weight={weight}>
      {t}
    </Txt>
  );
}
const wavy = (x0, x1, y, amp = 3, step = 10) => {
  const d = [`M${x0} ${y}`];
  for (let x = x0; x < x1; x += step) d.push(`Q${x + step / 4} ${y - amp} ${x + step / 2} ${y} T${Math.min(x + step, x1)} ${y}`);
  return d.join(' ');
};

// ---------- the 0755 papers ----------
function PapersArt() {
  const x0 = 110;
  const perHour = 50;
  const rows = [
    { name: 'Paper 1', kind: 'multiple choice', hours: 1.5, label: '1½ hours', when: 'Thu 4 June, morning', y: 34 },
    { name: 'Paper 2', kind: 'written paper', hours: 3, label: '3 hours', when: 'Thu 4 June, afternoon', y: 78 },
  ];
  return (
    <G>
      <Line x1={x0} y1={16} x2={x0} y2={146} stroke={O} strokeWidth={1.2} />
      <Line x1={x0} y1={146} x2={x0 + 4 * perHour} y2={146} stroke={O} strokeWidth={1} />
      {[0, 1, 2, 3, 4].map((h) => (
        <G key={h}>
          <Line x1={x0 + h * perHour} y1={146} x2={x0 + h * perHour} y2={151} stroke={O} strokeWidth={1} />
          <Plain x={x0 + h * perHour} y={162} t={`${h} h`} size={8.5} fill={MUTED} />
        </G>
      ))}
      {rows.map((p, i) => (
        <G key={p.name}>
          <Plain x={x0 - 8} y={p.y - 1} t={p.name} size={9.5} anchor="end" weight="700" />
          <Plain x={x0 - 8} y={p.y + 11} t={p.kind} size={7.5} anchor="end" fill={MUTED} />
          <Rect x={x0} y={p.y - 9} width={p.hours * perHour} height={18} rx={2} fill={i === 0 ? BLUE : GREEN} />
          <Plain x={x0 + p.hours * perHour + 6} y={p.y + 3} t={p.label} size={8.5} anchor="start" />
          <Plain x={x0 + p.hours * perHour + 6} y={p.y + 14} t={p.when} size={7.5} anchor="start" fill={MUTED} />
        </G>
      ))}
      <Plain x={x0 - 8} y={121} t="Practical" size={9.5} anchor="end" weight="700" />
      <Plain x={x0 - 8} y={133} t="laboratory" size={7.5} anchor="end" fill={MUTED} />
      <Path d={`M${x0 + 10} ${113} l8 8 l-8 8 l-8 -8 Z`} fill={GOLD} />
      <Plain x={x0 + 26} y={125} t="Saturday 16 May, before the written papers" size={8.5} anchor="start" />
      <Plain x={210} y={182} t="June 2026 timetable (written papers drawn to scale)" size={8.5} fill={MUTED} />
    </G>
  );
}

// ---------- magnetic stripes ----------
const CHRONS = [[0, 0.78, true], [0.78, 2.58, false], [2.58, 3.58, true], [3.58, 4.0, false]];
function StripesArt() {
  const X = (km) => 200 + km * 2.2;
  return (
    <G>
      {CHRONS.map(([a, b, normal]) =>
        [1, -1].map((s) => {
          const x1 = X(s * a * 20);
          const x2 = X(s * b * 20);
          return <Rect key={`${a}${s}`} x={Math.min(x1, x2)} y={46} width={Math.abs(x2 - x1)} height={80} fill={normal ? '#3d4b57' : '#eef0f2'} stroke={O} strokeWidth={0.6} />;
        })
      )}
      <Line x1={200} y1={36} x2={200} y2={134} stroke={RED} strokeWidth={2} />
      <Plain x={200} y={30} t="ridge axis" size={8.5} weight="700" fill={RED} />
      <Arrow x1={180} y1={22} x2={130} y2={22} c={MUTED} />
      <Arrow x1={220} y1={22} x2={270} y2={22} c={MUTED} />
      <Line x1={X(-80)} y1={145} x2={X(80)} y2={145} stroke={O} strokeWidth={1} />
      {[-4, -3, -2, -1, 0, 1, 2, 3, 4].map((ma) => (
        <G key={ma}>
          <Line x1={X(ma * 20)} y1={145} x2={X(ma * 20)} y2={149} stroke={O} strokeWidth={1} />
          <Plain x={X(ma * 20)} y={159} t={`${Math.abs(ma)}`} size={7.5} fill={MUTED} />
        </G>
      ))}
      <Plain x={200} y={171} t="age of the ocean floor (million years); 80 km each side at 4 Ma" size={8} fill={MUTED} />
      <Rect x={30} y={180} width={12} height={9} fill="#3d4b57" />
      <Plain x={46} y={188} t="normal polarity" size={8} anchor="start" />
      <Rect x={150} y={180} width={12} height={9} fill="#eef0f2" stroke={O} strokeWidth={0.6} />
      <Plain x={166} y={188} t="reversed polarity" size={8} anchor="start" />
    </G>
  );
}

// ---------- plate driving forces ----------
function PlateEngineArt() {
  const plate = [[10, 48], [80, 40], [150, 46], [220, 52], [290, 58], [322, 92], [350, 140], [372, 196], [340, 196], [318, 142], [292, 102], [270, 92], [220, 86], [150, 74], [80, 50], [10, 58]];
  const sea = [[10, 28], [296, 28], [296, 59], [220, 52], [150, 46], [80, 40], [10, 48]];
  const continent = [[298, 36], [396, 34], [396, 96], [336, 96], [314, 70], [294, 57]];
  return (
    <G>
      <Rect x={10} y={28} width={386} height={170} fill="#f6efe6" />
      <Poly poly={sea} fill={WATERC} width={0} />
      <Poly poly={plate} fill="#c9cfd4" />
      <Poly poly={continent} fill={CONGL} />
      <Path d="M70 196 C 40 150, 120 112, 200 112 C 280 112, 300 150, 300 186" fill="none" stroke={RED} strokeWidth={1.3} strokeDasharray="5 3" />
      <Head x={300} y={190} dx={0} dy={1} size={6} fill={RED} />
      <Path d="M90 196 C 85 160, 84 120, 82 70" fill="none" stroke={RED} strokeWidth={1.3} strokeDasharray="5 3" />
      <Head x={82} y={64} dx={0} dy={-1} size={6} fill={RED} />
      <Plain x={190} y={135} t="mantle convection" size={8} fill={RED} weight="700" />
      <Plain x={80} y={20} t="mid-ocean ridge" size={8.5} weight="700" />
      <Plain x={296} y={20} t="trench" size={8.5} weight="700" />
      <Plain x={170} y={66} t="oceanic lithosphere" size={8} />
      <Plain x={352} y={66} t="continent" size={8} />
      <Plain x={170} y={178} t="asthenosphere" size={8} fill={MUTED} />
      <Arrow x1={104} y1={36} x2={150} y2={40} c={BLUE} w={1.6} />
      <Plain x={128} y={33} t="ridge push" size={8} fill={BLUE} weight="700" />
      <Arrow x1={330} y1={118} x2={352} y2={160} c={BLUE} w={1.6} />
      <Plain x={358} y={128} t="slab pull" size={8} anchor="start" fill={BLUE} weight="700" />
    </G>
  );
}

// ---------- Bowen’s reaction series ----------
function BowenArt() {
  const left = ['olivine', 'pyroxene', 'amphibole', 'biotite'];
  return (
    <G>
      <Plain x={130} y={16} t="discontinuous series" size={9} weight="700" />
      <Plain x={280} y={16} t="continuous series" size={9} weight="700" />
      {left.map((m, i) => (
        <G key={m}>
          <Box x={80} y={26 + i * 36} w={100} h={24} fill={['#4f5a4c', '#6d7b86', '#8b97a1', '#a7b1b8'][i]} t={m} color="#ffffff" />
          {i < 3 && <Arrow x1={130} y1={50 + i * 36} x2={130} y2={61 + i * 36} />}
        </G>
      ))}
      <Rect x={230} y={26} width={100} height={132} rx={5} fill={LEAF} stroke={O} strokeWidth={1} />
      <Plain x={280} y={44} t="Ca-rich plagioclase" size={8.5} weight="700" />
      <Arrow x1={280} y1={56} x2={280} y2={128} />
      <Plain x={280} y={148} t="Na-rich plagioclase" size={8.5} weight="700" />
      <Box x={130} y={180} w={150} h={26} fill={GRANITE} t="K-feldspar, muscovite, quartz" size={8.5} />
      <Arrow x1={140} y1={158} x2={176} y2={178} />
      <Arrow x1={270} y1={158} x2={240} y2={178} />
      <Arrow x1={36} y1={30} x2={36} y2={200} c={RED} w={1.6} />
      <Plain x={42} y={40} t="hotter" size={8} anchor="start" fill={RED} />
      <Plain x={42} y={196} t="cooler" size={8} anchor="start" fill={RED} />
      <Plain x={346} y={50} t="basic" size={8} anchor="start" fill={MUTED} />
      <Plain x={346} y={60} t="(gabbro, basalt)" size={7.5} anchor="start" fill={MUTED} />
      <Plain x={346} y={112} t="intermediate" size={8} anchor="start" fill={MUTED} />
      <Plain x={292} y={196} t="acid (granite)" size={8} anchor="start" fill={MUTED} />
    </G>
  );
}

// ---------- the diopside-anorthite eutectic ----------
const liqDi = (x) => 1391 - 117 * (x / 42) ** 1.6;
const liqAn = (x) => 1553 - 279 * ((100 - x) / 58) ** 1.6;
function EutecticArt() {
  const f = fr(56, 190, 290, 160, 100, 1600, 1200);
  return (
    <G>
      <Axes f={f} ylab="Temperature (°C)" xlab="% anorthite (An)" xt={[[0, 'Di 0'], [42, '42'], [70, '70'], [100, 'An 100']]} yt={[1200, 1300, 1400, 1500, 1600].map((v) => [v, v.toLocaleString('en-US')])} />
      <Cv d={fpath(f, liqDi, 0, 42)} c={BLUE} w={2.2} />
      <Cv d={fpath(f, liqAn, 42, 100)} c={BLUE} w={2.2} />
      <Cv d={seg(f, 0, 1274, 100, 1274)} c={RED} w={1.6} />
      <Dot f={f} x={42} y={1274} r={3.2} />
      <Lb f={f} x={42} y={1274} t="E 1,274 °C" dx={-6} dy={14} anchor="end" size={8} />
      <Lb f={f} x={0} y={1391} t="1,391" dx={4} dy={-4} size={7.5} weight="500" />
      <Lb f={f} x={100} y={1553} t="1,553" dx={-4} dy={-5} anchor="end" size={7.5} weight="500" />
      <Lb f={f} x={50} y={1560} t="liquid" anchor="middle" size={9} />
      <Lb f={f} x={14} y={1305} t="Di + liquid" anchor="middle" size={7.5} />
      <Lb f={f} x={78} y={1360} t="An + liquid" anchor="middle" size={8} />
      <Lb f={f} x={72} y={1235} t="diopside + anorthite (solid)" anchor="middle" size={8} />
      <Cv d={seg(f, 70, 1590, 70, liqAn(70))} c={GOLD} w={1.4} dash={DASH} />
      <Dot f={f} x={70} y={liqAn(70)} c={GOLD} />
      <Lb f={f} x={70} y={liqAn(70)} t="An starts to form" dx={-5} dy={-5} anchor="end" size={7.5} c={GOLD} />
    </G>
  );
}

// ---------- the silica scale ----------
function SilicaScaleArt() {
  const X = (s) => 30 + ((s - 40) * 340) / 36;
  const fields = [
    [40, 45, 'ultrabasic', '#4f5a4c', 'peridotite', ''],
    [45, 52, 'basic', '#6d7b86', 'gabbro', 'basalt'],
    [52, 63, 'intermediate', '#a7b1b8', 'diorite', 'andesite'],
    [63, 76, 'acid', GRANITE, 'granite', 'rhyolite'],
  ];
  return (
    <G>
      {fields.map(([a, b, name, fill, coarse, fine]) => (
        <G key={name}>
          <Rect x={X(a)} y={42} width={X(b) - X(a)} height={26} fill={fill} stroke={O} strokeWidth={0.8} />
          <Plain x={(X(a) + X(b)) / 2} y={35} t={name} size={8.5} weight="700" />
          <Plain x={(X(a) + X(b)) / 2} y={90} t={coarse} size={8} />
          {!!fine && <Plain x={(X(a) + X(b)) / 2} y={102} t={fine} size={8} fill={MUTED} />}
        </G>
      ))}
      {[45, 52, 63].map((s) => (
        <G key={s}>
          <Line x1={X(s)} y1={68} x2={X(s)} y2={74} stroke={O} strokeWidth={1} />
          <Plain x={X(s)} y={82} t={`${s}%`} size={7.5} fill={MUTED} />
        </G>
      ))}
      <Plain x={24} y={90} t="coarse:" size={7.5} anchor="end" fill={MUTED} />
      <Plain x={24} y={102} t="fine:" size={7.5} anchor="end" fill={MUTED} />
      <Arrow x1={200} y1={122} x2={60} y2={122} c={MUTED} />
      <Arrow x1={200} y1={122} x2={340} y2={122} c={MUTED} />
      <Plain x={60} y={136} t="darker, denser, hotter magma" size={7.5} anchor="start" fill={MUTED} />
      <Plain x={340} y={136} t="paler, less dense, more viscous" size={7.5} anchor="end" fill={MUTED} />
    </G>
  );
}

// ---------- the QAPF triangle ----------
const QT = (q, r) => [60 + 240 * (q / 2 + r * (1 - q)), 220 - q * 207.8];
function QapfArt() {
  const L = (q1, r1, q2, r2, k) => {
    const [x1, y1] = QT(q1, r1);
    const [x2, y2] = QT(q2, r2);
    return <Line key={k} x1={x1} y1={y1} x2={x2} y2={y2} stroke={O} strokeWidth={0.9} />;
  };
  const tag = (q, r, t) => {
    const [x, y] = QT(q, r);
    return <Plain key={t} x={x} y={y + 3} t={t} size={8.5} weight="700" />;
  };
  const X = QT(0.31, 0.45);
  return (
    <G>
      <Polygon points={pts([QT(0, 0), QT(0, 1), QT(1, 0)])} fill="#fbf6ee" stroke={O} strokeWidth={1.3} />
      {L(0.2, 0, 0.2, 1, 'q20')}
      {L(0.6, 0, 0.6, 1, 'q60')}
      {[0.1, 0.35, 0.65, 0.9].map((r) => L(0, r, 0.6, r, `r${r}`))}
      {tag(0.4, 0.05, '1')}
      {tag(0.4, 0.375, '2')}
      {tag(0.4, 0.775, '3')}
      {tag(0.4, 0.95, '4')}
      {tag(0.1, 0.225, '5')}
      {tag(0.1, 0.5, '6')}
      {tag(0.1, 0.775, '7')}
      <Plain x={QT(1, 0)[0]} y={QT(1, 0)[1] - 2} t="Q" size={10} weight="700" />
      <Plain x={QT(0, 0)[0] - 8} y={QT(0, 0)[1] + 4} t="A" size={10} weight="700" />
      <Plain x={QT(0, 1)[0] + 8} y={QT(0, 1)[1] + 4} t="P" size={10} weight="700" />
      <Plain x={QT(0.2, 0)[0] - 4} y={QT(0.2, 0)[1] + 3} t="20%" size={7.5} anchor="end" fill={MUTED} />
      <Plain x={QT(0.6, 0)[0] - 4} y={QT(0.6, 0)[1] + 3} t="60%" size={7.5} anchor="end" fill={MUTED} />
      <Dot f={{ X: (v) => v, Y: (v) => v }} x={X[0]} y={X[1]} c={RED} r={3} />
      <Plain x={X[0] + 6} y={X[1] - 4} t="X" size={8.5} anchor="start" weight="700" fill={RED} />
      {['1 alkali-feldspar granite', '2 granite', '3 granodiorite', '4 tonalite', '5 syenite', '6 monzonite', '7 diorite, gabbro'].map((t, i) => (
        <Plain key={t} x={270} y={28 + i * 12} t={t} size={7.5} anchor="start" />
      ))}
      <Plain x={270} y={120} t="X: Q 31, A 38, P 31 (granite)" size={7.5} anchor="start" fill={RED} />
      <Plain x={270} y={134} t="(F, feldspathoids, forms a" size={7.5} anchor="start" fill={MUTED} />
      <Plain x={270} y={145} t="lower triangle, not shown)" size={7.5} anchor="start" fill={MUTED} />
    </G>
  );
}

// ---------- the Hjulström curve ----------
const EROSION = [[0.001, 140], [0.01, 50], [0.05, 25], [0.2, 18], [0.5, 20], [1, 25], [10, 80], [100, 250], [1000, 700]];
const SETTLE = [[0.01, 0.1], [0.05, 0.5], [0.1, 1], [1, 10], [10, 60], [100, 200], [1000, 600]];
function HjulstromArt() {
  const f = { ox: 60, oy: 190, w: 290, h: 160 };
  const X = (d) => f.ox + ((Math.log10(d) + 3) * f.w) / 6;
  const Y = (v) => f.oy - ((Math.log10(v) + 1) * f.h) / 4;
  const lf = { X: (x) => X(x), Y: (y) => Y(y) };
  return (
    <G>
      <Line x1={f.ox} y1={f.oy} x2={f.ox} y2={f.oy - f.h - 6} stroke={O} strokeWidth={1.2} />
      <Line x1={f.ox} y1={f.oy} x2={f.ox + f.w + 6} y2={f.oy} stroke={O} strokeWidth={1.2} />
      {[0.001, 0.01, 0.1, 1, 10, 100, 1000].map((d) => (
        <G key={d}>
          <Line x1={X(d)} y1={f.oy} x2={X(d)} y2={f.oy + 3} stroke={O} />
          <Plain x={X(d)} y={f.oy + 12} t={String(d)} size={7.5} fill={MUTED} />
        </G>
      ))}
      {[0.1, 1, 10, 100, 1000].map((v) => (
        <G key={v}>
          <Line x1={f.ox - 3} y1={Y(v)} x2={f.ox} y2={Y(v)} stroke={O} />
          <Plain x={f.ox - 5} y={Y(v) + 3} t={String(v)} size={7.5} anchor="end" fill={MUTED} />
        </G>
      ))}
      <Plain x={f.ox + 6} y={f.oy - f.h - 2} t="Velocity (cm/s)" size={8} anchor="start" fill={MUTED} />
      <Plain x={f.ox + f.w + 6} y={f.oy + 34} t="Grain size (mm)" size={8} anchor="end" fill={MUTED} />
      {[['clay', 0.001, 0.0039], ['silt', 0.0039, 0.0625], ['sand', 0.0625, 2], ['gravel', 2, 1000]].map(([t, a, b]) => (
        <Plain key={t} x={(X(a) + X(b)) / 2} y={f.oy + 23} t={t} size={7.5} fill={GOLD} weight="700" />
      ))}
      <Cv d={smooth(lf, EROSION)} c={RED} w={2.2} />
      <Cv d={smooth(lf, SETTLE)} c={BLUE} w={2.2} />
      <Plain x={X(0.01)} y={Y(300)} t="erosion" size={9} weight="700" fill={RED} />
      <Plain x={X(0.05)} y={Y(3)} t="transport" size={9} weight="700" />
      <Plain x={X(10)} y={Y(2)} t="deposition" size={9} weight="700" fill={BLUE} />
      <Plain x={X(0.2)} y={Y(18) + 13} t="easiest to erode" size={7.5} anchor="end" fill={RED} />
    </G>
  );
}

// ---------- the Udden-Wentworth scale ----------
function WentworthArt() {
  const X = (phi) => 20 + (10 - phi) * 18;
  const classes = [[10, 8, 'clay', '#c9b9a8'], [8, 4, 'silt', '#dccbb2'], [4, -1, 'sand', SANDST], [-1, -2, 'gran.', CONGL], [-2, -6, 'pebble', '#d9b382'], [-6, -8, 'cobble', '#c99f6a'], [-8, -10, 'boulder', '#b98c55']];
  const ticks = [[8, '1/256'], [4, '1/16'], [-1, '2'], [-2, '4'], [-6, '64'], [-8, '256']];
  return (
    <G>
      {classes.map(([a, b, t, fill]) => (
        <G key={t}>
          <Rect x={X(a)} y={42} width={X(b) - X(a)} height={26} fill={fill} stroke={O} strokeWidth={0.8} />
          <Plain x={(X(a) + X(b)) / 2} y={36} t={t} size={8} weight="700" />
        </G>
      ))}
      {ticks.map(([phi, mm]) => (
        <G key={phi}>
          <Line x1={X(phi)} y1={68} x2={X(phi)} y2={74} stroke={O} />
          <Plain x={X(phi)} y={84} t={mm} size={7.5} />
          <Plain x={X(phi)} y={97} t={`φ ${phi < 0 ? '−' : ''}${Math.abs(phi)}`} size={7.5} fill={MUTED} />
        </G>
      ))}
      <Plain x={380} y={84} t="mm" size={7.5} anchor="end" fill={MUTED} />
      {[[10, 4, 'mudrock'], [4, -1, 'sandstone'], [-1, -10, 'conglomerate or breccia']].map(([a, b, t]) => (
        <G key={t}>
          <Line x1={X(a) + 2} y1={110} x2={X(b) - 2} y2={110} stroke={GOLD} strokeWidth={1.4} />
          <Plain x={(X(a) + X(b)) / 2} y={124} t={t} size={8} fill={GOLD} weight="700" />
        </G>
      ))}
      <Plain x={200} y={142} t="each step in the phi scale halves or doubles the grain diameter" size={7.5} fill={MUTED} />
    </G>
  );
}

// ---------- unconformities ----------
function UnconformityArt() {
  const panel = (x0, kind) => {
    const x1 = x0 + 120;
    const lower = [];
    if (kind === 'angular') {
      for (let k = -4; k < 6; k += 1) {
        const c = 60 + k * 18;
        lower.push(<Poly key={k} poly={clipBox(band((x) => c + 0.6 * (x - x0), (x) => c + 18 + 0.6 * (x - x0), x0, x1), x0, 90, x1, 150)} fill={k % 2 ? SHALE : SANDST} />);
      }
    } else if (kind === 'dis') {
      lower.push(<Poly key="a" poly={[[x0, 92], [x1, 92], [x1, 120], [x0, 120]]} fill={LIMEST} />);
      lower.push(<Poly key="b" poly={[[x0, 120], [x1, 120], [x1, 150], [x0, 150]]} fill={SHALE} />);
    } else {
      lower.push(<Poly key="g" poly={[[x0, 92], [x1, 92], [x1, 150], [x0, 150]]} fill={GRANITE} />);
      for (let i = 0; i < 14; i += 1) {
        const px = x0 + 10 + ((i * 37) % 100);
        const py = 104 + ((i * 23) % 40);
        lower.push(<Plain key={`p${i}`} x={px} y={py} t="+" size={9} fill="#b0606a" />);
      }
    }
    return (
      <G key={kind}>
        {lower}
        <Poly poly={[[x0, 30], [x1, 30], [x1, 60], [x0, 60]]} fill={SANDST} />
        <Poly poly={[[x0, 60], [x1, 60], [x1, 91], [x0, 91]]} fill={LIMEST} />
        <Path d={wavy(x0, x1, 91, 2.5)} fill="none" stroke={RED} strokeWidth={2} />
        <Rect x={x0} y={30} width={120} height={120} fill="none" stroke={O} strokeWidth={1} />
      </G>
    );
  };
  return (
    <G>
      {panel(10, 'angular')}
      {panel(140, 'dis')}
      {panel(270, 'non')}
      <Plain x={70} y={166} t="angular unconformity" size={8.5} weight="700" />
      <Plain x={200} y={166} t="disconformity" size={8.5} weight="700" />
      <Plain x={330} y={166} t="nonconformity" size={8.5} weight="700" />
      <Plain x={200} y={20} t="red line: the unconformity (an old erosion surface)" size={8} fill={RED} />
    </G>
  );
}

// ---------- Barrow’s zones ----------
const ZONES = ['chlorite', 'biotite', 'garnet', 'staurolite', 'kyanite', 'sillimanite'];
function BarrowArt() {
  const zx = (z) => 81 + (z - 1) * 50;
  const rows = [['chlorite', 1, 4], ['biotite', 2, 7], ['garnet', 3, 7], ['staurolite', 4, 6], ['kyanite', 5, 6.6], ['sillimanite', 6, 7]];
  return (
    <G>
      {ZONES.map((z, i) => (
        <G key={z}>
          <Rect x={zx(i + 1)} y={26} width={50} height={20} fill={['#e3f0da', '#d4e8c8', '#f8e3df', '#f3d0c8', '#e9c1b6', '#dfa99a'][i]} stroke={O} strokeWidth={0.8} />
          <Plain x={zx(i + 1) + 25} y={40} t={z} size={7.5} weight="700" />
        </G>
      ))}
      {[2, 3, 4, 5, 6].map((z) => (
        <Line key={z} x1={zx(z)} y1={46} x2={zx(z)} y2={172} stroke={MUTED} strokeWidth={0.8} strokeDasharray={DASH} />
      ))}
      <Plain x={76} y={18} t="zone:" size={7.5} anchor="end" fill={MUTED} />
      {rows.map(([m, a, b], i) => (
        <G key={m}>
          <Plain x={76} y={66 + i * 18} t={m} size={8} anchor="end" />
          <Rect x={zx(a) + 2} y={59 + i * 18} width={zx(b) - zx(a) - 4} height={9} rx={3} fill={i === 0 ? GREEN : i === 1 ? '#5b4636' : i === 2 ? RED : i === 3 ? GOLD : i === 4 ? BLUE : PURPLE} />
        </G>
      ))}
      <Plain x={zx(1) + 50} y={186} t="slate, phyllite" size={8} fill={MUTED} />
      <Plain x={zx(3) + 75} y={186} t="schist" size={8} fill={MUTED} />
      <Plain x={zx(6) + 25} y={186} t="gneiss" size={8} fill={MUTED} />
      <Arrow x1={zx(1)} y1={200} x2={zx(7)} y2={200} c={RED} />
      <Plain x={200} y={212} t="increasing metamorphic grade (temperature); dashed lines are isograds" size={7.5} fill={RED} />
    </G>
  );
}

// ---------- stress and strain ----------
function StressStrainArt() {
  const f = fr(50, 180, 290, 150, 10, 100);
  return (
    <G>
      <Axes f={f} ylab="Stress" xlab="Strain" />
      <Cv d={seg(f, 0, 0, 2, 60)} c={BLUE} w={2.2} />
      <Cv d={smooth(f, [[2, 60], [3.5, 70], [5.5, 76], [7.5, 79], [9, 80]])} c={BLUE} w={2.2} />
      <Cv d={seg(f, 0, 0, 1.4, 85)} c={RED} w={2.2} />
      <Lb f={f} x={1.4} y={85} t="× brittle fracture" dx={-3} dy={3} size={8} c={RED} />
      <Lb f={f} x={9} y={80} t="× fracture" dx={-3} dy={3} size={8} c={BLUE} />
      <Dot f={f} x={2} y={60} c={BLUE} />
      <Lb f={f} x={2} y={60} t="yield point" dx={6} dy={10} size={7.5} />
      <Lb f={f} x={0.6} y={22} t="elastic" dx={8} size={7.5} weight="500" />
      <Lb f={f} x={5.5} y={76} t="ductile (plastic) flow: folds" dy={-8} anchor="middle" size={7.5} weight="500" c={BLUE} />
      <Lb f={f} x={5} y={30} t="cold, near-surface rock: brittle (red)" anchor="start" size={7.5} weight="500" c={RED} />
      <Lb f={f} x={5} y={20} t="hot, deep rock: ductile (blue)" anchor="start" size={7.5} weight="500" c={BLUE} />
    </G>
  );
}

// ---------- the parts of a fold ----------
const foldY = (c) => (x) => c - 32 * Math.cos((2 * Math.PI * (x - 120)) / 320);
function FoldPartsArt() {
  const cs = [80, 105, 130, 155];
  const fills = ['#f6e7b8', SANDST, '#c9a77a', '#8f7a64'];
  const box = (poly) => clipBox(poly, 20, 30, 380, 190);
  return (
    <G>
      {cs.map((c, i) => (
        <Poly key={c} poly={box(band(foldY(c), i < 3 ? foldY(cs[i + 1]) : () => 200, 20, 380))} fill={fills[i]} />
      ))}
      <Line x1={120} y1={34} x2={120} y2={190} stroke={RED} strokeWidth={1.2} strokeDasharray="5 3" />
      <Line x1={280} y1={34} x2={280} y2={190} stroke={RED} strokeWidth={1.2} strokeDasharray="5 3" />
      <Plain x={120} y={26} t="axial plane" size={8} fill={RED} weight="700" />
      <Plain x={280} y={26} t="axial plane" size={8} fill={RED} weight="700" />
      <Dot f={{ X: (v) => v, Y: (v) => v }} x={120} y={48} c={O} r={3} />
      <Plain x={128} y={46} t="hinge (crest)" size={8} anchor="start" weight="700" />
      <Plain x={200} y={64} t="limb" size={8} weight="700" />
      <Plain x={126} y={176} t="oldest bed in the core" size={8} anchor="start" fill="#ffffff" weight="700" />
      <Plain x={286} y={128} t="youngest bed in the core" size={8} anchor="start" weight="700" />
      <Plain x={60} y={210} t="anticline" size={9} weight="700" />
      <Plain x={330} y={210} t="syncline" size={9} weight="700" />
    </G>
  );
}

// ---------- fault types ----------
function FaultTypesArt() {
  const section = (x0, shift, label, inward) => {
    const fa = [x0 + 40, 40];
    const fb = [x0 + 80, 150];
    const leftBlock = [[x0, 40], fa, fb, [x0, 150]];
    const rightBlock = [fa, [x0 + 120, 40], [x0 + 120, 150], fb];
    const beds = (dy, clip) => [62, 86, 110, 134].map((y, i) => <Poly key={`${y}${dy}`} poly={clipConvex([[x0 - 10, y + dy], [x0 + 130, y + dy], [x0 + 130, y + dy + 24], [x0 - 10, y + dy + 24]], clip)} fill={[SANDST, SHALE, LIMEST, CONGL][i]} width={0.5} />);
    return (
      <G key={label}>
        <Poly poly={leftBlock} fill={GREY} width={0} />
        <Poly poly={rightBlock} fill={GREY} width={0} />
        {beds(0, leftBlock)}
        {beds(shift, rightBlock)}
        <Line x1={fa[0]} y1={fa[1]} x2={fb[0]} y2={fb[1]} stroke={RED} strokeWidth={2} />
        <Rect x={x0} y={40} width={120} height={110} fill="none" stroke={O} strokeWidth={1} />
        <HalfArrow x1={fa[0] + 22} y1={shift > 0 ? 70 : 100} x2={fa[0] + 22 + 10} y2={shift > 0 ? 97 : 73} />
        <HalfArrow x1={fa[0] + 2} y1={shift > 0 ? 100 : 72} x2={fa[0] - 8} y2={shift > 0 ? 73 : 99} />
        {inward ? (
          <G>
            <Arrow x1={x0 - 4} y1={32} x2={x0 + 22} y2={32} c={BLUE} />
            <Arrow x1={x0 + 124} y1={32} x2={x0 + 98} y2={32} c={BLUE} />
          </G>
        ) : (
          <G>
            <Arrow x1={x0 + 26} y1={32} x2={x0} y2={32} c={BLUE} />
            <Arrow x1={x0 + 94} y1={32} x2={x0 + 120} y2={32} c={BLUE} />
          </G>
        )}
        <Plain x={x0 + 60} y={166} t={label} size={8.5} weight="700" />
      </G>
    );
  };
  const sx = 270;
  return (
    <G>
      {section(10, 18, 'normal (tension)', false)}
      {section(140, -18, 'reverse (compression)', true)}
      <Rect x={sx} y={40} width={120} height={110} fill={LEAF} stroke={O} strokeWidth={1} />
      <Rect x={sx} y={82} width={60} height={16} fill={SANDST} stroke={O} strokeWidth={0.6} />
      <Rect x={sx + 60} y={108} width={60} height={16} fill={SANDST} stroke={O} strokeWidth={0.6} />
      <Line x1={sx + 60} y1={40} x2={sx + 60} y2={150} stroke={RED} strokeWidth={2} />
      <HalfArrow x1={sx + 50} y1={135} x2={sx + 50} y2={112} />
      <HalfArrow x1={sx + 70} y1={60} x2={sx + 70} y2={83} />
      <Plain x={sx + 60} y={32} t="plan view" size={7.5} fill={MUTED} />
      <Plain x={sx + 60} y={166} t="strike-slip (dextral)" size={8.5} weight="700" />
      <Plain x={200} y={184} t="red: fault; half-arrows: relative movement; blue: stress" size={7.5} fill={MUTED} />
    </G>
  );
}

// ---------- structure contours ----------
function StructureContoursArt() {
  const xs = [60, 100, 140, 180, 220];
  const hs = [300, 250, 200, 150, 100];
  return (
    <G>
      <Rect x={40} y={30} width={220} height={160} fill="#fbf6ee" stroke={O} strokeWidth={1} />
      {xs.map((x, i) => (
        <G key={x}>
          <Line x1={x} y1={34} x2={x} y2={186} stroke={BLUE} strokeWidth={1.4} />
          <Plain x={x} y={24} t={`${hs[i]} m`} size={7.5} fill={BLUE} weight="700" />
        </G>
      ))}
      <Line x1={120} y1={150} x2={160} y2={150} stroke={O} strokeWidth={2} />
      <Line x1={120} y1={142} x2={120} y2={158} stroke={O} strokeWidth={2} />
      <Head x={166} y={150} dx={1} dy={0} size={6} fill={O} />
      <Rect x={116} y={161} width={52} height={13} fill="#fbf6ee" />
      <Plain x={142} y={171} t="dip 27° E" size={8.5} weight="700" />
      <Line x1={240} y1={60} x2={240} y2={40} stroke={O} strokeWidth={1.4} />
      <Head x={240} y={38} dx={0} dy={-1} size={6} fill={O} />
      <Plain x={240} y={70} t="N" size={8.5} weight="700" />
      <Line x1={60} y1={200} x2={100} y2={200} stroke={O} strokeWidth={2} />
      <Plain x={80} y={212} t="100 m" size={7.5} />
      {['structure contour interval: 50 m', 'horizontal spacing: 100 m', 'tan(dip) = 50 ÷ 100 = 0.5', 'dip ≈ 27°, towards the east', 'strike: N–S (along the contours)'].map((t, i) => (
        <Plain key={t} x={270} y={50 + i * 16} t={t} size={7.5} anchor="start" weight={i === 3 ? '700' : '500'} />
      ))}
    </G>
  );
}

// ---------- the V-rule ----------
function VRuleArt() {
  const panel = (x0, kind, caption) => {
    const cx = x0 + 60;
    const vee = (apex, arm) => `M${cx - 56} ${apex + arm} L${cx} ${apex} L${cx + 56} ${apex + arm}`;
    const out = kind === 'flat' ? vee(92, 30) : kind === 'up' ? vee(58, 70) : `M${cx - 56} ${74} L${cx} ${128} L${cx + 56} ${74}`;
    return (
      <G key={kind}>
        <Rect x={x0} y={30} width={120} height={120} fill="#fbf6ee" stroke={O} strokeWidth={1} />
        {[44, 78, 112].map((y) => (
          <Path key={y} d={vee(y, 30)} fill="none" stroke={MUTED} strokeWidth={0.9} />
        ))}
        <Line x1={cx} y1={30} x2={cx} y2={150} stroke={BLUE} strokeWidth={2} />
        <Head x={cx} y={150} dx={0} dy={1} size={6} fill={BLUE} />
        <Path d={out} fill="none" stroke="#8a4b2f" strokeWidth={2.6} />
        <Plain x={x0 + 60} y={166} t={caption[0]} size={8} weight="700" />
        <Plain x={x0 + 60} y={178} t={caption[1]} size={7.5} fill={MUTED} />
      </G>
    );
  };
  return (
    <G>
      {panel(10, 'flat', ['horizontal beds', 'outcrop follows the contours'])}
      {panel(140, 'up', ['beds dip upstream', 'V points upstream'])}
      {panel(270, 'down', ['beds dip downstream', 'V points downstream'])}
      <Plain x={200} y={20} t="grey: contours; blue: river flowing down the page; brown: bed boundary" size={7.5} fill={MUTED} />
    </G>
  );
}

// ---------- radioactive decay ----------
function DecayArt() {
  const f = fr(56, 186, 280, 150, 5, 100);
  return (
    <G>
      <Axes f={f} ylab="Atoms (% of original parent)" xlab="Number of half-lives" xt={[1, 2, 3, 4, 5].map((v) => [v, String(v)])} yt={[25, 50, 75, 100].map((v) => [v, String(v)])} />
      <Cv d={fpath(f, (n) => 100 * 0.5 ** n, 0, 5)} c={BLUE} w={2.2} />
      <Cv d={fpath(f, (n) => 100 - 100 * 0.5 ** n, 0, 5)} c={RED} w={2.2} />
      {[1, 2, 3].map((n) => (
        <G key={n}>
          <Guide f={f} x={n} y={100 * 0.5 ** n} />
          <Dot f={f} x={n} y={100 * 0.5 ** n} c={BLUE} />
          {n > 1 && <Lb f={f} x={n} y={100 * 0.5 ** n} t={`${100 * 0.5 ** n}%`} dx={5} dy={-4} size={7.5} c={BLUE} />}
        </G>
      ))}
      <Lb f={f} x={4.4} y={100 * 0.5 ** 4.4} t="parent" dy={-8} anchor="middle" c={BLUE} />
      <Lb f={f} x={5} y={100 - 100 * 0.5 ** 5} t="daughter" dx={-4} dy={14} anchor="end" c={RED} />
    </G>
  );
}

// ---------- the geological time scale ----------
const EONS = [[4540, 4000, 'Hadean', '#d8c7e6'], [4000, 2500, 'Archaean', '#eaa7c4'], [2500, 538.8, 'Proterozoic', '#f3c1a7'], [538.8, 0, 'Ph.', '#8ec3de']];
const PERIODS = [[538.8, 485.4, 'Cm'], [485.4, 443.8, 'O'], [443.8, 419.2, 'S'], [419.2, 358.9, 'D'], [358.9, 298.9, 'C'], [298.9, 251.9, 'P'], [251.9, 201.4, 'Tr'], [201.4, 145.0, 'J'], [145.0, 66.0, 'K'], [66.0, 23.03, 'Pg'], [23.03, 2.58, 'N']];
function TimescaleArt() {
  const X1 = (ma) => 20 + ((4540 - ma) / 4540) * 360;
  const X2 = (ma) => 20 + ((538.8 - ma) / 538.8) * 360;
  const eraFill = (ma) => (ma > 251.9 ? '#8ec3de' : ma > 66 ? '#8fd18f' : '#f6d860');
  return (
    <G>
      {EONS.map(([a, b, t, fill]) => (
        <G key={t}>
          <Rect x={X1(a)} y={34} width={X1(b) - X1(a)} height={22} fill={fill} stroke={O} strokeWidth={0.7} />
          <Plain x={(X1(a) + X1(b)) / 2} y={49} t={t} size={8} weight="700" />
        </G>
      ))}
      {[4000, 3000, 2000, 1000, 0].map((ma) => (
        <Plain key={ma} x={X1(ma)} y={68} t={ma.toLocaleString('en-US')} size={7} fill={MUTED} />
      ))}
      <Plain x={20} y={26} t="Earth history, 4,540 million years (Ma) to scale" size={8} anchor="start" fill={MUTED} />
      <Line x1={X1(538.8)} y1={56} x2={20} y2={100} stroke={MUTED} strokeWidth={0.8} strokeDasharray={DASH} />
      <Line x1={X1(0)} y1={56} x2={380} y2={100} stroke={MUTED} strokeWidth={0.8} strokeDasharray={DASH} />
      {PERIODS.map(([a, b, t]) => (
        <G key={t}>
          <Rect x={X2(a)} y={100} width={X2(b) - X2(a)} height={24} fill={eraFill(a)} stroke={O} strokeWidth={0.7} />
          <Plain x={(X2(a) + X2(b)) / 2} y={116} t={t} size={7.5} weight="700" />
        </G>
      ))}
      <Rect x={X2(2.58)} y={100} width={X2(0) - X2(2.58)} height={24} fill="#fff2a8" stroke={O} strokeWidth={0.4} />
      {[[538.8, 251.9, 'Palaeozoic'], [251.9, 66.0, 'Mesozoic'], [66.0, 0, 'Cenozoic']].map(([a, b, t]) => (
        <G key={t}>
          <Line x1={X2(a) + 2} y1={132} x2={X2(b) - 2} y2={132} stroke={O} strokeWidth={1.2} />
          <Plain x={(X2(a) + X2(b)) / 2} y={145} t={t} size={8.5} weight="700" />
        </G>
      ))}
      {[[538.8, '538.8'], [251.9, '251.9'], [66.0, '66.0'], [0, '0 Ma']].map(([ma, t]) => (
        <Plain key={t} x={X2(ma)} y={160} t={t} size={7.5} fill={MUTED} anchor={ma === 538.8 ? 'start' : ma === 0 ? 'end' : 'middle'} />
      ))}
      <Plain x={200} y={176} t="Phanerozoic expanded (Ph.); Quaternary from 2.58 Ma is the sliver at the right" size={7.5} fill={MUTED} />
    </G>
  );
}

// ---------- fossil ranges ----------
const RANGES = [['trilobites', 521, 251.9, '#8b6f47'], ['brachiopods', 538.8, 0, BLUE], ['bivalves', 538.8, 0, GREEN], ['gastropods', 538.8, 0, '#4f8a8b'], ['goniatites', 400, 251.9, PURPLE], ['ceratites', 251.9, 201.4, '#b06fa0'], ['ammonites', 201.4, 66.0, RED]];
function RangesArt() {
  const X = (ma) => 110 + ((538.8 - ma) / 538.8) * 270;
  return (
    <G>
      {[[538.8, 251.9, 'Palaeozoic'], [251.9, 66, 'Mesozoic'], [66, 0, 'Cz']].map(([a, b, t]) => (
        <G key={t}>
          <Rect x={X(a)} y={26} width={X(b) - X(a)} height={150} fill={t === 'Mesozoic' ? '#eef7ea' : t === 'Cz' ? '#fdf8dc' : '#eaf3f9'} />
          <Plain x={(X(a) + X(b)) / 2} y={22} t={t} size={8} weight="700" />
        </G>
      ))}
      {RANGES.map(([t, a, b, c], i) => (
        <G key={t}>
          <Plain x={104} y={44 + i * 20} t={t} size={8} anchor="end" />
          <Rect x={X(a)} y={36 + i * 20} width={Math.max(2, X(b) - X(a))} height={10} rx={4} fill={c} />
        </G>
      ))}
      {[538.8, 251.9, 66, 0].map((ma) => (
        <G key={ma}>
          <Line x1={X(ma)} y1={176} x2={X(ma)} y2={180} stroke={O} />
          <Plain x={X(ma)} y={190} t={String(ma)} size={7.5} fill={MUTED} anchor={ma === 0 ? 'end' : 'middle'} />
        </G>
      ))}
      <Line x1={X(538.8)} y1={176} x2={X(0)} y2={176} stroke={O} />
      <Plain x={245} y={204} t="million years ago (Cz = Cenozoic); ranges simplified" size={7.5} fill={MUTED} />
    </G>
  );
}

// ---------- a faulted unconformity with a dyke ----------
function ComplexSectionArt() {
  const left = [[20, 100], [180, 100], [220, 190], [20, 190]];
  const right = [[180, 100], [380, 100], [380, 190], [220, 190]];
  const fills = [SANDST, SHALE, LIMEST, CONGL];
  const lowerBeds = (shift, clip) =>
    Array.from({ length: 9 }, (_, k) => {
      const b = 40 * k - 120 + shift;
      const poly = band((x) => b + 0.47 * (x - 20), (x) => b + 40 + 0.47 * (x - 20), 20, 380, 10);
      return <Poly key={`${k}${shift}`} poly={clipConvex(clipBox(poly, 20, 100, 380, 190), clip)} fill={fills[k % 4]} width={0.5} />;
    });
  return (
    <G>
      {lowerBeds(0, left)}
      {lowerBeds(30, right)}
      <Poly poly={[[20, 40], [380, 40], [380, 70], [20, 70]]} fill="#e8dcc0" />
      <Poly poly={[[20, 70], [380, 70], [380, 100], [20, 100]]} fill="#cfd9c7" />
      <Path d={wavy(20, 380, 100, 2.5, 14)} fill="none" stroke={RED} strokeWidth={2} />
      <Line x1={180} y1={100} x2={220} y2={190} stroke={O} strokeWidth={2.2} />
      <Rect x={300} y={40} width={12} height={150} fill={DYKE} />
      <Rect x={20} y={40} width={360} height={150} fill="none" stroke={O} strokeWidth={1} />
      <HalfArrow x1={186} y1={150} x2={180} y2={135} />
      <HalfArrow x1={214} y1={140} x2={220} y2={156} />
      <Plain x={60} y={58} t="F" size={10} weight="700" />
      <Plain x={60} y={89} t="E" size={10} weight="700" />
      <Plain x={306} y={34} t="G: dyke" size={8.5} weight="700" />
      <Plain x={230} y={95} t="unconformity" size={8} fill={RED} weight="700" anchor="start" />
      <Plain x={150} y={204} t="fault: downthrow to the right" size={8} weight="700" />
      <Rect x={34} y={172} width={72} height={12} fill="#ffffff" opacity={0.85} />
      <Plain x={70} y={181} t="older tilted beds" size={8} weight="700" />
    </G>
  );
}

// ---------- Darcy flow in a confined aquifer ----------
function DarcyArt() {
  return (
    <G>
      <Poly poly={[[20, 50], [380, 70], [380, 100], [20, 100]]} fill="#c8b9a6" />
      <Poly poly={[[20, 100], [380, 100], [380, 140], [20, 140]]} fill={SANDST} />
      <Poly poly={[[20, 140], [380, 140], [380, 180], [20, 180]]} fill="#c8b9a6" />
      <Plain x={110} y={92} t="clay (aquiclude)" size={8} anchor="start" />
      <Plain x={200} y={136} t="sandstone aquifer" size={8.5} weight="700" />
      <Plain x={40} y={166} t="clay (aquiclude)" size={8} anchor="start" />
      {[80, 320].map((x) => (
        <G key={x}>
          <Rect x={x - 3} y={x === 80 ? 52 : 65} width={6} height={x === 80 ? 70 : 57} fill="#ffffff" stroke={O} strokeWidth={1} />
        </G>
      ))}
      <Path d="M74 66 L86 66 L80 72 Z" fill={BLUE} />
      <Path d="M314 82 L326 82 L320 88 Z" fill={BLUE} />
      <Line x1={80} y1={66} x2={320} y2={82} stroke={BLUE} strokeWidth={1.4} strokeDasharray="5 3" />
      <Plain x={200} y={70} t="piezometric surface" size={7.5} fill={BLUE} weight="700" />
      <Plain x={80} y={42} t="well A: head 52 m" size={8} weight="700" />
      <Plain x={330} y={56} t="well B: head 48 m" size={8} weight="700" />
      {[120, 180, 240].map((x) => (
        <Arrow key={x} x1={x} y1={120} x2={x + 36} y2={120} c={BLUE} w={1.6} />
      ))}
      <Line x1={80} y1={192} x2={320} y2={192} stroke={O} strokeWidth={1} />
      <Line x1={80} y1={188} x2={80} y2={196} stroke={O} />
      <Line x1={320} y1={188} x2={320} y2={196} stroke={O} />
      <Plain x={200} y={205} t="L = 400 m;  I = (52 − 48) ÷ 400 = 0.01;  Q = KIA" size={8} weight="700" />
    </G>
  );
}

// ---------- seismic refraction travel-time graph ----------
function RefractionArt() {
  const f = fr(56, 186, 280, 150, 250, 200);
  return (
    <G>
      <Axes f={f} ylab="Travel time (ms)" xlab="Distance from source (m)" xt={[[100, '100'], [200, '200']]} yt={[[50, '50'], [100, '100'], [150, '150']]} />
      <Cv d={seg(f, 0, 0, 100, 100)} c={BLUE} w={2.2} />
      <Cv d={seg(f, 100, 100, 160, 160)} c={BLUE} w={1.2} dash={DASH} />
      <Cv d={seg(f, 0, 200 / 3, 50, 200 / 3 + 50 / 3)} c={RED} w={1.2} dash={DASH} />
      <Cv d={seg(f, 50, 200 / 3 + 50 / 3, 250, 200 / 3 + 250 / 3)} c={RED} w={2.2} />
      <Guide f={f} x={100} y={100} toY={false} />
      <Dot f={f} x={100} y={100} r={3} />
      <Lb f={f} x={100} y={100} t="crossover, xc = 100 m" dx={-6} dy={-6} anchor="end" size={7.5} />
      <Lb f={f} x={40} y={40} t="direct wave: slope 1 ÷ 1,000 m/s" dx={8} dy={4} size={7.5} c={BLUE} />
      <Lb f={f} x={200} y={200 / 3 + 200 / 3} t="refracted wave: slope 1 ÷ 3,000 m/s" dy={24} anchor="middle" size={7.5} c={RED} />
      <Lb f={f} x={0} y={200 / 3} t="intercept time" dx={6} dy={12} size={7.5} c={RED} weight="500" />
      <Lb f={f} x={250} y={20} t="depth ≈ 35 m" dx={0} anchor="end" size={8.5} />
    </G>
  );
}

// ---------- a gravity anomaly over a dense body ----------
function AnomaliesArt() {
  const X = (x) => x;
  const g = (x) => 4 * Math.exp(-(((x - 200) / 55) ** 2));
  const Yg = (v) => 90 - v * 14;
  const prof = Array.from({ length: 61 }, (_, i) => 20 + i * 6).map((x) => `${X(x)} ${Yg(g(x)).toFixed(1)}`);
  return (
    <G>
      <Line x1={20} y1={90} x2={380} y2={90} stroke={MUTED} strokeWidth={1} />
      <Path d={`M${prof.join(' L')}`} fill="none" stroke={RED} strokeWidth={2.2} />
      <Plain x={20} y={24} t="Bouguer gravity anomaly" size={8} anchor="start" fill={MUTED} />
      <Plain x={200} y={28} t="+4 mGal" size={8} weight="700" fill={RED} />
      <Plain x={370} y={84} t="0" size={7.5} anchor="end" fill={MUTED} />
      <Rect x={20} y={110} width={360} height={84} fill="#e6dccb" stroke={O} strokeWidth={1} />
      <Plain x={60} y={126} t="ground surface" size={7.5} anchor="start" fill={MUTED} />
      <Path d="M150 160 C 160 140, 240 140, 250 160 C 240 178, 160 178, 150 160 Z" fill="#5b4b45" />
      <Plain x={200} y={164} t="dense ore body" size={8} fill="#ffffff" weight="700" />
      <Plain x={200} y={208} t="a light body, such as salt or a granite pluton, gives a negative anomaly" size={7.5} fill={MUTED} />
    </G>
  );
}

// ---------- oil traps ----------
function TrapsArt() {
  const fault = (x0) => {
    const fa = [x0 + 70, 30];
    const fb = [x0 + 50, 150];
    const left = [[x0, 30], fa, fb, [x0, 150]];
    const right = [fa, [x0 + 120, 30], [x0 + 120, 150], fb];
    const bed = (y0, dy) => [[x0 - 10, y0 + dy], [x0 + 130, y0 + dy + 42], [x0 + 130, y0 + dy + 62], [x0 - 10, y0 + dy + 20]];
    const oil = (y0) => clipConvex(clipConvex(bed(y0, 0), left), [[x0, 30], [x0 + 80, 30], [x0 + 80, 82], [x0, 82]]);
    return (
      <G key="fault">
        <Rect x={x0} y={30} width={120} height={120} fill={SHALE} />
        <Poly poly={clipConvex(bed(50, 0), left)} fill={SANDST} width={0.6} />
        <Poly poly={oil(50)} fill={OIL} width={0} />
        <Poly poly={clipConvex(bed(50, 40), right)} fill={SANDST} width={0.6} />
        <Line x1={fa[0]} y1={fa[1]} x2={fb[0]} y2={fb[1]} stroke={RED} strokeWidth={2} />
        <Rect x={x0} y={30} width={120} height={120} fill="none" stroke={O} />
        <Plain x={x0 + 60} y={166} t="fault trap" size={8.5} weight="700" />
      </G>
    );
  };
  const dome = (x0) => {
    const cx = x0 + 60;
    const salt = [[cx - 14, 150], [cx - 16, 70], [cx - 8, 48], [cx + 8, 48], [cx + 16, 70], [cx + 14, 150]];
    const bed = (s) => [[x0, 110 + s], [cx - 15, 70 + s], [cx - 15, 90 + s], [x0, 128 + s]];
    const bedR = (s) => [[cx + 15, 70 + s], [x0 + 120, 110 + s], [x0 + 120, 128 + s], [cx + 15, 90 + s]];
    return (
      <G key="dome">
        <Rect x={x0} y={30} width={120} height={120} fill={SHALE} />
        <Poly poly={bed(0)} fill={SANDST} width={0.6} />
        <Poly poly={bedR(0)} fill={SANDST} width={0.6} />
        <Poly poly={[[cx - 15, 70], [cx - 15, 90], [cx - 30, 98], [cx - 30, 78]]} fill={OIL} width={0} />
        <Poly poly={[[cx + 15, 70], [cx + 30, 78], [cx + 30, 98], [cx + 15, 90]]} fill={OIL} width={0} />
        <Poly poly={salt} fill={SALT} />
        <Plain x={cx} y={130} t="salt" size={8} weight="700" />
        <Rect x={x0} y={30} width={120} height={120} fill="none" stroke={O} />
        <Plain x={x0 + 60} y={166} t="salt dome trap" size={8.5} weight="700" />
      </G>
    );
  };
  const pinch = (x0) => {
    const wedge = [[x0, 120], [x0 + 95, 70], [x0, 140]];
    const tip = [[x0 + 60, 88], [x0 + 95, 70], [x0 + 60, 101]];
    return (
      <G key="pinch">
        <Rect x={x0} y={30} width={120} height={120} fill={SHALE} />
        <Poly poly={wedge} fill={SANDST} width={0.6} />
        <Poly poly={tip} fill={OIL} width={0} />
        <Rect x={x0} y={30} width={120} height={120} fill="none" stroke={O} />
        <Plain x={x0 + 60} y={166} t="pinch-out (stratigraphic)" size={8.5} weight="700" />
      </G>
    );
  };
  return (
    <G>
      {fault(10)}
      {dome(140)}
      {pinch(270)}
      <Rect x={30} y={180} width={12} height={9} fill={SANDST} stroke={O} strokeWidth={0.6} />
      <Plain x={46} y={188} t="reservoir sandstone" size={8} anchor="start" />
      <Rect x={160} y={180} width={12} height={9} fill={OIL} />
      <Plain x={176} y={188} t="oil" size={8} anchor="start" />
      <Rect x={220} y={180} width={12} height={9} fill={SHALE} />
      <Plain x={236} y={188} t="shale seal" size={8} anchor="start" />
    </G>
  );
}

const graph = (title, art, w, h, facts) => ({ title, w, h, art, labels: [], facts });

export const A_GEOLOGY = {
  // ---------- Lower Sixth ----------
  'agl-gce-0755': graph('GCE A Level Geology (0755)', PapersArt, 410, 192, [
    'Paper 1 lasts 1½ hours: multiple choice, on Thursday 4 June, morning.',
    'Paper 2 lasts 3 hours, on Thursday 4 June, afternoon.',
    'The practical examination comes first, on Saturday 16 May.',
    'The written papers are drawn to scale.',
  ]),
  'agl-specimen': flowSpec('Describing a hand specimen', ['Colour:\nfresh and\nweathered', 'Grain size\nand texture', 'Minerals\nand fossils', 'Name and\nrock group'], { perRow: 2, boxW: 130, boxH: 56 }),
  'agl-symmetry': treeSpec('The elements of symmetry', 'Symmetry of a crystal', [
    { name: 'Planes', items: ['mirror halves', 'cube: 9'] },
    { name: 'Axes', items: ['2-, 3-, 4-, 6-fold', 'cube: 13'] },
    { name: 'Centre', items: ['parallel faces', 'opposite each other'] },
  ], { colW: 116 }),
  'agl-miller': columnsSpec('Finding Miller indices', [
    { head: 'Step', items: ['intercepts', 'reciprocals', 'clear fractions', 'indices'] },
    { head: 'Example', items: ['2, 3, ∞', '1⁄2, 1⁄3, 0', '× 6', '(320)'] },
  ], { colW: 156, arrow: true }),
  'agl-twins': columnsSpec('Types of twin', [
    { head: 'Contact', items: ['meet on a plane', 'gypsum', 'swallowtail'] },
    { head: 'Penetration', items: ['interpenetrate', 'orthoclase (Carlsbad)', 'fluorite, staurolite'] },
    { head: 'Repeated', items: ['thin lamellae', 'plagioclase', 'fine striations'] },
  ], { colW: 116 }),
  'agl-silicates': treeSpec('The silicate structures', 'SiO4 tetrahedra', [
    { name: 'Isolated,\npairs, rings', items: ['olivine, garnet', 'epidote', 'beryl, tourmaline'] },
    { name: 'Chains', items: ['single: pyroxenes', 'double: amphiboles'] },
    { name: 'Sheets', items: ['micas', 'clays, chlorite', 'talc'] },
    { name: 'Frameworks', items: ['quartz', 'feldspars', 'feldspathoids'] },
  ], { colW: 92 }),
  'agl-silicate-ratio': columnsSpec('Structure, Si:O ratio and cleavage', [
    { head: 'Structure', items: ['isolated', 'single chain', 'double chain', 'sheet', 'framework'] },
    { head: 'Si:O', items: ['1:4', '1:3', '4:11', '2:5', '1:2'] },
    { head: 'Cleavage', items: ['none (olivine)', '87° and 93°', '56° and 124°', 'one perfect', 'none (quartz)'] },
  ], { colW: 112 }),
  'agl-polymorphs': columnsSpec('Isomorphism, polymorphism, pseudomorphism', [
    { head: 'Solid solution', items: ['ions substitute', 'olivine Fo to Fa', 'plagioclase Ab to An'] },
    { head: 'Polymorphs', items: ['same chemistry', 'diamond, graphite', 'calcite, aragonite'] },
    { head: 'Pseudomorph', items: ['replaced, same shape', 'limonite after', 'pyrite cubes'] },
  ], { colW: 116 }),
  'agl-stripes': graph('Magnetic stripes on the ocean floor', StripesArt, 400, 196, [
    'Stripes of normal and reversed polarity lie symmetrically on both sides of the ridge axis.',
    'The last reversal was 0.78 million years ago; earlier boundaries here are at 2.58 and 3.58 Ma (simplified).',
    'With a half-spreading rate of 2 cm per year, ocean floor 4 million years old lies 80 km from the ridge.',
  ]),
  'agl-plate-engine': graph('What drives the plates', PlateEngineArt, 400, 200, [
    'At the mid-ocean ridge, magma rises and new oceanic lithosphere forms.',
    'Ridge push: the high, young lithosphere slides away from the ridge.',
    'Slab pull: the cold, dense slab sinking at the trench pulls the plate behind it.',
    'Mantle convection in the asthenosphere carries heat from the interior.',
  ]),
  'agl-bowen': graph('Bowen’s reaction series', BowenArt, 400, 214, [
    'Discontinuous series: olivine, then pyroxene, amphibole and biotite, each with a different structure.',
    'Continuous series: plagioclase changes from Ca-rich to Na-rich.',
    'The last minerals to form, at the lowest temperatures, are K-feldspar, muscovite and quartz.',
    'Basic rocks form from the top of the series and acid rocks from the bottom.',
  ]),
  'agl-eutectic': graph('The diopside-anorthite eutectic system', EutecticArt, 380, 222, [
    'Pure diopside melts at about 1,391 °C and pure anorthite at about 1,553 °C.',
    'The liquidus curves fall to the eutectic E at about 1,274 °C and 42% anorthite.',
    'A melt of 70% anorthite starts to crystallise anorthite at about 1,450 °C; the liquid then moves down the liquidus to E.',
    'Below 1,274 °C the whole system is solid diopside and anorthite.',
  ]),
  'agl-silica-scale': graph('Igneous rocks by silica content', SilicaScaleArt, 400, 146, [
    'Ultrabasic rocks have under 45% silica: peridotite.',
    'Basic: 45 to 52%: gabbro (coarse) and basalt (fine).',
    'Intermediate: 52 to 63%: diorite and andesite.',
    'Acid: over 63%: granite and rhyolite.',
  ]),
  'agl-qapf': graph('The IUGS QAPF classification (upper triangle)', QapfArt, 400, 232, [
    'Q, A and P are recalculated to 100% and plotted in the triangle.',
    'Granitoids lie between 20% and 60% quartz: alkali-feldspar granite, granite, granodiorite and tonalite as plagioclase increases.',
    'Below 20% quartz lie syenite, monzonite, and diorite and gabbro.',
    'Point X, with Q 31, A 38 and P 31, falls in the granite field.',
  ]),
  'agl-differentiation': flowSpec('From one magma to many rocks', ['Parent basaltic\nmagma', 'Early crystals\nremoved\n(Mg, Fe, Ca)', 'Melt richer in\nsilica, Na, K', 'Assimilation\nand mixing\nchange it more', 'Andesite to\nrhyolite'], { perRow: 3, boxW: 112, boxH: 56 }),
  'agl-hazard-zones': columnsSpec('Volcanic hazards on Mount Cameroon', [
    { head: 'Hazards', items: ['lava flows in valleys', 'ash and gas', 'earthquakes', 'landslides'] },
    { head: 'Responses', items: ['hazard zoning maps', 'monitoring', 'evacuation plans', 'land-use rules'] },
  ], { colW: 156 }),
  'agl-hjulstrom': graph('The Hjulström curve (simplified)', HjulstromArt, 380, 232, [
    'Above the red erosion curve, grains are picked up; between the curves, they are carried; below the blue curve, they are deposited.',
    'Fine to medium sand, about 0.1 to 0.5 mm, is eroded at the lowest velocities.',
    'Clay and silt need high velocities to erode because they are cohesive, but stay in suspension at very low velocities.',
    'Gravel needs high velocities because the grains are heavy.',
  ]),
  'agl-diagenesis': flowSpec('Diagenesis: sediment to rock', ['Loose sediment\nwith pore water', 'Compaction:\nwater squeezed\nout', 'Cementation:\nsilica, calcite,\niron oxide', 'Sedimentary\nrock'], { perRow: 2, boxW: 130, boxH: 58 }),
  'agl-wentworth': graph('The Udden-Wentworth grain-size scale', WentworthArt, 400, 150, [
    'Clay is under 1⁄256 mm and silt 1⁄256 to 1⁄16 mm: together they make mudrocks.',
    'Sand is 1⁄16 to 2 mm: sandstone.',
    'Granules 2 to 4 mm, pebbles 4 to 64 mm, cobbles 64 to 256 mm and boulders over 256 mm make conglomerate or breccia.',
    'In phi units, φ = −log2 of the diameter in mm: 2 mm is φ −1 and 1⁄16 mm is φ 4.',
  ]),
  'agl-environments': columnsSpec('Depositional environments', [
    { head: 'Continental', items: ['fluvial: channel sands', 'lacustrine: laminated', 'aeolian: dune sands', 'red, cross-bedded'] },
    { head: 'Transitional', items: ['deltaic: coarsening', 'upwards, coal tops', 'beaches: well sorted', 'tidal flats'] },
    { head: 'Marine', items: ['shelf: shelly limestone', 'reefs: corals', 'deep: turbidites', 'shale, chert'] },
  ], { colW: 116 }),
  'agl-strat-laws': columnsSpec('Principles of stratigraphy', [
    { head: 'Principle', items: ['superposition', 'original horizontality', 'lateral continuity', 'cross-cutting', 'included fragments', 'faunal succession'] },
    { head: 'It means', items: ['younger on top', 'laid down flat', 'beds extend sideways', 'cutter is younger', 'fragments are older', 'fossils in order'] },
  ], { colW: 156, arrow: true }),
  'agl-unconformity': graph('Types of unconformity', UnconformityArt, 400, 174, [
    'Angular unconformity: tilted older beds were eroded before horizontal beds were laid on them.',
    'Disconformity: an erosion surface between parallel beds.',
    'Nonconformity: sedimentary rocks rest on eroded granite or metamorphic rock.',
    'Each red surface records a gap in time.',
  ]),
  'agl-meta-agents': columnsSpec('Agents of metamorphism', [
    { head: 'Agent', items: ['temperature', 'lithostatic pressure', 'directed stress', 'fluids', 'time'] },
    { head: 'Effect', items: ['new minerals', 'dense minerals', 'foliation', 'faster reactions', 'reactions complete'] },
  ], { colW: 156, arrow: true }),
  'agl-barrow': graph('Barrow’s metamorphic zones', BarrowArt, 400, 218, [
    'Barrow’s zones, in order of rising grade: chlorite, biotite, garnet, staurolite, kyanite, sillimanite.',
    'Each bar shows the zones in which that index mineral is found.',
    'The dashed isograds mark where each new index mineral first appears.',
    'Slates and phyllites form at low grade, schists at medium grade, gneisses at high grade.',
  ]),
  'agl-facies': treeSpec('Metamorphic facies', 'Pressure and temperature', [
    { name: 'Low pressure', items: ['hornfels', '(contact aureoles)'] },
    { name: 'Rising\ntemperature', items: ['zeolite', 'greenschist', 'amphibolite', 'granulite'] },
    { name: 'High pressure', items: ['blueschist', 'eclogite', '(subduction)'] },
  ], { colW: 116 }),
  'agl-meta-textures': columnsSpec('Metamorphic textures', [
    { head: 'Foliated', items: ['slaty cleavage', 'phyllitic sheen', 'schistosity', 'gneissose banding'] },
    { head: 'Non-foliated', items: ['granoblastic', 'marble', 'quartzite', 'hornfels'] },
  ], { colW: 156 }),
  'agl-stress-strain': graph('Stress, strain and rock behaviour', StressStrainArt, 380, 212, [
    'At first rocks deform elastically: the strain is recoverable.',
    'Beyond the yield point, hot, deep rock flows in a ductile way, forming folds, before it finally fractures.',
    'Cold rock near the surface fractures soon after its elastic limit: brittle failure forms joints and faults.',
  ]),
  'agl-fold-parts': graph('The parts of folds', FoldPartsArt, 400, 216, [
    'The hinge is the line of greatest curvature; the limbs lie on either side.',
    'The axial plane joins the hinges of successive layers.',
    'The anticline has the oldest bed in its core; the syncline the youngest.',
  ]),
  'agl-fault-types': graph('Normal, reverse and strike-slip faults', FaultTypesArt, 400, 190, [
    'Normal fault: under tension, the hanging wall moves down relative to the footwall.',
    'Reverse fault: under compression, the hanging wall moves up.',
    'Strike-slip fault: blocks move sideways; here the far side moved to the right (dextral).',
  ]),
  'agl-structure-contours': graph('Structure contours and dip', StructureContoursArt, 400, 216, [
    'Structure contours join points of equal height on a bed boundary; here they run north to south, the strike.',
    'They fall from 300 m to 100 m towards the east, the direction of dip.',
    'With a 50 m interval and 100 m spacing, tan(dip) = 0.5 and the dip is about 27°.',
  ]),
  'agl-fossilisation': flowSpec('From organism to fossil', ['Death', 'Rapid burial\nin fine\nsediment', 'Mineral change:\npermineralisation,\nreplacement', 'Uplift and\nexposure', 'Discovery'], { perRow: 3, boxW: 112, boxH: 56 }),
  'agl-v-rule': graph('Outcrop patterns in valleys: the V-rule', VRuleArt, 400, 186, [
    'Horizontal beds: the outcrop follows the contours.',
    'Beds dipping upstream: the outcrop forms a V pointing upstream.',
    'Beds dipping downstream more steeply than the valley floor: the V points downstream.',
  ]),
  'agl-section-steps': flowSpec('Drawing a geological cross-section', ['Topographic\nprofile', 'Mark\nboundaries', 'Draw dips\n(correct for VE)', 'Add faults,\nintrusions', 'Title, scales,\nkey'], { perRow: 3, boxW: 108, boxH: 54 }),
  'agl-paper-plan': flowSpec('Revision clinics before promotion', ['Paper 1\nsprint drills', 'Phase\ndiagrams', 'Map\nsections', 'Specimen\nidentification', 'Promotion\nexamination'], { perRow: 3, boxW: 108 }),

  // ---------- Upper Sixth ----------
  'agl-command': columnsSpec('Command words in geology', [
    { head: 'Word', items: ['state, name', 'describe', 'explain', 'calculate', 'discuss'] },
    { head: 'What it asks', items: ['a fact', 'what is seen', 'processes, reasons', 'formula and working', 'evidence and judgement'] },
  ], { colW: 156, arrow: true }),
  'agl-decay': graph('Radioactive decay', DecayArt, 360, 214, [
    'After one half-life 50% of the parent atoms remain; after two, 25%; after three, 12.5%.',
    'The daughter atoms increase as the parent decays.',
    'Measuring the daughter-to-parent ratio gives the age in half-lives.',
  ]),
  'agl-timescale': graph('The geological time scale (to scale)', TimescaleArt, 400, 184, [
    'Earth history spans about 4,540 million years: Hadean, Archaean (to 2,500 Ma), Proterozoic, and the Phanerozoic from 538.8 Ma.',
    'The Palaeozoic era ran from 538.8 to 251.9 Ma, the Mesozoic to 66.0 Ma, and the Cenozoic to the present.',
    'The periods are Cambrian, Ordovician, Silurian, Devonian, Carboniferous, Permian, Triassic, Jurassic, Cretaceous, Palaeogene, Neogene and Quaternary.',
  ]),
  'agl-fossil-groups': columnsSpec('Brachiopods and bivalves', [
    { head: 'Brachiopod', items: ['valves unequal', 'symmetry through', 'each valve', 'pedicle opening'] },
    { head: 'Bivalve', items: ['valves equal', 'symmetry between', 'the valves', 'teeth, muscle scars'] },
  ], { colW: 156 }),
  'agl-ranges': graph('Time ranges of invertebrate groups', RangesArt, 400, 210, [
    'Trilobites lived from the Cambrian to the end of the Permian.',
    'Brachiopods, bivalves and gastropods range from the Cambrian to the present.',
    'Ammonoids: goniatites from the Devonian to the Permian, ceratites in the Triassic, ammonites in the Jurassic and Cretaceous.',
  ]),
  'agl-complex-section': graph('A faulted unconformity cut by a dyke', ComplexSectionArt, 400, 210, [
    'The older beds were deposited, tilted, then cut by a normal fault with a downthrow to the right.',
    'Uplift and erosion produced the unconformity, which the fault does not cross.',
    'Beds E and F were then laid down horizontally on it.',
    'The dyke G cuts every bed, so it is the youngest rock.',
  ]),
  'agl-history-steps': flowSpec('Writing a geological history', ['Oldest\ndeposition', 'Folding,\nfaulting', 'Intrusion', 'Uplift,\nerosion', 'Younger\ndeposition', 'Present\nerosion'], { perRow: 3, boxW: 104 }),
  'agl-darcy': graph('Flow in a confined aquifer', DarcyArt, 400, 212, [
    'Water in the sandstone aquifer is confined between clay layers.',
    'The head falls from 52 m at well A to 48 m at well B, 400 m away: a hydraulic gradient of 0.01.',
    'Water flows from high head to low head; Darcy’s law gives the discharge, Q = KIA.',
  ]),
  'agl-refraction': graph('A seismic refraction travel-time graph', RefractionArt, 380, 214, [
    'Near the source the direct wave arrives first, travelling at 1,000 m/s.',
    'Beyond the crossover distance of 100 m, the refracted wave, travelling at 3,000 m/s in bedrock, overtakes it.',
    'The slope of each line is 1 ÷ velocity; the crossover distance gives a depth to bedrock of about 35 m.',
  ]),
  'agl-anomalies': graph('A gravity anomaly over a dense body', AnomaliesArt, 400, 214, [
    'A dense ore body increases gravity directly above it: a positive Bouguer anomaly of about 4 mGal here.',
    'The anomaly is widest for deep bodies and sharpest for shallow ones.',
    'Light bodies, such as salt domes or granite plutons, give negative anomalies.',
  ]),
  'agl-ore-types': treeSpec('How ore deposits form', 'Ore deposits', [
    { name: 'Magmatic', items: ['segregation', 'chromite layers'] },
    { name: 'Hydrothermal', items: ['veins, stockworks', 'porphyry copper'] },
    { name: 'Surface', items: ['placers: gold', 'residual: bauxite', 'laterite'] },
    { name: 'Sedimentary', items: ['banded iron', 'evaporites'] },
  ], { colW: 92 }),
  'agl-ore-minerals': columnsSpec('Ore minerals to know', [
    { head: 'Mineral', items: ['magnetite', 'haematite', 'chalcopyrite', 'galena', 'sphalerite', 'cassiterite'] },
    { head: 'Formula, metal', items: ['Fe3O4, iron', 'Fe2O3, iron', 'CuFeS2, copper', 'PbS, lead', 'ZnS, zinc', 'SnO2, tin'] },
  ], { colW: 156 }),
  'agl-petroleum': flowSpec('The petroleum system', ['Source rock:\norganic shale', 'Maturation:\n60 to 120 °C', 'Migration\nupwards', 'Reservoir:\nporous sandstone', 'Seal and trap'], { perRow: 3, boxW: 112, boxH: 54 }),
  'agl-traps': graph('Structural and stratigraphic oil traps', TrapsArt, 400, 196, [
    'Fault trap: the reservoir is sealed against shale across a fault.',
    'Salt dome trap: rising salt bends the beds and seals them at its sides.',
    'Pinch-out trap: the sandstone thins up-dip into shale, a stratigraphic trap.',
  ]),
  'agl-bif': columnsSpec('The Ntem Complex and its iron ores', [
    { head: 'Rocks', items: ['charnockites', 'TTG gneisses', 'greenstone belts', 'banded iron formations'] },
    { head: 'Ores', items: ['Mbalam (East)', 'Nkout (South)', 'itabirite, enriched', 'to haematite'] },
  ], { colW: 156 }),
  'agl-cmr-units': columnsSpec('The geological units of Cameroon', [
    { head: 'Archaean', items: ['Ntem Complex', 'Congo Craton', 'over 2,500 Ma'] },
    { head: 'Pan-African', items: ['Central African', 'Fold Belt', 'about 600 Ma'] },
    { head: 'Cretaceous', items: ['coastal basins', 'Garoua, Logone', 'Birni, Mamfe'] },
    { head: 'Cenozoic', items: ['Cameroon', 'Volcanic Line', 'Lake Chad cover'] },
  ], { colW: 92 }),
  'agl-panafrican': flowSpec('The Pan-African story in Cameroon', ['Sediments\nand volcanics\nlaid down', 'Collision:\nburial, high-P\nmetamorphism', 'Thrusting\nonto the\ncraton', 'Shear zones\nand granites', 'Uplift and\nerosion'], { perRow: 3, boxW: 112, boxH: 56 }),
  'agl-rift-margin': flowSpec('From rift to passive margin', ['Rift stage:\nfaults, lake\nsediments', 'Transitional:\nnarrow sea,\nsalt', 'Drift stage:\nmarine\nsediments', 'Deltas build\nout: oil and gas'], { perRow: 2, boxW: 130, boxH: 58 }),
  'agl-coastal-basins': columnsSpec('Cameroon’s coastal basins', [
    { head: 'Rio del Rey', items: ['offshore west', 'Niger Delta edge', 'main oil'] },
    { head: 'Douala', items: ['onshore, offshore', 'Cretaceous and', 'Cenozoic; gas'] },
    { head: 'Kribi-Campo', items: ['narrow, south', 'offshore gas', 'FLNG since 2018'] },
  ], { colW: 116 }),
  'agl-interior': columnsSpec('Cameroon’s interior basins', [
    { head: 'Garoua', items: ['Benue Trough', 'half-graben', 'continental sands'] },
    { head: 'Logone Birni', items: ['Far North', 'Central African', 'Rift System'] },
    { head: 'Mamfe', items: ['South-West', 'Cretaceous trough', 'salt springs'] },
  ], { colW: 116 }),
  'agl-cvl': flowSpec('The Cameroon Volcanic Line, south-west to north-east', ['Annobón', 'São Tomé', 'Príncipe', 'Bioko', 'Mount\nCameroon', 'Manengouba', 'Bamboutos', 'Oku', 'Adamawa\nand Biu'], { perRow: 3, boxW: 104, boxH: 44, note: 'Oceanic crust in the Gulf of Guinea, continental crust inland; about 1,600 km long.' }),
  'agl-nyos': flowSpec('How Lake Nyos released its gas', ['CO2 from magma\nseeps into\ndeep water', 'Dense bottom\nlayer stores\nthe gas', 'A trigger lifts\ndeep water', 'Gas bursts out\n(21 August\n1986)', 'Dense CO2\nflows down\nvalleys'], { perRow: 3, boxW: 112, boxH: 58 }),
  'agl-cmr-ores': columnsSpec('Cameroon’s deposits and their origin', [
    { head: 'Deposit', items: ['iron: Mbalam, Nkout', 'bauxite: Minim-Martap', 'gold: East region', 'diamonds: Mobilong', 'Co-Ni: Nkamouna'] },
    { head: 'Process', items: ['BIF, weathering', 'residual weathering', 'veins and placers', 'alluvial placers', 'laterite'] },
  ], { colW: 156, arrow: true }),
  'agl-dams': columnsSpec('Geology and dams', [
    { head: 'A good site', items: ['strong, impermeable rock', 'no active faults', 'no soluble rocks', 'stable slopes'] },
    { head: 'Failures', items: ['Malpasset 1959:', 'foundation failed', 'Vajont 1963:', 'landslide wave'] },
  ], { colW: 156 }),
  'agl-remote': columnsSpec('Remote sensing images', [
    { head: 'Image', items: ['true colour', 'false colour', 'shortwave infrared', 'radar'] },
    { head: 'Shows', items: ['as the eye sees', 'vegetation in red', 'clays, iron oxides', 'relief through cloud'] },
  ], { colW: 156 }),
  'agl-gis': flowSpec('A GIS overlay', ['Geology\nlayer', 'Slope and\ndrainage', 'Lineaments', 'Rainfall,\nsoils', 'Combined\nhazard or\nwater map'], { perRow: 3, boxW: 104, boxH: 52 }),
  'agl-gondwana': columnsSpec('Cameroon and Brazil matched', [
    { head: 'Cameroon', items: ['Congo Craton (Ntem)', 'Central African', 'Fold Belt', 'C. Cameroon Shear Zone'] },
    { head: 'Brazil', items: ['São Francisco Craton', 'Borborema', 'province', 'Pernambuco shear zone'] },
  ], { colW: 156, arrow: true }),
  'agl-drift-evidence': treeSpec('Evidence for continental drift', 'Wegener (1915)', [
    { name: 'Fit', items: ['coastlines', 'shelf edges'] },
    { name: 'Rocks', items: ['matching belts', 'and structures'] },
    { name: 'Fossils', items: ['Mesosaurus', 'Glossopteris'] },
    { name: 'Climate', items: ['tillites', 'striations'] },
  ], { colW: 92 }),
  'agl-key-skills': columnsSpec('Skills for the last weeks', [
    { head: 'Paper 1', items: ['Miller indices', 'QAPF, Bowen', 'dating sums', 'index fossils', 'Darcy, geophysics'] },
    { head: 'Paper 2 and practical', items: ['cross-sections', 'vertical exaggeration', 'three-point problems', 'histories', 'specimen work'] },
  ], { colW: 156 }),
  'agl-final-term': flowSpec('The final term before the GCE', ['Paper 1\nmarathon', 'Mapping\nclinic', 'Mock:\nall papers', 'Corrections', 'Essay\nclinics'], { perRow: 3, boxW: 108 }),
};
