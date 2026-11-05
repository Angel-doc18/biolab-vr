// History figures for Form 1: why we study history, a BC and AD timeline,
// sources, early man, the Neolithic and Neolithic sites in Cameroon, the Nile
// and Egypt (periods, the pharaoh, society, gods, mummification, writing,
// achievements, decline), Kush and Axum, Greece, Rome, Judaism and
// Christianity, China, the zones of early Cameroon, the forest peoples, the
// Bantu migration, Carthage and Hanno, the trans-Saharan and coastal trades,
// Traditional African Religion, Islam and revision charts.
import { Circle, G, Line, Path, Polygon, Rect } from 'react-native-svg';
import { Txt } from './Diagram';
import { columnsSpec, flowSpec, treeSpec } from './charts';
import { Outline, TOWNS, Town, px, py } from './geography4';

const O = '#33414d';
const MUTED = '#6b7a88';
const BLUE = '#3f6fb5';
const RED = '#c8463d';
const FOREST = '#5f9e5a';
const SAND = '#ead9a8';

// ---------- a BC and AD timeline ----------
function TimelineArt() {
  const X = (year) => 20 + ((year + 3200) * 300) / 5300;
  const marks = [
    [-3100, '3100 BC', 'Egypt united', -1],
    [-753, '753 BC', 'Rome founded', 1],
    [1, 'AD 1', 'no year 0', -1],
    [622, 'AD 622', 'the Hijra', 1],
    [1472, 'AD 1472', 'Portuguese', -1],
    [2026, 'AD 2026', 'today', 1],
  ];
  const y = 78;
  return (
    <G>
      <Line x1={14} y1={y} x2={326} y2={y} stroke={O} strokeWidth={2} />
      <Polygon points={`326,${y} 318,${y - 5} 318,${y + 5}`} fill={O} />
      {marks.map(([yr, d, e, side]) => (
        <G key={d}>
          <Line x1={X(yr)} y1={y - 6} x2={X(yr)} y2={y + 6} stroke={yr === 1 ? RED : O} strokeWidth={2} />
          <Txt x={X(yr)} y={side < 0 ? y - 26 : y + 22} size={8.5} weight="700" fill={yr === 1 ? RED : O}>
            {d}
          </Txt>
          <Txt x={X(yr)} y={side < 0 ? y - 14 : y + 34} size={8}>
            {e}
          </Txt>
        </G>
      ))}
      <Txt x={100} y={136} size={8.5} fill={BLUE} weight="700">
        BC: counted backwards
      </Txt>
      <Txt x={262} y={136} size={8.5} fill={BLUE} weight="700">
        AD: counted forwards
      </Txt>
    </G>
  );
}

// ---------- the Nile valley ----------
function NileArt() {
  const river = 'M178 236 C170 210 186 190 176 166 C168 144 184 124 176 100 C172 86 174 74 172 64';
  return (
    <G>
      <Rect x={10} y={10} width={320} height={30} fill="#bcd7ef" />
      <Txt x={170} y={29} size={9} weight="700">
        Mediterranean Sea
      </Txt>
      <Rect x={10} y={40} width={320} height={210} fill={SAND} />
      <Polygon points="172,64 140,42 204,42" fill="#9cc58f" stroke={O} strokeWidth={0.8} />
      <Path d="M172 64 L148 42 M172 64 L172 42 M172 64 L196 42" stroke={BLUE} strokeWidth={1.4} fill="none" />
      <Path d={river} stroke="#9cc58f" strokeWidth={14} fill="none" />
      <Path d={river} stroke={BLUE} strokeWidth={3} fill="none" />
      <Rect x={262} y={110} width={30} height={140} fill="#bcd7ef" />
      <Txt x={277} y={180} size={8} weight="700">
        Red
      </Txt>
      <Txt x={277} y={192} size={8} weight="700">
        Sea
      </Txt>
      <Txt x={214} y={56} size={8.5} anchor="start" weight="700">
        Delta: Lower Egypt
      </Txt>
      <Circle cx={170} cy={74} r={3} fill={O} />
      <Txt x={162} y={77} size={8} anchor="end">
        Memphis, Giza
      </Txt>
      <Circle cx={183} cy={130} r={3} fill={O} />
      <Txt x={191} y={133} size={8} anchor="start">
        Thebes (Karnak)
      </Txt>
      <Txt x={120} y={150} size={8.5} anchor="end" weight="700">
        Upper Egypt
      </Txt>
      <Line x1={166} y1={170} x2={190} y2={170} stroke={RED} strokeWidth={2} />
      <Txt x={196} y={173} size={8} anchor="start" fill={RED}>
        First Cataract
      </Txt>
      <Txt x={120} y={212} size={8.5} anchor="end" weight="700">
        Kush (Nubia)
      </Txt>
      <Circle cx={177} cy={226} r={3} fill={O} />
      <Txt x={185} y={229} size={8} anchor="start">
        Meroe
      </Txt>
      <Txt x={60} y={100} size={8} fill={MUTED} italic>
        Western Desert
      </Txt>
      <Txt x={232} y={98} size={8} fill={MUTED} italic>
        Eastern Desert
      </Txt>
      <Txt x={150} y={245} size={8} fill={MUTED} anchor="end">
        The Nile flows north
      </Txt>
      <Polygon points="176,96 171,106 181,106" fill={O} />
    </G>
  );
}

