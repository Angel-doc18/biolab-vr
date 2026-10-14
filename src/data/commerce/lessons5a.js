// Commerce lessons for Form 5, term 1: the GCE examination, banking
// services, cheques and electronic payments, international trade and its
// documents, transport, warehousing and the principles of insurance.
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

export const LESSONS_5A = [
  // ---------- GCE blueprint ----------
  L('co-gceformat-5', 'co-f5-blueprint', '1.1', 'The GCE Commerce examination', 12, ['Exam skills'], [
    'Ordinary Level **Commerce** is GCE subject **0520**. On the June 2026 timetable:\n- **Paper 1** (1½ hours): multiple-choice questions across the syllabus\n- **Paper 2** (2½ hours): as the scheme of work describes, **structured theory** questions and **commercial calculations**.\nAlways follow the instructions printed on your paper about how many questions to answer.',
    'Form 5 completes the **aids to trade**: banking and payments, foreign trade and its documents, transport, warehousing, insurance and communication, with a review of business units. The Form 4 topics (retail and wholesale trade, home-trade documents, discounts, consumer protection, advertising and calculations) are examined too.',
    'All theory is completed by week 13; term 3 is for Paper 1 drills, Paper 2 clinics, the mock and remediation.',
  ], 'comm-gce-0520', 'Paper 2 rewards precise definitions, developed explanations and shown working.',
  ['Commerce Paper 2 in the scheme consists of:', ['structured theory questions and calculations', 'multiple choice only', 'an essay on literature', 'a practical test'], 'Explain, distinguish and calculate.'],
  [['Aids to trade', 'Services that make trade possible: banking, insurance, transport, communication, warehousing, advertising.'], ['Structured question', 'A question in parts, each with its own marks.']],
  [
    { q: 'List the Form 5 aids to trade you must master, with one key idea for each.', steps: ['**Banking: accounts, overdrafts, cheques and e-payments.**', '**Transport: choosing the mode.** **Warehousing: the bonded warehouse.**', '**Insurance: the six principles and the average clause.** **Communication: speed and records.**'] },
  ]),

  L('co-recall-5', 'co-f5-blueprint', '1.2', 'Recalling the Form 4 foundations', 13, ['Revision'], [
    'Key Form 4 ideas you will use in Form 5:\n- **channels of distribution** and the roles of the **wholesaler** and **retailer**\n- the **documents of home trade**: inquiry, quotation, order, invoice, advice and delivery notes, credit and debit notes, statement, receipt\n- **trade discount** (on list price, for resale) and **cash discount** (for prompt payment)\n- **mark-up** (on cost) and **margin** (on selling price); **COGS**, gross and net profit, **rate of turnover**.',
    'These ideas reappear in foreign trade (the **indent** is like an order; the **pro forma** and **consular invoices** are invoices), in banking (payments of invoices by cheque or transfer) and in insurance (valuing stock for cover).',
    'Revise them with short self-tests: name the document for each step of a sale, and do one discount and one turnover calculation each week.',
  ], 'comm-transaction', 'Form 5 builds on Form 4: documents and calculations return.',
  ['Which Form 4 document is most like an indent in foreign trade?', ['an order', 'a receipt', 'a credit note', 'a delivery note'], 'An indent is an import order.'],
  [['Indent', 'An order from an importer to an overseas supplier.']],
  [
    { q: 'A retailer’s goods are listed at 300,000 FCFA with 10% trade discount and 2% cash discount for payment within 15 days. He pays on day 7. How much?', steps: ['Net invoice = 300,000 − 30,000 = 270,000 FCFA.', 'Cash discount = 2% × 270,000 = 5,400 FCFA.', '**He pays 264,600 FCFA.**'] },
  ]),

  // ---------- Banking ----------
  L('co-accounts-5', 'co-f5-banking', '2.1', 'Types of bank account', 13, ['Banking'], [
    'Commercial banks offer different accounts:\n- **current account**: for frequent deposits and withdrawals; comes with a **cheque book**, cards and transfers; usually pays little or no interest; may allow an **overdraft**; used by businesses for daily transactions\n- **savings account**: for keeping money safely while earning **interest**; withdrawals are fewer and may need notice\n- **fixed (time) deposit account**: money is deposited for an agreed **period** (for example 6 or 12 months) at a **higher interest rate**; early withdrawal loses interest.',
    'To open an account, a customer usually needs proof of identity (the national identity card), proof of address, passport photographs, a minimum deposit and, for a business, its registration documents.',
    '**Microfinance** institutions and credit unions offer similar accounts to small savers and traders, often with simpler conditions.',
  ], 'comm-bank-accounts', 'Current for daily payments, savings for interest, fixed deposit for higher interest over a set period.',
  ['Which account pays the highest interest but locks money for a period?', ['fixed (time) deposit account', 'current account', 'savings account with daily withdrawals', 'overdraft'], 'Higher return for commitment.'],
  [['Current account', 'A bank account for frequent payments, usually with cheques and cards.'], ['Savings account', 'An account for keeping money and earning interest.'], ['Fixed deposit', 'Money deposited for a fixed period at a higher interest rate.']],
  [
    { q: 'Which account would you advise for (a) a supermarket’s daily takings and payments; (b) a family saving for school fees next September; (c) a business with 5 million FCFA it will not need for a year?', steps: ['(a) **Current account.**', '(b) **Savings account.**', '(c) **Fixed deposit account, for higher interest.**'] },
  ]),

  L('co-facilities-5', 'co-f5-banking', '2.2', 'Banking facilities: overdrafts, loans and payment services', 15, ['Banking'], [
    '**Overdraft**: permission to withdraw more than the balance of a **current account**, up to an agreed limit; interest is charged only on the amount overdrawn and for the time it is used; suited to short-term needs such as buying stock before a festival.\n**Loan**: a fixed sum credited to a separate account and repaid with interest in **instalments** over an agreed period; often needs **security** (collateral); suited to buying equipment or vehicles.',
    'Payment services:\n- **standing order**: the customer instructs the bank to pay a **fixed amount** at regular intervals (rent, fees)\n- **direct debit**: the customer authorises a **payee** to collect amounts (which may vary) from the account\n- **bank transfer** and **electronic funds transfer** between accounts\n- cards, ATMs (cash machines), **internet** and **mobile banking**.',
    'Other services: night safes for depositing takings after closing, safe custody of valuables, foreign exchange, advice, and **status inquiries** about the creditworthiness of customers.',
  ], 'comm-bank-accounts', 'Overdraft: flexible and short-term. Loan: fixed sum, instalments, longer term.',
  ['A fixed monthly rent paid automatically by the bank uses a:', ['standing order', 'direct debit for varying amounts', 'overdraft', 'fixed deposit'], 'Fixed amount, regular dates.'],
  [['Overdraft', 'Permission to overdraw a current account up to a limit.'], ['Loan', 'A fixed sum repaid in instalments with interest.'], ['Standing order', 'An instruction to pay a fixed amount regularly.'], ['Direct debit', 'Authority for a payee to collect payments from an account.'], ['Collateral', 'Property pledged as security for a loan.']],
  [
    { q: 'Distinguish between an overdraft and a bank loan.', steps: ['**An overdraft is drawn on a current account up to a limit; a loan is a fixed sum credited to a separate loan account.**', '**Overdraft interest is charged only on the amount used; loan interest is charged on the whole sum.**', '**An overdraft suits short-term needs; a loan suits longer-term purchases repaid in instalments.**'] },
  ]),

  // ---------- Cheques and e-payments ----------
  L('co-cheque-5', 'co-f5-cheques', '3.1', 'The cheque and its crossings', 15, ['Payment'], [
    'A **cheque** is a written order by a customer to his bank to pay a stated sum to a named person or to bearer. The **parties**:\n- the **drawer**: the account holder who writes and signs it\n- the **drawee**: the **bank** on which it is drawn\n- the **payee**: the person to be paid.\nA cheque shows the date, the payee’s name, the amount in words and figures, and the drawer’s signature.',
    'An **open** cheque can be cashed over the counter. A **crossed** cheque has two parallel lines across its face and must be **paid into a bank account**, so a thief cannot easily cash it.\n- **general crossing**: two parallel lines, with or without "& Co."\n- **special crossing**: the name of a particular **bank** written between the lines; it can be paid only into that bank\n- words such as "**Account payee only**" or "**Not negotiable**" add further protection.',
    'Advantages of cheques: safe for large sums, convenient by post, a record of payment. Disadvantages: they take time to clear, may be dishonoured, and are not accepted everywhere.',
  ], 'comm-cheque', 'Drawer writes, drawee (bank) pays, payee receives.',
  ['A cheque with the name of a bank written between two parallel lines has a:', ['special crossing', 'general crossing', 'open cheque', 'stale date'], 'It must be paid into that bank.'],
  [['Drawer', 'The account holder who writes and signs a cheque.'], ['Drawee', 'The bank on which a cheque is drawn.'], ['Payee', 'The person to whom a cheque is payable.'], ['Crossed cheque', 'A cheque with two parallel lines that must be paid into a bank account.']],
  [
    { q: 'Ngwa writes a cheque on his account at a Douala bank to pay Bih 150,000 FCFA. Name the parties, and say why he should cross it.', steps: ['**Drawer: Ngwa. Drawee: his bank in Douala. Payee: Bih.**', '**Crossing means the cheque must be paid into a bank account, so if it is lost or stolen it cannot simply be cashed over the counter.**'] },
  ]),

  L('co-epayments-5', 'co-f5-cheques', '3.2', 'Dishonoured cheques, mobile money and EFT', 15, ['Payment'], [
    'A bank may **dishonour** (refuse to pay) a cheque when:\n- there are **insufficient funds** (marked "refer to drawer")\n- the **words and figures** differ\n- the drawer’s **signature** is missing or does not match\n- the cheque is **post-dated** (dated in the future) or **stale** (too old)\n- the drawer has **stopped** payment, or has died or become bankrupt\n- there are alterations not signed by the drawer.\nIssuing a cheque without funds is an offence.',
    '**Mobile money** (MTN MoMo, Orange Money) lets customers deposit, send, receive and pay with a phone, through agents everywhere. It is fast, cheap for small sums and reaches people without bank accounts; risks include fraud, wrong numbers and sharing the PIN.',
    '**Electronic funds transfer** (EFT) moves money between bank accounts electronically: salary payments, supplier payments, card payments at shops (point of sale) and internet banking. It is fast, safe and leaves a record.',
  ], 'comm-cheque', 'A dishonoured cheque is a broken promise to pay: always check funds and details.',
  ['A cheque dated next month is:', ['post-dated', 'stale', 'crossed', 'open'], 'It cannot be paid before that date.'],
  [['Dishonour', 'A bank’s refusal to pay a cheque.'], ['Post-dated cheque', 'A cheque dated in the future.'], ['Stale cheque', 'A cheque presented too long after its date.'], ['EFT', 'Electronic funds transfer between accounts.']],
  [
    { q: 'Give four reasons why a bank may dishonour a cheque.', steps: ['**Insufficient funds in the drawer’s account.**', '**Amount in words differs from the amount in figures.**', '**Missing or different signature.**', '**The cheque is post-dated or stale, or payment has been stopped.**'] },
  ]),

  // ---------- Foreign trade ----------
  L('co-homeforeign-5', 'co-f5-foreigntrade', '4.1', 'Home trade and foreign trade', 14, ['Foreign trade'], [
    '**Foreign (international) trade** is buying and selling between countries. It differs from home trade:\n- different **currencies** (foreign exchange needed)\n- **customs** duties, controls and documentation\n- longer **distances**, more transport and **insurance**\n- different **languages**, laws, standards and trade practices\n- greater **risks** and delays in payment.',
    'Trade in **goods** is **visible** trade; trade in **services** (shipping, insurance, banking, tourism) is **invisible** trade. The **balance of trade** = visible exports − visible imports. The **balance of payments** records all transactions with the rest of the world, visible and invisible, and capital flows.',
    'Why countries **restrict imports**: to protect young (infant) industries and jobs, to raise revenue from duties, to improve the balance of payments, to protect health and security (dangerous goods), and to prevent **dumping**. Methods: tariffs (customs duties), quotas, embargoes and licences.',
  ], 'comm-home-foreign', 'Visible = goods; invisible = services.',
  ['Earnings from foreign tourists visiting Kribi are:', ['invisible exports', 'visible exports', 'visible imports', 'invisible imports'], 'Foreigners buy a service.'],
  [['Visible trade', 'Trade in goods.'], ['Invisible trade', 'Trade in services.'], ['Balance of trade', 'Visible exports minus visible imports.'], ['Dumping', 'Selling exports abroad below cost.']],
  [
    { q: 'Cameroon exports goods worth 2,800 and imports goods worth 3,100 (billion FCFA). Calculate the balance of trade and comment.', steps: ['Balance of trade = 2,800 − 3,100 = **−300 billion FCFA.**', '**An unfavourable (deficit) balance of trade: more is spent on imported goods than earned from exported goods.**'] },
  ]),

  L('co-importexport-5', 'co-f5-foreigntrade', '4.2', 'Import, export and entrepôt procedures', 14, ['Foreign trade'], [
    '**Import procedure** in outline:\n- the importer makes inquiries and receives a **pro forma invoice** or quotation\n- obtains any import licence and foreign exchange through the bank\n- sends an **indent** (order), often through an agent; a **closed** indent names the supplier, an **open** indent lets the agent choose\n- arranges payment, often by a **letter of credit** through the bank\n- receives the shipping documents and **clears** the goods through customs, paying duties.',
    '**Export procedure** in outline: receive the order (indent), check the buyer, prepare the goods and packing, book space on a ship or aircraft, insure the goods, prepare the documents (invoice, bill of lading or air waybill, certificate of origin, export declaration), ship the goods and present documents to the bank for payment.',
    '**Entrepôt trade** is importing goods in order to **re-export** them, sometimes after storing, grading or repacking. Douala serves as a gateway for goods to and from Chad and the Central African Republic, which have no sea coast; such goods in **transit** pass through under customs control.',
  ], 'comm-home-foreign', 'Indent, payment, documents, customs clearance.',
  ['An indent that lets the agent choose the supplier is:', ['an open indent', 'a closed indent', 'a pro forma', 'a receipt'], 'The agent chooses.'],
  [['Letter of credit', 'A bank’s promise to pay the exporter when the correct documents are presented.'], ['Customs clearance', 'Completing customs formalities and paying duties so goods can be released.'], ['Transit trade', 'Goods passing through a country to another country.']],
  [
    { q: 'Explain why Douala is important for Chad’s trade.', steps: ['**Chad is landlocked, so its imports and exports must cross another country to reach the sea.**', '**Goods pass through the port of Douala in transit under customs control, and much of Chad’s oil reaches the sea by the pipeline to Kribi, earning Cameroon fees and creating jobs.**'] },
  ]),

  // ---------- Shipping documents ----------
  L('co-billoflading-5', 'co-f5-shippingdocs', '5.1', 'Shipping and foreign trade documents', 16, ['Foreign trade', 'Documents'], [
    '**Bill of lading** (B/L): issued by the **shipping company** when goods are loaded. It is:\n- a **receipt** for the goods shipped\n- **evidence of the contract** of carriage\n- a **document of title**: whoever holds it can claim the goods, so it can be transferred to sell the goods while at sea.\nA **clean** bill states the goods were shipped in good condition; a **claused** (dirty) bill notes damage or shortage.',
    'Other documents:\n- **air waybill**: for goods sent by air; a receipt and contract but **not** a document of title\n- **certificate of origin**: shows the country where the goods were produced, for duties and trade preferences\n- **consular invoice**: an invoice certified by the **consul** of the importing country in the exporting country, confirming prices and origin\n- **customs declaration** (entry): details of goods, value and origin, used to assess **duty**\n- others: shipping note, export licence, insurance certificate, packing list.',
    'Payment by **documentary credit** depends on presenting the right documents to the bank, so they must be complete and correct.',
  ], 'comm-shipping-docs', 'Only the bill of lading is a document of title.',
  ['Which document allows ownership of goods at sea to be transferred?', ['the bill of lading', 'the air waybill', 'the certificate of origin', 'the customs declaration'], 'A document of title.'],
  [['Bill of lading', 'A shipping document that is a receipt, evidence of contract and a document of title.'], ['Air waybill', 'A receipt and contract for goods sent by air.'], ['Certificate of origin', 'A document stating where goods were produced.'], ['Consular invoice', 'An invoice certified by the importing country’s consul.']],
  [
    { q: 'State three functions of a bill of lading.', steps: ['**A receipt for the goods loaded on the ship.**', '**Evidence of the contract of carriage between shipper and shipowner.**', '**A document of title that can be transferred to pass ownership of the goods.**'] },
  ]),

  L('co-customs-5', 'co-f5-shippingdocs', '5.2', 'Customs and Cameroon’s ports', 13, ['Foreign trade'], [
    'The **customs** service controls goods entering and leaving the country. Its functions:\n- collecting **import duties** and other taxes on trade\n- preventing **smuggling** and prohibited goods (drugs, counterfeit medicines, weapons)\n- enforcing **quotas**, embargoes and standards\n- collecting **trade statistics**\n- supervising **bonded warehouses** and goods in transit.',
    'Cameroon’s main ports: **Douala**, the country’s largest port and the main gateway for Cameroon, Chad and the Central African Republic; **Kribi**, a **deep-sea port** that can receive very large ships; and smaller ports such as Limbe. Major international airports are at Douala, Yaoundé-Nsimalen and Garoua.',
    'A **single window for foreign trade** procedures in Douala brings together the offices involved (customs, banks, inspection) so that traders can complete formalities in one place.',
  ], 'comm-shipping-docs', 'Customs: duties, control, statistics, bonds.',
  ['Which of these is a function of customs?', ['collecting import duties and preventing smuggling', 'issuing bank loans', 'insuring ships', 'printing money'], 'Control of trade across borders.'],
  [['Customs', 'The government service that controls imports and exports and collects duties.'], ['Smuggling', 'Moving goods across a border illegally to avoid duty or controls.'], ['Deep-sea port', 'A port deep enough for very large ships.']],
  [
    { q: 'Why did Cameroon build a deep-sea port at Kribi when it already had Douala?', steps: ['**Douala is a river port with limited depth and congestion, so the largest modern ships cannot enter fully loaded.**', '**Kribi can receive large container ships and serve industries and mining, increasing trade capacity.**'] },
  ]),

  // ---------- Transport ----------
  L('co-transportchoice-5', 'co-f5-transport', '6.1', 'The importance of transport and choosing a mode', 13, ['Transport'], [
    'Transport is an **aid to trade**: it moves raw materials to factories and finished goods to markets, creating **place utility**; it widens markets, allows specialisation, links regions and countries, and helps keep prices steady by moving goods from surplus to shortage areas.',
    'Factors in choosing a mode of transport:\n- **cost** in relation to the value of the goods\n- **speed** and urgency\n- **nature of the goods**: perishable, fragile, bulky, dangerous, liquid, valuable\n- **safety** and security\n- **distance** and **route** (sea or land)\n- **reliability** and regularity\n- **door-to-door** service and handling.',
    'For example, fresh flowers or medicines may go by air; cement and timber by rail or sea; vegetables to a nearby town by road; crude oil by pipeline.',
  ], 'comm-transport', 'Match the mode to cost, speed and the nature of the goods.',
  ['Fresh fish from Limbe to Yaoundé would best go by:', ['refrigerated road transport', 'pipeline', 'sea', 'slow freight train without cooling'], 'Fast, door to door, kept cold.'],
  [['Place utility', 'Value created by moving goods to where they are needed.'], ['Perishable', 'Likely to go bad quickly.']],
  [
    { q: 'Recommend a mode of transport for each and give a reason: (a) 500 tonnes of timber from Belabo to Douala; (b) urgent spare parts from Paris to Douala; (c) crude oil from southern Chad to the coast.', steps: ['(a) **Rail: cheap for heavy, bulky goods over long distances.**', '(b) **Air: fastest for urgent, light, valuable goods.**', '(c) **Pipeline: the Chad-Cameroon pipeline carries oil continuously and cheaply to Kribi.**'] },
  ]),

  L('co-transportmodes-5', 'co-f5-transport', '6.2', 'Road, rail, sea, air and pipeline in Cameroon', 15, ['Transport'], [
    '**Road**: the most used mode in Cameroon; flexible, **door-to-door**, suited to short and medium distances and small loads; but roads may be poor in the rainy season, and accidents and checkpoints add costs and delays.\n**Rail**: **Camrail** operates the line from **Douala** to **Yaoundé** and on to **Ngaoundéré** (the Transcameroon railway), as well as a line towards Kumba; cheap for heavy, bulky goods over long distances (timber, cement, fuel, cattle), but slow and limited to fixed routes.',
    '**Sea**: the cheapest per tonne for bulky international cargo, through **Douala** and **Kribi**; slow, and needs port handling. **Inland waterways**: the **Benue** at Garoua is navigable only for part of the rainy season.\n**Air**: the fastest, for urgent, light, valuable or perishable goods and passengers, through Douala, Yaoundé-Nsimalen and Garoua airports; but costly and limited in load.',
    '**Pipeline**: for liquids and gas; the **Chad-Cameroon pipeline**, about 1,070 km long, carries crude oil from southern Chad to an offshore terminal near **Kribi**. Pipelines have high building costs but are cheap, continuous and safe to run; they carry only one product and can be targets of theft or damage.',
  ], 'comm-transport', 'Road: flexible. Rail: bulky over land. Sea: cheap per tonne. Air: fast. Pipeline: liquids.',
  ['The Transcameroon railway links Douala and Yaoundé with:', ['Ngaoundéré', 'Maroua', 'Bamenda', 'Ebolowa'], 'Operated by Camrail.'],
  [['Camrail', 'The company operating Cameroon’s railway.'], ['Containerisation', 'Carrying goods in standard steel containers moved between ships, trains and lorries.'], ['Pipeline', 'A line of pipes carrying liquids or gas over long distances.']],
  [
    { q: 'Compare road and rail transport for carrying goods from Douala to Ngaoundéré.', steps: ['Road: **door-to-door and flexible; better for small or urgent loads; but costlier per tonne for heavy goods and slowed by bad roads and checkpoints.**', 'Rail: **cheaper for heavy, bulky loads over this long distance; but limited to stations and timetables, so goods need road transport at each end.**'] },
  ]),

  // ---------- Warehousing ----------
  L('co-warehouse-5', 'co-f5-warehousing', '7.1', 'Warehousing and stock control', 14, ['Warehousing'], [
    'A **warehouse** is a building for **storing goods** until they are needed. Warehousing creates **time utility**. Functions:\n- bridging the gap between **production** and **consumption** (seasonal crops, seasonal demand)\n- keeping **prices steady** by releasing stocks when supply is short\n- protecting goods from weather, theft and damage\n- allowing goods to be **graded**, packed and **branded**\n- enabling **bulk buying** and **continuous production**.',
    'Types:\n- **private** warehouses: owned by a manufacturer, wholesaler or retailer for its own goods\n- **public** warehouses: owned by a company or public body and **rented** to any trader\n- **bonded** warehouses: for imported goods on which **duty has not been paid**, under customs control\n- cold stores for perishable goods.',
    '**Stock control** means keeping the right amount of stock: enough to meet demand, but not so much that money is tied up or goods spoil. Traders set **minimum** and **maximum** stock levels, a **reorder level**, and carry out **stocktaking** to check records against actual goods.',
  ], 'comm-warehouses', 'Warehousing creates time utility and steadies prices.',
  ['A warehouse rented by many different traders is a:', ['public warehouse', 'private warehouse', 'bonded warehouse only', 'retail shop'], 'Available for hire.'],
  [['Warehouse', 'A building for storing goods.'], ['Time utility', 'Value created by making goods available when needed.'], ['Stocktaking', 'Counting and valuing goods in stock.'], ['Reorder level', 'The stock level at which new goods should be ordered.']],
  [
    { q: 'Explain how warehousing helps a cocoa exporter and the consumers of maize.', steps: ['**The cocoa exporter can store beans after the harvest until ships are available or prices are better.**', '**Maize harvested in one season can be stored and released during the rest of the year, keeping supply and prices steadier for consumers.**'] },
  ]),

  L('co-bonded-5', 'co-f5-warehousing', '7.2', 'The bonded warehouse', 14, ['Warehousing', 'Foreign trade'], [
    'A **bonded warehouse** is a warehouse, approved by **customs**, where **imported goods** liable to duty are stored **before the duty is paid**. Its exact features:\n- goods are under **customs control**; they cannot be removed without customs permission\n- **duty is paid** only when goods are **removed for sale in the home market**, and only on the quantity removed\n- goods **re-exported** from the bond pay **no import duty**\n- under supervision, goods may be **sampled**, blended, repacked or graded while in bond\n- the warehouse keeper gives a **bond** (guarantee) to customs that duty will be paid.',
    'Importance to the **importer**: no need to find money for duty until goods are sold; goods can be sold or inspected in bond; re-exports avoid duty; goods are kept safely.',
    'Importance to the **government**: duty is **secured** because goods remain under control; **smuggling** is reduced; entrepôt and transit trade are encouraged, bringing revenue and jobs.',
  ], 'comm-warehouses', 'In bond: customs control, duty paid only when goods are removed for home use.',
  ['When is duty paid on goods in a bonded warehouse?', ['when they are removed for sale in the home market', 'when the ship arrives', 'when the order is placed', 'never'], 'Duty is deferred.'],
  [['Bonded warehouse', 'A customs-approved warehouse for imported goods on which duty has not been paid.'], ['In bond', 'Held under customs control before duty is paid.'], ['Re-export', 'Exporting again goods that were imported.']],
  [
    { q: 'An importer stores 1,000 cases of wine in bond. He removes 200 cases for sale in Douala and re-exports 300 cases to Chad. On how many cases does he pay import duty now?', steps: ['Duty is paid only on goods removed for home consumption.', 'Re-exports pay no import duty; the remaining 500 cases stay in bond.', '**He pays import duty on 200 cases now.**'] },
  ]),

  // ---------- Insurance principles ----------
  L('co-principles-5', 'co-f5-insurance', '8.1', 'The principles of insurance', 16, ['Insurance'], [
    '**Insurance** is a contract in which the **insurer** agrees, in return for a **premium**, to compensate the **insured** for loss caused by a specified risk. It works by **pooling risks**: many people pay premiums into a fund from which the few who suffer losses are paid. The contract is set out in a **policy**.',
    'The principles:\n- **utmost good faith** (uberrimae fidei): the insured must **disclose all material facts**; concealment can make the policy void\n- **insurable interest**: the insured must stand to suffer a **financial loss** if the event occurs\n- **indemnity**: the insured is restored to the **same financial position** as before the loss, **no better** (life assurance is an exception)\n- **proximate cause**: the **main, direct cause** of the loss must be an insured risk\n- **subrogation**: after paying, the insurer takes over the insured’s **rights** against any third party who caused the loss, and any salvage\n- **contribution**: if the same risk is insured with **several insurers**, they **share** the claim.',
    'Insurable risks are those whose probability can be **calculated** from past experience (fire, theft, accidents). **Non-insurable** risks cannot be calculated: a fall in demand, changes in fashion, bad management, or losses caused deliberately.',
  ], 'comm-insurance-principles', 'Good faith, insurable interest, indemnity, proximate cause, subrogation, contribution.',
  ['A shop owner who hides the fact that he stores petrol in his shop breaks the principle of:', ['utmost good faith', 'contribution', 'subrogation', 'proximate cause'], 'A material fact was not disclosed.'],
  [['Premium', 'The payment made for insurance cover.'], ['Utmost good faith', 'The duty to disclose all material facts.'], ['Indemnity', 'Restoring the insured to the position before the loss.'], ['Subrogation', 'The insurer taking over the insured’s rights after paying a claim.']],
  [
    { q: 'A car insured with one company is damaged by a careless driver. The insurer pays for the repairs. Which principles apply, and what happens next?', steps: ['**Indemnity: the insurer pays the cost of repairs, restoring the car, not more.**', '**Subrogation: the insurer can now recover the money from the careless driver (or his insurer), since it has taken over the owner’s rights.**'] },
  ]),

  L('co-average-5', 'co-f5-insurance', '8.2', 'Under-insurance and the average clause', 15, ['Insurance', 'Calculation'], [
    '**Under-insurance** happens when property is insured for **less than its full value**, to pay a lower premium. Many policies contain an **average clause**: the insurer then pays only the **same proportion** of the loss as the sum insured bears to the value of the property.',
    'Formula:\n**claim paid = (sum insured ÷ value of property) × loss**.\nThe claim can never exceed the sum insured. If the property is fully insured, the whole loss (up to the sum insured) is paid.',
    '**Over-insurance** (insuring for more than the value) gives no benefit: under indemnity, the insured receives only the actual loss. So property should be insured for its **true value**.',
  ], 'comm-insurance-principles', 'Claim = sum insured ÷ value × loss.',
  ['Stock worth 4 million FCFA is insured for 3 million. A fire destroys stock worth 1 million. With the average clause, the insurer pays:', ['750,000 FCFA', '1,000,000 FCFA', '3,000,000 FCFA', '250,000 FCFA'], '3/4 × 1,000,000.'],
  [['Under-insurance', 'Insuring property for less than its full value.'], ['Average clause', 'A clause that reduces a claim in proportion to under-insurance.'], ['Over-insurance', 'Insuring property for more than its value, which brings no extra benefit.']],
  [
    { q: 'A warehouse worth 20 million FCFA is insured for 15 million. A fire causes damage of 8 million. How much does the insurer pay (a) with an average clause; (b) if the warehouse were insured for 20 million?', steps: ['(a) Claim = 15 ÷ 20 × 8 million = **6 million FCFA**; the owner bears 2 million.', '(b) Fully insured: **8 million FCFA**, the whole loss.'] },
  ]),
];
