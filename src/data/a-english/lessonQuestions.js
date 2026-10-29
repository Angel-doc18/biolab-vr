// Extra questions for the end of the A Level English Language lessons (0730),
// so that every lesson ends with at least five questions on what it teaches.
//
// Convention: the correct option is written first; options are shuffled when shown.
import { QUESTIONS_U6 } from './lessonQuestionsU6';

const Q = (q, a, why) => ({ q, a, why });

export const LESSON_QUESTIONS = {
  // ---------- Lower Sixth, Term 1 ----------
  'aen-rel-1': [
    Q('"The reason ___ she left is unclear."', ['why', 'where', 'which', 'whose'], 'Why follows "reason".'),
    Q('Which sentence needs commas?', ['My father who lives in Kumba is a farmer.', 'The man who lives next door is a farmer.', 'The book that I lent you is mine.', 'The girl whose bag was lost is crying.'], 'You have one father: the clause adds extra information.'),
    Q('Choose the formal, correct phrase.', ['the chief on whom we rely', 'the chief on who we rely', 'the chief whom we rely on him', 'the chief on that we rely'], 'Preposition + whom.'),
    Q('"A house ___ roof leaks" is:', ['correct, since whose can refer to things', 'wrong: use which', 'wrong: use who', 'wrong: use that'], 'Whose works for things too.'),
  ],
  'aen-cmp-1': [
    Q('The plural of "son-in-law" is:', ['sons-in-law', 'son-in-laws', 'sons-in-laws', 'son-ins-law'], 'The main word takes the -s.'),
    Q('A person who carries messages between two quarrelling sides is a:', ['go-between', 'bystander', 'passer-by', 'peacekeeper force'], 'An intermediary.'),
    Q('A formal complaint about unfair treatment is a:', ['grievance', 'settlement', 'compromise', 'reconciliation'], 'It may start a dispute.'),
    Q('An agreement in which each side gives up something is a:', ['compromise', 'grievance', 'quarrel', 'verdict'], 'Both sides move.'),
  ],
  'aen-recon-1': [
    Q('In the past, "The chief can see the whole village" becomes:', ['The chief could see the whole village.', 'The chief can saw the whole village.', 'The chief had can see the whole village.', 'The chief could saw the whole village.'], 'Can becomes could.'),
    Q('In a past narrative, "today" usually becomes:', ['that day', 'yesterday', 'tomorrow', 'today'], 'The viewpoint moves.'),
    Q('In the past, "The ceremony will end at dusk" becomes:', ['The ceremony would end at dusk.', 'The ceremony will ended at dusk.', 'The ceremony ended will at dusk.', 'The ceremony had end at dusk.'], 'Will becomes would.'),
    Q('Before rewriting a passage in another tense, it helps to:', ['underline every verb', 'count the commas', 'change the names', 'shorten the passage'], 'So none is missed.'),
  ],
  'aen-recon-2': [
    Q('The past tense of "seek" is:', ['sought', 'seeked', 'saught', 'sook'], 'Seek, sought, sought.'),
    Q('"She ___ the mat on the floor" (put down):', ['laid', 'lay', 'lied', 'lain'], 'Lay, laid, laid.'),
    Q('Pouring a drink on the ground as an offering is a:', ['libation', 'masquerade', 'artefact', 'procession'], 'A ritual offering.'),
    Q('"By the time the rain stopped, the dancers ___ home."', ['had gone', 'have gone', 'go', 'were go'], 'The earlier of two past events.'),
  ],
  'aen-cons-1': [
    Q('Which word begins with /ð/?', ['those', 'thorn', 'Thomas', 'theme'], 'Voiced th.'),
    Q('In which word is the letter b silent?', ['debt', 'bread', 'rubber', 'about'], 'Debt /det/.'),
    Q('Which pair is a minimal pair?', ['light, right', 'light, lighter', 'right, write', 'night, nights'], 'They differ only in /l/ and /r/.'),
    Q('Which sound is voiced?', ['/z/', '/s/', '/f/', '/θ/'], 'The vocal cords vibrate.'),
  ],
  'aen-letter-1': [
    Q('An informal letter to your grandmother usually ends:', ['Your loving grandson (or granddaughter)', 'Yours faithfully', 'Yours sincerely, Director', 'With compliments'], 'Warm and personal.'),
    Q('Contractions such as "I’m" and "can’t" are acceptable in:', ['informal letters', 'formal letters', 'reports', 'minutes'], 'Keep them out of formal writing.'),
    Q('The last paragraph of a letter usually:', ['looks ahead and closes politely', 'gives a new subject', 'repeats the address', 'gives the date'], 'I look forward to...'),
    Q('Which is a semi-formal opening?', ['Dear Pastor Ndi,', 'Hi Ndi!', 'Dear Sir,', 'Yo Pastor,'], 'Polite with a name and title.'),
  ],
  'aen-cond-1': [
    Q('"Save a copy ___ the laptop crashes."', ['in case', 'unless', 'provided', 'whereas'], 'Because it might happen.'),
    Q('Which is correct?', ['If it rains, the match will be cancelled.', 'If it will rain, the match will be cancelled.', 'If it rained, the match will be cancelled.', 'If it rains, the match would be cancelled.'], 'First conditional.'),
    Q('"As long as you pay, you can use the Wi-Fi." As long as means:', ['provided that', 'although', 'because', 'unless'], 'A condition.'),
    Q('The second conditional describes:', ['an unreal or unlikely present or future situation', 'a general truth', 'a real future possibility', 'a finished past event'], 'If + past, would.'),
  ],
  'aen-ictvocab-1': [
    Q('To start a computer again is to:', ['reboot it', 'upload it', 'format it', 'debug it'], 'Re- means again.'),
    Q('Finding and removing errors in a program is:', ['debugging', 'downloading', 'browsing', 'scanning'], 'De- reverses.'),
    Q('A device that directs data between networks is a:', ['router', 'monitor', 'printer', 'scanner'], 'It routes traffic.'),
    Q('A spare copy of files kept elsewhere is a:', ['backup', 'folder', 'virus', 'shortcut'], 'In case of loss.'),
  ],
  'aen-ger-1': [
    Q('"The app lets you ___ strangers."', ['block', 'to block', 'blocking', 'blocked'], 'Let + bare infinitive.'),
    Q('"She managed ___ her account."', ['to recover', 'recovering', 'recover', 'recovered'], 'Manage + to-infinitive.'),
    Q('"I remember ___ the door, so it is locked."', ['locking', 'to lock', 'lock', 'locked'], 'Remember + gerund: recall a past act.'),
    Q('"He is used to ___ late."', ['working', 'work', 'worked', 'to work'], '"To" is a preposition here.'),
  ],
  'aen-digital-1': [
    Q('Harmful software such as viruses is called:', ['malware', 'hardware', 'firmware', 'shareware'], 'Malicious software.'),
    Q('False information presented as news is:', ['fake news', 'a byline', 'a headline', 'an editorial'], 'Misinformation.'),
    Q('Using someone else’s personal details to commit fraud is:', ['identity theft', 'encryption', 'privacy', 'authentication'], 'A crime.'),
    Q('Scrambling data so only the right person can read it is:', ['encryption', 'phishing', 'uploading', 'spamming'], 'Security.'),
  ],
  'aen-tags-1': [
    Q('"There is no bread, ___?"', ['is there', 'isn’t there', 'is it', 'isn’t it'], 'No makes the statement negative.'),
    Q('"Close the window, ___?"', ['will you', 'don’t you', 'shall we', 'do you'], 'Imperative: will you.'),
    Q('"Everyone has arrived, ___?"', ['haven’t they', 'hasn’t he', 'has it', 'haven’t we'], 'Everyone takes "they".'),
    Q('Wh-questions such as "Where do you live?" usually end with:', ['a fall', 'a rise', 'no change', 'a pause'], 'Falling tune.'),
  ],
  'aen-narr-1': [
    Q('Background action in a narrative often uses the:', ['past continuous', 'future perfect', 'imperative', 'present perfect'], '"It was raining when..."'),
    Q('The problem that starts the action of a story is the:', ['complication', 'orientation', 'resolution', 'title'], 'It disturbs the normal.'),
    Q('Which is a time link?', ['meanwhile', 'however', 'therefore', 'whereas'], 'It shows when.'),
    Q('A new paragraph in a narrative usually starts when:', ['the time, place or speaker changes', 'a comma is needed', 'a word is repeated', 'the page is full'], 'Clear organisation.'),
  ],
  'aen-pass-1': [
    Q('The passive of "Someone has stolen my bag" is:', ['My bag has been stolen.', 'My bag was stolen by someone has.', 'My bag has stolen.', 'My bag is been stolen.'], 'Present perfect passive.'),
    Q('"The minister is said ___ resigned."', ['to have', 'to has', 'having', 'that he'], 'Is said to have + participle.'),
    Q('The passive of "They should repair the road" is:', ['The road should be repaired.', 'The road should repaired.', 'The road should been repaired.', 'The road is should be repaired.'], 'Modal + be + participle.'),
    Q('Which sentence is in the passive?', ['The rice was harvested in May.', 'They harvested the rice in May.', 'The rice grows well.', 'Farmers love rice.'], 'Be + participle.'),
  ],
  'aen-news-1': [
    Q('In headlines, "probe" usually means:', ['investigation', 'question', 'medical tool', 'spy'], 'Short headline word.'),
    Q('In headlines, "row" usually means:', ['quarrel', 'line', 'boat trip', 'noise'], 'A dispute.'),
    Q('The order of a news report, most important first, is called the:', ['inverted pyramid', 'flashback', 'protocol', 'thesis'], 'Key facts first.'),
    Q('"According to the police" is an example of:', ['attribution', 'a headline', 'a lead', 'an editorial'], 'Naming the source.'),
  ],
  'aen-coh-1': [
    Q('"I hope so." The word "so" is an example of:', ['substitution', 'reference', 'ellipsis', 'a time link'], 'So replaces a clause.'),
    Q('Which shows an example?', ['for instance', 'nevertheless', 'consequently', 'conversely'], 'Exemplification.'),
    Q('Lexical cohesion uses:', ['repeated key words and synonyms', 'only pronouns', 'only punctuation', 'question tags'], 'Vocabulary links.'),
    Q('Correct punctuation:', ['Fees rose; however, enrolment grew.', 'Fees rose, however enrolment grew.', 'Fees rose however, enrolment grew.', 'Fees rose however enrolment grew.'], 'Semicolon before, comma after.'),
  ],
  'aen-coh-2': [
    Q('The active of "He was made to wait" is:', ['They made him wait.', 'They made him to wait.', 'They make him waiting.', 'He made them wait.'], 'Make + object + bare infinitive in the active.'),
    Q('The passive of "They gave the winner a prize" can begin:', ['The winner was given...', 'The winner gave...', 'The winner is giving...', 'The winner has give...'], 'Indirect object as subject.'),
    Q('The active of "The gate was locked at six" needs:', ['a suitable subject, such as the watchman', 'no subject', 'a question mark', 'the future tense'], 'Supply the doer.'),
    Q('Changing voice should keep the:', ['tense and meaning', 'word order', 'number of words', 'punctuation only'], 'Only the structure changes.'),
  ],

  // ---------- Lower Sixth, Terms 2 and 3 ----------
  'aen-pp-1': [
    Q('"I ___ my phone. I can’t find it anywhere."', ['have lost', 'lost yesterday', 'had lose', 'lose'], 'A present result.'),
    Q('"When ___ the loan?"', ['did you receive', 'have you received', 'you received', 'do you received'], 'When questions take the simple past.'),
    Q('"We ___ for six months" (and still are):', ['have been saving', 'saved', 'save', 'had saved'], 'Present perfect continuous.'),
    Q('Which is wrong?', ['I have paid yesterday.', 'I paid yesterday.', 'I have just paid.', 'I have already paid.'], 'Yesterday is finished time.'),
  ],
  'aen-bank-1': [
    Q('To take money out of an account is to:', ['withdraw', 'deposit', 'invest', 'borrow'], 'Opposite of deposit.'),
    Q('Income left over after spending is a:', ['surplus', 'deficit', 'loan', 'debt'], 'Opposite of deficit.'),
    Q('A list of all the transactions on an account is a:', ['statement', 'receipt', 'budget', 'stock list'], 'From the bank.'),
    Q('A trader who accepts payments for goods is a:', ['merchant', 'debtor', 'auditor', 'referee'], 'Seller.'),
  ],
  'aen-modal-1': [
    Q('"Yesterday we ___ wait two hours at the bank."', ['had to', 'must', 'must have', 'should'], 'Past of must (obligation).'),
    Q('"You ___ applied earlier" (criticism of the past):', ['should have', 'must', 'can', 'may'], 'Should have + participle.'),
    Q('"Must" in "He must be at home; his car is outside" expresses:', ['a logical deduction', 'an obligation', 'a prohibition', 'permission'], 'Near certainty.'),
    Q('Which is correct?', ['She must sign the form.', 'She must to sign the form.', 'She musts sign the form.', 'She must signing the form.'], 'Modal + bare infinitive.'),
  ],
  'aen-cv-1': [
    Q('A short statement of your goals at the top of a CV is the:', ['profile or objective', 'referee', 'covering letter', 'signature'], 'A summary.'),
    Q('Before naming someone as a referee, you should:', ['ask their permission', 'pay them', 'invent their details', 'write to the employer'], 'Courtesy.'),
    Q('CV entries are best written as:', ['short phrases starting with action verbs', 'long paragraphs', 'questions', 'quotations'], '"Organised...", "Managed..."'),
    Q('A good CV is usually:', ['one or two pages long', 'ten pages long', 'handwritten in colours', 'without dates'], 'Concise.'),
  ],
  'aen-adj-1': [
    Q('Choose the correct order to describe the footballer.', ['a famous Cameroonian footballer', 'a Cameroonian famous footballer', 'a footballer famous Cameroonian', 'a famous footballer Cameroonian'], 'Opinion before origin.'),
    Q('Which compound adjective is correct?', ['a five-day workshop', 'a five-days workshop', 'a five days workshop', 'a fives-day workshop'], 'Singular, hyphenated.'),
    Q('Adjective from "danger":', ['dangerous', 'dangerful', 'dangerly', 'dangeric'], '-ous.'),
    Q('Adjective from "sustain" meaning "able to continue":', ['sustainable', 'sustainful', 'sustaining-able', 'sustainous'], '-able.'),
  ],
  'aen-eco-1': [
    Q('The variety of living things in an area is:', ['biodiversity', 'erosion', 'pollution', 'drought'], 'Bio + diversity.'),
    Q('Energy from the sun, wind or water is called:', ['renewable', 'fossil', 'nuclear', 'toxic'], 'It does not run out.'),
    Q('The 3 Rs are:', ['reduce, reuse, recycle', 'read, write, recite', 'rain, river, rock', 'repair, rent, resell'], 'Waste reduction.'),
    Q('"Flooding is caused by blocked drains" shows:', ['cause and effect', 'concession', 'a question', 'a comparison'], 'Is caused by.'),
  ],
  'aen-imp-1': [
    Q('The best start for a step in a procedure is:', ['a verb', 'a question', 'a name', 'a long clause'], 'Clear action.'),
    Q('Which softens an instruction?', ['Please', 'Never', 'Always', 'Must'], 'Politeness.'),
    Q('"Let’s clean the compound" is:', ['a suggestion including the speaker', 'a question', 'a past statement', 'a reported command'], 'Let us.'),
    Q('How long should hands be scrubbed with soap, as usually advised?', ['at least 20 seconds', '2 seconds', '10 minutes', 'one hour'], 'A common guideline.'),
  ],
  'aen-health-1': [
    Q('Oral rehydration solution treats:', ['dehydration', 'malaria parasites', 'broken bones', 'measles rash'], 'It replaces water and salts.'),
    Q('The parasite that causes malaria is:', ['Plasmodium', 'Vibrio', 'a virus', 'a worm'], 'Carried by Anopheles.'),
    Q('Cholera is caused by:', ['bacteria', 'mosquitoes', 'sunlight', 'cold weather'], 'Vibrio cholerae.'),
    Q('A sign of illness that the patient feels, such as headache, is a:', ['symptom', 'vaccine', 'diagnosis', 'cure'], 'Felt by the patient.'),
  ],
  'aen-sum-1': [
    Q('In a summary you should write in the:', ['third person, without your own opinions', 'first person with opinions', 'second person', 'imperative'], 'Report the passage.'),
    Q('Replacing "doctors, nurses and midwives" with "health workers" is:', ['generalising', 'quoting', 'repeating', 'expanding'], 'Covering word.'),
    Q('A topic sentence often contains a paragraph’s:', ['main point', 'example', 'statistic', 'quotation'], 'Look there first.'),
    Q('Which should be left out of a summary?', ['an anecdote', 'a main point', 'the thesis', 'a cause asked for'], 'Stories illustrate.'),
  ],
  'aen-sum-2': [
    Q('"It is important to note that prices rose" can be cut to:', ['Prices rose.', 'It is important prices rose.', 'Note prices.', 'Important prices.'], 'Remove empty openings.'),
    Q('"Make something smaller" in one word is:', ['reduce', 'enlarge', 'remove', 'measure'], 'Precise word.'),
    Q('A hyphenated word such as "well-known" counts as:', ['one word', 'two words', 'three words', 'no word'], 'One word.'),
    Q('Writing beyond the word limit:', ['loses marks', 'earns credit', 'shows effort', 'is ignored'], 'Respect limits.'),
  ],
  'aen-art-1': [
    Q('"___ one-day workshop"', ['A', 'An', 'The', 'No article'], 'One begins with /w/.'),
    Q('"___ Atlantic Ocean"', ['The', 'A', 'An', 'No article'], 'Oceans take "the".'),
    Q('"She goes to ___ church every Sunday" (to worship):', ['no article', 'the', 'a', 'an'], 'Institution in its main use.'),
    Q('"___ United States"', ['The', 'A', 'An', 'No article'], 'Plural country names take "the".'),
  ],
  'aen-rights-1': [
    Q('Cameroon’s present constitution dates from:', ['18 January 1996', '20 May 1972', '1 October 1961', '1 January 1960'], 'Law No. 96/06.'),
    Q('Rights that cannot be taken away are:', ['inalienable', 'optional', 'temporary', 'private'], 'They belong to every person.'),
    Q('A vote by all citizens on one question is a:', ['referendum', 'census', 'campaign', 'ballot box'], 'Direct decision.'),
    Q('Freedom to meet peacefully in groups is freedom of:', ['assembly', 'worship', 'expression', 'movement'], 'Public meetings.'),
  ],
  'aen-rep-1': [
    Q('"I can help," she said. Reported:', ['She said that she could help.', 'She said that I can help.', 'She said that she can helped.', 'She told that she could help.'], 'Can becomes could.'),
    Q('"tomorrow" in reported speech often becomes:', ['the next day', 'yesterday', 'the day before', 'today'], 'Or the following day.'),
    Q('Which needs an object?', ['tell', 'say', 'explain', 'reply'], 'Tell someone.'),
    Q('"He says he is tired" needs no backshift because:', ['the reporting verb is in the present', 'he is lying', 'it is a question', 'it is a command'], 'Present reporting verb.'),
  ],
  'aen-rep-2': [
    Q('"Is the office open?" she asked. Reported:', ['She asked if the office was open.', 'She asked is the office open.', 'She asked was the office open?', 'She asked that the office is open.'], 'If + statement order.'),
    Q('"Please wait here," the clerk said to us. Reported:', ['The clerk asked us to wait there.', 'The clerk said us to wait here.', 'The clerk asked us wait here.', 'The clerk told that we wait there.'], 'Ask + object + to-infinitive.'),
    Q('Favouring one’s relatives in jobs is:', ['nepotism', 'bribery', 'extortion', 'auditing'], 'From the Latin for nephew.'),
    Q('An official check of an organisation’s accounts is an:', ['audit', 'alibi', 'appeal', 'oath'], 'Accountability.'),
  ],
  'aen-conc-1': [
    Q('"___ the fact that it rained, the match continued."', ['Despite', 'Although', 'Even though', 'Though'], 'Despite the fact that + clause.'),
    Q('"___ some students study at night, others prefer the morning."', ['While', 'Despite', 'In spite of', 'Because of'], 'While contrasts two facts.'),
    Q('"The plan is costly. ___, it is necessary."', ['Nevertheless', 'Although', 'Despite', 'Whereas'], 'Across sentences.'),
    Q('"In spite of" is followed by:', ['a noun or a gerund', 'a full clause', 'an infinitive', 'nothing'], 'In spite of the cost / of being late.'),
  ],
  'aen-arg-1': [
    Q('The thesis statement usually comes:', ['at the end of the introduction', 'in the conclusion only', 'in the title only', 'in the last body paragraph'], 'It sets the direction.'),
    Q('Each body paragraph should contain:', ['one point with explanation and evidence', 'several unrelated points', 'only examples', 'only the thesis'], 'Unity.'),
    Q('Placing the strongest point last:', ['leaves a strong final impression', 'weakens the essay', 'is forbidden', 'repeats the introduction'], 'End strongly.'),
    Q('A fair counter-argument paragraph:', ['states the opposing view honestly before answering it', 'insults opponents', 'ignores the other side', 'changes the thesis'], 'Concede, then rebut.'),
  ],
  'aen-report-1': [
    Q('Which is the impersonal style of a report?', ['It was found that the roof leaks.', 'I found out the roof leaks, wow!', 'You will see the roof leaks.', 'Guess what, the roof leaks.'], 'Passive and neutral.'),
    Q('A report does not use:', ['Dear Sir and Yours faithfully', 'headings', 'numbered points', 'a title'], 'It is not a letter.'),
    Q('"The procedure" section explains:', ['how the information was gathered', 'what should be done', 'who signed', 'the title'], 'Methods.'),
    Q('Findings are usually written in the:', ['past tense', 'future tense', 'imperative', 'conditional'], 'What was found.'),
  ],
  'aen-report-2': [
    Q('A printed set of questions for many people is a:', ['questionnaire', 'memo', 'minute', 'thesis'], 'A survey tool.'),
    Q('"Several teachers believe the lights go off too early" is:', ['an opinion that should be reported as such', 'a proven fact', 'a recommendation', 'a title'], 'Separate facts from opinions.'),
    Q('Good recommendations are:', ['specific, practical and addressed to someone', 'vague wishes', 'jokes', 'repeated findings'], 'Who does what.'),
    Q('24 out of 30 as a percentage is:', ['80 percent', '24 percent', '30 percent', '54 percent'], '24 ÷ 30 × 100.'),
  ],
  'aen-speech-1': [
    Q('Speeches are written for the:', ['ear', 'eye only', 'filing cabinet', 'printer'], 'They are heard.'),
    Q('"First of all...", "My second point is..." are:', ['signposts', 'protocols', 'tags', 'clichés'], 'They guide listeners.'),
    Q('A farewell speech mainly:', ['recalls shared moments and says goodbye', 'reports findings', 'records decisions', 'complains'], 'Occasion shapes content.'),
    Q('The body of a speech usually develops:', ['two to four main points', 'twenty points', 'no points', 'only the protocol'], 'Manageable for listeners.'),
  ],
  'aen-article-1': [
    Q('A magazine article often opens with:', ['a question, a scene or a surprising fact', 'Dear Sir', 'the protocol', 'a list of references'], 'A hook.'),
    Q('"Kids", "children" and "young people" differ mainly in:', ['register', 'meaning', 'spelling rules', 'number'], 'Formality.'),
    Q('The writer’s attitude shown by word choice is the:', ['tone', 'byline', 'layout', 'headline'], 'Serious, light, ironic.'),
    Q('Who reads the text should decide:', ['the register, vocabulary and tone', 'nothing', 'only the title', 'only the length'], 'Audience first.'),
  ],
  'aen-l6-paper1': [
    Q('Choose the correct spelling of the word meaning "apart".', ['separate', 'seperate', 'separete', 'seprate'], 'There is "a rat" in separate.'),
    Q('Choose the correct spelling of the word meaning "a special right".', ['privilege', 'priviledge', 'privelege', 'privilage'], 'No d.'),
    Q('In a multiple-choice item, the wrong options are called:', ['distractors', 'stems', 'keys', 'answers'], 'Designed to look possible.'),
    Q('A good first step on a multiple-choice item is to:', ['predict the answer before reading the options', 'read the last option first', 'guess at once', 'skip it always'], 'Avoid being pulled away.'),
  ],
  'aen-l6-paper2': [
    Q('Before writing a composition, you should read:', ['all the options', 'only the first option', 'nothing', 'the answers of others'], 'Choose well.'),
    Q('The last minutes of a written paper are best used to:', ['proofread', 'start a new essay', 'leave early', 'rewrite the question'], 'Catch errors.'),
    Q('A speech written for a text-directed task still needs:', ['its own layout, with protocol and thanks', 'no layout', 'a letter ending', 'a reference number'], 'Form matters.'),
    Q('The Lower Sixth promotion examinations are best treated as:', ['a full rehearsal of the GCE under time', 'a holiday', 'optional', 'a quiz'], 'Practice for the real thing.'),
  ],

  ...QUESTIONS_U6,
};
