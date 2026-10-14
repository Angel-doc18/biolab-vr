// Logic figures for Forms 4 and 5: definition and division, truth values on
// the square, conversion, obversion and contraposition, ad hominem, the
// immediate inferences together, the GCE papers (0590), the parts and rules
// of the syllogism, its figures and moods, arguments with "if", fallacies of
// relevance, presumption and ambiguity, the connectives, a truth table and
// the steps of a full test.
import { G, Line, Rect } from 'react-native-svg';
import { Txt } from './Diagram';
import { columnsSpec, flowSpec, treeSpec } from './charts';

const O = '#33414d';
const RED = '#c8463d';
const GREEN = '#2e7d32';
const TERM_FILL = { S: '#e6eef8', M: '#fbefd0', P: '#e3f0da' };

// ---------- the parts of a syllogism ----------
// Each row: quantifier, subject box, copula, predicate box; boxes coloured by term.
const ROWS = [
  { y: 22, parts: [['All', null], ['Cameroonians', 'M'], ['are', null], ['Africans', 'P']], label: 'Major premise' },
  { y: 56, parts: [['All', null], ['Bamenda people', 'S'], ['are', null], ['Cameroonians', 'M']], label: 'Minor premise' },
  { y: 104, parts: [['All', null], ['Bamenda people', 'S'], ['are', null], ['Africans', 'P']], label: 'Conclusion' },
];
const WIDTH = { All: 26, are: 26, Cameroonians: 88, Africans: 64, 'Bamenda people': 100 };
function SyllogismPartsArt() {
  return (
    <G>
      {ROWS.map((r) => {
        let x = 8;
        return (
          <G key={r.y}>
            {r.parts.map(([word, term]) => {
              const w = WIDTH[word];
              const x0 = x;
              x += w + 6;
              return term ? (
                <G key={word}>
                  <Rect x={x0} y={r.y} width={w} height={24} rx={5} fill={TERM_FILL[term]} stroke={O} strokeWidth={1} />
                  <Txt x={x0 + w / 2} y={r.y + 16} size={10} weight="700">
                    {word}
                  </Txt>
                </G>
              ) : (
                <Txt key={word} x={x0 + w / 2} y={r.y + 16} size={10}>
                  {word}
                </Txt>
              );
            })}
            <Txt x={276} y={r.y + 16} size={9} anchor="start" italic>
              {r.label}
            </Txt>
          </G>
        );
      })}
      <Line x1={8} y1={92} x2={266} y2={92} stroke={O} strokeWidth={1.4} />
      <Txt x={0} y={124} size={12} weight="700" anchor="start">
        ∴
      </Txt>
      {[['S', 'minor term'], ['M', 'middle term'], ['P', 'major term']].map(([k, name], i) => (
        <G key={k}>
          <Rect x={14 + i * 108} y={146} width={14} height={11} rx={2} fill={TERM_FILL[k]} stroke={O} strokeWidth={0.9} />
          <Txt x={33 + i * 108} y={155} size={9} anchor="start">
            {`${k}: ${name}`}
          </Txt>
        </G>
      ))}
    </G>
  );
}

// ---------- the four figures ----------
// The two Ms of each figure are joined, so the shape of the line names it.
const FIGURES = [
  { top: ['M', 'P'], bottom: ['S', 'M'], code: 'M–P, S–M' },
  { top: ['P', 'M'], bottom: ['S', 'M'], code: 'P–M, S–M' },
  { top: ['M', 'P'], bottom: ['M', 'S'], code: 'M–P, M–S' },
  { top: ['P', 'M'], bottom: ['M', 'S'], code: 'P–M, M–S' },
];
function FiguresArt() {
  return (
    <G>
      {FIGURES.map((f, i) => {
        const cx = 43 + i * 86;
        const xs = [cx - 20, cx + 20];
        const mTop = xs[f.top.indexOf('M')];
        const mBottom = xs[f.bottom.indexOf('M')];
        return (
          <G key={f.code}>
            <Txt x={cx} y={16} size={10} weight="700">
              {`Figure ${i + 1}`}
            </Txt>
            <Line x1={mTop} y1={50} x2={mBottom} y2={70} stroke={RED} strokeWidth={2} />
            {f.top.map((t, k) => (
              <Txt key={`t${t}`} x={xs[k]} y={46} size={14} weight="700" fill={t === 'M' ? RED : O}>
                {t}
              </Txt>
            ))}
            {f.bottom.map((t, k) => (
              <Txt key={`b${t}`} x={xs[k]} y={86} size={14} weight="700" fill={t === 'M' ? RED : O}>
                {t}
              </Txt>
            ))}
            <Txt x={cx} y={112} size={8.5}>
              {f.code}
            </Txt>
          </G>
        );
      })}
    </G>
  );
}

