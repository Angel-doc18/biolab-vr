// Form 5 Geography figures from the 2026/2027 harmonised scheme of work: world
// farming systems and the location of industry, and sketch maps and charts of
// Cameroon: relief, drainage basins, climate types, agricultural corporations,
// forests and fishing, power stations, transport, trade and map-reading.
import { Circle, G, Path, Polygon } from 'react-native-svg';
import { Txt } from './Diagram';
import { columnsSpec, flowSpec } from './charts';

const O = '#33414d';

// ---------- a simplified sketch map of Cameroon ----------
// Approximate outline in longitude and latitude, projected to the drawing.
const OUTLINE = [
  [8.55, 4.55], [8.9, 5.8], [9.6, 6.3], [10.2, 6.9], [10.7, 7.0], [11.1, 6.6], [11.6, 6.9], [11.9, 7.5], [12.4, 8.4], [12.8, 8.8],
  [12.9, 9.4], [13.3, 10.1], [13.8, 10.8], [14.1, 11.5], [14.2, 12.3], [14.5, 13.05], [15.05, 12.1], [15.1, 11.0], [15.6, 10.1],
  [14.2, 9.9], [14.4, 9.4], [15.5, 7.6], [14.6, 5.4], [14.5, 4.4], [15.1, 3.9], [16.2, 2.2], [15.0, 2.0], [13.3, 2.2], [11.3, 2.2],
  [9.9, 2.3], [9.8, 3.0], [9.6, 3.9], [9.2, 4.0], [8.9, 4.2],
];
const K = 26;
const px = (lon) => 10 + (lon - 8.3) * K;
const py = (lat) => 10 + (13.3 - lat) * K;
const pt = ([lon, lat]) => `${px(lon)},${py(lat)}`;
const TOWNS = {
  Douala: [9.7, 4.05],
  Yaoundé: [11.52, 3.87],
  Limbe: [9.2, 4.02],
  Kribi: [9.91, 2.94],
  Bamenda: [10.16, 5.96],
  Bafoussam: [10.42, 5.48],
  Ngaoundéré: [13.58, 7.32],
  Garoua: [13.4, 9.3],
  Maroua: [14.32, 10.6],
  Bertoua: [13.68, 4.58],
  Ebolowa: [11.15, 2.9],
};
function Outline({ fill = '#f3ead6' }) {
  return (
    <G>
      <Polygon points={OUTLINE.map(pt).join(' ')} fill={fill} stroke={O} strokeWidth={1.4} />
      {/* Lake Chad, at the northern tip */}
      <Path d={`M${px(14.35)} ${py(13.25)} Q${px(14.9)} ${py(13.3)} ${px(14.75)} ${py(12.9)} Q${px(14.5)} ${py(12.85)} ${px(14.35)} ${py(13.25)} Z`} fill="#7fb3e0" />
    </G>
  );
}
function Town({ name, at, dx = 5, dy = 3, anchor = 'start', bold }) {
  return (
    <G>
      <Circle cx={px(at[0])} cy={py(at[1])} r={2.6} fill={O} />
      <Txt x={px(at[0]) + dx} y={py(at[1]) + dy} size={8} anchor={anchor} weight={bold ? '700' : '500'}>
        {name}
      </Txt>
    </G>
  );
}

