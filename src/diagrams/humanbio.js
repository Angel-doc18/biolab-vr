// Labelled diagrams for Human Biology: pregnancy, inheritance, disease and
// public health, drawn in the same style as the Biology diagrams.
import { Circle, Ellipse, G, Line, Path, Rect } from 'react-native-svg';
import { Head, Txt } from './Diagram';

const O = '#33414d';
const SKIN = '#f1c6a6';
const range = (n, f) => Array.from({ length: n }, (_, i) => f(i));

function Arrow({ d, x, y, dx, dy, c = O }) {
  return (
    <G>
      <Path d={d} fill="none" stroke={c} strokeWidth={1.4} />
      <Head x={x} y={y} dx={dx} dy={dy} size={7} fill={c} />
    </G>
  );
}

// ---------- the fetus in the uterus ----------
function PlacentaArt() {
  return (
    <G>
      <Path d="M150 212 L153 246 L187 246 L190 212 Z" fill="#e3a198" stroke={O} strokeWidth={1.4} />
      <Path d="M150 214 C80 200 50 140 62 100 C75 40 130 16 170 16 C210 16 265 40 278 100 C290 140 260 200 190 214 Z" fill="#e3a198" stroke={O} strokeWidth={1.4} />
      <Path d="M156 200 C95 188 72 140 80 104 C92 56 135 32 170 32 C205 32 248 56 260 104 C268 140 245 188 184 200 Z" fill="#dceefa" stroke={O} strokeWidth={1} />
      <Rect x={167} y={198} width={6} height={48} fill="#f4ead2" stroke={O} strokeWidth={0.6} />
      <Ellipse cx={160} cy={128} rx={70} ry={64} fill="none" stroke="#5a7d9a" strokeWidth={1} strokeDasharray="4 3" />
      <Ellipse cx={228} cy={58} rx={34} ry={11} fill="#a33a36" stroke={O} strokeWidth={1} transform="rotate(32 228 58)" />
      <Ellipse cx={160} cy={146} rx={30} ry={36} fill={SKIN} stroke={O} strokeWidth={1.2} transform="rotate(-30 160 146)" />
      <Circle cx={128} cy={98} r={24} fill={SKIN} stroke={O} strokeWidth={1.2} />
      <Circle cx={117} cy={95} r={1.6} fill={O} />
      <Path d="M150 122 C138 134 144 150 160 150" fill="none" stroke={O} strokeWidth={1.2} />
      <Path d="M182 168 C160 186 132 180 130 162" fill="none" stroke={O} strokeWidth={1.2} />
      <Path d="M214 66 C196 84 222 104 200 118 C186 128 184 134 176 140" fill="none" stroke={O} strokeWidth={7} strokeLinecap="round" />
      <Path d="M214 66 C196 84 222 104 200 118 C186 128 184 134 176 140" fill="none" stroke="#d9a07a" strokeWidth={4.6} strokeLinecap="round" />
    </G>
  );
}

// ---------- sickle-cell anaemia from two carrier parents ----------
function SickleCrossArt() {
  const fills = { 'HbA HbA': '#e6f1df', 'HbA HbS': '#fff4d6', 'HbS HbS': '#f8d7d4' };
  const cell = (x, y, t) => (
    <G key={`${x}${y}`}>
      <Rect x={x} y={y} width={56} height={32} fill={fills[t]} stroke={O} strokeWidth={1} />
      <Txt x={x + 28} y={y + 20} size={9.5} weight="700">{t}</Txt>
    </G>
  );
  const gamete = (x, g) => (
    <G key={x}>
      <Circle cx={x} cy={70} r={14} fill="none" stroke={O} strokeWidth={0.8} />
      <Txt x={x} y={73.5} size={9} weight="700">{g}</Txt>
    </G>
  );
  return (
    <G>
      <Txt x={210} y={26} size={11}>Carrier        ×        Carrier</Txt>
      <Txt x={210} y={48} size={12} weight="700">HbA HbS    ×    HbA HbS</Txt>
      {gamete(152, 'HbA')}
      {gamete(184, 'HbS')}
      {gamete(236, 'HbA')}
      {gamete(268, 'HbS')}
      <Txt x={198} y={102} size={10} weight="700">HbA</Txt>
      <Txt x={254} y={102} size={10} weight="700">HbS</Txt>
      <Txt x={152} y={128} size={10} weight="700">HbA</Txt>
      <Txt x={152} y={160} size={10} weight="700">HbS</Txt>
      {cell(170, 108, 'HbA HbA')}
      {cell(226, 108, 'HbA HbS')}
      {cell(170, 140, 'HbA HbS')}
      {cell(226, 140, 'HbS HbS')}
      <Txt x={214} y={198} size={10.5}>1 normal : 2 carriers : 1 sickle-cell anaemia</Txt>
    </G>
  );
}

