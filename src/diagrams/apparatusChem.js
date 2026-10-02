// Chemistry practical apparatus. Each art(state) draws the set-up as it is at
// that moment of the experiment, so the same drawing is the labelled diagram
// and the live view while the student takes readings.
import { Circle, Ellipse, G, Line, Path, Polygon, Rect } from 'react-native-svg';
import { Txt } from './Diagram';
import { Beaker, Bubbles, Bunsen, Burette, CellSymbol, ConicalFlask, Meter, O, Stand, TestTube, Thermometer, WATER, Wire } from './kit';
import { SyringeArt } from './apparatusBio';

const range = (n, f) => Array.from({ length: n }, (_, i) => f(i));
const COPPER = '#c87a4a';
const NEW_COPPER = '#e0896a';
const CARBON = '#3d4650';
const BLUE_SOLUTION = '#a9cdea';

function Readout({ x, y, text, w = 64 }) {
  return (
    <G>
      <Rect x={x} y={y} width={w} height={18} rx={3} fill="#1f2a33" />
      <Txt x={x + w / 2} y={y + 13} size={10} weight="700" fill="#9ef0b5">{text}</Txt>
    </G>
  );
}

// ---------- titration ----------
function TitrationLive(s = {}) {
  const level = s.level ?? 0.92;
  return (
    <G>
      <Stand x={60} y={20} h={212} clampY={48} clampTo={138} />
      <Burette x={138} y={20} h={170} w={14} fill="#f1f6fb" level={level} />
      <ConicalFlask x={110} y={190} w={70} h={52} level={0.36} fill={s.flask || '#f6c3dc'} />
      <Rect x={104} y={242} width={82} height={6} fill="#ffffff" stroke={O} strokeWidth={1} />
      {s.drop && <Circle cx={145} cy={196} r={2} fill="#dbe8f3" stroke={O} strokeWidth={0.5} />}
    </G>
  );
}

// ---------- rates: magnesium and acid, gas syringe ----------
const RateArt = (s) => SyringeArt({ ...s, solid: 'ribbon', fill: '#eef6fb' });

// ---------- rates: marble chips on a balance ----------
function MarbleArt(s = {}) {
  const size = s.size ?? 0;
  const pieces =
    size === 0
      ? [[124, 152, 14], [142, 154, 13], [160, 151, 14]]
      : size === 1
      ? range(8, (i) => [120 + (i % 4) * 14, 156 - Math.floor(i / 4) * 7, 7])
      : range(26, (i) => [118 + (i % 13) * 5, 159 - Math.floor(i / 13) * 3, 2.5]);
  const fizz = s.fizz ?? 0.6;
  return (
    <G>
      <ConicalFlask x={110} y={66} w={80} h={98} level={0.38} fill="#eef6fb">
        {pieces.map(([x, y, d], i) => (
          <Rect key={i} x={x} y={y - d * 0.7} width={d} height={d * 0.7} rx={d * 0.2} fill="#ece7dd" stroke={O} strokeWidth={0.5} />
        ))}
        {fizz > 0.05 && <Bubbles points={range(Math.round(2 + fizz * 8), (i) => [124 + ((i * 17) % 52), 150 - ((i * 23) % 22)])} r={1.5} />}
      </ConicalFlask>
      <Path d="M139 70 C136 60 144 54 150 58 C156 52 166 60 161 70 Z" fill="#fbfbf7" stroke={O} strokeWidth={0.9} />
      <Rect x={84} y={164} width={132} height={6} fill="#a5adb5" stroke={O} strokeWidth={0.8} />
      <Rect x={66} y={170} width={168} height={36} rx={4} fill="#d9dee3" stroke={O} strokeWidth={1.2} />
      <Readout x={118} y={179} text={`${(s.mass ?? 152.4).toFixed(2)} g`} />
    </G>
  );
}

