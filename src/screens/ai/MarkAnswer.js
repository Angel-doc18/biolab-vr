import { useEffect, useRef, useState } from 'react';
import { Animated, Easing, Image, ScrollView } from 'react-native';
import { Ic, Input, P, T, V } from '../../ui/kit';
import { Cta, ErrorNote, Screen, StackHeader, useToast } from '../../ui/chrome';
import { CriterionRow, ModelAnswer, ScoreCard, VoiceFeedback } from '../../ui/MarkReport';
import { post } from '../../api/client';
import { useApp } from '../../state/store';
import { useL, useLang } from '../../i18n';
import { PAPER2 } from '../../data/paper2';
import { unitById } from '../../data/units';
import { pickAnswerPhoto } from '../../lib/photo';

const PARTS = PAPER2.flatMap((q, qi) => q.parts.filter((p) => p.kind === 'text').map((p) => ({ q, qi, p, key: `${q.id}:${p.label}` })));

// Lined paper with a sweeping scanner line while the answer is being marked.
function Scanner({ photo, text, scanning }) {
  const y = useRef(new Animated.Value(0)).current;
  const [h, setH] = useState(170);
  useEffect(() => {
    if (!scanning) return undefined;
    const loop = Animated.loop(
      Animated.sequence([
        Animated.timing(y, { toValue: 1, duration: 1400, easing: Easing.inOut(Easing.quad), useNativeDriver: true }),
        Animated.timing(y, { toValue: 0, duration: 1400, easing: Easing.inOut(Easing.quad), useNativeDriver: true }),
      ])
    );
    loop.start();
    return () => loop.stop();
  }, [scanning, y]);
  return (
    <V c="w-full rounded-xl overflow-hidden bg-surface-container-highest" style={{ minHeight: 170 }} onLayout={(e) => setH(e.nativeEvent.layout.height)}>
      {photo ? (
        <Image source={{ uri: photo.uri }} style={{ width: '100%', height: 260 }} resizeMode="contain" />
      ) : (
        <V c="p-space-md pl-10" style={{ minHeight: 170 }}>
          {Array.from({ length: Math.max(6, Math.ceil(h / 26)) }, (_, i) => (
            <V key={i} c="absolute left-0 right-0 bg-primary opacity-15" style={{ top: 14 + i * 26, height: 1 }} />
          ))}
          <V c="absolute top-0 bottom-0 bg-error/25" style={{ left: 28, width: 1 }} />
          <T c="font-body-md text-on-surface" style={{ fontStyle: 'italic', fontSize: 15, lineHeight: 26 }}>
            {text || ' '}
          </T>
        </V>
      )}
      {scanning && (
        <Animated.View
          pointerEvents="none"
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            height: 3,
            backgroundColor: '#4fdbc8',
            shadowColor: '#4fdbc8',
            shadowOpacity: 0.9,
            shadowRadius: 8,
            elevation: 6,
            transform: [{ translateY: y.interpolate({ inputRange: [0, 1], outputRange: [0, Math.max(0, (photo ? 260 : h) - 3)] }) }],
          }}
        />
      )}
    </V>
  );
}

