// Home Economics lessons for Form 1 (second part): needs and wants, consumer
// rights, budgeting and saving pocket money, sewing tools, basic stitches, a
// first sewing project, the kitchen, kitchen tools, kitchen safety and first
// aid, food hygiene, home food preservation and the revision of the year.
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

export const LESSONS_1B = [
  // ---------- 11. Needs, wants and the consumer ----------
  L('he-needs-wants-1', 'he-f1-consumer', '11.1', 'Needs and wants', 9, ['Consumer education'], [
    'A **need** is something we **must have** to live and be healthy: **food**, **clean water**, **clothing**, **shelter**, **health care** and **education**. A **want** is something we **would like** to have but can live without: a new phone, fashionable shoes, sweets, soft drinks, a bigger television.',
    'Whether something is a need or a want can depend on the person: a pair of shoes for school is a need, but a third pair of expensive trainers is a want. Some wants grow out of **advertising** and from wanting to copy friends.',
    'Money and other resources are **scarce** (limited), but wants are **unlimited**, so we must **choose**. A wise consumer meets **needs first**, then wants if money remains. What we give up when we choose one thing instead of another is the real cost of our choice.',
  ], 'he1-needs-wants', 'Needs first, wants later.',
  ['Which of these is a need?', ['Clean drinking water', 'A games console', 'A second phone', 'Designer sunglasses'], 'We cannot live well without water.'],
  [['Need', 'Something we must have to live and be healthy.'], ['Want', 'Something we would like but can live without.'], ['Scarcity', 'Not having enough resources for all our wants.'], ['Choice', 'Deciding between things because resources are limited.']],
  [
    { q: 'Wase has 5 000 FCFA. She needs a mathematical set (2 000 FCFA) and exercise books (2 500 FCFA), and wants earrings (1 500 FCFA). What should she buy?', steps: ['Needs: 2 000 + 2 500 = **4 500 FCFA**.', 'Money left: 5 000 − 4 500 = **500 FCFA**.', 'She should buy the **needs**; the earrings must wait until she has saved 1 000 FCFA more.'] },
  ]),

  L('he-consumer-rights-1', 'he-f1-consumer', '11.2', 'The consumer: rights and responsibilities', 10, ['Consumer education'], [
    'A **consumer** is anyone who **buys or uses goods and services**: food, clothes, transport, electricity, water, phone credit. **Consumer education** teaches us to buy wisely, know our rights and protect ourselves from cheating.',
    '**Rights of a consumer** (recognised by the United Nations and by consumer groups):\n- **safety**: goods must not harm health or life\n- **information**: to know the price, quantity, ingredients, maker and dates (manufacture, expiry)\n- **choice**: to choose among different products and prices\n- **to be heard**: to complain and have complaints listened to\n- **redress**: to get a repair, replacement or refund for faulty goods\n- **consumer education**, the satisfaction of **basic needs** and a **healthy environment**.\nCameroon has a framework law of **2011** that protects consumers.',
    '**Responsibilities of a consumer**: **check** goods (dates, seals, weight) before paying; ask for and **keep the receipt**; read labels and instructions; compare prices; report cheating to the seller or the authorities; use goods properly; avoid waste and dispose of packaging well.',
  ], 'he1-consumer-rights', 'Your rights come with duties: check, keep the receipt, complain politely.',
  ['A consumer who gets a refund for a faulty iron is using the right to:', ['Redress', 'Safety', 'Choice', 'A healthy environment'], 'Redress puts things right.'],
  [['Consumer', 'A person who buys or uses goods and services.'], ['Redress', 'Putting right a wrong: a repair, replacement or refund.'], ['Receipt', 'A paper that proves a purchase and its price.'], ['Expiry date', 'The date after which a product should not be used.']],
  [
    { q: 'Lum buys a tin of milk and finds at home that it expired last month. What should Lum do?', steps: ['Do **not** use the milk: it may be unsafe.', 'Take it back with the **receipt** to the shop and explain politely.', 'Ask for a **replacement or a refund** (the right to redress).', 'Next time, **check the date** before paying (a consumer responsibility).'] },
  ]),

  // ---------- 12. Budgeting and saving ----------
  L('he-pocket-budget-1', 'he-f1-budget', '12.1', 'Making a budget for pocket money', 10, ['Consumer education', 'Calculation'], [
    '**Income** is money that comes in (for a student: **pocket money**, gifts, a small job in the holidays). **Expenditure** is money that goes out (snacks, transport, school materials, phone credit, gifts). A **budget** is a **written plan** for sharing your income between spending and saving, made **before** you spend.',
    '**Steps for a simple budget**:\n- write down your **income** for the week or month\n- list your **expenses**, needs first (transport, school materials), then wants\n- set aside **savings first** ("pay yourself first")\n- check that **savings + expenses ≤ income**; if not, cut wants\n- record what you **actually** spend and adjust next time.',
    'A budget helps you to make money last, to avoid **debt** (borrowing you cannot repay), to save for something important, and to learn habits you will use all your life.',
  ], 'he1-budget-steps', 'Savings plus spending must never be more than income.',
  ['In a budget, money spent on transport is:', ['Expenditure', 'Income', 'Savings', 'A gift'], 'Money going out.'],
  [['Income', 'Money received.'], ['Expenditure', 'Money spent.'], ['Budget', 'A written plan for spending and saving income.'], ['Debt', 'Money owed to someone.']],
  [
    { q: 'Make a weekly budget for 3 000 FCFA of pocket money: transport 1 000 FCFA, snacks, a pen of 200 FCFA, savings.', steps: ['Savings first: **500 FCFA**.', 'Needs: transport **1 000** and pen **200**, so 1 200 FCFA.', 'Left for snacks: 3 000 − 500 − 1 200 = **1 300 FCFA** (about 260 FCFA a school day).', 'Check: 500 + 1 200 + 1 300 = **3 000 FCFA**, equal to the income.'] },
  ]),

  L('he-saving-1', 'he-f1-budget', '12.2', 'Saving tips for adolescents', 9, ['Consumer education'], [
    '**Saving** is keeping part of your income for future use. People save for **goals** (a bicycle, school things, a small business), for **emergencies** and to avoid borrowing.',
    '**Tips for saving**:\n- set a clear **goal** and a date, for example "a dictionary of 6 000 FCFA in 12 weeks" (500 FCFA a week)\n- **save first**, as soon as you receive money\n- avoid **impulse buying**: wait a day before buying something you did not plan\n- make a **shopping list** and compare prices\n- take a snack from home sometimes instead of buying\n- take care of your things so they last\n- do not lend money you need, and avoid buying on credit.',
    '**Where to keep savings**: a **savings box** at home, a **school savings club** or a group of friends that save together with an adult in charge, or an account opened by a parent. Families in Cameroon also save in a **njangi** (a rotating savings group where each member takes the collection in turn).',
  ], 'he1-saving', 'Small amounts saved often grow into big amounts.',
  ['Waiting a day before buying something you did not plan helps to avoid:', ['Impulse buying', 'Saving', 'Budgeting', 'Comparing prices'], 'The wish often passes.'],
  [['Saving', 'Keeping part of your income for later use.'], ['Impulse buying', 'Buying suddenly without planning.'], ['Njangi', 'A savings group where members contribute regularly and take the collection in turn.'], ['Goal', 'Something you plan to achieve.']],
  [
    { q: 'Ngwa wants a pair of school sandals costing 4 800 FCFA and can save 400 FCFA a week. How long will it take?', steps: ['Weeks = 4 800 ÷ 400.', '4 800 ÷ 400 = **12 weeks**.', 'If Ngwa saves 600 FCFA a week instead: 4 800 ÷ 600 = **8 weeks**.'] },
  ]),

  // ---------- 13. Sewing tools ----------
  L('he-sewtools-1', 'he-f1-sewtools', '13.1', 'Identifying sewing tools and equipment', 10, ['Needlework'], [
    'Sewing tools are grouped by their **use**:\n- **measuring tools**: **tape measure** (usually 150 cm, for the body and fabric), ruler, hem gauge\n- **cutting tools**: **shears** (long blades, for fabric), small **scissors** (for threads), **pinking shears** (cut a zigzag edge that stops fraying), **unpicker** or seam ripper (removes wrong stitches)\n- **marking tools**: **tailor’s chalk**, tracing wheel with tracing (carbon) paper, pencil\n- **sewing tools**: **needles** (hand-sewing needles of different sizes), **pins**, **pin cushion**, **thimble** (worn on the middle finger to push the needle), **thread**, needle threader, bodkin (for threading elastic)\n- **pressing tools**: iron and ironing board\n- the **sewing machine** (hand, treadle or electric).',
    'Keep the tools together in a **sewing box** or bag, so that they are clean, safe and easy to find.',
  ], 'he1-sewtools', 'Measure, cut, mark, sew: four groups of tools.',
  ['A thimble is worn to:', ['Protect the finger when pushing the needle', 'Measure the waist', 'Cut threads', 'Mark fabric'], 'It sits on the middle finger.'],
  [['Shears', 'Large scissors with long blades for cutting fabric.'], ['Pinking shears', 'Shears that cut a zigzag edge to reduce fraying.'], ['Unpicker', 'A small tool for removing stitches.'], ['Tailor’s chalk', 'Chalk for marking lines on fabric.']],
  [
    { q: 'Name the tool you need for each job: measuring a waist, cutting fabric, marking a hem line, removing a wrong stitch.', steps: ['Measuring a waist: **tape measure**.', 'Cutting fabric: **shears**.', 'Marking a hem line: **tailor’s chalk**.', 'Removing a wrong stitch: **unpicker**.'] },
  ]),

  L('he-sewsafety-1', 'he-f1-sewtools', '13.2', 'Care of sewing tools and safety rules', 9, ['Needlework', 'Safety'], [
    '**Care of tools**: use **shears only for fabric** (paper makes them blunt); keep blades closed and dry, and oil the joint lightly; keep pins and needles in a **pin cushion** or needle case so they do not rust or get lost; roll the tape measure neatly; keep chalk dry; cover the sewing machine, clean out fluff and oil it as the instructions say.',
    '**Safety rules**:\n- never put **pins or needles in the mouth**\n- pass scissors **closed, handles first**\n- count needles and pins before and after work; pick up dropped ones with a magnet or carefully by hand\n- keep sharp tools in the **sewing box**, not in pockets or on chairs\n- keep fingers away from the moving **machine needle** and never sew over pins with a machine\n- switch off and unplug the electric machine and the iron after use, and keep cords away from feet\n- sit up straight in good light.',
  ], 'he1-sewsafety', 'Sharp tools have a home: the sewing box.',
  ['Why should shears not be used to cut paper?', ['Paper makes the blades blunt', 'Paper is too soft', 'Shears are only for wire', 'Paper makes them rust'], 'Keep fabric shears for fabric.'],
  [['Pin cushion', 'A small pad for keeping pins and needles.'], ['Blunt', 'Not sharp.'], ['Lint (fluff)', 'Small loose fibres that collect in a sewing machine.']],
  [
    { q: 'Point out three unsafe actions: a student holds pins in her mouth, leaves scissors open on a chair and sews over pins on the machine.', steps: ['Pins in the mouth: she may **swallow** or prick herself; put them in a **pin cushion**.', 'Open scissors on a chair: someone may sit on them; **close** them and keep them in the box.', 'Sewing over pins: the needle may **break** and fly up; remove pins before they reach the needle.'] },
  ]),

  // ---------- 14. Stitches ----------
  L('he-temp-stitches-1', 'he-f1-stitches', '14.1', 'Temporary stitches: tacking', 10, ['Needlework', 'Practical'], [
    '**Temporary stitches** hold fabric in place for a short time, until it is sewn permanently, and are then **removed**. They are made in a thread of a **contrasting colour** so they are easy to see and take out, usually with a single thread and no knot fastening at the end.',
    'Kinds of **tacking** (basting):\n- **even tacking**: stitches and spaces of the same length (about 1 cm), for holding seams and hems firmly\n- **uneven tacking**: long stitches with short spaces, for marking lines and for hems that need less strength\n- **diagonal tacking**: slanting stitches, for holding several layers flat, such as a lining\n- **tailor’s tacks**: loose looped stitches used to transfer pattern marks to two layers of fabric.',
    '**Starting and finishing** a thread: tie a small **knot** at the end of the thread, or begin with two small **backstitches** on the wrong side; finish with two or three small backstitches on the wrong side, then cut the thread. Thread lengths of about 45 cm do not tangle easily.',
  ], 'he1-stitch-kinds', 'Temporary stitches are tacked in, then taken out.',
  ['Tacking is usually done in a contrasting colour so that it:', ['Is easy to see and remove', 'Looks pretty forever', 'Becomes stronger', 'Matches the fabric'], 'It is removed later.'],
  [['Temporary stitch', 'A stitch that holds fabric for a while and is later removed.'], ['Tacking', 'Long temporary stitches, also called basting.'], ['Contrasting colour', 'A colour that stands out against another.']],
  [
    { q: 'Which tacking stitch would you use for each job: holding a hem before sewing, marking a centre line, holding a lining flat?', steps: ['Holding a hem: **even tacking**.', 'Marking a centre line: **uneven tacking**.', 'Holding a lining flat: **diagonal tacking**.'] },
  ]),

  L('he-perm-stitches-1', 'he-f1-stitches', '14.2', 'Permanent stitches and their uses', 10, ['Needlework', 'Practical'], [
    '**Permanent stitches** stay in the article. They are made in thread that **matches** the fabric.\n- **Running stitch**: small, even stitches in and out of the fabric; used for gathering, tucks and seams that take little strain\n- **Backstitch**: each stitch goes **back** to meet the last one, making a continuous line like machine stitching; the **strongest** hand stitch, for seams\n- **Hemming stitch**: small slanting stitches that hold down a **folded edge** (a hem) and show very little on the right side\n- **Overcasting**: slanting stitches over a **raw edge** to stop it **fraying**\n- **Blanket stitch**: looped stitches along an edge, to neaten and **decorate** it (blankets, handkerchiefs).',
    'Good stitches are **small, even and straight**, with the right tension (neither puckered nor loose). Work from right to left if you are right-handed.',
  ], 'hand-stitches', 'Running is quick, backstitch is strong, hemming holds a fold.',
  ['Which permanent stitch looks like machine stitching and is the strongest?', ['Backstitch', 'Running stitch', 'Even tacking', 'Blanket stitch'], 'Each stitch meets the one before.'],
  [['Permanent stitch', 'A stitch that stays in the finished article.'], ['Raw edge', 'A cut edge of fabric that can fray.'], ['Fray', 'When threads come loose from a cut edge.'], ['Hem', 'An edge folded and sewn down.']],
  [
    { q: 'Choose a permanent stitch for each job: joining two pieces of a bag strongly, neatening a raw edge, holding down the hem of a skirt.', steps: ['Joining strongly: **backstitch**.', 'Neatening a raw edge: **overcasting** (or blanket stitch).', 'Holding a hem: **hemming stitch**.'] },
  ]),

  // ---------- 15. Sewing project ----------
  L('he-handkerchief-1', 'he-f1-project', '15.1', 'Making a handkerchief', 10, ['Needlework', 'Practical'], [
    '**Materials**: a square of soft **cotton** fabric (for example 32 cm × 32 cm, which gives about 30 cm finished), matching thread, a needle, pins, tape measure, tailor’s chalk, shears and an iron.',
    '**Method**:\n- wash and **iron** the fabric and cut a true square, following the threads of the fabric\n- on each edge, turn **0.5 cm** to the wrong side and press; turn again **0.5 cm** to make a **double-turned hem** that hides the raw edge\n- fold the corners neatly so they lie flat\n- **pin**, then **tack** the hems in a contrasting thread\n- sew the hems with **hemming stitch** (or a decorative blanket stitch)\n- remove the tacking, **press**, and add a simple embroidered initial if you like.',
    '**Evaluation**: are the hems straight and of even width? Are the stitches small and even? Are the corners flat? Is the work clean?',
  ], 'he1-handkerchief', 'Turn twice, tack, hem, press.',
  ['A double-turned hem hides:', ['The raw edge', 'The right side', 'The thread', 'The corners only'], 'The edge is folded inside.'],
  [['Double-turned hem', 'A hem folded twice so that the raw edge is hidden.'], ['Wrong side', 'The side of the fabric that will be inside.'], ['Press', 'To flatten fabric with an iron.']],
  [
    { q: 'You want a finished handkerchief of 30 cm with a double-turned hem of 0.5 cm + 0.5 cm on every side. What size square should you cut?', steps: ['Each side loses 0.5 + 0.5 = **1 cm** of fabric to the hem.', 'There are hems on **both** ends of each line: 2 × 1 cm = 2 cm.', 'Cut size = 30 + 2 = **32 cm × 32 cm**.'] },
  ]),

  L('he-apron-1', 'he-f1-project', '15.2', 'Making a simple apron', 10, ['Needlework', 'Practical'], [
    'An **apron** protects clothes while cooking or cleaning. A simple **waist apron** has a **skirt** (one rectangle), a **waistband** with **ties**, and a **pocket**. Strong, washable **cotton** or a cotton-polyester mix is best.',
    '**Method (one example)**:\n- cut a rectangle for the skirt (for example 60 cm wide × 50 cm long), a strip for the waistband and ties (about 8 cm wide and long enough to tie round the waist), and a pocket (about 18 cm × 20 cm)\n- make **double-turned hems** on the two sides and the bottom of the skirt\n- hem the top of the pocket, turn in the other edges, pin it on and sew it with **backstitch** or a machine\n- **gather** the top of the skirt slightly with running stitches, or make small pleats\n- fold the waistband in half lengthways, place the skirt top inside it, tack, then stitch; turn in and stitch the ends of the ties\n- remove tacking and press.',
    '**Evaluation**: straight hems, strong pocket corners, ties sewn firmly, even gathers, a clean, well-pressed apron. Note what you would improve next time.',
  ], 'he1-apron', 'Hem the skirt, place the pocket, then attach the band.',
  ['On an apron, the ties are part of the:', ['Waistband', 'Pocket', 'Hem', 'Bib only'], 'They fasten it round the waist.'],
  [['Waistband', 'The band that goes round the waist.'], ['Gather', 'To draw fabric together into small folds with a running stitch.'], ['Pleat', 'A fold of fabric pressed or stitched in place.']],
  [
    { q: 'Put these steps in order: attach the waistband, cut the pieces, hem the skirt, sew on the pocket, press.', steps: ['Cut the pieces.', 'Hem the skirt.', 'Sew on the pocket.', 'Attach the waistband.', 'Press.'] },
  ]),

  // ---------- 16. The kitchen ----------
  L('he-kitchen-types-1', 'he-f1-kitchen', '16.1', 'Types of kitchens and kitchen layouts', 10, ['Kitchen'], [
    'The **kitchen** is the room where food is stored, prepared and cooked. **Types**:\n- **traditional kitchen**: often a separate building or a room behind the house, with a **wood fire** on three stones or an improved stove, and a rack or loft above the fire where maize, fish and firewood are dried and smoked\n- **modern kitchen**: inside the house, with a gas or electric cooker, a sink with running water, cupboards, work surfaces and often a refrigerator\n- many homes mix the two (a gas cooker inside and a wood fire outside for large pots).',
    '**Layouts** of a modern kitchen: **one-wall** (everything along one wall, for small spaces); **galley** or corridor (two facing walls); **L-shaped** (two walls meeting at a corner); **U-shaped** (three walls). The three most used places, the **sink**, the **cooker** and the **food store or fridge**, form the **work triangle**: they should be close together without being crowded, so that the cook walks little and nothing blocks the way.',
    '**A good kitchen** has good **light** and **ventilation** (smoke from a wood fire indoors harms the eyes and lungs), a clean **water** supply, smooth **washable** walls, floor and work surfaces, enough **storage**, a covered bin, and is near the dining area.',
  ], 'he1-kitchen-layouts', 'Sink, cooker, store: keep the triangle short.',
  ['The work triangle joins the sink, the cooker and the:', ['Food store or fridge', 'Front door', 'Window', 'Dining table'], 'The three places used most.'],
  [['Work triangle', 'The lines joining the sink, cooker and food store in a kitchen.'], ['Galley kitchen', 'A kitchen with work surfaces along two facing walls.'], ['Ventilation', 'Fresh air moving through a room.'], ['Improved stove', 'A wood stove that burns less wood and makes less smoke.']],
  [
    { q: 'Ewane’s kitchen has the fridge in the sitting room, the sink outside and the cooker inside. What is wrong and how can it improve?', steps: ['The three work places are **far apart**, so the cook walks a lot and may carry hot pots far.', 'Bring the **sink**, **cooker** and **fridge** close together in the kitchen to make a short **work triangle**.', 'Keep a clear path between them.'] },
  ]),

  L('he-kitchen-care-1', 'he-f1-kitchen', '16.2', 'Maintaining the kitchen', 9, ['Kitchen', 'Home management'], [
    'A clean kitchen keeps food safe and keeps away **pests** (cockroaches, rats, flies, ants) that spread disease.',
    '**Daily care**: "**clean as you go**": wash up after each meal; wipe work surfaces, the table and the cooker; sweep and wash the floor; empty and wash the bin; put food away in **covered containers**; hang cloths to dry in the sun.\n**Weekly care**: clean the inside of the fridge and throw away old food; wash shelves and cupboards; scrub the sink and drain; wash the walls near the cooker; clean pot racks.\n**Periodic care**: defrost the fridge if needed, wash walls and ceiling, remove soot from a wood kitchen, check gas pipes and taps, repair cracks where pests hide.',
    '**Pest control**: no food left open, no crumbs, sealed containers, a covered bin, cracks filled; use traps or insecticides only with care and never on food or plates.',
  ], 'he1-kitchen-care', 'Clean as you go.',
  ['"Clean as you go" in the kitchen means:', ['Cleaning up during and right after cooking', 'Cleaning once a month', 'Leaving the washing up for tomorrow', 'Cleaning only when visitors come'], 'Small jobs done at once.'],
  [['Pest', 'An animal or insect that damages food or spreads disease.'], ['Soot', 'Black powder left by smoke.'], ['Defrost', 'To let the ice in a fridge or freezer melt.']],
  [
    { q: 'Cockroaches appear in a family kitchen. Give four steps to get rid of them and keep them away.', steps: ['Keep all food in **covered containers** and clean up crumbs.', 'Empty and **cover the bin** every day.', 'Fill **cracks** in walls and around pipes.', 'Use **traps** or a safe insecticide away from food and plates.'] },
  ]),

  // ---------- 17. Kitchen tools and utensils ----------
  L('he-utensils-1', 'he-f1-utensils', '17.1', 'Classifying kitchen tools and utensils', 10, ['Kitchen'], [
    '**Kitchen utensils** are the tools used to prepare, cook, serve and store food. They can be classified by **use**:\n- **preparing**: knives, chopping board, grater, peeler, sieve, mixing bowls, whisk, rolling pin, **grinding stone**, **mortar and pestle**, blender\n- **cooking**: pots and saucepans, frying pan, steamer, wooden spoons, turning stick for fufu, frying spoon\n- **measuring**: measuring cups and spoons, kitchen scale, measuring jug\n- **serving**: ladle, serving spoons, dishes, plates, cups, cutlery\n- **storing**: jars, plastic containers with lids, bottles, baskets.',
    'They can also be classified by **material**: **metal** (aluminium pots, stainless steel, cast iron, enamel), **wood** (spoons, mortar), **plastic** (bowls, containers), **glass** (jars, cups), **clay** or earthenware (traditional pots that keep water cool) and **stone** (grinding stone). Each material needs its own care.',
  ], 'he1-utensils', 'Prepare, cook, measure, serve, store.',
  ['A sieve is used for:', ['Preparing food, for example sifting flour', 'Serving soup', 'Storing oil', 'Measuring heat'], 'It separates fine from coarse.'],
  [['Utensil', 'A tool used in the kitchen.'], ['Cutlery', 'Knives, forks and spoons for eating.'], ['Earthenware', 'Pots made of baked clay.']],
  [
    { q: 'Classify by use: ladle, grater, measuring cup, frying pan, jar.', steps: ['**Preparing**: grater.', '**Cooking**: frying pan.', '**Measuring**: measuring cup.', '**Serving**: ladle.', '**Storing**: jar.'] },
  ]),

  L('he-utensil-care-1', 'he-f1-utensils', '17.2', 'Washing up and caring for utensils', 9, ['Kitchen', 'Practical'], [
    '**Before washing**: scrape leftover food into the bin; soak sticky or burnt pots; stack things by kind; prepare **hot soapy water** in one basin and clean rinsing water in another.',
    '**Order of washing**, from the cleanest and least greasy to the dirtiest:\n- **glasses and cups**\n- **cutlery**\n- **plates and serving dishes**\n- **pots and pans** last.\nRinse each item in clean water, drain on a rack and dry with a **clean tea towel** or in the air, then store in a clean, covered cupboard. Change the water when it gets dirty or greasy.',
    '**Care by material**: wash **wooden** spoons and boards quickly and dry them in the sun (do not soak them); scrub **aluminium** pots with a soft pad; dry **cast iron** at once; handle **glass** and **clay** pots gently and do not put them suddenly from hot to cold; wash **knives** one at a time and never leave them hidden in the water.',
  ], 'he1-washing-up', 'Clean to dirty: glasses first, pots last.',
  ['Which items are washed last?', ['Greasy pots and pans', 'Glasses', 'Cups', 'Spoons'], 'Grease spoils the water.'],
  [['Washing up', 'Cleaning the dishes and utensils after a meal.'], ['Rinse', 'To wash off soap with clean water.'], ['Drainer (rack)', 'A rack where washed items drip dry.']],
  [
    { q: 'Put these items in the right order for washing: frying pan, glass, forks, plates.', steps: ['**Glass**.', '**Forks** (cutlery).', '**Plates**.', '**Frying pan** last, because it is the greasiest.'] },
  ]),

  // ---------- 18. Kitchen safety and first aid ----------
  L('he-accidents-1', 'he-f1-safety', '18.1', 'Kitchen accidents and how to prevent them', 10, ['Kitchen', 'Safety'], [
    '**Common kitchen accidents** and their prevention:\n- **burns** (dry heat: flames, hot pans) and **scalds** (hot liquid or steam): use oven gloves or a thick dry cloth; turn **pot handles inwards**; keep children away from the fire; open lids away from the face\n- **cuts**: keep knives sharp and use a board; cut away from the body; carry knives pointing down; wash knives one at a time\n- **falls**: wipe up spills at once; keep the floor clear; use a stable ladder or stool to reach high shelves\n- **fires**: never leave cooking unattended; keep cloths, curtains and plastic away from the flame; never pour **water on burning oil**\n- **gas leaks**: close the gas after use; if you smell gas, do not light a match or switch on a light, open the windows and close the cylinder\n- **electric shocks**: dry hands before touching switches; no damaged cords\n- **poisoning**: keep detergents, paraffin and insecticides in labelled containers, never in drink bottles, and out of children’s reach.',
  ], 'he1-accidents', 'Handles in, spills up, poisons labelled.',
  ['Why should paraffin never be kept in an empty drink bottle?', ['A child may drink it by mistake', 'It evaporates faster', 'The bottle melts', 'It becomes water'], 'This causes poisoning.'],
  [['Burn', 'An injury caused by dry heat, such as a flame or hot metal.'], ['Scald', 'An injury caused by hot liquid or steam.'], ['Accident', 'An unplanned event that causes injury or damage.']],
  [
    { q: 'Name the danger and the prevention: a pan handle sticking out over the edge of the stove while children play nearby.', steps: ['Danger: a child may pull the handle and get **scalded** by the hot food.', 'Prevention: turn the **handle inwards**, use the back burners, and keep children **out of the cooking area**.'] },
  ]),

  L('he-firstaid-1', 'he-f1-safety', '18.2', 'First aid for burns, scalds and cuts', 10, ['Kitchen', 'Safety', 'First aid'], [
    '**First aid** is the help given to an injured person before medical help arrives. Stay calm and protect yourself first (turn off the heat or gas).',
    '**Burns and scalds**:\n- **cool** the burn under **cool running water** for about **20 minutes** (not ice or iced water)\n- remove rings, watches or clothing near the burn, **unless stuck** to the skin\n- **cover** with cling film or a clean, non-fluffy cloth\n- do **not** put butter, oil, palm oil, toothpaste or eggs on a burn, and do **not** burst blisters\n- go to a health centre for large or deep burns, burns on the face, hands or private parts, and burns in children.',
    '**Cuts**: **press** on the wound with a clean cloth or dressing to stop the bleeding; raise the injured part; when it stops, clean a small cut with clean water and cover it with a **plaster**; get help if the bleeding does not stop or the cut is deep.\n**The first aid box** should contain: plasters, sterile dressings, bandages, cotton wool, an antiseptic, scissors, tweezers, disposable gloves and a burn dressing or cling film.',
  ], 'he1-burn-aid', 'Cool the burn for 20 minutes; no oil, no toothpaste.',
  ['How long should a burn be cooled under running water?', ['About 20 minutes', 'About 5 seconds', 'Two hours', 'It should not be cooled'], 'Cooling limits the damage.'],
  [['First aid', 'Help given to an injured person before medical help arrives.'], ['Blister', 'A bubble of fluid under the skin, often after a burn.'], ['Sterile', 'Free from germs.'], ['Antiseptic', 'A substance that kills germs on the skin.']],
  [
    { q: 'Kum spills boiling water on his arm. List the first aid steps in order.', steps: ['Move him away from the danger.', '**Cool** the arm under cool running water for about **20 minutes**.', 'Remove his watch or sleeve if they are not stuck.', '**Cover** the burn with cling film or a clean cloth.', 'If the scald is large, take him to a **health centre**.'] },
  ]),

  // ---------- 19. Food hygiene ----------
  L('he-handling-1', 'he-f1-foodhygiene', '19.1', 'Hygienic food handling and washing food', 10, ['Food hygiene'], [
    '**Food hygiene** is the safe handling, preparation and storage of food so that it does not make people sick. Germs on food cannot usually be seen, smelt or tasted, so good habits matter.',
    '**Personal hygiene of the food handler**: wash hands **before** handling food and **after** using the toilet, touching raw meat or fish, handling rubbish, blowing the nose or touching animals; wear a clean apron; **tie back and cover** the hair; keep nails short; remove rings and bracelets; cover cuts with a waterproof plaster; do not cough or sneeze over food; do not cook for others when you have **diarrhoea** or vomiting.',
    '**Washing hands correctly**: wet hands with clean running water; apply **soap**; rub palms, backs of hands, **between the fingers**, thumbs, fingertips and under the nails for at least **20 seconds**; rinse; dry with a clean towel or in the air.\n**Washing food**: wash fruits and vegetables that are eaten raw in plenty of **clean water** (and peel where possible); wash leafy vegetables leaf by leaf to remove soil and insects; rinse rice and beans to remove stones and dust.',
  ], 'he1-handwash', 'Soap, scrub every part, 20 seconds, rinse, dry.',
  ['When must a cook wash their hands?', ['After using the toilet and before handling food', 'Only after eating', 'Only on Sundays', 'Only when hands look dirty'], 'Germs are invisible.'],
  [['Food hygiene', 'Handling, preparing and storing food so that it is safe to eat.'], ['Food handler', 'Anyone who prepares or serves food.'], ['Food poisoning', 'Illness caused by eating food containing germs or poisons.']],
  [
    { q: 'Ma Ngo sells roasted fish at the market. Give four hygiene rules she should follow.', steps: ['**Wash hands** with soap before serving and after handling money or rubbish.', 'Wear a **clean apron** and cover her hair.', 'Keep the fish **covered** from flies and dust.', 'Serve with **clean tongs** or a fork rather than bare hands.'] },
  ]),

  L('he-crosscontam-1', 'he-f1-foodhygiene', '19.2', 'Preventing cross-contamination', 9, ['Food hygiene'], [
    '**Cross-contamination** is the transfer of germs from one food or surface to another, especially from **raw** foods (meat, fish, chicken, eggs, unwashed vegetables) to **ready-to-eat** foods (cooked food, bread, fruit, salad). Germs travel on **hands**, **knives**, **chopping boards**, **cloths**, plates and by **dripping juices**.',
    '**How to prevent it**:\n- use **separate boards and knives** for raw meat and for ready-to-eat food, or wash them well with hot soapy water between uses\n- wash hands after touching raw meat, fish or eggs\n- keep raw food **covered** and, in a fridge, on the **lowest shelf** so juices cannot drip onto other food\n- never put cooked food back on a plate that held raw meat\n- wash and dry kitchen cloths often, and keep a separate cloth for hands\n- keep pets and insects away from food.',
  ], 'he1-cross', 'Raw and ready-to-eat: keep them apart.',
  ['Using the same unwashed board for raw chicken and then for tomatoes for a salad can cause:', ['Cross-contamination', 'Preservation', 'Fermentation', 'Better flavour'], 'Germs pass from the chicken to the salad.'],
  [['Cross-contamination', 'The transfer of germs from one food or surface to another.'], ['Ready-to-eat food', 'Food that will not be cooked again before it is eaten.'], ['Raw food', 'Food that has not been cooked.']],
  [
    { q: 'Find the hygiene mistake and correct it: Biy cuts raw fish, wipes the knife on a cloth and slices bread with it.', steps: ['Mistake: germs from the raw fish stay on the knife and the cloth and pass to the **bread** (cross-contamination).', 'Correction: **wash the knife** in hot soapy water and rinse it, or use a **separate knife** for bread.', 'Wash the cloth and her hands too.'] },
  ]),

  // ---------- 20. Food preservation ----------
  L('he-whypreserve-1', 'he-f1-preservation', '20.1', 'Food spoilage and why we preserve food', 9, ['Food preservation'], [
    '**Food spoilage** is when food changes so that it is no longer good or safe to eat. **Causes**:\n- **microorganisms**: **bacteria**, **moulds** and **yeasts**, which grow fast in food that is warm and moist\n- **enzymes** in the food itself, which make fruit over-ripen and go soft\n- **pests**: insects (weevils in beans and maize), rats and flies\n- **moisture, air and heat**, and bruising during transport.',
    '**Signs of spoilt food**: a bad or sour smell, mould, a slimy surface, a change of colour, bubbles or swelling of tins, holes made by weevils. Spoilt food must be thrown away.',
    '**Why we preserve food**: to keep food for the **dry season** or times of shortage, to avoid **waste** when there is plenty (in the harvest season), to make food easier to transport and sell, to have a **variety** of food all year, and to save money.',
  ], 'he1-spoilage', 'Germs need warmth, water and food: take one away and they slow down.',
  ['Weevils in a bag of beans are an example of spoilage by:', ['Pests', 'Enzymes', 'Freezing', 'Salting'], 'Insects eat stored grains and beans.'],
  [['Food spoilage', 'A change that makes food unfit to eat.'], ['Microorganism', 'A living thing too small to see without a microscope.'], ['Mould', 'A fungus that grows as fluffy patches on food.'], ['Enzyme', 'A substance in food that speeds up changes such as ripening.']],
  [
    { q: 'Give three reasons why a family in the North Region dries and stores maize after the harvest.', steps: ['To have food during the **dry season** and times of shortage.', 'To avoid **waste** when there is more maize than the family can eat.', 'To **sell** later at a better price.'] },
  ]),

  L('he-preserve-methods-1', 'he-f1-preservation', '20.2', 'Home methods of preserving food', 10, ['Food preservation'], [
    'Every method works by making life hard for microorganisms: taking away **water**, using **heat** to kill them, **cold** to slow them, or **salt, sugar, smoke or acid**.\n- **Drying** (sun or fire): fish, cassava (garri, cassava chips), maize, beans, groundnuts, pepper, okra; no water, no growth\n- **Smoking**: fish and meat over a fire or on the rack above it; smoke dries the food and helps keep germs off\n- **Salting**: fish and meat; salt draws water out\n- **Sugaring**: jam from pawpaw, pineapple or guava; much sugar draws water out\n- **Cooling and freezing**: a fridge (below about 5 °C) **slows** germs; a freezer (about −18 °C) stops their growth; neither kills them\n- **Boiling and reheating**: boiling soups and sauces every day keeps them for a short time\n- **Fermenting**: water fufu, bobolo and miondo from cassava keep longer than fresh cassava\n- **Airtight storage**: clean, dry, sealed containers keep out air, moisture and weevils.',
  ], 'he1-preservation', 'Take away water, add heat, cold, salt, sugar or smoke.',
  ['A fridge preserves food because cold:', ['Slows the growth of microorganisms', 'Kills every germ', 'Adds salt', 'Removes all water'], 'Cold slows; it does not kill.'],
  [['Smoking', 'Preserving food by drying it in smoke.'], ['Salting', 'Preserving food with salt, which draws out water.'], ['Fermenting', 'Changing food with useful microorganisms so it keeps longer.'], ['Airtight', 'Closed so that no air can get in.']],
  [
    { q: 'Suggest a method of preservation for each food and explain how it works: fresh fish, ripe pineapples, a large pot of egusi soup.', steps: ['**Fresh fish**: smoke or dry it; removing water stops germs growing.', '**Ripe pineapples**: make jam; the high sugar draws water out.', '**Egusi soup**: keep it in a fridge, or boil it every day; cold slows germs and boiling kills many of them.'] },
  ]),

  // ---------- 21. Revision ----------
  L('he-review-1', 'he-f1-review', '21.1', 'Revision of the year', 12, ['Revision'], [
    '**Term 1**: Home Economics is the study of how people use **human and material resources** to care for themselves and their homes; its branches are food and nutrition, clothing and textiles, home management and family life; it leads to **careers** and small **businesses**. Health depends on **diet, exercise and rest**. The **three food groups** are energy-giving, body-building and protective foods. **Malnutrition** includes hidden hunger, **kwashiorkor** (lack of protein, swelling) and **marasmus** (lack of all foods, wasting). Care for the **skin, teeth, hair and nails**; **puberty** brings physical, emotional and social changes; dispose of **waste** safely and keep the school clean.',
    '**Term 2**: types of **family** and the roles of each member; daily, weekly and periodic **cleaning** of rooms; **needs and wants**, consumer **rights and responsibilities**; a **budget** (savings + spending ≤ income) and saving tips; **sewing tools** and safety; **temporary** and **permanent** stitches; making a **handkerchief** or an **apron**.',
    '**Term 3**: kitchen **types and layouts** and the work triangle; caring for the kitchen; **utensils** by use and material and washing up in order; preventing **accidents** and **first aid** for burns and cuts; **food hygiene**, hand washing and **cross-contamination**; why food spoils and **home preservation** methods.\n**Answering questions**: read the question twice, note command words (name, explain, list, describe), give Cameroonian examples, and in practical work be clean, safe and neat.',
  ], 'he1-review', 'Revise by term, then test yourself with the questions.',
  ['Which pair matches correctly?', ['Marasmus: lack of all foods', 'Kwashiorkor: too much sugar', 'Goitre: lack of protein', 'Scurvy: lack of iodine'], 'Marasmus is starvation.'],
  [['Revision', 'Studying again what has been learnt, to remember it.'], ['Command word', 'A word in a question that says what to do, such as list or explain.']],
  [
    { q: 'Answer briefly: (a) name the three food groups; (b) give two temporary stitches; (c) give the first aid for a scald.', steps: ['(a) **Energy-giving**, **body-building** and **protective** foods.', '(b) **Even tacking** and **uneven tacking** (or diagonal tacking).', '(c) **Cool** under cool running water for about 20 minutes, then cover with a clean non-fluffy cloth.'] },
  ]),
];
