// Security, for the CTO: the addresses with the most failed sign-ins today,
// blocking an address at once (for a few hours or until unblocked), the
// addresses blocked now, and the latest security events.
import { useState } from 'react';
import { RefreshControl } from 'react-native';
import { Input, P, T, V } from '../../ui/kit';
import { Cta, ErrorNote, Screen, StackHeader, useToast } from '../../ui/chrome';
import { useL } from '../../i18n';
import { del, post } from '../../api/adminClient';
import { Card, Chips, Empty, Loading, Pill, Row, Section, ago, date, useAdminLoad } from './kit';

const EVENT = {
  login_failed: ['key_off', 'Wrong password', 'Mauvais mot de passe'],
  admin_login_failed: ['gpp_bad', 'Wrong admin password', 'Mauvais mot de passe admin'],
  admin_login: ['admin_panel_settings', 'Admin signed in', 'Connexion admin'],
  admin_password_changed: ['lock_reset', 'Admin password changed', 'Mot de passe admin changé'],
  admin_password_wrong: ['gpp_bad', 'Wrong admin password', 'Mauvais mot de passe admin'],
  admin_login_changed: ['alternate_email', 'Admin sign-in changed', 'Connexion admin changée'],
  blocked_ip: ['block', 'Blocked address tried', 'Adresse bloquée'],
  ip_blocked: ['block', 'Address blocked', 'Adresse bloquée'],
  ip_unblocked: ['lock_open', 'Address unblocked', 'Adresse débloquée'],
  user_blocked: ['person_off', 'Account blocked', 'Compte bloqué'],
  user_unblocked: ['person', 'Account unblocked', 'Compte débloqué'],
  user_deleted: ['delete', 'Account deleted', 'Compte supprimé'],
  switches: ['toggle_on', 'Switch changed', 'Interrupteur changé'],
  signed_out_users: ['logout', 'Everyone signed out', 'Tous déconnectés'],
  signed_out_admins: ['logout', 'Admins signed out', 'Admins déconnectés'],
  backup: ['backup', 'Backup made', 'Sauvegarde'],
};

