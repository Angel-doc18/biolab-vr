// Labelled apparatus for the Biology and Human Biology practicals. Each `art`
// takes the practical's current state, so the same drawing is the labelled
// diagram (default state) and the live view while the experiment runs.
import { Circle, Ellipse, G, Line, Path, Rect } from 'react-native-svg';
import { Txt } from './Diagram';
import { Beaker, Bubbles, Bunsen, ConicalFlask, GasSyringe, O, Ruler, TestTube, Thermometer, WATER, Wire } from './kit';

const range = (n, f) => Array.from({ length: n }, (_, i) => f(i));
// Fixed pseudo-random positions so drawings never jump between renders.
const seeded = (n, seed, w, h) => {
  let s = seed;
  const rnd = () => ((s = (s * 9301 + 49297) % 233280) / 233280);
  return range(n, () => [rnd() * w, rnd() * h]);
};

// ---------- Benedict's test in a water bath ----------
function FoodTestArt(s = {}) {
  return (
    <G>
      <Line x1={134} y1={134} x2={122} y2={236} stroke={O} strokeWidth={3} />
      <Line x1={226} y1={134} x2={238} y2={236} stroke={O} strokeWidth={3} />
      <Rect x={124} y={130} width={112} height={4} fill="#9aa3ab" />
      <Bunsen x={180} y={178} h={60} flame={s.heat === false ? null : '#6a8fd8'} />
      <Beaker x={140} y={58} w={80} h={72} level={0.75}>
        {s.heat !== false && <Bubbles points={[[150, 120], [158, 104], [200, 116], [206, 98], [195, 85]]} r={1.8} />}
      </Beaker>
      <TestTube x={172} y={20} w={16} h={96} fill={s.colour || '#2563eb'} level={0.36} precipitate={s.precipitate} />
      <Thermometer x={208} y={36} h={88} fill={0.85} />
    </G>
  );
}

// ---------- pondweed and a lamp ----------
function PondweedArt(s = {}) {
  const dist = s.dist ?? 30;
  const lx = 222 - dist * 4;
  const gas = Math.min(30, (s.gas ?? 6) * 1);
  const rate = s.rate ?? 6;
  const bubbles = range(Math.max(1, Math.min(6, Math.round(rate / 4))), (i) => [280 + (i % 2), 152 - i * 9]);
  return (
    <G>
      {/* lamp */}
      <Path d={`M${lx - 16} 98 L${lx + 12} 108 L${lx + 12} 132 L${lx - 16} 142 Z`} fill="#8d969f" stroke={O} strokeWidth={1} />
      <Circle cx={lx + 18} cy={120} r={8} fill="#fff3b0" stroke={O} strokeWidth={1} />
      <Line x1={lx - 4} y1={142} x2={lx - 4} y2={204} stroke={O} strokeWidth={2.2} />
      <Rect x={lx - 20} y={204} width={32} height={6} fill="#8d969f" stroke={O} strokeWidth={0.8} />
      {[108, 120, 132].map((y) => (
        <Line key={y} x1={lx + 28} y1={y} x2={226} y2={y + (y - 120) * 0.6} stroke="#e8c547" strokeWidth={1} strokeDasharray="4 4" />
      ))}
      {/* beaker, funnel, pondweed and the inverted test tube */}
      <Beaker x={230} y={70} w={100} h={140} level={0.85} />
      <Path d="M276 199 C270 186 282 178 276 166 M282 199 C290 188 278 180 286 168 M279 199 C276 190 286 184 281 172" fill="none" stroke="#2e7d32" strokeWidth={2.2} />
      {[[272, 186], [289, 182], [274, 174], [288, 172], [277, 192]].map(([x, y], i) => (
        <Ellipse key={i} cx={x} cy={y} rx={4} ry={2} fill="#4f9a3a" />
      ))}
      <Path d="M246 199 L314 199 L286 162 L286 134 L274 134 L274 162 Z" fill="none" stroke={O} strokeWidth={1.4} />
      <Path d="M270 134 L270 50 A10 10 0 0 1 290 50 L290 134" fill={WATER} stroke={O} strokeWidth={1.3} />
      <Rect x={271} y={41} width={18} height={gas} fill="#ffffff" />
      <Bubbles points={bubbles} r={2} />
      <Ruler x={70} y={216} len={210} divisions={20} />
    </G>
  );
}

