// French lessons for Form 5, terms 2 and 3: environment and health,
// citizenship, the media, and GCE Ordinary Level preparation (Paper 1
// multiple choice, the mock examination and Paper 2). Explanations are in
// English for the learner; every example, word list and model text is in
// French. Original text written for this app.

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

export const LESSONS_5B = [
  // ---------- Pollution et climat ----------
  L('fr-passive2-5', 'fr-f5-climat', '8.1', 'La voix passive à tous les temps', 15, ['Grammaire'], [
    'In the **passive**, the direct object of the active verb becomes the subject, and the verb becomes **être + past participle**. The key rule: **être takes the tense of the active verb**, and the participle agrees with the new subject.\n- présent: On **abat** les arbres. → Les arbres **sont abattus**.\n- passé composé: On **a abattu** les arbres. → Les arbres **ont été abattus**.\n- imparfait: On **abattait** les arbres. → Les arbres **étaient abattus**.\n- plus-que-parfait: On **avait abattu** les arbres. → Les arbres **avaient été abattus**.\n- futur simple: On **abattra** les arbres. → Les arbres **seront abattus**.\n- conditionnel présent: On **abattrait** les arbres. → Les arbres **seraient abattus**.\n- after a modal: On **doit** protéger la forêt. → La forêt **doit être protégée**.',
    'The **agent** (who does the action) is introduced by **par**: « La rivière a été polluée **par** l’usine. » With verbs of feeling or state it is often **de**: « Ce maire est respecté **de** tous. » « La route était couverte **de** boue. » When the active subject is « on » or unknown, the passive has **no agent**: « On a interdit les sachets plastiques. » → « Les sachets plastiques **ont été interdits**. »',
    'Only verbs with a **direct object** can become passive: « On parle de pollution » cannot. French often prefers « on » + active, or the **pronominal passive** for general truths: « Le plastique **se recycle** difficilement. » « Ces déchets **se trient** à la source. »',
  ], 'passif-temps-fr', 'Find the tense of the active verb, then put « être » in that same tense.',
  ['« Les déchets seront triés par les élèves. » The active sentence is:', ['Les élèves trieront les déchets.', 'Les élèves trient les déchets.', 'Les élèves ont trié les déchets.', 'Les déchets trieront les élèves.'], '« seront triés » is the futur: trieront.'],
  [['Voix passive', 'The construction être + past participle, where the subject undergoes the action.'], ['Complément d’agent', 'The doer of the action in a passive sentence, after par or de.'], ['Passif pronominal', 'A passive meaning with a reflexive verb: « Le verre se recycle. »']],
  [
    { q: 'Mettez à la voix passive : « Les inondations avaient détruit trois ponts. »', steps: ['« avaient détruit » is the plus-que-parfait, so « être » goes into the plus-que-parfait: **avaient été**.', 'The participle agrees with « trois ponts » (masculine plural): **détruits**.', '**« Trois ponts avaient été détruits par les inondations. »**'] },
    { q: 'Mettez à la voix passive : « La commune devrait installer des poubelles. »', steps: ['After a modal, « être » stays in the infinitive: **devraient être installées**. The modal agrees with the new plural subject.', '**« Des poubelles devraient être installées par la commune. »**'] },
  ]),

  L('fr-ecocitoyen-5', 'fr-f5-climat', '8.2', 'L’écocitoyenneté : proposer des solutions', 14, ['Lexique', 'Expression écrite'], [
    'Vocabulary of the climate and pollution:\n- **le réchauffement climatique**, le changement climatique, **les gaz à effet de serre**, le dioxyde de carbone (CO₂)\n- **la déforestation**, les feux de brousse, la désertification, la sécheresse, les inondations\n- la pollution de l’air, de l’eau et du sol, les fumées, les eaux usées, **les déchets plastiques**, les emballages\n- the solutions: **le reboisement**, le tri sélectif, **le recyclage**, le compostage, les énergies renouvelables (solaire, éolienne, hydraulique), les économies d’énergie.',
    'An **écocitoyen** is a citizen who acts responsibly towards the environment: they sort their waste, save water and electricity, plant trees, use biodegradable bags and encourage others to do the same. In Cameroon, thin non-biodegradable plastic bags have been banned since 2014, but they are still found in many markets.',
    'To **propose solutions** and argue for them:\n- « **Il faut que** chaque famille **trie** ses déchets. » (+ subjonctif)\n- « Nous **devrions** utiliser des sacs en tissu. » « **Il serait souhaitable de** créer des espaces verts. » (conditionnel)\n- « **Je propose que** la mairie **installe** des points de collecte. » (+ subjonctif)\n- « **Si** chacun **plante** un arbre, notre ville **sera** plus fraîche. » (si + présent → futur)',
  ], 'passif-temps-fr', 'A proposal sounds polite with the conditionnel: « nous devrions », « il serait souhaitable ».',
  ['« Le reboisement » helps to fight:', ['la déforestation', 'le recyclage', 'les énergies renouvelables', 'le tri sélectif'], 'Planting trees replaces those cut down.'],
  [['Écocitoyen', 'A citizen who behaves responsibly towards the environment.'], ['Le tri sélectif', 'Sorting waste by type so it can be recycled.'], ['Les énergies renouvelables', 'Energy from sources that do not run out: sun, wind, water.'], ['Les gaz à effet de serre', 'Gases that trap heat in the atmosphere.']],
  [
    { q: 'Write a paragraph of three sentences proposing solutions to plastic pollution in your town.', steps: ['State the problem, then two proposals with different structures.', '**« Les sachets plastiques bouchent les caniveaux et provoquent des inondations. Il faut que les commerçants proposent des sacs en papier ou en tissu. De plus, la mairie devrait organiser le tri et le recyclage des bouteilles. »**'] },
    { q: 'Complete with the subjunctive: « Je propose que nous (faire) une journée de nettoyage et que chaque élève (venir) avec un balai. »', steps: ['« faire » → que nous **fassions**; « venir » → que chaque élève **vienne**.', '**« Je propose que nous fassions une journée de nettoyage et que chaque élève vienne avec un balai. »**'] },
  ]),

  // ---------- Protéger la faune ----------
  L('fr-signaler-5', 'fr-f5-biodiversite', '9.1', 'Protéger les habitats et signaler les infractions', 14, ['Lexique', 'Expression écrite'], [
    'Natural habitats (les habitats naturels): la forêt dense, la savane, **la mangrove**, les zones humides, les cours d’eau, la montagne. Cameroon protects many of them in **aires protégées**: le parc national de Korup, de Waza, de Campo-Ma’an, de la Bénoué, la réserve de faune du Dja (inscrite au patrimoine mondial de l’UNESCO). Endangered species: l’éléphant, le gorille, le chimpanzé, **le pangolin**, le drill, la tortue marine, le lamantin.',
    'What threatens them: **le braconnage** (poaching), le trafic d’ivoire et d’écailles, la vente de viande de brousse d’espèces protégées, l’exploitation forestière illégale, les feux de brousse, l’orpaillage illégal (illegal gold mining). Wildlife is the responsibility of the Ministry of Forests and Wildlife (MINFOF), whose agents and **écogardes** patrol the parks.',
    'To **signaler** (report) an offence, say clearly **quoi, où, quand, qui et comment**:\n- « Je voudrais **signaler** une activité illégale. »\n- « **J’ai constaté que** des braconniers vendent des pangolins au marché, chaque samedi matin. »\n- « **Il s’agit de**… » « Les faits se sont produits le… »\nAddress the report to the forestry post, the gendarmerie or the police, and never put yourself in danger. Comparatives make an argument stronger: « Le pangolin est **le mammifère le plus braconné** du monde. » « Un éléphant vivant rapporte **plus que** son ivoire, grâce au tourisme. »',
  ], 'signalement-fr', 'A good report answers: quoi, où, quand, qui, comment.',
  ['To report poaching near a national park, you should inform:', ['les écogardes ou le poste forestier', 'the poachers themselves', 'a football coach', 'nobody'], 'The MINFOF agents are in charge of wildlife.'],
  [['Le braconnage', 'Illegal hunting.'], ['Une aire protégée', 'A protected area such as a national park or a reserve.'], ['Signaler', 'To report something to the authorities.'], ['Un écogarde', 'A ranger who protects wildlife in a park.']],
  [
    { q: 'Write a short report (4 sentences) to the chef de poste forestier about trees being cut illegally near your village.', steps: ['Greeting, the facts (quoi, où, quand), a request, a closing.', '**« Monsieur le Chef de poste, je voudrais vous signaler une coupe illégale de bois. Depuis lundi, des hommes abattent des arbres près de la rivière, à deux kilomètres du village de Bipindi. Ils transportent le bois la nuit dans un camion bleu. Je vous prie d’intervenir rapidement. »**'] },
    { q: 'Complete with mieux, meilleur or pire: « Protéger la forêt est la ___ solution. La situation est ___ qu’avant. Nous devons ___ informer les villageois. »', steps: ['« solution » is a noun: adjective **meilleure**.', 'Worse (adjective): **pire**.', 'With the verb « informer »: adverb **mieux**.', '**« Protéger la forêt est la meilleure solution. La situation est pire qu’avant. Nous devons mieux informer les villageois. »**'] },
  ]),

  // ---------- Santé et assainissement ----------
  L('fr-assainissement-5', 'fr-f5-sante', '10.1', 'La santé publique : assainissement et prévention', 14, ['Lexique', 'Expression écrite'], [
    'Vocabulary of community health:\n- **l’hygiène**, **l’assainissement** (sanitation), la salubrité, l’insalubrité\n- l’eau potable, un puits, **un forage**, les latrines, les eaux usées, **les caniveaux** (gutters), le ramassage des ordures\n- une épidémie, **le paludisme** (spread by the anopheles mosquito), **le choléra** (spread by dirty water and food), la fièvre typhoïde\n- la prévention, **la vaccination**, le carnet de vaccination, une moustiquaire imprégnée, le lavage des mains au savon, le centre de santé.',
    'A public notice (**un avis** or **un communiqué**) gives clear instructions:\n- a title in capitals: AVIS À LA POPULATION\n- who issues it (le chef de quartier, la mairie, le centre de santé) and to whom\n- the message: the danger and the date\n- **the instructions** in the impératif, one per line\n- the **prohibitions**: « Il est strictement interdit de… », « Défense de… »\n- the place, the date and the signature.',
    'With pronouns, the **affirmative imperative** puts the pronoun after the verb with a hyphen: « Lavez-**vous** les mains. » « Faites-**vous** vacciner. » « Couvrez-**les**. » In the **negative**, the pronoun goes back before the verb: « Ne **la** buvez pas. » « Ne **les** laissez pas ouverts. » « Ne **vous** baignez pas dans cette eau. »',
  ], 'avis-sante-fr', 'Affirmative: « Couvrez-les ». Negative: « Ne les couvrez pas ».',
  ['The negative of « Buvez-la » is:', ['Ne la buvez pas.', 'Ne buvez-la pas.', 'Buvez-la pas.', 'Ne pas la buvez.'], 'In the negative the pronoun returns before the verb.'],
  [['L’assainissement', 'Sanitation: clean water, toilets, drainage and waste removal.'], ['Un forage', 'A borehole that provides drinking water.'], ['Un avis', 'A public notice that informs and instructs.'], ['Une épidémie', 'The rapid spread of a disease in a community.']],
  [
    { q: 'Write a short notice from the health centre of Mokolo announcing a cholera risk.', steps: ['Title, issuer, danger, three instructions, one prohibition, place and date.', '**« AVIS À LA POPULATION. Le centre de santé de Mokolo informe la population qu’un cas de choléra a été signalé. Faites bouillir l’eau avant de la boire. Lavez-vous les mains au savon. Rendez-vous au centre de santé dès les premiers signes. Il est strictement interdit de jeter des ordures dans le marigot. Mokolo, le 3 février 2026. Le Chef de centre. »**'] },
    { q: 'Rewrite with a pronoun, then in the negative: « Videz les seaux d’eau stagnante. »', steps: ['Affirmative: **« Videz-les. »**', 'Negative: **« Ne les videz pas. »** (The pronoun returns before the verb.)'] },
  ]),

  // ---------- Devoirs civiques ----------
  L('fr-etatcivil-5', 'fr-f5-civisme', '11.1', 'L’état civil, le vote et les droits de l’homme', 15, ['Lexique', 'Civisme'], [
    '**L’état civil** records the important events of a person’s life. The documents are issued by the **centre d’état civil**, usually at the town hall (la mairie):\n- **l’acte de naissance** (birth certificate): the birth must be declared within the time fixed by law; without it, a child cannot sit official examinations\n- l’acte de mariage, l’acte de décès\n- other documents: **la carte nationale d’identité** (CNI), issued by the national security services, le passeport, le certificat de nationalité, la carte d’électeur.',
    'Voting: in Cameroon, **ELECAM** (Elections Cameroon) organises the elections and keeps the electoral register. A citizen aged at least **20 years** may register: s’inscrire sur **les listes électorales**. Election words: le scrutin, un bureau de vote, l’isoloir (the voting booth), l’urne (the ballot box), un bulletin de vote, le dépouillement (the counting), un candidat, l’abstention. Constitutional duties: respecter la loi, payer l’impôt, défendre la patrie, voter, protéger les biens publics. **La parité** means equal representation of women and men.',
    'Human rights: **la Déclaration universelle des droits de l’homme** (1948) states that all human beings are born free and equal in dignity and rights; Cameroon has a **Commission des droits de l’homme**. Indefinite pronouns are frequent in civic texts: « **Nul** n’est censé ignorer la loi. » (nobody is supposed not to know the law; « nul » takes « ne » without « pas ») « **Chacun** a droit à l’éducation. » « **Personne** ne peut être arrêté sans raison. » « **Tout** citoyen a le devoir de voter. »',
  ], 'etat-civil-fr', '« Nul » and « personne », as subjects, take « ne » but never « pas ».',
  ['In Cameroon, the electoral register is kept by:', ['ELECAM', 'the CONAC', 'the BEAC', 'the MINFOF'], 'Elections Cameroon organises elections and keeps the lists.'],
  [['L’état civil', 'The official record of births, marriages and deaths.'], ['Les listes électorales', 'The register of citizens allowed to vote.'], ['L’isoloir', 'The booth where a voter chooses in secret.'], ['La parité', 'Equal representation of women and men.']],
  [
    { q: 'Explain in French, in three steps, how a young citizen can vote for the first time.', steps: ['Documents, registration, voting.', '**« D’abord, il obtient sa carte nationale d’identité. Ensuite, il s’inscrit sur les listes électorales auprès d’ELECAM et reçoit sa carte d’électeur. Enfin, le jour du scrutin, il passe dans l’isoloir et dépose son bulletin dans l’urne. »**'] },
    { q: 'Correct the errors: « Personne n’est pas au-dessus de la loi. Nul ne peuvent voter deux fois. »', steps: ['« Personne ne » has no « pas »: **« Personne n’est au-dessus de la loi. »**', '« Nul » is singular: **« Nul ne peut voter deux fois. »**'] },
  ]),

  // ---------- Intégrité et transparence ----------
  L('fr-corruption-5', 'fr-f5-integrite', '12.1', 'Dire non à la corruption', 14, ['Lexique', 'Civisme'], [
    'Vocabulary of corruption:\n- **la corruption**, corrompre, le corrupteur (who gives), le corrompu (who receives)\n- **un pot-de-vin** (a bribe), en camfranglais « le gombo »\n- **le détournement de fonds publics** (embezzlement), la fraude, le favoritisme, **le népotisme** (favouring relatives), le trafic d’influence, l’impunité.\nIts opposite: **l’intégrité**, la probité, l’honnêteté, **la transparence**, la bonne gouvernance, rendre des comptes.',
    'Cameroon has bodies to fight it: **la CONAC** (Commission nationale anti-corruption, created in 2006), le Contrôle supérieur de l’État, and the **Tribunal criminel spécial**, which judges cases of embezzlement of public funds. Citizens can **dénoncer** corruption through the official channels; a person who reveals wrongdoing is **un lanceur d’alerte** (a whistle-blower).',
    'Corruption appears in daily life: paying to pass a competitive exam, to skip a queue at the hospital, to avoid a traffic fine, to get a good mark. To refuse politely but firmly: « **Non merci, je préfère suivre la procédure.** » « **Je refuse de** donner de l’argent pour un service gratuit. » « Je vais **signaler** cette pratique. » Remember that the corrupter and the corrupted are **both** guilty.',
  ], 'opposition-fr', 'Giving a bribe is as guilty as taking one.',
  ['« Le népotisme » is:', ['favouring members of one’s family for jobs or advantages', 'a disease', 'a kind of tax', 'a court'], 'Giving posts to relatives instead of the best candidates.'],
  [['Un pot-de-vin', 'A bribe.'], ['Le détournement de fonds publics', 'Embezzlement: stealing public money.'], ['L’intégrité', 'Honesty and firm moral principles.'], ['Un lanceur d’alerte', 'A whistle-blower who reveals wrongdoing.']],
  [
    { q: 'A policeman suggests that a taxi driver pay 2 000 FCFA « pour arranger ». Write the driver’s refusal in two polite sentences.', steps: ['Refuse and propose the legal path.', '**« Je regrette, monsieur l’agent, mais je ne donnerai pas d’argent. Si j’ai commis une infraction, donnez-moi la contravention et je la paierai au Trésor. »**'] },
    { q: 'Give the word for each definition: (1) celui qui reçoit l’argent sale; (2) le fait de voler l’argent de l’État.', steps: ['(1) **le corrompu**', '(2) **le détournement de fonds publics**'] },
  ]),

  L('fr-opposition-5', 'fr-f5-integrite', '12.2', 'Exprimer l’opposition et la concession', 15, ['Grammaire'], [
    '**Opposition** puts two facts side by side to show a contrast:\n- **mais** (with a comma before it): « Il est pauvre, **mais** il est honnête. »\n- **cependant, pourtant, toutefois, néanmoins** (however, yet): « La loi est claire. **Pourtant**, certains la violent. »\n- **tandis que, alors que** + indicatif, to contrast two subjects: « Le premier agent refuse l’argent, **tandis que** son collègue l’accepte. »\n- **par contre, en revanche, au contraire**; **au lieu de** + infinitif: « **Au lieu de** dénoncer le vol, il s’est tu. »',
    '**Concession** admits a fact that should have stopped something, but did not:\n- **bien que / quoique + subjonctif**: « **Bien qu’**on lui **ait proposé** de l’argent, le juge est resté intègre. »\n- **malgré / en dépit de + nom**: « **Malgré** les menaces, elle a témoigné. »\n- **même si + indicatif**: « **Même si** tout le monde triche, je ne tricherai pas. »\n- **avoir beau + infinitif**: « Il **a beau** insister, je refuse. » (however much he insists)',
    'The difference: opposition contrasts two facts of equal weight; concession says « this is true, **and yet** the result is unexpected ». Choose the construction from what follows: a noun → malgré; a verb in the subjunctive → bien que; an indicative clause with a contrast of subjects → tandis que.',
  ], 'opposition-fr', 'A noun follows: malgré. A clause follows: bien que + subjonctif, or tandis que + indicatif.',
  ['« Les élèves honnêtes révisent, ___ les tricheurs préparent des antisèches. »', ['tandis que', 'malgré', 'bien que', 'au lieu de'], 'Two subjects contrasted, indicative: tandis que.'],
  [['Opposition', 'Contrasting two facts: mais, tandis que, alors que, par contre.'], ['Concession', 'Admitting a fact that does not prevent the result: bien que, malgré, même si.'], ['Avoir beau + infinitif', 'However much one does something, it changes nothing.']],
  [
    { q: 'Join with « bien que »: « Le fonctionnaire gagne peu. Il refuse les pots-de-vin. »', steps: ['« Bien que » takes the subjunctive: gagner → qu’il **gagne**.', '**« Bien que le fonctionnaire gagne peu, il refuse les pots-de-vin. »**'] },
    { q: 'Rewrite with « malgré »: « Bien qu’il soit pauvre, il reste honnête. »', steps: ['Change the clause into a noun group: « être pauvre » → **sa pauvreté**.', '**« Malgré sa pauvreté, il reste honnête. »**'] },
    { q: 'Rewrite with « avoir beau »: « Même s’ils insistent, je ne signerai pas ce faux document. »', steps: ['avoir beau + infinitif, conjugated with the subject: **ils ont beau insister**.', '**« Ils ont beau insister, je ne signerai pas ce faux document. »**'] },
  ]),

  // ---------- Jeunes et addictions ----------
  L('fr-addictions-5', 'fr-f5-addictions', '13.1', 'Les addictions : comprendre, prévenir, conseiller', 14, ['Lexique', 'Communication'], [
    'Vocabulary of addiction:\n- **une drogue**, un stupéfiant, le cannabis, **le tramadol** (a painkiller abused by many young people), l’alcool frelaté, le tabac, la chicha\n- also addictions without a substance: les jeux d’argent, **les paris sportifs**, les écrans\n- **la dépendance**, l’accoutumance, le manque, **le sevrage** (withdrawal), **la rechute** (relapse), une surdose, se droguer, consommer, se désintoxiquer.',
    'Consequences and school delinquency: l’échec scolaire, **l’absentéisme**, l’indiscipline, les bagarres, le vandalisme, le vol, la violence, les troubles mentaux, les accidents, les problèmes avec la justice. Where to find help: les parents, **le conseiller d’orientation**, l’infirmerie de l’école, le centre de santé, un enseignant de confiance.',
    'To **advise a friend**:\n- « **Je te conseille de** parler à quelqu’un. » « **Tu devrais** arrêter avant qu’il soit trop tard. »\n- « **À ta place, je** demanderais de l’aide. » « **Il vaut mieux** dire non. »\n- « **Évite** les camarades qui te poussent à consommer. » « **Ne te laisse pas** influencer. »\nTo refuse pressure: « Non merci, ça ne m’intéresse pas. » « Je n’ai pas besoin de ça pour m’amuser. »',
  ], 'discours-passe-fr', '« À ta place, je… » + conditionnel is a gentle way to advise.',
  ['« Le sevrage » is:', ['the period of stopping a drug and its withdrawal symptoms', 'a new drug', 'a school rule', 'a party'], 'The body reacts when the drug is stopped.'],
  [['Une addiction', 'A dependence on a substance or a habit.'], ['Le sevrage', 'Withdrawal: stopping a drug and its effects on the body.'], ['La rechute', 'A relapse: starting again after stopping.'], ['L’absentéisme', 'Being absent from school often without good reason.']],
  [
    { q: 'Your friend has started taking tramadol before exams « pour être en forme ». Write three sentences of advice.', steps: ['Name the danger, give advice with two different structures, offer help.', '**« Le tramadol n’est pas un fortifiant : c’est un médicament dangereux qui crée une dépendance. Tu devrais arrêter et en parler au conseiller d’orientation. Si tu veux, je t’accompagnerai. »**'] },
  ]),

  L('fr-concordance-5', 'fr-f5-addictions', '13.3', 'Le discours rapporté au passé : la concordance des temps', 15, ['Grammaire'], [
    'When the reporting verb is in a **past tense** (il a dit, elle expliquait, ils avaient annoncé), the tenses of the reported words **move one step back** (la concordance des temps):\n- présent → **imparfait**: « Je suis malade. » → Il a dit qu’il **était** malade.\n- passé composé → **plus-que-parfait**: « J’ai arrêté. » → Il a dit qu’il **avait arrêté**.\n- futur simple → **conditionnel présent**: « Je viendrai. » → Il a dit qu’il **viendrait**.\n- l’imparfait, le plus-que-parfait and le conditionnel **do not change**.\n- the impératif → **de + infinitif**: « Arrête ! » → Il m’a dit **d’arrêter**.',
    'The expressions of **time and place** also change, because the moment of speaking is past:\n- aujourd’hui → **ce jour-là**; hier → **la veille**; demain → **le lendemain**\n- maintenant → **à ce moment-là**; ce matin → ce matin-là\n- la semaine prochaine → **la semaine suivante**; la semaine dernière → la semaine précédente\n- ici → **là**.',
    'Questions follow the same rules: « Est-ce que tu fumes ? » → Il m’a demandé **si** je **fumais**. « Où as-tu acheté ça ? » → Il m’a demandé **où** j’**avais acheté** ça. « Qu’est-ce que tu feras ? » → Il m’a demandé **ce que** je **ferais**. And do not forget the pronouns: « je » → il / elle, « mon » → son, « vous » → nous or ils according to the situation.',
  ], 'discours-passe-fr', 'Past reporting verb: présent → imparfait, passé composé → plus-que-parfait, futur → conditionnel.',
  ['Le conseiller a dit : « Tu iras mieux demain. » In reported speech:', ['Le conseiller a dit que j’irais mieux le lendemain.', 'Le conseiller a dit que j’irai mieux demain.', 'Le conseiller a dit que tu vas mieux demain.', 'Le conseiller a dit si j’irais mieux le lendemain.'], 'Futur → conditionnel; demain → le lendemain; tu → je.'],
  [['Concordance des temps', 'The agreement of tenses when the reporting verb is in the past.'], ['Le lendemain', 'The next day (in reported or past narration).'], ['Verbe introducteur', 'The verb that introduces reported words: dire, demander, expliquer, annoncer.']],
  [
    { q: 'Rapportez au passé : L’infirmière a expliqué : « Le cannabis détruit la mémoire et j’ai déjà soigné plusieurs élèves. »', steps: ['« détruit » (présent) → **détruisait**.', '« j’ai soigné » (passé composé) → **elle avait soigné**.', '**« L’infirmière a expliqué que le cannabis détruisait la mémoire et qu’elle avait déjà soigné plusieurs élèves. »**'] },
    { q: 'Rapportez au passé : Mon père m’a demandé : « Où étais-tu hier soir ? Rentre avant vingt heures aujourd’hui ! »', steps: ['« étais » (imparfait) does not change; « hier soir » → **la veille au soir**; tu → je.', 'The order → **de + infinitif**; « aujourd’hui » → **ce jour-là**.', '**« Mon père m’a demandé où j’étais la veille au soir et il m’a dit de rentrer avant vingt heures ce jour-là. »**'] },
  ]),

  // ---------- Composition argumentative ----------
  L('fr-dunepart-5', 'fr-f5-dissertation', '14.1', 'Les liens logiques complexes dans la composition', 15, ['Expression écrite'], [
    'Complex logical links (les connecteurs) show how the ideas of a composition are related:\n- to balance two aspects: **d’une part… d’autre part**; **non seulement… mais aussi**\n- to add: **en outre**, **de plus**, par ailleurs, de surcroît\n- to show a cause: car, **en effet**, puisque, étant donné que\n- to show a consequence: **par conséquent**, c’est pourquoi, ainsi, de sorte que\n- to concede and refute: **certes… mais**, il est vrai que… cependant\n- to conclude: **en somme**, en définitive, pour conclure.',
    'Each paragraph of the development follows the same pattern: **an argument** (the idea, introduced by a connective), **an explanation** (why it is true) and **an illustration** (a precise example), then a short closing sentence. Leave a line or an indent (un alinéa) between paragraphs, and never start every sentence with « et ».',
    'For a question such as « Pensez-vous que… ? », a **dialectical plan** works well:\n- I. the arguments **for** (la thèse)\n- II. the arguments **against** (l’antithèse), introduced by « Certes…, mais » or « Cependant »\n- III. your balanced opinion (la synthèse), or simply a conclusion that takes a clear position.',
  ], 'plan-composition-fr', 'Argument, explanation, example: every paragraph needs all three.',
  ['« Non seulement le téléphone distrait les élèves, ___ il coûte cher. »', ['mais aussi', 'par conséquent', 'certes', 'en somme'], '« Non seulement… mais aussi » adds a second, stronger point.'],
  [['Connecteur logique', 'A word that shows the relation between ideas: cause, consequence, opposition, addition.'], ['Plan dialectique', 'An essay plan with thesis, antithesis and synthesis.'], ['Un alinéa', 'The indent at the start of a paragraph.']],
  [
    { q: 'Write one paragraph for the subject « Le téléphone portable à l’école : avantage ou danger ? », using d’une part… d’autre part and par conséquent.', steps: ['Argument with a connective, explanation, example, consequence.', '**« Le téléphone portable peut être un outil utile pour apprendre. D’une part, il permet de consulter un dictionnaire ou une encyclopédie en ligne ; d’autre part, les élèves peuvent partager leurs cours sur un groupe de classe. Par exemple, un élève malade peut recevoir les leçons du jour. Par conséquent, bien utilisé, le téléphone n’est pas seulement une distraction. »**'] },
    { q: 'Write the opening of the opposing paragraph with « Certes… mais ».', steps: ['Concede the first point, then turn to the danger.', '**« Certes, le téléphone aide à apprendre, mais il détourne souvent l’attention des élèves : les jeux et les réseaux sociaux remplacent les révisions. »**'] },
  ]),

  // ---------- Médias et IA ----------
  L('fr-medias-5', 'fr-f5-medias', '15.1', 'Les médias, l’intelligence artificielle et les infox', 15, ['Lexique', 'Lecture'], [
    'The media (les médias de masse):\n- **la presse écrite**: un quotidien (every day), un hebdomadaire (every week), un mensuel (every month), un journal, un magazine\n- **l’audiovisuel**: la radio, la télévision\n- **les médias numériques**: les sites d’information, les réseaux sociaux, les podcasts.\nIn Cameroon, the CRTV is the public radio and television, and Cameroon Tribune is the national daily, published in French and English. A newspaper article has **un titre**, **un chapeau** (the short introduction in bold), le corps de l’article and la signature du journaliste.',
    '**L’intelligence artificielle** (IA) allows machines to write texts, translate, recognise images and voices, and answer questions through **un agent conversationnel**. It works with **algorithmes** and huge amounts of **données**. It is useful for learning, but it can make mistakes, invent facts, and produce **des hypertrucages** (deepfakes): fake videos or voices that look real.',
    '**Une infox** (or une fausse information) is false news spread on purpose or by mistake. Before sharing, check:\n- **the source**: who published it? Is it a known media outlet?\n- **the date**: is it old news shared again?\n- **other sources**: do serious media say the same thing?\n- **the image**: has it been taken from another event?\n- **the tone**: a very emotional title (« URGENT ! Partagez avant suppression ! ») is a warning sign.',
  ], 'infox-fr', 'If you cannot check it, do not share it.',
  ['« Un hebdomadaire » is published:', ['every week', 'every day', 'every month', 'every year'], 'Hebdomadaire: once a week.'],
  [['Une infox', 'A piece of fake news.'], ['Un hypertrucage', 'A deepfake: a fake video, image or voice made with AI.'], ['Le chapeau', 'The short introduction of a newspaper article.'], ['Une source fiable', 'A reliable source of information.']],
  [
    { q: 'A WhatsApp message says: « URGENT : le GCE est annulé cette année ! Partagez à tous vos contacts ! » There is no source. Explain in French what you will do, using « afin que ».', steps: ['Check the source, then refuse to share.', '**« Je vérifierai d’abord sur le site officiel du GCE Board et dans les médias sérieux. Je ne partagerai pas ce message afin que mes camarades ne soient pas trompés. »**'] },
    { q: 'Give one advantage and one danger of artificial intelligence for students, in two sentences.', steps: ['Use a connective of opposition between them.', '**« L’intelligence artificielle peut expliquer une leçon difficile en quelques secondes. Cependant, elle peut se tromper, et l’élève qui copie ses réponses n’apprend rien. »**'] },
  ]),

  // ---------- GCE ----------
  L('fr-qcm-5', 'fr-f5-gce', '16.1', 'Paper 1 : réussir les questions à choix multiples', 16, ['Examen'], [
    'The scheme of work trains you for these kinds of multiple-choice items:\n- **grammatical conversions**: active → passive, direct → reported speech, singular → plural, one tense → another\n- **synonymes** (same meaning) and **antonymes** (opposite meaning): rapide / vite; riche / pauvre; augmenter / diminuer\n- **texte à trous** (cloze): choose the word that fits the grammar and the meaning of the gap\n- **sounds**: find the word that contains a given sound, or the odd one out.',
    'Common spellings of French sounds:\n- /ɛ̃/: **in, im, ain, ein** (vin, simple, pain, plein)\n- /ɑ̃/: **an, am, en, em** (enfant, champ, vent, temps)\n- /ɔ̃/: **on, om** (bon, nom)\n- /ʃ/: **ch** (chat); /ʒ/: **j**, **ge**, **gi** (jour, nager, girafe)\n- /ɲ/: **gn** (montagne)\n- /s/: **ss**, **ç**, **c** before e or i (poisson, garçon, ciel); /z/: **s** between two vowels (rose).\nAn « n » or « m » followed by a vowel or doubled is **not** nasal: bonne, ami, femme /fam/.',
    'Strategy: read the whole stem before looking at the options; eliminate the options that are grammatically impossible (wrong gender, number, tense or mood); in a cloze, read the sentence after the gap too; never leave an item blank; watch the time and do not stay too long on one item.',
  ], 'gce-french-5', 'Eliminate first: a wrong gender, number or mood removes an option at once.',
  ['Which word contains the sound /ɛ̃/?', ['plein', 'pleine', 'plan', 'plomb'], '« ein » at the end of a word is /ɛ̃/; in « pleine » the n is followed by e.'],
  [['QCM', 'Questionnaire à choix multiples: a multiple-choice test.'], ['Synonyme', 'A word with the same meaning.'], ['Antonyme', 'A word with the opposite meaning.'], ['Texte à trous', 'A cloze text with gaps to fill.']],
  [
    { q: 'Choisissez la bonne réponse : « La lettre ___ hier par le directeur. » (A) a été signée (B) a été signé (C) était signer (D) sera signée', steps: ['« hier » requires a past tense, so (D) is out; (C) is not a correct form.', '« La lettre » is feminine: the participle takes -e.', '**(A) a été signée.**'] },
    { q: 'Find the odd one out by sound: « champ, temps, gens, bon ».', steps: ['champ, temps and gens contain /ɑ̃/.', '**« bon »** contains /ɔ̃/.'] },
  ]),

  L('fr-mock-5', 'fr-f5-gce', '16.2', 'L’examen blanc et la remédiation', 16, ['Examen', 'Grammaire'], [
    'The **examen blanc** (mock) is sat under real conditions: Paper 1 lasts 1½ hours and Paper 2 lasts 2 hours. Read all the instructions, plan your time, spend about ten minutes planning each composition and keep the last ten minutes to **proofread** (accords, accents, temps, ponctuation).',
    'After the mock, the scheme focuses on the most frequent errors:\n- **tenses in translation**: « I have lived here for three years » → « J’**habite** ici **depuis** trois ans » (present + depuis, for an action still going on); « I was going to call » → « J’**allais** appeler »; « I have just eaten » → « Je **viens de** manger »\n- **paragraph formatting**: one idea per paragraph, an indent at the start, a connective to link it to the previous one\n- **conditional matching**, the agreement between the « si » clause and the main clause.',
    'Conditional matching:\n- **si + présent → futur** (or présent, or impératif): « Si tu révises, tu **réussiras**. »\n- **si + imparfait → conditionnel présent**: « Si tu révisais, tu **réussirais**. »\n- **si + plus-que-parfait → conditionnel passé**: « Si tu **avais révisé**, tu **aurais réussi**. »\nThe **conditionnel passé** is avoir or être in the conditionnel + past participle: j’aurais su, elle serait venue, nous nous serions préparés. It expresses a regret or a past condition that did not happen. Never put the conditionnel in the « si » clause: « si j’aurais » is wrong.',
  ], 'gce-french-5', 'Never « si j’aurais »: the conditionnel goes in the main clause, not after « si ».',
  ['« Si nous ___ plus tôt, nous n’aurions pas raté le car. »', ['étions partis', 'serions partis', 'partons', 'partirions'], 'Si + plus-que-parfait → conditionnel passé.'],
  [['Examen blanc', 'A mock examination.'], ['Remédiation', 'Work to correct the weaknesses found in a test.'], ['Conditionnel passé', 'The past conditional: aurais or serais + past participle.']],
  [
    { q: 'Correct the errors: « Si j’aurais su, je serai venu. Je étudie le français depuis cinq ans passés. »', steps: ['After « si », no conditionnel: plus-que-parfait **avais su**; then conditionnel passé **serais venu**.', '« Je » becomes « J’ » before a vowel, and « depuis » takes no « passés ».', '**« Si j’avais su, je serais venu. J’étudie le français depuis cinq ans. »**'] },
    { q: 'Traduisez : « If it rains tomorrow, the match will be cancelled. »', steps: ['Si + présent → futur; the passive in the futur: **sera annulé**.', '**« S’il pleut demain, le match sera annulé. »** (« Si il » becomes « s’il ».)'] },
  ]),

  L('fr-paper2-5', 'fr-f5-gce', '16.3', 'Paper 2 : composition et exercices sur texte', 16, ['Examen', 'Expression écrite'], [
    '**Section A** of Paper 2, as the scheme presents it, asks for a composition: **an argumentative essay**, **a formal letter** or **a speech**. Before writing, identify the format and the audience, then make a plan:\n- essay: introduction (subject, question, plan), two or three paragraphs, conclusion\n- formal letter: layout (sender, place and date, receiver, objet, greeting, body, formule de politesse, signature)\n- speech: salutations protocolaires, introduction, development, thanks.\nRespect the length asked, write legibly and keep to the subject.',
    '**Section B** is based on a text: comprehension questions and **grammar transformations**. Common instructions:\n- « Mettez à la voix passive. » « Mettez au discours rapporté. »\n- « Remplacez les mots soulignés par un pronom. »\n- « Mettez au pluriel. » « Mettez au passé composé (au futur, à l’imparfait). »\n- « Commencez par… » (start the new sentence with the given words and change the rest).\nAnswer exactly what is asked and rewrite the **whole sentence**.',
    'A proofreading checklist for the whole paper:\n- subject and verb agree (ils **sont**, les élèves **finissent**)\n- adjectives and participles agree (une décision **prise**, des lettres **écrites**)\n- the right tense and mood (subjonctif after bien que, pour que, il faut que)\n- accents (à / a, où / ou, é / è)\n- punctuation and capitals.',
  ], 'gce-french-5', 'In Section B, copy the full transformed sentence, not just the changed word.',
  ['« Remplacez le mot souligné par un pronom : Je donne le livre (souligné) à Marie. »', ['Je le donne à Marie.', 'Je lui donne à Marie.', 'Je donne le à Marie.', 'Je la donne à Marie.'], '« le livre » is a masculine direct object: le, placed before the verb.'],
  [['Section A', 'The composition part of Paper 2 in the scheme: essay, letter or speech.'], ['Section B', 'The text-based part: comprehension and grammar transformations.'], ['Transformation grammaticale', 'Rewriting a sentence as instructed: passive, reported speech, tense change.']],
  [
    { q: 'Mettez au pluriel : « Le candidat nerveux a oublié sa calculatrice. »', steps: ['Every word that agrees changes: les candidats nerveux (nerveux is already -x), ont oublié, leurs calculatrices.', '**« Les candidats nerveux ont oublié leurs calculatrices. »**'] },
    { q: 'Commencez par « Il faut que… » : « Tu dois finir ta composition avant midi. »', steps: ['« Il faut que » + subjonctif: finir → que tu **finisses**.', '**« Il faut que tu finisses ta composition avant midi. »**'] },
    { q: 'Remplacez les mots soulignés par des pronoms : « Le professeur explique la règle (souligné) aux élèves (souligné). »', steps: ['« la règle » → **la**; « aux élèves » → **leur**. Order: la before leur.', '**« Le professeur la leur explique. »**'] },
  ]),
];
