// A Level Geography lessons (0750), Upper Sixth, Term 1: the papers and
// what examiners reward, von Thünen and farming systems, Weber and industrial
// globalisation, world energy, and the physical geography of Cameroon
// (structure and relief, climate, drainage, soils and vegetation, hazards).

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

export const LESSONS_GU6A = [
  // ---------- 1. The papers ----------
  L('agg-exam-1', 'agg-u6-exam', '1.1', 'The three papers and the diagnostic review', 16, ['Method'], [
    'June 2026 timetable for Geography (0750): **Paper 1**, 1½ hours, multiple choice on the whole syllabus (Saturday 6 June, afternoon); **Paper 2**, 3 hours (Monday 8 June, morning), with compulsory **Section A** on practical mapwork and statistical techniques and essays on general physical geography; **Paper 3**, 3¾ hours (Monday 8 June, afternoon), on human geography and the comprehensive geography of Cameroon.',
    'The year begins with a diagnostic test of Lower Sixth mapwork: gradients, vertical exaggeration, cross-sections, drainage basins and the description of relief. Weak skills are corrected first, because Section A of Paper 2 is compulsory.',
    'The scheme sets two aims for the Upper Sixth: **eliminate descriptive writing** and **master annotated sketch diagrams** that cut across topics (a sketch of Cameroon’s relief regions supports essays on climate, population and agriculture alike).',
    'All theory closes by **week 22**; the third term is for drills, the mock and remediation. Plan revision in three blocks: physical systems (Lower Sixth), location models and global issues, and the geography of Cameroon.',
  ], 'agg-paper-plan', 'Section A of Paper 2 is compulsory: skills first, every week.',
  ['The paper that contains the comprehensive geography of Cameroon is:', ['Paper 3', 'Paper 1', 'Paper 2, Section A', 'none'], 'With human geography, 3¾ hours.'],
  [['Diagnostic test', 'A test at the start of a course to find strengths and weaknesses.'], ['Section A', 'The compulsory mapwork and statistics part of Paper 2.']],
  [
    { q: 'Rewrite as analysis: "The Far North is dry. People keep cattle."', steps: ['Cause: **the ITCZ reaches the Far North only briefly, so rainfall is low and unreliable.**', 'Effect on land use: **grassland suits grazing better than most crops.**', 'Adaptation: **herders move cattle seasonally (transhumance) to the yaérés of the Logone floodplain.**', '**Analytical version links climate, vegetation and human response.**'] },
  ]),

  L('agg-exam-2', 'agg-u6-exam', '1.2', 'Command words, case studies and integrated sketches', 16, ['Method'], [
    'Command words: **describe** (what, where, how much), **explain** or **account for** (why, how), **compare** (similarities and differences together), **assess**, **evaluate** or **examine the extent** (weigh and judge), **discuss** (consider different views and conclude).',
    'A **case study** must be specific: a named and located place, dates, figures and actors. "In the Far North" is weak; "around Maga and Yagoua, where SEMRY irrigates rice with water from the Logone" is strong.',
    'Integrated sketches: draw quickly with a ruler and pencil, give a title, a north arrow or orientation, a key, and **annotations** that explain. Refer to them in the text. Three or four practised sketches (Cameroon’s relief regions, climate zones, a storm hydrograph, an urban model) can be adapted to many questions.',
    'Structure an essay as: introduction (definitions and argument), developed paragraphs (point, explanation, evidence, link), and a conclusion that answers the question with a judgement.',
  ], 'agg-essay-structure', 'Name it, locate it, date it, measure it, sketch it.',
  ['Which is the stronger case-study statement?', ['"SEMRY irrigates rice near Yagoua and Maga with water from the Logone."', '"Farming happens in the north."', '"Rice is grown somewhere in Cameroon."', '"Farmers work hard."'], 'Named, located and specific.'],
  [['Case study', 'A detailed, located example used as evidence.'], ['Orientation', 'The direction a map or sketch faces, shown by a north arrow.']],
  [
    { q: 'Plan the paragraphs for: "Assess the influence of relief on population distribution in Cameroon."', steps: ['Introduction: **define relief and distribution; argue relief matters but is not alone.**', 'Highlands: **dense populations on cool, fertile volcanic highlands of the West and North-West.**', 'Plateaus and forest: **sparse population in the East, where forest and poor access matter more than relief.**', 'Lowlands: **dense coastal city of Douala (trade) and the Far North plains (farming).**', 'Conclusion: **relief, soils, climate, history and economic activity act together; judgement stated.**'] },
  ]),

  // ---------- 2. Agricultural location ----------
  L('agg-agric-1', 'agg-u6-agriculture', '2.1', 'Von Thünen’s model of agricultural land use', 18, ['Human'], [
    'Johann Heinrich von Thünen, a German landowner, published *The Isolated State* in **1826**. He asked why farmland is used differently at different distances from a market town.',
    'Assumptions: an **isolated state** with one central market town; a flat, uniform plain of equal fertility; one form of transport, with costs proportional to distance; farmers who seek maximum profit and have equal knowledge.',
    '**Locational rent** (economic rent) is the profit per unit of land: **LR = Y(m − c) − Ytd**, where Y is yield per unit of land, m the market price per unit, c the production cost per unit, t the transport cost per unit per km and d the distance from the market. Each land use has a rent line that falls with distance; the steeper the line (heavy, bulky or perishable products), the closer the use lies to the market. Where one line falls below another, land use changes.',
    'The resulting rings (outwards): **intensive farming** (market gardening, dairying), **forestry** (wood for fuel and building was bulky), **crop rotation** systems, **extensive arable** and **ranching**, then wilderness. Modern adjustments: a navigable river stretches the rings along its course; a second market creates its own rings; refrigeration, roads and subsidies weaken the effect of distance, though zones of intensive farming still surround cities, including Yaoundé and Douala.',
  ], 'agg-von-thunen', 'The steeper the rent line, the nearer the market.',
  ['In LR = Y(m − c) − Ytd, the term Ytd represents:', ['total transport cost per unit of land', 'the market price', 'production cost', 'the yield only'], 'Yield × transport rate × distance.'],
  [['Locational rent', 'The profit per unit of land after production and transport costs.'], ['Isolated state', 'Von Thünen’s imaginary region with one market and no outside trade.'], ['Rent gradient', 'The rate at which locational rent falls with distance.']],
  [
    { q: 'Tomatoes: Y = 20 t/ha, m = 300,000 FCFA/t, c = 150,000 FCFA/t, t = 5,000 FCFA per t per km. Find the locational rent at 10 km and the distance at which it reaches zero.', steps: ['Revenue minus cost: **20 × (300,000 − 150,000) = 3,000,000 FCFA/ha.**', 'Transport at 10 km: **20 × 5,000 × 10 = 1,000,000 FCFA/ha.**', 'LR at 10 km: **3,000,000 − 1,000,000 = 2,000,000 FCFA/ha.**', 'Zero rent: **3,000,000 ÷ (20 × 5,000) = 30 km.**'] },
  ]),

  L('agg-agric-2', 'agg-u6-agriculture', '2.2', 'Intensive and extensive farming systems', 17, ['Human'], [
    'Farming systems are classified by **inputs** (labour, capital, land), **outputs** (subsistence or commercial) and **intensity**. **Intensive** farming uses much labour or capital per hectare and gives high yields per hectare; **extensive** farming uses little input over large areas and gives low yields per hectare but often high output per worker.',
    'Examples:\n- **intensive subsistence**: wet rice in the monsoon lands of Asia, with terraces, irrigation and family labour\n- **intensive commercial**: market gardening, greenhouse horticulture (the Netherlands), dairying\n- **extensive commercial**: wheat on the prairies and steppes, cattle ranching in Argentina and on the Adamawa\n- **extensive subsistence**: shifting cultivation and nomadic herding\n- **plantation** agriculture: large estates growing one tree crop for export (CDC palms and rubber).',
    'Shifting cultivation (slash-and-burn, with long fallows) suits forest soils when population is low; as population grows, fallows shorten and the system becomes unsustainable unless it intensifies.',
    'Factors affecting farming: physical (climate, soils, relief, water), economic (markets, transport, capital, prices), political (land tenure, subsidies, cooperatives) and social (tradition, labour, gender roles; in Cameroon women grow most food crops).',
  ], 'agg-farming-systems', 'Intensity is input per hectare, not farm size.',
  ['Cattle ranching on the Adamawa plateau is an example of:', ['extensive commercial farming', 'intensive subsistence farming', 'market gardening', 'plantation agriculture'], 'Low inputs per hectare over large areas.'],
  [['Intensive farming', 'Farming with high inputs per unit of land.'], ['Extensive farming', 'Farming with low inputs per unit of land.'], ['Shifting cultivation', 'Clearing and farming a plot, then leaving it to fallow and moving on.']],
  [
    { q: 'Explain why shifting cultivation breaks down as population grows.', steps: ['Original system: **long fallows let forest and soil fertility recover.**', 'Pressure: **more people need more land, so fallows shorten.**', 'Effect: **soil fertility does not recover; yields fall and erosion grows.**', 'Response: **intensify (manure, rotations, agroforestry) or migrate, as Boserup predicted.**'] },
  ]),

  // ---------- 3. Industrial location ----------
  L('agg-industry-1', 'agg-u6-industry', '3.1', 'Weber’s least-cost theory of industrial location', 18, ['Human'], [
    'Alfred Weber (1909) argued that a firm locates where its **total costs** are lowest, above all **transport costs**. Assumptions: a uniform plain, fixed locations of raw materials and market, transport costs proportional to weight and distance, unlimited labour at fixed points, and perfect competition.',
    'Materials: **ubiquitous** materials are available everywhere (water, air); **localised** materials are found in particular places. **Pure** materials keep their weight in the product; **gross** materials lose weight in processing (sugar cane, ore).',
    'The **material index** = weight of localised materials ÷ weight of the finished product. Above 1: **weight-losing**, locate near the materials (sugar mills at Mbandjock, cement near limestone). Below 1: **weight-gaining**, locate near the market (breweries and soft drinks in Douala and Yaoundé use ubiquitous water). In the **locational triangle** (two materials and one market), the least-cost point is pulled towards the heaviest corner.',
    'Deviations: **isodapanes** (lines of equal extra transport cost around the least-cost point) show whether moving to cheap **labour** or to an **agglomeration** of other firms saves more than the extra transport. Criticisms: transport costs have fallen; governments, technology, energy and markets now matter more; many industries are **footloose**. The theory still explains heavy, material-oriented industry well.',
  ], 'agg-weber', 'Material index above 1: go to the materials. Below 1: go to the market.',
  ['A sugar mill is usually located near the cane fields because:', ['cane loses much weight in processing, so the material index is high', 'sugar is perishable', 'the market is in the fields', 'water is localised'], 'Transport the lighter product, not the heavy cane.'],
  [['Material index', 'Weight of localised materials divided by the weight of the product.'], ['Isodapane', 'A line of equal additional transport cost around the least-cost point.'], ['Footloose industry', 'An industry not tied to materials or markets.']],
  [
    { q: 'A factory uses 3 tonnes of ore to make 1 tonne of metal. Find the material index and the likely location.', steps: ['Material index: **3 ÷ 1 = 3.**', 'Type: **weight-losing (index above 1).**', 'Location: **near the ore, to avoid carrying waste.**', 'Exception: **cheap power elsewhere may outweigh this, as for aluminium at Edéa.**'] },
  ]),

  L('agg-industry-2', 'agg-u6-industry', '3.2', 'Globalisation, multinationals and export processing zones', 17, ['Human'], [
    'Since the 1970s manufacturing has shifted from the old industrial regions of Europe and North America to East and South Asia and, more slowly, to parts of Latin America and Africa: the **global shift**. Causes: lower labour costs, falling transport and communication costs (containers, the internet), trade liberalisation, and host-government incentives.',
    '**Multinational (transnational) corporations** operate in many countries. They bring investment, jobs, technology and exports, but may pay low wages, move profits abroad, compete with local firms and leave when conditions change. Their activities form **global value chains**: design in one country, components in others, assembly in another.',
    '**Offshoring** moves production abroad; **outsourcing** contracts it to other firms. **Export processing zones (EPZs)** and free zones offer tax holidays, duty-free imports of inputs and simplified procedures to firms that export. Cameroon created a free zone regime in 1990; such zones elsewhere (China’s special economic zones, Mauritius) helped industrialisation.',
    'New patterns: **deindustrialisation** in old regions, the rise of **newly industrialised countries**, reshoring of some production, and the growth of services. For Africa, the challenge is to move from exporting raw materials to processing them at home.',
  ], 'agg-globalisation', 'Cheap labour, cheap transport and open trade moved factories east.',
  ['An export processing zone offers firms:', ['tax and customs advantages if they produce for export', 'a ban on imports of inputs', 'higher wages by law', 'guaranteed local sales'], 'To attract export-oriented investment.'],
  [['Global shift', 'The movement of manufacturing from old industrial countries to newly industrialising ones.'], ['Value chain', 'The stages through which a product gains value from design to sale.'], ['Deindustrialisation', 'The decline of manufacturing in a region.']],
  [
    { q: 'Assess the benefits and costs of a multinational opening a factory in Douala.', steps: ['Benefits: **jobs, skills, tax revenue, exports and demand for local suppliers.**', 'Costs: **low wages, profits sent abroad, possible pollution, competition with local firms.**', 'Conditions: **benefits rise if local firms supply inputs and workers gain skills.**', 'Judgement: **positive if well regulated and linked to the local economy.**'] },
  ]),

  // ---------- 4. Energy ----------
  L('agg-energy-1', 'agg-u6-energy', '4.1', 'World energy resources and the energy crisis', 17, ['Human'], [
    '**Non-renewable** sources: **coal**, **oil**, **natural gas** (fossil fuels) and **uranium** for nuclear power. **Renewable** sources: **hydropower**, **solar**, **wind**, **biomass**, **geothermal**, tidal and wave energy. Fossil fuels still supply most of the world’s primary energy.',
    '**Peak oil**: the geologist M. King Hubbert (1956) predicted that oil production in a region rises, peaks and declines as reserves are used. New technology (deep-water drilling, fracking) has delayed the global peak, but reserves are finite and unevenly distributed, which links energy to geopolitics.',
    'The **energy crisis** has several faces: price shocks (1973, 1979 and after 2022), insecurity of supply, **energy poverty** (hundreds of millions without electricity, many in sub-Saharan Africa), and the climate effect of burning fossil fuels.',
    'In Cameroon, most household energy comes from **fuelwood and charcoal**; electricity comes mainly from **hydropower** on the Sanaga, supplemented by thermal and gas plants (the Kribi gas power station). Access is high in cities and low in rural areas.',
  ], 'agg-energy-mix', 'Finite fossil fuels, growing renewables, and too many people with neither.',
  ['Most household energy in rural Cameroon comes from:', ['fuelwood and charcoal', 'nuclear power', 'coal', 'geothermal energy'], 'Biomass.'],
  [['Primary energy', 'Energy in its natural form before conversion (coal, oil, sunlight).'], ['Energy poverty', 'Lack of access to modern energy services.'], ['Peak oil', 'The point of maximum oil production, after which output declines.']],
  [
    { q: 'Explain why energy poverty is high in rural sub-Saharan Africa.', steps: ['Cost: **extending grids to scattered villages is expensive.**', 'Supply: **generation is limited and often unreliable.**', 'Income: **households cannot afford connections or fuel.**', 'Result: **dependence on fuelwood, with health and deforestation costs.**'] },
  ]),

  L('agg-energy-2', 'agg-u6-energy', '4.2', 'Renewables, environmental costs and sustainable energy', 17, ['Human'], [
    'Environmental costs of fossil fuels: **carbon dioxide** and climate change; air pollution (sulphur dioxide, particulates) and acid rain; oil spills and gas flaring (the Niger Delta); land damage from coal mining. Nuclear power is low-carbon but raises waste and safety issues.',
    'Renewables:\n- **hydropower**: cheap and reliable once built, but dams displace people, flood forest and farmland, trap sediment and change rivers\n- **solar**: abundant in the tropics and falling in cost, ideal for off-grid villages and mini-grids, but intermittent\n- **wind**: limited to windy coasts and uplands\n- **biomass**: renewable only if replanted; improved stoves cut wood use and smoke.',
    'A **sustainable energy framework** combines: diversifying the energy mix, efficiency, improved cookstoves and reforestation, mini-grids and solar home systems for rural areas, regional power pools, and pricing that covers costs while protecting the poor.',
    '**Sustainable development**, defined by the Brundtland Report (1987), meets present needs without compromising the ability of future generations to meet theirs. For energy this means access for all now, without destroying the climate and forests later.',
  ], 'agg-energy-impacts', 'Every source has a cost; sustainability balances access, price and environment.',
  ['A main disadvantage of solar power is that it:', ['is intermittent and needs storage or backup', 'produces carbon dioxide', 'needs coal to start', 'cannot be used in villages'], 'No sun at night or under heavy cloud.'],
  [['Mini-grid', 'A small electricity network serving a village or town, often solar-powered.'], ['Gas flaring', 'Burning off natural gas at oil wells.'], ['Energy mix', 'The combination of sources used to supply energy.']],
  [
    { q: 'Evaluate solar mini-grids as a way to electrify villages in northern Cameroon.', steps: ['Strengths: **strong sunshine, no grid needed, falling panel costs, quick to install.**', 'Weaknesses: **battery costs, maintenance skills and theft.**', 'Conditions: **community management and affordable tariffs.**', 'Judgement: **the most practical option for remote northern villages, alongside grid extension to towns.**'] },
  ]),

  // ---------- 5. Cameroon: structure and relief ----------
  L('agg-cmrrelief-1', 'agg-u6-cmr-relief', '5.1', 'The geological structure of Cameroon', 18, ['Cameroon'], [
    'Most of Cameroon is built on the **Precambrian basement complex**: ancient crystalline rocks (granites, gneisses, schists, migmatites), more than 500 million years old. The far south belongs to the edge of the **Congo craton**, some of the oldest rock in Africa; the centre and north belong to the younger Pan-African mobile belt.',
    '**Sedimentary basins** lie on top of the basement: the **Douala** and **Kribi-Campo** coastal basins and the **Rio del Rey** basin (with oil and gas), the **Mamfe** basin, the **Benue** (Garoua) trough of Cretaceous sandstones, and the young sediments of the **Lake Chad basin**.',
    'The **Cameroon Volcanic Line** runs about 1,600 km south-west to north-east, from the islands of the Gulf of Guinea (Bioko, São Tomé and others) through **Mount Cameroon**, Manengouba, the Bamboutos, Mount Oku and the Mbam, to the Adamawa plateau. It is a rare line of volcanoes that crosses from ocean to continent; its activity has continued for tens of millions of years to the present.',
    'Granite intrusions form the **Mandara mountains** and many inselbergs in the north; deep weathering of the basement under hot, humid climates has produced thick regolith in the south.',
  ], 'agg-cmr-geology', 'Old basement, sediments on top, and a volcanic line from the sea to the Adamawa.',
  ['The oil of Cameroon is found in:', ['the sedimentary basins of the coast, such as Rio del Rey', 'the Precambrian granites', 'the Mandara mountains', 'the volcanic peaks'], 'Oil forms in sedimentary rocks.'],
  [['Basement complex', 'Ancient crystalline rocks underlying most of a region.'], ['Craton', 'An old, stable part of a continent.'], ['Sedimentary basin', 'A depression filled with layers of sediment.']],
  [
    { q: 'Explain why the Cameroon Volcanic Line is geologically unusual.', steps: ['Location: **it lies within a plate, not on a plate boundary.**', 'Extent: **it crosses the ocean-continent boundary, with islands and mainland volcanoes in one line.**', 'Age: **activity spans tens of millions of years with no steady age progression, unlike a simple hot-spot chain.**', 'Explanations: **a line of crustal weakness reactivated by mantle upwelling, still debated.**'] },
  ]),

  L('agg-cmrrelief-2', 'agg-u6-cmr-relief', '5.2', 'The relief regions of Cameroon', 18, ['Cameroon'], [
    '**Coastal lowlands**: below about 200 m, on sediments around Douala, the Rio del Rey and Kribi; mangrove swamps, estuaries (the Wouri) and beaches.',
    '**South Cameroon plateau**: a vast, gently undulating surface at about 600 to 900 m on the basement, with forest, convex hills and inselbergs; Yaoundé lies on it. Rivers such as the Nyong and Ntem cross it in wide valleys with rapids.',
    '**Western highlands**: volcanic massifs and plateaus: Mount Cameroon (just over 4,000 m, the highest in West and Central Africa), Manengouba, the Bamboutos, the **Bamenda** and **Bamileke** plateaus, and Mount Oku (about 3,000 m). Cool, fertile and densely settled.',
    '**Adamawa plateau**: about 1,000 to 1,500 m, crossing the country from west to east and separating the forest south from the savanna north; a watershed feeding the Sanaga, the Benue and tributaries of the Logone.',
    '**Northern lowlands**: the **Benue depression** around Garoua (about 200 m) and the **Chad plain** (about 300 m), flat and seasonally flooded; the **Mandara mountains** (granite, up to about 1,500 m) rise along the Nigerian border.',
  ], ['agg-cmr-relief', 'cameroon-relief'], 'Coast, southern plateau, western highlands, Adamawa, northern lowlands with the Mandara.',
  ['Which relief region acts as Cameroon’s "water tower"?', ['the Adamawa plateau', 'the coastal lowlands', 'the Chad plain', 'the Benue depression'], 'Rivers flow from it to three basins.'],
  [['Plateau', 'An extensive area of high, fairly flat land.'], ['Massif', 'A compact group of mountains.'], ['Inselberg', 'An isolated steep hill rising from a plain.']],
  [
    { q: 'Describe the relief along a line from Douala to Kousseri.', steps: ['Coast: **lowlands below 200 m around Douala.**', 'Centre: **the southern plateau at 600 to 900 m around Yaoundé.**', 'Adamawa: **a rise to over 1,000 m near Ngaoundéré, with a steep northern edge.**', 'North: **descent to the Benue depression (about 200 m) and the flat Chad plain near Kousseri.**'] },
  ]),

  // ---------- 6. Cameroon: climate ----------
  L('agg-cmrclimate-1', 'agg-u6-cmr-climate', '6.1', 'The monsoon, the Harmattan and the ITCZ', 18, ['Cameroon'], [
    'Two air masses control Cameroon’s climate: **maritime tropical (mT)** air from the Gulf of Guinea, carried by the south-west **monsoon**, warm and humid; and **continental tropical (cT)** air from the Sahara, carried by the north-east **Harmattan**, hot by day, dry and dusty.',
    'They meet along the **Intertropical Convergence Zone (ITCZ)**, called the **FIT** (front intertropical) in French. Over West Africa the surface ITCZ follows the overhead sun with a lag: in **January** it lies far south, near the coast, and the Harmattan covers most of the country; in **July and August** it reaches about 20°N, so monsoon air covers all of Cameroon.',
    'Rain falls mainly some distance **south of the surface ITCZ**, where the moist monsoon layer is thick enough for deep convection; just behind the ITCZ the moist layer is too thin for much rain.',
    'Consequences: the length of the rainy season shortens northwards (almost all year in the south-west, only three or four months near Lake Chad); the Harmattan brings dust haze, low humidity and cool nights to the north from about November to February, and occasionally reaches the coast.',
  ], 'agg-cmr-itcz', 'The ITCZ moves north in July and south in January; rain follows the monsoon behind it.',
  ['In July the surface ITCZ over West Africa lies at about:', ['20°N', 'the equator', '5°S', '35°N'], 'Monsoon air then covers all of Cameroon.'],
  [['Monsoon', 'The seasonal south-west wind bringing moist Atlantic air.'], ['Harmattan', 'The dry, dusty north-east wind from the Sahara.'], ['FIT', 'Front intertropical, the French name for the ITCZ.']],
  [
    { q: 'Explain why Maroua has a shorter rainy season than Yaoundé.', steps: ['Latitude: **Maroua is about 10°N, Yaoundé about 4°N.**', 'ITCZ: **monsoon air reaches Maroua only in the northern summer.**', 'Duration: **Maroua lies under the moist air for about four months; Yaoundé for most of the year.**', 'Result: **one short rainy season in Maroua; two rainy seasons in Yaoundé.**'] },
  ]),

  L('agg-cmrclimate-2', 'agg-u6-cmr-climate', '6.2', 'The climatic domains of Cameroon', 18, ['Cameroon'], [
    '**Equatorial (Guinean) domain**, the southern plateau (Yaoundé, Ebolowa, Bertoua): about 1,500 to 2,000 mm a year in **two rainy seasons** (March to June, September to November) separated by two dry seasons; temperatures around 24 to 26 °C with a small annual range.',
    '**Cameroonian (coastal and mountain) domain**, the coast and western highlands: one very long rainy season with a short dry season; extreme totals where the monsoon meets the mountains: about **4,000 mm at Douala** and around **10,000 mm at Debundscha**, among the wettest places on Earth. The highlands are cooler (Bamenda and Dschang about 20 °C).',
    '**Sudanian domain**, the Adamawa and the North (Ngaoundéré, Garoua): **one rainy season** (about April or May to October) and a long dry season; about 1,000 to 1,500 mm; high temperatures in the lowlands (Garoua often above 35 °C before the rains).',
    '**Sahelian domain**, the Far North (Maroua, Kousseri): under about 800 mm, falling to around 600 mm near Lake Chad, in a short rainy season of three or four months; very high temperatures, a large daily range and frequent drought.',
  ], ['agg-cmr-climates', 'cameroon-climates'], 'Four domains: Guinean, Cameroonian, Sudanian, Sahelian.',
  ['Debundscha receives so much rain mainly because:', ['the moist monsoon is forced up the slopes of Mount Cameroon', 'it lies on the equator', 'the Harmattan brings rain', 'it is far from the sea'], 'Relief rain at its most extreme.'],
  [['Climatic domain', 'A region with a broadly similar climate.'], ['Relief rain', 'Rain caused when moist air is forced to rise over high ground.'], ['Annual range', 'The difference between the warmest and coldest months.']],
  [
    { q: 'Account for the decrease in rainfall from the coast to Lake Chad.', steps: ['Distance from the sea: **the monsoon loses moisture as it travels inland.**', 'ITCZ: **northern areas lie under monsoon air for fewer months.**', 'Relief: **the coast and western highlands force air to rise; the northern plains do not.**', 'Harmattan: **dry continental air dominates the north for most of the year.**'] },
  ]),

  // ---------- 7. Cameroon: drainage ----------
  L('agg-cmrdrain-1', 'agg-u6-cmr-drainage', '7.1', 'The four drainage basins and river regimes', 17, ['Cameroon'], [
    'Cameroon’s rivers drain to four basins:\n- **Atlantic** basin: the **Sanaga** (the longest river wholly in Cameroon, rising on the Adamawa and reaching the sea south of Douala), the Wouri, Mungo, Nyong and Ntem; short coastal rivers in the south-west\n- **Congo** basin: the Dja, Boumba, Kadéï and Sangha in the south-east\n- **Niger** basin: the **Benue** and its tributaries (the Faro, the Mayo Kebbi) in the north\n- **Chad** basin: the **Logone** and **Chari**, flowing to Lake Chad, an inland basin.',
    'The **Adamawa plateau** is the main watershed: from it rivers flow south to the Atlantic, north-west to the Niger and north-east to Lake Chad.',
    '**River regimes** follow the rainfall: in the south, two high-water periods matching the two rainy seasons, with the main flood in October and November; in the north, one high-water period in August and September and very low flows in the dry season, when many tributaries (mayos) dry up.',
    'Rivers on the southern plateau descend to the coast by **rapids and falls** (Edéa, Song Loulou on the Sanaga, the Lobé falls), which limits navigation but offers great hydroelectric potential.',
  ], ['agg-cmr-basins', 'drainage-basins'], 'Atlantic, Congo, Niger, Chad: the Adamawa divides them.',
  ['A river rising on the Adamawa and flowing to Lake Chad belongs to:', ['the Chad basin', 'the Atlantic basin', 'the Congo basin', 'the Niger basin'], 'The Logone system, for example.'],
  [['River regime', 'The pattern of a river’s discharge through the year.'], ['Mayo', 'A seasonal river of northern Cameroon.'], ['Inland basin', 'A basin with no outlet to the sea.']],
  [
    { q: 'Compare the regime of the Sanaga with that of a northern mayo.', steps: ['Sanaga: **flow all year, with two rises and a main flood around October.**', 'Mayo: **a single summer flood and a dry bed for months.**', 'Causes: **two rainy seasons and longer wet period in the south; one short rainy season and high evaporation in the north.**'] },
  ]),

  L('agg-cmrdrain-2', 'agg-u6-cmr-drainage', '7.2', 'Hydroelectric power and water resource management', 17, ['Cameroon'], [
    'Cameroon has one of the largest hydroelectric potentials in Africa, concentrated on the Sanaga, where the river falls from the plateau to the coast. Main schemes:\n- **Edéa** (from 1953) and **Song Loulou** (from 1981) on the Sanaga, supplying the southern grid and the **ALUCAM** aluminium smelter at Edéa\n- **Lagdo** (1982) on the Benue, with irrigation and fishing\n- **Lom Pangar** on the Lom, a large reservoir that stores water in the wet season and releases it in the dry season to keep the Sanaga stations working\n- newer stations such as **Memve’ele** on the Ntem and **Nachtigal** on the Sanaga.',
    'Water supply: towns draw on rivers and groundwater, but treatment and distribution lag behind growth; many households in Douala and Yaoundé rely on wells and boreholes, which are vulnerable to pollution.',
    'Challenges: seasonal low flows, silting of reservoirs, flooding downstream when dams release water (the Benue floods of 2012), displacement of people and loss of forest, conflicts over water in the north, and the **shrinking of Lake Chad** by about nine-tenths since the 1960s through drought and irrigation, shared with Chad, Niger and Nigeria through the **Lake Chad Basin Commission** (1964).',
    'Management: river-basin planning, regulation dams, reforestation of catchments, protection of springs and wells, and cooperation in shared basins.',
  ], 'agg-cmr-hydro', 'Huge potential, seasonal rivers: storage dams make the potential usable.',
  ['The main purpose of the Lom Pangar dam is to:', ['regulate the flow of the Sanaga in the dry season', 'irrigate the Sahel', 'supply water to Garoua', 'stop the Harmattan'], 'A storage reservoir for the stations downstream.'],
  [['Regulation dam', 'A dam that stores water to even out a river’s flow.'], ['Silting', 'The filling of a reservoir with sediment.'], ['Catchment', 'Another word for a drainage basin.']],
  [
    { q: 'Assess the costs and benefits of large dams in Cameroon.', steps: ['Benefits: **cheap renewable electricity, industry (ALUCAM), irrigation and fishing at Lagdo.**', 'Costs: **displacement, forest loss, sediment trapping, downstream floods on release.**', 'Management: **regulation and planning reduce costs.**', 'Judgement: **essential for development, if social and environmental costs are managed.**'] },
  ]),

  // ---------- 8. Cameroon: soils and vegetation ----------
  L('agg-cmrveg-1', 'agg-u6-cmr-vegetation', '8.1', 'The vegetation belts of Cameroon', 17, ['Cameroon'], [
    'Vegetation changes with rainfall from south to north and with altitude:\n- **mangroves** on muddy coasts and estuaries (the Wouri, Rio del Rey), salt-tolerant trees with stilt roots\n- **dense equatorial rainforest** in the South, East, Centre and Littoral: evergreen in the wettest areas, semi-deciduous towards its northern edge; very rich in species (sapelli, ayous, iroko)\n- the **forest-savanna mosaic** on the southern edge of the Adamawa and in the Centre, maintained by fire and farming\n- **Sudanian savanna**: woodland and tall grass on the Adamawa and in the North\n- **Sahelian steppe**: short grass, thorny acacias and bare ground in the Far North, with seasonally flooded grasslands (**yaérés**) along the Logone.',
    'With altitude, on Mount Cameroon and the western highlands: lowland forest, **montane forest** with tree ferns, then montane grassland near the summits. Much highland forest has been cleared for farms and grazing; the Kilum-Ijim forest around Mount Oku is one of the last large patches.',
    'Protected areas include the **Dja Faunal Reserve** (World Heritage Site, 1987), **Korup** (rainforest), **Waza** and **Bénoué** (savanna).',
    'The savanna is partly a human landscape: repeated burning and farming have pushed it into former forest margins.',
  ], 'agg-cmr-vegetation', 'Mangrove, forest, mosaic, savanna, steppe: and the mountains repeat the change vertically.',
  ['The yaérés of the Far North are:', ['seasonally flooded grasslands along the Logone', 'mountain forests', 'mangroves', 'sand dunes'], 'Important dry-season pastures.'],
  [['Mangrove', 'Salt-tolerant forest of tropical coasts and estuaries.'], ['Mosaic', 'A pattern of patches of forest and savanna.'], ['Montane forest', 'Forest of cool, high mountain slopes.']],
  [
    { q: 'Explain why the forest-savanna boundary in Cameroon is moving.', steps: ['Human pressure: **farming and burning push savanna into the forest edge.**', 'Protection: **where fire is controlled, forest can recolonise savanna.**', 'Climate: **drier years favour grass and fire.**', 'Result: **the boundary shifts with land use and climate, not rainfall alone.**'] },
  ]),

  L('agg-cmrveg-2', 'agg-u6-cmr-vegetation', '8.2', 'The soils of Cameroon and land degradation', 17, ['Cameroon'], [
    '**Ferrallitic soils** cover the humid south: deep, red or yellow, acid and leached, rich in iron and aluminium oxides and poor in nutrients; fertile only while the forest recycles litter.',
    '**Ferruginous (tropical) soils** with **laterite** crusts occur in the savanna of the Adamawa and the North; where crusts are exposed, farming is difficult.',
    '**Volcanic soils (andosols)** on Mount Cameroon and in the western highlands are young, dark and rich in minerals, supporting plantations (CDC) and dense farming populations.',
    '**Vertisols** ("black cotton soils") in the plains of the Far North are dark clays that swell when wet and crack when dry; good for sorghum (including dry-season muskwari sorghum) and cotton. **Hydromorphic** soils in floodplains and swamps are waterlogged and grey. Thin **lithosols** cover steep slopes and rocky hills.',
    '**Land degradation**: soil erosion on steep cultivated slopes, leaching after forest clearance, laterite exposure, and **desertification** in the Far North through drought, overgrazing, bush fires and fuelwood cutting. Responses include terracing, agroforestry, fallow management, tree planting ("Sahel Vert" programmes) and the **Great Green Wall** initiative.',
  ], 'agg-cmr-soils', 'Ferrallitic south, ferruginous north, volcanic west, vertisols in the Far North.',
  ['Vertisols are suited to dry-season muskwari sorghum because they:', ['store water in their clay after the rains', 'never dry out', 'are sandy and free-draining', 'are volcanic'], 'The crop is planted on the residual moisture.'],
  [['Andosol', 'A young, fertile soil formed on volcanic ash.'], ['Vertisol', 'A dark clay soil that swells when wet and cracks when dry.'], ['Desertification', 'Land degradation in drylands, leading to desert-like conditions.']],
  [
    { q: 'Explain why the western highlands are densely populated despite steep slopes.', steps: ['Soils: **fertile volcanic andosols.**', 'Climate: **cool, healthy, with reliable rainfall.**', 'Adaptation: **ridging and terracing reduce erosion on slopes.**', 'History: **long-established kingdoms and markets.**'] },
  ]),

  // ---------- 9. Cameroon: integration and hazards ----------
  L('agg-cmrhazard-1', 'agg-u6-cmr-hazards', '9.1', 'Climate, vegetation and soils as one system', 17, ['Cameroon'], [
    'Cameroon’s physical environment forms linked **ecosystems** in which climate, vegetation and soils depend on each other:\n- **humid south**: heavy rain and heat produce dense forest, rapid nutrient cycling and deeply weathered, leached ferrallitic soils\n- **Adamawa and North**: a long dry season gives savanna, fire, ferruginous soils and laterite crusts\n- **Far North**: low, unreliable rain gives steppe, vertisols on the clay plains and sandy soils elsewhere\n- **western highlands**: altitude gives cool montane conditions on fertile volcanic soils.',
    'Changes in one part spread through the system: clearing forest reduces evapotranspiration and litter, exposing soils to leaching and erosion; burning savanna removes cover and organic matter; drought weakens vegetation, increasing wind erosion.',
    'People are part of the system: farming systems match zones (root crops and cocoa in the south, maize and coffee in the highlands, cotton, sorghum and livestock in the north), and human pressure can push each zone towards degradation.',
    'A sketch section from the coast to Lake Chad, showing relief, rainfall, vegetation and soils together, is a powerful tool in Paper 3 essays.',
  ], 'agg-cmr-integration', 'Change the vegetation, and soil and microclimate change with it.',
  ['Clearing the rainforest tends to:', ['expose soils to leaching and erosion', 'increase litter on the ground', 'make soils more fertile for many years', 'raise rainfall at once'], 'The nutrient store is removed.'],
  [['Ecosystem', 'A community of organisms and its physical environment, interacting as a system.'], ['Microclimate', 'The climate of a small area, such as under a forest canopy.']],
  [
    { q: 'Explain how bush fires affect savanna soils in the North.', steps: ['Burning: **removes grass cover and litter.**', 'Exposure: **the first storms of the rainy season erode the bare soil.**', 'Nutrients: **some are released as ash, but many are lost in smoke and runoff.**', 'Long term: **organic matter falls and laterite crusts may be exposed.**'] },
  ]),

  L('agg-cmrhazard-2', 'agg-u6-cmr-hazards', '9.2', 'Natural hazards: floods, landslides, eruptions and lake gas', 18, ['Cameroon'], [
    '**Lake Nyos** (North-West region) is a crater lake in which volcanic carbon dioxide had accumulated in the deep water. On **21 August 1986** a sudden overturn released a huge cloud of carbon dioxide, which, being denser than air, flowed down the valleys and killed about **1,700 people** and thousands of cattle by suffocation. Two years earlier, on 15 August 1984, a smaller release at **Lake Monoun** killed **37** people. Since 2001 (Nyos) and 2003 (Monoun), **degassing pipes** draw deep water to the surface so the gas escapes gradually.',
    '**Floods**: in the Far North, heavy rains on flat clay plains and water released from upstream dams cause floods along the Logone and the Benue (severe in 2012); in Douala, intense rain, low land, blocked drains and building in valleys cause frequent urban floods.',
    '**Landslides**: on steep, rainy, deeply weathered slopes of the western highlands (the Bamboutos, Bamenda, Dschang), often where forest has been cleared and houses built on slopes (the Gouache landslide, Bafoussam, 2019).',
    '**Volcanic eruptions**: Mount Cameroon (most recently 1999 and 2000) with lava flows and earthquakes. Management in all cases combines **monitoring**, **hazard mapping**, **land-use control**, **early warning** and **public education**.',
  ], 'agg-cmr-hazards', 'Nyos: gas, not lava. Floods, landslides and eruptions need monitoring and planning.',
  ['The victims of the Lake Nyos disaster died because:', ['a dense cloud of carbon dioxide displaced the air they breathed', 'lava covered their villages', 'the lake flooded the valleys', 'an earthquake destroyed their homes'], 'Asphyxiation.'],
  [['Limnic eruption', 'A sudden release of dissolved gas from deep lake water.'], ['Degassing', 'Removing dissolved gas gradually from a lake through pipes.'], ['Hazard mapping', 'Mapping areas by the level of risk from a hazard.']],
  [
    { q: 'Assess the measures taken to reduce the risk at Lake Nyos.', steps: ['Degassing pipes: **remove gas faster than it accumulates; the main technical success.**', 'Monitoring: **sensors and alarms warn of rising gas levels.**', 'Weakness: **the natural dam at the lake outlet is fragile and could fail, flooding valleys downstream.**', 'Judgement: **risk is much reduced but not removed; monitoring and dam reinforcement must continue.**'] },
  ]),
];
