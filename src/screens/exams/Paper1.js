import { useEffect, useRef, useState } from 'react';
import { Animated, BackHandler, Modal, ScrollView } from 'react-native';
import { Bar, Ic, P, T, V } from '../../ui/kit';
import { Screen, Spinner, StackHeader } from '../../ui/chrome';
import { useApp } from '../../state/store';
import { useL, useLang } from '../../i18n';
import { subjectName } from '../../data/subjects';
import { buildPaper, byKey, clearSession, loadSession, mockRef, paper1Plan, saveSession, score, unitLabel } from '../../lib/exam';
import { topicLabel, unitById } from '../../data/units';
import { FREE_MOCKS_PER_WEEK, mocksThisWeek } from '../../data/plan';
import { completeMatchingAssignment } from '../../lib/assignments';

const fmt = (s) => `${String(Math.floor(s / 60)).padStart(2, '0')}:${String(s % 60).padStart(2, '0')}`;

function Option({ letter, text, selected, struck, onPick, onStrike, big, L }) {
  const strike = useRef(new Animated.Value(struck ? 1 : 0)).current;
  const [w, setW] = useState(0);
  useEffect(() => {
    Animated.timing(strike, { toValue: struck ? 1 : 0, duration: 220, useNativeDriver: false }).start();
  }, [struck, strike]);
  return (
    <Animated.View style={{ opacity: strike.interpolate({ inputRange: [0, 1], outputRange: [1, 0.4] }) }}>
      <P c={`w-full rounded-xl p-space-md flex-row items-start gap-space-sm ${selected ? 'bg-surface-container-low border-2 border-primary-container' : 'bg-surface-container-lowest border border-outline-variant'}`} onPress={onPick} scale={0.99}>
        <V c={`w-6 h-6 rounded-full items-center justify-center mt-0.5 ${selected ? 'bg-primary-container' : 'bg-surface-container'}`}>
          {selected ? <Ic n="check" s={16} c="on-primary" /> : <T c="font-label-md text-label-md text-on-surface-variant">{letter}</T>}
        </V>
        <V c="flex-1">
          <V onLayout={(e) => setW(e.nativeEvent.layout.width)}>
            <T c={`font-body-md text-body-md ${struck ? 'text-on-surface-variant' : 'text-on-surface'}`} style={[{ lineHeight: big ? 26 : 20 }, big && { fontSize: 17 }, selected && { fontWeight: '600' }]}>
              {text}
            </T>
            <Animated.View
              pointerEvents="none"
              style={{ position: 'absolute', left: 0, top: '50%', height: 1.5, backgroundColor: '#40474f', width: strike.interpolate({ inputRange: [0, 1], outputRange: [0, w] }) }}
            />
          </V>
        </V>
        <P c={`w-7 h-7 rounded-lg items-center justify-center ${struck ? 'bg-surface-container' : selected ? 'bg-surface-container-highest' : 'bg-surface-container-low'}`} onPress={onStrike} accessibilityLabel={struck ? 'Restore option' : 'Eliminate option'} hitSlop={6}>
          <Ic n={struck ? 'undo' : 'visibility_off'} s={16} c={struck ? 'on-surface' : 'on-surface-variant'} />
        </P>
      </P>
    </Animated.View>
  );
}

function Dialog({ visible, icon, iconBg, title, body, cancel, confirm, confirmC = 'bg-primary', onCancel, onConfirm }) {
  return (
    <Modal visible={visible} transparent animationType="fade" onRequestClose={onCancel}>
      <V c="flex-1 items-center justify-center p-margin" style={{ backgroundColor: 'rgba(22,51,72,0.6)' }}>
        <V c="w-full bg-surface-container-lowest rounded-xl p-space-lg shadow-xl gap-space-md" style={{ maxWidth: 380 }}>
          <V c={`w-12 h-12 rounded-xl items-center justify-center ${iconBg}`}>
            <Ic n={icon} s={28} c={iconBg.includes('error') ? 'on-error-container' : 'on-secondary-container'} />
          </V>
          <V>
            <T c="font-headline-sm text-headline-sm text-on-surface" style={{ fontWeight: '700' }}>
              {title}
            </T>
            <T c="font-body-md text-body-md text-on-surface-variant mt-1">{body}</T>
          </V>
          <V c="flex-row items-center gap-space-sm mt-2">
            <P c="flex-1 h-12 rounded-xl bg-surface-container items-center justify-center" onPress={onCancel}>
              <T c="font-label-lg text-label-lg text-on-surface">{cancel}</T>
            </P>
            <P c={`flex-1 h-12 rounded-xl ${confirmC} items-center justify-center`} onPress={onConfirm}>
              <T c="font-label-lg text-label-lg text-on-primary" style={{ fontWeight: '700' }}>
                {confirm}
              </T>
            </P>
          </V>
        </V>
      </V>
    </Modal>
  );
}

