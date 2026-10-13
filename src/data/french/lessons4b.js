// French lessons for Form 4, terms 2 and 3: environment and health,
// citizenship and living together, the media and digital safety, and GCE
// skills. Explanations are in English for the learner; every example, word
// list and model text is in French. Original text written for this app.
// **double asterisks** mark key terms; `examples` are worked examples.

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

export const LESSONS_4B = [
  // ---------- L’environnement ----------
  L('fr-passive-4', 'fr-f4-environnement', '8.1', 'La voix passive au présent et au passé', 13, ['Grammaire'], [
    'In the **voix active** the subject does the action: « Les bûcherons **coupent** les arbres. » In the **voix passive** the subject undergoes the action: « Les arbres **sont coupés** par les bûcherons. »',
    'To form the passive: the direct object becomes the subject; use **être** in the tense of the active verb + the **past participle**, which **agrees** with the new subject; the agent is introduced by **par**:\n- présent: « La forêt **est détruite**. »\n- passé composé: « Les déchets **ont été ramassés** par les élèves. »\n- imparfait: « La rivière **était polluée**. »',
    'The agent is often left out when it is unknown or obvious: « Des sacs plastiques **sont jetés** dans les caniveaux. » Only verbs with a direct object can become passive.',
  ], 'voix-passive-fr', 'Keep the tense of « être » the same as the active verb, and make the participle agree.',
  ['The passive of « La mairie a ramassé les ordures » is:', ['Les ordures ont été ramassées par la mairie.', 'Les ordures sont ramassées par la mairie hier.', 'La mairie a été ramassée par les ordures.', 'Les ordures ont ramassé la mairie.'], 'Passé composé passive: ont été + participle, agreeing with « les ordures ».'],
  [['Voix passive', 'The form in which the subject undergoes the action: être + past participle.'], ['Complément d’agent', 'The doer in a passive sentence, introduced by « par ».']],
  [
    { q: 'Put into the passive: (a) « Les élèves plantent des arbres. » (b) « Les usines ont pollué le fleuve. »', steps: ['(a) Présent: **« Des arbres sont plantés par les élèves. »**', '(b) Passé composé: **« Le fleuve a été pollué par les usines. »**'] },
  ]),

  L('fr-cause-4', 'fr-f4-environnement', '8.2', 'Exprimer la cause ; l’écologie et le climat', 12, ['Grammaire', 'Lexique'], [
    'To express **cause**:\n- **parce que** + clause (answers « pourquoi ? »): « Les rues sont inondées **parce que** les caniveaux sont bouchés. »\n- **car** + clause (more formal, never at the start of a sentence): « Il faut recycler, **car** le plastique ne se dégrade pas. »\n- **à cause de** + noun, for a bad cause: « **À cause de** la sécheresse, les récoltes sont faibles. »\n- **grâce à** + noun, for a good cause: « **Grâce au** reboisement, la forêt repousse. »\n- **comme** + clause at the start of a sentence: « **Comme** il pleut, nous restons à la maison. »',
    'Environmental vocabulary: l’environnement, le **réchauffement climatique**, les gaz à effet de serre, la **déforestation**, le reboisement, la sécheresse, les inondations, la pollution de l’air et de l’eau, les déchets, les ordures ménagères, le tri des déchets, **recycler**, le compost, biodégradable, la gestion des déchets, la commune, la propreté.',
    'Remember: à + le = **au**, à + les = **aux**: « grâce **aux** arbres », « à cause **du** bruit ».',
  ], 'voix-passive-fr', '« Grâce à » for good causes, « à cause de » for bad ones.',
  ['« ___ la pollution, beaucoup de poissons meurent. »', ['À cause de', 'Grâce à', 'Parce que', 'Car'], 'A bad cause + noun.'],
  [['La cause', 'The reason why something happens.'], ['Le réchauffement climatique', 'Global warming.'], ['Le tri des déchets', 'Sorting waste.']],
  [
    { q: 'Join with the word given: (a) « Les élèves ont nettoyé la cour. La cour est propre. » (grâce à) (b) « Il n’y a pas d’arbres. Le sol est érodé. » (parce que)', steps: ['(a) **« Grâce aux élèves, la cour est propre. »**', '(b) **« Le sol est érodé parce qu’il n’y a pas d’arbres. »**'] },
  ]),

  // ---------- La biodiversité ----------
  L('fr-comparatif-4', 'fr-f4-biodiversite', '9.1', 'Le comparatif et le superlatif', 12, ['Grammaire'], [
    'The **comparatif** compares two things:\n- superiority: **plus** + adjective + **que**: « L’éléphant est **plus** lourd **que** le buffle. »\n- equality: **aussi** + adjective + **que**: « Le chimpanzé est **aussi** intelligent **que** le gorille. »\n- inferiority: **moins** + adjective + **que**: « Le lion est **moins** rapide **que** le guépard. »',
    'The **superlatif** compares one thing with all the others: **le / la / les plus** (or moins) + adjective + **de**: « Le mont Cameroun est **le plus** haut sommet **d’**Afrique de l’Ouest. » « C’est **la** forêt **la plus** riche **du** pays. »',
    'Irregular forms: **bon → meilleur → le meilleur**; mauvais → **pire** (or plus mauvais) → **le pire**; for the adverb « bien »: **mieux → le mieux**. The adjective agrees: « les **meilleures** réserves ».',
  ], 'comparaison-fr', '« Plus bon » does not exist: say « meilleur ».',
  ['« Ce parc est ___ que l’autre. » (bon, superiority)', ['meilleur', 'plus bon', 'mieux', 'le meilleur que'], '« Bon » → « meilleur ».'],
  [['Comparatif', 'The form that compares two things: plus/aussi/moins … que.'], ['Superlatif', 'The form that compares one thing with all the others: le plus, le moins, le meilleur.']],
  [
    { q: 'Write a comparison and a superlative about Cameroonian animals.', steps: ['Comparison: **« Le gorille est plus fort que le chimpanzé. »**', 'Superlative: **« L’éléphant est le plus grand animal de nos forêts. »**'] },
  ]),

  L('fr-faune-4', 'fr-f4-biodiversite', '9.2', 'La faune, la flore et les parcs nationaux', 12, ['Lexique', 'Lecture'], [
    'Vocabulary: la **biodiversité**, la **faune** (animals), la **flore** (plants), une espèce, une **espèce menacée**, en voie de disparition, disparu (extinct), un habitat, un écosystème, le **braconnage** (poaching), un braconnier, la viande de brousse, un garde forestier, une réserve, un **parc national**, protéger, conserver, interdire la chasse.',
    'Protected areas of Cameroon: le parc national de **Waza** (Extrême-Nord: éléphants, girafes, lions), **Campo-Ma’an** (Sud: forêt, éléphants de forêt, tortues marines), Korup (Sud-Ouest), Lobéké (Est), la réserve du Dja (patrimoine mondial de l’UNESCO). Endangered animals include the gorille de la Cross River, le drill, le chimpanzé and l’éléphant de forêt.',
    'In a text about wildlife, find the problem (le braconnage, la déforestation), its causes and effects, and the solutions proposed (sensibiliser, punir les braconniers, créer des réserves, l’écotourisme).',
  ], 'comparaison-fr', 'Faune = animals; flore = plants.',
  ['« Une espèce en voie de disparition » is:', ['an endangered species', 'a domestic species', 'an extinct species', 'a new species'], 'It may disappear if not protected.'],
  [['La biodiversité', 'The variety of living things in an area.'], ['Le braconnage', 'Illegal hunting of protected animals.'], ['Un garde forestier', 'A forest ranger.']],
  [
    { q: 'Answer in French: Pourquoi faut-il protéger le parc de Waza ?', steps: ['Give a reason linked to animals and the economy.', '**« Il faut protéger le parc de Waza parce qu’il abrite des espèces rares comme les girafes et les éléphants, et parce qu’il attire des touristes. »**'] },
  ]),

  // ---------- La santé ----------
  L('fr-imperatif-4', 'fr-f4-sante', '10.1', 'L’impératif présent et l’interdiction', 12, ['Grammaire'], [
    'The **impératif** gives orders, advice and instructions. It has three persons, without a subject pronoun: **tu**, **nous**, **vous**: « **Lave**-toi les mains. » « **Buvons** de l’eau potable. » « **Dormez** sous une moustiquaire. » Verbs in -er drop the -s in the « tu » form: « Mange ! » (but « Va ! »).',
    'Irregular: être → **sois, soyons, soyez**; avoir → **aie, ayons, ayez**; savoir → sache, sachons, sachez. The negative: **ne** + verb + **pas**: « **Ne buvez pas** l’eau de la rivière. » With pronouns in the affirmative, the pronoun follows with a hyphen: « Protège-**toi** ! »',
    'Other ways to express **prohibition**: « Il est **interdit** de… », « Il est **défendu** de… », « **Défense de** fumer », « **Ne pas** jeter d’ordures », « **Interdiction de**… ».',
  ], 'imperatif-fr', 'No subject pronoun in the imperative: « Mange ! », not « Tu mange ! ».',
  ['The imperative of « être » with « vous » is:', ['Soyez !', 'Êtes !', 'Soyiez !', 'Être !'], 'Être is irregular: sois, soyons, soyez.'],
  [['Impératif', 'The mood of orders, advice and instructions.'], ['Interdiction', 'A prohibition.']],
  [
    { q: 'Write three health instructions in the imperative (vous).', steps: ['**« Dormez sous une moustiquaire imprégnée. »**', '**« Lavez-vous les mains avec du savon. »**', '**« Ne buvez pas d’eau non traitée. »**'] },
  ]),

  L('fr-maladies-4', 'fr-f4-sante', '10.2', 'Les maladies infectieuses et la prévention', 12, ['Lexique', 'Lecture'], [
    'Vocabulary: la santé, la maladie, un microbe, un virus, un parasite, une infection, les symptômes (la fièvre, la toux, la diarrhée, les vomissements), le diagnostic, le traitement, un médicament, un vaccin, **se faire vacciner**, l’hygiène, l’eau potable, un centre de santé, un hôpital, un médecin, un infirmier.',
    'Diseases:\n- **le paludisme** (malaria): transmis par la piqûre du moustique anophèle femelle; prévention: moustiquaire imprégnée, élimination des eaux stagnantes\n- **le choléra**: transmis par l’eau et les aliments souillés; prévention: eau potable, lavage des mains, latrines\n- **le VIH/sida**: transmis par les rapports sexuels non protégés, le sang contaminé et de la mère à l’enfant; il ne se transmet pas par une poignée de main ou une piqûre de moustique.',
    'In a listening or reading task about health, note the disease, how it spreads (la transmission), the symptoms, the treatment and the advice.',
  ], 'imperatif-fr', 'Prévenir vaut mieux que guérir: prevention is better than cure.',
  ['« Une moustiquaire imprégnée » protects against:', ['le paludisme', 'le choléra', 'la grippe uniquement', 'la rougeole'], 'It stops mosquito bites.'],
  [['Les symptômes', 'The signs of an illness, such as fever.'], ['L’eau potable', 'Water that is safe to drink.'], ['La transmission', 'How a disease passes from one person to another.']],
  [
    { q: 'Answer in French: Comment peut-on éviter le choléra ?', steps: ['Name two or three preventive actions.', '**« On peut éviter le choléra en buvant de l’eau potable, en se lavant les mains avec du savon et en utilisant des latrines propres. »**'] },
  ]),

  // ---------- Citoyenneté ----------
  L('fr-indefinis-4', 'fr-f4-citoyennete', '11.1', 'Les déterminants et pronoms indéfinis', 12, ['Grammaire'], [
    'Indefinite words express a quantity or an identity that is not precise:\n- **chaque** + singular noun (each): « **Chaque** citoyen doit voter. » The pronoun is **chacun / chacune**: « **Chacun** a des droits. »\n- **tout, toute, tous, toutes** (all, every): « **Tous** les élèves », « **toute** la classe », « **tout** le monde ».\n- **plusieurs** + plural (several): « **Plusieurs** femmes sont conseillères municipales. »\n- **aucun, aucune** + ne (no, not any): « Il **n’**y a **aucun** problème. » « **Aucune** candidate **n’**est absente. »\n- **quelques** (a few), **certains** (some), **d’autres** (others), **quelqu’un** (someone), **personne ne** (nobody), **rien** (nothing).',
    'Agreement: « tout » agrees with its noun (tout le village, toute la ville, tous les hommes, toutes les femmes); « aucun » is almost always singular.',
  ], 'indefinis-fr', '« Aucun » always needs « ne » with the verb.',
  ['« ___ la population doit respecter la loi. »', ['Toute', 'Tous', 'Chaque', 'Plusieurs'], '« La population » is feminine singular: toute.'],
  [['Indéfini', 'A determiner or pronoun that expresses an imprecise quantity or identity.']],
  [
    { q: 'Complete: « ___ électeur reçoit une carte. ___ les bureaux de vote ouvrent à 8 heures. Il n’y a ___ incident. »', steps: ['Singular noun: **Chaque** électeur.', 'Masculine plural: **Tous** les bureaux.', 'With « ne »: il n’y a **aucun** incident.'] },
  ]),

  L('fr-civisme-4', 'fr-f4-citoyennete', '11.2', 'L’opposition ; les droits, les devoirs et la parité', 12, ['Grammaire', 'Lexique'], [
    'To express **opposition** (contrast): **mais** (but): « Il a le droit de voter, **mais** il ne vote pas. » **Tandis que / alors que** (whereas): « Les uns votent, **tandis que** les autres s’abstiennent. » **Cependant / pourtant** (however): « La loi est claire ; **pourtant**, certains l’ignorent. » **Au contraire**, **par contre**.',
    'Civic vocabulary: la **Constitution**, l’État, la République, le citoyen, la citoyenneté, les **droits** (le droit de vote, le droit à l’éducation, la liberté d’expression), les **devoirs** (respecter la loi, **payer ses impôts**, défendre la patrie, voter), une élection, un électeur, un bureau de vote, une urne, ELECAM.',
    '**La parité** and the role of women: l’égalité entre hommes et femmes, la représentation des femmes, une conseillère municipale, une députée, une maire, encourager les filles à diriger, lutter contre les discriminations.',
  ], 'indefinis-fr', '« Tandis que » joins two contrasting facts in one sentence.',
  ['« Payer ses impôts » est:', ['un devoir', 'un droit', 'une élection', 'une loi étrangère'], 'Taxes are a civic duty.'],
  [['La parité', 'Equal representation of women and men.'], ['Un devoir', 'A duty, something a citizen must do.'], ['L’urne', 'The ballot box.']],
  [
    { q: 'Join with « tandis que »: « Ma sœur veut être députée. Mon frère préfère le commerce. »', steps: ['Two contrasting facts.', '**« Ma sœur veut être députée, tandis que mon frère préfère le commerce. »**'] },
  ]),

  // ---------- Paix et vivre-ensemble ----------
  L('fr-concession-4', 'fr-f4-paix', '12.1', 'La concession : bien que + subjonctif, malgré + nom', 13, ['Grammaire'], [
    '**Concession** admits a fact that could have prevented something, which nevertheless happens:\n- **bien que / quoique + subjonctif**: « **Bien que** les deux villages **soient** en conflit, ils ont accepté le dialogue. »\n- **malgré + nom**: « **Malgré** leurs différences, ils vivent ensemble en paix. »\n- **même si + indicatif**: « **Même si** nous parlons des langues différentes, nous sommes tous Camerounais. »',
    'The **subjonctif présent**: take the « ils » form of the present, remove -ent, add -e, -es, -e, -ions, -iez, -ent: ils parl**ent** → que je parle, que nous parlions; ils finiss**ent** → que je finisse; ils prenn**ent** → que je prenne. Irregular: **être** (que je sois, qu’il soit, que nous soyons), **avoir** (que j’aie, qu’il ait), **faire** (que je fasse), **aller** (que j’aille), **pouvoir** (que je puisse), **savoir** (que je sache), **vouloir** (que je veuille).',
    'Never use the subjunctive after « même si », and never use « malgré que » in careful French: write « bien que ».',
  ], 'concession-fr', '« Bien que » + subjunctive; « malgré » + noun; « même si » + indicative.',
  ['« Bien qu’ils ___ des langues différentes, ils se comprennent. »', ['parlent', 'parleront', 'parlaient', 'ont parlé'], 'Subjunctive of « parler » (ils): qu’ils parlent.'],
  [['Concession', 'Admitting a fact that does not prevent the result.'], ['Subjonctif présent', 'The present subjunctive, used after bien que, il faut que, pour que…']],
  [
    { q: 'Rewrite with « malgré »: « Bien qu’il pleuve, la fête de l’unité continue. »', steps: ['Replace the clause with a noun: « la pluie ».', '**« Malgré la pluie, la fête de l’unité continue. »**'] },
  ]),

  L('fr-vivreensemble-4', 'fr-f4-paix', '12.2', 'L’unité nationale, le bilinguisme et le vivre-ensemble', 12, ['Lexique', 'Lecture'], [
    'Vocabulary: la paix, la **tolérance**, le respect, l’acceptation mutuelle, l’**unité nationale**, l’intégration nationale, le **vivre-ensemble**, la diversité culturelle, le **bilinguisme**, le multiculturalisme, la cohésion sociale, le dialogue, la médiation, la réconciliation, le tribalisme, la discrimination, les préjugés.',
    'Cameroon has two official languages, **le français et l’anglais**, and more than 250 national languages. The Fête nationale du **20 mai** celebrates national unity, and the Fête de la Jeunesse on 11 février encourages young people to live together.',
    'Ways to build peace: respecter les autres cultures, apprendre l’autre langue officielle, dialoguer au lieu de se battre, refuser les discours de haine, régler les conflits par la médiation.',
  ], 'concession-fr', 'Learning both official languages is a step towards national unity.',
  ['« Le bilinguisme » au Cameroun désigne l’usage:', ['du français et de l’anglais', 'du pidgin et du français', 'de l’anglais et de l’arabe', 'de deux langues nationales seulement'], 'They are the two official languages.'],
  [['Le vivre-ensemble', 'Living together peacefully in a diverse society.'], ['Le bilinguisme', 'The use of two languages.'], ['Les préjugés', 'Prejudices: opinions formed without knowledge.']],
  [
    { q: 'Answer in French: Comment un élève peut-il contribuer à l’unité nationale ?', steps: ['Give two concrete actions.', '**« Un élève peut contribuer à l’unité nationale en respectant ses camarades de toutes les régions et en apprenant les deux langues officielles. »**'] },
  ]),

  // ---------- Délinquance et discours rapporté ----------
  L('fr-discours-4', 'fr-f4-delinquance', '13.1', 'Le discours rapporté au présent', 13, ['Grammaire'], [
    '**Direct speech** (le discours direct) quotes the exact words with « guillemets »: Le policier dit : « **Je** cherche le voleur. » **Reported speech** (le discours rapporté or indirect) integrates them into the sentence: Le policier dit **qu’il** cherche le voleur.',
    'When the reporting verb is in the **present** (il dit, elle demande, ils expliquent), the tenses **do not change**. Only the **pronouns and possessives** change: « je » → il/elle, « mon » → son, « nous » → ils/elles.',
    'The linking words:\n- a statement → **que**: Elle dit : « Je suis innocente. » → Elle dit **qu’**elle est innocente.\n- a yes/no question → **si**: Il demande : « Tu as vu le voleur ? » → Il demande **si** j’ai vu le voleur.\n- a wh-question → the question word stays: « Où étais-tu ? » → Il demande **où** j’étais. « Qu’est-ce que » becomes **ce que**: « Qu’est-ce que tu fais ? » → Il demande **ce que** je fais.\n- an order → **de + infinitif**: « Asseyez-vous ! » → Il dit **de** s’asseoir.',
  ], 'discours-fr', 'Reporting verb in the present: keep the tense, change the pronouns.',
  ['Le juge demande : « Qu’est-ce que vous avez fait ? » In reported speech:', ['Le juge demande ce que vous avez fait.', 'Le juge demande qu’est-ce que vous avez fait.', 'Le juge demande si qu’est-ce que vous avez fait.', 'Le juge demande que vous avez fait.'], '« Qu’est-ce que » becomes « ce que ».'],
  [['Discours direct', 'The exact words of a speaker, in « guillemets ».'], ['Discours rapporté', 'Words reported without quotation marks, with que, si or a question word.']],
  [
    { q: 'Report: (a) L’élève dit : « Je n’ai pas volé le téléphone. » (b) La directrice demande : « Pourquoi es-tu en retard ? »', steps: ['(a) **L’élève dit qu’il n’a pas volé le téléphone.**', '(b) **La directrice demande pourquoi je suis en retard.**'] },
  ]),

  L('fr-delinquance-4', 'fr-f4-delinquance', '13.2', 'La délinquance juvénile et la cybercriminalité', 12, ['Lexique', 'Lecture'], [
    'Vocabulary: la **délinquance juvénile**, un délinquant, la violence scolaire, une bagarre, le vol, la drogue, la consommation de drogue, le tramadol, l’alcool, une bande (a gang), un gang; la loi, la police, un commissariat, une plainte (a complaint), un procès, un tribunal, un juge, un avocat, une **amende** (a fine), une peine de prison, une sanction.',
    'Cybercriminalité: **le broutage** (online scams in which a person pretends to be someone else to obtain money), l’escroquerie en ligne, le piratage (hacking), un faux profil, l’usurpation d’identité, le chantage (blackmail). In Cameroon, cybercrime is punished by law, and victims can report to the police.',
    'Causes and solutions: la pauvreté, le chômage, l’influence des amis, le manque d’encadrement familial; solutions: le dialogue en famille, les activités sportives et culturelles, la sensibilisation à l’école, les sanctions justes.',
  ], 'discours-fr', 'Never send money or personal codes to someone you only know online.',
  ['« Le broutage » est:', ['une escroquerie en ligne', 'un sport', 'un métier agricole', 'une fête'], 'It is a form of cybercrime.'],
  [['La délinquance juvénile', 'Crime committed by young people.'], ['Une plainte', 'A complaint made to the police or a court.'], ['L’escroquerie', 'Fraud, cheating someone out of money.']],
  [
    { q: 'Answer in French: Citez deux causes de la délinquance juvénile.', steps: ['Pick two causes from the lesson.', '**« La pauvreté et la mauvaise influence des amis sont deux causes de la délinquance juvénile. »**'] },
  ]),

  // ---------- Le texte argumentatif ----------
  L('fr-connecteurs-4', 'fr-f4-argumentation', '14.1', 'Les connecteurs logiques', 11, ['Grammaire', 'Expression écrite'], [
    '**Connecteurs logiques** link ideas and organise a text:\n- to list arguments: **d’abord**, premièrement, **ensuite**, puis, **de plus**, en outre, **enfin**\n- to oppose: **mais**, **cependant**, pourtant, par contre, en revanche\n- to show a consequence: **donc**, c’est pourquoi, par conséquent, ainsi\n- to give a cause: car, parce que, en effet\n- to give an example: **par exemple**, notamment, ainsi\n- to conclude: **en conclusion**, pour conclure, en somme, bref.',
    'Use a comma after a connective at the start of a sentence: « **Ensuite,** les jeunes doivent… ». Vary them: do not repeat « et puis » or « aussi » everywhere.',
  ], 'connecteurs-fr', 'D’abord → ensuite → de plus → enfin → en conclusion.',
  ['Which connective expresses a consequence?', ['par conséquent', 'cependant', 'par exemple', 'd’abord'], 'It means "as a result".'],
  [['Connecteur logique', 'A word that links ideas and shows their relationship.']],
  [
    { q: 'Link with connectives: « Le téléphone est utile. Il permet d’apprendre. Il peut distraire les élèves. »', steps: ['Add, then oppose.', '**« Le téléphone est utile. D’abord, il permet d’apprendre. Cependant, il peut distraire les élèves. »**'] },
  ]),

  L('fr-argumentatif-4', 'fr-f4-argumentation', '14.2', 'Rédiger un texte argumentatif', 15, ['Expression écrite'], [
    'An **argumentative text** defends a point of view (une thèse) with **arguments** supported by **examples**, to convince the reader.',
    'Plan:\n- **introduction**: present the subject, ask the question, announce your position and the plan\n- **développement**: two or three paragraphs, each with one argument (an idea) + an explanation + an example\n- **conclusion**: sum up the arguments, give your final opinion and possibly an opening (une ouverture).',
    'Model subject: « Les jeunes ont-ils un rôle à jouer dans la lutte contre la corruption ? » Possible arguments: refuser de donner ou de recevoir des pots-de-vin; dénoncer la corruption; devenir des dirigeants honnêtes. Write in the present, use « je pense que », « à mon avis », « il est évident que », and connectives.',
  ], 'connecteurs-fr', 'Every argument needs an example.',
  ['In an argumentative text, « la thèse » is:', ['the point of view defended', 'the title', 'an example', 'the conclusion only'], 'All the arguments support it.'],
  [['Thèse', 'The point of view defended in an argumentative text.'], ['Argument', 'An idea that supports the thesis.'], ['Exemple', 'A fact or case that illustrates an argument.']],
  [
    { q: 'Write the introduction of an essay on « L’importance du bilinguisme pour les jeunes Camerounais ».', steps: ['Present the subject, then your position and plan.', '**« Le Cameroun a deux langues officielles, le français et l’anglais. Faut-il que tous les jeunes les maîtrisent ? À mon avis, le bilinguisme est essentiel. D’abord, il favorise l’unité nationale ; ensuite, il ouvre des portes pour l’emploi. »**'] },
  ]),

  // ---------- Les TIC ----------
  L('fr-hypothese-4', 'fr-f4-tic', '15.1', 'L’hypothèse : si + présent, si + imparfait', 12, ['Grammaire'], [
    'Two common structures of condition:\n- **si + présent → futur simple** (a real possibility): « **Si** tu **télécharges** cette application, tu **pourras** réviser. » (also with the imperative: « Si tu as un problème, appelle-moi. »)\n- **si + imparfait → conditionnel présent** (an imagined situation): « **Si** j’**avais** un ordinateur, je **ferais** mes recherches en ligne. »',
    'Never use the future or the conditional right after « si » (meaning "if"): « Si je **serai** » and « si je **serais** » are wrong. « Si » becomes **s’** before « il » and « ils »: « **S’il** pleut… » (but « si elle »).',
    'The clause with « si » can come first or second: « Je t’aiderai si tu veux. »',
  ], 'hypothese-fr', 'After « si »: present or imparfait, never the future or the conditional.',
  ['« Si nous ___ plus de temps, nous apprendrions à coder. »', ['avions', 'aurons', 'aurions', 'avons'], 'Si + imparfait → conditionnel.'],
  [['Hypothèse', 'A condition or supposition introduced by « si ».']],
  [
    { q: 'Complete: (a) « Si tu (oublier) ton mot de passe, tu (perdre) ton compte. » (b) « Si j’(être) ministre, je (connecter) toutes les écoles. »', steps: ['(a) Real possibility: **oublies … perdras**.', '(b) Imagined: **étais … connecterais**.'] },
  ]),

  L('fr-numerique-4', 'fr-f4-tic', '15.2', 'Les TIC et le monde numérique', 11, ['Lexique'], [
    'Vocabulary: les **TIC** (technologies de l’information et de la communication), un **ordinateur**, un ordinateur portable, une tablette, un smartphone, un écran, un clavier, une souris, une imprimante, un logiciel, une application, Internet, un site web, un moteur de recherche, **naviguer**, télécharger, envoyer, un courriel (e-mail), un **réseau social**, le réseau mobile, la connexion, le wifi, l’**intelligence artificielle (IA)**.',
    'Useful verbs: allumer / éteindre (switch on / off), se connecter, enregistrer (save), imprimer, partager, publier, rechercher, cliquer, mettre à jour.',
    'Advantages and dangers of ICT: s’informer, apprendre en ligne, communiquer rapidement, créer des emplois; mais aussi la dépendance aux écrans, les fausses informations et la cybercriminalité.',
  ], 'hypothese-fr', 'Un ordinateur portable = a laptop.',
  ['« Télécharger un fichier » means:', ['to download a file', 'to delete a file', 'to print a file', 'to write a file'], 'Télécharger = download.'],
  [['Les TIC', 'Information and communication technologies.'], ['Un moteur de recherche', 'A search engine.'], ['Un logiciel', 'A piece of software.']],
  [
    { q: 'Answer in French: Citez deux avantages d’Internet pour un élève.', steps: ['**« Internet permet de faire des recherches pour les devoirs et de suivre des cours en ligne. »**'] },
  ]),

  // ---------- Sécurité en ligne ----------
  L('fr-but-4', 'fr-f4-reseaux', '16.1', 'L’expression du but', 12, ['Grammaire'], [
    'To express **purpose** (le but):\n- **pour / afin de + infinitif** when the subject is the same: « Je change mon mot de passe **pour protéger** mon compte. » (I change… I protect.)\n- **pour que / afin que + subjonctif** when the subjects are different: « Je t’explique les dangers **pour que** tu **sois** prudent. » (I explain… you are careful.)\n- **de peur que / de crainte que + subjonctif** (for fear that): « Il cache son code **de peur qu’**on le lui **vole**. »',
    'Remember the irregular subjunctives: que tu **sois**, que tu **aies**, que tu **fasses**, que tu **puisses**, que tu **saches**.',
  ], 'but-fr', 'Same subject → pour + infinitive; different subjects → pour que + subjunctive.',
  ['« Je bloque cet inconnu afin qu’il ne me ___ plus. »', ['contacte', 'contactera', 'contactait', 'contacter'], '« Afin que » + subjunctive.'],
  [['Le but', 'The purpose or aim of an action.']],
  [
    { q: 'Join: « Je vérifie la source. Je ne veux pas partager de fausses informations. » (pour + infinitif)', steps: ['Same subject (je): use « pour ne pas » + infinitive.', '**« Je vérifie la source pour ne pas partager de fausses informations. »**'] },
  ]),

  L('fr-securite-4', 'fr-f4-reseaux', '16.2', 'La sécurité sur les réseaux sociaux', 12, ['Lexique', 'Expression écrite'], [
    'Vocabulary: la **vie privée**, les données personnelles, un **mot de passe**, un profil, publier, partager, aimer (liker), commenter, bloquer, signaler, la cybersécurité, les **fausses informations** (fake news), la dépendance au téléphone, le **cyberharcèlement**, un harceleur, une victime.',
    'Advice (in the imperative): « Ne partage jamais ton mot de passe. » « Vérifie la source avant de partager une information. » « Ne publie pas ton adresse. » « Signale et bloque les harceleurs. » « Limite ton temps d’écran. » « Parle à un adulte si tu es victime. »',
    'A short **article or poster** of advice for your school uses a title, a short introduction, clear advice in the imperative, and a conclusion.',
  ], 'but-fr', 'Vérifier avant de partager: check before you share.',
  ['« Signaler un compte » means:', ['to report an account', 'to create an account', 'to like an account', 'to pay an account'], 'You report it to the platform.'],
  [['La vie privée', 'Privacy, private life.'], ['Le cyberharcèlement', 'Cyberbullying, harassment online.'], ['Les données personnelles', 'Personal data.']],
  [
    { q: 'Write three pieces of advice for a school poster on social media safety.', steps: ['**« Protège ton mot de passe. »**', '**« Vérifie toujours la source d’une information. »**', '**« Ne réponds pas aux harceleurs : bloque-les et parle à un adulte. »**'] },
  ]),

  // ---------- GCE ----------
  L('fr-comprehension-4', 'fr-f4-gce', '17.1', 'Compréhension de texte et opérations dirigées', 12, ['Examen', 'Révision'], [
    'GCE Ordinary Level French (0545): Paper 1 lasts **1½ hours** and Paper 2 **2 hours** on the 2026 timetable. The scheme’s revision weeks drill reading comprehension, **text-directed operations** (exercises based on a text), summary writing and translation from English into French.',
    'Reading comprehension shortcuts:\n- read the questions first, then the text\n- find the paragraph that contains each answer\n- answer in full French sentences, using the words of the question: « Pourquoi… ? » → « … parce que … »\n- for vocabulary questions, give a synonym or explain the word in context.',
    'Common text-directed operations: transform sentences (active ↔ passive, direct ↔ reported speech, present ↔ past), replace nouns with pronouns, find synonyms and antonyms, and fill gaps with the right form.',
  ], 'gce-french-papers', 'Answer « pourquoi » questions with « parce que ».',
  ['Une question commence par « Pourquoi ». La réponse commence de préférence par:', ['Parce que…', 'Oui…', 'Non…', 'Peut-être…'], 'A "why" question asks for a cause.'],
  [['Compréhension de texte', 'Reading comprehension.'], ['Synonyme', 'A word with the same meaning.'], ['Antonyme', 'A word with the opposite meaning.']],
  [
    { q: 'Give the antonym of: propre, gagner, toujours.', steps: ['propre → **sale**', 'gagner → **perdre**', 'toujours → **jamais**'] },
  ]),

  L('fr-traduction-4', 'fr-f4-gce', '17.2', 'La traduction de l’anglais vers le français et le résumé', 13, ['Examen', 'Révision'], [
    'Translation rules (English → French):\n- translate the **meaning**, not word for word\n- watch structures that differ: "I am 15" → « **J’ai** 15 ans »; "I am hungry / cold / right" → « J’ai faim / froid / raison »; "I have just eaten" → « Je **viens de** manger »; "I have lived here for two years" → « **J’habite** ici **depuis** deux ans »\n- check gender and agreement: "a big house" → « une **grande** maison »\n- adjectives usually follow the noun: "a red car" → « une voiture **rouge** ».',
    'Beware of **faux amis** (false friends): actually → **en fait** (not actuellement = currently); library → **bibliothèque** (not librairie = bookshop); sensible → **raisonnable** (sensible = sensitive); to attend → **assister à** (attendre = to wait); eventually → **finalement** (éventuellement = possibly).',
    'A **résumé** keeps only the main ideas, in your own words, in the same order, without examples or repetitions, and within the number of words given.',
  ], 'gce-french-papers', 'Translate ideas, not words, and watch for faux amis.',
  ['"I have just arrived" in French is:', ['Je viens d’arriver.', 'J’ai juste arrivé.', 'Je suis juste arrivé.', 'J’ai venu arriver.'], '« Venir de » + infinitive = to have just done.'],
  [['Faux ami', 'A French word that looks like an English one but has a different meaning.'], ['Résumé', 'A short version of a text that keeps only the main ideas.']],
  [
    { q: 'Translate: "My sister has been living in Douala for three years. She is 20 and she works in a library."', steps: ['"has been living … for" → présent + depuis.', '"She is 20" → « elle a 20 ans ».', 'library → bibliothèque.', '**« Ma sœur habite à Douala depuis trois ans. Elle a 20 ans et elle travaille dans une bibliothèque. »**'] },
  ]),
];
