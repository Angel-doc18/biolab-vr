// A Level Economics lessons (0725), Lower Sixth, Term 1: the 0725 papers and
// a diagnostic review, the nature of economics and the PPC, cardinal and
// ordinal utility, demand, supply and state intervention, elasticities of
// demand, elasticity of supply and short-run production, and returns to
// scale, isoquants and economies of scale.

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

export const LESSONS_EL6A = [
  // ---------- 1. The papers and the step up ----------
  L('aec-method-1', 'aec-l6-method', '1.1', 'The 0725 examination and the step up from O Level', 16, ['Method'], [
    'The GCE Advanced Level Economics examination (0725) has three papers. In June 2026: **Paper 1**, 1½ hours, multiple-choice questions on the whole syllabus (Wednesday 3 June, afternoon); **Paper 2**, 3 hours, with a compulsory data-response section and essays (Thursday 4 June, morning); **Paper 3**, 1¾ hours, a further written paper (Thursday 4 June, afternoon). Read the rubric on the cover of each paper: it states the sections, how many questions to answer and the marks.',
    'O Level asked mostly "what?" and "describe". A Level asks "why?", "by how much?" and "how far?". The answers are built from **models**: simplified pictures of behaviour that rest on stated assumptions, drawn as diagrams and written as simple equations, and always used **ceteris paribus**, other things being equal.',
    'Answers are rewarded at four levels:\n- **knowledge**: precise definitions and correct facts\n- **application**: using the idea on the case or data in the question\n- **analysis**: a chain of reasoning, cause to effect, usually with a diagram\n- **evaluation**: weighing the size, timing and likelihood of effects and reaching a judgement.\nDescription alone stays in the lowest level.',
    'A diagram counts only if it is correct and used: label both axes, every curve and every equilibrium, and refer to it in the text ("the shift from S1 to S2 raises price from P1 to P2").',
  ], 'aec-gce-0725', 'Paper 1 rewards precision; Paper 2 rewards analysis with data and diagrams; every paper rewards judgement.',
  ['Which paper of A Level Economics is multiple choice?', ['Paper 1', 'Paper 2', 'Paper 3', 'none of them'], 'One and a half hours, Wednesday 3 June.'],
  [['Ceteris paribus', 'Other things being equal: only one cause is changed at a time.'], ['Analysis', 'A reasoned chain from cause to effect, often shown on a diagram.'], ['Evaluation', 'Weighing the importance of effects and reaching a supported judgement.']],
  [
    { q: 'Turn this O Level sentence into an A Level answer: "A tax on fuel raises the price of fuel."', steps: ['Knowledge: **a specific tax raises each seller’s cost per litre, so the supply curve shifts upward by the tax.**', 'Analysis: **the new equilibrium has a higher price and a smaller quantity; how much the price rises depends on the price elasticity of demand.**', 'Application: **demand for fuel is price inelastic in the short run (few substitutes), so most of the tax is passed on to motorists.**', 'Evaluation: **in the long run people switch to shared taxis or buy smaller vehicles, so demand becomes more elastic and more of the burden falls on sellers.**'] },
  ]),
  L('aec-method-2', 'aec-l6-method', '1.2', 'Diagnostic review: market forces and the factors of production', 18, ['Method'], [
    'The Lower Sixth begins with a check of the O Level base. **Demand** is the quantity buyers are willing and able to buy at each price; **supply** is the quantity sellers are willing and able to offer at each price. Where they are equal the market **clears** at the equilibrium price.',
    'At A Level, demand and supply are often written as straight-line equations, for example **Qd = a − bP** and **Qs = c + dP**. Equilibrium is found by setting Qd = Qs and solving for P, then substituting back to find Q.',
    'The **factors of production** and their rewards: **land** (natural resources) earns rent; **labour** (human effort) earns wages; **capital** (man-made aids to production) earns interest; **enterprise** (organising and bearing risk) earns profit. The theory of each reward is studied in Term 2.',
    'A diagnostic test at this point shows which O Level ideas need repair before new work is built on them: elasticity, shifts of curves and opportunity cost are the usual weak points.',
  ], ['econ-equilibrium', 'econ-factors'], 'Always check an algebraic equilibrium by substituting the price into both equations: they must give the same quantity.',
  ['If Qd = 100 − 2P and Qs = −20 + 4P, the equilibrium price is:', ['20', '60', '30', '10'], '100 − 2P = −20 + 4P gives 6P = 120.'],
  [['Equilibrium', 'The price at which quantity demanded equals quantity supplied, so there is no pressure to change.'], ['Factor reward', 'The payment to a factor of production: rent, wages, interest or profit.']],
  [
    { q: 'Find the equilibrium price and quantity when Qd = 100 − 2P and Qs = −20 + 4P.', steps: ['Set Qd = Qs: **100 − 2P = −20 + 4P**.', 'Collect terms: **120 = 6P, so P = 20**.', 'Substitute: **Qd = 100 − 40 = 60; Qs = −20 + 80 = 60.**', '**Equilibrium: P = 20, Q = 60.** Both equations agree, so the answer is checked.'] },
    { q: 'In the same market the state fixes a maximum price of 15. What happens?', steps: ['Qd = 100 − 30 = **70**; Qs = −20 + 60 = **40**.', '**A shortage of 30 units**: queues, rationing and possibly a black market.'] },
  ]),

  // ---------- 2. Scarcity and the PPC ----------
  L('aec-scope-1', 'aec-l6-scope', '2.1', 'What economics studies: positive and normative, micro and macro', 16, ['Micro'], [
    'In 1932 Lionel Robbins defined economics as the study of human behaviour as a relationship between ends (wants) and scarce means that have alternative uses. Three ideas follow: wants are unlimited, resources are **scarce**, and every use of a resource has an **opportunity cost**.',
    '**Positive** statements describe what is, was or will be, and can be tested against evidence: "Cameroon’s inflation rate rose in 2023." **Normative** statements contain a value judgement about what ought to be: "The state should subsidise fuel." Economists can settle positive disputes with data; normative disputes also depend on values.',
    '**Microeconomics** studies individual units: consumers, firms, workers and single markets (the price of cocoa, wages of nurses). **Macroeconomics** studies the economy as a whole: national output, unemployment, the price level, the balance of payments and growth. The Lower Sixth is mainly micro; the Upper Sixth mainly macro.',
    'Every economy must answer **what** to produce, **how** to produce it and **for whom**. A free market answers through prices, a command economy through a plan, and a mixed economy such as Cameroon’s through both.',
  ], 'aec-scope', 'A quick test: if a statement contains "should", "ought", "too high" or "fair", it is normative.',
  ['"A minimum wage of 60,000 FCFA a month would be fair." This statement is:', ['normative', 'positive', 'microeconomic data', 'a definition'], '"Fair" is a value judgement.'],
  [['Scarcity', 'Limited resources compared with unlimited wants.'], ['Positive statement', 'A statement of fact that can be tested.'], ['Normative statement', 'A statement containing a value judgement.']],
  [
    { q: 'Classify: (a) "Unemployment in Douala is higher than in Bamenda." (b) "Taxes on alcohol are too low." (c) "A rise in the price of cocoa will raise the income of cocoa farmers."', steps: ['(a) **Positive, macro or regional**: it can be checked with survey data, even if the data are hard to find.', '(b) **Normative**: "too low" is a judgement.', '(c) **Positive, micro**: a testable prediction; it is only true if output does not fall by a larger proportion.'] },
  ]),
  L('aec-scope-2', 'aec-l6-scope', '2.2', 'Scarcity, choice and the production possibility curve', 18, ['Micro'], [
    'A **production possibility curve** (PPC) shows the maximum combinations of two goods an economy can produce with all its resources fully and efficiently employed and with given technology.',
    'Points **on** the curve are productively efficient. A point **inside** shows unemployed or misused resources. A point **outside** cannot be reached with present resources. Moving along the curve shows the **opportunity cost**: more of one good means less of the other.',
    'The curve is usually **concave to the origin** because resources are not equally suited to both goods: as more cassava is grown, land and workers better suited to cocoa are moved, so each extra tonne of cassava costs more cocoa. This is **increasing marginal opportunity cost**. A straight-line PPC would show constant opportunity cost.',
    'The curve shifts **outward** with economic growth (more or better resources, new technology) and inward after a disaster or war. Choosing more capital goods today, at the cost of consumer goods, shifts the PPC further out in the future.',
  ], 'econ-ppc', 'Opportunity cost is always "what is given up ÷ what is gained", in units of the good given up.',
  ['A point outside the PPC is:', ['unattainable with present resources and technology', 'efficient', 'inefficient', 'the result of unemployment'], 'Growth would be needed to reach it.'],
  [['Production possibility curve', 'The maximum combinations of two goods that can be produced with given resources and technology.'], ['Marginal opportunity cost', 'The amount of one good given up to produce one more unit of the other.']],
  [
    { q: 'On the curve shown, the economy moves from A (0 cassava, 100 cocoa) to B (60, 80), then to C (80, 60), then to D (100, 0). Find the marginal opportunity cost of cassava on each move.', steps: ['A to B: **20 cocoa given up for 60 cassava: 1⁄3 tonne of cocoa per tonne of cassava.**', 'B to C: **20 cocoa for 20 cassava: 1 tonne of cocoa per tonne.**', 'C to D: **60 cocoa for 20 cassava: 3 tonnes of cocoa per tonne.**', '**The cost rises from 1⁄3 to 1 to 3: increasing marginal opportunity cost, so the curve is concave.**'] },
  ]),

  // ---------- 3. Cardinal utility ----------
  L('aec-cardinal-1', 'aec-l6-cardinal', '3.1', 'Total utility, marginal utility and diminishing marginal utility', 18, ['Micro'], [
    '**Utility** is the satisfaction a consumer gets from consuming a good. The **cardinal** approach, associated with Alfred Marshall, assumes utility can be measured in units ("utils") and compared.',
    '**Total utility** (TU) is the satisfaction from all units consumed. **Marginal utility** (MU) is the change in total utility from consuming one more unit: MU = ΔTU ÷ ΔQ.',
    'The **law of diminishing marginal utility**: as a consumer takes more units of a good in a given period, each extra unit eventually adds less satisfaction. Total utility rises while MU is positive, is at its maximum when MU is zero, and falls if MU turns negative.',
    'For a single good, a consumer maximises satisfaction by buying until the marginal utility of the last unit, valued in money, equals its price: **MU = P**. Because MU falls as more is bought, a lower price is needed to persuade the consumer to buy more: this is why the **demand curve slopes downward**.',
  ], 'aec-utility', 'Total utility is at its peak exactly where marginal utility crosses zero.',
  ['When marginal utility is zero, total utility is:', ['at its maximum', 'zero', 'falling', 'at its minimum'], 'One more unit adds nothing.'],
  [['Utility', 'The satisfaction obtained from consuming a good or service.'], ['Marginal utility', 'The extra satisfaction from one more unit: ΔTU ÷ ΔQ.'], ['Law of diminishing marginal utility', 'Each extra unit consumed eventually gives less extra satisfaction.']],
  [
    { q: 'Total utility from oranges eaten in a day is 20, 36, 48, 56, 60, 60 and 56 utils for 1 to 7 oranges. Find marginal utility and the point of maximum satisfaction.', steps: ['MU = change in TU: **20, 16, 12, 8, 4, 0, −4.**', 'MU falls with every orange: **diminishing marginal utility**.', '**TU is greatest (60) at 5 or 6 oranges, where MU reaches zero**; the seventh orange lowers TU.'] },
    { q: 'If 1 util is worth 10 FCFA to this consumer and an orange costs 80 FCFA, how many oranges are bought?', steps: ['The price is worth **8 utils**.', 'Buy while MU ≥ 8: the 4th orange has MU = 8.', '**4 oranges**: the 5th (MU = 4) is worth only 40 FCFA, less than its price.'] },
  ]),
  L('aec-cardinal-2', 'aec-l6-cardinal', '3.2', 'Consumer equilibrium with several goods and the paradox of value', 18, ['Micro'], [
    'With two or more goods and a limited income, a consumer maximises total utility by arranging spending so that the **last franc spent on each good gives the same marginal utility**: **MUx ÷ Px = MUy ÷ Py**, with all income spent. This is the **equimarginal principle**.',
    'If MUx ÷ Px is greater than MUy ÷ Py, a franc moved from Y to X raises total utility; as more X is bought its MU falls, until the ratios are equal again. A **fall in the price of X** raises MUx ÷ Px, so the consumer buys more X: the downward-sloping demand curve again.',
    'The **paradox of value**, posed by Adam Smith in 1776: water is essential to life yet cheap, while diamonds are useless for survival yet dear. The marginalists of the 1870s (Jevons, Menger and Walras) resolved it: price reflects **marginal**, not total, utility. Water is so plentiful that the marginal unit gives little satisfaction; diamonds are so scarce that the marginal one gives a great deal.',
    'The weakness of the cardinal approach is that satisfaction cannot really be measured in units; the ordinal approach (indifference curves) needs only the ability to rank combinations.',
  ], 'aec-paradox', 'Write the MU ÷ P column for each good, then pick the units with the highest ratios first until income is used up.',
  ['A consumer has MUx ÷ Px = 0.3 and MUy ÷ Py = 0.2. To raise utility, the consumer should:', ['buy more X and less Y', 'buy more Y and less X', 'stop buying both', 'change nothing'], 'X gives more satisfaction per franc.'],
  [['Equimarginal principle', 'Utility is maximised when the marginal utility per franc is the same for every good bought.'], ['Paradox of value', 'Essential goods can be cheap and inessential ones dear, because price reflects marginal utility.']],
  [
    { q: 'X costs 200 FCFA and Y costs 100 FCFA; income is 900 FCFA. MU of successive units of X: 60, 50, 40, 30. MU of Y: 40, 30, 20, 15. Find the best combination.', steps: ['MU per franc for X: **0.30, 0.25, 0.20, 0.15**; for Y: **0.40, 0.30, 0.20, 0.15**.', 'Buy the highest ratios first: Y1 (0.40), X1 and Y2 (0.30), X2 (0.25), then X3 and Y3 (0.20).', 'Spending: **3 × 200 + 3 × 100 = 900 FCFA**, all income used.', '**3 X and 3 Y, where MUx ÷ Px = MUy ÷ Py = 0.20.** Total utility = 150 + 90 = 240 utils.'] },
  ]),

  // ---------- 4. Indifference curves ----------
  L('aec-ordinal-1', 'aec-l6-ordinal', '4.1', 'Indifference curves and the marginal rate of substitution', 18, ['Micro'], [
    'The **ordinal** approach assumes only that a consumer can **rank** combinations of goods. Indifference curves were developed by Edgeworth and Pareto and applied to consumer demand by Hicks and Allen in 1934.',
    'An **indifference curve** joins all combinations of two goods that give the consumer **equal satisfaction**. A set of curves is an **indifference map**: curves further from the origin show higher satisfaction.',
    'Properties of normal indifference curves:\n- they **slope downward**: to keep satisfaction equal, more of one good must mean less of the other\n- they are **convex to the origin**, because of a diminishing marginal rate of substitution\n- they **never intersect**: crossing curves would mean one combination is both preferred and equal to another\n- **higher curves are preferred**.',
    'The **marginal rate of substitution** (MRS of X for Y) is the amount of Y the consumer is willing to give up for one more unit of X, keeping satisfaction constant: the slope of the curve. As the consumer has more X and less Y, each extra unit of X is worth less Y, so the MRS **diminishes**.',
  ], 'aec-indifference', 'Convex curves are the picture of diminishing MRS: steep at the top, flat at the bottom.',
  ['Indifference curves cannot intersect because:', ['that would contradict consistent preferences', 'prices are fixed', 'income is limited', 'they are straight lines'], 'Transitivity of preferences.'],
  [['Indifference curve', 'A line joining combinations of two goods that give equal satisfaction.'], ['Marginal rate of substitution', 'The quantity of one good a consumer will give up for one more unit of another, keeping satisfaction constant.']],
  [
    { q: 'A consumer is indifferent between these combinations of X and Y: (1, 12), (2, 6), (3, 4), (4, 3) and (6, 2). Find the MRS and say what it shows.', steps: ['From (1, 12) to (2, 6): **6 units of Y given up for 1 X: MRS = 6.**', '(2, 6) to (3, 4): **MRS = 2**; (3, 4) to (4, 3): **MRS = 1**.', '(4, 3) to (6, 2): **1 Y for 2 X: MRS = 0.5.**', '**The MRS falls from 6 to 0.5: diminishing MRS, so the curve is convex.**'] },
  ]),
  L('aec-ordinal-2', 'aec-l6-ordinal', '4.2', 'The budget line, consumer equilibrium and price changes', 20, ['Micro'], [
    'The **budget line** shows all combinations of two goods a consumer can just afford: **Px·X + Py·Y = M**. Its intercepts are M ÷ Px on the X axis and M ÷ Py on the Y axis; its slope is **−Px ÷ Py**.',
    'A rise in income shifts the line **outward, parallel**; a fall in the price of X **pivots** it outward along the X axis, with the Y intercept unchanged.',
    'The consumer is in **equilibrium** at the point where the budget line is **tangent** to the highest attainable indifference curve. There the slopes are equal: **MRS = Px ÷ Py**. Higher curves cannot be afforded; lower ones waste satisfaction.',
    'As income changes, the equilibria trace the **income-consumption curve**; as the price of X changes, they trace the **price-consumption curve**, from which the demand curve for X is derived. A price change has a **substitution effect** (X is now relatively cheaper) and an **income effect** (real income has risen). For a normal good both raise demand; for an inferior good the income effect works against the substitution effect, and for a rare **Giffen good** it outweighs it.',
  ], 'aec-budget-line', 'At the tangency, the consumer’s rate of exchange (MRS) equals the market’s rate of exchange (the price ratio).',
  ['If income rises and both prices stay the same, the budget line:', ['shifts outward parallel to itself', 'pivots on the Y axis', 'becomes steeper', 'does not move'], 'The slope −Px ÷ Py is unchanged.'],
  [['Budget line', 'All combinations of two goods that exactly use up a given income at given prices.'], ['Substitution effect', 'The change in demand caused by a change in relative prices, real income held constant.'], ['Giffen good', 'An inferior good whose income effect outweighs the substitution effect, so demand rises when price rises.']],
  [
    { q: 'Income is 1,200 FCFA; X and Y each cost 100 FCFA. Where is the consumer in equilibrium on the indifference map shown?', steps: ['Intercepts: **12 X or 12 Y**; slope −Px ÷ Py = **−1**.', 'The highest curve the line touches is the one through **(6, 6)**, where its slope is also −1.', '**Equilibrium: 6 X and 6 Y, with MRS = Px ÷ Py = 1.** The curve through (8, 8) costs 1,600 FCFA, out of reach.'] },
    { q: 'The price of X falls to 50 FCFA. What happens to the budget line?', steps: ['The X intercept becomes **1,200 ÷ 50 = 24**; the Y intercept stays at 12.', '**The line pivots outward along the X axis**; the new tangency is at more X, which traces the price-consumption curve.'] },
  ]),

  // ---------- 5. Markets and intervention ----------
  L('aec-markets-1', 'aec-l6-markets', '5.1', 'Demand, supply, surplus and price controls', 20, ['Micro'], [
    'The **determinants of demand**: the good’s own price (a movement along the curve); and, shifting the curve, income, the prices of substitutes and complements, tastes and advertising, population and its structure, expectations of future prices, and the availability of credit.',
    'The **determinants of supply**: the good’s own price (a movement); and, shifting the curve, costs of production, technology, the prices of other goods the firm could make, indirect taxes and subsidies, the weather and disease (for farm output), the number of firms, and expectations.',
    '**Consumer surplus** is the difference between what buyers are willing to pay and what they pay: the area under the demand curve above the price. **Producer surplus** is the difference between the price received and the lowest price sellers would accept: the area above the supply curve below the price.',
    'A **maximum price** below equilibrium (for example on rents or basic foods) causes a **shortage**, queues and black markets. A **minimum price** above equilibrium (a farm price floor or minimum wage) causes a **surplus**, which the state may have to buy and store.',
  ], 'econ-price-controls', 'Shifts come from anything except the good’s own price; the own price only moves you along the curve.',
  ['A maximum price set above the equilibrium price:', ['has no effect on the market', 'causes a shortage', 'causes a surplus', 'raises the price'], 'The market price is already below the ceiling.'],
  [['Consumer surplus', 'The excess of what buyers would pay over what they actually pay.'], ['Producer surplus', 'The excess of the price received over the lowest price sellers would accept.'], ['Black market', 'Illegal trade at prices above an official maximum.']],
  [
    { q: 'Qd = 120 − 2P and Qs = 3P − 30. Find equilibrium, consumer surplus and producer surplus.', steps: ['120 − 2P = 3P − 30, so **P = 30 and Q = 60**.', 'Demand meets the price axis at P = 60, so **CS = ½ × 60 × (60 − 30) = 900**.', 'Supply meets the price axis at P = 10, so **PS = ½ × 60 × (30 − 10) = 600**.'] },
    { q: 'The state sets a maximum price of 25. Find the shortage.', steps: ['Qd = 120 − 50 = **70**; Qs = 75 − 30 = **45**.', '**Shortage = 25 units.** Only 45 units are traded, so some buyers who would pay more go without.'] },
  ]),
  L('aec-markets-2', 'aec-l6-markets', '5.2', 'Indirect taxes, subsidies and their incidence', 20, ['Micro'], [
    'A **specific tax** is a fixed sum per unit (for example per litre); an **ad valorem tax** is a percentage of price, such as VAT. Both raise the cost of supplying each unit, so the supply curve shifts **upward** (a specific tax by exactly the tax per unit).',
    'The **incidence** of a tax is who really bears it. The consumer’s share is the rise in the price paid; the producer’s share is the fall in the price received after tax. The **less elastic** side of the market bears the larger share: with perfectly inelastic demand, consumers pay it all.',
    'The government’s **revenue** is the tax per unit times the quantity sold after the tax. The fall in quantity causes a **deadweight loss**: surplus lost to both sides and not collected as revenue.',
    'A **subsidy** is a payment per unit to producers. It shifts supply **downward**, lowers the price paid by consumers and raises output. The cost to the government is the subsidy per unit times the new quantity; consumers and producers share the gain according to elasticities, as with a tax.',
  ], 'aec-tax-incidence', 'On the diagram, measure the consumer’s share above the old price and the producer’s share below it.',
  ['When demand is perfectly inelastic, an indirect tax is borne:', ['entirely by consumers', 'entirely by producers', 'equally', 'by nobody'], 'Quantity does not fall, price rises by the full tax.'],
  [['Specific tax', 'A fixed amount of tax per unit sold.'], ['Ad valorem tax', 'A tax charged as a percentage of the price.'], ['Incidence', 'The final distribution of the burden of a tax between buyers and sellers.'], ['Deadweight loss', 'The loss of total surplus caused by a fall in output below the market equilibrium.']],
  [
    { q: 'Demand is P = 120 − 2Q and supply is P = 30 + Q (P in FCFA, Q in thousand units). A tax of 30 FCFA per unit is imposed. Find the new equilibrium and the incidence.', steps: ['Before: 120 − 2Q = 30 + Q, so **Q = 30, P = 60**.', 'Supply with tax: P = 60 + Q. Then 120 − 2Q = 60 + Q, so **Q = 20 and consumers pay 80**.', 'Producers receive **80 − 30 = 50**.', '**Consumers bear 20 FCFA per unit (two-thirds), producers 10 (one-third)**, because demand here is less elastic than supply.', 'Revenue = **30 × 20,000 = 600,000 FCFA**; deadweight loss = ½ × 30 × 10,000 = **150,000 FCFA**.'] },
  ]),

  // ---------- 6. Elasticities of demand ----------
  L('aec-elasticity-1', 'aec-l6-elasticity', '6.1', 'Price elasticity of demand: point, arc and total outlay', 22, ['Micro'], [
    '**Price elasticity of demand** (PED) measures how strongly quantity demanded responds to a change in price: **PED = % change in Qd ÷ % change in P**. It is negative for normal demand curves and is often quoted as a magnitude. |PED| > 1 is **elastic**, < 1 **inelastic**, = 1 **unit elastic**; 0 is perfectly inelastic and infinity perfectly elastic.',
    'The **point method** measures elasticity at one point: **PED = (ΔQ ÷ ΔP) × (P ÷ Q)**. On a straight-line demand curve the slope is constant but elasticity is not: demand is elastic on the upper half, unit elastic at the midpoint and inelastic on the lower half.',
    'The **arc method** measures elasticity between two points using averages as the base: **[ΔQ ÷ average Q] ÷ [ΔP ÷ average P]**, so the answer is the same whether price rises or falls.',
    'The **total outlay method** looks at spending (total revenue): if a price fall raises spending, demand is elastic; if it lowers spending, inelastic; if spending is unchanged, unit elastic. Total revenue is at its **maximum where PED = −1**. The determinants: the number and closeness of substitutes, the share of income spent on the good, whether it is a necessity or habit-forming, the time allowed to adjust and how broadly the market is defined.',
  ], ['aec-ped-revenue', 'econ-ped'], 'Slope is not elasticity: the same straight line is elastic at the top and inelastic at the bottom.',
  ['On a straight-line demand curve, demand is unit elastic:', ['at the midpoint', 'at the top', 'at the bottom', 'everywhere'], 'Total revenue is at its maximum there.'],
  [['Price elasticity of demand', 'The responsiveness of quantity demanded to a change in price.'], ['Arc elasticity', 'Elasticity between two points, using average values as the base.'], ['Total outlay method', 'Judging elasticity by how total spending changes when price changes.']],
  [
    { q: 'Demand is Q = 100 − P. Find the point elasticity at P = 80 and at P = 20.', steps: ['ΔQ ÷ ΔP = **−1** everywhere on this line.', 'At P = 80, Q = 20: PED = −1 × 80 ÷ 20 = **−4 (elastic)**.', 'At P = 20, Q = 80: PED = −1 × 20 ÷ 80 = **−0.25 (inelastic)**.'] },
    { q: 'Price rises from 60 to 70 and quantity falls from 40 to 30. Find the arc elasticity and check with total outlay.', steps: ['ΔQ ÷ average Q = −10 ÷ 35 = **−0.286**.', 'ΔP ÷ average P = 10 ÷ 65 = **0.154**.', 'Arc PED = −0.286 ÷ 0.154 = **−1.86 (elastic)**.', 'Spending falls from 60 × 40 = 2,400 to 70 × 30 = 2,100: **a price rise lowered spending, so demand is elastic.**'] },
  ]),
  L('aec-elasticity-2', 'aec-l6-elasticity', '6.2', 'Income and cross elasticity of demand, and their uses', 18, ['Micro'], [
    '**Income elasticity of demand** (YED) = % change in Qd ÷ % change in income. For **normal goods** YED is positive: **necessities** between 0 and 1, **luxuries** above 1. For **inferior goods** YED is negative: demand falls as income rises, as people switch to better goods.',
    '**Cross elasticity of demand** (XED) = % change in Qd of good X ÷ % change in the price of good Y. **Substitutes** have a positive XED (a dearer gas cylinder raises demand for charcoal); **complements** have a negative XED (dearer cars reduce demand for tyres); unrelated goods have an XED near zero.',
    'Uses of elasticity:\n- **firms** set prices (raise price where demand is inelastic) and plan output as incomes grow\n- **the government** taxes goods with inelastic demand for reliable revenue, and predicts who bears a tax\n- **planners** forecast demand: as Cameroon’s incomes grow, demand for luxuries grows fastest\n- **trade**: the success of a devaluation depends on the elasticities of exports and imports.',
    'Elasticity also changes with time: given longer to adjust, buyers find substitutes, so demand becomes more elastic.',
  ], 'aec-yed-xed', 'Read the sign first: YED tells normal from inferior; XED tells substitutes from complements.',
  ['YED of 2.5 shows that the good is:', ['a luxury', 'a necessity', 'an inferior good', 'a complement'], 'Demand rises faster than income.'],
  [['Income elasticity of demand', 'The responsiveness of demand to a change in income.'], ['Cross elasticity of demand', 'The responsiveness of demand for one good to a change in the price of another.'], ['Inferior good', 'A good whose demand falls as income rises.']],
  [
    { q: 'Incomes rise by 10%. Demand for rice rises by 4%, for cars by 25%, and for second-hand clothes falls by 5%. Classify each.', steps: ['Rice: YED = 4 ÷ 10 = **0.4: a normal necessity**.', 'Cars: YED = 25 ÷ 10 = **2.5: a luxury**.', 'Second-hand clothes: YED = −5 ÷ 10 = **−0.5: an inferior good**.'] },
    { q: 'The price of cooking gas rises by 20% and demand for charcoal rises by 10%. Find XED and interpret it.', steps: ['XED = +10 ÷ 20 = **+0.5**.', '**Positive, so gas and charcoal are substitutes**; the value below 1 shows they are not very close substitutes.'] },
  ]),

  // ---------- 7. Supply elasticity and production ----------
  L('aec-production-1', 'aec-l6-production', '7.1', 'Price elasticity of supply', 16, ['Micro'], [
    '**Price elasticity of supply** (PES) = % change in quantity supplied ÷ % change in price. It is normally positive. PES > 1 is elastic, < 1 inelastic, 0 perfectly inelastic (vertical supply) and infinite perfectly elastic (horizontal supply).',
    'A useful result: **any straight-line supply curve through the origin has PES = 1 at every point**; one that meets the price axis is elastic, and one that meets the quantity axis is inelastic.',
    'Supply is more elastic when:\n- firms have **spare capacity** or **stocks** of finished goods\n- factors of production are **mobile** between uses\n- the good is **not perishable** and can be stored\n- there is more **time**: in the momentary period supply is fixed; in the short run only variable factors can change; in the long run all can.',
    'Farm supply is inelastic in the short run: a cocoa tree takes several years before it bears pods, so a price rise this season changes little output this season.',
  ], 'aec-pes', 'Where a straight supply line starts tells you its elasticity: price axis, elastic; origin, unit; quantity axis, inelastic.',
  ['A straight-line supply curve through the origin has a PES of:', ['1 at every point', '0', 'infinity', 'less than 1'], 'Percentage changes are equal along it.'],
  [['Price elasticity of supply', 'The responsiveness of quantity supplied to a change in price.'], ['Momentary period', 'A period so short that supply cannot change at all.']],
  [
    { q: 'The farm-gate price of cocoa rises from 1,000 to 1,200 FCFA per kg, and quantity supplied this season rises from 50,000 to 53,000 tonnes. Find PES and explain it.', steps: ['% change in price = 200 ÷ 1,000 = **20%**.', '% change in quantity = 3,000 ÷ 50,000 = **6%**.', 'PES = 6 ÷ 20 = **0.3: inelastic**.', 'Reason: **new trees take years to bear, so farmers can only harvest and dry existing pods more carefully this season.**'] },
  ]),
  L('aec-production-2', 'aec-l6-production', '7.2', 'Short-run production and the law of diminishing returns', 20, ['Micro'], [
    'In the **short run** at least one factor (usually capital or land) is fixed. Output is raised by adding a **variable factor** (usually labour). **Total product** (TP) is total output; **average product** AP = TP ÷ L; **marginal product** MP = ΔTP ÷ ΔL.',
    'The **law of diminishing (marginal) returns**: as more units of a variable factor are added to a fixed factor, marginal product **eventually falls**. At first, specialisation raises MP; later each extra worker has less of the fixed factor to work with.',
    'MP cuts AP at the **maximum of AP**: while the extra worker adds more than the average, the average rises; once the extra worker adds less, it falls. TP is at its maximum where **MP = 0**.',
    'The **three stages of production**: Stage I, from zero to maximum AP, where the fixed factor is under-used; **Stage II**, from maximum AP to MP = 0, where a rational firm operates; Stage III, where MP is negative and extra workers reduce total output.',
  ], 'aec-product-curves', 'Every "marginal" curve cuts its "average" curve at the average’s turning point.',
  ['A rational firm operates in:', ['Stage II, between maximum AP and MP = 0', 'Stage I', 'Stage III', 'any stage equally'], 'Stage III has negative MP; Stage I wastes the fixed factor.'],
  [['Marginal product', 'The extra output from one more unit of the variable factor.'], ['Average product', 'Total output divided by the number of units of the variable factor.'], ['Law of diminishing returns', 'Adding more of a variable factor to a fixed factor eventually reduces marginal product.']],
  [
    { q: 'A farm’s output from 1 to 8 workers is 10, 30, 60, 80, 90, 96, 96 and 92 bags. Find MP, AP and the stages.', steps: ['MP: **10, 20, 30, 20, 10, 6, 0, −4.**', 'AP: **10, 15, 20, 20, 18, 16, 13.7, 11.5.**', 'MP peaks with the 3rd worker, then **diminishing returns** set in.', '**Stage I: up to 4 workers (AP highest at 20); Stage II: 4 to 7 workers (MP falls to 0); Stage III: the 8th worker, whose MP is negative.**'] },
  ]),

  // ---------- 8. Scale and factor choice ----------
  L('aec-scale-1', 'aec-l6-scale', '8.1', 'Returns to scale, isoquants and the least-cost combination', 22, ['Micro'], [
    'In the **long run** all factors can be varied, so the firm can change its **scale**. If all inputs are increased in the same proportion: **increasing returns to scale** when output rises by a greater proportion; **constant returns** when in the same proportion; **decreasing returns** when by a smaller proportion.',
    'An **isoquant** joins all combinations of two factors (labour and capital) that produce the **same output**. It slopes down and is convex, because factors are imperfect substitutes: the **marginal rate of technical substitution** (MRTS = MPL ÷ MPK) diminishes.',
    'An **isocost line** joins all combinations of factors with the **same total cost**: **wL + rK = C**, where w is the wage and r the price of capital. Its slope is −w ÷ r.',
    'The **least-cost combination** for a given output is where the lowest isocost line is **tangent** to the isoquant: **MPL ÷ w = MPK ÷ r**. Each franc spent on each factor then adds the same output. If labour becomes dearer, the firm substitutes capital for labour.',
  ], 'aec-isoquant', 'The least-cost rule for factors is the same idea as the equimarginal rule for consumers: equal returns per franc.',
  ['The least-cost combination of labour and capital is where:', ['MPL ÷ w = MPK ÷ r', 'MPL = MPK', 'w = r', 'output is at its maximum'], 'The isocost is tangent to the isoquant.'],
  [['Returns to scale', 'How output responds when all inputs are increased in the same proportion.'], ['Isoquant', 'A curve showing combinations of factors that produce the same output.'], ['Isocost line', 'A line showing combinations of factors with the same total cost.']],
  [
    { q: 'A firm uses labour with MPL = 30 units and capital with MPK = 20 units; w = 3,000 FCFA and r = 2,000 FCFA. Is it using the least-cost combination? What if the wage rises to 4,000 FCFA?', steps: ['MPL ÷ w = 30 ÷ 3,000 = **0.01**; MPK ÷ r = 20 ÷ 2,000 = **0.01**.', '**Equal, so this is the least-cost combination.**', 'At w = 4,000: MPL ÷ w = **0.0075 < 0.01**.', '**Capital now gives more output per franc, so the firm substitutes capital for labour** until the ratios are equal again.'] },
    { q: 'All inputs are doubled and output rises from 1,000 to 2,400 units. What returns to scale?', steps: ['Inputs ×2, output ×2.4.', '**Output rose by a greater proportion: increasing returns to scale.**'] },
  ]),
  L('aec-scale-2', 'aec-l6-scale', '8.2', 'Economies and diseconomies of scale', 18, ['Micro'], [
    '**Economies of scale** are the falls in **long-run average cost** as a firm grows. **Internal economies** arise inside the firm:\n- **technical**: large machines, specialisation, the law of increased dimensions (a tanker twice as long carries far more than twice as much)\n- **purchasing and marketing**: bulk discounts, advertising spread over more output\n- **financial**: large firms borrow more cheaply and raise capital on stock markets\n- **managerial**: specialist managers\n- **risk-bearing**: many products and markets\n- **research**: funds for new products.',
    '**External economies** arise from the growth of the **industry** in an area: a pool of skilled labour, specialist suppliers and repairers, shared infrastructure and training. Firms around the port of Douala gain from shipping agents, banks and transport links that serve them all.',
    '**Diseconomies of scale** make long-run average cost rise: problems of management, coordination and communication, low morale and loss of control in very large firms. External diseconomies include congestion and rising land prices and wages in crowded industrial areas.',
    'The lowest output at which long-run average cost reaches its minimum is the **minimum efficient scale**. Where it is very large compared with the market, a single firm may supply most efficiently: a **natural monopoly**, as in electricity transmission.',
  ], 'aec-economies', 'Internal economies come from the firm’s own growth; external economies from the industry’s growth around it.',
  ['A pool of skilled labour near many firms of the same industry is:', ['an external economy of scale', 'an internal technical economy', 'a diseconomy of scale', 'a fixed cost'], 'It comes from the industry’s concentration.'],
  [['Internal economies of scale', 'Cost savings that arise from the growth of the firm itself.'], ['External economies of scale', 'Cost savings for firms from the growth of the industry in an area.'], ['Minimum efficient scale', 'The lowest output at which long-run average cost is at its minimum.']],
  [
    { q: 'A firm doubles its plant: total cost rises from 10 million to 20 million FCFA and output from 1,000 to 2,400 units. What happens to average cost?', steps: ['Before: **10,000,000 ÷ 1,000 = 10,000 FCFA per unit**.', 'After: **20,000,000 ÷ 2,400 = 8,333 FCFA per unit**.', '**Average cost falls by about 17%: the firm enjoys economies of scale.**'] },
  ]),
];
