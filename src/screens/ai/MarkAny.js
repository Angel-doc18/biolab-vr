// Marking any question: a Paper 3 question, a past paper, homework. One stage
// at a time: the question (photo or typed), then the answer worked on paper
// (photo or typed), then the marking. The server writes an examiner's mark
// scheme for the question and marks the answer on it.
import { useEffect, useState } from 'react';
import { Image } from 'react-native';
import { Ic, Input, P, T, V } from '../../ui/kit';
import { Cta, ErrorNote, Screen, Spinner, StackHeader } from '../../ui/chrome';
import { CriterionRow, ModelAnswer, ScoreCard, VoiceFeedback } from '../../ui/MarkReport';
import { post } from '../../api/client';
import { useApp } from '../../state/store';
import { useL, useLang } from '../../i18n';
import { subjectName } from '../../data/subjects';
import { pickAnswerPhoto } from '../../lib/photo';
import { NeedsInternet } from '../../ui/Offline';

function PhotoButtons({ onPick, busy, L, again }) {
  return (
    <V c="flex-row gap-space-sm">
      <P c="flex-1 h-12 rounded-xl bg-primary-container flex-row items-center justify-center gap-1.5" onPress={() => onPick('camera')} disabled={busy}>
        <Ic n="photo_camera" s={20} c="on-primary" />
        <T c="font-label-lg text-label-lg text-on-primary" style={{ fontWeight: '700' }}>
          {again ? L('Retake', 'Reprendre') : L('Take a photo', 'Prendre une photo')}
        </T>
      </P>
      <P c="flex-1 h-12 rounded-xl bg-surface-container-low flex-row items-center justify-center gap-1.5" onPress={() => onPick('library')} disabled={busy}>
        <Ic n="photo_library" s={20} c="on-surface" />
        <T c="font-label-lg text-label-lg text-on-surface" style={{ fontWeight: '700' }}>
          {L('Upload', 'Importer')}
        </T>
      </P>
    </V>
  );
}

function ModeTabs({ mode, onChange, L }) {
  return (
    <V c="flex-row border-b border-surface-container">
      {[
        ['photo', L('Photo', 'Photo')],
        ['type', L('Type it', 'Taper')],
      ].map(([id, label]) => (
        <P key={id} c={`flex-1 pb-2 items-center ${mode === id ? 'border-b-2 border-primary-container' : ''}`} scale={1} onPress={() => onChange(id)} accessibilityRole="tab" accessibilityState={{ selected: mode === id }}>
          <T c={`font-label-lg text-label-lg ${mode === id ? 'text-on-surface' : 'text-on-surface-variant'}`} style={{ fontWeight: mode === id ? '700' : '500' }}>
            {label}
          </T>
        </P>
      ))}
    </V>
  );
}

function Preview({ photo }) {
  return <Image source={{ uri: photo.uri }} style={{ width: '100%', height: 240, borderRadius: 12, backgroundColor: '#eef3f7' }} resizeMode="contain" />;
}

