// The admin console, for Klass8's own admin accounts (made on the server with
// make-admin.sh, apart from every student, parent and teacher account, and
// signed in on the same sign-in page as everyone): the figures, accounts (with days given or taken), payments,
// schools (codes and licence requests), and the team shown on the website.
import { useCallback, useEffect, useState } from 'react';
import { ActivityIndicator, RefreshControl, ScrollView } from 'react-native';
import * as Clipboard from 'expo-clipboard';
import { C, Ic, Input, P, T, V } from '../../ui/kit';
import { Cta, ErrorNote, Screen, StackHeader, useToast } from '../../ui/chrome';
import { adminSignOut, currentAdmin, get, loadAdminSession, onAdminSignedOut, post } from '../../api/adminClient';
import { useL } from '../../i18n';
import { fcfa } from '../../data/plan';
import AdminTeam from './AdminTeam';

const date = (t) => (t ? new Date(t).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' }) : '-');
const phoneText = (p) => (p ? `+${p.slice(0, 3)} ${p.slice(3, 6)} ${p.slice(6, 8)} ${p.slice(8, 10)} ${p.slice(10)}` : '');
const TABS = [
  ['overview', 'Overview', 'Résumé'],
  ['accounts', 'Accounts', 'Comptes'],
  ['payments', 'Payments', 'Paiements'],
  ['schools', 'Schools', 'Écoles'],
  ['team', 'Team', 'Équipe'],
];

function Card({ title, children }) {
  return (
    <V c="bg-surface-container-lowest rounded-xl border border-surface-container p-space-md gap-space-xs">
      {!!title && (
        <T c="font-label-lg text-label-lg text-on-surface" style={{ fontWeight: '700' }}>
          {title}
        </T>
      )}
      {children}
    </V>
  );
}

function Line({ label, value, strong }) {
  return (
    <V c="flex-row items-center justify-between gap-space-sm py-1">
      <T c="font-body-sm text-body-sm text-on-surface-variant flex-1">{label}</T>
      <T c="font-label-lg text-label-lg text-on-surface" style={{ fontWeight: strong ? '700' : '500', fontVariant: ['tabular-nums'] }}>
        {value}
      </T>
    </V>
  );
}

// grow: one of a row of equal tabs that fills the width, so four fit on a phone.
function Chip({ on, label, onPress, grow }) {
  return (
    <P
      c={`h-9 rounded-full items-center justify-center ${grow ? 'flex-1 px-1' : 'px-3.5'} ${on ? 'bg-primary' : 'bg-surface-container-low'}`}
      onPress={onPress}
      accessibilityRole="button"
      accessibilityState={{ selected: on }}
    >
      <T c={`font-label-md text-label-md ${on ? 'text-on-primary' : 'text-on-surface'}`} style={{ fontWeight: '600' }} numberOfLines={1}>
        {label}
      </T>
    </P>
  );
}

// Loads an admin list or figure, again when `path` changes or load() is called.
function useLoad(path) {
  const [state, setState] = useState({ data: null, error: null, busy: true });
  const [tick, setTick] = useState(0);
  useEffect(() => {
    let live = true;
    get(path).then(
      (data) => live && setState({ data, error: null, busy: false }),
      (error) => live && setState((st) => ({ ...st, error, busy: false }))
    );
    return () => {
      live = false;
    };
  }, [path, tick]);
  const load = useCallback(() => {
    setState((st) => ({ ...st, busy: true }));
    setTick((t) => t + 1);
  }, []);
  const setData = useCallback((fn) => setState((st) => ({ ...st, data: fn(st.data) })), []);
  return { ...state, load, setData };
}

function Overview({ L }) {
  const { data: d, error, busy } = useLoad('/v1/admin/overview');
  if (busy && !d) return <ActivityIndicator color={C['primary-container']} />;
  if (error) return <ErrorNote error={error} />;
  const yes = (v) => (v ? L('Yes', 'Oui') : L('No', 'Non'));
  return (
    <V c="gap-space-md">
      <Card title={L('Students', 'Élèves')}>
        <Line label={L('In their free month', 'Dans leur mois gratuit')} value={d.students.freeMonth} />
        <Line label={L('Paid, open now', 'Payé, ouvert')} value={d.students.paid} strong />
        <Line label={L('Free month ended, not paid', 'Mois gratuit fini, non payé')} value={d.students.ended} />
        <Line label={L('New accounts this week', 'Nouveaux comptes cette semaine')} value={d.newThisWeek} />
      </Card>
      <Card title={L('Accounts', 'Comptes')}>
        <Line label={L('Students', 'Élèves')} value={d.accounts.student || 0} />
        <Line label={L('Parents', 'Parents')} value={d.accounts.parent || 0} />
        <Line label={L('Teachers', 'Enseignants')} value={d.accounts.teacher || 0} />
      </Card>
      <Card title={L('Money', 'Argent')}>
        <Line label={L('Received in all', 'Reçu au total')} value={fcfa(d.money.total)} strong />
        <Line label={L('After Fapshi’s 3%', 'Après les 3 % de Fapshi')} value={fcfa(d.money.afterFees)} />
        <Line label={L('Received this month', 'Reçu ce mois')} value={fcfa(d.money.thisMonth)} />
        <Line label={L('Payments made', 'Paiements réussis')} value={d.money.paid} />
        <Line label={L('Waiting for confirmation', 'En attente de confirmation')} value={d.money.pending} />
        <Line label={L('Under review (amount did not match)', 'En vérification (montant différent)')} value={d.money.review} />
      </Card>
      <Card title={L('Settings', 'Réglages')}>
        <Line label={L('Mobile money open', 'Mobile money ouvert')} value={yes(d.settings.paymentsOpen)} />
        <Line label={L('Platform charges on', 'Frais de plateforme actifs')} value={yes(d.settings.paywall)} />
        <Line label={L('Students pay on', 'Les élèves paient sur')} value={d.settings.checkout === 'prompt' ? L('their phone (Direct Pay)', 'leur téléphone (Direct Pay)') : L('Fapshi’s payment page', 'la page Fapshi')} />
        <Line label="Fapshi" value={d.settings.fapshi === 'live' ? L('Live', 'Réel') : L('Sandbox (test)', 'Sandbox (test)')} />
        <Line label={L('School licence requests', 'Demandes de licence')} value={d.licenceRequests} />
      </Card>
    </V>
  );
}

function status(u, L) {
  if (u.isAdmin) return L('Admin', 'Admin');
  if (u.role !== 'student') return u.role === 'parent' ? L('Parent, does not pay', 'Parent, ne paie pas') : L('Teacher, does not pay', 'Enseignant, ne paie pas');
  if (!u.accessUntil) return L('Open', 'Ouvert');
  const paid = u.proUntil && u.proUntil >= u.accessUntil;
  if (u.accessUntil > Date.now()) return `${paid ? L('Paid until', 'Payé jusqu’au') : L('Free month until', 'Mois gratuit jusqu’au')} ${date(u.accessUntil)}`;
  return `${L('Ended on', 'Terminé le')} ${date(u.accessUntil)}`;
}

function Accounts({ L, showToast }) {
  const [q, setQ] = useState('');
  const [query, setQuery] = useState('');
  const { data, error, busy, setData } = useLoad(`/v1/admin/users?q=${encodeURIComponent(query)}`);
  const [open, setOpen] = useState(null);
  const [note, setNote] = useState('');
  const [saving, setSaving] = useState(false);
  const [saveError, setSaveError] = useState(null);
  const give = async (u, days) => {
    setSaving(true);
    setSaveError(null);
    try {
      const r = await post(`/v1/admin/users/${u.id}/days`, { days, note: note.trim() || undefined });
      setData((d) => ({ items: d.items.map((x) => (x.id === u.id ? r.user : x)) }));
      setNote('');
      showToast(days > 0 ? `${days} ${L('days given to', 'jours donnés à')} ${u.name}` : `${-days} ${L('days taken from', 'jours retirés à')} ${u.name}`);
    } catch (e) {
      setSaveError(e);
    } finally {
      setSaving(false);
    }
  };
  return (
    <V c="gap-space-md">
      <V c="flex-row items-center gap-2">
        <Input
          c="flex-1 h-12 px-3 rounded-lg bg-surface-container-lowest border border-outline-variant text-body-md"
          placeholder={L('Name, phone or email', 'Nom, téléphone ou e-mail')}
          value={q}
          onChangeText={setQ}
          onSubmitEditing={() => setQuery(q.trim())}
          returnKeyType="search"
        />
        <P c="h-12 px-4 rounded-lg bg-primary items-center justify-center" onPress={() => setQuery(q.trim())} accessibilityLabel={L('Search', 'Rechercher')}>
          <Ic n="search" s={20} c="on-primary" />
        </P>
      </V>
      {busy && !data ? <ActivityIndicator color={C['primary-container']} /> : null}
      <ErrorNote error={error} />
      {data && !data.items.length && <T c="font-body-sm text-body-sm text-on-surface-variant">{L('No account found.', 'Aucun compte trouvé.')}</T>}
      {data?.items.map((u) => (
        <V key={u.id} c="bg-surface-container-lowest rounded-xl border border-surface-container">
          <P c="p-space-md flex-row items-center gap-space-sm" onPress={() => (setOpen(open === u.id ? null : u.id), setSaveError(null))} scale={0.99}>
            <V c="flex-1 gap-0.5">
              <T c="font-label-lg text-label-lg text-on-surface" style={{ fontWeight: '700' }} numberOfLines={1}>
                {u.name}
              </T>
              <T c="font-body-sm text-body-sm text-on-surface-variant" numberOfLines={1}>
                {phoneText(u.phone)}
                {u.className ? `, ${u.className}` : ''}
              </T>
              <T c={`font-body-sm text-body-sm ${u.access ? 'text-secondary' : 'text-error'}`}>{status(u, L)}</T>
            </V>
            <Ic n={open === u.id ? 'expand_less' : 'expand_more'} s={22} c="outline" />
          </P>
          {open === u.id && u.role === 'student' && !u.isAdmin && (
            <V c="px-space-md pb-space-md gap-space-xs border-t border-surface-container pt-space-sm">
              <T c="font-body-sm text-body-sm text-on-surface-variant">
                {L('Joined', 'Inscrit le')} {date(u.createdAt)}. {L('Give days for charges paid another way (cash, bank), or take back days given by mistake.', 'Donnez des jours pour des frais payés autrement (espèces, banque), ou retirez des jours donnés par erreur.')}
              </T>
              <Input
                c="h-11 px-3 rounded-lg bg-surface-container-low text-body-md"
                placeholder={L('Note (optional), e.g. paid 350 FCFA in cash', 'Note (facultatif), ex. 350 FCFA payés en espèces')}
                value={note}
                onChangeText={setNote}
                maxLength={200}
              />
              <V c="flex-row flex-wrap gap-2">
                {[
                  [30, L('+ 1 month', '+ 1 mois')],
                  [365, L('+ 1 year', '+ 1 an')],
                  [-30, L('- 1 month', '- 1 mois')],
                ].map(([days, label]) => (
                  <Chip key={days} label={label} on={false} onPress={() => !saving && give(u, days)} />
                ))}
                {saving && <ActivityIndicator color={C['primary-container']} />}
              </V>
              <ErrorNote error={saveError} />
            </V>
          )}
        </V>
      ))}
    </V>
  );
}

const PAY_FILTERS = [
  ['', 'All', 'Tous'],
  ['SUCCESSFUL', 'Paid', 'Payés'],
  ['PENDING', 'Waiting', 'En attente'],
  ['REVIEW', 'Review', 'Vérification'],
  ['FAILED', 'Failed', 'Échoués'],
];
const PAY_STATUS = { SUCCESSFUL: ['Paid', 'Payé'], PENDING: ['Waiting', 'En attente'], REVIEW: ['Under review', 'En vérification'], FAILED: ['Failed', 'Échoué'], EXPIRED: ['Expired', 'Expiré'] };

function Payments({ L }) {
  const [filter, setFilter] = useState('');
  const { data, error, busy } = useLoad(`/v1/admin/payments${filter ? `?status=${filter}` : ''}`);
  return (
    <V c="gap-space-md">
      <V c="flex-row flex-wrap gap-2">
        {PAY_FILTERS.map(([id, en, fr]) => (
          <Chip key={id || 'all'} on={filter === id} label={L(en, fr)} onPress={() => setFilter(id)} />
        ))}
      </V>
      {busy && !data ? <ActivityIndicator color={C['primary-container']} /> : null}
      <ErrorNote error={error} />
      {data && !data.items.length && <T c="font-body-sm text-body-sm text-on-surface-variant">{L('No payments yet.', 'Aucun paiement.')}</T>}
      {data?.items.map((p) => (
        <V key={p.id} c="bg-surface-container-lowest rounded-xl border border-surface-container p-space-md gap-0.5">
          <V c="flex-row items-center justify-between gap-space-sm">
            <T c="font-label-lg text-label-lg text-on-surface flex-1" style={{ fontWeight: '700' }} numberOfLines={1}>
              {p.name || L('Deleted account', 'Compte supprimé')}
            </T>
            <T c="font-label-lg text-label-lg text-on-surface" style={{ fontWeight: '700', fontVariant: ['tabular-nums'] }}>
              {fcfa(p.amount)}
            </T>
          </V>
          <T c="font-body-sm text-body-sm text-on-surface-variant">
            {p.plan === 'year' ? L('1 year', '1 an') : p.plan === 'month' ? L('1 month', '1 mois') : p.plan} · {date(p.createdAt)} · {phoneText(p.phone)}
          </T>
          <T c={`font-body-sm text-body-sm ${p.status === 'SUCCESSFUL' ? 'text-secondary' : p.status === 'PENDING' ? 'text-on-surface-variant' : 'text-error'}`}>
            {L(...(PAY_STATUS[p.status] || [p.status, p.status]))}
            {p.reference ? ` · ${p.reference}` : ''}
          </T>
        </V>
      ))}
    </V>
  );
}

function Schools({ L, showToast }) {
  const codes = useLoad('/v1/admin/vouchers');
  const requests = useLoad('/v1/admin/licence-requests');
  const [label, setLabel] = useState('');
  const [days, setDays] = useState('365');
  const [uses, setUses] = useState('50');
  const [made, setMade] = useState(null);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState(null);
  const make = async () => {
    setBusy(true);
    setError(null);
    try {
      const r = await post('/v1/admin/vouchers', { label: label.trim(), days: parseInt(days, 10), maxUses: parseInt(uses, 10), count: 1 });
      setMade(r);
      setLabel('');
      codes.load();
    } catch (e) {
      setError(e);
    } finally {
      setBusy(false);
    }
  };
  const copy = async (code) => {
    try {
      await Clipboard.setStringAsync(code);
      showToast(L('Code copied', 'Code copié'));
    } catch {
      // the code is on screen and can be selected
    }
  };
  return (
    <V c="gap-space-md">
      <Card title={L('Make a school code', 'Créer un code d’école')}>
        <T c="font-body-sm text-body-sm text-on-surface-variant" style={{ lineHeight: 19 }}>
          {L('Each student who enters the code gets Klass8 for the number of days, until the code has been used as many times as you allow.', 'Chaque élève qui entre le code obtient Klass8 pour ce nombre de jours, jusqu’au nombre d’utilisations permis.')}
        </T>
        <Input c="h-11 px-3 rounded-lg bg-surface-container-low text-body-md" placeholder={L('School and year, e.g. GBHS Bamenda 2026-27', 'École et année, ex. GBHS Bamenda 2026-27')} value={label} onChangeText={setLabel} maxLength={120} />
        <V c="flex-row gap-2">
          <V c="flex-1 gap-1">
            <T c="font-label-md text-label-md text-on-surface-variant">{L('Days', 'Jours')}</T>
            <Input c="h-11 px-3 rounded-lg bg-surface-container-low text-body-md" value={days} onChangeText={(t) => setDays(t.replace(/\D/g, '').slice(0, 3))} keyboardType="number-pad" />
          </V>
          <V c="flex-1 gap-1">
            <T c="font-label-md text-label-md text-on-surface-variant">{L('Students', 'Élèves')}</T>
            <Input c="h-11 px-3 rounded-lg bg-surface-container-low text-body-md" value={uses} onChangeText={(t) => setUses(t.replace(/\D/g, '').slice(0, 4))} keyboardType="number-pad" />
          </V>
        </V>
        <ErrorNote error={error} />
        <Cta variant="dark" icon={null} label={L('Make the code', 'Créer le code')} loading={busy} onPress={make} />
        {!!made && (
          <V c="mt-space-xs p-space-sm rounded-lg bg-surface-container-low gap-1">
            <T c="font-body-sm text-body-sm text-on-surface-variant">
              {L('Give this code to the school. It is shown only now.', 'Donnez ce code à l’école. Il n’est affiché que maintenant.')}
            </T>
            {made.codes.map((code) => (
              <P key={code} c="flex-row items-center justify-between gap-space-sm py-1" onPress={() => copy(code)}>
                <T c="font-headline-sm text-headline-sm text-on-surface tracking-wider" selectable style={{ fontWeight: '700' }}>
                  {code}
                </T>
                <Ic n="content_copy" s={20} c="primary-container" />
              </P>
            ))}
          </V>
        )}
      </Card>
      <Card title={L('Codes made', 'Codes créés')}>
        {codes.busy && !codes.data ? <ActivityIndicator color={C['primary-container']} /> : null}
        <ErrorNote error={codes.error} />
        {codes.data && !codes.data.items.length && <T c="font-body-sm text-body-sm text-on-surface-variant">{L('None yet.', 'Aucun pour l’instant.')}</T>}
        {codes.data?.items.map((v, i) => (
          <Line key={`${v.createdAt}-${i}`} label={`${v.label || '-'} · ${v.days} ${L('days', 'jours')} · ${L('ends', 'expire le')} ${date(v.expiresAt)}`} value={`${v.uses} / ${v.maxUses}`} />
        ))}
      </Card>
      <Card title={L('Licence requests', 'Demandes de licence')}>
        {requests.busy && !requests.data ? <ActivityIndicator color={C['primary-container']} /> : null}
        <ErrorNote error={requests.error} />
        {requests.data && !requests.data.items.length && <T c="font-body-sm text-body-sm text-on-surface-variant">{L('None yet.', 'Aucune pour l’instant.')}</T>}
        {requests.data?.items.map((r) => (
          <V key={r.id} c="py-space-xs border-t border-surface-container gap-0.5">
            <T c="font-label-lg text-label-lg text-on-surface" style={{ fontWeight: '700' }}>
              {r.schoolName} · {r.students} {L('students', 'élèves')}
            </T>
            <T c="font-body-sm text-body-sm text-on-surface" selectable>
              {r.contact}
            </T>
            {!!r.message && <T c="font-body-sm text-body-sm text-on-surface-variant">{r.message}</T>}
            <T c="font-body-sm text-body-sm text-on-surface-variant">
              {date(r.createdAt)}
              {r.requestedBy ? ` · ${r.requestedBy}` : ''}
            </T>
          </V>
        ))}
      </Card>
    </V>
  );
}

export default function Admin({ navigation }) {
  const L = useL();
  const [admin, setAdmin] = useState(currentAdmin());
  const [checked, setChecked] = useState(false);
  const [tab, setTab] = useState('overview');
  const [key, setKey] = useState(0); // pull to refresh: the tab loads again
  const [toast, showToast] = useToast();

  // Only a signed-in admin account sees this screen; when the admin session
  // ends (signed out, expired, switched off) it is the sign-in page again.
  const toSignIn = useCallback(() => navigation.reset({ index: 0, routes: [{ name: 'Login' }] }), [navigation]);
  useEffect(() => {
    let live = true;
    loadAdminSession().then((sess) => {
      if (!live) return;
      if (!sess) toSignIn();
      else {
        setAdmin(sess.admin);
        setChecked(true);
      }
    });
    const off = onAdminSignedOut(toSignIn);
    return () => {
      live = false;
      off();
    };
  }, [toSignIn]);
  const signOut = async () => {
    await adminSignOut();
    navigation.reset({ index: 0, routes: [{ name: 'Welcome' }] });
  };

  return (
    <V c="flex-1">
      <Screen
        bg="bg-surface"
        keyboard
        header={
          <StackHeader
            title={L('Klass8 admin', 'Admin Klass8')}
            subtitle={admin?.name || ''}
            noBack
            avatar={false}
            right={
              <P c="h-10 px-3 rounded-lg flex-row items-center gap-1.5 bg-surface-container-low" onPress={signOut} accessibilityLabel={L('Sign out of the admin', 'Se déconnecter de l’admin')}>
                <Ic n="logout" s={18} c="on-surface" />
                <T c="font-label-md text-label-md text-on-surface" style={{ fontWeight: '700' }}>
                  {L('Sign out', 'Déconnexion')}
                </T>
              </P>
            }
          />
        }
        refreshControl={<RefreshControl refreshing={false} onRefresh={() => setKey((k) => k + 1)} />}
      >
        {!checked ? (
          <ActivityIndicator color={C['primary-container']} style={{ marginTop: 32 }} />
        ) : (
          <V c="pt-space-md pb-space-xl gap-space-md">
            <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ gap: 6 }}>
              {TABS.map(([id, en, fr]) => (
                <Chip key={id} on={tab === id} label={L(en, fr)} onPress={() => setTab(id)} />
              ))}
            </ScrollView>
            <V key={`${tab}-${key}`}>
              {tab === 'overview' && <Overview L={L} />}
              {tab === 'accounts' && <Accounts L={L} showToast={showToast} />}
              {tab === 'payments' && <Payments L={L} />}
              {tab === 'schools' && <Schools L={L} showToast={showToast} />}
              {tab === 'team' && <AdminTeam L={L} showToast={showToast} />}
            </V>
          </V>
        )}
      </Screen>
      {toast}
    </V>
  );
}
