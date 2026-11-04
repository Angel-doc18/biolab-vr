// A Level Economics lessons (0725), Lower Sixth, Terms 2 and 3: short-run
// costs, long-run costs and revenue, perfect competition, monopoly and price
// discrimination, monopolistic competition and oligopoly, the demand for
// labour and wages, rent, interest and profit, market failure, government
// intervention, and data-response and essay clinics.

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

export const LESSONS_EL6B = [
  // ---------- 9. Short-run costs ----------
  L('aec-costs-1', 'aec-l6-costs', '9.1', 'Explicit and implicit costs; fixed, variable and total cost', 18, ['Micro'], [
    'Economists count **all** the costs of using resources. **Explicit costs** are payments to outsiders: wages, rent, raw materials, interest. **Implicit costs** are the opportunity costs of resources the owner already has: the salary the owner gives up, the interest the owner’s capital could earn elsewhere.',
    '**Accounting profit** = revenue − explicit costs. **Economic profit** = revenue − explicit − implicit costs. **Normal profit** is the minimum return that keeps the owner in the business; it is counted as a cost, so zero economic profit means the firm earns exactly normal profit.',
    'In the short run, **fixed costs** (TFC) do not change with output: rent, insurance, interest on loans, salaries of permanent staff. They must be paid even at zero output. **Variable costs** (TVC) rise with output: raw materials, fuel, wages of casual workers. **Total cost** TC = TFC + TVC.',
    'On a graph, TFC is a horizontal line; TVC starts at the origin, rising slowly at first and then faster as diminishing returns set in; TC has the same shape as TVC, raised by the fixed cost.',
  ], 'aec-cost-totals', 'At zero output, total cost equals fixed cost: that is where the TC curve meets the cost axis.',
  ['A cost that must be paid even when output is zero is:', ['a fixed cost', 'a variable cost', 'a marginal cost', 'an implicit cost only'], 'For example rent.'],
  [['Explicit cost', 'A payment made to others for the use of their resources.'], ['Implicit cost', 'The opportunity cost of resources already owned by the firm.'], ['Normal profit', 'The minimum profit needed to keep the entrepreneur in the industry, counted as a cost.']],
  [
    { q: 'A shop takes 12 million FCFA a year. Its explicit costs are 8 million. The owner could earn 3 million as a manager elsewhere, and the 5 million of capital in the shop could earn 0.5 million interest. Find accounting and economic profit.', steps: ['Accounting profit = 12 − 8 = **4 million FCFA**.', 'Implicit costs = 3 + 0.5 = **3.5 million FCFA**.', 'Economic profit = 4 − 3.5 = **0.5 million FCFA**.', '**The shop earns more than normal profit, so staying in business is the right choice.**'] },
  ]),
  L('aec-costs-2', 'aec-l6-costs', '9.2', 'Average and marginal cost curves', 20, ['Micro'], [
    'From the totals come the **unit costs**: **AFC = TFC ÷ Q**, **AVC = TVC ÷ Q**, **ATC = TC ÷ Q = AFC + AVC**, and **marginal cost MC = ΔTC ÷ ΔQ** (which equals ΔTVC ÷ ΔQ, since fixed cost does not change).',
    '**AFC** falls continuously as the same fixed cost is spread over more units. **AVC, ATC and MC** are U-shaped in the short run: they fall at first because of increasing returns to the variable factor, then rise because of **diminishing returns**.',
    'Costs mirror production: with a wage w, **MC = w ÷ MP** and **AVC = w ÷ AP**. So when MP is at its maximum, MC is at its minimum; when AP is at its maximum, AVC is at its minimum.',
    'The **MC curve cuts AVC and ATC at their lowest points**. When the cost of the next unit is below the average, the average falls; when it is above, the average rises. The gap between ATC and AVC is AFC, which narrows as output grows.',
  ], 'aec-cost-curves', 'Plot marginal cost at the midpoint between outputs: MC of the 5th unit belongs halfway between 4 and 5.',
  ['Marginal cost cuts average variable cost:', ['at the lowest point of AVC', 'at the highest point of AVC', 'where AVC is zero', 'never'], 'The marginal-average rule.'],
  [['Average total cost', 'Total cost divided by output.'], ['Marginal cost', 'The change in total cost from producing one more unit.'], ['Average fixed cost', 'Fixed cost divided by output; it falls as output rises.']],
  [
    { q: 'Fixed cost is 60. Total variable cost for 1 to 8 units is 40, 70, 90, 116, 150, 198, 266 and 360. Find MC, AVC and ATC, and the outputs of minimum AVC and ATC.', steps: ['TC = TVC + 60: **100, 130, 150, 176, 210, 258, 326, 420**.', 'MC: **40, 30, 20, 26, 34, 48, 68, 94**.', 'AVC: **40, 35, 30, 29, 30, 33, 38, 45**: lowest (29) at **4 units**.', 'ATC: **100, 65, 50, 44, 42, 43, 46.6, 52.5**: lowest (42) at **5 units**.', '**MC (26, then 34) passes through AVC near 4 units and (34, then 48) through ATC near 5 units: each at the minimum.**'] },
  ]),

  // ---------- 10. Long-run costs and revenue ----------
  L('aec-revenue-1', 'aec-l6-revenue', '10.1', 'Long-run average cost: the envelope curve', 18, ['Micro'], [
    'In the long run a firm can choose its **plant size**. Each plant has its own short-run ATC curve (SRATC). The **long-run average cost curve** (LRAC) shows the lowest cost of producing each output when the firm can choose any plant size.',
    'The LRAC is an **envelope**: it touches each SRATC curve at one point, the lowest cost reachable for that output. Only at the minimum of the LRAC does it touch an SRATC at that curve’s own minimum.',
    'The LRAC slopes **down** while there are **economies of scale**, is **flat** with constant returns, and slopes **up** with **diseconomies of scale**. Many industries have an L-shaped LRAC: costs fall to the minimum efficient scale, then stay roughly constant over a wide range.',
    'Short-run and long-run shapes have different causes: the SRATC is U-shaped because of **diminishing returns** to a variable factor; the LRAC is U-shaped because of **economies and diseconomies of scale**.',
  ], 'aec-lrac', 'Short run: diminishing returns. Long run: economies and diseconomies of scale. Never mix the two explanations.',
  ['The long-run average cost curve slopes down because of:', ['economies of scale', 'diminishing returns', 'fixed costs', 'taxes'], 'All factors are variable in the long run.'],
  [['Long-run average cost', 'The lowest average cost of each output when all factors can be varied.'], ['Envelope curve', 'The LRAC, which encloses the short-run average cost curves from below.']],
  [
    { q: 'A firm can build a small plant (lowest cost 50 FCFA a unit at 2,000 units), a medium plant (lowest cost 40 FCFA at 5,000 units) or a large plant (lowest cost 46 FCFA at 9,000 units). Describe its LRAC.', steps: ['From small to medium, unit cost falls from 50 to 40: **economies of scale**.', 'From medium to large, it rises from 40 to 46: **diseconomies of scale**.', '**The LRAC is U-shaped with its minimum near 5,000 units, the minimum efficient scale among these plants.**'] },
  ]),
  L('aec-revenue-2', 'aec-l6-revenue', '10.2', 'Total, average and marginal revenue', 18, ['Micro'], [
    '**Total revenue** TR = P × Q. **Average revenue** AR = TR ÷ Q, which is the **price**: the AR curve is the firm’s demand curve. **Marginal revenue** MR = ΔTR ÷ ΔQ, the extra revenue from selling one more unit.',
    'Under **perfect competition** the firm is a price taker: it can sell any amount at the market price, so **P = AR = MR**, a horizontal line, and TR is a straight line from the origin.',
    'Under **imperfect competition** the firm faces a downward-sloping demand curve: to sell one more unit it must lower the price on all units, so **MR is below AR**. For a straight-line AR, the MR line starts at the same point on the price axis and **falls twice as steeply**, cutting the quantity axis halfway to AR.',
    'TR rises while MR is positive (the elastic part of demand), is at its **maximum where MR = 0** (unit elasticity), and falls when MR is negative (the inelastic part). The link is **MR = P(1 + 1 ÷ PED)**.',
  ], 'aec-revenue-curves', 'A firm seeking maximum sales revenue produces where MR = 0; a firm seeking maximum profit produces where MR = MC.',
  ['For a straight-line demand curve P = 100 − 10Q, the MR curve is:', ['MR = 100 − 20Q', 'MR = 100 − 10Q', 'MR = 100 − 5Q', 'MR = 100'], 'Same intercept, twice the slope.'],
  [['Average revenue', 'Total revenue divided by quantity: the price.'], ['Marginal revenue', 'The change in total revenue from selling one more unit.']],
  [
    { q: 'Demand is P = 100 − 10Q. Find TR and MR for Q = 1 to 6 and the output of maximum revenue.', steps: ['P: 90, 80, 70, 60, 50, 40.', 'TR: **90, 160, 210, 240, 250, 240**.', 'MR: **90, 70, 50, 30, 10, −10**.', '**TR is greatest (250) at Q = 5, where MR passes through zero**; beyond it demand is inelastic and MR negative.'] },
  ]),

  // ---------- 11. Perfect competition ----------
  L('aec-perfect-1', 'aec-l6-perfect', '11.1', 'Perfect competition: assumptions and short-run equilibrium', 22, ['Micro'], [
    'The assumptions of **perfect competition**: many small buyers and sellers; an **identical** (homogeneous) product; **perfect knowledge** of prices and methods; **free entry and exit**; perfectly mobile factors. No firm can influence the price: each is a **price taker**.',
    'The market price is set by industry demand and supply. The firm sees a horizontal demand curve at that price: **P = AR = MR**.',
    'Every firm maximises profit where **MC = MR, with MC rising**. Below that output an extra unit adds more to revenue than to cost; above it, the reverse. For the perfectly competitive firm the rule becomes **P = MC**.',
    'In the **short run** the firm may make **supernormal profit** (P above ATC), **normal profit** (P = ATC) or a **loss** (P below ATC). Profit per unit is the gap between AR and ATC at the chosen output, and total profit is that gap times output: a rectangle on the diagram.',
  ], 'aec-perfect', 'Find output where MC meets the price line, go up to read ATC, and the rectangle between price and ATC is profit.',
  ['A perfectly competitive firm maximises profit where:', ['price equals marginal cost, with MC rising', 'price equals average cost', 'MR is zero', 'AVC is at its minimum'], 'P = MR for a price taker.'],
  [['Price taker', 'A firm that must accept the market price because it is too small to affect it.'], ['Supernormal profit', 'Profit above normal profit: total revenue greater than total cost including normal profit.']],
  [
    { q: 'The market price is 60 FCFA. The firm’s MC equals 60 at an output of 10 units, where ATC is 32.8 FCFA. Find its profit.', steps: ['Profit-maximising output: **P = MC at 10 units**.', 'Profit per unit = P − ATC = 60 − 32.8 = **27.2 FCFA**.', 'Total profit = 27.2 × 10 = **272 FCFA of supernormal profit**.', 'In the long run this attracts new firms.'] },
  ]),
  L('aec-perfect-2', 'aec-l6-perfect', '11.2', 'The shutdown point and long-run equilibrium', 20, ['Micro'], [
    'A firm making a loss in the short run should **keep producing if price covers average variable cost**: its revenue pays all variable costs and part of the fixed costs, which it must pay anyway. If price falls **below the minimum of AVC**, it should **shut down**, because producing would add to its losses. The minimum of AVC is the **shutdown point**.',
    'So the firm’s **short-run supply curve** is its **MC curve above the minimum of AVC**; the industry supply curve is the sum of these curves.',
    'In the **long run**, supernormal profit attracts **new firms**: industry supply shifts right and price falls. Losses make firms **leave**: supply shifts left and price rises. Entry and exit stop when **P = minimum ATC** and every firm earns **normal profit**.',
    'Long-run equilibrium is **productively efficient** (output at minimum ATC) and **allocatively efficient** (P = MC): no other market structure achieves both. Critics note that perfect competition is rare, small firms may lack funds for research, and identical products give consumers little choice.',
  ], 'aec-perfect-long', 'Short run: produce if P ≥ AVC. Long run: stay if P ≥ ATC.',
  ['In the short run a firm should shut down when:', ['price falls below average variable cost', 'price falls below average total cost', 'it makes normal profit', 'MC equals MR'], 'It cannot cover even its variable costs.'],
  [['Shutdown point', 'The price equal to minimum AVC, below which a firm stops producing in the short run.'], ['Productive efficiency', 'Producing at the lowest point of average cost.'], ['Allocative efficiency', 'Producing where price equals marginal cost.']],
  [
    { q: 'A firm’s fixed cost is 128 FCFA. At a price of 19.5 FCFA its best output is 7 units, where ATC is 30.8 and AVC is 12.5. Should it produce?', steps: ['Loss if it produces = (30.8 − 19.5) × 7 = **about 79 FCFA**.', 'Loss if it shuts down = the fixed cost = **128 FCFA**.', 'Price (19.5) is above AVC (12.5), so revenue covers variable costs and part of fixed cost.', '**Produce in the short run: the loss is smaller.** In the long run, unless price rises to at least 30 (minimum ATC), it leaves.'] },
  ]),

  // ---------- 12. Monopoly ----------
  L('aec-monopoly-1', 'aec-l6-monopoly', '12.1', 'Monopoly: barriers to entry and equilibrium', 22, ['Micro'], [
    'A **pure monopoly** is a single seller of a product with no close substitutes. In law and policy a firm with a large share of a market is often treated as having monopoly power. The monopolist is a **price maker**: it faces the downward-sloping market demand curve.',
    '**Barriers to entry** protect it: legal rights (patents, licences, state concessions), control of essential raw materials or outlets, large **economies of scale** (natural monopoly), heavy start-up costs, brand loyalty and deliberate tactics such as limit pricing.',
    'The monopolist maximises profit where **MC = MR**, and charges the highest price buyers will pay for that output, read from the **AR curve**. Because barriers keep rivals out, **supernormal profit can last into the long run**.',
    'Compared with a perfectly competitive industry with the same costs, monopoly gives a **higher price and lower output**; P is above MC, so it is **allocatively inefficient**, causing a **deadweight loss**, and it need not produce at minimum ATC. In its defence: economies of scale may give lower costs than many small firms could, and profits can fund research (dynamic efficiency).',
  ], 'aec-monopoly', 'Output from MC = MR; price from the AR curve above that output, never from the MC curve.',
  ['A monopolist sets its price:', ['on the AR curve at the output where MC = MR', 'where MC cuts AR', 'where MR is zero', 'at minimum ATC'], 'It charges what buyers will pay for that output.'],
  [['Monopoly', 'A market with a single seller and no close substitutes.'], ['Barrier to entry', 'Anything that prevents new firms from entering a market.'], ['Natural monopoly', 'An industry in which one firm can supply the whole market at lower cost than several firms.']],
  [
    { q: 'A monopolist faces AR = 100 − 5Q, so MR = 100 − 10Q; its MC = 10 + 5Q and ATC at Q = 6 is 45. Find its output, price and profit, and compare with competition.', steps: ['MC = MR: 10 + 5Q = 100 − 10Q, so **Q = 6**.', 'Price from AR: 100 − 30 = **70**.', 'Profit = (70 − 45) × 6 = **150**.', 'Competitive output where P = MC: 100 − 5Q = 10 + 5Q, so **Q = 9 and P = 55**.', '**Monopoly: 3 fewer units at a price 15 higher.** Deadweight loss = ½ × (70 − 40) × 3 = **45**, where 40 is MC at Q = 6.'] },
  ]),
  L('aec-monopoly-2', 'aec-l6-monopoly', '12.2', 'Price discrimination', 20, ['Micro'], [
    '**Price discrimination** is charging different prices to different buyers for the **same product**, where the differences are **not** due to differences in cost. Examples: student and adult fares, peak and off-peak telephone or electricity rates, different prices in home and export markets.',
    'Conditions:\n- the seller has some **monopoly power**\n- the markets can be **separated**, so buyers cannot resell from the cheap market to the dear one\n- the markets have **different price elasticities of demand**.',
    'Degrees:\n- **first degree**: each buyer is charged the most that buyer is willing to pay, so all consumer surplus goes to the seller\n- **second degree**: prices differ by quantity bought (bulk rates, blocks of units)\n- **third degree**: buyers are divided into groups, each with its own price.',
    'Under third-degree discrimination the firm sets **MR equal in each market and equal to MC**, so the **higher price is charged in the less elastic market**. Effects: higher profit; some buyers pay more, others (often poorer groups) pay less and may be served who would otherwise not be; output may be larger than under a single price.',
  ], 'aec-discrimination', 'The inelastic market pays more: that is the whole logic of discrimination.',
  ['Under third-degree price discrimination, the higher price is set in the market where demand is:', ['less elastic', 'more elastic', 'perfectly elastic', 'unit elastic'], 'Buyers there respond less to price.'],
  [['Price discrimination', 'Selling the same product at different prices to different buyers for reasons other than cost.'], ['Third-degree discrimination', 'Charging different prices to separated groups of buyers.']],
  [
    { q: 'A firm with MC = 20 sells in market A (P = 100 − QA) and market B (P = 60 − QB). Find the price in each market.', steps: ['Market A: MR = 100 − 2QA = 20, so **QA = 40 and PA = 60**.', 'Market B: MR = 60 − 2QB = 20, so **QB = 20 and PB = 40**.', 'Elasticities at those points: A: −60 ÷ 40 = **−1.5**; B: −40 ÷ 20 = **−2**.', '**The higher price (60) is in market A, where demand is less elastic.**'] },
  ]),

  // ---------- 13. Imperfect competition ----------
  L('aec-imperfect-1', 'aec-l6-imperfect', '13.1', 'Monopolistic competition and excess capacity', 20, ['Micro'], [
    '**Monopolistic competition**, analysed by Edward Chamberlin and by Joan Robinson in 1933, has **many firms** selling **differentiated products** (by brand, quality, location or service), with **free entry and exit**. Each firm has a little monopoly power over its own brand, so it faces a downward-sloping but fairly **elastic** demand curve.',
    'In the **short run** the firm maximises profit at MC = MR and may earn supernormal profit, as a monopolist does.',
    'In the **long run**, profit attracts new firms with close substitutes; each firm’s demand curve shifts left (and becomes more elastic) until it is **tangent to the ATC curve**. Then **P = ATC** at the profit-maximising output and every firm earns **normal profit**.',
    'The tangency lies on the **falling** part of ATC, so the firm produces **below the output of minimum average cost**: the **excess capacity theorem**. P is above MC, so it is not allocatively efficient either. The benefit is **variety and choice**: many hairdressers, bakeries and restaurants, each a little different.',
  ], 'aec-monopolistic', 'Long run in monopolistic competition: AR just touches ATC, at the same output where MC = MR.',
  ['Excess capacity in monopolistic competition means each firm:', ['produces less than the output of minimum average cost', 'produces too much', 'has no fixed costs', 'makes supernormal profit'], 'The tangency is left of the ATC minimum.'],
  [['Monopolistic competition', 'Many firms selling differentiated products with free entry.'], ['Product differentiation', 'Making a product seem different from rivals’, by brand, quality, design or service.'], ['Excess capacity', 'Producing below the output at which average cost would be lowest.']],
  [
    { q: 'In long-run equilibrium a firm faces AR = 70 − 5Q, with MC = 10 + 5Q and ATC = 120 ÷ Q + 10 + 2.5Q. Show it earns normal profit and find its excess capacity.', steps: ['MR = 70 − 10Q. MC = MR: 10 + 5Q = 70 − 10Q, so **Q = 4**.', 'Price: 70 − 20 = **50**; ATC at Q = 4: 30 + 10 + 10 = **50**. **P = ATC: normal profit.**', 'ATC is lowest where MC = ATC: 10 + 5Q = 120 ÷ Q + 10 + 2.5Q, so Q² = 48 and **Q ≈ 6.9**.', '**Excess capacity ≈ 2.9 units: the firm could produce more at lower average cost.**'] },
  ]),
  L('aec-imperfect-2', 'aec-l6-imperfect', '13.2', 'Oligopoly: the kinked demand curve, cartels and games', 22, ['Micro'], [
    '**Oligopoly** is a market dominated by **a few large firms**, with high barriers to entry: mobile phone networks, cement, brewing and soft drinks, petrol retailing. The key feature is **interdependence**: each firm must consider how its rivals will react before it changes its price or output.',
    'The **kinked demand curve** (Sweezy, and Hall and Hitch, both 1939) explains **price rigidity**. If a firm **raises** its price, rivals do not follow, so it loses many customers: demand above the current price is **elastic**. If it **cuts** its price, rivals follow, so it gains few: demand below is **inelastic**. The demand curve has a kink at the current price, and the MR curve has a **vertical gap** beneath the kink: MC can rise or fall within the gap without any change in price or output.',
    'Because price wars hurt them all, oligopolists rely on **non-price competition**: advertising, branding, loyalty schemes, quality, after-sales service and promotions. They may also **collude**: formally, in a **cartel** that fixes prices or output quotas (OPEC among oil-exporting states, founded in 1960), or tacitly, by following a price leader.',
    '**Game theory** shows why cartels are unstable. In the **prisoners’ dilemma**, each firm gains by cheating whatever the other does, so both cheat and end up worse off than if they had cooperated. Collusion is illegal in many countries because it raises prices against consumers.',
  ], 'aec-kinked', 'The kink explains why prices stay where they are, not how that price was first set: that is its main weakness.',
  ['In the kinked demand model, a firm that raises its price expects rivals to:', ['keep their prices, so it loses many sales', 'raise theirs too', 'cut theirs', 'leave the market'], 'Demand above the kink is elastic.'],
  [['Oligopoly', 'A market dominated by a few large interdependent firms.'], ['Cartel', 'A formal agreement among firms to fix prices or output.'], ['Prisoners’ dilemma', 'A game in which each player’s best choice leads to an outcome worse for both than cooperation.']],
  [
    { q: 'Two cement firms each choose a high or low price. Profits (in billion FCFA): both high, 10 each; both low, 6 each; one low and one high, 14 for the low-price firm and 3 for the other. What happens?', steps: ['If the rival charges high: going low earns **14 instead of 10**.', 'If the rival charges low: going low earns **6 instead of 3**.', '**Going low is each firm’s dominant strategy, so both earn 6, though both would earn 10 by cooperating.**', 'This is why firms try to collude, and why each is tempted to cheat on the agreement.'] },
  ]),

  // ---------- 14. Factor markets and wages ----------
  L('aec-factors-1', 'aec-l6-factors', '14.1', 'Marginal revenue product and the demand for labour', 20, ['Micro'], [
    'Firms demand labour not for itself but for what it produces: the demand for labour is a **derived demand**.',
    'The **marginal revenue product** of labour, **MRP = MP × MR**, is the extra revenue from employing one more worker. Under perfect competition in the goods market MR = P, so MRP equals the **value of marginal product**, **VMP = MP × P**. Under monopoly, MR is below P, so MRP is below VMP.',
    'A profit-maximising firm hiring in a competitive labour market employs workers **until MRP = the wage**. Because of diminishing returns, MRP falls as more are hired, so the **downward-sloping part of the MRP curve is the firm’s demand curve for labour**: a lower wage means more workers are worth hiring.',
    'The demand for labour shifts with the demand for the product, its price, the productivity of labour (training, better capital) and the price of substitutes such as machines. It is more **elastic** when the demand for the product is elastic, labour is a large share of total cost, and machines can easily replace workers (Marshall’s rules of derived demand).',
  ], 'aec-mrp', 'The marginal productivity theory: hire while the next worker earns the firm more than the wage.',
  ['Marginal revenue product is:', ['marginal product times marginal revenue', 'marginal product times the wage', 'total product times price', 'the wage of the last worker'], 'The extra revenue a worker brings.'],
  [['Derived demand', 'Demand for a factor that comes from the demand for the goods it produces.'], ['Marginal revenue product', 'The addition to total revenue from employing one more unit of a factor.']],
  [
    { q: 'A bakery sells bread at 500 FCFA a loaf in a competitive market. The marginal product of workers 3 to 7 is 30, 20, 10, 6 and 0 loaves a day. The wage is 5,000 FCFA a day. How many workers are hired?', steps: ['MRP = MP × 500: workers 3 to 7 bring **15,000, 10,000, 5,000, 3,000 and 0 FCFA**.', 'The 5th worker’s MRP of 5,000 just covers the wage; the 6th brings only 3,000.', '**Hire 5 workers, where MRP = wage on the falling part of the MRP curve.**', 'If the wage fell to 3,000 FCFA, a **6th** worker would be hired.'] },
  ]),
  L('aec-factors-2', 'aec-l6-factors', '14.2', 'Wage determination, trade unions and minimum wages', 20, ['Micro'], [
    'In a competitive labour market the **wage** is set where the demand for labour (MRP) meets the **supply of labour**. Supply depends on the wage, the size of the working population, the skills and training required, the attractiveness of the job, and the wages in other jobs.',
    '**Wage differentials** arise because jobs differ: scarce skills and long training (surgeons, engineers), unpleasant or dangerous work (compensating differentials), immobility of labour between regions and jobs, union strength and discrimination.',
    '**Trade unions** raise wages by **collective bargaining**, by threatening strikes, and by restricting the supply of labour (long apprenticeships, licensing). In a competitive market a wage above equilibrium **raises pay but reduces employment**, unless productivity rises or demand for labour grows. Where a single employer dominates (a **monopsony**), a union can raise both wages and employment.',
    'A **minimum wage** such as Cameroon’s SMIG (salaire minimum interprofessionnel garanti) acts like a wage floor. Above equilibrium in a competitive market it may cause unemployment among the least skilled; but it protects low-paid workers, may raise their productivity and spending, and in a monopsony it can increase employment. Enforcement is weak in the large informal sector.',
  ], 'aec-union-wage', 'A wage floor works like any minimum price: above equilibrium it creates a surplus, here of workers.',
  ['In a competitive labour market, a union that raises the wage above equilibrium will usually:', ['raise pay for those employed but reduce employment', 'raise employment', 'lower wages', 'have no effect'], 'Firms move up their demand curve.'],
  [['Collective bargaining', 'Negotiation of pay and conditions between unions and employers.'], ['Monopsony', 'A market with a single buyer, for example one employer of labour.'], ['Wage differential', 'A difference in wages between workers, jobs or regions.']],
  [
    { q: 'Labour demand is W = 10 − 0.05L and supply is W = 0.05L (W in thousand FCFA a day, L in workers). Find the equilibrium, then the effect of a minimum wage of 6,000 FCFA.', steps: ['10 − 0.05L = 0.05L, so **L = 100 and W = 5 (5,000 FCFA)**.', 'At W = 6: demand 0.05L = 4, so **L = 80**; supply L = 6 ÷ 0.05 = **120**.', '**20 fewer jobs and 40 people who want work at that wage cannot find it.**', 'The 80 still employed earn 1,000 FCFA a day more.'] },
  ]),

  // ---------- 15. Rent, interest and profit ----------
  L('aec-rent-1', 'aec-l6-rent', '15.1', 'Economic rent, transfer earnings and quasi-rent', 20, ['Micro'], [
    '**Transfer earnings** are the minimum payment needed to keep a factor in its present use: what it could earn in its next best use. **Economic rent** is any payment **above** transfer earnings: a surplus.',
    'On a factor-market diagram, economic rent is the area **above the supply curve and below the price**; transfer earnings are the area **under the supply curve**. The share of each depends on the **elasticity of supply**: if supply is perfectly inelastic (land in fixed supply, a rare talent), **all** earnings are economic rent; if perfectly elastic, all are transfer earnings.',
    'David Ricardo (1817) explained the rent of land as a surplus that arises because land is fixed in supply and differs in fertility: the best land earns the most rent. **Quasi-rent**, Alfred Marshall’s term, is a **temporary** economic rent earned by a factor whose supply is fixed in the short run (a machine, a specialist skill) and which disappears as supply adjusts.',
    'Very high pay for top footballers, singers and surgeons is mostly economic rent: such talent is scarce and inelastic in supply, and the next best job pays far less. A tax on pure economic rent would not reduce the supply of the factor.',
  ], 'aec-economic-rent', 'Economic rent is a surplus over what is needed to keep the factor where it is; it has nothing to do with renting a house.',
  ['When the supply of a factor is perfectly inelastic, its earnings are:', ['all economic rent', 'all transfer earnings', 'half and half', 'zero'], 'No payment is needed to keep it in use.'],
  [['Transfer earnings', 'The minimum payment needed to keep a factor in its current use.'], ['Economic rent', 'Payment to a factor above its transfer earnings.'], ['Quasi-rent', 'A temporary economic rent earned while the supply of a factor is fixed in the short run.']],
  [
    { q: 'In a labour market the supply curve is W = 2 + 0.06L and the equilibrium is L = 100 at W = 8 (thousand FCFA a week). Find total earnings, transfer earnings and economic rent.', steps: ['Total earnings = 8 × 100 = **800 thousand FCFA**.', 'Transfer earnings = area under supply = 2 × 100 + ½ × 100 × 6 = **500**.', 'Economic rent = area above supply = ½ × 100 × (8 − 2) = **300**.', 'Check: **500 + 300 = 800.**'] },
    { q: 'A footballer earns 50 million FCFA a year; the best other job open to the player pays 2 million. Split the pay.', steps: ['**Transfer earnings: 2 million FCFA.**', '**Economic rent: 48 million FCFA**, a reward for scarce talent.'] },
  ]),
  L('aec-rent-2', 'aec-l6-rent', '15.2', 'Interest and profit', 18, ['Micro'], [
    '**Interest** is the price paid for the use of borrowed funds, the reward for capital or for giving up liquidity. In the **loanable funds** theory, the rate is set by the supply of loanable funds (saving, which rises with the rate) and the demand for them (investment, which falls as the rate rises). In Keynes’s **liquidity preference** theory, studied in Upper Sixth, it is set by the demand for and supply of money.',
    'The **real** rate of interest is roughly the nominal rate minus the rate of inflation. Rates differ between loans because of risk, the length of the loan, the security offered and the cost of administering small loans.',
    '**Profit** is the reward for enterprise. **Normal profit** is the minimum to keep the entrepreneur in the industry; **supernormal profit** is anything above it. Theories of profit:\n- **risk and uncertainty**: Frank Knight (1921) separated insurable risk from uninsurable **uncertainty**; profit rewards bearing the latter\n- **innovation**: Joseph Schumpeter saw profit as the reward for new products and methods, competed away as others copy, in a process of creative destruction\n- **monopoly power**: profit protected by barriers to entry.',
    'Profit **signals** where resources are wanted, **rewards** risk-taking, and is the main **source of funds** for investment.',
  ], 'aec-profit-theories', 'Real interest = nominal interest − inflation: a loan at 7% when prices rise 3% costs the borrower about 4% in real terms.',
  ['If the nominal interest rate is 7% and inflation is 3%, the real interest rate is about:', ['4%', '10%', '7%', '21%'], 'Nominal minus inflation.'],
  [['Real interest rate', 'The nominal rate of interest adjusted for inflation.'], ['Uncertainty', 'Risk that cannot be measured or insured against.'], ['Creative destruction', 'Schumpeter’s term for innovation replacing old products and firms.']],
  [
    { q: 'A trader borrows 1,000,000 FCFA for one year at 12% while prices rise by 5%. What is the real cost of the loan?', steps: ['Interest paid: **120,000 FCFA (12%)**.', 'Real rate ≈ 12 − 5 = **7%**.', '**The lender gains about 70,000 FCFA in purchasing power, not 120,000**; if inflation had been 12%, the real rate would be about zero.'] },
  ]),

  // ---------- 16. Market failure ----------
  L('aec-failure-1', 'aec-l6-failure', '16.1', 'Efficiency, Pareto optimality and public goods', 20, ['Micro'], [
    '**Productive efficiency**: output at the lowest possible average cost. **Allocative efficiency**: resources produce the goods society values most, where **price (marginal benefit) equals marginal cost**. **Pareto optimality** (Vilfredo Pareto): no one can be made better off without making someone else worse off.',
    '**Market failure** occurs when a free market fails to allocate resources efficiently. Its causes: **externalities**, **public goods**, **merit and demerit goods**, **information failure**, **monopoly power**, and factor immobility.',
    'A **public good** is **non-rival** (one person’s use does not reduce what is left for others) and **non-excludable** (people who do not pay cannot be kept out): street lighting, national defence, flood barriers, lighthouses. Because people can enjoy them without paying (the **free-rider problem**), markets provide too little or none. **Quasi-public goods**, such as roads, are partly rival or excludable (tolls).',
    '**Merit goods** (education, health care, vaccination) would be **under-consumed** in a free market, because people underrate their benefits; **demerit goods** (tobacco, alcohol) would be **over-consumed**, because people underrate the harm. **Asymmetric information**, one side knowing more than the other, makes markets work badly: George Akerlof’s "market for lemons" (1970) showed how fear of bad used cars can drive good ones out of the market.',
  ], 'aec-goods-types', 'Test a public good with two questions: does my use leave less for you, and can you be kept out if you do not pay?',
  ['A good that is non-rival and non-excludable is:', ['a public good', 'a merit good', 'a private good', 'a demerit good'], 'Street lighting.'],
  [['Pareto optimality', 'A state in which no one can be made better off without someone being made worse off.'], ['Public good', 'A good that is non-rival and non-excludable.'], ['Free-rider problem', 'People benefit from a good without paying, so markets underprovide it.'], ['Asymmetric information', 'One party to a deal knows more than the other.']],
  [
    { q: 'Classify: (a) a mango, (b) a lighthouse, (c) a toll motorway, (d) vaccination against measles.', steps: ['(a) **Private good**: rival and excludable.', '(b) **Public good**: ships cannot be stopped from seeing it, and one ship’s use leaves as much for others.', '(c) **Quasi-public good**: excludable by the toll, and rival when congested.', '(d) **Merit good with positive externalities**: it protects others as well as the person vaccinated.'] },
  ]),
  L('aec-failure-2', 'aec-l6-failure', '16.2', 'Externalities: private and social costs and benefits', 22, ['Micro'], [
    'An **externality** is a cost or benefit to a **third party** that is not reflected in the market price. **Social cost = private cost + external cost**; **social benefit = private benefit + external benefit**.',
    '**Negative externalities**: smoke from a factory, waste in rivers, noise from bars, traffic congestion. The firm decides output from its **marginal private cost** (MPC), but society bears the **marginal social cost** (MSC = MPC + marginal external cost). The free market produces where MPB = MPC, **more** than the social optimum where MSB = MSC.',
    '**Positive externalities**: vaccination, education, a beehive near orchards. The free market takes account only of the **marginal private benefit**, so it produces **less** than the social optimum where MSB = MSC.',
    'In both cases the gap between the market and the optimum causes a **welfare loss**, shown as a triangle between the social curves. Ronald Coase (1960) argued that if property rights are clear and bargaining is cheap, the parties can reach the optimum privately; with many people affected, as with city air, that is rarely possible.',
  ], 'aec-externality', 'Negative externality: too much is produced. Positive externality: too little. The triangle points to the free-market output.',
  ['With a negative production externality, the free market:', ['overproduces compared with the social optimum', 'underproduces', 'produces the optimum', 'produces nothing'], 'MSC is above MPC.'],
  [['Externality', 'A cost or benefit falling on a third party, not reflected in price.'], ['Marginal social cost', 'Marginal private cost plus marginal external cost.'], ['Welfare loss', 'The loss to society from producing an output where MSB and MSC are unequal.']],
  [
    { q: 'Demand (MPB = MSB) is P = 100 − Q, MPC is P = 20 + Q, and each unit causes 20 FCFA of external cost. Find the market output, the optimum and the welfare loss.', steps: ['Market: 100 − Q = 20 + Q, so **Q = 40, P = 60**.', 'MSC = 40 + Q. Optimum: 100 − Q = 40 + Q, so **Q = 30, P = 70**.', 'At Q = 40, MSC = 80 and MSB = 60.', '**Welfare loss = ½ × (40 − 30) × (80 − 60) = 100.**', 'A tax of 20 per unit would raise MPC to MSC and bring output to 30.'] },
  ]),

  // ---------- 17. Intervention ----------
  L('aec-intervention-1', 'aec-l6-intervention', '17.1', 'Correcting market failure: taxes, subsidies, regulation and permits', 22, ['Micro'], [
    'A **Pigouvian tax** (Arthur Pigou, 1920) equal to the marginal external cost makes the polluter pay: it shifts MPC up to MSC, so output falls to the social optimum and the externality is **internalised**. The difficulty is measuring the external cost in francs.',
    'A **subsidy** equal to the marginal external benefit encourages goods with positive externalities, such as vaccination, school fees or solar panels, raising output to the optimum. It costs public money and must be paid for by taxes elsewhere.',
    '**Regulation** sets rules: emission limits, bans on dumping, compulsory schooling, health and safety standards. It is simple and certain, but rigid, costly to enforce and gives no reward for doing better than the limit. **Tradable permits** cap total pollution and let firms buy and sell the right to pollute, so cuts are made where they are cheapest.',
    'The state may also **provide** public and merit goods directly (roads, primary schools, hospitals), **inform** buyers (labels, warnings) to correct information failure, and use **competition policy** to break up cartels, block harmful mergers and regulate natural monopolies.',
  ], 'aec-pigou', 'Match the tool to the failure: tax the external cost, subsidise the external benefit, regulate what cannot be priced.',
  ['A Pigouvian tax on a polluting good is set equal to:', ['the marginal external cost', 'the price of the good', 'the firm’s profit', 'the marginal private cost'], 'It closes the gap between MPC and MSC.'],
  [['Pigouvian tax', 'A tax equal to the external cost of an activity.'], ['Internalising an externality', 'Making the decision-maker bear the external cost or receive the external benefit.'], ['Tradable permits', 'Rights to pollute, limited in total, that firms may buy and sell.']],
  [
    { q: 'MPB is P = 80 − Q, each unit gives 20 FCFA of external benefit, and supply (MPC = MSC) is P = 20 + Q. Find the market output, the optimum and the subsidy that reaches it.', steps: ['Market: 80 − Q = 20 + Q, so **Q = 30, P = 50**.', 'MSB = 100 − Q. Optimum: 100 − Q = 20 + Q, so **Q = 40**.', 'A subsidy of **20 per unit** shifts supply to P = Q: 80 − Q = Q, so **Q = 40**, buyers pay 40 and sellers receive 60.', 'Cost to the state = 20 × 40 = **800**; welfare loss removed = ½ × 10 × 20 = **100**.'] },
  ]),
  L('aec-intervention-2', 'aec-l6-intervention', '17.2', 'Government failure, and a first look at macroeconomics', 18, ['Micro'], [
    '**Government failure** occurs when intervention makes the allocation of resources **worse**. Causes: poor information (the external cost is guessed), unintended consequences (price controls create black markets and smuggling), the cost of administration, political motives and short time horizons, **regulatory capture** (the regulator serves the industry), and corruption.',
    'So the case for intervention is never "the market fails, therefore the state should act": the expected gain must be larger than the likely cost of government failure.',
    'The Upper Sixth turns to **macroeconomics**. Its main aggregates: **gross domestic product** (GDP), the value of all final goods and services produced in a country in a year; **inflation**, a sustained rise in the general price level, measured by a price index; **unemployment**, people able and willing to work but without a job; and the **balance of payments**, the record of a country’s dealings with the rest of the world.',
    'The usual objectives of macroeconomic policy are steady **economic growth**, **low unemployment**, **stable prices** and a **sustainable balance of payments**, with fair distribution and a protected environment as further aims. Policies to reach them can conflict: faster growth may raise inflation and imports.',
  ], 'aec-intervention', 'A strong evaluation weighs market failure against government failure.',
  ['Government failure occurs when:', ['state intervention makes resource allocation worse', 'the market fails', 'taxes are collected', 'the state does nothing'], 'For example a price control causing black markets.'],
  [['Government failure', 'Intervention that leads to a less efficient allocation of resources.'], ['Regulatory capture', 'A regulator coming to serve the interests of the firms it regulates.'], ['Gross domestic product', 'The value of all final goods and services produced within a country in a year.']],
  [
    { q: 'A consumer price index rises from 120 to 126 in a year. What is the rate of inflation?', steps: ['Change = 126 − 120 = **6 points**.', 'Rate = 6 ÷ 120 × 100 = **5%**.', 'Note: **a 6-point rise is not 6% unless the base is 100.**'] },
  ]),

  // ---------- 18. Clinics ----------
  L('aec-clinics-1', 'aec-l6-papers', '18.1', 'Data response: tables, calculations and graphs', 20, ['Data'], [
    'A data-response question gives a table, chart or short article and asks for **calculation**, **explanation** and **evaluation**. Read the **title, units and dates** first: are the figures in thousands, billions, percentages or index numbers?',
    'The calculations that recur in microeconomics: percentage change; **PED, YED, XED and PES**; **MC from TC**; **AVC, ATC, AR, TR and MR** from schedules; **profit** = TR − TC; consumer surplus and tax incidence from equations. Write the **formula**, substitute, give the **unit** and **interpret** the result.',
    'Graph questions: label axes with variables and units, label every curve, mark equilibria with dotted lines to both axes, and show shifts with arrows. Use the numbers in the question so the diagram agrees with the data.',
    'Explanation must **use** the data: "Table 1 shows spending on fuel fell from 2.4 to 2.1 billion FCFA as the price rose, so demand was price elastic over this range." Evaluation asks what the data cannot show: other causes, short time span, missing figures.',
  ], 'aec-data-response', 'Every number you calculate should be followed by one sentence saying what it means.',
  ['In a data-response answer, the first thing to check in a table is:', ['the title, units and dates', 'the colour', 'the author’s name', 'the page number'], 'Units decide the calculation.'],
  [['Data response', 'A question based on given figures or text, testing calculation, application and evaluation.'], ['Percentage change', '(New − old) ÷ old × 100.']],
  [
    { q: 'A table shows a firm’s TC at outputs 10, 11 and 12: 500, 560 and 640 thousand FCFA; each unit sells for 70 thousand. Should it produce the 12th unit?', steps: ['MC of the 11th = **60**; MC of the 12th = **80** (thousand FCFA).', 'MR = P = **70**.', 'The 11th unit adds 70 to revenue and 60 to cost: **produce it**.', 'The 12th adds 70 to revenue and 80 to cost: **do not produce it; best output is 11.**'] },
  ]),
  L('aec-clinics-2', 'aec-l6-papers', '18.2', 'Microeconomic essays and the promotion examination', 18, ['Method'], [
    'An A Level essay has four parts: a short **introduction** defining the key terms; **analysis**, a few well-developed points, each with a diagram where it helps; **evaluation**, weighing points against each other and asking "under what conditions?"; and a **conclusion** that answers the question set.',
    'Two-part questions are common: part (a) asks for explanation (often with a diagram), part (b) for discussion. Divide time according to the marks.',
    'Good evaluation in microeconomics often turns on: **elasticities** (who bears a tax, whether revenue rises), **time** (short run against long run), **market structure** (whether a firm can pass on costs), **information** (can the state measure an externality?) and **government failure**.',
    'The promotion examination at the end of the year covers the whole Lower Sixth: utility and indifference curves, markets and elasticities, production and costs, market structures, factor markets and market failure. Revise each with its key diagram and one worked calculation.',
  ], 'aec-essay-plan', 'A conclusion that only repeats the introduction earns nothing; one that weighs the points and decides earns the top marks.',
  ['An essay conclusion should:', ['answer the question with a supported judgement', 'introduce new theory', 'repeat the introduction', 'list definitions'], 'Evaluation marks.'],
  [['Analysis', 'Explaining how and why, step by step, often with a diagram.'], ['Evaluation', 'Weighing arguments and judging their importance.']],
  [
    { q: 'Plan an answer to: "Monopoly is always against the public interest. Discuss."', steps: ['Introduction: **define monopoly and the public interest (efficiency, prices, choice, innovation).**', 'Against: **the monopoly diagram: higher price, lower output, deadweight loss, possible X-inefficiency.**', 'For: **economies of scale and natural monopoly can mean lower costs; profits fund research; price discrimination may serve poorer groups.**', 'Evaluation: **it depends on barriers, regulation, contestability and whether economies of scale are large.**', 'Conclusion: **"always" is too strong: regulated natural monopolies can serve the public; unregulated monopolies with high barriers usually do not.**'] },
  ]),
];
