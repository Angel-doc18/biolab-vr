// Logic lessons for Form 3, terms 2 and 3: comprehension and extension, the
// kinds of terms, the categorical proposition and its standard form, A, E, I
// and O, distribution, the square of opposition, the first fallacies and the
// bridge to Form 4. Original text written for this app.

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
  // ---------- Comprehension and extension ----------
  L('lo-compext-3', 'lo-f3-compext', '6.1', 'Comprehension and extension', 14, ['Terms'], [
    'Every general term has two sides:\n- **comprehension** (also called **intension** or **connotation**): the set of qualities the term implies, the things that must be true of anything it names. The comprehension of "triangle" is: a plane figure, bounded by three straight lines\n- **extension** (also called **denotation**): the range of things to which the term applies. The extension of "triangle" is every triangle: right-angled, isosceles, equilateral and the rest.',
    'Example, "Cameroonian city":\n- comprehension: a large town, with many people and services, situated in Cameroon\n- extension: Yaoundé, Douala, Bamenda, Garoua, Bafoussam, Maroua and every other city in Cameroon.',
    'Comprehension answers "**what** does the term mean?"; extension answers "**which** things does it cover?". A **definition** sets out the comprehension; a **list of examples** shows part of the extension.',
  ], 'logic-compext', 'Comprehension: what it means. Extension: what it covers.',
  ['"Yaoundé, Douala and Bamenda" show the term "Cameroonian city" by its:', ['extension', 'comprehension', 'copula', 'quality'], 'A list of the things it applies to.'],
  [['Comprehension', 'The qualities a term implies (intension, connotation).'], ['Extension', 'The things a term applies to (denotation).'], ['Definition', 'A statement of what a term means.']],
  [
    { q: 'Give the comprehension and extension of "planet of the Solar System".', steps: ['**Comprehension: a large body that orbits the Sun, is nearly round, and has cleared its orbit.**', '**Extension: Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus and Neptune.**'] },
  ]),

  L('lo-inverse-3', 'lo-f3-compext', '6.2', 'The law of inverse variation', 14, ['Terms'], [
    'The **law of inverse variation**: when the comprehension of a term increases, its extension decreases, and when the comprehension decreases, its extension increases.\nAdd a quality and fewer things fit; remove a quality and more things fit.',
    'A series of terms arranged in order:\n- living thing (fewest qualities, widest extension)\n- animal (living thing + can feel and move)\n- human being (animal + rational)\n- Cameroonian (human being + citizen of Cameroon)\n- Cameroonian student (Cameroonian + attending school): most qualities, narrowest extension.',
    'The relation is **inverse**, but not an exact mathematical proportion: doubling the qualities does not halve the number of things. Note also that adding a quality the members already share (adding "mortal" to "human being") does not reduce the extension. Arranging terms by this law is a common examination exercise.',
  ], 'logic-compext', 'More qualities, fewer things; fewer qualities, more things.',
  ['Arrange in order of increasing extension: animal, dog, living thing.', ['dog, animal, living thing', 'living thing, animal, dog', 'animal, dog, living thing', 'dog, living thing, animal'], 'The more general term covers more things.'],
  [['Law of inverse variation', 'As comprehension increases, extension decreases, and the reverse.'], ['Genus', 'A wider class containing narrower classes.'], ['Species', 'A narrower class within a genus.']],
  [
    { q: 'Arrange in order of increasing comprehension: "teacher", "person", "mathematics teacher", "living being".', steps: ['Fewest qualities first: **living being, person, teacher, mathematics teacher.**', '**Each step adds a quality, so the extension shrinks at each step.**'] },
  ]),

  // ---------- Singular, general, collective ----------
  L('lo-singular-3', 'lo-f3-quantity', '7.1', 'Singular and general terms', 12, ['Terms'], [
    'Terms can be divided by **how many** things they refer to:\n- a **singular** term refers to **one** individual only: proper names ("Mount Cameroon", "Ngum"), and descriptions that fit one thing ("the capital of Cameroon", "the tallest girl in Form 3B")\n- a **general** term can be applied, **in the same sense, to each** of an indefinite number of things: "student", "river", "town", "honest person".',
    'A general term can be made singular by a word that picks out one thing: "student" is general, but "this student" or "the head girl of our school" is singular.',
    'General terms are the usual subjects and predicates of the categorical propositions studied later ("All students are learners").',
  ], 'logic-terms-kinds', 'Singular: one. General: each of many.',
  ['"The first President of Cameroon" is a:', ['singular term', 'general term', 'collective term', 'abstract term'], 'It fits one person only.'],
  [['Singular term', 'A term that refers to one individual.'], ['General term', 'A term applicable in the same sense to each of many things.'], ['Proper name', 'The name of one particular person, place or thing.']],
  [
    { q: 'Classify as singular or general: (a) "river"; (b) "the River Sanaga"; (c) "this river".', steps: ['**(a) General: it applies to every river.**', '**(b) Singular: one particular river.**', '**(c) Singular: "this" picks out one river.**'] },
  ]),

  L('lo-collective-3', 'lo-f3-quantity', '7.2', 'Collective terms; collective and distributive use', 13, ['Terms'], [
    'A **collective** term names a **group taken as a whole**: "army", "team", "class", "library", "herd", "family". What is true of the group is not necessarily true of each member: a library is large, but each book is not.',
    'A collective term can itself be singular or general:\n- "the Indomitable Lions" names **one** team: **singular and collective**\n- "team" applies to every team: **general and collective**.',
    'Words can be used in two ways:\n- **collectively**: of all together, as a unit. "The students of Form 3 filled the hall." "All the angles of a triangle add up to 180°"\n- **distributively**: of each one separately. "The students of Form 3 each wrote an essay." "All the angles of an equilateral triangle are 60°."\nConfusing the two leads to errors: "Each player is excellent, so the team is excellent" does not follow.',
  ], 'logic-terms-kinds', 'Collective: the group as one. Distributive: each member.',
  ['In "The class contributed 20,000 FCFA for the party", "the class" is used:', ['collectively', 'distributively', 'abstractly', 'privatively'], 'The total came from the group.'],
  [['Collective term', 'A term that names a group as a whole.'], ['Collective use', 'Speaking of members all together, as a unit.'], ['Distributive use', 'Speaking of each member separately.']],
  [
    { q: 'Is "herd" singular, general, collective? Explain.', steps: ['**Collective: it names a group of animals as a whole.**', '**General: it applies to every herd, not to one particular herd.**', '**So it is a general collective term; "the herd of cattle on the Adamawa farm" would be singular and collective.**'] },
  ]),

  // ---------- Concrete, abstract, privative ----------
  L('lo-concrete-3', 'lo-f3-quality', '8.1', 'Concrete and abstract terms', 12, ['Terms'], [
    '- A **concrete** term names a **thing, person or place** that has qualities: "teacher", "stone", "Limbe", "honest man"\n- an **abstract** term names a **quality or relation considered apart** from the things that have it: "honesty", "whiteness", "courage", "kindness", "height".',
    'Many abstract terms are formed from concrete adjectives: honest → honesty, brave → bravery, kind → kindness, wise → wisdom. "Honest" describes a person (concrete use); "honesty" names the quality itself (abstract).',
    'Abstract terms cannot be seen or touched directly; we know them through the things that have them. We see honest people, not honesty floating in the air.',
  ], 'logic-terms-kinds', 'Concrete: the thing. Abstract: the quality alone.',
  ['Which is an abstract term?', ['wisdom', 'wise woman', 'teacher', 'Douala'], 'A quality considered apart.'],
  [['Concrete term', 'A term naming a thing or person that has qualities.'], ['Abstract term', 'A term naming a quality considered apart from things.']],
  [
    { q: 'Give the abstract term for: brave, generous, tall.', steps: ['**brave → bravery (or courage)**', '**generous → generosity**', '**tall → tallness (or height)**'] },
  ]),

  L('lo-privative-3', 'lo-f3-quality', '8.2', 'Positive, negative and privative terms', 14, ['Terms'], [
    'Terms can also be divided by whether a quality is present or absent:\n- **positive** term: a quality is **present**: "literate", "visible", "healthy", "metal"\n- **negative** term: a quality is simply **absent**: "non-literate", "invisible", "non-metal". The negative term covers everything that lacks the quality\n- **privative** term: a quality is absent from something that would **naturally** have it: "blind", "deaf", "lame", "dumb". A person who cannot see is blind; a stone is not called blind because stones never see.',
    'A positive term and its negative are **contradictory** terms: everything is either literate or non-literate, with no middle. Note that some words that look negative, such as "unhappy", really name a positive state (sadness) and are **contrary**, not contradictory: a person may be neither happy nor unhappy.',
    'To test for a privative term ask: "Would this kind of thing normally have the quality?" If yes, its absence is a **privation**.',
  ], 'logic-terms-kinds', 'Privative: missing where it should naturally be.',
  ['"Deaf", said of a person, is:', ['privative', 'positive', 'abstract', 'collective'], 'Hearing would naturally be present.'],
  [['Positive term', 'A term showing that a quality is present.'], ['Negative term', 'A term showing simply that a quality is absent.'], ['Privative term', 'A term showing a quality absent where it would naturally be present.']],
  [
    { q: 'Classify: (a) "toothless", said of an old man; (b) "non-living", said of a rock; (c) "healthy".', steps: ['**(a) Privative: an adult would naturally have teeth.**', '**(b) Negative: rocks never live, so this is mere absence.**', '**(c) Positive: health is present.**'] },
  ]),

  // ---------- Propositions ----------
  L('lo-proposition-3', 'lo-f3-propositions', '9.1', 'Sentences and propositions', 13, ['Propositions'], [
    'A **proposition** is what is asserted by a statement: it is **either true or false**. It is the verbal expression of a **judgement**.\nNot every sentence expresses a proposition:\n- questions ("Is it raining?"), commands ("Close the door"), wishes ("May you succeed!") and exclamations ("Hurray!") are neither true nor false\n- declarative sentences ("It is raining") express propositions.',
    'Sentences and propositions differ:\n- the **same** proposition can be expressed by **different** sentences: "It is raining" and "Il pleut"; "Ewane beat Tabi" and "Tabi was beaten by Ewane"\n- the **same** sentence can express **different** propositions: "I am hungry" says something different for each speaker.',
    'A **categorical** proposition affirms or denies without condition: "All students are learners." A **hypothetical** proposition states a condition: "If it rains, the match will be cancelled." Form 3 concentrates on categorical propositions.',
  ], 'logic-standard-form', 'A proposition is true or false; a sentence may not be.',
  ['"May God bless Cameroon!" is:', ['not a proposition', 'an A proposition', 'an argument', 'a hypothetical proposition'], 'A wish is neither true nor false.'],
  [['Proposition', 'What is asserted by a statement; true or false.'], ['Categorical proposition', 'A proposition that affirms or denies without condition.'], ['Hypothetical proposition', 'A proposition stating a condition, with "if".']],
  [
    { q: 'Which express propositions? (a) "Douala is a port." (b) "Is Kribi a port?" (c) "Kribi has a deep-sea port."', steps: ['**(a) Yes: a statement, true.**', '**(b) No: a question is neither true nor false.**', '**(c) Yes: a statement (true; the deep-sea port at Kribi opened in 2018).**'] },
  ]),

  L('lo-standardform-3', 'lo-f3-propositions', '9.2', 'The standard form of a categorical proposition', 15, ['Propositions'], [
    'A categorical proposition in **standard form** has four parts, in this order:\n- the **quantifier**: "all", "no" or "some", telling how much of the subject is meant\n- the **subject term**\n- the **copula**: "are" or "are not", linking the terms\n- the **predicate term**.\nExample: **All** | **students** | **are** | **learners**.',
    'Ordinary sentences must often be rewritten:\n- "Dogs bark" becomes "All dogs are animals that bark" (the predicate must be a term, a noun phrase, and the copula "are")\n- "Every Cameroonian loves football" becomes "All Cameroonians are football lovers"\n- "Not a single pupil came late" becomes "No pupils are latecomers"\n- "A few traders cheat" becomes "Some traders are cheats".',
    'Rules for rewriting: keep the meaning; choose the quantifier carefully ("every", "each", "any" → all; "none", "not any" → no; "a few", "most", "many", "several" → some); turn verbs and adjectives into predicate terms ("is tall" → "are tall people").',
  ], 'logic-standard-form', 'Quantifier, subject, copula, predicate: All S are P.',
  ['"Every soldier is brave" in standard form is:', ['"All soldiers are brave people"', '"Some soldiers are brave"', '"No soldiers are brave people"', '"Brave are soldiers"'], '"Every" becomes "all".'],
  [['Quantifier', 'The word showing how much of the subject is meant: all, no, some.'], ['Copula', 'The link between subject and predicate: are, are not.'], ['Standard form', 'Quantifier, subject term, copula, predicate term.']],
  [
    { q: 'Rewrite in standard form and name the parts: "Most mangoes from Garoua are sweet."', steps: ['"Most" counts as **some** in standard form.', '**Some mangoes from Garoua are sweet fruits.**', 'Quantifier: some; subject: mangoes from Garoua; copula: are; predicate: sweet fruits.'] },
  ]),

  // ---------- A, E, I, O ----------
  L('lo-aeio-3', 'lo-f3-aeio', '10.1', 'Quality, quantity and the four forms', 14, ['Propositions'], [
    'Every categorical proposition has:\n- a **quality**: **affirmative** (it says the subject is included in the predicate) or **negative** (it says the subject is excluded)\n- a **quantity**: **universal** (it refers to all of the subject) or **particular** (it refers to some of the subject; in logic "some" means "at least one").',
    'Combining them gives four standard forms:\n- **A**: universal affirmative: **All S are P**. "All farmers are workers."\n- **E**: universal negative: **No S are P**. "No snakes are mammals."\n- **I**: particular affirmative: **Some S are P**. "Some pupils are prefects."\n- **O**: particular negative: **Some S are not P**. "Some fruits are not sweet."',
    'The letters come from the Latin **AffIrmo** (I affirm), giving A and I, and **nEgO** (I deny), giving E and O. In each word the first vowel marks the universal and the second the particular.',
  ], 'logic-aeio', 'A all, E no, I some are, O some are not.',
  ['A particular negative proposition is labelled:', ['O', 'E', 'I', 'A'], 'Some S are not P.'],
  [['Quality', 'Whether a proposition is affirmative or negative.'], ['Quantity', 'Whether a proposition is universal or particular.'], ['Universal', 'Referring to all of the subject.'], ['Particular', 'Referring to some (at least one) of the subject.']],
  [
    { q: 'Give the quality, quantity and letter of "Some politicians are not honest people".', steps: ['Quality: **negative** ("are not").', 'Quantity: **particular** ("some").', 'Letter: **O.**'] },
  ]),

  L('lo-classify-3', 'lo-f3-aeio', '10.2', 'Classifying ordinary sentences', 15, ['Propositions'], [
    'To classify a sentence as A, E, I or O, first put it in standard form, then read its quality and quantity:\n- "Every child needs love" → All children are beings that need love: **A**\n- "No one in the room smokes" → No people in the room are smokers: **E**\n- "Many Cameroonians speak two languages" → Some Cameroonians are bilingual people: **I**\n- "Not all that glitters is gold" → Some glittering things are not gold: **O**.',
    'Tricky cases:\n- **singular** propositions, "Bamenda is in the North-West Region", are treated as **universal**, because the subject refers to the whole of its (one-member) extension: A; "Ngum is not a prefect": E\n- "All ... are not ..." is ambiguous: "All students are not lazy" usually means "Some students are not lazy" (O), not "No students are lazy" (E). Read the meaning, not just the words\n- "Only teachers are allowed" means "All people allowed are teachers" (A), with the terms swapped.',
    'Always check: does the sentence speak of **all** or **some**, and does it **include** or **exclude**?',
  ], 'logic-aeio', 'Put it in standard form first, then read quality and quantity.',
  ['"Not all that glitters is gold" is an:', ['O proposition', 'E proposition', 'A proposition', 'I proposition'], 'Some glittering things are not gold.'],
  [['Singular proposition', 'A proposition whose subject is one individual; treated as universal.'], ['Exclusive proposition', 'A proposition with "only", such as "Only S are P".']],
  [
    { q: 'Classify: (a) "Each player received a medal." (b) "None of the cars was damaged." (c) "Some of the guests left early."', steps: ['**(a) All players are medal receivers: A.**', '**(b) No cars are damaged things: E.**', '**(c) Some guests are early leavers: I.**'] },
  ]),

  // ---------- Distribution ----------
  L('lo-distribution-3', 'lo-f3-distribution', '11.1', 'What distribution means', 14, ['Propositions'], [
    'A term is **distributed** in a proposition when the proposition says something about **every member** of the class the term names. If it speaks of only part of the class, the term is **undistributed**.',
    'The results for the four forms:\n- **A** (All S are P): **subject distributed**, predicate undistributed\n- **E** (No S are P): **both** distributed\n- **I** (Some S are P): **neither** distributed\n- **O** (Some S are not P): **predicate distributed**, subject undistributed.',
    'A memory aid: **"Unprepared Students Never Pass"**: **U**niversals distribute **S**ubjects; **N**egatives distribute **P**redicates.\nDistribution is the key to testing syllogisms in Form 5, so learn this table perfectly.',
  ], 'logic-distribution', 'Universals distribute subjects; negatives distribute predicates.',
  ['Which proposition distributes both its terms?', ['E', 'A', 'I', 'O'], 'Universal and negative.'],
  [['Distributed term', 'A term referring to every member of its class in the proposition.'], ['Undistributed term', 'A term referring to only part of its class.']],
  [
    { q: 'State the distribution in "Some Form 3 students are not footballers".', steps: ['This is an **O** proposition.', '**Subject "Form 3 students": undistributed (only some are meant).**', '**Predicate "footballers": distributed (those students are excluded from the whole class of footballers).**'] },
  ]),

  L('lo-distwhy-3', 'lo-f3-distribution', '11.2', 'Why each term is or is not distributed', 15, ['Propositions'], [
    'Circle diagrams (Euler diagrams) show why:\n- **A**, "All teachers are graduates": the circle of teachers lies inside the circle of graduates. Every teacher is mentioned, but not every graduate (some graduates are doctors or farmers). S distributed, P not\n- **E**, "No snakes are mammals": the two circles are completely apart. Every snake is excluded from every mammal. Both distributed\n- **I**, "Some pupils are prefects": the circles overlap. We speak only of the pupils in the overlap and only of those prefects. Neither distributed.',
    '- **O**, "Some fruits are not sweet things": the part of the fruit circle outside the sweet circle. Those fruits are shut out of the **whole** class of sweet things, so the predicate is distributed; the subject is not, because only some fruits are meant.',
    'Common mistake: thinking the predicate of an A proposition is distributed. "All teachers are graduates" does **not** say that all graduates are teachers.',
  ], 'logic-distribution', 'A: S inside P. E: apart. I: overlap. O: part of S outside P.',
  ['In "All teachers are graduates", "graduates" is undistributed because:', ['not every graduate is said to be a teacher', 'teachers are not graduates', 'it is the subject', 'the proposition is negative'], 'Only part of the graduate class is meant.'],
  [['Euler diagram', 'A diagram using circles to show how classes are related.'], ['Inclusion', 'One class lying wholly inside another.'], ['Exclusion', 'Two classes having no members in common.']],
  [
    { q: 'Draw in words the Euler diagram for "No Form 3 students are university graduates" and state the distribution.', steps: ['**Two separate circles that do not touch: Form 3 students, and university graduates.**', '**Every Form 3 student is excluded from the whole class of graduates, and every graduate from the whole class of Form 3 students.**', '**Both terms are distributed (an E proposition).**'] },
  ]),

  // ---------- Square of opposition ----------
  L('lo-square-3', 'lo-f3-square', '12.1', 'The traditional square of opposition', 14, ['Immediate inference'], [
    '**Opposition** is the relation between two standard propositions with the **same subject and predicate** but differing in quality, quantity or both. The **square of opposition** shows these relations:\n- top left **A**, top right **E** (the universals)\n- bottom left **I**, bottom right **O** (the particulars)\n- affirmatives on the left, negatives on the right.',
    'The four relations:\n- **contradictories**: the diagonals, **A and O**, **E and I**\n- **contraries**: the top side, **A and E**\n- **subcontraries**: the bottom side, **I and O**\n- **subalterns**: the vertical sides, **A to I** and **E to O**.',
    'Inferences drawn from **one** proposition to another, with no other premise, are called **immediate inferences**. In Form 3 we master the relation of contradiction; Form 4 completes the square.',
  ], 'logic-square', 'A and E on top, I and O below; the diagonals are contradictories.',
  ['On the square, A and E are:', ['contraries', 'contradictories', 'subcontraries', 'subalterns'], 'The top side.'],
  [['Opposition', 'The relation between propositions with the same terms differing in quality or quantity.'], ['Square of opposition', 'A diagram showing the relations between A, E, I and O.'], ['Immediate inference', 'An inference from one proposition alone.']],
  [
    { q: 'For S = "Cameroonians" and P = "footballers", write the four corners of the square.', steps: ['**A: All Cameroonians are footballers.**', '**E: No Cameroonians are footballers.**', '**I: Some Cameroonians are footballers.**', '**O: Some Cameroonians are not footballers.**'] },
  ]),

  L('lo-contradiction-3', 'lo-f3-square', '12.2', 'Contradiction', 14, ['Immediate inference'], [
    '**Contradictory** propositions differ in **both quality and quantity**: A and O; E and I. The rule of contradiction:\n- they **cannot both be true**\n- they **cannot both be false**\nSo if one is true, the other is false; if one is false, the other is true.',
    'Examples:\n- A "All birds can fly" is **false** (penguins and ostriches cannot), so its contradictory O "Some birds cannot fly" is **true**\n- I "Some students are lazy" is **true**, so its contradictory E "No students are lazy" is **false**.',
    'To deny a universal statement you need only **one** counter-example, which proves the contradictory particular. To deny "All politicians are dishonest", you need not prove that all are honest: one honest politician proves "Some politicians are not dishonest" (O). This is how we refute sweeping generalisations in daily life.',
  ], 'logic-square', 'Contradictories: exactly one is true.',
  ['If "No Form 3 student is absent" is false, then "Some Form 3 students are absent" is:', ['true', 'false', 'undetermined', 'an A proposition'], 'E and I are contradictories.'],
  [['Contradictories', 'Propositions that cannot both be true and cannot both be false: A and O, E and I.'], ['Counter-example', 'One case that shows a universal statement is false.']],
  [
    { q: 'Given that "All mangoes are sweet" is false, what can you say about "Some mangoes are not sweet"? Give the rule.', steps: ['**The two are contradictories (A and O).**', '**Contradictories cannot both be false.**', '**So "Some mangoes are not sweet" is true.**'] },
  ]),

  // ---------- Fallacies ----------
  L('lo-fallacy-3', 'lo-f3-fallacies', '13.1', 'What is a fallacy?', 12, ['Fallacies'], [
    'A **fallacy** is an **error in reasoning** that may look convincing. The word comes from the Latin "fallere", to deceive. A fallacy may be made by mistake, or used on purpose to persuade.',
    'Two broad kinds:\n- **formal** fallacies: errors in the **form** of an argument, which break the rules of valid inference (studied with the syllogism in Form 5)\n- **informal** fallacies: errors in the **content**, often because the premises are **not relevant** to the conclusion; they appeal to feelings, crowds, pity or force instead of evidence.',
    'Many informal fallacies have Latin names beginning **argumentum ad** ("argument to"): ad populum (to the people), ad misericordiam (to pity), ad baculum (to the stick, that is force), ad hominem (to the person). Learning their names helps us spot them quickly.',
  ], 'logic-fallacies', 'A fallacy persuades without proving.',
  ['A fallacy whose premises are not relevant to the conclusion is:', ['an informal fallacy', 'a formal fallacy', 'a valid argument', 'a definition'], 'An error in content.'],
  [['Fallacy', 'An error in reasoning that may look convincing.'], ['Formal fallacy', 'An error in the form of an argument.'], ['Informal fallacy', 'An error in the content or relevance of an argument.']],
  [
    { q: 'Explain why "My uncle smoked and lived to 90, so smoking is harmless" is a weak argument.', steps: ['**One case does not prove a general rule.**', '**The evidence of millions of cases shows that smoking causes disease and early death.**', '**The premise, even if true, does not support the conclusion.**'] },
  ]),

  L('lo-populum-3', 'lo-f3-fallacies', '13.2', 'Appeals to the crowd and to pity', 14, ['Fallacies'], [
    '**Argumentum ad populum** (appeal to the people, or to the crowd) argues that something is true or good **because many people believe or do it**.\n- "Everyone in our quarter uses this skin-lightening cream, so it must be safe."\n- "All the cool students skip the morning assembly; you should too."\nPopularity is not proof: many people can be wrong. Advertisers and peer groups often use this fallacy.',
    '**Argumentum ad misericordiam** (appeal to pity) tries to win agreement by making us **feel sorry** for someone instead of giving relevant reasons.\n- "Please, sir, give me 10 out of 20; I studied all night and my parents will punish me."\n- A suspect’s lawyer says only: "Look at his poor children; he cannot be guilty."\nSympathy may be right in its place, but it is not evidence that a script deserves marks or that a person is innocent.',
    'Defence: separate the feeling from the facts. Ask: "What evidence supports this conclusion?" and "Would it still be true if nobody agreed, or if nobody were sad?"',
  ], 'logic-fallacies', 'Popularity and pity are not evidence.',
  ['"Vote for him: thousands attended his rally" is:', ['ad populum', 'ad misericordiam', 'valid reasoning', 'a definition'], 'Crowd size is not a reason to vote.'],
  [['Ad populum', 'The fallacy of appealing to what most people believe or do.'], ['Ad misericordiam', 'The fallacy of appealing to pity instead of evidence.'], ['Peer pressure', 'Pressure from friends to do what the group does.']],
  [
    { q: 'Name the fallacy and explain: "This phone must be the best; it is the most popular in Cameroon."', steps: ['**Argumentum ad populum.**', '**The premise is about popularity; the conclusion is about quality.**', '**A phone may be popular because it is cheap or well advertised, not because it is the best; the conclusion does not follow.**'] },
  ]),

  // ---------- Towards Form 4 ----------
  L('lo-preview-3', 'lo-f3-bridge', '14.1', 'Looking ahead: inference in Form 4 and Form 5', 13, ['Immediate inference'], [
    'An **inference** draws a conclusion from evidence.\n- **immediate** inference draws a conclusion from **one** proposition alone: the square of opposition, **conversion** and **obversion**\n- **mediate** inference draws a conclusion from **two** premises linked by a **middle term**: the **syllogism**.',
    'A first look:\n- **conversion** swaps the subject and predicate: "No dogs are cats" → "No cats are dogs" (valid for E and I; A only "by limitation"; never for O)\n- **obversion** changes the quality and replaces the predicate by its contradictory: "All students are learners" → "No students are non-learners"\n- the **syllogism**: "All Cameroonians are Africans. All Bamenda people are Cameroonians. So all Bamenda people are Africans." The middle term "Cameroonians" links the other two.',
    'Everything you learned this year is needed: terms, standard form, A E I O and especially **distribution**, which decides whether a syllogism is valid.',
  ], 'logic-roadmap', 'Immediate: from one proposition. Mediate: from two premises.',
  ['"All Cameroonians are Africans. All Bamenda people are Cameroonians. So all Bamenda people are Africans." The middle term is:', ['Cameroonians', 'Africans', 'Bamenda people', 'all'], 'It appears in both premises.'],
  [['Inference', 'Drawing a conclusion from evidence.'], ['Conversion', 'Swapping the subject and predicate of a proposition.'], ['Obversion', 'Changing the quality and contradicting the predicate.'], ['Syllogism', 'An argument with two premises and a conclusion linked by a middle term.']],
  [
    { q: 'Convert "Some teachers are footballers" and say whether the conversion is valid.', steps: ['**Swap the terms: "Some footballers are teachers."**', '**Valid: an I proposition converts simply, because neither term is distributed in either form.**'] },
  ]),

  L('lo-revision-3', 'lo-f3-bridge', '14.2', 'Revision for the promotion examination', 13, ['Examination'], [
    'Checklist of what you must know:\n- definitions: logic, form and matter, validity and truth, proposition, term, concept\n- the four functions of language, with examples\n- the three operations of the mind and their products\n- comprehension and extension; arranging terms by the law of inverse variation\n- singular, general, collective; concrete, abstract; positive, negative, privative terms\n- standard form; A, E, I, O; the distribution table\n- the square of opposition and the rule of contradiction\n- ad populum and ad misericordiam, with examples.',
    'Answering technique:\n- **define** before you explain, and give a **Cameroonian example** of your own\n- for classification questions, show your working: standard form, then quality, quantity and letter\n- draw the **square** and **Euler diagrams** neatly and label them.',
    'Practise by making your own examples: take any sentence from a newspaper, put it in standard form, label it A, E, I or O, state the distribution, and write its contradictory.',
  ], 'logic-roadmap', 'Define, give an example, show the working.',
  ['The best way to show you understand a definition is to:', ['give an example of your own', 'repeat it three times', 'write it in capitals', 'leave it out'], 'Examples prove understanding.'],
  [['Promotion examination', 'The end-of-year examination that decides passage to the next class.'], ['Working', 'The steps shown on the way to an answer.']],
  [
    { q: 'Full analysis of "Every lawyer in Buea is a graduate."', steps: ['Standard form: **All lawyers in Buea are graduates.**', 'Letter: **A** (universal affirmative).', 'Distribution: **subject distributed, predicate undistributed.**', 'Contradictory: **Some lawyers in Buea are not graduates (O).**'] },
  ]),
];
