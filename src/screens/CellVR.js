import { useEffect, useRef, useState } from 'react';
import { View } from 'react-native';
import * as Speech from 'expo-speech';
import { C, S, R, SH, alpha } from '../theme';
import { Btn, Dot, Icon, Row, T } from '../components/ui';
import { Card, Pill, Screen } from '../components/chrome';
import { LETTERS, PracticeOption, shuffled } from '../components/quiz';
import Viewport from '../three/Viewport';
import { units, unitById } from '../data/units';
import { focusUnit, useStore } from '../store/store';

const pad2 = (n) => String(n).padStart(2, '0');

export default function CellVR({ openUnit }) {
  const { state, set, answer, clearAnswer, finishQuiz, resetQuiz } = useStore();
  const unit = unitById(state.unitId) || units[0];
  const fr = state.lang === 'fr';
  const parts = unit.vr.parts.map((p) => (fr ? { ...p, ...p.fr } : p));
  const [active, setActive] = useState(unit.vr.parts[1].key);
  const [tools, setTools] = useState({ xray: false, explode: false, notes: true, voice: true });
  const [scrollOn, setScrollOn] = useState(true);
  const viewport = useRef(null);
  const scroll = useRef(null);

  useEffect(() => {
    setActive(unit.vr.parts[1].key);
    scroll.current?.scrollTo({ y: 0, animated: false });
    return () => Speech.stop();
  }, [unit.id]);

  const activeIdx = Math.max(0, parts.findIndex((p) => p.key === active));
  const activePart = parts[activeIdx];

  const select = (key) => {
    setActive(key);
    if (tools.voice) {
      const p = parts.find((x) => x.key === key);
      Speech.stop();
      Speech.speak(`${p.title}. ${p.desc}`, { language: fr ? 'fr-FR' : 'en-GB', rate: 0.95 });
    }
  };
  const toggle = (k) => {
    setTools((t) => ({ ...t, [k]: !t[k] }));
    if (k === 'voice') Speech.stop();
  };

  const i = units.indexOf(unit);
  const prev = units[(i + units.length - 1) % units.length];
  const next = units[(i + 1) % units.length];
  const activeCount = Object.values(tools).filter(Boolean).length;

  return (
    <View style={{ flex: 1 }}>
      <Screen scrollRef={scroll} scrollEnabled={scrollOn}>
        {/* Unit Header & Bilingual Switch */}
        <Card radius={R.xl}>
          <Row style={{ justifyContent: 'space-between', alignItems: 'flex-start', gap: S.sm, marginBottom: S.xs }}>
            <Row style={{ flexWrap: 'wrap', gap: 6, flex: 1 }}>
              <Pill bg={alpha('secondary-container', 0.3)} c="on-secondary-container" icon="verified" px={10}>
                GCE {state.level === 'A' ? 'A' : 'O'}-Level · Unit {pad2(unit.n)}
              </Pill>
              <Pill w={600}>{unit.papers}</Pill>
            </Row>
            <Row accessibilityLabel="Language selection" style={{ padding: 2, backgroundColor: C['surface-container'], borderRadius: R.full, boxShadow: SH.inner }}>
              {['en', 'fr'].map((l) => {
                const on = state.lang === l;
                return (
                  <Btn key={l} onPress={() => set({ lang: l })} style={[{ paddingHorizontal: 10, paddingVertical: 4, borderRadius: R.full }, on && { backgroundColor: C.primary, boxShadow: SH.sm }]}>
                    <T v="label-sm" c={on ? 'on-primary' : 'on-surface-variant'}>{l.toUpperCase()}</T>
                  </Btn>
                );
              })}
            </Row>
          </Row>
          <T v="headline-lg-mobile" style={{ marginTop: 4 }}>{fr ? unit.vr.fr.title : unit.vr.title}</T>
          <T v="body-sm" c="on-surface-variant" leading="snug" style={{ marginTop: 4 }}>{fr ? unit.vr.fr.subtitle : unit.vr.subtitle}</T>
          <Row style={{ gap: 8, marginTop: 12, paddingTop: 10, borderTopWidth: 1, borderTopColor: C['surface-container-low'] }}>
            <Icon name="hub" size={18} color={C.primary} />
            <T v="label-sm" c="primary" style={{ flex: 1 }}>BioSpatial 3D Engine · Touch-responsive organelle model</T>
          </Row>
        </Card>

        {/* Large 3D Viewport Centerpiece */}
        <View style={{ backgroundColor: C['surface-container-low'], borderRadius: R['2xl'], padding: 12, boxShadow: SH.sm }}>
          <Row style={{ justifyContent: 'space-between', marginBottom: 8, zIndex: 10 }}>
            <Row style={{ gap: 6, paddingHorizontal: 10, paddingVertical: 4, borderRadius: R.full, backgroundColor: alpha('surface-container-lowest', 0.9), boxShadow: SH.sm }}>
              <Pulse />
              <T v="label-sm" w={500}>3D Interactive Spatial View</T>
            </Row>
            <Btn accessibilityLabel="Reset Camera" onPress={() => viewport.current?.reset()} style={{ height: 32, paddingHorizontal: 10, borderRadius: R.full, backgroundColor: alpha('surface-container-lowest', 0.9), flexDirection: 'row', alignItems: 'center', gap: 4, boxShadow: SH.sm }}>
              <Icon name="refresh" size={16} color={C['on-surface-variant']} />
              <T v="label-sm" c="on-surface-variant">Center View</T>
            </Btn>
          </Row>
          <Viewport
            key={unit.id}
            ref={viewport}
            unitId={unit.id}
            parts={parts}
            active={active}
            onSelect={select}
            xray={tools.xray}
            explode={tools.explode}
            notes={tools.notes}
            onInteract={(on) => setScrollOn(!on)}
          />
          <Row style={{ marginTop: 10, justifyContent: 'center' }}>
            <Row style={{ gap: 8, paddingHorizontal: 12, paddingVertical: 6, borderRadius: R.full, backgroundColor: alpha('surface-container-lowest', 0.8), boxShadow: SH.sm }}>
              <Icon name="touch_app" size={16} color={C.primary} />
              <T v="label-sm" c="on-surface-variant" style={{ letterSpacing: 0 }}>Swipe to rotate · Pinch to zoom · Tap pins to inspect</T>
            </Row>
          </Row>
        </View>

        {/* Viewport Tool Strip */}
        <Card radius={R.xl}>
          <Row style={{ justifyContent: 'space-between', marginBottom: S.sm }}>
            <T v="label-sm" c="on-surface-variant" upper>Interactive Tools</T>
            <Pill bg={alpha('primary-fixed', 0.4)} c="on-primary-fixed" w={500} dot="primary">{activeCount} of 4 tools active</Pill>
          </Row>
          <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 8 }}>
            <Tool icon="layers" title="X-Ray Slice" sub="Wireframe" on={tools.xray} onPress={() => toggle('xray')} />
            <Tool icon="open_in_full" title="Explode 3D" sub="Parts spread" on={tools.explode} onPress={() => toggle('explode')} />
            <Tool icon="edit_note" title="Notes Panel" sub={tools.notes ? 'Active callouts' : 'Callouts hidden'} on={tools.notes} onPress={() => toggle('notes')} />
            <Tool icon="record_voice_over" title="Dr. Nkwenti" sub={tools.voice ? 'Narration ON' : 'Narration OFF'} on={tools.voice} voice onPress={() => toggle('voice')} />
          </View>
        </Card>

        {/* Active Focus & Labeled Parts Detail Panel */}
        <Card radius={R.xl} style={{ gap: 14 }}>
          <View style={{ padding: S.sm, backgroundColor: C['surface-container-low'], borderRadius: R.xl }}>
            <Row style={{ justifyContent: 'space-between', marginBottom: 6 }}>
              <Row style={{ gap: 6 }}>
                <Dot size={10} color="secondary" />
                <T v="label-sm" w={700} c="secondary" upper style={{ letterSpacing: 0.9 }}>Active Focus</T>
              </Row>
              <Pill bg="surface-container" w={500}>Pin {pad2(activeIdx + 1)}</Pill>
            </Row>
            <T v="title-md">{activePart.title}</T>
            <T v="body-sm" c="on-surface-variant" leading="relaxed" style={{ marginTop: 4 }}>{activePart.desc}</T>
          </View>

          <View>
            <T v="label-sm" c="on-surface-variant" upper style={{ marginBottom: 8 }}>Inspectable Structures</T>
            <View style={{ gap: 6 }}>
              {parts.map((p, idx) => {
                const on = p.key === active;
                return (
                  <Btn key={p.key} onPress={() => select(p.key)} style={{ width: '100%', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: 10, borderRadius: R.lg, backgroundColor: on ? alpha('secondary-container', 0.3) : C.surface }}>
                    <Row style={{ gap: 10, flex: 1, minWidth: 0 }}>
                      <View style={{ width: 24, height: 24, borderRadius: 12, backgroundColor: on ? C.secondary : C['surface-container-highest'], alignItems: 'center', justifyContent: 'center' }}>
                        <T v="label-sm" w={on ? 700 : 600} c={on ? 'on-secondary' : 'on-surface'}>{idx + 1}</T>
                      </View>
                      <T v="body-sm" w={on ? 600 : 500} c={on ? 'on-secondary-container' : 'on-surface'} numberOfLines={1} style={{ flex: 1 }}>{p.list}</T>
                    </Row>
                    <Icon name={on ? 'visibility' : 'chevron_right'} size={18} color={on ? C.secondary : C.outline} />
                  </Btn>
                );
              })}
            </View>
          </View>

          <Row style={{ gap: 8, paddingTop: 4, alignItems: 'stretch' }}>
            <InfoTile icon="assignment_turned_in" color="primary" label="Exam Weight" value={unit.vr.weightTile[0]} sub={unit.vr.weightTile[1]} />
            <InfoTile icon="bolt" color="secondary" label="Key Concept" value={unit.vr.concept[0]} sub={unit.vr.concept[1]} />
          </Row>
        </Card>

        {/* Quick Assessment Practice Card */}
        <Practice unit={unit} progress={state.progress[unit.id]} focusId={focusUnit(state.progress).id} answer={answer} clearAnswer={clearAnswer} finishQuiz={finishQuiz} resetQuiz={resetQuiz} />

        {/* Footer Topic Navigation */}
        <Row style={{ gap: 8, paddingTop: 4, alignItems: 'stretch' }}>
          <Btn onPress={() => openUnit(prev.id)} style={{ flex: 1, padding: 12, borderRadius: R.xl, backgroundColor: C['surface-container-lowest'], boxShadow: SH.sm, flexDirection: 'row', alignItems: 'center', gap: 8 }}>
            <View style={{ width: 32, height: 32, borderRadius: R.lg, backgroundColor: C['surface-container-low'], alignItems: 'center', justifyContent: 'center' }}>
              <Icon name="arrow_back" size={18} color={C.primary} />
            </View>
            <View style={{ flex: 1, minWidth: 0 }}>
              <T v="label-sm" c="on-surface-variant" upper>Previous Topic</T>
              <T v="title-md" size={13} numberOfLines={1}>{prev.short}</T>
            </View>
          </Btn>
          <Btn onPress={() => openUnit(next.id)} style={{ flex: 1, padding: 12, borderRadius: R.xl, backgroundColor: C['surface-container-lowest'], boxShadow: SH.sm, flexDirection: 'row', alignItems: 'center' }}>
            <View style={{ flex: 1, minWidth: 0 }}>
              <T v="label-sm" c="on-surface-variant" upper style={{ textAlign: 'right' }}>Next Topic</T>
              <T v="title-md" size={13} c="primary" numberOfLines={1} style={{ textAlign: 'right' }}>{next.short}</T>
            </View>
            <View style={{ width: 32, height: 32, borderRadius: R.lg, backgroundColor: alpha('primary-fixed', 0.5), alignItems: 'center', justifyContent: 'center', marginLeft: 8 }}>
              <Icon name="arrow_forward" size={18} color={C.primary} />
            </View>
          </Btn>
        </Row>
      </Screen>
    </View>
  );
}