// ---------- Egyptian society as a step pyramid ----------
function EgyptPyramidArt() {
  const bands = ['Pharaoh', 'Nobles and priests', 'Scribes', 'Soldiers, craftsmen, traders', 'Peasants', 'Slaves'];
  const fills = ['#f1d38a', '#ecd9a8', '#e3e6c4', '#d9e8d2', '#d4e3ef', '#e6dcef'];
  return (
    <G>
      {bands.map((b, i) => {
        const w = 90 + i * 44;
        return (
          <G key={b}>
            <Rect x={170 - w / 2} y={14 + i * 32} width={w} height={30} fill={fills[i]} stroke={O} strokeWidth={1} />
            <Txt x={170} y={33 + i * 32} size={9} weight={i === 0 ? '700' : '500'}>
              {b}
            </Txt>
          </G>
        );
      })}
      <Txt x={36} y={30} size={8} anchor="start" fill={MUTED}>
        Fewer people,
      </Txt>
      <Txt x={36} y={41} size={8} anchor="start" fill={MUTED}>
        more power
      </Txt>
      <Txt x={304} y={190} size={8} anchor="end" fill={MUTED}>
        Most people
      </Txt>
    </G>
  );
}

// ---------- Neolithic sites in Cameroon ----------
function CmrSitesArt() {
  const site = (lon, lat) => <Circle cx={px(lon)} cy={py(lat)} r={4.5} fill={RED} stroke="#ffffff" strokeWidth={1} />;
  const mc = [px(9.17), py(4.2)];
  return (
    <G>
      <Outline />
      <Polygon points={`${mc[0]},${mc[1] - 7} ${mc[0] - 6},${mc[1] + 4} ${mc[0] + 6},${mc[1] + 4}`} fill="#8d6e4a" />
      {site(10.08, 5.92)}
      {site(11.5, 3.83)}
      <Line x1={px(10.08) + 5} y1={py(5.92)} x2={226} y2={190} stroke={MUTED} strokeWidth={0.8} />
      <Txt x={230} y={188} size={8.5} anchor="start" weight="700">
        Shum Laka
      </Txt>
      <Txt x={230} y={199} size={8} anchor="start">
        rock shelter, near Bamenda
      </Txt>
      <Line x1={px(11.5) + 5} y1={py(3.83)} x2={226} y2={236} stroke={MUTED} strokeWidth={0.8} />
      <Txt x={230} y={234} size={8.5} anchor="start" weight="700">
        Obobogo
      </Txt>
      <Txt x={230} y={245} size={8} anchor="start">
        pottery, near Yaoundé
      </Txt>
      <Path d={`M${mc[0] + 2} ${mc[1] + 5} L70 308 L226 308`} stroke={MUTED} strokeWidth={0.8} fill="none" />
      <Txt x={230} y={306} size={8.5} anchor="start" weight="700">
        Mount Cameroon
      </Txt>
      <Txt x={230} y={317} size={8} anchor="start">
        active volcano
      </Txt>
      <Town name="Garoua" at={TOWNS.Garoua} dx={6} />
      <Txt x={px(14.6)} y={py(13.3) + 2} size={7.5} anchor="start" fill={BLUE}>
        Lake Chad
      </Txt>
    </G>
  );
}

