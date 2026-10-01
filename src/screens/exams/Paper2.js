import { useEffect, useRef, useState } from 'react';
import { BackHandler, Image, Modal, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Ic, Input, P, T, V } from '../../ui/kit';
import { Cta, ErrorNote, Screen, Spinner, StackHeader, useToast } from '../../ui/chrome';
import DrawPad, { Drawing } from '../../ui/DrawPad';
import { CriterionRow, ModelAnswer, ScoreCard } from '../../ui/MarkReport';
import { AnimalCell } from '../../ui/art';
import { OsmosisCell } from '../../ui/labArt';
import { post } from '../../api/client';
import { useApp } from '../../state/store';
import { useL } from '../../i18n';
import { P2, PAPER2, p2ById, questionMarks } from '../../data/paper2';
import { unitById } from '../../data/units';
import { pickAnswerPhoto } from '../../lib/photo';

const KEY = 'bs:p2:session';
const SYMBOLS = ['Ψ', 'Ψs', 'Ψp', 'ΔΨ', '⇌', '→', '×', 'CO₂', 'O₂', 'H₂O', 'C₆H₁₂O₆'];
const shuffle = (a) => a.map((x) => [Math.random(), x]).sort((p, q) => p[0] - q[0]).map((p) => p[1]);

function Rich({ text, c }) {
  return (
    <T c={c}>
      {text.split('**').map((s, i) => (
        <T key={i} c={c} style={i % 2 ? { fontWeight: '700', color: '#001e31' } : null}>
          {s}
        </T>
      ))}
    </T>
  );
}

function Figure({ kind }) {
  if (kind === 'osmosis') {
    return (
      <V c="flex-row gap-space-sm">
        {[
          ['C', 0, 'Turgid epidermal cell'],
          ['D', 1, 'Plasmolysed cell'],
        ].map(([k, p, cap]) => (
          <V key={k} c="flex-1 bg-surface-container-lowest p-space-sm rounded-lg items-center shadow-sm">
            <V c="w-full h-28 rounded-lg bg-surface-container items-center justify-center mb-space-xs">
              <OsmosisCell p={p} size={96} />
              <V c="absolute bottom-1 right-1 bg-on-surface/80 px-1.5 py-0.5 rounded">
                <T c="text-surface" style={{ fontSize: 10, fontWeight: '700' }}>
                  ×400
                </T>
              </V>
            </V>
            <T c="font-label-md text-label-md text-on-surface">Cell {k}</T>
            <T c="font-label-sm text-label-sm text-on-surface-variant">{cap}</T>
          </V>
        ))}
      </V>
    );
  }
  if (kind === 'cell') return <V c="h-44 rounded-lg overflow-hidden"><AnimalCell /></V>;
  return null;
}

function SelfMark({ part, value, onChange, L }) {
  return (
    <V c="gap-2">
      {part.scheme.map((s, i) => {
        const on = (value || []).includes(i);
        return (
          <P key={i} c={`flex-row items-start gap-2 p-2.5 rounded-lg ${on ? 'bg-secondary-container/40' : 'bg-surface-container-low'}`} scale={1} onPress={() => onChange(on ? value.filter((x) => x !== i) : [...(value || []), i])}>
            <V c={`w-5 h-5 rounded-lg items-center justify-center mt-0.5 ${on ? 'bg-secondary' : 'bg-surface-container'}`}>{on && <Ic n="check" s={14} c="on-secondary" />}</V>
            <T c="font-body-sm text-body-sm text-on-surface flex-1">
              {s.point} <T c="font-body-sm text-body-sm text-primary">[{s.marks}]</T>
            </T>
          </P>
        );
      })}
    </V>
  );
}