// ---------- rates: sodium thiosulfate and acid, seen from above ----------
function CrossArt(s = {}) {
  const cloud = s.cloud ?? 0.3;
  return (
    <G>
      <Rect x={30} y={22} width={220} height={160} fill="#ffffff" stroke={O} strokeWidth={1.2} />
      <Line x1={104} y1={64} x2={176} y2={140} stroke="#1f2a33" strokeWidth={7} strokeLinecap="round" />
      <Line x1={176} y1={64} x2={104} y2={140} stroke="#1f2a33" strokeWidth={7} strokeLinecap="round" />
      <Circle cx={140} cy={102} r={66} fill="#e9f2f9" opacity={0.45} />
      <Circle cx={140} cy={102} r={66} fill="#e6dca0" opacity={Math.min(1, cloud)} />
      <Circle cx={140} cy={102} r={66} fill="none" stroke={O} strokeWidth={1.6} />
      <Circle cx={140} cy={102} r={20} fill="none" stroke={O} strokeWidth={1} strokeDasharray="3 2" />
    </G>
  );
}

// ---------- electrolysis of copper(II) sulfate with copper electrodes ----------
function CopperCellArt(s = {}) {
  const t = Math.min(1, s.t ?? 0.3);
  const anodeW = 12 - 5 * t;
  return (
    <G>
      <Beaker x={90} y={84} w={150} h={120} level={0.74} fill={BLUE_SOLUTION} />
      <Rect x={115 + (12 - anodeW) / 2} y={52} width={anodeW} height={128} fill={COPPER} stroke={O} strokeWidth={1} />
      <Rect x={203} y={52} width={12} height={128} fill={COPPER} stroke={O} strokeWidth={1} />
      {t > 0.02 && <Rect x={203 - 2.5 * t} y={118} width={12 + 5 * t} height={62} fill={NEW_COPPER} stroke={O} strokeWidth={0.8} />}
      <Wire d="M121 52 L121 24 L153 24" />
      <Meter x={165} y={24} letter="A" />
      <Wire d="M177 24 L194 24" />
      <CellSymbol x={197} y={24} />
      <Wire d="M200 24 L209 24 L209 52" />
      <Txt x={186} y={12} size={10} weight="700">+</Txt>
      <Txt x={208} y={12} size={10} weight="700">−</Txt>
    </G>
  );
}

// ---------- one electrode with a tube collecting its product ----------
function ElectrodeArt(s = {}) {
  const gas = Math.min(1, s.gas ?? 0);
  return (
    <G>
      <Path d="M6 52 L6 124 L84 124 L84 52" fill="none" stroke={O} strokeWidth={1.4} />
      <Rect x={7} y={62} width={76} height={61} fill={s.liquid || '#e6f1fa'} />
      <Path d="M30 108 L30 22 A15 15 0 0 1 60 22 L60 108" fill="#f8fbfd" stroke={O} strokeWidth={1.2} />
      {gas > 0.02 && <Path d={`M31 ${22 + 0} A14 14 0 0 1 59 22 L59 ${22 + gas * 80} L31 ${22 + gas * 80} Z`} fill={s.gasColour || '#ffffff'} stroke={O} strokeWidth={0.4} />}
      <Path d={`M31 ${22 + gas * 80} L59 ${22 + gas * 80} L59 108 L31 108 Z`} fill={s.liquid || '#e6f1fa'} />
      <Rect x={41} y={78} width={8} height={46} fill={CARBON} />
      {s.deposit && <Rect x={39} y={84} width={12} height={34} fill={s.deposit} stroke={O} strokeWidth={0.6} />}
      {gas > 0.02 && <Bubbles points={[[44, 74], [47, 66], [43, 58]]} r={1.5} />}
      <Line x1={45} y1={124} x2={45} y2={134} stroke={O} strokeWidth={1.3} />
    </G>
  );
}

// ---------- a flame test ----------
function FlameArt(s = {}) {
  return (
    <G>
      <Bunsen x={45} y={78} h={52} flame={s.colour || '#6a8fd8'} />
      <Line x1={6} y1={20} x2={38} y2={52} stroke={O} strokeWidth={1.2} />
      <Circle cx={40} cy={54} r={2.6} fill="none" stroke={O} strokeWidth={1} />
      <Rect x={0} y={14} width={12} height={7} rx={2} fill="#8a6a4f" transform="rotate(45 6 17)" />
    </G>
  );
}

