// Commerce lessons for Form 3 (second part): sole traders, partnerships and
// limited companies; banking and simple means of payment; transport;
// warehousing; advertising and communication; consumer protection; the
// revision lessons and a school enterprise project. Foundation lessons for
// the GCE course; the Form 4 and Form 5 lessons study the same areas in more
// depth. Original text written for this app, with Cameroonian examples in
// francs CFA (FCFA).

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

export const LESSONS_3B = [
  // ---------- 12. Sole traders and partnerships ----------
  L('co-soletrader-3', 'co-f3-soletrader', '12.1', 'The sole proprietorship', 13, ['Business units'], [
    'A **sole proprietorship** (sole trader) is a business **owned and controlled by one person**, who provides the capital, takes the decisions, keeps all the profit and bears all the losses. The owner may employ workers. It is the most common business unit in Cameroon: provision stores, tailoring workshops, hair salons, carpentry shops and many farms.',
    'Formation is simple: the owner finds capital (savings, family, a loan, a credit union) and registers the business. In Cameroon, businesses register in the **Trade and Personal Property Credit Register** (RCCM), and the business creation formalities centres (CFCE) group the steps in one place. Advantages:\n- **easy and cheap** to start\n- the owner is their **own boss** and takes **quick decisions**\n- **all the profit** goes to the owner\n- **personal contact** with customers and workers\n- business affairs can be kept **private**.',
    'Disadvantages:\n- **unlimited liability**: the owner’s personal property (house, car, savings) can be taken to pay business debts\n- **limited capital**, so the business stays small\n- **heavy workload** and no one to share decisions\n- **lack of continuity**: the business may close if the owner falls ill or dies\n- the owner may lack some skills (accounts, marketing).',
  ], 'comm3-soletrader', 'One owner: all the profit, all the risk.',
  ['A sole trader’s house may be sold to pay business debts because of:', ['unlimited liability', 'limited liability', 'a dividend', 'a partnership deed'], 'Owner and business are legally the same.'],
  [['Sole proprietorship', 'A business owned and controlled by one person.'], ['Unlimited liability', 'The owner’s personal property can be used to pay business debts.'], ['Continuity', 'The ability of a business to go on after the owner leaves or dies.'], ['RCCM', 'Trade and Personal Property Credit Register, where businesses in Cameroon are registered.']],
  [
    { q: 'Atangana’s carpentry business owes 2,500,000 FCFA. The business assets are worth 1,600,000 FCFA. As a sole trader, how much may come from his personal property?', steps: ['**Shortfall: 2,500,000 − 1,600,000 = 900,000 FCFA.**', '**With unlimited liability, creditors may claim the 900,000 FCFA from Atangana’s personal property, such as his savings or car.**'] },
  ]),

  L('co-partnership-3', 'co-f3-soletrader', '12.2', 'The partnership', 14, ['Business units'], [
    'A **partnership** is a business owned by **two or more people** who agree to carry on business together and share the profit. (Commerce textbooks usually give a maximum of 20 partners.) Partnerships are common among lawyers, doctors, accountants and traders who pool their money.',
    'Partners sign a **partnership deed** (agreement), which sets out: the name and purpose of the business; the **capital** each partner contributes; how **profits and losses** are shared; the duties and any salaries of partners; how a partner may join or leave; and how the partnership may end. If there is no agreement on profit, profits are shared **equally**.',
    'Kinds of partner:\n- **active (general) partner**: contributes capital and takes part in management; has unlimited liability\n- **sleeping (dormant) partner**: contributes capital and shares profit but takes no part in management\n- **limited partner**: liability limited to the capital contributed; takes no part in management (there must be at least one general partner)\n- **nominal partner**: lends their name and reputation but contributes no capital.\nAdvantages: more capital and skills than a sole trader, shared work and decisions, shared losses. Disadvantages: **unlimited liability** of general partners, possible **disagreements**, profit shared, and the partnership may end when a partner dies or leaves.',
  ], 'comm3-partnership', 'More owners, more capital, more skills; but disagreements and unlimited liability.',
  ['A well-known person who allows the firm to use their name but puts in no capital is a:', ['nominal partner', 'sleeping partner', 'general partner', 'shareholder'], 'They lend reputation only.'],
  [['Partnership', 'A business owned by two or more people who share the profit.'], ['Partnership deed', 'The written agreement setting out the rules of a partnership.'], ['Sleeping partner', 'A partner who contributes capital but takes no part in management.'], ['Limited partner', 'A partner whose liability is limited to the capital contributed.']],
  [
    { q: 'Ngo and Fon start a partnership. Ngo puts in 600,000 FCFA and Fon 400,000 FCFA. The deed says profits are shared in the ratio of capital. The profit for the year is 250,000 FCFA. Work out each partner’s share.', steps: ['**Total capital: 600,000 + 400,000 = 1,000,000 FCFA. Ratio 6 : 4, or 3 : 2.**', '**Ngo: 3/5 × 250,000 = 150,000 FCFA.**', '**Fon: 2/5 × 250,000 = 100,000 FCFA.**', '**Check: 150,000 + 100,000 = 250,000 FCFA.**'] },
  ]),

  // ---------- 13. Limited companies ----------
  L('co-privateco-3', 'co-f3-companies', '13.1', 'Private and public limited companies', 14, ['Business units'], [
    'A **limited company** (joint stock company) is owned by **shareholders**, who buy **shares** in its capital. It has two key features:\n- **separate legal identity**: the company is a legal person apart from its owners; it can own property, make contracts, sue and be sued in its own name, and it continues when shareholders change (**continuity**)\n- **limited liability**: shareholders can lose only the money they paid for their shares, not their personal property.',
    'A **private limited company** (Ltd; in French-speaking practice often a SARL):\n- its shares are **not offered to the general public**, and transfer of shares is restricted\n- it usually has few shareholders, often family members or friends\n- it is common for medium-sized family businesses.\nA **public limited company** (Plc; often a SA):\n- it may **offer shares to the public** and have them traded on a **stock exchange**\n- it can raise **very large capital**\n- it must publish audited accounts every year.',
    'Shareholders elect a **board of directors** to run the company and receive **dividends**, a share of the profit paid per share. In Central Africa, shares of public companies are traded on the regional stock exchange, the **BVMAC**, based in **Douala**.',
  ], 'comm3-companies', 'Ltd: shares sold privately. Plc: shares sold to the public. Both: limited liability.',
  ['A company can continue after a shareholder dies because it has:', ['a separate legal identity', 'unlimited liability', 'only one owner', 'no shares'], 'The company is a legal person.'],
  [['Shareholder', 'A person who owns shares in a company.'], ['Limited liability', 'A shareholder can lose only the money paid for their shares.'], ['Private limited company', 'A company whose shares are not offered to the public.'], ['Public limited company', 'A company that may offer its shares to the public.']],
  [
    { q: 'Ebai owns 50 shares bought at 10,000 FCFA each in a limited company. The company fails, owing 80,000,000 FCFA more than its assets. What is the most Ebai can lose?', steps: ['**Ebai paid 50 × 10,000 = 500,000 FCFA for the shares.**', '**With limited liability, the most Ebai can lose is 500,000 FCFA; creditors cannot take Ebai’s personal property.**'] },
  ]),

  L('co-shares-3', 'co-f3-companies', '13.2', 'Forming a company, shares and dividends', 13, ['Business units'], [
    'A company is formed by **promoters**, the people who bring the idea and the first capital. They prepare the company’s documents: the **Memorandum of Association** (the company’s name, address, objects and capital: its relations with the outside world) and the **Articles of Association** (its internal rules: meetings, directors, voting, dividends). The company is then **registered**; once registered, it exists as a legal person and can start business.',
    'A company raises capital by selling **shares**. A shareholder receives **dividends** when profit is shared out, has a **vote** at the general meeting, and can sell the shares (freely in a public company). **Ordinary shares** carry the most risk and the most say; **preference shares** receive a fixed dividend before ordinary shares.',
    'Dividends are worked out per share:\n- profit set aside for dividends ÷ number of shares = **dividend per share**\n- dividend per share × shares held = what a shareholder receives.\nPart of the profit is usually **kept back** (retained) to help the company grow.',
  ], 'comm3-company-formation', 'Promoters, documents, registration, then shares and dividends.',
  ['The document that sets out a company’s internal rules is the:', ['Articles of Association', 'Memorandum of Association', 'invoice', 'delivery note'], 'Meetings, directors, voting.'],
  [['Promoter', 'A person who takes the steps to form a company.'], ['Memorandum of Association', 'The document stating a company’s name, objects and capital.'], ['Articles of Association', 'The document stating a company’s internal rules.'], ['Dividend', 'A share of the profit paid to shareholders, per share.']],
  [
    { q: 'A company with 20,000 shares makes a profit of 9,000,000 FCFA. It keeps back 5,000,000 FCFA and pays the rest as dividends. Mbu holds 300 shares. Work out the dividend per share and Mbu’s dividend.', steps: ['**Profit for dividends: 9,000,000 − 5,000,000 = 4,000,000 FCFA.**', '**Dividend per share: 4,000,000 ÷ 20,000 = 200 FCFA.**', '**Mbu’s dividend: 300 × 200 = 60,000 FCFA.**'] },
  ]),

  // ---------- 14. Banking ----------
  L('co-banks-3', 'co-f3-banking', '14.1', 'What commercial banks do', 13, ['Banking'], [
    'A **commercial bank** is a business that keeps people’s money safe and lends money at a profit. Banks in Cameroon include Afriland First Bank, Société Générale Cameroun, BICEC, SCB Cameroun, Ecobank and UBA. Functions:\n- **accepting deposits** in **current accounts** (for daily payments), **savings accounts** (earning interest) and **fixed deposit accounts** (money kept for a fixed period at a higher rate)\n- **lending** through **loans** (a fixed sum repaid in instalments) and **overdrafts** (spending more than the balance on a current account, up to a limit)\n- providing **means of payment**: cheques, transfers, cards, standing orders\n- **other services**: safekeeping of valuables, financial advice, foreign exchange, collecting payments.',
    'The bank earns **interest** on loans and pays a lower interest on savings; the difference, with fees, is its income.',
    'The **central bank** for Cameroon and the other CEMAC countries is the **BEAC** (Bank of Central African States), with its headquarters in **Yaoundé**. It issues the **franc CFA**, acts as the bankers’ bank and the government’s bank, and controls the supply of money; the **COBAC** supervises the banks. **Microfinance institutions** and **credit unions** (cooperatives where members save and borrow) serve many small traders and farmers, especially outside the big towns.',
  ], 'comm3-bank-functions', 'Banks take deposits, lend, and move money.',
  ['Money kept in a bank for an agreed period at a higher interest rate is a:', ['fixed deposit', 'current account', 'cheque', 'overdraft'], 'It cannot be withdrawn freely.'],
  [['Current account', 'An account for daily payments, usually by cheque, card or transfer.'], ['Savings account', 'An account that earns interest on money saved.'], ['Overdraft', 'Permission to spend more than the balance on a current account, up to a limit.'], ['BEAC', 'Bank of Central African States, the central bank that issues the franc CFA.']],
  [
    { q: 'Tabe borrows 600,000 FCFA from a bank at 12% interest for one year and repays in 12 equal monthly instalments. Work out the interest and the monthly instalment.', steps: ['**Interest: 12% × 600,000 = 72,000 FCFA.**', '**Total to repay: 600,000 + 72,000 = 672,000 FCFA.**', '**Monthly instalment: 672,000 ÷ 12 = 56,000 FCFA.**'] },
  ]),

  L('co-paymethods-3', 'co-f3-banking', '14.2', 'Simple means of payment', 13, ['Banking'], [
    '**Cash** (banknotes and coins of the franc CFA) is quick and accepted everywhere, but it can be **lost or stolen** and is risky for large sums.',
    'Bank and electronic means of payment:\n- **cheque**: a written order by an account holder (the **drawer**) to their bank (the **drawee**) to pay a sum to a named person (the **payee**)\n- **bank transfer**: money moved directly from one account to another, at the bank or by phone or internet banking\n- **standing order**: an instruction to the bank to pay a fixed amount regularly (rent, school fees)\n- **debit card**: used at cash machines (ATMs) and in shops\n- **mobile money**: sending, receiving and paying money from a phone account (MTN Mobile Money, Orange Money); it has brought banking services to millions of people without bank accounts.',
    'Choosing a method depends on the **amount**, the **distance**, **safety**, **speed**, the **cost** (fees) and the need for a **record**. Bank and mobile payments leave a record that can prove payment.',
  ], 'comm3-paymethods', 'Cash for small sums nearby; transfers and mobile money for safety and distance.',
  ['On a cheque, the bank that must pay is the:', ['drawee', 'drawer', 'payee', 'endorser'], 'The drawer writes it; the payee receives the money.'],
  [['Cheque', 'A written order to a bank to pay a sum from the drawer’s account.'], ['Drawer', 'The account holder who writes and signs a cheque.'], ['Payee', 'The person named on a cheque to receive the money.'], ['Standing order', 'An instruction to a bank to pay a fixed sum regularly.']],
  [
    { q: 'Fru’s current account has 150,000 FCFA. She has an overdraft limit of 100,000 FCFA. She pays a supplier 180,000 FCFA by transfer and pays 45,000 FCFA rent by standing order. What is her balance, and is she within her limit?', steps: ['**Payments: 180,000 + 45,000 = 225,000 FCFA.**', '**Balance: 150,000 − 225,000 = −75,000 FCFA (overdrawn by 75,000).**', '**75,000 is within the 100,000 limit, so the payments go through; she will pay interest on the overdraft.**'] },
  ]),

  // ---------- 15. Transport ----------
  L('co-modes-3', 'co-f3-transport', '15.1', 'The modes of transport in Cameroon', 14, ['Transport'], [
    '**Transport** moves goods and people from where they are to where they are wanted, creating **place utility**. Without it, goods produced in one region could not reach markets in another.',
    'The modes:\n- **road**: lorries, vans, buses, motorbikes; the most used mode in Cameroon; **door to door** and flexible, but costly over long distances and affected by bad roads and accidents\n- **rail**: **Camrail** runs the Transcameroon line from **Douala** to **Yaoundé** and on to **Ngaoundéré**; cheap for heavy, bulky goods such as timber, cement and fuel; but it serves only places on the line\n- **air**: Douala and Yaoundé-Nsimalen international airports; the **fastest** for long distances, good for light, valuable or perishable goods; but **expensive**\n- **water**: sea transport through the ports of **Douala**, **Kribi** (a deep-sea port) and **Limbe**; the cheapest per tonne for bulky goods over long distances; but **slow**\n- **pipeline**: carries liquids and gas; the **Chad-Cameroon oil pipeline** brings crude oil from Chad to the coast at **Kribi**.',
    'The modes work together: cocoa travels by road to a railway station or straight to Douala, then by sea to Europe.',
  ], 'comm3-transport-modes', 'Road for door to door, rail for bulk inland, sea for bulk abroad, air for speed, pipeline for liquids.',
  ['A mode of transport with high building costs that carries only liquids and gas is:', ['pipeline', 'air', 'road', 'rail'], 'Cheap to run once built.'],
  [['Mode of transport', 'A means of moving goods: road, rail, air, water or pipeline.'], ['Door to door', 'Carrying goods from the seller’s premises to the buyer’s without changing vehicle.'], ['Deep-sea port', 'A port deep enough for very large ships.'], ['Camrail', 'The company that runs Cameroon’s railway.']],
  [
    { q: 'A lorry charges 25 FCFA per kilogram from Douala to Yaoundé. Rail charges 14 FCFA per kilogram, plus 30,000 FCFA in total to carry the goods by road to and from the stations. For 8 tonnes, which is cheaper and by how much? (1 tonne = 1,000 kg)', steps: ['**Weight: 8 × 1,000 = 8,000 kg.**', '**Road: 8,000 × 25 = 200,000 FCFA.**', '**Rail: 8,000 × 14 + 30,000 = 112,000 + 30,000 = 142,000 FCFA.**', '**Rail is cheaper by 200,000 − 142,000 = 58,000 FCFA, though slower.**'] },
  ]),

  L('co-choosemode-3', 'co-f3-transport', '15.2', 'Choosing a mode of transport', 12, ['Transport'], [
    'A trader chooses transport by weighing several **criteria**:\n- **cost**: the charge compared with the value of the goods\n- **speed**: urgent and perishable goods need fast transport\n- **nature of the goods**: perishable (fish, flowers), fragile (glass), bulky (cement, timber), valuable (gold, medicines), liquid (fuel)\n- **distance**: road for short distances, rail or sea for long ones\n- **safety and security**: risk of damage, theft and accidents\n- **reliability and regularity**: will the goods arrive on time?\n- **availability**: is there a railway, an airport or a good road?\n- **convenience**: door-to-door service saves handling.',
    'No mode is best for everything. Often the choice is a **balance**: the cheapest is rarely the fastest.',
    'Good packing, correct labels and insurance reduce the risk whatever the mode.',
  ], 'comm3-transport-choice', 'Match the mode to the goods, the distance and the deadline.',
  ['Medicines urgently needed in Garoua from Douala would best go by:', ['air', 'sea', 'pipeline', 'hand cart'], 'Speed matters most.'],
  [['Criteria', 'The points used to judge and make a choice.'], ['Perishable', 'Likely to go bad quickly, such as fish or fruit.'], ['Bulky goods', 'Goods that take up a lot of space for their value, such as cement.'], ['Reliability', 'Being dependable and on time.']],
  [
    { q: 'Choose a mode for each and give a reason: (a) 500 tonnes of timber from Bélabo to Douala; (b) fresh fish from Limbe to Buea; (c) crude oil from southern Chad to Kribi; (d) 40 containers of cocoa from Douala to Europe.', steps: ['(a) **Rail: heavy, bulky goods over a long distance; Bélabo is on the Transcameroon line.**', '(b) **Road: perishable goods over a short distance, door to door.**', '(c) **Pipeline: a liquid moved continuously over a long distance.**', '(d) **Sea: bulky goods over a very long distance at low cost.**'] },
  ]),

  // ---------- 16. Warehousing ----------
  L('co-warehouse-3', 'co-f3-warehousing', '16.1', 'Why warehousing matters', 12, ['Warehousing'], [
    'A **warehouse** is a building where goods are stored until they are needed. Warehousing bridges the gap in **time** between production and consumption, creating **time utility**.',
    'Importance:\n- **seasonal goods** (maize, coffee, cocoa) harvested once are available all year\n- **steady prices**: goods stored in times of plenty are released in times of scarcity\n- **continuous production**: factories keep making goods even when sales are slow, and keep stocks of raw materials\n- **protection** of goods from rain, heat, pests and theft\n- goods can be **prepared** for sale: graded, packed, branded and broken into smaller lots\n- traders can buy in **bulk** and meet sudden demand.',
    'A good warehouse is **secure**, **dry** and **well ventilated**, protected against fire and pests, close to **transport** routes, with equipment to load and move goods. Perishable goods need **cold rooms**.',
  ], 'comm3-warehouse-roles', 'Warehouses store goods until they are wanted.',
  ['Factories can go on producing when sales are slow because of:', ['warehousing', 'barter', 'hawking', 'advertising only'], 'Finished goods are stored.'],
  [['Warehouse', 'A building where goods are stored until needed.'], ['Time utility', 'Value added by making goods available when they are wanted.'], ['Seasonal goods', 'Goods produced only at certain times of the year.'], ['Cold room', 'A refrigerated store for perishable goods.']],
  [
    { q: 'A trader stores 200 bags of maize bought after harvest at 12,000 FCFA a bag. Storage costs 500 FCFA a bag a month for 4 months, and 6 bags are lost to pests. She sells the rest at 17,000 FCFA. What is her profit?', steps: ['**Cost of maize: 200 × 12,000 = 2,400,000 FCFA.**', '**Storage: 200 × 500 × 4 = 400,000 FCFA. Total cost: 2,800,000 FCFA.**', '**Sales: (200 − 6) × 17,000 = 194 × 17,000 = 3,298,000 FCFA.**', '**Profit: 3,298,000 − 2,800,000 = 498,000 FCFA, the reward for storing until the lean season.**'] },
  ]),

  L('co-warehousetypes-3', 'co-f3-warehousing', '16.2', 'Types of warehouse', 12, ['Warehousing'], [
    '**Private warehouses** are owned by a business for its own goods:\n- **manufacturers’** warehouses for raw materials and finished goods\n- **wholesalers’** warehouses, the core of the wholesale business\n- **retailers’** storerooms, and the central depots of chain stores.',
    '**Public warehouses** are owned by the state, councils or companies and **rented** to anyone who needs space: traders, farmers’ cooperatives and small manufacturers who cannot build their own. They are found near ports, railway stations and big markets.',
    '**Bonded warehouses** hold **imported goods** on which **customs duty** has not yet been paid. They are under **customs control**. The importer pays duty only when goods are taken out for sale in the country, and pays none on goods re-exported. This helps importers who cannot pay all the duty at once. Bonded warehouses are found near ports and airports such as Douala.',
  ], 'comm3-warehouse-types', 'Private for the owner, public for hire, bonded for goods awaiting duty.',
  ['A small farmers’ cooperative that rents storage space near a market uses a:', ['public warehouse', 'bonded warehouse', 'private warehouse of a factory', 'department store'], 'Space is hired out to anyone.'],
  [['Private warehouse', 'A warehouse owned by a business for its own goods.'], ['Public warehouse', 'A warehouse whose space is rented to anyone.'], ['Bonded warehouse', 'A warehouse under customs control for imported goods awaiting duty.'], ['Customs duty', 'A tax charged on goods brought into the country.']],
  [
    { q: 'A trader rents 30 m² in a public warehouse at 2,000 FCFA per m² per month for 5 months. How much rent is paid?', steps: ['**Monthly rent: 30 × 2,000 = 60,000 FCFA.**', '**For 5 months: 5 × 60,000 = 300,000 FCFA.**'] },
  ]),

  // ---------- 17. Advertising and communication ----------
  L('co-adroles-3', 'co-f3-advertising', '17.1', 'The roles and kinds of advertising', 13, ['Advertising'], [
    '**Advertising** is the paid public announcement of goods, services or ideas to **inform** people, **persuade** them to buy and **remind** them of a product. It creates and keeps **demand**.',
    'Kinds:\n- **informative** advertising gives facts: what the product is, its price, where to buy it (a new bus agency announcing its routes and fares)\n- **persuasive (competitive)** advertising tries to convince buyers to choose one brand over others, often with slogans, music and famous faces\n- **collective (generic)** advertising promotes a whole product, paid for by a group of producers ("eat local rice")\n- **public service** messages promote ideas (vaccination, road safety).',
    'Advantages: it informs buyers of new products, increases sales so firms can produce on a large scale at lower cost, creates jobs, and pays for newspapers, radio and television. Disadvantages: it **adds to costs** and so to prices, it can **mislead**, and it may push people to buy what they do not need or cannot afford.',
  ], 'comm3-ad-roles', 'Inform, persuade, remind.',
  ['A government radio message urging parents to vaccinate children is:', ['a public service message', 'persuasive brand advertising', 'collective advertising by producers', 'a sales promotion'], 'It promotes an idea, not a product.'],
  [['Advertising', 'The paid public announcement of goods, services or ideas.'], ['Informative advertising', 'Advertising that gives facts about a product.'], ['Persuasive advertising', 'Advertising that tries to make people choose one brand.'], ['Collective advertising', 'Advertising of a whole product by a group of producers.']],
  [
    { q: 'A firm sells 4,000 tins of juice a month at 500 FCFA. It spends 300,000 FCFA a month on radio advertising, and sales rise to 6,000 tins. Each tin costs 320 FCFA to produce. Did the advertising pay for itself?', steps: ['**Profit per tin: 500 − 320 = 180 FCFA.**', '**Extra tins: 6,000 − 4,000 = 2,000. Extra profit: 2,000 × 180 = 360,000 FCFA.**', '**After advertising: 360,000 − 300,000 = 60,000 FCFA more profit, so the advertising paid for itself.**'] },
  ]),

  L('co-admedia-3', 'co-f3-advertising', '17.2', 'Advertising media, communication and ethics', 13, ['Advertising'], [
    'An advertising **medium** is the channel that carries the message:\n- **television** and **radio**: national (CRTV) and private stations, and **community radio** in local languages that reaches rural areas\n- **newspapers** and **magazines** (Cameroon Tribune and private papers): detailed messages that can be kept\n- **posters** and **billboards** along roads and in towns\n- the **internet** and **social media**, and **SMS** to phones\n- **sales promotion**: free samples, price reductions, gifts, demonstrations, shop displays.\nThe choice depends on the **cost**, the **audience** to reach, the kind of product and the size of the budget.',
    '**Communication** services link buyers and sellers: **postal** services (**CAMPOST**: letters, parcels, money transfers), **courier** services, **telephone** (fixed lines and mobile networks), and the **internet** (e-mail, websites, messaging). They let traders place orders, check prices and settle complaints quickly.',
    '**Ethics** in advertising means messages that are **truthful**, **decent** and **fair**: no false claims, no hidden dangers, no use of children to pressure parents, no insulting of competitors, and respect for culture. The law protects consumers against misleading advertising.',
  ], 'comm3-ad-media', 'Pick the medium your buyers use; tell the truth.',
  ['To advertise a fertiliser to farmers in villages, the most suitable medium is probably:', ['community radio in local languages', 'an airline magazine', 'a city billboard only', 'a fashion website'], 'Radio reaches rural audiences cheaply.'],
  [['Medium', 'The channel that carries an advertising message.'], ['Sales promotion', 'Short-term offers such as free samples or price cuts to boost sales.'], ['CAMPOST', 'Cameroon’s public postal service.'], ['Ethics', 'Rules of honest and fair conduct.']],
  [
    { q: 'A shop has 120,000 FCFA for advertising. A radio spot costs 8,000 FCFA and a poster 1,500 FCFA. It buys 10 radio spots and spends the rest on posters. How many posters can it buy?', steps: ['**Radio: 10 × 8,000 = 80,000 FCFA.**', '**Left: 120,000 − 80,000 = 40,000 FCFA.**', '**Posters: 40,000 ÷ 1,500 = 26.67, so 26 posters (39,000 FCFA), with 1,000 FCFA left.**'] },
  ]),

  // ---------- 18. Consumer protection ----------
  L('co-exploit-3', 'co-f3-consumer', '18.1', 'Why consumers need protection', 13, ['Consumer protection'], [
    'A **consumer** is anyone who buys and uses goods and services. Consumers are often weaker than sellers: they know less about the product, buy in small quantities and cannot test everything. Some traders take advantage of this.',
    'Common forms of exploitation:\n- **false weights and measures**: rigged scales, small "cups" and tins for measuring grains\n- **adulteration**: mixing goods with cheaper substances (water in palm oil or fuel, sand in rice)\n- **expired goods** and **fake (counterfeit)** goods, especially medicines and cosmetics\n- **misleading advertising** and false labels\n- **hoarding** to create scarcity and raise prices, and **overpricing** before festivals and school resumption\n- **unsafe goods**: faulty electrical items, toxic toys\n- refusing to give **receipts** or to exchange faulty goods.',
    'The results are lost money, harm to **health and safety**, and even death in the case of fake medicines. That is why consumers need protection by the law, by the state and by their own care.',
  ], 'comm3-exploitation', 'Short weights, adulteration, fakes and false claims cheat consumers.',
  ['Holding back sugar from the market so the price rises is:', ['hoarding', 'adulteration', 'advertising', 'a cash discount'], 'Creating artificial scarcity.'],
  [['Consumer', 'A person who buys and uses goods and services.'], ['Exploitation', 'Taking unfair advantage of someone.'], ['Adulteration', 'Mixing a good with cheaper or harmful substances.'], ['Counterfeit', 'A fake copy of a genuine product.']],
  [
    { q: 'A trader sells rice with a "cup" said to hold 500 g, at 300 FCFA a cup. The cup really holds 440 g. A customer buys 10 cups. How much rice is the customer cheated of, and what is it worth at the fair price?', steps: ['**Promised: 10 × 500 = 5,000 g. Received: 10 × 440 = 4,400 g.**', '**Cheated of: 5,000 − 4,400 = 600 g.**', '**Fair price: 300 FCFA per 500 g, so 600 g is worth 600 ÷ 500 × 300 = 360 FCFA.**'] },
  ]),

  L('co-rights-3', 'co-f3-consumer', '18.2', 'Consumer rights and who protects them', 14, ['Consumer protection'], [
    'Consumer rights recognised around the world, and in Cameroon’s framework law on consumer protection of 2011, include the right to:\n- **safety**: protection from dangerous goods\n- **information**: honest labels, prices, ingredients and expiry dates\n- **choice**: a range of goods at fair prices\n- **redress**: compensation or replacement for faulty goods\n- **representation** (to be heard): consumers’ views count in decisions\n- **consumer education**.\n**World Consumer Rights Day** is marked on **15 March** each year.',
    'Who protects consumers in Cameroon:\n- the **law**, which punishes fraud, false weights, misleading advertising and the sale of dangerous goods\n- the **Ministry of Trade**, whose officers check prices, weights and measures and seize fraudulent goods\n- **ANOR** (Agence des Normes et de la Qualité), which sets **standards** and certifies products\n- the **Ministry of Public Health**, which controls medicines and food safety\n- **consumer associations**, which inform consumers, receive complaints and speak for them\n- the **courts**, where consumers can claim compensation.',
    'Self-protection: read labels and **expiry dates**, check weights and change, ask for a **receipt**, keep guarantees, compare prices, buy medicines only from pharmacies, and **complain** first to the seller, then to the authorities or an association.',
  ], 'comm3-consumer-rights', 'Know your rights, keep your receipt, complain to the right body.',
  ['A buyer who gets a refund for a faulty radio has used the right to:', ['redress', 'representation', 'choice', 'information'], 'Putting the wrong right.'],
  [['Consumer rights', 'The entitlements of buyers, such as safety, information, choice and redress.'], ['Redress', 'Compensation, repair or replacement for a wrong.'], ['ANOR', 'Agence des Normes et de la Qualité, which sets and enforces standards in Cameroon.'], ['Consumer association', 'A voluntary group that informs and defends consumers.']],
  [
    { q: 'Ndip buys an electric iron for 9,000 FCFA with a 6-month guarantee. It stops working after 2 months, and the shop refuses to help. List the steps Ndip should take.', steps: ['**Keep the receipt and the guarantee card as evidence.**', '**Return to the shop in writing or in person and ask for repair, replacement or refund under the guarantee.**', '**If refused, report to the Ministry of Trade services or a consumer association.**', '**As a last step, claim compensation in court.**'] },
  ]),

  // ---------- 19. Revision: commerce, wants and production ----------
  L('co-reviewwants-3', 'co-f3-review1', '19.1', 'Revision: commerce, wants and production', 13, ['Revision'], [
    'Term 1 in one chain: people have **unlimited wants** but **scarce resources**, so they must **choose** (scale of preference, opportunity cost). To satisfy wants, they **produce**, adding **form, place, time and possession utility**. Production uses **land, labour, capital and the entrepreneur**, rewarded by **rent, wages, interest and profit**. People **specialise** in **industrial**, **commercial** or **direct service** occupations, and because they specialise they must **trade**: that is **commerce**.',
    'Key definitions to know word for word: commerce, trade, aids to trade, want, scarcity, opportunity cost, production, utility, the four factors and their rewards, specialisation, division of labour.',
    'Common errors: calling the trader "not a producer" (trade completes production); mixing up **capital** (man-made goods for production) with money alone; mixing up **interest** (reward of capital) with **profit** (reward of the entrepreneur).',
  ], 'comm3-review-production', 'Wants → production → factors → specialisation → commerce.',
  ['Which is the reward for organising production and bearing risk?', ['profit', 'interest', 'rent', 'wages'], 'The entrepreneur earns profit.'],
  [['Scarcity', 'Resources are limited compared with wants.'], ['Utility', 'The power of a good to satisfy a want.'], ['Factors of production', 'Land, labour, capital and the entrepreneur.'], ['Interdependence', 'Relying on others for what one does not produce.']],
  [
    { q: 'Structured question: (a) Define opportunity cost. (b) Give the reward of each factor of production. (c) Explain why a retailer is a producer.', steps: ['(a) **Opportunity cost is the next best alternative given up when a choice is made.**', '(b) **Land: rent; labour: wages; capital: interest; entrepreneur: profit.**', '(c) **Production is complete only when goods reach the consumer; the retailer adds possession utility (and place utility by being near buyers), so the retailer is a producer.**'] },
  ]),

  L('co-reviewprod-3', 'co-f3-review1', '19.2', 'Answering short and structured questions', 12, ['Revision'], [
    'Commerce papers test **recall** (definitions, lists), **understanding** (explain, distinguish) and **application** (examples from real life, calculations).',
    'Command words:\n- **define**: give the exact meaning in one sentence\n- **state** or **list**: give points without explaining\n- **explain**: give a point, then say **why** or **how**, with an **example**\n- **distinguish between**: show the difference point by point, using "while" or "whereas"\n- **calculate**: show every step and write the unit (FCFA).',
    'A good answer to "explain" questions follows **point, explanation, example**. One clear point well explained is worth more than five bare words. Use Cameroonian examples: they show you understand.',
  ], 'comm3-answer-plan', 'Point, explanation, example.',
  ['"Distinguish between a necessity and a luxury" asks you to:', ['show how they differ, point by point', 'list only luxuries', 'give one word', 'draw a picture'], 'A comparison.'],
  [['Define', 'Give the exact meaning in a sentence.'], ['Explain', 'Give a point, then say why or how, with an example.'], ['Distinguish', 'Show the difference between two things.'], ['Application', 'Using knowledge in a real situation.']],
  [
    { q: 'Answer: "Explain two advantages of division of labour."', steps: ['**Point 1: workers become skilled. Explanation: by repeating one task, a worker becomes fast and makes fewer mistakes. Example: a worker who only packs bread can pack hundreds of loaves an hour.**', '**Point 2: machines can be used. Explanation: simple repeated tasks can be done by machines, raising output. Example: a dough-mixing machine in a bakery.**'] },
  ]),

  // ---------- 20. Revision: home trade and documents ----------
  L('co-reviewtrade-3', 'co-f3-review2', '20.1', 'Revision: home trade, retailers, wholesalers and business units', 13, ['Revision'], [
    'Term 2 in summary:\n- **home trade** = wholesale (bulk, to retailers) + retail (small amounts, to consumers)\n- **small retailers**: hawkers, pedlars, mobile shops, market traders, kiosks and call boxes, unit shops\n- **large retailers**: department stores, supermarkets, chain stores\n- **e-commerce**: B2C, B2B and C2C, paid by mobile money or card or on delivery\n- **wholesaler**: serves both manufacturer and retailer; may be bypassed, but its functions remain\n- **business units**: sole trader (one owner, unlimited liability), partnership (2 or more, deed, kinds of partner), limited companies (shareholders, limited liability, Ltd and Plc).',
    'Comparisons often asked: wholesale and retail; unit shop and supermarket; sole trader and partnership; private and public limited company; limited and unlimited liability.',
    'For comparisons, set out matching points side by side: ownership, capital, liability, control, profit, continuity.',
  ], 'comm3-review-trade', 'Compare point by point: ownership, capital, liability, control, profit.',
  ['A difference between a sole trader and a limited company is that:', ['shareholders have limited liability, the sole trader does not', 'the sole trader has many shareholders', 'companies have one owner', 'neither can make a profit'], 'Liability is a key difference.'],
  [['Home trade', 'Trade within one country: wholesale and retail.'], ['Bypass', 'To go round a middleman.'], ['Unlimited liability', 'Personal property may be used to pay business debts.'], ['Limited liability', 'Owners can lose only the money invested.']],
  [
    { q: 'Distinguish between a sole trader and a private limited company under three headings.', steps: ['**Ownership: one person, whereas a company is owned by several shareholders.**', '**Liability: unlimited for the sole trader, whereas shareholders have limited liability.**', '**Continuity: the sole trader’s business may end at the owner’s death, whereas the company continues as a separate legal person.**'] },
  ]),

  L('co-reviewdocs-3', 'co-f3-review2', '20.2', 'Revision: invoices, credit notes and debit notes', 13, ['Revision'], [
    'The order of documents in a home trade sale studied this year: **order** (buyer) → **advice note** and **delivery note** (seller, with the goods) → **invoice** (seller) → **credit note** or **debit note** if a correction is needed (seller) → payment.',
    'Steps for any invoice calculation:\n- multiply **quantity × unit price** for each line\n- add the lines to get the **total**\n- work out the **trade discount** on the total and subtract it to get the **net amount**\n- subtract any **credit note** and add any **debit note** (each after the same trade discount) to get the final amount owed.',
    'Check your answer: the amount owed after a credit note must be **smaller**; after a debit note, **larger**. Write every figure with "FCFA" and line up the working neatly.',
  ], 'comm3-invoice-check', 'Lines, total, discount, net, then credit down and debit up.',
  ['After a credit note is received, the amount the buyer owes:', ['falls', 'rises', 'stays the same', 'doubles'], 'A credit note reduces the debt.'],
  [['Net amount', 'The amount due after discount.'], ['Credit note', 'Reduces the amount owed.'], ['Debit note', 'Increases the amount owed.'], ['Unit price', 'The price of one item.']],
  [
    { q: 'An invoice lists 12 crates of drinks at 7,500 FCFA and 30 packets of biscuits at 2,000 FCFA, less 20% trade discount. One crate is returned broken. Work out the net invoice, the credit note and the amount owed.', steps: ['**Lines: 12 × 7,500 = 90,000; 30 × 2,000 = 60,000. Total: 150,000 FCFA.**', '**Trade discount: 20% × 150,000 = 30,000. Net invoice: 120,000 FCFA.**', '**Credit note: 7,500 less 20% (1,500) = 6,000 FCFA.**', '**Amount owed: 120,000 − 6,000 = 114,000 FCFA.**'] },
  ]),

  // ---------- 21. School enterprise project ----------
  L('co-projectplan-3', 'co-f3-project', '21.1', 'Planning a school enterprise', 14, ['Project'], [
    'A **school self-reliance enterprise** is a small business run by students, guided by a teacher, to practise commerce: making or buying a product, selling it, keeping records and working out the profit. Examples: liquid soap, juice, popcorn, groundnut packets, exercise-book covers, a vegetable garden.',
    'Planning steps:\n- **choose a product** that people at school or nearby want and that is safe and allowed\n- carry out a simple **market survey**: who will buy, how many, at what price\n- work out the **costs**: materials, packaging, labels, transport\n- raise the **capital**: class contributions, a loan from the club fund\n- fix the **selling price** to cover the cost per item and leave a profit, while staying affordable\n- share **roles**: production, sales, cashier, record keeper, publicity.',
    'Cost per item = total cost ÷ number of items. Selling price = cost per item + profit per item. Check that the price is close to what buyers said they would pay in the survey.',
  ], 'comm3-project-steps', 'Survey, cost, price, sell, record, share.',
  ['The cost per item is found by:', ['total cost ÷ number of items', 'selling price × number of items', 'profit ÷ total cost', 'number of items − total cost'], 'Divide the total cost.'],
  [['Market survey', 'Finding out what buyers want and will pay.'], ['Capital', 'The money used to start the business.'], ['Cost per item', 'Total cost divided by the number of items made.'], ['Selling price', 'The price at which each item is sold.']],
  [
    { q: 'A class makes 40 bottles of liquid soap. Materials cost 18,000 FCFA, empty bottles 150 FCFA each and labels 2,000 FCFA. They sell each bottle at 1,000 FCFA. Work out the total cost, the cost per bottle, the profit if all are sold, and the profit per bottle.', steps: ['**Bottles: 40 × 150 = 6,000 FCFA.**', '**Total cost: 18,000 + 6,000 + 2,000 = 26,000 FCFA.**', '**Cost per bottle: 26,000 ÷ 40 = 650 FCFA.**', '**Sales: 40 × 1,000 = 40,000 FCFA. Profit: 40,000 − 26,000 = 14,000 FCFA, or 350 FCFA a bottle.**'] },
  ]),

  L('co-projectrecords-3', 'co-f3-project', '21.2', 'Records, profit and what the project teaches', 13, ['Project'], [
    'Honest **records** show where every franc went:\n- a **receipt** for every payment received and every purchase made\n- a simple **cash book** with money **in** and money **out** and the **balance** after each entry\n- a **stock list** of items made, sold and left.\nRecords are checked by the teacher and the class at the end.',
    'At the end: **profit** = sales − total costs. The class decides how to use it: some is **ploughed back** (kept to buy materials for the next round), some goes to the class or club fund, and some may reward the workers. Any **loss** is also shared and studied: why did it happen?',
    'What the project teaches: planning, teamwork, customer care, honesty with money, record keeping, and how the topics of the year (wants, production, the factors, retailing, documents and advertising) work together in a real business.',
  ], 'comm3-cashbook', 'Every franc in and out goes in the cash book.',
  ['Using part of the profit to buy materials for the next round is called:', ['ploughing back profit', 'a bad debt', 'a debit note', 'hoarding'], 'The business keeps going and grows.'],
  [['Cash book', 'A record of money received and paid out, with the balance.'], ['Balance', 'The money left after receipts and payments.'], ['Receipt', 'A written proof of payment.'], ['Ploughing back', 'Keeping profit in the business to make it grow.']],
  [
    { q: 'Cash book: the class starts with 26,000 FCFA. It pays 18,000 for materials, 6,000 for bottles and 2,000 for labels; it receives 25,000 in week 1 and 15,000 in week 2 from sales. Work out the balance after each step.', steps: ['**Start: 26,000. After materials: 26,000 − 18,000 = 8,000.**', '**After bottles: 8,000 − 6,000 = 2,000. After labels: 2,000 − 2,000 = 0.**', '**After week 1 sales: 0 + 25,000 = 25,000. After week 2 sales: 25,000 + 15,000 = 40,000 FCFA.**', '**Profit: 40,000 − 26,000 (the starting capital) = 14,000 FCFA.**'] },
  ]),
];
