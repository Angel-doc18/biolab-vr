// More teaching figures: HIV, the ruminant stomach, nutrient deficiency in water
// culture, honey bee castes, a balanced equation in particles, the allotropes of
// phosphorus, sound as a longitudinal wave, the Earth's gravitational field, the
// food temperature danger zone, the fire triangle, a food label and cooking
// methods. Drawn plainly with ruled labels.
import { Circle, Ellipse, G, Line, Path, Polygon, Rect } from 'react-native-svg';
import { Head, Txt } from './Diagram';

const O = '#33414d';
const range = (n, f) => Array.from({ length: n }, (_, i) => f(i));
const rad = (d) => (d * Math.PI) / 180;

function Arrow({ x1, y1, x2, y2, c = '#5a6b78', w = 1.4, size = 6 }) {
  return (
    <G>
      <Line x1={x1} y1={y1} x2={x2} y2={y2} stroke={c} strokeWidth={w} />
      <Head x={x2} y={y2} dx={x2 - x1} dy={y2 - y1} size={size} fill={c} />
    </G>
  );
}

// ---------- HIV ----------
function HivArt() {
  const cx = 120;
  const cy = 110;
  return (
    <G>
      {range(14, (i) => {
        const a = rad(i * (360 / 14));
        return (
          <G key={i}>
            <Line x1={cx + 70 * Math.cos(a)} y1={cy + 70 * Math.sin(a)} x2={cx + 81 * Math.cos(a)} y2={cy + 81 * Math.sin(a)} stroke="#7a5c99" strokeWidth={2} />
            <Circle cx={cx + 85 * Math.cos(a)} cy={cy + 85 * Math.sin(a)} r={4.5} fill="#c9b3e0" stroke="#7a5c99" strokeWidth={1} />
          </G>
        );
      })}
      <Circle cx={cx} cy={cy} r={71} fill="#fbefd0" stroke={O} strokeWidth={1.6} />
      <Circle cx={cx} cy={cy} r={66} fill="none" stroke={O} strokeWidth={1} />
      <Circle cx={cx} cy={cy} r={58} fill="none" stroke="#a88a4a" strokeWidth={1.2} strokeDasharray="4 3" />
      <Path d="M108 66 L132 66 L150 152 L90 152 Z" fill="#e3f0da" stroke="#2f6b3a" strokeWidth={1.5} />
      <Path d="M112 80 C122 88 104 96 114 104 C124 112 106 120 116 128 C124 134 112 140 118 146" fill="none" stroke="#c8463d" strokeWidth={1.6} />
      <Path d="M126 80 C136 88 118 96 128 104 C138 112 120 120 130 128 C138 134 126 140 132 146" fill="none" stroke="#c8463d" strokeWidth={1.6} />
      {[[104, 118], [136, 96], [128, 138]].map(([x, y], i) => (
        <Circle key={i} cx={x} cy={y} r={3.2} fill="#3f6fb5" />
      ))}
    </G>
  );
}

