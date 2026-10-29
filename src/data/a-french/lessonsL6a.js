// A Level French lessons (0745), Lower Sixth, Term 1: family and relative
// pronouns, traditions and past tenses, from sentence to paragraph with
// phonetics, careers and the future, trade and obligation, tourism and
// prepositions of place, and the formal letter. Explanations are in English
// for the learner; every example, word list and model text is in French.
// Original text written for this app.

const PAPER = { Phonétique: 'Paper 1', Rédaction: 'Written papers', Résumé: 'Written papers', 'Expression orale': 'Class work' };

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

export const LESSONS_FL6A = [
  // ---------- 1. Famille ----------
  L('afr-relatifs-1', 'afr-l6-famille', '1.1', 'Les pronoms relatifs: qui, que, dont, où, lequel', 17, ['Grammaire'], [
    'Revise the simple relative pronouns: **qui** is the subject (« la tante **qui** m’élève »), **que** the direct object (« le conseil **que** mon père m’a donné »), **où** a place or a time (« le jour **où** il est né »).',
    '**Dont** replaces **de + noun**. Use it after verbs, adjectives and nouns built with « de »: parler de, avoir besoin de, être fier de, le nom de. « C’est le neveu **dont** je suis fier » (je suis fier de ce neveu). « La famille **dont** le père est médecin » (le père de cette famille).',
    'After a **preposition**, use **lequel, laquelle, lesquels, lesquelles** for things (and often people): « la raison **pour laquelle** il est parti », « la table **sur laquelle** il écrit ». With **à** and **de** they contract: **auquel, auxquels, auxquelles**, **duquel, desquels, desquelles**: « le projet **auquel** je pense », « le village près **duquel** nous habitons ». For people, **à qui** and **avec qui** are common: « l’ami **à qui** j’écris ».',
    'Diagnostic review: identify the parts of speech (nom, verbe, adjectif, adverbe, pronom, préposition, conjonction, déterminant) in a sentence before choosing a pronoun: the role of the missing word decides it.',
  ], 'afr-relatifs-composes', 'Look at the verb in the relative clause: no preposition → qui or que; « de » → dont; another preposition → lequel or à qui.',
  ['« Voici l’oncle ___ j’ai besoin pour mon dossier. »', ['dont', 'que', 'qui', 'auquel'], 'Avoir besoin de quelqu’un: dont.'],
  [['Pronom relatif', 'A relative pronoun such as qui, que, dont, où or lequel.'], ['Antécédent', 'The noun the relative pronoun stands for.'], ['Pronom composé', 'A compound relative pronoun such as lequel, auquel or duquel.']],
  [
    { q: 'Join: « J’ai rencontré une cousine. Je t’ai parlé de cette cousine. »', steps: ['The verb is « parler de », so « de cette cousine » becomes dont.', 'Place dont right after the antecedent.', '**J’ai rencontré la cousine dont je t’ai parlé.**'] },
    { q: 'Join: « Voici la maison. Mes grands-parents vivaient dans cette maison. »', steps: ['« Dans cette maison » is a place.', 'Use où (or dans laquelle).', '**Voici la maison où (dans laquelle) mes grands-parents vivaient.**'] },
  ]),

  L('afr-famille-1', 'afr-l6-famille', '1.2', 'Les structures familiales et le conflit de générations', 16, ['Vocabulaire'], [
    'Family structures: la **famille nucléaire** (les parents et les enfants), la **famille élargie** (avec les grands-parents, les oncles, les tantes, les cousins), la **famille monoparentale** (un seul parent), la **famille recomposée** (après un divorce ou un remariage).',
    'Relations: les **aînés** et les **cadets**, les **ascendants** (parents, grands-parents) et les **descendants**, le **lien de parenté**, la **belle-famille**. Le **conflit de générations** oppose souvent les jeunes, attirés par la modernité, et les anciens, attachés à la tradition.',
    'Useful expressions: **respecter ses aînés**, **transmettre les valeurs**, **s’entendre avec**, **se disputer avec**, **se réconcilier**, **l’autorité parentale**, **le dialogue**.',
    '**Activité pratique (diagnostic):** write a paragraph of about 100 words on « Ma famille et moi », using four relative pronouns and six words from this lesson; your teacher uses it to check your O Level grammar.',
  ], 'afr-famille-mots', 'Learn family words in pairs: aîné et cadet, ascendant et descendant.',
  ['Une famille avec un seul parent est une famille:', ['monoparentale', 'recomposée', 'élargie', 'nucléaire'], 'Mono: one.'],
  [['Famille élargie', 'A family that includes grandparents, uncles, aunts and cousins.'], ['Aîné', 'An older brother, sister or relative.'], ['Conflit de générations', 'Disagreement between young and old people.']],
  [
    { q: 'Complete: « Dans ma famille ___, mes grands-parents vivent avec nous, et j’aide souvent mon frère ___ à faire ses devoirs. »', steps: ['A family with grandparents: élargie.', 'A younger brother: cadet.', '**élargie, cadet.**'] },
    { q: 'Write one sentence about the generation gap using « alors que ».', steps: ['Contrast the young and the old.', 'Alors que joins two contrasting facts.', '**Les jeunes aiment la musique moderne, alors que leurs grands-parents préfèrent les chants traditionnels.**'] },
  ]),

  // ---------- 2. Traditions ----------
  L('afr-passe-1', 'afr-l6-traditions', '2.1', 'Imparfait et passé composé dans le récit', 17, ['Grammaire'], [
    'In a past narrative, the **imparfait** gives the **background**: description, ongoing actions, habits and states. « Il **faisait** beau, les tambours **résonnaient** et les enfants **couraient** partout. »',
    'The **passé composé** tells the **events**: completed, often sudden or counted actions that move the story forward. « Soudain, le chef **est arrivé** et tout le monde **s’est levé**. »',
    'The two tenses alternate: an action **in progress** (imparfait) is **interrupted** by an event (passé composé): « Nous **mangions** quand l’orage **a éclaté**. » Words such as **soudain, tout à coup, un jour, ce matin-là** introduce events; **chaque année, souvent, d’habitude, pendant que** go with the imparfait.',
    'An action **before** another past action takes the **plus-que-parfait** (avoir or être in the imparfait + participe passé): « Quand nous sommes arrivés, la danse **avait** déjà **commencé**. »',
  ], 'pc-imparfait', 'Ask: is it the scene (imparfait) or something that happened (passé composé)?',
  ['« Nous ___ au marché quand nous avons rencontré le chef. »', ['allions', 'sommes allés', 'irons', 'allons'], 'An action in progress, interrupted.'],
  [['Imparfait', 'The past tense of description, habit and background.'], ['Passé composé', 'The past tense of completed events.'], ['Plus-que-parfait', 'The past tense for an action before another past action.']],
  [
    { q: 'Put the verbs in the right tense: « Chaque soir, ma grand-mère (raconter) des contes. Un soir, elle (raconter) l’histoire du lièvre. »', steps: ['Chaque soir: a habit → imparfait.', 'Un soir: one event → passé composé.', '**racontait, a raconté.**'] },
    { q: 'Rewrite with the plus-que-parfait: « Les invités sont partis. Ensuite le chef est arrivé. » Begin: « Quand le chef est arrivé, ... »', steps: ['The guests left first.', 'Partir takes être: étaient partis.', '**Quand le chef est arrivé, les invités étaient déjà partis.**'] },
  ]),

  L('afr-traditions-1', 'afr-l6-traditions', '2.2', 'Coutumes, mariages et fêtes du patrimoine', 16, ['Vocabulaire'], [
    'Customs and community life: les **coutumes** et les **traditions** se **transmettent** de génération en génération; la **chefferie** est dirigée par un **chef traditionnel** (le fon, le lamido, le sultan selon les régions) entouré de **notables**.',
    'The traditional marriage: la **demande en mariage**, la **dot** (biens ou argent remis par la famille du fiancé à celle de la fiancée), les **cadeaux**, la **cérémonie**, puis souvent le **mariage civil** à la mairie.',
    'Heritage festivals: le **Ngondo** des Sawa à Douala, le **Nguon** des Bamoun à Foumban, et d’autres fêtes avec **danses**, **masques**, **rites** et **libations**. Ces fêtes renforcent l’**identité** et attirent des **touristes**.',
    '**Activité pratique:** in about 150 words, tell the story of a ceremony you attended, alternating imparfait and passé composé, with at least one plus-que-parfait.',
  ], 'recit-temps-fr', 'In your story, set the scene in the imparfait first, then launch the events with « soudain » or « un jour ».',
  ['Le chef traditionnel des Bamoun porte le titre de:', ['sultan', 'lamido', 'fon', 'maire'], 'The Bamoun sultanate at Foumban.'],
  [['Dot', 'Goods or money given by the groom’s family to the bride’s family.'], ['Chefferie', 'A traditional chiefdom and its authority.'], ['Patrimoine', 'Heritage passed down from earlier generations.']],
  [
    { q: 'Complete: « La famille du fiancé a apporté la ___ et les ___ ont béni les mariés. »', steps: ['What the groom’s family brings: la dot.', 'The elders around the chief: les notables.', '**dot, notables.**'] },
    { q: 'Write two sentences about the Ngondo, one in the imparfait and one in the passé composé.', steps: ['Description: imparfait.', 'An event: passé composé.', '**La foule chantait au bord du fleuve. Puis les plongeurs sont entrés dans l’eau.**'] },
  ]),

  // ---------- 3. Phrase, paragraphe et phonétique ----------
  L('afr-phrase-1', 'afr-l6-paragraphe', '3.1', 'De la phrase minimale au paragraphe cohérent', 17, ['Rédaction'], [
    'A **phrase minimale** has only what is necessary: a subject and a verb, and the object if the verb needs one: « L’élève écrit. » A **phrase étendue** adds **expansions**: adjectives, complements of place, time and manner, and subordinate clauses: « Le jeune élève de Lower Sixth écrit **soigneusement** une lettre **à son oncle qui vit à Yaoundé**. »',
    'Expand a sentence with: an **adjective** or **complément du nom** (de mon village), a **complément circonstanciel** (hier, au marché, avec soin), a **relative clause** (qui..., que..., dont...), or a **subordinate clause** (parce que..., quand...).',
    'A **coherent paragraph** develops **one idea**: a **phrase d’introduction** that states it, two or three sentences that **explain and illustrate** it with an example, and a **phrase de conclusion** or transition. Connectors (d’abord, ensuite, en effet, par exemple, enfin) link the sentences.',
    'Check every paragraph: one idea, a clear first sentence, an example, linked sentences, correct agreement and punctuation.',
  ], 'afr-phrase', 'Write the first sentence of the paragraph as if it were a title in sentence form.',
  ['« Le chien aboie » est une phrase:', ['minimale', 'étendue', 'complexe', 'nominale'], 'Subject and verb only.'],
  [['Phrase minimale', 'A sentence with only its essential parts.'], ['Expansion', 'A word or group added to enrich a sentence.'], ['Paragraphe', 'A group of sentences developing one idea.']],
  [
    { q: 'Expand « Les femmes vendent » with three expansions.', steps: ['Add an object and an adjective.', 'Add a place and a time.', '**Chaque samedi, les femmes du village vendent des tomates fraîches au grand marché de Bafoussam.**'] },
    { q: 'Write a three-sentence paragraph on « Le sport est utile ».', steps: ['State the idea.', 'Explain with an example, then conclude.', '**Le sport est utile à la santé. En effet, courir chaque matin renforce le cœur et réduit le stress. Il faudrait donc en faire régulièrement.**'] },
  ]),

  L('afr-sons-1', 'afr-l6-paragraphe', '3.2', 'Phonétique: /u/ et /y/, /e/ et /ɛ/', 15, ['Phonétique'], [
    'The vowels **/u/** and **/y/** change meaning: **/u/** is written **ou** (roue, tout, loup, dessous), with the lips rounded and the tongue back; **/y/** is written **u** or **û** (rue, tu, lu, dessus, sûr), with the lips rounded and the tongue forward, as if saying /i/.',
    'Minimal pairs: **roue / rue**, **tout / tu**, **loup / lu**, **dessous / dessus**, **vous / vu**, **pour / pur**. A mistake can change the message: « il est dessous » is not « il est dessus ».',
    'The vowel **/e/** (closed) is written **é**, **-er**, **-ez**, **-et** (and), **les, des, mes**: été, chanter, chantez, et. The vowel **/ɛ/** (open) is written **è, ê, ai, ei, -et** (in nouns), **-ais, -ait**: mère, fête, lait, neige, billet, je chantais.',
    'This contrast separates tenses: **j’ai parlé /e/** (passé composé) and **je parlais /ɛ/** (imparfait); **je parlerai /e/** (futur) and **je parlerais /ɛ/** (conditionnel). Paper 1 often tests these sounds.',
  ], 'afr-sons', 'Smile for /i/, then round your lips without moving the tongue: that is /y/.',
  ['Quel mot contient /y/?', ['pur', 'pour', 'loup', 'roue'], 'u = /y/.'],
  [['Paire minimale', 'Two words that differ by one sound only, such as roue and rue.'], ['Voyelle fermée', 'A vowel made with the mouth more closed, such as /e/.'], ['Voyelle ouverte', 'A vowel made with the mouth more open, such as /ɛ/.']],
  [
    { q: 'Sort into /u/ and /y/: tout, tu, nous, nu, cour, cure.', steps: ['ou → /u/: tout, nous, cour.', 'u → /y/: tu, nu, cure.', '**/u/: tout, nous, cour; /y/: tu, nu, cure.**'] },
    { q: 'Which pair shows the futur and the conditionnel by sound: « je mangerai » and « je mangerais »?', steps: ['-rai ends in /e/.', '-rais ends in /ɛ/.', '**Futur /e/, conditionnel /ɛ/: the vowel tells them apart.**'] },
  ]),

  // ---------- 4. Métiers ----------
  L('afr-futur-1', 'afr-l6-metiers', '4.1', 'Le futur simple, le futur proche et le conditionnel de souhait', 16, ['Grammaire'], [
    'The **futur proche** (aller + infinitif) is for something planned or about to happen: « Je **vais passer** mon examen en juin. »',
    'The **futur simple** is the infinitive (without final e for -re verbs) + **-ai, -as, -a, -ons, -ez, -ont**: je travaillerai, tu choisiras, il prendra. Irregular stems: **être → ser-**, **avoir → aur-**, **aller → ir-**, **faire → fer-**, **pouvoir → pourr-**, **vouloir → voudr-**, **venir → viendr-**, **voir → verr-**, **devoir → devr-**, **savoir → saur-**.',
    'The **conditionnel présent** uses the same stem + the imparfait endings **-ais, -ais, -ait, -ions, -iez, -aient**. It expresses a **wish** or a polite request: « **J’aimerais** devenir pilote », « **Je voudrais** un formulaire », « **Pourriez**-vous m’aider ? »',
    'After **quand** referring to the future, French uses the futur: « **Quand** j’**aurai** mon diplôme, je **chercherai** un emploi. »',
  ], 'futur-fr', 'Futur: -ai /e/; conditionnel: -ais /ɛ/. Same stem, different ending.',
  ['« Quand je ___ grand, je serai médecin. »', ['serai', 'suis', 'serais', 'étais'], 'Quand + futur for the future.'],
  [['Futur simple', 'The future tense: stem + -ai, -as, -a, -ons, -ez, -ont.'], ['Futur proche', 'Aller + infinitive, for a near or planned future.'], ['Conditionnel présent', 'Stem of the future + imparfait endings, for wishes and politeness.']],
  [
    { q: 'Put into the futur simple: « Demain, nous (aller) à Buea et nous (voir) le mont Cameroun. »', steps: ['Aller → ir-; voir → verr-.', 'Nous → -ons.', '**irons, verrons.**'] },
    { q: 'Make polite with the conditionnel: « Je veux un rendez-vous avec le directeur. »', steps: ['Vouloir → voudr- + -ais.', 'Keep the rest.', '**Je voudrais un rendez-vous avec le directeur.**'] },
  ]),

  L('afr-metiers-1', 'afr-l6-metiers', '4.2', 'Les secteurs d’activité et les métiers du numérique', 16, ['Vocabulaire'], [
    'The **secteur primaire** takes resources from nature: agriculture, élevage, pêche, exploitation forestière, mines. The **secteur secondaire** transforms them: industries, usines, bâtiment, artisanat. The **secteur tertiaire** provides services: commerce, banques, transports, santé, éducation, administration.',
    'New digital jobs: **développeur** (d’applications), **infographiste**, **community manager**, **technicien réseau**, **analyste de données**, **cybersécurité**. They need training in informatique and good written French and English.',
    'Job hunting: **chercher un emploi**, **une offre d’emploi**, **postuler**, **un curriculum vitae (CV)**, **une lettre de motivation**, **un entretien d’embauche**, **un stage**, **un contrat**, **le salaire**, **le chômage**.',
    '**Activité pratique:** in 120 words, present the job you would like to do, in which sector, why, and what training you will need, using the futur simple and the conditionnel.',
  ], 'secteurs-fr', 'Sort any job by asking: does it take from nature, transform, or serve?',
  ['Un mécanicien automobile travaille dans le secteur:', ['tertiaire', 'primaire', 'secondaire', 'agricole'], 'He provides a service (repair).'],
  [['Secteur primaire', 'Activities that take resources from nature.'], ['Secteur tertiaire', 'Activities that provide services.'], ['Chômage', 'Unemployment.']],
  [
    { q: 'Classify: pêcheur, boulanger, enseignante, ouvrier d’usine.', steps: ['Pêcheur takes from nature: primaire.', 'Boulanger and ouvrier d’usine transform: secondaire.', '**Enseignante serves: tertiaire.**'] },
    { q: 'Write a sentence about a digital job using « j’aimerais » and « parce que ».', steps: ['Express the wish.', 'Give a reason.', '**J’aimerais devenir développeuse d’applications parce que je veux créer des outils utiles aux agriculteurs.**'] },
  ]),

  // ---------- 5. Commerce ----------
  L('afr-obligation-1', 'afr-l6-commerce', '5.1', 'L’obligation et la permission', 16, ['Grammaire'], [
    '**Obligation**: **il faut** + infinitif (general: « Il faut épargner »), **il faut que** + subjonctif (a particular person: « Il faut que **tu** épargnes »), **devoir** + infinitif (« Je **dois** payer »), **être obligé de**, **il est nécessaire de**, **avoir à**.',
    'The **subjonctif présent** of regular verbs: the stem of « ils » in the present (ils **parl**ent, ils **finiss**ent, ils **vend**ent) + **-e, -es, -e, -ions, -iez, -ent**: que je parle, que nous finissions. Irregular: que je **sois**, que j’**aie**, que je **fasse**, que j’**aille**, que je **puisse**, que je **sache**.',
    '**Permission**: **pouvoir** + infinitif (« Vous **pouvez** payer par mobile money »), **avoir le droit de**, **il est permis de**, **être autorisé à**. **Prohibition**: **il est interdit de**, **ne pas avoir le droit de**, **défense de**.',
    'Use these structures in rules, notices and contracts: « Le client **doit** présenter son reçu. Il **est interdit de** toucher la marchandise. »',
  ], 'falloir-devoir', 'Il faut + infinitif for everyone; il faut que + subjonctif when you name who must act.',
  ['« Il faut que nous ___ à l’heure. »', ['soyons', 'sommes', 'serons', 'étions'], 'Être in the subjonctif.'],
  [['Obligation', 'Something one must do.'], ['Permission', 'Being allowed to do something.'], ['Subjonctif', 'A mood used after expressions of necessity, wish, doubt and some conjunctions.']],
  [
    { q: 'Rewrite with « il faut que »: « Tu dois remplir ce formulaire. »', steps: ['Il faut que + subjonctif.', 'Remplir → que tu remplisses.', '**Il faut que tu remplisses ce formulaire.**'] },
    { q: 'Write a market notice with one permission and one prohibition.', steps: ['Permission: pouvoir or avoir le droit de.', 'Prohibition: il est interdit de.', '**Les clients peuvent payer par mobile money. Il est interdit de jeter des ordures dans les allées.**'] },
  ]),

  L('afr-commerce-1', 'afr-l6-commerce', '5.2', 'Marchés, transactions, budget et épargne', 16, ['Vocabulaire'], [
    'At the market: le **commerçant** et le **client**, l’**étal**, la **marchandise**, le **prix**, **marchander** (discuss the price), **en gros** et **au détail**, la **facture** et le **reçu**, la **monnaie** (change).',
    'Business: **créer une entreprise**, une **start-up**, le **capital**, le **chiffre d’affaires**, les **charges**, le **bénéfice** et la **perte**, la **concurrence**, la **publicité**, le **client fidèle**.',
    'Money management: le **budget** (prévoir les **recettes** et les **dépenses**), l’**épargne**, le **compte bancaire**, le **prêt** et le **taux d’intérêt**, le **mobile money**, la **tontine** (association où chaque membre cotise et reçoit à son tour).',
    '**Activité pratique:** prepare the monthly budget of a small shop with four recettes and four dépenses, then write five sentences of advice using il faut, devoir and pouvoir.',
  ], 'afr-commerce-mots', 'Pair the words: recettes et dépenses, bénéfice et perte, prêt et épargne.',
  ['Discuter le prix pour l’obtenir moins cher, c’est:', ['marchander', 'épargner', 'emprunter', 'facturer'], 'Bargaining.'],
  [['Bénéfice', 'Profit: what remains after costs.'], ['Tontine', 'A savings association in which members contribute and take turns to collect.'], ['Recettes', 'Money coming in.']],
  [
    { q: 'Complete: « Ce mois-ci, mes ___ sont de 80 000 FCFA et mes ___ de 60 000 FCFA; il me reste donc 20 000 FCFA d’___. »', steps: ['Money in: recettes; money out: dépenses.', 'What is saved: épargne.', '**recettes, dépenses, épargne.**'] },
    { q: 'Explain « vendre en gros » and « vendre au détail » in one sentence.', steps: ['En gros: large quantities, often to traders.', 'Au détail: small quantities to consumers.', '**On vend en gros de grandes quantités aux commerçants, et au détail de petites quantités aux consommateurs.**'] },
  ]),

  // ---------- 6. Tourisme ----------
  L('afr-lieux-1', 'afr-l6-tourisme', '6.1', 'Les prépositions de lieu: en, au, aux, à, chez', 15, ['Grammaire'], [
    'With **countries and continents**: **en** + feminine names (most end in -e): en France, en Afrique, en Guinée; **au** + masculine names: au Cameroun, au Nigeria, au Tchad, au Gabon; **aux** + plural names: aux États-Unis, aux Pays-Bas. **En** is also used before masculine countries beginning with a vowel: en Iran.',
    'With **towns** and small islands: **à**: à Douala, à Garoua, à Limbé. With **regions**: dans la région de l’Ouest, dans le Nord-Ouest. With a **person**, or a shop named by its owner’s trade: **chez**: chez ma tante, chez le coiffeur.',
    'To say **where from**: **de** (d’) + feminine country (je viens **de** France), **du** + masculine (**du** Cameroun), **des** + plural (**des** États-Unis), **de** + town (**de** Kribi).',
    'Adverbs of **time and frequency** often go with travel: **toujours, souvent, parfois, rarement, ne... jamais, déjà, bientôt, désormais**. In compound tenses, short adverbs sit between the auxiliary and the participle: « J’ai **souvent** visité Kribi. »',
  ], 'prepositions-lieux', 'Feminine country → en; masculine → au; plural → aux; town → à.',
  ['« Elle revient ___ Gabon. »', ['du', 'de', 'des', 'en'], 'Masculine country: du.'],
  [['Préposition de lieu', 'A word showing where: en, au, aux, à, chez, dans.'], ['Adverbe de fréquence', 'An adverb that says how often: souvent, jamais.'], ['Pays féminin', 'A country whose name is feminine, usually ending in -e.']],
  [
    { q: 'Complete: « L’été dernier, je suis allé ___ Nigeria, puis ___ Ghana, et je suis rentré ___ Bamenda. »', steps: ['Nigeria and Ghana are masculine: au.', 'Bamenda is a town: à.', '**au, au, à.**'] },
    { q: 'Place the adverb correctly: « J’ai visité Foumban (déjà). »', steps: ['Compound tense: short adverb between auxiliary and participle.', 'J’ai + déjà + visité.', '**J’ai déjà visité Foumban.**'] },
  ]),

  L('afr-tourisme-1', 'afr-l6-tourisme', '6.2', 'Les sites touristiques du Cameroun et l’écotourisme', 16, ['Vocabulaire'], [
    'Le Cameroun est souvent appelé « **l’Afrique en miniature** » pour la variété de ses paysages. Sites: le **mont Cameroun** près de Buea, les **plages** et les **chutes de la Lobé** près de Kribi, le **jardin botanique** de Limbé, le **parc national de Waza** dans l’Extrême-Nord, le **palais des rois** à Foumban, le **lac** et les **chefferies** de l’Ouest.',
    'Travel: une **agence de voyages**, un **circuit**, une **réservation**, un **guide**, l’**hébergement** (hôtel, auberge, campement), le **billet**, les **bagages**, le **séjour**.',
    'L’**écotourisme** visits nature while **protecting** it and **benefiting** local people: respecting animals and plants, using local guides, reducing waste. Leisure: les **loisirs**, faire une **randonnée**, une **excursion**, se **détendre**.',
    '**Activité pratique:** write a 120-word message to a friend inviting them on a three-day trip to two Cameroonian sites, with prepositions of place and adverbs of frequency.',
  ], 'afr-sites', 'Pair each site with its region: it makes your writing precise and credible.',
  ['Le Cameroun est appelé « l’Afrique en miniature » à cause de:', ['la variété de ses paysages et de ses cultures', 'sa petite taille', 'son climat froid', 'sa seule langue'], 'Many landscapes in one country.'],
  [['Écotourisme', 'Tourism that protects nature and benefits local people.'], ['Hébergement', 'Accommodation.'], ['Randonnée', 'A long walk or hike.']],
  [
    { q: 'Write a sentence about Kribi using « à », « près de » and « souvent ».', steps: ['Kribi is a town: à Kribi.', 'Add a place and an adverb.', '**À Kribi, les touristes vont souvent voir les chutes de la Lobé, près de la plage.**'] },
    { q: 'Give two rules of ecotourism in the imperative.', steps: ['One about nature, one about local people.', 'Use the vous form.', '**Ne jetez pas vos déchets dans la nature. Choisissez des guides locaux.**'] },
  ]),

  // ---------- 7. Lettre et entretien ----------
  L('afr-lettre-1', 'afr-l6-lettre', '7.1', 'La lettre formelle de demande d’emploi ou de stage', 18, ['Rédaction'], [
    'Layout of the **lettre administrative**: at the top left, the **sender** (nom, adresse, téléphone); at the top right, the **lieu et la date** (Bamenda, le 12 mars 2026); below on the right, the **destinataire** (Monsieur le Directeur de la société...); on the left, the **objet** (Objet: Demande de stage); then the **appel** (Monsieur le Directeur,).',
    'The body in three parts: **introduction** (why you are writing, where you saw the offer), **développement** (who you are, your qualifications and qualities, why this company), **conclusion** (availability, request for an interview).',
    'The **formule de politesse** repeats the appel: « Dans l’attente d’une réponse favorable, je vous prie d’agréer, **Monsieur le Directeur**, l’expression de mes salutations distinguées. » Then the **signature** and the full name.',
    'Register: **vouvoiement**, full sentences, no abbreviations; useful formulas: « J’ai l’honneur de solliciter... », « Je me permets de vous adresser... », « Je reste à votre disposition pour un entretien. »',
  ], 'lettre-emploi', 'The appel and the formule de politesse must use the same title: Monsieur le Directeur ... Monsieur le Directeur.',
  ['« Objet: Demande de stage » se place:', ['avant l’appel', 'après la signature', 'dans la formule de politesse', 'dans l’adresse de l’expéditeur'], 'It announces the subject.'],
  [['Objet', 'The line that states the subject of a formal letter.'], ['Appel', 'The greeting at the start of a letter, such as Monsieur le Directeur.'], ['Formule de politesse', 'The polite closing formula of a formal letter.']],
  [
    { q: 'Write the introduction of a letter asking for a holiday internship at a bank.', steps: ['Say what you request and why you write.', 'Use a formal formula.', '**Monsieur le Directeur, j’ai l’honneur de solliciter un stage de vacances dans votre agence pendant les mois de juillet et d’août 2026.**'] },
    { q: 'Correct the register: « Salut, je veux un job chez vous, merci. »', steps: ['Replace the familiar greeting and words.', 'Use a polite formula.', '**Monsieur le Directeur, je me permets de solliciter un emploi dans votre entreprise.**'] },
  ]),

  L('afr-entretien-1', 'afr-l6-lettre', '7.2', 'L’entretien d’embauche et l’échange commercial (jeu de rôle)', 15, ['Expression orale'], [
    'An **entretien d’embauche** follows steps: **saluer** and introduce yourself, answer questions about your **parcours** (studies, experience), your **qualités** and **défauts**, your **motivation**, then ask a question and **remercier**.',
    'Useful expressions: « Je m’appelle... et je suis élève en Lower Sixth. » « Je suis **motivé** par... » « Ma principale qualité est la **rigueur**. » « J’aimerais savoir... » « Je vous **remercie** de m’avoir reçu. »',
    'A **commercial exchange**: the seller **propose**, the customer **demande le prix**, **marchande**, **négocie** and **conclut**: « Combien coûte ce sac ? » « Vous pouvez me faire un prix ? » « D’accord, je le prends. »',
    '**Activité pratique (jeu de rôle):** in pairs, act a five-minute job interview for a holiday post, then a market exchange; your partner notes your use of vous, the conditionnel and polite formulas.',
  ], 'afr-entretien', 'In an interview, use the conditionnel to sound polite: « J’aimerais », « Pourriez-vous ».',
  ['Dans un entretien d’embauche, on s’adresse au recruteur avec:', ['vous', 'tu', 'toi', 'on'], 'Formal address.'],
  [['Entretien d’embauche', 'A job interview.'], ['Parcours', 'One’s path of studies and experience.'], ['Négocier', 'To discuss in order to reach an agreement.']],
  [
    { q: 'Answer politely: « Pourquoi voulez-vous ce stage ? »', steps: ['Give a clear reason linked to your goals.', 'Use a polite structure.', '**Je voudrais ce stage parce qu’il me permettrait de découvrir le métier de banquier que j’aimerais exercer plus tard.**'] },
    { q: 'Ask for a lower price politely at the market.', steps: ['Use the conditionnel or « pouvoir ».', 'Stay courteous.', '**Pourriez-vous me faire un petit prix, s’il vous plaît ?**'] },
  ]),
];
