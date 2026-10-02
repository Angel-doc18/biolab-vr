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
    <P
      c={`p-space-md rounded-xl flex-row items-center gap-space-sm ${on ? 'bg-surface-container-low border-2 border-primary-container' : 'bg-surface-container-lowest border border-outline-variant'}`}
      onPress={onPress}
      accessibilityRole="radio"
      accessibilityState={{ checked: on }}
    >
      <V c="flex-1 gap-0.5">
        <T c="font-label-lg text-label-lg text-on-surface" style={{ fontWeight: '700' }} numberOfLines={1}>
          {s.name}
        </T>
        <T c="font-body-sm text-body-sm text-on-surface-variant" numberOfLines={1}>
          {s.town}, {s.region}
          {s.students > 0 ? `. ${s.students} ${s.students === 1 ? L('student', 'élève') : L('students', 'élèves')}` : ''}
        </T>
      </V>
      <V c={`w-6 h-6 rounded-full items-center justify-center ${on ? 'bg-primary-container' : 'border-2 border-outline-variant'}`}>{on && <Ic n="check" s={16} c="on-primary" />}</V>
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
    <V c="p-space-md rounded-xl bg-surface-container-low gap-space-sm mb-space-lg">
      <V c="gap-0.5">
        <T c="font-headline-sm text-headline-sm text-on-surface" style={{ fontWeight: '700' }}>
          {L('Add your school', 'Ajouter votre école')}
        </T>
        <T c="font-body-sm text-body-sm text-on-surface-variant">{L('Your students will find it when they register.', 'Vos élèves la trouveront en s’inscrivant.')}</T>
      </V>
      <Input c="h-11 px-3.5 bg-surface-container-lowest rounded-lg text-body-md" placeholder={L('School name, for example GBHS Limbe', 'Nom de l’école, par exemple Lycée de Biyem-Assi')} value={name} onChangeText={setName} maxLength={120} />
      <Input c="h-11 px-3.5 bg-surface-container-lowest rounded-lg text-body-md" placeholder={L('Town', 'Ville')} value={town} onChangeText={setTown} maxLength={60} />
      <V c="flex-row flex-wrap gap-1.5">
        {REGIONS.map((r) => (
          <P key={r} c={`px-2.5 py-1.5 rounded-lg ${region === r ? 'bg-primary-container' : 'bg-surface-container-lowest'}`} onPress={() => setRegion(r)}>
            <T c={`font-label-sm text-label-sm ${region === r ? 'text-on-primary' : 'text-on-surface-variant'}`}>{r}</T>
          </P>
        ))}
      </V>
      <ErrorNote error={error} />
      <Cta h="h-11" variant="dark" icon={null} label={L('Add school', 'Ajouter')} onPress={submit} loading={busy} />
    </V>
  );
}

