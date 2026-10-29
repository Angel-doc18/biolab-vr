// A Level French figures (0745): relative pronouns, family structures, from
// the sentence to the paragraph, vowel contrasts, trade words, tourist sites,
// the interview, cause, parks, peace, delinquency, the essay plan, ICT words,
// the résumé and its word budget to scale, the GCE papers, rural exodus,
// debate formulas, multiculturalism, cohesion, text reconstruction, the
// project cycle, mobile money, the exposé, the subjonctif, the si patterns,
// unplanned towns, governance, campaigns, the concordance of tenses,
// inclusion, advocacy, checking information, synthesis, condition, the
// dissertation, a time plan for Paper 2 and common errors.
import { G, Line, Rect } from 'react-native-svg';
import { Txt } from './Diagram';
import { columnsSpec, cycleSpec, flowSpec } from './charts';
import { CS, Cell } from './aComputer';
import { Table } from './aComputer3';

const { O, MUTED, BLUE, SKY, LEAF, SAND, LILAC, ROSE } = CS;
const BAR = '#e3e8ec';
const rows = (n, x, y0, rh) => Array.from({ length: n }, (_, i) => [x, y0 + i * rh]);

// ---------- relative pronouns ----------
const RELATIFS = [
  ['qui', 'sujet', 'la tante qui m’élève'],
  ['que', 'complément d’objet direct', 'le conseil que j’ai reçu'],
  ['dont', 'remplace de + nom', 'le neveu dont je suis fier'],
  ['où', 'lieu ou temps', 'le jour où il est né'],
  ['lequel...', 'après une préposition', 'la raison pour laquelle'],
  ['auquel...', 'à + lequel', 'le projet auquel je pense'],
  ['duquel...', 'de + lequel', 'le village près duquel...'],
];
function RelatifsArt() {
  return <Table x={8} y={8} cols={[['Pronom', 70], ['Rôle', 130], ['Exemple', 160]]} rows={RELATIFS} rh={18} size={7.5} fills={(j, i) => (i === 0 ? SKY : '#ffffff')} />;
}

// ---------- from sentence to paragraph ----------
const EXPANDED = [
  ['Le jeune élève de Lower Sixth', 'sujet + expansions', 120, SKY],
  ['écrit', 'verbe', 36, LEAF],
  ['soigneusement', 'manière', 60, SAND],
  ['une lettre', 'COD', 50, LILAC],
  ['à son oncle qui vit à Yaoundé', 'COI + relative', 120, ROSE],
];
const CELLS = EXPANDED.map(([t, l, w, f], i) => ({ t, l, w, f, x: 8 + EXPANDED.slice(0, i).reduce((s, e) => s + e[2], 0) }));
function PhraseArt() {
  return (
    <G>
      <Txt x={8} y={14} size={8} anchor="start" weight="700">
        Phrase minimale
      </Txt>
      <Cell x={8} y={20} w={70} h={22} text="L’élève" size={8} fill={SKY} />
      <Cell x={78} y={20} w={50} h={22} text="écrit." size={8} fill={LEAF} />
      <Txt x={8} y={66} size={8} anchor="start" weight="700">
        Phrase étendue
      </Txt>
      {CELLS.map((c) => (
        <G key={c.t}>
          <Cell x={c.x} y={72} w={c.w} h={22} text={c.t} size={7} fill={c.f} />
          <Txt x={c.x + c.w / 2} y={106} size={6.5} fill={MUTED}>
            {c.l}
          </Txt>
        </G>
      ))}
      <Txt x={8} y={132} size={8} anchor="start" weight="700">
        Paragraphe
      </Txt>
      {['Phrase d’introduction', 'Explication', 'Exemple', 'Conclusion'].map((t, i) => (
        <Cell key={t} x={8 + i * 97} y={138} w={92} h={22} text={t} size={7.5} fill={[SKY, LEAF, SAND, ROSE][i]} rx={4} />
      ))}
    </G>
  );
}

