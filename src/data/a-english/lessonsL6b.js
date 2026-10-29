// A Level English Language lessons (0730), Lower Sixth, Terms 2 and 3:
// banking and the present perfect, careers and modals, ecology and
// adjectives, public health and imperatives, summary, rights and articles,
// reported speech, argument, reports, speeches and articles, and the papers.
// Original text written for this app.

const PAPER = { 'Speech work': 'Paper 1', Writing: 'Written papers', Summary: 'Written papers' };

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

export const LESSONS_EL6B = [
  // ---------- 9. Banking and trade ----------
  L('aen-pp-1', 'aen-l6-banking', '9.1', 'Present perfect and simple past', 16, ['Grammar'], [
    'The **simple past** is for actions in a **finished** time, often stated: **yesterday, last month, in 2024, two years ago, when I was in Form 5**. "She **opened** her savings account **in 2024**."',
    'The **present perfect** (have/has + past participle) links the past to **now**: an unfinished period (**today, this year, so far**), a past action with a present result ("I **have lost** my card, so I cannot pay"), or experience with no time given ("**Have** you ever **taken** a loan?").',
    'Markers: **since** + a point in time (since March) and **for** + a length of time (for three years) with the present perfect for situations still true; **already**, **just** and **yet** in British English; **ago** only with the simple past. Never: "I have paid **yesterday**."',
    'The **present perfect continuous** stresses duration: "We **have been saving** for six months." Questions starting **When...?** take the simple past: "When **did** you **receive** the money?"',
  ], 'perfect-past', 'If the time is finished or named, use the simple past; if it reaches the present, use the present perfect.',
  ['"How long ___ this business?"', ['have you run', 'did you run', 'do you run', 'are you running'], 'A situation that continues up to now.'],
  [['Present perfect', 'Have or has + past participle, linking a past action to the present.'], ['Simple past', 'The tense for actions in a finished time.'], ['Time marker', 'A word or phrase that signals the tense, such as since, ago or yet.']],
  [
    { q: 'Correct: "I have sent the money last night and he didn’t receive it yet."', steps: ['Last night is finished time: simple past.', 'Yet links to now: present perfect.', '**I sent the money last night and he hasn’t received it yet.**'] },
    { q: 'Choose since or for: (a) ___ January (b) ___ two weeks (c) ___ I left school.', steps: ['Since + a starting point; for + a length of time.', '(a) since; (b) for.', '**(c) since: "since I left school" names the starting point.**'] },
  ]),

  L('aen-bank-1', 'aen-l6-banking', '9.2', 'The language of banking, mobile money and budgets', 16, ['Vocabulary'], [
    'Banking: you **open an account**, **deposit** (pay in) and **withdraw** (take out) money; the **balance** is what remains; a **statement** lists transactions; a **loan** is borrowed money repaid in **instalments** with **interest**; **collateral** is property pledged as security.',
    'E-transactions: **mobile money** transfers, **e-payments** and **online banking**; a **transaction fee** or **charge**; a **PIN** must stay secret; a **receipt** or confirmation message proves payment. A **merchant** accepts payments for goods.',
    'Budgets and trade: a **budget** plans **income** and **expenditure**; a **surplus** is income left over and a **deficit** is a shortfall; a **stock list** (inventory) records goods held; **profit** is what remains after costs. Community savings groups (**njangi** or **tontine**) rotate contributions among members.',
    '**Practice task (savings accounts):** prepare a monthly budget for a small provision shop, with five income and expenditure lines, then write a 120-word report on it using the present perfect and simple past correctly and eight words from this lesson.',
  ], 'aen-bank-words', 'Learn words in pairs of opposites: deposit and withdraw, income and expenditure, surplus and deficit.',
  ['When spending is greater than income, the budget shows a:', ['deficit', 'surplus', 'profit', 'balance'], 'A shortfall.'],
  [['Instalment', 'One of several regular payments of a debt.'], ['Collateral', 'Property pledged as security for a loan.'], ['Deficit', 'The amount by which spending exceeds income.']],
  [
    { q: 'Complete: "I ___ 50 000 FCFA into my account, but after the school fees I had to ___ 30 000, so my ___ is now 20 000."', steps: ['Paying in: deposit (past: deposited).', 'Taking out: withdraw; what remains: balance.', '**deposited, withdraw, balance.**'] },
    { q: 'Explain "interest" to a market trader in one sentence.', steps: ['Name who pays and why.', 'Keep it simple and accurate.', '**Interest is the extra money you pay the bank for the use of a loan, on top of the amount you borrowed.**'] },
  ]),

  // ---------- 10. Careers and the CV ----------
  L('aen-modal-1', 'aen-l6-careers', '10.1', 'Modals of obligation and probability', 16, ['Grammar'], [
    '**Obligation**: **must** (the speaker’s strong view or a rule: "You must be punctual"), **have to** (an outside obligation: "We have to wear uniforms"), **should** and **ought to** (advice or duty). **Must not** (mustn’t) forbids; **need not** (needn’t) and **don’t have to** mean there is no obligation.',
    'For the past, **must** becomes **had to**: "Yesterday we **had to** wait two hours." **Should have** + participle criticises a past action: "You **should have** applied earlier."',
    '**Probability** (deduction): **must** (almost certain: "She has a car, so she must earn well"), **may**, **might** and **could** (possible), **can’t** or **cannot** (almost impossible: "He can’t be the manager; he is a trainee"). For the past: **must have**, **might have**, **can’t have** + participle.',
    'Modals take the **bare infinitive** (must go, not must to go), have no -s ("she must"), and form questions by inversion ("Must I sign?"). "Ought to" keeps "to".',
  ], 'modals-meaning', 'Opposites trap many students: "mustn’t" forbids, "needn’t" frees.',
  ['"The interview was at 8 am and she arrived at 9. She ___ the bus."', ['must have missed', 'must miss', 'should miss', 'can’t have missed'], 'A confident deduction about the past.'],
  [['Modal verb', 'An auxiliary such as must, may or should that adds meaning about obligation or likelihood.'], ['Deduction', 'A conclusion drawn from evidence, often with must or can’t.'], ['Prohibition', 'Forbidding something, as with must not.']],
  [
    { q: 'Rewrite with a modal: "It is not necessary for you to bring a photocopy."', steps: ['No obligation: needn’t or don’t have to.', 'Keep the rest of the sentence.', '**You needn’t bring a photocopy.**'] },
    { q: 'Rewrite with a modal: "I am sure he did not write this CV himself."', steps: ['Certainty that something is impossible, in the past.', 'Can’t have + past participle.', '**He can’t have written this CV himself.**'] },
  ]),

  L('aen-cv-1', 'aen-l6-careers', '10.2', 'The curriculum vitae and the interview', 18, ['Writing'], [
    'A **curriculum vitae** (CV) is a short, factual record of your life for an employer. Order: **personal details** (name, address, telephone, email; date of birth and nationality where asked), a short **profile** or objective, **education**, **work experience**, **skills** (languages, computing), **interests** and **referees**.',
    'Write education and experience in **reverse chronological order** (most recent first), with dates, the institution and what you achieved. Use short phrases with action verbs: "Organised a cleanliness campaign for 300 students." Keep it to one or two pages, in one clear font, and check every spelling.',
    'Referees are two or three people who know your work, given with their position and contact details, after you have asked their permission. A CV is sent with a **covering letter** (letter of application) that names the post and highlights why you suit it.',
    '**Practice task (interviews):** in pairs, hold a mock interview for a holiday job at a bank. Prepare answers to "Tell us about yourself", "Why do you want this post?" and "What is your main weakness?", using modals politely: "I would like to...", "I must admit...".',
  ], 'aen-cv', 'Write the CV for the reader: put what suits the job where the eye lands first.',
  ['In a CV, the most recent qualification is placed:', ['first in its section', 'last', 'in the referees section', 'nowhere'], 'Reverse chronological order.'],
  [['Curriculum vitae', 'A short written record of a person’s education, experience and skills.'], ['Referee', 'A person who agrees to confirm your character or work.'], ['Covering letter', 'The letter of application that accompanies a CV.']],
  [
    { q: 'Rewrite as a CV phrase: "When I was in Lower Sixth I was the person who looked after the school library books."', steps: ['Start with an action verb; drop "I".', 'Add the date and the scale if known.', '**2026: Managed the lending of library books as student librarian.**'] },
    { q: 'Order these headings for a school leaver’s CV: Referees, Education, Personal details, Skills, Work experience.', steps: ['Personal details always come first; referees last.', 'For a school leaver, education matters most.', '**Personal details, Education, Work experience, Skills, Referees.**'] },
  ]),

  // ---------- 11. Ecology ----------
  L('aen-adj-1', 'aen-l6-ecology', '11.1', 'The order of adjectives and compound adjectives', 15, ['Grammar'], [
    'Several adjectives before a noun usually follow this order: **opinion** (beautiful), **size** (huge), **age** (old), **shape** (round), **colour** (green), **origin** (Cameroonian), **material** (wooden), **purpose** (farming) + **noun**: "a beautiful huge old baobab tree", "a small round green plastic water tank".',
    'Opinion adjectives come before fact adjectives. Two or more adjectives of the same kind take a comma or "and": "a hot, dry wind". Avoid stacking more than three: rewrite with a relative clause.',
    '**Compound adjectives** before a noun take hyphens and a singular noun: a **ten-kilometre** walk, a **well-known** scientist, a **drought-resistant** crop, an **eco-friendly** product. After the verb, many lose the hyphen: "The scientist is well known."',
    'Adjectives can be formed from nouns with suffixes: **-al** (environmental), **-ful** (harmful), **-less** (harmless), **-ous** (dangerous), **-ic** (toxic), **-able** (sustainable, renewable).',
  ], 'adjective-order', 'Remember the order with OSASCOMP: opinion, size, age, shape, colour, origin, material, purpose.',
  ['Choose the correct phrase.', ['a lovely little old wooden canoe', 'a wooden little lovely old canoe', 'an old lovely wooden little canoe', 'a little wooden lovely old canoe'], 'Opinion, size, age, material.'],
  [['Compound adjective', 'An adjective of two or more words joined by hyphens before a noun.'], ['Fact adjective', 'An adjective describing a fact such as size, colour or material.'], ['Opinion adjective', 'An adjective giving a judgement, such as lovely or terrible.']],
  [
    { q: 'Order: (fertile, volcanic, black) soil.', steps: ['Fertile is an opinion or quality; black is colour; volcanic is origin.', 'Opinion, colour, origin.', '**fertile black volcanic soil.**'] },
    { q: 'Rewrite with a compound adjective: "a forest that covers two hundred hectares".', steps: ['Number + unit + hyphens, singular unit.', 'Place it before the noun.', '**a two-hundred-hectare forest.**'] },
  ]),

  L('aen-eco-1', 'aen-l6-ecology', '11.2', 'The register of environmental writing', 16, ['Vocabulary'], [
    '**Deforestation** is the clearing of forests; **afforestation** and **reforestation** plant trees. Forests act as **carbon sinks**, absorbing carbon dioxide; burning them releases it. **Biodiversity** is the variety of living things in an area.',
    '**Global warming** is the rise in average temperatures caused mainly by **greenhouse gases** such as carbon dioxide and methane; **climate change** includes the wider effects: irregular rainfall, droughts, floods and rising seas.',
    '**Erosion** is the wearing away of soil by rain and wind, worst on bare slopes; **desertification** turns dry land into desert, a danger in the Sahel; **pollution** of air, water and soil comes from waste, smoke and chemicals. Solutions: **conservation**, **sustainable** farming, **renewable** energy, and the **3 Rs**: reduce, reuse, recycle.',
    'Environmental writing is usually formal and objective, uses the passive ("Hectares of forest **are cleared** each year") and cause-and-effect connectives (**as a result**, **leads to**, **is caused by**). **Practice task (recycling):** design a one-page project sheet for a plastic-recycling club: aim, materials, steps, roles and expected benefits.',
  ], 'aen-eco-chain', 'Show the chain: name the cause, the effect and the further effect, each with a linking phrase.',
  ['Planting trees on land that never had forest is:', ['afforestation', 'deforestation', 'erosion', 'desertification'], 'Reforestation replants cleared forest.'],
  [['Carbon sink', 'Something, such as a forest, that absorbs more carbon dioxide than it releases.'], ['Desertification', 'The process by which dry land becomes desert.'], ['Sustainable', 'Able to continue without harming the environment for the future.']],
  [
    { q: 'Write one cause-and-effect sentence linking deforestation and flooding.', steps: ['Trees hold soil and slow water.', 'Without them, rain runs off quickly.', '**Deforestation leaves the soil bare, so heavy rain runs off quickly and leads to flooding downstream.**'] },
    { q: 'Make formal: "They chop down loads of trees every year and it’s really bad."', steps: ['Use the passive and precise words.', 'Replace slang with a measured judgement.', '**Large areas of forest are cleared every year, with serious consequences for the environment.**'] },
  ]),

  // ---------- 12. Public health ----------
  L('aen-imp-1', 'aen-l6-health', '12.1', 'Imperatives for procedures and guidelines', 15, ['Grammar'], [
    'The **imperative** uses the base form of the verb with no subject: "**Boil** the water." The negative uses **do not** (don’t): "**Do not** share needles." **Always** and **never** go first: "**Always** wash your hands before eating."',
    'Polite forms soften orders: "**Please** keep the clinic clean"; "**Let’s** clean the compound together"; "Could you...?" Use plain imperatives in instructions, where clarity matters most.',
    'In a procedure, give **one action per step**, in order, with **sequencing words** (first, next, then, after that, finally) or numbers, and add the reason where it helps: "Cover the water container **to keep out flies**."',
    'Example: washing hands. First, wet your hands with clean water. Next, apply soap. Then rub all surfaces, including between the fingers and under the nails, for at least 20 seconds. After that, rinse well. Finally, dry with a clean cloth or let them air-dry.',
  ], 'aen-procedure', 'Start each step with a verb: the reader should know at once what to do.',
  ['Which is a correct negative imperative?', ['Never drink untreated water.', 'You never drink untreated water.', 'Not drink untreated water.', 'No you drink untreated water.'], 'Never + base form.'],
  [['Imperative', 'The form of a verb used for orders and instructions.'], ['Procedure', 'A set of steps done in a fixed order.'], ['Sequencing word', 'A word showing order, such as first, next or finally.']],
  [
    { q: 'Rewrite as numbered instructions: "You should clear stagnant water, and nets should be used, and you should not leave water uncovered."', steps: ['One action per step, each starting with a verb.', 'Keep the negative as do not.', '**1. Clear stagnant water. 2. Sleep under a treated net. 3. Do not leave water uncovered.**'] },
    { q: 'Make polite for a notice to visitors: "Wash hands."', steps: ['Add please and a reason.', 'Keep it short.', '**Please wash your hands before entering the ward, to protect our patients.**'] },
  ]),

  L('aen-health-1', 'aen-l6-health', '12.2', 'The vocabulary of malaria, cholera and immunisation', 16, ['Vocabulary'], [
    '**Malaria** is caused by **Plasmodium** parasites carried by the bite of an infected female **Anopheles** mosquito. **Symptoms**: fever, chills, headache, body pains and vomiting. **Prevention**: sleep under **insecticide-treated nets**, clear stagnant water, and seek a **diagnosis** (a rapid test) before treatment.',
    '**Cholera** is a bacterial infection spread through **water or food contaminated** with faeces. It causes severe watery **diarrhoea** and **dehydration**, which can kill within hours. Treatment is **oral rehydration solution** (ORS) and medical care; prevention is safe water, latrines and hand-washing.',
    '**Immunisation** (vaccination) trains the immune system to fight a disease before infection. Children are protected against diseases such as measles, polio and tetanus through national immunisation campaigns. An **epidemic** spreads widely in one area; a **pandemic** spreads across many countries.',
    '**Practice task (health guidelines):** write a 150-word notice for a market, in imperatives, telling traders and buyers how to prevent cholera during the rainy season.',
  ], 'health-language', 'Separate cause, symptom, treatment and prevention: questions often test which is which.',
  ['Severe loss of body water through diarrhoea is:', ['dehydration', 'immunisation', 'diagnosis', 'infection'], 'The main danger in cholera.'],
  [['Symptom', 'A sign of illness felt by the patient, such as fever.'], ['Diagnosis', 'Identifying an illness from its signs and tests.'], ['Immunisation', 'Protecting a person against a disease, usually by a vaccine.']],
  [
    { q: 'Sort into cause, symptom and prevention for malaria: chills, treated nets, Plasmodium, fever, clearing stagnant water.', steps: ['Cause: Plasmodium (carried by mosquitoes).', 'Symptoms: chills, fever.', '**Prevention: treated nets, clearing stagnant water.**'] },
    { q: 'Explain the difference between an epidemic and a pandemic in one sentence.', steps: ['Both are outbreaks.', 'The difference is how far they spread.', '**An epidemic spreads widely in one region, while a pandemic spreads across many countries.**'] },
  ]),

  // ---------- 13. Summary ----------
  L('aen-sum-1', 'aen-l6-summary', '13.1', 'Finding main points and writing them in your own words', 18, ['Summary'], [
    'A **summary** gives only the points the question asks for, in your own words and within the word limit. Read the **question** first: "Summarise the causes of..." means causes only, not effects or solutions.',
    'Read the passage twice. Find the **thesis** (the central claim) and, in each paragraph, the **main point**, often in the topic sentence. Cross out **examples**, figures, quotations, repetitions, anecdotes and descriptive detail: they support points but are not points.',
    'Make a list of the points in **note form**, then rewrite each in your own words, **generalising** lists ("cassava, maize and plantains" → "staple crops") and **combining** related points in one sentence with connectives.',
    'Write in continuous prose unless notes are asked for, in the third person and the same tense as the passage, with no opinions of your own and nothing that is not in the passage.',
  ], 'aen-summary-steps', 'Cross out before you write: what is left are your points.',
  ['"Lorries, taxis, motorbikes and buses crowd the roads" is best summarised as:', ['vehicles crowd the roads', 'lorries crowd the roads', 'roads are long', 'buses are slow'], 'Generalise the list.'],
  [['Summary', 'A shortened version of a text giving only its main points.'], ['Thesis', 'The central claim of a passage.'], ['Generalising', 'Replacing a list of examples with a word that covers them all.']],
  [
    { q: 'Find the main point: "Many young people leave villages for cities. In Bamenda, Douala and Yaoundé, thousands arrive each year. Most come looking for paid work."', steps: ['The town names and numbers are examples.', 'The point is the movement and its reason.', '**Many young people move from villages to cities in search of paid work.**'] },
    { q: 'Combine two points: "Plastic waste blocks gutters. Plastic waste causes floods."', steps: ['The second point follows from the first.', 'Join them with a cause-and-effect link.', '**Plastic waste blocks gutters and so causes floods.**'] },
  ]),

  L('aen-sum-2', 'aen-l6-summary', '13.2', 'Condensing to a word limit', 17, ['Summary'], [
    'Compressing a 300-word passage to 50 words keeps about **one word in six**. That is possible only with points, not details: a typical passage of that length has five to seven points, so each gets about seven to ten words.',
    'Ways to save words: replace a clause with a phrase ("people who live in towns" → "town dwellers"); use one precise word ("make something smaller" → "reduce"); cut empty openings ("It is important to note that..."); avoid repeating the question.',
    'Count the words you write: every word counts, including "a" and "the"; a hyphenated word counts as one. Write the count at the end if the paper asks for it, and stay within the limit: extra words lose marks and may not be read.',
    '**Practice task (extracting the thesis):** take a 300-word article from a newspaper, list its points in notes, write a 50-word summary, then swap with a partner and check that every point is there and nothing else is.',
  ], 'aen-word-budget', 'Draft first, then cut: it is easier to remove words than to find missing points.',
  ['"In the event that it rains" can be cut to:', ['if it rains', 'in case of the event of rain', 'when it is raining heavily', 'it rains'], 'One word does the work of four.'],
  [['Word limit', 'The maximum number of words allowed for an answer.'], ['Compression', 'Saying the same thing in fewer words.'], ['Redundancy', 'Words that repeat or add nothing to the meaning.']],
  [
    { q: 'Cut to 8 words or fewer: "Due to the fact that the rains came late this year, the farmers were not able to plant at the usual time."', steps: ['Due to the fact that → because; were not able to → could not.', 'At the usual time → on time.', '**Late rains stopped farmers planting on time. (7 words)**'] },
    { q: 'A passage has 6 points and the limit is 60 words. How should you plan?', steps: ['Leave a few words for links.', 'About 8 to 10 words per point.', '**Plan six points of about nine words each, joined into fluent sentences.**'] },
  ]),

  // ---------- 14. Rights and articles ----------
  L('aen-art-1', 'aen-l6-rights', '14.1', 'Articles: a, an, the and no article', 16, ['Grammar'], [
    '**A** and **an** go with singular countable nouns mentioned for the first time or as one of many. Choose by **sound**: **a** before a consonant sound (**a** university, **a** European, **a** one-party state), **an** before a vowel sound (**an** hour, **an** honest judge, **an** MP).',
    '**The** goes with something already known or mentioned ("I bought a ballot box; **the** box was sealed"), something unique (**the** sun, **the** Constitution, **the** President of the Republic), superlatives (**the** best), ordinals (**the** first), rivers, seas, oceans and mountain ranges (**the** Sanaga, **the** Atlantic), and plural or "Republic/Kingdom" country names (**the** United States).',
    'Use **no article** (the zero article) with plural and uncountable nouns used in general ("**Freedom** matters"; "**Citizens** have duties"), most country, town and person names (Cameroon, Bamenda), meals, languages and many institutions in their main use (go to **school**, in **church**, in **prison**, by **bus**).',
    '"He went to **the** prison" means he visited the building; "He went to **prison**" means he was locked up. Paper 1 often tests these differences.',
  ], 'articles-use', 'Listen, do not look: "a one-day course" (sound /w/), "an hour" (silent h).',
  ['"He is ___ MP from the Littoral."', ['an', 'a', 'the', 'no article'], 'MP begins with the vowel sound /e/.'],
  [['Indefinite article', 'A or an, for a non-specific singular countable noun.'], ['Definite article', 'The, for something known, unique or specific.'], ['Zero article', 'No article, as with general plural or uncountable nouns.']],
  [
    { q: 'Fill in: "___ voting is ___ duty of every citizen, and ___ election in ___ Cameroon is organised by ___ independent body."', steps: ['Voting in general takes no article; a citizen has several duties, so voting is "a duty".', 'An election (first mention, vowel sound); Cameroon takes no article.', '**(no article) voting, a duty, an election, (no article) Cameroon, an independent body.**'] },
    { q: 'Explain the difference: "She is in hospital" and "She is in the hospital".', steps: ['Zero article: the institution’s main purpose.', 'The: the building, for another reason.', '**"In hospital" means she is a patient; "in the hospital" can mean she is simply inside the building, for example visiting.**'] },
  ]),

  L('aen-rights-1', 'aen-l6-rights', '14.2', 'The language of rights, the constitution and voting', 16, ['Vocabulary'], [
    'A **constitution** is the supreme law of a state; Cameroon’s present constitution dates from **18 January 1996**, and its preamble affirms human rights. **Civil liberties** are freedoms protected by law: freedom of **expression**, **association**, **assembly** and **worship**, and the right to a **fair trial**.',
    '**Human rights** are **universal** and **inalienable**: they belong to everyone and cannot be taken away. **Duties** go with them: obeying the law, paying taxes, respecting others’ rights. The **Cameroon Human Rights Commission** (2019) promotes and protects them.',
    'Elections: citizens **register** as **voters** with **Elections Cameroon** (ELECAM); **candidates** campaign; voters cast a **ballot** in a **polling station** by **secret ballot**; votes are **counted**; results are **proclaimed**. **Suffrage** is the right to vote; **universal suffrage** gives it to all adult citizens; a **referendum** asks voters to decide a single question.',
    '**Practice task (responsible citizenship):** write a 150-word speech for a school election, urging students to vote and explaining two rights and two duties of a citizen, using the articles correctly.',
  ], 'aen-rights-words', 'A right comes with a duty: name both when a question asks about citizenship.',
  ['Freedom to form or join clubs, unions and parties is freedom of:', ['association', 'expression', 'worship', 'movement'], 'Assembly is freedom to meet in groups.'],
  [['Civil liberties', 'Freedoms protected by law, such as freedom of expression.'], ['Inalienable', 'Unable to be taken away.'], ['Referendum', 'A vote by all citizens on a single question.']],
  [
    { q: 'Use "ballot", "polling station" and "proclaim" in two sentences about an election.', steps: ['Describe voting, then the result.', 'Use the passive for the result.', '**Voters cast their ballots at the polling station from morning until evening. The results were later proclaimed.**'] },
    { q: 'Give the opposite or partner word: (a) right (b) universal (c) candidate.', steps: ['(a) a right goes with a duty.', '(b) universal is opposed to restricted; (c) a candidate is chosen by voters.', '**duty, restricted, voter.**'] },
  ]),

  // ---------- 15. Reported speech ----------
  L('aen-rep-1', 'aen-l6-reported', '15.1', 'Reported statements: tenses, pronouns, time and place', 17, ['Grammar'], [
    'In **reported** (indirect) speech we give someone’s words without quotation marks, usually after a past reporting verb (said, told, explained). The tense moves **one step back**: am/is → was; are → were; present simple → past simple; present continuous → past continuous; present perfect and past simple → past perfect; will → would; can → could; may → might; must → had to.',
    '**Pronouns** change to fit the new speaker: "**I** saw **your** brother," she told me → She told me that **she** had seen **my** brother. **Say** has no object (he said that...); **tell** needs one (he told **me** that...).',
    '**Time and place** words change when the time or place has changed: now → then; today → that day; yesterday → the day before (the previous day); tomorrow → the next day (the following day); last week → the week before; ago → before; here → there; this → that.',
    'No backshift is needed when the reporting verb is present ("He **says** he **is** tired") or when the fact is still true ("She said that the Sanaga **is** the longest river in Cameroon"); past perfect and would, could, should, might stay the same.',
  ], 'reported-changes', 'Change three things in order: the tense, the pronouns, then the time and place words.',
  ['"I will return the money tomorrow," the official said. Reported:', ['The official said that he would return the money the next day.', 'The official said that I will return the money tomorrow.', 'The official said that he will returned the money the next day.', 'The official told that he would return the money tomorrow.'], 'Will → would; tomorrow → the next day.'],
  [['Reported speech', 'Giving someone’s words without quoting them exactly.'], ['Backshift', 'Moving the tense one step back in reported speech.'], ['Reporting verb', 'A verb that introduces reported speech, such as said or told.']],
  [
    { q: 'Report: "We have received your complaint today," the officer told us.', steps: ['have received → had received; we → they; your → our.', 'today → that day.', '**The officer told us that they had received our complaint that day.**'] },
    { q: 'Report: "I saw the accused here two days ago," the witness said.', steps: ['saw → had seen.', 'here → there; two days ago → two days before.', '**The witness said that he had seen the accused there two days before.**'] },
  ]),

  L('aen-rep-2', 'aen-l6-reported', '15.2', 'Reported questions and commands, and the language of corruption', 17, ['Grammar'], [
    '**Reported questions** use statement word order and no question mark. Yes/no questions take **if** or **whether**: "Did you pay a bribe?" → He asked **whether I had paid** a bribe. Wh-questions keep the wh-word: "Where **is** the file?" → She asked where the file **was**.',
    '**Commands and requests** use **tell, order, ask, beg, warn, advise** + object + **to-infinitive**; negatives take **not to**: "Don’t sign it," the lawyer said → The lawyer **told me not to sign** it. "Please wait," she said → She **asked us to wait**.',
    'Vocabulary of corruption: **bribery** (offering or taking money for a favour), **embezzlement** (stealing funds in your care), **fraud**, **extortion**, **nepotism** (favouring relatives), **kickback**, **whistle-blower** (someone who reports wrongdoing), **accountability**, **transparency**, **audit**. In Cameroon the **National Anti-Corruption Commission** (CONAC) fights corruption.',
    'Juvenile delinquency: young **offenders**, **truancy** (staying away from school without permission), **vandalism**, **petty theft**, **rehabilitation**. **Practice task (anti-fraud arguments):** report a short interview with a whistle-blower in 120 words, using at least two reported questions and two reported commands.',
  ], 'reported-speech', 'Reported questions are not questions any more: no "do" or "did", and a full stop at the end.',
  ['"Why did you hide the receipts?" the auditor asked her. Reported:', ['The auditor asked her why she had hidden the receipts.', 'The auditor asked her why did she hide the receipts.', 'The auditor asked her why had she hidden the receipts?', 'The auditor said her why she hid the receipts.'], 'Statement order and the past perfect.'],
  [['Embezzlement', 'Stealing money that one has been trusted to manage.'], ['Whistle-blower', 'A person who reports wrongdoing inside an organisation.'], ['Truancy', 'Staying away from school without permission.']],
  [
    { q: 'Report: "Do not accept any gift from candidates," the principal said to the teachers.', steps: ['A negative command: told + object + not to.', 'Pronouns and tense stay the same here.', '**The principal told the teachers not to accept any gift from candidates.**'] },
    { q: 'Report: "Have you ever been arrested?" the judge asked the boy.', steps: ['Yes/no question: whether or if.', 'Have been → had been; you → he.', '**The judge asked the boy whether he had ever been arrested.**'] },
  ]),

  // ---------- 16. Argument ----------
  L('aen-conc-1', 'aen-l6-argument', '16.1', 'Concession: although, whereas, despite', 16, ['Grammar'], [
    '**Concession** admits a point and goes on to something that may seem surprising. **Although**, **though** and **even though** introduce a clause (subject + verb): "**Although** the town is small, it has three hospitals."',
    '**Despite** and **in spite of** take a noun, pronoun or gerund, never a clause: "**Despite** the rain" / "**In spite of** being tired". With a clause, add "the fact that": "**Despite the fact that** it rained".',
    '**Whereas** and **while** contrast two facts side by side: "Some students prefer printed books, **whereas** others read online." **However** and **nevertheless** contrast across sentences: "The plan is costly. **Nevertheless**, it is necessary."',
    'Do not join **although** and **but** in one sentence. In argument, concession makes you sound fair: "**While** it is true that social media spreads rumours, it also..." then answer the point.',
  ], 'concession', 'Check what follows: a clause after although, a noun or -ing after despite.',
  ['"___ his poverty, he paid his children’s fees."', ['In spite of', 'Although', 'Even though', 'Whereas'], 'In spite of + noun phrase.'],
  [['Concession', 'Admitting a point that seems to work against the main statement.'], ['Concessive clause', 'A clause beginning with although, though or even though.'], ['Contrast', 'Showing a difference between two ideas or facts.']],
  [
    { q: 'Rewrite with "despite": "Although the road was bad, the ambulance arrived quickly."', steps: ['Despite needs a noun phrase.', 'The road was bad → the bad road.', '**Despite the bad road, the ambulance arrived quickly.**'] },
    { q: 'Correct: "Although she studied hard, but she failed."', steps: ['Although and but should not be used together.', 'Keep one of them.', '**Although she studied hard, she failed. (Or: She studied hard, but she failed.)**'] },
  ]),

  L('aen-arg-1', 'aen-l6-argument', '16.2', 'Building and defending a thesis', 18, ['Writing'], [
    'An **argumentative essay** takes a clear position and defends it. The **introduction** defines key terms, gives brief background and ends with the **thesis**: "This essay argues that mobile phones should be allowed in secondary schools under strict rules."',
    'Each **body paragraph** makes one point: a topic sentence, an explanation, evidence or an example (a fact, a local case, a statistic), and a link back to the thesis. Put the strongest point first or last.',
    'Show fairness with a **counter-argument** paragraph: state the opposing view honestly ("Opponents argue that phones distract students"), **concede** what is true, then **rebut** it with reasons ("however, clear rules and teacher control reduce this risk").',
    'The **conclusion** restates the thesis in new words, sums up the main reasons and may end with a recommendation. **Practice task (opinion papers):** write a 450-word essay on "Corruption is a greater threat to development than poverty", planning thesis, three points and a rebuttal first.',
  ], 'essay-structure', 'Write the thesis before anything else; every paragraph must serve it.',
  ['The part of an essay that answers the opposing view is the:', ['rebuttal', 'introduction', 'topic sentence', 'title'], 'Concede, then rebut.'],
  [['Thesis', 'The main position an essay argues for.'], ['Counter-argument', 'The opposing view, presented in order to answer it.'], ['Rebuttal', 'An answer that shows why the opposing view does not defeat the thesis.']],
  [
    { q: 'Write a thesis for: "Should school uniforms be abolished?"', steps: ['Take a clear side.', 'Hint at the main reason.', '**School uniforms should be kept, because they reduce the pressure of fashion and promote equality among students.**'] },
    { q: 'Write a concession and rebuttal for the view "Uniforms are expensive".', steps: ['Concede the true part.', 'Rebut with a reason.', '**It is true that uniforms cost money; however, they are cheaper over a year than buying fashionable clothes for every school day.**'] },
  ]),

  // ---------- 17. Reports ----------
  L('aen-report-1', 'aen-l6-reports', '17.1', 'The layout and register of a formal report', 17, ['Writing'], [
    'A **formal report** gives facts and recommendations to someone who asked for them. Common layout: **title**; **to** (who asked for it), **from** (the writer), **date**; **terms of reference** (what you were asked to investigate); **procedure** (how you gathered information); **findings** (what you found, under headings or numbered); **conclusions**; **recommendations**; **name, position and signature**.',
    'The register is **formal and impersonal**: the passive and "it" structures ("It was found that...", "Three classrooms were inspected"), precise numbers, no contractions, no slang and no emotional language. Opinions appear only in the conclusions and recommendations, and must follow from the findings.',
    'Findings are reported in the **past tense**; current conditions may be in the present ("The roof leaks"). Recommendations use **should**, **ought to** or the passive: "New gutters should be fitted before the rainy season."',
    'Headings, numbering and short paragraphs help the reader. A report is not a letter: it has no "Dear Sir" and no "Yours faithfully".',
  ], 'aen-report-layout', 'Keep the findings factual; save your judgement for the conclusions.',
  ['"It was found that 12 of the 40 taps were broken" belongs in the:', ['findings', 'terms of reference', 'title', 'signature'], 'A fact discovered.'],
  [['Terms of reference', 'The statement of what a report must investigate and for whom.'], ['Findings', 'The facts discovered by an investigation.'], ['Recommendation', 'A suggested action based on the findings.']],
  [
    { q: 'Write the terms of reference for a report on the school canteen, asked for by the principal.', steps: ['Say who asked and what must be examined.', 'Use a formal opening.', '**At the request of the Principal, I was asked to investigate the quality of food and hygiene in the school canteen and to make recommendations.**'] },
    { q: 'Rewrite formally for a report: "We looked at the toilets and they were really dirty."', steps: ['Use the passive and a precise description.', 'Remove "really".', '**The toilets were inspected and were found to be in an unhygienic condition.**'] },
  ]),

  L('aen-report-2', 'aen-l6-reports', '17.2', 'Investigating and reporting findings', 17, ['Writing'], [
    'An **investigative report** starts from a problem: late-coming, theft in a dormitory, poor results in a subject. Plan the investigation: define the question, choose **methods** (interviews, a questionnaire, observation, records), collect the information, then analyse it.',
    'Present findings clearly: group them under headings, give numbers and percentages ("65 percent of the students questioned..."), and distinguish **facts** from **opinions** ("Several teachers believe that...").',
    'Draw **conclusions** that the findings support: what is the main cause? Then make **recommendations** that are practical, specific and addressed to someone: who should do what, and by when.',
    '**Practice task (organisational summaries):** your principal asks why many Lower Sixth students arrive late. Interview ten classmates, then write a 350-word report with all the sections of a formal report.',
  ], 'aen-report-steps', 'Every recommendation should answer one finding: if it answers nothing, cut it.',
  ['Which is a recommendation?', ['The gate should be opened at 6.30 am.', '40 percent of students arrive after 7.30 am.', 'Ten students were interviewed.', 'The report was requested by the Principal.'], 'A suggested action with "should".'],
  [['Questionnaire', 'A printed set of questions used to collect information from many people.'], ['Methodology', 'The methods used to gather information.'], ['Conclusion', 'What the findings show, stated briefly.']],
  [
    { q: 'Turn this into a finding: "24 of the 30 girls I asked said the dormitory lights are off by 8."', steps: ['Use the impersonal style of a report.', 'Add the percentage: 24 out of 30 is 80 percent.', '**Of the 30 boarders questioned, 24 (80 percent) reported that the dormitory lights are switched off by 8 pm.**'] },
    { q: 'Write one recommendation for that finding.', steps: ['Address the cause.', 'Say who should act.', '**The Discipline Master should arrange for the lights to stay on until 9.30 pm so that boarders can study.**'] },
  ]),

  // ---------- 18. Speeches and articles ----------
  L('aen-speech-1', 'aen-l6-speeches', '18.1', 'Writing a formal speech', 17, ['Writing'], [
    'A formal speech opens with the **protocol**, greeting the important people in order of rank: "The Divisional Officer, the Mayor, the Principal, distinguished guests, dear teachers and fellow students, ...". Then comes an **introduction** that greets, introduces the speaker if needed and states the purpose.',
    'The **body** develops two to four points, each signposted ("First of all...", "My second point is..."). The **conclusion** sums up and calls the audience to act; the speech ends with thanks: "Thank you for your kind attention."',
    'A speech is written to be **heard**, so it uses the inclusive **we**, direct address ("you, dear parents"), **rhetorical questions**, **repetition** and **groups of three** ("for our school, for our town, for our country"), and short sentences that are easy to follow.',
    'Match the **register** to the occasion: formal and respectful at a civic gathering or prize-giving; warmer and lighter at a farewell party; never slang.',
  ], 'speech-layout', 'Read your speech aloud: if you run out of breath in a sentence, cut it in two.',
  ['"Mr Chairman, distinguished guests, ladies and gentlemen" is the speech’s:', ['protocol', 'conclusion', 'body', 'title'], 'The opening greetings.'],
  [['Protocol', 'The formal greetings at the start of a speech, in order of rank.'], ['Signpost', 'A phrase that tells listeners where the speech is going.'], ['Rhetorical question', 'A question asked for effect, without expecting an answer.']],
  [
    { q: 'Write the protocol for a speech on Youth Day at your school, with the Mayor present.', steps: ['Highest rank first.', 'End with the general audience.', '**The Mayor of the Council, the Principal, distinguished guests, dear teachers, fellow students, ladies and gentlemen...**'] },
    { q: 'Write a closing that calls to action for a speech on cleanliness.', steps: ['Sum up briefly.', 'Use "let us" and end with thanks.', '**Let us keep our campus clean, not for one day, but every day. Thank you for your kind attention.**'] },
  ]),

  L('aen-article-1', 'aen-l6-speeches', '18.2', 'Articles for a school magazine, and adjusting register', 16, ['Writing'], [
    'A **magazine article** has a **headline** (short, catchy), often a **subheading**, a **byline** (By Ngwa Brenda, Lower Sixth Arts), an engaging **opening** (a question, a scene, a surprising fact), body paragraphs with subheadings if long, and a memorable **ending**.',
    'The same topic needs different **registers**: a speech to the Mayor is formal and respectful; a school magazine article is lively but correct, may use contractions and humour, and speaks directly to young readers; a newspaper report is neutral and factual.',
    'Changing register means changing vocabulary ("kids" → "children" → "young people"), sentence length, the use of the first and second person, and the tone (enthusiastic, serious, ironic). Paper tasks often say who will read the text: let that decide every choice.',
    '**Practice task (persuasive arguments):** write the same 100-word appeal for a tree-planting day twice: as part of a speech at a civic gathering, and as a school magazine article, then list five changes you made.',
  ], 'register-scale', 'Picture the reader before you write the first line.',
  ['"Guess what? Our footballers did it again!" suits:', ['a school magazine article', 'a formal report', 'a business letter', 'minutes of a meeting'], 'Lively and informal.'],
  [['Register', 'The level of formality of language, chosen for the audience and purpose.'], ['Byline', 'The line giving the writer’s name.'], ['Tone', 'The writer’s attitude, shown by word choice.']],
  [
    { q: 'Rewrite for a formal speech: "Guys, let’s go plant loads of trees on Saturday, it’ll be awesome!"', steps: ['Replace slang and keep the call to action.', 'Use the inclusive "we" respectfully.', '**Dear friends, I invite all of us to join the tree-planting exercise this Saturday; together we can make a real difference.**'] },
    { q: 'Write a catchy headline and byline for a magazine article on the school library.', steps: ['Short, with word play or a question.', 'Add the writer and class.', '**"Books Are Back!" By Fon Clarisse, Lower Sixth Arts.**'] },
  ]),

  // ---------- 19. Papers ----------
  L('aen-l6-paper1', 'aen-l6-papers', '19.1', 'Paper 1 sprint: spelling, grammar and sounds', 18, ['Exam'], [
    'In the 2026 session, GCE A Level English Language had three papers: **Paper 1**, multiple choice, 1½ hours (Friday 5 June, morning); **Paper 2**, 2¼ hours (Friday 5 June, afternoon); and **Paper 3**, 2¼ hours (Saturday 6 June, morning). Check the timetable for your year.',
    'Multiple-choice drills cover **spelling** (accommodation, necessary, separate, occurrence, embarrass, privilege), **grammar** (agreement, tenses, conditionals, prepositions, inversion: "**Hardly had** we arrived **when**...", "**No sooner had** the bell rung **than**..."), **vocabulary** and **speech work** (sounds, stress, intonation).',
    'Method: read the stem fully, predict the answer before you look at the options, eliminate the clearly wrong ones, and never leave a question blank. Mark doubtful items and return to them; keep to an even pace through the paper.',
    'After each drill, sort your errors by kind (spelling, tense, preposition, sound) and keep a personal list of the items you missed, to revise before the next drill.',
  ], 'aen-gce-papers', 'Predict, then check: decide the answer before reading the options, so the distractors cannot pull you away.',
  ['"No sooner had the meeting started ___ the lights went off."', ['than', 'when', 'then', 'that'], 'No sooner... than; hardly... when.'],
  [['Stem', 'The question part of a multiple-choice item.'], ['Distractor', 'A wrong option designed to look possible.'], ['Inversion', 'Putting the auxiliary before the subject, as in "Hardly had we...".']],
  [
    { q: 'Choose the correctly spelt set: (A) occurrence, privilege, separate (B) occurence, priviledge, seperate.', steps: ['Occurrence has double c and double r.', 'Privilege has no d; separate has "par".', '**Set A is correct.**'] },
    { q: 'Rewrite with inversion: "I had hardly sat down when the phone rang."', steps: ['Put hardly first.', 'Then the auxiliary had before the subject.', '**Hardly had I sat down when the phone rang.**'] },
  ]),

  L('aen-l6-paper2', 'aen-l6-papers', '19.2', 'Written papers clinic: composition and text-directed tasks', 18, ['Exam'], [
    'The written papers test **composition** (essays and functional writing such as letters, speeches, reports and articles) and **text-directed** tasks based on given passages (summary, rewriting in another form or register, comprehension). Read each paper’s instructions for its sections, choices and marks.',
    'For a composition: read **all** the options, choose the one you know most about, then spend a few minutes on a **plan** (thesis or purpose, paragraph points, ending). Write in paragraphs, check the layout of functional writing, and keep a few minutes at the end to proofread.',
    'For a text-directed task: underline exactly what is asked (form, audience, length), take your points only from the passage, and write in the form required: a speech needs protocol, a report needs headings, a summary needs a word count.',
    'The **promotion examinations** at the end of Lower Sixth decide who moves to Upper Sixth: treat them as a full rehearsal of the GCE, under time.',
  ], 'aen-paper-plan', 'A five-minute plan saves twenty minutes of crossing out.',
  ['In a text-directed task, the content of your answer should come from:', ['the given passage', 'your general knowledge', 'another passage', 'your opinions'], 'The task is directed by the text.'],
  [['Composition', 'An extended piece of writing such as an essay, letter or speech.'], ['Text-directed task', 'A task that uses a given passage, such as a summary or a rewrite.'], ['Proofreading', 'Checking a finished text for errors.']],
  [
    { q: 'You have 60 minutes for a composition. Plan your time.', steps: ['Plan: about 5 to 8 minutes.', 'Write: about 45 minutes.', '**Proofread: the last 5 to 7 minutes.**'] },
    { q: 'A task says: "Using the passage, write a speech of about 250 words for the PTA meeting." List three things to check before you write.', steps: ['The form: a speech, so protocol and thanks.', 'The audience: parents and teachers, so formal register.', '**The content comes from the passage, and the length is about 250 words.**'] },
  ]),
];
