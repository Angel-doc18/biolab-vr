// Labelled Biology diagrams (also used by Human Biology). Drawn as textbook
// figures: outlines, light fills, and ruled labels.
import { Circle, Ellipse, G, Line, Path, Polygon, Rect } from 'react-native-svg';
import { Head, Txt } from './Diagram';

const O = '#33414d'; // outlines
const range = (n, f) => Array.from({ length: n }, (_, i) => f(i));

// ---------- cells ----------

function AnimalCellArt() {
  return (
    <G>
      <Path d="M104 118 C100 72 140 46 182 46 C228 46 260 78 258 120 C256 164 222 190 178 190 C134 190 108 162 104 118 Z" fill="#eef5f1" stroke={O} strokeWidth={2} />
      {/* rough endoplasmic reticulum with ribosomes */}
      <G fill="none" stroke="#5b7f73" strokeWidth={1.4}>
        <Path d="M214 124 C224 120 232 126 228 132 C224 138 234 144 242 140" />
        <Path d="M210 134 C220 130 226 136 222 142 C218 148 228 154 238 150" />
      </G>
      {[[216, 121], [224, 121], [231, 128], [228, 137], [236, 142], [212, 131], [220, 131], [224, 140], [230, 150]].map(([x, y], i) => (
        <Circle key={i} cx={x} cy={y} r={1.3} fill="#2f4858" />
      ))}
      {/* Golgi apparatus */}
      <G fill="none" stroke="#7a5c99" strokeWidth={1.6} strokeLinecap="round">
        <Path d="M200 160 C208 154 220 154 228 160" />
        <Path d="M202 166 C210 160 218 160 226 166" />
        <Path d="M204 172 C210 167 216 167 222 172" />
      </G>
      <Circle cx={232} cy={168} r={2.6} fill="#fff" stroke="#7a5c99" strokeWidth={1} />
      <Circle cx={196} cy={170} r={2.2} fill="#fff" stroke="#7a5c99" strokeWidth={1} />
      {/* nucleus */}
      <Circle cx={172} cy={112} r={27} fill="#cdd9ec" stroke="#34506b" strokeWidth={1.6} />
      <Circle cx={172} cy={112} r={24.5} fill="none" stroke="#34506b" strokeWidth={0.6} strokeDasharray="3 3" />
      <Circle cx={166} cy={108} r={8} fill="#8ea6c9" stroke="#34506b" strokeWidth={0.8} />
      {/* mitochondria */}
      <G transform="rotate(-20 128 140)">
        <Ellipse cx={128} cy={140} rx={15} ry={8} fill="#f4c9a6" stroke="#8a5a2b" strokeWidth={1.3} />
        <Path d="M116 140 L119 135 L122 145 L125 135 L128 145 L131 135 L134 145 L137 135 L140 140" fill="none" stroke="#8a5a2b" strokeWidth={0.9} />
      </G>
      <G transform="rotate(25 232 84)">
        <Ellipse cx={232} cy={84} rx={13} ry={7} fill="#f4c9a6" stroke="#8a5a2b" strokeWidth={1.3} />
        <Path d="M222 84 L225 80 L228 88 L231 80 L234 88 L237 80 L241 84" fill="none" stroke="#8a5a2b" strokeWidth={0.9} />
      </G>
      {/* free ribosomes */}
      {[[236, 106], [242, 112], [233, 113], [130, 76], [138, 70], [148, 172], [158, 178], [120, 104]].map(([x, y], i) => (
        <Circle key={i} cx={x} cy={y} r={1.4} fill="#2f4858" />
      ))}
    </G>
  );
}

function PlantCellArt() {
  return (
    <G>
      <Rect x={110} y={40} width={140} height={150} rx={6} fill="#e3efd9" stroke="#4c6b3a" strokeWidth={4} />
      <Rect x={116} y={46} width={128} height={138} rx={4} fill="#eef6ea" stroke="#5f6b75" strokeWidth={1.2} />
      <Rect x={136} y={66} width={88} height={96} rx={18} fill="#dce9f5" stroke="#5a7aa0" strokeWidth={1.4} />
      {[[150, 56, 9, 5], [180, 56, 9, 5], [208, 56, 9, 5], [126, 100, 5, 9], [126, 130, 5, 9], [234, 80, 5, 9], [234, 135, 5, 9], [190, 173, 9, 5]].map(([x, y, rx, ry], i) => (
        <G key={i}>
          <Ellipse cx={x} cy={y} rx={rx} ry={ry} fill="#6aa84f" stroke="#3e6b2a" strokeWidth={1} />
          <Line x1={x - rx * 0.5} y1={y - ry * 0.3} x2={x + rx * 0.5} y2={y - ry * 0.3} stroke="#2f5420" strokeWidth={0.7} />
          <Line x1={x - rx * 0.5} y1={y + ry * 0.3} x2={x + rx * 0.5} y2={y + ry * 0.3} stroke="#2f5420" strokeWidth={0.7} />
        </G>
      ))}
      <Circle cx={233} cy={173} r={8.5} fill="#cdd9ec" stroke="#34506b" strokeWidth={1.3} />
      <Circle cx={231} cy={171} r={2.6} fill="#8ea6c9" />
      <Ellipse cx={156} cy={174} rx={7} ry={4} fill="#f4c9a6" stroke="#8a5a2b" strokeWidth={1} />
    </G>
  );
}