// ---------- a test tube with a reagent added ----------
function ReagentTubeArt(s = {}) {
  const ppt = s.ppt;
  const amount = s.amount ?? 1;
  return (
    <G>
      <TestTube x={25} y={8} w={22} h={112} fill={s.fill || '#f1f6fb'} level={s.level ?? 0.55} />
      {s.cloud > 0 && <Path d="M26.5 60 L45.5 60 L45.5 109 A9.5 9.5 0 0 1 26.5 109 Z" fill={s.cloudColour || '#f4f4f0'} opacity={Math.min(0.95, s.cloud)} />}
      {ppt && amount > 0 && (
        <Path d={`M26.5 ${109 - 22 * amount} L45.5 ${109 - 22 * amount} L45.5 109 A9.5 9.5 0 0 1 26.5 109 Z`} fill={ppt} opacity={0.95} />
      )}
      {s.metal && <Rect x={31} y={84} width={10} height={22} rx={1} fill={s.metal} stroke={O} strokeWidth={0.6} />}
      {s.fizz > 0 && <Bubbles points={range(Math.round(2 + s.fizz * 7), (i) => [30 + ((i * 7) % 12), 98 - ((i * 13) % 34)])} r={1.4} />}
      <TestTube x={25} y={8} w={22} h={112} fill="none" level={0} />
    </G>
  );
}

// ---------- temperature change in a polystyrene cup ----------
function CupArt(s = {}) {
  const temp = s.temp ?? 22;
  return (
    <G>
      {s.burette && <Burette x={102} y={0} h={104} w={12} fill="#f1f6fb" level={s.level ?? 0.8} />}
      <Beaker x={70} y={116} w={120} h={96} level={0} />
      <Path d="M80 98 L180 98 L170 206 L90 206 Z" fill="#fbfbf9" stroke={O} strokeWidth={1.3} />
      <Path d="M84 136 L176 136 L170 202 L90 202 Z" fill={s.fill || '#eef6fb'} />
      {s.solid && <Path d="M100 202 Q130 190 160 202 Z" fill={s.solid} stroke={O} strokeWidth={0.5} />}
      <Rect x={76} y={92} width={108} height={7} rx={2} fill="#e3e7ea" stroke={O} strokeWidth={1} />
      <Thermometer x={150} y={22} h={176} fill={Math.max(0.05, Math.min(1, (temp - 10) / 50))} />
      <Readout x={192} y={40} text={`${temp.toFixed(1)} °C`} />
    </G>
  );
}

// ---------- solubility: crystals appearing as a solution cools ----------
function SolubilityArt(s = {}) {
  const crystals = s.crystals ?? 0;
  return (
    <G>
      <Beaker x={60} y={86} w={160} h={124} level={0.7} fill={WATER} />
      <TestTube x={124} y={30} w={30} h={170} fill="#f6f9fb" level={0.32} />
      {crystals > 0 &&
        range(Math.round(4 + crystals * 26), (i) => (
          <Rect key={i} x={128 + ((i * 7) % 20)} y={186 - ((i * 11) % 30)} width={3.5} height={2.4} fill="#ffffff" stroke={O} strokeWidth={0.5} transform={`rotate(${(i * 37) % 90} ${130 + ((i * 7) % 20)} ${187 - ((i * 11) % 30)})`} />
        ))}
      <Thermometer x={139} y={8} h={190} fill={Math.max(0.05, Math.min(1, (s.temp ?? 40) / 90))} />
      <Readout x={196} y={30} text={`${(s.temp ?? 40).toFixed(0)} °C`} />
    </G>
  );
}

// ---------- rusting: one tube of the set ----------
function RustTubeArt(s = {}) {
  const rust = Math.min(1, s.rust ?? 0);
  return (
    <G>
      <TestTube x={22} y={10} w={26} h={112} fill={s.salt ? '#e9f3f6' : '#e6f1fa'} level={s.water ?? 0.45} />
      {s.oil && <Rect x={23.5} y={10 + (112 - 13) * (1 - (s.water ?? 0.45)) - 7} width={23} height={7} fill="#f2d675" />}
      {s.dry && (
        <G>
          {range(9, (i) => (
            <Circle key={i} cx={28 + (i % 4) * 5} cy={112 - Math.floor(i / 4) * 4} r={2.4} fill="#ffffff" stroke={O} strokeWidth={0.5} />
          ))}
          <Rect x={24} y={92} width={22} height={6} fill="#f5f2ea" stroke={O} strokeWidth={0.4} />
        </G>
      )}
      {s.bung && <Rect x={20} y={2} width={30} height={12} rx={2} fill="#8a6a4f" stroke={O} strokeWidth={0.8} />}
      <Rect x={33} y={s.dry ? 30 : 22} width={4} height={s.dry ? 58 : 80} fill="#8f989f" stroke={O} strokeWidth={0.5} />
      <Rect x={30} y={s.dry ? 28 : 20} width={10} height={3} fill="#8f989f" />
      {rust > 0.02 &&
        range(Math.round(rust * 9), (i) => (
          <Ellipse key={i} cx={35} cy={(s.dry ? 36 : 30) + i * 7} rx={2.6 + rust} ry={2} fill="#a0522d" opacity={0.9} />
        ))}
    </G>
  );
}

