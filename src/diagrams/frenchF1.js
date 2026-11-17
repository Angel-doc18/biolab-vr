// French figures for Form 1, the first year of French: greetings, tu and
// vous, the alphabet and accents, subject pronouns, être and avoir, numbers,
// days and months, a family tree, articles, a timetable, likes and questions,
// the body and saying where it hurts, -er verbs, clocks, clothes and colours,
// adjectives and a portrait plan, a house plan, possessives, the negative,
// describing objects, jobs, faire and aller, the near future, the market and
// prices, the weather, a clean neighbourhood, places and prepositions, a
// street map, transport, the flag and festivals of Cameroon, an SMS and an
// information sheet. Labels are in French, as students meet them in class.
import { Circle, Ellipse, G, Line, Path, Polygon, Rect } from 'react-native-svg';
import { Head, Txt } from './Diagram';
import { columnsSpec, flowSpec, treeSpec } from './charts';

const O = '#33414d';
const MUTED = '#6b7a88';
const BLUE = '#3f6fb5';
const RED = '#c8463d';
const GREEN = '#3f8a4a';
const AMBER = '#e0a020';
const PAPER = '#fbf8f1';
const WOOD = '#c9a06a';
const ROAD = '#dcd6c8';
const SKIN = '#b9825a';

const drawn = (title, w, h, art, facts, points) => ({ title, w, h, art, labels: [], facts, points });

// ---------- the alphabet ----------
const LETTERS = [
  ['a', 'a'], ['b', 'bé'], ['c', 'cé'], ['d', 'dé'], ['e', 'e'], ['f', 'effe'], ['g', 'gé'],
  ['h', 'ache'], ['i', 'i'], ['j', 'ji'], ['k', 'ka'], ['l', 'elle'], ['m', 'emme'], ['n', 'enne'],
  ['o', 'o'], ['p', 'pé'], ['q', 'ku'], ['r', 'erre'], ['s', 'esse'], ['t', 'té'], ['u', 'u'],
  ['v', 'vé'], ['w', 'double vé'], ['x', 'ixe'], ['y', 'i grec'], ['z', 'zède'],
];
const TRICKY = new Set(['e', 'g', 'h', 'i', 'j', 'u', 'w', 'y']);
const cellAt = (i) => ({ x: 6 + (i % 7) * 48, y: 6 + Math.floor(i / 7) * 44 });

function AlphabetArt() {
  return (
    <G>
      {LETTERS.map(([l, name], i) => {
        const { x, y } = cellAt(i);
        return (
          <G key={l}>
            <Rect x={x + 1} y={y + 1} width={46} height={42} rx={5} fill={TRICKY.has(l) ? '#fbefd0' : '#e6eef8'} stroke={O} strokeWidth={0.8} />
            <Txt x={x + 24} y={y + 21} size={15} weight="700">
              {l.toUpperCase()} {l}
            </Txt>
            <Txt x={x + 24} y={y + 36} size={8.5} fill={BLUE}>
              {name}
            </Txt>
          </G>
        );
      })}
      <Rect x={252} y={148} width={14} height={14} rx={3} fill="#fbefd0" stroke={O} strokeWidth={0.8} />
      <Txt x={272} y={159} size={8.5} anchor="start">
        à bien retenir
      </Txt>
    </G>
  );
}

// ---------- a family tree ----------
const FAM_W = 72;
const FAM_H = 34;
function Person({ cx, y, role, name, me }) {
  return (
    <G>
      <Rect x={cx - FAM_W / 2} y={y} width={FAM_W} height={FAM_H} rx={6} fill={me ? '#fbefd0' : '#e6eef8'} stroke={O} strokeWidth={1} />
      <Txt x={cx} y={y + 14} size={8.5} weight="700">
        {role}
      </Txt>
      <Txt x={cx} y={y + 27} size={8.5} fill={BLUE}>
        {name}
      </Txt>
    </G>
  );
}
function FamilyArt() {
  const link = { stroke: '#5a6b78', strokeWidth: 1.3 };
  return (
    <G>
      {/* marriages: a double line between husband and wife */}
      <Line x1={174} y1={23} x2={194} y2={23} {...link} />
      <Line x1={174} y1={27} x2={194} y2={27} {...link} />
      <Line x1={80} y1={103} x2={100} y2={103} {...link} />
      <Line x1={80} y1={107} x2={100} y2={107} {...link} />
      <Line x1={266} y1={103} x2={294} y2={103} {...link} />
      <Line x1={266} y1={107} x2={294} y2={107} {...link} />
      {/* the grandparents' children: my father and my aunt */}
      <Line x1={184} y1={27} x2={184} y2={72} {...link} />
      <Line x1={136} y1={72} x2={230} y2={72} {...link} />
      <Line x1={136} y1={72} x2={136} y2={88} {...link} />
      <Line x1={230} y1={72} x2={230} y2={88} {...link} />
      {/* my parents' children */}
      <Line x1={90} y1={107} x2={90} y2={154} {...link} />
      <Line x1={40} y1={154} x2={196} y2={154} {...link} />
      <Line x1={40} y1={154} x2={40} y2={168} {...link} />
      <Line x1={118} y1={154} x2={118} y2={168} {...link} />
      <Line x1={196} y1={154} x2={196} y2={168} {...link} />
      {/* my aunt and uncle's daughter */}
      <Line x1={280} y1={107} x2={280} y2={168} {...link} />
      <Person cx={138} y={8} role="le grand-père" name="Tabi" />
      <Person cx={230} y={8} role="la grand-mère" name="Ngum" />
      <Person cx={44} y={88} role="la mère" name="Bih" />
      <Person cx={136} y={88} role="le père" name="Mbah" />
      <Person cx={230} y={88} role="la tante" name="Akwi" />
      <Person cx={330} y={88} role="l’oncle" name="Ewane" />
      <Person cx={40} y={168} role="moi" name="Asong" me />
      <Person cx={118} y={168} role="ma sœur" name="Manka" />
      <Person cx={196} y={168} role="mon frère" name="Neba" />
      <Person cx={280} y={168} role="ma cousine" name="Ebot" />
      <Line x1={92} y1={222} x2={108} y2={222} {...link} />
      <Line x1={92} y1={226} x2={108} y2={226} {...link} />
      <Txt x={114} y={228} size={8.5} anchor="start" italic>
        = mari et femme
      </Txt>
    </G>
  );
}

