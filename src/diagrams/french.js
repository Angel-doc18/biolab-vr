// French figures for Form 4: relative pronouns, the passé composé and the
// imparfait, nasal vowels, the future and the conditional, obligation,
// prepositions of place, the application letter, the passive, comparison,
// the imperative, indefinite words, concession, reported speech, logical
// connectives, conditions with « si », purpose, and the GCE papers. The
// labels are in French, as students meet them in class.
import { columnsSpec, flowSpec } from './charts';

export const FRENCH = {
  'relatifs-fr': columnsSpec('Les pronoms relatifs', [
    { head: 'qui (sujet)', items: ['suivi d’un verbe', 'L’homme qui parle…', 'La fille qui chante…'] },
    { head: 'que (complément)', items: ['suivi d’un sujet', 'Le livre que je lis…', 'La lettre qu’il écrit…'] },
    { head: 'où (lieu, temps)', items: ['un lieu ou un moment', 'Le village où je vis…', 'Le jour où il est venu…'] },
  ], { colW: 126 }),
  'pc-imparfait': columnsSpec('Passé composé ou imparfait ?', [
    { head: 'Passé composé', items: ['Action terminée', 'Événement soudain', 'hier, soudain, un jour', 'Le chef est arrivé.'] },
    { head: 'Imparfait', items: ['Description, décor', 'Habitude passée', 'chaque année, autrefois', 'Il faisait beau.'] },
  ], { colW: 160 }),
  'voyelles-nasales': columnsSpec('Voyelles orales et nasales', [
    { head: 'Orale /o/', items: ['beau', 'eau', 'mot'] },
    { head: 'Nasale /ɔ̃/', items: ['bon', 'on', 'mon'] },
    { head: 'Orale /a/', items: ['la', 'chat', 'bas'] },
    { head: 'Nasale /ɑ̃/', items: ['lent', 'champ', 'banc'] },
  ], { colW: 82 }),
  'futur-fr': columnsSpec('Parler de l’avenir', [
    { head: 'Futur proche', items: ['aller + infinitif', 'Je vais travailler.', 'un projet proche'] },
    { head: 'Futur simple', items: ['infinitif + -ai, -as, -a…', 'Je travaillerai.', 'l’avenir en général'] },
    { head: 'Conditionnel', items: ['radical du futur + -ais…', 'Je voudrais travailler.', 'un souhait poli'] },
  ], { colW: 126 }),
  'falloir-devoir': columnsSpec('Exprimer l’obligation', [
    { head: 'il faut + infinitif', items: ['obligation générale', 'Il faut payer à la caisse.'] },
    { head: 'il faut que + subjonctif', items: ['obligation d’une personne', 'Il faut que tu paies.'] },
    { head: 'devoir + infinitif', items: ['je dois, nous devons', 'Nous devons économiser.'] },
  ], { colW: 134 }),
  'prepositions-lieux': columnsSpec('Les prépositions de lieu', [
    { head: 'à + ville', items: ['à Douala', 'à Bamenda', 'à Paris'] },
    { head: 'en + pays féminin', items: ['en France', 'en Afrique', 'en Iran'] },
    { head: 'au + pays masculin', items: ['au Cameroun', 'au Tchad', 'au Gabon'] },
    { head: 'aux + pluriel', items: ['aux États-Unis', 'aux Pays-Bas'] },
  ], { colW: 96 }),
  'lettre-emploi': flowSpec('La lettre de demande d’emploi', ['Expéditeur\n(en haut à gauche)', 'Lieu et date\n(à droite)', 'Destinataire\n(à droite)', 'Objet : Demande\nd’emploi', 'Monsieur, / Madame,\npuis le corps', 'Formule de politesse\net signature'], { perRow: 3, boxW: 112 }),
  'voix-passive-fr': flowSpec('Passer de la voix active à la voix passive', ['Le COD devient\nsujet', 'être au temps du\nverbe actif', '+ participe passé\nqui s’accorde', '« par » + agent\nsi c’est utile'], { boxW: 112, note: 'Les élèves plantent des arbres. → Des arbres sont plantés par les élèves.' }),
  'comparaison-fr': columnsSpec('Le comparatif et le superlatif', [
    { head: 'Comparatif', items: ['plus … que', 'aussi … que', 'moins … que', 'bon → meilleur'] },
    { head: 'Superlatif', items: ['le plus … de', 'le moins … de', 'le meilleur', 'le pire'] },
  ], { colW: 150 }),
  'imperatif-fr': columnsSpec('L’impératif et l’interdiction', [
    { head: 'Impératif', items: ['Lave-toi les mains.', 'Buvons de l’eau potable.', 'Dormez sous une moustiquaire.', 'Sois prudent !'] },
    { head: 'Interdiction', items: ['Ne buvez pas cette eau.', 'Il est interdit de fumer.', 'Défense d’entrer.', 'Ne pas jeter d’ordures.'] },
  ], { colW: 168 }),
  'indefinis-fr': columnsSpec('Les indéfinis', [
    { head: 'Singulier', items: ['chaque citoyen', 'chacun, chacune', 'aucun problème (ne…)', 'tout le village'] },
    { head: 'Pluriel', items: ['plusieurs femmes', 'tous les élèves', 'toutes les filles', 'quelques candidats'] },
  ], { colW: 156 }),
  'concession-fr': columnsSpec('Exprimer la concession', [
    { head: 'bien que', items: ['+ subjonctif', 'Bien qu’il soit malade,', 'il est venu.'] },
    { head: 'malgré', items: ['+ nom', 'Malgré la pluie,', 'la fête continue.'] },
    { head: 'même si', items: ['+ indicatif', 'Même si nous sommes différents,', 'nous vivons ensemble.'] },
  ], { colW: 136 }),
  'discours-fr': columnsSpec('Le discours rapporté (verbe introducteur au présent)', [
    { head: 'Discours direct', items: ['« Je suis innocent. »', '« Tu viens ? »', '« Où étais-tu ? »', '« Qu’est-ce que tu fais ? »', '« Asseyez-vous ! »'] },
    { head: 'Discours rapporté', items: ['Il dit qu’il est innocent.', 'Il demande si tu viens.', 'Il demande où j’étais.', 'Il demande ce que je fais.', 'Il dit de s’asseoir.'] },
  ], { colW: 168 }),
  'connecteurs-fr': columnsSpec('Les connecteurs logiques', [
    { head: 'Énumérer', items: ['d’abord', 'ensuite, puis', 'de plus', 'enfin'] },
    { head: 'Opposer', items: ['mais', 'cependant', 'pourtant', 'par contre'] },
    { head: 'Conclure', items: ['donc', 'par conséquent', 'en conclusion', 'bref'] },
  ], { colW: 110 }),
  'hypothese-fr': columnsSpec('L’hypothèse avec « si »', [
    { head: 'si + présent', items: ['→ futur simple', 'Si tu télécharges l’application,', 'tu pourras réviser.'] },
    { head: 'si + imparfait', items: ['→ conditionnel présent', 'Si j’avais un ordinateur,', 'je ferais mes recherches.'] },
  ], { colW: 170 }),
  'but-fr': columnsSpec('Exprimer le but', [
    { head: 'Même sujet', items: ['pour + infinitif', 'afin de + infinitif', 'Je change mon mot de passe', 'pour protéger mon compte.'] },
    { head: 'Sujets différents', items: ['pour que + subjonctif', 'afin que + subjonctif', 'Je t’explique les règles', 'pour que tu sois prudent.'] },
  ], { colW: 168 }),
  'gce-french-papers': columnsSpec('GCE French (0545): Paper 1, 1½ h; Paper 2, 2 h', [
    { head: 'Lire', items: ['Compréhension de texte', 'Vocabulaire en contexte'] },
    { head: 'Écrire', items: ['Expression écrite', 'Résumé'] },
    { head: 'Transformer', items: ['Opérations sur un texte', 'Traduction vers le français'] },
  ], { colW: 132 }),
};