// animate-pulse dot
function Pulse() {
  const [on, setOn] = useState(true);
  useEffect(() => {
    const t = setInterval(() => setOn((v) => !v), 1000);
    return () => clearInterval(t);
  }, []);
  return <Dot size={8} color="secondary" style={{ opacity: on ? 1 : 0.5 }} />;
}

function Tool({ icon, title, sub, on, voice, onPress }) {
  let box = { backgroundColor: C['surface-container-low'] };
  let iconBox = { backgroundColor: C['surface-container-highest'] };
  let iconColor = C.primary;
  let titleC = 'on-surface';
  let subC = 'on-surface-variant';
  if (on && voice) {
    box = { backgroundColor: alpha('secondary-container', 0.7), boxShadow: SH.sm };
    iconBox = { backgroundColor: C.secondary };
    iconColor = C['on-secondary'];
    titleC = 'on-secondary-container';
    subC = 'secondary';
  } else if (on) {
    box = { backgroundColor: C.primary, boxShadow: SH.sm };
    iconBox = { backgroundColor: alpha('on-primary', 0.2) };
    iconColor = C['on-primary'];
    titleC = 'on-primary';
    subC = 'on-primary-container';
  }
  return (
    <Btn onPress={onPress} accessibilityState={{ selected: on }} style={[{ width: '48.6%', flexGrow: 1, flexDirection: 'row', alignItems: 'center', gap: 10, padding: 10, borderRadius: R.xl }, box]}>
      <View style={[{ width: 36, height: 36, borderRadius: R.lg, alignItems: 'center', justifyContent: 'center' }, iconBox]}>
        <Icon name={icon} size={20} color={iconColor} />
      </View>
      <View style={{ flex: 1, minWidth: 0 }}>
        <T v="title-md" size={14} c={titleC} leading="tight" numberOfLines={1}>{title}</T>
        <T v="label-sm" c={subC} leading="none" style={{ marginTop: 2 }} numberOfLines={1}>{sub}</T>
      </View>
    </Btn>
  );
}