// ---------- a school timetable ----------
const TT_X = [6, 70, 158, 246, 334];
const TT_ROWS = [
  ['7 h 30', 'Mathématiques', 'Anglais', 'Français'],
  ['8 h 30', 'Français', 'Histoire', 'Biologie'],
  ['10 h 00', null, null, null],
  ['10 h 20', 'Géographie', 'Mathématiques', 'Informatique'],
  ['11 h 20', 'Sport', 'Français', 'Anglais'],
];
function TimetableArt() {
  const rowY = (r) => 6 + r * 26;
  return (
    <G>
      {['Heures', 'lundi', 'mardi', 'mercredi'].map((h, c) => (
        <G key={h}>
          <Rect x={TT_X[c]} y={rowY(0)} width={TT_X[c + 1] - TT_X[c]} height={26} fill="#dbe7f5" stroke={O} strokeWidth={0.8} />
          <Txt x={(TT_X[c] + TT_X[c + 1]) / 2} y={rowY(0) + 17} size={9.5} weight="700">
            {h}
          </Txt>
        </G>
      ))}
      {TT_ROWS.map((row, r) => (
        <G key={row[0]}>
          <Rect x={TT_X[0]} y={rowY(r + 1)} width={TT_X[1] - TT_X[0]} height={26} fill={PAPER} stroke={O} strokeWidth={0.8} />
          <Txt x={(TT_X[0] + TT_X[1]) / 2} y={rowY(r + 1) + 17} size={9} weight="700">
            {row[0]}
          </Txt>
          {row[1] === null ? (
            <G>
              <Rect x={TT_X[1]} y={rowY(r + 1)} width={TT_X[4] - TT_X[1]} height={26} fill="#fbefd0" stroke={O} strokeWidth={0.8} />
              <Txt x={(TT_X[1] + TT_X[4]) / 2} y={rowY(r + 1) + 17} size={9.5} weight="700">
                RÉCRÉATION
              </Txt>
            </G>
          ) : (
            row.slice(1).map((s, c) => (
              <G key={c}>
                <Rect x={TT_X[c + 1]} y={rowY(r + 1)} width={TT_X[c + 2] - TT_X[c + 1]} height={26} fill="#ffffff" stroke={O} strokeWidth={0.8} />
                <Txt x={(TT_X[c + 1] + TT_X[c + 2]) / 2} y={rowY(r + 1) + 17} size={9}>
                  {s}
                </Txt>
              </G>
            ))
          )}
        </G>
      ))}
    </G>
  );
}

// ---------- the human body ----------
const BODY_LABELS = [
  // [text, side, label y, target x, target y]
  ['les cheveux', 'L', 18, 158, 21],
  ['l’œil', 'L', 38, 162, 38],
  ['la bouche', 'L', 58, 170, 52],
  ['l’épaule', 'L', 80, 142, 77],
  ['le bras', 'L', 114, 130, 112],
  ['la main', 'L', 160, 120, 160],
  ['le genou', 'L', 198, 157, 196],
  ['le pied', 'L', 246, 146, 247],
  ['la tête', 'R', 20, 188, 24],
  ['l’oreille', 'R', 40, 194, 40],
  ['le nez', 'R', 58, 172, 46],
  ['le cou', 'R', 76, 176, 67],
  ['la poitrine', 'R', 100, 184, 96],
  ['le ventre', 'R', 136, 182, 135],
  ['la jambe', 'R', 218, 186, 218],
];
function BodyArt() {
  return (
    <G>
      {/* legs, arms and trunk */}
      <Line x1={159} y1={150} x2={154} y2={240} stroke={SKIN} strokeWidth={14} strokeLinecap="round" />
      <Line x1={181} y1={150} x2={186} y2={240} stroke={SKIN} strokeWidth={14} strokeLinecap="round" />
      <Line x1={141} y1={80} x2={124} y2={150} stroke={SKIN} strokeWidth={11} strokeLinecap="round" />
      <Line x1={199} y1={80} x2={216} y2={150} stroke={SKIN} strokeWidth={11} strokeLinecap="round" />
      <Circle cx={121} cy={159} r={7} fill={SKIN} />
      <Circle cx={219} cy={159} r={7} fill={SKIN} />
      <Path d="M140 74 Q170 68 200 74 L192 152 L148 152 Z" fill="#5d8fc9" stroke={O} strokeWidth={1} />
      <Ellipse cx={147} cy={247} rx={11} ry={5} fill={SKIN} />
      <Ellipse cx={193} cy={247} rx={11} ry={5} fill={SKIN} />
      {/* neck and head */}
      <Rect x={164} y={60} width={12} height={14} fill={SKIN} />
      <Ellipse cx={148} cy={40} rx={4} ry={7} fill={SKIN} />
      <Ellipse cx={192} cy={40} rx={4} ry={7} fill={SKIN} />
      <Circle cx={170} cy={40} r={22} fill={SKIN} />
      <Path d="M148 36 Q150 14 170 14 Q190 14 192 36 Q186 24 170 23 Q154 24 148 36 Z" fill="#2b2420" />
      <Circle cx={162} cy={38} r={2.4} fill="#2b2420" />
      <Circle cx={178} cy={38} r={2.4} fill="#2b2420" />
      <Path d="M170 40 L168 47 L172 47" fill="none" stroke="#6e4630" strokeWidth={1.2} />
      <Path d="M163 52 Q170 57 177 52" fill="none" stroke="#6e4630" strokeWidth={1.4} />
      {BODY_LABELS.map(([t, side, y, tx, ty]) => {
        const left = side === 'L';
        const lx = left ? 104 : 236;
        return (
          <G key={t}>
            <Line x1={left ? lx + 3 : lx - 3} y1={y - 3} x2={tx} y2={ty} stroke={MUTED} strokeWidth={0.8} />
            <Circle cx={tx} cy={ty} r={1.8} fill={O} />
            <Txt x={lx} y={y} size={9} anchor={left ? 'end' : 'start'}>
              {t}
            </Txt>
          </G>
        );
      })}
    </G>
  );
}

// ---------- clocks ----------
const CLOCKS = [
  [7, 0, '7 h 00', 'sept heures', ''],
  [7, 15, '7 h 15', 'sept heures', 'et quart'],
  [7, 30, '7 h 30', 'sept heures', 'et demie'],
  [7, 45, '7 h 45', 'huit heures', 'moins le quart'],
];
const clockX = (i) => 46 + i * 84;
function ClocksArt() {
  return (
    <G>
      {CLOCKS.map(([h, m, digits, l1, l2], i) => {
        const cx = clockX(i);
        const cy = 50;
        const ma = (m * 6 * Math.PI) / 180;
        const ha = (((h % 12) + m / 60) * 30 * Math.PI) / 180;
        return (
          <G key={digits}>
            <Circle cx={cx} cy={cy} r={34} fill="#ffffff" stroke={O} strokeWidth={1.6} />
            {Array.from({ length: 12 }, (_, k) => {
              const a = (k * 30 * Math.PI) / 180;
              const r1 = k % 3 ? 30 : 27;
              return <Line key={k} x1={cx + r1 * Math.sin(a)} y1={cy - r1 * Math.cos(a)} x2={cx + 33 * Math.sin(a)} y2={cy - 33 * Math.cos(a)} stroke={O} strokeWidth={k % 3 ? 0.8 : 1.6} />;
            })}
            <Line x1={cx} y1={cy} x2={cx + 17 * Math.sin(ha)} y2={cy - 17 * Math.cos(ha)} stroke={O} strokeWidth={3} strokeLinecap="round" />
            <Line x1={cx} y1={cy} x2={cx + 26 * Math.sin(ma)} y2={cy - 26 * Math.cos(ma)} stroke={RED} strokeWidth={1.8} strokeLinecap="round" />
            <Circle cx={cx} cy={cy} r={2.4} fill={O} />
            <Txt x={cx} y={102} size={10} weight="700">
              {digits}
            </Txt>
            <Txt x={cx} y={116} size={9}>
              {l1}
            </Txt>
            {!!l2 && (
              <Txt x={cx} y={129} size={9}>
                {l2}
              </Txt>
            )}
          </G>
        );
      })}
    </G>
  );
}