function mitochondrionArt(cx = 180, cy = 100, rx = 110, ry = 52) {
  const irx = rx - 10;
  const iry = ry - 9;
  const top = (x) => cy - iry * Math.sqrt(Math.max(0, 1 - ((x - cx) / irx) ** 2));
  const fold = (x, up) => {
    const y0 = up ? top(x) : 2 * cy - top(x);
    const d = up ? 1 : -1;
    const tip = y0 + d * 32;
    return `M${x - 6} ${y0 + d * 2} L${x - 6} ${tip - d * 6} Q${x} ${tip + d * 4} ${x + 6} ${tip - d * 6} L${x + 6} ${y0 + d * 2}`;
  };
  return (
    <G>
      <Ellipse cx={cx} cy={cy} rx={rx} ry={ry} fill="#fbe3cd" stroke="#8a5a2b" strokeWidth={2.2} />
      <Ellipse cx={cx} cy={cy} rx={irx} ry={iry} fill="#f6c79e" stroke="#8a5a2b" strokeWidth={1.4} />
      {[cx - 65, cx - 5, cx + 55].map((x) => (
        <Path key={`t${x}`} d={fold(x, true)} fill="#fbe3cd" stroke="#8a5a2b" strokeWidth={1.3} />
      ))}
      {[cx - 35, cx + 25].map((x) => (
        <Path key={`b${x}`} d={fold(x, false)} fill="#fbe3cd" stroke="#8a5a2b" strokeWidth={1.3} />
      ))}
      {[[cx + 82, cy + 4], [cx + 76, cy - 8], [cx - 82, cy + 6], [cx - 20, cy - 10], [cx + 8, cy + 18], [cx + 40, cy - 14]].map(([x, y], i) => (
        <Circle key={i} cx={x} cy={y} r={1.6} fill="#2f4858" />
      ))}
      <Path d={`M${cx + 52} ${cy + 18} c 5 -6 12 -4 12 2 c 0 7 -9 9 -12 4 c -2 -3 0 -5 3 -5`} fill="none" stroke="#7a3b1d" strokeWidth={1.2} />
    </G>
  );
}

// Plant cell in water (p = 0) or plasmolysed in strong sucrose solution (p = 1).
function onionCell(x, y, plasmolysed) {
  const w = 80;
  const h = 110;
  return (
    <G>
      <Rect x={x} y={y} width={w} height={h} rx={4} fill={plasmolysed ? '#eef3f8' : '#e7f1e0'} stroke="#4c6b3a" strokeWidth={3.5} />
      {plasmolysed ? (
        <G>
          <Path d={`M${x + 18} ${y + 30} C${x + 16} ${y + 18} ${x + 30} ${y + 16} ${x + 42} ${y + 18} C${x + 58} ${y + 20} ${x + 64} ${y + 30} ${x + 62} ${y + 50} C${x + 62} ${y + 70} ${x + 60} ${y + 86} ${x + 44} ${y + 88} C${x + 28} ${y + 90} ${x + 18} ${y + 82} ${x + 18} ${y + 62} Z`} fill="#d8eccf" stroke="#5f6b75" strokeWidth={1.3} />
          <Ellipse cx={x + 40} cy={y + 52} rx={12} ry={16} fill="#c9dcf0" stroke="#5a7aa0" strokeWidth={1.1} />
          <Circle cx={x + 52} cy={y + 78} r={4} fill="#cdd9ec" stroke="#34506b" strokeWidth={1} />
        </G>
      ) : (
        <G>
          <Rect x={x + 3} y={y + 3} width={w - 6} height={h - 6} rx={3} fill="#d8eccf" stroke="#5f6b75" strokeWidth={1.1} />
          <Rect x={x + 9} y={y + 9} width={w - 18} height={h - 18} rx={10} fill="#c9dcf0" stroke="#5a7aa0" strokeWidth={1.1} />
          <Circle cx={x + 66} cy={y + 96} r={4} fill="#cdd9ec" stroke="#34506b" strokeWidth={1} />
        </G>
      )}
    </G>
  );
}

// ---------- plants ----------

function LeafArt() {
  const palisade = range(11, (i) => 92 + i * 18);
  const spongy = [
    [100, 112, 9, 7], [122, 108, 8, 8], [146, 114, 9, 6], [214, 110, 8, 7], [238, 114, 9, 7], [262, 108, 8, 8], [282, 116, 7, 7],
    [104, 140, 8, 8], [128, 148, 9, 7], [232, 146, 9, 7], [256, 140, 8, 8], [280, 148, 7, 8],
    [110, 162, 7, 5], [136, 166, 8, 5], [196, 166, 8, 5], [222, 164, 7, 5], [250, 166, 8, 5], [274, 164, 7, 5],
  ];
  return (
    <G>
      <Rect x={90} y={27} width={200} height={4} fill="#d9c56b" />
      {range(10, (i) => (
        <Rect key={`u${i}`} x={90 + i * 20} y={31} width={20} height={14} fill="#f4f8f1" stroke={O} strokeWidth={0.8} />
      ))}
      {palisade.map((x) => (
        <G key={`p${x}`}>
          <Rect x={x} y={47} width={15} height={50} rx={5} fill="#cfe8bf" stroke={O} strokeWidth={0.8} />
          {range(5, (k) => (
            <Circle key={k} cx={x + (k % 2 ? 11 : 4)} cy={53 + k * 9} r={2.2} fill="#4f8f3a" />
          ))}
        </G>
      ))}
      {spongy.map(([x, y, rx, ry], i) => (
        <G key={`s${i}`}>
          <Ellipse cx={x} cy={y} rx={rx} ry={ry} fill="#e0efd5" stroke={O} strokeWidth={0.8} />
          <Circle cx={x - 2} cy={y - 1} r={1.6} fill="#4f8f3a" />
        </G>
      ))}
      {/* vascular bundle: xylem above, phloem below */}
      <Circle cx={180} cy={132} r={27} fill="#f1f3e6" stroke={O} strokeWidth={1} />
      {[[170, 120], [181, 117], [192, 121], [175, 130], [187, 129]].map(([x, y], i) => (
        <Circle key={`x${i}`} cx={x} cy={y} r={5} fill="#fff" stroke="#5b4636" strokeWidth={2} />
      ))}
      {[[171, 144], [178, 147], [186, 145], [192, 141], [176, 139]].map(([x, y], i) => (
        <Circle key={`f${i}`} cx={x} cy={y} r={3} fill="#e9d9b8" stroke="#6b5a3a" strokeWidth={0.8} />
      ))}
      {/* lower epidermis with a stoma */}
      {range(10, (i) =>
        i === 3 ? null : <Rect key={`l${i}`} x={90 + i * 20} y={172} width={20} height={14} fill="#f4f8f1" stroke={O} strokeWidth={0.8} />
      )}
      <Path d="M150 172 C152 178 152 182 150 186 L158 186 C160 182 160 178 158 172 Z" fill="#a9d18e" stroke={O} strokeWidth={0.9} />
      <Path d="M170 172 C168 178 168 182 170 186 L162 186 C160 182 160 178 162 172 Z" fill="#a9d18e" stroke={O} strokeWidth={0.9} />
      <Rect x={90} y={186} width={200} height={3} fill="#d9c56b" />
    </G>
  );
}

