// Economics lessons for Form 4, term 1: scarcity and the PPC, economic
// systems, the factors of production, business organisation, public
// enterprises and industrial location, and demand. Original text written for
// this app, with Cameroonian examples in francs CFA (FCFA).

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
  // ---------- Scarcity and choice ----------
  L('ec-scarcity-4', 'ec-f4-scarcity', '1.1', 'Scarcity, choice and opportunity cost', 13, ['Basic concepts'], [
    '**Economics** is the study of how individuals, firms and governments use **scarce resources** to satisfy **unlimited wants**. A well-known definition, by Lionel Robbins, calls it the science that studies human behaviour as a relationship between ends and scarce means that have alternative uses.',
    'Three linked ideas:\n- **scarcity**: resources (land, labour, capital, enterprise) are limited compared with wants\n- **choice**: because of scarcity, we must choose which wants to satisfy\n- **opportunity cost**: the **next best alternative given up** when a choice is made.\nA household ranks its wants in a **scale of preference**, from the most urgent to the least, and satisfies them in that order.',
    'Opportunity cost applies to everyone. A farmer who plants cocoa on a hectare gives up the cassava that land could have produced. A government that spends 10 billion FCFA on a road gives up, for example, the schools that money could have built. Opportunity cost is measured in the **alternative forgone**, not in money.',
  ], 'econ-ppc', 'Opportunity cost is the next best alternative given up, not the money spent.',
  ['A government builds a stadium instead of a hospital. The opportunity cost is:', ['the hospital', 'the stadium', 'the money spent', 'the taxes collected'], 'The next best alternative forgone.'],
  [['Scarcity', 'Limited resources compared with unlimited wants.'], ['Opportunity cost', 'The next best alternative given up when a choice is made.'], ['Scale of preference', 'A list of wants in order of importance.'], ['Wants', 'Human desires for goods and services.']],
  [
    { q: 'Mbah has 2,000 FCFA. His scale of preference is: (1) school notebook 1,500 FCFA, (2) phone credit 1,000 FCFA, (3) a snack 500 FCFA. What does he buy, and what is his opportunity cost?', steps: ['He satisfies the most urgent want first: the notebook (1,500 FCFA), leaving 500 FCFA.', 'The phone credit (1,000 FCFA) is now unaffordable, so he buys the snack with the 500 FCFA left.', '**His opportunity cost is the phone credit, the next best alternative he gave up.**'] },
  ]),

  L('ec-ppc-4', 'ec-f4-scarcity', '1.2', 'The production possibility curve', 15, ['Basic concepts', 'Graphs'], [
    'A **production possibility curve** (PPC) shows the maximum combinations of two goods an economy can produce with its resources and technology, when they are **fully and efficiently** used.',
    'Reading a PPC:\n- points **on** the curve: full, efficient use of resources\n- a point **inside** the curve: unemployment or inefficiency\n- a point **outside** the curve: unattainable with present resources\n- moving along the curve: producing more of one good means producing less of the other; the amount given up is the **opportunity cost**\n- the curve is usually **concave** (bowed out) because resources are not equally suited to both goods, so opportunity cost rises.',
    'The whole curve **shifts outward** with economic growth: more resources, better technology, a more skilled workforce. It shifts inward after disasters, war or loss of resources.',
  ], 'econ-ppc', 'Inside: waste. On: efficient. Outside: impossible for now.',
  ['An outward shift of the whole PPC is caused by:', ['better technology or more resources', 'unemployment', 'a fall in population', 'war damage'], 'The economy can produce more of both goods.'],
  [['Production possibility curve', 'A curve showing the maximum combinations of two goods that can be produced.'], ['Efficiency', 'Using resources so that no more of one good can be made without less of the other.'], ['Economic growth', 'An increase in the productive capacity of an economy.']],
  [
    { q: 'An economy can produce these combinations (tonnes): A (0 cassava, 100 cocoa), B (60, 80), C (80, 60), D (100, 0). What is the opportunity cost of moving from B to C?', steps: ['From B to C, cassava rises from 60 to 80 tonnes (+20).', 'Cocoa falls from 80 to 60 tonnes (−20).', '**The opportunity cost of the extra 20 tonnes of cassava is 20 tonnes of cocoa.**'] },
    { q: 'On the same curve, where is the point (40 cassava, 40 cocoa), and what does it show?', steps: ['40² + 40² = 3,200, far less than 100² = 10,000 on this circular curve, so the point lies inside it.', '**It shows unemployed or inefficiently used resources: more of both goods could be produced.**'] },
  ]),

  // ---------- Economic systems ----------
  L('ec-questions-4', 'ec-f4-systems', '2.1', 'The basic economic questions', 12, ['Economic systems'], [
    'Because resources are scarce, every society must answer three **basic economic questions**:\n- **What to produce?** Which goods and services, and in what quantities: food or weapons, schools or stadiums?\n- **How to produce?** Which methods: labour-intensive (many workers, few machines) or capital-intensive (many machines)?\n- **For whom to produce?** How output is shared among people: this is the question of **distribution** of income.',
    'Different **economic systems** answer these questions in different ways: through prices and markets, through government plans, or through a mixture. Tradition also matters in some communities, where people produce what their parents produced.',
    'In Cameroon, small farmers often choose labour-intensive methods because labour is plentiful and capital is scarce, while large plantations and breweries use more capital.',
  ], 'econ-systems', 'What, how and for whom: every economic system must answer all three.',
  ['Choosing between hand tools and tractors answers the question:', ['how to produce', 'what to produce', 'for whom to produce', 'when to produce'], 'It concerns production methods.'],
  [['Labour-intensive', 'Using a high proportion of labour relative to capital.'], ['Capital-intensive', 'Using a high proportion of machines relative to labour.'], ['Distribution', 'How output and income are shared among people.']],
  [
    { q: 'Classify each decision by the basic question it answers: (a) building more secondary schools; (b) using mechanised harvesters on a sugar estate; (c) giving free medicine to the poor.', steps: ['(a) **What to produce**: more education services.', '(b) **How to produce**: a capital-intensive method.', '(c) **For whom to produce**: distribution in favour of the poor.'] },
  ]),

  L('ec-systems-4', 'ec-f4-systems', '2.2', 'Free market, command and mixed economies', 14, ['Economic systems'], [
    'A **free market** (capitalist) economy: resources are privately owned and allocated by the **price mechanism**; firms seek **profit** and consumers choose freely. Advantages: efficiency, choice, incentives and innovation. Disadvantages: inequality, neglect of public goods (roads, defence), possible monopolies and instability.',
    'A **planned** (command) economy: the **state** owns most resources and a central plan decides what, how and for whom to produce. Advantages: greater equality, provision of essential services, full use of labour. Disadvantages: inefficiency, shortages, little choice, weak incentives and heavy bureaucracy.',
    'A **mixed** economy combines both: a **private sector** of individuals and firms, and a **public sector** of government services and state enterprises. Most countries, including **Cameroon**, are mixed: private firms produce most goods, while the state provides education, health, roads and security and regulates markets.',
  ], 'econ-systems', 'Market: prices decide. Command: the state decides. Mixed: both.',
  ['In which system does the price mechanism allocate most resources?', ['the free market economy', 'the command economy', 'a traditional subsistence economy', 'none'], 'Prices signal what to produce.'],
  [['Price mechanism', 'The system in which prices, set by supply and demand, allocate resources.'], ['Private sector', 'Businesses owned by individuals and firms.'], ['Public sector', 'Services and enterprises owned by the state.']],
  [
    { q: 'Give two advantages and two disadvantages of the free market economy.', steps: ['Advantages: **efficiency through competition; wide consumer choice and incentives to innovate.**', 'Disadvantages: **unequal distribution of income; public goods such as roads and defence are under-provided.**'] },
  ]),

  // ---------- Land and labour ----------
  L('ec-land-4', 'ec-f4-landlabour', '3.1', 'Land as a factor of production', 12, ['Factors of production'], [
    'The **factors of production** are the resources used to produce goods and services: **land**, **labour**, **capital** and **entrepreneurship**. Each earns a reward: **rent**, **wages**, **interest** and **profit**.',
    '**Land** means all natural resources: the soil, forests, rivers, minerals, oil, fish in the sea and the climate. Its characteristics:\n- it is a **free gift of nature**\n- its total supply is **fixed**\n- it is **geographically immobile**, though it can change use (occupational mobility)\n- it varies in **fertility** and location\n- it is subject to **diminishing returns** when more labour is applied to a fixed area.',
    'Cameroon is rich in land resources: fertile volcanic soils around Mount Cameroon, forests in the South and East, oil off the coast, bauxite at Minim-Martap and Ngaoundal, and rivers that supply hydroelectric power.',
  ], 'econ-factors', 'Land = all natural resources; its reward is rent.',
  ['Which is an example of "land" in economics?', ['an oil deposit', 'a tractor', 'a factory worker', 'a bank loan'], 'A natural resource.'],
  [['Factors of production', 'Land, labour, capital and entrepreneurship.'], ['Rent', 'The reward for land.'], ['Geographically immobile', 'Unable to move from one place to another.']],
  [
    { q: 'Explain why land is said to be fixed in supply but occupationally mobile.', steps: ['**The total area of land cannot be increased by human effort, so its supply is fixed.**', '**A given piece of land can change use, for example from farming to housing, so it is occupationally mobile.**'] },
  ]),

  L('ec-labour-4', 'ec-f4-landlabour', '3.2', 'Labour, division of labour and specialisation', 14, ['Factors of production'], [
    '**Labour** is human effort, physical and mental, used in production. Its reward is **wages**. The **efficiency of labour** depends on education and training, health and nutrition, tools and capital, working conditions, motivation and good management.',
    '**Division of labour** means splitting production into separate tasks, each done by a different worker; **specialisation** is concentrating on one task, one product or one region. Advantages: workers become skilful through repetition, time is saved, tools can be specialised, and output rises. Disadvantages: boredom, loss of craft skills, dependence on others, and unemployment if a task is mechanised.',
    'Specialisation is limited by the **size of the market**: a village carpenter does every task himself, while a large furniture factory in Douala can divide the work among many workers. Specialisation also requires **exchange**, which is why money and trade matter.',
  ], 'econ-factors', 'Division of labour raises output but can cause boredom and dependence.',
  ['Division of labour is limited mainly by:', ['the size of the market', 'the weather', 'the number of holidays', 'the colour of products'], 'Small markets cannot absorb large output.'],
  [['Labour', 'Human effort used in production.'], ['Division of labour', 'Splitting production into tasks done by different workers.'], ['Specialisation', 'Concentrating on a particular task, product or area.'], ['Wages', 'The reward for labour.']],
  [
    { q: 'Give three advantages and two disadvantages of division of labour.', steps: ['Advantages: **greater skill through repetition; time saved moving between tasks; higher output per worker.**', 'Disadvantages: **boredom and monotony; unemployment if one task is replaced by a machine.**'] },
  ]),

  L('ec-population-4', 'ec-f4-landlabour', '3.3', 'Population: optimum, over- and under-population', 14, ['Factors of production'], [
    'Population supplies labour and creates demand. Cameroon’s 2005 census counted about 17.5 million people; estimates for the mid-2020s are close to 29 million, with a young age structure.',
    'The idea of **optimum population**: with given resources and technology, the optimum is the population that gives the **highest output per head**.\n- **under-population**: too few people to use resources fully; more people would raise output per head\n- **over-population**: too many people for the resources; output per head falls, with unemployment and pressure on services.',
    'The optimum is not fixed: new technology or new resources raise it. Population structure matters too: a high share of children increases the **dependency ratio** (dependants per worker), while a growing working-age population can boost growth if jobs are created.',
  ], 'econ-population', 'Optimum population gives the highest output per head, not the most people.',
  ['Over-population exists when:', ['output per head falls because there are too many people for the resources', 'output per head is at its highest', 'a country has few people', 'there is no unemployment'], 'Too many people for available resources.'],
  [['Optimum population', 'The population that gives the highest output per head.'], ['Dependency ratio', 'The number of dependants (young and old) per person of working age.'], ['Census', 'An official count of a country’s population.']],
  [
    { q: 'Output per head in a country rises as its population grows from 10 to 15 million, then falls as it grows to 20 million. Interpret this.', steps: ['While output per head rises, the country is **under-populated**.', 'The peak, at about 15 million, is the **optimum population** with present resources and technology.', 'Beyond it, output per head falls: the country becomes **over-populated**.'] },
  ]),

  // ---------- Capital and enterprise ----------
  L('ec-capital-4', 'ec-f4-capital', '4.1', 'Capital: types and accumulation', 14, ['Factors of production'], [
    '**Capital** is man-made wealth used to produce other goods: machines, tools, buildings, vehicles, roads and stocks of raw materials. Its reward is **interest**.',
    'Types of capital:\n- **fixed capital**: used many times (machines, buildings, tractors)\n- **circulating** (working) capital: used up in one round of production (raw materials, fuel, goods in process)\n- **social capital**: owned by the community (roads, schools, hospitals)\n- **private capital**: owned by individuals or firms.\nCapital wears out with use: this is **depreciation**.',
    '**Capital accumulation** (capital formation) needs **saving** and **investment**: people give up some consumption today, and the savings are lent through banks and microfinance to firms that buy capital goods. Capital raises the productivity of labour and is a key to economic growth.',
  ], 'econ-capital', 'Capital is man-made and used to produce more; its reward is interest.',
  ['A bakery oven is an example of:', ['fixed capital', 'circulating capital', 'land', 'labour'], 'It is used again and again.'],
  [['Capital', 'Man-made goods used to produce other goods.'], ['Interest', 'The reward for capital.'], ['Depreciation', 'The wearing out of capital through use.'], ['Investment', 'Spending on new capital goods.']],
  [
    { q: 'Classify for a cassava-processing business: (a) the grinding machine; (b) the cassava roots; (c) the road to the market; (d) the fuel for the machine.', steps: ['(a) **Fixed capital.**', '(b) **Circulating capital (raw material).**', '(c) **Social capital.**', '(d) **Circulating capital.**'] },
  ]),

  L('ec-entrepreneur-4', 'ec-f4-capital', '4.2', 'The entrepreneur', 13, ['Factors of production'], [
    'The **entrepreneur** (organiser) brings together land, labour and capital to produce, takes the key decisions, and bears the **risk** of the business. Their reward is **profit**, the surplus after all costs are paid; if the business fails, they bear the loss.',
    'Functions of the entrepreneur:\n- **initiating** a business idea and starting the enterprise\n- **organising** and combining the other factors\n- **decision-making**: what, how much and how to produce\n- **risk-bearing**: uninsurable risks such as changes in demand\n- **innovating**: new products and new methods.',
    'Insurable risks (fire, theft, accidents) can be covered by insurance; **uninsurable risks** (a fall in demand, a change in fashion or government policy) cannot, and profit is the reward for bearing them. Small entrepreneurs, such as market traders, carpenters and tailors, play a huge part in Cameroon’s economy.',
  ], 'econ-capital', 'The entrepreneur’s profit rewards the uninsurable risk they bear.',
  ['The reward for bearing uninsurable business risk is:', ['profit', 'rent', 'interest', 'wages'], 'Profit is the entrepreneur’s reward.'],
  [['Entrepreneur', 'The person who organises the factors of production and bears the risk.'], ['Profit', 'The surplus of revenue over costs; the reward for enterprise.'], ['Uninsurable risk', 'A risk that cannot be covered by insurance, such as a fall in demand.']],
  [
    { q: 'Why can a shop owner insure against fire but not against a fall in demand?', steps: ['Fire risk can be estimated from many past cases, so insurers can calculate a premium.', '**A fall in demand depends on unpredictable changes in tastes, incomes and competition, so it cannot be calculated or insured; the entrepreneur bears it and profit rewards it.**'] },
  ]),

  // ---------- Private businesses ----------
  L('ec-sole-4', 'ec-f4-business', '5.1', 'Sole proprietorships and partnerships', 14, ['Business organisation'], [
    'A **sole proprietorship** (sole trader) is owned and controlled by **one person**, who takes all profits and bears all losses. Advantages: easy to start, quick decisions, personal contact with customers, the owner keeps all profit. Disadvantages: **unlimited liability**, limited capital, heavy workload, and the business may end when the owner dies.',
    'A **partnership** is owned by **two to twenty** people (more in some professions), usually governed by a **deed of partnership** that sets out capital, profit sharing and duties. Advantages: more capital, shared work and skills, shared losses. Disadvantages: unlimited liability for general partners, disagreements, and the partnership may end when a partner dies or leaves. A **sleeping partner** contributes capital but takes no part in management.',
    '**Unlimited liability** means the owner’s personal property, such as a house or car, can be sold to pay the business’s debts.',
  ], 'econ-business', 'Sole traders and ordinary partners have unlimited liability.',
  ['A partnership usually has:', ['two to twenty partners', 'one owner', 'thousands of shareholders', 'no owners'], 'Governed by a deed of partnership.'],
  [['Sole proprietorship', 'A business owned and controlled by one person.'], ['Partnership', 'A business owned by two to twenty partners.'], ['Unlimited liability', 'Personal responsibility for all business debts.'], ['Deed of partnership', 'The agreement setting out the partners’ rights and duties.']],
  [
    { q: 'Ngozi’s tailoring shop owes 2 million FCFA; the business has only 500,000 FCFA. What happens if she is a sole trader?', steps: ['A sole trader has unlimited liability.', '**The remaining 1.5 million FCFA can be recovered from her personal property, such as savings or a car.**'] },
  ]),

  L('ec-companies-4', 'ec-f4-business', '5.2', 'Limited companies and cooperatives', 14, ['Business organisation'], [
    'A **joint-stock company** raises capital by selling **shares** to **shareholders**, who enjoy **limited liability**: they can lose only what they paid for their shares. The company is a separate legal person, run by a **board of directors** elected by shareholders, and it continues even when owners change.\n- a **private limited company** (Ltd) sells shares privately, not to the general public\n- a **public limited company** (Plc) can sell shares to the public, for example through a stock exchange; it must publish its accounts.',
    'Companies can raise large capital and grow big, but they are costly to form, must publish information, and owners may lose control to managers.',
    'A **cooperative society** is owned and run by its **members** for their mutual benefit, often on the principle of **one member, one vote**. Producer cooperatives help farmers buy inputs and sell crops together; consumer cooperatives buy goods in bulk; credit unions collect savings and give loans to members.',
  ], 'econ-business', 'Shareholders have limited liability: they lose at most what they invested.',
  ['A key difference between an Ltd and a Plc is that a Plc:', ['can sell shares to the general public', 'has unlimited liability', 'has one owner', 'never publishes accounts'], 'Ltd shares are sold privately.'],
  [['Share', 'A unit of ownership in a company.'], ['Limited liability', 'Shareholders can lose only what they invested.'], ['Cooperative', 'A business owned and run by its members for their mutual benefit.'], ['Board of directors', 'The people elected by shareholders to run a company.']],
  [
    { q: 'Compare a sole proprietorship with a public limited company on ownership, liability and capital.', steps: ['Ownership: **one person, against many shareholders.**', 'Liability: **unlimited, against limited.**', 'Capital: **small, from the owner’s savings and loans, against large, from selling shares to the public.**'] },
  ]),

  // ---------- Public sector and location ----------
  L('ec-parastatals-4', 'ec-f4-public', '6.1', 'Public corporations and nationalised industries', 13, ['Business organisation'], [
    'A **public corporation** (parastatal) is a business owned and controlled by the **state**, usually set up by law and run by a board appointed by the government. Examples in Cameroon include CAMTEL (telecommunications), CAMPOST (postal services), the Cameroon Development Corporation (CDC, plantations), the Port Authority of Douala and the national airline Camair-Co.',
    'Reasons for public enterprises:\n- to provide **essential services** (water, power, transport) that private firms might neglect\n- to control **natural monopolies**\n- to protect **strategic** sectors\n- to create employment and develop backward regions.',
    'Criticisms: inefficiency, losses covered by taxpayers, political interference and slow decisions. Hence **privatisation**: transferring state firms to private owners, which Cameroon carried out for several firms from the 1990s. The opposite, the state taking over private firms, is **nationalisation**.',
  ], 'econ-location', 'Parastatals aim at public service as well as profit.',
  ['Transferring a state-owned firm to private owners is called:', ['privatisation', 'nationalisation', 'localisation', 'specialisation'], 'The opposite of nationalisation.'],
  [['Public corporation', 'A state-owned business set up to provide goods or services.'], ['Parastatal', 'In Cameroon, a public corporation or state enterprise.'], ['Privatisation', 'Transferring state enterprises to private ownership.'], ['Nationalisation', 'The state taking ownership of private firms.']],
  [
    { q: 'Give two reasons for and two criticisms of public corporations.', steps: ['Reasons: **to provide essential services such as water and power; to control natural monopolies in the public interest.**', 'Criticisms: **they are often inefficient and loss-making; political interference slows decisions.**'] },
  ]),

  L('ec-location-4', 'ec-f4-public', '6.2', 'The location of industry', 14, ['Production'], [
    'Firms choose locations that minimise costs and maximise access to markets. Factors:\n- **raw materials**: industries using heavy, bulky materials that lose weight in processing locate near them (cement near limestone; cotton ginning near cotton fields)\n- **market**: industries whose products are bulky or perishable locate near customers (breweries, bakeries)\n- **power**: energy-hungry industries locate near cheap power (the aluminium smelter at **Edéa**, near hydroelectric dams on the Sanaga)\n- **transport**, **labour**, **water**, **land**, **government policy** and **external economies** (services that grow up around an industry).',
    'Cameroonian examples: cement at Figuil (limestone) and Bonabéri in Douala (port and market); cotton ginneries around Garoua (cotton zone); breweries and many factories in **Douala**, Cameroon’s main port and market.',
    'The **localisation** (concentration) of industry brings external economies, skilled labour and specialised services, but also congestion, pollution and heavy unemployment if the industry declines. Governments may encourage decentralisation to less developed regions.',
  ], 'econ-location', 'Heavy raw materials pull industry to the source; bulky products pull it to the market.',
  ['Why is Douala attractive to many industries?', ['it is the main port and the largest market', 'it has no transport', 'it is in the Sahel', 'it has no labour'], 'Port, market, labour and services.'],
  [['Localisation of industry', 'The concentration of an industry in one area.'], ['External economies', 'Cost savings a firm gains from being near similar firms.'], ['Footloose industry', 'An industry not tied to any particular location.']],
  [
    { q: 'Explain the location of the aluminium smelter at Edéa.', steps: ['Smelting aluminium needs enormous amounts of electricity.', '**Edéa is near hydroelectric power stations on the Sanaga, which supply cheap power; it is also close to the port of Douala for importing raw materials and exporting aluminium.**'] },
  ]),

  // ---------- Demand ----------
  L('ec-demand-4', 'ec-f4-demand', '7.1', 'The law of demand', 14, ['Price theory', 'Graphs'], [
    '**Demand** is the quantity of a good that consumers are **willing and able** to buy at a given price over a period of time. A wish without the money to pay is not demand.',
    'The **law of demand**: other things being equal, the **lower the price, the greater the quantity demanded**, and the higher the price, the smaller the quantity demanded. Reasons: a lower price makes the good cheaper than substitutes (**substitution effect**), and consumers’ money buys more (**income effect**).',
    'A **demand schedule** is a table of prices and quantities; plotted on a graph with **price** on the vertical axis and **quantity** on the horizontal axis, it gives a **demand curve** sloping **downwards** from left to right. **Market demand** is the sum of all individual demands at each price.',
  ], 'econ-demand', 'Price on the vertical axis, quantity on the horizontal axis.',
  ['On a demand graph, price is shown on the:', ['vertical axis', 'horizontal axis', 'title', 'legend only'], 'Quantity is on the horizontal axis.'],
  [['Demand', 'The quantity buyers are willing and able to buy at each price.'], ['Law of demand', 'Quantity demanded rises as price falls, other things equal.'], ['Demand schedule', 'A table of quantities demanded at different prices.'], ['Ceteris paribus', 'Latin for "other things being equal".']],
  [
    { q: 'Two buyers of tomatoes demand, at 500, 400, 300 and 200 FCFA per kg: Ali 1, 2, 3, 4 kg; Bih 2, 3, 4, 5 kg. Find market demand at each price.', steps: ['Add the quantities at each price.', '**500 FCFA: 3 kg; 400 FCFA: 5 kg; 300 FCFA: 7 kg; 200 FCFA: 9 kg.** Market demand rises as price falls.'] },
  ]),

  L('ec-demandshift-4', 'ec-f4-demand', '7.2', 'Movements along and shifts of the demand curve', 15, ['Price theory', 'Graphs'], [
    'A change in the **price of the good itself** causes a **movement along** the demand curve: a fall in price gives an **extension** of demand, a rise gives a **contraction**. This is a "change in quantity demanded".',
    'A change in any **other factor** causes the whole curve to **shift**: a "change in demand". Factors:\n- **income**: more income raises demand for normal goods (shift right) but lowers it for inferior goods\n- prices of **substitutes** (a rise in the price of rice raises demand for spaghetti) and **complements** (a rise in the price of cars lowers demand for petrol)\n- **tastes** and fashion, advertising\n- **population** size and structure\n- **expectations** of future prices\n- government policy (taxes, subsidies).',
    'Exceptions to the law of demand: goods of ostentation (**Veblen goods**) bought because they are expensive; some very basic **inferior** goods for the very poor (**Giffen goods**); and goods whose prices are expected to rise further.',
  ], 'econ-demand-shift', 'Own price: move along. Anything else: shift the curve.',
  ['A rise in the price of rice, a substitute for spaghetti, causes the demand for spaghetti to:', ['shift to the right', 'shift to the left', 'move along the curve', 'stay unchanged'], 'Consumers switch to spaghetti.'],
  [['Extension of demand', 'An increase in quantity demanded due to a fall in price.'], ['Contraction of demand', 'A fall in quantity demanded due to a rise in price.'], ['Substitute', 'A good that can be used in place of another.'], ['Complement', 'A good used together with another.']],
  [
    { q: 'For each event, say whether the demand curve for motorbike taxis shifts or there is a movement along it: (a) the fare rises; (b) bus fares rise; (c) incomes fall.', steps: ['(a) **Movement along the curve (a contraction), since the fare is the good’s own price.**', '(b) **Shift right: buses are a substitute, now dearer.**', '(c) **Shift left, if motorbike taxis are a normal good.**'] },
  ]),
];
