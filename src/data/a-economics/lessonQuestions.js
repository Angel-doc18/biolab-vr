// Extra questions for the end of the A Level Economics lessons (0725), so that
// every lesson ends with at least five questions on what it teaches.
//
// Convention: the correct option is written first; options are shuffled when shown.
import { QUESTIONS_U6 } from './lessonQuestionsU6';

const Q = (q, a, why) => ({ q, a, why });

export const LESSON_QUESTIONS = {
  // ---------- Lower Sixth, Term 1 ----------
  'aec-method-1': [
    Q('Paper 2 of A Level Economics contains:', ['a compulsory data-response section and essays', 'only multiple choice', 'only mapwork', 'an oral test'], 'Thursday 4 June, morning.'),
    Q('An economic model is used:', ['with stated assumptions, other things being equal', 'as an exact copy of reality', 'only in Paper 1', 'without any assumptions'], 'Ceteris paribus.'),
    Q('An answer that only describes, however neat, usually:', ['stays in the lowest mark level', 'earns full marks', 'is marked as evaluation', 'is not read'], 'Analysis and evaluation are needed.'),
    Q('A diagram in an economics answer should:', ['have labelled axes and curves and be referred to in the text', 'be decorative', 'have no labels', 'be drawn after the conclusion only'], 'Accuracy and use earn marks.'),
  ],
  'aec-method-2': [
    Q('If Qd = 80 − P and Qs = 2P − 10, the equilibrium quantity is:', ['50', '30', '40', '60'], '80 − P = 2P − 10 gives P = 30, so Q = 50.'),
    Q('The reward for capital is:', ['interest', 'rent', 'wages', 'profit'], 'Land earns rent, labour wages, enterprise profit.'),
    Q('A maximum price set below equilibrium causes:', ['a shortage', 'a surplus', 'no change', 'a fall in demand'], 'Quantity demanded exceeds quantity supplied.'),
    Q('An algebraic equilibrium is checked by:', ['putting the price into both equations to see that they give the same quantity', 'guessing', 'drawing a map', 'adding the two equations'], 'Both must agree.'),
  ],
  'aec-scope-1': [
    Q('Lionel Robbins defined economics in terms of:', ['ends and scarce means with alternative uses', 'money and banking only', 'the history of trade', 'government spending only'], '1932.'),
    Q('Which is a microeconomic question?', ['Why has the price of cassava risen?', 'Why has national output fallen?', 'Why is inflation high?', 'Why is the trade deficit large?'], 'One market.'),
    Q('"Unemployment fell last year" is:', ['a positive statement', 'a normative statement', 'a value judgement', 'an opinion'], 'It can be checked.'),
    Q('A mixed economy allocates resources through:', ['both markets and the state', 'markets only', 'the state only', 'tradition only'], 'Like Cameroon’s.'),
  ],
  'aec-scope-2': [
    Q('A straight-line PPC shows:', ['constant opportunity cost', 'increasing opportunity cost', 'no opportunity cost', 'falling opportunity cost'], 'Resources are equally suited to both goods.'),
    Q('An inward shift of the PPC could be caused by:', ['a war or natural disaster destroying resources', 'new technology', 'more workers', 'discovery of oil'], 'Capacity falls.'),
    Q('Choosing more capital goods now tends to:', ['shift the PPC further outward in the future', 'shift it inward', 'have no effect', 'move the economy inside the curve permanently'], 'More capacity later.'),
    Q('Moving from B (60 cassava, 80 cocoa) to C (80, 60) costs, per tonne of cassava:', ['1 tonne of cocoa', '3 tonnes', '1⁄3 tonne', '20 tonnes'], '20 cocoa for 20 cassava.'),
  ],
  'aec-cardinal-1': [
    Q('If TU rises from 48 to 56 utils with the fourth unit, MU of the fourth unit is:', ['8', '56', '14', '104'], '56 − 48.'),
    Q('When marginal utility is negative, total utility is:', ['falling', 'rising', 'at a maximum', 'zero'], 'Each extra unit reduces satisfaction.'),
    Q('The cardinal approach assumes utility:', ['can be measured in units', 'can only be ranked', 'is always zero', 'equals price'], 'Utils.'),
    Q('A consumer buys a good up to the point where:', ['its marginal utility, valued in money, equals its price', 'total utility is zero', 'marginal utility is highest', 'price is zero'], 'MU = P.'),
  ],
  'aec-cardinal-2': [
    Q('The equimarginal principle states that utility is maximised when:', ['the marginal utility per franc is equal for all goods bought', 'total utility is equal for all goods', 'prices are equal', 'MU is zero for all goods'], 'MUx ÷ Px = MUy ÷ Py.'),
    Q('The paradox of value was resolved by:', ['the idea of marginal utility', 'the quantity theory', 'comparative advantage', 'the multiplier'], 'The marginalists of the 1870s.'),
    Q('A fall in the price of X, other things equal, makes MUx ÷ Px:', ['rise, so more X is bought', 'fall', 'stay the same', 'become zero'], 'This gives the downward-sloping demand curve.'),
    Q('Water is cheap mainly because:', ['it is plentiful, so the marginal unit has low utility', 'its total utility is low', 'it is useless', 'it is taxed'], 'Marginal, not total, utility sets price.'),
  ],
  'aec-ordinal-1': [
    Q('The ordinal approach assumes the consumer can:', ['rank combinations of goods in order of preference', 'measure utility in utils', 'set prices', 'produce goods'], 'Only ranking is needed.'),
    Q('Indifference curves are convex to the origin because:', ['the marginal rate of substitution diminishes', 'prices rise', 'income falls', 'goods are perfect substitutes'], 'Steep at the top, flat at the bottom.'),
    Q('A consumer moves from (2 X, 6 Y) to (3 X, 4 Y) on the same curve. The MRS is:', ['2', '1', '3', '6'], '2 Y given up for 1 X.'),
    Q('An indifference map is:', ['a set of indifference curves, higher ones showing more satisfaction', 'a budget line', 'a map of markets', 'a supply schedule'], 'Each curve is one level of satisfaction.'),
  ],
  'aec-ordinal-2': [
    Q('The slope of the budget line is:', ['−Px ÷ Py', '−Py ÷ Px', 'M ÷ Px', 'the MRS always'], 'The price ratio.'),
    Q('At consumer equilibrium:', ['MRS = Px ÷ Py', 'MRS = 0', 'Px = Py', 'income is zero'], 'Tangency.'),
    Q('With income 1,200 FCFA and Px = 100 FCFA, the X intercept of the budget line is:', ['12', '1,200', '100', '6'], 'M ÷ Px.'),
    Q('The price-consumption curve traces equilibria as:', ['the price of one good changes', 'income changes', 'tastes change', 'both prices change equally'], 'It gives the demand curve.'),
  ],
  'aec-markets-1': [
    Q('Consumer surplus is the area:', ['below the demand curve and above the price', 'above the supply curve and below the price', 'under the supply curve', 'above the demand curve'], 'What buyers would pay minus what they pay.'),
    Q('A rise in consumers’ incomes shifts demand for a normal good:', ['to the right', 'to the left', 'not at all', 'along the curve'], 'More is bought at each price.'),
    Q('Which shifts the supply curve to the left?', ['a rise in the cost of raw materials', 'a fall in the good’s price', 'better technology', 'a subsidy'], 'Higher costs.'),
    Q('With Qd = 120 − 2P and Qs = 3P − 30, a maximum price of 25 causes a shortage of:', ['25 units', '10 units', '45 units', '70 units'], 'Qd = 70, Qs = 45.'),
  ],
  'aec-markets-2': [
    Q('VAT is an example of:', ['an ad valorem tax', 'a specific tax', 'a direct tax', 'a tariff only'], 'A percentage of price.'),
    Q('The incidence of a tax refers to:', ['who finally bears its burden', 'how much revenue it raises', 'when it is paid', 'its rate'], 'Buyers, sellers or both.'),
    Q('The deadweight loss of a tax arises because:', ['output falls below the market equilibrium', 'the state collects revenue', 'prices fall', 'producers gain'], 'Lost surplus not collected as revenue.'),
    Q('A subsidy of 15 per unit on 35,000 units costs the government:', ['525,000 FCFA', '50,000 FCFA', '35,000 FCFA', '15,000 FCFA'], '15 × 35,000.'),
  ],
  'aec-elasticity-1': [
    Q('At P = 80 on the demand curve Q = 100 − P, the point PED is:', ['−4', '−0.25', '−1', '−80'], '−1 × 80 ÷ 20.'),
    Q('Total revenue is at its maximum where PED is:', ['−1', '0', '−4', 'infinite'], 'Unit elasticity.'),
    Q('If a price fall lowers total spending, demand is:', ['price inelastic', 'price elastic', 'unit elastic', 'perfectly elastic'], 'Total outlay method.'),
    Q('Demand becomes more price elastic:', ['the longer the time buyers have to adjust', 'as substitutes disappear', 'for necessities', 'when the good is a small share of income'], 'They find substitutes.'),
  ],
  'aec-elasticity-2': [
    Q('A necessity has an income elasticity:', ['between 0 and 1', 'above 1', 'below 0', 'of exactly 1'], 'Demand rises more slowly than income.'),
    Q('If the price of cars rises 10% and demand for tyres falls 5%, XED is:', ['−0.5, so they are complements', '+0.5, so they are substitutes', '−2', '0'], '−5 ÷ 10.'),
    Q('A government seeking reliable tax revenue taxes goods with:', ['price inelastic demand', 'price elastic demand', 'no demand', 'positive cross elasticity'], 'Sales fall little.'),
    Q('As incomes in Cameroon grow, demand grows fastest for goods with:', ['high positive income elasticity', 'negative income elasticity', 'zero income elasticity', 'negative cross elasticity'], 'Luxuries.'),
  ],
  'aec-production-1': [
    Q('A vertical supply curve has a PES of:', ['0', '1', 'infinity', '−1'], 'Quantity cannot change.'),
    Q('A straight supply line that meets the price axis above the origin is:', ['price elastic', 'price inelastic', 'unit elastic', 'perfectly inelastic'], 'PES above 1.'),
    Q('Supply of fresh fish is inelastic in the short run because:', ['it is perishable and catches cannot be raised quickly', 'it is cheap', 'it is a luxury', 'demand is inelastic'], 'No stocks.'),
    Q('If price rises 20% and quantity supplied rises 6%, PES is:', ['0.3', '3.3', '1.2', '26'], '6 ÷ 20.'),
  ],
  'aec-production-2': [
    Q('Average product equals:', ['total product divided by the units of the variable factor', 'the extra output of the last worker', 'total cost divided by output', 'price times output'], 'Output per worker.'),
    Q('MP cuts AP:', ['at the maximum of AP', 'at the minimum of AP', 'where TP is zero', 'never'], 'The marginal-average rule.'),
    Q('Stage III of production begins where:', ['marginal product becomes negative', 'AP is at its maximum', 'MP is at its maximum', 'output begins'], 'Extra workers reduce output.'),
    Q('Diminishing returns apply:', ['in the short run, when at least one factor is fixed', 'only in the long run', 'when all factors vary', 'only to land'], 'A fixed factor is needed.'),
  ],
  'aec-scale-1': [
    Q('Constant returns to scale mean that doubling all inputs:', ['doubles output', 'more than doubles output', 'less than doubles output', 'leaves output unchanged'], 'Output in the same proportion.'),
    Q('The slope of the isocost line is:', ['−w ÷ r', '−r ÷ w', 'MPL ÷ MPK always', 'zero'], 'The ratio of factor prices.'),
    Q('If the wage rises while the price of capital is unchanged, a firm tends to:', ['substitute capital for labour', 'hire more labour', 'leave its mix unchanged', 'stop production'], 'MPL ÷ w falls.'),
    Q('The marginal rate of technical substitution equals:', ['MPL ÷ MPK', 'w × r', 'output ÷ cost', 'MPK × MPL'], 'The slope of the isoquant.'),
  ],
  'aec-scale-2': [
    Q('Spreading advertising over a larger output is:', ['a marketing economy of scale', 'a diseconomy of scale', 'an external economy', 'diminishing returns'], 'Internal to the firm.'),
    Q('Managerial diseconomies arise when a firm:', ['becomes too large to coordinate and control well', 'is small', 'buys in bulk', 'uses specialist managers'], 'Communication problems.'),
    Q('A natural monopoly exists when:', ['the minimum efficient scale is large compared with the market', 'there are many small firms', 'costs rise with output', 'there are no fixed costs'], 'One firm supplies at lowest cost.'),
    Q('If doubling a plant raises cost from 10 to 20 million FCFA and output from 1,000 to 2,400 units, average cost:', ['falls from 10,000 to about 8,333 FCFA', 'rises', 'stays at 10,000 FCFA', 'doubles'], 'Economies of scale.'),
  ],

  // ---------- Lower Sixth, Term 2 ----------
  'aec-costs-1': [
    Q('Accounting profit differs from economic profit because it ignores:', ['implicit costs', 'explicit costs', 'revenue', 'taxes'], 'Such as the owner’s own time.'),
    Q('Zero economic profit means the firm is earning:', ['normal profit', 'a loss', 'supernormal profit', 'no revenue'], 'Normal profit is counted as a cost.'),
    Q('At zero output, total cost equals:', ['total fixed cost', 'zero', 'total variable cost', 'marginal cost'], 'Variable cost is zero.'),
    Q('Wages of casual workers paid by the day are usually:', ['a variable cost', 'a fixed cost', 'an implicit cost', 'a sunk cost'], 'They change with output.'),
  ],
  'aec-costs-2': [
    Q('If TC is 176 at 4 units and 210 at 5 units, the MC of the fifth unit is:', ['34', '42', '210', '44'], '210 − 176.'),
    Q('With a fixed wage, MC = w ÷ MP. So MC is at its minimum when:', ['marginal product is at its maximum', 'average product is at its minimum', 'output is zero', 'total product is falling'], 'Costs mirror production.'),
    Q('The gap between ATC and AVC:', ['narrows as output rises, because it is AFC', 'widens as output rises', 'is constant', 'equals MC'], 'AFC falls continuously.'),
    Q('When MC is above ATC, ATC is:', ['rising', 'falling', 'at its minimum', 'zero'], 'The marginal pulls the average up.'),
  ],
  'aec-revenue-1': [
    Q('The SRATC curve is U-shaped because of:', ['diminishing returns to the variable factor', 'economies of scale', 'diseconomies of scale', 'taxes'], 'Short-run reason.'),
    Q('An L-shaped LRAC suggests that:', ['costs fall to the minimum efficient scale and then stay roughly constant', 'costs always rise', 'there are no economies of scale', 'only small firms survive'], 'Common in manufacturing.'),
    Q('The LRAC touches each SRATC curve:', ['at one point, the lowest cost possible for that output', 'at its minimum always', 'nowhere', 'at every point'], 'The envelope.'),
    Q('A firm whose costs fall from 50 to 40 FCFA a unit as it moves to a bigger plant enjoys:', ['economies of scale', 'diseconomies of scale', 'diminishing returns', 'a fall in demand'], 'Long-run cost falls.'),
  ],
  'aec-revenue-2': [
    Q('Average revenue is the same as:', ['price', 'marginal revenue always', 'total revenue', 'profit per unit'], 'TR ÷ Q.'),
    Q('Under perfect competition, MR equals:', ['the market price', 'zero', 'half the price', 'average cost'], 'P = AR = MR.'),
    Q('If 4 units sell at 60 and 5 units at 50, MR of the fifth unit is:', ['10', '50', '250', '60'], '250 − 240.'),
    Q('A firm aiming at maximum sales revenue produces where:', ['MR = 0', 'MR = MC', 'AR = AC', 'MC is lowest'], 'TR is at its peak.'),
  ],
  'aec-perfect-1': [
    Q('Perfect knowledge in perfect competition means:', ['all buyers and sellers know prices and methods', 'firms advertise heavily', 'only the state knows prices', 'firms keep secrets'], 'No information failure.'),
    Q('Profit per unit at the chosen output equals:', ['AR − ATC', 'MR − MC', 'P − AVC', 'TR − TC'], 'Then multiply by output.'),
    Q('If P = 60, MC = 60 at 10 units and ATC = 32.8, profit is:', ['272', '600', '328', '27.2'], '(60 − 32.8) × 10.'),
    Q('The perfectly competitive firm’s demand curve is:', ['horizontal at the market price', 'downward sloping', 'vertical', 'the industry demand curve'], 'It is a price taker.'),
  ],
  'aec-perfect-2': [
    Q('A firm with P below ATC but above AVC in the short run should:', ['keep producing to cover part of its fixed costs', 'shut down at once', 'raise its price', 'double its output'], 'The loss is smaller than its fixed cost.'),
    Q('The firm’s short-run supply curve is:', ['its MC curve above minimum AVC', 'its ATC curve', 'its AR curve', 'its AVC curve'], 'It supplies where P = MC.'),
    Q('Losses in a perfectly competitive industry lead in the long run to:', ['firms leaving, supply shifting left and price rising', 'more firms entering', 'lower prices', 'monopoly'], 'Until normal profit is restored.'),
    Q('Long-run equilibrium in perfect competition is both productively and allocatively efficient because:', ['P = MC = minimum ATC', 'P > MC', 'firms advertise', 'profits are supernormal'], 'Both conditions hold.'),
  ],
  'aec-monopoly-1': [
    Q('A patent is a barrier to entry because:', ['it gives the holder the legal right to be the only producer for a time', 'it lowers costs', 'it raises demand', 'it is a tax'], 'Legal barrier.'),
    Q('With AR = 100 − 5Q and MR = 100 − 10Q, if MC = MR at Q = 6, price is:', ['70', '40', '60', '100'], '100 − 30.'),
    Q('Monopoly is allocatively inefficient because:', ['price is above marginal cost', 'price equals marginal cost', 'it has no profit', 'it produces at minimum ATC'], 'Consumers value the next unit above its cost.'),
    Q('An argument in favour of some monopolies is that:', ['economies of scale and research funded by profit may lower costs over time', 'they always charge low prices', 'they have no barriers', 'they make no profit'], 'Dynamic efficiency.'),
  ],
  'aec-monopoly-2': [
    Q('Charging students a lower bus fare than adults is an example of:', ['third-degree price discrimination', 'first-degree price discrimination', 'perfect competition', 'a cost difference'], 'Groups of buyers.'),
    Q('Price discrimination fails if:', ['buyers in the cheap market can resell to the dear market', 'markets are separated', 'elasticities differ', 'the firm has monopoly power'], 'Separation is essential.'),
    Q('Second-degree discrimination charges different prices according to:', ['the quantity bought', 'the buyer’s age', 'the buyer’s willingness to pay exactly', 'the cost of production'], 'Bulk or block pricing.'),
    Q('A discriminating monopolist sets output in each market where:', ['MR in that market equals MC', 'price equals MC', 'AR equals AC', 'MR is zero'], 'MR equal across markets.'),
  ],
  'aec-imperfect-1': [
    Q('In the short run a monopolistically competitive firm may earn:', ['supernormal profit', 'only losses', 'only normal profit', 'no revenue'], 'Like a monopolist.'),
    Q('In the long run, the demand curve of a monopolistically competitive firm is:', ['tangent to its ATC curve', 'horizontal', 'above ATC everywhere', 'vertical'], 'Normal profit.'),
    Q('A benefit of monopolistic competition is:', ['variety and choice for consumers', 'minimum average cost', 'price equal to MC', 'no advertising'], 'Differentiated products.'),
    Q('The theory of monopolistic competition was set out by:', ['Chamberlin and Joan Robinson in 1933', 'Ricardo in 1817', 'Keynes in 1936', 'Smith in 1776'], 'Both in 1933.'),
  ],
  'aec-imperfect-2': [
    Q('The kinked demand curve assumes rivals will:', ['match price cuts but not price rises', 'match price rises only', 'ignore all changes', 'always collude'], 'Hence price rigidity.'),
    Q('In the kinked model, a rise in MC within the gap in MR:', ['leaves price and output unchanged', 'raises price', 'lowers output', 'ends the oligopoly'], 'MC still crosses the vertical part.'),
    Q('In the prisoners’ dilemma, each firm’s dominant strategy is to:', ['cheat, though both would gain from cooperation', 'cooperate', 'leave the market', 'raise prices'], 'Both end up worse off.'),
    Q('A weakness of the kinked demand model is that it:', ['does not explain how the price at the kink was set', 'explains too much', 'uses no diagram', 'assumes many firms'], 'It explains rigidity only.'),
  ],
  'aec-factors-1': [
    Q('If MP = 20 loaves and each loaf sells for 500 FCFA in a competitive market, MRP is:', ['10,000 FCFA', '20 FCFA', '500 FCFA', '25 FCFA'], '20 × 500.'),
    Q('The firm’s demand curve for labour is:', ['the falling part of its MRP curve', 'its supply curve', 'its MC curve', 'horizontal'], 'Hire where MRP = wage.'),
    Q('Under monopoly in the goods market, MRP is below VMP because:', ['MR is below price', 'MP is higher', 'wages are lower', 'output is fixed'], 'MRP = MP × MR.'),
    Q('An increase in the price of the product a worker makes:', ['raises MRP and shifts labour demand right', 'lowers MRP', 'has no effect', 'lowers wages'], 'Derived demand.'),
  ],
  'aec-factors-2': [
    Q('A compensating wage differential is paid for:', ['unpleasant or dangerous work', 'easy work', 'part-time work only', 'work in the family'], 'To attract workers.'),
    Q('In a monopsony labour market, a union or minimum wage can:', ['raise both wages and employment', 'only cut employment', 'only cut wages', 'have no effect'], 'The single employer was holding wages down.'),
    Q('With demand W = 10 − 0.05L and supply W = 0.05L, a minimum wage of 6 creates unemployment of:', ['40', '20', '80', '120'], 'Supply 120, demand 80.'),
    Q('Cameroon’s guaranteed minimum wage is known as the:', ['SMIG', 'TVA', 'CNPS', 'BEAC'], 'Salaire minimum interprofessionnel garanti.'),
  ],
  'aec-rent-1': [
    Q('On a factor-market diagram, economic rent is the area:', ['above the supply curve and below the price', 'under the supply curve', 'under the demand curve', 'below the price axis'], 'A surplus over transfer earnings.'),
    Q('Ricardo explained the rent of land as arising from:', ['fixed supply and differences in fertility', 'high wages', 'taxes', 'interest rates'], '1817.'),
    Q('If a footballer earns 50 million FCFA and could earn 2 million elsewhere, economic rent is:', ['48 million FCFA', '2 million FCFA', '50 million FCFA', '52 million FCFA'], 'Earnings minus transfer earnings.'),
    Q('A tax on pure economic rent:', ['would not reduce the supply of the factor', 'would end supply', 'raises transfer earnings', 'is impossible'], 'The factor stays in use.'),
  ],
  'aec-rent-2': [
    Q('In the loanable funds theory, the supply of funds comes from:', ['saving', 'investment', 'taxes', 'imports'], 'Demand comes from investment.'),
    Q('Profit acts as a signal because:', ['high profits show where consumers want more resources used', 'it is a tax', 'it is fixed', 'it is paid to workers'], 'Resources follow profit.'),
    Q('Schumpeter’s "creative destruction" refers to:', ['innovation replacing old products and firms', 'war damage', 'monopoly pricing', 'falling demand'], 'Profits reward innovation.'),
    Q('Interest rates on small loans are often higher because:', ['risk and administration costs per franc lent are higher', 'they are taxed', 'savers prefer them', 'the BEAC sets them high'], 'Cost and risk.'),
  ],

  // ---------- Lower Sixth, Term 3 ----------
  'aec-failure-1': [
    Q('Productive efficiency means producing:', ['at the lowest point of average cost', 'where P = MC', 'where profit is greatest', 'the largest output'], 'Minimum ATC.'),
    Q('A good is non-excludable when:', ['people who do not pay cannot be kept from using it', 'one person’s use reduces another’s', 'it is free of cost', 'it is made by the state'], 'Street lighting.'),
    Q('Akerlof’s "market for lemons" is about:', ['asymmetric information in the used car market', 'citrus farming', 'monopoly', 'public goods'], '1970.'),
    Q('A demerit good would be:', ['over-consumed in a free market', 'under-consumed', 'consumed at the optimum', 'not traded'], 'People underrate the harm.'),
  ],
  'aec-failure-2': [
    Q('Marginal social cost equals:', ['marginal private cost plus marginal external cost', 'marginal private cost only', 'price', 'marginal benefit'], 'MSC = MPC + MEC.'),
    Q('With a positive externality, the free market produces:', ['less than the social optimum', 'more than the social optimum', 'the optimum', 'nothing'], 'Social benefit exceeds private benefit.'),
    Q('In the example with MPC = 20 + Q, MSC = 40 + Q and demand 100 − Q, the social optimum is:', ['30 units', '40 units', '20 units', '50 units'], '100 − Q = 40 + Q.'),
    Q('The Coase theorem says private bargaining can reach the optimum if:', ['property rights are clear and bargaining is cheap', 'the state sets prices', 'many people are affected', 'there is a tax'], '1960.'),
  ],
  'aec-intervention-1': [
    Q('A difficulty with Pigouvian taxes is:', ['measuring the external cost in money', 'collecting any revenue', 'that they raise output', 'that they are always regressive'], 'Information problem.'),
    Q('A weakness of regulation compared with taxes is that it:', ['gives no reward for doing better than the limit', 'raises revenue', 'is always cheap to enforce', 'is flexible'], 'Command and control.'),
    Q('Tradable permits ensure cuts in pollution are made:', ['by the firms that can cut most cheaply', 'equally by all firms', 'only by the state', 'by consumers'], 'Firms trade the right to pollute.'),
    Q('A subsidy of 20 per unit on 40 units costs the state:', ['800', '20', '40', '60'], '20 × 40.'),
  ],
  'aec-intervention-2': [
    Q('Regulatory capture means:', ['the regulator comes to serve the interests of the firms it regulates', 'the state takes over firms', 'firms capture markets', 'prices are frozen'], 'A cause of government failure.'),
    Q('A price control on rice that leads to smuggling across borders is an example of:', ['government failure through unintended consequences', 'market efficiency', 'a public good', 'a positive externality'], 'Intervention made things worse.'),
    Q('If a CPI rises from 120 to 126, inflation is:', ['5%', '6%', '126%', '0.6%'], '6 ÷ 120 × 100.'),
    Q('A usual objective of macroeconomic policy is:', ['stable prices', 'rising unemployment', 'a falling GDP', 'a larger informal sector'], 'With growth, jobs and a sustainable balance of payments.'),
  ],
  'aec-clinics-1': [
    Q('If quantity demanded rises from 100 to 120 when price falls from 50 to 45, PED is:', ['−2', '−0.5', '−1', '−20'], '+20% ÷ −10%.'),
    Q('Profit equals:', ['total revenue minus total cost', 'price minus quantity', 'marginal revenue', 'average cost times quantity'], 'TR − TC.'),
    Q('If MR = 70 and MC of the next unit is 80, the firm should:', ['not produce that unit', 'produce it', 'double output', 'shut down'], 'It adds more to cost than revenue.'),
    Q('Evaluation in a data question often asks:', ['what the data cannot show and what else might explain them', 'for a copy of the table', 'for the colours used', 'for a definition only'], 'Limits of data.'),
  ],
  'aec-clinics-2': [
    Q('A two-part essay question should have time divided:', ['according to the marks for each part', 'equally always', 'mostly on part (a)', 'at random'], 'Marks per minute.'),
    Q('A strong evaluation point in microeconomics often depends on:', ['elasticities, time and market structure', 'the length of the answer', 'handwriting', 'the number of definitions'], 'Under what conditions?'),
    Q('The introduction to an essay should:', ['define the key terms briefly', 'give the conclusion in full', 'list all theories', 'be left out'], 'Set up the analysis.'),
    Q('In an essay on monopoly, a balanced answer would mention:', ['both deadweight loss and possible economies of scale', 'only high prices', 'only profits', 'only patents'], 'For and against.'),
  ],
  ...QUESTIONS_U6,
};