// ---------- potometer ----------
function PotometerArt(s = {}) {
  const bx = 300 - (s.pos ?? 0.4) * 180;
  return (
    <G>
      {/* leafy shoot sealed into the tubing */}
      <Line x1={90} y1={150} x2={90} y2={36} stroke="#4f7a32" strokeWidth={3} />
      {[[74, 50, -30], [106, 60, 30], [72, 82, -25], [108, 96, 25], [76, 116, -20], [104, 128, 20]].map(([x, y, r], i) => (
        <Ellipse key={i} cx={x} cy={y} rx={16} ry={6} fill="#6aa84f" stroke="#3e6b2a" strokeWidth={0.8} transform={`rotate(${r} ${x} ${y})`} />
      ))}
      <Rect x={83} y={146} width={14} height={26} rx={3} fill="#2f2f2f" />
      {/* reservoir with tap */}
      <Path d="M126 70 L154 70 L144 100 L144 172 L136 172 L136 100 Z" fill={WATER} stroke={O} strokeWidth={1.2} />
      <Rect x={130} y={128} width={20} height={6} rx={2} fill="#5f6b75" />
      {/* capillary tube with the air bubble, dipping into a beaker */}
      <Rect x={86} y={172} width={240} height={8} fill={WATER} stroke={O} strokeWidth={1.2} />
      <Rect x={bx} y={173} width={10} height={6} fill="#ffffff" stroke={O} strokeWidth={0.6} />
      <Path d="M326 172 L332 172 L332 208 L326 208 Z" fill={WATER} stroke={O} strokeWidth={1.2} />
      <Beaker x={312} y={196} w={36} h={30} level={0.7} />
      <Ruler x={110} y={184} len={200} divisions={20} />
    </G>
  );
}

// ---------- starch digestion: iodine on a spotting tile ----------
function SpottingArt(s = {}) {
  const wells = s.wells || ['#1e1b4b', '#1e1b4b', '#3b2f5c', '#7a4b1e', '#b45309', '#b45309', '#b45309', '#b45309'];
  return (
    <G>
      <Beaker x={26} y={74} w={92} h={100} level={0.7} />
      <TestTube x={56} y={30} w={18} h={128} fill="#eef3e6" level={0.45} />
      <Thermometer x={96} y={44} h={118} fill={0.45} />
      {/* dropping pipette */}
      <Path d="M206 20 L214 20 L214 70 L211 92 L209 92 L206 70 Z" fill="#f4f9fc" stroke={O} strokeWidth={1.1} />
      <Rect x={204} y={6} width={12} height={16} rx={5} fill="#5f6b75" />
      {/* spotting tile */}
      <Rect x={160} y={110} width={180} height={76} rx={6} fill="#ffffff" stroke={O} strokeWidth={1.4} />
      {wells.map((c, i) => (
        <Circle key={i} cx={184 + (i % 4) * 44} cy={130 + Math.floor(i / 4) * 36} r={12} fill={c} stroke={O} strokeWidth={0.9} />
      ))}
    </G>
  );
}

