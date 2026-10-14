// Commerce lessons for Form 5, terms 2 and 3: classes of insurance, business
// units and communication, and the GCE drills, the mock and remediation.
// Original text written for this app, with Cameroonian examples in FCFA.

const L = (id, unit, n, title, minutes, tags, body, figure, tip, check, terms, examples) => ({
  id,
  unit,
  n,
  title,
  minutes,
  paper: 'Class work',
  tags,
  body,
  figure,
  ...(examples ? { examples } : {}),
  tip,
  check: { q: check[0], a: check[1], why: check[2] },
  terms,
});

export const LESSONS_5B = [
  // ---------- Classes of insurance ----------
  L('co-marine-5', 'co-f5-insuranceclasses', '9.1', 'Marine insurance', 15, ['Insurance'], [
    '**Marine insurance** covers risks at sea and in ports:\n- **hull** insurance: the **ship** itself\n- **cargo** insurance: the **goods** carried\n- **freight** insurance: the **freight charges** that would be lost if the cargo does not arrive.\nPolicies may be **voyage** policies (one journey), **time** policies (a period, usually a year) or **floating** policies (an exporter’s many shipments within a total value).',
    'Kinds of loss:\n- **total loss**: the ship or cargo is completely lost\n- **general average**: a loss **deliberately** made to save the ship and the rest of the cargo in an emergency (for example, throwing some cargo overboard in a storm); it is **shared** by all parties in proportion to their interests\n- **particular average**: an **accidental partial** loss affecting only one party’s property; it is **borne by that owner** (or his insurer).',
    'Exporters and importers state in their contracts who arranges and pays for marine insurance, and an insurance certificate is among the shipping documents.',
  ], 'comm-insurance-classes', 'General average is shared; particular average falls on one owner.',
  ['During a storm, the captain throws some cargo overboard to save the ship. The loss is:', ['general average, shared by all parties', 'particular average', 'not insurable', 'a hull loss only'], 'A deliberate sacrifice for the common safety.'],
  [['Hull insurance', 'Insurance of the ship itself.'], ['Cargo insurance', 'Insurance of goods carried.'], ['General average', 'A deliberate loss to save the voyage, shared by all parties.'], ['Particular average', 'An accidental partial loss borne by the owner of the property.']],
  [
    { q: 'A ship carrying cocoa and timber meets a storm. (a) Seawater accidentally spoils some cocoa. (b) The crew throws timber overboard to save the ship. Classify each loss.', steps: ['(a) **Particular average: an accidental partial loss borne by the cocoa owner (or his insurer).**', '(b) **General average: a deliberate sacrifice for the safety of all, shared by the shipowner and all cargo owners.**'] },
  ]),

  L('co-fireaccident-5', 'co-f5-insuranceclasses', '9.2', 'Fire, accident and life cover; taking out a policy', 15, ['Insurance'], [
    '**Fire insurance** covers buildings, stock and equipment against fire damage, and may be extended to lightning, explosion and floods; **consequential loss** cover pays for profits lost while a business cannot trade after a fire.\n**Accident insurance** includes **motor** insurance (third-party insurance is **compulsory** in Cameroon, under the regional CIMA insurance code), **burglary and theft**, **employers’ liability**, **fidelity guarantee** (against dishonest employees), **goods in transit** and **public liability**.',
    '**Insurance** covers risks that **may** happen (fire, theft). **Assurance** covers an event that is **certain** to happen, the only question being when: **death**. Life assurance policies:\n- **whole life**: pays on death, whenever it occurs\n- **endowment**: pays at the end of a fixed period or on earlier death, combining protection and saving\n- **term** assurance: pays only if death occurs within a set period.',
    'Taking out a policy: the proposer fills in a **proposal form** (utmost good faith), the insurer assesses the risk and fixes the **premium**, a **cover note** gives temporary cover, and the **policy** is issued. To claim, the insured fills a **claim form** with evidence; an **assessor** (loss adjuster) may value the loss.',
  ], 'comm-insurance-classes', 'Insurance for what may happen; assurance for what will happen.',
  ['Which motor insurance is compulsory in Cameroon?', ['third-party insurance', 'comprehensive insurance', 'no insurance', 'life assurance'], 'It protects others harmed by the vehicle.'],
  [['Assurance', 'Cover for an event certain to happen, such as death.'], ['Endowment policy', 'Life assurance paying at the end of a period or on earlier death.'], ['Proposal form', 'The form completed when applying for insurance.'], ['Cover note', 'Temporary proof of insurance before the policy is issued.']],
  [
    { q: 'Distinguish between insurance and assurance, with an example of each.', steps: ['**Insurance covers a risk that may or may not happen, such as fire destroying a shop.**', '**Assurance covers an event certain to happen, such as death, under a life assurance policy.**', '**Insurance follows the principle of indemnity; life assurance pays an agreed sum, since a life cannot be valued.**'] },
  ]),

  // ---------- Business units and communication ----------
  L('co-companies-5', 'co-f5-businessunits', '10.1', 'Limited companies, public corporations and the stock exchange', 14, ['Business units'], [
    'Review:\n- **private limited company** (Ltd): shareholders have limited liability; shares are **not offered to the public** and transfer is restricted; fewer obligations to publish information\n- **public limited company** (Plc): may **offer shares to the public** and be listed on a stock exchange; must publish audited accounts; can raise very large capital\n- **public corporation**: **owned by the state**, set up by law, run by a board appointed by government (for example CAMTEL or CAMPOST); aims at public service as well as profit; any losses fall on the state.',
    'Both kinds of company are formed by registering documents that set out the company’s name, objects and capital, and the rules for running it. Shareholders elect a **board of directors** and receive **dividends** from profits.',
    'A **stock exchange** is a market for buying and selling **shares** and **bonds**. In Central Africa, the regional exchange, the **BVMAC**, is based in **Douala**; it lets companies and governments raise capital and lets investors buy and sell securities.',
  ], 'comm-business-units', 'Ltd: private shares. Plc: public shares. Public corporation: state-owned.',
  ['Which business must publish audited accounts and may sell shares to the public?', ['a public limited company', 'a sole trader', 'a partnership', 'a private limited company'], 'Listed on a stock exchange.'],
  [['Dividend', 'A share of company profits paid to shareholders.'], ['Stock exchange', 'A market for buying and selling shares and bonds.'], ['BVMAC', 'The regional stock exchange of Central Africa, based in Douala.']],
  [
    { q: 'Distinguish between a private limited company and a public corporation.', steps: ['**Ownership: private shareholders, against the state.**', '**Aim: profit for shareholders, against public service as well as profit.**', '**Control: a board elected by shareholders, against a board appointed by the government.**'] },
  ]),

  L('co-communication-5', 'co-f5-businessunits', '10.2', 'Communication as an aid to trade', 13, ['Communication'], [
    '**Communication** links buyers and sellers, producers and suppliers, banks and customers. It allows orders to be placed, prices and information to be exchanged, payments to be made and complaints to be handled quickly.',
    'Methods:\n- **postal** services (CAMPOST): letters, parcels, registered mail\n- **courier** services: fast delivery of documents and parcels\n- **telephone** and **SMS**, and messaging apps such as WhatsApp\n- **e-mail** and the **internet**: websites, online catalogues, e-commerce, video calls\n- radio, television and newspapers for advertising and information.',
    'Choosing a method depends on **speed**, **cost**, the need for a **written record**, **confidentiality** and the distance. Modern telecommunications have lowered costs and made it possible for small Cameroonian traders to reach customers across the country and abroad.',
  ], 'comm-business-units', 'Choose communication by speed, cost, record and confidentiality.',
  ['Which method gives an instant written record of an order?', ['e-mail or a messaging app', 'a telephone call', 'a face-to-face chat', 'a radio advert'], 'Written and fast.'],
  [['Courier', 'A private service delivering documents and parcels quickly.'], ['Telecommunications', 'Communication over distance by telephone, internet and radio.']],
  [
    { q: 'A trader in Bamenda must send a signed contract to a buyer in Douala today. Which method would you choose and why?', steps: ['**A scanned copy by e-mail or messaging app for speed today, followed by the signed original through a courier service for a legal record.**'] },
  ]),

  // ---------- Paper 1 ----------
  L('co-mcq-5', 'co-f5-paper1', '11.1', 'Paper 1 strategy', 13, ['Exam skills'], [
    'Paper 1 lasts **1½ hours**. As the scheme describes, it tests trade channels, documents, cheques and banking, insurance principles, transport, warehousing, and postal and payment services. Strategy:\n- read the whole stem; underline the key word (document, principle, party)\n- predict the answer, then **eliminate** wrong options\n- watch for **NOT** and **EXCEPT**\n- do quick calculations (discounts, average clause) on rough paper\n- never leave a question blank.',
    'Traps: similar pairs (credit note and debit note; trade and cash discount; overdraft and loan; general and particular average; insurance and assurance; private and public company; drawer and drawee).',
    'Practise in timed sets, then revise every mistake by writing the correct definition.',
  ], 'comm-mcq-steps', 'Most traps are pairs of similar terms: learn the difference in each pair.',
  ['The bank on which a cheque is drawn is the:', ['drawee', 'drawer', 'payee', 'endorsee'], 'The drawer is the account holder.'],
  [['Distractor', 'A wrong option designed to look correct.']],
  [
    { q: 'Answer: "Which of the following is NOT a principle of insurance? (A) indemnity (B) subrogation (C) contribution (D) consideration"', steps: ['Indemnity, subrogation and contribution are principles of insurance.', '**(D) consideration**, a general term of contract law, is not one of the principles of insurance.'] },
  ]),

  L('co-identify-5', 'co-f5-paper1', '11.2', 'Identifying documents and key facts', 14, ['Revision'], [
    'Document identification: know **who sends it**, **when** and **why**:\n- inquiry (buyer, to ask), quotation (seller, to offer), order or indent (buyer, to buy)\n- advice note (seller, goods sent), delivery note (with goods, signed), invoice (seller, to bill)\n- credit note (seller, reduce debt), debit note (seller, increase debt), statement (seller, monthly balance), receipt (seller, proof of payment)\n- bill of lading (shipowner, sea; document of title), air waybill (airline), certificate of origin, consular invoice, customs declaration.',
    'Key facts: the **BEAC** issues the franc CFA; **ANOR** sets standards; **CAMPOST** provides postal services; **Camrail** runs the railway; the **BVMAC** is the regional stock exchange in Douala; **Douala** and **Kribi** are the main ports; third-party motor insurance is compulsory.',
    'Make a two-column table "document / purpose" and a list of key facts, and test yourself until you can recall them without notes.',
  ], 'comm-mcq-steps', 'For each document: who, when, why.',
  ['Which document does a seller send monthly to show the balance owed?', ['statement of account', 'receipt', 'quotation', 'advice note'], 'A summary of the period.'],
  [['Document of title', 'A document whose holder can claim the goods, such as a bill of lading.']],
  [
    { q: 'Identify the document: (a) sent with goods and signed by the buyer; (b) issued by the shipowner as a receipt and document of title; (c) increases the amount the buyer owes.', steps: ['(a) **Delivery note.**', '(b) **Bill of lading.**', '(c) **Debit note.**'] },
  ]),

  // ---------- Paper 2 ----------
  L('co-structured-5', 'co-f5-paper2', '12.1', 'Writing structured answers', 14, ['Exam skills'], [
    'Structured questions use instruction words:\n- **define**: a precise meaning with key words\n- **state** or **list**: short points\n- **explain** or **describe**: each point developed with a reason or example\n- **distinguish** or **differentiate**: clear differences, ideally in pairs\n- **outline**: main points briefly\n- **calculate**: formula, working and unit.',
    'Use the **marks** as a guide: a 4-mark "state" asks for about four points; an 8-mark "explain" asks for about four points, each explained. Number your points and leave a line between them.',
    'Use correct terms and Cameroonian examples: mobile money, CAMPOST, Camrail, Douala and Kribi ports, ANOR, CIMA.',
  ], 'comm-calculations', 'Let the marks decide how many points and how much detail.',
  ['A 6-mark "explain three advantages" question needs:', ['three advantages, each with an explanation', 'six one-word answers', 'one long story', 'a calculation'], 'Two marks per developed point.'],
  [['Define', 'Give the precise meaning of a term.'], ['Outline', 'Give the main points briefly.']],
  [
    { q: 'Answer: "Explain two advantages of a bonded warehouse to an importer." (4 marks)', steps: ['**1. Duty is paid only when goods are removed for home sale, so the importer does not need to find all the money for duty at once.**', '**2. Goods can be re-exported from the bond without paying import duty, which helps entrepôt and transit trade.**'] },
  ]),

  L('co-calcclinic-5', 'co-f5-paper2', '12.2', 'Calculation clinic', 16, ['Calculation'], [
    'Formulas for Paper 2:\n- **COGS** = opening stock + purchases − closing stock\n- **gross profit** = sales − COGS; **GP%** = GP ÷ sales × 100\n- **net profit** = GP − expenses; **NP%** = NP ÷ sales × 100\n- **average stock** = (opening + closing) ÷ 2; **rate of turnover** = COGS ÷ average stock\n- **mark-up** = GP ÷ cost × 100; **margin** = GP ÷ selling price × 100\n- **trade discount** on list price, then **cash discount** on the net amount\n- **average clause**: claim = sum insured ÷ value × loss.',
    'Method: write the formula, substitute, calculate, give the unit (FCFA, times), and **interpret** if asked ("stock is sold 4 times a year").',
    'Check your answer: is it reasonable? A margin cannot exceed 100%; a claim cannot exceed the sum insured.',
  ], 'comm-calculations', 'Formula, substitution, answer with unit, and a quick reasonableness check.',
  ['Sales 500,000; COGS 350,000 (FCFA). GP% is:', ['30%', '70%', '42.9%', '150%'], '150,000 ÷ 500,000 × 100.'],
  [['Gross profit percentage', 'Gross profit as a percentage of sales.'], ['Net profit percentage', 'Net profit as a percentage of sales.']],
  [
    { q: 'A trader’s figures: opening stock 60,000; purchases 420,000; closing stock 80,000; sales 600,000; expenses 90,000 (FCFA). Calculate COGS, GP, GP%, NP, NP%, average stock and rate of turnover.', steps: ['COGS = 60,000 + 420,000 − 80,000 = **400,000 FCFA**; GP = 600,000 − 400,000 = **200,000 FCFA**; GP% = **33.3%**.', 'NP = 200,000 − 90,000 = **110,000 FCFA**; NP% = 110,000 ÷ 600,000 × 100 ≈ **18.3%**.', 'Average stock = (60,000 + 80,000) ÷ 2 = 70,000 FCFA; rate of turnover = 400,000 ÷ 70,000 ≈ **5.7 times.**'] },
  ]),

  // ---------- Mock and remediation ----------
  L('co-mock-5', 'co-f5-mock', '13.1', 'Sitting the mock examination', 12, ['Exam skills'], [
    'The mock is a full rehearsal: Paper 1 (1½ hours) and Paper 2 (2½ hours) under official conditions, with no notes.',
    'For Paper 2, read all the questions first and choose those you can answer best (if there is a choice). Share the time according to the marks, start with a question you know well, and leave a few minutes to check calculations and units.',
    'Bring a calculator if allowed, pens and a ruler. Show all working: method marks are available even if the final answer is wrong.',
  ], 'comm-final-term', 'Time by marks; show working; check units.',
  ['In Paper 2, time should be shared according to:', ['the marks for each question', 'the length of the question text', 'the order of questions only', 'how hard it looks'], 'Equal marks, equal time.'],
  [['Method marks', 'Marks for correct working even if the final answer is wrong.']],
  [
    { q: 'Paper 2 lasts 2½ hours and you must answer five questions of equal marks. Make a time plan.', steps: ['Reading and choosing: 5 minutes.', 'Five questions: about 27 minutes each = 135 minutes.', '**Checking: about 10 minutes.**'] },
  ]),

  L('co-remediation-5', 'co-f5-mock', '13.2', 'Post-mock remediation: common mistakes', 15, ['Exam skills', 'Revision'], [
    'The scheme names the mistakes examiners see most often:\n- **confusing private and public limited companies**: only a Plc can offer shares to the public; an Ltd sells shares privately\n- **misapplying indemnity**: insurance restores the insured to the position before the loss, **no better**; it does not apply in the same way to life assurance, and under-insurance reduces claims by the average clause\n- **failing to state the exact features of a bonded warehouse**: customs control, duty paid only on removal for home use, no import duty on re-exports, handling under supervision.',
    'Other frequent faults: mixing up credit and debit notes, deducting cash discount before trade discount, dividing by the wrong figure in mark-up and margin, and vague answers without key words.',
    'Fix them by writing a corrected answer for each mistake, learning the exact definitions, and practising one calculation every day until the GCE.',
  ], 'comm-final-term', 'Exact features, exact definitions, correct order of discounts.',
  ['Which statement about a private limited company is correct?', ['it cannot offer its shares to the general public', 'it must be listed on the stock exchange', 'its owners have unlimited liability', 'it is owned by the state'], 'Shares are sold privately.'],
  [['Remediation', 'Correcting the weaknesses found in an examination.']],
  [
    { q: 'Correct this answer: "With indemnity, if my shop worth 5 million is insured for 8 million and burns down, I receive 8 million."', steps: ['**Indemnity restores the insured to the position before the loss, no better.**', '**The insured receives only the actual loss, 5 million FCFA; insuring for 8 million (over-insurance) brings no extra payment.**'] },
  ]),
];
