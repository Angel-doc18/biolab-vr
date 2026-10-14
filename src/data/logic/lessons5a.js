// Logic lessons for Form 5, term 1: the GCE papers, the categorical
// syllogism, its rules, figures and moods, hypothetical and disjunctive
// syllogisms and the dilemma, and the fallacies of relevance, presumption
// and ambiguity. Original text written for this app.

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

export const LESSONS_5A = [
  // ---------- The GCE papers ----------
  L('lo-gceformat-5', 'lo-f5-blueprint', '1.1', 'The GCE O Level Logic examination', 12, ['Examination'], [
    'GCE O Level **Logic (0590)** is written in two papers:\n- **Paper 1**: **50 multiple-choice** items with four options each, in **1½ hours**; one mark each, no penalty for a wrong answer\n- **Paper 2**: **structured questions** in **2½ hours**: putting arguments into standard form, testing syllogisms, immediate inferences, naming and explaining fallacies, and truth tables.',
    'The examination covers the whole course of Forms 3 to 5: terms and their kinds, definition and division, propositions and distribution, the square of opposition, conversion, obversion and contraposition, categorical, hypothetical and disjunctive syllogisms, fallacies, and basic symbolic logic.',
    'The Form 5 scheme finishes all the theory by about week 13 and keeps term 3 for timed practice and the mock. Check the official GCE Board timetable for the date of each paper.',
  ], 'logic-gce-0590', 'Paper 1: 50 MCQ in 1½ h. Paper 2: structured, 2½ h.',
  ['Which skill is tested in Paper 2 but hardly in Paper 1?', ['writing a full test of a syllogism with reasons', 'recognising a definition', 'choosing one letter', 'reading a timetable'], 'Structured answers show the working.'],
  [['Multiple choice', 'A question answered by choosing one of several options.'], ['Structured question', 'A question divided into parts that build on each other.']],
  [
    { q: 'You have 2½ hours for Paper 2 with five questions of equal value. Plan your time.', steps: ['2½ hours = **150 minutes.**', 'Keep about 10 minutes to read and 10 to check: **130 minutes** left.', '130 ÷ 5 = **26 minutes per question.**'] },
  ]),

  L('lo-baseline-5', 'lo-f5-blueprint', '1.2', 'Baseline review: what Form 5 builds on', 14, ['Propositions'], [
    'Before the syllogism, make sure of these Form 4 essentials:\n- **standard form**: quantifier, subject, copula, predicate\n- **A E I O** and the **distribution table**: A distributes S; E both; I neither; O distributes P\n- the **square**: contradictories always decided; truth flows down, falsity flows up\n- **eduction**: E and I convert simply, A by limitation, O never; obversion always valid; contraposition for A and O.',
    'Quick self-test: for each of "All voters are adults", "No minors are voters", "Some adults are voters" and "Some adults are not voters", say the letter, the distributed terms and the contradictory.',
    'In Form 5, distribution is used to test every categorical syllogism, so this review is the foundation for the whole year.',
  ], 'logic-distribution', 'Know the distribution table without thinking.',
  ['"No minors are voters" distributes:', ['both terms', 'only "minors"', 'only "voters"', 'neither'], 'An E proposition.'],
  [['Distribution', 'Whether a proposition refers to every member of a term’s class.'], ['Eduction', 'Conversion, obversion and contraposition.']],
  [
    { q: 'Answer the self-test for "Some adults are not voters".', steps: ['Letter: **O.**', 'Distributed: **"voters" only.**', 'Contradictory: **All adults are voters (A).**'] },
  ]),

  // ---------- The syllogism ----------
  L('lo-syllogism-5', 'lo-f5-syllogism', '2.1', 'The categorical syllogism and its terms', 15, ['Syllogism'], [
    'A **categorical syllogism** is a **mediate** inference: a conclusion is drawn from **two** categorical premises that share a **middle term**. It has exactly three propositions and three terms, each used twice.\n- **major term (P)**: the **predicate of the conclusion**\n- **minor term (S)**: the **subject of the conclusion**\n- **middle term (M)**: found in **both premises** but **not** in the conclusion.',
    'The **major premise** contains the major term; the **minor premise** contains the minor term.\nExample:\n- major premise: All Cameroonians are Africans (M = Cameroonians, P = Africans)\n- minor premise: All Bamenda people are Cameroonians (S = Bamenda people)\n- conclusion: All Bamenda people are Africans.',
    'Always **start from the conclusion**: its predicate is the major term and its subject the minor term. The term left over in the premises is the middle term.',
  ], 'logic-syllogism-parts', 'Start from the conclusion: predicate = major, subject = minor.',
  ['In "No reptiles are mammals; all snakes are reptiles; so no snakes are mammals", the minor term is:', ['snakes', 'mammals', 'reptiles', 'no'], 'The subject of the conclusion.'],
  [['Syllogism', 'A mediate inference from two premises sharing a middle term.'], ['Major term', 'The predicate of the conclusion.'], ['Minor term', 'The subject of the conclusion.'], ['Middle term', 'The term in both premises but not in the conclusion.']],
  [
    { q: 'Name the terms and premises: "Some traders are wealthy; all traders are taxpayers; so some taxpayers are wealthy."', steps: ['Conclusion: some taxpayers are wealthy. **Major term: wealthy (people); minor term: taxpayers.**', '**Middle term: traders.**', '**Major premise: "Some traders are wealthy"; minor premise: "All traders are taxpayers".**'] },
  ]),

  L('lo-standardsyll-5', 'lo-f5-syllogism', '2.2', 'Putting arguments into standard syllogistic form', 15, ['Syllogism'], [
    'Everyday arguments are rarely tidy. To test one:\n- find the **conclusion** (look for "so", "therefore", "hence")\n- rewrite all three statements in **standard form**\n- identify the major, minor and middle terms\n- write the syllogism in **standard order**: major premise, minor premise, conclusion\n- make sure there are exactly **three terms**, using the same words for the same term each time.',
    'Example: "Ngum must be a good cook, since all the women in her family cook well and she belongs to that family."\n- Conclusion: Ngum is a good cook (singular, treated as A)\n- Major premise: All women of her family are good cooks\n- Minor premise: Ngum is a woman of her family\n- Standard form: All M are P; S is M; so S is P (Barbara).',
    'Watch for **synonyms** ("pupils" and "students") that must be made identical, and for **hidden premises** that the speaker takes for granted. An argument with a premise left unstated is called an **enthymeme**.',
  ], 'logic-syllogism-parts', 'Conclusion first, then standard form, then standard order.',
  ['An argument with one premise left unstated is called:', ['an enthymeme', 'a dilemma', 'a contradiction', 'a fallacy of four terms'], 'Supply the missing premise to test it.'],
  [['Standard order', 'Major premise, minor premise, conclusion.'], ['Enthymeme', 'An argument with an unstated premise.']],
  [
    { q: 'Supply the missing premise: "Tabi is a citizen, so he can vote."', steps: ['Conclusion: Tabi can vote (S = Tabi, P = voters).', 'Stated premise: Tabi is a citizen (M = citizens).', '**Missing major premise: "All citizens are voters." It is false (minors are citizens but cannot vote), so the argument is unsound.**'] },
  ]),

  // ---------- Rules of terms ----------
  L('lo-threeterms-5', 'lo-f5-termrules', '3.1', 'Rule 1: exactly three terms', 13, ['Syllogism'], [
    'A valid syllogism must contain **exactly three terms**, each used in the **same sense** throughout. If there are four, the two premises do not share a link and nothing follows. This is the **fallacy of four terms** (quaternio terminorum).',
    'A fourth term often hides in a word used in **two senses** (equivocation):\n- "All banks are by rivers; Afriland is a bank; so Afriland is by a river." "Bank" means a riverside in the first premise and a financial institution in the second.\n- "Nothing is better than good health; a plate of rice is better than nothing; so a plate of rice is better than good health." "Nothing" shifts meaning.',
    'Test: underline the middle term in each premise and ask whether it means **exactly** the same thing in both.',
  ], 'logic-syllogism-rules', 'Same word, same meaning, or there are four terms.',
  ['"All stars shine in the sky; that singer is a star; so that singer shines in the sky" commits:', ['the fallacy of four terms', 'illicit minor', 'two negatives', 'a valid mood'], '"Star" has two meanings.'],
  [['Fallacy of four terms', 'A syllogism with four terms, often from a word used in two senses.'], ['Equivocation', 'Using a word in two different senses in one argument.']],
  [
    { q: 'Explain the error: "Light things are easy to carry; a bright colour is light; so a bright colour is easy to carry."', steps: ['**"Light" means "not heavy" in the first premise and "pale or bright" in the second.**', '**So there are four terms: light (weight), light (colour), easy to carry, bright colour.**', '**The fallacy of four terms (by equivocation): nothing follows.**'] },
  ]),

  L('lo-middle-5', 'lo-f5-termrules', '3.2', 'Rule 2: the middle term distributed at least once', 14, ['Syllogism'], [
    'The middle term links the major and minor terms. To do so, it must be **distributed in at least one premise**: at least once, the premises must speak of **all** of the middle term’s class. Otherwise the major and minor terms may be related to **different parts** of it.',
    'Example of the fallacy of **undistributed middle**:\n- All dogs are animals (A: "animals", the predicate, is undistributed)\n- All cats are animals (A: "animals" undistributed again)\n- So all dogs are cats.\nDogs and cats are in different parts of the animal class: the middle term never covers the whole class, so it links nothing.',
    'Check: write each premise’s letter, mark the distributed terms, and see whether the middle term is distributed **anywhere**. Remember: the predicate of an affirmative proposition is never distributed.',
  ], 'logic-syllogism-rules', 'The middle term must cover its whole class at least once.',
  ['"All thieves are liars; some politicians are liars; so some politicians are thieves" commits:', ['undistributed middle', 'illicit major', 'four terms', 'two negatives'], '"Liars" is the predicate of two affirmatives.'],
  [['Undistributed middle', 'The fallacy of a middle term not distributed in either premise.']],
  [
    { q: 'Test: "All Cameroonians love football; all Brazilians love football; so all Brazilians are Cameroonians."', steps: ['Middle term: **lovers of football**.', 'It is the predicate of two A propositions, so **undistributed in both premises**.', '**Fallacy of undistributed middle: invalid.**'] },
  ]),

  L('lo-illicit-5', 'lo-f5-termrules', '3.3', 'Rule 3: illicit major and illicit minor', 15, ['Syllogism'], [
    '**Rule 3**: no term may be distributed in the conclusion unless it was distributed in its premise. A conclusion cannot say more than the premises allow.\n- **Illicit major**: the major term is distributed in the conclusion but not in the major premise\n- **Illicit minor**: the minor term is distributed in the conclusion but not in the minor premise.',
    'Illicit major:\n- All teachers are graduates (A: "graduates" undistributed)\n- No farmers are teachers (E)\n- So no farmers are graduates (E: "graduates" distributed).\nThe premise spoke of only some graduates; the conclusion speaks of all of them.',
    'Illicit minor:\n- All cocoa farmers are hard workers (A)\n- All cocoa farmers are Cameroonians (A: "Cameroonians" undistributed)\n- So all Cameroonians are hard workers (A: "Cameroonians" distributed).\nOnly "Some Cameroonians are hard workers" would follow.',
  ], 'logic-syllogism-rules', 'Nothing distributed in the conclusion unless distributed in the premise.',
  ['A syllogism with an E conclusion whose major premise is an A with the major term as predicate commits:', ['illicit major', 'illicit minor', 'undistributed middle', 'four terms'], 'The major term becomes distributed.'],
  [['Illicit major', 'The major term distributed in the conclusion but not in its premise.'], ['Illicit minor', 'The minor term distributed in the conclusion but not in its premise.']],
  [
    { q: 'Test: "All Lions players are athletes; no referees are Lions players; so no referees are athletes."', steps: ['Conclusion E distributes "athletes" (major term).', 'Major premise "All Lions players are athletes" (A) leaves "athletes" **undistributed**.', '**Illicit major: invalid.**'] },
  ]),

  // ---------- Rules of quality and quantity ----------
  L('lo-negative-5', 'lo-f5-premiserules', '4.1', 'Rules of quality: negative premises', 14, ['Syllogism'], [
    'Rules of **quality**:\n- **from two negative premises, nothing follows** (the fallacy of exclusive premises). If both premises exclude, the middle term is cut off from both other terms and links nothing\n- **if one premise is negative, the conclusion must be negative**\n- **a negative conclusion requires a negative premise**: two affirmative premises give only an affirmative conclusion.',
    'Exclusive premises: "No fish are birds; no birds are reptiles; so no fish are reptiles." The conclusion happens to be true, but it does not **follow**: replace reptiles by "salmon" and the same form gives a false conclusion.',
    'Drawing an affirmative conclusion from a negative premise: "No students are teachers; all prefects are students; so all prefects are teachers" is plainly invalid. The correct conclusion is "No prefects are teachers" (Celarent).',
  ], 'logic-syllogism-rules', 'Two negatives: nothing. One negative: negative conclusion.',
  ['"No A are B; no B are C; so no A are C" breaks the rule that:', ['two negative premises yield no conclusion', 'two particulars yield nothing', 'the middle must be distributed', 'there must be three terms'], 'Exclusive premises.'],
  [['Exclusive premises', 'The fallacy of drawing a conclusion from two negative premises.'], ['Quality', 'Whether a proposition is affirmative or negative.']],
  [
    { q: 'What may be concluded from "No smokers are athletes" and "All Lions players are athletes"?', steps: ['Middle term: **athletes**; it is distributed in the E premise.', 'One premise is negative, so the conclusion must be **negative**.', '**No Lions players are smokers** (Cesare, EAE-2).'] },
  ]),

  L('lo-particular-5', 'lo-f5-premiserules', '4.2', 'Rules of quantity: particular premises', 13, ['Syllogism'], [
    'Rules of **quantity**:\n- **from two particular premises, nothing follows**. "Some students are athletes; some athletes are tall; so some students are tall": the "some" athletes need not be the same ones\n- **if one premise is particular, the conclusion must be particular**. The conclusion cannot be stronger than its weaker premise.',
    'These rules follow from the rules of distribution: two particulars cannot distribute enough terms (I distributes none, O only one) to satisfy both the middle-term rule and rule 3.',
    'A summary saying: **the conclusion follows the weaker part**: if a premise is negative, so is the conclusion; if a premise is particular, so is the conclusion.',
  ], 'logic-syllogism-rules', 'Two particulars: nothing. One particular: particular conclusion.',
  ['"All M are P; some S are M; so all S are P" is invalid because:', ['a particular premise needs a particular conclusion', 'there are two negatives', 'there are four terms', 'the middle is undistributed'], 'Only "Some S are P" follows (Darii).'],
  [['Weaker premise', 'A premise that is negative or particular.'], ['Particular', 'Referring to some of the subject.']],
  [
    { q: 'What follows from "All farmers work hard" and "Some Cameroonians are farmers"?', steps: ['Middle term: **farmers**, distributed in the A premise.', 'One premise is particular, so the conclusion must be **particular**.', '**Some Cameroonians work hard** (Darii, figure 1).'] },
  ]),

  // ---------- Figures and moods ----------
  L('lo-figures-5', 'lo-f5-figures', '5.1', 'The four figures', 14, ['Syllogism'], [
    'The **figure** of a syllogism depends on the **position of the middle term** in the two premises (major premise written first):\n- **Figure 1**: M–P, S–M (subject of the major, predicate of the minor)\n- **Figure 2**: P–M, S–M (predicate of both)\n- **Figure 3**: M–P, M–S (subject of both)\n- **Figure 4**: P–M, M–S (predicate of the major, subject of the minor).',
    'A memory picture: write the premises one above the other and join the two Ms. In figure 1 the line runs from top left to bottom right; figure 2 has both Ms on the right; figure 3 both on the left; figure 4 runs from top right to bottom left.',
    'Common errors: confusing figures 2 and 3. In figure 2 the middle term is a **predicate** twice; in figure 3 it is a **subject** twice.',
  ], 'logic-figures', 'Fig 1 M-P/S-M; Fig 2 P-M/S-M; Fig 3 M-P/M-S; Fig 4 P-M/M-S.',
  ['"No fish are mammals; all whales are mammals; so no whales are fish" is in figure:', ['2', '1', '3', '4'], 'The middle term "mammals" is a predicate twice.'],
  [['Figure', 'The arrangement of a syllogism by the position of the middle term.'], ['Middle term', 'The term common to both premises.']],
  [
    { q: 'State the figure: "All voters are adults; all voters are citizens; so some citizens are adults."', steps: ['Middle term: **voters**.', 'It is the **subject of both premises** (M–P, M–S).', '**Figure 3** (the mood AAI-3, Darapti).'] },
  ]),

  L('lo-moods-5', 'lo-f5-figures', '5.2', 'Moods and testing a syllogism', 16, ['Syllogism'], [
    'The **mood** is the three letters of the major premise, minor premise and conclusion in order, such as **AAA**. Together, mood and figure name a form: AAA-1, EAE-2. Of the 256 possible forms, only a few are valid. The traditional valid moods have Latin memory names whose vowels give the mood:\n- **Figure 1**: **Barbara** (AAA), **Celarent** (EAE), **Darii** (AII), **Ferio** (EIO)\n- **Figure 2**: Cesare (EAE), Camestres (AEE), Festino (EIO), Baroco (AOO)\n- **Figure 3**: Darapti (AAI), Disamis (IAI), Datisi (AII), Felapton (EAO), Bocardo (OAO), Ferison (EIO)\n- **Figure 4**: Bramantip (AAI), Camenes (AEE), Dimaris (IAI), Fesapo (EAO), Fresison (EIO).',
    'Steps to test any syllogism:\n- put it in standard form and standard order\n- name the mood and figure\n- mark the distributed terms\n- check the rules in turn: three terms; middle distributed; no illicit major or minor; not two negatives; negative premise gives negative conclusion; not two particulars; particular premise gives particular conclusion\n- if every rule is kept, it is valid; if one is broken, name the fallacy.',
    'Some moods (Darapti, Felapton, Bramantip, Fesapo) draw a particular conclusion from universal premises; they assume that the subject class has members, as the traditional square does.',
  ], 'logic-moods', 'Name the mood and figure; then check every rule.',
  ['The vowels of "Celarent" give the mood:', ['EAE', 'AAA', 'EIO', 'AII'], 'cElArEnt.'],
  [['Mood', 'The letters of the three propositions of a syllogism in order.'], ['Barbara', 'The valid mood AAA in the first figure.'], ['Valid form', 'A mood and figure that obey every rule.']],
  [
    { q: 'Test: "No liars are trustworthy; some politicians are liars; so some politicians are not trustworthy."', steps: ['Mood **EIO**; middle term "liars" is subject of the major and predicate of the minor: **figure 1**.', 'Middle term distributed in the E premise; "trustworthy" distributed in the O conclusion and in the E premise; "politicians" undistributed in the conclusion.', 'One negative premise, negative conclusion; one particular premise, particular conclusion.', '**Valid: Ferio (EIO-1).**'] },
  ]),

  // ---------- Hypothetical and disjunctive ----------
  L('lo-ponens-5', 'lo-f5-hypothetical', '6.1', 'Hypothetical syllogisms: modus ponens and modus tollens', 15, ['Syllogism'], [
    'A **hypothetical (conditional) proposition** has the form "If p, then q": p is the **antecedent**, q the **consequent**. A **mixed hypothetical syllogism** has a conditional major premise and a categorical minor premise. Two forms are valid:\n- **modus ponens** (affirming the antecedent): If p then q; p; therefore q. "If the river floods, the road closes. The river has flooded. So the road is closed."\n- **modus tollens** (denying the consequent): If p then q; not q; therefore not p. "If she sat the exam, her name is on the list. Her name is not on the list. So she did not sit the exam."',
    'Two forms are **fallacies**:\n- **affirming the consequent**: If p then q; q; therefore p. "If it rained, the ground is wet. The ground is wet. So it rained." A burst pipe could wet the ground\n- **denying the antecedent**: If p then q; not p; therefore not q. "If you study, you will pass. You did not study. So you will fail." Someone may pass for other reasons.',
    'A **pure hypothetical syllogism** has conditionals throughout: If p then q; if q then r; therefore if p then r (a chain argument).',
  ], 'logic-hypothetical', 'Affirm the antecedent or deny the consequent.',
  ['"If he is a doctor, he studied medicine. He studied medicine. So he is a doctor" commits:', ['affirming the consequent', 'modus ponens', 'modus tollens', 'denying the antecedent'], 'He may teach medicine or have changed career.'],
  [['Antecedent', 'The "if" part of a conditional.'], ['Consequent', 'The "then" part of a conditional.'], ['Modus ponens', 'If p then q; p; so q.'], ['Modus tollens', 'If p then q; not q; so not p.']],
  [
    { q: 'Name the form and say if valid: "If the generator is working, the lights are on. The lights are off. So the generator is not working."', steps: ['**Denies the consequent ("the lights are off" = not q).**', '**Modus tollens: valid.**'] },
  ]),

  L('lo-disjunctive-5', 'lo-f5-hypothetical', '6.2', 'Disjunctive syllogisms and the dilemma', 15, ['Syllogism'], [
    'A **disjunctive proposition** has the form "Either p or q" (the disjuncts). In logic "or" is taken **inclusively**: at least one is true, perhaps both. A **disjunctive syllogism**:\n- **valid**: Either p or q; not p; therefore q. "Either the bus left or it is late. It has not left. So it is late."\n- **invalid** with inclusive "or": Either p or q; p; therefore not q (affirming a disjunct). "Either he is clever or he is hard-working. He is clever. So he is not hard-working" does not follow: he may be both.',
    'A **dilemma** combines two conditionals with a disjunction:\n- **constructive**: If p then q, and if r then s; either p or r; so either q or s\n- **destructive**: If p then q, and if r then s; either not q or not s; so either not p or not r.\nExample: "If I study, I miss the party; if I go to the party, I fail the test. Either I study or I go. So either I miss the party or I fail the test."',
    'Three ways to answer a dilemma:\n- **grasping a horn**: show a conditional premise is false ("going to the party need not make you fail")\n- **escaping between the horns**: show the disjunction is incomplete ("I can study in the morning and go in the evening")\n- **rebutting with a counter-dilemma** that leads to the opposite conclusion.',
  ], 'logic-hypothetical', 'Deny one disjunct to affirm the other.',
  ['Showing that a conditional in a dilemma is false is called:', ['grasping a horn', 'escaping between the horns', 'modus tollens', 'a counter-dilemma'], 'Attack one horn.'],
  [['Disjunctive syllogism', 'Either p or q; not p; so q.'], ['Dilemma', 'An argument combining two conditionals with a disjunction.'], ['Horns of a dilemma', 'The two alternatives a dilemma offers.']],
  [
    { q: 'Answer this dilemma: "If we raise school fees, poor pupils leave; if we do not, the school cannot pay teachers. Either we raise fees or we do not. So either poor pupils leave or teachers are not paid."', steps: ['**Escape between the horns: there are other choices, such as bursaries for poor pupils, government grants or fund-raising.**', '**The disjunction "raise fees or do nothing else" is incomplete, so the conclusion does not follow.**'] },
  ]),

  // ---------- Fallacies of relevance ----------
  L('lo-baculum-5', 'lo-f5-relevance', '7.1', 'Appeals to force and to pity', 13, ['Fallacies'], [
    '**Argumentum ad baculum** (appeal to the stick, to force) tries to win acceptance by **threats** rather than reasons. "You had better agree that the new rule is fair, or you will be dismissed." A threat may make people **act**, but it does not show the claim is **true**.',
    '**Argumentum ad misericordiam** (appeal to pity) replaces evidence with **sympathy**. "Members of the panel, think of my long journey and my sick mother before you mark my project." Sympathy may be right in deciding how to help someone, but it is irrelevant to whether a claim is true or work deserves a grade.',
    'With **ad hominem** and **ad populum** from Form 4, these make up the main fallacies of relevance. In each case, ask: if I set aside the threat, the pity, the attack or the crowd, what evidence is left?',
  ], 'logic-fallacies-relevance', 'Threats and pity are not evidence.',
  ['"Sign the petition, or the gang will know where you live" commits:', ['ad baculum', 'ad misericordiam', 'ad populum', 'ad verecundiam'], 'A threat.'],
  [['Ad baculum', 'The fallacy of appealing to force or threats.'], ['Ad misericordiam', 'The fallacy of appealing to pity.']],
  [
    { q: 'Explain why this is fallacious: "The minister’s plan must be right; anyone who criticises it will lose their government contract."', steps: ['**Ad baculum: the reason offered is a threat.**', '**Fear of losing a contract may silence critics, but it gives no evidence that the plan is good.**', '**The plan must be judged on its costs, benefits and results.**'] },
  ]),

  L('lo-ignorantiam-5', 'lo-f5-relevance', '7.2', 'Appeals to ignorance and to authority', 14, ['Fallacies'], [
    '**Argumentum ad ignorantiam** (appeal to ignorance) claims that something is **true because it has not been proved false**, or **false because it has not been proved true**. "No one has proved that this herbal mixture does not cure diabetes, so it must cure it." Lack of evidence against a claim is not evidence for it.\nNote: in a court, the rule that an accused is presumed innocent until proved guilty is **not** this fallacy: it is a rule about who must prove the case.',
    '**Argumentum ad verecundiam** (appeal to authority) accepts a claim because of the **prestige** of someone who is **not an expert** on the question, or whose expertise is irrelevant or doubtful. "A famous musician says this phone network is the safest for your data, so it is." A musician is no authority on data security.',
    'Relying on genuine, relevant experts is reasonable: a qualified engineer on bridges, a doctor on medicine, the national meteorological service on weather. The fallacy lies in an **irrelevant** or **unreliable** authority, or in treating any authority as beyond question.',
  ], 'logic-fallacies-relevance', 'No proof against is not proof for; check the authority’s field.',
  ['"Scientists have never proved that witchcraft is impossible, so it is real" commits:', ['ad ignorantiam', 'ad verecundiam', 'ad baculum', 'equivocation'], 'Lack of disproof is not proof.'],
  [['Ad ignorantiam', 'The fallacy of arguing from a lack of proof.'], ['Ad verecundiam', 'The fallacy of appealing to an irrelevant or unreliable authority.'], ['Burden of proof', 'The duty to prove a claim, resting on whoever makes it.']],
  [
    { q: 'Name the fallacy: "A popular comedian says vaccines are dangerous, so I will not vaccinate my child."', steps: ['**Ad verecundiam: a comedian is not an authority on medicine.**', '**The relevant evidence comes from medical research and health authorities, which show that approved vaccines are safe and prevent serious disease.**'] },
  ]),

  // ---------- Presumption and ambiguity ----------
  L('lo-presumption-5', 'lo-f5-presumption', '8.1', 'Complex questions and begging the question', 14, ['Fallacies'], [
    'Fallacies of **presumption** smuggle in an unproved assumption.\n- A **complex (loaded) question** asks something that assumes a hidden claim: "Have you stopped copying in examinations?" Whether you answer yes or no, you admit you copied. "Why are Form 5 students so lazy?" assumes they are lazy. The answer is to **divide** the question: "I have never copied."',
    '**Begging the question** (petitio principii) assumes in the premises what the argument is meant to prove, often in different words:\n- "He is honest because he never lies, and he never lies because he is honest" (circular reasoning)\n- "Smoking is harmful because it damages health": the premise only repeats the conclusion.',
    'To detect begging the question, ask: would anyone who doubts the conclusion already accept the premise? If not, the argument proves nothing.',
  ], 'logic-fallacies-ambiguity', 'Divide a loaded question; check the premise is not the conclusion in disguise.',
  ['"Where did you hide the money you stole?" is:', ['a complex question', 'equivocation', 'a valid question', 'ad populum'], 'It assumes you stole money.'],
  [['Complex question', 'A question that assumes an unproved claim.'], ['Begging the question', 'Assuming what is to be proved (petitio principii).'], ['Circular reasoning', 'An argument whose conclusion is also a premise.']],
  [
    { q: 'Show why this begs the question: "This newspaper always tells the truth, because it says so on its front page."', steps: ['**The evidence for the paper’s truthfulness is the paper’s own claim.**', '**We may trust that claim only if we already accept that the paper tells the truth.**', '**So the premise assumes the conclusion: circular reasoning.**'] },
  ]),

  L('lo-ambiguity-5', 'lo-f5-presumption', '8.2', 'Equivocation and amphiboly', 13, ['Fallacies'], [
    'Fallacies of **ambiguity** arise when language can be read in more than one way.\n- **Equivocation**: one **word or phrase** shifts its meaning during the argument. "The end of a thing is its perfection; death is the end of life; so death is the perfection of life." "End" means "purpose" in the first premise and "last point" in the second. In a syllogism this produces four terms.',
    '- **Amphiboly**: a **sentence** is ambiguous because of its **grammar**, not one word. "Wanted: a room for a student with a balcony." "The police shot the man with the gun." "Visiting relatives can be boring." An argument built on one reading while the hearer understands the other is fallacious.',
    'Defence: **define** key words and keep each meaning fixed; **rewrite** ambiguous sentences so only one reading is possible ("Wanted: a room with a balcony, for a student").',
  ], 'logic-fallacies-ambiguity', 'Equivocation: one word. Amphiboly: one sentence’s grammar.',
  ['"Flying planes can be dangerous" is an example of:', ['amphiboly', 'equivocation', 'begging the question', 'ad baculum'], 'Planes that fly, or the act of flying them?'],
  [['Equivocation', 'Using a word in two senses within one argument.'], ['Amphiboly', 'Ambiguity due to sentence structure.'], ['Fallacy of ambiguity', 'An error caused by language that can be read in two ways.']],
  [
    { q: 'Identify the fallacy: "The sign says ‘Fine for parking here’, so I parked here."', steps: ['**Equivocation on "fine": a penalty, or "all right".**', '**The sign means a penalty will be charged; the driver read it as permission.**'] },
  ]),
];
