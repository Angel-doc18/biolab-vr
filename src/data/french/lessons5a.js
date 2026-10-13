// French lessons for Form 5, term 1: family and social life, and economic
// life and occupations, at GCE Ordinary Level standard. Explanations are in
// English for the learner; every example, word list and model text is in
// French. Original text written for this app. **double asterisks** mark key
// terms; `examples` are worked examples.

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

export const LESSONS_5A = [
  // ---------- Se présenter ----------
  L('fr-sepresenter-5', 'fr-f5-presentation', '1.1', 'Se présenter et présenter quelqu’un', 13, ['Communication', 'Expression orale'], [
    'To **present yourself** (se présenter) at an interview, a meeting or a youth association, give your details in a clear order:\n- your name: « Je m’appelle Ngum Brenda. » or, more formally, « Je me nomme… »\n- your age: « J’**ai** seize ans. » (age always takes **avoir**)\n- your class and school: « Je suis élève en Form 5 au lycée bilingue de Bamenda. »\n- your origin and home: « Je suis **originaire** de Kumbo, mais j’habite à Bamenda. »\n- your languages: « Je parle anglais, français et lamnso. »\n- your interests and plans: « J’aime le football et la lecture. Plus tard, je voudrais devenir ingénieure. »',
    'To **present another person** (présenter quelqu’un), the register depends on the situation:\n- formal: « **Permettez-moi de vous présenter** Monsieur Fon, notre proviseur. » « **Je vous présente** Madame Abena, présidente de l’association. » « **J’ai l’honneur de vous présenter**… »\n- informal: « **Voici** mon cousin Eric. » « **Je te présente** Awa, ma voisine. » « C’est mon ami Paul. »\nThe person introduced answers: « **Enchanté(e).** » « **Ravi(e) de faire votre connaissance.** » « Très heureux de vous connaître. » Among friends: « Salut ! Ça va ? »',
    'To ask someone about themselves, use « vous » with an adult or a stranger: « Comment vous appelez-vous ? » « Quel âge avez-vous ? » « D’où venez-vous ? » « **Que faites-vous dans la vie ?** » « Quelle est votre profession ? » With a classmate: « Tu t’appelles comment ? » « Tu viens d’où ? » In writing, the inverted question (« Où habitez-vous ? ») is the most correct form.',
  ], 'presentation-fr', 'Age takes « avoir »: « J’ai seize ans », never « Je suis seize ans ».',
  ['At a formal meeting, which sentence introduces the principal correctly?', ['« Permettez-moi de vous présenter notre proviseur. »', '« Salut, c’est le proviseur, quoi. »', '« Le proviseur, je te le présente. »', '« Voilà le type qui dirige. »'], '« Permettez-moi de vous présenter… » is the formal formula.'],
  [['Se présenter', 'To introduce oneself.'], ['Être originaire de', 'To come from (a place of origin).'], ['Enchanté(e)', 'Pleased to meet you.'], ['Faire la connaissance de quelqu’un', 'To meet someone for the first time.']],
  [
    { q: 'Write four sentences to present yourself at the first meeting of the school press club.', steps: ['Give the name, age and class, then a reason for joining.', '**« Bonjour à tous. Je m’appelle Tabe Junior. J’ai dix-sept ans et je suis élève en Form 5 B. J’aime écrire et je voudrais devenir journaliste. »**'] },
    { q: 'Introduce a new student, Fatima, to your teacher, then to your best friend.', steps: ['To the teacher (formal, « vous »): **« Madame, je vous présente Fatima. Elle vient de Maroua et elle est nouvelle dans notre classe. »**', 'To the friend (informal, « tu »): **« Kevin, voici Fatima, notre nouvelle camarade. »**'] },
  ]),

  L('fr-generations-5', 'fr-f5-presentation', '1.2', 'La parenté, le conflit des générations et la lecture d’intégration', 15, ['Lexique', 'Lecture'], [
    'Beyond the close family, the **liens de parenté** (family ties) include:\n- the **ascendants**: les grands-parents, les arrière-grands-parents\n- the **descendants**: les enfants, les petits-enfants\n- the family by marriage, **la belle-famille**: le beau-père, la belle-mère, le beau-frère, la belle-sœur, **le gendre** (son-in-law), **la belle-fille** or la bru (daughter-in-law)\n- others: le demi-frère, la demi-sœur, l’enfant adoptif, l’orphelin, **le tuteur** (guardian), le parrain, la marraine.',
    'The **conflit des générations** (or **le fossé des générations**, the generation gap) is the misunderstanding between young people and their elders. Useful words: les aînés (elders), les cadets, l’autorité parentale, la tradition, la modernité, les valeurs, le respect, l’incompréhension, se révolter, imposer, **faire des concessions**, dialoguer, transmettre (to pass on). Typical subjects of conflict: le téléphone portable, la tenue vestimentaire, les sorties, le choix d’un métier, le mariage.',
    'A **lecture d’intégration** is a reading text followed by questions that test understanding and language. The method:\n- read the title and the questions first, then the whole text\n- find the main idea of each paragraph\n- answer in **full sentences** and, when you can, in your own words\n- for « vrai ou faux », always **justify** with a short quotation: « Justifiez votre réponse par une phrase du texte. »\n- for vocabulary, give a word that could replace the one in the text without changing the meaning.',
  ], 'presentation-fr', 'For « vrai ou faux », the answer without a justification from the text earns little or nothing.',
  ['« Le gendre » is:', ['the husband of one’s daughter', 'the brother of one’s wife', 'one’s grandson', 'one’s guardian'], 'Son-in-law: le gendre.'],
  [['Liens de parenté', 'Family ties.'], ['Le fossé des générations', 'The generation gap.'], ['Le tuteur', 'A guardian who takes care of a child in place of the parents.'], ['Transmettre', 'To pass on (values, knowledge) to the next generation.']],
  [
    { q: 'Lisez le texte et répondez. « Chaque soir, grand-père Nfor réunissait ses petits-enfants autour du feu pour raconter les histoires du village. Mais depuis que Mirabelle a reçu un téléphone, elle reste dans sa chambre. Le vieil homme se sent abandonné. Un dimanche, Mirabelle lui propose d’enregistrer ses contes sur le téléphone. Grand-père sourit enfin : la tradition et la modernité peuvent vivre ensemble. » (1) Pourquoi le grand-père se sent-il abandonné ? (2) Vrai ou faux : Mirabelle refuse d’écouter son grand-père. Justifiez.', steps: ['(1) **Il se sent abandonné parce que Mirabelle reste dans sa chambre avec son téléphone au lieu d’écouter ses histoires.**', '(2) **Faux : « Mirabelle lui propose d’enregistrer ses contes sur le téléphone. »**'] },
    { q: 'Same text. (3) Trouvez un mot du texte qui signifie « délaissé, laissé seul ». (4) Quels sont les deux mots que le texte oppose dans sa dernière phrase ?', steps: ['(3) **« abandonné »**: « Le vieil homme se sent abandonné. »', '(4) **« la tradition » et « la modernité »**: the text says they can live together.'] },
  ]),

  // ---------- Diversité et intégration ----------
  L('fr-recit-5', 'fr-f5-integration', '2.1', 'Le plus-que-parfait et la cohérence des temps du récit', 15, ['Grammaire', 'Expression écrite'], [
    'The **plus-que-parfait** expresses an action that happened **before another past action**. It is formed with the **imparfait** of avoir or être + the past participle: j’**avais mangé**, tu **avais fini**, elle **était partie**, nous **nous étions levés**, ils **avaient compris**. The same agreement rules apply as in the passé composé: with être the participle agrees with the subject; with avoir it agrees only with a direct object placed before the verb.',
    'Compare the three past tenses in one sentence: « Quand nous **sommes arrivés** à la gare (event), il **pleuvait** (background) et le car **était** déjà **parti** (earlier action). » Signal words for the plus-que-parfait: **déjà**, **avant**, **la veille** (the day before), **auparavant**, and « parce que » when it explains an earlier cause: « Il était fatigué parce qu’il **avait marché** toute la nuit. »',
    'A good narrative keeps the **cohérence des temps** (consistent tenses). Choose a base tense and stay in it:\n- the opening situation and descriptions: **imparfait** (« C’était un matin de saison sèche… »)\n- the events: **passé composé** in a personal story (in books you will also meet the **passé simple**: il **fut**, ils **arrivèrent**, which you only need to recognise)\n- earlier events: **plus-que-parfait**\n- time markers to link the steps: ce jour-là, soudain, tout à coup, alors, ensuite, quelques minutes plus tard, finalement.',
  ], 'recit-temps-fr', 'Ask: did it happen before the other past action? Then use the plus-que-parfait.',
  ['« Elle a retrouvé le livre qu’elle ___ la veille. » (perdre)', ['avait perdu', 'a perdu', 'perdait', 'perdra'], 'The loss happened before she found it: plus-que-parfait.'],
  [['Plus-que-parfait', 'The past tense for an action before another past action: avais/étais + participle.'], ['Cohérence des temps', 'Keeping tenses consistent and logical in a text.'], ['La veille', 'The day before (in a past story).'], ['Passé simple', 'The literary past tense of written stories, recognised in reading.']],
  [
    { q: 'Mettez les verbes au temps qui convient : « Le jour de la Fête nationale, il (faire) très chaud. Mon frère (arriver) en retard parce qu’il (rater) le premier car. »', steps: ['Description of the weather: **faisait** (imparfait).', 'The event: **est arrivé** (passé composé, être because « arriver » is a verb of movement).', 'The earlier action that explains the delay: **avait raté** (plus-que-parfait).', '**« Le jour de la Fête nationale, il faisait très chaud. Mon frère est arrivé en retard parce qu’il avait raté le premier car. »**'] },
    { q: 'Join with « quand » and keep the order of events: « Les invités ont mangé. Ensuite, la chorale est arrivée. »', steps: ['The meal came first, so it goes into the plus-que-parfait.', '**« Quand la chorale est arrivée, les invités avaient déjà mangé. »**'] },
  ]),

  L('fr-bilinguisme-5', 'fr-f5-integration', '2.2', 'La diversité culturelle, l’intégration nationale et le bilinguisme', 14, ['Lexique', 'Communication'], [
    'Cameroon is often called **« l’Afrique en miniature »**: it has more than 250 ethnic groups, many national languages (le duala, l’ewondo, le fulfulde, le bassa, le ghomala’, le lamnso et bien d’autres) and **two official languages**. Article 1 of the Constitution states that the Republic adopts English and French as official languages **of equal value**, and the State guarantees the promotion of bilingualism. The National Commission for the Promotion of Bilingualism and Multiculturalism was created in 2017.',
    'Vocabulary of identity and unity:\n- **l’identité socioculturelle**, une ethnie, une coutume, une langue maternelle, le patrimoine culturel\n- **la diversité culturelle**, le multiculturalisme, le brassage culturel (cultural mixing), les mariages intercommunautaires\n- **l’intégration nationale**, l’unité nationale, le **vivre-ensemble**, la tolérance, la solidarité\n- what divides: **le tribalisme**, les préjugés, le repli identitaire (turning in on one’s own group), la discrimination.',
    'To express your identity and promote bilingualism:\n- « Je suis Camerounais(e), originaire de l’Ouest. **Je suis fier / fière de** ma culture. »\n- « **Ce qui nous unit** est plus fort que ce qui nous divise. »\n- « Pour promouvoir le bilinguisme, **il faut que** chaque élève **pratique** les deux langues officielles. » « Nous **pourrions** créer un club bilingue et organiser des échanges entre écoles anglophones et francophones. »',
  ], 'recit-temps-fr', 'In French, nationalities as nouns take a capital (un Camerounais) but adjectives do not (la culture camerounaise).',
  ['According to the Constitution, English and French in Cameroon are:', ['official languages of equal value', 'national languages only', 'foreign languages', 'languages for schools only'], 'Article 1 of the Constitution.'],
  [['Le vivre-ensemble', 'Living together peacefully in a diverse society.'], ['Le tribalisme', 'Favouring one’s own ethnic group and rejecting the others.'], ['Le brassage culturel', 'The mixing of cultures.'], ['Langue maternelle', 'The first language a child learns at home.']],
  [
    { q: 'Write two sentences in French on how your school can promote bilingualism.', steps: ['Use a modal or the conditional for proposals.', '**« Notre école pourrait organiser une semaine du bilinguisme avec des débats en anglais et en français. Les élèves anglophones et francophones devraient aussi correspondre par lettre. »**'] },
    { q: 'Correct the capitals: « les camerounais aiment la cuisine Camerounaise. »', steps: ['« Camerounais » is a noun for the people: capital C.', '« camerounaise » is an adjective: small c.', '**« Les Camerounais aiment la cuisine camerounaise. »**'] },
  ]),

  // ---------- L’allocution ----------
  L('fr-allocution-5', 'fr-f5-allocution', '3.1', 'Préparer et prononcer une allocution', 15, ['Expression écrite', 'Expression orale'], [
    'An **allocution** is a short speech given on an occasion: welcoming visitors, the end of the school year, a prize-giving, the launch of a campaign, a club anniversary. It is written to be **heard**, so the sentences are short and clear, and the speaker addresses the audience with **vous**.',
    'The structure of an allocution:\n- **les salutations protocolaires**, from the most important person to the least: « Monsieur le Délégué départemental, Monsieur le Proviseur, chers enseignants, chers camarades, »\n- **l’introduction**: who you are and why you are speaking: « C’est pour moi un grand honneur de prendre la parole au nom de… » « Nous sommes réunis aujourd’hui pour… »\n- **le développement**: two or three points, each announced by a marker: **d’abord**, **ensuite**, **de plus**, **enfin**\n- **la conclusion**: a wish or a call to action, then the thanks: « Je vous remercie de votre aimable attention. »',
    'When you deliver it: stand straight, look at the audience, speak slowly and **articulate**. Take care with the **oral and nasal vowels**, because they change the meaning: beau /bo/ ≠ bon /bɔ̃/; las /la/ ≠ lent /lɑ̃/; vie /vi/ ≠ vin /vɛ̃/. In a nasal vowel the air passes through the nose and the « n » or « m » is not pronounced.',
  ], 'allocution-fr', 'Greet the most important person first: protocol order matters.',
  ['Which line belongs in the conclusion of an allocution?', ['« Je vous remercie de votre aimable attention. »', '« Monsieur le Proviseur, »', '« D’abord, je voudrais parler… »', '« Objet : Demande d’emploi »'], 'The thanks close the speech.'],
  [['Allocution', 'A short speech given to an audience on an occasion.'], ['Salutations protocolaires', 'The greetings to the officials present, in order of rank.'], ['Prendre la parole', 'To begin to speak in public.'], ['Articuler', 'To pronounce each sound clearly.']],
  [
    { q: 'Write the opening (salutations and introduction) of an allocution by the president of the environment club, at a tree-planting day attended by the mayor.', steps: ['Greet the mayor first, then the school authorities, then the students.', '**« Monsieur le Maire, Monsieur le Proviseur, chers enseignants, chers camarades, c’est pour moi un grand honneur de prendre la parole au nom du club de l’environnement. Nous sommes réunis aujourd’hui pour planter cinq cents arbres dans notre établissement. »**'] },
    { q: 'Write the development in three short points and the conclusion.', steps: ['Use d’abord, ensuite, enfin.', '**« D’abord, les arbres nous donnent de l’ombre et de l’air pur. Ensuite, ils protègent le sol contre l’érosion. Enfin, chaque arbre planté aujourd’hui sera l’héritage de nos cadets. Je vous invite donc à prendre soin de ces jeunes plants. Je vous remercie de votre aimable attention. »**'] },
  ]),

  // ---------- Les carrières ----------
  L('fr-carriere-5', 'fr-f5-carriere', '4.1', 'Explorer les carrières : secteurs d’activité et offres d’emploi', 14, ['Lexique', 'Lecture'], [
    'The economy is divided into **secteurs d’activité**:\n- **le secteur primaire** takes resources from nature: l’agriculture, l’élevage, la pêche, l’exploitation forestière, les mines\n- **le secteur secondaire** transforms them: l’industrie, le bâtiment et les travaux publics (BTP), les brasseries, les cimenteries, la menuiserie\n- **le secteur tertiaire** provides services: la santé, l’éducation, la banque, le commerce, les transports, le tourisme, l’informatique, les télécommunications.',
    'To choose a career, match **your profile** to the job:\n- **les compétences** and **le savoir-faire** (what you can do): parler deux langues, utiliser un ordinateur, réparer un moteur\n- **le savoir-être** (personal qualities): ponctuel, rigoureux, créatif, sociable, patient, honnête\n- **les diplômes** and **la formation**: le GCE O Level et A Level, un BTS, une licence, une formation professionnelle, un apprentissage\n- other paths: un stage, **l’auto-emploi**, l’entrepreneuriat. The **conseiller d’orientation** helps you decide.',
    'An **offre d’emploi** usually gives: le poste, l’employeur, le lieu, **le profil recherché**, les missions, les avantages, les pièces du dossier, **la date limite** and the contact. To express your career wish, use the **conditionnel**: « **J’aimerais** travailler dans le secteur de la santé parce que je suis patient et que j’aime aider les autres. Je **pourrais** devenir infirmier. »',
  ], 'secteurs-fr', 'Read « le profil recherché » first: it tells you if you can apply.',
  ['A carpenter (un menuisier) works in which sector?', ['le secteur secondaire', 'le secteur primaire', 'le secteur tertiaire', 'no sector'], 'He transforms wood into furniture.'],
  [['Secteur d’activité', 'A branch of the economy: primaire, secondaire or tertiaire.'], ['Le savoir-faire', 'Practical skill, know-how.'], ['Le savoir-être', 'Personal qualities and behaviour at work.'], ['L’auto-emploi', 'Self-employment.']],
  [
    { q: 'Lisez l’annonce et répondez. « Hôtel du Lac, Buea, recrute un(e) réceptionniste. Profil : GCE A Level, bilingue, bonne présentation, sens de l’accueil. Dossier : lettre de motivation, CV, photocopie des diplômes. Date limite : 30 juin 2026. » (1) Quel poste est proposé ? (2) Citez deux qualités demandées. (3) À quel secteur appartient cet emploi ?', steps: ['(1) **Le poste de réceptionniste.**', '(2) **Être bilingue et avoir le sens de l’accueil (ou une bonne présentation).**', '(3) **Au secteur tertiaire, car l’hôtellerie est un service.**'] },
    { q: 'Write one sentence matching your qualities to a job, using the conditionnel.', steps: ['Name the qualities, then the job with « pourrais » or « aimerais ».', '**« Comme je suis rigoureuse et que j’aime les chiffres, j’aimerais devenir comptable dans une banque. »**'] },
  ]),

  // ---------- Demande d’emploi et CV ----------
  L('fr-cv-5', 'fr-f5-emploi', '5.2', 'Le CV, la lettre de motivation et « si + présent → futur »', 15, ['Expression écrite', 'Grammaire'], [
    'A **curriculum vitae** (CV) presents your profile on one page, in clear headings:\n- **informations personnelles** (or état civil): nom, prénoms, date et lieu de naissance, nationalité, adresse, téléphone, e-mail\n- **formation**: your diplomas and schools, the **most recent first**\n- **expérience professionnelle**: jobs, internships (stages), voluntary work\n- **compétences**: langues (français, anglais), informatique, permis de conduire\n- **centres d’intérêt**: sport, lecture, musique\n- **références**: people who can recommend you, with their permission.',
    'The **lettre de motivation** goes with the CV and replies to an advertisement: « **Suite à votre annonce** parue dans Cameroon Tribune du 4 mai 2026, j’ai l’honneur de solliciter le poste de… » It explains why the job interests you and why you are suitable. In formal letters a promise or a proposal often uses **si + présent → futur simple**: « **Si** ma candidature **retient** votre attention, je **serai** heureux de vous rencontrer. » « **Si** vous m’**accordez** un entretien, je vous **exposerai** mes motivations. » The future is **never** used directly after « si » meaning « if »: « si vous accorderez » is wrong.',
    'Keep the **formal register**: no « super », « OK », « salut », « bisous ». Prefer formal verbs: être titulaire de (to hold a diploma), maîtriser (to master), disposer de (to have), solliciter (to apply for). Closing formula: « Je vous prie d’agréer, Madame, l’expression de mes salutations distinguées. »',
  ], 'cv-fr', 'After « si » meaning « if »: présent, never futur.',
  ['« Si vous me ___ ce poste, je ne vous décevrai pas. »', ['confiez', 'confierez', 'confieriez', 'confier'], 'Si + présent → futur.'],
  [['Curriculum vitae (CV)', 'A one-page summary of one’s education, experience and skills.'], ['Lettre de motivation', 'The letter that explains why one applies for a post.'], ['Être titulaire de', 'To hold (a diploma or a post).'], ['Un entretien d’embauche', 'A job interview.']],
  [
    { q: 'Write the « Formation » section of a CV for a student who obtained the First School Leaving Certificate in 2021 and sits GCE O Level in 2026 at GBHS Limbe.', steps: ['The most recent comes first.', '**Formation**\n**2026 : candidat au GCE Ordinary Level, GBHS Limbe**\n**2021 : First School Leaving Certificate (FSLC)**'] },
    { q: 'Rewrite in the formal register: « Salut, je veux le job de caissier. Si vous êtes OK, je viendrai. »', steps: ['Replace the greeting, the familiar words and keep si + présent → futur.', '**« Madame, j’ai l’honneur de solliciter le poste de caissier. Si ma candidature vous convient, je me présenterai à l’entretien à la date de votre choix. »**'] },
  ]),

  // ---------- Commerce et devises ----------
  L('fr-devises-5', 'fr-f5-finance', '6.1', 'La monnaie, les devises et la banque', 14, ['Lexique', 'Communication'], [
    'The currency of Cameroon is the **franc CFA** (FCFA), issued by the **BEAC** (Banque des États de l’Afrique centrale) for the six countries of the CEMAC. Its value is fixed to the euro: **1 euro = 655,957 FCFA**. A foreign currency is **une devise**: l’euro, le dollar américain, le naira, la livre sterling. Note: « **la monnaie** » also means the change you get back: « Le vendeur m’a rendu la monnaie. »',
    'Changing money: changer de l’argent, **le taux de change** (the exchange rate), le cours du dollar, un **bureau de change**, convertir des euros en francs CFA. Banking and small savings:\n- ouvrir un compte, un compte d’épargne, déposer, **retirer** de l’argent, un virement, un guichet, un distributeur automatique, une carte bancaire\n- un prêt (a loan), rembourser, **les intérêts**, une microfinance\n- **la tontine**, the rotating savings group common in Cameroon\n- investir dans un petit commerce, **le bénéfice** (profit), la perte, le capital.',
    'Numbers and percentages: « dix **pour cent** » (10 %), la moitié, le tiers, le quart. Spelling: « mille » never takes -s (deux mille); « cent » takes -s only when it ends the number (deux cents, but deux cent cinquante). French writes a **comma** for decimals and a space for thousands: 32 797,85 FCFA.',
  ], 'devises-fr', 'French numbers: a comma for decimals, a space between thousands.',
  ['« Retirer de l’argent » means:', ['to withdraw money', 'to deposit money', 'to change money', 'to lend money'], 'You take money out of your account.'],
  [['Une devise', 'A foreign currency.'], ['Le taux de change', 'The exchange rate between two currencies.'], ['La tontine', 'A rotating savings and credit group.'], ['Le bénéfice', 'The profit made by a business.']],
  [
    { q: 'Ta tante revient de France avec 50 euros. Combien de francs CFA recevra-t-elle au taux fixe ? Écris la réponse en chiffres et la phrase en français.', steps: ['50 × 655,957 = 32 797,85.', '**« Elle recevra 32 797,85 FCFA, soit environ trente-deux mille huit cents francs CFA. »** (A bureau de change may also take a commission.)'] },
    { q: 'Un compte d’épargne rapporte 3 % par an. Combien d’intérêts rapportent 200 000 FCFA en un an ?', steps: ['3 % de 200 000 = 200 000 × 3 ÷ 100 = 6 000.', '**« Le compte rapporte six mille francs CFA d’intérêts en un an. »**'] },
  ]),

  // ---------- Commerce en ligne ----------
  L('fr-enligne-5', 'fr-f5-ecommerce', '7.1', 'Acheter et vendre en ligne en toute sécurité', 14, ['Lexique', 'Communication'], [
    'Vocabulary of online trade (le commerce en ligne):\n- un site marchand, une boutique en ligne, une application, **créer un compte**, se connecter, un mot de passe\n- **le panier**, passer une commande, **commander**, le prix, une promotion, les frais de livraison\n- le paiement par mobile money, par carte bancaire ou **à la livraison**\n- **la livraison**, le livreur, un colis, le suivi de commande\n- un avis client, retourner un article, être **remboursé**.',
    'Online trade has risks: **une arnaque** (a scam), **un escroc**, un faux vendeur, un lien piégé, le vol de données. To judge whether a transaction is safe:\n- check the **reputation** of the seller (avis, ancienneté, adresse réelle)\n- beware of prices that are too low and of messages that put pressure on you (« Payez dans l’heure ! »)\n- **never** share your PIN or a confirmation code: no real seller asks for it\n- prefer payment on delivery and keep the proofs (captures d’écran, reçus).',
    'Sellers and buyers often use the **futur simple** to promise and to inform: « Vous **recevrez** un SMS de confirmation. » « Le livreur **passera** demain matin. » « Nous vous **rembourserons** sous sept jours. » Irregular stems to remember: être → ser-, avoir → aur-, faire → fer-, aller → ir-, venir → viendr-, pouvoir → pourr-, recevoir → recevr-, envoyer → enverr-.',
  ], 'achat-en-ligne-fr', 'Nobody honest will ever ask for your PIN or confirmation code.',
  ['A message says: « Envoyez-moi votre code de confirmation pour débloquer votre colis. » It is probably:', ['une arnaque', 'une livraison normale', 'un remboursement', 'une promotion'], 'Real sellers never ask for your code.'],
  [['Le commerce en ligne', 'Buying and selling on the Internet.'], ['Passer une commande', 'To place an order.'], ['Une arnaque', 'A scam.'], ['Le paiement à la livraison', 'Paying when the goods are delivered.']],
  [
    { q: 'Write a short online advertisement for a cooperative selling plantains, using three verbs in the futur simple.', steps: ['Inform about delivery, payment and quality with the futur.', '**« La coopérative Bonne Récolte vend des régimes de plantain frais. Vous passerez votre commande sur WhatsApp, nous livrerons à domicile à Douala et vous paierez à la livraison. »**'] },
    { q: 'Your friend receives: « Félicitations ! Vous avez gagné un téléphone. Payez 5 000 FCFA de frais pour le recevoir. » Advise him in two sentences.', steps: ['Name the danger, then give advice (impératif).', '**« C’est sûrement une arnaque, car tu n’as participé à aucun concours. Ne paie rien et bloque ce numéro. »**'] },
  ]),
];