// ---------- vowel contrasts ----------
const SONS = [
  ['/u/', 'ou', 'roue, tout, dessous'],
  ['/y/', 'u, û', 'rue, tu, dessus, sûr'],
  ['/e/', 'é, -er, -ez, et', 'été, chanter, chantez'],
  ['/ɛ/', 'è, ê, ai, ei', 'mère, fête, lait, neige'],
];
function SonsArt() {
  return (
    <G>
      <Table x={20} y={8} cols={[['Son', 60], ['Graphies', 120], ['Exemples', 150]]} rows={SONS} rh={20} size={8.5} fills={(j, i) => (i === 0 ? (j < 2 ? SKY : SAND) : '#ffffff')} />
      <Txt x={185} y={128} size={8} weight="700" fill={BLUE}>
        j’ai parlé /e/, je parlais /ɛ/; je parlerai /e/, je parlerais /ɛ/
      </Txt>
    </G>
  );
}

// ---------- 250 words to 50, to scale ----------
function BudgetArt() {
  return (
    <G>
      <Txt x={40} y={22} size={8} anchor="start" weight="700">
        Texte: 250 mots en cinq paragraphes (1 px = 1 mot)
      </Txt>
      {Array.from({ length: 5 }, (_, i) => (
        <G key={i}>
          <Rect x={40 + i * 50} y={30} width={50} height={22} fill={BAR} stroke={O} strokeWidth={0.6} />
          <Rect x={40 + i * 50} y={30} width={10} height={22} fill={BLUE} />
          <Line x1={45 + i * 50} y1={52} x2={45 + i * 10} y2={90} stroke={BLUE} strokeWidth={0.8} strokeDasharray="3 2" />
        </G>
      ))}
      <Txt x={36} y={46} size={7} anchor="end" fill={MUTED}>
        0
      </Txt>
      <Txt x={294} y={46} size={7} anchor="start" fill={MUTED}>
        250
      </Txt>
      {Array.from({ length: 5 }, (_, i) => (
        <Rect key={i} x={40 + i * 10} y={90} width={10} height={22} fill={BLUE} stroke="#ffffff" strokeWidth={0.6} />
      ))}
      <Txt x={98} y={105} size={8} anchor="start" weight="700" fill={BLUE}>
        Résumé: 50 mots, environ 10 par idée
      </Txt>
      <Txt x={170} y={136} size={8}>
        Un mot sur cinq: les idées restent; exemples, chiffres et répétitions partent.
      </Txt>
    </G>
  );
}

// ---------- subjonctif or indicatif ----------
const MODES = [
  ['vouloir que, souhaiter que', 'subjonctif', 'Je veux que tu viennes.'],
  ['il faut que, il est important que', 'subjonctif', 'Il faut que nous partions.'],
  ['être content que, regretter que', 'subjonctif', 'Je regrette qu’il soit absent.'],
  ['douter que, ne pas penser que', 'subjonctif', 'Je doute qu’il ait raison.'],
  ['penser que, espérer que', 'indicatif', 'J’espère qu’il viendra.'],
];
function SubjonctifArt() {
  return <Table x={6} y={8} cols={[['Après...', 160], ['Mode', 66], ['Exemple', 160]]} rows={MODES} rh={20} size={7} fills={(j, i) => (i === 1 ? (j < 4 ? ROSE : LEAF) : '#ffffff')} />;
}

// ---------- the three si patterns ----------
const SI = [
  ['Si + présent', 'futur', 'Si tu révises, tu réussiras.'],
  ['Si + imparfait', 'conditionnel présent', 'Si tu révisais, tu réussirais.'],
  ['Si + plus-que-parfait', 'conditionnel passé', 'Si tu avais révisé, tu aurais réussi.'],
];
function SiArt() {
  return (
    <G>
      <Table x={6} y={8} cols={[['Condition', 110], ['Résultat', 110], ['Exemple', 170]]} rows={SI} rh={22} size={7.5} fills={(j, i) => (i < 2 ? [SKY, SAND, ROSE][j] : '#ffffff')} />
      <Txt x={196} y={112} size={8} weight="700" fill={BLUE}>
        Jamais de futur ni de conditionnel juste après si.
      </Txt>
    </G>
  );
}

// ---------- concordance des temps ----------
const CONC = [
  ['présent', 'imparfait'],
  ['passé composé', 'plus-que-parfait'],
  ['futur simple', 'conditionnel présent'],
  ['futur antérieur', 'conditionnel passé'],
  ['imparfait, plus-que-parfait', 'inchangés'],
  ['aujourd’hui, hier, demain', 'ce jour-là, la veille, le lendemain'],
];
function ConcordanceArt() {
  return <Table x={8} y={8} cols={[['Discours direct', 170], ['Discours indirect (verbe au passé)', 200]]} rows={CONC} rh={20} size={7.5} fills={(j, i) => (i === 1 ? LEAF : '#ffffff')} />;
}