function InfoTile({ icon, color, label, value, sub }) {
  return (
    <View style={{ flex: 1, padding: 12, borderRadius: R.xl, backgroundColor: C['surface-container-low'] }}>
      <Row style={{ gap: 6, marginBottom: 4 }}>
        <Icon name={icon} size={16} color={C[color]} />
        <T v="label-sm" c={color} upper>{label}</T>
      </Row>
      <T v="title-md">{value}</T>
      <T v="label-sm" c="on-surface-variant" style={{ marginTop: 2 }}>{sub}</T>
    </View>
  );
}

function Practice({ unit, progress, focusId, answer, clearAnswer, finishQuiz, resetQuiz }) {
  const total = unit.quiz.length;
  const answers = progress?.answers || {};
  const attempt = progress?.attempts || 0;
  const firstOpen = () => {
    for (let k = 0; k < total; k++) if (!answers[k]) return k;
    return total - 1;
  };
  const [qi, setQi] = useState(firstOpen);
  const [done, setDone] = useState(null);
  useEffect(() => {
    setQi(firstOpen());
    setDone(null);
  }, [unit.id]);

  if (done) {
    return (
      <Card radius={R.xl}>
        <Row style={{ gap: 6, marginBottom: 8 }}>
          <Icon name="quiz" size={20} color={C.primary} />
          <T v="title-md">Mastery Practice</T>
        </Row>
        <T v="headline-sm" w={700} c="primary">{done.pct}% · {done.correct}/{total} correct</T>
        <T v="body-sm" c="on-surface-variant" style={{ marginTop: 4 }}>
          {done.pct >= 90 ? 'Unit mastered — excellent work.' : 'Review the Chief Examiner feedback and try again to reach 90% mastery.'}
        </T>
        <Row style={{ justifyContent: 'flex-end', marginTop: 12 }}>
          <Btn onPress={() => { setDone(null); setQi(0); }} style={{ paddingHorizontal: 16, paddingVertical: 6, borderRadius: R.lg, backgroundColor: C.primary, boxShadow: SH.sm, flexDirection: 'row', alignItems: 'center', gap: 4 }}>
            <T v="label-sm" c="on-primary">Practice Again</T>
            <Icon name="replay" size={16} color={C['on-primary']} />
          </Btn>
        </Row>
      </Card>
    );
  }

  const q = unit.quiz[qi];
  const order = shuffled(q.a, `${unit.id}:${qi}:${attempt}`);
  const given = answers[qi];

  const next = () => {
    if (qi < total - 1) return setQi(qi + 1);
    const correct = Object.values(answers).filter((a) => a.ok).length;
    finishQuiz(unit.id, total, focusId);
    setDone({ correct, pct: Math.round((correct / total) * 100) });
  };

  return (
    <Card radius={R.xl}>
      <Row style={{ justifyContent: 'space-between', marginBottom: 8 }}>
        <Row style={{ gap: 6 }}>
          <Icon name="quiz" size={20} color={C.primary} />
          <T v="title-md">Mastery Practice</T>
        </Row>
        <Pill bg="primary-fixed" c="on-primary-fixed" px={10}>Question {qi + 1} of {total}</Pill>
      </Row>
      <T v="body-md" w={500} leading="snug" style={{ marginBottom: 12 }}>{q.q}</T>
      <View style={{ gap: 8 }}>
        {order.map((authored, pos) => {
          let st = given ? 'locked' : 'open';
          if (given && authored === 0) st = 'correct';
          else if (given && given.pick === authored) st = 'wrong';
          return (
            <PracticeOption key={pos} letter={LETTERS[pos]} text={q.a[authored]} state={st} onPress={() => answer(unit.id, qi, authored === 0, authored)} />
          );
        })}
      </View>
      {given && (
        <View style={{ marginTop: 14, padding: 12, borderRadius: R.xl, backgroundColor: C['surface-container-low'] }}>
          <Row style={{ gap: 6, marginBottom: 4 }}>
            <Icon name="lightbulb" size={18} color={C.primary} />
            <T v="label-sm" c="primary">Chief Examiner's Feedback</T>
          </Row>
          <T v="body-sm" c="on-surface-variant" leading="relaxed">{q.why}</T>
          <Row style={{ justifyContent: 'flex-end', gap: 8, marginTop: 12, paddingTop: 8 }}>
            <Btn onPress={() => clearAnswer(unit.id, qi)} style={{ paddingHorizontal: 12, paddingVertical: 6, borderRadius: R.lg, backgroundColor: C['surface-container'] }}>
              <T v="label-sm">Retry</T>
            </Btn>
            <Btn onPress={next} style={{ paddingHorizontal: 16, paddingVertical: 6, borderRadius: R.lg, backgroundColor: C.primary, boxShadow: SH.sm, flexDirection: 'row', alignItems: 'center', gap: 4 }}>
              <T v="label-sm" c="on-primary">{qi < total - 1 ? 'Next Question' : 'Finish Practice'}</T>
              <Icon name="arrow_forward" size={16} color={C['on-primary']} />
            </Btn>
          </Row>
        </View>
      )}
    </Card>
  );
}
