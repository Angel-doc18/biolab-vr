// Economics lessons for Form 4, terms 2 and 3: supply, equilibrium and price
// controls, elasticity of demand and supply, market structures, money and
// banking, and the computational review. Original text written for this app,
// with Cameroonian examples in francs CFA (FCFA).

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

export const LESSONS_4B = [
  // ---------- Supply ----------
  L('ec-supply-4', 'ec-f4-supply', '8.1', 'The law of supply', 13, ['Price theory', 'Graphs'], [
    '**Supply** is the quantity of a good that producers are **willing and able** to offer for sale at a given price over a period of time.',
    'The **law of supply**: other things being equal, the **higher the price, the greater the quantity supplied**. Reasons: a higher price makes production more **profitable**, so existing firms produce more and new firms enter; it also covers the higher costs of extra output.',
    'A **supply schedule** is a table of prices and quantities supplied; plotted with price on the vertical axis and quantity on the horizontal axis, it gives a **supply curve** sloping **upwards** from left to right. **Market supply** is the sum of the supplies of all firms at each price.',
  ], 'econ-supply', 'Higher price, more profit, more supplied.',
  ['A supply curve normally slopes:', ['upwards from left to right', 'downwards from left to right', 'vertically', 'horizontally'], 'Price and quantity supplied move together.'],
  [['Supply', 'The quantity producers are willing and able to sell at each price.'], ['Law of supply', 'Quantity supplied rises as price rises, other things equal.'], ['Market supply', 'The total supply of all firms at each price.']],
  [
    { q: 'Three plantain sellers supply, at 1,000, 1,500 and 2,000 FCFA per bunch: A 4, 6, 8; B 2, 4, 6; C 1, 2, 3 bunches. Find market supply.', steps: ['Add the quantities at each price.', '**1,000 FCFA: 7 bunches; 1,500 FCFA: 12; 2,000 FCFA: 17.** Market supply rises with price.'] },
  ]),

  L('ec-supplyshift-4', 'ec-f4-supply', '8.2', 'Determinants of supply: shifts and movements', 14, ['Price theory', 'Graphs'], [
    'A change in the **price of the good itself** causes a **movement along** the supply curve: an **extension** when price rises, a **contraction** when it falls.',
    'A change in any **other factor** **shifts** the whole curve:\n- **costs of production** (wages, fuel, fertiliser, raw materials): higher costs shift supply left\n- **technology**: better methods shift supply right\n- **weather** and natural conditions, very important for farm products\n- **prices of other goods**: if maize becomes more profitable, farmers may grow less groundnut\n- the **number of firms**\n- **taxes** (shift left) and **subsidies** (shift right)\n- **expectations** of future prices.',
    'Remember the direction: an **increase in supply** shifts the curve to the **right** (more at every price); a **decrease** shifts it to the **left**.',
  ], 'econ-supply-shift', 'Costs up, supply left; technology or subsidy, supply right.',
  ['A government subsidy to rice farmers causes the supply of rice to:', ['shift to the right', 'shift to the left', 'move along the curve', 'stay unchanged'], 'It lowers their costs.'],
  [['Extension of supply', 'An increase in quantity supplied due to a rise in price.'], ['Contraction of supply', 'A fall in quantity supplied due to a fall in price.'], ['Subsidy', 'A payment by the government that lowers producers’ costs.']],
  [
    { q: 'State the effect on the supply of cocoa: (a) a drought; (b) a new disease-resistant variety; (c) a rise in the price of cocoa; (d) a new export tax.', steps: ['(a) **Shift left.**', '(b) **Shift right.**', '(c) **Movement along the curve (an extension).**', '(d) **Shift left.**'] },
  ]),

  // ---------- Equilibrium ----------
  L('ec-equilibrium-4', 'ec-f4-equilibrium', '9.1', 'Equilibrium price and quantity', 15, ['Price theory', 'Graphs'], [
    'The **equilibrium price** is the price at which **quantity demanded equals quantity supplied**; the market "clears". On a graph it is where the demand and supply curves **intersect**.',
    'Market forces push the price to equilibrium:\n- above equilibrium there is **excess supply** (a surplus): sellers cut prices to clear stocks\n- below equilibrium there is **excess demand** (a shortage): buyers compete and prices rise.',
    'Changes in equilibrium:\n- demand increases: price and quantity **rise**\n- demand decreases: price and quantity **fall**\n- supply increases: price **falls**, quantity **rises**\n- supply decreases: price **rises**, quantity **falls**.',
  ], 'econ-equilibrium', 'Equilibrium is where the curves cross: demand equals supply.',
  ['If supply increases and demand is unchanged, the equilibrium price:', ['falls', 'rises', 'stays the same', 'becomes zero'], 'More is offered at every price.'],
  [['Equilibrium price', 'The price at which quantity demanded equals quantity supplied.'], ['Excess supply', 'A surplus: quantity supplied exceeds quantity demanded.'], ['Excess demand', 'A shortage: quantity demanded exceeds quantity supplied.']],
  [
    { q: 'Schedule for groundnuts (FCFA per kg; kg): price 100: D 50, S 10; 200: D 40, S 20; 300: D 30, S 30; 400: D 20, S 40; 500: D 10, S 50. Find the equilibrium, and describe the market at 400 FCFA.', steps: ['Demand equals supply at 300 FCFA, where both are 30 kg: **equilibrium price 300 FCFA, quantity 30 kg.**', 'At 400 FCFA, demand is 20 kg and supply 40 kg: **an excess supply of 20 kg, which will push the price down.**'] },
  ]),

  L('ec-pricecontrols-4', 'ec-f4-equilibrium', '9.2', 'Government price controls', 14, ['Price theory', 'Government'], [
    'Governments sometimes fix prices instead of leaving them to the market.\n- A **maximum price** (price ceiling) is set **below** equilibrium to protect consumers, for example on basic foods, fuel or rents. Effects: **excess demand** (shortages), queues, rationing and **black markets** where goods are sold above the legal price.\n- A **minimum price** (price floor) is set **above** equilibrium to protect producers or workers, for example a guaranteed price for farmers or a **minimum wage** such as Cameroon’s SMIG. Effects: **excess supply** (surpluses); in the labour market, possibly some unemployment.',
    'A maximum price set above equilibrium, or a minimum price below it, has **no effect**, because the market price is already within the limit.',
    'To deal with the side effects, governments may ration goods, store surpluses, subsidise producers or buy up surplus output.',
  ], 'econ-price-controls', 'A ceiling below equilibrium causes shortages; a floor above it causes surpluses.',
  ['A maximum price set below the equilibrium price leads to:', ['a shortage', 'a surplus', 'no change', 'a fall in demand'], 'Quantity demanded exceeds quantity supplied.'],
  [['Maximum price', 'A legal price ceiling, usually below equilibrium.'], ['Minimum price', 'A legal price floor, usually above equilibrium.'], ['Black market', 'Illegal trade at prices above the controlled price.'], ['SMIG', 'Cameroon’s guaranteed minimum wage.']],
  [
    { q: 'Using the groundnut schedule from lesson 9.1, the government sets a maximum price of 200 FCFA. What happens?', steps: ['At 200 FCFA, demand is 40 kg and supply 20 kg.', '**A shortage of 20 kg: queues, rationing and possibly black-market sales above 200 FCFA.**'] },
  ]),

  // ---------- Elasticity of demand ----------
  L('ec-ped-4', 'ec-f4-elasticity', '10.1', 'Price elasticity of demand', 16, ['Elasticity', 'Calculation'], [
    '**Price elasticity of demand** (PED) measures how much the **quantity demanded responds** to a change in **price**:\nPED = % change in quantity demanded ÷ % change in price.\nThe answer is negative (price and quantity move in opposite directions); economists usually classify it by its size, ignoring the sign.',
    'Classification:\n- PED **greater than 1**: **elastic**: quantity changes proportionately more than price\n- PED **less than 1**: **inelastic**\n- PED **equal to 1**: **unitary**\n- PED **0**: **perfectly inelastic** (a vertical curve)\n- PED **infinite**: **perfectly elastic** (a horizontal curve).\n**Total revenue** (price × quantity) **rises** with a price rise when demand is inelastic, and **falls** when demand is elastic.',
    'Determinants: the number and closeness of **substitutes**; whether the good is a **necessity** or a luxury; the **proportion of income** spent on it; **habit** and addiction; **time** (demand is more elastic in the long run); the number of **uses** of the good.',
  ], 'econ-ped', 'Elastic: revenue moves opposite to price. Inelastic: revenue moves with price.',
  ['Price rises by 10% and quantity demanded falls by 5%. PED is:', ['0.5 (inelastic)', '2 (elastic)', '1 (unitary)', '0 (perfectly inelastic)'], '5 ÷ 10 = 0.5.'],
  [['Price elasticity of demand', 'The responsiveness of quantity demanded to a change in price.'], ['Elastic demand', 'Quantity changes proportionately more than price (PED > 1).'], ['Inelastic demand', 'Quantity changes proportionately less than price (PED < 1).'], ['Total revenue', 'Price multiplied by quantity sold.']],
  [
    { q: 'The price of bread rises from 200 to 250 FCFA, and quantity demanded falls from 1,000 to 900 loaves a day. Calculate PED and the effect on the baker’s revenue.', steps: ['% change in quantity = (900 − 1,000) ÷ 1,000 × 100 = −10%.', '% change in price = (250 − 200) ÷ 200 × 100 = +25%.', 'PED = −10 ÷ 25 = **−0.4: inelastic.**', 'Revenue: before 200 × 1,000 = 200,000 FCFA; after 250 × 900 = 225,000 FCFA. **Revenue rises, as expected when demand is inelastic.**'] },
  ]),

  L('ec-yedxed-4', 'ec-f4-elasticity', '10.2', 'Income and cross elasticity of demand', 14, ['Elasticity', 'Calculation'], [
    '**Income elasticity of demand** (YED) = % change in quantity demanded ÷ % change in **income**.\n- **positive**: a **normal good** (demand rises with income); above 1, a luxury\n- **negative**: an **inferior good** (demand falls as income rises, as people switch to better goods).',
    '**Cross elasticity of demand** (XED) = % change in quantity demanded of good A ÷ % change in the **price of good B**.\n- **positive**: the goods are **substitutes** (a rise in the price of rice raises demand for spaghetti)\n- **negative**: the goods are **complements** (a rise in the price of cars lowers demand for tyres)\n- **zero**: the goods are **unrelated**.',
    'Firms and governments use these measures: a firm can forecast how sales will change as incomes grow, and a government can predict how a tax on one good affects others.',
  ], 'econ-ped', 'YED sign: normal or inferior. XED sign: substitute or complement.',
  ['A cross elasticity of −0.8 between two goods shows they are:', ['complements', 'substitutes', 'unrelated', 'inferior goods'], 'A rise in one price lowers demand for the other.'],
  [['Income elasticity of demand', 'The responsiveness of demand to a change in income.'], ['Cross elasticity of demand', 'The responsiveness of demand for one good to a change in the price of another.'], ['Inferior good', 'A good whose demand falls as income rises.'], ['Normal good', 'A good whose demand rises as income rises.']],
  [
    { q: 'Incomes rise by 20%. Demand for imported rice rises by 30%, and demand for garri falls by 10%. Calculate YED for each and classify.', steps: ['Imported rice: 30 ÷ 20 = **+1.5: a normal good, and a luxury (YED above 1).**', 'Garri: −10 ÷ 20 = **−0.5: an inferior good.**'] },
  ]),

  // ---------- Supply elasticity and markets ----------
  L('ec-pes-4', 'ec-f4-markets', '11.1', 'Price elasticity of supply', 14, ['Elasticity', 'Calculation'], [
    '**Price elasticity of supply** (PES) = % change in quantity supplied ÷ % change in price. It is positive. PES greater than 1 is **elastic**, less than 1 **inelastic**.',
    'Factors:\n- **time**: supply is more elastic in the long run, when firms can expand capacity\n- **spare capacity** and **stocks**: firms with idle machines or stored goods can respond quickly\n- **mobility of factors**: how easily labour and capital can move into the industry\n- **nature of the product**: perishable farm products with long growing periods (cocoa, coffee) have inelastic supply in the short run.',
    'Inelastic supply explains why farm prices swing sharply: when demand changes, farmers cannot quickly change output, so price does the adjusting.',
  ], 'econ-markets', 'Time, spare capacity and stocks make supply more elastic.',
  ['Why is the supply of cocoa inelastic in the short run?', ['new trees take years to bear fruit', 'cocoa has many substitutes', 'farmers have huge stocks', 'demand is elastic'], 'Output cannot be raised quickly.'],
  [['Price elasticity of supply', 'The responsiveness of quantity supplied to a change in price.'], ['Spare capacity', 'Unused productive capacity that can be brought into use.']],
  [
    { q: 'The price of tomatoes rises from 400 to 500 FCFA per kg, and quantity supplied rises from 1,000 to 1,100 kg. Calculate PES.', steps: ['% change in quantity = 100 ÷ 1,000 × 100 = 10%.', '% change in price = 100 ÷ 400 × 100 = 25%.', 'PES = 10 ÷ 25 = **0.4: inelastic.**'] },
  ]),

  L('ec-marketstructures-4', 'ec-f4-markets', '11.2', 'Perfect competition and monopoly', 15, ['Market structures'], [
    '**Perfect competition** has:\n- **many buyers and sellers**, none large enough to affect the price\n- an **identical** (homogeneous) product\n- **free entry and exit**\n- **perfect knowledge** of prices.\nEach firm is a **price taker**. In the long run firms earn only **normal profit**, and resources are used efficiently. Some local food markets come close to it.',
    '**Monopoly**: a **single seller** of a product with no close substitutes, protected by **barriers to entry**: legal rights (licences, patents), control of a key resource, very high start-up costs (a **natural monopoly**, such as water or electricity networks). The monopolist is a **price maker** and can earn **supernormal profit** in the long run.',
    'Comparison: consumers usually pay **higher prices** and have **less choice** under monopoly. But monopolies may enjoy economies of scale and fund research. Governments regulate monopolies, encourage competition, or own natural monopolies.',
  ], 'econ-markets', 'Perfect competition: price taker. Monopoly: price maker behind barriers.',
  ['A firm that must accept the market price is a:', ['price taker', 'price maker', 'monopolist', 'cartel'], 'As in perfect competition.'],
  [['Perfect competition', 'A market with many firms selling identical products and free entry.'], ['Monopoly', 'A market with a single seller and barriers to entry.'], ['Barrier to entry', 'Something that prevents new firms entering a market.'], ['Natural monopoly', 'A market where one firm can supply at lower cost than several.']],
  [
    { q: 'Compare perfect competition and monopoly on number of firms, price setting and entry.', steps: ['Number of firms: **many, against one.**', 'Price: **firms are price takers, against a price maker.**', 'Entry: **free entry and exit, against high barriers to entry.**'] },
  ]),

  // ---------- Money and banks ----------
  L('ec-barter-4', 'ec-f4-money', '12.1', 'From barter to money', 14, ['Money'], [
    '**Barter** is the direct exchange of goods and services without money. Its problems:\n- the need for a **double coincidence of wants**: each trader must want what the other offers\n- no common **measure of value**\n- **indivisibility** of some goods (a goat cannot be split to buy a small item)\n- difficulty of **storing wealth** (perishable goods)\n- difficulty of **deferred payment** (borrowing and repaying).',
    '**Money** is anything generally accepted in payment. Its **functions**:\n- **medium of exchange**\n- **unit of account** (measure of value)\n- **store of value**\n- **standard of deferred payment**.',
    'Its **qualities**: general **acceptability**, **durability**, **portability**, **divisibility**, **homogeneity** (each unit the same), **scarcity** (limited supply) and being hard to forge. Cameroon uses the **franc CFA**, issued by the BEAC; forms of money today include notes and coins, bank deposits and mobile money.',
  ], 'econ-money', 'Money solves the double coincidence of wants.',
  ['Using money to compare the values of a goat and a bag of maize shows its function as a:', ['unit of account', 'store of value', 'standard of deferred payment', 'barter tool'], 'Prices measure value.'],
  [['Barter', 'Direct exchange of goods without money.'], ['Double coincidence of wants', 'The need for each trader to want what the other offers.'], ['Medium of exchange', 'The function of money as accepted payment.'], ['Store of value', 'The function of money as a way of keeping wealth.']],
  [
    { q: 'A fisherman wants shoes, but the shoemaker wants yams, not fish. Explain the problem and how money solves it.', steps: ['**There is no double coincidence of wants, so direct barter fails.**', '**With money, the fisherman sells fish to anyone for francs CFA and pays the shoemaker, who buys yams with the money.**'] },
  ]),

  L('ec-banks-4', 'ec-f4-money', '12.2', 'Commercial banks and the central bank (BEAC)', 15, ['Money', 'Financial institutions'], [
    '**Commercial banks** are profit-making businesses. Their functions:\n- accepting **deposits** (current and savings accounts)\n- giving **loans** and overdrafts\n- making **payments** (cheques, transfers, cards)\n- safe keeping of valuables, foreign exchange, financial advice.\nBecause only part of deposits is withdrawn at any time, banks can lend much of what they receive, which increases the money supply (**credit creation**). **Microfinance institutions** and credit unions serve small savers and borrowers.',
    'The **central bank** for Cameroon and the other CEMAC states (Central African Republic, Chad, Congo, Equatorial Guinea and Gabon) is the **BEAC** (Banque des États de l’Afrique Centrale), with headquarters in **Yaoundé**. Its functions:\n- **issuing** the franc CFA\n- acting as **banker to the governments** and to the commercial banks (lender of last resort)\n- conducting **monetary policy** (interest rates, reserve requirements) to keep prices stable\n- managing **foreign reserves**.\nBanking supervision in the region is carried out by COBAC.',
    'The franc CFA of Central Africa has a **fixed parity** with the euro: 1 euro = 655.957 FCFA.',
  ], 'econ-banks', 'Commercial banks serve the public; the BEAC is the bankers’ bank and issues the currency.',
  ['Which institution issues the franc CFA used in Cameroon?', ['the BEAC', 'a commercial bank', 'the World Bank', 'the Ministry of Commerce'], 'The central bank of the CEMAC.'],
  [['Commercial bank', 'A bank that accepts deposits and gives loans to make a profit.'], ['Central bank', 'The bank that issues currency and manages monetary policy.'], ['Lender of last resort', 'The central bank’s role of lending to banks in difficulty.'], ['Credit creation', 'Banks increasing the money supply by lending deposits.']],
  [
    { q: 'Give three functions of a commercial bank and three functions of the BEAC.', steps: ['Commercial bank: **accepting deposits; giving loans and overdrafts; making payments for customers.**', 'BEAC: **issuing the franc CFA; acting as banker to governments and banks; conducting monetary policy to keep prices stable.**'] },
  ]),

  // ---------- Computational review ----------
  L('ec-calcs-4', 'ec-f4-review', '13.1', 'Economics calculations workshop', 16, ['Calculation', 'Revision'], [
    'Formulas to master:\n- **percentage change** = (new − original) ÷ original × 100\n- **PED** = % change in quantity demanded ÷ % change in price\n- **PES** = % change in quantity supplied ÷ % change in price\n- **YED** = % change in quantity demanded ÷ % change in income\n- **XED** = % change in quantity of A ÷ % change in price of B\n- **total revenue** = price × quantity\n- **opportunity cost** on a PPC = the amount of the other good given up.',
    'Always: write the formula, substitute the numbers, show the working, give the answer with its sign or unit, and **interpret** it (elastic or inelastic, normal or inferior, and so on).',
    'Common errors: dividing by the new value instead of the original; mixing up which change goes on top; forgetting to interpret; and ignoring units (FCFA, kg, tonnes).',
  ], 'econ-formulas', 'Formula, working, answer, interpretation: four steps every time.',
  ['When calculating a percentage change, you divide the change by:', ['the original value', 'the new value', 'the price', '100 only'], 'Use the starting value.'],
  [['Percentage change', 'The change divided by the original value, times 100.'], ['Coefficient', 'The numerical value of an elasticity.']],
  [
    { q: 'Price of sugar falls from 800 to 600 FCFA per kg; quantity demanded rises from 2,000 to 3,000 kg. Calculate PED and the change in total revenue.', steps: ['% change in quantity = 1,000 ÷ 2,000 × 100 = +50%; % change in price = −200 ÷ 800 × 100 = −25%.', 'PED = 50 ÷ −25 = **−2: elastic.**', 'Revenue: before 800 × 2,000 = 1,600,000 FCFA; after 600 × 3,000 = 1,800,000 FCFA. **Revenue rises by 200,000 FCFA, as expected when demand is elastic and price falls.**'] },
    { q: 'At the equilibrium of the groundnut market (300 FCFA, 30 kg), what is total revenue?', steps: ['TR = price × quantity = 300 × 30.', '**9,000 FCFA.**'] },
  ]),

  L('ec-datareading-4', 'ec-f4-review', '13.2', 'Reading economic tables and graphs', 14, ['Data response', 'Revision'], [
    'Data-response questions give a table or graph and ask you to read, calculate and explain. Steps:\n- read the **title**, the **units** (FCFA, millions, %, tonnes) and the **period**\n- describe the **trend**: rising, falling, stable, fluctuating\n- pick out the **highest** and **lowest** values and any sudden changes\n- calculate what is asked, showing working\n- **explain** using economic theory.',
    'On graphs, check which variable is on which axis. On a demand and supply graph, price is on the vertical axis and quantity on the horizontal axis; look for **shifts** (a whole new curve) and **movements** (a new point on the same curve).',
    'Quote figures with their units: "Sales rose from 20,000 to 26,000 bags (30%) between 2022 and 2024," not "Sales went up a lot."',
  ], 'econ-formulas', 'Always quote numbers with units, and explain with theory.',
  ['The first thing to check on a data table is:', ['its title, units and period', 'the largest number only', 'the colour', 'the last line only'], 'Units change the meaning of every figure.'],
  [['Trend', 'The general direction of change in data over time.'], ['Data response', 'A question based on a table, graph or text of economic data.']],
  [
    { q: 'A table shows a market’s rice price (FCFA per kg): 2022: 450; 2023: 500; 2024: 600. Describe the trend and calculate the percentage rise from 2022 to 2024.', steps: ['Trend: **a steady rise, faster between 2023 and 2024.**', 'Percentage rise = (600 − 450) ÷ 450 × 100 = 150 ÷ 450 × 100 ≈ **33.3%.**', 'Possible explanation: **higher import costs or rising demand pushed the price up.**'] },
  ]),
];
