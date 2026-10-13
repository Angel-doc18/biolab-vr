// Extra end-of-lesson questions for the English Language lessons, by lesson id.
// The correct option is written first; options are shuffled when shown.

const Q = (q, a, why) => ({ q, a, why });

export const LESSON_QUESTIONS = {
  // ---------- Form 4, term 1 ----------
  'en-pronouns-4': [
    Q('"Between you and ___, the decision was unfair."', ['me', 'I', 'mine', 'myself'], 'After a preposition, use the object form.'),
    Q('"The land ___ caused the dispute belongs to the family."', ['which', 'who', 'whom', 'whose'], '"Which" is used for things.'),
    Q('"This bag is ___; that one is yours."', ['hers', 'her', 'she', 'her’s'], 'Possessive pronouns never take an apostrophe.'),
    Q('"The dog wagged ___ tail."', ['its', 'it’s', 'it', 'its’'], '"It’s" means "it is".'),
  ],
  'en-kinship-4': [
    Q('Your mother’s brother is your:', ['uncle', 'cousin', 'nephew', 'grandfather'], 'Your aunt is your parent’s sister.'),
    Q('The family of your husband or wife are your:', ['in-laws', 'siblings', 'ancestors', 'neighbours'], 'For example, your mother-in-law.'),
    Q('An agreement in which each side gives up part of its demands is a:', ['compromise', 'grievance', 'quarrel', 'verdict'], 'Both sides meet halfway.'),
    Q('When you listen for detail, you listen for:', ['Particular facts such as names and numbers', 'Only the general idea', 'The background music', 'Nothing in particular'], 'Gist is the general idea.'),
  ],
  'en-vowels-4': [
    Q('Which word has the long vowel /iː/?', ['field', 'film', 'fit', 'fish'], '"ie" in "field" is said /iː/.'),
    Q('"Leave" and "live" are a minimal pair because:', ['They differ in only one sound', 'They have the same meaning', 'They are spelt the same', 'They rhyme'], '/iː/ and /ɪ/ change the meaning.'),
    Q('Which word has the short vowel /ɪ/?', ['busy', 'beach', 'key', 'police'], '"Busy" is said /ˈbɪzi/.'),
    Q('The first vowel sound in "women" is:', ['/ɪ/', '/ʊ/', '/ə/', '/iː/'], '"Women" is said /ˈwɪmɪn/.'),
  ],
  'en-pastsimple-4': [
    Q('The past tense of "carry" is:', ['carried', 'carryed', 'carred', 'carrid'], 'y after a consonant becomes i before -ed.'),
    Q('The past tense of "stop" is:', ['stopped', 'stoped', 'stopt', 'stopping'], 'The final consonant is doubled.'),
    Q('"They ___ not go to the festival."', ['did', 'do', 'were', 'have'], 'Negatives in the simple past take "did not" + base form.'),
    Q('The past tense of "sing" is:', ['sang', 'sung', 'singed', 'song'], 'sing, sang, sung.'),
  ],
  'en-festivals-4': [
    Q('The Nguon festival is held by the:', ['Bamoun people in Foumban', 'Sawa people in Douala', 'Bakweri in Buea', 'Fulani in Garoua'], 'It reviews the Sultan’s rule.'),
    Q('A drink poured as an offering to the ancestors is a:', ['libation', 'procession', 'masquerade', 'regalia'], 'Libations are part of many traditional rites.'),
    Q('"The drums sounded like thunder" is an example of a:', ['simile', 'metaphor', 'question', 'command'], 'A simile compares using "like" or "as".'),
    Q('Reading quickly to get the general idea of a text is:', ['skimming', 'scanning', 'dictation', 'translation'], 'Scanning looks for particular facts.'),
  ],
  'en-edsound-4': [
    Q('In "decided", the "-ed" is pronounced:', ['/ɪd/', '/t/', '/d/', 'silently'], '"Decide" ends in /d/.'),
    Q('In "washed", the "-ed" is pronounced:', ['/t/', '/d/', '/ɪd/', '/ed/'], '"Wash" ends in the voiceless /ʃ/.'),
    Q('In "lived", the "-ed" is pronounced:', ['/d/', '/t/', '/ɪd/', '/ed/'], '"Live" ends in the voiced /v/.'),
    Q('Which verb gains an extra syllable in the past tense?', ['plant', 'jump', 'call', 'kiss'], '"Planted" ends in /ɪd/ because "plant" ends in /t/.'),
  ],
  'en-adjectives-4': [
    Q('Choose the correct order:', ['a big old Cameroonian drum', 'an old big Cameroonian drum', 'a Cameroonian big old drum', 'a big Cameroonian old drum'], 'Size, age, origin.'),
    Q('In "a cooking pot", the word "cooking" shows:', ['purpose', 'colour', 'age', 'origin'], 'It says what the pot is for.'),
    Q('Which adjective expresses an opinion?', ['lovely', 'square', 'metal', 'green'], 'An opinion is what someone thinks.'),
    Q('"The dancers looked ___."', ['graceful', 'gracefully', 'grace', 'gracefulness'], 'After "look" meaning "seem", use an adjective.'),
  ],
  'en-conjunctions-4': [
    Q('"Do you want rice ___ plantains?"', ['or', 'but', 'so', 'nor'], '"Or" gives a choice.'),
    Q('"He studied hard, ___ he passed."', ['so', 'but', 'or', 'yet'], '"So" shows a result.'),
    Q('Which sentence is punctuated correctly?', ['It was late, but we kept dancing.', 'It was late but, we kept dancing.', 'It was late, but, we kept dancing.', 'It was late but we, kept dancing.'], 'The comma goes before the conjunction.'),
    Q('"FANBOYS" helps you remember:', ['The coordinating conjunctions', 'The order of adjectives', 'The parts of a letter', 'The irregular verbs'], 'for, and, nor, but, or, yet, so.'),
  ],
  'en-informalletter-4': [
    Q('Which closing suits a letter to your best friend?', ['Your friend,', 'Yours faithfully,', 'Yours respectfully,', 'Yours obediently,'], 'Informal letters use warm closings.'),
    Q('The first paragraph of an informal letter usually:', ['Greets the reader and gives a reason for writing', 'States the price of goods', 'Gives a subject line', 'Lists qualifications'], 'It opens warmly.'),
    Q('Which should not be used in a school informal letter?', ['SMS spellings such as "u" for "you"', 'Paragraphs', 'Contractions such as "I’m"', 'A friendly tone'], 'Write words in full.'),
    Q('An informal letter is signed with:', ['Your first name', 'Your full name and title', 'Your signature and full name', 'Your class only'], 'The reader knows you.'),
  ],
  'en-future-4': [
    Q('"I promise I ___ return your book tomorrow."', ['will', 'am going to', 'am returning', 'returned'], 'Promises take "will".'),
    Q('"She ___ start a tailoring business next year; she has saved the money."', ['is going to', 'will', 'was', 'has'], 'A plan already decided.'),
    Q('"Shall I carry your bag?" is:', ['An offer', 'A prediction', 'A threat', 'A complaint'], '"Shall I…?" offers help.'),
    Q('"We ___ the director at ten tomorrow; it is all arranged."', ['are meeting', 'meet', 'met', 'have met'], 'A fixed arrangement: the present continuous.'),
  ],
  'en-jobs-4': [
    Q('Pay given to an employee every month is a:', ['salary', 'wage', 'tip', 'fine'], 'Wages are usually paid daily or weekly.'),
    Q('Which job is a trade?', ['mason', 'lawyer', 'pharmacist', 'judge'], 'A trade is a skilled manual job.'),
    Q('The person who applies for a job is the:', ['applicant', 'employer', 'referee', 'manager'], 'The employer offers the job.'),
    Q('A good answer to "What are your strengths?" is:', ['"I am organised: I kept our club’s accounts for two years."', '"I don’t know."', '"Everything."', '"Ask my friends."'], 'Name a strength and prove it.'),
  ],
  'en-wordstress-4': [
    Q('In "musician", the stress falls on:', ['mu-SI-cian', 'MU-si-cian', 'mu-si-CIAN', 'no syllable'], 'The syllable before "-cian".'),
    Q('In "economic", the stress falls on:', ['e-co-NO-mic', 'E-co-no-mic', 'e-CO-no-mic', 'e-co-no-MIC'], 'The syllable before "-ic".'),
    Q('In "employee", the stress falls on:', ['em-ploy-EE', 'EM-ploy-ee', 'em-PLOY-ee', 'no syllable'], 'Words ending in "-ee" stress the ending.'),
    Q('A stressed syllable is:', ['Louder, longer and higher', 'Always the first syllable', 'Always the last syllable', 'Silent'], 'Stress makes one syllable stand out.'),
  ],
  'en-presperfect-4': [
    Q('"Have you ___ eaten achu?"', ['ever', 'yesterday', 'ago', 'last'], '"Ever" goes with the present perfect.'),
    Q('"I ___ this phone two years ago."', ['bought', 'have bought', 'have buy', 'buy'], '"Ago" takes the simple past.'),
    Q('"They have lived in Limbe ___ 2018."', ['since', 'for', 'ago', 'in'], '"Since" + a point in time.'),
    Q('"She has worked here ___ ten years."', ['for', 'since', 'ago', 'during'], '"For" + a length of time.'),
  ],
  'en-money-4': [
    Q('To discuss a price with a seller to make it lower is to:', ['bargain', 'invest', 'deposit', 'retail'], 'Bargaining is common in markets.'),
    Q('A paper showing that you have paid is a:', ['receipt', 'loan', 'debt', 'budget'], 'Keep receipts as proof.'),
    Q('To take money out of a bank account is to:', ['withdraw', 'deposit', 'save', 'credit'], 'To put money in is to deposit.'),
    Q('Sales were 80 000 FCFA in March and 40 000 FCFA in February. March sales were ___ February sales.', ['twice as high as', 'half as high as', 'the same as', 'lower than'], '80 000 is twice 40 000.'),
  ],
  'en-clusters-4': [
    Q('Which word ends with the cluster /sks/?', ['desks', 'desk', 'dress', 'disc'], 'desk + s.'),
    Q('Saying "sitreet" for "street" is an error because:', ['A vowel has been added inside the cluster', 'The word is misspelt', 'The stress is wrong', 'A letter is silent'], 'Say /str/ together.'),
    Q('Which word begins with a consonant cluster?', ['spring', 'apple', 'open', 'early'], '/spr/.'),
    Q('"Asked" ends with the sounds:', ['/skt/', '/sk/', '/kt/', '/st/'], 'ask + /t/.'),
  ],
  'en-modals-4': [
    Q('"Students ___ not use phones in the examination hall." (it is forbidden)', ['must', 'need', 'may', 'could'], '"Must not" forbids.'),
    Q('"You ___ come early; the bus leaves at noon." (it is not necessary)', ['needn’t', 'mustn’t', 'can’t', 'shouldn’t'], '"Need not" means it is not necessary.'),
    Q('Which sentence is correct?', ['He must leave now.', 'He must to leave now.', 'He musts leave now.', 'He must leaving now.'], 'Modal + base form.'),
    Q('"Visitors ___ take photographs here." (it is allowed)', ['may', 'must', 'need', 'should not'], '"May" gives permission.'),
  ],
  'en-phrasal-4': [
    Q('"We ___ at Kumba for the night." (broke our journey)', ['stopped over', 'set off', 'checked out', 'got on'], 'To stop over is to break a journey.'),
    Q('"Please ___ me ___ at the station at six." (collect)', ['pick … up', 'drop … off', 'set … off', 'get … back'], '"Pick up" means collect.'),
    Q('In a group discussion you should:', ['Take turns and refer to what others said', 'Speak all the time', 'Shout others down', 'Stay silent'], 'Listening is part of discussing.'),
    Q('Which is a polite way to disagree?', ['"I see your point, but I think…"', '"That is stupid."', '"You are wrong, keep quiet."', '"Whatever."'], 'Acknowledge the view, then give yours.'),
  ],
  'en-politeintonation-4': [
    Q('"Do you sell tickets here?" usually ends:', ['rising', 'falling', 'level', 'in a whisper'], 'It is a yes/no question.'),
    Q('"Why are you late?" usually ends:', ['falling', 'rising', 'level', 'with a shout'], 'It is a wh-question.'),
    Q('A request said with a flat, falling tone may sound:', ['rude or impatient', 'very polite', 'like a song', 'like a question'], 'A gentle rise sounds more polite.'),
    Q('Which is the most polite request?', ['"Would you mind opening the window?"', '"Open the window."', '"Window!"', '"You, open it."'], '"Would you mind…?" is very polite.'),
  ],
  'en-adverbs-4': [
    Q('"We have ___ finished." (an adverb of time)', ['already', 'often', 'here', 'carefully'], '"Already" says when.'),
    Q('Choose the correct sentence.', ['I have never visited Kribi.', 'I never have visited Kribi.', 'I have visited never Kribi.', 'Never I have visited Kribi.'], 'After the first auxiliary.'),
    Q('Which adverb shows the lowest frequency?', ['never', 'sometimes', 'often', 'usually'], 'Never means not at all.'),
    Q('A formal way to say "soon" in a letter is:', ['at your earliest convenience', 'quick quick', 'now now', 'whenever'], 'It is polite and formal.'),
  ],
  'en-formalletter-4': [
    Q('In a formal letter, the receiver’s address comes:', ['On the left, after the date', 'At the very bottom', 'Before the writer’s address', 'In the subject line'], 'It shows who the letter is for.'),
    Q('Which phrase begins a letter of inquiry well?', ['"I am writing to inquire about…"', '"Hi, what’s up?"', '"Give me information."', '"Long time no see."'], 'State the purpose politely.'),
    Q('Which should a formal letter avoid?', ['Contractions such as "I’m"', 'Paragraphs', 'A subject line', 'A polite closing'], 'Write "I am" in full.'),
    Q('The last paragraph of a letter of inquiry usually:', ['Thanks the reader and asks for a reply', 'Tells your life story', 'Repeats the address', 'Contains a joke'], 'End politely.'),
  ],

  // ---------- Form 4, term 2 ----------
  'en-passive-4': [
    Q('The passive of "The pupils clean the classroom" is:', ['The classroom is cleaned by the pupils.', 'The classroom was cleaned by the pupils.', 'The pupils are cleaned by the classroom.', 'The classroom cleaned the pupils.'], 'Present simple passive.'),
    Q('"The bridge ___ in 2015."', ['was built', 'is built', 'built', 'has build'], 'Past simple passive.'),
    Q('Which sentence is in the passive?', ['The gutters were cleared.', 'They cleared the gutters.', 'They are clearing the gutters.', 'They will clear the gutters.'], 'be + past participle.'),
    Q('The passive is useful when:', ['The doer is unknown or unimportant', 'You want to hide the verb', 'The sentence has no object', 'You speak about the future only'], 'The action matters more than the doer.'),
  ],
  'en-ecovocab-4': [
    Q('Planting trees where a forest was cut down is:', ['reforestation', 'deforestation', 'erosion', 'desertification'], 'Re- means again.'),
    Q('The wearing away of soil by water or wind is:', ['erosion', 'recycling', 'irrigation', 'evaporation'], 'Bare soil erodes quickly.'),
    Q('Which is a cause–effect marker?', ['as a result', 'for example', 'in contrast', 'firstly'], 'It introduces a result.'),
    Q('In an expository article, the main idea of a paragraph is often in:', ['The first sentence', 'The last word', 'The title only', 'A footnote'], 'This is the topic sentence.'),
  ],
  'en-silent-4': [
    Q('Which word has a silent "w"?', ['wrist', 'window', 'swim', 'away'], 'w is silent before r.'),
    Q('Which word has a silent "g"?', ['foreign', 'garden', 'begin', 'guard'], 'g is silent before n here.'),
    Q('In "receipt", the silent letter is:', ['p', 'c', 't', 'r'], 'It is said /rɪˈsiːt/.'),
    Q('In "hour", the "h" is:', ['silent', 'pronounced /h/', 'pronounced /k/', 'doubled'], 'So we say "an hour".'),
  ],
  'en-comparison-4': [
    Q('The comparative of "bad" is:', ['worse', 'badder', 'more bad', 'worst'], 'bad, worse, worst.'),
    Q('"Lake Chad is ___ than it was in 1960."', ['smaller', 'more small', 'smallest', 'the smaller'], 'Short adjective + -er.'),
    Q('"This forest is not ___ big ___ Korup."', ['as … as', 'more … than', 'so … that', 'the … the'], '"Not as … as" compares unequal things.'),
    Q('"The cheetah is ___ land animal."', ['the fastest', 'the most fast', 'faster', 'the more fast'], 'One syllable: the -est form.'),
  ],
  'en-descriptive-4': [
    Q('The animal life of an area is its:', ['fauna', 'flora', 'climate', 'soil'], 'Flora is plant life.'),
    Q('Illegal hunting of protected animals is:', ['poaching', 'farming', 'grazing', 'herding'], 'It threatens gorillas and elephants.'),
    Q('A descriptive essay should be organised:', ['From general to particular, one aspect per paragraph', 'In any order', 'In one long paragraph', 'As a list of words'], 'Order helps the reader.'),
    Q('Which animal is endangered in Cameroon?', ['The Cross River gorilla', 'The goat', 'The domestic chicken', 'The house cat'], 'Very few remain in the wild.'),
  ],
  'en-imperatives-4': [
    Q('Which sentence is an imperative?', ['Cover your food.', 'Food is covered.', 'Is the food covered?', 'They covered the food.'], 'It begins with the verb.'),
    Q('"He has a cough and a fever. It ___ be the flu." (possible)', ['could', 'can’t', 'mustn’t', 'shouldn’t'], '"Could" shows possibility.'),
    Q('The negative of "Touch the wound" is:', ['Do not touch the wound.', 'Not touch the wound.', 'Touch not the wound.', 'You no touch the wound.'], '"Do not" + base form.'),
    Q('"Let’s clean the compound" is:', ['A suggestion', 'A question', 'A complaint', 'A prediction'], '"Let’s" suggests doing something together.'),
  ],
  'en-healthvocab-4': [
    Q('Malaria is spread by:', ['Infected female Anopheles mosquitoes', 'Dirty water', 'Shaking hands', 'Eating mangoes'], 'Treated nets prevent the bites.'),
    Q('A substance that protects the body against a disease is a:', ['vaccine', 'symptom', 'virus', 'germ'], 'Vaccines build immunity.'),
    Q('Keeping sick people apart so the disease does not spread is:', ['quarantine', 'diagnosis', 'immunity', 'hygiene'], 'It stops transmission.'),
    Q('When taking notes from a broadcast, you should write:', ['Key words, names and numbers', 'Every word', 'Only your opinions', 'Nothing'], 'Notes are short.'),
  ],
  'en-fallingintonation-4': [
    Q('"Take two tablets a day." is said with:', ['a falling tone', 'a rising tone', 'no stress', 'a whisper'], 'It is an instruction.'),
    Q('The syllable where the main change of pitch happens is the:', ['nucleus', 'consonant', 'cluster', 'article'], 'It is usually on the most important word.'),
    Q('A statement of fact usually ends:', ['falling', 'rising', 'level', 'like a question'], 'It sounds complete.'),
    Q('An instruction said with a rising tone may sound:', ['unsure, like a question', 'very firm', 'angry', 'complete'], 'Falling sounds clear and certain.'),
  ],
  'en-articles-4': [
    Q('"It took ___ hour to reach Ebolowa."', ['an', 'a', 'the', 'no article'], '"Hour" begins with a vowel sound.'),
    Q('"___ Atlantic Ocean borders Cameroon."', ['The', 'An', 'A', 'No article'], 'Oceans take "the".'),
    Q('"She is ___ university student."', ['a', 'an', 'the', 'no article'], '"University" begins with the sound /j/.'),
    Q('"___ children have the right to education."', ['No article: Children', 'The', 'A', 'An'], 'A general plural noun takes no article.'),
  ],
  'en-debate-4': [
    Q('In Cameroon, citizens may vote from the age of:', ['20', '18', '21', '16'], 'The voting age fixed by the electoral law is 20.'),
    Q('Paying taxes and obeying the law are examples of:', ['duties', 'rights', 'privileges', 'debates'], 'Duties are obligations.'),
    Q('The side that supports the motion in a debate is the:', ['proposition', 'opposition', 'audience', 'chairperson'], 'The opposition speaks against it.'),
    Q('Unfair treatment of a person because of sex, tribe or religion is:', ['discrimination', 'empowerment', 'equality', 'citizenship'], 'It goes against human rights.'),
  ],
  'en-thsounds-4': [
    Q('Which word ends with the voiceless /θ/?', ['mouth', 'smooth', 'breathe', 'soothe'], 'The others end with voiced /ð/.'),
    Q('Saying "tree" for "three" changes:', ['/θ/ into /t/', '/ð/ into /d/', '/s/ into /z/', 'the vowel only'], 'Put the tongue between the teeth for /θ/.'),
    Q('"Breath" and "breathe" differ because:', ['"Breath" has /θ/ and "breathe" has /ð/', 'They sound the same', '"Breath" is a verb', '"Breathe" has /θ/'], 'The noun is voiceless; the verb is voiced.'),
    Q('Which word contains the voiced /ð/?', ['weather', 'method', 'author', 'nothing'], 'The others have /θ/.'),
  ],
  'en-degree-4': [
    Q('"The water is ___ hot to drink."', ['too', 'enough', 'very much', 'so much'], '"Too" means more than is wanted.'),
    Q('"He is old ___ to vote."', ['enough', 'too', 'very', 'so'], '"Enough" comes after the adjective.'),
    Q('Which sentence is correct?', ['Although he was ill, he came to school.', 'Although he was ill, but he came to school.', 'Despite he was ill, he came.', 'Although of his illness, he came.'], 'Never use "although" and "but" together.'),
    Q('"In spite of ___, the match went on."', ['the rain', 'it rained', 'it was raining', 'rain fell'], '"In spite of" + a noun.'),
  ],
  'en-narrative-4': [
    Q('The time and place of a story are its:', ['setting', 'climax', 'conflict', 'theme'], 'Where and when it happens.'),
    Q('The main problem in a story is the:', ['conflict', 'setting', 'resolution', 'title'], 'The story is about solving it.'),
    Q('In "forgiveness", the stress falls on:', ['for-GIVE-ness', 'FOR-give-ness', 'for-give-NESS', 'no syllable'], 'The stress stays on "give".'),
    Q('An inference question asks you to:', ['Work out what the writer suggests but does not say directly', 'Copy a sentence', 'Count the paragraphs', 'Give the title'], 'Read between the lines.'),
  ],
  'en-pastcont-4': [
    Q('"What ___ you doing at 8 p.m. yesterday?"', ['were', 'did', 'are', 'have'], 'A past continuous question.'),
    Q('"The guard ___ when the thief escaped."', ['was sleeping', 'slept', 'is sleeping', 'has slept'], 'A longer action interrupted.'),
    Q('"He ___ the door, took the bag and ran away."', ['opened', 'was opening', 'opens', 'has opened'], 'A sequence of completed actions.'),
    Q('"While I was reading, my sister ___ TV."', ['was watching', 'watched', 'watches', 'has watched'], 'Two actions in progress at the same time.'),
  ],
  'en-reported-4': [
    Q('"I can help," she said. In reported speech:', ['She said that she could help.', 'She said that she can help.', 'She said that I could help.', 'She says she could helped.'], '"Can" becomes "could".'),
    Q('"Where do you live?" he asked me. In reported speech:', ['He asked me where I lived.', 'He asked me where do I live.', 'He asked me where did I live.', 'He asked me where I live?'], 'The question becomes a statement and the tense moves back.'),
    Q('"Stop!" the officer said to the driver. In reported speech:', ['The officer ordered the driver to stop.', 'The officer said the driver stop.', 'The officer told stop to the driver.', 'The officer asked if stop.'], 'A command: told or ordered + to.'),
    Q('The accused said that he had not been there. A suitable reporting verb is:', ['denied', 'admitted', 'promised', 'thanked'], 'To deny is to say something is not true.'),
  ],
  'en-transitions-4': [
    Q('Which marker introduces an example?', ['for instance', 'however', 'therefore', 'finally'], 'Also "for example" and "such as".'),
    Q('"___, I will sum up my arguments."', ['In conclusion', 'For example', 'However', 'Moreover'], 'It begins the final paragraph.'),
    Q('Which is correctly punctuated?', ['Bribes are illegal; however, some people pay them.', 'Bribes are illegal, however some people pay them.', 'Bribes are illegal however, some people pay them.', 'Bribes are illegal however some people, pay them.'], '"However" between two clauses needs a semicolon before it.'),
    Q('Cohesion in writing means that:', ['The ideas are linked so that the text flows', 'Every sentence begins the same way', 'The text is very long', 'There are many pictures'], 'Linking words help cohesion.'),
  ],
  'en-argument-4': [
    Q('A counter-argument is:', ['An opposing view that the writer answers', 'The title of the essay', 'The writer’s main point', 'A list of examples'], 'Answering it strengthens your case.'),
    Q('"Who will build the nation if not the youth?" is a:', ['rhetorical question', 'question that needs an answer', 'command', 'simile'], 'It persuades without expecting a reply.'),
    Q('How many main arguments should a short argumentative essay usually develop?', ['Three or four, each in its own paragraph', 'Only one, repeated', 'Fifteen', 'None'], 'Each one needs an example.'),
    Q('Before writing an argumentative essay, you should:', ['Plan your points and choose the strongest', 'Write the conclusion only', 'Copy a model essay', 'Write without a plan'], 'Five minutes of planning saves time later.'),
  ],

  // ---------- Form 4, term 3 ----------
  'en-conditionals-4': [
    Q('"If you ___ your password, your account will be safe."', ['protect', 'protected', 'will protect', 'would protect'], 'Type I: if + present simple.'),
    Q('"If I were rich, I ___ build a computer centre."', ['would', 'will', 'am', 'did'], 'Type II: would + base form.'),
    Q('"Unless you save the file, you will lose it" means:', ['If you do not save the file, you will lose it.', 'If you save the file, you will lose it.', 'You will lose it anyway.', 'You saved the file.'], '"Unless" means "if not".'),
    Q('Which sentence is wrong?', ['If it will rain, we will stay home.', 'If it rains, we will stay home.', 'We will stay home if it rains.', 'If it rained, we would stay home.'], 'Never use "will" in the if-clause.'),
  ],
  'en-ictvocab-4': [
    Q('Copying a file from the internet to your device is:', ['downloading', 'uploading', 'printing', 'scanning'], 'Uploading sends a file to the internet.'),
    Q('A copy of your files kept in case they are lost is a:', ['backup', 'virus', 'browser', 'password'], 'Back up your work regularly.'),
    Q('In "keyboard", the stress falls on:', ['KEY-board', 'key-BOARD', 'both syllables equally', 'no syllable'], 'Compound nouns stress the first part.'),
    Q('Instructions in a manual usually use:', ['Imperatives and sequence words', 'Questions only', 'Poems', 'The passive only'], 'First, next, then, finally.'),
  ],
  'en-gerunds-4': [
    Q('"They avoided ___ the link."', ['clicking', 'to click', 'click', 'clicked'], '"Avoid" takes a gerund.'),
    Q('"I hope ___ a programmer."', ['to become', 'becoming', 'become', 'became'], '"Hope" takes an infinitive.'),
    Q('"She is good at ___ websites."', ['designing', 'to design', 'design', 'designed'], 'After a preposition, use the gerund.'),
    Q('"Remember ___ out of the school computer."', ['to log', 'logging', 'log', 'logged'], '"Remember to" means do not forget to.'),
  ],
  'en-article-4': [
    Q('A magazine article begins with a:', ['headline', 'greeting', 'receiver’s address', 'signature'], 'It catches the reader’s attention.'),
    Q('Which is not a feature of an article?', ['A receiver’s address', 'A headline', 'A by-line', 'Paragraphs'], 'An article is not a letter.'),
    Q('Messages that try to steal passwords by pretending to come from a bank are:', ['phishing', 'tagging', 'streaming', 'blogging'], 'Banks never ask for your PIN by message.'),
    Q('An article for fellow students should be written in a tone that is:', ['Friendly but serious', 'Rude', 'As formal as a court report', 'Careless'], 'Suit the readers.'),
  ],
  'en-tagquestions-4': [
    Q('"I am right, ___?"', ['aren’t I', 'am not I', 'isn’t I', 'don’t I'], 'A special case: "aren’t I".'),
    Q('"Let’s start, ___?"', ['shall we', 'will we', 'don’t we', 'let we'], '"Let’s" takes "shall we".'),
    Q('"He didn’t call, ___?"', ['did he', 'didn’t he', 'does he', 'was he'], 'A negative statement takes a positive tag.'),
    Q('A question tag said with a rising tone shows that the speaker:', ['Is really asking', 'Is sure of the answer', 'Is giving an order', 'Is angry'], 'A falling tag expects agreement.'),
  ],
  'en-paper1-4': [
    Q('Choose the correctly spelt word.', ['accommodation', 'acommodation', 'accomodation', 'acomodation'], 'Double c and double m.'),
    Q('Choose the antonym of "generous".', ['mean', 'kind', 'rich', 'polite'], '"Mean" here means unwilling to give.'),
    Q('Which word rhymes with "though"?', ['go', 'through', 'tough', 'cough'], '"Though" is said /ðəʊ/.'),
    Q('"The news ___ good."', ['is', 'are', 'were', 'have'], '"News" is uncountable and takes a singular verb.'),
  ],
  'en-paper2-4': [
    Q('In Section A of Paper 2 you should first:', ['Read all the choices and pick the one you can develop best', 'Write about the first title without reading the others', 'Copy the passage', 'Write a summary'], 'Choose wisely.'),
    Q('Accuracy marks in a composition are given for:', ['Grammar, spelling and punctuation', 'The length of the title', 'Neat drawings', 'The colour of ink'], 'Proofread to protect them.'),
    Q('In a Section B summary, you should write in:', ['Full sentences and your own words', 'Notes copied from the passage', 'Quotations only', 'Pidgin'], 'Unless notes are asked for.'),
    Q('If a summary has a word limit, you should:', ['Keep within it', 'Double it', 'Ignore it', 'Write one word'], 'Extra words can lose marks.'),
  ],
};