// ---------- the ecological zones of Cameroon ----------
const ZONES = [
  ['Sahel (Lake Chad plain)', '#efe2b2', [[14.5, 11.8, 16]]],
  ['Northern savanna', '#e3d08e', [[13.6, 9.4, 22]]],
  ['Adamawa plateau', '#d6b77c', [[13.2, 7.1, 26]]],
  ['Western highlands', '#c79b62', [[10.3, 5.9, 20]]],
  ['Equatorial forest', FOREST, [[12.0, 3.2, 40], [14.3, 3.7, 28]]],
  ['Coast and mangroves', '#6fa6a0', [[9.0, 4.0, 9], [8.75, 4.6, 7]]],
];

function CmrZonesArt() {
  return (
    <G>
      <Outline fill="#f6f1e4" />
      {ZONES.map(([name, c, areas]) => (
        <G key={name}>
          {areas.map(([lon, lat, r]) => (
            <Circle key={`${lon}${lat}`} cx={px(lon)} cy={py(lat)} r={r} fill={c} opacity={0.8} />
          ))}
        </G>
      ))}
      <Town name="Douala" at={TOWNS.Douala} dx={5} dy={10} />
      <Town name="Yaoundé" at={TOWNS.Yaoundé} />
      <Town name="Garoua" at={TOWNS.Garoua} dx={6} />
      <Town name="Maroua" at={TOWNS.Maroua} dx={6} />
      {ZONES.map(([name, c], i) => (
        <G key={`k${name}`}>
          <Rect x={224} y={92 + i * 24} width={11} height={11} fill={c} stroke={O} strokeWidth={0.6} />
          <Txt x={240} y={101 + i * 24} size={8} anchor="start">
            {name}
          </Txt>
        </G>
      ))}
    </G>
  );
}

// ---------- where the forest peoples live ----------
function ForestPeoplesArt() {
  const group = (lon, lat) => <Circle cx={px(lon)} cy={py(lat)} r={5} fill={RED} stroke="#ffffff" strokeWidth={1} />;
  return (
    <G>
      <Outline fill="#f6f1e4" />
      <Circle cx={px(12.0)} cy={py(3.2)} r={40} fill={FOREST} opacity={0.55} />
      <Circle cx={px(14.3)} cy={py(3.7)} r={28} fill={FOREST} opacity={0.55} />
      {group(14.7, 3.3)}
      {group(10.7, 3.2)}
      {group(11.45, 5.75)}
      <Txt x={px(14.7)} y={py(3.3) + 16} size={8.5} weight="700">
        Baka
      </Txt>
      <Txt x={px(10.7) + 8} y={py(3.2) + 3} size={8.5} anchor="start" weight="700">
        Bakola-Bagyeli
      </Txt>
      <Txt x={px(11.45) + 8} y={py(5.75) + 3} size={8.5} anchor="start" weight="700">
        Bedzan
      </Txt>
      <Town name="Kribi" at={TOWNS.Kribi} dx={-5} dy={-4} anchor="end" />
      <Town name="Yaoundé" at={TOWNS.Yaoundé} dx={6} dy={4} />
      <Town name="Bertoua" at={TOWNS.Bertoua} dx={6} />
      <Rect x={224} y={226} width={11} height={11} fill={FOREST} opacity={0.55} />
      <Txt x={240} y={235} size={8} anchor="start">
        equatorial forest
      </Txt>
      <Circle cx={229.5} cy={256} r={5} fill={RED} />
      <Txt x={240} y={259} size={8} anchor="start">
        forest peoples
      </Txt>
    </G>
  );
}

const drawn = (title, w, h, art, facts, points) => ({ title, w, h, art, labels: [], facts, ...(points ? { points } : {}) });