// ---------- the life cycle of the malaria parasite ----------
function Mosquito({ x, y, s = 1, flip }) {
  const k = flip ? -1 : 1;
  return (
    <G transform={`translate(${x} ${y}) scale(${k * s} ${s})`}>
      <Ellipse cx={-6} cy={-12} rx={16} ry={5} fill="#dfe7ee" stroke={O} strokeWidth={0.7} opacity={0.9} transform="rotate(-20 -6 -12)" />
      <Ellipse cx={-2} cy={-14} rx={14} ry={4} fill="#eef3f7" stroke={O} strokeWidth={0.7} opacity={0.9} transform="rotate(-38 -2 -14)" />
      {[-10, -2, 6].map((lx) => (
        <G key={lx}>
          <Line x1={lx} y1={0} x2={lx - 8} y2={14} stroke={O} strokeWidth={0.8} />
          <Line x1={lx} y1={0} x2={lx + 6} y2={15} stroke={O} strokeWidth={0.8} />
        </G>
      ))}
      <Ellipse cx={-14} cy={-6} rx={15} ry={4.2} fill="#7a5a3c" stroke={O} strokeWidth={0.8} transform="rotate(-28 -14 -6)" />
      <Ellipse cx={4} cy={0} rx={7} ry={4.5} fill="#5d4630" stroke={O} strokeWidth={0.8} />
      <Circle cx={13} cy={1} r={3.6} fill="#3f3025" stroke={O} strokeWidth={0.8} />
      <Line x1={16} y1={2} x2={29} y2={9} stroke={O} strokeWidth={1} />
    </G>
  );
}

function MalariaArt() {
  return (
    <G>
      <Mosquito x={170} y={44} />
      {/* infected person with the liver */}
      <Circle cx={286} cy={100} r={11} fill={SKIN} stroke={O} strokeWidth={1.1} />
      <Rect x={268} y={113} width={36} height={56} rx={12} fill={SKIN} stroke={O} strokeWidth={1.1} />
      <Path d="M274 130 C282 122 300 124 300 134 C300 142 288 146 278 142 C272 140 270 134 274 130 Z" fill="#8b4a3c" stroke={O} strokeWidth={0.8} />
      {/* red blood cells, one bursting */}
      {[
        [146, 212],
        [172, 204],
      ].map(([cx, cy]) => (
        <G key={cx}>
          <Circle cx={cx} cy={cy} r={12} fill="#d9534f" stroke={O} strokeWidth={0.8} />
          <Circle cx={cx} cy={cy} r={5} fill="#e88a86" />
          <Circle cx={cx + 3} cy={cy - 3} r={2.6} fill="none" stroke="#5b2a86" strokeWidth={1.2} />
        </G>
      ))}
      <Path d="M186 214 A12 12 0 1 1 204 226" fill="#d9534f" stroke={O} strokeWidth={0.8} />
      {range(6, (i) => (
        <Circle key={i} cx={206 + (i % 3) * 7} cy={224 + Math.floor(i / 3) * 7} r={2.2} fill="#5b2a86" />
      ))}
      <Mosquito x={62} y={132} flip />
      <Arrow d="M204 52 Q248 58 262 92" x={262} y={92} dx={4} dy={10} />
      <Txt x={250} y={60} size={9} anchor="start">bite</Txt>
      <Arrow d="M276 176 Q262 210 222 216" x={222} y={216} dx={-10} dy={1} />
      <Arrow d="M130 216 Q80 210 66 160" x={66} y={160} dx={-3} dy={-10} />
      <Txt x={84} y={206} size={9} anchor="end">blood meal</Txt>
      <Arrow d="M70 110 Q84 58 136 48" x={136} y={48} dx={10} dy={-2} />
    </G>
  );
}