export default function AdminSecurity({ route }) {
  const L = useL();
  const ev = useAdminLoad('/v1/admin/security-events');
  const sys = useAdminLoad('/v1/admin/system');
  const [ip, setIp] = useState(route.params?.ip || '');
  const [reason, setReason] = useState(route.params?.ip ? L('Attacking the server', 'Attaque du serveur') : '');
  const [hours, setHours] = useState('0');
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState(null);
  const [toast, showToast] = useToast();
  const [refreshing, setRefreshing] = useState(false);

  const block = async () => {
    setBusy(true);
    setError(null);
    try {
      await post('/v1/admin/ip-blocks', { ip: ip.trim(), reason: reason.trim(), hours: +hours });
      showToast(`${ip.trim()} ${L('is blocked', 'est bloquée')}`);
      setIp('');
      setReason('');
      sys.reload();
      ev.reload();
    } catch (e) {
      setError(e);
    } finally {
      setBusy(false);
    }
  };
  const unblock = async (addr) => {
    try {
      await del(`/v1/admin/ip-blocks/${addr}`);
      showToast(`${addr} ${L('can reach Klass8 again', 'peut de nouveau accéder à Klass8')}`);
      sys.reload();
    } catch (e) {
      showToast(e.message);
    }
  };

  return (
    <V c="flex-1">
      <Screen header={<StackHeader title={L('Security', 'Sécurité')} avatar={false} />} keyboard refreshControl={<RefreshControl refreshing={refreshing} onRefresh={async () => (setRefreshing(true), await Promise.all([ev.reload(), sys.reload()]), setRefreshing(false))} />}>
        <V c="gap-space-lg pt-space-md pb-space-xl">
          <Section title={L('Block an address now', 'Bloquer une adresse')}>
            <Card>
              <V c="p-space-md gap-space-sm">
                <T c="font-body-sm text-body-sm text-on-surface-variant">
                  {L('Everything from this internet address is turned away at once. Your own address is', 'Tout ce qui vient de cette adresse est refusé. Votre adresse est')} {sys.data?.yourIp || '...'}.
                </T>
                <Input c="h-12 px-4 rounded-xl bg-surface-container-low text-body-md font-body-md text-on-surface" placeholder={L('Address, e.g. 102.244.10.7', 'Adresse, ex. 102.244.10.7')} value={ip} onChangeText={setIp} autoCapitalize="none" keyboardType="numbers-and-punctuation" maxLength={45} />
                <Input c="h-12 px-4 rounded-xl bg-surface-container-low text-body-md font-body-md text-on-surface" placeholder={L('Why, e.g. guessing passwords', 'Pourquoi, ex. devine des mots de passe')} value={reason} onChangeText={setReason} maxLength={200} />
                <Chips
                  value={hours}
                  onChange={setHours}
                  items={[
                    ['1', L('1 hour', '1 heure')],
                    ['24', L('1 day', '1 jour')],
                    ['168', L('1 week', '1 semaine')],
                    ['0', L('Until I unblock', 'Jusqu’au déblocage')],
                  ]}
                />
                <ErrorNote error={error} />
                <Cta variant="dark" icon={null} lead="block" label={L('Block this address', 'Bloquer cette adresse')} loading={busy} onPress={block} />
              </V>
            </Card>
          </Section>

          {!!ev.data?.topIps?.length && (
            <Section title={L('Most failed sign-ins today', 'Plus d’échecs de connexion aujourd’hui')}>
              <Card>
                {ev.data.topIps.map((x, i) => (
                  <Row
                    key={x.ip}
                    first={i === 0}
                    icon="public"
                    title={x.ip}
                    sub={`${x.n} ${L('failed attempts', 'tentatives échouées')}`}
                    right={
                      <P c="h-9 px-3 rounded-lg items-center justify-center" style={{ backgroundColor: '#fdecea' }} onPress={() => (setIp(x.ip), setReason(L('Guessing passwords', 'Devine des mots de passe')))}>
                        <T c="font-label-md text-label-md text-error" style={{ fontWeight: '700' }}>
                          {L('Block', 'Bloquer')}
                        </T>
                      </P>
                    }
                  />
                ))}
              </Card>
            </Section>
          )}

          <Section title={L('Blocked now', 'Bloquées')}>
            {!!sys.data && !sys.data.blocks.length && (
              <Card>
                <Empty icon="lock_open" text={L('No address is blocked.', 'Aucune adresse bloquée.')} />
              </Card>
            )}
            {!!sys.data && sys.data.blocks.length > 0 && (
              <Card>
                {sys.data.blocks.map((b, i) => (
                  <Row
                    key={b.ip}
                    first={i === 0}
                    icon="block"
                    iconBg="#fdecea"
                    iconTint="error"
                    title={b.ip}
                    sub={`${b.reason}, ${b.until ? `${L('until', 'jusqu’au')} ${date(b.until)}` : L('until unblocked', 'jusqu’au déblocage')}`}
                    right={
                      <P c="h-9 px-3 rounded-lg bg-surface-container-low items-center justify-center" onPress={() => unblock(b.ip)}>
                        <T c="font-label-md text-label-md text-primary-container" style={{ fontWeight: '700' }}>
                          {L('Unblock', 'Débloquer')}
                        </T>
                      </P>
                    }
                  />
                ))}
              </Card>
            )}
          </Section>

          <Section title={L('Latest events', 'Derniers événements')}>
            <ErrorNote error={ev.error} />
            {ev.busy && !ev.data && <Loading />}
            {!!ev.data && (
              <Card>
                {!ev.data.items.length && <Row first icon="verified_user" title={L('Nothing yet', 'Rien pour l’instant')} />}
                {ev.data.items.slice(0, 80).map((e, i) => {
                  const k = EVENT[e.kind] || ['info', e.kind, e.kind];
                  const bad = /failed|wrong|blocked_ip/.test(e.kind);
                  return <Row key={e.id} first={i === 0} icon={k[0]} iconBg={bad ? '#fdecea' : '#e6eef7'} iconTint={bad ? 'error' : 'primary-container'} title={L(k[1], k[2])} sub={[e.detail, e.ip, ago(e.createdAt, L)].filter(Boolean).join(', ')} right={bad ? <Pill text="!" tone="bad" /> : null} />;
                })}
              </Card>
            )}
          </Section>
        </V>
      </Screen>
      {toast}
    </V>
  );
}
