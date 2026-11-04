// A Level Economics lessons (0725), Upper Sixth, Term 1: the final-year plan
// and command words, the circular flow and national income accounts, real
// GDP and inequality, the Keynesian model, the multiplier and output gaps,
// money and inflation, banking and the BEAC, taxation, and public spending,
// budgets and debt.

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

export const LESSONS_EU6A = [
  // ---------- 1. The final year ----------
  L('aec-exam-1', 'aec-u6-exam', '1.1', 'The final year: papers, timing and a revision plan', 16, ['Method'], [
    'The June 2026 timetable for A Level Economics (0725): **Paper 1**, multiple choice, 1½ hours, Wednesday 3 June, afternoon; **Paper 2**, 3 hours, Thursday 4 June, morning, with compulsory data response and essays; **Paper 3**, 1¾ hours, Thursday 4 June, afternoon. Paper 2 and Paper 3 fall on the same day, so practise sitting two long papers back to back.',
    'The scheme of work finishes the Upper Sixth theory by week 22: Term 1 covers national income, the Keynesian model, money, banking and public finance; Term 2 covers trade, the balance of payments, integration, unemployment, population, growth and development; Term 3 is for drills and the mock.',
    'Macroeconomics uses microeconomic tools all the time: elasticity decides whether a devaluation works, market failure justifies public spending, and cost curves explain why firms respond to interest rates. Revise the Lower Sixth diagrams alongside the new ones.',
    'A good revision plan is **spaced** (each topic returned to several times), **active** (questions and diagrams, not only reading) and **timed** (past papers under examination conditions).',
  ], 'aec-final-plan', 'Two papers on one day: build the stamina for it in the mock, not in June.',
  ['Which two papers are sat on Thursday 4 June 2026?', ['Paper 2 and Paper 3', 'Paper 1 and Paper 2', 'Paper 1 and Paper 3', 'all three'], 'Morning and afternoon.'],
  [['Macroeconomics', 'The study of the economy as a whole: output, employment, prices, trade and growth.'], ['Spaced revision', 'Returning to each topic several times over weeks rather than once.']],
  [
    { q: 'A student has 20 weeks before the June examination. Sketch a plan.', steps: ['Weeks 1 to 12: **learn the new theory topic by topic, with one past question a week.**', 'Weeks 13 to 16: **revise Lower Sixth micro with its diagrams; timed Paper 1 practice.**', 'Weeks 17 to 18: **mock examination under full conditions, two papers in one day.**', 'Weeks 19 to 20: **correct the mock and drill the weakest topics.**'] },
  ]),
  L('aec-exam-2', 'aec-u6-exam', '1.2', 'Command words, mark levels and timing', 16, ['Method'], [
    'Command words tell you what the examiner wants:\n- **define / state**: a precise meaning, no discussion\n- **explain**: give reasons, cause and effect\n- **analyse**: break into parts and show the links, usually with a diagram\n- **calculate**: show the formula and the working\n- **compare**: similarities and differences, point by point\n- **assess / evaluate / discuss / to what extent**: weigh arguments and reach a judgement.',
    'Essay mark schemes work in **levels**: a list of points stays low; developed analysis with a diagram reaches the middle; analysis plus reasoned evaluation reaches the top. Ten well-developed lines beat thirty lines of listing.',
    'Timing: divide the minutes in proportion to the marks. In a 3-hour paper, about 1.8 minutes per mark if 100 marks are available. Read every question first and plan before writing.',
    'In data response, quote the data: name the figure, the year and the unit. In multiple choice, work calculations on paper first: the wrong options are built from common mistakes.',
  ], 'aec-command-words', 'Underline the command word and the topic word in every question before you start.',
  ['A question beginning "To what extent" requires:', ['analysis and a reasoned judgement', 'a definition only', 'a calculation only', 'a list of facts'], 'It is an evaluation question.'],
  [['Command word', 'The word in a question that says what kind of answer is required.'], ['Mark levels', 'Bands in a mark scheme that reward the quality of answers, not the number of points.']],
  [
    { q: 'Paper 2 is 3 hours. One question is worth 25 marks out of 100. How long should it take?', steps: ['180 minutes ÷ 100 marks = **1.8 minutes a mark**.', '25 × 1.8 = **45 minutes**, including about 5 minutes of planning.'] },
  ]),

  // ---------- 2. National income accounts ----------
  L('aec-income-1', 'aec-u6-income', '2.1', 'The circular flow of income in two, three and four sectors', 20, ['Macro'], [
    'In the **two-sector** model, households own the factors of production and sell their services to firms for **factor incomes** (wages, rent, interest, profit); they spend those incomes on the goods and services firms produce. Output, income and expenditure are equal.',
    '**Withdrawals** (leakages) take income out of the flow: **saving** (S), **taxes** (T) and **imports** (M). **Injections** add spending that does not come from households’ current income: **investment** (I), **government spending** (G) and **exports** (X). The **financial sector** turns saving into loans for investment; the **government** collects taxes and spends; the **rest of the world** buys exports and supplies imports.',
    'National income is in **equilibrium** when **injections = withdrawals**: I + G + X = S + T + M. If injections exceed withdrawals, spending, output and income rise; if withdrawals exceed injections, they fall.',
    'The four-sector model is the frame for all macroeconomic policy: fiscal policy works on G and T, monetary policy on I and consumption, trade policy on X and M.',
  ], ['aec-four-sector', 'econ-circular-flow'], 'Remember the pairs: saving and investment, taxes and government spending, imports and exports.',
  ['Which is an injection into the circular flow?', ['exports', 'imports', 'saving', 'taxes'], 'Foreign spending on domestic output.'],
  [['Injection', 'Spending added to the circular flow from outside household consumption: I, G or X.'], ['Withdrawal', 'Income taken out of the circular flow: S, T or M.']],
  [
    { q: 'Injections are I = 200, G = 300 and X = 250 (billion FCFA). Households save 10%, pay 10% in taxes and spend 5% of income on imports. Find equilibrium income.', steps: ['Withdrawals = (0.10 + 0.10 + 0.05) × Y = **0.25Y**.', 'Injections = 200 + 300 + 250 = **750**.', 'Equilibrium: 0.25Y = 750, so **Y = 3,000 billion FCFA**.'] },
  ]),
  L('aec-income-2', 'aec-u6-income', '2.2', 'GDP, GNP and NNP, and the three methods of measurement', 22, ['Macro'], [
    'National income can be measured in three ways, which in principle give the same total:\n- **output (value added) method**: add the value added at each stage of production, to avoid **double counting** of intermediate goods\n- **income method**: add factor incomes (wages, rent, interest, profit), excluding **transfer payments** such as pensions and grants, which are not payments for production\n- **expenditure method**: **C + I + G + (X − M)**, total final spending on domestic output.',
    '**GDP** (gross domestic product) is output produced **within** the country. **GNP** (gross national product, or GNI) = GDP + **net property income from abroad** (income earned abroad by residents minus income paid to foreigners). For Cameroon, profits and interest paid to foreign owners and lenders make this figure negative, so GNP is below GDP.',
    '**NNP** (net national product) = GNP − **depreciation** (capital consumption). **Market prices** include indirect taxes and subsidies; **factor cost** removes them: factor cost = market prices − indirect taxes + subsidies. **National income** is NNP at factor cost.',
    'In Cameroon the national accounts are prepared by the **Institut National de la Statistique** (INS).',
  ], ['aec-ni-ladder', 'econ-ni-methods'], 'Work down the ladder in order: GDP, add net income from abroad, subtract depreciation, remove taxes and add back subsidies.',
  ['NNP at factor cost is obtained from NNP at market prices by:', ['subtracting indirect taxes and adding subsidies', 'adding indirect taxes', 'subtracting depreciation', 'adding net income from abroad'], 'It removes the state’s effect on prices.'],
  [['Gross domestic product', 'The value of final output produced within a country in a year.'], ['Net property income from abroad', 'Income earned abroad by residents minus income earned at home by non-residents.'], ['Depreciation', 'The value of capital worn out in producing the year’s output.']],
  [
    { q: 'Data (billion FCFA): C = 6,000, I = 1,500, G = 2,000, X = 2,500, M = 3,000, net property income from abroad = −400, depreciation = 600, indirect taxes = 900, subsidies = 100. Find GDP, GNP, NNP and national income.', steps: ['GDP at market prices = 6,000 + 1,500 + 2,000 + (2,500 − 3,000) = **9,000**.', 'GNP = 9,000 − 400 = **8,600**.', 'NNP at market prices = 8,600 − 600 = **8,000**.', 'National income (NNP at factor cost) = 8,000 − 900 + 100 = **7,200 billion FCFA**.'] },
  ]),

  // ---------- 3. Using national income figures ----------
  L('aec-living-1', 'aec-u6-living', '3.1', 'Real and nominal GDP, the deflator and income per head', 20, ['Macro'], [
    '**Nominal** GDP is measured at current prices; **real** GDP removes the effect of price changes so that changes in **output** can be seen. **Real GDP = nominal GDP ÷ GDP deflator × 100**. As a quick estimate, real growth ≈ nominal growth − inflation.',
    '**GDP per head** = GDP ÷ population. It allows comparison between countries of different sizes and shows whether output is growing faster than population.',
    'Problems of measurement:\n- the **informal sector** and **subsistence** farming are poorly recorded, so GDP is understated\n- **double counting** must be avoided\n- unpaid work at home is not counted\n- data are revised, and the price index used may be imperfect.',
    'Problems of using GDP as a measure of **living standards**: it says nothing about the **distribution** of income, leisure, working conditions, pollution, the quality of goods, or what is produced (weapons count the same as medicines). For comparisons between countries, figures should be converted at **purchasing power parity** (PPP) rather than official exchange rates, since prices differ.',
  ], 'aec-ni-problems', 'Always ask: nominal or real? total or per head? and how is it shared?',
  ['If nominal GDP rose by 8% and prices rose by 5%, real GDP rose by about:', ['3%', '13%', '8%', '1.6%'], 'Nominal growth minus inflation.'],
  [['Real GDP', 'GDP adjusted for changes in the price level.'], ['GDP deflator', 'A price index for all goods in GDP: nominal ÷ real × 100.'], ['Purchasing power parity', 'An exchange rate that equalises the purchasing power of currencies.']],
  [
    { q: 'Nominal GDP is 30,000 billion FCFA in 2024 and 32,400 billion in 2025; the GDP deflator (2024 = 100) is 104 in 2025. Find real growth. With 28 million people, what is real GDP per head in 2025?', steps: ['Real GDP 2025 = 32,400 ÷ 104 × 100 = **31,154 billion FCFA** (2024 prices).', 'Real growth = (31,154 − 30,000) ÷ 30,000 × 100 = **3.8%** (nominal growth was 8%).', 'Per head = 31,154 billion ÷ 28 million ≈ **1.11 million FCFA**.'] },
  ]),
  L('aec-living-2', 'aec-u6-living', '3.2', 'Inequality: the Lorenz curve and the Gini coefficient', 18, ['Macro'], [
    'The **Lorenz curve** plots the **cumulative percentage of income** received against the **cumulative percentage of households**, from the poorest. The diagonal is the **line of perfect equality** (the poorest 20% receive 20% of income, and so on). The further the curve bows below the diagonal, the more unequal the distribution.',
    'The **Gini coefficient** = area between the diagonal and the Lorenz curve ÷ the whole area under the diagonal. It runs from **0** (perfect equality) to **1** (one household has all income). Sometimes it is quoted from 0 to 100.',
    'Causes of inequality: differences in skills and education, ownership of land and capital, inherited wealth, regional differences (rural and urban), discrimination, and a large informal sector with low earnings. Remedies: progressive taxes, transfers, free education and health care, minimum wages, land reform, and growth that creates jobs for the poor.',
    'Inequality matters for living standards: two countries with the same GDP per head can have very different poverty levels.',
  ], 'aec-lorenz', 'A Lorenz curve that bows further from the diagonal means a higher Gini coefficient.',
  ['A Gini coefficient closer to 1 shows:', ['greater inequality', 'perfect equality', 'faster growth', 'lower prices'], '1 means one household has everything.'],
  [['Lorenz curve', 'A curve showing the cumulative share of income received by cumulative shares of households.'], ['Gini coefficient', 'A measure of inequality from 0 (equal) to 1 (completely unequal).']],
  [
    { q: 'Each fifth of households, poorest first, receives 5%, 10%, 15%, 25% and 45% of income. Find the Lorenz points and the Gini coefficient.', steps: ['Cumulative income: **5, 15, 30, 55, 100%** at 20, 40, 60, 80, 100% of households.', 'Area under the curve, by trapezia of width 0.2: 0.2 × ½ × [(0 + 0.05) + (0.05 + 0.15) + (0.15 + 0.30) + (0.30 + 0.55) + (0.55 + 1.00)] = **0.31**.', 'Area under the diagonal = **0.5**.', 'Gini = (0.5 − 0.31) ÷ 0.5 = **0.38**.'] },
  ]),

  // ---------- 4. The Keynesian model ----------
  L('aec-keynes-1', 'aec-u6-keynes', '4.1', 'The consumption and saving functions', 20, ['Macro'], [
    'John Maynard Keynes, in **The General Theory of Employment, Interest and Money** (1936), argued that in the short run national income is set by **aggregate demand**, and that an economy can settle with high unemployment.',
    'The **consumption function**: **C = a + bY**. **a** is autonomous consumption (spending even at zero income, from saving or borrowing); **b** is the **marginal propensity to consume**, MPC = ΔC ÷ ΔY, between 0 and 1. The **average propensity to consume** is APC = C ÷ Y; it falls as income rises.',
    'Since income is either consumed or saved (no taxes in this model), the **saving function** is **S = −a + (1 − b)Y**, with **MPS = 1 − MPC** and **APC + APS = 1**. Saving is negative at low incomes (**dissaving**) and zero at the **break-even** income where C = Y.',
    'Other influences on consumption: wealth, interest rates and credit, expectations, the distribution of income (the poor have a higher MPC), and taxes.',
  ], 'aec-consumption', 'MPC + MPS = 1 and APC + APS = 1: if you know one, you know the other.',
  ['If C = 100 + 0.75Y, the MPS is:', ['0.25', '0.75', '100', '1.75'], '1 − 0.75.'],
  [['Marginal propensity to consume', 'The fraction of extra income that is spent: ΔC ÷ ΔY.'], ['Average propensity to consume', 'Total consumption divided by total income.'], ['Autonomous consumption', 'Consumption that does not depend on income.']],
  [
    { q: 'C = 100 + 0.75Y (billion FCFA). Find the saving function, break-even income, and APC and APS at Y = 800.', steps: ['S = Y − C = **−100 + 0.25Y**.', 'Break-even: S = 0 when **Y = 400**.', 'At Y = 800: C = 100 + 600 = **700**, so APC = 700 ÷ 800 = **0.875** and APS = **0.125**.', 'MPC (0.75) is below APC (0.875), as the model predicts.'] },
  ]),
  L('aec-keynes-2', 'aec-u6-keynes', '4.2', 'Investment, the accelerator and equilibrium income', 22, ['Macro'], [
    '**Investment** is spending on new capital goods: machines, buildings, roads, stocks. It depends on the **rate of interest** compared with the **marginal efficiency of capital** (the expected return), on business **expectations**, on technology, on government policy and on the growth of demand.',
    'The **accelerator principle**: net investment depends on the **rate of change** of output. If a firm needs 3 francs of capital for each franc of output a year, a rise in sales from 100 to 110 needs 30 of new capital; if sales then rise only to 115, net investment falls to 15, even though sales are still growing. This makes investment volatile.',
    'In the **Keynesian cross**, aggregate demand AD = C + I (+ G + X − M in the full model) is drawn against income, with a **45° line** where spending equals output. **Equilibrium income** is where AD crosses the 45° line. Equivalently, in a closed economy without government, **planned saving = planned investment**.',
    'Keynes’s **paradox of thrift**: if everyone tries to save more, spending falls, income falls, and total saving may not rise at all. What is wise for one household can be harmful for the economy.',
  ], 'aec-keynes-cross', 'On the Keynesian cross, any point on the 45° line has spending equal to output; equilibrium is where AD meets it.',
  ['In the simple Keynesian model, equilibrium income is where:', ['AD crosses the 45° line', 'consumption is zero', 'saving exceeds investment', 'the AD line is steepest'], 'Planned spending equals output.'],
  [['Accelerator principle', 'Net investment depends on the rate of change of output.'], ['Marginal efficiency of capital', 'The expected rate of return on an extra unit of capital.'], ['Paradox of thrift', 'An attempt by all to save more can lower income and leave total saving unchanged.']],
  [
    { q: 'C = 100 + 0.75Y and I = 100 (billion FCFA). Find equilibrium income both ways.', steps: ['AD = 200 + 0.75Y. Set Y = AD: Y = 200 + 0.75Y, so **0.25Y = 200 and Y = 800**.', 'Check with S = I: −100 + 0.25Y = 100, so **Y = 800**.', 'At Y = 800, C = 700 and S = 100 = I.'] },
  ]),

  // ---------- 5. The multiplier and gaps ----------
  L('aec-multiplier-1', 'aec-u6-multiplier', '5.1', 'The multiplier process', 20, ['Macro'], [
    'A rise in an injection, such as investment, raises income by **more** than the injection itself. The first spending becomes income for workers and suppliers, who spend part of it; that becomes someone else’s income, and so on. Each round is smaller because part of each round leaks into withdrawals.',
    'In a closed economy without government, the **multiplier** is **k = 1 ÷ (1 − MPC) = 1 ÷ MPS**, and **ΔY = k × ΔI**.',
    'In an open economy with government, every withdrawal reduces the multiplier: **k = 1 ÷ (MPS + MPT + MPM)**, where MPT is the marginal rate of tax and MPM the marginal propensity to import. This is often written **1 ÷ MPW**, the marginal propensity to withdraw.',
    'In Cameroon a high propensity to import (fuel, rice, machinery, manufactures) means much spending leaks abroad, so the domestic multiplier is smaller than in a closed model. The multiplier also works downward: a cut in investment or exports lowers income by a multiple.',
  ], 'aec-multiplier-rounds', 'The more that leaks out at each round, the smaller the multiplier.',
  ['If MPC = 0.8 in a closed economy without government, the multiplier is:', ['5', '0.8', '1.25', '8'], '1 ÷ 0.2.'],
  [['Multiplier', 'The ratio of the change in national income to the change in injections that caused it.'], ['Marginal propensity to withdraw', 'The fraction of extra income that leaks out in saving, taxes and imports.']],
  [
    { q: 'Investment rises by 100 billion FCFA and MPC = 0.8. Show the first rounds and the total.', steps: ['Rounds of extra spending: **100, 80, 64, 51.2, 41.0 ...**', 'k = 1 ÷ (1 − 0.8) = **5**.', '**Total rise in income = 5 × 100 = 500 billion FCFA**; total extra saving = 0.2 × 500 = 100, equal to the extra investment.'] },
    { q: 'In an open economy MPS = 0.1, MPT = 0.2 and MPM = 0.2. Find k and the effect of a 60 billion rise in exports.', steps: ['k = 1 ÷ (0.1 + 0.2 + 0.2) = 1 ÷ 0.5 = **2**.', '**ΔY = 2 × 60 = 120 billion FCFA.**'] },
  ]),
  L('aec-multiplier-2', 'aec-u6-multiplier', '5.2', 'Inflationary and deflationary gaps', 20, ['Macro'], [
    '**Full-employment income** (Yf) is the output the economy can produce with all resources employed. Equilibrium income need not equal it.',
    'A **deflationary gap** is the amount by which aggregate demand falls **short** of the level needed for full employment, measured at Yf. It causes **demand-deficient unemployment**. Because of the multiplier, the shortfall in **output** is the gap times k.',
    'An **inflationary gap** is the amount by which aggregate demand **exceeds** full-employment output, measured at Yf. Real output cannot rise further, so the excess demand **pulls up prices**.',
    'Keynesian remedies use **fiscal policy**: to close a deflationary gap, raise government spending or cut taxes (expansionary); to close an inflationary gap, cut spending or raise taxes (contractionary). The size of the change needed is the gap, not the output shortfall, because the multiplier does the rest. Time lags and imports make fine-tuning difficult in practice.',
  ], 'aec-gaps', 'The gap is measured vertically at full employment; the output shortfall is measured horizontally and equals the gap times the multiplier.',
  ['To close a deflationary gap, a government could:', ['raise its spending or cut taxes', 'raise taxes', 'cut its spending', 'reduce the money supply'], 'Expansionary fiscal policy.'],
  [['Full-employment income', 'The level of national income at which all resources are employed.'], ['Deflationary gap', 'The shortfall of aggregate demand below the level needed for full employment.'], ['Inflationary gap', 'The excess of aggregate demand over full-employment output.']],
  [
    { q: 'AD = 150 + 0.75Y and full-employment income is 1,000 billion FCFA. Find equilibrium income and the gap.', steps: ['Equilibrium: Y = 150 + 0.75Y, so **Y = 600**.', 'AD at Yf = 150 + 750 = **900**, below 1,000: a **deflationary gap of 100**.', 'k = 1 ÷ 0.25 = 4; output shortfall = 4 × 100 = **400** = 1,000 − 600, as it should.', '**Extra government spending of 100 billion would close the gap.**'] },
  ]),

  // ---------- 6. Money and inflation ----------
  L('aec-money-1', 'aec-u6-money', '6.1', 'The quantity theory and liquidity preference', 22, ['Macro'], [
    'The **quantity theory of money** rests on Irving Fisher’s **equation of exchange** (1911): **MV = PT**, where M is the money supply, V the **velocity of circulation** (how often each franc is spent in a year), P the average price level and T the volume of transactions. The equation is always true by definition.',
    'Classical economists assumed **V and T are stable** (T set by real factors at full employment), so the theory predicts that a rise in M causes a **proportional rise in P**. Monetarists such as Milton Friedman revived the idea: inflation is caused by money supply growing faster than output.',
    'Keynes’s **liquidity preference** theory gives three motives for holding money: the **transactions** motive (everyday spending, rising with income), the **precautionary** motive (emergencies, also rising with income) and the **speculative** motive (holding money instead of bonds, **higher when interest rates are low** because bond prices are expected to fall).',
    'The **interest rate** is set where the demand for money meets the supply of money, which the central bank controls. A larger money supply lowers the interest rate, unless the economy is in a **liquidity trap**: at very low rates people will hold any extra money, so the rate cannot fall further and monetary policy loses its power.',
  ], 'aec-liquidity', 'MV = PT is an identity; it becomes a theory only once you assume V and T are fixed.',
  ['In MV = PT, a rise in M with V and T constant causes:', ['a proportional rise in P', 'a fall in P', 'a rise in T', 'a fall in V'], 'The quantity theory prediction.'],
  [['Velocity of circulation', 'The average number of times each unit of money is spent in a period.'], ['Liquidity preference', 'The demand to hold wealth as money rather than as other assets.'], ['Liquidity trap', 'A situation in which interest rates cannot be lowered further by increasing the money supply.']],
  [
    { q: 'M = 2,000 billion FCFA, V = 5 and T = 1,000 billion transactions. Find P, then the effect of a 10% rise in M.', steps: ['P = MV ÷ T = 2,000 × 5 ÷ 1,000 = **10**.', 'New M = 2,200: P = 2,200 × 5 ÷ 1,000 = **11**.', '**Prices rise by 10%, in proportion to the money supply**, if V and T are unchanged.'] },
  ]),
  L('aec-money-2', 'aec-u6-money', '6.2', 'Inflation: measurement, causes and effects', 22, ['Macro'], [
    '**Inflation** is a sustained rise in the general price level. It is measured by the **consumer price index** (CPI): a basket of goods and services bought by typical households, each price change **weighted** by the share of spending on it. In Cameroon the INS publishes the CPI. The CEMAC convergence criteria set a ceiling of **3%** a year for inflation.',
    '**Demand-pull inflation**: aggregate demand grows faster than the economy’s capacity, pulling up prices (excess spending, rapid credit growth, a large budget deficit). **Cost-push inflation**: rising costs shift aggregate supply left (wage rises above productivity, dearer fuel, imported inflation, a fall in the exchange rate), raising prices and cutting output at the same time.',
    'Effects of inflation:\n- it reduces the **real income** of people on fixed incomes\n- it redistributes wealth from **lenders to borrowers** when it is unexpected\n- it raises **menu costs** and the costs of protecting savings\n- it makes exports **less competitive** when prices rise faster than in trading partners, a serious issue with a fixed exchange rate\n- uncertainty discourages investment.',
    '**Deflation**, a falling price level, is also harmful: buyers delay purchases, real debts rise and output can fall.',
  ], 'aec-adas', 'Demand-pull: AD shifts right, output and prices rise. Cost-push: AS shifts left, prices rise and output falls.',
  ['Cost-push inflation is shown by:', ['the aggregate supply curve shifting to the left', 'the AD curve shifting to the right', 'AS shifting to the right', 'AD shifting to the left'], 'Higher costs reduce supply.'],
  [['Consumer price index', 'A weighted index of the prices of a basket of goods bought by households.'], ['Demand-pull inflation', 'Inflation caused by aggregate demand exceeding the economy’s capacity.'], ['Cost-push inflation', 'Inflation caused by rising costs of production.']],
  [
    { q: 'A basket has weights: food 40%, transport 20%, housing 25%, other 15%. A year later the price indices are 110, 120, 104 and 100. Find the CPI and the inflation rate.', steps: ['Food: 0.40 × 110 = **44**; transport: 0.20 × 120 = **24**.', 'Housing: 0.25 × 104 = **26**; other: 0.15 × 100 = **15**.', 'CPI = 44 + 24 + 26 + 15 = **109**.', '**Inflation = 9%**, though transport prices alone rose 20%.'] },
  ]),

  // ---------- 7. Banking and the BEAC ----------
  L('aec-banking-1', 'aec-u6-banking', '7.1', 'Commercial banks and credit creation', 22, ['Macro'], [
    'Commercial banks accept deposits, lend, provide payment services (cheques, transfers, cards, mobile banking) and advise customers. They aim for **profit**, from lending at higher rates than they pay, but must keep enough **liquidity** to meet withdrawals: the conflict between **liquidity and profitability**.',
    'A bank keeps only a fraction of deposits as reserves and lends the rest. The loan is spent and deposited in another bank, which keeps a fraction and lends the rest, and so on: banks together **create credit** (deposit money) far beyond the first deposit.',
    'The **credit multiplier = 1 ÷ reserve ratio**. Total deposits = initial deposit ÷ reserve ratio. With a 20% ratio, 1 million FCFA of new cash can support 5 million of deposits, of which 4 million are new loans.',
    'Limits to credit creation: people holding cash instead of depositing it (common where many use cash or mobile money); a shortage of creditworthy borrowers; banks choosing to hold excess reserves; and controls by the central bank. In Central Africa, the **COBAC** (Commission Bancaire de l’Afrique Centrale) supervises the banks.',
  ], 'aec-credit-creation', 'The credit multiplier is the banking version of the income multiplier: 1 ÷ the leakage at each round.',
  ['With a reserve ratio of 10%, the credit multiplier is:', ['10', '0.1', '1.1', '90'], '1 ÷ 0.1.'],
  [['Credit creation', 'The process by which banks, lending out deposits, create new deposits.'], ['Reserve ratio', 'The fraction of deposits a bank holds as cash or central bank reserves.'], ['Liquidity', 'How quickly and cheaply an asset can be turned into cash.']],
  [
    { q: 'A new cash deposit of 1,000,000 FCFA is made; banks keep 20% as reserves. Show the process and the total.', steps: ['Round 1: deposit **1,000,000**, lend 800,000.', 'Round 2: deposit **800,000**, lend 640,000; round 3: deposit **640,000** ...', 'Total deposits = 1,000,000 ÷ 0.2 = **5,000,000 FCFA**.', '**New loans = 4,000,000 FCFA**; reserves = 1,000,000, the original cash.'] },
  ]),
  L('aec-banking-2', 'aec-u6-banking', '7.2', 'The BEAC and monetary policy in the CEMAC', 22, ['Macro'], [
    'The **BEAC** (Banque des États de l’Afrique Centrale), with its headquarters in **Yaoundé**, is the central bank of the six CEMAC states: Cameroon, the Central African Republic, Chad, the Republic of Congo, Equatorial Guinea and Gabon. It issues the **CFA franc of Central Africa** (XAF), holds the members’ foreign reserves, acts as banker to the governments and to the commercial banks, and is the **lender of last resort**.',
    'Its main objective is **price stability**; without harming that aim, it supports the economic policies of the member states. Monetary policy is decided by its Monetary Policy Committee for the whole union: no single member can set its own interest rate.',
    'Instruments:\n- the **policy interest rate** on its tender operations, which sets the cost of refinancing for banks\n- **compulsory reserves** that banks must hold at the BEAC\n- **open market operations**: buying or selling securities to add or drain liquidity\n- marginal lending facilities and rules on credit.\nIn 2022 and 2023 the BEAC raised its main rate several times as inflation rose.',
    'Limits: the **fixed peg to the euro** means interest rates cannot stray far from those in the euro area without pressure on reserves; many banks hold excess liquidity, so a higher refinancing rate bites less; and much activity is informal and cash-based. Fiscal policy therefore matters greatly for each state.',
  ], 'aec-beac', 'Tight monetary policy: raise the rate, raise reserves, sell securities. Loose policy: the reverse.',
  ['To reduce bank lending, the BEAC could:', ['raise compulsory reserves', 'cut its policy rate', 'buy securities from banks', 'lower reserves'], 'Banks have less to lend.'],
  [['Central bank', 'The bank that issues currency, manages reserves and conducts monetary policy.'], ['Lender of last resort', 'The central bank’s role of lending to banks in a crisis.'], ['Open market operations', 'Central bank purchases or sales of securities to change bank liquidity.']],
  [
    { q: 'Inflation in the CEMAC rises above 3%. Explain how a rise in the BEAC’s policy rate is meant to work.', steps: ['Banks pay more to refinance, so **they raise their own lending rates**.', 'Borrowing for consumption and investment **falls**; saving becomes more attractive.', '**Aggregate demand slows, easing demand-pull inflation**; the higher rate also supports the peg.', 'Evaluation: **if banks already hold excess reserves, or inflation comes from imported food and fuel, the effect is weak.**'] },
  ]),

  // ---------- 8. Taxation ----------
  L('aec-tax-1', 'aec-u6-tax', '8.1', 'Why governments tax: the canons and the types of tax', 20, ['Macro'], [
    'Purposes of taxation: to **raise revenue** for public goods and services; to **redistribute** income; to correct **externalities** and discourage **demerit goods**; to **protect** home industries (tariffs); and to **manage demand** (fiscal policy).',
    'Adam Smith’s **canons of taxation** (The Wealth of Nations, 1776):\n- **equity**: tax according to ability to pay\n- **certainty**: the amount, time and manner of payment should be clear\n- **convenience**: collected at a time and in a way convenient to the payer\n- **economy**: the cost of collection should be small compared with the yield.\nModern additions: **efficiency** (little distortion of incentives), **flexibility** and **simplicity**.',
    '**Direct taxes** are levied on income and wealth and paid by the person on whom they fall: personal income tax, company tax, property tax. **Indirect taxes** are levied on spending and can be passed on: **VAT**, excise duties, customs duties. In Cameroon the standard rate of VAT is **19.25%**: 17.5% plus an additional council tax of 10% of that amount.',
    'Direct taxes can be made progressive and are hard to pass on, but can discourage work and saving and invite evasion. Indirect taxes are easy to collect and hard to evade at the point of sale, but tend to be **regressive** and to raise prices.',
  ], 'aec-canons', 'Use the canons as a checklist when judging any proposed tax.',
  ['The canon of economy means that:', ['the cost of collecting a tax should be small compared with what it raises', 'taxes should be low', 'the economy should grow', 'everyone pays the same'], 'A costly tax to collect is a bad tax.'],
  [['Direct tax', 'A tax on income or wealth paid by the person on whom it is levied.'], ['Indirect tax', 'A tax on spending, which can be passed on to buyers.'], ['Canons of taxation', 'Principles of a good tax: equity, certainty, convenience, economy.']],
  [
    { q: 'A good costs 10,000 FCFA before VAT. What does the buyer pay at 19.25%, and how is the rate built?', steps: ['VAT = 10,000 × 0.1925 = **1,925 FCFA**; the buyer pays **11,925 FCFA**.', 'Build-up: **17.5% = 1,750**, plus the council tax of **10% of 1,750 = 175**: 1,750 + 175 = 1,925.'] },
  ]),
  L('aec-tax-2', 'aec-u6-tax', '8.2', 'Progressive, proportional and regressive taxes', 20, ['Macro'], [
    'Taxes are classified by how the **average rate** (tax ÷ income) changes with income:\n- **progressive**: the average rate **rises** as income rises\n- **proportional**: the average rate is **constant**\n- **regressive**: the average rate **falls** as income rises.',
    'The **marginal rate** is the tax on an extra franc of income: ΔT ÷ ΔY. A progressive income tax uses **bands**: income in higher bands is taxed at higher marginal rates, so the average rate rises but stays below the top marginal rate.',
    'An indirect tax at one rate on a necessity is **regressive**: a poor household spends a larger share of its income on it, so the tax takes a larger share of its income. Exempting basic foods and medicines from VAT reduces this.',
    'Progressive taxes reduce inequality and act as **automatic stabilisers** (tax revenue rises faster than income in a boom). Very high marginal rates may discourage work, saving and enterprise, and encourage avoidance, evasion and a shift into the informal sector.',
  ], 'aec-tax-systems', 'Judge progressivity by the average rate, not by the amount paid: a rich person paying more francs is not proof of a progressive tax.',
  ['A tax is progressive when:', ['the average tax rate rises as income rises', 'the rich pay more francs', 'everyone pays the same rate', 'the rate falls as income rises'], 'Look at the average rate.'],
  [['Average tax rate', 'Total tax paid divided by income.'], ['Marginal tax rate', 'The tax on an additional unit of income.'], ['Regressive tax', 'A tax that takes a larger share of the incomes of the poor.']],
  [
    { q: 'An illustrative income tax has bands: the first 500,000 FCFA a year is free; the next 1,500,000 is taxed at 10%; income above 2,000,000 at 25%. Find the tax, average rate and marginal rate on 3,000,000 FCFA.', steps: ['First band: **0**.', 'Second band: 1,500,000 × 10% = **150,000**.', 'Third band: (3,000,000 − 2,000,000) × 25% = **250,000**.', 'Tax = **400,000 FCFA**; average rate = 400,000 ÷ 3,000,000 = **13.3%**; marginal rate = **25%**.'] },
    { q: 'Household A earns 50,000 FCFA a month and pays 1,000 in VAT on salt and soap; household B earns 500,000 and pays 3,000. Is this tax progressive?', steps: ['A: 1,000 ÷ 50,000 = **2%**; B: 3,000 ÷ 500,000 = **0.6%**.', '**B pays more francs but a smaller share: the tax is regressive.**'] },
  ]),

  // ---------- 9. Spending, budgets and debt ----------
  L('aec-spending-1', 'aec-u6-spending', '9.1', 'Public expenditure: its types and its growth', 18, ['Macro'], [
    '**Recurrent expenditure** pays for the day-to-day running of the state: salaries of teachers, soldiers and civil servants, goods and services, and interest on debt. **Capital expenditure** builds assets that last: roads, dams, ports, schools and hospitals. **Transfer payments** (pensions, grants, subsidies) move income without buying output.',
    'Reasons for public spending: to provide **public goods** (defence, justice, street lighting), **merit goods** (education, health), infrastructure that markets would underprovide, a safety net, and to manage aggregate demand.',
    'Public spending has grown over time in most countries. Adolph Wagner argued in the 1880s that state activity grows as economies develop and urbanise. Peacock and Wiseman (1961) found it rises sharply in crises and wars and does not fall back fully (the **displacement effect**). Other causes: population growth, rising expectations of public services, security needs and debt interest.',
    'The effects of spending depend on its quality: capital spending on productive infrastructure raises future growth; poorly chosen or badly executed projects waste resources.',
  ], 'aec-spending-types', 'Capital spending raises the economy’s capacity; recurrent spending keeps services running. Both are needed.',
  ['Building a new dam is an example of:', ['capital expenditure', 'recurrent expenditure', 'a transfer payment', 'a tax'], 'It creates a lasting asset.'],
  [['Recurrent expenditure', 'Government spending on day-to-day running costs.'], ['Capital expenditure', 'Government spending on long-lasting assets.'], ['Transfer payment', 'A payment that redistributes income without buying output, such as a pension.']],
  [
    { q: 'A budget of 7,000 billion FCFA allocates 3,200 billion to salaries, goods and services, 1,300 billion to debt interest and repayment, and the rest to investment projects. What share is capital spending?', steps: ['Capital spending = 7,000 − 3,200 − 1,300 = **2,500 billion FCFA**.', 'Share = 2,500 ÷ 7,000 × 100 = **about 36%**.'] },
  ]),
  L('aec-spending-2', 'aec-u6-spending', '9.2', 'Budgets, deficits, public debt and fiscal policy', 22, ['Macro'], [
    'The **budget** sets out planned revenue and spending for the year; in Cameroon it is voted by Parliament as the **finance law**. A **balanced** budget has spending = revenue; a **deficit** has spending > revenue; a **surplus** has revenue > spending.',
    'A deficit is financed by **borrowing**: at home, by selling Treasury bills and bonds to banks and investors on the regional securities market; abroad, from other governments, the IMF, the World Bank and the African Development Bank, or on international markets (Cameroon issued Eurobonds in 2015 and 2021). Borrowing adds to the **public debt**, the stock owed from all past deficits.',
    'Debt is sustainable if the economy grows fast enough to service it. The CEMAC convergence criteria set a ceiling on public debt of **70% of GDP**. Large debts raise interest costs, may **crowd out** private investment by raising interest rates, and external debt must be repaid in foreign currency. Cameroon reached the **HIPC completion point in 2006**, when much of its external debt was cancelled.',
    '**Fiscal policy** uses spending and taxes to manage demand. In a recession, a deficit supports demand; in a boom, a surplus restrains it. **Automatic stabilisers** (progressive taxes, benefits) work without new decisions. Even a **balanced** rise in spending and taxes raises income, because the multiplier on spending exceeds the multiplier on taxes.',
  ], 'aec-budget', 'A deficit is a flow in one year; the debt is the stock built up by all past deficits.',
  ['The CEMAC convergence criteria limit public debt to:', ['70% of GDP', '3% of GDP', '100% of GDP', '20% of GDP'], 'Inflation has a 3% ceiling, a different criterion.'],
  [['Budget deficit', 'The amount by which government spending exceeds revenue in a year.'], ['Public debt', 'The total amount owed by the government from past borrowing.'], ['Crowding out', 'Government borrowing raising interest rates and reducing private investment.']],
  [
    { q: 'Public debt is 12,000 billion FCFA and GDP is 30,000 billion. Find the debt ratio and judge it against the CEMAC criterion.', steps: ['Ratio = 12,000 ÷ 30,000 × 100 = **40% of GDP**.', '**Below the 70% ceiling**, but what matters too is the cost of servicing it and the share owed in foreign currency.'] },
    { q: 'In a closed economy with MPC = 0.8, government spending and lump-sum taxes both rise by 100 billion FCFA. What happens to income?', steps: ['Spending multiplier = 1 ÷ 0.2 = 5: **+500**.', 'Tax multiplier = −MPC ÷ MPS = −0.8 ÷ 0.2 = −4: **−400**.', '**Net rise in income = 100 billion FCFA: the balanced budget multiplier is 1.**'] },
  ]),
];
