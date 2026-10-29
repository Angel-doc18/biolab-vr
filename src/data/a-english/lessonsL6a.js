// A Level English Language lessons (0730), Lower Sixth, Term 1: kinship and
// relative clauses, text reconstruction, consonants and letters, ICT and
// conditionals, social media and gerunds, intonation and narrative, the
// passive and the news, and cohesion. Each topic ends with the week's
// practice task. Original text written for this app; phonetic symbols follow
// the International Phonetic Alphabet.

const PAPER = { 'Speech work': 'Paper 1', Writing: 'Written papers', Summary: 'Written papers' };

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

export const LESSONS_EL6A = [
  // ---------- 1. Kinship and conflict ----------
  L('aen-rel-1', 'aen-l6-kinship', '1.1', 'Relative pronouns and relative clauses', 16, ['Grammar'], [
    'A **relative clause** describes a noun and begins with a relative word: **who** and **whom** for people, **which** for things, **whose** for possession (people or things), **that** for people or things, **where** for places, **when** for times and **why** after "reason".',
    'A **defining** clause tells us which one we mean and takes no commas: "The cousin **who lives in Buea** called." A **non-defining** clause adds extra information between commas, and cannot begin with "that": "My grandmother, **who is ninety**, still farms."',
    'In formal English a preposition goes before **whom** or **which**: "the elder **to whom** we appealed", "the land **over which** they quarrelled". In everyday English it moves to the end and the pronoun may drop: "the elder we appealed to". Never write both: "the elder to whom we appealed to".',
    '**Whose** is used for things as well as people: "a family **whose** land was taken", "a house **whose** roof leaks". In a defining clause, the object pronoun can be left out: "the advice (that) she gave".',
  ], 'aen-relatives', 'Cover the clause with your finger: if the sentence still tells you who is meant, the clause is non-defining and needs commas.',
  ['"The compound ___ the meeting was held belongs to the chief."', ['where', 'which', 'whom', 'whose'], 'Where = in which, for a place.'],
  [['Relative clause', 'A clause that describes a noun, introduced by who, whom, whose, which, that, where or when.'], ['Defining clause', 'A relative clause that identifies the noun; no commas.'], ['Non-defining clause', 'A relative clause that adds extra information, between commas.']],
  [
    { q: 'Join with a relative clause: "My uncle settled the quarrel. My uncle is a retired judge."', steps: ['The second sentence adds extra information about a known person.', 'Use who, between commas.', '**My uncle, who is a retired judge, settled the quarrel.**'] },
    { q: 'Make formal: "That is the family I told you about."', steps: ['The preposition "about" belongs to the relative clause.', 'In formal English it goes before whom or which.', '**That is the family about which (or about whom) I told you.**'] },
  ]),

  L('aen-cmp-1', 'aen-l6-kinship', '1.2', 'Compound nouns, and reading a family dispute', 16, ['Vocabulary'], [
    'A **compound noun** joins two or more words into one meaning. It may be written as one word (**peacemaker**, **grandparent**), as two words (**family meeting**, **land dispute**) or with hyphens (**mother-in-law**, **go-between**). A good dictionary shows which form is used.',
    '**Plurals**: the main noun takes the -s. **Mothers-in-law**, **passers-by**, **sons-in-law**, **commanders-in-chief**; but **grandparents**, **land disputes**. When there is no main noun, add -s at the end: **go-betweens**, **forget-me-nots**.',
    'Vocabulary of conflict and its resolution: a **dispute** or **quarrel** arises; a **grievance** is a complaint; the **parties** may seek **mediation** from a neutral **mediator** or **go-between**; they reach a **compromise** or **settlement**, and finally **reconciliation**.',
    '**Practice task (resolving conflict):** read a short account of a quarrel over a family farm, note each party’s grievance, then write five sentences proposing a fair settlement, each with a relative clause and a compound noun.',
  ], 'aen-compounds', 'Ask "a what?": a mother-in-law is a mother, so "mother" takes the plural.',
  ['The plural of "brother-in-law" is:', ['brothers-in-law', 'brother-in-laws', 'brothers-in-laws', 'brother-ins-law'], 'The main word, brother, takes the -s.'],
  [['Compound noun', 'A noun made of two or more words, such as peacemaker or mother-in-law.'], ['Mediation', 'Help from a neutral person to settle a dispute.'], ['Reconciliation', 'The restoring of friendly relations after a quarrel.']],
  [
    { q: 'Give the plurals: (a) passer-by (b) toothbrush (c) commander-in-chief (d) step-sister.', steps: ['(a) passers-by: the person is the passer.', '(b) toothbrushes: one word, -es after sh. (c) commanders-in-chief.', '**(d) step-sisters.**'] },
    { q: 'Two brothers both claim their late father’s farm. Use four words from the lesson in one sentence.', steps: ['Name the problem, the helper and the result.', 'Choose: dispute, parties, mediator, settlement.', '**The dispute ended when a mediator helped both parties to accept a settlement.**'] },
  ]),

  // ---------- 2. Heritage and text reconstruction ----------
  L('aen-recon-1', 'aen-l6-heritage', '2.1', 'Text reconstruction: from present to past', 17, ['Grammar'], [
    '**Text reconstruction** asks you to rewrite a passage in another tense, person or form while keeping its meaning. The commonest task moves a narrative from the **simple present** to the **simple past**.',
    'Move **every** narrative verb one step back: simple present → simple past (**dances → danced**), present continuous → past continuous (**are singing → were singing**), present perfect → past perfect (**has blessed → had blessed**), will → would, can → could, is held → was held.',
    'Do not change: words inside quotation marks, general truths only when the passage clearly treats them as timeless ("The Ngondo is celebrated by the Sawa people" may become "was celebrated" in a story of one festival; follow the passage), and the spelling of names.',
    'Words of time may need to follow the new viewpoint: **now → then**, **today → that day**, **this year → that year**. Read the whole passage first, then change verb by verb, then reread for agreement: **was/were** must match the subject.',
  ], 'aen-tense-shift', 'Underline every verb before you begin; then tick each one as you change it.',
  ['In the past, "The drummers are playing" becomes:', ['The drummers were playing.', 'The drummers played playing.', 'The drummers was playing.', 'The drummers had playing.'], 'Present continuous becomes past continuous.'],
  [['Text reconstruction', 'Rewriting a passage in another tense, person or form without changing its meaning.'], ['Simple past', 'The tense for completed past actions: danced, went.'], ['Past perfect', 'Had + past participle, for an action before another past action.']],
  [
    { q: 'Rewrite in the past: "Every December, the villagers gather at the palace. The chief, who has prepared for weeks, welcomes them."', steps: ['gather → gathered; welcomes → welcomed.', 'has prepared → had prepared (earlier than the welcome).', '**Every December, the villagers gathered at the palace. The chief, who had prepared for weeks, welcomed them.**'] },
    { q: 'Rewrite in the past: "Now the masks come out and the crowd is shouting."', steps: ['Now → then (the viewpoint moves to the past).', 'come → came; is shouting → was shouting.', '**Then the masks came out and the crowd was shouting.**'] },
  ]),

  L('aen-recon-2', 'aen-l6-heritage', '2.2', 'Earlier events, irregular verbs and the language of heritage', 16, ['Grammar'], [
    'In a past narrative, an action that happened **before** another past action takes the **past perfect**: "By the time we **arrived**, the dancers **had left**." Without it, the order of events can become unclear.',
    'Irregular verbs cause most errors in reconstruction. Learn them in sets: **begin, began, begun**; **sing, sang, sung**; **lead, led, led**; **lay, laid, laid** (put down); **lie, lay, lain** (rest); **rise, rose, risen**; **wear, wore, worn**; **forbid, forbade, forbidden**; **seek, sought, sought**; **bear, bore, born** or **borne**.',
    'Vocabulary of heritage: **customs** and **traditions** are **handed down** from one **generation** to the next; a **rite of passage** marks a change of life stage; a **festival** includes **rituals**, **libations** and **masquerades**; **artefacts** such as masks, stools and carvings are **preserved** in palaces and museums.',
    '**Practice task (preserving culture):** write a 120-word account, in the past, of a festival or ceremony in your community, using at least three past perfect verbs and six words from this lesson.',
  ], 'past-perfect-timeline', 'If you can add "already" before the earlier action, it probably needs the past perfect.',
  ['"When the guests arrived, the chief ___ the libation."', ['had already poured', 'has already poured', 'already pours', 'is pouring already'], 'The libation came first.'],
  [['Irregular verb', 'A verb whose past forms do not end in -ed, such as sing, sang, sung.'], ['Rite of passage', 'A ceremony marking a change of life stage.'], ['Artefact', 'An object made by people, of cultural or historical interest.']],
  [
    { q: 'Correct the verbs: "The elders lead the procession and the women sung as the sun raised."', steps: ['lead (present) → led; sung (participle) → sang.', 'raised (lift something) → rose (the sun rises by itself).', '**The elders led the procession and the women sang as the sun rose.**'] },
    { q: 'Join with the past perfect: "The masks were repaired. Then the festival began."', steps: ['The repair came first.', 'Use had been repaired with before or by the time.', '**The masks had been repaired before the festival began.**'] },
  ]),

  // ---------- 3. Consonants and letters ----------
  L('aen-cons-1', 'aen-l6-consonants', '3.1', 'Consonant contrasts and clusters', 16, ['Speech work'], [
    'A **minimal pair** is two words that differ in one sound: **ship /ʃɪp/ and chip /tʃɪp/**. Contrasts that many Cameroonian speakers find hard: **/θ/ and /t/** (thin, tin), **/ð/ and /d/** (then, den), **/ʃ/ and /tʃ/** (share, chair), **/s/ and /ʃ/** (sell, shell), **/l/ and /r/** (light, right), **/v/ and /b/** (vest, best), **/p/ and /f/** (pine, fine).',
    '**Voicing** separates many pairs: in /b/, /d/, /g/, /v/, /ð/, /z/, /ʒ/ the vocal cords vibrate; in /p/, /t/, /k/, /f/, /θ/, /s/, /ʃ/ they do not. Touch your throat while saying "zzzz" and then "ssss" to feel the difference.',
    'A **consonant cluster** is two or more consonants together: **str**eet, **spl**ash, te**xts** /teksts/, si**xths** /sɪksθs/, a**sks** /ɑːsks/. Do not add a vowel ("si-tri-t") or drop a sound ("tes" for texts).',
    '**Silent letters** do not form clusters: the k in **knee**, the b in **debt** and **doubt**, the p in **psychology**, the l in **calm**, the t in **listen**. Paper 1 often asks which word has a given sound or which letter is silent.',
  ], 'aen-consonant-pairs', 'Say the word slowly, sound by sound, and count the consonants before you choose.',
  ['Which word begins with /θ/?', ['thought', 'though', 'tough', 'taught'], 'Thought /θɔːt/; though begins with /ð/.'],
  [['Minimal pair', 'Two words that differ in only one sound, such as ship and chip.'], ['Voiced sound', 'A sound made with the vocal cords vibrating, such as /z/.'], ['Consonant cluster', 'Two or more consonant sounds together, as in /str/.']],
  [
    { q: 'Sort into /ʃ/ and /tʃ/: machine, catch, sugar, nature, ocean, church.', steps: ['/ʃ/: machine, sugar, ocean.', '/tʃ/: catch, nature /ˈneɪtʃə/, church.', '**Spelling misleads: ch is /ʃ/ in machine and /tʃ/ in church.**'] },
    { q: 'How many consonant sounds end "sixths"?', steps: ['Transcribe: /sɪksθs/.', 'After the vowel: /k/, /s/, /θ/, /s/.', '**Four consonant sounds.**'] },
  ]),

  L('aen-letter-1', 'aen-l6-consonants', '3.2', 'Informal and semi-formal letters', 17, ['Writing'], [
    'An **informal letter** goes to a relative or close friend. Layout: your address and the date at the top right; **Dear** + first name or family title (Dear Aunty Grace,); an opening that greets and refers to news; paragraphs on the purpose; a friendly closing; **Your loving nephew**, **Yours affectionately** or **Your friend**, then your first name.',
    'A **semi-formal letter** goes to someone you know but must respect: a teacher, a pastor, a family friend, an older relative on a serious matter. The tone is polite and correct, without slang; it opens **Dear Mr Tabe,** or **Dear Pastor Ndi,** and closes **Yours sincerely,** with your full name.',
    'In both, write in paragraphs: the opening, one paragraph for each main point, and a closing paragraph that looks ahead ("I look forward to hearing from you"). Use contractions in informal letters only.',
    '**Practice task (writing to relatives):** write a semi-formal letter of about 250 words to an uncle who lives abroad, thanking him for paying your fees and explaining your plans for the A Level year.',
  ], 'letter-informal', 'Match the ending to the opening: a named reader (Dear Mr Tabe) takes "Yours sincerely".',
  ['A letter to your school principal asking for advice on subject choice, from a student who knows her well, is best written as:', ['a semi-formal letter', 'an informal letter', 'a memo', 'a report'], 'Respectful but personal.'],
  [['Informal letter', 'A letter to a relative or close friend, in a friendly tone.'], ['Semi-formal letter', 'A polite letter to someone known but respected.'], ['Complimentary close', 'The ending before the signature, such as Yours sincerely.']],
  [
    { q: 'Write the opening and closing of an informal letter to your cousin Ngum.', steps: ['Address and date top right; no receiver’s address.', 'Dear Ngum, ... a friendly opening line about her news.', '**Close: Your loving cousin, then your first name.**'] },
    { q: 'Rewrite for a semi-formal letter: "Hey Pastor! Thanks a ton for the cash, it was super cool."', steps: ['Replace the greeting and slang.', 'Keep the thanks clear and polite.', '**Dear Pastor Ndi, Thank you very much for your generous gift; it was a great help.**'] },
  ]),

  // ---------- 4. ICT and conditionals ----------
  L('aen-cond-1', 'aen-l6-ict', '4.1', 'Zero, first and second conditionals', 16, ['Grammar'], [
    'The **zero conditional** states general truths: **if/when + present, present**. "If you press Ctrl + S, the file saves."',
    'The **first conditional** is for real future possibilities: **if + present, will + base form**. "If the network fails, we will lose the call." Do not put "will" in the if-clause: "If it **rains**", not "If it will rain".',
    'The **second conditional** is for unreal or unlikely situations now or in the future: **if + past, would + base form**. "If every school **had** a computer laboratory, results **would** improve." In formal English use **were** for all persons: "If I **were** the minister, I would cut data prices."',
    'Other condition words: **unless** (= if not: "Unless you back up your files, you may lose them"), **provided that** and **as long as** (= only if), **in case** (= because something might happen: "Save a copy in case the laptop crashes"). The if-clause may come first (with a comma) or second (without one).',
  ], 'conditionals', 'Check the if-clause: present for the first conditional, past for the second, never will or would.',
  ['"If the battery ___ low, the phone switches off" (a general fact):', ['is', 'will be', 'was', 'would be'], 'Zero conditional: present, present.'],
  [['Zero conditional', 'If + present, present: for general truths.'], ['First conditional', 'If + present, will: for real future possibilities.'], ['Second conditional', 'If + past, would: for unreal or unlikely situations.']],
  [
    { q: 'Rewrite with "unless": "If you do not update the antivirus, the computer may be infected."', steps: ['Unless already means "if not".', 'Remove "do not".', '**Unless you update the antivirus, the computer may be infected.**'] },
    { q: 'Correct: "If I would have a smartphone, I will join the online class."', steps: ['An unreal present situation: second conditional.', 'If + past (had), then would + base form.', '**If I had a smartphone, I would join the online class.**'] },
  ]),

  L('aen-ictvocab-1', 'aen-l6-ict', '4.2', 'The vocabulary of computing', 15, ['Vocabulary'], [
    '**Hardware** is the physical equipment: the processor, memory, storage, keyboard, screen and printer. **Software** is the programs: the **operating system** (Windows, Android, Linux) and **applications** such as word processors, spreadsheets and browsers.',
    'Data: a **database** is an organised store of records that can be searched and sorted; a **spreadsheet** calculates with rows and columns; a **file** is saved in a **folder**; a **backup** is a spare copy kept elsewhere.',
    'Networks: a **network** links computers to share data; the **Internet** is the worldwide network of networks; a **router** directs traffic; Wi-Fi is wireless access; to **download** is to copy from the Internet, to **upload** is to send to it; **bandwidth** is how much data a connection carries per second.',
    'Computing words are often **compounds** (keyboard, password, software) or formed with prefixes: **re**boot, **up**load, **down**load, **un**install, **de**bug. **Practice task (using software):** write instructions of about 100 words telling a younger student how to save, back up and share a document, using ten words from this lesson.',
  ], 'aen-ict-words', 'Prefixes carry meaning: re- (again), un- (reverse), up- and down- (direction).',
  ['Programs such as a word processor or a browser are:', ['application software', 'hardware', 'the operating system', 'a network'], 'They do tasks for the user.'],
  [['Hardware', 'The physical parts of a computer system.'], ['Operating system', 'The software that runs the computer and its other programs.'], ['Bandwidth', 'How much data a connection can carry per second.']],
  [
    { q: 'Complete with download, backup, password, router: "Choose a strong ___, keep a ___ of your files, restart the ___ if Wi-Fi fails, and ___ only from trusted sites."', steps: ['A secret word: password; a spare copy: backup.', 'The device sharing the connection: router; copying from the Internet: download.', '**password, backup, router, download.**'] },
    { q: 'Explain the difference between hardware and software in one sentence for a parent.', steps: ['Hardware can be touched; software cannot.', 'Give an example of each.', '**Hardware is the machine you can touch, such as the screen, while software is the programs inside it, such as WhatsApp.**'] },
  ]),

  // ---------- 5. Social media and gerunds ----------
  L('aen-ger-1', 'aen-l6-social', '5.1', 'Gerunds and infinitives', 17, ['Grammar'], [
    'A **gerund** is the -ing form used as a noun: "**Sharing** passwords is dangerous." It follows prepositions ("tired **of waiting**", "look forward **to meeting**") and verbs such as **avoid, enjoy, finish, mind, deny, admit, risk, consider, suggest, keep, practise**.',
    'The **to-infinitive** follows verbs such as **want, decide, refuse, hope, plan, agree, promise, manage, afford, learn, fail**, and adjectives ("easy **to use**"). It also gives purpose: "She went online **to check** the results."',
    'Some verbs take either form with a **change of meaning**: **stop** smoking (end it) / stop **to** smoke (pause in order to); **remember** locking the door (recall a past act) / remember **to** lock it (a duty ahead); **forget** in the same way; **try** restarting it (as an experiment) / try **to** restart it (make an effort); **regret** telling (sorry for a past act) / regret **to** tell you (formal bad news).',
    '**Like, love, hate, begin, start, continue** take either form with little change. After **make** and **let** use the bare infinitive: "The app **lets** you **block** strangers."',
  ], 'gerund-infinitive', 'Learn the verb with its pattern: avoid doing, refuse to do, let someone do.',
  ['"I regret ___ you that your account has been suspended."', ['to inform', 'informing', 'inform', 'to informing'], 'Regret + infinitive: formal bad news.'],
  [['Gerund', 'The -ing form of a verb used as a noun.'], ['To-infinitive', 'To + the base form of a verb.'], ['Bare infinitive', 'The base form without to, as after make and let.']],
  [
    { q: 'Correct: "She suggested to change the password and avoided to click the link."', steps: ['Suggest and avoid both take the gerund.', 'to change → changing; to click → clicking.', '**She suggested changing the password and avoided clicking the link.**'] },
    { q: 'Explain the difference: "He stopped to read the message" and "He stopped reading the message".', steps: ['Stop + to-infinitive: he paused another activity in order to read.', 'Stop + gerund: he was reading and then ceased.', '**The first means he began to read; the second means he ended reading.**'] },
  ]),

  L('aen-digital-1', 'aen-l6-social', '5.2', 'Digital footprints, privacy and cybersecurity', 16, ['Vocabulary'], [
    'Your **digital footprint** is the trail of data you leave online: posts, photos, comments, likes, searches and locations. It can be seen by schools and employers years later, so think before posting.',
    '**Privacy settings** control who sees your posts; **two-factor** (or multi-factor) **authentication** asks for a code as well as the password; **encryption** scrambles data so that only the right person can read it.',
    'Threats: **phishing** tricks you into giving away passwords or mobile money codes; **identity theft** is using someone else’s details; **malware** is harmful software; **cyberbullying** is harassment online; **fake news** is false information presented as news; a **scam** is a dishonest scheme to take money.',
    '**Practice task (privacy walls):** write a 150-word advice leaflet for Form 1 students on staying safe online, using at least four gerunds and four infinitives correctly, and six words from this lesson.',
  ], 'aen-digital-words', 'In vocabulary questions, look for the root: "authenticate" means prove that something is genuine.',
  ['Asking for a code sent to your phone as well as your password is:', ['two-factor authentication', 'phishing', 'encryption', 'a digital footprint'], 'Two kinds of proof.'],
  [['Digital footprint', 'The trail of data a person leaves online.'], ['Encryption', 'Scrambling data so only an authorised person can read it.'], ['Identity theft', 'Using another person’s personal details, usually to commit fraud.']],
  [
    { q: 'A message says: "Your MoMo account is blocked. Send your PIN to unlock it." Name the threat and give advice in two sentences.', steps: ['It asks for a secret code: phishing, aiming at fraud.', 'Advice: never share a PIN; check with the operator’s official number.', '**This is a phishing scam. Never send your PIN to anyone, and call the operator’s official number to check.**'] },
    { q: 'Use "digital footprint" and "employer" in one sentence.', steps: ['Link what you post now with later life.', 'Keep it a full, correct sentence.', '**A careless digital footprint may later be seen by a future employer.**'] },
  ]),

  // ---------- 6. Intonation and narrative ----------
  L('aen-tags-1', 'aen-l6-intonation', '6.1', 'Question tags and their intonation', 16, ['Speech work'], [
    'A **question tag** is a short question added to a statement. A positive statement takes a negative tag, and a negative statement a positive tag, using the same auxiliary: "You **have** paid, **haven’t** you?" "He **can’t** swim, **can** he?" With no auxiliary, use do: "She **lives** here, **doesn’t** she?"',
    'Special tags: "I’m right, **aren’t I**?"; "Let’s go, **shall we**?"; "Close the door, **will you**?"; "Nobody called, **did they**?"; "There is a problem, **isn’t there**?"; "Everyone agreed, **didn’t they**?"; negative words such as **never, hardly, seldom** make the statement negative: "He never lies, **does he**?"',
    '**Intonation** changes the meaning. A **falling** tune on the tag means the speaker is sure and expects agreement: "It’s hot today, ↘isn’t it?" A **rising** tune means a real question; the speaker is not sure: "You’ve paid the fees, ↗haven’t you?"',
    'In the main statement, English usually falls at the end of statements and wh-questions ("Where do you ↘live?") and rises on yes/no questions ("Do you ↗live here?").',
  ], 'aen-tag-tunes', 'Ask yourself whether the speaker knows the answer: if yes, fall; if not, rise.',
  ['"Nobody saw the accident, ___?"', ['did they', 'didn’t they', 'did he', 'saw they'], 'Nobody is negative and takes "they".'],
  [['Question tag', 'A short question at the end of a statement, such as isn’t it?'], ['Falling intonation', 'The voice drops; it shows certainty.'], ['Rising intonation', 'The voice rises; it shows a real question.']],
  [
    { q: 'Add tags: (a) She seldom comes late (b) There were no buses (c) Let’s begin.', steps: ['(a) Seldom is negative: does she?', '(b) No buses is negative: were there?', '**(c) shall we?**'] },
    { q: 'A teacher sees rain and says "It’s raining, isn’t it". Rising or falling? Why?', steps: ['The teacher can see the rain.', 'She is not asking for information but inviting agreement.', '**Falling: she is sure and expects agreement.**'] },
  ]),

  L('aen-narr-1', 'aen-l6-intonation', '6.2', 'Writing a cohesive narrative', 18, ['Writing'], [
    'A narrative tells a story in order. A clear shape: **orientation** (who, where, when), **complication** (the problem), **rising action**, **climax** (the most tense moment), **resolution** and **ending** (what changed, or what was learned).',
    'Write mainly in the **past tense**, with the past perfect for earlier events and the past continuous for background ("It **was raining** when the bus **stopped**"). Keep the same person (I or he/she) throughout.',
    '**Cohesion** comes from time links (**at first, soon, meanwhile, by then, that night, eventually**), pronouns that point back clearly, and paragraphs that change with time, place or speaker. Use a few precise details of sight, sound and feeling, and **dialogue** for key moments, punctuated correctly.',
    '**Practice task (descriptive accounts):** write a 400-word narrative titled "The Night the Lights Went Out", plan it in five stages first, and underline every time link you use.',
  ], 'aen-narrative-arc', 'Start close to the action: one sentence of setting, then the problem.',
  ['The part of a narrative that introduces characters, time and place is the:', ['orientation', 'climax', 'resolution', 'complication'], 'It orients the reader.'],
  [['Orientation', 'The opening of a story that sets characters, time and place.'], ['Climax', 'The moment of greatest tension in a story.'], ['Resolution', 'The part of a story where the problem is settled.']],
  [
    { q: 'Improve the cohesion: "We left. We got to the river. The bridge broke. We waited. Help came."', steps: ['Add time links and join some sentences.', 'Use the past perfect for the earlier event.', '**We left at dawn, but when we reached the river, we saw that the bridge had collapsed. We waited for hours until help finally came.**'] },
    { q: 'Write a one-sentence orientation for a story set at a village market.', steps: ['Give time, place and a character.', 'Add one sensory detail.', '**On a hot Saturday afternoon in the crowded Bali market, Ma Bih was selling the last of her ripe plantains.**'] },
  ]),

  // ---------- 7. Mass media and the passive ----------
  L('aen-pass-1', 'aen-l6-media', '7.1', 'The passive in every tense', 17, ['Grammar'], [
    'The **passive** is formed with **be** in the tense of the active verb + the **past participle**. The object of the active sentence becomes the subject: "The police **arrested** the suspect" → "The suspect **was arrested** (by the police)."',
    'Every tense: is written, **is being** written, **was** written, **was being** written, **has been** written, **had been** written, **will be** written, **will have been** written; with modals, **must be**, **should be**, **can be** written, and **should have been** written.',
    'Use the passive when the doer is **unknown, obvious or unimportant**, or to keep the focus on what happened: "Three classrooms **were destroyed** by the storm." Add **by** + agent only when it gives useful information.',
    'Reporting verbs give an **impersonal passive** in the news: "**It is said that** the bridge will open in June" or "The bridge **is said to** open in June"; "The minister **is reported to have resigned**." Only verbs that take an object can be passive: "happen", "arrive" and "die" cannot.',
  ], 'passive-tenses', 'Keep the tense: find the tense of the active verb, then put "be" into that same tense.',
  ['The passive of "They were repairing the road" is:', ['The road was being repaired.', 'The road was repaired.', 'The road has been repaired.', 'The road were being repaired.'], 'Past continuous: was being + participle.'],
  [['Passive voice', 'A structure in which the subject receives the action: be + past participle.'], ['Agent', 'The doer of the action, introduced by "by" in a passive sentence.'], ['Impersonal passive', 'A passive with "it", such as "It is said that...".']],
  [
    { q: 'Make passive: "The council will have built the market by December."', steps: ['Future perfect active: will have built.', 'Passive: will have been built.', '**The market will have been built (by the council) by December.**'] },
    { q: 'Rewrite in two ways: "People say that the river is polluted."', steps: ['It + passive reporting verb + that.', 'Subject + passive reporting verb + to-infinitive.', '**It is said that the river is polluted. The river is said to be polluted.**'] },
  ]),

  L('aen-news-1', 'aen-l6-media', '7.2', 'News registers, headlines and credibility', 16, ['Reading'], [
    'A **news report** puts the most important facts first: the **lead** answers who, what, where and when, and the body adds how and why, quotations and background, in order of importance (the "inverted pyramid").',
    '**Headlines** save space: they drop articles and "be", use the present simple for past events ("Floods **hit** Limbé"), the infinitive for the future ("Minister **to visit** Garoua") and the bare participle for the passive ("Five **arrested** in fuel fraud"). They favour short words: **bid** (attempt), **probe** (investigation), **row** (quarrel), **slash** (cut).',
    'Registers differ: a broadsheet is formal and neutral; a tabloid or blog is emotional and informal; an **editorial** gives the newspaper’s opinion. Reports **attribute** information: "according to the police", "a witness said".',
    '**Practice task (credibility):** compare two reports of the same event from different sources; list the facts both give, the claims only one makes, and the sources each names, then decide which is more credible and why.',
  ], 'aen-headlines', 'Read a headline as a sentence with the small words missing: "Five arrested" = "Five people have been arrested".',
  ['The headline "Teachers to strike" means:', ['teachers are going to strike', 'teachers struck last week', 'teachers have stopped striking', 'teachers want to strike someone'], 'To + verb shows the future.'],
  [['Lead', 'The opening of a news report, giving the key facts.'], ['Editorial', 'An article giving a newspaper’s own opinion.'], ['Attribution', 'Naming the source of a piece of information.']],
  [
    { q: 'Expand the headline into a full sentence: "Fire guts Mokolo market shops."', steps: ['Add articles and make the tense clear.', 'Gut = destroy the inside.', '**A fire has destroyed the inside of several shops at the Mokolo market.**'] },
    { q: 'Write a headline for: "The government has reduced the price of fertiliser by 10 percent."', steps: ['Drop the article and "has".', 'Use a short verb: cut or slash.', '**Government cuts fertiliser price by 10%.**'] },
  ]),

  // ---------- 8. Cohesion ----------
  L('aen-coh-1', 'aen-l6-cohesion', '8.1', 'Cohesive devices and paragraph transitions', 17, ['Writing'], [
    '**Cohesion** is what makes sentences and paragraphs hang together. Connectives signal the logic: **addition** (furthermore, moreover, in addition), **contrast** (however, conversely, on the other hand, nevertheless), **cause and result** (because of this, consequently, therefore, as a result), **sequence** (first, subsequently, finally) and **example** (for instance, such as).',
    '**Reference** points back with pronouns and determiners (it, they, this, these, such); **substitution** replaces a word with one, do or so ("I hope so"); **ellipsis** leaves out understood words ("Some students passed; others did not [pass]"); **lexical cohesion** repeats key words or uses synonyms.',
    'Each paragraph needs a **topic sentence** stating its main idea; the following sentences develop it; a **transition** at the start of the next paragraph links back: "Despite these benefits, ..." or "This problem leads to a second one: ...".',
    'Punctuate connectives correctly: "However" between sentences takes a full stop or semicolon before it and a comma after it: "Fees rose; however, enrolment grew."',
  ], 'aen-cohesion', 'Do not overload: one connective per link is enough, and it must match the logic.',
  ['"The road was flooded. ___, the buses could not run."', ['Consequently', 'Conversely', 'Moreover', 'Similarly'], 'A result.'],
  [['Cohesion', 'The linking of sentences and paragraphs by grammar and vocabulary.'], ['Topic sentence', 'The sentence that states the main idea of a paragraph.'], ['Ellipsis', 'Leaving out words that the reader can understand from the context.']],
  [
    { q: 'Join with suitable connectives: "Mobile money is fast. It is cheap. Some users lose money to scams."', steps: ['The first two ideas add; the third contrasts.', 'Choose "moreover" and "however".', '**Mobile money is fast; moreover, it is cheap. However, some users lose money to scams.**'] },
    { q: 'Write a transition sentence from a paragraph on the benefits of social media to one on its dangers.', steps: ['Refer back to the benefits.', 'Announce the contrast.', '**Despite these benefits, social media also exposes young people to serious dangers.**'] },
  ]),

  L('aen-coh-2', 'aen-l6-cohesion', '8.2', 'Active and passive: review and dry runs', 15, ['Grammar'], [
    'To change **passive to active**, the agent becomes the subject and the subject becomes the object; keep the tense: "The letters **have been signed** by the principal" → "The principal **has signed** the letters."',
    'If the passive has no agent, supply a suitable subject: "The gate **was locked** at six" → "**Someone** (or the watchman) **locked** the gate at six."',
    'With two objects, either can become the passive subject: "They gave the winner a prize" → "**The winner was given** a prize" or "**A prize was given** to the winner." After make and see, the passive needs **to**: "They made him wait" → "He **was made to wait**."',
    '**Practice task (dry runs):** rewrite a ten-sentence school notice from the passive into the active, then decide which version reads better for each sentence, and explain why in one line each.',
  ], 'passive-voice', 'Find the agent first: it becomes the subject of the active sentence.',
  ['The active of "The results will be published by the Board" is:', ['The Board will publish the results.', 'The Board published the results.', 'The Board will be publishing the results.', 'The Board will have published the results.'], 'Future passive becomes future active.'],
  [['Active voice', 'A structure in which the subject does the action.'], ['Indirect object', 'The person who receives the direct object, as in "gave the winner a prize".'], ['Dry run', 'A practice attempt before the real task.']],
  [
    { q: 'Make active: "The prisoners were being guarded by soldiers."', steps: ['Past continuous passive: were being guarded.', 'Active: soldiers were guarding.', '**Soldiers were guarding the prisoners.**'] },
    { q: 'Make passive in two ways: "The school sent the parents a letter."', steps: ['Indirect object as subject: the parents were sent a letter.', 'Direct object as subject: a letter was sent to the parents.', '**The parents were sent a letter by the school. A letter was sent to the parents by the school.**'] },
  ]),
];
