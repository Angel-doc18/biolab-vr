// More Chemistry diagrams for the Form 3 element topics: preparing oxygen,
// hydrogen and chlorine, and flow charts of the Contact and Haber processes.
import { Circle, G, Line, Path, Rect } from 'react-native-svg';
import { Head, Txt } from './Diagram';
import { Bunsen, ConicalFlask, O, WATER } from './kit';

const GLASS = '#f4f9fc';
const range = (n, f) => Array.from({ length: n }, (_, i) => f(i));

// A delivery tube drawn as a double line.
function Tube({ d }) {
  return (
    <G>
      <Path d={d} fill="none" stroke={O} strokeWidth={4.5} strokeLinejoin="round" />
      <Path d={d} fill="none" stroke={GLASS} strokeWidth={2.5} strokeLinejoin="round" />
    </G>
  );
}

// ---------- a gas made in a flask and collected over water ----------
// solid: the colour of the solid in the flask (manganese(IV) oxide or zinc).
function OverWaterArt({ solid, lumps }) {
  return (
    <G>
      {/* tap funnel */}
      <Path d="M50 18 L82 18 L70 46 L62 46 Z" fill={GLASS} stroke={O} strokeWidth={1.2} />
      <Path d="M52 22 L80 22 L72 40 L60 40 Z" fill={WATER} />
      <Rect x={64} y={46} width={4} height={50} fill={GLASS} stroke={O} strokeWidth={1} />
      <Rect x={58} y={58} width={16} height={6} rx={2} fill="#9aa3ab" stroke={O} strokeWidth={0.8} />
      <ConicalFlask x={30} y={90} w={72} h={100} level={0.34} fill={WATER} bung>
        {lumps
          ? [[44, 180], [56, 183], [68, 179], [80, 182], [62, 174]].map(([x, y], i) => <Rect key={i} x={x} y={y} width={9} height={6} rx={2} fill={solid} stroke={O} strokeWidth={0.6} />)
          : range(18, (i) => <Circle key={i} cx={44 + (i % 9) * 5} cy={182 + Math.floor(i / 9) * 4} r={1.6} fill={solid} />)}
      </ConicalFlask>
      <Tube d="M76 92 L76 64 L214 64 L214 196 L234 196 L234 178" />
      {/* trough */}
      <Rect x={150} y={150} width={180} height={64} fill={WATER} />
      <Path d="M150 136 L150 214 L330 214 L330 136" fill="none" stroke={O} strokeWidth={1.6} />
      {/* beehive shelf and inverted gas jar */}
      <Rect x={220} y={176} width={34} height={10} fill="#c9a36b" stroke={O} strokeWidth={0.8} />
      <Rect x={216} y={80} width={36} height={96} fill={GLASS} stroke={O} strokeWidth={1.3} />
      <Rect x={217} y={124} width={34} height={51} fill={WATER} />
      {range(5, (i) => <Circle key={i} cx={232 + (i % 2) * 5} cy={170 - i * 9} r={2.2} fill="#ffffff" stroke={O} strokeWidth={0.5} />)}
    </G>
  );
}

// ---------- chlorine from manganese(IV) oxide and hydrochloric acid ----------
function Bottle({ x, fill }) {
  return (
    <G>
      <Rect x={x} y={104} width={40} height={84} rx={4} fill={GLASS} stroke={O} strokeWidth={1.3} />
      <Rect x={x + 1} y={140} width={38} height={47} fill={fill} />
      <Rect x={x + 6} y={98} width={28} height={8} rx={2} fill="#9aa3ab" stroke={O} strokeWidth={0.8} />
    </G>
  );
}

