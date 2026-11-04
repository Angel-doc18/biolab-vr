// Extra questions for the Upper Sixth A Level Economics lessons (0725).
//
// Convention: the correct option is written first; options are shuffled when shown.

const Q = (q, a, why) => ({ q, a, why });

export const QUESTIONS_U6 = {
  // ---------- Term 1 ----------
  'aec-exam-1': [
    Q('Paper 3 of A Level Economics lasts:', ['1¾ hours', '3 hours', '1½ hours', '2½ hours'], 'Thursday 4 June, afternoon.'),
    Q('The Upper Sixth theory is planned to be finished by:', ['week 22', 'week 6', 'the first sequence', 'the day of the examination'], 'Term 3 is for drills and the mock.'),
    Q('Whether a devaluation works depends on a Lower Sixth idea:', ['price elasticity of demand', 'indifference curves', 'quasi-rent', 'the kinked demand curve'], 'The Marshall-Lerner condition.'),
    Q('Active revision means:', ['answering questions and drawing diagrams, not only reading', 'reading notes once', 'copying the textbook', 'highlighting only'], 'Retrieval practice.'),
  ],
  'aec-exam-2': [
    Q('"Explain" asks for:', ['reasons, cause and effect', 'a definition only', 'a judgement only', 'a list'], 'Why and how.'),
    Q('In a 3-hour paper worth 100 marks, a 25-mark question deserves about:', ['45 minutes', '25 minutes', '90 minutes', '60 minutes'], '1.8 minutes a mark.'),
    Q('Essay mark schemes reward mostly:', ['developed analysis and evaluation', 'the number of points listed', 'the length of the answer', 'neat handwriting'], 'Levels of response.'),
    Q('"Compare" requires:', ['similarities and differences treated point by point', 'two separate descriptions', 'only differences', 'only one case'], 'Point by point.'),
  ],
  'aec-income-1': [
    Q('In the two-sector model, firms pay households:', ['factor incomes: wages, rent, interest and profit', 'taxes', 'exports', 'transfers'], 'For factor services.'),
    Q('If injections exceed withdrawals, national income will:', ['rise', 'fall', 'stay the same', 'become zero'], 'Spending exceeds leakages.'),
    Q('The financial sector in the circular flow:', ['channels saving into loans for investment', 'collects taxes', 'buys exports', 'pays pensions'], 'Banks and markets.'),
    Q('With injections of 750 and withdrawals of 0.25Y, equilibrium income is:', ['3,000', '750', '187.5', '1,000'], '750 ÷ 0.25.'),
  ],
  'aec-income-2': [
    Q('The value added method avoids counting:', ['intermediate goods twice', 'services', 'exports', 'investment'], 'Double counting.'),
    Q('For Cameroon, GNP is usually below GDP because:', ['net property income from abroad is negative', 'depreciation is large', 'taxes are high', 'exports exceed imports'], 'Profits and interest paid abroad.'),
    Q('National income is:', ['NNP at factor cost', 'GDP at market prices', 'GNP at market prices', 'C + I'], 'After depreciation and taxes.'),
    Q('With C = 6,000, I = 1,500, G = 2,000, X = 2,500 and M = 3,000, GDP is:', ['9,000', '15,000', '12,000', '8,500'], 'C + I + G + (X − M).'),
  ],
  'aec-living-1': [
    Q('Real GDP equals:', ['nominal GDP ÷ GDP deflator × 100', 'nominal GDP × deflator', 'GDP ÷ population', 'GDP − exports'], 'Removes price changes.'),
    Q('GDP understates output in Cameroon mainly because of:', ['unrecorded informal and subsistence output', 'too many exports', 'double counting', 'high prices'], 'Not all output is recorded.'),
    Q('GDP per head may rise while most people are no better off if:', ['the gains go to a small group', 'income is shared equally', 'prices fall', 'population falls'], 'Distribution matters.'),
    Q('A weakness of GDP as a welfare measure is that it ignores:', ['leisure and pollution', 'output', 'spending', 'income'], 'Welfare is wider than output.'),
  ],
  'aec-living-2': [
    Q('The diagonal on a Lorenz diagram is the line of:', ['perfect equality', 'perfect inequality', 'average income', 'zero income'], 'Each share of households gets the same share of income.'),
    Q('The Gini coefficient is the area between the diagonal and the Lorenz curve divided by:', ['the whole area under the diagonal', 'the area under the Lorenz curve', '100', 'GDP'], 'From 0 to 1.'),
    Q('Lorenz points of 5, 15, 30, 55 and 100% give a Gini coefficient of about:', ['0.38', '0.62', '0.05', '0.83'], '(0.5 − 0.31) ÷ 0.5.'),
    Q('A policy that reduces inequality is:', ['a progressive income tax with transfers to the poor', 'a regressive tax', 'cutting free schooling', 'raising VAT on food'], 'Redistribution.'),
  ],
  'aec-keynes-1': [
    Q('Autonomous consumption is consumption that:', ['does not depend on income', 'rises with income', 'equals saving', 'is taxed'], 'The constant a in C = a + bY.'),
    Q('APC + APS equals:', ['1', '0', 'MPC', 'the multiplier'], 'Income is consumed or saved.'),
    Q('At incomes below break-even, saving is:', ['negative (dissaving)', 'zero', 'positive', 'equal to consumption'], 'Consumption exceeds income.'),
    Q('Poorer households usually have:', ['a higher MPC than richer ones', 'a lower MPC', 'no consumption', 'an MPS of 1'], 'They spend most extra income.'),
  ],
  'aec-keynes-2': [
    Q('Investment falls as the interest rate rises because:', ['fewer projects earn more than the cost of borrowing', 'saving falls', 'prices fall', 'exports rise'], 'Compare with the marginal efficiency of capital.'),
    Q('If C = 100 + 0.75Y and I = 100, equilibrium income is:', ['800', '400', '200', '1,000'], '200 ÷ 0.25.'),
    Q('The accelerator makes investment:', ['volatile, since it depends on changes in output', 'stable', 'independent of output', 'equal to saving always'], 'A slowdown in growth cuts investment.'),
    Q('The 45° line on the Keynesian cross shows points where:', ['spending equals output', 'saving equals zero', 'investment equals zero', 'prices are stable'], 'Equilibrium lies on it.'),
  ],
  'aec-multiplier-1': [
    Q('If MPS = 0.25, the multiplier in a closed economy without government is:', ['4', '0.25', '1.33', '25'], '1 ÷ 0.25.'),
    Q('Each round of the multiplier is smaller because:', ['part of each round leaks into withdrawals', 'prices rise', 'investment falls', 'taxes are abolished'], 'Leakages.'),
    Q('With MPS = 0.1, MPT = 0.2 and MPM = 0.2, a rise in exports of 60 raises income by:', ['120', '60', '600', '30'], 'k = 2.'),
    Q('The multiplier also works downward, so a fall in exports:', ['lowers income by a multiple of the fall', 'raises income', 'has no effect', 'lowers prices only'], 'Same process.'),
  ],
  'aec-multiplier-2': [
    Q('The deflationary gap is measured:', ['vertically, at full-employment income', 'horizontally, as the output shortfall', 'at zero income', 'on the price axis'], 'It is a shortfall of AD.'),
    Q('An inflationary gap is closed by:', ['cutting government spending or raising taxes', 'raising spending', 'cutting taxes', 'raising exports'], 'Contractionary fiscal policy.'),
    Q('If AD = 150 + 0.75Y and Yf = 1,000, the deflationary gap is:', ['100', '400', '600', '150'], 'AD at Yf = 900.'),
    Q('Fine-tuning demand is difficult in practice because of:', ['time lags and leakages into imports', 'too much information', 'no multiplier', 'fixed prices'], 'Policy acts late and partly abroad.'),
  ],
  'aec-money-1': [
    Q('Fisher’s equation of exchange was published in:', ['1911', '1936', '1776', '1958'], 'The Purchasing Power of Money.'),
    Q('The transactions demand for money rises with:', ['income', 'the interest rate', 'bond prices', 'saving only'], 'More spending needs more money.'),
    Q('In a liquidity trap:', ['more money does not lower the interest rate', 'interest rates are very high', 'money is useless', 'prices are fixed'], 'People hold any extra money.'),
    Q('With M = 2,000, V = 5 and T = 1,000, the price level P is:', ['10', '2', '5', '1,000'], 'MV ÷ T.'),
  ],
  'aec-money-2': [
    Q('The CEMAC convergence criteria set an inflation ceiling of:', ['3% a year', '10% a year', '1% a year', '7% a year'], 'Price stability.'),
    Q('A rise in the world price of fuel causes:', ['cost-push inflation', 'demand-pull inflation', 'deflation', 'no inflation'], 'Costs rise.'),
    Q('Cost-push inflation tends to:', ['raise prices and reduce output', 'raise prices and output', 'lower prices', 'raise output only'], 'AS shifts left.'),
    Q('With weights 40, 20, 25 and 15% and price indices 110, 120, 104 and 100, the CPI is:', ['109', '108.5', '434', '111'], '44 + 24 + 26 + 15.'),
  ],
  'aec-banking-1': [
    Q('Banks face a conflict between liquidity and:', ['profitability', 'saving', 'exports', 'taxes'], 'Loans earn more but are less liquid.'),
    Q('With a reserve ratio of 20%, 1,000,000 FCFA of new cash supports total deposits of:', ['5,000,000 FCFA', '200,000 FCFA', '1,200,000 FCFA', '20,000,000 FCFA'], '1 ÷ 0.2 = 5.'),
    Q('Credit creation is limited when:', ['people hold more cash instead of depositing it', 'banks lend more', 'reserves fall', 'borrowers are plentiful'], 'Cash leaks out of the banks.'),
    Q('The body that supervises banks in Central Africa is the:', ['COBAC', 'BEAC Monetary Policy Committee only', 'CNPS', 'INS'], 'Commission Bancaire de l’Afrique Centrale.'),
  ],
  'aec-banking-2': [
    Q('The BEAC’s headquarters are in:', ['Yaoundé', 'Douala', 'Libreville', 'N’Djamena'], 'Cameroon.'),
    Q('A cut in the BEAC’s policy rate is meant to:', ['make borrowing cheaper and raise spending', 'reduce lending', 'raise inflation targets', 'end the peg'], 'Loose monetary policy.'),
    Q('Selling securities to banks in open market operations:', ['drains liquidity and reduces lending', 'adds liquidity', 'raises reserves of banks', 'has no effect'], 'Banks pay with their reserves.'),
    Q('Monetary policy is weak in the CEMAC partly because:', ['many banks hold excess liquidity and much activity is informal', 'there is no central bank', 'interest rates float', 'the currency floats'], 'Transmission is weak.'),
  ],
  'aec-tax-1': [
    Q('The canon of convenience means taxes should be:', ['collected at a time and in a way convenient to the payer', 'low', 'equal for all', 'paid abroad'], 'For example tax withheld from wages.'),
    Q('An advantage of indirect taxes is that they are:', ['easy to collect and hard to evade at the point of sale', 'always progressive', 'impossible to pass on', 'paid only by the rich'], 'Collected by sellers.'),
    Q('On a good priced 10,000 FCFA before tax, VAT at 19.25% is:', ['1,925 FCFA', '1,750 FCFA', '175 FCFA', '19,250 FCFA'], '17.5% plus 10% of it.'),
    Q('A purpose of taxing tobacco heavily is to:', ['discourage a demerit good', 'raise its consumption', 'help exporters', 'lower prices'], 'And to raise revenue.'),
  ],
  'aec-tax-2': [
    Q('The average tax rate is:', ['total tax ÷ income', 'the tax on the last franc', 'the highest band rate', 'the VAT rate'], 'Tax ÷ Y.'),
    Q('Under a progressive tax with bands, the average rate is always:', ['below the top marginal rate', 'above the top marginal rate', 'equal to the lowest rate', 'zero'], 'Lower bands pull it down.'),
    Q('Exempting basic foods from VAT makes the tax:', ['less regressive', 'more regressive', 'proportional', 'a direct tax'], 'The poor spend more of their income on food.'),
    Q('Progressive taxes act as automatic stabilisers because:', ['tax revenue rises faster than income in a boom', 'they are fixed', 'they fall in a boom', 'they are paid once'], 'They restrain demand automatically.'),
  ],
  'aec-spending-1': [
    Q('Salaries of teachers are:', ['recurrent expenditure', 'capital expenditure', 'transfer payments', 'taxes'], 'Day-to-day running costs.'),
    Q('Pensions are an example of:', ['a transfer payment', 'capital expenditure', 'a tax', 'investment'], 'No output is bought.'),
    Q('The displacement effect describes public spending:', ['rising in crises and not falling back fully', 'falling in wars', 'staying constant', 'rising only with population'], 'Peacock and Wiseman (1961).'),
    Q('Wagner argued that state activity:', ['grows as economies develop and urbanise', 'shrinks with development', 'is fixed', 'depends on rainfall'], 'Wagner’s law.'),
  ],
  'aec-spending-2': [
    Q('A deficit is financed mainly by:', ['borrowing at home and abroad', 'cutting exports', 'raising imports', 'printing stamps'], 'It adds to the debt.'),
    Q('Cameroon reached the HIPC completion point in:', ['2006', '1994', '2009', '2020'], 'Much external debt was cancelled.'),
    Q('Public debt of 12,000 billion FCFA with GDP of 30,000 billion is:', ['40% of GDP', '25% of GDP', '250% of GDP', '4% of GDP'], '12,000 ÷ 30,000.'),
    Q('With MPC = 0.8, equal rises of 100 in G and lump-sum taxes raise income by:', ['100', '500', '400', '0'], 'The balanced budget multiplier is 1.'),
  ],

  // ---------- Term 2 ----------
  'aec-trade-1': [
    Q('If A makes 600 cocoa or 300 cloth and B makes 200 cocoa or 200 cloth, B has a comparative advantage in:', ['cloth', 'cocoa', 'both', 'neither'], 'B gives up 1 cocoa per cloth, A gives up 2.'),
    Q('Both countries gain from trade only if the terms of trade lie:', ['between the two opportunity cost ratios', 'outside them', 'at zero', 'at either country’s own ratio'], 'Each must get a better rate than at home.'),
    Q('An unrealistic assumption of the simple model is:', ['constant costs and no transport costs', 'two countries', 'two goods', 'trade between countries'], 'Real costs rise and transport is costly.'),
    Q('Comparative advantage can change over time through:', ['investment in skills, infrastructure and processing', 'nothing: it is fixed by nature', 'only by war', 'only by aid'], 'Advantages can be built.'),
  ],
  'aec-trade-2': [
    Q('A terms of trade index of 125 means:', ['export prices relative to import prices have risen 25% since the base year', 'export volume rose 25%', 'the trade balance is in surplus', 'imports fell 25%'], 'A price ratio.'),
    Q('The Prebisch-Singer thesis predicts that primary exporters’ terms of trade will:', ['deteriorate over the long run', 'improve steadily', 'stay constant', 'follow manufactures'], 'Demand for primary goods grows slowly.'),
    Q('An improvement in the terms of trade caused by higher costs may:', ['reduce export sales if demand is elastic', 'always raise export revenue', 'end all imports', 'lower export prices'], 'Elasticity matters.'),
    Q('The fall in oil prices from 2014 to 2016 caused Cameroon’s terms of trade to:', ['deteriorate', 'improve', 'stay the same', 'become 100'], 'Oil is a major export.'),
  ],
  'aec-bop-1': [
    Q('The visible balance records:', ['trade in goods', 'trade in services', 'investment', 'remittances'], 'The balance of trade.'),
    Q('Profits sent home by foreign-owned firms are recorded as:', ['primary income outflows on the current account', 'financial account inflows', 'capital transfers', 'exports of goods'], 'Investment income.'),
    Q('A devaluation is an example of:', ['an expenditure-switching policy', 'an expenditure-reducing policy', 'a supply-side policy only', 'a tax'], 'It changes relative prices.'),
    Q('With goods −400, services −500, primary income −300 and secondary income +250, the current account is:', ['−950', '−1,450', '−400', '+250'], 'Add the four parts.'),
  ],
  'aec-bop-2': [
    Q('Under a floating exchange rate, a rise in demand for a country’s exports tends to:', ['raise the value of its currency', 'lower its value', 'have no effect', 'fix the rate'], 'More demand for the currency.'),
    Q('The convertibility of the CFA franc is guaranteed by:', ['the French Treasury', 'the IMF', 'the World Bank', 'the African Union'], 'Through the operations account.'),
    Q('The J-curve shows that after a devaluation the current account:', ['first worsens, then improves', 'improves at once', 'never changes', 'always worsens'], 'Low short-run elasticities.'),
    Q('A machine costing 100 euros costs in FCFA:', ['65,595.70', '6,559.57', '655,957', '100,000'], '100 × 655.957.'),
  ],
  'aec-protection-1': [
    Q('A tariff raises the domestic price, so domestic production:', ['rises and imports fall', 'falls and imports rise', 'stays the same', 'stops'], 'Home firms are protected.'),
    Q('The World Trade Organization was founded in:', ['1995', '1947', '1961', '2021'], 'Successor to the GATT of 1947.'),
    Q('In the tariff example with world price 20 and tariff 10, imports fall from 60 to:', ['40', '30', '50', '70'], 'Demand 70 − supply 30.'),
    Q('An argument against protection is that it:', ['invites retaliation and protects inefficiency', 'lowers prices', 'raises choice', 'always creates jobs'], 'Lost gains from trade.'),
  ],
  'aec-protection-2': [
    Q('A free trade area differs from a customs union because it has no:', ['common external tariff', 'internal free trade', 'members', 'trade'], 'Each member keeps its own tariff.'),
    Q('CEMAC replaced:', ['UDEAC', 'ECOWAS', 'the AfCFTA', 'the WTO'], 'UDEAC dated from 1964.'),
    Q('Trade creation means:', ['dearer home production is replaced by cheaper imports from a partner', 'trade moves to a dearer supplier', 'tariffs rise', 'trade stops'], 'A gain.'),
    Q('A problem for trade within Central Africa is that members:', ['export similar primary products and have poor transport links', 'have too many roads', 'have no trade at all', 'use different currencies in CEMAC'], 'Little to sell each other.'),
  ],
  'aec-unemployment-1': [
    Q('By the ILO definition, an unemployed person is:', ['without work, available and actively seeking work', 'anyone without a salary', 'a student', 'a retired person'], 'All three conditions.'),
    Q('With a labour force of 11 million and 10.2 million employed, the unemployment rate is about:', ['7.3%', '8%', '0.8%', '93%'], '0.8 ÷ 11.'),
    Q('Seasonal unemployment is common in:', ['farming, tourism and building', 'banking', 'teaching', 'the civil service'], 'Work varies with the season.'),
    Q('A cost of unemployment is:', ['output lost, with the economy inside its PPC', 'higher tax revenue', 'faster growth', 'lower spending on benefits'], 'Resources unused.'),
  ],
  'aec-unemployment-2': [
    Q('The NAIRU is:', ['the rate of unemployment at which inflation does not accelerate', 'zero unemployment', 'the highest unemployment rate', 'the rate of wage growth'], 'The natural rate.'),
    Q('Lasting cuts in the natural rate of unemployment need:', ['supply-side policies such as training and mobility', 'more money printing', 'higher inflation', 'tariffs'], 'Demand policies work only temporarily.'),
    Q('Phillips’s data suggested wages would be stable at unemployment of about:', ['5½%', '1%', '10%', '25%'], 'British data, 1861 to 1957.'),
    Q('Pushing unemployment below the natural rate leads in the long run to:', ['higher inflation with unemployment back at the natural rate', 'permanently lower unemployment', 'deflation', 'no change'], 'Expectations adjust.'),
  ],
  'aec-population-1': [
    Q('Malthus’s positive checks on population include:', ['famine, disease and war', 'later marriage', 'birth control', 'migration'], 'Preventive checks slow births.'),
    Q('Boserup argued that population pressure:', ['drives farmers to more intensive methods', 'always causes famine', 'has no effect', 'reduces technology'], '1965.'),
    Q('A population growing at 2% a year doubles in about:', ['35 years', '70 years', '20 years', '140 years'], '70 ÷ 2.'),
    Q('A country is over-populated when:', ['output per head would rise if population were smaller', 'it has many people', 'birth rates are high', 'it has large towns'], 'Judged against resources.'),
  ],
  'aec-population-2': [
    Q('Cameroon’s high birth rate and falling death rate place it in the demographic transition at:', ['late stage 2 or early stage 3', 'stage 1', 'stage 4', 'stage 5'], 'Rapid growth.'),
    Q('With 42% aged 0 to 14, 55% aged 15 to 64 and 3% over 64, the dependency ratio is about:', ['82', '45', '55', '58'], '45 ÷ 55 × 100.'),
    Q('A pull factor in rural-urban migration is:', ['jobs and services in towns', 'lack of land in villages', 'insecurity in rural areas', 'poor rural roads'], 'Pull factors attract.'),
    Q('Remittances help the balance of payments because they are:', ['secondary income inflows on the current account', 'imports', 'capital outflows', 'taxes'], 'Money sent home.'),
  ],
  'aec-growth-1': [
    Q('The output gap is the difference between:', ['actual and potential output', 'exports and imports', 'saving and investment', 'GDP and GNP'], 'Inside or beyond capacity.'),
    Q('In g = s ÷ v, v stands for:', ['the capital-output ratio', 'the velocity of money', 'the value of exports', 'the volume of trade'], 'Capital per unit of output.'),
    Q('To grow 7% with a capital-output ratio of 4, saving must be:', ['28% of GDP', '11% of GDP', '1.75% of GDP', '3% of GDP'], '7 × 4.'),
    Q('A cost of rapid growth can be:', ['pollution and loss of forests', 'more tax revenue', 'more jobs', 'higher incomes'], 'Environmental damage.'),
  ],
  'aec-growth-2': [
    Q('The HDI is calculated as the:', ['geometric mean of the health, education and income indices', 'sum of GDP and literacy', 'average of exports', 'Gini coefficient'], 'A low score in one pulls it down.'),
    Q('With indices 0.662, 0.500 and 0.550, the HDI is about:', ['0.567', '0.571', '1.712', '0.182'], 'Cube root of 0.182.'),
    Q('Cameroon is in the UNDP’s group of:', ['medium human development', 'very high human development', 'high human development', 'no group'], 'HDI between 0.550 and 0.699.'),
    Q('A typical feature of a developing country is:', ['a large informal sector', 'a small primary sector', 'low birth rates', 'high capital per worker'], 'With a large primary sector.'),
  ],
  'aec-strategy-1': [
    Q('The East Asian economies grew fast mainly through:', ['export-led growth with heavy investment in education', 'closing their economies', 'relying on aid', 'exporting only raw materials'], 'Producing for world markets.'),
    Q('Processing cocoa at home instead of exporting beans means:', ['moving up the value chain', 'import substitution of cocoa', 'lower value added', 'leaving the market'], 'More value added at home.'),
    Q('An agriculture-led strategy focuses on:', ['raising farm productivity through seeds, roads and credit', 'closing farms', 'importing all food', 'heavy industry only'], 'Most of the poor work on farms.'),
    Q('Import substitution often led to shortages of:', ['foreign exchange for imported inputs', 'labour', 'land', 'consumers'], 'Machines and inputs still had to be imported.'),
  ],
  'aec-strategy-2': [
    Q('Vision 2035 aims to make Cameroon:', ['an emerging economy', 'a closed economy', 'a command economy', 'an oil-only economy'], 'Adopted in 2009.'),
    Q('Multilateral aid comes from:', ['international bodies such as the World Bank', 'one government only', 'private firms', 'households'], 'Many donors together.'),
    Q('Cameroon reached the HIPC decision point in:', ['2000', '1988', '2006', '2009'], 'The completion point followed in 2006.'),
    Q('A disadvantage of foreign direct investment is that:', ['profits may be sent abroad', 'it brings technology', 'it creates jobs', 'it raises exports'], 'Primary income outflows.'),
  ],
  'aec-methods-1': [
    Q('If real GDP rose 4% and population 3%, real GDP per head rose about:', ['1%', '7%', '4%', '12%'], '4 − 3.'),
    Q('Public debt as a percentage of GDP is an example of:', ['a ratio used for comparison', 'an index number', 'a nominal value', 'a growth rate'], 'Debt ÷ GDP.'),
    Q('When describing a trend, a strong answer states:', ['direction, size with figures, and turning points', 'only the title', 'only the latest figure', 'only the colour'], 'Precise description.'),
    Q('Correlation in data shows that two variables:', ['move together, without proving cause', 'cause each other', 'are equal', 'are unrelated'], 'Other factors may matter.'),
  ],
  'aec-methods-2': [
    Q('The first step in evaluating a policy against inflation is to:', ['diagnose whether it is demand-pull or cost-push', 'raise taxes', 'devalue', 'list all policies'], 'Remedy depends on cause.'),
    Q('In the CEMAC, the exchange rate is fixed, so Cameroon cannot:', ['devalue on its own to improve competitiveness', 'change taxes', 'change spending', 'train workers'], 'The peg is shared.'),
    Q('A policy conflict occurs when:', ['reaching one objective makes another harder', 'all objectives are met', 'there is no policy', 'policies agree'], 'For example growth and inflation.'),
    Q('An essay conclusion on fiscal policy should:', ['say under what conditions it works best', 'repeat the definition', 'introduce new data', 'be left out'], 'A conditional judgement.'),
  ],

  // ---------- Term 3 ----------
  'aec-drills-1': [
    Q('A common Paper 1 trap is reading price from:', ['the MC curve instead of the AR curve', 'the AR curve', 'the demand curve', 'the axis'], 'Monopoly price is on AR.'),
    Q('If TC is 400 at 20 units and 430 at 21, the MC of the 21st unit is:', ['30', '20.5', '430', '21.5'], '430 − 400.'),
    Q('The credit multiplier equals:', ['1 ÷ the reserve ratio', '1 ÷ MPC', 'the reserve ratio', 'MPS × MPC'], 'Banking leakages.'),
    Q('After a drill, errors should be sorted into:', ['did not know, misread and miscalculated', 'easy and hard', 'right and wrong only', 'long and short'], 'Each needs a different fix.'),
  ],
  'aec-drills-2': [
    Q('The mock examination should copy the real one in:', ['papers, times and conditions', 'nothing', 'only the hall', 'only the questions'], 'A rehearsal.'),
    Q('A permitted item to bring to the examination is:', ['a ruler for diagrams', 'a mobile phone', 'notes', 'a textbook'], 'Pens, pencils, ruler and permitted calculator.'),
    Q('Each key diagram should be practised until it can be drawn:', ['correctly in under two minutes', 'in half an hour', 'only once', 'without labels'], 'Speed and accuracy.'),
    Q('A student who ran out of time on Paper 2 should first:', ['plan minutes per question from the marks', 'learn new topics', 'write faster without planning', 'skip the data question'], 'Timing is the problem.'),
  ],
};