// ---------- the ruminant stomach ----------
function RuminantArt() {
  return (
    <G>
      {/* oesophagus */}
      <Path d="M150 6 L150 40" stroke="#c98b6b" strokeWidth={10} strokeLinecap="round" />
      {/* rumen */}
      <Ellipse cx={100} cy={112} rx={78} ry={52} fill="#f3d7c6" stroke={O} strokeWidth={1.5} />
      {/* reticulum */}
      <Circle cx={168} cy={60} r={22} fill="#f8e3df" stroke={O} strokeWidth={1.5} />
      {/* omasum */}
      <Circle cx={208} cy={104} r={20} fill="#efe6f7" stroke={O} strokeWidth={1.5} />
      {range(5, (i) => <Line key={i} x1={196 + i * 6} y1={88} x2={196 + i * 6} y2={120} stroke="#9a83b8" strokeWidth={0.8} />)}
      {/* abomasum */}
      <G transform="rotate(-18 258 138)">
        <Ellipse cx={258} cy={138} rx={36} ry={17} fill="#e3f0da" stroke={O} strokeWidth={1.5} />
      </G>
      {/* small intestine */}
      <Path d="M292 128 C304 132 306 150 296 160 C286 170 300 178 310 172" fill="none" stroke="#c98b6b" strokeWidth={6} strokeLinecap="round" />
      {/* the path of food */}
      <Arrow x1={150} y1={44} x2={120} y2={76} c="#2f6b3a" />
      <Arrow x1={140} y1={100} x2={152} y2={76} c="#2f6b3a" />
      <Path d="M170 38 C176 24 172 14 164 12" fill="none" stroke="#c8463d" strokeWidth={1.4} strokeDasharray="4 3" />
      <Head x={162} y={12} dx={-1} dy={0} size={6} fill="#c8463d" />
      <Arrow x1={182} y1={76} x2={196} y2={90} c="#2f6b3a" />
      <Arrow x1={224} y1={116} x2={234} y2={128} c="#2f6b3a" />
      <Txt x={100} y={118} size={11} weight="700">Rumen</Txt>
      <Txt x={208} y={136} size={9}>Omasum</Txt>
    </G>
  );
}

// ---------- water culture: mineral deficiencies ----------
function Plant({ x, base, h, leaf, n = 3, root = 30 }) {
  return (
    <G>
      <Line x1={x} y1={base} x2={x} y2={base - h} stroke="#2f6b3a" strokeWidth={2} />
      {range(n, (i) => {
        const y = base - h + 8 + i * ((h - 14) / Math.max(1, n - 1));
        const side = i % 2 ? 1 : -1;
        return <Ellipse key={i} cx={x + side * 9} cy={y} rx={9} ry={4} fill={leaf} stroke="#2f6b3a" strokeWidth={0.8} transform={`rotate(${side * -25} ${x + side * 9} ${y})`} />;
      })}
      {range(5, (i) => <Line key={`r${i}`} x1={x} y1={base + 4} x2={x - 10 + i * 5} y2={base + 4 + root - Math.abs(i - 2) * 5} stroke="#a8875a" strokeWidth={1} />)}
    </G>
  );
}
function WaterCultureArt() {
  const jars = [
    [60, 'Complete solution', 'healthy, green', 64, '#5fa04a', 5, 34],
    [170, 'No nitrates', 'small, yellow leaves', 34, '#d8cf5a', 3, 22],
    [280, 'No magnesium', 'yellow leaves', 54, '#d9d36e', 4, 30],
  ];
  return (
    <G>
      {jars.map(([x, a, b, h, leaf, n, root]) => (
        <G key={a}>
          <Rect x={x - 32} y={92} width={64} height={70} rx={4} fill="#dcecf7" stroke={O} strokeWidth={1.3} />
          <Rect x={x - 36} y={86} width={72} height={8} rx={2} fill="#7d8b97" stroke={O} strokeWidth={1} />
          <Plant x={x} base={90} h={h} leaf={leaf} n={n} root={root} />
          <Txt x={x} y={178} size={9.5} weight="700">{a}</Txt>
          <Txt x={x} y={190} size={8.5}>{b}</Txt>
        </G>
      ))}
    </G>
  );
}

