// Labelled Chemistry diagrams: particles, separation, atoms and bonding, charts,
// industrial processes and organic structures.
import { Circle, G, Line, Path, Polygon, Rect } from 'react-native-svg';
import { Head, Txt } from './Diagram';
import { Beaker, Bunsen, ConicalFlask, O, TestTube, Thermometer, WATER } from './kit';

const range = (n, f) => Array.from({ length: n }, (_, i) => f(i));

function Arrow({ x1, y1, x2, y2, c = O, w = 1.3 }) {
  return (
    <G>
      <Line x1={x1} y1={y1} x2={x2} y2={y2} stroke={c} strokeWidth={w} />
      <Head x={x2} y={y2} dx={x2 - x1} dy={y2 - y1} size={6} fill={c} />
    </G>
  );
}

// An atom drawn for structural formulae: a circle with its symbol.
function Atom({ x, y, s, r = 11, fill = '#ffffff' }) {
  return (
    <G>
      <Circle cx={x} cy={y} r={r} fill={fill} stroke={O} strokeWidth={1.1} />
      <Txt x={x} y={y + 4} size={10} weight="700">{s}</Txt>
    </G>
  );
}
const Bond = ({ x1, y1, x2, y2, n = 1 }) => {
  const dx = x2 - x1;
  const dy = y2 - y1;
  const len = Math.hypot(dx, dy) || 1;
  const ox = (-dy / len) * 3;
  const oy = (dx / len) * 3;
  if (n === 1) return <Line x1={x1} y1={y1} x2={x2} y2={y2} stroke={O} strokeWidth={1.4} />;
  return (
    <G>
      <Line x1={x1 + ox} y1={y1 + oy} x2={x2 + ox} y2={y2 + oy} stroke={O} strokeWidth={1.4} />
      <Line x1={x1 - ox} y1={y1 - oy} x2={x2 - ox} y2={y2 - oy} stroke={O} strokeWidth={1.4} />
    </G>
  );
};

// ---------- particles ----------
function ParticlesArt() {
  const box = (x) => <Rect x={x} y={40} width={90} height={100} fill="#f8fbfd" stroke={O} strokeWidth={1.4} />;
  const p = (x, y, k) => <Circle key={k} cx={x} cy={y} r={8} fill="#7fa7d4" stroke={O} strokeWidth={0.9} />;
  const liquid = [[22, 131], [39, 132], [56, 130], [73, 132], [90, 131], [30, 116], [47, 117], [64, 115], [82, 117], [38, 101], [57, 100], [74, 102]];
  const gas = [[22, 60], [70, 52], [44, 92], [82, 104], [28, 128], [64, 126]];
  return (
    <G>
      {box(10)}
      {box(135)}
      {box(260)}
      {range(4, (r) => range(5, (c) => p(23 + c * 16, 132 - r * 16, `s${r}${c}`)))}
      {liquid.map(([x, y], i) => p(125 + x, y, `l${i}`))}
      {gas.map(([x, y], i) => (
        <G key={`g${i}`}>
          {p(250 + x, y, `gp${i}`)}
          <Arrow x1={250 + x + 9} y1={y - 4} x2={250 + x + 20} y2={y - 11} w={1} />
        </G>
      ))}
      <Arrow x1={103} y1={90} x2={131} y2={90} />
      <Arrow x1={228} y1={90} x2={256} y2={90} />
      <Txt x={117} y={82} size={8}>melts</Txt>
      <Txt x={242} y={82} size={8}>boils</Txt>
      <Txt x={55} y={160} size={11} weight="700">Solid</Txt>
      <Txt x={180} y={160} size={11} weight="700">Liquid</Txt>
      <Txt x={305} y={160} size={11} weight="700">Gas</Txt>
    </G>
  );
}

// ---------- separation ----------
function FiltrationArt() {
  return (
    <G>
      <ConicalFlask x={105} y={150} w={90} h={86} level={0.32} fill="#e6f1fa" />
      <Path d="M108 58 L192 58 L156 118 L156 150 L144 150 L144 118 Z" fill="#f4f9fc" stroke={O} strokeWidth={1.5} />
      <Path d="M116 62 L184 62 L150 114 Z" fill="#ffffff" stroke="#9aa3ab" strokeWidth={1} />
      <Path d="M122 70 L178 70 L150 112 Z" fill="#e6f1fa" />
      <Path d="M140 100 L160 100 L150 112 Z" fill="#c9a36b" />
      {[[150, 158], [150, 168]].map(([x, y], i) => (
        <Circle key={i} cx={x} cy={y} r={2} fill="#9cc3e6" />
      ))}
    </G>
  );
}

function DistillationArt() {
  return (
    <G>
      {/* flask on a tripod and gauze, heated */}
      <Rect x={40} y={176} width={80} height={4} fill="#9aa3ab" />
      <Line x1={48} y1={180} x2={40} y2={262} stroke={O} strokeWidth={2.5} />
      <Line x1={112} y1={180} x2={120} y2={262} stroke={O} strokeWidth={2.5} />
      <Bunsen x={80} y={226} h={40} />
      <Path d="M80 176 A34 34 0 0 0 114 142" fill="none" />
      <Circle cx={80} cy={142} r={34} fill="#f4f9fc" stroke={O} strokeWidth={1.5} />
      <Path d="M48 152 A34 34 0 0 0 112 152 Z" fill="#cfe6f5" />
      <Rect x={73} y={70} width={14} height={42} fill="#f4f9fc" stroke={O} strokeWidth={1.5} />
      <Rect x={74.5} y={104} width={11} height={12} fill="#f4f9fc" />
      <Thermometer x={80} y={30} h={60} fill={0.7} />
      {/* side arm into the condenser */}
      <Polygon points="87,80 140,96 140,104 87,88" fill="#f4f9fc" stroke={O} strokeWidth={1.2} />
      {/* Liebig condenser: outer water jacket and inner tube */}
      <Polygon points="132,84 300,140 294,158 126,102" fill="#dcecf8" stroke={O} strokeWidth={1.4} />
      <Line x1={130} y1={96} x2={306} y2={152} stroke={O} strokeWidth={1} />
      <Line x1={132} y1={102} x2={306} y2={158} stroke={O} strokeWidth={1} />
      <Rect x={150} y={70} width={8} height={22} fill="#dcecf8" stroke={O} strokeWidth={1} transform="rotate(18 154 81)" />
      <Rect x={270} y={152} width={8} height={22} fill="#dcecf8" stroke={O} strokeWidth={1} transform="rotate(18 274 163)" />
      <Arrow x1={160} y1={62} x2={160} y2={48} c="#3f6fb5" />
      <Arrow x1={276} y1={190} x2={276} y2={176} c="#3f6fb5" />
      {/* adapter and receiver with distillate */}
      <Path d="M300 153 C312 157 320 162 320 188" fill="none" stroke={O} strokeWidth={5} />
      <Path d="M300 153 C312 157 320 162 320 188" fill="none" stroke="#f4f9fc" strokeWidth={3} />
      <ConicalFlask x={290} y={172} w={60} h={70} level={0.3} fill="#e6f1fa" />
      <Circle cx={320} cy={196} r={2} fill="#9cc3e6" />
    </G>
  );
}

