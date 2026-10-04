// Biology diagrams for the class topics: the water cycle, a key to arthropods,
// insect life cycles, the bread mould, a long bone and phototropism, drawn in the
// same style as the other Biology diagrams.
import { Circle, Ellipse, G, Line, Path, Rect } from 'react-native-svg';
import { Head, Txt } from './Diagram';

const O = '#33414d';
const WATER = '#cfe6f5';
const LEAF = '#5e9e4a';
const range = (n, f) => Array.from({ length: n }, (_, i) => f(i));

function Arrow({ d, x, y, dx, dy, c = O, w = 1.4, dash }) {
  return (
    <G>
      <Path d={d} fill="none" stroke={c} strokeWidth={w} strokeDasharray={dash} />
      <Head x={x} y={y} dx={dx} dy={dy} size={7} fill={c} />
    </G>
  );
}

// An arrow along a circle from angle a0 to a1 (degrees, clockwise on screen).
function ArcArrow({ cx, cy, r, a0, a1 }) {
  const rad = (a) => (a * Math.PI) / 180;
  const x0 = cx + r * Math.cos(rad(a0));
  const y0 = cy + r * Math.sin(rad(a0));
  const x1 = cx + r * Math.cos(rad(a1));
  const y1 = cy + r * Math.sin(rad(a1));
  return <Arrow d={`M${x0} ${y0} A${r} ${r} 0 0 1 ${x1} ${y1}`} x={x1} y={y1} dx={-Math.sin(rad(a1))} dy={Math.cos(rad(a1))} />;
}

// ---------- the water cycle ----------
function WaterCycleArt() {
  const surface = 'M136 182 C170 176 210 158 245 140 C275 126 305 118 340 116';
  return (
    <G>
      {/* sun */}
      {range(8, (i) => {
        const a = (i * Math.PI) / 4;
        return <Line key={i} x1={26 + 18 * Math.cos(a)} y1={28 + 18 * Math.sin(a)} x2={26 + 25 * Math.cos(a)} y2={28 + 25 * Math.sin(a)} stroke="#e0a800" strokeWidth={1.6} />;
      })}
      <Circle cx={26} cy={28} r={14} fill="#ffd54f" stroke="#e0a800" strokeWidth={1.2} />
      {/* sea and land */}
      <Path d="M0 178 Q17 173 35 178 T70 178 T105 178 T140 178 L140 220 L0 220 Z" fill={WATER} stroke={O} strokeWidth={1} />
      <Path d={`${surface} L340 220 L136 220 Z`} fill="#d9c49c" stroke={O} strokeWidth={1} />
      <Path d={surface} fill="none" stroke="#7aa65a" strokeWidth={3} />
      {/* tree */}
      <Rect x={172} y={150} width={6} height={26} fill="#8d6e4a" stroke={O} strokeWidth={0.8} />
      <Circle cx={175} cy={140} r={16} fill={LEAF} stroke={O} strokeWidth={1} />
      {/* cloud */}
      {[
        [175, 44, 30, 16],
        [212, 34, 34, 22],
        [255, 40, 36, 18],
        [300, 46, 30, 14],
      ].map(([cx, cy, rx, ry]) => (
        <Ellipse key={cx} cx={cx} cy={cy} rx={rx} ry={ry} fill="#eef2f6" stroke={O} strokeWidth={1} />
      ))}
      <Rect x={160} y={40} width={150} height={18} fill="#eef2f6" />
      {/* rain */}
      {[284, 296, 308, 320, 332].map((x) => (
        <Line key={x} x1={x} y1={64} x2={x - 8} y2={112} stroke="#3d86c6" strokeWidth={1.3} strokeDasharray="6 5" />
      ))}
      {/* run-off over the surface and infiltration into the soil */}
      <Arrow d="M332 121 C302 126 274 134 247 146 C214 162 178 178 146 186" x={144} y={187} dx={-1} dy={0.3} c="#3d86c6" w={2.2} />
      <Arrow d="M300 134 L300 170" x={300} y={172} dx={0} dy={1} c="#8a6d3b" dash="4 3" />
      <Arrow d="M262 150 L262 186" x={262} y={188} dx={0} dy={1} c="#8a6d3b" dash="4 3" />
      {/* evaporation and transpiration */}
      <Arrow d="M44 170 C40 112 84 62 140 50" x={143} y={49} dx={1} dy={-0.25} c="#3d86c6" dash="5 3" />
      <Arrow d="M176 122 C170 104 184 90 178 68" x={178} y={65} dx={0} dy={-1} c="#3d86c6" dash="5 3" />
    </G>
  );
}

