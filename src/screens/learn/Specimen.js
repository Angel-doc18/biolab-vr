// A topic's 3D model: turn it, open it, watch it work, hear the teacher explain
// every part, and test yourself by finding the parts.
import { useEffect, useMemo, useRef, useState } from 'react';
import { ScrollView } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import * as Speech from '../../lib/voice';
import { Ic, P, T, V } from '../../ui/kit';
import { StackHeader, useToast } from '../../ui/chrome';
import Viewport, { useModelSpec } from '../../three/Viewport';
import VRView from '../../three/VRView';
import { hasMotion } from '../../three/anim';
import { ANATOMY, ANATOMY_CREDIT, UNIT_MODEL, arSupported, openInAR } from '../../three/anatomy';
import { UnitPicture } from '../../diagrams';
import { useApp } from '../../state/store';
import ListenButton from '../../ui/ListenButton';
import { useL, useLang } from '../../i18n';
import { modelOf, topicLabel, unitById } from '../../data/units';
import { useNarrator } from '../../lib/narrator';
import { fetchExplanation, segmentsOf } from '../../lib/explain';

function Tool({ icon, label, on, onPress }) {
  return (
    <P c={`flex-1 h-14 items-center justify-center rounded-lg gap-0.5 ${on ? 'bg-primary-container' : 'bg-surface-container-low'}`} onPress={onPress} accessibilityRole="switch" accessibilityLabel={label} accessibilityState={{ checked: !!on }} scale={0.97}>
      <Ic n={icon} s={20} c={on ? 'on-primary' : 'on-surface'} />
      <T c={`font-label-sm ${on ? 'text-on-primary' : 'text-on-surface'}`} style={{ fontSize: 11, lineHeight: 13 }}>
        {label}
      </T>
    </P>
  );
}

const shuffle = (list) => {
  const a = [...list];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
};

// A topic without a model (an old link, for example) gets a short message instead.
export default function Specimen({ navigation, route }) {
  const L = useL();
  const unit = unitById(route.params?.unitId || 'cell');
  if (!unit?.vr) {
    return (
      <V c="flex-1 bg-surface-container-lowest">
        <StackHeader close title={L('3D model', 'Modèle 3D')} avatar={false} />
        <V c="px-margin pt-space-md">
          <T c="font-body-md text-body-md text-on-surface-variant">{L('This topic has no 3D model. Its lessons have labelled diagrams.', 'Ce thème n’a pas de modèle 3D. Ses leçons ont des schémas légendés.')}</T>
        </V>
      </V>
    );
  }
  return <ModelScreen navigation={navigation} unit={unit} />;
}