// ---------- honey bee castes ----------
function Bee({ x, y, body, abdomen, eye = 3, wing = 12 }) {
  return (
    <G>
      <Ellipse cx={x - wing * 0.2} cy={y - 10} rx={wing} ry={6} fill="#eaf4fb" stroke="#7d9cbf" strokeWidth={0.9} transform={`rotate(-20 ${x} ${y - 10})`} />
      <Circle cx={x - body - 6} cy={y} r={6 + eye / 3} fill="#5a4a2a" stroke={O} strokeWidth={1} />
      <Circle cx={x - body - 8} cy={y - 2} r={eye} fill="#1f2933" />
      <Ellipse cx={x - body / 2} cy={y} rx={body / 2 + 2} ry={7} fill="#7a5a2a" stroke={O} strokeWidth={1} />
      <Ellipse cx={x + abdomen / 2} cy={y} rx={abdomen / 2 + 2} ry={9} fill="#e0a83a" stroke={O} strokeWidth={1} />
      {range(3, (i) => <Line key={i} x1={x + 6 + i * (abdomen / 4)} y1={y - 8} x2={x + 6 + i * (abdomen / 4)} y2={y + 8} stroke="#4a3a1a" strokeWidth={2} />)}
    </G>
  );
}
function BeesArt() {
  return (
    <G>
      <Bee x={56} y={44} body={10} abdomen={18} eye={2.5} wing={12} />
      <Txt x={56} y={80} size={10} weight="700">Worker</Txt>
      <Txt x={56} y={93} size={8}>female, cannot breed;</Txt>
      <Txt x={56} y={104} size={8}>collects nectar, makes</Txt>
      <Txt x={56} y={115} size={8}>honey, feeds the young</Txt>
      <Bee x={170} y={44} body={12} abdomen={34} eye={2.5} wing={13} />
      <Txt x={170} y={80} size={10} weight="700">Queen</Txt>
      <Txt x={170} y={93} size={8}>one in each hive;</Txt>
      <Txt x={170} y={104} size={8}>lays all the eggs</Txt>
      <Bee x={284} y={44} body={14} abdomen={24} eye={5} wing={15} />
      <Txt x={284} y={80} size={10} weight="700">Drone</Txt>
      <Txt x={284} y={93} size={8}>male; mates with</Txt>
      <Txt x={284} y={104} size={8}>a young queen</Txt>
    </G>
  );
}

// ---------- a balanced equation in particles ----------
function H2({ x, y }) {
  return (
    <G>
      <Circle cx={x} cy={y} r={8} fill="#ffffff" stroke={O} strokeWidth={1.2} />
      <Circle cx={x + 13} cy={y} r={8} fill="#ffffff" stroke={O} strokeWidth={1.2} />
    </G>
  );
}
function EquationArt() {
  return (
    <G>
      <H2 x={22} y={36} />
      <H2 x={22} y={70} />
      <Txt x={78} y={58} size={16} weight="700">+</Txt>
      <Circle cx={108} cy={54} r={11} fill="#e57373" stroke={O} strokeWidth={1.2} />
      <Circle cx={126} cy={54} r={11} fill="#e57373" stroke={O} strokeWidth={1.2} />
      <Arrow x1={152} y1={54} x2={192} y2={54} c={O} />
      {[34, 76].map((y) => (
        <G key={y}>
          <Circle cx={232} cy={y} r={11} fill="#e57373" stroke={O} strokeWidth={1.2} />
          <Circle cx={216} cy={y + 9} r={7} fill="#ffffff" stroke={O} strokeWidth={1.2} />
          <Circle cx={248} cy={y + 9} r={7} fill="#ffffff" stroke={O} strokeWidth={1.2} />
        </G>
      ))}
      <Txt x={35} y={106} size={12} weight="700">2H₂</Txt>
      <Txt x={117} y={106} size={12} weight="700">O₂</Txt>
      <Txt x={232} y={106} size={12} weight="700">2H₂O</Txt>
      <Txt x={140} y={128} size={9.5}>Left: 4 H atoms and 2 O atoms. Right: 4 H atoms and 2 O atoms.</Txt>
      <Rect x={286} y={24} width={12} height={12} rx={6} fill="#ffffff" stroke={O} strokeWidth={1} />
      <Txt x={304} y={34} size={9} anchor="start">hydrogen</Txt>
      <Rect x={286} y={46} width={12} height={12} rx={6} fill="#e57373" stroke={O} strokeWidth={1} />
      <Txt x={304} y={56} size={9} anchor="start">oxygen</Txt>
    </G>
  );
}

