// Admin Prices: the price of each plan and whether students are charged at
// all. The app and the website read them from the server, so both follow at once.
import { useState } from 'react';
import { T, V } from '../../ui/kit';
import { Cta, ErrorNote, Screen, StackHeader, useToast } from '../../ui/chrome';
import { Field, Toggle } from '../../ui/form';
import { useL } from '../../i18n';
import { fcfa } from '../../data/plan';
import { put } from '../../api/adminClient';
import { Card, Loading, useAdminLoad } from './kit';

const digits = (t) => t.replace(/\D/g, '').slice(0, 7);

export default function AdminPrices({ navigation }) {
  const L = useL();
  const { data: s, error, busy } = useAdminLoad('/v1/admin/settings');
  const [toast, showToast] = useToast();
  return (
    <V c="flex-1">
      <Screen header={<StackHeader title={L('Prices and charges', 'Prix et frais')} avatar={false} />} keyboard>
        <V c="gap-space-lg pt-space-md pb-space-xl">
          <T c="font-body-md text-body-md text-on-surface-variant" style={{ lineHeight: 22 }}>
            {L(
              'What students pay for Klass8 after their free month. New prices show in the app and on the website within a minute. Payments already started keep their price.',
              'Ce que les élèves paient après leur mois gratuit. Les nouveaux prix apparaissent dans l’application et sur le site en moins d’une minute. Les paiements déjà lancés gardent leur prix.'
            )}
          </T>
          <ErrorNote error={error} />
          {busy && !s && <Loading />}
          {!!s && <PriceForm s={s} L={L} navigation={navigation} showToast={showToast} />}
        </V>
      </Screen>
      {toast}
    </V>
  );
}

// The form, shown once the current settings are loaded, starting from them.
function PriceForm({ s, L, navigation, showToast }) {
  const [month, setMonth] = useState(String(s.priceMonth));
  const [year, setYear] = useState(String(s.priceYear));
  const [charging, setCharging] = useState(s.charging);
  const [saving, setSaving] = useState(false);
  const [saveError, setSaveError] = useState(null);

  const m = parseInt(month, 10);
  const y = parseInt(year, 10);
  const save = async () => {
    setSaveError(null);
    if (!(m >= 100) || !(y >= 100)) return setSaveError(L('Each price must be at least 100 FCFA.', 'Chaque prix doit être d’au moins 100 FCFA.'));
    setSaving(true);
    try {
      const body = { priceMonth: m, priceYear: y };
      if (charging !== s.charging) body.charging = charging;
      await put('/v1/admin/settings', body);
      showToast(L('Prices saved', 'Prix enregistrés'));
      setTimeout(() => navigation.goBack(), 900);
    } catch (e) {
      setSaveError(e);
    } finally {
      setSaving(false);
    }
  };

  return (
    <>
      <Card>
        <V c="p-space-md gap-space-md">
          <Field
            label={L('Price for 1 month (FCFA)', 'Prix pour 1 mois (FCFA)')}
            value={month}
            onChangeText={(t) => setMonth(digits(t))}
            keyboardType="number-pad"
            hint={m >= 100 ? `${L('Students pay', 'Les élèves paient')} ${fcfa(m)} ${L('for 30 days.', 'pour 30 jours.')}` : null}
          />
          <Field
            label={L('Price for 1 year (FCFA)', 'Prix pour 1 an (FCFA)')}
            value={year}
            onChangeText={(t) => setYear(digits(t))}
            keyboardType="number-pad"
            hint={m >= 100 && y >= 100 ? `${L('The same as', 'Comme')} ${(y / m).toFixed(1).replace('.0', '')} ${L('months at the monthly price.', 'mois au prix mensuel.')}` : null}
          />
        </V>
      </Card>
      <Card>
        <V c="p-space-md flex-row items-center gap-space-sm">
          <V c="flex-1 gap-0.5">
            <T c="font-label-lg text-label-lg text-on-surface" style={{ fontWeight: '700' }}>
              {L('Charge students', 'Faire payer les élèves')}
            </T>
            <T c="font-body-sm text-body-sm text-on-surface-variant">
              {charging
                ? L('On: after their free month, students pay to keep Klass8 open.', 'Activé : après leur mois gratuit, les élèves paient pour garder Klass8.')
                : L('Off: Klass8 is free for everyone.', 'Désactivé : Klass8 est gratuit pour tous.')}
            </T>
          </V>
          <Toggle on={charging} onPress={() => (charging || s.paymentsOpen) && setCharging((c) => !c)} accessibilityLabel={L('Charge students', 'Faire payer les élèves')} />
        </V>
        {!s.paymentsOpen && (
          <T c="font-body-sm text-body-sm text-error px-space-md pb-space-md">
            {L('Mobile money is not set up yet, so charges cannot be switched on.', 'Le mobile money n’est pas encore configuré : les frais ne peuvent pas être activés.')}
          </T>
        )}
      </Card>
      <ErrorNote error={saveError} />
      <Cta variant="dark" icon="check" label={L('Save', 'Enregistrer')} loading={saving} onPress={save} />
    </>
  );
}