function ChlorineArt() {
  return (
    <G>
      {/* tap funnel of acid over a round-bottomed flask, heated */}
      <Path d="M44 20 L72 20 L62 46 L54 46 Z" fill={GLASS} stroke={O} strokeWidth={1.2} />
      <Path d="M46 24 L70 24 L63 40 L55 40 Z" fill="#f4f1d8" />
      <Rect x={56} y={46} width={4} height={60} fill={GLASS} stroke={O} strokeWidth={1} />
      <Rect x={50} y={60} width={16} height={6} rx={2} fill="#9aa3ab" stroke={O} strokeWidth={0.8} />
      <Rect x={50} y={92} width={22} height={18} fill={GLASS} stroke={O} strokeWidth={1.2} />
      <Circle cx={60} cy={142} r={34} fill={GLASS} stroke={O} strokeWidth={1.4} />
      <Path d="M28 152 A34 34 0 0 0 92 152 Z" fill="#f4f1d8" />
      {range(14, (i) => <Circle key={i} cx={40 + (i % 7) * 6} cy={164 + Math.floor(i / 7) * 5} r={1.8} fill="#2f2f2f" />)}
      <Rect x={50} y={92} width={22} height={8} rx={2} fill="#9aa3ab" stroke={O} strokeWidth={0.8} />
      <Bunsen x={60} y={206} h={30} />
      {/* wash bottles */}
      <Tube d="M68 96 L68 78 L150 78 L150 172" />
      <Bottle x={134} fill={WATER} />
      <Tube d="M168 102 L168 78 L222 78 L222 172" />
      <Bottle x={206} fill="#efe4c6" />
      {/* gas jar, downward delivery */}
      <Tube d="M240 102 L240 78 L304 78 L304 192" />
      <Rect x={282} y={100} width={44} height={98} fill={GLASS} stroke={O} strokeWidth={1.3} />
      <Rect x={283} y={140} width={42} height={57} fill="#dfe8a8" opacity={0.85} />
      <Rect x={276} y={96} width={56} height={5} fill="#c4cbd2" stroke={O} strokeWidth={0.8} />
    </G>
  );
}

// ---------- flow charts ----------
function Box({ x, y, w, h, title, lines = [], fill = '#ffffff' }) {
  return (
    <G>
      <Rect x={x} y={y} width={w} height={h} rx={6} fill={fill} stroke={O} strokeWidth={1.3} />
      <Txt x={x + w / 2} y={y + 16} size={10} weight="700">{title}</Txt>
      {lines.map((t, i) => (
        <Txt key={i} x={x + w / 2} y={y + 31 + i * 13} size={9}>{t}</Txt>
      ))}
    </G>
  );
}
function Flow({ x1, y1, x2, y2 }) {
  return (
    <G>
      <Line x1={x1} y1={y1} x2={x2} y2={y2} stroke={O} strokeWidth={1.5} />
      <Head x={x2} y={y2} dx={x2 - x1} dy={y2 - y1} size={7} />
    </G>
  );
}

function ContactArt() {
  return (
    <G>
      <Txt x={42} y={44} size={9} anchor="middle">sulphur</Txt>
      <Txt x={42} y={56} size={9} anchor="middle">+ air</Txt>
      <Flow x1={42} y1={62} x2={42} y2={86} />
      <Box x={6} y={88} w={96} h={56} title="Burner" lines={['S + O₂ → SO₂']} fill="#fbeedd" />
      <Flow x1={102} y1={116} x2={128} y2={116} />
      <Box x={130} y={80} w={120} h={72} title="Converter" lines={['2SO₂ + O₂ ⇌ 2SO₃', 'V₂O₅ catalyst', 'about 450 °C']} fill="#e8eef7" />
      <Flow x1={190} y1={152} x2={190} y2={176} />
      <Box x={130} y={178} w={120} h={58} title="Absorber" lines={['SO₃ + H₂SO₄ → H₂S₂O₇']} fill="#e8f1e4" />
      <Flow x1={250} y1={207} x2={276} y2={207} />
      <Box x={278} y={178} w={96} h={58} title="Diluting tank" lines={['H₂S₂O₇ + H₂O', '→ 2H₂SO₄']} fill="#f3e9f5" />
      <Flow x1={326} y1={178} x2={326} y2={150} />
      <Txt x={326} y={140} size={9.5} weight="700">sulphuric acid</Txt>
    </G>
  );
}