// ---------- a dichotomous key to the arthropods ----------
function Group({ x, y, name, eg, fill }) {
  return (
    <G>
      <Rect x={x - 42} y={y} width={84} height={22} rx={5} fill={fill} stroke={O} strokeWidth={1.2} />
      <Txt x={x} y={y + 15} size={10} weight="700">{name}</Txt>
      <Txt x={x} y={y + 35} size={9} italic>{eg}</Txt>
    </G>
  );
}
function Split({ x, y, left, right, a, b }) {
  return (
    <G>
      <Line x1={x} y1={y - 12} x2={x} y2={y} stroke={O} strokeWidth={1.2} />
      <Line x1={left} y1={y} x2={right} y2={y} stroke={O} strokeWidth={1.2} />
      {a.map((t, i) => (
        <Txt key={`a${i}`} x={left} y={y + 13 + i * 11} size={9}>{t}</Txt>
      ))}
      {b.map((t, i) => (
        <Txt key={`b${i}`} x={right} y={y + 13 + i * 11} size={9}>{t}</Txt>
      ))}
    </G>
  );
}
function KeyArt() {
  const drop = (x, y0, y1) => <Line x1={x} y1={y0} x2={x} y2={y1} stroke={O} strokeWidth={1.2} />;
  return (
    <G>
      <Rect x={102} y={6} width={96} height={22} rx={5} fill="#eef0f2" stroke={O} strokeWidth={1.2} />
      <Txt x={150} y={21} size={10} weight="700">Arthropod</Txt>
      <Split x={150} y={40} left={50} right={210} a={['3 pairs of legs']} b={['more than 3 pairs']} />
      {drop(50, 58, 70)}
      <Group x={50} y={70} name="Insect" eg="housefly, bee" fill="#fbeedd" />
      <Split x={210} y={80} left={150} right={270} a={['4 pairs of legs']} b={['more than 4 pairs']} />
      {drop(150, 98, 110)}
      <Group x={150} y={110} name="Arachnid" eg="spider, tick" fill="#e8eef7" />
      <Split x={270} y={120} left={220} right={320} a={['2 pairs of', 'antennae']} b={['many segments,', 'each with legs']} />
      {drop(220, 149, 162)}
      {drop(320, 149, 162)}
      <Group x={220} y={162} name="Crustacean" eg="crab, shrimp" fill="#e8f1e4" />
      <Group x={320} y={162} name="Myriapod" eg="millipede" fill="#f3e9f5" />
    </G>
  );
}

