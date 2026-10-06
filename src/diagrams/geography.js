// Geography figures for Forms 1 and 2: the compass rose, the solar system (not to
// scale), latitude and longitude on a globe, weather instruments, landforms in
// section, the parts of a river, settlement patterns, the Earth's orbit and the
// seasons, and longitude and time. Simple textbook drawings with ruled labels.
import { Circle, Ellipse, G, Line, Path, Polygon, Rect } from 'react-native-svg';
import { Head, Txt } from './Diagram';

const O = '#33414d';
const SEA = '#cfe6f5';
const LAND = '#e6dcc0';
const GRASS = '#cfe3b4';
const range = (n, f) => Array.from({ length: n }, (_, i) => f(i));
const rad = (d) => (d * Math.PI) / 180;

function Arrow({ x1, y1, x2, y2, c = O, w = 1.3, size = 6 }) {
  return (
    <G>
      <Line x1={x1} y1={y1} x2={x2} y2={y2} stroke={c} strokeWidth={w} />
      <Head x={x2} y={y2} dx={x2 - x1} dy={y2 - y1} size={size} fill={c} />
    </G>
  );
}

// ---------- compass rose ----------
function CompassArt() {
  const cx = 110;
  const cy = 100;
  const point = (deg, len, w, fill) => {
    const a = rad(deg - 90);
    const tip = [cx + len * Math.cos(a), cy + len * Math.sin(a)];
    const l = [cx + w * Math.cos(a - Math.PI / 2), cy + w * Math.sin(a - Math.PI / 2)];
    const r = [cx + w * Math.cos(a + Math.PI / 2), cy + w * Math.sin(a + Math.PI / 2)];
    return <Polygon key={deg} points={`${tip.join(',')} ${l.join(',')} ${r.join(',')}`} fill={fill} stroke={O} strokeWidth={1} />;
  };
  const names = [['N', 0, 84], ['NE', 45, 62], ['E', 90, 84], ['SE', 135, 62], ['S', 180, 84], ['SW', 225, 62], ['W', 270, 84], ['NW', 315, 62]];
  return (
    <G>
      <Circle cx={cx} cy={cy} r={58} fill="none" stroke="#9aa7b2" strokeWidth={1} />
      {[45, 135, 225, 315].map((d) => point(d, 46, 9, '#dbe7f5'))}
      {[90, 180, 270, 0].map((d) => point(d, 70, 11, d === 0 ? '#c8463d' : '#3f6fb5'))}
      <Circle cx={cx} cy={cy} r={4} fill="#ffffff" stroke={O} strokeWidth={1} />
      {names.map(([t, d, r]) => {
        const a = rad(d - 90);
        return (
          <Txt key={t} x={cx + r * Math.cos(a)} y={cy + r * Math.sin(a) + 4} size={t.length === 1 ? 13 : 10.5} weight="700">
            {t}
          </Txt>
        );
      })}
    </G>
  );
}

// ---------- the solar system ----------
const PLANETS = [
  ['Mercury', 84, 3, '#b8a99a'],
  ['Venus', 106, 5, '#e3c27a'],
  ['Earth', 130, 5.5, '#4a8fd6'],
  ['Mars', 153, 4, '#c8643d'],
  ['Jupiter', 204, 15, '#d9a873'],
  ['Saturn', 256, 12, '#e6cf8f'],
  ['Uranus', 300, 8, '#9fd6dc'],
  ['Neptune', 336, 8, '#4f6fd0'],
];
function SolarArt() {
  return (
    <G>
      <Circle cx={22} cy={70} r={42} fill="#f6c343" stroke="#d99a1a" strokeWidth={1.5} />
      <Txt x={22} y={74} size={11} weight="700">Sun</Txt>
      {range(14, (i) => <Circle key={i} cx={172 + (i % 5) * 2.4} cy={56 + i * 2.2} r={0.9} fill="#7d8b97" />)}
      {PLANETS.map(([name, x, r, fill], i) => (
        <G key={name}>
          {name === 'Saturn' && <Ellipse cx={x} cy={70} rx={r * 1.9} ry={r * 0.45} fill="none" stroke="#a88a4a" strokeWidth={1.4} />}
          <Circle cx={x} cy={70} r={r} fill={fill} stroke={O} strokeWidth={0.8} />
          {name === 'Earth' && <Circle cx={x + 9} cy={62} r={1.6} fill="#cfd5db" stroke={O} strokeWidth={0.5} />}
          <Txt x={x} y={i % 2 ? 108 : 40} size={9} weight="700">{name}</Txt>
        </G>
      ))}
      <Txt x={172} y={124} size={8.5}>asteroid belt</Txt>
      <Line x1={172} y1={116} x2={174} y2={88} stroke="#9aa7b2" strokeWidth={0.8} />
      <Txt x={250} y={134} size={8.5} italic>Sizes and distances are not to scale</Txt>
    </G>
  );
}

