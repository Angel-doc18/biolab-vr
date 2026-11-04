// A Level Philosophy lessons (0790), Lower Sixth, Term 1: the papers and the
// diagnostic, what philosophy is, the dissertation, body and soul,
// consciousness and the unconscious, the self and the other, freedom and
// determinism, and language and culture.

const PAPER = { Method: 'All papers', MCQ: 'Paper 1' };

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

export const LESSONS_PHL6A = [
  // ---------- 1. Orientation ----------
  L('aph-method-1', 'aph-l6-method', '1.1', 'The 0790 examination and what earns marks', 14, ['Method'], [
    'The GCE Advanced Level Philosophy examination (0790) has three papers. In June 2026: **Paper 1**, 1½ hours, multiple choice (Saturday 13 June, morning); **Paper 2**, 3 hours (Saturday 13 June, afternoon); **Paper 3**, 3 hours (Monday 15 June, morning). The scheme of work describes the written work as **dissertations** (essays) and **text commentaries**; read the rubric of each paper for its sections and choices.',
    'Philosophy has 6 periods a week in the Arts series. The Lower Sixth covers **method**, **philosophical anthropology** (man), **metaphysics** and **epistemology** (knowledge and science). The Upper Sixth covers **political philosophy**, **ethics** and **African philosophy**.',
    'Examiners reward: a clearly stated **problem**; **concepts defined** precisely; **arguments** with reasons and relevant examples; accurate use of **authors**; **dialectical balance**; and a **justified conclusion**. They penalise narration of philosophers’ lives, unexplained quotations and answers that drift from the question.',
  ], 'aph-gce-0790', 'A philosophy answer is an argument, not a story about philosophers.',
  ['Which paper of A Level Philosophy is multiple choice?', ['Paper 1', 'Paper 2', 'Paper 3', 'none'], '1½ hours.'],
  [['Dissertation', 'A structured philosophical essay that answers a question by argument.'], ['Text commentary', 'An explanation and critical evaluation of a philosophical text.']],
  [
    { q: 'Improve this sentence for an essay on freedom: "Sartre was a French philosopher born in 1905 who wrote many books."', steps: ['It is **biography**, not argument.', 'Replace with the idea: **for Sartre, man is condemned to be free: existence precedes essence, so we define ourselves by our choices**.', 'Add its use: **this means no excuse (nature, society) removes our responsibility**.'] },
  ]),
  L('aph-method-2', 'aph-l6-method', '1.2', 'Diagnostic: reading, summarising and philosophical vocabulary', 14, ['Method'], [
    'The diagnostic checks three base skills: **critical reading** (finding a text’s main claim and reasons), **summary** (restating an argument briefly in your own words), and **vocabulary** (using philosophical terms precisely).',
    'Key words to master from the start: **concept** (a general idea), **argument** (reasons leading to a conclusion), **premise**, **thesis**, **objection**, **paradox**, **dialectic**, **a priori** (known independently of experience) and **a posteriori** (known from experience), **necessary** and **contingent**, **universal** and **particular**.',
    'Summarising well means keeping the **logical links** (because, therefore, however) and dropping examples and repetitions.',
  ], 'aph-vocabulary', 'A summary keeps the reasoning and drops the decoration.',
  ['Knowledge known independently of experience is called:', ['a priori', 'a posteriori', 'contingent', 'empirical'], 'Like mathematics.'],
  [['A priori', 'Known independently of experience.'], ['Contingent', 'True but could have been otherwise.'], ['Paradox', 'A statement that seems contradictory yet may be true.']],
  [
    { q: 'Summarise in one sentence: "We often believe we act freely. Yet we do not know most of the causes of our desires. So our feeling of freedom may be an illusion."', steps: ['Find the claim: **the feeling of freedom may be an illusion**.', 'Find the reason: **we are ignorant of the causes of our desires**.', '**Summary: because we ignore the causes of our desires, our sense of freedom may be illusory.**'] },
  ]),

  // ---------- 2. Introduction ----------
  L('aph-intro-1', 'aph-l6-intro', '2.1', 'What is philosophy? From myth to logos', 16, ['Man'], [
    '**Philosophy** comes from the Greek *philos* (love) and *sophia* (wisdom): the love of wisdom. Tradition credits Pythagoras with calling himself a "philosopher", a lover rather than possessor of wisdom.',
    'Before philosophy, peoples explained the world by **myths**: stories of gods and heroes passed down by tradition. From the 6th century BCE in Ionia, thinkers such as **Thales** (who held that the first principle of all things is water), Anaximander and Heraclitus sought **natural causes** by **reason** (*logos*) and open argument. This is the passage **from mythos to logos**.',
    'For Plato and Aristotle, philosophy begins in **wonder** (*thaumazein*). Socrates practised it as questioning: "the unexamined life is not worth living" (Plato, *Apology*). Philosophy asks the questions that facts alone cannot settle: What is truth? What is justice? What is a person?',
  ], 'aph-myth-logos', 'Myth tells; philosophy argues and can be argued with.',
  ['Thales held that the first principle of all things is:', ['water', 'fire', 'number', 'atoms'], 'A natural, not mythical, explanation.'],
  [['Mythos', 'An explanation by sacred story and tradition.'], ['Logos', 'Reason, argument and rational account.']],
  [
    { q: 'Contrast a mythical and a philosophical explanation of thunder.', steps: ['Myth: **a god is angry and strikes with thunder**, accepted on tradition.', 'Philosophy (logos): **seek a natural cause, argued for and open to criticism**.', 'The difference is the **kind of justification**: authority of tradition against reasons anyone can examine.'] },
  ]),
  L('aph-intro-2', 'aph-l6-intro', '2.2', 'Features of philosophical inquiry; philosophy, religion and science', 16, ['Man'], [
    'Philosophical inquiry is:\n- **critical**: it examines beliefs and their justifications instead of accepting them\n- **systematic**: it links ideas into a coherent whole\n- **radical**: it goes to the roots (*radix*) of problems and questions assumptions\n- **universal** in scope: it asks about the whole of reality and human life.',
    '**Religion** rests on **faith** and **revelation**, accepted through belief and a community of worship; philosophy rests on **reason** alone, though it may reflect on religious questions (the existence of God, evil).',
    '**Science** studies a limited field of facts by **observation, hypothesis and experiment**, aiming at laws; philosophy reflects on what science presupposes (truth, causality, method) and on questions of value and meaning that experiments cannot settle.',
  ], 'aph-disciplines', 'Philosophy is not against religion or science: it asks what each one claims and how it justifies it.',
  ['Philosophy is radical because it:', ['goes to the roots of problems and questions assumptions', 'is violent', 'is political', 'rejects all reason'], 'Radix.'],
  [['Critical', 'Examining claims and their justification.'], ['Revelation', 'Truth believed to be disclosed by God.']],
  [
    { q: 'How would religion, science and philosophy each approach the question "Why do people suffer?"', steps: ['Religion: **from faith and revelation**: suffering in relation to God’s plan.', 'Science: **causes**: disease, injury, social conditions, measured and tested.', 'Philosophy: **the meaning and justification of suffering**: is evil compatible with a good God? How should we live with it?'] },
  ]),

  // ---------- 3. Dissertation ----------
  L('aph-dissertation-1', 'aph-l6-dissertation', '3.1', 'The introduction: the problematic grid', 18, ['Method'], [
    'The introduction prepares the whole argument. A reliable **problematic grid**:\n- **lead-in**: a short entry into the theme (an observation, a paradox, a fact)\n- **theme** and **definition** of key terms of the question\n- **problem**: the difficulty or tension hidden in the question (why it is not obvious)\n- **question(s)** that express that problem\n- **plan**: announce the thesis and antithesis (and synthesis) without arguing them yet.',
    'A **thesis** is a position defended by reasons; the **antithesis** is the opposed position taken seriously. The problem usually sits between them: for example, freedom seems obvious in experience, yet science explains behaviour by causes.',
    'Avoid: starting with "Since the dawn of time", repeating the question without a problem, and announcing a plan that does not match the development.',
  ], 'aph-dissertation', 'No problem, no essay: the problem is what makes the question worth answering.',
  ['In the introduction, the problem is:', ['the tension that makes the question difficult', 'the title copied', 'a list of philosophers', 'the final answer'], 'It drives the plan.'],
  [['Problematic', 'The structured statement of the problem raised by a question.'], ['Thesis', 'A position defended with arguments.']],
  [
    { q: 'Write a problematic for "Is man free?"', steps: ['Define: **freedom = the power to choose one’s actions without external constraint**.', 'Problem: **we experience ourselves as choosing, yet our behaviour can be explained by biological, psychological and social causes**.', 'Questions: **Is freedom an illusion of consciousness, or a real power? Can it coexist with determinism?**', 'Plan: **I. Man is determined (Spinoza, Freud); II. Man is free (Sartre); III. Freedom as conquest within determinisms.**'] },
  ]),
  L('aph-dissertation-2', 'aph-l6-dissertation', '3.2', 'The development, transitions and conclusion', 18, ['Method'], [
    'The **development** often follows a **dialectical** plan: **thesis** (a first answer and its reasons), **antithesis** (its limits and the opposed view), **synthesis** (a fuller answer that keeps what is true in both). Other plans are possible (analytic plan, notional plan), provided they answer the problem.',
    'Each **paragraph** has: an **idea** (topic sentence), an **argument** (reasons), an **author** used accurately, an **example** analysed, and a **link** back to the question. **Transitions** between parts sum up and show why the argument must move on.',
    'The **conclusion** recalls the path of the argument briefly, gives a **clear answer** to the question, and may open a wider question. It must not introduce new arguments.',
  ], 'aph-essay-paragraph', 'One idea per paragraph, and every paragraph ends by answering the question.',
  ['The synthesis in a dialectical plan:', ['goes beyond the thesis and antithesis to a fuller answer', 'repeats the thesis', 'chooses one side without reasons', 'starts a new subject'], 'Overcomes the opposition.'],
  [['Antithesis', 'The opposing view, examined seriously.'], ['Synthesis', 'A fuller position that keeps what is valid in thesis and antithesis.'], ['Transition', 'A link that shows why the argument moves to the next part.']],
  [
    { q: 'Write a transition between part I (man is determined) and part II (man is free).', steps: ['Sum up: **causes do shape much of what we do**.', 'Show the limit: **but if everything were determined, responsibility and moral judgement would lose meaning**.', 'Announce: **we must therefore examine whether man is not, after all, the author of his choices**.'] },
  ]),

  // ---------- 4. Body and soul ----------
  L('aph-man-1', 'aph-l6-man', '4.1', 'Dualism: Plato and Descartes', 18, ['Man'], [
    '**Dualism** holds that a human being is made of two distinct realities: **body** and **soul** (or mind).',
    '**Plato** (about 428 to 348 BCE) taught that the soul is immortal and akin to the eternal **Forms**; the body is its **prison** or tomb, which distracts it with appetites (*Phaedo*). In the *Republic* the soul has three parts: **reason**, **spirit** and **appetite**, and justice is their harmony under reason.',
    '**René Descartes** (1596 to 1650), in the *Meditations on First Philosophy* (1641), distinguished the **thinking substance** (*res cogitans*), unextended and indivisible, from the **extended substance** (*res extensa*), the body as a machine. The mind is known with certainty first (the cogito); the body is known later. The famous difficulty: **how do they interact?** Descartes pointed to the pineal gland, an answer few found convincing.',
  ], 'aph-dualism', 'Dualism’s strength is our experience of thinking; its weakness is explaining interaction.',
  ['For Descartes, the mind is:', ['a thinking, unextended substance', 'an extended machine', 'a function of the brain', 'an illusion'], 'Res cogitans.'],
  [['Dualism', 'The view that body and mind are distinct substances.'], ['Res cogitans', 'Descartes’ thinking substance.'], ['Res extensa', 'Descartes’ extended (bodily) substance.']],
  [
    { q: 'Give an argument for and against Cartesian dualism.', steps: ['For: **I can doubt that I have a body but not that I think**; so mind and body seem distinct.', 'Against: **mental states change with brain injury, drugs and illness**; a non-physical mind could not be affected so directly.', 'The **interaction problem** remains unsolved.'] },
  ]),
  L('aph-man-2', 'aph-l6-man', '4.2', 'Monism and materialism', 16, ['Man'], [
    '**Monism** holds that a human being is one kind of reality. **Materialist monism** says everything, including thought, is matter: **Democritus** explained the soul by fine atoms; **La Mettrie** in *Man a Machine* (1747) made thought a function of the organised body; modern neuroscience links mental states to brain processes.',
    '**Marx** gave a historical materialism: human consciousness is shaped by social and economic life, not the other way round.',
    'Other positions: **spiritualist monism** (only mind is real, as in some idealisms) and Spinoza’s view of mind and body as **two aspects of one substance**. Critics of materialism ask whether neurons can explain **meaning, consciousness and freedom** from the inside: the "hard problem" of consciousness.',
  ], 'aph-monism', 'Materialism explains how the brain works; it is challenged to explain what it is like to think.',
  ['La Mettrie’s Man a Machine (1747) defended:', ['materialism', 'Platonic dualism', 'idealism', 'theology'], 'Thought as bodily function.'],
  [['Monism', 'The view that reality is of one kind.'], ['Materialism', 'The view that everything, including mind, is matter.']],
  [
    { q: 'Use an example to support materialism.', steps: ['Example: **a stroke damaging part of the brain can remove the ability to speak**.', 'This shows **mental capacities depend on brain structures**.', 'A materialist concludes **mind is what the brain does**; a dualist may reply that the brain is only the instrument of the mind.'] },
  ]),

  // ---------- 5. Consciousness ----------
  L('aph-consciousness-1', 'aph-l6-consciousness', '5.1', 'Consciousness and the cogito', 16, ['Man'], [
    '**Consciousness** is the immediate awareness of oneself and of the world. **Reflective** consciousness turns back on itself: I know that I know. It is the basis of **knowledge, morality and responsibility**, and so of human **dignity**: Pascal called man "a thinking reed", weak but great because he knows he dies.',
    'Descartes, doubting everything that can be doubted, found one certainty: "**I think, therefore I am**" (*Discourse on Method*, 1637). Even if I am deceived, I who am deceived exist as a thinking thing.',
    'For **Sartre** (*Being and Nothingness*, 1943), consciousness is always consciousness **of something** (intentionality, from Husserl) and is pure **freedom**: it is never a thing, always beyond what it is.',
  ], 'aph-cogito', 'The cogito is the one certainty doubt cannot destroy.',
  ['Pascal called man:', ['a thinking reed', 'a political animal', 'a wolf to man', 'a machine'], 'Weak but conscious.'],
  [['Consciousness', 'Awareness of oneself and the world.'], ['Cogito', 'Descartes’ "I think, therefore I am".'], ['Intentionality', 'The directedness of consciousness towards an object.']],
  [
    { q: 'Explain why the cogito survives even the "evil demon" hypothesis.', steps: ['Suppose a demon deceives me about everything.', 'Then **I am deceived**, and to be deceived **I must think**.', 'So **my existence as a thinking thing is certain**, whatever else is false.'] },
  ]),
  L('aph-consciousness-2', 'aph-l6-consciousness', '5.2', 'Freud and the unconscious', 18, ['Man'], [
    '**Sigmund Freud** (1856 to 1939) argued that much of mental life is **unconscious**. In *The Interpretation of Dreams* (1899, dated 1900) he called dreams the "royal road" to the unconscious: they express disguised **wishes**. Slips of the tongue, forgetting and neurotic symptoms reveal it too.',
    'His later model (*The Ego and the Id*, 1923): the **id** (instinctive drives, the pleasure principle), the **superego** (internalised moral authority), and the **ego** (the conscious self that mediates with reality). **Repression** pushes unacceptable desires out of consciousness; they return in disguised forms.',
    'The unconscious is a "wound" to human pride: man is not fully master in his own house. **Sartre** objected that the theory excuses us; he spoke of **bad faith** instead. Others (Popper) questioned whether psychoanalysis can be tested.',
  ], 'aph-freud', 'Freud does not deny consciousness; he denies that it is the whole mind.',
  ['In Freud’s theory, the ego:', ['mediates between the id, the superego and reality', 'is the source of drives', 'is the moral censor only', 'is the body'], 'The reality principle.'],
  [['Unconscious', 'Mental processes not accessible to consciousness.'], ['Repression', 'Pushing painful desires out of consciousness.'], ['Superego', 'Internalised moral authority.']],
  [
    { q: 'A student forgets an appointment with a feared teacher. How would Freud and Sartre interpret this?', steps: ['Freud: **an unconscious wish to avoid the meeting caused the forgetting**.', 'Sartre: **the student chose not to remember and hides this choice from themself: bad faith**.', 'Both see meaning in the act; they differ on **responsibility**.'] },
  ]),

  // ---------- 6. Society ----------
  L('aph-society-1', 'aph-l6-society', '6.1', 'Man as a social being', 16, ['Man'], [
    '**Aristotle** called man a **political animal** (*Politics*): only within the city does he fulfil his nature; one who lives outside society is "either a beast or a god".',
    'Cases of **feral children** (such as Victor of Aveyron, found in France in 1800) show that language, upright behaviour and human feelings are largely **learned** through others.',
    'African thought stresses community: John **Mbiti** summed it up as "I am because we are, and since we are, therefore I am" (1969); the Southern African idea of **ubuntu** holds that a person is a person through other persons. The danger of the community view is to crush the individual; the danger of individualism is isolation.',
  ], 'aph-social-man', 'Society is not added to man from outside: it is where he becomes human.',
  ['Aristotle said that a being who lives outside society is:', ['either a beast or a god', 'the happiest', 'a citizen', 'a philosopher'], 'Politics, book 1.'],
  [['Political animal', 'Aristotle’s description of man as naturally living in a city.'], ['Ubuntu', 'The idea that a person is a person through others.']],
  [
    { q: 'Use the case of feral children in an essay on "Is man naturally social?"', steps: ['Fact: **children raised without human contact lack language and human habits**.', 'Inference: **much of what is human is learned socially**.', 'Limit: **it shows society is necessary for development, not that nature contributes nothing**.'] },
  ]),
  L('aph-society-2', 'aph-l6-society', '6.2', 'Intersubjectivity: Hegel and Sartre', 18, ['Man'], [
    '**Intersubjectivity** means that the self exists and knows itself in relation to other selves.',
    '**Hegel** (*Phenomenology of Spirit*, 1807): self-consciousness seeks **recognition** from another self-consciousness, leading to a **struggle**. The one who fears death becomes the **slave**, the other the **master**. But the master depends on the slave’s work and recognition, while the slave, by **working** on the world, gains independence and self-consciousness: the relation reverses.',
    '**Sartre**: under the **look** of the other I feel myself become an object and feel **shame**; the other judges and fixes me. In the play *No Exit* (*Huis clos*, 1944) a character concludes that "hell is other people". Sartre also held that the other is necessary to know myself: the other is the mediator between me and me.',
  ], 'aph-master-slave', 'For Hegel the other is a rival and a mirror; for Sartre a judge and a necessity.',
  ['In Hegel’s dialectic, the slave gains self-consciousness through:', ['work', 'idleness', 'the master’s love', 'escape'], 'Transforming the world.'],
  [['Recognition', 'Acknowledgement of one self-consciousness by another.'], ['Intersubjectivity', 'The relation between subjects that forms the self.']],
  [
    { q: 'Explain "hell is other people" without reducing it to hatred of others.', steps: ['Others **look at and judge** me; I cannot control their image of me.', 'If I depend entirely on their judgement, I live **trapped** as in hell.', 'So the line warns against **living only through others’ eyes**, not against all relations.'] },
  ]),

  // ---------- 7. Freedom ----------
  L('aph-freedom-1', 'aph-l6-freedom', '7.1', 'Determinisms: is man caused?', 18, ['Man'], [
    '**Determinism** holds that every event, including human action, follows necessarily from prior causes. Kinds:\n- **physical** determinism: Laplace (1814) imagined an intelligence that, knowing all forces and positions, could predict everything\n- **biological**: genes, hormones and the brain shape behaviour\n- **psychological**: unconscious drives (Freud), conditioning\n- **social**: upbringing, class and culture (Durkheim, Marx).',
    '**Fatalism** differs: it holds that what will happen will happen **whatever we do**, often as destiny. Determinism says events follow causes, which can include our decisions.',
    '**Spinoza** (*Ethics*, 1677) argued that people believe themselves free because they are aware of their actions but **ignorant of their causes**. Yet for him **freedom** is real in another sense: understanding the necessity that governs us and acting from that understanding.',
  ], 'aph-freedom', 'Fatalism makes action useless; determinism does not: our choices are among the causes.',
  ['Spinoza said people think themselves free because they are:', ['conscious of their actions but ignorant of their causes', 'truly uncaused', 'commanded by God', 'rich'], 'Ethics, 1677.'],
  [['Determinism', 'The view that every event follows necessarily from causes.'], ['Fatalism', 'The view that events will happen whatever we do.']],
  [
    { q: 'Distinguish fatalism from determinism with an example.', steps: ['Fatalism: **"If I am destined to pass the exam, I will pass whether I study or not."**', 'Determinism: **"My studying is one of the causes that will produce my result."**', 'So determinism **keeps a role for effort**; fatalism removes it.'] },
  ]),
  L('aph-freedom-2', 'aph-l6-freedom', '7.2', 'Existential freedom: Sartre', 18, ['Man'], [
    'In *Existentialism is a Humanism* (lecture 1945, published 1946), **Sartre** argued that for man "**existence precedes essence**": there is no fixed human nature given in advance; man first exists, then **defines himself** by his choices and acts.',
    'So man is "**condemned to be free**": even refusing to choose is a choice. With freedom comes total **responsibility**, which causes **anguish**. To escape it we fall into **bad faith**, pretending we are things determined by nature, character or circumstances ("I had no choice").',
    'Critics reply that Sartre underestimates real constraints (poverty, illness, oppression). Sartre answered that freedom is always **in a situation**: we cannot choose our situation, but we choose what we make of it. A balanced view sees freedom as a **conquest**, enlarged by knowledge and good institutions.',
  ], 'aph-sartre-freedom', 'For Sartre, every excuse is a choice disguised as a fact.',
  ['For Sartre, bad faith is:', ['lying to oneself to escape freedom', 'religious faith', 'honest error', 'a crime'], 'Self-deception.'],
  [['Existence precedes essence', 'Sartre’s claim that man defines himself through choices.'], ['Anguish', 'The feeling of total responsibility for one’s freedom.'], ['Bad faith', 'Self-deception to avoid freedom and responsibility.']],
  [
    { q: 'A pupil says: "I cheat because everyone in my class cheats." Answer as Sartre would.', steps: ['The pupil treats a **situation as a cause**.', 'Others’ behaviour is a fact, but **cheating remains your choice**.', 'This excuse is **bad faith**; you are responsible for what you make of the situation.'] },
  ]),

  // ---------- 8. Language and culture ----------
  L('aph-language-1', 'aph-l6-language', '8.1', 'Language: human, arbitrary and bound to thought', 18, ['Man'], [
    'Animals communicate by **signals**: fixed, tied to situations (bee dances, alarm calls). **Descartes** (*Discourse on Method*, part 5) argued that no animal arranges words to express thoughts in **new** situations, while even the dullest human can: language shows **reason**.',
    'For **Ferdinand de Saussure** (*Course in General Linguistics*, 1916), a linguistic **sign** unites a **signifier** (sound-image) and a **signified** (concept); the link is **arbitrary**, so languages differ. Meaning comes from differences within a system.',
    'Does thought need language? **Hegel** held that we think **in words**; what cannot be said is not yet clearly thought. The **Sapir-Whorf** hypothesis suggests language shapes how we see the world. Against this, Bergson argued that words fix and impoverish the flow of inner experience: language may **betray** thought as well as express it.',
  ], 'aph-sign', 'Language both expresses thought and limits it: use both sides in an essay.',
  ['For Saussure, the link between signifier and signified is:', ['arbitrary', 'natural', 'divine', 'chemical'], 'Course in General Linguistics, 1916.'],
  [['Signifier', 'The sound or written form of a sign.'], ['Signified', 'The concept a sign stands for.'], ['Signal', 'A fixed sign tied to a situation, as in animal communication.']],
  [
    { q: 'Plan the question "Does language betray thought?"', steps: ['I. **Language expresses and even forms thought** (Hegel: we think in words).', 'II. **Language can betray thought**: general words miss the unique, inner experience (Bergson); lies and manipulation.', 'III. **Language is a tool to be refined**: poetry, precise definitions and dialogue bring thought and words closer.'] },
  ]),
  L('aph-language-2', 'aph-l6-language', '8.2', 'Culture and nature', 16, ['Man'], [
    '**Nature** is what is innate and universal (instincts, biological needs); **culture** is what is **acquired** and transmitted: language, techniques, customs, beliefs, institutions and values. Humans satisfy natural needs (eating, sexuality) in cultural ways that vary between societies.',
    '**Claude Lévi-Strauss** (*The Elementary Structures of Kinship*, 1949) argued that the **prohibition of incest**, found in every society, is both natural (universal) and cultural (a rule): it marks the **passage from nature to culture**, forcing exchange and alliance between groups.',
    'Cultures differ, which raises **ethnocentrism** (judging others by one’s own culture) and **relativism** (no culture is superior). Lévi-Strauss warned that "the barbarian is first of all the man who believes in barbarism". A reasoned view respects diversity while defending universal human rights.',
  ], 'aph-culture', 'Humans are natural beings who live their nature through culture.',
  ['For Lévi-Strauss, the incest prohibition marks:', ['the passage from nature to culture', 'a purely biological instinct', 'the birth of science', 'the end of the family'], 'Elementary Structures of Kinship, 1949.'],
  [['Culture', 'What humans acquire and transmit beyond nature.'], ['Ethnocentrism', 'Judging other cultures by the standards of one’s own.'], ['Cultural relativism', 'The view that cultures should be understood on their own terms.']],
  [
    { q: 'Show how eating is both natural and cultural in Cameroon.', steps: ['Natural: **everyone needs food to live**.', 'Cultural: **what, when and how we eat**: ndolé, achu, eru; meals shared by hand or with cutlery; taboos and rituals.', 'So a **natural need takes cultural forms**.'] },
  ]),
];
