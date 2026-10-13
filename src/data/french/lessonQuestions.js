// Extra end-of-lesson questions for the French lessons, by lesson id.
// The correct option is written first; options are shuffled when shown.

const Q = (q, a, why) => ({ q, a, why });

export const LESSON_QUESTIONS = {
  // ---------- Form 4, term 1 ----------
  'fr-relatifs-4': [
    Q('« C’est le professeur ___ nous aimons beaucoup. »', ['que', 'qui', 'où', 'quoi'], 'A subject (nous) follows the gap.'),
    Q('« Le marché ___ ma mère vend des tomates est grand. »', ['où', 'que', 'qui', 'dont'], 'A place: où.'),
    Q('« Voici l’enfant ___ a gagné le concours. »', ['qui', 'que', 'où', 'qu’'], 'A verb follows the gap.'),
    Q('Before a vowel, « que » becomes:', ['qu’', 'qui', 'quo', 'it never changes'], '« La lettre qu’il écrit ».'),
  ],
  'fr-tuvous-4': [
    Q('You speak to two friends at once. You use:', ['vous', 'tu', 'toi', 'te'], '« Vous » is used for more than one person.'),
    Q('« La sœur de ma mère » est ma:', ['tante', 'cousine', 'nièce', 'grand-mère'], 'Aunt = tante.'),
    Q('« Un malentendu » is:', ['a misunderstanding', 'a bad hearing', 'a joke', 'a meeting'], 'It often causes disputes.'),
    Q('Which is a polite way to calm a dispute?', ['« Pouvons-nous en parler calmement ? »', '« Tais-toi ! »', '« Va-t’en ! »', '« Tu es bête ! »'], 'Invite dialogue.'),
  ],
  'fr-pcimparfait-4': [
    Q('The imparfait of « finir » with « nous » is:', ['nous finissions', 'nous finirons', 'nous avons fini', 'nous finissons'], 'Stem « finiss- » + -ions.'),
    Q('« Elle ___ au village la semaine dernière. » (venir)', ['est venue', 'a venu', 'venait', 'est venu'], '« Venir » takes être; the participle agrees with « elle ».'),
    Q('« Autrefois, les femmes ___ l’eau au puits. » (puiser)', ['puisaient', 'ont puisé', 'puiseront', 'puisent'], 'A past habit: imparfait.'),
    Q('Which signal word goes with the passé composé?', ['soudain', 'chaque jour', 'autrefois', 'd’habitude'], 'A sudden event.'),
  ],
  'fr-fetes-4': [
    Q('« Les fiançailles » come:', ['before the wedding', 'after a funeral', 'at a birth', 'at the end of school'], 'Engagement.'),
    Q('« Le deuil » is:', ['mourning', 'a dance', 'a wedding dress', 'a drum'], 'The period of grief after a death.'),
    Q('The Nguon festival is held in:', ['Foumban', 'Douala', 'Buea', 'Garoua'], 'It is the festival of the Bamoun.'),
    Q('Which word helps you follow the order of events?', ['ensuite', 'parce que', 'mais', 'car'], 'Time markers organise a narrative.'),
  ],
  'fr-nasales-4': [
    Q('Which word contains the nasal vowel /ɛ̃/?', ['pain', 'peine', 'pan', 'pont'], '« ain » at the end gives /ɛ̃/.'),
    Q('« Bon » and « bonne » are pronounced:', ['/bɔ̃/ and /bɔn/', 'the same', '/bɔn/ and /bɔ̃/', '/bo/ and /bɔ̃/'], 'nn + vowel stops the nasal sound.'),
    Q('In « année », the vowel « an » is:', ['oral, because nn is followed by a vowel', 'nasal', 'silent', 'long'], '« année » is said /ane/.'),
    Q('Which word has an oral vowel only?', ['mot', 'mon', 'manche', 'main'], 'The others contain nasal vowels.'),
  ],
  'fr-paragraphe-4': [
    Q('« Une fête solennelle » is:', ['a formal, serious ceremony', 'a funny party', 'a short meeting', 'a sad song'], '« Solennel » = solemn, formal.'),
    Q('The feminine plural of « traditionnel » is:', ['traditionnelles', 'traditionnels', 'traditionelles', 'traditionnelle'], 'Double n, then -les.'),
    Q('A paragraph should develop:', ['one main idea', 'many unrelated ideas', 'only a title', 'only examples'], 'One idea per paragraph.'),
    Q('Which word introduces the last step of a description?', ['enfin', 'd’abord', 'puis', 'aussi'], '« Enfin » = finally.'),
  ],
  'fr-futur-4': [
    Q('The futur simple of « venir » with « je » is:', ['je viendrai', 'je venirai', 'je vais', 'je viendrais'], 'Irregular stem « viendr- ».'),
    Q('The futur simple of « avoir » with « tu » is:', ['tu auras', 'tu avras', 'tu as', 'tu aurais'], 'Irregular stem « aur- ».'),
    Q('« Nous ___ nos examens en juin. » (passer, futur proche)', ['allons passer', 'passerons', 'passions', 'passerions'], 'aller + infinitive.'),
    Q('The futur simple of « vendre » with « il » is:', ['il vendra', 'il vendera', 'il vendre', 'il vendrait'], '-re verbs drop the final e.'),
  ],
  'fr-conditionnel-4': [
    Q('The conditionnel of « pouvoir » with « vous » is:', ['vous pourriez', 'vous pourrez', 'vous pouvez', 'vous pouviez'], 'Stem « pourr- » + -iez.'),
    Q('« Postuler à un emploi » means:', ['to apply for a job', 'to leave a job', 'to post a letter', 'to lose a job'], 'You send a CV and a letter.'),
    Q('« Le chômage » is:', ['unemployment', 'a factory', 'a salary', 'a promotion'], 'Being without a job.'),
    Q('« Un stage » is:', ['an internship or training period', 'a stage play only', 'a salary', 'a sick leave'], 'Students do stages in companies.'),
  ],
  'fr-falloir-4': [
    Q('« Il ne faut pas » means:', ['you must not', 'you do not need to', 'it is not cold', 'it is not necessary'], 'It expresses prohibition.'),
    Q('« Vous ___ rembourser le prêt. » (devoir)', ['devez', 'devoir', 'doivent', 'dois'], 'Vous devez.'),
    Q('The subjunctive of « faire » with « je » is:', ['que je fasse', 'que je fais', 'que je ferai', 'que je faisais'], 'Irregular subjunctive.'),
    Q('« Il faut » can only be used with the subject:', ['il', 'je', 'nous', 'ils'], 'Falloir is impersonal.'),
  ],
  'fr-marchander-4': [
    Q('« C’est trop cher ! » means:', ['It is too expensive!', 'It is very cheap!', 'It is too far!', 'It is closed!'], 'Used when bargaining.'),
    Q('« Une facture » is:', ['a bill or invoice', 'a factory', 'a fact', 'a discount'], 'It shows how much to pay.'),
    Q('« Déposer de l’argent » means:', ['to deposit money', 'to withdraw money', 'to lose money', 'to borrow money'], 'Opposite of « retirer ».'),
    Q('1 500 in French words is:', ['mille cinq cents', 'un mille cinq cent', 'quinze cent', 'mille et cinq cents'], 'Cent takes -s when multiplied and not followed by another number.'),
  ],
  'fr-adverbes-4': [
    Q('« Rarement » means:', ['rarely', 'always', 'often', 'never'], 'Not often.'),
    Q('« Il ___ vient ___ en retard. » (never)', ['ne … jamais', 'ne … pas', 'ne … plus', 'ne … rien'], '« Ne … jamais » = never.'),
    Q('« Faire une randonnée » means:', ['to go on a hike', 'to do homework', 'to go shopping', 'to sleep'], 'A long walk in nature.'),
    Q('« Nous avons ___ fini. » (already)', ['déjà', 'toujours', 'jamais', 'encore'], 'Between auxiliary and participle.'),
  ],
  'fr-prepositions-4': [
    Q('« Elle habite ___ Yaoundé. »', ['à', 'en', 'au', 'aux'], 'A town takes « à ».'),
    Q('« Il revient ___ États-Unis. »', ['des', 'du', 'de', 'aux'], 'From a plural country: des.'),
    Q('« Nous allons ___ Tchad. »', ['au', 'en', 'à', 'aux'], 'Le Tchad is masculine.'),
    Q('« Une gare routière » is:', ['a bus or coach station', 'a railway', 'an airport', 'a harbour'], 'Where buses leave from.'),
  ],
  'fr-lettreemploi-4': [
    Q('In a French formal letter, the sender’s address goes:', ['at the top left', 'at the bottom right', 'after the signature', 'nowhere'], 'The expéditeur is top left.'),
    Q('« Dans l’attente d’une suite favorable… » appears:', ['near the end of the letter', 'in the « Objet » line', 'in the address', 'in the date'], 'It leads to the closing formula.'),
    Q('« Titulaire du GCE » means:', ['holder of the GCE', 'teacher of the GCE', 'failed the GCE', 'writing the GCE'], 'It states a qualification.'),
    Q('A formal French letter should NOT contain:', ['« tu » and slang', 'an « Objet » line', 'a closing formula', 'the date'], 'Always use « vous ».'),
  ],

  // ---------- Form 4, term 2 ----------
  'fr-passive-4': [
    Q('« La route ___ réparée l’année dernière. »', ['a été', 'est', 'sera', 'avait'], 'Passé composé passive: a été + participle.'),
    Q('In « Les arbres sont coupés », the participle « coupés » agrees with:', ['les arbres', 'the agent', 'nothing', 'the verb être'], 'It agrees with the subject.'),
    Q('The agent in a passive sentence is introduced by:', ['par', 'pour', 'avec', 'sans'], '« … par les élèves ».'),
    Q('Which verb cannot become passive?', ['aller', 'planter', 'détruire', 'ramasser'], '« Aller » has no direct object.'),
  ],
  'fr-cause-4': [
    Q('« ___ il pleut, nous restons à la maison. » (at the start of the sentence)', ['Comme', 'Car', 'Grâce à', 'À cause de'], '« Comme » introduces a cause at the start.'),
    Q('« Grâce à » + « le reboisement » gives:', ['grâce au reboisement', 'grâce à le reboisement', 'grâce du reboisement', 'grâce aux reboisement'], 'à + le = au.'),
    Q('« La sécheresse » is:', ['drought', 'flood', 'wind', 'snow'], 'A long period without rain.'),
    Q('« Le tri des déchets » means:', ['sorting waste', 'burning waste', 'buying waste', 'hiding waste'], 'It helps recycling.'),
  ],
  'fr-comparatif-4': [
    Q('« Il chante ___ que son frère. » (bien, superiority)', ['mieux', 'meilleur', 'plus bon', 'plus bien'], 'The adverb « bien » → « mieux ».'),
    Q('« C’est ___ saison de l’année. » (mauvais, superlative)', ['la pire', 'la plus pire', 'la meilleure', 'la plus mauvaise que'], '« Mauvais » → « le pire ».'),
    Q('« La girafe est ___ grande ___ l’éléphant. » (equality)', ['aussi … que', 'plus … de', 'moins … de', 'si … de'], 'Equality: aussi … que.'),
    Q('« Les ___ élèves recevront un prix. » (bon, superlative)', ['meilleurs', 'plus bons', 'mieux', 'meilleures'], '« Élèves » here is masculine plural.'),
  ],
  'fr-faune-4': [
    Q('« Un braconnier » is:', ['a poacher', 'a forest ranger', 'a hunter with a licence', 'a tourist'], 'He hunts illegally.'),
    Q('The Dja reserve is protected as:', ['patrimoine mondial de l’UNESCO', 'a farm', 'a city park', 'a market'], 'It is a World Heritage Site.'),
    Q('« La flore » means:', ['plant life', 'animal life', 'the floor', 'flowers in a vase'], 'Faune = animals.'),
    Q('Campo-Ma’an National Park is in the:', ['Sud', 'Extrême-Nord', 'Nord-Ouest', 'Adamaoua'], 'It is near the coast in the South Region.'),
  ],
  'fr-imperatif-4': [
    Q('The « tu » imperative of « manger » is:', ['Mange !', 'Manges !', 'Tu manges !', 'Manger !'], '-er verbs drop the s.'),
    Q('The « nous » imperative of « boire » is:', ['Buvons !', 'Boivons !', 'Nous buvons !', 'Boire !'], 'Nous buvons → Buvons !'),
    Q('« Défense de fumer » means:', ['No smoking', 'Smoke here', 'Defend the smokers', 'Smoking area'], 'It is a prohibition.'),
    Q('The negative imperative of « Touche ce fil » is:', ['Ne touche pas ce fil.', 'Touche pas ce fil.', 'Non touche ce fil.', 'Ne pas touche ce fil.'], 'ne + verb + pas.'),
  ],
  'fr-maladies-4': [
    Q('« La fièvre » is:', ['fever', 'a cough', 'a wound', 'a vaccine'], 'A common symptom of malaria.'),
    Q('HIV is NOT transmitted by:', ['une poignée de main', 'le sang contaminé', 'les rapports non protégés', 'la mère à l’enfant'], 'Shaking hands is safe.'),
    Q('« Les eaux stagnantes » are dangerous because they:', ['breed mosquitoes', 'cool the air', 'water plants', 'make noise'], 'Mosquito larvae develop there.'),
    Q('« Prévenir vaut mieux que guérir » means:', ['Prevention is better than cure', 'Cure is better than prevention', 'Medicines are expensive', 'Doctors are busy'], 'A well-known proverb.'),
  ],
  'fr-indefinis-4': [
    Q('« ___ a le droit à l’éducation. » (everyone, pronoun)', ['Chacun', 'Chaque', 'Plusieurs', 'Aucuns'], '« Chacun » is the pronoun.'),
    Q('« ___ les filles participent au vote. »', ['Toutes', 'Tous', 'Toute', 'Tout'], 'Feminine plural: toutes.'),
    Q('« Personne ___ est venu. »', ['n’', 'ne pas', 'pas', 'jamais'], '« Personne ne… » = nobody.'),
    Q('« Quelques » means:', ['a few', 'none', 'all', 'each'], '« Quelques candidats » = a few candidates.'),
  ],
  'fr-civisme-4': [
    Q('« Pourtant » expresses:', ['opposition', 'cause', 'consequence', 'time'], 'It means "yet, however".'),
    Q('« Un électeur » is:', ['a voter', 'an electrician', 'a candidate', 'a judge'], 'He or she votes.'),
    Q('The body that organises elections in Cameroon is:', ['ELECAM', 'la CONAC', 'la CAMTEL', 'l’ENEO'], 'Elections Cameroon.'),
    Q('« La liberté d’expression » is:', ['a right', 'a duty', 'a tax', 'a crime'], 'The right to express one’s opinions.'),
  ],
  'fr-concession-4': [
    Q('The subjunctive of « pouvoir » with « il » is:', ['qu’il puisse', 'qu’il peut', 'qu’il pourra', 'qu’il pouvait'], 'Irregular subjunctive.'),
    Q('« Même si » is followed by:', ['the indicative', 'the subjunctive', 'a noun', 'an infinitive'], '« Même si nous sommes différents… »'),
    Q('« ___ leurs disputes, ils restent amis. »', ['Malgré', 'Bien que', 'Même si', 'Quoique'], 'A noun follows.'),
    Q('Which is correct in careful French?', ['Bien qu’il soit fatigué, il travaille.', 'Malgré qu’il soit fatigué, il travaille.', 'Bien qu’il est fatigué, il travaille.', 'Malgré il est fatigué, il travaille.'], '« Bien que » + subjunctive.'),
  ],
  'fr-vivreensemble-4': [
    Q('« La Fête de la Jeunesse » is celebrated on:', ['le 11 février', 'le 20 mai', 'le 1er janvier', 'le 25 décembre'], 'Youth Day.'),
    Q('« Le tribalisme » is:', ['favouring one’s own tribe against others', 'tolerance', 'bilingualism', 'national unity'], 'It harms national unity.'),
    Q('Cameroon has about how many national languages?', ['more than 250', 'two', 'ten', 'one thousand exactly'], 'Besides the two official languages.'),
    Q('« La cohésion sociale » means:', ['social unity and solidarity', 'a social network', 'a tax', 'a party'], 'People holding together.'),
  ],
  'fr-discours-4': [
    Q('Elle dit : « J’aime mon école. » In reported speech:', ['Elle dit qu’elle aime son école.', 'Elle dit que j’aime mon école.', 'Elle dit qu’elle aimait son école demain.', 'Elle dit si elle aime son école.'], 'Pronoun and possessive change: je → elle, mon → son.'),
    Q('Il demande : « Est-ce que tu as un téléphone ? » In reported speech:', ['Il demande si j’ai un téléphone.', 'Il demande est-ce que j’ai un téléphone.', 'Il demande que j’ai un téléphone.', 'Il demande ce que j’ai un téléphone.'], 'A yes/no question → si.'),
    Q('With a reporting verb in the present, the tense of the reported verb:', ['does not change', 'moves to the imparfait', 'moves to the future', 'becomes the infinitive'], 'Only pronouns change.'),
    Q('« Les guillemets » are:', ['quotation marks « »', 'brackets', 'commas', 'full stops'], 'They mark direct speech.'),
  ],
  'fr-delinquance-4': [
    Q('« Le piratage » is:', ['hacking', 'sailing', 'fishing', 'farming'], 'Illegal access to computers.'),
    Q('« Un tribunal » is:', ['a court of law', 'a market', 'a school', 'a hospital'], 'Where trials take place.'),
    Q('« Porter plainte » means:', ['to file a complaint', 'to carry a plant', 'to cry', 'to pay a fine'], 'You go to the police.'),
    Q('Which is a solution to juvenile delinquency?', ['le dialogue en famille et les activités sportives', 'la drogue', 'les bandes de rue', 'l’abandon scolaire'], 'Supervision and activities help young people.'),
  ],
  'fr-connecteurs-4': [
    Q('« En effet » introduces:', ['an explanation or proof', 'a contrast', 'a conclusion', 'a list'], 'It explains what was just said.'),
    Q('« Bref » means:', ['in short', 'however', 'first', 'because'], 'It sums up.'),
    Q('Which connective adds an argument?', ['en outre', 'pourtant', 'donc', 'bref'], '« En outre » = moreover.'),
    Q('After a connective at the start of a sentence, you usually put:', ['a comma', 'a full stop', 'a question mark', 'nothing ever'], '« Ensuite, … »'),
  ],
  'fr-argumentatif-4': [
    Q('The development of an argumentative text contains:', ['two or three arguments, each with an example', 'only the title', 'one long story', 'no examples'], 'One argument per paragraph.'),
    Q('« À mon avis » means:', ['in my opinion', 'in my plane', 'on my way', 'my advice is wrong'], 'It introduces the writer’s view.'),
    Q('« Une ouverture » in the conclusion is:', ['a wider question or idea to end with', 'the title', 'the first argument', 'a spelling rule'], 'It opens the discussion.'),
    Q('The introduction of an argumentative text should:', ['present the subject and announce the thesis', 'give all the examples', 'end the debate', 'contain only a question'], 'Then announce the plan.'),
  ],

  // ---------- Form 4, term 3 ----------
  'fr-hypothese-4': [
    Q('« S’il ___ beau demain, nous irons à la plage. »', ['fait', 'fera', 'ferait', 'faisait'], 'Si + présent → futur.'),
    Q('« Si » becomes « s’ » before:', ['il and ils', 'elle', 'on', 'nous'], '« S’il », but « si elle ».'),
    Q('« Si tu étais riche, que ___ -tu ? »', ['ferais', 'feras', 'fais', 'faisais'], 'Si + imparfait → conditionnel.'),
    Q('Which sentence is correct?', ['Si j’ai le temps, je t’appellerai.', 'Si j’aurai le temps, je t’appellerai.', 'Si j’aurais le temps, je t’appelle.', 'Si je serai là, je viendrai.'], 'Never the future after « si ».'),
  ],
  'fr-numerique-4': [
    Q('« Un clavier » is a:', ['keyboard', 'screen', 'mouse', 'printer'], 'You type on it.'),
    Q('« Enregistrer un document » means:', ['to save a document', 'to delete a document', 'to print a document', 'to read a document'], 'Save your work often.'),
    Q('« Un courriel » is:', ['an e-mail', 'a website', 'a phone call', 'a letter by post'], 'Also « un e-mail ».'),
    Q('« Éteindre l’ordinateur » means:', ['to switch off the computer', 'to switch on the computer', 'to buy a computer', 'to break the computer'], 'Allumer = switch on.'),
  ],
  'fr-but-4': [
    Q('« Il étudie ___ réussir son examen. »', ['pour', 'pour que', 'parce que', 'bien que'], 'Same subject: pour + infinitive.'),
    Q('« Parle plus fort afin que tout le monde t’___. »', ['entende', 'entend', 'entendra', 'entendait'], '« Afin que » + subjunctive.'),
    Q('« De peur que » expresses:', ['a purpose to avoid something feared', 'a cause', 'a time', 'a comparison'], '« for fear that ».'),
    Q('The subjunctive of « savoir » with « tu » is:', ['que tu saches', 'que tu sais', 'que tu sauras', 'que tu savais'], 'Irregular subjunctive.'),
  ],
  'fr-securite-4': [
    Q('« Bloquer un harceleur » means:', ['to block a bully', 'to follow a bully', 'to pay a bully', 'to become a bully'], 'Then report him.'),
    Q('« Publier » means:', ['to post, to publish', 'to delete', 'to hide', 'to read'], 'You publish a post.'),
    Q('Which is good advice for social media?', ['« Vérifie la source avant de partager. »', '« Partage ton mot de passe. »', '« Publie ton adresse. »', '« Réponds aux inconnus. »'], 'Avoid spreading fake news.'),
    Q('« La dépendance au téléphone » means:', ['phone addiction', 'phone repair', 'phone credit', 'phone number'], 'Spending too much time on the phone.'),
  ],
  'fr-comprehension-4': [
    Q('Give the synonym of « content ».', ['heureux', 'triste', 'fâché', 'fatigué'], 'Both mean happy.'),
    Q('Give the antonym of « ouvrir ».', ['fermer', 'ouvrer', 'entrer', 'sortir'], 'Open → close.'),
    Q('In a comprehension answer, you should write:', ['full French sentences', 'one English word', 'a drawing', 'nothing'], 'Answer in French sentences.'),
    Q('« Remplacez le nom par un pronom » : « Je vois Marie. » →', ['Je la vois.', 'Je lui vois.', 'Je le vois.', 'Je vois la.'], '« Marie » is a feminine direct object: la, before the verb.'),
  ],
  'fr-traduction-4': [
    Q('"I am cold" in French is:', ['J’ai froid.', 'Je suis froid.', 'Je suis le froid.', 'J’ai le froid.'], '« Avoir froid ».'),
    Q('"Library" in French is:', ['bibliothèque', 'librairie', 'libraire', 'livrerie'], '« Librairie » means bookshop.'),
    Q('"I have been learning French for three years" is:', ['J’apprends le français depuis trois ans.', 'J’ai appris le français pour trois ans.', 'J’ai été apprenant le français trois ans.', 'J’apprenais le français il y a trois ans.'], 'Présent + depuis.'),
    Q('"A red car" in French is:', ['une voiture rouge', 'une rouge voiture', 'un rouge voiture', 'une voiture rougee'], 'Colour adjectives follow the noun.'),
  ],

  // ---------- Form 5, term 1 ----------
  'fr-sepresenter-5': [
    Q('« J’___ dix-sept ans. »', ['ai', 'suis', 'fais', 'a'], 'Age is given with « avoir ».'),
    Q('The informal way to introduce your cousin to a friend is:', ['« Je te présente mon cousin. »', '« J’ai l’honneur de vous présenter mon cousin. »', '« Permettez-moi de vous présenter… »', '« Veuillez agréer mon cousin. »'], '« Je te présente » uses « tu ».'),
    Q('« Que faites-vous dans la vie ? » asks:', ['what job someone does', 'where someone lives', 'how old someone is', 'what someone ate'], 'It is a polite question about one’s occupation.'),
    Q('The most correct written form of the question is:', ['« Où habitez-vous ? »', '« Vous habitez où ? »', '« Où vous habitez ? »', '« Habitez où vous ? »'], 'Inversion is the careful written form.'),
  ],
  'fr-generations-5': [
    Q('« La belle-fille » can mean:', ['the daughter-in-law', 'the granddaughter', 'the aunt', 'the godmother'], 'The wife of one’s son, also called la bru.'),
    Q('« Les ascendants » are:', ['parents, grandparents and great-grandparents', 'children and grandchildren', 'neighbours', 'teachers'], 'The generations before you.'),
    Q('« Faire des concessions » in a family conflict means:', ['each side accepts to give up something', 'one side wins everything', 'nobody speaks', 'the family separates'], 'A compromise.'),
    Q('In « vrai ou faux » questions on a text, you must:', ['justify with a short quotation from the text', 'give no reason', 'copy the whole text', 'answer in English'], 'The justification earns the mark.'),
  ],
  'fr-recit-5': [
    Q('The plus-que-parfait of « venir » with « ils » is:', ['ils étaient venus', 'ils avaient venu', 'ils sont venus', 'ils venaient'], '« Venir » takes être; imparfait of être + venus.'),
    Q('« Quand je suis arrivé, le film ___ . » (commencer, earlier)', ['avait commencé', 'commencera', 'a commencé demain', 'commence'], 'The film began before I arrived.'),
    Q('« Ils arrivèrent » is in the:', ['passé simple', 'passé composé', 'futur', 'présent'], 'The literary past tense, recognised in reading.'),
    Q('The opening description of a story is usually in the:', ['imparfait', 'futur simple', 'impératif', 'subjonctif'], 'Descriptions and background: imparfait.'),
  ],
  'fr-bilinguisme-5': [
    Q('Cameroon is often called:', ['« l’Afrique en miniature »', '« le pays du soleil levant »', '« la Suisse de l’Afrique »', '« le désert d’Afrique »'], 'Because of its great diversity.'),
    Q('« Le repli identitaire » means:', ['turning in on one’s own group', 'learning many languages', 'travelling abroad', 'national unity'], 'It is the opposite of openness.'),
    Q('Which spelling is correct?', ['la musique camerounaise', 'la musique Camerounaise', 'la Musique camerounaise', 'la musique Cameroun'], 'Adjectives of nationality take a small letter.'),
    Q('« Le brassage culturel » is:', ['the mixing of cultures', 'a beer factory', 'a cultural war', 'a language exam'], 'Cultures meet and mix.'),
  ],
  'fr-allocution-5': [
    Q('The salutations protocolaires begin with:', ['the most important person present', 'the students', 'the speaker’s friends', 'the youngest person'], 'Protocol order follows rank.'),
    Q('« C’est pour moi un grand honneur de prendre la parole » belongs in:', ['the introduction', 'the conclusion', 'the signature', 'the objet'], 'The speaker explains why they speak.'),
    Q('Which pair differs only by an oral and a nasal vowel?', ['beau / bon', 'chat / chien', 'mer / mère', 'rue / roue'], '/bo/ and /bɔ̃/.'),
    Q('An allocution is written to be:', ['heard by an audience', 'read in silence by one friend', 'posted as a notice', 'kept secret'], 'Short, clear sentences suit listening.'),
  ],
  'fr-carriere-5': [
    Q('A fisherman (un pêcheur) works in the:', ['secteur primaire', 'secteur secondaire', 'secteur tertiaire', 'secteur numérique only'], 'Fishing takes resources from nature.'),
    Q('« Le savoir-être » refers to:', ['personal qualities such as punctuality and honesty', 'a diploma', 'a salary', 'a factory'], 'How one behaves at work.'),
    Q('« La date limite » in a job advertisement is:', ['the last day to send the application', 'the date of birth', 'the salary date', 'the first day of work'], 'After it, applications are refused.'),
    Q('« Je ___ devenir pilote. » (pouvoir, conditionnel)', ['pourrais', 'pourrai', 'peux bien', 'pouvais'], 'Conditionnel: future stem pourr- + -ais.'),
  ],
  'fr-cv-5': [
    Q('In the « Formation » section of a CV, diplomas are listed:', ['from the most recent to the oldest', 'in alphabetical order', 'from the oldest to the most recent only', 'without dates'], 'Reverse chronological order.'),
    Q('« Si vous ___ ma demande, je vous en serai reconnaissant. »', ['acceptez', 'accepterez', 'accepteriez', 'acceptiez'], 'Si + présent → futur.'),
    Q('« Être titulaire du GCE A Level » means:', ['to hold the GCE A Level', 'to prepare for the GCE A Level', 'to fail the GCE A Level', 'to teach the GCE A Level'], 'Titulaire = holder.'),
    Q('Which word is NOT suitable in a lettre de motivation?', ['super', 'solliciter', 'maîtriser', 'disponible'], '« Super » is familiar.'),
  ],
  'fr-devises-5': [
    Q('The franc CFA of Cameroon is issued by:', ['la BEAC', 'la CONAC', 'ELECAM', 'la CRTV'], 'Banque des États de l’Afrique centrale.'),
    Q('« Le vendeur m’a rendu la monnaie » means:', ['the seller gave me my change', 'the seller changed currency', 'the seller lent me money', 'the seller refused my money'], '« La monnaie » here is the change.'),
    Q('Which is spelt correctly?', ['deux cents francs', 'deux cent francs', 'deux mils francs', 'deux milles francs'], '« Cent » takes -s when it ends the number.'),
    Q('« Le bénéfice » of a small business is:', ['its profit', 'its loss', 'its loan', 'its shop'], 'What remains after paying the costs.'),
  ],
  'fr-enligne-5': [
    Q('« Passer une commande » means:', ['to place an order', 'to pass an exam', 'to cancel a sale', 'to deliver a parcel'], 'You order goods.'),
    Q('« Le livreur ___ demain matin. » (passer, futur)', ['passera', 'passerait', 'est passé', 'passait'], 'Futur simple: passera.'),
    Q('The futur simple of « envoyer » with « je » is:', ['j’enverrai', 'j’envoierai', 'j’envoyerai', 'j’enverrais'], 'Irregular stem « enverr- ».'),
    Q('A safe habit when buying online is to:', ['keep the receipts and screenshots', 'share your PIN', 'pay a stranger first', 'click every link'], 'Proofs protect you.'),
  ],

  // ---------- Form 5, terms 2 and 3 ----------
  'fr-passive2-5': [
    Q('The passive of « On construira une école » is:', ['Une école sera construite.', 'Une école est construite.', 'Une école a construit.', 'Une école serait construit.'], 'Futur: sera + participle agreeing with « école ».'),
    Q('The passive of « Le vent arrachait les toits » is:', ['Les toits étaient arrachés par le vent.', 'Les toits ont arraché le vent.', 'Les toits sont arrachés par le vent.', 'Les toits seront arrachés par le vent.'], 'Imparfait: étaient + participle.'),
    Q('« Le plastique se recycle difficilement » is an example of:', ['the pronominal passive', 'the imperative', 'the subjunctive', 'reported speech'], 'A reflexive form with a passive meaning.'),
    Q('Which sentence cannot be put in the passive?', ['On parle de la pollution.', 'On pollue la rivière.', 'On trie les déchets.', 'On plante des arbres.'], '« Parler de » has no direct object.'),
  ],
  'fr-ecocitoyen-5': [
    Q('« Le tri sélectif » is:', ['sorting waste by type', 'burning waste', 'buying new bags', 'cutting trees'], 'It makes recycling possible.'),
    Q('« Il faut que chaque famille ___ ses déchets. » (trier)', ['trie', 'trier', 'triera', 'triait'], '« Il faut que » + subjunctive.'),
    Q('Solar energy is:', ['une énergie renouvelable', 'un gaz à effet de serre', 'une pollution', 'un déchet'], 'The sun does not run out.'),
    Q('« La désertification » threatens above all:', ['the Far North of Cameroon', 'the coast near Limbe', 'the forest of the East only', 'nowhere'], 'The Sahel zone is drying.'),
  ],
  'fr-signaler-5': [
    Q('« Le braconnage » is:', ['illegal hunting', 'legal farming', 'tree planting', 'fishing with a licence'], 'Hunting protected animals or without a permit.'),
    Q('The Dja faunal reserve is:', ['a UNESCO World Heritage site', 'a city', 'a river port', 'a school'], 'It is listed by UNESCO.'),
    Q('« J’ai constaté que… » is used to:', ['state a fact you have observed', 'give an order', 'say goodbye', 'ask for money'], 'Useful in a report.'),
    Q('« L’orpaillage illégal » is:', ['illegal gold mining', 'illegal fishing', 'illegal logging', 'illegal trading of birds'], 'It pollutes rivers.'),
  ],
  'fr-assainissement-5': [
    Q('The affirmative imperative of « se faire vacciner » (vous) is:', ['Faites-vous vacciner.', 'Vous faites vacciner.', 'Faites vacciner-vous.', 'Faisez-vous vacciner.'], 'The pronoun follows with a hyphen.'),
    Q('« Les caniveaux » are:', ['gutters that carry rainwater and waste water', 'kitchens', 'wells', 'hospitals'], 'Blocked gutters cause floods.'),
    Q('Cholera spreads mainly through:', ['dirty water and food', 'mosquito bites', 'cold weather', 'sunlight'], 'Hygiene and boiled water prevent it.'),
    Q('A public notice usually begins with:', ['a title in capitals, such as AVIS À LA POPULATION', 'a signature', 'a recipe', 'a question'], 'The title catches attention.'),
  ],
  'fr-etatcivil-5': [
    Q('« Le dépouillement » is:', ['the counting of the votes', 'the campaign', 'the registration', 'the voting booth'], 'It follows the close of the poll.'),
    Q('« ___ n’est censé ignorer la loi. »', ['Nul', 'Tous', 'Plusieurs', 'Chaque'], 'A classic legal maxim with « nul ».'),
    Q('The minimum age to register to vote in Cameroon is:', ['20 years', '15 years', '18 years', '25 years'], 'The electoral majority in Cameroon is 20.'),
    Q('« L’acte de décès » records:', ['a death', 'a birth', 'a marriage', 'a diploma'], 'Décès = death.'),
  ],
  'fr-corruption-5': [
    Q('« Le corrupteur » is the person who:', ['offers the bribe', 'refuses the bribe', 'reports the bribe', 'judges the case'], 'Le corrompu is the one who receives.'),
    Q('The CONAC was created in:', ['2006', '1960', '1990', '2020'], 'National Anti-Corruption Commission.'),
    Q('« La probité » is a synonym of:', ['l’honnêteté', 'la fraude', 'la paresse', 'la richesse'], 'Integrity, honesty.'),
    Q('« L’impunité » means:', ['the absence of punishment', 'a heavy punishment', 'a reward', 'a law'], 'It encourages wrongdoing.'),
  ],
  'fr-opposition-5': [
    Q('« ___ la pluie, les électeurs sont venus voter. »', ['Malgré', 'Bien que', 'Tandis que', 'Même si'], 'A noun follows: malgré.'),
    Q('« Il a beau ___, personne ne le croit. »', ['mentir', 'ment', 'mente', 'mentait'], '« Avoir beau » + infinitif.'),
    Q('« Quoique » is followed by:', ['the subjunctive', 'the indicative future', 'a noun', 'an infinitive'], 'Like « bien que ».'),
    Q('« Même s’il ___ riche, il paie ses impôts. »', ['est', 'soit', 'sera', 'serait'], '« Même si » + indicatif.'),
  ],
  'fr-addictions-5': [
    Q('« Les paris sportifs » can cause:', ['an addiction to gambling', 'better marks', 'good health', 'nothing at all'], 'An addiction without a substance.'),
    Q('« À ta place, je ___ à mes parents. » (parler)', ['parlerais', 'parlerai', 'parle', 'parlais'], '« À ta place » + conditionnel.'),
    Q('« Ne te laisse pas influencer » means:', ['do not let others influence you', 'influence others', 'leave school', 'let yourself go'], 'Resist pressure.'),
    Q('« Une surdose » is:', ['an overdose', 'a medicine for headaches', 'a small dose', 'a hospital'], 'Taking too much of a drug.'),
  ],
  'fr-concordance-5': [
    Q('Elle a dit : « J’ai fini. » In reported speech:', ['Elle a dit qu’elle avait fini.', 'Elle a dit qu’elle a fini.', 'Elle a dit qu’elle finira.', 'Elle a dit si elle avait fini.'], 'Passé composé → plus-que-parfait.'),
    Q('In reported speech with a past verb, « hier » becomes:', ['la veille', 'le lendemain', 'ce jour-là', 'demain'], 'The day before.'),
    Q('Il m’a dit : « Assieds-toi ! » In reported speech:', ['Il m’a dit de m’asseoir.', 'Il m’a dit que je m’assieds.', 'Il m’a dit si je m’asseyais.', 'Il m’a dit assieds-toi.'], 'Impératif → de + infinitif.'),
    Q('Ils ont demandé : « Est-ce que tu viendras ? » In reported speech:', ['Ils ont demandé si je viendrais.', 'Ils ont demandé que je viendrai.', 'Ils ont demandé si je viendrai.', 'Ils ont demandé est-ce que je viendrais.'], 'Yes/no question → si; futur → conditionnel.'),
  ],
  'fr-dunepart-5': [
    Q('« En effet » introduces:', ['an explanation or proof', 'a contrast', 'the conclusion', 'a greeting'], 'It confirms the previous idea.'),
    Q('« De surcroît » means:', ['moreover', 'therefore', 'however', 'firstly'], 'It adds a point.'),
    Q('The three parts of a development paragraph are:', ['argument, explanation, illustration', 'title, date, signature', 'question, answer, greeting', 'objet, corps, formule'], 'The idea, why, and an example.'),
    Q('« L’antithèse » in a dialectical plan presents:', ['the arguments against', 'the arguments for', 'the final greeting', 'the title'], 'The opposite view.'),
  ],
  'fr-medias-5': [
    Q('« Un quotidien » is published:', ['every day', 'every week', 'every month', 'once a year'], 'Quotidien = daily.'),
    Q('« Un hypertrucage » is:', ['a deepfake made with AI', 'a printing machine', 'a radio station', 'a fact-check'], 'Fake video or voice that looks real.'),
    Q('A warning sign of fake news is:', ['« URGENT ! Partagez avant suppression ! »', 'a known source', 'a date and an author', 'the same news in serious media'], 'Emotional pressure to share.'),
    Q('« Le chapeau » of an article is:', ['the short introduction under the title', 'the author’s hat', 'the advertisement', 'the last line'], 'It sums up the article.'),
  ],
  'fr-qcm-5': [
    Q('Which word contains the sound /ɑ̃/?', ['temps', 'thym', 'thon', 'tonne'], '« em » before a consonant is /ɑ̃/.'),
    Q('Which word contains the sound /ɲ/?', ['campagne', 'canne', 'cane', 'calme'], '« gn » is /ɲ/.'),
    Q('Choose the antonym of « augmenter »:', ['diminuer', 'grandir', 'monter', 'ajouter'], 'Increase ↔ decrease.'),
    Q('In « rose », the letter s is pronounced:', ['/z/', '/s/', '/ʃ/', 'not at all'], 'An s between two vowels sounds /z/.'),
  ],
  'fr-mock-5': [
    Q('« J’habite à Bafoussam depuis 2020 » translates:', ['I have been living in Bafoussam since 2020.', 'I lived in Bafoussam in 2020 only.', 'I will live in Bafoussam from 2020.', 'I left Bafoussam in 2020.'], 'Présent + depuis for an action still going on.'),
    Q('« Si tu étais venu, tu ___ le chef. » (voir)', ['aurais vu', 'verras', 'voyais', 'avais vu'], 'Si + plus-que-parfait → conditionnel passé.'),
    Q('« Je viens de manger » means:', ['I have just eaten', 'I come to eat', 'I will eat', 'I ate yesterday'], 'Venir de + infinitif: the recent past.'),
    Q('The conditionnel passé of « partir » with « elle » is:', ['elle serait partie', 'elle aurait parti', 'elle sera partie', 'elle était partie'], '« Partir » takes être; the participle agrees.'),
  ],
  'fr-paper2-5': [
    Q('Mettez au pluriel : « Cet élève est attentif. »', ['Ces élèves sont attentifs.', 'Ces élève sont attentif.', 'Cettes élèves sont attentives.', 'Ces élèves est attentifs.'], 'Determiner, verb and adjective all change.'),
    Q('« Remplacez par un pronom : Elle parle à ses amies. »', ['Elle leur parle.', 'Elle les parle.', 'Elle lui parle.', 'Elle y parle.'], '« parler à » + plural persons → leur.'),
    Q('In Section B, a transformation answer should be:', ['the whole rewritten sentence', 'only the changed word', 'a translation into English', 'a summary of the text'], 'Copy the full sentence.'),
    Q('Which is correct?', ['une décision prise', 'une décision pris', 'une décision prit', 'une décision prisse'], 'The participle agrees with the feminine noun.'),
  ],
};
