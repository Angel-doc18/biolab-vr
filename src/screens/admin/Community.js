// The founder and the CTO set the Klass8 social media pages here; every account
// sees them as "Join our community" buttons on its Me page. Leave a box empty to
// hide that platform.
import { useEffect, useState } from 'react';
import { Ic, Input, T, V } from '../../ui/kit';
import { Cta, ErrorNote, Screen, StackHeader, useToast } from '../../ui/chrome';
import { useL } from '../../i18n';
import { get } from '../../api/client';
import { put } from '../../api/adminClient';
import { PLATFORMS, PLATFORM_LOOK } from '../../ui/CommunityLinks';
import { Card } from './kit';

export default function AdminCommunity() {
  const L = useL();
  const [urls, setUrls] = useState({});
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState(null);
  const [toast, showToast] = useToast();

  useEffect(() => {
    get('/v1/community', { auth: false })
      .then((r) => setUrls(Object.fromEntries((r.links || []).map((l) => [l.kind, l.url]))))
      .catch(setError);
  }, []);

  const save = async () => {
    setBusy(true);
    setError(null);
    try {
      const r = await put('/v1/admin/community', { links: PLATFORMS.map((kind) => ({ kind, url: (urls[kind] || '').trim() })) });
      setUrls(Object.fromEntries((r.links || []).map((l) => [l.kind, l.url])));
      showToast(L('Saved. Every account now sees these buttons in Me.', 'Enregistré. Tous les comptes voient ces boutons dans Moi.'));
    } catch (e) {
      setError(e);
    } finally {
      setBusy(false);
    }
  };

  return (
    <V c="flex-1">
      <Screen
        keyboard
        header={<StackHeader title={L('Community links', 'Liens de la communauté')} avatar={false} />}
        footer={
          <V c="px-margin pt-space-sm" style={{ paddingBottom: 12 }}>
            <ErrorNote error={error} c="mb-space-sm" />
            <Cta variant="dark" icon={null} label={L('Save the links', 'Enregistrer les liens')} loading={busy} onPress={save} />
          </V>
        }
      >
        <V c="gap-space-md pt-space-md pb-space-xl">
          <T c="font-body-md text-body-md text-on-surface-variant" style={{ lineHeight: 22 }}>
            {L(
              'Paste the full address of each Klass8 page, starting with https://. Every account sees them as buttons under "Join our community" in Me. Leave a box empty to hide that platform.',
              'Collez l’adresse complète de chaque page Klass8, commençant par https://. Tous les comptes les voient comme boutons sous « Rejoignez notre communauté » dans Moi. Laissez vide pour masquer.'
            )}
          </T>
          <Card>
            <V c="p-space-md gap-space-md">
              {PLATFORMS.map((kind) => {
                const look = PLATFORM_LOOK[kind];
                return (
                  <V key={kind} c="gap-1">
                    <V c="flex-row items-center gap-2">
                      <V c="w-7 h-7 rounded-lg items-center justify-center" style={{ backgroundColor: look.color }}>
                        <Ic n={look.icon} s={16} c="#ffffff" fill />
                      </V>
                      <T c="font-label-lg text-label-lg text-on-surface" style={{ fontWeight: '700' }}>
                        {look.name}
                      </T>
                    </V>
                    <Input
                      c="h-12 px-3 rounded-lg bg-surface-container-low text-body-md"
                      placeholder="https://"
                      value={urls[kind] || ''}
                      onChangeText={(t) => setUrls((u) => ({ ...u, [kind]: t }))}
                      autoCapitalize="none"
                      autoCorrect={false}
                      keyboardType="url"
                      maxLength={300}
                    />
                  </V>
                );
              })}
            </V>
          </Card>
        </V>
      </Screen>
      {toast}
    </V>
  );
}
