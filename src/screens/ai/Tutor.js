import { useEffect, useRef, useState } from 'react';
import { ActivityIndicator, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import * as Speech from 'expo-speech';
import { Avatar, C, Ic, Input, P, T, V } from '../../ui/kit';
import { Pulse, StackHeader } from '../../ui/chrome';
import Waveform from '../../ui/Waveform';
import { SpecimenPreview } from '../../ui/previews';
import { post } from '../../api/client';
import { useApp } from '../../state/store';
import { useL, useLang } from '../../i18n';
import { firstName, focusUnit } from '../../state/selectors';

const KEYWORDS = {
  cell: ['cell', 'mitochond', 'organelle', 'osmosis', 'plasmolys', 'nucleus', 'ribosome', 'membrane', 'turgid', 'cellule'],
  nutrition: ['digest', 'enzyme', 'amylase', 'stomach', 'villi', 'food test', 'photosynth', 'diet', 'bile'],
  transport: ['heart', 'blood', 'artery', 'vein', 'capillar', 'xylem', 'phloem', 'transpiration', 'circulation', 'cœur'],
  gas: ['lung', 'alveol', 'breath', 'respiration', 'diaphragm', 'gas exchange', 'poumon'],
  kidney: ['kidney', 'nephron', 'urine', 'excretion', 'glomerul', 'homeostasis', 'rein'],
  nervous: ['nerve', 'neuron', 'reflex', 'brain', 'synapse', 'hormone', 'eye', 'nerveux'],
  locomotion: ['bone', 'muscle', 'joint', 'skeleton', 'biceps', 'tendon', 'ligament'],
  reproduction: ['flower', 'pollin', 'fertilis', 'reproduc', 'ovary', 'sperm', 'placenta', 'menstrua'],
  genetics: ['gene', 'allele', 'dna', 'chromosome', 'inherit', 'mitosis', 'meiosis', 'genotype', 'punnett'],
  ecology: ['ecosystem', 'food chain', 'food web', 'malaria', 'pollution', 'nitrogen cycle', 'carbon cycle', 'deforest'],
};
function matchUnit(text) {
  const s = text.toLowerCase();
  let best = null;
  let hits = 0;
  for (const [u, words] of Object.entries(KEYWORDS)) {
    const n = words.filter((w) => s.includes(w)).length;
    if (n > hits) {
      hits = n;
      best = u;
    }
  }
  return best;
}

// Renders the tutor's markdown-lite: **bold**, numbered steps and bullets.
function Rich({ text, own }) {
  // Drops markdown dividers and table rule rows the model sometimes adds.
  const lines = text.split(/\n+/).filter((l) => l.trim() && !/^\s*([-*_]\s*){3,}$/.test(l) && !/^\s*\|?[\s:|-]+\|[\s:|-]*$/.test(l));
  const base = own ? 'font-body-md text-body-md text-on-primary' : 'font-body-md text-body-md text-on-surface';
  const inline = (s, k) =>
    s.split('**').map((p, i) =>
      i % 2 ? (
        <T key={`${k}-${i}`} c={base} style={{ fontWeight: '700', color: own ? '#fff' : C.secondary }}>
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
            <T key={i} c={`font-headline-sm text-headline-sm ${own ? 'text-on-primary' : 'text-on-surface'}`}>
              {inline(head[1].replace(/\*\*/g, ''), i)}
            </T>
          );
        }
        if (num) {
          return (
            <V key={i} c="flex-row gap-2.5 items-start">
              <V c="bg-surface-container-high rounded-full w-5 h-5 items-center justify-center mt-0.5">
                <T c="text-primary" style={{ fontSize: 11, fontWeight: '700' }}>
                  {num[1]}
                </T>
              </V>
              <T c={`${base} flex-1`} style={{ lineHeight: 21 }}>
                {inline(num[2], i)}
              </T>
            </V>
          );
        }
        if (bullet) {
          return (
            <V key={i} c="flex-row gap-2 items-start">
              <V c="w-1.5 h-1.5 rounded-full bg-secondary mt-2" />
              <T c={`${base} flex-1`} style={{ lineHeight: 21 }}>
                {inline(bullet[1], i)}
              </T>
            </V>
          );
        }
        return (
          <T key={i} c={base} style={{ lineHeight: 21 }}>
            {inline(l, i)}
          </T>
        );
      })}
    </V>
  );
}

const time = (at) => new Date(at).toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' });

