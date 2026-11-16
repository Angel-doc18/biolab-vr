// Commerce figures for Form 3: the scope of commerce, barter and money, wants
// and scarcity, utility, the branches and factors of production, capital,
// occupations, the division of labour, home trade, the chain of distribution,
// small and large retailers, e-commerce, the wholesaler, the documents of a
// sale with a drawn invoice, credit and debit notes, sole traders,
// partnerships and companies, banking and payments, transport, warehousing,
// advertising, consumer protection, the revision charts and a drawn cash book
// for the school enterprise project.
import { G, Line, Rect } from 'react-native-svg';
import { Txt } from './Diagram';
import { columnsSpec, flowSpec, treeSpec } from './charts';

const O = '#33414d';
const MUTED = '#6b7a88';
const BLUE = '#1f6fb2';
const BAND = '#e6eef8';

const drawn = (title, w, h, art, facts, points) => ({ title, w, h, art, labels: [], facts, ...(points ? { points } : {}) });

// ---------- a worked invoice ----------
function InvoiceArt() {
  const right = 314;
  const mid = 230;
  const row = (y, qty, desc, unit, amount) => (
    <G key={y}>
      <Txt x={26} y={y} size={9} anchor="start" fill={O}>
        {qty}
      </Txt>
      <Txt x={58} y={y} size={9} anchor="start" fill={O}>
        {desc}
      </Txt>
      <Txt x={mid} y={y} size={9} anchor="end" fill={O}>
        {unit}
      </Txt>
      <Txt x={right} y={y} size={9} anchor="end" fill={O}>
        {amount}
      </Txt>
    </G>
  );
  return (
    <G>
      <Rect x={10} y={8} width={320} height={218} rx={6} fill="#fbfcfe" stroke={O} strokeWidth={1.2} />
      <Txt x={20} y={29} size={12} weight="700" anchor="start" fill={BLUE}>
        INVOICE
      </Txt>
      <Txt x={320} y={29} size={9} anchor="end" fill={O}>
        No. 0245
      </Txt>
      <Txt x={20} y={47} size={8.5} anchor="start" fill={O}>
        From: Mbah Wholesalers, Bafoussam
      </Txt>
      <Txt x={20} y={61} size={8.5} anchor="start" fill={O}>
        To: Nkeng Stores, Dschang
      </Txt>
      <Txt x={320} y={47} size={8.5} anchor="end" fill={O}>
        Date: 12 March 2027
      </Txt>
      <Txt x={320} y={61} size={8.5} anchor="end" fill={O}>
        Terms: 30 days
      </Txt>
      <Rect x={18} y={70} width={304} height={18} fill={BAND} />
      <Txt x={26} y={83} size={8.5} weight="700" anchor="start" fill={O}>
        Qty
      </Txt>
      <Txt x={58} y={83} size={8.5} weight="700" anchor="start" fill={O}>
        Description
      </Txt>
      <Txt x={mid} y={83} size={8.5} weight="700" anchor="end" fill={O}>
        Unit price
      </Txt>
      <Txt x={right} y={83} size={8.5} weight="700" anchor="end" fill={O}>
        Amount (FCFA)
      </Txt>
      {row(104, '20', 'Cartons of soap', '6,500', '130,000')}
      {row(122, '15', 'Bags of rice', '14,000', '210,000')}
      <Line x1={18} y1={131} x2={322} y2={131} stroke={MUTED} strokeWidth={0.8} />
      <Txt x={mid} y={147} size={9} anchor="end" fill={O}>
        Total
      </Txt>
      <Txt x={right} y={147} size={9} anchor="end" fill={O}>
        340,000
      </Txt>
      <Txt x={mid} y={163} size={9} anchor="end" fill={O}>
        Less 10% trade discount
      </Txt>
      <Txt x={right} y={163} size={9} anchor="end" fill={O}>
        34,000
      </Txt>
      <Line x1={250} y1={171} x2={322} y2={171} stroke={O} strokeWidth={0.8} />
      <Txt x={mid} y={187} size={9.5} weight="700" anchor="end" fill={BLUE}>
        Net amount due
      </Txt>
      <Txt x={right} y={187} size={9.5} weight="700" anchor="end" fill={BLUE}>
        306,000
      </Txt>
      <Line x1={250} y1={193} x2={322} y2={193} stroke={O} strokeWidth={0.8} />
      <Line x1={250} y1={196} x2={322} y2={196} stroke={O} strokeWidth={0.8} />
      <Txt x={20} y={215} size={8} anchor="start" fill={MUTED}>
        E&OE (errors and omissions excepted)
      </Txt>
    </G>
  );
}