// ---------- latitude and longitude ----------
function GlobeArt() {
  const cx = 130;
  const cy = 120;
  const R = 95;
  const lat = (d) => {
    const y = cy - R * Math.sin(rad(d));
    const half = R * Math.cos(rad(d));
    return { y, half };
  };
  const lines = [[66.5, '#7d8b97', '3 3'], [23.5, '#c8643d', '5 3'], [0, '#c8463d', null], [-23.5, '#c8643d', '5 3'], [-66.5, '#7d8b97', '3 3']];
  return (
    <G>
      <Circle cx={cx} cy={cy} r={R} fill={SEA} stroke={O} strokeWidth={1.5} />
      {[30, 60].map((d) => (
        <Ellipse key={d} cx={cx} cy={cy} rx={R * Math.sin(rad(d))} ry={R} fill="none" stroke="#7d9cbf" strokeWidth={0.8} />
      ))}
      <Line x1={cx} y1={cy - R} x2={cx} y2={cy + R} stroke="#2f7d4f" strokeWidth={1.8} />
      {lines.map(([d, c, dash]) => {
        const { y, half } = lat(d);
        return <Line key={d} x1={cx - half} y1={y} x2={cx + half} y2={y} stroke={c} strokeWidth={d === 0 ? 2 : 1.3} strokeDasharray={dash || undefined} />;
      })}
      <Circle cx={cx} cy={cy - R} r={3} fill={O} />
      <Circle cx={cx} cy={cy + R} r={3} fill={O} />
    </G>
  );
}

// ---------- weather instruments ----------
function WeatherArt() {
  return (
    <G>
      {/* rain gauge in section */}
      <Rect x={20} y={128} width={90} height={22} fill="#c9b18a" />
      <Line x1={10} y1={128} x2={120} y2={128} stroke={O} strokeWidth={1.2} />
      <Rect x={45} y={70} width={40} height={78} fill="#eef1f4" stroke={O} strokeWidth={1.4} />
      <Path d="M45 72 L85 72 L69 94 L69 104 L61 104 L61 94 Z" fill="#dbe7f5" stroke={O} strokeWidth={1.1} />
      <Rect x={52} y={108} width={26} height={36} rx={3} fill="#ffffff" stroke={O} strokeWidth={1.1} />
      <Rect x={53} y={126} width={24} height={17} fill={SEA} />
      {range(4, (i) => <Line key={i} x1={40 + i * 14} y1={40 + (i % 2) * 6} x2={36 + i * 14} y2={52 + (i % 2) * 6} stroke="#4a7ab0" strokeWidth={1.2} />)}
      <Txt x={65} y={166} size={10} weight="700">Rain gauge</Txt>
      {/* wind vane */}
      <Line x1={180} y1={150} x2={180} y2={52} stroke={O} strokeWidth={2} />
      <Line x1={150} y1={110} x2={210} y2={110} stroke={O} strokeWidth={1.4} />
      <Txt x={144} y={114} size={9} weight="700">W</Txt>
      <Txt x={216} y={114} size={9} weight="700">E</Txt>
      <Line x1={168} y1={118} x2={192} y2={102} stroke={O} strokeWidth={1.2} />
      <Txt x={166} y={128} size={9} weight="700">S</Txt>
      <Txt x={196} y={98} size={9} weight="700">N</Txt>
      <Path d="M150 60 L206 60" stroke={O} strokeWidth={1.8} />
      <Polygon points="206,60 196,54 196,66" fill="#c8463d" stroke={O} strokeWidth={0.8} />
      <Polygon points="150,60 140,50 146,60 140,70" fill="#3f6fb5" stroke={O} strokeWidth={0.8} />
      <Txt x={180} y={166} size={10} weight="700">Wind vane</Txt>
      {/* Stevenson screen */}
      <Rect x={258} y={60} width={64} height={46} fill="#ffffff" stroke={O} strokeWidth={1.4} />
      <Path d="M252 60 L290 44 L328 60 Z" fill="#ffffff" stroke={O} strokeWidth={1.4} />
      {range(6, (i) => <Line key={i} x1={262} y1={66 + i * 7} x2={318} y2={66 + i * 7} stroke="#9aa7b2" strokeWidth={1.2} />)}
      {[264, 316].map((x) => <Line key={x} x1={x} y1={106} x2={x} y2={150} stroke={O} strokeWidth={2} />)}
      <Line x1={240} y1={150} x2={340} y2={150} stroke={O} strokeWidth={1.2} />
      <Txt x={290} y={166} size={10} weight="700">Stevenson screen</Txt>
    </G>
  );
}

