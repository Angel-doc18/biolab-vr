// Commerce figures for Forms 4 and 5: the branches of commerce, channels of
// distribution, retail outlets, the wholesaler, the flow of documents between
// buyer and seller (drawn as two lanes), notes and statements, discounts,
// consumer protection, payments, advertising, trading calculations, banking,
// a drawn cheque with its crossing, foreign trade documents, transport,
// warehouses, insurance and the GCE year.
import { G, Line, Rect } from 'react-native-svg';
import { Head, Txt } from './Diagram';
import { columnsSpec, flowSpec, treeSpec } from './charts';

const O = '#33414d';
const MUTED = '#6b7a88';
const BUY = '#1f6fb2';
const SELL = '#2f7d4f';

// ---------- documents between buyer and seller ----------
const DOCS = [
  ['Letter of inquiry', 'B'],
  ['Quotation, catalogue', 'S'],
  ['Order', 'B'],
  ['Advice note', 'S'],
  ['Goods + delivery note', 'S'],
  ['Invoice', 'S'],
  ['Credit or debit note', 'S'],
  ['Statement of account', 'S'],
  ['Payment', 'B'],
  ['Receipt', 'S'],
];

function DocFlowArt() {
  const xB = 60;
  const xS = 280;
  const top = 40;
  const step = 17;
  return (
    <G>
      <Rect x={20} y={8} width={80} height={22} rx={6} fill="#e4eef8" stroke={BUY} strokeWidth={1.2} />
      <Txt x={60} y={23} size={10} weight="700" fill={BUY}>
        Buyer
      </Txt>
      <Rect x={240} y={8} width={80} height={22} rx={6} fill="#e3f0da" stroke={SELL} strokeWidth={1.2} />
      <Txt x={280} y={23} size={10} weight="700" fill={SELL}>
        Seller
      </Txt>
      <Line x1={xB} y1={30} x2={xB} y2={top + DOCS.length * step} stroke={MUTED} strokeWidth={1} strokeDasharray="3 3" />
      <Line x1={xS} y1={30} x2={xS} y2={top + DOCS.length * step} stroke={MUTED} strokeWidth={1} strokeDasharray="3 3" />
      {DOCS.map(([name, from], i) => {
        const y = top + i * step + 6;
        const toSeller = from === 'B';
        const x1 = toSeller ? xB + 2 : xS - 2;
        const x2 = toSeller ? xS - 2 : xB + 2;
        const c = toSeller ? BUY : SELL;
        return (
          <G key={name}>
            <Line x1={x1} y1={y} x2={x2} y2={y} stroke={c} strokeWidth={1.2} />
            <Head x={x2} y={y} dx={x2 - x1} dy={0} size={5} fill={c} />
            <Rect x={110} y={y - 7} width={120} height={12} fill="#ffffff" />
            <Txt x={170} y={y + 3} size={8.5} fill={O}>
              {`${i + 1}. ${name}`}
            </Txt>
          </G>
        );
      })}
    </G>
  );
}

