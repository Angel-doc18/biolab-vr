// French lessons for Form 4, term 1: family and social life, and economic
// life and occupations. Explanations are in English for the learner; every
// example, word list and model text is in French. Original text written for
// this app. **double asterisks** mark key terms; `examples` are worked examples.

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

export const LESSONS_4A = [
  // ---------- Famille et conflits ----------
  L('fr-relatifs-4', 'fr-f4-famille', '1.1', 'Les pronoms relatifs qui, que, où', 12, ['Grammaire'], [
    'A **relative pronoun** (un pronom relatif) joins two sentences and avoids repeating a noun. The noun it replaces is its **antécédent**.',
    'The three main relative pronouns:\n- **qui** is the **subject** of the verb that follows: « Le cousin **qui** habite à Buea arrive demain. » (Le cousin habite à Buea.)\n- **que** (qu’ before a vowel) is the **direct object**: « La lettre **que** ma mère a écrite est longue. » (Ma mère a écrit la lettre.)\n- **où** refers to a **place** or a **time**: « Le village **où** je suis né est loin. » « Le jour **où** ils se sont réconciliés… »',
    'A quick test: if a verb comes straight after the gap, it is usually **qui**; if a subject (je, tu, mon père…) comes after the gap, it is **que**. Note: « qui » never becomes « qu’ ».',
  ], 'relatifs-fr', 'Verb right after the gap → qui. A subject after the gap → que.',
  ['« Voici la voisine ___ nous aide souvent. »', ['qui', 'que', 'où', 'dont'], 'The verb « aide » follows: « qui » is the subject.'],
  [['Pronom relatif', 'A relative pronoun: qui, que, où, dont.'], ['Antécédent', 'The noun that a relative pronoun replaces.']],
  [
    { q: 'Join with a relative pronoun: « J’ai un frère. Mon frère travaille à Garoua. »', steps: ['« Mon frère » is the subject of « travaille », so use « qui ».', '**« J’ai un frère qui travaille à Garoua. »**'] },
    { q: 'Join: « C’est la maison. Mes grands-parents ont construit cette maison. »', steps: ['« Cette maison » is the object of « ont construit », so use « que ».', '**« C’est la maison que mes grands-parents ont construite. »** (The participle agrees with « que » = la maison.)'] },
  ]),

  L('fr-tuvous-4', 'fr-f4-famille', '1.2', 'Tu ou vous ? La famille et la gestion des conflits', 12, ['Lexique', 'Communication'], [
    '**Tu** is used with family members, friends, children and classmates. **Vous** is used with one person you respect or do not know well (teachers, elders, officials, customers) and always for more than one person. In Cameroonian families children often say « vous » to grandparents and elders as a sign of respect.',
    'Family vocabulary: les parents, le père, la mère, le frère, la sœur, le grand-père, la grand-mère, l’oncle, la tante, le cousin, la cousine, le neveu, la nièce, le beau-père (father-in-law or step-father), la belle-mère, l’aîné (the eldest), le cadet (the youngest), la famille nucléaire, la famille élargie.',
    'Conflict vocabulary: une dispute, un malentendu (a misunderstanding), se disputer, se fâcher, gérer un conflit, dialoguer, écouter l’autre, demander pardon, pardonner, un médiateur, trouver un compromis, **se réconcilier**. Polite expressions: « Excusez-moi », « Je suis désolé(e) », « Pouvons-nous en parler calmement ? »',
  ], 'relatifs-fr', 'When in doubt with an adult you do not know, use « vous ».',
  ['To speak to your grandmother respectfully, many Cameroonian children use:', ['vous', 'tu', 'toi', 'on'], '« Vous » shows respect to elders.'],
  [['Tutoyer', 'To address someone as « tu ».'], ['Vouvoyer', 'To address someone as « vous ».'], ['Un malentendu', 'A misunderstanding.'], ['Se réconcilier', 'To make peace again after a dispute.']],
  [
    { q: 'Rewrite politely for a teacher: « Tu peux répéter la question ? »', steps: ['Use « vous » and a polite form.', '**« Pouvez-vous répéter la question, s’il vous plaît ? »**'] },
  ]),

  // ---------- Cérémonies et fêtes ----------
  L('fr-pcimparfait-4', 'fr-f4-ceremonies', '2.1', 'Le passé composé et l’imparfait dans le récit', 14, ['Grammaire'], [
    'The **passé composé** tells **completed actions** at a definite moment: auxiliary **avoir** or **être** in the present + past participle. « Nous **avons dansé**. » « Ils **sont arrivés** à midi. » Verbs of movement and change (aller, venir, arriver, partir, entrer, sortir, naître, mourir, rester, tomber…) and all reflexive verbs take **être**, and their participle agrees with the subject: « Elle **est partie**. » « Nous **nous sommes amusés**. »',
    'The **imparfait** describes the **background**: the setting, the weather, feelings, descriptions and repeated habits in the past. Stem of « nous » in the present + -ais, -ais, -ait, -ions, -iez, -aient: « nous chantons » → je **chantais**. Only « être » is irregular: j’**étais**.',
    'In a story the two tenses work together: « Il **faisait** beau et la foule **attendait** (background) quand le chef **est arrivé** (event). » Signal words: hier, soudain, un jour, tout à coup → passé composé; d’habitude, chaque année, autrefois, pendant que → imparfait.',
  ], 'pc-imparfait', 'Background and habits: imparfait. Events that move the story forward: passé composé.',
  ['« Pendant que nous ___, la pluie a commencé. »', ['dansions', 'avons dansé', 'danserons', 'dansons'], 'An action in progress (background): imparfait.'],
  [['Passé composé', 'The past tense for completed actions: avoir or être + past participle.'], ['Imparfait', 'The past tense for descriptions, background and habits.'], ['Participe passé', 'The past participle: dansé, fini, vendu, pris.']],
  [
    { q: 'Put the verbs in the right past tense: « L’année dernière, il (y avoir) une grande fête au village. Les femmes (porter) des pagnes neufs. Soudain, le chef (arriver). »', steps: ['Description of the scene: **il y avait**, **portaient** (imparfait).', 'A sudden event: **est arrivé** (passé composé with être).', '**« L’année dernière, il y avait une grande fête au village. Les femmes portaient des pagnes neufs. Soudain, le chef est arrivé. »**'] },
  ]),

  L('fr-fetes-4', 'fr-f4-ceremonies', '2.2', 'Les rites et les fêtes du Cameroun', 12, ['Lexique', 'Lecture'], [
    'Vocabulary of ceremonies: une cérémonie, un rite, une tradition, la culture, l’identité culturelle, un mariage traditionnel, **la dot** (the bride price), les fiançailles, un baptême, **les funérailles**, le deuil, une danse traditionnelle, un masque, un tam-tam, un pagne, les invités, la foule, le chef traditionnel, les notables, un festin.',
    'Some Cameroonian festivals: le **Ngondo** des peuples Sawa (Douala, au bord du Wouri), le **Nguon** des Bamoun (Foumban), le **Lela** de Bali Nyonga (Nord-Ouest), les fêtes de la Tabaski et du Ramadan, et la Fête nationale du **20 mai**.',
    'Reading strategy: read the title and the first sentence of each paragraph to get the main idea; underline the time markers (d’abord, puis, ensuite, enfin) to follow the order of events; guess unknown words from the context.',
  ], 'pc-imparfait', 'Learn ceremony words in groups: people, objects, actions.',
  ['« La Fête nationale du Cameroun » is celebrated on:', ['le 20 mai', 'le 1er janvier', 'le 11 février', 'le 1er octobre'], 'The 11th of February is Youth Day.'],
  [['La dot', 'The bride price given at a traditional marriage.'], ['Les funérailles', 'Funeral ceremonies.'], ['Les notables', 'The respected elders who advise a traditional chief.']],
  [
    { q: 'Read: « Chaque année, les Sawa organisent le Ngondo au bord du Wouri. Les pirogues font la course et un plongeur consulte les ancêtres sous l’eau. » Answer in French: Où se passe le Ngondo ?', steps: ['Find the place in the text: « au bord du Wouri ».', '**« Le Ngondo se passe au bord du Wouri, à Douala. »**'] },
  ]),

  // ---------- Phonétique et paragraphe ----------
  L('fr-nasales-4', 'fr-f4-phonetique', '3.1', 'Les voyelles orales et nasales', 11, ['Phonétique'], [
    'For an **oral vowel** the air comes out through the mouth only; for a **nasal vowel** part of the air also comes out through the nose. French has the nasal vowels /ɑ̃/ (an, en, am, em: **blanc, enfant, temps**), /ɔ̃/ (on, om: **bon, nom**), /ɛ̃/ (in, ain, ein, un: **vin, pain, plein**).',
    'Important contrasts:\n- /o/ – /ɔ̃/: beau – **bon**, eau – **on**, mot – **mon**\n- /a/ – /ɑ̃/: la – **lent**, chat – **champ**, bas – **banc**.',
    'A vowel is **not** nasal when n or m is followed by a vowel or is doubled: **bonne** /bɔn/, **ami** /ami/, **année** /ane/, **homme** /ɔm/. Compare bon /bɔ̃/ – bonne /bɔn/, an /ɑ̃/ – âne /an/. Do not pronounce the n or m of a nasal vowel.',
  ], 'voyelles-nasales', 'In a nasal vowel, do not pronounce the n: « bon » is /bɔ̃/, not /bɔn/.',
  ['In which word is the vowel oral, not nasal?', ['ami', 'enfant', 'pain', 'nom'], 'In « ami », the m is followed by a vowel.'],
  [['Voyelle orale', 'A vowel made with air through the mouth only.'], ['Voyelle nasale', 'A vowel made with air through the mouth and the nose.']],
  [
    { q: 'Sort these words: bon, bonne, temps, tasse, vin, vie.', steps: ['Nasal: **bon** /bɔ̃/, **temps** /tɑ̃/, **vin** /vɛ̃/.', 'Oral: **bonne** /bɔn/, **tasse** /tas/, **vie** /vi/.'] },
  ]),

  L('fr-paragraphe-4', 'fr-f4-phonetique', '3.2', 'Rédiger un paragraphe descriptif', 13, ['Expression écrite'], [
    'A good **paragraph** (un paragraphe) develops **one main idea**. Its parts:\n- a **phrase d’introduction** that announces the idea\n- **phrases de développement** with details and examples, in a logical order\n- a **phrase de conclusion** that closes the idea.',
    'To describe a ceremony, use the present or the past tenses, adjectives (coloré, joyeux, solennel, magnifique, émouvant), the five senses (on entendait les tam-tams, on sentait l’odeur du poisson braisé) and time markers (d’abord, ensuite, puis, enfin, à la fin).',
    'Check: one idea per paragraph, correct agreements (une fête **joyeuse**, des danses **traditionnelles**), varied verbs, and no English words.',
  ], 'voyelles-nasales', 'One paragraph, one idea: introduction, development, conclusion.',
  ['« Joyeux » becomes ___ with a feminine noun.', ['joyeuse', 'joyeux', 'joyeuxe', 'joyeuses'], '-eux → -euse in the feminine.'],
  [['Paragraphe', 'A group of sentences that develops one idea.'], ['Phrase d’introduction', 'The sentence that announces the main idea of a paragraph.']],
  [
    { q: 'Write a short paragraph describing a traditional wedding.', steps: ['Introduction: **« Le mois dernier, j’ai assisté au mariage traditionnel de ma cousine. »**', 'Development: **« D’abord, la famille du marié a apporté la dot. Ensuite, les femmes ont dansé au son des tam-tams. Puis, tout le monde a partagé un grand festin. »**', 'Conclusion: **« C’était une journée joyeuse que je n’oublierai jamais. »**'] },
  ]),

  // ---------- Les métiers ----------
  L('fr-futur-4', 'fr-f4-metiers', '4.1', 'Le futur simple et le futur proche', 12, ['Grammaire'], [
    'The **futur proche** expresses a near or planned future: **aller** (present) + infinitive. « Je **vais passer** un entretien demain. »',
    'The **futur simple** expresses the future in general, promises and predictions: infinitive + **-ai, -as, -a, -ons, -ez, -ont** (verbs in -re drop the e): parler → je **parlerai**; finir → tu **finiras**; vendre → il **vendra**.',
    'Irregular stems to learn: être → **ser-**, avoir → **aur-**, aller → **ir-**, faire → **fer-**, venir → **viendr-**, pouvoir → **pourr-**, vouloir → **voudr-**, voir → **verr-**, savoir → **saur-**, devoir → **devr-**. « Plus tard, je **serai** infirmière et j’**aurai** mon propre cabinet. »',
  ], 'futur-fr', 'The endings of the futur simple are the present of « avoir »: -ai, -as, -a, -ons, -ez, -ont.',
  ['« Demain, nous ___ au bureau de l’emploi. » (aller, futur simple)', ['irons', 'allerons', 'allons', 'irions'], '« Aller » has the stem « ir- ».'],
  [['Futur simple', 'The future tense: infinitive + -ai, -as, -a, -ons, -ez, -ont.'], ['Futur proche', 'The near future: aller + infinitive.']],
  [
    { q: 'Put into the futur simple: « Je (faire) une formation et je (pouvoir) trouver un emploi. »', steps: ['faire → **ferai**; pouvoir → **pourrai**.', '**« Je ferai une formation et je pourrai trouver un emploi. »**'] },
  ]),

  L('fr-conditionnel-4', 'fr-f4-metiers', '4.2', 'Le conditionnel présent ; les métiers et les petites annonces', 13, ['Grammaire', 'Lexique'], [
    'The **conditionnel présent** expresses wishes, polite requests and imagined situations: future stem + **imparfait endings** (-ais, -ais, -ait, -ions, -iez, -aient). « J’**aimerais** devenir pilote. » « **Voudriez**-vous m’aider ? » « Je **serais** heureux de travailler chez vous. »',
    'Jobs (les métiers): un enseignant, un médecin, un infirmier / une infirmière, un ingénieur, un avocat, un comptable, un mécanicien, un menuisier, un maçon, un couturier, un agriculteur, un commerçant, un informaticien, un journaliste. Places: un bureau, un atelier, un hôpital, une usine, une entreprise.',
    'A **petite annonce** gives: le poste, l’entreprise, le profil recherché (diplômes, expérience), les tâches, le salaire, le dossier à fournir and la date limite. Vocabulary of the job market: un emploi, le chômage, un candidat, postuler, un CV, une lettre de motivation, un entretien d’embauche, un contrat, un stage (an internship), embaucher, licencier, travailler en ligne.',
  ], 'futur-fr', '« J’aimerais » (wish) is softer than « je veux ».',
  ['« Je ___ travailler dans une banque. » (a polite wish)', ['voudrais', 'voudrai', 'veux bien que', 'voulais'], 'Conditionnel of « vouloir »: je voudrais.'],
  [['Conditionnel présent', 'The mood for wishes, polite requests and imagined situations.'], ['Postuler', 'To apply for a job.'], ['Le chômage', 'Unemployment.'], ['Un stage', 'An internship or training period.']],
  [
    { q: 'Read the advertisement: « Entreprise de Douala recrute comptable. Diplôme : BTS. Expérience : 2 ans. Dossier avant le 30 juin. » Quel poste est proposé et quelle est la date limite ?', steps: ['The post: **un poste de comptable**.', 'The deadline: **le 30 juin**.'] },
  ]),

  // ---------- Le marché ----------
  L('fr-falloir-4', 'fr-f4-marche', '5.1', 'L’obligation : il faut et devoir', 12, ['Grammaire'], [
    '**Il faut** (from falloir) is impersonal: it is used only with « il ». It is followed by:\n- an **infinitive** for a general obligation: « **Il faut payer** à la caisse. »\n- **que + subjonctif** for a particular person: « **Il faut que tu paies** ta facture. »\nNegative: « Il ne faut pas » means « you must not »: « **Il ne faut pas** gaspiller l’argent. »',
    '**Devoir** + infinitive expresses obligation for a person: je **dois**, tu **dois**, il **doit**, nous **devons**, vous **devez**, ils **doivent**. « Nous **devons** économiser. » « Vous ne **devez** pas mentir. »',
    'The **present subjunctive** (needed after « il faut que »): stem of « ils » in the present + -e, -es, -e, -ions, -iez, -ent: ils vend**ent** → que je **vende**. Irregular: être (que je **sois**), avoir (que j’**aie**), aller (que j’**aille**), faire (que je **fasse**), pouvoir (que je **puisse**).',
  ], 'falloir-devoir', '« Il faut » + infinitive for everyone; « il faut que » + subjunctive for someone in particular.',
  ['« Il faut que nous ___ à l’heure. » (être)', ['soyons', 'sommes', 'serons', 'étions'], 'Subjunctive of « être »: que nous soyons.'],
  [['Falloir', 'An impersonal verb of necessity, used only as « il faut ».'], ['Subjonctif', 'A mood used after expressions of obligation, wish, doubt and purpose.']],
  [
    { q: 'Rewrite with « il faut que »: « Tu dois faire tes comptes chaque soir. »', steps: ['« Faire » → subjunctive « que tu fasses ».', '**« Il faut que tu fasses tes comptes chaque soir. »**'] },
  ]),

  L('fr-marchander-4', 'fr-f4-marche', '5.2', 'Au marché, au supermarché et à la banque', 12, ['Lexique', 'Communication'], [
    'Vocabulary: un marché, un supermarché, une boutique, un vendeur, une vendeuse, un client, un étal, le prix, cher, bon marché (cheap), une réduction, une promotion, la monnaie (change), un reçu, une facture, les dépenses, le budget, le bénéfice (profit), la perte (loss), une banque, un compte, déposer, **retirer**, un prêt (a loan), un crédit, le mobile money.',
    'Useful phrases to **marchander** (bargain): « C’est combien ? » « C’est trop cher ! » « Vous pouvez diminuer un peu ? » « Je vous donne 1 500 francs. » « Faites-moi un bon prix. » « D’accord, je le prends. » The seller may say: « C’est mon dernier prix. »',
    'Calculating expenses: « J’ai acheté 2 kg de riz à 600 F le kilo, donc j’ai dépensé 1 200 F. » Numbers: cent, mille, un million; 1 500 = mille cinq cents.',
  ], 'falloir-devoir', 'Polite bargaining works better than shouting: « Vous pouvez diminuer un peu ? »',
  ['« Bon marché » means:', ['cheap', 'a good market', 'expensive', 'closed'], '« Ces tomates sont bon marché. »'],
  [['Marchander', 'To bargain over a price.'], ['La monnaie', 'Change (money given back), or currency.'], ['Le bénéfice', 'Profit.'], ['Un prêt', 'A loan.']],
  [
    { q: 'Write a short dialogue: you want to buy a pagne priced at 5 000 F.', steps: ['**Client : Bonjour Madame, c’est combien, ce pagne ?**', '**Vendeuse : 5 000 francs.**', '**Client : C’est trop cher. Je vous donne 4 000 francs.**', '**Vendeuse : Mon dernier prix, c’est 4 500.**', '**Client : D’accord, je le prends. Merci !**'] },
  ]),

  // ---------- Voyages et tourisme ----------
  L('fr-adverbes-4', 'fr-f4-voyages', '6.1', 'Les adverbes de temps et de fréquence ; les loisirs', 11, ['Grammaire', 'Lexique'], [
    'Adverbs of **time**: aujourd’hui, hier, demain, maintenant, bientôt, déjà, encore, tôt, tard, d’abord, ensuite, enfin. Adverbs of **frequency**: **toujours** (always), **souvent** (often), **parfois / quelquefois** (sometimes), **rarement** (rarely), **ne … jamais** (never).',
    'Position: after the conjugated verb in simple tenses (« Je vais **souvent** à la plage. ») and between the auxiliary and the participle in compound tenses (« J’ai **déjà** visité Kribi. »). « Jamais » works with « ne »: « Je **ne** voyage **jamais** la nuit. »',
    'Leisure vocabulary: les loisirs, le temps libre, faire du sport, nager, faire une randonnée, visiter un musée, aller au cinéma, lire, jouer au football, les vacances, partir en voyage, se reposer.',
  ], 'prepositions-lieux', 'With the passé composé, short adverbs go between avoir/être and the participle.',
  ['« Nous avons ___ visité les chutes de la Lobé. » (already)', ['déjà', 'toujours', 'jamais', 'demain'], '« Déjà » goes between the auxiliary and the participle.'],
  [['Adverbe de fréquence', 'An adverb that says how often: toujours, souvent, parfois, jamais.'], ['Les loisirs', 'Leisure activities.']],
  [
    { q: 'Put the adverb in the right place: (a) « Il fait du sport. » (souvent) (b) « Elle a voyagé en avion. » (jamais)', steps: ['(a) **« Il fait souvent du sport. »**', '(b) **« Elle n’a jamais voyagé en avion. »**'] },
  ]),

  L('fr-prepositions-4', 'fr-f4-voyages', '6.2', 'Les prépositions de lieu ; voyager au Cameroun', 12, ['Grammaire', 'Lexique'], [
    'To say "in" or "to" a place:\n- **à** + town: à Douala, à Bamenda, à Paris\n- **en** + feminine country or region (most countries ending in -e) and countries beginning with a vowel: en France, en Afrique, en Iran\n- **au** + masculine country: **au Cameroun**, au Nigeria, au Tchad, au Gabon\n- **aux** + plural country: aux États-Unis, aux Pays-Bas.\n"From" a place: de Douala, de France, **du** Cameroun, **des** États-Unis.',
    'Tourist sites in Cameroon: le mont Cameroun, les chutes de la Lobé à Kribi, le parc national de Waza, le palais du sultan à Foumban, les lacs de cratère, les plages de Limbe, le jardin botanique de Limbe, les paysages de Rhumsiki.',
    'Travel vocabulary: un billet, réserver, une agence de voyages, la gare routière, l’aéroport, un passeport, une valise, un hôtel, une chambre, l’accueil (reception), un guide, l’écotourisme (tourism that protects nature and helps local people).',
  ], 'prepositions-lieux', 'Cameroun is masculine: « au Cameroun », « du Cameroun ».',
  ['« Il vient ___ Nigeria. »', ['du', 'de', 'des', 'en'], 'Masculine country: de + le = du.'],
  [['Préposition de lieu', 'A preposition that shows place: à, en, au, aux, de.'], ['L’écotourisme', 'Tourism that protects nature and benefits local people.']],
  [
    { q: 'Complete: « Je pars ___ Kribi, puis ___ Gabon, et enfin ___ France. »', steps: ['Town: **à** Kribi.', 'Masculine country: **au** Gabon.', 'Feminine country: **en** France.'] },
  ]),

  // ---------- Lettre de demande d’emploi ----------
  L('fr-lettreemploi-4', 'fr-f4-lettre', '7.1', 'Rédiger une lettre de demande d’emploi', 15, ['Expression écrite'], [
    'Layout of a **lettre de demande d’emploi** (an official letter):\n- top left: the sender’s name, address and telephone (l’expéditeur)\n- top right: the place and date: « Bamenda, le 12 mars 2026 »\n- below, on the right: the receiver’s title and address (le destinataire): « À Monsieur le Directeur de la société… »\n- **Objet** : Demande d’emploi\n- the greeting: « Monsieur, » or « Madame, »\n- the body (le corps de la lettre)\n- the **formule de politesse** and the signature with the full name.',
    'The body:\n- introduction: « J’ai l’honneur de solliciter le poste de … annoncé dans … du … »\n- qualifications and experience: « Titulaire du GCE Ordinary Level, je parle couramment l’anglais et le français… »\n- motivation: « Je suis motivé(e), sérieux(se) et disponible… »\n- closing: « Dans l’attente d’une suite favorable, je vous prie d’agréer, Monsieur, l’expression de mes sentiments distingués. »',
    'Rules: use « vous », no contractions, short clear paragraphs, no spelling mistakes. « Ci-joint » introduces the documents attached (mon CV, une copie de mes diplômes).',
  ], 'lettre-emploi', 'Remember the « Objet » line and the formule de politesse.',
  ['« J’ai l’honneur de solliciter… » is used:', ['to begin the body of an official application', 'to close a letter to a friend', 'to greet a classmate', 'to sign a cheque'], 'It is a standard formal opening.'],
  [['Objet', 'The line that states what a formal letter is about.'], ['Formule de politesse', 'The polite closing formula of a French letter.'], ['Destinataire', 'The person who receives the letter.'], ['Expéditeur', 'The person who sends the letter.']],
  [
    { q: 'Write the introduction of an application for a job as « caissière » advertised in « Cameroon Tribune ».', steps: ['**« Monsieur le Directeur, »**', '**« J’ai l’honneur de solliciter le poste de caissière annoncé dans le journal Cameroon Tribune du 3 mai 2026. »**'] },
  ]),
];
