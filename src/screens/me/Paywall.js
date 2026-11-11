import { useCallback, useEffect, useState } from 'react';
import { useFocusEffect, useIsFocused } from '@react-navigation/native';
import { AppState, Modal } from 'react-native';
import { Ic, Input, P, T, V } from '../../ui/kit';
import { Cta, ErrorNote, Screen, StackHeader, useToast } from '../../ui/chrome';
import { MARK_COLORS } from '../../ui/brand';
import { get, post } from '../../api/client';
import { useApp } from '../../state/store';
import { useL } from '../../i18n';
import { PLANS as LOCAL_PLANS, fcfa } from '../../data/plan';
import { STORE_BUILD, accessState, longDate } from '../../lib/payments';

export { operatorFor } from '../../lib/payments';

const DAY = 86_400_000;

// One plan to choose. The free month is drawn in the brand navy so it is the
// first thing seen; paid plans are plain cards.
function PlanCard({ on, free, title, price, note, badge, onPress }) {
  const fg = free ? 'text-on-primary' : 'text-on-surface';
  const sub = free ? 'text-on-primary' : 'text-on-surface-variant';
  return (
    <P
      c={`rounded-xl p-space-md gap-space-xs ${free ? 'bg-primary-container' : on ? 'bg-surface-container-low' : 'bg-surface-container-lowest'} ${on ? 'border-2 border-primary-container' : 'border border-outline-variant'}`}
      style={free && on ? { borderColor: MARK_COLORS.amber } : null}
      onPress={onPress}
      accessibilityRole="radio"
      accessibilityState={{ checked: on }}
      aria-checked={on}
      accessibilityLabel={`${title}, ${price}`}
      scale={1}
    >
      <V c="flex-row items-center gap-space-sm">
        <V
          c={`w-6 h-6 rounded-full items-center justify-center ${on ? '' : 'border-2'} ${free ? 'border-on-primary' : 'border-outline-variant'}`}
          style={on ? { backgroundColor: free ? MARK_COLORS.amber : '#043480' } : null}
        >
          {on && <Ic n="check" s={16} c={free ? 'primary-container' : 'on-primary'} />}
        </V>
        <T c={`font-headline-sm text-headline-sm ${fg} flex-1`} style={{ fontWeight: '700' }}>
          {title}
        </T>
        <T c={`font-headline-sm text-headline-sm ${fg}`} style={{ fontWeight: '700' }}>
          {price}
        </T>
      </V>
      {!!badge && (
        <V c="self-start ml-9 px-2 py-0.5 rounded-full" style={{ backgroundColor: free ? MARK_COLORS.amber : '#e8eefc' }}>
          <T c="font-label-sm text-label-sm" style={{ fontWeight: '700', color: MARK_COLORS.navy }}>
            {badge}
          </T>
        </V>
      )}
      <T c={`font-body-sm text-body-sm ${sub} pl-9`} style={{ lineHeight: 20, opacity: free ? 0.92 : 1 }}>
        {note}
      </T>
    </P>
  );
}