export default function Paper1({ navigation, route }) {
  const { pro, progress, recordExam, subject: current, user } = useApp();
  const L = useL();
  const subject = route.params?.subject || current;
  const plan = paper1Plan(subject, user?.className);
  const title = `${subjectName(subject, useLang())} ${L('Paper 1', 'épreuve 1')}`;
  const [s, setS] = useState(null); // { startedAt, paper, answers, flags, struck, index }
  const [now, setNow] = useState(Date.now());
  const [big, setBig] = useState(false);
  const [exit, setExit] = useState(false);
  const [finish, setFinish] = useState(false);
  const done = useRef(false);
  const matrix = useRef(null);

  useEffect(() => {
    (async () => {
      const existing = await loadSession(subject);
      if (existing) return setS(existing);
      if (!pro && mocksThisWeek(progress.exams, subject) >= FREE_MOCKS_PER_WEEK) return navigation.replace('Paywall', { reason: 'mocks' });
      const fresh = { startedAt: Date.now(), minutes: plan.minutes, paper: buildPaper(subject, plan.count, plan.unitIds), answers: {}, flags: {}, struck: {}, index: 0 };
      setS(fresh);
      saveSession(subject, fresh);
    })();
  }, []);

  useEffect(() => {
    const t = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(t);
  }, []);
  useEffect(() => {
    if (s) saveSession(subject, s);
  }, [s]);
  useEffect(() => {
    const sub = BackHandler.addEventListener('hardwareBackPress', () => {
      setExit(true);
      return true;
    });
    return () => sub.remove();
  }, []);

  const minutes = s?.minutes || plan.minutes;
  const left = s ? Math.max(0, Math.round((s.startedAt + minutes * 60000 - now) / 1000)) : minutes * 60;

  const submit = () => {
    if (!s || done.current) return;
    done.current = true;
    const r = score(s.paper, s.answers, s.flags);
    const secs = Math.min(minutes * 60, Math.round((Date.now() - s.startedAt) / 1000));
    const exam = { kind: 'p1', subject, score: r.correct, total: r.total, pct: r.pct, byUnit: r.byUnit, items: r.items, secs };
    recordExam(exam);
    clearSession(subject);
    completeMatchingAssignment('mock', mockRef(subject), r.pct);
    navigation.replace('Results', { exam: { ...exam, at: Date.now() } });
  };

  useEffect(() => {
    if (s && left === 0) submit();
  }, [left, s]);

  if (!s) return <Screen header={<StackHeader title={title} />}><Spinner /></Screen>;

  const i = s.index;
  const item = s.paper[i];
  const q = byKey(item.key);
  const unit = unitById(q.unit);
  const answered = Object.keys(s.answers).length;
  const flagged = Object.values(s.flags).filter(Boolean).length;
  const set = (patch) => setS((x) => ({ ...x, ...patch }));
  const go = (n) => {
    set({ index: Math.max(0, Math.min(s.paper.length - 1, n)) });
    setTimeout(() => matrix.current?.scrollTo({ x: Math.max(0, n * 38 - 120), animated: true }), 50);
  };
  const low = left < 10 * 60;

  return (
    <V c="flex-1">
      <Screen
        bg="bg-surface"
        header={<StackHeader title={title} subtitle={L('Multiple choice, practice paper', 'QCM, épreuve d’entraînement')} logo onBack={() => setExit(true)} />}
        footer={
          <V c="px-margin py-3 bg-surface-container-lowest flex-row items-center gap-space-sm" style={{ shadowColor: '#000', shadowOpacity: 0.08, shadowRadius: 16, elevation: 10 }}>
            <P c="h-12 px-space-md rounded-xl bg-surface-container flex-row items-center gap-1" onPress={() => go(i - 1)} disabled={i === 0}>
              <Ic n="arrow_back" s={20} c="primary" />
              <T c="font-label-lg text-label-lg text-primary">{L('Prev', 'Préc.')}</T>
            </P>
            <P c="w-12 h-12 rounded-xl bg-surface-container items-center justify-center" onPress={() => set({ flags: { ...s.flags, [i]: !s.flags[i] } })} accessibilityLabel="Flag question">
              <Ic n="bookmark" s={22} c="tertiary-container" fill={!!s.flags[i]} />
            </P>
            {i < s.paper.length - 1 ? (
              <P c="flex-1 h-[52px] rounded-xl bg-primary flex-row items-center justify-center gap-2 shadow-md" onPress={() => go(i + 1)}>
                <T c="font-label-lg text-label-lg text-on-primary" style={{ fontWeight: '700' }}>
                  {L('Next question', 'Suivante')}
                </T>
                <Ic n="arrow_forward" s={20} c="on-primary" />
              </P>
            ) : (
              <P c="flex-1 h-[52px] rounded-xl bg-secondary flex-row items-center justify-center gap-2 shadow-md" onPress={() => setFinish(true)}>
                <T c="font-label-lg text-label-lg text-on-secondary" style={{ fontWeight: '700' }}>
                  {L('Submit paper', 'Rendre la copie')}
                </T>
                <Ic n="task_alt" s={20} c="on-secondary" />
              </P>
            )}
          </V>
        }
      >
        <V c="pt-space-md pb-space-md">
          <V c="w-full mb-space-md flex-row items-center justify-between">
            <T c={`font-headline-sm text-headline-sm ${low ? 'text-error' : 'text-on-surface'}`} style={{ fontWeight: '700', fontVariant: ['tabular-nums'] }}>
              {fmt(left)} {L('left', 'restant')}
            </T>
            <P c="h-9 px-3 rounded-lg bg-surface-container items-center justify-center" onPress={() => setExit(true)} accessibilityLabel="Leave the paper">
              <T c="font-label-md text-label-md text-on-surface">{L('Leave', 'Quitter')}</T>
            </P>
          </V>

          <V c="w-full mb-space-md gap-space-sm">
            <V c="flex-row items-end justify-between gap-2">
              <T c="font-headline-sm text-headline-sm text-on-surface" style={{ fontWeight: '700' }}>
                {L('Question', 'Question')} {i + 1} {L('of', 'sur')} {s.paper.length}
              </T>
              <T c="font-body-sm text-body-sm text-on-surface-variant flex-shrink" numberOfLines={1}>
                {topicLabel(unit, L)}
              </T>
            </V>
            <Bar pct={(answered / s.paper.length) * 100} c="h-1 bg-surface-container" fill="bg-primary-container" />
            <V c="flex-row items-center justify-between pt-1">
              <P c="flex-row items-center gap-1.5 py-1 px-2.5 rounded-lg" onPress={() => set({ flags: { ...s.flags, [i]: !s.flags[i] } })}>
                <Ic n="flag" s={18} c={s.flags[i] ? 'tertiary-container' : 'on-surface-variant'} fill={!!s.flags[i]} />
                <T c={`font-label-md text-label-md ${s.flags[i] ? 'text-tertiary-container' : 'text-on-surface-variant'}`}>{s.flags[i] ? L('Flagged for review', 'Marquée') : L('Flag for review', 'Marquer')}</T>
              </P>
              <P c={`w-8 h-8 rounded-lg items-center justify-center ${big ? 'bg-primary-container' : 'bg-surface-container'}`} onPress={() => setBig((b) => !b)} accessibilityLabel="Larger text">
                <T c={`font-label-md text-label-md ${big ? 'text-on-primary' : 'text-on-surface'}`}>A+</T>
              </P>
            </V>
          </V>

          <V c="w-full mb-space-md gap-space-xs">
            <T c="font-body-lg text-body-lg text-on-surface" style={big ? { fontSize: 18, lineHeight: 28 } : { lineHeight: 26 }}>
              {q.q}
            </T>
          </V>

          <V c="gap-space-sm mb-space-lg">
            {item.order.map((orig, k) => (
              <Option
                key={orig}
                L={L}
                big={big}
                letter={String.fromCharCode(65 + k)}
                text={q.a[orig]}
                selected={s.answers[i] === orig}
                struck={!!s.struck[`${i}:${orig}`]}
                onPick={() => {
                  const struck = { ...s.struck };
                  delete struck[`${i}:${orig}`];
                  set({ answers: { ...s.answers, [i]: orig }, struck });
                }}
                onStrike={() => {
                  const key = `${i}:${orig}`;
                  const answers = { ...s.answers };
                  if (!s.struck[key] && answers[i] === orig) delete answers[i];
                  set({ struck: { ...s.struck, [key]: !s.struck[key] }, answers });
                }}
              />
            ))}
          </V>

          <V c="w-full bg-surface-container-lowest rounded-xl p-space-md shadow-sm gap-space-sm">
            <V c="flex-row items-center justify-between flex-wrap gap-1">
              <T c="font-headline-sm text-headline-sm text-on-surface" style={{ fontWeight: '700' }}>
                {L('All questions', 'Toutes les questions')}
              </T>
              <V c="flex-row items-center gap-space-sm">
                {[
                  ['bg-secondary', `${answered} ${L('done', 'faites')}`],
                  ['bg-tertiary-container', `${flagged} ${L('flagged', 'marquées')}`],
                  ['bg-surface-container-highest', `${s.paper.length - answered} ${L('left', 'restantes')}`],
                ].map(([bg, label]) => (
                  <V key={label} c="flex-row items-center gap-1">
                    <V c={`w-2 h-2 rounded-full ${bg}`} />
                    <T c="font-label-sm text-label-sm text-on-surface-variant">{label}</T>
                  </V>
                ))}
              </V>
            </V>
            <ScrollView ref={matrix} horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ gap: 6, paddingVertical: 6, paddingHorizontal: 2 }}>
              {s.paper.map((_, k) => {
                const cur = k === i;
                const bg = cur ? 'bg-primary shadow-md' : s.flags[k] ? 'bg-tertiary-container' : s.answers[k] != null ? 'bg-secondary' : 'bg-surface-container';
                const fg = cur || s.flags[k] || s.answers[k] != null ? 'text-on-primary' : 'text-on-surface-variant';
                return (
                  <P key={k} c={`w-8 h-8 rounded-lg items-center justify-center ${bg}`} style={cur ? { transform: [{ scale: 1.1 }] } : null} onPress={() => go(k)}>
                    <T c={`font-label-sm text-label-sm ${fg}`}>{k + 1}</T>
                  </P>
                );
              })}
            </ScrollView>
            <V c="flex-row items-center justify-between pt-1">
              <T c="font-label-sm text-label-sm text-on-surface-variant">{L('Timer keeps running if you leave', 'Le minuteur continue si vous quittez')}</T>
              <P onPress={() => setFinish(true)}>
                <T c="font-label-sm text-label-sm text-error">{L('Finish & submit', 'Terminer')} →</T>
              </P>
            </V>
          </V>
        </V>
      </Screen>

      <Dialog
        visible={exit}
        icon="warning"
        iconBg="bg-error-container"
        title={L('Leave this mock exam?', 'Quitter l’examen ?')}
        body={L(`Your answers up to question ${i + 1} are saved on this phone. The timer keeps running while you are away.`, `Vos réponses sont enregistrées. Le minuteur continue pendant votre absence.`)}
        cancel={L('Resume test', 'Reprendre')}
        confirm={L('Exit mock', 'Quitter')}
        confirmC="bg-error"
        onCancel={() => setExit(false)}
        onConfirm={() => {
          setExit(false);
          navigation.goBack();
        }}
      />
      <Dialog
        visible={finish}
        icon="task_alt"
        iconBg="bg-secondary-container"
        title={L('Submit Paper 1?', 'Rendre l’épreuve 1 ?')}
        body={L(
          `You have answered ${answered} of ${s.paper.length} questions. ${s.paper.length - answered} are unanswered and will score zero.`,
          `Vous avez répondu à ${answered} questions sur ${s.paper.length}. Les questions sans réponse valent zéro.`
        )}
        cancel={L('Review answers', 'Revoir')}
        confirm={L('Submit now', 'Rendre')}
        onCancel={() => setFinish(false)}
        onConfirm={() => {
          setFinish(false);
          submit();
        }}
      />
    </V>
  );
}


