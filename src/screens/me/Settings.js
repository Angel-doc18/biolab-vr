import { useState } from 'react';
import { Modal } from 'react-native';
import { Ic, Input, P, T, V } from '../../ui/kit';
import { Cta, ErrorNote, Screen, StackHeader, useToast } from '../../ui/chrome';
import { Field, passwordValid, StrengthMeter, Toggle } from '../../ui/form';
import { TimePicker } from '../onboarding/Goals';
import { del, get, post, setSession } from '../../api/client';
import { useApp } from '../../state/store';
import { useL } from '../../i18n';
import { cancelDailyReminder, scheduleDailyReminder } from '../../lib/reminders';

function Section({ title, children }) {
  return (
    <V c="bg-surface-container-lowest rounded-xl p-space-md shadow-sm gap-space-md">
      <T c="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">{title}</T>
      {children}
    </V>
  );
}

export default function Settings({ navigation }) {
  const { user, updateMe, logout, prefs, savePrefs } = useApp();
  const L = useL();
  const [name, setName] = useState(user?.name || '');
  const [time, setTime] = useState(user?.reminderTime || '18:30');
  const [minutes, setMinutes] = useState(user?.dailyMinutes || 20);
  const [reminder, setReminder] = useState(prefs.reminder !== false);
  const [pwOpen, setPwOpen] = useState(false);
  const [delOpen, setDelOpen] = useState(false);
  const [payments, setPayments] = useState(null);
  const [error, setError] = useState(null);
  const [busy, setBusy] = useState(false);
  const [toast, showToast] = useToast();

  const saveProfile = async () => {
    setBusy(true);
    setError(null);
    try {
      await updateMe({ name: name.trim(), reminderTime: time, dailyMinutes: minutes });
      if (reminder) await scheduleDailyReminder(time, minutes, prefs.lang);
      showToast(L('Saved', 'Enregistré'));
    } catch (e) {
      setError(e);
    } finally {
      setBusy(false);
    }
  };

  return (
    <V c="flex-1">
      <Screen bg="bg-surface" keyboard header={<StackHeader title={L('Account and security', 'Compte et sécurité')} />}>
        <V c="pt-space-md pb-space-xl gap-space-md">
          <Section title={L('Profile', 'Profil')}>
            <Field label={L('Full name', 'Nom complet')} value={name} onChangeText={setName} maxLength={80} autoCapitalize="words" />
            <V c="gap-1">
              <T c="font-label-md text-label-md text-on-surface">{L('Phone number', 'Téléphone')}</T>
              <V c="flex-row items-center justify-between h-[52px] px-4 rounded-xl bg-surface-container-low">
                <T c="font-body-md text-body-md text-on-surface">+{user?.phone}</T>
                {user?.phoneVerified ? (
                  <V c="flex-row items-center gap-1">
                    <Ic n="verified" s={16} c="secondary" />
                    <T c="font-label-sm text-label-sm text-secondary">{L('Verified', 'Vérifié')}</T>
                  </V>
                ) : (
                  <P onPress={() => navigation.navigate('Otp', { purpose: 'verify', phone: user?.phone, next: 'Main' })}>
                    <T c="font-label-md text-label-md text-primary">{L('Verify', 'Vérifier')}</T>
                  </P>
                )}
              </V>
            </V>
            {user?.role === 'student' && (
              <P c="flex-row items-center justify-between" onPress={() => navigation.navigate('ExamClass', { fromSettings: true })}>
                <V>
                  <T c="font-label-lg text-label-lg text-on-surface">{L('Exam and class', 'Examen et classe')}</T>
                  <T c="font-body-sm text-body-sm text-on-surface-variant">
                    {user?.className} · June {user?.examYear}
                  </T>
                </V>
                <Ic n="chevron_right" c="outline" />
              </P>
            )}
            {user?.role !== 'parent' && (
              <P c="flex-row items-center justify-between" onPress={() => navigation.navigate('School', { fromSettings: true })}>
                <V c="flex-1">
                  <T c="font-label-lg text-label-lg text-on-surface">{L('School', 'École')}</T>
                  <T c="font-body-sm text-body-sm text-on-surface-variant" numberOfLines={1}>
                    {user?.schoolName || L('Not set', 'Non définie')}
                  </T>
                </V>
                <Ic n="chevron_right" c="outline" />
              </P>
            )}
          </Section>

          {user?.role === 'student' && (
            <Section title={L('Daily reminder', 'Rappel quotidien')}>
              <V c="flex-row items-center justify-between">
                <V c="flex-1 pr-2">
                  <T c="font-label-lg text-label-lg text-on-surface">{L('Remind me to revise', 'Me rappeler de réviser')}</T>
                  <T c="font-body-sm text-body-sm text-on-surface-variant">
                    {minutes} min {L('at', 'à')} {time}
                  </T>
                </V>
                <Toggle
                  on={reminder}
                  onPress={async () => {
                    const next = !reminder;
                    setReminder(next);
                    savePrefs({ reminder: next });
                    if (next) await scheduleDailyReminder(time, minutes, prefs.lang);
                    else await cancelDailyReminder();
                  }}
                  accessibilityLabel="Daily reminder"
                />
              </V>
              {reminder && (
                <>
                  <TimePicker value={time} onChange={setTime} L={L} />
                  <V c="flex-row gap-space-xs">
                    {[10, 20, 30, 45].map((m) => (
                      <P key={m} c={`flex-1 py-space-sm rounded-xl items-center ${minutes === m ? 'bg-primary' : 'bg-surface-container-low'}`} onPress={() => setMinutes(m)}>
                        <T c={`font-label-lg text-label-lg ${minutes === m ? 'text-on-primary' : 'text-on-surface'}`}>{m} min</T>
                      </P>
                    ))}
                  </V>
                </>
              )}
            </Section>
          )}
          <ErrorNote error={error} />
          <Cta label={L('Save changes', 'Enregistrer')} icon="check" loading={busy} onPress={saveProfile} />

          <Section title={L('Security', 'Sécurité')}>
            <P c="flex-row items-center justify-between" onPress={() => setPwOpen(true)}>
              <V c="flex-row items-center gap-space-sm">
                <Ic n="password" s={22} c="primary" />
                <T c="font-label-lg text-label-lg text-on-surface">{L('Change password', 'Changer le mot de passe')}</T>
              </V>
              <Ic n="chevron_right" c="outline" />
            </P>
            <P
              c="flex-row items-center justify-between"
              onPress={async () => {
                try {
                  const r = await get('/v1/billing/payments');
                  setPayments(r.items);
                } catch (e) {
                  setError(e);
                }
              }}
            >
              <V c="flex-row items-center gap-space-sm">
                <Ic n="receipt_long" s={22} c="primary" />
                <T c="font-label-lg text-label-lg text-on-surface">{L('Payment history', 'Historique des paiements')}</T>
              </V>
              <Ic n="chevron_right" c="outline" />
            </P>
            {payments && (
              <V c="gap-2">
                {!payments.length && <T c="font-body-sm text-body-sm text-on-surface-variant">{L('No payments yet.', 'Aucun paiement.')}</T>}
                {payments.map((p) => (
                  <V key={p.id} c="flex-row items-center justify-between bg-surface-container-low rounded-lg p-2.5">
                    <V>
                      <T c="font-label-md text-label-md text-on-surface">
                        {p.plan === 'year' ? L('Academic Year Pass', 'Pass année') : L('Term Pass', 'Pass trimestre')} · {p.amount} FCFA
                      </T>
                      <T c="font-body-sm text-body-sm text-on-surface-variant">
                        {new Date(p.createdAt).toLocaleDateString('en-GB')} · {p.reference}
                      </T>
                    </V>
                    <T c={`font-label-sm text-label-sm ${p.status === 'SUCCESSFUL' ? 'text-secondary' : p.status === 'PENDING' ? 'text-primary' : 'text-error'}`}>{p.status}</T>
                  </V>
                ))}
              </V>
            )}
            <P c="flex-row items-center justify-between" onPress={logout}>
              <V c="flex-row items-center gap-space-sm">
                <Ic n="logout" s={22} c="primary" />
                <T c="font-label-lg text-label-lg text-on-surface">{L('Sign out of this phone', 'Se déconnecter')}</T>
              </V>
            </P>
            <P c="flex-row items-center justify-between" onPress={() => setDelOpen(true)}>
              <V c="flex-row items-center gap-space-sm">
                <Ic n="delete_forever" s={22} c="error" />
                <T c="font-label-lg text-label-lg text-error">{L('Delete my account', 'Supprimer mon compte')}</T>
              </V>
            </P>
          </Section>
        </V>
      </Screen>
      {pwOpen && <PasswordSheet L={L} onClose={() => setPwOpen(false)} onDone={() => (setPwOpen(false), showToast(L('Password changed. Other devices were signed out.', 'Mot de passe changé.')))} />}
      {delOpen && <DeleteSheet L={L} onClose={() => setDelOpen(false)} />}
      {toast}
    </V>
  );
}

