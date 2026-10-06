// Home Economics lessons for Form 2, following the MINESEC harmonised scheme:
// term 1 health, food and nutrition, and family and home management; term 2
// textiles and clothing, consumer education, and child development and care;
// term 3 basic cookery and table setting. Built around Cameroonian homes, foods
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

export const LESSONS_2 = [
  // ---------- Nutrition ----------
  L('he-nutrients-2', 'he-f2-nutrition', '1.1', 'Nutrients and the foods that supply them', 10, ['Nutrition'], [
    '**Nutrition** is the study of food and how the body uses it. The useful substances in food are **nutrients**. There are six classes, and water.',
    '**Carbohydrates** (starches and sugars) give **energy**: cassava, yam, cocoyam, plantain, rice, maize, bread and sugar. **Fats and oils** give **concentrated energy**, keep the body warm and carry vitamins A, D, E and K: palm oil, groundnut oil, avocado, butter. **Proteins** are for **growth and repair** of the body: beans, groundnuts, soya, eggs, fish, crayfish, meat, milk and egusi.',
    '**Vitamins** keep the body healthy and protect it from disease. **Vitamin A** (red palm oil, carrots, pawpaw, dark green leaves) is needed for good eyesight. **Vitamin C** (oranges, guava, pawpaw, pineapple, fresh vegetables) keeps gums and skin healthy and helps fight infection. **Vitamin D**, made in the skin in sunlight and found in fish and eggs, is needed for strong bones. The **B vitamins** help the body release energy from food.',
    '**Minerals** are needed in small amounts: **calcium** (milk, small fish eaten with their bones, green leaves) for strong **bones and teeth**, and **iron** (liver, meat, beans, dark green leaves such as njama-njama and ndolé) for healthy **blood**; lack of iron causes **anaemia**. **Water** carries nutrients, removes waste and controls body temperature. **Dietary fibre** (roughage), from fruits, vegetables and whole grains, keeps the bowels working and prevents constipation.',
  ], 'food-groups', 'Group foods by their main job: **energy** (carbohydrates, fats), **body-building** (proteins), **protective** (vitamins, minerals).',
  ['Which food is the best source of protein?', ['Beans', 'Cassava', 'Palm oil', 'Sugar'], 'Beans are rich in protein; cassava and sugar are carbohydrates and palm oil is a fat.'],
  [['Nutrient', 'A substance in food that the body uses for energy, growth or health.'], ['Protein', 'The nutrient needed for growth and repair.'], ['Anaemia', 'A shortage of healthy red blood cells, often caused by lack of iron.'], ['Dietary fibre', 'The indigestible part of plant foods that helps digestion.']],
  [
    { q: 'Name the main nutrient in each food and give its use in the body: (a) yam, (b) fish, (c) orange, (d) milk.', steps: ['(a) Yam: **carbohydrate**, for **energy**.', '(b) Fish: **protein**, for **growth and repair**.', '(c) Orange: **vitamin C**, for healthy gums and skin and to **fight infection**.', '(d) Milk: **calcium** (and protein), for strong **bones and teeth**.'] },
  ]),

  L('he-diet-2', 'he-f2-nutrition', '1.2', 'A balanced diet for adolescents', 9, ['Nutrition', 'Meal planning'], [
    'A **balanced diet** contains **all the nutrients**, in the **right amounts**, for a person’s age, sex, activity and health. No single food does this, so meals must combine foods from all the groups: an **energy food**, a **body-building food** and **protective foods** (fruit and vegetables), with water.',
    '**Adolescents** (about 10 to 19 years old) grow very fast and are often very active, so they need plenty of **energy**, **protein** for growing muscles and organs, **calcium** for growing bones, and **iron**, especially girls, who lose iron in menstrual blood.',
    'Good examples of balanced Cameroonian meals: **corn fufu** with **njama-njama** and fish; **rice and beans** with a vegetable sauce and a ripe pawpaw; **achu** with yellow soup and meat; **koki** with ripe plantain and a glass of water.',
    'Bad habits to avoid: **skipping breakfast**, which reduces concentration at school; too many **sugary drinks**, sweets and fried snacks, which lead to **tooth decay** and **obesity**; and eating too little, which causes tiredness and slow growth. Drink plenty of clean water.',
  ], 'food-groups', 'To check a meal, tick off the three groups: **energy**, **body-building**, **protective**. If one is missing, add a food from it.',
  ['Why do adolescent girls need extra iron?', ['They lose iron in menstrual blood', 'Iron gives them energy only', 'Iron makes hair grow', 'They do not eat proteins'], 'Lost blood carries away iron, which must be replaced to prevent anaemia.'],
  [['Balanced diet', 'A diet with all the nutrients in the right amounts for a person’s needs.'], ['Adolescent', 'A young person between childhood and adulthood, about 10 to 19 years old.'], ['Obesity', 'Being very overweight, with too much body fat.']],
  [
    { q: 'A Form 2 pupil eats only garri and sugar for breakfast and buys sweets at break. Suggest a better day’s meals.', steps: ['**Breakfast:** pap or bread with an **egg** (protein) and a banana (vitamins), instead of garri with sugar only.', '**Lunch:** rice and **beans** with a **vegetable** sauce, and an orange in place of sweets.', '**Supper:** corn fufu with **njama-njama** and **fish**, and plenty of clean **water** during the day.', 'Each meal now has an energy food, a body-building food and protective foods.'] },
  ]),

  // ---------- Food hygiene ----------
  L('he-hygiene-2', 'he-f2-hygiene', '2.1', 'Food hygiene and preventing foodborne illness', 10, ['Food hygiene', 'Health'], [
    'Food can carry **micro-organisms** (germs) such as bacteria and moulds. Bacteria multiply fast in food that is:\n- **warm**, especially between about **5 °C and 63 °C**, the **danger zone**\n- **moist**\n- left out for a long **time**',
    'Eating contaminated food causes **foodborne illnesses**. They include food poisoning (stomach pains, vomiting, diarrhoea and fever), **cholera**, **typhoid** and **dysentery**.',
    'Food is **contaminated** (made unsafe) by:\n- dirty hands\n- **flies** and cockroaches\n- unclean utensils and cloths\n- **unsafe water**\n- coughing and sneezing over food\n- **cross-contamination**: juices from raw meat or fish touching cooked food',
    'The rules of **food hygiene**:\n- **Wash hands** with soap and water before handling food and after using the toilet.\n- Keep **surfaces, utensils and cloths clean**.\n- **Cover** food from flies and dust.\n- Keep **raw and cooked foods apart**. Use separate knives and boards.\n- **Cook** meat, fish and eggs thoroughly.\n- Keep **hot food hot** and **cold food cold**.\n- **Reheat** leftovers only once, until very hot.\n- Use **safe water**.\n- Do not eat food past its **use-by date**.',
    'A food handler should:\n- tie back or cover the hair\n- wear a clean apron\n- keep nails short and clean\n- cover cuts with a waterproof dressing\n- not cook for others when sick with diarrhoea or vomiting',
  ], null, 'Bacteria need **food, warmth, moisture and time**. Every hygiene rule removes one of these or keeps germs away.',
  ['Why should cooked rice not be left in a warm kitchen all day?', ['Bacteria multiply fast in warm, moist food', 'It will become dry', 'It loses its colour', 'It becomes too hot'], 'Warm, moist food left for hours gives bacteria time to multiply to harmful numbers.'],
  [['Contamination', 'The presence of harmful germs or substances in food.'], ['Cross-contamination', 'Moving germs from raw food to cooked food, for example by a knife or hands.'], ['Danger zone', 'The temperature range (about 5 °C to 63 °C) in which bacteria multiply fastest.']],
  [
    { q: 'At a school party, several pupils have diarrhoea after eating chicken. Give three likely causes and how each could have been avoided.', steps: ['The chicken was **not cooked thoroughly**: cook it until the juices run clear and there is no pink meat.', 'The cooked chicken was **left warm for hours**: serve it hot, or cool it quickly and keep it cold.', '**Cross-contamination**: the same knife or board was used for raw and cooked chicken. Use separate, clean utensils and wash hands between tasks.'] },
  ]),

  // ---------- Kitchen equipment and safety ----------
  L('he-kitchen-2', 'he-f2-kitchen', '3.1', 'Kitchen equipment, its care and preventing accidents', 10, ['Kitchen', 'Safety'], [
    '**Large equipment** includes the **cooker** (gas, kerosene, firewood or electric), the **oven** and the **refrigerator**. **Small equipment** includes pots and pans, frying pans, knives, chopping boards, mortar and pestle, grinding stone, wooden spoons, sieves, graters, measuring cups and spoons.',
    'Utensils are made of different materials, each with its own care. **Aluminium** pots are light and heat quickly; wash them without harsh scouring. **Stainless steel** is strong and does not rust. **Cast iron** holds heat but rusts, so dry it well and wipe with a little oil. **Enamel** chips if dropped. **Clay pots** break easily. **Wooden** spoons and boards absorb water and germs; scrub and dry them in the sun. **Plastic** melts near heat. After use, all equipment should be **washed** in hot soapy water, **rinsed**, **dried** and **stored** in a clean place; knives are kept sharp and stored safely.',
    'The most common kitchen accidents and how to prevent them: **burns and scalds**: turn pot handles **inwards**, use oven gloves or a dry cloth, keep children away from the fire; **cuts**: use sharp knives correctly, cut away from the body, never leave knives in washing-up water; **falls**: wipe up spills at once; **fire**: never leave frying unattended, keep cloths away from flames; **gas leaks**: if you smell gas, do not light anything or switch on lights, turn off the cylinder and open doors and windows; **poisoning**: keep kerosene, bleach and insecticides in labelled containers, away from food.',
    'For a burn or scald, cool it under **cool running water** for at least ten minutes and tell an adult; do not put oil or toothpaste on it.',
  ], null, 'For safety questions give the **hazard**, the **accident** it causes and the **precaution**: hot pot handle, scald, turn handles inwards.',
  ['Pot handles should be turned inwards on the cooker to:', ['Prevent pots being knocked over and causing scalds', 'Cook the food faster', 'Save gas', 'Keep the handles clean'], 'A handle sticking out can be caught by a person or child.'],
  [['Scald', 'A burn caused by hot liquid or steam.'], ['Utensil', 'A tool used in the kitchen, such as a pot or spoon.']],
  [
    { q: 'A woman smells gas in the kitchen when she enters. List what she should do, in order, and what she must not do.', steps: ['**Do not** light a match, switch on a light or use a phone in the kitchen: a spark can cause an explosion.', '**Turn off** the gas at the cylinder.', '**Open** the doors and windows so the gas can escape.', 'Leave the room and have the cylinder and pipes checked before using the cooker again.'] },
  ]),

  // ---------- The house ----------
  L('he-cleaning-2', 'he-f2-house', '4.1', 'Keeping the house clean: routines and materials', 9, ['Home management'], [
    'A **clean house** is healthier, because it keeps away germs, pests and dust; it is more **comfortable** and pleasant; and furniture and equipment **last longer**.',
    'Cleaning is easier when it is planned in a **routine**. **Daily** cleaning: open windows to air the rooms, make beds, sweep floors, wash dishes, wipe tables, clean the toilet and empty bins. **Weekly** cleaning: wash or mop all floors, dust furniture, clean windows, change and wash bed sheets, clean the refrigerator. **Occasional** (periodic) cleaning: clean walls and ceilings, remove cobwebs, wash curtains, clean behind furniture and clear gutters.',
    'Cleaning **equipment** includes brooms, mops, buckets, dusters, scrubbing brushes, a dustpan and cloths. Cleaning **agents** include water, **soap** and **detergent** (to remove dirt and grease), **scouring powder** (for stubborn dirt), and **disinfectants** and **bleach** (to kill germs in toilets, sinks and drains). Never mix bleach with other cleaners, and keep all of them out of children’s reach.',
    'Work from **top to bottom** (dust high places before sweeping the floor) and from **clean to dirty** areas, and air the rooms well.',
  ], null, 'Arrange cleaning tasks under three headings: **daily**, **weekly** and **occasional**.',
  ['Which is a weekly cleaning task?', ['Changing the bed sheets', 'Washing the dishes after supper', 'Making the beds', 'Painting the walls'], 'Dishes and beds are daily tasks; painting is occasional.'],
  [['Cleaning routine', 'A plan of cleaning tasks done at regular times.'], ['Detergent', 'A cleaning substance that removes dirt and grease.'], ['Disinfectant', 'A chemical that kills germs.']],
  [
    { q: 'Draw up a simple weekly cleaning routine for a family room.', steps: ['**Every day:** open the windows, sweep the floor, dust the table and chairs, empty the bin.', '**Once a week:** mop the floor with soapy water, dust the shelves and wipe the windows and doors.', '**Once a term:** remove cobwebs, wash the curtains and clean behind the furniture.'] },
  ]),

  L('he-waste-2', 'he-f2-house', '4.2', 'Sanitation and waste management at home', 8, ['Home management', 'Environment'], [
    '**Sanitation** means keeping the home and its surroundings clean and free from things that spread disease. It includes clean **toilets** or latrines placed well away from wells and streams, good **drainage** so no water stands near the house, cutting **bush** around the compound and controlling **pests** such as rats, cockroaches and mosquitoes.',
    'Household **waste** must be collected in covered **bins**. It should be **separated**: **organic** waste (food peelings, leaves), **plastics**, **glass**, **metal** (tins) and **dangerous** waste (batteries, old medicines, chemical containers).',
    'Each kind is disposed of safely: organic waste is turned into **compost** for the garden; plastics, glass and tins can be **reused** or sent for **recycling**; other waste is taken to the **collection point** for the town’s refuse trucks. Dangerous waste must not be thrown in drains or burnt. Never throw refuse into **gutters**, streams or the street, and do not burn plastics, which give off poisonous smoke.',
    'Good sanitation prevents diseases such as **cholera**, **typhoid**, **malaria** and **diarrhoea**.',
  ], null, 'Waste management steps: **collect**, **separate**, **dispose** (compost, reuse, recycle or collection point).',
  ['The best way to deal with vegetable peelings at home is to:', ['Make compost', 'Burn them with plastics', 'Throw them in the gutter', 'Leave them in the yard'], 'Compost turns organic waste into manure.'],
  [['Sanitation', 'Keeping the home and surroundings clean and free from disease.'], ['Compost', 'Manure made from rotted organic waste.']],
  [
    { q: 'A family throws all its rubbish into a gutter behind the house. Explain two dangers and suggest a better method.', steps: ['Rubbish **blocks the gutter**, so rain water floods the compound and houses.', 'Rotting rubbish and standing water breed **flies and mosquitoes**, spreading cholera and malaria.', 'Better: use **covered bins**, separate the waste, **compost** the food waste and take the rest to the **collection point**.'] },
  ]),

  // ---------- Laundry ----------
  L('he-laundry-2', 'he-f2-laundry', '5.1', 'Laundry, care labels and removing stains', 10, ['Laundry', 'Practical'], [
    'Washing clothes well makes them last longer. Follow these steps: **sort** clothes into whites, colours, delicate items and very dirty items, and empty the pockets; **mend** tears and loose buttons first; **remove stains**; **soak** very dirty items; **wash** with soap or detergent in water at the right temperature; **rinse** well until all soap is gone; **dry** whites in the sun and colours in the shade, turned inside out so they do not fade; **iron** at the right heat; then **air** and **store** them.',
    '**Care labels** sewn into clothes show how to wash them, with symbols: a **washtub** for washing (the number shows the highest temperature, a hand means hand wash), a **triangle** for bleaching, a **square** for drying, an **iron** for ironing (one dot cool, two dots warm, three dots hot) and a **circle** for dry cleaning. A **cross** through a symbol means "do not". Cotton and linen take a hot iron, wool and silk warm, and synthetic fabrics a cool iron.',
    'Treat **stains** quickly, while they are fresh. Work from the **outside** of the stain **towards the centre** so it does not spread, and test any remover on a hidden part first. **Blood, egg and milk**: soak in **cold** salty water, because hot water sets them. **Palm oil and grease**: rub in washing-up liquid or detergent, then wash in water as hot as the fabric allows. **Tea and coffee**: rinse at once and soak in warm water with detergent. **Rust**: rub with **lemon juice and salt** and dry in the sun, then wash.',
  ], 'care-symbols', 'Remember: **cold water for protein stains** (blood, egg, milk). Hot water cooks the protein into the fabric.',
  ['A blood stain on a school shirt should first be soaked in:', ['Cold salty water', 'Boiling water', 'Hot soapy water', 'Kerosene'], 'Heat sets protein stains such as blood; cold water lifts them.'],
  [['Care label', 'A label in a garment showing how to wash, dry and iron it.'], ['Stain', 'A mark on fabric that is hard to remove.'], ['Sorting', 'Separating laundry into groups that can be washed together.']],
  [
    { q: 'List the steps for washing a white cotton school shirt with a palm oil stain on it.', steps: ['**Check** the care label and empty the pocket.', '**Remove the stain**: rub washing-up liquid into the palm oil stain and leave it for a few minutes.', '**Wash** in hot soapy water (cotton can take heat), scrubbing the collar and cuffs, then **rinse** well.', '**Dry** in the sun, which also helps to whiten it, and **iron** with a hot iron.'] },
  ]),

  // ---------- Personal hygiene ----------
  L('he-grooming-2', 'he-f2-grooming', '6.1', 'Personal hygiene and grooming during adolescence', 9, ['Personal hygiene', 'Health'], [
    'During **puberty** the body changes. Sweat glands become more active, so the body can develop **body odour**; the skin becomes oilier, which can cause **pimples (acne)**; girls begin to **menstruate**; boys begin to grow facial hair. Good **personal hygiene** keeps the body clean, healthy and pleasant.',
    '**Bath** every day, and twice in hot weather, with soap, paying attention to the armpits, groin and feet; dry well, especially **between the toes**. Wear **clean underwear and socks** every day. A **deodorant** or antiperspirant may be used. Wash the **face** gently and do not squeeze pimples, which spreads infection and leaves scars. Keep **hair** clean and combed, and **nails** short and clean.',
    'Brush the **teeth** at least **twice a day**, after breakfast and before bed, with fluoride toothpaste, and limit sugary snacks to prevent tooth decay. Do not share **towels, combs, razors or toothbrushes**, which can spread infections.',
    'During **menstruation**, girls should change sanitary pads every 4 to 6 hours, or more often when the flow is heavy, wash the private parts with clean water, **wrap used pads** and put them in a bin (not in the toilet), and wash their hands. Keeping a **calendar** of periods helps to be prepared. **Grooming** also means a neat appearance: a clean, ironed uniform, polished shoes and good posture.',
  ], null, 'Hygiene questions: give the **practice**, how **often** and **why**: bath daily with soap, to remove sweat and prevent body odour.',
  ['Why should towels and razors not be shared?', ['They can spread infections', 'They wear out faster', 'It is too expensive', 'They change colour'], 'Germs and fungi can pass from one person to another on them.'],
  [['Personal hygiene', 'Keeping the body and clothes clean to stay healthy.'], ['Body odour', 'An unpleasant smell caused by bacteria acting on sweat.'], ['Grooming', 'Taking care of one’s appearance: clean, neat and tidy.']],
  [
    { q: 'A Form 2 boy has started to sweat a lot and his friends say he smells. Give him four pieces of advice.', steps: ['**Bath** every day with soap, twice in hot weather, washing the armpits well.', 'Put on **clean underwear, socks and shirt** every day.', 'Use a **deodorant** or antiperspirant after bathing.', 'Wear **cotton** clothes, which absorb sweat better than synthetics, and wash his school uniform regularly.'] },
  ]),

  // ---------- Textiles ----------
  L('he-fibres-2', 'he-f2-textiles', '7.1', 'Textile fibres: natural and man-made', 10, ['Textiles', 'Practical'], [
    'A **fibre** is a fine, hair-like strand. Fibres are **spun** into **yarn** (thread), and yarn is **woven** or **knitted** into **fabric**.',
    '**Natural fibres** come from plants and animals. **Plant** fibres contain cellulose: **cotton**, from the seed pod of the cotton plant, grown in the north of Cameroon, is cool, absorbent, strong and easy to wash, but creases easily; **linen** comes from the stem of the flax plant. **Animal** fibres contain protein: **wool**, from sheep, is warm and springy but **shrinks** in hot water; **silk**, from the cocoon of the silkworm, is smooth, shiny and strong.',
    '**Man-made fibres** are made in factories. **Regenerated** fibres, such as **viscose (rayon)**, are made from wood pulp. **Synthetic** fibres, such as **nylon**, **polyester** and **acrylic**, are made from chemicals from **petroleum**; they are strong, dry quickly and resist creasing, but do not absorb sweat well and can melt with a hot iron. **Blends** mix fibres to combine their good points, such as **polyester-cotton** for school uniforms.',
    'A **burning test**, done only under a teacher’s supervision with a few threads held in tongs over a tray, helps identify fibres. **Cotton and linen** burn quickly with a yellow flame, smell like **burning paper** and leave a soft grey ash. **Wool and silk** burn slowly, smell like **burning hair** and leave a black ash that crushes easily. **Synthetics** **melt** and shrink from the flame, smell of chemicals and leave a **hard bead** that cannot be crushed.',
  ], null, 'Burning test summary: cotton, **paper smell and soft ash**; wool and silk, **hair smell and crushable ash**; synthetics, **melt into a hard bead**.',
  ['A fibre melts away from the flame and leaves a hard bead. It is most likely:', ['Polyester', 'Cotton', 'Wool', 'Linen'], 'Synthetic fibres melt and form hard beads.'],
  [['Fibre', 'A fine, hair-like strand from which yarn is spun.'], ['Natural fibre', 'A fibre from a plant or animal, such as cotton or wool.'], ['Synthetic fibre', 'A fibre made from chemicals, such as nylon or polyester.'], ['Blend', 'A yarn or fabric made of two or more different fibres.']],
  [
    { q: 'Explain why cotton is a good fabric for clothes worn in the hot, humid climate of Douala.', steps: ['Cotton is **absorbent**: it soaks up sweat from the skin.', 'It lets air and moisture pass through, so it feels **cool**.', 'It is strong and **easy to wash** often, even in hot water.'] },
  ]),

  // ---------- Sewing and repair ----------
  L('he-stitches-2', 'he-f2-sewing', '8.1', 'Sewing equipment and hand stitches', 10, ['Sewing', 'Practical'], [
    'Basic **sewing equipment** includes needles of different sizes, **pins** and a pin cushion, a **thimble** to protect the middle finger, a **tape measure**, sharp **dressmaking scissors** (used only for fabric), **tailor’s chalk** for marking, a **seam ripper** for removing stitches, and threads of matching colours.',
    '**Temporary stitches** hold fabric in place for a short time and are removed later. **Tacking** (basting) is a line of long, even stitches about 1 cm long, used to hold pieces together before the final sewing.',
    '**Permanent stitches** stay in the garment. **Running stitch** is a line of small, even stitches, used for gathering and for seams that take little strain. **Backstitch** is very strong and looks like machine stitching on the right side; each stitch goes back to meet the one before; it is used for seams. **Hemming stitch** is a small slanting stitch that holds a folded hem in place. **Slip stitch** makes an almost invisible hem. **Overcasting** is a slanting stitch over a raw edge to stop the fabric **fraying**. **Blanket stitch** neatens and decorates edges.',
    'Use a thread no longer than your arm, so it does not tangle; start and finish with a few small stitches on the spot (or a knot hidden on the wrong side); and keep stitches even in size and spacing.',
  ], 'hand-stitches', 'Temporary = **tacking** (removed later). Permanent = running, back, hemming, slip, overcasting and blanket stitches.',
  ['Which stitch is the strongest for a seam sewn by hand?', ['Backstitch', 'Tacking', 'Running stitch', 'Blanket stitch'], 'Backstitch overlaps, like machine stitching, so it holds firmly.'],
  [['Tacking', 'Long temporary stitches that hold fabric in place before final sewing.'], ['Backstitch', 'A strong permanent stitch in which each stitch goes back to meet the last.'], ['Fraying', 'Threads coming loose from a cut edge of fabric.'], ['Thimble', 'A small cap worn on the finger to push the needle.']],
  [
    { q: 'Name a suitable stitch for each job: (a) holding two pieces of a skirt together before machining, (b) neatening the raw edges of a seam, (c) a strong hand-sewn seam, (d) a hem on a dress.', steps: ['(a) **Tacking** (temporary).', '(b) **Overcasting**, to stop fraying.', '(c) **Backstitch**.', '(d) **Hemming stitch** (or slip stitch for an invisible hem).'] },
  ]),

  L('he-repair-2', 'he-f2-sewing', '8.2', 'Repairing clothes: patching, darning and buttons', 9, ['Sewing', 'Clothing care'], [
    'Repairing clothes saves money and keeps them neat. Mend clothes **before** washing them, because washing makes holes and tears bigger.',
    'A **patch** covers a hole with a new piece of fabric. Cut a piece of **matching** fabric, with the threads running the **same way** (the same grain) as the garment, about 2 cm larger than the hole on every side. Turn under its edges, tack it in place over (or behind) the hole, and sew it down with small **hemming** stitches; then trim the worn edges of the hole and neaten them.',
    '**Darning** fills a small hole or thin place, for example in socks or a jumper, by **weaving** new threads across it. Using a darning needle and matching yarn, sew rows of stitches in one direction across the hole and a little beyond it, then weave rows at **right angles**, going over and under the first threads.',
    'To **sew on a button**, mark its place, fasten the thread on the wrong side, and sew through the holes several times (for a four-hole button, in two parallel lines or a cross). Leave a little space under the button and wind the thread round the stitches to make a **shank**, so the button sits up and passes easily through the buttonhole. Finish firmly on the wrong side.',
  ], null, 'Patch for **large** holes, darn for **small** holes and thin places, and make a **shank** when sewing on a button.',
  ['The best way to repair a small hole in a sock is:', ['Darning', 'Patching with thick cloth', 'Tacking', 'Gluing'], 'Darning weaves new yarn across small holes and thin places.'],
  [['Patch', 'A piece of fabric sewn over a hole.'], ['Darning', 'Weaving new threads across a small hole.'], ['Shank', 'Thread wound under a button so it stands away from the fabric.'], ['Grain', 'The direction of the threads in a fabric.']],
  [
    { q: 'Describe how to patch a hole in the knee of a pair of cotton trousers.', steps: ['Cut a piece of **matching** cotton, on the **same grain**, about 2 cm larger than the hole all round.', 'Turn under the edges of the patch and **tack** it in place over the hole.', 'Sew it down with small **hemming stitches**, then remove the tacking.', 'On the inside, trim the frayed edges of the hole and **neaten** them with overcasting.'] },
  ]),

  // ---------- Consumer education ----------
  L('he-budget-2', 'he-f2-consumer', '9.1', 'Budgeting: income, expenditure and saving', 10, ['Consumer education', 'Calculation'], [
    '**Income** is the money a person or family receives: wages and salaries, profits from trade or farming, pocket money and gifts. **Expenditure** is the money spent. A **budget** is a **plan** for sharing income between spending and saving over a period, such as a week or a month.',
    'First separate **needs**, things we must have (food, shelter, school fees, clothes, health care, transport), from **wants**, things we would like but can live without (new phone, snacks, entertainment). Needs come first.',
    'To make a budget: (1) write down the **total income**; (2) list the **fixed expenses** that stay the same, such as rent and school fees; (3) list the **variable expenses** that change, such as food and transport; (4) set aside an amount for **savings**; (5) check that the total planned spending and saving is **not more than** the income, and adjust if it is. A budget is **balanced** when spending plus saving equals income.',
    '**Savings** are for emergencies, future needs and investment. Families save in a **bank** or **credit union**, through **mobile money** savings, or in a **njangi** (a savings group whose members contribute regularly and take turns to receive the total). Keep a record of what you spend so you can see where the money goes.',
  ], null, 'Always check a budget by **adding up**: spending + savings must not be more than income.',
  ['Which of these is a need rather than a want?', ['School fees', 'A new video game', 'Fizzy drinks', 'A second phone'], 'Education is essential; the others can be done without.'],
  [['Income', 'Money received by a person or family.'], ['Expenditure', 'Money spent.'], ['Budget', 'A plan for sharing income between spending and saving.'], ['Njangi', 'A savings group whose members contribute regularly and take turns to receive the total.']],
  [
    { q: 'A family earns 150 000 FCFA a month. Make a balanced budget that saves 10%.', steps: ['Savings: 10% of 150 000 = **15 000 FCFA**.', 'Fixed expenses: rent **30 000**; school needs **20 000**.', 'Variable expenses: food **60 000**; transport **15 000**; health and other needs **10 000**.', 'Check: 30 000 + 20 000 + 60 000 + 15 000 + 10 000 + 15 000 = **150 000 FCFA**, equal to the income, so the budget is balanced.'] },
    { q: 'Rice costs 650 FCFA per kg loose, or 3 000 FCFA for a 5 kg bag. Which is cheaper per kg, and by how much?', steps: ['Bag price per kg = 3 000 ÷ 5 = **600 FCFA**.', 'Loose rice is **650 FCFA** per kg.', 'The bag is cheaper by 650 − 600 = **50 FCFA per kg** (250 FCFA on 5 kg), if the family can use and store that much.'] },
  ]),

  L('he-shopping-2', 'he-f2-consumer', '9.2', 'Smart shopping: labels, expiry dates and consumer rights', 9, ['Consumer education'], [
    'A **consumer** is anyone who buys and uses goods and services. A smart shopper makes a **shopping list**, compares **prices and quality** in different shops, buys foods **in season** when they are cheaper, checks **weights and measures**, avoids **impulse buying**, keeps **receipts**, and does not buy damaged, swollen or leaking tins and packets.',
    'Read the **label** on packaged goods. It shows the **name** of the product, the **ingredients** (listed from the largest amount to the smallest), the **net weight or volume**, the **name and address** of the maker, **storage instructions**, and the **dates**. A **"use by"** date is about **safety**: do not eat the food after it. A **"best before"** date is about **quality**: the food may be safe a little after it but may not taste as good. Labels may also give **nutrition information** and a **batch number**.',
    'Consumers have **rights**: the right to **safety** (goods that do not harm them), to **information** (honest labels and prices), to **choose**, to **be heard** (to complain), to **redress** (repair, replacement or a refund for faulty goods) and to **consumer education**. Cameroon has a law that protects consumers.',
    'Consumers also have **responsibilities**: to read labels and instructions, to keep receipts, to report fraud and faulty goods to the seller or the authorities, and not to buy smuggled or fake products.',
  ], null, '**Use by** = safety (do not eat after it). **Best before** = quality.',
  ['A tin of sardines is swollen. A careful shopper should:', ['Not buy it, because the food inside may be spoiled', 'Buy it at a discount', 'Shake it first', 'Buy it if the label is clean'], 'A swollen tin can mean that bacteria inside are producing gas.'],
  [['Consumer', 'A person who buys and uses goods and services.'], ['Expiry date', 'The date after which a product should not be used.'], ['Impulse buying', 'Buying something without planning, on a sudden wish.'], ['Redress', 'Putting right a wrong, for example by a refund or replacement.']],
  [
    { q: 'A pupil buys a packet of biscuits and finds that it expired last month. Which consumer rights apply, and what should she do?', steps: ['Her right to **safety** and her right to **redress** apply: the shop should not sell expired food.', 'She should **not eat** the biscuits.', 'She should take the packet and the **receipt** back to the shop and ask for a **refund or replacement**; if refused, she can report the shop to the consumer protection authorities.'] },
  ]),

  // ---------- Child development and care ----------
  L('he-child-2', 'he-f2-child', '10.1', 'How babies grow and what they need', 10, ['Child care'], [
    'Children grow and develop in **stages**: **infancy** (birth to 1 year), the **toddler** stage (1 to 3 years) and the **pre-school** stage (3 to about 6 years). Each child develops at its own pace, but most follow the same order. A baby usually **holds up its head** at about 3 months, **sits** at about 6 months, **crawls** at about 8 to 9 months, and **stands and takes first steps** at about 12 months. The first teeth usually appear at about 6 months and the first words at about 12 months.',
    'A child has **physical needs**: food (only **breast milk** for the first **6 months**, then other foods as well, while breastfeeding continues up to 2 years or beyond), clean water, sleep, cleanliness, warm and comfortable clothing, a safe home, **vaccinations** according to the national vaccination calendar, and medical care when sick.',
    '**Emotional needs**: love, cuddling, attention, praise and a feeling of **security** with familiar people. **Social needs**: playing with others, learning to share, take turns and speak. **Intellectual needs**: things to look at, touch and play with, people talking and singing to them, stories and simple games, which help the brain develop.',
    'Growth is checked by weighing the baby regularly at the health centre and recording its weight on a **growth chart**, which shows whether it is growing well.',
  ], null, 'Group a child’s needs under four headings: **physical**, **emotional**, **social** and **intellectual**, with an example of each.',
  ['For the first six months, a baby should be fed:', ['Only breast milk', 'Pap and water', 'Family food', 'Fruit juice'], 'Breast milk alone gives all the food and water a young baby needs and protects it from infection.'],
  [['Infancy', 'The first year of life.'], ['Exclusive breastfeeding', 'Giving a baby only breast milk, no other food or drink.'], ['Growth chart', 'A chart on which a child’s weight is recorded to check its growth.']],
  [
    { q: 'Give one physical, one emotional, one social and one intellectual need of a toddler, and how a parent can meet it.', steps: ['**Physical:** a balanced diet, met with mashed beans, eggs, fruit and continued breastfeeding.', '**Emotional:** love and security, met by cuddling, praising and comforting the child.', '**Social:** playing with other children, met by visits to friends or a nursery.', '**Intellectual:** stimulation, met by talking, singing, reading stories and giving safe toys.'] },
  ]),

  L('he-childsafety-2', 'he-f2-child', '10.2', 'Preventing accidents to young children', 9, ['Child care', 'Safety'], [
    'Young children are curious and do not understand danger, so most of their accidents happen **at home**. Adults must make the home safe and **supervise** them.',
    '**Burns and scalds**: keep children away from the fire, hot pots, kettles, irons and lamps; turn pot handles inwards; test bath water with the elbow. **Poisoning**: keep **medicines**, kerosene, bleach and insecticides locked up or high out of reach, in their original labelled containers, and **never in drink bottles**. **Falls**: do not leave a baby alone on a bed or table; guard stairs, verandas and windows.',
    '**Choking and suffocation**: keep small objects such as coins, beads, buttons and groundnuts away from babies and toddlers; never leave plastic bags within reach. **Drowning**: cover wells, buckets and water drums, and never leave a child alone near water, even a basin. **Cuts**: keep knives, razor blades and broken glass out of reach. **Electric shocks**: cover sockets and keep cords tidy.',
    'Keep a **first-aid kit** at home and know what to do in an emergency, and take a hurt child to the health centre quickly.',
  ], null, 'For each hazard give the **danger** and a **precaution**: kerosene in a drink bottle, poisoning, keep it labelled and locked away.',
  ['Why must kerosene never be stored in a soft-drink bottle?', ['A child may drink it, thinking it is a drink', 'It evaporates faster', 'The bottle may melt', 'It changes colour'], 'Many children are poisoned this way.'],
  [['Supervise', 'To watch over someone to keep them safe.'], ['Hazard', 'Something that could cause harm.'], ['Suffocation', 'Being unable to breathe because air is cut off.']],
  [
    { q: 'You visit a home and see: a baby on a bed alone, a pot of boiling water with its handle sticking out, and a bucket of water on the floor. Name the danger of each and how to make it safe.', steps: ['**Baby alone on a bed**: it may **fall**. Put the baby in a cot or on a mat on the floor, or stay with it.', '**Pot handle sticking out**: a child may pull it down and be **scalded**. Turn the handle inwards and keep children away from the cooker.', '**Open bucket of water**: a toddler may fall in and **drown**. Cover it or empty it after use.'] },
  ]),

  // ---------- Cooking methods ----------
  L('he-moist-2', 'he-f2-cooking', '11.1', 'Cooking methods with moist heat', 9, ['Cookery'], [
    'Food is cooked to **kill germs**, make it **easier to chew and digest**, improve its **flavour** and **appearance**, and help it **keep** longer. Cooking methods use either **moist heat** (water or steam) or **dry heat**.',
    '**Boiling** cooks food in water at **100 °C**: yams, rice, plantains, eggs, beans. It is simple and safe, but **vitamins B and C** dissolve into the water; to keep them, use little water, put vegetables into water that is already boiling, cook them only until just tender and use the water in sauces. **Simmering** cooks just below boiling, gently, as for soups.',
    '**Steaming** cooks food in the **steam** rising from boiling water, without the food touching the water, as for **koki** and **moi-moi** wrapped in leaves, or fish. It keeps more nutrients and flavour, and the food is light and easy to digest, but it is slower.',
    '**Stewing** cooks food slowly in a **small amount of liquid** in a covered pot, at simmering heat, as in meat stews and many sauces. It makes **tough meat tender**, and the nutrients that come out stay in the sauce, which is eaten. **Poaching** cooks delicate foods such as eggs or fish gently in liquid below boiling point.',
  ], null, 'Choose the method that suits the food: **steam** or quick-boil vegetables to save vitamins; **stew** tough meat to make it tender.',
  ['Which cooking method keeps the most vitamin C in green vegetables?', ['Steaming', 'Boiling for a long time in a lot of water', 'Deep frying', 'Stewing for hours'], 'In steaming the food does not sit in water, so less vitamin C dissolves out.'],
  [['Boiling', 'Cooking food in water at 100 °C.'], ['Steaming', 'Cooking food in the steam from boiling water.'], ['Stewing', 'Cooking food slowly in a little liquid in a covered pot.']],
  [
    { q: 'Give two advantages and one disadvantage of stewing tough meat.', steps: ['**Advantage 1:** slow, moist cooking makes **tough meat tender**.', '**Advantage 2:** juices and nutrients go into the **sauce**, which is eaten, so little is lost.', '**Disadvantage:** it takes a **long time** and uses more fuel.'] },
  ]),

  L('he-dry-2', 'he-f2-cooking', '11.2', 'Cooking methods with dry heat, and frying safely', 9, ['Cookery', 'Safety'], [
    '**Baking** cooks food by **hot air** in an oven: bread, cakes, pies and biscuits. **Roasting** cooks food with little or no water, in an oven or over an open fire: roasted maize, roasted plantain, groundnuts, fish and meat. **Grilling** cooks food quickly by strong **direct heat** above or below it, as for brochettes (soya), fish and corn; fat drips away, so it is a healthier way to cook meat.',
    '**Frying** cooks food in **hot fat or oil**. **Shallow frying** uses a little oil in a frying pan (eggs, plantain slices, fish). **Deep frying** covers the food completely in hot oil (puff-puff, chips, akara or beignets). Fried food is tasty and quick to cook but **absorbs fat**, so it is high in energy; too much fried food leads to overweight and heart disease.',
    '**Frying safely**: dry the food before putting it in the oil; never fill the pan more than half full of oil; lower food in gently with a spoon; keep the handle turned inwards; **never leave hot oil unattended**; keep children away. If the oil catches fire, turn off the heat if you can and cover the pan with a **lid or a damp cloth**; **never** throw water on it.',
    'Remember that dry-heat methods brown the outside of food, giving colour and flavour, but they can dry food out and burn it if it is not watched.',
  ], null, 'Never put water on burning oil: **cover** the pan to cut off the air.',
  ['Puff-puff is cooked by:', ['Deep frying', 'Boiling', 'Steaming', 'Grilling'], 'The dough is dropped into hot oil that covers it completely.'],
  [['Baking', 'Cooking food by hot air in an oven.'], ['Grilling', 'Cooking food quickly by strong direct heat.'], ['Deep frying', 'Cooking food completely covered in hot oil.']],
  [
    { q: 'Explain why grilled fish is healthier than deep-fried fish.', steps: ['In **grilling**, fat from the fish **drips away**, and no oil is added.', 'In **deep frying**, the fish **absorbs oil**, which adds a lot of fat and energy.', 'Eating less fat helps prevent **overweight and heart disease**, so grilled fish is the healthier choice.'] },
  ]),

  // ---------- Table setting ----------
  L('he-table-2', 'he-f2-table', '12.1', 'Setting the table and table manners', 8, ['Meal service', 'Practical'], [
    'A well-set table makes a meal pleasant. Use a clean **tablecloth** or **mats**. The place for one person is called a **cover**. Put the **plate** in the middle, about 2 cm from the edge of the table. The **fork** goes on the **left**, and the **knife** on the **right** with its **blade facing the plate**, with the **soup spoon** to the right of the knife. The **dessert spoon** and fork lie **above** the plate. The **glass** stands above the knife, and the **side plate** is on the left, with the **napkin** on it or beside the fork.',
    'Cutlery is placed in the order it will be used, **from the outside inwards**. Put serving dishes with serving spoons, water and salt in the **centre** of the table so everyone can reach them.',
    '**Table manners** show respect for others: wash your hands before eating; wait until everyone is served, or until grace is said; sit upright; chew with your **mouth closed** and do not talk with your mouth full; ask for dishes to be **passed** instead of reaching across; do not use your phone at table; and thank the person who cooked. Help to clear the table afterwards.',
    'Many Cameroonian meals, such as fufu with soup, are eaten with the **hand**. Then wash the hands before and after eating, use the **right hand**, and take food from the part of the dish in front of you.',
  ], 'table-setting', 'Fork on the **left**, knife on the **right** (blade **in**), spoon **outside** the knife, glass **above** the knife.',
  ['When laying a cover, the knife is placed:', ['On the right, with the blade facing the plate', 'On the left, with the blade outwards', 'Above the plate', 'On the side plate'], 'The fork goes on the left and the knife on the right, blade inwards.'],
  [['Cover', 'The place setting for one person at a table.'], ['Cutlery', 'Knives, forks and spoons.'], ['Table manners', 'Polite ways of behaving while eating with others.']],
  [
    { q: 'Describe how to lay a cover for a meal of soup followed by rice and stew, with fruit salad for dessert.', steps: ['Place the **dinner plate** in the centre, 2 cm from the edge of the table.', 'Put the **fork** on the left and the **knife** on the right with the blade facing in, and the **soup spoon** to the right of the knife (used first, so outermost).', 'Put the **dessert spoon** above the plate, the **glass** above the knife and the **napkin** on the left.'] },
  ]),
];
