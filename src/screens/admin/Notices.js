// Notices about the admin's own account: new sign-ins, password and email
// changes, being signed out by the CTO. Opening the page marks them read.
import { Ic, T, V } from '../../ui/kit';
import { ErrorNote, Screen, StackHeader } from '../../ui/chrome';
import { useL } from '../../i18n';
import { Card, Empty, Loading, ago, useAdminLoad } from './kit';

export default function AdminNotices() {
  const L = useL();
  const { data, error, busy } = useAdminLoad('/v1/admin/notices');
  return (
    <Screen header={<StackHeader title={L('Notices about your account', 'Avis sur votre compte')} avatar={false} />}>
      <V c="gap-space-md pt-space-md pb-space-xl">
        <ErrorNote error={error} />
        {busy && !data && <Loading />}
        {!!data && !data.items.length && (
          <Card>
            <Empty icon="verified_user" text={L('Nothing yet. You will be told here when your account is signed in somewhere new or its details change.', 'Rien pour l’instant. Vous serez averti ici quand votre compte est utilisé ailleurs ou modifié.')} />
          </Card>
        )}
        {!!data && data.items.length > 0 && (
          <Card>
            {data.items.map((n, i) => (
              <V key={n.id} c={`flex-row gap-space-sm px-space-md py-space-sm ${i ? 'border-t border-surface-container' : ''}`}>
                <V c="w-10 h-10 rounded-full items-center justify-center" style={{ backgroundColor: n.kind === 'security' ? '#fff3d6' : '#e6eef7' }}>
                  <Ic n={n.kind === 'security' ? 'shield' : 'info'} s={20} c={n.kind === 'security' ? 'tertiary' : 'primary-container'} />
                </V>
                <V c="flex-1 gap-0.5 min-w-0">
                  <T c="font-label-lg text-label-lg text-on-surface" style={{ fontWeight: n.read ? '600' : '800' }}>
                    {n.title}
                  </T>
                  <T c="font-body-sm text-body-sm text-on-surface-variant" style={{ lineHeight: 19 }}>
                    {n.body}
                  </T>
                  <T c="font-label-sm text-label-sm text-outline">{ago(n.createdAt, L)}</T>
                </V>
              </V>
            ))}
          </Card>
        )}
      </V>
    </Screen>
  );
}
