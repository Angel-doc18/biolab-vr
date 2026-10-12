// Form 4 Geography figures from the 2026/2027 harmonised scheme of work: map
// scales, grid references, contours and cross-sections, the Earth's layers and
// rocks, plate boundaries and volcanoes, weathering, rivers and waterfalls,
// climates, the rainforest, tropical cyclones, migration and settlement sites.
import { Circle, G, Line, Path, Rect } from 'react-native-svg';
import { Head, Txt } from './Diagram';
import { columnsSpec, cycleSpec, flowSpec } from './charts';

const O = '#33414d';
const MUTED = '#5a6b78';
const LAND = '#e8dcc0';

// ---------- map scales ----------
function ScaleArt() {
  const x0 = 20;
  const cm = 40; // 1 cm on the drawing
  return (
    <G>
      <Txt x={8} y={20} size={10} anchor="start" weight="700">
        Statement:
      </Txt>
      <Txt x={84} y={20} size={10} anchor="start">
        1 cm represents 0.5 km
      </Txt>
      <Txt x={8} y={44} size={10} anchor="start" weight="700">
        Representative fraction:
      </Txt>
      <Txt x={162} y={44} size={10} anchor="start">
        1 : 50 000 (or 1/50 000)
      </Txt>
      <Txt x={8} y={68} size={10} anchor="start" weight="700">
        Linear scale:
      </Txt>
      {[0, 1, 2, 3, 4].map((i) => (
        <Rect key={i} x={x0 + i * cm} y={78} width={cm} height={8} fill={i % 2 ? '#ffffff' : O} stroke={O} strokeWidth={0.8} />
      ))}
      {['0', '0.5', '1', '1.5', '2 km'].map((t, i) => (
        <Txt key={t} x={x0 + i * cm} y={100} size={9}>
          {t}
        </Txt>
      ))}
      <Txt x={8} y={124} size={9} anchor="start" italic>
        On this map, 1 cm = 50 000 cm = 500 m = 0.5 km
      </Txt>
    </G>
  );
}

// ---------- grid references ----------
function GridArt() {
  const x0 = 40;
  const y0 = 14;
  const s = 50;
  const east = [21, 22, 23, 24];
  const north = [50, 49, 48, 47];
  // a church at easting 23.4, northing 47.7
  const px = x0 + (23.4 - 21) * s;
  const py = y0 + (50 - 47.7) * s;
  return (
    <G>
      {[0, 1, 2, 3].map((i) => (
        <G key={i}>
          <Line x1={x0 + i * s} y1={y0} x2={x0 + i * s} y2={y0 + 3 * s} stroke={MUTED} strokeWidth={1} />
          <Line x1={x0} y1={y0 + i * s} x2={x0 + 3 * s} y2={y0 + i * s} stroke={MUTED} strokeWidth={1} />
          <Txt x={x0 + i * s} y={y0 + 3 * s + 14} size={9.5} weight="700">
            {east[i]}
          </Txt>
          <Txt x={x0 - 8} y={y0 + i * s + 4} size={9.5} weight="700" anchor="end">
            {north[i]}
          </Txt>
        </G>
      ))}
      {/* tenths in the square 23-24 / 47-48 */}
      {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((t) => (
        <G key={t}>
          <Line x1={x0 + 2 * s + t * 5} y1={y0 + 2 * s} x2={x0 + 2 * s + t * 5} y2={y0 + 3 * s} stroke="#c8d0d6" strokeWidth={0.6} />
          <Line x1={x0 + 2 * s} y1={y0 + 3 * s - t * 5} x2={x0 + 3 * s} y2={y0 + 3 * s - t * 5} stroke="#c8d0d6" strokeWidth={0.6} />
        </G>
      ))}
      <Rect x={px - 4} y={py - 4} width={8} height={8} fill="#c0392b" />
      <Line x1={px} y1={py - 4} x2={px} y2={py - 10} stroke="#c0392b" strokeWidth={1.4} />
      <Line x1={px - 3} y1={py - 8} x2={px + 3} y2={py - 8} stroke="#c0392b" strokeWidth={1.4} />
      <Txt x={x0 + 3 * s + 14} y={y0 + 20} size={9.5} anchor="start" weight="700">
        Church: 234 477
      </Txt>
      <Txt x={x0 + 3 * s + 14} y={y0 + 40} size={9} anchor="start">
        Four-figure square: 2347
      </Txt>
      <Txt x={x0 + 3 * s + 14} y={y0 + 60} size={9} anchor="start">
        Eastings first (across),
      </Txt>
      <Txt x={x0 + 3 * s + 14} y={y0 + 74} size={9} anchor="start">
        then northings (up)
      </Txt>
    </G>
  );
}