// ---------- the school enterprise cash book ----------
const CASH = [
  ['Capital from the class', '26,000', '', '26,000'],
  ['Materials', '', '18,000', '8,000'],
  ['Empty bottles', '', '6,000', '2,000'],
  ['Labels', '', '2,000', '0'],
  ['Sales, week 1', '25,000', '', '25,000'],
  ['Sales, week 2', '15,000', '', '40,000'],
];

function CashbookArt() {
  const cIn = 204;
  const cOut = 262;
  const cBal = 324;
  const top = 44;
  const step = 20;
  return (
    <G>
      <Rect x={8} y={8} width={324} height={176} rx={6} fill="#fbfcfe" stroke={O} strokeWidth={1.2} />
      <Rect x={8} y={8} width={324} height={22} rx={6} fill={BAND} />
      <Txt x={16} y={23} size={8.5} weight="700" anchor="start" fill={O}>
        Details
      </Txt>
      <Txt x={cIn} y={23} size={8.5} weight="700" anchor="end" fill={O}>
        In (FCFA)
      </Txt>
      <Txt x={cOut} y={23} size={8.5} weight="700" anchor="end" fill={O}>
        Out (FCFA)
      </Txt>
      <Txt x={cBal} y={23} size={8.5} weight="700" anchor="end" fill={O}>
        Balance
      </Txt>
      {CASH.map(([d, i, o, b], k) => {
        const y = top + k * step;
        return (
          <G key={d}>
            <Txt x={16} y={y} size={9} anchor="start" fill={O}>
              {d}
            </Txt>
            <Txt x={cIn} y={y} size={9} anchor="end" fill={O}>
              {i}
            </Txt>
            <Txt x={cOut} y={y} size={9} anchor="end" fill={O}>
              {o}
            </Txt>
            <Txt x={cBal} y={y} size={9} anchor="end" fill={BLUE}>
              {b}
            </Txt>
            <Line x1={14} y1={y + 6} x2={326} y2={y + 6} stroke="#d9e1ea" strokeWidth={0.7} />
          </G>
        );
      })}
      <Line x1={14} y1={158} x2={326} y2={158} stroke={O} strokeWidth={0.9} />
      <Txt x={16} y={174} size={9} weight="700" anchor="start" fill={O}>
        Totals
      </Txt>
      <Txt x={cIn} y={174} size={9} weight="700" anchor="end" fill={O}>
        66,000
      </Txt>
      <Txt x={cOut} y={174} size={9} weight="700" anchor="end" fill={O}>
        26,000
      </Txt>
      <Txt x={cBal} y={174} size={9} weight="700" anchor="end" fill={BLUE}>
        40,000
      </Txt>
    </G>
  );
}