// ---------- allotropes of phosphorus ----------
function P({ x, y, fill }) {
  return <Circle cx={x} cy={y} r={7} fill={fill} stroke={O} strokeWidth={1} />;
}
function PhosphorusArt() {
  const t = [[60, 22], [30, 78], [92, 78], [64, 58]];
  const edges = [[0, 1], [0, 2], [0, 3], [1, 2], [1, 3], [2, 3]];
  const chain = range(4, (i) => {
    const x0 = 180 + i * 34;
    return [[x0, 40], [x0 + 16, 64], [x0 - 4, 70], [x0 + 12, 44]];
  });
  return (
    <G>
      {edges.map(([a, b], i) => (
        <Line key={i} x1={t[a][0]} y1={t[a][1]} x2={t[b][0]} y2={t[b][1]} stroke={O} strokeWidth={1.3} strokeDasharray={a === 3 || b === 3 ? '3 2' : undefined} />
      ))}
      {t.map(([x, y], i) => <P key={i} x={x} y={y} fill="#fff4c2" />)}
      <Txt x={60} y={108} size={10} weight="700">White phosphorus</Txt>
      <Txt x={60} y={121} size={8.5}>P₄ molecules; waxy, glows in</Txt>
      <Txt x={60} y={132} size={8.5}>air, very poisonous, kept</Txt>
      <Txt x={60} y={143} size={8.5}>under water</Txt>
      {chain.map((u, i) => (
        <G key={i}>
          {[[0, 1], [0, 2], [0, 3], [1, 2], [1, 3], [2, 3]].map(([a, b], k) => (
            <Line key={k} x1={u[a][0]} y1={u[a][1]} x2={u[b][0]} y2={u[b][1]} stroke={O} strokeWidth={1} />
          ))}
          {i < chain.length - 1 && <Line x1={u[1][0]} y1={u[1][1]} x2={chain[i + 1][2][0]} y2={chain[i + 1][2][1]} stroke="#c8463d" strokeWidth={1.6} />}
          {u.map(([x, y], k) => <P key={k} x={x} y={y} fill="#e88a7a" />)}
        </G>
      ))}
      <Txt x={232} y={108} size={10} weight="700">Red phosphorus</Txt>
      <Txt x={232} y={121} size={8.5}>P₄ units joined in chains;</Txt>
      <Txt x={232} y={132} size={8.5}>a powder, far less poisonous;</Txt>
      <Txt x={232} y={143} size={8.5}>used on match boxes</Txt>
    </G>
  );
}

// ---------- sound: a longitudinal wave ----------
function SoundArt() {
  const lam = 90;
  const xs = range(48, (i) => {
    const x0 = i * 6;
    return 44 + x0 + 6 * Math.sin((2 * Math.PI * x0) / lam);
  });
  return (
    <G>
      <Path d="M8 34 L22 42 L22 74 L8 82 Z" fill="#7d8b97" stroke={O} strokeWidth={1.2} />
      <Rect x={22} y={46} width={8} height={24} fill="#5a6b78" />
      {xs.map((x, i) => (
        <Line key={i} x1={x} y1={34} x2={x} y2={82} stroke="#3f6fb5" strokeWidth={1.4} />
      ))}
      <Line x1={89} y1={96} x2={179} y2={96} stroke={O} strokeWidth={1} />
      <Line x1={89} y1={90} x2={89} y2={102} stroke={O} strokeWidth={1} />
      <Line x1={179} y1={90} x2={179} y2={102} stroke={O} strokeWidth={1} />
      <Txt x={134} y={112} size={9.5}>one wavelength</Txt>
      <Arrow x1={226} y1={112} x2={320} y2={112} c="#2f7d4f" />
      <Txt x={273} y={126} size={9}>direction the sound travels</Txt>
      <Txt x={170} y={146} size={9} italic>Air particles vibrate back and forth along the direction of travel.</Txt>
    </G>
  );
}