// ---------- insect life cycles ----------
function Mosquito({ x, y }) {
  return (
    <G transform={`translate(${x} ${y})`}>
      <Ellipse cx={2} cy={-9} rx={12} ry={3.6} fill="#eef3f7" stroke={O} strokeWidth={0.6} transform="rotate(-25 2 -9)" />
      {[-6, 0, 6].map((lx) => (
        <G key={lx}>
          <Line x1={lx} y1={0} x2={lx - 5} y2={8} stroke={O} strokeWidth={0.7} />
          <Line x1={lx} y1={0} x2={lx + 4} y2={8} stroke={O} strokeWidth={0.7} />
        </G>
      ))}
      <Ellipse cx={-9} cy={-2} rx={11} ry={3.2} fill="#7a5a3c" stroke={O} strokeWidth={0.7} transform="rotate(-20 -9 -2)" />
      <Ellipse cx={4} cy={0} rx={5} ry={3.4} fill="#5d4630" stroke={O} strokeWidth={0.7} />
      <Circle cx={11} cy={1} r={2.8} fill="#3f3025" stroke={O} strokeWidth={0.7} />
      <Line x1={13} y1={2} x2={22} y2={7} stroke={O} strokeWidth={0.9} />
    </G>
  );
}
function Grasshopper({ x, y, s = 1, wings = true }) {
  return (
    <G transform={`translate(${x} ${y}) scale(${s})`}>
      <Path d="M6 2 L16 -12 L24 10" fill="none" stroke="#5f8540" strokeWidth={2.2} strokeLinejoin="round" />
      <Line x1={-10} y1={3} x2={-14} y2={11} stroke="#5f8540" strokeWidth={1.2} />
      <Line x1={-4} y1={3} x2={-4} y2={11} stroke="#5f8540" strokeWidth={1.2} />
      <Ellipse cx={0} cy={0} rx={20} ry={5} fill="#8fb565" stroke={O} strokeWidth={0.8} />
      {wings && <Ellipse cx={2} cy={-4} rx={16} ry={3.5} fill="#c9d8a8" stroke={O} strokeWidth={0.7} />}
      <Circle cx={-21} cy={-1} r={5} fill="#8fb565" stroke={O} strokeWidth={0.8} />
      <Path d="M-24 -5 C-30 -14 -34 -16 -40 -18" fill="none" stroke={O} strokeWidth={0.8} />
    </G>
  );
}
function LifeCyclesArt() {
  return (
    <G>
      {/* complete metamorphosis: mosquito */}
      <ArcArrow cx={95} cy={112} r={62} a0={-66} a1={-24} />
      <ArcArrow cx={95} cy={112} r={62} a0={24} a1={66} />
      <ArcArrow cx={95} cy={112} r={62} a0={114} a1={156} />
      <ArcArrow cx={95} cy={112} r={62} a0={204} a1={246} />
      {range(6, (i) => (
        <Ellipse key={i} cx={81 + i * 5.6} cy={50} rx={2.2} ry={4} fill="#5d4630" />
      ))}
      <Txt x={95} y={36} size={10} weight="700">Eggs</Txt>
      <G>
        <Circle cx={139} cy={112} r={4} fill="#4e4030" />
        <Ellipse cx={148} cy={112} rx={6} ry={4.4} fill="#8a7650" stroke={O} strokeWidth={0.6} />
        <Ellipse cx={158} cy={112} rx={6} ry={4} fill="#8a7650" stroke={O} strokeWidth={0.6} />
        <Ellipse cx={167} cy={112} rx={5} ry={3.4} fill="#8a7650" stroke={O} strokeWidth={0.6} />
        <Line x1={171} y1={111} x2={180} y2={104} stroke={O} strokeWidth={1.4} />
      </G>
      <Txt x={159} y={132} size={10} weight="700">Larva</Txt>
      <G>
        <Path d="M95 183 C102 192 112 190 109 181" fill="none" stroke="#6b5a3e" strokeWidth={3.4} strokeLinecap="round" />
        <Circle cx={95} cy={173} r={9} fill="#6b5a3e" stroke={O} strokeWidth={0.7} />
        <Line x1={91} y1={165} x2={89} y2={159} stroke={O} strokeWidth={1} />
        <Line x1={99} y1={165} x2={101} y2={159} stroke={O} strokeWidth={1} />
      </G>
      <Txt x={95} y={203} size={10} weight="700">Pupa</Txt>
      <Mosquito x={30} y={112} />
      <Txt x={30} y={138} size={10} weight="700">Adult</Txt>

      {/* incomplete metamorphosis: grasshopper */}
      <ArcArrow cx={275} cy={112} r={56} a0={-64} a1={4} />
      <ArcArrow cx={275} cy={112} r={56} a0={56} a1={124} />
      <ArcArrow cx={275} cy={112} r={56} a0={176} a1={244} />
      <Rect x={262} y={50} width={26} height={11} rx={5.5} fill="#c9a36b" stroke={O} strokeWidth={0.8} />
      {range(4, (i) => (
        <Ellipse key={i} cx={267 + i * 5.4} cy={55.5} rx={1.8} ry={3.4} fill="#efe1b8" stroke={O} strokeWidth={0.4} />
      ))}
      <Txt x={275} y={40} size={10} weight="700">Eggs</Txt>
      <Grasshopper x={330} y={140} s={0.6} wings={false} />
      <Txt x={326} y={160} size={10} weight="700">Nymph</Txt>
      <Grasshopper x={228} y={140} />
      <Txt x={224} y={162} size={10} weight="700">Adult</Txt>
      <Txt x={275} y={182} size={9} italic>moults several times</Txt>

      <Txt x={95} y={222} size={10} weight="700">Complete metamorphosis (mosquito)</Txt>
      <Txt x={275} y={222} size={10} weight="700">Incomplete metamorphosis (grasshopper)</Txt>
    </G>
  );
}

