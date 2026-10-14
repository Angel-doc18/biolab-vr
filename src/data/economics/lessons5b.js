// Economics lessons for Form 5, terms 2 and 3: the balance of payments and
// protection, regional integration (CEMAC, ECOWAS, AfCFTA), and the GCE
// drills, the mock and remediation. Original text written for this app.

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
  // ---------- Balance of payments ----------
  L('ec-bop-5', 'ec-f5-bop', '9.1', 'The structure of the balance of payments', 16, ['International trade', 'Calculation'], [
    'The **balance of payments** (BOP) records all economic transactions between residents of a country and the rest of the world in a year. Its accounts:\n- the **current account**: trade in **goods** (the visible balance or **balance of trade**), trade in **services** (invisibles: transport, tourism, insurance), **primary income** (wages, interest, profits paid across borders) and **secondary income** (transfers such as remittances and aid)\n- the **capital account**: capital transfers such as debt forgiveness\n- the **financial account**: foreign direct investment, portfolio investment, loans and changes in reserves.',
    'Because every transaction is recorded twice, the overall BOP always **balances** (with an item for errors and omissions). When people speak of a **deficit** or **surplus**, they usually mean the **current account**.',
    'Correcting a current account deficit: **expenditure-reducing** policies (lower demand, so fewer imports) and **expenditure-switching** policies (tariffs, or a lower exchange rate that makes exports cheaper). The CFA franc zone devalued its currency by half against the French franc in January 1994; today the parity with the euro is fixed, so CEMAC countries rely more on other measures.',
  ], 'econ-bop', 'Current account = goods + services + primary income + secondary income.',
  ['Remittances sent home by Cameroonians abroad are recorded in the:', ['current account, as secondary income', 'capital account', 'balance of trade', 'national budget only'], 'They are current transfers.'],
  [['Balance of payments', 'The record of all transactions between a country and the rest of the world.'], ['Current account', 'The account of trade in goods and services and income flows.'], ['Balance of trade', 'Exports of goods minus imports of goods.'], ['Expenditure switching', 'Policies that shift spending from imports to home-produced goods.']],
  [
    { q: 'Data (billion FCFA): exports of goods 2,800; imports of goods 3,100; services exports 600; services imports 900; primary income +50; secondary income +250. Calculate the balance of trade and the current account balance.', steps: ['Balance of trade = 2,800 − 3,100 = **−300.**', 'Services balance = 600 − 900 = −300.', 'Current account = −300 − 300 + 50 + 250 = **−300 billion FCFA (a deficit).**'] },
  ]),

  L('ec-protection-5', 'ec-f5-bop', '9.2', 'Free trade and protectionism', 15, ['International trade'], [
    '**Free trade** means trade without barriers. **Protectionism** means restricting imports to protect home producers. Methods:\n- **tariffs**: taxes on imports that raise their price\n- **quotas**: limits on the quantity of imports\n- **subsidies** to home producers or exporters\n- **embargoes**: complete bans on trade in a good or with a country\n- exchange controls and administrative barriers (licences, strict standards).',
    'Arguments for protection: to protect **infant industries** until they can compete; to protect **jobs**; to raise government **revenue**; to protect **strategic** industries (food, defence); to prevent **dumping** (selling abroad below cost); and to reduce a balance of payments deficit.',
    'Arguments against: **higher prices** and less choice for consumers; **retaliation** by other countries; protected firms may stay **inefficient**; and the world loses the gains from specialisation and comparative advantage.',
  ], 'econ-protection', 'Tariff: a tax. Quota: a limit. Embargo: a ban.',
  ['A limit on the number of used cars that may be imported each year is a:', ['quota', 'tariff', 'subsidy', 'devaluation'], 'A quantitative limit.'],
  [['Protectionism', 'Restricting imports to protect home industries.'], ['Tariff', 'A tax on imports.'], ['Quota', 'A limit on the quantity of imports.'], ['Dumping', 'Selling exports abroad below cost or below the home price.']],
  [
    { q: 'Discuss whether Cameroon should protect its young poultry industry with tariffs on imported frozen chicken.', steps: ['For: **the infant industry argument; protecting jobs of local farmers; reducing imports.**', 'Against: **chicken becomes dearer for consumers; local producers may not become efficient; trading partners may retaliate.**', 'Judgement: **temporary, falling tariffs combined with support to raise local productivity can balance the two sides.**'] },
  ]),

  // ---------- Integration ----------
  L('ec-cemac-5', 'ec-f5-integration', '10.1', 'Economic integration and the CEMAC', 15, ['Economic integration'], [
    '**Economic integration** is cooperation between countries to reduce trade barriers. Stages, from looser to closer:\n- **free trade area**: no tariffs between members\n- **customs union**: free trade plus a **common external tariff**\n- **common market**: plus free movement of labour and capital\n- **economic and monetary union**: plus a common currency and coordinated policies.',
    'The **CEMAC** (Economic and Monetary Community of Central Africa) was set up by a treaty signed in **1994** in N’Djamena, replacing the older UDEAC. Members: **Cameroon, the Central African Republic, Chad, Congo, Equatorial Guinea and Gabon**. Institutions include the **Commission** (Bangui), the **BEAC** (Yaoundé), the Development Bank of Central African States, BDEAC (Brazzaville), a Parliament and a Court of Justice. Members share the **franc CFA**, a common external tariff and convergence criteria, such as inflation of no more than 3% a year.',
    'Gains: a larger market, lower trade barriers, a stable shared currency, joint projects. Obstacles: poor road and rail links between members, similar exports (oil, timber), non-tariff barriers at borders, and uneven application of free movement.',
  ], 'econ-integration', 'Free trade area, customs union, common market, monetary union: each adds a step.',
  ['A customs union differs from a free trade area because it has:', ['a common external tariff', 'no free trade', 'a single government', 'no members'], 'Members charge the same tariffs to outsiders.'],
  [['Economic integration', 'Cooperation between countries to reduce barriers to trade.'], ['Customs union', 'Free trade among members with a common external tariff.'], ['CEMAC', 'Economic and Monetary Community of Central Africa.'], ['Convergence criteria', 'Targets members agree to meet, such as low inflation.']],
  [
    { q: 'Explain two gains and two obstacles of the CEMAC for Cameroon.', steps: ['Gains: **a larger market for Cameroonian goods such as cement and beer; a stable common currency that eases trade among members.**', 'Obstacles: **poor transport links to neighbours; non-tariff barriers and controls at borders.**'] },
  ]),

  L('ec-afcfta-5', 'ec-f5-integration', '10.2', 'ECOWAS and the African Continental Free Trade Area', 15, ['Economic integration'], [
    '**ECOWAS** (Economic Community of West African States) was founded in **1975** by the Treaty of **Lagos**, with headquarters in **Abuja**. It promotes trade, free movement of people and regional peace. In 2025, Mali, Burkina Faso and Niger left the community, leaving twelve members. Cameroon is not a member; it belongs to the CEMAC and the wider ECCAS.',
    'The **African Continental Free Trade Area** (AfCFTA) agreement was signed in **Kigali** in March **2018**, entered into force in 2019, and trading under it began on 1 January **2021**. Its secretariat is in **Accra**. It aims to create a single continental market by removing most tariffs on goods between member states, liberalising trade in services and supporting industrialisation across a market of more than a billion people.',
    'Obstacles to African integration: poor **infrastructure**, similar exports of raw materials, **non-tariff barriers** (delays, checkpoints, paperwork), political instability, fear of losing customs revenue, and overlapping memberships of several blocs.',
  ], 'econ-integration', 'CEMAC for Central Africa, ECOWAS for West Africa, AfCFTA for the whole continent.',
  ['The AfCFTA agreement was signed in:', ['Kigali in 2018', 'Lagos in 1975', 'N’Djamena in 1994', 'Addis Ababa in 1963'], 'Trading began in 2021.'],
  [['ECOWAS', 'Economic Community of West African States (1975).'], ['AfCFTA', 'African Continental Free Trade Area.'], ['Non-tariff barrier', 'An obstacle to trade other than a tariff, such as delays or licences.']],
  [
    { q: 'How could the AfCFTA benefit a Cameroonian food-processing firm, and what could hold it back?', steps: ['Benefits: **lower tariffs open markets across Africa; larger sales allow economies of scale.**', 'Obstacles: **poor roads and ports raise transport costs; border delays and paperwork; competition from larger firms in other countries.**'] },
  ]),

  // ---------- Paper 1 ----------
  L('ec-mcq-5', 'ec-f5-paper1', '11.1', 'Paper 1 strategy and shortcuts', 14, ['Exam skills'], [
    'Paper 1 lasts **1½ hours**. Strategy:\n- read the whole stem, predict the answer, then check the options\n- **eliminate** clearly wrong options\n- watch for **NOT** and **EXCEPT**\n- for graph items, identify the axes and whether a curve **shifts** or there is a **movement**\n- never leave a question blank.',
    'Fast shortcuts:\n- **total revenue test**: if a price rise raises revenue, demand is inelastic; if it lowers revenue, demand is elastic\n- **combined shifts**: demand up and supply down: price rises for certain; both up: quantity rises for certain\n- **percentage change**: change ÷ original × 100\n- **injections and withdrawals**: I, G, X in; S, T, M out.',
    'Practise in timed sets: about one and a half minutes per question leaves time to check.',
  ], 'econ-graph-reading', 'Use the revenue test to classify elasticity in seconds.',
  ['A price cut raises total revenue. Demand is:', ['elastic', 'inelastic', 'unitary', 'perfectly inelastic'], 'Quantity rose proportionately more than price fell.'],
  [['Total revenue test', 'Using the change in revenue after a price change to tell elasticity.'], ['Stem', 'The question part of a multiple-choice item.']],
  [
    { q: 'Answer: "Which of the following would NOT shift the demand curve for bread? (A) a rise in incomes (B) a fall in the price of bread (C) a rise in the price of rice (D) a successful advertising campaign"', steps: ['A change in the good’s own price causes a movement along the curve, not a shift.', '**(B) a fall in the price of bread.**'] },
  ]),

  L('ec-graphs-5', 'ec-f5-paper1', '11.2', 'Reading economic graphs', 15, ['Graphs', 'Revision'], [
    'Graphs you must read and draw:\n- the **PPC**: points on, inside and outside; shifts\n- **demand** and **supply** curves, **equilibrium**, and **shifts** left or right\n- **price controls**: a maximum price below equilibrium, a minimum price above it\n- **elasticity**: a steep curve is relatively inelastic, a flat curve relatively elastic; vertical is perfectly inelastic, horizontal perfectly elastic.',
    'Rules for drawing: a **title**; **labelled axes** (price on the vertical axis, quantity on the horizontal); **labelled curves** (D, S, D1, D2); the **equilibrium** marked with dotted lines to both axes (P1, Q1); arrows to show the direction of shifts.',
    'In an exam, a small, neat, correctly labelled diagram explained in the text earns marks; an unlabelled diagram earns little.',
  ], 'econ-graph-reading', 'Title, axes, curves, equilibrium, arrows: label everything.',
  ['On a supply and demand diagram, a new demand curve to the right of the old one shows:', ['an increase in demand', 'a decrease in demand', 'a movement along the curve', 'a fall in supply'], 'More is demanded at every price.'],
  [['Shift', 'A movement of the whole curve to a new position.'], ['Perfectly elastic', 'A horizontal curve: any price rise loses all sales.'], ['Perfectly inelastic', 'A vertical curve: quantity does not respond to price.']],
  [
    { q: 'Describe how to show on a diagram the effect of a drought on the market for maize.', steps: ['Draw D and S with equilibrium P1, Q1.', 'Drought reduces supply: draw S2 to the left of S1, with an arrow.', '**Mark the new equilibrium P2, Q2: price rises and quantity falls.**'] },
  ]),

  // ---------- Paper 2 ----------
  L('ec-dataresponse-5', 'ec-f5-paper2', '12.1', 'Section A: the data-response question', 16, ['Data response', 'Exam skills'], [
    'In the scheme’s Paper 2, Section A is a **compulsory data-response** exercise: a table, graph or short passage, followed by questions that ask you to **identify**, **calculate**, **explain** and **suggest**.',
    'Method:\n- read the title, units, years and source\n- answer each part separately, giving the number of points the marks suggest\n- for calculations: formula, working, answer with units\n- for explanations: use the data **and** economic theory\n- quote figures from the data to support every claim.',
    'Typical data: national income tables (GDP, population, per capita income), tax records (direct and indirect taxes), price and quantity schedules for elasticity, and balance of payments figures.',
  ], 'econ-data-response', 'Quote the data, show the working, explain with theory.',
  ['In a data-response question, an explanation should use:', ['figures from the data and economic theory', 'only your opinion', 'only definitions', 'figures you invent'], 'Data plus theory.'],
  [['Data-response question', 'A question that tests the use of economic data.'], ['Interpretation', 'Explaining what data show.']],
  [
    { q: 'Data: GDP 18,000 billion FCFA in 2023 and 19,260 billion in 2024; population 28 million and 28.7 million. (a) Calculate GDP growth. (b) Calculate GDP per head in 2024. (c) Did living standards necessarily rise?', steps: ['(a) Growth = (19,260 − 18,000) ÷ 18,000 × 100 = **7%.**', '(b) Per head = 19,260,000,000,000 ÷ 28,700,000 ≈ **671,000 FCFA.**', '(c) **Not necessarily: GDP per head rose (from about 643,000 FCFA), but the figures do not show inflation, the distribution of income, or quality of life.**'] },
  ]),

  L('ec-essays-5', 'ec-f5-paper2', '12.2', 'Section B: structuring economics essays', 15, ['Essay skills'], [
    'A good economics essay:\n- **defines** the key terms of the question (inflation, tariff, comparative advantage)\n- **explains** the points one per paragraph, using economic theory\n- uses **diagrams** where helpful, labelled and referred to in the text\n- **applies** the points to Cameroon or Africa with real examples\n- **evaluates** where the question asks ("discuss", "assess", "to what extent")\n- **concludes** with a clear answer.',
    'Instruction words: "explain" (give reasons), "describe" (give features), "discuss" (consider several sides), "distinguish" (show differences), "evaluate" or "assess" (judge).',
    'Divide your time by the marks. A 12-mark part needs about three developed points; a 4-mark part needs about two short ones.',
  ], 'econ-data-response', 'Define, explain, diagram, apply, evaluate, conclude.',
  ['"Distinguish between direct and indirect taxes" asks you to:', ['show clearly how they differ', 'list all taxes in the world', 'give only one definition', 'draw a supply curve'], 'Differences, with examples.'],
  [['Discuss', 'Consider arguments on more than one side and conclude.'], ['Distinguish', 'Show how two things differ.'], ['Apply', 'Use theory to explain a real situation.']],
  [
    { q: 'Plan an answer to "Discuss the causes and effects of inflation in Cameroon."', steps: ['Introduction: **define inflation and its measurement by the CPI.**', 'Causes: **demand-pull (credit growth, government spending) and cost-push (imported fuel and food, transport costs), with examples.**', 'Effects: **losses for fixed-income earners and savers, gains for borrowers, weaker export competitiveness.**', 'Conclusion: **mainly cost-push in recent years, so supply-side measures and BEAC policy both matter.**'] },
  ]),

  // ---------- Mock and remediation ----------
  L('ec-mock-5', 'ec-f5-mock', '13.1', 'Sitting the mock examination', 13, ['Exam skills'], [
    'The mock is a full rehearsal: Paper 1 (1½ hours) and Paper 2 (2½ hours) under official conditions, with no notes.',
    'For Paper 2, start with the **compulsory data-response** question while you are fresh, then the essays. Share the remaining time according to the number of essays and their marks, keeping a few minutes to check calculations and labels.',
    'Bring a calculator if it is permitted, a ruler for diagrams and spare pens. Show all working: method marks can be earned even if the final answer is wrong.',
  ], 'econ-final-term', 'Data response first, then essays; label every diagram.',
  ['Why should you show working in calculations?', ['method marks can be earned even if the final answer is wrong', 'it wastes time', 'examiners dislike it', 'it is forbidden'], 'Working shows the method.'],
  [['Method marks', 'Marks given for correct working even if the final answer is wrong.']],
  [
    { q: 'Make a plan for Paper 2 (2½ hours) with a compulsory data-response question and three essays.', steps: ['Reading the paper: 5 minutes.', 'Data response: about 40 minutes; each essay: about 32 minutes.', '**Final check of calculations, labels and numbering: about 9 minutes.**'] },
  ]),

  L('ec-remediation-5', 'ec-f5-mock', '13.2', 'Post-mock remediation: common mistakes', 15, ['Exam skills', 'Revision'], [
    'The scheme lists the mistakes examiners see most often:\n- **miscalculating the current account**: forgetting services or income flows, or mixing up signs\n- **confusing movements and shifts** on curves: a change in the good’s own price moves along the curve; other factors shift it\n- **defining opportunity cost poorly**: it is the **next best alternative forgone**, not "the cost of an opportunity" or the money price.',
    'Other frequent faults: unlabelled diagrams; definitions learnt word for word but not applied; no Cameroonian examples; evaluation missing in "discuss" questions.',
    'Fixes: practise one current-account calculation and one diagram every day for a week; learn ten key definitions exactly; rewrite your weakest mock answer with the corrections.',
  ], 'econ-final-term', 'Own price: move along. Anything else: shift.',
  ['A student writes "a rise in income causes a movement along the demand curve". The correction is:', ['a rise in income shifts the demand curve', 'a rise in income has no effect', 'income only affects supply', 'it moves the supply curve'], 'Only the good’s own price causes a movement.'],
  [['Remediation', 'Correcting weaknesses found in an examination.'], ['Movement along a curve', 'A change in quantity caused by a change in the good’s own price.']],
  [
    { q: 'Correct this answer: "Opportunity cost is the money paid for a good. If I buy a 2,000 FCFA shirt, the opportunity cost is 2,000 FCFA."', steps: ['Opportunity cost is not the money price.', '**Correct version: "Opportunity cost is the next best alternative forgone. If I spend 2,000 FCFA on a shirt instead of a textbook, the opportunity cost is the textbook."**'] },
  ]),
];
