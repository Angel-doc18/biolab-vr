import { useEffect, useState } from 'react';
import { Ic, Input, T, V } from '../../ui/kit';
import { Cta, ErrorNote, Screen, StackHeader, useToast } from '../../ui/chrome';
import { get, post } from '../../api/client';
import { useApp } from '../../state/store';
import { useL } from '../../i18n';

export default function JoinClass() {
  const { refreshMe } = useApp();
  const L = useL();
  const [code, setCode] = useState('');
  const [classes, setClasses] = useState([]);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState(null);
  const [toast, showToast] = useToast();

  const load = () =>
    get('/v1/me/classes')
      .then((r) => setClasses(r.items))
      .catch(() => {});
  useEffect(() => {
    load();
  }, []);

  const join = async () => {
    if (code.trim().length < 6) return setError(L('Enter the full class code.', 'Entrez le code complet.'));
    setBusy(true);
    setError(null);
    try {
      const r = await post('/v1/classes/join', { code: code.trim().toUpperCase() });
      setCode('');
      showToast(`${L('Joined', 'Classe rejointe :')} ${r.class.name}`);
      refreshMe().catch(() => {});
      load();
    } catch (e) {
      setError(e);
    } finally {
      setBusy(false);
    }
  };

  return (
    <V c="flex-1">
      <Screen keyboard header={<StackHeader title={L('Join a class', 'Rejoindre une classe')} />}>
        <V c="pt-space-md gap-space-md pb-space-xl">
          <V c="gap-space-xs">
            <T c="font-headline-lg text-headline-lg text-on-surface">{L('Enter your class code', 'Entrez le code de classe')}</T>
            <T c="font-body-md text-body-md text-on-surface-variant">{L('Your teacher shares a code like GBHS-4K7PQX. Joining lets you receive their assignments and lets them see your progress.', 'Votre enseignant partage un code comme GBHS-4K7PQX.')}</T>
          </V>
          <Input
            c="h-14 px-4 rounded-xl bg-surface-container-low text-headline-sm font-headline-sm tracking-widest text-center shadow-sm"
            value={code}
            onChangeText={(t) => setCode(t.toUpperCase().replace(/[^A-Z0-9-]/g, ''))}
            autoCapitalize="characters"
            placeholder="XXXX-XXXXXX"
            maxLength={20}
          />
          <ErrorNote error={error} />
          <Cta label={L('Join class', 'Rejoindre')} icon="group_add" loading={busy} onPress={join} />
          {classes.length > 0 && (
            <V c="gap-space-sm pt-space-sm">
              <T c="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">{L('Your classes', 'Vos classes')}</T>
              {classes.map((c) => (
                <V key={c.id} c="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex-row items-center gap-3">
                  <V c="w-10 h-10 rounded-xl bg-secondary-container items-center justify-center">
                    <Ic n="groups" s={22} c="on-secondary-container" />
                  </V>
                  <V c="flex-1">
                    <T c="font-headline-sm text-headline-sm text-on-surface">{c.name}</T>
                    <T c="font-body-sm text-body-sm text-on-surface-variant">{[c.teacherName, c.schoolName].filter(Boolean).join(' · ')}</T>
                  </V>
                </V>
              ))}
            </V>
          )}
        </V>
      </Screen>
      {toast}
    </V>
  );
}
