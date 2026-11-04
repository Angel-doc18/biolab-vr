// A Level Economics lessons (0725), Upper Sixth, Terms 2 and 3: comparative
// advantage and the terms of trade, the balance of payments and exchange
// rates (the CFA franc), protection and integration (CEMAC, ECCAS, AfCFTA),
// unemployment and the Phillips curve, population, growth and development,
// development strategies and Cameroon’s plans, macroeconomic data and essays,
// and the final drills.

const PAPER = { Method: 'All papers', Data: 'Paper 2', MCQ: 'Paper 1' };

const L = (id, unit, n, title, minutes, tags, body, figure, tip, check, terms, examples) => ({
  id,
  unit,
  n,
  title,
  minutes,
  paper: PAPER[tags[0]] || 'All papers',
  tags,
  body,
  figure,
  ...(examples ? { examples } : {}),
  tip,
  check: { q: check[0], a: check[1], why: check[2] },
  terms,
});

export const LESSONS_EU6B = [
  // ---------- 10. Comparative advantage ----------
  L('aec-trade-1', 'aec-u6-trade', '10.1', 'Absolute and comparative advantage', 22, ['Macro'], [
    'A country has an **absolute advantage** in a good if it can produce more of it than another country with the same resources (Adam Smith). It has a **comparative advantage** if it can produce the good at a **lower opportunity cost** (David Ricardo, Principles of Political Economy and Taxation, 1817).',
    'Ricardo’s insight: even if one country has an absolute advantage in **both** goods, both gain if each **specialises** in the good with the lower opportunity cost and trades, provided the **terms of trade** lie between the two countries’ opportunity cost ratios.',
    'Assumptions behind the simple model: two countries and two goods, **constant costs** (straight-line PPCs), no transport costs or trade barriers, factors mobile within but not between countries, and full employment. In reality costs rise as output grows, transport is costly, and specialising in a few primary products exposes a country to price swings.',
    'Comparative advantage changes over time: investment in skills, roads, power and processing can give a country new advantages, for example processing cocoa and timber at home instead of exporting them raw.',
  ], 'aec-comparative', 'Compare opportunity costs, never absolute outputs, to find who should specialise in what.',
  ['A country should specialise in the good in which it has:', ['the lower opportunity cost', 'the higher output per worker', 'the larger market', 'the higher price'], 'Comparative advantage.'],
  [['Absolute advantage', 'The ability to produce more of a good with the same resources than another country.'], ['Comparative advantage', 'The ability to produce a good at a lower opportunity cost than another country.'], ['Specialisation', 'Concentrating production on the goods in which a country has a comparative advantage.']],
  [
    { q: 'With 100 worker-days, country A can make 600 bags of cocoa or 300 metres of cloth; country B can make 200 bags or 200 metres. Who should specialise in what, and at what terms can both gain?', steps: ['A has an **absolute advantage in both goods**.', 'Opportunity cost of 1 bag of cocoa: A gives up **0.5 m of cloth**; B gives up **1 m**. **A has the comparative advantage in cocoa.**', 'Opportunity cost of 1 m of cloth: A gives up **2 bags**; B gives up **1 bag**. **B has the comparative advantage in cloth.**', '**Both gain at any terms between 1 and 2 bags of cocoa per metre of cloth**, for example 1.5 bags per metre.'] },
  ]),
  L('aec-trade-2', 'aec-u6-trade', '10.2', 'The terms of trade', 20, ['Macro'], [
    'The **terms of trade** compare the prices of a country’s exports with the prices of its imports: **terms of trade index = index of export prices ÷ index of import prices × 100**. A rise is called an **improvement** (favourable): each unit of exports buys more imports. A fall is a **deterioration**.',
    'An "improvement" is not always good news: if export prices rise because of higher costs, exports may lose sales; if they fall because of better productivity, exports may grow. The effect on the **balance of trade** depends on the **elasticities** of demand.',
    'Causes of change: world demand and supply for primary products, exchange rate changes, inflation at home and abroad, and productivity.',
    'Raúl Prebisch and Hans Singer (1950) argued that the terms of trade of **primary exporters** tend to deteriorate over the long run, because demand for primary goods grows slowly with world income while demand for manufactures grows fast. Cameroon’s exports are mostly primary (crude oil, liquefied gas, cocoa, timber, cotton, coffee, bananas, aluminium), so its terms of trade swing with world prices: the fall in oil prices from mid-2014 to early 2016 hit export earnings and government revenue hard.',
  ], 'aec-tot', 'Read a terms of trade index like any index: 125 means the ratio of export to import prices has risen 25% since the base year.',
  ['If export prices rise by 10% and import prices by 21%, the terms of trade index (base 100) is about:', ['91', '110', '121', '111'], '110 ÷ 121 × 100.'],
  [['Terms of trade', 'The ratio of an index of export prices to an index of import prices.'], ['Prebisch-Singer thesis', 'The view that primary exporters’ terms of trade tend to fall over time.']],
  [
    { q: 'In 2025 (base 2020 = 100) the export price index is 130 and the import price index is 104. Find the terms of trade and interpret them.', steps: ['ToT = 130 ÷ 104 × 100 = **125**.', '**An improvement of 25% since 2020**: a given volume of exports now pays for 25% more imports.', 'Whether the trade balance improves depends on **what happened to export and import volumes.**'] },
  ]),

  // ---------- 11. Balance of payments ----------
  L('aec-bop-1', 'aec-u6-bop', '11.1', 'The balance of payments accounts', 20, ['Macro'], [
    'The **balance of payments** records all economic transactions between residents of a country and the rest of the world in a year. It has three accounts:\n- the **current account**: trade in **goods** (the visible balance or balance of trade), trade in **services** (transport, insurance, tourism), **primary income** (wages, interest, profits and dividends) and **secondary income** (current transfers, such as remittances and aid for consumption)\n- the **capital account**: capital transfers such as debt forgiveness\n- the **financial account**: direct investment, portfolio investment, loans and changes in **reserve assets**.',
    'Because every transaction is recorded twice, the accounts sum to zero overall; a **net errors and omissions** item covers gaps in the data. "Deficit" and "surplus" therefore refer to a part of the accounts, usually the current account.',
    'A current account deficit means the country is spending more abroad than it earns, financed by borrowing, foreign investment or running down reserves. It can be harmless (imports of machinery financed by long-term investment) or a danger (consumption imports financed by short-term borrowing).',
    'Corrections: **expenditure-switching** policies (devaluation, tariffs, quotas, export subsidies) move spending from imports to home goods; **expenditure-reducing** policies (higher taxes, less government spending, higher interest rates) cut total spending and so imports; **supply-side** policies make exports more competitive in the long run.',
  ], 'aec-bop-accounts', 'Profits paid to foreign owners go in primary income on the current account; the investment itself goes in the financial account.',
  ['Remittances sent home by Cameroonians working abroad are recorded in:', ['secondary income on the current account', 'the financial account', 'the capital account', 'the visible balance'], 'Current transfers.'],
  [['Current account', 'The record of trade in goods and services and of income flows with the rest of the world.'], ['Financial account', 'The record of investment and other financial flows, including changes in reserves.'], ['Expenditure-switching policy', 'A policy that moves spending from imports to domestic goods.']],
  [
    { q: 'Data (billion FCFA): exports of goods 2,500, imports of goods 2,900, net services −500, net primary income −300, net secondary income +250. Find the trade balance and the current account.', steps: ['Balance of trade (goods) = 2,500 − 2,900 = **−400**.', 'Current account = −400 − 500 − 300 + 250 = **−950 billion FCFA**.', 'This deficit must be matched by **net inflows on the financial and capital accounts** or a fall in reserves.'] },
  ]),
  L('aec-bop-2', 'aec-u6-bop', '11.2', 'Exchange rates, devaluation and the CFA franc', 22, ['Macro'], [
    'Under a **floating** exchange rate, the price of a currency is set by the demand for it (from foreigners buying the country’s exports and assets) and its supply (from residents buying imports and foreign assets). Under a **fixed** rate, the central bank holds the rate at a set parity by buying and selling reserves. A **managed float** combines the two.',
    'The **CFA franc of Central Africa** is **fixed to the euro at 655.957 FCFA = 1 euro**, the rate carried over from the French franc when the euro was introduced in 1999. Its convertibility is guaranteed by the French Treasury. On **12 January 1994** the CFA franc was devalued by 50%, from 50 to 100 CFA francs per French franc. A fixed rate gives price stability and certainty for trade and investment, but rules out using the exchange rate to correct imbalances.',
    'A **devaluation** makes exports cheaper in foreign currency and imports dearer at home. It improves the current account only if demand is elastic enough: the **Marshall-Lerner condition** says the **sum of the price elasticities of demand for exports and imports must exceed 1**.',
    'In the short run, elasticities are low, so the current account often **worsens before it improves**: the **J-curve**. A devaluation also raises import prices and can cause cost-push inflation, eroding the competitive gain.',
  ], ['aec-exchange', 'aec-jcurve'], 'Marshall-Lerner: add the two elasticities; above 1, devaluation helps the current account.',
  ['The CFA franc of Central Africa is fixed at:', ['655.957 FCFA to 1 euro', '100 FCFA to 1 euro', '500 FCFA to 1 euro', '1,000 FCFA to 1 euro'], 'Since 1999.'],
  [['Devaluation', 'A cut in the official value of a currency under a fixed exchange rate.'], ['Marshall-Lerner condition', 'A devaluation improves the current account if the sum of export and import price elasticities exceeds 1.'], ['J-curve', 'The worsening and then improvement of the current account after a devaluation.']],
  [
    { q: 'A machine costs 100 euros. What does it cost in FCFA? What would it have cost in French-franc terms before and after January 1994 if it cost 100 French francs?', steps: ['Today: 100 × 655.957 = **65,595.70 FCFA**.', 'Before 1994: 100 × 50 = **5,000 FCFA**; after: 100 × 100 = **10,000 FCFA**.', '**The devaluation doubled the CFA price of French imports overnight.**'] },
    { q: 'The price elasticity of demand for a country’s exports is 0.4 and for its imports 0.3. Will a devaluation improve its current account?', steps: ['Sum = 0.4 + 0.3 = **0.7**, below 1.', '**No: the Marshall-Lerner condition fails, so the current account would worsen**, at least until elasticities rise over time.'] },
  ]),

  // ---------- 12. Protection and integration ----------
  L('aec-protection-1', 'aec-u6-protection', '12.1', 'Tariffs, quotas and the case for and against protection', 22, ['Macro'], [
    'Methods of **protection**: **tariffs** (taxes on imports, specific or ad valorem); **quotas** (limits on the quantity imported); **subsidies** to domestic producers or exporters; **exchange controls**; and non-tariff barriers such as licences, strict standards and slow customs procedures.',
    'A tariff raises the domestic price above the world price. Domestic producers expand, consumers buy less, **imports fall**, and the government collects **revenue** on the remaining imports. There are two **deadweight losses**: resources wasted producing at home what could be imported more cheaply, and consumption lost to buyers.',
    'Arguments for protection: **infant industries** need time to reach economies of scale; protecting **strategic** industries (food, energy, defence); preventing **dumping**; protecting jobs in declining regions; raising **revenue** where other taxes are hard to collect; correcting a balance of payments deficit; and diversifying away from a few primary exports.',
    'Arguments against: it raises **prices** and reduces choice for consumers; it protects **inefficiency**; other countries may **retaliate**; it reduces the gains from specialisation; and it can be captured by firms seeking favours. Under the **World Trade Organization** (founded 1995, successor to the GATT of 1947) members agree to reduce barriers.',
  ], 'aec-tariff', 'On the tariff diagram, the consumer loss = producer gain + tariff revenue + the two deadweight triangles.',
  ['The infant industry argument supports protection:', ['for a limited time until a new industry can compete', 'forever', 'for declining industries only', 'only against dumping'], 'It must be temporary to be convincing.'],
  [['Tariff', 'A tax on imports.'], ['Quota', 'A limit on the quantity of a good that may be imported.'], ['Dumping', 'Selling exports abroad below cost or below the home price.']],
  [
    { q: 'Domestic demand is P = 100 − Q and domestic supply is P = Q. The world price is 20; a tariff of 10 is imposed. Find the effects.', steps: ['Before: home supply **20**, demand **80**, imports **60**.', 'After (price 30): home supply **30**, demand **70**, imports **40**.', 'Tariff revenue = 10 × 40 = **400**; producer surplus gains ½ × (20 + 30) × 10 = **250**; consumer surplus falls ½ × (80 + 70) × 10 = **750**.', 'Deadweight losses: production ½ × 10 × 10 = **50**; consumption ½ × 10 × 10 = **50**. Check: 750 = 250 + 400 + 50 + 50.'] },
  ]),
  L('aec-protection-2', 'aec-u6-protection', '12.2', 'Economic integration: CEMAC, ECCAS and the AfCFTA', 22, ['Macro'], [
    'Bela Balassa (1961) described **stages of integration**:\n- **free trade area**: no tariffs between members, each keeps its own external tariff\n- **customs union**: adds a **common external tariff**\n- **common market**: adds free movement of **labour and capital**\n- **economic union**: adds common economic policies\n- **monetary union**: adds a **single currency** and central bank.',
    'Jacob Viner (1950) showed that a customs union can cause **trade creation** (dearer home production replaced by cheaper imports from a member: a gain) or **trade diversion** (cheaper imports from outside replaced by dearer imports from a member, because only outsiders pay the tariff: a loss). A union is beneficial if creation outweighs diversion.',
    'Cameroon belongs to:\n- **CEMAC**, the Economic and Monetary Community of Central Africa, set up by the treaty of N’Djamena in **1994** to replace UDEAC (1964): a customs union with a common external tariff and a **monetary union** with the BEAC and the CFA franc\n- **ECCAS** (CEEAC), the Economic Community of Central African States, founded in 1983, with eleven members\n- the **African Continental Free Trade Area** (AfCFTA), agreed in Kigali in 2018, with trading under it beginning in **January 2021**.',
    'Benefits: bigger markets and economies of scale, more competition, more investment, and a stronger voice in trade talks. Problems in Central Africa: poor roads and rail links, similar primary exports (members have little to sell each other), slow border procedures, and the loss of tariff revenue.',
  ], 'aec-integration-stages', 'Trade creation moves buying to a cheaper source; trade diversion moves it to a dearer one.',
  ['A common market adds to a customs union:', ['free movement of labour and capital', 'a common external tariff', 'a single currency', 'free trade in goods'], 'Factors move freely.'],
  [['Customs union', 'A free trade area with a common external tariff.'], ['Trade creation', 'A shift from dearer domestic production to cheaper imports from a partner.'], ['Trade diversion', 'A shift from cheaper imports from outside to dearer imports from a partner.']],
  [
    { q: 'Before a customs union, Cameroon imports cloth from Asia at 100 FCFA plus a 30% tariff. A partner country can supply it at 120. After the union, the partner pays no tariff and Asia still pays 30%. What happens?', steps: ['Before: Asian cloth costs buyers **130** (100 + 30 tariff); the state collects **30** a unit.', 'After: partner cloth at **120** is now cheapest for buyers, so imports switch to the partner.', 'Buyers save 10 a unit, but the state loses 30 of revenue, and the real cost of the cloth rises from **100 to 120**.', '**This is trade diversion: a loss of 20 a unit for the country as a whole.**'] },
  ]),

  // ---------- 13. Unemployment ----------
  L('aec-unemployment-1', 'aec-u6-unemployment', '13.1', 'Measuring unemployment and its types', 20, ['Macro'], [
    'By the ILO definition, a person is **unemployed** if without work, available to work and actively seeking work. The **labour force** = employed + unemployed. **Unemployment rate = unemployed ÷ labour force × 100**. The **participation rate** = labour force ÷ working-age population × 100.',
    'In Cameroon, as in many developing countries, open unemployment understates the problem: **underemployment** (working fewer hours than wanted, or in jobs well below one’s skills) is widespread in the informal sector, and graduate unemployment is a particular concern.',
    'Types and remedies:\n- **frictional**: between jobs; remedy: better job information\n- **structural**: skills or location do not match the jobs (decline of an industry, new technology); remedy: retraining, mobility, education matched to the economy\n- **seasonal**: farming, tourism, building; remedy: diversification\n- **cyclical** or demand-deficient: a fall in aggregate demand; remedy: expansionary fiscal and monetary policy\n- **classical** or real-wage: wages held above equilibrium; remedy: wage flexibility.',
    'Costs of unemployment: lost output (the economy inside its PPC), lost tax revenue and higher spending, poverty, loss of skills, crime and social unrest, and emigration of the young.',
  ], 'aec-unemp-types', 'Diagnose the type first: the remedy for cyclical unemployment does nothing for structural unemployment.',
  ['Unemployment caused by a mismatch between skills and available jobs is:', ['structural', 'frictional', 'cyclical', 'seasonal'], 'Retraining is the remedy.'],
  [['Labour force', 'People in work plus those unemployed and seeking work.'], ['Underemployment', 'Working fewer hours than wanted, or in work below one’s skills.'], ['Structural unemployment', 'Unemployment caused by a mismatch between workers and jobs.']],
  [
    { q: 'A country has 16 million people of working age; 11 million are in the labour force, of whom 10.2 million are employed. Find the unemployment and participation rates.', steps: ['Unemployed = 11 − 10.2 = **0.8 million**.', 'Unemployment rate = 0.8 ÷ 11 × 100 = **7.3%**.', 'Participation rate = 11 ÷ 16 × 100 = **68.75%**.'] },
  ]),
  L('aec-unemployment-2', 'aec-u6-unemployment', '13.2', 'The Phillips curve and the inflation-unemployment trade-off', 22, ['Macro'], [
    'In **1958** A. W. Phillips, using British data from 1861 to 1957, found an **inverse relationship** between the unemployment rate and the rate of change of money wages: when unemployment was low, wages rose fast. His data suggested wages would be stable at about 5½% unemployment.',
    'Policymakers read the curve as a **menu**: lower unemployment could be bought with higher inflation. In the 1970s, however, many countries had high inflation **and** high unemployment at the same time: **stagflation**.',
    'Milton Friedman and Edmund Phelps (late 1960s) explained why: the short-run curve depends on **expected inflation**. If the government pushes unemployment below its **natural rate**, inflation rises; workers then expect higher inflation and demand higher wages; the short-run curve shifts up and unemployment returns to the natural rate with higher inflation. In the **long run the Phillips curve is vertical** at the natural rate (the NAIRU, the non-accelerating inflation rate of unemployment).',
    'Policy lessons: demand policies can reduce unemployment only temporarily; lasting cuts in the natural rate need **supply-side** policies (skills, information, labour mobility, competition). Credible low-inflation policy, such as the BEAC’s, keeps expectations anchored.',
  ], 'aec-phillips', 'Short run: a trade-off. Long run: no trade-off, only a choice of inflation rate at the natural rate of unemployment.',
  ['According to Friedman and Phelps, the long-run Phillips curve is:', ['vertical at the natural rate of unemployment', 'downward sloping', 'horizontal', 'upward sloping'], 'Expectations adjust.'],
  [['Phillips curve', 'A curve showing an inverse relation between unemployment and inflation.'], ['Natural rate of unemployment', 'The rate at which inflation is stable, set by supply-side factors.'], ['Stagflation', 'High inflation combined with high unemployment and slow growth.']],
  [
    { q: 'Start at A: unemployment at its natural rate of 5% with 0% inflation. The government expands demand and unemployment falls to 2.5% with inflation of 4% (point B). Trace what happens next.', steps: ['At B, workers find prices rising **4%** and build that into wage claims.', 'The short-run curve **shifts up** by the expected inflation.', 'Firms’ real costs rise, so they cut jobs: unemployment returns to **5% with 4% inflation (point C)**.', '**Result: no lasting fall in unemployment, but permanently higher inflation.**'] },
  ]),

  // ---------- 14. Population ----------
  L('aec-population-1', 'aec-u6-population', '14.1', 'Malthus, the optimum population and population growth', 20, ['Macro'], [
    'Thomas Malthus, in his **Essay on the Principle of Population** (1798), argued that population tends to grow **geometrically** (1, 2, 4, 8 ...) while food output grows **arithmetically** (1, 2, 3, 4 ...), so population would be held down by "positive checks" (famine, disease, war) unless "preventive checks" (later marriage) slowed births. He did not foresee the huge rise in farm productivity and the spread of birth control.',
    'Ester Boserup (1965) argued the opposite: population pressure **drives** farmers to adopt more intensive techniques, so output can keep pace.',
    'The **optimum population** is the size at which **output per head is greatest**, given resources and technology. Below it the country is **under-populated** (more people would allow more specialisation); above it, **over-populated** (diminishing returns lower output per head). The optimum rises when technology or capital improves.',
    'The **natural rate of increase** = birth rate − death rate (per thousand). Net migration adds to or subtracts from it. A useful rule: a population growing at r% a year **doubles in about 70 ÷ r years**.',
  ], 'aec-optimum', 'Over-population is judged against resources and technology, not by the number of people alone.',
  ['The optimum population is the size at which:', ['output per head is at its maximum', 'total output is at its maximum', 'the birth rate equals zero', 'everyone is employed'], 'Given resources and technology.'],
  [['Optimum population', 'The population size that gives the highest output per head with given resources and technology.'], ['Natural increase', 'The birth rate minus the death rate.']],
  [
    { q: 'The birth rate is 35 per thousand and the death rate 9 per thousand, with no net migration. Find the growth rate and the doubling time.', steps: ['Natural increase = 35 − 9 = **26 per thousand = 2.6% a year**.', 'Doubling time ≈ 70 ÷ 2.6 ≈ **27 years**.', '**To raise income per head, output must grow faster than 2.6% a year.**'] },
  ]),
  L('aec-population-2', 'aec-u6-population', '14.2', 'Population structure, dependency and migration', 20, ['Macro'], [
    'The **demographic transition model** traces the fall of death rates and then birth rates as countries develop: stage 1 high and stable; stage 2 falling death rates and rapid growth; stage 3 falling birth rates; stage 4 low rates and slow growth; stage 5 possible decline. Cameroon’s high birth rate and falling death rate place it in the late second or early third stage.',
    'The **age structure** matters for the economy. The **dependency ratio** = (people aged 0 to 14 + people aged 65 and over) ÷ people aged 15 to 64 × 100. A high youth dependency means heavy spending on schools and health and low saving per household. As birth rates fall, the working-age share rises: a possible **demographic dividend**, if the young are educated and find productive jobs.',
    '**Rural-urban migration** is driven by push factors (poverty, lack of land and services, insecurity) and pull factors (jobs, schools, hospitals, the bright lights). It supplies labour to towns but brings slums, congestion and urban unemployment, and leaves rural areas with older populations.',
    'International migration: **remittances** support families and the balance of payments, but the emigration of doctors, nurses, engineers and teachers, the **brain drain**, removes scarce human capital.',
  ], 'aec-dtm', 'A falling birth rate first lowers the dependency ratio: that is the window for the demographic dividend.',
  ['The dependency ratio compares:', ['the young and old with the working-age population', 'urban and rural populations', 'men and women', 'employed and unemployed'], 'Dependants per 100 people of working age.'],
  [['Dependency ratio', 'The number of people aged under 15 and over 64 per 100 people aged 15 to 64.'], ['Demographic dividend', 'Faster growth possible when the working-age share of the population rises.'], ['Brain drain', 'The emigration of skilled and educated workers.']],
  [
    { q: 'In an illustrative population, 42% are aged 0 to 14, 55% are 15 to 64 and 3% are 65 or over. Find the dependency ratio.', steps: ['Dependants = 42 + 3 = **45%**.', 'Ratio = 45 ÷ 55 × 100 = **82 dependants per 100 people of working age**.', 'Most dependants are children, so **education and health spending** dominate.'] },
  ]),

  // ---------- 15. Growth and development ----------
  L('aec-growth-1', 'aec-u6-growth', '15.1', 'Economic growth and its sources', 20, ['Macro'], [
    '**Actual growth** is a rise in real GDP; **potential growth** is a rise in the economy’s productive capacity, an outward shift of the PPC. The gap between actual and potential output is the **output gap**.',
    'Sources of growth: more and better **factors of production** (investment in capital, a larger and healthier, better-educated labour force, new land and minerals), **technology** and innovation, better **infrastructure** (roads, power, ports, telecommunications) and sound **institutions** (property rights, the rule of law, stable policy).',
    'The **Harrod-Domar model** (1939, 1946) makes growth depend on saving and the productivity of capital: **g = s ÷ v**, where s is the savings ratio and v the **capital-output ratio** (capital needed per unit of output). Poor countries have low saving, so the model was used to justify foreign aid and investment to fill the **savings gap**. Its weakness: capital alone is not enough without skills, technology and institutions.',
    'Benefits of growth: higher incomes, more tax revenue for public services, more jobs. Costs: pollution and loss of forests, depletion of resources, wider inequality if the gains go to a few, and urban congestion.',
  ], 'aec-harrod-domar', 'g = s ÷ v: double the saving rate or halve the capital needed per unit of output, and growth doubles.',
  ['In the Harrod-Domar model, a savings ratio of 20% and a capital-output ratio of 4 give growth of:', ['5%', '80%', '24%', '16%'], '20 ÷ 4.'],
  [['Potential growth', 'A rise in the productive capacity of the economy.'], ['Capital-output ratio', 'The amount of capital needed to produce one unit of output a year.'], ['Savings gap', 'The difference between the saving needed for target growth and actual saving.']],
  [
    { q: 'A country saves 20% of GDP, its capital-output ratio is 4, and population grows 2.5% a year. Find growth per head, and the saving rate needed for 7% growth.', steps: ['g = 20 ÷ 4 = **5%** a year.', 'Growth per head ≈ 5 − 2.5 = **2.5%** a year.', 'For g = 7%: s = g × v = 7 × 4 = **28% of GDP**: a savings gap of **8% of GDP**, to be filled from abroad or by higher domestic saving.'] },
  ]),
  L('aec-growth-2', 'aec-u6-growth', '15.2', 'Development and how it is measured', 20, ['Macro'], [
    '**Economic development** is a broad improvement in well-being: higher real incomes, better health and education, less poverty and inequality, wider choice and freedom, and a sustainable environment. Growth is necessary for development but not sufficient.',
    'The **Human Development Index** (HDI), published by the UNDP since 1990, combines three dimensions: a **long and healthy life** (life expectancy at birth), **knowledge** (mean and expected years of schooling) and a **decent standard of living** (GNI per head at PPP). Each is turned into an index from 0 to 1 and the HDI is their **geometric mean**. Countries are grouped as very high, high, medium and low human development; Cameroon is in the medium group.',
    'Other indicators: GNI per head at PPP, the **multidimensional poverty index**, the Gini coefficient, literacy, infant and maternal mortality, access to clean water and electricity.',
    'Common features of developing countries: low income per head, a large **primary sector** and **informal sector**, high population growth and youth dependency, dependence on a few exports, weak infrastructure, and limited access to credit. W. W. Rostow (1960) described growth in stages from the **traditional society** through **take-off** to **high mass consumption**; critics say countries do not follow one path.',
  ], 'aec-hdi', 'HDI is a geometric mean: a very low score in one dimension pulls the whole index down.',
  ['The three dimensions of the HDI are:', ['health, education and standard of living', 'GDP, inflation and unemployment', 'exports, imports and debt', 'population, area and rainfall'], 'Life expectancy, schooling and GNI per head.'],
  [['Economic development', 'A broad improvement in living standards, well-being and choice.'], ['Human Development Index', 'A UNDP index combining life expectancy, education and income per head.'], ['Sustainable development', 'Meeting present needs without harming future generations’ ability to meet theirs.']],
  [
    { q: 'A country’s health index is 0.662, its education index 0.500 and its income index 0.550. Find its HDI.', steps: ['Multiply: 0.662 × 0.500 × 0.550 = **0.182**.', 'Cube root: **HDI ≈ 0.567**.', '**Medium human development**; the low education index pulls it down most.'] },
  ]),

  // ---------- 16. Development strategies ----------
  L('aec-strategy-1', 'aec-u6-strategy', '16.1', 'Import substitution and export-led growth', 20, ['Macro'], [
    '**Import substitution industrialisation** (ISI) protects home industries behind tariffs and quotas so that they replace imported manufactures. Popular in Africa and Latin America in the 1960s and 1970s, it built some industries but often produced **inefficient** firms that never became competitive, high prices for consumers, and shortages of foreign exchange for the inputs they needed.',
    '**Export-led growth** produces for world markets, using comparative advantage and world demand to reach economies of scale. The East Asian economies (South Korea, Taiwan, Singapore, later China) grew fast this way, with heavy investment in education, infrastructure and export processing. Risks: dependence on world demand and trade barriers abroad.',
    '**Agriculture-led** strategies raise farm productivity (seeds, fertiliser, irrigation, roads to markets, credit), since most of the poor work on farms; surpluses then feed towns and industry.',
    'Most successful countries have **combined** strategies: secure food supply, process local raw materials (cocoa into chocolate and butter, timber into furniture, cotton into textiles), and move up the value chain into exports.',
  ], 'aec-strategies', 'Evaluate any strategy by asking where the foreign exchange, the skills and the market will come from.',
  ['The main danger of import substitution is that protected firms:', ['remain inefficient and cannot compete abroad', 'export too much', 'become too efficient', 'pay too much tax'], 'Lack of competition.'],
  [['Import substitution', 'Replacing imported goods with domestic production, usually behind protection.'], ['Export-led growth', 'Growth driven by producing goods for export.'], ['Value chain', 'The stages through which a product gains value, from raw material to final good.']],
  [
    { q: 'Cameroon exports raw cocoa beans. Weigh the case for processing more cocoa at home.', steps: ['For: **more value added, jobs and tax revenue stay at home; export earnings rise per tonne; skills are built.**', 'Against: **processing needs reliable power, capital and skills; markets for processed goods are protected abroad and dominated by large firms.**', 'Judgement: **worth pursuing step by step with better power supply and trade deals, as SND30 proposes.**'] },
  ]),
  L('aec-strategy-2', 'aec-u6-strategy', '16.2', 'Aid, investment, debt and Cameroon’s development plans', 22, ['Macro'], [
    '**Foreign aid** may be bilateral (from one government) or multilateral (World Bank, African Development Bank, EU), grants or concessional loans, and **tied** (to be spent on the donor’s goods) or untied. It can fill savings and foreign-exchange gaps and fund health and infrastructure, but may create dependency, be tied to the donor’s interests, or be wasted.',
    '**Foreign direct investment** brings capital, technology, management, jobs and export markets; but profits are sent abroad, firms may seek tax breaks, and extraction can harm the environment. Policies that welcome investment while securing local benefit work best.',
    '**Debt**: the 1980s crisis led Cameroon to its first IMF programme in 1988 and to **structural adjustment**: public spending cuts, privatisation, market reforms. Under the **HIPC initiative**, Cameroon reached the decision point in 2000 and the **completion point in 2006**, when much external debt was cancelled.',
    'Cameroon’s plans: **Vision 2035** (2009) aims to make Cameroon an **emerging economy** by 2035; the Growth and Employment Strategy Paper (GESP, 2010 to 2019) was its first stage; the **National Development Strategy 2020 to 2030 (SND30)** puts **structural transformation** at the centre: industrialisation, processing local raw materials, import substitution for some goods, and better infrastructure, human capital and governance. **Microfinance** and credit unions bring small loans to people and firms that banks do not serve.',
  ], 'aec-cameroon-plans', 'Link each plan to a theory: SND30’s processing goal is about moving up the value chain.',
  ['Cameroon’s National Development Strategy (SND30) covers:', ['2020 to 2030', '2010 to 2019', '2009 to 2035', '2000 to 2006'], 'It follows the GESP.'],
  [['Tied aid', 'Aid that must be spent on goods and services from the donor country.'], ['Structural adjustment', 'IMF and World Bank programmes of spending cuts, privatisation and market reforms.'], ['HIPC initiative', 'The debt relief scheme for Heavily Indebted Poor Countries.']],
  [
    { q: 'A foreign firm invests 200 billion FCFA in a processing plant, employs 1,500 people and sends home 15 billion FCFA a year in profit. How do these flows appear in the balance of payments, and is the investment beneficial?', steps: ['The 200 billion is an inflow of **direct investment in the financial account**.', 'The 15 billion profit each year is an outflow of **primary income on the current account**.', 'Benefits: **jobs, wages, taxes, skills and exports**. Costs: **profit outflows and possible tax concessions**.', '**Beneficial if the value it adds at home exceeds the profits sent abroad.**'] },
  ]),

  // ---------- 17. Data and essays ----------
  L('aec-methods-1', 'aec-u6-methods', '17.1', 'Macroeconomic data: index numbers, growth rates and ratios', 20, ['Data'], [
    'Macroeconomic data usually come as **index numbers**, **percentage changes** or **ratios to GDP**. An index sets a base year = 100: an index of 125 means a 25% rise since the base year. A change from 120 to 126 is a 5% rise, not 6%.',
    'Growth rates: (new − old) ÷ old × 100. Always ask whether figures are **nominal** or **real**, **total** or **per head**, and in **FCFA, dollars or percent**.',
    'Ratios: the budget deficit or public debt as a percentage of GDP; the current account as a percentage of GDP; debt service as a percentage of exports. Ratios allow comparison across years and countries.',
    'When describing a trend: state the **direction**, the **size** with figures, any **turning points**, and any **exceptions**. Then explain with theory and, where asked, evaluate: what the data do not show, the reliability of the source, and other possible causes. Correlation does not prove causation.',
  ], 'aec-index-numbers', 'Quote two figures and a year for every trend you describe.',
  ['A price index rises from 120 to 126. The rate of inflation is:', ['5%', '6%', '126%', '0.5%'], '6 ÷ 120 × 100.'],
  [['Index number', 'A figure showing change relative to a base year set at 100.'], ['Base year', 'The year whose value is set at 100 in an index.']],
  [
    { q: 'Real GDP rose from 500 to 520 billion FCFA while population rose from 25 to 25.75 million. Find the growth of real GDP and of real GDP per head.', steps: ['GDP growth = 20 ÷ 500 × 100 = **4%**.', 'Per head: 20,000 FCFA before (500 billion ÷ 25 million), 20,194 after (520 billion ÷ 25.75 million).', 'Growth per head = 194 ÷ 20,000 × 100 = **about 1%**, since population grew 3%.'] },
  ]),
  L('aec-methods-2', 'aec-u6-methods', '17.2', 'Macroeconomic essays and evaluating policy', 20, ['Method'], [
    'A macroeconomic essay follows the same shape as a micro one: define, analyse with a diagram (AD/AS, the Keynesian cross, the Phillips curve, the money market), evaluate, conclude. The difference is that **policy** is almost always at issue.',
    'Evaluate a policy by asking:\n- **diagnosis**: what is the cause of the problem? (demand-pull or cost-push inflation; cyclical or structural unemployment)\n- **size and time lags**: how big an effect, and how soon?\n- **side effects and conflicts**: growth against inflation, jobs against the current account\n- **context**: in the CEMAC, monetary policy is set by the BEAC for all members and the exchange rate is fixed, so fiscal and supply-side policies carry more of the load in Cameroon\n- **evidence**: what has happened before?',
    'Use the economy of Cameroon and the CEMAC where it helps: the oil price shock of 2014 to 2016, the 1994 devaluation, HIPC debt relief, the role of the informal sector.',
    'Finish with a judgement that answers the question, saying which conditions it depends on.',
  ], 'aec-macro-essay', 'In the CEMAC, a question asking "should Cameroon cut interest rates?" needs the answer "Cameroon alone cannot".',
  ['When evaluating a policy to reduce inflation in Cameroon, an important point of context is that:', ['monetary policy is set by the BEAC for the whole CEMAC', 'Cameroon sets its own interest rate', 'the CFA franc floats freely', 'there is no central bank'], 'One monetary policy for six states.'],
  [['Time lag', 'The delay between a policy decision and its effect on the economy.'], ['Policy conflict', 'A situation in which reaching one objective makes another harder to reach.']],
  [
    { q: 'Plan an answer to: "Discuss the view that fiscal policy is the best way to reduce unemployment in Cameroon."', steps: ['Define: **fiscal policy, unemployment and its types.**', 'For: **if unemployment is cyclical, higher spending raises AD through the multiplier; monetary policy is not in Cameroon’s own hands.**', 'Against: **much unemployment is structural and underemployment in the informal sector; imports reduce the multiplier; deficits add to debt.**', 'Alternatives: **supply-side policies: skills matched to jobs, power supply, credit for small firms.**', 'Judgement: **fiscal policy helps in a downturn, but the deeper problem needs supply-side reform.**'] },
  ]),

  // ---------- 18. Final drills ----------
  L('aec-drills-1', 'aec-u6-drills', '18.1', 'Paper 1 drills and the diagrams to master', 18, ['MCQ'], [
    'Paper 1 covers the whole two-year course in 1½ hours. Work at a steady pace, and work every calculation on paper before looking at the options: the wrong answers are built from typical errors (forgetting to divide by the base, mixing up MPC and MPS, reading price from MC instead of AR).',
    'The diagrams that must be quick and exact:\n- micro: demand and supply with shifts, tax incidence, elasticity and revenue, cost curves, perfect competition (short and long run), monopoly, monopolistic competition, kinked demand, MRP, externalities\n- macro: circular flow, Keynesian cross and gaps, AD/AS, money market, Phillips curves, tariff, exchange rate market, Lorenz curve.',
    'Formulas to have ready: PED, YED, XED, PES; MC, AVC, ATC, MR; k = 1 ÷ MPW; credit multiplier = 1 ÷ reserve ratio; real GDP = nominal ÷ deflator × 100; terms of trade; dependency ratio; g = s ÷ v.',
    'After each drill, sort errors into "did not know", "misread" and "miscalculated": each needs a different fix.',
  ], 'aec-key-diagrams', 'In multiple choice, the option you calculated is usually right; the "nearly right" options are traps.',
  ['If MPS = 0.2, MPT = 0.1 and MPM = 0.2, the multiplier is:', ['2', '5', '0.5', '10'], '1 ÷ 0.5.'],
  [['Distractor', 'A wrong option in a multiple-choice question, often built from a common error.']],
  [
    { q: 'A question gives TC = 400 at Q = 20 and TC = 430 at Q = 21, with options 30, 20.5, 430 and 21.5. Which is the marginal cost of the 21st unit, and where do the others come from?', steps: ['MC = 430 − 400 = **30**.', '20.5 is ATC at Q = 21 (430 ÷ 21 ≈ 20.5); 430 is total cost; 21.5 is TC ÷ Q misread at 20.', '**Answer: 30**; the other options are typical confusions of total, average and marginal.'] },
  ]),
  L('aec-drills-2', 'aec-u6-drills', '18.2', 'The mock, corrections and the last weeks', 16, ['Method'], [
    'The mock examination should copy the real one: the same papers, times and conditions, with Paper 2 and Paper 3 on one day as on Thursday 4 June. Treat it as a rehearsal of timing as much as of knowledge.',
    'Corrections are where marks are won: rewrite one answer from each paper using the mark scheme; redo every wrong multiple-choice question and write down why the right answer is right.',
    'In the last weeks, revise by **question type**: past data-response questions on elasticity, costs, national income and trade; essay plans on market structures, market failure, unemployment, inflation and development. Practise drawing each key diagram in under two minutes.',
    'Before the day: check the timetable, bring pens, pencils, a ruler and a permitted calculator, sleep well, and read the rubric on the cover of each paper before starting.',
  ], 'aec-final-term', 'One corrected answer teaches more than five new ones written without feedback.',
  ['After the mock examination, the most useful task is:', ['correcting answers against the mark scheme and redoing weak questions', 'starting new topics', 'only noting the marks', 'resting until June'], 'Turn errors into marks.'],
  [['Mock examination', 'A rehearsal of the real examination under the same conditions.'], ['Rubric', 'The instructions on the cover of a paper: sections, choices and time.']],
  [
    { q: 'A student scored well on Paper 1 but ran out of time on Paper 2, leaving the last essay half done. What should change?', steps: ['Diagnosis: **timing, not knowledge.**', 'Fix: **plan minutes per question from the marks (about 1.8 minutes a mark in 3 hours for 100 marks) and stop each answer on time.**', 'Practice: **two more timed Paper 2s before June, with a clock on the desk.**'] },
  ]),
];