// ---------- water of crystallisation: heating in a crucible ----------
function CrucibleArt(s = {}) {
  return (
    <G>
      <Line x1={80} y1={128} x2={66} y2={226} stroke={O} strokeWidth={3} />
      <Line x1={180} y1={128} x2={194} y2={226} stroke={O} strokeWidth={3} />
      <Rect x={70} y={124} width={120} height={5} fill="#7d868f" />
      <Polygon points="100,124 160,124 130,112" fill="none" stroke="#e8e2d6" strokeWidth={4} />
      <Path d="M104 82 L156 82 L150 122 L110 122 Z" fill="#f4f1ec" stroke={O} strokeWidth={1.4} />
      <Path d="M108 92 L152 92 L149 116 L111 116 Z" fill={s.colour || '#3d7fd0'} />
      <Path d="M100 76 L160 70 L161 76 L101 82 Z" fill="#f4f1ec" stroke={O} strokeWidth={1.2} />
      <Bunsen x={130} y={176} h={52} />
      {s.steam && range(3, (i) => <Path key={i} d={`M${120 + i * 10} 66 q-5 -8 0 -16 q5 -8 0 -16`} fill="none" stroke="#9aa3ab" strokeWidth={1} />)}
    </G>
  );
}

// ---------- energy from burning a fuel ----------
function FuelArt(s = {}) {
  const temp = s.temp ?? 22;
  return (
    <G>
      <Stand x={40} y={10} h={226} clampY={40} clampTo={112} />
      <Path d="M112 34 L178 34 L178 118 Q178 126 170 126 L120 126 Q112 126 112 118 Z" fill="#d9a07a" stroke={O} strokeWidth={1.4} />
      <Rect x={115} y={52} width={60} height={71} fill={WATER} opacity={0.85} />
      <Thermometer x={156} y={6} h={112} fill={Math.max(0.05, Math.min(1, (temp - 10) / 70))} />
      <Readout x={190} y={30} text={`${temp.toFixed(1)} °C`} />
      <Path d="M145 194 C131 172 136 154 145 142 C154 154 159 172 145 194 Z" fill="#f2b33d" opacity={0.85} />
      <Rect x={141} y={192} width={8} height={10} fill="#e8e2d6" stroke={O} strokeWidth={0.6} />
      <Path d="M122 202 L168 202 L172 236 L118 236 Z" fill="#eef4f8" stroke={O} strokeWidth={1.3} />
      <Rect x={121} y={218} width={48} height={17} fill="#f6efc9" />
    </G>
  );
}

// ---------- chromatography: one strip ----------
function ChromaStripArt(s = {}) {
  const front = s.front ?? 0.5;
  const start = 118;
  const top = 18;
  const fy = start - (start - top) * front;
  return (
    <G>
      <Rect x={22} y={10} width={36} height={122} fill="#fffdf6" stroke={O} strokeWidth={1} />
      <Rect x={22} y={124} width={36} height={8} fill="#e6f1fa" />
      {front > 0.02 && <Rect x={22.5} y={fy} width={35} height={start - fy} fill="#eef5fb" opacity={0.7} />}
      <Line x1={22} y1={start} x2={58} y2={start} stroke={O} strokeWidth={0.8} />
      {front > 0.02 && <Line x1={22} y1={fy} x2={58} y2={fy} stroke="#7a8794" strokeWidth={0.8} strokeDasharray="3 2" />}
      {(s.spots || []).map(([rf, c], i) => (
        <Ellipse key={i} cx={40} cy={start - (start - top) * front * rf} rx={5} ry={front > 0.02 ? 3.6 : 3} fill={c} opacity={0.9} />
      ))}
    </G>
  );
}

