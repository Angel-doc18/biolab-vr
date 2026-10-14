// Geology figures for Forms 4 and 5: the origin and interior of the Earth,
// its spheres, minerals and crystals, the three rock groups, hazards, a key to
// hand specimens, folds and faults, a stratigraphic section, fossils and the
// time scale, an artesian basin, an oil trap, sketch maps of the geology and
// mineral resources of Cameroon, and the GCE (0555) year.
import { Circle, Ellipse, G, Line, Path, Polygon, Rect } from 'react-native-svg';
import { Head, Txt } from './Diagram';
import { columnsSpec, cycleSpec, flowSpec, treeSpec } from './charts';
import { Outline, Town, TOWNS, px, py } from './geography4';

const O = '#33414d';
const WATER = '#4a90c8';

// Clip a polygon to an axis-aligned box (Sutherland-Hodgman); the polygon may
// be concave, the box is convex.
function clipBox(poly, x0, y0, x1, y1) {
  const sides = [
    [(p) => p[0] >= x0, (a, b) => [x0, a[1] + ((b[1] - a[1]) * (x0 - a[0])) / (b[0] - a[0])]],
    [(p) => p[0] <= x1, (a, b) => [x1, a[1] + ((b[1] - a[1]) * (x1 - a[0])) / (b[0] - a[0])]],
    [(p) => p[1] >= y0, (a, b) => [a[0] + ((b[0] - a[0]) * (y0 - a[1])) / (b[1] - a[1]), y0]],
    [(p) => p[1] <= y1, (a, b) => [a[0] + ((b[0] - a[0]) * (y1 - a[1])) / (b[1] - a[1]), y1]],
  ];
  let out = poly;
  for (const [inside, cross] of sides) {
    const src = out;
    out = [];
    src.forEach((p, i) => {
      const q = src[(i + 1) % src.length];
      if (inside(q)) {
        if (!inside(p)) out.push(cross(p, q));
        out.push(q);
      } else if (inside(p)) out.push(cross(p, q));
    });
    if (!out.length) break;
  }
  return out;
}
const pts = (poly) => poly.map(([x, y]) => `${x.toFixed(1)},${y.toFixed(1)}`).join(' ');
// The band between two curves y = top(x) and y = bottom(x), sampled from x0 to x1.
function band(top, bottom, x0, x1, step = 5) {
  const xs = [];
  for (let x = x0; x < x1; x += step) xs.push(x);
  xs.push(x1);
  return [...xs.map((x) => [x, top(x)]), ...xs.reverse().map((x) => [x, bottom(x)])];
}
function Shape({ poly, fill, stroke = O, width = 0.9 }) {
  return poly.length ? <Polygon points={pts(poly)} fill={fill} stroke={stroke} strokeWidth={width} /> : null;
}
function HalfArrow({ x1, y1, x2, y2 }) {
  return (
    <G>
      <Line x1={x1} y1={y1} x2={x2} y2={y2} stroke={O} strokeWidth={1.6} />
      <Head x={x2} y={y2} dx={x2 - x1} dy={y2 - y1} size={6} fill={O} />
    </G>
  );
}

// ---------- the interior of the Earth ----------
// Radii to scale for 6,371 km = 100 units, except the crust, which is drawn
// 5 units thick so it can be seen.
function InteriorArt() {
  const cx = 110;
  const cy = 115;
  return (
    <G>
      <Circle cx={cx} cy={cy} r={100} fill="#7a5c3e" stroke={O} strokeWidth={1.2} />
      <Circle cx={cx} cy={cy} r={95} fill="#f0b46a" stroke={O} strokeWidth={0.9} />
      <Circle cx={cx} cy={cy} r={54.5} fill="#e5793b" stroke={O} strokeWidth={1.1} />
      <Circle cx={cx} cy={cy} r={19.2} fill="#f4d03f" stroke={O} strokeWidth={1.1} />
    </G>
  );
}