export default function Tutor({ navigation, route }) {
  const insets = useSafeAreaInsets();
  const { user, pro, progress, stats, quota, setQuota, refreshQuota } = useApp();
  const L = useL();
  const lang = useLang();
  const key = `bs:tutor:${user?.id || 'guest'}`;
  const focus = focusUnit(progress, stats.unitPct, pro);
  const context = route.params?.context || `${focus.short}`;
  const [messages, setMessages] = useState([]);
  const [draft, setDraft] = useState(route.params?.prefill || '');
  const [busy, setBusy] = useState(false);
  const [speaking, setSpeaking] = useState(null);
  const [loaded, setLoaded] = useState(false);
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
    const history = messages.filter((m) => !m.local && !m.error).slice(-10).map((m) => ({ role: m.role, content: m.content }));
    setMessages((m) => [...m, mine]);
    setDraft('');
    setBusy(true);
    try {
      const r = await post('/v1/ai/ask', { question: q, history, context }, { timeout: 90000 });
      setMessages((m) => [...m, { id: `a${Date.now()}`, role: 'assistant', content: r.text, at: Date.now(), unit: matchUnit(`${q} ${r.text}`) }]);
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

  const suggestions = [
    L(`Explain the key ideas of ${focus.short} simply`, `Explique simplement ${focus.short}`),
    L('Give me 3 exam-style questions on this', 'Donne-moi 3 questions type examen'),
    L('What mistakes lose marks in this topic?', 'Quelles erreurs font perdre des points ?'),
  ];
  const lastAi = [...messages].reverse().find((m) => m.role === 'assistant' && !m.error);

  return (
    <V c="flex-1 bg-surface">
      <StackHeader title={L('AI tutor', 'Tuteur IA')} subtitle="Dr. Nkwenti" subtitleColor="secondary" />
      <V c="px-gutter-mobile py-space-sm bg-surface shadow-sm" style={{ zIndex: 30 }}>
        <V c="gap-space-xs bg-surface-container-low p-space-sm rounded-xl">
          <V c="flex-row items-center justify-between gap-space-xs">
            <V c="flex-row items-center gap-space-xs flex-1">
              <Ic n="biotech" s={18} c="primary" fill />
              <T c="font-label-md text-label-md text-primary flex-1" numberOfLines={1}>
                {context}
              </T>
            </V>
            <V c="flex-row items-center gap-1 bg-surface-container-highest px-2 py-0.5 rounded-full">
              <Ic n="verified" s={12} c="primary-container" />
              <T c="font-label-sm text-label-sm text-on-primary-fixed-variant">GCE O-Level</T>
            </V>
          </V>
          <V c="flex-row items-center justify-between pt-1 gap-2">
            <V c="flex-row items-center gap-1.5 flex-1">
              <Pulse />
              <T c="font-label-sm text-label-sm text-on-surface-variant flex-1" numberOfLines={1}>
                {L('Examiner tone · answers in', 'Ton examinateur · répond en')} {lang === 'fr' ? 'français' : 'English'}
              </T>
            </V>
            {messages.length > 0 && (
              <P c="flex-row items-center gap-1 bg-surface-container-high px-2 py-0.5 rounded-full" onPress={() => setMessages([])}>
                <Ic n="restart_alt" s={14} c="on-surface" />
                <T c="font-label-sm text-label-sm text-on-surface">{L('New chat', 'Nouveau')}</T>
              </P>
            )}
          </V>
        </V>
      </V>

      <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : undefined} keyboardVerticalOffset={Platform.OS === 'ios' ? insets.top + 64 : 0}>
        <ScrollView ref={scroller} contentContainerStyle={{ padding: 12, paddingBottom: 24, gap: 16 }} keyboardShouldPersistTaps="handled">
          <V c="flex-row items-center justify-center gap-space-xs my-space-xs">
            <V c="h-px bg-surface-container-high flex-1" />
            <T c="font-label-sm text-label-sm text-outline uppercase tracking-wider px-2">
              {user?.className || 'GCE'} · {L('Biology', 'Biologie')}
            </T>
            <V c="h-px bg-surface-container-high flex-1" />
          </V>

          <V c="flex-row items-start gap-space-xs" style={{ maxWidth: '92%' }}>
            <V c="w-8 h-8 rounded-full bg-primary-container items-center justify-center shadow-sm" style={{ borderRadius: 16 }}>
              <Ic n="psychology" s={18} c="on-primary" />
            </V>
            <V c="gap-1 flex-1">
              <T c="font-label-md text-label-md text-on-surface">Dr. Nkwenti AI</T>
              <V c="bg-surface-container-lowest p-space-md rounded-xl shadow-sm" style={{ borderTopLeftRadius: 0 }}>
                <T c="font-body-md text-body-md text-on-surface" style={{ lineHeight: 21 }}>
                  {L('Hello', 'Bonjour')} {firstName(user?.name)}!{' '}
                  {stats.unitPct[focus.id] > 0
                    ? L(`Your weakest open unit right now is ${focus.short} (${stats.unitPct[focus.id]}%). Ask me anything about it, or any other Biology topic.`, `Votre unité la plus faible est ${focus.short} (${stats.unitPct[focus.id]} %). Posez-moi vos questions.`)
                    : L('Ask me any GCE Biology question. I explain step by step and point out what examiners reward.', 'Posez-moi une question de biologie du GCE. J’explique étape par étape.')}
                </T>
              </V>
            </V>
          </V>

          {messages.map((m) =>
            m.role === 'user' ? (
              <V key={m.id} c="flex-row items-start justify-end gap-space-xs self-end" style={{ maxWidth: '88%' }}>
                <V c="items-end gap-1 flex-shrink">
                  <V c="flex-row items-baseline gap-2">
                    <T c="font-label-sm text-label-sm text-outline">{time(m.at)}</T>
                    <T c="font-label-md text-label-md text-primary">{firstName(user?.name)}</T>
                  </V>
                  <V c="bg-primary-container p-space-md rounded-xl shadow-sm" style={{ borderTopRightRadius: 0 }}>
                    <Rich text={m.content} own />
                  </V>
                </V>
                <Avatar name={user?.name} size={32} />
              </V>
            ) : (
              <V key={m.id} c="flex-row items-start gap-space-xs w-full">
                <V c="w-8 h-8 rounded-full bg-primary-container items-center justify-center shadow-sm" style={{ borderRadius: 16 }}>
                  <Ic n="psychology" s={18} c="on-primary" />
                </V>
                <V c="gap-2 flex-1">
                  <V c="flex-row items-baseline gap-2">
                    <T c="font-label-md text-label-md text-on-surface">Dr. Nkwenti AI</T>
                    <T c="font-label-sm text-label-sm text-outline">{time(m.at)}</T>
                  </V>
                  {m.error ? (
                    <V c="bg-error-container p-space-md rounded-xl gap-2" style={{ borderTopLeftRadius: 0 }}>
                      <T c="font-body-md text-body-md text-on-error-container">{m.content}</T>
                      {(m.code === 'quota' || m.code === 'premium_required') && (
                        <P c="self-start bg-primary px-3 py-1.5 rounded-lg" onPress={() => navigation.navigate('Paywall', { reason: 'ai' })}>
                          <T c="font-label-md text-label-md text-on-primary">{L('See Premium', 'Voir Premium')}</T>
                        </P>
                      )}
                    </V>
                  ) : (
                    <V c="bg-surface-container-lowest p-space-md rounded-xl shadow-sm gap-space-sm" style={{ borderTopLeftRadius: 0 }}>
                      <Rich text={m.content} />
                      {m.unit && (
                        <V c="bg-surface-container-low rounded-xl p-space-sm mt-1 gap-space-sm">
                          <V c="w-full h-32 rounded-xl overflow-hidden">
                            <SpecimenPreview unitId={m.unit} />
                            <V c="absolute top-2 left-2 flex-row items-center gap-1 bg-surface-container-lowest/90 px-2 py-0.5 rounded-full">
                              <Ic n="view_in_ar" s={14} c="secondary" />
                              <T c="font-label-sm text-label-sm text-on-surface">{L('3D model', 'Modèle 3D')}</T>
                            </V>
                          </V>
                          <P c="w-full h-11 bg-primary rounded-xl flex-row items-center justify-center gap-2 shadow-sm" onPress={() => navigation.navigate('Specimen', { unitId: m.unit })}>
                            <Ic n="view_in_ar" s={18} c="on-primary" />
                            <T c="font-label-lg text-label-lg text-on-primary">{L('Inspect in 3D', 'Voir en 3D')}</T>
                            <Ic n="north_east" s={16} c="on-primary" />
                          </P>
                        </V>
                      )}
                      <V c="flex-row items-center justify-between bg-surface-container-low px-space-sm py-2 rounded-xl mt-1">
                        <V c="flex-row items-center gap-2">
                          <P c="w-8 h-8 rounded-full bg-secondary items-center justify-center shadow-sm" onPress={() => speak(m)} accessibilityLabel="Listen" scale={0.95}>
                            <Ic n={speaking === m.id ? 'pause' : 'play_arrow'} s={18} c="on-secondary" fill />
                          </P>
                          <V>
                            <T c="font-label-sm text-label-sm text-on-surface">{L('Listen to this answer', 'Écouter la réponse')}</T>
                            <T c="font-body-sm text-outline" style={{ fontSize: 11 }}>
                              ~{Math.max(5, Math.round(m.content.split(/\s+/).length / 2.4))}s
                            </T>
                          </V>
                        </V>
                        <Waveform playing={speaking === m.id} bars={6} height={16} />
                      </V>
                    </V>
                  )}
                </V>
              </V>
            )
          )}

          {busy && (
            <V c="flex-row items-center gap-space-xs">
              <V c="w-8 h-8 rounded-full bg-primary-container items-center justify-center" style={{ borderRadius: 16 }}>
                <Ic n="psychology" s={18} c="on-primary" />
              </V>
              <V c="bg-surface-container-lowest px-space-md py-3 rounded-xl shadow-sm flex-row items-center gap-2">
                <ActivityIndicator size="small" color={C['primary-container']} />
                <T c="font-body-sm text-body-sm text-on-surface-variant">{L('Dr. Nkwenti is writing...', 'Le Dr Nkwenti écrit...')}</T>
              </V>
            </V>
          )}

          <V c="gap-1.5 pt-2">
            <V c="flex-row items-center gap-1.5 px-1">
              <Ic n="auto_awesome" s={14} c="primary" />
              <T c="font-label-sm text-label-sm text-outline uppercase tracking-wider">{lastAi ? L('Follow-ups', 'Suites') : L('Try asking', 'Essayez')}</T>
            </V>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ gap: 8, paddingBottom: 4 }}>
              {lastAi?.unit && (
                <P c="bg-surface-container-lowest px-3.5 py-2 rounded-full shadow-sm flex-row items-center gap-1.5" onPress={() => navigation.navigate('Quiz', { unitId: lastAi.unit })}>
                  <Ic n="quiz" s={16} c="secondary" />
                  <T c="font-label-md text-label-md text-primary">{L('Practise this unit', 'S’entraîner')}</T>
                </P>
              )}
              {suggestions.map((sug) => (
                <P key={sug} c="bg-surface-container-lowest px-3.5 py-2 rounded-full shadow-sm flex-row items-center gap-1.5" onPress={() => send(sug)}>
                  <Ic n="psychology_alt" s={16} c="primary" />
                  <T c="font-label-md text-label-md text-primary">{sug}</T>
                </P>
              ))}
            </ScrollView>
          </V>
        </ScrollView>

        <V c="bg-surface px-gutter-mobile pt-space-xs pb-2 gap-space-xs" style={{ paddingBottom: insets.bottom + 8, shadowColor: '#001e31', shadowOpacity: 0.08, shadowRadius: 20, shadowOffset: { width: 0, height: -4 }, elevation: 10 }}>
          <V c="flex-row items-center justify-between px-1">
            <V c="flex-row items-center gap-1.5">
              <V c={`w-1.5 h-1.5 rounded-full ${quota?.asksLeft === 0 ? 'bg-error' : 'bg-secondary'}`} />
              <T c="font-label-sm text-label-sm text-on-surface-variant" style={{ fontWeight: '500' }}>
                {quota ? `${quota.asksLeft} ${pro ? L('questions left today', 'questions restantes') : L('free questions left today', 'questions gratuites restantes')}` : L('Checking your daily questions...', 'Vérification...')}
              </T>
            </V>
            {!pro && (
              <P c="flex-row items-center gap-0.5" onPress={() => navigation.navigate('Paywall', { reason: 'ai' })}>
                <T c="font-label-sm text-label-sm text-primary">{L('Upgrade', 'Premium')}</T>
                <Ic n="chevron_right" s={12} c="primary" />
              </P>
            )}
          </V>
          <V c="flex-row items-center gap-space-xs">
            <P c="w-11 h-11 rounded-xl bg-surface-container-high items-center justify-center" onPress={() => navigation.navigate('MarkAnswer')} accessibilityLabel="Mark a written answer">
              <Ic n="document_scanner" s={20} c="on-surface" />
            </P>
            <V c="flex-1 flex-row items-center">
              <Input
                c="flex-1 h-11 bg-surface-container-lowest pl-3 pr-3 rounded-xl text-body-md"
                placeholder={L('Ask Dr. Nkwenti anything...', 'Posez votre question...')}
                value={draft}
                onChangeText={setDraft}
                onSubmitEditing={() => send()}
                returnKeyType="send"
                maxLength={2000}
              />
            </V>
            <P c="w-11 h-11 rounded-xl bg-primary-container items-center justify-center shadow-md" onPress={() => send()} disabled={busy || !draft.trim()} accessibilityLabel="Send">
              <Ic n="send" s={20} c="on-primary" />
            </P>
          </V>
          <V c="flex-row items-center justify-center gap-1">
            <Ic n="language" s={12} c="outline" />
            <T c="font-label-sm text-outline" style={{ fontSize: 10 }}>
              {L('Answers are AI generated. Check key facts in your lessons.', 'Réponses générées par IA. Vérifiez dans vos cours.')}
            </T>
          </V>
        </V>
      </KeyboardAvoidingView>
    </V>
  );
}

