// Every labelled diagram in the app, by key. Lessons name one in `figure`,
// units in `diagram`, Paper 2 questions in `figure`, practicals in `diagram`.
import { useState } from 'react';
import { T, V } from '../ui/kit';
import ListenButton from '../ui/ListenButton';
import { useApp } from '../state/store';
import { useL, useLang } from '../i18n';
import { useNarrator } from '../lib/narrator';
import { fetchExplanation, segmentsOf } from '../lib/explain';
import { DiagramView, labelIndexes, labelTexts } from './Diagram';
import { BIOLOGY } from './biology';
import { BIOLOGY_MORE } from './biology2';
import { APPARATUS_BIO } from './apparatusBio';
import { CHEMISTRY } from './chemistry';
import { APPARATUS_CHEM } from './apparatusChem';
import { PHYSICS } from './physics';
import { APPARATUS_PHYS } from './apparatusPhys';
import { PHYSICS_MORE } from './physics2';
import { CHEMISTRY_MORE } from './chemistry2';
import { HUMANBIO } from './humanbio';
import { BIOLOGY_3 } from './biology3';
import { BIOLOGY_4 } from './biology4';
import { CHEMISTRY_3 } from './chemistry3';
import { PHYSICS_3 } from './physics3';
import { CHEMISTRY_A } from './chemistryA';
import { MATHS } from './maths';
import { MATHS_2 } from './maths2';
import { MATHS_3 } from './maths3';
import { ENGLISH } from './english';
import { ENGLISH_2 } from './english2';
import { FRENCH } from './french';
import { FRENCH_2 } from './french2';
import { LITERATURE } from './literature';
import { HISTORY } from './history';
import { ECONOMICS } from './economics';
import { COMMERCE } from './commerce';
import { CITIZENSHIP } from './citizenship';
import { GEOLOGY } from './geology';
import { LOGIC } from './logic';
import { A_BIOLOGY } from './aBiology';
import { A_BIOLOGY_2 } from './aBiology2';
import { CHEMISTRY_L6 } from './chemistryL6';
import { CHEMISTRY_L6B } from './chemistryL6b';
import { CHEMISTRY_U6 } from './chemistryU6';
import { CHEMISTRY_U6B } from './chemistryU6b';
import { PHYSICS_L6 } from './physicsL6';
import { PHYSICS_U6 } from './physicsU6';
import { A_MATHS } from './aMaths';
import { A_MATHS_2 } from './aMaths2';
import { A_MATHS_3 } from './aMaths3';
import { A_MATHS_MECH } from './aMathsMech';
import { A_MATHS_STAT } from './aMathsStat';
import { A_FURTHER } from './aFurther';
import { A_FURTHER_MECH } from './aFurtherMech';
import { A_COMPUTER } from './aComputer';
import { A_COMPUTER_2 } from './aComputer2';
import { A_COMPUTER_3 } from './aComputer3';
import { A_ICT } from './aIct';
import { A_ICT_2 } from './aIct2';
import { A_ENGLISH } from './aEnglish';
import { LOGIC_2 } from './logic2';
import { COMPUTER } from './computer';
import { GEOGRAPHY } from './geography';
import { HOMEEC } from './homeec';
import { FLOWS } from './flows';
import { SCIENCE_2 } from './science2';
import { COMPUTER_2 } from './computer2';
import { COMPUTER_3 } from './computer3';
import { COMPUTER_4 } from './computer4';
import { GEOGRAPHY_3 } from './geography3';
import { GEOGRAPHY_4 } from './geography4';
import { GEOGRAPHY_2 } from './geography2';
import { BIOLOGY_5 } from './biology5';
import { BIOLOGY_6 } from './biology6';
import { CHEMISTRY_4 } from './chemistry4';
import { CHEMISTRY_5 } from './chemistry5';
import { PHYSICS_4 } from './physics4';
import { PHYSICS_A } from './physicsA';
import { FACTS } from './facts';
import { POINTS } from './points';

const ALL = { ...BIOLOGY, ...BIOLOGY_MORE, ...BIOLOGY_3, ...BIOLOGY_4, ...APPARATUS_BIO, ...HUMANBIO, ...CHEMISTRY, ...CHEMISTRY_MORE, ...CHEMISTRY_3, ...CHEMISTRY_A, ...APPARATUS_CHEM, ...PHYSICS, ...PHYSICS_MORE, ...PHYSICS_3, ...PHYSICS_A, ...APPARATUS_PHYS, ...MATHS, ...MATHS_2, ...MATHS_3, ...ENGLISH, ...ENGLISH_2, ...FRENCH, ...FRENCH_2, ...LITERATURE, ...HISTORY, ...ECONOMICS, ...COMMERCE, ...CITIZENSHIP, ...GEOLOGY, ...LOGIC, ...LOGIC_2, ...A_BIOLOGY, ...A_BIOLOGY_2, ...CHEMISTRY_L6, ...CHEMISTRY_L6B, ...CHEMISTRY_U6, ...CHEMISTRY_U6B, ...PHYSICS_L6, ...PHYSICS_U6, ...A_MATHS, ...A_MATHS_2, ...A_MATHS_3, ...A_MATHS_MECH, ...A_MATHS_STAT, ...A_FURTHER, ...A_FURTHER_MECH, ...A_COMPUTER, ...A_COMPUTER_2, ...A_COMPUTER_3, ...A_ICT, ...A_ICT_2, ...A_ENGLISH, ...COMPUTER, ...GEOGRAPHY, ...HOMEEC, ...FLOWS, ...SCIENCE_2, ...COMPUTER_2, ...GEOGRAPHY_2, ...BIOLOGY_5, ...BIOLOGY_6, ...CHEMISTRY_4, ...CHEMISTRY_5, ...PHYSICS_4, ...COMPUTER_3, ...COMPUTER_4, ...GEOGRAPHY_3, ...GEOGRAPHY_4 };
// Each fact gets the spot the teacher's pointer rests on while it is explained:
// worked out exactly by the chart builders, and for drawn figures from the
// generated table in points.js (made by tools/diagram-points.js).
const withFacts = (s, k) => (FACTS[k] && !s.facts ? { ...s, facts: FACTS[k] } : s);
export const DIAGRAMS = Object.fromEntries(Object.entries(ALL).map(([k, s]) => [k, POINTS[k] ? { ...withFacts(s, k), points: POINTS[k] } : withFacts(s, k)]));

