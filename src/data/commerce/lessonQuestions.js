// Extra end-of-lesson questions for the Commerce lessons, by lesson id. The
// correct option is written first; options are shuffled when shown.

const Q = (q, a, why) => ({ q, a, why });

export const LESSON_QUESTIONS = {
  // ---------- Form 4, term 1 ----------
  'co-commerce-4': [
    Q('Foreign trade is divided into:', ['import, export and entrepôt trade', 'retail and wholesale', 'banking and insurance', 'barter and credit'], 'Trade between countries.'),
    Q('Banking as an aid to trade solves the problem of:', ['finance and payment', 'distance', 'storage', 'risk'], 'It provides money and means of payment.'),
    Q('Advertising as an aid to trade helps to:', ['inform and persuade consumers', 'store goods', 'insure ships', 'transport goods'], 'It creates demand.'),
    Q('Retail trade is part of:', ['home trade', 'foreign trade', 'aids to trade', 'production only'], 'Trade within the country.'),
  ],
  'co-production-4': [
    Q('Changing cocoa beans into chocolate creates:', ['form utility', 'place utility', 'time utility', 'possession utility'], 'The good changes form.'),
    Q('A builder works in the:', ['secondary sector', 'primary sector', 'tertiary sector', 'extractive sector'], 'Construction is secondary.'),
    Q('A banker provides a:', ['commercial service', 'direct service', 'primary product', 'secondary product'], 'An aid to trade.'),
    Q('Selling goods to the person who wants them creates:', ['possession utility', 'form utility', 'place utility', 'time utility'], 'Ownership changes hands.'),
  ],
  'co-channels-4': [
    Q('"Buyam-sellams" in Cameroon are:', ['market traders who buy from farmers and resell in town', 'bank officials', 'importers of cars', 'insurers'], 'Middlemen in food distribution.'),
    Q('A factor in choosing a channel of distribution is:', ['the nature of the good', 'the colour of the packaging', 'the day of the week', 'the producer’s age'], 'Perishable goods need short channels.'),
    Q('Imported goods often pass first through:', ['an agent or importer', 'the consumer', 'the retailer only', 'a bank'], 'Then to wholesalers and retailers.'),
    Q('Direct selling means:', ['selling from producer to consumer without middlemen', 'selling through many wholesalers', 'selling abroad only', 'selling on credit'], 'No middlemen.'),
  ],
  'co-retailer-4': [
    Q('Giving credit to known customers is a function of the retailer to the:', ['consumer', 'producer', 'government', 'bank'], 'It helps consumers buy.'),
    Q('Displaying and advertising goods helps the:', ['producer', 'consumer only', 'insurer', 'transporter'], 'More sales for the producer.'),
    Q('A retailer bears risk when:', ['stock fails to sell or goes out of fashion', 'goods sell quickly', 'the producer advertises', 'customers pay cash'], 'Unsold stock is a loss.'),
    Q('Retailers sell in small quantities to suit:', ['final consumers', 'wholesalers', 'manufacturers', 'exporters'], 'Households buy small amounts.'),
  ],
  'co-hawkers-4': [
    Q('An advantage of hawking to the trader is:', ['very little capital is needed', 'high rent', 'large stock', 'fixed address'], 'Easy to start.'),
    Q('A mobile shop is especially useful in:', ['villages and estates far from shops', 'city centres full of shops', 'banks', 'ports'], 'It reaches distant customers.'),
    Q('Prices among hawkers are often fixed by:', ['bargaining', 'government decree', 'stock exchange', 'insurance'], 'Flexible prices.'),
    Q('A problem for market stall traders is:', ['exposure to weather and council rules', 'too much capital', 'no customers ever', 'too many machines'], 'Open-air trading.'),
  ],
  'co-unitshops-4': [
    Q('A provision store selling many everyday goods is a:', ['general shop', 'single-line shop', 'department store', 'mail-order firm'], 'Many lines.'),
    Q('Unit shops are usually owned by:', ['sole traders or partners', 'the state', 'shareholders on the stock exchange', 'foreign banks'], 'Small businesses.'),
    Q('Selling one cube of seasoning at a time helps small shops because:', ['poor customers can buy what they can afford', 'it raises costs', 'it is illegal', 'it reduces sales'], 'Very small quantities.'),
    Q('A weakness of unit shops compared with supermarkets is:', ['higher prices due to small-scale buying', 'more personal service', 'nearness to homes', 'credit to customers'], 'No bulk discounts.'),
  ],
  'co-departmentstores-4': [
    Q('Hypermarkets are:', ['very large self-service stores, often with parking', 'small kiosks', 'mobile shops', 'markets'], 'Bigger than supermarkets.'),
    Q('Centralised buying in chain stores gives:', ['bulk-buying discounts', 'higher costs', 'less choice', 'personal credit'], 'Economies of scale.'),
    Q('Department stores attract customers with:', ['comfort, wide choice and services', 'bargaining only', 'very small shops', 'no services'], 'Shopping under one roof.'),
    Q('Impulse buying is encouraged in supermarkets by:', ['attractive displays near checkouts', 'locked shelves', 'no prices', 'bargaining'], 'Displays tempt buyers.'),
  ],
  'co-mailorder-4': [
    Q('Mail order mainly benefits customers who:', ['live far from shops or cannot travel', 'want to bargain', 'want to inspect goods first', 'pay only in barter'], 'Shopping from home.'),
    Q('A safe practice when buying online is to:', ['prefer payment on delivery', 'send your PIN to the seller', 'pay strangers first', 'ignore reviews'], 'Protects against fraud.'),
    Q('Delivery of online orders in Cameroonian cities often uses:', ['motorbike couriers', 'pipelines', 'ships', 'trains only'], 'Fast local delivery.'),
    Q('A risk of online shopping is:', ['fake sellers and goods different from pictures', 'too many shops', 'bargaining', 'long opening hours'], 'Fraud.'),
  ],
  'co-wholesaler-4': [
    Q('A wholesaler dealing only in building materials is a:', ['specialised wholesaler', 'general wholesaler', 'retailer', 'producer'], 'One line of goods.'),
    Q('Storing goods for the producer is a function of the:', ['wholesaler', 'consumer', 'customs', 'bank only'], 'Warehousing.'),
    Q('By holding stocks, wholesalers help to:', ['keep prices steady', 'raise prices always', 'stop production', 'avoid demand'], 'They smooth supply.'),
    Q('Retailers prefer wholesalers who give:', ['credit and a wide choice', 'only cash terms and one product', 'no delivery and no advice', 'high prices'], 'Convenience for small traders.'),
  ],
  'co-middleman-4': [
    Q('"You can eliminate the middleman but not his functions" means:', ['someone else must still store, break bulk and bear risk', 'the functions disappear', 'prices always fall to zero', 'producers stop working'], 'Functions are shifted, not removed.'),
    Q('Large supermarkets often buy:', ['directly from manufacturers', 'only from hawkers', 'only from consumers', 'only abroad'], 'They bypass wholesalers.'),
    Q('An argument for eliminating the wholesaler is:', ['lower prices to consumers', 'loss of credit for retailers', 'more storage costs for producers', 'less information'], 'Fewer profit margins.'),
    Q('Small retailers still depend on wholesalers because they:', ['buy in small quantities and need credit', 'buy in bulk', 'import directly', 'own factories'], 'Wholesalers serve them.'),
  ],
  'co-inquiry-4': [
    Q('A price list is usually sent with a:', ['quotation or catalogue', 'receipt', 'credit note', 'delivery note'], 'Information on prices.'),
    Q('An order accepted by the seller forms a:', ['contract', 'receipt', 'loan', 'policy'], 'Both sides are bound.'),
    Q('A letter of inquiry asks about:', ['goods, prices, terms and delivery', 'the buyer’s health', 'the seller’s family', 'the weather'], 'Information before buying.'),
    Q('Who sends the quotation?', ['the seller', 'the buyer', 'the bank', 'customs'], 'In reply to an inquiry.'),
  ],
  'co-invoice-4': [
    Q('The invoice shows the amount due after:', ['trade discount', 'cash discount always', 'VAT refund', 'payment'], 'Cash discount applies only if paid promptly.'),
    Q('E & OE allows the seller to:', ['correct errors on the invoice', 'refuse payment', 'cancel the order', 'avoid delivery'], 'Errors and omissions excepted.'),
    Q('An advice note arrives:', ['before the goods', 'with the goods', 'after payment', 'with the receipt'], 'It warns the buyer the goods are coming.'),
    Q('A pro forma invoice may be used when:', ['the buyer must pay before the goods are sent', 'the goods have been paid for', 'the goods are returned', 'there is a refund'], 'Advance payment.'),
  ],
  'co-creditnote-4': [
    Q('Returnable crates sent back to a brewery lead to a:', ['credit note', 'debit note', 'quotation', 'order'], 'The buyer’s debt falls.'),
    Q('A buyer charged 45,000 instead of 54,000 FCFA receives a:', ['debit note for 9,000 FCFA', 'credit note for 9,000 FCFA', 'receipt', 'refund'], 'He was undercharged.'),
    Q('Credit notes refer to:', ['the original invoice number', 'the buyer’s salary', 'the ship’s name', 'the bank code only'], 'For checking.'),
    Q('Who sends credit and debit notes?', ['the seller', 'the buyer', 'the transporter', 'customs'], 'The seller adjusts the invoice.'),
  ],
  'co-statement-4': [
    Q('On a statement, payments received are:', ['subtracted from the balance', 'added to the balance', 'ignored', 'doubled'], 'They reduce what is owed.'),
    Q('A receipt should show:', ['date, amount in figures and words, payer and signature', 'only the buyer’s name', 'only the goods ordered', 'a quotation'], 'Proof of payment.'),
    Q('A statement of account helps the buyer to:', ['check his records against the seller’s', 'place an order', 'insure goods', 'advertise'], 'Both sides compare.'),
    Q('Invoices on a statement are:', ['added to the amount owed', 'subtracted', 'ignored', 'refunded'], 'They increase the debt.'),
  ],

  // ---------- Form 4, terms 2 and 3 ----------
  'co-discounts-4': [
    Q('Cash discount is calculated on:', ['the net invoice amount after trade discount', 'the list price', 'the delivery charge', 'the profit'], 'Trade discount comes first.'),
    Q('A purpose of cash discount is to:', ['encourage prompt payment', 'help traders resell', 'raise prices', 'reduce quality'], 'Better cash flow for the seller.'),
    Q('Larger trade discounts are often given for:', ['larger orders', 'late payment', 'returned goods', 'complaints'], 'Bulk buyers.'),
    Q('List price 50,000 FCFA, trade discount 10%, cash discount 2% paid promptly. The amount paid is:', ['44,100 FCFA', '44,000 FCFA', '45,000 FCFA', '49,000 FCFA'], '45,000 − 900.'),
  ],
  'co-paymentterms-4': [
    Q('"Net 30 days" means:', ['the full amount is due within 30 days', '30% discount', 'pay in 30 instalments', 'free goods for 30 days'], 'No cash discount.'),
    Q('"Carriage forward" means:', ['the buyer pays the transport cost', 'the seller pays transport', 'transport is free', 'the goods go by air'], 'Opposite of carriage paid.'),
    Q('Checking a buyer’s ability to pay before giving credit concerns his:', ['creditworthiness', 'height', 'family', 'religion'], 'Reduces bad debts.'),
    Q('"Ex-works" means:', ['the buyer collects the goods from the factory', 'the seller delivers', 'the goods are insured', 'the goods are free'], 'Buyer arranges transport.'),
  ],
  'co-exploitation-4': [
    Q('Overpricing above a controlled price is:', ['a form of consumer exploitation', 'a trade discount', 'legal tender', 'an aid to trade'], 'Unfair pricing.'),
    Q('Consumers are vulnerable when they:', ['lack information about their rights', 'read labels', 'ask for receipts', 'compare prices'], 'Ignorance enables exploitation.'),
    Q('Selling medicines past their expiry date harms:', ['health and safety', 'only profit', 'nobody', 'transport'], 'A serious danger.'),
    Q('Refusing to honour a guarantee is:', ['unfair to consumers', 'good business ethics', 'required by law', 'a discount'], 'Breaks promises.'),
  ],
  'co-protection-4': [
    Q('The framework law on consumer protection in Cameroon dates from:', ['2011', '1960', '1990', '2020'], 'It sets consumers’ rights.'),
    Q('The Ministry of Trade protects consumers by:', ['checking prices, weights and measures', 'issuing money', 'running schools', 'collecting customs duties only'], 'Market control.'),
    Q('A right of consumers is the right to:', ['safety', 'cheat traders', 'free goods', 'avoid all prices'], 'Products must be safe.'),
    Q('Ethical businesses build:', ['goodwill and loyal customers', 'bad debts', 'consumer exploitation', 'hoarding'], 'Honesty pays in the long run.'),
  ],
  'co-cash-4': [
    Q('Legal tender in Cameroon is the:', ['franc CFA notes and coins issued by the BEAC', 'US dollar', 'naira', 'euro'], 'The legal currency.'),
    Q('A disadvantage of cash for large payments is:', ['the risk of theft', 'it is accepted everywhere', 'it is immediate', 'no record is needed'], 'Carrying large sums is risky.'),
    Q('Cash is most suitable for:', ['small face-to-face purchases', 'paying overseas suppliers', 'large company payments', 'insurance claims'], 'Everyday transactions.'),
    Q('To keep a record of cash paid, a trader should obtain a:', ['receipt', 'quotation', 'catalogue', 'debit note'], 'Proof of payment.'),
  ],
  'co-postal-4': [
    Q('CAMPOST is:', ['Cameroon’s postal service', 'the railway company', 'the telecom company', 'the central bank'], 'Cameroon Postal Services.'),
    Q('An advantage of postal money transfers is that they:', ['work where there are no banks', 'are free', 'are instant always', 'need no identity'], 'Wide network.'),
    Q('Mobile money transfers are safe only if the user:', ['keeps the PIN secret and checks the number', 'shares the PIN', 'sends to any number', 'ignores messages'], 'Security rules.'),
    Q('A postal order is suited to:', ['small sums sent by post', 'company shares', 'insurance claims', 'large loans'], 'Fixed small values.'),
  ],
  'co-adtypes-4': [
    Q('Free gifts and price reductions are examples of:', ['sales promotion', 'informative advertising', 'competitive advertising', 'public notices'], 'Short-term incentives.'),
    Q('"Drink more milk" (no brand) is:', ['generic advertising', 'competitive advertising', 'brand advertising', 'a quotation'], 'Promotes the product type.'),
    Q('A function of advertising is to:', ['inform about new products', 'store goods', 'insure goods', 'transport goods'], 'Information for consumers.'),
    Q('Sponsorship of a football league is a form of:', ['promotion', 'banking', 'insurance', 'warehousing'], 'Builds brand image.'),
  ],
  'co-admedia-4': [
    Q('Newspaper adverts are useful because they:', ['give detailed information that can be kept', 'have sound and movement', 'reach people without literacy', 'are free'], 'Print can be kept.'),
    Q('Television advertising is:', ['costly but vivid, with sound and pictures', 'free', 'only for villages without power', 'printed'], 'Expensive.'),
    Q('Advertising can lower costs because higher sales allow:', ['economies of scale', 'higher wages', 'less production', 'more waste'], 'Bulk production.'),
    Q('A criticism of advertising is that it can:', ['mislead consumers', 'inform consumers', 'support the media', 'create jobs'], 'False claims.'),
  ],
  'co-markup-4': [
    Q('A margin of 20% equals a mark-up of:', ['25%', '20%', '16⅔%', '40%'], '1/5 on selling price = 1/4 on cost.'),
    Q('Cost price 20,000, mark-up 50%. Selling price:', ['30,000 FCFA', '40,000 FCFA', '25,000 FCFA', '10,000 FCFA'], '20,000 × 1.5.'),
    Q('Selling price 50,000, margin 40%. Cost price:', ['30,000 FCFA', '20,000 FCFA', '35,000 FCFA', '70,000 FCFA'], '50,000 × 60 ÷ 100.'),
    Q('Mark-up is always larger than margin for the same profit because:', ['cost price is smaller than selling price', 'margin uses cost', 'they are unrelated', 'mark-up includes tax'], 'Same profit, smaller base.'),
  ],
  'co-turnover-4': [
    Q('Average stock is:', ['(opening stock + closing stock) ÷ 2', 'opening stock × closing stock', 'sales ÷ 2', 'purchases ÷ 2'], 'The mean of the two.'),
    Q('A high rate of turnover suggests that goods:', ['sell quickly', 'sell slowly', 'are not sold', 'are stolen'], 'Fast-moving stock.'),
    Q('Rent paid by a shop is an example of:', ['an expense', 'a purchase', 'a sale', 'stock'], 'Deducted to find net profit.'),
    Q('Jewellery shops usually have a:', ['low rate of turnover', 'high rate of turnover', 'zero turnover', 'daily turnover'], 'Expensive goods sell slowly.'),
  ],
  'co-tradeflow-4': [
    Q('Which comes immediately after the order?', ['the advice note or the goods with a delivery note', 'the inquiry', 'the quotation', 'the receipt'], 'The seller dispatches.'),
    Q('Which document proves payment?', ['the receipt', 'the invoice', 'the delivery note', 'the order'], 'Issued by the seller.'),
    Q('Adjustments to an invoice are made by:', ['credit and debit notes', 'receipts', 'quotations', 'catalogues'], 'Reduce or increase the debt.'),
    Q('A monthly summary of transactions is the:', ['statement of account', 'advice note', 'pro forma invoice', 'quotation'], 'Shows the balance.'),
  ],
  'co-promo-4': [
    Q('A "state" question requires:', ['short, clear points', 'a long essay', 'only a diagram', 'nothing'], 'Brief answers.'),
    Q('An "explain" question requires:', ['each point developed with a reason', 'one word', 'a list of names', 'a calculation only'], 'Develop each point.'),
    Q('In a calculation, you should always state the:', ['unit, such as FCFA', 'weather', 'author', 'colour'], 'Units matter.'),
    Q('Using Cameroonian examples in answers shows:', ['understanding and application', 'nothing useful', 'copying', 'confusion'], 'Application earns credit.'),
  ],

  // ---------- Form 5, term 1 ----------
  'co-gceformat-5': [
    Q('Commerce Paper 1 lasts:', ['1½ hours', '2½ hours', '3 hours', '1 hour'], 'Multiple choice.'),
    Q('The scheme says Commerce theory should be finished by:', ['week 13 of Form 5', 'week 1', 'the GCE day', 'Form 4'], 'Then revision.'),
    Q('The aids to trade studied in Form 5 include:', ['banking, transport, warehousing, insurance and communication', 'only retailing', 'only advertising', 'only farming'], 'The remaining aids.'),
    Q('Are Form 4 topics examined at the GCE?', ['yes', 'no', 'only advertising', 'only oral'], 'The syllabus covers both years.'),
  ],
  'co-recall-5': [
    Q('Trade discount is given to:', ['traders who buy for resale', 'prompt payers only', 'every consumer', 'banks'], 'A Form 4 idea.'),
    Q('Rate of turnover is calculated with:', ['cost of goods sold and average stock', 'sales and expenses', 'profit and rent', 'list price and discount'], 'COGS ÷ average stock.'),
    Q('An indent is used in:', ['import trade', 'retail cash sales', 'insurance claims', 'banking only'], 'An order to an overseas supplier.'),
    Q('Mark-up is calculated on:', ['cost price', 'selling price', 'sales', 'stock'], 'Margin uses selling price.'),
  ],
  'co-accounts-5': [
    Q('A cheque book comes with a:', ['current account', 'fixed deposit account', 'savings account usually', 'loan account only'], 'For payments.'),
    Q('To open a bank account, a person usually needs:', ['proof of identity, such as the national identity card', 'a passport only from abroad', 'nothing', 'a car'], 'Identification.'),
    Q('Early withdrawal from a fixed deposit usually:', ['loses some or all of the interest', 'doubles the interest', 'is free', 'is forbidden by law'], 'Commitment is required.'),
    Q('Credit unions and microfinance institutions serve mainly:', ['small savers and traders', 'only governments', 'only big banks', 'only foreigners'], 'Financial inclusion.'),
  ],
  'co-facilities-5': [
    Q('Interest on an overdraft is charged on:', ['the amount overdrawn and the time it is used', 'the whole limit always', 'nothing', 'deposits'], 'Only what is used.'),
    Q('A loan usually requires:', ['security (collateral)', 'no conditions', 'a cheque book', 'a standing order'], 'Protection for the bank.'),
    Q('A night safe allows a trader to:', ['deposit takings after the bank closes', 'borrow at night', 'buy shares', 'insure goods'], 'Safety for cash.'),
    Q('A status inquiry tells a trader about:', ['the creditworthiness of a customer', 'the weather', 'the exchange rate only', 'the stock exchange'], 'Banks give references.'),
  ],
  'co-cheque-5': [
    Q('The amount on a cheque is written in:', ['both words and figures', 'figures only', 'words only', 'neither'], 'They must agree.'),
    Q('An open cheque:', ['can be cashed over the counter', 'must be paid into an account', 'is always dishonoured', 'names a bank'], 'Not crossed.'),
    Q('"Account payee only" on a cheque means:', ['it can only be paid into the payee’s account', 'anyone can cash it', 'it is cancelled', 'it is a receipt'], 'Extra protection.'),
    Q('A general crossing consists of:', ['two parallel lines, with or without "& Co."', 'a bank name only', 'a signature', 'a stamp'], 'Paid into any bank account.'),
  ],
  'co-epayments-5': [
    Q('"Refer to drawer" on a returned cheque usually means:', ['insufficient funds', 'the payee is wrong', 'the bank is closed', 'payment succeeded'], 'The drawer must be contacted.'),
    Q('A stale cheque is one that:', ['is presented too long after its date', 'is dated in the future', 'is crossed', 'is signed twice'], 'It has expired.'),
    Q('Point-of-sale card payments are an example of:', ['electronic funds transfer', 'barter', 'cash', 'postal orders'], 'Electronic payment.'),
    Q('An advantage of mobile money is that it:', ['reaches people without bank accounts', 'needs a cheque book', 'is only for large firms', 'never charges fees'], 'Financial inclusion.'),
  ],
  'co-homeforeign-5': [
    Q('Shipping services sold to foreigners are:', ['invisible exports', 'visible exports', 'visible imports', 'home trade'], 'Services earn foreign exchange.'),
    Q('A quota is:', ['a limit on the quantity of imports', 'a tax on imports', 'a total ban', 'a subsidy'], 'A quantitative restriction.'),
    Q('An unfavourable balance of trade means:', ['visible imports exceed visible exports', 'exports exceed imports', 'no trade', 'invisible earnings only'], 'A deficit.'),
    Q('A reason to restrict imports is to:', ['protect infant industries', 'raise consumer choice', 'lower prices', 'increase imports'], 'Young firms need protection.'),
  ],
  'co-importexport-5': [
    Q('A closed indent:', ['names the supplier', 'lets the agent choose', 'is a receipt', 'is a bill of lading'], 'The importer chooses.'),
    Q('A letter of credit is arranged through a:', ['bank', 'post office', 'shop', 'customs office only'], 'A bank promises payment.'),
    Q('Goods passing through Cameroon to Chad are in:', ['transit', 'retail', 'bond only', 'barter'], 'Transit trade.'),
    Q('Customs clearance means:', ['completing formalities and paying duties to release goods', 'cleaning the port', 'refusing goods', 'insuring goods'], 'Goods can then leave the port.'),
  ],
  'co-billoflading-5': [
    Q('A claused (dirty) bill of lading shows:', ['damage or shortage at loading', 'perfect condition', 'payment made', 'the price'], 'Notes defects.'),
    Q('The air waybill is NOT:', ['a document of title', 'a receipt', 'evidence of contract', 'used for air freight'], 'Unlike the bill of lading.'),
    Q('The customs declaration is used to:', ['assess duty on goods', 'insure goods', 'pay wages', 'advertise'], 'Duty calculation.'),
    Q('A packing list shows:', ['the contents of each package', 'the price only', 'the ship’s route', 'the buyer’s bank'], 'For checking goods.'),
  ],
  'co-customs-5': [
    Q('Cameroon’s largest port is:', ['Douala', 'Kribi', 'Limbe', 'Garoua'], 'The main gateway.'),
    Q('Customs supervise bonded warehouses to:', ['secure duty and control goods', 'sell goods', 'grow crops', 'run shops'], 'Revenue protection.'),
    Q('Collecting trade statistics helps the government to:', ['plan and know the balance of trade', 'raise prices', 'close ports', 'avoid taxes'], 'Information for policy.'),
    Q('A single window for foreign trade allows traders to:', ['complete formalities in one place', 'avoid customs completely', 'skip documents', 'pay no duties'], 'Faster procedures.'),
  ],
  'co-transportchoice-5': [
    Q('Transport helps to keep prices steady by:', ['moving goods from surplus to shortage areas', 'raising costs', 'storing goods', 'insuring goods'], 'Evens out supply.'),
    Q('Fragile glassware needs transport that is:', ['careful and safe in handling', 'the cheapest always', 'by pipeline', 'by any means'], 'Nature of goods.'),
    Q('Speed matters most for goods that are:', ['urgent or perishable', 'heavy and cheap', 'durable and stored', 'liquid only'], 'Time-sensitive.'),
    Q('Transport widens markets by:', ['linking producers with distant consumers', 'storing goods', 'printing money', 'reducing choice'], 'Bigger markets.'),
  ],
  'co-transportmodes-5': [
    Q('The Benue river port at Garoua is usable:', ['only during part of the rainy season', 'all year round', 'never', 'only in the dry season'], 'Seasonal navigation.'),
    Q('A disadvantage of rail is that it:', ['follows fixed routes and timetables', 'cannot carry bulk', 'is the most expensive per tonne', 'needs no stations'], 'Less flexible.'),
    Q('The Chad-Cameroon pipeline carries:', ['crude oil', 'water', 'gas for cooking', 'passengers'], 'From Chad to Kribi.'),
    Q('Containerisation makes it easier to:', ['move goods between ships, trains and lorries', 'avoid customs', 'store goods for ever', 'sell goods door to door'], 'Standard containers.'),
  ],
  'co-warehouse-5': [
    Q('A cold store is used for:', ['perishable goods such as fish and meat', 'cement', 'timber', 'cars'], 'Refrigeration.'),
    Q('A private warehouse belongs to:', ['one firm for its own goods', 'customs', 'many traders', 'the public'], 'Own use.'),
    Q('Grading and branding in a warehouse add:', ['value and help sales', 'nothing', 'risk', 'duty'], 'Preparation for sale.'),
    Q('Too much stock is a problem because:', ['money is tied up and goods may spoil', 'customers buy more', 'prices always rise', 'it is illegal'], 'Stock control balances this.'),
  ],
  'co-bonded-5': [
    Q('The bond given by a bonded warehouse keeper is:', ['a guarantee to customs that duty will be paid', 'a share certificate', 'a loan', 'an insurance policy'], 'Security for duty.'),
    Q('Goods in bond may be:', ['sampled and repacked under customs supervision', 'removed freely', 'sold without records', 'used by the keeper'], 'Supervised handling.'),
    Q('A benefit of bonded warehouses to the government is:', ['reduced smuggling', 'lost revenue', 'more fraud', 'no control'], 'Goods remain supervised.'),
    Q('An importer benefits because he:', ['pays duty only when he sells in the home market', 'never pays duty', 'pays double duty', 'cannot sell in bond'], 'Deferred duty.'),
  ],
  'co-principles-5': [
    Q('A fund formed from the premiums of many insured people allows:', ['the losses of the few to be paid', 'all losses to stop', 'profits for the insured', 'free goods'], 'Pooling of risks.'),
    Q('You cannot insure your neighbour’s house because you lack:', ['insurable interest', 'good faith', 'a premium', 'contribution'], 'You would suffer no loss.'),
    Q('Insurers share a claim when the same risk is insured with several of them, under:', ['contribution', 'subrogation', 'indemnity', 'proximate cause'], 'Each pays its share.'),
    Q('Life assurance is an exception to the principle of:', ['indemnity', 'utmost good faith', 'insurable interest', 'premium'], 'A life cannot be valued.'),
  ],
  'co-average-5': [
    Q('Goods worth 2 million FCFA insured for 1 million suffer a loss of 400,000 FCFA. Under the average clause the claim is:', ['200,000 FCFA', '400,000 FCFA', '1,000,000 FCFA', '100,000 FCFA'], '1/2 × 400,000.'),
    Q('The claim under the average clause can never exceed:', ['the sum insured', 'the premium', 'the loss times two', 'zero'], 'Maximum payable.'),
    Q('People under-insure mainly to:', ['pay a lower premium', 'receive more money', 'avoid good faith', 'help the insurer'], 'Saving on premiums.'),
    Q('Over-insurance gives:', ['no extra benefit', 'double payment', 'a profit', 'free goods'], 'Indemnity pays only the loss.'),
  ],

  // ---------- Form 5, terms 2 and 3 ----------
  'co-marine-5': [
    Q('A voyage policy covers:', ['one journey', 'a year of journeys', 'a factory', 'a life'], 'Single voyage.'),
    Q('Freight insurance protects:', ['the freight charges that would be lost', 'the ship', 'the crew', 'the port'], 'Earnings for carriage.'),
    Q('A floating policy is used by exporters who:', ['make many shipments within a total value', 'ship only once', 'never export', 'insure lives'], 'Covers many shipments.'),
    Q('A total loss means:', ['the ship or cargo is completely lost', 'a small accident', 'a delay', 'a premium'], 'Nothing is saved.'),
  ],
  'co-fireaccident-5': [
    Q('Consequential loss insurance pays for:', ['profits lost while a business cannot trade after a fire', 'the building only', 'stolen cash only', 'a death'], 'Business interruption.'),
    Q('Fidelity guarantee insurance protects against:', ['dishonest employees', 'fire', 'storms', 'shipwreck'], 'Employee fraud.'),
    Q('Term assurance pays only if death occurs:', ['within a set period', 'at any time', 'never', 'after retirement'], 'Limited period.'),
    Q('A loss adjuster (assessor):', ['values the loss for a claim', 'sells goods', 'collects duty', 'drives the ship'], 'Expert valuation.'),
  ],
  'co-companies-5': [
    Q('A dividend is:', ['a share of profits paid to shareholders', 'a loan', 'a tax', 'a premium'], 'Return on shares.'),
    Q('The board of directors of a company is elected by:', ['the shareholders', 'the government', 'the customers', 'the workers only'], 'Owners choose managers.'),
    Q('Any losses of a public corporation fall on:', ['the state', 'shareholders on the stock exchange', 'its customers only', 'a sole trader'], 'State-owned.'),
    Q('A stock exchange allows companies to:', ['raise capital by selling shares and bonds', 'avoid taxes', 'print money', 'insure goods'], 'Capital market.'),
  ],
  'co-communication-5': [
    Q('Registered mail provides:', ['proof of posting and delivery', 'instant delivery', 'free delivery', 'no record'], 'Security for documents.'),
    Q('A disadvantage of the telephone for orders is:', ['no written record unless confirmed', 'it is slow', 'it is costly always', 'it needs a ship'], 'Confirm in writing.'),
    Q('Video calls help businesses to:', ['meet partners without travelling', 'store goods', 'insure goods', 'clear customs'], 'Saves travel.'),
    Q('Confidential information is best sent by:', ['secure, private methods', 'public radio', 'billboards', 'newspapers'], 'Protect privacy.'),
  ],
  'co-mcq-5': [
    Q('General average differs from particular average because it is:', ['deliberate and shared', 'accidental and borne by one', 'a life policy', 'a type of cheque'], 'A common trap pair.'),
    Q('Which is the account holder on a cheque?', ['the drawer', 'the drawee', 'the payee', 'the bank'], 'Drawer writes the cheque.'),
    Q('A standing order differs from a direct debit because:', ['the payer fixes the amount in a standing order', 'the payee fixes it in a standing order', 'they are identical', 'neither involves a bank'], 'Direct debits are collected by the payee.'),
    Q('About how long should each Paper 1 question take?', ['about a minute and a half', 'ten minutes', 'five seconds', 'half an hour'], 'Leave time to check.'),
  ],
  'co-identify-5': [
    Q('Which body sets product standards in Cameroon?', ['ANOR', 'BEAC', 'CAMPOST', 'Camrail'], 'Agence des Normes et de la Qualité.'),
    Q('The document that tells a buyer goods have been sent is the:', ['advice note', 'delivery note', 'receipt', 'statement'], 'Sent before the goods.'),
    Q('The regional stock exchange based in Douala is the:', ['BVMAC', 'BEAC', 'COBAC', 'CIMA'], 'Central African exchange.'),
    Q('Which document is certified by the consul of the importing country?', ['consular invoice', 'certificate of origin', 'bill of lading', 'air waybill'], 'Confirms price and origin.'),
  ],
  'co-structured-5': [
    Q('"Define" asks for:', ['the precise meaning of a term', 'a list of examples only', 'a calculation', 'an essay'], 'Key words.'),
    Q('A 4-mark "state" question needs about:', ['four short points', 'one point', 'ten points', 'a page of essay'], 'One mark per point.'),
    Q('Numbering points in an answer helps:', ['the examiner see each point clearly', 'nothing', 'confuse the marker', 'reduce marks'], 'Clarity.'),
    Q('"Distinguish" questions are best answered:', ['in clear pairs of differences', 'with one definition', 'with a story', 'with a diagram only'], 'Contrast point by point.'),
  ],
  'co-calcclinic-5': [
    Q('Net profit percentage is:', ['net profit ÷ sales × 100', 'net profit ÷ cost × 100', 'sales ÷ profit', 'expenses ÷ profit'], 'On sales.'),
    Q('Opening stock 50,000; purchases 300,000; closing stock 30,000. COGS is:', ['320,000 FCFA', '380,000 FCFA', '280,000 FCFA', '350,000 FCFA'], '50,000 + 300,000 − 30,000.'),
    Q('A margin greater than 100% is:', ['impossible', 'normal', 'common', 'required'], 'Profit cannot exceed the selling price.'),
    Q('A rate of turnover of 6 means:', ['average stock is sold 6 times in the period', 'profit is 6%', 'sales are 6 FCFA', 'stock lasts 6 years'], 'Interpretation.'),
  ],
  'co-mock-5': [
    Q('Commerce Paper 2 lasts:', ['2½ hours', '1½ hours', '1 hour', '3½ hours'], 'Structured questions and calculations.'),
    Q('The last minutes of Paper 2 are best used to:', ['check calculations and units', 'start a new question', 'leave early', 'rewrite the questions'], 'Catch errors.'),
    Q('A calculator should be brought:', ['if the rules allow it', 'never', 'only for Paper 1', 'to share with friends'], 'Follow the regulations.'),
    Q('The mock exam is mainly for:', ['finding and fixing weaknesses', 'replacing the GCE', 'stopping revision', 'choosing new subjects'], 'A rehearsal.'),
  ],
  'co-remediation-5': [
    Q('Deducting cash discount before trade discount is:', ['an error', 'the correct order', 'required', 'irrelevant'], 'Trade discount comes first.'),
    Q('Calling a credit note a document that increases the debt is:', ['an error: it reduces the debt', 'correct', 'about receipts', 'about orders'], 'Debit notes increase it.'),
    Q('An exact feature of a bonded warehouse is:', ['duty is paid only on removal for home consumption', 'anyone can remove goods', 'no customs control', 'duty is never paid'], 'Precision earns marks.'),
    Q('The best way to fix a calculation weakness is:', ['daily practice with worked solutions', 'ignoring it', 'memorising answers only', 'skipping calculations'], 'Practice.'),
  ],
};