// ---------- the bread mould Rhizopus ----------
function Sporangium({ x, y, r }) {
  return (
    <G>
      <Circle cx={x} cy={y} r={r} fill="#3b3b3b" stroke={O} strokeWidth={0.8} />
      {range(10, (i) => (
        <Circle key={i} cx={x + (r - 4) * Math.cos(i * 0.63)} cy={y + (r - 4) * Math.sin(i * 0.63) * 0.9} r={1} fill="#bdbdbd" />
      ))}
    </G>
  );
}
function RhizopusArt() {
  const HY = '#8f8f8f';
  return (
    <G>
      {/* bread */}
      <Rect x={10} y={172} width={320} height={30} fill="#e6c88f" stroke={O} strokeWidth={1.2} />
      {range(16, (i) => (
        <Circle key={i} cx={22 + i * 19.5} cy={182 + (i % 3) * 6} r={1.6} fill="#c9a668" />
      ))}
      {/* rhizoids */}
      {[30, 120, 220, 310].map((x) => (
        <G key={x}>
          <Path d={`M${x} 172 L${x - 9} 192 M${x} 172 L${x} 196 M${x} 172 L${x + 9} 190 M${x - 4} 181 L${x - 12} 186`} stroke={HY} strokeWidth={1.2} fill="none" />
        </G>
      ))}
      {/* stolons */}
      <Path d="M30 172 C60 142 90 142 120 172 M120 172 C150 142 190 142 220 172 M220 172 C250 142 280 142 310 172" stroke={HY} strokeWidth={2} fill="none" />
      {/* sporangiophores and sporangia */}
      <Line x1={120} y1={172} x2={108} y2={107} stroke={HY} strokeWidth={2} />
      <Sporangium x={108} y={96} r={11} />
      <Line x1={120} y1={172} x2={124} y2={70} stroke={HY} strokeWidth={2} />
      {/* one sporangium cut open: the columella inside */}
      <Circle cx={124} cy={56} r={15} fill="#3b3b3b" stroke={O} strokeWidth={0.8} />
      <Path d="M115 70 C113 56 118 50 124 50 C130 50 135 56 133 70 Z" fill="#d6d6d6" stroke={O} strokeWidth={0.6} />
      {range(12, (i) => (
        <Circle key={i} cx={124 + 12 * Math.cos(-0.2 - i * 0.24)} cy={56 + 12 * Math.sin(-0.2 - i * 0.24)} r={1.1} fill="#bdbdbd" />
      ))}
      <Line x1={220} y1={172} x2={216} y2={70} stroke={HY} strokeWidth={2} />
      {/* a ripe sporangium bursting */}
      <Path d="M206 72 A13 13 0 0 1 216 54 M222 55 A13 13 0 0 1 228 74" fill="none" stroke={O} strokeWidth={1.2} />
      <Path d="M210 70 C210 62 214 60 216 60 C219 60 222 62 222 70 Z" fill="#d6d6d6" stroke={O} strokeWidth={0.6} />
      {[
        [232, 50],
        [240, 44],
        [248, 52],
        [238, 58],
        [254, 42],
        [226, 44],
        [246, 36],
        [258, 50],
      ].map(([cx, cy], i) => (
        <Circle key={i} cx={cx} cy={cy} r={1.6} fill="#555" />
      ))}
      <Line x1={220} y1={172} x2={234} y2={113} stroke={HY} strokeWidth={2} />
      <Sporangium x={234} y={102} r={11} />
    </G>
  );
}