// ---------- colours ----------
const SWATCHES = [
  ['#d0312d', 'rouge, rouge'], ['#f2c230', 'jaune, jaune'], ['#3f8a4a', 'vert, verte'], ['#3f6fb5', 'bleu, bleue'], ['#222222', 'noir, noire'], ['#ffffff', 'blanc, blanche'],
  ['#9aa3ab', 'gris, grise'], ['#7d4fa3', 'violet, violette'], ['#f2a6c0', 'rose, rose'], ['#7a4b2a', 'marron, marron'], ['#f08a24', 'orange, orange'], ['#e3d3b0', 'beige, beige'],
];
const swatchAt = (i) => ({ x: i < 6 ? 14 : 180, y: 34 + (i % 6) * 30 });
function ColoursArt() {
  return (
    <G>
      <Txt x={14} y={18} size={9.5} anchor="start" weight="700">
        masculin, féminin
      </Txt>
      <Txt x={180} y={18} size={9.5} anchor="start" weight="700">
        masculin, féminin
      </Txt>
      {SWATCHES.map(([c, t], i) => {
        const { x, y } = swatchAt(i);
        const fixed = t.startsWith('marron') || t.startsWith('orange');
        return (
          <G key={t}>
            <Rect x={x} y={y} width={32} height={20} rx={4} fill={c} stroke={O} strokeWidth={0.9} />
            <Txt x={x + 42} y={y + 14} size={10} anchor="start" fill={fixed ? RED : O} weight={fixed ? '700' : '500'}>
              {t}
            </Txt>
          </G>
        );
      })}
      <Txt x={170} y={226} size={9} italic fill={RED}>
        marron et orange ne changent jamais
      </Txt>
    </G>
  );
}

// ---------- a house plan ----------
function HouseArt() {
  const bed = (x, y) => (
    <G key={`b${x}`}>
      <Rect x={x} y={y} width={34} height={22} rx={2} fill="#a7c4e0" stroke={O} strokeWidth={0.8} />
      <Rect x={x + 2} y={y + 2} width={9} height={18} rx={2} fill="#ffffff" stroke={O} strokeWidth={0.6} />
    </G>
  );
  return (
    <G>
      <Rect x={20} y={14} width={300} height={150} fill={PAPER} stroke={O} strokeWidth={2.2} />
      <Line x1={20} y1={84} x2={320} y2={84} stroke={O} strokeWidth={1.6} />
      <Line x1={120} y1={14} x2={120} y2={84} stroke={O} strokeWidth={1.6} />
      <Line x1={220} y1={14} x2={220} y2={84} stroke={O} strokeWidth={1.6} />
      <Line x1={170} y1={84} x2={170} y2={164} stroke={O} strokeWidth={1.6} />
      <Line x1={250} y1={84} x2={250} y2={164} stroke={O} strokeWidth={1.6} />
      {[bed(26, 20), bed(126, 20), bed(226, 20)]}
      {['la chambre', 'la chambre', 'la chambre'].map((t, i) => (
        <Txt key={i} x={70 + i * 100} y={70} size={9.5} weight="700">
          {t}
        </Txt>
      ))}
      <Rect x={40} y={92} width={70} height={14} rx={3} fill={WOOD} stroke={O} strokeWidth={0.8} />
      <Rect x={58} y={112} width={30} height={14} rx={2} fill="#e8d9bd" stroke={O} strokeWidth={0.8} />
      <Txt x={95} y={150} size={9.5} weight="700">
        le salon
      </Txt>
      <Rect x={178} y={92} width={26} height={20} rx={2} fill="#d5d8dc" stroke={O} strokeWidth={0.8} />
      <Circle cx={185} cy={102} r={4} fill="none" stroke={O} strokeWidth={0.8} />
      <Circle cx={197} cy={102} r={4} fill="none" stroke={O} strokeWidth={0.8} />
      <Txt x={210} y={150} size={9.5} weight="700">
        la cuisine
      </Txt>
      <Rect x={262} y={92} width={34} height={30} fill="#dfeef7" stroke={O} strokeWidth={0.8} />
      <Circle cx={279} cy={107} r={3} fill={MUTED} />
      <Txt x={285} y={150} size={9.5} weight="700">
        la douche
      </Txt>
      {/* the front door and the veranda */}
      <Line x1={84} y1={164} x2={108} y2={164} stroke={PAPER} strokeWidth={3} />
      <Rect x={20} y={164} width={300} height={20} fill="none" stroke={MUTED} strokeWidth={1} strokeDasharray="4 3" />
      <Txt x={170} y={178} size={8.5} italic>
        la véranda
      </Txt>
      {/* the yard, the mango tree and the gate */}
      <Line x1={20} y1={244} x2={150} y2={244} stroke={O} strokeWidth={1.6} strokeDasharray="2 2" />
      <Line x1={190} y1={244} x2={320} y2={244} stroke={O} strokeWidth={1.6} strokeDasharray="2 2" />
      <Txt x={170} y={238} size={8.5} weight="700">
        le portail
      </Txt>
      <Txt x={80} y={216} size={9.5} weight="700">
        la cour
      </Txt>
      <Rect x={268} y={214} width={6} height={16} fill="#7a5233" />
      <Circle cx={271} cy={205} r={16} fill={GREEN} />
      <Txt x={250} y={210} size={8.5} anchor="end">
        un manguier
      </Txt>
    </G>
  );
}