function ReliefArt() {
  const area = (lon, lat, r, c) => <Circle cx={px(lon)} cy={py(lat)} r={r} fill={c} opacity={0.75} />;
  return (
    <G>
      <Outline />
      {/* shaded relief regions */}
      {area(10.3, 5.9, 26, '#c9a46a')}
      {area(13.1, 7.0, 34, '#d8b77d')}
      {area(13.9, 10.7, 12, '#c9a46a')}
      <Path d={`M${px(9.17)} ${py(4.45)} L${px(9.0)} ${py(4.0)} L${px(9.35)} ${py(4.0)} Z`} fill="#8d6e4a" />
      <Txt x={px(10.55)} y={py(6.75)} size={8} weight="700">
        Western
      </Txt>
      <Txt x={px(10.55)} y={py(6.48)} size={8} weight="700">
        Highlands
      </Txt>
      <Txt x={px(13.0)} y={py(7.75)} size={8} weight="700">
        Adamawa
      </Txt>
      <Txt x={px(13.0)} y={py(7.48)} size={8} weight="700">
        Plateau
      </Txt>
      <Txt x={px(12.9)} y={py(3.15)} size={8} weight="700">
        Southern Plateau
      </Txt>
      <Txt x={px(13.6)} y={py(8.3)} size={7.5} weight="700">
        Benue lowlands
      </Txt>
      <Txt x={px(14.05)} y={py(12.2)} size={7.5} weight="700" anchor="end">
        Chad plain
      </Txt>
      <Txt x={px(13.55)} y={py(11.25)} size={7.5} weight="700" anchor="end">
        Mandara Mts
      </Txt>
      <Txt x={px(9.3)} y={py(3.2)} size={7.5} weight="700" anchor="end">
        Coastal
      </Txt>
      <Txt x={px(9.3)} y={py(2.95)} size={7.5} weight="700" anchor="end">
        lowlands
      </Txt>
      <Town name="Douala" at={TOWNS.Douala} dx={5} dy={9} />
      <Town name="Yaoundé" at={TOWNS.Yaoundé} />
      <Town name="Kribi" at={TOWNS.Kribi} />
      <Town name="Bamenda" at={TOWNS.Bamenda} dx={0} dy={12} anchor="middle" />
      <Town name="Ngaoundéré" at={TOWNS.Ngaoundéré} dx={0} dy={12} anchor="middle" />
      <Town name="Garoua" at={TOWNS.Garoua} dx={5} dy={13} anchor="middle" />
      <Town name="Maroua" at={TOWNS.Maroua} dx={0} dy={12} anchor="middle" />
      <Town name="Bertoua" at={TOWNS.Bertoua} dx={-5} anchor="end" />
      <Txt x={px(12.2)} y={py(1.55)} size={8} italic>
        Simplified sketch map
      </Txt>
    </G>
  );
}

function TransportArt() {
  const line = (pts) => pts.map((p, i) => `${i ? 'L' : 'M'}${px(p[0])} ${py(p[1])}`).join(' ');
  const rail = [TOWNS.Douala, [10.13, 3.8], [10.77, 3.65], TOWNS.Yaoundé, [13.3, 4.93], TOWNS.Ngaoundéré];
  const pipe = [[15.3, 7.55], [14.2, 6.5], [13.3, 4.93], [11.0, 3.3], TOWNS.Kribi];
  return (
    <G>
      <Outline fill="#f6f1e4" />
      <Path d={line(rail)} stroke="#2d3a45" strokeWidth={2.4} fill="none" />
      <Path d={line(rail)} stroke="#ffffff" strokeWidth={1} strokeDasharray="4 4" fill="none" />
      <Path d={line([TOWNS.Douala, [9.42, 4.64]])} stroke="#2d3a45" strokeWidth={2.4} fill="none" />
      <Path d={line(pipe)} stroke="#c0392b" strokeWidth={1.6} strokeDasharray="6 3" fill="none" />
      {/* ports */}
      {['Douala', 'Kribi', 'Limbe'].map((n) => (
        <Circle key={n} cx={px(TOWNS[n][0])} cy={py(TOWNS[n][1])} r={5} fill="none" stroke="#1f6fb2" strokeWidth={1.6} />
      ))}
      <Circle cx={px(TOWNS.Garoua[0])} cy={py(TOWNS.Garoua[1])} r={5} fill="none" stroke="#1f6fb2" strokeWidth={1.6} />
      <Town name="Douala" at={TOWNS.Douala} dx={6} dy={-8} bold />
      <Town name="Limbe" at={TOWNS.Limbe} dx={-7} anchor="end" />
      <Town name="Kribi" at={TOWNS.Kribi} dx={7} dy={10} />
      <Town name="Yaoundé" at={TOWNS.Yaoundé} dx={2} dy={15} bold />
      <Town name="Ngaoundéré" at={TOWNS.Ngaoundéré} dx={0} dy={-6} anchor="middle" />
      <Town name="Garoua" at={TOWNS.Garoua} dx={4} dy={15} anchor="middle" />
      <Town name="Belabo" at={[13.3, 4.93]} dx={4} dy={9} />
      {/* key */}
      <Path d={`M${px(12.4)} ${py(12.6)} L${px(13.0)} ${py(12.6)}`} stroke="#2d3a45" strokeWidth={2.4} />
      <Txt x={px(12.3)} y={py(12.6) + 3} size={7.5} anchor="end">
        Railway
      </Txt>
      <Path d={`M${px(12.4)} ${py(12.1)} L${px(13.0)} ${py(12.1)}`} stroke="#c0392b" strokeWidth={1.6} strokeDasharray="6 3" />
      <Txt x={px(12.3)} y={py(12.1) + 3} size={7.5} anchor="end">
        Oil pipeline
      </Txt>
      <Circle cx={px(12.7)} cy={py(11.6)} r={4} fill="none" stroke="#1f6fb2" strokeWidth={1.6} />
      <Txt x={px(12.3)} y={py(11.6) + 3} size={7.5} anchor="end">
        Port
      </Txt>
    </G>
  );
}

