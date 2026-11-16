// Home Economics lessons for Form 1 (first part): what Home Economics is,
// careers and small businesses, health and eating habits, the food groups,
// malnutrition, personal hygiene, puberty, environmental hygiene, the family
// and caring for the rooms of the house. Built around Cameroonian homes, foods
// and markets. Original text written for this app. **double asterisks** mark key
// terms. `examples` are worked examples.

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

export const LESSONS_1A = [
  // ---------- 1. What Home Economics is ----------
  L('he-meaning-1', 'he-f1-intro', '1.1', 'The meaning of Home Economics and the resources of a family', 10, ['Introduction'], [
    '**Home Economics** is the study of how people use their **resources** to meet their needs for food, clothing, shelter and a good family life, so that they live healthy and comfortable lives. "Home" is where the family lives; "economics" here means managing what you have wisely. In French the subject is called **Économie sociale et familiale**.',
    'A **resource** is anything we use to reach a goal. **Human resources** come from people: **time**, **energy**, **skills**, **knowledge** and **attitudes** such as patience. **Material resources** are things we can see and touch: **money**, **food**, **land**, **water**, **equipment** and the house itself. Community resources, such as markets, health centres, schools and roads, also help families.',
    'Resources are **limited**: a family has only so much money and each day has only 24 hours. Home Economics teaches us to **plan**, **choose** and **use** resources so that nothing is wasted. The subject is for **boys and girls alike**: everyone eats, dresses, keeps a home and will one day manage money.',
  ], 'he1-resources', 'Human resources come from people; material resources are things.',
  ['Which of these is a human resource?', ['Skill in cooking', 'A bag of rice', 'A gas cooker', 'A plot of land'], 'Skills come from people.'],
  [['Home Economics', 'The study of how people use their resources to care for themselves, their families and their homes.'], ['Resource', 'Anything used to reach a goal, such as time, money or skills.'], ['Human resource', 'A resource that comes from people: time, energy, skills, knowledge.'], ['Material resource', 'A resource we can see and touch: money, food, land, equipment.']],
  [
    { q: 'Mbah wants to cook a meal for the family. Name two human and two material resources she will use.', steps: ['**Human**: her **time** and her **cooking skill** (or her energy and knowledge of recipes).', '**Material**: the **food** (for example rice and fish) and the **cooking pot** and fire (or money to buy the food).'] },
  ]),

  L('he-branches-1', 'he-f1-intro', '1.2', 'The branches of Home Economics and why it matters', 10, ['Introduction'], [
    'Home Economics has several **branches** (areas of study):\n- **Food and nutrition**: nutrients, healthy diets, cooking, food hygiene and preservation\n- **Clothing and textiles**: fibres and fabrics, sewing, choosing and caring for clothes\n- **Home management**: using money, time and energy well, caring for the house, consumer education\n- **Family and child development**: family life, relationships, the care of babies and children.\nMany books also treat **consumer education** (buying wisely) as a branch of its own.',
    'The name "home economics" was adopted at the **Lake Placid conferences** in the United States (from **1899**), led by the chemist **Ellen Swallow Richards**, who wanted science to improve life at home.',
    '**Why it matters.** For the **person**: healthy habits, practical skills (cooking, sewing, budgeting) and the means to earn a living. For the **family**: good meals, a clean home, wise spending and happy relationships. For the **nation**: healthy, skilled and self-reliant citizens, fewer diseases, and jobs in catering, fashion, hotels and food processing.',
  ], 'he1-branches', 'Four branches: food, clothing, home management, family life.',
  ['Sewing and the care of clothes belong to which branch?', ['Clothing and textiles', 'Food and nutrition', 'Home management', 'Family and child development'], 'Textiles are fabrics.'],
  [['Branch', 'One area of study within a subject.'], ['Nutrition', 'The study of food and how the body uses it.'], ['Textiles', 'Fibres and fabrics, and articles made from them.'], ['Self-reliant', 'Able to meet your own needs without depending on others.']],
  [
    { q: 'Give one way Home Economics helps the person, the family and the nation.', steps: ['**Person**: they learn to cook healthy meals, so they stay healthy.', '**Family**: a good budget helps the family spend money wisely.', '**Nation**: trained caterers, tailors and dietitians create jobs and keep people healthy.'] },
  ]),

  // ---------- 2. Careers ----------
  L('he-careers-1', 'he-f1-careers', '2.1', 'Careers in Home Economics', 10, ['Careers'], [
    'Every branch of Home Economics leads to **jobs**:\n- **Food and nutrition**: **dietitian** (plans diets for patients), **nutritionist**, **chef** or cook, **caterer**, **baker** and pastry cook, food technologist in factories\n- **Clothing and textiles**: **tailor** or dressmaker, **fashion designer**, textile designer, seller of fabrics\n- **Home management**: **hotel and restaurant manager**, housekeeper in hotels and hospitals, **interior decorator**, event planner, consumer adviser\n- **Family and child development**: **nursery and day-care worker**, social worker, community and agricultural **extension worker**\n- in every branch: **Home Economics teacher**.',
    'Cameroon has a growing demand for these skills: hotels and restaurants, wedding and funeral catering, tailoring workshops in every town, bakeries, and companies that process food such as cassava, cocoa and palm oil. Training is given in technical colleges (for example in **hotel management and catering** and in **clothing and fashion**), and in higher schools and universities.',
  ], 'he1-careers', 'Each branch of the subject opens its own doors to work.',
  ['A person who plans special diets for hospital patients is a:', ['Dietitian', 'Tailor', 'Housekeeper', 'Fashion designer'], 'Food and nutrition.'],
  [['Career', 'The job or series of jobs a person does during their working life.'], ['Dietitian', 'A trained person who plans diets, often for sick people.'], ['Caterer', 'A person who prepares and serves food for events.'], ['Extension worker', 'A person who teaches families and farmers new skills in their community.']],
  [
    { q: 'Nkeng loves sewing and drawing clothes. Suggest two careers for her and the branch they come from.', steps: ['**Fashion designer**: she would create new styles.', '**Tailor or dressmaker**: she would make garments for customers.', 'Both come from the branch **clothing and textiles**.'] },
  ]),

  L('he-enterprise-1', 'he-f1-careers', '2.2', 'Starting a small business with Home Economics skills', 10, ['Careers', 'Entrepreneurship'], [
    'An **entrepreneur** is a person who sees a **need**, starts a **business** to meet it and takes the **risk** of running it. Home Economics skills allow small businesses that need little money to start: selling **puff-puff and beans**, **akara**, roasted plantain and fish, fruit juice or yoghurt; baking cakes and bread; **catering** for ceremonies; **tailoring** and mending; making soap or detergents; a laundry and ironing service; decorating halls for events; looking after small children.',
    '**Steps to start a small business**:\n- find out what people **need** and will pay for\n- **plan**: what you will sell, where, to whom and at what price\n- work out the **start-up money** (capital) and find it (savings, family)\n- **start small**, keep the place and the products **clean**\n- **keep records** of money in and money out, and reinvest part of the profit.',
    '**Qualities of a good entrepreneur**: hard work, **honesty** (fair quantities and prices), creativity, good **customer care**, patience, and the courage to take small, careful risks.',
  ], 'he1-enterprise', 'Start with a real need, start small and keep records.',
  ['Before starting a small business, the first step is to:', ['Find out what people need and will buy', 'Borrow a large loan', 'Buy expensive equipment', 'Give credit to everyone'], 'A business meets a need.'],
  [['Entrepreneur', 'A person who starts and runs their own business and takes its risks.'], ['Capital', 'The money needed to start a business.'], ['Profit', 'Money left after paying all the costs.'], ['Record keeping', 'Writing down all money received and spent.']],
  [
    { q: 'Ebai spends 3 000 FCFA on flour, sugar, oil and yeast and sells puff-puff for 4 500 FCFA. What is the profit?', steps: ['Profit = sales − costs.', '4 500 − 3 000 = **1 500 FCFA**.', 'Ebai should keep part of this to buy the next ingredients.'] },
  ]),

  // ---------- 3. Health ----------
  L('he-health-1', 'he-f1-health', '3.1', 'What health is and the factors that keep us healthy', 10, ['Health'], [
    'The **World Health Organization** (WHO) defines **health** as "a state of complete physical, mental and social well-being and not merely the absence of disease or infirmity". So health has three sides: the **body** (physical), the **mind** (mental) and our **relationships** with others (social).',
    'The main **factors associated with health** are:\n- **diet**: eating a balanced diet and drinking clean water\n- **exercise**: children and adolescents need about **60 minutes** of physical activity a day (walking, games, sport, farm and house work); exercise strengthens the heart, muscles and bones\n- **rest and sleep**: sleep repairs the body and helps memory; children of 6 to 12 years need about **9 to 12 hours** a night and teenagers about **8 to 10 hours**\n- **hygiene**: a clean body, clean clothes and clean surroundings\n- **avoiding harmful substances**: alcohol, tobacco and drugs\n- **regular medical check-ups**, vaccination and sleeping under a treated mosquito net.',
  ], 'he1-health', 'Health = body + mind + relationships.',
  ['The three sides of health in the WHO definition are:', ['Physical, mental and social', 'Food, money and clothes', 'Morning, afternoon and night', 'Hands, feet and head'], 'Well-being of body, mind and relationships.'],
  [['Health', 'Complete physical, mental and social well-being, not only the absence of disease.'], ['Exercise', 'Physical activity that keeps the body fit.'], ['Mental health', 'Well-being of the mind: coping with daily life and feelings.']],
  [
    { q: 'Tabi sleeps at 1 a.m. every night because of a phone and wakes at 6 a.m. Explain the problem and give advice.', steps: ['Tabi sleeps only **5 hours**, far less than the 8 to 12 hours a young person needs.', 'Lack of sleep causes **tiredness**, poor **concentration** at school and weaker health.', 'Advice: put the phone away early and sleep at a **regular time**, for example 9 p.m.'] },
  ]),

  L('he-habits-1', 'he-f1-health', '3.2', 'Healthy and unhealthy eating habits', 9, ['Health', 'Nutrition'], [
    '**Eating habits** are the ways we usually choose and eat food. **Healthy habits**:\n- eat **three meals** a day at regular times, starting with **breakfast**\n- eat a **variety** of foods from all the food groups\n- eat plenty of **fruits and vegetables**\n- drink **clean water** rather than sugary drinks\n- use **salt**, stock cubes, sugar and oil in small amounts\n- wash hands before eating and eat slowly, chewing well\n- eat fresh food rather than very processed snacks.',
    '**Unhealthy habits**: skipping meals, eating mostly fried snacks and sweets, drinking many soft drinks, eating late at night and then sleeping at once, overeating, and eating while watching a screen without noticing how much you eat.',
    'Over many years, unhealthy habits can lead to **obesity**, **tooth decay**, **diabetes** and **high blood pressure** (from too much salt). Good habits started young usually last for life.',
  ], 'he1-habits', 'Water first, breakfast always, salt and sugar in small amounts.',
  ['Which is an unhealthy eating habit?', ['Drinking soft drinks with every meal', 'Eating breakfast', 'Eating fruit daily', 'Washing hands before eating'], 'Soft drinks are full of sugar.'],
  [['Eating habit', 'The usual way a person chooses and eats food.'], ['Obesity', 'Having far too much body fat, which harms health.'], ['Processed food', 'Food changed in a factory, often with added salt, sugar or fat.']],
  [
    { q: 'Write down two unhealthy habits in this day and correct them: no breakfast, a soft drink and doughnuts at break, rice at 10 p.m.', steps: ['**No breakfast**: eat breakfast, for example pap with groundnuts or bread with an egg.', '**Soft drink and doughnuts**: replace with water and a fruit or roasted groundnuts.', '**Late dinner**: eat the evening meal earlier, at least two hours before sleeping.'] },
  ]),

  // ---------- 4. Food groups ----------
  L('he-foodgroups-1', 'he-f1-foodgroups', '4.1', 'The three food groups and their functions', 10, ['Nutrition'], [
    'Foods are grouped by the **main work** they do in the body:\n- **Energy-giving foods** are rich in **carbohydrates** (starches and sugars) and **fats and oils**. They give energy for work, play and keeping warm. Examples: cassava, yam, cocoyam, plantain, maize, rice, millet, bread, sweet potatoes, palm oil, groundnut oil.\n- **Body-building foods** are rich in **proteins**. They build and repair the body (muscles, skin, blood). Examples: beans, groundnuts, soya, egusi, eggs, fish, crayfish, meat, snails, milk.\n- **Protective foods** are rich in **vitamins and minerals**. They protect the body against disease and keep the eyes, skin, blood and bones healthy. Examples: njama-njama (huckleberry leaves), bitter leaf, okra, tomatoes, carrots, oranges, mangoes, pawpaw, pineapple, guava, avocado.',
    '**Water** and **fibre** (roughage) are needed every day too: water carries nutrients and removes waste; fibre from vegetables, fruit and whole grains keeps the bowels moving.',
  ], 'he1-foodgroups', 'Go, Grow, Glow: energy (go), body-building (grow), protective (glow).',
  ['Fish and beans belong to which food group?', ['Body-building foods', 'Energy-giving foods', 'Protective foods', 'Drinks'], 'They are rich in protein.'],
  [['Energy-giving foods', 'Foods rich in carbohydrates and fats that give the body energy.'], ['Body-building foods', 'Foods rich in protein that build and repair the body.'], ['Protective foods', 'Foods rich in vitamins and minerals that protect the body.'], ['Staple food', 'The main food eaten regularly in an area, such as cassava or maize.']],
  [
    { q: 'Put these foods into their groups: yam, egg, pawpaw, groundnut oil, crayfish, okra.', steps: ['**Energy-giving**: yam, groundnut oil.', '**Body-building**: egg, crayfish.', '**Protective**: pawpaw, okra.'] },
  ]),

  L('he-mealplan-1', 'he-f1-foodgroups', '4.2', 'Building a meal from the food groups', 9, ['Nutrition', 'Meal planning'], [
    'A good meal has a food from **each group**. A simple guide is the **healthy plate**: fill about **half** the plate with **vegetables and fruit**, about **a quarter** with an **energy-giving staple**, and about **a quarter** with a **body-building food**; drink **water** with the meal and use only a little oil.',
    'Many Cameroonian dishes already join the groups: **corn fufu with njama-njama and fish**; **ndolé with plantain and meat**; **achu with yellow soup and cow skin**; **koki beans with ripe plantain** and a fruit; **rice with tomato stew, fish and a salad**. A meal of only starch, such as garri with sugar or rice with spaghetti, gives energy but lacks protein and protection.',
    'To improve a meal cheaply, add **beans, groundnuts, egusi or crayfish** for protein, and **leaves or a fruit in season** for vitamins.',
  ], 'he1-plate', 'Half plate vegetables and fruit, a quarter staple, a quarter protein.',
  ['On the healthy plate, about half the plate should be:', ['Vegetables and fruit', 'Rice', 'Meat', 'Oil'], 'Then a quarter staple and a quarter protein.'],
  [['Healthy plate', 'A guide showing the share of each food group in a meal.'], ['Balanced meal', 'A meal with foods from every food group in the right amounts.']],
  [
    { q: 'Improve this lunch: boiled rice and spaghetti with oil.', steps: ['It has only **energy-giving** foods.', 'Add a **body-building** food: fish, beans or an egg.', 'Add a **protective** food: a vegetable sauce or a slice of pawpaw, and reduce the spaghetti.'] },
  ]),

  // ---------- 5. Malnutrition ----------
  L('he-malnutrition-1', 'he-f1-deficiency', '5.1', 'Malnutrition and hidden hunger', 10, ['Nutrition', 'Health'], [
    '**Malnutrition** means poor nutrition. It has two sides:\n- **undernutrition**: too little food or too little of some nutrients, leading to thinness, slow growth and illness\n- **overnutrition**: too much food, especially fat and sugar, leading to obesity, diabetes and heart disease.',
    '**Hidden hunger** is a lack of **micronutrients** (vitamins and minerals) even when a person eats enough to feel full, for example a child who eats only cassava every day. It is "hidden" because there may be no visible signs at first. The most common are:\n- **iron** deficiency: **anaemia** (tiredness, pale eyelids and palms)\n- **vitamin A** deficiency: **night blindness** and frequent infections\n- **iodine** deficiency: **goitre** (a swollen neck) and poor brain development; prevented by **iodised salt**\n- **vitamin C** deficiency: **scurvy** (bleeding gums).',
    '**Causes of malnutrition**: poverty, poor knowledge of nutrition, large families sharing little food, illness such as diarrhoea and worms, early stopping of breastfeeding, and food taboos that keep eggs or meat from children.',
  ], 'he1-malnutrition', 'Feeling full is not the same as being well fed.',
  ['A child who eats only cassava may feel full but suffer from:', ['Hidden hunger', 'Obesity only', 'Food poisoning', 'Too much protein'], 'Cassava lacks many vitamins and minerals.'],
  [['Malnutrition', 'Poor nutrition, from too little, too much or the wrong balance of nutrients.'], ['Hidden hunger', 'A lack of vitamins and minerals in a person who eats enough to feel full.'], ['Anaemia', 'A lack of healthy red blood cells, often caused by lack of iron.'], ['Goitre', 'A swelling of the neck caused by lack of iodine.']],
  [
    { q: 'A girl is always tired and her palms and eyelids are pale. Which deficiency is likely and which foods help?', steps: ['The signs suggest **anaemia**, from lack of **iron**.', 'Iron-rich foods: **liver, meat, fish, beans** and **dark green leaves** such as njama-njama and bitter leaf.', 'She should also see a health worker.'] },
  ]),

  L('he-kwashiorkor-1', 'he-f1-deficiency', '5.2', 'Kwashiorkor and marasmus', 10, ['Nutrition', 'Health'], [
    '**Kwashiorkor** is a severe form of malnutrition caused mainly by **lack of protein**, often in children of 1 to 4 years when they stop breastfeeding and eat only starchy foods. The name comes from the **Ga language of Ghana**. Signs: **swelling (oedema)** of the feet, legs and face; a swollen belly; **pale, thin, reddish hair**; patches of peeling skin; weak muscles; the child is sad, quiet and has no appetite.',
    '**Marasmus** is caused by a severe lack of **all foods**, especially **energy** and protein: the child is starving. It is common in babies. Signs: **extreme thinness** ("skin and bones"), an **old-looking face**, loose wrinkled skin, no swelling, and the child is often hungry and irritable.',
    '**Prevention**: breastfeed babies, then add **protein foods** (beans, groundnuts, eggs, fish, crayfish, soya) to the child’s food from about 6 months; feed children several times a day; treat diarrhoea and worms; vaccinate; and teach families about nutrition. Both diseases need **treatment at a health centre**, where the child is fed carefully step by step.',
  ], 'he1-kwashiorkor', 'Kwashiorkor swells; marasmus wastes.',
  ['A starving baby who is very thin with an old-looking face and no swelling has:', ['Marasmus', 'Kwashiorkor', 'Goitre', 'Obesity'], 'Severe wasting without oedema.'],
  [['Kwashiorkor', 'Severe malnutrition caused mainly by lack of protein, with swelling.'], ['Marasmus', 'Severe malnutrition caused by lack of all foods, with extreme thinness.'], ['Oedema', 'Swelling caused by water collecting in the body.'], ['Weaning', 'Moving a baby from breast milk to other foods.']],
  [
    { q: 'Give two differences between kwashiorkor and marasmus.', steps: ['**Cause**: kwashiorkor is mainly lack of **protein**; marasmus is lack of **all foods** (energy and protein).', '**Swelling**: kwashiorkor has **oedema**; marasmus has **none**, only extreme thinness.', '**Mood and appetite**: a child with kwashiorkor has little appetite; a child with marasmus is often hungry.'] },
  ]),

  // ---------- 6. Personal hygiene ----------
  L('he-skin-1', 'he-f1-personal', '6.1', 'Personal hygiene and the care of the skin', 9, ['Personal hygiene', 'Health'], [
    '**Personal hygiene** is keeping your body, hair and clothes clean to stay healthy and feel confident. It prevents diseases such as skin infections, scabies, ringworm, eye infections and diarrhoea, and it helps us to be accepted by others.',
    'The **skin** protects the body, controls temperature through **sweat** and feels heat, cold and pain. Sweat itself has little smell, but **bacteria** on the skin break it down and cause **body odour**, especially under the arms, on the feet and in the groin.',
    '**Care of the skin**: bath at least **once a day**, and twice in hot weather or after sport, with clean water and soap; wash well under the arms, between the toes and the private parts; dry with a clean personal towel; wear clean, loose cotton underwear and socks and change them daily; use a deodorant if needed; wash hands after using the toilet and before eating; treat cuts and do not share towels, combs or razors.',
  ], 'he1-hygiene', 'Daily bath, clean underwear, your own towel.',
  ['Body odour is caused by:', ['Bacteria breaking down sweat', 'Drinking water', 'Eating vegetables', 'Wearing clean clothes'], 'Washing removes the bacteria and sweat.'],
  [['Personal hygiene', 'Keeping your own body, hair and clothes clean.'], ['Body odour', 'An unpleasant smell from sweat broken down by bacteria.'], ['Deodorant', 'A product that reduces body odour.'], ['Scabies', 'An itchy skin disease caused by tiny mites, spread by close contact and shared clothes.']],
  [
    { q: 'After football, Fon puts his uniform back on without bathing. Give two problems and two pieces of advice.', steps: ['Problems: **body odour**, and sweat and dirt left on the skin can cause **skin infections**.', 'Advice: **bath** with soap and dry with his own towel.', 'Advice: put on **clean clothes** and wash the sports kit.'] },
  ]),

  L('he-teeth-hair-1', 'he-f1-personal', '6.2', 'Care of the teeth, hair and nails', 10, ['Personal hygiene', 'Health'], [
    '**Teeth.** A sticky layer called **plaque** forms on the teeth. Its **bacteria** feed on **sugar** and make **acid**, which dissolves the hard **enamel** and makes holes (**tooth decay** or cavities) and toothache. Plaque also makes the gums red and bleeding. Care: brush **twice a day** (morning and before bed) for about **two minutes** with a **fluoride toothpaste**, cleaning all surfaces; a chewing stick also cleans well; eat fewer sweets and soft drinks; replace the toothbrush about every **three months**; visit a dentist.',
    '**Hair.** Wash the hair regularly with soap or shampoo, rinse well and comb or brush it daily. Dirty hair may carry **lice**, small insects that suck blood and cause itching; their eggs (nits) stick to the hair. Do not share combs and caps.',
    '**Nails.** Keep fingernails and toenails **short and clean**; cut them straight across with clean clippers; scrub under the nails; do not bite them, because dirt under the nails carries **germs** and worm eggs to the mouth.',
  ], 'he1-tooth-decay', 'Sugar plus plaque bacteria makes acid; acid makes holes.',
  ['Tooth decay starts when bacteria in plaque feed on sugar and make:', ['Acid', 'Fluoride', 'Calcium', 'Saliva'], 'The acid dissolves enamel.'],
  [['Plaque', 'A sticky layer of bacteria on the teeth.'], ['Enamel', 'The hard outer covering of a tooth.'], ['Fluoride', 'A mineral in toothpaste that makes enamel stronger.'], ['Lice', 'Small insects that live in hair and suck blood.']],
  [
    { q: 'Explain, step by step, how eating sweets can lead to toothache.', steps: ['Sugar from the sweets stays on the teeth.', '**Bacteria in plaque** feed on the sugar and produce **acid**.', 'The acid dissolves the **enamel** and makes a hole (cavity).', 'When the hole reaches the inner part of the tooth, it causes **toothache**.'] },
  ]),

  // ---------- 7. Puberty ----------
  L('he-puberty-body-1', 'he-f1-puberty', '7.1', 'Puberty: the physical changes', 10, ['Puberty', 'Health'], [
    '**Adolescence** is the period between childhood and adulthood (about 10 to 19 years). **Puberty** is the part of it when the body changes into an adult body able to reproduce. It is caused by **hormones**. It usually starts in **girls between about 8 and 13** and in **boys between about 9 and 14**; everyone has their own timing, so early or late changes are normal.',
    '**Changes in girls**: breasts develop; hips widen; **menstruation** (periods) begins; hair grows in the armpits and the pubic area. **Changes in boys**: the **voice breaks** and becomes deeper; hair grows on the face, chest, armpits and pubic area; shoulders broaden and muscles grow; the penis and testes grow; some boys have **wet dreams** (release of semen during sleep). **Changes in both**: a **growth spurt** (growing taller quickly), more **sweat** and body odour, **pimples** (acne) from oily skin, and growth of the sex organs.',
    '**Menstrual hygiene**: use clean sanitary pads or clean cloths, change them at least every **4 to 6 hours** or sooner, wash the body daily, wrap used pads and put them in a bin with a lid, and keep a calendar of periods. Bathing more often and wearing clean underwear helps both boys and girls during puberty.',
  ], 'he1-puberty', 'Same journey, different timetables: everyone changes at their own pace.',
  ['The voice breaking is a change of puberty in:', ['Boys', 'Girls', 'Babies', 'Both, always at age 5'], 'The voice box grows.'],
  [['Puberty', 'The time when a child’s body becomes an adult body able to reproduce.'], ['Adolescence', 'The period between childhood and adulthood.'], ['Hormone', 'A chemical messenger made in the body that controls growth and changes.'], ['Menstruation', 'The monthly flow of blood from the womb in girls and women.']],
  [
    { q: 'Sort these changes into girls only, boys only and both: periods begin, voice deepens, growth spurt, pimples, beard grows, hips widen.', steps: ['**Girls only**: periods begin, hips widen.', '**Boys only**: voice deepens, beard grows.', '**Both**: growth spurt, pimples.'] },
  ]),

  L('he-puberty-feelings-1', 'he-f1-puberty', '7.2', 'Emotional and social changes, and coping', 9, ['Puberty', 'Health'], [
    '**Emotional changes**: mood swings (happy one moment, sad or angry the next), being shy about the changing body, a stronger wish for **independence** and privacy, new feelings of attraction, and worry about looks. These come from changing hormones and from growing up, and they are normal.',
    '**Social changes**: friends become very important; young people want to belong to a group; they may disagree more with parents; they begin to form their own opinions and values. **Peer pressure** (the influence of friends of the same age) can be **good** (studying together, sport) or **bad** (smoking, alcohol, drugs, early sexual activity, bullying).',
    '**Coping well**: talk to a **parent, teacher, counsellor or health worker** you trust; eat well, exercise and sleep enough; keep up personal hygiene; choose friends who respect you; learn to say **no** firmly to what is harmful; and be patient with your own body and with others whose bodies change at a different time. Never mock a classmate for early or late changes.',
  ], 'he1-adolescence', 'It is normal to feel up and down; it helps to talk.',
  ['Peer pressure means the influence of:', ['Friends of your own age', 'Your grandparents', 'The weather', 'Teachers only'], 'Peers are people of the same age.'],
  [['Mood swing', 'A quick change from one feeling to another.'], ['Peer', 'A person of the same age or group as you.'], ['Peer pressure', 'The influence of peers to think or act like them.'], ['Counsellor', 'A trained person who listens and gives advice.']],
  [
    { q: 'Friends tell Ngum to try a cigarette "to be one of us". How can she respond?', steps: ['Say **no** clearly: "No thanks, I don’t smoke."', 'Give a reason if she wants: smoking harms the lungs and costs money.', 'Move away and spend time with friends who respect her choice; talk to a trusted adult if the pressure continues.'] },
  ]),

  // ---------- 8. Environmental hygiene ----------
  L('he-householdwaste-1', 'he-f1-environment', '8.1', 'Household waste and its safe disposal', 10, ['Environmental hygiene'], [
    '**Environmental hygiene** is keeping our surroundings (house, compound, school, market, streets, water sources) clean and safe, so that germs, flies, rats and mosquitoes cannot breed.',
    '**Types of household waste**:\n- **biodegradable** waste rots naturally: peelings, leftover food, leaves, paper\n- **non-biodegradable** waste does not rot or takes hundreds of years: plastic bags and bottles, tins, glass, old shoes\n- **hazardous** waste is dangerous: used batteries, old medicines, insecticide containers, broken bulbs, razor blades.',
    '**Safe disposal**: keep a **dustbin with a lid** and empty it regularly; **sort** waste; turn peelings and leaves into **compost** for the garden; **reuse** jars and containers and **recycle** where possible; in big towns such as Yaoundé and Douala, put waste out for the **collection trucks** (the company HYSACAM collects household waste there); bury waste in a pit far from water if there is no collection. **Do not** dump waste in gutters, streams or bushes: it blocks drains, causes **flooding**, breeds mosquitoes and pollutes water. **Burning plastic** gives off poisonous smoke.',
  ], 'he1-waste', 'Sort it, cover it, compost it; never dump it in the gutter.',
  ['Plantain peels and leaves are examples of:', ['Biodegradable waste', 'Hazardous waste', 'Non-biodegradable waste', 'Recycled glass'], 'They rot naturally.'],
  [['Environmental hygiene', 'Keeping our surroundings clean and safe for health.'], ['Biodegradable', 'Able to rot away naturally.'], ['Compost', 'Manure made from rotted plant waste.'], ['Hazardous waste', 'Waste that is dangerous to people or the environment.']],
  [
    { q: 'Sort this waste and say how to dispose of each: mango peels, a plastic water bottle, an old torch battery.', steps: ['**Mango peels**: biodegradable, put on the **compost** heap.', '**Plastic bottle**: non-biodegradable, **reuse** or give for recycling; never burn it.', '**Battery**: hazardous, keep apart and give to a **collection point** or put in the bin, away from children and water.'] },
  ]),

  L('he-surroundings-1', 'he-f1-environment', '8.2', 'Caring for the school surroundings', 9, ['Environmental hygiene'], [
    'A clean school is healthier and more pleasant for learning. Students share the work with teachers and staff during **manual labour** and daily duties.',
    '**What to do**:\n- **sweep** classrooms and corridors daily and put waste in the bins\n- keep **toilets** clean and flush or cover them after use; wash hands with soap\n- **cut the grass** and clear bushes where snakes and mosquitoes hide\n- clear **gutters** and fill holes so that no **stagnant water** remains (mosquitoes lay eggs in still water and spread **malaria**)\n- protect the **water point** and never wash dirty things beside it\n- plant and water **trees and flowers**\n- never write on walls or desks.',
    'Each student should use the **bins**, keep their own desk clean, and remind others politely. Clean surroundings prevent diseases such as **malaria, cholera, typhoid** and **diarrhoea**.',
  ], 'he1-school-clean', 'No stagnant water, no mosquitoes.',
  ['Why should gutters around the school be cleared?', ['So that no stagnant water remains for mosquitoes', 'To make the school look older', 'To store water for drinking', 'To keep snakes'], 'Still water breeds mosquitoes.'],
  [['Stagnant water', 'Water that does not flow and stays in one place.'], ['Manual labour', 'Physical work done by students to keep the school clean.'], ['Cholera', 'A disease of severe diarrhoea spread by dirty water and food.']],
  [
    { q: 'Plan a cleaning day for your class: list four tasks and the disease or problem each prevents.', steps: ['**Clear gutters**: no stagnant water, so fewer mosquitoes and less **malaria**.', '**Clean toilets** and wash hands: less **cholera, typhoid and diarrhoea**.', '**Cut grass**: fewer hiding places for snakes and mosquitoes.', '**Empty bins**: fewer flies and rats.'] },
  ]),

  // ---------- 9. The family ----------
  L('he-family-types-1', 'he-f1-family', '9.1', 'The family and types of families', 9, ['Family'], [
    'A **family** is a group of people related by **blood**, **marriage** or **adoption**, who usually live together and care for one another. The family is the first school of a child: it gives love, food, shelter, protection, values and education.',
    '**Types of families**:\n- **nuclear family**: father, mother and their children\n- **extended family**: the nuclear family plus relatives such as grandparents, uncles, aunts and cousins; very common in Cameroon\n- **monogamous family**: one husband and one wife\n- **polygamous family**: one husband with **more than one wife**\n- **single-parent family**: one parent (father or mother) raising the children, after death, divorce, separation or by choice\n- **blended family** (step-family): parents with children from earlier marriages\n- **foster or adoptive family**: children raised by people who are not their birth parents (adoption is legal and permanent; fostering may be for a time).',
  ], 'he1-family-types', 'Nuclear = parents + children; extended = plus relatives.',
  ['A family made up of a father, a mother, their children and the grandmother is:', ['An extended family', 'A nuclear family', 'A single-parent family', 'A foster family'], 'Relatives beyond parents and children.'],
  [['Family', 'People related by blood, marriage or adoption who care for one another.'], ['Nuclear family', 'Father, mother and their children.'], ['Extended family', 'A family that includes relatives beyond parents and children.'], ['Adoption', 'Legally taking a child as one’s own.']],
  [
    { q: 'Ayuk lives with her mother, her two brothers, her uncle and her grandparents. Name the family type and explain.', steps: ['It is an **extended family**, because relatives (uncle, grandparents) live with the mother and children.', 'Since only one parent is there, the core of the family is also **single-parent**.'] },
  ]),

  L('he-family-roles-1', 'he-f1-family', '9.2', 'Roles and responsibilities of family members', 9, ['Family'], [
    'A **role** is the part a person plays; a **responsibility** is a duty they must carry out. In a happy family, everyone has a part.',
    '**Parents (father and mother)**: provide food, shelter, clothing, health care and **education**; protect, love and guide the children; teach values and good manners; manage the family money; take decisions together. Today both parents often work and **share** household tasks and child care.',
    '**Children**: respect and obey parents and elders; study well; help with **household tasks** (sweeping, washing plates, fetching water, caring for younger ones, helping on the farm) according to their age; look after family property; love their brothers and sisters. **Grandparents and relatives**: give advice, tell stories and traditions, help to care for children.',
    '**Sharing tasks** between boys and girls saves time, teaches everyone life skills and prevents one person from carrying all the work.',
  ], 'he1-family-roles', 'Many hands make light work.',
  ['A responsibility of children in the family is to:', ['Help with household tasks suited to their age', 'Pay the school fees', 'Build the house', 'Make all decisions'], 'Children contribute too.'],
  [['Role', 'The part a person plays in a group.'], ['Responsibility', 'A duty a person must carry out.'], ['Household task', 'Work done to keep the home running, such as cooking or cleaning.']],
  [
    { q: 'Make a fair weekly task plan for a family with a mother, a father, a girl of 13 and a boy of 12.', steps: ['**Mother and father**: shopping, cooking the main meals, paying bills, helping with homework.', '**Girl and boy**: take turns washing plates and sweeping; both fetch water and tidy their rooms.', 'Tasks are shared **equally** between the boy and the girl, and changed each week.'] },
  ]),

  // ---------- 10. Caring for the rooms ----------
  L('he-rooms-1', 'he-f1-homecare', '10.1', 'The rooms of the house and how often to clean them', 9, ['Home management'], [
    'A house has rooms with different **uses**: the **sitting room** (receiving visitors, family time), **bedrooms** (sleeping, resting), the **kitchen** (preparing and cooking food), the **dining area** (eating), the **bathroom and toilet** (washing and getting rid of body waste), and a **store**. Each needs its own care.',
    'Cleaning is done at three levels:\n- **daily cleaning**: open windows, make beds, sweep, wash plates, wipe surfaces, empty bins, clean the toilet\n- **weekly cleaning**: dust furniture and shelves, mop floors, change bed sheets, clean windows and mirrors, wash bins\n- **periodic (spring) cleaning**, every few months: wash curtains and walls, clean ceilings and corners of cobwebs, move furniture and clean behind it, air mattresses in the sun, sort cupboards.',
    '**Tools and materials**: broom, dustpan, mop and bucket, dusters, scrubbing brush, toilet brush, sponge, soap or detergent, disinfectant, and locally, **lemon** and **ash** for removing grease and stains.',
  ], 'he1-rooms', 'Daily, weekly, periodic: a little every day saves a lot later.',
  ['Washing curtains and cleaning cobwebs from ceilings is part of:', ['Periodic cleaning', 'Daily cleaning', 'Cooking', 'Laundry of the day'], 'Done every few months.'],
  [['Daily cleaning', 'Cleaning tasks done every day.'], ['Periodic cleaning', 'A thorough cleaning done every few months.'], ['Disinfectant', 'A chemical that kills germs.']],
  [
    { q: 'Sort these tasks into daily, weekly and periodic: making the bed, washing curtains, mopping the floor, emptying the bin.', steps: ['**Daily**: making the bed, emptying the bin.', '**Weekly**: mopping the floor.', '**Periodic**: washing curtains.'] },
  ]),

  L('he-cleaning-rooms-1', 'he-f1-homecare', '10.2', 'Steps for cleaning a room', 9, ['Home management', 'Practical'], [
    '**General order for cleaning a room**:\n- open the **windows** and doors for air and light\n- **tidy**: pick up clothes, books and rubbish, and put things in their places\n- **dust from high to low** (shelves, then tables, then chairs), because dust falls\n- **sweep** the floor from the corners towards the door and collect the dust in a dustpan\n- **mop** (wet cleaning) after sweeping, never before\n- return furniture and mats, and wash and dry the cleaning tools.',
    '**Bedroom**: air the room and bedding, make the bed, put clothes away, dust and sweep. **Sitting room**: arrange chairs and cushions, dust, clean tables and sweep or mop. **Kitchen**: wash up, wipe surfaces and the stove, empty the bin, sweep and mop. **Toilet and bathroom**: scrub the toilet bowl with a **toilet brush** and **disinfectant**, wash the floor, refill water and soap, and keep toilet tools **separate** from kitchen tools.',
    'Wear old clothes or an apron, keep chemicals away from children, and never mix bleach with other cleaning products.',
  ], 'he1-clean-steps', 'Dry before wet, high before low.',
  ['When cleaning a room, which comes first?', ['Sweeping', 'Mopping', 'Polishing the wet floor', 'Putting mats back'], 'Mopping dust turns it into mud.'],
  [['Ventilation', 'Letting fresh air move through a room.'], ['Mop', 'A tool for washing floors.'], ['Dustpan', 'A flat container into which dust is swept.']],
  [
    { q: 'Write, in order, the steps for cleaning your bedroom.', steps: ['Open the window.', 'Make the bed and tidy clothes and books.', 'Dust from the top shelf down to the chair.', 'Sweep towards the door and collect the dust.', 'Mop the floor and put the mat back when dry.'] },
  ]),
];