export default function MarkAny({ navigation, route }) {
  const { pro, quota, setQuota, refreshQuota, subject: current } = useApp();
  const L = useL();
  const lang = useLang();
  const subject = route.params?.subject || current;
  const [stage, setStage] = useState('question'); // question, answer, result
  const [qPhoto, setQPhoto] = useState(null);
  const [qText, setQText] = useState(route.params?.question || '');
  const [qMode, setQMode] = useState(route.params?.question ? 'type' : 'photo');
  const [aPhoto, setAPhoto] = useState(null);
  const [aText, setAText] = useState('');
  const [aMode, setAMode] = useState('photo');
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState(null);
  const [result, setResult] = useState(null); // { question, result }

  useEffect(() => {
    refreshQuota();
  }, [refreshQuota]);

  const pick = (set) => async (source) => {
    setError(null);
    try {
      const p = await pickAnswerPhoto(source);
      if (p) set(p);
    } catch (e) {
      setError(e);
    }
  };

  const toAnswer = () => {
    if (qMode === 'photo' && !qPhoto) return setError(L('Photograph the question, or type it.', 'Photographiez la question, ou tapez-la.'));
    if (qMode === 'type' && qText.trim().length < 5) return setError(L('Type the whole question, with its marks if they are shown.', 'Tapez toute la question, avec ses points s’ils sont indiqués.'));
    setError(null);
    setStage('answer');
  };

  const mark = async () => {
    if (!pro) return navigation.navigate('Paywall', { reason: 'mark' });
    if (aMode === 'photo' && !aPhoto) return setError(L('Photograph your answer, or type it.', 'Photographiez votre réponse, ou tapez-la.'));
    if (aMode === 'type' && aText.trim().length < 2) return setError(L('Type your answer first.', 'Tapez d’abord votre réponse.'));
    setBusy(true);
    setError(null);
    try {
      const r = await post(
        '/v1/ai/mark-any',
        {
          subject,
          ...(qMode === 'photo' ? { questionImage: { mediaType: qPhoto.mediaType, data: qPhoto.base64 } } : { question: qText.trim() }),
          ...(aMode === 'photo' ? { answerImage: { mediaType: aPhoto.mediaType, data: aPhoto.base64 } } : { answerText: aText.trim() }),
        },
        { timeout: 180000 }
      );
      setResult(r);
      setStage('result');
      setQuota((q) => (q ? { ...q, marksLeft: r.marksLeft, photosLeft: r.photosLeft } : q));
    } catch (e) {
      setError(e);
      if (e.code === 'quota') refreshQuota();
    } finally {
      setBusy(false);
    }
  };

  const restart = () => {
    setStage('question');
    setQPhoto(null);
    setQText('');
    setAPhoto(null);
    setAText('');
    setResult(null);
    setError(null);
  };

  const left = quota ? (qMode === 'photo' || aMode === 'photo' ? quota.photosLeft : quota.marksLeft) : null;
  const stepNo = stage === 'question' ? 1 : stage === 'answer' ? 2 : 3;

  return (
    <Screen
      bg="bg-surface"
      keyboard
      header={<StackHeader title={L('Mark my working', 'Corriger mon travail')} subtitle={subjectName(subject, lang)} subtitleColor="on-surface-variant" avatar={false} />}
      footer={
        stage === 'result' ? null : (
          <V c="px-margin pt-space-sm gap-space-xs" style={{ paddingBottom: 12 }}>
            <NeedsInternet what={{ en: 'have your work marked', fr: 'faire corriger votre travail' }} />
            <ErrorNote error={error} />
            {busy ? (
              <V c="items-center gap-1 py-space-sm">
                <Spinner c="py-1" />
                <T c="font-body-sm text-body-sm text-on-surface-variant text-center">{L('Reading the question and your working, writing the mark scheme, then marking...', 'Lecture de la question et de votre travail, rédaction du barème, puis correction...')}</T>
              </V>
            ) : stage === 'question' ? (
              <Cta variant="dark" icon={null} label={L('Next: my answer', 'Suivant : ma réponse')} onPress={toAnswer} />
            ) : (
              <Cta variant="dark" icon={null} label={pro ? L('Mark my answer', 'Corriger ma réponse') : L('Marking comes with the full course', 'La correction fait partie du cours complet')} onPress={mark} />
            )}
          </V>
        )
      }
    >
      <V c="pt-space-md pb-space-xl gap-space-md">
        <T c="font-label-md text-label-md text-on-surface-variant">{L(`Step ${stepNo} of 3`, `Étape ${stepNo} sur 3`)}</T>

        {stage === 'question' && (
          <>
            <V c="gap-space-xs">
              <T c="font-headline-lg text-headline-lg text-on-surface tracking-tight">{L('The question', 'La question')}</T>
              <T c="font-body-md text-body-md text-on-surface-variant" style={{ lineHeight: 22 }}>
                {L('Any question: Paper 3, a past paper, a worksheet or homework. Include its marks if they are shown.', 'N’importe quelle question : épreuve 3, ancienne épreuve, fiche ou devoir. Incluez ses points s’ils sont indiqués.')}
              </T>
            </V>
            <ModeTabs mode={qMode} onChange={(m) => (setQMode(m), setError(null))} L={L} />
            {qMode === 'photo' ? (
              <V c="gap-space-sm">
                {qPhoto && <Preview photo={qPhoto} />}
                <PhotoButtons onPick={pick(setQPhoto)} busy={busy} L={L} again={!!qPhoto} />
              </V>
            ) : (
              <Input c="min-h-[150px] p-space-sm rounded-xl bg-surface-container-lowest border border-outline-variant text-body-md" multiline textAlignVertical="top" placeholder={L('The whole question, with its marks', 'Toute la question, avec ses points')} value={qText} onChangeText={setQText} maxLength={3000} />
            )}
          </>
        )}

        {stage === 'answer' && (
          <>
            <V c="gap-space-xs">
              <T c="font-headline-lg text-headline-lg text-on-surface tracking-tight">{L('Your answer', 'Votre réponse')}</T>
              <T c="font-body-md text-body-md text-on-surface-variant" style={{ lineHeight: 22 }}>
                {L('Work it out on paper as in the exam, then photograph your working: flat, in good light, filling the frame.', 'Faites-le sur papier comme à l’examen, puis photographiez votre travail : à plat, en bonne lumière, en plein cadre.')}
              </T>
            </V>
            <ModeTabs mode={aMode} onChange={(m) => (setAMode(m), setError(null))} L={L} />
            {aMode === 'photo' ? (
              <V c="gap-space-sm">
                {aPhoto && <Preview photo={aPhoto} />}
                <PhotoButtons onPick={pick(setAPhoto)} busy={busy} L={L} again={!!aPhoto} />
              </V>
            ) : (
              <Input c="min-h-[150px] p-space-sm rounded-xl bg-surface-container-lowest border border-outline-variant text-body-md" multiline textAlignVertical="top" placeholder={L('Your answer', 'Votre réponse')} value={aText} onChangeText={setAText} maxLength={6000} />
            )}
            <P c="self-start py-1" onPress={() => setStage('question')} hitSlop={8}>
              <T c="font-label-md text-label-md text-primary-container" style={{ fontWeight: '700' }}>
                {L('Change the question', 'Changer la question')}
              </T>
            </P>
            {pro && left != null && (
              <T c="font-body-sm text-body-sm text-on-surface-variant">
                {left} {qMode === 'photo' || aMode === 'photo' ? L('photo markings left today', 'corrections par photo restantes aujourd’hui') : L('markings left today', 'corrections restantes aujourd’hui')}
              </T>
            )}
          </>
        )}

        {stage === 'result' && result && (
          <V c="gap-space-md">
            <ScoreCard awarded={result.result.awarded} max={result.result.maxMarks} L={L} />
            <V c="gap-1 p-space-md rounded-xl bg-surface-container-lowest border border-outline-variant">
              <T c="font-label-lg text-label-lg text-on-surface" style={{ fontWeight: '700' }}>
                {L('The question', 'La question')}
              </T>
              <T c="font-body-md text-body-md text-on-surface-variant" style={{ lineHeight: 22 }}>
                {result.question}
              </T>
            </V>
            {aMode === 'photo' && !!result.result.transcription && (
              <V c="gap-1">
                <T c="font-label-lg text-label-lg text-on-surface" style={{ fontWeight: '700' }}>
                  {L('What was read from your working', 'Ce qui a été lu sur votre travail')}
                </T>
                <T c="font-body-md text-body-md text-on-surface-variant" style={{ fontStyle: 'italic', lineHeight: 22 }}>
                  {result.result.transcription}
                </T>
              </V>
            )}
            <V c="bg-surface-container-lowest rounded-xl p-space-md shadow-sm">
              <T c="font-label-lg text-label-lg text-on-surface mb-1" style={{ fontWeight: '700' }}>
                {L('Mark scheme', 'Barème')}
              </T>
              {result.result.criteria.map((c, i) => (
                <CriterionRow key={i} c={c} L={L} />
              ))}
            </V>
            <VoiceFeedback text={result.result.feedback} L={L} lang={lang} />
            <ModelAnswer text={result.result.modelAnswer} L={L} />
            <T c="font-body-sm text-body-sm text-on-surface-variant" style={{ lineHeight: 18 }}>
              {L('The mark scheme was written by the AI tutor for this question, as an examiner would. Check it with your teacher for important work.', 'Le barème a été rédigé par le tuteur IA pour cette question, comme le ferait un examinateur. Vérifiez-le avec votre enseignant pour un travail important.')}
            </T>
            <V c="gap-space-sm pb-space-lg">
              <Cta variant="dark" icon="co_present" label={L('Solve this question on the board', 'Résoudre cette question au tableau')} onPress={() => navigation.navigate('Workspace', { subject, question: result.question })} />
              <Cta variant="soft" icon={null} label={L('Mark another question', 'Corriger une autre question')} onPress={restart} />
            </V>
          </V>
        )}
      </V>
    </Screen>
  );
}
