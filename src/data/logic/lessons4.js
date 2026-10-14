// Logic lessons for Form 4: definition and division, the complete square of
// opposition, conversion, obversion and contraposition, the fallacies of
// relevance and promotion revision. The Form 4 revision of terms and
// propositions uses the Form 3 lessons. Original text written for this app.

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

export const LESSONS_4 = [
  // ---------- Definition and division ----------
  L('lo-definition-4', 'lo-f4-definition', '8.1', 'Definition and its rules', 15, ['Terms'], [
    'A **definition** states the meaning of a term: it sets out its **comprehension**. The best logical definition is **by genus and differentia**:\n- the **genus**: the wider class the thing belongs to\n- the **differentia**: the feature that marks it off from the other members of that class.\n"A triangle is a plane figure (genus) bounded by three straight lines (differentia)." "A human being is an animal (genus) that is rational (differentia)."',
    'Rules of a good definition:\n- it must be **neither too wide nor too narrow**: the definition and the term must apply to exactly the same things. "A bird is an animal with two legs" is too wide (it includes humans); "a bird is a creature that sings" is too narrow (it leaves out birds that do not sing)\n- it must **not be circular**: it must not use the term being defined or a synonym. "A teacher is a person who teaches" explains nothing\n- it must **not be negative** where it can be affirmative: "Justice is not injustice"\n- it must **not use obscure or figurative language**: "Education is the light of the soul" is a metaphor, not a definition.',
    'Other kinds of definition used in practice: **by example** (listing members: "a vowel is a, e, i, o or u"), **ostensive** (pointing to the thing), and **by synonym** (giving a word of the same meaning). These help learners but do not state the essence.',
  ], 'logic-definition', 'Genus + differentia; not too wide, not too narrow, not circular, not negative, not obscure.',
  ['"A chair is a seat" is faulty because it is:', ['too wide', 'too narrow', 'negative', 'figurative'], 'Benches and stools are seats too.'],
  [['Definition', 'A statement of the meaning (comprehension) of a term.'], ['Genus', 'The wider class to which a thing belongs.'], ['Differentia', 'The feature that marks a thing off from others in its genus.'], ['Circular definition', 'A definition that uses the term being defined.']],
  [
    { q: 'Correct the definition "A square is a figure with four sides".', steps: ['**It is too wide: rectangles, rhombuses and other quadrilaterals also have four sides.**', '**Better: "A square is a quadrilateral (genus) with four equal sides and four right angles (differentia)."**'] },
  ]),

  L('lo-division-4', 'lo-f4-definition', '8.2', 'Logical division', 14, ['Terms'], [
    '**Logical division** separates a **genus** into its **species**: it sets out the **extension** of a term in an orderly way. "Triangles are divided by their sides into equilateral, isosceles and scalene." The feature used to divide is the **principle (basis) of division**.',
    'Rules of division:\n- use **one principle** at a time. Breaking it causes **cross-division**: dividing students into "boys, girls and boarders" mixes sex with residence, so the groups overlap\n- the species must be **exhaustive**: together they make up the whole genus. Dividing Cameroonian schools into "government and mission" leaves out lay private schools\n- the species must be **mutually exclusive**: no member may belong to two of them\n- proceed **step by step**, without leaping: divide "animal" into vertebrates and invertebrates before dividing vertebrates into mammals, birds, reptiles, amphibians and fish.',
    'Division is not **partition**: cutting a thing into its physical parts. "A tree has roots, trunk, branches and leaves" is partition, because a root is not a kind of tree.',
  ], 'logic-division', 'One principle; exhaustive; exclusive; step by step.',
  ['Dividing "books" into "novels, textbooks and hardbacks" commits:', ['cross-division', 'a correct division', 'partition', 'a circular definition'], 'Content and binding mixed.'],
  [['Logical division', 'Separating a genus into its species.'], ['Principle of division', 'The feature used to divide a genus.'], ['Cross-division', 'Using more than one principle at once, so species overlap.'], ['Partition', 'Cutting a thing into its physical parts.']],
  [
    { q: 'Divide "Cameroonian secondary schools" correctly by who runs them.', steps: ['Principle: **who runs the school.**', '**Government (public) schools; denominational (mission) schools; lay private schools.**', '**Check: every school fits one group (exhaustive) and only one (exclusive).**'] },
  ]),

  // ---------- The complete square ----------
  L('lo-contraries-4', 'lo-f4-square', '12.1', 'Contraries and subcontraries', 14, ['Immediate inference'], [
    '**Contraries** are the two **universals**, A and E, with the same terms. The rule: **they cannot both be true, but they can both be false**.\n- if "All students passed" (A) is **true**, "No students passed" (E) is **false**\n- if "All students passed" is **false**, we cannot tell whether "No students passed" is true: perhaps some passed and some failed. E is **undetermined**.',
    '**Subcontraries** are the two **particulars**, I and O. The rule: **they cannot both be false, but they can both be true**.\n- if "Some mangoes are ripe" (I) is **false**, then "Some mangoes are not ripe" (O) is **true**\n- if "Some mangoes are ripe" is **true**, O is **undetermined**: some may be unripe too, or all may be ripe.',
    'Remember the pattern: universals cannot both be **true**; particulars cannot both be **false**. Only from a true contrary or a false subcontrary can we draw a conclusion.',
  ], 'logic-square', 'Contraries: not both true. Subcontraries: not both false.',
  ['If "No traders are honest" is false, what follows about "All traders are honest"?', ['it is undetermined', 'it is true', 'it is false', 'it is the converse'], 'Contraries can both be false.'],
  [['Contraries', 'A and E: cannot both be true; can both be false.'], ['Subcontraries', 'I and O: cannot both be false; can both be true.'], ['Undetermined', 'Neither known to be true nor known to be false.']],
  [
    { q: 'Given that "Some pupils are absent" (I) is false, find E, A and O.', steps: ['**O, its subcontrary, is true (they cannot both be false).**', '**E, its contradictory, is true: "No pupils are absent".**', '**A, the contradictory of O, is false.**'] },
  ]),

  L('lo-subalterns-4', 'lo-f4-square', '12.2', 'Subalternation and the full table of truth values', 15, ['Immediate inference'], [
    '**Subalternation** links a universal with the particular of the same quality: A with I, E with O. The universal is the **superaltern**, the particular the **subaltern**. The rule:\n- **truth flows down**: if the universal is true, the particular is true (if all students passed, some passed)\n- **falsity flows up**: if the particular is false, the universal is false (if no student passed, then not all passed)\n- otherwise the result is undetermined.',
    'The complete table (traditional square):\n- **A true**: E false, I true, O false. **A false**: O true; E, I undetermined\n- **E true**: A false, I false, O true. **E false**: I true; A, O undetermined\n- **I true**: E false; A, O undetermined. **I false**: A false, E true, O true\n- **O true**: A false; E, I undetermined. **O false**: A true, E false, I true.',
    'Method for any question: start with the **contradictory** (always decided), then use contraries, subcontraries and subalterns. The traditional square assumes that the subject class has members; it does not apply to empty classes such as "unicorns".',
  ], 'logic-square-rules', 'Truth flows down; falsity flows up.',
  ['If "All Cameroonian cities have markets" is true, "Some Cameroonian cities have markets" is:', ['true', 'false', 'undetermined', 'contrary'], 'Truth flows down.'],
  [['Subalternation', 'The relation of A to I and E to O.'], ['Superaltern', 'The universal proposition in subalternation.'], ['Subaltern', 'The particular proposition in subalternation.']],
  [
    { q: 'Given that "Some Form 4 students are not prefects" (O) is false, find A, E and I.', steps: ['**A, its contradictory, is true: "All Form 4 students are prefects".**', '**E is the contrary of a true A, so E is false.**', '**I is the subaltern of a true A, so I is true.**'] },
  ]),

  // ---------- Conversion ----------
  L('lo-conversion-4', 'lo-f4-conversion', '13.1', 'Conversion and its rules', 15, ['Immediate inference'], [
    '**Conversion** is an immediate inference in which the **subject and predicate change places** while the **quality stays the same**. The original proposition is the **convertend**; the result is the **converse**.',
    'Rule: **no term may be distributed in the converse unless it was distributed in the convertend**. Applying it:\n- **E converts simply**: "No dogs are cats" → "No cats are dogs" (both terms distributed in both)\n- **I converts simply**: "Some teachers are footballers" → "Some footballers are teachers" (neither distributed in either)\n- **A converts only by limitation** (per accidens): "All doctors are graduates" → "Some graduates are doctors". "All graduates are doctors" would distribute "graduates", which was undistributed\n- **O cannot be converted**: from "Some animals are not dogs" we cannot infer "Some dogs are not animals". The converse would distribute "animals", which was undistributed.',
    'Breaking the rule is the fallacy of **illicit conversion**, a very common error: "All thieves are liars, so all liars are thieves."',
  ], 'logic-conversion', 'E and I convert simply; A by limitation; O never.',
  ['The valid converse of "All ministers are Cameroonians" is:', ['"Some Cameroonians are ministers"', '"All Cameroonians are ministers"', '"No Cameroonians are ministers"', 'none'], 'A converts by limitation.'],
  [['Conversion', 'Interchanging subject and predicate, keeping the quality.'], ['Convertend', 'The proposition to be converted.'], ['Converse', 'The result of conversion.'], ['Conversion by limitation', 'Converting A into I.']],
  [
    { q: 'Why does "Some animals are not dogs" have no valid converse?', steps: ['**The O proposition distributes only its predicate, "dogs"; "animals" is undistributed.**', '**Its converse "Some dogs are not animals" would distribute "animals" as the predicate of an O.**', '**A term undistributed in the convertend cannot become distributed, so the conversion is invalid (and the result is plainly false).**'] },
  ]),

  L('lo-convpractice-4', 'lo-f4-conversion', '13.2', 'Converting ordinary sentences', 14, ['Immediate inference'], [
    'Steps:\n- put the sentence into **standard form**\n- name the proposition (A, E, I or O)\n- apply the right kind of conversion\n- write the converse in standard form.',
    'Examples:\n- "Only members may vote" → All voters are members (A) → **Some members are voters**\n- "Not one of the players was injured" → No players are injured people (E) → **No injured people are players**\n- "A few Bamenda traders sell in Nigeria" → Some Bamenda traders are sellers in Nigeria (I) → **Some sellers in Nigeria are Bamenda traders**\n- "Not every lawyer is honest" → Some lawyers are not honest people (O) → **no valid converse**.',
    'Singular propositions: "Yaoundé is the capital of Cameroon" can be converted to "The capital of Cameroon is Yaoundé", because both terms name exactly one thing. Check the distribution every time: it is the surest test.',
  ], 'logic-conversion', 'Standard form first, then name it, then convert.',
  ['The converse of "No vegetarians eat meat" in standard form is:', ['"No meat-eaters are vegetarians"', '"All meat-eaters are vegetarians"', '"Some vegetarians are meat-eaters"', 'none'], 'E converts simply.'],
  [['Standard form', 'Quantifier, subject term, copula, predicate term.'], ['Illicit conversion', 'Converting so that a term becomes wrongly distributed.']],
  [
    { q: 'Convert "Every member of the choir is a student".', steps: ['Standard form: **All choir members are students (A).**', 'A converts by limitation.', 'Converse: **Some students are choir members.**'] },
  ]),

  // ---------- Obversion and contraposition ----------
  L('lo-obversion-4', 'lo-f4-obversion', '14.1', 'Obversion', 14, ['Immediate inference'], [
    '**Obversion** is an immediate inference in which we:\n- **change the quality** (affirmative to negative, or negative to affirmative)\n- **replace the predicate by its complement** (P becomes non-P).\nThe subject and the quantity stay the same. The original is the **obvertend**, the result the **obverse**.',
    'The four obverses:\n- **A** "All students are learners" → **E** "No students are non-learners"\n- **E** "No snakes are mammals" → **A** "All snakes are non-mammals"\n- **I** "Some traders are honest" → **O** "Some traders are not non-honest people"\n- **O** "Some fruits are not sweet" → **I** "Some fruits are non-sweet".',
    'Obversion is **valid for all four** forms: two negations cancel out, so the meaning never changes. Take care that the complement is the true contradictory term: the complement of "honest" is "non-honest", everything that is not honest. Words such as "dishonest" may be used only when they mean exactly that.',
  ], 'logic-obversion', 'Change the quality; replace P by non-P.',
  ['The obverse of "No Form 4 students are lazy" is:', ['"All Form 4 students are non-lazy"', '"No lazy people are Form 4 students"', '"Some Form 4 students are lazy"', '"All lazy people are Form 4 students"'], 'E becomes A.'],
  [['Obversion', 'Changing the quality and replacing the predicate by its complement.'], ['Complement', 'The class of everything outside a given class: non-P.'], ['Obverse', 'The result of obversion.']],
  [
    { q: 'Obvert "Some voters are not registered".', steps: ['Standard form: **Some voters are not registered people (O).**', 'Change the quality to affirmative and replace the predicate by its complement.', 'Obverse: **Some voters are non-registered people (I).**'] },
  ]),

  L('lo-contraposition-4', 'lo-f4-obversion', '14.2', 'Contraposition', 15, ['Immediate inference'], [
    '**Contraposition** replaces the subject by the complement of the predicate and the predicate by the complement of the subject. It is done in three steps: **obvert, convert, obvert**.\nExample, A: "All doctors are graduates"\n- obvert: No doctors are non-graduates\n- convert: No non-graduates are doctors\n- obvert: **All non-graduates are non-doctors** (the full contrapositive).',
    'Results:\n- **A**: All S are P → All non-P are non-S (valid)\n- **O**: Some S are not P → Some non-P are not non-S (valid)\n- **E**: No S are P → Some non-P are not non-S (only **by limitation**, because the converse step needs an A converted by limitation)\n- **I**: **no contrapositive**: its obverse is an O, which cannot be converted.',
    'Do not confuse contraposition with conversion. "All doctors are graduates" does **not** give "All graduates are doctors" (illicit conversion), but it **does** give "All non-graduates are non-doctors" (contraposition). This confusion is a common GCE error.',
  ], 'logic-contraposition', 'Obvert, convert, obvert. A and O fully; E by limitation; I never.',
  ['The contrapositive of "All Cameroonians are Africans" is:', ['"All non-Africans are non-Cameroonians"', '"All Africans are Cameroonians"', '"No Africans are Cameroonians"', '"Some Africans are Cameroonians"'], 'Anyone who is not African cannot be Cameroonian.'],
  [['Contraposition', 'Obverting, converting and obverting again.'], ['Contrapositive', 'The result of contraposition.'], ['Partial contrapositive', 'The result after obverting and converting only.']],
  [
    { q: 'Contrapose "Some students are not footballers".', steps: ['Obvert: **Some students are non-footballers (I).**', 'Convert: **Some non-footballers are students (I).**', 'Obvert: **Some non-footballers are not non-students (O).**'] },
  ]),

  // ---------- Fallacies of relevance ----------
  L('lo-adhominem-4', 'lo-f4-fallacies', '15.1', 'Argumentum ad hominem', 14, ['Fallacies'], [
    '**Argumentum ad hominem** ("argument to the man") rejects a claim by attacking the **person** who makes it instead of the **reasons** given. Three forms:\n- **abusive**: insulting the person’s character, background or appearance. "Why listen to his views on road safety? He comes from a village and never finished school."\n- **circumstantial**: pointing to the person’s interests. "Of course the transporter supports lower fuel prices; he owns taxis." His interest does not make his reasons false\n- **tu quoque** ("you too"): "You tell me to stop smoking, but you smoke yourself." Even a smoker can give good advice.',
    'Why it is a fallacy: the truth of a claim and the strength of an argument depend on the **evidence**, not on who states it. Good reasons stay good whoever offers them.',
    'Not every remark about a person is fallacious: when we judge a **witness**, their honesty and interests do matter. The fallacy is to treat an attack on the person as if it disproved the **argument** itself.',
  ], 'logic-fallacies-f4', 'Attack the argument, not the arguer.',
  ['"The teacher says homework improves results, but she is just lazy about teaching" is:', ['abusive ad hominem', 'ad populum', 'valid', 'amphiboly'], 'An attack on character.'],
  [['Ad hominem', 'Attacking the person instead of the argument.'], ['Abusive ad hominem', 'Insulting the arguer’s character.'], ['Circumstantial ad hominem', 'Pointing to the arguer’s interests to dismiss the argument.'], ['Tu quoque', '"You too": rejecting advice because the adviser does the same.']],
  [
    { q: 'Identify and explain: "The doctor says I should eat less salt, but I have seen him eat salty fish."', steps: ['**Tu quoque, a form of ad hominem.**', '**The doctor’s own habits do not change the medical evidence that too much salt raises blood pressure.**', '**The advice must be judged on its reasons, not on the doctor’s behaviour.**'] },
  ]),

  L('lo-relevance-4', 'lo-f4-fallacies', '15.2', 'Spotting fallacies of relevance in texts', 14, ['Fallacies'], [
    'A **fallacy of relevance** offers premises that may be psychologically persuasive but are **logically irrelevant** to the conclusion. So far you know:\n- **ad populum**: appeal to the crowd ("everyone is doing it")\n- **ad misericordiam**: appeal to pity\n- **ad hominem**: attack on the person.',
    'Method for a passage:\n- find the **conclusion** (what the writer wants us to accept)\n- list the **reasons** offered\n- ask of each reason: "Does this, if true, give evidence for the conclusion?" If it only stirs feelings, flatters the crowd or attacks a person, name the fallacy.',
    'Example: "This new energy drink is the choice of a generation. Join millions of young Cameroonians today. Those who criticise it are jealous old people." The conclusion is "buy this drink". The reasons appeal to popularity (ad populum) and attack critics (ad hominem). No evidence about the drink’s quality or safety is given.',
  ], 'logic-fallacies-f4', 'Ask: is the reason evidence, or only pressure?',
  ['A fallacy of relevance gives reasons that are:', ['persuasive but logically irrelevant', 'always false', 'mathematically wrong', 'too long'], 'They do not support the conclusion.'],
  [['Fallacy of relevance', 'A fallacy whose premises do not bear on the conclusion.'], ['Persuasive', 'Able to make people believe, whether or not with good reason.']],
  [
    { q: 'Name the fallacies: "Our candidate must win: look at the huge crowds, and his opponent was once dismissed from his job."', steps: ['**Huge crowds: ad populum.**', '**Opponent’s dismissal: abusive ad hominem.**', '**Neither reason shows that the candidate’s policies are good.**'] },
  ]),

  // ---------- Promotion revision ----------
  L('lo-eduction-4', 'lo-f4-promotion', '16.1', 'The immediate inferences together', 15, ['Immediate inference'], [
    'Immediate inferences draw a conclusion from **one** premise:\n- **opposition** (the square): same terms, different quality or quantity\n- **conversion**: swap S and P, keep the quality (E, I simply; A by limitation; O never)\n- **obversion**: change the quality, replace P by non-P (all four)\n- **contraposition**: obvert, convert, obvert (A and O; E by limitation; I never).',
    'Summary for "All S are P" (A):\n- contradictory: Some S are not P (O)\n- converse: Some P are S\n- obverse: No S are non-P\n- contrapositive: All non-P are non-S.\nSummary for "No S are P" (E):\n- contradictory: Some S are P\n- converse: No P are S\n- obverse: All S are non-P\n- contrapositive: Some non-P are not non-S (by limitation).',
    'Inferences can be **chained**: from "No S are P", convert (No P are S), then obvert (All P are non-S). At every step, check the **distribution**: no term may become distributed in the conclusion unless it was distributed in the premise.',
  ], 'logic-eduction', 'At every step, check the distribution.',
  ['From "No S are P", converting then obverting gives:', ['"All P are non-S"', '"Some S are P"', '"All S are P"', '"No non-S are P"'], 'No P are S, then All P are non-S.'],
  [['Immediate inference', 'A conclusion drawn from one premise.'], ['Eduction', 'The group name for conversion, obversion and contraposition.'], ['Chain of inference', 'Several immediate inferences in a row.']],
  [
    { q: 'From "All Bamenda students are Anglophones", give the converse, obverse and contrapositive.', steps: ['Converse: **Some Anglophones are Bamenda students.**', 'Obverse: **No Bamenda students are non-Anglophones.**', 'Contrapositive: **All non-Anglophones are non-Bamenda students.**'] },
  ]),

  L('lo-f4revision-4', 'lo-f4-promotion', '16.2', 'Revising Form 4 for promotion', 13, ['Examination'], [
    'Checklist:\n- the nature of logic; form and matter; validity and truth\n- the three operations of the mind; terms; comprehension and extension\n- kinds of terms; definition and division with their rules\n- standard form; A, E, I, O; distribution\n- the full square of opposition and the truth-value table\n- conversion, obversion, contraposition\n- ad hominem, ad populum, ad misericordiam.',
    'Typical questions and how to answer them:\n- "Given that A is false, state the truth values of E, I and O": go to the contradictory first, then the others, naming the relation each time\n- "Convert, obvert and contrapose": standard form, letter, steps, result\n- "Name the fallacy": quote the part of the text, name it, explain why the reason is irrelevant.',
    'Form 5 begins with the syllogism, where distribution is used constantly. Make sure you can state the distribution of any proposition at once.',
  ], 'logic-eduction', 'Name the relation or rule at every step.',
  ['When given that A is false, the first proposition to decide is:', ['O, its contradictory', 'E, its contrary', 'I, its subaltern', 'none'], 'Contradictories are always decided.'],
  [['Truth-value table', 'The list of what follows on the square from each given truth value.'], ['Promotion', 'Moving up to the next class.']],
  [
    { q: 'Given that E "No pupils are late" is false, find A, I and O.', steps: ['**I, the contradictory, is true: "Some pupils are late".**', '**A, the contrary of a false E, is undetermined.**', '**O, the subaltern of a false E, is undetermined.**'] },
  ]),
];