// ---------- longitudinal section of a long bone ----------
function LongBoneArt() {
  return (
    <G>
      <Path
        d="M118 44 C112 18 150 6 168 16 C188 26 186 52 172 64 L172 196 C188 206 192 236 176 248 C164 256 152 250 150 244 C148 250 136 256 124 248 C108 236 112 206 128 196 L128 64 C120 58 118 52 118 44 Z"
        fill="#efe6d2"
        stroke={O}
        strokeWidth={1.4}
      />
      {/* spongy bone with red marrow in the ends */}
      <Path d="M125 44 C122 28 150 18 164 25 C177 33 176 50 166 58 L134 58 C128 54 125 50 125 44 Z" fill="#e3b9a0" stroke={O} strokeWidth={0.6} />
      <Path d="M134 202 L166 202 C176 208 180 226 172 238 C164 246 154 242 150 236 C146 242 136 246 128 238 C120 226 124 208 134 202 Z" fill="#e3b9a0" stroke={O} strokeWidth={0.6} />
      {[
        [136, 36],
        [146, 30],
        [158, 33],
        [166, 42],
        [142, 46],
        [154, 44],
        [134, 50],
        [160, 52],
        [136, 214],
        [148, 210],
        [160, 214],
        [140, 226],
        [158, 226],
        [166, 220],
        [132, 232],
      ].map(([cx, cy], i) => (
        <Circle key={i} cx={cx} cy={cy} r={2.4} fill="#c0584a" />
      ))}
      {/* growth plates */}
      <Line x1={127} y1={61} x2={173} y2={61} stroke="#8c6d4a" strokeWidth={1.4} strokeDasharray="3 2" />
      <Line x1={127} y1={199} x2={173} y2={199} stroke="#8c6d4a" strokeWidth={1.4} strokeDasharray="3 2" />
      {/* marrow cavity with yellow marrow */}
      <Rect x={139} y={68} width={22} height={126} rx={10} fill="#f2d27a" stroke={O} strokeWidth={0.8} />
      {/* periosteum along the shaft */}
      <Line x1={126.2} y1={70} x2={126.2} y2={190} stroke="#7a4a4a" strokeWidth={1.4} />
      <Line x1={173.8} y1={70} x2={173.8} y2={190} stroke="#7a4a4a" strokeWidth={1.4} />
      {/* articular cartilage */}
      <Path d="M121 32 C128 14 158 6 172 18" fill="none" stroke="#9ec9e6" strokeWidth={5} strokeLinecap="round" />
      <Path d="M117 234 C118 248 134 254 146 246 M154 246 C166 254 182 248 183 234" fill="none" stroke="#9ec9e6" strokeWidth={5} strokeLinecap="round" />
      {/* blood vessel entering the shaft */}
      <Path d="M100 140 C112 138 124 134 140 128" fill="none" stroke="#c0392b" strokeWidth={2} />
    </G>
  );
}

// ---------- phototropism ----------
function Pot({ x }) {
  return (
    <G>
      <Path d={`M${x - 22} 150 L${x + 22} 150 L${x + 17} 180 L${x - 17} 180 Z`} fill="#c97b4a" stroke={O} strokeWidth={1.2} />
      <Rect x={x - 22} y={148} width={44} height={5} fill="#5b4636" />
    </G>
  );
}
function PhototropismArt() {
  return (
    <G>
      {/* lamp and light from one side */}
      <Rect x={8} y={72} width={24} height={36} rx={4} fill="#ffe9a8" stroke={O} strokeWidth={1.2} />
      {[78, 90, 102].map((y) => (
        <Arrow key={y} d={`M36 ${y} L66 ${y}`} x={70} y={y} dx={1} dy={0} c="#d39e00" />
      ))}
      {/* A: intact shoot bends towards the light */}
      <Pot x={110} />
      <Path d="M110 150 C110 118 106 96 92 78" fill="none" stroke={LEAF} strokeWidth={4.5} strokeLinecap="round" />
      {[
        [109, 132],
        [107, 116],
        [104, 102],
        [99, 90],
      ].map(([cx, cy], i) => (
        <Circle key={i} cx={cx + 5} cy={cy} r={1.9} fill="#e07b00" />
      ))}
      {/* B: tip covered with foil grows straight */}
      <Pot x={215} />
      <Line x1={215} y1={150} x2={215} y2={84} stroke={LEAF} strokeWidth={4.5} strokeLinecap="round" />
      <Path d="M210 88 L210 78 C210 72 220 72 220 78 L220 88 Z" fill="#c0c6cc" stroke={O} strokeWidth={0.8} />
      {/* C: tip removed, no bending */}
      <Pot x={320} />
      <Line x1={320} y1={150} x2={320} y2={102} stroke={LEAF} strokeWidth={4.5} />
      <Line x1={316} y1={101} x2={324} y2={101} stroke={O} strokeWidth={1.2} />
      {/* key */}
      <Circle cx={290} cy={20} r={2.2} fill="#e07b00" />
      <Txt x={298} y={23} size={9} anchor="start">auxin</Txt>
      {/* captions */}
      <Txt x={110} y={196} size={9} weight="700">A: tip intact</Txt>
      <Txt x={110} y={207} size={9}>bends towards light</Txt>
      <Txt x={215} y={196} size={9} weight="700">B: tip covered</Txt>
      <Txt x={215} y={207} size={9}>grows straight up</Txt>
      <Txt x={320} y={196} size={9} weight="700">C: tip removed</Txt>
      <Txt x={320} y={207} size={9}>does not bend</Txt>
    </G>
  );
}