function ChromatographyArt() {
  return (
    <G>
      <Beaker x={110} y={40} w={140} h={180} level={0.12} fill="#e6f1fa" />
      <Rect x={160} y={20} width={40} height={10} fill="#a5adb5" stroke={O} strokeWidth={0.8} />
      <Rect x={164} y={30} width={32} height={176} fill="#fffdf6" stroke={O} strokeWidth={1} />
      <Line x1={164} y1={72} x2={196} y2={72} stroke="#9aa3ab" strokeWidth={1} strokeDasharray="3 2" />
      <Line x1={164} y1={186} x2={196} y2={186} stroke={O} strokeWidth={0.9} />
      <Circle cx={180} cy={186} r={2.5} fill="#55606b" />
      <Circle cx={180} cy={160} r={5} fill="#e0a43a" />
      <Circle cx={180} cy={128} r={5} fill="#d94a4a" />
      <Circle cx={180} cy={96} r={5} fill="#3f6fb5" />
    </G>
  );
}

function FractionalArt() {
  return (
    <G>
      <Circle cx={80} cy={190} r={32} fill="#f4f9fc" stroke={O} strokeWidth={1.5} />
      <Path d="M50 198 A32 32 0 0 0 110 198 Z" fill="#e8d6b8" />
      <Rect x={72} y={60} width={16} height={104} fill="#f4f9fc" stroke={O} strokeWidth={1.4} />
      {range(9, (i) => (
        <Circle key={i} cx={80} cy={72 + i * 10} r={4} fill="#ffffff" stroke={O} strokeWidth={0.7} />
      ))}
      <Thermometer x={80} y={18} h={56} fill={0.55} />
      <Polygon points="88,52 180,82 180,90 88,60" fill="#f4f9fc" stroke={O} strokeWidth={1.2} />
      <Polygon points="168,74 300,118 294,136 162,92" fill="#dcecf8" stroke={O} strokeWidth={1.4} />
      <Line x1={166} y1={86} x2={306} y2={132} stroke={O} strokeWidth={1} />
      <Path d="M300 129 C312 133 318 140 318 168" fill="none" stroke={O} strokeWidth={5} />
      <Path d="M300 129 C312 133 318 140 318 168" fill="none" stroke="#f4f9fc" strokeWidth={3} />
      <ConicalFlask x={290} y={152} w={56} h={64} level={0.3} fill="#f4f9fc" />
      <Rect x={58} y={222} width={44} height={10} rx={3} fill="#8d969f" stroke={O} strokeWidth={1} />
    </G>
  );
}

// ---------- atoms ----------
function AtomArt() {
  const shells = [
    [24, 2],
    [44, 8],
    [64, 1],
  ];
  return (
    <G>
      {shells.map(([r]) => (
        <Circle key={r} cx={160} cy={110} r={r} fill="none" stroke="#7a8794" strokeWidth={1.1} />
      ))}
      <Circle cx={160} cy={110} r={12} fill="#f2c7c0" stroke={O} strokeWidth={1.2} />
      <Txt x={160} y={108} size={7} weight="700">11 p</Txt>
      <Txt x={160} y={117} size={7} weight="700">12 n</Txt>
      {shells.map(([r, n]) =>
        range(n, (i) => {
          const a = (i / n) * Math.PI * 2 - Math.PI / 2 + (n === 1 ? Math.PI / 4 : 0);
          const x = 160 + r * Math.cos(a);
          const y = 110 + r * Math.sin(a);
          return (
            <G key={`${r}-${i}`}>
              <Circle cx={x} cy={y} r={4.5} fill="#3f6fb5" stroke={O} strokeWidth={0.8} />
              <Line x1={x - 2.2} y1={y} x2={x + 2.2} y2={y} stroke="#ffffff" strokeWidth={1} />
            </G>
          );
        })
      )}
      <Txt x={160} y={196} size={11} weight="700">Sodium, Na: 2, 8, 1</Txt>
    </G>
  );
}

const PT = [
  ['H', 1, 1], ['He', 18, 1],
  ['Li', 1, 2], ['Be', 2, 2], ['B', 13, 2], ['C', 14, 2], ['N', 15, 2], ['O', 16, 2], ['F', 17, 2], ['Ne', 18, 2],
  ['Na', 1, 3], ['Mg', 2, 3], ['Al', 13, 3], ['Si', 14, 3], ['P', 15, 3], ['S', 16, 3], ['Cl', 17, 3], ['Ar', 18, 3],
  ['K', 1, 4], ['Ca', 2, 4], ['Br', 17, 4], ['Kr', 18, 4],
];
function PeriodicArt() {
  const COL = { 1: 0, 2: 1, 13: 6, 14: 7, 15: 8, 16: 9, 17: 10, 18: 11 };
  const fill = (g) => (g === 1 ? '#f6d5c5' : g === 2 ? '#f6e3c5' : g === 17 ? '#d8ecd0' : g === 18 ? '#dde3f3' : '#f4f6f8');
  const x = (g) => 20 + COL[g] * 32;
  const y = (p) => 26 + (p - 1) * 34;
  return (
    <G>
      {PT.filter(([, g]) => COL[g] !== undefined).map(([sym, g, p]) => (
        <G key={sym}>
          <Rect x={x(g)} y={y(p)} width={30} height={30} fill={fill(g)} stroke={O} strokeWidth={0.9} />
          <Txt x={x(g) + 15} y={y(p) + 19} size={11} weight="700">{sym}</Txt>
        </G>
      ))}
      <Rect x={84} y={y(4)} width={126} height={30} fill="#ece6f5" stroke={O} strokeWidth={0.9} />
      <Txt x={147} y={y(4) + 13} size={9} weight="700">Transition metals</Txt>
      <Txt x={147} y={y(4) + 25} size={9}>Fe, Cu, Zn ...</Txt>
      {[['I', 1], ['II', 2], ['III', 13], ['IV', 14], ['V', 15], ['VI', 16], ['VII', 17], ['0', 18]].map(([t, g]) => (
        <Txt key={t} x={x(g) + 15} y={18} size={9} weight="700">{t}</Txt>
      ))}
    </G>
  );
}