// ---------- gas collected in a syringe (catalase; rates in Chemistry) ----------
export function SyringeArt(s = {}) {
  const solid = s.solid || 'liver';
  return (
    <G>
      <ConicalFlask x={40} y={82} w={84} h={96} fill={s.fill || '#eef6fb'} level={0.42} bung>
        {solid === 'liver' && <Path d="M62 168 C66 160 80 160 84 166 C88 172 76 176 68 174 Z" fill="#7d2f27" />}
        {solid === 'ribbon' && <Path d="M58 170 L96 164" stroke="#9aa3ab" strokeWidth={3} />}
        {solid === 'chips' && <G>{[[64, 170], [78, 172], [92, 168], [72, 164]].map(([x, y], i) => <Rect key={i} x={x} y={y} width={9} height={6} rx={1.5} fill="#e7e2d8" stroke={O} strokeWidth={0.6} />)}</G>}
        {(s.open ?? 0.3) > 0.02 && <Bubbles points={[[72, 150], [86, 146], [79, 138]]} r={1.6} />}
      </ConicalFlask>
      <Wire d="M82 72 L82 51 L172 51" />
      <Wire d="M86 72 L86 55 L172 55" />
      <GasSyringe x={172} y={42} len={150} d={22} open={s.open ?? 0.3} />
      <Line x1={240} y1={64} x2={240} y2={96} stroke={O} strokeWidth={2} />
      <Rect x={214} y={96} width={52} height={6} fill="#a5adb5" stroke={O} strokeWidth={0.8} />
    </G>
  );
}

// ---------- surface area and diffusion: agar cubes in acid ----------
function AgarArt(s = {}) {
  const t = s.t ?? 4;
  const cubes = [
    [104, 20],
    [146, 34],
    [208, 50],
  ];
  return (
    <G>
      <Beaker x={80} y={40} w={200} h={150} fill="#eef6fb" level={0.8} />
      {cubes.map(([x, size]) => {
        const edge = Math.min(size / 2, t * 1.6);
        return (
          <G key={x}>
            <Rect x={x} y={186 - size} width={size} height={size} fill="#fbeff5" stroke={O} strokeWidth={1} />
            {size - 2 * edge > 0.5 && <Rect x={x + edge} y={186 - size + edge} width={size - 2 * edge} height={size - 2 * edge} fill="#e3478b" />}
          </G>
        );
      })}
      <Txt x={114} y={204} size={9}>1 cm</Txt>
      <Txt x={163} y={204} size={9}>2 cm</Txt>
      <Txt x={233} y={204} size={9}>3 cm</Txt>
    </G>
  );
}

// ---------- quadrat sampling ----------
const PLANTS = seeded(70, 17, 270, 160);
function QuadratArt(s = {}) {
  const placed = s.placed || [[60, 40], [150, 110], [220, 60]];
  return (
    <G>
      <Rect x={44} y={30} width={276} height={166} fill="#e3f0d6" stroke={O} strokeWidth={1.2} />
      {PLANTS.map(([x, y], i) => (
        <G key={i}>
          <Circle cx={48 + x} cy={34 + y} r={2.6} fill="#c27c0e" />
          <Circle cx={48 + x} cy={34 + y} r={1} fill="#fff3b0" />
        </G>
      ))}
      {placed.map(([x, y], i) => (
        <Rect key={i} x={44 + x} y={30 + y} width={26} height={26} fill="none" stroke="#c8463d" strokeWidth={2} />
      ))}
      <Ruler x={44} y={198} len={276} divisions={20} />
      <G transform="rotate(-90 30 196)">
        <Ruler x={30} y={196} len={166} divisions={10} />
      </G>
    </G>
  );
}