// ---------- a truth table of the connectives ----------
const COLS = ['p', 'q', '~p', 'p · q', 'p ∨ q', 'p ⊃ q'];
const VALUES = [
  ['T', 'T', 'F', 'T', 'T', 'T'],
  ['T', 'F', 'F', 'F', 'T', 'F'],
  ['F', 'T', 'T', 'F', 'T', 'T'],
  ['F', 'F', 'T', 'F', 'F', 'T'],
];
function TruthTableArt() {
  const x0 = 12;
  const cw = 52;
  const y0 = 8;
  const rh = 24;
  return (
    <G>
      <Rect x={x0} y={y0} width={cw * 6} height={rh} fill="#e6eef8" />
      <Rect x={x0} y={y0} width={cw * 6} height={rh * 5} fill="none" stroke={O} strokeWidth={1.2} />
      {[1, 2, 3, 4].map((r) => (
        <Line key={`r${r}`} x1={x0} y1={y0 + r * rh} x2={x0 + cw * 6} y2={y0 + r * rh} stroke={O} strokeWidth={r === 1 ? 1.2 : 0.6} />
      ))}
      {[1, 2, 3, 4, 5].map((c) => (
        <Line key={`c${c}`} x1={x0 + c * cw} y1={y0} x2={x0 + c * cw} y2={y0 + rh * 5} stroke={O} strokeWidth={c === 2 ? 1.4 : 0.6} />
      ))}
      {COLS.map((h, c) => (
        <Txt key={h} x={x0 + c * cw + cw / 2} y={y0 + 16} size={10.5} weight="700">
          {h}
        </Txt>
      ))}
      {VALUES.map((row, r) =>
        row.map((v, c) => (
          <Txt key={`${r}${c}`} x={x0 + c * cw + cw / 2} y={y0 + (r + 1) * rh + 16} size={11} weight="700" fill={v === 'T' ? GREEN : RED}>
            {v}
          </Txt>
        )),
      )}
    </G>
  );
}