// ---------- bonding ----------
function DotCross({ x, y, sym, r, outer, mark, fill = '#ffffff', charge }) {
  return (
    <G>
      <Circle cx={x} cy={y} r={r} fill={fill} stroke={O} strokeWidth={1.2} />
      <Txt x={x} y={y + 4} size={11} weight="700">{sym}</Txt>
      {outer.map(([a], i) => {
        const px = x + r * Math.cos(a);
        const py = y + r * Math.sin(a);
        return mark === 'x' ? (
          <G key={i}>
            <Line x1={px - 2.5} y1={py - 2.5} x2={px + 2.5} y2={py + 2.5} stroke="#c8463d" strokeWidth={1.4} />
            <Line x1={px - 2.5} y1={py + 2.5} x2={px + 2.5} y2={py - 2.5} stroke="#c8463d" strokeWidth={1.4} />
          </G>
        ) : (
          <Circle key={i} cx={px} cy={py} r={2.4} fill="#3f6fb5" />
        );
      })}
      {charge && <Txt x={x + r + 4} y={y - r + 2} size={11} weight="700" anchor="start">{charge}</Txt>}
    </G>
  );
}
function IonicArt() {
  const eight = range(8, (i) => [(i / 8) * Math.PI * 2 + Math.PI / 8]);
  return (
    <G>
      <Path d="M16 30 L8 30 L8 150 L16 150 M110 30 L118 30 L118 150 L110 150" stroke={O} strokeWidth={1.3} fill="none" />
      <DotCross x={63} y={90} sym="Na" r={34} outer={eight} mark="x" charge="+" />
      <Path d="M190 30 L182 30 L182 150 L190 150 M310 30 L318 30 L318 150 L310 150" stroke={O} strokeWidth={1.3} fill="none" />
      <DotCross x={250} y={90} sym="Cl" r={34} outer={eight.slice(0, 7)} mark="dot" charge="−" />
      {(() => {
        const a = eight[7][0];
        const px = 250 + 34 * Math.cos(a);
        const py = 90 + 34 * Math.sin(a);
        return (
          <G>
            <Line x1={px - 2.5} y1={py - 2.5} x2={px + 2.5} y2={py + 2.5} stroke="#c8463d" strokeWidth={1.4} />
            <Line x1={px - 2.5} y1={py + 2.5} x2={px + 2.5} y2={py - 2.5} stroke="#c8463d" strokeWidth={1.4} />
          </G>
        );
      })()}
      <Txt x={63} y={166} size={10}>2, 8 (like neon)</Txt>
      <Txt x={250} y={166} size={10}>2, 8, 8 (like argon)</Txt>
    </G>
  );
}
function CovalentArt() {
  // water: O with two H, sharing one pair each; outer shell drawn as overlapping circles
  return (
    <G>
      <Circle cx={90} cy={90} r={34} fill="#fbeeee" stroke={O} strokeWidth={1.2} />
      <Circle cx={46} cy={130} r={20} fill="#eef4fb" stroke={O} strokeWidth={1.2} />
      <Circle cx={134} cy={130} r={20} fill="#eef4fb" stroke={O} strokeWidth={1.2} />
      <Txt x={90} y={94} size={12} weight="700">O</Txt>
      <Txt x={40} y={140} size={11} weight="700">H</Txt>
      <Txt x={140} y={140} size={11} weight="700">H</Txt>
      {/* shared pairs */}
      <Circle cx={64} cy={112} r={2.4} fill="#3f6fb5" />
      <G>
        <Line x1={58} y1={113} x2={63} y2={118} stroke="#c8463d" strokeWidth={1.4} />
        <Line x1={58} y1={118} x2={63} y2={113} stroke="#c8463d" strokeWidth={1.4} />
      </G>
      <Circle cx={116} cy={112} r={2.4} fill="#3f6fb5" />
      <G>
        <Line x1={117} y1={113} x2={122} y2={118} stroke="#c8463d" strokeWidth={1.4} />
        <Line x1={117} y1={118} x2={122} y2={113} stroke="#c8463d" strokeWidth={1.4} />
      </G>
      {/* two lone pairs on oxygen */}
      {[[78, 58], [90, 56], [102, 58], [114, 64]].map(([x, y], i) => (
        <Circle key={i} cx={x} cy={y} r={2.4} fill="#3f6fb5" />
      ))}
      {/* methane, displayed formula */}
      <Bond x1={260} y1={90} x2={260} y2={50} />
      <Bond x1={260} y1={90} x2={260} y2={130} />
      <Bond x1={260} y1={90} x2={220} y2={90} />
      <Bond x1={260} y1={90} x2={300} y2={90} />
      <Atom x={260} y={90} s="C" r={12} fill="#e5e7ea" />
      <Atom x={260} y={42} s="H" r={9} />
      <Atom x={260} y={138} s="H" r={9} />
      <Atom x={212} y={90} s="H" r={9} />
      <Atom x={308} y={90} s="H" r={9} />
      <Txt x={90} y={178} size={11} weight="700">Water, H₂O</Txt>
      <Txt x={260} y={178} size={11} weight="700">Methane, CH₄</Txt>
    </G>
  );
}
function GiantArt() {
  // diamond: each C joined to four; graphite: hexagonal layers
  const hex = (cx, cy, r) => range(6, (i) => [cx + r * Math.cos((i * Math.PI) / 3), cy + r * Math.sin((i * Math.PI) / 3)]);
  const layer = (y) => (
    <G key={y}>
      {[60, 96, 132].map((x) => {
        const pts = hex(x + 200, y, 18);
        return (
          <G key={x}>
            <Polygon points={pts.map((p) => p.join(',')).join(' ')} fill="none" stroke={O} strokeWidth={1.2} />
            {pts.map(([px, py], i) => (
              <Circle key={i} cx={px} cy={py} r={3.2} fill="#55606b" />
            ))}
          </G>
        );
      })}
    </G>
  );
  const D = [[80, 40], [50, 70], [110, 70], [80, 100], [50, 130], [110, 130], [20, 100], [140, 100], [80, 160]];
  const E = [[0, 1], [0, 2], [1, 3], [2, 3], [3, 4], [3, 5], [1, 6], [2, 7], [4, 8], [5, 8], [6, 4], [7, 5]];
  return (
    <G>
      {E.map(([a, b], i) => (
        <Line key={i} x1={D[a][0]} y1={D[a][1]} x2={D[b][0]} y2={D[b][1]} stroke={O} strokeWidth={1.3} />
      ))}
      {D.map(([x, y], i) => (
        <Circle key={i} cx={x} cy={y} r={5} fill="#55606b" />
      ))}
      {layer(52)}
      {layer(112)}
      <Line x1={226} y1={70} x2={226} y2={96} stroke={O} strokeWidth={0.8} strokeDasharray="3 3" />
      <Line x1={346} y1={70} x2={346} y2={96} stroke={O} strokeWidth={0.8} strokeDasharray="3 3" />
      <Txt x={80} y={190} size={11} weight="700">Diamond</Txt>
      <Txt x={296} y={190} size={11} weight="700">Graphite</Txt>
    </G>
  );
}