// ---------- the Earth's gravitational field ----------
function GravityArt() {
  const cx = 130;
  const cy = 112;
  return (
    <G>
      {range(16, (i) => {
        const a = rad(i * 22.5);
        return <Arrow key={i} x1={cx + 100 * Math.cos(a)} y1={cy + 100 * Math.sin(a)} x2={cx + 50 * Math.cos(a)} y2={cy + 50 * Math.sin(a)} c="#5a6b78" w={1.2} />;
      })}
      <Circle cx={cx} cy={cy} r={44} fill="#6aa0d8" stroke={O} strokeWidth={1.4} />
      <Path d="M104 96 C114 88 126 92 132 100 C138 108 150 104 154 114 C150 124 136 128 124 124 C112 122 104 112 104 96 Z" fill="#7cbf6a" opacity={0.85} />
      <Txt x={cx} y={cy + 4} size={10} weight="700" fill="#ffffff">Earth</Txt>
      <Txt x={cx} y={232} size={9.5}>The field lines point to the centre: a radial field.</Txt>
      <Txt x={cx} y={246} size={9.5}>g = GM/r², so the field is weaker further away.</Txt>
    </G>
  );
}

// ---------- the danger zone for food ----------
const tY = (T) => 210 - (T + 18) * 1.55;
function DangerArt() {
  const bands = [
    [63, 100, '#cfe8c8', 'Hot food kept above 63 °C'],
    [5, 63, '#f6c7bf', 'DANGER ZONE: bacteria multiply fast'],
    [0, 5, '#cfe2f6', 'Fridge (0 to 5 °C): growth slows'],
    [-18, 0, '#e2e8f0', 'Freezer: growth stops (germs not killed)'],
  ];
  return (
    <G>
      {bands.map(([a, b, fill]) => (
        <Rect key={a} x={40} y={tY(b)} width={34} height={tY(a) - tY(b)} fill={fill} stroke={O} strokeWidth={1} />
      ))}
      {[100, 63, 37, 5, 0, -18].map((T) => (
        <G key={T}>
          <Line x1={34} y1={tY(T)} x2={40} y2={tY(T)} stroke={O} strokeWidth={1} />
          <Txt x={30} y={tY(T) + (T === 5 ? 0 : T === 0 ? 7 : 3)} size={8.5} anchor="end">{`${T} °C`}</Txt>
        </G>
      ))}
      {bands.map(([a, b, , text]) => (
        <Txt key={text} x={84} y={a === 5 ? tY(52) : (tY(a) + tY(b)) / 2 + 3} size={9} anchor="start" weight={a === 5 ? '700' : '500'}>
          {text}
        </Txt>
      ))}
      <Txt x={84} y={tY(100) + 3} size={8.5} anchor="start">Boiling kills most germs</Txt>
      <Line x1={74} y1={tY(37)} x2={82} y2={tY(37)} stroke="#c8463d" strokeWidth={1} />
      <Txt x={84} y={tY(37) + 3} size={8.5} anchor="start" fill="#c8463d">fastest near body temperature (37 °C)</Txt>
    </G>
  );
}

// ---------- the fire triangle ----------
function FireArt() {
  return (
    <G>
      <Polygon points="130,16 40,156 220,156" fill="#fde7c8" stroke="#c8463d" strokeWidth={3} />
      <Path d="M130 80 C116 98 116 118 130 128 C144 118 144 98 130 80 Z" fill="#f2a33d" />
      <Path d="M130 100 C124 110 124 120 130 124 C136 120 136 110 130 100 Z" fill="#f6d77a" />
      <Txt x={70} y={84} size={12} weight="700" rotate={-57}>HEAT</Txt>
      <Txt x={190} y={84} size={12} weight="700" rotate={57}>OXYGEN</Txt>
      <Txt x={130} y={174} size={12} weight="700">FUEL</Txt>
      <Txt x={130} y={194} size={9} italic>Take away any one side and the fire goes out.</Txt>
    </G>
  );
}

