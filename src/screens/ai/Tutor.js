import { useEffect, useRef, useState } from 'react';
import { ActivityIndicator, KeyboardAvoidingView, Modal, Platform, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import * as Speech from '../../lib/voice';
import ListenButton from '../../ui/ListenButton';
import { C, Ic, Input, P, T, V } from '../../ui/kit';
import { StackHeader, useToast } from '../../ui/chrome';
import { post } from '../../api/client';
import { useApp } from '../../state/store';
import { useL, useLang } from '../../i18n';
import { focusUnit } from '../../state/selectors';
import { unitById, unitsFor, unitsShown } from '../../data/units';
import { contextFor } from '../../lib/tutorContext';
import { subjectName } from '../../data/subjects';

// The 3D model an answer is about: the topic of this subject whose key words the
// question and answer mention most (only topics with a model).
const WORDS = (u) => `${u.title} ${u.short} ${u.focus} ${(u.vr?.parts || []).map((p) => p.name).join(' ')}`.toLowerCase().match(/[a-z]{5,}/g) || [];
function matchUnit(text, subject, preferred) {
  const s = text.toLowerCase();
  let best = null;
  let hits = 1;
  for (const u of unitsFor(subject)) {
    if (!u.vr) continue;
    const n = new Set(WORDS(u).filter((w) => s.includes(w))).size + (u.id === preferred ? 1 : 0);
    if (n > hits) {
      hits = n;
      best = u.id;
    }
  }
  return best;
}

// Renders the tutor's light markdown: **bold**, numbered steps and bullets.
function Rich({ text, own }) {
  // Drops markdown dividers and table rule rows the model sometimes adds.
  const lines = text.split(/\n+/).filter((l) => l.trim() && !/^\s*([-*_]\s*){3,}$/.test(l) && !/^\s*\|?[\s:|-]+\|[\s:|-]*$/.test(l));
  const base = own ? 'font-body-md text-body-md text-on-primary' : 'font-body-md text-body-md text-on-surface';
  const inline = (s, k) =>
    s.split('**').map((p, i) =>
      i % 2 ? (
        <T key={`${k}-${i}`} c={base} style={{ fontWeight: '700' }}>
          {p}
        </T>
      ) : (
        p
      )
    );
  return (
    <V c="gap-2">
      {lines.map((l, i) => {
        const num = l.match(/^\s*(\d+)[.)]\s+(.*)/);
        const bullet = l.match(/^\s*[-*•]\s+(.*)/);
        const head = l.match(/^\s*#{1,4}\s+(.*)/);
        if (head) {
          return (
            <T key={i} c={base} style={{ fontWeight: '700', lineHeight: 22 }}>
              {inline(head[1].replace(/\*\*/g, ''), i)}
            </T>
          );
        }
        if (num || bullet) {
          return (
            <V key={i} c="flex-row gap-2 items-start">
              <T c={base} style={{ lineHeight: 22, minWidth: 16 }}>
                {num ? `${num[1]}.` : '•'}
              </T>
              <T c={`${base} flex-1`} style={{ lineHeight: 22 }}>
                {inline(num ? num[2] : bullet[1], i)}
              </T>
            </V>
          );
        }
        return (
          <T key={i} c={base} style={{ lineHeight: 22 }}>
            {inline(l, i)}
          </T>
        );
      })}
    </V>
  );
}

const REASONS = [
  ['wrong', 'It is wrong', 'C’est faux'],
  ['harmful', 'It is harmful or rude', 'C’est blessant ou grossier'],
  ['off_topic', 'It is not about the subject', 'Ce n’est pas sur la matière'],
  ['other', 'Something else', 'Autre chose'],
];

export default function Tutor({ navigation, route }) {
  const insets = useSafeAreaInsets();
  const { user, pro, progress, stats, quota, setQuota, refreshQuota, consentOk, subject: current } = useApp();
  const L = useL();
  const lang = useLang();
  const subject = route.params?.subject || current;
  const name = subjectName(subject, lang);
  // One conversation per subject (Biology keeps its original key).
  const key = `bs:tutor:${user?.id || 'guest'}${subject === 'biology' ? '' : `:${subject}`}`;
  const focus = focusUnit(progress, stats.unitPct, pro, subject, unitsShown(subject, user?.className));
  // The lesson or topic the student came from, or the topic they are working on.
  const ctx = contextFor({ lessonId: route.params?.lessonId, unitId: route.params?.unitId || (route.params?.lessonId ? null : focus?.id) });
  const context = ctx?.short || route.params?.context || focus?.short || '';
  const ctxUnit = route.params?.unitId || focus?.id;
  const [messages, setMessages] = useState([]);
  const [draft, setDraft] = useState(route.params?.prefill || '');
  const [busy, setBusy] = useState(false);
  const [speaking, setSpeaking] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const [reporting, setReporting] = useState(null);
  const [toast, showToast] = useToast();
  const scroller = useRef(null);

  useEffect(() => {
    AsyncStorage.getItem(key)
      .then((raw) => raw && setMessages(JSON.parse(raw)))
      .catch(() => {})
      .finally(() => setLoaded(true));
    refreshQuota();
    return () => Speech.stop();
  }, [key, refreshQuota]);
  useEffect(() => {
    if (loaded) AsyncStorage.setItem(key, JSON.stringify(messages.slice(-40))).catch(() => {});
    setTimeout(() => scroller.current?.scrollToEnd({ animated: true }), 80);
  }, [messages, loaded, key]);

  const send = async (text = draft) => {
    const q = text.trim();
    if (!q || busy) return;
    if (quota && quota.asksLeft <= 0) {
      navigation.navigate('Paywall', { reason: 'ai' });
      return;
    }
    const mine = { id: `u${Date.now()}`, role: 'user', content: q, at: Date.now() };
    const history = messages.filter((m) => !m.error).slice(-10).map((m) => ({ role: m.role, content: m.content }));
    setMessages((m) => [...m, mine]);
    setDraft('');
    setBusy(true);
    try {
      const r = await post('/v1/ai/ask', { question: q, history, context, subject, lesson: ctx ? { title: ctx.title, text: ctx.text } : undefined }, { timeout: 90000 });
      setMessages((m) => [...m, { id: `a${Date.now()}`, role: 'assistant', content: r.text, at: Date.now(), unit: matchUnit(`${q} ${r.text}`, subject, ctxUnit), q }]);
      setQuota((x) => (x ? { ...x, asksLeft: r.asksLeft } : x));
    } catch (e) {
      setMessages((m) => [...m, { id: `e${Date.now()}`, role: 'assistant', error: true, content: e.message, code: e.code, at: Date.now() }]);
      if (e.code === 'quota') refreshQuota();
    } finally {
      setBusy(false);
    }
  };

  const speak = (m) => {
    if (speaking === m.id) {
      Speech.stop();
      setSpeaking(null);
      return;
    }
    Speech.stop();
    setSpeaking(m.id);
    Speech.speak(m.content.replace(/\*\*|#+/g, ''), { language: lang === 'fr' ? 'fr-FR' : 'en-GB', rate: 0.95, onDone: () => setSpeaking(null), onStopped: () => setSpeaking(null), onError: () => setSpeaking(null) });
  };

  const report = async (reason) => {
    const m = reporting;
    setReporting(null);
    try {
      await post('/v1/ai/report', { reason, answer: m.content, question: m.q });
      setMessages((list) => list.map((x) => (x.id === m.id ? { ...x, reported: true } : x)));
      showToast(L('Thank you. The answer has been reported for review.', 'Merci. La réponse a été signalée pour vérification.'));
    } catch (e) {
      showToast(e.message, 'error');
    }
  };

  const about = route.params?.lessonId ? L('this lesson', 'cette leçon') : context || L('this topic', 'ce thème');
  const suggestions = [
    L(`Explain ${about} in simple words`, `Explique ${about} simplement`),
    L(`Ask me 3 exam-style questions on ${about}, one at a time, and correct my answers`, `Pose-moi 3 questions type examen sur ${about}, une à la fois, et corrige mes réponses`),
    L('What mistakes lose marks in this topic?', 'Quelles erreurs font perdre des points ?'),
  ];

  return (
    <V c="flex-1 bg-surface">
      <StackHeader
        title={`${name} ${L('tutor', 'tuteur')}`}
        subtitle={context}
        subtitleColor="on-surface-variant"
        avatar={false}
        right={
          messages.length > 0 ? (
            <P c="px-2 py-1" onPress={() => setMessages([])} hitSlop={8}>
              <T c="font-label-md text-label-md text-primary-container">{L('New chat', 'Nouvelle')}</T>
            </P>
          ) : null
        }
      />

      <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : undefined} keyboardVerticalOffset={Platform.OS === 'ios' ? insets.top + 64 : 0}>
        <ScrollView ref={scroller} contentContainerStyle={{ padding: 16, paddingBottom: 24, gap: 18 }} keyboardShouldPersistTaps="handled">
          {!consentOk && (
            <V c="bg-surface-container-low rounded-xl p-space-md gap-1">
              <T c="font-label-lg text-label-lg text-on-surface" style={{ fontWeight: '700' }}>
                {L('The tutor opens after your parent approves your account', 'Le tuteur s’ouvre après l’accord de votre parent')}
              </T>
              <P onPress={() => navigation.navigate('Guardian', { fromHome: true })} hitSlop={8}>
                <T c="font-label-md text-label-md text-primary-container">{L('Send the approval link', 'Envoyer le lien d’accord')}</T>
              </P>
            </V>
          )}

          {!messages.length && (
            <T c="font-body-md text-body-md text-on-surface-variant" style={{ lineHeight: 22 }}>
              {L(`Ask any GCE ${name} question. Answers explain step by step and point out what examiners give marks for.`, `Posez une question de ${name.toLowerCase()} du GCE. Les réponses expliquent étape par étape et indiquent ce que les examinateurs notent.`)}
            </T>
          )}

          {messages.map((m) =>
            m.role === 'user' ? (
              <V key={m.id} c="self-end bg-primary-container px-space-md py-space-sm rounded-xl" style={{ maxWidth: '85%', borderBottomRightRadius: 4 }}>
                <Rich text={m.content} own />
              </V>
            ) : m.error ? (
              <V key={m.id} c="gap-2" style={{ maxWidth: '92%' }}>
                <T c="font-body-md text-body-md text-error">{m.content}</T>
                {(m.code === 'quota' || m.code === 'premium_required') && (
                  <P c="self-start" onPress={() => navigation.navigate('Paywall', { reason: 'ai' })} hitSlop={8}>
                    <T c="font-label-md text-label-md text-primary-container" style={{ fontWeight: '700' }}>
                      {L('See prices', 'Voir les prix')}
                    </T>
                  </P>
                )}
              </V>
            ) : (
              <V key={m.id} c="gap-2">
                <Rich text={m.content} />
                <V c="flex-row items-center gap-space-md flex-wrap">
                  <ListenButton size="sm" label={L('Listen', 'Écouter')} stopLabel={L('Stop', 'Arrêter')} playing={speaking === m.id} onPress={() => speak(m)} />
                  {m.unit && (
                    <P c="flex-row items-center gap-1" onPress={() => navigation.navigate('Specimen', { unitId: m.unit })} hitSlop={8}>
                      <Ic n="view_in_ar" s={16} c="on-surface-variant" />
                      <T c="font-label-md text-label-md text-on-surface-variant">{unitById(m.unit)?.short ? L('3D model', 'Modèle 3D') : ''}</T>
                    </P>
                  )}
                  <P c="flex-row items-center gap-1" onPress={() => !m.reported && setReporting(m)} hitSlop={8} accessibilityLabel="Report this answer">
                    <Ic n="flag" s={16} c="on-surface-variant" />
                    <T c="font-label-md text-label-md text-on-surface-variant">{m.reported ? L('Reported', 'Signalée') : L('Report', 'Signaler')}</T>
                  </P>
                </V>
              </V>
            )
          )}

          {busy && (
            <V c="flex-row items-center gap-2">
              <ActivityIndicator size="small" color={C['primary-container']} />
              <T c="font-body-sm text-body-sm text-on-surface-variant">{L('Writing an answer...', 'Rédaction de la réponse...')}</T>
            </V>
          )}

          {!busy && messages.length < 2 && (
            <V c="gap-2">
              <P c="self-start flex-row items-center gap-1.5 bg-surface-container-low px-space-sm py-2 rounded-lg" onPress={() => navigation.navigate('Workspace', { subject, lessonId: route.params?.lessonId, unitId: ctxUnit })}>
                <Ic n="co_present" s={16} c="primary-container" />
                <T c="font-body-sm text-body-sm text-on-surface">{L('Solve a question step by step on the board', 'Résoudre une question au tableau, étape par étape')}</T>
              </P>
              {suggestions.map((sug) => (
                <P key={sug} c="self-start bg-surface-container-lowest border border-outline-variant px-space-sm py-2 rounded-lg" onPress={() => send(sug)}>
                  <T c="font-body-sm text-body-sm text-on-surface">{sug}</T>
                </P>
              ))}
            </V>
          )}
        </ScrollView>

        <V c="bg-surface-container-lowest px-margin pt-space-sm gap-1.5 border-t border-surface-container" style={{ paddingBottom: insets.bottom + 8 }}>
          <V c="flex-row items-end gap-space-xs">
            <Input
              c="flex-1 min-h-[44px] max-h-[120px] bg-surface-container-low px-3 py-2.5 rounded-xl text-body-md"
              placeholder={L(`Ask a ${name} question`, `Posez une question de ${name.toLowerCase()}`)}
              value={draft}
              onChangeText={setDraft}
              multiline
              maxLength={2000}
            />
            <P c={`w-11 h-11 rounded-xl items-center justify-center ${draft.trim() && !busy ? 'bg-primary-container' : 'bg-surface-container'}`} onPress={() => send()} disabled={busy || !draft.trim()} accessibilityLabel="Send">
              <Ic n="arrow_upward" s={20} c={draft.trim() && !busy ? 'on-primary' : 'outline'} />
            </P>
          </V>
          <V c="flex-row items-center justify-between">
            <T c="font-body-sm text-on-surface-variant" style={{ fontSize: 11 }}>
              {quota ? `${quota.asksLeft} ${L('questions left today', 'questions restantes aujourd’hui')}. ` : ''}
              {L('Answers are generated by AI; check key facts in your lessons.', 'Réponses générées par IA ; vérifiez dans vos leçons.')}
            </T>
          </V>
        </V>
      </KeyboardAvoidingView>

      <Modal visible={!!reporting} transparent animationType="fade" onRequestClose={() => setReporting(null)}>
        <V c="flex-1 justify-end" style={{ backgroundColor: 'rgba(15,23,42,0.45)' }}>
          <V c="bg-surface-container-lowest rounded-t-xl p-space-lg gap-space-sm" style={{ paddingBottom: insets.bottom + 16 }}>
            <T c="font-headline-sm text-headline-sm text-on-surface" style={{ fontWeight: '700' }}>
              {L('What is the problem with this answer?', 'Quel est le problème avec cette réponse ?')}
            </T>
            {REASONS.map(([id, en, fr]) => (
              <P key={id} c="h-12 px-space-md rounded-lg bg-surface-container-low justify-center" onPress={() => report(id)}>
                <T c="font-body-md text-body-md text-on-surface">{L(en, fr)}</T>
              </P>
            ))}
            <P c="h-11 items-center justify-center" onPress={() => setReporting(null)}>
              <T c="font-label-md text-label-md text-on-surface-variant">{L('Cancel', 'Annuler')}</T>
            </P>
          </V>
        </V>
      </Modal>
      {toast}
    </V>
  );
}
