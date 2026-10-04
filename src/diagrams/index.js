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
import { CHEMISTRY_3 } from './chemistry3';

export const DIAGRAMS = { ...BIOLOGY, ...BIOLOGY_MORE, ...BIOLOGY_3, ...APPARATUS_BIO, ...HUMANBIO, ...CHEMISTRY, ...CHEMISTRY_MORE, ...CHEMISTRY_3, ...APPARATUS_CHEM, ...PHYSICS, ...PHYSICS_MORE, ...APPARATUS_PHYS };

// A labelled diagram. With `explain`, the tutor can explain it out loud: each
// label lights up while it is being explained, and tapping a label explains just
// that structure.
export function Diagram({ id, caption = true, maxHeight, explain = false, subject }) {
  const spec = DIAGRAMS[id];
  const { subject: current } = useApp();
  const L = useL();
  const lang = useLang();
  const voice = useNarrator(lang);
  const [text, setText] = useState(null); // { intro, items, summary }
  const [busy, setBusy] = useState(false);
  const [note, setNote] = useState(null);
  const [segments, setSegments] = useState([]);
  if (!spec) return null;
  const names = labelTexts(spec);
  const lineIdx = labelIndexes(spec); // label index of each named structure
  const seg = voice.index >= 0 ? segments[voice.index] : null;
  const active = seg?.at != null ? lineIdx[seg.at] : null;

  // Without a connection (or before a parent has approved the account) the
  // labels are still read out one by one.
  const basic = () => [{ text: spec.title, at: null }, ...names.map((n, i) => ({ text: n, at: i }))];

  const start = async () => {
    if (voice.playing) return voice.stop();
    setNote(null);
    let list = text ? segmentsOf(text) : null;
    if (!list) {
      setBusy(true);
      try {
        const e = await fetchExplanation({ kind: 'diagram', subject: subject || current, title: spec.title, items: names, lang });
        setText(e);
        list = segmentsOf(e);
      } catch (e) {
        list = basic();
        setNote(
          e?.code === 'consent_required'
            ? L('The tutor explains diagrams once a parent approves your account. Reading the labels for now.', 'Le tuteur explique les schémas après l’accord d’un parent. Lecture des légendes pour l’instant.')
            : L('The tutor needs a connection the first time. Reading the labels for now.', 'Le tuteur a besoin d’une connexion la première fois. Lecture des légendes pour l’instant.')
        );
      } finally {
        setBusy(false);
      }
    }
    setSegments(list);
    voice.play(list);
  };

  const onLabel = (i) => {
    const at = lineIdx.indexOf(i);
    if (at < 0) return;
    const one = [{ text: text ? `${names[at]}. ${text.items[at]}` : names[at], at }];
    setSegments(one);
    voice.play(one);
  };

  return (
    <V c="gap-1">
      <DiagramView spec={spec} maxHeight={maxHeight} active={active} onLabel={explain ? onLabel : undefined} />
      {caption && !!spec.title && (
        <T c="font-body-sm text-body-sm text-on-surface-variant text-center" style={{ lineHeight: 18 }}>
          {spec.title}
        </T>
      )}
      {explain && (
        <V c="gap-space-xs pt-space-xs">
          <ListenButton
            label={L('Listen: the tutor explains this diagram', 'Écouter : le tuteur explique ce schéma')}
            sub={L('Or tap any label to hear about that part', 'Ou touchez une légende pour entendre cette partie')}
            stopLabel={L('Stop listening', 'Arrêter l’écoute')}
            busyLabel={L('The tutor is preparing the explanation', 'Le tuteur prépare l’explication')}
            playing={voice.playing}
            busy={busy}
            onPress={start}
          />
          {!!note && <T c="font-body-sm text-body-sm text-on-surface-variant">{note}</T>}
          {!!seg && (
            <V c="p-space-sm rounded-lg bg-surface-container-low">
              {seg.at != null && (
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