// ---------- moles ----------
function MoleMapArt() {
  const box = (x, y, w, text, fill) => (
    <G>
      <Rect x={x} y={y} width={w} height={40} rx={6} fill={fill} stroke={O} strokeWidth={1.2} />
      {text.split('\n').map((t, i, a) => (
        <Txt key={i} x={x + w / 2} y={y + 24 + (i - (a.length - 1) / 2) * 12} size={10} weight="700">{t}</Txt>
      ))}
    </G>
  );
  return (
    <G>
      {box(170, 95, 100, 'Moles', '#dcecf8')}
      {box(10, 95, 90, 'Mass in g', '#f6e3c5')}
      {box(340, 95, 100, 'Number of\nparticles', '#ece6f5')}
      {box(170, 10, 100, 'Gas volume\nin dm³ (r.t.p.)', '#d8ecd0')}
      {box(170, 180, 100, 'Solution\nin dm³', '#f6d5c5')}
      <Arrow x1={100} y1={108} x2={168} y2={108} />
      <Arrow x1={168} y1={122} x2={102} y2={122} />
      <Arrow x1={270} y1={108} x2={338} y2={108} />
      <Arrow x1={338} y1={122} x2={272} y2={122} />
      <Arrow x1={212} y1={93} x2={212} y2={52} />
      <Arrow x1={228} y1={52} x2={228} y2={93} />
      <Arrow x1={212} y1={178} x2={212} y2={137} />
      <Arrow x1={228} y1={137} x2={228} y2={178} />
    </G>
  );
}

// ---------- acids ----------
function TitrationArt() {
  return (
    <G>
      <Rect x={26} y={232} width={74} height={8} rx={2} fill="#a5adb5" stroke={O} strokeWidth={1} />
      <Rect x={77} y={20} width={5} height={212} fill="#c4cbd2" stroke={O} strokeWidth={1} />
      <Rect x={82} y={56} width={58} height={4} fill="#a5adb5" stroke={O} strokeWidth={0.8} />
      <Rect x={138} y={20} width={14} height={140} fill="#fbe9e9" stroke={O} strokeWidth={1.3} />
      <Rect x={138} y={46} width={14} height={114} fill="#f1f6fb" />
      {range(11, (i) => (
        <Line key={i} x1={138} y1={30 + i * 12} x2={138 + (i % 5 ? 4 : 7)} y2={30 + i * 12} stroke={O} strokeWidth={0.7} />
      ))}
      <Rect x={133} y={163} width={24} height={4} rx={1.5} fill="#5f6b75" />
      <Path d="M143 160 L144 178 L146 178 L147 160" fill="#f1f6fb" stroke={O} strokeWidth={0.9} />
      <ConicalFlask x={110} y={176} w={70} h={56} level={0.35} fill="#f6c3dc" />
      <Rect x={104} y={233} width={82} height={6} fill="#ffffff" stroke={O} strokeWidth={1} />
    </G>
  );
}
function PhScaleArt() {
  const colours = ['#d8262c', '#e8432b', '#f06a2a', '#f39b2a', '#f2c42c', '#d9d92c', '#9ccc3c', '#3fa648', '#2e9b8e', '#2f7fbf', '#3359a8', '#4b3f9a', '#5d2f8e', '#6b2a7e', '#5a2370'];
  return (
    <G>
      {colours.map((c, i) => (
        <G key={i}>
          <Rect x={20 + i * 22} y={60} width={22} height={34} fill={c} stroke={O} strokeWidth={0.6} />
          <Txt x={31 + i * 22} y={81} size={10} weight="700" fill={i >= 3 && i <= 6 ? '#1f2a33' : '#ffffff'}>{i}</Txt>
        </G>
      ))}
      <Txt x={86} y={176} size={10} weight="700">Acidic</Txt>
      <Txt x={185} y={176} size={10} weight="700">Neutral</Txt>
      <Txt x={284} y={176} size={10} weight="700">Alkaline</Txt>
    </G>
  );
}

