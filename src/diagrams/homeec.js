// Home Economics figures for Form 2: the three food groups, care-label symbols,
// hand stitches and a table setting. Plain drawings with ruled labels.
import { Circle, Ellipse, G, Line, Path, Rect } from 'react-native-svg';
import { Txt } from './Diagram';

const O = '#33414d';
const range = (n, f) => Array.from({ length: n }, (_, i) => f(i));
const rad = (d) => (d * Math.PI) / 180;

// ---------- the three food groups ----------
function FoodGroupsArt() {
  const cx = 118;
  const cy = 96;
  const r = 80;
  const seg = (a0, a1, fill) => {
    const p = (a) => `${(cx + r * Math.cos(rad(a))).toFixed(1)} ${(cy + r * Math.sin(rad(a))).toFixed(1)}`;
    return <Path d={`M${cx} ${cy} L${p(a0)} A${r} ${r} 0 0 1 ${p(a1)} Z`} fill={fill} stroke="#ffffff" strokeWidth={2.5} />;
  };
  const block = (x, y, title, lines, fill) => (
    <G>
      <Txt x={x} y={y} size={10} weight="700" fill={fill}>{title}</Txt>
      {lines.map((l, i) => (
        <Txt key={i} x={x} y={y + 12 + i * 10} size={8}>{l}</Txt>
      ))}
    </G>
  );
  return (
    <G>
      <Circle cx={cx} cy={cy} r={r + 8} fill="#f4f6f8" stroke="#9aa7b2" strokeWidth={1.2} />
      {seg(-90, 30, '#fbe3a6')}
      {seg(30, 150, '#f3c4b5')}
      {seg(150, 270, '#cfe3b4')}
      {block(158, 62, 'Energy', ['cassava, yam,', 'rice, plantain,', 'palm oil'], '#8a5a00')}
      {block(118, 128, 'Body-building', ['beans, fish, eggs,', 'meat, groundnuts'], '#8a2f1d')}
      {block(78, 62, 'Protective', ['fruit and', 'vegetables'], '#2f5d1f')}
      {/* a glass of water */}
      <Path d="M228 60 L262 60 L256 134 L234 134 Z" fill="#e3f1fb" stroke={O} strokeWidth={1.2} />
      <Path d="M230 80 L260 80 L256 132 L234 132 Z" fill="#a9d3f0" />
      <Txt x={245} y={152} size={10} weight="700">Water</Txt>
    </G>
  );
}

// ---------- care-label symbols ----------
function CareArt() {
  const cap = (x, lines) => lines.map((l, i) => <Txt key={i} x={x} y={74 + i * 11} size={8.5}>{l}</Txt>);
  const tub = (x) => (
    <G>
      <Path d={`M${x - 18} 22 L${x - 14} 50 L${x + 14} 50 L${x + 18} 22`} fill="none" stroke={O} strokeWidth={1.6} />
      <Path d={`M${x - 17} 28 q4 -4 8 0 t8 0 t8 0 t8 0`} fill="none" stroke={O} strokeWidth={1.2} />
      <Txt x={x} y={44} size={10} weight="700">40</Txt>
    </G>
  );
  const tri = (x, cross) => (
    <G>
      <Path d={`M${x} 20 L${x + 20} 52 L${x - 20} 52 Z`} fill="none" stroke={O} strokeWidth={1.6} />
      {cross && <Path d={`M${x - 16} 22 L${x + 16} 54 M${x + 16} 22 L${x - 16} 54`} stroke="#c8463d" strokeWidth={1.8} />}
    </G>
  );
  const iron = (x) => (
    <G>
      <Path d={`M${x - 20} 50 L${x + 18} 50 L${x + 18} 34 C${x + 18} 26 ${x + 8} 24 ${x - 2} 24 L${x - 10} 24 C${x - 16} 30 ${x - 20} 40 ${x - 20} 50 Z`} fill="none" stroke={O} strokeWidth={1.6} />
      <Circle cx={x - 3} cy={41} r={2} fill={O} />
      <Circle cx={x + 6} cy={41} r={2} fill={O} />
    </G>
  );
  return (
    <G>
      {tub(30)}
      {cap(30, ['Wash, at most', '40 °C'])}
      {tri(88)}
      {cap(88, ['Bleach', 'allowed'])}
      {tri(146, true)}
      {cap(146, ['Do not', 'bleach'])}
      <Rect x={186} y={22} width={30} height={30} fill="none" stroke={O} strokeWidth={1.6} />
      {cap(201, ['Drying'])}
      {iron(258)}
      {cap(258, ['Iron warm', '(2 dots)'])}
      <Circle cx={318} cy={37} r={15} fill="none" stroke={O} strokeWidth={1.6} />
      {cap(318, ['Dry', 'clean'])}
    </G>
  );
}