// ---------- contour patterns ----------
function ContoursArt() {
  const panel = (x, title) => (
    <G>
      <Rect x={x} y={6} width={96} height={96} fill="#fbfaf5" stroke={O} strokeWidth={0.8} />
      <Txt x={x + 48} y={118} size={9.5} weight="700">
        {title}
      </Txt>
    </G>
  );
  const C = '#a0632b';
  return (
    <G>
      {/* hill */}
      {panel(4, 'Hill')}
      {[38, 26, 14].map((r, i) => (
        <Circle key={r} cx={52} cy={54} r={r} fill="none" stroke={C} strokeWidth={1.1} />
      ))}
      <Txt x={52} y={57} size={7.5}>
        300
      </Txt>
      <Txt x={52} y={23} size={7}>
        200
      </Txt>
      {/* valley: V points upstream (uphill) */}
      {panel(108, 'Valley')}
      {[50, 70, 90].map((y) => (
        <Path key={y} d={`M112 ${y} L156 ${y - 34} L200 ${y}`} fill="none" stroke={C} strokeWidth={1.1} />
      ))}
      <Path d="M156 22 L156 100" stroke="#3f6fd8" strokeWidth={1.6} />
      <Txt x={186} y={98} size={7}>
        low
      </Txt>
      <Txt x={186} y={16} size={7}>
        high
      </Txt>
      {/* spur: V points downhill */}
      {panel(212, 'Spur')}
      {[20, 40, 60].map((y) => (
        <Path key={y} d={`M216 ${y} L260 ${y + 34} L304 ${y}`} fill="none" stroke={C} strokeWidth={1.1} />
      ))}
      <Txt x={290} y={98} size={7}>
        low
      </Txt>
      <Txt x={290} y={16} size={7}>
        high
      </Txt>
      {/* cliff: contours crowd together */}
      {panel(316, 'Cliff')}
      {[0, 1, 2, 3].map((i) => (
        <Path key={i} d={`M320 ${40 + i * 3} Q364 ${30 + i * 3} 408 ${40 + i * 3}`} fill="none" stroke={C} strokeWidth={1.1} />
      ))}
      <Path d="M320 80 Q364 70 408 80" fill="none" stroke={C} strokeWidth={1.1} />
    </G>
  );
}

// ---------- drawing a cross-section ----------
function SectionArt() {
  const C = '#a0632b';
  // a hill crossed by the line X-Y
  const rings = [
    [70, 100],
    [48, 200],
    [24, 300],
  ];
  const cx = 150;
  const cy = 76;
  const base = 256;
  const yOf = (hgt) => base - hgt * 0.22;
  return (
    <G>
      {rings.map(([r, hgt]) => (
        <Circle key={hgt} cx={cx} cy={cy} r={r} fill="none" stroke={C} strokeWidth={1.1} />
      ))}
      <Line x1={50} y1={cy} x2={250} y2={cy} stroke={O} strokeWidth={1.3} />
      <Txt x={44} y={cy + 4} size={10} weight="700" anchor="end">
        X
      </Txt>
      <Txt x={256} y={cy + 4} size={10} weight="700" anchor="start">
        Y
      </Txt>
      {/* where X-Y crosses each contour, drop a line to the graph */}
      {rings.flatMap(([r, hgt]) => [cx - r, cx + r].map((x) => <Line key={`${hgt}${x}`} x1={x} y1={cy} x2={x} y2={yOf(hgt)} stroke="#c8d0d6" strokeWidth={0.8} strokeDasharray="3 3" />))}
      {/* axes */}
      <Line x1={50} y1={base} x2={250} y2={base} stroke={O} strokeWidth={1} />
      <Line x1={50} y1={base} x2={50} y2={yOf(350)} stroke={O} strokeWidth={1} />
      {[100, 200, 300].map((hgt) => (
        <G key={hgt}>
          <Line x1={46} y1={yOf(hgt)} x2={50} y2={yOf(hgt)} stroke={O} strokeWidth={1} />
          <Txt x={42} y={yOf(hgt) + 3} size={8} anchor="end">
            {hgt}
          </Txt>
        </G>
      ))}
      <Path
        d={`M50 ${yOf(60)} L80 ${yOf(100)} L102 ${yOf(200)} L126 ${yOf(300)} Q150 ${yOf(345)} 174 ${yOf(300)} L198 ${yOf(200)} L220 ${yOf(100)} L250 ${yOf(60)}`}
        fill="#e8dcc0"
        stroke={O}
        strokeWidth={1.4}
      />
      <Txt x={150} y={base + 14} size={8.5} italic>
        Profile from X to Y (heights in metres)
      </Txt>
    </G>
  );
}