// The parts the tutor teaches, in order: each named label (these light up on the
// drawing), then what the drawing shows in words.
const MAX_PARTS = 16;
export const partsOf = (spec) => [...labelTexts(spec), ...(spec?.facts || [])].slice(0, MAX_PARTS);

// A labelled diagram. With `explain`, the tutor teaches it out loud like a
// teacher at the board: for every part, what it is, what it does and its role in
// the whole. Each label lights up while it is being explained, and tapping a
// label explains just that part.
export function Diagram({ id, caption = true, maxHeight, explain = false, subject, context }) {
  const spec = DIAGRAMS[id];
  const { subject: current, user } = useApp();
  const L = useL();
  const lang = useLang();
  const voice = useNarrator(lang);
  const [text, setText] = useState(null); // { intro, items, summary }
  const [busy, setBusy] = useState(false);
  const [note, setNote] = useState(null);
  const [segments, setSegments] = useState([]);
  if (!spec) return null;
  const names = labelTexts(spec);
  const parts = partsOf(spec);
  const lineIdx = labelIndexes(spec); // label index of each named structure
  const seg = voice.index >= 0 ? segments[voice.index] : null;
  const active = seg?.at != null && seg.at < names.length ? lineIdx[seg.at] : null;
  // A fact has no label, so the pointer rests on its spot on the drawing.
  const point = seg?.at != null && seg.at >= names.length ? spec.points?.[seg.at - names.length] || null : null;

  // Without a connection (or before a parent has approved the account) the parts
  // are still read out, which is better than nothing.
  const basic = () => [{ text: spec.title, at: null }, ...parts.map((p, i) => ({ text: p, at: i }))];

  // The teacher's explanation, fetched once and kept.
  const load = async () => {
    if (text) return text;
    setBusy(true);
    setNote(null);
    try {
      const e = await fetchExplanation({ kind: 'diagram', subject: subject || current, title: spec.title, items: parts, context, lang, className: user?.className });
      setText(e);
      return e;
    } catch {
      setNote(L('The tutor needs a connection the first time. Reading the diagram for now.', 'Le tuteur a besoin d’une connexion la première fois. Lecture du schéma pour l’instant.'));
      return null;
    } finally {
      setBusy(false);
    }
  };

  const start = async () => {
    if (voice.playing) return voice.stop();
    const e = await load();
    const list = e ? segmentsOf(e) : basic();
    setSegments(list);
    voice.play(list);
  };

  // Tapping a label explains that part: what it does and its role in the whole.
  const onLabel = async (i) => {
    const at = lineIdx.indexOf(i);
    if (at < 0 || busy) return;
    const e = await load();
    const one = [{ text: e ? e.items[at] : parts[at], at }];
    setSegments(one);
    voice.play(one);
  };

  const teach = explain && parts.length > 0;

  return (
    <V c="gap-1">
      <DiagramView spec={spec} maxHeight={maxHeight} active={active} point={point} onLabel={teach && names.length ? onLabel : undefined} />
      {caption && !!spec.title && (
        <T c="font-body-sm text-body-sm text-on-surface-variant text-center" style={{ lineHeight: 18 }}>
          {spec.title}
        </T>
      )}
      {teach && (
        <V c="gap-space-xs pt-space-xs">
          <ListenButton
            label={L('Listen: the teacher explains this diagram', 'Écouter : le professeur explique ce schéma')}
            sub={names.length ? L('Or tap a label to hear what that part does', 'Ou touchez une légende pour savoir à quoi sert cette partie') : L('Each part, what it means and why it matters', 'Chaque partie, ce qu’elle signifie et pourquoi elle compte')}
            stopLabel={L('Stop listening', 'Arrêter l’écoute')}
            busyLabel={L('The teacher is preparing the explanation', 'Le professeur prépare l’explication')}
            playing={voice.playing}
            busy={busy}
            onPress={start}
          />
          {!!note && <T c="font-body-sm text-body-sm text-on-surface-variant">{note}</T>}
          {!!seg && (
            <V c="p-space-sm rounded-lg bg-surface-container-low">
              {seg.at != null && seg.at < names.length && (
                <T c="font-label-md text-label-md text-primary-container" style={{ fontWeight: '700' }}>
                  {names[seg.at]}
                </T>
              )}
              <T c="font-body-md text-body-md text-on-surface" style={{ lineHeight: 22 }}>
                {seg.text}
              </T>
            </V>
          )}
        </V>
      )}
    </V>
  );
}

// The labelled diagram that represents a unit on cards and unit pages.
export function UnitPicture({ unit, maxHeight = 230, explain = false }) {
  if (!unit?.diagram || !DIAGRAMS[unit.diagram]) return null;
  return <Diagram id={unit.diagram} caption={explain} maxHeight={maxHeight} explain={explain} subject={unit.subject} />;
}