function FlowerArt() {
  return (
    <G>
      {/* receptacle and stalk */}
      <Path d="M172 250 L172 205 C150 200 140 190 150 180 L210 180 C220 190 210 200 188 205 L188 250 Z" fill="#a9cf8a" stroke={O} strokeWidth={1.4} />
      {/* sepals */}
      <Path d="M152 186 C130 192 112 200 100 214 C120 214 140 206 156 194 Z" fill="#7fb069" stroke={O} strokeWidth={1.2} />
      <Path d="M208 186 C230 192 248 200 260 214 C240 214 220 206 204 194 Z" fill="#7fb069" stroke={O} strokeWidth={1.2} />
      {/* petals */}
      <Path d="M150 180 C118 160 96 120 104 70 C128 96 146 132 158 176 Z" fill="#f2b8c6" stroke={O} strokeWidth={1.3} />
      <Path d="M210 180 C242 160 264 120 256 70 C232 96 214 132 202 176 Z" fill="#f2b8c6" stroke={O} strokeWidth={1.3} />
      {/* nectaries */}
      <Ellipse cx={160} cy={178} rx={5} ry={3} fill="#f2d16b" stroke={O} strokeWidth={0.8} />
      <Ellipse cx={200} cy={178} rx={5} ry={3} fill="#f2d16b" stroke={O} strokeWidth={0.8} />
      {/* stamens: filament and anther */}
      <Path d="M166 178 C160 150 150 120 140 96" fill="none" stroke="#c9a227" strokeWidth={2} />
      <Path d="M194 178 C200 150 210 120 220 96" fill="none" stroke="#c9a227" strokeWidth={2} />
      <Ellipse cx={138} cy={88} rx={6} ry={11} fill="#e8b53a" stroke={O} strokeWidth={1.1} transform="rotate(-20 138 88)" />
      <Ellipse cx={222} cy={88} rx={6} ry={11} fill="#e8b53a" stroke={O} strokeWidth={1.1} transform="rotate(20 222 88)" />
      {/* carpel: ovary with ovules, style, stigma */}
      <Path d="M180 182 C162 182 160 160 166 148 C170 140 176 136 178 128 L182 128 C184 136 190 140 194 148 C200 160 198 182 180 182 Z" fill="#cfe3a8" stroke={O} strokeWidth={1.3} />
      <Ellipse cx={180} cy={162} rx={9} ry={14} fill="#eef5df" stroke={O} strokeWidth={0.8} />
      {[150, 160, 170].map((y) => (
        <Ellipse key={y} cx={180} cy={y} rx={4} ry={3.5} fill="#f6f0c8" stroke={O} strokeWidth={0.8} />
      ))}
      <Rect x={178} y={74} width={4} height={56} fill="#cfe3a8" stroke={O} strokeWidth={0.9} />
      <Path d="M170 74 C170 64 190 64 190 74 Z" fill="#b5d36b" stroke={O} strokeWidth={1.1} />
    </G>
  );
}

// ---------- human organs ----------