// ---------- does it conduct? a lamp in series with the sample ----------
function ConductArt(s = {}) {
  const glow = Math.max(0, Math.min(1, s.glow ?? 0));
  return (
    <G>
      <Wire d="M30 50 L30 20 L52 20" />
      <CellSymbol x={55} y={20} />
      <Wire d="M58 20 L80 20 L80 34" />
      {glow > 0.02 && <Circle cx={80} cy={46} r={10 + 8 * glow} fill="#ffe27a" opacity={0.35 + 0.4 * glow} />}
      <Circle cx={80} cy={46} r={10} fill={glow > 0.02 ? '#fff3b0' : '#ffffff'} stroke={O} strokeWidth={1.3} />
      <Path d="M74 50 Q77 40 80 46 Q83 52 86 42" fill="none" stroke={glow > 0.02 ? '#e08a1e' : O} strokeWidth={1} />
      <Wire d="M80 58 L80 70" />
      <Rect x={26} y={70} width={8} height={44} fill={CARBON} />
      <Rect x={76} y={70} width={8} height={44} fill={CARBON} />
      <Wire d="M30 50 L30 70" />
      {s.liquid && <Beaker x={12} y={78} w={86} h={48} level={0.78} fill={s.liquid} />}
      {s.solid && <Rect x={34} y={100} width={42} height={14} rx={2} fill={s.solid} stroke={O} strokeWidth={0.8} />}
      {s.rod && <Rect x={26} y={104} width={58} height={6} rx={2} fill={s.rod} stroke={O} strokeWidth={0.6} />}
    </G>
  );
}

// ---------- static sets for the practical overviews ----------
function AnionArt() {
  const tubes = [
    ['#ffffff', 'Cl⁻'],
    ['#efe4c2', 'Br⁻'],
    ['#f1de6a', 'I⁻'],
    ['#ffffff', 'SO₄²⁻'],
  ];
  return (
    <G>
      <Rect x={20} y={150} width={330} height={12} fill="#c9a36b" stroke={O} strokeWidth={1} />
      {tubes.map(([c, ion], i) => (
        <G key={ion}>
          <TestTube x={40 + i * 66} y={30} w={24} h={130} fill="#f4f9fc" level={0.55} />
          <Path d={`M${41.5 + i * 66} 118 L${62.5 + i * 66} 118 L${62.5 + i * 66} 148 A10.5 10.5 0 0 1 ${41.5 + i * 66} 148 Z`} fill={c} stroke="#c8ccd0" strokeWidth={0.6} />
          <Txt x={52 + i * 66} y={180} size={11} weight="700">{ion}</Txt>
        </G>
      ))}
      <TestTube x={304} y={30} w={24} h={130} fill="#f4f9fc" level={0.4} />
      <Bubbles points={[[310, 120], [318, 108], [313, 96], [321, 128]]} r={1.6} />
      <Txt x={316} y={180} size={11} weight="700">CO₃²⁻</Txt>
    </G>
  );
}
function RustSetArt() {
  const sets = [
    { water: 0.45, rust: 0.8, label: 'A' },
    { water: 0.55, oil: true, rust: 0, label: 'B' },
    { water: 0, dry: true, bung: true, rust: 0, label: 'C' },
    { water: 0.45, salt: true, rust: 1, label: 'D' },
  ];
  return (
    <G>
      {sets.map((t, i) => (
        <G key={t.label} transform={`translate(${10 + i * 100} 0)`}>
          {RustTubeArt(t)}
          <Txt x={35} y={142} size={11} weight="700">{t.label}</Txt>
        </G>
      ))}
    </G>
  );
}
function MetalAcidArt() {
  const metals = [
    ['#b9c1c8', 1, 'Mg'],
    ['#9aa3ab', 0.5, 'Zn'],
    ['#7d868f', 0.2, 'Fe'],
    [COPPER, 0, 'Cu'],
  ];
  return (
    <G>
      {metals.map(([c, fizz, sym], i) => (
        <G key={sym} transform={`translate(${10 + i * 86} 0)`}>
          {ReagentTubeArt({ metal: c, fizz })}
          <Txt x={36} y={136} size={11} weight="700">{sym}</Txt>
        </G>
      ))}
    </G>
  );
}

