// Extra end-of-lesson questions for the Logic lessons, by lesson id. The
// correct option is written first; options are shuffled when shown.

const Q = (q, a, why) => ({ q, a, why });

export const LESSON_QUESTIONS = {
  // ---------- Form 3, term 1 ----------
  'lo-whatis-3': [
    Q('Logos, the root of "logic", means:', ['word, thought or reason', 'number', 'earth', 'life'], 'Greek.'),
    Q('Logic is called a science because it:', ['studies the laws of correct thought in an orderly way', 'uses a laboratory', 'is about plants', 'has no method'], 'Organised knowledge.'),
    Q('Logic helps a student mainly to:', ['tell good reasons from bad ones', 'write faster', 'memorise without thinking', 'avoid all arguments'], 'Clear reasoning.'),
    Q('Reasoning is:', ['moving from what we know to what follows from it', 'guessing', 'shouting', 'copying'], 'The subject of logic.'),
  ],
  'lo-aristotle-3': [
    Q('Aristotle was a pupil of:', ['Plato', 'Newton', 'Einstein', 'Descartes'], 'In Athens.'),
    Q('"Organon" means:', ['instrument', 'garden', 'law', 'number'], 'Logic is the instrument of knowledge.'),
    Q('"A is A" states the law of:', ['identity', 'excluded middle', 'non-contradiction', 'inverse variation'], 'A thing is what it is.'),
    Q('"Either it is Monday or it is not Monday" illustrates the law of:', ['excluded middle', 'identity', 'inverse variation', 'distribution'], 'No third possibility.'),
  ],
  'lo-formmatter-3': [
    Q('The matter of an argument is:', ['its content', 'its structure', 'its letters', 'its length'], 'What it is about.'),
    Q('Two arguments about different things can have:', ['the same form', 'no form', 'only matter', 'no premises'], 'Shown by letters.'),
    Q('Material logic asks whether statements:', ['agree with reality', 'are long', 'rhyme', 'are in English'], 'Truth of content.'),
    Q('"All A are B. All B are C. So all A are C" shows an argument’s:', ['form', 'matter', 'truth', 'language'], 'Letters replace the words.'),
  ],
  'lo-validtruth-3': [
    Q('Can an argument be valid while its conclusion is false?', ['yes, if a premise is false', 'no, never', 'only on Mondays', 'only in mathematics'], 'Valid form, false matter.'),
    Q('"All dogs are animals. All cats are animals. So all dogs are cats" is:', ['invalid', 'valid and sound', 'valid but unsound', 'not an argument'], 'True premises, false conclusion.'),
    Q('A sound argument always has:', ['a true conclusion', 'a false conclusion', 'no premises', 'three conclusions'], 'Valid with true premises.'),
    Q('Saying "this argument is true" is, strictly:', ['a mistake: arguments are valid or invalid', 'correct', 'a definition', 'a law of thought'], 'Truth belongs to propositions.'),
  ],
  'lo-informative-3': [
    Q('The informative function is used to:', ['state facts', 'greet people', 'give orders', 'express joy only'], 'True or false.'),
    Q('A love poem is mainly:', ['expressive', 'informative', 'directive', 'phatic'], 'Feelings.'),
    Q('Which can be checked against the facts?', ['"The bus leaves at 6 a.m."', '"Oh, what a bus!"', '"Hello driver!"', '"Hurry up!"'], 'Informative.'),
    Q('The expressive function is also called the:', ['emotive function', 'cognitive function', 'phatic function', 'logical function'], 'Emotions.'),
  ],
  'lo-directive-3': [
    Q('"Do not drink and drive" is:', ['directive', 'phatic', 'informative only', 'expressive only'], 'Advice or command.'),
    Q('"How was the night?" as a morning greeting is mainly:', ['phatic', 'informative', 'directive', 'an argument'], 'Social contact.'),
    Q('A sign saying "Wet floor" both informs and:', ['warns (directs)', 'greets', 'expresses joy', 'argues'], 'Mixed functions.'),
    Q('A prayer asking for rain is mainly:', ['directive', 'informative', 'phatic', 'a proposition'], 'It asks for action.'),
  ],
  'lo-operations-3': [
    Q('The product of simple apprehension is a:', ['concept', 'proposition', 'argument', 'sentence'], 'An idea.'),
    Q('A term by itself is:', ['neither true nor false', 'always true', 'always false', 'an argument'], 'Only propositions are true or false.'),
    Q('Reasoning is also called:', ['inference', 'apprehension', 'perception', 'imagination'], 'Drawing conclusions.'),
    Q('Logic studies terms, then propositions, then arguments because:', ['each operation builds on the one before', 'it is alphabetical', 'arguments are easiest', 'terms are hardest'], 'Order of the operations.'),
  ],
  'lo-arguments-3': [
    Q('"Hence" is a:', ['conclusion indicator', 'premise indicator', 'quantifier', 'copula'], 'Like therefore.'),
    Q('"Given that" introduces a:', ['premise', 'conclusion', 'question', 'command'], 'A reason.'),
    Q('The sign ∴ means:', ['therefore', 'because', 'and', 'not'], 'It marks the conclusion.'),
    Q('A description of a market with no reasons given is:', ['not an argument', 'a syllogism', 'a conclusion', 'a fallacy'], 'No conclusion is drawn.'),
  ],
  'lo-concept-3': [
    Q('A concept is:', ['universal', 'particular', 'a picture', 'a sound'], 'It fits all members of a class.'),
    Q('Which can we understand but hardly picture?', ['justice', 'a goat', 'a mango', 'a house'], 'Concept without a clear image.'),
    Q('The first step in forming a concept is:', ['perceiving a real object', 'writing a definition', 'drawing a conclusion', 'counting'], 'The senses.'),
    Q('Abstraction keeps:', ['what is common and essential', 'colour and size', 'the date seen', 'the owner’s name'], 'It drops details.'),
  ],
  'lo-terms-3': [
    Q('"The longest river in Cameroon" is:', ['one term', 'five terms', 'a proposition', 'an argument'], 'A many-word term.'),
    Q('Which word cannot stand alone as a term?', ['some', 'Cameroon', 'students', 'river'], 'It is a quantifier.'),
    Q('A sentence expresses a proposition when it:', ['states something true or false', 'asks a question', 'gives an order', 'greets'], 'Declarative.'),
    Q('In "No smokers are athletes", the predicate term is:', ['athletes', 'smokers', 'no', 'are'], 'What is denied of the subject.'),
  ],

  // ---------- Form 3, terms 2 and 3 ----------
  'lo-compext-3': [
    Q('Intension is another name for:', ['comprehension', 'extension', 'distribution', 'quality'], 'The qualities implied.'),
    Q('A definition sets out a term’s:', ['comprehension', 'extension', 'quantity', 'copula'], 'What it means.'),
    Q('The extension of "planet of the Solar System" has how many members?', ['8', '9', '7', '12'], 'Since 2006.'),
    Q('Comprehension answers the question:', ['"What does the term mean?"', '"Which things does it cover?"', '"How long is it?"', '"Who said it?"'], 'Extension answers "which things".'),
  ],
  'lo-inverse-3': [
    Q('Adding the quality "rational" to "animal" gives a term with:', ['smaller extension', 'larger extension', 'the same extension', 'no comprehension'], 'Inverse variation.'),
    Q('Which has the widest extension?', ['living thing', 'mammal', 'dog', 'puppy'], 'Fewest qualities.'),
    Q('The law of inverse variation is:', ['inverse, but not an exact proportion', 'an exact mathematical formula', 'a law of physics', 'false'], 'Doubling qualities does not halve things.'),
    Q('A wider class containing narrower ones is a:', ['genus', 'species', 'proposition', 'copula'], 'Animal is a genus of dog.'),
  ],
  'lo-singular-3': [
    Q('A proper name is usually a:', ['singular term', 'general term', 'collective term only', 'negative term'], 'One individual.'),
    Q('"Town" is a:', ['general term', 'singular term', 'privative term', 'abstract term'], 'Each town.'),
    Q('"This town" is:', ['singular', 'general', 'collective', 'privative'], '"This" picks one out.'),
    Q('"The tallest girl in Form 3B" is:', ['singular', 'general', 'collective', 'abstract'], 'A description of one person.'),
  ],
  'lo-collective-3': [
    Q('"Library" is a:', ['collective term', 'privative term', 'abstract term', 'singular term only'], 'A collection of books.'),
    Q('"Each player is excellent, so the team is excellent" confuses:', ['distributive and collective use', 'concrete and abstract', 'positive and negative', 'A and E'], 'What is true of each need not be true of the whole.'),
    Q('"All the angles of a triangle add up to 180°" uses "all the angles":', ['collectively', 'distributively', 'privatively', 'singularly'], 'Taken together.'),
    Q('"Team" is:', ['general and collective', 'singular and abstract', 'privative', 'negative'], 'It applies to every team.'),
  ],
  'lo-concrete-3': [
    Q('"Teacher" is a:', ['concrete term', 'abstract term', 'privative term', 'negative term'], 'A person.'),
    Q('The abstract term formed from "wise" is:', ['wisdom', 'wiser', 'wisely', 'wise man'], 'The quality itself.'),
    Q('Abstract terms name:', ['qualities considered apart from things', 'people', 'places', 'groups'], 'Such as honesty.'),
    Q('"Courage" is:', ['abstract', 'concrete', 'collective', 'singular'], 'A quality.'),
  ],
  'lo-privative-3': [
    Q('"Lame", said of a person, is:', ['privative', 'positive', 'abstract', 'collective'], 'Walking would be natural.'),
    Q('"Invisible" is:', ['negative', 'positive', 'privative', 'collective'], 'Simply not visible.'),
    Q('A term and its negative, such as "literate" and "non-literate", are:', ['contradictory terms', 'the same term', 'privative terms', 'collective terms'], 'No middle between them.'),
    Q('"Happy" and "unhappy" are:', ['contrary terms', 'contradictory terms', 'identical', 'collective'], 'One can be neither.'),
  ],
  'lo-proposition-3': [
    Q('A proposition is the verbal expression of a:', ['judgement', 'concept', 'term', 'question'], 'Second operation of the mind.'),
    Q('"Ewane beat Tabi" and "Tabi was beaten by Ewane" express:', ['the same proposition', 'different propositions', 'no proposition', 'arguments'], 'Same meaning.'),
    Q('"If it rains, the match will be cancelled" is a:', ['hypothetical proposition', 'categorical proposition', 'question', 'term'], 'It states a condition.'),
    Q('An exclamation such as "Hurray!" is:', ['not a proposition', 'an A proposition', 'an I proposition', 'an argument'], 'Neither true nor false.'),
  ],
  'lo-standardform-3': [
    Q('"Not a single pupil came late" in standard form is:', ['"No pupils are latecomers"', '"All pupils are latecomers"', '"Some pupils are latecomers"', '"Some pupils are not latecomers"'], 'None at all.'),
    Q('"A few traders cheat" becomes:', ['"Some traders are cheats"', '"All traders are cheats"', '"No traders are cheats"', '"Traders cheat"'], '"A few" means some.'),
    Q('The quantifier "every" becomes:', ['all', 'some', 'no', 'not'], 'Universal affirmative.'),
    Q('The predicate in standard form must be:', ['a term (a noun phrase)', 'a verb only', 'an adverb', 'a question'], '"Bark" becomes "animals that bark".'),
  ],
  'lo-aeio-3': [
    Q('In logic, "some" means:', ['at least one', 'more than half', 'exactly two', 'all'], 'It may even be all.'),
    Q('"No S are P" is the form of:', ['E', 'A', 'I', 'O'], 'Universal negative.'),
    Q('The quantity of "Some pupils are prefects" is:', ['particular', 'universal', 'negative', 'affirmative'], '"Some".'),
    Q('The quality of "No snakes are mammals" is:', ['negative', 'affirmative', 'particular', 'singular'], 'It excludes.'),
  ],
  'lo-classify-3': [
    Q('"Many Cameroonians speak two languages" is an:', ['I proposition', 'A proposition', 'E proposition', 'O proposition'], 'Some are bilingual.'),
    Q('"Ngum is not a prefect" is treated as an:', ['E proposition', 'O proposition', 'I proposition', 'A proposition'], 'Singular negative counts as universal.'),
    Q('"Only teachers are allowed in" means:', ['All people allowed in are teachers', 'All teachers are allowed in', 'No teachers are allowed in', 'Some teachers are not allowed in'], 'Swap the terms for "only".'),
    Q('"All students are not lazy" usually means:', ['Some students are not lazy', 'No students are lazy', 'All students are lazy', 'Some students are lazy'], 'Read the meaning.'),
  ],
  'lo-distribution-3': [
    Q('"Unprepared Students Never Pass" helps remember that:', ['universals distribute subjects and negatives distribute predicates', 'all terms are distributed', 'no terms are distributed', 'only I distributes'], 'A memory aid.'),
    Q('Which proposition distributes neither term?', ['I', 'E', 'A', 'O'], 'Some S are P.'),
    Q('Which proposition distributes only its predicate?', ['O', 'A', 'E', 'I'], 'Some S are not P.'),
    Q('Distribution will be used in Form 5 to test:', ['syllogisms', 'spelling', 'handwriting', 'grammar'], 'Validity rules.'),
  ],
  'lo-distwhy-3': [
    Q('In the Euler diagram of an A proposition, the S circle is:', ['inside the P circle', 'apart from P', 'overlapping P', 'larger than P always'], 'All S are P.'),
    Q('In the Euler diagram of an E proposition, the circles are:', ['completely separate', 'one inside the other', 'overlapping', 'the same circle'], 'No S are P.'),
    Q('In an O proposition the predicate is distributed because:', ['some S are shut out of the whole class P', 'all P are S', 'the subject is universal', 'it is affirmative'], 'Exclusion from all of P.'),
    Q('A common mistake is to think the predicate of an A proposition is:', ['distributed', 'undistributed', 'the subject', 'the copula'], 'It is undistributed.'),
  ],
  'lo-square-3': [
    Q('I and O lie on the square’s:', ['bottom side, as subcontraries', 'top side, as contraries', 'diagonals', 'left side'], 'The particulars.'),
    Q('A and I are:', ['subalterns', 'contradictories', 'contraries', 'subcontraries'], 'The left side.'),
    Q('Propositions on the square must have:', ['the same subject and predicate', 'different terms', 'no quantifier', 'three terms'], 'Only quality or quantity differ.'),
    Q('Affirmative propositions are on the square’s:', ['left side', 'right side', 'top only', 'bottom only'], 'A and I.'),
  ],
  'lo-contradiction-3': [
    Q('Contradictories differ in:', ['both quality and quantity', 'quality only', 'quantity only', 'neither'], 'A and O; E and I.'),
    Q('To prove "All politicians are dishonest" false, you need:', ['one honest politician', 'all politicians to be honest', 'a vote', 'a law'], 'One counter-example proves the O.'),
    Q('If "Some birds cannot fly" is true, "All birds can fly" is:', ['false', 'true', 'undetermined', 'an E proposition'], 'Contradictories.'),
    Q('If "All exams are easy" is true, "Some exams are not easy" is:', ['false', 'true', 'undetermined', 'an I proposition'], 'Exactly one of the pair is true.'),
  ],
  'lo-fallacy-3': [
    Q('The word "fallacy" comes from the Latin "fallere", meaning:', ['to deceive', 'to fall asleep', 'to reason', 'to count'], 'It deceives.'),
    Q('A formal fallacy is an error in an argument’s:', ['form', 'feelings', 'language only', 'spelling'], 'Breaks the rules of inference.'),
    Q('"Ad baculum" appeals to:', ['force', 'pity', 'the crowd', 'ignorance'], 'Baculum means stick.'),
    Q('A fallacy can be used:', ['by mistake or on purpose to persuade', 'only by mistake', 'only in mathematics', 'never'], 'Both happen.'),
  ],
  'lo-populum-3': [
    Q('Advertisements that say "Millions can’t be wrong" use:', ['ad populum', 'ad misericordiam', 'a valid syllogism', 'contradiction'], 'Popularity.'),
    Q('"He cannot be guilty; look at his poor children" uses:', ['ad misericordiam', 'ad populum', 'a valid argument', 'distribution'], 'Pity, not evidence.'),
    Q('Popularity is not proof because:', ['many people can be wrong', 'popular things are always bad', 'nobody is popular', 'crowds are small'], 'Truth is not decided by votes.'),
    Q('The best response to an appeal to pity is to:', ['separate the feeling from the facts', 'agree at once', 'cry too', 'insult the speaker'], 'Ask for evidence.'),
  ],
  'lo-preview-3': [
    Q('Conversion of an O proposition is:', ['never valid', 'always valid', 'valid by limitation', 'the same as obversion'], 'Some S are not P cannot be converted.'),
    Q('The obverse of "All students are learners" is:', ['"No students are non-learners"', '"All learners are students"', '"Some students are learners"', '"No learners are students"'], 'Change the quality, contradict the predicate.'),
    Q('Mediate inference needs:', ['two premises and a middle term', 'one proposition', 'no premises', 'a question'], 'The syllogism.'),
    Q('Which idea decides whether a syllogism is valid?', ['distribution of terms', 'the length of the premises', 'the language used', 'the speaker'], 'Learned in Form 3.'),
  ],
  'lo-revision-3': [
    Q('In a classification question, you should first:', ['put the sentence in standard form', 'guess the letter', 'draw a picture', 'skip it'], 'Then read quality and quantity.'),
    Q('The contradictory of an A proposition is:', ['O', 'E', 'I', 'A'], 'The diagonal.'),
    Q('A good answer to "Define a privative term" includes:', ['the definition and an example', 'only the word', 'a drawing only', 'a story'], 'Define, then illustrate.'),
    Q('"Some Cameroonians are footballers" distributes:', ['neither term', 'both terms', 'the subject', 'the predicate'], 'An I proposition.'),
  ],
};
