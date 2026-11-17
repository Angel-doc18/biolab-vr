// French lessons for Form 1, term 3: jobs and the verb faire, aller and the
// near future, the market and prices, the weather and a clean environment, the
// neighbourhood and prepositions of place, directions and transport, the
// symbols and festivals of Cameroon, short messages and an information sheet.
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

export const LESSONS_1C = [
  // ---------- Les métiers ----------
  L('fr-metiers-1', 'fr-f1-metiers', '14.1', 'Les métiers et les lieux de travail', 12, ['Lexique'], [
    'Jobs (**les métiers**) have a masculine and a feminine form:\n- add **-e**: un commerçant → une commerçant**e**, un enseignant → une enseignant**e**\n- **-ier → -ière**: un infirmier → une infirm**ière**, un couturier → une coutur**ière**\n- **-eur → -euse**: un coiffeur → une coiff**euse**, un vendeur → une vend**euse**\n- **-teur → -trice**: un cultivateur → une cultiva**trice**, un instituteur → une institu**trice**\n- **-ien → -ienne**: un mécanicien → une mécanic**ienne**\n- some do not change: un or une **médecin**, un or une **journaliste**, un or une **secrétaire**',
    'Where people work (**le lieu de travail**):\n- l’enseignant travaille **à l’école**; l’infirmière **à l’hôpital** or au centre de santé\n- le cultivateur **au champ**; le commerçant **au marché** or dans une boutique\n- le mécanicien **au garage**; la couturière **dans un atelier**\n- le pêcheur **sur le fleuve** or **en mer**',
    'Saying what someone does: after **être**, there is **no article**: « Mon père **est** mécanicien. » « Ma tante **est** infirmière. » But with **c’est**, keep the article: « **C’est un** mécanicien. » To ask: « **Que fait** ton père ? » or « **Quel est le métier** de ta mère ? »',
  ], 'fr1-metiers', '« Il est médecin » has no article; « C’est un médecin » has one.',
  ['The feminine of « coiffeur » is:', ['coiffeuse', 'coiffeure', 'coiffrice', 'coiffière'], '-eur becomes -euse.'],
  [['Un métier', 'A job or trade.'], ['Le lieu de travail', 'The place where someone works.'], ['Un atelier', 'A workshop: of a tailor, a carpenter or a mechanic.']],
  [
    { q: 'Read and give the job: « Ma mère vend des tissus au marché. »', steps: ['She sells at the market: she is a trader.', '**« Ma mère est commerçante. »** (no article after « est »)'] },
    { q: 'Give the feminine: un instituteur, un infirmier, un vendeur.', steps: ['-teur → -trice: **une institutrice**.', '-ier → -ière: **une infirmière**.', '-eur → -euse: **une vendeuse**.'] },
  ]),

  L('fr-faire-1', 'fr-f1-metiers', '14.2', 'Le verbe faire au présent', 12, ['Conjugaison', 'Communication'], [
    '**Faire** (to do, to make) is irregular:\n- je **fais**, tu **fais**, il, elle, on **fait**\n- nous **faisons** (say /fəzɔ̃/), vous **faites**, ils, elles **font**',
    'Common expressions with faire:\n- **faire ses devoirs** (to do homework), **faire la cuisine** (to cook)\n- **faire le ménage** (to clean the house), **faire la vaisselle** (to wash the dishes)\n- **faire les courses** (to do the shopping)\n- **faire du sport**, **faire du vélo** (to ride a bicycle), **faire de la natation** (to swim)\n- the question **Qu’est-ce que tu fais ?** means "What are you doing?" or "What do you do?"',
    'A short dialogue (original text):\n« Le samedi, qu’est-ce que vous faites à la maison ? »\n« Ma sœur et moi, nous faisons le ménage. Mon frère fait la vaisselle et mes parents font les courses au marché. Et toi ? »\n« Moi, je fais mes devoirs, puis je fais du vélo avec mes cousins. »',
  ], 'fr1-faire', 'Say « vous faites », never « vous faisez ».',
  ['« Ils ___ la cuisine. »', ['font', 'faisent', 'fait', 'faites'], 'Ils font: an irregular form.'],
  [['Faire le ménage', 'To clean the house.'], ['Faire les courses', 'To do the shopping.'], ['Faire la vaisselle', 'To wash the dishes.']],
  [
    { q: 'Complete with faire: « Nous ___ nos devoirs et vous ___ du sport. »', steps: ['nous → **faisons**; vous → **faites**.', '**« Nous faisons nos devoirs et vous faites du sport. »**'] },
    { q: 'Answer: « Que fait ta mère le samedi ? » (shopping and cooking)', steps: ['Use « elle fait » for both activities.', '**« Le samedi, ma mère fait les courses et elle fait la cuisine. »**'] },
  ]),

  // ---------- Aller et le futur proche ----------
  L('fr-aller-1', 'fr-f1-projets', '15.1', 'Le verbe aller et à + le lieu', 12, ['Conjugaison', 'Grammaire'], [
    '**Aller** (to go) ends in -er but is irregular:\n- je **vais**, tu **vas**, il, elle, on **va**\n- nous **allons**, vous **allez**, ils, elles **vont**\nThe same verb asks how someone is: « Comment **vas**-tu ? » « Comment **allez**-vous ? »',
    'To say where you go, use **à** + the place. À joins the article:\n- **à la** + feminine: à la maison, à la pharmacie, à la plage\n- **au** (à + le) + masculine: au marché, au stade, au collège\n- **à l’** + vowel or silent h: à l’école, à l’hôpital, à l’église\n- **aux** (à + les) + plural: aux champs, aux toilettes\n- a town takes **à** alone: à Douala, à Garoua, à Bamenda',
    'To go to a person’s home or shop, use **chez**: « Je vais **chez** ma grand-mère. » « Elle va **chez** le médecin. » « Nous rentrons **chez** nous. » To ask: « **Où vas-tu ?** » « Je vais au marché. »',
  ], 'fr1-aller', 'À + le = au and à + les = aux, as with « avoir mal à ».',
  ['« Nous ___ à l’église le dimanche. »', ['allons', 'allez', 'vont', 'vais'], 'Nous allons.'],
  [['Aller', 'To go; irregular in the present.'], ['Chez', 'At or to the home of: chez moi, chez le coiffeur.'], ['Au, aux', 'À + le and à + les.']],
  [
    { q: 'Complete: « Les élèves vont ___ bibliothèque et le professeur va ___ bureau. »', steps: ['« Bibliothèque » is feminine: **à la**.', '« Bureau » is masculine: **au**.', '**« Les élèves vont à la bibliothèque et le professeur va au bureau. »**'] },
    { q: 'Say: "I am going to my uncle’s house in Kribi."', steps: ['To a person’s home: **chez**; a town: **à**.', '**« Je vais chez mon oncle à Kribi. »**'] },
  ]),

  L('fr-futur-proche-1', 'fr-f1-projets', '15.2', 'Le futur proche', 12, ['Grammaire', 'Écriture'], [
    'The **futur proche** (near future) is **aller** in the present + an **infinitive**: « Je **vais manger**. » « Nous **allons visiter** le musée. » It is used for plans and for things that will happen soon. Time words: **demain** (tomorrow), **ce soir**, **ce week-end**, **samedi prochain**, **la semaine prochaine**, **pendant les vacances**, **plus tard** (later).',
    'The negative goes around **aller**: « Je **ne vais pas** sortir. » « Ils **ne vont pas** jouer. » Questions: « Est-ce que tu vas venir ? » « **Qu’est-ce que tu vas faire** demain ? »',
    'Holiday plans (original text):\n« Pendant les grandes vacances, je vais aller au village chez mes grands-parents à Batibo. Je vais aider mon grand-père au champ et je vais apprendre à préparer l’achu avec ma grand-mère. Le soir, nous allons écouter des contes. Plus tard, je vais devenir médecin. »',
  ], 'fr1-futur-proche', 'Only « aller » changes; the second verb stays in the infinitive.',
  ['« Demain, nous ___ visiter le musée. »', ['allons', 'allez', 'vont', 'allions'], 'Nous allons + infinitive.'],
  [['Le futur proche', 'Aller + infinitive: an action that will happen soon.'], ['Demain', 'Tomorrow.'], ['Plus tard', 'Later; « plus tard, je vais être… » for a future job.']],
  [
    { q: 'Put into the futur proche: « Je mange. » « Elles dansent. »', steps: ['Conjugate aller and keep the verb in the infinitive.', '**« Je vais manger. »** **« Elles vont danser. »**'] },
    { q: 'Make negative: « Ils vont jouer au football. »', steps: ['Put ne … pas around « vont ».', '**« Ils ne vont pas jouer au football. »**'] },
  ]),

  // ---------- Au marché ----------
  L('fr-marche-1', 'fr-f1-marche', '16.1', 'Les produits et les quantités', 12, ['Lexique'], [
    'At the market (**au marché**):\n- fruits: **la banane**, **le plantain**, **la mangue**, **l’ananas**, **la papaye**, **l’orange**, **l’avocat**, **le safou** (the African plum)\n- vegetables: **la tomate**, **l’oignon**, **le piment**, **le gombo** (okra), **le chou**, **la carotte**\n- other food: **le riz**, **le maïs**, **le manioc**, **le macabo**, **l’igname** (yam), **les haricots**, **les arachides** (groundnuts), **le poisson**, **la viande**, **l’huile de palme**, **le sel**',
    'Quantities: **un kilo de** riz, **un litre d’**huile, **un tas de** tomates (a heap), **un régime de** plantains (a bunch), **un sac de** maïs, **une bouteille d’**eau, **un paquet de** sucre, **une boîte de** sardines. After a quantity, use **de** (d’ before a vowel) with **no article**: « un kilo **de** sucre », not « un kilo du sucre ».',
    'A shopping list (original text):\n« Maman prépare le ndolé. Elle écrit sa liste : un kilo de viande, deux tas de feuilles de ndolé, un litre d’huile, un tas d’arachides, un paquet de sel et un régime de plantains. Elle donne la liste à Abena, qui va au marché. »',
  ], 'fr1-marche', 'After a quantity always « de »: un kilo de riz, un litre d’huile.',
  ['« Un régime de plantains » is:', ['a bunch of plantains', 'a kilo of plantains', 'a bag of plantains', 'a heap of plantains'], 'Un régime = a bunch, as it grows on the plant.'],
  [['Un tas', 'A heap: food sold in small heaps at the market.'], ['Un régime', 'A bunch of bananas or plantains.'], ['La liste des courses', 'The shopping list.']],
  [
    { q: 'Write in French: a litre of palm oil, a bag of rice, a bottle of water.', steps: ['Quantity + de (d’ before a vowel), no article.', '**un litre d’huile de palme, un sac de riz, une bouteille d’eau**'] },
    { q: 'Correct: « Je voudrais un kilo du poisson. »', steps: ['After « un kilo », use **de**, not « du ».', '**« Je voudrais un kilo de poisson. »**'] },
  ]),

  L('fr-prix-1', 'fr-f1-marche', '16.2', 'Demander le prix et marchander', 12, ['Communication', 'Lexique'], [
    'Numbers for prices:\n- 60 **soixante**, 70 **soixante-dix**, 71 **soixante et onze**, 75 **soixante-quinze**\n- 80 **quatre-vingts**, 81 **quatre-vingt-un**, 90 **quatre-vingt-dix**, 95 **quatre-vingt-quinze**\n- 100 **cent**, 150 **cent cinquante**, 200 **deux cents**, 250 **deux cent cinquante**, 500 **cinq cents**\n- 1 000 **mille**, 1 500 **mille cinq cents**, 2 000 **deux mille**, 10 000 **dix mille**\nRules: « cents » and « quatre-vingts » take an s only when nothing follows (deux cents, but deux cent cinquante); **mille** never takes an s. Prices are in **francs CFA**, written 500 F CFA or 500 FCFA.',
    'Asking the price: « **C’est combien ?** » « **Ça coûte combien ?** » « **Combien coûte** le kilo de riz ? » « Il coûte six cents francs. » « **Combien coûtent** les mangues ? » « Cent francs les trois. »',
    'Bargaining politely (**marchander**):\n« Bonjour, Madame. Combien coûte l’ananas ? »\n« Cinq cents francs. »\n« C’est trop cher ! Vous pouvez diminuer un peu ? »\n« Bon, quatre cents francs, c’est mon dernier prix. »\n« D’accord, je prends deux ananas. Voici mille francs. »\n« Et voici votre monnaie : deux cents francs. Merci ! »',
  ], 'fr1-prix', '« Mille » never takes an s: deux mille francs.',
  ['300 F is said:', ['trois cents francs', 'trois cent francs', 'trente cents francs', 'trois mille francs'], 'Cents takes an s because nothing follows.'],
  [['Marchander', 'To bargain over a price.'], ['La monnaie', 'The change given back after paying.'], ['Coûter', 'To cost: « Ça coûte combien ? »']],
  [
    { q: 'Write in words: 1 750 F and 80 F.', steps: ['1 750 = mille + sept cent cinquante (no s on cent: something follows).', '**mille sept cent cinquante francs**; 80 = **quatre-vingts francs** (s: nothing follows).'] },
    { q: 'Three pineapples cost 500 F each. What do you pay? Answer in a full French sentence.', steps: ['3 × 500 = 1 500 F.', '**« Les trois ananas coûtent mille cinq cents francs. »**'] },
  ]),

  // ---------- Le temps et l’environnement ----------
  L('fr-meteo-1', 'fr-f1-temps', '17.1', 'Quel temps fait-il ?', 12, ['Lexique', 'Communication'], [
    'To ask about the weather: « **Quel temps fait-il ?** »\n- **il fait beau** (fine), **il fait mauvais** (bad), **il fait chaud** (hot), **il fait froid** (cold), **il fait frais** (cool)\n- **il pleut** (it is raining), **il y a de l’orage** (there is a storm)\n- **il y a du soleil** (it is sunny), **il y a du vent** (it is windy), **il y a des nuages** (it is cloudy), **il y a du brouillard** (it is foggy)',
    'The seasons in Cameroon: **la saison sèche** (the dry season) and **la saison des pluies** (the rainy season). In the Centre and the South there are two dry seasons and two rainy seasons in the year; in the North, the West and on the coast there is one of each. In the dry season, the **harmattan**, a dry, dusty wind from the Sahara, blows over the North.',
    'A weather report (original text):\n« Aujourd’hui à Douala, il fait chaud et il pleut l’après-midi. À Maroua, il fait très chaud et il y a du soleil. À Bamenda, il fait frais et il y a du brouillard le matin. Quand il pleut, prenez un parapluie ! »',
  ], 'fr1-meteo', 'Weather sentences start with « il » that stands for nobody: il fait, il pleut, il y a.',
  ['« Il y a du vent » means:', ['It is windy.', 'It is raining.', 'It is foggy.', 'It is cold.'], 'Le vent = the wind.'],
  [['La météo', 'The weather report.'], ['La saison des pluies', 'The rainy season.'], ['L’harmattan', 'A dry, dusty wind from the Sahara in the dry season.']],
  [
    { q: 'Describe the weather: the sun is shining and it is hot.', steps: ['Sun: **il y a du soleil**; hot: **il fait chaud**.', '**« Il fait beau et il fait chaud. Il y a du soleil. »**'] },
    { q: 'Translate: "It is raining in Buea and it is cool."', steps: ['Raining: **il pleut**; cool: **il fait frais**.', '**« Il pleut à Buea et il fait frais. »**'] },
  ]),

  L('fr-proprete-1', 'fr-f1-temps', '17.2', 'Un environnement propre', 12, ['Lexique', 'Lecture'], [
    'Words for a clean environment:\n- **propre** (clean) and **sale** (dirty)\n- **les ordures** (rubbish), **la poubelle** (dustbin), **le balai** (broom), **le caniveau** (gutter)\n- verbs: **balayer** (to sweep), **nettoyer** (to clean), **ramasser** (to pick up), **laver** (to wash), **jeter** (to throw away: je jette, nous jetons)\n- **l’eau potable** (drinking water), **les moustiques**, **les mouches** (flies)',
    'Good habits: « Nous balayons la cour chaque matin. Nous jetons les ordures dans la poubelle. Nous ne jetons pas les ordures dans le caniveau. Nous lavons les mains avec du savon. Nous buvons de l’eau potable. » Dirty water and rubbish bring **moustiques** and **mouches**, which carry illnesses such as **le paludisme** and **le choléra**.',
    'A community clean-up (original text):\n« Le samedi matin, c’est **l’investissement humain** dans notre quartier à Bertoua. Les jeunes nettoient les caniveaux, les femmes balaient la place du marché et les enfants ramassent les sachets en plastique. À midi, le quartier est propre et tout le monde partage un repas. »',
  ], 'fr1-proprete', '« Jeter » doubles the t when the ending is silent: je jette, but nous jetons.',
  ['« Sale » is the opposite of:', ['propre', 'chaud', 'grand', 'léger'], 'Sale = dirty; propre = clean.'],
  [['Les ordures', 'Rubbish, waste.'], ['Le caniveau', 'The gutter at the side of the road.'], ['L’investissement humain', 'A day when people clean their neighbourhood together.']],
  [
    { q: 'Write two rules for the class, one positive and one negative, with « nous ».', steps: ['Positive: an action to do; negative: ne … pas around the verb.', '**« Nous balayons la classe chaque jour. Nous ne jetons pas les papiers par terre. »**'] },
    { q: 'Why must we not leave dirty water near the house? Answer in French.', steps: ['Dirty water brings mosquitoes, which carry malaria.', '**« Parce que l’eau sale attire les moustiques, et les moustiques donnent le paludisme. »**'] },
  ]),

  // ---------- Mon quartier ----------
  L('fr-quartier-1', 'fr-f1-quartier', '18.1', 'Les lieux du quartier', 12, ['Lexique', 'Lecture'], [
    'Places in a town or a village (**les lieux**):\n- **la mairie** (town hall), **le marché**, **la boutique** (small shop), **la boulangerie** (bakery)\n- **la pharmacie**, **le centre de santé**, **l’hôpital**\n- **l’école**, **le collège**, **le lycée**\n- **l’église**, **la mosquée**\n- **la poste**, **la banque**, **le stade**, **la station-service** (petrol station), **le commissariat** (police station)\n- **la rue** (street), **la route** (road), **le carrefour** (crossroads), **le pont** (bridge)',
    'What we do there: « À la pharmacie, on achète des médicaments. À la boulangerie, on achète du pain. À la poste, on envoie des lettres et des colis. À la banque, on garde son argent. À la mairie, on demande un acte de naissance. » **On** means "people, we" and takes the il form of the verb.',
    'My neighbourhood (original text):\n« J’habite à Bonamoussadi, un quartier de Douala. Dans mon quartier, il y a un grand marché, deux pharmacies, une église et une mosquée. Il y a aussi un carrefour très animé avec beaucoup de motos. Il n’y a pas d’hôpital, mais il y a un centre de santé près de chez moi. »',
  ], 'fr1-quartier', '« On » takes the same verb form as « il »: on achète, on va.',
  ['Where do many Muslims go to pray on Friday?', ['à la mosquée', 'à la mairie', 'à la poste', 'à la banque'], 'La mosquée is the Muslim place of prayer.'],
  [['Le quartier', 'The neighbourhood, part of a town.'], ['La mairie', 'The town hall, where birth certificates are made.'], ['Le carrefour', 'A crossroads, where roads meet.']],
  [
    { q: 'Say where you buy bread and medicine.', steps: ['Bread at the bakery; medicine at the pharmacy.', '**« On achète du pain à la boulangerie et des médicaments à la pharmacie. »**'] },
    { q: 'Write two sentences about your neighbourhood, one with « il y a » and one with « il n’y a pas de ».', steps: ['After a negative, un or une becomes de or d’.', 'Example: **« Dans mon quartier, il y a un marché. Il n’y a pas de stade. »**'] },
  ]),

  L('fr-prepositions-1', 'fr-f1-quartier', '18.2', 'Les prépositions de lieu', 12, ['Grammaire'], [
    'Prepositions that say where something is:\n- **sur** (on), **sous** (under), **dans** (in)\n- **devant** (in front of), **derrière** (behind)\n- **entre** … **et** … (between … and …)\n- **à côté de** (next to), **en face de** (opposite), **près de** (near), **loin de** (far from), **au milieu de** (in the middle of)\n- **à gauche de** (to the left of), **à droite de** (to the right of)',
    'The prepositions that end in **de** join the article:\n- de + le = **du**: à côté **du** marché\n- de + les = **des**: près **des** maisons\n- de la and de l’ do not change: en face **de la** pharmacie, loin **de l’**école',
    'Describing a room and a street (original text): « Mon sac est **sous** la table. Ma trousse est **dans** le sac. Le tableau est **devant** les élèves. La porte est **à côté de** la fenêtre. » « La pharmacie est **en face du** marché, **entre** la banque **et** la boulangerie. »',
  ], 'fr1-prepositions', 'De + le = du and de + les = des, just as à + le = au.',
  ['« près ___ hôpital »', ['de l’', 'du', 'de la', 'des'], '« Hôpital » begins with a silent h: de l’.'],
  [['Une préposition de lieu', 'A word that says where: sur, sous, devant.'], ['En face de', 'Opposite, facing.'], ['Entre … et …', 'Between two things.']],
  [
    { q: 'Complete with du, de la, de l’ or des: « La boutique est à côté ___ église, en face ___ stade, près ___ maisons. »', steps: ['« Église » starts with a vowel: **de l’**.', '« Stade » is masculine: **du**.', '« Maisons » is plural: **des**.'] },
    { q: 'Say: "The cat is under the bed and the book is on the table."', steps: ['Under = **sous**; on = **sur**.', '**« Le chat est sous le lit et le livre est sur la table. »**'] },
  ]),

  // ---------- Le chemin ----------
  L('fr-chemin-1', 'fr-f1-chemin', '19.1', 'Demander et indiquer le chemin', 12, ['Communication'], [
    'Asking the way politely:\n- « **Excusez-moi**, Madame, **où est** la poste, s’il vous plaît ? »\n- « **Pardon**, Monsieur, **pour aller** au stade, s’il vous plaît ? »\n- « Est-ce que la pharmacie est **loin d’ici** ? » « C’est **près d’ici** ? »',
    'Giving directions (to someone you say « vous » to):\n- **Allez tout droit.** (Go straight on.)\n- **Tournez à gauche / à droite.** (Turn left / right.)\n- **Prenez la première / la deuxième rue à droite.** (Take the first / second street on the right.)\n- **Traversez** la route, le pont, le carrefour. (Cross.)\n- **Continuez jusqu’au** carrefour. (Carry on as far as.)\n- **C’est au bout de la rue.** (It is at the end of the street.) **C’est à cinq minutes à pied.**\nTo a friend: va tout droit, tourne à gauche, prends, traverse.',
    'A dialogue in the street (original text):\n« Excusez-moi, Monsieur, où est la pharmacie, s’il vous plaît ? »\n« Allez tout droit. Prenez la deuxième rue à droite. La pharmacie est à gauche, en face de la boulangerie. »\n« C’est loin ? »\n« Non, c’est à cinq minutes à pied. »\n« Merci beaucoup, Monsieur. »\n« De rien. »',
  ], 'fr1-chemin', 'First = premier (première); second = deuxième; third = troisième.',
  ['« Prenez la deuxième rue à gauche » means:', ['Take the second street on the left.', 'Take the first street on the left.', 'Take the second street on the right.', 'Go straight on to the second street.'], 'Deuxième = second; gauche = left.'],
  [['Indiquer le chemin', 'To show or tell someone the way.'], ['Tout droit', 'Straight on.'], ['Au bout de', 'At the end of: au bout de la rue.']],
  [
    { q: 'Look at the map: you are at the school. Give the way to the pharmacy.', steps: ['From the school, go up the avenue past the first street: **allez tout droit**.', 'At the second street, turn right: **prenez la deuxième rue à droite**.', 'The pharmacy is on the left side, facing the bakery: **la pharmacie est à gauche, en face de la boulangerie**.'] },
    { q: 'Put the dialogue in order: (a) « De rien. » (b) « Excusez-moi, où est la poste ? » (c) « Merci beaucoup ! » (d) « Tournez à droite, c’est au bout de la rue. »', steps: ['First the question, then the directions, the thanks and the reply.', '**b, d, c, a**'] },
  ]),

  L('fr-transports-1', 'fr-f1-chemin', '19.2', 'Les moyens de transport', 12, ['Lexique', 'Grammaire'], [
    'The means of transport (**les moyens de transport**): **le taxi**, **la moto** (the moto-taxi), **le bus**, **le car** (coach between towns, from a travel agency), **la voiture** (car), **le vélo** (bicycle), **le train**, **l’avion** (plane), **le bateau** (boat), **la pirogue** (dugout canoe), and **à pied** (on foot).',
    'Which preposition?\n- **en** for a vehicle you get **inside**: en taxi, en bus, en car, en voiture, en train, en avion, en bateau\n- **à** for something you sit **on**: à moto, à vélo, à cheval\n- and always **à pied**\nYou may hear « en moto » or « en vélo » in speech, but « à moto » and « à vélo » are the forms to write.',
    'How people travel (original text):\n« Mon père va au travail à moto. Ma mère prend le taxi pour aller au marché. Pour aller de Douala à Yaoundé, nous voyageons en car ou en train. Mon oncle traverse le fleuve en pirogue. Moi, je vais à l’école à pied : c’est près de la maison. »',
  ], 'fr1-transports', 'Inside a vehicle: en; on top of it: à.',
  ['« Il va au champ ___ vélo. »', ['à', 'en', 'dans', 'par'], 'You sit on a bicycle: à vélo.'],
  [['Un moyen de transport', 'A way of travelling: car, taxi, train.'], ['Le car', 'A coach that travels between towns.'], ['La pirogue', 'A long narrow boat cut from a tree trunk.']],
  [
    { q: 'Choose en or à: ___ avion, ___ moto, ___ pied, ___ voiture.', steps: ['Inside: **en avion**, **en voiture**.', 'On top or on foot: **à moto**, **à pied**.'] },
    { q: 'Answer: « Comment vas-tu à l’école ? » (by taxi)', steps: ['Taxi is a vehicle you sit inside: **en taxi**.', '**« Je vais à l’école en taxi. »**'] },
  ]),

  // ---------- Le Cameroun ----------
  L('fr-drapeau-1', 'fr-f1-cameroun', '20.1', 'Les symboles du Cameroun', 12, ['Lexique', 'Lecture'], [
    'The national flag (**le drapeau national**) has three vertical bands (**trois bandes verticales**): **vert**, **rouge** and **jaune**, from the pole outwards. In the centre of the red band there is a yellow **étoile** (star) with five points (**cinq branches**). The colours are usually explained like this: green for the forests of the South and hope, red for unity, yellow for the sun and the savannas of the North; the star is the star of unity.',
    'Other national symbols:\n- the motto (**la devise**): « **Paix, Travail, Patrie** » (Peace, Work, Fatherland)\n- the national anthem (**l’hymne national**): « Ô Cameroun, berceau de nos ancêtres »\n- the two official languages (**les langues officielles**): **le français** and **l’anglais**\n- the capital (**la capitale**): **Yaoundé**; the money: **le franc CFA**; the country has **dix régions**',
    'Describing the flag (original text): « Le drapeau du Cameroun a trois bandes verticales : une bande verte, une bande rouge et une bande jaune. Au centre de la bande rouge, il y a une étoile jaune à cinq branches. Le matin, à l’école, les élèves chantent l’hymne national pendant la levée des couleurs. »',
  ], 'fr1-drapeau', 'The colour agrees with « bande » (feminine): une bande verte.',
  ['How many points does the star on the flag have?', ['cinq', 'trois', 'six', 'quatre'], 'Une étoile à cinq branches.'],
  [['La devise', 'The motto: Paix, Travail, Patrie.'], ['L’hymne national', 'The national anthem.'], ['La levée des couleurs', 'Raising the flag at school, with the anthem.']],
  [
    { q: 'Complete: « La capitale du Cameroun est ___. Les langues officielles sont ___ et ___. »', steps: ['The capital: **Yaoundé**.', 'The official languages: **le français** and **l’anglais**.'] },
    { q: 'Describe the flag in two French sentences.', steps: ['The three bands, then the star.', '**« Le drapeau a trois bandes verticales : verte, rouge et jaune. Au centre de la bande rouge, il y a une étoile jaune. »**'] },
  ]),

  L('fr-fetes-1', 'fr-f1-cameroun', '20.2', 'Les fêtes et les dates importantes', 12, ['Lexique', 'Lecture'], [
    'Important days in Cameroon:\n- **le 1er janvier**: le jour de l’An (New Year’s Day)\n- **le 11 février**: la fête de la Jeunesse (Youth Day)\n- **le 8 mars**: la Journée internationale de la femme\n- **le 1er mai**: la fête du Travail (Labour Day)\n- **le 20 mai**: la fête nationale, also called la fête de l’Unité\n- **le 25 décembre**: Noël (Christmas)\nReligious feasts move each year: **Pâques** (Easter), **l’Ascension**, **la fin du ramadan** and **la Tabaski**. A day without work or school is **un jour férié**.',
    'Saying the date: **le** + number + month: « La fête nationale, c’est **le 20 mai**. » For the first day of the month say **le premier** and write **le 1er**: « le 1er mai ». To ask: « **Quelle est la date de** la fête de la Jeunesse ? »',
    'National Day (original text):\n« Le 20 mai, c’est la fête nationale. Dans toutes les villes, il y a un grand défilé. Les élèves défilent en uniforme devant les autorités et le public applaudit. Le soir, les familles partagent un bon repas et les enfants dansent. »',
  ], 'fr1-fetes', 'Write le 1er for the first day, then le 2, le 3: « le 1er mai », « le 2 mai ».',
  ['« Un défilé » is:', ['a parade', 'a holiday', 'a speech', 'a flag'], 'Les élèves défilent: they march past.'],
  [['Le défilé', 'The parade on national days.'], ['Un jour férié', 'A public holiday.'], ['La fête nationale', 'The national day: le 20 mai.']],
  [
    { q: 'Write in letters: 1 May and 25 December.', steps: ['The first day: **le premier mai** (le 1er mai).', '**le vingt-cinq décembre**'] },
    { q: 'Answer: « Qu’est-ce qu’on fête le 25 décembre ? »', steps: ['25 December is Christmas.', '**« Le 25 décembre, on fête Noël. »**'] },
  ]),

  // ---------- Courts messages ----------
  L('fr-message-1', 'fr-f1-messages', '21.1', 'Inviter, accepter, refuser', 12, ['Écriture', 'Communication'], [
    'To invite (**inviter**): « **Je t’invite à** mon anniversaire samedi à 15 heures. » « **Tu veux venir** au stade avec nous ? » « **Est-ce que tu es libre** dimanche ? »\nTo accept (**accepter**): « **Oui, avec plaisir !** » « **D’accord**, je viens. » « Merci, c’est gentil ! »\nTo refuse politely (**refuser**), with a reason: « **Désolé** (or désolée), **je ne peux pas**, parce que je vais au village. » « Merci, mais je ne suis pas libre. »',
    'A short message has three parts:\n- a greeting: **Salut Bih !** or **Chère Bih,**\n- the message: what, **when** (day and time) and **where**\n- a closing and your name: **À samedi !**, **À bientôt !**, **Amitiés**\nGood wishes: **Joyeux anniversaire !** **Bonne fête !** **Bonne année !** **Joyeux Noël !** **Bonne chance !** **Félicitations !**',
    'An invitation by SMS (original text):\n« Salut Bih ! Je t’invite à mon anniversaire samedi 13 juin à 15 h, chez moi à Bonabéri. Il y a de la musique et un gâteau. Tu viens ? Réponds-moi vite ! Mbong »\nThe reply: « Salut Mbong ! Oui, avec plaisir ! Merci pour l’invitation. À samedi ! Bih »',
  ], 'fr1-message', 'An invitation always gives the day, the time and the place.',
  ['Which sentence refuses politely?', ['« Désolée, je ne peux pas. Merci quand même ! »', '« Non ! »', '« Je ne veux pas venir chez toi. »', '« Ton anniversaire ne m’intéresse pas. »'], 'Apologise and thank the person.'],
  [['Une invitation', 'A message asking someone to come.'], ['Accepter', 'To say yes to an invitation.'], ['Refuser', 'To say no; politely, with a reason.']],
  [
    { q: 'Mbong invites you, but you are going to Kumba on Saturday. Write a polite reply.', steps: ['Greeting, refusal with a reason, thanks, closing.', '**« Salut Mbong ! Désolé, je ne peux pas venir, parce que je vais à Kumba samedi. Merci pour l’invitation. Joyeux anniversaire ! »**'] },
    { q: 'Write a short SMS inviting Lum to play football on Sunday at 4 p.m. at the stadium.', steps: ['Give what, when and where.', '**« Salut Lum ! Tu veux jouer au football dimanche à 16 h au stade ? Réponds-moi ! »**'] },
  ]),

  L('fr-fiche-1', 'fr-f1-messages', '21.2', 'Remplir une fiche de renseignements', 12, ['Écriture'], [
    'An information sheet (**une fiche de renseignements**) asks for:\n- **Nom** (surname), often written in capital letters, and **Prénom(s)** (first names)\n- **Date de naissance** and **Lieu de naissance** (date and place of birth)\n- **Sexe**: M (masculin) or F (féminin)\n- **Nationalité**, **Adresse**, **Téléphone**\n- **Classe** and **Établissement** (school)\n- **Signature**\nDates are written day / month / year: 12/09/2014 = le 12 septembre 2014.',
    'The same questions asked aloud (polite form): « **Quel est votre nom ?** » « **Quel est votre prénom ?** » « **Quelle est votre date de naissance ?** » « **Où êtes-vous né** (or **née**) ? » « Je suis né le 5 mars 2014 à Kribi. » « **Quelle est votre nationalité ?** » « Je suis camerounais » (a boy) or « camerounaise » (a girl).',
    'A filled sheet (original text): NOM : EWANE. Prénoms : Brice Junior. Date de naissance : 12/09/2014. Lieu de naissance : Nkongsamba. Sexe : M. Nationalité : camerounaise. Classe : Form 1 B. Établissement : Lycée bilingue de Nkongsamba. Signature : B. Ewane. On the sheet, « nationalité » is feminine, so the answer is « camerounaise » for everyone.',
  ], 'fr1-fiche', 'Write the date as day, month, year: 05/03/2014 is 5 March.',
  ['« Sexe : F » means:', ['female (féminin)', 'French', 'Form', 'father'], 'M = masculin, F = féminin.'],
  [['Une fiche de renseignements', 'A form asking for personal details.'], ['Le nom de famille', 'The surname: « Nom » on the sheet.'], ['La nationalité', 'The country you belong to: camerounaise.']],
  [
    { q: 'Fill in from the text: « Je m’appelle Manka Fombi. Je suis née le 3 avril 2014 à Wum. Je suis en Form 1 A. » Give Nom, Prénom, Date and Lieu de naissance, Sexe.', steps: ['Surname in capitals: **NOM : FOMBI**; first name: **Prénom : Manka**.', '**Date de naissance : 03/04/2014**; **Lieu de naissance : Wum**.', '« Née » shows a girl: **Sexe : F**.'] },
    { q: 'Ask a new student their date of birth politely, and give their answer for 20 May 2013.', steps: ['Polite question with « votre ».', '**« Quelle est votre date de naissance ? » « Je suis né le 20 mai 2013. »** A girl answers « Je suis née… ».'] },
  ]),
];