// ---------- folds and a normal fault ----------
const FOLD_FILLS = ['#d7c7e6', '#e8d0b0', '#c9d6e8', '#d9e6c3', '#f3e3b5'];
function FoldsFaultArt() {
  const wave = (x) => -22 * Math.cos((2 * Math.PI * (x - 58)) / 174);
  const levels = [50, 70, 90, 110, 130];
  const fault = (y) => 250 + (y - 40) * (30 / 110);
  const left = (y1, y2) => [[205, y1], [fault(y1), y1], [fault(y2), y2], [205, y2]];
  const right = (y1, y2) => [[fault(y1), y1], [330, y1], [330, y2], [fault(y2), y2]];
  const beds = [[50, 70], [70, 90], [90, 110], [110, 130], [130, 150]];
  return (
    <G>
      {/* folds: the lowest band is the oldest */}
      {levels.slice(0, -1).map((c, i) => (
        <Shape key={c} poly={band((x) => c + wave(x), (x) => levels[i + 1] + wave(x), 15, 190)} fill={FOLD_FILLS[4 - i]} />
      ))}
      <Line x1={58} y1={32} x2={58} y2={160} stroke={O} strokeWidth={0.9} strokeDasharray="4 3" />
      <Line x1={145} y1={32} x2={145} y2={148} stroke={O} strokeWidth={0.9} strokeDasharray="4 3" />
      {/* normal fault: the hanging wall (right) has moved down 20 units */}
      {beds.map(([a, b], i) => (
        <Shape key={`l${a}`} poly={left(a, b)} fill={FOLD_FILLS[4 - i]} />
      ))}
      {beds.slice(0, 4).map(([a, b], i) => (
        <Shape key={`r${a}`} poly={right(a + 20, b + 20)} fill={FOLD_FILLS[4 - i]} />
      ))}
      <Line x1={fault(44)} y1={44} x2={fault(154)} y2={154} stroke={O} strokeWidth={2.4} />
      <HalfArrow x1={273} y1={92} x2={278.8} y2={113.2} />
      <HalfArrow x1={262.8} y1={120} x2={257} y2={98.8} />
    </G>
  );
}

// ---------- a stratigraphic section ----------
const SECTION_FILLS = { 1: '#c9d6e8', 2: '#e8d0b0', 3: '#d7c7e6', 4: '#d9e6c3', 5: '#f3e3b5' };
function SectionArt() {
  const strip = (a, b) => clipBox([[a - 200, -40], [b - 200, -40], [b + 200, 240], [a + 200, 240]], 20, 100, 220, 170);
  let wavy = 'M20 100';
  for (let x = 20; x < 220; x += 10) wavy += ` Q${x + 5} 97 ${x + 10} 100`;
  return (
    <G>
      <Shape poly={strip(-400, 30)} fill={SECTION_FILLS[1]} />
      <Shape poly={strip(30, 110)} fill={SECTION_FILLS[2]} />
      <Shape poly={strip(110, 500)} fill={SECTION_FILLS[3]} />
      <Rect x={20} y={70} width={200} height={30} fill={SECTION_FILLS[4]} stroke={O} strokeWidth={0.9} />
      <Rect x={20} y={40} width={200} height={30} fill={SECTION_FILLS[5]} stroke={O} strokeWidth={0.9} />
      <Path d={wavy} stroke={O} strokeWidth={1.8} fill="none" />
      <Polygon points="124,170 134,170 142,40 132,40" fill="#c0504d" stroke={O} strokeWidth={0.9} />
      {[['1', 45, 152], ['2', 100, 142], ['3', 195, 120], ['4', 60, 89], ['5', 60, 59]].map(([n, x, y]) => (
        <Txt key={n} x={x} y={y} size={11} weight="700" fill={O}>
          {n}
        </Txt>
      ))}
    </G>
  );
}

// ---------- an artesian basin ----------
function ArtesianArt() {
  const ground = (x) => 95 - 0.0045 * (x - 120) ** 2;
  const top = (x) => 120 - 0.0075 * (x - 120) ** 2;
  const bottom = (x) => 150 - 0.0075 * (x - 120) ** 2;
  const meet = Math.sqrt(25 / 0.003);
  return (
    <G>
      <Shape poly={band(bottom, () => 180, 15, 225)} fill="#cdb79e" />
      <Shape poly={band((x) => Math.max(ground(x), top(x)), bottom, 15, 225)} fill="#f3e3b5" />
      <Shape poly={band(ground, top, 120 - meet, 120 + meet)} fill="#cdb79e" />
      <Line x1={18} y1={46} x2={222} y2={46} stroke={WATER} strokeWidth={1.4} strokeDasharray="5 3" />
      {[20, 27, 34, 206, 213, 220].map((x) => (
        <Line key={x} x1={x + 2} y1={14} x2={x - 1} y2={28} stroke={WATER} strokeWidth={1.4} />
      ))}
      <Rect x={118.5} y={84} width={3} height={42} fill="#555f69" />
      <Path d="M120 84 L120 72 M120 84 Q112 70 104 82 M120 84 Q128 70 136 82" stroke={WATER} strokeWidth={1.6} fill="none" />
    </G>
  );
}

