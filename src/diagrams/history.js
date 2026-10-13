// History figures for Forms 4 and 5: pre-colonial societies, the 1884
// annexation, German rule, the Kamerun campaign, the mandate and trusteeship,
// nationalism, independence, British Cameroons politics, the 1961 plebiscite
// (drawn to scale), the federation and constitutions, the world wars, the
// League and the UN, the dictatorships, the Cold War, decolonisation, the OAU
// and AU, and the GCE year.
import { G, Line, Rect } from 'react-native-svg';
import { Txt } from './Diagram';
import { columnsSpec, flowSpec, treeSpec } from './charts';

const O = '#33414d';
const MUTED = '#6b7a88';
const CMR = '#2f7d4f';
const NGA = '#1f6fb2';

// ---------- the 1961 plebiscite results, bars to scale ----------
const PLEB = [
  { area: 'Southern', side: 'Cameroon', votes: 233571 },
  { area: 'Cameroons', side: 'Nigeria', votes: 97741 },
  { area: 'Northern', side: 'Nigeria', votes: 146296 },
  { area: 'Cameroons', side: 'Cameroon', votes: 97659 },
];
const fmt = (n) => String(n).replace(/\B(?=(\d{3})+(?!\d))/g, ',');

function PlebisciteArt() {
  const x0 = 96;
  const scale = 170 / 240000; // px per vote; 240,000 votes = 170 px
  const rowY = [30, 52, 98, 120];
  return (
    <G>
      <Line x1={x0} y1={18} x2={x0} y2={134} stroke={O} strokeWidth={1.2} />
      {PLEB.map((r, i) => {
        const w = r.votes * scale;
        const fill = r.side === 'Cameroon' ? CMR : NGA;
        return (
          <G key={i}>
            <Rect x={x0} y={rowY[i] - 8} width={w} height={16} rx={2} fill={fill} />
            <Txt x={x0 + w + 6} y={rowY[i] + 4} size={9} anchor="start" fill={O}>
              {fmt(r.votes)}
            </Txt>
          </G>
        );
      })}
      <Txt x={x0 - 8} y={38} size={9.5} anchor="end" weight="700" fill={O}>
        Southern
      </Txt>
      <Txt x={x0 - 8} y={50} size={9.5} anchor="end" weight="700" fill={O}>
        Cameroons
      </Txt>
      <Txt x={x0 - 8} y={106} size={9.5} anchor="end" weight="700" fill={O}>
        Northern
      </Txt>
      <Txt x={x0 - 8} y={118} size={9.5} anchor="end" weight="700" fill={O}>
        Cameroons
      </Txt>
      <Rect x={60} y={152} width={12} height={10} rx={2} fill={CMR} />
      <Txt x={78} y={161} size={9} anchor="start" fill={O}>
        join the Republic of Cameroon
      </Txt>
      <Rect x={60} y={170} width={12} height={10} rx={2} fill={NGA} />
      <Txt x={78} y={179} size={9} anchor="start" fill={O}>
        join the Federation of Nigeria
      </Txt>
      <Txt x={170} y={198} size={8.5} fill={MUTED}>
        Votes cast on 11 February 1961 (bars drawn to scale)
      </Txt>
    </G>
  );
}

