// A Level French lessons (0745), Upper Sixth, Terms 2 and 3: ecological and
// health challenges, governance, reported speech in the past, inclusion and
// advocacy, AI and disinformation, condition and concession, the
// dissertation, the GCE papers, the mock and remediation. Explanations are in
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

export const LESSONS_FU6B = [
  // ---------- 8. Écologie ----------
  L('afr-urbanisation-1', 'afr-u6-ecologie', '8.1', 'Réchauffement, urbanisation anarchique et pandémies', 17, ['Vocabulaire'], [
    'Le **réchauffement climatique** entraîne des **pluies irrégulières**, des **sécheresses** dans le Nord, l’**avancée du désert**, la **montée des eaux** sur les côtes et des pertes agricoles.',
    'L’**urbanisation anarchique** est la croissance des villes **sans plan d’aménagement**: constructions dans les **zones marécageuses** et sur les **pentes**, **caniveaux** bouchés, **dépotoirs sauvages**, manque d’eau potable. Conséquences: **inondations**, **glissements de terrain**, **épidémies**.',
    'Les **pandémies** modernes (comme la COVID-19) se propagent vite à cause des **déplacements** et de la **densité** urbaine. Mesures: **gestes barrières**, **dépistage**, **vaccination**, **confinement** dans les cas graves.',
    'Specialised verbs: **aménager**, **assainir**, **désengorger**, **reboiser**, **sensibiliser**, **endiguer** (une épidémie).',
  ], 'afr-urbanisation', 'Link the three challenges: unplanned towns, a changing climate and disease feed each other.',
  ['Construire dans une zone marécageuse expose surtout aux:', ['inondations', 'incendies de forêt', 'tremblements de terre', 'sécheresses'], 'Low wet land floods.'],
  [['Urbanisation anarchique', 'Unplanned growth of towns.'], ['Assainir', 'To clean up and make healthy.'], ['Gestes barrières', 'Simple hygiene measures against contagion.']],
  [
    { q: 'Write a cause-consequence chain on unplanned towns in one sentence.', steps: ['Cause: building without a plan.', 'Consequence: blocked drains, floods.', '**Les constructions sans plan bouchent les voies d’écoulement des eaux, si bien que les quartiers bas sont inondés à chaque pluie.**'] },
    { q: 'Propose two solutions in the conditionnel.', steps: ['One about planning.', 'One about waste.', '**Il faudrait appliquer les plans d’urbanisme et l’on pourrait organiser une collecte régulière des ordures.**'] },
  ]),

  L('afr-dechets-1', 'afr-u6-ecologie', '8.2', 'Essai argumentatif: la gestion des déchets', 18, ['Rédaction'], [
    'Subject: « **La gestion des déchets est-elle l’affaire de l’État seulement ?** » Analyse the key words: **gestion** (collecte, tri, recyclage, élimination), **déchets** (ménagers, plastiques, industriels, médicaux), **l’État seulement** (the question invites a discussion).',
    'Plan: **I.** Le rôle de l’État et des communes (lois, ramassage, décharges contrôlées, sanctions). **II.** Le rôle des citoyens, des entreprises et des associations (tri à la source, compostage, réduction du plastique, recyclage artisanal, sensibilisation). **Conclusion**: une responsabilité **partagée**.',
    'Examples to use: les sacs plastiques non biodégradables, les caniveaux bouchés, les récupérateurs de bouteilles, les objets d’art en matériaux recyclés, les journées de salubrité.',
    '**Activité pratique:** write the full essay (about 400 words) with an accroche, a problématique, two parts with two arguments each, transitions and a conclusion with an ouverture.',
  ], 'afr-essai-plan', 'When a subject says « seulement », the answer is usually « non, mais aussi... »: plan the two sides.',
  ['Le tri à la source consiste à:', ['séparer les déchets selon leur type dès la maison', 'tout brûler', 'jeter dans la rivière', 'mélanger tous les déchets'], 'Sorting at home.'],
  [['Décharge contrôlée', 'An authorised, managed waste site.'], ['Biodégradable', 'Able to be broken down naturally.'], ['Responsabilité partagée', 'A duty that several actors hold together.']],
  [
    { q: 'Write an accroche for the essay.', steps: ['Start from a striking fact or image.', 'Lead towards the subject.', '**Après chaque averse, nos caniveaux débordent de bouteilles et de sachets plastiques.**'] },
    { q: 'Write a transition between part I and part II.', steps: ['Sum up part I.', 'Announce part II.', '**Si l’État a un rôle essentiel, il ne peut cependant pas réussir sans la participation des citoyens.**'] },
  ]),

  // ---------- 9. Gouvernance ----------
  L('afr-gouvernance-1', 'afr-u6-gouvernance', '9.1', 'Éthique, gouvernance et lutte contre la corruption', 17, ['Vocabulaire'], [
    'La **bonne gouvernance** repose sur la **transparence**, la **responsabilité** (rendre compte), la **participation** des citoyens et le **respect de la loi**. Son contraire: la **corruption**, le **favoritisme**, le **détournement de fonds publics**, l’**impunité**.',
    'Au Cameroun, la **Commission nationale anti-corruption** (CONAC), créée en 2006, reçoit les **dénonciations**, mène des **enquêtes** et **sensibilise** le public. D’autres institutions contrôlent la gestion publique, comme le **Contrôle supérieur de l’État** et les juridictions.',
    'Le **civisme fiscal**: payer ses **impôts** et **taxes** finance les écoles, les routes et les hôpitaux; la **fraude fiscale** prive la collectivité de ressources. Le **patriotisme** est l’amour de la patrie, montré par le respect du bien public et l’engagement.',
    'Vocabulary of corruption: le **pot-de-vin**, le **bakchich**, **soudoyer**, le **trafic d’influence**, le **lanceur d’alerte**, la **reddition des comptes**.',
  ], 'afr-gouvernance', 'For governance questions, show both sides: the institutions and the citizen’s own duty.',
  ['Un lanceur d’alerte est:', ['une personne qui révèle des faits illégaux dans l’intérêt public', 'un pompier', 'un journaliste sportif', 'un juge'], 'Whistle-blower.'],
  [['Bonne gouvernance', 'Managing public affairs with transparency and accountability.'], ['Détournement de fonds', 'The illegal use of money one is trusted to manage.'], ['Fraude fiscale', 'Deliberately avoiding taxes owed.']],
  [
    { q: 'Explain in one sentence why paying taxes is a civic duty.', steps: ['Link taxes to public services.', 'Use a consequence connector.', '**Les impôts financent les écoles, les routes et les hôpitaux; c’est pourquoi les payer est un devoir de chaque citoyen.**'] },
    { q: 'Complete: « Le fonctionnaire a été arrêté pour ___ de fonds publics après une ___ de la CONAC. »', steps: ['The crime: détournement.', 'What CONAC led: an enquête.', '**détournement, enquête.**'] },
  ]),

  L('afr-campagne-1', 'afr-u6-gouvernance', '9.2', 'Analyser un document d’actualité ou une campagne de sensibilisation', 16, ['Rédaction'], [
    'To analyse a **campagne de sensibilisation** (poster, radio spot, leaflet), answer: **Qui parle ?** (l’émetteur: un ministère, une ONG, la CONAC); **À qui ?** (le destinataire: les jeunes, les usagers, les fonctionnaires); **Quel message ?** (l’idée à retenir); **Par quels moyens ?** (le slogan, l’image, les couleurs, l’impératif, le tutoiement ou le vouvoiement, les chiffres); **Dans quel but ?** (informer, convaincre, faire agir).',
    'A **slogan** is short and striking: rhyme, rhythm, play on words, imperative: « **Non à la corruption, oui au développement !** »',
    'In your analysis, quote the document, then explain the effect: « L’impératif "Dénoncez" interpelle directement le lecteur et l’invite à agir. »',
    '**Activité pratique:** analyse a real awareness poster in about 200 words, then design your own slogan against fraud in exams.',
  ], 'afr-affiche', 'Five questions: qui, à qui, quoi, comment, pourquoi. Answer them in that order.',
  ['Dans une affiche, l’émetteur est:', ['celui qui produit le message', 'le lecteur', 'l’imprimeur', 'la couleur'], 'Who speaks.'],
  [['Émetteur', 'The sender of a message.'], ['Destinataire', 'The person the message is meant for.'], ['Slogan', 'A short, striking phrase that sums up a message.']],
  [
    { q: 'Explain the effect of « Ensemble, disons non à la corruption ! »', steps: ['Ensemble and disons include the reader.', 'The imperative calls for action.', '**L’impératif à la première personne du pluriel et le mot « ensemble » associent le lecteur à un combat collectif.**'] },
    { q: 'Write a slogan against exam fraud.', steps: ['Short, with rhythm.', 'Contrast two choices.', '**Fraude au départ, échec à l’arrivée !**'] },
  ]),

  // ---------- 10. Discours rapporté ----------
  L('afr-concordance-1', 'afr-u6-discours', '10.1', 'La concordance des temps au discours indirect', 18, ['Grammaire'], [
    'When the reporting verb is in a **past tense** (a dit, déclarait, avait affirmé), the tenses of the reported words **shift**: **présent → imparfait**; **passé composé → plus-que-parfait**; **futur simple → conditionnel présent**; **futur antérieur → conditionnel passé**. The **imparfait**, **plus-que-parfait** and **conditionnel** do **not** change.',
    'Example: « Je **signe** le contrat et je **paierai** demain », a dit le commerçant → Le commerçant a dit **qu’il signait** le contrat **et qu’il paierait le lendemain**.',
    'Markers of time and place change: **aujourd’hui → ce jour-là**, **hier → la veille**, **demain → le lendemain**, **la semaine dernière → la semaine précédente**, **dans deux jours → deux jours plus tard**, **ici → là**, **maintenant → alors**, **ce matin → ce matin-là**.',
    'Questions and commands follow the same rules as in the present (si, ce que, ce qui, de + infinitif), with the tense shifts.',
  ], 'afr-concordance', 'Shift the tense, then the persons, then the time and place words: three passes.',
  ['« Nous partirons demain », ont-ils annoncé. Au discours indirect:', ['Ils ont annoncé qu’ils partiraient le lendemain.', 'Ils ont annoncé qu’ils partiront demain.', 'Ils ont annoncé qu’ils partaient hier.', 'Ils ont annoncé que nous partirions demain.'], 'Futur → conditionnel; demain → le lendemain.'],
  [['Concordance des temps', 'The rule by which tenses shift after a past reporting verb.'], ['Le lendemain', 'The next day, in reported speech.'], ['La veille', 'The day before, in reported speech.']],
  [
    { q: 'Rapportez: « J’ai vu l’accusé ici hier », a déclaré le témoin.', steps: ['Passé composé → plus-que-parfait.', 'Ici → là; hier → la veille.', '**Le témoin a déclaré qu’il avait vu l’accusé là la veille.**'] },
    { q: 'Rapportez: « Est-ce que vous viendrez au tribunal ? » m’a demandé l’avocat.', steps: ['Yes/no question: si.', 'Futur → conditionnel; vous → je.', '**L’avocat m’a demandé si je viendrais au tribunal.**'] },
  ]),

  L('afr-concordance-2', 'afr-u6-discours', '10.2', 'Transposer un dialogue judiciaire ou civique', 17, ['Grammaire'], [
    'To transpose a **dialogue**, choose precise **reporting verbs**: affirmer, déclarer, reconnaître, nier, avouer, expliquer, préciser, répondre, protester, ordonner, supplier, promettre, demander.',
    'Turn each line into the right structure: statement (**que** + tense shift), question (**si / ce que / ce qui / où / pourquoi**), command (**de** + infinitif), exclamation (« s’écria que », or a verb such as **se plaindre**, **s’indigner**). Remove quotation marks, dashes and question marks.',
    'Keep the text **fluid**: vary the verbs, use connectors (**alors, ensuite, enfin**), and avoid repeating « il a dit que » on every line.',
    '**Activité pratique:** transpose a ten-line courtroom dialogue between a judge, a lawyer and a witness into a report of about 150 words in the past.',
  ], 'discours-passe-fr', 'Each line of the dialogue gets its own reporting verb: nier, avouer, préciser, protester.',
  ['« Non, je n’ai rien volé ! » a dit l’accusé. Le meilleur verbe introducteur est:', ['nier', 'avouer', 'ordonner', 'supplier'], 'He denies.'],
  [['Transposer', 'To change a text from one form into another, such as direct to indirect speech.'], ['Avouer', 'To admit a fault.'], ['Nier', 'To deny.']],
  [
    { q: 'Rapportez avec « avouer »: « Oui, j’ai pris l’argent », a dit le caissier.', steps: ['Avouer que + plus-que-parfait.', 'J’ → il.', '**Le caissier a avoué qu’il avait pris l’argent.**'] },
    { q: 'Rapportez: Le juge au témoin: « Parlez plus fort et dites-nous ce que vous avez vu. »', steps: ['Commands → de + infinitif.', 'Ce que vous avez vu → ce qu’il avait vu.', '**Le juge a demandé au témoin de parler plus fort et de dire ce qu’il avait vu.**'] },
  ]),

  // ---------- 11. Inclusion ----------
  L('afr-inclusion-1', 'afr-u6-inclusion', '11.1', 'Droits des minorités et des personnes vulnérables', 16, ['Vocabulaire'], [
    'Les **personnes vulnérables** ont besoin d’une protection particulière: les **personnes en situation de handicap**, les **orphelins**, les **enfants de la rue**, les **personnes âgées**, les **déplacés internes** et les **réfugiés**, les **minorités** (peuples autochtones, groupes moins nombreux).',
    'Leurs droits: la **non-discrimination**, l’**accessibilité** (rampes, signalétique, braille, langue des signes), l’**égalité des chances**, la **protection sociale**, la **participation** à la vie publique.',
    'L’**éducation inclusive** accueille tous les enfants dans la même école en adaptant l’enseignement: **scolarisation des filles**, élèves handicapés, enfants déplacés. Obstacles: la **pauvreté**, les **préjugés**, le **mariage précoce**, l’éloignement de l’école.',
    'Verbs: **intégrer**, **accompagner**, **lutter contre**, **garantir**, **sensibiliser**, **défendre**.',
  ], 'afr-inclusion', 'Name the vulnerable group, the obstacle it faces and the right that answers it.',
  ['La langue des signes permet de communiquer avec:', ['les personnes sourdes', 'les personnes aveugles', 'les orphelins', 'les réfugiés seulement'], 'Sign language.'],
  [['Personne vulnérable', 'A person who needs special protection.'], ['Éducation inclusive', 'Schooling that welcomes every child, adapting teaching to needs.'], ['Préjugé', 'An opinion formed without knowledge, often negative.']],
  [
    { q: 'Give one obstacle to girls’ schooling and one solution.', steps: ['Obstacle: early marriage or poverty.', 'Solution: awareness, bursaries.', '**Le mariage précoce éloigne des filles de l’école; des bourses et la sensibilisation des parents peuvent les y maintenir.**'] },
    { q: 'Complete: « Une ___ à l’entrée permet aux élèves en fauteuil roulant d’accéder à la classe. »', steps: ['An inclined access.', 'Accessibility vocabulary.', '**rampe.**'] },
  ]),

  L('afr-plaidoyer-1', 'afr-u6-inclusion', '11.2', 'Rédiger un plaidoyer: l’école pour tous', 18, ['Rédaction'], [
    'A **plaidoyer** is a text that **defends a cause** and asks authorities or the public to **act**. It is argumentative, often **emotional**, and ends with **demands**.',
    'Plan: **1.** an **accroche** (a striking fact or a short story: « Amina a douze ans et n’a jamais tenu un stylo. »); **2.** the **constat** (the problem, with figures if known); **3.** the **arguments** (moral, legal, economic: education is a right and a driver of development); **4.** the **réfutation** of objections (« On dira que l’école coûte cher; pourtant... »); **5.** the **appel à l’action** (« Nous demandons... », « Agissons... »).',
    'Persuasive tools: **questions rhétoriques**, **anaphores** (« Chaque enfant a le droit... Chaque enfant mérite... »), **impératif** and **nous** inclusif, **subjonctif** of wish (« Il faut que chaque village ait une école »).',
    '**Activité pratique:** write a 300-word plaidoyer addressed to the Regional Delegate of Education for the access of all children, including displaced and disabled children, to school.',
  ], 'afr-plaidoyer', 'End with precise demands: who must do what. A plea without a request convinces no one.',
  ['Un plaidoyer se termine par:', ['un appel à l’action', 'une recette', 'une anecdote sans lien', 'une liste de mots'], 'Demands.'],
  [['Plaidoyer', 'An argued text that defends a cause and calls for action.'], ['Constat', 'A statement of the facts of a problem.'], ['Anaphore', 'Repeating the same words at the start of sentences.']],
  [
    { q: 'Write an anaphora of three short sentences on education.', steps: ['Repeat the same opening.', 'Vary the ending.', '**L’école protège. L’école libère. L’école construit l’avenir.**'] },
    { q: 'Write a refutation of: « L’école ne sert à rien dans les villages. »', steps: ['Concede gently.', 'Refute with a reason.', '**On dira que l’école ne sert à rien au village; pourtant, un agriculteur instruit produit mieux et défend mieux ses droits.**'] },
  ]),

  // ---------- 12. IA ----------
  L('afr-ia-1', 'afr-u6-ia', '12.1', 'Intelligence artificielle, désinformation et esprit critique', 17, ['Vocabulaire'], [
    'L’**intelligence artificielle** (IA) désigne des programmes qui **apprennent** à partir de **données** pour accomplir des tâches: traduire, reconnaître une voix ou un visage, rédiger, recommander des contenus. Elle peut aider l’**éducation**, la **santé** et l’**agriculture**.',
    'Ses dérives: les **hypertrucages** (deepfakes: fausses vidéos ou voix), la **désinformation** à grande échelle, les **biais** (l’IA reproduit les erreurs de ses données), la **surveillance**, la **triche** scolaire.',
    'L’**esprit critique**: vérifier la **source**, croiser les **informations**, distinguer **fait** et **opinion**, se méfier de l’**émotion** et de l’**urgence**, faire une **recherche d’image inversée**.',
    'L’**éthique numérique** pose la question de ce qui est **juste**: respect de la vie privée, honnêteté (citer ses sources, ne pas présenter le travail d’une IA comme le sien), responsabilité de ce qu’on publie.',
  ], 'afr-verifier', 'Fact or opinion? Source or rumour? Ask both questions before you believe or share.',
  ['« Le pont a été inauguré hier » est:', ['un fait vérifiable', 'une opinion', 'une rumeur', 'un hypertrucage'], 'It can be checked.'],
  [['Hypertrucage', 'A fake video or voice made with AI (deepfake).'], ['Biais', 'A systematic error that favours one view or group.'], ['Esprit critique', 'The habit of examining information before believing it.']],
  [
    { q: 'Classez: « Ce téléphone est le plus beau » / « Ce téléphone coûte 90 000 FCFA ».', steps: ['A judgement is an opinion.', 'A price can be checked: a fact.', '**Opinion, fait.**'] },
    { q: 'Give two rules of digital ethics for a student using AI.', steps: ['Honesty about authorship.', 'Checking the content.', '**Ne présentez pas un texte produit par une IA comme le vôtre, et vérifiez toujours les informations qu’elle donne.**'] },
  ]),

  L('afr-synthese-1', 'afr-u6-ia', '12.2', 'La synthèse de deux articles divergents', 18, ['Rédaction'], [
    'A **synthèse** brings together the ideas of **several documents** on one subject, **objectively**, without giving your own opinion (unless asked).',
    'Method: read both articles; for each, note the **thèse** and the **arguments**; build a **grille de lecture** (a table with the points in common and the points of disagreement); then write a text organised by **ideas**, not article by article.',
    'Formulas: « **Selon** le premier article..., **tandis que** le second... », « **Les deux auteurs s’accordent** sur... », « **En revanche**, ils **divergent** sur... », « **Pour** l’un..., **pour** l’autre... ».',
    '**Activité pratique:** from two articles, one praising AI in schools and one warning against it, write a 200-word synthèse with an introduction, two parts (accords, désaccords) and a short conclusion.',
  ], 'afr-synthese', 'Organise by ideas, not by article: the reader must see where the two texts meet and where they part.',
  ['Une synthèse objective:', ['présente les points de vue sans prendre parti', 'défend un seul article', 'ajoute des faits inventés', 'recopie les textes'], 'Neutral.'],
  [['Synthèse', 'A text that brings together and compares the ideas of several documents.'], ['Grille de lecture', 'A table used to compare documents point by point.'], ['Diverger', 'To differ in opinion.']],
  [
    { q: 'Write a sentence of synthesis: article A says AI helps students learn faster; article B says it makes them lazy.', steps: ['Present both views.', 'Use tandis que or pour l’un, pour l’autre.', '**Selon le premier article, l’IA aide les élèves à apprendre plus vite, tandis que le second l’accuse de les rendre paresseux.**'] },
    { q: 'Write a sentence on a point of agreement.', steps: ['Use s’accordent sur.', 'Name the shared point.', '**Les deux auteurs s’accordent sur la nécessité de former les enseignants à ces outils.**'] },
  ]),

  // ---------- 13. Condition et concession ----------
  L('afr-condition-1', 'afr-u6-condition', '13.1', 'L’expression de la condition', 17, ['Grammaire'], [
    '**Si** + indicatif (présent, imparfait, plus-que-parfait): see the three si patterns. **Même si** + indicatif adds concession: « Même s’il pleut, nous sortirons. »',
    '**Au cas où** + **conditionnel**: « **Au cas où** le réseau **serait** coupé, utilisez la radio. » **En cas de** + **nom**: « **En cas d’**incendie, sortez par l’escalier. »',
    '**À condition que**, **pourvu que** + **subjonctif**: « Tu pourras sortir **à condition que** tu **aies** fini tes devoirs. » With the same subject: **à condition de** + **infinitif**: « Tu réussiras **à condition de** travailler. »',
    'Other forms: the **gérondif** (« **En travaillant**, tu réussiras »), **sans** + nom (« **Sans** ton aide, j’aurais échoué »), and two clauses in the conditionnel (« Il **viendrait**, je **serais** content »).',
  ], 'afr-condition', 'Check the word, then the mood: au cas où → conditionnel; à condition que → subjonctif; si → indicatif.',
  ['« Pourvu qu’il ___ beau demain ! »', ['fasse', 'fait', 'fera', 'ferait'], 'Pourvu que + subjonctif.'],
  [['Condition', 'What must be true for something to happen.'], ['Au cas où', 'In case: followed by the conditionnel.'], ['Gérondif', 'En + present participle, which can express a condition.']],
  [
    { q: 'Rewrite with « en cas de »: « Si le feu prend, sortez calmement. »', steps: ['Turn the clause into a noun: incendie.', 'En cas de + noun.', '**En cas d’incendie, sortez calmement.**'] },
    { q: 'Rewrite with « à condition que »: « Vous pouvez entrer si vous avez une carte. »', steps: ['À condition que + subjonctif.', 'Avoir → que vous ayez.', '**Vous pouvez entrer à condition que vous ayez une carte.**'] },
  ]),

  L('afr-concession-2', 'afr-u6-condition', '13.2', 'La concession: syntaxe comparée et insertion de connecteurs', 17, ['Grammaire'], [
    'Compare the structures: **bien que / quoique + subjonctif**; **malgré / en dépit de + nom**; **même si + indicatif**; **avoir beau + infinitif** (« Il **a beau** travailler, il échoue »); **quel que soit + nom** (« **Quelle que soit** la difficulté »); **pourtant, cependant, toutefois, néanmoins** between sentences.',
    'One idea, five forms: « **Bien qu’il soit** malade, il travaille. » « **Malgré sa** maladie, il travaille. » « **Même s’il est** malade, il travaille. » « Il **a beau être** malade, il travaille. » « Il est malade; **pourtant**, il travaille. »',
    'Inserting connectors in a text: read the two ideas, decide the link (addition, opposition, concession, cause, consequence, condition), choose the connector, then check the **mood** and the **punctuation** it requires.',
    '**Activité pratique:** a 150-word text has eight gaps; fill each with a connector of condition or concession and justify your choice.',
  ], 'concession-fr', 'Change the structure, change the mood: bien que + subjonctif, même si + indicatif, malgré + nom.',
  ['« Il a beau ___, personne ne l’écoute. »', ['crier', 'crie', 'criait', 'criera'], 'Avoir beau + infinitif.'],
  [['Avoir beau', 'A concessive structure: however much someone does something.'], ['En dépit de', 'Despite: followed by a noun.'], ['Quel que soit', 'Whatever: agrees with the noun.']],
  [
    { q: 'Rewrite with « avoir beau »: « Bien qu’elle révise beaucoup, elle a peur de l’examen. »', steps: ['Avoir beau + infinitif.', 'Elle a beau réviser.', '**Elle a beau réviser beaucoup, elle a peur de l’examen.**'] },
    { q: 'Complete: « ___ (whatever) les difficultés, nous continuerons. »', steps: ['Difficultés: feminine plural.', 'Quelles que soient.', '**Quelles que soient les difficultés, nous continuerons.**'] },
  ]),

  // ---------- 14. Dissertation ----------
  L('afr-dissertation-1', 'afr-u6-dissertation', '14.1', 'Analyser le sujet et construire le plan', 18, ['Rédaction'], [
    'Choose the subject you **understand best** and for which you have **examples**. Underline the **mots clés**, define them, and find the **problème** they raise: this becomes your **problématique**, a question in your own words.',
    'The **plan dialectique**: **thèse** (arguments supporting the statement), **antithèse** (its limits, opposing arguments), **synthèse** (a nuanced answer going beyond the opposition). The **plan thématique**: two or three **aspects** of the subject (économique, social, culturel). The **plan analytique**: **causes, conséquences, solutions**.',
    'Build a **plan détaillé** au brouillon: for each part, two or three arguments, each with an example. Prepare the **transitions**.',
    'Example: « L’école prépare-t-elle vraiment à la vie active ? » Thèse: elle donne des savoirs et des méthodes. Antithèse: elle reste trop théorique, loin de l’emploi. Synthèse: elle y prépare si elle s’ouvre aux stages et à la formation professionnelle.',
  ], 'afr-dissertation', 'A good problématique is a real question: if the answer is obviously yes or no, rewrite it.',
  ['Le plan « causes, conséquences, solutions » est un plan:', ['analytique', 'dialectique', 'chronologique', 'comparatif'], 'For a problem.'],
  [['Plan dialectique', 'A plan in three parts: thèse, antithèse, synthèse.'], ['Plan thématique', 'A plan organised by aspects of the subject.'], ['Mots clés', 'The words of the subject that must be defined.']],
  [
    { q: 'Choose a plan for « La pollution en ville: causes et remèdes ».', steps: ['The subject asks for causes and remedies.', 'An analytical plan fits.', '**Plan analytique: I. Les causes de la pollution; II. Ses conséquences; III. Les solutions.**'] },
    { q: 'Write a problématique for « Faut-il interdire les réseaux sociaux aux mineurs ? »', steps: ['Reword as a real question.', 'Show the tension.', '**Les réseaux sociaux sont-ils un danger dont il faut protéger les mineurs, ou un outil qu’il faut leur apprendre à maîtriser ?**'] },
  ]),

  L('afr-dissertation-2', 'afr-u6-dissertation', '14.2', 'Rédiger la dissertation sous temps limité', 18, ['Rédaction'], [
    'The **introduction**: **accroche** (a fact, a quotation, a proverb, a current event), **présentation du sujet** (reworded, key words defined), **problématique**, **annonce du plan**. It is written in one paragraph.',
    'The **développement**: each part opens with a short introduction, each argument is a paragraph (idée, explication, exemple), and a **transition** sums up a part and announces the next.',
    'The **conclusion**: a **bilan** that answers the problématique clearly, then an **ouverture** onto a wider question. Never introduce a new argument in the conclusion.',
    '**Activité pratique (rédaction chronométrée):** in the time your teacher sets, write a full dissertation on a general or literary subject; spend about a sixth of the time planning and keep the last minutes for proofreading (accords, conjugaisons, ponctuation).',
  ], 'plan-composition-fr', 'Write the introduction and the conclusion on the draft first: they fix the route.',
  ['L’ouverture se trouve:', ['à la fin de la conclusion', 'au début de l’introduction', 'dans la thèse', 'dans chaque paragraphe'], 'Opening onto a wider question.'],
  [['Bilan', 'The summary of the answer at the start of the conclusion.'], ['Accroche', 'The opening that captures the reader’s interest.'], ['Rédaction chronométrée', 'Writing within a fixed time.']],
  [
    { q: 'Write an accroche with a proverb for a subject on solidarity.', steps: ['Choose a fitting proverb.', 'Link it to the subject.', '**« Un seul doigt ne peut pas laver le visage », dit un proverbe africain: la solidarité est au cœur de nos sociétés.**'] },
    { q: 'Write an ouverture for an essay on the school and employment.', steps: ['Open onto a wider issue.', 'Use a question.', '**Au-delà de l’école, ne faudrait-il pas repenser toute la relation entre les jeunes et le monde du travail ?**'] },
  ]),

  // ---------- 15. Épreuves ----------
  L('afr-u6-paper1', 'afr-u6-epreuves', '15.1', 'Épreuve 1: le marathon des QCM', 17, ['Examen'], [
    'In the 2026 session, A Level French (0745) **Paper 1** was a **multiple-choice** paper of **1 h 30** (mercredi 10 juin, matin); **Paper 2** lasted **3 heures** (mercredi 10 juin, après-midi) and **Paper 3** **3 heures** (jeudi 11 juin, matin). Check your year’s timetable.',
    'Paper 1 drills, as the scheme sets them: **orthographe contextuelle** (accords du participe, homophones: a/à, ou/où, ces/ses/c’est, quand/quant), **structures grammaticales** (modes, temps, pronoms, connecteurs), **expressions idiomatiques** (il pleut des cordes, coûter les yeux de la tête, poser un lapin, avoir le cafard), **phonétique** (sons, liaisons, homophones).',
    'Method: read the whole sentence, predict the answer, eliminate the impossible options, decide; mark doubtful items and come back; keep an even pace.',
    'After each drill, add your errors to the **fiche d’erreurs** with the rule.',
  ], 'afr-gce-papers', 'Homophones are free marks: a/à, ou/où, ces/ses, quand/quant. Learn the test for each.',
  ['« Il est allé ___ Bafoussam. »', ['à', 'a', 'as', 'ah'], 'Preposition à; « a » is the verb avoir.'],
  [['Homophone', 'A word pronounced like another but written differently.'], ['Expression idiomatique', 'A fixed expression whose meaning is not literal.'], ['Liaison', 'Linking a final consonant to the next vowel sound.']],
  [
    { q: 'Choose: « ___ livres sont sur la table; ___ mon frère qui les a posés. » (ces/ses/c’est)', steps: ['Pointing at books: ces.', 'It is: c’est.', '**Ces, c’est.**'] },
    { q: 'Explain « poser un lapin à quelqu’un ».', steps: ['Not literal.', 'It is about a missed appointment.', '**Ne pas venir à un rendez-vous sans prévenir.**'] },
  ]),

  L('afr-u6-paper2', 'afr-u6-epreuves', '15.2', 'Épreuve 2: dissertation (Section A) et opérations de texte (Section B)', 18, ['Examen'], [
    'The scheme prepares **Paper 2** in two sections: **Section A**, the **dissertation** (formal structure: introduction, développement, conclusion), and **Section B**, **opérations sur un texte** and **résumés guidés** (questions of comprehension, vocabulary, transformation, résumé with a word count). Read the instructions on the day for choices and marks.',
    'Time plan for a 3-hour paper: read all the subjects and instructions; plan the dissertation; write it; then do the text operations; keep the last minutes for **relecture**.',
    'Section B reminders: answer **with your own words** unless asked to quote; respect the **nombre de mots**; in transformations, change only what is asked and keep the meaning.',
    'Close of the programme (Semaine 21): all national units are finished; the school audits the mark books before the national examination.',
  ], 'afr-epreuve2', 'Split your time before you start, write the times on your draft, and keep to them.',
  ['Dans un résumé guidé, dépasser le nombre de mots:', ['fait perdre des points', 'rapporte des points', 'est obligatoire', 'n’a aucune importance'], 'Respect the limit.'],
  [['Opérations de texte', 'Questions that work on a given text: comprehension, vocabulary, transformation.'], ['Résumé guidé', 'A summary of one aspect of a text, in a set number of words.'], ['Relecture', 'Rereading to correct mistakes.']],
  [
    { q: 'Plan the time of a 3-hour paper with a dissertation and text operations.', steps: ['Planning and reading: about 20 minutes.', 'Dissertation: about 1 h 30; text operations: about 50 minutes.', '**The last 10 to 15 minutes: relecture.**'] },
    { q: 'A question asks: « Expliquez avec vos propres mots ». What must you avoid?', steps: ['Copying sentences from the text.', 'Reformulate.', '**Recopier les phrases du texte: il faut reformuler.**'] },
  ]),

  // ---------- 16. Examen blanc ----------
  L('afr-u6-mock', 'afr-u6-final', '16.1', 'L’examen blanc et la gestion du temps', 16, ['Examen'], [
    'The **examen blanc** régional or national (Semaine 25) reproduces the GCE under real conditions: same length, same rules, a strict timetable. It measures your **gestion du temps** and your **gestion du stress**.',
    'Before: revise from your fiches, prepare your materials, sleep. During: read all instructions, plan, write the times on your draft, never leave a question empty, proofread. After: wait for the correction calmly.',
    'Managing stress: breathe slowly, start with the question you know best, do not panic over one difficult item, keep moving.',
    'Les **congés de Pâques** (Semaine 26) are a good time for a personal timed revision plan.',
  ], 'mock-cycle', 'Treat the mock as the real GCE: the habits you build that day are the ones you will have in June.',
  ['Pendant l’examen blanc, si une question est difficile, il vaut mieux:', ['la marquer et y revenir plus tard', 'y passer tout le temps', 'quitter la salle', 'la recopier'], 'Keep moving.'],
  [['Examen blanc', 'A full practice examination under real conditions.'], ['Gestion du temps', 'Planning how long to spend on each part.'], ['Gestion du stress', 'Keeping calm to work well.']],
  [
    { q: 'Write three pieces of advice for the evening before the mock.', steps: ['Light revision.', 'Materials and sleep.', '**Relisez vos fiches, préparez votre matériel et couchez-vous tôt.**'] },
    { q: 'You have 1 h 30 for 50 MCQ items. How long per item, and what margin for review?', steps: ['90 minutes for 50 items: under 2 minutes each.', 'Aim for about 1.5 minutes per item.', '**About 75 minutes for the items and 15 minutes to review doubtful ones.**'] },
  ]),

  L('afr-u6-remediation', 'afr-u6-final', '16.2', 'Remédiation post-examen blanc et rapports des correcteurs', 17, ['Examen'], [
    'The collective correction of the mock focuses on what **markers’ reports** note year after year: **misreading the instructions** (hors-sujet), **not respecting the word count** in résumés, and **syntax errors** that cost many marks (si + conditionnel, malgré que, accords du participe, confusions de modes).',
    'For each error type: find the **rule**, write two correct examples, and redo the exercise. Redo a question you failed one week later without looking at the correction.',
    'Final revision: the **fiche d’erreurs**, the **plans types** (dissertation, résumé, lettre), the **connecteurs**, the **concordance des temps**, the **subjonctif**.',
    'Semaine 28+: the national written phase of the GCE Advanced Level begins. Arrive early, bring your materials and your identity documents, and follow every instruction.',
  ], 'afr-erreurs', 'Fix the cause of each error, not just the sentence: a rule learnt saves marks in every paper.',
  ['« Malgré qu’il pleuve » est à corriger en:', ['« Bien qu’il pleuve » ou « Malgré la pluie »', '« Malgré qu’il pleut »', '« Malgré il pleut »', '« Malgré qu’il pleuvait »'], 'Malgré + nom; bien que + subjonctif.'],
  [['Remédiation', 'Work to correct weaknesses found in a test.'], ['Hors-sujet', 'An answer that does not deal with the subject set.'], ['Rapport des correcteurs', 'The examiners’ report on common candidate errors.']],
  [
    { q: 'Correct and give the rule: « Les lettres qu’il a écrit sont arrivées. »', steps: ['The direct object « les lettres » comes before avoir.', 'The participle agrees: feminine plural.', '**Les lettres qu’il a écrites sont arrivées (accord avec le COD placé avant).**'] },
    { q: 'Correct: « Si j’aurais plus de temps, je lirais davantage. »', steps: ['No conditionnel after si.', 'Si + imparfait.', '**Si j’avais plus de temps, je lirais davantage.**'] },
  ]),
];