// ---------- treating water for a town ----------
function WaterArt() {
  const pipe = (x1, x2) => <Arrow d={`M${x1} 100 L${x2} 100`} x={x2} y={100} dx={1} dy={0} />;
  return (
    <G>
      {range(4, (i) => (
        <Path key={i} d={`M2 ${78 + i * 12} q6 -4 12 0 t12 0`} fill="none" stroke="#3f7fb5" strokeWidth={1.2} />
      ))}
      <Rect x={32} y={70} width={10} height={60} fill="#e8edf1" stroke={O} strokeWidth={1.1} />
      {range(6, (i) => (
        <Line key={i} x1={32} y1={76 + i * 9} x2={42} y2={76 + i * 9} stroke={O} strokeWidth={0.8} />
      ))}
      {pipe(42, 70)}
      <Rect x={70} y={70} width={70} height={60} fill="#cfe6f5" stroke={O} strokeWidth={1.3} />
      <Rect x={70.7} y={116} width={68.6} height={13.3} fill="#a68a64" />
      {range(9, (i) => (
        <Circle key={i} cx={78 + i * 7.5} cy={109 - (i % 3) * 5} r={1.4} fill="#8a7352" />
      ))}
      {pipe(140, 160)}
      <Rect x={160} y={70} width={60} height={60} fill="#cfe6f5" stroke={O} strokeWidth={1.3} />
      <Rect x={160.7} y={96} width={58.6} height={20} fill="#ecd9a2" />
      {range(18, (i) => (
        <Circle key={i} cx={165 + (i % 9) * 6.4} cy={101 + Math.floor(i / 9) * 8} r={1} fill="#b5974d" />
      ))}
      <Rect x={160.7} y={116} width={58.6} height={13.3} fill="#a9b1b8" />
      {range(8, (i) => (
        <Circle key={i} cx={166 + i * 7} cy={122.5} r={2.4} fill="#7d8790" />
      ))}
      {pipe(220, 280)}
      <Rect x={245} y={40} width={16} height={34} rx={5} fill="#7fb069" stroke={O} strokeWidth={1.1} />
      <Line x1={253} y1={74} x2={253} y2={96} stroke={O} strokeWidth={1.2} strokeDasharray="3 2" />
      <Rect x={280} y={76} width={56} height={54} fill="#cfe6f5" stroke={O} strokeWidth={1.3} />
      <Arrow d="M336 100 L356 100" x={356} y={100} dx={1} dy={0} />
      <Txt x={358} y={88} size={9} anchor="end">to homes</Txt>
    </G>
  );
}

// ---------- the menstrual cycle ----------
const dayX = (d) => 30 + (d - 1) * (280 / 27);
function MenstrualArt() {
  const top = [
    [1, 104],
    [3, 116],
    [5, 126],
    [8, 118],
    [11, 106],
    [14, 98],
    [18, 90],
    [22, 86],
    [26, 86],
    [28, 92],
  ];
  const curve = top.map(([d, y], i) => `${i ? 'L' : 'M'}${dayX(d).toFixed(1)} ${y}`).join(' ');
  const shed = `M${dayX(1)} 130 L${dayX(1)} 104 L${dayX(3)} 116 L${dayX(5)} 126 L${dayX(5)} 130 Z`;
  return (
    <G>
      <Path d={`${curve} L${dayX(28)} 130 L${dayX(1)} 130 Z`} fill="#f0b9b0" stroke="none" />
      <Path d={shed} fill="#c9443c" />
      <Path d={curve} fill="none" stroke={O} strokeWidth={1.3} />
      <Line x1={dayX(1)} y1={130} x2={dayX(28) + 6} y2={130} stroke={O} strokeWidth={1.3} />
      <Head x={dayX(28) + 10} y={130} dx={1} dy={0} size={6} />
      {[1, 5, 14, 21, 28].map((d) => (
        <G key={d}>
          <Line x1={dayX(d)} y1={130} x2={dayX(d)} y2={135} stroke={O} strokeWidth={1} />
          <Txt x={dayX(d)} y={147} size={9.5}>{String(d)}</Txt>
        </G>
      ))}
      <Txt x={170} y={163} size={10} weight="700">Day of the cycle</Txt>
      <Line x1={dayX(14)} y1={58} x2={dayX(14)} y2={128} stroke={O} strokeWidth={0.8} strokeDasharray="3 3" />
      <Circle cx={dayX(14)} cy={50} r={7} fill="#fbe8c8" stroke={O} strokeWidth={1} />
      <Circle cx={dayX(14)} cy={50} r={2.4} fill="#d9a441" />
      <Txt x={dayX(9)} y={76} size={9}>oestrogen</Txt>
      <Txt x={dayX(22)} y={70} size={9}>progesterone</Txt>
    </G>
  );
}

