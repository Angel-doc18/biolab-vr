// Biology lessons for Forms 1 and 2 (MINESEC first cycle). Written for younger
// readers: short paragraphs, everyday Cameroonian examples. Original text written
// for this app. **double asterisks** mark key terms (rendered bold) and *single
// asterisks* scientific names (italics). `examples` are worked examples.

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

export const LESSONS_12 = [
  // ======================= Form 1 =======================
  L('bi-living-1', 'bi-f1-living', '1.1', 'Living and non-living things', 7, ['Characteristics of life'], [
    'Biology is the study of **living things**. A goat, a mango tree, a mushroom and a person are alive; a stone, a car and a cup are not.',
    'All living things share seven characteristics. They **move** (even plants turn towards light), **respire** (release energy from food), are **sensitive** (respond to light, heat or touch), **grow**, **reproduce** (make new living things), **excrete** (get rid of waste) and need **nutrition** (food). The first letters spell **MRS GREN**, a helpful way to remember them.',
    'Some non-living things show one or two of these: a car moves and uses fuel, and fire grows. But neither can reproduce, excrete or grow by itself, so they are not alive. A dead leaf was once alive but no longer carries out these processes.',
    'All living things are made of tiny units called **cells**, which can only be seen with a microscope. Some living things, such as bacteria, have just one cell; a person has millions of millions.',
  ], null, 'Learn **MRS GREN**. To decide if something is alive, check that it shows **all** seven characteristics, not just one or two.',
  ['Which pair are both living things?', ['A mushroom and a snail', 'A stone and a snail', 'Fire and a mango tree', 'A car and a goat'], 'Mushrooms and snails grow, respire, reproduce and show the other characteristics of life.'],
  [['Living thing', 'Something that shows all the characteristics of life.'], ['Respiration', 'The release of energy from food in cells.'], ['Excretion', 'Getting rid of the waste made by the body.']]),

  L('bi-science-1', 'bi-f1-living', '1.2', 'Finding out like a scientist', 8, ['Scientific method'], [
    'Scientists find things out by the **scientific method**. They **observe** something, ask a **question**, suggest a possible answer (a **hypothesis**), test it with an **experiment**, **record** the results, draw a **conclusion** and **communicate** what they found.',
    'A good experiment is a **fair test**: only one thing is changed and everything else is kept the same. To test whether bean seeds need water to germinate, put seeds on wet cotton wool in one dish and on dry cotton wool in another, keeping both in the same warm place. The dish with water is compared with the dish without it.',
    'Results are recorded in **tables**, **charts** and **drawings**, and written up in a short **report**: the aim, the method, the results and the conclusion.',
    'Some records are kept over a long time. A **nature calendar** notes when things happen during the year: the first rains, the flowering of mango trees, the flight of winged termites. A **vivarium** is a glass or wooden box where small animals such as snails or crickets are kept to be observed; an **aquarium** does the same for fish and water animals.',
  ], 'scientific-method', 'In a fair test, say clearly **what you change**, **what you measure** and **what you keep the same**.',
  ['A pupil grows beans with and without fertiliser. To make it a fair test, she must:', ['Keep the water, light and soil the same for both', 'Give the fertilised beans more water', 'Put one pot in the dark', 'Use different seeds for each'], 'Only the fertiliser should differ, so that any difference in growth is caused by it.'],
  [['Hypothesis', 'A possible answer that can be tested by an experiment.'], ['Fair test', 'An experiment in which only one thing is changed.'], ['Vivarium', 'A container in which small land animals are kept and observed.']]),

  L('bi-farming-1', 'bi-f1-farming', '2.1', 'How the environment shapes farming in Cameroon', 8, ['Farming zones'], [
    'What a farmer can grow or rear depends on the **environment**: the amount of **rainfall**, the **temperature**, the type of **soil** and the **altitude** (height above the sea). Cameroon has very different environments, from desert edges in the north to rainforest in the south.',
    'In the hot, dry **Sudano-Sahelian zone** (North and Far North), farmers grow **millet, sorghum, cotton, groundnuts and onions**, and rear **cattle, sheep and goats**. On the cooler **Adamawa plateau**, there is good pasture for **cattle**, and maize is grown.',
    'In the **western highlands** (West and North West), the cool, wet climate and rich volcanic soils suit **arabica coffee, maize, beans, Irish potatoes and vegetables**, and many families keep **pigs and poultry**.',
    'In the hot, wet **forest zone** (South West, Littoral, Centre, South and East), farmers grow **cocoa, oil palm, cassava, plantain, bananas and rubber**. A good farmer chooses crops and animals that suit the local environment rather than fighting against it.',
  ], null, 'When asked why a crop grows in one region, link it to the **rainfall**, **temperature** or **soil** of that region.',
  ['Why is cocoa grown in the South rather than the Far North?', ['Cocoa needs a hot, wet climate all year', 'Cocoa needs a long dry season', 'The North is too cold', 'Cocoa grows only in sand'], 'Cocoa needs plenty of rain and shade; the Far North is too dry.'],
  [['Environment', 'Everything around a living thing that affects it.'], ['Altitude', 'Height above sea level.'], ['Crop', 'A plant grown by farmers for food or sale.']]),

  L('bi-crops-1', 'bi-f1-farming', '2.2', 'Growing a crop step by step: maize', 9, ['Cultivation'], [
    'Maize is grown all over Cameroon. Growing it well follows clear steps. First **choose the site** and **clear the land** without burning, then **till** the soil with a hoe or plough to loosen it.',
    '**Select good seed** from healthy, high-yielding plants or buy improved seed. **Sow** at the start of the rainy season, about two seeds per hole, with rows about 75 cm apart and holes about 25 cm apart, so that every plant gets enough light and water.',
    'Care for the crop: **weed** two or three times, add **manure or fertiliser** (NPK at planting, urea a few weeks later), and watch for **pests** such as stem borers and the fall armyworm, which eats the leaves and cobs.',
    '**Harvest** when the cobs are dry and the husks brown. **Dry** the grain well, then **store** it in clean, dry, airtight containers to keep out moulds and weevils. Other crops are started differently: cassava from **stem cuttings**, plantain from **suckers** and yams from pieces of tuber called setts.',
  ], null, 'List the steps **in order**: site, clearing, tilling, seed, sowing, weeding, fertilising, pest control, harvesting, drying and storing.',
  ['Why are maize seeds sown in rows with spaces between them?', ['So each plant gets enough light, water and minerals', 'To make weeding impossible', 'So the plants shade each other', 'To use more seed'], 'Crowded plants compete with each other and give smaller cobs.'],
  [['Tilling', 'Loosening the soil before sowing.'], ['Sucker', 'A young shoot growing from the base of a plant, used to start a new one.'], ['Pest', 'An animal that damages crops.']]),

  L('bi-soil-1', 'bi-f1-soil', '3.1', 'What soil is made of', 8, ['Soil', 'Practical'], [
    'Soil is made of **rock particles** of different sizes (sand, silt and clay), **humus** (decayed plant and animal remains), **water**, **air** and many **living things**, such as earthworms, insects, fungi and bacteria.',
    'Shake some soil with water in a clear jar and leave it to settle: the largest particles (stones and sand) settle at the bottom, then silt, then clay on top, with bits of humus floating. Heating dry soil strongly burns off the humus, so the soil loses mass.',
    '**Sandy soil** has large particles: it drains quickly, warms up fast and is easy to dig, but holds little water or plant food. **Clay soil** has tiny particles: it holds water and nutrients but becomes sticky when wet, hard when dry and short of air. **Loam** is a mixture of sand, silt and clay with plenty of humus: it is the best soil for most crops.',
    'Dig a deep hole and you see layers, the **soil profile**: dark **topsoil** with humus and roots, paler **subsoil** below it, and then the **parent rock** from which the soil formed.',
  ], 'soil-profile', 'Compare soils by **particle size**, **drainage**, **water holding** and **air**: these explain which crops grow well in them.',
  ['Water runs through soil A very quickly but stays on top of soil B. Which is more likely?', ['A is sandy and B is clay', 'A is clay and B is sandy', 'Both are loam', 'Both are pure humus'], 'Large sand grains leave big spaces for water; tiny clay particles pack tightly.'],
  [['Humus', 'Dark organic matter in soil from decayed living things.'], ['Loam', 'A fertile soil that is a mixture of sand, silt and clay.'], ['Soil profile', 'The layers of soil seen in a deep cut.']]),

  L('bi-soil-2', 'bi-f1-soil', '3.2', 'Improving soil and preventing erosion', 9, ['Soil conservation'], [
    'Crops take minerals out of the soil, so farmers must put them back. They add **manure** and **compost**, use **fertilisers** carefully, and practise **crop rotation** (growing different crops on the same land in turn, including legumes such as beans and groundnuts, which add nitrogen) and **crop association** (growing crops together, such as maize with beans).',
    'In dry places or seasons, **irrigation** brings water to crops, as in the rice fields around Yagoua. Where soil is waterlogged, **drainage** channels remove the extra water so that roots can get air.',
    '**Soil erosion** is the washing or blowing away of topsoil. It is worst on bare soil and steep slopes. It is prevented by **contour farming** and ridges built across slopes, **terraces** on hillsides, **cover crops** and **mulch** that protect the soil from heavy rain, and **planting trees** whose roots hold the soil together.',
    '**Bush fires** burn the humus and kill soil animals, leaving the soil bare for the first heavy rains. Making firebreaks, never leaving fires unattended and preparing farms without burning protect the soil.',
  ], null, 'For each soil problem, give a matching remedy: **erosion**: terraces, contour ridges, cover crops; **poor fertility**: manure, rotation; **dryness**: irrigation.',
  ['Which practice protects bare soil from heavy rain?', ['Covering it with mulch or a cover crop', 'Burning the bush', 'Ploughing up and down the slope', 'Removing all trees'], 'A cover breaks the force of the raindrops and slows the running water.'],
  [['Erosion', 'Removal of topsoil by water or wind.'], ['Crop rotation', 'Growing different crops on the same land in turn.'], ['Terrace', 'A flat step cut into a hillside for farming.']]),

  L('bi-wild-1', 'bi-f1-wild', '4.1', 'Useful wild plants and animals of Cameroon', 8, ['Natural resources'], [
    'Cameroon’s forests, savannas and rivers provide many **wild foods**: leaves of **eru** (*Gnetum*), seeds of **bush mango** (*Irvingia*) and **njansang** (*Ricinodendron*), **kola nuts** and **bitter kola**, wild honey, mushrooms, snails, fish and bushmeat.',
    'Many plants are **medicinal**. The bark of *Prunus africana* from Mount Cameroon is exported to make medicines for prostate disease, and many families use plants in traditional remedies. Medicines should still be used only on the advice of a health worker.',
    'Some species are **endangered**, meaning they could die out: *Prunus africana*, eru in some areas, the Cross River gorilla, forest elephants, pangolins and the African grey parrot. Making an **inventory**, a list of the useful and endangered species found around your village or school, is the first step to protecting them.',
    'Living things are sorted into groups by their features (**classification**): plants and animals; flowering and non-flowering plants; animals with and without a backbone. This helps to name, study and protect them.',
  ], null, 'When you name a useful wild species, also say **what it is used for** and whether it is **threatened**.',
  ['Why is *Prunus africana* considered an endangered species?', ['Too many trees have been killed by stripping their bark', 'It grows too fast', 'Nobody uses it', 'It grows everywhere'], 'Over-harvesting of its valuable bark has killed many trees.'],
  [['Medicinal plant', 'A plant used to make medicines.'], ['Endangered species', 'A species at risk of dying out.'], ['Inventory', 'A list of what is found in a place.']]),

  L('bi-wild-2', 'bi-f1-wild', '4.2', 'Harvesting without destroying', 8, ['Sustainability'], [
    'A harvest is **sustainable** if it can continue year after year without using up the resource. Many common practices are **unsustainable**: pulling up eru with its roots, cutting down a whole tree to collect its fruit or bark, hunting pregnant females and young animals, hunting protected species, fishing with **poison**, dynamite or nets with very small holes, and burning the bush to drive out game.',
    'Sustainable practices include cutting eru leaves and leaving the stem and roots, taking bark from only parts of a *Prunus* trunk so it can heal, respecting the **closed hunting season** when animals breed, using nets with larger holes so young fish escape, and obeying the laws that protect rare species.',
    'Even better is to **domesticate** wild species: growing eru, bush mango and njansang in farms and nurseries, keeping bees in hives instead of burning wild nests, rearing grasscutters (cane rats) and snails, and farming fish in ponds. This gives food and income while leaving wild populations to recover.',
  ], null, 'For an unsustainable practice, explain **why** it harms the resource and suggest a **sustainable alternative**.',
  ['Which practice lets a fish population stay large for the future?', ['Using nets with larger holes', 'Fishing with poison', 'Using dynamite', 'Catching fish during breeding'], 'Young fish escape, grow up and breed.'],
  [['Sustainable', 'Able to continue without using up a resource.'], ['Domesticate', 'To grow or rear a wild species under human care.'], ['Closed season', 'A time of year when hunting or fishing is not allowed.']]),

  L('bi-grow-1', 'bi-f1-puberty', '5.1', 'Puberty: the changes of growing up', 8, ['Puberty', 'Hygiene'], [
    '**Puberty** is the time, usually between about 10 and 16 years of age, when the body changes from a child’s into an adult’s. The changes are caused by **hormones** and happen at different ages in different people, which is normal.',
    'In **girls**: the breasts develop, the hips widen, hair grows under the arms and in the pubic area, and **menstruation** (periods) begins. A period is a normal monthly loss of blood from the uterus; it shows that the body can now become pregnant.',
    'In **boys**: the voice breaks and becomes deeper, hair grows on the face, under the arms and in the pubic area, the shoulders broaden and muscles grow, and the penis and testes grow and start producing sperm. Wet dreams are normal.',
    'In both, there is a **growth spurt**, the skin may become oily with pimples, sweating increases, and new feelings and interests appear. Good **personal hygiene** becomes important: bathe daily, wash and change underwear every day, and for girls, change sanitary pads regularly. Questions are best asked of parents, teachers or health workers.',
  ], null, 'Group the changes into three lists: **girls only**, **boys only** and **both**.',
  ['Which change happens to both boys and girls at puberty?', ['A growth spurt', 'Breaking of the voice', 'Menstruation', 'Growth of a beard'], 'Both sexes grow quickly in height during puberty.'],
  [['Puberty', 'The stage when the body changes from child to adult.'], ['Menstruation', 'The monthly loss of blood from the uterus.'], ['Hormone', 'A chemical messenger made in the body.']]),

  L('bi-grow-2', 'bi-f1-puberty', '5.2', 'Making safe choices: avoiding early pregnancy', 7, ['Life skills'], [
    'After puberty, a girl can become pregnant if she has **sexual intercourse**. A pregnancy at a young age is called an **early pregnancy**. It often ends a girl’s schooling and is risky for her health and the baby’s, because her body is not fully grown.',
    'The best choice for young people is **abstinence**: not having sexual intercourse until they are adults and ready for a family. It also protects against STIs and HIV. Adults who are sexually active can use **contraceptives**, such as condoms, to prevent pregnancy.',
    'Young people are often pushed by **peer pressure**, gifts or older people. You can **say no** clearly, stay away from risky places and situations, choose friends who respect you, and talk to a trusted adult. In **peer education**, trained students share correct information and support each other.',
  ], null, 'In life-skills answers, give **practical actions**: saying no, avoiding risky situations and talking to a trusted adult.',
  ['Which is the safest choice for a Form 1 pupil?', ['Abstinence', 'Taking herbs to avoid pregnancy', 'Accepting gifts for sex', 'Keeping a secret older boyfriend'], 'Abstinence prevents pregnancy and infections completely.'],
  [['Abstinence', 'Choosing not to have sexual intercourse.'], ['Early pregnancy', 'Pregnancy in a girl who is still a child or teenager.'], ['Peer pressure', 'Pressure from people of your age to act in a certain way.']]),

  L('bi-stisafe-1', 'bi-f1-sti', '6.1', 'STIs and HIV: what they are and how to stay safe', 8, ['STIs', 'Prevention'], [
    '**Sexually transmitted infections** (STIs) are passed from one person to another mainly through sexual contact. Examples are **gonorrhoea**, **syphilis**, **chlamydia** and **HIV**. Signs can include pain when passing urine, an unusual discharge or sores on the genitals, but many infected people have **no signs at all**.',
    '**HIV** attacks the body’s defence system, so that other diseases can attack the body easily. Without treatment it leads to **AIDS**. HIV spreads through unprotected sex, infected blood (shared needles and razors) and from mother to baby. It does **not** spread by shaking hands, sharing food, mosquito bites or sitting together.',
    'Protection: **abstinence**, avoiding **sexual promiscuity** (many partners), using **condoms** correctly (for adults), never sharing razors or needles, and good **personal hygiene**.',
    '**Voluntary screening** (choosing to be tested, alone or with a partner) at a health centre shows a person’s status. Anyone with signs should go to a health centre with their partner, take the **complete treatment** prescribed and never buy medicines from the street.',
  ], null, 'Give the **three routes** by which HIV spreads, and also say how it does **not** spread.',
  ['Which of these does NOT spread HIV?', ['Eating from the same plate', 'Sharing a razor blade', 'Unprotected sex', 'An infected mother to her baby'], 'HIV needs blood, sexual fluids or breast milk to pass between people.'],
  [['STI', 'An infection passed on mainly through sexual contact.'], ['HIV', 'The virus that weakens the body’s defences and leads to AIDS.'], ['Voluntary screening', 'Choosing to be tested for an infection.']]),

  L('bi-meal-1', 'bi-f1-food', '7.2', 'Planning healthy meals and preventing malnutrition', 8, ['Balanced diet', 'Local meals'], [
    'A balanced meal has foods from each class in the right amounts. A simple guide is the **healthy plate**: half of it vegetables and fruit, a quarter starchy food (rice, cassava, plantain, yams, maize) and a quarter protein food (beans, groundnuts, fish, eggs, meat), with a little oil and clean water to drink.',
    'Many local meals are already well balanced: **corn chaff** (maize with beans and vegetables), **ndolé** with plantains and fish, **koki** (black-eyed beans) with ripe plantains, **achu** with yellow soup and vegetables. Meals made only of starch, such as plain garri, need protein and vegetables added.',
    '**Deficiency diseases** come from lack of a nutrient: **kwashiorkor** (protein: swollen belly and feet), **marasmus** (energy and protein: very thin), **anaemia** (iron: tiredness, pale skin), **goitre** (iodine), **night blindness** (vitamin A), **rickets** (vitamin D and calcium: bent legs) and **scurvy** (vitamin C: bleeding gums). Eating too much fatty and sugary food with little exercise leads to **obesity**.',
    'Food must also be **safe**: wash hands, use clean water, wash fruit and vegetables, cook meat and fish well, and cover food against flies.',
  ], null, 'When planning a meal, check that it has an **energy food**, a **protein food** and **vegetables or fruit**.',
  ['A child eats only plain garri every day. Which nutrient is most lacking?', ['Protein', 'Carbohydrate', 'Energy', 'Starch'], 'Garri is almost all starch; adding beans, groundnuts or fish gives protein.'],
  [['Balanced diet', 'A diet with all the food classes in the right amounts.'], ['Deficiency disease', 'An illness caused by lack of a nutrient.'], ['Obesity', 'Having far too much body fat.']]),

  L('bi-foodsafe-1', 'bi-f1-foodsafety', '8.1', 'Preventing food poisoning', 8, ['Food hygiene', 'Labels'], [
    '**Food poisoning** is illness caused by eating contaminated food. Common causes are **bacteria** in undercooked meat, chicken and eggs or in food left warm and uncovered; **poisons from moulds** on damp groundnuts and maize; **chemicals** such as pesticides left on vegetables or food kept in old pesticide containers; and spoiled **canned food**. Signs are **vomiting, diarrhoea, stomach pain and fever**.',
    'Hygiene rules: wash hands with soap before handling food and after using the toilet; use clean water and clean utensils; wash fruit and vegetables; cook food thoroughly and eat it while hot; keep raw meat apart from cooked food; cover food against flies; and keep leftovers cool and reheat them well.',
    'Read the **label** on packaged food: the **expiry date** ("use by") is the last day the food is safe; "best before" shows when its quality starts to fall; the label also gives the ingredients and how to store it. Do not buy food that has expired, or cans that are swollen, badly dented or rusty, or packets that are torn.',
    'A person with severe vomiting or diarrhoea risks **dehydration** and should drink oral rehydration solution and go to a health centre.',
  ], null, 'For each hygiene rule, give the **reason**: washing hands removes germs, covering food keeps flies off, cooking kills bacteria.',
  ['Which food should NOT be bought?', ['A can that is swollen', 'A packet with a future expiry date', 'Fresh, washed vegetables', 'A sealed bottle of water'], 'A swollen can may contain bacteria and dangerous poisons.'],
  [['Food poisoning', 'Illness caused by contaminated food.'], ['Expiry date', 'The last date on which a food is safe to eat.'], ['Contaminated', 'Made unclean or harmful by germs or chemicals.']]),

  L('bi-waterpoll-1', 'bi-f1-pollution', '9.1', 'Protecting our water', 8, ['Water pollution'], [
    'Our water comes from **rain**, **rivers and streams**, **springs**, **wells**, **boreholes** and **lakes**. **Water pollution** happens when harmful things get into water: faeces from latrines and open defecation, refuse thrown into streams, washing and bathing in drinking-water sources, farm chemicals, waste from factories and oil.',
    'Polluted water spreads diseases such as **cholera, typhoid, dysentery and diarrhoea**, and the snails in dirty, slow water can spread **bilharzia**. Pollution also kills fish and other water life.',
    'To protect water sources: build latrines at least **30 m** from wells and springs and downhill of them; cover wells; never throw refuse or wash in drinking-water streams; protect springs with concrete; and **plant trees** around the catchment (watershed), because trees hold the soil and keep water clean.',
    'At home, make water safe by **boiling** it, **filtering** it or adding **chlorine** tablets, and store it in clean, covered containers.',
  ], 'water-treatment', 'For a water-pollution question, name the **source** of pollution, the **disease** it causes and a **way to prevent** it.',
  ['Why should drinking water be stored in a covered container?', ['To keep out dust, insects and germs', 'To make it colder', 'To add minerals', 'To stop it evaporating completely'], 'Uncovered water is easily contaminated again.'],
  [['Pollution', 'Making the environment dirty or harmful.'], ['Catchment', 'The area of land from which water drains into a river or spring.'], ['Borehole', 'A deep, narrow well drilled to reach underground water.']]),

  L('bi-airland-1', 'bi-f1-pollution', '9.2', 'Air and land pollution', 8, ['Air pollution', 'Waste'], [
    '**Air pollution** comes from smoke from cooking fires and bush fires, exhaust from vehicles, generators and motorbikes, dust, factory chimneys, and the burning of plastics and tyres. It causes **coughs, asthma, eye irritation and lung disease**. Trees help to clean the air by trapping dust and taking in carbon dioxide.',
    '**Land pollution** comes from refuse heaps, plastics, broken glass, scrap metal, old batteries and chemicals dumped on the ground. It provides breeding places for **flies, rats and mosquitoes**, blocks gutters and causes **floods**, poisons the soil and spoils the beauty of our towns.',
    'Communities and households can treat their refuse: **sort** it (food waste, plastics, glass, metal); **compost** food and garden waste; **reuse** and **recycle** plastics, metal and glass; and have the rest **collected** and taken to a proper dump. Never burn plastics.',
    'Field work in your community, and posters and talks, help people to see the effects of pollution on health and how to prevent them.',
  ], null, 'Remember the order **reduce, reuse, recycle**: the best waste is the waste that is never made.',
  ['Which is the best way to deal with plastic bottles?', ['Reuse or recycle them', 'Burn them in the compound', 'Throw them into the gutter', 'Bury them in the farm'], 'Plastics do not rot, and burning them releases poisonous smoke.'],
  [['Air pollution', 'Harmful substances in the air.'], ['Refuse', 'Waste or rubbish.'], ['Recycle', 'To turn used materials into new products.']]),

  // ======================= Form 2 =======================
  L('bi-cultivate-1', 'bi-f2-husbandry', '1.1', 'Crops for fruits, seeds, leaves and roots', 8, ['Crops', 'Seed selection'], [
    'Crops are grown for different parts. **Fruits**: tomato, pineapple, mango, pawpaw, avocado and plantain. **Seeds**: maize, rice, beans, groundnuts, cocoa and coffee. **Leaves**: huckleberry (njama njama), bitterleaf (ndolé), cabbage and eru. **Roots and tubers**: cassava, cocoyam, yams and sweet potatoes. (The Irish potato is really a swollen underground stem.)',
    'Farmers get better harvests by choosing **good varieties**: varieties that give high yields, resist pests and diseases, or mature early. In Cameroon, research institutes such as **IRAD** develop improved varieties of maize, cassava and other crops.',
    'Good **seed selection** means keeping seed from the healthiest, best-yielding plants, drying it well and storing it safely. Seeds and seedlings of vegetables and tree crops are often raised in a **nursery**, where they are watered, shaded and protected, before being **transplanted** to the field.',
    'Sharing good seed with neighbours, or through farmers’ groups, spreads improved varieties through the community.',
  ], null, 'When you classify a crop, say **which part** is eaten: fruit, seed, leaf, root or stem.',
  ['Groundnuts, rice and beans are all grown for their:', ['Seeds', 'Leaves', 'Roots', 'Flowers'], 'The seed is the part we eat in each case.'],
  [['Variety', 'A type of a crop with particular features.'], ['Nursery', 'A place where young plants are raised.'], ['Transplant', 'To move a young plant from a nursery to the field.']]),

  L('bi-smallstock-1', 'bi-f2-husbandry', '1.2', 'Rearing poultry, fish and small ruminants', 8, ['Animal husbandry'], [
    '**Poultry** (chickens, ducks, guinea fowl) are easy to rear. Local chickens roam freely and find much of their food; improved **layers** give many eggs and **broilers** grow quickly for meat. They need a clean, dry house, feed, clean water and vaccination.',
    '**Fish farming**: tilapia and catfish are reared in **ponds** filled from a stream or spring. The fish are fed with bran, kitchen waste or fish feed, the water is kept clean, and the fish are harvested when they reach a good size.',
    '**Small ruminants**: goats and sheep feed on grass and leaves (browse). They need shelter from rain, clean water, salt licks and regular **deworming**. Like cattle, they chew the cud.',
    'These animals give **protein** (eggs, meat, fish, milk), **income** and **manure** for crops, and can be reared on small pieces of land near the home.',
  ], null, 'For each animal, give its **housing**, **feeding** and **health care**.',
  ['Why are goats given salt licks?', ['To supply minerals they need', 'To make them thirsty', 'To clean their teeth', 'To keep flies away'], 'Salt and other minerals keep the animals healthy.'],
  [['Poultry', 'Domestic birds kept for eggs and meat.'], ['Small ruminant', 'A goat or sheep: a small animal that chews the cud.'], ['Deworming', 'Giving medicine to remove worms.']]),

  L('bi-healthstock-1', 'bi-f2-stockhealth', '2.1', 'Keeping crops and animals healthy', 9, ['Diseases', 'Prevention'], [
    'Crops and farm animals fall ill because of **germs** (viruses, bacteria and fungi), **parasites** such as worms and ticks, **pests**, and **poor feeding**. Signs of disease in animals include not eating, dullness, diarrhoea, coughing and weight loss; in crops, spots, wilting, yellowing and rotting.',
    'Prevention is better than cure. **Vaccinate** animals against diseases such as Newcastle disease in chickens; keep their houses **clean and dry**; feed them well; **deworm** them regularly; and keep newly bought animals in **quarantine** for some weeks before mixing them with the rest. Animals with a contagious disease are **isolated**.',
    'For crops, use **resistant varieties** and clean planting material, **remove and burn** infected plants, rotate crops and keep the farm weeded.',
    'When disease appears, find its **cause** and give the right **treatment**, with the advice of an agricultural or veterinary officer. Use drugs and pesticides only as the label says, wear **protective clothing**, and never store chemicals in food containers.',
  ], null, 'Distinguish **prevention** (vaccination, hygiene, quarantine) from **treatment** (drugs, removing sick plants).',
  ['Why is a sick animal kept apart from the others?', ['To stop the disease spreading to them', 'To let it rest from noise', 'To feed it more', 'To keep it warm'], 'Isolating sick animals breaks the chain of infection.'],
  [['Quarantine', 'Keeping new or sick animals apart to check for disease.'], ['Contagious', 'Easily spread from one individual to another.'], ['Resistant variety', 'A crop variety that is not easily harmed by a disease.']]),

  L('bi-process-1', 'bi-f2-processing', '3.1', 'Turning farm produce into food', 8, ['Food processing'], [
    'Processing turns raw farm produce into foods that are easier to use, store and sell. **Flour** is made by drying and grinding maize, cassava or wheat. **Bread** is made from wheat flour, water, salt and **yeast**: the yeast feeds on sugar and gives off carbon dioxide, which makes the dough rise. **Puff-puff** is made from a yeast dough fried in oil, and **cake** from flour, eggs, sugar and fat, raised with baking powder.',
    'Milk is turned into **yoghurt** (warm milk with special bacteria that make it thick and sour), **cheese** (milk curdled and pressed) and **butter** (cream churned until the fat separates).',
    '**Palm oil** is extracted by boiling the ripe palm fruits, pounding them and pressing out the red oil, which is rich in vitamin A. In the North, **shea butter** is made from the nuts of the shea tree and used for cooking and skin care.',
    'Processing adds value: a farmer earns more by selling flour, oil or yoghurt than by selling raw produce, and less is wasted.',
  ], null, 'For each product, name the **raw material** and the **main step** that changes it.',
  ['What makes bread dough rise?', ['Carbon dioxide made by yeast', 'Steam from the oven only', 'Salt', 'Air pumped into it'], 'Yeast ferments sugar and the gas is trapped in the dough.'],
  [['Processing', 'Changing raw produce into food products.'], ['Yeast', 'A tiny fungus used to make bread rise.'], ['Churning', 'Shaking cream until butter forms.']]),

  L('bi-preserve-1', 'bi-f2-processing', '3.2', 'Preserving food', 8, ['Food preservation'], [
    'Food spoils because of **microorganisms** (bacteria and moulds), **enzymes** in the food itself and **insects**. Preserving food stops or slows these, so food keeps for longer and less is wasted.',
    '**Drying** (fish, maize, cassava chips, cocoa) and **salting** remove the water microorganisms need. **Smoking** dries meat and fish and the smoke kills germs. **Icing, refrigeration** and **freezing** slow or stop the growth of germs. **Canning** heats food and seals it in tins so no germs can enter.',
    '**Pasteurising** heats milk briefly (about 72 °C for 15 seconds) to kill harmful bacteria. **Irradiating** exposes food to radiation that kills germs. **Curing** treats meat with salt and other substances, as in ham. Adding **sugar** (jam) or **vinegar** (pickles) also stops germs growing.',
    'Good preservation lets families keep the harvest of the rainy season for the dry season and lets farmers sell their produce in distant markets.',
  ], null, 'Explain each method by **what it removes or changes**: water, temperature, germs or air.',
  ['How does drying preserve cassava chips?', ['It removes the water that microorganisms need', 'It adds sugar', 'It kills the cassava cells only', 'It makes them cold'], 'Without water, moulds and bacteria cannot grow.'],
  [['Preservation', 'Treating food so that it keeps for longer.'], ['Pasteurisation', 'Heating milk briefly to kill harmful bacteria.'], ['Canning', 'Heating food and sealing it in airtight tins.']]),

  L('bi-bmi-1', 'bi-f2-weight', '4.1', 'Body mass index and reading food labels', 9, ['BMI', 'Calculation'], [
    'The **body mass index** (BMI) helps to tell whether an adult’s weight is healthy for their height: **BMI = mass in kg ÷ (height in m)²**. For adults: below 18.5 is **underweight**, 18.5 to 24.9 is **healthy**, 25 to 29.9 is **overweight**, and 30 or more is **obese**. For children and teenagers, health workers compare BMI with charts for their age.',
    'Being underweight can mean too little food or an illness; being obese raises the risk of diabetes, high blood pressure and heart disease. Weight is controlled by eating a balanced diet and taking regular exercise.',
    '**Food labels** give useful facts: the **ingredients**, listed from the largest amount to the smallest; the **energy** and the amounts of fat, sugar, salt and protein, usually **per 100 g**; the expiry date; and how to store the food. Comparing labels helps you choose foods with less sugar, fat and salt.',
    'Projects can tackle nutrition problems in the community, for example a **school garden** of vegetables and fruit trees, or a campaign for iodised salt and red palm oil.',
  ], null, 'In a BMI calculation, **square the height first**, then divide the mass by it.',
  ['A woman is 1.60 m tall and has a mass of 80 kg. Her BMI shows that she is:', ['Obese', 'Healthy', 'Underweight', 'Overweight but not obese'], '80 ÷ (1.60 × 1.60) = 80 ÷ 2.56 = 31.3, which is above 30.'],
  [['Body mass index', 'Mass in kg divided by the square of height in m.'], ['Obese', 'Having a BMI of 30 or more.'], ['Ingredients', 'The foods and substances a product is made from.']],
  [
    { q: 'A man has a mass of 72 kg and a height of 1.75 m. Find his BMI.', steps: ['Height squared = 1.75 × 1.75 = 3.06 m².', 'BMI = 72 ÷ 3.06 = 23.5.', 'This is in the healthy range (18.5 to 24.9).'] },
    { q: 'What mass would give a 1.60 m tall woman a BMI of 25?', steps: ['Height squared = 1.60 × 1.60 = 2.56 m².', 'Mass = BMI × height squared = 25 × 2.56 = 64 kg.'] },
  ]),

  L('bi-exercise-1', 'bi-f2-fitness', '5.1', 'Exercise, sport and rest', 7, ['Physical health'], [
    'Regular **exercise** strengthens the heart, lungs, muscles and bones, helps to control weight, reduces stress and helps us sleep well. Young people should be active for about **60 minutes every day**: football, handball, athletics, dancing, cycling or simply walking briskly.',
    'Before sport, **warm up** with gentle movements and stretching to prepare the muscles; afterwards, **cool down**. Drink clean water, wear suitable shoes and stop if you feel pain or dizziness. Team sports also teach cooperation and fair play.',
    '**Rest** and **sleep** are just as important. During sleep the body repairs itself and the brain stores what was learnt. Young people need about **8 to 10 hours** of sleep a night.',
    'Plan your week with a **timetable** that includes time for study, exercise, rest, sleep, meals and helping at home.',
  ], null, 'A good timetable balances **study**, **exercise** and **rest**; too much of one and too little of the others harms health and school work.',
  ['Why should you warm up before playing football?', ['To prepare the muscles and reduce the risk of injury', 'To make you more tired', 'To stop sweating', 'To win the match'], 'Warm muscles stretch more easily and are less likely to be torn.'],
  [['Exercise', 'Physical activity that keeps the body fit.'], ['Warm-up', 'Gentle exercise to prepare the body for sport.'], ['Timetable', 'A plan of activities and times.']]),

  L('bi-drugs-1', 'bi-f2-fitness', '5.2', 'Alcohol, cigarettes and drugs', 8, ['Health', 'Life skills'], [
    '**Alcohol** slows down the brain: it affects judgement and reactions, causes accidents and violence, and over many years damages the liver, heart and brain. It is especially harmful to young people, whose brains are still developing.',
    '**Cigarettes** contain **nicotine**, which is addictive, and their smoke contains **tar**, which causes lung cancer, and **carbon monoxide**, which harms the heart and blood. Breathing in other people’s smoke (**passive smoking**) also harms health. Shisha is not safer than cigarettes.',
    '**Drugs** such as cannabis, glue sniffing and the misuse of painkillers such as **tramadol** can cause **addiction**, mental illness, poor school work, crime and early death.',
    'You can protect yourself by saying **no** clearly, avoiding places where drugs are used, choosing good friends and asking a trusted adult for help. Posters, slogans and talks help others understand the dangers.',
  ], null, 'For each substance, name **one effect on the body** and **one effect on the person’s life**.',
  ['Which part of cigarette smoke causes lung cancer?', ['Tar', 'Nicotine', 'Oxygen', 'Water vapour'], 'Tar coats the airways and contains cancer-causing substances; nicotine causes addiction.'],
  [['Addiction', 'A strong need to keep taking a substance.'], ['Nicotine', 'The addictive substance in tobacco.'], ['Passive smoking', 'Breathing in smoke from other people’s cigarettes.']]),

  L('bi-reprohygiene-1', 'bi-f2-reprohealth', '6.1', 'Caring for the reproductive organs', 7, ['Hygiene', 'Health'], [
    'The reproductive organs need daily care. Wash the outside of the genitals every day with clean water and mild soap, and wear **clean cotton underwear**, changed daily. Boys should clean under the foreskin if they are not circumcised.',
    'During menstruation girls should **change sanitary pads** every few hours, wash regularly and wrap and dispose of used pads properly. Washing inside the body with strong chemicals, perfumes or herbs is harmful.',
    'Signs such as **itching, unusual discharge, a bad smell, pain or sores** may mean an infection. The person should go to a **health centre**, with their partner if they have one, accept **screening** for STIs if advised, and take the **complete treatment**.',
  ], null, 'Mention **daily washing**, **clean cotton underwear** and **seeing a health worker** when there are signs of infection.',
  ['How often should a girl change her sanitary pad?', ['Every few hours during her period', 'Once a week', 'Only at the end of her period', 'Never'], 'Germs grow in used pads, so changing them often prevents infection and odour.'],
  [['Personal hygiene', 'Keeping your body clean to stay healthy.'], ['Discharge', 'Fluid coming from the genitals.'], ['Screening', 'Testing for an infection, even without signs.']]),

  L('bi-harmful-1', 'bi-f2-reprohealth', '6.2', 'Speaking out against harmful practices', 8, ['Rights', 'Advocacy'], [
    'Some cultural and new practices harm health. **Early and forced marriage** of girls ends their schooling and puts them at risk in early pregnancy. **Female genital mutilation** causes severe pain, bleeding, infection and problems in childbirth; it is against the law in Cameroon. **Breast ironing**, pressing a girl’s developing breasts with hot objects to hide them, causes pain, burns, infections and lasting damage.',
    'Other harmful practices include harmful widowhood rites, denying girls education, putting unclean substances on a newborn’s cord, **skin bleaching** with dangerous creams, and taking medicines from street sellers.',
    '**Advocacy** means speaking up to change a harmful practice. The steps are: **identify the problem**; prepare clear **messages and slogans**; identify the **policy makers** who can bring change (parents, chiefs, religious leaders, mayors, school authorities); plan how to reach them; and give the message the **widest publicity** possible through radio, posters, school clubs and community meetings.',
  ], null, 'In advocacy questions, follow the steps: **problem**, **message**, **target**, **strategy** and **publicity**.',
  ['Who is a policy maker in a campaign against early marriage in a village?', ['The village chief and council', 'A small child', 'A visiting tourist', 'A shop customer'], 'Chiefs and councils have the power to change local customs and rules.'],
  [['Harmful practice', 'A custom or habit that damages health or rights.'], ['Advocacy', 'Speaking up to bring about change.'], ['Policy maker', 'A person with the power to make or change rules.']]),

  L('bi-greenhouse-1', 'bi-f2-climate', '7.1', 'Greenhouse gases and global warming', 8, ['Climate change'], [
    'Some gases in the air, called **greenhouse gases**, trap heat given off by the Earth and keep it warm. The main ones are **carbon dioxide** (from burning fuel, wood and charcoal, and from cutting down forests), **methane** (from rubbish dumps, rice fields and cattle) and **nitrous oxide** (from fertilisers).',
    'People are adding more of these gases, so the Earth is getting warmer: **global warming**. In Cameroon this brings more irregular rains, longer droughts in the North, floods in towns, heat waves, poorer harvests and the shrinking of Lake Chad.',
    'We can reduce global warming by **planting trees**, saving energy, using clean energy such as solar and hydroelectric power, avoiding bush fires, using improved cooking stoves, and joining campaigns and educational talks on the effects of greenhouse gases.',
  ], null, 'Link each greenhouse gas to its **source** and give one **action** that reduces it.',
  ['Which action reduces the amount of carbon dioxide in the air?', ['Planting trees', 'Burning the bush', 'Using more charcoal', 'Cutting down forests'], 'Trees take in carbon dioxide during photosynthesis.'],
  [['Greenhouse gas', 'A gas that traps heat in the atmosphere.'], ['Global warming', 'The rise in the average temperature of the Earth.'], ['Methane', 'A greenhouse gas made by decaying waste and cattle.']]),

  L('bi-ozone-1', 'bi-f2-climate', '7.2', 'The ozone layer', 7, ['Ozone layer'], [
    'High above the Earth, about 15 to 35 km up, is a layer of **ozone** gas. It acts like a shield, absorbing most of the sun’s harmful **ultraviolet (UV) rays**.',
    'Chemicals called **CFCs**, once used in refrigerators, air conditioners and aerosol sprays, and **halons** from some fire extinguishers, rise into the upper air and destroy ozone. Where the layer becomes thin, more UV reaches the ground.',
    'More UV causes **sunburn, skin cancer, eye cataracts** and weaker defences against disease, and harms crops and sea life. People with albinism are especially at risk.',
    'Under the **Montreal Protocol** (1987), which Cameroon has signed, countries agreed to stop making ozone-destroying chemicals. We can help by disposing of old refrigerators and air conditioners properly and buying products labelled ozone-friendly.',
  ], null, 'Do not confuse the two problems: **greenhouse gases** cause global warming; **CFCs** destroy the **ozone layer**.',
  ['What does the ozone layer protect us from?', ['Harmful ultraviolet rays from the sun', 'Rain', 'Carbon dioxide', 'Strong winds'], 'Ozone absorbs most of the sun’s UV radiation.'],
  [['Ozone layer', 'A layer of ozone gas high in the atmosphere that absorbs UV rays.'], ['CFCs', 'Chemicals that destroy ozone.'], ['Ultraviolet rays', 'Invisible rays from the sun that can damage skin and eyes.']]),

  L('bi-biodiv-1', 'bi-f2-biodiversity', '8.1', 'Why biodiversity matters and how to protect it', 9, ['Biodiversity', 'Laws'], [
    '**Biodiversity** is the variety of living things: plants, animals, fungi and microorganisms, and the forests, savannas, rivers and mountains where they live. Cameroon, with its rainforests, highlands, savannas and coast, is one of the richest countries in Africa for biodiversity.',
    'Biodiversity keeps **ecosystems** working: plants make oxygen and food, bees pollinate crops, decomposers recycle nutrients and forests protect water and soil. It also supports the **economy**: food, timber, medicines, fishing and **tourism** in parks such as Waza and Korup.',
    'Biodiversity is lost through **deforestation**, **poaching** (illegal hunting of protected animals such as elephants, gorillas and pangolins), **overfishing**, overexploitation of timber and wild plants, pollution and bush fires. When species die out (**extinction**), food chains are broken and resources are lost for ever.',
    'Cameroon has laws against poaching and over-exploitation, and creates **national parks and reserves**. Citizens can respect these laws, refuse to buy the meat of protected animals, plant trees and start **school projects**: tree nurseries, wildlife clubs and clean-up campaigns.',
  ], null, 'When asked why biodiversity matters, give both an **ecological** reason and an **economic** reason.',
  ['Which is an example of poaching?', ['Killing an elephant for its ivory in a national park', 'Rearing goats', 'Planting a tree nursery', 'Fishing with a licence'], 'Elephants are protected; killing them is illegal.'],
  [['Biodiversity', 'The variety of living things in an area.'], ['Extinction', 'The complete disappearance of a species.'], ['Poaching', 'Illegal hunting of protected animals.']]),

  L('bi-disaster-1', 'bi-f2-disaster', '9.1', 'Natural disasters: warning, preparing and recovering', 9, ['Disasters', 'Safety'], [
    'A **natural disaster** is a natural event that causes great loss of life and property. Cameroon has known **floods** (in Douala, Limbe and the Far North), **landslides** (such as at Gouache in Bafoussam in 2019), **volcanic eruptions** of Mount Cameroon (1999 and 2000), **gas disasters** (Lake Monoun in 1984 and **Lake Nyos in 1986**, when a cloud of carbon dioxide killed about 1700 people), **droughts**, bush fires and storms.',
    'Disasters follow a **cycle**: **prevention** (reducing the risk), **preparedness** (being ready), **response** (rescue and relief when it happens) and **recovery** (rebuilding), which leads back to prevention.',
    '**Early warning systems** give people time to act: weather forecasts, watching river levels, warning signs of landslides (new cracks, leaning trees, sudden springs) and the pipes that now release gas slowly from the bottom of Lake Nyos. Warnings are spread by radio, telephones and community leaders.',
    'A community **disaster management plan** lists the dangers, safe places and evacuation routes, who to call, and actions such as clearing gutters, not building on riverbanks or steep slopes, and planting trees. After a disaster, the environment is **restored** by replanting, repairing drainage and rebuilding more safely.',
  ], null, 'Learn the **four stages** of the disaster cycle and give one action for each stage.',
  ['Which belongs to the preparedness stage of the disaster cycle?', ['Planning evacuation routes before the rainy season', 'Rebuilding houses after a flood', 'Rescuing people during a landslide', 'Counting the damage afterwards'], 'Preparedness means being ready before the disaster strikes.'],
  [['Natural disaster', 'A natural event that causes great loss.'], ['Early warning system', 'A way of alerting people before a disaster.'], ['Evacuation', 'Moving people away from danger.']]),
];
