// The study space's home (the centre tab): four ways to start, and every chat
// kept, newest first, to come back to and carry on. For a teacher it is their
// teaching assistant: past papers solved, notes explained, tests with marking
// guides.
import { useCallback, useState } from 'react';
import { RefreshControl } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { Ic, P, T, V } from '../../ui/kit';
import { ErrorNote, Screen, TabHeader } from '../../ui/chrome';
import { useApp } from '../../state/store';
import { useL } from '../../i18n';
import { get } from '../../api/client';
import { firstName } from '../../state/selectors';

const when = (t, L) => {
  const d = Math.floor((Date.now() - t) / 86_400_000);
  if (d <= 0) return new Date(t).toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' });
  if (d === 1) return L('Yesterday', 'Hier');
  return new Date(t).toLocaleDateString('en-GB', { day: 'numeric', month: 'short' });
};

function Starter({ icon, title, sub, onPress }) {
  return (
    <P c="w-[48.5%] p-space-md rounded-2xl bg-surface-container-lowest border border-surface-container gap-space-xs" onPress={onPress} accessibilityRole="button" accessibilityLabel={title}>
      <V c="w-11 h-11 rounded-xl bg-surface-container-low items-center justify-center">
        <Ic n={icon} s={24} c="primary-container" />
      </V>
      <T c="font-label-lg text-label-lg text-on-surface" style={{ fontWeight: '700' }}>
        {title}
      </T>
      <T c="font-body-sm text-body-sm text-on-surface-variant" style={{ lineHeight: 18 }}>
        {sub}
      </T>
    </P>
  );
}

export default function StudyHome({ navigation }) {
  const { user } = useApp();
  const L = useL();
  const teacher = user?.role === 'teacher';
  const [chats, setChats] = useState(null);
  const [error, setError] = useState(null);
  const [refreshing, setRefreshing] = useState(false);

  const load = useCallback(async () => {
    try {
      const r = await get('/v1/study/chats');
      setChats(r.chats);
      setError(null);
    } catch (e) {
      setError(e);
    }
  }, []);
  useFocusEffect(
    useCallback(() => {
      load();
    }, [load])
  );
  const open = (intent) => navigation.navigate('StudyChat', { intent });

  const starters = teacher
    ? [
        ['task_alt', L('Solve a past paper', 'Résoudre une épreuve'), L('Every question worked out, with a marking guide', 'Chaque question résolue, avec un guide de correction'), 'solve'],
        ['description', L('Explain my notes', 'Expliquer mes notes'), L('Explained, summarised, with teaching tips', 'Expliquées, résumées, avec des conseils', ), 'notes'],
        ['quiz', L('Make a test', 'Préparer un devoir'), L('Questions from your notes, with the marking scheme', 'Questions de vos notes, avec le barème'), 'quiz'],
        ['forum', L('Ask', 'Demander'), L('Plan a lesson, check an answer, anything', 'Préparer un cours, vérifier une réponse', ), 'ask'],
      ]
    : [
        ['photo_camera', L('Solve questions', 'Résoudre des questions'), L('Snap or upload a paper, homework, a worksheet', 'Photo ou fichier : épreuve, devoir, exercices'), 'solve'],
        ['description', L('Explain my notes', 'Expliquer mes notes'), L('Upload your notes, understand them fully', 'Envoyez vos notes, comprenez-les vraiment'), 'notes'],
        ['quiz', L('Revision questions', 'Questions de révision'), L('From your notes, then marked', 'À partir de vos notes, puis corrigées'), 'quiz'],
        ['forum', L('Just ask', 'Poser une question'), L('Talk it through, step by step', 'On en parle, pas à pas'), 'ask'],
      ];

  return (
    <Screen
      header={<TabHeader title={teacher ? L('Assistant', 'Assistant') : L('Study', 'Étude')} subtitle={teacher ? L('Your teaching assistant', 'Votre assistant pédagogique') : L('Your AI study partner', 'Votre partenaire d’étude IA')} />}
      refreshControl={<RefreshControl refreshing={refreshing} onRefresh={async () => (setRefreshing(true), await load(), setRefreshing(false))} />}
    >
      <V c="gap-space-lg pt-space-md pb-space-xl">
        <V c="gap-1">
          <T c="font-headline-lg text-headline-lg text-on-surface tracking-tight">
            {L('Hi', 'Bonjour')} {firstName(user?.name)}.
          </T>
          <T c="font-body-md text-body-md text-on-surface-variant">
            {teacher ? L('What are we preparing today?', 'Que préparons-nous aujourd’hui ?') : L('What are we studying today?', 'Qu’étudions-nous aujourd’hui ?')}
          </T>
        </V>

        <V c="flex-row flex-wrap justify-between gap-y-space-sm">
          {starters.map(([icon, title, sub, intent]) => (
            <Starter key={intent} icon={icon} title={title} sub={sub} onPress={() => open(intent)} />
          ))}
        </V>

        <V c="gap-space-xs">
          <T c="font-headline-sm text-headline-sm text-on-surface" style={{ fontWeight: '700' }}>
            {L('Your chats', 'Vos discussions')}
          </T>
          <ErrorNote error={error} />
          {chats && !chats.length && (
            <T c="font-body-md text-body-md text-on-surface-variant" style={{ lineHeight: 22 }}>
              {L('Nothing yet. Start with one of the four above: everything you do is kept here to come back to.', 'Rien pour l’instant. Commencez par l’un des quatre ci-dessus : tout est gardé ici.')}
            </T>
          )}
          {!!chats?.length && (
            <V c="rounded-2xl bg-surface-container-lowest border border-surface-container overflow-hidden">
              {chats.map((c, i) => (
                <P key={c.id} c={`px-space-md py-space-sm flex-row items-center gap-space-sm ${i ? 'border-t border-surface-container' : ''}`} onPress={() => navigation.navigate('StudyChat', { chatId: c.id })}>
                  <Ic n="chat_bubble" s={20} c="outline" />
                  <T c="font-body-md text-body-md text-on-surface flex-1" numberOfLines={1}>
                    {c.title}
                  </T>
                  <T c="font-label-sm text-label-sm text-on-surface-variant">{when(c.updatedAt, L)}</T>
                </P>
              ))}
            </V>
          )}
        </V>
      </V>
    </Screen>
  );
}