// ---------- condition ----------
const COND = [
  ['si', 'indicatif', 'Si tu viens, je reste.'],
  ['même si', 'indicatif', 'Même s’il pleut, je sors.'],
  ['au cas où', 'conditionnel', 'Au cas où il pleuvrait...'],
  ['à condition que, pourvu que', 'subjonctif', '... que tu aies fini.'],
  ['à condition de', 'infinitif', '... de travailler.'],
  ['en cas de', 'nom', 'En cas d’incendie...'],
];
function ConditionArt() {
  return <Table x={6} y={8} cols={[['Expression', 150], ['Suivi de', 80], ['Exemple', 156]]} rows={COND} rh={20} size={7.5} fills={(j, i) => (i === 1 ? SAND : '#ffffff')} />;
}

// ---------- common errors ----------
const ERREURS = [
  ['Si j’aurais su', 'Si j’avais su'],
  ['Malgré qu’il pleuve', 'Bien qu’il pleuve / Malgré la pluie'],
  ['Les lettres qu’il a écrit', 'Les lettres qu’il a écrites'],
  ['Résumé trop long', 'Respecter le nombre de mots'],
  ['Hors-sujet', 'Lire et souligner la consigne'],
];
function ErreursArt() {
  return <Table x={8} y={8} cols={[['Erreur fréquente', 170], ['Correction', 200]]} rows={ERREURS} rh={20} size={7.5} fills={(j, i) => (i === 0 ? ROSE : LEAF)} />;
}