// ---------- electrolysis ----------
function ElectrolysisArt() {
  return (
    <G>
      <Beaker x={90} y={90} w={180} h={120} level={0.75} fill="#dce9f6" />
      <Rect x={124} y={60} width={14} height={120} fill="#55606b" stroke={O} strokeWidth={1} />
      <Rect x={222} y={60} width={14} height={120} fill="#55606b" stroke={O} strokeWidth={1} />
      <Path d="M131 60 L131 30 L170 30 M190 30 L229 30 L229 60" fill="none" stroke={O} strokeWidth={1.3} />
      <Line x1={174} y1={18} x2={174} y2={42} stroke={O} strokeWidth={1.6} />
      <Line x1={182} y1={24} x2={182} y2={36} stroke={O} strokeWidth={3} />
      <Txt x={164} y={20} size={11} weight="700">+</Txt>
      <Txt x={194} y={20} size={11} weight="700">−</Txt>
      {/* ions moving to the electrodes */}
      {[[160, 140, '−', -1], [176, 168, '−', -1], [198, 132, '+', 1], [190, 186, '+', 1]].map(([x, y, s, d], i) => (
        <G key={i}>
          <Circle cx={x} cy={y} r={7} fill={s === '+' ? '#f2c7c0' : '#c9dcf0'} stroke={O} strokeWidth={0.8} />
          <Txt x={x} y={y + 4} size={10} weight="700">{s}</Txt>
          <Arrow x1={x + d * 9} y1={y} x2={x + d * 22} y2={y} w={1} />
        </G>
      ))}
      {[[128, 120], [134, 104], [130, 88]].map(([x, y], i) => (
        <Circle key={`a${i}`} cx={x} cy={y} r={2.2} fill="#ffffff" stroke={O} strokeWidth={0.6} />
      ))}
      {[[232, 120], [226, 104], [230, 88]].map(([x, y], i) => (
        <Circle key={`c${i}`} cx={x} cy={y} r={2.2} fill="#ffffff" stroke={O} strokeWidth={0.6} />
      ))}
    </G>
  );
}

// ---------- rates and energy ----------
function RateGraphArt() {
  const X0 = 50;
  const Y0 = 180;
  const curve = (k) => range(41, (i) => {
    const t = i * 5;
    return `${i ? 'L' : 'M'}${X0 + t * 1.25} ${Y0 - 130 * (1 - Math.exp(-k * t))}`;
  }).join(' ');
  return (
    <G>
      <Line x1={X0} y1={Y0} x2={X0 + 260} y2={Y0} stroke={O} strokeWidth={1.3} />
      <Line x1={X0} y1={Y0} x2={X0} y2={30} stroke={O} strokeWidth={1.3} />
      <Path d={curve(0.035)} fill="none" stroke="#c8463d" strokeWidth={2} />
      <Path d={curve(0.012)} fill="none" stroke="#3f6fb5" strokeWidth={2} />
      <Line x1={X0} y1={Y0} x2={X0 + 70} y2={Y0 - 125} stroke={O} strokeWidth={0.9} strokeDasharray="4 3" />
      <Line x1={X0} y1={50} x2={X0 + 260} y2={50} stroke="#9aa3ab" strokeWidth={0.8} strokeDasharray="3 3" />
      <Txt x={X0 + 130} y={Y0 + 26} size={10} weight="700">Time / s</Txt>
      <Txt x={20} y={110} size={10} weight="700" rotate={-90}>Volume of gas / cm³</Txt>
    </G>
  );
}
function EnergyProfileArt() {
  return (
    <G>
      <Line x1={40} y1={190} x2={40} y2={20} stroke={O} strokeWidth={1.3} />
      <Line x1={40} y1={190} x2={300} y2={190} stroke={O} strokeWidth={1.3} />
      <Path d="M50 120 L110 120 C150 120 150 50 180 50 C210 50 210 160 250 160 L292 160" fill="none" stroke="#c8463d" strokeWidth={2} />
      <Path d="M90 120 L90 52" stroke={O} strokeWidth={0.9} />
      <Head x={90} y={52} dx={0} dy={-1} size={5} />
      <Path d="M276 120 L276 158" stroke={O} strokeWidth={0.9} />
      <Head x={276} y={158} dx={0} dy={1} size={5} />
      <Line x1={250} y1={120} x2={292} y2={120} stroke="#9aa3ab" strokeWidth={0.8} strokeDasharray="3 3" />
      <Txt x={170} y={214} size={10} weight="700">Progress of the reaction</Txt>
      <Txt x={22} y={105} size={10} weight="700" rotate={-90}>Energy</Txt>
    </G>
  );
}

// ---------- metals ----------
function BlastFurnaceArt() {
  return (
    <G>
      <Path d="M150 30 L210 30 L236 150 L230 220 L130 220 L124 150 Z" fill="#e7dfd6" stroke={O} strokeWidth={1.6} />
      <Path d="M138 30 L222 30 L214 14 L146 14 Z" fill="#c4cbd2" stroke={O} strokeWidth={1.2} />
      {range(18, (i) => (
        <Circle key={i} cx={152 + (i % 6) * 11} cy={52 + Math.floor(i / 6) * 22 + (i % 2) * 6} r={4} fill={['#7d2f27', '#2f2f2f', '#d8d0c4'][i % 3]} stroke={O} strokeWidth={0.5} />
      ))}
      <Rect x={132} y={186} width={96} height={16} fill="#e3b04a" />
      <Rect x={131} y={202} width={98} height={17} fill="#e85d2a" />
      <Rect x={96} y={150} width={30} height={10} fill="#c4cbd2" stroke={O} strokeWidth={1} />
      <Rect x={234} y={150} width={30} height={10} fill="#c4cbd2" stroke={O} strokeWidth={1} />
      <Head x={128} y={155} dx={1} dy={0} size={6} />
      <Head x={232} y={155} dx={-1} dy={0} size={6} />
      <Rect x={228} y={190} width={36} height={7} fill="#e3b04a" stroke={O} strokeWidth={0.8} />
      <Rect x={96} y={206} width={36} height={7} fill="#e85d2a" stroke={O} strokeWidth={0.8} />
      <Rect x={214} y={4} width={40} height={8} fill="#c4cbd2" stroke={O} strokeWidth={0.8} />
    </G>
  );
}
function ReactivityArt() {
  const metals = ['Potassium', 'Sodium', 'Calcium', 'Magnesium', 'Aluminium', '(Carbon)', 'Zinc', 'Iron', 'Lead', '(Hydrogen)', 'Copper', 'Silver', 'Gold'];
  return (
    <G>
      {metals.map((m, i) => (
        <G key={m}>
          <Rect x={110} y={14 + i * 17} width={120} height={16} fill={m.startsWith('(') ? '#f4f6f8' : '#eef4fb'} stroke={O} strokeWidth={0.7} />
          <Txt x={170} y={26 + i * 17} size={10} weight={m.startsWith('(') ? '500' : '700'}>{m}</Txt>
        </G>
      ))}
      <Line x1={90} y1={226} x2={90} y2={18} stroke={O} strokeWidth={1.4} />
      <Head x={90} y={14} dx={0} dy={-1} size={7} />
    </G>
  );
}

