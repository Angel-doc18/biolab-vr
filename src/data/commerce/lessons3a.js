// Commerce lessons for Form 3 (first part): the meaning of commerce, human
// wants, production and utility, the factors of production, occupations,
// home trade, small and large retailers, e-commerce, the wholesaler and the
// documents of home trade. Foundation lessons for the GCE course; the Form 4
// and Form 5 lessons study the same areas in more depth. Original text
// written for this app, with Cameroonian examples in francs CFA (FCFA).

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

export const LESSONS_3A = [
  // ---------- 1. The meaning of commerce ----------
  L('co-meaning-3', 'co-f3-commerce', '1.1', 'What commerce is and what it covers', 12, ['Introduction'], [
    'Commerce is studied in Forms 3, 4 and 5 and examined at the GCE Ordinary Level. This year lays the foundation: why people trade, how goods are produced and distributed, who the traders are, the documents they use and the services that help them.',
    '**Commerce** is the group of activities that move goods and services from the **producer** to the **final consumer**. It covers the buying and selling of goods (**trade**) and all the services that make buying and selling possible (**aids to trade**).',
    'The scope of commerce:\n- **trade**: **home trade** inside the country (wholesale and retail) and **foreign trade** with other countries (import, export and entrepôt trade)\n- **aids to trade** (auxiliary services): **banking**, **transport**, **insurance**, **warehousing**, **advertising** and **communication**.\nA cocoa farmer in Mbalmayo, the lorry driver who carries the beans to Douala, the bank that lends the exporter money and the insurer who covers the cargo are all part of the same commercial chain.',
  ], 'comm3-scope', 'Commerce = trade + aids to trade.',
  ['Which of these is an aid to trade rather than trade itself?', ['transport', 'retailing', 'wholesaling', 'exporting'], 'Transport helps trade happen; it is an auxiliary service.'],
  [['Commerce', 'All the activities that move goods and services from producers to consumers: trade and the aids to trade.'], ['Trade', 'The buying and selling of goods and services.'], ['Aids to trade', 'Services that make trade possible: banking, transport, insurance, warehousing, advertising and communication.'], ['Final consumer', 'The person who buys a good to use it, not to resell it.']],
  [
    { q: 'Sort these into trade or aids to trade: (a) a shop in Kumba selling rice; (b) a bank lending money to a trader; (c) a company exporting bananas; (d) a radio advertisement for soap.', steps: ['(a) **Trade: retail trade (home trade).**', '(b) **Aid to trade: banking provides finance.**', '(c) **Trade: export trade (foreign trade).**', '(d) **Aid to trade: advertising tells buyers about the product.**'] },
  ]),

  L('co-importance-3', 'co-f3-commerce', '1.2', 'From barter to money, and why commerce matters', 13, ['Introduction'], [
    'Long ago, most families were **self-sufficient**: they grew, built and made what they needed. As people began to specialise, they exchanged their surplus by **barter**, the direct exchange of goods for goods (a goat for bags of maize).',
    'Barter has serious problems:\n- the **double coincidence of wants**: each side must want exactly what the other offers\n- **no common measure of value**: how many yams is a goat worth?\n- **indivisibility**: a cow cannot be cut up to buy a small item\n- **difficulty of storing wealth**: many goods rot or die.\n**Money** solves these problems because it is accepted by everyone (a **medium of exchange**), measures value, can be divided and can be saved. In Cameroon the money is the **franc CFA**, issued by the **BEAC**.',
    'Why commerce matters:\n- it makes goods made far away available to everyone, raising **living standards**\n- it allows **specialisation**, so more is produced\n- it creates **jobs** for traders, drivers, bankers, insurers and advertisers\n- it earns the state **revenue** through taxes and duties\n- it links Cameroon with other countries through **foreign trade**.',
  ], 'comm3-barter-money', 'Barter needs a double coincidence of wants; money does not.',
  ['A fisherman wants maize, but the maize farmer wants shoes, not fish. This shows the problem of:', ['double coincidence of wants', 'indivisibility', 'storing wealth', 'too much money'], 'Each side must want what the other has.'],
  [['Self-sufficiency', 'Producing everything one needs for oneself, without trade.'], ['Barter', 'The direct exchange of goods for goods without money.'], ['Double coincidence of wants', 'The need, in barter, for each person to want what the other offers.'], ['Medium of exchange', 'Anything generally accepted in payment for goods and services, such as money.']],
  [
    { q: 'Explain, with an example, two problems of barter that money solves.', steps: ['**Double coincidence of wants: a tailor with a shirt who wants plantains must find a plantain seller who wants a shirt. With money, the tailor sells the shirt to anyone and buys plantains from anyone.**', '**Indivisibility: a goat cannot be divided to buy one bunch of plantains. Money can be divided: 1,500 FCFA for the plantains and the rest kept.**'] },
  ]),

  // ---------- 2. Human wants and scarcity ----------
  L('co-wants-3', 'co-f3-wants', '2.1', 'Human wants, scarcity and choice', 13, ['Human wants'], [
    'A **want** is a desire for a good or a service. Human wants have clear characteristics:\n- **unlimited**: when one want is satisfied, a new one appears\n- **recurring**: many wants come back again and again (food, transport fares)\n- **satiable**: a single want can be satisfied for a time (after a good meal you no longer want food)\n- **competitive**: wants compete for the same limited money\n- **complementary**: some wants go together (a phone and phone credit)\n- they **vary** with age, income, culture and the season.',
    'The **resources** used to satisfy wants (land, labour, money, time) are **scarce**: they are limited compared with our wants. **Scarcity** forces everyone, families, businesses and governments, to **choose**.',
    'To choose wisely, people list their wants in order of importance: a **scale of preference**. When we choose one thing, we give up the next best alternative. That alternative is the **opportunity cost** of the choice. Opportunity cost is the real cost of every decision.',
  ], 'comm3-scarcity', 'Unlimited wants + scarce means = choice and opportunity cost.',
  ['Ewane has 5,000 FCFA and chooses a textbook over a football. The opportunity cost is:', ['the football', 'the textbook', '5,000 FCFA', 'nothing'], 'The next best alternative given up.'],
  [['Want', 'A desire for a good or a service.'], ['Scarcity', 'The limited supply of resources compared with human wants.'], ['Scale of preference', 'A list of wants arranged in order of importance.'], ['Opportunity cost', 'The next best alternative given up when a choice is made.']],
  [
    { q: 'Manka has 10,000 FCFA. Her wants, in order: school sandals (6,000 FCFA), a mathematical set (2,500 FCFA), a novel (3,000 FCFA), a cap (1,500 FCFA). What can she buy, and what is the opportunity cost?', steps: ['**Sandals: 6,000. Money left: 10,000 − 6,000 = 4,000 FCFA.**', '**Mathematical set: 2,500. Money left: 4,000 − 2,500 = 1,500 FCFA.**', '**The novel (3,000) costs more than 1,500, so she skips it; the cap (1,500) fits exactly. Money left: 0.**', '**She buys the sandals, the set and the cap. The opportunity cost of her choice is the novel, the next best want she gave up.**'] },
  ]),

  L('co-wantclasses-3', 'co-f3-wants', '2.2', 'Necessities, comforts and luxuries', 12, ['Human wants'], [
    'Wants are often classified into three groups:\n- **necessities**: goods and services we cannot live without: food, water, clothing, shelter and basic health care\n- **comforts**: goods that make life easier and more pleasant but are not essential: a fan, a mattress, a television\n- **luxuries**: costly goods that give prestige or great pleasure: jewellery, an expensive car, holidays abroad.',
    'The classification is **relative**. It depends on:\n- **income**: a car is a luxury to a poor family but may be a necessity for a business owner who travels\n- **place**: a raincoat matters more in Buea than in Maroua\n- **time**: mobile phones were luxuries in the 1990s; today many people treat them as necessities.',
    'Wants can also be **individual** (satisfied by each person: a meal, a shirt) or **collective** (satisfied for the whole community, often by the state: roads, street lighting, security).',
  ], 'comm3-wants', 'Necessities first, then comforts, then luxuries; but the line moves with income, place and time.',
  ['Street lighting in a town satisfies a:', ['collective want', 'luxury want of one person', 'barter want', 'private want only'], 'It serves the whole community.'],
  [['Necessity', 'A good or service needed to stay alive and healthy.'], ['Comfort', 'A good that makes life easier but is not essential.'], ['Luxury', 'A costly good that gives prestige or great pleasure.'], ['Collective want', 'A want satisfied for the whole community, such as roads or security.']],
  [
    { q: 'Classify each want for a family in Bertoua and give a reason: (a) drinking water; (b) a gas cooker; (c) a gold necklace; (d) a public road.', steps: ['(a) **Necessity: needed to live.**', '(b) **Comfort: it makes cooking easier, but the family can cook with firewood.**', '(c) **Luxury: costly and not needed.**', '(d) **Collective want: a road serves the whole community and is usually provided by the state.**'] },
  ]),

  // ---------- 3. Production and utility ----------
  L('co-utility-3', 'co-f3-production', '3.1', 'Production and the creation of utility', 13, ['Production'], [
    '**Production** is any activity that creates goods or services to satisfy human wants. It is complete only when the good reaches the **final consumer**, so the trader and the transporter are producers just as much as the farmer.',
    'Production adds **utility**, the power of a good to satisfy a want:\n- **form utility**: changing the shape or nature of a good (palm fruits into palm oil, cloth into a uniform)\n- **place utility**: moving goods to where they are wanted (onions from Garoua to Douala)\n- **time utility**: keeping goods until they are needed (storing maize for the lean season)\n- **possession utility**: passing ownership to the person who wants the good (a shop selling to a customer).',
    'Each stage adds **value**. A bag of cocoa beans worth one price at the farm is worth more at the port, and more again as chocolate on a shop shelf, because form, place, time and possession utility have been added.',
  ], 'comm3-utility', 'Form, place, time and possession: four ways production adds value.',
  ['A cold store keeping fish until market day creates:', ['time utility', 'form utility', 'place utility', 'possession utility'], 'Goods are available when wanted.'],
  [['Production', 'Creating goods or services to satisfy wants; complete when the good reaches the consumer.'], ['Utility', 'The power of a good or service to satisfy a want.'], ['Form utility', 'Value added by changing the form of a good.'], ['Place utility', 'Value added by moving a good to where it is wanted.']],
  [
    { q: 'A trader buys a bag of groundnuts in Garoua for 18,000 FCFA, pays 4,000 FCFA to transport it to Yaoundé and sells it there for 27,000 FCFA. (a) What utility did the trader add? (b) How much value was added after transport?', steps: ['(a) **Place utility (moving the bag to Yaoundé) and possession utility (selling it to the buyer).**', '(b) **Cost to the trader: 18,000 + 4,000 = 22,000 FCFA.**', '**Value added after transport: 27,000 − 22,000 = 5,000 FCFA, the trader’s reward for the service.**'] },
  ]),

  L('co-prodbranches-3', 'co-f3-production', '3.2', 'The branches of production', 13, ['Production'], [
    '**Primary production** takes resources from nature:\n- **extractive**: mining, quarrying, fishing, lumbering (limestone near Figuil, timber in the East)\n- **genetic**: farming and rearing that reproduce plants and animals (cocoa, coffee, cattle, poultry).',
    '**Secondary production** changes raw materials into finished or semi-finished goods:\n- **manufacturing**: brewing, soap making, cement making, aluminium smelting at Edéa\n- **construction**: building houses, roads, bridges and dams.',
    '**Tertiary production** provides **services**:\n- **commercial services**: trade and the aids to trade (shops, banks, transport, insurance)\n- **direct services**: services given directly to people (teachers, doctors, lawyers, police, hairdressers).\nThe three branches are **interdependent**: the brewery needs maize and water from primary producers, and it needs transport, banks and shops to reach its customers.',
  ], 'comm3-production-branches', 'Primary takes from nature, secondary changes, tertiary serves.',
  ['An aluminium smelter at Edéa is in:', ['secondary production', 'primary production', 'tertiary production', 'genetic production'], 'It manufactures a metal from raw material.'],
  [['Primary production', 'Taking resources from nature: extractive and genetic.'], ['Genetic production', 'Reproducing plants and animals: farming and rearing.'], ['Secondary production', 'Manufacturing and construction.'], ['Tertiary production', 'Providing commercial and direct services.']],
  [
    { q: 'Follow a bar of soap through the three branches of production.', steps: ['**Primary: a farmer grows oil palms and harvests the fruit.**', '**Secondary: a factory turns palm oil into soap.**', '**Tertiary (commercial): a lorry carries the soap, a wholesaler and a retailer sell it, a bank finances the trade.**', '**Tertiary (direct): a health worker teaches people to wash their hands with it.**'] },
  ]),

  // ---------- 4. The factors of production ----------
  L('co-landlabour-3', 'co-f3-factors', '4.1', 'Land and labour', 13, ['Factors of production'], [
    'To produce anything, four **factors of production** are needed: **land**, **labour**, **capital** and the **entrepreneur**. Each earns a reward.',
    '**Land** means all **natural resources**: the soil, forests, rivers, minerals, the sea and the climate. Its features:\n- it is a **free gift of nature**\n- its total supply is **fixed**\n- it is **geographically immobile** (it cannot be moved)\n- its quality varies (fertile soil in the West, minerals in the East).\nThe reward for land is **rent**.',
    '**Labour** is human effort, **physical** or **mental**, used in production: the farm worker, the clerk, the engineer. Its features: it cannot be separated from the worker, it can be trained, and its efficiency depends on **education**, **health**, **tools** and **working conditions**. The reward for labour is **wages** (paid by the day or week) or **salaries** (paid monthly).',
  ], 'comm3-factors', 'Land earns rent; labour earns wages.',
  ['Which of these is "land" in commerce?', ['the fish in the sea', 'a delivery van', 'a shop assistant', 'a bank loan'], 'Land means natural resources.'],
  [['Factors of production', 'The resources used to produce goods: land, labour, capital and the entrepreneur.'], ['Land', 'All natural resources used in production.'], ['Labour', 'Human effort, physical or mental, used in production.'], ['Rent', 'The reward paid for the use of land.']],
  [
    { q: 'A farmer near Foumbot rents 2 hectares at 75,000 FCFA a hectare per year and employs 3 workers for 6 months at 40,000 FCFA a month each. Work out the yearly rent and the total wages.', steps: ['**Rent: 2 × 75,000 = 150,000 FCFA a year.**', '**Wages: 3 workers × 6 months × 40,000 = 720,000 FCFA.**', '**Rent is the reward for land; wages are the reward for labour.**'] },
  ]),

  L('co-capital-3', 'co-f3-factors', '4.2', 'Capital and the entrepreneur', 14, ['Factors of production'], [
    '**Capital** means **man-made goods used to produce other goods**: machines, tools, buildings, vehicles and stock. It is the result of saving: resources not consumed today are used to produce more tomorrow. Kinds:\n- **fixed capital**: kept and used again and again (a grinding mill, a delivery van, a shop building)\n- **working (circulating) capital**: used up or changed in the course of business (stock of goods, raw materials, cash)\n- **social capital**: owned by the community (roads, schools, hospitals).\nThe reward for capital is **interest**.',
    'The **entrepreneur** is the person who **organises** the other factors and **bears the risk** of the business. Functions:\n- having the business idea and deciding what, how and how much to produce\n- bringing together land, labour and capital\n- taking decisions and managing\n- bearing the **risk** of loss.',
    'The reward of the entrepreneur is **profit**, what is left after paying rent, wages and interest. If sales fall short of costs, the entrepreneur suffers the **loss**.',
  ], 'comm3-capital', 'Capital earns interest; the entrepreneur earns profit and bears the risk.',
  ['A baker’s flour, sugar and cash in the till are:', ['working capital', 'fixed capital', 'social capital', 'land'], 'They are used up and change form.'],
  [['Capital', 'Man-made goods used to produce other goods.'], ['Fixed capital', 'Capital used again and again, such as machines and buildings.'], ['Working capital', 'Stock, raw materials and cash used up in daily business.'], ['Entrepreneur', 'The person who organises the factors of production and bears the risk.']],
  [
    { q: 'Ngum runs a small bakery. In a month, sales are 900,000 FCFA. She pays rent of 60,000, wages of 250,000, interest on a loan of 15,000, and ingredients and fuel of 420,000. What is her reward, and what is it called?', steps: ['**Total costs: 60,000 + 250,000 + 15,000 + 420,000 = 745,000 FCFA.**', '**Profit: 900,000 − 745,000 = 155,000 FCFA.**', '**This is profit, the reward of the entrepreneur for organising the business and bearing the risk.**'] },
  ]),

  // ---------- 5. Occupations and specialisation ----------
  L('co-occupations-3', 'co-f3-occupations', '5.1', 'The classification of occupations', 12, ['Occupations'], [
    'An **occupation** is the work a person does to earn a living. Occupations are classified into three groups:',
    '- **industrial occupations**: producing goods: **extractive** (miners, fishermen, farmers, lumbermen), **manufacturing** (brewery workers, tailors, carpenters) and **construction** (masons, road builders)\n- **commercial occupations**: distributing goods: **trade** (wholesalers, retailers, importers, exporters) and the **aids to trade** (bankers, transporters, insurers, warehouse keepers, advertisers)\n- **direct services**: serving people directly: **professional** services (doctors, teachers, lawyers, accountants), **personal** services (hairdressers, tailors who mend, domestic workers) and **public** services (police, soldiers, civil servants).',
    'Industrial occupations make the goods, commercial occupations bring them to the consumer, and direct services keep people healthy, educated and safe so that they can work. A country needs all three.',
  ], 'comm3-occupations', 'Industrial makes, commercial distributes, direct services serve people.',
  ['A warehouse keeper has a:', ['commercial occupation', 'industrial occupation', 'direct service occupation', 'extractive occupation'], 'Warehousing is an aid to trade.'],
  [['Occupation', 'The work a person does to earn a living.'], ['Industrial occupation', 'Work that produces goods: extractive, manufacturing or construction.'], ['Commercial occupation', 'Work in trade or the aids to trade.'], ['Direct service', 'Work that serves people directly, such as teaching or policing.']],
  [
    { q: 'Classify these workers: (a) a mason in Ebolowa; (b) an insurance agent; (c) a nurse; (d) a timber feller in the East; (e) a market trader.', steps: ['(a) **Industrial: construction.**', '(b) **Commercial: an aid to trade (insurance).**', '(c) **Direct service: professional.**', '(d) **Industrial: extractive.**', '(e) **Commercial: trade (retail).**'] },
  ]),

  L('co-specialisation-3', 'co-f3-occupations', '5.2', 'Specialisation and the division of labour', 13, ['Occupations'], [
    '**Specialisation** means concentrating on one kind of work. It happens at several levels: a **person** (a mechanic), a **firm** (a firm that makes only shoes), a **region** (cocoa in the Centre and South, cotton in the North) and a **country** (Cameroon exports cocoa, coffee, timber and oil).',
    '**Division of labour** is specialisation inside a firm: a job is broken into small tasks, each done by a different worker. In a bakery, one worker mixes, another shapes the dough, another bakes and another packs.\nAdvantages:\n- workers become **skilled and fast** through practice\n- **time** is saved (no moving between tasks)\n- **machines** can be used for simple repeated tasks\n- **output rises** and costs per unit fall.',
    'Disadvantages:\n- **monotony**: repeating one task is boring\n- workers lose the craft of making the whole product\n- if one stage stops, the whole line stops\n- **interdependence**: a worker with one skill may find it hard to change job.\nBecause specialists produce only part of what they need, they must **exchange**. Specialisation is the reason commerce exists.',
  ], 'comm3-specialisation', 'Specialisation raises output but makes everyone depend on trade.',
  ['Cotton growing in the North and cocoa in the South is specialisation by:', ['region', 'person', 'firm', 'process'], 'Areas concentrate on what suits them.'],
  [['Specialisation', 'Concentrating on one kind of work or product.'], ['Division of labour', 'Breaking a job into small tasks done by different workers.'], ['Monotony', 'Boredom from repeating the same task.'], ['Interdependence', 'Relying on others for goods and services one does not produce.']],
  [
    { q: 'Working alone, 4 tailors each sew 5 shirts a day. With division of labour (one cuts, one sews, one fixes buttons, one irons and packs) the team makes 32 shirts a day. By how much does output rise, and by what percentage?', steps: ['**Output alone: 4 × 5 = 20 shirts a day.**', '**Increase: 32 − 20 = 12 shirts.**', '**Percentage increase: 12 ÷ 20 × 100 = 60%.**'] },
  ]),

  // ---------- 6. Home trade ----------
  L('co-hometrade-3', 'co-f3-hometrade', '6.1', 'Home trade: wholesale and retail compared', 12, ['Home trade'], [
    '**Home trade** (domestic or internal trade) is the buying and selling of goods **within one country**, using the country’s own money. Goods made in Douala and sold in Maroua, or rice grown at Ndop and sold in Bamenda, are home trade.',
    'Home trade has two branches:\n- **wholesale trade**: buying in **large quantities** from producers and selling in smaller quantities to **retailers**\n- **retail trade**: buying from wholesalers or producers and selling in **small quantities** to **final consumers**.',
    'Main differences:\n- **quantity**: wholesalers sell in bulk (cartons, bags, crates); retailers sell single units\n- **customers**: wholesalers serve retailers; retailers serve consumers\n- **capital**: wholesalers need more capital and larger stores\n- **location**: wholesalers are often near transport routes and markets; retailers are close to where people live\n- **display**: retailers decorate and display goods to attract customers; wholesalers need little display.',
  ], 'comm3-hometrade', 'Wholesale: bulk to retailers. Retail: small amounts to consumers.',
  ['Which is home trade?', ['rice from Ndop sold in Bamenda', 'cocoa sent from Douala to Europe', 'cars imported from Japan', 'oil exported through Kribi'], 'Within one country.'],
  [['Home trade', 'Buying and selling goods within one country.'], ['Wholesale trade', 'Buying in bulk from producers and selling to retailers.'], ['Retail trade', 'Selling goods in small quantities to final consumers.'], ['Breaking bulk', 'Dividing large quantities into smaller ones for resale.']],
  [
    { q: 'A wholesaler buys 100 cartons of tomato paste at 9,000 FCFA a carton. A carton holds 48 tins. A retailer buys one carton for 10,500 FCFA and sells the tins at 250 FCFA each. Work out the gross profit of the wholesaler on one carton and of the retailer on one carton.', steps: ['**Wholesaler: 10,500 − 9,000 = 1,500 FCFA a carton.**', '**Retailer’s sales: 48 × 250 = 12,000 FCFA.**', '**Retailer’s gross profit: 12,000 − 10,500 = 1,500 FCFA a carton.**', '**Each middleman earns a reward for the service of breaking bulk and bringing goods closer to the consumer.**'] },
  ]),

  L('co-chain-3', 'co-f3-hometrade', '6.2', 'The chain of distribution', 12, ['Home trade'], [
    'The **chain of distribution** (or channel) is the route goods follow from the **producer** to the **consumer**. The usual chain is: producer → wholesaler → retailer → consumer.',
    'Other chains:\n- producer → retailer → consumer: large retailers buy directly from factories\n- producer → consumer: **direct selling** (a farmer selling at the farm gate, a factory shop, sales online)\n- producer → agent → wholesaler → retailer → consumer: common for imported goods.',
    'The length of the chain depends on the **kind of good** (perishable goods need short chains), the **number of buyers** and how widely they are spread, the **producer’s resources**, and the **value** of the good. Each middleman adds a cost, but also a service: storage, breaking bulk, transport, credit and information.',
  ], 'comm3-chain', 'The more middlemen, the longer the chain.',
  ['A farmer selling tomatoes at the farm gate uses:', ['direct selling', 'the longest chain', 'an agent and a wholesaler', 'a bonded warehouse'], 'Producer to consumer.'],
  [['Chain of distribution', 'The route goods follow from producer to consumer.'], ['Middleman', 'A trader between producer and consumer, such as a wholesaler or retailer.'], ['Agent', 'A person who acts for a producer or importer to find buyers.'], ['Direct selling', 'Selling from producer to consumer with no middlemen.']],
  [
    { q: 'Suggest a chain for (a) fresh milk from a farm at Ngaoundéré sold in the same town; (b) a soft drink sold in thousands of shops; (c) a medical scanner bought by a hospital.', steps: ['(a) **Producer → consumer, or producer → retailer → consumer: the milk is perishable and the buyers are nearby.**', '(b) **Producer → wholesaler (distributor) → retailer → consumer: many small shops must be supplied.**', '(c) **Producer → agent → consumer: an expensive specialised good sold to one buyer.**'] },
  ]),

  // ---------- 7. Small-scale retailers ----------
  L('co-itinerant-3', 'co-f3-smallretail', '7.1', 'Itinerant traders and market traders', 12, ['Retail trade'], [
    'Small-scale retailers need little capital and serve customers close to home. **Itinerant** traders have no fixed shop:\n- **hawkers** carry goods on the head, in hand or on a bicycle and call out to buyers (sachets of water, groundnuts, phone accessories at traffic stops and motor parks)\n- **pedlars** move from village to village or house to house with a wider range of small goods\n- **mobile shops**: vans or motorbikes that carry goods to estates and villages on set days.',
    'Fixed small retailers:\n- **market traders** with stalls in town and village markets, often on market days\n- **kiosks** and **"call boxes"**: small roadside sheds selling phone credit, mobile money services, sweets and cigarettes\n- **roadside traders** who sell fruit, roasted maize or fish along the road.',
    'Advantages: they bring goods to the buyer, sell in very small quantities, open long hours, and need little capital to start. Disadvantages: little shelter for goods, few goods to choose from, no fixed address if a buyer has a complaint, and frequent trouble with town councils over trading places.',
  ], 'comm3-small-retail', 'Itinerant traders go to the buyer; fixed traders wait for the buyer.',
  ['A trader who moves from village to village selling clothes and pots from a bag is a:', ['pedlar', 'department store', 'wholesaler', 'chain store'], 'An itinerant trader.'],
  [['Itinerant trader', 'A retailer with no fixed shop who moves around to sell.'], ['Hawker', 'A trader who carries goods and calls out to buyers in the street.'], ['Mobile shop', 'A vehicle fitted out to carry and sell goods.'], ['Kiosk', 'A small fixed stand or shed selling a few goods.']],
  [
    { q: 'A hawker buys 100 sachets of water for 2,000 FCFA and sells them at 50 FCFA each. 8 sachets burst. What is the hawker’s profit for the day?', steps: ['**Sachets sold: 100 − 8 = 92.**', '**Sales: 92 × 50 = 4,600 FCFA.**', '**Profit: 4,600 − 2,000 = 2,600 FCFA.**', '**The burst sachets show a risk the small trader bears.**'] },
  ]),

  L('co-unitshop-3', 'co-f3-smallretail', '7.2', 'Unit shops: why small shops survive', 13, ['Retail trade'], [
    'A **unit shop** (single or independent shop) is a small shop owned and run by one person or a family, often with one or two helpers. In Cameroon, the neighbourhood **provision store** selling bread, sugar, soap, oil and drinks is a typical unit shop.',
    'Why unit shops survive against large shops:\n- **nearness**: they are in the neighbourhood, so customers save transport\n- **personal service**: the owner knows customers by name\n- **credit** to known customers until month-end\n- **long opening hours**, including evenings and Sundays\n- **small quantities**: they sell a cube of seasoning or a spoon of salt\n- **delivery** of goods to nearby homes.',
    'Problems of unit shops:\n- **limited capital**, so they cannot buy in bulk and miss discounts\n- **higher prices** than supermarkets\n- **bad debts** from credit given\n- the owner does everything and has little time to rest\n- **limited variety** of goods.\nMany survive by joining with others to buy in bulk, or by specialising.',
  ], 'comm3-unitshop', 'Small shops win on nearness, credit and personal service.',
  ['A unit shop can sell a single cube of seasoning because it:', ['sells in very small quantities to suit customers', 'buys only single cubes', 'is a wholesaler', 'never breaks bulk'], 'Selling small amounts is part of retailing.'],
  [['Unit shop', 'A small shop owned and run by one person or a family.'], ['Provision store', 'A neighbourhood shop selling everyday household goods.'], ['Bad debt', 'Money owed by a customer that will never be paid.'], ['Variety', 'The range of different goods a shop offers.']],
  [
    { q: 'A shop owner gives credit to 5 customers: 12,000, 8,500, 15,000, 4,000 and 10,500 FCFA. Two customers who owe 8,500 and 4,000 FCFA move away without paying. What is the total credit and the bad debt?', steps: ['**Total credit: 12,000 + 8,500 + 15,000 + 4,000 + 10,500 = 50,000 FCFA.**', '**Bad debts: 8,500 + 4,000 = 12,500 FCFA.**', '**A quarter of the credit is lost: credit wins customers but carries risk.**'] },
  ]),

  // ---------- 8. Large-scale retailers ----------
  L('co-deptstore-3', 'co-f3-largeretail', '8.1', 'Department stores, supermarkets and chain stores', 14, ['Retail trade'], [
    'A **department store** is a large shop, often on several floors, divided into **departments** (clothing, shoes, kitchenware, electronics, cosmetics). Each department is run by a manager, but the whole store is under one roof and one management. Features: wide variety, attractive displays, services such as delivery and gift wrapping, and prices that are often high.',
    'A **supermarket** is a large **self-service** shop selling mainly **food and household goods**. Customers take a basket or trolley, pick goods from the shelves and pay at a **checkout**. Prices are marked on goods, and low costs (few assistants, bulk buying, quick turnover) allow low prices. Large supermarkets in Douala and Yaoundé also sell clothes, electronics and furniture.',
    'A **chain store** (multiple shop) is one of many branches owned by one firm, with the same name, the same appearance and the same goods in many towns. A **head office** buys for all branches in bulk and sets prices; branch managers run each shop. Petrol stations of one company and the branches of a bakery or supermarket group are examples.',
  ], 'comm3-large-retail', 'Department store: departments. Supermarket: self-service. Chain store: branches.',
  ['Prices marked on goods, baskets and a checkout are typical of a:', ['supermarket', 'hawker', 'pedlar', 'bonded warehouse'], 'Self-service.'],
  [['Department store', 'A large shop divided into departments under one roof and one management.'], ['Supermarket', 'A large self-service shop selling mainly food and household goods.'], ['Self-service', 'Customers choose goods themselves and pay at a checkout.'], ['Chain store', 'One of many branches of the same firm with the same name and goods.']],
  [
    { q: 'A chain store buys 10,000 bottles of cooking oil at a 15% discount on the list price of 1,600 FCFA a bottle and shares them among 8 branches. Work out the price paid per bottle and the number each branch receives.', steps: ['**Discount per bottle: 15% × 1,600 = 240 FCFA.**', '**Price paid: 1,600 − 240 = 1,360 FCFA a bottle.**', '**Each branch: 10,000 ÷ 8 = 1,250 bottles.**', '**Central bulk buying gives the chain a cost advantage over a unit shop paying 1,600 FCFA.**'] },
  ]),

  L('co-largescale-3', 'co-f3-largeretail', '8.2', 'Large-scale and small-scale retailing compared', 12, ['Retail trade'], [
    'Advantages of **large-scale retailers**:\n- **bulk buying** at lower prices\n- a **wide variety** under one roof\n- **specialist staff** for buying, display and accounts\n- they can afford **advertising** and modern equipment\n- they can buy **directly from manufacturers**.',
    'Disadvantages:\n- they need **large capital** and pay high rents in town centres\n- service is **less personal**\n- they rarely give **credit** to ordinary customers\n- some customers buy more than they planned because of attractive displays\n- they may drive small shops out of business.',
    'Small and large retailers **co-exist** because they meet different needs. A family may do a monthly shopping at a supermarket and buy bread, kerosene and phone credit every day from the shop and the call box in the neighbourhood.',
  ], 'comm3-large-vs-small', 'Large shops win on price and variety; small shops on nearness and service.',
  ['A reason large retailers can sell more cheaply is:', ['bulk buying', 'giving long credit to all', 'having one assistant', 'selling in tiny quantities'], 'Lower buying prices.'],
  [['Large-scale retailer', 'A retailer with large capital and turnover, such as a supermarket or chain store.'], ['Turnover', 'The total value of sales in a period.'], ['Co-exist', 'To exist side by side.'], ['Impulse buying', 'Buying something not planned, often because of displays.']],
  [
    { q: 'A 5 kg bag of rice costs 4,750 FCFA at a supermarket and 5,200 FCFA at a neighbourhood shop. A family buys 4 bags a month. (a) How much does the family save at the supermarket? (b) Give one reason the family might still buy from the neighbourhood shop.', steps: ['(a) **Saving per bag: 5,200 − 4,750 = 450 FCFA. For 4 bags: 4 × 450 = 1,800 FCFA a month.**', '(b) **The shop is near and gives credit; the transport to the supermarket may cost more than the saving.**'] },
  ]),

  // ---------- 9. E-commerce ----------
  L('co-ecommerce-3', 'co-f3-ecommerce', '9.1', 'Buying and selling online', 13, ['E-commerce'], [
    '**E-commerce** (electronic commerce) is buying and selling goods and services through the **internet** and **mobile phones**. Forms:\n- **business to consumer (B2C)**: a firm sells online to the public\n- **business to business (B2B)**: a firm orders stock from a supplier online\n- **consumer to consumer (C2C)**: individuals sell to each other on online marketplaces and social media.',
    'How an online sale works: the seller shows goods on a **website**, an **app** or **social media** (WhatsApp, Facebook); the buyer places an **order**; payment is by **mobile money** (MTN Mobile Money, Orange Money), by **card**, or in cash **on delivery**; the goods are delivered, often by motorbike in towns or by bus agencies between towns; the buyer confirms receipt.',
    'In Cameroon, many small traders now sell through WhatsApp status and groups, using mobile money for payment. Large firms run websites and apps; airlines, bus agencies and utility companies sell tickets and take bill payments online.',
  ], 'comm3-ecommerce', 'Show, order, pay, deliver, confirm.',
  ['Two businesses trading stock through a supplier’s website is:', ['B2B e-commerce', 'B2C e-commerce', 'C2C e-commerce', 'barter'], 'Business to business.'],
  [['E-commerce', 'Buying and selling through the internet and mobile phones.'], ['Online marketplace', 'A website or app where many sellers offer goods to buyers.'], ['Mobile money', 'A service for storing, sending and paying money by mobile phone.'], ['Payment on delivery', 'Paying for goods when they are handed over.']],
  [
    { q: 'Ayuk orders a pair of shoes online for 12,500 FCFA. Delivery costs 1,500 FCFA and the mobile money fee is 1% of the amount sent. If Ayuk sends the price plus delivery by mobile money, how much does the purchase cost in total?', steps: ['**Amount sent: 12,500 + 1,500 = 14,000 FCFA.**', '**Fee: 1% of 14,000 = 140 FCFA.**', '**Total cost: 14,000 + 140 = 14,140 FCFA.**'] },
  ]),

  L('co-ecomimpact-3', 'co-f3-ecommerce', '9.2', 'E-commerce: benefits, risks and staying safe', 13, ['E-commerce'], [
    'Benefits:\n- **buyers** shop at any time from home, compare prices easily and reach goods not sold locally\n- **sellers** reach customers in other towns and abroad, need no expensive shop, and can start with little capital\n- the economy gains **jobs** in delivery, phone services and online marketing.',
    'Problems and risks:\n- **fraud**: fake sellers take money and deliver nothing, or deliver goods different from the photos\n- buyers cannot **touch or try** the goods\n- **delivery** can be slow or costly outside big towns\n- internet and data costs, and poor network in some areas\n- some customers do not trust online payment.',
    'Staying safe: buy from sellers with an address and good **reviews**; prefer **payment on delivery** with unknown sellers; never share a **PIN** or code; keep screenshots of the order and the payment; check goods before signing for them. Cameroon also has laws on electronic commerce and on cybercrime, and online sellers must respect consumer rights like any other trader.',
  ], 'comm3-ecom-impact', 'Check the seller, protect your PIN, keep proof.',
  ['The safest way to pay an unknown online seller is usually:', ['payment on delivery after checking the goods', 'sending the full amount first', 'sharing your mobile money PIN', 'paying twice'], 'You see the goods before paying.'],
  [['Fraud', 'Deceiving someone to gain money unfairly.'], ['Review', 'A buyer’s comment and rating about a seller or product.'], ['PIN', 'A secret number that protects an account.'], ['Data costs', 'What a user pays for internet use on a phone.']],
  [
    { q: 'A trader in Limbe sells smoked fish. In the market she sells 30 pieces a week at 1,000 FCFA. After she starts selling on WhatsApp, she sells 30 in the market and 45 online at the same price, but pays 300 FCFA delivery per online piece and 2,000 FCFA a week for data. By how much does her weekly income after these costs rise?', steps: ['**Online sales: 45 × 1,000 = 45,000 FCFA.**', '**Extra costs: 45 × 300 + 2,000 = 13,500 + 2,000 = 15,500 FCFA.**', '**Extra income: 45,000 − 15,500 = 29,500 FCFA a week.**'] },
  ]),

  // ---------- 10. Wholesale trade ----------
  L('co-wholesalefns-3', 'co-f3-wholesale', '10.1', 'The functions of the wholesaler', 13, ['Wholesale trade'], [
    'A **wholesaler** buys goods in **large quantities** from manufacturers and sells them in smaller quantities to retailers. Wholesalers are found near factories, ports, railway stations and big markets, such as the wholesale areas of Douala and Yaoundé.',
    'Functions to the **manufacturer**:\n- **buys in bulk**, so the manufacturer handles a few large orders instead of thousands of small ones\n- **stores** goods, saving the manufacturer warehouse space\n- **finances** production by paying promptly, sometimes in advance\n- **bears risks** of price falls, damage and changes in fashion\n- passes on **market information** about what buyers want.',
    'Functions to the **retailer**:\n- **breaks bulk** into quantities the retailer can afford\n- offers a **variety** of goods from many producers in one place\n- gives **credit** and sometimes **delivers**\n- **stores** goods, so the retailer needs only a small stock\n- gives **advice** on new products and prices.\nBy storing in times of plenty, the wholesaler also helps keep **prices steady**.',
  ], 'comm3-wholesaler', 'To the maker: bulk buying and storage. To the retailer: small lots and variety.',
  ['Collecting goods from many producers so retailers can buy them in one place is:', ['offering variety', 'hoarding', 'manufacturing', 'barter'], 'One visit, many products.'],
  [['Wholesaler', 'A trader who buys in bulk from producers and sells to retailers.'], ['Bulk buying', 'Buying in very large quantities.'], ['Market information', 'Knowledge about what buyers want and what competitors do.'], ['Price stability', 'Prices that do not rise and fall sharply.']],
  [
    { q: 'A soap factory supplies 300 shops. Each shop orders 10 cartons a month. Instead, 3 wholesalers order 1,000 cartons each. How many orders does the factory handle a month in each case?', steps: ['**Without wholesalers: 300 orders a month (one per shop), for a total of 300 × 10 = 3,000 cartons.**', '**With wholesalers: 3 orders of 1,000 cartons = 3,000 cartons.**', '**The factory handles 3 orders instead of 300: fewer invoices, deliveries and debts to collect.**'] },
  ]),

  L('co-bypass-3', 'co-f3-wholesale', '10.2', 'Bypassing the wholesaler, and why wholesalers survive', 12, ['Wholesale trade'], [
    'The wholesaler is sometimes **bypassed** (eliminated) when:\n- **large retailers** (supermarkets, chain stores) buy in bulk directly from factories\n- **manufacturers** open their own shops or sell online\n- goods are **perishable** and must reach consumers quickly (fresh fish, bread)\n- goods are **made to order** (furniture, uniforms)\n- goods are **expensive or technical** and need the maker’s advice (machines, cars)\n- **producers’ cooperatives** sell directly to retailers.',
    'Bypassing does not remove the wholesaler’s **functions**: someone must still store, transport, break bulk and finance the goods. When a supermarket buys direct, it does the wholesaler’s work itself and bears the cost.',
    'Wholesalers survive because thousands of small shops cannot buy directly from factories, and because many have adapted: **cash-and-carry** wholesalers let retailers collect goods and pay cash at lower prices, and some wholesalers now deliver orders taken by phone.',
  ], 'comm3-bypass', 'Someone must do the wholesaler’s work, even when the wholesaler is bypassed.',
  ['Fresh bread usually goes from the bakery straight to shops because it is:', ['perishable', 'very durable', 'imported', 'bulky and cheap'], 'It must be sold within a day or two.'],
  [['Bypass', 'To go round a middleman and deal directly.'], ['Cash and carry', 'A wholesale outlet where retailers collect goods and pay cash.'], ['Made to order', 'Produced only after a customer orders it.'], ['Cooperative', 'A business owned and run by its members for their common benefit.']],
  [
    { q: 'A retailer can buy a crate of drinks for 7,800 FCFA delivered by a wholesaler on credit, or for 7,200 FCFA at a cash-and-carry, paying 1,500 FCFA for a taxi to carry 5 crates. Which is cheaper for 5 crates, and by how much?', steps: ['**Delivered: 5 × 7,800 = 39,000 FCFA.**', '**Cash and carry: 5 × 7,200 + 1,500 = 36,000 + 1,500 = 37,500 FCFA.**', '**Cash and carry is cheaper by 39,000 − 37,500 = 1,500 FCFA, but the retailer must pay at once and spend time collecting.**'] },
  ]),

  // ---------- 11. Documents of home trade ----------
  L('co-invoice-3', 'co-f3-documents', '11.1', 'The order, the delivery note and the invoice', 14, ['Trade documents'], [
    'Written documents record each step of a sale between businesses, so both sides know what was agreed and can settle disputes:\n- the **order**: sent by the **buyer**, stating the goods, quantities, prices and delivery; once the seller accepts it, it is a **contract**\n- the **advice note**: sent by the seller to say the goods have been dispatched\n- the **delivery note**: travels **with the goods**; the buyer checks the goods and signs a copy, which the driver takes back as proof of delivery.',
    'The **invoice** is the **bill**. It is sent by the **seller** to the **buyer** and shows: the names and addresses of both, the invoice number and date, a description of the goods, the quantities and unit prices, the total, any **trade discount**, the net amount due and the **terms of payment**. "**E&OE**" (errors and omissions excepted) allows the seller to correct a mistake later.',
    'Many invoices in Cameroon also add **value added tax** (VAT, TVA in French), charged at 19.25% on most goods; in Form 3, invoices are worked without it. Always check an invoice line by line: quantity × unit price, then the total, then the discount.',
  ], 'comm3-invoice', 'Quantity × price, add up, take off the trade discount.',
  ['The document a driver brings back signed by the buyer is the:', ['delivery note', 'invoice', 'order', 'quotation'], 'It proves the goods arrived.'],
  [['Order', 'A document sent by the buyer asking for goods; a contract once accepted.'], ['Delivery note', 'A list of goods sent with them and signed by the buyer on receipt.'], ['Invoice', 'The bill sent by the seller showing what the buyer owes.'], ['Trade discount', 'A reduction from the list price given to traders.']],
  [
    { q: 'Mbah Wholesalers, Bafoussam, invoice Nkeng Stores for 20 cartons of soap at 6,500 FCFA and 15 bags of rice at 14,000 FCFA, less 10% trade discount. Work out the invoice.', steps: ['**Soap: 20 × 6,500 = 130,000 FCFA.**', '**Rice: 15 × 14,000 = 210,000 FCFA.**', '**Total: 130,000 + 210,000 = 340,000 FCFA.**', '**Trade discount: 10% × 340,000 = 34,000 FCFA.**', '**Net amount due: 340,000 − 34,000 = 306,000 FCFA.**'] },
  ]),

  L('co-notes-3', 'co-f3-documents', '11.2', 'Credit notes and debit notes', 13, ['Trade documents'], [
    'After the invoice, the amount owed may need correcting. A **credit note** is sent by the seller to **reduce** the amount the buyer owes when:\n- goods were **returned** because they were damaged, faulty or not ordered\n- the buyer was **overcharged** on the invoice\n- fewer goods arrived than were invoiced (**short delivery**)\n- containers (crates, bottles) were returned.\nCredit notes were traditionally printed in **red** to tell them apart.',
    'A **debit note** is sent by the seller to **increase** the amount owed when the buyer was **undercharged**: a price was written too low, goods were left out, or a charge such as transport was forgotten.',
    'Each note shows the reason, the goods, the amount and any trade discount, worked the same way as on the invoice. Both notes are followed later by a **statement of account** that sums up what is owed, studied in Form 4.',
  ], 'comm3-notes', 'Credit note: the debt goes down. Debit note: the debt goes up.',
  ['A seller forgot to charge 5,000 FCFA for transport. The seller sends a:', ['debit note', 'credit note', 'delivery note', 'receipt'], 'The amount owed goes up.'],
  [['Credit note', 'A document that reduces the amount a buyer owes.'], ['Debit note', 'A document that increases the amount a buyer owes.'], ['Short delivery', 'Receiving fewer goods than were invoiced.'], ['Overcharge', 'Charging more than the correct amount.']],
  [
    { q: 'Continuing the invoice of 306,000 FCFA (10% trade discount): Nkeng Stores returns 2 damaged cartons of soap at 6,500 FCFA, and Mbah finds the rice should have been 14,500 FCFA a bag, not 14,000 (15 bags). Work out the credit note, the debit note and the new amount owed.', steps: ['**Credit note: 2 × 6,500 = 13,000; less 10% (1,300) = 11,700 FCFA.**', '**Debit note: 15 × 500 = 7,500; less 10% (750) = 6,750 FCFA.**', '**New amount owed: 306,000 − 11,700 + 6,750 = 301,050 FCFA.**'] },
  ]),
];
