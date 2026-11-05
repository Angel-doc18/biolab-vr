// History figures for Form 2: the Middle Ages, Charlemagne, the feudal
// pyramid, the Church and the Crusades, the Renaissance and printing, the
// caliphates and Islamic contributions, the peopling of Cameroon (a migration
// map), fondoms and lamidats, Ghana, Mali and Songhai, Benin and Oyo, Kongo
// and Great Zimbabwe, African societies and arts, pre-Columbian America, the
// voyages of exploration, the Swahili coast, the name Cameroon, the triangular
// trade, abolition, the Duala, Bassa and Beti, the missionaries and revision.
import { Circle, G, Line, Path, Polygon, Rect } from 'react-native-svg';
import { Txt } from './Diagram';
import { columnsSpec, flowSpec, treeSpec } from './charts';
import { Outline, px, py } from './geography4';

const O = '#33414d';

// ---------- the feudal pyramid ----------
function FeudalPyramidArt() {
  const bands = ['King', 'Lords: nobles, bishops', 'Knights (vassals)', 'Peasants and serfs'];
  const fills = ['#f1d38a', '#ecd9a8', '#d9e8d2', '#d4e3ef'];
  return (
    <G>
      {bands.map((b, i) => {
        const w = 100 + i * 50;
        return (
          <G key={b}>
            <Rect x={170 - w / 2} y={16 + i * 38} width={w} height={34} fill={fills[i]} stroke={O} strokeWidth={1} />
            <Txt x={170} y={37 + i * 38} size={9.5} weight={i === 0 ? '700' : '500'}>
              {b}
            </Txt>
          </G>
        );
      })}
      <Line x1={22} y1={30} x2={22} y2={150} stroke={O} strokeWidth={1.6} />
      <Polygon points="22,158 17,148 27,148" fill={O} />
      <Txt x={12} y={176} size={8} anchor="start">
        land and protection
      </Txt>
      <Line x1={318} y1={160} x2={318} y2={38} stroke={O} strokeWidth={1.6} />
      <Polygon points="318,30 313,40 323,40" fill={O} />
      <Txt x={328} y={176} size={8} anchor="end">
        loyalty and service
      </Txt>
    </G>
  );
}

// ---------- migrations into Cameroon ----------
const MIGRANTS = [
  ['Fulani, from the west', '#b5651d', [10.3, 9.6], [13.5, 9.1]],
  ['Shuwa Arabs, from the east', '#8e44ad', [16.2, 11.5], [15.0, 11.2]],
  ['Beti-Fang, across the Sanaga', '#c0392b', [14.2, 6.0], [11.6, 3.3]],
  ['First Bantu, towards the coast', '#1f6fb2', [10.3, 6.2], [10.0, 3.9]],
];

function arrow(from, to, c, key) {
  const [x1, y1] = [px(from[0]), py(from[1])];
  const [x2, y2] = [px(to[0]), py(to[1])];
  const a = Math.atan2(y2 - y1, x2 - x1);
  const h = (d) => `${x2 - 9 * Math.cos(a - d)},${y2 - 9 * Math.sin(a - d)}`;
  return (
    <G key={key}>
      <Line x1={x1} y1={y1} x2={x2} y2={y2} stroke={c} strokeWidth={2.6} />
      <Polygon points={`${x2},${y2} ${h(0.45)} ${h(-0.45)}`} fill={c} />
    </G>
  );
}