function ModelScreen({ unit }) {
  const insets = useSafeAreaInsets();
  const { viewModel, user } = useApp();
  const L = useL();
  const appLang = useLang();
  const [lang, setLang] = useState(appLang);
  const parts = unit.vr.parts.map((p) => (lang === 'fr' && p.fr ? { ...p, ...p.fr } : p));
  const vr = lang === 'fr' && unit.vr.fr ? { ...unit.vr, ...unit.vr.fr } : unit.vr;
  const model = useModelSpec(unit.id);
  const moves = hasMotion(model.spec);
  const [active, setActive] = useState(unit.vr.parts[0].key);
  const [xray, setXray] = useState(false);
  const [explode, setExplode] = useState(false);
  const [names, setNames] = useState(true);
  const [motion, setMotion] = useState(true);
  const [failed, setFailed] = useState(false);
  const [vrOpen, setVrOpen] = useState(false);
  const [speaking, setSpeaking] = useState(false);
  const [toast, showToast] = useToast();
  const view = useRef(null);
  const modelName = UNIT_MODEL[modelOf(unit.id)];
  const sizeKb = modelName ? Math.round(ANATOMY[modelName].bytes / 1024) : 0;

  useEffect(() => {
    viewModel(unit.id);
    return () => Speech.stop();
  }, [unit.id, viewModel]);

  // ---------- the teacher ----------
  // The model's parts are taught like a labelled diagram: for each part, what it
  // is, what it does and its role in the whole. The part being explained lights
  // up, turns towards the student and carries the pointer.
  const voice = useNarrator(lang);
  const [lessons, setLessons] = useState({}); // lang -> { intro, items, summary }
  const lesson = lessons[lang] || null;
  const [segments, setSegments] = useState([]);
  const [busy, setBusy] = useState(false);
  const [note, setNote] = useState(null);
  const items = useMemo(() => parts.map((p) => `${p.name}: ${p.desc}`), [parts]);
  const seg = voice.index >= 0 ? segments[voice.index] : null;
  const teacherPart = seg?.at != null ? parts[seg.at] : null;
  const switchLang = () => {
    voice.stop();
    Speech.stop();
    setSpeaking(false);
    setLang((l) => (l === 'fr' ? 'en' : 'fr'));
  };

  const load = async () => {
    if (lesson) return lesson;
    setBusy(true);
    setNote(null);
    try {
      const e = await fetchExplanation({
        kind: 'diagram',
        subject: unit.subject,
        title: `${L('3D model', 'Modèle 3D')}: ${vr.title}`,
        items,
        context: `${unit.title}. ${vr.subtitle || ''} ${moves ? L('The model moves to show the process.', 'Le modèle bouge pour montrer le phénomène.') : ''}`.trim(),
        lang,
        className: user?.className,
      });
      setLessons((all) => ({ ...all, [lang]: e }));
      return e;
    } catch (e) {
      setNote(
        e?.code === 'consent_required'
          ? L('The teacher explains models once a parent approves your account. Reading the parts for now.', 'Le professeur explique les modèles après l’accord d’un parent. Lecture des parties pour l’instant.')
          : L('The teacher needs a connection the first time. Reading the parts for now.', 'Le professeur a besoin d’une connexion la première fois. Lecture des parties pour l’instant.')
      );
      return null;
    } finally {
      setBusy(false);
    }
  };

  const teach = async () => {
    if (voice.playing) return voice.stop();
    Speech.stop();
    setSpeaking(false);
    setExplode(false);
    const e = await load();
    const list = e ? segmentsOf(e) : [{ text: vr.title, at: null }, ...parts.map((p, i) => ({ text: `${p.title}. ${p.desc}`, at: i }))];
    setSegments(list);
    voice.play(list);
  };

  // Tapping a part: select it and, once the teacher's explanation is here, hear
  // just that part.
  const select = (k) => {
    if (test) return answer(k);
    setActive(k);
    const at = parts.findIndex((p) => p.key === k);
    if (lesson && at >= 0) {
      const one = [{ text: lesson.items[at], at }];
      setSegments(one);
      voice.play(one);
    }
  };

  // Listening to the selected part on its own (its notes, or the teacher's words).
  const speakPart = () => {
    if (speaking) {
      Speech.stop();
      setSpeaking(false);
      return;
    }
    voice.stop();
    setSpeaking(true);
    Speech.speak(lesson ? lesson.items[idx] : `${part.title}. ${part.desc}`, {
      lang,
      onDone: () => setSpeaking(false),
      onStopped: () => setSpeaking(false),
      onError: () => setSpeaking(false),
    });
  };

  // ---------- test yourself: find each part ----------
  const [test, setTest] = useState(null); // { order, i, score, last }
  const startTest = () => {
    voice.stop();
    Speech.stop();
    setSpeaking(false);
    setExplode(false);
    setXray(false);
    setTest({ order: shuffle(parts.map((p) => p.key)), i: 0, score: 0, last: null });
  };
  const answer = (k) => {
    if (!test || test.last) return;
    const want = test.order[test.i];
    const right = k === want;
    setTest((t) => ({ ...t, score: t.score + (right ? 1 : 0), last: { picked: k, right } }));
  };
  const nextQuestion = () => setTest((t) => ({ ...t, i: t.i + 1, last: null }));
  const testDone = test && test.i >= test.order.length;
  const wanted = test && !testDone ? parts.find((p) => p.key === test.order[test.i]) : null;
  const picked = test?.last ? parts.find((p) => p.key === test.last.picked) : null;

  // The part that lights up: in a test, the right answer once the student has
  // chosen; while the teacher talks, the part being explained; otherwise the
  // part the student picked.
  const shown = test ? (test.last && wanted ? wanted.key : null) : teacherPart ? teacherPart.key : active;
  const part = parts.find((p) => p.key === shown) || parts.find((p) => p.key === active) || parts[0];
  const idx = parts.indexOf(part);

  const ar = async () => {
    try {
      await openInAR(modelName, unit.vr.title);
    } catch (e) {
      showToast(e.code === 'premium_required' ? e.message : L('Could not open the AR view on this phone.', 'Impossible d’ouvrir la vue AR sur ce téléphone.'), 'error');
    }
  };

  const statusText =
    model.status === 'loading'
      ? `${L('Downloading the full 3D model', 'Téléchargement du modèle 3D complet')} (${sizeKb} KB)... ${L('A simpler model is shown until it arrives.', 'Un modèle simplifié est affiché en attendant.')}`
      : model.status === 'error'
      ? L('Showing a simplified model. The full model downloads when you are connected.', 'Modèle simplifié affiché. Le modèle complet se télécharge quand vous êtes connecté.')
      : null;
  return (
    <V c="flex-1 bg-surface-container-lowest">
      <StackHeader
        close
        title={vr.title}
        subtitle={`${topicLabel(unit, L)}, ${unit.short}`}
        subtitleColor="on-surface-variant"
        avatar={false}
        right={
          <P c="h-9 px-2.5 rounded-lg bg-surface-container flex-row items-center" onPress={switchLang} accessibilityLabel={L('Switch the language of the labels', 'Changer la langue des légendes')}>
            <T c="font-label-md text-label-md text-on-surface">{lang === 'fr' ? 'FR' : 'EN'}</T>
          </P>
        }
      />
      <ScrollView contentContainerStyle={{ paddingBottom: insets.bottom + 32 }} showsVerticalScrollIndicator={false}>
        <V c="px-margin pt-space-sm gap-space-sm">
          {failed ? (
            <V c="gap-space-xs">
              <UnitPicture unit={unit} maxHeight={300} />
              <T c="font-body-sm text-body-sm text-on-surface-variant">
                {L('This phone could not draw the 3D model, so the labelled diagram is shown. The teacher and the parts below still work.', 'Ce téléphone n’a pas pu afficher le modèle 3D : le schéma légendé est affiché. Le professeur et les parties ci-dessous fonctionnent toujours.')}
              </T>
            </V>
          ) : (
            <Viewport
              ref={view}
              unitId={unit.id}
              model={model}
              parts={parts}
              active={shown}
              onSelect={select}
              xray={xray}
              explode={explode}
              labels={test || !names ? 'numbers' : 'names'}
              motion={moves && motion}
              onFail={() => setFailed(true)}
            />
          )}
          {!!statusText && !failed && <T c="font-body-sm text-body-sm text-on-surface-variant">{statusText}</T>}

          {test ? (
            // ---------- test yourself ----------
            <V c="gap-space-sm pt-space-xs">
              {testDone ? (
                <V c="p-space-md rounded-xl bg-surface-container-low gap-space-xs">
                  <T c="font-headline-sm text-headline-sm text-on-surface" style={{ fontWeight: '700' }}>
                    {L('You found', 'Vous avez trouvé')} {test.score} {L('of', 'sur')} {test.order.length}
                  </T>
                  <T c="font-body-md text-body-md text-on-surface-variant">
                    {test.score === test.order.length
                      ? L('Every part found. Turn the model and try again from another side.', 'Toutes les parties trouvées. Tournez le modèle et recommencez sous un autre angle.')
                      : L('Listen to the teacher again, then try once more.', 'Réécoutez le professeur, puis réessayez.')}
                  </T>
                  <V c="flex-row gap-space-xs pt-space-xs">
                    <P c="flex-1 h-12 rounded-xl bg-primary-container items-center justify-center" onPress={startTest}>
                      <T c="font-label-lg text-label-lg text-on-primary" style={{ fontWeight: '700' }}>{L('Try again', 'Recommencer')}</T>
                    </P>
                    <P c="flex-1 h-12 rounded-xl bg-surface-container items-center justify-center" onPress={() => (setTest(null), setActive(parts[0].key))}>
                      <T c="font-label-lg text-label-lg text-on-surface">{L('Back to exploring', 'Revenir au modèle')}</T>
                    </P>
                  </V>
                </V>
              ) : (
                <V c="p-space-md rounded-xl bg-surface-container-low gap-space-xs">
                  <T c="font-label-md text-label-md text-on-surface-variant">
                    {L('Question', 'Question')} {test.i + 1} {L('of', 'sur')} {test.order.length}. {L('Score', 'Score')}: {test.score}
                  </T>
                  <T c="font-headline-sm text-headline-sm text-on-surface" style={{ fontWeight: '700' }}>
                    {L('Tap the number of the', 'Touchez le numéro de :')} {wanted.name}
                  </T>
                  {test.last ? (
                    <V c="gap-space-xs">
                      <T c={`font-body-md text-body-md ${test.last.right ? 'text-secondary' : 'text-error'}`} style={{ fontWeight: '700' }}>
                        {test.last.right
                          ? L('Correct.', 'Correct.')
                          : `${L('Not quite: that is the', 'Pas tout à fait : c’est')} ${picked?.name}. ${L('The', 'La partie')} ${wanted.name} ${L('is number', 'est le numéro')} ${parts.indexOf(wanted) + 1}.`}
                      </T>
                      <T c="font-body-md text-body-md text-on-surface" style={{ lineHeight: 22 }}>
                        {wanted.desc}
                      </T>
                      <P c="h-12 rounded-xl bg-primary-container items-center justify-center" onPress={nextQuestion}>
                        <T c="font-label-lg text-label-lg text-on-primary" style={{ fontWeight: '700' }}>
                          {test.i + 1 < test.order.length ? L('Next part', 'Partie suivante') : L('See my score', 'Voir mon score')}
                        </T>
                      </P>
                    </V>
                  ) : (
                    <T c="font-body-sm text-body-sm text-on-surface-variant">{L('The names are hidden. Turn the model if you need to.', 'Les noms sont cachés. Tournez le modèle si besoin.')}</T>
                  )}
                </V>
              )}
            </V>
          ) : (
            // ---------- explore ----------
            <>
              <T c="font-body-sm text-body-sm text-on-surface-variant">
                {L('Drag to turn, pinch to zoom, tap a number to choose a part.', 'Glissez pour tourner, pincez pour zoomer, touchez un numéro pour choisir une partie.')}
              </T>
              <V c="flex-row gap-space-xs">
                <Tool icon="restart_alt" label={L('Reset', 'Recentrer')} onPress={() => (view.current?.reset(), setExplode(false), setXray(false))} />
                <Tool icon="visibility" label={L('See inside', 'Voir dedans')} on={xray} onPress={() => setXray((x) => !x)} />
                <Tool icon="open_in_full" label={L('Separate', 'Séparer')} on={explode} onPress={() => setExplode((x) => !x)} />
                <Tool icon="label" label={L('Names', 'Noms')} on={names} onPress={() => setNames((x) => !x)} />
                {moves && <Tool icon={motion ? 'pause' : 'play_arrow'} label={L('Motion', 'Mouvement')} on={motion} onPress={() => setMotion((x) => !x)} />}
              </V>

              <ListenButton
                label={L('Listen: the teacher explains this model', 'Écouter : le professeur explique ce modèle')}
                sub={L('Each part, what it does and its role in the whole', 'Chaque partie, son rôle et sa place dans l’ensemble')}
                stopLabel={L('Stop the teacher', 'Arrêter le professeur')}
                busyLabel={L('The teacher is preparing the explanation', 'Le professeur prépare l’explication')}
                playing={voice.playing}
                busy={busy}
                onPress={teach}
              />
              {!!note && <T c="font-body-sm text-body-sm text-on-surface-variant">{note}</T>}
              {!!seg && (
                <V c="p-space-sm rounded-lg bg-surface-container-low">
                  {!!teacherPart && (
                    <T c="font-label-md text-label-md text-primary-container" style={{ fontWeight: '700' }}>
                      {parts.indexOf(teacherPart) + 1}. {teacherPart.name}
                    </T>
                  )}
                  <T c="font-body-md text-body-md text-on-surface" style={{ lineHeight: 22 }}>
                    {seg.text}
                  </T>
                </V>
              )}

              <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginHorizontal: -16 }} contentContainerStyle={{ gap: 8, paddingHorizontal: 16, paddingVertical: 4 }}>
                {parts.map((p, i) => {
                  const on = p.key === shown;
                  return (
                    <P key={p.key} c={`h-10 px-3 rounded-lg items-center justify-center ${on ? 'bg-primary-container' : 'bg-surface-container-low'}`} onPress={() => select(p.key)} accessibilityState={{ selected: on }}>
                      <T c={`font-label-md text-label-md ${on ? 'text-on-primary' : 'text-on-surface'}`}>
                        {i + 1}. {p.name}
                      </T>
                    </P>
                  );
                })}
              </ScrollView>

              <V c="gap-space-xs pt-space-xs">
                <T c="font-label-md text-label-md text-on-surface-variant">
                  {idx + 1} {L('of', 'sur')} {parts.length}, {part.tag}
                </T>
                <T c="font-headline-sm text-headline-sm text-on-surface" style={{ fontWeight: '700' }}>
                  {part.title}
                </T>
                <T c="font-body-md text-body-md text-on-surface" style={{ lineHeight: 23 }}>
                  {part.desc}
                </T>
                <ListenButton size="sm" c="mt-space-xs" label={L('Listen to this part', 'Écouter cette partie')} stopLabel={L('Stop', 'Arrêter')} playing={speaking} onPress={speakPart} />
              </V>

              <P c="h-12 rounded-xl bg-surface-container flex-row items-center justify-center gap-2 mt-space-sm" onPress={startTest}>
                <Ic n="quiz" s={20} c="on-surface" />
                <T c="font-label-lg text-label-lg text-on-surface" style={{ fontWeight: '700' }}>
                  {L('Test me: find the parts', 'Testez-vous : trouvez les parties')}
                </T>
              </P>

              <V c="gap-space-xs pt-space-sm">
                {arSupported && modelName && (
                  <P c="h-12 rounded-xl bg-primary-container flex-row items-center justify-center gap-2" onPress={ar}>
                    <Ic n="view_in_ar" s={20} c="on-primary" />
                    <T c="font-label-lg text-label-lg text-on-primary" style={{ fontWeight: '700' }}>
                      {L('View in your room (AR)', 'Voir dans votre pièce (AR)')}
                    </T>
                  </P>
                )}
                {!failed && (
                  <>
                    <P c="h-12 rounded-xl bg-surface-container flex-row items-center justify-center gap-2" onPress={() => (voice.stop(), setVrOpen(true))}>
                      <Ic n="vrpano" s={20} c="on-surface" />
                      <T c="font-label-lg text-label-lg text-on-surface">{L('Cardboard VR view', 'Vue VR carton')}</T>
                    </P>
                    <T c="font-body-sm text-body-sm text-on-surface-variant">
                      {L('For VR, put the phone in any cardboard viewer and turn your head to look around.', 'Pour la VR, placez le téléphone dans une visionneuse en carton et tournez la tête.')}
                    </T>
                  </>
                )}
              </V>

              {modelName && model.status === 'ready' && (
                <T c="font-body-sm text-on-surface-variant pt-space-sm" style={{ fontSize: 11, lineHeight: 15 }}>
                  {ANATOMY_CREDIT}
                </T>
              )}
            </>
          )}
        </V>
      </ScrollView>
      {vrOpen && <VRView unitId={unit.id} onClose={() => setVrOpen(false)} />}
      {toast}
    </V>
  );
}
