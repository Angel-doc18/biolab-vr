// Economics lessons for Form 5, term 1: the GCE examination, national income,
// living standards, public finance, inflation, unemployment and the gains
// from international trade. Original text written for this app, with
// Cameroonian examples in francs CFA (FCFA).

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
  L('ec-gceformat-5', 'ec-f5-blueprint', '1.1', 'The GCE Economics examination', 12, ['Exam skills'], [
    'Ordinary Level **Economics** is GCE subject **0525**. On the June 2026 timetable:\n- **Paper 1** (1½ hours): multiple-choice questions across the whole syllabus, including graphs and short calculations\n- **Paper 2** (2½ hours): as the scheme of work sets out, **Section A** is a **compulsory data-response** exercise (tables of national income, tax records, elasticity data) and **Section B** is **essays**.\nAlways follow the instructions printed on your paper about the number of questions.',
    'The Form 5 syllabus covers **macroeconomics** (national income, public finance, inflation, unemployment) and **international trade** (comparative advantage, the balance of payments, protection, regional integration). The Form 4 topics, from scarcity to money, are examined too.',
    'Skills tested: accurate **definitions**, correctly labelled **diagrams**, **calculations** with working, use of **data**, and **evaluation** (weighing arguments).',
  ], 'econ-gce-0525', 'Definitions, diagrams, calculations, data, evaluation: the five skills.',
  ['In the scheme of work, Section A of Economics Paper 2 is:', ['a compulsory data-response exercise', 'optional essays', 'multiple choice', 'a practical'], 'Section B is essays.'],
  [['Data response', 'An exercise based on a table, graph or passage of economic information.'], ['Evaluation', 'Weighing arguments to reach a judgement.']],
  [
    { q: 'Group the syllabus into the parts you will revise for the GCE.', steps: ['Form 4, microeconomics: **scarcity, systems, factors, business organisation, demand, supply, price, elasticity, markets, money and banks.**', 'Form 5, macroeconomics: **national income, living standards, public finance, inflation, unemployment.**', 'Form 5, international: **trade, balance of payments, protection, CEMAC, ECOWAS, AfCFTA.**'] },
  ]),

  L('ec-recall-5', 'ec-f5-blueprint', '1.2', 'Recalling the market mechanism', 14, ['Revision', 'Price theory'], [
    'Before macroeconomics, recall the core of Form 4:\n- **demand** slopes down; **supply** slopes up; **equilibrium** is where they cross\n- a change in the good’s own price causes a **movement along** a curve; other factors **shift** the curve\n- **PED** = % change in quantity demanded ÷ % change in price; elastic if greater than 1\n- **opportunity cost** is the next best alternative forgone.',
    'Microeconomics studies **individual** markets, firms and households. **Macroeconomics** studies the **whole economy**: total output (national income), the general price level (inflation), total employment, government budgets and trade with other countries.',
    'The two are linked: a rise in the world price of oil raises costs in many markets (a micro effect) and can cause cost-push inflation across the economy (a macro effect).',
  ], 'econ-equilibrium', 'Micro looks at one market; macro looks at the whole economy.',
  ['Which is a macroeconomic issue?', ['the national rate of inflation', 'the price of tomatoes in one market', 'one firm’s costs', 'one household’s budget'], 'It concerns the whole economy.'],
  [['Microeconomics', 'The study of individual markets, firms and households.'], ['Macroeconomics', 'The study of the economy as a whole.']],
  [
    { q: 'Using demand and supply, explain what happens to the price of cement when a big road programme starts and a new cement plant opens at the same time.', steps: ['The road programme raises demand (shift right); the new plant raises supply (shift right).', '**Quantity rises for certain. Price rises if the demand increase is larger, falls if the supply increase is larger, or stays the same if they balance.**'] },
  ]),

  // ---------- National income ----------
  L('ec-circularflow-5', 'ec-f5-nationalincome', '2.1', 'The circular flow of income', 15, ['National income'], [
    'In a simple **two-sector** economy, **households** supply factors of production (land, labour, capital, enterprise) to **firms** and receive incomes (rent, wages, interest, profit). Households spend their incomes on the goods and services that firms produce. Money flows round in a **circle**: income becomes spending, which becomes income again.',
    'In the real economy there are **withdrawals** (leakages) and **injections**:\n- withdrawals: **saving** (S), **taxation** (T), **imports** (M)\n- injections: **investment** (I), **government spending** (G), **exports** (X).\nIf injections exceed withdrawals, national income rises; if withdrawals exceed injections, it falls. Equilibrium is where **I + G + X = S + T + M**.',
    'A **closed** economy has no foreign trade; an **open** economy, like Cameroon, trades with the rest of the world, so exports and imports enter the flow.',
  ], 'econ-circular-flow', 'Withdrawals: S, T, M. Injections: I, G, X.',
  ['Which is an injection into the circular flow?', ['exports', 'imports', 'saving', 'taxation'], 'Spending by foreigners on domestic output.'],
  [['Circular flow of income', 'The flow of money between households and firms.'], ['Injection', 'Spending added to the flow: investment, government spending, exports.'], ['Withdrawal', 'Income leaving the flow: saving, taxation, imports.'], ['Open economy', 'An economy that trades with other countries.']],
  [
    { q: 'In a year, investment is 900, government spending 1,200 and exports 1,500; saving is 800, taxes 1,300 and imports 1,700 (billion FCFA). Will national income rise or fall?', steps: ['Injections = 900 + 1,200 + 1,500 = 3,600.', 'Withdrawals = 800 + 1,300 + 1,700 = 3,800.', '**Withdrawals exceed injections by 200 billion FCFA, so national income will tend to fall.**'] },
  ]),

  L('ec-measuring-5', 'ec-f5-nationalincome', '2.2', 'Measuring national income: GDP, GNP and NNI', 16, ['National income', 'Calculation'], [
    'Key aggregates:\n- **Gross Domestic Product** (GDP): the value of all final goods and services produced **within** the country in a year\n- **Gross National Product** (GNP, or gross national income): GDP **plus net factor income from abroad** (income earned by residents abroad minus income paid to foreigners)\n- **Net National Income** (Product): GNP **minus depreciation** (capital consumption).\nValues at **market prices** include indirect taxes and subsidies; at **factor cost** they do not: factor cost = market price − indirect taxes + subsidies.',
    'Three methods, which should give the same total:\n- **expenditure method**: C + I + G + (X − M)\n- **income method**: wages + rent + interest + profit (excluding transfer payments such as pensions and grants)\n- **output method**: the **value added** by each industry (agriculture, industry, services).',
    'To avoid **double counting**, count only **final** goods or the value added at each stage: the flour sold to a baker is not counted again in the price of bread.',
  ], 'econ-ni-methods', 'GNP = GDP + net factor income from abroad; NNI = GNP − depreciation.',
  ['GDP at market prices 10,000; net factor income from abroad −400; depreciation 900 (billion FCFA). Net national income at market prices is:', ['8,700', '9,600', '10,400', '9,100'], '10,000 − 400 = 9,600; 9,600 − 900 = 8,700.'],
  [['GDP', 'The value of final output produced within a country in a year.'], ['GNP', 'GDP plus net factor income from abroad.'], ['Depreciation', 'The value of capital used up in production.'], ['Value added', 'The value of output minus the value of inputs bought from other firms.']],
  [
    { q: 'Expenditure data (billion FCFA): consumption 12,000; investment 3,500; government spending 2,500; exports 4,000; imports 4,500. Calculate GDP at market prices.', steps: ['GDP = C + I + G + (X − M).', '= 12,000 + 3,500 + 2,500 + (4,000 − 4,500).', '**= 17,500 billion FCFA.**'] },
    { q: 'A farmer sells cocoa beans for 100,000 FCFA to a processor, who sells cocoa paste for 160,000 FCFA to a chocolate maker, who sells chocolate for 250,000 FCFA. What does this add to GDP?', steps: ['Value added: farmer 100,000; processor 60,000; chocolate maker 90,000.', '**Total value added = 250,000 FCFA, equal to the value of the final good. Adding all sales (510,000) would double count.**'] },
  ]),

  // ---------- Living standards ----------
  L('ec-nidifficulties-5', 'ec-f5-livingstandards', '3.1', 'Difficulties in measuring national income', 14, ['National income'], [
    'Conceptual and practical difficulties:\n- the **informal sector**: much activity (street trade, small workshops, transport) is not recorded\n- **subsistence output**: food grown for one’s own family is not sold and is hard to value\n- **double counting** if intermediate goods are included\n- **transfer payments** (pensions, grants, scholarships) must be excluded because they are not payments for current output\n- **inaccurate data**: poor records, tax evasion, unreported income\n- **depreciation** is hard to estimate\n- **valuing government services** (education, security) that are not sold.',
    'In Cameroon, as in many developing countries, the informal sector is very large, so official GDP figures understate the true level of activity.',
    'The National Institute of Statistics (INS) compiles Cameroon’s national accounts using surveys and estimates to deal with these problems.',
  ], 'econ-ni-limits', 'Unrecorded and unsold output makes GDP an underestimate in Cameroon.',
  ['Pensions are excluded from national income because they are:', ['transfer payments, not payments for current production', 'too small', 'paid in another currency', 'illegal'], 'No output is produced in exchange.'],
  [['Informal sector', 'Economic activity not registered or recorded by the state.'], ['Transfer payment', 'A payment made without any current output in return, such as a pension.'], ['Subsistence output', 'Goods produced for one’s own consumption.']],
  [
    { q: 'Give four reasons why Cameroon’s official GDP may understate its true output.', steps: ['**Informal-sector activity is largely unrecorded.**', '**Subsistence farming is not sold and is hard to value.**', '**Some income is hidden to avoid tax.**', '**Data collection in rural areas is incomplete.**'] },
  ]),

  L('ec-percapita-5', 'ec-f5-livingstandards', '3.2', 'Income per head and the standard of living', 14, ['National income'], [
    '**Per capita income** = national income ÷ population. It is used to measure the average **standard of living** and to compare countries.',
    'Its limits:\n- it is an **average** and hides **inequality**: a few very rich people can raise it while most remain poor\n- it ignores **non-market** output and leisure\n- it ignores the **quality of life**: health, education, pollution, security, working hours\n- **comparisons** between countries are distorted by exchange rates, different prices and different statistical methods; economists therefore use **purchasing power parity** (PPP) adjustments.',
    'Broader measures include the **Human Development Index** (HDI) of the UN, which combines income per head, **life expectancy** and **education**. A country can raise GDP while welfare stagnates if the gains are unequal or damage the environment.',
  ], 'econ-ni-limits', 'Per capita income is an average: always ask how it is distributed.',
  ['National income 30,000 billion FCFA; population 30 million. Income per head is:', ['1,000,000 FCFA', '1,000 FCFA', '30,000 FCFA', '900 FCFA'], '30,000,000,000,000 ÷ 30,000,000.'],
  [['Per capita income', 'National income divided by population.'], ['Standard of living', 'The level of material welfare and quality of life of people.'], ['Human Development Index', 'A UN measure combining income, life expectancy and education.']],
  [
    { q: 'Country A has income per head of 2,000 dollars and country B 1,500 dollars. Give three reasons why people in A may not be better off.', steps: ['**Income may be shared much more unequally in A.**', '**Prices may be higher in A, so the same income buys less.**', '**A may have worse health, education, pollution or working hours, which per capita income does not measure.**'] },
  ]),

  // ---------- Public finance: revenue ----------
  L('ec-budget-5', 'ec-f5-revenue', '4.1', 'The national budget', 13, ['Public finance'], [
    'The **budget** is the government’s plan of **revenue** and **expenditure** for a financial year. In Cameroon it is prepared by the Ministry of Finance, debated and passed by **Parliament** as the annual **finance law**, and carried out by ministries.',
    'Structure of a budget:\n- **revenue**: tax revenue (direct and indirect) and non-tax revenue (oil revenue, profits of state enterprises, fees, fines, grants, borrowing)\n- **expenditure**: recurrent spending (salaries, running costs, debt interest) and capital spending (roads, schools, dams).',
    'The budget is also an instrument of policy: it can stimulate the economy, reduce inequality through taxes and spending, and develop infrastructure.',
  ], 'econ-budget', 'The budget is a plan: revenue on one side, expenditure on the other.',
  ['In Cameroon, the budget is passed each year by Parliament as the:', ['finance law', 'Foumban constitution', 'Loi-cadre', 'trade agreement'], 'It authorises revenue and spending.'],
  [['Budget', 'The government’s plan of revenue and expenditure for a year.'], ['Finance law', 'The law by which Parliament adopts the annual budget.'], ['Fiscal policy', 'The use of taxation and spending to influence the economy.']],
  [
    { q: 'Classify as revenue or expenditure, and as tax or non-tax, recurrent or capital: (a) VAT receipts; (b) building a bridge; (c) teachers’ salaries; (d) fees for passports.', steps: ['(a) **Revenue, tax.**', '(b) **Expenditure, capital.**', '(c) **Expenditure, recurrent.**', '(d) **Revenue, non-tax.**'] },
  ]),

  L('ec-taxation-5', 'ec-f5-revenue', '4.2', 'Taxation', 16, ['Public finance', 'Calculation'], [
    '**Direct taxes** are paid directly by the person or firm on whom they are levied: personal **income tax**, **company tax** on profits, property tax. **Indirect taxes** are levied on goods and services and paid through prices: **value added tax** (VAT, 19.25% on most goods in Cameroon), excise duties on drinks and tobacco, and **customs duties** on imports.',
    'By how the rate changes with income:\n- **progressive**: the rate rises as income rises (income tax bands)\n- **proportional**: the same rate for all\n- **regressive**: takes a larger share of a poor person’s income (many indirect taxes work this way, because the poor spend more of their income).',
    'Adam Smith’s **canons of taxation**: **equity** (according to ability to pay), **certainty** (clear amount and date), **convenience** (easy to pay), **economy** (cheap to collect). Modern additions: flexibility and not discouraging work or investment.',
  ], 'econ-taxes', 'Progressive: rate rises with income. Regressive: heavier on the poor.',
  ['An income tax charging 10% on the first band and 25% on higher incomes is:', ['progressive', 'regressive', 'proportional', 'indirect'], 'The rate rises with income.'],
  [['Direct tax', 'A tax paid directly by the person on whom it is levied.'], ['Indirect tax', 'A tax on goods and services, paid through prices.'], ['Progressive tax', 'A tax whose rate rises with income.'], ['VAT', 'Value added tax, charged on goods and services.']],
  [
    { q: 'A tax charges 10% on the first 1,000,000 FCFA of income and 20% on income above it. Calculate the tax and the average rate on 3,000,000 FCFA.', steps: ['First band: 10% × 1,000,000 = 100,000 FCFA.', 'Second band: 20% × 2,000,000 = 400,000 FCFA.', 'Total tax = **500,000 FCFA**; average rate = 500,000 ÷ 3,000,000 × 100 ≈ **16.7%**. The average rate is higher than for a lower income, so the tax is progressive.'] },
    { q: 'Ali earns 50,000 FCFA a month and Bih 500,000 FCFA. Each pays 5,000 FCFA a month in VAT on soap and kerosene. Is this tax progressive or regressive?', steps: ['Ali pays 5,000 ÷ 50,000 = 10% of his income; Bih pays 5,000 ÷ 500,000 = 1%.', '**It is regressive: it takes a larger share of the poorer person’s income.**'] },
  ]),

  // ---------- Public finance: spending and debt ----------
  L('ec-spending-5', 'ec-f5-expenditure', '5.1', 'Government expenditure and budget balances', 14, ['Public finance'], [
    'Government expenditure:\n- **recurrent expenditure**: spending repeated every year: salaries, pensions, running costs, maintenance, interest on debt\n- **capital expenditure**: investment in long-lasting assets: roads, bridges, dams, schools, hospitals.\nGovernments spend to provide public goods, develop infrastructure, redistribute income and stabilise the economy.',
    'Budget balances:\n- **balanced budget**: revenue = expenditure\n- **deficit budget**: expenditure greater than revenue, financed by borrowing; often used to stimulate a weak economy\n- **surplus budget**: revenue greater than expenditure; used to cool an overheating economy or repay debt.',
    'Many developing countries, including Cameroon, run deficits to finance infrastructure; the CEMAC sets **convergence criteria** to keep deficits and debt within limits.',
  ], 'econ-budget', 'Deficit: spending above revenue. Surplus: revenue above spending.',
  ['Revenue 6,000 and expenditure 6,500 (billion FCFA) gives a:', ['deficit of 500 billion FCFA', 'surplus of 500 billion FCFA', 'balanced budget', 'surplus of 6,500'], 'Spending exceeds revenue.'],
  [['Recurrent expenditure', 'Regular spending on salaries and running costs.'], ['Capital expenditure', 'Spending on long-lasting assets such as roads.'], ['Budget deficit', 'Expenditure greater than revenue.'], ['Budget surplus', 'Revenue greater than expenditure.']],
  [
    { q: 'Why might a government deliberately run a budget deficit during a recession?', steps: ['**Extra spending and lower taxes put more money into the circular flow.**', '**Higher demand encourages firms to produce more and hire workers, reducing unemployment.**'] },
  ]),

  L('ec-debt-5', 'ec-f5-expenditure', '5.2', 'National debt', 14, ['Public finance'], [
    'The **national (public) debt** is the total amount the government owes. **Internal debt** is borrowed from lenders inside the country (banks, savers, bonds); **external debt** is borrowed from foreign governments, banks and institutions such as the IMF, World Bank and African Development Bank.',
    'Burdens of debt:\n- **debt service** (interest and repayments) uses money that could fund schools and hospitals\n- external debt must be repaid in **foreign currency**, using export earnings\n- heavy borrowing can raise interest rates and crowd out private investment\n- future generations may bear the cost.\nBut borrowing for productive investment (roads, power) can raise future output and pay for itself.',
    'In the 1990s Cameroon’s debt became very heavy. Under the **HIPC** (Heavily Indebted Poor Countries) initiative, Cameroon reached the completion point in **2006** and received large debt relief, freeing money for development.',
  ], 'econ-budget', 'Debt for productive investment can pay for itself; debt for consumption burdens the future.',
  ['External debt is a particular burden because it:', ['must be repaid in foreign currency', 'is always interest-free', 'is never repaid', 'is owed to citizens'], 'Export earnings must cover it.'],
  [['National debt', 'The total amount owed by the government.'], ['Debt service', 'Payments of interest and principal on debt.'], ['HIPC', 'Heavily Indebted Poor Countries initiative for debt relief.']],
  [
    { q: 'Compare internal and external debt.', steps: ['Internal: **owed to residents, repaid in the local currency, money stays in the economy.**', 'External: **owed to foreigners, repaid in foreign currency from export earnings, money leaves the economy.**'] },
  ]),

  // ---------- Inflation ----------
  L('ec-cpi-5', 'ec-f5-inflation', '6.1', 'Measuring inflation: the consumer price index', 16, ['Inflation', 'Calculation'], [
    '**Inflation** is a **sustained rise in the general price level**; it means each franc buys less. **Deflation** is a sustained fall.',
    'The **consumer price index** (CPI) measures changes in the cost of a typical "basket" of goods and services:\n- choose a **base year** (index = 100)\n- record price changes of items such as food, transport, housing and clothing\n- give each item a **weight** reflecting its share of household spending\n- calculate the weighted average index.\nThe **inflation rate** = (CPI this year − CPI last year) ÷ CPI last year × 100.',
    'In Cameroon the National Institute of Statistics publishes the CPI. The CEMAC aims to keep inflation at or below **3%** a year.',
  ], 'econ-inflation', 'Inflation rate = change in CPI ÷ previous CPI × 100.',
  ['The CPI rises from 150 to 159. The inflation rate is:', ['6%', '9%', '159%', '0.6%'], '9 ÷ 150 × 100 = 6%.'],
  [['Inflation', 'A sustained rise in the general price level.'], ['Consumer price index', 'A weighted index of the prices of a typical basket of goods.'], ['Base year', 'The year whose index is set at 100.'], ['Weight', 'The importance given to an item according to its share of spending.']],
  [
    { q: 'A basket has food (weight 5) whose price index rises to 120, and transport (weight 3) at 110, and housing (weight 2) at 105. Calculate the weighted CPI.', steps: ['Multiply each index by its weight: 120 × 5 = 600; 110 × 3 = 330; 105 × 2 = 210.', 'Sum = 1,140; total weights = 10.', '**CPI = 1,140 ÷ 10 = 114: prices rose 14% since the base year.**'] },
  ]),

  L('ec-inflationtypes-5', 'ec-f5-inflation', '6.2', 'Types, causes, effects and remedies of inflation', 16, ['Inflation'], [
    'Types and causes:\n- **demand-pull** inflation: total demand grows faster than output ("too much money chasing too few goods"), due to rapid credit growth, government deficits or rising incomes\n- **cost-push** inflation: rising costs (wages, imported fuel and inputs, transport, taxes) push prices up\n- **imported** inflation: higher prices of imported goods, as when world food and fuel prices rose after 2021.',
    'Effects:\n- people on **fixed incomes** (pensioners, many workers) lose purchasing power\n- **savers** lose if interest is lower than inflation; **borrowers** gain\n- exports become less competitive\n- uncertainty discourages investment; mild inflation may encourage production.',
    'Remedies:\n- **monetary policy**: the **BEAC** raises interest rates and limits credit\n- **fiscal policy**: cut government spending, raise taxes\n- **supply-side** measures: raise production and productivity, improve transport\n- **direct controls**: price controls on basic goods, though these can cause shortages.',
  ], 'econ-inflation', 'Demand-pull: too much spending. Cost-push: rising costs.',
  ['A rise in the world price of fuel causing higher transport fares and food prices is mainly:', ['cost-push inflation', 'demand-pull inflation', 'deflation', 'structural unemployment'], 'Costs push prices up.'],
  [['Demand-pull inflation', 'Inflation caused by total demand exceeding supply.'], ['Cost-push inflation', 'Inflation caused by rising costs of production.'], ['Purchasing power', 'The quantity of goods a sum of money can buy.']],
  [
    { q: 'Explain who gains and who loses when inflation is 8% and the bank pays 3% interest on savings.', steps: ['**Savers lose: their money grows by 3% but prices rise by 8%, so its real value falls by about 5%.**', '**Borrowers gain: the real value of what they owe falls.**', '**People on fixed incomes lose purchasing power.**'] },
  ]),

  // ---------- Unemployment ----------
  L('ec-labourforce-5', 'ec-f5-unemployment', '7.1', 'The labour force and the unemployment rate', 14, ['Unemployment', 'Calculation'], [
    'The **working-age population** is usually those aged 15 to 64. The **labour force** (active population) is those of working age who are **employed** or **unemployed and actively seeking work**. Students, homemakers and retired people not seeking work are **inactive**.',
    'The **unemployment rate** = number unemployed ÷ labour force × 100. **Underemployment** is common in Cameroon: many people work fewer hours than they want, or in jobs below their qualifications, especially in the informal sector, so the unemployment rate alone understates the problem.',
    'The labour force grows quickly in a young population, so many jobs must be created each year just to keep unemployment from rising.',
  ], 'econ-unemployment', 'Unemployment rate = unemployed ÷ labour force × 100, not ÷ population.',
  ['Labour force 12 million, unemployed 600,000. The unemployment rate is:', ['5%', '0.5%', '20%', '6%'], '0.6 ÷ 12 × 100.'],
  [['Labour force', 'People of working age who are employed or seeking work.'], ['Unemployment rate', 'The unemployed as a percentage of the labour force.'], ['Underemployment', 'Working fewer hours than wanted, or below one’s skills.']],
  [
    { q: 'A town has 50,000 people of working age: 32,000 employed, 3,000 unemployed and seeking work, and 15,000 inactive. Calculate the labour force and the unemployment rate.', steps: ['Labour force = employed + unemployed = 32,000 + 3,000 = **35,000.**', 'Unemployment rate = 3,000 ÷ 35,000 × 100 ≈ **8.6%.**'] },
  ]),

  L('ec-unemploymenttypes-5', 'ec-f5-unemployment', '7.2', 'Types, causes and remedies of unemployment', 16, ['Unemployment'], [
    'Types:\n- **frictional**: short-term, while people move between jobs\n- **structural**: long-term changes in industry or technology leave workers with the wrong skills or in the wrong place\n- **cyclical** (demand-deficient): a fall in total demand during a recession\n- **seasonal**: work depends on seasons (farming, tourism).\nOther causes: rapid population growth, education not matched to jobs, rural-urban migration, and weak investment.',
    'Consequences: lost output and income, poverty, emigration of skilled people ("brain drain"), crime and social unrest, and loss of skills and self-esteem for the unemployed.',
    'Remedies: raising demand (fiscal and monetary policy), **vocational and technical training**, support for **self-employment** and small businesses, rural development and public works. Cameroonian programmes include the **National Employment Fund** (FNE, created in 1990), and youth programmes such as PAJER-U and PIAASI that support young people and the informal sector.',
  ], 'econ-unemployment', 'Match the remedy to the type: training for structural, demand for cyclical.',
  ['Graduates who cannot find jobs because their training does not match the jobs available face:', ['structural unemployment', 'seasonal unemployment', 'frictional unemployment only', 'cyclical unemployment only'], 'A mismatch of skills.'],
  [['Frictional unemployment', 'Short-term unemployment between jobs.'], ['Structural unemployment', 'Unemployment caused by long-term changes in industry or skills mismatch.'], ['Cyclical unemployment', 'Unemployment caused by a fall in total demand.'], ['Brain drain', 'The emigration of skilled and educated people.']],
  [
    { q: 'Suggest a suitable remedy for each type: (a) structural; (b) cyclical; (c) seasonal.', steps: ['(a) **Retraining and vocational education to match skills to new jobs.**', '(b) **Raise total demand: more government spending, lower taxes or lower interest rates.**', '(c) **Encourage off-season activities such as irrigation, processing and crafts.**'] },
  ]),

  // ---------- Gains from trade ----------
  L('ec-tradebasis-5', 'ec-f5-trade', '8.1', 'Internal and international trade', 13, ['International trade'], [
    '**Internal (domestic) trade** takes place within a country; **international trade** is between countries. International trade differs because of:\n- different **currencies** (requiring exchange)\n- **customs** duties, documents and regulations\n- distance, transport and insurance costs\n- different languages, laws and trade policies.',
    'Why countries trade: differences in **climate** and **natural resources** (Cameroon exports cocoa, coffee, timber, bananas, cotton and oil), differences in **skills** and **technology**, **specialisation** and **economies of scale**, and access to goods a country cannot produce (machinery, vehicles, medicines).',
    'Gains: wider choice, lower prices, larger markets for exporters, foreign exchange earnings, transfer of technology. Risks: dependence on a few exports whose prices fluctuate, and competition that harms young local industries.',
  ], 'econ-advantage', 'Trade lets each country specialise and enjoy wider choice.',
  ['A key difference between internal and international trade is that international trade involves:', ['different currencies and customs duties', 'no transport', 'no money', 'one government only'], 'Exchange and border rules.'],
  [['International trade', 'The exchange of goods and services between countries.'], ['Foreign exchange', 'Foreign currency earned and used for trade.'], ['Specialisation', 'Concentrating on producing what one does best.']],
  [
    { q: 'Give three reasons why Cameroon imports machinery and exports cocoa.', steps: ['**Cameroon’s climate and land suit cocoa, giving it an advantage.**', '**It lacks the heavy industry and technology to make most machinery efficiently.**', '**Exporting cocoa earns the foreign exchange needed to pay for imported machinery.**'] },
  ]),

  L('ec-advantage-5', 'ec-f5-trade', '8.2', 'Absolute and comparative advantage', 16, ['International trade', 'Calculation'], [
    'A country has an **absolute advantage** in a good if it can produce it with **fewer resources** (or more output from the same resources) than another country.',
    'The theory of **comparative advantage**, set out by **David Ricardo** in 1817, shows that trade can benefit both countries **even if one is better at producing everything**. Each country should specialise in the good in which it has the **lowest opportunity cost**, and trade for the other. Total world output then rises.',
    'Limits of the theory: transport costs, trade barriers, immobility of factors, changing costs, and the risk of depending on one export. The **terms of trade** (index of export prices ÷ index of import prices × 100) show how much a country gains from each unit exported; falling cocoa prices worsen Cameroon’s terms of trade.',
  ], 'econ-advantage', 'Specialise where your opportunity cost is lowest.',
  ['Comparative advantage is based on:', ['lower opportunity cost', 'larger size', 'more money', 'higher prices'], 'Ricardo’s key insight.'],
  [['Absolute advantage', 'Producing a good with fewer resources than another country.'], ['Comparative advantage', 'Producing a good at a lower opportunity cost than another country.'], ['Terms of trade', 'The ratio of export prices to import prices.']],
  [
    { q: 'With one unit of resources, Country A produces 10 tonnes of cocoa or 5 tonnes of rice; Country B produces 4 tonnes of cocoa or 4 tonnes of rice. Who has the comparative advantage in each good?', steps: ['A has the absolute advantage in both goods.', 'Opportunity cost of 1 cocoa: A = 5 ÷ 10 = 0.5 rice; B = 4 ÷ 4 = 1 rice. **A has the comparative advantage in cocoa.**', 'Opportunity cost of 1 rice: A = 10 ÷ 5 = 2 cocoa; B = 4 ÷ 4 = 1 cocoa. **B has the comparative advantage in rice.**', '**A should specialise in cocoa, B in rice, and they should trade.**'] },
  ]),
];