function HeartArt() {
  const blue = '#7f99cf';
  const red = '#d9534a';
  return (
    <G>
      {/* inferior vena cava, behind the heart, entering the right atrium from below */}
      <Rect x={96} y={140} width={22} height={150} fill={blue} stroke={O} strokeWidth={1.3} />
      {/* heart muscle */}
      <Path d="M102 92 C102 84 112 82 124 82 L246 82 C260 82 268 92 266 108 L262 150 C256 198 232 236 206 260 C196 268 186 268 178 260 C150 234 124 204 112 168 C106 150 102 120 102 92 Z" fill="#c9645a" stroke={O} strokeWidth={1.6} />
      {/* right atrium and right ventricle: deoxygenated blood */}
      <Path d="M108 100 Q108 92 118 92 L150 92 Q156 92 156 100 L156 146 L108 146 Z" fill="#aebfe0" stroke={O} strokeWidth={1} />
      <Path d="M124 160 L170 160 L170 232 Q160 236 152 226 Q132 200 124 160 Z" fill="#aebfe0" stroke={O} strokeWidth={1} />
      {/* left atrium and left ventricle: oxygenated blood; the left ventricle wall is the thickest */}
      <Path d="M214 100 Q214 92 222 92 L250 92 Q258 92 258 100 L256 146 L214 146 Z" fill="#eab0a8" stroke={O} strokeWidth={1} />
      <Path d="M204 160 L240 160 Q240 208 214 238 Q206 234 204 224 Z" fill="#eab0a8" stroke={O} strokeWidth={1} />
      {/* pulmonary artery: from the right ventricle up and out to the lungs */}
      <Path d="M158 162 L158 74 C158 68 154 64 148 64 L92 64 L92 44 L156 44 C170 44 180 54 180 68 L180 162 Z" fill={blue} stroke={O} strokeWidth={1.3} />
      {/* superior vena cava into the right atrium */}
      <Rect x={114} y={18} width={24} height={78} fill={blue} stroke={O} strokeWidth={1.3} />
      <Rect x={115.5} y={86} width={21} height={10} fill="#aebfe0" />
      {/* aorta: from the left ventricle, arching over to the body */}
      <Path d="M188 162 L188 36 C188 18 202 8 222 8 L250 8 C270 8 284 20 284 40 L284 84 L262 84 L262 42 C262 34 256 30 248 30 L224 30 C216 30 210 34 210 42 L210 162 Z" fill={red} stroke={O} strokeWidth={1.3} />
      <Rect x={214} y={-6} width={8} height={16} fill={red} stroke={O} strokeWidth={1} />
      <Rect x={234} y={-6} width={8} height={16} fill={red} stroke={O} strokeWidth={1} />
      {/* pulmonary veins into the left atrium */}
      <Rect x={256} y={98} width={30} height={9} fill={red} stroke={O} strokeWidth={1.1} />
      <Rect x={256} y={114} width={30} height={9} fill={red} stroke={O} strokeWidth={1.1} />
      {/* atrioventricular valves with their tendons */}
      <G stroke={O} strokeWidth={2} strokeLinecap="round">
        <Line x1={126} y1={150} x2={136} y2={166} />
        <Line x1={154} y1={150} x2={148} y2={166} />
        <Line x1={216} y1={150} x2={222} y2={166} />
        <Line x1={238} y1={150} x2={232} y2={166} />
      </G>
      <G stroke="#f3f1ea" strokeWidth={0.8}>
        <Line x1={136} y1={166} x2={144} y2={204} />
        <Line x1={148} y1={166} x2={152} y2={206} />
        <Line x1={222} y1={166} x2={222} y2={200} />
        <Line x1={232} y1={166} x2={228} y2={202} />
      </G>
      {/* semilunar valves at the base of the aorta and the pulmonary artery */}
      <Path d="M188 154 Q193 160 199 154 Q204 160 210 154" fill="none" stroke="#f3f1ea" strokeWidth={1.6} />
      <Path d="M158 154 Q163 160 169 154 Q174 160 180 154" fill="none" stroke="#f3f1ea" strokeWidth={1.6} />
    </G>
  );
}

function VesselsArt() {
  return (
    <G>
      {/* artery */}
      <Circle cx={66} cy={86} r={40} fill="#d9877e" stroke={O} strokeWidth={1.4} />
      <Circle cx={66} cy={86} r={34} fill="none" stroke="#f3e2c8" strokeWidth={2.5} />
      <Circle cx={66} cy={86} r={14} fill="#c8463d" stroke={O} strokeWidth={1.2} />
      {/* vein */}
      <Ellipse cx={186} cy={86} rx={46} ry={34} fill="#9fb2d9" stroke={O} strokeWidth={1.4} />
      <Ellipse cx={186} cy={86} rx={38} ry={26} fill="#6f86bd" stroke={O} strokeWidth={1.1} />
      {/* capillary with a red blood cell */}
      <Circle cx={302} cy={86} r={18} fill="#f3dcd6" stroke={O} strokeWidth={1.2} />
      <Circle cx={302} cy={86} r={15} fill="#fbeeea" />
      <Ellipse cx={302} cy={86} rx={8} ry={6} fill="#c8463d" stroke={O} strokeWidth={0.8} />
      <Txt x={66} y={196} size={11} weight="700">Artery</Txt>
      <Txt x={186} y={196} size={11} weight="700">Vein</Txt>
      <Txt x={302} y={196} size={11} weight="700">Capillary</Txt>
    </G>
  );
}

function AlveolusArt() {
  return (
    <G>
      {/* bronchiole into the alveolus */}
      <Rect x={118} y={6} width={22} height={40} fill="#f1e3d3" stroke={O} strokeWidth={1.2} />
      <Circle cx={140} cy={106} r={64} fill="#fbf3ec" stroke={O} strokeWidth={1.6} />
      <Circle cx={140} cy={106} r={60} fill="none" stroke="#7fb0d9" strokeWidth={2.2} />
      <Rect x={121} y={30} width={16} height={18} fill="#fbf3ec" />
      {/* capillary: deoxygenated below, oxygenated above */}
      <Rect x={206} y={14} width={30} height={92} fill="#e79089" stroke={O} strokeWidth={1.2} />
      <Rect x={206} y={106} width={30} height={92} fill="#97a9d6" stroke={O} strokeWidth={1.2} />
      <Line x1={206} y1={106} x2={236} y2={106} stroke="#fff" strokeWidth={0} />
      {[[221, 34], [218, 66], [223, 92], [219, 124], [222, 156], [220, 184]].map(([x, y], i) => (
        <Ellipse key={i} cx={x} cy={y} rx={7} ry={4.5} fill={y < 106 ? '#c8463d' : '#8e4b6e'} stroke={O} strokeWidth={0.6} />
      ))}
      {/* diffusion */}
      <Line x1={172} y1={80} x2={214} y2={80} stroke={O} strokeWidth={1.4} />
      <Head x={218} y={80} dx={1} dy={0} />
      <Txt x={186} y={74} size={10} weight="700">O₂</Txt>
      <Line x1={214} y1={136} x2={176} y2={136} stroke={O} strokeWidth={1.4} />
      <Head x={172} y={136} dx={-1} dy={0} />
      <Txt x={192} y={150} size={10} weight="700">CO₂</Txt>
      {/* blood flow */}
      <Line x1={246} y1={186} x2={246} y2={30} stroke={O} strokeWidth={1} />
      <Head x={246} y={26} dx={0} dy={-1} size={5} />
    </G>
  );
}

