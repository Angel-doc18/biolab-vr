// More Geography figures: an outline map of Africa (and a version with its main
// relief and rivers), the climate and vegetation belts, Cameroon's vegetation
// belts, a population pyramid, a hydroelectric dam and Cameroon's transit routes.
// The maps are simplified outlines from approximate coastline coordinates.
import { Circle, Ellipse, G, Line, Path, Polygon, Rect } from 'react-native-svg';
import { Head, Txt } from './Diagram';
import { columnsSpec } from './charts';

const O = '#33414d';
const SEA = '#e3f1fb';
const LAND = '#efe6cf';

// Equirectangular projection for the Africa maps.
const K = 3.4;
const px = (lon) => (lon + 19) * K + 10;
const py = (lat) => (38 - lat) * K + 10;
const poly = (pts) => pts.map(([lon, lat]) => `${px(lon).toFixed(1)},${py(lat).toFixed(1)}`).join(' ');
const path = (pts) => pts.map(([lon, lat], i) => `${i ? 'L' : 'M'}${px(lon).toFixed(1)} ${py(lat).toFixed(1)}`).join(' ');

const AFRICA = [
  [-5.8, 35.8], [-1, 35.1], [3, 36.8], [9.8, 37.3], [11.1, 36.9], [10.2, 34.2], [10.9, 33.1], [13.2, 32.9], [15.2, 32.4], [19, 30.3], [20.1, 32.1],
  [23, 32.6], [25, 31.6], [29.9, 31.2], [32.3, 31.3], [32.6, 29.9], [33.8, 27.2], [35.5, 23.9], [37.2, 19.6], [39.5, 15.6], [42.7, 13], [43.1, 11.6],
  [45, 10.4], [51.3, 11.8], [51.4, 10.4], [49.8, 8], [48.5, 5.3], [45.3, 2], [42.5, -0.4], [40.9, -2.3], [39.7, -4.1], [39.3, -6.8], [39.5, -9],
  [40.5, -10.7], [40.7, -14.5], [36.9, -17.9], [34.8, -19.8], [35.4, -23.9], [32.6, -25.9], [32.1, -28.8], [31, -29.9], [27.9, -33], [25.6, -34],
  [20, -34.8], [18.4, -33.9], [17.9, -33], [17.3, -30.3], [16.5, -28.6], [15.1, -26.6], [14.5, -22.9], [11.8, -18.4], [12.2, -15.2], [13.4, -12.6],
  [13.2, -8.8], [12.3, -6], [11.9, -4.8], [8.7, -0.6], [9.4, 0.4], [9.8, 1.9], [9.9, 2.9], [9.6, 4], [8.3, 4.6], [7, 4.4], [6, 4.3], [3.4, 6.4],
  [2.4, 6.4], [1.2, 6.1], [-0.2, 5.6], [-2.1, 4.7], [-4, 5.3], [-7.6, 4.4], [-10.8, 6.3], [-13.2, 8.5], [-13.7, 9.5], [-15.6, 11.9], [-16.6, 13.4],
  [-17.5, 14.7], [-16.5, 16], [-16, 18.1], [-17.05, 20.8], [-15.9, 23.7], [-14.5, 26.1], [-12.9, 27.9], [-9.6, 30.4], [-9.8, 31.5], [-7.6, 33.6],
  [-6.8, 34],
];
const MADAGASCAR = [[49.3, -12], [50.4, -15.5], [49.6, -17.5], [48.4, -21], [47.1, -25], [45.1, -25.6], [43.6, -23.5], [43.3, -21.5], [44.4, -19.5], [44.2, -16.8], [46.4, -15.7], [47.8, -13.8]];
const CAMEROON = [[9.8, 2.2], [16.2, 2.2], [15, 4], [14.5, 6.3], [15.5, 7.6], [14.4, 9.9], [15.6, 10.1], [14.5, 12.9], [14.1, 13.1], [13.6, 11], [12.8, 8.6], [11.8, 7], [10.6, 6.5], [9.6, 6.1], [8.6, 4.7], [9.6, 3.9]];

