// The CTO's System tab: one line saying whether all is well, the live numbers
// (requests, speed, errors), the services (voice, AI, payments, database),
// the server itself (disk, memory, processor, backups), open alerts with what
// to do, and the emergency switches that stop a problem at once.
import { useState } from 'react';
import { RefreshControl } from 'react-native';
import { Ic, Input, P, T, V } from '../../ui/kit';
import { Cta, ErrorNote, Screen, useToast } from '../../ui/chrome';
import { Toggle } from '../../ui/form';
import { useL } from '../../i18n';
import { post, put } from '../../api/adminClient';
import { AdminHeader, Card, Chips, Empty, Figure, Loading, Pill, Row, Section, Sheet, ago, copyText, date, useAdminLoad } from './kit';

const LEVEL = { critical: ['Urgent', 'Urgent', 'bad'], warning: ['Warning', 'Attention', 'warn'], info: ['Info', 'Info', 'info'] };
const KIND = {
  security: ['shield', 'Security', 'Sécurité'],
  failure: ['error', 'Failure', 'Panne'],
  malfunction: ['build', 'Malfunction', 'Dysfonctionnement'],
  storage: ['hard_drive', 'Storage', 'Stockage'],
  upgrade: ['upgrade', 'Upgrade', 'Mise à niveau'],
  traffic: ['trending_up', 'Traffic', 'Trafic'],
  latency: ['speed', 'Speed', 'Lenteur'],
  crash: ['phone_android', 'Phones', 'Téléphones'],
  partner: ['handshake', 'Partners', 'Partenaires'],
};
const SERVICE = { ok: ['Working', 'Fonctionne', 'ok'], down: ['Not answering', 'Ne répond pas', 'bad'], paused: ['Paused', 'En pause', 'warn'], off: ['Not set up', 'Non configuré', 'muted'] };

function report(a) {
  return [`Klass8 alert: ${a.title}`, `Level: ${a.level}, kind: ${a.kind}`, `Seen ${a.count} time(s), first ${new Date(a.firstAt).toISOString()}, last ${new Date(a.lastAt).toISOString()}`, `Detail: ${a.detail}`, a.action ? `What to do: ${a.action}` : ''].filter(Boolean).join('\n');
}