// ---------- a cheque with a general crossing ----------
function ChequeArt() {
  const x0 = 14;
  const y0 = 14;
  const w = 312;
  const h = 128;
  const label = (x, y, t, anchor = 'start') => (
    <Txt x={x} y={y} size={7.5} anchor={anchor} fill={MUTED}>
      {t}
    </Txt>
  );
  return (
    <G>
      <Rect x={x0} y={y0} width={w} height={h} rx={6} fill="#f5f8fc" stroke={O} strokeWidth={1.2} />
      <Txt x={x0 + 62} y={y0 + 16} size={9.5} weight="700" anchor="start" fill={BUY}>
        COMMERCIAL BANK, DOUALA
      </Txt>
      {label(x0 + 62, y0 + 27, 'drawee (the bank)')}
      <Txt x={x0 + w - 10} y={y0 + 16} size={9} anchor="end" fill={O}>
        Date: 14 May 2026
      </Txt>
      <Line x1={x0 + 14} y1={y0 + h} x2={x0 + 38} y2={y0} stroke={SELL} strokeWidth={1.4} />
      <Line x1={x0 + 28} y1={y0 + h} x2={x0 + 52} y2={y0} stroke={SELL} strokeWidth={1.4} />
      <Txt x={x0 + 33} y={y0 + 70} size={8} weight="700" fill={SELL} rotate={-79}>
        & Co.
      </Txt>
      <Txt x={x0 + 96} y={y0 + 50} size={9.5} anchor="start" fill={O}>
        Pay: Bih Enterprises
      </Txt>
      {label(x0 + 96, y0 + 61, 'payee')}
      <Txt x={x0 + 96} y={y0 + 80} size={9} anchor="start" fill={O}>
        One hundred and fifty thousand francs CFA
      </Txt>
      {label(x0 + 96, y0 + 91, 'amount in words')}
      <Rect x={x0 + 226} y={y0 + 98} width={76} height={18} rx={3} fill="#ffffff" stroke={O} strokeWidth={1} />
      <Txt x={x0 + 264} y={y0 + 111} size={9.5} weight="700" fill={O}>
        150,000 FCFA
      </Txt>
      <Txt x={x0 + 96} y={y0 + 112} size={9.5} anchor="start" fill={O} italic>
        Ngwa P. (signed)
      </Txt>
      {label(x0 + 96, y0 + 123, 'drawer’s signature')}
      <Txt x={170} y={164} size={8.5} fill={SELL}>
        Two parallel lines: a general crossing.
      </Txt>
      <Txt x={170} y={176} size={8.5} fill={SELL}>
        The cheque must be paid into a bank account.
      </Txt>
    </G>
  );
}