function Base({ lines = true }) {
  return (
    <G>
      <Rect x={0} y={0} width={px(56)} height={py(-38)} fill={SEA} />
      <Polygon points={poly(AFRICA)} fill={LAND} stroke={O} strokeWidth={1.2} />
      <Polygon points={poly(MADAGASCAR)} fill={LAND} stroke={O} strokeWidth={1.1} />
      {lines && (
        <G>
          <Line x1={0} y1={py(0)} x2={px(56)} y2={py(0)} stroke="#c8463d" strokeWidth={1.2} />
          <Line x1={0} y1={py(23.44)} x2={px(56)} y2={py(23.44)} stroke="#c8643d" strokeWidth={1} strokeDasharray="5 3" />
          <Line x1={0} y1={py(-23.44)} x2={px(56)} y2={py(-23.44)} stroke="#c8643d" strokeWidth={1} strokeDasharray="5 3" />
          <Line x1={px(0)} y1={0} x2={px(0)} y2={py(-38)} stroke="#2f7d4f" strokeWidth={1} strokeDasharray="2 3" />
        </G>
      )}
    </G>
  );
}

function AfricaArt() {
  return (
    <G>
      <Base />
      <Polygon points={poly(CAMEROON)} fill="#7cbf6a" stroke={O} strokeWidth={1} />
      <Txt x={px(-11)} y={py(-8)} size={10} weight="700" italic fill="#24527a">Atlantic</Txt>
      <Txt x={px(-11)} y={py(-11)} size={10} weight="700" italic fill="#24527a">Ocean</Txt>
      <Txt x={px(49)} y={py(-30)} size={10} weight="700" italic fill="#24527a">Indian</Txt>
      <Txt x={px(49)} y={py(-33)} size={10} weight="700" italic fill="#24527a">Ocean</Txt>
      <Txt x={px(24)} y={py(34.8)} size={9} italic fill="#24527a">Mediterranean Sea</Txt>
      <Txt x={px(42)} y={py(18)} size={8} italic fill="#24527a" rotate={58}>Red Sea</Txt>
      <Txt x={px(-14)} y={py(0) - 3} size={8} fill="#c8463d" weight="700">Equator</Txt>
      <Txt x={px(56) - 3} y={py(23.44) - 3} size={8} fill="#c8643d" anchor="end">Tropic of Cancer</Txt>
      <Rect x={px(-18) - 2} y={py(-23.44) - 11} width={84} height={10} fill={SEA} />
      <Txt x={px(-18)} y={py(-23.44) - 3} size={8} fill="#c8643d" anchor="start">Tropic of Capricorn</Txt>
      <Txt x={px(0) + 3} y={py(-36)} size={7.5} fill="#2f7d4f" anchor="start">0°</Txt>
    </G>
  );
}

const NILE = [[33, 0.5], [32.6, 3.5], [31.6, 9.5], [32.5, 15.6], [33.5, 18], [31.5, 21.5], [32.8, 24], [31.2, 28.5], [31, 30.5]];
const BLUE_NILE = [[37.3, 12], [35.5, 11.5], [33.5, 13.5], [32.5, 15.6]];
const CONGO = [[27, -8], [25.5, -3], [25, 0.5], [22, 2], [18, 1.5], [16, -1.5], [15.3, -4.3], [12.3, -6]];
const NIGER = [[-10, 9.5], [-7, 12.5], [-3, 16.8], [0, 16], [3, 13], [4.6, 10], [6.7, 7.8], [6, 4.3]];
const ZAMBEZI = [[24, -12], [23.5, -15], [25.9, -17.9], [28.5, -16.5], [31, -15.6], [35.5, -18.6]];
const RIFT = [[41, 12], [38.5, 7], [36.5, 2], [36, -2], [35.3, -5], [34.6, -9], [34.5, -13]];
const peaks = (pts) =>
  pts.map(([lon, lat], i) => <Polygon key={i} points={`${px(lon)},${py(lat) - 7} ${px(lon) - 5},${py(lat) + 2} ${px(lon) + 5},${py(lat) + 2}`} fill="#a1714a" stroke={O} strokeWidth={0.6} />);

