import { useEffect, useRef, useState } from 'react';
import { ActivityIndicator, Modal } from 'react-native';
import { C, Ic, Input, P, T, V } from '../../ui/kit';
import { Cta, ErrorNote, Screen, StackHeader, useToast } from '../../ui/chrome';
import { SpecimenPreview } from '../../ui/previews';
import { get, post } from '../../api/client';
import { useApp } from '../../state/store';
import { useL } from '../../i18n';
import { PLANS as LOCAL_PLANS, fcfa } from '../../data/plan';

const PROVIDERS = [
  { id: 'mobile money', short: 'MTN', name: 'MoMo', ussd: '*126#', prefix: '67X, 68X, 650-654', bg: 'bg-tertiary-fixed', fg: 'text-on-tertiary-fixed' },
  { id: 'orange money', short: 'OM', name: 'Orange Money', ussd: '#150#', prefix: '69X, 655-659', bg: 'bg-tertiary-container', fg: 'text-on-tertiary' },
];

// Cameroon mobile numbers: MTN 67/68/650-654, Orange 69/655-659.
export function operatorFor(d) {
  if (/^6(7|8)\d{7}$/.test(d) || /^65[0-4]\d{6}$/.test(d)) return 'mobile money';
  if (/^69\d{7}$/.test(d) || /^65[5-9]\d{6}$/.test(d)) return 'orange money';
  return null;
}

function Row({ title, badge, free, pro }) {
  return (
    <V c="p-space-sm rounded-lg bg-surface-container-low gap-1">
      <V c="flex-row items-center justify-between gap-2">
        <T c="font-label-md text-label-md text-on-surface flex-1">{title}</T>
        <V c="bg-secondary-container/50 px-1.5 py-0.5 rounded">
          <T c="font-label-sm text-label-sm text-secondary">{badge}</T>
        </V>
      </V>
      <V c="flex-row items-center justify-between gap-2">
        <T c="font-body-sm text-body-sm text-on-surface-variant flex-1">{free}</T>
        <T c="font-body-sm text-body-sm text-secondary" style={{ fontWeight: '600' }}>
          {pro}
        </T>
      </V>
    </V>
  );
}

