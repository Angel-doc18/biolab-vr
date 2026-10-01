import { useEffect, useRef, useState } from 'react';
import { ActivityIndicator } from 'react-native';
import { C, Ic, Input, P, T, V } from '../../ui/kit';
import { Cta, ErrorNote, Screen, useToast } from '../../ui/chrome';
import { get, post } from '../../api/client';
import { useApp } from '../../state/store';
import { useL } from '../../i18n';
import { nextStep } from '../../navigation/routes';
import { OnbHeader, StepBar } from './Steps';

export const REGIONS = ['Adamawa', 'Centre', 'East', 'Far North', 'Littoral', 'North', 'North West', 'South', 'South West', 'West'];

// Codes: class join codes look like GBHS-4K7PQX; school licence vouchers like ABCD-EFGH-JKLM.
const isVoucher = (c) => /^[A-Z0-9]{4}-?[A-Z0-9]{4}-?[A-Z0-9]{4}$/.test(c);

function SchoolCard({ s, on, onPress, L }) {
  return (
    <P c={`p-space-md rounded-xl shadow-sm ${on ? 'bg-surface-container-low' : 'bg-surface-container-lowest'}`} onPress={onPress} accessibilityRole="radio" accessibilityState={{ checked: on }}>
      <V c="flex-row items-start justify-between gap-space-sm mb-2">
        <V c="flex-row items-center gap-2 flex-1">
          <V c={`w-8 h-8 rounded-lg items-center justify-center ${on ? 'bg-surface-container-highest' : 'bg-surface-container'}`}>
            <Ic n={on ? 'account_balance' : 'school'} s={18} c={on ? 'primary' : 'on-surface-variant'} />
          </V>
          <T c="font-headline-sm text-headline-sm text-on-surface flex-1" style={{ fontWeight: on ? '700' : '600' }} numberOfLines={1}>
            {s.name}
          </T>
        </V>
        <V c={`w-6 h-6 rounded-full items-center justify-center ${on ? 'bg-secondary shadow-sm' : 'bg-surface-container-high'}`}>{on && <Ic n="check" s={16} c="on-secondary" />}</V>
      </V>
      <V c="flex-row items-center gap-1.5 pl-10">
        <Ic n="location_on" s={15} c="outline" />
        <T c="font-body-sm text-body-sm text-on-surface-variant" numberOfLines={1}>
          {s.region} {L('Region', 'Région')} · {s.town}
        </T>
      </V>
      {s.students > 0 && (
        <V c="flex-row pl-10 mt-3">
          <V c="flex-row items-center gap-1.5 px-2.5 py-1 rounded-lg bg-secondary/15">
            <Ic n="groups" s={14} c="secondary" />
            <T c="font-label-sm text-label-sm text-secondary">
              {s.students} {L('students on BioSpatial', 'élèves sur BioSpatial')}
            </T>
          </V>
        </V>
      )}
    </P>
  );
}

function AddSchool({ onCreated, L }) {
  const [name, setName] = useState('');
  const [town, setTown] = useState('');
  const [region, setRegion] = useState(null);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState(null);
  const submit = async () => {
    if (name.trim().length < 3 || town.trim().length < 2 || !region) {
      setError(L('Enter the school name, town and region.', 'Entrez le nom, la ville et la région.'));
      return;
    }
    setBusy(true);
    setError(null);
    try {
      const r = await post('/v1/schools', { name: name.trim(), town: town.trim(), region });
      onCreated(r.school);
    } catch (e) {
      setError(e);
    } finally {
      setBusy(false);
    }
  };
  return (
    <V c="p-space-md rounded-xl bg-surface-container-low shadow-sm gap-space-sm mb-space-lg">
      <V c="flex-row items-start gap-3">
        <V c="w-10 h-10 rounded-xl bg-primary items-center justify-center shadow-sm">
          <Ic n="add_business" s={22} c="on-primary" />
        </V>
        <V c="flex-1">
          <T c="font-headline-sm text-headline-sm text-on-surface" style={{ fontWeight: '700' }}>
            {L('Add your school', 'Ajouter votre école')}
          </T>
          <T c="font-body-sm text-body-sm text-on-surface-variant">{L('Students will find it when they join.', 'Les élèves la trouveront en s’inscrivant.')}</T>
        </V>
      </V>
      <Input c="h-11 px-3.5 bg-surface-container-lowest rounded-lg text-body-md" placeholder={L('School name, e.g. GBHS Limbe', 'Nom de l’école')} value={name} onChangeText={setName} maxLength={120} />
      <Input c="h-11 px-3.5 bg-surface-container-lowest rounded-lg text-body-md" placeholder={L('Town', 'Ville')} value={town} onChangeText={setTown} maxLength={60} />
      <V c="flex-row flex-wrap gap-1.5">
        {REGIONS.map((r) => (
          <P key={r} c={`px-2.5 py-1.5 rounded-lg ${region === r ? 'bg-primary-container' : 'bg-surface-container-lowest'}`} onPress={() => setRegion(r)}>
            <T c={`font-label-sm text-label-sm ${region === r ? 'text-on-primary' : 'text-on-surface-variant'}`}>{r}</T>
          </P>
        ))}
      </V>
      <ErrorNote error={error} />
      <Cta h="h-11" label={L('Add school', 'Ajouter')} icon="add" onPress={submit} loading={busy} />
    </V>
  );
}