function ReliefArt() {
  return (
    <G>
      <Base lines={false} />
      {[NILE, BLUE_NILE, CONGO, NIGER, ZAMBEZI].map((r, i) => (
        <Path key={i} d={path(r)} fill="none" stroke="#3f7fc0" strokeWidth={1.6} />
      ))}
      <Path d={path(RIFT)} fill="none" stroke="#c8463d" strokeWidth={1.6} strokeDasharray="5 3" />
      <Ellipse cx={px(33)} cy={py(-1)} rx={6} ry={5} fill="#3f7fc0" />
      <Ellipse cx={px(29.6)} cy={py(-6.2)} rx={2} ry={9} fill="#3f7fc0" />
      <Circle cx={px(14.2)} cy={py(13.2)} r={4} fill="#3f7fc0" />
      {peaks([[-6, 31.5], [-2, 32.5], [2, 33.8]])}
      {peaks([[38, 10], [39.5, 8]])}
      <Polygon points={`${px(37.4)},${py(-3.1) - 9} ${px(37.4) - 6},${py(-3.1) + 2} ${px(37.4) + 6},${py(-3.1) + 2}`} fill="#ffffff" stroke={O} strokeWidth={0.8} />
      <Polygon points={`${px(9.2)},${py(4.2) - 7} ${px(9.2) - 5},${py(4.2) + 2} ${px(9.2) + 5},${py(4.2) + 2}`} fill="#a1714a" stroke={O} strokeWidth={0.6} />
      <Txt x={px(10)} y={py(24)} size={11} weight="700" fill="#8a5a00">SAHARA</Txt>
      <Txt x={px(22)} y={py(-21.5)} size={8.5} fill="#8a5a00">Kalahari</Txt>
      <Txt x={px(20)} y={py(-6)} size={8} fill="#2f6b3a">Congo Basin</Txt>
    </G>
  );
}

// ---------- a population pyramid ----------
const PYRAMID = [['70+', 4], ['60–69', 8], ['50–59', 14], ['40–49', 22], ['30–39', 32], ['20–29', 44], ['10–19', 58], ['0–9', 72]];
function PyramidArt() {
  const cx = 160;
  const top = 26;
  const h = 18;
  return (
    <G>
      <Txt x={cx - 60} y={16} size={10} weight="700">Males</Txt>
      <Txt x={cx + 60} y={16} size={10} weight="700">Females</Txt>
      {PYRAMID.map(([age, w], i) => (
        <G key={age}>
          <Rect x={cx - 18 - w} y={top + i * h} width={w} height={h - 3} fill="#7da7d8" stroke={O} strokeWidth={0.8} />
          <Rect x={cx + 18} y={top + i * h} width={w * 0.97} height={h - 3} fill="#e88a9a" stroke={O} strokeWidth={0.8} />
          <Txt x={cx} y={top + i * h + 11} size={8}>{age}</Txt>
        </G>
      ))}
      <Txt x={cx} y={top + PYRAMID.length * h + 14} size={9} italic>Wide base: many children (high birth rate).</Txt>
      <Txt x={cx} y={top + PYRAMID.length * h + 27} size={9} italic>Narrow top: few old people.</Txt>
    </G>
  );
}