// ---------- the Earth's layers ----------
function LayersArt() {
  const cx = 150;
  const cy = 170;
  return (
    <G>
      <Path d={`M${cx - 140} ${cy} A140 140 0 0 1 ${cx + 140} ${cy} Z`} fill="#b3753a" />
      <Path d={`M${cx - 132} ${cy} A132 132 0 0 1 ${cx + 132} ${cy} Z`} fill="#e07b39" />
      <Path d={`M${cx - 75} ${cy} A75 75 0 0 1 ${cx + 75} ${cy} Z`} fill="#f2b33d" />
      <Path d={`M${cx - 34} ${cy} A34 34 0 0 1 ${cx + 34} ${cy} Z`} fill="#fbe27a" />
      <Line x1={cx - 140} y1={cy} x2={cx + 140} y2={cy} stroke={O} strokeWidth={1.2} />
    </G>
  );
}

// ---------- a volcano and the intrusive features ----------
function VolcanoArt() {
  return (
    <G>
      {/* ground and layers of rock */}
      <Rect x={0} y={120} width={360} height={110} fill={LAND} />
      {[140, 165, 190].map((y) => (
        <Line key={y} x1={0} y1={y} x2={360} y2={y} stroke="#cdbf9f" strokeWidth={0.8} />
      ))}
      {/* composite cone with layers of ash and lava */}
      <Path d="M90 120 L160 30 L176 30 L246 120 Z" fill="#8d7b6a" />
      <Path d="M112 120 L162 52 M136 120 L166 70 M222 120 L172 52 M200 120 L170 70" stroke="#6b5b4d" strokeWidth={1} />
      {/* crater */}
      <Path d="M158 30 L168 40 L178 30" fill="#d9532c" stroke="#d9532c" />
      {/* vent and magma chamber */}
      <Path d="M165 40 L165 200 L171 200 L171 40 Z" fill="#d9532c" />
      <Path d="M120 205 Q168 180 216 205 Q168 226 120 205 Z" fill="#d9532c" />
      {/* dyke cutting across layers */}
      <Path d="M262 210 L272 130 L278 130 L268 210 Z" fill="#c0442a" />
      {/* sill along the layers */}
      <Rect x={20} y={160} width={70} height={7} fill="#c0442a" />
      {/* laccolith: a dome pushing up the layers */}
      <Path d="M290 175 Q320 140 350 175 Z" fill="#c0442a" />
      {/* batholith deep down */}
      <Path d="M10 230 Q50 196 100 230 Z" fill="#a8432e" />
    </G>
  );
}

// ---------- a waterfall ----------
function FallArt() {
  return (
    <G>
      {/* hard rock cap */}
      <Path d="M0 60 L170 60 L170 84 L0 84 Z" fill="#7d8790" />
      {/* soft rock */}
      <Path d="M0 84 L158 84 L150 170 L0 170 Z" fill="#d8c39a" />
      <Path d="M150 170 L360 170 L360 190 L0 190 L0 170 Z" fill="#d8c39a" />
      <Path d="M200 120 L360 120 L360 170 L200 170 Z" fill="#d8c39a" />
      {/* river on top and falling */}
      <Path d="M0 52 L172 52 L172 60 L0 60 Z" fill="#5b9bd5" />
      <Path d="M170 56 Q186 90 184 160" stroke="#5b9bd5" strokeWidth={8} fill="none" />
      {/* plunge pool */}
      <Path d="M160 168 Q186 196 214 168 Z" fill="#5b9bd5" />
      <Path d="M210 160 L360 160 L360 168 L210 168 Z" fill="#5b9bd5" />
      {/* undercut hollow */}
      <Path d="M158 84 Q150 110 156 140" stroke={O} strokeWidth={1} fill="none" strokeDasharray="3 3" />
      <Line x1={120} y1={30} x2={60} y2={30} stroke={O} strokeWidth={1.3} />
      <Head x={60} y={30} dx={-1} dy={0} size={7} fill={O} />
      <Txt x={90} y={22} size={8.5} italic>
        The fall retreats upstream
      </Txt>
    </G>
  );
}