export default function School({ navigation, route }) {
  const { user, updateMe, refreshMe } = useApp();
  const L = useL();
  const teacher = user?.role === 'teacher';
  const [q, setQ] = useState('');
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [picked, setPicked] = useState(null);
  const [code, setCode] = useState('');
  const [codeState, setCodeState] = useState(null);
  const [codeBusy, setCodeBusy] = useState(false);
  const [error, setError] = useState(null);
  const [busy, setBusy] = useState(false);
  const [adding, setAdding] = useState(false);
  const [toast, showToast] = useToast();
  const timer = useRef(null);

  useEffect(() => {
    clearTimeout(timer.current);
    setLoading(true);
    timer.current = setTimeout(async () => {
      try {
        const r = await get(`/v1/schools?q=${encodeURIComponent(q.trim())}`);
        setItems(r.items);
        setError(null);
      } catch (e) {
        setError(e);
      } finally {
        setLoading(false);
      }
    }, 300);
    return () => clearTimeout(timer.current);
  }, [q]);

  const applyCode = async () => {
    const c = code.trim().toUpperCase();
    if (c.length < 6) return setCodeState({ error: L('Enter the full code.', 'Entrez le code complet.') });
    setCodeBusy(true);
    setCodeState(null);
    try {
      if (isVoucher(c)) {
        const r = await post('/v1/billing/redeem', { code: c });
        await refreshMe().catch(() => {});
        setCodeState({ ok: `${r.label || L('School licence', 'Licence')} ${L('applied. Premium is active.', 'appliquée. Premium activé.')}` });
      } else {
        const r = await post('/v1/classes/join', { code: c });
        await refreshMe().catch(() => {});
        setCodeState({ ok: `${L('Joined', 'Classe rejointe :')} ${r.class.name}${r.class.schoolName ? ` · ${r.class.schoolName}` : ''}` });
      }
      showToast(L('Code applied', 'Code appliqué'));
    } catch (e) {
      setCodeState({ error: e.message });
    } finally {
      setCodeBusy(false);
    }
  };

  const next = () => (route.params?.fromSettings ? navigation.goBack() : navigation.navigate(nextStep(user?.role || 'student', 'School')));
  const submit = async () => {
    if (!picked) {
      if (teacher) return setError(L('Choose your school or add it.', 'Choisissez ou ajoutez votre école.'));
      return next();
    }
    setBusy(true);
    setError(null);
    try {
      await updateMe({ schoolId: picked.id });
      next();
    } catch (e) {
      setError(e);
    } finally {
      setBusy(false);
    }
  };
  const independent = async () => {
    try {
      await updateMe({ schoolId: null, schoolName: L('Independent candidate', 'Candidat libre') });
    } catch {
      // not critical
    }
    next();
  };

  return (
    <V c="flex-1">
      <Screen keyboard header={<OnbHeader label={L('School', 'École')} />}>
        <StepBar pct={60} left={L('Step 3 of 5 · Institution', 'Étape 3 sur 5 · École')} right={L('60% complete', '60 % terminé')} rightBold={false} />
        <V c="gap-space-xs mb-space-md">
          <V c="self-start flex-row items-center gap-1.5 px-2.5 py-1 rounded-full bg-surface-container-high">
            <Ic n="domain" s={14} c="primary" />
            <T c="font-label-sm text-label-sm text-primary uppercase tracking-wider">{L('Your school', 'Votre école')}</T>
          </V>
          <T c="font-headline-lg text-headline-lg text-on-surface tracking-tight">{L('Find your school', 'Trouvez votre école')}</T>
          <T c="font-body-md text-body-md text-on-surface-variant" style={{ lineHeight: 22 }}>
            {teacher
              ? L('Choose the school you teach at, or add it if it is not listed yet.', 'Choisissez votre école ou ajoutez-la.')
              : L('Link your school to receive work from your teacher and appear in your class.', 'Liez votre école pour recevoir le travail de votre enseignant.')}
          </T>
        </V>
        <V c="flex-row items-center bg-surface-container-low rounded-xl shadow-sm mb-space-md">
          <V c="pl-3.5">
            <Ic n="search" s={22} c="outline" />
          </V>
          <Input c="flex-1 h-[52px] pl-2.5 pr-2 text-body-md" placeholder={L('Search by school name or town', 'Nom de l’école ou ville')} value={q} onChangeText={setQ} autoCorrect={false} returnKeyType="search" />
          {!!q && (
            <P c="w-8 h-8 items-center justify-center mr-2" onPress={() => setQ('')} accessibilityLabel="Clear search">
              <Ic n="cancel" s={18} c="outline" />
            </P>
          )}
        </V>
        <V c="gap-space-sm mb-space-sm" accessibilityRole="radiogroup">
          {loading ? (
            <V c="py-6 items-center">
              <ActivityIndicator color={C['primary-container']} />
            </V>
          ) : items.length ? (
            items.map((s) => <SchoolCard key={s.id} s={s} on={picked?.id === s.id} onPress={() => setPicked(s)} L={L} />)
          ) : (
            <V c="p-space-md rounded-xl bg-surface-container-lowest shadow-sm items-center gap-1">
              <Ic n="travel_explore" s={28} c="outline" />
              <T c="font-label-lg text-label-lg text-on-surface">{q ? L('No school matches your search', 'Aucune école trouvée') : L('No schools have joined yet', 'Aucune école inscrite')}</T>
              <T c="font-body-sm text-body-sm text-on-surface-variant text-center">
                {teacher ? L('Add your school below.', 'Ajoutez votre école ci-dessous.') : L('Schools appear here when a teacher registers them.', 'Les écoles apparaissent quand un enseignant les inscrit.')}
              </T>
            </V>
          )}
        </V>
        {teacher ? (
          adding ? (
            <AddSchool
              L={L}
              onCreated={(s) => {
                setItems((x) => [s, ...x]);
                setPicked(s);
                setAdding(false);
              }}
            />
          ) : (
            <P c="flex-row items-center justify-center gap-1.5 py-2 px-3 mb-space-lg" onPress={() => setAdding(true)}>
              <Ic n="add_business" s={18} c="primary" />
              <T c="font-label-md text-label-md text-primary">{L('My school is not listed: add it', 'Mon école n’est pas listée : l’ajouter')}</T>
            </P>
          )
        ) : (
          <>
            <P c="flex-row items-center justify-center gap-1.5 py-2 px-3 mb-space-lg" onPress={independent}>
              <Ic n="person_pin" s={18} c="primary" />
              <T c="font-label-md text-label-md text-primary text-center flex-shrink">{L('My school isn’t listed (continue as an independent candidate)', 'Mon école n’est pas listée (candidat libre)')}</T>
            </P>
            <V c="p-space-md rounded-xl bg-surface-container-low shadow-sm gap-space-sm mb-space-lg">
              <V c="flex-row items-start gap-3">
                <V c="w-10 h-10 rounded-xl bg-primary items-center justify-center shadow-sm">
                  <Ic n="vpn_key" s={22} c="on-primary" />
                </V>
                <V c="flex-1">
                  <T c="font-headline-sm text-headline-sm text-on-surface" style={{ fontWeight: '700', lineHeight: 21 }}>
                    {L('Have a class or licence code from your teacher?', 'Un code de classe ou de licence ?')}
                  </T>
                  <T c="font-body-sm text-body-sm text-on-surface-variant">{L('Joins your class, or unlocks Premium paid by your school.', 'Rejoint votre classe ou active le Premium payé par l’école.')}</T>
                </V>
              </V>
              <V c="flex-row items-center gap-2 mt-1">
                <Input
                  c="flex-1 h-11 px-3.5 bg-surface-container-lowest rounded-lg text-body-md tracking-wide"
                  placeholder={L('e.g. GBHS-4K7PQX', 'ex. GBHS-4K7PQX')}
                  value={code}
                  onChangeText={(t) => setCode(t.toUpperCase().replace(/[^A-Z0-9-]/g, ''))}
                  autoCapitalize="characters"
                  maxLength={16}
                />
                <P c={`h-11 px-4 rounded-lg items-center justify-center shadow-sm ${codeState?.ok ? 'bg-secondary' : 'bg-primary-container'}`} onPress={applyCode} disabled={codeBusy}>
                  {codeBusy ? <ActivityIndicator color="#fff" /> : <T c="font-label-lg text-label-lg text-on-primary">{codeState?.ok ? L('Applied', 'Appliqué') : L('Apply', 'Appliquer')}</T>}
                </P>
              </V>
              {codeState?.ok ? (
                <V c="flex-row items-start gap-1.5 pt-1">
                  <Ic n="check_circle" s={16} c="secondary" />
                  <T c="font-body-sm text-body-sm text-secondary flex-1">{codeState.ok}</T>
                </V>
              ) : codeState?.error ? (
                <T c="font-body-sm text-body-sm text-error">{codeState.error}</T>
              ) : (
                <V c="flex-row items-start gap-1.5 pt-1">
                  <Ic n="verified_user" s={16} c="secondary" />
                  <T c="font-body-sm text-body-sm text-on-surface-variant flex-1">{L('You can also enter a code later from your profile.', 'Vous pouvez aussi saisir un code plus tard.')}</T>
                </V>
              )}
            </V>
          </>
        )}
        <ErrorNote error={error} c="mb-space-sm" />
        <V c="gap-2 pt-2 pb-8">
          <Cta label={teacher ? L('Continue to your class', 'Continuer vers la classe') : L('Continue to study goals', 'Continuer vers les objectifs')} loading={busy} onPress={submit} />
          <V c="flex-row items-center justify-center gap-1.5 py-1">
            <Ic n="offline_pin" s={14} />
            <T c="font-label-sm text-label-sm text-on-surface-variant">{L('Lessons and 3D models are already on your phone', 'Cours et modèles 3D déjà sur votre téléphone')}</T>
          </V>
        </V>
      </Screen>
      {toast}
    </V>
  );
}