// ---------- a hydroelectric dam ----------
function DamArt() {
  return (
    <G>
      <Path d="M0 60 L120 60 L120 180 L0 180 Z" fill="#9cc7ea" />
      <Line x1={0} y1={60} x2={120} y2={60} stroke="#3f7fc0" strokeWidth={1.5} />
      <Path d="M120 30 L150 30 L176 180 L120 180 Z" fill="#c9d2da" stroke={O} strokeWidth={1.4} />
      <Path d="M126 150 L200 150" stroke="#5a6b78" strokeWidth={8} />
      <Rect x={196} y={126} width={60} height={54} fill="#eef1f4" stroke={O} strokeWidth={1.3} />
      <Circle cx={212} cy={156} r={10} fill="#ffffff" stroke={O} strokeWidth={1.3} />
      {[0, 60, 120, 180, 240, 300].map((a) => (
        <Line key={a} x1={212} y1={156} x2={212 + 9 * Math.cos((a * Math.PI) / 180)} y2={156 + 9 * Math.sin((a * Math.PI) / 180)} stroke={O} strokeWidth={1} />
      ))}
      <Rect x={230} y={138} width={20} height={20} fill="#fbefd0" stroke={O} strokeWidth={1.2} />
      <Txt x={240} y={152} size={9} weight="700">G</Txt>
      <Path d="M176 176 L330 176 L330 190 L176 190 Z" fill="#9cc7ea" />
      <Line x1={240} y1={126} x2={240} y2={100} stroke={O} strokeWidth={1} />
      <Path d="M300 40 L292 120 M300 40 L308 120 M286 70 L314 70 M290 90 L310 90" stroke={O} strokeWidth={1.4} fill="none" />
      <Path d="M240 100 C260 70 280 60 300 52" fill="none" stroke={O} strokeWidth={1} />
      <Path d="M30 40 L60 40" stroke="#3f7fc0" strokeWidth={1.2} />
      <Head x={60} y={40} dx={1} dy={0} size={5} fill="#3f7fc0" />
      <Txt x={45} y={34} size={8} fill="#24527a">river flows in</Txt>
    </G>
  );
}

// ---------- Cameroon's transit routes ----------
const TOWNS = {
  Douala: [9.7, 4.05],
  Kribi: [9.9, 2.9],
  Yaoundé: [11.5, 3.9],
  Bertoua: [13.7, 4.6],
  'Garoua-Boulaï': [14.5, 5.9],
  Ngaoundéré: [13.6, 7.3],
  "N'Djamena (Chad)": [15.0, 12.1],
  'Bangui (CAR)': [18.6, 4.4],
};
const tx = (lon) => (lon - 9) * 24 + 26;
const ty = (lat) => (13 - lat) * 19 + 12;
function CorridorArt() {
  const P = (n) => [tx(TOWNS[n][0]), ty(TOWNS[n][1])];
  const seg = (a, b, rail) => {
    const [x1, y1] = P(a);
    const [x2, y2] = P(b);
    return <Line key={`${a}-${b}`} x1={x1} y1={y1} x2={x2} y2={y2} stroke={rail ? '#5a3a1a' : '#c8463d'} strokeWidth={rail ? 2 : 1.6} strokeDasharray={rail ? '6 3' : undefined} />;
  };
  // where each town's name sits, kept off the routes: [dx, dy, anchor]
  const place = {
    Kribi: [7, 10, 'start'],
    Yaoundé: [4, 15, 'start'],
    Bertoua: [6, 14, 'start'],
    'Bangui (CAR)': [0, 15, 'middle'],
  };
  return (
    <G>
      {seg('Ngaoundéré', "N'Djamena (Chad)")}
      {seg('Douala', 'Yaoundé')}
      {seg('Kribi', 'Yaoundé')}
      {seg('Yaoundé', 'Bertoua')}
      {seg('Bertoua', 'Garoua-Boulaï')}
      {seg('Garoua-Boulaï', 'Bangui (CAR)')}
      {seg('Douala', 'Yaoundé', true)}
      {seg('Yaoundé', 'Ngaoundéré', true)}
      {Object.keys(TOWNS).map((n) => {
        const [x, y] = P(n);
        const port = n === 'Douala' || n === 'Kribi';
        const [dx, dy, anchor] = place[n] || [7, -5, 'start'];
        return (
          <G key={n}>
            <Circle cx={x} cy={y} r={port ? 5 : 3.5} fill={port ? '#3f6fb5' : O} />
            <Txt x={x + dx} y={y + dy} size={8.5} anchor={anchor} weight={port ? '700' : '500'}>
              {n}
            </Txt>
          </G>
        );
      })}
      <Line x1={196} y1={212} x2={222} y2={212} stroke="#5a3a1a" strokeWidth={2} strokeDasharray="6 3" />
      <Txt x={228} y={215} size={8.5} anchor="start">railway</Txt>
      <Line x1={196} y1={226} x2={222} y2={226} stroke="#c8463d" strokeWidth={1.6} />
      <Txt x={228} y={229} size={8.5} anchor="start">main road</Txt>
      <Txt x={6} y={232} size={8} anchor="start" italic>Ports: Douala and Kribi. Not to scale.</Txt>
    </G>
  );
}