// ---------- an anticline oil trap ----------
function OilTrapArt() {
  const curve = (c) => (x) => c + 0.005 * (x - 120) ** 2;
  const box = (poly, yMax = 175) => clipBox(poly, 15, 25, 225, yMax);
  const reservoir = band(curve(80), curve(110), 15, 225);
  return (
    <G>
      <Shape poly={box(band(() => 25, curve(55), 15, 225))} fill="#e8dcc0" />
      <Shape poly={box(band(curve(55), curve(80), 15, 225))} fill="#9aa5ad" />
      <Shape poly={box(reservoir)} fill="#a9cbe8" />
      <Shape poly={box(reservoir, 104)} fill="#5b4636" width={0} />
      <Shape poly={box(reservoir, 90)} fill="#f2c94c" width={0} />
      <Shape poly={box(reservoir)} fill="none" />
      <Shape poly={box(band(curve(110), curve(135), 15, 225))} fill="#4f5a4c" />
      <Shape poly={box(band(curve(135), () => 200, 15, 225))} fill="#c7b9a6" />
      <Polygon points="112,25 128,25 120,6" fill="none" stroke={O} strokeWidth={1.3} />
      <Line x1={120} y1={25} x2={120} y2={88} stroke={O} strokeWidth={1.8} />
    </G>
  );
}

// ---------- the geological time scale, to scale ----------
// 4,600 million years = 200 units, so the thin bands at the top are true to scale.
const tY = (ma) => 20 + (ma / 4600) * 200;
const ERAS = [
  [0, 66, '#f6d860'],
  [66, 252, '#8fd18f'],
  [252, 541, '#8ec3de'],
  [541, 4600, '#eaa7c4'],
];
function TimeBarArt() {
  return (
    <G>
      {ERAS.map(([a, b, fill]) => (
        <Rect key={a} x={60} y={tY(a)} width={40} height={tY(b) - tY(a)} fill={fill} stroke={O} strokeWidth={0.8} />
      ))}
      {[0, 1000, 2000, 3000, 4000, 4600].map((ma) => (
        <G key={ma}>
          <Line x1={55} y1={tY(ma)} x2={60} y2={tY(ma)} stroke={O} strokeWidth={0.9} />
          <Txt x={52} y={tY(ma) + 3} size={8} anchor="end">
            {ma.toLocaleString('en-US')}
          </Txt>
        </G>
      ))}
      <Txt x={30} y={10} size={8} weight="700">
        Ma ago
      </Txt>
    </G>
  );
}

// ---------- sketch maps of Cameroon ----------
const BASEMENT = '#f2cfc4';
const NTEM = '#dd9f8f';
const SEDIMENT = '#f3e19a';
const VOLCANIC = '#8e6a9e';
const geo = (list) => list.map(([lon, lat]) => `${px(lon).toFixed(1)},${py(lat).toFixed(1)}`).join(' ');
const MAP_W = Math.round(px(16.4) + 10);
const MAP_H = Math.round(py(1.4) + 10);

function Swatch({ x, y, fill, text, dot }) {
  return (
    <G>
      {dot ? <Circle cx={x + 5} cy={y - 3} r={4} fill={fill} stroke="#ffffff" strokeWidth={1} /> : <Rect x={x} y={y - 8} width={11} height={9} fill={fill} stroke={O} strokeWidth={0.8} />}
      <Txt x={x + 16} y={y} size={7.5} anchor="start">
        {text}
      </Txt>
    </G>
  );
}
function Num({ at, n }) {
  return (
    <G>
      <Circle cx={px(at[0])} cy={py(at[1])} r={5} fill="#ffffff" stroke={O} strokeWidth={0.9} />
      <Txt x={px(at[0])} y={py(at[1]) + 2.5} size={7} weight="700">
        {n}
      </Txt>
    </G>
  );
}

const BASINS = [
  { n: 1, name: 'Rio del Rey (oil)', at: [8.5, 4.4] },
  { n: 2, name: 'Douala, Kribi-Campo', at: [9.8, 3.75] },
  { n: 3, name: 'Mamfe', at: [9.4, 5.75] },
  { n: 4, name: 'Garoua (Benue trough)', at: [13.6, 9.35] },
  { n: 5, name: 'Lake Chad', at: [14.65, 11.6] },
];

