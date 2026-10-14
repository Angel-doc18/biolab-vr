// Logic lessons for Form 3, term 1: what logic is, Aristotle and the laws of
// thought, form and matter, validity and truth, the functions of language,
// the three operations of the mind, arguments, concepts and terms. Original
// text written for this app, with Cameroonian examples.

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

export const LESSONS_3A = [
  // ---------- What is logic? ----------
  L('lo-whatis-3', 'lo-f3-intro', '1.1', 'What is logic?', 12, ['Introduction'], [
    'The word **logic** comes from the Greek **logos**, which means word, thought or reason. Logic is the study of **reasoning**: how we move from what we know to what follows from it.',
    'A common definition: **logic is the science and art of correct reasoning**.\n- it is a **science** because it studies, in an orderly way, the laws and rules that correct thinking obeys\n- it is an **art** because it gives the practical skill of applying those rules when we argue, study, judge or decide.',
    'Why study logic?\n- to reason clearly and avoid mistakes\n- to tell a good argument from a bad one, in class, in the market, in politics and in advertisements\n- to express ideas in an orderly way in essays and examinations\n- to resist manipulation by tricks that only look like reasons\n- it supports every other subject: mathematics, science, law, philosophy and computer programming.',
  ], 'logic-intro', 'Logic: the science (laws) and the art (skill) of correct reasoning.',
  ['Logic is called an art because it:', ['gives the skill of applying the rules of reasoning', 'studies paintings', 'needs no rules', 'is only about speaking loudly'], 'Science knows the rules; art applies them.'],
  [['Logic', 'The science and art of correct reasoning.'], ['Logos', 'Greek for word, thought or reason.'], ['Reasoning', 'Moving from what is known to what follows from it.']],
  [
    { q: 'Explain, with an example, why logic is useful to a student.', steps: ['**Logic helps us check whether a conclusion really follows from the reasons given.**', '**Example: an advert says "Everyone is using this cream, so it is the best." Logic shows that popularity is not proof of quality.**', '**So the student learns to ask for real evidence before believing or buying.**'] },
  ]),

  L('lo-aristotle-3', 'lo-f3-intro', '1.2', 'Aristotle and the laws of thought', 13, ['Introduction'], [
    '**Aristotle** (384 to 322 BC), a Greek philosopher and pupil of Plato, is called the **father of logic**. He was the first to set out a full system of rules for reasoning, especially the **syllogism** (an argument with two premises and a conclusion). His logical works were later collected as the **Organon**, meaning "the instrument", because logic is the instrument of all knowledge.',
    'Logic rests on three basic **laws of thought**:\n- the **law of identity**: a thing is what it is (A is A)\n- the **law of non-contradiction**: a thing cannot both be and not be in the same respect at the same time (nothing is both A and not-A)\n- the **law of excluded middle**: a thing either is or is not; there is no third possibility (either A or not-A).',
    'Example: "This mango is ripe" and "This mango is not ripe" cannot both be true of the same mango at the same moment (non-contradiction), and one of them must be true (excluded middle).',
  ], 'logic-intro', 'Identity, non-contradiction, excluded middle.',
  ['"A thing cannot both be and not be in the same respect at the same time" is the law of:', ['non-contradiction', 'identity', 'excluded middle', 'inverse variation'], 'One of the three laws of thought.'],
  [['Aristotle', 'Greek philosopher (384 to 322 BC), the father of logic.'], ['Organon', 'The collection of Aristotle’s logical works.'], ['Law of identity', 'A thing is what it is.'], ['Law of excluded middle', 'A thing either is or is not; there is no third option.']],
  [
    { q: 'A pupil says: "The light is on and the light is off." Which law of thought is broken, and why?', steps: ['**The law of non-contradiction.**', '**The same light cannot be both on and not on at the same time.**', '**One of the two statements must be false.**'] },
  ]),

  // ---------- Form and matter ----------
  L('lo-formmatter-3', 'lo-f3-formmatter', '2.1', 'Form and matter in reasoning', 13, ['Introduction'], [
    'Every argument has a **matter** (its content: what it is about) and a **form** (its structure: how the parts are arranged). Two arguments about very different things can share the same form:\n- All mangoes are fruits. All fruits are plants. So all mangoes are plants.\n- All lions are cats. All cats are animals. So all lions are animals.\nBoth have the form: All A are B. All B are C. So all A are C.',
    '- **Formal logic** studies the **form** of reasoning: whether the conclusion follows from the premises, whatever they are about.\n- **Material logic** studies the **matter**: whether the statements agree with reality, and how we gain true knowledge (observation, definition, method).',
    'Logicians often replace the words of an argument by **letters** (A, B, C or S, M, P) to show its form clearly. If the form is correct, any argument with that form is correct in its reasoning.',
  ], 'logic-form-matter', 'Form = structure; matter = content.',
  ['Replacing the words of an argument by letters shows its:', ['form', 'matter', 'truth', 'language'], 'The structure, without the content.'],
  [['Form', 'The structure of an argument.'], ['Matter', 'The content of an argument.'], ['Formal logic', 'The study of the form of reasoning.'], ['Material logic', 'The study of the truth of the content of reasoning.']],
  [
    { q: 'Write the form of: "All doctors are graduates. All graduates can read. So all doctors can read."', steps: ['Let A = doctors, B = graduates, C = people who can read.', '**All A are B. All B are C. So all A are C.**'] },
  ]),

  L('lo-validtruth-3', 'lo-f3-formmatter', '2.2', 'Validity, truth and soundness', 15, ['Introduction'], [
    '**Truth** and **validity** are different:\n- **truth** belongs to **propositions** (statements): a statement is true if it agrees with the facts\n- **validity** belongs to **arguments**: an argument is valid if its conclusion **follows necessarily** from its premises, so that if the premises were true, the conclusion could not be false.',
    'Possible combinations:\n- valid, with true premises: the conclusion **must** be true. Such an argument is **sound**\n- valid, with a false premise: the conclusion may be false. "All fish can fly. A goat is a fish. So a goat can fly." The form is correct; the matter is wrong\n- invalid: the conclusion does not follow, even if every statement happens to be true. "All dogs are animals. All cats are animals. So all dogs are cats." Both premises are true, yet the conclusion is false, so the reasoning must be wrong.',
    'So: a true conclusion does not prove an argument is valid, and a valid argument does not prove its conclusion is true. Only a **sound** argument guarantees a true conclusion.',
  ], 'logic-form-matter', 'Statements are true or false; arguments are valid or invalid.',
  ['A valid argument with all its premises true is:', ['sound', 'invalid', 'a fallacy', 'a proposition'], 'Its conclusion must be true.'],
  [['Validity', 'The property of an argument whose conclusion follows necessarily from its premises.'], ['Truth', 'The agreement of a statement with the facts.'], ['Sound argument', 'A valid argument with true premises.']],
  [
    { q: 'Is this argument valid? Is it sound? "All students are rich. Ngum is a student. So Ngum is rich."', steps: ['**Valid: if both premises were true, the conclusion would have to be true.**', '**Not sound: the first premise, "All students are rich", is false.**'] },
  ]),

  // ---------- Language ----------
  L('lo-informative-3', 'lo-f3-language', '3.1', 'Informative and expressive language', 12, ['Logic and language'], [
    'Language does many jobs. The first two:\n- the **informative** (cognitive) function: to state facts or give information, true or false. "The Sanaga is the longest river in Cameroon." "The bus leaves at 6 a.m."\n- the **expressive** (emotive) function: to express or arouse feelings and attitudes. "What a lovely day!" "I miss my village." Poems and love letters are mostly expressive.',
    'Informative sentences can be checked against the facts; expressive sentences are not true or false in the same way: they show how the speaker feels.',
    'Logic is concerned mainly with **informative** language, because only statements that are true or false can serve as premises and conclusions of arguments.',
  ], 'logic-language', 'Informative: true or false. Expressive: feelings.',
  ['"I am so happy to see you!" mainly serves the:', ['expressive function', 'informative function', 'directive function', 'phatic function'], 'It shows feeling.'],
  [['Informative function', 'Using language to state facts that are true or false.'], ['Expressive function', 'Using language to express or arouse feelings.'], ['Cognitive', 'Concerned with knowledge.']],
  [
    { q: 'Classify: (a) "Bamenda is in the North-West Region." (b) "Oh, how I love Bamenda!"', steps: ['**(a) Informative: it states a fact that can be checked.**', '**(b) Expressive: it shows the speaker’s feeling.**'] },
  ]),

  L('lo-directive-3', 'lo-f3-language', '3.2', 'Directive and phatic language; mixed functions', 13, ['Logic and language'], [
    'Two more functions:\n- the **directive** function: to get someone to do (or not do) something: commands, requests, advice, prayers. "Switch off your phones." "Please lend me your pen." "Do not drink and drive."\n- the **phatic** (social) function: to open, keep or close social contact rather than to give news. "Good morning." "How was the night?" "Safe journey!" Greetings are not really questions waiting for information.',
    'Many sentences serve **more than one function**. "The bus is about to leave!" informs (a fact), may express worry, and directs (hurry up). A sign saying "Wet floor" informs and warns.',
    'To understand a speaker correctly, identify the **main** function. In logic we pick out the informative content and test it, while noticing when emotion or pressure is being used instead of reasons.',
  ], 'logic-language', 'Directive: to make act. Phatic: to keep contact.',
  ['"Safe journey!" said at a bus station serves mainly the:', ['phatic function', 'informative function', 'directive function', 'logical function'], 'Social contact.'],
  [['Directive function', 'Using language to get someone to act.'], ['Phatic function', 'Using language to keep social contact.'], ['Multi-functional sentence', 'A sentence that serves several functions at once.']],
  [
    { q: 'Name the functions in a teacher’s words: "It is 7.30. Sit down quietly."', steps: ['**"It is 7.30": informative (a fact about the time).**', '**"Sit down quietly": directive (a command).**'] },
  ]),

  // ---------- Operations of the mind ----------
  L('lo-operations-3', 'lo-f3-operations', '4.1', 'Apprehension, judgement and reasoning', 14, ['Terms'], [
    'Traditional logic describes **three operations of the mind**, each with a mental product and a way of being expressed in words:\n- **simple apprehension**: the mind grasps what a thing is, without saying anything true or false about it. Product: a **concept** (idea). Expressed by a **term**: "cocoa farmer"\n- **judgement**: the mind joins or separates two concepts, affirming or denying. Product: a judgement. Expressed by a **proposition**: "Cocoa farmers are hard workers"\n- **reasoning** (inference): the mind moves from judgements already known to a new one. Product: an inference. Expressed by an **argument**: "All farmers are hard workers. Ewane is a farmer. So Ewane is a hard worker."',
    'Each operation builds on the one before: there is no judgement without concepts, and no reasoning without judgements. This is why a logic course studies **terms**, then **propositions**, then **arguments**.',
    'Only judgements (propositions) are true or false. A term by itself, such as "teacher", is neither true nor false.',
  ], 'logic-operations', 'Concept → term; judgement → proposition; reasoning → argument.',
  ['Which operation of the mind can be true or false?', ['judgement', 'simple apprehension', 'imagination', 'memory'], 'It affirms or denies.'],
  [['Simple apprehension', 'The mental act of grasping what a thing is.'], ['Judgement', 'The act of affirming or denying one idea of another.'], ['Reasoning', 'The act of drawing a new judgement from known ones.']],
  [
    { q: 'Name the operation of the mind behind each: (a) "fisherman"; (b) "Fishermen are early risers"; (c) "Fishermen are early risers, Ekane is a fisherman, so Ekane is an early riser."', steps: ['**(a) Simple apprehension: a concept expressed as a term.**', '**(b) Judgement: a proposition.**', '**(c) Reasoning: an argument.**'] },
  ]),

  L('lo-arguments-3', 'lo-f3-operations', '4.2', 'Arguments: premises and conclusions', 14, ['Terms'], [
    'An **argument** is a group of propositions in which one, the **conclusion**, is claimed to follow from the others, the **premises**. Not every group of sentences is an argument: a story or a description gives no reasons.',
    'Indicator words help find the parts:\n- **premise indicators**: because, since, for, as, given that, seeing that\n- **conclusion indicators**: therefore, so, hence, thus, consequently, it follows that.',
    'The conclusion is not always last. "Ayuk will pass, because she studies every day and every student who studies every day passes." Here the conclusion comes first. To analyse, rewrite the argument in **standard order**: premises first, then the conclusion after a line or the sign ∴ ("therefore").',
  ], 'logic-argument', 'Find the conclusion first, then ask: what reasons are given for it?',
  ['In "Since it is raining, the match will be cancelled", the conclusion is:', ['the match will be cancelled', 'it is raining', 'since', 'there is no conclusion'], '"Since" introduces the premise.'],
  [['Argument', 'Propositions in which a conclusion is claimed to follow from premises.'], ['Premise', 'A proposition given as a reason.'], ['Conclusion', 'The proposition claimed to follow from the premises.'], ['Indicator word', 'A word that signals a premise or a conclusion.']],
  [
    { q: 'Put in standard order: "The road is dangerous, so drive slowly, because it rained last night and wet roads are slippery."', steps: ['Premise 1: **It rained last night.**', 'Premise 2: **Wet roads are slippery.**', 'Intermediate conclusion: **The road is dangerous.**', 'Final conclusion: **∴ Drive slowly.**'] },
  ]),

  // ---------- Concepts and terms ----------
  L('lo-concept-3', 'lo-f3-concepts', '5.1', 'The concept and how it is formed', 13, ['Terms'], [
    'A **concept** (idea) is the mental representation of **what a thing is**: its essential nature. The concept "tree" applies to every tree, big or small, iroko or palm.',
    'How the mind forms a concept:\n- **perception**: the senses meet a real object (you see a particular mango tree)\n- **image**: the mind keeps a picture of it, with its particular size, colour and place\n- **abstraction**: the mind sets aside these individual details and keeps what is common and essential (a woody plant with a trunk and branches)\n- the result is a **concept**, which is **universal**: it fits all trees.',
    'Concept and image differ:\n- an **image** is concrete and particular (this tree, seen yesterday), and can be imagined\n- a **concept** is abstract and universal (any tree), and is understood rather than pictured. We can have a concept of a thousand-sided figure or of justice, but no clear image of either.',
  ], 'logic-concept', 'An image is particular; a concept is universal.',
  ['The mental process that keeps what is common and leaves out individual details is:', ['abstraction', 'perception', 'imagination', 'memory'], 'It produces the concept.'],
  [['Concept', 'The mental representation of what a thing is.'], ['Image', 'A particular mental picture of something perceived.'], ['Abstraction', 'Leaving out particular details to keep what is common.'], ['Universal', 'Applying to every member of a class.']],
  [
    { q: 'Explain how a child forms the concept "chair".', steps: ['**The child sees many particular chairs: wooden, plastic, big, small.**', '**The mind leaves out size, colour and material (abstraction).**', '**It keeps what is common: a seat with a back, made for one person to sit on. This is the concept "chair".**'] },
  ]),

  L('lo-terms-3', 'lo-f3-concepts', '5.2', 'Terms, words and sentences', 14, ['Terms'], [
    'A **term** is a word or group of words that expresses a concept and can stand as the **subject** or **predicate** of a proposition. A term may be:\n- one word: "Cameroon", "students"\n- several words: "the longest river in Cameroon", "students of Form 3".',
    'Words, terms and sentences differ:\n- not every word is a term. "All", "some", "no", "is", "and", "of" cannot stand alone as subject or predicate; they help to form propositions\n- a **sentence** is a grammatical unit; when it states something true or false it expresses a **proposition**, which is made of terms.',
    'In a proposition:\n- the **subject term** is what we speak about\n- the **predicate term** is what is affirmed or denied of the subject.\nIn "All Form 3 students are learners of logic", the subject term is "Form 3 students" and the predicate term is "learners of logic".',
  ], 'logic-standard-form', 'A term can stand as subject or predicate; "all" and "is" cannot.',
  ['In "Some traders in Douala are wholesalers", the subject term is:', ['traders in Douala', 'some', 'wholesalers', 'are'], 'What the proposition is about.'],
  [['Term', 'A word or group of words expressing a concept, able to stand as subject or predicate.'], ['Subject term', 'The term about which something is said.'], ['Predicate term', 'The term that is affirmed or denied of the subject.']],
  [
    { q: 'Pick out the subject and predicate terms: "No member of the football team is a smoker."', steps: ['Quantifier: **no.**', 'Subject term: **member(s) of the football team.**', 'Predicate term: **smoker(s).**'] },
  ]),
];