export const COMMERCE = {
  // ---------- Form 4 ----------
  'comm-branches': treeSpec('The branches of commerce', 'Commerce', [
    { name: 'Home trade', items: ['retail', 'wholesale'] },
    { name: 'Foreign trade', items: ['import', 'export', 'entrepôt'] },
    { name: 'Aids to trade', items: ['banking, insurance', 'transport', 'communication', 'advertising, storage'] },
  ], { colW: 118 }),
  'comm-channels': columnsSpec('Channels of distribution', [
    { head: 'Traditional', items: ['producer', '↓ wholesaler', '↓ retailer', '↓ consumer'] },
    { head: 'Large retailer', items: ['producer', '↓ retailer', '↓ consumer'] },
    { head: 'Direct', items: ['producer', '↓ consumer'] },
    { head: 'Imported', items: ['producer', '↓ agent', '↓ wholesaler', '↓ retailer, consumer'] },
  ], { colW: 92 }),
  'comm-retail-small': columnsSpec('Small-scale retailers', [
    { head: 'Itinerant', items: ['hawkers', 'mobile shops', 'street vendors'] },
    { head: 'Fixed', items: ['market stalls', 'kiosks', 'unit shops'] },
    { head: 'Why they survive', items: ['personal service', 'credit, convenience', 'tiny quantities'] },
  ], { colW: 116 }),
  'comm-retail-large': columnsSpec('Large-scale retailers', [
    { head: 'Department store', items: ['many departments', 'one roof', 'services'] },
    { head: 'Supermarket', items: ['self-service', 'food, household', 'low prices'] },
    { head: 'Chain store', items: ['many branches', 'central buying', 'same layout'] },
    { head: 'Mail order, online', items: ['catalogue, website', 'delivery', 'pay on delivery'] },
  ], { colW: 92 }),
  'comm-wholesaler': columnsSpec('Functions of the wholesaler', [
    { head: 'To the producer', items: ['buys in bulk', 'stores goods', 'finances, pays fast', 'bears risk', 'market information'] },
    { head: 'To the retailer', items: ['breaks bulk', 'wide choice', 'gives credit', 'delivers', 'advice on products'] },
  ], { colW: 156 }),
  'comm-document-flow': {
    title: 'Documents between buyer and seller',
    w: 340,
    h: 216,
    art: DocFlowArt,
    labels: [],
    facts: ['The buyer sends the letter of inquiry, the order and the payment.', 'The seller sends the quotation, the advice note, the goods with a delivery note, the invoice, any credit or debit notes, the statement and the receipt.', 'Read the arrows from top to bottom: they follow one transaction in order.'],
  },
  'comm-notes': columnsSpec('Credit note and debit note', [
    { head: 'Credit note', items: ['sent by the seller', 'REDUCES the debt', 'overcharge, returns', 'often printed in red'] },
    { head: 'Debit note', items: ['sent by the seller', 'INCREASES the debt', 'undercharge', 'items left off invoice'] },
  ], { colW: 156 }),
  'comm-discounts': flowSpec('From list price to amount paid', ['List price', 'minus trade\ndiscount', 'Net invoice\nprice', 'minus cash discount\n(if paid promptly)', 'Amount paid'], { perRow: 3, boxW: 108, boxH: 50, note: 'Trade discount first, on the list price; cash discount second, on the net amount.' }),
  'comm-consumer': columnsSpec('Consumer exploitation and protection', [
    { head: 'Exploitation', items: ['hoarding', 'false weights', 'adulteration', 'expired goods', 'misleading adverts'] },
    { head: 'Protection', items: ['consumer law (2011)', 'Ministry of Trade', 'ANOR standards', 'consumer associations', 'informed consumers'] },
  ], { colW: 156 }),
  'comm-payments': columnsSpec('Methods of payment', [
    { head: 'Cash', items: ['legal tender', 'BEAC notes, coins', 'quick but risky'] },
    { head: 'Postal', items: ['money orders', 'postal orders', 'CAMPOST'] },
    { head: 'Bank', items: ['cheques', 'transfers, cards', 'standing orders'] },
    { head: 'Mobile', items: ['MoMo', 'Orange Money', 'keep PIN secret'] },
  ], { colW: 90 }),
  'comm-advertising': columnsSpec('Advertising: types and media', [
    { head: 'Types', items: ['informative', 'persuasive', 'competitive', 'generic'] },
    { head: 'Media', items: ['radio', 'television', 'press, posters', 'internet, social media'] },
    { head: 'Choice depends on', items: ['cost', 'target audience', 'product', 'message'] },
  ], { colW: 112 }),
  'comm-trading': columnsSpec('Trading calculations', [
    { head: 'Measure', items: ['cost of goods sold', 'gross profit', 'net profit', 'mark-up', 'margin', 'rate of turnover'] },
    { head: 'Formula', items: ['opening + purchases − closing', 'sales − COGS', 'GP − expenses', 'GP ÷ cost × 100', 'GP ÷ selling price × 100', 'COGS ÷ average stock'] },
  ], { colW: 156 }),
  'comm-transaction': flowSpec('One complete transaction', ['Inquiry and\nquotation', 'Order\n(contract)', 'Goods, delivery\nnote, invoice', 'Credit or\ndebit notes', 'Statement', 'Payment and\nreceipt'], { perRow: 3, boxW: 108, boxH: 50 }),

  // ---------- Form 5 ----------
  'comm-gce-0520': columnsSpec('GCE Commerce (0520)', [
    { head: 'Paper 1 (1½ h)', items: ['multiple choice', 'documents, banking', 'insurance, transport', 'whole syllabus'] },
    { head: 'Paper 2 (2½ h)', items: ['structured theory', 'define, explain', 'distinguish', 'calculations'] },
  ], { colW: 156 }),
  'comm-bank-accounts': columnsSpec('Bank accounts and facilities', [
    { head: 'Current', items: ['daily payments', 'cheques, cards', 'overdraft possible', 'little interest'] },
    { head: 'Savings', items: ['keep money safe', 'earns interest', 'fewer withdrawals'] },
    { head: 'Fixed deposit', items: ['fixed period', 'higher interest', 'early withdrawal', 'loses interest'] },
  ], { colW: 112 }),
  'comm-cheque': {
    title: 'A crossed cheque and its parties',
    w: 340,
    h: 186,
    art: ChequeArt,
    labels: [],
    facts: ['The drawer, Ngwa P., signs the cheque; the drawee is the bank; the payee is Bih Enterprises.', 'The amount is written in words and in figures, and they must agree.', 'The two parallel lines are a general crossing: the cheque must be paid into a bank account, not cashed over the counter.'],
  },
  'comm-home-foreign': columnsSpec('Home trade and foreign trade', [
    { head: 'Home trade', items: ['one currency', 'no customs', 'shorter distances', 'one set of laws'] },
    { head: 'Foreign trade', items: ['foreign exchange', 'customs duties', 'long transport', 'more documents, risk'] },
  ], { colW: 156 }),
  'comm-shipping-docs': columnsSpec('Foreign trade documents', [
    { head: 'Document', items: ['bill of lading', 'air waybill', 'certificate of origin', 'consular invoice', 'customs declaration'] },
    { head: 'Purpose', items: ['receipt, contract, title', 'receipt for air cargo', 'where goods were made', 'certified by consul', 'assess the duty'] },
  ], { colW: 156 }),
  'comm-transport': columnsSpec('Choosing transport in Cameroon', [
    { head: 'Road', items: ['door to door', 'flexible'] },
    { head: 'Rail', items: ['Camrail', 'heavy, bulky'] },
    { head: 'Sea', items: ['Douala, Kribi', 'cheap per tonne'] },
    { head: 'Air', items: ['fast', 'urgent, light'] },
    { head: 'Pipeline', items: ['Chad to Kribi', 'crude oil'] },
  ], { colW: 70 }),
  'comm-warehouses': columnsSpec('Types of warehouse', [
    { head: 'Private', items: ['owned by one firm', 'for its own goods'] },
    { head: 'Public', items: ['rented to', 'any trader'] },
    { head: 'Bonded', items: ['customs control', 'duty paid on removal', 'no duty on re-export'] },
  ], { colW: 112 }),
  'comm-insurance-principles': columnsSpec('The principles of insurance', [
    { head: 'Principle', items: ['utmost good faith', 'insurable interest', 'indemnity', 'proximate cause', 'subrogation', 'contribution'] },
    { head: 'Meaning', items: ['disclose all facts', 'you must stand to lose', 'restore, no profit', 'main cause is insured', 'insurer takes your rights', 'insurers share the claim'] },
  ], { colW: 156 }),
  'comm-insurance-classes': treeSpec('Classes of insurance', 'Insurance and assurance', [
    { name: 'Marine', items: ['hull', 'cargo', 'freight'] },
    { name: 'Fire', items: ['buildings, stock', 'consequential', 'loss'] },
    { name: 'Accident', items: ['motor (third', 'party compulsory)', 'theft, liability'] },
    { name: 'Life\nassurance', items: ['whole life', 'endowment', 'term'] },
  ], { colW: 90 }),
  'comm-business-units': columnsSpec('Business units compared', [
    { head: 'Private Ltd', items: ['shares sold privately', 'limited liability', 'fewer disclosures'] },
    { head: 'Public Plc', items: ['shares to the public', 'stock exchange (BVMAC)', 'publishes accounts'] },
    { head: 'Public corporation', items: ['owned by the state', 'board appointed', 'public service'] },
  ], { colW: 116 }),
  'comm-mcq-steps': flowSpec('Paper 1: answering an item', ['Read the stem,\nunderline the key word', 'Predict the\nanswer', 'Watch for\nNOT, EXCEPT', 'Eliminate the\nlook-alike option', 'Choose and\nmove on'], { perRow: 3, boxW: 112, boxH: 54 }),
  'comm-calculations': columnsSpec('Paper 2 calculations', [
    { head: 'Topic', items: ['discounts', 'mark-up, margin', 'turnover', 'profit %', 'average clause'] },
    { head: 'Key step', items: ['trade first, then cash', 'cost vs selling price', 'COGS ÷ average stock', 'profit ÷ sales × 100', 'insured ÷ value × loss'] },
  ], { colW: 156 }),
  'comm-final-term': flowSpec('The final term before the GCE', ['Paper 1\ndrills', 'Paper 2 theory and\ncalculation clinics', 'Mock\nexamination', 'Correction and\nremediation', 'The GCE\n(0520)'], { perRow: 3, boxW: 112 }),
};