// ---------- hand stitches ----------
const STITCHES = ['Tacking', 'Running stitch', 'Backstitch', 'Hemming', 'Overcasting', 'Blanket stitch'];
function StitchesArt() {
  const x0 = 104;
  const x1 = 330;
  const row = (i) => 22 + i * 27;
  const thread = '#c8463d';
  const out = [];
  STITCHES.forEach((name, i) => {
    const y = row(i);
    out.push(<Rect key={`f${i}`} x={x0 - 6} y={y - 11} width={x1 - x0 + 12} height={22} fill="#f3efe4" stroke="#d8cfb8" strokeWidth={0.8} />);
    out.push(<Txt key={`t${i}`} x={x0 - 12} y={y + 4} size={10} anchor="end" weight="700">{name}</Txt>);
  });
  // tacking: long even stitches
  range(9, (k) => out.push(<Line key={`a${k}`} x1={x0 + k * 25} y1={row(0)} x2={x0 + k * 25 + 15} y2={row(0)} stroke={thread} strokeWidth={2} />));
  // running stitch: small even stitches
  range(19, (k) => out.push(<Line key={`b${k}`} x1={x0 + k * 12} y1={row(1)} x2={x0 + k * 12 + 6} y2={row(1)} stroke={thread} strokeWidth={2} />));
  // backstitch: stitches that meet end to end
  range(22, (k) => out.push(<Line key={`c${k}`} x1={x0 + k * 10} y1={row(2)} x2={x0 + k * 10 + 9} y2={row(2)} stroke={thread} strokeWidth={2} />));
  // hemming: small slanting stitches over a folded edge
  out.push(<Line key="hf" x1={x0} y1={row(3) + 3} x2={x1} y2={row(3) + 3} stroke="#a89466" strokeWidth={1.4} />);
  range(22, (k) => out.push(<Line key={`d${k}`} x1={x0 + k * 10} y1={row(3) + 6} x2={x0 + k * 10 + 5} y2={row(3) - 3} stroke={thread} strokeWidth={1.6} />));
  // overcasting: slanting stitches over a raw edge
  out.push(<Line key="of" x1={x0} y1={row(4) + 5} x2={x1} y2={row(4) + 5} stroke="#a89466" strokeWidth={1.4} strokeDasharray="1 2" />);
  range(19, (k) => out.push(<Line key={`e${k}`} x1={x0 + k * 12} y1={row(4) - 6} x2={x0 + k * 12 + 8} y2={row(4) + 8} stroke={thread} strokeWidth={1.6} />));
  // blanket stitch: upright stitches joined along the edge
  const ye = row(5) + 6;
  out.push(<Line key="bf" x1={x0} y1={ye} x2={x1} y2={ye} stroke="#a89466" strokeWidth={1.4} />);
  out.push(<Path key="bl" d={range(19, (k) => `M${x0 + k * 12} ${ye} L${x0 + k * 12} ${row(5) - 5} M${x0 + k * 12} ${ye} L${x0 + k * 12 + 12} ${ye}`).join(' ')} stroke={thread} strokeWidth={1.6} fill="none" />);
  return <G>{out}</G>;
}

