// French lessons for Form 1, term 2: the body and health, -er verbs and the
// school day, clothes and colours, describing people, the house and possessive
// adjectives, the negative and describing objects. Explanations are in English
// for the beginner; every example, word list and model text is in French.
// Original text written for this app. **double asterisks** mark key terms;
// `examples` are worked examples.

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

export const LESSONS_1B = [
  // ---------- Le corps humain et la santé ----------
  L('fr-corps-1', 'fr-f1-corps', '8.1', 'Les parties du corps', 12, ['Lexique'], [
    'The head (**la tête**):\n- **les cheveux** (hair), **le visage** (face), **le front** (forehead)\n- **un œil**, plural **des yeux** (eye, eyes), **une oreille** (ear), **le nez** (nose)\n- **la bouche** (mouth), **les dents** (teeth), **la langue** (tongue), **le cou** (neck)',
    'The rest of the body (**le corps**):\n- **l’épaule** (shoulder), **le bras** (arm), **le coude** (elbow), **la main** (hand), **les doigts** (fingers)\n- **la poitrine** (chest), **le dos** (back), **le ventre** (stomach, belly)\n- **la jambe** (leg), **le genou**, plural **les genoux** (knee), **le pied** (foot), **les orteils** (toes)',
    'The five senses (**les cinq sens**): « On **voit** avec les yeux. On **entend** avec les oreilles. On **sent** avec le nez. On **goûte** avec la langue. On **touche** avec les mains. » A short description: « J’ai deux bras, deux mains et dix doigts. J’ai deux jambes et deux pieds. »',
  ], 'fr1-corps', 'Un œil, deux yeux: the plural of « œil » is a completely different word.',
  ['We hear with:', ['les oreilles', 'les yeux', 'le nez', 'les pieds'], 'On entend avec les oreilles.'],
  [['Le visage', 'The face.'], ['Un œil, des yeux', 'An eye, eyes: an irregular plural.'], ['Les orteils', 'The toes; « les doigts » are the fingers.']],
  [
    { q: 'Complete: « On marche avec les ___ et on écrit avec la ___. »', steps: ['We walk with our feet (or legs): **pieds**.', 'We write with our hand: **main**.', '**« On marche avec les pieds et on écrit avec la main. »**'] },
    { q: 'Give the plural: un œil, un genou, un bras.', steps: ['« Œil » has an irregular plural: **des yeux**.', '« Genou » takes an x: **des genoux**.', '« Bras » already ends in s, so it does not change: **des bras**.'] },
  ]),

  L('fr-sante-1', 'fr-f1-corps', '8.2', 'J’ai mal : au centre de santé', 12, ['Communication', 'Lexique'], [
    'To say where it hurts, use **avoir mal à** + the part of the body. « À » joins the article:\n- **à la** before a feminine noun: « J’ai mal **à la** tête. »\n- **au** (à + le) before a masculine noun: « J’ai mal **au** ventre. »\n- **à l’** before a vowel: « J’ai mal **à l’**oreille. »\n- **aux** (à + les) before a plural: « J’ai mal **aux** dents. »',
    'Other words for being ill:\n- **Je suis malade.** (I am sick.) **Je suis fatigué** (a boy) or **fatiguée** (a girl).\n- **J’ai de la fièvre.** (I have a fever.) **Je tousse.** (I am coughing.)\n- **J’ai le paludisme.** (I have malaria.)\n- At the health centre (**le centre de santé**) you meet **le médecin** (the doctor) and **l’infirmier** or **l’infirmière** (the nurse); they give **un médicament** (a medicine) or **un comprimé** (a tablet).',
    'A visit to the nurse:\n« Bonjour, Madame. »\n« Bonjour, Kibong. Qu’est-ce qui ne va pas ? »\n« J’ai mal à la tête et j’ai de la fièvre. »\n« Depuis quand ? »\n« Depuis hier soir. »\n« Voici un comprimé. Bois beaucoup d’eau et repose-toi. »\nThe nurse asks **Qu’est-ce qui ne va pas ?** (What is wrong?) and **Depuis quand ?** (Since when?).',
  ], 'fr1-sante', 'À + le = au and à + les = aux: « à le » and « à les » do not exist.',
  ['« J’ai mal ___ pieds. »', ['aux', 'au', 'à la', 'à le'], '« Pieds » is plural: à + les = aux.'],
  [['Avoir mal à', 'To have a pain in: « J’ai mal au dos. »'], ['La fièvre', 'Fever: « J’ai de la fièvre. »'], ['Le paludisme', 'Malaria, carried by mosquitoes.']],
  [
    { q: 'Tell the nurse that your stomach hurts and you have a fever.', steps: ['« Ventre » is masculine: à + le = **au ventre**.', 'Fever: **j’ai de la fièvre**.', '**« J’ai mal au ventre et j’ai de la fièvre. »**'] },
    { q: 'Complete with à la, au, à l’ or aux: « J’ai mal ___ gorge, ___ œil, ___ genoux. »', steps: ['« Gorge » is feminine: **à la gorge**.', '« Œil » starts with a vowel: **à l’œil**.', '« Genoux » is plural: **aux genoux**.'] },
  ]),

  // ---------- Ma journée : les verbes du premier groupe ----------
  L('fr-verbes-er-1', 'fr-f1-journee', '9.1', 'Les verbes en -er au présent', 12, ['Conjugaison', 'Grammaire'], [
    'Most French verbs end in **-er** in the infinitive: parler, aimer, manger, chanter, danser, jouer, travailler, regarder, écouter, habiter, arriver, rentrer. They form the **premier groupe** (first group). « Aller » ends in -er but is irregular: it is not in this group.',
    'To conjugate, take off -er to find the **radical** (stem), then add the **terminaisons** (endings) -e, -es, -e, -ons, -ez, -ent:\n- je parl**e**, tu parl**es**, il, elle, on parl**e**\n- nous parl**ons**, vous parl**ez**, ils, elles parl**ent**\nThe endings -e, -es, -e and -ent are silent, so four forms sound the same. Before a vowel or a silent h, « je » becomes « j’ »: **j’aime**, **j’habite**, **j’écoute**.',
    'Two spelling changes with « nous »:\n- verbs in **-ger** keep an e to keep the soft g: nous **mangeons**, nous **nageons**, nous **rangeons**\n- verbs in **-cer** take a ç to keep the s sound: nous **commençons**, nous **lançons**\nRemember the liaison: « nous‿aimons », « ils‿écoutent » (say /z/).',
  ], 'fr1-verbes-er', 'In « ils parlent » the -ent is silent: it sounds like « il parle ».',
  ['« Vous ___ bien. » (chanter)', ['chantez', 'chantons', 'chantent', 'chantes'], 'With « vous » the ending is -ez.'],
  [['L’infinitif', 'The basic form of a verb, as in the dictionary: parler.'], ['Le radical', 'The stem left after taking off -er: parl-.'], ['La terminaison', 'The ending added to the stem: -e, -es, -e, -ons, -ez, -ent.']],
  [
    { q: 'Conjugate « jouer » in the present.', steps: ['Stem: **jou-**.', '**je joue, tu joues, il joue, nous jouons, vous jouez, ils jouent**'] },
    { q: 'Correct the mistake: « Nous mangons du riz à midi. »', steps: ['« Manger » ends in -ger: keep the e before -ons.', '**« Nous mangeons du riz à midi. »**'] },
  ]),

  L('fr-journee-1', 'fr-f1-journee', '9.2', 'L’heure et ma journée d’école', 12, ['Lexique', 'Lecture'], [
    'Telling the time: « **Quelle heure est-il ?** »\n- **Il est sept heures.** (7:00) **Il est une heure.** (1:00, singular)\n- **et quart** (quarter past), **et demie** (half past), **moins le quart** (quarter to): « Il est dix heures moins le quart. » (9:45)\n- **midi** (12 noon), **minuit** (12 midnight)\nTimetables use the 24-hour clock: 14 h 30 = « quatorze heures trente ». To say at what time: **à** sept heures.',
    'A school day (original text):\n« Nfor habite à Kumba. Le matin, il prépare son sac et il arrive à l’école à sept heures et quart. Les cours commencent à sept heures et demie. À dix heures, c’est la récréation : les élèves jouent et mangent des beignets. À quinze heures trente, Nfor rentre à la maison. Le soir, il étudie ses leçons, il aide sa mère et il dîne avec sa famille. »',
    'Words for the parts of the day: **le matin** (morning), **l’après-midi** (afternoon), **le soir** (evening), **la nuit** (night). Words to put actions in order: **d’abord** (first), **ensuite** (next), **puis** (then), **enfin** (finally). Habits: **tous les jours** (every day), **le lundi** (on Mondays).',
  ], 'fr1-journee', 'From two o’clock, « heures » takes an s: une heure, deux heures.',
  ['How do you say 7:30?', ['« Il est sept heures et demie. »', '« Il est sept heures et quart. »', '« Il est sept heures moins le quart. »', '« Il est demi sept heures. »'], 'Half past = et demie.'],
  [['Midi', 'Twelve o’clock in the day; « minuit » is twelve at night.'], ['Et demie', 'Half past: « il est huit heures et demie ».'], ['La récréation', 'The break between lessons.']],
  [
    { q: 'Write in words: 9:15 and 10:45.', steps: ['9:15 is a quarter past nine: **il est neuf heures et quart**.', '10:45 is a quarter to eleven: **il est onze heures moins le quart**.'] },
    { q: 'Put Fanta’s morning in order with d’abord, ensuite, enfin: (laver les assiettes / préparer le petit déjeuner / arriver à l’école)', steps: ['First she prepares breakfast, then washes the plates, and finally arrives at school.', '**« D’abord, Fanta prépare le petit déjeuner. Ensuite, elle lave les assiettes. Enfin, elle arrive à l’école. »**'] },
  ]),

  // ---------- Les vêtements et les couleurs ----------
  L('fr-vetements-1', 'fr-f1-vetements', '10.1', 'Les vêtements et l’uniforme', 12, ['Lexique', 'Communication'], [
    'Clothes (**les vêtements**):\n- **la chemise** (shirt), **le tee-shirt**, **le pull** (sweater), **la veste** (jacket)\n- **le pantalon** (trousers), **le short** (shorts), **la jupe** (skirt), **la robe** (dress)\n- **le pagne** (wrapper, the printed cloth), **le kaba** (a long loose dress worn in Cameroon)\n- **le chapeau** (hat), **la casquette** (cap), **la cravate** (tie)\n- **les chaussettes** (socks), **les chaussures** (shoes), **les sandales** (sandals)',
    'The verb **porter** (to wear) is a regular -er verb: je porte, tu portes, il porte, nous portons, vous portez, ils portent. « **Qu’est-ce que tu portes ?** » « **Je porte** un pantalon et une chemise. »',
    'The school uniform (**l’uniforme**), an original example: « Dans notre collège, les garçons portent une chemise bleue et un pantalon kaki. Les filles portent une chemise bleue et une jupe kaki. Tous les élèves portent des chaussures noires. Le dimanche, ma mère porte un kaba en pagne et mon père porte une chemise en pagne. »',
  ], 'fr1-vetements', '« Je porte » means both "I wear" and "I am wearing": French has one present tense.',
  ['« Une veste » is:', ['a jacket', 'a vest', 'a skirt', 'a dress'], 'A vest is « un maillot de corps »; « une veste » is a jacket.'],
  [['L’uniforme', 'The school uniform.'], ['Le pagne', 'The printed cloth, also worn tied as a wrapper.'], ['Porter', 'To wear: « Elle porte une robe. »']],
  [
    { q: 'Translate: "She is wearing a skirt and sandals."', steps: ['« Elle porte » = she wears or she is wearing.', '« Une jupe » (a skirt), « des sandales » (sandals).', '**« Elle porte une jupe et des sandales. »**'] },
    { q: 'Answer the question: « Qu’est-ce que tu portes à l’école ? »', steps: ['Start with « Je porte… » and list the uniform.', '**« Je porte l’uniforme : une chemise bleue, un pantalon kaki et des chaussures noires. »**'] },
  ]),

  L('fr-couleurs-1', 'fr-f1-vetements', '10.2', 'Les couleurs et l’accord', 12, ['Lexique', 'Grammaire'], [
    'The colours (**les couleurs**): **rouge**, **jaune**, **vert**, **bleu**, **blanc**, **noir**, **gris**, **rose**, **violet**, **orange**, **marron** (brown), **beige**. To ask: « **De quelle couleur est** ta chemise ? » « Elle est blanche. »',
    'A colour is an adjective: it comes **after** the noun and **agrees** with it:\n- feminine: add **-e**: un pull vert → une robe vert**e**; bleu → bleu**e**; noir → noir**e**; gris → gris**e**\n- already ending in -e: no change: un sac rouge, une jupe rouge\n- special forms: blanc → **blanche**, violet → **violette**\n- plural: add **-s**: des pulls verts, des robes vertes, des chemises blanches',
    'Two colours **never change**: **marron** and **orange** (they are also the names of a chestnut and of a fruit): « des chaussures marron », « une robe orange ». A colour with **clair** (light) or **foncé** (dark) does not change either: « une chemise bleu clair », « des pantalons vert foncé ». « Rose » does agree: « des robes roses ».',
  ], 'fr1-couleurs', 'Marron and orange never take an e or an s.',
  ['« Des robes ___ » (orange)', ['orange', 'oranges', 'orangées', 'orangée'], 'Orange never changes.'],
  [['Clair', 'Light (colour): bleu clair.'], ['Foncé', 'Dark (colour): vert foncé.'], ['S’accorder', 'To agree: to take the gender and number of the noun.']],
  [
    { q: 'Make the colours agree: « une chemise (vert) », « des chaussettes (blanc) », « des sacs (marron) ».', steps: ['« Chemise » is feminine singular: **verte**.', '« Chaussettes » is feminine plural and blanc → blanche: **blanches**.', '« Marron » never changes: **des sacs marron**.'] },
    { q: 'Describe a football kit: a green shirt, yellow shorts and red socks.', steps: ['Each colour follows its noun and agrees.', '**« Un maillot vert, un short jaune et des chaussettes rouges. »**'] },
  ]),

  // ---------- Décrire une personne ----------
  L('fr-adjectifs-1', 'fr-f1-portrait', '11.1', 'L’accord des adjectifs qualificatifs', 12, ['Grammaire'], [
    'An **adjectif qualificatif** describes a noun and agrees with it in **gender** (masculine or feminine) and **number** (singular or plural):\n- feminine: add **-e**: grand → grand**e**, petit → petit**e**, intelligent → intelligent**e**\n- plural: add **-s**: grand**s**, grande**s**\n- adjectives ending in -e do not change in the feminine: mince, calme, timide, sympathique, malade',
    'Special feminine forms:\n- **-if → -ive**: sportif → sportive, actif → active\n- **-eux → -euse**: courageux → courageuse, paresseux → paresseuse\n- **-eur → -euse**: travailleur → travailleuse\n- **-il → -ille**, **-el → -elle**, **-on → -onne**, **-ien → -ienne**: gentil → gentille, cruel → cruelle, bon → bonne\n- irregular: beau → **belle**, nouveau → **nouvelle**, vieux → **vieille**, gros → **grosse**\nAdjectives ending in -s or -x do not change in the masculine plural: un garçon courageux, des garçons courageux.',
    'Most adjectives come **after** the noun: une fille intelligente, un élève sérieux. Some short, common adjectives come **before**: petit, grand, beau, joli, bon, mauvais, jeune, vieux, gros, nouveau: « une **petite** maison », « un **bon** ami », « une **belle** robe ».',
  ], 'fr1-adjectifs', 'Look at the noun first: its gender and number decide the ending of the adjective.',
  ['The feminine of « travailleur » is:', ['travailleuse', 'travailleure', 'travailleurse', 'travailleuve'], '-eur becomes -euse.'],
  [['Adjectif qualificatif', 'A word that describes a noun: grand, gentil, rouge.'], ['Le genre', 'Masculine or feminine.'], ['Le nombre', 'Singular or plural.']],
  [
    { q: 'Make the adjectives agree: « Ma tante est (gentil) et (sportif). »', steps: ['« Tante » is feminine singular.', 'gentil → **gentille**; sportif → **sportive**.', '**« Ma tante est gentille et sportive. »**'] },
    { q: 'Write « des élèves sérieux » for a group of girls.', steps: ['Feminine plural of « sérieux »: -eux → -euse, then add s.', '**« des élèves sérieuses »**'] },
  ]),

  L('fr-portrait-1', 'fr-f1-portrait', '11.2', 'Faire le portrait d’une personne', 12, ['Écriture', 'Communication'], [
    'The **physique** (looks):\n- with **être**: Il est grand. Elle est petite, mince, de taille moyenne.\n- with **avoir** for hair and eyes: « Elle **a les** cheveux longs et tressés. » « Il **a les** yeux noirs. » « Il a le visage rond. »\n- **Il porte des lunettes.** (He wears glasses.)',
    'The **caractère** (character): gentil, poli, travailleur, paresseux, timide, **bavard** (talkative), **drôle** (funny), calme, généreux, sérieux, courageux. Use **très** (very), **assez** (quite) and **un peu** (a little): « Il est un peu timide. »',
    'A model portrait (original text):\n« Mon meilleur ami s’appelle Tanyi. Il a douze ans. Il est grand et mince. Il a les cheveux courts et les yeux noirs. Il est très gentil et un peu bavard. En classe, il est sérieux et travailleur. Il aime le football et il joue bien. »\nThe plan: **name and age → looks → character → likes**.',
  ], 'fr1-portrait', 'For hair and eyes French uses avoir + les: « Il a les yeux noirs. »',
  ['« Elle a les cheveux ___ » (braided)', ['tressés', 'tressée', 'tresse', 'tresser'], '« Cheveux » is masculine plural, so the adjective ends in -s.'],
  [['Le physique', 'How a person looks.'], ['Le caractère', 'What a person is like inside: gentle, lazy, shy.'], ['Bavard', 'Talkative; feminine « bavarde ».']],
  [
    { q: 'Rewrite the portrait of Tanyi for a girl called Manka (first three sentences).', steps: ['Change the possessive and every adjective to the feminine.', '**« Ma meilleure amie s’appelle Manka. Elle a douze ans. Elle est grande et mince. »**'] },
    { q: 'Write two sentences about your grandmother: one about her looks, one about her character.', steps: ['Looks with être or avoir; character with être.', 'Example: **« Ma grand-mère est petite et elle a les cheveux blancs. Elle est très gentille et un peu drôle. »**'] },
  ]),

  // ---------- La maison ----------
  L('fr-maison-1', 'fr-f1-maison', '12.1', 'Les pièces et les meubles', 12, ['Lexique', 'Lecture'], [
    'The rooms (**les pièces**) of a house: **le salon** (living room), **la salle à manger** (dining room), **la cuisine** (kitchen), **la chambre** (bedroom), **la douche** or **la salle de bains** (bathroom), **les toilettes** (toilet, always plural), **le couloir** (corridor), **la véranda**. Outside: **la cour** (yard), **le jardin** (garden), **le portail** (gate).',
    'Furniture (**les meubles**) and things in the house:\n- in the living room: **un fauteuil** (armchair), **un canapé** (sofa), **une table basse**, **une télévision**\n- in the bedroom: **un lit** (bed), **une armoire** (wardrobe), **une moustiquaire** (mosquito net)\n- in the kitchen: **une cuisinière** (cooker), **un réfrigérateur**, **des marmites** (cooking pots)',
    'A model description (original text):\n« Ma famille habite dans une maison à Ebolowa. Il y a trois chambres, un salon, une cuisine et une douche. Devant la maison, il y a une grande cour avec un manguier. Dans ma chambre, il y a un lit, une armoire et une petite table. Le soir, nous regardons la télévision au salon. »',
  ], 'fr1-maison', 'False friend: « une pièce » is any room; « une chambre » is a bedroom.',
  ['Where do we keep our clothes?', ['dans une armoire', 'dans un fauteuil', 'dans une marmite', 'dans la cour'], 'Une armoire is a wardrobe.'],
  [['Une pièce', 'A room of a house.'], ['Un meuble', 'A piece of furniture.'], ['La moustiquaire', 'A net over the bed against mosquitoes.']],
  [
    { q: 'Say in French: "In my bedroom there is a bed and a wardrobe."', steps: ['« There is » = **il y a**.', '**« Dans ma chambre, il y a un lit et une armoire. »**'] },
    { q: 'Where do we do these things? manger, dormir, faire la cuisine.', steps: ['**On mange dans la salle à manger** (or au salon).', '**On dort dans la chambre.**', '**On fait la cuisine dans la cuisine.**'] },
  ]),

  L('fr-possessifs-1', 'fr-f1-maison', '12.2', 'Les adjectifs possessifs', 12, ['Grammaire'], [
    'One owner:\n- my: **mon** (masculine), **ma** (feminine), **mes** (plural)\n- your (tu): **ton**, **ta**, **tes**\n- his or her: **son**, **sa**, **ses**\nThe possessive agrees with the **thing owned**, not with the owner: « Ayuk range **sa** chambre » (his room: « chambre » is feminine). « Bih lave **son** pantalon » (her trousers: « pantalon » is masculine).',
    'Several owners:\n- our: **notre** (singular), **nos** (plural)\n- your (vous): **votre**, **vos**\n- their: **leur**, **leurs**\n« **Notre** maison est grande. **Nos** voisins sont gentils. Les enfants aiment **leur** maîtresse et **leurs** camarades. »',
    'Before a feminine noun starting with a vowel or a silent h, use **mon, ton, son** to make the sound easy: « **mon** amie », « **ton** école », « **son** histoire ». Never « ma amie ».',
  ], 'fr1-possessifs', '« Son » and « sa » can both mean "his" or "her": look at the thing, not the person.',
  ['« ___ école est loin. » (my)', ['Mon', 'Ma', 'Mes', 'Ta'], '« École » is feminine but starts with a vowel: mon.'],
  [['Adjectif possessif', 'A word that shows who owns something: mon, ta, leurs.'], ['Le possesseur', 'The owner.'], ['Leur, leurs', 'Their: one thing (leur) or several things (leurs).']],
  [
    { q: 'Complete: « Fanta cherche ___ cahier et ___ trousse. » (her)', steps: ['« Cahier » is masculine: **son**.', '« Trousse » is feminine: **sa**.', '**« Fanta cherche son cahier et sa trousse. »**'] },
    { q: 'Complete: « Les élèves écoutent ___ professeur et lavent ___ mains. » (their)', steps: ['One teacher: **leur**.', 'Several hands: **leurs**.', '**« Les élèves écoutent leur professeur et lavent leurs mains. »**'] },
  ]),

  // ---------- La négation et la description d’un objet ----------
  L('fr-negation-1', 'fr-f1-negation', '13.1', 'La négation : ne … pas', 12, ['Grammaire'], [
    'To make a sentence negative, put **ne** before the verb and **pas** after it: « Je parle anglais. » → « Je **ne** parle **pas** anglais. » Before a vowel or a silent h, ne becomes **n’**: « Il **n’**aime **pas** le riz. » « Elle **n’**habite **pas** ici. »',
    'After a negative verb, **un, une, des** become **de** (d’ before a vowel):\n- « J’ai un frère. » → « Je n’ai pas **de** frère. »\n- « Il y a des bananes. » → « Il n’y a pas **de** bananes. »\n- « Elle mange une orange. » → « Elle ne mange pas **d’**orange. »\nBut **le, la, les** do not change: « Je n’aime pas **le** riz. » And after **être** nothing changes: « Ce n’est pas **un** stylo. »',
    'Answering questions: « Tu as un vélo ? » « **Non**, je n’ai pas de vélo. » To say yes to a **negative** question, use **si**: « Tu n’as pas faim ? » « **Si**, j’ai faim ! » In speech, people often drop « ne » (« Je sais pas »), but in writing it is always needed.',
  ], 'fr1-negation', 'In writing, never forget the « ne ».',
  ['The negative of « Nous avons des cahiers. » is:', ['« Nous n’avons pas de cahiers. »', '« Nous n’avons pas des cahiers. »', '« Nous avons pas de cahiers. »', '« Nous ne pas avons de cahiers. »'], 'Ne … pas around the verb, and des becomes de.'],
  [['La négation', 'Saying no or not: ne … pas.'], ['Une phrase affirmative', 'A sentence that is not negative.'], ['Si', 'Yes, in answer to a negative question.']],
  [
    { q: 'Make negative: « Elle aime les mangues. »', steps: ['« Aime » starts with a vowel: **n’aime**.', '« Les » does not change.', '**« Elle n’aime pas les mangues. »**'] },
    { q: 'Make negative: « Il y a une école dans mon village. »', steps: ['« Il y a » → **il n’y a pas**.', '« une » becomes **d’** before « école ».', '**« Il n’y a pas d’école dans mon village. »**'] },
  ]),

  L('fr-objet-1', 'fr-f1-negation', '13.2', 'Décrire un objet', 12, ['Lexique', 'Communication'], [
    'To describe an object, give:\n- its **forme** (shape): rond, carré (square), rectangulaire, triangulaire, long, pointu (pointed)\n- its **taille** and weight: grand, petit, long, court, **lourd** (heavy), **léger** (light)\n- its **couleur**\n- its **matière** (material) with **en**: en bois (wood), en plastique, en métal, en verre (glass), en tissu (cloth), en papier, en raphia',
    'To give the use, say **il sert à** (or **elle sert à**) + infinitive: « Une gourde sert à transporter de l’eau. » « Un panier en raphia sert à porter les fruits. » « Une moustiquaire sert à protéger contre les moustiques. »',
    'A guessing game (original text): « **Qu’est-ce que c’est ?** C’est un objet rectangulaire. Il est petit et léger. Il est en plastique ou en bois. Il sert à tracer des lignes droites et à mesurer. » « C’est une règle ! » Answer « Non, ce n’est pas… » when the guess is wrong.',
  ], 'fr1-objet', 'The material comes after « en » with no article: une chaise en bois.',
  ['A football has which shape?', ['rond', 'carré', 'pointu', 'triangulaire'], 'Un ballon est rond.'],
  [['La matière', 'What an object is made of: en bois, en métal.'], ['La forme', 'The shape: rond, carré.'], ['Servir à', 'To be used for: « Il sert à écrire. »']],
  [
    { q: 'Describe a plastic bucket: round, blue, used to carry water.', steps: ['Shape, material, colour, then use.', '**« C’est un objet rond. Il est en plastique. Il est bleu. Il sert à porter de l’eau. »** (C’est un seau.)'] },
    { q: 'Guess: « Il est rectangulaire. Il est noir ou vert. Il est sur le mur de la classe. On écrit dessus avec de la craie. »', steps: ['Chalk is used on it, and it hangs on the classroom wall.', '**C’est le tableau.**'] },
  ]),
];