function GeologyMapArt() {
  return (
    <G>
      <Outline fill={BASEMENT} />
      <Polygon points={geo([[10.1, 2.29], [11.3, 2.2], [13.3, 2.2], [14.6, 2.05], [14.2, 2.9], [13.0, 3.3], [11.6, 3.3], [10.5, 3.2], [10.1, 2.9]])} fill={NTEM} stroke={O} strokeWidth={0.6} />
      {/* sedimentary basins */}
      <Polygon points={geo([[8.35, 4.35], [8.55, 4.55], [8.68, 5.0], [8.95, 4.7], [8.9, 4.2], [8.6, 4.15]])} fill={SEDIMENT} stroke={O} strokeWidth={0.6} />
      <Polygon points={geo([[9.45, 4.05], [9.6, 3.9], [9.8, 3.0], [9.98, 3.05], [10.15, 3.7], [10.05, 4.3], [9.75, 4.55], [9.5, 4.4]])} fill={SEDIMENT} stroke={O} strokeWidth={0.6} />
      <Polygon points={geo([[9.82, 2.95], [9.9, 2.3], [10.08, 2.32], [10.0, 3.0]])} fill={SEDIMENT} stroke={O} strokeWidth={0.6} />
      <Ellipse cx={px(9.4)} cy={py(5.75)} rx={9} ry={5} fill={SEDIMENT} stroke={O} strokeWidth={0.6} />
      <Ellipse cx={px(13.6)} cy={py(9.35)} rx={16} ry={7} fill={SEDIMENT} stroke={O} strokeWidth={0.6} />
      <Polygon points={geo([[14.15, 11.3], [14.2, 12.3], [14.4, 12.7], [14.7, 12.6], [15.05, 12.1], [15.1, 11.0], [15.6, 10.1], [14.9, 10.0], [14.6, 10.4], [14.3, 10.9]])} fill={SEDIMENT} stroke={O} strokeWidth={0.6} />
      {/* the Cameroon Volcanic Line */}
      <Ellipse cx={px(8.7)} cy={py(3.5)} rx={6} ry={8} fill={VOLCANIC} stroke={O} strokeWidth={0.6} />
      <Ellipse cx={px(9.17)} cy={py(4.2)} rx={8} ry={7} fill={VOLCANIC} stroke={O} strokeWidth={0.6} />
      <Circle cx={px(9.83)} cy={py(5.03)} r={4.5} fill={VOLCANIC} stroke={O} strokeWidth={0.6} />
      <Circle cx={px(10.1)} cy={py(5.65)} r={5.5} fill={VOLCANIC} stroke={O} strokeWidth={0.6} />
      <Circle cx={px(10.5)} cy={py(6.2)} r={5.5} fill={VOLCANIC} stroke={O} strokeWidth={0.6} />
      <Ellipse cx={px(13.6)} cy={py(7.3)} rx={12} ry={7} fill={VOLCANIC} stroke={O} strokeWidth={0.6} />
      {BASINS.map((b) => (
        <Num key={b.n} at={b.at} n={b.n} />
      ))}
      <Town name="Yaoundé" at={TOWNS.Yaoundé} />
      {/* key, in the empty space to the north-west */}
      <Txt x={12} y={20} size={8} weight="700" anchor="start">
        Key
      </Txt>
      <Swatch x={12} y={34} fill={BASEMENT} text="Precambrian basement" />
      <Swatch x={12} y={46} fill={NTEM} text="Ntem complex (Archaean)" />
      <Swatch x={12} y={58} fill={SEDIMENT} text="Sedimentary basins" />
      <Swatch x={12} y={70} fill={VOLCANIC} text="Volcanic rocks (CVL)" />
      {BASINS.map((b, i) => (
        <G key={b.n}>
          <Circle cx={17} cy={83 + i * 11} r={4.5} fill="#ffffff" stroke={O} strokeWidth={0.8} />
          <Txt x={17} y={85.5 + i * 11} size={6.5} weight="700">
            {b.n}
          </Txt>
          <Txt x={26} y={86 + i * 11} size={7.5} anchor="start">
            {b.name}
          </Txt>
        </G>
      ))}
      <Txt x={px(12.2)} y={py(1.55)} size={8} italic>
        Simplified sketch map
      </Txt>
    </G>
  );
}

