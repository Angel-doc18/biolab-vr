// Economics lessons for Form 3 (first part): what economics is, the basic
// economic problem, the central problems, the free market, the price
// mechanism, the planned and mixed economies with Cameroon as a case study,
// production and its sectors, land and labour. Foundation lessons for the GCE
// course; the Form 4 and Form 5 lessons study the same ideas in more depth.
// Original text written for this app, with examples in francs CFA (FCFA).

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
  // ---------- 1. What economics is ----------
  L('ec-whatis-3', 'ec-f3-intro', '1.1', 'What economics studies: needs, wants, goods and services', 12, ['Basic concepts'], [
    'Economics is a **social science**: it studies how people, firms and governments behave when they produce, share and use goods and services. In Form 3 the course has three modules: economics and economic systems, production and its factors, and the location and scale of industry.',
    'Some words used all the time:\n- **needs**: things we must have to live, such as food, water, shelter, clothing and health care\n- **wants**: all the things people desire, including needs and things that make life more comfortable (a phone, a motorbike, a television)\n- **goods**: things we can see and touch, such as rice, shoes and machines\n- **services**: useful activities that cannot be touched or stored, such as teaching, transport, banking and a doctor’s care.',
    'Goods are either **free goods**, which nature gives in plenty at no cost (air, sunshine, sea water), or **economic goods**, which are scarce, cost effort to produce and carry a price (bread, cement, electricity). **Consumer goods** satisfy wants directly (a loaf of bread), while **producer (capital) goods** are used to make other goods (a baker’s oven). A person who uses goods and services is a **consumer**; a person or firm who makes them is a **producer**.',
  ], 'econ3-goods', 'Economics studies economic goods: the scarce ones that carry a price.',
  ['Which of these is an economic good?', ['a bag of cement', 'sunshine', 'the air we breathe', 'rain on a farm'], 'It is scarce and has a price.'],
  [['Needs', 'Things people must have to live: food, water, shelter, clothing, health care.'], ['Wants', 'All the goods and services people desire.'], ['Free good', 'A good given by nature in plenty, with no price.'], ['Economic good', 'A scarce good that costs effort to produce and has a price.'], ['Service', 'A useful activity that cannot be touched or stored.']],
  [
    { q: 'Sort these into goods or services, and free or economic: (a) a haircut; (b) sea water at Limbe beach; (c) a sack of rice; (d) a taxi ride.', steps: ['(a) A haircut is a **service** (economic: the barber charges for it).', '(b) Sea water at the beach is a **free good**: nature gives it in plenty.', '(c) A sack of rice is an **economic good**: it is scarce and has a price.', '(d) A taxi ride is a **service** (economic: the fare is paid).'] },
  ]),

  L('ec-definitions-3', 'ec-f3-intro', '1.2', 'Definitions of economics: wealth, welfare, scarcity and growth', 14, ['Basic concepts'], [
    'Economists have defined their subject in different ways as it grew:\n- **The wealth definition**: the Scottish economist **Adam Smith**, often called the father of economics, saw economics as the study of the nature and causes of the **wealth of nations** (his book of 1776). Weakness: it puts wealth first and people second.\n- **The welfare definition**: **Alfred Marshall** (Principles of Economics, 1890) described it as the study of people in the ordinary business of life, and of the material things that bring **well-being** (welfare). Weakness: it leaves out non-material services and goods that harm welfare.',
    '- **The scarcity definition**: **Lionel Robbins** (1932) called economics the science that studies human behaviour as a relationship between **ends** (wants) and **scarce means** (resources) which have **alternative uses**. This is the definition most used today, because it applies to every person and every country.\n- **The growth definition**: **Paul Samuelson**, whose textbook Economics first appeared in 1948, added time: economics studies how people and society **choose** to use scarce resources to produce goods and share them **now and in the future**, so it also studies **economic growth**.',
    'Each definition adds something. Together they show that economics is about scarce resources, the choices people make with them, the well-being those choices bring, and how an economy can produce more over time.',
  ], 'econ3-definitions', 'Smith: wealth. Marshall: welfare. Robbins: scarcity and choice. Samuelson: growth over time.',
  ['Which definition of economics is built on ends, scarce means and alternative uses?', ['the scarcity definition of Lionel Robbins', 'the wealth definition of Adam Smith', 'the welfare definition of Alfred Marshall', 'the growth definition of Paul Samuelson'], 'Robbins, 1932.'],
  [['Wealth', 'The stock of valuable things owned by a person or a nation.'], ['Welfare', 'The well-being or happiness of people.'], ['Ends', 'The wants people try to satisfy.'], ['Means', 'The resources used to satisfy wants.'], ['Economic growth', 'An increase in the goods and services an economy can produce.']],
  [
    { q: 'Write the four definitions of economics in order of date, giving the economist and the key idea of each.', steps: ['**1776, Adam Smith**: economics is the science of **wealth**.', '**1890, Alfred Marshall**: the study of people in the ordinary business of life and their **welfare**.', '**1932, Lionel Robbins**: human behaviour as a relationship between ends and **scarce means** with alternative uses.', '**1948 onward, Paul Samuelson**: choices about scarce resources **over time**, for now and the future (**growth**).'] },
    { q: 'Give one weakness of the wealth definition and say how Robbins’ definition avoids it.', steps: ['The wealth definition puts **wealth before people**, as if getting rich were the only aim.', '**Robbins puts human behaviour and choice at the centre: people use scarce means for many different ends, not only to collect wealth.**'] },
  ]),

  // ---------- 2. The basic economic problem ----------
  L('ec-scarcity-3', 'ec-f3-problem', '2.1', 'Scarcity and choice: the scale of preference', 12, ['Basic concepts'], [
    'The **basic economic problem** is **scarcity**: human wants are **unlimited**, but the resources to satisfy them (land, labour, capital and enterprise, and money income) are **limited**. When one want is met, new wants appear: a student who gets a phone soon wants credit, a cover and a charger.',
    'Scarcity forces **choice**. Since not every want can be satisfied, people must decide which wants to satisfy first. A sensible consumer draws up a **scale of preference**: a list of wants arranged from the most urgent to the least urgent, then satisfies them in that order until the money runs out.',
    'Scarcity is **relative**, not absolute: it does not mean that a good cannot be found, but that there is not enough of it to satisfy everyone at no cost. Even the richest people and countries face scarcity, because time and resources are always limited compared with wants.',
  ], 'econ3-preference', 'Scarcity means choice; the scale of preference decides what comes first.',
  ['Why must every household make choices?', ['its income cannot buy everything it wants', 'goods are free', 'wants are limited', 'prices never change'], 'Limited income, unlimited wants.'],
  [['Scarcity', 'The shortage of resources compared with unlimited wants.'], ['Choice', 'Deciding which wants to satisfy because resources are scarce.'], ['Scale of preference', 'A list of wants arranged in order of urgency.']],
  [
    { q: 'Ewane has 3,000 FCFA for the week. His scale of preference: (1) transport to school 1,500 FCFA; (2) exercise book 800 FCFA; (3) phone credit 500 FCFA; (4) a football ticket 1,000 FCFA. Which wants are satisfied, and how much is left?', steps: ['Transport 1,500 FCFA leaves 3,000 − 1,500 = 1,500 FCFA.', 'The exercise book 800 FCFA leaves 1,500 − 800 = 700 FCFA.', 'Phone credit 500 FCFA leaves 700 − 500 = 200 FCFA.', '**Wants 1, 2 and 3 are satisfied; the football ticket (1,000 FCFA) is not, and 200 FCFA is left.**'] },
  ]),

  L('ec-oppcost-3', 'ec-f3-problem', '2.2', 'Opportunity cost', 14, ['Basic concepts', 'Graphs'], [
    '**Opportunity cost** is the **next best alternative given up** when a choice is made. It is the real cost of a choice, measured in what is forgone, not in money. Every choice has one, because resources have **alternative uses**.',
    'Opportunity cost for:\n- **a household**: a family that spends 50,000 FCFA on school fees gives up, say, a new bed\n- **a firm**: a bakery that uses its oven for cakes gives up the bread the oven could have baked\n- **the government**: money spent on a new stadium is not available for, say, health centres\n- **a student**: an hour spent watching television is an hour not spent revising.',
    'A **production possibility line** shows opportunity cost. Ayuk has 4 hectares; each hectare gives either **2 tonnes of maize** or **1 tonne of groundnuts**. He can grow 8 tonnes of maize, or 4 tonnes of groundnuts, or a mix such as 4 maize and 2 groundnuts. Every 2 extra tonnes of maize cost 1 tonne of groundnuts. A point inside the line means land is left unused; a point outside it cannot be reached with 4 hectares.',
  ], 'econ3-oppcost', 'Opportunity cost is the next best thing you give up, not the money you pay.',
  ['Fadimatou can either revise for her test or go to a party, and she revises. Her opportunity cost is:', ['the party', 'the test', 'her school fees', 'nothing'], 'The alternative forgone.'],
  [['Opportunity cost', 'The next best alternative given up when a choice is made.'], ['Alternative uses', 'The different ways a resource can be used.'], ['Production possibility line', 'A line showing the combinations of two goods that can be produced with given resources.']],
  [
    { q: 'Using Ayuk’s farm (4 hectares; each gives 2 t maize or 1 t groundnuts): (a) What is the opportunity cost of 1 tonne of maize? (b) Can he grow 6 t maize and 3 t groundnuts?', steps: ['(a) One hectare gives 2 t maize **or** 1 t groundnuts, so 2 t maize cost 1 t groundnuts: **1 t maize costs 0.5 t groundnuts.**', '(b) 6 t maize needs 6 ÷ 2 = 3 hectares; 3 t groundnuts needs 3 hectares. Total 6 hectares.', '**He has only 4 hectares, so 6 t maize and 3 t groundnuts lie outside his line: not possible.**'] },
    { q: 'The council has 20 million FCFA. It can build a market shed (20 million), a borehole (12 million) or a footbridge (8 million). It builds the market shed, and would otherwise have built the borehole and the footbridge. What is its opportunity cost?', steps: ['The next best use of the 20 million FCFA was the borehole and the footbridge together (12 + 8 = 20 million).', '**The opportunity cost of the market shed is the borehole and the footbridge it could have built instead.**'] },
  ]),

  // ---------- 3. Central problems ----------
  L('ec-whathow-3', 'ec-f3-central', '3.1', 'What to produce and how to produce', 13, ['Economic systems'], [
    'Because resources are scarce, every economy must solve **central problems**. The first is **what to produce, and how much**: food or cars, schools or roads, consumer goods for today or capital goods for tomorrow. Producing more of one thing means producing less of another.',
    'The second is **how to produce**: which combination of factors and which **technique** to use.\n- a **labour-intensive** method uses many workers and few machines, as on most family cocoa and coffee farms\n- a **capital-intensive** method uses many machines and fewer workers, as on large mechanised sugar estates such as those around Mbandjock.\nThe choice depends on the cost of labour and capital, the skills available and the technology known.',
    'In Cameroon, labour is plentiful and capital is scarce, so many small producers use labour-intensive methods. Large firms that need high, regular output, such as breweries and cement works, use capital-intensive methods.',
  ], 'econ3-techniques', 'What: which goods. How: which method, labour-intensive or capital-intensive.',
  ['A palm-oil mill that replaces 30 workers with one press machine has changed:', ['how it produces', 'what it produces', 'for whom it produces', 'where it sells'], 'Its technique of production.'],
  [['Central problems', 'What, how and for whom to produce: questions every economy must answer.'], ['Technique of production', 'The method and combination of factors used to produce.'], ['Labour-intensive', 'Using many workers compared with machines.'], ['Capital-intensive', 'Using many machines compared with workers.']],
  [
    { q: 'A farmer can clear 1 hectare with 10 workers paid 2,000 FCFA a day for 5 days, or hire a tractor for 80,000 FCFA. Which method is cheaper, and what kind is each?', steps: ['Workers: 10 × 2,000 × 5 = 100,000 FCFA. This is **labour-intensive**.', 'Tractor: 80,000 FCFA. This is **capital-intensive**.', '**The tractor is cheaper by 20,000 FCFA, so if a tractor can be hired, the capital-intensive method costs less here.**'] },
  ]),

  L('ec-forwhom-3', 'ec-f3-central', '3.2', 'For whom to produce, and using resources fully', 12, ['Economic systems'], [
    'The third central problem is **for whom to produce**: how the goods and services made are **shared** among the people. This is the problem of **distribution**. In a market it depends mainly on income: those with more money buy more. A government may also give some goods according to **need**, such as free primary education or free vaccination.',
    'Economies also face two further problems:\n- **using resources fully**: idle land, unemployed workers and unused machines are waste; an economy wants **full employment** of its resources\n- **using resources efficiently**: producing at the lowest cost without waste, and making the goods people want most\n- **growth**: increasing what can be produced in future, through more capital, better skills and new technology.',
    'Every country answers these questions, but in different ways. The way a society organises its answers is its **economic system**: the free market, the planned economy or the mixed economy.',
  ], 'econ3-central', 'For whom = who gets the output. An economic system is a way of answering all the central problems.',
  ['Free vaccination of all children by the state answers mainly the question of:', ['for whom to produce', 'how to produce', 'what to import', 'where to build'], 'Goods given by need.'],
  [['Distribution', 'The way goods, services and income are shared among people.'], ['Full employment', 'A situation where all resources willing to work are used.'], ['Efficiency', 'Producing at the lowest cost without waste.'], ['Economic system', 'The way a society organises the answers to the central problems.']],
  [
    { q: 'Classify each decision: (a) a ministry chooses to build more technical colleges; (b) a firm buys robots for packing; (c) the state gives school kits to pupils in poor areas; (d) a region has many unemployed young people.', steps: ['(a) **What to produce**: more education services.', '(b) **How to produce**: a capital-intensive method.', '(c) **For whom to produce**: distribution by need.', '(d) **Resources not fully used**: labour is idle.'] },
  ]),

  // ---------- 4. The free market economy ----------
  L('ec-freemarket-3', 'ec-f3-market', '4.1', 'Features of the free market economy', 13, ['Economic systems'], [
    'A **free market economy** (also called the **capitalist** or **laissez-faire** economy) is one in which the central problems are solved mainly by **private individuals and firms** through the market, with very little government control.',
    'Its features:\n- **private property**: land, factories and shops are owned privately\n- **freedom of enterprise**: anyone may start a business and produce what they choose\n- **freedom of choice**: consumers spend their income as they wish, and workers choose their jobs\n- **the profit motive**: firms produce in order to make profit\n- **competition** between many buyers and sellers\n- **consumer sovereignty**: by choosing what to buy, consumers decide what is produced\n- **the price mechanism**: prices, set by demand and supply, guide all decisions\n- a **limited role for government**: law and order, defence and the protection of property.',
    'No country today is a pure free market. The United States is often given as the country closest to it, but even there the state runs schools, roads and the army.',
  ], 'econ3-freemarket', 'Free market: private property, profit, competition and prices decide.',
  ['In a free market economy, a mechanic who wants to open a garage needs mainly:', ['his own capital and customers, not a state plan', 'an order from a planning ministry', 'a share of state land given by quota', 'nothing at all'], 'Freedom of enterprise.'],
  [['Free market economy', 'An economy where private firms and the price mechanism solve the central problems.'], ['Laissez-faire', 'A French phrase meaning "let do": minimal government interference.'], ['Profit motive', 'The desire to make profit, which drives private firms.'], ['Consumer sovereignty', 'The power of consumers to decide what is produced through their spending.']],
  [
    { q: 'Show how consumer sovereignty works when many young people start buying smartphones instead of radios.', steps: ['Spending on smartphones rises and spending on radios falls.', 'Shops selling phones make more profit; radio sellers make less.', '**Firms move resources into supplying phones and out of radios: consumers’ spending has decided what is produced.**'] },
  ]),

  L('ec-freemerits-3', 'ec-f3-market', '4.2', 'Merits and demerits of the free market', 13, ['Economic systems'], [
    'Merits (advantages):\n- **efficiency**: competition pushes firms to cut costs and avoid waste\n- **wide choice** of goods and services\n- **incentives**: the hope of profit encourages hard work, risk-taking and **innovation**\n- **quick response** to changes in demand through prices\n- **freedom**: people choose their work and their spending\n- **no costly planning machinery**.',
    'Demerits (disadvantages):\n- **inequality**: incomes and wealth become very unequal; the poor may lack basic needs\n- **public goods** (street lights, defence, flood barriers) are not provided, because firms cannot make people pay for them\n- harmful goods may be produced if they are profitable\n- **monopolies** may grow and exploit consumers\n- **instability**: booms and slumps bring unemployment\n- **waste** of resources on advertising and duplication\n- firms ignore **social costs** such as pollution.',
    'Because of these demerits, all governments step in to some degree: they provide public goods, protect consumers and workers, and help the poor. This leads to the mixed economy.',
  ], 'econ3-freemerits', 'Free markets give choice and efficiency but leave inequality and public goods unsolved.',
  ['Street lighting is rarely supplied by private firms in a free market because:', ['they cannot make each user pay for it', 'it is too cheap to make', 'nobody wants light', 'the law forbids it'], 'A public good.'],
  [['Public good', 'A good such as street lighting that everyone can use and nobody can easily be charged for.'], ['Monopoly', 'A single seller controlling the market for a good.'], ['Social cost', 'A cost of production borne by society, such as pollution.'], ['Innovation', 'Bringing new products or methods into use.']],
  [
    { q: 'A free market town has many private clinics but no public health centre. Using merits and demerits, explain who gains and who loses.', steps: ['Gains: **competition among clinics gives choice, shorter queues and pressure to improve service for those who can pay.**', 'Losses: **poor families who cannot pay are left without care, because private clinics treat only paying patients: a demerit (inequality).**'] },
  ]),

  // ---------- 5. Guided work 1: the price mechanism ----------
  L('ec-pricemech-3', 'ec-f3-pricemech', '5.1', 'The price mechanism: signals, rationing and incentives', 15, ['Price theory', 'Graphs'], [
    'In a free market, prices are set by the meeting of **demand** (what buyers are willing and able to buy at each price) and **supply** (what sellers are willing and able to sell at each price). At a lower price buyers want more; at a higher price sellers offer more. The price at which the two are equal is the **equilibrium price**.',
    'Example: tomatoes at a town market. At 5,000 FCFA a crate, buyers want 50 crates a day and sellers bring 50: this is the equilibrium. At 8,000 FCFA buyers want only 20 crates but sellers bring 80, a **surplus** of 60 crates, so sellers cut the price. At 2,000 FCFA buyers want 80 crates but only 20 are brought, a **shortage** of 60, so the price rises. The price moves until the market clears.',
    'Prices do three jobs:\n- **signals**: a rising price tells producers that people want more\n- **rationing**: when a good is scarce, a high price shares it among those willing and able to pay\n- **incentives**: higher prices and profits encourage producers to supply more.\nThis automatic working of prices is the **price mechanism**, sometimes called the **invisible hand** after Adam Smith.',
  ], 'econ3-pricemech', 'Surplus: price falls. Shortage: price rises. Equilibrium: the market clears.',
  ['At a price where buyers want 80 crates but sellers offer 20, there is:', ['a shortage of 60 crates, so the price rises', 'a surplus of 60 crates, so the price falls', 'equilibrium', 'no market'], 'Demand exceeds supply.'],
  [['Demand', 'The quantity buyers are willing and able to buy at each price.'], ['Supply', 'The quantity sellers are willing and able to sell at each price.'], ['Equilibrium price', 'The price at which quantity demanded equals quantity supplied.'], ['Surplus', 'An excess of supply over demand at a given price.'], ['Shortage', 'An excess of demand over supply at a given price.']],
  [
    { q: 'Use the schedule: price 2,000 FCFA (demand 80, supply 20 crates); 5,000 FCFA (50, 50); 8,000 FCFA (20, 80). Find the equilibrium and the surplus or shortage at the other prices.', steps: ['Equilibrium where demand = supply: **5,000 FCFA and 50 crates**.', 'At 8,000 FCFA: supply 80 − demand 20 = **a surplus of 60 crates**; price falls.', 'At 2,000 FCFA: demand 80 − supply 20 = **a shortage of 60 crates**; price rises.'] },
  ]),

  L('ec-guided1-3', 'ec-f3-pricemech', '5.2', 'Guided work: following prices in a local market', 14, ['Price theory', 'Graphs', 'Guided work'], [
    'In this guided work, students follow the price of one crop at a local market for several weeks and explain the changes with demand and supply. Choose a crop sold every day (tomatoes, plantains, Irish potatoes or onions), visit the same sellers on the same day each week, and record the price per crate, bunch or bag in a table.',
    'Questions to ask the sellers: Where do the goods come from? Has the quantity arriving changed? Has the cost of transport changed? Are more people buying (for example before a feast or the start of the school year)? Each answer points to a change in **supply** or in **demand**.',
    'Example: a disease destroys part of the tomato crop in Foumbot, a major growing area of the West region. Fewer crates reach the market: at each price, sellers offer 20 crates fewer. The **supply curve shifts left**, a shortage appears at the old price of 5,000 FCFA, and the price rises to a new equilibrium of **6,000 FCFA** with **40 crates** sold. The higher price **rations** the smaller crop and **signals** farmers to plant more once the disease is controlled.',
  ], 'econ3-harvest', 'Find the cause first: did supply change, or did demand change?',
  ['Before the end-of-year feasts, more families buy chickens. The price of chickens is likely to:', ['rise, because demand has increased', 'fall, because demand has increased', 'fall, because supply has increased', 'stay the same'], 'A rise in demand.'],
  [['Guided work', 'A practical task done with the teacher’s guidance.'], ['Shift in supply', 'A change in the quantity offered at every price, moving the whole curve.'], ['Market survey', 'Collecting information directly from buyers and sellers.']],
  [
    { q: 'A student records the price of a bunch of plantains: week 1, 2,500 FCFA; week 2, 2,500; week 3, 3,000; week 4, 3,500. Sellers say bad roads have cut deliveries. Calculate the rise from week 1 to week 4 and explain it.', steps: ['Rise = 3,500 − 2,500 = 1,000 FCFA. As a percentage: 1,000 ÷ 2,500 × 100 = **40%**.', 'Bad roads mean fewer bunches arrive: **supply has fallen** (the supply curve shifted left).', '**With demand unchanged, the shortage at the old price pushed the price up by 40%.**'] },
    { q: 'On the tomato graph, the old equilibrium was 5,000 FCFA and 50 crates; after the disease it is 6,000 FCFA and 40 crates. What happened to the money sellers receive in total?', steps: ['Before: 5,000 × 50 = 250,000 FCFA a day.', 'After: 6,000 × 40 = 240,000 FCFA a day.', '**Total takings fell by 10,000 FCFA a day, even though the price rose.**'] },
  ]),

  // ---------- 6. The planned economy ----------
  L('ec-command-3', 'ec-f3-command', '6.1', 'Features of the planned (command) economy', 13, ['Economic systems'], [
    'A **planned economy** (also called the **command**, **centrally planned** or **socialist** economy) is one in which the state solves the central problems. A **central planning authority** decides what to produce, how to produce and for whom.',
    'Its features:\n- **state (collective) ownership** of land, factories, mines and banks\n- **central planning**: the planners set output **targets** for each farm and factory, often in plans of **five years**\n- **prices fixed by the state**, not by demand and supply\n- **little or no private enterprise** and no profit motive\n- **little consumer choice**: people buy what has been planned\n- the aim of **equality**: jobs, housing, health and education for all.',
    'Examples: the **Soviet Union** (1922 to 1991) ran its economy through the state planning committee, Gosplan, and a series of five-year plans from 1928; China before its market reforms of 1978; Cuba; and **North Korea**, which is still largely planned today.',
  ], 'econ3-command', 'Planned economy: the state owns, plans and fixes prices.',
  ['In a planned economy, the number of shoes a factory makes each year is decided by:', ['targets set by the planning authority', 'the factory’s customers alone', 'competition between private firms', 'the stock exchange'], 'Central planning.'],
  [['Planned (command) economy', 'An economy where the state owns resources and plans production.'], ['Central planning authority', 'The state body that decides what, how and for whom to produce.'], ['Target', 'An amount of output that a plan requires a farm or factory to reach.'], ['Collective ownership', 'Ownership of resources by the state on behalf of all.']],
  [
    { q: 'A plan requires a region to produce 120,000 tonnes of maize in five years, equally each year. In year 3 it produces 21,000 tonnes. Was the year’s target met?', steps: ['Yearly target = 120,000 ÷ 5 = 24,000 tonnes.', 'Shortfall in year 3 = 24,000 − 21,000 = **3,000 tonnes**.', '**The target was not met; planners must find more resources or accept less maize, which can cause shortages.**'] },
  ]),

  L('ec-commandmerits-3', 'ec-f3-command', '6.2', 'Merits and demerits of the planned economy', 12, ['Economic systems'], [
    'Merits (advantages):\n- **less inequality**: incomes are kept closer together\n- **basic needs** for all: housing, health care and education are provided\n- **full employment**: everyone is given a job\n- resources can be directed quickly to **priorities** such as heavy industry or defence\n- **less waste on advertising** and competition.',
    'Demerits (disadvantages):\n- **lack of incentives**: without profit, workers and managers have little reason to work harder or innovate\n- **inefficiency and waste**: planners cannot know the wants of millions of people\n- **shortages and queues** of some goods and surpluses of others\n- **little consumer choice** and poor quality\n- **bureaucracy**: many officials and slow decisions\n- **loss of freedom** to choose a job or start a business.',
    'Because of these demerits, most planned economies have changed. China opened to markets after 1978, and the Soviet Union broke up in 1991. Today most countries mix planning with markets.',
  ], 'econ3-commandmerits', 'Planned economies aim at equality but suffer from weak incentives and shortages.',
  ['Long queues for bread in a planned economy usually show that:', ['planners set too low a target or too low a price', 'there is too much competition', 'firms are making too much profit', 'consumers are sovereign'], 'Plans misjudged demand.'],
  [['Incentive', 'A reward that encourages people to work or produce more.'], ['Bureaucracy', 'Government by many officials following rules, often slowly.'], ['Shortage', 'Less of a good available than people want at the fixed price.']],
  [
    { q: 'Compare the free market and planned economies on choice, equality and incentives.', steps: ['**Choice**: wide in the free market; narrow in the planned economy.', '**Equality**: low in the free market; greater in the planned economy.', '**Incentives**: strong in the free market (profit); weak in the planned economy (no profit motive).'] },
  ]),

  // ---------- 7. The mixed economy ----------
  L('ec-mixed-3', 'ec-f3-mixed', '7.1', 'The mixed economy: features, merits and demerits', 13, ['Economic systems'], [
    'A **mixed economy** combines features of the free market and the planned economy. The central problems are solved partly by the **price mechanism** and private firms, and partly by the **state**.',
    'Features:\n- a **private sector** of individuals and firms working for profit\n- a **public sector** of state enterprises, ministries and services\n- the price mechanism works for most goods, but the state **controls** some prices, taxes and subsidies\n- the state provides **public goods** (roads, defence) and **merit goods** (schools, hospitals)\n- laws protect consumers, workers and the environment.',
    'Merits: choice and incentives from the market, with public goods and help for the poor from the state; the state can correct market failures. Demerits: state enterprises may be inefficient and run at a loss; high taxes may discourage effort; corruption and red tape can slow business; it is hard to find the right balance between the two sectors. **Almost every country, including Cameroon, is a mixed economy.**',
  ], 'econ3-mixed', 'Mixed economy = private sector + public sector, prices + planning.',
  ['A country where private banks compete while the state runs the water supply is:', ['a mixed economy', 'a pure free market', 'a pure planned economy', 'a barter economy'], 'Both sectors work side by side.'],
  [['Mixed economy', 'An economy where both private firms and the state solve the central problems.'], ['Private sector', 'The part of the economy owned by individuals and firms.'], ['Public sector', 'The part of the economy owned and run by the state.'], ['Merit good', 'A good such as education that the state provides because people may use too little of it.'], ['Subsidy', 'Money paid by the government to lower the cost of a good.']],
  [
    { q: 'Put each into the private or public sector: (a) a state primary school; (b) a family bakery; (c) the national electricity transmission company owned by the state; (d) a privately owned bank.', steps: ['(a) **Public sector**.', '(b) **Private sector**.', '(c) **Public sector**.', '(d) **Private sector**.'] },
  ]),

  L('ec-cameroon-3', 'ec-f3-mixed', '7.2', 'Case study: Cameroon’s mixed economy', 15, ['Economic systems', 'Cameroon'], [
    'Cameroon has a **mixed economy**. After independence the state followed **planned liberalism**: private enterprise was allowed, but the government guided the economy through a series of **five-year development plans** (from the 1960s to the late 1980s) and set up many public enterprises. The economic crisis of the late 1980s led to **structural adjustment** programmes with the IMF and the World Bank from 1988: some state firms were privatised, and many prices and the trade in crops such as cocoa and coffee were freed.',
    'The **private sector** today includes large firms (breweries, sugar estates, banks, cement works, telephone companies) and thousands of small and medium-sized enterprises. Most Cameroonians earn their living in the **informal sector**: market traders, tailors, mechanics, motorbike riders and small farmers. The **public sector** includes the ministries and public services, and state enterprises such as **CAMTEL** (telecommunications), the **CDC** (plantations), **SONARA** (oil refining at Limbe) and **CAMWATER** (water).',
    'The state still guides the economy through long-term plans: **Vision 2035** (adopted in 2009), which aims to make Cameroon an emerging country by 2035, and the **National Development Strategy 2020 to 2030 (SND30)**, which puts industry and job creation first. It also collects taxes, builds roads, ports and dams, and regulates prices of some goods such as fuel.',
  ], 'econ3-cameroon', 'Cameroon: private firms and the informal sector, plus state enterprises and national plans.',
  ['Which of these is a feature of Cameroon’s economy that shows the state’s role?', ['long-term national plans such as Vision 2035', 'no taxes at all', 'no private firms', 'no markets'], 'The state guides the economy.'],
  [['Planned liberalism', 'Cameroon’s early policy: private enterprise guided by state plans.'], ['Structural adjustment', 'Reforms such as privatisation and freer prices adopted after the crisis of the late 1980s.'], ['Informal sector', 'Small, unregistered economic activities that pay little or no tax.'], ['Vision 2035', 'Cameroon’s long-term plan, adopted in 2009, to become an emerging country by 2035.'], ['SND30', 'The National Development Strategy for 2020 to 2030.']],
  [
    { q: 'Give three pieces of evidence that Cameroon is a mixed economy and not a pure free market or a pure planned economy.', steps: ['**Private sector**: private breweries, banks and thousands of informal traders work for profit.', '**Public sector**: state enterprises such as CAMTEL and SONARA, public schools and hospitals.', '**State guidance**: national plans (Vision 2035, SND30), taxes and the regulation of fuel prices.'] },
  ]),

  // ---------- 8. Production ----------
  L('ec-production-3', 'ec-f3-production', '8.1', 'The meaning of production: direct and indirect production', 13, ['Production'], [
    '**Production** is the creation of goods and services that satisfy human wants. In economics, production is not only making things in factories: it is any activity that adds **utility** (usefulness) to a good, until it reaches the consumer. A farmer, a lorry driver, a shopkeeper and a teacher are all producers. **Consumption** is the using up of goods and services to satisfy wants.',
    'Production creates four kinds of utility:\n- **form utility**: changing the shape of materials (a carpenter turns planks into a table)\n- **place utility**: moving goods to where they are wanted (a trader brings onions from the North to Douala)\n- **time utility**: keeping goods until they are wanted (storing maize after harvest)\n- **possession utility**: passing goods to those who want them (a shopkeeper sells to a customer).',
    '**Direct production** is producing goods for one’s own use or one’s family, with no exchange: a family grows cassava to eat, or builds its own house. It goes with subsistence living. **Indirect production** is producing goods or services for sale in exchange for money, then using the money to buy other goods. It goes with **specialisation** and a money economy, and today most production in towns is indirect.',
  ], 'econ3-utility', 'Production adds utility: form, place, time or possession.',
  ['Storing yams after the harvest and selling them months later creates:', ['time utility', 'form utility', 'place utility', 'no utility'], 'Goods kept until they are wanted.'],
  [['Production', 'The creation of goods and services to satisfy wants.'], ['Utility', 'The ability of a good or service to satisfy a want.'], ['Direct production', 'Producing for one’s own use, without exchange.'], ['Indirect production', 'Producing for sale in exchange for money.'], ['Consumption', 'Using goods and services to satisfy wants.']],
  [
    { q: 'Say which kind of utility each person creates: (a) a tailor sewing a shirt; (b) a lorry driver carrying cement to Bertoua; (c) a cold-store keeper freezing fish; (d) a pharmacist selling medicine.', steps: ['(a) **Form utility**.', '(b) **Place utility**.', '(c) **Time utility**.', '(d) **Possession utility**.'] },
  ]),

  L('ec-sectors-3', 'ec-f3-production', '8.2', 'Types of production: the three sectors', 14, ['Production'], [
    'Production is divided into three **sectors**:\n- **primary production**: taking resources from nature: farming, fishing, forestry, hunting, mining and oil drilling (cocoa farms, timber in the East, oil off the coast)\n- **secondary production**: turning raw materials into finished goods (**manufacturing**) and building (**construction**): breweries, soap factories, cement works, sawmills, road building\n- **tertiary production**: providing **services**.',
    'The tertiary sector has two parts:\n- **commercial services**: trade (wholesale and retail) and the **aids to trade**: transport, banking, insurance, advertising, warehousing and communication\n- **direct (personal) services**: services given directly to people: teachers, doctors, lawyers, barbers, the police and the army.',
    'The three sectors depend on each other. Cocoa grown by a farmer (primary) is carried and sold by buyers (tertiary), processed into cocoa butter and chocolate in a factory (secondary), and sold to consumers in shops (tertiary). This sequence is the **chain of production**. In Cameroon, the primary and tertiary sectors employ most workers; the government aims to grow the secondary sector so that more raw materials are processed at home.',
  ], 'econ3-sectors', 'Primary takes from nature, secondary makes, tertiary serves.',
  ['A sawmill that turns logs into planks belongs to the:', ['secondary sector', 'primary sector', 'tertiary sector', 'public sector only'], 'It manufactures.'],
  [['Primary production', 'Taking resources from nature: farming, fishing, mining, forestry.'], ['Secondary production', 'Manufacturing and construction.'], ['Tertiary production', 'The provision of services.'], ['Aids to trade', 'Services that help trade: transport, banking, insurance, advertising, warehousing, communication.'], ['Chain of production', 'The stages a good passes through from raw material to consumer.']],
  [
    { q: 'Trace a pair of wooden chairs from the forest to a home, naming the sector of each stage.', steps: ['A logger fells a tree in the forest: **primary**.', 'A sawmill cuts the log into planks: **secondary**.', 'A carpenter makes the chairs: **secondary**.', 'A lorry carries them to a furniture shop, which sells them: **tertiary** (transport and retail).'] },
  ]),

  // ---------- 9. Land ----------
  L('ec-landfeatures-3', 'ec-f3-land', '9.1', 'Land: meaning and characteristics', 12, ['Factors of production'], [
    'The **factors of production** are the resources used to produce goods and services: **land**, **labour**, **capital** and **enterprise**. In economics, **land** means all **natural resources**: the earth’s surface, the soil, forests, rivers and lakes, the sea and its fish, minerals, oil and gas, and the climate.',
    'Characteristics of land:\n- it is a **free gift of nature**: no one produced it\n- its total supply is **fixed**: people can improve land but cannot make more of the earth’s surface\n- it is **geographically immobile**: it cannot be moved\n- it is **occupationally mobile**: a plot can change use, from farming to housing or a factory site\n- it **varies in quality**: fertility, minerals and location differ from place to place\n- it is subject to **diminishing returns** when more and more labour is used on a fixed area.',
    'Cameroon is rich in land resources: the fertile volcanic soils of the South West and West, the forests of the South and East, oil and gas off the coast, bauxite in the Adamawa, the fish of the sea and of Lake Chad, and rivers such as the Sanaga that drive hydroelectric dams.',
  ], 'econ3-land', 'Land = all gifts of nature. Fixed in total, it cannot be moved, but it can change use.',
  ['Which of these is NOT land in economics?', ['a timber lorry', 'a forest', 'an oil deposit', 'a lake'], 'A lorry is man-made: capital.'],
  [['Factors of production', 'Land, labour, capital and enterprise.'], ['Land', 'All natural resources used in production.'], ['Fixed supply', 'A total amount that cannot be increased.'], ['Fertility', 'The ability of soil to produce crops.']],
  [
    { q: 'A council turns a plot of farmland in Mbalmayo into a market. Explain which characteristics of land this shows.', steps: ['The plot did not move, because land is **geographically immobile**.', '**It changed from farming to trade, which shows that land is occupationally mobile.**', 'The town cannot create new land for both, which shows that land is **fixed in supply**: the market’s opportunity cost is the farm output lost.'] },
  ]),

  L('ec-rent-3', 'ec-f3-land', '9.2', 'The reward for land: rent', 13, ['Factors of production', 'Graphs'], [
    'The reward paid for the use of land is **rent**. A farmer who rents a plot, a trader who rents a market stall and a firm that rents a factory site all pay rent to the owner. In everyday speech, "rent" also covers payment for buildings; in economics, the reward for the **land itself** is rent.',
    'Why rent differs from plot to plot:\n- **fertility**: fertile land produces more, so farmers will pay more for it\n- **location**: land near roads, towns and markets saves transport costs and attracts customers, so it earns more\n- **demand**: in fast-growing towns many people want land, so rents rise\n- **use**: land for shops and offices usually earns more than land for farming.',
    'In Cameroon, land may belong to the state, to private owners or to communities under custom. A **land certificate** (titre foncier) is the legal proof of ownership; land without one is harder to sell or use as security for a loan, which matters to entrepreneurs who need capital.',
  ], 'econ3-rent', 'Rent rewards land; good soil and a good location earn more.',
  ['Why does a shop plot in a town centre earn more rent than a farm plot in a village?', ['its location brings many customers', 'it is more fertile', 'it is man-made', 'it is fixed in supply while farmland is not'], 'Location raises rent.'],
  [['Rent', 'The reward for the use of land.'], ['Location', 'Where a piece of land is, compared with roads, towns and markets.'], ['Land certificate', 'The legal document proving ownership of land in Cameroon (titre foncier).'], ['Security (collateral)', 'Property pledged to a lender to guarantee a loan.']],
  [
    { q: 'In the example chart, plot A (poor soil, far from a road) rents for 40,000 FCFA a year, plot B (fertile, far from a road) for 90,000 FCFA and plot C (fertile, beside a road near town) for 160,000 FCFA. How much extra rent comes from fertility, and how much from location?', steps: ['Fertility: B − A = 90,000 − 40,000 = **50,000 FCFA** (both are far from a road).', 'Location: C − B = 160,000 − 90,000 = **70,000 FCFA** (both are fertile).', '**Here location adds more to rent than fertility does.**'] },
  ]),

  // ---------- 10. Labour ----------
  L('ec-labourkinds-3', 'ec-f3-labour', '10.1', 'Labour: meaning, kinds and efficiency', 13, ['Factors of production'], [
    '**Labour** is human effort, physical or mental, used in production in return for a reward. Its reward is **wages** (paid by the day, week or piece) or **salaries** (paid monthly). Work done for no reward, such as helping a friend for free, is not counted as labour in economics.',
    'Kinds of labour:\n- **skilled labour**: needs long training (doctors, engineers, accountants)\n- **semi-skilled labour**: needs some training (machine operators, drivers)\n- **unskilled labour**: needs little training (carriers, cleaners)\nLabour may also be **manual** (mainly physical) or **mental** (mainly brain work), though most jobs use both.',
    'The **efficiency of labour** is the amount of good-quality output a worker produces in a given time. It depends on:\n- **education and training**\n- **health and nutrition**\n- the **tools and machines** available\n- **working conditions**: safety, light, hours, rest\n- **wages and motivation**: well-paid, respected workers try harder\n- **good management** and organisation\n- the **climate** and the worker’s natural ability.',
  ], 'econ3-labour', 'Labour earns wages; training, health, tools and motivation make it efficient.',
  ['A carpenter given an electric saw instead of a hand saw becomes more efficient because of:', ['better tools', 'longer hours', 'lower wages', 'poorer health'], 'Capital raises the productivity of labour.'],
  [['Labour', 'Human effort used in production for a reward.'], ['Wages', 'The reward for labour, often paid by the day or week.'], ['Salary', 'A fixed reward for labour paid monthly.'], ['Efficiency of labour', 'The output a worker produces in a given time.'], ['Skilled labour', 'Workers with long training.']],
  [
    { q: 'Before training, a tailor sews 4 shirts in an 8-hour day; after a training course she sews 6. Calculate her output per hour before and after, and the percentage rise in efficiency.', steps: ['Before: 4 ÷ 8 = **0.5 shirts per hour**.', 'After: 6 ÷ 8 = **0.75 shirts per hour**.', 'Rise: (0.75 − 0.5) ÷ 0.5 × 100 = **50%**: training raised her efficiency by half.'] },
  ]),

  L('ec-laboursupply-3', 'ec-f3-labour', '10.2', 'The supply of labour', 14, ['Factors of production'], [
    'The **supply of labour** is the total number of people able and willing to work, and the hours they offer, at a given wage. The **labour force** (working or active population) is made up of all people of working age who are **employed** or **seeking work**. Children at school, students, the retired, the sick and those who choose not to work are outside it.',
    'The supply of labour depends on:\n- the **size of the population**: Cameroon’s population is estimated at close to 29 million\n- the **age structure**: a young population means many dependants now and many workers later\n- the **school-leaving and retirement ages**: longer schooling delays entry to work\n- the **number of hours** worked: Cameroon’s Labour Code sets a normal week of 40 hours in most jobs outside farming\n- the **wage rate**: higher wages usually attract more workers\n- **attitudes**, for example to women working outside the home\n- **migration** into or out of the country\n- **health**: illness reduces the number able to work.',
    'The Labour Code also forbids employing children under 14, which protects their schooling and health. A country with a large, healthy, educated labour force can produce more, if jobs are created for it.',
  ], 'econ3-laboursupply', 'Labour force = employed + those seeking work.',
  ['A rise in the school-leaving age, with all else unchanged, will:', ['reduce the supply of labour for a time', 'increase the supply of labour at once', 'have no effect', 'raise the number of retired people'], 'Young people start work later.'],
  [['Supply of labour', 'The number of people able and willing to work, and the hours offered, at a given wage.'], ['Labour force', 'People of working age who are employed or seeking work.'], ['Working age', 'The ages between leaving school and retiring.'], ['Dependant', 'A person, such as a child or a retired person, supported by those who work.']],
  [
    { q: 'A town has 50,000 people. 20,000 are children or students, 3,000 are retired, 2,000 are sick or caring for family and do not seek work, 22,000 have jobs and the rest are seeking work. Find the labour force and the number unemployed.', steps: ['Not in the labour force: 20,000 + 3,000 + 2,000 = 25,000.', 'Labour force: 50,000 − 25,000 = **25,000**.', 'Unemployed: 25,000 − 22,000 = **3,000 people seeking work**.'] },
  ]),
];