function NephronArt() {
  return (
    <G>
      {/* cortex and medulla */}
      <Rect x={70} y={10} width={230} height={120} fill="#f7efe6" />
      <Rect x={70} y={130} width={230} height={150} fill="#efe1d4" />
      <Line x1={70} y1={130} x2={300} y2={130} stroke={O} strokeWidth={0.8} strokeDasharray="4 3" />
      {/* afferent and efferent arterioles */}
      <Path d="M70 40 L104 52" stroke="#c8463d" strokeWidth={6} strokeLinecap="round" />
      <Path d="M104 72 L72 88" stroke="#c8463d" strokeWidth={4} strokeLinecap="round" />
      {/* Bowman's capsule and glomerulus */}
      <Path d="M132 40 C104 36 96 76 112 90 C124 100 142 96 150 86 L150 80 C140 90 126 90 118 82 C108 70 114 50 132 48 Z" fill="#f2d7b5" stroke={O} strokeWidth={1.3} />
      <Path d="M132 40 C146 40 154 50 154 62 L150 80" fill="none" stroke={O} strokeWidth={1.3} />
      <Path d="M108 56 C112 48 122 50 120 58 C118 66 128 68 126 60 C124 52 134 54 132 62 C130 70 120 76 114 70 C110 66 112 60 116 62" fill="none" stroke="#c8463d" strokeWidth={2.4} />
      {/* proximal convoluted tubule */}
      <Path d="M152 66 C172 56 176 80 192 70 C208 60 214 84 198 92 C184 100 196 112 212 106 C226 100 228 116 216 122 L214 130" fill="none" stroke="#e1b67a" strokeWidth={7} strokeLinecap="round" strokeLinejoin="round" />
      {/* loop of Henle */}
      <Path d="M214 130 L214 252 C214 266 236 266 236 252 L236 150" fill="none" stroke="#d9a35a" strokeWidth={7} strokeLinecap="round" />
      {/* distal convoluted tubule into the collecting duct */}
      <Path d="M236 150 L236 110 C236 96 252 96 254 84 C256 70 270 74 270 62 L270 44" fill="none" stroke="#e1b67a" strokeWidth={7} strokeLinecap="round" strokeLinejoin="round" />
      <Path d="M270 44 L282 44" fill="none" stroke="#e1b67a" strokeWidth={7} strokeLinecap="round" />
      <Rect x={282} y={20} width={14} height={262} rx={3} fill="#cfa25e" stroke={O} strokeWidth={1.1} />
      {/* capillary from the efferent arteriole running beside the loop of Henle */}
      <Path d="M72 88 C84 96 96 104 110 112 C150 132 196 134 206 150 L206 250 C206 272 244 272 244 250 L244 160" fill="none" stroke="#c8463d" strokeWidth={1.1} />
      <Head x={292} y={286} dx={0} dy={1} size={5} />
      <Txt x={78} y={24} size={9.5} anchor="start" weight="700">Cortex</Txt>
      <Txt x={78} y={146} size={9.5} anchor="start" weight="700">Medulla</Txt>
    </G>
  );
}

function ReflexArt() {
  return (
    <G>
      {/* spinal cord section: grey matter (butterfly) inside white matter */}
      <Ellipse cx={280} cy={130} rx={58} ry={52} fill="#f5ecd9" stroke={O} strokeWidth={1.5} />
      <Path d="M280 92 C298 92 310 104 306 114 C302 122 294 124 296 130 C298 136 310 140 312 150 C314 162 300 170 288 160 C282 156 280 152 280 152 C280 152 278 156 272 160 C260 170 246 162 248 150 C250 140 262 136 264 130 C266 124 258 122 254 114 C250 104 262 92 280 92 Z" fill="#c9b7a3" stroke={O} strokeWidth={1.2} />
      <Circle cx={280} cy={130} r={3} fill="#fff" stroke={O} strokeWidth={0.8} />
      {/* receptor in the skin and the sensory neurone to the dorsal root ganglion */}
      <Path d="M24 60 L48 60" stroke="#e7c8a0" strokeWidth={10} />
      <Path d="M44 60 C100 60 150 56 196 68 C216 74 228 84 236 98" fill="none" stroke="#2d6cdf" strokeWidth={2.2} />
      <Ellipse cx={206} cy={72} rx={12} ry={9} fill="#f0d79a" stroke={O} strokeWidth={1.1} />
      <Circle cx={206} cy={72} r={4} fill="#2d6cdf" />
      <Path d="M236 98 C246 108 256 112 270 118" fill="none" stroke="#2d6cdf" strokeWidth={2.2} />
      {/* relay neurone in the grey matter */}
      <Path d="M270 118 L284 128 L272 146" fill="none" stroke="#7a4fb3" strokeWidth={2.2} />
      <Circle cx={284} cy={128} r={3.5} fill="#7a4fb3" />
      {/* motor neurone out through the ventral root to the muscle */}
      <Circle cx={270} cy={150} r={5} fill="#c8463d" />
      <Path d="M266 152 C248 168 230 178 200 182 C140 190 100 196 70 200" fill="none" stroke="#c8463d" strokeWidth={2.2} />
      <Path d="M30 188 C40 180 64 180 74 190 C80 200 70 214 52 214 C36 214 26 204 30 188 Z" fill="#d9877e" stroke={O} strokeWidth={1.2} />
      {/* direction of the impulse */}
      <Head x={140} y={58} dx={1} dy={0} />
      <Head x={150} y={191} dx={-1} dy={0.1} />
    </G>
  );
}