const SITES = [
  { what: 'Oil and gas', fill: '#222b33', at: [[8.55, 4.3], [9.75, 2.85]] },
  { what: 'Bauxite', fill: '#c0392b', at: [[12.9, 6.9], [13.27, 6.47]] },
  { what: 'Iron ore', fill: '#5d6d7e', at: [[13.8, 2.35]] },
  { what: 'Gold', fill: '#d4a20d', at: [[14.08, 5.6], [14.36, 4.43]] },
  { what: 'Diamond', fill: '#2e86c1', at: [[14.9, 3.3]] },
  { what: 'Cobalt, nickel', fill: '#7d3c98', at: [[13.62, 3.16]] },
  { what: 'Rutile', fill: '#16a085', at: [[12.25, 3.77]] },
  { what: 'Limestone', fill: '#8a8f6a', at: [[13.96, 9.76]] },
];
const PLACE = [
  ['Minim-Martap', 12.9, 6.9, 5, 3, 'start'],
  ['Ngaoundal', 13.27, 6.47, 5, 4, 'start'],
  ['Mbalam', 13.8, 2.35, 5, 3, 'start'],
  ['Bétaré-Oya', 14.08, 5.6, -5, 3, 'end'],
  ['Batouri', 14.36, 4.43, -5, 3, 'end'],
  ['Mobilong', 14.9, 3.3, 0, 12, 'middle'],
  ['Nkamouna', 13.62, 3.16, -5, 3, 'end'],
  ['Akonolinga', 12.25, 3.77, -5, -2, 'end'],
  ['Figuil', 13.96, 9.76, -5, 3, 'end'],
  ['Kribi', 9.75, 2.85, -5, 3, 'end'],
];

function ResourcesMapArt() {
  return (
    <G>
      <Outline fill="#f6f1e4" />
      {SITES.map((s) =>
        s.at.map(([lon, lat]) => <Circle key={`${s.what}${lon}`} cx={px(lon)} cy={py(lat)} r={4} fill={s.fill} stroke="#ffffff" strokeWidth={1} />),
      )}
      {PLACE.map(([name, lon, lat, dx, dy, anchor]) => (
        <Txt key={name} x={px(lon) + dx} y={py(lat) + dy} size={7} anchor={anchor}>
          {name}
        </Txt>
      ))}
      <Txt x={4} y={py(3.62)} size={7} anchor="start">
        Rio del
      </Txt>
      <Txt x={4} y={py(3.62) + 8} size={7} anchor="start">
        Rey
      </Txt>
      <Txt x={12} y={20} size={8} weight="700" anchor="start">
        Key
      </Txt>
      {SITES.map((s, i) => (
        <Swatch key={s.what} x={12} y={34 + i * 12} fill={s.fill} text={s.what} dot />
      ))}
      <Txt x={px(12.2)} y={py(1.55)} size={8} italic>
        Simplified sketch map
      </Txt>
    </G>
  );
}

