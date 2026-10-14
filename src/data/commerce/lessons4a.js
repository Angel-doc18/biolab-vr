// Commerce lessons for Form 4, term 1: commerce and production, channels of
// distribution, small and large retailers, wholesalers, and the documents of
// home trade. Original text written for this app, with Cameroonian examples
// in francs CFA (FCFA).

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

export const LESSONS_4A = [
  // ---------- Commerce and production ----------
  L('co-commerce-4', 'co-f4-intro', '1.1', 'What commerce is: trade and aids to trade', 13, ['Introduction'], [
    '**Commerce** covers all the activities involved in the **exchange** and **distribution** of goods and services, from the producer to the final consumer. It has two branches:\n- **trade**: the buying and selling of goods\n- **aids to trade**: the services that make trade possible and easier.',
    'Trade is divided into:\n- **home trade** (within the country): **retail** trade (selling in small quantities to consumers) and **wholesale** trade (selling in bulk to retailers)\n- **foreign trade** (between countries): **import** trade, **export** trade and **entrepôt** trade (importing goods in order to re-export them).',
    'The **aids to trade** remove the obstacles to trade:\n- **transport** overcomes distance\n- **warehousing** bridges the gap in time between production and consumption\n- **banking** provides finance and means of payment\n- **insurance** covers risks\n- **communication** links buyers and sellers\n- **advertising** informs and persuades consumers.',
  ], 'comm-branches', 'Each aid to trade removes one obstacle to trade.',
  ['Warehousing as an aid to trade overcomes the problem of:', ['time between production and consumption', 'distance', 'risk', 'lack of finance'], 'Goods are stored until needed.'],
  [['Commerce', 'The activities of exchanging and distributing goods and services.'], ['Aids to trade', 'Services that make trade possible: transport, banking, insurance, communication, advertising, warehousing.'], ['Entrepôt trade', 'Importing goods in order to re-export them.']],
  [
    { q: 'Match each problem with the aid to trade that solves it: (a) the cloth is made in Douala but needed in Maroua; (b) a shop needs money to buy stock; (c) goods may be destroyed by fire.', steps: ['(a) **Transport** overcomes distance.', '(b) **Banking** provides finance.', '(c) **Insurance** covers the risk.'] },
  ]),

  L('co-production-4', 'co-f4-intro', '1.2', 'Production, utility and occupations', 14, ['Introduction'], [
    'People have **wants** for goods and services; **production** is any activity that satisfies these wants by creating **utility**. Kinds of utility:\n- **form utility**: changing raw materials into useful goods (cocoa into chocolate)\n- **place utility**: moving goods to where they are needed (transport)\n- **time utility**: keeping goods until they are needed (warehousing)\n- **possession utility**: transferring ownership to the person who wants the good (trade).',
    'Occupations are grouped into three types:\n- **primary** (extractive): taking resources from nature: farming, fishing, forestry, mining\n- **secondary**: manufacturing and construction: brewing, cement making, building\n- **tertiary**: services: **commercial services** (trade and aids to trade) and **direct services** to people (teachers, doctors, police, hairdressers).',
    'All three depend on each other: the farmer needs transport and markets, the factory needs raw materials and banks, and service workers need goods to live. This is why commerce is so important to an economy.',
  ], 'comm-branches', 'Primary takes from nature, secondary makes, tertiary serves.',
  ['A doctor provides a:', ['direct service (tertiary)', 'commercial service', 'primary product', 'secondary product'], 'A personal service.'],
  [['Utility', 'The ability of a good or service to satisfy a want.'], ['Primary occupation', 'An occupation that extracts resources from nature.'], ['Tertiary occupation', 'An occupation that provides services.'], ['Direct service', 'A service given directly to people, such as teaching.']],
  [
    { q: 'Classify: (a) a fisherman in Limbe; (b) a worker in a brewery; (c) an insurance agent; (d) a nurse.', steps: ['(a) **Primary.**', '(b) **Secondary.**', '(c) **Tertiary: commercial service (aid to trade).**', '(d) **Tertiary: direct service.**'] },
  ]),

  // ---------- Channels and retailers ----------
  L('co-channels-4', 'co-f4-channels', '2.1', 'Channels of distribution', 13, ['Distribution'], [
    'A **channel of distribution** is the route goods take from the **producer** to the **final consumer**. Common channels:\n- producer → wholesaler → retailer → consumer (the traditional channel)\n- producer → retailer → consumer (large retailers buy direct)\n- producer → consumer (direct selling: farm gate, factory shops, online)\n- producer → agent → wholesaler → retailer → consumer (often for imported goods).',
    'The choice of channel depends on the **nature of the good** (perishable goods need short channels), the **size of the market**, the **number and location** of consumers, the **producer’s resources** and the **value** of the goods.',
    'In Cameroon, many foodstuffs pass through market traders called "buyam-sellams", who buy from farmers and sell in town markets; manufactured goods such as beer and soap go through distributors and wholesalers to thousands of small shops.',
  ], 'comm-channels', 'Perishable goods need short channels.',
  ['Fresh fish is usually sold through a:', ['short channel', 'very long channel', 'mail-order channel only', 'no channel'], 'It must reach consumers quickly.'],
  [['Channel of distribution', 'The route goods take from producer to consumer.'], ['Middleman', 'A trader between the producer and the consumer, such as a wholesaler.'], ['Direct selling', 'Selling straight from producer to consumer.']],
  [
    { q: 'Suggest a suitable channel for (a) tomatoes from a farm near Bafoussam; (b) a brand of soap made in Douala; (c) a tractor imported from abroad.', steps: ['(a) **Producer → retailer (market trader) → consumer: a short channel for a perishable good.**', '(b) **Producer → wholesaler → retailer → consumer: many small shops must be reached.**', '(c) **Producer → agent (importer) → consumer: a costly specialised good.**'] },
  ]),

  L('co-retailer-4', 'co-f4-channels', '2.2', 'The functions of the retailer', 13, ['Retail trade'], [
    '**Retail trade** is the sale of goods in **small quantities** to **final consumers**. The retailer is the last link in the chain of distribution.',
    'Functions to the **consumer**:\n- stocking a **variety** of goods in convenient quantities\n- being located **near** consumers and open at convenient hours\n- giving **advice** and information about products\n- giving **credit** to known customers, and after-sales services such as delivery and repairs.',
    'Functions to the **producer and wholesaler**:\n- **buying** their goods, so they can concentrate on production\n- passing on **information** about consumer tastes and complaints\n- **advertising** and displaying goods\n- bearing some **risk** (stock that does not sell, changes in fashion).',
  ], 'comm-channels', 'The retailer serves both ends: the consumer and the producer.',
  ['Telling a manufacturer that customers prefer smaller packets is a function of the retailer to the:', ['producer', 'consumer', 'bank', 'government'], 'Market information.'],
  [['Retail trade', 'Selling goods in small quantities to final consumers.'], ['After-sales service', 'Services after a sale, such as delivery or repairs.']],
  [
    { q: 'Give three functions of a retailer to consumers and two to producers.', steps: ['To consumers: **a variety of goods; convenient location and hours; credit to known customers.**', 'To producers: **buying their goods; passing on information about consumer tastes.**'] },
  ]),

  // ---------- Small retailers ----------
  L('co-hawkers-4', 'co-f4-smallretail', '3.1', 'Hawkers, mobile shops and market stalls', 13, ['Retail trade'], [
    '**Itinerant traders** move from place to place:\n- **hawkers** carry goods on the head, by hand or on a bicycle and sell door to door, at motor parks and in traffic\n- **mobile shops**: vehicles fitted as shops that visit villages and housing estates\n- **street vendors** who move with the crowd.',
    '**Fixed small-scale outlets** include **market stalls** (on daily or weekly market days), **kiosks** and **roadside stalls** selling everyday items: bread, phone credit, cigarettes, drinks.',
    'Advantages: very little **capital** needed, low costs, goods brought **close to consumers**, flexible prices through **bargaining**. Disadvantages: small stock, goods of uncertain **quality**, no fixed address for complaints, exposure to weather and to council rules.',
  ], 'comm-retail-small', 'Small retailers need little capital and bring goods to the consumer.',
  ['A trader who sells groundnuts in traffic at a motor park is a:', ['hawker', 'department store', 'wholesaler', 'mail-order firm'], 'An itinerant trader.'],
  [['Hawker', 'A trader who carries goods around to sell.'], ['Itinerant trader', 'A trader with no fixed place of business.'], ['Kiosk', 'A small fixed stall for everyday goods.']],
  [
    { q: 'Give two advantages and two disadvantages of hawking to consumers.', steps: ['Advantages: **goods are brought to the consumer; prices can be bargained.**', 'Disadvantages: **quality may be doubtful; it is hard to find the hawker again to complain.**'] },
  ]),

  L('co-unitshops-4', 'co-f4-smallretail', '3.2', 'Independent shops and the survival of small retailers', 13, ['Retail trade'], [
    'An **independent (unit) shop** is owned by a **sole trader** or a partnership, usually with one outlet. It may be a **general shop** (provision store selling many everyday goods) or a **single-line** shop (only shoes, only pharmacy goods, only spare parts).',
    'Features: small capital, the owner and family serve customers, personal relations, credit to known customers, long opening hours, location in neighbourhoods.',
    'Why small retailers **survive** in spite of large stores:\n- **personal service** and friendship with customers\n- **credit** to known customers\n- **convenience**: near homes, open early and late\n- selling in very **small quantities** (one cube of seasoning, one egg)\n- **flexible** prices and services such as delivery.',
  ], 'comm-retail-small', 'Personal service and credit keep small shops alive.',
  ['A shop that sells only motorcycle spare parts is a:', ['single-line shop', 'department store', 'supermarket', 'general store'], 'It specialises in one line.'],
  [['Unit shop', 'An independent shop with a single outlet.'], ['Single-line shop', 'A shop selling one type of goods.'], ['General shop', 'A shop selling many types of everyday goods.']],
  [
    { q: 'Explain why a neighbourhood provision store can survive near a supermarket.', steps: ['**It is close to homes and open long hours.**', '**It sells tiny quantities that the supermarket does not.**', '**The owner knows customers and gives credit until the end of the month.**'] },
  ]),

  // ---------- Large retailers ----------
  L('co-departmentstores-4', 'co-f4-largeretail', '4.1', 'Department stores, supermarkets and chain stores', 14, ['Retail trade'], [
    '**Department stores** are large shops with many **departments** under one roof (clothing, furniture, electronics, cosmetics), each run like a separate shop. They offer a wide choice, comfort and services such as credit, delivery and restaurants, but have high costs and prices.',
    '**Supermarkets** are large **self-service** shops selling mainly food and household goods, with goods displayed on shelves and paid for at checkouts. **Hypermarkets** are even larger, often out of town with parking. Advantages: low prices from **bulk buying**, wide choice, quick shopping; disadvantages: impersonal, little credit, temptation to impulse buying.',
    '**Multiple shops** (chain stores) are **many branches** of one firm, selling similar goods with the same layout and prices, controlled from a head office. Their buying is centralised, so they enjoy economies of scale.',
  ], 'comm-retail-large', 'Self-service is the mark of the supermarket.',
  ['A large shop with many departments under one roof is a:', ['department store', 'kiosk', 'mobile shop', 'hawker'], 'Each department is like a separate shop.'],
  [['Department store', 'A large shop divided into departments under one roof.'], ['Supermarket', 'A large self-service shop selling food and household goods.'], ['Multiple shop', 'One of many branches of a firm selling similar goods.'], ['Self-service', 'Customers choose goods themselves and pay at a checkout.']],
  [
    { q: 'Compare a supermarket and a department store on service, goods and prices.', steps: ['Service: **self-service, against personal service in each department.**', 'Goods: **mainly food and household goods, against a wide range including clothing and furniture.**', 'Prices: **generally lower in the supermarket, higher in the department store.**'] },
  ]),

  L('co-mailorder-4', 'co-f4-largeretail', '4.2', 'Mail order and e-tailing', 13, ['Retail trade'], [
    '**Mail-order** businesses sell through **catalogues** and advertisements; customers order by post, phone or online and goods are **delivered** by post or courier. Advantages: no shop needed, customers in remote areas are reached, shopping from home. Disadvantages: goods cannot be inspected before buying, delivery delays, risk of damage and return problems.',
    '**E-tailing** (electronic retailing) is selling goods **online**, through websites, apps and social media. In Cameroon many traders sell through WhatsApp, Facebook and online platforms, with payment by **mobile money** or **cash on delivery**, and delivery by motorbike couriers.',
    'Risks of online buying: **fraud** (fake sellers), goods different from pictures, and leaked personal data. Buyers should check the seller’s reputation, prefer payment on delivery, keep receipts and never share PIN codes.',
  ], 'comm-retail-large', 'Online shopping: check the seller, prefer payment on delivery.',
  ['A major disadvantage of mail order and online shopping is that:', ['goods cannot be inspected before buying', 'there is no choice', 'prices are always higher', 'it needs a shop'], 'Pictures may mislead.'],
  [['Mail order', 'Selling through catalogues with delivery to the buyer.'], ['E-tailing', 'Selling goods online.'], ['Cash on delivery', 'Payment made when goods are delivered.']],
  [
    { q: 'Give two advantages of online shopping to a buyer in a small town and two precautions.', steps: ['Advantages: **access to goods not sold locally; shopping at any time from home.**', 'Precautions: **check the seller’s reviews and real address; pay on delivery or through a trusted platform, never sharing PIN codes.**'] },
  ]),

  // ---------- Wholesale ----------
  L('co-wholesaler-4', 'co-f4-wholesale', '5.1', 'The wholesaler and his functions', 14, ['Wholesale trade'], [
    'A **wholesaler** buys goods in **bulk** from producers or importers and sells them in **smaller quantities** to retailers. Types:\n- **general** wholesalers, dealing in many lines\n- **specialised** wholesalers, dealing in one line (pharmaceuticals, building materials)\n- **cash-and-carry** wholesalers, where retailers pay cash and transport goods themselves at lower prices.',
    'Functions to the **producer**:\n- buying in **bulk**, so the producer can concentrate on production\n- **storing** goods (warehousing)\n- **financing**: paying promptly, sometimes in advance\n- bearing **risk** of price changes and spoilage\n- giving **market information**.',
    'Functions to the **retailer**:\n- **breaking bulk** into small quantities\n- offering a **wide choice** from many producers in one place\n- giving **credit**\n- **delivery** and advice on new products\n- keeping prices steady by holding stocks.',
  ], 'comm-wholesaler', 'The wholesaler buys in bulk and breaks bulk.',
  ['"Breaking bulk" is a function of the wholesaler to the:', ['retailer', 'producer', 'bank', 'government'], 'Retailers need smaller quantities.'],
  [['Wholesaler', 'A trader who buys in bulk and sells in smaller quantities to retailers.'], ['Breaking bulk', 'Dividing large quantities into smaller lots.'], ['Cash-and-carry', 'A wholesaler where buyers pay cash and collect goods themselves.']],
  [
    { q: 'Give three functions of the wholesaler to the producer and three to the retailer.', steps: ['To the producer: **bulk buying; storing goods; bearing risk.**', 'To the retailer: **breaking bulk; credit; a wide choice in one place.**'] },
  ]),

  L('co-middleman-4', 'co-f4-wholesale', '5.2', 'Should the wholesaler be eliminated?', 13, ['Wholesale trade'], [
    'Some people say the wholesaler (the "middleman") should be **eliminated** because he adds to prices. The wholesaler is often bypassed when:\n- producers sell directly to **large retailers** such as supermarkets and chain stores\n- producers open their own **shops** or sell **online**\n- goods are **perishable** or made to order\n- producers deal through **agents** or cooperatives.',
    'Arguments **for** elimination: lower prices to consumers, closer contact between producer and consumer, fresher goods, and better control by the producer.',
    'Arguments **against**: the **functions** of the wholesaler (storage, breaking bulk, credit, transport, risk-bearing) must still be performed by someone; small retailers depend on wholesalers; and specialised wholesalers often do these jobs more cheaply. So the **middleman can be eliminated, but not his functions**.',
  ], 'comm-wholesaler', 'You can eliminate the middleman, but not his functions.',
  ['When a brewery sells directly to large supermarkets, the wholesaler is:', ['bypassed (eliminated)', 'essential', 'paid twice', 'the producer'], 'The supermarket takes over his functions.'],
  [['Elimination of the wholesaler', 'Selling without passing through a wholesaler.'], ['Agent', 'A person who arranges sales on behalf of another, for commission.']],
  [
    { q: 'Discuss: "The wholesaler is a parasite who only raises prices."', steps: ['For: **each middleman adds a profit margin, so prices may rise.**', 'Against: **he stores goods, breaks bulk, gives credit and bears risk; without him, small retailers and producers would have to do this, often at higher cost.**', 'Conclusion: **the wholesaler performs useful services; he can be bypassed only when others take over his functions.**'] },
  ]),

  // ---------- Documents I ----------
  L('co-inquiry-4', 'co-f4-documents1', '6.1', 'Inquiry, quotation, catalogue and order', 14, ['Documents'], [
    'A transaction usually starts with documents that set out what the buyer wants and on what terms:\n- **letter of inquiry**: sent by the **buyer** to ask about goods, prices, quantities, delivery and terms of payment\n- **quotation**: sent by the **seller** in reply, stating prices, discounts, delivery time and terms\n- **catalogue** and **price list**: descriptions, pictures and prices of the seller’s goods\n- **order** (order form): sent by the **buyer** to request the goods; when accepted, it forms a **contract**.',
    'A good order states: the order number and date, the description and catalogue numbers of goods, quantities, prices, delivery address and date, and terms of payment, and is signed by an authorised person.',
    'Copies of each document are kept for checking later documents, such as the invoice.',
  ], 'comm-document-flow', 'Inquiry from the buyer, quotation from the seller, order from the buyer.',
  ['Which document does the seller send in reply to a letter of inquiry?', ['a quotation', 'an order', 'a receipt', 'a debit note'], 'It states prices and terms.'],
  [['Letter of inquiry', 'A letter from a buyer asking about goods and terms.'], ['Quotation', 'A seller’s statement of prices and terms.'], ['Order', 'A buyer’s request for goods, forming a contract when accepted.']],
  [
    { q: 'Ngum’s shop in Buea wants 50 cartons of soap. List the first four documents, saying who sends each.', steps: ['**Letter of inquiry: Ngum (buyer) to the supplier.**', '**Quotation (with catalogue or price list): supplier (seller) to Ngum.**', '**Order: Ngum to the supplier.**', '**Invoice (or advice note first): supplier to Ngum, once the goods are sent.**'] },
  ]),

  L('co-invoice-4', 'co-f4-documents1', '6.2', 'Invoice, advice note and delivery note', 15, ['Documents', 'Calculation'], [
    'After accepting the order, the seller sends:\n- an **advice note**: tells the buyer the goods have been **dispatched**, how and when, so the buyer can prepare to receive them\n- a **delivery note**: travels **with the goods**; the buyer checks the goods and signs a copy, which is returned as **proof of delivery**\n- an **invoice**: the **bill**, showing the goods, quantities, unit prices, total, **trade discount**, the net amount due and the **terms of payment**.',
    'A **pro forma invoice** is sent **before** the goods are supplied: when payment must be made in advance, as a quotation for a large order, or for goods sent on approval. The letters **E & OE** (errors and omissions excepted) on an invoice allow the seller to correct mistakes.',
    'Invoice calculation: total list price − trade discount = net invoice amount. A cash discount, if offered, is deducted only when payment is made promptly.',
  ], 'comm-document-flow', 'Advice note before the goods, delivery note with the goods, invoice for payment.',
  ['The document that travels with the goods and is signed on receipt is the:', ['delivery note', 'advice note', 'quotation', 'pro forma invoice'], 'Proof of delivery.'],
  [['Invoice', 'A bill showing goods supplied, prices, discounts and the amount due.'], ['Advice note', 'A notice that goods have been dispatched.'], ['Delivery note', 'A document sent with the goods and signed on receipt.'], ['Pro forma invoice', 'An invoice sent before goods are supplied.']],
  [
    { q: 'Complete the invoice: 50 cartons of soap at 6,000 FCFA; 20 bags of sugar at 15,000 FCFA; trade discount 10%.', steps: ['Soap: 50 × 6,000 = 300,000 FCFA. Sugar: 20 × 15,000 = 300,000 FCFA.', 'Total list price = 600,000 FCFA.', 'Trade discount 10% = 60,000 FCFA.', '**Net amount due = 540,000 FCFA.**'] },
  ]),

  // ---------- Documents II ----------
  L('co-creditnote-4', 'co-f4-documents2', '7.1', 'Credit notes and debit notes', 13, ['Documents', 'Calculation'], [
    'A **credit note** is sent by the **seller** to **reduce** the amount the buyer owes, when:\n- the buyer has been **overcharged** on an invoice\n- goods have been **returned** (damaged, wrong goods)\n- returnable containers (crates, gas bottles) are sent back.\nCredit notes are often printed in **red**.',
    'A **debit note** is sent by the seller to **increase** the amount owed, when the buyer has been **undercharged**, for example a price was wrongly calculated or goods were left off the invoice.',
    'Both notes refer to the original invoice number and are recorded in the accounts of both buyer and seller.',
  ], 'comm-notes', 'Credit note reduces the debt; debit note increases it.',
  ['A buyer returns 5 damaged cartons. The seller sends a:', ['credit note', 'debit note', 'quotation', 'order'], 'It reduces the amount owed.'],
  [['Credit note', 'A document reducing the amount the buyer owes.'], ['Debit note', 'A document increasing the amount the buyer owes.']],
  [
    { q: 'Ngum was invoiced 540,000 FCFA, then returned 5 damaged cartons of soap (list price 6,000 FCFA, trade discount 10%). What credit note does she receive, and what does she now owe?', steps: ['Value of returns at list price = 5 × 6,000 = 30,000 FCFA; less 10% trade discount = 27,000 FCFA.', '**Credit note for 27,000 FCFA.**', '**She now owes 540,000 − 27,000 = 513,000 FCFA.**'] },
  ]),

  L('co-statement-4', 'co-f4-documents2', '7.2', 'Statement of account and receipt', 14, ['Documents', 'Calculation'], [
    'A **statement of account** is sent by the seller, usually **monthly**, to summarise all transactions with a buyer during the period: the opening balance, invoices (debits), credit notes and payments (credits), and the **closing balance** that is still owed. It reminds the buyer to pay and allows both sides to check their records.',
    'A **receipt** is issued by the seller as **proof of payment**. It shows the date, the amount received in figures and words, the payer, what it is for and the signature of the person receiving the money. A bank record of a transfer or mobile money confirmation also serves as evidence of payment.',
    'Balances: start with the balance brought forward, **add** invoices and debit notes, **subtract** payments, credit notes and discounts.',
  ], 'comm-notes', 'Add invoices and debit notes; subtract payments, credit notes and discounts.',
  ['A statement of account is usually sent:', ['monthly, summarising transactions and the balance owed', 'with each delivery', 'before an order', 'by the buyer'], 'A summary for the period.'],
  [['Statement of account', 'A summary of transactions and the balance owed over a period.'], ['Receipt', 'A written acknowledgement of payment.'], ['Balance', 'The amount still owed.']],
  [
    { q: 'March: balance owed 1 March 120,000 FCFA; invoice 10 March 540,000; credit note 15 March 27,000; payment 20 March 300,000. Find the balance on 31 March.', steps: ['120,000 + 540,000 = 660,000.', '660,000 − 27,000 − 300,000 = 333,000.', '**Balance owed on 31 March: 333,000 FCFA.**'] },
  ]),
];