const MAP_W = px(16.4) + 10;
const MAP_H = py(1.4) + 10;

// Shared with the Geology sketch map of Cameroon.
export { Outline, Town, TOWNS, px, py };

export const GEOGRAPHY_4 = {
  'farming-systems': columnsSpec('Farming systems of the world', [
    { head: 'Shifting\ncultivation', items: ['Clear, burn, plant', 'Move on after 2-3 years', 'Food for the family'] },
    { head: 'Intensive\nsubsistence', items: ['Small, crowded farms', 'Much labour, high yields', 'e.g. rice, Monsoon Asia'] },
    { head: 'Plantation', items: ['Large estates', 'One crop for export', 'Much capital'] },
    { head: 'Livestock\nranching', items: ['Huge areas, few workers', 'Beef for sale', 'e.g. Argentina, Adamawa'] },
  ], { colW: 118 }),
  'paddy-steps': flowSpec('Growing wet rice in Monsoon Asia', ['Sow seeds in a\nnursery bed', 'Bund, flood and\nplough the paddy', 'Transplant the\nseedlings by hand', 'Keep the field\nflooded as it grows', 'Drain, harvest,\nthresh and dry'], { boxW: 112 }),
  'industry-location': columnsSpec('Why a factory is built where it is', [
    { head: 'Inputs', items: ['Raw materials nearby', 'Cheap power'] },
    { head: 'People, money', items: ['Skilled labour', 'Capital to invest'] },
    { head: 'Links, rules', items: ['Transport and markets', 'Government policy'] },
  ], { colW: 132 }),
  'cameroon-relief': {
    title: 'Cameroon: the main relief regions and towns',
    w: MAP_W,
    h: MAP_H,
    art: ReliefArt,
    labels: [],
    facts: [
      'The coastal lowlands lie along the Gulf of Guinea, below about 200 m, around Douala and Kribi.',
      'Mount Cameroon rises steeply from the coast near Limbe and Buea: the highest mountain in West and Central Africa.',
      'The Southern Plateau covers the Centre, South and East at about 650 to 900 m.',
      'The Western Highlands, around Bamenda and Bafoussam, are volcanic mountains and plateaus with peaks such as Mount Oku, 3 011 m.',
      'The Adamawa Plateau, at about 1 100 m, crosses the middle of the country: the water tower of Cameroon.',
      'In the North lie the Benue lowlands around Garoua, the Mandara Mountains, and the Chad plain sloping down to Lake Chad.',
    ],
  },
  'drainage-basins': columnsSpec('The four drainage basins of Cameroon', [
    { head: 'Atlantic', items: ['Sanaga, Nyong', 'Wouri, Ntem', 'Mungo, Manyu'] },
    { head: 'Congo', items: ['Sangha, Dja', 'Boumba, Kadey'] },
    { head: 'Niger', items: ['Benue, Faro', 'Mayo Kebbi'] },
    { head: 'Chad', items: ['Logone, Chari', 'Lake Chad itself'] },
  ], { colW: 104 }),
  'cameroon-climates': columnsSpec('The climates of Cameroon', [
    { head: 'Equatorial\n(coastal)', items: ['Very wet', 'One long rainy season', 'e.g. Douala'] },
    { head: 'Equatorial\n(southern)', items: ['Two wet, two dry', 'About 1 600 mm', 'e.g. Yaoundé'] },
    { head: 'Tropical\n(Sudan type)', items: ['One wet, one dry', '900 to 1 500 mm', 'e.g. Garoua'] },
    { head: 'Tropical\n(Sahel type)', items: ['Long dry season', 'Under 900 mm', 'e.g. Maroua'] },
  ], { colW: 112 }),
  'agric-corporations': columnsSpec('Agricultural development corporations', [
    { head: 'CDC', items: ['Bananas, palm oil', 'Rubber, tea', 'South-West'] },
    { head: 'PAMOL', items: ['Oil palm', 'Ndian, South-West'] },
    { head: 'SODECOTON', items: ['Cotton', 'North, Far North'] },
    { head: 'SEMRY', items: ['Irrigated rice', 'Far North'] },
    { head: 'UNVDA', items: ['Rice', 'Ndop, North-West'] },
  ], { colW: 96 }),
  'forest-uses': columnsSpec('The rainforest of Cameroon', [
    { head: 'Values', items: ['Timber for export', 'Food, medicine, eru', 'Wildlife, tourism', 'Stores carbon'] },
    { head: 'Threats', items: ['Logging', 'Farming, fuelwood', 'Roads, settlement', 'Poaching'] },
    { head: 'Conservation', items: ['National parks', 'Forestry law of 1994', 'Community forests', 'Replanting'] },
  ], { colW: 128 }),
  'fishing-types': columnsSpec('Fishing in Cameroon', [
    { head: 'Artisanal\nmarine', items: ['Canoes, small nets', 'Limbe, Idenau, Kribi'] },
    { head: 'Industrial\nmarine', items: ['Trawlers', 'Offshore waters'] },
    { head: 'Inland', items: ['Lake Chad, Lagdo', 'Rivers, reservoirs'] },
    { head: 'Fish farming', items: ['Ponds and cages', 'Tilapia, catfish'] },
  ], { colW: 110 }),
  'cameroon-power': columnsSpec('Main power stations of Cameroon', [
    { head: 'Sanaga', items: ['Edéa', 'Song Loulou', 'Nachtigal (420 MW)'] },
    { head: 'Other rivers', items: ['Lagdo (Benue)', 'Memve’ele (Ntem)', 'Lom Pangar store'] },
    { head: 'Thermal', items: ['Kribi gas plant', 'Diesel stations'] },
  ], { colW: 128 }),
  'cameroon-transport': {
    title: 'Cameroon: railway, ports and the oil pipeline',
    w: MAP_W,
    h: MAP_H,
    art: TransportArt,
    labels: [],
    facts: [
      'The Transcameroon railway runs from Douala through Edéa and Yaoundé to Belabo and Ngaoundéré, with a branch from Douala towards Kumba.',
      'Douala is the main sea port; Kribi has a deep-water port for large ships; Limbe handles oil; Garoua is a river port on the Benue.',
      'The Chad to Cameroon oil pipeline carries oil from southern Chad across Cameroon to a terminal off Kribi.',
    ],
  },
  'map-description': columnsSpec('What to describe on a topographic map', [
    { head: 'Relief', items: ['Heights, slopes', 'Hills, valleys'] },
    { head: 'Drainage', items: ['Rivers, pattern', 'Direction of flow'] },
    { head: 'Settlement', items: ['Pattern, site', 'Functions'] },
    { head: 'Activities', items: ['Farms, forests', 'Roads, industry'] },
  ], { colW: 104 }),
};
