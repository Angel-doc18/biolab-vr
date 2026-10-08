// O Level Physics figures from the harmonised scheme of work: reading a vernier
// caliper, eclipses, kinds of motion, the diode, materials for electronics,
// caring for appliances and saving energy.
import { Circle, G, Line, Path, Polygon, Rect } from 'react-native-svg';
import { Head, Txt } from './Diagram';
import { columnsSpec } from './charts';

const O = '#33414d';
const RED = '#c8463d';

// ---------- vernier caliper reading 23.7 mm ----------
const MM = 14; // px per millimetre
const X0 = 20; // x of the 20 mm mark
const mmX = (mm) => X0 + (mm - 20) * MM;
function VernierArt() {
  const main = [];
  for (let mm = 20; mm <= 36; mm++) {
    const long = mm % 5 === 0;
    main.push(<Line key={`m${mm}`} x1={mmX(mm)} y1={40} x2={mmX(mm)} y2={long ? 62 : 54} stroke={O} strokeWidth={1} />);
    if (long)
      main.push(
        <Txt key={`t${mm}`} x={mmX(mm)} y={32} size={9}>
          {mm / 10}
        </Txt>
      );
  }
  const zero = 23.7;
  const vern = [];
  for (let k = 0; k <= 10; k++) {
    const x = mmX(zero + k * 0.9);
    const hit = k === 7;
    vern.push(<Line key={`v${k}`} x1={x} y1={64} x2={x} y2={k % 5 === 0 ? 86 : 78} stroke={hit ? RED : O} strokeWidth={hit ? 2 : 1} />);
    if (k % 5 === 0)
      vern.push(
        <Txt key={`vt${k}`} x={x} y={98} size={9}>
          {k}
        </Txt>
      );
  }
  return (
    <G>
      <Rect x={6} y={38} width={250} height={26} fill="#eef1f4" stroke={O} strokeWidth={1} />
      {main}
      <Rect x={mmX(zero) - 6} y={64} width={10 * 0.9 * MM + 12} height={26} fill="#fbefd0" stroke={O} strokeWidth={1} />
      {vern}
      <Txt x={130} y={16} size={9.5} weight="700">
        main scale (cm)
      </Txt>
      <Txt x={130} y={120} size={10} weight="700">
        Reading = 23 mm + 7 × 0.1 mm = 23.7 mm = 2.37 cm
      </Txt>
    </G>
  );
}

// ---------- eclipses ----------
function EclipseArt() {
  return (
    <G>
      {/* solar eclipse: Moon between Sun and Earth */}
      <Txt x={150} y={14} size={9.5} weight="700">
        Eclipse of the Sun (solar)
      </Txt>
      <Polygon points="30,38 150,56 150,64 30,82" fill="#3f4d59" opacity={0.18} />
      <Polygon points="156,57 262,59 262,61 156,63" fill="#1f2933" opacity={0.6} />
      <Circle cx={30} cy={60} r={22} fill="#f2c94c" stroke={O} strokeWidth={1} />
      <Circle cx={150} cy={60} r={6} fill="#c9d2da" stroke={O} strokeWidth={1} />
      <Circle cx={264} cy={60} r={16} fill="#6aa0d8" stroke={O} strokeWidth={1} />
      {/* lunar eclipse: Earth between Sun and Moon */}
      <Txt x={150} y={112} size={9.5} weight="700">
        Eclipse of the Moon (lunar)
      </Txt>
      <Polygon points="150,142 270,152 270,164 150,174" fill="#1f2933" opacity={0.45} />
      <Circle cx={30} cy={158} r={22} fill="#f2c94c" stroke={O} strokeWidth={1} />
      <Circle cx={150} cy={158} r={16} fill="#6aa0d8" stroke={O} strokeWidth={1} />
      <Circle cx={256} cy={158} r={6} fill="#8a6d5a" stroke={O} strokeWidth={1} />
    </G>
  );
}