// ---------- non-metals ----------
function GasPrepArt() {
  return (
    <G>
      {/* thistle funnel and flask with marble chips */}
      <ConicalFlask x={40} y={90} w={90} h={110} level={0.3} fill="#eef6fb" bung>
        {[[60, 190], [76, 192], [92, 188], [104, 192], [70, 184], [88, 182]].map(([x, y], i) => (
          <Rect key={i} x={x} y={y} width={10} height={7} rx={1.5} fill="#e7e2d8" stroke={O} strokeWidth={0.6} />
        ))}
      </ConicalFlask>
      <Path d="M66 30 C66 20 90 20 90 30 L80 46 L80 186 L76 186 L76 46 Z" fill="#f4f9fc" stroke={O} strokeWidth={1.2} />
      <Path d="M94 80 L94 50 L196 50 L196 140" fill="none" stroke={O} strokeWidth={4.5} strokeLinejoin="round" />
      <Path d="M94 80 L94 50 L196 50 L196 140" fill="none" stroke="#f4f9fc" strokeWidth={2.5} strokeLinejoin="round" />
      {/* gas jar collecting by downward delivery */}
      <Rect x={170} y={100} width={52} height={110} fill="#f4f9fc" stroke={O} strokeWidth={1.4} />
      <Rect x={164} y={96} width={64} height={5} fill="#c4cbd2" stroke={O} strokeWidth={0.8} />
      <Rect x={171} y={170} width={50} height={39} fill="#eaf1e3" opacity={0.8} />
    </G>
  );
}

// ---------- organic ----------
function OrganicArt() {
  const H = (x, y) => <Atom x={x} y={y} s="H" r={8} />;
  const C = (x, y) => <Atom x={x} y={y} s="C" r={10} fill="#e5e7ea" />;
  const Ox = (x, y) => <Atom x={x} y={y} s="O" r={10} fill="#f6d5d0" />;
  const bonds = (list) => list.map(([a, b, c, d, n], i) => <Bond key={i} x1={a} y1={b} x2={c} y2={d} n={n} />);
  return (
    <G>
      {/* ethane */}
      {bonds([[50, 70, 90, 70], [50, 70, 50, 38], [50, 70, 50, 102], [50, 70, 18, 70], [90, 70, 90, 38], [90, 70, 90, 102], [90, 70, 122, 70]])}
      {C(50, 70)}
      {C(90, 70)}
      {H(50, 34)}
      {H(50, 106)}
      {H(14, 70)}
      {H(90, 34)}
      {H(90, 106)}
      {H(126, 70)}
      {/* ethene */}
      {bonds([[270, 70, 310, 70, 2], [270, 70, 248, 44], [270, 70, 248, 96], [310, 70, 332, 44], [310, 70, 332, 96]])}
      {C(270, 70)}
      {C(310, 70)}
      {H(245, 40)}
      {H(245, 100)}
      {H(335, 40)}
      {H(335, 100)}
      <G transform="translate(0 24)">
      {/* ethanol */}
      {bonds([[40, 200, 80, 200], [80, 200, 118, 200], [118, 200, 146, 200], [40, 200, 40, 168], [40, 200, 40, 232], [40, 200, 8, 200], [80, 200, 80, 168], [80, 200, 80, 232]])}
      {C(40, 200)}
      {C(80, 200)}
      {Ox(118, 200)}
      {H(40, 164)}
      {H(40, 236)}
      {H(4, 200)}
      {H(80, 164)}
      {H(80, 236)}
      {H(150, 200)}
      {/* ethanoic acid */}
      {bonds([[240, 200, 280, 200], [280, 200, 280, 164, 2], [280, 200, 316, 200], [316, 200, 344, 200], [240, 200, 240, 168], [240, 200, 240, 232], [240, 200, 208, 200]])}
      {C(240, 200)}
      {C(280, 200)}
      {Ox(280, 160)}
      {Ox(316, 200)}
      {H(240, 164)}
      {H(240, 236)}
      {H(204, 200)}
      {H(348, 200)}
      </G>
    </G>
  );
}
function ColumnArt() {
  const fr = [
    ['Refinery gases', 34],
    ['Petrol (gasoline)', 68],
    ['Naphtha', 102],
    ['Kerosene (paraffin)', 136],
    ['Diesel oil', 170],
    ['Lubricating oil, wax', 204],
  ];
  return (
    <G>
      <Path d="M150 20 L210 20 L222 250 L138 250 Z" fill="#f1f3f5" stroke={O} strokeWidth={1.6} />
      {fr.map(([t, y]) => (
        <G key={t}>
          <Line x1={150 - (y / 250) * 12} y1={y + 12} x2={210 + (y / 250) * 12} y2={y + 12} stroke="#9aa3ab" strokeWidth={1} />
          <Line x1={212 + (y / 250) * 12} y1={y} x2={250} y2={y} stroke={O} strokeWidth={2.5} />
          <Head x={256} y={y} dx={1} dy={0} size={6} />
        </G>
      ))}
      <Rect x={60} y={232} width={78} height={12} fill="#c8463d" stroke={O} strokeWidth={0.8} />
      <Head x={138} y={238} dx={1} dy={0} size={6} />
      <Line x1={180} y1={250} x2={180} y2={266} stroke={O} strokeWidth={2.5} />
      <Head x={180} y={270} dx={0} dy={1} size={6} />
      <Txt x={96} y={226} size={9}>Heated crude oil</Txt>
      <Txt x={78} y={44} size={9} weight="700">Cooler (about 40 °C)</Txt>
      <Txt x={78} y={258} size={9} weight="700">Hotter (about 350 °C)</Txt>
    </G>
  );
}

// ---------- analysis ----------
function CationArt() {
  const tubes = [
    ['#7ab8e6', 'Cu²⁺'],
    ['#7c9a5a', 'Fe²⁺'],
    ['#a0522d', 'Fe³⁺'],
    ['#f4f4f4', 'Zn²⁺'],
  ];
  return (
    <G>
      <Rect x={30} y={150} width={300} height={12} fill="#c9a36b" stroke={O} strokeWidth={1} />
      {tubes.map(([c, ion], i) => (
        <G key={ion}>
          <TestTube x={52 + i * 76} y={30} w={26} h={130} fill="#f4f9fc" level={0.55} precipitate={c} />
          <Rect x={53.5 + i * 76} y={118} width={23} height={18} fill={c} opacity={0.9} />
          <Txt x={65 + i * 76} y={180} size={11} weight="700">{ion}</Txt>
        </G>
      ))}
    </G>
  );
}
function FlameArt() {
  const flames = [
    ['#f5a623', 'Sodium'],
    ['#b38bd9', 'Potassium'],
    ['#d9572b', 'Calcium'],
    ['#3fb08f', 'Copper'],
  ];
  return (
    <G>
      {flames.map(([c, name], i) => (
        <G key={name}>
          <Bunsen x={50 + i * 85} y={120} h={56} flame={c} />
          <Txt x={50 + i * 85} y={196} size={10} weight="700">{name}</Txt>
        </G>
      ))}
      <Line x1={22} y1={64} x2={56} y2={98} stroke={O} strokeWidth={1.2} />
      <Rect x={14} y={58} width={12} height={8} rx={2} fill="#8a6a4f" transform="rotate(45 20 62)" />
    </G>
  );
}