// ---------- the scientific method ----------
function Stage({ x, y, title, sub, fill }) {
  return (
    <G>
      <Rect x={x - 40} y={y} width={80} height={38} rx={6} fill={fill} stroke={O} strokeWidth={1.2} />
      <Txt x={x} y={y + 16} size={9.5} weight="700">{title}</Txt>
      <Txt x={x} y={y + 29} size={8.5}>{sub}</Txt>
    </G>
  );
}
function MethodArt() {
  const top = 14;
  const low = 112;
  const xs = [48, 140, 232, 324];
  const right = (x1, x2, y) => <Arrow d={`M${x1 + 40} ${y} L${x2 - 42} ${y}`} x={x2 - 41} y={y} dx={1} dy={0} />;
  const left = (x1, x2, y) => <Arrow d={`M${x1 - 40} ${y} L${x2 + 42} ${y}`} x={x2 + 41} y={y} dx={-1} dy={0} />;
  return (
    <G>
      <Stage x={xs[0]} y={top} title="Observe" sub="notice something" fill="#e8eef7" />
      <Stage x={xs[1]} y={top} title="Question" sub="ask why or how" fill="#e8eef7" />
      <Stage x={xs[2]} y={top} title="Hypothesis" sub="a testable idea" fill="#fbeedd" />
      <Stage x={xs[3]} y={top} title="Experiment" sub="a fair test" fill="#fbeedd" />
      <Stage x={xs[3]} y={low} title="Results" sub="tables and graphs" fill="#e8f1e4" />
      <Stage x={xs[2]} y={low} title="Conclusion" sub="was it supported?" fill="#e8f1e4" />
      <Stage x={xs[1]} y={low} title="Communicate" sub="report, chart" fill="#f3e9f5" />
      {right(xs[0], xs[1], top + 19)}
      {right(xs[1], xs[2], top + 19)}
      {right(xs[2], xs[3], top + 19)}
      <Arrow d={`M${xs[3]} ${top + 38} L${xs[3]} ${low - 3}`} x={xs[3]} y={low - 2} dx={0} dy={1} />
      {left(xs[3], xs[2], low + 19)}
      {left(xs[2], xs[1], low + 19)}
      <Arrow d={`M${xs[2]} ${low} L${xs[2]} ${top + 41}`} x={xs[2]} y={top + 40} dx={0} dy={-1} dash="4 3" />
      <Txt x={xs[2] - 6} y={84} size={8.5} anchor="end" italic>not supported:</Txt>
      <Txt x={xs[2] - 6} y={95} size={8.5} anchor="end" italic>a new hypothesis</Txt>
    </G>
  );
}

// ---------- a soil profile ----------
function SoilArt() {
  const stones = [
    [70, 150, 7],
    [128, 138, 6],
    [170, 160, 8],
    [96, 172, 6],
    [150, 182, 7],
  ];
  return (
    <G>
      {/* grass and leaf litter on the surface */}
      {range(18, (i) => (
        <Path key={i} d={`M${46 + i * 9} 40 q2 -10 ${i % 2 ? 4 : -3} -16`} fill="none" stroke={LEAF} strokeWidth={1.6} />
      ))}
      <Rect x={40} y={40} width={160} height={8} fill="#7a5a32" />
      {/* topsoil: dark, with humus and roots */}
      <Rect x={40} y={48} width={160} height={62} fill="#5b4330" stroke={O} strokeWidth={1} />
      {range(14, (i) => (
        <Circle key={i} cx={50 + ((i * 37) % 140)} cy={58 + ((i * 23) % 46)} r={1.6} fill="#2f2219" />
      ))}
      <Path d="M70 48 C68 66 76 80 70 100 M70 70 C80 76 84 86 86 96 M150 48 C152 64 146 78 150 96 M150 66 C140 74 136 84 134 92" fill="none" stroke="#c9a77c" strokeWidth={1.2} />
      {/* subsoil: paler, few roots */}
      <Rect x={40} y={110} width={160} height={52} fill="#a9814f" stroke={O} strokeWidth={1} />
      {/* weathered rock: broken pieces */}
      <Rect x={40} y={162} width={160} height={34} fill="#c2a27a" stroke={O} strokeWidth={1} />
      {stones.map(([x, y, r], i) => (
        <Ellipse key={i} cx={x} cy={y + 14} rx={r + 4} ry={r} fill="#9a9488" stroke={O} strokeWidth={0.7} />
      ))}
      {/* parent rock */}
      <Path d="M40 196 L200 196 L200 226 L40 226 Z" fill="#8b8e93" stroke={O} strokeWidth={1} />
      <Path d="M60 206 L90 214 M110 202 L150 210 M168 214 L192 206" stroke="#6b6e73" strokeWidth={1.2} fill="none" />
    </G>
  );
}

