import { useEffect, useState } from 'react';
import { Ic, P, T, V } from '../../ui/kit';
import { Cta, ErrorNote, Screen } from '../../ui/chrome';
import { MARK_COLORS } from '../../ui/brand';
import { useApp } from '../../state/store';
import { useL, useLang } from '../../i18n';
import { get } from '../../api/client';
import { PLANS, fcfa } from '../../data/plan';
import { examLabel, subjectName } from '../../data/subjects';
import { STORE_BUILD, accessState, longDate } from '../../lib/payments';
import { OnbHeader } from './Steps';

// One way to start, as a card: tapping it is the choice (no Continue needed).
function Offer({ title, price, note, badge, strong, busy, onPress }) {
  return (
    <P
      c={`rounded-2xl p-space-md gap-1 bg-surface-container-lowest ${strong ? 'border-2' : 'border border-outline-variant'}`}
      style={strong ? { borderColor: MARK_COLORS.navy } : null}
      onPress={onPress}
      disabled={busy}
      accessibilityRole="button"
      accessibilityLabel={`${title}, ${price}`}
    >
      <V c="flex-row items-center gap-space-sm">
        <T c="font-headline-sm text-headline-sm text-on-surface flex-1" style={{ fontWeight: '700' }}>
          {title}
        </T>
        {!!badge && (
          <V c="px-2 py-0.5 rounded-full" style={{ backgroundColor: MARK_COLORS.amber }}>
            <T c="font-label-sm text-label-sm" style={{ fontWeight: '800', color: MARK_COLORS.navy }}>
              {badge}
            </T>
          </V>
        )}
        <T c="font-headline-sm text-headline-sm text-primary-container" style={{ fontWeight: '800' }}>
          {price}
        </T>
        <Ic n="chevron_right" s={22} c="outline" />
      </V>
      <T c="font-body-sm text-body-sm text-on-surface-variant" style={{ lineHeight: 20 }}>
        {note}
      </T>
    </P>
  );
}

// The end of signing up. A student chooses how to start by tapping one of the
// offers: the free month (straight into the app), a month or a year (straight
// to paying). A school voucher is entered later, from Me or when the free
// month ends. The Google Play version shows no prices (Play's payments policy).
export default function SetupDone({ navigation }) {
  const { user, updateMe, subjects } = useApp();
  const L = useL();
  const lang = useLang();
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState(null);
  const [offer, setOffer] = useState({ plans: PLANS, paywall: true, open: false });
  const [now] = useState(() => Date.now());
  const role = user?.role || 'student';
  const student = role === 'student';
  const first = (user?.name || '').split(' ')[0];
  const { freeUntil } = accessState(user, now);

  useEffect(() => {
    if (!student || STORE_BUILD) return;
    let live = true;
    get('/v1/billing/plans', { auth: false })
      .then((r) => live && setOffer({ plans: r.plans || PLANS, paywall: r.paywall !== false, open: !!r.paymentsOpen }))
      .catch(() => {});
    return () => {
      live = false;
    };
  }, [student]);

  const finish = async (plan) => {
    setBusy(true);
    setError(null);
    try {
      if (!user?.onboarded) await updateMe({ onboarded: true });
      if (plan) navigation.reset({ index: 1, routes: [{ name: 'Main' }, { name: 'Pay', params: { plan, months: 1 } }] });
      else navigation.reset({ index: 0, routes: [{ name: 'Main' }] });
    } catch (e) {
      setError(e);
    } finally {
      setBusy(false);
    }
  };

  const lines = student
    ? [[user?.className, user?.schoolName].filter(Boolean).join(', '), subjects.length ? `${examLabel(user, L)}: ${subjects.map((id) => subjectName(id, lang)).join(', ')}.` : null]
    : role === 'parent'
      ? [L('Link each of your children with the code shown in their app. Reports arrive every week.', 'Liez chaque enfant avec le code affiché dans son application. Les rapports arrivent chaque semaine.')]
      : role === 'partner'
        ? [user?.schoolName, L('Your promo code is on your Home. Share it, and earn each time someone who joined with it pays.', 'Votre code promo est sur votre accueil. Partagez-le et gagnez à chaque paiement d’une personne inscrite avec ce code.')]
        : [user?.schoolName, L('Students join your class with its code, from registration or from their profile.', 'Les élèves rejoignent votre classe avec son code, à l’inscription ou depuis leur profil.')];

  // Offers only for a student while the charges are on; otherwise one button.
  const offers = student && offer.paywall && (!!freeUntil || (!STORE_BUILD && offer.open));
  const paid = offers && !STORE_BUILD && offer.open;

  return (
    <Screen
      header={<OnbHeader canBack={false} />}
      footer={
        <V c="px-margin pt-space-sm gap-space-xs" style={{ paddingBottom: 12 }}>
          <ErrorNote error={error} c="mb-space-sm" />
          {!offers && <Cta variant="dark" icon={null} label={L('Get started', 'Commencer')} loading={busy} onPress={() => finish(null)} />}
          {offers && !freeUntil && (
            <P c="items-center py-space-sm" onPress={() => finish(null)} hitSlop={8}>
              <T c="font-label-lg text-label-lg text-primary-container" style={{ fontWeight: '700' }}>
                {L('Look around first', 'D’abord découvrir')}
              </T>
            </P>
          )}
        </V>
      }
    >
      <V c="pt-space-xl gap-space-lg pb-space-lg">
        <V c="gap-space-xs">
          <T c="font-headline-lg text-headline-lg text-on-surface tracking-tight">
            {L('You are set up', 'C’est prêt')}, {first}.
          </T>
          {lines.filter(Boolean).map((l) => (
            <T key={l} c="font-body-md text-body-md text-on-surface-variant" style={{ lineHeight: 22 }}>
              {l}
            </T>
          ))}
        </V>

        {offers && (
          <V c="gap-space-sm">
            <V c="gap-0.5">
              <T c="font-headline-sm text-headline-sm text-on-surface" style={{ fontWeight: '700' }}>
                {L('How do you want to start?', 'Comment voulez-vous commencer ?')}
              </T>
              <T c="font-body-sm text-body-sm text-on-surface-variant">{L('Tap one to choose.', 'Touchez votre choix.')}</T>
            </V>
            {!!freeUntil && (
              <Offer
                strong
                busy={busy}
                title={L('Free month', 'Mois gratuit')}
                price={fcfa(0)}
                badge={L('FREE', 'GRATUIT')}
                note={`${L('Everything is open until', 'Tout est ouvert jusqu’au')} ${longDate(freeUntil)}. ${L('Nothing to pay now.', 'Rien à payer maintenant.')}`}
                onPress={() => finish(null)}
              />
            )}
            {paid && (
              <>
                <Offer
                  busy={busy}
                  title={L('Monthly', 'Au mois')}
                  price={fcfa(offer.plans.month.amount)}
                  note={L('One month of everything. Pay with MTN MoMo or Orange Money.', 'Un mois de tout. Payez avec MTN MoMo ou Orange Money.')}
                  onPress={() => finish('month')}
                />
                <Offer
                  busy={busy}
                  title={L('Yearly', 'À l’année')}
                  price={fcfa(offer.plans.year.amount)}
                  note={L('365 days of everything. Two months free compared with paying each month.', '365 jours de tout. Deux mois offerts par rapport au mois.')}
                  onPress={() => finish('year')}
                />
              </>
            )}
          </V>
        )}
      </V>
    </Screen>
  );
}
