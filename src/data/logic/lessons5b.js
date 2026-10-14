// Logic lessons for Form 5, terms 2 and 3: truth-functional connectives,
// translating into symbols, truth tables, tautology, contradiction and
// contingency, then practice for Papers 1 and 2 and the mock examination.
// Original text written for this app.

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

export const LESSONS_5B = [
  // ---------- Connectives ----------
  L('lo-connectives-5', 'lo-f5-connectives', '9.1', 'Simple statements and the connectives', 15, ['Symbolic logic'], [
    'A **simple** statement contains no other statement: "It is raining." A **compound** statement is built from simple ones with **connectives**: "It is raining and the road is wet." Symbolic logic uses **statement variables** (p, q, r) for simple statements and symbols for the connectives. A connective is **truth-functional**: the truth of the compound depends only on the truth of its parts.',
    'The main connectives:\n- **negation** "not": **~p**. True when p is false, false when p is true\n- **conjunction** "and": **p · q** (also written p ∧ q). True only when **both** are true\n- **disjunction** "or": **p ∨ q**. In logic "or" is **inclusive**: true when **at least one** is true; false only when both are false\n- **material implication** "if... then": **p ⊃ q** (also p → q). False **only** when p is true and q is false; true in every other case.',
    'Why is "if p then q" true when p is false? Think of a promise: "If you score 15 out of 20, I will buy you a bicycle." The promise is broken only if you score 15 and get no bicycle. If you do not score 15, the promise is not broken, whatever happens.\nOne more connective, the **biconditional** "if and only if", p ≡ q, is true when p and q have the same truth value.',
  ], 'logic-connectives', 'p ⊃ q is false only when p is true and q is false.',
  ['p ∨ q is true when:', ['at least one of p, q is true', 'both are false', 'only p is true, never both', 'p is false and q is false'], 'Inclusive disjunction.'],
  [['Compound statement', 'A statement built from simpler statements with connectives.'], ['Truth-functional', 'Having a truth value fixed by the truth values of its parts.'], ['Material implication', 'p ⊃ q: false only when p is true and q false.'], ['Inclusive disjunction', '"Or" meaning at least one, possibly both.']],
  [
    { q: 'Let p = "Douala is a port" (true) and q = "Garoua is on the coast" (false). Find the truth value of p · q, p ∨ q, p ⊃ q and q ⊃ p.', steps: ['**p · q: false (q is false).**', '**p ∨ q: true (p is true).**', '**p ⊃ q: false (true antecedent, false consequent).**', '**q ⊃ p: true (false antecedent).**'] },
  ]),

  L('lo-translate-5', 'lo-f5-connectives', '9.2', 'Translating ordinary language into symbols', 15, ['Symbolic logic'], [
    'Steps:\n- pick a letter for each **simple** statement, written positively ("it rains" = r)\n- find the connective words: not, and, but, or, if... then, only if, unless\n- use **brackets** to show which connective is the main one.',
    'Useful equivalents:\n- "but", "although", "yet" → **·** (and). "It rained but the match went on": r · m\n- "neither p nor q" → **~p · ~q** (or ~(p ∨ q))\n- "not both p and q" → **~(p · q)**\n- "p only if q" → **p ⊃ q**. "You may vote only if you are 20 or above": v ⊃ a\n- "p unless q" → **~q ⊃ p**, or p ∨ q. "I will walk unless it rains": ~r ⊃ w.',
    'Brackets matter: "~(p · q)" (not both) differs from "~p · q" (not p, and q). Read the English carefully: "It is not the case that Ewane and Tabi both came" is ~(e · t).',
  ], 'logic-connectives', 'Choose letters, find connectives, then bracket the main one.',
  ['"Neither Ngum nor Ayuk came" (n = Ngum came, a = Ayuk came) is:', ['~n · ~a', '~(n · a)', 'n ∨ a', '~n ∨ a'], 'Both did not come.'],
  [['Statement variable', 'A letter standing for a simple statement.'], ['Main connective', 'The connective that governs the whole compound statement.']],
  [
    { q: 'Translate: "If the generator works and there is fuel, the lights will be on." (g, f, l)', steps: ['The main connective is **if... then**.', 'The antecedent is a conjunction: **g · f**.', '**(g · f) ⊃ l**'] },
  ]),

  // ---------- Truth tables ----------
  L('lo-truthtables-5', 'lo-f5-truthtables', '10.1', 'Constructing truth tables', 16, ['Symbolic logic'], [
    'A **truth table** shows the truth value of a compound statement for **every** combination of truth values of its parts. With n variables there are **2ⁿ rows**: 2 for one variable, **4 for two**, 8 for three.\nFor two variables, list the rows in the standard order:\n- p: T, T, F, F\n- q: T, F, T, F.',
    'Method:\n- write the variables, then each **part** of the compound in order of building, ending with the main connective\n- fill each column using the rules of the connectives\n- the **last column** gives the truth value of the whole statement.\nExample: ~p ∨ q. Column ~p: F, F, T, T. Then ~p ∨ q: T, F, T, T. This is the same as the column of p ⊃ q: the two statements are **logically equivalent**.',
    'Show every column in the examination. Method marks are given for the intermediate columns, even if a slip spoils the final one.',
  ], 'logic-truth-table', 'Four rows: TT, TF, FT, FF; build column by column.',
  ['With three variables, a truth table needs:', ['8 rows', '6 rows', '4 rows', '3 rows'], '2 × 2 × 2.'],
  [['Truth table', 'A table giving a statement’s truth value for every combination of its parts.'], ['Logically equivalent', 'Having the same truth value in every row.']],
  [
    { q: 'Construct the truth table for ~(p · q).', steps: ['Rows (p, q): **TT, TF, FT, FF.**', 'p · q: **T, F, F, F.**', '~(p · q): **F, T, T, T.**'] },
  ]),

  L('lo-tautology-5', 'lo-f5-truthtables', '10.2', 'Tautology, contradiction, contingency and testing arguments', 16, ['Symbolic logic'], [
    'The final column of a truth table classifies a statement:\n- **tautology**: true in **every** row. p ∨ ~p (the law of excluded middle); (p · q) ⊃ p\n- **contradiction**: false in **every** row. p · ~p (it breaks the law of non-contradiction)\n- **contingency**: true in some rows and false in others. p ⊃ q, p · q.\nTautologies are true by their form alone; contingent statements depend on the facts.',
    'A truth table can **test an argument**. An argument is **valid** if there is **no row** in which all the premises are true and the conclusion false.\n- modus ponens (p ⊃ q; p; so q): the only row with both premises true is p = T, q = T, where q is true. **Valid**\n- affirming the consequent (p ⊃ q; q; so p): in the row p = F, q = T both premises are true but the conclusion p is false. **Invalid**.',
    'Shortcut for checking: look only at the rows where **every premise is true**, and see whether the conclusion is true in all of them.',
  ], 'logic-truth-table', 'Tautology: all T. Contradiction: all F. Contingency: mixed.',
  ['(p · q) ⊃ p is a:', ['tautology', 'contradiction', 'contingency', 'fallacy'], 'Whenever p · q is true, p is true.'],
  [['Tautology', 'A statement true in every row of its truth table.'], ['Contradiction', 'A statement false in every row.'], ['Contingency', 'A statement true in some rows and false in others.'], ['Counter-example row', 'A row with true premises and a false conclusion.']],
  [
    { q: 'Use a truth table to test: "If p then q. Not p. So not q."', steps: ['Premises: p ⊃ q and ~p. Conclusion: ~q.', 'Rows where both premises are true: **p = F, q = T** and **p = F, q = F**.', 'In the row p = F, q = T, the conclusion ~q is **false**.', '**Invalid: the fallacy of denying the antecedent.**'] },
  ]),

  // ---------- Paper 1 ----------
  L('lo-mcq-5', 'lo-f5-paper1', '11.1', 'Multiple-choice technique', 12, ['Examination'], [
    'Paper 1 has **50 items in 1½ hours**: about **1¾ minutes** per item.\n- read the **stem** carefully; watch for NOT, EXCEPT, INVALID, FALSE\n- work out the answer **before** reading the options\n- **eliminate** options that break a known rule (a conversion of O, a conclusion from two negatives)\n- do not stay more than about 3 minutes on one item; mark it and come back\n- answer **every** item: there is no penalty for a wrong answer.',
    'Logic items often need a quick sketch: draw the square in the margin, mark distribution with small ticks, or write the four rows of a truth table. A few seconds of working prevents careless errors.',
    'Shade the answer sheet neatly with a soft pencil, one answer per item, and erase changes completely.',
  ], 'logic-paper1-plan', 'Sketch, eliminate, answer every item.',
  ['An option offering "Some P are not S" as the converse of "Some S are not P" should be:', ['eliminated: O has no valid converse', 'chosen', 'shaded twice', 'left blank'], 'A known rule.'],
  [['Stem', 'The question part of a multiple-choice item.'], ['Distractor', 'A wrong option designed to attract careless answers.']],
  [
    { q: 'You are at item 35 after 70 minutes. Are you on time?', steps: ['Target: 35 × 1.8 = **63 minutes.**', '**You are about 7 minutes behind; move faster on easy items and leave the hardest for the end.**'] },
  ]),

  L('lo-quickfacts-5', 'lo-f5-paper1', '11.2', 'Quick facts for Paper 1', 15, ['Examination'], [
    'Terms and propositions:\n- comprehension and extension vary inversely\n- definition: genus + differentia; not too wide, too narrow, circular, negative or obscure\n- distribution: A subject; E both; I neither; O predicate\n- square: contradictories A–O, E–I; contraries A–E (not both true); subcontraries I–O (not both false); subalterns: truth down, falsity up\n- conversion: E, I simply; A by limitation; O never. Obversion: all. Contraposition: A, O; E by limitation; I never.',
    'Syllogisms:\n- major term = predicate of the conclusion; minor = subject; middle in both premises only\n- rules: three terms; middle distributed once; no illicit major or minor; not two negatives; negative premise → negative conclusion; not two particulars; particular premise → particular conclusion\n- figures: 1 M-P/S-M; 2 P-M/S-M; 3 M-P/M-S; 4 P-M/M-S\n- modus ponens and modus tollens are valid; affirming the consequent and denying the antecedent are fallacies.',
    'Fallacies and symbols:\n- relevance: ad hominem, ad populum, ad misericordiam, ad baculum, ad ignorantiam, ad verecundiam\n- presumption: complex question, begging the question; ambiguity: equivocation, amphiboly\n- ~p true when p false; p · q true only if both true; p ∨ q false only if both false; p ⊃ q false only if p true and q false\n- tautology all T; contradiction all F; contingency mixed.',
  ], 'logic-paper1-plan', 'Learn the tables until you can write them from memory.',
  ['Which immediate inference is valid for every form?', ['obversion', 'conversion', 'contraposition', 'none'], 'Two negatives cancel.'],
  [['Quick fact', 'A short, exact piece of knowledge often tested in multiple choice.']],
  [
    { q: 'Write a memory line for the distribution table.', steps: ['**"Unprepared Students Never Pass": Universals distribute Subjects; Negatives distribute Predicates.**', '**So A: S; E: S and P; I: none; O: P.**'] },
  ]),

  // ---------- Paper 2 ----------
  L('lo-p2syllogism-5', 'lo-f5-paper2', '12.1', 'Paper 2: testing an argument in full', 16, ['Examination'], [
    'A model answer to "Put the argument into standard form and test its validity":\n- **conclusion**: identify it and write it in standard form\n- **terms**: name the major (P), minor (S) and middle (M) terms\n- **standard order**: major premise, minor premise, conclusion, each with its letter\n- **mood and figure**\n- **distribution**: mark the distributed terms in each proposition\n- **rules**: check each rule and state the result; if one is broken, **name the fallacy and explain it**.',
    'Example: "Some politicians are honest, since all honest people keep their promises and some politicians keep their promises."\n- Conclusion: Some politicians are honest (I). P = honest people, S = politicians, M = people who keep their promises\n- Major premise: All honest people are promise-keepers (A, P–M); minor premise: Some politicians are promise-keepers (I, S–M); conclusion I. Mood AII, figure 2\n- "Promise-keepers" is the predicate of two affirmatives: never distributed.\n- **Invalid: undistributed middle.**',
    'Give each step a heading or a line of its own. Examiners reward the **method** as well as the verdict.',
  ], 'logic-syllogism-test', 'Conclusion, terms, order, mood and figure, distribution, rules, verdict.',
  ['In a full test, after naming the terms you should next:', ['write the syllogism in standard order', 'give the verdict', 'draw a truth table', 'name a fallacy of relevance'], 'Major premise first.'],
  [['Model answer', 'An answer showing every step the examiner expects.'], ['Verdict', 'The final decision: valid or invalid, with the reason.']],
  [
    { q: 'Test: "No lazy students pass; some Form 5 students are lazy; so some Form 5 students do not pass."', steps: ['Conclusion O: Some Form 5 students are not passers. **P = passers, S = Form 5 students, M = lazy students.**', 'Major premise E (M–P), minor premise I (S–M): **EIO-1.**', 'M distributed in the E premise; P distributed in the conclusion and in the E premise; one negative premise and a negative conclusion; one particular premise and a particular conclusion.', '**Valid: Ferio.**'] },
  ]),

  L('lo-p2mixed-5', 'lo-f5-paper2', '12.2', 'Paper 2: inferences, fallacies and truth tables', 15, ['Examination'], [
    'Other common Paper 2 tasks:\n- **square of opposition**: "Given that I is false, state the truth values of A, E and O, giving the relation each time"\n- **eduction**: "Give the converse, obverse and contrapositive of...", writing standard form and the letter at each step\n- **fallacies**: "Identify and explain the fallacy in this passage": quote the words, name the fallacy (in English and Latin if you can), explain why the reason is irrelevant, ambiguous or assumes the conclusion\n- **truth tables**: "Construct a truth table and say whether the statement is a tautology, a contradiction or a contingency."',
    'Presentation: rule a neat table with a heading for every column; write T and F clearly; state the classification in a sentence below the table.',
    'Read the command words: **state** (short answer), **explain** (give reasons), **construct** (draw it fully), **test** (apply the rules and give a verdict).',
  ], 'logic-truth-table', 'Name the relation, rule or fallacy at every step.',
  ['A fallacy question asks you to "explain". You should:', ['name the fallacy and say why the reasoning fails', 'only write its Latin name', 'copy the passage', 'say whether you agree'], 'Explain means give reasons.'],
  [['Command word', 'The word telling you what kind of answer is needed.'], ['Classification', 'Saying whether a statement is a tautology, a contradiction or a contingency.']],
  [
    { q: 'Construct the truth table for p ⊃ (q ⊃ p) and classify it.', steps: ['Rows (p, q): TT, TF, FT, FF.', 'q ⊃ p: **T, T, F, T.**', 'p ⊃ (q ⊃ p): **T, T, T, T.**', '**True in every row: a tautology.**'] },
  ]),

  // ---------- Mock and remediation ----------
  L('lo-mock-5', 'lo-f5-mock', '13.1', 'Sitting the mock examination', 12, ['Examination'], [
    'The mock reproduces the GCE: **Paper 1** (50 multiple-choice items, 1½ hours) and **Paper 2** (structured questions, 2½ hours) under timed, silent conditions.',
    'Before: revise from your topic list and quick-fact sheets; prepare pens, pencils, eraser and ruler. During: plan your time, show your working in Paper 2, and answer every item in Paper 1. After: mark the scripts with the scheme and record your marks by topic: syllogisms, immediate inference, fallacies, symbolic logic.',
    'A weak result in one area is information, not failure: it tells you what to work on in the weeks that remain.',
  ], 'logic-final-term', 'Treat the mock as the real examination.',
  ['The most useful thing to record after the mock is:', ['your marks for each topic', 'only your total', 'your friends’ marks', 'nothing'], 'It shows where to revise.'],
  [['Mock examination', 'A practice examination under real conditions.'], ['Marking scheme', 'The official list of answers and marks.']],
  [
    { q: 'You scored well on fallacies but lost most Paper 2 marks on syllogisms. Plan the next week.', steps: ['**Days 1 to 3: the syllogism rules, figures and moods; test ten arguments in full, model-answer style.**', '**Days 4 and 5: mixed Paper 2 practice under time.**', '**Day 6: quick review of fallacies and truth tables to keep them fresh.**'] },
  ]),

  L('lo-remediation-5', 'lo-f5-mock', '13.2', 'Common mistakes and final revision', 14, ['Examination'], [
    'Mistakes examiners see most often:\n- **undistributed middle** not noticed: always check the middle term’s distribution first\n- **figures 2 and 3 confused**: in figure 2 the middle term is the predicate of both premises; in figure 3 it is the subject of both\n- **contraposition confused with conversion**: "All S are P" converts only to "Some P are S", but contraposes to "All non-P are non-S"\n- affirming the consequent taken as valid\n- treating "or" as exclusive in truth tables.',
    'Final revision plan:\n- write the key tables from memory: distribution, the square, eduction, the syllogism rules, the four figures, the connectives\n- test at least five syllogisms a day in full\n- practise past papers under time and mark them.',
    'On the day: sleep well, arrive early with your equipment and candidate number, read every instruction, and use spare time to check your working and your shading.',
  ], 'logic-final-term', 'Check the middle term first, every time.',
  ['To avoid confusing figures 2 and 3, remember that in figure 2 the middle term is:', ['the predicate of both premises', 'the subject of both premises', 'in the conclusion', 'the major term'], 'Figure 3: subject of both.'],
  [['Remediation', 'Targeted revision of weak areas.'], ['Past paper', 'A previous examination used for practice.']],
  [
    { q: 'Correct the error: "All S are P, therefore all P are S, by contraposition."', steps: ['**Swapping S and P is conversion, not contraposition, and A converts only by limitation: Some P are S.**', '**The contrapositive of All S are P is All non-P are non-S.**'] },
  ]),
];