export const COMMERCE_F3 = {
  // ---------- Term 1 ----------
  'comm3-scope': treeSpec('The scope of commerce', 'Commerce', [
    { name: 'Trade:\nhome trade', items: ['wholesale', 'retail'] },
    { name: 'Trade:\nforeign trade', items: ['import', 'export', 'entrepôt'] },
    { name: 'Aids to\ntrade', items: ['banking, insurance', 'transport', 'warehousing', 'advertising', 'communication'] },
  ], { colW: 112 }),
  'comm3-barter-money': columnsSpec('From barter to money', [
    { head: 'Problems of barter', items: ['double coincidence', 'no measure of value', 'indivisible goods', 'hard to store wealth'] },
    { head: 'Money solves them', items: ['accepted by all', 'measures value', 'divisible', 'can be saved'] },
  ], { colW: 150, arrow: true }),
  'comm3-scarcity': flowSpec('Wants, scarcity and choice', ['Unlimited\nwants', 'Scarce\nresources', 'Choice', 'Scale of\npreference', 'Opportunity\ncost'], { boxW: 104 }),
  'comm3-wants': columnsSpec('Classes of wants', [
    { head: 'Necessities', items: ['food, water', 'clothing', 'shelter', 'basic health care'] },
    { head: 'Comforts', items: ['a fan', 'a mattress', 'a television', 'a gas cooker'] },
    { head: 'Luxuries', items: ['jewellery', 'an expensive car', 'holidays abroad'] },
  ], { colW: 110 }),
  'comm3-utility': columnsSpec('Four kinds of utility', [
    { head: 'Form', items: ['manufacturing', 'palm fruit', 'into oil'] },
    { head: 'Place', items: ['transport', 'onions to', 'Douala'] },
    { head: 'Time', items: ['storage', 'maize until', 'the lean season'] },
    { head: 'Possession', items: ['trade', 'shop to', 'customer'] },
  ], { colW: 96 }),
  'comm3-production-branches': treeSpec('The branches of production', 'Production', [
    { name: 'Primary', items: ['extractive:', 'mining, fishing', 'genetic:', 'farming, rearing'] },
    { name: 'Secondary', items: ['manufacturing', 'construction'] },
    { name: 'Tertiary', items: ['commercial services', 'direct services'] },
  ], { colW: 112 }),
  'comm3-factors': columnsSpec('Factors of production and rewards', [
    { head: 'Factor', items: ['land', 'labour', 'capital', 'entrepreneur'] },
    { head: 'Reward', items: ['rent', 'wages, salaries', 'interest', 'profit'] },
  ], { colW: 130, arrow: true }),
  'comm3-capital': treeSpec('Kinds of capital', 'Capital', [
    { name: 'Fixed', items: ['machines', 'buildings', 'vehicles'] },
    { name: 'Working', items: ['stock', 'raw materials', 'cash'] },
    { name: 'Social', items: ['roads', 'schools', 'hospitals'] },
  ], { colW: 104 }),
  'comm3-occupations': treeSpec('Classes of occupations', 'Occupations', [
    { name: 'Industrial', items: ['extractive', 'manufacturing', 'construction'] },
    { name: 'Commercial', items: ['trade', 'aids to trade'] },
    { name: 'Direct\nservices', items: ['professional', 'personal', 'public'] },
  ], { colW: 104 }),
  'comm3-specialisation': columnsSpec('Division of labour', [
    { head: 'Advantages', items: ['skill and speed', 'time saved', 'machines used', 'more output'] },
    { head: 'Disadvantages', items: ['monotony', 'loss of craft skill', 'one stop halts all', 'interdependence'] },
  ], { colW: 140 }),

  // ---------- Term 2 ----------
  'comm3-hometrade': columnsSpec('Wholesale and retail compared', [
    { head: 'Wholesale', items: ['sells in bulk', 'to retailers', 'large capital', 'big stores', 'little display'] },
    { head: 'Retail', items: ['sells small amounts', 'to consumers', 'less capital', 'near homes', 'attractive display'] },
  ], { colW: 140 }),
  'comm3-chain': flowSpec('The usual chain of distribution', ['Producer', 'Wholesaler', 'Retailer', 'Consumer'], { boxW: 86, boxH: 40, perRow: 4, note: 'Each middleman adds a cost and a service.' }),
  'comm3-small-retail': treeSpec('Small-scale retailers', 'Small retailers', [
    { name: 'Itinerant', items: ['hawkers', 'pedlars', 'mobile shops'] },
    { name: 'Fixed', items: ['market stalls', 'kiosks, call boxes', 'roadside traders', 'unit shops'] },
  ], { colW: 140 }),
  'comm3-unitshop': columnsSpec('The unit shop', [
    { head: 'Why it survives', items: ['near customers', 'personal service', 'credit', 'long hours', 'tiny quantities'] },
    { head: 'Its problems', items: ['little capital', 'higher prices', 'bad debts', 'heavy workload', 'little variety'] },
  ], { colW: 140 }),
  'comm3-large-retail': columnsSpec('Large-scale retailers', [
    { head: 'Department\nstore', items: ['departments', 'one roof', 'wide variety', 'many services'] },
    { head: 'Supermarket', items: ['self-service', 'food, household', 'checkout', 'low prices'] },
    { head: 'Chain store', items: ['many branches', 'same name, goods', 'head office buys', 'bulk buying'] },
  ], { colW: 110 }),
  'comm3-large-vs-small': columnsSpec('Large and small retailers', [
    { head: 'Large shops win on', items: ['price (bulk buying)', 'variety', 'advertising', 'specialist staff'] },
    { head: 'Small shops win on', items: ['nearness', 'credit', 'personal service', 'long hours'] },
  ], { colW: 140 }),
  'comm3-ecommerce': flowSpec('An online sale', ['Seller shows\ngoods online', 'Buyer places\nan order', 'Payment: mobile\nmoney, card, cash', 'Goods\ndelivered', 'Buyer confirms\nreceipt'], { boxW: 112 }),
  'comm3-ecom-impact': columnsSpec('E-commerce: gains and risks', [
    { head: 'Benefits', items: ['shop any time', 'compare prices', 'wider market', 'low start-up cost'] },
    { head: 'Risks', items: ['fake sellers', 'goods unseen', 'delivery costs', 'poor network'] },
    { head: 'Stay safe', items: ['check reviews', 'pay on delivery', 'never share PIN', 'keep proof'] },
  ], { colW: 110 }),
  'comm3-wholesaler': columnsSpec('Functions of the wholesaler', [
    { head: 'To the manufacturer', items: ['buys in bulk', 'stores goods', 'pays promptly', 'bears risk', 'market information'] },
    { head: 'To the retailer', items: ['breaks bulk', 'offers variety', 'gives credit', 'stores goods', 'gives advice'] },
  ], { colW: 150 }),
  'comm3-bypass': columnsSpec('Bypassing the wholesaler', [
    { head: 'Bypassed when', items: ['large retailers buy direct', 'makers have own shops', 'goods are perishable', 'goods made to order', 'goods are technical'] },
    { head: 'Survives because', items: ['small shops need it', 'its functions remain', 'cash and carry', 'phone orders delivered'] },
  ], { colW: 150 }),
  'comm3-documents': flowSpec('Documents of a home trade sale', ['Order\n(buyer)', 'Advice note\n(seller)', 'Goods and\ndelivery note', 'Invoice\n(seller)', 'Credit or\ndebit note', 'Payment'], { boxW: 104 }),
  'comm3-invoice': drawn('A worked invoice', 340, 234, InvoiceArt, [
    'The invoice is sent by the seller, Mbah Wholesalers, to the buyer, Nkeng Stores.',
    'Each line is quantity times unit price: 20 × 6,500 = 130,000 and 15 × 14,000 = 210,000 FCFA.',
    'The lines add up to a total of 340,000 FCFA.',
    'A 10% trade discount of 34,000 FCFA is taken off.',
    'The net amount due is 306,000 FCFA, payable within 30 days.',
    'E&OE means errors and omissions excepted: the seller may correct a mistake later.',
  ], [[80, 47], [272, 112], [272, 147], [272, 163], [272, 187], [40, 215]]),
  'comm3-notes': columnsSpec('Correcting an invoice', [
    { head: 'Credit note', items: ['debt goes down', 'goods returned', 'overcharge', 'short delivery', 'crates returned'] },
    { head: 'Debit note', items: ['debt goes up', 'undercharge', 'goods left off', 'charge forgotten'] },
  ], { colW: 140 }),
  'comm3-sole-partner': columnsSpec('Sole trader and partnership', [
    { head: 'Sole trader', items: ['one owner', 'own capital', 'unlimited liability', 'keeps all profit', 'quick decisions'] },
    { head: 'Partnership', items: ['2 or more owners', 'pooled capital', 'unlimited (general)', 'profit shared', 'decisions shared'] },
  ], { colW: 140 }),
  'comm3-soletrader': columnsSpec('The sole proprietorship', [
    { head: 'Advantages', items: ['easy to start', 'own boss', 'all the profit', 'personal contact', 'privacy'] },
    { head: 'Disadvantages', items: ['unlimited liability', 'little capital', 'heavy workload', 'no continuity', 'limited skills'] },
  ], { colW: 140 }),
  'comm3-partnership': treeSpec('Kinds of partner', 'Partners', [
    { name: 'Active', items: ['capital', 'manages', 'unlimited'] },
    { name: 'Sleeping', items: ['capital', 'no say', 'shares profit'] },
    { name: 'Limited', items: ['capital', 'no say', 'limited liability'] },
    { name: 'Nominal', items: ['name only', 'no capital'] },
  ], { colW: 96 }),
  'comm3-companies': columnsSpec('Private and public limited companies', [
    { head: 'Private (Ltd)', items: ['shares not public', 'few shareholders', 'family firms', 'limited liability'] },
    { head: 'Public (Plc)', items: ['shares to public', 'stock exchange', 'very large capital', 'publishes accounts'] },
  ], { colW: 140 }),
  'comm3-company-formation': flowSpec('Forming a company', ['Promoters\nagree', 'Memorandum\nand Articles', 'Registration', 'Shares sold\nfor capital', 'Business\nstarts'], { boxW: 104 }),

  // ---------- Term 3 ----------
  'comm3-bank-functions': treeSpec('What a commercial bank does', 'Commercial bank', [
    { name: 'Deposits', items: ['current', 'savings', 'fixed deposit'] },
    { name: 'Lending', items: ['loans', 'overdrafts'] },
    { name: 'Payments', items: ['cheques', 'transfers', 'cards'] },
    { name: 'Other', items: ['safekeeping', 'advice', 'foreign exchange'] },
  ], { colW: 96 }),
  'comm3-paymethods': columnsSpec('Simple means of payment', [
    { head: 'Cash', items: ['quick', 'accepted', 'risk of theft'] },
    { head: 'Cheque', items: ['drawer signs', 'bank pays', 'payee named'] },
    { head: 'Transfer', items: ['account to', 'account', 'no cash'] },
    { head: 'Mobile\nmoney', items: ['by phone', 'MTN, Orange', 'leaves record'] },
  ], { colW: 90 }),
  'comm3-transport-modes': columnsSpec('Modes of transport in Cameroon', [
    { head: 'Road', items: ['door to door', 'most used', 'flexible'] },
    { head: 'Rail', items: ['Camrail', 'Douala to', 'Ngaoundéré'] },
    { head: 'Air', items: ['Douala,', 'Nsimalen', 'fast, costly'] },
    { head: 'Water', items: ['Douala, Kribi,', 'Limbe ports', 'cheap, slow'] },
    { head: 'Pipeline', items: ['Chad to', 'Kribi', 'oil, gas'] },
  ], { colW: 80 }),
  'comm3-transport-choice': treeSpec('Choosing a mode of transport', 'Which mode?', [
    { name: 'Cost', items: ['charge against', 'value'] },
    { name: 'Speed', items: ['urgent,', 'perishable'] },
    { name: 'Goods', items: ['fragile, bulky,', 'valuable'] },
    { name: 'Distance', items: ['short: road', 'long: rail, sea'] },
    { name: 'Safety', items: ['damage,', 'theft'] },
  ], { colW: 84 }),
  'comm3-warehouse-roles': treeSpec('Why goods are warehoused', 'Warehousing', [
    { name: 'Time', items: ['seasonal goods', 'all year'] },
    { name: 'Prices', items: ['store in plenty', 'sell in scarcity'] },
    { name: 'Protection', items: ['rain, pests', 'theft, fire'] },
    { name: 'Preparation', items: ['grading', 'packing'] },
  ], { colW: 96 }),
  'comm3-warehouse-types': columnsSpec('Private, public and bonded', [
    { head: 'Private', items: ['manufacturers', 'wholesalers', 'retailers', 'own goods only'] },
    { head: 'Public', items: ['state, councils,', 'companies', 'space for hire'] },
    { head: 'Bonded', items: ['imported goods', 'customs control', 'duty paid on', 'removal'] },
  ], { colW: 110 }),
  'comm3-ad-roles': columnsSpec('Kinds of advertising', [
    { head: 'Informative', items: ['facts', 'price, place', 'new products'] },
    { head: 'Persuasive', items: ['one brand', 'slogans', 'famous faces'] },
    { head: 'Collective', items: ['whole product', 'paid by a group', 'of producers'] },
  ], { colW: 110 }),
  'comm3-ad-media': treeSpec('Advertising media', 'Media', [
    { name: 'Broadcast', items: ['television', 'radio', 'community radio'] },
    { name: 'Print', items: ['newspapers', 'magazines', 'posters'] },
    { name: 'Digital', items: ['websites', 'social media', 'SMS'] },
    { name: 'Promotion', items: ['free samples', 'price cuts', 'displays'] },
  ], { colW: 96 }),
  'comm3-exploitation': treeSpec('How consumers are cheated', 'Exploitation', [
    { name: 'Quantity', items: ['false weights', 'small measures'] },
    { name: 'Quality', items: ['adulteration', 'expired goods', 'fakes'] },
    { name: 'Price', items: ['hoarding', 'overpricing'] },
    { name: 'Information', items: ['false claims', 'no receipt'] },
  ], { colW: 96 }),
  'comm3-consumer-rights': columnsSpec('Consumer rights and protectors', [
    { head: 'Rights', items: ['safety', 'information', 'choice', 'redress', 'representation', 'education'] },
    { head: 'Protectors', items: ['the law (2011)', 'Ministry of Trade', 'ANOR', 'Public Health', 'associations', 'courts'] },
  ], { colW: 140 }),
  'comm3-review-production': flowSpec('Term 1 in one chain', ['Unlimited\nwants', 'Production\nadds utility', 'Factors and\nrewards', 'Specialised\noccupations', 'Trade:\ncommerce'], { boxW: 108 }),
  'comm3-answer-plan': columnsSpec('Command words', [
    { head: 'Word', items: ['define', 'state, list', 'explain', 'distinguish', 'calculate'] },
    { head: 'What to do', items: ['exact meaning', 'points only', 'point, why, example', 'differences, point by point', 'every step, with FCFA'] },
  ], { colW: 150, arrow: true }),
  'comm3-review-trade': treeSpec('Term 2 at a glance', 'Home trade and business', [
    { name: 'Retailers', items: ['small: hawkers,', 'unit shops', 'large: stores,', 'supermarkets'] },
    { name: 'Wholesalers', items: ['bulk buying', 'breaking bulk', 'cash and carry'] },
    { name: 'E-commerce', items: ['B2C, B2B, C2C', 'mobile money'] },
    { name: 'Business\nunits', items: ['sole trader', 'partnership', 'Ltd and Plc'] },
  ], { colW: 96 }),
  'comm3-invoice-check': flowSpec('Working an invoice', ['Quantity ×\nunit price', 'Add the\nlines', 'Less trade\ndiscount', 'Net amount', 'Less credit,\nplus debit'], { boxW: 104 }),
  'comm3-project-steps': flowSpec('Running a school enterprise', ['Choose a\nproduct', 'Market\nsurvey', 'Cost and\nprice', 'Raise\ncapital', 'Make and\nsell', 'Keep records,\nshare profit'], { boxW: 108 }),
  'comm3-cashbook': drawn('Cash book of the liquid soap project', 340, 192, CashbookArt, [
    'Money in: the class capital of 26,000 FCFA and sales of 25,000 and 15,000 FCFA.',
    'Money out: materials 18,000, bottles 6,000 and labels 2,000 FCFA.',
    'The balance after each line is the money left; it falls to 0 after the purchases.',
    'After the sales, the balance is 40,000 FCFA.',
    'Totals: 66,000 FCFA in and 26,000 FCFA out; the profit is 40,000 − 26,000 capital = 14,000 FCFA.',
  ], [[180, 44], [240, 84], [300, 104], [300, 144], [240, 174]]),
};