// ---------- conditions for germination ----------
function GerminationArt() {
  const tube = (x, kind) => (
    <G key={x}>
      {kind === 'C' ? <TestTube x={x} y={30} w={30} h={130} fill={WATER} level={0.8} layer="#f2d16b" /> : <TestTube x={x} y={30} w={30} h={130} level={0} />}
      {kind !== 'C' && <Path d={`M${x + 2} 140 C${x + 8} 132 ${x + 14} 146 ${x + 20} 136 C${x + 24} 130 ${x + 28} 140 ${x + 28} 140 L${x + 28} 152 L${x + 2} 152 Z`} fill={kind === 'B' ? '#ffffff' : '#e6f1fa'} stroke={O} strokeWidth={0.7} />}
      {[[x + 9, kind === 'C' ? 148 : 128], [x + 20, kind === 'C' ? 150 : 130]].map(([cx, cy], i) => (
        <Ellipse key={i} cx={cx} cy={cy} rx={5} ry={3.5} fill="#a0703a" stroke={O} strokeWidth={0.6} />
      ))}
    </G>
  );
  return (
    <G>
      {tube(50, 'A')}
      {tube(130, 'B')}
      {tube(210, 'C')}
      {tube(290, 'D')}
      <Txt x={65} y={186} size={10} weight="700">A</Txt>
      <Txt x={145} y={186} size={10} weight="700">B</Txt>
      <Txt x={225} y={186} size={10} weight="700">C</Txt>
      <Txt x={305} y={186} size={10} weight="700">D</Txt>
      <Txt x={65} y={200} size={8.5}>water, air, warmth</Txt>
      <Txt x={145} y={200} size={8.5}>no water</Txt>
      <Txt x={225} y={200} size={8.5}>no air</Txt>
      <Txt x={305} y={200} size={8.5}>cold, 4 °C</Txt>
    </G>
  );
}

// ---------- respiration and hydrogencarbonate indicator ----------
function RespirationArt(s = {}) {
  const tube = (x, colour, alive) => (
    <G key={x}>
      <Rect x={x - 2} y={18} width={44} height={14} rx={3} fill="#8a6a4f" stroke={O} strokeWidth={1} />
      <TestTube x={x} y={30} w={40} h={150} fill={colour} level={0.32} />
      <Line x1={x + 2} y1={112} x2={x + 38} y2={112} stroke={O} strokeWidth={1.4} strokeDasharray="2 2" />
      {[[x + 10, 106], [x + 21, 104], [x + 31, 106], [x + 16, 98], [x + 27, 98]].map(([cx, cy], i) => (
        <G key={i}>
          <Ellipse cx={cx} cy={cy} rx={5} ry={3.6} fill={alive ? '#c9a36b' : '#8f7a5a'} stroke={O} strokeWidth={0.6} />
          {alive && i < 3 && <Path d={`M${cx} ${cy - 3} C${cx + 2} ${cy - 8} ${cx - 2} ${cy - 10} ${cx + 1} ${cy - 13}`} stroke="#e8e0c8" strokeWidth={1.2} fill="none" />}
        </G>
      ))}
    </G>
  );
  return (
    <G>
      {tube(90, s.control || '#d94a4a', false)}
      {tube(210, s.test || '#d94a4a', true)}
      <Txt x={110} y={200} size={9.5} weight="700">Boiled seeds</Txt>
      <Txt x={230} y={200} size={9.5} weight="700">Germinating seeds</Txt>
    </G>
  );
}

// ---------- taking the pulse at the wrist ----------
function PulseArt(s = {}) {
  return (
    <G>
      {/* forearm and hand, palm up */}
      <Path d="M20 104 L210 98 C228 96 240 92 256 92 C284 92 300 100 302 118 C304 136 286 146 256 146 L210 142 L20 146 Z" fill="#f0c9a8" stroke={O} strokeWidth={1.3} />
      <Path d="M246 92 C250 76 262 70 270 76 C276 80 268 92 262 96" fill="#f0c9a8" stroke={O} strokeWidth={1.1} />
      {/* radial artery on the thumb side */}
      <Path d="M40 106 C100 106 160 104 214 103" fill="none" stroke="#c8463d" strokeWidth={2.2} />
      {/* two fingertips from the other hand */}
      <Rect x={186} y={64} width={12} height={40} rx={6} fill="#e3b48f" stroke={O} strokeWidth={1} />
      <Rect x={200} y={62} width={12} height={41} rx={6} fill="#e3b48f" stroke={O} strokeWidth={1} />
      {/* stopwatch */}
      <Circle cx={290} cy={36} r={22} fill="#ffffff" stroke={O} strokeWidth={1.4} />
      <Rect x={286} y={8} width={8} height={7} fill="#5f6b75" />
      <Line x1={290} y1={36} x2={290} y2={20} stroke={O} strokeWidth={1.4} />
      <Line x1={290} y1={36} x2={302} y2={42} stroke="#c8463d" strokeWidth={1.2} />
      {s.bpm ? <Txt x={290} y={74} size={9} weight="700">{`${s.bpm} beats per minute`}</Txt> : null}
    </G>
  );
}

