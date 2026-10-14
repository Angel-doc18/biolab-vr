// Extra end-of-lesson questions for the Economics lessons, by lesson id. The
// correct option is written first; options are shuffled when shown.

const Q = (q, a, why) => ({ q, a, why });

export const LESSON_QUESTIONS = {
  // ---------- Form 4, term 1 ----------
  'ec-scarcity-4': [
    Q('Scarcity is a problem for:', ['everyone, rich and poor', 'only poor countries', 'only governments', 'nobody'], 'Wants always exceed resources.'),
    Q('Opportunity cost is measured in:', ['the alternative forgone', 'francs only', 'kilograms only', 'time only'], 'Real cost, not money cost.'),
    Q('A scale of preference helps a consumer to:', ['choose which wants to satisfy first', 'print money', 'avoid all choices', 'increase resources'], 'It ranks wants.'),
    Q('Who gave the definition of economics as the study of ends and scarce means with alternative uses?', ['Lionel Robbins', 'David Ricardo', 'Adam Smith', 'Karl Marx'], 'A classic definition.'),
  ],
  'ec-ppc-4': [
    Q('A PPC is usually bowed outward (concave) because:', ['opportunity cost rises as more of one good is produced', 'resources are unlimited', 'prices are fixed', 'technology never changes'], 'Resources are not equally suited to both goods.'),
    Q('A war that destroys factories shifts the PPC:', ['inward', 'outward', 'nowhere', 'upward only'], 'Productive capacity falls.'),
    Q('Moving along a PPC shows:', ['the opportunity cost of one good in terms of the other', 'economic growth', 'unemployment', 'inflation'], 'More of one means less of the other.'),
    Q('Points on the PPC represent:', ['efficient use of all resources', 'unemployment', 'impossible output', 'zero output'], 'Full and efficient use.'),
  ],
  'ec-questions-4': [
    Q('Using many workers and few machines is a:', ['labour-intensive method', 'capital-intensive method', 'command economy', 'subsidy'], 'Common where labour is plentiful.'),
    Q('"What to produce" concerns:', ['which goods and services and how much of each', 'who receives output', 'which machines to use', 'when to sell'], 'The choice of output.'),
    Q('The question of distribution is:', ['for whom to produce', 'how to produce', 'what to produce', 'where to produce'], 'Who gets the output.'),
    Q('In a traditional economy, the basic questions are answered mainly by:', ['custom and tradition', 'prices', 'a central plan', 'the stock market'], 'People do what their parents did.'),
  ],
  'ec-systems-4': [
    Q('Public goods such as defence are often under-provided in a:', ['free market economy', 'command economy', 'mixed economy', 'any planned system'], 'Firms cannot easily charge for them.'),
    Q('In a command economy, shortages often occur because:', ['planners misjudge what people want', 'prices are too high', 'there is too much competition', 'firms seek profit'], 'Plans are inflexible.'),
    Q('The profit motive is strongest in a:', ['free market economy', 'command economy', 'traditional economy', 'barter system'], 'Firms produce for profit.'),
    Q('The public sector of a mixed economy includes:', ['state schools, hospitals and public corporations', 'only private shops', 'only foreign firms', 'only households'], 'Owned by the state.'),
  ],
  'ec-land-4': [
    Q('Diminishing returns occur when:', ['more labour on a fixed area of land adds less and less output', 'land grows larger', 'rent falls to zero', 'prices rise'], 'A feature of a fixed factor.'),
    Q('Land is occupationally mobile because:', ['it can change from one use to another', 'it can be moved to another town', 'it is man-made', 'it is unlimited'], 'Farm to factory site, for example.'),
    Q('Which is NOT land in economics?', ['a delivery van', 'a forest', 'a river', 'a mineral deposit'], 'A van is capital.'),
    Q('Bauxite deposits in Cameroon are found at:', ['Minim-Martap and Ngaoundal', 'Kribi beach', 'Lake Chad', 'Mount Cameroon summit'], 'In the Adamawa region.'),
  ],
  'ec-labour-4': [
    Q('Specialisation requires:', ['exchange', 'barter only', 'no money', 'no markets'], 'Specialists must trade to get other goods.'),
    Q('A factor that raises the efficiency of labour is:', ['better education and training', 'longer working hours without rest', 'poor nutrition', 'outdated tools'], 'Skills and health matter.'),
    Q('Regional specialisation means:', ['an area concentrating on certain products', 'one worker doing one task', 'the state planning production', 'no trade'], 'Such as cocoa in the South.'),
    Q('A risk of narrow specialisation for workers is:', ['unemployment if their task is mechanised', 'higher output', 'more skill', 'saved time'], 'They may lack other skills.'),
  ],
  'ec-population-4': [
    Q('The dependency ratio compares:', ['dependants with people of working age', 'men with women', 'towns with villages', 'exports with imports'], 'A high ratio burdens workers.'),
    Q('Under-population exists when:', ['more people would raise output per head', 'output per head is falling', 'there is overcrowding', 'there are too many workers'], 'Resources are under-used.'),
    Q('The optimum population can rise when:', ['new technology or resources become available', 'birth rates fall', 'schools close', 'land is lost'], 'More resources support more people.'),
    Q('A young population structure means:', ['a high proportion of children and young people', 'many retired people', 'no children', 'few workers ever'], 'Typical of Cameroon.'),
  ],
  'ec-capital-4': [
    Q('Social capital includes:', ['roads, schools and hospitals owned by the community', 'a private lorry', 'shares in a company', 'raw materials'], 'Owned collectively.'),
    Q('Capital accumulation requires people to:', ['give up some present consumption', 'spend all income', 'stop working', 'avoid banks'], 'Saving funds investment.'),
    Q('Fuel used by a factory is:', ['circulating capital', 'fixed capital', 'land', 'enterprise'], 'Used up in production.'),
    Q('Capital raises the productivity of labour by:', ['giving workers better tools and machines', 'reducing wages', 'increasing rent', 'removing land'], 'More output per worker.'),
  ],
  'ec-entrepreneur-4': [
    Q('An insurable risk is:', ['fire or theft', 'a change in fashion', 'a fall in demand', 'a new competitor'], 'It can be calculated.'),
    Q('Innovation by an entrepreneur means:', ['introducing new products or methods', 'avoiding change', 'paying rent', 'collecting taxes'], 'New ideas drive growth.'),
    Q('If a business fails, losses fall mainly on:', ['the entrepreneur', 'the customers', 'the government always', 'the workers only'], 'The risk-bearer.'),
    Q('A market trader buying stock before knowing what will sell is:', ['bearing risk', 'paying rent', 'earning interest', 'avoiding risk'], 'An entrepreneurial function.'),
  ],
  'ec-sole-4': [
    Q('A disadvantage of a sole proprietorship is:', ['limited capital', 'quick decisions', 'keeping all profits', 'personal contact'], 'Hard to raise large funds.'),
    Q('A partnership may end when:', ['a partner dies or withdraws', 'profits rise', 'a customer complains', 'prices change'], 'It lacks continuity.'),
    Q('An advantage of a partnership over a sole proprietorship is:', ['more capital and shared skills', 'limited liability for all', 'no disagreements', 'a single decision-maker'], 'Partners pool resources.'),
    Q('Which owner risks losing a personal house to pay business debts?', ['a sole trader', 'a shareholder in a Plc', 'a member of a cooperative with limited liability', 'a bank depositor'], 'Unlimited liability.'),
  ],
  'ec-companies-4': [
    Q('Owners of a company are called:', ['shareholders', 'partners', 'sole traders', 'directors only'], 'They own shares.'),
    Q('A company continues even when shareholders change because it is:', ['a separate legal person', 'owned by the state', 'a partnership', 'a cooperative'], 'It has its own legal identity.'),
    Q('Credit unions are an example of:', ['cooperatives', 'public corporations', 'sole proprietorships', 'monopolies'], 'Owned by their members.'),
    Q('A disadvantage of a public limited company is:', ['owners may lose control to managers', 'small capital', 'unlimited liability', 'no continuity'], 'Separation of ownership and control.'),
  ],
  'ec-parastatals-4': [
    Q('Which is a Cameroonian public corporation?', ['CAMTEL', 'a roadside kiosk', 'a family farm', 'a private school club'], 'The state telecommunications company.'),
    Q('A natural monopoly is often owned by the state because:', ['one supplier is most efficient and must be controlled', 'it makes no sales', 'it is illegal', 'it has many competitors'], 'Water and power networks.'),
    Q('A criticism of parastatals is:', ['inefficiency and political interference', 'too much competition', 'too much profit for owners', 'too many shareholders'], 'Losses fall on taxpayers.'),
    Q('Nationalisation is:', ['the state taking ownership of private firms', 'selling state firms', 'creating partnerships', 'exporting goods'], 'Opposite of privatisation.'),
  ],
  'ec-location-4': [
    Q('Cement factories are often located near:', ['limestone deposits or large markets', 'beaches only', 'forest reserves', 'airports only'], 'Raw material or market.'),
    Q('External economies are:', ['cost savings from being near similar firms', 'costs of exporting', 'taxes on firms', 'losses abroad'], 'Shared services and skilled labour.'),
    Q('A footloose industry is:', ['not tied to a particular location', 'always near raw materials', 'always near power', 'illegal'], 'Such as many service firms.'),
    Q('Cotton ginneries in Cameroon are concentrated around:', ['Garoua, in the cotton zone', 'Kribi', 'Limbe', 'Bertoua'], 'Near the raw material.'),
  ],
  'ec-demand-4': [
    Q('Effective demand is desire backed by:', ['the ability to pay', 'advertising', 'supply', 'law'], 'Money to buy.'),
    Q('The substitution effect of a price fall makes the good:', ['cheaper relative to substitutes', 'dearer', 'unavailable', 'inferior'], 'Buyers switch towards it.'),
    Q('"Ceteris paribus" means:', ['other things being equal', 'prices are fixed', 'supply equals demand', 'demand is zero'], 'Only one factor changes.'),
    Q('Market demand is obtained by:', ['adding individual demands at each price', 'averaging prices', 'multiplying supply', 'subtracting costs'], 'Horizontal summation.'),
  ],
  'ec-demandshift-4': [
    Q('A rise in the price of petrol causes the demand for cars to:', ['fall (shift left)', 'rise (shift right)', 'move along the curve', 'stay unchanged'], 'Complements.'),
    Q('A Veblen good is demanded more when its price:', ['rises, because it signals status', 'falls', 'is zero', 'is fixed'], 'An exception to the law of demand.'),
    Q('Expectations of a future price rise usually make present demand:', ['rise', 'fall', 'disappear', 'stay fixed'], 'People buy before prices rise.'),
    Q('A contraction of demand is caused by:', ['a rise in the good’s own price', 'a fall in income', 'a change in tastes', 'a fall in population'], 'Movement up the curve.'),
  ],

  // ---------- Form 4, terms 2 and 3 ----------
  'ec-supply-4': [
    Q('Supply means the quantity producers are:', ['willing and able to sell at each price', 'able to produce in theory', 'forced to sell', 'buying'], 'Willing and able.'),
    Q('A higher price encourages more supply mainly because:', ['production becomes more profitable', 'costs fall', 'demand disappears', 'taxes rise'], 'The profit motive.'),
    Q('Market supply is found by:', ['adding the supplies of all firms at each price', 'averaging firms', 'multiplying demand', 'subtracting costs'], 'Horizontal summation.'),
    Q('On a supply graph, quantity is on the:', ['horizontal axis', 'vertical axis', 'title', 'key'], 'Price is vertical.'),
  ],
  'ec-supplyshift-4': [
    Q('A rise in wages in the bakery industry shifts the supply of bread:', ['to the left', 'to the right', 'nowhere', 'along the curve'], 'Higher costs.'),
    Q('More firms entering a market shifts supply:', ['to the right', 'to the left', 'nowhere', 'upward only'], 'More is supplied at each price.'),
    Q('An increase in supply is shown by a curve moving:', ['to the right', 'to the left', 'up the same curve', 'off the graph'], 'More at every price.'),
    Q('A fall in the price of the good itself causes:', ['a contraction of supply', 'an increase in supply', 'a shift right', 'a shift of demand'], 'Movement down the curve.'),
  ],
  'ec-equilibrium-4': [
    Q('Excess supply leads sellers to:', ['lower prices', 'raise prices', 'stop producing forever', 'ignore stocks'], 'To clear unsold goods.'),
    Q('If demand falls and supply is unchanged, equilibrium quantity:', ['falls', 'rises', 'stays the same', 'doubles'], 'And price falls.'),
    Q('If supply falls and demand is unchanged, equilibrium price:', ['rises', 'falls', 'stays the same', 'becomes zero'], 'And quantity falls.'),
    Q('At equilibrium, there is:', ['no shortage and no surplus', 'a shortage', 'a surplus', 'no trade'], 'The market clears.'),
  ],
  'ec-pricecontrols-4': [
    Q('A price ceiling is another name for a:', ['maximum price', 'minimum price', 'tariff', 'subsidy'], 'Prices may not rise above it.'),
    Q('A minimum price set below equilibrium has:', ['no effect', 'a big surplus', 'a shortage', 'a black market'], 'The market price is already above it.'),
    Q('Rationing may be used to deal with:', ['shortages caused by a maximum price', 'surpluses', 'inflation only', 'exports'], 'Sharing scarce goods.'),
    Q('A guaranteed minimum price for farmers may lead to:', ['surplus output that the state must buy or store', 'shortages', 'lower farm incomes', 'no change'], 'Supply exceeds demand.'),
  ],
  'ec-ped-4': [
    Q('Demand for a good with many close substitutes tends to be:', ['elastic', 'inelastic', 'perfectly inelastic', 'zero'], 'Buyers switch easily.'),
    Q('A horizontal demand curve is:', ['perfectly elastic', 'perfectly inelastic', 'unitary', 'inelastic'], 'Infinite elasticity.'),
    Q('If PED = 1, a price change leaves total revenue:', ['unchanged', 'higher', 'lower', 'zero'], 'Unitary elasticity.'),
    Q('Demand tends to become more elastic:', ['in the long run', 'when there are no substitutes', 'for necessities', 'for addictive goods'], 'Buyers find alternatives over time.'),
  ],
  'ec-yedxed-4': [
    Q('A YED of +2 indicates:', ['a luxury good', 'an inferior good', 'a necessity with YED below 1', 'unrelated goods'], 'Demand rises faster than income.'),
    Q('Tea and sugar usually have a cross elasticity that is:', ['negative', 'positive', 'zero', 'infinite'], 'They are complements.'),
    Q('Two goods with a cross elasticity of zero are:', ['unrelated', 'substitutes', 'complements', 'inferior'], 'One price does not affect the other.'),
    Q('Income elasticity helps firms to:', ['forecast sales as incomes change', 'set taxes', 'print money', 'count population'], 'Planning for growth.'),
  ],
  'ec-pes-4': [
    Q('Holding large stocks makes supply:', ['more elastic', 'less elastic', 'perfectly inelastic', 'zero'], 'Firms can respond quickly.'),
    Q('Supply is usually more elastic in the:', ['long run', 'momentary period', 'first hour', 'dry season only'], 'Firms can expand capacity.'),
    Q('A PES of 0.4 means supply is:', ['inelastic', 'elastic', 'unitary', 'perfectly elastic'], 'Less than 1.'),
    Q('Inelastic supply of farm products explains why:', ['their prices fluctuate sharply', 'their prices never change', 'demand is perfectly elastic', 'there is no trade'], 'Price does the adjusting.'),
  ],
  'ec-marketstructures-4': [
    Q('In the long run, firms in perfect competition earn:', ['normal profit', 'supernormal profit', 'losses always', 'no revenue'], 'Free entry removes extra profit.'),
    Q('A patent creates a barrier to entry because it:', ['gives one firm the legal right to make a product', 'lowers costs for all', 'encourages entry', 'sets a maximum price'], 'A legal monopoly.'),
    Q('A monopolist is a:', ['price maker', 'price taker', 'perfect competitor', 'buyer only'], 'It can set price or output.'),
    Q('Governments regulate monopolies to:', ['protect consumers from high prices', 'raise prices', 'reduce competition', 'end trade'], 'Public interest.'),
  ],
  'ec-barter-4': [
    Q('Money as a standard of deferred payment allows:', ['borrowing now and repaying later', 'only barter', 'no loans', 'no prices'], 'Debts can be measured.'),
    Q('Divisibility of money means it can be:', ['split into smaller units', 'carried easily', 'stored for years', 'accepted by all'], 'For small purchases.'),
    Q('Mobile money is an example of:', ['a modern form of money for payments', 'barter', 'a tax', 'a commodity good'], 'Widely used in Cameroon.'),
    Q('A problem of barter with livestock is:', ['indivisibility', 'too much divisibility', 'portability', 'durability'], 'A goat cannot be split.'),
  ],
  'ec-banks-4': [
    Q('The BEAC has its headquarters in:', ['Yaoundé', 'Bangui', 'Paris', 'Douala'], 'Central bank of the CEMAC.'),
    Q('COBAC is responsible for:', ['supervising banks in the CEMAC', 'issuing currency', 'collecting taxes', 'running elections'], 'Banking supervision.'),
    Q('Credit creation by commercial banks:', ['increases the money supply', 'reduces deposits to zero', 'is illegal', 'only happens at the BEAC'], 'Loans create new deposits.'),
    Q('Microfinance institutions mainly serve:', ['small savers and borrowers', 'only governments', 'only foreign firms', 'only large corporations'], 'Financial inclusion.'),
  ],
  'ec-calcs-4': [
    Q('Price falls from 500 to 400 FCFA. The percentage change in price is:', ['−20%', '−25%', '−100%', '+20%'], '−100 ÷ 500 × 100.'),
    Q('Quantity rises from 40 to 50 units. The percentage change is:', ['+25%', '+20%', '+10%', '+50%'], '10 ÷ 40 × 100.'),
    Q('Using the two figures above, PED is:', ['1.25 (elastic)', '0.8 (inelastic)', '1 (unitary)', '0'], '25 ÷ 20, ignoring the sign.'),
    Q('The last step in any economics calculation should be to:', ['interpret the answer', 'erase the working', 'round to zero', 'change the units'], 'Say what it means.'),
  ],
  'ec-datareading-4': [
    Q('A rise from 20,000 to 26,000 is a rise of:', ['30%', '6%', '23%', '60%'], '6,000 ÷ 20,000 × 100.'),
    Q('A "fluctuating" trend means the data:', ['rises and falls irregularly', 'rises steadily', 'falls steadily', 'never changes'], 'Ups and downs.'),
    Q('When quoting data, you should always include:', ['the units', 'your opinion only', 'colours', 'no numbers'], 'FCFA, kg, %, millions.'),
    Q('A new curve to the left of the old supply curve shows:', ['a decrease in supply', 'an increase in supply', 'a movement along', 'a rise in demand'], 'Less at each price.'),
  ],

  // ---------- Form 5, term 1 ----------
  'ec-gceformat-5': [
    Q('Economics Paper 1 lasts:', ['1½ hours', '2½ hours', '3 hours', '1 hour'], 'Multiple choice.'),
    Q('Section B of the scheme’s Paper 2 consists of:', ['essays', 'data response', 'multiple choice', 'a practical'], 'Section A is data response.'),
    Q('Which skill is tested by "Draw a diagram to show…"?', ['correctly labelled diagrams', 'translation', 'map reading', 'spelling'], 'Diagram skills.'),
    Q('Form 4 microeconomics topics at the GCE are:', ['examined too', 'not examined', 'optional', 'only oral'], 'The syllabus covers both years.'),
  ],
  'ec-recall-5': [
    Q('Microeconomics studies:', ['individual markets, firms and households', 'the whole economy', 'only government', 'only trade'], 'The small scale.'),
    Q('A rise in world oil prices can cause, at the macro level:', ['cost-push inflation', 'deflation always', 'lower costs', 'more unemployment only'], 'Costs rise across the economy.'),
    Q('If demand and supply both increase, equilibrium quantity:', ['rises', 'falls', 'stays the same', 'is zero'], 'Price is uncertain.'),
    Q('PED greater than 1 means demand is:', ['elastic', 'inelastic', 'unitary', 'perfectly inelastic'], 'Responsive.'),
  ],
  'ec-circularflow-5': [
    Q('In the two-sector model, households receive from firms:', ['income for factor services', 'taxes', 'imports', 'subsidies only'], 'Wages, rent, interest, profit.'),
    Q('Equilibrium national income occurs where:', ['injections equal withdrawals', 'exports equal zero', 'saving is zero', 'taxes equal zero'], 'I + G + X = S + T + M.'),
    Q('Saving is a withdrawal because:', ['income saved is not spent on domestic output', 'it adds to spending', 'it is taxed', 'it is exported'], 'It leaves the flow.'),
    Q('A closed economy has no:', ['foreign trade', 'households', 'firms', 'money'], 'No exports or imports.'),
  ],
  'ec-measuring-5': [
    Q('GDP at factor cost equals GDP at market prices minus:', ['indirect taxes plus subsidies', 'depreciation', 'exports', 'transfer payments'], 'Removes the effect of taxes and subsidies.'),
    Q('Net factor income from abroad is negative when:', ['more income is paid to foreigners than received from abroad', 'exports are high', 'there is no trade', 'GDP is zero'], 'GNP is then below GDP.'),
    Q('The income method adds:', ['wages, rent, interest and profit', 'C + I + G + (X − M)', 'value added by sectors', 'taxes only'], 'Factor incomes.'),
    Q('Value added by a firm equals:', ['output value minus bought-in inputs', 'total sales', 'profit only', 'wages only'], 'Avoids double counting.'),
  ],
  'ec-nidifficulties-5': [
    Q('Cameroon’s national accounts are compiled by the:', ['National Institute of Statistics (INS)', 'BEAC only', 'CONAC', 'ELECAM'], 'Using surveys and estimates.'),
    Q('Which should be EXCLUDED from national income?', ['student scholarships', 'teachers’ salaries', 'farmers’ sales', 'company profits'], 'A transfer payment.'),
    Q('Tax evasion makes national income figures:', ['understated', 'overstated', 'perfect', 'irrelevant'], 'Hidden income is not recorded.'),
    Q('Valuing government services is difficult because they are:', ['not sold at market prices', 'too cheap', 'exported', 'illegal'], 'Usually valued at cost.'),
  ],
  'ec-percapita-5': [
    Q('Purchasing power parity adjustments are used to:', ['compare incomes allowing for price differences', 'calculate taxes', 'measure population', 'set interest rates'], 'Better international comparisons.'),
    Q('Life expectancy is part of the:', ['Human Development Index', 'CPI', 'balance of payments', 'budget'], 'HDI includes health.'),
    Q('A rise in GDP per head with growing inequality may mean:', ['most people are no better off', 'everyone is richer', 'poverty disappears', 'prices fall'], 'Averages hide distribution.'),
    Q('Per capita income ignores:', ['leisure and quality of life', 'national income', 'population', 'currency'], 'Welfare is wider than income.'),
  ],
  'ec-budget-5': [
    Q('Cameroon’s budget is prepared mainly by the:', ['Ministry of Finance', 'BEAC', 'Ministry of Sports', 'CEMAC Commission'], 'Then passed by Parliament.'),
    Q('Grants from foreign governments are:', ['non-tax revenue', 'direct taxes', 'indirect taxes', 'expenditure'], 'Revenue that is not taxation.'),
    Q('Using the budget to influence the economy is called:', ['fiscal policy', 'monetary policy', 'trade policy', 'price control'], 'Taxes and spending.'),
    Q('Interest paid on government debt is:', ['recurrent expenditure', 'capital expenditure', 'tax revenue', 'non-tax revenue'], 'It recurs each year.'),
  ],
  'ec-taxation-5': [
    Q('VAT on most goods in Cameroon is charged at:', ['19.25%', '5%', '50%', '0%'], 'Including the council surcharge.'),
    Q('An excise duty is a tax on:', ['specific goods such as beer and tobacco', 'income', 'land', 'imports only'], 'An indirect tax.'),
    Q('The canon of convenience means a tax should be:', ['easy and convenient to pay', 'expensive to collect', 'secret', 'paid at random times'], 'Adam Smith’s canon.'),
    Q('Indirect taxes are often regressive because:', ['the poor spend a larger share of their income', 'the rich pay more', 'they are based on income', 'they are refunded'], 'Spending share is higher.'),
  ],
  'ec-spending-5': [
    Q('Building a new hospital is:', ['capital expenditure', 'recurrent expenditure', 'tax revenue', 'a transfer'], 'A long-lasting asset.'),
    Q('A surplus budget may be used to:', ['cool an overheating economy or repay debt', 'stimulate a recession', 'raise unemployment deliberately', 'end taxes'], 'Withdraws money from the flow.'),
    Q('A budget deficit must be financed by:', ['borrowing', 'surplus revenue', 'cutting exports', 'nothing'], 'Internal or external loans.'),
    Q('The CEMAC sets convergence criteria to:', ['keep deficits, debt and inflation within limits', 'end trade', 'raise inflation', 'abolish budgets'], 'Coordinated discipline.'),
  ],
  'ec-debt-5': [
    Q('Treasury bonds sold to local banks create:', ['internal debt', 'external debt', 'exports', 'a budget surplus'], 'Borrowed at home.'),
    Q('Debt service means:', ['paying interest and repaying principal', 'cancelling debt', 'printing money', 'collecting taxes'], 'The cost of debt.'),
    Q('Borrowing can pay for itself when it finances:', ['productive investment such as roads and power', 'luxury consumption', 'only salaries', 'nothing'], 'Higher future output.'),
    Q('HIPC stands for:', ['Heavily Indebted Poor Countries', 'High Income Private Companies', 'Health and Insurance Programme', 'Home Industry Price Control'], 'A debt relief initiative.'),
  ],
  'ec-cpi-5': [
    Q('The base year of a price index has a value of:', ['100', '0', '1', '1,000'], 'Other years are compared with it.'),
    Q('Weights in the CPI reflect:', ['the share of household spending on each item', 'the weight of goods in kilograms', 'the number of shops', 'the colour of goods'], 'Important items count more.'),
    Q('CPI 100 in 2023 and 108 in 2024 means inflation of:', ['8%', '108%', '0.8%', '18%'], '8 ÷ 100 × 100.'),
    Q('The CEMAC inflation target is a maximum of:', ['3% a year', '10% a year', '0%', '20% a year'], 'A convergence criterion.'),
  ],
  'ec-inflationtypes-5': [
    Q('Imported inflation is caused by:', ['rising prices of imported goods', 'falling wages', 'lower taxes', 'more exports'], 'World prices feed through.'),
    Q('Inflation tends to benefit:', ['borrowers', 'savers', 'pensioners', 'people on fixed wages'], 'Debts lose real value.'),
    Q('A supply-side remedy for inflation is to:', ['raise production and productivity', 'print more money', 'raise import costs', 'cut output'], 'More goods ease prices.'),
    Q('Raising interest rates reduces inflation by:', ['reducing borrowing and spending', 'increasing borrowing', 'raising wages', 'printing money'], 'Demand falls.'),
  ],
  'ec-labourforce-5': [
    Q('A student not looking for work is:', ['economically inactive', 'unemployed', 'employed', 'underemployed'], 'Not in the labour force.'),
    Q('The labour force equals:', ['the employed plus the unemployed', 'the whole population', 'the employed only', 'the working-age population'], 'Active population.'),
    Q('Why can the unemployment rate understate the problem in Cameroon?', ['many people are underemployed in the informal sector', 'everyone is employed', 'there is no informal sector', 'data are perfect'], 'Underemployment is hidden.'),
    Q('Working age is usually defined as:', ['15 to 64 years', '5 to 15 years', '65 and over', '0 to 100'], 'A common convention.'),
  ],
  'ec-unemploymenttypes-5': [
    Q('Unemployment caused by a recession is:', ['cyclical', 'seasonal', 'frictional', 'structural'], 'Demand-deficient.'),
    Q('Brain drain is:', ['the emigration of skilled people', 'a type of tax', 'a fall in exports', 'an illness'], 'Skills leave the country.'),
    Q('The National Employment Fund (FNE) was created in:', ['1990', '1960', '2010', '1972'], 'To help job seekers.'),
    Q('Vocational training is a remedy mainly for:', ['structural unemployment', 'seasonal unemployment', 'frictional unemployment only', 'inflation'], 'It matches skills to jobs.'),
  ],
  'ec-tradebasis-5': [
    Q('Which is a major Cameroonian export?', ['cocoa', 'aircraft', 'computers', 'snow'], 'Along with coffee, timber, oil, bananas, cotton.'),
    Q('A risk of trade for countries exporting few raw materials is:', ['unstable export prices', 'too much choice', 'cheaper imports', 'more technology'], 'Earnings fluctuate.'),
    Q('Foreign exchange is needed to:', ['pay for imports', 'pay local wages', 'collect local taxes', 'measure population'], 'Imports are paid in foreign currency.'),
    Q('Economies of scale from trade arise because firms:', ['produce for larger markets at lower average cost', 'produce less', 'stop exporting', 'pay more tax'], 'Bigger output, lower unit cost.'),
  ],
  'ec-advantage-5': [
    Q('The terms of trade index is calculated as:', ['export price index ÷ import price index × 100', 'exports − imports', 'imports ÷ exports', 'GDP ÷ population'], 'Relative prices.'),
    Q('A fall in world cocoa prices makes Cameroon’s terms of trade:', ['worse', 'better', 'unchanged', 'infinite'], 'Exports buy fewer imports.'),
    Q('Comparative advantage shows trade can benefit:', ['both countries, even if one is better at everything', 'only the richer country', 'only the poorer country', 'neither country'], 'Ricardo’s insight.'),
    Q('A limit of the theory of comparative advantage is:', ['transport costs and trade barriers', 'too much specialisation always helps', 'no limits exist', 'it ignores money only'], 'Real-world frictions.'),
  ],

  // ---------- Form 5, terms 2 and 3 ----------
  'ec-bop-5': [
    Q('Foreign direct investment in a new factory is recorded in the:', ['financial account', 'current account', 'balance of trade', 'budget'], 'An investment flow.'),
    Q('Tourism earnings are part of:', ['trade in services (invisibles)', 'trade in goods', 'the capital account', 'secondary income'], 'Services sold to visitors.'),
    Q('The CFA franc was devalued against the French franc in:', ['1994', '1960', '2002', '1972'], 'By half, in January 1994.'),
    Q('Expenditure-reducing policies correct a deficit by:', ['lowering total demand, so imports fall', 'raising imports', 'devaluing the currency', 'banning exports'], 'Less spending overall.'),
  ],
  'ec-protection-5': [
    Q('The infant industry argument says protection should be:', ['temporary, until the industry can compete', 'permanent', 'never used', 'only for old industries'], 'Young firms need time.'),
    Q('Retaliation means:', ['other countries imposing barriers in return', 'removing all tariffs', 'subsidising imports', 'joining a union'], 'A trade war risk.'),
    Q('A subsidy to exporters helps them by:', ['lowering their costs so they can sell more cheaply', 'raising their prices', 'banning their goods', 'taxing them'], 'More competitive abroad.'),
    Q('An argument against protection is that it:', ['raises prices for consumers', 'creates competition', 'lowers prices', 'increases choice'], 'Consumers pay more.'),
  ],
  'ec-cemac-5': [
    Q('The CEMAC replaced the older:', ['UDEAC', 'OAU', 'ECOWAS', 'League of Nations'], 'Customs union of Central Africa.'),
    Q('A common market adds to a customs union:', ['free movement of labour and capital', 'a common currency only', 'tariffs between members', 'nothing'], 'Factors move freely.'),
    Q('The Development Bank of Central African States (BDEAC) is based in:', ['Brazzaville', 'Yaoundé', 'Bangui', 'Libreville'], 'Finances regional projects.'),
    Q('An obstacle to trade within the CEMAC is:', ['poor transport links between members', 'too many roads', 'a common currency', 'no borders'], 'Infrastructure is weak.'),
  ],
  'ec-afcfta-5': [
    Q('The headquarters of ECOWAS is in:', ['Abuja', 'Lagos', 'Accra', 'Dakar'], 'Nigeria.'),
    Q('Which countries left ECOWAS in 2025?', ['Mali, Burkina Faso and Niger', 'Ghana, Togo and Benin', 'Nigeria, Senegal and Gambia', 'Cameroon, Chad and Gabon'], 'They formed their own alliance.'),
    Q('Trading under the AfCFTA began on:', ['1 January 2021', '1 January 2018', '1 January 1975', '1 January 1994'], 'After the 2018 agreement.'),
    Q('Cameroon belongs to:', ['the CEMAC and ECCAS, not ECOWAS', 'ECOWAS only', 'no regional bloc', 'the European Union'], 'Central African blocs.'),
  ],
  'ec-mcq-5': [
    Q('If a price rise leaves total revenue unchanged, demand is:', ['unitary elastic', 'elastic', 'inelastic', 'perfectly inelastic'], 'PED = 1.'),
    Q('Demand up and supply up: which is certain?', ['quantity rises', 'price rises', 'price falls', 'quantity falls'], 'Price depends on the size of the shifts.'),
    Q('Which is an injection?', ['government spending', 'saving', 'imports', 'taxation'], 'Spending added to the flow.'),
    Q('About how long should you spend on each Paper 1 question?', ['about one and a half minutes', 'ten minutes', 'ten seconds', 'thirty minutes'], 'Time to check at the end.'),
  ],
  'ec-graphs-5': [
    Q('A steep demand curve suggests demand is relatively:', ['inelastic', 'elastic', 'perfectly elastic', 'unitary'], 'Quantity changes little.'),
    Q('Dotted lines from the equilibrium point to the axes show:', ['the equilibrium price and quantity', 'a shift', 'a tax', 'a quota'], 'P1 and Q1.'),
    Q('A maximum price is drawn as a horizontal line:', ['below the equilibrium price', 'above the equilibrium price', 'on the quantity axis', 'nowhere'], 'To be effective.'),
    Q('An inward shift of the PPC shows:', ['a fall in productive capacity', 'economic growth', 'efficiency', 'more resources'], 'Such as after a disaster.'),
  ],
  'ec-dataresponse-5': [
    Q('GDP rose from 18,000 to 19,260. The growth rate is:', ['7%', '1,260%', '0.7%', '19%'], '1,260 ÷ 18,000 × 100.'),
    Q('The number of points to give in a data-response part is suggested by:', ['the marks allocated', 'the length of the data', 'the colour of the table', 'nothing'], 'Marks guide the answer.'),
    Q('A good data-response explanation:', ['quotes figures and uses theory', 'ignores the data', 'only defines terms', 'copies the table'], 'Data plus theory.'),
    Q('Before answering, you should check the data’s:', ['title, units and period', 'font', 'printer', 'paper size'], 'Context matters.'),
  ],
  'ec-essays-5': [
    Q('The first step in an economics essay is usually to:', ['define the key terms', 'conclude', 'draw a cartoon', 'list unrelated facts'], 'Shows understanding.'),
    Q('Applying theory means:', ['using it to explain a real situation, such as Cameroon’s economy', 'memorising it', 'ignoring examples', 'drawing only'], 'Real examples earn marks.'),
    Q('A 12-mark essay part usually needs about:', ['three well-developed points', 'one sentence', 'ten unexplained points', 'a diagram only'], 'Develop each point.'),
    Q('"Evaluate" requires:', ['a judgement after weighing arguments', 'a definition only', 'a list', 'a diagram only'], 'Reach a conclusion.'),
  ],
  'ec-mock-5': [
    Q('In Paper 2, it is sensible to start with:', ['the compulsory data-response question', 'the hardest essay', 'the last page', 'a random question'], 'While fresh.'),
    Q('A ruler is useful in the exam for:', ['drawing neat diagrams', 'calculating tax', 'writing essays', 'nothing'], 'Clear axes and curves.'),
    Q('Economics Paper 2 lasts:', ['2½ hours', '1½ hours', '1 hour', '4 hours'], 'Data response and essays.'),
    Q('The mock examination is mainly a chance to:', ['find and fix weaknesses before the GCE', 'replace the GCE', 'stop revising', 'skip topics'], 'A rehearsal.'),
  ],
  'ec-remediation-5': [
    Q('Forgetting services when calculating the current account leads to:', ['a wrong current account balance', 'a correct answer', 'a budget surplus', 'no error'], 'All components count.'),
    Q('"The cost of an opportunity" is:', ['a poor definition of opportunity cost', 'the correct definition', 'a type of tax', 'a graph'], 'Use "next best alternative forgone".'),
    Q('An unlabelled diagram in an essay:', ['earns few marks', 'earns full marks', 'is required', 'is preferred'], 'Label axes and curves.'),
    Q('A good way to fix a weakness found in the mock is to:', ['practise that skill daily and rewrite the answer', 'ignore it', 'memorise the mark', 'change subjects'], 'Targeted practice.'),
  ],
};