// ---------- a table setting ----------
function Fork({ x, y }) {
  return (
    <G>
      <Line x1={x} y1={y} x2={x} y2={y + 44} stroke={O} strokeWidth={2.4} strokeLinecap="round" />
      {[-4, -1.3, 1.3, 4].map((d) => (
        <Line key={d} x1={x + d} y1={y - 16} x2={x + d} y2={y} stroke={O} strokeWidth={1.2} />
      ))}
      <Path d={`M${x - 4} ${y} Q${x} ${y + 6} ${x + 4} ${y}`} fill="none" stroke={O} strokeWidth={1.2} />
    </G>
  );
}
function Knife({ x, y }) {
  return (
    <G>
      <Line x1={x} y1={y + 18} x2={x} y2={y + 60} stroke={O} strokeWidth={2.8} strokeLinecap="round" />
      {/* blade, with its cutting edge towards the plate (on the left) */}
      <Path d={`M${x + 1.5} ${y + 18} L${x + 1.5} ${y - 4} Q${x + 1.5} ${y - 12} ${x - 3} ${y - 6} L${x - 3} ${y + 18} Z`} fill="#dfe5ea" stroke={O} strokeWidth={1} />
    </G>
  );
}
function Spoon({ x, y, rot = 0 }) {
  return (
    <G transform={rot ? `rotate(${rot} ${x} ${y})` : undefined}>
      <Ellipse cx={x} cy={y} rx={4.5} ry={7} fill="#dfe5ea" stroke={O} strokeWidth={1} />
      <Line x1={x} y1={y + 7} x2={x} y2={y + 46} stroke={O} strokeWidth={2.2} strokeLinecap="round" />
    </G>
  );
}
function TableArt() {
  return (
    <G>
      <Rect x={0} y={0} width={300} height={168} fill="#f1e7d6" />
      <Line x1={0} y1={168} x2={300} y2={168} stroke={O} strokeWidth={2} />
      {/* dinner plate */}
      <Circle cx={150} cy={118} r={34} fill="#ffffff" stroke={O} strokeWidth={1.4} />
      <Circle cx={150} cy={118} r={24} fill="none" stroke="#c4ccd3" strokeWidth={1} />
      <Fork x={102} y={104} />
      <Knife x={196} y={98} />
      <Spoon x={212} y={100} />
      {/* dessert spoon above the plate, handle to the right */}
      <Spoon x={128} y={66} rot={-90} />
      {/* glass above the knife */}
      <Circle cx={200} cy={58} r={11} fill="#e3f1fb" stroke={O} strokeWidth={1.2} />
      {/* side plate with napkin on the left */}
      <Circle cx={62} cy={96} r={20} fill="#ffffff" stroke={O} strokeWidth={1.2} />
      <Path d="M50 88 L74 88 L68 106 L56 106 Z" fill="#f6d8d0" stroke="#b5655a" strokeWidth={0.9} />
    </G>
  );
}

export const HOMEEC = {
  'food-groups': { title: 'The three food groups: every meal should include each group, with water', w: 280, h: 186, art: FoodGroupsArt, labels: [] },
  'care-symbols': { title: 'Care-label symbols (a cross means "do not")', w: 340, h: 100, art: CareArt, labels: [] },
  'hand-stitches': { title: 'Hand stitches as they look on the right side of the fabric', w: 336, h: 172, art: StitchesArt, labels: [] },
  'table-setting': {
    title: 'Laying a cover for one person (seen from above)',
    w: 300,
    h: 172,
    art: TableArt,
    labels: [
      ['Glass', 248, 30, 206, 50],
      ['Dessert spoon', 60, 30, 112, 66],
      ['Side plate\nand napkin', 4, 140, 52, 108],
      ['Fork', 70, 162, 102, 146],
      ['Dinner plate', 150, 186, 150, 152],
      ['Knife (blade in)', 250, 160, 197, 150],
      ['Soup spoon', 260, 110, 214, 120],
    ],
  },
};