// ---------- the weather ----------
const cloud = (x, y, fill) => (
  <G>
    <Circle cx={x - 10} cy={y + 2} r={9} fill={fill} />
    <Circle cx={x + 2} cy={y - 4} r={12} fill={fill} />
    <Circle cx={x + 14} cy={y + 3} r={8} fill={fill} />
    <Rect x={x - 10} y={y + 2} width={24} height={9} fill={fill} />
  </G>
);
const sun = (x, y) => (
  <G>
    {Array.from({ length: 8 }, (_, k) => {
      const a = (k * 45 * Math.PI) / 180;
      return <Line key={k} x1={x + 17 * Math.cos(a)} y1={y + 17 * Math.sin(a)} x2={x + 24 * Math.cos(a)} y2={y + 24 * Math.sin(a)} stroke={AMBER} strokeWidth={2.2} strokeLinecap="round" />;
    })}
    <Circle cx={x} cy={y} r={13} fill="#f6c443" stroke={AMBER} strokeWidth={1} />
  </G>
);
const WEATHER = [
  ['sun', 'Il y a du soleil.', 'Il fait beau.'],
  ['rain', 'Il pleut.', ''],
  ['wind', 'Il y a du vent.', ''],
  ['clouds', 'Il y a des nuages.', ''],
  ['hot', 'Il fait chaud.', ''],
  ['fog', 'Il y a du brouillard.', ''],
];
const wx = (i) => 2 + (i % 3) * 112 + 56;
const wy = (i) => 2 + Math.floor(i / 3) * 100 + 38;
function WeatherArt() {
  return (
    <G>
      {WEATHER.map(([k, l1, l2], i) => {
        const x = wx(i);
        const y = wy(i);
        return (
          <G key={k}>
            <Rect x={x - 54} y={y - 36} width={108} height={96} rx={8} fill={i % 2 ? '#eef3f8' : '#f6f2e6'} stroke={O} strokeWidth={0.6} />
            {k === 'sun' && sun(x, y)}
            {k === 'rain' && (
              <G>
                {cloud(x, y - 6, '#8c99a6')}
                {[-10, 0, 10].map((d) => (
                  <Line key={d} x1={x + d} y1={y + 12} x2={x + d - 4} y2={y + 22} stroke={BLUE} strokeWidth={2} strokeLinecap="round" />
                ))}
              </G>
            )}
            {k === 'wind' &&
              [-10, 0, 10].map((d) => (
                <Path key={d} d={`M${x - 26} ${y + d} Q${x - 6} ${y + d - 8} ${x + 10} ${y + d} T${x + 26} ${y + d - 4}`} fill="none" stroke={MUTED} strokeWidth={2} strokeLinecap="round" />
              ))}
            {k === 'clouds' && (
              <G>
                {cloud(x - 8, y - 6, '#b4bec8')}
                {cloud(x + 10, y + 6, '#8c99a6')}
              </G>
            )}
            {k === 'hot' && (
              <G>
                {sun(x - 20, y - 2)}
                <Rect x={x + 16} y={y - 22} width={8} height={32} rx={4} fill="#ffffff" stroke={O} strokeWidth={1} />
                <Rect x={x + 18} y={y - 14} width={4} height={24} fill={RED} />
                <Circle cx={x + 20} cy={y + 14} r={7} fill={RED} stroke={O} strokeWidth={1} />
              </G>
            )}
            {k === 'fog' &&
              [-14, -4, 6, 16].map((d, j) => <Line key={d} x1={x - 28 + (j % 2) * 6} y1={y + d} x2={x + 28 - (j % 2) * 6} y2={y + d} stroke="#9aa3ab" strokeWidth={3} strokeLinecap="round" />)}
            <Txt x={x} y={y + 40} size={9} weight="700">
              {l1}
            </Txt>
            {!!l2 && (
              <Txt x={x} y={y + 53} size={9}>
                {l2}
              </Txt>
            )}
          </G>
        );
      })}
    </G>
  );
}

// ---------- prepositions of place ----------
const PREPS = ['sur', 'sous', 'dans', 'devant', 'derrière', 'entre', 'à côté de', 'en face de'];
const px0 = (i) => 2 + (i % 4) * 84;
const py0 = (i) => 2 + Math.floor(i / 4) * 98;
function PrepositionsArt() {
  const ball = (x, y) => <Circle cx={x} cy={y} r={8} fill={RED} stroke={O} strokeWidth={0.8} />;
  const box = (x, y, w = 30, h = 26) => <Rect x={x} y={y} width={w} height={h} rx={2} fill={WOOD} stroke={O} strokeWidth={0.9} />;
  const table = (x, y) => (
    <G>
      <Rect x={x} y={y} width={50} height={6} fill={WOOD} stroke={O} strokeWidth={0.9} />
      <Line x1={x + 5} y1={y + 6} x2={x + 5} y2={y + 34} stroke={O} strokeWidth={2} />
      <Line x1={x + 45} y1={y + 6} x2={x + 45} y2={y + 34} stroke={O} strokeWidth={2} />
    </G>
  );
  return (
    <G>
      {PREPS.map((p, i) => {
        const x = px0(i);
        const y = py0(i);
        const cx = x + 41;
        return (
          <G key={p}>
            <Rect x={x} y={y} width={82} height={94} rx={7} fill={i % 2 ? '#eef3f8' : '#f6f2e6'} stroke={O} strokeWidth={0.6} />
            {p === 'sur' && (
              <G>
                {table(cx - 25, y + 40)}
                {ball(cx, y + 32)}
              </G>
            )}
            {p === 'sous' && (
              <G>
                {table(cx - 25, y + 30)}
                {ball(cx, y + 56)}
              </G>
            )}
            {p === 'dans' && (
              <G>
                {ball(cx, y + 50)}
                <Path d={`M${cx - 20} ${y + 36} L${cx - 16} ${y + 66} L${cx + 16} ${y + 66} L${cx + 20} ${y + 36}`} fill="#d9b98a" fillOpacity={0.55} stroke={O} strokeWidth={1.2} />
              </G>
            )}
            {p === 'devant' && (
              <G>
                {box(cx - 15, y + 30, 30, 30)}
                {ball(cx, y + 58)}
              </G>
            )}
            {p === 'derrière' && (
              <G>
                {ball(cx + 6, y + 30)}
                {box(cx - 15, y + 30, 30, 30)}
              </G>
            )}
            {p === 'entre' && (
              <G>
                {box(cx - 38, y + 36)}
                {box(cx + 8, y + 36)}
                {ball(cx - 0, y + 54)}
              </G>
            )}
            {p === 'à côté de' && (
              <G>
                {box(cx - 26, y + 34, 30, 30)}
                {ball(cx + 16, y + 56)}
              </G>
            )}
            {p === 'en face de' && (
              <G>
                <Rect x={cx - 8} y={y + 18} width={16} height={56} fill={ROAD} />
                <Line x1={cx} y1={y + 20} x2={cx} y2={y + 72} stroke="#ffffff" strokeWidth={1.4} strokeDasharray="4 4" />
                <Polygon points={`${cx - 36},${y + 44} ${cx - 24},${y + 32} ${cx - 12},${y + 44}`} fill={RED} stroke={O} strokeWidth={0.8} />
                <Rect x={cx - 34} y={y + 44} width={20} height={18} fill={PAPER} stroke={O} strokeWidth={0.8} />
                <Polygon points={`${cx + 12},${y + 44} ${cx + 24},${y + 32} ${cx + 36},${y + 44}`} fill={BLUE} stroke={O} strokeWidth={0.8} />
                <Rect x={cx + 14} y={y + 44} width={20} height={18} fill={PAPER} stroke={O} strokeWidth={0.8} />
              </G>
            )}
            <Txt x={cx} y={y + 86} size={10} weight="700">
              {p}
            </Txt>
          </G>
        );
      })}
    </G>
  );
}