// ---------- landforms ----------
function LandformsArt() {
  const ground = 'M0 120 L40 120 L40 116 L92 112 L110 96 L124 106 L138 128 L150 128 L164 104 L178 70 L240 66 L250 92 L266 86 L300 22 L334 84 L360 92 L360 160 L0 160 Z';
  return (
    <G>
      <Rect x={0} y={118} width={42} height={42} fill={SEA} />
      <Path d={ground} fill={LAND} stroke={O} strokeWidth={1.4} />
      <Path d="M0 120 L40 120" stroke="#4a7ab0" strokeWidth={1.6} />
      <Path d="M138 128 L150 128" stroke="#4a7ab0" strokeWidth={3} />
      <Txt x={20} y={140} size={9}>sea</Txt>
    </G>
  );
}

// ---------- parts of a river ----------
function RiverArt() {
  return (
    <G>
      <Rect x={0} y={0} width={330} height={210} fill={GRASS} />
      <Path d="M0 0 L120 0 L90 40 L40 60 L0 50 Z" fill="#b9a57a" opacity={0.55} />
      <Path d="M240 210 L330 150 L330 210 Z" fill={SEA} />
      <Path d="M262 210 C280 190 300 176 330 160" fill="none" stroke="#7ab0d8" strokeWidth={1} />
      {/* main river from the hills to the sea, with meanders */}
      <Path d="M30 30 C60 50 70 70 100 80 C140 92 120 120 150 130 C185 142 200 118 230 140 C250 155 255 175 280 192" fill="none" stroke="#3f7fc0" strokeWidth={4} strokeLinecap="round" />
      {/* the estuary widening into the sea */}
      <Path d="M272 186 L300 176 L304 206 L268 206 Z" fill="#3f7fc0" />
      {/* tributary */}
      <Path d="M190 20 C185 50 170 70 120 84" fill="none" stroke="#3f7fc0" strokeWidth={2.5} strokeLinecap="round" />
      <Circle cx={30} cy={30} r={3.5} fill="#ffffff" stroke="#3f7fc0" strokeWidth={1.4} />
      <Circle cx={190} cy={20} r={3} fill="#ffffff" stroke="#3f7fc0" strokeWidth={1.2} />
      <Txt x={300} y={200} size={10} weight="700" fill="#24527a">Sea</Txt>
    </G>
  );
}

// ---------- settlement patterns ----------
function House({ x, y }) {
  return (
    <G>
      <Rect x={x - 4} y={y - 3} width={8} height={6} fill="#ffffff" stroke={O} strokeWidth={0.8} />
      <Path d={`M${x - 5.5} ${y - 3} L${x} ${y - 8} L${x + 5.5} ${y - 3} Z`} fill="#c8643d" stroke={O} strokeWidth={0.6} />
    </G>
  );
}
function SettlementArt() {
  const cluster = [[50, 50], [62, 46], [40, 62], [58, 64], [70, 58], [46, 74], [64, 76], [76, 70], [34, 50], [52, 36], [70, 34], [80, 46]];
  const scattered = [[140, 30], [190, 40], [160, 74], [210, 82], [134, 98], [184, 104]];
  return (
    <G>
      {/* nucleated */}
      <Rect x={6} y={10} width={104} height={100} fill={GRASS} stroke="#9aa7b2" strokeWidth={1} />
      <Rect x={52} y={50} width={10} height={10} fill="#e6dcc0" stroke={O} strokeWidth={0.6} />
      {cluster.map(([x, y], i) => <House key={i} x={x} y={y} />)}
      <Txt x={58} y={126} size={10} weight="700">Nucleated</Txt>
      {/* dispersed */}
      <Rect x={124} y={10} width={104} height={100} fill={GRASS} stroke="#9aa7b2" strokeWidth={1} />
      <Path d="M124 58 L228 62 M176 10 L172 110" stroke="#a89466" strokeWidth={1} strokeDasharray="3 3" />
      {scattered.map(([x, y], i) => <House key={i} x={x} y={y} />)}
      <Txt x={176} y={126} size={10} weight="700">Dispersed</Txt>
      {/* linear */}
      <Rect x={242} y={10} width={104} height={100} fill={GRASS} stroke="#9aa7b2" strokeWidth={1} />
      <Path d="M242 66 C270 58 310 70 346 56" fill="none" stroke="#8a8a8a" strokeWidth={6} />
      {range(6, (i) => <House key={`a${i}`} x={252 + i * 17} y={52 + (i % 3)} />)}
      {range(6, (i) => <House key={`b${i}`} x={256 + i * 17} y={82 - (i % 2) * 2} />)}
      <Txt x={294} y={126} size={10} weight="700">Linear</Txt>
    </G>
  );
}