export const APPARATUS_CHEM = {
  'titration-apparatus': {
    title: 'Titrating sodium hydroxide with hydrochloric acid',
    w: 300,
    h: 250,
    art: TitrationLive,
    labels: [
      ['Clamp stand', 20, 64, 58, 70],
      ['Burette: hydrochloric acid,\nread at eye level', 236, 40, 152, 52],
      ['Burette tap', 236, 170, 157, 167],
      ['Conical flask: 25.0 cm³\nsodium hydroxide and\nphenolphthalein', 236, 212, 172, 222],
      ['White tile shows the\ncolour change clearly', 236, 252, 186, 245],
    ],
  },
  'rate-apparatus': {
    title: 'Measuring the hydrogen given off by magnesium and acid',
    w: 380,
    h: 190,
    art: RateArt,
    labels: [
      ['Gas syringe', 250, 20, 250, 42],
      ['Delivery tube', 126, 32, 126, 51],
      ['Bung', 30, 66, 70, 76],
      ['Dilute hydrochloric acid', 170, 140, 108, 148],
      ['Magnesium ribbon', 170, 178, 90, 166],
    ],
  },
  'marble-apparatus': {
    title: 'Following the mass lost as marble chips react with acid',
    w: 320,
    h: 212,
    art: MarbleArt,
    labels: [
      ['Cotton wool: lets carbon\ndioxide out, keeps acid in', 250, 52, 160, 62],
      ['Dilute hydrochloric acid', 250, 120, 176, 132],
      ['Marble chips (calcium\ncarbonate)', 46, 150, 126, 152],
      ['Top-pan balance', 46, 196, 70, 194],
      ['Mass falls as carbon\ndioxide escapes', 270, 196, 182, 188],
    ],
  },
  'cross-apparatus': {
    title: 'Looking down through the flask at a cross on paper',
    w: 280,
    h: 196,
    art: CrossArt,
    labels: [
      ['Cross drawn on paper', 140, 196, 104, 140],
      ['Sodium thiosulfate and\nhydrochloric acid in a flask', 270, 40, 196, 66],
      ['Sulfur forms and the\nmixture turns cloudy', 270, 160, 186, 140],
      ['Look straight down\nthrough the neck', 20, 46, 124, 92],
    ],
  },
  'copper-electrolysis': {
    title: 'Electrolysis of copper(II) sulfate with copper electrodes',
    w: 330,
    h: 214,
    art: CopperCellArt,
    labels: [
      ['Ammeter', 120, 4, 160, 15],
      ['d.c. supply', 260, 10, 201, 20],
      ['Anode (+): copper\ndissolves, gets thinner', 30, 126, 116, 126],
      ['Cathode (−): copper\nis plated on it', 300, 100, 216, 110],
      ['Copper(II) sulfate\nsolution', 300, 176, 238, 176],
    ],
  },
  'electrode-tube': { title: 'An electrode with a tube collecting its product', w: 90, h: 136, art: ElectrodeArt, labels: [] },
  'flame-small': { title: 'A flame test', w: 90, h: 132, art: FlameArt, labels: [] },
  'conduct-small': { title: 'A conductivity test', w: 110, h: 132, art: ConductArt, labels: [] },
  'conductivity-apparatus': {
    title: 'Testing whether a substance conducts electricity',
    w: 110,
    h: 132,
    art: (st) => ConductArt({ liquid: '#e6f1fa', glow: 0.8, ...st }),
    labels: [
      ['Cell', 55, -6, 55, 12],
      ['Lamp lights if\na current flows', 150, 46, 92, 46],
      ['Carbon electrodes', -50, 92, 26, 92],
      ['Substance tested', 150, 112, 96, 112],
    ],
  },
  'reagent-tube': { title: 'A test tube', w: 72, h: 124, art: ReagentTubeArt, labels: [] },
  'rust-tube': { title: 'A rusting tube', w: 70, h: 126, art: RustTubeArt, labels: [] },
  'chroma-strip': { title: 'A chromatography strip', w: 80, h: 136, art: ChromaStripArt, labels: [] },
  'neutralisation-cup': {
    title: 'Measuring the temperature as acid is added to an alkali',
    w: 290,
    h: 214,
    art: (s) => CupArt({ ...s, burette: true }),
    labels: [
      ['Burette: hydrochloric acid', 30, 22, 102, 30],
      ['Lid', 30, 92, 78, 95],
      ['Polystyrene cup\n(insulates)', 30, 160, 86, 160],
      ['Sodium hydroxide\nsolution', 230, 176, 168, 176],
      ['Thermometer', 230, 110, 154, 110],
      ['Beaker keeps the\ncup steady', 230, 214, 182, 206],
    ],
  },
  'displacement-cup': {
    title: 'Measuring the temperature rise when a metal displaces copper',
    w: 290,
    h: 214,
    art: (s) => CupArt({ fill: BLUE_SOLUTION, solid: '#9aa3ab', ...s }),
    labels: [
      ['Lid', 30, 92, 78, 95],
      ['Polystyrene cup\n(insulates)', 30, 160, 86, 160],
      ['Copper(II) sulfate\nsolution', 230, 160, 168, 160],
      ['Metal powder', 230, 196, 140, 197],
      ['Thermometer', 230, 110, 154, 110],
    ],
  },
  'solubility-apparatus': {
    title: 'Finding the temperature at which crystals first appear',
    w: 300,
    h: 216,
    art: SolubilityArt,
    labels: [
      ['Thermometer, used\nto stir gently', 30, 40, 136, 40],
      ['Boiling tube: potassium\nnitrate in 10 cm³ water', 30, 120, 126, 140],
      ['Hot water bath', 260, 120, 216, 140],
      ['Crystals first appear', 260, 186, 150, 180],
    ],
  },
  'rusting-tubes': {
    title: 'Four tubes set up to find what iron needs to rust',
    w: 400,
    h: 150,
    art: RustSetArt,
    labels: [
      ['A: air and\nwater', 45, 170],
      ['B: water,\nno air', 145, 170],
      ['C: air,\nno water', 245, 170],
      ['D: air and\nsalt water', 345, 170],
    ],
  },
  'metal-acid-tubes': {
    title: 'Metals in dilute hydrochloric acid',
    w: 350,
    h: 144,
    art: MetalAcidArt,
    labels: [
      ['Fast fizzing', 46, 160],
      ['Steady bubbles', 132, 160],
      ['Slow bubbles', 218, 160],
      ['No reaction', 304, 160],
    ],
  },
  'anion-tests': {
    title: 'Results of the anion tests',
    w: 360,
    h: 190,
    art: AnionArt,
    labels: [
      ['White: silver chloride', 52, 16, 52, 132],
      ['Cream: silver bromide', 118, -10, 118, 132],
      ['Yellow: silver iodide', 184, 16, 184, 132],
      ['White: barium sulfate', 250, -10, 250, 132],
      ['Fizzes: the gas turns\nlimewater milky', 330, 14, 316, 96],
    ],
  },
  'crucible-heating': {
    title: 'Heating hydrated copper(II) sulfate to constant mass',
    w: 300,
    h: 230,
    art: CrucibleArt,
    labels: [
      ['Lid, slightly open', 30, 60, 104, 78],
      ['Crucible', 30, 100, 108, 100],
      ['Pipeclay triangle', 250, 112, 150, 122],
      ['Copper(II) sulfate: blue\nturns white as water leaves', 250, 70, 146, 104],
      ['Tripod', 30, 180, 72, 180],
      ['Heat', 250, 176, 140, 158],
    ],
  },
  'fuel-apparatus': {
    title: 'Measuring the energy given out when a fuel burns',
    w: 300,
    h: 240,
    art: FuelArt,
    labels: [
      ['Copper can (conducts\nheat to the water)', 250, 80, 178, 80],
      ['100 cm³ of water', 30, 100, 116, 100],
      ['Thermometer', 250, 120, 160, 116],
      ['Flame', 250, 168, 152, 168],
      ['Spirit burner with\nthe alcohol: weigh it\nbefore and after', 250, 222, 170, 220],
      ['Clamp stand', 6, 160, 40, 170],
    ],
  },
};