export const LOGIC_2 = {
  // ---------- Form 4 ----------
  'logic-definition': columnsSpec('Rules of a good definition', [
    { head: 'Genus and\ndifferentia', items: ['"A triangle is a', 'plane figure (genus)', 'with three straight', 'sides (differentia)"'] },
    { head: 'It must not be', items: ['too wide', 'too narrow', 'circular', 'negative', 'figurative or obscure'] },
  ], { colW: 136 }),
  'logic-division': treeSpec('Dividing triangles by their sides', 'Triangle (genus)', [
    { name: 'Equilateral', items: ['three equal', 'sides'] },
    { name: 'Isosceles', items: ['exactly two', 'equal sides'] },
    { name: 'Scalene', items: ['no equal', 'sides'] },
  ], { colW: 104 }),
  'logic-square-rules': columnsSpec('Truth values on the square', [
    { head: 'A given', items: ['true: E false,', 'I true, O false', 'false: O true,', 'E, I unknown'] },
    { head: 'E given', items: ['true: A false,', 'I false, O true', 'false: I true,', 'A, O unknown'] },
    { head: 'I given', items: ['true: E false,', 'A, O unknown', 'false: A false,', 'E true, O true'] },
    { head: 'O given', items: ['true: A false,', 'E, I unknown', 'false: A true,', 'E false, I true'] },
  ], { colW: 104 }),
  'logic-conversion': columnsSpec('Conversion: S and P change places', [
    { head: 'A', items: ['All S are P', '→ Some P are S', '(by limitation)'] },
    { head: 'E', items: ['No S are P', '→ No P are S', '(simply)'] },
    { head: 'I', items: ['Some S are P', '→ Some P are S', '(simply)'] },
    { head: 'O', items: ['Some S are not P', 'no valid', 'converse'] },
  ], { colW: 100 }),
  'logic-obversion': columnsSpec('Obversion: change the quality, P becomes non-P', [
    { head: 'A', items: ['All S are P', '→ No S are', 'non-P'] },
    { head: 'E', items: ['No S are P', '→ All S are', 'non-P'] },
    { head: 'I', items: ['Some S are P', '→ Some S are', 'not non-P'] },
    { head: 'O', items: ['Some S are not P', '→ Some S are', 'non-P'] },
  ], { colW: 100 }),
  'logic-contraposition': flowSpec('Contraposition of "All S are P"', ['All S are P\n(A)', 'Obvert:\nNo S are\nnon-P', 'Convert:\nNo non-P\nare S', 'Obvert:\nAll non-P\nare non-S'], { perRow: 2, boxW: 120, boxH: 56 }),
  'logic-fallacies-f4': columnsSpec('Ad hominem: attacking the person', [
    { head: 'Abusive', items: ['insults character', '"He never', 'finished school."'] },
    { head: 'Circumstantial', items: ['points to interests', '"Of course he wants', 'that; he owns taxis."'] },
    { head: 'Tu quoque', items: ['"you too"', '"You smoke', 'yourself."'] },
  ], { colW: 118 }),
  'logic-eduction': columnsSpec('Immediate inferences at a glance', [
    { head: 'Conversion', items: ['E, I: simply', 'A: by limitation', 'O: never'] },
    { head: 'Obversion', items: ['all four forms', 'change the quality,', 'P becomes non-P'] },
    { head: 'Contraposition', items: ['A, O: fully', 'E: by limitation', 'I: never'] },
  ], { colW: 118 }),

  // ---------- Form 5 ----------
  'logic-gce-0590': columnsSpec('GCE O Level Logic (0590)', [
    { head: 'Paper 1', items: ['50 multiple-choice', 'items, 4 options', '1½ hours', 'one mark each'] },
    { head: 'Paper 2', items: ['structured questions', 'syllogisms, inferences', 'fallacies, truth tables', '2½ hours'] },
  ], { colW: 136 }),
  'logic-syllogism-parts': {
    title: 'The parts of a categorical syllogism',
    w: 346,
    h: 164,
    art: SyllogismPartsArt,
    labels: [],
    facts: [
      'The major premise, "All Cameroonians are Africans", contains the major term P (Africans), the predicate of the conclusion.',
      'The minor premise, "All Bamenda people are Cameroonians", contains the minor term S (Bamenda people), the subject of the conclusion.',
      'The middle term M (Cameroonians) is in both premises but not in the conclusion: it links S and P.',
      'This syllogism is AAA in the first figure: Barbara.',
    ],
  },
  'logic-syllogism-rules': columnsSpec('The rules of the syllogism', [
    { head: 'Terms', items: ['exactly three terms', 'middle distributed', 'at least once', 'no illicit major', 'or illicit minor'] },
    { head: 'Quality', items: ['two negatives:', 'no conclusion', 'one negative:', 'negative conclusion'] },
    { head: 'Quantity', items: ['two particulars:', 'no conclusion', 'one particular:', 'particular conclusion'] },
  ], { colW: 118 }),
  'logic-figures': {
    title: 'The four figures of the syllogism',
    w: 344,
    h: 120,
    art: FiguresArt,
    labels: [],
    facts: [
      'Each figure shows the major premise above the minor premise, with the two middle terms (M) joined.',
      'Figure 1: M–P, S–M. Figure 2: P–M, S–M (the middle term is the predicate twice).',
      'Figure 3: M–P, M–S (the middle term is the subject twice). Figure 4: P–M, M–S.',
    ],
  },
  'logic-moods': columnsSpec('Valid moods by figure', [
    { head: 'Figure 1', items: ['Barbara AAA', 'Celarent EAE', 'Darii AII', 'Ferio EIO'] },
    { head: 'Figure 2', items: ['Cesare EAE', 'Camestres AEE', 'Festino EIO', 'Baroco AOO'] },
    { head: 'Figure 3', items: ['Darapti AAI', 'Disamis IAI', 'Datisi AII', 'Felapton EAO', 'Bocardo OAO', 'Ferison EIO'] },
    { head: 'Figure 4', items: ['Bramantip AAI', 'Camenes AEE', 'Dimaris IAI', 'Fesapo EAO', 'Fresison EIO'] },
  ], { colW: 100 }),
  'logic-hypothetical': columnsSpec('Arguments with "if p then q"', [
    { head: 'Valid', items: ['modus ponens:', 'p; so q', 'modus tollens:', 'not q; so not p'] },
    { head: 'Fallacies', items: ['affirming the consequent:', 'q; so p', 'denying the antecedent:', 'not p; so not q'] },
  ], { colW: 144 }),
  'logic-fallacies-relevance': columnsSpec('Fallacies of relevance', [
    { head: 'Feelings', items: ['ad misericordiam:', 'pity', 'ad populum:', 'the crowd'] },
    { head: 'Pressure', items: ['ad baculum:', 'force, threats', 'ad hominem:', 'attack the person'] },
    { head: 'Knowledge', items: ['ad ignorantiam:', 'no disproof', 'ad verecundiam:', 'false authority'] },
  ], { colW: 114 }),
  'logic-fallacies-ambiguity': columnsSpec('Fallacies of presumption and ambiguity', [
    { head: 'Complex\nquestion', items: ['"Have you', 'stopped copying?"'] },
    { head: 'Begging the\nquestion', items: ['the premise', 'assumes the', 'conclusion'] },
    { head: 'Equivocation', items: ['one word,', 'two meanings'] },
    { head: 'Amphiboly', items: ['ambiguous', 'grammar'] },
  ], { colW: 100 }),
  'logic-connectives': columnsSpec('The truth-functional connectives', [
    { head: '~ not', items: ['~p', 'true when p', 'is false'] },
    { head: '· and', items: ['p · q', 'true only when', 'both are true'] },
    { head: '∨ or', items: ['p ∨ q', 'false only when', 'both are false'] },
    { head: '⊃ if... then', items: ['p ⊃ q', 'false only when p', 'is true, q false'] },
  ], { colW: 100 }),
  'logic-truth-table': {
    title: 'A truth table for two variables',
    w: 336,
    h: 136,
    art: TruthTableArt,
    labels: [],
    facts: [
      'Two variables give four rows: p and q are TT, TF, FT, FF.',
      '~p is the opposite of p. p · q is true only in the first row; p ∨ q is false only in the last row.',
      'p ⊃ q is false only in the second row, where p is true and q is false.',
    ],
  },
  'logic-syllogism-test': flowSpec('Testing a syllogism', ['Find the\nconclusion', 'Name S, P\nand M', 'Write it in\nstandard order', 'Mood and\nfigure', 'Mark the\ndistribution', 'Check every\nrule: verdict'], { perRow: 3, boxW: 104 }),
  'logic-paper1-plan': flowSpec('Paper 1: 50 items in 90 minutes', ['Read the stem;\nwatch NOT,\nINVALID', 'Sketch: square,\nticks, truth\ntable', 'Eliminate\nwrong options', 'Choose and\nshade', 'Mark hard items\nand return', 'Check every\nitem is\nanswered'], { perRow: 3, boxW: 108, boxH: 56 }),
  'logic-final-term': flowSpec('The final term before the GCE', ['Paper 1\nmarathon', 'Paper 2\nclinics', 'Mock\nexamination', 'Remediation\nseminars', 'The GCE\n(0590)'], { perRow: 3, boxW: 108 }),
};