export default function Paywall({ navigation, route }) {
  const { user, pro, refreshMe, refreshQuota } = useApp();
  const L = useL();
  const [plans, setPlans] = useState(null);
  const [open, setOpen] = useState(true);
  const [plan, setPlan] = useState('term');
  const [provider, setProvider] = useState('mobile money');
  const [phone, setPhone] = useState(user?.phone ? user.phone.replace(/^237/, '') : '');
  const [voucher, setVoucher] = useState('');
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState(null);
  const [payment, setPayment] = useState(null); // { id, status, amount }
  const [licence, setLicence] = useState(false);
  const [toast, showToast] = useToast();
  const poll = useRef(null);

  useEffect(() => {
    get('/v1/billing/plans', { auth: false })
      .then((r) => {
        setPlans(r.plans);
        setOpen(r.paymentsOpen);
      })
      .catch(() => setPlans(null));
    const d = phone;
    const op = operatorFor(d);
    if (op) setProvider(op);
    return () => clearTimeout(poll.current);
  }, []);

  const P_ = plans || Object.fromEntries(Object.entries(LOCAL_PLANS).map(([k, v]) => [k, { amount: v.amount, days: v.days }]));
  const amount = P_[plan]?.amount;
  const reason = route.params?.reason;

  const check = async (id, tries = 0) => {
    try {
      const r = await get(`/v1/billing/payments/${id}`);
      setPayment((p) => ({ ...p, status: r.payment.status }));
      if (r.payment.status === 'SUCCESSFUL') {
        await refreshMe();
        refreshQuota();
        return;
      }
      if (['FAILED', 'EXPIRED', 'REVIEW'].includes(r.payment.status)) return;
    } catch (e) {
      if (e.code !== 'rate_limited' && e.code !== 'offline') {
        setPayment((p) => ({ ...p, error: e.message }));
        return;
      }
    }
    if (tries < 40) poll.current = setTimeout(() => check(id, tries + 1), 6000);
    else setPayment((p) => ({ ...p, status: 'TIMEOUT' }));
  };

  const pay = async () => {
    const d = phone.replace(/\D/g, '');
    if (!/^6\d{8}$/.test(d)) return setError(L('Enter your 9 digit mobile money number.', 'Entrez votre numéro mobile money (9 chiffres).'));
    const op = operatorFor(d);
    if (op && op !== provider) return setError(L('This number belongs to the other operator. Choose the matching one above.', 'Ce numéro appartient à l’autre opérateur.'));
    setBusy(true);
    setError(null);
    try {
      const r = await post('/v1/billing/pay', { plan, phone: `237${d}`, medium: provider });
      setPayment({ id: r.payment.id, status: 'PENDING', amount: r.payment.amount });
      poll.current = setTimeout(() => check(r.payment.id), 8000);
    } catch (e) {
      setError(e);
    } finally {
      setBusy(false);
    }
  };

  const redeem = async () => {
    const code = voucher.trim().toUpperCase();
    if (code.replace(/[^A-Z0-9]/g, '').length < 12) return setError(L('Voucher codes have 12 characters.', 'Les codes ont 12 caractères.'));
    setBusy(true);
    setError(null);
    try {
      const r = await post('/v1/billing/redeem', { code });
      await refreshMe();
      refreshQuota();
      setVoucher('');
      showToast(`${r.label || L('Voucher', 'Code')} ${L('applied. Premium is active.', 'appliqué. Premium activé.')}`);
    } catch (e) {
      setError(e);
    } finally {
      setBusy(false);
    }
  };

  const until = user?.proUntil ? new Date(user.proUntil).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' }) : null;

  return (
    <V c="flex-1">
      <Screen bg="bg-surface" keyboard header={<StackHeader close title={L('Premium', 'Premium')} subtitle={L('Plans and payment', 'Offres et paiement')} logo />}>
        <V c="pb-space-xl">
          <V c="pt-space-md items-center">
            <V c="flex-row items-center gap-space-xs px-3 py-1 rounded-full bg-secondary-container shadow-sm mb-space-sm">
              <Ic n="verified" s={16} c="on-secondary-container" fill />
              <T c="font-label-sm text-label-sm text-on-secondary-container uppercase tracking-wider">{pro ? L('Premium active', 'Premium actif') : L('BioSpatial Premium', 'BioSpatial Premium')}</T>
            </V>
            <T c="font-headline-lg text-headline-lg text-on-surface tracking-tight text-center" style={{ maxWidth: 320 }}>
              {pro ? L('You have full access', 'Vous avez l’accès complet') : L('Unlock complete GCE Biology revision', 'Débloquez toute la biologie du GCE')}
            </T>
            <T c="font-body-md text-body-md text-on-surface-variant mt-space-xs text-center" style={{ maxWidth: 340 }}>
              {pro && until
                ? `${L('Premium is active until', 'Premium actif jusqu’au')} ${until}. ${L('Buying another pass adds time to it.', 'Un nouveau pass s’ajoute à la durée.')}`
                : reason === 'mocks'
                ? L('You have used this week’s free Paper 1 mock. Premium gives unlimited mocks, every unit and AI marking.', 'Vous avez utilisé l’examen gratuit de la semaine.')
                : reason === 'mark' || reason === 'ai'
                ? L('Mark my answer and extra tutor questions are part of Premium.', 'La correction IA et plus de questions font partie du Premium.')
                : L('All ten units, every practical, unlimited mocks and examiner-style AI marking.', 'Les dix unités, tous les TP, examens illimités et correction IA.')}
            </T>
            <V c="w-full mt-space-md rounded-xl bg-surface-container-low shadow-sm p-space-sm flex-row items-center gap-space-md overflow-hidden">
              <V c="w-20 h-20 rounded-lg overflow-hidden bg-surface-container">
                <SpecimenPreview unitId="transport" />
              </V>
              <V c="flex-1">
                <V c="flex-row items-center gap-1">
                  <Ic n="view_in_ar" s={16} c="secondary" />
                  <T c="font-label-sm text-label-sm text-secondary uppercase">{L('Interactive 3D lab', 'Labo 3D interactif')}</T>
                </V>
                <T c="font-headline-sm text-headline-sm text-on-surface" numberOfLines={1}>
                  {L('3D organs and VR view', 'Organes 3D et vue VR')}
                </T>
                <T c="font-body-sm text-body-sm text-on-surface-variant" numberOfLines={1}>
                  {L('Works offline once installed', 'Fonctionne hors ligne')}
                </T>
              </V>
            </V>
          </V>

          <V c="mt-space-lg gap-space-sm">
            <V c="flex-row items-center justify-between px-1">
              <T c="font-label-md text-label-md text-on-surface uppercase tracking-wider">{L('Choose a plan', 'Choisissez une offre')}</T>
              <T c="font-label-sm text-label-sm text-secondary">{L('No automatic renewal', 'Sans renouvellement auto')}</T>
            </V>
            {[
              ['term', L('Term Pass', 'Pass trimestre'), L('About one school term', 'Environ un trimestre'), L('Full access for', 'Accès complet pendant'), L('Most popular', 'Populaire')],
              ['year', L('Academic Year Pass', 'Pass année scolaire'), L('Best value until your GCE', 'Le meilleur prix jusqu’au GCE'), L('Full access for', 'Accès complet pendant'), null],
            ].map(([id, name, sub, pre, tag]) => {
              const on = plan === id;
              const p = P_[id];
              const perMonth = p ? Math.round(p.amount / (p.days / 30)) : null;
              return (
                <P key={id} c={`rounded-xl p-space-md ${on ? 'bg-surface-container-lowest shadow-md' : 'bg-surface-container-low shadow-sm'}`} onPress={() => setPlan(id)} accessibilityRole="radio" accessibilityState={{ checked: on }}>
                  {on && <V c="absolute top-0 bottom-0 left-0 w-1 bg-primary-container rounded-l-xl" />}
                  <V c="flex-row items-start justify-between gap-2">
                    <V c="flex-1">
                      <V c="flex-row items-center gap-2 flex-wrap">
                        <T c="font-headline-sm text-headline-sm text-on-surface">{name}</T>
                        {tag && (
                          <V c="px-2 py-0.5 rounded-full bg-surface-container-highest">
                            <T c="font-label-sm text-label-sm text-primary">{tag}</T>
                          </V>
                        )}
                      </V>
                      <T c="font-body-sm text-body-sm text-on-surface-variant mt-1">{sub}</T>
                    </V>
                    <V c="items-end">
                      <T c={`font-headline-md text-headline-md ${on ? 'text-primary' : 'text-on-surface'}`} style={{ fontWeight: '700' }}>
                        {p ? p.amount.toLocaleString('en-US') : '-'} <T c="font-label-sm text-label-sm text-on-surface-variant">FCFA</T>
                      </T>
                      {perMonth && (
                        <T c="font-label-sm text-label-sm text-on-surface-variant">
                          ≈ {perMonth.toLocaleString('en-US')} FCFA / {L('month', 'mois')}
                        </T>
                      )}
                    </V>
                  </V>
                  <V c="mt-2 flex-row items-center gap-1.5">
                    <Ic n={on ? 'check_circle' : 'task_alt'} s={16} c={on ? 'secondary' : 'on-surface-variant'} />
                    <T c={`font-label-sm text-label-sm ${on ? 'text-secondary' : 'text-on-surface-variant'}`}>
                      {pre} {p?.days} {L('days', 'jours')}
                    </T>
                  </V>
                </P>
              );
            })}
            <V c="rounded-xl bg-surface-container-lowest p-space-md shadow-sm flex-row items-center justify-between">
              <V c="flex-row items-center gap-space-sm flex-1">
                <V c="w-10 h-10 rounded-lg bg-surface-container-high items-center justify-center">
                  <Ic n="corporate_fare" s={20} c="primary" />
                </V>
                <V c="flex-1">
                  <T c="font-label-lg text-label-lg text-on-surface">{L('School licence', 'Licence d’école')}</T>
                  <T c="font-body-sm text-body-sm text-on-surface-variant">{L('For a whole class or school', 'Pour une classe ou une école')}</T>
                </V>
              </V>
              <P c="px-3 py-1.5 rounded-lg bg-surface-container-high" onPress={() => setLicence(true)}>
                <T c="font-label-sm text-label-sm text-primary">{L('Request', 'Demander')}</T>
              </P>
            </V>
          </V>

          <V c="mt-space-lg rounded-xl bg-surface-container-lowest p-space-md shadow-sm">
            <V c="flex-row items-center justify-between pb-space-sm">
              <V c="flex-row items-center gap-2">
                <Ic n="science" s={20} c="primary" />
                <T c="font-headline-sm text-headline-sm text-on-surface">{L('What you get', 'Ce que vous obtenez')}</T>
              </V>
              <V c="px-2 py-0.5 rounded-full bg-secondary-container">
                <T c="font-label-sm text-label-sm text-on-secondary-container">{L('Free vs Premium', 'Gratuit / Premium')}</T>
              </V>
            </V>
            <V c="gap-space-sm pt-2">
              <Row title={L('Syllabus units', 'Unités')} badge={L('All 10 units', '10 unités')} free={L('Free: units 1 to 3 in full', 'Gratuit : unités 1 à 3')} pro={L('Premium: every lesson', 'Premium : tout')} />
              <Row title={L('Dr. Nkwenti AI tutor', 'Tuteur IA')} badge={L('100 a day', '100 par jour')} free={L('Free: 5 questions a day', 'Gratuit : 5 par jour')} pro={L('Premium: 100 a day', 'Premium : 100 par jour')} />
              <Row title={L('Virtual practicals', 'TP virtuels')} badge={L('All practicals', 'Tous les TP')} free={L('Free: 2 practicals', 'Gratuit : 2 TP')} pro={L('Premium: all of them', 'Premium : tous')} />
              <Row title={L('Mark my answer (AI)', 'Correction IA')} badge={L('30 a day', '30 par jour')} free={L('Free: self-marking', 'Gratuit : auto-correction')} pro={L('Premium: photo marking', 'Premium : correction photo')} />
              <Row title={L('Paper 1 mocks', 'Examens blancs')} badge={L('Unlimited', 'Illimités')} free={L('Free: 1 a week', 'Gratuit : 1 par semaine')} pro={L('Premium: unlimited', 'Premium : illimités')} />
              <Row title={L('Workbook PDF export', 'Export PDF du cahier')} badge={L('Printable', 'Imprimable')} free={L('Free: view only', 'Gratuit : lecture')} pro={L('Premium: export', 'Premium : export')} />
            </V>
          </V>

          <V c="mt-space-lg gap-space-sm">
            <V c="flex-row items-center justify-between px-1">
              <T c="font-label-md text-label-md text-on-surface uppercase tracking-wider">{L('Mobile money', 'Mobile money')}</T>
              <T c="font-label-sm text-label-sm text-on-surface-variant">{L('Approve on your phone', 'Validez sur votre téléphone')}</T>
            </V>
            <V c="flex-row gap-2">
              {PROVIDERS.map((p) => {
                const on = provider === p.id;
                return (
                  <P key={p.id} c={`flex-1 items-center justify-center p-space-sm rounded-xl ${on ? 'bg-surface-container-lowest shadow-md' : 'bg-surface-container-low shadow-sm'}`} onPress={() => setProvider(p.id)}>
                    <V c={`w-8 h-8 rounded-full ${p.bg} items-center justify-center mb-1`} style={{ borderRadius: 16 }}>
                      <T c={`font-label-sm text-label-sm ${p.fg}`}>{p.short}</T>
                    </V>
                    <T c="font-label-sm text-label-sm text-on-surface">{p.name}</T>
                    <T c="font-label-sm text-on-surface-variant" style={{ fontSize: 9 }}>
                      {p.ussd}
                    </T>
                  </P>
                );
              })}
            </V>
            <V c="rounded-xl bg-surface-container-lowest p-space-md shadow-sm gap-space-xs">
              <T c="font-label-sm text-label-sm text-on-surface-variant uppercase">
                {L('Your', 'Votre numéro')} {PROVIDERS.find((p) => p.id === provider).name} {L('number', '')} ({PROVIDERS.find((p) => p.id === provider).prefix})
              </T>
              <V c="flex-row items-center gap-space-sm bg-surface-container-low rounded-lg px-space-sm py-2">
                <T c="font-label-md text-label-md text-on-surface-variant">+237</T>
                <Input
                  c="flex-1 font-headline-sm text-headline-sm tracking-wider"
                  keyboardType="phone-pad"
                  value={phone}
                  onChangeText={(t) => {
                    const d = t.replace(/\D/g, '').replace(/^237/, '').slice(0, 9);
                    setPhone(d);
                    const op = operatorFor(d);
                    if (op) setProvider(op);
                  }}
                  placeholder={provider === 'orange money' ? '690 123 456' : '670 123 456'}
                  maxLength={9}
                />
                <Ic n="phone_android" s={20} c="secondary" />
              </V>
              <V c="mt-1 flex-row items-start gap-1.5">
                <Ic n="lock" s={16} c="primary" style={{ marginTop: 2 }} />
                <T c="font-body-sm text-body-sm text-on-surface-variant flex-1">
                  {L('You will get a prompt on your phone. Enter your mobile money PIN there, never in this app. Payments are processed by Fapshi.', 'Vous recevrez une demande sur votre téléphone. Saisissez votre code PIN là-bas, jamais dans l’application. Paiements traités par Fapshi.')}
                </T>
              </V>
            </V>
          </V>

          {!open && (
            <V c="mt-space-md rounded-xl bg-tertiary-fixed/40 p-space-sm flex-row items-center gap-space-sm">
              <Ic n="info" s={18} c="tertiary" />
              <T c="font-body-sm text-body-sm text-on-tertiary-fixed-variant flex-1">
                {L('Mobile money payments are not open yet. You can still use a school voucher code below.', 'Les paiements ne sont pas encore ouverts. Utilisez un code d’école ci-dessous.')}
              </T>
            </V>
          )}
          <ErrorNote error={error} c="mt-space-md" />

          <V c="mt-space-lg gap-space-sm">
            <Cta label={`${L('Pay', 'Payer')} ${amount ? fcfa(amount) : ''} ${L('with mobile money', 'par mobile money')}`} loading={busy && !voucher} disabled={!open} onPress={pay} />
            <V c="rounded-xl bg-surface-container-lowest p-space-sm shadow-sm items-center">
              <T c="font-body-sm text-body-sm text-on-surface-variant">{L('Have a school voucher code?', 'Un code de votre école ?')}</T>
              <V c="w-full mt-2 flex-row items-center gap-2">
                <Input
                  c="flex-1 bg-surface-container-low px-3 py-2 rounded-lg font-label-md text-label-md tracking-wider"
                  placeholder="XXXX-XXXX-XXXX"
                  value={voucher}
                  onChangeText={(t) => setVoucher(t.toUpperCase().replace(/[^A-Z0-9-]/g, ''))}
                  autoCapitalize="characters"
                  maxLength={14}
                />
                <P c="h-9 px-4 rounded-lg bg-secondary items-center justify-center" onPress={redeem} disabled={busy}>
                  <T c="font-label-sm text-label-sm text-on-secondary">{L('Redeem', 'Utiliser')}</T>
                </P>
              </V>
            </V>
            <V c="rounded-xl bg-surface-container-high/60 p-space-sm flex-row items-center gap-space-sm">
              <V c="w-8 h-8 rounded-full bg-surface-container-lowest items-center justify-center shadow-sm">
                <Ic n="verified_user" s={18} c="secondary" />
              </V>
              <T c="font-body-sm text-body-sm text-on-surface flex-1">
                <T c="font-body-sm text-body-sm text-on-surface" style={{ fontWeight: '600' }}>
                  {L('One-off payment.', 'Paiement unique.')}
                </T>{' '}
                {L('Nothing renews automatically. Premium follows your account on any phone you sign in to.', 'Rien ne se renouvelle automatiquement. Premium suit votre compte sur tout téléphone.')}
              </T>
            </V>
          </V>
        </V>
      </Screen>

      <Modal visible={!!payment} transparent animationType="slide" onRequestClose={() => payment?.status !== 'PENDING' && setPayment(null)}>
        <V c="flex-1 justify-end" style={{ backgroundColor: 'rgba(15,23,42,0.45)' }}>
          <V c="bg-surface-container-lowest rounded-t-3xl p-space-lg gap-space-md items-center">
            {payment?.status === 'SUCCESSFUL' ? (
              <>
                <V c="w-16 h-16 rounded-full bg-secondary-container items-center justify-center" style={{ borderRadius: 32 }}>
                  <Ic n="check_circle" s={36} c="secondary" fill />
                </V>
                <T c="font-headline-md text-headline-md text-on-surface text-center">{L('Payment received', 'Paiement reçu')}</T>
                <T c="font-body-md text-body-md text-on-surface-variant text-center">{L('Premium is now active on your account. Thank you!', 'Premium est actif. Merci !')}</T>
                <Cta label={L('Start revising', 'Commencer')} onPress={() => (setPayment(null), navigation.goBack())} />
              </>
            ) : payment?.status === 'PENDING' ? (
              <>
                <ActivityIndicator size="large" color={C['primary-container']} />
                <T c="font-headline-md text-headline-md text-on-surface text-center">{L('Approve the payment on your phone', 'Validez le paiement sur votre téléphone')}</T>
                <T c="font-body-md text-body-md text-on-surface-variant text-center">
                  {L('A prompt for', 'Une demande de')} {fcfa(payment.amount)} {L('has been sent to', 'a été envoyée au')} +237 {phone}.{' '}
                  {L('If it does not appear, dial', 'Si rien n’apparaît, composez le')} {PROVIDERS.find((p) => p.id === provider).ussd} {L('to see pending approvals.', 'pour voir les validations en attente.')}
                </T>
                <T c="font-label-sm text-label-sm text-on-surface-variant">{L('Checking automatically...', 'Vérification automatique...')}</T>
              </>
            ) : (
              <>
                <V c="w-16 h-16 rounded-full bg-error-container items-center justify-center" style={{ borderRadius: 32 }}>
                  <Ic n="error" s={36} c="on-error-container" />
                </V>
                <T c="font-headline-md text-headline-md text-on-surface text-center">
                  {payment?.status === 'REVIEW' ? L('Payment under review', 'Paiement en vérification') : payment?.status === 'TIMEOUT' ? L('Still waiting', 'Toujours en attente') : L('Payment not completed', 'Paiement non abouti')}
                </T>
                <T c="font-body-md text-body-md text-on-surface-variant text-center">
                  {payment?.error ||
                    (payment?.status === 'TIMEOUT'
                      ? L('We have not received confirmation yet. If you approved it, Premium will activate automatically. Check Me › Payments later.', 'Si vous avez validé, Premium s’activera automatiquement.')
                      : payment?.status === 'REVIEW'
                      ? L('The amount received did not match. Contact support with your payment reference.', 'Le montant ne correspond pas. Contactez le support.')
                      : L('The payment was declined or expired. No money was taken. You can try again.', 'Le paiement a été refusé ou a expiré. Aucun débit.'))}
                </T>
                <Cta variant="soft" icon={null} label={L('Close', 'Fermer')} onPress={() => setPayment(null)} />
              </>
            )}
          </V>
        </V>
      </Modal>

      {licence && <LicenceSheet onClose={() => setLicence(false)} onSent={() => (setLicence(false), showToast(L('Request sent. We will contact you.', 'Demande envoyée.')))} L={L} user={user} />}
      {toast}
    </V>
  );
}