// ---------- the way to the pharmacy ----------
function Building({ x, y, w, h, fill, label, ly }) {
  return (
    <G>
      <Rect x={x} y={y} width={w} height={h} rx={3} fill={fill} stroke={O} strokeWidth={1} />
      <Txt x={x + w / 2} y={ly ?? y + h / 2 + 3} size={9} weight="700">
        {label}
      </Txt>
    </G>
  );
}
function StreetMapArt() {
  return (
    <G>
      {/* the avenue and the two streets */}
      <Rect x={150} y={14} width={30} height={232} fill={ROAD} />
      <Rect x={14} y={150} width={312} height={22} fill={ROAD} />
      <Rect x={14} y={70} width={312} height={22} fill={ROAD} />
      <Txt x={60} y={165} size={8.5} italic fill={MUTED}>
        la 1re rue
      </Txt>
      <Txt x={60} y={85} size={8.5} italic fill={MUTED}>
        la 2e rue
      </Txt>
      <Txt x={177} y={204} size={8.5} italic fill={MUTED} rotate={-90}>
        l’avenue
      </Txt>
      <Building x={30} y={22} w={100} h={40} fill="#efe6f7" label="l’église" />
      <Building x={204} y={22} w={100} h={40} fill="#e3f0da" label="la pharmacie" />
      <Building x={30} y={100} w={100} h={40} fill="#e6eef8" label="la banque" />
      <Building x={204} y={100} w={100} h={40} fill="#fbefd0" label="la boulangerie" />
      <Building x={30} y={182} w={100} h={50} fill="#f8e3df" label="le marché" />
      <Building x={204} y={190} w={100} h={46} fill="#e0f2f1" label="l’école" />
      {/* the way: straight on, second street on the right */}
      <Path d="M165 226 L165 81 L246 81 L246 66" fill="none" stroke={RED} strokeWidth={2.2} strokeDasharray="6 4" />
      <Head x={246} y={63} dx={0} dy={-1} size={8} fill={RED} />
      <Circle cx={165} cy={230} r={6} fill={RED} stroke="#ffffff" strokeWidth={1.5} />
      <Txt x={146} y={244} size={8.5} anchor="end" weight="700" fill={RED}>
        Vous êtes ici.
      </Txt>
    </G>
  );
}

// ---------- the flag ----------
function starPoints(cx, cy, R) {
  const pts = [];
  for (let i = 0; i < 10; i++) {
    const a = ((-90 + i * 36) * Math.PI) / 180;
    const r = i % 2 ? R * 0.382 : R;
    pts.push(`${(cx + r * Math.cos(a)).toFixed(1)},${(cy + r * Math.sin(a)).toFixed(1)}`);
  }
  return pts.join(' ');
}
function FlagArt() {
  const bw = 220 / 3;
  return (
    <G>
      <Line x1={56} y1={12} x2={56} y2={236} stroke="#7a5233" strokeWidth={4} />
      <Rect x={60} y={16} width={bw} height={147} fill="#007a5e" />
      <Rect x={60 + bw} y={16} width={bw} height={147} fill="#ce1126" />
      <Rect x={60 + 2 * bw} y={16} width={bw} height={147} fill="#fcd116" />
      <Polygon points={starPoints(170, 89.5, 24)} fill="#fcd116" />
      <Rect x={60} y={16} width={220} height={147} fill="none" stroke={O} strokeWidth={1} />
      {['vert', 'rouge', 'jaune'].map((t, i) => (
        <Txt key={t} x={60 + bw * i + bw / 2} y={180} size={10} weight="700">
          {t}
        </Txt>
      ))}
      <Txt x={170} y={202} size={9.5}>
        une étoile jaune à cinq branches
      </Txt>
      <Txt x={170} y={226} size={10} weight="700" italic>
        Paix, Travail, Patrie
      </Txt>
    </G>
  );
}

// ---------- an SMS invitation ----------
const SMS_IN = ['Salut Bih !', 'Je t’invite à mon', 'anniversaire samedi', '13 juin à 15 h, chez', 'moi à Bonabéri.', 'Tu viens ? Mbong'];
const SMS_OUT = ['Oui, avec plaisir !', 'Merci. À samedi !', 'Bih'];
function SmsArt() {
  return (
    <G>
      <Rect x={96} y={8} width={148} height={244} rx={18} fill="#2f3a44" />
      <Rect x={104} y={30} width={132} height={200} rx={4} fill="#ffffff" />
      <Rect x={150} y={16} width={40} height={5} rx={2.5} fill="#55626e" />
      <Path d="M110 40 L222 40 L222 132 L120 132 L110 140 Z" fill="#e6e9ec" stroke={O} strokeWidth={0.6} />
      {SMS_IN.map((t, i) => (
        <Txt key={t} x={116} y={55 + i * 14} size={8.5} anchor="start" weight={i === 0 ? '700' : '500'}>
          {t}
        </Txt>
      ))}
      <Path d="M126 150 L230 150 L230 206 L222 214 L222 198 L126 198 Z" fill="#d6efd2" stroke={O} strokeWidth={0.6} />
      {SMS_OUT.map((t, i) => (
        <Txt key={t} x={132} y={165 + i * 13} size={8.5} anchor="start" weight={i === 0 ? '700' : '500'}>
          {t}
        </Txt>
      ))}
      <Line x1={88} y1={52} x2={112} y2={52} stroke={MUTED} strokeWidth={0.8} />
      <Txt x={86} y={55} size={9} anchor="end" weight="700">
        la salutation
      </Txt>
      <Line x1={88} y1={88} x2={112} y2={88} stroke={MUTED} strokeWidth={0.8} />
      <Txt x={86} y={86} size={9} anchor="end" weight="700">
        quoi, quand,
      </Txt>
      <Txt x={86} y={98} size={9} anchor="end" weight="700">
        où ?
      </Txt>
      <Line x1={226} y1={124} x2={252} y2={124} stroke={MUTED} strokeWidth={0.8} />
      <Txt x={254} y={127} size={9} anchor="start" weight="700">
        la question
      </Txt>
      <Line x1={232} y1={168} x2={252} y2={168} stroke={MUTED} strokeWidth={0.8} />
      <Txt x={254} y={166} size={9} anchor="start" weight="700">
        la réponse :
      </Txt>
      <Txt x={254} y={179} size={9} anchor="start">
        accepter
      </Txt>
    </G>
  );
}