export const BIOLOGY_3 = {
  'scientific-method': {
    title: 'The steps of the scientific method',
    w: 372,
    h: 156,
    art: MethodArt,
    labels: [],
  },
  'soil-profile': {
    title: 'A soil profile: the layers seen in a deep cut',
    w: 300,
    h: 230,
    art: SoilArt,
    labels: [
      ['Grass and leaf litter', 222, 30, 196, 36],
      ['Topsoil: dark, with\nhumus and roots', 222, 78, 196, 78],
      ['Subsoil: paler,\nfew roots', 222, 136, 196, 136],
      ['Weathered rock', 222, 179, 196, 179],
      ['Parent rock', 222, 211, 196, 211],
    ],
  },
  'water-cycle': {
    title: 'The water cycle',
    w: 340,
    h: 220,
    art: WaterCycleArt,
    labels: [
      ['Sun', 0, 28, 12, 28],
      ['Evaporation', 0, 106, 58, 106],
      ['Sea', 0, 198, 30, 198],
      ['Transpiration', 160, 96, 176, 96],
      ['Condensation:\nclouds form', 352, 28, 328, 40],
      ['Precipitation\n(rain)', 352, 84, 326, 84],
      ['Run-off', 352, 122, 334, 121],
      ['Infiltration', 352, 160, 302, 160],
    ],
  },
  'classification-key': {
    title: 'A dichotomous key to the main groups of arthropods',
    w: 362,
    h: 206,
    art: KeyArt,
    labels: [],
  },
  'insect-life-cycles': {
    title: 'Complete and incomplete metamorphosis',
    w: 360,
    h: 228,
    art: LifeCyclesArt,
    labels: [],
  },
  rhizopus: {
    title: 'The bread mould Rhizopus growing on bread',
    w: 340,
    h: 204,
    art: RhizopusArt,
    labels: [
      ['Sporangium\nfull of spores', 40, 34, 110, 52],
      ['Columella', 40, 74, 120, 62],
      ['Spores released', 290, 24, 252, 42],
      ['Sporangiophore', 290, 122, 230, 124],
      ['Stolon', 330, 146, 283, 153],
      ['Rhizoids', 120, 222, 120, 194],
      ['Bread (food)', 265, 222, 265, 190],
    ],
  },
  'long-bone': {
    title: 'Longitudinal section through a long bone',
    w: 300,
    h: 258,
    art: LongBoneArt,
    labels: [
      ['Articular\ncartilage', 96, 18, 124, 26],
      ['Spongy bone\nwith red marrow', 96, 54, 136, 50],
      ['Compact bone', 96, 100, 132, 100],
      ['Blood vessel', 96, 140, 104, 140],
      ['Growth plate', 200, 61, 172, 61],
      ['Marrow cavity\n(yellow marrow)', 200, 120, 158, 120],
      ['Periosteum', 200, 170, 176, 170],
    ],
  },
  phototropism: {
    title: 'Phototropism: the shoot tip controls bending towards light',
    w: 350,
    h: 212,
    art: PhototropismArt,
    labels: [
      ['Light from\none side', 20, 46, 20, 70],
      ['More auxin on the\nshaded side', 160, 34, 109, 102],
      ['Foil cap', 236, 64, 220, 78],
      ['Cut surface', 342, 96, 324, 101],
    ],
  },
};
