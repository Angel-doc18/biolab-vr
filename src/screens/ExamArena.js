import { useEffect, useMemo, useRef, useState } from 'react';
import { View } from 'react-native';
import { C, S, R, SH, alpha } from '../theme';
import { Btn, Icon, Row, T } from '../components/ui';
import { Card, Pill, Screen } from '../components/chrome';
import { LETTERS, shuffled } from '../components/quiz';
import { questionBank, unitById, units } from '../data/units';
import { useStore } from '../store/store';

const N = 20;
const DURATION = 15 * 60;
const pad = (n) => String(n).padStart(2, '0');

function newPaper() {
  const pool = [...questionBank];
  for (let i = pool.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [pool[i], pool[j]] = [pool[j], pool[i]];
  }
  return { id: Date.now(), items: pool.slice(0, N) };
}

// Indicative Cameroon GCE O-Level grade bands.
function grade(pct) {
  if (pct >= 75) return ['A', 'Distinction'];
  if (pct >= 65) return ['B', 'Very Good'];
  if (pct >= 50) return ['C', 'Credit'];
  if (pct >= 40) return ['D', 'Pass'];
  if (pct >= 30) return ['E', 'Weak Pass'];
  return ['U', 'Ungraded'];
}

export default function ExamArena({ openUnit }) {
  const { state, recordExam } = useStore();
  const [paper, setPaper] = useState(newPaper);
  const [qi, setQi] = useState(0);
  const [picks, setPicks] = useState({}); // qi -> authored option index
  const [flags, setFlags] = useState({});
  const [times, setTimes] = useState({}); // qi -> seconds spent before answering
  const [left, setLeft] = useState(DURATION);
  const [submitted, setSubmitted] = useState(false);
  const [review, setReview] = useState(null); // list of question indexes being reviewed
  const shownAt = useRef(Date.now());
  const scroll = useRef(null);

  useEffect(() => {
    if (submitted) return;
    const t = setInterval(() => setLeft((s) => Math.max(0, s - 1)), 1000);
    return () => clearInterval(t);
  }, [submitted, paper.id]);
  useEffect(() => {
    if (left === 0 && !submitted) submit();
  }, [left]);
  useEffect(() => {
    shownAt.current = Date.now();
  }, [qi, paper.id]);

  const items = paper.items;
  const q = items[qi];
  const unit = unitById(q.unit);
  const order = useMemo(() => shuffled(q.a, `exam:${paper.id}:${qi}`), [paper.id, qi]);
  const pick = picks[qi];
  const answered = Object.keys(picks).length;
  const correct = Object.entries(picks).filter(([, p]) => p === 0).length;
  const pct = answered ? Math.round((correct / answered) * 100) : 0;
  const finalPct = Math.round((correct / N) * 100);
  const [g, gLabel] = grade(submitted ? finalPct : pct);
  const flagged = Object.values(flags).filter(Boolean).length;
  const spent = Object.values(times);
  const avg = spent.length ? Math.round(spent.reduce((a, b) => a + b, 0) / spent.length) : 0;
  const best = Math.max(0, ...state.exams.map((e) => e.pct));

  const choose = (authored) => {
    if (pick != null || submitted) return;
    setPicks((p) => ({ ...p, [qi]: authored }));
    setTimes((t) => ({ ...t, [qi]: Math.round((Date.now() - shownAt.current) / 1000) }));
  };
  const go = (d) => {
    if (review) {
      const pos = review.indexOf(qi) + d;
      if (pos >= 0 && pos < review.length) setQi(review[pos]);
      return;
    }
    setQi((i) => Math.min(N - 1, Math.max(0, i + d)));
  };
  function submit() {
    if (submitted) return;
    setSubmitted(true);
    const c = Object.values(picks).filter((p) => p === 0).length;
    recordExam({ pct: Math.round((c / N) * 100), correct: c, total: N });
  }
  const restart = () => {
    setPaper(newPaper());
    setQi(0);
    setPicks({});
    setFlags({});
    setTimes({});
    setLeft(DURATION);
    setSubmitted(false);
    setReview(null);
    scroll.current?.scrollTo({ y: 0, animated: true });
  };
  const reviewIncorrect = () => {
    const wrong = items.map((_, i) => i).filter((i) => picks[i] !== 0);
    if (!wrong.length) return;
    setReview(wrong);
    setQi(wrong[0]);
    scroll.current?.scrollTo({ y: 0, animated: true });
  };

  // Per-unit performance for the units that appeared in this paper.
  const byUnit = units
    .map((u) => {
      const idx = items.map((it, i) => (it.unit === u.id ? i : -1)).filter((i) => i >= 0);
      const done = idx.filter((i) => picks[i] != null);
      if (!done.length) return null;
      return { u, pct: Math.round((done.filter((i) => picks[i] === 0).length / done.length) * 100) };
    })
    .filter(Boolean);

  const passes = avg ? Math.floor(DURATION / N / avg) - 1 : 0;
  const levelLabel = state.level === 'A' ? 'GCE A-Level Bio' : 'GCE O-Level Bio';
  const showReveal = pick != null || submitted;

  return (
    <Screen scrollRef={scroll} bottomPad={S.md}>
      {/* Arena Header & Session Briefing */}
      <View style={{ gap: S.sm, paddingTop: S.xs }}>
        <Pill upper px={10} py={4} dot="secondary" style={{ gap: 6 }}>Cameroon GCE Board Official Format Mock Exam</Pill>
        <Row style={{ justifyContent: 'space-between', alignItems: 'flex-end', gap: 8 }}>
          <T v="headline-md" style={{ flex: 1 }}>Paper 1: Multiple Choice Master Exam</T>
          <Pill bg={alpha('secondary-container', 0.3)} c="on-secondary-container" style={{ marginBottom: 4 }}>{levelLabel}</Pill>
        </Row>
        <Card radius={R['2xl']} style={{ flexDirection: 'row', alignItems: 'center', gap: S.md }}>
          <View style={{ width: 48, height: 48, borderRadius: R.xl, backgroundColor: alpha('secondary-container', 0.3), alignItems: 'center', justifyContent: 'center' }}>
            <Icon name="timer" size={24} color={C.secondary} />
          </View>
          <View style={{ flex: 1, minWidth: 0 }}>
            <Row style={{ gap: 8 }}>
              <T v="title-md" numberOfLines={1} style={{ flexShrink: 1 }}>20 Random Syllabus Questions</T>
              <Pill px={6}>15 mins</Pill>
            </Row>
            <T v="body-sm" c="on-surface-variant" numberOfLines={1}>Pulled dynamically across all {units.length} core syllabus units</T>
          </View>
        </Card>
      </View>

      {/* Active Timed Question Card */}
      <Card radius={R['2xl']} style={{ gap: S.md }}>
        <View style={{ gap: S.xs }}>
          <Row style={{ justifyContent: 'space-between', gap: 8, flexWrap: 'wrap' }}>
            <Row style={{ gap: 8, flexShrink: 1 }}>
              <T v="title-md">Question {pad(qi + 1)} of {N}</T>
              <Pill bg="surface-container-low" w={600} style={{ flexShrink: 1 }}>Unit {unit.n}: {unit.short.split(/,| &/)[0]}</Pill>
            </Row>
            <Row style={{ gap: 4, paddingHorizontal: 12, paddingVertical: 4, borderRadius: R.full, backgroundColor: C['primary-fixed'], boxShadow: SH.sm }}>
              <Icon name="schedule" size={16} color={C.primary} />
              <T v="label-md" c="on-primary-fixed" w={600}>
                {submitted ? 'Submitted' : `${pad(Math.floor(left / 60))}:${pad(left % 60)} Remaining`}
              </T>
            </Row>
          </Row>
          <View style={{ width: '100%', height: 8, borderRadius: R.full, backgroundColor: C['surface-container-high'], overflow: 'hidden' }}>
            <View style={{ width: `${((qi + 1) / N) * 100}%`, height: '100%', borderRadius: R.full, backgroundColor: C['primary-container'] }} />
          </View>
        </View>

        <View style={{ gap: S.xs }}>
          <T v="label-sm" c="secondary" upper>
            {review ? `Reviewing incorrect · ${review.indexOf(qi) + 1} of ${review.length}` : `GCE Problem Stem #${q.stem}`}
          </T>
          <T v="headline-sm" leading="snug">{q.q}</T>
        </View>

        <View style={{ gap: S.sm }}>
          {order.map((authored, pos) => {
            const isPick = pick === authored;
            const isRight = authored === 0;
            const reveal = showReveal && (isRight || isPick);
            const good = reveal && isRight;
            const bad = reveal && isPick && !isRight;
            return (
              <Btn
                key={pos}
                onPress={() => choose(authored)}
                disabled={showReveal}
                style={[
                  { width: '100%', padding: S.md, borderRadius: R.xl, flexDirection: 'row', alignItems: 'flex-start', gap: S.md },
                  good ? { backgroundColor: alpha('secondary-container', 0.2), boxShadow: SH.sm } : bad ? { backgroundColor: alpha('error-container', 0.5) } : { backgroundColor: C['surface-container-low'] },
                ]}
              >
                <View style={{ width: 32, height: 32, borderRadius: R.lg, alignItems: 'center', justifyContent: 'center', backgroundColor: good ? C['primary-container'] : bad ? C.error : C['surface-container-highest'], boxShadow: good ? SH.sm : undefined }}>
                  <T v="title-md" c={good || bad ? 'on-primary' : 'on-surface-variant'}>{LETTERS[pos]}</T>
                </View>
                <View style={{ flex: 1, paddingTop: 4, gap: 4 }}>
                  <T v={good ? 'title-md' : 'body-md'} size={good ? 15 : undefined} w={good ? 600 : undefined}>{q.a[authored]}</T>
                  {good && isPick && (
                    <Pill bg="secondary-container" c="on-secondary-container">+1 Mark</Pill>
                  )}
                </View>
                {good ? (
                  <View style={{ width: 28, height: 28, borderRadius: 14, backgroundColor: C.secondary, alignItems: 'center', justifyContent: 'center', marginTop: 2, boxShadow: SH.sm }}>
                    <Icon name="check" size={18} color={C['on-secondary']} />
                  </View>
                ) : bad ? (
                  <View style={{ width: 28, height: 28, borderRadius: 14, backgroundColor: C.error, alignItems: 'center', justifyContent: 'center', marginTop: 2 }}>
                    <Icon name="close" size={18} color={C['on-error']} />
                  </View>
                ) : (
                  <View style={{ width: 24, height: 24, borderRadius: 12, backgroundColor: C['surface-container-high'], alignItems: 'center', justifyContent: 'center', opacity: 0.4, marginTop: 4 }}>
                    <Icon name="radio_button_unchecked" size={16} color={C['on-surface-variant']} />
                  </View>
                )}
              </Btn>
            );
          })}
        </View>

        {showReveal && (
          <View style={{ padding: S.md, borderRadius: R.xl, backgroundColor: C['surface-container-low'], gap: 6 }}>
            <Row style={{ gap: 8 }}>
              <Icon name="verified" size={18} color={C.secondary} />
              <T v="label-md" c="secondary">Cameroon GCE Mark Scheme</T>
            </Row>
            <T v="body-sm" c="on-surface-variant" leading="relaxed">{q.why}</T>
          </View>
        )}

        <Btn onPress={() => openUnit(unit.id)} style={{ padding: S.sm, borderRadius: R.xl, backgroundColor: alpha('surface-container-highest', 0.6), flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', gap: 8 }}>
          <Row style={{ gap: 10, flex: 1, minWidth: 0 }}>
            <View style={{ width: 32, height: 32, borderRadius: R.lg, backgroundColor: C['surface-container-lowest'], alignItems: 'center', justifyContent: 'center', boxShadow: SH.sm }}>
              <Icon name="view_in_ar" size={20} color={C.primary} />
            </View>
            <View style={{ flex: 1, minWidth: 0 }}>
              <T v="label-md" numberOfLines={1}>Spatial {unit.vr.parts[0].name} Model</T>
              <T v="label-sm" c="on-surface-variant" numberOfLines={1}>Touch to open the Unit {unit.n} 3D model</T>
            </View>
          </Row>
          <Row style={{ gap: 4, paddingHorizontal: 12, paddingVertical: 6, borderRadius: R.full, backgroundColor: C['surface-container-lowest'], boxShadow: SH.sm }}>
            <T v="label-sm" c="primary">Inspect</T>
            <Icon name="arrow_forward" size={14} color={C.primary} />
          </Row>
        </Btn>
      </Card>

      {/* Exam Navigation Controls */}
      <Card radius={R['2xl']} style={{ gap: S.sm }}>
        <Row style={{ justifyContent: 'space-between', gap: S.xs }}>
          <NavBtn icon="arrow_back" label="Previous" onPress={() => go(-1)} />
          <NavBtn icon="bookmark" iconColor={C['tertiary-container']} label={flags[qi] ? 'Marked' : 'Review Later'} muted onPress={() => setFlags((f) => ({ ...f, [qi]: !f[qi] }))} fill={!!flags[qi]} />
          <NavBtn icon="arrow_forward" label="Next" trailing onPress={() => go(1)} />
        </Row>
        {review ? (
          <Btn onPress={() => setReview(null)} style={styles.primaryPill}>
            <Icon name="close" size={18} color={C['on-primary']} />
            <T v="title-md" size={12} c="on-primary">Exit Review</T>
          </Btn>
        ) : (
          <Btn onPress={submit} disabled={submitted} style={[styles.primaryPill, submitted && { opacity: 0.6 }]}>
            <Icon name={submitted ? 'done_all' : 'send'} size={18} color={C['on-primary']} />
            <T v="title-md" size={12} c="on-primary">{submitted ? `Submitted · ${correct}/${N}` : 'Submit Mock Exam'}</T>
          </Btn>
        )}
      </Card>

      {/* Instant Results */}
      <Card radius={R['2xl']} style={{ gap: S.md }}>
        <Row style={{ justifyContent: 'space-between' }}>
          <Row style={{ gap: 8 }}>
            <View style={{ width: 32, height: 32, borderRadius: R.lg, backgroundColor: alpha('secondary-container', 0.4), alignItems: 'center', justifyContent: 'center' }}>
              <Icon name="military_tech" size={20} color={C.secondary} />
            </View>
            <T v="headline-sm">Performance Assessment</T>
          </Row>
          <Pill bg="secondary-container" c="on-secondary-container" px={10} py={4}>{submitted ? 'Final Score' : 'Live Scorecard'}</Pill>
        </Row>
        <View style={{ gap: S.sm }}>
          <View style={styles.tile}>
            <T v="label-sm" w={500} c="on-surface-variant" upper>Aggregate Standing</T>
            <View style={{ marginVertical: 4 }}>
              <T v="display-hero-mobile" c="primary">{submitted ? finalPct : pct}%</T>
              <T v="title-md" c="secondary">Grade {g} · {gLabel}</T>
            </View>
            <T v="label-sm" c="on-surface-variant">
              {state.exams.length ? `Best mock so far: ${best}% · ${state.exams.length} paper${state.exams.length > 1 ? 's' : ''} taken` : 'Your first mock paper — submit to set a personal best'}
            </T>
          </View>
          <View style={styles.tile}>
            <T v="label-sm" w={500} c="on-surface-variant" upper>Question Mastery</T>
            <View style={{ gap: 4, marginVertical: 4 }}>
              <Row style={{ gap: 6, alignItems: 'baseline' }}>
                <T v="headline-md">{correct} / {submitted ? N : answered || 0}</T>
                <T v="label-md" w={500} c="secondary">Correct</T>
              </Row>
              <Row style={{ gap: 6 }}>
                <Icon name="flag" size={14} color={C['tertiary-container']} />
                <T v="label-sm" c="tertiary-container">{flagged} Marked for Revision</T>
              </Row>
            </View>
            <Row style={{ gap: 4, height: 8, paddingTop: 0 }}>
              <View style={{ flex: Math.max(correct, 0.001), backgroundColor: C.secondary, borderRadius: R.full, height: 8 }} />
              <View style={{ flex: Math.max((submitted ? N : answered) - correct, 0.001), backgroundColor: C['tertiary-fixed-dim'], borderRadius: R.full, height: 8 }} />
            </Row>
          </View>
          <View style={styles.tile}>
            <T v="label-sm" w={500} c="on-surface-variant" upper>Pacing & Timing</T>
            <View style={{ marginVertical: 4 }}>
              <T v="headline-md">{avg}s</T>
              <T v="label-md" w={500} c="on-surface-variant">Avg time per item</T>
            </View>
            <T v="label-sm" w={500} c={passes > 0 || !avg ? 'secondary' : 'tertiary-container'}>
              {!avg ? 'Aim for 45s per item' : passes > 0 ? `Sufficient for ${passes} review pass${passes > 1 ? 'es' : ''}` : 'Speed up: aim for 45s per item'}
            </T>
          </View>
        </View>
        <View style={{ gap: S.xs, paddingTop: S.xs }}>
          <Btn onPress={reviewIncorrect} disabled={!submitted} style={[styles.actionBtn, { backgroundColor: C['surface-container-high'] }, !submitted && { opacity: 0.5 }]}>
            <Icon name="find_in_page" size={18} color={C['on-surface']} />
            <T v="label-md">Review All Incorrect Questions</T>
          </Btn>
          <Btn onPress={restart} style={[styles.actionBtn, { backgroundColor: C['secondary-container'], boxShadow: SH.sm }]}>
            <Icon name="replay" size={18} color={C['on-secondary-container']} />
            <T v="title-md" size={12} c="on-secondary-container">Try Another Paper</T>
          </Btn>
        </View>
      </Card>

      {/* GCE Unit Mastery Strip */}
      <Card radius={R['2xl']} style={{ gap: S.sm, marginBottom: S.md }}>
        <Row style={{ justifyContent: 'space-between' }}>
          <T v="title-md">Topic Weighting Performance</T>
          <T v="label-sm" c="on-surface-variant">Syllabus 0710 (Bio)</T>
        </Row>
        <View style={{ gap: 8 }}>
          {byUnit.length === 0 && <T v="body-sm" c="on-surface-variant">Answer questions to see how you perform in each unit.</T>}
          {byUnit.map(({ u, pct: p }) => {
            const tone = p >= 70 ? 'secondary' : 'tertiary-container';
            return (
              <Row key={u.id} style={{ justifyContent: 'space-between' }}>
                <T v="body-sm" w={500} numberOfLines={1} style={{ flex: 1, paddingRight: 8 }}>{u.short}</T>
                <Row style={{ gap: 8 }}>
                  <T v="label-sm" w={700} c={tone}>{p}%</T>
                  <View style={{ width: 80, height: 6, borderRadius: R.full, backgroundColor: C['surface-container-high'], overflow: 'hidden' }}>
                    <View style={{ width: `${p}%`, height: '100%', borderRadius: R.full, backgroundColor: C[tone] }} />
                  </View>
                </Row>
              </Row>
            );
          })}
        </View>
      </Card>
    </Screen>
  );
}

function NavBtn({ icon, label, onPress, trailing, muted, iconColor, fill }) {
  return (
    <Btn onPress={onPress} style={{ minHeight: 44, paddingHorizontal: 14, paddingVertical: 8, borderRadius: R.xl, backgroundColor: C['surface-container-low'], flexDirection: 'row', alignItems: 'center', gap: 6 }}>
      {!trailing && <Icon name={icon} size={18} color={iconColor || C['on-surface']} fill={fill} />}
      <T v="label-md" c={muted ? 'on-surface-variant' : 'on-surface'}>{label}</T>
      {trailing && <Icon name={icon} size={18} color={C['on-surface']} />}
    </Btn>
  );
}

const styles = {
  primaryPill: { width: '100%', minHeight: 44, paddingHorizontal: 20, paddingVertical: 10, borderRadius: R.full, backgroundColor: C['primary-container'], boxShadow: SH.sm, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 8 },
  tile: { padding: S.md, borderRadius: R.xl, backgroundColor: C['surface-container-low'], justifyContent: 'space-between' },
  actionBtn: { width: '100%', minHeight: 44, paddingHorizontal: 16, paddingVertical: 10, borderRadius: R.xl, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 8 },
};