function LicenceSheet({ onClose, onSent, L, user }) {
  const [school, setSchool] = useState(user?.schoolName || '');
  const [students, setStudents] = useState('');
  const [contact, setContact] = useState(user?.phone ? `+${user.phone}` : '');
  const [message, setMessage] = useState('');
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState(null);
  const send = async () => {
    setBusy(true);
    setError(null);
    try {
      await post('/v1/billing/licence-request', { schoolName: school.trim(), students: parseInt(students, 10), contact: contact.trim(), message: message.trim() || undefined });
      onSent();
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
          <T c="font-headline-md text-headline-md text-on-surface">{L('Request a school licence', 'Demander une licence')}</T>
          <Input c="h-12 px-3 rounded-lg bg-surface-container-low text-body-md" placeholder={L('School name', 'Nom de l’école')} value={school} onChangeText={setSchool} maxLength={120} />
          <Input c="h-12 px-3 rounded-lg bg-surface-container-low text-body-md" placeholder={L('Number of students', 'Nombre d’élèves')} value={students} onChangeText={(t) => setStudents(t.replace(/\D/g, ''))} keyboardType="number-pad" maxLength={4} />
          <Input c="h-12 px-3 rounded-lg bg-surface-container-low text-body-md" placeholder={L('Phone or email to contact you', 'Téléphone ou e-mail')} value={contact} onChangeText={setContact} maxLength={120} />
          <Input c="h-20 px-3 py-2 rounded-lg bg-surface-container-low text-body-md" placeholder={L('Anything else (optional)', 'Autre chose (facultatif)')} value={message} onChangeText={setMessage} multiline maxLength={500} />
          <ErrorNote error={error} />
          <Cta label={L('Send request', 'Envoyer')} icon="send" loading={busy} onPress={send} />
          <P c="items-center py-2" onPress={onClose}>
            <T c="font-label-md text-label-md text-on-surface-variant">{L('Cancel', 'Annuler')}</T>
          </P>
        </V>
      </V>
    </Modal>
  );
}