function EyeArt() {
  return (
    <G>
      {/* sclera, choroid and retina */}
      <Circle cx={200} cy={120} r={86} fill="#fbfaf7" stroke={O} strokeWidth={2} />
      <Circle cx={200} cy={120} r={81} fill="none" stroke="#6b4b3a" strokeWidth={3} />
      <Circle cx={200} cy={120} r={77} fill="#f2f6fb" stroke="#d98b80" strokeWidth={3} />
      {/* cornea bulging at the front */}
      <Path d="M126 88 C100 96 100 144 126 152" fill="#e6f1f8" stroke={O} strokeWidth={1.8} />
      {/* iris with the pupil between its two halves */}
      <Rect x={128} y={88} width={6} height={22} fill="#5a7a54" stroke={O} strokeWidth={0.8} />
      <Rect x={128} y={130} width={6} height={22} fill="#5a7a54" stroke={O} strokeWidth={0.8} />
      {/* lens, suspensory ligaments and ciliary muscle */}
      <Ellipse cx={146} cy={120} rx={9} ry={24} fill="#e3eef8" stroke={O} strokeWidth={1.4} />
      <Line x1={146} y1={97} x2={140} y2={84} stroke={O} strokeWidth={0.9} />
      <Line x1={146} y1={143} x2={140} y2={156} stroke={O} strokeWidth={0.9} />
      <Ellipse cx={138} cy={80} rx={6} ry={5} fill="#d9877e" stroke={O} strokeWidth={0.9} />
      <Ellipse cx={138} cy={160} rx={6} ry={5} fill="#d9877e" stroke={O} strokeWidth={0.9} />
      {/* fovea and blind spot with the optic nerve */}
      <Path d="M282 112 Q278 120 282 128" fill="none" stroke="#c9a227" strokeWidth={3} />
      <Rect x={280} y={134} width={44} height={18} fill="#efd8b2" stroke={O} strokeWidth={1.2} />
      <Rect x={276} y={134} width={8} height={18} fill="#efd8b2" />
    </G>
  );
}

function ArmArt() {
  return (
    <G>
      {/* scapula and humerus */}
      <Path d="M90 20 L140 14 L130 58 L104 62 Z" fill="#efe6d2" stroke={O} strokeWidth={1.3} />
      <Path d="M126 40 C134 34 146 36 148 46 L150 176 C152 184 146 190 138 190 C130 190 124 184 126 176 L128 52 C124 48 122 44 126 40 Z" fill="#efe6d2" stroke={O} strokeWidth={1.3} />
      {/* radius and ulna, forearm held at a right angle */}
      <Path d="M140 182 L290 176 L292 186 L142 196 Z" fill="#efe6d2" stroke={O} strokeWidth={1.2} />
      <Path d="M132 192 C128 198 132 206 140 206 L292 196 L290 188 L140 196 Z" fill="#e6dbc2" stroke={O} strokeWidth={1.2} />
      {/* biceps in front, triceps behind */}
      <Path d="M150 52 C172 70 182 110 178 146 C176 166 170 178 166 184 L156 182 C162 160 160 120 150 80 Z" fill="#d06a5f" stroke={O} strokeWidth={1.3} />
      <Path d="M126 54 C108 80 104 130 112 168 C116 182 122 190 128 196 L132 186 C126 160 126 110 130 70 Z" fill="#b5534a" stroke={O} strokeWidth={1.3} />
      {/* tendons */}
      <Line x1={162} y1={183} x2={176} y2={184} stroke="#f3f1ea" strokeWidth={3} />
      <Line x1={130} y1={192} x2={132} y2={200} stroke="#f3f1ea" strokeWidth={3} />
      {/* hand */}
      <Path d="M292 172 C306 170 318 176 320 184 C322 194 310 202 292 200 Z" fill="#f0c9a8" stroke={O} strokeWidth={1.1} />
    </G>
  );
}

// ---------- genetics and ecology ----------

function CrossArt() {
  const cell = (x, y, t) => (
    <G key={`${x}${y}`}>
      <Rect x={x} y={y} width={44} height={30} fill={t === 'tt' ? '#f6efe0' : '#e6f1df'} stroke={O} strokeWidth={1} />
      <Txt x={x + 22} y={y + 19} size={12} weight="700">{t}</Txt>
    </G>
  );
  return (
    <G>
      <Txt x={170} y={22} size={11}>Tall      ×      Tall</Txt>
      <Txt x={170} y={44} size={12} weight="700">Tt      ×      Tt</Txt>
      {[[130, 'T'], [152, 't'], [188, 'T'], [210, 't']].map(([x, g]) => (
        <G key={x}>
          <Circle cx={x} cy={63} r={9} fill="none" stroke={O} strokeWidth={0.8} />
          <Txt x={x} y={67} size={11} weight="700">{g}</Txt>
        </G>
      ))}
      <Txt x={148} y={98} size={11} weight="700">T</Txt>
      <Txt x={192} y={98} size={11} weight="700">t</Txt>
      <Txt x={116} y={124} size={11} weight="700">T</Txt>
      <Txt x={116} y={154} size={11} weight="700">t</Txt>
      {cell(126, 104, 'TT')}
      {cell(170, 104, 'Tt')}
      {cell(126, 134, 'Tt')}
      {cell(170, 134, 'tt')}
      <Txt x={170} y={190} size={11}>3 tall : 1 short</Txt>
    </G>
  );
}

function PyramidArt() {
  const tiers = [
    [40, 260, 196, 236, '#9ccc65'],
    [70, 230, 156, 196, '#d4e157'],
    [100, 200, 116, 156, '#ffca28'],
    [125, 175, 76, 116, '#ff8a65'],
  ];
  return (
    <G>
      {tiers.map(([x1, x2, y1, y2, c], i) => (
        <Rect key={i} x={x1} y={y1} width={x2 - x1} height={y2 - y1} fill={c} stroke={O} strokeWidth={1.2} />
      ))}
      {/* energy lost as heat from every consumer level */}
      {[[70, 176], [100, 136], [125, 96]].map(([x, y]) => (
        <G key={y}>
          <Line x1={x} y1={y} x2={x - 26} y2={y} stroke="#c8463d" strokeWidth={1.4} />
          <Head x={x - 30} y={y} dx={-1} dy={0} size={6} fill="#c8463d" />
        </G>
      ))}
      <Txt x={150} y={220}>Grass and trees</Txt>
      <Txt x={150} y={180}>Grasshoppers, duikers</Txt>
      <Txt x={150} y={140}>Frogs, birds</Txt>
      <Txt x={150} y={100}>Snakes</Txt>
    </G>
  );
}