// ---------- the Earth's orbit and the seasons ----------
function Earth({ x, y, label, sub, sunX, sunY }) {
  const r = 15;
  // the axis is tilted 23.5° from upright, always leaning the same way in space
  const t = rad(23.5);
  const ax = Math.sin(t) * (r + 7);
  const ay = Math.cos(t) * (r + 7);
  const dx = sunX - x;
  const dy = sunY - y;
  const a = Math.atan2(dy, dx);
  // night side: the half facing away from the Sun
  const p1 = [x + r * Math.cos(a + Math.PI / 2), y + r * Math.sin(a + Math.PI / 2)];
  const p2 = [x + r * Math.cos(a - Math.PI / 2), y + r * Math.sin(a - Math.PI / 2)];
  return (
    <G>
      <Circle cx={x} cy={y} r={r} fill="#6aa0d8" stroke={O} strokeWidth={1} />
      <Path d={`M${p1[0]} ${p1[1]} A${r} ${r} 0 0 1 ${p2[0]} ${p2[1]} Z`} fill="#24384f" opacity={0.65} />
      <Line x1={x - ax} y1={y + ay} x2={x + ax} y2={y - ay} stroke={O} strokeWidth={1.4} />
      <Txt x={x} y={y + 32} size={9.5} weight="700">{label}</Txt>
      <Txt x={x} y={y + 44} size={8.5}>{sub}</Txt>
    </G>
  );
}
function OrbitArt() {
  const sx = 190;
  const sy = 100;
  return (
    <G>
      <Ellipse cx={sx} cy={sy} rx={150} ry={62} fill="none" stroke="#9aa7b2" strokeWidth={1.2} strokeDasharray="4 3" />
      <Circle cx={sx} cy={sy} r={20} fill="#f6c343" stroke="#d99a1a" strokeWidth={1.5} />
      <Txt x={sx} y={sy + 4} size={10} weight="700">Sun</Txt>
      <Earth x={sx - 150} y={sy} label="" sub="" sunX={sx} sunY={sy} />
      <Earth x={sx + 150} y={sy} label="" sub="" sunX={sx} sunY={sy} />
      <Earth x={sx} y={sy - 62} label="" sub="" sunX={sx} sunY={sy} />
      <Earth x={sx} y={sy + 62} label="" sub="" sunX={sx} sunY={sy} />
      <Txt x={sx - 86} y={sy - 6} size={9.5} weight="700">21 June</Txt>
      <Txt x={sx - 86} y={sy + 6} size={8}>Sun overhead at</Txt>
      <Txt x={sx - 86} y={sy + 16} size={8}>Tropic of Cancer</Txt>
      <Txt x={sx + 86} y={sy - 6} size={9.5} weight="700">22 December</Txt>
      <Txt x={sx + 86} y={sy + 6} size={8}>Sun overhead at</Txt>
      <Txt x={sx + 86} y={sy + 16} size={8}>Tropic of Capricorn</Txt>
      <Txt x={sx + 24} y={24} size={9.5} weight="700" anchor="start">21 March (equinox)</Txt>
      <Txt x={sx + 24} y={194} size={9.5} weight="700" anchor="start">23 September (equinox)</Txt>
      <Arrow x1={sx - 92} y1={sy - 52} x2={sx - 104} y2={sy - 46} size={6} c="#5a6b78" />
    </G>
  );
}