export const HISTORY = {
  // ---------- Form 4 ----------
  'hist-precolonial': columnsSpec('Pre-colonial societies of Cameroon', [
    { head: 'Lamidats (North)', items: ['Lamido, Islamic', 'council, Alkali', 'Sharia, zakat', 'cattle, trade'] },
    { head: 'Fondoms (Grassfields)', items: ['Fon, sacred ruler', 'Kwifon checks him', 'notables, nchindas', 'farming, crafts'] },
    { head: 'Segmentary (forest)', items: ['no central ruler', 'elders, lineages', 'consensus', 'farming, hunting'] },
  ], { colW: 120 }),
  'hist-annexation': flowSpec('The German annexation of 1884', ['1879, 1881\nkings ask Britain\nfor protection', 'Britain\ndelays', '12 July 1884\ntreaty with\nWoermann, J&T', '14 July 1884\nNachtigal raises\nGerman flag', '19 July 1884\nHewett arrives:\ntoo late'], { perRow: 3, boxW: 112, boxH: 60 }),
  'hist-german-rule': columnsSpec('German rule in Kamerun (1884 to 1916)', [
    { head: 'Administration', items: ['governors, Buea 1901', 'districts, stations', 'Schutztruppe'] },
    { head: 'Exploitation', items: ['plantations', 'concessions', 'forced labour, tax'] },
    { head: 'Resistance', items: ['Douala, Bakweri', 'Mankon, Bulu, Nso', 'Manga Bell 1914'] },
  ], { colW: 118 }),
  'hist-ww1-cameroon': flowSpec('The Kamerun campaign and partition', ['Aug 1914\nwar reaches\nKamerun', '27 Sep 1914\nDouala falls', '1 Jan 1916\nYaoundé falls', 'Feb 1916\nMora surrenders', '1916 Picot line\n1919 Milner-Simon', '1922\nLeague mandates'], { perRow: 3, boxW: 112, boxH: 56 }),
  'hist-mandate-compare': columnsSpec('Mandate rule compared', [
    { head: 'British Cameroons', items: ['part of Nigeria', 'indirect rule', 'native authorities', 'neglected'] },
    { head: 'French Cameroun', items: ['capital Yaoundé', 'assimilation', 'indigénat, prestation', 'more investment'] },
  ], { colW: 160 }),
  'hist-interwar': flowSpec('Cameroon and the crises of 1919 to 1945', ['1924\nGerman planters\nbuy back estates', '1930s\nNazi colonial\nclaims', '1938\nJEUCAFRA\nopposes return', '27 Aug 1940\nLeclerc: Douala\njoins Free France', '1944\nBrazzaville\nConference', '1946\nCDC; end of\nindigénat'], { perRow: 3, boxW: 112, boxH: 60 }),
  'hist-mandate-trust': columnsSpec('Mandate and trusteeship', [
    { head: 'Feature', items: ['organisation', 'supervisor', 'goal', 'visits', 'petitions'] },
    { head: 'Mandate (1922)', items: ['League', 'Mandates Commission', 'well-being', 'none', 'through the power'] },
    { head: 'Trusteeship (1946)', items: ['UN', 'Trusteeship Council', 'self-government', 'visiting missions', 'direct to the UN'] },
  ], { colW: 116 }),
  'hist-nationalism': treeSpec('The rise of nationalism in French Cameroun', 'Nationalism after 1945', [
    { name: 'Causes', items: ['war veterans', 'UN trusteeship', 'educated elite', 'grievances'] },
    { name: 'The UPC', items: ['founded 1948', 'reunification', 'independence', 'petitions to UN'] },
    { name: 'Repression', items: ['May 1955 riots', 'banned July 1955', 'maquis', 'Um Nyobè killed 1958'] },
  ], { colW: 118 }),
  'hist-road-1960': flowSpec('The road to independence (French Cameroun)', ['June 1956\nLoi-cadre', 'Dec 1956\nATCAM elected', 'May 1957\nMbida Prime\nMinister', 'Feb 1958\nAhidjo Prime\nMinister', '1 Jan 1960\nindependence'], { perRow: 3, boxW: 110, boxH: 56 }),
  'hist-parties-bc': columnsSpec('Parties in Southern Cameroons', [
    { head: 'KNC (1953)', items: ['Endeley', 'association', 'with Nigeria'] },
    { head: 'KNDP (1955)', items: ['Foncha', 'secession and', 'reunification'] },
    { head: 'KPP', items: ['Kale, Mbile', 'merged with KNC', 'as CPNC (1960)'] },
    { head: 'OK (1957)', items: ['Ntumazah', 'close to the', 'UPC'] },
  ], { colW: 96 }),
  'hist-plebiscite': {
    title: 'The plebiscite of 11 February 1961',
    w: 340,
    h: 206,
    art: PlebisciteArt,
    labels: [],
    facts: ['Southern Cameroons voted 233,571 to 97,741 to join the Republic of Cameroon, and reunified on 1 October 1961.', 'Northern Cameroons voted 146,296 to 97,659 to join Nigeria, and became part of Nigeria on 1 June 1961.', 'The bars are drawn to the same scale, so their lengths can be compared directly.'],
  },
  'hist-timeline-1884-1961': flowSpec('Cameroon from 1884 to 1961', ['1884\nGerman\nannexation', '1914 to 1916\nwar and\npartition', '1922\nLeague\nmandates', '1946\nUN\ntrusteeship', '1948\nUPC\nfounded', '1960\nindependence', '1961\nplebiscite and\nreunification'], { perRow: 4, boxW: 86, boxH: 58 }),

  // ---------- Form 5 ----------
  'hist-gce-0560': columnsSpec('GCE History (0560)', [
    { head: 'Paper 1 (1½ h)', items: ['multiple choice', 'dates, places', 'treaties, leaders', 'acronyms'] },
    { head: 'Paper 2 (2½ h)', items: ['essays', 'A: Cameroon', 'B: Africa', 'C: World'] },
  ], { colW: 156 }),
  'hist-federation': treeSpec('The Federal Republic of Cameroon (1961 to 1972)', 'Federal government (Yaoundé)', [
    { name: 'Federal level', items: ['President Ahidjo', 'Vice-President', 'Federal Assembly'] },
    { name: 'West Cameroon\n(Buea)', items: ['Prime Minister', 'House of Assembly', 'House of Chiefs'] },
    { name: 'East Cameroon\n(Yaoundé)', items: ['Prime Minister', 'Legislative', 'Assembly'] },
  ], { colW: 118 }),
  'hist-constitutions': flowSpec('Cameroon’s political path since 1961', ['1 Oct 1961\nFederal Republic', '1 Sep 1966\nCNU single party', '20 May 1972\nUnited Republic', '1984\nRepublic of\nCameroon', '1985\nCPDM', 'Dec 1990\nmulti-party laws'], { perRow: 3, boxW: 112, boxH: 56 }),
  'hist-ww1-causes': treeSpec('Causes of the First World War', 'War in 1914', [
    { name: 'Militarism', items: ['arms race', 'naval rivalry'] },
    { name: 'Alliances', items: ['Triple Alliance', 'Triple Entente'] },
    { name: 'Imperialism', items: ['colonial rivalry', 'Morocco crises'] },
    { name: 'Nationalism', items: ['Balkans', 'Sarajevo, 1914'] },
  ], { colW: 92 }),
  'hist-league': columnsSpec('The League of Nations (1920 to 1946)', [
    { head: 'Organs', items: ['Assembly', 'Council', 'Secretariat', 'Court, ILO'] },
    { head: 'Successes', items: ['Åland Islands 1921', 'Upper Silesia 1921', 'Greece-Bulgaria 1925', 'refugees, health'] },
    { head: 'Failures', items: ['Manchuria 1931', 'Abyssinia 1935', 'no USA, no army', 'unanimity'] },
  ], { colW: 120 }),
  'hist-totalitarian': columnsSpec('Fascist Italy and Nazi Germany', [
    { head: 'Mussolini', items: ['March on Rome 1922', 'dictator by 1926', 'corporate state', 'Abyssinia 1935'] },
    { head: 'Shared features', items: ['one party, one leader', 'propaganda', 'secret police', 'expansion by force'] },
    { head: 'Hitler', items: ['Chancellor 1933', 'Enabling Act', 'racism, Holocaust', 'Munich 1938'] },
  ], { colW: 120 }),
  'hist-un-organs': treeSpec('The United Nations (1945)', 'UN Charter, 1945', [
    { name: 'General\nAssembly', items: ['all members', 'one vote each'] },
    { name: 'Security\nCouncil', items: ['5 permanent', 'with veto', '10 elected'] },
    { name: 'ECOSOC and\nTrusteeship', items: ['development', 'trust', 'territories'] },
    { name: 'Court and\nSecretariat', items: ['ICJ, The Hague', 'Secretary-', 'General'] },
  ], { colW: 92 }),
  'hist-cold-war': columnsSpec('The Cold War: two blocs', [
    { head: 'USA and the West', items: ['capitalism', 'Truman Doctrine', 'Marshall Plan', 'NATO (1949)'] },
    { head: 'USSR and the East', items: ['communism', 'Cominform', 'COMECON (1949)', 'Warsaw Pact (1955)'] },
  ], { colW: 156, arrow: true }),
  'hist-decolonisation': columnsSpec('Roads to independence', [
    { head: 'Ghana (1957)', items: ['Nkrumah, CPP', 'Positive Action', 'elections', 'negotiated'] },
    { head: 'Algeria (1962)', items: ['FLN war', 'from 1954', 'many settlers', 'Évian Accords'] },
    { head: 'Kenya (1963)', items: ['Mau Mau', 'from 1952', 'White Highlands', 'Kenyatta'] },
  ], { colW: 116 }),
  'hist-oau-au': columnsSpec('From the OAU to the African Union', [
    { head: 'OAU (1963)', items: ['Addis Ababa', '32 founding states', 'end colonialism', 'non-interference'] },
    { head: 'AU (2002)', items: ['launched in Durban', 'AU Commission', 'Pan-African Parliament', 'may intervene'] },
  ], { colW: 156, arrow: true }),
  'hist-mcq-steps': flowSpec('History Paper 1: answering an item', ['Read the\nwhole stem', 'Check the\ndate, place,\nperson', 'Watch for\nNOT, EXCEPT', 'Eliminate\nwrong options', 'Choose the\nprecise answer'], { perRow: 3, boxW: 108, boxH: 56 }),
  'hist-essay-chain': flowSpec('A chronological chain (Section A)', ['Trusteeship\n(1946)', 'Nationalism\nand the UPC', 'Independence\n(1960)', 'Plebiscite\n(1961)', 'Reunification\n(1 Oct 1961)'], { perRow: 3, boxW: 108, note: 'Link each step with "this led to" or "as a result".' }),
  'hist-final-term': flowSpec('The final term before the GCE', ['Paper 1\ndrills', 'Paper 2\nessay layouts', 'Mock\nexamination', 'Correction and\nremediation', 'The GCE\n(0560)'], { perRow: 3, boxW: 108 }),
};