// ---------- reaction time: the ruler drop test ----------
function ReactionArt(s = {}) {
  const drop = (s.drop ?? 0) * 6;
  return (
    <G>
      {/* partner's hand at the top (released) */}
      <Path d="M126 6 C134 0 182 0 190 8 L190 24 L126 24 Z" fill="#e3b48f" stroke={O} strokeWidth={1.1} />
      <G transform={`translate(0 ${drop})`}>
        <Rect x={150} y={22} width={18} height={186} fill="#f7e8b5" stroke={O} strokeWidth={1} />
        {range(31, (i) => (
          <Line key={i} x1={150} y1={208 - i * 6} x2={150 + (i % 5 ? 4 : 8)} y2={208 - i * 6} stroke={O} strokeWidth={0.7} />
        ))}
        {[0, 10, 20, 30].map((v) => (
          <Txt key={v} x={163} y={211 - v * 6} size={7}>{v}</Txt>
        ))}
      </G>
      {/* student's thumb and first finger at the bottom */}
      <Path d="M100 206 C120 196 140 198 146 204 L146 214 C136 216 116 218 100 214 Z" fill="#f0c9a8" stroke={O} strokeWidth={1.1} />
      <Path d="M220 206 C200 196 178 198 172 204 L172 214 C182 216 202 218 220 214 Z" fill="#f0c9a8" stroke={O} strokeWidth={1.1} />
    </G>
  );
}

// One germination tube seen close up: seeds with roots that grow day by day.
function SeedTubeArt(s = {}) {
  const kind = s.kind ?? 0;
  const grown = s.grown ?? 0;
  const count = s.count ?? 0;
  return (
    <G>
      {kind === 2 ? <TestTube x={20} y={6} w={40} h={110} fill={WATER} level={0.75} layer="#f2d16b" /> : <TestTube x={20} y={6} w={40} h={110} level={0} />}
      {kind !== 2 && <Rect x={22} y={84} width={36} height={14} fill={kind === 1 ? '#ffffff' : '#e6f1fa'} stroke={O} strokeWidth={0.6} />}
      {range(4, (i) => {
        const cx = 28 + (i % 2) * 18;
        const cy = kind === 2 ? 102 - Math.floor(i / 2) * 8 : 80 - Math.floor(i / 2) * 9;
        const root = i < Math.ceil((count / 10) * 4) ? Math.min(14, grown) : 0;
        return (
          <G key={i}>
            {root > 0 && <Path d={`M${cx} ${cy + 2} C${cx + 2} ${cy + root / 2} ${cx - 2} ${cy + root * 0.8} ${cx + 1} ${cy + root}`} stroke="#e8e0c8" strokeWidth={1.6} fill="none" />}
            <Ellipse cx={cx} cy={cy} rx={6} ry={4} fill="#a0703a" stroke={O} strokeWidth={0.6} />
          </G>
        );
      })}
    </G>
  );
}