// ---------- an information sheet ----------
const FICHE = [
  ['NOM', 'EWANE'],
  ['Prénoms', 'Brice Junior'],
  ['Date de naissance', '12/09/2014'],
  ['Lieu de naissance', 'Nkongsamba'],
  ['Sexe', 'M'],
  ['Nationalité', 'camerounaise'],
  ['Classe', 'Form 1 B'],
  ['Signature', 'B. Ewane'],
];
const ficheY = (i) => 58 + i * 25;
function FicheArt() {
  return (
    <G>
      <Rect x={10} y={8} width={320} height={244} rx={6} fill={PAPER} stroke={O} strokeWidth={1.2} />
      <Txt x={170} y={32} size={11} weight="700">
        FICHE DE RENSEIGNEMENTS
      </Txt>
      {FICHE.map(([k, v], i) => (
        <G key={k}>
          <Txt x={22} y={ficheY(i)} size={9.5} anchor="start" weight="700">
            {k} :
          </Txt>
          <Line x1={130} y1={ficheY(i) + 3} x2={314} y2={ficheY(i) + 3} stroke={MUTED} strokeWidth={0.8} />
          <Txt x={136} y={ficheY(i)} size={10} anchor="start" fill={BLUE} italic={i === 7}>
            {v}
          </Txt>
        </G>
      ))}
    </G>
  );
}