// ---------- a climate graph for Douala ----------
const DOUALA_RAIN = [50, 80, 210, 240, 300, 400, 690, 700, 600, 400, 140, 60];
const DOUALA_TEMP = [27.5, 28, 27.5, 27.5, 27, 26, 25, 24.5, 25.5, 26, 27, 27.5];
function ClimateArt() {
  const x0 = 40;
  const base = 170;
  const bw = 20;
  const rainY = (mm) => base - mm * 0.2;
  const tempY = (c) => base - (c - 20) * 16;
  return (
    <G>
      <Line x1={x0} y1={base} x2={x0 + 12 * bw} y2={base} stroke={O} strokeWidth={1} />
      <Line x1={x0} y1={base} x2={x0} y2={rainY(750)} stroke={O} strokeWidth={1} />
      <Line x1={x0 + 12 * bw} y1={base} x2={x0 + 12 * bw} y2={rainY(750)} stroke={O} strokeWidth={1} />
      {DOUALA_RAIN.map((mm, i) => (
        <Rect key={i} x={x0 + i * bw + 2} y={rainY(mm)} width={bw - 4} height={mm * 0.2} fill="#7fb3e0" />
      ))}
      <Path d={DOUALA_TEMP.map((c, i) => `${i ? 'L' : 'M'}${x0 + i * bw + bw / 2} ${tempY(c)}`).join(' ')} stroke="#d9532c" strokeWidth={2} fill="none" />
      {'JFMAMJJASOND'.split('').map((m, i) => (
        <Txt key={i} x={x0 + i * bw + bw / 2} y={base + 12} size={8.5}>
          {m}
        </Txt>
      ))}
      {[0, 200, 400, 600].map((mm) => (
        <Txt key={mm} x={x0 - 4} y={rainY(mm) + 3} size={7.5} anchor="end">
          {mm}
        </Txt>
      ))}
      {[22, 24, 26, 28].map((c) => (
        <Txt key={c} x={x0 + 12 * bw + 4} y={tempY(c) + 3} size={7.5} anchor="start" fill="#d9532c">
          {c}
        </Txt>
      ))}
      <Txt x={x0 - 30} y={rainY(750) - 4} size={8} anchor="start" fill="#3f6fd8">
        Rain (mm)
      </Txt>
      <Txt x={x0 + 12 * bw + 30} y={rainY(750) - 4} size={8} anchor="end" fill="#d9532c">
        Temp (°C)
      </Txt>
      <Txt x={x0 + 6 * bw} y={base + 28} size={8.5} italic>
        Douala: about 3 900 mm of rain a year, warm all year
      </Txt>
    </G>
  );
}

// ---------- layers of the equatorial rainforest ----------
function ForestArt() {
  const tree = (x, top, w, c) => (
    <G>
      <Rect x={x - 2} y={top + 10} width={4} height={200 - top} fill="#6b4f2a" />
      <Circle cx={x} cy={top + 6} r={w} fill={c} />
    </G>
  );
  return (
    <G>
      <Rect x={0} y={200} width={300} height={10} fill="#8a6a3a" />
      {tree(60, 20, 22, '#2e7d32')}
      {[110, 160, 210, 250].map((x) => (
        <G key={x}>{tree(x, 62, 24, '#43a047')}</G>
      ))}
      {[85, 140, 190, 235].map((x) => (
        <G key={x}>{tree(x, 112, 14, '#66bb6a')}</G>
      ))}
      {[30, 75, 125, 175, 220, 270].map((x) => (
        <Circle key={x} cx={x} cy={190} r={9} fill="#9ccc65" />
      ))}
      {[0, 1, 2].map((i) => (
        <Path key={i} d={`M${58 + i * 2} 210 L${48 + i * 6} 196`} stroke="#6b4f2a" strokeWidth={2} />
      ))}
    </G>
  );
}