export const BIOLOGY = {
  'animal-cell': {
    title: 'An animal cell as seen with the electron microscope',
    w: 360,
    h: 230,
    art: AnimalCellArt,
    labels: [
      ['Cell membrane', 92, 62, 111, 82],
      ['Cytoplasm', 92, 104, 130, 106],
      ['Mitochondrion', 92, 150, 126, 141],
      ['Nucleolus', 272, 56, 168, 106],
      ['Nucleus', 272, 82, 197, 104],
      ['Ribosomes', 272, 108, 242, 112],
      ['Rough endoplasmic\nreticulum', 272, 136, 236, 140],
      ['Golgi apparatus', 272, 170, 226, 165],
    ],
  },
  'plant-cell': {
    title: 'A palisade cell from a leaf (plant cell)',
    w: 360,
    h: 230,
    art: PlantCellArt,
    labels: [
      ['Cellulose cell wall', 98, 40, 110, 60],
      ['Cell membrane', 98, 80, 116, 80],
      ['Chloroplast', 98, 124, 121, 130],
      ['Cytoplasm', 98, 156, 128, 152],
      ['Mitochondrion', 98, 196, 152, 175],
      ['Large permanent\nvacuole (cell sap)', 262, 104, 200, 110],
      ['Tonoplast (vacuole\nmembrane)', 262, 146, 224, 146],
      ['Nucleus', 262, 186, 238, 176],
    ],
  },
  mitochondrion: {
    title: 'A mitochondrion cut lengthways',
    w: 410,
    h: 200,
    art: () => mitochondrionArt(205, 100, 100, 52),
    labels: [
      ['Outer membrane', 96, 60, 125, 69],
      ['Inner membrane', 96, 100, 116, 100],
      ['Matrix', 96, 140, 124, 110],
      ['Crista (fold of the\ninner membrane)', 316, 50, 260, 84],
      ['Ribosomes', 316, 104, 287, 104],
      ['Circular DNA', 316, 146, 262, 122],
    ],
  },
  osmosis: {
    title: 'Red onion cells in distilled water and in strong sucrose solution (high power)',
    w: 380,
    h: 210,
    art: () => (
      <G>
        {onionCell(95, 26, false)}
        {onionCell(205, 26, true)}
        <Txt x={135} y={160} size={11} weight="700">Turgid</Txt>
        <Txt x={135} y={174} size={9.5}>in distilled water</Txt>
        <Txt x={245} y={160} size={11} weight="700">Plasmolysed</Txt>
        <Txt x={245} y={174} size={9.5}>in strong sucrose</Txt>
      </G>
    ),
    labels: [
      ['Cell wall', 86, 34, 95, 44],
      ['Cell membrane\nagainst the wall', 86, 70, 98, 70],
      ['Large vacuole', 86, 108, 110, 108],
      ['Cell wall', 294, 34, 285, 42],
      ['Sucrose\nsolution', 294, 62, 276, 62],
      ['Cell membrane', 294, 92, 267, 92],
      ['Vacuole', 294, 116, 252, 82],
      ['Cytoplasm', 294, 138, 236, 110],
    ],
  },
  'osmosis-cd': {
    title: 'Cells C and D, each after 30 minutes (high power)',
    w: 320,
    h: 170,
    art: () => (
      <G>
        {onionCell(60, 16, false)}
        {onionCell(180, 16, true)}
        <Txt x={100} y={150} size={11} weight="700">Cell C</Txt>
        <Txt x={220} y={150} size={11} weight="700">Cell D</Txt>
      </G>
    ),
    labels: [],
  },
  'leaf-section': {
    title: 'Transverse section through a leaf',
    w: 380,
    h: 210,
    art: LeafArt,
    labels: [
      ['Waxy cuticle', 82, 20, 100, 29],
      ['Upper epidermis', 82, 40, 98, 38],
      ['Palisade\nmesophyll', 82, 72, 94, 72],
      ['Spongy\nmesophyll', 82, 116, 95, 112],
      ['Air space', 82, 150, 116, 130],
      ['Stoma', 82, 196, 160, 184],
      ['Xylem', 298, 92, 186, 118],
      ['Phloem', 298, 132, 186, 145],
      ['Lower epidermis', 298, 168, 281, 179],
      ['Guard cell', 298, 196, 166, 182],
    ],
  },
  'flower-half': {
    title: 'Half flower of an insect-pollinated flower',
    w: 360,
    h: 260,
    art: FlowerArt,
    labels: [
      ['Anther', 86, 60, 134, 82],
      ['Filament', 86, 100, 146, 118],
      ['Petal', 86, 136, 118, 130],
      ['Sepal', 86, 222, 112, 210],
      ['Receptacle', 86, 246, 168, 220],
      ['Stigma', 274, 46, 186, 70],
      ['Style', 274, 80, 182, 96],
      ['Ovary', 274, 170, 196, 160],
      ['Ovule', 274, 196, 182, 166],
      ['Nectary', 274, 226, 204, 179],
    ],
  },
  'heart-section': {
    title: 'Vertical section through the mammalian heart (front view)',
    w: 380,
    h: 300,
    art: HeartArt,
    labels: [
      ['Superior vena cava', 92, 24, 114, 28],
      ['Pulmonary artery', 84, 54, 92, 54],
      ['Right atrium', 92, 118, 128, 118],
      ['Tricuspid valve', 92, 156, 128, 154],
      ['Right ventricle', 92, 200, 140, 196],
      ['Inferior vena cava', 88, 272, 96, 272],
      ['Aorta', 300, 24, 280, 34],
      ['Semilunar valve', 300, 64, 205, 156],
      ['Pulmonary veins', 300, 110, 286, 110],
      ['Left atrium', 300, 136, 246, 130],
      ['Bicuspid valve', 300, 162, 235, 158],
      ['Left ventricle', 300, 200, 226, 198],
      ['Septum', 190, 292, 190, 238],
    ],
  },
  'blood-vessels': {
    title: 'Transverse sections of an artery, a vein and a capillary',
    w: 360,
    h: 206,
    art: VesselsArt,
    labels: [
      ['Thick muscular,\nelastic wall', 66, 22, 66, 47],
      ['Narrow lumen', 66, 150, 66, 98],
      ['Thin wall', 186, 30, 186, 53],
      ['Wide lumen', 186, 150, 186, 100],
      ['Wall one cell thick', 302, 40, 302, 68],
      ['Red blood cell', 302, 150, 302, 90],
    ],
  },
  alveolus: {
    title: 'Gas exchange between an alveolus and a capillary',
    w: 380,
    h: 206,
    art: AlveolusArt,
    labels: [
      ['Air from the\nbronchiole', 66, 22, 118, 22],
      ['Air in the alveolus', 66, 96, 104, 96],
      ['Moist lining', 66, 136, 82, 130],
      ['Wall one cell\nthick', 66, 174, 102, 156],
      ['Oxygenated blood to\nthe pulmonary vein', 256, 22, 236, 22],
      ['Red blood cell', 256, 64, 226, 66],
      ['Capillary wall', 256, 112, 236, 112],
      ['Deoxygenated blood from\nthe pulmonary artery', 256, 186, 236, 186],
    ],
  },
  nephron: {
    title: 'A nephron and its blood supply',
    w: 380,
    h: 290,
    art: NephronArt,
    labels: [
      ['Afferent arteriole', 62, 40, 76, 42],
      ['Efferent arteriole', 62, 92, 80, 84],
      ['Glomerulus', 62, 66, 112, 60],
      ['Bowman’s capsule', 120, 112, 128, 92],
      ['Proximal convoluted\ntubule', 182, 30, 178, 66],
      ['Loop of Henle', 152, 230, 214, 230],
      ['Distal convoluted\ntubule', 310, 98, 254, 86],
      ['Collecting duct', 310, 200, 296, 200],
    ],
  },
  'reflex-arc': {
    title: 'A reflex arc through the spinal cord',
    w: 360,
    h: 240,
    art: ReflexArt,
    labels: [
      ['Receptor in\nthe skin', 36, 96, 36, 64],
      ['Sensory neurone', 110, 34, 110, 58],
      ['Dorsal root ganglion\n(cell bodies)', 206, 30, 206, 63],
      ['Relay neurone', 346, 40, 284, 126],
      ['Grey matter', 346, 96, 304, 112],
      ['White matter', 346, 184, 322, 160],
      ['Motor neurone', 170, 216, 170, 187],
      ['Effector (muscle)', 52, 234, 52, 214],
    ],
  },
  eye: {
    title: 'Horizontal section through the human eye',
    w: 380,
    h: 240,
    art: EyeArt,
    labels: [
      ['Ciliary muscle', 92, 60, 134, 78],
      ['Suspensory\nligament', 92, 90, 142, 90],
      ['Cornea', 92, 120, 103, 120],
      ['Iris', 92, 146, 128, 144],
      ['Lens', 92, 176, 146, 140],
      ['Pupil', 92, 206, 131, 120],
      ['Sclera', 300, 30, 252, 52],
      ['Choroid', 300, 56, 262, 66],
      ['Retina', 300, 82, 268, 88],
      ['Fovea\n(yellow spot)', 300, 116, 281, 120],
      ['Optic nerve', 334, 172, 316, 152],
      ['Blind spot', 300, 196, 280, 148],
    ],
  },
  'arm-elbow': {
    title: 'The human arm: bones and muscles at the elbow',
    w: 380,
    h: 230,
    art: ArmArt,
    labels: [
      ['Scapula', 72, 28, 96, 30],
      ['Triceps (extensor)', 72, 110, 108, 110],
      ['Tendon', 72, 200, 131, 196],
      ['Biceps (flexor)', 232, 70, 172, 92],
      ['Humerus', 232, 128, 148, 130],
      ['Tendon', 232, 160, 170, 184],
      ['Radius', 330, 160, 260, 179],
      ['Ulna', 330, 214, 250, 196],
      ['Elbow (hinge) joint', 160, 222, 140, 196],
    ],
  },
  'monohybrid-cross': {
    title: 'A monohybrid cross between two heterozygous tall plants',
    w: 380,
    h: 200,
    art: CrossArt,
    labels: [
      ['Parental phenotypes', 86, 20],
      ['Parental genotypes', 86, 42],
      ['Gametes', 86, 64],
      ['F₁ offspring\ngenotypes', 290, 134, 214, 134],
      ['Phenotype ratio', 86, 188],
    ],
  },
  'energy-pyramid': {
    title: 'Pyramid of energy for a forest food chain. About 10% of the energy passes to the next level.',
    w: 380,
    h: 246,
    art: PyramidArt,
    labels: [
      ['Producers', 270, 216, 252, 216],
      ['Primary consumers\n(herbivores)', 270, 176, 222, 176],
      ['Secondary consumers\n(carnivores)', 270, 136, 192, 136],
      ['Tertiary consumers', 270, 96, 170, 96],
      ['Energy lost as heat', 60, 56, 98, 96],
    ],
  },
};
