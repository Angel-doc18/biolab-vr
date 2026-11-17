// The founder and the CTO can see the app exactly as a student, a teacher, a
// parent or a partner sees it, with their own always-free account of that kind
// (the server makes it the first time). One tap switches; the admin console's
// own session stays signed in, so going back to it is one tap too.
import { useState } from 'react';
import { Ic, P, T, V } from './kit';
import { ErrorNote } from './chrome';
import { useL } from '../i18n';
import { useApp } from '../state/store';
import { post as adminPost } from '../api/adminClient';

export const VIEW_AS = [
  ['student', 'school', 'Student', 'Élève'],
  ['teacher', 'co_present', 'Teacher', 'Enseignant'],
  ['parent', 'family_restroom', 'Parent', 'Parent'],
  ['partner', 'handshake', 'Partner', 'Partenaire'],
];

const rootOf = (navigation) => {
  let n = navigation;
  while (n?.getParent?.()) n = n.getParent();
  return n;
};

export function useViewAs(navigation) {
  const { startSession, logout } = useApp();
  const [busy, setBusy] = useState(null);
  const [error, setError] = useState(null);
  const viewAs = async (role) => {
    setBusy(role);
    setError(null);
    try {
      const r = await adminPost('/v1/admin/preview', { role });
      await startSession(r);
      rootOf(navigation).reset({ index: 0, routes: [{ name: 'Main', params: { screen: 'Home' } }] });
    } catch (e) {
      setError(e);
    } finally {
      setBusy(null);
    }
  };
  const backToAdmin = async () => {
    rootOf(navigation).reset({ index: 0, routes: [{ name: 'Admin' }] });
    await logout();
  };
  return { viewAs, backToAdmin, busy, error };
}

// Four buttons, two by two. `current`: the kind being seen now (no button for it).
export function ViewAsButtons({ current, busy, error, onPick }) {
  const L = useL();
  const one = ([role, icon, en, fr]) => {
    const on = role === current;
    return (
      <P
        key={role}
        c={`flex-1 h-14 rounded-xl flex-row items-center justify-center gap-2 ${on ? 'bg-primary-container' : 'bg-surface-container-low'}`}
        onPress={() => onPick(role)}
        disabled={!!busy || on}
        accessibilityRole="button"
        accessibilityState={{ selected: on, busy: busy === role }}
        accessibilityLabel={`${L('See the app as', 'Voir l’application comme')} ${L(en, fr)}`}
      >
        <Ic n={icon} s={20} c={on ? 'on-primary' : 'primary-container'} />
        <T c={`font-label-lg text-label-lg ${on ? 'text-on-primary' : 'text-on-surface'}`} style={{ fontWeight: '700', opacity: busy && busy !== role ? 0.5 : 1 }}>
          {busy === role ? L('Opening...', 'Ouverture...') : L(en, fr)}
        </T>
      </P>
    );
  };
  return (
    <V c="gap-2">
      <V c="flex-row gap-2">{VIEW_AS.slice(0, 2).map(one)}</V>
      <V c="flex-row gap-2">{VIEW_AS.slice(2).map(one)}</V>
      <ErrorNote error={error} />
    </V>
  );
}
