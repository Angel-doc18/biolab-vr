// A Level History figures (0760): sources and causation, pre-colonial
// Cameroon, penetration and the 1884 treaty, German rule and resistance, the
// Scramble and Berlin, the Kamerun campaign and partition, nineteenth-century
// Europe, African resistance and Adwa, the British and French mandates, the
// Depression, the dictators, the League, Cameroon in the Second World War,
// Brazzaville and 1946, trusteeship, the unions and the road to the UPC, the
// GCE papers (drawn to scale), the UPC, autonomy and independence, British
// Cameroons and the plebiscite, Foumban and the federation, the Second World
// War, the UN, the Cold War, the unitary state, the New Deal and the liberty
// laws, decolonisation (dates drawn to scale), Pan-Africanism, the Middle
// East, apartheid, and essay and examination method.
import { Circle, G, Line, Rect } from 'react-native-svg';
import { Txt } from './Diagram';
import { columnsSpec, cycleSpec, flowSpec, treeSpec } from './charts';
import { HISTORY } from './history';

const O = '#33414d';
const MUTED = '#6b7a88';
const P1 = '#1f6fb2';
const P23 = '#2f7d4f';

// ---------- the 0760 papers, bars to scale ----------
const PAPERS = [
  { name: 'Paper 1', kind: 'multiple choice', hours: 1.5, when: 'Tue 2 June, morning' },
  { name: 'Paper 2', kind: 'essays', hours: 3, when: 'Tue 2 June, afternoon' },
  { name: 'Paper 3', kind: 'essays', hours: 3, when: 'Wed 3 June, morning' },
];
function PapersArt() {
  const x0 = 92;
  const perHour = 60;
  const rowY = [34, 78, 122];
  return (
    <G>
      <Line x1={x0} y1={16} x2={x0} y2={146} stroke={O} strokeWidth={1.2} />
      <Line x1={x0} y1={146} x2={x0 + 3 * perHour} y2={146} stroke={O} strokeWidth={1} />
      {[0, 1, 2, 3].map((h) => (
        <G key={h}>
          <Line x1={x0 + h * perHour} y1={146} x2={x0 + h * perHour} y2={151} stroke={O} strokeWidth={1} />
          <Txt x={x0 + h * perHour} y={162} size={8.5} fill={MUTED}>
            {`${h} h`}
          </Txt>
        </G>
      ))}
      {PAPERS.map((p, i) => (
        <G key={p.name}>
          <Txt x={x0 - 8} y={rowY[i] - 1} size={9.5} anchor="end" weight="700" fill={O}>
            {p.name}
          </Txt>
          <Txt x={x0 - 8} y={rowY[i] + 11} size={8} anchor="end" fill={MUTED}>
            {p.kind}
          </Txt>
          <Rect x={x0} y={rowY[i] - 9} width={p.hours * perHour} height={18} rx={2} fill={i === 0 ? P1 : P23} />
          <Txt x={x0 + p.hours * perHour + 6} y={rowY[i] + 4} size={8.5} anchor="start" fill={O}>
            {p.hours === 1.5 ? '1½ hours' : '3 hours'}
          </Txt>
          <Txt x={x0 + p.hours * perHour + 6} y={rowY[i] + 15} size={7.5} anchor="start" fill={MUTED}>
            {p.when}
          </Txt>
        </G>
      ))}
      <Txt x={180} y={182} size={8.5} fill={MUTED}>
        June 2026 timetable (bars drawn to scale)
      </Txt>
    </G>
  );
}

// ---------- decolonisation, years drawn to scale ----------
const DECOL = [
  { year: 1947, name: 'India, Pakistan', tier: -1 },
  { year: 1954, name: 'Dien Bien Phu', tier: 1 },
  { year: 1955, name: 'Bandung', tier: -2 },
  { year: 1957, name: 'Ghana', tier: 2 },
  { year: 1958, name: 'Guinea', tier: -1 },
  { year: 1960, name: 'year of Africa', tier: 1 },
  { year: 1962, name: 'Algeria', tier: -2 },
  { year: 1963, name: 'Kenya; OAU', tier: 2 },
];
function DecolArt() {
  const X = (y) => 20 + (y - 1945) * 16;
  const AXIS = 100;
  const top = { [-1]: 70, [-2]: 44, 1: 134, 2: 160 };
  return (
    <G>
      <Line x1={X(1945)} y1={AXIS} x2={X(1965)} y2={AXIS} stroke={O} strokeWidth={1.4} />
      {[1945, 1950, 1955, 1960, 1965].map((y) => (
        <G key={y}>
          <Line x1={X(y)} y1={AXIS - 4} x2={X(y)} y2={AXIS + 4} stroke={O} strokeWidth={1} />
          <Txt x={X(y)} y={AXIS + 14} size={7.5} fill={MUTED}>
            {String(y)}
          </Txt>
        </G>
      ))}
      {DECOL.map((e) => {
        const x = X(e.year);
        const up = e.tier < 0;
        const ty = top[e.tier];
        return (
          <G key={e.year}>
            <Line x1={x} y1={up ? AXIS : AXIS + 18} x2={x} y2={up ? ty + 14 : ty - 10} stroke={MUTED} strokeWidth={0.8} />
            <Circle cx={x} cy={AXIS} r={3.2} fill={e.year === 1960 ? P23 : P1} />
            <Txt x={x} y={ty} size={8.5} weight="700" fill={O}>
              {String(e.year)}
            </Txt>
            <Txt x={x} y={ty + 10} size={8} fill={O}>
              {e.name}
            </Txt>
          </G>
        );
      })}
      <Txt x={180} y={186} size={8.5} fill={MUTED}>
        Years drawn to scale, 1945 to 1965
      </Txt>
    </G>
  );
}