function PeoplingArt() {
  const sanaga = [[13.3, 5.4], [12.3, 4.6], [11.0, 4.1], [9.6, 3.6]].map(([lon, lat], i) => `${i ? 'L' : 'M'}${px(lon)} ${py(lat)}`).join(' ');
  return (
    <G>
      <Outline fill="#f6f1e4" />
      <Path d={sanaga} stroke="#7fb3e0" strokeWidth={2.2} fill="none" />
      <Txt x={px(12.4) + 4} y={py(4.6) + 14} size={7.5} anchor="start" fill="#1f6fb2">
        Sanaga
      </Txt>
      <Circle cx={px(14.45)} cy={py(12.5)} r={5} fill="#16a085" />
      {MIGRANTS.map(([name, c, f, t]) => arrow(f, t, c, name))}
      {MIGRANTS.map(([name, c], i) => (
        <G key={`k${name}`}>
          <Line x1={224} y1={118 + i * 22} x2={240} y2={118 + i * 22} stroke={c} strokeWidth={3} />
          <Txt x={245} y={121 + i * 22} size={7.5} anchor="start">
            {name}
          </Txt>
        </G>
      ))}
      <Circle cx={232} cy={206} r={5} fill="#16a085" />
      <Txt x={245} y={209} size={7.5} anchor="start">
        Sao, by Lake Chad
      </Txt>
    </G>
  );
}

// ---------- the triangular trade ----------
function TriangularArt() {
  const node = (x, y, t) => (
    <G key={t}>
      <Rect x={x - 42} y={y - 15} width={84} height={30} rx={6} fill="#dbe7f5" stroke={O} strokeWidth={1.1} />
      <Txt x={x} y={y + 4} size={9.5} weight="700">
        {t}
      </Txt>
    </G>
  );
  const leg = (x1, y1, x2, y2, c) => {
    const a = Math.atan2(y2 - y1, x2 - x1);
    const h = (d) => `${x2 - 10 * Math.cos(a - d)},${y2 - 10 * Math.sin(a - d)}`;
    return (
      <G key={`${x1}${y1}`}>
        <Line x1={x1} y1={y1} x2={x2} y2={y2} stroke={c} strokeWidth={2.2} />
        <Polygon points={`${x2},${y2} ${h(0.4)} ${h(-0.4)}`} fill={c} />
      </G>
    );
  };
  return (
    <G>
      {node(262, 30, 'Europe')}
      {node(262, 180, 'Africa')}
      {node(70, 105, 'The Americas')}
      {leg(262, 46, 262, 163, '#2d6a4f')}
      {leg(219, 172, 114, 118, '#c0392b')}
      {leg(114, 92, 219, 38, '#8a5a12')}
      <Txt x={270} y={92} size={8} anchor="start">
        1. cloth, guns,
      </Txt>
      <Txt x={270} y={103} size={8} anchor="start">
        alcohol, beads
      </Txt>
      <Txt x={150} y={168} size={8} weight="700" fill="#c0392b">
        2. enslaved Africans
      </Txt>
      <Txt x={150} y={179} size={8} fill="#c0392b">
        (the Middle Passage)
      </Txt>
      <Txt x={150} y={48} size={8}>
        3. sugar, cotton,
      </Txt>
      <Txt x={150} y={59} size={8}>
        tobacco, rum
      </Txt>
    </G>
  );
}

const drawn = (title, w, h, art, facts, points) => ({ title, w, h, art, labels: [], facts, ...(points ? { points } : {}) });