export const GEOGRAPHY_2 = {
  'africa-map': {
    title: 'Africa: its position, the seas around it and Cameroon (shaded)',
    w: px(56),
    h: py(-38),
    art: AfricaArt,
    labels: [['Cameroon', px(22), py(11), px(13.5), py(7)]],
  },
  'africa-relief': {
    title: 'Africa: main mountains, rivers and lakes (simplified)',
    w: px(56),
    h: py(-38),
    art: ReliefArt,
    labels: [
      ['Atlas Mountains', px(-12), py(37.5), px(-2), py(33)],
      ['Nile', px(56) + 4, py(26), px(32.2), py(23)],
      ['Ethiopian\nHighlands', px(56) + 4, py(16), px(40), py(9)],
      ['Rift Valley', px(56) + 4, py(4), px(36.5), py(2)],
      ['Lake Victoria', px(56) + 4, py(-3), px(33.5), py(-1)],
      ['Kilimanjaro', px(56) + 4, py(-9), px(37.6), py(-3.4)],
      ['Zambezi', px(56) + 4, py(-17), px(33), py(-17)],
      ['Niger', 4, py(17), px(-4), py(15)],
      ['Lake Chad', 4, py(11), px(13.8), py(13)],
      ['Mount Cameroon', 4, py(4.5), px(9), py(4.5)],
      ['Congo', 4, py(-4), px(15), py(-3.5)],
    ],
  },
  'climate-belts': columnsSpec('Climate and vegetation belts of Africa, from the north coast to the Equator', [
    { head: 'Climate', items: ['Mediterranean', 'Hot desert', 'Semi-arid (Sahel)', 'Tropical (savanna)', 'Equatorial'] },
    { head: 'Vegetation', items: ['Evergreen shrubs, olives', 'Cacti, thorn bushes', 'Short grass, thorn trees', 'Tall grass, few trees', 'Rainforest'] },
    { head: 'Rain', items: ['Winter rain', 'Under 250 mm', 'Short wet season', 'Wet and dry seasons', 'Rain all year'] },
  ], { colW: 122 }),
  'vegetation-belts': columnsSpec('Natural vegetation in Cameroon, from the coast to the Far North', [
    { head: 'Vegetation', items: ['Mangrove', 'Rainforest', 'Mountain grassland', 'Savanna', 'Sahel'] },
    { head: 'Where', items: ['Coastal swamps', 'The south', 'Western Highlands', 'Adamawa, the north', 'The Far North'] },
    { head: 'Climate', items: ['Hot, very wet', 'Hot, wet all year', 'Cool, wet', 'Wet and dry seasons', 'Long dry season'] },
  ], { colW: 122 }),
  'population-pyramid': { title: 'A population pyramid for a young, fast-growing population', w: 320, h: 196, art: PyramidArt, labels: [] },
  'hydro-dam': {
    title: 'How a hydroelectric power station works',
    w: 330,
    h: 194,
    art: DamArt,
    labels: [
      ['Reservoir', 40, 112, 60, 112],
      ['Dam', 138, 12, 138, 34],
      ['Penstock (pipe)', 96, 204, 150, 150],
      ['Turbine', 196, 196, 212, 166],
      ['Generator', 276, 152, 250, 148],
      ['Power lines', 330, 30, 304, 50],
    ],
  },
  'transit-corridor': { title: 'Routes from the ports of Douala and Kribi to Chad and the Central African Republic', w: 300, h: 238, art: CorridorArt, labels: [] },
};
