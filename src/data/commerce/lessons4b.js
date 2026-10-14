// Commerce lessons for Form 4, terms 2 and 3: terms of purchase and
// discounts, consumer protection, cash and postal payments, advertising,
// commercial calculations, and the Form 4 synthesis. Original text written
// for this app, with Cameroonian examples in francs CFA (FCFA).

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

export const LESSONS_4B = [
  // ---------- Terms and discounts ----------
  L('co-discounts-4', 'co-f4-terms', '8.1', 'Trade discount and cash discount', 16, ['Calculation'], [
    '**Trade discount** is a reduction on the **list (catalogue) price** given by a seller to **traders** who buy for **resale**. It allows the retailer to sell at the recommended price and still make a profit; larger buyers may get larger trade discounts. It is shown on the invoice and deducted **before** any cash discount.',
    '**Cash discount** is a reduction given for **prompt payment**, within a stated period, for example "2½% 30 days". It encourages buyers to pay quickly, improving the seller’s cash flow and reducing bad debts. It is calculated on the **net** amount, after trade discount, and deducted only when payment is made in time.',
    'Order of calculation:\n- list price\n- minus trade discount = net invoice price\n- minus cash discount (if paid promptly) = amount paid.',
  ], 'comm-discounts', 'Trade discount first, on the list price; cash discount second, on the net amount.',
  ['List price 200,000 FCFA, trade discount 15%, cash discount 5% for payment within 14 days. Paid on day 10, the amount paid is:', ['161,500 FCFA', '160,000 FCFA', '170,000 FCFA', '190,000 FCFA'], '200,000 − 30,000 = 170,000; 170,000 − 8,500 = 161,500.'],
  [['Trade discount', 'A reduction on the list price given to traders who buy for resale.'], ['Cash discount', 'A reduction given for prompt payment.'], ['List price', 'The catalogue or recommended selling price.']],
  [
    { q: 'An invoice shows goods at a list price of 400,000 FCFA, trade discount 20%, terms 2½% 30 days. Calculate the amount payable (a) if paid in 20 days; (b) if paid in 45 days.', steps: ['Trade discount = 20% × 400,000 = 80,000; net invoice = 320,000 FCFA.', '(a) Cash discount = 2½% × 320,000 = 8,000; **amount paid = 312,000 FCFA.**', '(b) Paid late, no cash discount: **amount paid = 320,000 FCFA.**'] },
  ]),

  L('co-paymentterms-4', 'co-f4-terms', '8.2', 'Terms of payment: COD, CWO and credit', 13, ['Payment'], [
    'Terms of payment state **when** the buyer must pay:\n- **CWO** (cash with order): payment is sent with the order; used with new or unknown buyers\n- **COD** (cash on delivery): the buyer pays when the goods are delivered; common in online selling in Cameroon\n- **prompt cash**: payment within a few days of the invoice\n- **credit terms**: payment after a period, such as "net 30 days" (full amount within 30 days) or "2½% 30 days" (cash discount if paid within 30 days).',
    'Credit helps buyers, especially retailers who sell the goods before paying, but it ties up the seller’s money and carries the risk of **bad debts**. Sellers therefore check a buyer’s **creditworthiness** before granting credit.',
    'Other terms: **carriage paid** (the seller pays transport) and **carriage forward** (the buyer pays transport); **ex-works** (the buyer collects from the factory).',
  ], 'comm-discounts', 'CWO before, COD at delivery, credit after.',
  ['A buyer who pays the courier when the parcel arrives is using:', ['cash on delivery (COD)', 'cash with order (CWO)', 'credit terms', 'trade discount'], 'Payment on delivery.'],
  [['CWO', 'Cash with order.'], ['COD', 'Cash on delivery.'], ['Carriage paid', 'The seller pays the cost of transport.'], ['Bad debt', 'A debt that cannot be recovered.']],
  [
    { q: 'Why might a supplier insist on CWO from a new customer but give credit to an old customer?', steps: ['**With a new customer the supplier does not know whether he will pay, so CWO removes the risk of a bad debt.**', '**An old customer has a record of paying on time, so credit is less risky and keeps his goodwill.**'] },
  ]),

  // ---------- Consumer protection ----------
  L('co-exploitation-4', 'co-f4-consumer', '9.1', 'Consumer exploitation', 13, ['Consumer protection'], [
    'Consumers are **exploited** when sellers take unfair advantage of them. Common forms:\n- **hoarding**: keeping goods off the market to create scarcity and raise prices\n- **false weights and measures**: tampered scales, short measures of rice, palm oil or fuel\n- **adulteration**: mixing goods with inferior substances (watered fuel, mixed flour)\n- **misleading advertisements** and false labels\n- selling **expired** or **counterfeit** goods, especially medicines and food\n- **overpricing** and charging above controlled prices\n- refusing to give receipts or honour guarantees.',
    'Why consumers are vulnerable: lack of **information**, ignorance of their **rights**, low incomes, few alternative suppliers, and weak enforcement of laws.',
    'Exploitation harms health and safety, wastes consumers’ income and undermines trust in trade.',
  ], 'comm-consumer', 'Hoarding, false weights, adulteration, misleading ads, expired goods.',
  ['A trader who mixes fuel with water is guilty of:', ['adulteration', 'hoarding', 'advertising', 'a cash discount'], 'An inferior substance is added.'],
  [['Hoarding', 'Keeping goods off the market to raise prices.'], ['Adulteration', 'Mixing goods with inferior or harmful substances.'], ['Counterfeit', 'A fake copy of a branded good.']],
  [
    { q: 'Give four ways traders may exploit consumers, with an example from a Cameroonian market.', steps: ['**False measures: a smaller "cup" used to sell groundnuts.**', '**Hoarding: holding back sugar before a festival to raise the price.**', '**Expired goods: selling tins past their date at a discount without warning.**', '**Misleading claims: a "miracle" cream with false promises.**'] },
  ]),

  L('co-protection-4', 'co-f4-consumer', '9.2', 'Protecting consumers: laws, associations and the state', 14, ['Consumer protection'], [
    'Ways consumers are protected in Cameroon:\n- **the law**: a framework law on consumer protection (2011) sets consumers’ rights to safety, information, choice, redress and representation, and other laws punish fraud, false weights and the sale of dangerous goods\n- **state bodies**: the Ministry of Trade checks prices, weights and measures and fights fraud; **ANOR** (Agence des Normes et de la Qualité) sets and enforces **standards** and certifies products; health authorities control food and medicines\n- **consumer associations**: voluntary groups that inform consumers, receive complaints and press for action.',
    'Self-protection: consumers should **read labels** and expiry dates, ask for **receipts**, compare prices, check weights, keep guarantees and **complain** to the trader, an association or the authorities.',
    '**Business ethics** means honest, fair and responsible conduct: correct weights, truthful advertising, fair prices, safe products and respect for agreements. Ethical firms build **goodwill** and long-term customers.',
  ], 'comm-consumer', 'Law, state bodies, associations and informed consumers all protect.',
  ['ANOR is responsible for:', ['setting and enforcing quality standards', 'printing money', 'running elections', 'collecting customs duties'], 'Agence des Normes et de la Qualité.'],
  [['Consumer protection', 'Measures that safeguard consumers from exploitation.'], ['Standard', 'An agreed level of quality and safety for a product.'], ['Redress', 'Compensation or correction for a wrong.'], ['Goodwill', 'The good reputation of a business with its customers.']],
  [
    { q: 'You buy a tin of milk and later see it has expired. What should you do?', steps: ['**Keep the tin and the receipt as evidence.**', '**Return to the trader and ask for a replacement or refund.**', '**If refused, report to the Ministry of Trade services or a consumer association.**'] },
  ]),

  // ---------- Payments ----------
  L('co-cash-4', 'co-f4-payments', '10.1', 'Cash and legal tender', 12, ['Payment'], [
    '**Legal tender** is money that must, by law, be accepted in settlement of a debt. In Cameroon and the CEMAC, legal tender is the **franc CFA** notes and coins issued by the **BEAC**.',
    'Paying in **cash** is simple, immediate and accepted everywhere, and leaves no bank charges. But cash can be **stolen** or lost, is risky to carry in large amounts, leaves no automatic **record**, and cannot easily be sent over long distances.',
    'For safety and record keeping, businesses use receipts for cash payments, bank deposits, and increasingly **mobile money** and bank transfers.',
  ], 'comm-payments', 'Cash is quick but risky and leaves no record without a receipt.',
  ['Why should a trader ask for a receipt when paying in cash?', ['it is proof of payment', 'it increases the price', 'it is a discount', 'it is legal tender'], 'Cash leaves no record otherwise.'],
  [['Legal tender', 'Money that must be accepted in payment of a debt.'], ['Cash', 'Notes and coins.']],
  [
    { q: 'Give two advantages and two disadvantages of paying a supplier in cash.', steps: ['Advantages: **immediate and accepted everywhere; no bank charges.**', 'Disadvantages: **risk of theft or loss; no automatic record of payment.**'] },
  ]),

  L('co-postal-4', 'co-f4-payments', '10.2', 'Postal payments and money transfers', 13, ['Payment'], [
    'Post offices provide ways to **send money** safely over distance:\n- **money orders**: the sender pays the amount and a fee at a post office; the payee collects the money at another post office or receives it by transfer\n- **postal orders**: fixed-value orders for small sums, sent by post and cashed by the payee.\nIn Cameroon, **CAMPOST** (Cameroon Postal Services) provides postal money transfers and savings services.',
    'Advantages: safer than sending cash, available where there are no banks, proof of sending. Disadvantages: fees, the need to visit a post office, and delays.',
    'Today, **mobile money** (MTN MoMo, Orange Money) and money transfer agencies are often faster: the sender pays at an agent or uses a phone, and the receiver withdraws cash or keeps the money on the phone. Transfers need a correct number and the secret **PIN** must never be shared.',
  ], 'comm-payments', 'Postal and mobile transfers move money safely over distance.',
  ['A postal money order is used to:', ['send money safely through the post office', 'borrow from a bank', 'insure goods', 'advertise'], 'A postal method of payment.'],
  [['Money order', 'A post office service for sending money to a payee.'], ['Postal order', 'A fixed-value order for a small sum, sent by post.'], ['Mobile money', 'Money stored and transferred by mobile phone.']],
  [
    { q: 'A trader in Kumba must send 50,000 FCFA to a supplier in Garoua. Compare a postal money order with mobile money.', steps: ['Postal money order: **safe and recorded, but requires a visit to the post office, a fee and some delay.**', 'Mobile money: **almost instant and available through agents everywhere, with a fee; the sender must use the correct number and protect the PIN.**'] },
  ]),

  // ---------- Advertising ----------
  L('co-adtypes-4', 'co-f4-advertising', '11.1', 'Advertising: functions and types', 13, ['Advertising'], [
    '**Advertising** is the use of paid messages in the media to inform the public about goods and services and persuade them to buy. Functions: to **inform** about new products, prices and places; to **persuade** and increase sales; to build a **brand image**; to **remind** customers.',
    'Types:\n- **informative**: gives facts (prices, features, where to buy); also used by government for health and civic campaigns\n- **persuasive**: appeals to emotions and desires, often using celebrities, music and slogans\n- **competitive**: shows why one brand is better than its rivals\n- **generic (collective)**: promotes a whole product type (for example, "drink more milk") rather than a brand.',
    'Related forms of promotion: **sales promotions** (free gifts, price reductions, competitions), **trade fairs**, **sponsorship** of sports, and **personal selling**.',
  ], 'comm-advertising', 'Inform, persuade, compete, remind.',
  ['"Our phones last longer than any other brand" is:', ['competitive advertising', 'informative advertising only', 'generic advertising', 'a public notice'], 'Comparing with rivals.'],
  [['Advertising', 'Paid messages that inform and persuade the public about products.'], ['Brand', 'A name or symbol identifying a firm’s product.'], ['Generic advertising', 'Promoting a whole product type rather than one brand.']],
  [
    { q: 'Classify: (a) a Ministry of Health radio message on vaccination; (b) a beer advert showing a football star celebrating; (c) "Brand X soap cleans better than Brand Y".', steps: ['(a) **Informative.**', '(b) **Persuasive.**', '(c) **Competitive.**'] },
  ]),

  L('co-admedia-4', 'co-f4-advertising', '11.2', 'Advertising media; for and against advertising', 14, ['Advertising'], [
    'Advertising **media**:\n- **radio**: reaches a very wide audience, including rural areas, cheaply\n- **television**: sound, pictures and movement, but costly\n- **print**: newspapers and magazines (detailed information, can be kept)\n- **outdoor**: billboards, posters, vehicles, shop signs\n- **internet and social media**: cheap, targeted, interactive\n- cinema, direct mail and leaflets.\nChoice depends on the **cost**, the **target audience**, the **nature of the product** and the **message**.',
    'Advantages of advertising: informs consumers, increases sales so firms enjoy **economies of scale** (lower costs), finances newspapers, radio and television, creates jobs, encourages competition and new products.',
    'Disadvantages: can **mislead**, raises costs that may be passed on in prices, encourages wasteful and impulse buying, may promote harmful products, and can create pressure on the poor. Advertising is therefore regulated.',
  ], 'comm-advertising', 'Choose the medium by cost, audience, product and message.',
  ['A small business wanting cheap, targeted advertising to young people would best use:', ['social media', 'national television', 'cinema', 'a billboard in another town'], 'Cheap and targeted.'],
  [['Advertising medium', 'A channel used to carry advertisements, such as radio.'], ['Target audience', 'The group of people an advert aims to reach.'], ['Impulse buying', 'Buying without planning, often due to persuasion.']],
  [
    { q: 'A fertiliser company wants to reach farmers in rural areas. Which medium would you recommend and why?', steps: ['**Rural radio in local languages and French or English.**', '**It reaches farmers in villages where newspapers and television are rare, at low cost, and farmers often listen while working.**'] },
  ]),

  // ---------- Calculations ----------
  L('co-markup-4', 'co-f4-calculations', '12.1', 'Mark-up and margin', 16, ['Calculation'], [
    '**Gross profit** on a sale = selling price − cost price. It can be expressed in two ways:\n- **mark-up** = gross profit ÷ **cost price** × 100\n- **margin** = gross profit ÷ **selling price** × 100.\nThe same profit gives a larger mark-up than margin, because cost price is smaller than selling price.',
    'Conversions:\n- a mark-up of 25% (1/4 on cost) equals a margin of 20% (1/5 on selling price)\n- a mark-up of 50% equals a margin of 33⅓%\n- in fractions: if mark-up = 1/n, then margin = 1/(n + 1); if margin = 1/n, then mark-up = 1/(n − 1).',
    'Finding prices:\n- selling price = cost price × (100 + mark-up) ÷ 100\n- cost price = selling price × (100 − margin) ÷ 100.',
  ], 'comm-trading', 'Mark-up on cost, margin on selling price.',
  ['Cost price 12,000 FCFA, mark-up 25%. The selling price is:', ['15,000 FCFA', '16,000 FCFA', '14,400 FCFA', '3,000 FCFA'], '12,000 × 125 ÷ 100.'],
  [['Mark-up', 'Gross profit as a percentage of cost price.'], ['Margin', 'Gross profit as a percentage of selling price.'], ['Cost price', 'The price the trader paid for the goods.']],
  [
    { q: 'A trader buys a pair of shoes for 8,000 FCFA and sells it for 12,000 FCFA. Calculate the mark-up and the margin.', steps: ['Gross profit = 12,000 − 8,000 = 4,000 FCFA.', 'Mark-up = 4,000 ÷ 8,000 × 100 = **50%.**', 'Margin = 4,000 ÷ 12,000 × 100 ≈ **33.3%.**'] },
    { q: 'A shop sells a radio for 30,000 FCFA at a margin of 20%. What was the cost price?', steps: ['Cost price = selling price × (100 − margin) ÷ 100.', '= 30,000 × 80 ÷ 100 = **24,000 FCFA.**'] },
  ]),

  L('co-turnover-4', 'co-f4-calculations', '12.2', 'Cost of goods sold, profit and rate of turnover', 16, ['Calculation'], [
    'From a trader’s figures for a period:\n- **cost of goods sold** (COGS) = opening stock + purchases − closing stock\n- **gross profit** = sales (turnover) − cost of goods sold\n- **net profit** = gross profit − expenses (rent, wages, transport, electricity)\n- **gross profit percentage** = gross profit ÷ sales × 100 (the margin); net profit percentage = net profit ÷ sales × 100.',
    'The **rate of turnover** (rate of stock turn) shows how many times the **average stock** is sold in a period:\n- average stock = (opening stock + closing stock) ÷ 2\n- rate of turnover = cost of goods sold ÷ average stock (both at cost).\nA higher rate means goods sell quickly; it is high for foodstuffs and low for furniture or jewellery.',
    'A trader can raise profit by increasing the rate of turnover (advertising, lower prices, better display), raising the margin, or cutting expenses.',
  ], 'comm-trading', 'COGS = opening stock + purchases − closing stock.',
  ['Opening stock 40,000, purchases 200,000, closing stock 60,000 (FCFA). Cost of goods sold is:', ['180,000 FCFA', '220,000 FCFA', '300,000 FCFA', '100,000 FCFA'], '40,000 + 200,000 − 60,000.'],
  [['Cost of goods sold', 'Opening stock plus purchases minus closing stock.'], ['Turnover', 'Total sales in a period.'], ['Rate of turnover', 'The number of times average stock is sold in a period.'], ['Net profit', 'Gross profit minus expenses.']],
  [
    { q: 'For the year: opening stock 40,000; purchases 200,000; closing stock 60,000; sales 270,000; expenses 35,000 (FCFA). Calculate COGS, gross profit, net profit, average stock and rate of turnover.', steps: ['COGS = 40,000 + 200,000 − 60,000 = **180,000 FCFA.**', 'Gross profit = 270,000 − 180,000 = **90,000 FCFA**; net profit = 90,000 − 35,000 = **55,000 FCFA.**', 'Average stock = (40,000 + 60,000) ÷ 2 = **50,000 FCFA.**', 'Rate of turnover = 180,000 ÷ 50,000 = **3.6 times a year.**'] },
  ]),

  // ---------- Synthesis ----------
  L('co-tradeflow-4', 'co-f4-review', '13.1', 'Following one transaction from start to finish', 15, ['Revision', 'Documents'], [
    'A complete home-trade transaction links the Form 4 topics:\n- the buyer sends a **letter of inquiry**; the seller replies with a **quotation** and catalogue\n- the buyer sends an **order** (perhaps CWO for a new customer)\n- the seller sends an **advice note**, then the goods with a **delivery note**, and an **invoice** with trade discount and terms\n- adjustments by **credit note** or **debit note**\n- a monthly **statement of account**\n- payment (cash, transfer, cheque or mobile money), with **cash discount** if prompt, and a **receipt**.',
    'Each step has a purpose: setting the terms, creating a contract, proving delivery, stating what is owed, correcting errors and proving payment.',
    'Use this chain to answer questions such as "Describe the documents used from the time a retailer becomes interested in goods until he pays for them."',
  ], 'comm-transaction', 'Inquiry, quotation, order, advice, delivery, invoice, notes, statement, payment, receipt.',
  ['Which document proves that the buyer has received the goods?', ['the signed delivery note', 'the quotation', 'the order', 'the catalogue'], 'Signed on receipt.'],
  [['Contract of sale', 'An agreement to supply goods for a price, formed when an order is accepted.']],
  [
    { q: 'A retailer orders goods listed at 500,000 FCFA (trade discount 20%, terms 5% 14 days). He returns goods listed at 25,000 FCFA and pays on day 10. How much does he pay?', steps: ['Net invoice = 500,000 − 100,000 = 400,000 FCFA.', 'Credit note for returns = 25,000 − 20% = 20,000 FCFA; amount owed = 380,000 FCFA.', 'Cash discount 5% of 380,000 = 19,000 FCFA.', '**He pays 361,000 FCFA and receives a receipt.**'] },
  ]),

  L('co-promo-4', 'co-f4-review', '13.2', 'Answering Commerce questions well', 13, ['Exam skills'], [
    'Commerce questions are of two kinds:\n- **multiple-choice** items testing definitions, documents, discounts and outlets\n- **structured questions**: "define", "state", "explain", "distinguish", "calculate".',
    'Tips:\n- **define** with the key words (a credit note "reduces the amount owed")\n- **state** gives short points; **explain** develops each point with a reason or example\n- **distinguish** needs clear differences, ideally in pairs\n- **calculate**: show the formula, the working and the unit (FCFA).',
    'Use Cameroonian examples: market traders, kiosks, mobile money, CAMPOST, ANOR, the BEAC. Before promotion, make sure you can reproduce the document chain and do discount, mark-up, margin and turnover calculations without errors.',
  ], 'comm-transaction', 'State is short; explain develops; calculate shows working.',
  ['"Distinguish between a credit note and a debit note" requires:', ['clear differences between the two documents', 'a definition of one only', 'a calculation only', 'a list of shops'], 'Show how they differ.'],
  [['Structured question', 'A question in parts, each with its own marks.'], ['Distinguish', 'Show clearly how two things differ.']],
  [
    { q: 'Answer: "Distinguish between trade discount and cash discount."', steps: ['**Trade discount is given to traders who buy for resale; cash discount is given for prompt payment.**', '**Trade discount is deducted from the list price on the invoice; cash discount is deducted from the net amount when payment is made in time.**', '**Trade discount does not depend on when payment is made; cash discount does.**'] },
  ]),
];