export const CHEMISTRY = {
  'particles-states': {
    title: 'The arrangement of particles in a solid, a liquid and a gas',
    w: 360,
    h: 168,
    art: ParticlesArt,
    labels: [
      ['Regular pattern,\nvibrating in place', 55, 16, 55, 76],
      ['Touching but\nsliding past', 180, 16, 180, 92],
      ['Far apart, moving\nfast and randomly', 305, 16, 305, 44],
    ],
  },
  filtration: {
    title: 'Filtration: separating an insoluble solid from a liquid',
    w: 300,
    h: 240,
    art: FiltrationArt,
    labels: [
      ['Filter funnel', 70, 52, 110, 60],
      ['Filter paper', 70, 80, 124, 74],
      ['Residue (sand)', 70, 108, 145, 106],
      ['Conical flask', 70, 210, 118, 216],
      ['Mixture poured in', 250, 40, 176, 70],
      ['Filtrate (salt\nsolution)', 250, 222, 172, 226],
    ],
  },
  distillation: {
    title: 'Simple distillation: obtaining pure water from salt solution',
    w: 380,
    h: 270,
    art: DistillationArt,
    labels: [
      ['Thermometer at the\nside arm', 40, 40, 78, 50],
      ['Round-bottomed flask', 28, 118, 47, 130],
      ['Salt solution', 28, 160, 52, 162],
      ['Heat', 14, 222, 66, 228],
      ['Water out', 200, 30, 160, 48],
      ['Liebig condenser', 270, 92, 220, 118],
      ['Cold water in', 220, 214, 276, 186],
      ['Distillate\n(pure water)', 380, 232, 336, 232],
    ],
  },

  chromatography: {
    title: 'Paper chromatography of an ink',
    w: 360,
    h: 226,
    art: ChromatographyArt,
    labels: [
      ['Solvent front', 90, 72, 164, 72],
      ['Separated dyes', 90, 124, 175, 128],
      ['Pencil start line', 90, 182, 164, 186],
      ['Lid', 280, 22, 200, 24],
      ['Chromatography paper', 280, 110, 196, 110],
      ['Spot of ink', 280, 160, 183, 186],
      ['Solvent below\nthe start line', 280, 210, 236, 210],
    ],
  },
  'fractional-distillation': {
    title: 'Fractional distillation of a mixture of ethanol and water',
    w: 360,
    h: 240,
    art: FractionalArt,
    labels: [
      ['Thermometer', 30, 26, 77, 30],
      ['Fractionating column\npacked with glass beads', 30, 110, 72, 110],
      ['Mixture of ethanol\nand water', 30, 200, 52, 200],
      ['Condenser', 260, 70, 230, 100],
      ['Ethanol collects first\n(b.p. 78 °C)', 372, 204, 330, 204],
    ],
  },
  'atom-structure': {
    title: 'Structure of a sodium atom (atomic number 11, mass number 23)',
    w: 320,
    h: 204,
    art: AtomArt,
    labels: [
      ['Nucleus: 11 protons\nand 12 neutrons', 60, 40, 150, 104],
      ['First shell:\n2 electrons', 60, 150, 156, 134],
      ['Outer shell:\n1 electron', 270, 40, 205, 65],
      ['Second shell:\n8 electrons', 270, 150, 191, 141],
    ],
  },

  'periodic-table': {
    title: 'The first elements of the Periodic Table, by group and period',
    w: 400,
    h: 166,
    art: PeriodicArt,
    labels: [
      ['Group I:\nalkali metals', 35, 190, 35, 158],
      ['Group VII:\nhalogens', 355, 190, 355, 158],
      ['Group 0: noble gases', 404, 75, 386, 75],
      ['Period 3', -4, 109, 20, 109],
      ['Metals on the left,\nnon-metals on the right', 200, 190],
    ],
  },

  'ionic-bonding': {
    title: 'Ionic bonding in sodium chloride (outer shells shown)',
    w: 330,
    h: 176,
    art: IonicArt,
    labels: [
      ['Sodium ion, Na⁺:\nlost its outer electron', 63, 14, 63, 56],
      ['Chloride ion, Cl⁻:\ngained one electron', 250, 14, 250, 56],
      ['Electron gained\nfrom sodium (×)', 336, 96, 288, 92],
    ],
  },
  'covalent-bonding': {
    title: 'Covalent bonding: shared pairs of electrons',
    w: 330,
    h: 186,
    art: CovalentArt,
    labels: [
      ['Shared pair (one\nelectron from each atom)', 20, 30, 62, 112],
      ['Lone pairs on oxygen', 180, 30, 104, 58],
      ['Single covalent bond', 320, 30, 262, 66],
    ],
  },
  'giant-structures': {
    title: 'Giant covalent structures of carbon',
    w: 360,
    h: 196,
    art: GiantArt,
    labels: [
      ['Each carbon bonded\nto four others', 160, 30, 112, 70],
      ['Layers of hexagons\n(three bonds each)', 300, 12, 278, 44],
      ['Weak forces between\nlayers: layers slide', 300, 150, 346, 84],
    ],
  },
  'mole-map': {
    title: 'Converting between mass, moles, particles, gas volume and solutions',
    w: 450,
    h: 222,
    art: MoleMapArt,
    labels: [
      ['÷ molar mass', 135, 98],
      ['× molar mass', 135, 134],
      ['× 6 × 10²³', 305, 98],
      ['÷ 6 × 10²³', 305, 134],
      ['× 24 dm³', 180, 72],
      ['÷ 24 dm³', 262, 72],
      ['moles =\nconc. × volume', 150, 160],
      ['conc. =\nmoles ÷ volume', 292, 160],
    ],
  },

  titration: {
    title: 'An acid-alkali titration',
    w: 300,
    h: 246,
    art: TitrationArt,
    labels: [
      ['Clamp stand', 50, 40, 78, 60],
      ['Burette containing acid', 230, 30, 152, 40],
      ['Burette tap', 230, 166, 157, 165],
      ['Conical flask: alkali\nand indicator', 230, 206, 172, 220],
      ['White tile', 230, 244, 184, 236],
    ],
  },
  'ph-scale': {
    title: 'The pH scale and universal indicator colours',
    w: 370,
    h: 186,
    art: PhScaleArt,
    labels: [
      ['Stomach acid, pH 1', 53, 30, 53, 60],
      ['Pure water, pH 7', 185, 30, 185, 60],
      ['Ammonia solution, pH 11', 300, 30, 273, 60],
      ['Vinegar, pH 3', 97, 132, 97, 94],
      ['Sea water, pH 8', 207, 132, 207, 94],
      ['Sodium hydroxide, pH 14', 330, 150, 339, 94],
    ],
  },

  electrolysis: {
    title: 'Electrolysis: ions move to the oppositely charged electrodes',
    w: 360,
    h: 220,
    art: ElectrolysisArt,
    labels: [
      ['Anode (+)', 60, 66, 124, 66],
      ['Anions (−) move\nto the anode', 60, 140, 152, 140],
      ['Electrolyte', 60, 196, 96, 196],
      ['d.c. supply', 250, 10, 186, 24],
      ['Cathode (−)', 310, 66, 236, 66],
      ['Cations (+) move\nto the cathode', 310, 140, 205, 132],
      ['Gas bubbles', 310, 100, 233, 104],
    ],
  },
  'rate-graph': {
    title: 'Volume of gas against time for a fast and a slow reaction',
    w: 340,
    h: 216,
    art: RateGraphArt,
    labels: [
      ['Faster: higher concentration\nor temperature', 250, 70, 150, 64],
      ['Slower reaction', 280, 150, 200, 82],
      ['Gradient at the start\n= initial rate', 140, 150, 90, 110],
      ['Same final volume:\nreaction finished', 300, 32, 290, 50],
    ],
  },
  'energy-profile': {
    title: 'Energy profile of an exothermic reaction',
    w: 330,
    h: 220,
    art: EnergyProfileArt,
    labels: [
      ['Reactants', 70, 104, 70, 120],
      ['Activation energy', 120, 34, 92, 80],
      ['Products', 230, 182, 250, 160],
      ['Energy given\nout (ΔH\nnegative)', 296, 140, 278, 140],
    ],
  },

  'blast-furnace': {
    title: 'The blast furnace',
    w: 360,
    h: 226,
    art: BlastFurnaceArt,
    labels: [
      ['Charge in: iron ore,\ncoke and limestone', 90, 18, 150, 24],
      ['Waste gases out', 290, 8, 254, 8],
      ['Fe₂O₃ + 3CO → 2Fe + 3CO₂', 300, 90, 216, 90],
      ['Hot air blown in', 60, 150, 98, 155],
      ['Molten slag', 300, 194, 264, 194],
      ['Molten iron', 60, 210, 98, 210],
    ],
  },
  'reactivity-series': {
    title: 'The reactivity series of metals',
    w: 340,
    h: 240,
    art: ReactivityArt,
    labels: [
      ['More\nreactive', 50, 120],
      ['Extracted by\nelectrolysis', 300, 60, 232, 60],
      ['Extracted by heating\nwith carbon', 300, 150, 232, 150],
      ['Found as the\nmetal itself', 300, 210, 232, 222],
    ],
  },
  'gas-preparation': {
    title: 'Preparing carbon dioxide from marble chips and dilute hydrochloric acid',
    w: 300,
    h: 220,
    art: GasPrepArt,
    labels: [
      ['Thistle funnel\n(acid added here)', 40, 24, 66, 28],
      ['Marble chips\n(calcium carbonate)', 40, 210, 62, 194],
      ['Delivery tube', 150, 34, 150, 49],
      ['Gas jar', 270, 120, 222, 120],
      ['Carbon dioxide (denser\nthan air) fills from the bottom', 270, 184, 221, 184],
    ],
  },
  'organic-structures': {
    title: 'Displayed formulae of some two-carbon compounds',
    w: 360,
    h: 314,
    art: OrganicArt,
    labels: [
      ['Ethane, C₂H₆: single\nbonds only (saturated)', 70, 140, 70, 74],
      ['Ethene, C₂H₄: C=C double\nbond (unsaturated)', 290, 140, 290, 74],
      ['Ethanol, C₂H₅OH:\nhydroxyl group, -OH', 90, 298, 126, 232],
      ['Ethanoic acid, CH₃COOH:\ncarboxyl group, -COOH', 290, 298, 300, 230],
    ],
  },

  'fractionating-column': {
    title: 'Fractional distillation of crude oil',
    w: 380,
    h: 276,
    art: ColumnArt,
    labels: [
      ['Refinery gases', 266, 34, 258, 34],
      ['Petrol (gasoline)', 266, 68, 258, 68],
      ['Naphtha', 266, 102, 258, 102],
      ['Kerosene (paraffin)', 266, 136, 258, 136],
      ['Diesel oil', 266, 170, 258, 170],
      ['Lubricating oil, wax', 266, 204, 258, 204],
      ['Bitumen', 236, 268, 184, 268],
    ],
  },

  'cation-tests': {
    title: 'Precipitates formed with a few drops of sodium hydroxide solution',
    w: 360,
    h: 190,
    art: CationArt,
    labels: [
      ['Light blue', 65, 16, 65, 125],
      ['Green', 141, 16, 141, 125],
      ['Red-brown', 217, 16, 217, 125],
      ['White (dissolves\nin excess)', 293, 14, 293, 125],
    ],
  },
  'flame-test': {
    title: 'Flame test colours of some metal ions',
    w: 360,
    h: 206,
    art: FlameArt,
    labels: [
      ['Nichrome wire dipped in\nacid, then the solid', 120, 40, 52, 92],
      ['Yellow-orange', 50, 214],
      ['Lilac', 135, 214],
      ['Brick red', 220, 214],
      ['Blue-green', 305, 214],
    ],
  },
};