// ---------- diode in a circuit ----------
function Diode({ x, y, flip }) {
  // triangle pointing in the direction of conventional current, with a bar
  const d = flip ? -1 : 1;
  return (
    <G>
      <Polygon points={`${x - 8 * d},${y - 8} ${x - 8 * d},${y + 8} ${x + 6 * d},${y}`} fill={O} />
      <Line x1={x + 6 * d} y1={y - 8} x2={x + 6 * d} y2={y + 8} stroke={O} strokeWidth={2} />
    </G>
  );
}
function Circuit({ x0, flip, lit }) {
  return (
    <G>
      <Path d={`M${x0} 40 L${x0 + 130} 40 L${x0 + 130} 120 L${x0} 120 Z`} fill="none" stroke={O} strokeWidth={1.3} />
      {/* cell on the left side: long plate positive at the top */}
      <Rect x={x0 - 6} y={72} width={12} height={16} fill="#ffffff" />
      <Line x1={x0 - 10} y1={74} x2={x0 + 10} y2={74} stroke={O} strokeWidth={1.6} />
      <Line x1={x0 - 5} y1={86} x2={x0 + 5} y2={86} stroke={O} strokeWidth={3} />
      <Txt x={x0 - 16} y={77} size={9}>
        +
      </Txt>
      {/* diode on the top wire */}
      <Rect x={x0 + 55} y={30} width={20} height={20} fill="#ffffff" />
      <Diode x={x0 + 65} y={40} flip={flip} />
      {/* lamp on the right side */}
      <Circle cx={x0 + 130} cy={80} r={11} fill={lit ? '#fbe58a' : '#ffffff'} stroke={O} strokeWidth={1.2} />
      <Line x1={x0 + 122} y1={72} x2={x0 + 138} y2={88} stroke={O} strokeWidth={1} />
      <Line x1={x0 + 138} y1={72} x2={x0 + 122} y2={88} stroke={O} strokeWidth={1} />
      {lit && <Head x={x0 + 100} y={40} dx={1} dy={0} size={6} fill={RED} />}
    </G>
  );
}
function DiodeArt() {
  return (
    <G>
      <Circuit x0={30} lit />
      <Txt x={95} y={142} size={9.5} weight="700">
        Forward bias: lamp lights
      </Txt>
      <Circuit x0={210} flip />
      <Txt x={275} y={142} size={9.5} weight="700">
        Reverse bias: no current
      </Txt>
    </G>
  );
}

export const PHYSICS_4 = {
  'vernier-caliper': {
    title: 'Reading a vernier caliper',
    w: 262,
    h: 128,
    art: VernierArt,
    labels: [],
    facts: [
      'The main scale is marked in millimetres. The zero of the vernier scale is just past the 23 millimetre mark, so the reading is 23 point something millimetres.',
      'The vernier has ten divisions that fill nine millimetres, so each is 0.9 millimetres long. Look for the vernier mark that lines up exactly with a main-scale mark: here it is mark 7.',
      'So the reading is 23 millimetres plus 7 tenths of a millimetre: 23.7 millimetres, or 2.37 centimetres.',
    ],
  },
  eclipses: {
    title: 'Eclipses of the Sun and of the Moon (not to scale)',
    w: 300,
    h: 186,
    art: EclipseArt,
    labels: [],
    facts: [
      'In an eclipse of the Sun, the Moon passes between the Sun and the Earth. Its shadow falls on a small part of the Earth, where the Sun is hidden in the daytime.',
      'In an eclipse of the Moon, the Earth passes between the Sun and the Moon. The Moon moves into the Earth’s shadow and looks dark or reddish.',
      'Both happen because light travels in straight lines, so an opaque body casts a shadow.',
    ],
  },
  'motion-types': columnsSpec('The four kinds of motion', [
    { head: 'Linear\n(translational)', items: ['A car on a straight road', 'A falling stone', 'A lift going up'] },
    { head: 'Random', items: ['Smoke particles', 'Gas molecules', 'Dust in sunlight'] },
    { head: 'Circular\n(rotational)', items: ['A turning wheel', 'A ceiling fan', 'A satellite in orbit'] },
    { head: 'Oscillatory\n(to and fro)', items: ['A pendulum', 'A child on a swing', 'A plucked guitar string'] },
  ], { colW: 110 }),
  'diode-circuits': {
    title: 'A diode lets current flow in one direction only',
    w: 360,
    h: 150,
    art: DiodeArt,
    labels: [],
    facts: [
      'In forward bias, the arrow of the diode symbol points the same way as the conventional current from the positive terminal, so current flows and the lamp lights.',
      'In reverse bias, the diode is turned round. It has a very high resistance in this direction, so almost no current flows and the lamp stays off.',
    ],
  },
  'electronic-materials': columnsSpec('Conductors, semiconductors and insulators', [
    { head: 'Conductors', items: ['Many free electrons', 'Copper, aluminium', 'Very low resistance'] },
    { head: 'Semiconductors', items: ['Few free electrons', 'Silicon, germanium', 'Conduct more when hot'] },
    { head: 'Insulators', items: ['Almost no free electrons', 'Plastic, rubber, glass', 'Very high resistance'] },
  ], { colW: 128 }),
  'appliance-care': columnsSpec('Looking after electrical appliances', [
    { head: 'Before use', items: ['Read the rating plate', 'Match voltage and plug', 'Fit the correct fuse', 'Check cables for damage'] },
    { head: 'During use', items: ['Do not overload sockets', 'Use a voltage stabiliser', 'Keep away from water', 'Switch off when not in use'] },
    { head: 'Maintenance', items: ['Unplug before cleaning', 'Clean dust and vents', 'Replace worn cables', 'Repairs by a qualified technician'] },
  ], { colW: 132 }),
  'energy-saving': columnsSpec('Using energy wisely at home and school', [
    { head: 'Save electricity', items: ['LED bulbs, not filament', 'Switch off lights and fans', 'Unplug idle chargers', 'Efficient fridges'] },
    { head: 'Clean sources', items: ['Solar panels and lamps', 'Hydroelectric power', 'Improved cooking stoves', 'Biogas from waste'] },
    { head: 'Protect the environment', items: ['Recycle old batteries', 'Return e-waste safely', 'Plant trees', 'Never burn cables'] },
  ], { colW: 132 }),
};