export default function MarkAnswer({ navigation, route }) {
  const { pro, quota, setQuota, refreshQuota } = useApp();
  const L = useL();
  const lang = useLang();
  const initial = PARTS.findIndex((x) => x.key === route.params?.key);
  const [sel, setSel] = useState(initial >= 0 ? initial : 0);
  const [picking, setPicking] = useState(route.params?.key == null);
  const [mode, setMode] = useState('photo');
  const [photo, setPhoto] = useState(null);
  const [text, setText] = useState('');
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState(null);
  const [result, setResult] = useState(null);
  const [toast, showToast] = useToast();
  const item = PARTS[sel];
  const unit = unitById(item.q.unit);

  useEffect(() => {
    refreshQuota();
  }, [refreshQuota]);

  const take = async (source) => {
    setError(null);
    try {
      const p = await pickAnswerPhoto(source);
      if (p) {
        setPhoto(p);
        setResult(null);
      }
    } catch (e) {
      setError(e);
    }
  };

  const mark = async () => {
    if (!pro) return navigation.navigate('Paywall', { reason: 'mark' });
    if (mode === 'photo' && !photo) return setError(L('Take or choose a photo of your answer first.', 'Prenez d’abord une photo de votre réponse.'));
    if (mode === 'type' && text.trim().length < 3) return setError(L('Type your answer first.', 'Tapez d’abord votre réponse.'));
    setBusy(true);
    setError(null);
    setResult(null);
    try {
      const r = await post(
        '/v1/ai/mark',
        {
          question: `${item.q.stem}\n\n(${item.p.label}) ${item.p.prompt}`,
          markScheme: item.p.scheme,
          maxMarks: item.p.marks,
          ...(mode === 'photo' ? { image: { mediaType: photo.mediaType, data: photo.base64 } } : { answerText: text.trim() }),
        },
        { timeout: 120000 }
      );
      setResult(r.result);
      setQuota((q) => (q ? { ...q, marksLeft: r.marksLeft } : q));
    } catch (e) {
      setError(e);
    } finally {
      setBusy(false);
    }
  };

  return (
    <V c="flex-1">
      <Screen bg="bg-surface" keyboard header={<StackHeader title={L('Mark my answer', 'Corriger ma réponse')} />}>
        <V c="pt-space-md pb-space-lg gap-space-md">
          <V c="bg-surface-container-low rounded-xl p-space-md shadow-sm">
            <V c="flex-row items-center justify-between gap-space-xs mb-space-xs">
              <V c="flex-row items-center gap-1.5 px-2.5 py-1 rounded-full bg-surface-container-highest">
                <V c="w-1.5 h-1.5 rounded-full bg-secondary" />
                <T c="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">{L('Paper 2 · structured', 'Épreuve 2 · structurée')}</T>
              </V>
              <P c="flex-row items-center gap-1" onPress={() => setPicking((x) => !x)}>
                <Ic n="swap_horiz" s={16} c="secondary" />
                <T c="font-label-md text-label-md text-secondary">{L('Change question', 'Changer')}</T>
              </P>
            </V>
            <T c="font-headline-sm text-headline-sm text-on-surface mb-space-xs">
              ({item.p.label}) {item.p.prompt}
            </T>
            <T c="font-body-sm text-body-sm text-on-surface-variant" numberOfLines={picking ? 0 : 2}>
              {item.q.stem}
            </T>
            <V c="flex-row items-center justify-between pt-space-xs">
              <V c="flex-row items-center gap-1 flex-1">
                <Ic n="analytics" s={15} c="primary" />
                <T c="font-body-sm text-body-sm text-on-surface-variant" numberOfLines={1}>
                  {L('Unit', 'Unité')} {unit.n} · {item.q.topic}
                </T>
              </V>
              <V c="bg-surface-container px-2 py-0.5 rounded-lg">
                <T c="font-label-md text-label-md text-primary-container">
                  [{item.p.marks} {item.p.marks === 1 ? L('mark', 'point') : L('marks', 'points')}]
                </T>
              </V>
            </V>
          </V>

          {picking && (
            <V c="bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden">
              <ScrollView style={{ maxHeight: 280 }} nestedScrollEnabled>
                {PARTS.map((x, i) => (
                  <P
                    key={x.key}
                    c={`px-space-md py-3 ${i === sel ? 'bg-surface-container-low' : ''}`}
                    scale={1}
                    onPress={() => {
                      setSel(i);
                      setPicking(false);
                      setResult(null);
                    }}
                  >
                    <T c="font-label-sm text-label-sm text-primary">
                      {unitById(x.q.unit).short} · ({x.p.label}) · {x.p.marks} {L('marks', 'points')}
                    </T>
                    <T c="font-body-sm text-body-sm text-on-surface" numberOfLines={2}>
                      {x.p.prompt}
                    </T>
                  </P>
                ))}
              </ScrollView>
            </V>
          )}

          <V c="bg-surface-container-lowest rounded-xl p-space-md shadow-sm gap-space-sm">
            <V c="flex-row items-center justify-between">
              <V c="flex-row items-center gap-2">
                <Ic n="document_scanner" s={20} c="primary" />
                <T c="font-headline-sm text-headline-sm text-on-surface">{L('Your answer', 'Votre réponse')}</T>
              </V>
              <V c="flex-row p-0.5 bg-surface-container rounded-full">
                {[
                  ['photo', L('Photo', 'Photo')],
                  ['type', L('Type', 'Taper')],
                ].map(([id, label]) => (
                  <P key={id} c={`px-3 py-1 rounded-full ${mode === id ? 'bg-secondary-container' : ''}`} onPress={() => (setMode(id), setResult(null))}>
                    <T c={`font-label-sm text-label-sm ${mode === id ? 'text-on-secondary-container' : 'text-on-surface-variant'}`}>{label}</T>
                  </P>
                ))}
              </V>
            </V>
            {mode === 'photo' ? (
              photo || busy ? (
                <Scanner photo={photo} scanning={busy} />
              ) : (
                <V c="w-full rounded-xl bg-surface-container-highest items-center justify-center gap-2 p-space-lg" style={{ minHeight: 170 }}>
                  <Ic n="photo_camera" s={36} c="primary-container" />
                  <T c="font-body-sm text-body-sm text-on-surface-variant text-center">{L('Write your answer on paper, then photograph it in good light.', 'Écrivez sur papier puis photographiez en bonne lumière.')}</T>
                </V>
              )
            ) : busy ? (
              <Scanner text={text} scanning />
            ) : (
              <Input c="min-h-[150px] p-space-sm rounded-lg bg-surface-container-low text-body-md" multiline textAlignVertical="top" placeholder={L('Type your answer here...', 'Tapez votre réponse ici...')} value={text} onChangeText={setText} maxLength={4000} />
            )}
            {mode === 'photo' && (
              <V c="flex-row gap-space-sm pt-space-xs">
                <P c="flex-1 h-10 rounded-lg bg-surface-container flex-row items-center justify-center gap-1.5 shadow-sm" onPress={() => take('library')} disabled={busy}>
                  <Ic n="photo_library" s={18} c="primary" />
                  <T c="font-label-md text-label-md text-primary">{L('Gallery', 'Galerie')}</T>
                </P>
                <P c="flex-1 h-10 rounded-lg bg-surface-container flex-row items-center justify-center gap-1.5 shadow-sm" onPress={() => take('camera')} disabled={busy}>
                  <Ic n="photo_camera" s={18} c="primary" />
                  <T c="font-label-md text-label-md text-primary">{photo ? L('Retake', 'Reprendre') : L('Camera', 'Appareil')}</T>
                </P>
              </V>
            )}
            <ErrorNote error={error} />
            <Cta label={busy ? L('Marking your answer...', 'Correction en cours...') : pro ? L('Mark my answer', 'Corriger ma réponse') : L('Unlock marking with Premium', 'Débloquer avec Premium')} icon={pro ? 'grading' : 'workspace_premium'} loading={busy} onPress={mark} />
            {pro && quota && (
              <T c="font-label-sm text-label-sm text-on-surface-variant text-center">
                {quota.marksLeft} {L('markings left today', 'corrections restantes aujourd’hui')}
              </T>
            )}
          </V>

          {result && (
            <>
              {mode === 'photo' && !!result.transcription && (
                <V c="bg-surface-container-lowest rounded-xl p-space-md shadow-sm gap-space-sm">
                  <V c="flex-row items-center gap-2">
                    <Ic n="text_fields" s={20} c="primary" />
                    <T c="font-headline-sm text-headline-sm text-on-surface">{L('What the examiner read', 'Ce que l’examinateur a lu')}</T>
                  </V>
                  <Scanner text={result.transcription} />
                </V>
              )}
              <V c="bg-surface-container-lowest rounded-xl p-space-md shadow-sm gap-space-md">
                <ScoreCard awarded={result.awarded} max={result.maxMarks} L={L} />
                <V c="gap-space-sm">
                  <V c="flex-row items-center justify-between pb-1">
                    <T c="font-headline-sm text-headline-sm text-on-surface">{L('Mark scheme breakdown', 'Détail du barème')}</T>
                    <T c="font-label-sm text-label-sm text-on-surface-variant">
                      {result.criteria.length} {L('points', 'points')}
                    </T>
                  </V>
                  {result.criteria.map((c, i) => (
                    <CriterionRow key={i} c={c} n={i + 1} L={L} />
                  ))}
                </V>
              </V>
              <VoiceFeedback text={result.feedback} L={L} lang={lang} />
              <ModelAnswer text={result.modelAnswer} L={L} />
              <V c="gap-space-sm pb-space-lg">
                <Cta
                  icon="refresh"
                  label={L('Try another question', 'Autre question')}
                  onPress={() => {
                    setPicking(true);
                    setResult(null);
                    setPhoto(null);
                    setText('');
                    showToast(L('Pick the next question to mark', 'Choisissez la prochaine question'), 'swap_horiz');
                  }}
                />
                <Cta variant="soft" icon="fitness_center" label={L('Practise this unit', 'S’entraîner sur cette unité')} onPress={() => navigation.navigate('Quiz', { unitId: unit.id })} />
              </V>
            </>
          )}
        </V>
      </Screen>
      {toast}
    </V>
  );
}