export const HISTORY_F1 = {
  'hist1-why-history': treeSpec('Why we study history', 'History', [
    { name: 'Identity', items: ['who we are', 'where we', 'come from'] },
    { name: 'The present', items: ['why things', 'are as they are'] },
    { name: 'Lessons', items: ['from successes', 'and mistakes'] },
    { name: 'Respect', items: ['for other', 'peoples'] },
  ], { colW: 96 }),
  'hist1-timeline': drawn('A timeline: BC and AD', 340, 150, TimelineArt, [
    'BC years are counted backwards towards AD 1.',
    'There is no year 0: 1 BC is followed by AD 1.',
    'Egypt was united in about 3100 BC.',
    'The Hijra of AD 622 is year 1 of the Islamic calendar.',
  ], [[100, 132], [201, 78], [26, 52], [236, 100]]),
  'hist1-sources': treeSpec('Sources of history', 'Evidence of the past', [
    { name: 'Written', items: ['inscriptions', 'papyrus, books', 'letters, archives'] },
    { name: 'Oral', items: ['tales, songs', 'genealogies', 'elders’ memories'] },
    { name: 'Material', items: ['tools, pots', 'bones, ruins', 'rock art'] },
    { name: 'Other', items: ['photos, films', 'languages'] },
  ], { colW: 96 }),
  'hist1-oral-check': columnsSpec('Oral tradition: strengths and limits', [
    { head: 'Strengths', items: ['history of peoples', 'without writing', 'names of chiefs', 'migrations, customs'] },
    { head: 'Limits', items: ['details may change', 'may praise one family', 'dates are vague'] },
    { head: 'So historians', items: ['cross-check with', 'archaeology,', 'written sources'] },
  ], { colW: 118 }),
  'hist1-early-man': flowSpec('Stages of human evolution', ['Australopithecus:\nwalked upright', 'Homo habilis:\nfirst stone tools', 'Homo erectus:\nfire, left Africa', 'Homo sapiens:\nmodern humans'], { boxW: 116, perRow: 2 }),
  'hist1-stone-tools': columnsSpec('Life in the Old Stone Age', [
    { head: 'Tools', items: ['pebble tools', 'hand axes', 'scrapers, blades'] },
    { head: 'Food', items: ['hunting', 'gathering', 'fishing'] },
    { head: 'Home', items: ['caves', 'rock shelters', 'huts of branches'] },
    { head: 'Fire', items: ['cooking', 'warmth, light', 'protection'] },
  ], { colW: 92 }),
  'hist1-neolithic': flowSpec('The Neolithic Revolution', ['Farming and\nherding begin', 'A food\nsurplus', 'Settled\nvillages', 'Crafts: pottery,\npolished tools', 'Leaders and\nfirst states'], { boxW: 108 }),
  'hist1-cmr-sites': drawn('Early sites in Cameroon', 340, 324, CmrSitesArt, [
    'Shum Laka is a rock shelter near Bamenda, in the Grassfields.',
    'Obobogo, near Yaoundé, has pottery and polished tools about 3 000 years old.',
    'Mount Cameroon is an active volcano near the coast.',
  ], [[56, 202], [93, 248], [33, 245]]),
  'hist1-nile': drawn('Egypt and the Nile', 340, 256, NileArt, [
    'The Nile flows north into the Mediterranean Sea.',
    'Lower Egypt is the delta, in the north.',
    'Upper Egypt is the narrow valley in the south.',
    'Kush, with its capital Meroe, lay beyond the First Cataract.',
  ], [[170, 26], [172, 52], [120, 146], [177, 226]]),
  'hist1-egypt-periods': columnsSpec('The great periods of ancient Egypt', [
    { head: 'Old Kingdom', items: ['about 2686 to', '2181 BC', 'the pyramids', 'capital Memphis'] },
    { head: 'Middle Kingdom', items: ['about 2055 to', '1650 BC', 'order restored', 'irrigation, trade'] },
    { head: 'New Kingdom', items: ['about 1550 to', '1070 BC', 'empire', 'capital Thebes'] },
  ], { colW: 116 }),
  'hist1-pharaoh-power': columnsSpec('The pharaoh’s power', [
    { head: 'Symbols', items: ['double crown', 'crook and flail', 'cobra, false beard'] },
    { head: 'Roles', items: ['god on earth', 'law and army', 'keeps Maat'] },
    { head: 'Helpers', items: ['the vizier', 'nomarchs', 'scribes, priests'] },
  ], { colW: 116 }),
  'hist1-egypt-pyramid': drawn('Egyptian society', 340, 210, EgyptPyramidArt, [
    'The pharaoh was at the top of Egyptian society.',
    'Nobles and priests came next, then the scribes.',
    'Soldiers, craftsmen and traders formed the middle.',
    'Peasants were the largest group; slaves were at the bottom.',
  ], [[170, 29], [170, 61], [170, 125], [170, 157]]),
  'hist1-egypt-gods': columnsSpec('Gods of ancient Egypt', [
    { head: 'God', items: ['Ra', 'Osiris', 'Isis', 'Horus', 'Anubis', 'Thoth'] },
    { head: 'Role', items: ['the sun, creator', 'the dead, afterlife', 'magic, mothers', 'protects the pharaoh', 'embalming', 'writing, wisdom'] },
  ], { colW: 140, arrow: true }),
  'hist1-mummy': flowSpec('Mummification (about 70 days)', ['Wash the\nbody', 'Remove the organs\n(canopic jars)', 'Dry with natron\n(about 40 days)', 'Oil and wrap\nin linen', 'Mask and\ncoffin', 'Burial with\ngoods'], { boxW: 112 }),
  'hist1-writing': columnsSpec('Writing in ancient Egypt', [
    { head: 'Scripts', items: ['hieroglyphics', '(sacred, on stone)', 'hieratic', '(daily records)'] },
    { head: 'Materials', items: ['papyrus sheets', 'reed pens', 'ink'] },
    { head: 'Deciphered', items: ['Rosetta Stone', '(found 1799)', 'Champollion, 1822'] },
  ], { colW: 116 }),
  'hist1-egypt-achievements': treeSpec('Achievements of ancient Egypt', 'Egypt’s legacy', [
    { name: 'Writing', items: ['hieroglyphics', 'papyrus'] },
    { name: 'Science', items: ['geometry', '365-day calendar'] },
    { name: 'Medicine', items: ['surgery', 'remedies'] },
    { name: 'Building', items: ['pyramids', 'temples, obelisks'] },
  ], { colW: 96 }),
  'hist1-egypt-decline': columnsSpec('Why ancient Egypt declined', [
    { head: 'Internal causes', items: ['weak rulers', 'succession disputes', 'powerful priests', 'costly monuments', 'low floods, famine'] },
    { head: 'External causes', items: ['Hyksos (1650 BC)', 'Assyrians (671 BC)', 'Persians (525 BC)', 'Alexander (332 BC)', 'Rome (30 BC)'] },
  ], { colW: 150 }),
  'hist1-invaders-timeline': flowSpec('Rulers of Egypt in its last millennium', ['Kushites:\n25th dynasty', 'Assyrians\n(671 BC)', 'Persians\n(525 BC)', 'Alexander\n(332 BC)', 'The Ptolemies\n(Greek)', 'Rome\n(30 BC)'], { boxW: 104 }),
  'hist1-iron-smelting': flowSpec('Traditional iron smelting', ['Break the\niron ore', 'Heat with charcoal\nin a clay furnace', 'Bellows blow\nair in', 'The iron forms\na bloom', 'The blacksmith\nhammers tools'], { boxW: 112 }),
  'hist1-kush-axum': columnsSpec('Kush and Axum compared', [
    { head: 'Kush (Nubia)', items: ['Upper Nile, Sudan', 'Kerma, Napata, Meroe', 'iron working', 'Kandake queens', 'ruled Egypt'] },
    { head: 'Axum', items: ['Ethiopian highlands', 'port of Adulis', 'coins, stelae', 'Ge’ez script', 'Christian under Ezana'] },
  ], { colW: 150 }),
  'hist1-polis': treeSpec('The Greek city-state', 'The polis', [
    { name: 'Acropolis', items: ['fortified hill', 'temples'] },
    { name: 'Agora', items: ['market', 'meetings'] },
    { name: 'Farmland', items: ['villages', 'around the city'] },
    { name: 'Government', items: ['king, few', 'or the people'] },
  ], { colW: 96 }),
  'hist1-athens-sparta': columnsSpec('Athens and Sparta', [
    { head: 'Athens', items: ['democracy', 'trade and navy', 'arts, philosophy', 'boys: reading,', 'music, sport'] },
    { head: 'Sparta', items: ['two kings, elders', 'army first', 'helots worked', 'boys: military', 'training from seven'] },
  ], { colW: 150 }),
  'hist1-athens-democracy': treeSpec('Athenian democracy (from about 508 BC)', 'Male citizens', [
    { name: 'Assembly', items: ['all citizens', 'vote on laws'] },
    { name: 'Council of 500', items: ['chosen by lot', 'prepares business'] },
    { name: 'Courts', items: ['juries', 'chosen by lot'] },
    { name: 'Generals', items: ['ten, elected'] },
  ], { colW: 100 }),
  'hist1-philosophers': flowSpec('Teachers and students', ['Socrates:\nasked questions', 'Plato:\nthe Academy', 'Aristotle:\nthe Lyceum', 'Alexander\nthe Great'], { boxW: 112, perRow: 2 }),
  'hist1-olympics': columnsSpec('The Olympic Games', [
    { head: 'Ancient', items: ['from 776 BC', 'at Olympia', 'for Zeus', 'olive crown'] },
    { head: 'Modern', items: ['from 1896', 'Athens first', 'every nation', 'medals'] },
  ], { colW: 150, arrow: true }),
  'hist1-greek-legacy': treeSpec('The Greek legacy', 'Ancient Greece', [
    { name: 'Mathematics', items: ['Pythagoras', 'Euclid', 'Archimedes'] },
    { name: 'Medicine', items: ['Hippocrates'] },
    { name: 'Letters', items: ['Homer', 'Herodotus'] },
    { name: 'Sport, art', items: ['Olympics', 'columns'] },
  ], { colW: 96 }),
  'hist1-roman-republic': treeSpec('The Roman Republic (from 509 BC)', 'Roman citizens', [
    { name: 'Two consuls', items: ['elected', 'each year'] },
    { name: 'Senate', items: ['advises,', 'controls money'] },
    { name: 'Assemblies', items: ['vote on', 'laws'] },
    { name: 'Tribunes', items: ['protect the', 'plebeians'] },
  ], { colW: 96 }),
  'hist1-rome-timeline': flowSpec('From kings to emperors', ['753 BC:\nRome founded', '509 BC:\nthe Republic', '146 BC:\nCarthage destroyed', '44 BC:\nCaesar killed', '27 BC:\nAugustus emperor'], { boxW: 108 }),
  'hist1-roman-classes': columnsSpec('Roman society', [
    { head: 'Top', items: ['senators', 'patricians', 'equestrians'] },
    { head: 'Middle', items: ['plebeians', 'freedmen'] },
    { head: 'Bottom', items: ['slaves', 'gladiators'] },
  ], { colW: 112 }),
  'hist1-roman-engineering': columnsSpec('What the Romans built and gave', [
    { head: 'Engineering', items: ['roads', 'aqueducts', 'bridges', 'concrete, arches'] },
    { head: 'Buildings', items: ['the Colosseum', 'the Pantheon', 'baths, circus'] },
    { head: 'Ideas', items: ['Roman law', 'Latin', 'the calendar'] },
  ], { colW: 116 }),
  'hist1-judaism': columnsSpec('Judaism', [
    { head: 'People', items: ['Abraham', 'Moses', 'David, Solomon'] },
    { head: 'Teachings', items: ['one God', 'Ten Commandments', 'the Messiah'] },
    { head: 'Places, books', items: ['Jerusalem', 'synagogue', 'the Torah'] },
  ], { colW: 116 }),
  'hist1-judeo-christian': flowSpec('The rise of Christianity', ['Jesus in Judea\n(about AD 30)', 'Apostles and\nPaul spread it', 'Persecution:\nNero, Diocletian', '313: Edict of\nMilan', '380: official\nreligion'], { boxW: 108 }),
  'hist1-rome-fall': treeSpec('Why the Western Roman Empire fell', 'Fall, AD 476', [
    { name: 'Political', items: ['civil wars', 'corruption'] },
    { name: 'Economic', items: ['taxes', 'inflation'] },
    { name: 'Military', items: ['too large', 'mercenaries'] },
    { name: 'Invasions', items: ['Visigoths 410', 'Vandals 455'] },
  ], { colW: 96 }),
  'hist1-rome-legacy': columnsSpec('Rome lives on', [
    { head: 'East', items: ['Byzantine Empire', 'Constantinople', 'until 1453'] },
    { head: 'Law, words', items: ['Roman law', 'Latin, French', 'Senate, republic'] },
    { head: 'Daily life', items: ['July, August', 'arches, domes', 'roads'] },
  ], { colW: 116 }),
  'hist1-china': flowSpec('The dynasties of ancient China', ['Shang:\noracle bones', 'Zhou:\nConfucius', 'Qin (221 BC):\nfirst emperor', 'Han:\nthe Silk Road'], { boxW: 112, perRow: 2 }),
  'hist1-china-inventions': columnsSpec('Inventions of ancient China', [
    { head: 'The Four Great', items: ['paper (AD 105)', 'printing', 'the compass', 'gunpowder'] },
    { head: 'Others', items: ['silk', 'porcelain', 'seismograph', 'wheelbarrow'] },
  ], { colW: 150 }),
  'hist1-cmr-zones': drawn('The ecological zones of Cameroon', 340, 324, CmrZonesArt, [
    'The equatorial forest covers the south and east.',
    'The western highlands are high grassy plateaus.',
    'The Adamawa plateau lies in the centre.',
    'The Sahel is near Lake Chad in the far north.',
  ], [[106, 273], [62, 202], [137, 171], [171, 49]]),
  'hist1-lifeways': columnsSpec('Environment and ways of life', [
    { head: 'Zone', items: ['coast, rivers', 'forest', 'highlands', 'savanna, Sahel'] },
    { head: 'Way of life', items: ['fishing, salt, canoes', 'hunting, yams, palm', 'dense farming, crafts', 'grain, cattle, trade'] },
  ], { colW: 150, arrow: true }),
  'hist1-forest-peoples': drawn('The forest peoples of Cameroon', 340, 324, ForestPeoplesArt, [
    'The Baka live in the forests of the East and South regions.',
    'The Bakola-Bagyeli live around Kribi and Lolodorf.',
    'The Bedzan live around Ngambe-Tikar.',
  ], [[174, 267], [70, 275], [92, 206]]),
  'hist1-forest-rights': columnsSpec('Forest peoples today', [
    { head: 'Contributions', items: ['forest knowledge', 'medicinal plants', 'music, dance'] },
    { head: 'Challenges', items: ['logging, plantations', 'few schools', 'discrimination'] },
    { head: 'Rights', items: ['land and forest', 'education, health', 'respect, equality'] },
  ], { colW: 118 }),
  'hist1-bantu': treeSpec('The Bantu migration', 'Homeland: Cameroon-Nigeria borderland', [
    { name: 'Western stream', items: ['through the forest', 'to the Congo basin', 'and Angola'] },
    { name: 'Eastern stream', items: ['along the forest edge', 'to the Great Lakes', 'then south'] },
    { name: 'In Cameroon', items: ['Duala, Bassa', 'Beti, Maka', 'and others'] },
  ], { colW: 118 }),
  'hist1-bantu-effects': columnsSpec('Effects of the Bantu migration', [
    { head: 'Farming', items: ['yams, oil palm', 'cleared forests'] },
    { head: 'Iron', items: ['tools', 'weapons'] },
    { head: 'Languages', items: ['Swahili, Zulu', 'Duala, Ewondo'] },
    { head: 'Societies', items: ['villages', 'kingdoms'] },
  ], { colW: 92 }),
  'hist1-carthage': flowSpec('The story of Carthage', ['Phoenicians\nof Tyre', 'Carthage founded\n(814 BC)', 'A trading power\nwith a navy', 'Punic Wars\nwith Rome', 'Destroyed\n(146 BC)'], { boxW: 108 }),
  'hist1-hanno': flowSpec('The voyage of Hanno (about 500 BC)', ['Leaves\nCarthage', 'Strait of\nGibraltar', 'South along the\nWest African coast', 'The "Chariot of\nthe Gods": Mt Cameroon?', 'Returns;\nthe Periplus'], { boxW: 116 }),
  'hist1-trans-saharan': columnsSpec('The trans-Saharan trade', [
    { head: 'From the north', items: ['salt (Taghaza)', 'cloth, copper', 'horses, books'] },
    { head: 'Across', items: ['camel caravans', 'oases', 'Berber guides'] },
    { head: 'From the south', items: ['gold', 'ivory, kola', 'slaves'] },
  ], { colW: 116 }),
  'hist1-saharan-effects': treeSpec('Effects of the trans-Saharan trade', 'Trade across the Sahara', [
    { name: 'Empires', items: ['Ghana, Mali', 'Songhai', 'Kanem-Bornu'] },
    { name: 'Towns', items: ['Timbuktu', 'Gao, Kano'] },
    { name: 'Islam', items: ['faith', 'literacy'] },
    { name: 'Suffering', items: ['slave trade'] },
  ], { colW: 96 }),
  'hist1-coastal-trade': columnsSpec('Coastal barter in early Cameroon', [
    { head: 'The coast offered', items: ['fish', 'sea salt', 'canoes, shells'] },
    { head: 'The hinterland offered', items: ['yams, plantains', 'iron tools, pots', 'ivory, kola'] },
  ], { colW: 150, arrow: true }),
  'hist1-coast-to-europe': flowSpec('From barter to contact with Europe', ['Barter between\ncoast and interior', 'Markets and\ncommodity money', 'Middlemen on\nthe estuaries', 'Portuguese,\nabout 1472'], { boxW: 116, perRow: 2 }),
  'hist1-tar': treeSpec('Traditional African Religion', 'The Supreme Being', [
    { name: 'Spirits', items: ['of water,', 'forest, land'] },
    { name: 'Ancestors', items: ['protect', 'the family'] },
    { name: 'Specialists', items: ['priests,', 'diviners, healers'] },
    { name: 'Places', items: ['shrines,', 'sacred forests'] },
  ], { colW: 96 }),
  'hist1-tar-values': columnsSpec('Rites and values', [
    { head: 'Rites of passage', items: ['birth, naming', 'initiation', 'marriage', 'death, funeral'] },
    { head: 'Rituals', items: ['libations', 'sacrifices', 'festivals (Ngondo)'] },
    { head: 'Values', items: ['respect for elders', 'solidarity', 'respect for nature'] },
  ], { colW: 116 }),
  'hist1-islam': flowSpec('The foundation of Islam', ['About 570:\nMuhammad born', '610: the first\nrevelation', '622: the Hijra\nto Medina', '630: return\nto Mecca', '632: death\nof Muhammad'], { boxW: 106 }),
  'hist1-islam-africa': flowSpec('How Islam reached northern Cameroon', ['639 to 642:\nEgypt', 'By 700:\nNorth Africa', 'Traders cross\nthe Sahara', '11th century:\nKanem converts', 'From 1804:\nthe Fulani jihad'], { boxW: 106 }),
  'hist1-ancient-map': columnsSpec('Ancient civilisations studied', [
    { head: 'Africa', items: ['Egypt (3100 BC)', 'Kush, Meroe', 'Axum', 'Carthage'] },
    { head: 'Europe', items: ['Greek city-states', 'Athens, Sparta', 'Rome (753 BC)', 'Byzantium'] },
    { head: 'Asia', items: ['China: Shang', 'Qin, Han', 'Judea', 'Arabia'] },
  ], { colW: 116 }),
  'hist1-religions-compare': columnsSpec('Three monotheistic religions', [
    { head: 'Judaism', items: ['Abraham, Moses', 'the Torah', 'synagogue', 'Jerusalem'] },
    { head: 'Christianity', items: ['Jesus', 'the Bible', 'church', 'Jerusalem, Rome'] },
    { head: 'Islam', items: ['Muhammad', 'the Qur’an', 'mosque', 'Mecca'] },
  ], { colW: 116 }),
  'hist1-cameroon-review': columnsSpec('Early Cameroon: revision', [
    { head: 'Land and peoples', items: ['Africa in miniature', 'Shum Laka, Obobogo', 'forest peoples', 'Bantu migration'] },
    { head: 'Contacts', items: ['Hanno (500 BC)', 'trans-Saharan trade', 'coastal barter', 'Portuguese (1472)'] },
    { head: 'Beliefs', items: ['Supreme Being', 'ancestors', 'Ngondo', 'Islam in the north'] },
  ], { colW: 118 }),
};
