// French lessons for Form 1, term 1: greetings, the alphabet, introducing
// yourself, numbers and the calendar, the family, the school and likes.
// Explanations are in English for the beginner; every example, word list and
// model text is in French. Original text written for this app. **double
// asterisks** mark key terms; `examples` are worked examples.

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

export const LESSONS_1A = [
  // ---------- Saluer et prendre congé ----------
  L('fr-saluer-1', 'fr-f1-salutations', '1.1', 'Saluer et prendre congé', 12, ['Communication'], [
    'French speakers greet people each time they meet, and in Cameroon a greeting is a sign of respect. The greeting depends on the **time of day** and on **who** you speak to:\n- **Bonjour** (good morning, good afternoon): from the morning until late afternoon\n- **Bonsoir** (good evening): in the evening, when you arrive or meet someone\n- **Salut** (hi): only with friends and classmates\n- After the greeting, add **Monsieur**, **Madame** or **Mademoiselle** for an adult: « Bonjour, Monsieur. »',
    'Asking how someone is:\n- polite: « **Comment allez-vous ?** » → « Je vais bien, merci. Et vous ? »\n- familiar: « **Comment vas-tu ?** » or « **Ça va ?** » → « Ça va bien, merci. Et toi ? », « Pas mal. » or « Comme ci, comme ça. » (so-so)',
    'Taking leave (**prendre congé**): **Au revoir** (goodbye), **À bientôt** (see you soon), **À demain** (see you tomorrow), **À tout à l’heure** (see you later today), **Bonne journée** (have a nice day), **Bonne soirée** (have a nice evening), **Bonne nuit** (good night, only before going to bed). When the teacher comes in, the class stands and greets together: « Bonjour, Madame ! »',
  ], 'fr1-salutations', '« Bonsoir » is for arriving in the evening; « bonne nuit » is only for going to bed.',
  ['At 3 p.m. you meet the principal of your school. You say:', ['« Bonjour, Monsieur le Principal. »', '« Bonsoir, Monsieur le Principal. »', '« Salut, Monsieur le Principal ! »', '« Bonne nuit, Monsieur le Principal. »'], '« Bonjour » is used until late afternoon, and « salut » is only for friends.'],
  [['Saluer', 'To greet.'], ['Prendre congé', 'To take leave, to say goodbye.'], ['Salut', 'Hi or bye between friends; never to an adult you respect.']],
  [
    { q: 'Complete the dialogue between Ngono and her neighbour, Madame Eyong, at 7 a.m.: « ___, Madame. Comment ___ ? » « Je vais bien, merci. Et toi ? » « ___, merci. »', steps: ['It is the morning and Madame Eyong is an adult: **Bonjour**.', 'The polite question: **allez-vous**.', 'The answer: **Je vais bien** (or « Ça va bien »).', '**« Bonjour, Madame. Comment allez-vous ? » « Je vais bien, merci. Et toi ? » « Je vais bien, merci. »**'] },
    { q: 'Achu leaves his friend Lum after school. They will meet again the next morning. What does Achu say?', steps: ['They are friends, so « salut » is fine.', 'They meet again tomorrow: **à demain**.', '**« Salut, Lum ! À demain ! »**'] },
  ]),

  L('fr-politesse-1', 'fr-f1-salutations', '1.2', 'Tu ou vous ? Les mots de politesse', 12, ['Communication', 'Lexique'], [
    'French has two words for "you":\n- **tu** for one friend, a classmate, a brother or sister, a child\n- **vous** for one adult you respect or do not know (a teacher, a neighbour, a shopkeeper, the principal) and for **more than one person**, even friends\nIn Cameroon many children also say « vous » to their parents and grandparents as a sign of respect.',
    'The polite words (les mots de politesse):\n- **S’il vous plaît** (please, to an adult or a group); **s’il te plaît** (please, to a friend)\n- **Merci**, **merci beaucoup** (thank you very much); the answer is **de rien** (you are welcome) or, more politely, **je vous en prie**\n- **Pardon** or **excusez-moi** (sorry, excuse me); **excuse-moi** to a friend\n- **Je suis désolé** (said by a boy) or **je suis désolée** (said by a girl): I am sorry',
    'Polite sentences for the classroom: « **Je peux sortir, s’il vous plaît ?** » (May I go out?) « **Pouvez-vous répéter, s’il vous plaît ?** » (Can you repeat, please?) « **Comment dit-on “pen” en français ?** » (How do you say "pen" in French?) « **Je ne comprends pas.** » (I do not understand.)',
  ], 'fr1-politesse', 'Not sure? Use « vous » with any adult: it is never rude.',
  ['Your friend lends you a pencil. You say:', ['« Merci ! »', '« De rien ! »', '« Pardon ! »', '« Bonsoir ! »'], 'You thank someone with « merci »; « de rien » is the answer to « merci ».'],
  [['Tutoyer', 'To say « tu » to someone.'], ['Vouvoyer', 'To say « vous » to someone.'], ['De rien', 'You are welcome (the answer to « merci »).'], ['Désolé, désolée', 'Sorry; « désolée » when the speaker is a girl or a woman.']],
  [
    { q: 'Change the sentence to speak politely to your teacher: « Tu peux répéter, s’il te plaît ? »', steps: ['A teacher is an adult you respect: use **vous**.', '« Tu peux » becomes « Vous pouvez » or « Pouvez-vous »; « s’il te plaît » becomes « s’il vous plaît ».', '**« Pouvez-vous répéter, s’il vous plaît ? »**'] },
    { q: 'Bih steps on Madame Manga’s foot at the market. What does she say?', steps: ['She apologises to an adult: **Pardon** or **Excusez-moi**.', 'Bih is a girl, so « désolée » takes an -e.', '**« Pardon, Madame ! Je suis désolée. »**'] },
  ]),

  // ---------- L’alphabet et les sons ----------
  L('fr-alphabet-1', 'fr-f1-alphabet', '2.1', 'L’alphabet français', 12, ['Phonétique'], [
    'French uses the same **26 letters** as English, but their names are different. Say them aloud: a, bé, cé, dé, e, effe, gé, ache, i, ji, ka, elle, emme, enne, o, pé, ku, erre, esse, té, u, vé, double vé, ixe, i grec, zède.',
    'Letters that trick English speakers:\n- **e** is said /ə/, like the sound in « le », and **i** is said /i/, like the "ee" in "see"\n- **g** is « gé » /ʒe/ and **j** is « ji » /ʒi/\n- **h** is « ache » and is never pronounced: « l’hôpital » sounds /lɔpital/\n- **u** is /y/: say « i » with your lips rounded\n- **w** is « double vé » and **y** is « i grec »',
    'To **spell** (épeler) a word, say each letter. For a double letter say « deux »: « deux l », « deux s ». Name the accents too: « é, e accent aigu ». You often spell your name at school, at the hospital or on the phone: « Comment ça s’écrit ? » « A, i grec, u, ka: Ayuk. »',
  ], 'fr1-alphabet', '« gé » for g and « ji » for j: the opposite of what English speakers expect.',
  ['How do you spell « belle » aloud?', ['bé, e, deux l, e', 'bé, i, deux l, i', 'bi, e, elle, e', 'bé, e, elle, e'], 'Name each letter and say « deux l » for the double letter.'],
  [['Une lettre', 'A letter of the alphabet.'], ['Épeler', 'To spell, letter by letter.'], ['Comment ça s’écrit ?', 'How is it written? How do you spell it?']],
  [
    { q: 'Spell the name of the town « Kribi » aloud in French.', steps: ['K = ka, r = erre, i = i, b = bé, i = i.', '**« ka, erre, i, bé, i »**'] },
    { q: '« Comment ça s’écrit ? » « ji, u, pé, e. » Which word is it?', steps: ['ji = j, u = u, pé = p, e = e.', '**jupe** (a skirt)'] },
  ]),

  L('fr-accents-1', 'fr-f1-alphabet', '2.2', 'Voyelles, consonnes et accents', 12, ['Phonétique', 'Orthographe'], [
    'The **vowels** (les voyelles) are a, e, i, o, u and y; the other 20 letters are **consonants** (les consonnes). Some groups of letters make one sound: **ou** /u/ (« vous »), **oi** /wa/ (« moi »), **au** and **eau** /o/ (« beau »), **ai** /ɛ/ (« lait »), **eu** /ø/ (« deux »).',
    'The **accents** change the sound or the meaning of a word:\n- **accent aigu** (é), only on e, said /e/: « été », « école »\n- **accent grave** (è, à, ù): è is said /ɛ/ (« mère »); on à and ù it only changes the meaning: « a » (has) and « à » (to, at); « ou » (or) and « où » (where)\n- **accent circonflexe** (â, ê, î, ô, û): « forêt », « hôpital », « fête »\n- **tréma** (ë, ï): the two vowels are said separately: « maïs », « Noël »\n- **cédille** (ç): c sounds /s/ before a, o, u: « garçon », « français », « reçu »',
    'Many final consonants are **silent**: « petit », « grand », « les », « ils parlent ». The letters **c, r, f, l** are often heard at the end: « avec », « bonjour », « neuf », « sel » (think of the English word CaReFuL), except the r of verbs in -er: « parler ». A final **e** without an accent is usually silent too: « table », « porte ».',
  ], 'fr1-accents', '« à » with an accent is the little word "to, at" (à l’école); « a » without it is the verb avoir (il a).',
  ['Which word needs a cédille?', ['garçon', 'cinéma', 'classe', 'école'], 'Before o, a c that sounds /s/ needs a cédille: garçon.'],
  [['Une voyelle', 'A vowel: a, e, i, o, u, y.'], ['Une consonne', 'A consonant: b, c, d, f…'], ['Un accent', 'A mark on a letter: é, è, ê, ë.'], ['Une cédille', 'The mark under ç that makes it sound /s/.']],
  [
    { q: 'Choose « a » or « à »: « Mon frère ___ douze ans. Il va ___ l’école. »', steps: ['« Il a douze ans » is the verb avoir: **a**, no accent.', '« à l’école » is the little word "to": **à**, with an accent.', '**« Mon frère a douze ans. Il va à l’école. »**'] },
    { q: 'Choose « ou » or « où »: « ___ habites-tu ? À Limbé ___ à Buea ? »', steps: ['« Where » takes an accent: **Où**.', '« Or » takes no accent: **ou**.', '**« Où habites-tu ? À Limbé ou à Buea ? »**'] },
  ]),

  // ---------- Se présenter ----------
  L('fr-pronoms-1', 'fr-f1-presenter', '3.1', 'Les pronoms sujets et se présenter', 12, ['Grammaire', 'Communication'], [
    'A **subject pronoun** (un pronom sujet) stands for the person or thing that does the action:\n- singular: **je** (I), **tu** (you, one friend), **il** (he, it), **elle** (she, it)\n- plural: **nous** (we), **vous** (you, polite or more than one), **ils** (they, masculine or mixed), **elles** (they, all feminine)\n- **on** (we, people in general) takes the same verb form as il: « On va au marché ? »',
    '« Je » becomes **j’** before a vowel or a silent h: « j’aime », « j’habite ». « Il » and « elle » can also mean "it": « Le cahier ? Il est sur la table. » « La règle ? Elle est dans le sac. »',
    'Introducing yourself:\n- « **Je m’appelle** Asong. » (My name is…)\n- « **J’ai** onze ans. » (I am eleven.)\n- « **J’habite à** Bamenda. » (I live in…)\n- « **Je suis** camerounais. » (said by a boy) or « Je suis camerounaise. » (said by a girl)\n- « **Je suis en** Form 1. »\nTo ask a friend: « Comment tu t’appelles ? » « Tu as quel âge ? » « Où habites-tu ? »',
  ], 'fr1-pronoms', 'Nine girls and one boy together are still « ils ».',
  ['« Ma mère et moi » can be replaced by:', ['nous', 'vous', 'elles', 'ils'], 'Any group that includes « moi » is « nous ».'],
  [['Un pronom sujet', 'A word that stands for the subject: je, tu, il, elle, on, nous, vous, ils, elles.'], ['S’appeler', 'To be called: je m’appelle, tu t’appelles.'], ['Habiter', 'To live: j’habite à Kumba.']],
  [
    { q: 'Replace « Eyong et Achu » with a pronoun: « Eyong et Achu jouent au football. »', steps: ['Eyong and Achu are two boys: masculine plural.', '**« Ils jouent au football. »**'] },
    { q: 'Fanta introduces herself. Put the words in order: « ans / j’ai / douze » and « à / habite / Ebolowa / j’ ».', steps: ['Subject, then verb, then the rest: **J’ai douze ans.**', '**J’habite à Ebolowa.**'] },
  ]),

  L('fr-etre-1', 'fr-f1-presenter', '3.2', 'Le verbe être et les présentatifs', 12, ['Grammaire', 'Conjugaison'], [
    '**Être** (to be) is the most important French verb, and it is **irregular**: learn it by heart.\n- je **suis**, tu **es**, il / elle / on **est**\n- nous **sommes**, vous **êtes**, ils / elles **sont**',
    'Use être to give:\n- a nationality: « Nous sommes camerounais. »\n- a job, without an article: « Ma mère est infirmière. »\n- a description: « Tu es grand. » « Elles sont contentes. »\n- a place: « Je suis à l’école. » « Ils sont au marché. »',
    '**C’est** (it is, this is, he is, she is) presents one person or thing: « C’est mon ami Ekane. » « C’est un cahier. » For more than one: « **Ce sont** mes sœurs. » **Voici** (here is) and **voilà** (there is) point at someone or something: « Voici Madame Nkeng, notre professeur de français. » These words are called the **présentatifs**.',
  ], 'fr1-etre', '« Vous êtes » ends in -tes: never « vous êtez ».',
  ['« Mes amis et moi, nous ___ en Form 1. »', ['sommes', 'sont', 'êtes', 'est'], '« Nous » takes « sommes ».'],
  [['Être', 'To be: je suis, tu es, il est, nous sommes, vous êtes, ils sont.'], ['Un présentatif', 'A word that presents: c’est, ce sont, voici, voilà.'], ['Une nationalité', 'camerounais, camerounaise; tchadien, tchadienne; gabonais, gabonaise.']],
  [
    { q: 'Complete with être: « Je ___ à Kumba. Mes parents ___ commerçants. Et vous, vous ___ d’où ? »', steps: ['je → **suis**; mes parents (ils) → **sont**; vous → **êtes**.', '**« Je suis à Kumba. Mes parents sont commerçants. Et vous, vous êtes d’où ? »**'] },
    { q: 'Introduce your friend Mballa (a boy, twelve years old, from Ebolowa) in three sentences.', steps: ['Present him: « Voici mon ami Mballa. »', 'His age, with avoir: « Il a douze ans. »', 'Where he is from, with être: « Il est d’Ebolowa. »', '**« Voici mon ami Mballa. Il a douze ans. Il est d’Ebolowa. »**'] },
  ]),

  // ---------- Les nombres, les jours et les mois ----------
  L('fr-nombres-1', 'fr-f1-nombres', '4.1', 'Les nombres de 0 à 50', 12, ['Lexique'], [
    '0 zéro, 1 un, 2 deux, 3 trois, 4 quatre, 5 cinq, 6 six, 7 sept, 8 huit, 9 neuf, 10 dix, 11 onze, 12 douze, 13 treize, 14 quatorze, 15 quinze, 16 seize, 17 dix-sept, 18 dix-huit, 19 dix-neuf, 20 vingt.',
    'The tens: 20 **vingt**, 30 **trente**, 40 **quarante**, 50 **cinquante**. Between them, add the unit with a hyphen: 22 vingt-deux, 35 trente-cinq, 48 quarante-huit. But 21, 31, 41 and 51 take **et**: vingt et un, trente et un, quarante et un. (Since the 1990 spelling reform, writing hyphens everywhere is also accepted: vingt-et-un.)',
    'Numbers in daily life: « J’ai onze ans. » « Nous sommes quarante-cinq dans la classe. » « Ouvrez vos livres à la page trente-deux. » Listen to the end of six, huit and dix: silent before a consonant (« six cahiers » /si kaje/), linked before a vowel (« six ans » /sizɑ̃/, « dix élèves » /dizelɛv/); « neuf ans » is said /nœvɑ̃/.',
  ], 'fr1-nombres', '21, 31, 41, 51: « et un ». All the other numbers between the tens: a hyphen.',
  ['« Trente-six » is:', ['36', '26', '63', '46'], 'Trente = 30, six = 6.'],
  [['Un nombre', 'A number.'], ['Compter', 'To count.'], ['La liaison', 'Linking a silent final consonant to the next vowel: six ans /sizɑ̃/.']],
  [
    { q: 'Write in letters: 17, 29, 41, 50.', steps: ['17 = dix + sept: **dix-sept**.', '29 = vingt + neuf: **vingt-neuf**.', '41 takes « et »: **quarante et un**.', '50: **cinquante**.'] },
    { q: 'Calculate and answer in French: « Douze plus quinze ? »', steps: ['12 + 15 = 27.', '**« Douze plus quinze font vingt-sept. »** (plus = +, moins = −)'] },
  ]),

  L('fr-calendrier-1', 'fr-f1-nombres', '4.2', 'Les jours, les mois et la date', 12, ['Lexique', 'Écriture'], [
    'The days of the week (les jours de la semaine): **lundi, mardi, mercredi, jeudi, vendredi, samedi, dimanche**. The months of the year (les mois de l’année): **janvier, février, mars, avril, mai, juin, juillet, août, septembre, octobre, novembre, décembre**. In French, days and months take **no capital letter**, except at the start of a sentence.',
    'Saying the date: « le » + number + month + year: « Nous sommes **le lundi 7 septembre 2026**. » For the first day of a month say **premier**, written 1er: « le 1er janvier ». For the other days use the ordinary number: « le 2 mars », « le 20 mai ». To ask: « Quelle est la date aujourd’hui ? » or « Nous sommes le combien ? »',
    'Years are read as one big number: 2026 = **deux mille vingt-six**. Useful words: **aujourd’hui** (today), **demain** (tomorrow), **hier** (yesterday), la semaine, le week-end, le mois, l’année. « Lundi » alone means this Monday; « **le lundi** » means every Monday: « Le lundi, nous avons français. »',
  ], 'fr1-calendrier', 'No capital letters: « lundi 12 octobre », not « Lundi 12 Octobre ».',
  ['How do you write the date of Christmas 2026?', ['le vendredi 25 décembre 2026', 'le Vendredi 25 Décembre 2026', 'le vendredi 25ème décembre 2026', 'le décembre 25 2026'], 'Day, number, month and year, in small letters; 25 December 2026 is a Friday.'],
  [['Un jour', 'A day: lundi, mardi…'], ['Un mois', 'A month: janvier, février…'], ['Aujourd’hui', 'Today.'], ['Premier (1er)', 'First: used for the first day of a month.']],
  [
    { q: 'Write this date in French: Saturday, 14 November 2026.', steps: ['The day and the month take small letters: samedi, novembre.', '**le samedi 14 novembre 2026**'] },
    { q: 'Answer in French: « Hier, c’était jeudi. Aujourd’hui, c’est quel jour ? »', steps: ['The day after jeudi is vendredi.', '**« Aujourd’hui, c’est vendredi. »**'] },
  ]),

  // ---------- La famille ----------
  L('fr-famille-1', 'fr-f1-famille', '5.1', 'Les membres de la famille', 12, ['Lexique'], [
    'The close family: **le père** (father), **la mère** (mother), **les parents** (father and mother), **le fils** (son), **la fille** (daughter, also girl), **le frère** (brother), **la sœur** (sister), **les enfants** (children). At home children say **papa** and **maman**.',
    'The extended family (**la famille élargie**): **le grand-père**, **la grand-mère**, **les grands-parents**, **l’oncle** (uncle), **la tante** (aunt), **le cousin**, **la cousine**, **le neveu** (nephew), **la nièce**, **le petit-fils**, **la petite-fille** (grandson, granddaughter). In many Cameroonian families the grandparents, uncles and cousins live close by, sometimes in the same compound.',
    'Talking about your family: « Dans ma famille, nous sommes six. » « J’ai deux frères et une sœur. » « Je suis **l’aîné** » (the eldest; **l’aînée** for a girl), « le cadet, la cadette » (the younger one), « le benjamin, la benjamine » (the youngest). On a family tree (**un arbre généalogique**) a line joins husband and wife (**le mari**, **la femme**) and lines go down to their children.',
  ], 'fr1-famille', '« La fille » means both "the daughter" and "the girl"; « la femme » both "the wife" and "the woman".',
  ['« Le mari de ma tante » est mon:', ['oncle', 'cousin', 'neveu', 'grand-père'], 'Your aunt’s husband is your uncle.'],
  [['La famille élargie', 'The extended family: grandparents, uncles, aunts, cousins.'], ['Un arbre généalogique', 'A family tree.'], ['L’aîné, l’aînée', 'The eldest child.']],
  [
    { q: 'Look at the family tree. Who is Esther for Bih?', steps: ['Esther is the sister of Henri, Bih’s father.', 'The sister of your father is your aunt.', '**Esther est la tante de Bih.**'] },
    { q: 'Bih talks about her family. Complete: « Henri est mon ___. Achu est mon ___. Ekane est mon ___. »', steps: ['Henri is her father: **père**.', 'Achu has the same parents as Bih: **frère**.', 'Ekane is the son of her aunt: **cousin**.'] },
  ]),

  L('fr-avoir-1', 'fr-f1-famille', '5.2', 'Le verbe avoir et il y a', 12, ['Grammaire', 'Conjugaison'], [
    '**Avoir** (to have) is irregular: j’**ai**, tu **as**, il / elle / on **a**, nous **avons**, vous **avez**, ils / elles **ont**. Do not mix « ils ont » (they have) with « ils sont » (they are): with the liaison, « ils ont » sounds /ilzɔ̃/ and « ils sont » sounds /ilsɔ̃/.',
    'Use avoir for what you have: « J’ai un vélo. » « Nous avons une grande cour. » It is also used in expressions where English uses "to be":\n- **avoir … ans**: « J’ai douze ans. » (I am twelve.)\n- **avoir faim** (to be hungry), **avoir soif** (thirsty), **avoir chaud** (hot), **avoir froid** (cold), **avoir peur** (afraid), **avoir sommeil** (sleepy)\n- **avoir mal à**: « J’ai mal à la tête. »',
    '**Il y a** means "there is" or "there are": « Il y a cinq personnes dans ma famille. » « Il y a des mangues sur la table. » To ask: « Qu’est-ce qu’il y a ? » (What is there? What is the matter?)',
  ], 'fr1-avoir', 'Age always takes avoir and the word « ans »: « Il a treize ans. »',
  ['It is cold and Asong is cold. In French: « Il fait froid et Asong ___ froid. »', ['a', 'est', 'fait', 'as'], 'A person « a froid » (avoir); the weather « fait froid ».'],
  [['Avoir', 'To have: j’ai, tu as, il a, nous avons, vous avez, ils ont.'], ['Avoir faim, avoir soif', 'To be hungry, to be thirsty.'], ['Il y a', 'There is, there are.']],
  [
    { q: 'Complete with avoir: « Mon frère et moi, nous ___ un chien. Il ___ trois ans. Et toi, tu ___ un animal ? »', steps: ['nous → **avons**; il → **a**; tu → **as**.', '**« Mon frère et moi, nous avons un chien. Il a trois ans. Et toi, tu as un animal ? »**'] },
    { q: 'Translate: "The children are hungry."', steps: ['"To be hungry" is avoir faim.', '"The children" = les enfants, so the verb is « ont ».', '**« Les enfants ont faim. »**'] },
  ]),

  // ---------- L’école et la classe ----------
  L('fr-articles-1', 'fr-f1-ecole', '6.1', 'Les articles définis et indéfinis', 12, ['Grammaire'], [
    'Every French noun is **masculine** or **feminine**, and the article tells you which. Learn each noun with its article: un cahier, une trousse.',
    'The **indefinite articles** (a, an, some) present something not yet known: **un** (masculine), **une** (feminine), **des** (plural): « un stylo », « une règle », « des livres ». The **definite articles** (the) present something known or specific: **le** (masculine), **la** (feminine), **l’** (before a vowel or a silent h), **les** (plural): « le stylo de Fanta », « la porte », « l’école », « l’hôpital », « les élèves ».',
    'To make a noun plural, usually add **-s**, which is not heard: « un livre, des livres ». So listen to the article: « le livre » /lə/, « les livres » /le/. Nouns ending in -eau take **-x**: « un tableau, des tableaux »; « un bureau, des bureaux ».',
  ], 'fr1-articles', 'Learn « un » or « une » with every new noun: the article is part of the word.',
  ['Choose the right article: « ___ armoire » (the cupboard).', ['l’', 'le', 'la', 'les'], 'Before a vowel, « le » and « la » become « l’ ».'],
  [['Un article défini', 'le, la, l’, les: the.'], ['Un article indéfini', 'un, une, des: a, an, some.'], ['Le genre', 'Gender: masculine or feminine.'], ['Le nombre', 'Number: singular or plural.']],
  [
    { q: 'Put « un », « une » or « des »: « Dans mon sac, il y a ___ cahier, ___ trousse et ___ livres. »', steps: ['« cahier » is masculine: **un**.', '« trousse » is feminine: **une**.', '« livres » is plural: **des**.'] },
    { q: 'Write in the plural: « le tableau, l’élève, la table ».', steps: ['The article becomes **les** for all three.', 'Nouns in -eau take -x: **les tableaux**; then **les élèves**, **les tables**.'] },
  ]),

  L('fr-classe-1', 'fr-f1-ecole', '6.2', 'La classe, l’école et l’emploi du temps', 12, ['Lexique', 'Lecture'], [
    'In the classroom (**dans la salle de classe**): le tableau, la craie, le bureau du professeur, la table-banc (the desk with its bench found in many Cameroonian classrooms), la chaise, la porte, la fenêtre. In the school bag (dans le sac): le cahier, le livre, le stylo, le crayon, la gomme, la règle, la trousse, le taille-crayon, la calculatrice.',
    'Places in the school: la salle de classe, le bureau du principal, **la bibliothèque** (the library), le laboratoire, la salle informatique, la cour de récréation, le terrain de sport, la cantine, les toilettes. School subjects (**les matières**) take the definite article: le français, l’anglais, les mathématiques, l’histoire, la géographie, la biologie, l’informatique, le sport.',
    'Reading a timetable (**l’emploi du temps**): « Le lundi, à sept heures et demie, nous avons mathématiques. » « À dix heures, c’est la récréation. » Times: à 7 h 30 (sept heures trente, or sept heures et demie), à 10 h (dix heures), à midi (12 h).',
  ], 'fr1-emploi', '« La bibliothèque » is the library; « la librairie » is a bookshop.',
  ['Where do students borrow books?', ['à la bibliothèque', 'à la librairie', 'à la cantine', 'au laboratoire'], 'La bibliothèque lends books; la librairie sells them.'],
  [['Une matière', 'A school subject.'], ['L’emploi du temps', 'The timetable.'], ['La récréation', 'Break time.'], ['Une table-banc', 'A desk joined to its bench, as in many Cameroonian classrooms.']],
  [
    { q: 'Look at the timetable. What do the students have on Tuesday at 7 h 30?', steps: ['Find the column « mardi » and the row « 7 h 30 ».', '**« Le mardi, à sept heures et demie, ils ont français. »**'] },
    { q: 'Name five objects in your school bag, with « un » or « une ».', steps: ['Masculine: **un cahier, un stylo, un livre**.', 'Feminine: **une règle, une gomme**.', '**« Dans mon sac, il y a un cahier, un stylo, un livre, une règle et une gomme. »**'] },
  ]),

  // ---------- Exprimer ses goûts et poser des questions ----------
  L('fr-gouts-1', 'fr-f1-gouts', '7.1', 'Exprimer ses goûts', 12, ['Communication', 'Lexique'], [
    'From the strongest to the weakest: **j’adore** (I love) → **j’aime beaucoup** → **j’aime** (I like) → **je n’aime pas beaucoup** → **je n’aime pas** → **je déteste** (I hate). To choose between two things: **je préfère** (I prefer).',
    'After these verbs, a noun takes **le, la, l’ or les**: « J’aime **le** football. » « Je déteste **les** serpents. » « Je préfère **la** musique. » They can also be followed by an infinitive: « J’aime **danser**. » « J’adore **lire**. »',
    'Leisure activities (**les loisirs**): jouer au football, jouer au basket, danser, chanter, lire, dessiner, nager, regarder la télévision, écouter de la musique. Asking: « Tu aimes le sport ? » « Qu’est-ce que tu aimes faire ? » Answering with a reason: « J’aime le football **parce que** c’est amusant. »',
  ], 'fr1-gouts', '« J’aime le football », never « J’aime football ».',
  ['Choose the correct sentence:', ['« Ngono aime les mangues. »', '« Ngono aime mangues. »', '« Ngono aime des mangues. »', '« Ngono aimes les mangues. »'], 'Aimer takes the definite article, and with one person (elle) the ending is -e.'],
  [['Adorer', 'To love (things, activities).'], ['Détester', 'To hate.'], ['Préférer', 'To prefer: je préfère, nous préférons.'], ['Les loisirs', 'Leisure activities, hobbies.']],
  [
    { q: 'Write two sentences about what you like and one about what you do not like.', steps: ['Use j’adore or j’aime + le, la, les, or + an infinitive.', 'For the negative, put ne … pas around the verb: je n’aime pas.', '**« J’adore le football. J’aime lire. Je n’aime pas les araignées. »**'] },
    { q: 'Achu loves music but hates noise. Complete: « Achu ___ la musique, mais il ___ le bruit. »', steps: ['Love → **adore**; hate → **déteste**; with « il » the ending is -e.', '**« Achu adore la musique, mais il déteste le bruit. »**'] },
  ]),

  L('fr-questions-1', 'fr-f1-gouts', '7.2', 'Poser une question', 12, ['Grammaire', 'Communication'], [
    'Three ways to ask a yes or no question:\n- **intonation**: raise your voice at the end; very common when speaking: « Tu aimes le riz ? »\n- **est-ce que** at the start: « **Est-ce que** tu aimes le riz ? » (« est-ce qu’ » before a vowel: « Est-ce qu’il vient ? »)\n- **inversion** of the verb and the pronoun, more formal: « **Aimes-tu** le riz ? »\nAnswers: « Oui, j’aime le riz. » « Non, je n’aime pas le riz. »',
    'Question words (**les mots interrogatifs**): **qui ?** (who?), **qu’est-ce que ?** (what?), **où ?** (where?), **quand ?** (when?), **comment ?** (how?), **combien ?** (how many, how much?), **pourquoi ?** (why?), answered with **parce que** (because), and **quel, quelle ?** (which, what?): « Quel âge as-tu ? » « Quelle est ta matière préférée ? »',
    'More examples: « Où habites-tu ? » → « J’habite à Bafoussam. » « Quand est ton anniversaire ? » → « C’est le 3 avril. » « Comment s’appelle ton père ? » → « Il s’appelle Monsieur Tabi. » « Pourquoi aimes-tu le français ? » → « Parce que c’est utile au Cameroun. »',
  ], 'fr1-questions', '« Quel » goes with a masculine noun (quel âge), « quelle » with a feminine noun (quelle heure).',
  ['Which question word asks for a reason?', ['pourquoi', 'quand', 'combien', 'où'], 'Pourquoi = why; the answer starts with « parce que ».'],
  [['Est-ce que', 'Words placed before a sentence to make a yes or no question.'], ['Pourquoi ?', 'Why? The answer starts with « parce que » (because).'], ['Quel, quelle ?', 'Which? What? It agrees with the noun.']],
  [
    { q: 'Make a question with « est-ce que »: « Vous parlez français. »', steps: ['Put « est-ce que » before the sentence; nothing else changes.', '**« Est-ce que vous parlez français ? »**'] },
    { q: 'Find the question for this answer: « J’habite à Garoua. »', steps: ['The answer gives a place, so the question uses **où**.', '**« Où habites-tu ? »** or **« Où est-ce que tu habites ? »**'] },
  ]),
];