export const HISTORY_F2 = {
  'hist2-middle-ages': flowSpec('Milestones of the Middle Ages', ['476: fall of\nthe West', '800: Charlemagne\ncrowned', '1095: the\nFirst Crusade', '1347: the\nBlack Death', '1453: fall of\nConstantinople'], { boxW: 108 }),
  'hist2-charlemagne': columnsSpec('Charlemagne’s achievements', [
    { head: 'Conquest', items: ['a large empire', 'in western Europe'] },
    { head: 'Government', items: ['counties, counts', 'royal inspectors'] },
    { head: 'Learning', items: ['schools', 'copying of books'] },
  ], { colW: 116 }),
  'hist2-feudal-pyramid': drawn('The feudal pyramid', 340, 186, FeudalPyramidArt, [
    'The king was at the top and granted fiefs to the lords.',
    'Lords, including bishops, gave knights to the king.',
    'Knights served their lords in return for smaller fiefs.',
    'Peasants and serfs worked the land at the bottom.',
  ], [[170, 33], [170, 71], [170, 109], [170, 147]]),
  'hist2-feudal-decline': treeSpec('Why feudalism declined', 'The end of feudalism', [
    { name: 'Black Death', items: ['fewer workers', 'higher wages'] },
    { name: 'Towns, trade', items: ['money economy', 'serfs freed'] },
    { name: 'New weapons', items: ['cannon', 'paid armies'] },
    { name: 'Strong kings', items: ['national states'] },
  ], { colW: 96 }),
  'hist2-church': treeSpec('The medieval Church', 'The Pope', [
    { name: 'Bishops', items: ['dioceses', 'cathedrals'] },
    { name: 'Priests', items: ['parishes', 'sacraments'] },
    { name: 'Monks, nuns', items: ['copy books', 'care for sick'] },
    { name: 'Powers', items: ['tithe, courts', 'excommunication'] },
  ], { colW: 96 }),
  'hist2-crusades': columnsSpec('The Crusades (1095 to 1291)', [
    { head: 'Causes', items: ['Turks in Holy Land', 'Byzantium asks help', 'Pope Urban II', 'land, wealth, trade'] },
    { head: 'Events', items: ['1099 Jerusalem taken', '1187 Saladin retakes', '1204 Constantinople', '1291 Acre falls'] },
    { head: 'Effects', items: ['more trade', 'new goods, ideas', 'lords weakened', 'lasting hostility'] },
  ], { colW: 118 }),
  'hist2-renaissance': columnsSpec('The Renaissance', [
    { head: 'Artists', items: ['Leonardo da Vinci', 'Michelangelo', 'Raphael'] },
    { head: 'Ideas', items: ['humanism', 'the classics', 'observation'] },
    { head: 'Science', items: ['Copernicus (1543)', 'Galileo', 'printing (1450)'] },
  ], { colW: 116 }),
  'hist2-printing': flowSpec('How printing changed Europe', ['Gutenberg’s\npress (1450)', 'Cheaper\nbooks', 'More people\nread', 'Ideas spread:\nscience, Reformation'], { boxW: 116, perRow: 2 }),
  'hist2-caliphates': flowSpec('The early caliphates', ['632 to 661:\nRashidun, Medina', '661 to 750:\nUmayyads, Damascus', '750 to 1258:\nAbbasids, Baghdad', '1258: Mongols\nsack Baghdad'], { boxW: 116, perRow: 2 }),
  'hist2-islam-expansion': treeSpec('Why Islam spread so fast', 'Rapid expansion', [
    { name: 'Faith', items: ['unity of', 'the Arabs'] },
    { name: 'Weak foes', items: ['Byzantium', 'Persia'] },
    { name: 'Tolerance', items: ['jizya tax', 'not forced'] },
    { name: 'Trade', items: ['merchants', 'caravans, ships'] },
  ], { colW: 96 }),
  'hist2-islam-contrib': treeSpec('Islamic contributions to knowledge', 'House of Wisdom', [
    { name: 'Mathematics', items: ['al-Khwarizmi', 'algebra, zero'] },
    { name: 'Medicine', items: ['Ibn Sina', 'al-Razi'] },
    { name: 'Science', items: ['optics', 'astrolabe'] },
    { name: 'Geography', items: ['al-Idrisi', 'Ibn Battuta'] },
  ], { colW: 96 }),
  'hist2-islam-culture': columnsSpec('Islamic art and architecture', [
    { head: 'Buildings', items: ['Dome of the Rock', 'Cordoba mosque', 'the Alhambra', 'Djenné, Timbuktu'] },
    { head: 'Arts', items: ['calligraphy', 'arabesques', 'carpets, ceramics'] },
    { head: 'Learning', items: ['al-Azhar', 'al-Qarawiyyin', 'paper making'] },
  ], { colW: 118 }),
  'hist2-sao': columnsSpec('The Sao civilisation', [
    { head: 'Where', items: ['around Lake Chad', 'Logone, Chari'] },
    { head: 'Life', items: ['walled towns', 'on mounds', 'farming, fishing'] },
    { head: 'Art', items: ['terracotta', 'bronze, copper', 'lost-wax casting'] },
    { head: 'Fate', items: ['absorbed by', 'Kanem-Bornu', 'Kotoko heirs'] },
  ], { colW: 92 }),
  'hist2-peopling': drawn('Migrations into Cameroon', 340, 316, PeoplingArt, [
    'The Fulani came from the west into the north.',
    'The Shuwa Arabs came from the east to the Lake Chad region.',
    'The Beti-Fang moved south-west and crossed the Sanaga.',
    'The first Bantu moved towards the coast and the forest.',
    'The Sao lived near Lake Chad.',
  ], [[104, 113], [200, 61], [130, 235], [58, 224], [170, 31]]),
  'hist2-cmr-states': columnsSpec('Fondoms and lamidats', [
    { head: 'Grassfields fondom', items: ['ruler: the Fon', 'Kwifon, notables', 'traditional religion', 'Bamum, Nso, Bafut'] },
    { head: 'Fulani lamidat', items: ['ruler: the Lamido', 'Emir of Yola, Sokoto', 'Islam, Islamic law', 'Garoua, Maroua'] },
  ], { colW: 150 }),
  'hist2-lamidat': flowSpec('The chain of authority in the north', ['Sultan of\nSokoto', 'Emir of Yola\n(Adamawa)', 'Lamido of a\nlamidat', 'District and\nvillage heads'], { boxW: 112, perRow: 2 }),
  'hist2-sudanic-map': columnsSpec('Empires of the western Sudan', [
    { head: 'Ghana', items: ['Soninke', 'Koumbi Saleh', 'gold and salt', 'Almoravids, 1076'] },
    { head: 'Mali', items: ['Mandinka', 'Niani', 'Sundiata, Mansa Musa', 'Tuareg, Songhai'] },
    { head: 'Songhai', items: ['Songhai', 'Gao', 'Sunni Ali, Askia', 'Tondibi, 1591'] },
  ], { colW: 118 }),
  'hist2-ghana-decline': treeSpec('Why Ghana declined', 'Fall of Ghana', [
    { name: 'Almoravids', items: ['took Koumbi', 'Saleh, 1076'] },
    { name: 'Trade', items: ['routes moved', 'east'] },
    { name: 'Drought', items: ['drier land'] },
    { name: 'Rivals', items: ['Sosso', 'Mali'] },
  ], { colW: 96 }),
  'hist2-mali': flowSpec('The story of Mali', ['About 1235:\nKirina', 'Sundiata at\nNiani', '1312: Mansa\nMusa', '1324: the\npilgrimage', '1433: Tuareg\ntake Timbuktu'], { boxW: 108 }),
  'hist2-mansamusa': columnsSpec('Mansa Musa (1312 to 1337)', [
    { head: 'Wealth', items: ['gold of West Africa', 'trade towns'] },
    { head: 'Pilgrimage', items: ['1324 to Mecca', 'gold in Cairo'] },
    { head: 'Learning', items: ['as-Sahili', 'Djinguereber', 'Sankore'] },
  ], { colW: 116 }),
  'hist2-songhai': columnsSpec('Two great rulers of Songhai', [
    { head: 'Sunni Ali (1464 to 1492)', items: ['conqueror', 'took Timbuktu, 1468', 'took Djenné', 'war canoes, cavalry'] },
    { head: 'Askia Muhammad (1493 to 1528)', items: ['organiser', 'provinces, governors', 'professional army', 'Islam, scholars'] },
  ], { colW: 160 }),
  'hist2-empire-decline': columnsSpec('Why African empires declined', [
    { head: 'Internal', items: ['succession disputes', 'weak rulers', 'revolts', 'huge size'] },
    { head: 'External', items: ['invasions', 'firearms', 'trade moved', 'to the coast'] },
  ], { colW: 150 }),
  'hist2-benin-oyo': columnsSpec('Benin and Oyo', [
    { head: 'Benin', items: ['the Oba', 'Edo people', 'walls and moats', 'guilds, bronzes'] },
    { head: 'Oyo', items: ['the Alafin', 'Yoruba people', 'Oyo Mesi, Ogboni', 'cavalry'] },
  ], { colW: 150 }),
  'hist2-oyo-government': treeSpec('Checks and balances in Oyo', 'The Alafin', [
    { name: 'Oyo Mesi', items: ['seven nobles', 'led by Bashorun'] },
    { name: 'Ogboni', items: ['elders,', 'priests'] },
    { name: 'Army', items: ['commander lives', 'outside Oyo'] },
  ], { colW: 112 }),
  'hist2-kongo-zimbabwe': columnsSpec('Kongo and Great Zimbabwe', [
    { head: 'Kongo', items: ['the Manikongo', 'Mbanza Kongo', 'Portuguese, 1483', 'Afonso I protests'] },
    { head: 'Great Zimbabwe', items: ['Shona ancestors', 'stone enclosures', 'gold, ivory trade', 'declined 1400s'] },
  ], { colW: 150 }),
  'hist2-zimbabwe': flowSpec('The gold of Great Zimbabwe', ['Gold and ivory\ninland', 'Carried to\nSofala', 'Swahili traders\non the coast', 'Cloth, beads,\nporcelain back'], { boxW: 116, perRow: 2 }),
  'hist2-africa-society': treeSpec('How pre-colonial Africans were governed', 'Forms of government', [
    { name: 'Centralised', items: ['kings, councils', 'Mali, Oyo', 'fondoms'] },
    { name: 'Segmentary', items: ['elders, lineages', 'Igbo, Beti', 'Bassa'] },
    { name: 'Supports', items: ['age grades', 'secret societies', 'women’s groups'] },
  ], { colW: 112 }),
  'hist2-african-arts': columnsSpec('African arts', [
    { head: 'Forms', items: ['court art', 'sacred art', 'everyday art'] },
    { head: 'Materials', items: ['wood, clay', 'bronze, brass', 'beads, raffia'] },
    { head: 'Examples', items: ['Nok, Sao terracottas', 'Benin bronzes', 'Bamum thrones'] },
  ], { colW: 118 }),
  'hist2-americas': columnsSpec('Civilisations of pre-Columbian America', [
    { head: 'Maya', items: ['Central America', 'Tikal, Chichén Itzá', 'writing, calendar'] },
    { head: 'Aztecs', items: ['central Mexico', 'Tenochtitlan (1325)', 'floating gardens'] },
    { head: 'Inca', items: ['the Andes', 'Cusco, Machu Picchu', 'roads, quipu'] },
  ], { colW: 118 }),
  'hist2-conquest': flowSpec('The Spanish conquest of America', ['1492:\nColumbus', '1521: Cortés\ntakes Tenochtitlan', '1532: Pizarro\ntakes the Inca', 'Disease, mines\nand plantations'], { boxW: 116, perRow: 2 }),
  'hist2-motives': treeSpec('The voyages of exploration', 'Why and how', [
    { name: 'God', items: ['spread', 'Christianity'] },
    { name: 'Gold', items: ['gold, spices', 'route to India'] },
    { name: 'Glory', items: ['fame', 'empire'] },
    { name: 'Means', items: ['caravel, compass', 'astrolabe'] },
  ], { colW: 96 }),
  'hist2-voyages': flowSpec('The great voyages', ['1472: Cameroon\ncoast', '1488: Dias,\nthe Cape', '1492: Columbus,\nAmerica', '1498: da Gama,\nIndia', '1519 to 1522:\nround the world'], { boxW: 108 }),
  'hist2-swahili': columnsSpec('The Swahili coast', [
    { head: 'Towns', items: ['Kilwa', 'Mombasa, Malindi', 'Zanzibar, Sofala'] },
    { head: 'Exports', items: ['gold, ivory', 'timber', 'slaves'] },
    { head: 'Imports', items: ['cloth, beads', 'porcelain', 'spices'] },
  ], { colW: 116 }),
  'hist2-cmr-name': flowSpec('The name Cameroon', ['About 1472:\nRio dos Camarões', 'Camarones,\nthe Cameroons', '1884:\nKamerun', 'After 1916: Cameroun\nand the Cameroons', 'Today:\nCameroon'], { boxW: 112 }),
  'hist2-triangular': drawn('The triangular trade', 340, 200, TriangularArt, [
    'Ships carried manufactured goods from Europe to Africa.',
    'Enslaved Africans were carried to the Americas on the Middle Passage.',
    'Sugar, cotton, tobacco and rum were carried from the Americas to Europe.',
  ], [[262, 105], [166, 145], [166, 65]]),
  'hist2-slave-effects': columnsSpec('Effects of the transatlantic slave trade', [
    { head: 'Africa', items: ['depopulation', 'wars, insecurity', 'crafts declined', 'suffering'] },
    { head: 'Americas', items: ['plantation labour', 'African diaspora', 'African cultures'] },
    { head: 'Europe', items: ['great profits', 'growth of ports', 'funds for industry'] },
  ], { colW: 116 }),
  'hist2-abolition': treeSpec('Why the slave trade was abolished', 'Abolition', [
    { name: 'Humanitarian', items: ['Quakers', 'Wilberforce', 'Equiano'] },
    { name: 'Resistance', items: ['revolts', 'Haiti, 1804'] },
    { name: 'Economic', items: ['Industrial', 'Revolution'] },
  ], { colW: 112 }),
  'hist2-abolition-timeline': flowSpec('Abolition milestones', ['1807: Britain\nbans the trade', '1833: Britain\nbans slavery', '1840 to 1841:\nDouala treaties', '1848:\nFrance', '1865: the\nUnited States'], { boxW: 108 }),
  'hist2-duala': treeSpec('The Duala of the Wouri', 'The Duala', [
    { name: 'Lineages', items: ['Bell, Akwa', 'Deido, Bonaberi'] },
    { name: 'Trade', items: ['middlemen', 'slaves, palm oil'] },
    { name: 'Culture', items: ['Loba, Miengu', 'the Ngondo'] },
  ], { colW: 112 }),
  'hist2-duala-beti': columnsSpec('Coast and forest societies', [
    { head: 'Duala', items: ['lineage kings', 'middleman trade', 'the Ngondo'] },
    { head: 'Bassa', items: ['segmentary', 'elders, councils', 'the Mbog'] },
    { head: 'Beti', items: ['segmentary', 'big men (nkukuma)', 'So, Mevungu'] },
  ], { colW: 116 }),
  'hist2-missionaries': flowSpec('The first missionaries', ['1843: Merrick\narrives', '1844: mission\nat Bimbia', '1845: Saker,\nBethel, Douala', '1858: Victoria\nfounded', '1872: the\nDuala Bible'], { boxW: 108 }),
  'hist2-mission-effects': columnsSpec('Effects of the early missions', [
    { head: 'Positive', items: ['schools, literacy', 'written languages', 'crafts, health', 'against slave trade'] },
    { head: 'Negative', items: ['condemned customs', 'divisions', 'opened the way', 'for colonial rule'] },
  ], { colW: 150 }),
  'hist2-review': columnsSpec('Form 2 history: revision', [
    { head: 'Europe', items: ['feudalism', 'Church, Crusades', 'Renaissance', 'voyages'] },
    { head: 'Africa', items: ['Ghana, Mali, Songhai', 'Benin, Oyo, Kongo', 'Great Zimbabwe', 'slave trade'] },
    { head: 'Cameroon', items: ['peopling', 'fondoms, lamidats', 'Duala, Bassa, Beti', 'Merrick, Saker'] },
  ], { colW: 118 }),
};