export default function AdminSystem({ navigation }) {
  const L = useL();
  const sys = useAdminLoad('/v1/admin/system');
  const [kind, setKind] = useState('');
  const alerts = useAdminLoad(`/v1/admin/alerts${kind ? `?kind=${kind}` : ''}`);
  const [toast, showToast] = useToast();
  const [refreshing, setRefreshing] = useState(false);
  const [confirm, setConfirm] = useState(null); // { key, value, title, text, action }
  const [message, setMessage] = useState('');
  const [acting, setActing] = useState(false);
  const [actError, setActError] = useState(null);
  const s = sys.data;

  const open = alerts.data?.items || [];
  const critical = open.filter((a) => a.level === 'critical').length;
  const state = !s ? null : critical ? 'bad' : open.length ? 'warn' : 'ok';

  const resolve = async (a) => {
    try {
      await post(`/v1/admin/alerts/${a.id}/resolve`, {});
      alerts.setData((d) => ({ ...d, items: d.items.filter((x) => x.id !== a.id) }));
      showToast(L('Marked as dealt with', 'Marqué comme traité'));
    } catch (e) {
      showToast(e.message);
    }
  };
  const run = async () => {
    setActing(true);
    setActError(null);
    try {
      if (confirm.key === 'signout') {
        await post('/v1/admin/system/sign-out', { who: confirm.value });
      } else if (confirm.key === 'backup') {
        const r = await post('/v1/admin/system/backup', {});
        showToast(`${L('Backup made', 'Sauvegarde faite')}: ${r.file}`);
      } else {
        const body = { [confirm.key]: confirm.value };
        if (confirm.key === 'maintenance' && confirm.value) body.maintenanceMessage = message.trim();
        await put('/v1/admin/system/switches', body);
      }
      if (confirm.key !== 'backup') showToast(L('Done', 'Fait'));
      setConfirm(null);
      sys.reload();
    } catch (e) {
      setActError(e);
    } finally {
      setActing(false);
    }
  };

  const sw = s?.switches;
  const SWITCHES = sw
    ? [
        { key: 'maintenance', on: !sw.maintenance, icon: 'construction', title: L('App open to everyone', 'Application ouverte à tous'), off: L('Maintenance: only admins can use Klass8', 'Maintenance : seuls les admins utilisent Klass8'), danger: L('Close the app for maintenance?', 'Fermer l’application pour maintenance ?'), why: L('Students, parents and teachers see your message until you open it again. Admins keep working.', 'Les utilisateurs voient votre message jusqu’à la réouverture. Les admins continuent.'), value: (on) => !on },
        { key: 'signups', on: sw.signups, icon: 'person_add', title: L('New accounts allowed', 'Nouveaux comptes autorisés'), off: L('New accounts paused', 'Nouveaux comptes en pause'), danger: L('Pause new accounts?', 'Suspendre les nouveaux comptes ?'), why: L('Use this against a wave of fake accounts.', 'Utile contre une vague de faux comptes.'), value: (on) => on },
        { key: 'logins', on: sw.logins, icon: 'login', title: L('Sign-ins allowed', 'Connexions autorisées'), off: L('Sign-ins paused (admins still can)', 'Connexions en pause (sauf admins)'), danger: L('Pause sign-ins?', 'Suspendre les connexions ?'), why: L('Use this while stopping password guessing. People already signed in carry on.', 'Utile contre des tentatives de mots de passe. Les personnes connectées continuent.'), value: (on) => on },
        { key: 'ai', on: sw.ai, icon: 'smart_toy', title: L('AI tutor on', 'Tuteur IA actif'), off: L('AI tutor paused', 'Tuteur IA en pause'), danger: L('Pause the AI tutor?', 'Suspendre le tuteur IA ?'), why: L('Use this if the AI gives wrong answers or costs too much. Lessons still work.', 'Utile si l’IA se trompe ou coûte trop. Les leçons marchent toujours.'), value: (on) => on },
        { key: 'payments', on: sw.payments, icon: 'payments', title: L('Payments open', 'Paiements ouverts'), off: L('Payments paused', 'Paiements en pause'), danger: L('Pause payments?', 'Suspendre les paiements ?'), why: L('Use this if mobile money misbehaves. Accounts stay open.', 'Utile si le mobile money a un souci. Les comptes restent ouverts.'), value: (on) => on },
      ]
    : [];

  return (
    <V c="flex-1">
      <Screen
        header={<AdminHeader title={L('System', 'Système')} subtitle={L('Health, alerts and security', 'Santé, alertes et sécurité')} />}
        keyboard
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={async () => (setRefreshing(true), await Promise.all([sys.reload(), alerts.reload()]), setRefreshing(false))} />}
      >
        <V c="gap-space-lg pt-space-md pb-space-xl">
          <ErrorNote error={sys.error} />
          {sys.busy && !s && <Loading />}
          {!!s && (
            <V c="p-space-md rounded-xl flex-row items-center gap-space-sm" style={{ backgroundColor: state === 'bad' ? '#fdecea' : state === 'warn' ? '#fff3d6' : '#e3f4ec' }}>
              <Ic n={state === 'ok' ? 'check_circle' : state === 'bad' ? 'error' : 'warning'} s={30} c={state === 'ok' ? 'secondary' : state === 'bad' ? 'error' : 'tertiary'} fill />
              <V c="flex-1 gap-0.5">
                <T c="font-headline-sm text-headline-sm text-on-surface" style={{ fontWeight: '800' }}>
                  {state === 'ok' ? L('All systems normal', 'Tout fonctionne') : state === 'bad' ? `${critical} ${L('urgent alerts', 'alertes urgentes')}` : `${open.length} ${open.length === 1 ? L('alert to look at', 'alerte à voir') : L('alerts to look at', 'alertes à voir')}`}
                </T>
                <T c="font-body-sm text-body-sm text-on-surface-variant">
                  {L('Server up for', 'Serveur actif depuis')} {s.machine.uptimeHours} h, {s.app?.version ? `${L('app', 'app')} v${String(s.app.version).replace(/^v/i, '')}` : ''}
                </T>
              </V>
            </V>
          )}

          {!!s && (
            <Section title={L('Right now', 'En ce moment')}>
              <Card>
                <V c="p-space-md flex-row flex-wrap gap-2">
                  <Figure value={`${s.now.perMinute}/min`} label={L('requests to the server', 'requêtes au serveur')} />
                  <Figure value={s.now.p95 ? `${(s.now.p95 / 1000).toFixed(2)} s` : '-'} label={L('slowest 1 in 20 answers', 'le 1/20 le plus lent')} tone={s.now.p95 > 1500 ? 'warn' : 'ok'} />
                  <Figure value={`${s.now.errorsLast5}`} label={L('server errors in 5 min', 'erreurs serveur en 5 min')} tone={s.now.errorsLast5 ? 'warn' : 'ok'} />
                  <Figure value={`${s.failedSignInsToday}`} label={L('wrong passwords today', 'mauvais mots de passe aujourd’hui')} tone={s.failedSignInsToday > 50 ? 'warn' : undefined} />
                </V>
              </Card>
            </Section>
          )}

          <Section title={L('Alerts', 'Alertes')} action={L('Problems', 'Problèmes')} onAction={() => navigation.navigate('AdminProblems')}>
            <V c="gap-space-sm">
              <Chips value={kind} onChange={setKind} items={[['', L('All', 'Toutes')], ...Object.entries(KIND).map(([k, v]) => [k, L(v[1], v[2])])]} />
              {!!alerts.data && !open.length && (
                <Card>
                  <Empty icon="verified" text={L('No open alerts. The server checks itself every minute.', 'Aucune alerte. Le serveur se vérifie chaque minute.')} />
                </Card>
              )}
              {open.map((a) => {
                const lv = LEVEL[a.level] || LEVEL.info;
                const k = KIND[a.kind] || ['info', a.kind, a.kind];
                return (
                  <Card key={a.id}>
                    <V c="p-space-md gap-space-sm">
                      <V c="flex-row items-start gap-space-sm">
                        <V c="w-10 h-10 rounded-full items-center justify-center" style={{ backgroundColor: a.level === 'critical' ? '#fdecea' : a.level === 'warning' ? '#fff3d6' : '#e6eef7' }}>
                          <Ic n={k[0]} s={20} c={a.level === 'critical' ? 'error' : a.level === 'warning' ? 'tertiary' : 'primary-container'} />
                        </V>
                        <V c="flex-1 gap-0.5 min-w-0">
                          <T c="font-label-lg text-label-lg text-on-surface" style={{ fontWeight: '700' }}>
                            {a.title}
                          </T>
                          <T c="font-label-sm text-label-sm text-outline">
                            {L(k[1], k[2])}, {a.count > 1 ? `${a.count} ${L('times', 'fois')}, ` : ''}
                            {ago(a.lastAt, L)}
                          </T>
                        </V>
                        <Pill text={L(lv[0], lv[1])} tone={lv[2]} />
                      </V>
                      <T c="font-body-sm text-body-sm text-on-surface" style={{ lineHeight: 19 }} selectable>
                        {a.detail}
                      </T>
                      {!!a.action && (
                        <V c="p-space-sm rounded-lg bg-surface-container-low flex-row gap-2">
                          <Ic n="lightbulb" s={18} c="primary-container" />
                          <T c="flex-1 font-body-sm text-body-sm text-on-surface" style={{ lineHeight: 19 }}>
                            {a.action}
                          </T>
                        </V>
                      )}
                      <V c="flex-row gap-2">
                        <P c="flex-1 h-10 rounded-xl bg-surface-container-low flex-row items-center justify-center gap-1.5" onPress={() => copyText(report(a), showToast, L)}>
                          <Ic n="content_copy" s={17} c="primary-container" />
                          <T c="font-label-md text-label-md text-primary-container" style={{ fontWeight: '700' }}>
                            {L('Copy', 'Copier')}
                          </T>
                        </P>
                        {a.kind === 'security' && /\d+\.\d+\.\d+\.\d+/.test(a.detail) && (
                          <P c="flex-1 h-10 rounded-xl flex-row items-center justify-center gap-1.5" style={{ backgroundColor: '#fdecea' }} onPress={() => navigation.navigate('AdminSecurity', { ip: a.detail.match(/\d+\.\d+\.\d+\.\d+/)[0] })}>
                            <Ic n="block" s={17} c="error" />
                            <T c="font-label-md text-label-md text-error" style={{ fontWeight: '700' }}>
                              {L('Block address', 'Bloquer l’adresse')}
                            </T>
                          </P>
                        )}
                        <P c="flex-1 h-10 rounded-xl bg-primary flex-row items-center justify-center gap-1.5" onPress={() => resolve(a)}>
                          <Ic n="done" s={17} c="on-primary" />
                          <T c="font-label-md text-label-md text-on-primary" style={{ fontWeight: '700' }}>
                            {L('Dealt with', 'Traité')}
                          </T>
                        </P>
                      </V>
                    </V>
                  </Card>
                );
              })}
            </V>
          </Section>

          {!!s && (
            <Section title={L('Services', 'Services')}>
              <Card>
                {[
                  ['record_voice_over', L('Natural voice', 'Voix naturelle'), s.services.voice, s.services.voice.ms ? `${s.services.voice.ms} ms${s.services.voice.waiting ? `, ${s.services.voice.waiting} ${L('waiting', 'en attente')}` : ''}` : ''],
                  ['smart_toy', L('AI tutor', 'Tuteur IA'), s.services.ai, s.services.ai.provider || ''],
                  ['payments', L('Mobile money (Fapshi)', 'Mobile money (Fapshi)'), s.services.payments, s.services.payments.mode === 'live' ? L('live', 'réel') : L('test mode', 'mode test')],
                  ['database', L('Database', 'Base de données'), s.services.database, `${s.services.database.accounts} ${L('accounts', 'comptes')}, ${s.machine.dbMb ?? '-'} MB`],
                ].map(([icon, name, sv, sub], i) => {
                  const st = SERVICE[sv.state] || SERVICE.off;
                  return <Row key={name} first={i === 0} icon={icon} title={name} sub={sub} right={<Pill text={L(st[0], st[1])} tone={st[2]} />} />;
                })}
              </Card>
            </Section>
          )}

          {!!s && (
            <Section title={L('The server', 'Le serveur')}>
              <Card>
                <Row first icon="hard_drive" title={s.machine.disk ? `${s.machine.disk.usedPct}% ${L('of the disk used', 'du disque utilisé')}` : L('Disk', 'Disque')} sub={s.machine.disk ? `${s.machine.disk.freeGb} GB ${L('free of', 'libres sur')} ${s.machine.disk.totalGb} GB` : ''} right={s.machine.disk && <Pill text={s.machine.disk.usedPct >= 85 ? L('Getting full', 'Presque plein') : L('Fine', 'Correct')} tone={s.machine.disk.usedPct >= 85 ? 'warn' : 'ok'} />} />
                <Row icon="memory" title={`${s.machine.memory.freeMb} MB ${L('memory free', 'de mémoire libre')}`} sub={`${L('of', 'sur')} ${s.machine.memory.totalMb} MB, ${L('the API uses', 'l’API utilise')} ${s.machine.memory.usedMb} MB`} />
                <Row icon="developer_board" title={`${L('Processor load', 'Charge processeur')} ${s.machine.load[1]}`} sub={`${s.machine.cpus} ${L('processors; above', 'processeurs ; au-delà de')} ${s.machine.cpus * 2} ${L('is too much', 'c’est trop')}`} />
                <Row icon="backup" title={`${s.machine.backups.count} ${L('backups kept', 'sauvegardes gardées')}`} sub={s.machine.backups.latestAt ? `${L('Newest', 'La plus récente')} ${date(s.machine.backups.latestAt)}, ${s.machine.backups.mb} MB` : L('None yet', 'Aucune')} />
              </Card>
              <Cta variant="soft" icon={null} lead="backup" label={L('Make a backup now', 'Sauvegarder maintenant')} onPress={() => (setActError(null), setConfirm({ key: 'backup', title: L('Make a backup now?', 'Sauvegarder maintenant ?'), text: L('A full copy of the database is saved on the server, beside the nightly ones.', 'Une copie complète de la base est enregistrée sur le serveur.'), action: L('Make the backup', 'Sauvegarder') }))} c="mt-space-sm" />
            </Section>
          )}

          {!!sw && (
            <Section title={L('Emergency switches', 'Interrupteurs d’urgence')}>
              <Card>
                {SWITCHES.map((x, i) => (
                  <V key={x.key} c={`flex-row items-center gap-space-sm px-space-md py-space-sm ${i ? 'border-t border-surface-container' : ''}`} style={{ minHeight: 60 }}>
                    <V c="w-10 h-10 rounded-full items-center justify-center" style={{ backgroundColor: x.on ? '#e3f4ec' : '#fdecea' }}>
                      <Ic n={x.icon} s={20} c={x.on ? 'secondary' : 'error'} />
                    </V>
                    <T c="flex-1 font-label-lg text-label-lg text-on-surface" style={{ fontWeight: '600' }}>
                      {x.on ? x.title : x.off}
                    </T>
                    <Toggle
                      on={x.on}
                      onPress={() => {
                        setActError(null);
                        setMessage(sw.maintenanceMessage || '');
                        setConfirm(x.on ? { key: x.key, value: x.value(false), title: x.danger, text: x.why, action: L('Yes, switch it', 'Oui, basculer'), danger: true } : { key: x.key, value: x.value(true), title: L('Switch it back on?', 'Rallumer ?'), text: x.title, action: L('Switch on', 'Allumer') });
                      }}
                      accessibilityLabel={x.title}
                    />
                  </V>
                ))}
              </Card>
              <V c="gap-space-sm mt-space-sm">
                <Cta variant="soft" icon={null} lead="logout" label={L('Sign every user out', 'Déconnecter tous les utilisateurs')} onPress={() => (setActError(null), setConfirm({ key: 'signout', value: 'users', danger: true, title: L('Sign every user out?', 'Déconnecter tous les utilisateurs ?'), text: L('Every student, parent and teacher is signed out on every phone at once and signs in again. Use this after a leak.', 'Chacun est déconnecté partout et se reconnecte. À utiliser après une fuite.'), action: L('Sign them all out', 'Tout déconnecter') }))} />
                <Cta variant="soft" icon={null} lead="admin_panel_settings" label={L('Sign the other admins out', 'Déconnecter les autres admins')} onPress={() => (setActError(null), setConfirm({ key: 'signout', value: 'admins', danger: true, title: L('Sign the other admins out?', 'Déconnecter les autres admins ?'), text: L('Every other admin session ends now. You stay signed in.', 'Toutes les autres sessions admin se terminent. Vous restez connecté.'), action: L('Sign them out', 'Les déconnecter') }))} />
                <Cta variant="soft" icon={null} lead="shield" label={L('Security and blocked addresses', 'Sécurité et adresses bloquées')} onPress={() => navigation.navigate('AdminSecurity')} />
              </V>
            </Section>
          )}
        </V>
      </Screen>
      <Sheet visible={!!confirm} onClose={() => !acting && setConfirm(null)} icon={confirm?.danger ? 'warning' : 'help'} danger={!!confirm?.danger} busy={acting} cancel={L('Cancel', 'Annuler')} title={confirm?.title} text={confirm?.text} action={confirm?.action} onAction={run}>
        {confirm?.key === 'maintenance' && confirm.value === true && (
          <Input
            c="min-h-[70px] px-4 py-3 rounded-xl bg-surface-container-low text-body-md font-body-md text-on-surface"
            placeholder={L('Message for users, e.g. Back at 3 pm.', 'Message, ex. Retour à 15 h.')}
            value={message}
            onChangeText={setMessage}
            maxLength={200}
            multiline
            textAlignVertical="top"
          />
        )}
        <ErrorNote error={actError} />
      </Sheet>
      {toast}
    </V>
  );
}