// ---------- longitude and time ----------
function TimeArt() {
  const xs = (lon) => 180 + lon * 2.6;
  const ticks = [-60, -45, -30, -15, 0, 15, 30, 45, 60];
  const time = (lon) => {
    const h = 12 + lon / 15;
    const hh = ((h + 11) % 12) + 1;
    return h === 12 ? '12 noon' : `${hh}:00 ${h > 12 ? 'p.m.' : 'a.m.'}`;
  };
  return (
    <G>
      <Line x1={xs(-66)} y1={60} x2={xs(66)} y2={60} stroke={O} strokeWidth={1.5} />
      {ticks.map((lon) => (
        <G key={lon}>
          <Line x1={xs(lon)} y1={54} x2={xs(lon)} y2={66} stroke={O} strokeWidth={lon === 0 ? 2 : 1.2} />
          <Txt x={xs(lon)} y={80} size={9} weight={lon === 0 ? '700' : '500'}>{lon === 0 ? '0°' : `${Math.abs(lon)}°${lon > 0 ? 'E' : 'W'}`}</Txt>
          <Txt x={xs(lon)} y={44} size={8.5} weight={lon === 0 ? '700' : '500'} fill={lon === 0 ? '#c8463d' : '#33414d'}>{time(lon)}</Txt>
        </G>
      ))}
      <Arrow x1={xs(10)} y1={100} x2={xs(60)} y2={100} c="#2f7d4f" />
      <Txt x={xs(35)} y={114} size={9.5} weight="700" fill="#2f7d4f">East gains: +1 hour per 15°</Txt>
      <Arrow x1={xs(-10)} y1={100} x2={xs(-60)} y2={100} c="#c8463d" />
      <Txt x={xs(-35)} y={114} size={9.5} weight="700" fill="#c8463d">West loses: −1 hour per 15°</Txt>
      <Txt x={xs(0)} y={20} size={9} italic>Local times when it is noon at Greenwich</Txt>
    </G>
  );
}

export const GEOGRAPHY = {
  'compass-rose': { title: 'The eight points of the compass', w: 220, h: 200, art: CompassArt, labels: [] },
  'solar-system': { title: 'The Sun and the eight planets', w: 350, h: 140, art: SolarArt, labels: [] },
  'lat-long-globe': {
    title: 'Lines of latitude and longitude',
    w: 240,
    h: 232,
    art: GlobeArt,
    labels: [
      ['North Pole 90°N', 130, 8, 130, 25],
      ['Arctic Circle 66½°N', 250, 40, 168, 33],
      ['Tropic of Cancer 23½°N', 250, 82, 214, 82],
      ['Equator 0°', 250, 120, 225, 120],
      ['Tropic of Capricorn 23½°S', 250, 158, 214, 158],
      ['Antarctic Circle 66½°S', 250, 200, 168, 207],
      ['Prime Meridian 0°', 20, 60, 130, 60],
      ['A line of longitude', 20, 160, 90, 168],
    ],
  },
  'weather-instruments': {
    title: 'Instruments of a weather station',
    w: 344,
    h: 172,
    art: WeatherArt,
    labels: [
      ['Funnel', 2, 80, 50, 78],
      ['Collecting bottle', 2, 116, 54, 118],
      ['Pointer turns to\nface the wind', 220, 26, 200, 58],
      ['Louvred sides', 344, 84, 318, 80],
    ],
  },
  landforms: {
    title: 'Landforms in section',
    w: 360,
    h: 160,
    art: LandformsArt,
    labels: [
      ['Coastal plain', 66, 140, 66, 114],
      ['Hill', 110, 72, 110, 96],
      ['Valley with a river', 144, 150, 144, 128],
      ['Plateau', 210, 40, 210, 68],
      ['Mountain peak', 300, 4, 300, 22],
    ],
  },
  'river-parts': {
    title: 'The course of a river from its source to the sea',
    w: 330,
    h: 210,
    art: RiverArt,
    labels: [
      ['Source', 30, 14, 30, 27],
      ['Tributary', 230, 18, 192, 32],
      ['Confluence', 140, 56, 121, 84],
      ['Meander', 104, 140, 124, 116],
      ['Mouth (estuary)', 210, 196, 274, 192],
      ['Hills', 54, 74, 70, 40],
    ],
  },
  'settlement-patterns': { title: 'Settlement patterns', w: 352, h: 132, art: SettlementArt, labels: [['Market', 57, -2, 57, 50], ['Road', 358, 36, 340, 58]] },
  'earth-orbit-seasons': { title: 'The revolution of the Earth and the seasons (Northern Hemisphere dates)', w: 380, h: 214, art: OrbitArt, labels: [['Tilted axis', 6, 52, 34, 82]] },
  'longitude-time': { title: 'Longitude and time: 15° = 1 hour', w: 360, h: 124, art: TimeArt, labels: [] },
};
