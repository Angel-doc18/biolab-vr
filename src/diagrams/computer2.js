// More Computer Science figures: the desktop and a window, text alignment, page
// layout, the parts of a table and the ports on a laptop.
import { Circle, G, Line, Path, Rect } from 'react-native-svg';
import { Txt } from './Diagram';

const O = '#33414d';
const range = (n, f) => Array.from({ length: n }, (_, i) => f(i));

// ---------- the desktop and a window ----------
function Icon({ x, y, fill, name }) {
  return (
    <G>
      <Rect x={x} y={y} width={22} height={18} rx={3} fill={fill} stroke={O} strokeWidth={0.8} />
      <Txt x={x + 11} y={y + 30} size={7.5} fill="#ffffff">{name}</Txt>
    </G>
  );
}
function DesktopArt() {
  return (
    <G>
      <Rect x={6} y={6} width={320} height={190} rx={4} fill="#3f6fb5" stroke={O} strokeWidth={1.4} />
      <Icon x={18} y={18} fill="#e2e8f0" name="Recycle Bin" />
      <Icon x={18} y={62} fill="#f2c94c" name="Folder" />
      {/* a window */}
      <Rect x={90} y={26} width={200} height={128} fill="#ffffff" stroke={O} strokeWidth={1.2} />
      <Rect x={90} y={26} width={200} height={20} fill="#dbe7f5" stroke={O} strokeWidth={1.2} />
      <Txt x={98} y={40} size={9} anchor="start" weight="700">Notes.docx</Txt>
      <Txt x={250} y={41} size={11} weight="700">–</Txt>
      <Rect x={262} y={32} width={9} height={8} fill="none" stroke={O} strokeWidth={1} />
      <Txt x={283} y={41} size={10} weight="700">×</Txt>
      {range(6, (i) => <Line key={i} x1={102} y1={60 + i * 14} x2={i === 5 ? 200 : 278} y2={60 + i * 14} stroke="#c4ccd3" strokeWidth={3} />)}
      {/* taskbar */}
      <Rect x={6} y={170} width={320} height={26} fill="#1f2933" />
      <Rect x={12} y={175} width={16} height={16} rx={2} fill="#3f6fb5" stroke="#ffffff" strokeWidth={0.8} />
      <Rect x={40} y={175} width={16} height={16} rx={2} fill="#dbe7f5" />
      <Rect x={62} y={175} width={16} height={16} rx={2} fill="#f2c94c" />
      <Txt x={300} y={187} size={8.5} fill="#ffffff">10:42</Txt>
    </G>
  );
}

// ---------- text alignment ----------
function Para({ x, y, kind, label }) {
  const widths = [86, 70, 92, 60, 80];
  return (
    <G>
      <Rect x={x} y={y} width={100} height={66} fill="#ffffff" stroke="#9aa7b2" strokeWidth={1} />
      {widths.map((wd, i) => {
        const w = kind === 'justify' ? (i === widths.length - 1 ? 50 : 88) : wd;
        const x0 = kind === 'left' || kind === 'justify' ? x + 6 : kind === 'right' ? x + 94 - w : x + 50 - w / 2;
        return <Line key={i} x1={x0} y1={y + 10 + i * 11} x2={x0 + w} y2={y + 10 + i * 11} stroke="#5a6b78" strokeWidth={3} />;
      })}
      <Txt x={x + 50} y={y + 82} size={9.5} weight="700">{label}</Txt>
    </G>
  );
}
function AlignArt() {
  return (
    <G>
      <Para x={4} y={6} kind="left" label="Left (Ctrl + L)" />
      <Para x={114} y={6} kind="centre" label="Centre (Ctrl + E)" />
      <Para x={224} y={6} kind="right" label="Right (Ctrl + R)" />
      <Para x={334} y={6} kind="justify" label="Justify (Ctrl + J)" />
    </G>
  );
}

// ---------- page layout ----------
function LayoutArt() {
  return (
    <G>
      {/* portrait page with margins */}
      <Rect x={20} y={10} width={120} height={170} fill="#ffffff" stroke={O} strokeWidth={1.4} />
      <Rect x={40} y={34} width={80} height={122} fill="#f4f7fb" stroke="#3f6fb5" strokeWidth={1} strokeDasharray="4 3" />
      <Rect x={40} y={16} width={80} height={12} fill="#fbefd0" />
      <Txt x={80} y={25} size={7.5}>header</Txt>
      <Rect x={40} y={162} width={80} height={12} fill="#fbefd0" />
      <Txt x={80} y={171} size={7.5}>footer: page 1</Txt>
      {range(7, (i) => <Line key={i} x1={46} y1={46 + i * 14} x2={i === 6 ? 90 : 114} y2={46 + i * 14} stroke="#9aa7b2" strokeWidth={2.5} />)}
      <Txt x={80} y={196} size={10} weight="700">Portrait (A4)</Txt>
      {/* landscape page */}
      <Rect x={178} y={56} width={150} height={104} fill="#ffffff" stroke={O} strokeWidth={1.4} />
      <Rect x={196} y={72} width={114} height={72} fill="#f4f7fb" stroke="#3f6fb5" strokeWidth={1} strokeDasharray="4 3" />
      {range(4, (i) => <Line key={i} x1={202} y1={84 + i * 14} x2={i === 3 ? 260 : 304} y2={84 + i * 14} stroke="#9aa7b2" strokeWidth={2.5} />)}
      <Txt x={253} y={176} size={10} weight="700">Landscape</Txt>
    </G>
  );
}