// ---------- a food label ----------
const LABEL_LINES = [
  ['MAIZE FLOUR', 14, '700'],
  ['Ingredients: maize (100%)', 9.5],
  ['Net weight: 1 kg', 9.5],
  ['Nutrition per 100 g: energy 1500 kJ,', 9],
  ['carbohydrate 75 g, protein 8 g, fat 3.5 g', 9],
  ['Best before: 30 June 2027', 9.5, '700'],
  ['Store in a cool, dry place', 9.5],
  ['Made by: name and address of the maker', 9],
  ['Batch number: 2611A', 9],
];
function LabelArt() {
  return (
    <G>
      <Rect x={10} y={6} width={220} height={206} rx={6} fill="#fffaf0" stroke={O} strokeWidth={1.4} />
      {LABEL_LINES.map(([t, size, weight], i) => (
        <Txt key={i} x={120} y={30 + i * 21 + (i > 3 ? -4 : 0)} size={size} weight={weight || '500'}>
          {t}
        </Txt>
      ))}
    </G>
  );
}

// ---------- methods of cooking ----------
function Flame({ x, y }) {
  return <Path d={`M${x} ${y} C${x - 8} ${y - 8} ${x - 2} ${y - 14} ${x} ${y - 20} C${x + 2} ${y - 14} ${x + 8} ${y - 8} ${x} ${y} Z`} fill="#f2a33d" />;
}
function CookingArt() {
  return (
    <G>
      {/* boiling */}
      <Path d="M14 40 L74 40 L70 96 L18 96 Z" fill="#dcecf7" stroke={O} strokeWidth={1.3} />
      <Ellipse cx={44} cy={78} rx={14} ry={9} fill="#e6c27a" stroke={O} strokeWidth={1} />
      {[28, 52, 62].map((x, i) => <Circle key={i} cx={x} cy={58 + i * 6} r={2.5} fill="#ffffff" stroke="#7d9cbf" strokeWidth={0.8} />)}
      <Flame x={34} y={116} />
      <Flame x={54} y={116} />
      <Txt x={44} y={134} size={10} weight="700">Boiling</Txt>
      <Txt x={44} y={146} size={8}>in water at 100 °C</Txt>
      {/* steaming */}
      <Path d="M98 40 L158 40 L154 96 L102 96 Z" fill="#ffffff" stroke={O} strokeWidth={1.3} />
      <Rect x={100} y={80} width={56} height={16} fill="#dcecf7" />
      <Line x1={100} y1={74} x2={156} y2={74} stroke={O} strokeWidth={1.2} strokeDasharray="3 2" />
      <Ellipse cx={128} cy={64} rx={16} ry={8} fill="#7cbf6a" stroke={O} strokeWidth={1} />
      <Path d="M96 38 Q128 26 160 38 Z" fill="#c4ccd3" stroke={O} strokeWidth={1.2} />
      {[112, 144].map((x) => <Path key={x} d={`M${x} 72 C${x - 4} 62 ${x + 4} 56 ${x} 48`} fill="none" stroke="#9aa7b2" strokeWidth={1} />)}
      <Flame x={118} y={116} />
      <Flame x={138} y={116} />
      <Txt x={128} y={134} size={10} weight="700">Steaming</Txt>
      <Txt x={128} y={146} size={8}>in the steam above water</Txt>
      {/* frying */}
      <Path d="M176 82 L240 82 L234 96 L182 96 Z" fill="#f6e2a0" stroke={O} strokeWidth={1.3} />
      <Line x1={240} y1={84} x2={262} y2={76} stroke={O} strokeWidth={3} strokeLinecap="round" />
      <Ellipse cx={200} cy={86} rx={10} ry={5} fill="#d9a14a" stroke={O} strokeWidth={1} />
      <Ellipse cx={220} cy={86} rx={10} ry={5} fill="#d9a14a" stroke={O} strokeWidth={1} />
      <Flame x={198} y={116} />
      <Flame x={218} y={116} />
      <Txt x={210} y={134} size={10} weight="700">Frying</Txt>
      <Txt x={210} y={146} size={8}>in hot oil</Txt>
      {/* baking */}
      <Rect x={270} y={40} width={66} height={64} rx={4} fill="#eef1f4" stroke={O} strokeWidth={1.3} />
      <Rect x={278} y={78} width={50} height={6} fill="#7d8b97" />
      <Path d="M286 78 C286 64 318 64 318 78 Z" fill="#d9a14a" stroke={O} strokeWidth={1} />
      {[282, 324].map((x) => <Path key={x} d={`M${x} 98 C${x - 4} 86 ${x + 4} 74 ${x} 60`} fill="none" stroke="#c8463d" strokeWidth={1} />)}
      <Txt x={303} y={134} size={10} weight="700">Baking</Txt>
      <Txt x={303} y={146} size={8}>by hot air in an oven</Txt>
    </G>
  );
}

