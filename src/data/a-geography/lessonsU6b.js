// A Level Geography lessons (0750), Upper Sixth, Terms 2 and 3: the
// population and cities of Cameroon, its agriculture, forests, fisheries and
// livestock, mining, energy and industry, transport, trade and tourism, world
// trade blocs and chokepoints, development and inequality, integrating charts
// and statistics into essays, and the final GCE drills.

const PAPER = { Method: 'All papers', Mapwork: 'Paper 2', Statistics: 'Paper 2', Physical: 'Papers 1 and 2', Human: 'Papers 1 and 3', Cameroon: 'Papers 1 and 3', MCQ: 'Paper 1' };

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

export const LESSONS_GU6B = [
  // ---------- 10. Population and cities ----------
  L('agg-cmrpop-1', 'agg-u6-cmr-population', '10.1', 'Distribution, density and growth of Cameroon’s population', 18, ['Cameroon'], [
    'Cameroon’s general censuses counted about 7.7 million people in **1976**, 10.5 million in **1987** and **17.5 million in 2005**, the last published census. Estimates for the mid-2020s are close to **29 million**, growing at about 2.5 per cent a year. The population is **youthful**: over 40 per cent are under 15, and the age-sex pyramid has a wide base.',
    'The average density is about 60 people per km², but distribution is very uneven:\n- **dense**: the **West** and **North-West** highlands (fertile volcanic soils, cool climate, old kingdoms), the **Littoral** (Douala), the **Centre** around Yaoundé, and the plains of the **Far North** (farming and herding on vertisols)\n- **sparse**: the **East** and **South** (dense forest, poor access, few towns; the East has well under 15 people per km²), much of the **Adamawa**, and the Benue valley.',
    'Factors of disparity: **physical** (relief, soils, climate, water, disease such as river blindness in some valleys and sleeping sickness in the past), **historical** (pre-colonial states, colonial plantations and railways), and **economic** (ports, industry, administration, roads).',
    'Natural increase is high because birth rates remain high (a total fertility rate above four children per woman) while death rates have fallen; Cameroon sits in late stage 2 or early stage 3 of the demographic transition.',
  ], 'agg-cmr-population', 'Dense in the highlands, cities and Far North plains; sparse in the forest east.',
  ['The East region is sparsely populated mainly because of:', ['dense forest, poor access and few towns', 'high mountains', 'a desert climate', 'volcanic hazards'], 'Physical and economic isolation.'],
  [['Population density', 'The number of people per square kilometre.'], ['Census', 'An official count of the whole population.'], ['Youthful population', 'A population with a high proportion of children.']],
  [
    { q: 'Explain the high population density of the West region.', steps: ['Soils: **fertile volcanic andosols support intensive farming.**', 'Climate: **cool, healthy highlands with reliable rain.**', 'History: **dense Bamileke chiefdoms long before colonial rule.**', 'Economy: **coffee, markets and towns such as Bafoussam.**'] },
  ]),

  L('agg-cmrpop-2', 'agg-u6-cmr-population', '10.2', 'Rural-urban migration and the growth of Douala and Yaoundé', 18, ['Cameroon'], [
    'More than half of Cameroon’s people now live in towns. **Rural-urban migration** is driven by **push factors** (low farm incomes, lack of services, land shortage, insecurity in some regions) and **pull factors** (jobs, schools, hospitals, electricity, the hope of a better life). Insecurity in the Far North and in the North-West and South-West since the late 2010s has added displaced people to the cities.',
    '**Douala**, the economic capital and main port, and **Yaoundé**, the political capital, have each grown to over three million people. Growth outpaces jobs and services: **hyper-urbanisation**.',
    'Problems:\n- **housing deficits** and **informal settlements** on flood-prone valleys and wetlands (in Douala) and steep slopes (in Yaoundé)\n- inadequate water, electricity and sanitation; waste collection\n- **traffic congestion** and long journeys, dominated by taxis and motorbike taxis\n- **flooding** where drains are blocked and building covers natural channels\n- unemployment and a large **informal sector**.',
    'Responses: urban master plans, drainage projects (in Douala), low-cost housing programmes, road upgrades, the upgrading of informal areas rather than demolition alone, decentralisation to regional towns, and rural development to reduce the push factors.',
  ], 'agg-cmr-urban', 'Push from the village, pull to the city, and services that cannot keep up.',
  ['Hyper-urbanisation describes cities that:', ['grow faster than their jobs and services', 'stop growing', 'are carefully planned', 'lose population'], 'Rapid growth without enough infrastructure.'],
  [['Push factor', 'A reason for leaving a place.'], ['Pull factor', 'A reason for moving to a place.'], ['Informal settlement', 'Housing built without legal title or planning permission.']],
  [
    { q: 'Evaluate solutions to flooding in Douala.', steps: ['Drainage: **cleaning and enlarging drains carries water away; effective but costly to maintain.**', 'Planning: **keeping buildings out of natural channels prevents new risk; hard to enforce.**', 'Waste: **regular collection stops drains blocking; cheap and effective.**', 'Judgement: **engineering works only with planning and waste management together.**'] },
  ]),

  // ---------- 11. Agriculture ----------
  L('agg-cmragric-1', 'agg-u6-cmr-agriculture', '11.1', 'The dualism of Cameroonian agriculture', 18, ['Cameroon'], [
    'Agriculture employs a large share of Cameroon’s workers and supplies food and exports. It shows **structural dualism**:\n- **traditional subsistence farming**: small family plots, hand tools, intercropping, shifting cultivation or bush fallow in the forest, many food crops (cassava, cocoyams, plantains, maize, groundnuts, sorghum); women grow most food crops\n- **commercial smallholdings**: family farms selling cocoa, coffee, cotton or food to markets\n- **agro-industrial corporations**: large estates and processing plants.',
    'Major agro-industries:\n- **CDC** (Cameroon Development Corporation, 1947), on the former German plantations of the South-West: palm oil, rubber, bananas, tea\n- **PAMOL**: palm oil in the South-West\n- **SOCAPALM**: palm oil in the Littoral and South\n- **SODECOTON** (1974): cotton in the North and Far North, buying from smallholders and ginning\n- **SEMRY** (1971): irrigated rice around **Yagoua** and **Maga** in the Far North\n- **SOSUCAM**: sugar cane at Mbandjock and Nkoteng; **HEVECAM**: rubber near Kribi.',
    'Dualism has strengths (exports, jobs, processing) and weaknesses: estates occupy good land; smallholders have little capital, credit or extension advice; prices for cocoa, coffee and cotton swing with world markets.',
  ], 'agg-cmr-dualism', 'Small family farms for food; corporations for export crops.',
  ['SEMRY is associated with:', ['irrigated rice in the Far North', 'tea in the North-West', 'cocoa in the Centre', 'rubber near Kribi'], 'Around Yagoua and Maga.'],
  [['Structural dualism', 'The coexistence of traditional and modern sectors in one economy.'], ['Agro-industry', 'An enterprise that grows and processes farm products.'], ['Bush fallow', 'Leaving land to rest under natural vegetation.']],
  [
    { q: 'Compare a cocoa smallholding in the Centre with a CDC estate.', steps: ['Size and labour: **a few hectares and family labour against thousands of hectares and paid workers.**', 'Inputs: **few inputs and old trees against fertiliser, machinery and processing.**', 'Marketing: **sale to traders and cooperatives against corporate export.**', 'Vulnerability: **both depend on world prices; the smallholder has less protection.**'] },
  ]),

  L('agg-cmragric-2', 'agg-u6-cmr-agriculture', '11.2', 'Crop regions, food security and modernisation', 17, ['Cameroon'], [
    'Crop regions follow climate and soils:\n- **forest south and Centre**: cocoa, robusta coffee, oil palm, plantains, cassava, cocoyams\n- **western highlands**: arabica coffee, maize, beans, potatoes, vegetables, tea (Ndu, Tole)\n- **coastal South-West and Littoral**: bananas for export, rubber, oil palm (estates)\n- **Adamawa**: cattle, maize, yams\n- **North and Far North**: cotton, sorghum and millet, groundnuts, onions, irrigated rice, muskwari sorghum on vertisols.',
    '**Food security** means everyone has access to enough safe, nutritious food at all times. Challenges in Cameroon: low yields; losses after harvest from poor storage and roads; dependence on rains; insecurity in the Far North and the North-West and South-West; rising imports of rice, wheat and fish; price rises.',
    '**Modernisation**: improved seeds and planting material, fertiliser and mechanisation, credit and cooperatives, extension services and research (IRAD), farm-to-market roads, storage and processing, irrigation (Lagdo, SEMRY), and support for young farmers. The National Development Strategy (SND30) aims to raise agricultural productivity and process more at home.',
    'Balance: modernisation must protect soils (erosion on slopes, leaching) and small farmers’ land rights.',
  ], ['agg-cmr-crops', 'agric-corporations'], 'Each zone has its crops; food security needs roads, storage and better yields.',
  ['Which crop is mainly grown in the western highlands?', ['arabica coffee', 'cotton', 'irrigated rice', 'bananas for export'], 'It needs cool, high ground.'],
  [['Food security', 'Reliable access for all people to enough safe and nutritious food.'], ['Extension service', 'Advice and training given to farmers.'], ['Post-harvest loss', 'Food lost between harvest and consumption.']],
  [
    { q: 'Explain why Cameroon imports large amounts of rice despite having irrigation schemes.', steps: ['Demand: **urban populations prefer rice, and demand grows fast.**', 'Supply: **SEMRY and other schemes produce far less than demand.**', 'Costs: **imported rice is often cheaper and more reliable.**', 'Constraints: **insecurity in the Far North and high production costs limit output.**'] },
  ]),

  // ---------- 12. Forests, fisheries and livestock ----------
  L('agg-cmrres-1', 'agg-u6-cmr-resources', '12.1', 'Forestry: value, deforestation and management', 17, ['Cameroon'], [
    'Forests cover roughly 40 per cent of Cameroon, mainly in the East, South, Centre and Littoral, part of the Congo basin forest. Timber is one of the main exports (species such as sapelli, ayous and iroko), shipped through Douala and Kribi, and processed in sawmills; forests also give fuelwood, bushmeat, medicinal plants and non-timber products (bush mango, njansang).',
    '**Deforestation** results from logging (and the roads it opens), shifting cultivation and the spread of farms, fuelwood and charcoal, agro-industrial plantations, mining and infrastructure. Effects: loss of biodiversity and of carbon storage, soil erosion, and harm to forest peoples such as the Baka.',
    '**Sustainable management**: the **forestry law of 20 January 1994** divided the forest into permanent and non-permanent estates, created **forest management units** with management plans, community forests and council forests, and forest taxes shared with local councils. **ANAFOR**, the national forestry development agency, supports plantations and reforestation. Protected areas (the **Dja**, Lobéké, Boumba-Bek and Nki parks), certification of timber and controls on illegal logging complete the system.',
    'Weaknesses: limited enforcement, illegal logging, weak local benefits; but the framework is among the more developed in Central Africa.',
  ], 'agg-cmr-forestry', 'Timber earns; deforestation costs; the 1994 law tries to balance them.',
  ['The 1994 forestry law created:', ['forest management units, community forests and shared forest taxes', 'a ban on all logging', 'new oil fields', 'the CDC'], 'A framework for sustainable use.'],
  [['Forest management unit', 'A forest concession managed under an approved plan.'], ['Community forest', 'A forest managed by a village community.'], ['Non-timber forest product', 'A forest product other than wood, such as fruit, nuts or medicines.']],
  [
    { q: 'Assess the effectiveness of the 1994 forestry law.', steps: ['Achievements: **management plans, community forests and tax sharing with councils.**', 'Problems: **illegal logging, weak enforcement and little benefit to some villages.**', 'Pressure: **farming and fuelwood continue to clear forest outside concessions.**', 'Judgement: **a strong legal framework whose impact depends on enforcement and local benefits.**'] },
  ]),

  L('agg-cmrres-2', 'agg-u6-cmr-resources', '12.2', 'Fisheries, livestock and transhumance', 17, ['Cameroon'], [
    '**Marine fishing**: industrial trawlers operate from Douala, Limbe and Kribi; **artisanal** fishing by canoe along the coast and in the estuaries supplies most of the catch, much of it smoked. Problems: overfishing, illegal foreign trawlers and pollution.',
    '**Inland fishing**: Lake Lagdo, Lake Maga, Lake Chad and the large rivers; fish farming (aquaculture) is growing. Cameroon still imports large amounts of frozen fish.',
    '**Livestock**: cattle are concentrated on the **Adamawa plateau** and in the North and Far North, mainly zebu herded by **Fulani (Mbororo)** pastoralists; ranches and research (the Wakwa station near Ngaoundéré) aim to improve breeds. Sheep, goats and poultry are kept everywhere; pigs mainly in the south and west.',
    '**Transhumance**: in the dry season herders move cattle from the plateau and dry plains to river valleys and the **yaérés** of the Logone floodplain, returning when the rains renew the grass. Issues: **conflicts** with farmers when cattle damage crops, overgrazing, cattle theft and insecurity, and animal diseases. Responses: marked livestock corridors, dialogue committees, water points and veterinary services.',
  ], 'agg-cmr-livestock', 'Fish from the sea and lakes; cattle on the Adamawa; herds move with the seasons.',
  ['Cattle are concentrated on the Adamawa plateau because it offers:', ['extensive grassland at altitude with fewer tsetse flies', 'dense forest', 'irrigated rice fields', 'a coastline'], 'Cooler grazing land.'],
  [['Transhumance', 'The seasonal movement of herds between pastures.'], ['Artisanal fishing', 'Small-scale fishing with canoes and simple gear.'], ['Aquaculture', 'The farming of fish.']],
  [
    { q: 'Explain why conflicts arise between herders and farmers in northern Cameroon.', steps: ['Competition: **both need the same land and water in the dry season.**', 'Movement: **transhumance routes cross farms and new settlements.**', 'Pressure: **population growth expands farmland into grazing areas.**', 'Responses: **corridors, water points and local dialogue reduce conflict.**'] },
  ]),

  // ---------- 13. Mining, energy and industry ----------
  L('agg-cmrind-1', 'agg-u6-cmr-industry', '13.1', 'Minerals, hydrocarbons and energy', 17, ['Cameroon'], [
    '**Crude oil** has been produced since **1977**, mainly offshore in the **Rio del Rey** basin and also in the Douala-Kribi basin. Output peaked in the mid-1980s and has declined since; oil remains a major export and source of government revenue. The **SONARA** refinery at **Limbe** (1981) refines crude for the home market.',
    '**Natural gas**: offshore fields near Kribi supply the **Kribi gas power plant** and a floating liquefaction plant that has exported liquefied natural gas since 2018.',
    'Other minerals:\n- **bauxite**: large deposits at **Minim-Martap** and **Ngaoundal** (Adamawa), not yet mined on a large scale\n- **iron ore**: deposits at **Mbalam** (East) and near Kribi\n- **cobalt and nickel**: at Nkamouna near Lomié\n- **gold**: mostly artisanal mining in the East (Bétaré-Oya, Batouri) and Adamawa\n- limestone for cement, and building materials.',
    'Electricity comes mainly from hydropower (the Sanaga stations, Lagdo, newer dams), with thermal and gas plants. Constraints: unreliable supply, transmission losses and limited rural access. Large mining projects need railways, power and ports, which is why the Kribi port is linked to plans for mineral exports.',
  ], ['agg-cmr-minerals', 'cameroon-power'], 'Oil and gas now; bauxite, iron and cobalt waiting for railways and power.',
  ['Cameroon’s bauxite deposits are mainly located:', ['on the Adamawa, at Minim-Martap and Ngaoundal', 'near Douala', 'in the Far North', 'offshore'], 'Not yet developed on a large scale.'],
  [['Hydrocarbons', 'Oil and natural gas.'], ['Artisanal mining', 'Small-scale mining by individuals or small groups with simple tools.'], ['Liquefied natural gas', 'Natural gas cooled to a liquid for transport by ship.']],
  [
    { q: 'Explain why Cameroon’s bauxite has not yet been mined on a large scale.', steps: ['Location: **deposits lie far inland on the Adamawa.**', 'Transport: **mining needs a heavy railway and a port for bulk exports.**', 'Energy: **processing to alumina and aluminium needs large amounts of power.**', 'Finance: **projects require huge investment and stable world prices.**'] },
  ]),

  L('agg-cmrind-2', 'agg-u6-cmr-industry', '13.2', 'Manufacturing, import substitution and SND30', 17, ['Cameroon'], [
    'After independence Cameroon followed **import substitution industrialisation (ISI)**: protecting and building industries to make goods previously imported (beverages, textiles, soap, cement, shoes, metal goods). Many state enterprises were created in the 1970s and 1980s; the crisis after 1987 and structural adjustment led to privatisations and closures.',
    'Main industries today:\n- **agro-processing**: breweries and soft drinks, sugar (SOSUCAM), palm oil and soap, cocoa and coffee processing, cotton ginning and oil (SODECOTON), flour milling, timber processing\n- **aluminium** at **Edéa** (ALUCAM, since 1957), using hydroelectric power and imported alumina\n- **oil refining** at Limbe, cement, chemicals, construction materials.',
    'Location: **Douala** concentrates most industry (port, power, market, skilled labour, the Bassa and Bonabéri zones), followed by Yaoundé, Edéa, Limbe and Garoua. **Bottlenecks**: unreliable electricity, high transport and port costs, limited finance, competition from imports, complex procedures and a large informal sector.',
    'The **National Development Strategy 2020 to 2030 (SND30)**, adopted in 2020, aims at **structural transformation**: industrialisation through processing local raw materials (agro-industry, timber, cotton, minerals), import substitution of foods and basic goods, better infrastructure (energy, transport, digital) and human capital.',
  ], 'agg-cmr-industry', 'From import substitution to processing at home: Douala leads.',
  ['ALUCAM’s smelter at Edéa depends above all on:', ['cheap hydroelectric power', 'local bauxite', 'coal from the Benue', 'a local car industry'], 'Aluminium smelting uses huge amounts of electricity.'],
  [['Import substitution', 'Making at home goods that were previously imported.'], ['Agro-processing', 'Turning farm products into food and industrial goods.'], ['Structural transformation', 'A shift of an economy from low-productivity farming to industry and services.']],
  [
    { q: 'Assess the opportunities and obstacles for industrialisation in Cameroon.', steps: ['Opportunities: **raw materials (cocoa, cotton, timber, bauxite, gas), hydropower potential, a regional market (CEMAC), ports at Douala and Kribi.**', 'Obstacles: **power shortages, transport costs, finance, skills, imports.**', 'Policy: **SND30 prioritises processing and infrastructure.**', 'Judgement: **opportunities are real, but energy and transport must improve first.**'] },
  ]),

  // ---------- 14. Transport, trade and tourism ----------
  L('agg-cmrtrans-1', 'agg-u6-cmr-tertiary', '14.1', 'Transport networks and ports', 17, ['Cameroon'], [
    '**Roads** carry most traffic: the main axes link Douala, Yaoundé and the regional capitals, and run north through Ngaoundéré, Garoua and Maroua to Kousseri and N’Djamena; international corridors lead to **Chad** and the **Central African Republic** (Douala to Bangui and to N’Djamena). Many rural roads are unpaved and impassable in the rains.',
    'The **railway (Transcamerounais)** runs from **Douala** to **Yaoundé** and on to **Ngaoundéré** (completed in 1974), with a branch towards Kumba and the old line towards Nkongsamba; it is operated by **Camrail**. Freight from Ngaoundéré continues by road to Chad and the North.',
    'Ports: **Douala**, a river port on the **Wouri estuary**, handles most of Cameroon’s sea trade and transit trade for Chad and the CAR, but needs constant dredging and suffers congestion; the **Kribi deep-sea port**, opened in **2018**, has deep water for large ships and a container terminal; **Limbe** serves the refinery; **Garoua** has a seasonal river port on the Benue.',
    'Air: international airports at Douala and Yaoundé-Nsimalen, with Garoua and Maroua. Transport costs, delays at ports and borders and poor rural roads raise prices and limit trade.',
  ], ['agg-cmr-transport', 'cameroon-transport'], 'Roads carry most; one railway; Douala crowded, Kribi deep.',
  ['The Kribi deep-sea port was built mainly because:', ['Douala is a shallow river port that needs dredging and is congested', 'Douala was closed', 'Kribi has oil refineries', 'the railway ends at Kribi'], 'Deep water for large ships.'],
  [['Transit trade', 'Trade passing through a country to another.'], ['Corridor', 'A main transport route linking a port with an inland area.'], ['Dredging', 'Removing sediment from a channel to keep it deep.']],
  [
    { q: 'Explain the importance of the Douala port to Chad and the Central African Republic.', steps: ['Landlocked: **neither country has a coast.**', 'Route: **goods arrive at Douala and travel by road and rail along corridors.**', 'Trade: **fuel, food and equipment imported; cotton, livestock and timber exported.**', 'Effect: **revenue and jobs for Cameroon; costs and delays for the neighbours.**'] },
  ]),

  L('agg-cmrtrans-2', 'agg-u6-cmr-tertiary', '14.2', 'Trade balance, ecotourism and cultural tourism', 17, ['Cameroon'], [
    '**Exports** are dominated by primary products: crude oil and liquefied gas, cocoa beans and products, timber, cotton, coffee, bananas, rubber and aluminium. **Imports** include fuels, rice, wheat, frozen fish, machinery, vehicles, medicines and manufactured goods. The **trade balance** is usually in **deficit** (imports worth more than exports), and earnings swing with world prices of oil and cocoa.',
    'Main trading partners include China, the European Union countries (France, Belgium, the Netherlands, Italy, Spain), India and neighbouring CEMAC states. Internal trade links food-producing regions with the cities through periodic markets.',
    '**Tourism** assets ("Africa in miniature"): **Waza** and **Bénoué** national parks (savanna wildlife), the **Dja**, **Korup** and Lobéké forests (gorillas, chimpanzees), **Mount Cameroon** (with the annual Race of Hope), the beaches of **Kribi** and **Limbe** and the Lobé falls, the palace of the Sultan at **Foumban**, the Bafut palace, the Mandara landscapes around **Rhumsiki**.',
    '**Ecotourism** aims to conserve nature and benefit local people (community guides, lodges). Constraints: poor roads and accommodation, insecurity in some regions, high costs of air travel, weak promotion and limited training. Indicators used: tourist arrivals, receipts, hotel capacity and length of stay.',
  ], 'agg-cmr-trade', 'Primary exports, manufactured imports: usually a deficit.',
  ['Cameroon’s trade balance is usually in deficit because:', ['it imports manufactured goods and food worth more than its mostly primary exports', 'it has no exports', 'it exports only cars', 'it does not import fuel'], 'And export earnings swing with world prices.'],
  [['Trade balance', 'The value of exports minus the value of imports.'], ['Ecotourism', 'Responsible travel to natural areas that conserves the environment and benefits local people.'], ['Periodic market', 'A market held on fixed days in rotation.']],
  [
    { q: 'Assess the potential of ecotourism in Cameroon.', steps: ['Assets: **diverse parks, mountains, beaches and cultures.**', 'Benefits: **jobs and income for communities, a reason to conserve.**', 'Constraints: **access, insecurity, costs and promotion.**', 'Judgement: **high potential, realised only with investment, security and community involvement.**'] },
  ]),

  // ---------- 15. World trade ----------
  L('agg-trade-1', 'agg-u6-trade', '15.1', 'World trade patterns and regional blocs', 17, ['Human'], [
    'World trade has grown faster than output since 1950, led by manufactured goods and services. Most trade is among the rich countries and East Asia; Africa’s share of world trade is only about **3 per cent**, mostly raw materials, and **intra-African trade** is a small share of the continent’s total.',
    'Regional blocs reduce barriers among members:\n- **free trade area** (no tariffs between members), **customs union** (plus a common external tariff), **common market** (plus free movement of labour and capital), **economic and monetary union** (plus a single currency)\n- the **European Union**: from the EEC (Treaty of Rome, 1957) to the EU (1993), with a single market and the euro\n- **ECOWAS** (1975): West Africa, with free movement of people\n- **CEMAC**: the Central African Economic and Monetary Community, created by a treaty signed in **1994** to replace **UDEAC** (1964); members Cameroon, the Central African Republic, Chad, Congo, Equatorial Guinea and Gabon; common currency, the **CFA franc** issued by the **BEAC**\n- the **African Continental Free Trade Area (AfCFTA)**: agreement signed in **Kigali in 2018**, trading began on **1 January 2021**; the largest free trade area by number of countries.',
    'Benefits: larger markets, economies of scale, investment, bargaining power. Problems: unequal gains, loss of tariff revenue, overlapping memberships, poor transport links and non-tariff barriers.',
  ], 'agg-trade-blocs', 'Free trade area, customs union, common market, monetary union: deeper and deeper.',
  ['A customs union differs from a free trade area because it:', ['adds a common external tariff', 'removes all borders for people', 'uses one currency', 'bans trade with outsiders'], 'Members agree one tariff on outsiders.'],
  [['Tariff', 'A tax on imported goods.'], ['Customs union', 'A free trade area with a common external tariff.'], ['Non-tariff barrier', 'An obstacle to trade other than a tax, such as quotas or slow customs.']],
  [
    { q: 'Explain why intra-African trade is low.', steps: ['Similar exports: **many countries sell the same raw materials, mostly to other continents.**', 'Infrastructure: **poor road and rail links between neighbours.**', 'Barriers: **tariffs, checkpoints, slow customs and different currencies.**', 'Response: **AfCFTA and regional corridors aim to raise it.**'] },
  ]),

  L('agg-trade-2', 'agg-u6-trade', '15.2', 'Sea routes and strategic chokepoints', 16, ['Human'], [
    'About four-fifths of world trade by volume travels by sea, in container ships, bulk carriers and tankers. Routes concentrate on a few narrow passages, the **chokepoints**:\n- **Suez Canal** (opened 1869): links the Mediterranean and the Red Sea, shortening Europe-Asia voyages around Africa\n- **Bab el-Mandeb**: the southern entrance to the Red Sea\n- **Strait of Hormuz**: the exit of the Persian Gulf, carrying much of the world’s oil\n- **Strait of Malacca**: between the Malay Peninsula and Sumatra, the shortest route between the Indian Ocean and the Pacific\n- **Panama Canal** (opened 1914): links the Atlantic and the Pacific\n- the **Strait of Gibraltar** and the **Cape of Good Hope** route.',
    'Risks: blockages (the container ship stuck in the Suez Canal in March 2021), conflict and piracy (the Gulf of Aden, the Gulf of Guinea), drought lowering water in the Panama Canal (2023), and rising insurance and freight costs.',
    'When Suez or Bab el-Mandeb are disrupted, ships reroute around the **Cape of Good Hope**, adding days and costs; West and Central African ports lie on that route.',
    'For Cameroon: Douala and Kribi handle trade with Europe and Asia; security in the **Gulf of Guinea** and efficient port logistics affect the cost of imports and the competitiveness of exports.',
  ], 'agg-chokepoints', 'Trade funnels through a few straits and canals.',
  ['The Strait of Malacca is important because it:', ['is the shortest sea route between the Indian Ocean and the Pacific', 'links the Mediterranean and the Red Sea', 'is the exit of the Persian Gulf', 'crosses Panama'], 'Busy with trade between Asia, the Gulf and Europe.'],
  [['Chokepoint', 'A narrow passage on a major sea route.'], ['Container ship', 'A ship carrying goods in standard steel boxes.'], ['Freight cost', 'The cost of transporting goods.']],
  [
    { q: 'Explain how disruption of the Suez Canal affects trade between Europe and Asia.', steps: ['Rerouting: **ships sail around the Cape of Good Hope instead.**', 'Time and cost: **voyages lengthen by about 10 days, using more fuel.**', 'Supply chains: **late deliveries and shortages of components.**', 'Prices: **higher freight and insurance raise the price of imported goods.**'] },
  ]),

  // ---------- 16. Development ----------
  L('agg-dev-1', 'agg-u6-development', '16.1', 'Measuring development: GDP, HDI and the North-South divide', 17, ['Human'], [
    '**Development** means improvements in people’s standard of living and well-being: income, health, education, freedom and security. The **Brandt Report** (1980) drew a line dividing the rich **North** from the poorer **South**; today the picture is more complex, with emerging economies and great inequality within countries.',
    'Indicators:\n- **GDP per capita** (often adjusted for purchasing power): simple but hides inequality, ignores unpaid work and environmental damage\n- **social indicators**: life expectancy, infant mortality, literacy, access to clean water, doctors per thousand people\n- the **Human Development Index (HDI)**, introduced by the **UNDP** in **1990**, combines **life expectancy**, **education** (mean and expected years of schooling) and **income** (GNI per capita) into a value from 0 to 1.',
    'Cameroon falls in the **medium human development** group, below the world average, with wide differences between regions and between town and countryside. Other measures include the inequality-adjusted HDI, the Gini coefficient (income inequality) and multidimensional poverty indices.',
    'Causes of inequality between countries: history (colonialism and the export of raw materials), terms of trade, debt, governance and conflict, geography (landlocked countries, disease), and access to education, technology and capital.',
  ], 'agg-hdi', 'GDP counts money; HDI adds health and education.',
  ['The HDI combines:', ['life expectancy, education and income', 'GDP and population only', 'rainfall and soils', 'exports and imports'], 'Introduced in 1990.'],
  [['Human Development Index', 'A composite measure of health, education and income.'], ['Gini coefficient', 'A measure of income inequality from 0 (equal) to 1 (unequal).'], ['Terms of trade', 'The ratio of export prices to import prices.']],
  [
    { q: 'Why is the HDI a better measure of development than GDP per capita alone?', steps: ['Breadth: **it adds health and education to income.**', 'Comparison: **countries with similar GDP can differ widely in HDI.**', 'Limits: **it still ignores inequality, freedom and the environment.**', 'Judgement: **better, but best used with other indicators.**'] },
  ]),

  L('agg-dev-2', 'agg-u6-development', '16.2', 'Emerging economies and poverty reduction', 17, ['Human'], [
    '**Emerging economies** have grown rapidly through industrialisation, exports and investment. The **BRICS** (Brazil, Russia, India, China, joined by South Africa in 2010) began meeting in 2009 to coordinate their influence; the group expanded in 2024. China’s growth lifted hundreds of millions out of poverty and made it Africa’s largest trading partner.',
    'Development strategies:\n- **top-down**: large state or donor projects (dams, highways, industrial zones); fast but may ignore local needs\n- **bottom-up**: community projects (wells, schools, cooperatives, microcredit); suited to local needs but small-scale\n- **aid**: bilateral and multilateral, emergency and long-term; can help or create dependence\n- **trade and investment**: export growth, foreign direct investment, regional integration\n- **debt relief** (the HIPC initiative, from which Cameroon benefited in 2006).',
    'The **Millennium Development Goals** (2000 to 2015) were followed by the **Sustainable Development Goals** (2015 to 2030): 17 goals including ending poverty and hunger, health, education, gender equality, clean water, energy and climate action.',
    'Cameroon’s **SND30** aims to make Cameroon an emerging country, combining infrastructure, industry, human capital and governance.',
  ], 'agg-dev-strategies', 'Top-down builds big; bottom-up reaches people; both are needed.',
  ['A bottom-up development project is one that:', ['is planned with and run by local communities', 'is run only by governments in the capital', 'always involves large dams', 'never uses money'], 'Wells, schools, cooperatives.'],
  [['Emerging economy', 'A country moving rapidly towards higher incomes through industrial growth.'], ['Microcredit', 'Small loans to poor people for small businesses.'], ['Foreign direct investment', 'Investment by a company in productive activities in another country.']],
  [
    { q: 'Compare top-down and bottom-up approaches to rural development in Cameroon.', steps: ['Top-down: **dams, roads and agro-industry; large impact but costly, with local costs.**', 'Bottom-up: **wells, cooperatives, microcredit; cheap and locally owned, but limited in scale.**', 'Combination: **national roads and power with community projects multiply benefits.**', 'Judgement: **the two work best together.**'] },
  ]),

  // ---------- 17. Charts and sketches in essays ----------
  L('agg-methods-1', 'agg-u6-methods', '17.1', 'Choosing and drawing maps and charts for essays', 17, ['Statistics'], [
    'Match the method to the data:\n- **choropleth map**: values for areas (population density by region), shaded darker for higher values; use rates, not totals\n- **proportional symbols**: totals at points (city populations, port traffic), with symbol area proportional to the value\n- **flow-line map**: movements (migration, trade), with line width proportional to volume\n- **isoline map**: continuous values (rainfall, temperature)\n- **dot map**: distribution (each dot a fixed number)\n- **dispersion graph**: the spread of values in a set\n- **climate graph**: temperature line and rainfall bars together.',
    'For quick essay sketches: a framed outline of Cameroon, a north arrow, regions shaded or hatched, key towns, rivers and the main relief units, with annotations explaining the pattern. Practise until each takes under five minutes.',
    'Always: a title, a key, units, a source if data are quoted, and a sentence in the text interpreting the figure.',
    'Avoid: decorative drawings without labels, totals on choropleth maps, and charts that repeat what the text already says without adding evidence.',
  ], 'agg-essay-chart', 'Areas: choropleth. Points: proportional symbols. Movement: flow lines.',
  ['To show population density by region on a map, use a:', ['choropleth map', 'flow-line map', 'dispersion graph', 'proportional circle at each region'], 'Shading by rate for each area.'],
  [['Choropleth map', 'A map shading areas according to their values.'], ['Flow-line map', 'A map showing movements with lines proportional to volume.'], ['Dot map', 'A map showing distribution with dots of fixed value.']],
  [
    { q: 'Choose figures for an essay on migration to Douala.', steps: ['Flow-line map: **migration from each region, width by number of migrants.**', 'Bar chart: **reasons given by migrants (jobs, schooling, family).**', 'Sketch: **Douala’s informal settlements on flood-prone land.**', 'Interpretation: **one sentence per figure, linked to the argument.**'] },
  ]),

  L('agg-methods-2', 'agg-u6-methods', '17.2', 'Location quotients, the interquartile range and using statistics', 17, ['Statistics'], [
    'The **location quotient (LQ)** shows whether an activity is concentrated in a region:\n\n**LQ = (workers in the activity in the region ÷ all workers in the region) ÷ (workers in the activity in the country ÷ all workers in the country)**\n\nLQ above 1: more concentrated than the national average; below 1: less; about 1: proportional.',
    'The **interquartile range (IQR)**: put the values in order; the **median** is the middle value; the **upper quartile** is the median of the upper half, the **lower quartile** the median of the lower half; IQR = upper quartile − lower quartile. It measures spread while ignoring extremes; a dispersion graph shows it visually.',
    'Other tools: the **mean** and **standard deviation**, **percentage change** ((new − old) ÷ old × 100), **index numbers**, and **Spearman’s rank** for relationships.',
    'In essays: quote figures with units, dates and sources; round sensibly; compare (higher than, twice as much as); and explain what the figure shows about the question.',
  ], 'agg-location-quotient', 'LQ above 1 means concentration; IQR measures the middle half.',
  ['A region has 30 per cent of its workers in farming; nationally the figure is 15 per cent. The LQ for farming is:', ['2.0', '0.5', '15', '45'], '30 ÷ 15 = 2.0.'],
  [['Location quotient', 'A ratio comparing a region’s share of an activity with the national share.'], ['Quartile', 'A value dividing ordered data into quarters.'], ['Percentage change', 'The change divided by the original value, times 100.']],
  [
    { q: 'Find the median and IQR of these daily rainfall totals (mm): 2, 5, 7, 9, 12, 15, 20, 26, 40.', steps: ['Median: **9 values, so the 5th: 12 mm.**', 'Lower half: **2, 5, 7, 9; lower quartile = (5 + 7) ÷ 2 = 6 mm.**', 'Upper half: **15, 20, 26, 40; upper quartile = (20 + 26) ÷ 2 = 23 mm.**', 'IQR: **23 − 6 = 17 mm.**'] },
  ]),

  // ---------- 18. GCE drills ----------
  L('agg-drills-1', 'agg-u6-drills', '18.1', 'Paper 1 marathon and the Paper 2 mapwork clinic', 16, ['MCQ'], [
    'Paper 1 rewards fast, precise recall across the syllabus. Drill in timed sets:\n- **location models**: von Thünen (1826, rings, rent), Weber (1909, material index), Christaller (1933, threshold, range, K = 3, 4, 7), Burgess (1925), Hoyt (1939), Harris and Ullman (1945)\n- **physical laws and processes**: lapse rate 6.5 °C per km, Coriolis deflection, the three-cell model, hydrograph terms, weathering and soil processes\n- **population**: DTM stages, Malthus (1798), Boserup (1965)\n- **Cameroon**: relief units, climatic domains, basins and dams, agro-industries and their crops, the 2005 census, ports and the railway.',
    'Technique: read the stem carefully, predict the answer, then check the options; eliminate options that are wrong in place, date or process; mark hard items and return; never leave an item blank.',
    'Paper 2 Section A clinic: practise cross-sections, gradients, vertical exaggeration, drainage density, stream order, relief and drainage descriptions, Spearman’s rank, location quotients and the interquartile range, always showing working and units.',
    'Keep a formula card: gradient, VE, drainage density, rs = 1 − 6Σd² ÷ (n³ − n), LQ, IQR, percentage change, natural increase.',
  ], 'agg-final-term', 'Models with dates, processes with numbers, Cameroon with names.',
  ['Christaller’s central place theory was published in:', ['1933', '1826', '1909', '1925'], 'Von Thünen 1826, Weber 1909, Burgess 1925.'],
  [['Formula card', 'A summary sheet of the formulas needed in the examination.'], ['Distractor', 'A wrong option designed to look correct.']],
  [
    { q: 'Answer by elimination: "The aluminium smelter of Cameroon is at: A Garoua B Edéa C Kribi D Maroua."', steps: ['Garoua: **a northern town with textiles, not aluminium.**', 'Kribi: **port and gas power, no smelter.**', 'Maroua: **far north, no heavy industry.**', '**Answer B, Edéa, on the Sanaga.**'] },
  ]),

  L('agg-drills-2', 'agg-u6-drills', '18.2', 'The mock, remediation and fast annotated sketches', 16, ['Method'], [
    '**The mock**: sit Papers 1, 2 and 3 under GCE conditions and timings (1½, 3 and 3¾ hours), with no notes, and keep to a time plan for each question.',
    '**Remediation**: after marking, list errors by type (misread questions, missing working, descriptive answers, no examples, unlabelled sketches, poor timing), fix the most frequent first and rewrite one answer from each paper.',
    '**Fast sketches** to master for Paper 3 and Paper 2 essays:\n- the relief regions of Cameroon\n- the climatic domains and the January and July ITCZ\n- a rejuvenated valley with terraces and a knickpoint\n- folded structures: anticline, syncline, inverted relief\n- a storm hydrograph, labelled\n- von Thünen’s rings and an urban model applied to Douala.',
    'Examiners’ advice repeats: answer the question set; use named, located examples; explain processes; integrate and annotate diagrams; finish every question.',
  ], 'agg-mock-review', 'Mock, mark, fix, rewrite, sketch, repeat.',
  ['The most useful first step after the mock is to:', ['list your errors by type and fix the most frequent', 'start new topics', 'repeat the same mock immediately', 'stop drawing sketches'], 'Remediation targets real weaknesses.'],
  [['Remediation', 'Targeted work to correct identified weaknesses.'], ['Time plan', 'A schedule for how long to spend on each question.']],
  [
    { q: 'Plan a five-minute sketch of Cameroon’s relief regions.', steps: ['Frame: **outline of Cameroon with a north arrow.**', 'Regions: **coastal lowlands, southern plateau, western highlands, Adamawa, northern lowlands, Mandara.**', 'Labels: **Mount Cameroon, Mount Oku, the Sanaga, the Benue, Lake Chad.**', 'Annotations: **heights and one note per region on its character.**'] },
  ]),
];
