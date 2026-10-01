import { useEffect, useRef, useState } from 'react';
import { Animated, Easing } from 'react-native';
import Svg, { Circle } from 'react-native-svg';
import { Avatar, Ic, T, V } from '../../ui/kit';
import { Cta, ErrorNote, Screen } from '../../ui/chrome';
import { useApp } from '../../state/store';
import { useL } from '../../i18n';
import { OnbHeader } from './Steps';
import { units } from '../../data/units';
import { lessonCount } from '../../data/lessons';

function Orbit() {
  const a = useRef(new Animated.Value(0)).current;
  const b = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    const l1 = Animated.loop(Animated.timing(a, { toValue: 1, duration: 18000, easing: Easing.linear, useNativeDriver: true }));
    const l2 = Animated.loop(Animated.timing(b, { toValue: 1, duration: 10000, easing: Easing.linear, useNativeDriver: true }));
    l1.start();
    l2.start();
    return () => (l1.stop(), l2.stop());
  }, [a, b]);
  return (
    <V c="w-28 h-28 items-center justify-center">
      <Animated.View style={{ position: 'absolute', transform: [{ rotate: a.interpolate({ inputRange: [0, 1], outputRange: ['0deg', '360deg'] }) }] }}>
        <Svg width={112} height={112} viewBox="0 0 112 112">
          <Circle cx="56" cy="56" r="50" stroke="#0369a1" strokeOpacity="0.3" strokeDasharray="6 8" strokeWidth="1.5" fill="none" />
          <Circle cx="56" cy="6" r="5" fill="#4fdbc8" />
          <Circle cx="98" cy="80" r="3.5" fill="#0369a1" opacity="0.8" />
          <Circle cx="16" cy="74" r="4" fill="#6df5e1" />
        </Svg>
      </Animated.View>
      <Animated.View style={{ position: 'absolute', transform: [{ rotate: b.interpolate({ inputRange: [0, 1], outputRange: ['360deg', '0deg'] }) }] }}>
        <Svg width={80} height={80} viewBox="0 0 80 80">
          <Circle cx="40" cy="40" r="34" stroke="#006b5f" strokeOpacity="0.4" strokeDasharray="4 6" strokeWidth="1" fill="none" />
          <Circle cx="40" cy="6" r="3" fill="#0369a1" />
        </Svg>
      </Animated.View>
      <V c="w-16 h-16 rounded-full bg-surface-container-low items-center justify-center shadow-md" style={{ borderRadius: 32 }}>
        <V c="w-12 h-12 rounded-full bg-primary-container items-center justify-center shadow-sm" style={{ borderRadius: 24 }}>
          <Ic n="biotech" s={26} c="on-primary" fill />
        </V>
      </V>
      <V c="absolute bottom-2 left-2">
        <Ic n="verified" s={16} c="secondary-fixed-dim" />
      </V>
    </V>
  );
}

function Item({ title, sub, ok = true }) {
  return (
    <V c="flex-row items-start gap-space-sm p-2 rounded-lg bg-surface-container-low/60">
      <V c={`w-6 h-6 rounded-full items-center justify-center mt-0.5 shadow-sm ${ok ? 'bg-secondary' : 'bg-surface-container-high'}`}>
        <Ic n={ok ? 'check' : 'remove'} s={15} c={ok ? 'on-secondary' : 'outline'} />
      </V>
      <V c="flex-1">
        <T c="font-label-lg text-label-lg text-on-surface" style={{ lineHeight: 18 }}>
          {title}
        </T>
        <T c="font-body-sm text-body-sm text-on-surface-variant">{sub}</T>
      </V>
    </V>
  );
}

const maskPhone = (p) => (p ? `+237 ${p.slice(3, 6)} •• •• ${p.slice(-2)}` : '');