export const FRENCH_F1 = {
  // ---------- term 1 ----------
  'fr1-salutations': columnsSpec('Saluer et prendre congé', [
    { head: 'Saluer\n(on arrive)', items: ['Bonjour (le jour)', 'Bonsoir (le soir)', 'Salut ! (les amis)'] },
    { head: 'Demander\ndes nouvelles', items: ['Comment allez-vous ?', 'Ça va ?', 'Je vais bien, merci.'] },
    { head: 'Prendre congé\n(on part)', items: ['Au revoir.', 'À demain !', 'Bonne nuit (au lit)'] },
  ], { colW: 118 }),
  'fr1-politesse': columnsSpec('Tu ou vous ?', [
    { head: 'tu', items: ['un ami, une amie', 'un frère, une sœur', 'un enfant', 's’il te plaît', 'excuse-moi'] },
    { head: 'vous', items: ['un adulte que l’on respecte', 'une personne inconnue', 'plusieurs personnes', 's’il vous plaît', 'excusez-moi'] },
  ], { colW: 150 }),
  'fr1-alphabet': drawn('L’alphabet français : 26 lettres', 348, 188, AlphabetArt, [
    'The French alphabet has the same 26 letters as English, with different names.',
    'G is said « gé » and j is said « ji ».',
    'H is called « ache » and is never pronounced.',
    'W is « double vé » and y is « i grec ».',
  ], [[174, 94], [cellAt(6).x + 24, cellAt(6).y + 40], [cellAt(7).x + 24, cellAt(7).y + 40], [cellAt(22).x + 24, cellAt(22).y + 40]]),
  'fr1-accents': columnsSpec('Les accents et la cédille', [
    { head: 'aigu', items: ['é : /e/', 'été', 'école'] },
    { head: 'grave', items: ['è : /ɛ/, mère', 'à (to, at)', 'où (where)'] },
    { head: 'circonflexe', items: ['â ê î ô û', 'forêt', 'hôpital'] },
    { head: 'cédille', items: ['ç : /s/', 'garçon', 'français'] },
  ], { colW: 84 }),
  'fr1-pronoms': columnsSpec('Les pronoms sujets', [
    { head: 'Singulier', items: ['je (j’) : I', 'tu : you (a friend)', 'il : he, it', 'elle : she, it', 'on : we, people'] },
    { head: 'Pluriel', items: ['nous : we', 'vous : you (polite, plural)', 'ils : they (m. or mixed)', 'elles : they (all f.)'] },
  ], { colW: 160 }),
  'fr1-etre': columnsSpec('Le verbe être au présent', [
    { head: 'Singulier', items: ['je suis', 'tu es', 'il, elle, on est'] },
    { head: 'Pluriel', items: ['nous sommes', 'vous êtes', 'ils, elles sont'] },
    { head: 'Présentatifs', items: ['C’est mon ami.', 'Ce sont mes sœurs.', 'Voici Madame Nkeng.'] },
  ], { colW: 116 }),
  'fr1-nombres': columnsSpec('Les nombres de 1 à 50', [
    { head: '1 à 10', items: ['1 un, 2 deux', '3 trois, 4 quatre', '5 cinq, 6 six', '7 sept, 8 huit', '9 neuf, 10 dix'] },
    { head: '11 à 20', items: ['11 onze, 12 douze', '13 treize', '14 quatorze', '15 quinze, 16 seize', '17 dix-sept … 20 vingt'] },
    { head: 'Les dizaines', items: ['30 trente', '40 quarante', '50 cinquante', '21 vingt et un', '22 vingt-deux'] },
  ], { colW: 116 }),
  'fr1-calendrier': columnsSpec('Les jours et les mois (sans majuscule)', [
    { head: 'Les jours', items: ['lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi', 'dimanche'] },
    { head: 'Les mois 1 à 6', items: ['janvier', 'février', 'mars', 'avril', 'mai', 'juin'] },
    { head: 'Les mois 7 à 12', items: ['juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre'] },
  ], { colW: 104 }),
  'fr1-famille': drawn('Un arbre généalogique', 372, 236, FamilyArt, [
    'Le grand-père et la grand-mère sont les parents de mon père et de ma tante.',
    'Mon père et ma mère sont mari et femme ; leurs enfants sont moi, ma sœur et mon frère.',
    'Le mari de ma tante est mon oncle.',
    'La fille de ma tante et de mon oncle est ma cousine.',
  ], [[184, 40], [90, 150], [330, 120], [280, 200]]),
  'fr1-avoir': columnsSpec('Le verbe avoir et il y a', [
    { head: 'avoir au présent', items: ['j’ai', 'tu as', 'il, elle, on a', 'nous avons', 'vous avez', 'ils, elles ont'] },
    { head: 'avoir = to be', items: ['avoir douze ans', 'avoir faim, soif', 'avoir chaud, froid', 'avoir peur', 'avoir mal à'] },
    { head: 'il y a', items: ['there is, there are', 'Il y a six élèves.', 'Qu’est-ce qu’il y a ?'] },
  ], { colW: 118 }),
  'fr1-articles': columnsSpec('Les articles', [
    { head: 'Indéfinis\n(a, an, some)', items: ['un cahier (m.)', 'une trousse (f.)', 'des livres (pl.)'] },
    { head: 'Définis\n(the)', items: ['le stylo (m.)', 'la porte (f.)', 'l’école (voyelle)', 'les élèves (pl.)'] },
  ], { colW: 150 }),
  'fr1-emploi': drawn('Un emploi du temps', 340, 168, TimetableArt, [
    'Les heures sont dans la première colonne.',
    'Le lundi, à 7 h 30, nous avons mathématiques.',
    'À 10 h, c’est la récréation pour toute l’école.',
    'Le mercredi, à 7 h 30, nous avons français.',
  ], [[38, 98], [114, 45], [202, 97], [290, 45]]),
  'fr1-gouts': flowSpec('Exprimer ses goûts, du plus fort au plus faible', ['j’adore', 'j’aime\nbeaucoup', 'j’aime', 'je n’aime pas\nbeaucoup', 'je n’aime pas', 'je déteste'], { perRow: 3, boxW: 104, note: 'Je préfère : on choisit entre deux choses.' }),
  'fr1-questions': columnsSpec('Poser une question', [
    { head: 'Oui ou non ?', items: ['Tu aimes le riz ?', 'Est-ce que tu aimes le riz ?', 'Aimes-tu le riz ?'] },
    { head: 'Les mots interrogatifs', items: ['qui ? (who)', 'où ? (where)', 'quand ? (when)', 'comment ? (how)', 'combien ? (how many)', 'pourquoi ? (why)'] },
  ], { colW: 160 }),

  // ---------- term 2 ----------
  'fr1-corps': drawn('Les parties du corps', 340, 262, BodyArt, [
    'La tête : les cheveux, les yeux, le nez, la bouche et les oreilles.',
    'Le cou relie la tête au corps.',
    'Les bras vont des épaules aux mains.',
    'La poitrine et le ventre sont devant ; le dos est derrière.',
    'On marche avec les jambes et les pieds ; le genou est au milieu de la jambe.',
  ], [[170, 40], [176, 67], [130, 112], [183, 115], [186, 218]]),
  'fr1-sante': columnsSpec('Avoir mal à…', [
    { head: 'à la + f.', items: ['à la tête', 'à la gorge', 'à la jambe'] },
    { head: 'au + m.', items: ['au ventre', 'au dos', 'au pied'] },
    { head: 'à l’ + voyelle', items: ['à l’oreille', 'à l’œil', 'à l’épaule'] },
    { head: 'aux + pluriel', items: ['aux dents', 'aux yeux', 'aux genoux'] },
  ], { colW: 84 }),
  'fr1-verbes-er': columnsSpec('Parler au présent (premier groupe)', [
    { head: 'Singulier', items: ['je parle', 'tu parles', 'il, elle, on parle'] },
    { head: 'Pluriel', items: ['nous parlons', 'vous parlez', 'ils, elles parlent'] },
    { head: 'Attention !', items: ['nous mangeons', 'nous commençons', 'j’aime, j’habite'] },
  ], { colW: 112 }),
  'fr1-journee': drawn('Quelle heure est-il ?', 340, 136, ClocksArt, [
    'Il est sept heures.',
    'Il est sept heures et quart.',
    'Il est sept heures et demie.',
    'Il est huit heures moins le quart.',
  ], CLOCKS.map((_, i) => [clockX(i), 84])),
  'fr1-vetements': columnsSpec('Les vêtements', [
    { head: 'Le haut', items: ['la chemise', 'le tee-shirt', 'le pull', 'la veste'] },
    { head: 'Le bas', items: ['le pantalon', 'le short', 'la jupe', 'le pagne'] },
    { head: 'Tout le corps', items: ['la robe', 'le kaba', 'l’uniforme'] },
    { head: 'Pieds et tête', items: ['les chaussures', 'les sandales', 'les chaussettes', 'la casquette'] },
  ], { colW: 84 }),
  'fr1-couleurs': drawn('Les couleurs : masculin et féminin', 340, 236, ColoursArt, [
    'Au féminin, on ajoute -e : vert, verte ; bleu, bleue.',
    'Blanc devient blanche ; violet devient violette.',
    'Rouge, jaune, rose et beige finissent déjà par -e.',
    'Marron et orange ne changent jamais.',
  ], [[swatchAt(2).x + 16, swatchAt(2).y + 20], [swatchAt(5).x + 16, swatchAt(5).y + 20], [swatchAt(0).x + 16, swatchAt(0).y + 20], [swatchAt(9).x + 16, swatchAt(9).y + 20]]),
  'fr1-adjectifs': columnsSpec('Le féminin des adjectifs', [
    { head: '+ e', items: ['grand → grande', 'petit → petite', 'noir → noire', 'mince → mince'] },
    { head: 'La fin change', items: ['sportif → sportive', 'joyeux → joyeuse', 'rêveur → rêveuse', 'bon → bonne'] },
    { head: 'Irréguliers', items: ['beau → belle', 'vieux → vieille', 'gentil → gentille', 'blanc → blanche'] },
  ], { colW: 118 }),
  'fr1-portrait': flowSpec('Le plan d’un portrait', ['Qui ?\nnom et âge', 'Le physique\ngrand, mince…', 'Le caractère\ngentil, bavard…', 'Les goûts\nIl aime…'], { perRow: 2, boxW: 140, note: 'Il a les cheveux courts et les yeux noirs.' }),
  'fr1-maison': drawn('Le plan d’une maison', 340, 250, HouseArt, [
    'Il y a trois chambres, un salon, une cuisine et une douche.',
    'On dort dans la chambre et on fait la cuisine dans la cuisine.',
    'La véranda est devant la maison.',
    'Dans la cour, il y a un manguier.',
  ], [[170, 56], [210, 140], [170, 182], [271, 214]]),
  'fr1-possessifs': columnsSpec('Les adjectifs possessifs', [
    { head: 'masculin', items: ['mon', 'ton', 'son', 'notre', 'votre', 'leur'] },
    { head: 'féminin', items: ['ma (mon + voyelle)', 'ta (ton + voyelle)', 'sa (son + voyelle)', 'notre', 'votre', 'leur'] },
    { head: 'pluriel', items: ['mes', 'tes', 'ses', 'nos', 'vos', 'leurs'] },
    { head: 'en anglais', items: ['my', 'your (tu)', 'his, her', 'our', 'your (vous)', 'their'] },
  ], { colW: 100 }),
  'fr1-negation': flowSpec('Mettre une phrase à la forme négative', ['La phrase\nJ’ai un frère.', 'ne (n’)\navant le verbe', 'pas\naprès le verbe', 'un, une, des\ndeviennent de'], { perRow: 2, boxW: 140, note: 'Je n’ai pas de frère.' }),
  'fr1-objet': treeSpec('Décrire un objet', 'Un objet', [
    { name: 'La forme', items: ['rond', 'carré', 'rectangulaire', 'pointu'] },
    { name: 'La taille', items: ['grand, petit', 'long, court', 'lourd, léger'] },
    { name: 'La matière', items: ['en bois', 'en plastique', 'en métal', 'en verre'] },
    { name: 'L’usage', items: ['Il sert à…', 'porter', 'écrire'] },
  ], { colW: 86 }),

  // ---------- term 3 ----------
  'fr1-metiers': columnsSpec('Les métiers et les lieux de travail', [
    { head: 'Le métier', items: ['l’enseignant, l’enseignante', 'l’infirmier, l’infirmière', 'le cultivateur, la cultivatrice', 'le commerçant, la commerçante', 'le mécanicien', 'la couturière'] },
    { head: 'Le lieu', items: ['à l’école', 'à l’hôpital', 'au champ', 'au marché', 'au garage', 'dans un atelier'] },
  ], { colW: 170, arrow: true }),
  'fr1-faire': columnsSpec('Le verbe faire', [
    { head: 'Au présent', items: ['je fais', 'tu fais', 'il, elle, on fait', 'nous faisons', 'vous faites', 'ils, elles font'] },
    { head: 'Expressions', items: ['faire ses devoirs', 'faire la cuisine', 'faire le ménage', 'faire la vaisselle', 'faire les courses', 'faire du sport'] },
  ], { colW: 150 }),
  'fr1-aller': columnsSpec('Aller à… et chez…', [
    { head: 'aller', items: ['je vais', 'tu vas', 'il, elle va', 'nous allons', 'vous allez', 'ils, elles vont'] },
    { head: 'à + le lieu', items: ['à la maison', 'au marché', 'à l’école', 'aux champs', 'à Douala'] },
    { head: 'chez + personne', items: ['chez moi', 'chez ma tante', 'chez le médecin'] },
  ], { colW: 112 }),
  'fr1-futur-proche': flowSpec('Le futur proche', ['aller au présent\nje vais', '+ l’infinitif\nmanger', 'Je vais manger.\n(bientôt, un projet)'], { boxW: 112, note: 'Négatif : Je ne vais pas manger.' }),
  'fr1-marche': columnsSpec('Au marché', [
    { head: 'Quantité + de', items: ['un kilo de riz', 'un litre d’huile', 'un tas de tomates', 'un régime de plantains', 'un sac de maïs', 'un paquet de sucre'] },
    { head: 'Fruits et légumes', items: ['la banane, le plantain', 'la mangue, l’ananas', 'la papaye, le safou', 'la tomate, l’oignon', 'le piment, le gombo'] },
  ], { colW: 150 }),
  'fr1-prix': columnsSpec('Les prix en francs CFA', [
    { head: 'Les nombres', items: ['70 soixante-dix', '80 quatre-vingts', '90 quatre-vingt-dix', '100 cent', '200 deux cents', '1 000 mille'] },
    { head: 'Demander le prix', items: ['C’est combien ?', 'Ça coûte combien ?', 'Combien coûte le riz ?', 'C’est trop cher !', 'Vous pouvez diminuer ?'] },
  ], { colW: 150 }),
  'fr1-meteo': drawn('Quel temps fait-il ?', 340, 204, WeatherArt, WEATHER.map(([, l1, l2]) => `${l1}${l2 ? ` ${l2}` : ''}`), WEATHER.map((_, i) => [wx(i), wy(i) + 26])),
  'fr1-proprete': columnsSpec('Un environnement propre', [
    { head: 'Les bonnes habitudes', items: ['Nous balayons la cour.', 'Nous jetons les ordures', 'dans la poubelle.', 'Nous lavons les mains.', 'Nous buvons de l’eau potable.'] },
    { head: 'À éviter', items: ['jeter les ordures', 'dans le caniveau', 'l’eau sale près de la maison', '(elle attire les moustiques)'] },
  ], { colW: 160 }),
  'fr1-quartier': treeSpec('Les lieux du quartier', 'Le quartier', [
    { name: 'Se soigner', items: ['l’hôpital', 'le centre de santé', 'la pharmacie'] },
    { name: 'Acheter', items: ['le marché', 'la boutique', 'la boulangerie'] },
    { name: 'Prier', items: ['l’église', 'la mosquée'] },
    { name: 'Les services', items: ['la mairie', 'la poste', 'la banque', 'le commissariat'] },
  ], { colW: 100 }),
  'fr1-prepositions': drawn('Les prépositions de lieu : où est la balle ?', 340, 198, PrepositionsArt, [
    'Sur : la balle est sur la table.',
    'Sous : la balle est sous la table.',
    'Dans : la balle est dans le panier.',
    'Devant : la balle est devant la boîte.',
    'Derrière : la balle est derrière la boîte.',
    'Entre : la balle est entre les deux boîtes.',
    'À côté de : la balle est à côté de la boîte.',
    'En face de : la maison rouge est en face de la maison bleue.',
  ], PREPS.map((_, i) => [px0(i) + 41, py0(i) + 76])),
  'fr1-chemin': drawn('Le chemin de l’école à la pharmacie', 340, 250, StreetMapArt, [
    'Vous êtes ici, devant l’école.',
    'Allez tout droit : vous passez la première rue.',
    'Prenez la deuxième rue à droite.',
    'La pharmacie est à gauche, en face de la boulangerie.',
  ], [[165, 226], [165, 160], [206, 81], [254, 42]]),
  'fr1-transports': columnsSpec('En ou à ?', [
    { head: 'en (on est dedans)', items: ['en taxi', 'en bus', 'en car', 'en voiture', 'en train', 'en avion', 'en bateau'] },
    { head: 'à (on est dessus)', items: ['à moto', 'à vélo', 'à cheval', 'à pied'] },
  ], { colW: 150 }),
  'fr1-drapeau': drawn('Le drapeau du Cameroun', 340, 240, FlagArt, [
    'Le drapeau a trois bandes verticales : vert, rouge et jaune.',
    'Au centre de la bande rouge, il y a une étoile jaune à cinq branches.',
    'La devise du Cameroun est « Paix, Travail, Patrie ».',
  ], [[170, 176], [170, 112], [170, 222]]),
  'fr1-fetes': columnsSpec('Les fêtes au Cameroun', [
    { head: 'La date', items: ['le 1er janvier', 'le 11 février', 'le 8 mars', 'le 1er mai', 'le 20 mai', 'le 25 décembre'] },
    { head: 'La fête', items: ['le jour de l’An', 'la fête de la Jeunesse', 'la Journée de la femme', 'la fête du Travail', 'la fête nationale', 'Noël'] },
  ], { colW: 150, arrow: true }),
  'fr1-message': drawn('Une invitation par SMS', 340, 262, SmsArt, [
    'Le message commence par une salutation : Salut Bih !',
    'Il dit quoi, quand et où : un anniversaire, samedi 13 juin à 15 h, chez Mbong à Bonabéri.',
    'Il finit par une question : Tu viens ?',
    'La réponse accepte : Oui, avec plaisir !',
  ], [[116, 52], [116, 88], [200, 124], [180, 168]]),
  'fr1-fiche': drawn('Une fiche de renseignements', 340, 262, FicheArt, [
    'Le nom de famille s’écrit en majuscules : EWANE.',
    'La date de naissance s’écrit jour, mois, année : 12/09/2014.',
    'Sexe : M pour masculin, F pour féminin.',
    'La fiche finit par la signature.',
  ], [[170, ficheY(0) + 3], [170, ficheY(2) + 3], [170, ficheY(4) + 3], [170, ficheY(7) + 3]]),
};
