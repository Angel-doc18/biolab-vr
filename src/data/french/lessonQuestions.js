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
};