function PasswordSheet({ L, onClose, onDone }) {
  const [current, setCurrent] = useState('');
  const [next, setNext] = useState('');
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState(null);
  const submit = async () => {
    if (!passwordValid(next)) return setError(L('Use 8+ characters with a capital letter, a small letter and a number.', 'Au moins 8 caractères avec majuscule, minuscule et chiffre.'));
    setBusy(true);
    setError(null);
    try {
      const r = await post('/v1/auth/password/change', { currentPassword: current, newPassword: next });
      await setSession(r);
      onDone();
    } catch (e) {
      setError(e);
    } finally {
      setBusy(false);
    }
  };
  return (
    <Modal visible transparent animationType="slide" onRequestClose={onClose}>
      <V c="flex-1 justify-end" style={{ backgroundColor: 'rgba(15,23,42,0.45)' }}>
        <V c="bg-surface-container-lowest rounded-t-3xl p-space-lg gap-space-sm">
          <T c="font-headline-md text-headline-md text-on-surface">{L('Change password', 'Changer le mot de passe')}</T>
          <Field label={L('Current password', 'Mot de passe actuel')} secure value={current} onChangeText={setCurrent} autoCapitalize="none" maxLength={128} />
          <Field label={L('New password', 'Nouveau mot de passe')} secure value={next} onChangeText={setNext} autoCapitalize="none" maxLength={128} />
          {!!next && <StrengthMeter password={next} L={L} compact />}
          <ErrorNote error={error} />
          <Cta label={L('Change password', 'Changer')} icon="check" loading={busy} onPress={submit} />
          <P c="items-center py-2" onPress={onClose}>
            <T c="font-label-md text-label-md text-on-surface-variant">{L('Cancel', 'Annuler')}</T>
          </P>
        </V>
      </V>
    </Modal>
  );
}

