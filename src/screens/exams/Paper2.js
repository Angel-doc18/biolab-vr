// Paper 2 practice: structured questions in the subject's layout (subjects.js):
// compulsory Section A questions, then Section B, where the student may choose
// some of the questions offered. Every question is worth 20 marks.
import { useEffect, useRef, useState } from 'react';
import { BackHandler, Image, Modal, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Ic, Input, P, T, V } from '../../ui/kit';
import { Cta, ErrorNote, Screen, Spinner, StackHeader, useToast } from '../../ui/chrome';
import DrawPad, { Drawing } from '../../ui/DrawPad';
import { CriterionRow, ModelAnswer, ScoreCard } from '../../ui/MarkReport';
import { Diagram } from '../../diagrams';
import { post } from '../../api/client';
import { useApp } from '../../state/store';
import { useL, useLang } from '../../i18n';
import { paper1Plan } from '../../lib/exam';
import { buildPaper2, p2ById, paper2Config, paper2Total, questionMarks } from '../../data/paper2';
import { subjectName } from '../../data/subjects';
import { pickAnswerPhoto } from '../../lib/photo';

// Biology keeps its original key so an unfinished paper survives the update.
const keyFor = (subject) => (subject === 'biology' ? 'bs:p2:session:v2' : `bs:p2:session:v2:${subject}`);
const SYMBOLS = {
  biology: ['→', '×', '÷', '°C', 'CO₂', 'O₂', 'H₂O', 'C₆H₁₂O₆', 'µm', 'm²'],
  humanbio: ['→', '×', '÷', '°C', 'CO₂', 'O₂', 'H₂O', 'C₆H₁₂O₆', 'µm', 'mmHg'],
  chemistry: ['→', '⇌', '₂', '₃', '₄', '⁺', '²⁺', '⁻', '²⁻', '°C', 'dm³', 'mol'],
  'a-chemistry': ['→', '⇌', '₂', '₃', '₄', '⁺', '²⁺', '⁻', '²⁻', 'Δ', '°C', 'mol', 'kJ'],
  physics: ['×', '÷', '²', '³', '⁻¹', '⁻²', '√', 'Δ', 'λ', 'Ω', '°', 'm/s²'],
};

function Rich({ text, c }) {
  return (
    <T c={c}>
      {text.split('**').map((s, i) => (
        <T key={i} c={c} style={i % 2 ? { fontWeight: '700' } : null}>
          {s}
        </T>
      ))}
    </T>
  );
}

function SelfMark({ part, value, onChange }) {
  return (
    <V c="gap-1.5">
      {part.scheme.map((s, i) => {
        const on = (value || []).includes(i);
        return (
          <P key={i} c={`flex-row items-start gap-2 p-2.5 rounded-lg ${on ? 'bg-secondary-container/40' : 'bg-surface-container-low'}`} scale={1} onPress={() => onChange(on ? value.filter((x) => x !== i) : [...(value || []), i])} accessibilityRole="checkbox" accessibilityState={{ checked: on }}>
            <V c={`w-5 h-5 rounded items-center justify-center mt-0.5 ${on ? 'bg-secondary' : 'border-2 border-outline-variant'}`}>{on && <Ic n="check" s={14} c="on-secondary" />}</V>
            <T c="font-body-sm text-body-sm text-on-surface flex-1">
              {s.point} [{s.marks}]
            </T>
          </P>
        );
      })}
    </V>
  );
}

const clock = (ms) => {
  const m = Math.max(0, Math.ceil(ms / 60000));
  return `${Math.floor(m / 60)}:${String(m % 60).padStart(2, '0')}`;
};

