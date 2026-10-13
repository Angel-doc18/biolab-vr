// Geography lessons for Form 5, the GCE Ordinary Level year, following the
// 2026/2027 national harmonised scheme of work: world farming systems and
// industry, the regional geography of Cameroon, map work and GCE revision.
// Original text written for this app. **double asterisks** mark key terms.
// `examples` are worked examples.

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

export const LESSONS_5 = [
  // ---------- World agriculture ----------
  L('ge-subsistence-f5', 'ge-f5-agriculture', '1.1', 'Subsistence farming: shifting cultivation and wet rice', 12, ['Agriculture'], [
    '**Subsistence farming** produces food mainly for the farmer’s own family; only a small surplus, if any, is sold. **Commercial farming** produces crops and animals for sale.',
    '**Shifting cultivation** (and its settled form, **bush fallowing**) is practised in the tropical forests of Africa, South America and South-East Asia, including southern Cameroon:\n- The farmer clears a patch of forest, burns the cut vegetation (the ash adds nutrients) and plants with simple tools such as the hoe and cutlass.\n- Several crops are grown together (**mixed cropping**): cassava, plantains, cocoyams, maize and groundnuts.\n- After two or three years the soil loses its fertility, so the farmer moves to a new patch and leaves the old one to recover under bush (**fallow**).\nIt works where few people share much land, but as population grows the fallow becomes too short, the soil wears out and forest is destroyed.',
    '**Intensive subsistence rice cultivation** is practised in **Monsoon Asia**: the deltas and valleys of India, Bangladesh, southern China, Vietnam and the islands of Indonesia such as Java. Here many people live on small farms, so every piece of land is used intensively:\n- Rice is sown in a **nursery**, then **transplanted** by hand into flooded fields called **paddies**, enclosed by low earth walls (**bunds**).\n- The monsoon rains, rivers and irrigation keep the paddies flooded; on hillsides **terraces** create flat fields.\n- Water buffalo pull the ploughs, and whole families work in the fields.\n- With warmth all year and plenty of water, **two or even three crops** a year are possible.\nYields per hectare are very high, but yields per worker are low and the work is very hard.',
  ], 'paddy-steps', 'Shifting cultivation: **much land, little labour**. Wet rice: **little land, much labour**.',
  ['Why are rice fields terraced on Asian hillsides?', ['To make flat fields that can hold water', 'To let water run off quickly', 'To keep animals out', 'For decoration'], 'Paddies must stay flooded.'],
  [['Subsistence farming', 'Farming mainly to feed the farmer’s own family.'], ['Shifting cultivation', 'Farming a cleared patch for a few years, then moving on.'], ['Paddy', 'A flooded field in which rice is grown.'], ['Fallow', 'Land left unplanted so that it can recover its fertility.']],
  [
    { q: 'Give two advantages and two disadvantages of shifting cultivation.', steps: ['**Advantages:** it needs little money or equipment; the long fallow lets the forest and soil recover when population is low.', '**Disadvantages:** yields are low; when population grows the fallow becomes too short, the soil is exhausted and the forest is destroyed.'] },
  ]),

  L('ge-commercial-f5', 'ge-f5-agriculture', '1.2', 'Commercial farming: plantations and ranching', 11, ['Agriculture'], [
    '**Plantation agriculture** is large-scale farming of a single cash crop (**monoculture**) for export:\n- large estates, often owned by companies or the state\n- much **capital** for land clearing, machines, factories and roads\n- many **wage labourers**, sometimes housed on the estate\n- the crop is often **processed** on the estate, then exported through a nearby port\n- scientific methods: selected seeds, fertilisers and pest control.\nExamples are oil palm in Malaysia and Indonesia, rubber in Liberia, tea in Kenya and Sri Lanka, and in Cameroon the bananas, oil palm, rubber and tea of the **CDC**.',
    'Plantations bring jobs, export earnings, roads, schools and health centres, and high yields. But they depend on world prices for one crop, take land that local people could farm, may treat workers poorly and can cause deforestation and pollution from chemicals.',
    '**Extensive livestock ranching** rears cattle or sheep on very large areas of grassland with few workers, for meat, wool or hides sold in distant markets. Examples are the **Pampas** of Argentina, the grasslands of Australia and the Great Plains of the USA. Ranches use fences, wells, improved breeds, dips against ticks and veterinary care.',
    'In Cameroon, most cattle are kept by **pastoralists** (mainly Fulani and Mbororo herders) on the **Adamawa Plateau**, in the North and in the North-West, often moving with the seasons. There are also government and private ranches. Problems include **tsetse flies**, which carry sleeping sickness to cattle, poor dry-season pasture, cattle theft and conflicts between herders and farmers.',
  ], 'farming-systems', 'Plantation = **one crop, big estate, much capital, for export**.',
  ['Which is a disadvantage of plantation agriculture for a country?', ['Dependence on the world price of one crop', 'High yields', 'Jobs for workers', 'Roads built to the estates'], 'If the price falls, earnings fall.'],
  [['Plantation', 'A large estate growing one cash crop for export.'], ['Monoculture', 'Growing a single crop over a large area.'], ['Ranching', 'Rearing livestock on large areas of grassland.'], ['Pastoralist', 'A herder whose livelihood depends on livestock.']],
  null),

  // ---------- Industry ----------
  L('ge-industry-f5', 'ge-f5-industry', '2.1', 'Manufacturing industries and their location', 12, ['Industry'], [
    'Economic activities are grouped into:\n- **primary** activities, which take raw materials from nature: farming, fishing, forestry and mining\n- **secondary** activities, which **manufacture** goods: factories and building\n- **tertiary** activities, which provide **services**: transport, trade, banking, health, education and tourism.\n**Heavy industry** uses bulky raw materials and makes heavy goods (steel, aluminium, cement, ships); **light industry** makes small, light goods (clothes, food, electronics).',
    'Factors that decide where a factory is built:\n- **Raw materials:** industries whose raw materials are bulky, or lose weight in processing, locate near them (cement near limestone, sugar near the cane fields).\n- **Power:** industries that use much energy locate near cheap power.\n- **Labour:** skilled or cheap workers.\n- **Capital:** money to build and run the factory.\n- **Transport:** ports, railways and roads to bring in materials and send out goods.\n- **Market:** goods that are heavy, fragile or perishable (beer, soft drinks, bread) are made near the buyers.\n- **Government policy:** incentives, taxes and industrial zones.\n- Also **water supply** and **flat land**.',
    '**Case study: aluminium at Edéa.** The ALUCAM smelter was opened in the 1950s near the **Edéa** falls on the Sanaga, because smelting aluminium needs huge amounts of **cheap electricity**, supplied by the Edéa hydroelectric dam. The raw material, **alumina**, is imported through the port of Douala, close by. The metal is sold abroad and to local firms that roll it into sheets for roofing and utensils.',
    'Industry also causes **pollution**:\n- air pollution from smoke and gases, causing breathing illnesses and acid rain\n- water pollution from untreated waste\n- noise, and the dumping of solid waste.\nIt is controlled by laws and inspections, filters on chimneys, treating waste water, recycling and planning industrial zones away from homes.',
  ], 'industry-location', 'Heavy, weight-losing raw material → build **near the source**; heavy, perishable product → build **near the market**.',
  ['Why are breweries built in the big towns of Cameroon?', ['Beer is heavy and the buyers are there', 'Barley grows in towns', 'Towns have no water', 'It is cold in towns'], 'It costs less to transport the raw materials than the finished drink.'],
  [['Secondary activity', 'Manufacturing goods from raw materials.'], ['Heavy industry', 'Industry using bulky materials to make heavy goods.'], ['Industrial location', 'The choice of where to build a factory.'], ['Smelter', 'A plant that extracts metal from its ore or oxide by heating.']],
  [
    { q: 'Give three reasons why most of Cameroon’s factories are in Douala.', steps: ['**Port:** raw materials can be imported and goods exported cheaply.', '**Market:** it is the largest town, with many buyers and good links inland by road and rail.', '**Labour and services:** many workers, banks and electricity supply.'] },
  ]),

  // ---------- Cameroon: structure and relief ----------
  L('ge-cmrgeology-f5', 'ge-f5-cmrrelief', '3.1', 'Cameroon: position, size and geological structure', 10, ['Cameroon', 'Geology'], [
    'Cameroon lies in Central Africa, at the bend of the **Gulf of Guinea**, between about **2° and 13° north** of the Equator and **8° and 16° east**. It covers **475 442 km²**. Its neighbours are Nigeria to the west, Chad to the north-east, the Central African Republic to the east, and Congo, Gabon and Equatorial Guinea to the south. It has about 400 km of coastline. It is often called "**Africa in miniature**" because it has almost every kind of African landscape, climate and vegetation.',
    'Its rocks fall into three main groups:\n- The **Precambrian basement complex**, the oldest rocks, more than 600 million years old: granites, gneisses, schists and quartzites. They underlie about two-thirds of the country, including the Southern Plateau and much of the Adamawa.\n- **Sedimentary basins**, younger rocks laid down in seas, lakes and rivers: the **Douala** and **Rio del Rey** basins on the coast (where oil and gas are found), the **Mamfe** basin, the **Benue** trough around Garoua, and the **Chad** basin in the far north.\n- **Volcanic rocks** of the **Cameroon Volcanic Line**, mostly basalts, from the islands of the Gulf of Guinea through Mount Cameroon, Manengouba, the Bamboutos and Mount Oku towards the Adamawa and the Mandara area. Many are young, and Mount Cameroon is still active.',
    'The geology explains the resources: old basement rocks hold gold and bauxite; sedimentary rocks hold oil, gas and limestone; volcanic rocks weather into very fertile soils.',
  ], 'cameroon-relief', 'Basement (oldest, about two-thirds), sedimentary basins (**oil**), volcanic line (**fertile soils**).',
  ['Why is oil found near Cameroon’s coast and not on the Southern Plateau?', ['Oil forms in sedimentary basins, and the plateau is old basement rock', 'The plateau is too high', 'The coast is wetter', 'Oil only forms under the sea'], 'Oil forms from organic matter buried in sediments.'],
  [['Basement complex', 'Very old crystalline rocks underlying much of a country.'], ['Sedimentary basin', 'A low area where thick layers of sediment have built up.'], ['Cameroon Volcanic Line', 'The chain of volcanoes running from the Gulf of Guinea islands across Cameroon.']],
  null),

  L('ge-cmrrelief-f5', 'ge-f5-cmrrelief', '3.2', 'Cameroon: the relief regions', 12, ['Cameroon', 'Relief'], [
    '**The coastal lowlands** run along the Gulf of Guinea, mostly below 200 m, widest around Douala and narrowing to the south near Kribi and Campo. They are flat, often swampy, with mangroves at the river mouths.',
    '**Mount Cameroon** rises steeply from the sea near Limbe and Buea to about 4 100 m (4 095 m in most textbooks): the highest mountain in West and Central Africa, and an active volcano.',
    '**The Southern Plateau** covers the Centre, South and East at about 650 to 900 m. It is gently rolling land with rounded hills and occasional granite domes, drained by the Sanaga, Nyong and the rivers of the Congo basin.',
    '**The Western Highlands** (North-West and West regions) are volcanic mountains and plateaus mostly above 1 000 m: the Bamenda Highlands, the Bamboutos Mountains (about 2 740 m), Mount Manengouba and **Mount Oku** (3 011 m), with crater lakes and fertile soils. Their cool climate and rich soils support many people.',
    '**The Adamawa Plateau** crosses the middle of the country at about 1 100 m, with a steep edge to the north. Many rivers rise on it and flow to the Atlantic, the Niger and Lake Chad, so it is called the **water tower** of Cameroon. It is good cattle country.',
    '**The northern lowlands**: north of the Adamawa the land drops to the **Benue lowlands** around Garoua (about 200 to 300 m), then rises to the **Mandara Mountains** along the Nigerian border, with their volcanic peaks such as those at Rhumsiki, before falling to the flat **Chad plain** around Lake Chad, about 300 m above sea level.',
  ], 'cameroon-relief', 'South to north: **coast → Southern Plateau → Adamawa → Benue lowlands → Mandara → Chad plain**, with the **Western Highlands** and **Mount Cameroon** in the west.',
  ['Which relief region is called the water tower of Cameroon?', ['The Adamawa Plateau', 'The coastal lowlands', 'The Chad plain', 'The Benue lowlands'], 'Rivers flow from it in several directions.'],
  [['Relief region', 'An area with a similar height and shape of land.'], ['Water tower', 'Highland where many rivers rise.'], ['Plateau', 'A large area of high, fairly flat land.']],
  [
    { q: 'Describe the relief of Cameroon from the coast at Kribi to Lake Chad.', steps: ['From Kribi, the **coastal lowlands** below 200 m.', 'Inland, the rolling **Southern Plateau** at about 650 to 900 m.', 'The **Adamawa Plateau**, about 1 100 m, with a steep northern edge.', 'The low **Benue lowlands** around Garoua.', 'The **Mandara Mountains** to the west of Maroua, then the flat **Chad plain** down to Lake Chad.'] },
  ]),

  // ---------- Cameroon: climate, drainage, vegetation ----------
  L('ge-cmrclimate-f5', 'ge-f5-cmrclimate', '4.1', 'Cameroon: the factors and types of climate', 12, ['Cameroon', 'Climate'], [
    'Factors of Cameroon’s climate:\n- **Latitude:** from 2° to 13° north, so temperatures are high, but the north has a longer dry season.\n- **The movement of the rain belt** (the Intertropical Convergence Zone), which follows the overhead sun north and south during the year.\n- **The winds:** the moist **south-west monsoon** from the Atlantic brings rain; the dry, dusty **harmattan** blows from the Sahara in the dry season.\n- **Relief:** mountains cool the air (temperatures fall about 6 °C for every 1 000 m) and force moist air to rise, giving heavy **relief rain** on their windward slopes.\n- **Distance from the sea:** rainfall falls and the dry season lengthens towards the north.',
    'There are two climate domains, each with two types:\n- **Equatorial (coastal or Cameroon type):** hot and very wet, with one long rainy season and a short drier season, as at **Douala** (about 4 000 mm). At **Debundscha**, at the foot of Mount Cameroon, moist sea winds forced up the mountain give over 10 000 mm a year, one of the wettest places on Earth.\n- **Equatorial (southern or Guinea type):** hot and humid, with **two wet and two dry seasons**, about 1 500 to 2 000 mm, as at **Yaoundé** (about 1 600 mm).\n- **Tropical (Sudan type):** one wet and one dry season, 900 to 1 500 mm, as at **Ngaoundéré** and **Garoua**.\n- **Tropical (Sahel type):** a long dry season of seven months or more, under 900 mm, high temperatures over 40 °C before the rains, as at **Maroua** and **Kousseri**.',
    'The **Western Highlands** have a cooler **mountain climate** with heavy rain: Bamenda averages about 20 °C, much cooler than the lowlands.',
  ], 'cameroon-climates', 'Rainfall **decreases** and the dry season **lengthens** from the coast to Lake Chad.',
  ['Why is Bamenda cooler than Douala?', ['It is much higher above sea level', 'It is nearer the Equator', 'It is on the coast', 'It has no sun'], 'Temperature falls with height.'],
  [['Monsoon', 'A seasonal wind; in Cameroon the moist south-west wind from the Atlantic.'], ['Relief rain', 'Rain formed when moist air is forced to rise over mountains.'], ['Intertropical Convergence Zone', 'The belt of rising air and rain that follows the overhead sun.']],
  null),

  L('ge-cmrdrainage-f5', 'ge-f5-cmrclimate', '4.2', 'Cameroon: rivers and drainage basins', 10, ['Cameroon', 'Drainage'], [
    'Cameroon’s rivers flow into four **drainage basins**:\n- **The Atlantic basin**, the largest: the **Sanaga** (the longest river in Cameroon, about 920 km, rising on the Adamawa Plateau), the **Nyong**, the **Wouri**, the **Ntem**, the **Mungo** and the **Manyu** (Cross River).\n- **The Congo basin** in the south-east: the **Sangha**, **Dja**, **Boumba** and **Kadey**, flowing to the Congo River.\n- **The Niger basin** in the north: the **Benue** and its tributaries the **Faro** and **Mayo Kebbi**, flowing to the River Niger in Nigeria.\n- **The Chad basin** in the far north: the **Logone** and **Chari**, which end in **Lake Chad**, a lake with no outlet to the sea.',
    'The rivers have **regimes** that follow the rains: high water in the rainy season and low water in the dry season, especially in the north.',
    'Uses of the rivers: **hydroelectric power** (the Sanaga, Benue and Ntem), **irrigation** (rice on the Logone and at Ndop), **fishing**, **water supply** and **navigation**: the Benue to Garoua in the rainy season, and the Wouri at Douala.',
    'Problems: rapids and falls block navigation; floods damage farms and towns; the rivers carry silt that must be dredged from Douala’s port; and **Lake Chad has shrunk greatly since the 1960s** because of droughts and the use of its rivers for irrigation.',
  ], 'drainage-basins', 'Four basins: **Atlantic, Congo, Niger, Chad**. The Sanaga is the longest river.',
  ['The Benue flows into which basin?', ['The Niger basin', 'The Atlantic basin directly', 'The Congo basin', 'The Chad basin'], 'It joins the Niger in Nigeria, which then reaches the Atlantic.'],
  [['Drainage basin', 'The area drained by a river and its tributaries.'], ['River regime', 'The pattern of a river’s flow through the year.'], ['Tributary', 'A river that flows into a larger one.']],
  null),

  L('ge-cmrveg-f5', 'ge-f5-cmrclimate', '4.3', 'Cameroon: vegetation zones', 10, ['Cameroon', 'Vegetation'], [
    'Cameroon’s vegetation changes from south to north with the rainfall and the length of the dry season:\n- **Mangrove swamps** along the coast and in the estuaries, such as the Wouri estuary and the Rio del Rey: trees with stilt roots in salty, muddy water, important breeding grounds for fish.\n- **Dense evergreen rainforest** in the South, East and Littoral, and on the lower slopes of Mount Cameroon: tall trees in layers, with valuable hardwoods.\n- **Semi-deciduous forest** on its northern edge, in the Centre and East, where some trees shed their leaves in the dry season.\n- **Montane forest and grassland** in the Western Highlands and on Mount Cameroon, much of it cleared for farms and grazing.\n- **Guinea savanna** (wooded savanna) on the Adamawa Plateau: tall grass with many trees.\n- **Sudan savanna** in the North: shorter grass with scattered trees such as the shea and baobab.\n- **Sahel steppe** in the Far North: short grass, thorny shrubs and acacias, adapted to a long dry season.',
    'Human activities have changed the vegetation: farming, logging, grazing and bush fires have cleared forest, turned forest edges into savanna and pushed desert conditions south in the Far North.',
  ], 'vegetation-belts', 'South to north: **mangrove → rainforest → savanna → Sahel**, with montane vegetation in the west.',
  ['Which vegetation grows on the Adamawa Plateau?', ['Guinea (wooded) savanna', 'Mangrove', 'Sahel steppe', 'Dense rainforest'], 'Tall grass with many trees.'],
  [['Mangrove', 'Salt-tolerant trees growing on muddy coasts and estuaries.'], ['Semi-deciduous forest', 'Forest in which some trees shed their leaves in the dry season.'], ['Steppe', 'Short grassland with few trees, in dry areas.']],
  null),

  // ---------- Cameroon: population ----------
  L('ge-cmrpop-f5', 'ge-f5-cmrpopulation', '5.1', 'Cameroon: population size, structure and distribution', 11, ['Cameroon', 'Population'], [
    'Cameroon’s last fully published national census, in **2005**, counted about **17.5 million** people. Estimates now put the population at about **28 to 29 million**, growing by about 2.5 per cent a year. More than **250 ethnic groups** live in the country.',
    'The population is **young**: more than four in ten people are under 15, so the population pyramid has a wide base. Birth rates are high and death rates have fallen with better health care, so the population grows fast. This puts pressure on schools, health services and jobs.',
    'The population is **unevenly distributed**:\n- **Dense:** the **West** and **North-West** (fertile volcanic soils, a cool and healthy climate, a long history of settlement), the **Littoral** around Douala (port, industry and trade), the **Centre** around Yaoundé (the capital), and the **Mandara Mountains** and plains of the **Far North**.\n- **Sparse:** the **East** and **South** (dense forest, poor roads, few jobs), and much of the **Adamawa Plateau**.',
    'Average density is about 59 people per km², but it is several hundred in parts of the West and fewer than 10 in parts of the East.',
  ], 'population-pyramid', 'Dense: **West, North-West, Littoral, Centre, Far North**. Sparse: **East, South, Adamawa**.',
  ['A main reason the West Region is densely populated is:', ['Fertile volcanic soils and a cool climate', 'Dense forest', 'Desert conditions', 'Lack of roads'], 'Farming supports many people there.'],
  [['Census', 'An official count of the population.'], ['Population structure', 'The make-up of a population by age and sex.'], ['Ethnic group', 'A group of people sharing a common culture and origin.']],
  null),

  L('ge-cmrurban-f5', 'ge-f5-cmrpopulation', '5.2', 'Cameroon: urbanisation, Douala and Yaoundé', 11, ['Cameroon', 'Urbanisation'], [
    'More than half of Cameroonians now live in towns. **Douala**, the economic capital and main port, and **Yaoundé**, the political capital, are the largest cities, each with several million people. Other important towns include Garoua, Bamenda, Bafoussam, Maroua, Ngaoundéré, Bertoua, Kumba, Limbe and Buea.',
    'Causes of rapid urban growth:\n- **Rural-urban migration**, pushed by poverty, shortage of land, poor services and insecurity in some rural areas, and pulled by jobs, schools, hospitals, electricity and entertainment in towns.\n- **Natural increase** among the young urban population.\n- Towns becoming the headquarters of new administrative units.',
    'Problems of Douala and Yaoundé:\n- **Unplanned settlements and slums**, in Douala often on low, swampy land that floods, in Yaoundé on steep hillsides and in valleys.\n- **Flooding** in the rainy season, made worse by blocked drains.\n- **Traffic congestion** and road accidents.\n- **Shortage of water and electricity** and frequent cuts.\n- **Waste** that is not collected, and pollution.\n- **Unemployment**, street trading and crime.',
    'Solutions being used:\n- urban planning and master plans for each city\n- road building, such as the second Wouri bridge in Douala, and new bus services\n- low-cost housing estates and slum upgrading\n- waste collection by contracted companies\n- clearing and building drains against floods\n- **decentralisation**, giving regions and councils more power and money, and developing other towns so that fewer people need to move to the two big cities.',
  ], 'urban-problems', 'Answer urban questions with **problem → cause → solution**, using Douala and Yaoundé as examples.',
  ['Why do many homes in Douala flood in the rainy season?', ['They are built on low, swampy land with blocked drains', 'Douala is a desert', 'Douala is on a mountain', 'There is no rain in Douala'], 'Heavy rain cannot drain away.'],
  [['Economic capital', 'The city that is the main centre of business and trade.'], ['Decentralisation', 'Moving power and resources from the central government to regions and councils.'], ['Slum upgrading', 'Improving services in existing poor neighbourhoods.']],
  null),

  // ---------- Cameroon: agriculture ----------
  L('ge-cmrfarming-f5', 'ge-f5-cmragric', '6.1', 'Cameroon: food crops, cash crops and livestock', 12, ['Cameroon', 'Agriculture'], [
    'Agriculture employs a large share of Cameroonians and feeds the country. Food crops change with the climate:\n- **Forest zone (South, Centre, East, Littoral):** cassava, plantains, cocoyams, yams, maize, groundnuts.\n- **Western Highlands:** maize, beans, Irish potatoes, vegetables, plantains, coffee.\n- **Savanna and Sahel (North and Far North):** millet, sorghum, maize, groundnuts, cowpeas, rice on the floodplains, onions.',
    'Main **cash crops** and where they grow:\n- **Cocoa:** Centre, South, South-West, Littoral and East; grown mostly by small farmers.\n- **Coffee:** **arabica** in the cooler West and North-West highlands; **robusta** in the Littoral (the Mungo area), the East and the Centre.\n- **Cotton:** North and Far North, through SODECOTON.\n- **Bananas:** the Mungo valley (Njombé, Penja) and the South-West, mostly from plantations, for export.\n- **Oil palm:** the South-West, Littoral and South, on plantations and small farms.\n- **Rubber:** South-West (CDC) and around Kribi (Hevecam).\n- **Tea:** CDC estates at **Tole**, near Buea, and at **Ndu** in the North-West.\n- **Sugar cane:** Mbandjock and Nkoteng in the Centre (SOSUCAM).\n- **Rice:** the Far North (SEMRY) and Ndop (UNVDA).',
    '**Livestock:** cattle on the Adamawa Plateau, in the North and in the North-West, mostly kept by Fulani and Mbororo herders; goats and sheep in the North; pigs and poultry everywhere, often in modern farms near towns.',
  ], 'agric-corporations', 'Highlands: **arabica**; Mungo: **bananas, robusta**; Centre/South: **cocoa**; North: **cotton**; Far North and Ndop: **rice**.',
  ['Robusta coffee is grown mainly in the:', ['Littoral (Mungo), East and Centre', 'Sahel', 'Western Highlands only', 'Chad plain'], 'Robusta suits the warmer lowlands; arabica the cool highlands.'],
  [['Cash crop', 'A crop grown mainly for sale.'], ['Food crop', 'A crop grown mainly for eating.'], ['Pastoralist', 'A herder of livestock.']],
  null),

  L('ge-cmrcorps-f5', 'ge-f5-cmragric', '6.2', 'Development corporations and the problems of agriculture', 12, ['Cameroon', 'Agriculture'], [
    'The state created **agricultural development corporations** to grow and process crops on a large scale and to help small farmers:\n- **CDC** (Cameroon Development Corporation), founded in **1947**, in the South-West: bananas, oil palm, rubber and tea on large estates, with factories on the estates. It is one of the largest employers in the country.\n- **PAMOL** Plantations: oil palm, mainly in Ndian (South-West).\n- **SODECOTON**: buys and gins cotton grown by small farmers in the North and Far North, gives them seeds and fertiliser, and produces cotton oil and cattle feed. Headquarters at Garoua.\n- **SEMRY**: irrigated rice in the Far North, around **Yagoua** and **Maga**, using water from the Logone.\n- **UNVDA** (Upper Nun Valley Development Authority): rice at **Ndop** in the North-West.',
    'Problems of Cameroon’s agriculture:\n- **poor farm-to-market roads**, so crops spoil and prices paid to farmers are low\n- **falling and changing world prices** of cocoa, coffee and cotton\n- **ageing farmers**, as young people move to towns\n- **small farms**, simple tools and little **credit**\n- **pests and diseases**, such as black pod disease of cocoa\n- **poor storage**, so harvests are lost\n- **irregular rainfall**, drought and floods, made worse by climate change\n- **high costs of fertiliser** and other inputs\n- **insecurity** in some regions, which has damaged plantations and farms.',
    'Solutions: building and repairing farm roads; credit and cooperatives; research and better seeds (IRAD, the national agricultural research institute); training and extension services; irrigation; storage and processing near the farms; insurance against price changes; encouraging young people into farming.',
  ], 'agric-corporations', 'Name the corporation, its **crop** and its **area**: CDC South-West, SODECOTON North, SEMRY Far North, UNVDA Ndop.',
  ['Which corporation grows rice at Ndop?', ['UNVDA', 'SEMRY', 'SODECOTON', 'PAMOL'], 'SEMRY grows rice in the Far North.'],
  [['Development corporation', 'A state company created to develop a sector such as farming.'], ['Cooperative', 'A group of farmers who work together to buy, sell or store.'], ['Extension service', 'Advice and training given to farmers.']],
  null),

  // ---------- Cameroon: forests and fisheries ----------
  L('ge-cmrforestry-f5', 'ge-f5-cmrforest', '7.1', 'Cameroon: the rainforest, logging and conservation', 12, ['Cameroon', 'Forestry'], [
    'Dense forest covers a large part of southern Cameroon, part of the great **Congo Basin forest**. Its values:\n- **Timber**, one of the country’s main exports: sapele, iroko, ayous (obeche), azobé, moabi, mahogany and ebony.\n- **Non-timber forest products:** eru (okok), bush mango (njansang), kola, honey, rattan, medicinal plants and bushmeat.\n- **Jobs** in logging, sawmills and transport.\n- **Wildlife** (gorillas, chimpanzees, forest elephants) and **ecotourism**.\n- **Environmental services:** it stores carbon, protects soils and water and affects rainfall.',
    'Logging takes place mainly in the **East** and **South**, in concessions given to companies. Logs and sawn wood travel by road and rail to Douala and Kribi for export.',
    '**Deforestation** is caused by farming (the biggest cause), logging, fuelwood and charcoal, road building, settlements and mining. Effects: loss of wildlife, soil erosion, rivers silting up, less rainfall locally, more carbon dioxide in the air, and loss of the plants and foods that forest people depend on.',
    'Conservation:\n- The **forestry law of 1994** (Law No. 94/01) set rules for logging, created **community forests** managed by villages, and required forest management plans.\n- **Protected areas**, such as **Korup** National Park, the **Dja Faunal Reserve** (a UNESCO World Heritage Site since 1987), **Lobéké** and **Campo-Ma’an**.\n- **Reforestation** and tree planting, **selective logging**, certification of well-managed forests, and controlling illegal logging and the bushmeat trade.',
  ], 'forest-uses', 'Biggest cause of deforestation: **farming**. Main tools of conservation: **the 1994 law, protected areas, community forests, replanting**.',
  ['What is a community forest?', ['A forest managed by a village for its own benefit under the law', 'A forest owned by a foreign company', 'A national park closed to everyone', 'A tree nursery in town'], 'The 1994 law created them.'],
  [['Deforestation', 'The clearing of forests.'], ['Selective logging', 'Cutting only certain mature trees and leaving the rest.'], ['Protected area', 'Land set aside by law to conserve nature.']],
  null),

  L('ge-cmrfishing-f5', 'ge-f5-cmrforest', '7.2', 'Cameroon: fishing', 10, ['Cameroon', 'Fishing'], [
    'Fish is an important source of protein in Cameroon. Fishing is done in several ways:\n- **Artisanal marine fishing:** fishermen in dugout or plank canoes, often with outboard motors, using nets and lines along the coast, at **Limbe**, **Idenau**, **Kribi**, **Bakassi** and Douala. It supplies most of the sea fish eaten in the country.\n- **Industrial marine fishing:** trawlers fishing offshore for shrimp and fish.\n- **Inland fishing:** on **Lake Chad**, the **Lagdo** reservoir, the **Mbakaou** reservoir, the Logone and other rivers; much of the catch is smoked or dried and sent all over the country.\n- **Fish farming (aquaculture):** ponds and cages, especially for tilapia and catfish.',
    'Problems:\n- **overfishing** and the use of nets with very small holes, which take young fish\n- **illegal foreign trawlers**\n- **pollution** of coastal waters and rivers\n- old boats and equipment, and little **cold storage**, so fish rots before it is sold\n- the **shrinking of Lake Chad**.\nAs a result Cameroon imports large amounts of frozen fish.',
    'Solutions: controlling fishing seasons and net sizes, patrolling the sea, credit for modern equipment, cold stores and ice plants, and developing fish farming.',
  ], 'fishing-types', 'Fishing types: **artisanal marine, industrial marine, inland, fish farming**.',
  ['Why does Cameroon import a lot of frozen fish?', ['Local catches are too small for the demand', 'Cameroonians do not eat fish', 'There is no coast', 'Fishing is banned'], 'Overfishing and poor equipment limit supply.'],
  [['Artisanal fishing', 'Small-scale fishing with canoes and simple gear.'], ['Aquaculture', 'Farming fish in ponds or cages.'], ['Overfishing', 'Catching fish faster than they can breed.']],
  null),

  // ---------- Cameroon: energy, mining, industry ----------
  L('ge-cmrenergy-f5', 'ge-f5-cmrenergy', '8.1', 'Cameroon: energy resources', 12, ['Cameroon', 'Energy'], [
    'Cameroon has one of the largest **hydroelectric** potentials in Africa, thanks to its many rivers falling from the plateaus. Main power stations:\n- **Edéa** on the Sanaga, first built in the 1950s.\n- **Song Loulou** on the Sanaga, opened in 1981.\n- **Lagdo** on the Benue, supplying the North.\n- **Memve’ele** on the Ntem, in the South.\n- **Nachtigal** on the Sanaga, about 420 MW, which began supplying power in 2024.\nThe **Lom Pangar** dam on the Lom stores water in the rainy season and releases it in the dry season, keeping the Sanaga flowing for the power stations downstream.',
    '**Thermal power** comes from the **Kribi** gas-fired power station and from diesel stations in towns not on the grid.',
    '**Petroleum** has been produced since 1977, mainly offshore in the **Rio del Rey** basin near Bakassi, and also in the Douala and Kribi-Campo basins. Production has fallen since the 1980s. The **SONARA** refinery at **Limbe** refined crude oil until it was badly damaged by a fire in **2019**. **Natural gas** from offshore fields near Kribi is used in the power station and liquefied for export.',
    'Most households still cook with **firewood and charcoal**, especially in rural areas, which adds to deforestation. **Solar** energy is growing, especially in the north and in villages far from the grid.',
    'Problems: frequent power cuts, an old grid that does not reach many villages, low water in the dry season, and the high cost of new dams.',
  ], 'cameroon-power', 'Most electricity: **hydro on the Sanaga** (Edéa, Song Loulou, Nachtigal), kept flowing by **Lom Pangar**.',
  ['Why was the Lom Pangar dam important for Song Loulou and Edéa?', ['It releases stored water in the dry season to keep the Sanaga flowing', 'It produces all the electricity', 'It stops floods in Douala', 'It supplies drinking water to Yaoundé only'], 'Without it, the Sanaga runs low in the dry season.'],
  [['Hydroelectric power', 'Electricity from moving water turning turbines.'], ['Thermal power', 'Electricity from burning fuel such as gas or diesel.'], ['Refinery', 'A plant that turns crude oil into fuels such as petrol and diesel.']],
  null),

  L('ge-cmrmining-f5', 'ge-f5-cmrenergy', '8.2', 'Cameroon: minerals and industries', 11, ['Cameroon', 'Industry'], [
    'Minerals:\n- **Limestone** at **Figuil** in the North, used for cement.\n- **Gold**, mined mostly by small-scale miners in the **East** (around Bétaré-Oya and Batouri) and the Adamawa.\n- Large reserves of **bauxite** at **Minim-Martap** and **Ngaoundal** in the Adamawa, and of **iron ore** in the South and East, not yet mined on a large scale.\n- Others: rutile, cobalt, nickel, sand and gravel, and pozzolana (volcanic ash for cement) in the West.\nSmall-scale gold mining brings income but also deforestation, polluted rivers, abandoned pits and child labour.',
    'Cameroon’s industries:\n- **Agro-processing**, the largest group: breweries and soft drinks (in Douala, Yaoundé, Garoua and Bafoussam), sugar (Mbandjock), palm oil and soap, cocoa and coffee processing, flour milling, cotton ginning and oil (SODECOTON), and textiles (CICAM).\n- **Metallurgy:** aluminium smelting at **Edéa** (ALUCAM), aluminium sheet rolling, and metal works.\n- **Construction materials:** cement works at Figuil and in Douala, bricks, tiles and roofing sheets.\n- Wood processing: sawmills and plywood, mainly in the East and in Douala.\nMost factories are in **Douala**, followed by Yaoundé, Edéa, Garoua and Bafoussam.',
    'Problems of industry: frequent power cuts, high production costs, competition from cheap imports, poor roads, shortage of skilled workers and capital, and a small home market. Solutions include more power stations, industrial zones such as the one near the Kribi port, tax incentives, training and regional trade within CEMAC.',
  ], 'industry-location', 'Biggest industrial group: **agro-processing**. Biggest industrial town: **Douala**.',
  ['Why is ALUCAM’s smelter at Edéa?', ['It needs cheap hydroelectric power from the Edéa dam', 'Bauxite is mined next to it', 'Edéa is the capital', 'It is the coldest town'], 'Smelting aluminium uses huge amounts of electricity.'],
  [['Agro-processing', 'Turning farm products into food, drink and other goods.'], ['Metallurgy', 'The extraction and working of metals.'], ['Artisanal mining', 'Small-scale mining with simple tools.']],
  null),

  // ---------- Cameroon: transport, trade, tourism ----------
  L('ge-cmrtransport-f5', 'ge-f5-cmrtransport', '9.1', 'Cameroon: transport networks', 11, ['Cameroon', 'Transport'], [
    '**Roads** carry most goods and passengers. The main tarred roads link Douala, Yaoundé, Bafoussam, Bamenda, Ngaoundéré, Garoua and Maroua, and roads run to Chad and the Central African Republic. But many rural roads are earth roads that become muddy and impassable in the rainy season.',
    'The **Transcameroon railway**, run by CAMRAIL, links **Douala** with **Yaoundé** and continues through **Belabo** to **Ngaoundéré** (completed in 1974), with a branch from Douala towards **Kumba**. It carries timber, fuel, cement, cotton and goods for Chad and the Central African Republic, which continue by road from Ngaoundéré.',
    '**Ports:**\n- **Douala**, on the Wouri estuary, handles most of the country’s sea trade and goods for Chad and the Central African Republic, but the channel is shallow and must be dredged constantly.\n- **Kribi deep-water port**, opened in **2018**, can receive very large ships.\n- **Limbe** handles oil.\n- **Garoua** is a river port on the Benue, usable only for a few months in the rainy season.',
    '**Air:** international airports at Douala, Yaoundé-Nsimalen and Garoua. **Pipelines:** the **Chad to Cameroon pipeline**, about 1 070 km, completed in **2003**, carries crude oil from southern Chad to an offshore terminal near Kribi.',
    'Problems: poor road maintenance, accidents, a single-track railway, delays in the ports, and high transport costs. Solutions: new and repaired roads, upgrading the railway, the new Kribi port and better management.',
  ], 'cameroon-transport', 'Rail: **Douala–Yaoundé–Belabo–Ngaoundéré**. Ports: **Douala, Kribi, Limbe, Garoua (river)**.',
  ['Why does Ngaoundéré handle much of the trade with Chad?', ['It is the end of the railway, where goods change to road transport', 'It is a sea port', 'Chad’s capital is next to it', 'It has the largest airport'], 'Goods arrive by rail and continue by lorry.'],
  [['Transit trade', 'Goods passing through one country to reach another.'], ['Deep-water port', 'A port deep enough for very large ships.'], ['Dredging', 'Removing mud and sand from a channel to keep it deep.']],
  null),

  L('ge-cmrtrade-f5', 'ge-f5-cmrtransport', '9.2', 'Cameroon: trade and tourism', 11, ['Cameroon', 'Trade'], [
    '**Internal trade** moves food from the farming areas to the towns through periodic village markets, large regional markets and the markets of the big cities. Food from the West and North-West feeds Douala and Yaoundé; onions, cattle and grain move south from the North. Cross-border trade with Nigeria, Chad, Gabon and Equatorial Guinea is busy.',
    '**International trade:**\n- **Exports:** crude oil and natural gas, cocoa beans and cocoa products, timber, aluminium, bananas, cotton, coffee and rubber: mostly raw materials.\n- **Imports:** refined fuels, machinery and vehicles, rice, wheat, frozen fish, medicines, iron and steel, and manufactured goods.\n- **Partners:** China, the countries of the European Union (France, the Netherlands, Italy, Spain, Belgium), Nigeria and the CEMAC neighbours.\nThe **balance of trade** (value of exports minus value of imports) is usually in **deficit**. Cameroon also earns money from goods in transit to Chad and the Central African Republic.',
    '**Tourism** has great potential because Cameroon has so many landscapes and cultures:\n- **Ecotourism:** Waza National Park in the Far North, Korup and the Dja forests, Mount Cameroon and its **Race of Hope**, the Lobé Falls and beaches at **Kribi**, the Limbe Wildlife Centre and botanic garden, the crater lakes, and the landscape of **Rhumsiki** in the Mandara Mountains.\n- **Cultural tourism:** the royal palace and museums of **Foumban**, the chiefdoms and palaces of the West and North-West such as **Bafut**, the lamidats of the North, and festivals such as the **Ngondo** of the Sawa people in Douala and the **Nguon** of the Bamoun.\nObstacles: poor roads and accommodation, insecurity in some regions, high costs, little advertising abroad and few trained guides.',
  ], 'cameroon-transport', 'Cameroon exports mainly **raw materials** and imports **manufactured goods and fuel**: a trade deficit.',
  ['Why is Cameroon’s balance of trade usually in deficit?', ['It imports more value than it exports, mostly selling cheap raw materials', 'It exports nothing', 'It has no ports', 'It only trades internally'], 'Raw materials earn less than manufactured imports cost.'],
  [['Balance of trade', 'The value of exports minus the value of imports.'], ['Ecotourism', 'Tourism to natural areas that conserves them and benefits local people.'], ['CEMAC', 'The Economic and Monetary Community of Central Africa.']],
  null),

  // ---------- Map work ----------
  L('ge-mapcalc-f5', 'ge-f5-mapwork', '10.1', 'Map work calculations: a full revision', 12, ['Map work', 'Calculation'], [
    'The map question in the GCE always includes calculations. Revise each one:\n- **Distance:** measure on the map (string or paper strip for curves) and convert with the scale. At 1 : 50 000, 1 cm = 0.5 km.\n- **Area:** count grid squares (at 1 : 50 000 each 2 cm square is 1 km²), counting part squares that are half or more as whole squares; or, for a rectangle, length × breadth in km.\n- **Gradient:** vertical interval ÷ horizontal equivalent, as "1 in x", both in the same units.\n- **Vertical exaggeration:** horizontal scale denominator ÷ vertical scale denominator.\n- **Bearing:** clockwise from north, three figures; back bearing ± 180°.\n- **Grid references:** six figures, eastings first.',
    'To **reduce or enlarge** a sketch map, draw a grid on it and a new grid with squares smaller or larger by the required factor, then copy what is in each square. Reducing by half divides every length by 2, so the area becomes a quarter; the new scale must be written on the map.',
    'Show your working in every calculation, keep the units, and round sensibly. Many marks are lost by forgetting to convert centimetres on the map into kilometres on the ground.',
  ], 'cross-section', 'Always **show working and units**; convert cm on the map to km on the ground.',
  ['A rectangle on a 1 : 50 000 map measures 6 cm by 4 cm. Its area on the ground is:', ['6 km²', '24 km²', '12 km²', '3 km²'], '6 cm = 3 km and 4 cm = 2 km; 3 × 2 = 6 km².'],
  [['Horizontal equivalent', 'The ground distance between two points, measured on the map.'], ['Reduction', 'Redrawing a map at a smaller size.']],
  [
    { q: 'A spot height of 712 m is 3.5 cm (on a 1 : 50 000 map) from a river at 362 m. Find the gradient.', steps: ['Vertical interval: 712 − 362 = 350 m.', 'Horizontal equivalent: 3.5 cm × 500 m = 1 750 m.', '1 750 ÷ 350 = 5.', 'Gradient = **1 in 5**.'] },
  ]),

  L('ge-mapread-f5', 'ge-f5-mapwork', '10.2', 'Interpreting a topographic map', 12, ['Map work'], [
    'Describe each feature with **evidence from the map**: heights, names and grid references.\n- **Relief:** the highest and lowest points, the general slope and its direction, landforms (hills, ridges, valleys, plateaus, escarpments, spurs) and where they are.\n- **Drainage:** the main rivers and the direction they flow, where they rise, and the **drainage pattern**: **dendritic** (like the branches of a tree, on rocks of equal hardness), **trellis** (tributaries at right angles, where hard and soft rocks alternate), **radial** (outwards from a central hill or volcano) and **parallel** (on a steady slope). Also note marshes, lakes and dams.',
    '- **Vegetation:** forest, scrub, grassland, swamp and plantations, and where they are.\n- **Settlement:** the pattern (nucleated, dispersed, linear) and the sites chosen (along roads, near rivers, on dry points, avoiding steep slopes and swamps).\n- **Communications:** roads (tarred and earth), tracks, railways, bridges and airstrips, and how they follow valleys and avoid steep slopes.\n- **Economic activities:** farming (plantations, estates), forestry, fishing, mining, quarries, industry, trade (markets) and services (schools, hospitals, churches, police posts).',
    'Questions often ask for **relationships**: explain how one feature affects another. For example, "Settlements are found along the roads because of easy transport", or "There are no settlements in the north-east because the land is steep and above 1 000 m".',
    'A **sketch map** drawn from the topographic map must have a **frame**, a **title**, a **north arrow**, a **scale** and a **key**, and show only what the question asks for.',
  ], 'map-description', 'Every statement needs **map evidence**: a height, a name or a grid reference.',
  ['A radial drainage pattern on a map most likely shows:', ['A volcano or dome-shaped hill', 'A flat plain', 'Alternating bands of hard and soft rock', 'A desert'], 'Rivers flow outwards from the high centre.'],
  [['Drainage pattern', 'The shape made by a river and its tributaries on a map.'], ['Dendritic', 'A tree-like drainage pattern.'], ['Trellis', 'A pattern with tributaries joining at right angles.']],
  null),

  // ---------- GCE revision ----------
  L('ge-paper1-f5', 'ge-f5-gce', '11.1', 'GCE Paper 1: multiple-choice practice', 10, ['Exam skills', 'Revision'], [
    'Paper 1 is made of multiple-choice questions covering the **whole syllabus**: map skills, physical geography (the Earth, rocks, rivers, weather and climate, vegetation), human and economic geography, and the geography of Cameroon.',
    'Topics that come up often:\n- **Weather instruments** and what each measures; climate calculations.\n- **World climate and vegetation belts** and their characteristics.\n- **Landforms** of rivers and volcanoes, and the kinds of weathering and rock.\n- **Population** terms and calculations.\n- **Cameroon:** regions and their capitals, relief regions, rivers and basins, climate types, crops and where they grow, development corporations, dams, ports and the railway.',
    'Method: read the question carefully and underline NOT and EXCEPT, recall the answer, read every option, eliminate the wrong ones, and keep to time. Practise past questions in timed sets and correct every mistake.',
  ], 'cameroon-relief', 'Learn the **ten regions and their capitals**: they come up again and again.',
  ['The capital of the East Region is:', ['Bertoua', 'Ebolowa', 'Bafoussam', 'Buea'], 'Ebolowa is the capital of the South.'],
  [['Region', 'One of the ten main administrative divisions of Cameroon.']],
  [
    { q: 'Name the ten regions of Cameroon and their capitals.', steps: ['Adamawa: **Ngaoundéré**. Centre: **Yaoundé**. East: **Bertoua**.', 'Far North: **Maroua**. Littoral: **Douala**. North: **Garoua**.', 'North-West: **Bamenda**. South: **Ebolowa**.', 'South-West: **Buea**. West: **Bafoussam**.'] },
  ]),

  L('ge-paper2-f5', 'ge-f5-gce', '11.2', 'GCE Paper 2: structured answers, essays and mocks', 12, ['Exam skills', 'Revision'], [
    'Paper 2 usually begins with a **compulsory map work question** on a topographic map extract, followed by questions on physical geography, human and economic geography, and the geography of Cameroon, from which you choose. Read the instructions on the paper carefully and share your time according to the marks.',
    'For structured and essay questions:\n- Read the **command word**: **describe** (say what it is like), **explain** or **account for** (give reasons), **compare** (similarities and differences), **with the help of a diagram** (a diagram is required).\n- **Plan** before writing: a short list of points.\n- Write one main point per paragraph: **state** it, **explain** it, and **support** it with an example, preferably from Cameroon.\n- Add a neat, labelled **sketch map or diagram** where it helps: a waterfall, a volcano, a river profile, a population pyramid, a sketch map of crop areas. Give it a title, labels and a key.',
    'In **mock examinations** in Term 3, work under real conditions and time limits. Afterwards, correct every answer, rewrite weak ones, and revise the topics where you lost marks. Practise drawing quick, tidy diagrams until you can do each in two or three minutes.',
  ], 'river-courses', 'Each point: **state → explain → example**. A labelled diagram often earns extra marks.',
  ['"Account for the high population density of the West Region" asks you to:', ['Give reasons for it', 'Describe the region’s location only', 'Draw a map only', 'List the towns'], '"Account for" means explain why.'],
  [['Command word', 'The word in a question that tells you what kind of answer is needed.'], ['Sketch map', 'A simple map showing only the features needed, with a title, key and north arrow.']],
  null),
];