// The platform charges: choose a plan, then pay on the next screen (Pay) or
// enter a school voucher (Voucher). route.params:
//   start  right after setting up the account: the free month comes first
//   gate   the account is locked (AppNavigator); there is no way back
export default function Paywall({ navigation, route }) {
  const { user, pro, logout } = useApp();
  const gate = !!route.params?.gate;
  const start = !!route.params?.start;
  const L = useL();
  const focused = useIsFocused();
  const [plans, setPlans] = useState(null);
  const [paywall, setPaywall] = useState(true);
  const [open, setOpen] = useState(true);
  const [now] = useState(() => Date.now());
  const { paidUntil, freeUntil, hadFree } = accessState(user, now);
  const [choice, setChoice] = useState(freeUntil ? 'free' : 'year');
  const [licence, setLicence] = useState(false);
  const [toast, showToast] = useToast();

  // Prices and whether payments are open come from the server, asked again
  // each time this screen is shown and when the app comes back to the front.
  const loadPlans = useCallback(() => {
    get('/v1/billing/plans', { auth: false })
      .then((r) => {
        setPlans(r.plans);
        setPaywall(r.paywall !== false);
        setOpen(r.paymentsOpen);
      })
      .catch(() => {});
  }, []);
  useFocusEffect(loadPlans);
  useEffect(() => {
    const sub = AppState.addEventListener('change', (s) => s === 'active' && loadPlans());
    return () => sub.remove();
  }, [loadPlans]);

  // On the "payment due" screen, once the account is open (paid on another
  // phone, a voucher, days from an admin), go straight into the app.
  useEffect(() => {
    if (gate && pro && focused) navigation.reset({ index: 0, routes: [{ name: 'Main' }] });
  }, [gate, pro, focused, navigation]);

  const P_ = plans || LOCAL_PLANS;
  const enter = () => (start || gate || !navigation.canGoBack() ? navigation.reset({ index: 0, routes: [{ name: 'Main' }] }) : navigation.goBack());
  const go = () => (choice === 'free' ? enter() : navigation.navigate('Pay', { plan: choice }));

  const noCharges = user?.isAdmin || user?.role !== 'student' || !paywall;
  const title = gate
    ? hadFree
      ? L('Your free month has ended', 'Votre mois gratuit est terminé')
      : L('Payment due', 'Paiement à faire')
    : start
    ? L('Choose how to start', 'Choisissez comment commencer')
    : L('Choose your plan', 'Choisissez votre formule');
  const intro = user?.isAdmin
    ? L('Admin accounts do not pay platform charges.', 'Les comptes administrateurs ne paient pas de frais de plateforme.')
    : noCharges
    ? L('Everything is open while Klass8 is being tested, so you do not need to pay yet.', 'Tout est ouvert pendant les tests de Klass8, vous n’avez donc pas encore besoin de payer.')
    : paidUntil
    ? `${L('Klass8 is open on your account until', 'Klass8 est ouvert sur votre compte jusqu’au')} ${longDate(paidUntil)}. ${L('Paying again adds the days to this date.', 'Un nouveau paiement ajoute ses jours à cette date.')}`
    : gate
    ? L('Choose a plan to keep using Klass8. Everything you have done so far is kept.', 'Choisissez une formule pour continuer à utiliser Klass8. Tout ce que vous avez fait est conservé.')
    : L('Every subject, lesson, practical, 3D model and paper, with the tutor and marking.', 'Toutes les matières, leçons, TP, modèles 3D et épreuves, avec le tuteur et la correction.');

  const yearEnd = freeUntil ? (user.createdAt || now) + 365 * DAY : null;
  const label =
    choice === 'free'
      ? start
        ? L('Start my free month', 'Commencer mon mois gratuit')
        : L('Continue with my free month', 'Continuer avec mon mois gratuit')
      : `${L('Continue to payment', 'Continuer vers le paiement')}: ${fcfa(P_[choice]?.amount || 0)}`;

  return (
    <V c="flex-1">
      <Screen
        bg="bg-surface"
        header={<StackHeader close noBack={gate || start} title={L('Platform charges', 'Frais de plateforme')} avatar={false} />}
        footer={
          <V c="px-margin pt-space-sm gap-space-xs" style={{ paddingBottom: 12 }}>
            {noCharges ? (
              <Cta variant="dark" icon={null} label={L('Continue', 'Continuer')} onPress={enter} />
            ) : (
              <>
                {choice !== 'free' && !open && (
                  <T c="font-body-sm text-body-sm text-error">{L('Mobile money payments are not open yet. A school voucher works now.', 'Les paiements mobile money ne sont pas encore ouverts. Un code d’école fonctionne déjà.')}</T>
                )}
                <Cta variant="dark" icon={null} label={label} disabled={choice !== 'free' && !open} onPress={go} />
              </>
            )}
          </V>
        }
      >
        <V c="pb-space-xl gap-space-lg pt-space-md">
          <V c="gap-space-xs">
            <T c="font-headline-lg text-headline-lg text-on-surface tracking-tight">{title}</T>
            <T c="font-body-md text-body-md text-on-surface-variant" style={{ lineHeight: 22 }}>
              {intro}
            </T>
          </V>

          {!noCharges && (
            <V c="gap-space-sm" accessibilityRole="radiogroup">
              {!!freeUntil && (
                <PlanCard
                  free
                  on={choice === 'free'}
                  onPress={() => setChoice('free')}
                  title={L('Free month', 'Mois gratuit')}
                  price={fcfa(0)}
                  badge={L('FREE', 'GRATUIT')}
                  note={`${L('Everything is open until', 'Tout est ouvert jusqu’au')} ${longDate(freeUntil)}. ${L('Nothing to pay now.', 'Rien à payer maintenant.')}`}
                />
              )}
              {!STORE_BUILD && (
                <>
                  <PlanCard
                    on={choice === 'month'}
                    onPress={() => setChoice('month')}
                    title={L('One month', 'Un mois')}
                    price={fcfa(P_.month?.amount || 0)}
                    note={freeUntil ? L('30 days, starting when your free month ends. No automatic renewal.', '30 jours, à partir de la fin de votre mois gratuit. Pas de renouvellement automatique.') : L('30 days. Pay again each month. No automatic renewal.', '30 jours. À payer chaque mois. Pas de renouvellement automatique.')}
                  />
                  <PlanCard
                    on={choice === 'year'}
                    onPress={() => setChoice('year')}
                    title={L('One year', 'Un an')}
                    price={fcfa(P_.year?.amount || 0)}
                    badge={L('Best value', 'Meilleur prix')}
                    note={
                      yearEnd
                        ? `${L('Counts from the day you joined, so it runs until', 'Compte depuis votre inscription, donc jusqu’au')} ${longDate(yearEnd)}. ${L('Two months free compared with paying each month.', 'Deux mois offerts par rapport au paiement mensuel.')}`
                        : L('365 days. Two months free compared with paying each month. No automatic renewal.', '365 jours. Deux mois offerts par rapport au paiement mensuel. Pas de renouvellement automatique.')
                    }
                  />
                </>
              )}
            </V>
          )}

          {!noCharges && (
            <V c="gap-space-xs">
              <P c="flex-row items-center justify-between gap-space-sm py-space-xs" onPress={() => navigation.navigate('Voucher')}>
                <V c="flex-row items-center gap-space-sm flex-1">
                  <Ic n="redeem" s={22} c="primary-container" />
                  <T c="font-label-lg text-label-lg text-on-surface flex-1" style={{ fontWeight: '700' }}>
                    {L('I have a voucher from my school', 'J’ai un code de mon école')}
                  </T>
                </V>
                <Ic n="chevron_right" s={20} c="outline" />
              </P>
              <P c="flex-row items-center justify-between gap-space-sm py-space-xs" onPress={() => setLicence(true)}>
                <V c="flex-row items-center gap-space-sm flex-1">
                  <Ic n="school" s={22} c="primary-container" />
                  <T c="font-label-lg text-label-lg text-on-surface flex-1" style={{ fontWeight: '700' }}>
                    {L('For a whole class or school', 'Pour une classe ou une école')}
                  </T>
                </V>
                <Ic n="chevron_right" s={20} c="outline" />
              </P>
            </V>
          )}

          {gate && (
            <V c="flex-row gap-space-md">
              <P c="py-space-xs" onPress={() => navigation.navigate('Settings')} hitSlop={8}>
                <T c="font-label-md text-label-md text-primary-container">{L('Settings', 'Paramètres')}</T>
              </P>
              <P c="py-space-xs" onPress={logout} hitSlop={8}>
                <T c="font-label-md text-label-md text-primary-container">{L('Sign out', 'Se déconnecter')}</T>
              </P>
            </V>
          )}
        </V>
      </Screen>

      {licence && <LicenceSheet onClose={() => setLicence(false)} onSent={() => (setLicence(false), showToast(L('Request sent. We will contact you.', 'Demande envoyée. Nous vous contacterons.')))} L={L} user={user} />}
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
        <V c="bg-surface-container-lowest rounded-t-xl p-space-lg gap-space-sm">
          <T c="font-headline-md text-headline-md text-on-surface" style={{ fontWeight: '700' }}>
            {L('School licence request', 'Demande de licence d’école')}
          </T>
          <Input c="h-12 px-3 rounded-lg bg-surface-container-low text-body-md" placeholder={L('School name', 'Nom de l’école')} value={school} onChangeText={setSchool} maxLength={120} />
          <Input c="h-12 px-3 rounded-lg bg-surface-container-low text-body-md" placeholder={L('Number of students', 'Nombre d’élèves')} value={students} onChangeText={(t) => setStudents(t.replace(/\D/g, ''))} keyboardType="number-pad" maxLength={4} />
          <Input c="h-12 px-3 rounded-lg bg-surface-container-low text-body-md" placeholder={L('Phone or email to reach you', 'Téléphone ou e-mail')} value={contact} onChangeText={setContact} maxLength={120} />
          <Input c="h-20 px-3 py-2 rounded-lg bg-surface-container-low text-body-md" placeholder={L('Anything else (optional)', 'Autre chose (facultatif)')} value={message} onChangeText={setMessage} multiline maxLength={500} />
          <ErrorNote error={error} />
          <Cta variant="dark" icon={null} label={L('Send request', 'Envoyer la demande')} loading={busy} onPress={send} />
          <P c="items-center py-2" onPress={onClose}>
            <T c="font-label-md text-label-md text-on-surface-variant">{L('Cancel', 'Annuler')}</T>
          </P>
        </V>
      </V>
    </Modal>
  );
}