// One boiling tube of hydrogencarbonate indicator with its organisms.
function IndicatorTubeArt(s = {}) {
  return (
    <G>
      <Rect x={18} y={2} width={44} height={12} rx={3} fill="#8a6a4f" stroke={O} strokeWidth={1} />
      <TestTube x={20} y={12} w={40} h={110} fill={s.colour || '#d94a4a'} level={0.32} />
      <Line x1={22} y1={74} x2={58} y2={74} stroke={O} strokeWidth={1.2} strokeDasharray="2 2" />
      {s.kind === 2 ? (
        <Path d="M28 70 C30 56 46 52 54 60 C50 66 40 72 28 70 Z" fill="#4f9a3a" stroke={O} strokeWidth={0.7} />
      ) : s.kind === 1 ? (
        range(3, (i) => <Ellipse key={i} cx={30 + i * 10} cy={68} rx={5} ry={3} fill="#6b6b6b" stroke={O} strokeWidth={0.6} />)
      ) : (
        range(4, (i) => <Ellipse key={i} cx={28 + (i % 2) * 14 + Math.floor(i / 2) * 6} cy={68 - Math.floor(i / 2) * 6} rx={5} ry={3.5} fill={s.kind === -1 ? '#8f7a5a' : '#c9a36b'} stroke={O} strokeWidth={0.6} />)
      )}
    </G>
  );
}