function HaberArt() {
  return (
    <G>
      <Box x={6} y={70} w={92} h={58} title="Raw gases" lines={['N₂ from air', 'H₂ from natural gas']} fill="#fbeedd" />
      <Flow x1={98} y1={99} x2={120} y2={99} />
      <Box x={122} y={74} w={70} h={50} title="Compressor" lines={['200 atm']} fill="#eef0f2" />
      <Flow x1={192} y1={99} x2={212} y2={99} />
      <Box x={214} y={56} w={92} h={86} title="Converter" lines={['N₂ + 3H₂ ⇌ 2NH₃', 'iron catalyst', 'about 450 °C']} fill="#e8eef7" />
      <Flow x1={306} y1={99} x2={322} y2={99} />
      <Box x={324} y={70} w={70} h={58} title="Cooler" lines={['ammonia', 'liquefies']} fill="#e4f1f4" />
      <Flow x1={376} y1={128} x2={376} y2={168} />
      <Txt x={376} y={182} size={9.5} weight="700">liquid ammonia</Txt>
      {/* recycle loop */}
      <Path d="M342 128 L342 160 L157 160 L157 130" fill="none" stroke={O} strokeWidth={1.4} strokeDasharray="5 3" />
      <Head x={157} y={126} dx={0} dy={-1} size={7} />
      <Txt x={250} y={174} size={9}>unreacted N₂ and H₂ recycled</Txt>
    </G>
  );
}

export const CHEMISTRY_MORE = {
  'oxygen-preparation': {
    title: 'Preparing oxygen from hydrogen peroxide, collected over water',
    w: 340,
    h: 220,
    art: () => <OverWaterArt solid="#2f2f2f" />,
    labels: [
      ['Hydrogen peroxide\nsolution', 30, 32, 52, 30],
      ['Manganese(IV) oxide\n(catalyst)', 30, 196, 48, 184],
      ['Delivery tube', 150, 50, 150, 63],
      ['Oxygen collects\nat the top', 300, 70, 252, 104],
      ['Trough of water', 300, 206, 300, 196],
      ['Beehive shelf', 300, 160, 254, 181],
    ],
  },
  'hydrogen-preparation': {
    title: 'Preparing hydrogen from zinc and dilute hydrochloric acid, collected over water',
    w: 340,
    h: 220,
    art: () => <OverWaterArt solid="#a9b1b8" lumps />,
    labels: [
      ['Dilute hydrochloric\nacid', 30, 32, 52, 30],
      ['Zinc granules', 30, 196, 44, 182],
      ['Delivery tube', 150, 50, 150, 63],
      ['Hydrogen collects\nat the top', 300, 70, 252, 104],
      ['Trough of water', 300, 206, 300, 196],
      ['Beehive shelf', 300, 160, 254, 181],
    ],
  },
  'chlorine-preparation': {
    title: 'Preparing dry chlorine in a fume cupboard',
    w: 340,
    h: 238,
    art: ChlorineArt,
    labels: [
      ['Concentrated\nhydrochloric acid', 30, 30, 46, 26],
      ['Manganese(IV) oxide', 30, 160, 40, 166],
      ['Heat', 30, 196, 56, 190],
      ['Water removes\nhydrogen chloride', 154, 214, 154, 188],
      ['Concentrated sulphuric\nacid dries the gas', 226, 22, 226, 98],
      ['Chlorine collects by\ndownward delivery', 340, 150, 326, 150],
    ],
  },
  'contact-process': {
    title: 'The Contact process for making sulphuric acid',
    w: 380,
    h: 244,
    art: ContactArt,
    labels: [],
  },
  'haber-process': {
    title: 'The Haber process for making ammonia',
    w: 400,
    h: 190,
    art: HaberArt,
    labels: [],
  },
};