export const GEOGRAPHY_3 = {
  'map-scales': {
    title: 'Three ways of showing the scale of a map',
    w: 300,
    h: 132,
    art: ScaleArt,
    labels: [],
    facts: [
      'A statement scale gives it in words: 1 cm represents 0.5 km.',
      'A representative fraction gives it as a ratio, 1 : 50 000: one unit on the map is 50 000 of the same units on the ground.',
      'A linear scale is a ruled line divided into ground distances, used with dividers or a strip of paper.',
      'At 1 : 50 000, 1 cm on the map is 50 000 cm, which is 500 m or 0.5 km.',
    ],
  },
  'grid-reference': {
    title: 'Four- and six-figure grid references',
    w: 330,
    h: 186,
    art: GridArt,
    labels: [],
    facts: [
      'Grid lines running up and down are eastings; they are numbered along the bottom and read first.',
      'Grid lines running across are northings; they are numbered up the side and read second.',
      'The church is in square 2347, named by the easting and the northing of its bottom-left corner.',
      'Dividing the square into tenths gives the six-figure reference 234 477: easting 23 and 4 tenths, northing 47 and 7 tenths.',
    ],
  },
  'contour-landforms': {
    title: 'Contour patterns of four landforms',
    w: 416,
    h: 124,
    art: ContoursArt,
    labels: [],
    facts: [
      'A hill: closed contours, with the highest in the middle.',
      'A valley: the contours form Vs that point upstream, towards higher ground, and a river runs along it.',
      'A spur: the contours form Vs that point downhill, towards lower ground.',
      'A cliff or steep slope: the contours crowd close together or even merge.',
    ],
  },
  'cross-section': {
    title: 'Drawing a cross-section from X to Y',
    w: 270,
    h: 274,
    art: SectionArt,
    labels: [],
    facts: [
      'Lay a strip of paper along the line X to Y and mark every point where it crosses a contour, with its height.',
      'Move the strip to a graph whose horizontal axis is the same length as X to Y and whose vertical axis shows height.',
      'Plot each height above its mark and join the points with a smooth curve to show the shape of the land.',
    ],
  },
  'earth-layers': {
    title: 'The layers of the Earth',
    w: 300,
    h: 180,
    art: LayersArt,
    labels: [
      ['Crust: 5 to 70 km thick', 230, 22, 236, 74],
      ['Mantle: to about 2 900 km', 6, 40, 70, 100],
      ['Outer core: liquid iron and nickel', 232, 132, 205, 140],
      ['Inner core: solid, about 6 370 km down', 72, 192, 150, 156],
    ],
  },
  'rock-cycle': cycleSpec('The rock cycle', ['Magma', 'Igneous rock\n(magma cools)', 'Sediments\n(weathering, erosion)', 'Sedimentary rock\n(pressed, cemented)', 'Metamorphic rock\n(heat, pressure)'], { boxW: 116, r: 92 }),
  'plate-boundaries': columnsSpec('Three kinds of plate boundary', [
    { head: 'Constructive', items: ['Plates move apart', 'Magma rises: new crust', 'e.g. Mid-Atlantic Ridge'] },
    { head: 'Destructive', items: ['Plates move together', 'One plate sinks', 'Volcanoes, fold mountains', 'e.g. the Andes'] },
    { head: 'Conservative', items: ['Plates slide past', 'No crust made or lost', 'Strong earthquakes', 'e.g. San Andreas Fault'] },
  ], { colW: 128 }),
  'volcano-features': {
    title: 'A volcano and the features formed by magma underground',
    w: 360,
    h: 230,
    art: VolcanoArt,
    labels: [
      ['Crater', 210, 18, 172, 33],
      ['Vent', 112, 70, 166, 90],
      ['Ash and lava layers', 262, 66, 214, 100],
      ['Sill', 34, 148, 50, 163],
      ['Dyke', 300, 112, 272, 150],
      ['Laccolith', 330, 196, 320, 166],
      ['Magma chamber', 214, 226, 190, 208],
      ['Batholith', 62, 244, 52, 222],
    ],
  },
  'weathering-types': columnsSpec('Kinds of weathering', [
    { head: 'Physical', items: ['Exfoliation', 'Frost shattering', 'Block disintegration'] },
    { head: 'Chemical', items: ['Carbonation', 'Oxidation', 'Hydrolysis'] },
    { head: 'Biological', items: ['Plant roots', 'Burrowing animals', 'People'] },
  ], { colW: 120 }),
  'river-courses': columnsSpec('The three courses of a river', [
    { head: 'Upper course', items: ['Steep gradient', 'Vertical erosion', 'V-shaped valleys', 'Waterfalls, rapids'] },
    { head: 'Middle course', items: ['Gentler gradient', 'Lateral erosion', 'Wider valley', 'Meanders'] },
    { head: 'Lower course', items: ['Gentle gradient', 'Deposition', 'Floodplain, levees', 'Ox-bow lakes, delta'] },
  ], { colW: 122 }),
  waterfall: {
    title: 'How a waterfall forms and retreats',
    w: 360,
    h: 196,
    art: FallArt,
    labels: [
      ['Hard rock', 40, 76, 60, 72],
      ['Soft rock, worn away faster', 40, 126, 80, 126],
      ['Overhang', 226, 70, 168, 82],
      ['Undercutting', 108, 148, 154, 120],
      ['Plunge pool', 250, 190, 190, 178],
    ],
  },
  'oxbow-steps': flowSpec('How an ox-bow lake forms', ['Erosion on the outer\nbend, deposition\non the inner bend', 'The neck of the\nmeander narrows', 'In a flood the river\ncuts through the neck', 'Deposits seal off\nthe old bend', 'The cut-off bend is\nan ox-bow lake'], { boxW: 118 }),
  'climate-graph': {
    title: 'A climate graph: Douala',
    w: 320,
    h: 206,
    art: ClimateArt,
    labels: [],
    facts: [
      'The bars show the rainfall of each month, read on the left scale in millimetres.',
      'The line shows the mean temperature of each month, read on the right scale in degrees Celsius.',
      'Douala is hot all year, about 25 to 28 °C, and very wet, with most rain from June to September, when the south-west monsoon blows in from the sea.',
    ],
  },
  'hot-climates': columnsSpec('Hot climates of the world', [
    { head: 'Equatorial', items: ['About 27 °C all year', 'Rain all year', 'Over 2 000 mm', 'e.g. Congo Basin'] },
    { head: 'Tropical (savanna)', items: ['Hot all year', 'Wet and dry seasons', '500 to 1 500 mm', 'e.g. Garoua'] },
    { head: 'Hot desert', items: ['Very hot days', 'Cold nights', 'Under 250 mm', 'e.g. Sahara'] },
  ], { colW: 122 }),
  'cool-climates': columnsSpec('Cooler climates of the world', [
    { head: 'Mediterranean', items: ['Hot, dry summers', 'Mild, wet winters', 'e.g. Algiers, Rome'] },
    { head: 'Cool temperate', items: ['Mild summers', 'Cool winters', 'Rain all year', 'e.g. London'] },
    { head: 'Polar', items: ['Below 10 °C all year', 'Long, dark winters', 'Little precipitation', 'e.g. Greenland'] },
  ], { colW: 122 }),
  'rainforest-layers': {
    title: 'Layers of the equatorial rainforest',
    w: 300,
    h: 214,
    art: ForestArt,
    labels: [
      ['Emergents: 40 to 50 m', 150, 18, 76, 20],
      ['Canopy: a closed roof of crowns', 236, 50, 210, 64],
      ['Under-canopy', 262, 112, 236, 118],
      ['Shrub layer', 290, 176, 270, 188],
      ['Buttress roots', 14, 228, 54, 204],
    ],
  },
  'cyclone-steps': flowSpec('How a tropical cyclone forms', ['Sea warmer than\nabout 27 °C heats\nthe air above it', 'Warm, moist air\nrises fast: very\nlow pressure', 'Air spirals in and\nup around a calm eye', 'Towering clouds,\nheavy rain, winds\nover 119 km/h', 'It weakens over land\nor cooler sea'], { boxW: 120 }),
  'migration-types': columnsSpec('Kinds of migration', [
    { head: 'Internal', items: ['Within a country', 'e.g. village to Douala'] },
    { head: 'International', items: ['Across a border', 'e.g. to Gabon or Europe'] },
    { head: 'Voluntary', items: ['By choice', 'For work or study'] },
    { head: 'Forced', items: ['To escape danger', 'Refugees, displaced people'] },
  ], { colW: 112 }),
  'settlement-sites': columnsSpec('What makes a good site for a settlement', [
    { head: 'Water', items: ['Spring or river near'] },
    { head: 'Dry point', items: ['Safe from floods'] },
    { head: 'Defence', items: ['Hilltop, river bend'] },
    { head: 'Route centre', items: ['Roads meet, bridge'] },
  ], { colW: 112 }),
};