function DeleteSheet({ L, onClose }) {
  const { logout } = useApp();
  const [pw, setPw] = useState('');
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState(null);
  const submit = async () => {
    setBusy(true);
    setError(null);
    try {
      await del('/v1/me', { password: pw });
      await logout();
    } catch (e) {
      setError(e);
      setBusy(false);
    }
  };
  return (
    <Modal visible transparent animationType="slide" onRequestClose={onClose}>
      <V c="flex-1 justify-end" style={{ backgroundColor: 'rgba(15,23,42,0.45)' }}>
        <V c="bg-surface-container-lowest rounded-t-3xl p-space-lg gap-space-sm">
          <V c="w-12 h-12 rounded-xl bg-error-container items-center justify-center">
            <Ic n="warning" s={28} c="on-error-container" />
          </V>
          <T c="font-headline-md text-headline-md text-on-surface">{L('Delete your account?', 'Supprimer votre compte ?')}</T>
          <T c="font-body-md text-body-md text-on-surface-variant">
            {L('Your progress, notifications, class memberships and parent links will be removed from our servers. This cannot be undone. Premium time is not refunded.', 'Votre progression, vos notifications, classes et liens parent seront supprimés. Action irréversible.')}
          </T>
          <Input c="h-12 px-3 rounded-lg bg-surface-container-low text-body-md" placeholder={L('Enter your password to confirm', 'Mot de passe pour confirmer')} secureTextEntry value={pw} onChangeText={setPw} autoCapitalize="none" />
          <ErrorNote error={error} />
          <P c="h-12 rounded-xl bg-error items-center justify-center" onPress={submit} disabled={busy || !pw}>
            <T c="font-label-lg text-label-lg text-on-error">{busy ? L('Deleting...', 'Suppression...') : L('Delete permanently', 'Supprimer définitivement')}</T>
          </P>
          <P c="items-center py-2" onPress={onClose}>
            <T c="font-label-md text-label-md text-on-surface-variant">{L('Keep my account', 'Garder mon compte')}</T>
          </P>
        </V>
      </V>
    </Modal>
  );
}