// ---------- the parts of a table ----------
function TableArt() {
  const x0 = 20;
  const y0 = 20;
  const cw = 60;
  const rh = 24;
  return (
    <G>
      <Rect x={x0} y={y0} width={cw * 4} height={rh} fill="#fbefd0" stroke={O} strokeWidth={1.2} />
      <Txt x={x0 + cw * 2} y={y0 + 16} size={9.5} weight="700">Merged cells: one title across the top</Txt>
      {range(4, (r) =>
        range(4, (c) => (
          <Rect
            key={`${r}-${c}`}
            x={x0 + c * cw}
            y={y0 + rh + r * rh}
            width={cw}
            height={rh}
            fill={r === 1 ? '#e6eef8' : c === 2 ? '#e3f0da' : '#ffffff'}
            stroke={O}
            strokeWidth={1}
          />
        ))
      )}
      <Rect x={x0 + 3 * cw} y={y0 + rh + 3 * rh} width={cw} height={rh} fill="#ffffff" stroke="#c8463d" strokeWidth={2.4} />
    </G>
  );
}

// ---------- ports on a laptop ----------
const PORTS = [
  ['Power', 24],
  ['USB-A', 64],
  ['USB-C', 100],
  ['HDMI', 140],
  ['VGA', 186],
  ['Ethernet (RJ45)', 238],
  ['Audio jack', 288],
];
function PortsArt() {
  return (
    <G>
      <Rect x={6} y={30} width={310} height={42} rx={8} fill="#c9d2da" stroke={O} strokeWidth={1.4} />
      <Circle cx={24} cy={51} r={6} fill="#1f2933" />
      <Rect x={54} y={46} width={20} height={9} rx={1} fill="#1f2933" />
      <Rect x={92} y={47} width={16} height={7} rx={3.5} fill="#1f2933" />
      <Path d="M128 46 L152 46 L148 56 L132 56 Z" fill="#1f2933" />
      <Path d="M172 44 L200 44 L196 58 L176 58 Z" fill="#2d4f8a" />
      {range(5, (i) => <Circle key={i} cx={178 + i * 4} cy={49} r={0.9} fill="#ffffff" />)}
      <Rect x={226} y={42} width={24} height={18} rx={2} fill="#1f2933" />
      <Rect x={232} y={56} width={12} height={4} fill="#c9d2da" />
      <Circle cx={288} cy={51} r={5} fill="#1f2933" />
      <Circle cx={288} cy={51} r={2} fill="#c9d2da" />
    </G>
  );
}

export const COMPUTER_2 = {
  'desktop-gui': {
    title: 'The desktop and a window (graphical user interface)',
    w: 332,
    h: 200,
    art: DesktopArt,
    labels: [
      ['Title bar', 120, -8, 140, 30],
      ['Minimise, maximise\nand close', 316, -8, 266, 34],
      ['Icons', -4, 46, 18, 28],
      ['Start button', -4, 210, 20, 190],
      ['Open programs', 80, 214, 70, 190],
      ['Clock and\nnotification area', 340, 212, 300, 190],
    ],
  },
  'text-alignment': { title: 'Paragraph alignment in a word processor', w: 438, h: 96, art: AlignArt, labels: [] },
  'page-layout': {
    title: 'Page layout: margins, header and footer, orientation',
    w: 332,
    h: 200,
    art: LayoutArt,
    labels: [
      ['Margin', 4, 100, 30, 100],
      ['Text area', 160, 30, 112, 40],
    ],
  },
  'table-parts': {
    title: 'The parts of a table',
    w: 270,
    h: 146,
    art: TableArt,
    labels: [
      ['Row', 276, 80, 260, 80],
      ['Column', 170, 160, 170, 140],
      ['Cell', 276, 128, 258, 128],
    ],
  },
  'computer-ports': {
    title: 'Ports on the side of a laptop',
    w: 322,
    h: 80,
    art: PortsArt,
    labels: PORTS.map(([name, x], i) => [name, x, i % 2 ? 92 : 14, x, i % 2 ? 60 : 42]),
  },
};