export const SCIENCE_2 = {
  'hiv-structure': {
    title: 'The structure of HIV (much enlarged)',
    w: 240,
    h: 214,
    art: HivArt,
    labels: [
      ['Glycoprotein\nspikes', 232, 34, 180, 50],
      ['Envelope (from the\nhost cell membrane)', 232, 110, 191, 110],
      ['Capsid (protein\ncoat)', 232, 168, 147, 140],
      ['Matrix protein', 8, 52, 79, 69],
      ['RNA (its genes)', 8, 98, 113, 100],
      ['Reverse\ntranscriptase', 8, 142, 104, 118],
    ],
  },
  'ruminant-stomach': {
    title: 'The four-chambered stomach of a ruminant (cow, goat, sheep)',
    w: 314,
    h: 176,
    art: RuminantArt,
    labels: [
      ['Oesophagus', 104, 10, 145, 18],
      ['Reticulum', 228, 34, 186, 52],
      ['Back to the mouth\nto chew the cud', 228, 8, 172, 24],
      ['Abomasum\n(true stomach)', 272, 186, 262, 150],
      ['Small intestine', 314, 148, 304, 152],
    ],
  },
  'water-culture': { title: 'Water culture: seedlings grown in solutions lacking one mineral', w: 340, h: 196, art: WaterCultureArt, labels: [] },
  'bee-castes': { title: 'The castes of honey bees', w: 340, h: 122, art: BeesArt, labels: [] },
  'balancing-equation': { title: 'A balanced equation: 2H₂ + O₂ → 2H₂O', w: 350, h: 136, art: EquationArt, labels: [] },
  'phosphorus-allotropes': { title: 'The two allotropes of phosphorus', w: 320, h: 150, art: PhosphorusArt, labels: [] },
  'sound-wave': {
    title: 'Sound: a longitudinal wave of compressions and rarefactions',
    w: 336,
    h: 152,
    art: SoundArt,
    labels: [
      ['Compression', 175, 6, 175, 34],
      ['Rarefaction', 262, 6, 220, 34],
      ['Vibrating\nloudspeaker', 2, 110, 16, 80],
    ],
  },
  'gravity-field': { title: 'The gravitational field around the Earth', w: 260, h: 252, art: GravityArt, labels: [] },
  'danger-zone': { title: 'Temperature and the growth of bacteria in food', w: 300, h: 222, art: DangerArt, labels: [] },
  'fire-triangle': { title: 'The fire triangle', w: 260, h: 200, art: FireArt, labels: [] },
  'food-label': {
    title: 'Reading a food label',
    w: 240,
    h: 218,
    art: LabelArt,
    labels: [
      ['Product name', 250, 26, 210, 26],
      ['List of what it contains', 250, 50, 196, 47],
      ['Amount in the pack', 250, 72, 172, 68],
      ['Nutrition information', 250, 96, 226, 93],
      ['Check before buying', 250, 128, 196, 131],
      ['How to store it', 250, 152, 196, 152],
      ['Who made it', 250, 174, 226, 173],
    ],
  },
  'cooking-methods': { title: 'Four methods of cooking', w: 342, h: 150, art: CookingArt, labels: [] },
};