export default function Paper2({ navigation, route }) {
  const insets = useSafeAreaInsets();
  const { pro, recordExam, subject: current, user } = useApp();
  const L = useL();
  const lang = useLang();
  const subject = route.params?.subject || current;
  const P2 = paper2Config(subject);
  const TOTAL = paper2Total(subject);
  const KEY = keyFor(subject);
  // Section B with no choice (all of it compulsory) skips the choice page.
  const choosing = P2.b.answer < P2.b.offered;
  const title = `${subjectName(subject, lang)} ${L('Paper 2', 'épreuve 2')}`;
  const [s, setS] = useState(null); // { startedAt, a, b, chosen, answers, drawings, photos, index }
  const [now, setNow] = useState(Date.now());
  const [canvas, setCanvas] = useState(null);
  const [phase, setPhase] = useState('write'); // write | marking | results
  const [marks, setMarks] = useState({});
  const [self, setSelf] = useState({});
  const [error, setError] = useState(null);
  const [toast, showToast] = useToast();
  const sel = useRef({});
  const scroller = useRef(null);

  useEffect(() => {
    (async () => {
      try {
        const raw = await AsyncStorage.getItem(KEY);
        const saved = raw ? JSON.parse(raw) : null;
        if (saved && Date.now() - saved.startedAt < P2.minutes * 60000 * 2 && [...saved.a, ...saved.b].every((id) => p2ById(id))) return setS({ photos: {}, ...saved });
      } catch {
        // start fresh
      }
      const paper = buildPaper2(subject, paper1Plan(subject, user?.className).unitIds);
      setS({ startedAt: Date.now(), ...paper, chosen: choosing ? [] : paper.b, answers: {}, drawings: {}, photos: {}, index: 0 });
    })();
    const t = setInterval(() => setNow(Date.now()), 15000);
    const sub = BackHandler.addEventListener('hardwareBackPress', () => {
      save();
      return false;
    });
    return () => {
      clearInterval(t);
      sub.remove();
    };
  }, []);

  // Photos stay in memory only (they are large); text and drawings autosave.
  const save = (x = s) => x && AsyncStorage.setItem(KEY, JSON.stringify({ ...x, photos: {} })).catch(() => {});
  useEffect(() => {
    if (s && phase === 'write') {
      const t = setTimeout(() => save(s), 800);
      return () => clearTimeout(t);
    }
    return undefined;
  }, [s, phase]);

  if (!s) return <Screen header={<StackHeader title={title} />}><Spinner /></Screen>;

  // Pages: Section A questions, then the Section B choice (when there is one),
  // then the Section B questions being answered.
  const answered = [...s.a, ...s.chosen];
  const pages = [...s.a.map((id) => ({ id })), ...(choosing ? [{ choose: true }] : []), ...s.chosen.map((id) => ({ id }))];
  const page = pages[Math.min(s.index, pages.length - 1)];
  const go = (i) => {
    setS((x) => ({ ...x, index: i }));
    scroller.current?.scrollTo?.({ y: 0, animated: false });
  };
  const left = s.startedAt + P2.minutes * 60000 - now;
  const key = (id, label) => `${id}:${label}`;
  const setAnswer = (id, label, v) => setS((x) => ({ ...x, answers: { ...x.answers, [key(id, label)]: v } }));
  const insert = (id, label, sym) => {
    const k = key(id, label);
    const cur = s.answers[k] || '';
    const { start, end } = sel.current[k] || { start: cur.length, end: cur.length };
    setAnswer(id, label, cur.slice(0, start) + sym + cur.slice(end));
  };
  const partDone = (id, p) => (p.kind === 'drawing' ? !!(s.drawings[key(id, p.label)] || s.photos[key(id, p.label)]) : (s.answers[key(id, p.label)] || '').trim().length > 2);
  const toggleChoice = (id) =>
    setS((x) => {
      if (x.chosen.includes(id)) return { ...x, chosen: x.chosen.filter((c) => c !== id) };
      if (x.chosen.length >= P2.b.answer) return x;
      return { ...x, chosen: [...x.chosen, id] };
    });

  const submit = async () => {
    setError(null);
    if (!pro) {
      setPhase('results');
      return;
    }
    setPhase('marking');
    const out = {};
    try {
      for (const id of answered) {
        const qq = p2ById(id);
        const textParts = qq.parts.filter((p) => p.kind === 'text');
        const res = { parts: {} };
        if (textParts.some((p) => (s.answers[key(id, p.label)] || '').trim().length > 2)) {
          const r = await post(
            '/v1/ai/mark',
            {
              subject,
              question: `${qq.stem}\n\n${textParts.map((p) => `(${p.label}) ${p.prompt} [${p.marks}]`).join('\n')}`,
              markScheme: textParts.flatMap((p) => p.scheme.map((sc) => ({ point: `(${p.label}) ${sc.point}`, marks: sc.marks }))),
              maxMarks: textParts.reduce((a, p) => a + p.marks, 0),
              answerText: textParts.map((p) => `(${p.label}) ${(s.answers[key(id, p.label)] || '').trim() || '[no answer]'}`).join('\n\n'),
            },
            { timeout: 120000 }
          );
          let i = 0;
          for (const p of textParts) {
            const criteria = r.result.criteria.slice(i, i + p.scheme.length);
            i += p.scheme.length;
            res.parts[p.label] = { awarded: criteria.reduce((a, c) => a + c.awarded, 0), max: p.marks, criteria };
          }
          res.feedback = r.result.feedback;
          res.model = r.result.modelAnswer;
        } else {
          for (const p of textParts) res.parts[p.label] = { awarded: 0, max: p.marks, criteria: p.scheme.map((sc) => ({ point: sc.point, max: sc.marks, awarded: 0, comment: L('Not answered.', 'Pas de réponse.') })) };
        }
        for (const p of qq.parts.filter((pp) => pp.kind === 'drawing')) {
          const photo = s.photos[key(id, p.label)];
          if (photo) {
            const r = await post('/v1/ai/mark', { subject, question: `${qq.stem}\n\n(${p.label}) ${p.prompt}`, markScheme: p.scheme, maxMarks: p.marks, image: { mediaType: photo.mediaType, data: photo.base64 } }, { timeout: 120000 });
            res.parts[p.label] = { awarded: r.result.awarded, max: p.marks, criteria: r.result.criteria };
          } else {
            res.parts[p.label] = { self: true, max: p.marks };
          }
        }
        out[id] = res;
        setMarks({ ...out });
      }
      setPhase('results');
    } catch (e) {
      setError(e);
      setPhase(Object.keys(out).length ? 'results' : 'write');
    }
  };

  const scoreOf = (id) =>
    p2ById(id).parts.reduce((a, p) => {
      const m = marks[id]?.parts?.[p.label];
      if (m && !m.self) return a + m.awarded;
      const ticks = self[key(id, p.label)] || [];
      return a + ticks.reduce((b, i) => b + p.scheme[i].marks, 0);
    }, 0);

  const finish = async () => {
    const awarded = answered.reduce((a, id) => a + scoreOf(id), 0);
    const byUnit = {};
    for (const id of answered) {
      const qq = p2ById(id);
      byUnit[qq.unit] = byUnit[qq.unit] || [0, 0];
      byUnit[qq.unit][0] += scoreOf(id);
      byUnit[qq.unit][1] += questionMarks(qq);
    }
    const pct = Math.round((awarded / TOTAL) * 100);
    recordExam({ kind: 'p2', subject, score: Math.round(awarded * 10) / 10, total: TOTAL, pct, byUnit, secs: Math.round((Date.now() - s.startedAt) / 1000), marked: pro ? 'ai' : 'self' });
    await AsyncStorage.removeItem(KEY).catch(() => {});
    showToast(L('Paper 2 saved to your results', 'Épreuve 2 enregistrée'));
    setTimeout(() => navigation.navigate('Main', { screen: 'Exams' }), 700);
  };

  // The section a page belongs to: named sections (A Level Chemistry) or A and B.
  const sectionOf = (pg) => {
    if (!pg) return '';
    const named = P2.sections && !pg.choose && P2.sections[p2ById(pg.id)?.slot];
    if (named) return L(named.en, named.fr);
    return pg.choose || !s.a.includes(pg.id) ? L('Section B', 'Section B') : L('Section A', 'Section A');
  };

  const qLabel = (id) => {
    const ai = s.a.indexOf(id);
    if (ai >= 0) return `${L('Question', 'Question')} ${ai + 1}`;
    return `${L('Question', 'Question')} ${P2.a + 1 + s.b.indexOf(id)}`;
  };

  // ---------- results ----------
  if (phase !== 'write') {
    const awarded = answered.reduce((a, id) => a + scoreOf(id), 0);
    return (
      <V c="flex-1">
        <Screen bg="bg-surface" header={<StackHeader title={`${title}: ${L('marking', 'correction')}`} subtitle={pro ? L('Marked against the mark scheme', 'Corrigé selon le barème') : L('Tick the points your answer covers', 'Cochez les points couverts')} />}>
          <V c="pt-space-md pb-space-lg gap-space-md">
            {phase === 'marking' && (
              <V c="bg-surface-container-low rounded-xl p-space-md items-center gap-2">
                <Spinner c="py-2" />
                <T c="font-body-md text-body-md text-on-surface">
                  {L('Marking question', 'Correction de la question')} {Object.keys(marks).length + 1} {L('of', 'sur')} {answered.length}...
                </T>
              </V>
            )}
            <ErrorNote error={error} />
            {phase === 'results' && <ScoreCard awarded={awarded} max={TOTAL} L={L} />}
            {!pro && phase === 'results' && (
              <P c="flex-row items-center justify-between gap-space-sm py-1" onPress={() => navigation.navigate('Paywall', { reason: 'mark' })}>
                <T c="font-body-sm text-body-sm text-on-surface-variant flex-1">{L('With the full course, each answer is marked point by point against the scheme, with feedback.', 'Avec le cours complet, chaque réponse est corrigée point par point selon le barème, avec un commentaire.')}</T>
                <T c="font-label-md text-label-md text-primary-container" style={{ fontWeight: '700' }}>
                  {L('Prices', 'Prix')}
                </T>
              </P>
            )}
            {answered.map((id) => {
              const qq = p2ById(id);
              const m = marks[id];
              return (
                <V key={id} c="bg-surface-container-lowest rounded-xl p-space-md shadow-sm gap-space-sm">
                  <V c="flex-row items-start justify-between gap-space-sm">
                    <V c="flex-1">
                      <T c="font-label-md text-label-md text-on-surface-variant">{qLabel(id)}</T>
                      <T c="font-headline-sm text-headline-sm text-on-surface" style={{ fontWeight: '700' }}>
                        {qq.topic}
                      </T>
                    </V>
                    <T c="font-headline-sm text-headline-sm text-primary-container" style={{ fontWeight: '700' }}>
                      {scoreOf(id)} / {questionMarks(qq)}
                    </T>
                  </V>
                  {qq.parts.map((p) => {
                    const pm = m?.parts?.[p.label];
                    const ans = s.answers[key(id, p.label)];
                    const drawing = s.drawings[key(id, p.label)];
                    return (
                      <V key={p.label} c="gap-2 pt-space-xs">
                        <T c="font-label-lg text-label-lg text-on-surface">
                          ({p.label}) {p.title} [{p.marks}]
                        </T>
                        {p.kind === 'text' ? (
                          <V c="bg-surface-container-low rounded-lg p-2.5">
                            <T c="font-body-sm text-body-sm text-on-surface">{ans?.trim() || L('No answer', 'Pas de réponse')}</T>
                          </V>
                        ) : drawing ? (
                          <V c="items-center">
                            <Drawing data={drawing} size={180} />
                          </V>
                        ) : null}
                        {pm && !pm.self ? (
                          pm.criteria.map((c, i) => <CriterionRow key={i} c={{ ...c, point: c.point.replace(/^\([a-z]\)\s*/, '') }} n={i + 1} L={L} />)
                        ) : phase === 'results' ? (
                          <SelfMark part={p} value={self[key(id, p.label)]} onChange={(v) => setSelf((x) => ({ ...x, [key(id, p.label)]: v }))} />
                        ) : null}
                      </V>
                    );
                  })}
                  {!!m?.feedback && (
                    <V c="bg-surface-container-low rounded-lg p-3 gap-1">
                      <T c="font-label-md text-label-md text-on-surface">{L('Examiner’s comment', 'Commentaire')}</T>
                      <T c="font-body-sm text-body-sm text-on-surface">{m.feedback}</T>
                    </V>
                  )}
                  {!!m?.model && <ModelAnswer text={m.model} L={L} />}
                </V>
              );
            })}
            {phase === 'results' && <Cta variant="dark" icon={null} label={L('Save result', 'Enregistrer le résultat')} onPress={finish} />}
          </V>
        </Screen>
        {toast}
      </V>
    );
  }

  // ---------- Section B choice ----------
  const last = s.index >= pages.length - 1;
  const footer = (
    <V c="px-margin py-3 bg-surface-container-lowest flex-row items-center gap-space-sm" style={{ shadowColor: '#000', shadowOpacity: 0.08, shadowRadius: 16, elevation: 10 }}>
      <P c="h-12 px-space-md bg-surface-container rounded-xl items-center justify-center" onPress={() => (s.index > 0 ? go(s.index - 1) : (save(), navigation.goBack()))}>
        <T c="font-label-lg text-label-lg text-on-surface">{s.index > 0 ? L('Back', 'Retour') : L('Leave', 'Quitter')}</T>
      </P>
      {last ? (
        <P c="flex-1 h-12 bg-primary-container rounded-xl items-center justify-center" onPress={submit}>
          <T c="font-label-lg text-label-lg text-on-primary" style={{ fontWeight: '700' }}>
            {pro ? L('Submit for marking', 'Envoyer à corriger') : L('Submit and mark myself', 'Rendre et me corriger')}
          </T>
        </P>
      ) : (
        <P c="flex-1 h-12 bg-primary-container rounded-xl items-center justify-center" onPress={() => go(s.index + 1)}>
          <T c="font-label-lg text-label-lg text-on-primary" style={{ fontWeight: '700' }}>
            {page.choose
              ? L('Start Section B', 'Commencer la section B')
              : P2.sections
                ? sectionOf(pages[s.index + 1]) !== sectionOf(page)
                  ? L('Go to the next section', 'Section suivante')
                  : L('Next question', 'Question suivante')
                : s.index === P2.a - 1
                  ? L('Go to Section B', 'Aller à la section B')
                  : L('Next question', 'Question suivante')}
          </T>
        </P>
      )}
    </V>
  );

  const header = (
    <StackHeader
      title={title}
      subtitle={`${sectionOf(page)}, ${left > 0 ? `${clock(left)} ${L('left', 'restant')}` : L('time is up', 'temps écoulé')}`}
      subtitleColor={left < 10 * 60000 ? 'error' : 'on-surface-variant'}
      onBack={() => (save(), navigation.goBack())}
    />
  );

  if (page.choose) {
    return (
      <V c="flex-1">
        <Screen bg="bg-surface" header={header} footer={footer} scrollRef={scroller}>
          <V c="pt-space-md pb-space-md gap-space-md">
            <V c="gap-space-xs">
              <T c="font-headline-md text-headline-md text-on-surface" style={{ fontWeight: '700' }}>
                {L(`Section B: answer ${P2.b.answer} of the ${P2.b.offered} questions`, `Section B : répondez à ${P2.b.answer} des ${P2.b.offered} questions`)}
              </T>
              <T c="font-body-md text-body-md text-on-surface-variant">{L('Read them all, then choose the ones you can answer best. You can change your choice until you submit.', 'Lisez-les toutes, puis choisissez celles auxquelles vous répondez le mieux. Vous pouvez changer jusqu’à la remise.')}</T>
            </V>
            {s.b.map((id) => {
              const qq = p2ById(id);
              const on = s.chosen.includes(id);
              return (
                <P key={id} c={`p-space-md rounded-xl gap-space-xs ${on ? 'bg-surface-container-low border-2 border-primary-container' : 'bg-surface-container-lowest border border-outline-variant'}`} onPress={() => toggleChoice(id)} scale={0.99} accessibilityRole="checkbox" accessibilityState={{ checked: on }}>
                  <V c="flex-row items-center justify-between gap-space-sm">
                    <T c="font-label-md text-label-md text-on-surface-variant">
                      {qLabel(id)}, 20 {L('marks', 'points')}
                    </T>
                    <V c={`w-6 h-6 rounded items-center justify-center ${on ? 'bg-primary-container' : 'border-2 border-outline-variant'}`}>{on && <Ic n="check" s={16} c="on-primary" />}</V>
                  </V>
                  <T c="font-label-lg text-label-lg text-on-surface" style={{ fontWeight: '700' }}>
                    {qq.topic}
                  </T>
                  <T c="font-body-sm text-body-sm text-on-surface-variant">{qq.stem}</T>
                  {qq.parts.map((p) => (
                    <T key={p.label} c="font-body-sm text-body-sm text-on-surface-variant">
                      ({p.label}) {p.prompt} [{p.marks}]
                    </T>
                  ))}
                </P>
              );
            })}
            <T c="font-body-sm text-body-sm text-on-surface-variant">
              {s.chosen.length} {L('of', 'sur')} {P2.b.answer} {L('chosen', 'choisies')}
            </T>
          </V>
        </Screen>
        {toast}
      </V>
    );
  }

  // ---------- a question ----------
  const q = p2ById(page.id);
  return (
    <V c="flex-1">
      <Screen bg="bg-surface" keyboard header={header} footer={footer} scrollRef={scroller}>
        <V c="pt-space-md pb-space-md gap-space-md">
          <V c="flex-row items-center gap-1.5 flex-wrap">
            {pages.map((pg, i) => {
              const on = i === s.index;
              const complete = pg.id && p2ById(pg.id).parts.every((pp) => partDone(pg.id, pp));
              return (
                <P key={pg.id || 'choose'} c={`h-8 px-2.5 rounded-lg items-center justify-center ${on ? 'bg-primary-container' : complete ? 'bg-secondary-container' : 'bg-surface-container-lowest border border-outline-variant'}`} onPress={() => go(i)} accessibilityLabel={pg.choose ? 'Section B choice' : qLabel(pg.id)}>
                  <T c={`font-label-md text-label-md ${on ? 'text-on-primary' : 'text-on-surface'}`}>{pg.choose ? 'B' : qLabel(pg.id).split(' ')[1]}</T>
                </P>
              );
            })}
          </V>

          <V c="gap-space-xs">
            <V c="flex-row items-end justify-between gap-space-sm">
              <T c="font-headline-md text-headline-md text-on-surface flex-1" style={{ fontWeight: '700' }}>
                {qLabel(q.id)}
              </T>
              <T c="font-label-lg text-label-lg text-on-surface-variant">{questionMarks(q)} {L('marks', 'points')}</T>
            </V>
            <T c="font-body-lg text-body-lg text-on-surface" style={{ lineHeight: 24 }}>
              {q.stem}
            </T>
            {q.figure && (
              <V c="bg-surface-container-lowest rounded-xl p-space-sm mt-space-xs">
                <Diagram id={q.figure} />
              </V>
            )}
            {!!q.hint && <Rich text={q.hint} c="font-body-sm text-body-sm text-on-surface-variant" />}
          </V>

          {q.parts.map((p) => {
            const k = key(q.id, p.label);
            return (
              <V key={p.label} c="bg-surface-container-lowest p-space-md rounded-xl shadow-sm gap-space-sm">
                <V c="flex-row items-start justify-between gap-space-sm">
                  <T c="font-body-md text-body-md text-on-surface flex-1" style={{ lineHeight: 22 }}>
                    <T c="font-body-md text-body-md text-on-surface" style={{ fontWeight: '700' }}>
                      ({p.label}){' '}
                    </T>
                    {p.prompt}
                  </T>
                  <T c="font-label-md text-label-md text-on-surface-variant">[{p.marks}]</T>
                </V>
                {p.kind === 'text' ? (
                  <>
                    <Input
                      c="w-full bg-surface-container-low rounded-lg p-space-sm text-body-md"
                      style={{ minHeight: 110 }}
                      multiline
                      textAlignVertical="top"
                      placeholder={L('Your answer', 'Votre réponse')}
                      value={s.answers[k] || ''}
                      onChangeText={(t) => setAnswer(q.id, p.label, t)}
                      onSelectionChange={(e) => (sel.current[k] = e.nativeEvent.selection)}
                      maxLength={3000}
                    />
                    <ScrollView horizontal showsHorizontalScrollIndicator={false} keyboardShouldPersistTaps="always" contentContainerStyle={{ gap: 4, alignItems: 'center' }}>
                      {(SYMBOLS[subject] || SYMBOLS.biology).map((sym) => (
                        <P key={sym} c="bg-surface-container px-2.5 py-1 rounded" onPress={() => insert(q.id, p.label, sym)} accessibilityLabel={`Insert ${sym}`}>
                          <T c="text-on-surface" style={{ fontSize: 13, fontWeight: '600' }}>
                            {sym}
                          </T>
                        </P>
                      ))}
                    </ScrollView>
                  </>
                ) : (
                  <V c="gap-space-sm">
                    {s.drawings[k] || s.photos[k] ? (
                      <V c="flex-row gap-space-sm items-center">
                        <V c="w-16 h-20 bg-surface-container rounded overflow-hidden items-center justify-center">
                          {s.photos[k] ? <Image source={{ uri: s.photos[k].uri }} style={{ width: 64, height: 80 }} /> : <Drawing data={s.drawings[k]} size={64} />}
                        </V>
                        <T c="font-body-sm text-body-sm text-on-surface-variant flex-1">
                          {s.photos[k] ? (pro ? L('Photo of your drawing. It will be marked against the scheme.', 'Photo de votre dessin. Elle sera corrigée selon le barème.') : L('Photo of your drawing. You mark it yourself at the end.', 'Photo de votre dessin. Vous la corrigez à la fin.')) : L('Drawn on the canvas. You mark it yourself at the end.', 'Dessiné sur le canevas. Vous le corrigez à la fin.')}
                        </T>
                        <P
                          c="w-10 h-10 items-center justify-center"
                          onPress={() =>
                            setS((x) => {
                              const drawings = { ...x.drawings };
                              const photos = { ...x.photos };
                              delete drawings[k];
                              delete photos[k];
                              return { ...x, drawings, photos };
                            })
                          }
                          accessibilityLabel="Remove drawing"
                        >
                          <Ic n="delete_outline" s={20} c="outline" />
                        </P>
                      </V>
                    ) : (
                      <T c="font-body-sm text-body-sm text-on-surface-variant">{L('Draw it on paper and take a photo, or draw on the screen.', 'Dessinez sur papier et prenez une photo, ou dessinez à l’écran.')}</T>
                    )}
                    <V c="flex-row gap-space-sm">
                      <P
                        c="flex-1 h-11 flex-row items-center justify-center gap-space-xs bg-primary-container rounded-lg"
                        onPress={async () => {
                          try {
                            const photo = await pickAnswerPhoto('camera');
                            if (photo) setS((x) => ({ ...x, photos: { ...x.photos, [k]: photo } }));
                          } catch (e) {
                            setError(e);
                          }
                        }}
                      >
                        <Ic n="photo_camera" s={18} c="on-primary" />
                        <T c="font-label-md text-label-md text-on-primary">{L('Photo', 'Photo')}</T>
                      </P>
                      <P c="flex-1 h-11 flex-row items-center justify-center gap-space-xs bg-surface-container rounded-lg" onPress={() => setCanvas({ ...p, id: q.id })}>
                        <Ic n="draw" s={18} c="on-surface" />
                        <T c="font-label-md text-label-md text-on-surface">{L('Draw on screen', 'Dessiner')}</T>
                      </P>
                    </V>
                  </V>
                )}
              </V>
            );
          })}
          <ErrorNote error={error} />
        </V>
      </Screen>

      <Modal visible={!!canvas} animationType="slide" onRequestClose={() => setCanvas(null)}>
        {canvas && (
          <V c="flex-1 bg-surface-container-lowest" style={{ paddingTop: insets.top }}>
            <V c="h-14 px-margin flex-row items-center justify-between">
              <P c="w-11 h-11 items-center justify-center" onPress={() => setCanvas(null)} accessibilityLabel="Close">
                <Ic n="close" s={24} c="on-surface" />
              </P>
              <T c="font-headline-sm text-headline-sm text-on-surface flex-1 text-center" numberOfLines={1}>
                ({canvas.label}) {canvas.title}
              </T>
              <V c="w-11" />
            </V>
            <ScrollView contentContainerStyle={{ padding: 16, paddingBottom: insets.bottom + 24, gap: 12 }} keyboardShouldPersistTaps="handled">
              <T c="font-body-sm text-body-sm text-on-surface-variant">{canvas.prompt}</T>
              <DrawPad initial={s.drawings[key(canvas.id, canvas.label)]} onChange={(d) => setS((x) => ({ ...x, drawings: { ...x.drawings, [key(canvas.id, canvas.label)]: d } }))} L={L} />
              <Cta variant="dark" icon={null} label={L('Done', 'Terminé')} onPress={() => setCanvas(null)} />
            </ScrollView>
          </V>
        )}
      </Modal>
      {toast}
    </V>
  );
}
