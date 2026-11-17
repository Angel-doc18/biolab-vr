// Economics lessons for Form 3 (second part): the mobility of labour and the
// guided work on its barriers, capital, enterprise, the siting and
// localisation of industry, the scale of production, internal and external
// economies of scale, the production unit project and the general revision.
// Original text written for this app, with examples in francs CFA (FCFA).

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

export const LESSONS_3B = [
  // ---------- 11. Mobility of labour ----------
  L('ec-mobility-3', 'ec-f3-mobility', '11.1', 'Geographical and occupational mobility of labour', 14, ['Factors of production'], [
    'The **mobility of labour** is the ease with which workers can move from one job to another, or from one place to another. When labour is mobile, workers can go where they are needed and where they earn most, and output rises.',
    '**Geographical mobility** is moving from one place to another to work, for example a mechanic who leaves Ebolowa for a job in Douala. It is reduced by:\n- the **cost of moving** and the high cost of **housing** in big towns\n- **family and community ties**, and attachment to one’s home area\n- **lack of information** about jobs elsewhere\n- **language and culture**: Cameroon has two official languages, English and French, and many local languages\n- children’s **schooling**\n- **insecurity** in some areas.',
    '**Occupational mobility** is changing from one kind of job to another, for example a farmer who trains to become a welder. It is reduced by:\n- **long or costly training** for the new job\n- **lack of natural ability** or talent\n- **age**: older workers find it harder to learn new skills\n- **professional rules**: some jobs (doctors, lawyers) require recognised qualifications\n- **lack of capital** to start a new trade\n- **prejudice and discrimination**.',
  ], 'econ3-mobility', 'Geographical: change of place. Occupational: change of job.',
  ['An accountant in Garoua who becomes a teacher in Garoua shows:', ['occupational mobility', 'geographical mobility', 'both kinds of mobility', 'immobility'], 'The job changed, the place did not.'],
  [['Mobility of labour', 'The ease with which workers change jobs or places of work.'], ['Geographical mobility', 'Moving from one place to another to work.'], ['Occupational mobility', 'Changing from one kind of job to another.'], ['Immobility', 'Being unable or unwilling to change jobs or places.']],
  [
    { q: 'Kum, a trained bricklayer in Kumbo, is offered a job in Kribi paying 40,000 FCFA a month more. Moving costs 60,000 FCFA and his rent would rise by 25,000 FCFA a month. Is the move worth it in money terms over one year?', steps: ['Extra pay in a year: 40,000 × 12 = 480,000 FCFA.', 'Extra costs: moving 60,000 + rent 25,000 × 12 = 60,000 + 300,000 = 360,000 FCFA.', 'Gain: 480,000 − 360,000 = **120,000 FCFA in the first year**.', '**In money terms the move pays, but family ties or language may still stop him: barriers are not only about money.**'] },
  ]),

  L('ec-mobilityhelp-3', 'ec-f3-mobility', '11.2', 'Improving the mobility of labour', 12, ['Factors of production'], [
    'Immobile labour causes problems: unemployment in some areas or trades while firms elsewhere cannot find workers, and wasted skills. Governments, firms and workers can improve mobility.',
    'To improve **geographical mobility**:\n- spread **information** about vacancies through job centres, newspapers, radio and online job sites (in Cameroon, the National Employment Fund, FNE, helps job seekers)\n- provide **cheaper housing** or housing allowances in the towns where workers are needed\n- pay **removal and transfer allowances**, as the public service often does\n- improve **roads and transport**\n- promote **bilingualism**, so workers can work anywhere in the country.',
    'To improve **occupational mobility**:\n- offer **training and retraining** courses, technical schools and apprenticeships\n- give **loans** to people who want to start a new trade\n- recognise **qualifications** gained in other places\n- fight **discrimination** in hiring.\nSome barriers can never be removed fully: natural ability and strong family ties remain.',
  ], 'econ3-mobilityhelp', 'Information, housing and training are the main cures for immobility.',
  ['Free evening courses in computer repair mainly improve:', ['occupational mobility', 'geographical mobility', 'the supply of land', 'capital accumulation'], 'New skills open new jobs.'],
  [['Job centre', 'An office that gives information about vacancies and helps people find work.'], ['Retraining', 'Learning new skills for a different job.'], ['Transfer allowance', 'Money paid to help a worker move to a new place of work.'], ['Bilingualism', 'The ability to use two languages, in Cameroon English and French.']],
  [
    { q: 'A region has many unemployed carpenters, while a growing town 300 km away lacks electricians. Suggest one measure for each kind of mobility.', steps: ['Occupational: **retraining courses so carpenters can qualify as electricians**.', 'Geographical: **job information and help with moving costs and housing in the growing town**.'] },
  ]),

  // ---------- 12. Guided work 2: barriers to mobility ----------
  L('ec-barriers-3', 'ec-f3-guided2', '12.1', 'Guided work: barriers to mobility in Cameroonian markets', 14, ['Factors of production', 'Guided work'], [
    'In this guided work, students study real barriers to the mobility of labour in their own area: a market, a motor park, a workshop street or a farming village. The aim is to link what people say to the barriers learnt in class.',
    'Typical cases found in Cameroonian towns:\n- a young tailor in a village cannot move to the city because **rents** there are too high\n- a mechanic does not move to a better-paid job because his **family** and **farm** are at home\n- a teacher trained only in French finds it hard to work in an English-speaking school: **language**\n- a trader would like to become a welder but has no money for **training** or tools\n- a farmer in an area hit by **insecurity** has left his land but cannot find work in town\n- job seekers did not hear about vacancies: **lack of information**.',
    'For each case, students write: the worker, the kind of mobility affected (geographical or occupational), the barrier, and one remedy. This turns a story into an economic analysis.',
  ], 'econ3-barriers', 'Case → kind of mobility → barrier → remedy.',
  ['A carpenter wants to work in another town but does not know where the vacancies are. The barrier is:', ['lack of information', 'lack of natural ability', 'language', 'age'], 'He cannot move to jobs he does not know about.'],
  [['Barrier', 'Something that stops or slows a movement.'], ['Case study', 'A detailed study of one real example.'], ['Remedy', 'A measure that removes or reduces a problem.']],
  [
    { q: 'Analyse this case: "Nkeng, 45, has sold clothes at Mokolo market for 20 years. She would like a job at a new bank but has no computer skills." Give the kind of mobility, the barriers and a remedy.', steps: ['Kind: **occupational mobility** (a change of job).', 'Barriers: **lack of training (computer skills)** and **age**, which makes retraining harder.', 'Remedy: **a short computer and bookkeeping course, perhaps with an evening timetable so she can keep trading meanwhile**.'] },
  ]),

  L('ec-survey-3', 'ec-f3-guided2', '12.2', 'Guided work: a small survey and its results', 14, ['Guided work', 'Graphs'], [
    'A **survey** collects facts by asking the same questions to many people, the **respondents**. Steps:\n- decide the **aim**: "What stops workers in our market moving to better jobs?"\n- write a short **questionnaire** with clear questions and choices\n- choose the **sample**: for example 40 workers in different trades\n- explain the purpose, ask **permission** and keep answers anonymous\n- **record** the answers with tally marks, then count them.',
    'Present the results in a **table** with the number and the **percentage** for each answer (percentage = number ÷ total × 100), and in a **bar chart** drawn to scale, with the answers on one axis and the number of workers on the other.',
    'Example: 40 workers named their main barrier: cost of housing 12 (30%), family ties 9 (22.5%), lack of information 8 (20%), language 6 (15%) and insecurity 5 (12.5%). The conclusion explains the results with economics: housing costs and family ties, both barriers to **geographical** mobility, were named by more than half the workers.',
  ], 'econ3-survey', 'Count, convert to percentages, draw to scale, then explain with economics.',
  ['In a survey of 40 workers, 6 named language as their barrier. The percentage is:', ['15%', '6%', '24%', '60%'], '6 ÷ 40 × 100 = 15.'],
  [['Survey', 'A planned collection of facts by asking many people the same questions.'], ['Respondent', 'A person who answers a survey.'], ['Questionnaire', 'A written list of questions used in a survey.'], ['Sample', 'The group of people chosen to answer a survey.'], ['Tally', 'Marks made to count answers in groups of five.']],
  [
    { q: 'Check the example survey: show that the percentages add up to 100, and find what share named a barrier to geographical mobility (housing, family ties, insecurity).', steps: ['30 + 22.5 + 20 + 15 + 12.5 = **100%**.', 'Geographical barriers: 12 + 9 + 5 = 26 workers.', '26 ÷ 40 × 100 = **65%** named a barrier to geographical mobility.'] },
  ]),

  // ---------- 13. Capital ----------
  L('ec-capitaltypes-3', 'ec-f3-capital', '13.1', 'Capital: meaning and types', 13, ['Factors of production'], [
    '**Capital** is man-made wealth used to produce other goods and services: tools, machines, buildings, vehicles, roads and stocks of materials. Capital goods are **producer goods**: they are not wanted for themselves but for what they help to produce. The reward for capital is **interest**. In everyday speech "capital" also means money for a business; money becomes real capital when it is spent on capital goods.',
    'Types of capital:\n- **fixed capital**: used again and again over many years (a corn mill, a delivery van, a workshop)\n- **circulating (working) capital**: used up in one round of production (flour for a bakery, fuel, cloth for a tailor)\n- **social capital**: owned by the community for public use (roads, bridges, schools, hospitals, water supply)\n- **private capital**: owned by individuals and firms\n- **human capital**: the skills and knowledge of workers, built up by education and training.',
    'Capital wears out and loses value with use and age. This is **depreciation**. A taxi bought for 6,000,000 FCFA that is expected to last 5 years loses on average 1,200,000 FCFA of value a year.',
  ], 'econ3-capital', 'Fixed capital lasts; circulating capital is used up; social capital serves the community.',
  ['For a bakery, the flour is:', ['circulating capital', 'fixed capital', 'social capital', 'land'], 'It is used up in each batch.'],
  [['Capital', 'Man-made goods used to produce other goods.'], ['Interest', 'The reward for capital.'], ['Fixed capital', 'Capital used many times over a long period.'], ['Circulating capital', 'Capital used up in one round of production.'], ['Human capital', 'The skills and knowledge of workers.'], ['Depreciation', 'The fall in the value of capital through use and age.']],
  [
    { q: 'Classify for a palm-oil mill: (a) the press; (b) the palm fruits; (c) the road to the mill; (d) the firewood for boiling; (e) the trained operator’s skills.', steps: ['(a) **Fixed capital**.', '(b) **Circulating capital** (raw material).', '(c) **Social capital**.', '(d) **Circulating capital**.', '(e) **Human capital**.'] },
  ]),

  L('ec-accumulation-3', 'ec-f3-capital', '13.2', 'Capital accumulation and its importance', 14, ['Factors of production'], [
    '**Capital accumulation** (capital formation) is the building up of the stock of capital goods. It needs two steps:\n- **saving**: people and firms give up some consumption now and keep part of their income\n- **investment**: the savings are used, often through banks, microfinance institutions or njangi (tontine) groups, to buy new capital goods.\nSo a country that saves little finds it hard to build capital.',
    'Not all investment adds to the stock. **Gross investment** is all spending on new capital goods in a year; part of it only **replaces** capital that has worn out (depreciation). **Net investment** = gross investment − depreciation. Only net investment increases the stock of capital.',
    'Why capital matters:\n- it raises the **productivity of labour**: one worker with a tractor does the work of many with hoes\n- it allows **large-scale production** and new products\n- social capital (roads, power, ports) helps all firms\n- it creates **jobs** in building and making capital goods\n- it is the key to **economic growth** and higher living standards.\nObstacles in poor countries: low incomes and so low savings, a weak banking system, insecurity and lack of land titles to use as security.',
  ], 'econ3-accumulation', 'Saving → investment → more capital → more output. Net investment = gross − depreciation.',
  ['A firm spends 10 million FCFA on machines in a year, while machines worth 4 million FCFA wear out. Its net investment is:', ['6 million FCFA', '14 million FCFA', '10 million FCFA', '4 million FCFA'], '10 − 4 = 6.'],
  [['Capital accumulation', 'The building up of the stock of capital goods.'], ['Saving', 'The part of income not spent on consumption.'], ['Investment', 'Spending on new capital goods.'], ['Net investment', 'Gross investment minus depreciation.'], ['Njangi', 'A savings group whose members pay in regularly and take turns to receive the pool (tontine).']],
  [
    { q: 'A carpenter earns 150,000 FCFA a month and saves 20% of it in a njangi. How long until he can buy a 540,000 FCFA planing machine?', steps: ['Saving each month: 20% × 150,000 = **30,000 FCFA**.', 'Months needed: 540,000 ÷ 30,000 = **18 months**.', '**By giving up consumption now, he builds fixed capital that will raise his output later.**'] },
  ]),

  // ---------- 14. Enterprise ----------
  L('ec-entrepreneur-3', 'ec-f3-enterprise', '14.1', 'The entrepreneur: functions and qualities', 13, ['Factors of production'], [
    '**Enterprise** (entrepreneurship) is the factor that **organises** the other three. The **entrepreneur** has a business idea, brings together land, labour and capital, takes the decisions and bears the **risk** of loss. In a small business the owner is the entrepreneur; in a large company the shareholders bear the risk and managers take many decisions.',
    'Functions of the entrepreneur:\n- **initiating**: having the idea and starting the business\n- **organising**: hiring workers, renting premises, buying machines and materials\n- **decision-making**: what to produce, how much, how and at what price\n- **risk-bearing**: accepting possible losses\n- **innovating**: new products, new methods, new markets\n- **controlling**: checking quality, costs and results.',
    'Qualities of a good entrepreneur: willingness to take **calculated risks**, **creativity**, hard work and **self-discipline**, the ability to **plan** and keep records, good relations with customers and workers, and **honesty**. Many Cameroonian entrepreneurs start small, in the informal sector, and grow as their savings and experience increase.',
  ], 'econ3-enterprise', 'The entrepreneur initiates, organises, decides, bears risk and innovates.',
  ['A trader who starts selling solar lamps in a village without electricity is mainly:', ['innovating and taking a risk', 'supplying land', 'supplying labour for wages', 'lending capital'], 'A new product in a new market.'],
  [['Enterprise', 'The factor that organises land, labour and capital and bears the risk.'], ['Entrepreneur', 'The person who starts and runs a business and bears its risk.'], ['Risk-bearing', 'Accepting the chance of loss.'], ['Innovation', 'Bringing in new products, methods or markets.']],
  [
    { q: 'Ngo starts a juice business. Match each action to a function: (a) she has the idea of selling bottled pineapple juice; (b) she rents a kitchen and hires two helpers; (c) she sets the price at 300 FCFA a bottle; (d) she risks her savings of 400,000 FCFA.', steps: ['(a) **Initiating**.', '(b) **Organising**.', '(c) **Decision-making**.', '(d) **Risk-bearing**.'] },
  ]),

  L('ec-profit-3', 'ec-f3-enterprise', '14.2', 'Profit: the reward for enterprise', 14, ['Factors of production', 'Graphs'], [
    'The reward for enterprise is **profit**: what is left of the **total revenue** (money from sales) after all **costs** are paid. Profit = total revenue − total cost. If costs are greater than revenue, the result is a **loss**, which the entrepreneur bears. Unlike rent, wages and interest, profit is not agreed in advance: it is a **residual** reward and can be large, small or negative.',
    'Profit rewards **risk**. Some risks are **insurable**: fire, theft, accidents and floods can be covered by paying a premium to an insurance company, because they can be calculated from past cases. Others are **uninsurable**: a fall in demand, a change in fashion, a new competitor or a change in government policy. The entrepreneur alone bears these, and profit is the reward for doing so.',
    'Profit also does useful work: it is a **signal** that people want a product, an **incentive** to work and innovate, and a source of **savings** to reinvest and expand the business.',
  ], 'econ3-profit', 'Profit = total revenue − total cost; it rewards uninsurable risk.',
  ['Which risk can a shop owner insure against?', ['theft of goods', 'a change in fashion', 'a new competitor opening nearby', 'a fall in customers’ incomes'], 'Theft can be calculated from past cases.'],
  [['Profit', 'Total revenue minus total cost; the reward for enterprise.'], ['Total revenue', 'The money received from sales: price × quantity sold.'], ['Loss', 'The amount by which costs exceed revenue.'], ['Insurable risk', 'A risk that can be covered by insurance.'], ['Uninsurable risk', 'A risk, such as a fall in demand, that cannot be insured.']],
  [
    { q: 'In a month a tailor earns 450,000 FCFA from sales. Costs: cloth and thread 180,000 FCFA, rent 50,000, apprentice’s wages 60,000, electricity 20,000. Find the total cost and the profit.', steps: ['Total cost = 180,000 + 50,000 + 60,000 + 20,000 = **310,000 FCFA**.', 'Profit = 450,000 − 310,000 = **140,000 FCFA**.', 'Notice how each factor is paid: rent for land (the shop), wages for labour, and profit for enterprise.'] },
    { q: 'Ngo sells 1,200 bottles of juice at 300 FCFA. Her costs are 390,000 FCFA. Profit or loss?', steps: ['Total revenue = 1,200 × 300 = **360,000 FCFA**.', '360,000 − 390,000 = −30,000.', '**A loss of 30,000 FCFA, which Ngo bears as the entrepreneur.**'] },
  ]),

  // ---------- 15. Siting of industries ----------
  L('ec-siting-3', 'ec-f3-siting', '15.1', 'Siting an industry: the location factors', 14, ['Production'], [
    'An **industry** is a group of firms producing similar goods (the cement industry, the brewing industry). The **location** or **siting** of an industry is the place where its firms are set up. The **localisation** of industry is the concentration of many firms of the same industry in one area.',
    'An entrepreneur tries to choose the site with the **lowest costs** and the **best access to customers**. Siting factors:\n- **raw materials**: industries whose materials are heavy or lose weight in processing locate near them\n- **market**: industries whose products are bulky, fragile or perishable locate near customers\n- **power**: industries that use much energy locate near cheap power\n- **transport**: good roads, railways, ports and airports\n- **labour**: a supply of workers with the right skills\n- **water**, for industries such as breweries and paper mills\n- **land**: enough cheap, flat land to build on\n- **government policy**: tax relief, industrial zones and bans in some areas\n- **security** and **historical** reasons (an industry stays where it began: industrial inertia).',
    'Industries tied to raw materials are **material-oriented**; those tied to customers are **market-oriented**. Industries that can locate almost anywhere, because their materials and products are light, are **footloose**.',
  ], 'econ3-siting', 'Heavy materials pull a factory to the source; perishable or bulky products pull it to the market.',
  ['A sugar factory is built beside the cane fields mainly because:', ['cane is heavy and spoils quickly after cutting', 'sugar is fragile', 'the market is there', 'labour is cheaper in towns'], 'Material-oriented.'],
  [['Industry', 'A group of firms producing similar goods.'], ['Siting (location)', 'The place where a firm or industry is set up.'], ['Material-oriented', 'Located near the raw materials.'], ['Market-oriented', 'Located near the customers.'], ['Footloose industry', 'An industry that can locate almost anywhere.'], ['Industrial inertia', 'An industry staying where it began after the first reasons have gone.']],
  [
    { q: 'A firm needs 10 tonnes of limestone to make 4 tonnes of cement. Transport costs 5,000 FCFA per tonne. Compare the transport cost of sending the materials to the market with that of processing at the quarry and sending the cement.', steps: ['Carry the limestone: 10 × 5,000 = **50,000 FCFA**.', 'Carry the cement: 4 × 5,000 = **20,000 FCFA**.', '**Processing near the quarry saves 30,000 FCFA per batch, so the cement works is material-oriented.**'] },
  ]),

  L('ec-industries-3', 'ec-f3-siting', '15.2', 'Where Cameroon’s industries are, and why', 13, ['Production', 'Cameroon'], [
    'Cameroon’s industries show the siting factors at work:\n- **Douala**: the main **port** and the largest **market**, with power, banks and skilled labour; breweries, soap, food processing, metal works and many others crowd its industrial zones of Bassa and Bonabéri\n- **Edéa**: the **aluminium smelter**, sited near cheap **hydroelectric power** from the Sanaga and close to the port of Douala\n- **Limbe**: the **oil refinery** (SONARA) on the **coast**, where crude oil can be brought in and products shipped out\n- **Figuil**: **cement** near deposits of **limestone**.',
    '- **Garoua** and the North: **cotton ginning** and oil mills in the **cotton-growing** zone\n- **Mbandjock** and **Nkoteng**: **sugar** beside the cane estates\n- the forests of the South and East: **sawmills** near the timber\n- **Yaoundé**: food, drinks and printing serving the **capital’s market** and government\n- **Kribi**: a **deep-sea port** opened in 2018, with an industrial zone planned around it.',
    'Douala holds far more industry than any other town. This concentration brings advantages, but also traffic, pollution and pressure on housing, which is why the government encourages firms to set up in other regions.',
  ], 'econ3-industries', 'Douala: port and market. Edéa: power. Figuil: limestone. Garoua: cotton.',
  ['Which pull explains the cotton ginneries around Garoua?', ['the raw material, cotton, grown nearby', 'the deep-sea port', 'cheap hydroelectric power only', 'the capital’s market'], 'Material-oriented.'],
  [['Industrial zone', 'An area set aside and equipped for factories.'], ['Hydroelectric power', 'Electricity made from the force of flowing water.'], ['Refinery', 'A factory that turns crude oil into fuels and other products.'], ['Ginnery', 'A factory that separates cotton fibre from its seeds.']],
  [
    { q: 'For each industry give the main siting factor: (a) the Edéa smelter; (b) a Douala brewery; (c) a sawmill in the East; (d) the Limbe refinery.', steps: ['(a) **Cheap hydroelectric power** (and the nearby port).', '(b) **The market** (and water, the port and labour).', '(c) **The raw material**: logs are heavy and bulky.', '(d) **Coastal site** for bringing in crude oil and shipping out products.'] },
  ]),

  // ---------- 16. Localisation ----------
  L('ec-agglomeration-3', 'ec-f3-localisation', '16.1', 'Localisation: the advantages', 13, ['Production'], [
    '**Agglomeration** is the grouping of many firms, often of one industry, in one area. Once an industry is established somewhere, it tends to attract more firms. Localisation brings advantages to firms and to the area.',
    'Advantages to firms:\n- a **pool of skilled labour** trained in the industry\n- **ancillary (subsidiary) firms** grow up nearby to supply parts, repairs and packaging\n- **specialised services**: banks, insurers, transport firms and training colleges that understand the industry\n- **shared infrastructure**: roads, power, water and ports\n- **reputation**: buyers come to the area known for the product\n- **exchange of ideas** and information between firms.',
    'Advantages to the area and its people:\n- **jobs** and higher incomes\n- growth of **towns**, shops and services\n- better **roads, schools and hospitals** paid for by taxes\n- more **revenue** for councils.\nThese cost savings from the growth of the whole industry in an area are **external economies of scale**, studied in a later topic.',
  ], 'econ3-agglomeration', 'Clusters give firms skilled workers, suppliers, services and a reputation.',
  ['A packaging firm opens near the breweries in Douala. For the breweries this is an advantage of:', ['ancillary firms nearby', 'congestion', 'rising rents', 'dispersal'], 'Suppliers close at hand.'],
  [['Agglomeration', 'The grouping of many firms in one area.'], ['Ancillary firm', 'A firm that supplies parts or services to a main industry.'], ['Infrastructure', 'Basic facilities such as roads, power, water and ports.'], ['Reputation', 'The good name an area or firm has for its products.']],
  [
    { q: 'Give two advantages of localisation for a new garment firm in an area with many tailors, and one for the people of the area.', steps: ['For the firm: **a pool of trained tailors** and **nearby suppliers of cloth, thread and repairs**.', 'For the people: **more jobs and higher incomes**.'] },
  ]),

  L('ec-localdisadv-3', 'ec-f3-localisation', '16.2', 'Localisation: disadvantages and dispersal', 13, ['Production'], [
    'Disadvantages of localisation:\n- **structural unemployment**: if the main industry declines, many workers lose their jobs at once, and their skills may not suit other work\n- **congestion**: traffic jams, overcrowded housing and long journeys to work\n- **pollution** of air, water and land\n- **rising costs**: land, rents and wages rise as firms compete for them\n- **regional imbalance**: some areas grow rich while others stay poor, and young people leave the poor areas\n- **strategic risk**: industry concentrated in one place can be badly hit by one disaster or conflict.',
    'Governments respond with **dispersal** (decentralisation) of industry: spreading firms to other regions. Measures include:\n- **tax relief** and other incentives for firms that set up in less developed regions\n- building **roads, power and water** in those regions\n- creating **industrial zones** and new ports, such as the deep-sea port of Kribi\n- refusing permission for new factories in crowded areas\n- placing **public enterprises** in different regions.',
    'Dispersal spreads jobs and reduces congestion, but firms may face higher costs away from their markets and suppliers, so incentives must be strong enough to attract them.',
  ], 'econ3-localdisadv', 'Concentration brings congestion and risk; dispersal spreads industry with incentives.',
  ['Many workers losing their jobs at once when an area’s main factory closes is called:', ['structural unemployment', 'seasonal unemployment', 'occupational mobility', 'an external economy'], 'The structure of the local economy has changed.'],
  [['Structural unemployment', 'Unemployment caused by the decline of an industry.'], ['Congestion', 'Overcrowding of roads, housing and services.'], ['Dispersal (decentralisation)', 'Spreading industry to many regions.'], ['Regional imbalance', 'Large differences in development between regions.']],
  [
    { q: 'A town has one textile factory employing 1,200 of its 6,000 workers. The factory closes. What share of the town’s workers lose their jobs directly, and why may others suffer too?', steps: ['1,200 ÷ 6,000 × 100 = **20% of workers** lose their jobs directly.', '**Shops, transport and ancillary firms that served the factory and its workers lose customers, so more jobs may be lost: the danger of depending on one industry.**'] },
  ]),

  // ---------- 17. Scale of production ----------
  L('ec-smallscale-3', 'ec-f3-scale', '17.1', 'Small-scale production', 13, ['Production'], [
    'The **scale of production** is the size of a production unit and the amount it produces. **Small-scale production** uses few workers, little capital and simple methods, and serves a small market. Examples: a roadside tailor, a provision store, a family farm, a small bakery, a hairdressing salon.',
    'Why small firms survive alongside large ones:\n- the **market is small**: a village needs only one or two bakeries\n- **personal service** matters: barbers, tailors, doctors\n- goods made to **individual order**: furniture, clothes\n- **perishable** goods sold fresh nearby\n- **little capital** is needed to start\n- **flexibility**: small firms change quickly with demand\n- **independence**: many people prefer to be their own boss\n- small firms **supply parts or services** to large firms\n- **government help** for small and medium-sized enterprises.',
    'Disadvantages: higher costs per unit, difficulty in borrowing, little money for research or advertising, and the business may end with the owner’s illness or death.',
  ], 'econ3-smallscale', 'Small firms survive on small markets, personal service and flexibility.',
  ['Hairdressing salons remain small mainly because:', ['customers want personal service', 'they need huge capital', 'the market is national', 'machines do all the work'], 'Service given person to person.'],
  [['Scale of production', 'The size of a production unit and its output.'], ['Small-scale production', 'Production with few workers, little capital and a small market.'], ['Flexibility', 'The ability to change quickly.']],
  [
    { q: 'Give four reasons why there are many small tailoring workshops in Cameroonian towns but few large clothing factories.', steps: ['**Customers want clothes made to measure**, often from cloth they bring.', '**Little capital** is needed: a sewing machine and a small room.', '**Personal service** and trust between tailor and customer.', '**Fashions change quickly**, and small workshops adapt fast.'] },
  ]),

  L('ec-largescale-3', 'ec-f3-scale', '17.2', 'Large-scale production and measuring firm size', 13, ['Production'], [
    '**Large-scale production** uses many workers, much capital, advanced machines and a high degree of **division of labour**, and serves a large market, often the whole country or abroad. Examples in Cameroon: breweries, cement works, sugar estates, the oil refinery and the aluminium smelter.',
    'Conditions needed: a **large market** to buy the output, **plenty of capital**, good **transport** and **power**, skilled **management** and **standardised** products. Advantages: lower cost per unit (economies of scale), research, wide distribution and stable employment. Disadvantages: impersonal service, management problems, boring repetitive jobs and, if the firm fails, large job losses.',
    'How the size of a firm is measured:\n- the **number of workers** employed\n- the amount of **capital** employed\n- its **output** or **turnover** (the value of sales in a year)\n- its **market share** (its sales as a percentage of all sales in the market)\n- the number of **branches** or factories.\nNo single measure is perfect: a capital-intensive refinery may employ fewer workers than a farm but have a far larger turnover.',
  ], 'econ3-scale', 'Size: workers, capital, turnover, market share. Large firms need large markets.',
  ['A firm’s sales are 30 billion FCFA in a market where total sales are 120 billion. Its market share is:', ['25%', '30%', '40%', '4%'], '30 ÷ 120 × 100 = 25.'],
  [['Large-scale production', 'Production with many workers, much capital and a large market.'], ['Turnover', 'The value of a firm’s sales in a period.'], ['Market share', 'A firm’s sales as a percentage of total market sales.'], ['Standardised product', 'A product made in the same form in large numbers.']],
  [
    { q: 'Firm A employs 900 workers and has a turnover of 5 billion FCFA; firm B employs 150 workers and has a turnover of 20 billion FCFA. Which is larger?', steps: ['By **workers**, firm A is larger (900 against 150).', 'By **turnover**, firm B is larger (20 billion against 5 billion).', '**The answer depends on the measure: B is probably capital-intensive. Several measures should be used together.**'] },
  ]),

  // ---------- 18. Internal economies and diseconomies ----------
  L('ec-internaleco-3', 'ec-f3-internal', '18.1', 'Internal economies of scale', 15, ['Production'], [
    '**Average cost** (cost per unit) = total cost ÷ output. As a firm grows, its average cost usually falls at first. The cost savings that a firm gains from **its own growth** are **internal economies of scale**: they arise inside the firm and belong to it alone.',
    'Kinds of internal economies:\n- **technical**: large firms use bigger, faster machines, divide labour more finely and use by-products\n- **buying and selling (marketing)**: bulk buying at discounts, cheaper transport of big loads, advertising spread over a large output\n- **financial**: big firms borrow more easily and at lower interest, and can sell shares\n- **managerial**: they employ specialist managers for production, sales, accounts and staff\n- **risk-bearing**: they spread risk by making many products and selling in many markets (diversification)\n- **research**: they can pay for research into new products and methods\n- **welfare**: canteens, clinics and housing keep workers healthy and loyal.',
    'Example: a bakery. At 100 loaves a day, total cost is 25,000 FCFA, an average cost of 250 FCFA a loaf. At 400 loaves, total cost is 46,000 FCFA, only 115 FCFA a loaf, because the oven, the rent and the baker’s time are spread over more loaves and flour is bought in bulk.',
  ], 'econ3-internal', 'Internal economies come from the firm’s own growth: technical, buying, financial, managerial, risk, research, welfare.',
  ['A large supermarket pays less per carton of oil than a small shop because of:', ['bulk buying, a marketing economy', 'a financial economy', 'a welfare economy', 'an external diseconomy'], 'Discounts for large orders.'],
  [['Average cost', 'Total cost divided by output: cost per unit.'], ['Internal economies of scale', 'Cost savings a firm gains from its own growth.'], ['Bulk buying', 'Buying in large quantities, usually at a discount.'], ['Diversification', 'Making several products or selling in several markets to spread risk.']],
  [
    { q: 'Using the bakery figures (100 loaves: 25,000 FCFA; 200: 36,000; 300: 42,000; 400: 46,000), calculate the average cost at each output.', steps: ['100 loaves: 25,000 ÷ 100 = **250 FCFA**.', '200 loaves: 36,000 ÷ 200 = **180 FCFA**.', '300 loaves: 42,000 ÷ 300 = **140 FCFA**.', '400 loaves: 46,000 ÷ 400 = **115 FCFA**: average cost keeps falling as output grows.'] },
  ]),

  L('ec-internaldis-3', 'ec-f3-internal', '18.2', 'Internal diseconomies and the optimum size', 14, ['Production', 'Graphs'], [
    'A firm cannot grow for ever and keep lowering its costs. Beyond a certain size, problems appear that **raise average cost**: these are **internal diseconomies of scale**.',
    'Causes:\n- **management problems**: the firm becomes too large to control; decisions are slow\n- **poor communication**: messages pass through many levels and get lost or delayed\n- **bureaucracy**: paperwork and rules multiply\n- **poor labour relations**: workers feel like numbers, lose interest, and strikes become more likely\n- **rising input costs**: buying huge quantities may push up the price of scarce materials\n- **waste and theft** are harder to control.',
    'The **optimum size** (optimum firm) is the output at which **average cost is lowest**. In the bakery example, output and total cost continue: 500 loaves cost 60,000 FCFA (120 FCFA a loaf) and 600 loaves cost 84,000 FCFA (140 FCFA a loaf). Average cost falls to **115 FCFA at 400 loaves**, then rises. The average cost curve is **U-shaped**: economies of scale on the falling side, diseconomies on the rising side, and the optimum at the bottom.',
  ], 'econ3-avcost', 'The optimum size is at the bottom of the U-shaped average cost curve.',
  ['If a firm’s average cost rises as it keeps growing, it is suffering from:', ['internal diseconomies of scale', 'internal economies of scale', 'bulk buying', 'external economies'], 'Too big to manage well.'],
  [['Internal diseconomies of scale', 'Rises in average cost caused by a firm growing too large.'], ['Optimum size', 'The output at which average cost is lowest.'], ['U-shaped curve', 'A curve that falls, reaches a lowest point and then rises.']],
  [
    { q: 'From the full bakery table (100: 25,000; 200: 36,000; 300: 42,000; 400: 46,000; 500: 60,000; 600: 84,000 FCFA), find the optimum output and say what happens after it.', steps: ['Average costs: 250, 180, 140, 115, 120 and 140 FCFA.', 'The lowest is **115 FCFA at 400 loaves a day**: the **optimum output**.', '**Beyond 400 loaves average cost rises (120, then 140 FCFA): internal diseconomies now outweigh the economies.**'] },
  ]),

  // ---------- 19. External economies and diseconomies ----------
  L('ec-externaleco-3', 'ec-f3-external', '19.1', 'External economies of scale', 13, ['Production'], [
    '**External economies of scale** are cost savings a firm gains from the **growth of its whole industry** or from being in an area where many firms of the industry are found. They come from **outside** the firm, so all firms in the industry or area share them, whatever their own size.',
    'Kinds of external economies:\n- **economies of concentration**: a pool of skilled workers, nearby suppliers and repair shops, and a good reputation for the area\n- **economies of information**: trade journals, exhibitions, research centres and trade associations shared by the industry\n- **economies of disintegration**: separate specialist firms take over single stages of production (spinning, weaving, dyeing), doing them more cheaply\n- **shared infrastructure**: roads, power lines, water and ports built for the area\n- **training**: technical schools and colleges that train workers for the industry\n- **specialised services**: banks, insurers and transport firms used to the industry’s needs.',
    'Example: a new transport company in Douala gains from the port, the garages and spare-parts dealers already there and the drivers trained by others: savings it did not have to create itself.',
  ], 'econ3-external', 'External economies come from the industry or area, and every firm in it shares them.',
  ['A technical college that trains welders for all the metal firms of a town gives those firms:', ['an external economy', 'an internal economy', 'an internal diseconomy', 'a financial economy'], 'Shared by the whole industry.'],
  [['External economies of scale', 'Cost savings a firm gains from the growth of its industry or area.'], ['Economies of concentration', 'Savings from many firms of an industry being close together.'], ['Disintegration', 'The splitting of an industry into separate firms, each doing one stage.'], ['Trade association', 'A body that represents and informs the firms of one industry.']],
  [
    { q: 'Say which kind of external economy each is: (a) a sawmill benefits from the timber research centre nearby; (b) a furniture maker buys ready-cut planks from a specialist firm; (c) a garage hires mechanics trained at the local technical college.', steps: ['(a) **Economy of information** (shared research).', '(b) **Economy of disintegration** (a specialist firm does one stage).', '(c) **Training**, part of the economies of concentration (a pool of skilled labour).'] },
  ]),

  L('ec-externaldis-3', 'ec-f3-external', '19.2', 'External diseconomies, and internal and external compared', 13, ['Production'], [
    'When an industry or area grows too much, costs can rise for **all** its firms. These are **external diseconomies of scale**:\n- **congestion**: traffic jams delay deliveries and workers\n- **rising rents and land prices**, as many firms compete for space\n- **rising wages**, as firms compete for scarce skilled workers\n- **shortages** of power, water and materials\n- **pollution**, which may bring clean-up costs, fines or illness among workers.',
    'Internal and external compared:\n- **source**: internal economies come from the firm’s own growth; external economies from the growth of the industry or area\n- **who gains**: internal economies belong to the one firm; external economies are shared by all firms in the industry or area\n- **size**: a firm must grow large for internal economies; even a small firm gains external economies from a good location\n- **examples**: bulk buying and big machines (internal); skilled labour pool and shared infrastructure (external).',
    'The same pattern holds for diseconomies: management problems are internal; congestion and rising rents in the area are external.',
  ], 'econ3-compare', 'Internal: from the firm’s own size. External: from the industry or area around it.',
  ['Higher rents for all firms in a crowded industrial zone are:', ['an external diseconomy', 'an internal economy', 'an internal diseconomy', 'an external economy'], 'A cost from the area’s growth.'],
  [['External diseconomies of scale', 'Rises in costs for all firms caused by the overgrowth of an industry or area.'], ['Congestion', 'Overcrowding that slows movement and raises costs.']],
  [
    { q: 'Classify each as an internal economy (IE), internal diseconomy (ID), external economy (EE) or external diseconomy (ED): (a) bulk buying; (b) traffic jams in the industrial zone; (c) slow decisions in a huge firm; (d) a nearby spare-parts market.', steps: ['(a) **IE**.', '(b) **ED**.', '(c) **ID**.', '(d) **EE**.'] },
  ]),

  // ---------- 20. Guided work 3: production unit project ----------
  L('ec-project-3', 'ec-f3-project', '20.1', 'Guided work: planning the study of a local production unit', 14, ['Guided work', 'Production'], [
    'The year’s project is a study of a real **production unit** near the school: a bakery, a tailoring workshop, a carpentry shop, a palm-oil mill, a poultry farm or a soap maker. Working in small groups, students apply everything learnt in Form 3.',
    'Steps:\n- **choose** a unit that is close, willing to receive you and safe to visit\n- **ask permission** from the owner, explain the purpose, and agree a time\n- **prepare a questionnaire** covering the topics of the course\n- **visit**, observe and take notes; take photographs only with permission\n- **collect figures**: number of workers, costs, prices, output\n- **analyse** the findings using economic terms\n- **write and present** the report.',
    'Questions to cover:\n- **production**: what it produces, which sector, which utility it creates\n- **factors**: land (site, rent), labour (number, skills, wages), capital (machines, materials), enterprise (who started it, risks)\n- **location**: why it is sited there\n- **scale**: small or large, and why; any economies of scale (bulk buying, for example)\n- **problems** and plans for the future.',
  ], 'econ3-project', 'Permission, questionnaire, visit, figures, analysis, report.',
  ['Which question studies the location of a production unit?', ['Why did you set up the business here?', 'How many apprentices do you have?', 'What do you pay for flour?', 'Who started the business?'], 'It asks about the siting factors.'],
  [['Production unit', 'A place where goods or services are produced.'], ['Questionnaire', 'A prepared list of questions.'], ['Observation', 'Watching carefully and recording what is seen.'], ['Findings', 'The facts discovered in a study.']],
  [
    { q: 'Write one question for each factor of production for a visit to a carpentry workshop.', steps: ['**Land**: Do you own or rent this site, and how much rent do you pay?', '**Labour**: How many people work here, and how were they trained?', '**Capital**: Which machines and tools do you use, and what materials?', '**Enterprise**: How did you start the business, and what are your biggest risks?'] },
  ]),

  L('ec-projectreport-3', 'ec-f3-project', '20.2', 'Guided work: writing up the production unit study', 14, ['Guided work', 'Production'], [
    'A clear report has these parts:\n- **title page**: the title, the names of the group and the date\n- **introduction**: the unit studied, where it is and why it was chosen\n- **method**: how the information was collected (visit, interview, observation)\n- **findings**: the facts, arranged under headings: production, factors, location, scale, costs and profit, problems\n- **analysis**: what the facts show, using economic terms\n- **conclusion and recommendations**: a short summary and practical suggestions\n- **appendix**: the questionnaire and any tables.',
    'Use **tables** for figures and do simple **calculations**: total cost, profit, average cost, the share of each cost. Example: a soap workshop makes 1,000 bars a month, sells them at 250 FCFA and has costs of 180,000 FCFA. Revenue = 250,000 FCFA, profit = 70,000 FCFA, average cost = 180 FCFA a bar.',
    'Good practice: write in your own words, use the exact figures given, respect any request to keep figures private, thank the owner, and present the work clearly to the class.',
  ], 'econ3-report', 'Introduction, method, findings, analysis, conclusion: then the figures speak.',
  ['In a report, the part that explains how the information was collected is the:', ['method', 'conclusion', 'title page', 'appendix'], 'It tells how the study was done.'],
  [['Report', 'A structured written account of a study.'], ['Analysis', 'Explaining what the findings mean, using economic ideas.'], ['Recommendation', 'A practical suggestion based on the findings.'], ['Appendix', 'Extra material placed at the end of a report.']],
  [
    { q: 'A poultry farm sells 300 chickens a month at 3,500 FCFA. Its costs: chicks 240,000 FCFA, feed 450,000, vaccines 30,000, wages 100,000, rent 40,000. Find the revenue, total cost, profit and average cost per chicken.', steps: ['Revenue = 300 × 3,500 = **1,050,000 FCFA**.', 'Total cost = 240,000 + 450,000 + 30,000 + 100,000 + 40,000 = **860,000 FCFA**.', 'Profit = 1,050,000 − 860,000 = **190,000 FCFA**.', 'Average cost = 860,000 ÷ 300 ≈ **2,867 FCFA per chicken**.'] },
  ]),

  // ---------- 21. General revision ----------
  L('ec-revision-3', 'ec-f3-review', '21.1', 'Revision: the three modules linked', 14, ['Revision'], [
    '**Module 1: economics and economic systems.** Economics studies the use of scarce resources to satisfy unlimited wants (Smith, Marshall, Robbins, Samuelson). Scarcity forces choice, and every choice has an opportunity cost. Every economy must decide what, how and for whom to produce. The free market answers through prices and profit; the planned economy through the state; the mixed economy, like Cameroon’s, through both.',
    '**Module 2: production and its factors.** Production creates utility in the primary, secondary and tertiary sectors. It uses four factors, each with a reward:\n- **land**: natural resources, fixed and immobile; earns **rent**\n- **labour**: human effort; its efficiency and mobility matter; earns **wages**\n- **capital**: man-made producer goods, built by saving and investment; earns **interest**\n- **enterprise**: organises and bears risk; earns **profit**.',
    '**Module 3: location and scale.** Firms site where costs are low and customers are near (raw materials, market, power, transport). Localisation brings external economies but also congestion and risk. As a firm grows, internal economies lower its average cost until diseconomies appear; the optimum size is where average cost is lowest. The production unit project connects all three modules to a real business.',
  ], 'econ3-review', 'Scarcity → choice → systems → production → factors → location and scale.',
  ['Which pair is correctly matched?', ['enterprise: profit', 'land: interest', 'capital: wages', 'labour: rent'], 'Land: rent; labour: wages; capital: interest; enterprise: profit.'],
  [['Module', 'A main part of a course.'], ['Reward of a factor', 'The payment a factor of production receives: rent, wages, interest or profit.']],
  [
    { q: 'Link the modules: show how scarcity (Module 1) explains why a firm wants to reach its optimum size (Module 3).', steps: ['Resources are **scarce**, so wasting them has an **opportunity cost**.', 'At the **optimum size** the firm produces at the **lowest average cost**, using the fewest resources per unit.', '**So reaching the optimum size is a way of using scarce resources efficiently.**'] },
  ]),

  L('ec-examskills-3', 'ec-f3-review', '21.2', 'Answering Form 3 economics questions', 13, ['Revision', 'Exam skills'], [
    'Form 3 tests use **multiple-choice** questions, **short structured** questions and some **calculations** and **diagrams**. The **command word** tells you what to do:\n- **define**: give the exact meaning, using key terms\n- **state** or **list**: give points briefly, no explanation\n- **explain**: give reasons, show how or why, add an example\n- **distinguish**: show the difference between two things, point by point\n- **calculate**: show the formula, the working and the unit (FCFA, %, tonnes)\n- **draw** or **illustrate**: a clear, labelled diagram drawn with a ruler.',
    'A good explanation has three parts: **point** (name it), **explain** (how or why it works), **example** (preferably from Cameroon). Example: "A financial economy of scale: large firms borrow more easily and at lower interest because banks see them as safer, as when a big brewery gets a loan more cheaply than a small bakery."',
    'Common mistakes: confusing money cost with opportunity cost; mixing up geographical and occupational mobility; calling every factory capital-intensive; forgetting units in calculations; mixing up internal and external economies. Read the question twice and answer exactly what it asks.',
  ], 'econ3-commandwords', 'Point, explain, example: and always obey the command word.',
  ['A question says "Distinguish between fixed and circulating capital." The best answer:', ['shows the difference point by point, with an example of each', 'lists types of land', 'defines only fixed capital', 'draws a map'], 'Distinguish means show the difference.'],
  [['Command word', 'The word in a question that tells you what to do.'], ['Define', 'Give the exact meaning of a term.'], ['Distinguish', 'Show the difference between two things.'], ['Calculate', 'Work out a figure, showing the working.']],
  [
    { q: 'Answer in full: "Explain two disadvantages of the localisation of industry." (4 marks)', steps: ['Point 1: **structural unemployment**. If the main industry declines, many workers in the area lose their jobs at once, as their skills suit only that industry.', 'Point 2: **congestion**. Too many firms in one place cause traffic jams and overcrowded housing, which raise costs and waste time, as in parts of Douala.', 'Each point is **named, explained and illustrated**: about 2 marks each.'] },
    { q: 'Answer: "Distinguish between geographical and occupational mobility of labour." (2 marks)', steps: ['**Geographical mobility** is a worker’s ability to move from one place to another to work, for example from Bafoussam to Douala.', '**Occupational mobility** is a worker’s ability to change from one kind of job to another, for example from farmer to welder.'] },
  ]),
];