export const APPARATUS_BIO = {
  'seed-tube': { title: 'A germination tube', w: 80, h: 124, art: SeedTubeArt, labels: [] },
  'indicator-tube': { title: 'A tube of hydrogencarbonate indicator', w: 80, h: 124, art: IndicatorTubeArt, labels: [] },
  'food-test-apparatus': {
    title: 'Benedict’s test for reducing sugar in a boiling water bath',
    w: 360,
    h: 245,
    art: FoodTestArt,
    labels: [
      ['Test tube: food solution\nand Benedict’s solution', 100, 40, 172, 100],
      ['Boiling water bath', 100, 100, 142, 104],
      ['Tripod and gauze', 100, 150, 128, 132],
      ['Thermometer', 262, 46, 211, 52],
      ['Beaker', 262, 96, 220, 96],
      ['Bunsen burner', 262, 204, 186, 204],
    ],
  },
  'pondweed-apparatus': {
    title: 'Measuring the rate of photosynthesis of pondweed',
    w: 360,
    h: 236,
    art: PondweedArt,
    labels: [
      ['Lamp', 50, 90, 90, 106],
      ['Metre rule: distance\nfrom the lamp', 50, 214, 72, 222],
      ['Beaker of water with sodium\nhydrogencarbonate (carbon dioxide)', 186, 30, 236, 96],
      ['Test tube collecting\noxygen', 344, 50, 290, 58],
      ['Bubbles of oxygen', 344, 116, 282, 140],
      ['Inverted funnel', 344, 162, 302, 182],
      ['Pondweed (Elodea)', 344, 196, 285, 190],
    ],
  },
  'potometer-apparatus': {
    title: 'A potometer measures the water taken up by a leafy shoot',
    w: 360,
    h: 236,
    art: PotometerArt,
    labels: [
      ['Leafy shoot', 50, 60, 70, 60],
      ['Airtight seal\n(rubber tubing)', 50, 158, 84, 158],
      ['Reservoir of water', 212, 60, 152, 74],
      ['Tap (closed while\nmeasuring)', 212, 112, 150, 131],
      ['Air bubble', 228, 150, 228, 172],
      ['Capillary tube', 352, 150, 316, 174],
      ['Scale', 160, 226, 160, 198],
      ['Beaker of water', 352, 226, 330, 216],
    ],
  },
  'spotting-apparatus': {
    title: 'Following the digestion of starch by amylase with iodine solution',
    w: 360,
    h: 200,
    art: SpottingArt,
    labels: [
      ['Starch and amylase\nmixture', 20, 30, 58, 120],
      ['Water bath at the\ntest temperature', 20, 186, 30, 150],
      ['Thermometer', 150, 30, 99, 60],
      ['Dropping pipette', 270, 20, 216, 30],
      ['Spotting tile with a drop\nof iodine in each well', 270, 66, 300, 112],
      ['Blue-black: starch\nstill there', 150, 196, 184, 132],
      ['Yellow-brown: starch\nall digested', 300, 210, 316, 168],
    ],
  },
  'catalase-apparatus': {
    title: 'Collecting the oxygen made when catalase breaks down hydrogen peroxide',
    w: 380,
    h: 190,
    art: (s) => SyringeArt({ ...s, solid: 'liver' }),
    labels: [
      ['Gas syringe', 250, 20, 250, 42],
      ['Delivery tube', 126, 32, 126, 51],
      ['Bung', 30, 66, 70, 76],
      ['Conical flask', 30, 130, 52, 140],
      ['Hydrogen peroxide\nsolution', 170, 140, 108, 148],
      ['Fresh liver (contains\ncatalase)', 170, 178, 86, 168],
    ],
  },
  'agar-apparatus': {
    title: 'Agar cubes containing alkali and indicator in dilute acid',
    w: 360,
    h: 214,
    art: AgarArt,
    labels: [
      ['Dilute hydrochloric acid', 60, 64, 96, 80],
      ['Beaker', 60, 120, 82, 120],
      ['Pink: acid has not\nreached here yet', 316, 70, 230, 160],
      ['Colourless edge: acid\nhas diffused in', 316, 132, 208, 176],
    ],
  },
  'quadrat-apparatus': {
    title: 'Estimating a plant population with randomly placed quadrats',
    w: 360,
    h: 220,
    art: QuadratArt,
    labels: [
      ['Area sampled', 182, 14, 182, 32],
      ['Quadrat, 1 m by 1 m', 344, 72, 290, 74],
      ['Plant being counted', 344, 120, 300, 128],
      ['Tape measure', 344, 205, 300, 205],
      ['Tape measure', 14, 110, 28, 110],
    ],
  },
  'germination-apparatus': {
    title: 'Testing the conditions needed for germination',
    w: 360,
    h: 206,
    art: GerminationArt,
    labels: [
      ['Seeds', 26, 120, 58, 128],
      ['Moist cotton wool', 26, 150, 52, 146],
      ['Dry cotton wool', 145, 14, 145, 30],
      ['Layer of oil\nkeeps air out', 344, 40, 238, 50],
      ['Boiled and cooled water', 344, 92, 240, 100],
    ],
  },
  'respiration-apparatus': {
    title: 'Showing that germinating seeds give out carbon dioxide',
    w: 340,
    h: 206,
    art: RespirationArt,
    labels: [
      ['Bung', 60, 24, 88, 25],
      ['Gauze platform', 60, 112, 92, 112],
      ['Hydrogencarbonate\nindicator', 60, 160, 92, 160],
      ['Boiled seeds: the control', 110, 6, 110, 18],
      ['Germinating seeds', 300, 92, 240, 100],
    ],
  },
  'pulse-apparatus': {
    title: 'Taking the pulse at the wrist',
    w: 340,
    h: 160,
    art: PulseArt,
    labels: [
      ['Two fingertips pressed\nlightly on the wrist', 120, 50, 186, 74],
      ['Radial artery', 60, 128, 80, 106],
      ['Thumb side of the wrist', 200, 160, 230, 140],
      ['Stopwatch: count the beats\nfor 30 seconds, then double', 236, 6, 268, 30],
    ],
  },
  'reaction-apparatus': {
    title: 'The ruler drop test for reaction time',
    w: 320,
    h: 230,
    art: ReactionArt,
    labels: [
      ['Partner lets go of\nthe top of the ruler', 100, 12, 128, 14],
      ['30 cm ruler, 0 cm\nat the bottom', 230, 90, 168, 90],
      ['Thumb and first finger\nlevel with 0 cm', 230, 190, 206, 206],
    ],
  },
};