// ---------- the immune response ----------
function AntibodyArt() {
  return (
    <G>
      <Line x1={50} y1={160} x2={302} y2={160} stroke={O} strokeWidth={1.3} />
      <Line x1={50} y1={160} x2={50} y2={26} stroke={O} strokeWidth={1.3} />
      <Head x={306} y={160} dx={1} dy={0} size={6} />
      <Head x={50} y={22} dx={0} dy={-1} size={6} />
      <Txt x={176} y={180} size={10} weight="700">Time</Txt>
      <Txt x={30} y={94} size={10} weight="700" rotate={-90}>Antibody concentration</Txt>
      <Path d="M74 157 C95 156 105 128 120 126 C135 124 150 152 182 156" fill="none" stroke="#3f7fb5" strokeWidth={2} />
      <Path d="M190 156 C196 152 204 60 222 52 C240 46 270 54 298 60" fill="none" stroke="#c9443c" strokeWidth={2} />
    </G>
  );
}

export const HUMANBIO = {
  placenta: {
    title: 'The fetus in the uterus, joined to the placenta',
    w: 340,
    h: 262,
    art: PlacentaArt,
    labels: [
      ['Fetus', 30, 70, 114, 86],
      ['Amniotic sac', 30, 128, 91, 128],
      ['Cervix', 30, 228, 154, 230],
      ['Placenta', 300, 36, 236, 58],
      ['Umbilical\ncord', 300, 96, 209, 96],
      ['Wall of uterus\n(muscle)', 300, 156, 273, 150],
      ['Amniotic\nfluid', 300, 206, 205, 162],
    ],
  },
  'sickle-cross': {
    title: 'Inheritance of sickle-cell anaemia from two carrier parents',
    w: 340,
    h: 210,
    art: SickleCrossArt,
    labels: [
      ['Parents', 70, 26],
      ['Genotypes', 70, 48],
      ['Gametes', 70, 70],
      ['Offspring\ngenotypes', 70, 140],
      ['Carrier', 304, 124, 282, 124],
      ['Sickle-cell\nanaemia', 304, 158, 282, 156],
    ],
  },
  'malaria-cycle': {
    title: 'How malaria is passed on by the Anopheles mosquito',
    w: 340,
    h: 240,
    art: MalariaArt,
    labels: [
      ['Infected female\nAnopheles mosquito', 236, 18, 186, 40],
      ['Parasites multiply\nin the liver', 318, 136, 296, 134],
      ['Red blood cells\nburst: fever', 250, 236, 212, 228],
      ['Mosquito takes in\nthe parasites', 26, 104, 50, 124],
    ],
  },
  'water-treatment': {
    title: 'The stages in treating water for a town',
    w: 360,
    h: 170,
    art: WaterArt,
    labels: [
      ['Screen', 37, 50, 37, 70],
      ['Sand filter', 190, 50, 190, 70],
      ['Chlorine added', 253, 20, 253, 40],
      ['Sedimentation\ntank', 105, 154, 105, 130],
      ['Sand and\ngravel', 190, 154, 190, 128],
      ['Storage\nreservoir', 308, 154, 308, 130],
    ],
  },
  'menstrual-cycle': {
    title: 'The lining of the uterus during a 28-day menstrual cycle',
    w: 340,
    h: 170,
    art: MenstrualArt,
    labels: [
      ['Ovulation: an egg\nis released', 165, 18, 165, 43],
      ['Menstruation:\nthe lining is lost', 20, 96, dayX(3), 120],
      ['Lining of\nthe uterus', 326, 100, dayX(26), 96],
    ],
  },
  'antibody-response': {
    title: 'Antibodies made after a first and a second exposure to the same antigen',
    w: 320,
    h: 200,
    art: AntibodyArt,
    labels: [
      ['First exposure\n(vaccination)', 74, 24, 74, 154],
      ['Second exposure\nto the pathogen', 190, 24, 190, 154],
      ['Primary response:\nslow and small', 112, 200, 120, 128],
      ['Secondary response:\nfast and large', 262, 200, 262, 56],
    ],
  },
};
