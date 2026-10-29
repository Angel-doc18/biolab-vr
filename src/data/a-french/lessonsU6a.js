// A Level French lessons (0745), Upper Sixth, Term 1: rural exodus and
// debate, culture and the argumentative paragraph, textual cohesion, youth
// entrepreneurship, the digital economy and the oral exposé, the subjonctif
// and the conditionnel passé, and the résumé de texte. Explanations are in
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

export const LESSONS_FU6A = [
  // ---------- 1. Société ----------
  L('afr-exode-1', 'afr-u6-societe', '1.1', 'L’exode rural: causes, conséquences et expression de la conséquence', 17, ['Vocabulaire'], [
    'Diagnostic review: the year starts with a test on Lower Sixth points and the **critères de notation** of the GCE (content, organisation, language accuracy, respect of instructions). Note your three most frequent errors.',
    'L’**exode rural** est le départ massif des habitants des campagnes vers les villes. **Causes**: le manque d’**emplois** et d’**infrastructures** (routes, électricité, écoles), la recherche d’une vie meilleure, l’attrait de la ville. **Conséquences** au village: **vieillissement** de la population, **abandon des champs**, baisse de la production agricole. En ville: **chômage**, **quartiers précaires**, **délinquance**, pression sur les services.',
    'Social conflicts: les **ruptures familiales** (divorce, séparation, enfants confiés), le **fossé intergénérationnel**, la **médiation** (le médiateur **écoute**, **apaise**, **propose un compromis**).',
    'Consequence: **donc, ainsi, c’est pourquoi, par conséquent** (between sentences); **si bien que, de sorte que** + indicatif (a clause); **d’où** + nom: « Les jeunes partent, **d’où** le vieillissement des villages. » « Il n’y a pas de route, **si bien que** les récoltes pourrissent. »',
  ], 'afr-exode', 'For any social problem, organise your ideas as causes, consequences and solutions.',
  ['« Les écoles manquent au village, ___ les familles partent en ville. »', ['si bien que', 'bien que', 'pour que', 'malgré'], 'Consequence + indicatif.'],
  [['Exode rural', 'The large-scale movement of people from the countryside to towns.'], ['Quartier précaire', 'An unplanned poor neighbourhood.'], ['Conséquence', 'A result of a cause.']],
  [
    { q: 'Join with « d’où »: « Les jeunes quittent les villages. Les champs sont abandonnés. »', steps: ['D’où + a noun phrase.', 'Turn the result into a noun: l’abandon des champs.', '**Les jeunes quittent les villages, d’où l’abandon des champs.**'] },
    { q: 'Give one cause, one consequence and one solution of rural exodus.', steps: ['A cause: lack of jobs.', 'A consequence: ageing villages; a solution: rural development.', '**Le manque d’emplois pousse les jeunes à partir, ce qui vieillit les villages; il faudrait développer des activités agricoles modernes à la campagne.**'] },
  ]),

  L('afr-debat-1', 'afr-u6-societe', '1.2', 'Le débat dirigé: prendre la parole et argumenter', 15, ['Expression orale'], [
    'In a **débat dirigé**, a **modérateur** gives the floor, controls time and sums up. Speakers **demandent la parole**, **exposent** un argument, **réfutent** poliment et **concluent**.',
    'Giving an opinion: **à mon avis**, **selon moi**, **je pense que** (+ indicatif), **je suis convaincu que**, **il me semble que**. Agreeing: **je suis d’accord avec**, **vous avez raison de dire que**. Disagreeing politely: **je ne partage pas tout à fait votre avis**, **permettez-moi de nuancer**, **certes..., mais...**.',
    'Courtesy rules: never interrupt, address others with **vous**, attack the **idea** and not the person, support each claim with an **example**.',
    '**Activité pratique (débat dirigé):** « Les causes de l’exode rural au Cameroun »: in groups, prepare three arguments and one rebuttal, then debate for 20 minutes with a moderator.',
  ], 'afr-debat', 'Use « certes..., mais... » to concede before you disagree: it sounds fair and strong.',
  ['Pour nuancer poliment l’avis d’un autre, on dit:', ['« Permettez-moi de nuancer votre propos. »', '« C’est n’importe quoi. »', '« Tais-toi. »', '« Tu ne sais rien. »'], 'Courteous disagreement.'],
  [['Débat dirigé', 'A structured debate led by a moderator.'], ['Modérateur', 'The person who leads a debate and gives the floor.'], ['Réfuter', 'To show that an argument is wrong.']],
  [
    { q: 'Disagree politely with: « L’exode rural n’a que des avantages. »', steps: ['Concede with certes.', 'Then oppose with mais and an example.', '**Certes, la ville offre plus d’emplois, mais l’exode vide nos villages de leurs forces vives.**'] },
    { q: 'Open your turn in the debate.', steps: ['Ask for the floor politely.', 'State your position.', '**Monsieur le modérateur, je voudrais prendre la parole: à mon avis, le manque d’infrastructures est la première cause de l’exode rural.**'] },
  ]),

  // ---------- 2. Culture ----------
  L('afr-culture-1', 'afr-u6-culture', '2.1', 'Traditions et modernité, brassage culturel', 16, ['Vocabulaire'], [
    'La **modernité** (technologies, ville, mode, nouvelles valeurs) et la **tradition** (coutumes, langues locales, rites, autorité des aînés) se rencontrent. Les uns parlent de **perte des valeurs**, les autres d’**enrichissement**.',
    'Le **brassage culturel** naît des mariages mixtes, des migrations internes, de l’école et des médias. Le **multiculturalisme** reconnaît la coexistence de plusieurs cultures; l’**intégration nationale** les unit autour de valeurs communes.',
    'Advantages of multiculturalism: **enrichissement mutuel**, **ouverture d’esprit**, **tolérance**, richesse **artistique** et **culinaire**, atout **touristique**. Risks if badly managed: **repli identitaire**, **tribalisme**, **discriminations**.',
    'Useful verbs: **préserver**, **valoriser**, **transmettre**, **s’adapter**, **concilier** (tradition et modernité).',
  ], 'afr-multiculture', 'Avoid all-or-nothing answers: show how tradition and modernity can be reconciled.',
  ['Le repli identitaire est:', ['le fait de se fermer sur son propre groupe', 'l’ouverture aux autres', 'le dialogue', 'le brassage'], 'Withdrawal into one’s group.'],
  [['Modernité', 'New ways of living, thinking and producing.'], ['Brassage culturel', 'The mixing of cultures.'], ['Concilier', 'To reconcile two things that seem opposed.']],
  [
    { q: 'Write a sentence that reconciles tradition and modernity.', steps: ['Name one element of each.', 'Link them positively.', '**On peut utiliser Internet pour enregistrer les contes de nos grands-parents et les transmettre aux jeunes.**'] },
    { q: 'Give two advantages of multiculturalism with « de plus ».', steps: ['First advantage.', 'Add the second with de plus.', '**Le multiculturalisme développe la tolérance; de plus, il enrichit la cuisine et la musique du pays.**'] },
  ]),

  L('afr-paragraphe-2', 'afr-u6-culture', '2.2', 'Rédiger un paragraphe argumentatif', 16, ['Rédaction'], [
    'An **argumentative paragraph** develops **one argument**: the **idée directrice** (topic sentence) states it; the **explication** develops it; the **exemple** proves it, precise and if possible local; a **phrase de conclusion** or transition ends it.',
    'Model: « **Le multiculturalisme est d’abord une source d’enrichissement.** En effet, chaque peuple apporte ses savoirs, ses arts et sa cuisine. **Par exemple**, le ndolé, plat des Sawa, est aujourd’hui apprécié dans tout le pays. **Ainsi**, la diversité profite à tous. »',
    'Check: one argument only; a connector at each step (d’abord, en effet, par exemple, ainsi); an example that really proves the idea; correct agreement and tenses.',
    '**Activité pratique:** write a paragraph of about 120 words on « Les avantages du multiculturalisme », following the four steps.',
  ], 'afr-paragraphe-plan', 'Idée, explication, exemple, conclusion: four steps, four connectors.',
  ['Dans un paragraphe argumentatif, l’exemple sert à:', ['prouver l’idée', 'changer de sujet', 'conclure le devoir', 'remplacer l’idée'], 'Support.'],
  [['Idée directrice', 'The main idea of a paragraph, stated first.'], ['Explication', 'The development of an idea.'], ['Exemple', 'A precise case that proves an idea.']],
  [
    { q: 'Write an idée directrice for a paragraph on « les dangers du tribalisme ».', steps: ['State one argument clearly.', 'Keep it general.', '**Le tribalisme menace d’abord l’unité nationale.**'] },
    { q: 'Add an example to: « Les langues nationales sont un patrimoine précieux. »', steps: ['Name real languages.', 'Show their value.', '**Par exemple, le fulfulde, le bassa ou le duala portent des proverbes et des contes transmis depuis des siècles.**'] },
  ]),

  // ---------- 3. Texte ----------
  L('afr-cohesion-1', 'afr-u6-texte', '3.1', 'Les outils de la cohésion textuelle', 17, ['Rédaction'], [
    'A text is **cohérent** when its ideas follow logically, and **cohésif** when the sentences are linked by grammar and vocabulary.',
    '**Connecteurs complexes**: addition (**par ailleurs, en outre, de surcroît**), opposition (**en revanche, néanmoins, toutefois, or**), cause (**en effet, étant donné que**), conséquence (**ainsi, c’est pourquoi, dès lors, par conséquent**), conclusion (**en définitive, somme toute**).',
    '**Reprises** avoid repetition: **pronominale** (il, elle, celui-ci, ce dernier), **lexicale** by a synonym or a general word (le président → le chef de l’État; la mangue → ce fruit), **nominale** (cette décision, ce phénomène).',
    '**Progression**: each sentence starts from what is known and adds something new. A paragraph without connectors or reprises reads like a list.',
  ], 'afr-cohesion', 'Replace each repeated noun by a pronoun or a synonym, and check that each pronoun clearly points back.',
  ['Dans « Le maire a parlé. Ce dernier a promis des routes », « ce dernier » est:', ['une reprise pronominale', 'un connecteur', 'un adjectif', 'une préposition'], 'It points back to le maire.'],
  [['Cohésion', 'The linking of sentences by grammar and vocabulary.'], ['Reprise', 'A word that refers back to something already mentioned.'], ['Connecteur', 'A word that shows the logical link between ideas.']],
  [
    { q: 'Improve: « Le cacao est cultivé au Sud. Le cacao est exporté. Le cacao rapporte des devises. »', steps: ['Use reprises and connectors.', 'Le cacao → cette culture, il.', '**Le cacao est cultivé au Sud; il est ensuite exporté. Ainsi, cette culture rapporte des devises.**'] },
    { q: 'Join with a connector of opposition: « La ville offre des emplois. Elle coûte cher. »', steps: ['Opposition between two facts.', 'En revanche or néanmoins.', '**La ville offre des emplois; en revanche, elle coûte cher.**'] },
  ]),

  L('afr-reconstruction-1', 'afr-u6-texte', '3.2', 'Reconstruction de texte: remettre un texte en ordre', 16, ['Rédaction'], [
    'A **reconstruction** task gives the sentences or paragraphs of a text in disorder; you must restore the **logical order**.',
    'Method: find the **introduction** (general idea, no pronoun pointing back, no connector of consequence); follow the **reprises** (a sentence with « il » or « ce phénomène » comes after the sentence that names it); follow the **connecteurs** (d’abord, ensuite, enfin; en effet after a claim; c’est pourquoi after a cause); find the **conclusion** (en somme, ainsi, bilan).',
    'Also use **time** (dates, verb tenses) and **logic** (cause before consequence, problem before solution).',
    'Reread the whole text in your order: each sentence must lead naturally to the next.',
  ], 'afr-reconstruction', 'A sentence that starts with a pronoun or « en effet » can never be first.',
  ['Une phrase qui commence par « C’est pourquoi » se place:', ['après la cause qu’elle explique', 'au début du texte', 'avant l’introduction', 'n’importe où'], 'Consequence follows cause.'],
  [['Reconstruction', 'Restoring the logical order of a jumbled text.'], ['Indice', 'A clue such as a pronoun or a connector.'], ['Progression logique', 'The order in which ideas follow each other.']],
  [
    { q: 'Order: (a) C’est pourquoi l’État construit des barrages. (b) Le pays manque d’électricité. (c) Ces ouvrages fourniront bientôt du courant aux villages.', steps: ['(b) states the problem: first.', '(a) gives the response; (c) refers back with « ces ouvrages ».', '**b, a, c.**'] },
    { q: 'Which sentence can open a text: « Ce dernier est fatigué. » or « Le paysan se lève à l’aube. »?', steps: ['« Ce dernier » points back to someone already named.', 'The other names its subject.', '**« Le paysan se lève à l’aube. »**'] },
  ]),

  // ---------- 4. Entrepreneuriat ----------
  L('afr-entrepreneur-1', 'afr-u6-emploi', '4.1', 'L’auto-emploi et la gestion de projet', 16, ['Vocabulaire'], [
    'Faced with **chômage** and **sous-emploi**, many young Cameroonians choose l’**auto-emploi**: **créer sa propre activité** in agriculture (élevage, transformation), the digital economy, crafts or services.',
    'The steps of a **projet**: trouver une **idée**, faire une **étude de marché** (besoins, clients, concurrents), rédiger un **business plan** (plan d’affaires), chercher le **financement** (épargne, tontine, microfinance, prêt, subvention), **lancer** l’activité, assurer le **suivi** et l’**évaluation**.',
    'Business vocabulary: le **capital de départ**, le **chiffre d’affaires**, les **charges**, le **bénéfice**, la **rentabilité**, le **fonds de roulement**, l’**investissement**, le **promoteur**.',
    'Qualities of an **entrepreneur**: créativité, persévérance, sens de l’organisation, honnêteté, capacité à prendre des risques mesurés.',
  ], 'afr-projet', 'Every project question has the same backbone: idea, market, money, launch, follow-up.',
  ['L’étude de marché permet de:', ['connaître les clients et les concurrents', 'payer les employés', 'imprimer les factures', 'fermer l’entreprise'], 'Know the market.'],
  [['Auto-emploi', 'Creating one’s own job.'], ['Business plan', 'A written plan of a project with its market, costs and expected income.'], ['Rentabilité', 'The ability of an activity to make a profit.']],
  [
    { q: 'Order: le financement, l’idée, le lancement, l’étude de marché, le suivi.', steps: ['The idea comes first, then the market study.', 'Money before launch; follow-up last.', '**L’idée, l’étude de marché, le financement, le lancement, le suivi.**'] },
    { q: 'Describe a small agricultural project in two sentences.', steps: ['Name the activity and the market.', 'Mention funding.', '**Je voudrais créer une petite unité de transformation du manioc en gari pour les marchés de la ville. Je la financerais grâce à ma tontine et à un prêt de microfinance.**'] },
  ]),

  L('afr-motivation-1', 'afr-u6-emploi', '4.2', 'La lettre de motivation pour le financement d’un projet', 17, ['Rédaction'], [
    'The layout is that of the **lettre administrative**: expéditeur, lieu et date, destinataire (Monsieur le Directeur du Fonds..., Monsieur le Délégué régional...), **objet** (Demande de financement d’un projet d’élevage), appel.',
    'Body: **présentation** (who you are), **le projet** (what, where, for whom), **les atouts** (your skills, the market study, the expected results: emplois créés, revenus), **la demande** précise (montant, forme de l’appui), and an offer to give more details.',
    'Formulas: « J’ai l’honneur de solliciter votre appui financier pour... », « Ce projet permettra de créer trois emplois », « Je joins à la présente mon business plan », « Dans l’attente d’une suite favorable, veuillez agréer, Monsieur le Directeur, l’expression de ma haute considération. »',
    '**Activité pratique:** write a 250-word letter asking a youth fund to finance your project, with the conditionnel for expected results and the futur for commitments.',
  ], 'lettre-emploi', 'Give numbers: the amount asked, the jobs created, the time needed. Precise letters convince.',
  ['« Je joins à la présente mon business plan » signifie:', ['j’envoie mon business plan avec cette lettre', 'j’ai perdu mon business plan', 'je refuse le financement', 'je demande un emploi'], 'Enclosure.'],
  [['Lettre de motivation', 'A letter explaining why one deserves a post or funding.'], ['Appui financier', 'Financial support.'], ['Pièce jointe', 'A document sent with a letter.']],
  [
    { q: 'Write the objet and the appel of a letter to the Regional Delegate for Youth.', steps: ['Objet: what is requested.', 'Appel: his title.', '**Objet: Demande de financement d’un projet de pisciculture. Monsieur le Délégué régional,**'] },
    { q: 'State the expected results in one sentence with the conditionnel.', steps: ['Give jobs and income.', 'Use permettrait.', '**Ce projet permettrait de créer quatre emplois et de produire deux tonnes de poisson par an.**'] },
  ]),

  // ---------- 5. Économie numérique ----------
  L('afr-ecommerce-1', 'afr-u6-numerique', '5.1', 'Le commerce électronique et le mobile money', 16, ['Vocabulaire'], [
    'Le **commerce électronique** (e-commerce) permet d’acheter et de vendre **en ligne**: sites marchands, réseaux sociaux, applications de livraison. Le client **commande**, **paie** par carte ou par **mobile money**, et se fait **livrer**.',
    'Le **mobile money** transforme le téléphone en porte-monnaie: **dépôt**, **retrait**, **transfert**, **paiement** de factures et de frais de scolarité. **Avantages**: rapidité, accès pour ceux qui n’ont pas de compte bancaire (l’**inclusion financière**), sécurité par rapport à l’argent liquide.',
    '**Dangers**: les **arnaques** (faux messages, faux agents), les **frais de transaction**, l’**endettement** par les petits prêts en ligne, la perte du téléphone, le **piratage** du code.',
    'La **digitalisation** des services (impôts, inscriptions, factures d’eau et d’électricité) fait gagner du temps mais exige une bonne **connexion** et des usagers formés.',
  ], 'afr-mobile-money', 'For an exposé on mobile money, two columns: avantages and dangers, each with an example.',
  ['L’inclusion financière désigne:', ['l’accès aux services financiers pour ceux qui en étaient exclus', 'la fermeture des banques', 'la hausse des taxes', 'la fraude'], 'Access for all.'],
  [['Commerce électronique', 'Buying and selling online.'], ['Inclusion financière', 'Access to financial services for those without them.'], ['Frais de transaction', 'Fees charged on a transfer or payment.']],
  [
    { q: 'Give one advantage and one danger of mobile money in one sentence with « mais ».', steps: ['Advantage: speed or access.', 'Danger: fraud.', '**Le mobile money permet d’envoyer de l’argent en quelques secondes, mais il expose aussi aux arnaques par faux messages.**'] },
    { q: 'Complete: « J’ai ___ mes frais de scolarité par téléphone et j’ai reçu un ___ de confirmation. »', steps: ['Pay: payé.', 'Confirmation: message (SMS).', '**payé, message (SMS).**'] },
  ]),

  L('afr-expose-1', 'afr-u6-numerique', '5.2', 'L’exposé oral', 15, ['Expression orale'], [
    'An **exposé** is an oral presentation on a subject, usually 5 to 10 minutes. Prepare: research, select the key ideas, write a **plan**, note **mots clés** on cards (never read a full text).',
    'Structure: **introduction** (greeting, subject, why it matters, **annonce du plan**: « Mon exposé comporte deux parties »), **développement** (parts with signposts: « Dans un premier temps..., Passons maintenant à... »), **conclusion** (bilan, opinion, thanks: « Je vous remercie de votre attention. »).',
    'Delivery: **regarder** le public, parler **clairement** et **lentement**, varier le ton, utiliser un support (tableau, affiche), respecter le **temps**, répondre aux **questions** avec calme.',
    '**Activité pratique (exposé oral):** present « Les dangers et les avantages du mobile money » in 7 minutes to the class, then answer three questions.',
  ], 'afr-expose', 'Write only key words on your card: it forces you to speak to the audience, not to the paper.',
  ['« Passons maintenant à la deuxième partie » est:', ['une transition', 'une conclusion', 'une salutation', 'un exemple'], 'Signpost.'],
  [['Exposé', 'A prepared oral presentation.'], ['Mots clés', 'Key words noted to guide speaking.'], ['Transition', 'A phrase that moves from one part to the next.']],
  [
    { q: 'Write the introduction of an exposé on e-commerce (3 sentences).', steps: ['Greet and name the subject.', 'Say why it matters, then announce the plan.', '**Bonjour à tous. Mon exposé porte sur le commerce électronique, qui change nos habitudes d’achat. Je présenterai d’abord ses avantages, puis ses limites.**'] },
    { q: 'Write a closing sentence for an exposé.', steps: ['Sum up briefly.', 'Thank the audience.', '**En somme, le commerce électronique est utile s’il est sécurisé. Je vous remercie de votre attention.**'] },
  ]),

  // ---------- 6. Verbes ----------
  L('afr-subjonctif-1', 'afr-u6-verbes', '6.1', 'Le subjonctif présent: souhait, nécessité, sentiment, doute', 17, ['Grammaire'], [
    'Form: stem of « ils » in the present + **-e, -es, -e, -ions, -iez, -ent**: qu’ils **finiss**ent → que je finisse. Irregular: **être** (que je sois, que nous soyons), **avoir** (que j’aie, qu’il ait), **faire** (que je fasse), **aller** (que j’aille, que nous allions), **pouvoir** (que je puisse), **savoir** (que je sache), **vouloir** (que je veuille), **venir** (que je vienne, que nous venions).',
    'Use it after expressions of **volonté et souhait** (vouloir que, souhaiter que, exiger que), **nécessité** (il faut que, il est nécessaire que, il est important que), **sentiment** (être content que, regretter que, avoir peur que), **doute** (douter que, ne pas penser que, il est possible que).',
    'Use the **indicatif** after certainty and opinion in the affirmative: **je pense que, je crois que, il est certain que, il est probable que, espérer que**: « J’**espère** qu’il **viendra**. » But « Je **ne pense pas** qu’il **vienne**. »',
    'The subjunctive needs **two different subjects**; with one subject use the infinitive: « Je veux **partir** » (not « je veux que je parte »).',
  ], 'afr-subjonctif', 'Will, need, feeling, doubt → subjonctif; certainty, opinion, hope → indicatif.',
  ['« Je regrette que tu ne ___ pas venir. »', ['puisses', 'peux', 'pourras', 'pouvais'], 'Feeling: subjonctif.'],
  [['Subjonctif', 'The mood of wish, necessity, feeling and doubt.'], ['Indicatif', 'The mood of facts and certainty.'], ['Volonté', 'Will or wish, which calls for the subjonctif.']],
  [
    { q: 'Mettez le verbe au mode correct: « Il est certain qu’il (réussir). » / « Il est possible qu’il (réussir). »', steps: ['Certainty → indicatif: réussira (or réussit).', 'Possibility → subjonctif: réussisse.', '**réussira, réussisse.**'] },
    { q: 'Transform: « Tu dois faire attention. » Begin: « Il faut que... »', steps: ['Il faut que + subjonctif.', 'Faire → que tu fasses.', '**Il faut que tu fasses attention.**'] },
  ]),

  L('afr-condpasse-1', 'afr-u6-verbes', '6.2', 'Le conditionnel passé: regret et hypothèse non réalisée', 16, ['Grammaire'], [
    'Form: **avoir** or **être** in the conditionnel présent + **participe passé**: j’**aurais** travaillé, elle **serait** partie, nous **nous serions** rencontrés.',
    'Uses: a **regret** or **reproach** about the past: « J’**aurais dû** écouter », « Tu **aurais pu** prévenir » ; the result of an **unrealised past condition**: « **Si** nous **avions planté** des arbres, le sol **n’aurait pas été** emporté. » ; an **unconfirmed fact** in the news: « L’accident **aurait fait** trois blessés » (according to unconfirmed reports).',
    'The three si patterns: si + présent → futur (possible); si + imparfait → conditionnel présent (unreal now); **si + plus-que-parfait → conditionnel passé** (unreal past).',
    'Transformation drills: rewrite facts as regrets (« Je n’ai pas révisé, j’ai échoué » → « Si j’avais révisé, je n’aurais pas échoué »).',
  ], 'afr-hypotheses', 'Si + plus-que-parfait looks back at a past that did not happen: the result goes in the conditionnel passé.',
  ['« Si tu m’avais appelé, je ___. »', ['serais venu', 'viendrais', 'viendrai', 'suis venu'], 'Unreal past.'],
  [['Conditionnel passé', 'Avoir or être in the conditionnel + participle.'], ['Regret', 'Sorrow about a past action or failure.'], ['Hypothèse irréelle du passé', 'A condition about the past that did not happen.']],
  [
    { q: 'Transform into a regret: « Je n’ai pas pris mon parapluie, j’ai été mouillé. »', steps: ['Si + plus-que-parfait (positive now).', 'Result in the conditionnel passé (negative).', '**Si j’avais pris mon parapluie, je n’aurais pas été mouillé.**'] },
    { q: 'Explain the conditionnel in: « Le suspect aurait quitté le pays. »', steps: ['It reports a fact not confirmed.', 'Journalistic use.', '**The suspect has reportedly left the country: the information is not confirmed.**'] },
  ]),

  // ---------- 7. Résumé ----------
  L('afr-resume-2', 'afr-u6-resume', '7.1', 'Le résumé: repérer les idées maîtresses', 18, ['Résumé'], [
    'Read the text **twice**, then name its **thème** (what it is about) and its **thèse** (what the author thinks about it). Number the paragraphs.',
    'In each paragraph, find the **idée maîtresse**: often in the first or last sentence, often announced by a connector (en effet, mais, donc). Everything else is **illustration**: exemples, chiffres, anecdotes, citations, comparaisons, répétitions.',
    'Note the ideas in a **plan** with arrows showing the **logic** (cause → conséquence; argument → objection). The résumé must keep this logic and the **order** of the text, in the **voice** of the author (no « l’auteur dit que »).',
    'Reformulate with **termes génériques** (les fruits, les moyens de transport), **nominalisations** (« les prix ont augmenté » → « la hausse des prix »), and short constructions.',
  ], 'afr-resume-etapes', 'If you can cross a sentence out and the argument still stands, it was an illustration.',
  ['« En 2025, le prix du riz est passé de 18 000 à 23 000 FCFA » est:', ['une illustration chiffrée', 'l’idée maîtresse', 'la thèse', 'une conclusion'], 'A figure illustrates.'],
  [['Idée maîtresse', 'The essential idea of a paragraph.'], ['Thèse', 'The author’s position on the theme.'], ['Nominalisation', 'Turning a verb or adjective into a noun to save words.']],
  [
    { q: 'Nominalise: « Les jeunes partent en ville, et les villages se vident. »', steps: ['Partent → le départ; se vident → le dépeuplement.', 'Link with a noun phrase.', '**Le départ des jeunes vers la ville entraîne le dépeuplement des villages.**'] },
    { q: 'Find the idée maîtresse: « On le voit à Douala comme à Yaoundé: les embouteillages coûtent des heures de travail. Les livreurs arrivent en retard, les élèves manquent les cours. »', steps: ['Douala, Yaoundé, livreurs, élèves are examples.', 'The point is the cost of traffic jams.', '**Les embouteillages font perdre beaucoup de temps et nuisent aux activités.**'] },
  ]),

  L('afr-resume-3', 'afr-u6-resume', '7.2', 'Respecter le nombre de mots: de 250 à 50 mots', 18, ['Résumé'], [
    'Reducing **250 words to 50** keeps about **one word in five**: a text of five paragraphs gives five ideas of about **ten words** each.',
    'Save words: **nominalise**, use **termes génériques**, cut empty phrases (« il est important de noter que »), use precise verbs (« faire diminuer » → « réduire »), join ideas with **connecteurs** rather than repeating subjects.',
    'Count every word as your teacher and the instructions say, and indicate the total if asked (« 50 mots »). Follow the instruction exactly: exceeding the limit is penalised.',
    '**Activité pratique (contraction de texte):** reduce a 250-word article on informal trade to 50 words, then compare with a partner: same ideas, same order, no example?',
  ], 'afr-resume-budget', 'Plan the budget: count the ideas, divide the word limit, then write.',
  ['Un texte de 250 mots en cinq paragraphes, résumé en 50 mots, donne environ:', ['dix mots par idée', 'cinquante mots par idée', 'deux mots par idée', 'cent mots par idée'], '50 ÷ 5.'],
  [['Contraction de texte', 'Reducing a text to a fixed number of words.'], ['Terme générique', 'A word that covers several specific ones.'], ['Nombre de mots', 'The word count required by the instructions.']],
  [
    { q: 'Cut to about 8 words: « Il est important de souligner que les femmes jouent un rôle très important dans l’agriculture du pays. »', steps: ['Remove the empty opening.', 'Keep the core with a strong verb.', '**Les femmes jouent un rôle essentiel dans l’agriculture. (8 mots)**'] },
    { q: 'A text has 4 main ideas and the limit is 40 words. Plan the budget.', steps: ['Divide 40 by 4.', 'Leave a few words for connectors.', '**About 9 words per idea, plus connectors to link them.**'] },
  ]),
];
