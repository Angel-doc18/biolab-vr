// Mark one structured-question part: typed, or a photo of a handwritten answer.
import { useEffect, useState } from 'react';
import { Image, ScrollView } from 'react-native';
import { Ic, Input, P, T, V } from '../../ui/kit';
import { Cta, ErrorNote, Screen, Spinner, StackHeader } from '../../ui/chrome';
import { CriterionRow, ModelAnswer, ScoreCard, VoiceFeedback } from '../../ui/MarkReport';
import { post } from '../../api/client';
import { useApp } from '../../state/store';
import { useL, useLang } from '../../i18n';
import { bankFor } from '../../data/paper2';
import { topicLabel, unitById } from '../../data/units';
import { subjectLabel } from '../../data/subjects';
import { pickAnswerPhoto } from '../../lib/photo';

const partsFor = (subject) => bankFor(subject).flatMap((q) => q.parts.filter((p) => p.kind === 'text').map((p) => ({ q, p, key: `${q.id}:${p.label}` })));

export default function MarkAnswer({ navigation, route }) {
  const { pro, quota, setQuota, refreshQuota, subject: current } = useApp();
  const L = useL();
  const lang = useLang();
  const subject = route.params?.subject || current;
  const PARTS = partsFor(subject);
  const initial = PARTS.findIndex((x) => x.key === route.params?.key);
  const [sel, setSel] = useState(initial >= 0 ? initial : 0);
  const [picking, setPicking] = useState(route.params?.key == null);
  const [mode, setMode] = useState('type');
  const [photo, setPhoto] = useState(null);
  const [text, setText] = useState('');
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState(null);
  const [result, setResult] = useState(null);
  const item = PARTS[sel];
  const unit = item ? unitById(item.q.unit) : null;

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

  const reset = () => {
    setResult(null);
    setPhoto(null);
    setText('');
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
          subject,
          question: `${item.q.stem}\n\n(${item.p.label}) ${item.p.prompt}`,
          markScheme: item.p.scheme,
          maxMarks: item.p.marks,
          ...(mode === 'photo' ? { image: { mediaType: photo.mediaType, data: photo.base64 } } : { answerText: text.trim() }),
        },
        { timeout: 120000 }
      );
      setResult(r.result);
      setQuota((q) => (q ? { ...q, marksLeft: r.marksLeft, photosLeft: r.photosLeft } : q));
    } catch (e) {
      setError(e);
    } finally {
      setBusy(false);
    }
  };

  const left = mode === 'photo' ? quota?.photosLeft : quota?.marksLeft;

  // A subject whose structured questions are still being written.
  if (!item) {
    return (
      <Screen bg="bg-surface" header={<StackHeader title={L('Mark an answer', 'Corriger une réponse')} />}>
        <V c="pt-space-md pb-space-lg gap-space-md">
          <T c="font-body-md text-body-md text-on-surface" style={{ lineHeight: 22 }}>
            {L(
              `Answers are marked against the mark schemes of the Paper 2 questions, and the ${subjectLabel(subject, lang)} Paper 2 questions are still being written.`,
              `Les réponses sont corrigées selon les barèmes des questions de l’épreuve 2, et celles de ${subjectLabel(subject, lang)} sont encore en préparation.`
            )}
          </T>
          <T c="font-body-md text-body-md text-on-surface-variant" style={{ lineHeight: 22 }}>
            {L('Until then, the Workspace can solve a question for you step by step, and the tutor can check your working.', 'En attendant, l’espace de travail peut résoudre une question étape par étape, et le tuteur peut vérifier votre travail.')}
          </T>
          <Cta label={L('Open the Workspace', 'Ouvrir l’espace de travail')} onPress={() => navigation.replace('Workspace', { subject })} />
        </V>
      </Screen>
    );
  }

  return (
    <Screen bg="bg-surface" keyboard header={<StackHeader title={L('Mark an answer', 'Corriger une réponse')} />}>
      <V c="pt-space-md pb-space-lg gap-space-md">
        <V c="gap-space-xs">
          <V c="flex-row items-center justify-between gap-space-sm">
            <T c="font-label-md text-label-md text-on-surface-variant flex-1" numberOfLines={1}>
              {topicLabel(unit, L)}, {item.q.topic}, {item.p.marks} {item.p.marks === 1 ? L('mark', 'point') : L('marks', 'points')}
            </T>
            <P onPress={() => setPicking((x) => !x)} hitSlop={8}>
              <T c="font-label-md text-label-md text-primary-container" style={{ fontWeight: '700' }}>
                {picking ? L('Close', 'Fermer') : L('Change question', 'Changer')}
              </T>
            </P>
          </V>
          <T c="font-body-sm text-body-sm text-on-surface-variant">{item.q.stem}</T>
          <T c="font-body-lg text-body-lg text-on-surface" style={{ lineHeight: 24 }}>
            ({item.p.label}) {item.p.prompt}
          </T>
        </V>

        {picking && (
          <V c="bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden">
            <ScrollView style={{ maxHeight: 300 }} nestedScrollEnabled>
              {PARTS.map((x, i) => (
                <P
                  key={x.key}
                  c={`px-space-md py-3 ${i ? 'border-t border-surface-container' : ''} ${i === sel ? 'bg-surface-container-low' : ''}`}
                  scale={1}
                  onPress={() => {
                    setSel(i);
                    setPicking(false);
                    reset();
                  }}
                >
                  <T c="font-label-md text-label-md text-on-surface-variant">
                    {x.q.topic}, ({x.p.label}), {x.p.marks} {L('marks', 'points')}
                  </T>
                  <T c="font-body-sm text-body-sm text-on-surface" numberOfLines={2}>
                    {x.p.prompt}
                  </T>
                </P>
              ))}
            </ScrollView>
          </V>
        )}

        <V c="flex-row border-b border-surface-container">
          {[
            ['type', L('Type it', 'Taper')],
            ['photo', L('Photo of handwriting', 'Photo de l’écriture')],
          ].map(([id, label]) => (
            <P key={id} c={`flex-1 pb-2 items-center ${mode === id ? 'border-b-2 border-primary-container' : ''}`} scale={1} onPress={() => (setMode(id), setResult(null))} accessibilityRole="tab" accessibilityState={{ selected: mode === id }}>
              <T c={`font-label-lg text-label-lg ${mode === id ? 'text-on-surface' : 'text-on-surface-variant'}`} style={{ fontWeight: mode === id ? '700' : '500' }}>
                {label}
              </T>
            </P>
          ))}
        </V>

        {mode === 'photo' ? (
          <V c="gap-space-sm">
            {photo ? (
              <Image source={{ uri: photo.uri }} style={{ width: '100%', height: 260, borderRadius: 8, backgroundColor: '#eef3f7' }} resizeMode="contain" />
            ) : (
              <T c="font-body-md text-body-md text-on-surface-variant">{L('Write your answer on paper, then photograph it in good light, flat and filling the frame.', 'Écrivez votre réponse sur papier, puis photographiez-la en bonne lumière, à plat et en plein cadre.')}</T>
            )}
            <V c="flex-row gap-space-sm">
              <P c="flex-1 h-11 rounded-lg bg-primary-container flex-row items-center justify-center gap-1.5" onPress={() => take('camera')} disabled={busy}>
                <Ic n="photo_camera" s={18} c="on-primary" />
                <T c="font-label-md text-label-md text-on-primary">{photo ? L('Retake', 'Reprendre') : L('Camera', 'Appareil photo')}</T>
              </P>
              <P c="flex-1 h-11 rounded-lg bg-surface-container flex-row items-center justify-center gap-1.5" onPress={() => take('library')} disabled={busy}>
                <Ic n="photo_library" s={18} c="on-surface" />
                <T c="font-label-md text-label-md text-on-surface">{L('Gallery', 'Galerie')}</T>
              </P>
            </V>
          </V>
        ) : (
          <Input c="min-h-[150px] p-space-sm rounded-lg bg-surface-container-lowest border border-outline-variant text-body-md" multiline textAlignVertical="top" placeholder={L('Your answer', 'Votre réponse')} value={text} onChangeText={setText} maxLength={4000} />
        )}

        <ErrorNote error={error} />
        {busy ? (
          <V c="items-center gap-1 py-space-sm">
            <Spinner c="py-1" />
            <T c="font-body-sm text-body-sm text-on-surface-variant">{mode === 'photo' ? L('Reading your handwriting, then marking...', 'Lecture de votre écriture, puis correction...') : L('Marking...', 'Correction...')}</T>
          </V>
        ) : (
          <Cta variant="dark" icon={null} label={pro ? L('Mark my answer', 'Corriger ma réponse') : L('Marking comes with the full course', 'La correction fait partie du cours complet')} onPress={mark} />
        )}
        {pro && left != null && (
          <T c="font-body-sm text-body-sm text-on-surface-variant text-center">
            {left} {mode === 'photo' ? L('photo markings left today', 'corrections par photo restantes aujourd’hui') : L('markings left today', 'corrections restantes aujourd’hui')}
          </T>
        )}

        {result && (
          <V c="gap-space-md">
            <ScoreCard awarded={result.awarded} max={result.maxMarks} L={L} />
            {mode === 'photo' && !!result.transcription && (
              <V c="gap-1">
                <T c="font-label-lg text-label-lg text-on-surface" style={{ fontWeight: '700' }}>
                  {L('What was read from your photo', 'Ce qui a été lu sur votre photo')}
                </T>
                <T c="font-body-md text-body-md text-on-surface-variant" style={{ fontStyle: 'italic', lineHeight: 22 }}>
                  {result.transcription}
                </T>
              </V>
            )}
            <V c="bg-surface-container-lowest rounded-xl p-space-md shadow-sm">
              <T c="font-label-lg text-label-lg text-on-surface mb-1" style={{ fontWeight: '700' }}>
                {L('Mark scheme', 'Barème')}
              </T>
              {result.criteria.map((c, i) => (
                <CriterionRow key={i} c={c} L={L} />
              ))}
            </V>
            <VoiceFeedback text={result.feedback} L={L} lang={lang} />
            <ModelAnswer text={result.modelAnswer} L={L} />
            <V c="flex-row gap-space-sm pb-space-lg">
              <P c="flex-1 h-11 rounded-lg bg-surface-container items-center justify-center" onPress={() => (setPicking(true), reset())}>
                <T c="font-label-md text-label-md text-on-surface">{L('Another question', 'Autre question')}</T>
              </P>
              <P c="flex-1 h-11 rounded-lg bg-surface-container items-center justify-center" onPress={() => navigation.navigate('Quiz', { unitId: unit.id })}>
                <T c="font-label-md text-label-md text-on-surface">{L('Practise this unit', 'S’entraîner')}</T>
              </P>
            </V>
          </V>
        )}
      </V>
    </Screen>
  );
}
