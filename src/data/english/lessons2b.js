// English Language lessons for Form 2 (second part): weather, environment and
// basic travel; health, civic rights and information literacy; writing and the
// revision of the year. Original text written for this app. **double
// asterisks** mark key terms; `examples` are worked examples.

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

export const LESSONS_2B = [
  // ---------- 11. Weather ----------
  L('en-weather-2', 'en-f2-weather', '11.1', 'Weather words and the seasons of Cameroon', 12, ['Vocabulary', 'Reading', 'Speaking'], [
    'Weather words: sunny, cloudy, rainy, windy, stormy, foggy, misty, hot, warm, cool, cold, humid, dry; sun, cloud, rain, drizzle, shower, thunder, lightning, storm, flood, drought, temperature, degrees Celsius (°C), forecast. We describe the weather with "It is…": "It is hot and humid today." "It rained heavily last night."',
    'Cameroon has two main seasons, the **rainy season** and the **dry season**. In the south the rains are long (roughly March to November) and the air is humid all year; places near the coast such as Douala and Debundscha are among the wettest in Africa. In the north the rainy season is short (roughly June to September) and the long dry season is hot, with the **harmattan**, a dry, dusty wind from the Sahara, between about November and February.',
    'Describing a **weather pattern** means saying what usually happens and when: "In the north it is usually very hot in March and April." "In the dry season the harmattan brings dust and cold mornings." Use the simple present for patterns and the simple past for what happened: "Yesterday it was cloudy."',
  ], 'en1-weather', 'Pattern: simple present. Yesterday’s weather: simple past.',
  ['A long period with no rain is a:', ['drought', 'flood', 'shower', 'storm'], 'Crops suffer in a drought.'],
  [['Harmattan', 'A dry, dusty wind from the Sahara in the dry season.'], ['Humid', 'With a lot of water vapour in the air.']],
  [
    { q: 'Write three sentences about the weather pattern in your town.', steps: ['A pattern in the simple present: "**In Bamenda it usually rains from March to October.**"', '"**In December and January the mornings are cool and the harmattan makes the air dusty.**"', 'Yesterday in the simple past: "**Yesterday it was sunny in the morning, but it rained in the evening.**"'] },
  ]),

  L('en-comparatives-2', 'en-f2-weather', '11.2', 'Comparative adjectives and as … as', 12, ['Grammar'], [
    'We use **comparatives** to compare two things, with **than**. Short adjectives (one syllable) add **-er**: cold → colder, warm → warmer. Spelling: e → add -r (large → larger); one short vowel + one consonant → double it (hot → hotter, wet → wetter, big → bigger); consonant + y → -ier (dry → drier, sunny → sunnier, heavy → heavier).',
    'Long adjectives (most with two syllables and all with three or more) use **more**: more humid, more dangerous, more beautiful, more comfortable. **Irregular**: good → better, bad → worse, far → farther or further, little → less, much/many → more.',
    'For things that are **equal**, use **as … as**: "Today is **as hot as** yesterday." For things that are not equal: "Buea is **not as hot as** Douala." Do not write "more hotter": use either -er or more, never both.',
  ], 'comparison-forms', 'Short word, add -er; long word, put more; never both.',
  ['"The rainy season is ___ than the dry season in Limbe." (wet)', ['wetter', 'more wetter', 'wettest', 'more wet'], 'Short adjective: double t, add -er.'],
  [['Comparative', 'The form of an adjective used to compare two things: colder, more humid.']],
  [
    { q: 'Compare Garoua and Buea: (a) hot (b) humid in the dry season (c) cool, with "not as … as".', steps: ['(a) "**Garoua is hotter than Buea.**"', '(b) "**In the dry season Buea is more humid than Garoua.**"', '(c) "**Garoua is not as cool as Buea.**"'] },
  ]),

  // ---------- 12. Environment ----------
  L('en-superlatives-2', 'en-f2-environment', '12.1', 'Superlative adjectives', 10, ['Grammar'], [
    'We use **superlatives** to compare one thing with all the others in a group, with **the**. Short adjectives add **-est**: high → the highest, long → the longest, wet → the wettest, large → the largest, dry → the driest. Long adjectives use **the most**: the most beautiful, the most important, the most polluted. Irregular: good → the best, bad → the worst, far → the farthest or furthest.',
    'Superlatives often go with **in** (a place or group) or **of** (a number): "Mount Cameroon, at over 4 000 metres, is **the highest** mountain **in** Cameroon." "The Sanaga, about 900 kilometres long, is **the longest** river **in** Cameroon." "This is **the cleanest** classroom **of** all."',
  ], 'en2-superlatives', 'One against all: the -est or the most.',
  ['"This is the ___ day of the year." (hot)', ['hottest', 'hotter', 'most hot', 'hotest'], 'Double t, add -est.'],
  [['Superlative', 'The form of an adjective that compares one thing with all the others: the highest, the most beautiful.']],
  [
    { q: 'Complete: (a) "Lake Chad is one of the (large) lakes in Africa." (b) "Burning bushes is one of the (bad) things for the soil." (c) "Limbe beach is the (beautiful) place I know."', steps: ['(a) **largest** (e → add -st)', '(b) **worst** (irregular)', '(c) **most beautiful** (long adjective)'] },
  ]),

  L('en-environment-2', 'en-f2-environment', '12.2', 'Our environment: landforms, vegetation and environmental problems', 12, ['Vocabulary', 'Reading', 'Writing'], [
    'The **environment** is everything around us: land, water, air, plants and animals. Landforms: mountains, hills, plateaus, valleys, plains, rivers, lakes, waterfalls, the coast. Vegetation of Cameroon: **rainforest** in the south and east; **mangroves** along parts of the coast; **grassland** on the western highlands; **savanna** (grass with scattered trees) in the centre and north; and drier **Sahel** land with thorny bushes in the Far North.',
    'Environmental **problems**: **deforestation** (cutting trees without replanting); **bush fires**; **soil erosion** (rain washing away bare soil); **pollution** of air, water and land (smoke, plastics, chemicals, sewage); **desertification** in the Far North; and the loss of wild animals through poaching.',
    'Describing **environmental patterns**: say where and when things happen and what causes them: "In the dry season farmers burn the grass, so many hills look black and bare." **Protecting** the environment: plant trees, use bins, recycle plastics, use less firewood, protect water sources and wild animals.',
  ], 'en2-environment', 'Name the problem, its cause and one way to solve it.',
  ['Mangroves grow:', ['along the coast where salty water meets the land', 'on the top of Mount Cameroon', 'in the Sahara', 'only in towns'], 'For example near Douala and Limbe.'],
  [['Deforestation', 'Cutting down forests without replanting them.'], ['Erosion', 'The wearing away of soil by water or wind.'], ['Pollution', 'Making the air, water or land dirty and harmful.']],
  [
    { q: 'Write three sentences about one environmental problem in your area: what it is, its cause, and a solution.', steps: ['Problem: "**Soil erosion is a serious problem on the hills near our village.**"', 'Cause: "**It happens because people cut the trees and farm on steep slopes.**"', 'Solution: "**We can plant trees and grass to hold the soil in place.**"'] },
  ]),

  // ---------- 13. Directions ----------
  L('en-dirprep-2', 'en-f2-directions', '13.1', 'Prepositions of direction and place', 12, ['Grammar'], [
    '**Prepositions of direction** show movement: **across** (from one side to the other of a flat or open place: across the road, across the bridge, across the river), **through** (in one side and out the other of something with sides or a body: through the forest, through the tunnel, through the market), **along** (following a line: along the river, along the street), **past** (going beyond: walk past the church), **into** and **out of**, **up** and **down**, **towards**, **round** (round the corner).',
    '**Prepositions of place** show position: **next to** or **beside**, **opposite** (facing, on the other side), **between** (in the middle of two), **behind**, **in front of**, **near**, **at the corner of**, **on the left / on the right**.',
    'Example: "Walk **along** this street, go **past** the church and cross **over** the bridge. The clinic is **opposite** the bank, **between** the bakery and the pharmacy."',
  ], 'en2-direction-preps', 'Across a flat space; through something with walls or trees around you.',
  ['"The children ran ___ the tunnel and came out on the other side."', ['through', 'across', 'along', 'opposite'], 'In one end and out the other.'],
  [['Preposition of direction', 'A word that shows movement towards, past or through a place.']],
  [
    { q: 'Use the right preposition: (a) We walked ___ the football field. (b) The train went ___ the hill in a tunnel. (c) The post office is ___ the market, facing it.', steps: ['(a) a flat open space → **across**', '(b) inside the hill → **through**', '(c) facing it → **opposite**'] },
  ]),

  L('en-signs-2', 'en-f2-directions', '13.2', 'Giving directions; reading signposts, maps and the compass', 12, ['Speaking', 'Reading'], [
    'Asking the way: "Excuse me, how do I get to the hospital?" "Could you tell me the way to the station, please?" "Is the market far from here?" Giving directions uses the **imperative**: go straight on, turn left, turn right, take the first (second) turning on the left, cross the road, go past the school, keep going until you reach the roundabout. "It’s on your left." "You can’t miss it."',
    '**Direction indicators**: a **signpost** at a junction has arms with place names and sometimes distances ("Kumba 22 km"); **road signs** show turns, roundabouts, pedestrian crossings and schools; **arrows** on buildings show entrances and exits. On a **map**, find the **north arrow**; north is usually at the top. The four **cardinal points** are **north, south, east and west**; between them are north-east, south-east, south-west and north-west. The sun rises in the east and sets in the west.',
  ], 'en2-compass', 'Find north first, then everything else falls into place.',
  ['The direction between north and east is:', ['north-east', 'south-west', 'north-west', 'east-west'], 'Halfway between north and east.'],
  [['Cardinal points', 'The four main directions: north, south, east and west.'], ['Signpost', 'A post at a junction showing the way to places.']],
  [
    { q: 'Give directions from the school gate to the clinic: turn right at the gate, go past the church, take the second turning on the left, the clinic is opposite the bank.', steps: ['"**When you leave the gate, turn right.**"', '"**Go straight on, past the church.**"', '"**Take the second turning on the left.**"', '"**The clinic is on your right, opposite the bank. You can’t miss it.**"'] },
  ]),

  // ---------- 14. Travel ----------
  L('en-goingto-2', 'en-f2-transport', '14.1', 'Going to for plans and predictions', 10, ['Grammar'], [
    '**Be going to** + base form talks about the future in two ways. (1) **Plans and intentions** already decided: "I **am going to visit** my uncle in Kribi during the holidays." "We **are going to travel** by bus." (2) **Predictions** from something we can see now: "Look at that full bus. It **is going to be** a slow journey." "The road is very muddy; the taxi **is going to get** stuck."',
    'Forms: I am going to; you/we/they are going to; he/she/it is going to. Negative: "I am not going to take the motorbike." Question: "**Are** you **going to** buy your ticket today?" "Yes, I am." / "No, I’m not." Time words: tomorrow, next week, next month, this weekend, during the holidays.',
  ], 'future-forms', 'A plan in your head, or a sign before your eyes: going to.',
  ['"The sky is dark. It ___ rain."', ['is going to', 'are going to', 'going to', 'goes to'], 'A prediction from what we see.'],
  [['Intention', 'Something you have decided to do.'], ['Prediction', 'A statement about what will happen.']],
  [
    { q: 'Write a holiday plan with going to: where, how, with whom, what you will do.', steps: ['"**During the holidays I am going to visit my grandmother in Kumbo.**"', '"**My brother and I are going to travel by bus.**"', '"**We are going to help her on the farm and visit the market.**"'] },
  ]),

  L('en-transport-2', 'en-f2-transport', '14.2', 'Local means of transport and travel words', 12, ['Vocabulary', 'Speaking'], [
    'Means of transport: by **road** (on foot, bicycle, motorbike taxi, taxi, bus, lorry, car); by **rail** (train); by **water** (canoe, boat, ferry, ship); by **air** (aeroplane). We say "**by** bus", "**by** train", but "**on** foot". In Cameroon, trains link Douala, Yaoundé and Ngaoundéré; boats carry people and goods on rivers and along the coast; many towns depend on taxis and motorbike taxis.',
    'Travel words: passenger, driver, conductor, fare, ticket, travel agency, bus station, motor park, timetable, departure, arrival, journey, luggage, seat belt, helmet, delay, breakdown.',
    'Safety when travelling: wear a seat belt or a helmet; do not overload vehicles; refuse to travel with a driver who has drunk alcohol; keep your luggage and money safe; arrive early for departure. Dialogue at a travel agency: "Good morning. I’d like a ticket to Bafoussam, please." "One way or return?" "One way. What time does the bus leave?" "At 8 o’clock."',
  ], 'en2-transport', '"By" bus, "by" train, but "on" foot.',
  ['We travel "___ foot".', ['on', 'by', 'in', 'with'], 'On foot is the exception.'],
  [['Fare', 'The money a passenger pays for a journey.'], ['Luggage', 'The bags and cases a traveller carries.']],
  [
    { q: 'Complete the dialogue at the bus agency: Passenger: ___ (asks for a ticket to Ebolowa) Agent: "One way or return?" Passenger: ___ Agent: "6 000 francs." Passenger: ___ (asks the time)', steps: ['"**Good morning. I’d like a ticket to Ebolowa, please.**"', '"**Return, please. How much is it?**"', '"**What time does the bus leave?**"'] },
  ]),

  // ---------- 15. Health centre ----------
  L('en-ailments-2', 'en-f2-ailments', '15.1', 'Parts of the body and common ailments; talking to a health worker', 12, ['Vocabulary', 'Speaking'], [
    'Parts of the body: head, forehead, eye, ear, nose, mouth, tooth (teeth), throat, neck, shoulder, chest, stomach, back, arm, elbow, wrist, hand, finger, leg, knee, ankle, foot (feet), toe, skin.',
    'Common **ailments**: headache, toothache, earache, stomach ache, backache (the ache words), sore throat, cough, cold, fever, malaria, diarrhoea, vomiting, rash, itch, cut, burn, bruise, sprain (a twisted ankle or wrist), swelling.',
    'Telling a **health worker** how you feel: "I have a headache." "I have a pain in my stomach." "My knee hurts." "I feel dizzy." "I have been coughing for three days." "I can’t sleep because of the itching." The nurse may ask: "What’s wrong?" "Where does it hurt?" "How long have you had it?" "Do you have a fever?" Answer clearly and say when it started.',
  ], 'en2-ailments', 'Say where it hurts, how it feels and since when.',
  ['"I twisted my ankle playing football." This is a:', ['sprain', 'fever', 'rash', 'cough'], 'A sprain is a twisted joint.'],
  [['Ailment', 'An illness or health problem, usually not serious.'], ['Symptom', 'A sign of an illness, such as fever or a cough.']],
  [
    { q: 'You have had a sore throat and a fever since Monday. Answer the nurse: "What’s wrong?" "How long have you had it?"', steps: ['"**I have a sore throat and a fever. It hurts when I swallow.**"', '"**I have had it since Monday.**"'] },
  ]),

  L('en-should-2', 'en-f2-ailments', '15.2', 'Should and should not for advice', 10, ['Grammar'], [
    '**Should** + base form gives **advice**: "You **should** drink plenty of water." "She **should** see a doctor." **Should not (shouldn’t)** advises against something: "You **shouldn’t** scratch the rash." "He **shouldn’t** take medicine without a prescription." The form does not change: I/you/he/she/we/they **should**. No "to" after should: "You should rest", not "You should to rest".',
    'Questions: "**Should** I take the tablets before or after meals?" "What **should** I do for a burn?" Advice for common problems: for a small burn, you should cool it under clean running water; for a cut, you should wash it and cover it with a clean bandage; for malaria, you should sleep under a treated mosquito net and get tested at a health centre.',
  ], 'en2-should', 'Advice: should + base form, never should to.',
  ['"You have a fever. You ___ go to the health centre."', ['should', 'shouldn’t', 'should to', 'shoulds'], 'Good advice.'],
  [['Advice', 'An opinion about what someone ought to do.'], ['Prescription', 'A doctor’s written order for medicine.']],
  [
    { q: 'Give one "should" and one "shouldn’t" for a friend with a cold.', steps: ['"**You should drink warm water and rest.**"', '"**You shouldn’t share your cup with other people.**"'] },
  ]),

  // ---------- 16. State emblems ----------
  L('en-emblems-2', 'en-f2-emblems', '16.1', 'The emblems of the State and national days', 12, ['Vocabulary', 'Reading'], [
    'The Constitution of Cameroon names the **emblems** of the State: the **flag** (three vertical bands, green, red and yellow, with a yellow five-pointed star in the centre of the red band); the **national anthem**, which in English begins "O Cameroon, Thou Cradle of our Fathers"; the **seal**; the **motto**, "Peace – Work – Fatherland"; and the **coat of arms**. They stand for the unity of the nation.',
    'Respecting the emblems: stand still and stop talking when the anthem is played or the flag is raised or lowered; do not tear, burn or write on the flag; learn the anthem in English and French.',
    'National days: **11 February**, Youth Day (remembering the 1961 plebiscite); **20 May**, National Day (the unitary state created in 1972), with parades in every town. Other public holidays include 1 January, 1 May (Labour Day) and religious feasts.',
  ], 'en1-symbols', 'When the anthem plays, stand still: it is the nation’s song.',
  ['The star on the flag of Cameroon is in the:', ['red band', 'green band', 'yellow band', 'top corner'], 'The yellow star sits in the centre.'],
  [['Emblem', 'An official symbol that stands for a country.'], ['Motto', 'A short phrase that expresses an ideal.']],
  [
    { q: 'Write three rules for showing respect to the national emblems at school.', steps: ['"**Stand still and stop talking when the national anthem is sung.**"', '"**Face the flag while it is raised or lowered.**"', '"**Never tear, burn or write on the flag.**"'] },
  ]),

  L('en-canmay-2', 'en-f2-emblems', '16.2', 'Can and may for permission and requests', 10, ['Grammar', 'Speaking'], [
    'Asking for **permission**: "**Can** I borrow your ruler?" (informal, to a friend) "**May** I come in, Sir?" (formal and polite, to a teacher or an adult). "Could I…?" is also polite.',
    'Giving permission: "Yes, you **can**." "Yes, you **may**." "Of course." "Go ahead." Refusing: "No, you **can’t**." "I’m sorry, you **may not**." Rules: "Visitors **may** enter the campus only with a badge." "Students **may not** use phones in class." **Can** also shows ability: "She **can** sing the anthem in French."',
    'Can and may take the base form, with no "to" and no -s: "He may go", not "He mays to go".',
  ], 'en1-permission', 'To an adult, ask with "May I…?"',
  ['The most polite way to ask your principal is:', ['May I speak to you, please?', 'Can I talk?', 'I want to talk.', 'Listen to me.'], '"May I" is formal and polite.'],
  [['Permission', 'Being allowed to do something.']],
  [
    { q: 'Ask for permission politely: (a) to leave class early (b) to use the school computer (c) to go to the toilet.', steps: ['(a) "**May I leave the class early today, please? I have a clinic appointment.**"', '(b) "**Could I use the computer to type my project, please?**"', '(c) "**May I go to the toilet, please?**"'] },
  ]),

  // ---------- 17. Rights and duties ----------
  L('en-rights-2', 'en-f2-rights', '17.1', 'The rights and duties of the child', 12, ['Vocabulary', 'Reading'], [
    'A **right** is something every person should have or be allowed to do. A **child** is anyone under 18. International agreements such as the **Convention on the Rights of the Child** (1989) and the **African Charter on the Rights and Welfare of the Child** (1990) protect children. Rights include: a name and nationality; life and health; **education**; protection from violence, abuse, child labour and trafficking; food and shelter; play and rest; and being heard.',
    'Rights come with **duties**: respect parents, elders, teachers and the law; go to school and work hard; help at home; protect public property; respect other people’s rights.',
    'When a right is **abused** (for example a child is beaten badly, forced to work instead of going to school, or married too young), the child or a friend should tell a trusted adult, a teacher, the guidance counsellor, a social worker or the police. The **Day of the African Child** is on 16 June.',
  ], 'en2-rights-duties', 'Every right has a matching duty.',
  ['Which is a duty, not a right?', ['respecting your teachers', 'education', 'health care', 'a name'], 'A duty is something you must do.'],
  [['Right', 'Something every person is entitled to.'], ['Duty', 'Something a person must do.'], ['Child labour', 'Work that harms a child or keeps the child from school.']],
  [
    { q: 'Match each right to a duty: education; protection from violence; play.', steps: ['Education → **go to school and work hard**', 'Protection from violence → **do not bully or hurt others**', 'Play → **play safely and finish your chores and homework first**'] },
  ]),

  L('en-conjunctions-2', 'en-f2-rights', '17.2', 'Joining ideas with and, but, because and then', 10, ['Grammar', 'Writing'], [
    '**Conjunctions** join words and ideas. **And** adds: "Children have rights **and** duties." **But** shows contrast: "Kum wanted to go to school, **but** his uncle made him sell in the market." **Because** gives a reason: "The girls were happy **because** the school built new toilets." **So** gives a result: "It was late, **so** we went home."',
    '**Then** shows the next step in time: "First we read the poster, **then** we discussed it." To tell events in order, use **first, then, after that, later, finally**. Do not start every sentence with "and"; vary your linking words. Put a comma before "but" and "so" when they join two long ideas.',
  ], 'en2-conjunctions', 'And adds, but contrasts, because explains, then moves on.',
  ['"He was ill, ___ he still came to school."', ['but', 'because', 'and then because', 'so'], 'Contrast: but.'],
  [['Conjunction', 'A word that joins words or sentences, such as and, but or because.']],
  [
    { q: 'Join with the right word: (a) Ayuk was absent. He was sick. (b) We cleaned the yard. We planted flowers. (next) (c) It rained. The match went on.', steps: ['(a) reason → "**Ayuk was absent because he was sick.**"', '(b) next step → "**We cleaned the yard, then we planted flowers.**"', '(c) contrast → "**It rained, but the match went on.**"'] },
  ]),

  // ---------- 18. Safe digital content ----------
  L('en-digitalsafe-2', 'en-f2-digital', '18.1', 'Choosing safe, age-appropriate digital content', 12, ['Reading', 'Speaking'], [
    '**Digital content** is anything on a phone, a computer or a television: videos, games, apps, websites, music and messages. **Age-appropriate** content is suitable for your age. Many games, films and apps have an **age rating** (for example 12+ means for people aged 12 and above).',
    'Choosing safely: use trusted apps and websites; check the age rating; ask a parent or teacher before downloading; never share your full name, address, school, passwords or photos with strangers; do not meet anyone you only know online; close and report anything violent, rude or frightening; balance screen time with study, sleep and play.',
    '**Information literacy** means knowing how to find and judge information. Ask: Who wrote it? When? Is it a known, trusted source? Do other sources say the same? Is it trying to sell me something or make me angry? Only share what you know is true.',
  ], 'en2-safe-content', 'Not sure it is safe? Stop and ask an adult.',
  ['"12+" on a game means it is for people:', ['aged 12 and above', 'under 12 only', 'who have 12 friends', 'who play 12 hours'], 'An age rating.'],
  [['Age-appropriate', 'Suitable for a person’s age.'], ['Information literacy', 'The skill of finding and judging information.']],
  [
    { q: 'A stranger in a game chat asks for your phone number and school. What should you do?', steps: ['**Do not answer or share any personal information.**', '**Block or report the person in the game.**', '**Tell a parent or teacher what happened.**'] },
  ]),

  L('en-reported-2', 'en-f2-digital', '18.2', 'Direct and indirect statements: an introduction', 12, ['Grammar'], [
    '**Direct speech** gives the exact words inside quotation marks: The nurse said, "**Drink a lot of water.**" Bih said, "**I am hungry.**" **Indirect (reported) speech** reports the meaning without quotation marks, usually with **that**: Bih said **that she was hungry**.',
    'Changes in indirect speech after **said** or **told**: (1) **pronouns** change to fit the speaker: I → he/she, my → his/her, we → they; (2) the **tense** moves one step back: am/is → was, are → were, present simple → past simple ("I like rice" → he said that he liked rice); (3) some **time words** change: now → then, today → that day, tomorrow → the next day.',
    '**Said** and **told**: "said" has no person after it ("She said that…"); "told" needs a person ("She **told me** that…"). Never write "said me" or "told that".',
  ], 'en2-direct-indirect', 'Said + that; told + a person + that.',
  ['"I am late," said Tabe. Indirect:', ['Tabe said that he was late.', 'Tabe said that I am late.', 'Tabe told that he is late.', 'Tabe said me he was late.'], 'am → was; I → he.'],
  [['Direct speech', 'The exact words of a speaker, in quotation marks.'], ['Indirect speech', 'Reporting what someone said without the exact words.']],
  [
    { q: 'Change to indirect speech: (a) My mother said, "I am going to the market." (b) The teacher told us, "The test is tomorrow."', steps: ['(a) **My mother said that she was going to the market.** (I → she; am → was)', '(b) **The teacher told us that the test was the next day.** (is → was; tomorrow → the next day)'] },
  ]),

  // ---------- 19. Letters and stories ----------
  L('en-letter-2', 'en-f2-letter', '19.1', 'The informal letter to a relative', 14, ['Writing'], [
    'An **informal letter** goes to someone you know well: a grandparent, an uncle, an aunt, a cousin. Layout: **your address** at the top right, with the **date** below it; the **greeting** on the left ("Dear Grandma," "Dear Uncle Ewane,"); the **body** in paragraphs; the **closing** ("Your loving grandson," "Your niece," "With love,") and your **first name**. There is no receiver’s address in an informal letter.',
    'The body in about **100 to 120 words**: paragraph 1 greets and asks about the person’s health and family ("I hope you are well"); paragraph 2 gives your main news or purpose (school results, a request, thanks for a gift); paragraph 3 ends politely ("Greet everyone for me. I look forward to hearing from you.").',
    'Style: friendly and natural, but still correct; short forms (I’m, can’t) are acceptable; no slang or text language ("u", "pls"). Check the layout, spelling and full stops before you finish.',
  ], 'letter-informal', 'Address and date top right; first name at the end.',
  ['Which closing suits a letter to your uncle?', ['Your loving nephew,', 'Yours faithfully,', 'Signed, the Manager,', 'To whom it may concern,'], 'Warm and personal.'],
  [['Informal letter', 'A friendly letter to someone you know well.'], ['Layout', 'The way the parts of a letter are arranged on the page.']],
  [
    { q: 'Plan a letter to your aunt thanking her for a new school bag.', steps: ['Paragraph 1: greet and ask about her health: "**I hope you and the family are well.**"', 'Paragraph 2: thank her and say how you use the bag: "**Thank you for the lovely school bag. It holds all my books and keeps them dry.**"', 'Paragraph 3: close: "**Greet my cousins for me. Your loving niece, Enanga.**"'] },
  ]),

  L('en-narrative-2', 'en-f2-letter', '19.2', 'Guided narrative descriptions', 14, ['Writing'], [
    'A **guided narrative** tells a story from given points or pictures, in about **100 to 120 words**. It has a **beginning** (who, where, when), a **middle** (what happened, in order, often with a problem) and an **end** (how it finished and how the people felt).',
    'Write in the **simple past** (went, saw, helped, arrived). Use **time connectors**: one morning, first, then, after that, suddenly, a few minutes later, finally, in the end. Add **description** with adjectives and adverbs: "a narrow, muddy path", "she ran quickly". Use direct speech once or twice to bring the story to life: "Help!" cried the little boy.',
    'Before writing, list the points in order. After writing, check that every point is included, the tenses are in the past, and the story stays within the word limit.',
  ], 'en1-narrative', 'Beginning, middle, end: in the past, in order.',
  ['A narrative is usually written in the:', ['simple past', 'imperative', 'future', 'present continuous only'], 'It tells finished events.'],
  [['Narrative', 'A piece of writing that tells a story.'], ['Time connector', 'A word or phrase that shows when events happen: then, later, finally.']],
  [
    { q: 'Write a 4-sentence narrative from these points: going to school; a child falls into a gutter; you help; the teacher thanks you.', steps: ['Beginning: "**One rainy morning, I was walking to school along a muddy road.**"', 'Problem: "**Suddenly, a small boy slipped and fell into the gutter.**"', 'Action: "**I quickly pulled him out and helped him wash his hands at a tap.**"', 'End: "**When we arrived, the teacher thanked me, and I felt proud.**"'] },
  ]),

  // ---------- 20. Revision ----------
  L('en-revision-2', 'en-f2-revision', '20.1', 'Revision of the year’s grammar and sounds', 14, ['Grammar', 'Revision'], [
    'Form 2 grammar to revise: the simple present and the present continuous; adverbs of frequency; prepositions of time (at, on, in), place and direction; countable and uncountable nouns with some, any, much, many, a few and a little; the simple past of regular and irregular verbs; comparatives and superlatives; going to; can, may, should and shouldn’t; the conjunctions and, but, because, so and then; direct and indirect statements.',
    'Sounds: the short /æ/ and long /ɑː/; the -s endings /s/, /z/, /ɪz/ and the -ed endings /t/, /d/, /ɪd/. Vocabulary fields: routines and hygiene, sanitation, school life and safety, the market and money, weather and environment, directions and transport, the body and ailments, emblems and rights, digital safety.',
    'Revision method: for each point, write one rule and two example sentences on a card, then test yourself with a friend. Practise transformations: change the tense, change a sentence to a question or a negative, and change direct speech to indirect.',
  ], 'en2-revision', 'One card per point: a rule and two examples.',
  ['"There ___ any bread left." (negative)', ['isn’t', 'aren’t', 'not', 'don’t'], 'Bread is uncountable: is not.'],
  [['Transformation', 'Rewriting a sentence in another form, such as a question or a negative.']],
  [
    { q: 'Transform: (a) "She bought oranges." (question with did) (b) "They are playing." (negative) (c) "Kribi is hot." (comparative with Buea)', steps: ['(a) "**Did she buy oranges?**"', '(b) "**They are not playing.**"', '(c) "**Kribi is hotter than Buea.**"'] },
  ]),

  L('en-exampractice-2', 'en-f2-revision', '20.2', 'The four sections of the English paper', 14, ['Reading', 'Writing', 'Revision'], [
    'The harmonised evaluation grid for Form 2 has four sections. **A. Listening and speaking (20%)**: dictation, filling in dialogues, answering questions on what you hear, and short sound drills. **B. Reading comprehension (30%)**: an unseen passage of **150 to 200 words**, questions on facts in the text, and the meaning of words in context. **C. Grammar and vocabulary (30%)**: multiple-choice cloze passages, changing sentence structures, and matching words. **D. Composition (20%)**: a guided narrative or a simple informal letter (for example to a relative) of **100 to 120 words**.',
    'Tips: in **dictation**, listen to the whole sentence first, then write, and check spelling and punctuation; in **comprehension**, read twice and look for the answer in the passage; in **cloze**, read the whole sentence before choosing; in **composition**, plan for a few minutes, follow the layout and count your words roughly. Share your time according to the marks.',
  ], 'en2-paper', 'Plan your time by the marks: 20, 30, 30, 20.',
  ['Which section has a passage of 150 to 200 words?', ['B. Reading comprehension', 'A. Listening and speaking', 'C. Grammar and vocabulary', 'D. Composition'], 'An unseen passage.'],
  [['Cloze passage', 'A text with gaps to fill with the right words.'], ['Dictation', 'Writing down what is read aloud.']],
  [
    { q: 'You have 2 hours for the paper. Share the time by the section weights.', steps: ['A (20%) ≈ **25 minutes**', 'B (30%) ≈ **35 minutes**', 'C (30%) ≈ **35 minutes**', 'D (20%) ≈ **25 minutes**, including planning and checking'] },
  ]),
];
