// A Level French lessons (0745), Lower Sixth, Terms 2 and 3: the environment
// and the passive, wildlife and comparison, health and the imperative,
// citizenship and indefinite determiners, peace and concession, delinquency
// and reported speech, the argumentative essay, ICT and the hypothesis, the
// media and purpose, and revision with the résumé. Explanations are in
// English; examples are in French. Original text written for this app.

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

export const LESSONS_FL6B = [
  // ---------- 8. Environnement ----------
  L('afr-passive-1', 'afr-l6-environnement', '8.1', 'La voix passive au présent et au passé', 17, ['Grammaire'], [
    'In the **voix passive**, the object of the active sentence becomes the subject, and the verb becomes **être** (in the same tense) + **participe passé**, which **agrees** with the subject: « Les ouvriers **construisent** le pont » → « Le pont **est construit** par les ouvriers. » « Les braconniers **ont tué** deux éléphants » → « Deux éléphants **ont été tués** par les braconniers. »',
    'Tenses: présent **est construit**, imparfait **était construit**, passé composé **a été construit**, futur **sera construit**, plus-que-parfait **avait été construit**.',
    'The agent is introduced by **par** (an action) or by **de** (a feeling or a state: aimé de, respecté de, couvert de). It is often left out when it is unknown or obvious: « La forêt **a été détruite**. »',
    'French often avoids the passive with **on**: « **On** a recyclé les bouteilles » = « Les bouteilles ont été recyclées. » Only verbs with a direct object can be made passive.',
  ], 'voix-passive-fr', 'Keep the tense of the active verb in « être », then make the participle agree with the new subject.',
  ['La voix passive de « On recycle le plastique » est:', ['Le plastique est recyclé.', 'Le plastique a recyclé.', 'Le plastique recycle.', 'Le plastique est recyclée.'], 'Être + participle; no agent needed.'],
  [['Voix passive', 'A structure in which the subject undergoes the action: être + participe passé.'], ['Complément d’agent', 'The doer of the action, introduced by par or de.'], ['Accord du participe', 'The agreement of the participle with the subject in the passive.']],
  [
    { q: 'Mettez à la voix passive: « Les usines polluent les rivières. »', steps: ['Object « les rivières » becomes the subject.', 'Present: sont + polluées (feminine plural).', '**Les rivières sont polluées par les usines.**'] },
    { q: 'Mettez à la voix passive: « La mairie a installé des poubelles. »', steps: ['Passé composé: ont été + participle.', 'Des poubelles: feminine plural → installées.', '**Des poubelles ont été installées par la mairie.**'] },
  ]),

  L('afr-cause-1', 'afr-l6-environnement', '8.2', 'L’expression de la cause, et le vocabulaire de l’environnement', 16, ['Grammaire'], [
    'Cause + **clause** (indicatif): **parce que** (answers « pourquoi ? »), **car** (between two clauses, written style), **puisque** (a cause already known), **comme** (at the start of the sentence): « **Comme** il pleut, la route est glissante. »',
    'Cause + **noun**: **à cause de** (a negative cause), **grâce à** (a positive cause), **en raison de** (neutral, formal), **faute de** (lack of): « Les récoltes sont perdues **à cause de** la sécheresse », « La ville est propre **grâce aux** volontaires », « **Faute de** pluie, le fleuve baisse. »',
    'Vocabulary: la **déforestation** (le déboisement), le **réchauffement climatique**, les **gaz à effet de serre**, les **déchets plastiques**, le **tri** et le **recyclage**, la **pollution** de l’air, de l’eau et du sol, les **énergies renouvelables**.',
    '**Activité pratique:** write a 120-word paragraph on « Les causes de la pollution dans ma ville », using four different expressions of cause and two passive sentences.',
  ], 'afr-cause', 'Noun after the gap → à cause de, grâce à, en raison de; a whole clause → parce que, car, puisque.',
  ['« ___ la pluie, le match a été annulé. »', ['À cause de', 'Parce que', 'Car', 'Grâce à'], 'Negative cause + noun.'],
  [['Cause', 'The reason why something happens.'], ['Gaz à effet de serre', 'Greenhouse gases, which trap heat in the atmosphere.'], ['Tri sélectif', 'Sorting waste by type for recycling.']],
  [
    { q: 'Complete: « ___ les volontaires ont nettoyé le quartier, il n’y a plus de moustiques. »', steps: ['A clause follows and starts the sentence.', 'Comme or Puisque fits.', '**Comme (Puisque) les volontaires ont nettoyé le quartier, il n’y a plus de moustiques.**'] },
    { q: 'Rewrite with « grâce à »: « Les arbres ont été replantés, donc le sol est protégé. »', steps: ['Turn the cause into a noun: le reboisement.', 'Grâce à + noun.', '**Grâce au reboisement, le sol est protégé.**'] },
  ]),

  // ---------- 9. Faune ----------
  L('afr-comparaison-1', 'afr-l6-faune', '9.1', 'Les comparatifs et les superlatifs', 16, ['Grammaire'], [
    '**Comparatifs**: **plus** + adjectif + **que** (supériorité), **moins** + adjectif + **que** (infériorité), **aussi** + adjectif + **que** (égalité): « L’éléphant est **plus lourd que** le buffle. » With nouns: **plus de, moins de, autant de** + nom + **que**: « Il y a **moins d’**éléphants **qu’**avant. »',
    '**Superlatifs**: **le / la / les plus** (ou **moins**) + adjectif (+ **de**): « La Sanaga est **le plus long** fleuve **du** pays. » The article agrees with the noun.',
    '**Irregular forms**: bon → **meilleur** → **le meilleur**; bien → **mieux** → **le mieux**; mauvais → **pire** (or plus mauvais) → **le pire**; petit (importance) → **moindre** → **le moindre**. Never « plus bon » or « plus bien ».',
    'Adverbs compare in the same way: « Il court **plus vite que** moi », « Elle parle **le mieux** de la classe. »',
  ], 'comparaison-fr', 'Bon describes a noun (meilleur); bien describes a verb (mieux).',
  ['« Ce guide connaît la forêt ___ que les autres. »', ['mieux', 'meilleur', 'plus bien', 'plus bon'], 'Connaître bien → mieux.'],
  [['Comparatif', 'A form that compares two things: plus... que, moins... que, aussi... que.'], ['Superlatif', 'A form that singles out the highest or lowest degree: le plus, le moins.'], ['Forme irrégulière', 'An irregular form such as meilleur, mieux or pire.']],
  [
    { q: 'Complete: « Le parc de Waza est ___ (grand) que ce jardin, mais ce jardin est ___ (bien) entretenu. »', steps: ['Grand: plus grand.', 'Bien entretenu: mieux.', '**plus grand, mieux.**'] },
    { q: 'Write a superlative sentence about the mont Cameroun.', steps: ['La plus haute + montagne.', 'Add du pays or d’Afrique de l’Ouest... keep it safe: du pays.', '**Le mont Cameroun est la plus haute montagne du pays.**'] },
  ]),

  L('afr-faune-1', 'afr-l6-faune', '9.2', 'Espèces menacées, parcs nationaux et braconnage', 16, ['Vocabulaire'], [
    'Le Cameroun possède une grande **biodiversité**: forêts, savanes, montagnes, mangroves. Des **parcs nationaux** et **réserves** protègent la **faune** (les animaux) et la **flore** (les plantes): **Waza** (Extrême-Nord, savane: éléphants, girafes, lions), **Lobéké** (Est, forêt: éléphants de forêt, gorilles, chimpanzés), **Korup** (Sud-Ouest, forêt dense), la réserve du **Dja** (Sud et Est, inscrite au patrimoine mondial).',
    'Threats: le **braconnage** (chasse illégale), le **trafic d’ivoire**, la **déforestation**, les **feux de brousse**, l’**agriculture sur brûlis**. Une **espèce menacée** (en voie de disparition) risque de disparaître.',
    'Protection: les **écogardes**, les **lois** sur la faune, la **sensibilisation** des villageois, l’**écotourisme**, les **zones protégées**.',
    '**Activité pratique:** write a 150-word article for the school magazine on « Sauvons nos éléphants », with three comparatives or superlatives.',
  ], 'afr-parcs', 'Faune = animals, flore = plants: say both when you write about an ecosystem.',
  ['Un écogarde est:', ['un agent qui protège la faune dans un parc', 'un braconnier', 'un touriste', 'un chasseur sportif'], 'Wildlife ranger.'],
  [['Faune', 'The animals of a region.'], ['Flore', 'The plants of a region.'], ['Braconnage', 'Illegal hunting.']],
  [
    { q: 'Complete: « Le ___ menace les éléphants parce que les chasseurs illégaux vendent leur ___. »', steps: ['Illegal hunting: braconnage.', 'What is sold from tusks: ivoire.', '**braconnage, ivoire.**'] },
    { q: 'Give one cause and one solution of the disappearance of gorillas.', steps: ['A cause: loss of forest or poaching.', 'A solution: protected areas and rangers.', '**La déforestation détruit leur habitat; il faut créer des zones protégées surveillées par des écogardes.**'] },
  ]),

  // ---------- 10. Santé ----------
  L('afr-imperatif-1', 'afr-l6-sante', '10.1', 'L’impératif et l’expression de l’interdiction', 16, ['Grammaire'], [
    'The **impératif** has three persons: **tu**, **nous**, **vous**, with no subject pronoun: **lave, lavons, lavez**; **finis, finissons, finissez**. Verbs in **-er** lose the -s of « tu »: « **Mange** des fruits », except before **y** and **en**: « Manges-en », « Vas-y ».',
    'Irregular: **être** → sois, soyons, soyez; **avoir** → aie, ayons, ayez; **savoir** → sache, sachons, sachez; **vouloir** → veuillez (politeness).',
    'With pronouns: positive, the pronoun follows with a hyphen: « Lave-**toi** les mains », « Prends-**le** » ; negative, it goes before the verb: « Ne **te** lave pas », « Ne **le** prends pas ».',
    '**Prohibition**: **ne... pas** with the imperative, **il est interdit de** + infinitif, **défense de** (notices), **il ne faut pas** + infinitif: « **Défense de** cracher », « **Il est interdit de** vendre de l’alcool aux mineurs. »',
  ], 'imperatif-fr', 'Positive: verb then pronoun with a hyphen; negative: ne + pronoun + verb + pas.',
  ['L’impératif de « être » avec « vous » est:', ['soyez', 'êtes', 'soyiez', 'serez'], 'Irregular.'],
  [['Impératif', 'The mood of commands and instructions.'], ['Interdiction', 'A prohibition.'], ['Consigne', 'An instruction to follow.']],
  [
    { q: 'Mettez à l’impératif (vous): « vous devez vous laver les mains et vous ne devez pas boire l’eau du puits. »', steps: ['Positive with a reflexive pronoun: lavez-vous.', 'Negative: ne buvez pas.', '**Lavez-vous les mains et ne buvez pas l’eau du puits.**'] },
    { q: 'Write a hospital notice with « il est interdit de » and « défense de ».', steps: ['Two short rules.', 'Formal notice style.', '**Il est interdit de fumer dans l’hôpital. Défense d’entrer sans autorisation.**'] },
  ]),

  L('afr-sante-1', 'afr-l6-sante', '10.2', 'Paludisme, VIH/sida, choléra et prévention', 16, ['Vocabulaire'], [
    'Le **paludisme** est causé par un parasite, le **plasmodium**, transmis par la piqûre de l’**anophèle femelle**. Symptômes: **fièvre**, frissons, maux de tête, vomissements. Prévention: dormir sous une **moustiquaire imprégnée**, assainir l’environnement, se faire **dépister** avant de se soigner.',
    'Le **VIH** (virus de l’immunodéficience humaine) peut conduire au **sida**. Transmission: rapports sexuels non protégés, sang contaminé, de la mère à l’enfant. Prévention: **abstinence**, **fidélité**, **préservatif**, **dépistage**; il ne se transmet pas par une poignée de main ou un repas partagé.',
    'Le **choléra** est une maladie **bactérienne** transmise par l’eau et les aliments **souillés**. Il provoque une **diarrhée** grave et une **déshydratation**. Traitement: **solution de réhydratation orale** et soins; prévention: eau potable, latrines, lavage des mains. La **vaccination** protège contre de nombreuses maladies avant l’infection.',
    '**Activité pratique:** write a health poster of eight instructions in the imperative for a market or a school, with two prohibitions.',
  ], 'avis-sante-fr', 'Separate cause, symptômes, traitement and prévention: questions often test which is which.',
  ['La moustiquaire imprégnée protège contre:', ['le paludisme', 'le choléra', 'le VIH', 'la grippe'], 'It keeps mosquitoes off.'],
  [['Symptôme', 'A sign of illness, such as fever.'], ['Dépistage', 'A test to detect a disease.'], ['Déshydratation', 'A dangerous loss of water from the body.']],
  [
    { q: 'Classez pour le choléra: diarrhée, eau souillée, lavage des mains, déshydratation, latrines.', steps: ['Cause: eau souillée.', 'Symptômes: diarrhée, déshydratation.', '**Prévention: lavage des mains, latrines.**'] },
    { q: 'Corrigez l’idée fausse: « On attrape le VIH en serrant la main d’un malade. »', steps: ['Name the real ways of transmission.', 'Reject the false one.', '**Faux: le VIH ne se transmet pas par une poignée de main, mais par le sang, les rapports non protégés ou de la mère à l’enfant.**'] },
  ]),

  // ---------- 11. Citoyenneté ----------
  L('afr-indefinis-1', 'afr-l6-citoyennete', '11.1', 'Les déterminants indéfinis', 15, ['Grammaire'], [
    '**Chaque** + singular noun: each one separately: « **Chaque** citoyen a des droits. »',
    '**Tout, toute, tous, toutes** + article + noun: the whole or all: « **toute** la population », « **tous** les électeurs », « **toutes** les femmes ». Without an article, **tout** means « any, every »: « **Toute** personne majeure peut voter. »',
    '**Aucun, aucune** (+ ne): none, not any; it stays singular: « **Aucun** candidat **n’**est venu. » **Plusieurs** (plural, invariable), **quelques** (a few), **certains / certaines** (some), **différents, divers** (various).',
    'Opposition between two facts: **mais**, **alors que**, **tandis que**, **par contre**, **en revanche**: « Les hommes sont nombreux à l’Assemblée, **alors que** les femmes y restent minoritaires. »',
  ], 'indefinis-fr', 'Chaque and aucun take a singular noun; plusieurs and quelques a plural noun.',
  ['« ___ électeur doit présenter sa carte. »', ['Chaque', 'Plusieurs', 'Tous', 'Quelques'], 'Chaque + singular.'],
  [['Déterminant indéfini', 'A determiner with a vague quantity or identity: chaque, tout, aucun, plusieurs.'], ['Opposition', 'Contrasting two facts.'], ['Alors que', 'Whereas: joins two contrasting facts.']],
  [
    { q: 'Complete: « ___ (all) les candidats ont fait campagne, mais ___ (none) n’a parlé de l’environnement. »', steps: ['All + les + masculine plural: tous.', 'None: aucun, singular, with ne.', '**Tous, aucun.**'] },
    { q: 'Join with « tandis que »: « Ma sœur vote à Bamenda. Mon frère vote à Douala. »', steps: ['Two parallel contrasting facts.', 'Tandis que + indicatif.', '**Ma sœur vote à Bamenda, tandis que mon frère vote à Douala.**'] },
  ]),

  L('afr-citoyen-1', 'afr-l6-citoyennete', '11.2', 'La Constitution, le vote, l’impôt et la parité', 16, ['Vocabulaire'], [
    'La **Constitution** est la loi fondamentale de l’État; celle du Cameroun date du **18 janvier 1996**. Elle garantit des **droits** (liberté d’expression, de culte, d’association, droit à l’éducation) et fixe des **devoirs**.',
    'Le **vote**: s’**inscrire** sur les listes électorales auprès d’**Elections Cameroon** (ELECAM), recevoir sa **carte d’électeur**, se rendre au **bureau de vote**, voter dans l’**isoloir** et mettre son **bulletin** dans l’**urne**; le vote est **secret**.',
    'Les **devoirs du citoyen**: respecter les lois, payer ses **impôts** (le **civisme fiscal**), défendre la patrie, respecter le bien public. La **parité hommes-femmes** vise une représentation égale des deux sexes dans les institutions et l’égalité des chances.',
    '**Activité pratique:** write a 120-word speech for a school club on « Pourquoi voter ? », with two expressions of opposition and three indefinite determiners.',
  ], 'opposition-fr', 'Name a right and the duty that goes with it: it shows a balanced view of citizenship.',
  ['On met son bulletin de vote dans:', ['l’urne', 'l’isoloir', 'la mairie', 'la boîte aux lettres'], 'The ballot box.'],
  [['Isoloir', 'The booth where a voter chooses in secret.'], ['Civisme fiscal', 'Paying one’s taxes as a civic duty.'], ['Parité', 'Equal representation of women and men.']],
  [
    { q: 'Put in order: voter dans l’isoloir, s’inscrire sur les listes, déposer le bulletin dans l’urne, recevoir la carte d’électeur.', steps: ['First register, then receive the card.', 'Then choose in the booth and drop the ballot.', '**S’inscrire, recevoir la carte, voter dans l’isoloir, déposer le bulletin dans l’urne.**'] },
    { q: 'Write a sentence linking a right and a duty with « mais ».', steps: ['Name a right.', 'Add the duty that balances it.', '**Le citoyen a le droit de s’exprimer librement, mais il doit respecter les autres.**'] },
  ]),

  // ---------- 12. Paix ----------
  L('afr-concession-1', 'afr-l6-paix', '12.1', 'La concession: bien que, malgré, même si', 16, ['Grammaire'], [
    'Concession admits a fact that might have prevented something, but did not. **Bien que** and **quoique** + **subjonctif**: « **Bien qu’**ils **soient** de cultures différentes, ils vivent en paix. »',
    '**Malgré** + **nom**: « **Malgré** leurs différences, ils se respectent. » Never « malgré que » in careful writing.',
    '**Même si** + **indicatif**: « **Même s’**il y a des tensions, le dialogue reste possible. » Across sentences: **pourtant**, **cependant**, **néanmoins**, **toutefois**: « Les deux villages étaient rivaux. **Pourtant**, ils ont signé la paix. »',
    'Subjonctif reminders: que je **sois**, qu’il **ait**, qu’il **fasse**, qu’il **puisse**, qu’il **aille**, qu’il **vienne**, qu’il **prenne**.',
  ], 'concession-fr', 'Bien que → subjonctif; même si → indicatif; malgré → nom.',
  ['« Bien qu’ils ___ en désaccord, ils ont continué à discuter. »', ['soient', 'sont', 'étaient', 'seront'], 'Subjonctif after bien que.'],
  [['Concession', 'Admitting a fact that did not prevent the result.'], ['Bien que', 'Although: followed by the subjonctif.'], ['Malgré', 'Despite: followed by a noun.']],
  [
    { q: 'Rewrite with « malgré »: « Bien qu’il fasse chaud, la foule est venue. »', steps: ['Turn the clause into a noun: la chaleur.', 'Malgré + noun.', '**Malgré la chaleur, la foule est venue.**'] },
    { q: 'Rewrite with « bien que »: « Ils sont pauvres, pourtant ils aident leurs voisins. »', steps: ['Bien que + subjonctif: qu’ils soient.', 'Keep the main clause.', '**Bien qu’ils soient pauvres, ils aident leurs voisins.**'] },
  ]),

  L('afr-paix-1', 'afr-l6-paix', '12.2', 'Unité nationale, dialogue et résolution des conflits', 16, ['Vocabulaire'], [
    'Le Cameroun compte plus de deux cents **ethnies** et deux langues officielles, le **français** et l’**anglais**. L’**unité nationale** et le **vivre-ensemble** reposent sur le **respect** des différences, la **tolérance** et le **dialogue**.',
    'Le **dialogue interculturel** permet aux personnes de cultures différentes de se comprendre. Le **bilinguisme** rapproche les citoyens des deux sous-systèmes.',
    'Résoudre un conflit **pacifiquement**: **écouter** les deux parties, **identifier** le problème, chercher un **compromis**, faire appel à un **médiateur**, signer un **accord**, se **réconcilier**. Le contraire: la **violence**, la **vengeance**, l’**exclusion**.',
    '**Activité pratique:** a quarrel has broken out between two student groups. Write the 120-word speech of a mediator calling for peace, with two concessive clauses.',
  ], 'afr-paix', 'In a peace speech, always concede the other side’s feelings before calling for unity.',
  ['Les deux langues officielles du Cameroun sont:', ['le français et l’anglais', 'le français et l’allemand', 'l’anglais et l’espagnol', 'le pidgin et le français'], 'Official bilingualism.'],
  [['Unité nationale', 'The unity of all citizens within one nation.'], ['Médiateur', 'A neutral person who helps settle a conflict.'], ['Compromis', 'An agreement in which each side gives something up.']],
  [
    { q: 'Mettez dans l’ordre les étapes: se réconcilier, écouter les deux parties, chercher un compromis, identifier le problème.', steps: ['Listen first, then identify.', 'Then a compromise, finally reconciliation.', '**Écouter les deux parties, identifier le problème, chercher un compromis, se réconcilier.**'] },
    { q: 'Write a concessive sentence about national unity.', steps: ['Concede a difference.', 'Affirm unity.', '**Bien que nous parlions des langues différentes, nous formons une seule nation.**'] },
  ]),

  // ---------- 13. Délinquance ----------
  L('afr-rapporte-1', 'afr-l6-delinquance', '13.1', 'Le discours rapporté au présent', 16, ['Grammaire'], [
    'In **discours indirect**, the words are reported without quotation marks, after a reporting verb (dire, affirmer, déclarer, demander, ordonner). When the reporting verb is in the **present**, the **tenses do not change**; only the **persons** and **possessives** adapt.',
    '**Statements**: « Je **suis** innocent », dit-il → Il dit **qu’il est** innocent. Repeat « que » before each clause.',
    '**Questions**: yes/no → **si**: « Viens-tu ? » → Elle demande **si** je viens. Questions with **que / qu’est-ce que** → **ce que**; **qu’est-ce qui** → **ce qui**; other question words stay (où, quand, pourquoi, comment, qui): « Pourquoi mens-tu ? » → Il demande **pourquoi** je mens. No inversion and no question mark.',
    '**Commands** (impératif) → **de + infinitif**: « Rentrez chez vous ! » → Le policier **leur ordonne de** rentrer chez eux. Negative: « Ne fume pas ! » → Il me dit **de ne pas** fumer.',
  ], 'discours-fr', 'Present reporting verb: change the persons, never the tenses.',
  ['« Où habites-tu ? » demande le juge. Au discours indirect:', ['Le juge demande où j’habite.', 'Le juge demande où habites-tu.', 'Le juge demande si j’habite.', 'Le juge demande ce que j’habite.'], 'Où stays; normal word order.'],
  [['Discours direct', 'Words reported exactly, in quotation marks.'], ['Discours indirect', 'Words reported in a subordinate clause, without quotation marks.'], ['Verbe introducteur', 'The reporting verb, such as dire or demander.']],
  [
    { q: 'Au discours indirect: Le policier dit au jeune: « Montre-moi ta carte et ne bouge pas. »', steps: ['Commands → de + infinitif.', 'Ta → sa; moi → lui (the policeman).', '**Le policier dit au jeune de lui montrer sa carte et de ne pas bouger.**'] },
    { q: 'Au discours indirect: Elle demande: « Qu’est-ce qui t’est arrivé ? »', steps: ['Qu’est-ce qui → ce qui.', 'T’ → m’ (if she asks me).', '**Elle me demande ce qui m’est arrivé.**'] },
  ]),

  L('afr-cyber-1', 'afr-l6-delinquance', '13.2', 'Drogues, arnaques en ligne, harcèlement et sanctions', 16, ['Vocabulaire'], [
    'La **délinquance juvénile** désigne les infractions commises par des **mineurs**: vols, violences, **vandalisme**, **consommation de drogues** (cannabis, tramadol détourné, alcool) en milieu scolaire.',
    'La **cybercriminalité**: les **arnaques en ligne** (escroqueries, broutage, « feymania »), le **piratage** de comptes, l’**usurpation d’identité**, le **cyberharcèlement**, la diffusion d’images sans consentement. La loi de 2010 sur la **cybersécurité et la cybercriminalité** punit ces actes.',
    'Les **sanctions**: avertissement, exclusion temporaire, amende, peine de prison; pour les mineurs, des mesures **éducatives** et de **réinsertion**. La **prévention**: parler aux parents et enseignants, signaler, protéger ses mots de passe.',
    '**Activité pratique:** report in 120 words, in indirect speech with a present reporting verb, what a student says during an awareness talk about online scams.',
  ], 'afr-cyber', 'Name the act, its effect on the victim, and the sanction: three points for any question on crime.',
  ['Se faire passer pour quelqu’un d’autre en ligne, c’est:', ['l’usurpation d’identité', 'le recyclage', 'le dépistage', 'le civisme'], 'Identity theft.'],
  [['Mineur', 'A person under the age of legal adulthood.'], ['Cyberharcèlement', 'Harassment through digital media.'], ['Réinsertion', 'Helping an offender return to normal life.']],
  [
    { q: 'Complete: « Le ___ a volé le mot de passe de mon compte; c’est un acte de ___. »', steps: ['The person who breaks into accounts: pirate.', 'The crime: piratage (cybercriminalité).', '**pirate, piratage.**'] },
    { q: 'Give two pieces of advice against online scams in the imperative.', steps: ['One about secrecy.', 'One about checking.', '**Ne donnez jamais votre code secret. Vérifiez l’identité de la personne avant d’envoyer de l’argent.**'] },
  ]),

  // ---------- 14. Essai ----------
  L('afr-essai-1', 'afr-l6-essai', '14.1', 'Organiser un essai argumentatif', 18, ['Rédaction'], [
    'An **essai argumentatif** defends a point of view with reasons. The **introduction** has three parts: an **amorce** (a general remark or a fact that leads to the subject), the **sujet** reworded or the **problématique** (the question raised), and the **annonce du plan**.',
    'The **développement** for a discussion: a first part with the **arguments for**, a second part with the **arguments against** (or a nuance), each argument in its own paragraph with an **exemple** precise and local where possible.',
    'The **conclusion** sums up (**bilan**), gives your **opinion** clearly, and may open (**ouverture**) onto a wider question.',
    'Write in **paragraphs** separated by a blank line or an indent, with connectors between them. Avoid « je » too often: use « on », impersonal turns (« il semble que », « il est évident que »).',
  ], 'afr-essai-plan', 'Write your plan in note form first: problématique, two parts, two or three arguments each.',
  ['L’annonce du plan se trouve dans:', ['l’introduction', 'la conclusion', 'le deuxième argument', 'le titre'], 'It tells the reader the route.'],
  [['Amorce', 'The opening sentence that leads into the subject.'], ['Problématique', 'The question that the essay will answer.'], ['Ouverture', 'A wider question at the end of the conclusion.']],
  [
    { q: 'Write a problématique for « Le téléphone portable à l’école ».', steps: ['Turn the subject into a debatable question.', 'Keep it balanced.', '**Faut-il autoriser le téléphone portable à l’école, ou est-il plus nuisible qu’utile aux élèves ?**'] },
    { q: 'Write an annonce du plan for that subject.', steps: ['Announce the two parts.', 'Use nous verrons / ensuite.', '**Nous verrons d’abord les avantages du téléphone à l’école, puis ses dangers.**'] },
  ]),

  L('afr-connecteurs-1', 'afr-l6-essai', '14.2', 'Les connecteurs logiques', 16, ['Rédaction'], [
    '**Addition**: de plus, en outre, par ailleurs, également. **Opposition**: mais, cependant, pourtant, par contre, en revanche, néanmoins. **Cause**: car, en effet, parce que, puisque. **Conséquence**: donc, ainsi, c’est pourquoi, par conséquent.',
    '**Illustration**: par exemple, notamment, ainsi. **Ordre**: d’abord, ensuite, puis, enfin. **Conclusion**: en conclusion, en somme, en définitive, bref.',
    'Choose the connector by the **logical link**, not by habit: « cependant » between two ideas that agree is a mistake. Punctuation: a comma usually follows a connector at the start of a sentence: « **Cependant**, ... ».',
    '**Activité pratique:** rewrite a short essay paragraph that has no connectors, adding five of them, then compare with a partner.',
  ], 'connecteurs-fr', 'Read the two sentences and name the link aloud (addition? opposition? result?) before choosing the word.',
  ['« Il a travaillé dur; ___, il a réussi. »', ['par conséquent', 'cependant', 'en revanche', 'pourtant'], 'A result.'],
  [['Connecteur logique', 'A word that shows the link between ideas.'], ['Conséquence', 'A result of a cause.'], ['Illustration', 'An example that supports an idea.']],
  [
    { q: 'Complete: « Internet facilite les études. ___, il permet de trouver des cours en ligne. ___, il peut distraire les élèves. »', steps: ['The second sentence explains the first: en effet.', 'The third contrasts: cependant.', '**En effet, Cependant.**'] },
    { q: 'Join with a connector of consequence: « Les élèves lisent peu. Leur orthographe est faible. »', steps: ['The second is the result.', 'Use c’est pourquoi or donc.', '**Les élèves lisent peu; c’est pourquoi leur orthographe est faible.**'] },
  ]),

  // ---------- 15. TIC ----------
  L('afr-hypothese-1', 'afr-l6-tic', '15.1', 'L’hypothèse avec si', 16, ['Grammaire'], [
    '**Si + présent** → **futur** (or présent, or impératif): a real possibility: « **Si** tu **sauvegardes** ton travail, tu ne le **perdras** pas. » « **Si** le réseau **coupe**, **redémarre** le modem. »',
    '**Si + imparfait** → **conditionnel présent**: an unreal or unlikely situation now or in the future: « **Si** j’**avais** un ordinateur, je **ferais** mes recherches en ligne. »',
    '**Si + plus-que-parfait** → **conditionnel passé** (Upper Sixth): an unreal past: « **Si** j’**avais su**, je **serais venu**. »',
    'Golden rule: **never** a futur or a conditionnel right after **si** meaning « if »: not « si j’aurais ». « Si » becomes « s’ » only before **il** and **ils**: « s’il », but « si elle ».',
  ], 'hypothese-fr', 'Look at the verb after si: présent → futur; imparfait → conditionnel.',
  ['« Si nous ___ plus de temps, nous apprendrions à programmer. »', ['avions', 'aurions', 'avons', 'aurons'], 'Si + imparfait.'],
  [['Hypothèse', 'A supposition introduced by si.'], ['Conditionnel présent', 'The mood of the result of an unreal present condition.'], ['Système hypothétique', 'The pattern of tenses in a sentence with si.']],
  [
    { q: 'Complete: « Si l’école (avoir) Internet, les élèves (pouvoir) suivre des cours en ligne. »', steps: ['Unreal present: si + imparfait.', 'Result: conditionnel présent.', '**avait, pourraient.**'] },
    { q: 'Correct: « Si j’aurai un smartphone, je téléchargerai l’application. »', steps: ['No futur after si.', 'Real possibility: si + présent, futur.', '**Si j’ai un smartphone, je téléchargerai l’application.**'] },
  ]),

  L('afr-tic-1', 'afr-l6-tic', '15.2', 'Internet, réseaux sociaux et intelligence artificielle', 16, ['Vocabulaire'], [
    'Le matériel: l’**ordinateur** (portable ou de bureau), le **smartphone**, la **tablette**, l’**écran**, le **clavier**, la **souris**, l’**imprimante**, le **modem**. Les logiciels: le **système d’exploitation**, le **navigateur**, le **traitement de texte**, le **tableur**, les **applications**.',
    'Internet: se **connecter**, **naviguer**, **télécharger**, **envoyer un courriel** (un mail), **partager**, **publier**, un **site web**, un **moteur de recherche**, la **connexion**, les **données mobiles**.',
    'Les **réseaux sociaux** permettent de communiquer et de partager des contenus; l’**intelligence artificielle** (IA) désigne des programmes capables d’apprendre et d’imiter certaines tâches humaines (traduire, reconnaître une image, rédiger un texte).',
    '**Activité pratique:** write 100 words on « Si j’avais un ordinateur portable... », using the hypothesis with si and eight words from this lesson.',
  ], 'afr-tic-mots', 'Group ICT words into matériel, logiciels and actions to remember them.',
  ['Un moteur de recherche sert à:', ['trouver des informations sur Internet', 'imprimer', 'taper du texte', 'charger un téléphone'], 'Such as a search engine.'],
  [['Logiciel', 'Software: a computer program.'], ['Navigateur', 'A browser for viewing web pages.'], ['Intelligence artificielle', 'Programs that imitate some human abilities.']],
  [
    { q: 'Classez: clavier, navigateur, télécharger, tableur, imprimante, partager.', steps: ['Matériel: clavier, imprimante.', 'Logiciels: navigateur, tableur.', '**Actions: télécharger, partager.**'] },
    { q: 'Write one advantage and one danger of AI in one sentence with « mais ».', steps: ['An advantage: speed or translation.', 'A danger: false information or cheating.', '**L’IA peut traduire un texte en quelques secondes, mais elle peut aussi produire de fausses informations.**'] },
  ]),

  // ---------- 16. Médias ----------
  L('afr-but-1', 'afr-l6-medias', '16.1', 'L’expression du but', 15, ['Grammaire'], [
    'Purpose with the **same subject**: **pour**, **afin de**, **dans le but de** + **infinitif**: « Je vérifie la source **pour** éviter les fausses nouvelles. »',
    'Purpose with a **different subject**: **pour que**, **afin que**, **de sorte que** + **subjonctif**: « Le professeur explique **pour que** les élèves **comprennent**. »',
    'Negative purpose: **pour ne pas** + infinitif, **de peur de** + infinitif, **de peur que** + subjonctif (with ne explétif in formal style): « Je protège mon compte **pour ne pas** être piraté. »',
    'Irregular subjunctives often used here: que je **fasse**, qu’il **puisse**, qu’ils **sachent**, qu’elle **comprenne**, qu’ils **voient**.',
  ], 'but-fr', 'Same subject → pour + infinitif; different subject → pour que + subjonctif.',
  ['« Je parle fort ___ tout le monde m’entende. »', ['pour que', 'pour', 'afin de', 'parce que'], 'Different subject.'],
  [['But', 'The purpose of an action.'], ['Pour que', 'So that: followed by the subjonctif.'], ['Afin de', 'In order to: followed by the infinitive.']],
  [
    { q: 'Join: « La radio diffuse des messages. Les parents doivent être informés. »', steps: ['Different subjects: pour que + subjonctif.', 'Soient informés.', '**La radio diffuse des messages pour que les parents soient informés.**'] },
    { q: 'Rewrite with « afin de »: « Elle limite son temps d’écran parce qu’elle veut mieux dormir. »', steps: ['Same subject: afin de + infinitif.', 'Remove the clause.', '**Elle limite son temps d’écran afin de mieux dormir.**'] },
  ]),

  L('afr-medias-1', 'afr-l6-medias', '16.2', 'Fausses informations, dépendance aux écrans et vie privée', 16, ['Vocabulaire'], [
    'Une **infox** (fausse information, fake news) est une information fausse présentée comme vraie, souvent pour **manipuler** ou gagner de l’argent. Pour la repérer: vérifier la **source**, la **date**, l’**auteur**, comparer avec d’autres **médias fiables**, se méfier des titres **sensationnels**.',
    'La **dépendance aux écrans**: passer trop de temps sur le téléphone, les jeux ou les réseaux, au détriment du sommeil, des études et des relations. Solutions: fixer des **limites**, éteindre les **notifications**, faire des activités hors ligne.',
    'La **vie privée** en ligne: les **paramètres de confidentialité**, les **données personnelles**, l’**empreinte numérique**; ne pas publier son adresse, ses codes, des photos d’autrui sans **consentement**.',
    '**Activité pratique:** write a 120-word awareness leaflet for Form 1 students with five pieces of advice, using three expressions of purpose.',
  ], 'infox-fr', 'Before you share: source, date, author, other sources. Four checks, ten seconds.',
  ['Pour vérifier une information, il faut d’abord regarder:', ['sa source', 'sa couleur', 'sa longueur', 'son nombre de partages'], 'Who published it?'],
  [['Infox', 'A false piece of news presented as true.'], ['Empreinte numérique', 'The trail of data a person leaves online.'], ['Consentement', 'Permission given freely.']],
  [
    { q: 'A message says: « Partagez vite! Les examens sont annulés! » Give two reasons to doubt it.', steps: ['It urges fast sharing.', 'It names no official source.', '**Il pousse à partager vite et ne cite aucune source officielle comme le ministère ou le GCE Board.**'] },
    { q: 'Write one piece of advice about privacy with « pour que ».', steps: ['Name the action.', 'Add the purpose with a different subject.', '**Réglez vos paramètres de confidentialité pour que les inconnus ne voient pas vos photos.**'] },
  ]),

  // ---------- 17. Révisions ----------
  L('afr-resume-1', 'afr-l6-examens', '17.1', 'Premiers pas dans le résumé de texte', 17, ['Résumé'], [
    'A **résumé** restates the essential ideas of a text in your own words, in a fixed number of words, keeping the **order** and the **point of view** of the author.',
    'Method: read the text twice; find the **thème** and the **idée générale**; in each paragraph, underline the **idée essentielle**; cross out **exemples**, chiffres, citations and répétitions; then rewrite the ideas briefly, linking them with **connecteurs**.',
    'Do not add your **opinion**, do not copy whole sentences, do not use « l’auteur dit que ». Count the words as the paper or your teacher instructs (rules differ for elided words such as « l’ »), and write the total at the end if asked.',
    'Promotion examinations (Semaines 23 à 28) test written expression and the résumé: practise one short résumé each week.',
  ], 'afr-resume-etapes', 'Underline one idea per paragraph before writing anything.',
  ['Dans un résumé, on garde:', ['les idées essentielles dans l’ordre du texte', 'tous les exemples', 'ses propres opinions', 'les citations'], 'Essentials only.'],
  [['Résumé', 'A shortened version of a text giving its essential ideas.'], ['Idée essentielle', 'The main idea of a paragraph.'], ['Contraction de texte', 'Another name for the résumé.']],
  [
    { q: 'Find the essential idea: « À Douala, à Yaoundé et à Bafoussam, les embouteillages font perdre des heures aux travailleurs chaque jour. »', steps: ['The town names are examples.', 'The point is the time lost in traffic.', '**Dans les grandes villes, les embouteillages font perdre beaucoup de temps aux travailleurs.**'] },
    { q: 'Shorten: « les mangues, les avocats, les ananas et les bananes ».', steps: ['Find a general word.', 'Use it in place of the list.', '**les fruits.**'] },
  ]),

  L('afr-l6-revision', 'afr-l6-examens', '17.2', 'Révisions générales et les épreuves de l’A Level', 16, ['Examen'], [
    'In the 2026 session, GCE A Level French (0745) had three papers: **Paper 1**, multiple choice, **1 h 30** (mercredi 10 juin, matin); **Paper 2**, **3 heures** (mercredi 10 juin, après-midi); **Paper 3**, **3 heures** (jeudi 11 juin, matin). Check the timetable for your year.',
    'The scheme prepares Paper 1 with timed drills on **orthographe**, **grammaire**, **expressions idiomatiques** and **phonétique**, and Paper 2 with a **dissertation** (Section A) and **opérations sur un texte** and guided résumés (Section B). Read every paper’s instructions on the day.',
    'Revise by **themes** (the five domains of life) and by **points of grammar**: tenses of the past, passive, cause, concession, subjunctive, hypothesis, reported speech.',
    'Make a **fiche d’erreurs**: each mistake from your copies, the correction and the rule; reread it before each test.',
  ], 'afr-gce-papers', 'A fiche d’erreurs turns every corrected copy into revision.',
  ['En 2026, l’épreuve 1 de français A Level a eu lieu le:', ['mercredi 10 juin', 'jeudi 11 juin', 'vendredi 5 juin', 'mardi 2 juin'], 'Morning, 1 h 30.'],
  [['Épreuve', 'An examination paper.'], ['QCM', 'Questions à choix multiples: multiple-choice questions.'], ['Fiche d’erreurs', 'A personal list of mistakes with corrections and rules.']],
  [
    { q: 'Plan a week of revision for French before the promotion exams.', steps: ['One grammar point and one theme per day.', 'One timed exercise and one résumé in the week.', '**Lundi: le passif et l’environnement; mardi: la concession et la paix; mercredi: un résumé chronométré; jeudi: l’hypothèse et les TIC; vendredi: correction et fiche d’erreurs.**'] },
    { q: 'Write two lines of a fiche d’erreurs for « Si j’aurais su » and « malgré que ».', steps: ['Give the correct form and the rule.', 'Keep it short.', '**« Si j’avais su » (jamais de conditionnel après si). « Malgré + nom » ou « bien que + subjonctif ».**'] },
  ]),
];