export const A_HISTORY = {
  // ---------- Lower Sixth: method ----------
  'ahi-sources': columnsSpec('Four questions for every source', [
    { head: 'Origin', items: ['who made it?', 'when?', 'where?'] },
    { head: 'Purpose', items: ['why was it made?', 'for whom?', 'to persuade?'] },
    { head: 'Content', items: ['what it says', 'what it omits', 'tone'] },
    { head: 'Reliability', items: ['one-sided?', 'corroborated?', 'useful for what?'] },
  ], { colW: 88 }),
  'ahi-causation': treeSpec('Causes of the German annexation (1884)', 'Why Germany, in 1884?', [
    { name: 'Long-term', items: ['decades of trade', 'missions on coast', 'Duala seek protection'] },
    { name: 'Short-term', items: ['British delay', '1879 and 1881', 'Bismarck turns, 1884'] },
    { name: 'Trigger', items: ['treaty of', '12 July 1884', 'before Hewett'] },
  ], { colW: 112 }),

  // ---------- pre-colonial Cameroon ----------
  'ahi-precolonial': columnsSpec('Pre-colonial states and societies', [
    { head: 'Lamidats', items: ['Lamido', 'Alkali, Sharia', 'zakat, tribute', 'under Yola, Sokoto'] },
    { head: 'Fondoms', items: ['sacred Fon', 'Kwifon', 'notables', 'Nso, Kom, Bamum'] },
    { head: 'Forest', items: ['no central ruler', 'lineage heads', 'elders’ assembly', 'Beti, Bulu, Bassa'] },
    { head: 'Duala coast', items: ['chiefdoms', 'the Ngondo', 'middlemen', 'Bell, Akwa, Deido'] },
  ], { colW: 92 }),
  'ahi-trade-routes': columnsSpec('Pre-colonial trade linked the regions', [
    { head: 'North', items: ['Hausa, Fulani traders', 'kola, salt, cloth', 'horses, slaves'] },
    { head: 'Grassfields', items: ['kola, iron goods', 'cloth exported', 'salt imported'] },
    { head: 'Coast', items: ['Duala middlemen', 'palm oil, ivory', 'goods on "trust"'] },
  ], { colW: 112, arrow: true }),

  // ---------- penetration and annexation ----------
  'ahi-penetration': flowSpec('Europeans on the coast (1840 to 1884)', ['1840, 1841\nanti-slave-trade\ntreaties', '1844, 1845\nMerrick at Bimbia,\nSaker in Douala', '1856\nCourt of Equity', '1858\nSaker founds\nVictoria', '1868, 1875\nWoermann,\nJ&T arrive', '1879, 1881\nkings ask\nBritain'], { perRow: 3, boxW: 112, boxH: 60 }),
  'ahi-treaty-1884': flowSpec('The treaty of 1884 and after', ['12 July 1884\nBell and Akwa\nsign', '14 July\nNachtigal\nraises flag', '19 July\nHewett arrives:\ntoo late', 'Dec 1884\nHickory Town\nattacked', '1885, 1886\nBritain accepts\nthe claim', '8 Aug 1914\nManga Bell\nhanged'], { perRow: 3, boxW: 112, boxH: 60 }),

  // ---------- German rule ----------
  'ahi-german': treeSpec('German Kamerun (1884 to 1916)', 'German rule', [
    { name: 'Government', items: ['governors', 'Buea 1901 to 1909', 'Schutztruppe'] },
    { name: 'Economy', items: ['concessions', 'plantations', 'cocoa, rubber'] },
    { name: 'Works', items: ['port of Douala', 'Northern Railway', 'Victoria garden'] },
    { name: 'Coercion', items: ['forced labour', 'head tax', 'land seized'] },
  ], { colW: 96 }),
  'ahi-resistance-cmr': flowSpec('Resistance to German rule', ['1884\nLock Priso\n(Duala)', '1891\nKuva Likenye\nwins at Buea', '1899 to 1901\nBulu rising', '1901\nZubeiru of\nYola defeated', '1906\nNso\nconquered', '1914\nManga Bell\nand Samba'], { perRow: 3, boxW: 108, boxH: 56 }),

  // ---------- the Scramble and Berlin ----------
  'ahi-scramble': treeSpec('Why Europe scrambled for Africa', 'The Scramble', [
    { name: 'Economic', items: ['raw materials', 'markets', 'capital'] },
    { name: 'Political', items: ['prestige', 'rivalry', 'new Germany, Italy'] },
    { name: 'Strategic', items: ['Suez (1869)', 'route to India', 'Egypt (1882)'] },
    { name: 'Enabling', items: ['quinine', 'steamships', 'Maxim gun'] },
  ], { colW: 96 }),
  'ahi-berlin-act': columnsSpec('Berlin set the rules; others drew the map', [
    { head: 'Berlin Act (1885)', items: ['free trade, Congo basin', 'free navigation', 'effective occupation', 'notification', 'Congo Free State'] },
    { head: 'Then (1885 to 1911)', items: ['bilateral treaties', 'treaties with rulers', 'military conquest', 'Fashoda, 1898', 'New Kamerun, 1911'] },
  ], { colW: 150, arrow: true }),

  // ---------- the First World War and partition ----------
  'ahi-ww1': flowSpec('The Kamerun campaign (1914 to 1916)', ['Aug 1914\nwar reaches\nKamerun', '27 Sep 1914\nDouala falls\n(Dobell)', 'June 1915\nGaroua falls', '1 Jan 1916\nYaoundé\nentered', 'early 1916\nGermans to\nRio Muni', '18 Feb 1916\nMora\nsurrenders'], { perRow: 3, boxW: 108, boxH: 58 }),
  'ahi-partition': flowSpec('From partition to mandate', ['4 March 1916\nPicot line:\nfour-fifths to France', '28 June 1919\nVersailles,\nArticle 119', '10 July 1919\nMilner-Simon\nDeclaration', '20 July 1922\nclass B\nmandates'], { perRow: 2, boxW: 128, boxH: 60 }),

  // ---------- nineteenth-century Europe ----------
  'ahi-europe19': treeSpec('The Industrial Revolution', 'Britain, from about 1760', [
    { name: 'Causes', items: ['coal and iron', 'capital', 'farming changes'] },
    { name: 'Inventions', items: ['spinning jenny', 'Watt’s engine', 'railways (1830)'] },
    { name: 'Society', items: ['towns grow', 'working class', 'unions, socialism'] },
    { name: 'Overseas', items: ['raw materials', 'markets', 'means of conquest'] },
  ], { colW: 96 }),
  'ahi-unification': columnsSpec('The unification of Italy and Germany', [
    { head: 'Italy', items: ['Piedmont leads', 'Cavour, Plombières', '1859 war with Austria', 'Garibaldi, 1860', 'kingdom, 1861', 'Rome, 1870'] },
    { head: 'Germany', items: ['Prussia leads', 'Zollverein, 1834', 'Bismarck, 1862', 'Denmark, Austria', 'France, 1870 to 1871', 'empire, 18 Jan 1871'] },
  ], { colW: 150 }),

  // ---------- African resistance ----------
  'ahi-resistance': columnsSpec('Two African resisters', [
    { head: 'Samori Touré', items: ['Mandinka state', 'firearms, smiths', 'fought France from 1882', 'treaties to gain time', 'scorched earth', 'captured 1898'] },
    { head: 'Behanzin', items: ['Dahomey, from 1889', 'standing army', 'women soldiers', 'wars of 1890, 1892', 'burned Abomey', 'surrendered 1894'] },
  ], { colW: 150 }),
  'ahi-adwa': flowSpec('Ethiopia keeps its independence', ['1889\nTreaty of\nWuchale', 'Article 17\n"could" or\n"must"?', 'Menelik buys\narms, unites\nhis rulers', '1 March 1896\nItalians defeated\nat Adwa', 'Oct 1896\nTreaty of\nAddis Ababa', '1935\nItaly invades\nagain'], { perRow: 3, boxW: 110, boxH: 60 }),

  // ---------- the mandates ----------
  'ahi-british': treeSpec('British Cameroons under the mandate', 'Governed with Nigeria', [
    { name: 'Northern\nCameroons', items: ['Northern Provinces', 'emirates of', 'Adamawa, Dikwa'] },
    { name: 'Southern\nCameroons', items: ['Cameroons Province', 'Buea headquarters', 'Eastern Provinces'] },
    { name: 'Indirect\nrule', items: ['Native Authorities', 'native courts', 'native treasuries'] },
  ], { colW: 116 }),
  'ahi-british-economy': flowSpec('The economy of British Cameroons', ['1922\nmandate with\nNigeria', '1924\nLondon auction:\nGermans buy back', '1930s\nGerman planters\ndominate', '1939\nestates seized\nas enemy property', '1940\nCameroons\nYouth League', '1946\nCameroon Development\nCorporation'], { perRow: 3, boxW: 116, boxH: 60 }),
  'ahi-french': treeSpec('French Cameroun under the mandate', 'Direct rule', [
    { name: 'Government', items: ['Commissioner', 'regions', 'appointed chiefs'] },
    { name: 'Coercion', items: ['indigénat', 'prestation', 'forced labour'] },
    { name: 'Policy', items: ['assimilation (few)', 'association', 'Njoya deposed 1931'] },
  ], { colW: 116 }),
  'ahi-compare-mandates': columnsSpec('British and French rule compared', [
    { head: 'British zone', items: ['indirect rule', 'inside Nigeria', 'little investment', 'less coercion', 'English, common law'] },
    { head: 'French zone', items: ['direct rule', 'its own territory', 'railway, roads, port', 'indigénat, prestation', 'French, civil law'] },
  ], { colW: 150 }),

  // ---------- the Depression ----------
  'ahi-depression': flowSpec('From the Crash to a world slump', ['weak boom:\noverproduction,\nspeculation', 'Oct 1929\nWall Street\nCrash', 'US banks fail;\nloans called in', '1931\nCreditanstalt\nfails', 'tariffs:\nSmoot-Hawley', 'world trade\nshrinks'], { perRow: 3, boxW: 112, boxH: 58 }),
  'ahi-depression-africa': flowSpec('The Depression in Cameroon', ['crop prices\nfall', 'incomes fall;\nhead tax\nunchanged', 'revenue falls;\nmore prestation', 'firms cut\njobs in towns', 'grievances\nfeed later\nnationalism'], { perRow: 3, boxW: 108, boxH: 58 }),

  // ---------- the dictators ----------
  'ahi-dictators': flowSpec('Mussolini’s road to power', ['1919\n"mutilated\nvictory"', '1919 to 1920\nstrikes and\noccupations', '1921\nFascist Party;\nsquadristi', 'Oct 1922\nMarch on Rome', '1923, 1924\nAcerbo Law;\nMatteotti', '1926\none-party\nstate'], { perRow: 3, boxW: 108, boxH: 58 }),
  'ahi-totalitarian': columnsSpec('Three dictatorships compared', [
    { head: 'Fascist Italy', items: ['Mussolini', 'nation, state', 'OVRA', 'Church, king kept', 'control partial'] },
    { head: 'Nazi Germany', items: ['Hitler', 'race', 'Gestapo, SS', 'Enabling Act 1933', 'near total'] },
    { head: 'Stalin’s USSR', items: ['Stalin', 'class', 'secret police', 'planned economy', 'near total'] },
  ], { colW: 112 }),

  // ---------- the League ----------
  'ahi-league': treeSpec('The League of Nations (1920)', 'Covenant, Geneva', [
    { name: 'Assembly', items: ['all members', 'one vote each', 'unanimity'] },
    { name: 'Council', items: ['great powers', 'elected members', 'sanctions (Art. 16)'] },
    { name: 'Court and\nSecretariat', items: ['The Hague', 'civil service', 'Geneva'] },
    { name: 'Agencies', items: ['Mandates', 'Commission', 'ILO, health'] },
  ], { colW: 96 }),
  'ahi-league-failure': flowSpec('The collapse of collective security', ['Sep 1931\nJapan seizes\nManchuria', '1933\nJapan, Germany\nleave', 'Oct 1935\nItaly invades\nEthiopia', 'Dec 1935\nHoare-Laval\nPact', 'May 1936\nAddis Ababa\nfalls', 'April 1946\nLeague\ndissolved'], { perRow: 3, boxW: 108, boxH: 58 }),

  // ---------- Cameroon and the Second World War ----------
  'ahi-ww2cameroon': flowSpec('French Africa joins Free France (1940)', ['June 1940\nFrance falls;\nVichy', '26 Aug\nÉboué rallies\nChad', '27 Aug\nLeclerc takes\nDouala', '28 Aug\nBrazzaville\nfollows', '1941\nKufra taken', '1940 to 1945\nmen, rubber,\ngold, food'], { perRow: 3, boxW: 108, boxH: 58 }),
  'ahi-war-effects': treeSpec('How the war changed Cameroon', 'Effects of 1939 to 1945', [
    { name: 'Economic', items: ['inflation', 'low wages', 'Douala grows'] },
    { name: 'Political', items: ['Atlantic Charter', 'Brazzaville', 'UN trusteeship'] },
    { name: 'Social', items: ['ex-servicemen', 'educated class', 'trade unions'] },
  ], { colW: 112 }),

  // ---------- Brazzaville and 1946 ----------
  'ahi-brazzaville': columnsSpec('Brazzaville, 30 January to 8 February 1944', [
    { head: 'Recommended', items: ['local assemblies', 'seats in Paris', 'end forced labour', 'end the indigénat', 'health, schools'] },
    { head: 'Rejected', items: ['self-government', 'autonomy', 'leaving the bloc', 'local languages', 'African delegates'] },
  ], { colW: 150 }),
  'ahi-reforms-1946': columnsSpec('The reforms of 1946', [
    { head: 'Gains', items: ['indigénat abolished', 'forced labour ended', 'citizenship (Guèye)', 'ARCAM elected', 'FIDES funds'] },
    { head: 'Limits', items: ['double college', 'advisory powers', 'French Union', 'no independence', 'settlers’ weight'] },
  ], { colW: 150 }),

  // ---------- trusteeship ----------
  'ahi-trusteeship': treeSpec('UN trusteeship (13 December 1946)', 'Article 76', [
    { name: 'Aims', items: ['peace', 'advancement', 'self-government', 'or independence'] },
    { name: 'Supervision', items: ['annual reports', 'Trusteeship Council', 'visiting missions'] },
    { name: 'Cameroonian\nuse', items: ['petitions', 'oral hearings', 'Um Nyobè, 1952'] },
  ], { colW: 116 }),
  'ahi-mandate-trust': columnsSpec('Mandate and trusteeship', [
    { head: 'Mandate (1922)', items: ['Covenant, Art. 22', 'Mandates Commission', '"well-being"', 'written petitions', 'no inspections'] },
    { head: 'Trusteeship (1946)', items: ['Charter, chapter XII', 'Trusteeship Council', 'self-government', 'oral petitions too', 'visiting missions'] },
  ], { colW: 150, arrow: true }),

  // ---------- unions and the road to the UPC ----------
  'ahi-unions': flowSpec('Workers and the Douala strike', ['Aug 1944\nunions legal\nin French Africa', 'USCC\n(Jacques Ngom),\nlinked to CGT', 'Sep 1945\nrailway\nstrike', '24 and 25 Sep\nsettlers fire\non Africans', 'leaders\narrested'], { perRow: 3, boxW: 112, boxH: 60 }),
  'ahi-road-upc': flowSpec('The road to the UPC', ['1938\nJEUCAFRA', '1944\nunions\nlegal', 'Sep 1945\nDouala\nstrike', '1946\nreforms,\ntrusteeship', '1947\nRACAM;\nKumsze', '10 April 1948\nUPC founded'], { perRow: 3, boxW: 108, boxH: 56 }),

  // ---------- essays and sources ----------
  'ahi-essay': flowSpec('Writing an A Level history essay', ['Decode:\ncommand, topic,\ndates', 'Plan:\nfactors and\nevidence', 'Introduction:\ncontext and\nthesis', 'PEEL\nparagraphs', 'Counter-\nargument', 'Conclusion:\na judgement'], { perRow: 3, boxW: 108, boxH: 58 }),
  'ahi-source-compare': flowSpec('Comparing two sources', ['Where do\nthey agree?', 'Where do\nthey differ?', 'Why? authors,\npurposes, dates', 'Test against\nown knowledge', 'Judge usefulness\nfor the question'], { perRow: 3, boxW: 112, boxH: 56 }),

  // ---------- Upper Sixth: the examination ----------
  'ahi-gce-0760': {
    title: 'GCE A Level History (0760)',
    w: 360,
    h: 192,
    art: PapersArt,
    labels: [],
    facts: [
      'Paper 1 lasts 1½ hours: multiple choice across the syllabus, on Tuesday 2 June, morning.',
      'Paper 2 lasts 3 hours: essays, on Tuesday 2 June, afternoon.',
      'Paper 3 lasts 3 hours: essays, on Wednesday 3 June, morning.',
      'The bars are drawn to scale: each essay paper lasts twice as long as Paper 1.',
    ],
  },
  'ahi-command-words': columnsSpec('Command words', [
    { head: 'Explain', items: ['reasons', 'how they worked'] },
    { head: 'Assess', items: ['weigh', 'and judge'] },
    { head: 'Compare', items: ['alike and unlike', 'point by point'] },
    { head: 'How far', items: ['for and against', 'clear verdict'] },
  ], { colW: 88 }),

  // ---------- the UPC ----------
  'ahi-upc': treeSpec('The Union des Populations du Cameroun', 'UPC, Douala, 1948', [
    { name: 'Leaders', items: ['Um Nyobè', 'Moumié', 'Ouandié, Kingué'] },
    { name: 'Programme', items: ['reunification', 'independence', 'end of abuses'] },
    { name: 'Methods', items: ['mass meetings', 'newspapers', 'UN petitions'] },
    { name: 'Wings', items: ['UDEFEC (women)', 'JDC (youth)', 'local committees'] },
  ], { colW: 96 }),
  'ahi-upc-ban': flowSpec('From rivalry to the ban', ['1949, 1951\nESOCAM, BDC\nas rivals', 'Dec 1954\nRoland Pré\narrives', 'April 1955\njoint\nproclamation', '22 to 30 May\n1955\nriots', '13 July 1955\nUPC\nbanned', 'Dec 1956\nmaquis in\nSanaga-Maritime'], { perRow: 3, boxW: 108, boxH: 60 }),

  // ---------- autonomy and independence ----------
  'ahi-autonomy': flowSpec('Towards autonomy (1956 to 1958)', ['23 June 1956\nLoi-cadre\nDefferre', '23 Dec 1956\nALCAM\nelected', 'April 1957\nState under\ntrusteeship', 'May 1957\nMbida Prime\nMinister', 'Feb 1958\nMbida resigns;\nAhidjo PM'], { perRow: 3, boxW: 110, boxH: 58 }),
  'ahi-road-1960': flowSpec('The road to 1 January 1960', ['18 Feb 1958\nAhidjo Prime\nMinister', '13 Sep 1958\nUm Nyobè\nkilled', 'Jan 1959\ninternal\nself-government', 'March 1959\nUN fixes\nthe date', 'Oct 1959\nfull powers', '1 Jan 1960\nindependence;\n5 May president'], { perRow: 3, boxW: 112, boxH: 60 }),

  // ---------- British Cameroons ----------
  'ahi-britishcam': flowSpec('Southern Cameroons to the plebiscite', ['1953\n"benevolent\nneutrality"', '1954\nown House of\nAssembly', '1958\nEndeley\nPremier', 'Jan 1959\nKNDP wins;\nFoncha Premier', 'Oct 1959\nUN fixes two\nquestions', '11 Feb 1961\nplebiscite'], { perRow: 3, boxW: 110, boxH: 60 }),
  'ahi-plebiscite': HISTORY['hist-plebiscite'],

  // ---------- Foumban and the federation ----------
  'ahi-foumban': flowSpec('From plebiscite to reunification (1961)', ['11 Feb\nplebiscite', '26 to 28 June\nBamenda\nproposals', '17 to 21 July\nFoumban\nConference', 'August\ntalks in\nYaoundé', '1 Sep\nfederal\nconstitution', '1 Oct\nreunification'], { perRow: 3, boxW: 108, boxH: 58 }),
  'ahi-federation': treeSpec('The Federal Republic (1961)', 'Federal government', [
    { name: 'Federal', items: ['President Ahidjo', 'VP Foncha', 'Federal Assembly', 'defence, finance'] },
    { name: 'East\nCameroon', items: ['capital Yaoundé', 'Prime Minister', 'House of Assembly'] },
    { name: 'West\nCameroon', items: ['capital Buea', 'Prime Minister', 'House of Assembly', 'House of Chiefs'] },
  ], { colW: 116 }),

  // ---------- the Second World War ----------
  'ahi-ww2-causes': treeSpec('Causes of the Second World War', 'War in September 1939', [
    { name: 'Long-term', items: ['Versailles', 'League failures', 'Depression', 'Hitler’s aims'] },
    { name: 'Appeasement', items: ['Rhineland 1936', 'Austria 1938', 'Munich 1938', 'Prague 1939'] },
    { name: 'Immediate', items: ['guarantee to Poland', 'Nazi-Soviet Pact', '1 Sep: Poland', '3 Sep: war'] },
  ], { colW: 116 }),
  'ahi-ww2': flowSpec('The course of the Second World War', ['1939 to 1940\nPoland, then\nFrance falls', '22 June 1941\nBarbarossa', '7 Dec 1941\nPearl Harbor', '1942 to 1943\nMidway, Alamein,\nStalingrad', '6 June 1944\nD-Day', 'May and Sep\n1945\nsurrenders'], { perRow: 3, boxW: 110, boxH: 60 }),

  // ---------- the United Nations ----------
  'ahi-uno': treeSpec('The United Nations (24 October 1945)', 'The Charter', [
    { name: 'General\nAssembly', items: ['all members', 'one vote each', 'recommends'] },
    { name: 'Security\nCouncil', items: ['five permanent', 'with a veto', 'binding decisions'] },
    { name: 'Other\norgans', items: ['ECOSOC', 'Trusteeship', 'ICJ, Secretariat'] },
  ], { colW: 116 }),
  'ahi-un-record': columnsSpec('The UN’s record', [
    { head: 'Achievements', items: ['Korea, 1950', 'UNEF after Suez', 'Congo, 1960 to 1964', 'Resolution 1514', 'human rights, 1948', 'WHO, UNICEF'] },
    { head: 'Limits', items: ['the veto', 'Hungary, 1956', 'Czechoslovakia, 1968', 'Afghanistan, 1979', 'needs members’ troops', 'needs members’ money'] },
  ], { colW: 150 }),

  // ---------- the Cold War ----------
  'ahi-coldwar-causes': columnsSpec('Who caused the Cold War?', [
    { head: 'Orthodox', items: ['Soviet expansion', 'Eastern Europe', 'Czech coup 1948'] },
    { head: 'Revisionist', items: ['US economic aims', 'atomic monopoly', 'open markets'] },
    { head: 'Post-revisionist', items: ['mutual fear', 'misperception', 'shared blame'] },
  ], { colW: 112 }),
  'ahi-coldwar1': columnsSpec('Two blocs (1947 to 1955)', [
    { head: 'USA and the West', items: ['Truman Doctrine 1947', 'Marshall Plan', 'Berlin airlift', 'NATO 1949', 'Federal Republic'] },
    { head: 'USSR and the East', items: ['two camps 1947', 'Cominform', 'Berlin Blockade', 'COMECON 1949', 'Warsaw Pact 1955'] },
  ], { colW: 150, arrow: true }),
  'ahi-coldwar2': flowSpec('Coexistence and crisis', ['1955\nWarsaw Pact', '1956\nHungary\ncrushed', '13 Aug 1961\nBerlin Wall', 'Oct 1962\nCuban Missile\nCrisis', '1964 to 1975\nVietnam War', '1972\nSALT I;\ndétente'], { perRow: 3, boxW: 108, boxH: 56 }),
  'ahi-coldwar-end': flowSpec('The end of the Cold War', ['Dec 1979\nAfghanistan', 'March 1985\nGorbachev', '1987\nINF Treaty', '9 Nov 1989\nthe Wall falls', '3 Oct 1990\nGermany\nreunited', 'Dec 1991\nUSSR\ndissolved'], { perRow: 3, boxW: 108, boxH: 56 }),

  // ---------- the unitary state ----------
  'ahi-federal': treeSpec('Why the federal centre dominated', 'Federal power (1961 to 1972)', [
    { name: 'Constitution', items: ['defence, finance', 'security', 'planning'] },
    { name: 'Money', items: ['federal grants', 'CFA franc, 1962'] },
    { name: 'Institutions', items: ['strong President', 'federal inspectors'] },
    { name: 'Politics', items: ['Jua 1965', 'Muna 1968', 'leaders divided'] },
  ], { colW: 96 }),
  'ahi-unitary': flowSpec('From federation to unitary state', ['1 Sep 1966\nCNU single\nparty', '6 May 1972\nreferendum\nannounced', '20 May 1972\nreferendum', '2 June 1972\nnew\nconstitution', 'United Republic:\nseven provinces'], { perRow: 3, boxW: 112, boxH: 58 }),

  // ---------- the New Deal ----------
  'ahi-newdeal': flowSpec('From Ahidjo to Biya (1982 to 1985)', ['4 Nov 1982\nAhidjo\nresigns', '6 Nov 1982\nBiya sworn in', 'Aug 1983\nplot announced;\nAhidjo leaves', 'Jan, Feb 1984\nBiya elected;\nrenamed', '6 April 1984\ncoup attempt\ncrushed', '24 March 1985\nCPDM at\nBamenda'], { perRow: 3, boxW: 112, boxH: 60 }),
  'ahi-liberty-laws': flowSpec('Crisis and multi-party politics', ['1987\neconomic\ncrisis', '1988\nIMF\nprogramme', 'Feb 1990\nYondo Black\narrested', '26 May 1990\nSDF launched\nin Bamenda', 'Dec 1990\nliberty laws', '1992\nmulti-party\nelections'], { perRow: 3, boxW: 108, boxH: 58 }),

  // ---------- decolonisation ----------
  'ahi-decol-factors': treeSpec('Why Africa was decolonised', 'Decolonisation', [
    { name: 'Internal', items: ['educated elites', 'ex-servicemen', 'unions, strikes', 'mass parties, press'] },
    { name: 'External', items: ['war weakens empires', 'Atlantic Charter', 'UN, superpowers', 'Asia, Bandung'] },
  ], { colW: 156 }),
  'ahi-decol-timeline': {
    title: 'Decolonisation: key dates',
    w: 360,
    h: 194,
    art: DecolArt,
    labels: [],
    facts: [
      'India and Pakistan became independent in 1947, an example for Africa.',
      'France was defeated at Dien Bien Phu in Vietnam in 1954.',
      'The Bandung Conference of 1955 condemned colonialism.',
      'Ghana became independent on 6 March 1957.',
      'Guinea voted no in 1958 and became independent at once.',
      'In 1960, the year of Africa, seventeen states became independent, Cameroon first.',
      'Algeria became independent in 1962 after eight years of war.',
      'Kenya became independent in December 1963, the year the OAU was founded.',
    ],
  },
  'ahi-ghana': flowSpec('The Gold Coast to Ghana', ['1947\nUGCC\n(Danquah)', '28 Feb 1948\nAccra riots', 'June 1949\nNkrumah\nfounds CPP', 'Jan 1950\nPositive\nAction', 'Feb 1951\nCPP wins;\nNkrumah freed', '6 March 1957\nGhana\nindependent'], { perRow: 3, boxW: 108, boxH: 58 }),
  'ahi-decol-models': columnsSpec('Three paths to independence', [
    { head: 'Ghana (1957)', items: ['no settlers', 'CPP, elections', 'Positive Action', 'negotiated'] },
    { head: 'Algeria (1962)', items: ['a million settlers', 'FLN, from 1954', 'de Gaulle, 1958', 'Evian, 1962'] },
    { head: 'Kenya (1963)', items: ['settler land', 'Mau Mau', 'emergency 1952', 'Lancaster House'] },
  ], { colW: 112 }),

  // ---------- Pan-Africanism ----------
  'ahi-panafrica': flowSpec('Pan-Africanism to the OAU', ['1900\nWilliams:\nLondon', '1919\nDu Bois:\nParis Congress', '1945\nManchester\nCongress', '1958\nAccra\nconferences', '1960 to 1961\nCasablanca,\nMonrovia', '25 May 1963\nOAU, 32 states'], { perRow: 3, boxW: 108, boxH: 58 }),
  'ahi-oau-au': columnsSpec('From the OAU to the AU', [
    { head: 'OAU (1963)', items: ['Addis Ababa', 'non-interference', 'colonial borders', 'Liberation Committee', 'no army'] },
    { head: 'AU (2002)', items: ['Durban launch', 'Article 4(h)', 'Peace and Security', 'Pan-African Parliament', 'AU Commission'] },
  ], { colW: 150, arrow: true }),

  // ---------- the Middle East ----------
  'ahi-middleeast': flowSpec('Palestine to Israel (1897 to 1948)', ['1897\nZionist\nCongress, Basle', '2 Nov 1917\nBalfour\nDeclaration', '1922\nBritish\nmandate', '1936 to 1939\nArab revolt', '29 Nov 1947\nUN partition\nplan', '14 May 1948\nIsrael\nproclaimed'], { perRow: 3, boxW: 108, boxH: 58 }),
  'ahi-arab-israeli': flowSpec('Wars and peace (1956 to 1979)', ['1956\nSuez\nCrisis', '1964\nPLO\nfounded', 'June 1967\nSix-Day War;\nResolution 242', 'Oct 1973\nYom Kippur;\noil embargo', 'Sep 1978\nCamp David', 'March 1979\nEgypt-Israel\ntreaty'], { perRow: 3, boxW: 108, boxH: 58 }),

  // ---------- apartheid ----------
  'ahi-apartheid': treeSpec('The apartheid laws', 'National Party, 1948', [
    { name: 'Classify', items: ['Population', 'Registration 1950'] },
    { name: 'Separate', items: ['Mixed Marriages', 'Group Areas', 'Amenities 1953'] },
    { name: 'Control', items: ['pass laws', 'Bantu Education', 'Communism Act'] },
    { name: 'Homelands', items: ['Bantustans', '1959 Act', 'Transkei 1976'] },
  ], { colW: 96 }),
  'ahi-apartheid-end': flowSpec('Resistance to the 1994 election', ['1952\nDefiance\nCampaign', '1955\nFreedom\nCharter', '21 March 1960\nSharpeville', '1964\nRivonia:\nlife sentences', '16 June 1976\nSoweto', '1990, 1994\nMandela freed;\nelection'], { perRow: 3, boxW: 108, boxH: 58 }),

  // ---------- essay strategy ----------
  'ahi-essay-map': flowSpec('From question to thesis map', ['Decode the\nquestion', 'List the\nfactors', 'Decide your\nanswer', 'Write the\nthesis map', 'Spread the\nevidence'], { perRow: 3, boxW: 108, boxH: 52 }),
  'ahi-judgement': flowSpec('An analytical paragraph', ['Point:\nanswers the\nquestion', 'Evidence:\nprecise', 'Explanation:\nhow and why', 'Link:\nmini-judgement'], { perRow: 2, boxW: 128, boxH: 56, note: 'Then weigh factors, counter-argue and conclude.' }),

  // ---------- the final term ----------
  'ahi-final-term': flowSpec('The final term before the GCE', ['Paper 1\ndrills', 'Essay\nclinics', 'Timed mock\n(GCE rules)', 'Remediation\nfrom reports', 'The GCE\nin June'], { perRow: 3, boxW: 108 }),
  'ahi-mock-review': cycleSpec('Learning from the mock', ['Sit the mock', 'Mark against\nthe criteria', 'Group errors\nby type', 'Fix the most\nfrequent', 'Rewrite one\nessay'], { centre: 'remediation' }),
};