export default function School({ navigation, route }) {
  const { user, updateMe, refreshMe } = useApp();
  const L = useL();
  const teacher = user?.role === 'teacher';
  const fromSettings = route.params?.fromSettings;
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
        setCodeState({ ok: `${r.label || L('School licence', 'Licence')} ${L('applied. The full course is unlocked.', 'appliquée. Le cours complet est débloqué.')}` });
      } else {
        const r = await post('/v1/classes/join', { code: c });
        await refreshMe().catch(() => {});
        setCodeState({ ok: `${L('You joined', 'Classe rejointe :')} ${r.class.name}${r.class.schoolName ? `, ${r.class.schoolName}` : ''}.` });
      }
      showToast(L('Code applied', 'Code appliqué'));
    } catch (e) {
      setCodeState({ error: e.message });
    } finally {
      setCodeBusy(false);
    }
  };

  const next = () => (fromSettings ? navigation.goBack() : navigation.navigate(nextStep(user?.role || 'student', 'School')));
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
      <Screen keyboard header={<OnbHeader />}>
        {!fromSettings && <StepBar screen="School" />}
        <V c="gap-space-xs mb-space-md">
          <T c="font-headline-lg text-headline-lg text-on-surface tracking-tight">{L('Your school', 'Votre école')}</T>
          <T c="font-body-md text-body-md text-on-surface-variant" style={{ lineHeight: 22 }}>
            {teacher
              ? L('Choose the school you teach at, or add it if it is not listed.', 'Choisissez votre école ou ajoutez-la si elle n’est pas listée.')
              : L('Linking your school lets your teacher send you work.', 'Lier votre école permet à votre enseignant de vous envoyer du travail.')}
          </T>
        </V>
        <V c="flex-row items-center bg-surface-container-lowest border border-outline-variant rounded-xl mb-space-md">
          <V c="pl-3.5">
            <Ic n="search" s={22} c="outline" />
          </V>
          <Input c="flex-1 h-[52px] pl-2.5 pr-2 text-body-md" placeholder={L('School name or town', 'Nom de l’école ou ville')} value={q} onChangeText={setQ} autoCorrect={false} returnKeyType="search" />
          {!!q && (
            <P c="w-8 h-8 items-center justify-center mr-2" onPress={() => setQ('')} accessibilityLabel="Clear search">
              <Ic n="close" s={18} c="outline" />
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
            <V c="p-space-md rounded-xl bg-surface-container-low gap-1">
              <T c="font-label-lg text-label-lg text-on-surface">{q ? L('No school matches your search', 'Aucune école trouvée') : L('No schools registered yet', 'Aucune école inscrite')}</T>
              <T c="font-body-sm text-body-sm text-on-surface-variant">
                {teacher ? L('Add your school below.', 'Ajoutez votre école ci-dessous.') : L('A school appears here once a teacher registers it.', 'Une école apparaît ici quand un enseignant l’inscrit.')}
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
            <P c="py-2 mb-space-lg self-start" onPress={() => setAdding(true)} hitSlop={8}>
              <T c="font-label-md text-label-md text-primary" style={{ fontWeight: '700' }}>
                {L('My school is not listed', 'Mon école n’est pas listée')}
              </T>
            </P>
          )
        ) : (
          <>
            <P c="py-2 mb-space-lg self-start" onPress={independent} hitSlop={8}>
              <T c="font-label-md text-label-md text-primary" style={{ fontWeight: '700' }}>
                {L('I am an independent candidate', 'Je suis candidat libre')}
              </T>
            </P>
            <V c="p-space-md rounded-xl bg-surface-container-low gap-space-sm mb-space-lg">
              <V c="gap-0.5">
                <T c="font-label-lg text-label-lg text-on-surface" style={{ fontWeight: '700' }}>
                  {L('Class or licence code', 'Code de classe ou de licence')}
                </T>
                <T c="font-body-sm text-body-sm text-on-surface-variant">
                  {L('From your teacher. It adds you to the class, or unlocks the course if your school paid.', 'Donné par votre enseignant. Il vous ajoute à la classe ou débloque le cours payé par l’école.')}
                </T>
              </V>
              <V c="flex-row items-center gap-2">
                <Input
                  c="flex-1 h-11 px-3.5 bg-surface-container-lowest rounded-lg text-body-md tracking-wide"
                  placeholder="GBHS-4K7PQX"
                  value={code}
                  onChangeText={(t) => setCode(t.toUpperCase().replace(/[^A-Z0-9-]/g, ''))}
                  autoCapitalize="characters"
                  maxLength={16}
                />
                <P c="h-11 px-4 rounded-lg items-center justify-center bg-primary-container" onPress={applyCode} disabled={codeBusy}>
                  {codeBusy ? <ActivityIndicator color="#fff" /> : <T c="font-label-lg text-label-lg text-on-primary">{L('Apply', 'Appliquer')}</T>}
                </P>
              </V>
              {codeState?.ok ? (
                <T c="font-body-sm text-body-sm text-secondary">{codeState.ok}</T>
              ) : codeState?.error ? (
                <T c="font-body-sm text-body-sm text-error">{codeState.error}</T>
              ) : (
                <T c="font-body-sm text-body-sm text-on-surface-variant">{L('You can also enter it later from your profile.', 'Vous pouvez aussi le saisir plus tard depuis votre profil.')}</T>
              )}
            </V>
          </>
        )}
        <ErrorNote error={error} c="mb-space-sm" />
        <V c="pt-2 pb-8">
          <Cta variant="dark" icon={null} label={fromSettings ? L('Save', 'Enregistrer') : L('Continue', 'Continuer')} loading={busy} onPress={submit} />
        </V>
      </Screen>
      {toast}
    </V>
  );
}