export const A_FRENCH = {
  'afr-relatifs-composes': {
    title: 'Les pronoms relatifs et leur rôle',
    w: 376,
    h: 152,
    art: RelatifsArt,
    labels: [],
    facts: RELATIFS.map(([p, r, e]) => `${p}: ${r}, as in « ${e} ».`),
    points: rows(7, 43, 35, 18),
  },
  'afr-famille-mots': columnsSpec('Les structures familiales', [
    { head: 'Nucléaire', items: ['les parents', 'les enfants'] },
    { head: 'Élargie', items: ['grands-parents', 'oncles, tantes', 'cousins'] },
    { head: 'Monoparentale', items: ['un seul parent', 'et ses enfants'] },
    { head: 'Recomposée', items: ['après un remariage', 'deux unions'] },
  ], { colW: 110 }),
  'afr-phrase': {
    title: 'De la phrase minimale au paragraphe',
    w: 400,
    h: 168,
    art: PhraseArt,
    labels: [],
    facts: [
      'A minimal sentence has a subject and a verb: « L’élève écrit. »',
      'Expansions enrich it: adjectives, a complement of manner, a direct object and a relative clause.',
      'A paragraph develops one idea: introduction, explanation, example, conclusion.',
    ],
    points: [
      [68, 31],
      [200, 83],
      [200, 149],
    ],
  },
  'afr-sons': {
    title: 'Les sons /u/ et /y/, /e/ et /ɛ/',
    w: 370,
    h: 136,
    art: SonsArt,
    labels: [],
    facts: [
      '/u/ is written ou: roue, tout, dessous.',
      '/y/ is written u or û: rue, tu, dessus, sûr.',
      '/e/ is written é, -er, -ez, et: été, chanter, chantez.',
      '/ɛ/ is written è, ê, ai, ei: mère, fête, lait, neige.',
      'The contrast separates tenses: j’ai parlé /e/ and je parlais /ɛ/.',
    ],
    points: [...rows(4, 50, 38, 20), [185, 124]],
  },
  'afr-commerce-mots': columnsSpec('Le vocabulaire du commerce', [
    { head: 'Au marché', items: ['marchander', 'en gros, au détail', 'la facture, le reçu'] },
    { head: 'L’entreprise', items: ['le capital', 'le bénéfice', 'la perte'] },
    { head: 'L’argent', items: ['le budget', 'l’épargne', 'la tontine'] },
  ], { colW: 120 }),
  'afr-sites': columnsSpec('Quelques sites touristiques du Cameroun', [
    { head: 'Sud-Ouest', items: ['mont Cameroun', 'jardin de Limbé'] },
    { head: 'Sud', items: ['plages de Kribi', 'chutes de la Lobé'] },
    { head: 'Ouest', items: ['palais de Foumban', 'chefferies'] },
    { head: 'Extrême-Nord', items: ['parc de Waza', 'savane et faune'] },
  ], { colW: 112 }),
  'afr-entretien': flowSpec('Les étapes d’un entretien d’embauche', ['Saluer et se\nprésenter', 'Présenter son\nparcours', 'Qualités et\nmotivation', 'Poser une\nquestion', 'Remercier'], { boxW: 104 }),
  'afr-cause': columnsSpec('Exprimer la cause', [
    { head: '+ proposition', items: ['parce que', 'car, puisque', 'comme (en tête)'] },
    { head: '+ nom', items: ['à cause de (négatif)', 'grâce à (positif)', 'en raison de', 'faute de'] },
  ], { colW: 150 }),
  'afr-parcs': columnsSpec('Parcs et réserves du Cameroun', [
    { head: 'Waza', items: ['Extrême-Nord', 'savane', 'éléphants, girafes'] },
    { head: 'Lobéké', items: ['Est', 'forêt', 'gorilles, éléphants'] },
    { head: 'Korup', items: ['Sud-Ouest', 'forêt dense', 'grande biodiversité'] },
    { head: 'Dja', items: ['Sud et Est', 'forêt', 'patrimoine mondial'] },
  ], { colW: 106 }),
  'afr-paix': flowSpec('Résoudre un conflit pacifiquement', ['Écouter les\ndeux parties', 'Identifier\nle problème', 'Chercher un\ncompromis', 'Signer un\naccord', 'Se réconcilier'], { boxW: 104 }),
  'afr-cyber': columnsSpec('Délinquance juvénile et cybercriminalité', [
    { head: 'Actes', items: ['vol, vandalisme', 'drogues', 'arnaques en ligne', 'cyberharcèlement'] },
    { head: 'Sanctions', items: ['avertissement', 'exclusion', 'amende', 'mesures éducatives'] },
    { head: 'Prévention', items: ['parler aux adultes', 'signaler', 'protéger ses codes'] },
  ], { colW: 120 }),
  'afr-essai-plan': flowSpec('Le plan de l’essai argumentatif', ['Introduction:\namorce, problématique,\nannonce du plan', 'Partie 1:\narguments pour', 'Partie 2:\narguments contre', 'Conclusion:\nbilan, avis, ouverture'], { perRow: 2, boxW: 156, boxH: 62 }),
  'afr-tic-mots': columnsSpec('Le vocabulaire des TIC', [
    { head: 'Matériel', items: ['ordinateur', 'clavier, souris', 'imprimante', 'modem'] },
    { head: 'Logiciels', items: ['système d’exploitation', 'navigateur', 'tableur', 'applications'] },
    { head: 'Actions', items: ['se connecter', 'télécharger', 'partager', 'publier'] },
  ], { colW: 124 }),
  'afr-resume-etapes': flowSpec('Les étapes du résumé de texte', ['Lire le texte\ndeux fois', 'Trouver le thème\net la thèse', 'Souligner l’idée de\nchaque paragraphe', 'Supprimer exemples,\nchiffres, répétitions', 'Reformuler et\nrelier les idées', 'Compter les mots'], { boxW: 122 }),
  'afr-gce-papers': columnsSpec('GCE A Level French (0745), 2026', [
    { head: 'Paper 1\n1 h 30, 10 juin', items: ['QCM', 'orthographe, grammaire', 'expressions idiomatiques', 'phonétique'] },
    { head: 'Paper 2\n3 h, 10 juin', items: ['dissertation (A)', 'opérations de texte (B)', 'résumé guidé (B)'] },
    { head: 'Paper 3\n3 h, 11 juin', items: ['épreuve écrite', 'lire les consignes'] },
  ], { colW: 132 }),
  'afr-exode': columnsSpec('L’exode rural', [
    { head: 'Causes', items: ['manque d’emplois', 'manque d’infrastructures', 'attrait de la ville'] },
    { head: 'Au village', items: ['vieillissement', 'champs abandonnés', 'baisse de production'] },
    { head: 'En ville', items: ['chômage', 'quartiers précaires', 'délinquance'] },
  ], { colW: 132, arrow: true }),
  'afr-debat': columnsSpec('Les formules du débat', [
    { head: 'Donner son avis', items: ['à mon avis', 'selon moi', 'je suis convaincu que'] },
    { head: 'Être d’accord', items: ['je suis d’accord avec', 'vous avez raison'] },
    { head: 'Nuancer', items: ['certes..., mais...', 'permettez-moi de nuancer'] },
  ], { colW: 128 }),
  'afr-multiculture': columnsSpec('Le multiculturalisme', [
    { head: 'Atouts', items: ['enrichissement mutuel', 'tolérance', 'richesse artistique', 'tourisme'] },
    { head: 'Risques', items: ['repli identitaire', 'tribalisme', 'discriminations'] },
    { head: 'Conditions', items: ['dialogue', 'bilinguisme', 'valeurs communes'] },
  ], { colW: 124 }),
  'afr-paragraphe-plan': flowSpec('Le paragraphe argumentatif', ['Idée directrice', 'Explication\n(en effet)', 'Exemple\n(par exemple)', 'Conclusion\n(ainsi)'], { perRow: 4, boxW: 96 }),
  'afr-cohesion': columnsSpec('Les outils de la cohésion', [
    { head: 'Connecteurs', items: ['par ailleurs', 'en revanche', 'dès lors', 'en définitive'] },
    { head: 'Reprises', items: ['il, celui-ci', 'ce dernier', 'le chef de l’État', 'ce phénomène'] },
  ], { colW: 160 }),
  'afr-reconstruction': flowSpec('Remettre un texte en ordre', ['Trouver la phrase\nd’introduction', 'Suivre les reprises\n(il, ce...)', 'Suivre les\nconnecteurs', 'Vérifier temps\net logique', 'Trouver la\nconclusion'], { boxW: 112 }),
  'afr-projet': cycleSpec('Le cycle d’un projet', ['Idée', 'Étude de\nmarché', 'Business\nplan', 'Financement', 'Lancement', 'Suivi et\névaluation'], { r: 120, boxW: 96, boxH: 40 }),
  'afr-mobile-money': columnsSpec('Le mobile money', [
    { head: 'Avantages', items: ['rapidité', 'inclusion financière', 'moins d’argent liquide', 'paiement des factures'], fill: LEAF },
    { head: 'Dangers', items: ['arnaques', 'frais de transaction', 'endettement', 'vol ou piratage'], fill: ROSE },
  ], { colW: 150 }),
  'afr-expose': flowSpec('L’exposé oral', ['Introduction:\nsujet et plan', 'Partie 1\n(transition)', 'Partie 2', 'Conclusion et\nremerciements', 'Questions\ndu public'], { boxW: 108 }),
  'afr-subjonctif': {
    title: 'Subjonctif ou indicatif?',
    w: 394,
    h: 128,
    art: SubjonctifArt,
    labels: [],
    facts: [
      'After wishes (vouloir que, souhaiter que): subjonctif.',
      'After necessity (il faut que, il est important que): subjonctif.',
      'After feelings (être content que, regretter que): subjonctif.',
      'After doubt (douter que, ne pas penser que): subjonctif.',
      'After opinion and hope in the affirmative (penser que, espérer que): indicatif.',
    ],
    points: rows(5, 89, 38, 20),
  },
  'afr-hypotheses': {
    title: 'Les trois systèmes avec si',
    w: 398,
    h: 120,
    art: SiArt,
    labels: [],
    facts: [
      'Si + présent, then the futur: a real possibility.',
      'Si + imparfait, then the conditionnel présent: unreal now.',
      'Si + plus-que-parfait, then the conditionnel passé: an unreal past.',
      'Never a futur or a conditionnel right after si.',
    ],
    points: [...rows(3, 61, 41, 22), [196, 108]],
  },
  'afr-resume-budget': {
    title: 'De 250 mots à 50, à l’échelle',
    w: 340,
    h: 146,
    art: BudgetArt,
    labels: [],
    facts: [
      'The text has 250 words in five paragraphs; each holds one idea, shown dark, among examples and details.',
      'The résumé keeps only the ideas: 50 words, about ten for each.',
      'That keeps one word in five: examples, figures and repetitions go.',
    ],
    points: [
      [165, 41],
      [65, 101],
      [170, 134],
    ],
  },
  'afr-urbanisation': flowSpec('L’urbanisation anarchique', ['Constructions\nsans plan', 'Zones marécageuses\net pentes occupées', 'Caniveaux bouchés,\ndépotoirs sauvages', 'Inondations et\nglissements', 'Épidémies'], { boxW: 122, note: 'Remèdes: plans d’urbanisme, assainissement, collecte des ordures.' }),
  'afr-gouvernance': columnsSpec('Gouvernance et corruption', [
    { head: 'Bonne gouvernance', items: ['transparence', 'reddition des comptes', 'respect de la loi'] },
    { head: 'Dérives', items: ['pot-de-vin', 'détournement', 'favoritisme', 'impunité'] },
    { head: 'Acteurs', items: ['CONAC (2006)', 'juridictions', 'citoyens', 'lanceurs d’alerte'] },
  ], { colW: 126 }),
  'afr-affiche': flowSpec('Analyser une campagne de sensibilisation', ['Qui parle ?\nl’émetteur', 'À qui ?\nle destinataire', 'Quel message ?', 'Par quels moyens ?\nslogan, image', 'Dans quel but ?\ninformer, faire agir'], { boxW: 120 }),
  'afr-concordance': {
    title: 'La concordance des temps au discours indirect',
    w: 386,
    h: 150,
    art: ConcordanceArt,
    labels: [],
    facts: [
      ...CONC.slice(0, 4).map(([a, b]) => `After a past reporting verb, the ${a} becomes the ${b}.`),
      'The imparfait and the plus-que-parfait do not change.',
      'Aujourd’hui becomes ce jour-là, hier la veille, and demain le lendemain.',
    ],
    points: rows(6, 93, 38, 20),
  },
  'afr-inclusion': columnsSpec('Inclusion et égalité des chances', [
    { head: 'Personnes\nvulnérables', items: ['personnes handicapées', 'orphelins', 'déplacés, réfugiés', 'minorités'] },
    { head: 'Droits', items: ['non-discrimination', 'accessibilité', 'égalité des chances'] },
    { head: 'Obstacles', items: ['pauvreté', 'préjugés', 'mariage précoce'] },
  ], { colW: 124 }),
  'afr-plaidoyer': flowSpec('Le plan d’un plaidoyer', ['Accroche:\nun fait frappant', 'Constat:\nle problème', 'Arguments:\nmoraux, juridiques', 'Réfutation des\nobjections', 'Appel à l’action:\nnous demandons...'], { boxW: 118 }),
  'afr-verifier': flowSpec('Vérifier une information', ['Qui est la\nsource ?', 'Quelle date ?', 'D’autres médias\nla confirment ?', 'Fait ou\nopinion ?', 'Image vérifiée\n(recherche inversée)'], { boxW: 118 }),
  'afr-synthese': flowSpec('La synthèse de documents', ['Lire les\ndocuments', 'Noter thèse et\narguments de chacun', 'Grille: accords\net désaccords', 'Rédiger par idées,\nnon par document', 'Conclure\nsans parti pris'], { boxW: 120 }),
  'afr-condition': {
    title: 'Exprimer la condition: le mot et le mode',
    w: 398,
    h: 150,
    art: ConditionArt,
    labels: [],
    facts: COND.map(([e, m, x]) => `${e} is followed by the ${m}: ${x}`),
    points: rows(6, 81, 38, 20),
  },
  'afr-dissertation': flowSpec('La dissertation: plan dialectique', ['Introduction:\naccroche, sujet,\nproblématique, plan', 'Thèse', 'Antithèse', 'Synthèse', 'Conclusion:\nbilan, ouverture'], { boxW: 122, boxH: 62, note: 'Une transition relie chaque partie à la suivante.' }),
  'afr-epreuve2': flowSpec('Épreuve 2 en 3 heures: un plan de temps', ['Lire sujets et\nconsignes: 10 min', 'Plan de la\ndissertation: 15 min', 'Rédaction:\n1 h 30', 'Opérations de\ntexte: 50 min', 'Relecture:\n15 min'], { boxW: 124 }),
  'afr-erreurs': {
    title: 'Erreurs fréquentes et corrections',
    w: 386,
    h: 132,
    art: ErreursArt,
    labels: [],
    facts: ERREURS.map(([e, c]) => `Not « ${e} » but: ${c}.`),
    points: rows(5, 93, 38, 20),
  },
};
