// A Level Philosophy lessons (0790), Upper Sixth, Terms 2 and 3: the
// ethnophilosophy debate, nationalist philosophies, current trends in
// African philosophy, prescribed-text commentary, critical evaluation,
// Paper 1 and Paper 2 drills, and the final term.

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

export const LESSONS_PHU6B = [
  // ---------- 10. Ethnophilosophy ----------
  L('aph-ethnophil-1', 'aph-u6-ethnophil', '10.1', 'Tempels, Kagame and ethnophilosophy', 18, ['African'], [
    'The question "Is there an African philosophy?" arose against a colonial background in which European writers (Lévy-Bruhl’s "pre-logical mentality", Hegel’s dismissal of Africa) denied Africans rational thought.',
    '**Placide Tempels**, a Belgian Franciscan missionary in the Congo, published *Bantu Philosophy* (*La philosophie bantoue*, 1945). He argued that the Bantu have a coherent philosophy whose key idea is **vital force**: for them, being is force, and the good is what increases life force. His aim was partly to help missionary and colonial work.',
    '**Alexis Kagame**, a Rwandan priest, in *La philosophie bantu-rwandaise de l’être* (1956), drew a philosophy of being from the grammatical categories of **Kinyarwanda**, comparing them with Aristotle’s categories.',
    'This approach, reading a **collective, implicit** philosophy from a people’s language, myths and customs, was later called **ethnophilosophy**.',
  ], 'aph-african-debate', 'Ethnophilosophy answered colonial contempt, but it answered with a collective, unwritten philosophy.',
  ['For Tempels, the central idea of Bantu thought is:', ['vital force', 'the cogito', 'atoms', 'the general will'], 'Bantu Philosophy, 1945.'],
  [['Ethnophilosophy', 'Philosophy read from the collective beliefs, language and customs of a people.'], ['Vital force', 'Tempels’ key concept of Bantu thought: being as force.']],
  [
    { q: 'Give one merit and one limit of Tempels’ Bantu Philosophy.', steps: ['Merit: **it affirmed that Africans have coherent thought, against colonial prejudice**.', 'Limit: **it attributes one fixed philosophy to a whole people, written by an outsider for missionary purposes**.'] },
  ]),
  L('aph-ethnophil-2', 'aph-u6-ethnophil', '10.2', 'The critique: Towa and Hountondji', 18, ['African'], [
    '**Marcien Towa** (Cameroon, 1931 to 2014), in *Essai sur la problématique philosophique dans l’Afrique actuelle* (Yaoundé, CLÉ, 1971), criticised ethnophilosophy and Negritude for idealising tradition. He argued that Africa must **appropriate critical, scientific reason**, including what made Europe powerful, and submit its own traditions to criticism, in order to liberate itself.',
    '**Paulin Hountondji** (Benin), in *Sur la "philosophie africaine"* (1976; English *African Philosophy: Myth and Reality*, 1983), attacked ethnophilosophy as **unanimist**: it pretends a whole people shares one philosophy. For him, philosophy is a **critical, explicit, written** discourse produced by individuals and open to debate; African philosophy is the body of philosophical texts written by Africans.',
    'Replies to the critics: they seemed to make Western academic philosophy the only model, and to undervalue oral thought; the later trends (Oruka’s sage philosophy) tried to answer this.',
  ], 'aph-towa-hountondji', 'Towa and Hountondji agree that philosophy must be critical; they reject a philosophy no one argued for.',
  ['Hountondji called ethnophilosophy:', ['unanimist', 'too critical', 'scientific', 'individualist'], 'One philosophy for a whole people.'],
  [['Unanimism', 'The assumption that a whole people shares one view.'], ['Critical philosophy', 'Explicit, argued thought open to debate.']],
  [
    { q: 'Plan "Is African philosophy to be found in tradition?"', steps: ['I. **Yes: proverbs, myths and languages carry thought (Tempels, Kagame)**.', 'II. **No: philosophy needs critical, individual argument (Towa, Hountondji)**.', 'III. **Tradition is a resource for philosophy when it is examined critically (Oruka’s sages, Wiredu)**.'] },
  ]),

  // ---------- 11. Nationalist trend ----------
  L('aph-nationalist-1', 'aph-u6-nationalist', '11.1', 'Negritude and Consciencism', 18, ['African'], [
    '**Negritude** was launched in Paris in the 1930s by **Léopold Sédar Senghor** (later President of Senegal), **Aimé Césaire** and **Léon Damas**, around the journal *L’Étudiant noir* (1935). It affirmed the value of Black African culture and identity against colonial assimilation. Senghor contrasted African **emotion** with Hellenic **reason**, a formula many criticised (Towa, Soyinka: "a tiger does not proclaim its tigritude").',
    '**Kwame Nkrumah**, Ghana’s first president, in *Consciencism* (1964), proposed a philosophy for decolonisation that unites three strands of African society: **traditional African values**, **Islamic** and **Euro-Christian** influences, within a **socialist**, egalitarian outlook drawing on Marxism.',
    'Both belong to Oruka’s **nationalist-ideological** trend: philosophy as a tool of political liberation and identity.',
  ], 'aph-nationalist', 'Negritude defended identity; Consciencism planned a new society.',
  ['Negritude was launched in the 1930s by Senghor, Césaire and:', ['Léon Damas', 'Nkrumah', 'Nyerere', 'Tempels'], 'Paris.'],
  [['Negritude', 'A movement affirming Black African culture and identity.'], ['Consciencism', 'Nkrumah’s philosophy for decolonisation (1964).']],
  [
    { q: 'Why did critics object to Senghor’s contrast of emotion and reason?', steps: ['It seemed to accept the **colonial stereotype** that Africans are not rational.', 'It made African identity **fixed and essentialist**.', 'Critics like **Towa** insisted Africans must claim reason too.'] },
  ]),
  L('aph-nationalist-2', 'aph-u6-nationalist', '11.2', 'Nyerere’s Ujamaa', 16, ['African'], [
    '**Julius Nyerere**, first President of Tanzania, set out **Ujamaa** ("familyhood") in the essay *Ujamaa: The Basis of African Socialism* (1962). He argued that traditional African society was already socialist in spirit: sharing, work for all, and no exploitation. The **Arusha Declaration** (1967) made **self-reliance** and Ujamaa state policy.',
    'In practice, Ujamaa villages concentrated scattered rural people to provide services and collective farms. Gains came in **literacy**, health and national unity; but **forced resettlement**, bureaucracy and falling farm output led to economic difficulties, and the policy was abandoned in the 1980s.',
    'Ujamaa raises a philosophical question: can traditional values found a modern economy and state, and what happens when an ideal is imposed rather than chosen?',
  ], 'aph-ujamaa', 'Ujamaa shows both the power of an ideal and the danger of imposing it.',
  ['Ujamaa means:', ['familyhood', 'freedom', 'reason', 'power'], 'Swahili.'],
  [['Ujamaa', 'Nyerere’s African socialism based on familyhood.'], ['Self-reliance', 'Developing with one’s own resources rather than aid.']],
  [
    { q: 'Evaluate Ujamaa in two sentences.', steps: ['Strength: **it united Tanzania and raised literacy, building on values of solidarity**.', 'Weakness: **forced villagisation and central planning harmed farming and freedom**.'] },
  ]),

  // ---------- 12. Current trends ----------
  L('aph-trends-1', 'aph-u6-trends', '12.1', 'Oruka’s trends and sage philosophy', 16, ['African'], [
    '**Henry Odera Oruka** (Kenya, 1944 to 1995) classified African philosophy into trends: **ethnophilosophy**, **philosophic sagacity** (sage philosophy), **nationalist-ideological** philosophy and **professional** philosophy (later adding hermeneutic and literary trends).',
    '**Sage philosophy**: Oruka interviewed wise individuals in rural Kenya and recorded their **critical, personal reflections**, distinguishing **folk sages** (who repeat communal wisdom) from **philosophic sages** (who examine and sometimes reject it). This showed that critical thought exists in oral cultures, answering both ethnophilosophy and its critics (*Sage Philosophy*, 1990).',
    '**Professional philosophy**: work by trained philosophers using rigorous methods: Hountondji, Towa, **Kwasi Wiredu** (Ghana), who called for **conceptual decolonisation**, rethinking concepts such as truth and person through African languages.',
  ], 'aph-oruka-trends', 'Sage philosophy finds the individual critic inside oral tradition.',
  ['Oruka’s philosophic sages differ from folk sages because they:', ['critically examine communal beliefs', 'only repeat proverbs', 'write in Europe', 'reject all tradition'], 'Critical individuals.'],
  [['Sage philosophy', 'The recorded critical thought of wise individuals in oral cultures.'], ['Conceptual decolonisation', 'Wiredu’s call to rethink concepts free of colonial assumptions.']],
  [
    { q: 'How does sage philosophy answer Hountondji’s objection to ethnophilosophy?', steps: ['Hountondji: **philosophy must be individual and critical**.', 'Oruka: **individual sages do argue critically, even without writing**.', 'So **critical African philosophy existed before academic writing**.'] },
  ]),
  L('aph-trends-2', 'aph-u6-trends', '12.2', 'Development and freedom: Eboussi Boulaga and Njoh-Mouelle', 18, ['African'], [
    'Two Cameroonian philosophers connect philosophy to the future of Africa.',
    '**Fabien Eboussi Boulaga** (1934 to 2018), in *La Crise du Muntu* (1977), analysed the crisis of the African person (the *Muntu*) caught between alienating imitation of the West and empty appeals to a lost **authenticity**. He called for a critical **philosophy of freedom** that recovers the capacity to judge and create.',
    '**Ebénézer Njoh-Mouelle** (born 1938), in *De la médiocrité à l’excellence* (1970), argued that development is not only economic growth but the growth of **human freedom, creativity and excellence**; **mediocrity** (passivity, conformism) is the real underdevelopment. His ideas link philosophy to education and citizenship.',
    'The development paradigm asks African philosophy to be **useful** without becoming mere ideology: to think democracy, science, technology and justice in African contexts.',
  ], 'aph-development', 'For Njoh-Mouelle, development begins with the quality of human beings, not only of roads and factories.',
  ['Njoh-Mouelle’s De la médiocrité à l’excellence (1970) argues that development is:', ['the growth of human freedom and excellence', 'only economic growth', 'imitation of Europe', 'a return to the past'], 'Against mediocrity.'],
  [['Muntu', 'Bantu word for a human person.'], ['Authenticity', 'Being true to oneself or one’s culture, which Eboussi Boulaga examined critically.']],
  [
    { q: 'Use Njoh-Mouelle in an essay on "Is development only economic?"', steps: ['Thesis: **growth in income, roads and industry is essential**.', 'Antithesis: **Njoh-Mouelle: without free, creative, excellent citizens, growth is hollow**.', 'Synthesis: **true development combines material progress with human freedom and education**.'] },
  ]),

  // ---------- 13. Prescribed texts ----------
  L('aph-commentary-u6-1', 'aph-u6-commentary', '13.1', 'Close reading of a prescribed text', 18, ['Method'], [
    'Prescribed texts are set by the syllabus and may change between sessions; check the current list with your teacher. Marcien **Towa’s Essai** is a common choice.',
    'Close reading: read the passage several times; underline **key concepts**, number the **moments** of the argument, and note the **connectives**. Then state the **theme**, **problem** and **thesis** in your own words.',
    'Situate the passage in the work: Towa’s *Essai* criticises ethnophilosophy and Negritude, and argues that to free itself Africa must take hold of critical reason and the "secret" of the West’s power, transforming itself rather than glorifying an idealised past.',
  ], 'aph-commentary', 'Know the whole work, then read the passage as one step in its argument.',
  ['When commenting on a passage from a prescribed text, a candidate should:', ['situate it in the author’s overall argument', 'retell the author’s life', 'ignore the rest of the work', 'copy summaries'], 'Context.'],
  [['Prescribed text', 'A text set by the syllabus for study.']],
  [
    { q: 'Find the thesis of this paraphrase of Towa: "To affirm ourselves, we must first deny ourselves: criticise what in our tradition keeps us weak, and appropriate the reason that made others strong."', steps: ['Theme: **African self-liberation**.', 'Problem: **how can Africa affirm itself after colonisation?**', 'Thesis: **by critical self-negation and appropriation of rational, scientific thought**.'] },
  ]),
  L('aph-commentary-u6-2', 'aph-u6-commentary', '13.2', 'Explaining the argument of a prescribed text', 18, ['Method'], [
    'Explain each moment in turn: what the author claims, **why** (the reasons given), how it follows from the previous step, and what **concept** it relies on (for Towa: tradition, reason, power, self-negation, liberation).',
    'Use short quotations with line references, each followed by explanation. Bring in **examples** that clarify the author’s idea, including from Cameroon’s present (education, science, technology).',
    'Avoid paraphrase and biography; the aim is to show the **logic** of the text.',
  ], 'aph-text-moments', 'Each moment: claim, reason, link, concept.',
  ['In explaining a moment of a text, a candidate should show:', ['the claim, the reasons and the link with the previous step', 'only the line numbers', 'the author’s birthplace', 'nothing'], 'The logic of the text.'],
  [['Moment', 'A stage in the argument of a text.']],
  [
    { q: 'Explain Towa’s concept of self-negation with an example.', steps: ['Self-negation means **criticising one’s own tradition, not rejecting oneself**.', 'Example: **valuing community but rejecting beliefs that block scientific medicine**.', 'Aim: **a stronger, freer self, not imitation of others**.'] },
  ]),

  // ---------- 14. Critical evaluation ----------
  L('aph-critique-1', 'aph-u6-critique', '14.1', 'Building an objective critique', 18, ['Method'], [
    'A critical evaluation has three movements:\n- **interest**: what the thesis helps us understand, its relevance today\n- **limits**: internal critique (premises, coherence, ambiguities) and external critique (other thinkers, facts, experience)\n- **judgement**: your own reasoned position.',
    'Objectivity means judging the **argument on its merits**, not the author’s person or origin. Always argue: an objection without reasons is only an opinion.',
    'For Towa, interest: a clear-eyed call to critical reason and self-reliance. Limits: risk of treating Western modernity as the only model (Hountondji partly agrees; others like Wiredu stress conceptual decolonisation), and of undervaluing what tradition offers.',
  ], 'aph-critique', 'Praise first, then object, then judge, always with reasons.',
  ['An internal critique examines:', ['the premises and coherence of the author’s own argument', 'other authors only', 'the author’s nationality', 'the length of the text'], 'Does it hold together?'],
  [['Internal critique', 'Testing an argument by its own premises and logic.'], ['External critique', 'Testing an argument by other views, facts and experience.']],
  [
    { q: 'Write an external objection to Hountondji’s view that philosophy must be written.', steps: ['Oruka’s **sages** argued critically without writing.', 'Socrates **wrote nothing** yet is a model philosopher.', 'So **writing helps philosophy but does not define it**.'] },
  ]),
  L('aph-critique-2', 'aph-u6-critique', '14.2', 'Showing the contemporary value of an author', 16, ['Method'], [
    'The **contemporary value** of a text is what it still teaches about present problems: democracy and power, development, technology, identity, justice.',
    'Method: name a present problem, show how the author’s idea illuminates it, then show where it needs updating. For example, Rousseau’s general will helps think about citizens’ participation; Jonas helps think about climate responsibility; Njoh-Mouelle helps think about the quality of education.',
    'A good evaluation ends with a judgement that is **balanced** and clearly yours.',
  ], 'aph-contemporary', 'Bring the author into today: one present problem, one clear link.',
  ['Showing the contemporary value of a text means:', ['explaining what it still teaches about present problems', 'giving its publication price', 'stating its age', 'quoting its title'], 'Relevance.'],
  [['Contemporary value', 'The relevance of a text to present problems.']],
  [
    { q: 'Show the contemporary value of Machiavelli.', steps: ['Present problem: **leaders use image, media and fear to keep power**.', 'Machiavelli explains **how power is won and kept by appearances and force**.', 'Limit: **today legitimacy also needs law and rights, so realism is not enough**.'] },
  ]),

  // ---------- 15. Paper 1 drills ----------
  L('aph-mcq-1', 'aph-u6-mcq', '15.1', 'Logic for Paper 1: the square of opposition and fallacies', 18, ['MCQ'], [
    'The four categorical propositions: **A** (All S is P), **E** (No S is P), **I** (Some S is P), **O** (Some S is not P).',
    'The **square of opposition**: **A and O**, and **E and I**, are **contradictories** (one true, the other false); **A and E** are **contraries** (cannot both be true, can both be false); **I and O** are **subcontraries** (cannot both be false); **A to I** and **E to O** are **subalterns** (if the universal is true, the particular is true).',
    'Syllogism rules: exactly **three terms**; the **middle term** distributed at least once; no term distributed in the conclusion unless distributed in a premise; from two negative premises nothing follows. Common fallacies: four terms, undistributed middle, ad hominem, hasty generalisation, begging the question, false dilemma, post hoc.',
  ], ['logic-square', 'logic-syllogism-rules'], 'Contradictories always differ in truth; contraries can both be false.',
  ['If "All students are hard-working" is false, "Some students are not hard-working" is:', ['true', 'false', 'undetermined', 'meaningless'], 'A and O are contradictories.'],
  [['Contradictories', 'Propositions that must differ in truth value.'], ['Contraries', 'Propositions that cannot both be true.'], ['Undistributed middle', 'A syllogism fallacy in which the middle term is never distributed.']],
  [
    { q: 'Test: "All Cameroonians are Africans; all Nigerians are Africans; so all Nigerians are Cameroonians."', steps: ['Middle term: **Africans**, which is the predicate of two A propositions.', 'It is **never distributed**.', '**Fallacy of the undistributed middle: invalid.**'] },
  ]),
  L('aph-mcq-2', 'aph-u6-mcq', '15.2', 'Authors, works and dates for Paper 1', 16, ['MCQ'], [
    'Upper Sixth essentials:\n- Machiavelli, *The Prince* (1513); Hobbes, *Leviathan* (1651); Locke, *Second Treatise* (1689); Montesquieu, *The Spirit of the Laws* (1748); Rousseau, *The Social Contract* and *Emile* (1762)\n- Kant, *Groundwork* (1785); Bentham (1789); Mill, *Utilitarianism* (1863); Marx and Engels, *Manifesto* (1848); Weber, *Politics as a Vocation* (1919); Arendt (1951); Rawls (1971); Leibniz, *Theodicy* (1710); Camus, *Myth of Sisyphus* (1942)\n- Tempels (1945); Kagame (1956); Nkrumah, *Consciencism* (1964); Nyerere, *Ujamaa* (1962) and Arusha (1967); Towa, *Essai* (1971); Hountondji (1976); Eboussi Boulaga, *La Crise du Muntu* (1977); Njoh-Mouelle (1970); Oruka, *Sage Philosophy* (1990).',
    'Timelines: order thinkers by century; group by question (state, ethics, African debate).',
  ], 'aph-authors-u6', 'Learn each work with one key concept: Leviathan with security, Social Contract with general will.',
  ['La Crise du Muntu was written by:', ['Fabien Eboussi Boulaga', 'Marcien Towa', 'Paulin Hountondji', 'Kwame Nkrumah'], '1977.'],
  [['Timeline', 'Ordering thinkers and works in time.']],
  [
    { q: 'Order by date: Rawls, Hobbes, Rousseau, Machiavelli.', steps: ['Machiavelli **1513**.', 'Hobbes **1651**.', 'Rousseau **1762**.', 'Rawls **1971**.'] },
  ]),

  // ---------- 16. Essay clinic ----------
  L('aph-essay-1', 'aph-u6-essay', '16.1', 'Introductions and transitions that examiners reward', 16, ['Method'], [
    'An examiner-ready introduction: a short **lead-in**; **definitions** of the key terms in context; the **problem** clearly stated (often as a paradox or tension); the guiding **question**; and the **plan**.',
    'Transitions: end each part with a short **assessment** ("this view is strong but...") and a **question** that the next part answers. This creates the dialectical movement examiners look for.',
    'Avoid: vague openings, dictionary definitions unrelated to the problem, announcing a plan and then not following it.',
  ], 'aph-dissertation', 'The introduction promises; the development must keep the promise.',
  ['A good transition ends a part with:', ['an assessment and a question that leads to the next part', 'a new topic', 'the final answer', 'a list of names'], 'Dialectical movement.'],
  [['Lead-in', 'A short opening that leads into the theme.']],
  [
    { q: 'Write a lead-in and problem for "Is the state an obstacle to freedom?"', steps: ['Lead-in: **every day the state taxes, forbids and punishes, yet we call it the guardian of our rights**.', 'Problem: **is the state the enemy of freedom or its condition?**', 'Plan: **I. the state limits freedom (anarchism, Marx); II. it makes freedom possible (Hobbes, Rousseau); III. a limited, lawful state as the condition of real freedom**.'] },
  ]),
  L('aph-essay-2', 'aph-u6-essay', '16.2', 'Balance, examples and conclusions', 16, ['Method'], [
    '**Balance**: give the opposing view its strongest arguments; a weak "straw man" antithesis earns little. **Examples** should be relevant, precise and analysed: from history, Cameroon’s life, literature, science.',
    '**Conclusions**: briefly recall the steps of the argument, then **answer the question clearly**; an opening may follow, but no new arguments.',
    'Accuracy: spell names correctly (Rousseau, Nietzsche, Hountondji, Njoh-Mouelle), date works when useful, and quote briefly and exactly.',
  ], 'aph-essay-paragraph', 'Give your opponent their best argument, then answer it.',
  ['A "straw man" antithesis is weak because it:', ['presents the opposing view in a feeble form', 'is too long', 'uses examples', 'quotes authors'], 'Balance requires strength on both sides.'],
  [['Straw man', 'A distorted, weakened version of an opposing view.']],
  [
    { q: 'Write a conclusion for "Is the state an obstacle to freedom?"', steps: ['Recall: **the state limits liberty, but without it freedom is insecure**.', 'Answer: **the state is an obstacle only when unlimited; a lawful, limited state is the condition of freedom**.', 'Opening: **the real question is how citizens keep the state within its limits**.'] },
  ]),

  // ---------- 17. Final drills ----------
  L('aph-drills-1', 'aph-u6-drills', '17.1', 'Paper 1 marathons and dissertation workshops', 16, ['MCQ'], [
    'Paper 1 marathons: timed sets on **syllogism rules**, the **square of opposition**, **fallacies**, precise **quotations** and **timelines**. After each set, classify errors: knowledge gap, misreading, or confusion between similar authors.',
    'Dissertation workshops: practise **bold problematic introductions**, **dialectical transitions** (thesis, antithesis, synthesis), avoiding descriptive history-telling, and **clean conclusions**.',
    'Build a personal bank: ten problems, ten authors with key ideas, ten examples from Cameroon.',
  ], 'aph-final-term', 'Speed in Paper 1 comes from knowing authors and rules cold.',
  ['From two negative premises in a syllogism:', ['no conclusion follows', 'a negative conclusion follows', 'a positive conclusion follows', 'anything follows'], 'A syllogism rule.'],
  [['Marathon', 'A long, timed practice session.']],
  [
    { q: 'Build a quick bank entry for the topic "justice".', steps: ['Problem: **is justice equality or merit?**', 'Authors: **Aristotle (distributive, corrective), Rawls (veil of ignorance)**.', 'Example: **scholarships for able pupils versus grants for the poorest**.'] },
  ]),
  L('aph-drills-2', 'aph-u6-drills', '17.2', 'The mock, remediation and commentary clinics', 16, ['Method'], [
    'The mock examination simulates the real papers under official timing. Afterwards, **remediation seminars** correct common downfalls noted by the scheme: misinterpreting the **scope** of a question, an **unbalanced antithesis**, and careless **spelling of philosophers’ names**.',
    'Commentary clinics use texts from **previous GCE sessions**: practise text-directed operations (finding the thesis, tracing the argument, explaining concepts) and the critical evaluation.',
    'Final week: revise your banks, sleep, check the timetable (Papers 1 and 2 on Saturday 13 June, Paper 3 on Monday 15 June in 2026), and read every rubric carefully on the day.',
  ], 'aph-final-term', 'Correct the mock line by line: it is the cheapest lesson before the real examination.',
  ['A common downfall noted in mock scripts is:', ['misreading the scope of the question', 'having a plan', 'defining terms', 'concluding'], 'Read carefully.'],
  [['Scope', 'The exact range of what a question asks.']],
  [
    { q: 'A mock essay on "Is man free?" discussed only political freedom. What went wrong?', steps: ['The question’s scope is **human freedom in general** (determinism, consciousness), not only politics.', 'The essay **narrowed the question**.', 'Fix: **define freedom broadly and treat determinism versus free will, using politics only as one example**.'] },
  ]),
];
