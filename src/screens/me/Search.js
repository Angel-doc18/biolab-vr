import { useMemo, useState } from 'react';
import { ScrollView } from 'react-native';
import { Ic, Input, P, T, V } from '../../ui/kit';
import { Screen, StackHeader } from '../../ui/chrome';
import { StaticTabBar } from '../../ui/TabBar';
import { SpecimenPreview } from '../../ui/previews';
import { useL } from '../../i18n';
import { units, unitById } from '../../data/units';
import { LESSONS, plain } from '../../data/lessons';
import { LABS } from '../../data/labs';
import { BANK } from '../../lib/exam';

const norm = (s) => String(s || '').toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '');

function score(text, terms) {
  const t = norm(text);
  return terms.every((w) => t.includes(w)) ? terms.reduce((a, w) => a + (t.split(w).length - 1), 0) : 0;
}

export default function Search({ navigation }) {
  const L = useL();
  const [q, setQ] = useState('');
  const [scope, setScope] = useState('all');
  const terms = norm(q).split(/\s+/).filter((w) => w.length > 1);

  const results = useMemo(() => {
    if (!terms.length) return { units: [], lessons: [], models: [], questions: [], labs: [] };
    const rank = (list, fn) =>
      list
        .map((x) => [x, fn(x)])
        .filter(([, s]) => s > 0)
        .sort((a, b) => b[1] - a[1])
        .map(([x]) => x);
    return {
      units: rank(units, (u) => score(`${u.title} ${u.short} ${u.focus}`, terms)),
      lessons: rank(LESSONS, (l) => score(`${l.title} ${l.title} ${plain(l.body.join(' '))} ${l.terms.map((t) => t.join(' ')).join(' ')}`, terms)).slice(0, 12),
      models: rank(units, (u) => score(`${u.vr.title} ${u.vr.subtitle} ${u.vr.parts.map((p) => `${p.name} ${p.title} ${p.fr?.name || ''}`).join(' ')}`, terms)),
      questions: rank(BANK, (b) => score(`${b.q} ${b.a[0]} ${b.why}`, terms)).slice(0, 12),
      labs: rank(
        LABS.filter((l) => !l.soon),
        (l) => score(`${l.title} ${l.desc} ${l.short}`, terms)
      ),
    };
  }, [q]);

  const counts = { units: results.units.length + results.lessons.length, models: results.models.length, questions: results.questions.length, labs: results.labs.length };
  const total = Object.values(counts).reduce((a, b) => a + b, 0);
  const show = (k) => scope === 'all' || scope === k;
  const Section = ({ icon, title, n, children }) => (
    <V c="gap-space-xs">
      <V c="flex-row items-center justify-between px-1 mb-1">
        <V c="flex-row items-center gap-1.5">
          <Ic n={icon} s={20} c="secondary" />
          <T c="font-headline-sm text-on-surface uppercase tracking-wide" style={{ fontSize: 12, fontWeight: '700' }}>
            {title}
          </T>
        </V>
        <T c="font-label-sm text-label-sm text-on-surface-variant">
          {n} {n === 1 ? L('result', 'résultat') : L('results', 'résultats')}
        </T>
      </V>
      {children}
    </V>
  );

  return (
    <V c="flex-1">
      <Screen header={<StackHeader title={L('Search', 'Recherche')} />} keyboard>
        <V c="pb-space-xl">
          <V c="mt-space-sm mb-space-md flex-row items-center h-[52px] bg-surface-container-lowest rounded-full shadow-md px-space-md gap-space-sm">
            <Ic n="search" s={22} c="primary-container" />
            <Input c="flex-1 font-headline-sm text-headline-sm" placeholder={L('Search topics, organelles, questions', 'Thèmes, organites, questions')} value={q} onChangeText={setQ} autoFocus returnKeyType="search" autoCorrect={false} />
            {!!q && (
              <P c="w-7 h-7 items-center justify-center rounded-full bg-surface-container" onPress={() => setQ('')} accessibilityLabel="Clear">
                <Ic n="close" s={16} c="on-surface" />
              </P>
            )}
          </V>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginHorizontal: -16, marginBottom: 24 }} contentContainerStyle={{ paddingHorizontal: 16, gap: 4, paddingVertical: 2 }}>
            {[
              ['all', L('All', 'Tout'), total],
              ['units', L('Units & lessons', 'Unités et leçons'), counts.units],
              ['models', L('3D specimens', 'Spécimens 3D'), counts.models],
              ['questions', L('Practice questions', 'Questions'), counts.questions],
              ['labs', L('Practicals', 'TP'), counts.labs],
            ].map(([id, label, n]) => {
              const on = scope === id;
              return (
                <P key={id} c={`px-3.5 py-1.5 rounded-full flex-row items-center gap-1.5 ${on ? 'bg-primary-container shadow-sm' : 'bg-surface-container-low'}`} onPress={() => setScope(id)}>
                  <T c={`font-label-md text-label-md ${on ? 'text-on-primary' : 'text-on-surface'}`}>{label}</T>
                  {terms.length > 0 && (
                    <V c={`px-1.5 py-0.5 rounded-full ${on ? 'bg-surface-container-lowest/20' : 'bg-surface-container-highest'}`}>
                      <T c={on ? 'text-on-primary' : 'text-on-surface-variant'} style={{ fontSize: 10, fontWeight: '700' }}>
                        {n}
                      </T>
                    </V>
                  )}
                </P>
              );
            })}
          </ScrollView>

          {!terms.length ? (
            <V c="gap-space-sm">
              <T c="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">{L('Try searching for', 'Essayez')}</T>
              <V c="flex-row flex-wrap gap-2">
                {['mitochondria', 'osmosis', 'enzyme', 'heart', 'alveoli', 'nephron', 'reflex arc', 'pollination', 'allele', 'malaria'].map((w) => (
                  <P key={w} c="px-3 py-1.5 rounded-full bg-surface-container-low" onPress={() => setQ(w)}>
                    <T c="font-label-md text-label-md text-primary-container">{w}</T>
                  </P>
                ))}
              </V>
            </V>
          ) : !total ? (
            <V c="items-center gap-2 py-space-xl">
              <Ic n="search_off" s={36} c="outline" />
              <T c="font-headline-sm text-headline-sm text-on-surface">{L('No matches', 'Aucun résultat')}</T>
              <T c="font-body-sm text-body-sm text-on-surface-variant text-center">{L('Check the spelling or ask Dr. Nkwenti instead.', 'Vérifiez l’orthographe ou demandez au Dr Nkwenti.')}</T>
              <P c="mt-2 px-4 py-2 rounded-xl bg-primary-container" onPress={() => navigation.navigate('Tutor', { prefill: q })}>
                <T c="font-label-lg text-label-lg text-on-primary">{L('Ask the tutor', 'Demander au tuteur')}</T>
              </P>
            </V>
          ) : (
            <V c="gap-space-lg">
              {show('models') && results.models.length > 0 && (
                <Section icon="view_in_ar" title={L('3D specimens', 'Spécimens 3D')} n={results.models.length}>
                  {results.models.map((u) => (
                    <P key={u.id} c="bg-surface-container-lowest rounded-xl p-space-md shadow-sm gap-space-sm" onPress={() => navigation.navigate('Specimen', { unitId: u.id })}>
                      <V c="flex-row items-start justify-between gap-space-sm">
                        <V c="flex-1">
                          <V c="self-start flex-row items-center gap-1 bg-secondary-container px-2 py-0.5 rounded-full mb-1">
                            <Ic n="view_in_ar" s={13} c="on-secondary-container" />
                            <T c="font-label-sm text-label-sm text-on-secondary-container">{L('3D interactive', '3D interactif')}</T>
                          </V>
                          <T c="font-headline-sm text-headline-sm text-on-surface" style={{ fontWeight: '700', lineHeight: 20 }}>
                            {u.vr.title}
                          </T>
                        </V>
                        <V c="w-12 h-12 rounded-lg bg-surface-container overflow-hidden">
                          <SpecimenPreview unitId={u.id} />
                        </V>
                      </V>
                      <T c="font-body-md text-body-md text-on-surface-variant" numberOfLines={2}>
                        {u.vr.parts.map((p) => p.name).join(', ')}
                      </T>
                      <V c="flex-row items-center justify-between pt-1">
                        <V c="flex-row items-center gap-1">
                          <Ic n="verified" s={14} c="secondary" />
                          <T c="font-label-sm text-label-sm text-on-surface-variant">
                            {L('Unit', 'Unité')} {u.n}
                          </T>
                        </V>
                        <V c="flex-row items-center gap-1">
                          <T c="font-label-lg text-label-lg text-primary-container">{L('View in 3D', 'Voir en 3D')}</T>
                          <Ic n="arrow_forward" s={18} c="primary-container" />
                        </V>
                      </V>
                    </P>
                  ))}
                </Section>
              )}
              {show('units') && results.units.length + results.lessons.length > 0 && (
                <Section icon="menu_book" title={L('Syllabus units & lessons', 'Unités et leçons')} n={results.units.length + results.lessons.length}>
                  {results.units.map((u) => (
                    <P key={u.id} c="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex-row items-center gap-3" onPress={() => navigation.navigate('Unit', { unitId: u.id })}>
                      <V c="w-10 h-10 rounded-xl bg-surface-container-low items-center justify-center">
                        <Ic n={u.icon} s={22} c="primary-container" />
                      </V>
                      <V c="flex-1">
                        <T c="font-label-sm text-label-sm text-outline uppercase">
                          {L('Unit', 'Unité')} {u.n}
                        </T>
                        <T c="font-headline-sm text-headline-sm text-on-surface">{u.short}</T>
                      </V>
                      <Ic n="chevron_right" c="outline" />
                    </P>
                  ))}
                  {results.lessons.map((l) => (
                    <P key={l.id} c="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex-row items-center gap-3" onPress={() => navigation.navigate('Lesson', { lessonId: l.id })}>
                      <V c="w-10 h-10 rounded-xl bg-surface-container-low items-center justify-center">
                        <Ic n="article" s={22} c="secondary" />
                      </V>
                      <V c="flex-1">
                        <T c="font-label-sm text-label-sm text-outline uppercase">
                          {L('Lesson', 'Leçon')} {l.n} · {unitById(l.unit).short}
                        </T>
                        <T c="font-headline-sm text-headline-sm text-on-surface">{l.title}</T>
                      </V>
                      <Ic n="chevron_right" c="outline" />
                    </P>
                  ))}
                </Section>
              )}
              {show('questions') && results.questions.length > 0 && (
                <Section icon="history_edu" title={L('Practice questions', 'Questions')} n={results.questions.length}>
                  {results.questions.map((b) => (
                    <P key={b.key} c="bg-surface-container-lowest rounded-xl p-space-md shadow-sm gap-2" onPress={() => navigation.navigate('Quiz', { unitId: b.unit })}>
                      <T c="font-label-sm text-label-sm text-primary uppercase">{unitById(b.unit).short}</T>
                      <T c="font-body-md text-body-md text-on-surface">{b.q}</T>
                      <V c="flex-row items-center gap-1">
                        <Ic n="check_circle" s={14} c="secondary" />
                        <T c="font-body-sm text-body-sm text-secondary flex-1" numberOfLines={1}>
                          {b.a[0]}
                        </T>
                      </V>
                    </P>
                  ))}
                </Section>
              )}
              {show('labs') && results.labs.length > 0 && (
                <Section icon="science" title={L('Practicals', 'TP')} n={results.labs.length}>
                  {results.labs.map((l) => (
                    <P key={l.id} c="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex-row items-center gap-3" onPress={() => navigation.navigate('LabRun', { labId: l.id })}>
                      <V c="w-10 h-10 rounded-xl bg-primary-fixed/50 items-center justify-center">
                        <Ic n={l.icon} s={22} c="primary-container" />
                      </V>
                      <V c="flex-1">
                        <T c="font-headline-sm text-headline-sm text-on-surface">{l.title}</T>
                        <T c="font-body-sm text-body-sm text-on-surface-variant" numberOfLines={1}>
                          {l.desc}
                        </T>
                      </V>
                    </P>
                  ))}
                </Section>
              )}
            </V>
          )}
        </V>
      </Screen>
      <StaticTabBar active="Learn" />
    </V>
  );
}
