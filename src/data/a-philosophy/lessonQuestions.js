// Extra questions for the end of the A Level Philosophy lessons (0790), so
// that every lesson ends with at least five questions on what it teaches.
//
// Convention: the correct option is written first; options are shuffled when shown.
import { QUESTIONS_U6 } from './lessonQuestionsU6';

const Q = (q, a, why) => ({ q, a, why });

export const LESSON_QUESTIONS = {
  // ---------- Lower Sixth ----------
  'aph-method-1': [
    Q('The Upper Sixth covers mainly:', ['political philosophy, ethics and African philosophy', 'only logic', 'only metaphysics', 'only history'], 'Lower Sixth: man and knowledge.'),
    Q('Examiners penalise:', ['narrating philosophers’ lives instead of arguing', 'defining terms', 'stating a problem', 'a justified conclusion'], 'Argue, do not narrate.'),
    Q('Philosophy in the Arts series has how many periods a week?', ['6', '2', '10', '1'], 'The scheme’s allocation.'),
    Q('The written work of A Level Philosophy consists mainly of:', ['dissertations and text commentaries', 'lab reports', 'maps', 'calculations'], 'Essays and commentaries.'),
  ],
  'aph-method-2': [
    Q('Knowledge from experience is called:', ['a posteriori', 'a priori', 'innate', 'necessary'], 'After experience.'),
    Q('A proposition that could have been otherwise is:', ['contingent', 'necessary', 'a priori', 'analytic'], 'Not necessary.'),
    Q('A good summary keeps:', ['the logical links and main claim', 'all the examples', 'the exact wording', 'nothing'], 'Drop decoration.'),
    Q('A premise is:', ['a statement offered as a reason for a conclusion', 'the conclusion', 'an example', 'a question'], 'Part of an argument.'),
  ],
  'aph-intro-1': [
    Q('Philosophy began in the 6th century BCE in:', ['Ionia, in Greek cities such as Miletus', 'Rome', 'Paris', 'China only'], 'Thales, Anaximander.'),
    Q('For Plato and Aristotle, philosophy begins in:', ['wonder', 'fear', 'wealth', 'law'], 'Thaumazein.'),
    Q('Socrates’ method was based on:', ['questioning', 'experiments', 'revelation', 'force'], 'Dialogue.'),
    Q('Pythagoras is said to have called himself:', ['a lover of wisdom rather than a wise man', 'a god', 'a king', 'a prophet'], 'Philosophos.'),
  ],
  'aph-intro-2': [
    Q('Philosophy is critical because it:', ['examines beliefs and their justifications', 'complains about everything', 'rejects science', 'accepts tradition'], 'Examination.'),
    Q('Science studies:', ['a limited field of facts by observation and experiment', 'all values', 'only God', 'nothing measurable'], 'Testable laws.'),
    Q('Religion rests mainly on:', ['faith and revelation', 'experiments', 'proofs only', 'law'], 'Belief and worship.'),
    Q('Philosophy may reflect on religious questions such as:', ['the existence of God and the problem of evil', 'the price of goods', 'the weather', 'grammar only'], 'By reason.'),
  ],
  'aph-dissertation-1': [
    Q('The lead-in of an introduction should:', ['enter the theme briefly, perhaps through a paradox or fact', 'begin "since the dawn of time"', 'give the conclusion', 'list authors'], 'Short and relevant.'),
    Q('The plan is announced:', ['at the end of the introduction', 'in the conclusion only', 'never', 'in every paragraph'], 'Thesis and antithesis.'),
    Q('Defining the key terms helps to:', ['reveal the problem in the question', 'fill space', 'avoid the problem', 'replace arguments'], 'Precision.'),
    Q('A question without a problem leads to:', ['a descriptive essay without real argument', 'a perfect essay', 'a short conclusion', 'a good plan'], 'No tension.'),
  ],
  'aph-dissertation-2': [
    Q('Each paragraph should end with:', ['a link back to the question', 'a new topic', 'a quotation only', 'nothing'], 'Stay relevant.'),
    Q('The conclusion must not:', ['introduce new arguments', 'answer the question', 'recall the argument', 'open a wider question'], 'Only an opening is allowed.'),
    Q('Besides the dialectical plan, an essay may use:', ['an analytic or notional plan that answers the problem', 'no plan', 'a list', 'a story'], 'Other plans exist.'),
    Q('An example in a paragraph should be:', ['analysed to support the argument', 'just named', 'very long', 'invented as a quote'], 'Illustrate.'),
  ],
  'aph-man-1': [
    Q('Plato’s Phaedo presents the body as:', ['a prison of the soul', 'the whole self', 'eternal', 'divine'], 'Dualism.'),
    Q('Descartes located mind-body interaction in:', ['the pineal gland', 'the heart', 'the liver', 'the lungs'], 'Unconvincing to many.'),
    Q('Descartes’ Meditations appeared in:', ['1641', '1747', '1807', '1943'], 'First philosophy.'),
    Q('In the Republic, justice in the soul is:', ['harmony of its parts under reason', 'rule of appetite', 'rule of spirit', 'no rule'], 'Tripartite soul.'),
  ],
  'aph-man-2': [
    Q('Spinoza held that mind and body are:', ['two aspects of one substance', 'two separate substances', 'illusions', 'the same as God only'], 'Dual-aspect monism.'),
    Q('The "hard problem" of consciousness asks:', ['why brain processes are felt from the inside', 'how neurons fire', 'how big the brain is', 'how to cure disease'], 'Subjective experience.'),
    Q('Marx held that consciousness is shaped by:', ['social and economic life', 'innate ideas only', 'God', 'the stars'], 'Historical materialism.'),
    Q('Democritus explained the soul by:', ['fine atoms', 'Forms', 'numbers', 'God'], 'Ancient materialism.'),
  ],
  'aph-consciousness-1': [
    Q('Methodical doubt led Descartes to:', ['the certainty of the cogito', 'scepticism forever', 'materialism', 'faith alone'], 'One certainty.'),
    Q('Intentionality means consciousness is:', ['always consciousness of something', 'empty', 'unconscious', 'physical'], 'Husserl, Sartre.'),
    Q('Sartre’s Being and Nothingness appeared in:', ['1943', '1637', '1899', '1971'], 'Existentialism.'),
    Q('Reflective consciousness is:', ['knowing that one knows', 'sleeping', 'instinct', 'reflex'], 'Turning back on itself.'),
  ],
  'aph-consciousness-2': [
    Q('Freud called dreams:', ['the royal road to the unconscious', 'meaningless noise', 'divine messages', 'memories only'], 'Interpretation of Dreams.'),
    Q('The id follows:', ['the pleasure principle', 'the reality principle', 'moral law', 'logic'], 'Drives.'),
    Q('The Ego and the Id was published in:', ['1923', '1899', '1943', '1807'], 'Later model.'),
    Q('Popper questioned psychoanalysis because:', ['it is hard to falsify', 'it is mathematical', 'it is too simple', 'it uses experiments'], 'Explains everything.'),
  ],
  'aph-society-1': [
    Q('Victor of Aveyron was:', ['a feral child found in France in 1800', 'a philosopher', 'a king', 'a scientist'], 'Raised without society.'),
    Q('Mbiti’s phrase "I am because we are" expresses:', ['African communal thought', 'Cartesian individualism', 'materialism', 'anarchism'], '1969.'),
    Q('Aristotle wrote that man is political in:', ['the Politics', 'the Meditations', 'the Leviathan', 'the Prince'], 'Zoon politikon.'),
    Q('A danger of excessive communalism is:', ['crushing the individual', 'too much freedom', 'isolation', 'nothing'], 'Balance needed.'),
  ],
  'aph-society-2': [
    Q('In Hegel’s dialectic, the master becomes:', ['dependent on the slave', 'fully free', 'a slave at once', 'a god'], 'Reversal.'),
    Q('No Exit (Huis clos) is a work by:', ['Sartre', 'Hegel', 'Camus', 'Freud'], '1944.'),
    Q('For Sartre, under the look of the other I feel:', ['shame, as an object', 'nothing', 'joy only', 'invisible'], 'Being-for-others.'),
    Q('Sartre also held that the other is:', ['necessary to know myself', 'useless', 'always an enemy', 'imaginary'], 'Mediator between me and me.'),
  ],
  'aph-freedom-1': [
    Q('Laplace imagined an intelligence that could:', ['predict everything from present forces and positions', 'change the past', 'create matter', 'end causality'], 'Physical determinism, 1814.'),
    Q('Determinism differs from fatalism because:', ['our decisions can be among the causes', 'nothing has causes', 'destiny rules', 'chance decides'], 'Effort matters.'),
    Q('Spinoza’s Ethics appeared in:', ['1677', '1641', '1762', '1807'], 'Posthumously.'),
    Q('Social determinism explains behaviour by:', ['upbringing, class and culture', 'genes', 'stars', 'free will'], 'Durkheim, Marx.'),
  ],
  'aph-freedom-2': [
    Q('For Sartre, anguish comes from:', ['awareness of total responsibility', 'illness', 'poverty', 'fear of animals'], 'Freedom.'),
    Q('For Sartre, freedom is always:', ['in a situation', 'unlimited by facts', 'an illusion', 'given by the state'], 'We choose what we make of our situation.'),
    Q('A critic of Sartre may point to:', ['real constraints such as poverty and oppression', 'Sartre’s fame', 'his plays', 'his language'], 'Limits of freedom.'),
    Q('Existentialism is a Humanism was published in:', ['1946', '1637', '1899', '1971'], 'Lecture of 1945.'),
  ],
  'aph-language-1': [
    Q('Bergson argued that words can:', ['fix and impoverish inner experience', 'express everything perfectly', 'replace thought', 'never mislead'], 'Language may betray thought.'),
    Q('Animal signals differ from language because they are:', ['fixed and tied to situations', 'creative', 'grammatical', 'written'], 'Not open-ended.'),
    Q('Saussure’s Course in General Linguistics appeared in:', ['1916', '1949', '1807', '1637'], 'Posthumously.'),
    Q('The signified is:', ['the concept a sign stands for', 'the sound', 'the object', 'the letter'], 'Saussure.'),
  ],
  'aph-language-2': [
    Q('Lévi-Strauss’s Elementary Structures of Kinship appeared in:', ['1949', '1916', '1962', '1807'], 'Incest prohibition.'),
    Q('Ethnocentrism is:', ['judging other cultures by one’s own', 'respecting all cultures', 'studying cultures', 'cultural exchange'], 'A bias.'),
    Q('Eating is natural as a need but cultural in:', ['what, when and how we eat', 'needing food', 'digestion', 'hunger'], 'Natural need, cultural form.'),
    Q('Lévi-Strauss said the barbarian is first of all the man who:', ['believes in barbarism', 'lives in the forest', 'has no writing', 'is poor'], 'Race and History.'),
  ],
  'aph-metaphysics-1': [
    Q('Anselm’s ontological argument defines God as:', ['that than which nothing greater can be conceived', 'the first cause', 'the designer', 'the moral judge'], 'Proslogion.'),
    Q('Paley’s Natural Theology appeared in:', ['1802', '1641', '1781', '1859'], 'The watchmaker.'),
    Q('Darwin’s natural selection weakened:', ['the design argument', 'the cogito', 'the social contract', 'logic'], 'Order without a designer.'),
    Q('Metaphysics studies:', ['being, God, the soul and ultimate reality', 'only physics', 'only politics', 'only grammar'], 'Beyond experience.'),
  ],
  'aph-metaphysics-2': [
    Q('Epicurus said death is:', ['nothing to us', 'the worst evil', 'a punishment', 'a dream'], 'Where death is, we are not.'),
    Q('Augustine explained moral evil by:', ['the misuse of free will', 'God’s will', 'matter', 'chance'], 'Free will defence.'),
    Q('Kant treated immortality as:', ['a postulate of practical reason', 'a proven fact', 'impossible', 'a scientific law'], 'Not proven.'),
    Q('The Lisbon earthquake of 1755 challenged:', ['optimistic theodicy', 'logic', 'mathematics', 'politics'], 'Voltaire.'),
  ],
  'aph-history-1': [
    Q('Rationalists include:', ['Descartes and Leibniz', 'Locke and Hume', 'Bacon and Mill', 'Marx and Engels'], 'Reason first.'),
    Q('The correspondence theory of truth says truth is:', ['agreement with facts', 'coherence with beliefs', 'what works', 'what is popular'], 'Classic theory.'),
    Q('Kant said thoughts without content are:', ['empty', 'true', 'divine', 'false'], 'And intuitions without concepts are blind.'),
    Q('Opinion (doxa) differs from knowledge because it lacks:', ['justification', 'words', 'a believer', 'an object'], 'Plato.'),
  ],
  'aph-history-2': [
    Q('E. H. Carr called history:', ['an unending dialogue between the present and the past', 'a pure science', 'fiction', 'a list of dates'], 'What is History? 1961.'),
    Q('Internal criticism of a source checks:', ['its credibility and meaning', 'its paper', 'its date only', 'its author’s birth'], 'After external criticism.'),
    Q('A danger of grand philosophies of history is that they can:', ['justify violence in the name of history’s direction', 'end research', 'be too modest', 'ignore ideas'], 'Critics’ warning.'),
    Q('Historical knowledge is indirect because the historian:', ['cannot observe past events', 'has no sources', 'uses experiments', 'predicts the future'], 'Traces.'),
  ],
  'aph-logic-1': [
    Q('Intuitionism sees mathematics as:', ['a construction of the human mind', 'discovery of Forms', 'symbol games', 'physics'], 'Brouwer.'),
    Q('Non-Euclidean geometries changed Euclid’s:', ['parallel postulate', 'number system', 'logic', 'fractions'], '19th century.'),
    Q('Mathematical truths are usually known:', ['a priori', 'a posteriori', 'by revelation', 'by vote'], 'By reason.'),
    Q('The success of mathematics in physics supports:', ['some form of realism', 'nothing', 'scepticism', 'fatalism'], 'Unreasonable effectiveness.'),
  ],
  'aph-logic-2': [
    Q('"p or q" (inclusive) is false only when:', ['both p and q are false', 'both are true', 'p is true', 'q is true'], 'Disjunction.'),
    Q('A sound argument is:', ['valid with true premises', 'valid with false premises', 'invalid', 'persuasive'], 'Validity plus truth.'),
    Q('Post hoc reasoning assumes that:', ['what comes after was caused by what came before', 'all causes are known', 'nothing causes anything', 'the future causes the past'], 'After, therefore because of.'),
    Q('Modus tollens has the form:', ['if p then q; not q; therefore not p', 'if p then q; q; therefore p', 'p or q; p; therefore q', 'p; therefore q'], 'Valid.'),
  ],
  'aph-science-1': [
    Q('Bacon’s idols of the marketplace come from:', ['misleading use of words', 'personal bias', 'human nature', 'philosophical systems'], 'Language.'),
    Q('Bernard’s Introduction to the Study of Experimental Medicine appeared in:', ['1865', '1620', '1934', '1962'], 'Method.'),
    Q('A control group in an experiment:', ['is not treated, for comparison', 'receives double treatment', 'is ignored', 'is the hypothesis'], 'Fair test.'),
    Q('Galileo expressed laws of nature in:', ['mathematical language', 'myth', 'poetry', 'law codes'], 'The book of nature.'),
  ],
  'aph-science-2': [
    Q('For Hume, belief in causal laws rests on:', ['habit or custom', 'pure reason', 'revelation', 'mathematics'], 'Problem of induction.'),
    Q('One black swan shows that:', ['"all swans are white" is false', 'all swans are black', 'nothing', 'swans are white'], 'Falsification.'),
    Q('Kuhn’s Structure of Scientific Revolutions appeared in:', ['1962', '1934', '1620', '1748'], 'Paradigms.'),
    Q('Scientific knowledge, after Popper and Kuhn, is best seen as:', ['powerful but provisional', 'certain forever', 'worthless', 'religious'], 'Open to revision.'),
  ],
  'aph-human-sciences-1': [
    Q('Durkheim’s Suicide appeared in:', ['1897', '1865', '1962', '1807'], 'Social integration.'),
    Q('The Hawthorne effect shows that:', ['people change behaviour when observed', 'machines break', 'workers never change', 'light has no effect'], 'Observer effect.'),
    Q('Behaviourism studies only:', ['observable behaviour', 'inner feelings', 'dreams', 'souls'], 'Watson, Skinner.'),
    Q('Ethics limits human-science experiments because:', ['people must not be harmed or deceived without consent', 'humans are cheap', 'nothing can be known', 'data are useless'], 'Research ethics.'),
  ],
  'aph-human-sciences-2': [
    Q('Weber’s Protestant Ethic and the Spirit of Capitalism linked:', ['religious meanings to economic behaviour', 'genes to wealth', 'climate to politics', 'atoms to society'], '1905.'),
    Q('Hermeneutics is:', ['the art of interpretation', 'a branch of physics', 'statistics', 'logic only'], 'Understanding meaning.'),
    Q('Dilthey said we explain nature but understand:', ['the life of the mind', 'stars', 'chemistry', 'machines'], '1894.'),
    Q('Results in the human sciences tend to be:', ['probable and context-bound', 'certain and universal', 'meaningless', 'identical to physics'], 'Special objects.'),
  ],
  'aph-technoscience-1': [
    Q('Ancient science aimed mainly at:', ['contemplation', 'industry', 'weapons', 'profit'], 'Theoria.'),
    Q('Bacon’s slogan was that knowledge is:', ['power', 'useless', 'virtue', 'pleasure'], 'Mastery of nature.'),
    Q('A risk of technoscience is:', ['doing whatever is technically possible without asking whether it is right', 'too little research', 'no inventions', 'cheap goods'], 'Ethics needed.'),
    Q('Mobile money in Cameroon is an example of:', ['technology transforming social life', 'pure contemplation', 'myth', 'metaphysics'], 'Technoscience in daily life.'),
  ],
  'aph-technoscience-2': [
    Q('Dolly the sheep was born at the:', ['Roslin Institute in Scotland', 'Pasteur Institute', 'CERN', 'MIT'], '1996.'),
    Q('Germ-line genetic editing is worrying because changes:', ['pass to future generations', 'disappear at once', 'affect only plants', 'are always safe'], 'Permanent.'),
    Q('Rabelais’ warning appears in:', ['Pantagruel (1532)', 'Leviathan', 'Emile', 'the Prince'], 'Science without conscience.'),
    Q('An ethics committee in research serves to:', ['review risks and consent before studies', 'fund weapons', 'stop all science', 'publish results'], 'Responsibility.'),
  ],
  'aph-commentary-1': [
    Q('The structure of a text is found mainly by:', ['following its logical connectives and moments', 'counting paragraphs', 'reading the title only', 'its font'], 'Signposts.'),
    Q('The introduction of a commentary states:', ['the author, theme, problem, thesis and plan', 'only the author’s life', 'the conclusion', 'nothing'], 'Situate and announce.'),
    Q('Line references help to:', ['locate each moment precisely', 'fill space', 'avoid explanation', 'replace quotes'], 'Precision.'),
    Q('The problem of a text is:', ['the question it answers', 'a spelling error', 'the title', 'the author'], 'Why it was written.'),
  ],
  'aph-commentary-2': [
    Q('Concepts should be defined in:', ['the author’s sense', 'any dictionary sense', 'the reader’s sense only', 'no sense'], 'Fidelity.'),
    Q('Evaluation begins by showing:', ['the interest of the thesis', 'only its faults', 'the author’s faults', 'nothing'], 'Fairness.'),
    Q('A commentary that becomes a general essay:', ['loses the text', 'is excellent', 'is required', 'is shorter'], 'Stay with the text.'),
    Q('The final judgement should be:', ['personal and justified', 'copied', 'avoided', 'extreme'], 'Reasoned.'),
  ],
  'aph-review-1': [
    Q('A good review for each topic prepares:', ['a problem, two opposed positions and a synthesis', 'only dates', 'only definitions', 'nothing'], 'Ready dialectic.'),
    Q('A question on "Is man free?" draws on:', ['Spinoza and Sartre', 'Hobbes and Locke', 'Tempels and Kagame', 'Bentham and Mill'], 'Freedom topic.'),
    Q('A question on body and mind draws on:', ['Plato, Descartes and the materialists', 'Rawls', 'Nyerere', 'Machiavelli'], 'Anthropology.'),
    Q('Examples from Cameroonian life help to:', ['make arguments concrete and original', 'replace arguments', 'fill space', 'avoid authors'], 'Illustration.'),
  ],
  'aph-review-2': [
    Q('Scientism is the view that:', ['science is the only valid knowledge', 'science is useless', 'religion is science', 'history is science'], 'Debated.'),
    Q('Explaining and understanding are opposed by:', ['Dilthey', 'Hobbes', 'Senghor', 'Freud'], 'Human sciences.'),
    Q('Verification and falsification are contrasted by:', ['Popper', 'Rousseau', 'Leibniz', 'Kagame'], 'Philosophy of science.'),
    Q('Jonas belongs mainly to debates on:', ['technoscience and responsibility', 'the social contract', 'the cogito', 'Negritude'], 'Ethics of technology.'),
  ],
  'aph-papers-1': [
    Q('In a 3-hour essay paper, roughly how long should go to planning?', ['about 35 to 40 minutes', '5 minutes', '2 hours', 'none'], 'Then write and check.'),
    Q('Choose an essay subject that you can:', ['problematise and argue', 'only describe', 'copy from notes', 'avoid'], 'Not just a familiar author.'),
    Q('Examiners usually read first:', ['the introduction and conclusion', 'the middle only', 'the title only', 'nothing'], 'First impressions.'),
    Q('For a commentary, spend more time:', ['understanding the text and its moments', 'on biography', 'on handwriting', 'on the title'], 'Before writing.'),
  ],
  'aph-papers-2': [
    Q('Hegel’s Phenomenology of Spirit appeared in:', ['1807', '1637', '1899', '1943'], 'Master and slave.'),
    Q('Popper’s Logik der Forschung appeared in:', ['1934', '1962', '1620', '1748'], 'Falsifiability.'),
    Q('Durkheim’s Rules of Sociological Method appeared in:', ['1895', '1897', '1865', '1916'], 'Social facts as things.'),
    Q('Bad faith is a concept of:', ['Sartre', 'Freud', 'Hume', 'Plato'], 'Self-deception.'),
  ],
  ...QUESTIONS_U6,
};