export default function Paper2({ navigation }) {
  const insets = useSafeAreaInsets();
  const { pro, recordExam } = useApp();
  const L = useL();
  const [s, setS] = useState(null); // { startedAt, ids, answers, drawings, photos, index }
  const [now, setNow] = useState(Date.now());
  const [canvas, setCanvas] = useState(null);
  const [phase, setPhase] = useState('write'); // write | marking | results
  const [marks, setMarks] = useState({}); // qid -> { parts: {label: {awarded, max, criteria, feedback, model}}, awarded, max }
  const [self, setSelf] = useState({}); // `${qid}:${label}` -> [schemeIdx]
  const [error, setError] = useState(null);
  const [toast, showToast] = useToast();
  const inputRef = useRef(null);
  const sel = useRef({ start: 0, end: 0 });

  useEffect(() => {
    (async () => {
      try {
        const raw = await AsyncStorage.getItem(KEY);
        const saved = raw ? JSON.parse(raw) : null;
        if (saved && Date.now() - saved.startedAt < P2.minutes * 60000 * 2) return setS(saved);
      } catch {
        // start fresh
      }
      setS({ startedAt: Date.now(), ids: shuffle(PAPER2.map((q) => q.id)).slice(0, P2.questions), answers: {}, drawings: {}, photos: {}, index: 0 });
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

  // Photos are kept in memory only (they are large); text and drawings autosave.
  const save = (x = s) => x && AsyncStorage.setItem(KEY, JSON.stringify({ ...x, photos: {} })).catch(() => {});
  useEffect(() => {
    if (s && phase === 'write') {
      const t = setTimeout(() => save(s), 800);
      return () => clearTimeout(t);
    }
    return undefined;
  }, [s, phase]);

  if (!s) return <Screen header={<StackHeader title={L('Paper 2 structured exam', 'Épreuve 2 structurée')} />}><Spinner /></Screen>;

  const q = p2ById(s.ids[s.index]);
  const unit = unitById(q.unit);
  const leftMin = Math.max(0, Math.ceil((s.startedAt + P2.minutes * 60000 - now) / 60000));
  const k = (label) => `${q.id}:${label}`;
  const setAnswer = (label, v) => setS((x) => ({ ...x, answers: { ...x.answers, [k(label)]: v } }));
  const insert = (label, sym) => {
    const cur = s.answers[k(label)] || '';
    const { start, end } = sel.current[label] || { start: cur.length, end: cur.length };
    setAnswer(label, cur.slice(0, start) + sym + cur.slice(end));
  };
  const partDone = (qq, p) => (p.kind === 'drawing' ? !!(s.drawings[`${qq.id}:${p.label}`] || s.photos[`${qq.id}:${p.label}`]) : (s.answers[`${qq.id}:${p.label}`] || '').trim().length > 2);
  const totalMarks = s.ids.reduce((a, id) => a + questionMarks(p2ById(id)), 0);
  const doneMarks = s.ids.reduce((a, id) => a + p2ById(id).parts.filter((p) => partDone(p2ById(id), p)).reduce((b, p) => b + p.marks, 0), 0);

  const submit = async () => {
    setError(null);
    if (!pro) {
      setPhase('results');
      return;
    }
    setPhase('marking');
    const out = {};
    try {
      for (const id of s.ids) {
        const qq = p2ById(id);
        const textParts = qq.parts.filter((p) => p.kind === 'text');
        const answerText = textParts.map((p) => `(${p.label}) ${(s.answers[`${id}:${p.label}`] || '').trim() || '[no answer]'}`).join('\n\n');
        const res = { parts: {} };
        if (textParts.some((p) => (s.answers[`${id}:${p.label}`] || '').trim().length > 2)) {
          const r = await post(
            '/v1/ai/mark',
            {
              question: `${qq.stem}\n\n${textParts.map((p) => `(${p.label}) ${p.prompt} [${p.marks}]`).join('\n')}`,
              markScheme: textParts.flatMap((p) => p.scheme.map((sc) => ({ point: `(${p.label}) ${sc.point}`, marks: sc.marks }))),
              maxMarks: textParts.reduce((a, p) => a + p.marks, 0),
              answerText,
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
          const photo = s.photos[`${id}:${p.label}`];
          if (photo) {
            const r = await post('/v1/ai/mark', { question: `${qq.stem}\n\n(${p.label}) ${p.prompt}`, markScheme: p.scheme, maxMarks: p.marks, image: { mediaType: photo.mediaType, data: photo.base64 } }, { timeout: 120000 });
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

  const scoreOf = (id) => {
    const qq = p2ById(id);
    return qq.parts.reduce((a, p) => {
      const m = marks[id]?.parts?.[p.label];
      if (m && !m.self) return a + m.awarded;
      const ticks = self[`${id}:${p.label}`] || [];
      return a + ticks.reduce((b, i) => b + p.scheme[i].marks, 0);
    }, 0);
  };

  const finish = async () => {
    const awarded = s.ids.reduce((a, id) => a + scoreOf(id), 0);
    const byUnit = {};
    for (const id of s.ids) {
      const qq = p2ById(id);
      byUnit[qq.unit] = byUnit[qq.unit] || [0, 0];
      byUnit[qq.unit][0] += scoreOf(id);
      byUnit[qq.unit][1] += questionMarks(qq);
    }
    const pct = Math.round((awarded / totalMarks) * 100);
    recordExam({ kind: 'p2', score: Math.round(awarded * 10) / 10, total: totalMarks, pct, byUnit, secs: Math.round((Date.now() - s.startedAt) / 1000), marked: pro ? 'ai' : 'self' });
    await AsyncStorage.removeItem(KEY).catch(() => {});
    showToast(L('Paper 2 saved to your results', 'Épreuve 2 enregistrée'));
    setTimeout(() => navigation.navigate('Main', { screen: 'Exams' }), 700);
  };

  // ---------- results ----------
  if (phase !== 'write') {
    const awarded = s.ids.reduce((a, id) => a + scoreOf(id), 0);
    return (
      <V c="flex-1">
        <Screen bg="bg-surface" header={<StackHeader title={L('Paper 2 marking', 'Correction épreuve 2')} subtitle={pro ? L('Marked by Dr. Nkwenti (AI)', 'Corrigé par le Dr Nkwenti (IA)') : L('Self-marked against the scheme', 'Auto-correction avec le barème')} logo />}>
          <V c="pt-space-md pb-space-lg gap-space-md">
            {phase === 'marking' && (
              <V c="bg-surface-container-low rounded-xl p-space-md items-center gap-2">
                <Spinner c="py-2" />
                <T c="font-body-md text-body-md text-on-surface">
                  {L('Marking question', 'Correction de la question')} {Object.keys(marks).length + 1} {L('of', 'sur')} {s.ids.length}...
                </T>
              </V>
            )}
            <ErrorNote error={error} />
            {phase === 'results' && <ScoreCard awarded={awarded} max={totalMarks} L={L} />}
            {!pro && phase === 'results' && (
              <V c="bg-surface-container-low rounded-xl p-space-md gap-2">
                <T c="font-body-md text-body-md text-on-surface">{L('Tick each mark scheme point your answer covers to see your score.', 'Cochez chaque point du barème couvert par votre réponse.')}</T>
                <P c="flex-row items-center gap-1" onPress={() => navigation.navigate('Paywall', { reason: 'mark' })}>
                  <Ic n="workspace_premium" s={16} c="tertiary" />
                  <T c="font-label-md text-label-md text-primary">{L('Get examiner-style AI marking with Premium', 'Correction IA avec Premium')}</T>
                </P>
              </V>
            )}
            {s.ids.map((id, qi) => {
              const qq = p2ById(id);
              const m = marks[id];
              return (
                <V key={id} c="bg-surface-container-lowest rounded-xl p-space-md shadow-sm gap-space-sm">
                  <V c="flex-row items-center justify-between">
                    <V c="bg-primary px-2 py-0.5 rounded-full">
                      <T c="font-label-sm text-label-sm text-on-primary">
                        Q{qi + 1} · {qq.topic}
                      </T>
                    </V>
                    <T c="font-label-md text-label-md text-primary">
                      {scoreOf(id).toFixed(1)} / {questionMarks(qq)}
                    </T>
                  </V>
                  {qq.parts.map((p) => {
                    const pm = m?.parts?.[p.label];
                    const ans = s.answers[`${id}:${p.label}`];
                    const drawing = s.drawings[`${id}:${p.label}`];
                    return (
                      <V key={p.label} c="gap-2">
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
                        {pm && !pm.self ? pm.criteria.map((c, i) => <CriterionRow key={i} c={{ ...c, point: c.point.replace(/^\([a-z]\)\s*/, '') }} n={i + 1} L={L} />) : phase === 'results' ? <SelfMark part={p} value={self[`${id}:${p.label}`]} onChange={(v) => setSelf((x) => ({ ...x, [`${id}:${p.label}`]: v }))} L={L} /> : null}
                      </V>
                    );
                  })}
                  {!!m?.feedback && (
                    <V c="bg-surface-container rounded-lg p-3 gap-1">
                      <T c="font-label-md text-label-md text-primary">{L('Examiner feedback', 'Commentaire')}</T>
                      <T c="font-body-sm text-body-sm text-on-surface">{m.feedback}</T>
                    </V>
                  )}
                  {!!m?.model && <ModelAnswer text={m.model} L={L} />}
                </V>
              );
            })}
            {phase === 'results' && <Cta label={L('Save result', 'Enregistrer le résultat')} icon="task_alt" onPress={finish} />}
          </V>
        </Screen>
        {toast}
      </V>
    );
  }

  // ---------- writing ----------
  return (
    <V c="flex-1">
      <Screen
        bg="bg-surface"
        keyboard
        header={<StackHeader title={L('Paper 2 structured exam', 'Épreuve 2 structurée')} subtitle={L('Practice paper', 'Épreuve d’entraînement')} logo onBack={() => (save(), navigation.goBack())} />}
        footer={
          <V c="px-margin py-3 bg-surface-container-lowest flex-row items-center gap-space-sm" style={{ shadowColor: '#000', shadowOpacity: 0.08, shadowRadius: 16, elevation: 10 }}>
            <P
              c="flex-1 h-12 bg-surface-container rounded-xl flex-row items-center justify-center gap-space-xs"
              onPress={() => {
                save();
                showToast(L('Draft saved on this phone', 'Brouillon enregistré'));
              }}
            >
              <Ic n="save" s={18} c="primary" />
              <T c="font-label-lg text-label-lg text-primary">{L('Save draft', 'Enregistrer')}</T>
            </P>
            {s.index < s.ids.length - 1 ? (
              <P c="h-12 bg-primary rounded-xl flex-row items-center justify-center gap-space-xs shadow-md" style={{ flex: 1.4 }} onPress={() => setS((x) => ({ ...x, index: x.index + 1 }))}>
                <T c="font-label-lg text-label-lg text-on-primary">
                  {L('Next question', 'Question suivante')} (Q{s.index + 2})
                </T>
                <Ic n="arrow_forward" s={18} c="on-primary" />
              </P>
            ) : (
              <P c="h-12 bg-secondary rounded-xl flex-row items-center justify-center gap-space-xs shadow-md" style={{ flex: 1.4 }} onPress={submit}>
                <T c="font-label-lg text-label-lg text-on-secondary">{pro ? L('Submit for marking', 'Envoyer à corriger') : L('Submit and self-mark', 'Rendre et auto-corriger')}</T>
                <Ic n="task_alt" s={18} c="on-secondary" />
              </P>
            )}
          </V>
        }
      >
        <V c="pt-space-md pb-space-md">
          <V c="flex-row items-center justify-between bg-surface-container-high rounded-xl p-space-sm mb-space-md shadow-sm">
            <V c="flex-row items-center gap-space-xs">
              <Ic n="assignment" s={20} c="primary" fill />
              <V>
                <T c="font-label-sm text-label-sm text-primary tracking-wider uppercase">GCE O-Level · Paper 2</T>
                <T c="font-headline-sm text-headline-sm text-on-surface">{L('Section A (structured)', 'Section A (structurée)')}</T>
              </V>
            </V>
            <V c="flex-row items-center gap-space-xs bg-surface-container-lowest px-space-sm py-1 rounded-full shadow-sm">
              <Ic n="schedule" s={16} c={leftMin < 10 ? 'error' : 'secondary'} />
              <T c={`font-label-md text-label-md ${leftMin < 10 ? 'text-error' : 'text-on-surface'}`}>{leftMin > 0 ? `${leftMin} min ${L('left', 'restantes')}` : L('Time is up', 'Temps écoulé')}</T>
            </V>
          </V>

          <V c="flex-row items-center justify-between bg-surface-container-lowest p-space-md rounded-xl shadow-sm mb-space-md">
            <V c="flex-1 pr-2">
              <V c="flex-row items-center gap-space-xs mb-1">
                <V c="bg-primary px-2 py-0.5 rounded-full">
                  <T c="font-label-sm text-label-sm text-on-primary">
                    Q{s.index + 1} {L('of', 'sur')} {s.ids.length}
                  </T>
                </V>
                <T c="font-label-md text-label-md text-on-surface-variant flex-1" style={{ fontWeight: '500' }} numberOfLines={1}>
                  {q.topic}
                </T>
              </V>
              <T c="font-headline-md text-headline-md text-on-surface">{L('Unit', 'Unité')} {unit.n}: {unit.short}</T>
            </V>
            <V c="bg-surface-container px-space-md py-space-xs rounded-xl items-end">
              <T c="font-label-sm text-label-sm text-on-surface-variant uppercase">{L('Weight', 'Barème')}</T>
              <T c="font-headline-lg text-headline-lg text-primary">
                {questionMarks(q)}
                <T c="font-label-md text-label-md text-on-surface-variant"> {L('marks', 'pts')}</T>
              </T>
            </V>
          </V>

          <V c="bg-surface-container-lowest p-space-md rounded-xl shadow-sm mb-space-md">
            <V c="flex-row items-start gap-space-xs mb-space-sm">
              <Ic n="description" s={20} c="primary" style={{ marginTop: 2 }} />
              <T c="font-body-lg text-body-lg text-on-surface flex-1" style={{ fontWeight: '500', lineHeight: 24 }}>
                {q.stem}
              </T>
            </V>
            {q.figure && (
              <V c="bg-surface-container-low rounded-xl p-space-md mt-space-sm gap-space-sm">
                <V c="flex-row items-center justify-between">
                  <T c="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant">{L('Figure 1', 'Figure 1')}</T>
                  <V c="bg-secondary-container px-2 py-0.5 rounded-full flex-row items-center gap-1">
                    <Ic n="view_in_ar" s={14} c="on-secondary-container" />
                    <T c="font-label-sm text-label-sm text-on-secondary-container">BioSpatial</T>
                  </V>
                </V>
                <Figure kind={q.figure} />
              </V>
            )}
          </V>

          <V c="bg-surface-variant p-space-md rounded-xl mb-space-md flex-row gap-space-sm items-start shadow-sm">
            <Ic n="verified" s={22} c="primary" fill style={{ marginTop: 2 }} />
            <V c="flex-1">
              <T c="font-label-sm text-label-sm uppercase text-primary tracking-wide mb-0.5">{L('Examiner hint', 'Conseil de l’examinateur')}</T>
              <Rich text={q.hint} c="font-body-md text-body-md text-on-surface-variant" />
            </V>
          </V>

          {q.parts.map((p) => (
            <V key={p.label} c="bg-surface-container-lowest p-space-md rounded-xl shadow-sm mb-space-md">
              <V c="flex-row items-center justify-between mb-space-xs">
                <V c="flex-row items-center gap-space-xs flex-1">
                  <V c="w-6 h-6 rounded-full bg-primary items-center justify-center">
                    <T c="font-label-md text-label-md text-on-primary">{p.label}</T>
                  </V>
                  <T c="font-headline-sm text-headline-sm text-on-surface flex-1" numberOfLines={1}>
                    {p.title}
                  </T>
                </V>
                <V c="bg-surface-container px-2 py-0.5 rounded">
                  <T c="font-label-sm text-label-sm text-primary">
                    [{p.marks} {p.marks === 1 ? L('mark', 'point') : L('marks', 'points')}]
                  </T>
                </V>
              </V>
              <T c="font-body-md text-body-md text-on-surface-variant mb-space-sm" style={{ lineHeight: 21 }}>
                {p.prompt}
              </T>
              {p.kind === 'text' ? (
                <>
                  <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ gap: 4, alignItems: 'center', paddingBottom: 4 }}>
                    <T c="font-label-sm text-label-sm text-on-surface-variant mr-1">{L('Insert', 'Insérer')}:</T>
                    {SYMBOLS.map((sym) => (
                      <P key={sym} c="bg-surface-container-high px-2.5 py-1 rounded shadow-sm" onPress={() => insert(p.label, sym)}>
                        <T c="text-primary" style={{ fontSize: 13, fontWeight: '700' }}>
                          {sym}
                        </T>
                      </P>
                    ))}
                  </ScrollView>
                  <Input
                    ref={inputRef}
                    c="w-full bg-surface-container-low rounded-lg p-space-sm text-body-md mt-1"
                    style={{ minHeight: 110 }}
                    multiline
                    textAlignVertical="top"
                    placeholder={L('Type your answer here...', 'Tapez votre réponse ici...')}
                    value={s.answers[k(p.label)] || ''}
                    onChangeText={(t) => setAnswer(p.label, t)}
                    onSelectionChange={(e) => (sel.current[p.label] = e.nativeEvent.selection)}
                    maxLength={2000}
                  />
                  <V c="flex-row items-center justify-between mt-space-xs px-1">
                    <V c="flex-row items-center gap-1">
                      <Ic n="cloud_done" s={14} c="secondary" />
                      <T c="font-label-sm text-label-sm text-secondary" style={{ fontWeight: '500' }}>
                        {L('Autosaved on this phone', 'Enregistré automatiquement')}
                      </T>
                    </V>
                    <T c="font-label-sm text-label-sm text-on-surface-variant" style={{ fontWeight: '500' }}>
                      {(s.answers[k(p.label)] || '').trim().split(/\s+/).filter(Boolean).length} {L('words', 'mots')}
                    </T>
                  </V>
                </>
              ) : (
                <V c="bg-surface-container-low p-space-sm rounded-xl">
                  {s.drawings[k(p.label)] || s.photos[k(p.label)] ? (
                    <V c="bg-surface-container-lowest rounded-lg p-space-sm flex-row gap-space-sm items-center shadow-sm">
                      <V c="w-16 h-20 bg-surface-container rounded overflow-hidden items-center justify-center">
                        {s.photos[k(p.label)] ? <Image source={{ uri: s.photos[k(p.label)].uri }} style={{ width: 64, height: 80 }} /> : <Drawing data={s.drawings[k(p.label)]} size={64} />}
                      </V>
                      <V c="flex-1">
                        <T c="font-label-lg text-label-lg text-on-surface">{s.photos[k(p.label)] ? L('Photo of your drawing', 'Photo du dessin') : L('Canvas drawing', 'Dessin')}</T>
                        <T c="font-label-sm text-label-sm text-on-surface-variant">{s.photos[k(p.label)] ? L('Marked by AI with Premium', 'Corrigé par IA (Premium)') : L('Self-marked with the scheme', 'Auto-corrigé')}</T>
                      </V>
                      <P
                        c="p-1 rounded"
                        onPress={() =>
                          setS((x) => {
                            const drawings = { ...x.drawings };
                            const photos = { ...x.photos };
                            delete drawings[k(p.label)];
                            delete photos[k(p.label)];
                            return { ...x, drawings, photos };
                          })
                        }
                        accessibilityLabel="Remove"
                      >
                        <Ic n="delete_outline" s={20} c="outline" />
                      </P>
                    </V>
                  ) : (
                    <T c="font-body-sm text-body-sm text-on-surface-variant py-2 text-center">{L('Draw on the canvas, or draw on paper and take a photo.', 'Dessinez sur le canevas ou photographiez votre dessin.')}</T>
                  )}
                  <V c="flex-row gap-space-sm mt-space-sm">
                    <P
                      c="flex-1 flex-row items-center justify-center gap-space-xs bg-surface-container-lowest py-2.5 rounded-lg shadow-sm"
                      onPress={async () => {
                        try {
                          const photo = await pickAnswerPhoto('camera');
                          if (photo) setS((x) => ({ ...x, photos: { ...x.photos, [k(p.label)]: photo } }));
                        } catch (e) {
                          setError(e);
                        }
                      }}
                    >
                      <Ic n="photo_camera" s={18} c="primary" />
                      <T c="font-label-md text-label-md text-primary">{L('Take photo', 'Photo')}</T>
                    </P>
                    <P c="flex-1 flex-row items-center justify-center gap-space-xs bg-primary py-2.5 rounded-lg shadow-sm" onPress={() => setCanvas(p)}>
                      <Ic n="draw" s={18} c="on-primary" />
                      <T c="font-label-md text-label-md text-on-primary">{L('Open canvas', 'Canevas')}</T>
                    </P>
                  </V>
                </V>
              )}
            </V>
          ))}
          <ErrorNote error={error} c="mb-space-md" />

          <V c="bg-surface-container-low p-space-sm rounded-xl flex-row items-center justify-between">
            <V c="flex-row items-center gap-space-xs">
              <T c="font-label-sm text-label-sm text-on-surface-variant uppercase">{L('Progress', 'Progression')}:</T>
              {s.ids.map((id, i) => {
                const qq = p2ById(id);
                const complete = qq.parts.every((pp) => partDone(qq, pp));
                return (
                  <P key={id} c={`w-7 h-7 rounded-lg items-center justify-center ${i === s.index ? 'bg-primary shadow-sm' : complete ? 'bg-secondary' : 'bg-surface-container-lowest'}`} onPress={() => setS((x) => ({ ...x, index: i }))}>
                    <T c={`font-label-sm text-label-sm ${i === s.index || complete ? 'text-on-primary' : 'text-on-surface'}`}>{i + 1}</T>
                  </P>
                );
              })}
            </V>
            <T c="font-label-sm text-label-sm text-primary">
              {doneMarks} / {totalMarks} {L('marks attempted', 'points tentés')}
            </T>
          </V>
        </V>
      </Screen>

      <Modal visible={!!canvas} animationType="slide" onRequestClose={() => setCanvas(null)}>
        {canvas && (
          <V c="flex-1 bg-surface-container-lowest" style={{ paddingTop: insets.top }}>
            <V c="h-14 px-margin flex-row items-center justify-between">
              <P c="w-11 h-11 items-center justify-center" onPress={() => setCanvas(null)} accessibilityLabel="Close">
                <Ic n="close" s={24} c="on-surface" />
              </P>
              <T c="font-headline-sm text-headline-sm text-on-surface">({canvas.label}) {canvas.title}</T>
              <V c="w-11" />
            </V>
            <ScrollView contentContainerStyle={{ padding: 16, paddingBottom: insets.bottom + 24, gap: 12 }} keyboardShouldPersistTaps="handled">
              <T c="font-body-sm text-body-sm text-on-surface-variant">{canvas.prompt}</T>
              <DrawPad initial={s.drawings[k(canvas.label)]} onChange={(d) => setS((x) => ({ ...x, drawings: { ...x.drawings, [k(canvas.label)]: d } }))} L={L} />
              <Cta label={L('Done', 'Terminé')} icon="check" onPress={() => setCanvas(null)} />
            </ScrollView>
          </V>
        )}
      </Modal>
      {toast}
    </V>
  );
}
