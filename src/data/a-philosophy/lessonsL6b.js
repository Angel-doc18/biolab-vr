// A Level Philosophy lessons (0790), Lower Sixth, Terms 2 and 3:
// metaphysics, the philosophy of history, mathematics and logic, the
// experimental sciences, the human sciences, technoscience, the text
// commentary, the year’s review and the promotion drills.

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

export const LESSONS_PHL6B = [
  // ---------- 9. Metaphysics ----------
  L('aph-metaphysics-1', 'aph-l6-metaphysics', '9.1', 'What is metaphysics? Being and the proofs of God', 20, ['Metaphysics'], [
    'The name **metaphysics** comes from the place of Aristotle’s books on "first philosophy", arranged *after the Physics* (*ta meta ta physika*). It studies what lies beyond physical experience: **being as such** (**ontology**), God, the soul, freedom, and the ultimate nature of reality.',
    'Arguments for the existence of **God**:\n- **ontological** (Anselm, *Proslogion*): God is "that than which nothing greater can be conceived"; a being that exists in reality is greater than one only in the mind; so God exists. Descartes gave a version too\n- **cosmological** (Aquinas’ first three ways in the *Summa Theologica*): every effect has a cause; an infinite regress is impossible; so there is a first uncaused cause\n- **teleological** or design (William Paley, *Natural Theology*, 1802): a watch found on a heath implies a watchmaker; the order of nature implies a designer.',
    'Critiques: **Kant** (*Critique of Pure Reason*, 1781) replied that **existence is not a real predicate**, so it cannot be deduced from a concept; **Hume** argued that the analogy between the world and a machine is weak and that order may arise otherwise (later, Darwin’s natural selection).',
  ], 'aph-god-proofs', 'Each proof starts from something different: a concept, the world’s existence, or its order.',
  ['The cosmological argument reasons from:', ['the existence of the world to a first cause', 'the concept of God alone', 'moral duty', 'religious experience'], 'Aquinas.'],
  [['Ontology', 'The study of being as such.'], ['Ontological argument', 'A proof of God from the concept of a perfect being.'], ['Teleological argument', 'A proof of God from order and design in nature.']],
  [
    { q: 'State Kant’s objection to the ontological argument in your own words.', steps: ['The argument treats **existence as a perfection**, a property that makes God greater.', 'But saying a thing exists **adds nothing to its concept**: a hundred real coins and a hundred imagined ones have the same definition.', 'So **existence cannot be proved from a definition alone**.'] },
  ]),
  L('aph-metaphysics-2', 'aph-l6-metaphysics', '9.2', 'The problem of evil and life after death', 18, ['Metaphysics'], [
    'The **problem of evil**, already posed by Epicurus: if God is all-powerful and wholly good, why does evil exist? Either God cannot prevent it (not all-powerful) or will not (not wholly good).',
    'Answers (theodicies): **Leibniz** (*Theodicy*, 1710) held that this is the **best of all possible worlds**, where evils serve a greater good; **Augustine** saw moral evil as the misuse of **free will**; others see suffering as a means of moral growth. Voltaire’s *Candide* (1759) mocked Leibniz after the Lisbon earthquake of 1755.',
    '**Life after death**: Plato’s *Phaedo* argues the soul is simple and akin to the eternal Forms, so it cannot perish; materialists (Epicurus, Lucretius) answer that death is the end of sensation and so "nothing to us". Kant made immortality a **postulate** of practical reason, not a proven truth.',
  ], 'aph-evil-problem', 'The problem of evil is a dilemma: present both horns before the answers.',
  ['Voltaire’s Candide mocked the idea that:', ['this is the best of all possible worlds', 'God does not exist', 'man is free', 'the soul is immortal'], 'Against Leibniz.'],
  [['Theodicy', 'A justification of God’s goodness in the face of evil.'], ['Postulate', 'A claim assumed as necessary for practical reason, not proved.']],
  [
    { q: 'Plan "Does the existence of evil disprove the existence of God?"', steps: ['I. **Evil seems to contradict a good, almighty God** (Epicurus’ dilemma).', 'II. **Theodicies**: free will (Augustine), best possible world (Leibniz), growth through suffering.', 'III. **Evaluation**: theodicies explain moral evil better than natural disasters; the question may exceed reason, as Kant suggested.'] },
  ]),

  // ---------- 10. Philosophy of history ----------
  L('aph-history-1', 'aph-l6-history', '10.1', 'Epistemology: knowledge, belief and truth', 16, ['Knowledge'], [
    '**Epistemology** (from *episteme*, knowledge) studies the nature, sources, limits and justification of knowledge; the **philosophy of science** studies scientific method and its value.',
    'Knowledge differs from **opinion** (*doxa*): in Plato’s *Theaetetus*, knowledge is discussed as **true belief with a justification** (an account, *logos*). A lucky true guess is not knowledge.',
    'Sources: **rationalists** (Descartes, Leibniz) stress reason and innate ideas; **empiricists** (Locke, Hume) stress experience; **Kant** combined them: "thoughts without content are empty, intuitions without concepts are blind". Theories of **truth**: correspondence (agreement with facts), coherence (agreement with a system of beliefs), and pragmatic (what works).',
  ], 'aph-knowledge', 'Knowledge needs truth and good reasons; belief alone is not enough.',
  ['Empiricists hold that knowledge comes mainly from:', ['experience', 'innate ideas', 'revelation', 'authority'], 'Locke, Hume.'],
  [['Epistemology', 'The theory of knowledge.'], ['Rationalism', 'The view that reason is the main source of knowledge.'], ['Empiricism', 'The view that experience is the main source of knowledge.']],
  [
    { q: 'Why is a correct guess on a multiple-choice question not knowledge?', steps: ['The answer is **true** and you **believe** it.', 'But you have **no justification**: it was luck.', '**Knowledge requires a reason that connects belief to truth.**'] },
  ]),
  L('aph-history-2', 'aph-l6-history', '10.2', 'Is history a science?', 18, ['Knowledge'], [
    'History studies the human past through **sources** (documents, monuments, oral traditions). The historian cannot observe or repeat events, so knowledge is **indirect** and depends on **critical method**: external criticism (authenticity) and internal criticism (credibility and meaning).',
    'For: history has a **method**, uses evidence, and aims at objectivity; Leopold von **Ranke** wanted to show the past "as it actually happened". Against: events are **unique** and cannot be tested experimentally; historians **select** and **interpret** facts from a present standpoint. E. H. **Carr** (*What is History?*, 1961) called history "an unending dialogue between the present and the past".',
    '**Philosophies of history** seek its meaning: **Hegel** saw history as the progress of the consciousness of freedom; **Marx** as class struggle driven by changes in production. Critics warn that such grand schemes can justify violence in the name of the "direction of history".',
  ], 'aph-history-objectivity', 'History is a science of a special kind: rigorous in method, interpretive in result.',
  ['External criticism of a source checks:', ['its authenticity: date, author and origin', 'its moral value', 'its beauty', 'its popularity'], 'Then internal criticism.'],
  [['Source', 'A document or trace from the past used as evidence.'], ['Objectivity', 'Knowledge that does not depend on the knower’s preferences.']],
  [
    { q: 'Give one argument that history is objective and one that it is subjective, using Cameroon’s history.', steps: ['Objective: **dates and facts, such as the 1961 plebiscite results, can be checked in many sources**.', 'Subjective: **historians may interpret the reunification differently depending on their region or politics**.', 'Conclusion: **method limits subjectivity without removing interpretation**.'] },
  ]),

  // ---------- 11. Mathematics and logic ----------
  L('aph-logic-1', 'aph-l6-logic', '11.1', 'Mathematical truth: discovered or invented?', 16, ['Knowledge'], [
    'Mathematics seems to give **certain, necessary** truths, known **a priori** by reason, not by experiment. Proofs proceed by **deduction** from **axioms** and definitions (Euclid’s *Elements*).',
    'Are mathematical objects **discovered** or **invented**?\n- **realism** (Plato): numbers and figures exist independently as eternal Forms; we discover them\n- **formalism** (Hilbert): mathematics is a game of symbols played by rules from chosen axioms\n- **intuitionism** (Brouwer): mathematics is a construction of the human mind.',
    'Non-Euclidean geometries (Lobachevsky, Riemann, 19th century), built by changing Euclid’s parallel postulate, showed that axioms can be **chosen**; yet mathematics applies astonishingly well to nature, which favours some realism.',
  ], 'aph-math-views', 'Mathematical certainty is relative to axioms: true within a system.',
  ['For Plato, mathematical objects are:', ['real, eternal Forms that we discover', 'human inventions', 'physical things', 'illusions'], 'Realism.'],
  [['Axiom', 'A starting proposition accepted without proof in a system.'], ['Formalism', 'The view that mathematics is rule-governed symbol manipulation.']],
  [
    { q: 'Use non-Euclidean geometry in an essay on mathematical truth.', steps: ['Euclid’s parallel postulate seemed **self-evident**.', 'Changing it gave **consistent new geometries**, later used in Einstein’s physics.', 'So mathematical truth is **truth relative to axioms**, not absolute self-evidence.'] },
  ]),
  L('aph-logic-2', 'aph-l6-logic', '11.2', 'Deduction, induction, truth tables and fallacies', 20, ['MCQ'], [
    '**Deduction** moves from premises to a conclusion that follows **necessarily**: if the premises are true and the form valid, the conclusion must be true. **Induction** moves from particular cases to a **probable** general conclusion.',
    'A **categorical syllogism** has two premises and a conclusion with three terms (major, minor, middle): "All men are mortal; Socrates is a man; therefore Socrates is mortal." **Validity** concerns form; **soundness** requires valid form and true premises.',
    '**Truth tables**: "p and q" is true only if both are true; "p or q" (inclusive) is false only if both are false; "if p then q" is false only when p is true and q false; "not p" reverses p.',
    'Fallacies: **ad hominem** (attacking the person), **hasty generalisation**, **begging the question** (assuming the conclusion), **appeal to authority** outside expertise, **false dilemma**, **post hoc** (after, therefore because of), **affirming the consequent** (if p then q; q; so p).',
  ], ['logic-truth-table', 'logic-fallacies'], 'Validity is about form: a valid argument can still have a false conclusion if a premise is false.',
  ['"If it rains the road is wet; the road is wet; so it rained" commits:', ['affirming the consequent', 'modus ponens', 'ad hominem', 'a valid deduction'], 'Other causes can wet the road.'],
  [['Validity', 'The property of an argument whose conclusion follows necessarily from its premises.'], ['Soundness', 'A valid argument with true premises.'], ['Fallacy', 'An error of reasoning that can look convincing.']],
  [
    { q: 'Test "If p then q; not q; therefore not p" with a truth table.', steps: ['Rows where "if p then q" and "not q" are both true: only **p false, q false**.', 'In that row, **not p is true**.', 'So the argument is **valid** (modus tollens).'] },
  ]),

  // ---------- 12. Experimental sciences ----------
  L('aph-science-1', 'aph-l6-science', '12.1', 'The experimental method: Bacon and Claude Bernard', 18, ['Knowledge'], [
    '**Francis Bacon**, in the *Novum Organum* (1620), attacked reasoning from authority and proposed systematic **induction** from observations, after clearing the mind of its **idols** (of the tribe, the cave, the marketplace and the theatre).',
    '**Claude Bernard**, in *Introduction to the Study of Experimental Medicine* (1865), described the method in stages: **observation** of a fact, **hypothesis** (an idea to explain it), **experiment** designed to test it, and **verification** or rejection. "The experimental idea" guides observation; facts judge the idea.',
    'The experimental method made modern science powerful: controlled conditions, measurement, repeatability, and laws expressed mathematically (Galileo).',
  ], 'aph-scientific-method', 'Observation suggests, hypothesis proposes, experiment decides.',
  ['Bacon’s Novum Organum was published in:', ['1620', '1865', '1934', '1781'], 'A new instrument for science.'],
  [['Hypothesis', 'A proposed explanation to be tested.'], ['Experiment', 'A provoked observation under controlled conditions.'], ['Idols', 'Bacon’s sources of error in the mind.']],
  [
    { q: 'Apply Bernard’s method: maize plants in one field grow badly.', steps: ['Observation: **poor growth in one field**.', 'Hypothesis: **the soil lacks nitrogen**.', 'Experiment: **add nitrogen fertiliser to some plots, leave others as controls**.', 'Verification: **if only fertilised plots recover, the hypothesis is supported**.'] },
  ]),
  L('aph-science-2', 'aph-l6-science', '12.2', 'Hume’s problem of induction and Popper’s falsification', 20, ['Knowledge'], [
    '**David Hume** (*Treatise*, 1739 to 1740; *Enquiry*, 1748) showed that no number of observed cases **logically** guarantees the next: that the sun has always risen does not prove it will rise tomorrow. Our belief in causal laws rests on **habit** (custom), not on reason.',
    '**Karl Popper** (*Logik der Forschung*, 1934; English *The Logic of Scientific Discovery*, 1959) answered that science does not prove theories by induction. It proposes bold **conjectures** and tries to **refute** them. A theory is scientific if it is **falsifiable**: it forbids some possible observations. One black swan refutes "all swans are white"; a million white swans never prove it.',
    'Thomas **Kuhn** (*The Structure of Scientific Revolutions*, 1962) added that science works within **paradigms** and changes by **revolutions** (Copernicus, Einstein), not by steady accumulation. So scientific knowledge is powerful but **provisional**.',
  ], 'aph-popper', 'Verification can never be complete; refutation can be decisive.',
  ['For Popper, a theory is scientific if it is:', ['falsifiable', 'verified with certainty', 'popular', 'unfalsifiable'], 'It risks refutation.'],
  [['Problem of induction', 'The difficulty of justifying general laws from particular observations.'], ['Falsifiability', 'Being open to refutation by observation.'], ['Paradigm', 'A framework of theory and practice shared by scientists.']],
  [
    { q: 'Is "Everything happens for a reason we cannot know" scientific, by Popper’s test?', steps: ['Ask: **what observation could prove it false?**', 'None: **any event fits it**.', 'So it is **unfalsifiable and not scientific**, though it may be a metaphysical or religious belief.'] },
  ]),

  // ---------- 13. Human sciences ----------
  L('aph-human-sciences-1', 'aph-l6-human-sciences', '13.1', 'Can the human sciences be objective?', 18, ['Knowledge'], [
    'The **human sciences** (psychology, sociology, economics, anthropology, history) study human beings. Their special difficulty: man is **both subject and object** of study. People have intentions and values, are aware of being studied and change their behaviour; experiments on humans are limited by **ethics**.',
    '**Émile Durkheim** (*The Rules of Sociological Method*, 1895) answered: treat **social facts as things**, external to individuals and constraining them, measurable by statistics. His study *Suicide* (1897) showed regular suicide rates linked to social integration.',
    'Psychology moved from introspection to **behaviourism** (observable behaviour only) and to cognitive and clinical approaches; each has strengths and limits.',
  ], 'aph-human-objects', 'The human sciences gain objectivity by method, not by forgetting that their objects are persons.',
  ['Durkheim said social facts should be treated as:', ['things', 'feelings', 'myths', 'miracles'], 'The Rules of Sociological Method, 1895.'],
  [['Social fact', 'A way of acting, external to individuals and constraining them.'], ['Behaviourism', 'Psychology limited to observable behaviour.']],
  [
    { q: 'Why are suicide rates a good example for Durkheim?', steps: ['Suicide seems the **most individual** act.', 'Yet rates are **stable and vary with social integration** (religion, family, crises).', 'So **social causes** can be studied scientifically even in personal acts.'] },
  ]),
  L('aph-human-sciences-2', 'aph-l6-human-sciences', '13.2', 'Explaining and understanding: Erklären and Verstehen', 18, ['Knowledge'], [
    'Wilhelm **Dilthey** (1894) distinguished: "we **explain** nature, but we **understand** the life of the mind". **Explaining** (*Erklären*) seeks causes and laws, as in physics. **Understanding** (*Verstehen*) grasps the **meaning** of human actions, texts and institutions from within, by interpretation (hermeneutics).',
    '**Max Weber** combined both: sociology should **interpretively understand** social action and so **causally explain** its course. For example, his *Protestant Ethic and the Spirit of Capitalism* (1905) linked religious meanings to economic behaviour.',
    'So the human sciences are sciences of a particular kind: they use statistics and causal analysis, but they also need interpretation, and their results are more **probable** and context-bound than those of physics.',
  ], 'aph-explain-understand', 'Explain the cause; understand the meaning: human sciences need both.',
  ['Understanding (Verstehen) means grasping:', ['the meaning of human action from within', 'only physical causes', 'numbers only', 'chemical laws'], 'Interpretation.'],
  [['Erklären', 'Explaining by causes and laws.'], ['Verstehen', 'Understanding meaning by interpretation.'], ['Hermeneutics', 'The art and theory of interpretation.']],
  [
    { q: 'Explain and understand the same fact: many young Cameroonians leave villages for towns.', steps: ['Explain: **causes such as low farm incomes, jobs and schools in towns, measured by surveys**.', 'Understand: **what migration means to them: hope, family duty, prestige, freedom**.', 'Both are needed for a **full account**.'] },
  ]),

  // ---------- 14. Technoscience ----------
  L('aph-technoscience-1', 'aph-l6-technoscience', '14.1', 'From science to technoscience', 16, ['Knowledge'], [
    'Ancient science aimed mainly at **contemplation** (theoria). Modern science, from Bacon ("knowledge is power") and Descartes (who hoped to make us "masters and possessors of nature"), aims also at **action** on nature.',
    'In **technoscience**, science and technology are fused: research is driven by technical projects and funding, and technology produces new knowledge (particle accelerators, genome sequencing, computers). Its power to **transform** nature and human beings is unprecedented.',
    'Benefits: medicine, food, communication, longer lives. Risks: weapons of mass destruction, pollution and climate change, loss of privacy, unequal access, and the temptation to do whatever is technically possible.',
  ], 'aph-technoscience', 'Technoscience changes the question from "what is true?" to "what may we do?"',
  ['Descartes hoped science would make us:', ['masters and possessors of nature', 'slaves of nature', 'contemplatives only', 'ignorant'], 'Discourse on Method, part 6.'],
  [['Technoscience', 'Science and technology fused in transforming the world.'], ['Contemplation', 'Knowledge sought for its own sake.']],
  [
    { q: 'Give one benefit and one danger of mobile phone technology in Cameroon, as an example of technoscience.', steps: ['Benefit: **mobile money and communication reach remote villages**.', 'Danger: **fraud, misinformation and loss of privacy**.', 'So **the same power** serves good and harm, depending on its use and regulation.'] },
  ]),
  L('aph-technoscience-2', 'aph-l6-technoscience', '14.2', 'Bioethics and responsibility: cloning, genetics and AI', 18, ['Knowledge'], [
    '**Dolly the sheep**, born in 1996 at the Roslin Institute in Scotland, was the first mammal cloned from an adult cell. Reproductive cloning of humans raises questions of identity, dignity and safety; therapeutic research raises fewer objections.',
    '**Genetic engineering** can cure diseases but also tempt us towards **eugenics** and permanent changes passed to future generations. **Artificial intelligence** raises questions of responsibility for automated decisions, bias, surveillance and work.',
    'Hans **Jonas** (*The Imperative of Responsibility*, 1979) proposed a new imperative for the technological age: act so that the effects of your action are compatible with the permanence of genuine human life on Earth. The **precautionary principle** follows: serious, irreversible risks call for caution even before full proof. Rabelais had warned that science without conscience is the ruin of the soul.',
  ], 'aph-bioethics-tech', 'Not everything technically possible is morally permitted.',
  ['Hans Jonas’s ethics stresses responsibility towards:', ['future generations and the conditions of human life', 'only the present', 'profit', 'tradition'], 'The Imperative of Responsibility, 1979.'],
  [['Bioethics', 'Ethical reflection on life sciences and medicine.'], ['Precautionary principle', 'Caution in the face of serious possible harm without full proof.'], ['Eugenics', 'Attempts to "improve" the human species by selection.']],
  [
    { q: 'Plan "Should science be free of any limits?"', steps: ['I. **Freedom of research drives progress** (medicine, knowledge).', 'II. **Technoscience has dangerous power**: weapons, eugenics, AI risks (Jonas).', 'III. **Freedom with responsibility**: ethics committees, law and the precautionary principle.'] },
  ]),

  // ---------- 15. Text commentary ----------
  L('aph-commentary-1', 'aph-l6-commentary', '15.1', 'Reading a philosophical text: theme, problem, thesis and structure', 18, ['Method'], [
    'A **text commentary** explains a philosophical text and evaluates it. Read the text several times, noting: the **theme** (what it is about), the **problem** (the question it answers), the **thesis** (the author’s answer, in one sentence), and any opposed thesis it rejects.',
    'Find the **structure**: divide the text into its **moments** (stages of the argument), with line references, using logical connectives (but, therefore, because, however) as signposts.',
    'Introduction of a commentary: situate the author and work briefly, state the theme, the problem, the thesis and the plan (the moments).',
  ], 'aph-commentary', 'Find the thesis in one sentence before writing anything else.',
  ['The author’s thesis is:', ['the main claim the text defends', 'the title', 'an example', 'the question only'], 'One sentence.'],
  [['Moment', 'A stage in the argument of a text.'], ['Connective', 'A linking word showing logical relations.']],
  [
    { q: 'Find the thesis and structure: "Some say man is free because he chooses. But he chooses according to desires he did not choose. Therefore his freedom is only apparent."', steps: ['Theme: **human freedom**. Problem: **is choosing proof of freedom?**', 'Thesis: **human freedom is only apparent**.', 'Moments: **1. the opposed view (choice proves freedom); 2. the objection (desires are not chosen); 3. the conclusion (apparent freedom)**.'] },
  ]),
  L('aph-commentary-2', 'aph-l6-commentary', '15.2', 'Explaining and evaluating a text', 18, ['Method'], [
    '**Explanation** follows the moments: define the key concepts **in the author’s sense**, show how each step leads to the next, and illustrate with examples. Do not **paraphrase** (repeat in other words) and do not drift into a general essay.',
    '**Critical evaluation**: first show the **interest** of the thesis (what it helps us understand), then its **limits** with reasoned objections, possibly drawing on other philosophers and on experience. End with a **personal, justified judgement**.',
    'The conclusion recalls the thesis and the main point of the evaluation, answering the problem of the text.',
  ], 'aph-critique', 'Explain before you judge, and judge with reasons, not feelings.',
  ['Paraphrase in a commentary is:', ['repeating the text in other words without explaining it', 'good analysis', 'the evaluation', 'the thesis'], 'To be avoided.'],
  [['Paraphrase', 'Restating a text without explaining it.'], ['Critical evaluation', 'Weighing the strengths and limits of a thesis.']],
  [
    { q: 'Evaluate the thesis "human freedom is only apparent".', steps: ['Interest: **it reminds us that desires have causes (Spinoza, Freud)**.', 'Limit: **we can reflect on desires and choose which to follow (Sartre); responsibility presupposes this**.', 'Judgement: **freedom is real but limited, and grows with self-knowledge**.'] },
  ]),

  // ---------- 16. Review ----------
  L('aph-review-1', 'aph-l6-review', '16.1', 'Review of philosophical anthropology', 16, ['Method'], [
    'Link the anthropology topics as one inquiry into **what man is**: body and soul (Plato, Descartes, materialists); consciousness and the unconscious (Descartes, Sartre, Freud); the self and others (Aristotle, Hegel, Sartre, ubuntu); freedom (Spinoza, Sartre); language and culture (Descartes, Saussure, Lévi-Strauss).',
    'For each, prepare: the **key problem**, **two opposed positions** with their authors, **one example** from life in Cameroon, and **one possible synthesis**.',
    'Typical questions: Is consciousness the essence of man? Are we masters of ourselves? Is man free? Does society make the individual? Is language what distinguishes man from animals?',
  ], 'aph-l6-map', 'Prepare each topic as a ready-made dialectic: problem, two positions, synthesis.',
  ['Which thinkers would you oppose on whether we are masters of ourselves?', ['Descartes and Freud', 'Hobbes and Locke', 'Kant and Mill', 'Tempels and Kagame'], 'Consciousness versus the unconscious.'],
  [['Synthesis', 'A position that overcomes an opposition.']],
  [
    { q: 'Build a quick dialectic for "Does society make the individual?"', steps: ['Thesis: **yes: language, values and identity come from society (Durkheim, feral children, ubuntu)**.', 'Antithesis: **the individual can resist and criticise society (Socrates, Sartre’s freedom)**.', 'Synthesis: **society forms the individual, who can then transform it**.'] },
  ]),
  L('aph-review-2', 'aph-l6-review', '16.2', 'Review of epistemology', 16, ['Method'], [
    'Link the epistemology topics: what knowledge is; history as a science; mathematics and logic; the experimental method (Bacon, Bernard); induction and falsification (Hume, Popper, Kuhn); the human sciences (Durkheim, Dilthey, Weber); technoscience and its ethics (Jonas).',
    'Key oppositions: **reason and experience**; **verification and falsification**; **explaining and understanding**; **objectivity and interpretation**; **freedom of research and responsibility**.',
    'Typical questions: Is science the only valid knowledge? Can experience prove anything? Can the human sciences be as rigorous as the natural sciences? Should science be limited?',
  ], 'aph-epistemology-map', 'Every epistemology essay asks: what kind of certainty, and from where?',
  ['Popper and Hume are both key authors for questions on:', ['the logic of scientific knowledge', 'the social contract', 'African philosophy', 'aesthetics'], 'Induction and testing.'],
  [['Scientism', 'The view that science is the only valid knowledge.']],
  [
    { q: 'Plan "Is science the only valid knowledge?"', steps: ['I. **Science gives tested, reliable knowledge of nature** (Bernard, Popper).', 'II. **Other knowledge matters**: mathematics (a priori), history (interpretive), ethics and meaning (beyond experiment).', 'III. **Science is a model of rigour, not the only form of knowledge**; scientism forgets its own limits.'] },
  ]),

  // ---------- 17. Promotion ----------
  L('aph-papers-1', 'aph-l6-papers', '17.1', 'Timed dissertations and commentaries', 16, ['Method'], [
    'Time plan for a 3-hour essay paper: about **35 to 40 minutes** to read the subjects, choose, define terms and plan; about **two hours** to write; and **10 to 15 minutes** to check spelling, names, transitions and the conclusion. Adapt the plan to the number of questions in the rubric.',
    'Choose a subject you can **problematise**, not merely one whose authors you know. Write the introduction and conclusion carefully; examiners read them first.',
    'For commentaries, spend more time understanding the text: mark its moments before writing.',
  ], 'aph-promotion-plan', 'A good plan written in 30 minutes saves an hour of confused writing.',
  ['The first step after reading an essay subject is to:', ['define its key terms and find the problem', 'write the conclusion', 'list every author you know', 'copy the subject'], 'Analysis before writing.'],
  [['Rubric', 'The instructions on a paper about choices and time.']],
  [
    { q: 'Analyse the subject "Can we know the truth?" in five minutes.', steps: ['Key terms: **know** (justified true belief), **truth** (agreement with reality).', 'Problem: **we seek truth, yet the senses deceive and science is provisional**.', 'Plan: **I. scepticism; II. certainties of reason and science; III. truth as a goal approached by method**.'] },
  ]),
  L('aph-papers-2', 'aph-l6-papers', '17.2', 'Objective questions: authors, works and concepts', 14, ['MCQ'], [
    'Objective questions test precise knowledge: authors matched to **works** and **dates**, and key **concepts**. Lower Sixth essentials:\n- Plato: *Phaedo*, *Republic* (Forms, the cave)\n- Descartes: *Discourse on Method* (1637), *Meditations* (1641), cogito, dualism\n- Spinoza: *Ethics* (1677)\n- Hume: problem of induction\n- Hegel: *Phenomenology of Spirit* (1807), master and slave\n- Freud: *Interpretation of Dreams* (1899), id, ego, superego\n- Sartre: *Being and Nothingness* (1943), *Existentialism is a Humanism* (1946), bad faith\n- Saussure (1916), Lévi-Strauss (1949), Bacon (1620), Bernard (1865), Popper (1934), Kuhn (1962), Durkheim (1895), Jonas (1979).',
    'Learn them on cards with the author on one side and work, date and key idea on the other; revise by spaced retrieval.',
  ], 'aph-authors-l6', 'An author without a concept is useless in an essay; a concept without its author loses marks in Paper 1.',
  ['"Existence precedes essence" belongs to:', ['Sartre', 'Descartes', 'Plato', 'Hume'], 'Existentialism is a Humanism.'],
  [['Spaced retrieval', 'Revising by recalling from memory at increasing intervals.']],
  [
    { q: 'Match: Interpretation of Dreams; Novum Organum; Phenomenology of Spirit.', steps: ['Interpretation of Dreams: **Freud (1899)**.', 'Novum Organum: **Bacon (1620)**.', 'Phenomenology of Spirit: **Hegel (1807)**.'] },
  ]),
];