export const GEOLOGY = {
  // ---------- Form 4 ----------
  'geol-origin': flowSpec('The origin of the Earth', ['Big Bang,\n13.8 billion\nyears ago', 'A nebula\ncollapses under\ngravity', 'The Sun forms\nat the centre', 'Dust and gas\naccrete into\nplanets', 'The Earth forms,\n4.6 billion\nyears ago', 'Layers separate:\ncore, mantle,\ncrust'], { perRow: 3, boxW: 108, boxH: 58 }),
  'geol-interior': {
    title: 'The interior of the Earth',
    w: 340,
    h: 236,
    art: InteriorArt,
    labels: [
      ['Crust, 5 to 70 km', 232, 22, 151, 26],
      ['Moho', 232, 48, 177, 48],
      ['Mantle', 232, 80, 178, 83],
      ['Gutenberg,\n2,900 km', 232, 112, 164, 115],
      ['Outer core\n(liquid)', 232, 142, 145, 128],
      ['Lehmann,\n5,150 km', 232, 170, 125, 127],
      ['Inner core\n(solid)', 232, 198, 105, 128],
      ['Crust thickness exaggerated', 110, 230],
    ],
    facts: [
      'The crust is 5 to 10 km thick under the oceans (basaltic SiMa) and 30 to 70 km under the continents (granitic SiAl).',
      'The Moho separates the crust from the mantle, which extends to about 2,900 km.',
      'The Gutenberg discontinuity at 2,900 km separates the mantle from the liquid outer core; S waves cannot cross it.',
      'The Lehmann discontinuity at about 5,150 km separates the outer core from the solid inner core, which reaches the centre at 6,371 km.',
      'The core is mainly iron and nickel.',
    ],
  },
  'geol-spheres': columnsSpec('The four spheres of the Earth', [
    { head: 'Lithosphere', items: ['crust and upper', 'mantle', 'rocks and soil'] },
    { head: 'Atmosphere', items: ['78% nitrogen', '21% oxygen', 'weathers rocks'] },
    { head: 'Hydrosphere', items: ['97% in oceans', 'rivers, ice', 'erodes, deposits'] },
    { head: 'Biosphere', items: ['all living things', 'roots, burrows', 'stores carbon'] },
  ], { colW: 98 }),
  'geol-mohs': columnsSpec('The Mohs scale of hardness', [
    { head: '1 to 5\n(softer)', items: ['1 talc', '2 gypsum', '3 calcite', '4 fluorite', '5 apatite'] },
    { head: '6 to 10\n(harder)', items: ['6 orthoclase', '7 quartz', '8 topaz', '9 corundum', '10 diamond'] },
    { head: 'Simple tools', items: ['fingernail 2.5', 'copper coin 3.5', 'knife, glass 5.5', 'streak plate 6.5'] },
  ], { colW: 112 }),
  'geol-crystal-systems': columnsSpec('Crystal systems and symmetry', [
    { head: 'Cubic', items: ['3 equal axes', 'all at 90°', 'halite, galena,', 'pyrite, garnet'] },
    { head: 'Tetragonal', items: ['2 equal axes', 'and 1 different,', 'all at 90°', 'zircon'] },
    { head: 'Hexagonal', items: ['3 equal axes', 'at 120°, and', '1 vertical axis', 'beryl'] },
    { head: 'A cube has', items: ['9 planes', '13 axes: 3 four-fold,', '4 three-fold,', '6 two-fold', '1 centre'] },
  ], { colW: 104 }),
  'geol-igneous-class': columnsSpec('Classifying igneous rocks', [
    { head: 'Acid\n(over 65% silica)', items: ['coarse: granite', 'fine: rhyolite', 'light, less dense'] },
    { head: 'Intermediate\n(55 to 65%)', items: ['coarse: diorite', 'fine: andesite'] },
    { head: 'Basic\n(45 to 55%)', items: ['coarse: gabbro', 'fine: basalt', 'dark, dense'] },
    { head: 'Ultrabasic\n(under 45%)', items: ['peridotite', 'olivine and', 'pyroxene'] },
  ], { colW: 104 }),
  'geol-sed-cycle': cycleSpec('The sedimentary cycle', ['Weathering', 'Erosion', 'Transport', 'Deposition', 'Compaction', 'Cementation'], { r: 100, boxW: 100, boxH: 40, centre: 'Rock to new rock' }),
  'geol-sed-class': treeSpec('Classifying sedimentary rocks', 'Sedimentary rocks', [
    { name: 'Clastic\n(fragments)', items: ['conglomerate', 'breccia', 'sandstone', 'shale'] },
    { name: 'Chemical\n(precipitated)', items: ['rock salt', 'gypsum', 'oolitic limestone', 'travertine'] },
    { name: 'Organic\n(remains of life)', items: ['shelly limestone', 'chalk', 'coal'] },
  ], { colW: 114 }),
  'geol-metamorphism': columnsSpec('Types of metamorphism', [
    { head: 'Contact\n(thermal)', items: ['heat from an intrusion', 'small area: aureole', 'non-foliated', 'e.g. hornfels'] },
    { head: 'Regional\n(dynamothermal)', items: ['heat and directed', 'pressure', 'mountain belts', 'slate, schist, gneiss'] },
    { head: 'Dynamic', items: ['crushing along', 'fault zones', 'e.g. mylonite'] },
  ], { colW: 118 }),
  'geol-meta-rocks': columnsSpec('Parent rocks and their metamorphic rocks', [
    { head: 'Parent rock', items: ['shale', 'limestone', 'sandstone', 'granite'] },
    { head: 'Metamorphic rock', items: ['slate, schist, gneiss', 'marble', 'quartzite', 'gneiss'] },
    { head: 'Texture', items: ['foliated', 'non-foliated', 'non-foliated', 'banded'] },
  ], { colW: 116, arrow: true }),
  'geol-hazards': columnsSpec('Geological hazards in Cameroon', [
    { head: 'Landslides', items: ['heavy rain, steep', 'slopes, bare soil', 'Gouache, 2019', 'reforest, drain'] },
    { head: 'Eruptions', items: ['Mount Cameroon', '1999 and 2000', 'lava flows', 'monitoring'] },
    { head: 'Gas outbursts', items: ['Monoun, 1984', 'Nyos, 1986: CO₂', 'about 1,700 dead', 'degassing pipes'] },
  ], { colW: 114 }),
  'geol-rock-key': treeSpec('A key to hand specimens', 'Look at the texture', [
    { name: 'Interlocking\ncrystals, no layers', items: ['IGNEOUS', 'granite, gabbro', 'rhyolite, basalt', 'obsidian, pumice'] },
    { name: 'Grains and cement,\nlayers, fossils', items: ['SEDIMENTARY', 'fizzes: limestone', 'conglomerate,', 'sandstone, shale'] },
    { name: 'Aligned minerals\nor sugary grains', items: ['METAMORPHIC', 'slate, schist,', 'gneiss', 'marble, quartzite'] },
  ], { colW: 118 }),

  // ---------- Form 5 ----------
  'geol-gce-0555': columnsSpec('GCE O Level Geology (0555)', [
    { head: 'Paper 1', items: ['50 multiple-choice', 'items, 4 options', '1½ hours', 'one mark each'] },
    { head: 'Paper 2', items: ['structured questions', 'maps, sections, data', 'labelled sketches', '2½ hours'] },
  ], { colW: 136 }),
  'geol-folds-faults': {
    title: 'Folds and a normal fault',
    w: 345,
    h: 204,
    art: FoldsFaultArt,
    labels: [
      ['Anticline', 58, 14, 58, 28],
      ['Syncline', 145, 176, 145, 152],
      ['Fault plane', 282, 28, 254, 52],
      ['Footwall', 222, 176, 222, 140],
      ['Hanging wall', 312, 176, 312, 140],
      ['Folds: compression', 100, 198],
      ['Normal fault: tension', 268, 198],
    ],
    facts: [
      'An anticline is an upfold with the oldest beds in its core; a syncline is a downfold with the youngest beds in its core. The dashed lines are the axial planes.',
      'Folds are produced by compression.',
      'In a normal fault, produced by tension, the hanging wall moves down relative to the footwall, as the half arrows show.',
      'The same beds are found lower on the hanging-wall side: the vertical difference is the throw.',
    ],
  },
  'geol-section': {
    title: 'Reading a geological section',
    w: 340,
    h: 194,
    art: SectionArt,
    labels: [
      ['Younger,\nhorizontal beds', 232, 54, 210, 60],
      ['Unconformity', 232, 96, 212, 99],
      ['Dyke: the\nyoungest event', 232, 128, 132, 120],
      ['Older tilted\nbeds', 232, 158, 205, 156],
      ['Bed 1 is the oldest', 120, 188],
    ],
    facts: [
      'Beds 1, 2 and 3 were deposited in that order, then tilted.',
      'They were then uplifted and eroded, leaving the unconformity, a gap in the record.',
      'Beds 4 and 5 were deposited horizontally on the erosion surface.',
      'Finally the dyke cut through every bed, so it is the youngest event (cross-cutting relationships).',
    ],
  },
  'geol-fossils': columnsSpec('Fossils', [
    { head: 'Preservation', items: ['unaltered: amber, ice', 'petrification', 'carbonisation', 'moulds and casts', 'trace fossils'] },
    { head: 'Index fossils', items: ['trilobites:', 'Palaeozoic', 'graptolites:', 'Ordovician, Silurian', 'ammonites: Mesozoic'] },
    { head: 'Uses', items: ['dating rocks', 'correlation', 'past environments', 'evolution', 'continental drift'] },
  ], { colW: 118 }),
  'geol-timescale': {
    title: 'The geological time scale',
    w: 290,
    h: 238,
    art: TimeBarArt,
    labels: [
      ['Cenozoic, 66 Ma to now:\nmammals, humans', 120, 16, 95, 21.4],
      ['Mesozoic, 252 to 66 Ma:\ndinosaurs, ammonites', 120, 50, 95, 27],
      ['Palaeozoic, 541 to 252 Ma:\ntrilobites, fish, coal', 120, 86, 95, 37],
      ['Precambrian, 4,600 to\n541 Ma: first life', 120, 150, 95, 130],
      ['Drawn to scale', 80, 234],
    ],
    facts: [
      'The bar is drawn to scale: the Precambrian, from 4,600 to 541 million years ago, is about 88% of Earth history.',
      'The Palaeozoic era (541 to 252 Ma) saw trilobites, fish, the first land plants and the coal forests; it ended with the Permian mass extinction.',
      'The Mesozoic era (252 to 66 Ma), the age of reptiles, ended with the extinction of the dinosaurs and ammonites.',
      'The Cenozoic era, from 66 Ma to now, is the age of mammals; modern humans appeared only in its last few hundred thousand years.',
    ],
  },
  'geol-groundwater': {
    title: 'An artesian basin',
    w: 340,
    h: 186,
    art: ArtesianArt,
    labels: [
      ['Rain on the\nrecharge area', 236, 18, 220, 24],
      ['Potentiometric\nsurface', 236, 50, 210, 46],
      ['Flowing\nartesian well', 236, 80, 121, 88],
      ['Aquiclude (clay)', 236, 106, 180, 86],
      ['Aquifer\n(sandstone)', 236, 134, 180, 110],
      ['Aquiclude', 236, 166, 180, 150],
    ],
    facts: [
      'A permeable aquifer is confined between two impermeable aquicludes and bent into a basin.',
      'Rain enters the aquifer where it outcrops on high ground: the recharge area.',
      'The water in the confined aquifer is under pressure; it can rise to the level of the potentiometric surface, shown dashed.',
      'A well drilled in the valley, below that level, flows at the surface without pumping.',
    ],
  },
  'geol-oil-trap': {
    title: 'An anticline oil trap',
    w: 340,
    h: 182,
    art: OilTrapArt,
    labels: [
      ['Cap rock\n(shale)', 236, 40, 140, 68],
      ['Gas', 236, 66, 128, 86],
      ['Oil', 236, 94, 132, 97],
      ['Water', 236, 118, 170, 113],
      ['Reservoir rock\n(sandstone)', 236, 144, 205, 135],
      ['Source rock\n(black shale)', 236, 170, 150, 128],
    ],
    facts: [
      'Oil and gas form in the source rock and migrate upwards through permeable rock.',
      'They collect in the porous reservoir rock at the crest of the anticline, sealed in by the impermeable cap rock.',
      'The fluids separate by density: gas at the top, oil in the middle and water below.',
      'A well drilled at the crest reaches the gas and oil.',
    ],
  },
  'geol-cameroon-map': {
    title: 'The geology of Cameroon',
    w: MAP_W,
    h: MAP_H,
    art: GeologyMapArt,
    labels: [],
    facts: [
      'Most of Cameroon is Precambrian basement: gneisses, schists and granites of the Pan-African belt, about 600 million years old.',
      'In the south, the Ntem complex is Archaean, over 2,500 million years old, part of the Congo craton.',
      'Sedimentary basins: 1 Rio del Rey (offshore, oil), 2 Douala and Kribi-Campo on the coast, 3 Mamfe, 4 Garoua in the Benue trough, 5 the Lake Chad basin.',
      'The Cameroon Volcanic Line runs from Bioko and Mount Cameroon north-east through Manengouba, the Bamboutos and Oku to the Adamawa.',
    ],
  },
  'geol-cameroon-resources': {
    title: 'Mineral and energy resources of Cameroon',
    w: MAP_W,
    h: MAP_H,
    art: ResourcesMapArt,
    labels: [],
    facts: [
      'Oil comes from the offshore Rio del Rey basin and gas from offshore Kribi; the refinery is at Limbe.',
      'Bauxite lies at Minim-Martap and Ngaoundal on the Adamawa plateau; iron ore at Mbalam.',
      'Gold is mined around Bétaré-Oya and Batouri, and diamonds at Mobilong, in the East.',
      'Cobalt and nickel occur at Nkamouna near Lomié, rutile near Akonolinga, and limestone at Figuil.',
    ],
  },
  'geol-paper1-plan': flowSpec('Paper 1: 50 items in 90 minutes', ['Read the stem;\nwatch NOT,\nEXCEPT', 'Think of the\nanswer first', 'Eliminate\nwrong options', 'Choose and\nshade', 'Mark hard items\nand return', 'Check every\nitem is\nanswered'], { perRow: 3, boxW: 108, boxH: 56 }),
  'geol-final-term': flowSpec('The final term before the GCE', ['Paper 1\ndrills', 'Paper 2 sections\nand diagrams', 'Mock\nexamination', 'Correction and\nremediation', 'The GCE\n(0555)'], { perRow: 3, boxW: 108 }),
};
