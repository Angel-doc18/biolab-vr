// Extra questions for the end of the A Level French lessons (0745), so that
// every lesson ends with at least five questions on what it teaches.
//
// Convention: the correct option is written first; options are shuffled when shown.
import { QUESTIONS_U6 } from './lessonQuestionsU6';

const Q = (q, a, why) => ({ q, a, why });

export const LESSON_QUESTIONS = {
  // ---------- Lower Sixth, Trimestre 1 ----------
  'afr-relatifs-1': [
    Q('« Le village près ___ nous habitons est calme. »', ['duquel', 'auquel', 'dont', 'que'], 'Près de + lequel = duquel.'),
    Q('« L’amie ___ j’écris vit à Garoua. »', ['à qui', 'dont', 'que', 'où'], 'Écrire à quelqu’un.'),
    Q('« C’est un métier ___ je rêve. »', ['dont', 'que', 'auquel', 'où'], 'Rêver de.'),
    Q('« Les outils avec ___ il travaille sont neufs. »', ['lesquels', 'qui', 'dont', 'que'], 'Avec + lesquels (masculine plural).'),
  ],
  'afr-famille-1': [
    Q('Une famille formée après un remariage avec des enfants de deux unions est une famille:', ['recomposée', 'nucléaire', 'monoparentale', 'élargie'], 'Blended family.'),
    Q('Les parents et les grands-parents sont nos:', ['ascendants', 'descendants', 'cadets', 'voisins'], 'Those before us.'),
    Q('Le contraire de « aîné » est:', ['cadet', 'ancien', 'parent', 'oncle'], 'Younger.'),
    Q('« Se réconcilier » signifie:', ['faire la paix après un conflit', 'se disputer', 'se marier', 'déménager'], 'Make peace.'),
  ],
  'afr-passe-1': [
    Q('« Tout à coup, la pluie ___. »', ['est tombée', 'tombait', 'tombe', 'tombera'], 'Sudden event.'),
    Q('« D’habitude, mon grand-père ___ très tôt. »', ['se levait', 's’est levé', 'se lève demain', 's’était levé'], 'Habit.'),
    Q('« Il ___ nuit quand nous sommes rentrés. »', ['faisait', 'a fait', 'fera', 'fait'], 'Background.'),
    Q('Le plus-que-parfait de « partir » avec « ils » est:', ['ils étaient partis', 'ils avaient parti', 'ils sont partis', 'ils partaient'], 'Être + participle.'),
  ],
  'afr-traditions-1': [
    Q('Les notables entourent:', ['le chef traditionnel', 'le maire seulement', 'le directeur d’école', 'le juge'], 'Traditional council.'),
    Q('Le Ngondo a lieu à:', ['Douala', 'Foumban', 'Maroua', 'Bertoua'], 'Sawa festival.'),
    Q('Après le mariage traditionnel, beaucoup de couples font aussi:', ['le mariage civil à la mairie', 'un divorce', 'un procès', 'un examen'], 'Civil registration.'),
    Q('Les libations sont:', ['des boissons versées en offrande', 'des danses', 'des masques', 'des chants'], 'Ritual offering.'),
  ],
  'afr-phrase-1': [
    Q('« Hier, au marché » dans une phrase est:', ['un complément circonstanciel', 'le sujet', 'le verbe', 'un adjectif'], 'Time and place.'),
    Q('Une phrase de conclusion dans un paragraphe:', ['ferme l’idée ou prépare la suite', 'introduit un nouveau sujet', 'est toujours une question', 'est inutile'], 'Close or link.'),
    Q('« Qui vit à Yaoundé » dans une phrase est:', ['une proposition relative', 'un adverbe', 'un sujet', 'un nom'], 'A relative clause.'),
    Q('Quel connecteur ouvre souvent un exemple?', ['par exemple', 'enfin', 'donc', 'cependant'], 'Illustration.'),
  ],
  'afr-sons-1': [
    Q('Quel mot se prononce avec /u/?', ['vous', 'vu', 'du', 'pu'], 'ou = /u/.'),
    Q('Quel mot contient /ɛ/?', ['lait', 'les', 'aller', 'clé'], 'ai = /ɛ/.'),
    Q('« Je chanterai » se termine par le son:', ['/e/', '/ɛ/', '/y/', '/u/'], 'Futur: -rai = /e/.'),
    Q('Quelle paire oppose /u/ et /y/?', ['tout / tu', 'tu / tue', 'mère / mer', 'été / était'], 'tout /u/, tu /y/.'),
  ],
  'afr-futur-1': [
    Q('Le futur de « faire » avec « vous » est:', ['vous ferez', 'vous faisez', 'vous feriez', 'vous fassiez'], 'Fer- + -ez.'),
    Q('Le futur de « venir » avec « elle » est:', ['elle viendra', 'elle venira', 'elle viendrait', 'elle vient'], 'Viendr-.'),
    Q('« Pourriez-vous m’aider ? » est au:', ['conditionnel de politesse', 'futur simple', 'subjonctif', 'passé composé'], 'Politeness.'),
    Q('« Nous allons voyager » est au:', ['futur proche', 'futur simple', 'présent', 'conditionnel'], 'Aller + infinitif.'),
  ],
  'afr-metiers-1': [
    Q('Le commerce appartient au secteur:', ['tertiaire', 'primaire', 'secondaire', 'industriel'], 'Services.'),
    Q('La pêche appartient au secteur:', ['primaire', 'secondaire', 'tertiaire', 'numérique'], 'From nature.'),
    Q('Le chômage est:', ['la situation de celui qui cherche un emploi sans en trouver', 'un salaire', 'un contrat', 'un stage'], 'Unemployment.'),
    Q('Un infographiste crée:', ['des images et des visuels numériques', 'des routes', 'des médicaments', 'des récoltes'], 'Digital graphics.'),
  ],
  'afr-obligation-1': [
    Q('Le subjonctif de « aller » avec « je » est:', ['que j’aille', 'que je vais', 'que j’irai', 'que j’allais'], 'Irregular.'),
    Q('« Il est nécessaire de ___ des reçus. »', ['garder', 'gardez', 'garde', 'gardé'], 'De + infinitif.'),
    Q('« Vous n’avez pas le droit de ___ ici. »', ['stationner', 'stationnez', 'stationné', 'stationnant'], 'De + infinitif.'),
    Q('« Être autorisé à » exprime:', ['la permission', 'l’obligation', 'l’interdiction', 'le regret'], 'Allowed.'),
  ],
  'afr-commerce-1': [
    Q('Vendre en petites quantités au consommateur, c’est vendre:', ['au détail', 'en gros', 'à crédit', 'aux enchères'], 'Retail.'),
    Q('La perte est:', ['le contraire du bénéfice', 'un salaire', 'une épargne', 'une facture'], 'Loss.'),
    Q('Le chiffre d’affaires d’une boutique est:', ['le total de ses ventes', 'son bénéfice', 'sa dette', 'son loyer'], 'Turnover.'),
    Q('La monnaie que rend le vendeur est:', ['l’argent rendu sur un paiement', 'un billet neuf', 'une facture', 'un prêt'], 'Change.'),
  ],
  'afr-lieux-1': [
    Q('« Je viens ___ États-Unis. »', ['des', 'du', 'de', 'en'], 'Plural country: des.'),
    Q('« Elle vit ___ Afrique. »', ['en', 'au', 'à', 'aux'], 'Continent: en.'),
    Q('« Nous dînons ___ mes grands-parents. »', ['chez', 'à', 'en', 'au'], 'People: chez.'),
    Q('« Il est déjà parti » : l’adverbe se place:', ['entre l’auxiliaire et le participe', 'avant le sujet', 'à la fin toujours', 'avant l’auxiliaire'], 'Short adverbs.'),
  ],
  'afr-tourisme-1': [
    Q('Le jardin botanique est à:', ['Limbé', 'Garoua', 'Ngaoundéré', 'Ebolowa'], 'Founded in colonial times.'),
    Q('L’hébergement désigne:', ['le logement pendant un séjour', 'le billet d’avion', 'le guide', 'la carte'], 'Accommodation.'),
    Q('Une excursion est:', ['une courte sortie touristique', 'un long exil', 'un examen', 'une loi'], 'A trip.'),
    Q('Le palais du sultan des Bamoun se trouve à:', ['Foumban', 'Kribi', 'Buea', 'Garoua'], 'Royal palace.'),
  ],
  'afr-lettre-1': [
    Q('Le destinataire d’une lettre administrative est:', ['la personne ou l’autorité à qui l’on écrit', 'l’expéditeur', 'le facteur', 'l’objet'], 'Recipient.'),
    Q('« J’ai l’honneur de solliciter » ouvre souvent:', ['une demande formelle', 'une lettre d’amour', 'une carte postale', 'un procès-verbal'], 'Formal request.'),
    Q('La conclusion d’une demande de stage précise souvent:', ['sa disponibilité et la demande d’entretien', 'ses vacances', 'son repas préféré', 'une plainte'], 'Availability.'),
    Q('L’expéditeur est:', ['celui qui écrit la lettre', 'celui qui la reçoit', 'le directeur', 'le facteur'], 'Sender.'),
  ],
  'afr-entretien-1': [
    Q('« Quelles sont vos qualités ? » demande le recruteur. Une bonne réponse cite:', ['une qualité avec un exemple', 'trois défauts', 'son salaire souhaité', 'rien'], 'Evidence.'),
    Q('À la fin d’un entretien, on:', ['remercie le recruteur', 'part sans rien dire', 'demande un cadeau', 'tutoie le recruteur'], 'Courtesy.'),
    Q('« Négocier » au marché signifie:', ['discuter pour arriver à un accord sur le prix', 'voler', 'refuser de payer', 'fermer la boutique'], 'Bargain.'),
    Q('Le parcours d’un candidat comprend:', ['ses études et ses expériences', 'son adresse seulement', 'ses loisirs seulement', 'sa date de naissance'], 'Background.'),
  ],

  // ---------- Lower Sixth, Trimestres 2 et 3 ----------
  'afr-passive-1': [
    Q('La voix passive au futur de « On publiera les résultats » est:', ['Les résultats seront publiés.', 'Les résultats seraient publiés.', 'Les résultats sont publiés.', 'Les résultats ont publié.'], 'Seront + participle.'),
    Q('« La reine est aimée ___ son peuple. »', ['de', 'par', 'à', 'pour'], 'Feeling: de.'),
    Q('Un verbe qui ne peut pas être mis au passif est:', ['dormir', 'construire', 'détruire', 'planter'], 'No direct object.'),
    Q('« Les arbres avaient été coupés » est au:', ['plus-que-parfait passif', 'présent passif', 'futur passif', 'passé composé actif'], 'Avaient été.'),
  ],
  'afr-cause-1': [
    Q('« ___ tu es là, aide-moi. »', ['Puisque', 'Grâce à', 'À cause de', 'Malgré'], 'Known cause + clause.'),
    Q('« ___ de moyens, le projet a été abandonné. »', ['Faute', 'Grâce', 'Parce', 'Car'], 'Faute de: lack of.'),
    Q('« En raison de » est suivi:', ['d’un nom', 'd’une proposition', 'd’un infinitif', 'du subjonctif'], 'Formal + noun.'),
    Q('Les énergies renouvelables sont par exemple:', ['le solaire et l’éolien', 'le pétrole et le charbon', 'le gaz seulement', 'le plastique'], 'Renewable.'),
  ],
  'afr-comparaison-1': [
    Q('« C’est le ___ élève de la classe » (bon):', ['meilleur', 'plus bon', 'mieux', 'bonne'], 'Bon → le meilleur.'),
    Q('« Il y a ___ arbres qu’avant » (fewer):', ['moins d’', 'moins des', 'plus peu', 'moins que'], 'Moins de + nom.'),
    Q('« Elle court ___ vite que lui » (égalité):', ['aussi', 'autant', 'si', 'tant'], 'Aussi + adverbe.'),
    Q('Le superlatif de « bien » est:', ['le mieux', 'le meilleur', 'le plus bien', 'le bienest'], 'Adverb.'),
  ],
  'afr-faune-1': [
    Q('La flore désigne:', ['les plantes d’une région', 'les animaux', 'les montagnes', 'les rivières'], 'Plants.'),
    Q('Le trafic d’ivoire menace surtout:', ['les éléphants', 'les poissons', 'les oiseaux', 'les insectes'], 'Tusks.'),
    Q('Le parc national de Korup se trouve dans la région:', ['du Sud-Ouest', 'de l’Extrême-Nord', 'de l’Adamaoua', 'du Centre'], 'Dense forest.'),
    Q('Les feux de brousse détruisent:', ['la végétation et l’habitat des animaux', 'les déchets plastiques seulement', 'les rivières', 'les routes'], 'Bushfires.'),
  ],
  'afr-imperatif-1': [
    Q('L’impératif de « avoir » avec « tu » est:', ['aie', 'as', 'ai', 'ait'], 'Irregular.'),
    Q('« Vas-y ! » garde le -s parce que:', ['le verbe est suivi de « y »', 'c’est un verbe en -ir', 'c’est au futur', 'c’est une faute'], 'Euphony.'),
    Q('Forme négative de « Prends-le »:', ['Ne le prends pas.', 'Ne prends-le pas.', 'Prends-le pas.', 'Ne pas le prends.'], 'Pronoun before the verb.'),
    Q('« Veuillez patienter » est une formule:', ['polie', 'familière', 'impolie', 'interrogative'], 'Politeness.'),
  ],
  'afr-sante-1': [
    Q('Le dépistage sert à:', ['découvrir une maladie', 'la soigner forcément', 'la transmettre', 'l’ignorer'], 'Testing.'),
    Q('Le parasite du paludisme s’appelle:', ['le plasmodium', 'le vibrion', 'le VIH', 'la salmonelle'], 'Plasmodium.'),
    Q('La solution de réhydratation orale soigne:', ['la déshydratation', 'le paludisme', 'le VIH', 'la fracture'], 'ORS.'),
    Q('Le VIH ne se transmet pas par:', ['une poignée de main', 'le sang contaminé', 'les rapports non protégés', 'la mère à l’enfant'], 'Myth.'),
  ],
  'afr-indefinis-1': [
    Q('« ___ personne majeure peut voter. »', ['Toute', 'Tous', 'Chaques', 'Plusieurs'], 'Toute + singular noun, without article.'),
    Q('« Il a lu ___ livres. »', ['quelques', 'chaque', 'aucun', 'toute'], 'Quelques + plural.'),
    Q('« Aucune ___ n’a été retenue. »', ['proposition', 'propositions', 'des propositions', 'les propositions'], 'Aucune + singular.'),
    Q('« Certains » signifie:', ['quelques-uns, pas tous', 'tous', 'aucun', 'chacun'], 'Some.'),
  ],
  'afr-citoyen-1': [
    Q('L’isoloir sert à:', ['voter en secret', 'compter les voix', 'garder les urnes', 'inscrire les électeurs'], 'Secret vote.'),
    Q('ELECAM est l’organisme qui:', ['organise les élections', 'collecte les impôts', 'juge les crimes', 'gère les écoles'], 'Elections Cameroon.'),
    Q('La Constitution actuelle du Cameroun date de:', ['1996', '1960', '1972', '2006'], '18 janvier 1996.'),
    Q('« En revanche » exprime:', ['l’opposition', 'la cause', 'le but', 'l’addition'], 'On the other hand.'),
  ],
  'afr-concession-1': [
    Q('« Quoique » est suivi:', ['du subjonctif', 'de l’indicatif', 'de l’infinitif', 'd’un nom'], 'Like bien que.'),
    Q('Le subjonctif de « prendre » avec « il » est:', ['qu’il prenne', 'qu’il prend', 'qu’il prendra', 'qu’il prit'], 'Stem prenn-.'),
    Q('« Toutefois » exprime:', ['une concession ou une opposition', 'une cause', 'un but', 'une condition'], 'However.'),
    Q('« ___ ses efforts, il n’a pas réussi. »', ['Malgré', 'Bien que', 'Même si', 'Quoique'], 'Malgré + nom.'),
  ],
  'afr-paix-1': [
    Q('Le bilinguisme officiel du Cameroun associe:', ['le français et l’anglais', 'le français et le pidgin', 'l’anglais et l’arabe', 'le duala et le fulfulde'], 'Official languages.'),
    Q('La vengeance est le contraire de:', ['la réconciliation', 'la violence', 'la colère', 'la haine'], 'Opposites.'),
    Q('Un accord de paix est:', ['un engagement écrit à cesser un conflit', 'un impôt', 'un festival', 'un match'], 'Agreement.'),
    Q('L’exclusion est le contraire de:', ['l’intégration', 'la discrimination', 'le rejet', 'l’isolement'], 'Opposites.'),
  ],
  'afr-rapporte-1': [
    Q('« Nous partons », disent-ils. Au discours indirect:', ['Ils disent qu’ils partent.', 'Ils disent que nous partons.', 'Ils disent s’ils partent.', 'Ils disent qu’ils partaient.'], 'Persons change, tense stays.'),
    Q('« Est-ce que tu as faim ? » demande maman. Au discours indirect:', ['Maman demande si j’ai faim.', 'Maman demande est-ce que j’ai faim.', 'Maman demande que j’ai faim.', 'Maman demande ce que j’ai faim.'], 'Si.'),
    Q('« Ne mentez pas ! » dit le juge. Au discours indirect:', ['Le juge dit de ne pas mentir.', 'Le juge dit ne mentez pas.', 'Le juge dit que mentir pas.', 'Le juge dit de mentir pas.'], 'De ne pas + infinitif.'),
    Q('Au discours indirect, le point d’interrogation:', ['disparaît', 'reste', 'devient deux-points', 'se double'], 'No question mark.'),
  ],
  'afr-cyber-1': [
    Q('Le piratage d’un compte est:', ['l’accès non autorisé à ce compte', 'sa création', 'sa protection', 'sa fermeture légale'], 'Hacking.'),
    Q('La « feymania » au Cameroun désigne:', ['l’escroquerie', 'une fête', 'un sport', 'une danse'], 'Scamming.'),
    Q('La loi camerounaise sur la cybersécurité et la cybercriminalité date de:', ['2010', '1990', '2020', '1972'], 'Law of December 2010.'),
    Q('Pour les mineurs délinquants, on privilégie souvent:', ['des mesures éducatives', 'la peine de mort', 'l’oubli', 'l’exil'], 'Education and rehabilitation.'),
  ],
  'afr-essai-1': [
    Q('L’amorce d’un essai:', ['introduit le sujet de façon intéressante', 'conclut le devoir', 'donne la note', 'liste les arguments'], 'Opening.'),
    Q('Chaque argument occupe:', ['un paragraphe', 'une phrase de trois mots', 'toute la copie', 'la conclusion'], 'One paragraph.'),
    Q('Dans un essai, au lieu de répéter « je », on peut utiliser:', ['« on » ou des tournures impersonnelles', 'des abréviations', 'des insultes', 'des points d’exclamation'], 'Impersonal.'),
    Q('Le bilan se trouve dans:', ['la conclusion', 'l’introduction', 'le premier argument', 'l’amorce'], 'Summary.'),
  ],
  'afr-connecteurs-1': [
    Q('« En outre » exprime:', ['l’addition', 'l’opposition', 'la conclusion', 'le temps'], 'Moreover.'),
    Q('« Par conséquent » exprime:', ['la conséquence', 'la cause', 'l’opposition', 'l’exemple'], 'Consequently.'),
    Q('« Notamment » introduit:', ['un exemple', 'une conclusion', 'une opposition', 'une cause'], 'In particular.'),
    Q('« Bref » introduit:', ['une conclusion rapide', 'une cause', 'un exemple', 'une opposition'], 'In short.'),
  ],
  'afr-hypothese-1': [
    Q('« Si j’avais su, je ___ venu. »', ['serais', 'aurais', 'suis', 'serai'], 'Si + plus-que-parfait → conditionnel passé.'),
    Q('« S’il » s’écrit avec élision devant:', ['il et ils', 'elle', 'on', 'nous'], 'Only il, ils.'),
    Q('« Si tu as faim, ___ une mangue. »', ['prends', 'prendrais', 'prisses', 'prendre'], 'Si + présent → impératif.'),
    Q('Le conditionnel de « devoir » avec « tu » est:', ['tu devrais', 'tu devras', 'tu doives', 'tu devais'], 'Devr- + -ais.'),
  ],
  'afr-tic-1': [
    Q('Un tableur sert à:', ['faire des calculs dans des tableaux', 'naviguer sur Internet', 'dessiner seulement', 'téléphoner'], 'Spreadsheet.'),
    Q('Un courriel est:', ['un message électronique', 'un colis', 'un journal', 'une affiche'], 'Email.'),
    Q('Les données mobiles permettent:', ['de se connecter à Internet par le réseau téléphonique', 'd’imprimer', 'de charger la batterie', 'de laver l’écran'], 'Mobile data.'),
    Q('Le système d’exploitation est:', ['le logiciel qui fait fonctionner l’appareil', 'un jeu', 'un clavier', 'un câble'], 'OS.'),
  ],
  'afr-but-1': [
    Q('« De peur de » est suivi:', ['de l’infinitif', 'du subjonctif', 'de l’indicatif', 'du futur'], 'Same subject.'),
    Q('« Afin que » est suivi:', ['du subjonctif', 'de l’indicatif', 'de l’infinitif', 'du conditionnel'], 'Different subjects.'),
    Q('Le subjonctif de « savoir » avec « ils » est:', ['qu’ils sachent', 'qu’ils savent', 'qu’ils sauront', 'qu’ils savaient'], 'Irregular.'),
    Q('« Il éteint la radio ___ ne pas déranger. »', ['pour', 'pour que', 'afin que', 'parce que'], 'Pour ne pas + infinitif.'),
  ],
  'afr-medias-1': [
    Q('Un titre sensationnel cherche surtout à:', ['attirer l’attention', 'informer sobrement', 'citer ses sources', 'corriger une erreur'], 'Clickbait.'),
    Q('Les paramètres de confidentialité permettent:', ['de choisir qui voit ses publications', 'd’accélérer le téléphone', 'de payer en ligne', 'd’effacer Internet'], 'Privacy settings.'),
    Q('Publier la photo d’un ami sans son accord, c’est manquer de:', ['respect de son consentement', 'connexion', 'batterie', 'temps'], 'Consent.'),
    Q('Désactiver les notifications aide à lutter contre:', ['la dépendance aux écrans', 'les virus', 'la pluie', 'la faim'], 'Distraction.'),
  ],
  'afr-resume-1': [
    Q('Le thème d’un texte est:', ['ce dont il parle', 'son nombre de mots', 'son auteur', 'son titre seulement'], 'Subject.'),
    Q('« Les tomates, les carottes et les choux » se résume en:', ['les légumes', 'les tomates', 'les fruits', 'les plantes'], 'Generic term.'),
    Q('Dans un résumé, on écrit:', ['à la place de l’auteur, sans « l’auteur dit »', 'avec son avis personnel', 'en anglais', 'en copiant le texte'], 'Author’s voice.'),
    Q('L’ordre des idées dans un résumé doit être:', ['celui du texte', 'inversé', 'alphabétique', 'au hasard'], 'Faithful.'),
  ],
  'afr-l6-revision': [
    Q('En 2026, l’épreuve 2 de français A Level a eu lieu le:', ['mercredi 10 juin après-midi', 'jeudi 11 juin', 'samedi 6 juin', 'lundi 15 juin'], '3 heures.'),
    Q('Une fiche d’erreurs contient:', ['l’erreur, la correction et la règle', 'les notes des camarades', 'le calendrier des vacances', 'des dessins'], 'Personal list.'),
    Q('Réviser par thèmes signifie réviser:', ['les cinq domaines de vie', 'seulement la grammaire', 'seulement les dates', 'rien'], 'Themes.'),
    Q('QCM signifie:', ['questions à choix multiples', 'questions courtes et moyennes', 'quatre cahiers modèles', 'quiz chronométré mensuel'], 'Multiple choice.'),
  ],

  ...QUESTIONS_U6,
};
