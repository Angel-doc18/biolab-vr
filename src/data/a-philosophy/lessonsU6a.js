// A Level Philosophy lessons (0790), Upper Sixth, Term 1: the final-year
// plan, the social contract, power and authority, law and justice,
// ideologies, moral conscience, duty and consequences, evil and suffering,
// and bioethics and environmental ethics.

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

export const LESSONS_PHU6A = [
  // ---------- 1. Final year ----------
  L('aph-exam-1', 'aph-u6-exam', '1.1', 'The final year: papers and plan', 14, ['Method'], [
    'In June 2026: **Paper 1** (multiple choice, 1½ hours) and **Paper 2** (3 hours) on Saturday 13 June; **Paper 3** (3 hours) on Monday 15 June. Two long papers in two days demand stamina: practise full timed papers.',
    'The scheme completes all theory by **week 22**: Term 1 political philosophy and ethics; Term 2 African philosophy, prescribed-text commentary and examination drills; Term 3 marathons, the mock and remediation.',
    'Lower Sixth topics remain examinable: keep revising anthropology and epistemology alongside the new work, because many questions link them (freedom and the state, conscience and the unconscious).',
  ], 'aph-gce-0790', 'Upper Sixth questions often build on Lower Sixth ideas: keep both alive.',
  ['When was Paper 3 of A Level Philosophy in 2026?', ['Monday 15 June, morning', 'Saturday 13 June, morning', 'Saturday 13 June, afternoon', 'Friday 12 June'], '3 hours.'],
  [['Remediation', 'Targeted correction of weaknesses found in a test.']],
  [
    { q: 'Link a Lower Sixth topic to an Upper Sixth one.', steps: ['Lower Sixth: **freedom and determinism (Sartre, Spinoza)**.', 'Upper Sixth: **the state and liberty (Rousseau, anarchism)**.', 'Link: **is the state a condition of freedom or a limit on it?**'] },
  ]),
  L('aph-exam-2', 'aph-u6-exam', '1.2', 'Diagnostic: format, commentary steps and logical errors', 14, ['Method'], [
    'The diagnostic checks: the **dissertation format** (problematic introduction, dialectical development, transitions, justified conclusion); the **commentary steps** (theme, problem, thesis, moments, explanation, evaluation); and **logical errors** (contradictions, hasty generalisation, irrelevant examples).',
    'The main habit to remove early is **descriptive narration**: telling what philosophers said, one after another, without using them to answer the question.',
    'A quick self-check after writing: Did I state a problem? Does each paragraph answer the question? Did I explain every quotation? Did I conclude with a clear answer?',
  ], 'aph-dissertation', 'Use philosophers as arguments in your case, not as chapters of a history.',
  ['Descriptive narration in an essay means:', ['retelling philosophers’ views without using them to answer the question', 'giving examples', 'defining terms', 'concluding'], 'A common fault.'],
  [['Narration', 'Telling a sequence of views or events without argument.']],
  [
    { q: 'Turn narration into argument: "Hobbes said man is a wolf to man. Locke said man has natural rights."', steps: ['Ask what each **shows about the question**, e.g. "Why obey the state?".', 'Hobbes: **we obey because without the state life is war: security grounds obedience**.', 'Locke: **but obedience is owed only to a state that protects our rights**.', 'Now the two views **argue with each other**.'] },
  ]),

  // ---------- 2. Social contract ----------
  L('aph-state-1', 'aph-u6-state', '2.1', 'The state of nature and the social contract', 20, ['Politics'], [
    'Social contract theories explain the state’s **legitimacy** by imagining people in a **state of nature** (without government) agreeing to form a political society.',
    '**Thomas Hobbes** (*Leviathan*, 1651): in the state of nature, equal and fearful people live in a **war of all against all**, and life is "solitary, poor, nasty, brutish, and short". To escape, they give up their natural liberty to an absolute **sovereign** who guarantees peace. Obedience is the price of **security**.',
    '**John Locke** (*Second Treatise of Government*, 1689): the state of nature is governed by natural law; people have natural rights to **life, liberty and property**. They create government to **protect** these rights; if it violates them, the people may **resist**.',
    '**Jean-Jacques Rousseau** (*The Social Contract*, 1762): "Man is born free, and everywhere he is in chains." A legitimate state unites citizens under the **general will**, aimed at the common good; by obeying laws they make together, they remain free.',
  ], 'aph-social-contract', 'Hobbes for security, Locke for rights, Rousseau for collective freedom.',
  ['For Locke, government is created to:', ['protect natural rights to life, liberty and property', 'abolish rights', 'serve the king', 'wage war'], 'Second Treatise, 1689.'],
  [['State of nature', 'The hypothetical condition of people without government.'], ['Social contract', 'The agreement by which people form a political society.'], ['General will', 'Rousseau’s will of the people aimed at the common good.']],
  [
    { q: 'Compare Hobbes and Locke on whether citizens may resist the state.', steps: ['Hobbes: **almost never**: resistance returns us to the war of all against all.', 'Locke: **yes, when government violates natural rights**: it has broken the trust.', 'This difference shapes **absolutism versus constitutional government**.'] },
  ]),
  L('aph-state-2', 'aph-u6-state', '2.2', 'Sovereignty, the separation of powers and forms of the state', 18, ['Politics'], [
    '**Sovereignty** is supreme authority within a territory. For Hobbes it belongs to the ruler; for Rousseau it belongs inalienably to the **people**.',
    '**Montesquieu** (*The Spirit of the Laws*, 1748) argued that liberty requires the **separation of powers**: legislative, executive and judicial powers held by different bodies, so that "power checks power". Modern constitutions, including Cameroon’s, adopt this principle.',
    'Forms of the state: by structure, **unitary** or **federal**; by who rules, **monarchy**, **aristocracy**, **democracy** (Aristotle also named their corrupt forms: tyranny, oligarchy, mob rule). Aristotle held that the city exists **by nature**, against contract theories that see the state as artificial.',
  ], 'aph-separation-powers', 'Separation of powers protects liberty by dividing power, not by abolishing it.',
  ['Montesquieu argued that liberty needs:', ['the separation of legislative, executive and judicial powers', 'an absolute monarch', 'no laws', 'one party'], 'The Spirit of the Laws, 1748.'],
  [['Sovereignty', 'Supreme authority within a territory.'], ['Separation of powers', 'Dividing state power among separate bodies.']],
  [
    { q: 'Use the separation of powers in an essay on "Does the state threaten liberty?"', steps: ['Thesis: **concentrated power tends to abuse (Montesquieu)**.', 'Answer: **dividing power lets each branch check the others**.', 'So **the state threatens liberty mainly when its powers are not separated and limited**.'] },
  ]),

  // ---------- 3. Power and authority ----------
  L('aph-power-1', 'aph-u6-power', '3.1', 'Machiavelli’s political realism', 16, ['Politics'], [
    '**Niccolò Machiavelli** wrote *The Prince* in **1513** (published 1532). Breaking with moral treatises on the good ruler, he studied how power is actually **won and kept**.',
    'Key ideas: the prince must have *virtù* (energy, skill, decisiveness) to master *fortuna* (chance); he should appear virtuous but be ready to act otherwise when the state requires; it is safer to be **feared than loved** if one cannot be both, but he must avoid being hated. Politics has its own logic, distinct from private morality.',
    'Evaluation: Machiavelli is praised for **realism** and for founding political science; he is criticised for separating politics from ethics and for seeming to justify any means (the "end justifies the means" is a later summary, not his phrase).',
  ], 'aph-machiavelli', 'Machiavelli describes how power works; whether it should work so is the ethical question.',
  ['For Machiavelli, virtù means:', ['the ruler’s energy and skill to master fortune', 'Christian humility', 'obedience', 'wealth'], 'Against fortuna.'],
  [['Political realism', 'Studying power as it is, not as it ought to be.'], ['Virtù', 'Machiavelli’s political skill and decisiveness.'], ['Fortuna', 'Chance or luck in political affairs.']],
  [
    { q: 'Use Machiavelli in an essay on "Must politics be moral?"', steps: ['Thesis: **politics has its own necessities; a ruler bound by private morality may ruin the state (Machiavelli)**.', 'Antithesis: **power without morality becomes tyranny; legitimacy needs justice (Rousseau, Kant)**.', 'Synthesis: **political ethics of responsibility (Weber): weigh consequences without abandoning principles**.'] },
  ]),
  L('aph-power-2', 'aph-u6-power', '3.2', 'Weber’s authority and legitimate violence', 18, ['Politics'], [
    '**Max Weber** (*Politics as a Vocation*, 1919) defined the state as the community that successfully claims the **monopoly of the legitimate use of physical force** within a territory.',
    'He distinguished three ideal types of **legitimate authority**:\n- **traditional**: based on custom and inherited status (chiefs, monarchs)\n- **charismatic**: based on belief in a leader’s exceptional qualities (prophets, liberation heroes)\n- **legal-rational**: based on impersonal rules and offices (modern bureaucracy and constitutions).',
    'State force is legitimate when it is **lawful, necessary and proportionate**, used to protect rights and order. **Terrorism** is violence by non-state or state actors that deliberately targets civilians to spread fear outside the law. Rousseau already argued that force does not make right: yielding to force is necessity, not duty.',
  ], 'aph-weber-authority', 'Authority is power that the governed accept as rightful.',
  ['Legal-rational authority rests on:', ['impersonal rules and offices', 'custom alone', 'personal charisma', 'force alone'], 'Modern states.'],
  [['Authority', 'Power recognised as legitimate.'], ['Legitimacy', 'The rightfulness of power as accepted by those subject to it.'], ['Monopoly of legitimate force', 'Weber’s defining feature of the state.']],
  [
    { q: 'Classify authority: a village chief, a liberation leader, a minister appointed under the constitution.', steps: ['Village chief: **traditional**.', 'Liberation leader: **charismatic**.', 'Minister: **legal-rational**.', 'Real authority often **mixes** types.'] },
  ]),

  // ---------- 4. Justice ----------
  L('aph-justice-1', 'aph-u6-justice', '4.1', 'Natural law, positive law and Aristotle’s justice', 18, ['Politics'], [
    '**Natural law** is a standard of right grounded in reason or nature, above human legislation (the Stoics, Aquinas, Grotius). In Sophocles’ *Antigone*, Antigone buries her brother against King Creon’s decree, appealing to the "unwritten laws" of the gods.',
    '**Positive law** is law laid down by human authorities. **Legal positivists** (Austin, Hans **Kelsen**, *Pure Theory of Law*, 1934) separate what the law **is** from what it **ought** to be. Critics point to unjust legal systems (apartheid, Nazi laws) to argue that law needs a moral foundation.',
    '**Aristotle** (*Nicomachean Ethics*, book V) distinguished **distributive justice**, sharing goods and honours in proportion to merit, and **corrective justice**, restoring equality after a wrong (compensation, punishment). Justice also includes **equity**: correcting the law where its generality fails a particular case.',
  ], 'aph-justice', 'Ask of every law both questions: is it valid, and is it just?',
  ['Antigone appeals against Creon to:', ['unwritten divine laws', 'the written law', 'the army', 'the market'], 'Natural law.'],
  [['Natural law', 'A standard of right above human law.'], ['Positive law', 'Law laid down by human authorities.'], ['Equity', 'Correcting the law’s generality in a particular case.']],
  [
    { q: 'Is it ever right to disobey an unjust law?', steps: ['Thesis: **law must be obeyed for order and security (Hobbes; Socrates’ refusal to flee)**.', 'Antithesis: **a law contrary to natural justice has no moral authority (Antigone, Martin Luther King)**.', 'Synthesis: **civil disobedience: open, non-violent, accepting the penalty, aimed at a more just law**.'] },
  ]),
  L('aph-justice-2', 'aph-u6-justice', '4.2', 'Rawls’ theory of justice and human rights', 18, ['Politics'], [
    '**John Rawls** (*A Theory of Justice*, 1971) asked which principles free and equal people would choose in an **original position** behind a **veil of ignorance**, not knowing their class, talents, sex or beliefs. Choosing impartially, they would adopt:\n- **first principle**: equal basic liberties for all\n- **second principle**: social and economic inequalities are allowed only if they are attached to positions open to all under **fair equality of opportunity** and are to the greatest benefit of the **least advantaged** (the **difference principle**).',
    'Critics: Robert Nozick (*Anarchy, State, and Utopia*, 1974) defended property rights against redistribution; communitarians said Rawls ignores community and tradition.',
    '**Human rights**, proclaimed in the **Universal Declaration of Human Rights** (1948) and the African Charter on Human and Peoples’ Rights (1981), express the idea that every person has dignity and claims that states must respect.',
  ], 'aph-rawls', 'Behind the veil, you choose rules as if you could be anyone, including the poorest.',
  ['Rawls’ difference principle allows inequalities only if they:', ['benefit the least advantaged', 'reward the rich', 'are inherited', 'are traditional'], 'Justice as fairness.'],
  [['Veil of ignorance', 'Rawls’ device of choosing principles without knowing one’s own place.'], ['Difference principle', 'Inequalities must benefit the worst off.']],
  [
    { q: 'Apply Rawls: should Cameroon spend more on rural schools than urban ones?', steps: ['Behind the veil, you might be born in a **remote village with poor schools**.', 'You would choose rules that **raise the prospects of the least advantaged**.', 'So **extra spending on disadvantaged schools is justified** by the difference principle and fair opportunity.'] },
  ]),

  // ---------- 5. Ideologies ----------
  L('aph-ideologies-1', 'aph-u6-ideologies', '5.1', 'Democracy, liberalism, capitalism and socialism', 18, ['Politics'], [
    '**Democracy** (rule by the people) may be direct (Athens) or representative. Its value: equal citizenship, accountability and peaceful change of rulers; its dangers: demagogy and the **tyranny of the majority** (Tocqueville, J. S. Mill). Churchill’s quip that it is the worst form of government except all the others sums up a common judgement.',
    '**Liberalism** defends individual rights and limited government (Locke, Mill’s *On Liberty*, 1859: the only ground for restricting liberty is to prevent harm to others). **Capitalism** organises the economy through private property, markets and profit (Adam Smith, *The Wealth of Nations*, 1776).',
    '**Socialism** seeks collective or social ownership and less inequality. **Marx** (with Engels, *The Communist Manifesto*, 1848; *Capital*, 1867) developed **historical materialism**: the economic **base** (forces and relations of production) shapes the **superstructure** (law, politics, religion, ideas); history moves by **class struggle**, and capitalism exploits workers by appropriating **surplus value**.',
  ], 'aph-ideologies', 'Each ideology answers the same questions: who owns, who rules, and for whom?',
  ['Mill’s harm principle says liberty may be restricted only to:', ['prevent harm to others', 'protect people from themselves always', 'please the majority', 'serve the state'], 'On Liberty, 1859.'],
  [['Historical materialism', 'Marx’s theory that material production shapes history.'], ['Surplus value', 'For Marx, value produced by workers beyond their wages.'], ['Tyranny of the majority', 'Oppression of minorities by democratic majorities.']],
  [
    { q: 'Plan "Is democracy the best form of government?"', steps: ['I. **Yes: equality, accountability, peaceful change, rights**.', 'II. **Limits: demagogy, tyranny of the majority, poor information, money in politics**.', 'III. **Democracy is best when limited by rights, the rule of law and educated citizens**.'] },
  ]),
  L('aph-ideologies-2', 'aph-u6-ideologies', '5.2', 'Totalitarianism and anarchism', 16, ['Politics'], [
    '**Hannah Arendt** (*The Origins of Totalitarianism*, 1951) analysed Nazism and Stalinism as a new form of rule: a single **ideology** claiming to explain history, a party-state, **terror**, mass propaganda and the destruction of private and public spaces where people can think and act together.',
    '**Anarchism** rejects the state and coercive authority as illegitimate. **Pierre-Joseph Proudhon** (*What is Property?*, 1840) declared that "property is theft" and proposed mutual cooperation; **Mikhail Bakunin** opposed both the state and Marx’s dictatorship of the proletariat.',
    'Evaluation: totalitarianism shows the danger of a state without limits; anarchism reminds us that power must justify itself, but critics doubt that order and rights could be protected without any state.',
  ], 'aph-totalitarian', 'Totalitarianism and anarchism are opposite extremes: the state as everything, and the state as nothing.',
  ['Arendt’s Origins of Totalitarianism analysed:', ['Nazism and Stalinism', 'ancient Athens', 'the Roman Republic', 'medieval kingdoms'], '1951.'],
  [['Totalitarianism', 'Rule seeking total control of society through ideology and terror.'], ['Anarchism', 'The rejection of the state and coercive authority.']],
  [
    { q: 'Use Arendt and Proudhon in an essay on "Is the state necessary?"', steps: ['Proudhon: **the state oppresses; free association could replace it**.', 'Arendt: **an unlimited state destroys freedom: so the problem is unlimited power**.', 'Synthesis: **a limited, lawful state is necessary to protect the plurality Arendt values**.'] },
  ]),

  // ---------- 6. Conscience ----------
  L('aph-conscience-1', 'aph-u6-conscience', '6.1', 'Morality and moral conscience', 16, ['Ethics'], [
    '**Morality** is the set of rules and values that distinguish good from evil in conduct; **ethics** is often the critical reflection on morality and its foundations. A **fact** says what is; a **value** says what ought to be (Hume warned against deriving "ought" from "is").',
    '**Moral conscience** is the inner power to judge one’s own actions as good or evil: it **guides** before acting and **judges** after (remorse, satisfaction).',
    'Socrates held that **virtue is knowledge**: no one does wrong willingly, only from ignorance of the good. Aristotle replied that we can know the good and still fail through weakness of will (*akrasia*); virtue needs **habit** as well as knowledge.',
  ], 'aph-conscience', 'Conscience both advises before the act and judges after it.',
  ['Socrates held that wrongdoing comes from:', ['ignorance of the good', 'free choice of evil', 'the body', 'the gods'], 'Virtue is knowledge.'],
  [['Moral conscience', 'The inner judgement of right and wrong.'], ['Akrasia', 'Weakness of will: acting against one’s better judgement.']],
  [
    { q: 'A trader knows cheating is wrong but cheats anyway. Socrates or Aristotle?', steps: ['Socrates would say **the trader does not truly know cheating is bad for them**.', 'Aristotle would say **this is akrasia: knowledge without the habit of virtue**.', 'Aristotle’s view seems closer to **experience**.'] },
  ]),
  L('aph-conscience-2', 'aph-u6-conscience', '6.2', 'Is conscience innate or acquired?', 18, ['Ethics'], [
    '**Innatist view**: **Rousseau** (*Emile*, 1762) called conscience a "divine instinct", an innate principle of justice in every heart, prior to education. Kant spoke of the moral law within us that fills the mind with awe.',
    '**Acquired views**:\n- **Durkheim**: moral rules are **social facts**; conscience is society speaking within us\n- **Freud**: conscience is largely the **superego**, the internalised authority of parents and society\n- **Nietzsche** (*On the Genealogy of Morals*, 1887): morality has a history of power and resentment ("slave morality").',
    'A synthesis: the **capacity** for moral judgement may be universal, while its **content** is shaped by culture and upbringing, and can be refined by reflection.',
  ], 'aph-conscience-sources', 'Distinguish the capacity for conscience from the content of particular moral rules.',
  ['For Durkheim, moral conscience is mainly:', ['society speaking within the individual', 'a divine instinct', 'pure reason', 'an illusion'], 'Social facts.'],
  [['Innate', 'Present from birth, not learned.'], ['Superego', 'Freud’s internalised moral authority.']],
  [
    { q: 'Use an example from different cultures to argue both sides.', steps: ['Acquired: **customs about dress, food and marriage differ widely**: much moral content is cultural.', 'Innate: **almost every culture condemns murder of innocents and values care for children**.', 'Synthesis: **a universal moral sense, given varied content by society**.'] },
  ]),

  // ---------- 7. Duty and consequences ----------
  L('aph-ethics-1', 'aph-u6-ethics', '7.1', 'Kant: duty for duty’s sake', 20, ['Ethics'], [
    '**Immanuel Kant** (*Groundwork of the Metaphysics of Morals*, 1785) held that the only thing good without qualification is a **good will**: one that acts **from duty**, out of respect for the moral law, not from inclination or for reward.',
    'The moral law is a **categorical imperative**, binding unconditionally (unlike **hypothetical** imperatives: "if you want X, do Y"). Formulations:\n- act only on that maxim which you can at the same time **will to become a universal law**\n- act so as to treat humanity, in yourself and others, **always as an end and never merely as a means**.',
    'Example: a false promise to borrow money cannot be universalised (no one would believe promises), so it is forbidden. Critics: Kant’s rules seem **rigid** (he denied a right to lie even to a murderer at the door) and give little help when duties conflict.',
  ], 'aph-kant-mill', 'Kant asks: could everyone act on my rule, and do I respect each person as an end?',
  ['The categorical imperative is:', ['an unconditional moral command', 'advice for reaching a goal', 'a law of nature', 'a religious ritual'], 'Not hypothetical.'],
  [['Good will', 'A will that acts from duty.'], ['Categorical imperative', 'An unconditional moral command.'], ['Maxim', 'The personal rule behind an action.']],
  [
    { q: 'Test the maxim "I will copy homework when I am short of time" with the categorical imperative.', steps: ['Universalise: **everyone copies when short of time**.', 'Then homework would **lose its point** and no one could trust work as their own.', 'The maxim **cannot be universalised without contradiction**, so it is forbidden.'] },
  ]),
  L('aph-ethics-2', 'aph-u6-ethics', '7.2', 'Utilitarianism: Bentham and Mill', 18, ['Ethics'], [
    '**Utilitarianism** judges actions by their **consequences**: the right act produces the **greatest happiness of the greatest number**. Jeremy **Bentham** (*An Introduction to the Principles of Morals and Legislation*, 1789) held that pleasure and pain govern us, and proposed a **felicific calculus**: intensity, duration, certainty, nearness, fecundity, purity and extent.',
    'John Stuart **Mill** (*Utilitarianism*, 1863) distinguished **higher** (intellectual, moral) from **lower** pleasures: "better to be Socrates dissatisfied than a fool satisfied".',
    'Comparison: Kant’s **deontology** judges the act and intention; utilitarianism (a **teleological** or consequentialist ethics) judges the result. Objections to utilitarianism: it can justify sacrificing an innocent for the majority, and consequences are hard to predict. **Aristotle’s virtue ethics** offers a third path: ask what a person of good character would do.',
  ], 'aph-utilitarian', 'Kant looks at the rule and the person; Mill looks at the results for everyone affected.',
  ['Mill said it is better to be:', ['Socrates dissatisfied than a fool satisfied', 'a pig satisfied', 'rich than wise', 'feared than loved'], 'Higher pleasures.'],
  [['Utilitarianism', 'The ethics of the greatest happiness for the greatest number.'], ['Consequentialism', 'Judging actions by their results.'], ['Deontology', 'Ethics of duty and rules.']],
  [
    { q: 'A doctor could save five patients by taking organs from one healthy visitor. What would a utilitarian and Kant say?', steps: ['Crude utilitarian sum: **five lives outweigh one**.', 'Kant: **using the visitor merely as a means is absolutely forbidden**.', 'Most utilitarians reply that **such acts would destroy trust in hospitals**, causing more harm: rule utilitarianism.'] },
  ]),

  // ---------- 8. Evil ----------
  L('aph-evil-1', 'aph-u6-evil', '8.1', 'Kinds of evil and theodicy', 16, ['Ethics'], [
    '**Leibniz** (*Theodicy*, 1710) distinguished three kinds of evil:\n- **metaphysical evil**: the imperfection of every finite creature\n- **physical evil**: pain and suffering (including from natural disasters)\n- **moral evil**: wrongdoing freely chosen (sin, crime, injustice).',
    'A **theodicy** justifies God’s goodness despite evil: Leibniz’s best possible world; Augustine’s view that evil is a privation of good and that moral evil comes from **free will**; the "soul-making" view that suffering can build virtue.',
    'Hannah Arendt’s report on Adolf Eichmann (1963) spoke of the **banality of evil**: great crimes committed by ordinary people who fail to think, obeying orders. This shifts the question from metaphysics to **responsibility**.',
  ], 'aph-evil', 'Separate the kinds of evil: free will explains moral evil far better than earthquakes.',
  ['Moral evil is:', ['wrong freely done by human beings', 'an earthquake', 'the imperfection of creatures', 'disease'], 'Leibniz.'],
  [['Metaphysical evil', 'The imperfection of finite beings.'], ['Banality of evil', 'Arendt’s idea that great evil can come from thoughtless obedience.']],
  [
    { q: 'Classify: a flood; a dishonest official; human mortality.', steps: ['Flood: **physical (natural) evil**.', 'Dishonest official: **moral evil**.', 'Mortality: **metaphysical evil**, the limit of a finite being (and physical when it causes suffering).'] },
  ]),
  L('aph-evil-2', 'aph-u6-evil', '8.2', 'Facing suffering and death: Nietzsche and Camus', 18, ['Ethics'], [
    '**Friedrich Nietzsche** rejected consolations that devalue this life. He urged **amor fati**, love of one’s fate, saying yes to life with its suffering; suffering can strengthen: "what does not kill me makes me stronger" (*Twilight of the Idols*, 1888).',
    '**Albert Camus** (*The Myth of Sisyphus*, 1942) described the **absurd**: the clash between the human demand for meaning and a silent world. He rejected both suicide and religious "leaps"; the answer is **revolt**, freedom and passion. Sisyphus, endlessly pushing his rock, can be imagined happy.',
    'Other attitudes: the Stoics’ acceptance of what does not depend on us (Epictetus); Epicurus’ argument that death is "nothing to us", since where death is we are not.',
  ], 'aph-absurd', 'Camus does not deny suffering; he denies that it removes the value of living.',
  ['For Camus, the absurd is:', ['the clash between our demand for meaning and a silent world', 'the meaning of life', 'a scientific law', 'a religious belief'], 'The Myth of Sisyphus.'],
  [['Absurd', 'Camus’ term for the gap between human desire for meaning and the world.'], ['Amor fati', 'Nietzsche’s love of one’s fate.']],
  [
    { q: 'Write a thesis paragraph idea on "Is suffering always an evil?"', steps: ['Idea: **suffering can be a source of growth and lucidity**.', 'Author: **Nietzsche: what does not kill me makes me stronger**.', 'Example: **a student who fails, then works harder and succeeds**.', 'Link: **so suffering is not always only an evil**.'] },
  ]),

  // ---------- 9. Bioethics ----------
  L('aph-bioethics-1', 'aph-u6-bioethics', '9.1', 'Principles of bioethics: abortion, euthanasia and surrogacy', 20, ['Ethics'], [
    'Beauchamp and Childress’s four principles of biomedical ethics: **autonomy** (respect informed choices), **beneficence** (do good), **non-maleficence** (first, do no harm, from the Hippocratic tradition) and **justice** (fair access and treatment).',
    '**Abortion**: the debate weighs the moral status of the foetus (when does a human life with rights begin?) against the woman’s autonomy, health and circumstances. **Euthanasia**: active (deliberately ending life) or passive (withholding useless treatment); defenders cite autonomy and relief of suffering, critics the sanctity of life, risks to the vulnerable, and the alternative of **palliative care**.',
    '**Surrogate motherhood** raises questions of using a woman’s body, consent and payment, and the child’s interests. Laws differ between countries; Cameroon’s law strictly limits abortion and does not permit euthanasia.',
  ], 'aph-bioethics', 'Name the principles in conflict before choosing a side.',
  ['Non-maleficence means:', ['first, do no harm', 'do whatever the patient asks', 'treat only the rich', 'never treat'], 'Hippocratic tradition.'],
  [['Autonomy', 'The right of a competent person to make informed choices.'], ['Palliative care', 'Care that relieves pain and suffering without aiming to cure.'], ['Euthanasia', 'Deliberately ending a life to relieve suffering.']],
  [
    { q: 'Identify the principles in conflict in a request for euthanasia.', steps: ['**Autonomy**: the patient asks to die.', '**Non-maleficence**: killing seems the greatest harm.', '**Beneficence**: ending unbearable suffering; palliative care may meet this without killing.'] },
  ]),
  L('aph-bioethics-2', 'aph-u6-bioethics', '9.2', 'Environmental ethics and future generations', 18, ['Ethics'], [
    '**Anthropocentrism** holds that only humans have intrinsic value and nature is a resource. **Biocentrism** extends value to all living beings; **ecocentrism** to ecosystems. Aldo **Leopold** (*A Sand County Almanac*, 1949) proposed a **land ethic**: a thing is right when it tends to preserve the integrity, stability and beauty of the biotic community.',
    'Hans **Jonas** argued that our technological power gives us duties to **future generations**. The **Brundtland Report** (1987) defined sustainable development as meeting present needs without compromising future generations’ ability to meet theirs.',
    'In Cameroon: deforestation in the south and east, wildlife poaching, plastic waste in cities, and the use of firewood. Ethical answers combine development and protection: sustainable forestry, protected areas such as national parks, and fair treatment of local communities.',
  ], 'aph-environment', 'Environmental ethics asks who counts: humans now, humans later, animals, or whole ecosystems.',
  ['Aldo Leopold’s land ethic appears in:', ['A Sand County Almanac (1949)', 'Leviathan', 'Utilitarianism', 'The Prince'], 'The biotic community.'],
  [['Anthropocentrism', 'The view that only humans have intrinsic value.'], ['Sustainable development', 'Meeting present needs without compromising future generations.']],
  [
    { q: 'Plan "Do we have duties towards nature?"', steps: ['I. **Only indirect duties: harming nature harms humans (anthropocentrism, Kant)**.', 'II. **Direct duties: living beings and ecosystems have value (Leopold)**.', 'III. **Responsibility for the future (Jonas) unites both: protect nature for its own sake and for generations to come**.'] },
  ]),
];