export default function SetupDone({ navigation, route }) {
  const { user, updateMe } = useApp();
  const L = useL();
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState(null);
  const reminder = route.params?.reminder;
  const role = user?.role || 'student';
  const first = (user?.name || '').split(' ')[0];

  const finish = async (to) => {
    setBusy(true);
    setError(null);
    try {
      if (!user?.onboarded) await updateMe({ onboarded: true });
      navigation.reset({ index: to ? 1 : 0, routes: [{ name: 'Main' }, ...(to ? [{ name: to }] : [])] });
    } catch (e) {
      setError(e);
    } finally {
      setBusy(false);
    }
  };

  const items =
    role === 'student'
      ? [
          { title: `${user?.className || 'Form 5'} ${L('Biology syllabus mapped', 'programme de biologie prêt')}`, sub: `${units.length} ${L('units', 'unités')} · ${lessonCount()} ${L('lessons', 'leçons')}` },
          { title: L('3D specimens and labs installed', 'Spécimens 3D et TP installés'), sub: L('Built into the app, no download needed', 'Intégrés, sans téléchargement') },
          user?.parentPhone
            ? { title: `${L('Parent reports for', 'Rapports pour')} ${maskPhone(user.parentPhone)}`, sub: L('Weekly summary ready to share', 'Résumé hebdomadaire à partager') }
            : { title: L('Parent reports not set', 'Rapports parent non configurés'), sub: L('You can add a number later in Me', 'Ajoutez un numéro plus tard'), ok: false },
          reminder
            ? { title: `${L('Daily', 'Rappel de')} ${user?.dailyMinutes || 20} min ${L('reminder set for', 'à')} ${user?.reminderTime || '18:30'}`, sub: L('Local reminder scheduled on this phone', 'Rappel programmé sur ce téléphone') }
            : { title: L('Daily reminder off', 'Rappel désactivé'), sub: L('Allow notifications to turn it on', 'Autorisez les notifications pour l’activer'), ok: false },
        ]
      : role === 'parent'
      ? [
          { title: L('Parent account ready', 'Compte parent prêt'), sub: L('Link more children any time from Home', 'Liez d’autres enfants depuis l’accueil') },
          { title: L('Weekly reports', 'Rapports hebdomadaires'), sub: L('A new report appears every Friday', 'Un nouveau rapport chaque vendredi') },
        ]
      : [
          { title: L('Teacher account ready', 'Compte enseignant prêt'), sub: user?.schoolName || '' },
          { title: L('Share your class code', 'Partagez le code de classe'), sub: L('Students enter it during sign-up or from Me', 'Les élèves le saisissent à l’inscription') },
        ];
  const done = items.filter((i) => i.ok !== false).length;

  return (
    <Screen header={<OnbHeader label={L('All set', 'Terminé')} canBack={false} />}>
      <V c="gap-space-md pt-space-sm pb-space-lg">
        <V c="items-center pt-2 pb-1">
          <V c="absolute w-56 h-56 rounded-full bg-surface-container opacity-70" style={{ borderRadius: 112, top: -20 }} />
          <Orbit />
          <V c="items-center mt-3 px-space-sm">
            <V c="flex-row items-center gap-space-xs px-2.5 py-0.5 rounded-full bg-secondary-container/40 mb-1.5">
              <Ic n="check_circle" s={13} c="on-secondary-container" />
              <T c="font-label-sm text-label-sm text-on-secondary-container uppercase tracking-wider">{L('Setup complete', 'Configuration terminée')}</T>
            </V>
            <T c="font-headline-lg text-headline-lg text-on-background tracking-tight text-center">
              {L('Welcome', 'Bienvenue')}, {first}!
            </T>
            <T c="font-body-md text-body-md text-on-surface-variant text-center mt-1" style={{ maxWidth: 290 }}>
              {role === 'student'
                ? L('Your GCE Biology workspace is ready, online or offline.', 'Votre espace de biologie GCE est prêt, en ligne ou hors ligne.')
                : role === 'parent'
                ? L('You can now follow your child’s revision.', 'Vous pouvez suivre les révisions de votre enfant.')
                : L('Your classroom portal is ready.', 'Votre portail de classe est prêt.')}
            </T>
          </V>
        </V>

        <V c="bg-surface-container-lowest rounded-xl p-space-md shadow-md">
          <V c="flex-row items-center gap-space-md">
            <V>
              <Avatar name={user?.name} size={48} />
              <V c="absolute -bottom-0.5 -right-0.5 w-4 h-4 bg-secondary rounded-full items-center justify-center">
                <Ic n="offline_pin" s={10} c="on-secondary" />
              </V>
            </V>
            <V c="flex-1">
              <V c="flex-row items-center justify-between">
                <T c="font-headline-sm text-headline-sm text-on-background flex-1" style={{ fontWeight: '700' }} numberOfLines={1}>
                  {user?.name}
                </T>
                <V c="bg-secondary-container/30 px-1.5 py-0.5 rounded">
                  <T c="font-label-sm text-label-sm text-secondary uppercase tracking-wider">{L('Ready', 'Prêt')}</T>
                </V>
              </V>
              <V c="flex-row items-center gap-1 mt-0.5">
                <Ic n="call" s={14} c="primary" />
                <T c="font-body-sm text-body-sm text-on-surface-variant">{maskPhone(user?.phone)}</T>
              </V>
            </V>
          </V>
          {role === 'student' && (
            <V c="flex-row flex-wrap gap-1.5 mt-space-md p-2 rounded-lg bg-surface-container-low/50">
              {[
                ['auto_stories', 'GCE O-Level'],
                ['layers', user?.className],
                ['location_on', user?.schoolName],
              ]
                .filter(([, v]) => v)
                .map(([i, v]) => (
                  <V key={i} c="flex-row items-center gap-1 px-2.5 py-1 rounded-lg bg-primary-fixed">
                    <Ic n={i} s={14} c="on-primary-fixed" />
                    <T c="font-label-md text-label-md text-on-primary-fixed">{v}</T>
                  </V>
                ))}
              <V c="flex-row items-center gap-1 px-2.5 py-1 rounded-lg bg-secondary-container">
                <Ic n="military_tech" s={14} c="on-secondary-container" />
                <T c="font-label-md text-label-md text-on-secondary-container" style={{ fontWeight: '700' }}>
                  {L('Target: Grade', 'Objectif : note')} {user?.targetGrade || 'A'}
                </T>
              </V>
            </V>
          )}
        </V>

        <V c="bg-surface-container-lowest rounded-xl p-space-md shadow-md">
          <V c="flex-row items-center justify-between mb-space-sm pb-1.5">
            <V c="flex-row items-center gap-space-xs">
              <Ic n="task_alt" s={20} c="secondary" />
              <T c="font-headline-sm text-headline-sm text-on-background" style={{ fontWeight: '700' }}>
                {L('Workspace readiness', 'État de l’espace')}
              </T>
            </V>
            <V c="bg-surface-container px-2 py-0.5 rounded-full">
              <T c="font-label-sm text-label-sm text-secondary">
                {done}/{items.length} {L('ready', 'prêts')}
              </T>
            </V>
          </V>
          <V c="gap-2.5">
            {items.map((i) => (
              <Item key={i.title} {...i} />
            ))}
          </V>
        </V>
        <ErrorNote error={error} />
        <V c="gap-2.5 pt-1">
          <Cta label={role === 'student' ? L('Start learning', 'Commencer') : L('Open my dashboard', 'Ouvrir mon tableau de bord')} loading={busy} onPress={() => finish()} />
          {role === 'student' && <Cta variant="soft" h="h-11" lead="workspace_premium" icon={null} label={L('See Premium plans (from 1,500 FCFA/term)', 'Voir Premium (dès 1 500 FCFA/trimestre)')} onPress={() => finish('Paywall')} />}
        </V>
        <V c="flex-row items-center justify-center gap-1.5 pb-2">
          <Ic n="wifi_off" s={14} c="secondary" />
          <T c="font-body-sm text-body-sm text-on-surface-variant">{L('Offline first · no mobile data needed for 3D models', 'Hors ligne · pas de données pour les modèles 3D')}</T>
        </V>
      </V>
    </Screen>
  );
}
