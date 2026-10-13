// French figures for Form 5: presenting people, the tenses of a narrative,
// the allocution, sectors of activity, the CV, currencies, safe online
// buying, the passive in every tense, reporting an offence, the public
// health notice, civil status, opposition and concession, reported speech
// in the past, the essay plan, checking news, and the GCE year. The labels
// are in French, as students meet them in class.
import { columnsSpec, cycleSpec, flowSpec, treeSpec } from './charts';

export const FRENCH_2 = {
  'presentation-fr': columnsSpec('Présenter quelqu’un', [
    { head: 'Registre soutenu', items: ['Permettez-moi de', 'vous présenter…', 'Je vous présente…', '→ Enchanté(e).', '→ Ravi(e) de faire', 'votre connaissance.'] },
    { head: 'Registre familier', items: ['Voici mon ami…', 'Je te présente…', 'C’est ma cousine…', '→ Salut !', '→ Ça va ?'] },
  ], { colW: 160 }),
  'recit-temps-fr': columnsSpec('Les temps du récit au passé', [
    { head: 'Plus-que-parfait', items: ['action antérieure', 'avait / était + p. p.', 'Le car était', 'déjà parti.'] },
    { head: 'Passé composé', items: ['événement', 'a / est + p. p.', 'Nous sommes', 'arrivés à la gare.'] },
    { head: 'Imparfait', items: ['décor, description', 'radical + -ais, -ait…', 'Il pleuvait', 'très fort.'] },
  ], { colW: 120 }),
  'allocution-fr': flowSpec('Le plan d’une allocution', ['Salutations\nprotocolaires', 'Introduction :\nqui parle, pourquoi', 'D’abord…\n(premier point)', 'Ensuite… De plus…\n(autres points)', 'Enfin… Appel\nou souhait', 'Je vous remercie\nde votre attention.'], { perRow: 3, boxW: 116 }),
  'secteurs-fr': treeSpec('Les secteurs d’activité', 'L’économie', [
    { name: 'Primaire\n(la nature)', items: ['agriculture', 'élevage', 'pêche', 'mines'] },
    { name: 'Secondaire\n(la transformation)', items: ['industrie', 'BTP', 'brasserie', 'menuiserie'] },
    { name: 'Tertiaire\n(les services)', items: ['santé', 'éducation', 'banque', 'transport'] },
  ], { colW: 118 }),
  'cv-fr': flowSpec('Les rubriques du CV', ['Informations\npersonnelles', 'Formation\n(le plus récent)', 'Expérience\nprofessionnelle', 'Compétences :\nlangues, informatique', 'Centres\nd’intérêt', 'Références'], { perRow: 3, boxW: 116, note: 'Une seule page, sans faute, et toujours accompagné d’une lettre de motivation.' }),
  'devises-fr': columnsSpec('La monnaie et les devises', [
    { head: 'Au Cameroun', items: ['le franc CFA (FCFA)', 'émis par la BEAC', 'pièces et billets', '1 € = 655,957 FCFA'] },
    { head: 'Les devises', items: ['l’euro', 'le dollar', 'le naira', 'la livre sterling'] },
    { head: 'À la banque', items: ['déposer, retirer', 'un compte d’épargne', 'un prêt, les intérêts', 'un virement'] },
  ], { colW: 124 }),
  'achat-en-ligne-fr': flowSpec('Acheter en ligne en toute sécurité', ['Vérifier le\nvendeur (avis)', 'Comparer\nles prix', 'Commander :\nle panier', 'Payer à la\nlivraison si possible', 'Garder les\npreuves', 'Jamais de code\nPIN à personne'], { perRow: 3, boxW: 116 }),
  'passif-temps-fr': columnsSpec('La voix passive à tous les temps', [
    { head: 'Temps', items: ['présent', 'passé composé', 'imparfait', 'plus-que-parfait', 'futur simple', 'conditionnel'] },
    { head: 'Voix passive', items: ['La forêt est protégée.', 'La forêt a été protégée.', 'La forêt était protégée.', 'La forêt avait été protégée.', 'La forêt sera protégée.', 'La forêt serait protégée.'] },
  ], { colW: 168, arrow: true }),
  'signalement-fr': flowSpec('Signaler une infraction contre la nature', ['Quoi ?\n(braconnage, coupe)', 'Où ?\n(lieu précis)', 'Quand ?\n(date, heure)', 'Qui ? Comment ?\n(faits observés)', 'À qui ? Écogardes,\ngendarmerie'], { perRow: 3, boxW: 118, note: 'Restez prudent : ne vous mettez jamais en danger.' }),
  'avis-sante-fr': flowSpec('Rédiger un avis de santé publique', ['Titre\nAVIS À LA POPULATION', 'Émetteur et\ndestinataires', 'Le danger\net la date', 'Consignes à\nl’impératif', 'Interdictions :\nIl est interdit de…', 'Lieu, date\net signature'], { perRow: 3, boxW: 122 }),
  'etat-civil-fr': treeSpec('Les documents du citoyen', 'Le citoyen', [
    { name: 'État civil\n(la mairie)', items: ['acte de naissance', 'acte de mariage', 'acte de décès'] },
    { name: 'Identité', items: ['carte nationale', 'd’identité (CNI)', 'passeport'] },
    { name: 'Vote\n(ELECAM)', items: ['listes électorales', 'carte d’électeur', 'dès 20 ans'] },
  ], { colW: 118 }),
  'opposition-fr': columnsSpec('Opposition et concession', [
    { head: 'Opposition', items: ['mais, pourtant', 'cependant, toutefois', 'tandis que + indicatif', 'alors que + indicatif', 'par contre, en revanche'] },
    { head: 'Concession', items: ['bien que + subjonctif', 'quoique + subjonctif', 'malgré + nom', 'même si + indicatif', 'avoir beau + infinitif'] },
  ], { colW: 160 }),
  'discours-passe-fr': columnsSpec('Verbe introducteur au passé', [
    { head: 'Discours direct', items: ['présent', 'passé composé', 'futur simple', 'impératif', 'hier, demain', 'aujourd’hui, ici'] },
    { head: 'Discours rapporté', items: ['imparfait', 'plus-que-parfait', 'conditionnel présent', 'de + infinitif', 'la veille, le lendemain', 'ce jour-là, là'] },
  ], { colW: 160, arrow: true }),
  'plan-composition-fr': flowSpec('La composition argumentative', ['Introduction :\nsujet, question, plan', 'Thèse :\narguments pour', 'Antithèse :\nCertes… mais', 'Conclusion :\nbilan et opinion'], { boxW: 116, note: 'Chaque paragraphe : argument, explication, exemple.' }),
  'infox-fr': flowSpec('Vérifier une information', ['Qui publie ?\n(la source)', 'Quand ?\n(la date)', 'D’autres médias\ndisent-ils pareil ?', 'L’image vient-elle\nd’ailleurs ?', 'Ton alarmiste ?\nPrudence !', 'Pas vérifié :\non ne partage pas.'], { perRow: 3, boxW: 118 }),
  'gce-french-5': cycleSpec('L’année du GCE en Form 5', ['Cours et\nrévisions', 'Exercices de\ntype QCM', 'Examen\nblanc', 'Correction et\nremédiation', 'Sujets de\nPaper 2'], { boxW: 104, r: 86, centre: 'GCE 0545' }),
};
