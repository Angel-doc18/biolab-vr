import { useMemo, useState } from 'react';
import { ScrollView } from 'react-native';
import { Ic, Input, P, T, V } from '../../ui/kit';
import { Screen, StackHeader } from '../../ui/chrome';
import { useApp } from '../../state/store';
import { useL, useLang } from '../../i18n';
import { modelOf, unitById, units } from '../../data/units';
import { LESSONS, lessonNumber, lessonsFor, plain } from '../../data/lessons';
import { LABS } from '../../data/labs';
import { BANK } from '../../lib/exam';
import { subjectName } from '../../data/subjects';
import { Section } from '../tabs/Home';

const norm = (s) => String(s || '').toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '');

function score(text, terms) {
  const t = norm(text);
  return terms.every((w) => t.includes(w)) ? terms.reduce((a, w) => a + (t.split(w).length - 1), 0) : 0;
}

function Row({ title, sub, onPress, first }) {
  return (
    <P c={`p-space-md flex-row items-center gap-space-sm ${first ? '' : 'border-t border-surface-container'}`} onPress={onPress} scale={0.99}>
      <V c="flex-1 gap-0.5">
        <T c="font-label-lg text-label-lg text-on-surface" style={{ fontWeight: '600' }} numberOfLines={2}>
          {title}
        </T>
        {!!sub && (
          <T c="font-body-sm text-body-sm text-on-surface-variant" numberOfLines={2}>
            {sub}
          </T>
        )}
      </V>
      <Ic n="chevron_right" s={20} c="outline" />
    </P>
  );
}

// Searches the lessons, 3D models, questions and practicals of the subjects the
// student takes.
export default function Search({ navigation }) {
  const { subjects } = useApp();
  const L = useL();
  const lang = useLang();
  const [q, setQ] = useState('');
  const [scope, setScope] = useState('all');
  const terms = norm(q).split(/\s+/).filter((w) => w.length > 1);

  const results = useMemo(() => {
    if (!terms.length) return { lessons: [], models: [], questions: [], labs: [] };
    const mine = units.filter((u) => subjects.includes(u.subject));
    const lessonUnit = new Map();
    for (const u of mine) for (const l of lessonsFor(u.id)) if (!lessonUnit.has(l.id)) lessonUnit.set(l.id, u);
    const rank = (list, fn) =>
      list
        .map((x) => [x, fn(x)])
        .filter(([, s]) => s > 0)
        .sort((a, b) => b[1] - a[1])
        .map(([x]) => x);
    return {
      lessons: rank(
        LESSONS.filter((l) => lessonUnit.has(l.id)),
        (l) => score(`${l.title} ${l.title} ${plain(l.body.join(' '))} ${l.terms.map((t) => t.join(' ')).join(' ')}`, terms)
      )
        .slice(0, 12)
        .map((l) => ({ l, u: lessonUnit.get(l.id) })),
      models: rank(mine.filter((u, i, all) => u.vr && all.findIndex((x) => x.vr && modelOf(x.id) === modelOf(u.id)) === i), (u) => score(`${u.vr.title} ${u.vr.subtitle} ${u.vr.parts.map((p) => `${p.name} ${p.title} ${p.fr?.name || ''}`).join(' ')}`, terms)),
      questions: rank(
        BANK.filter((b) => subjects.includes(b.subject)),
        (b) => score(`${b.q} ${b.a[0]} ${b.why}`, terms)
      ).slice(0, 12),
      labs: rank(
        LABS.filter((l) => subjects.includes(l.subject)),
        (l) => score(`${l.title} ${l.desc} ${l.short}`, terms)
      ),
    };
  }, [q, subjects]);

  const counts = { lessons: results.lessons.length, models: results.models.length, questions: results.questions.length, labs: results.labs.length };
  const total = Object.values(counts).reduce((a, b) => a + b, 0);
  const show = (k) => scope === 'all' || scope === k;
  const where = (u) => `${subjectName(u.subject, lang)}, ${L('unit', 'unité')} ${u.n}`;

  return (
    <Screen header={<StackHeader title={L('Search', 'Recherche')} />} keyboard>
      <V c="pb-space-xl pt-space-sm gap-space-md">
        <V c="flex-row items-center h-12 bg-surface-container-lowest rounded-xl border border-outline-variant px-space-sm gap-space-xs">
          <Ic n="search" s={20} c="on-surface-variant" />
          <Input c="flex-1 font-body-lg text-body-lg" placeholder={L('Search lessons, structures, questions', 'Leçons, structures, questions')} value={q} onChangeText={setQ} autoFocus returnKeyType="search" autoCorrect={false} />
          {!!q && (
            <P c="w-9 h-9 items-center justify-center" onPress={() => setQ('')} accessibilityLabel={L('Clear', 'Effacer')}>
              <Ic n="close" s={18} c="on-surface-variant" />
            </P>
          )}
        </V>

        {terms.length > 0 && (
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginHorizontal: -16 }} contentContainerStyle={{ paddingHorizontal: 16, gap: 20 }}>
            {[
              ['all', L('All', 'Tout'), total],
              ['lessons', L('Lessons', 'Leçons'), counts.lessons],
              ['models', L('3D models', 'Modèles 3D'), counts.models],
              ['questions', L('Questions', 'Questions'), counts.questions],
              ['labs', L('Practicals', 'TP'), counts.labs],
            ].map(([id, label, n]) => {
              const on = scope === id;
              return (
                <P key={id} c={`pb-1.5 border-b-2 ${on ? 'border-primary-container' : 'border-transparent'}`} onPress={() => setScope(id)} scale={1} accessibilityRole="tab" accessibilityState={{ selected: on }}>
                  <T c={`font-label-lg text-label-lg ${on ? 'text-on-surface' : 'text-on-surface-variant'}`} style={{ fontWeight: on ? '700' : '500' }}>
                    {label} ({n})
                  </T>
                </P>
              );
            })}
          </ScrollView>
        )}

        {!terms.length ? (
          <T c="font-body-md text-body-md text-on-surface-variant" style={{ lineHeight: 22 }}>
            {L('Search the lessons, 3D models, practice questions and practicals of your subjects. Try a structure, a process or a key term.', 'Cherchez dans les leçons, modèles 3D, questions et TP de vos matières. Essayez une structure, un processus ou un mot clé.')}
          </T>
        ) : !total ? (
          <V c="gap-space-xs">
            <T c="font-body-md text-body-md text-on-surface">{L('No matches. Check the spelling, or ask the tutor.', 'Aucun résultat. Vérifiez l’orthographe ou demandez au tuteur.')}</T>
            <P c="self-start py-1" onPress={() => navigation.navigate('Tutor', { prefill: q })} hitSlop={8}>
              <T c="font-label-lg text-label-lg text-primary-container" style={{ fontWeight: '700' }}>
                {L('Ask the tutor', 'Demander au tuteur')}
              </T>
            </P>
          </V>
        ) : (
          <V c="gap-space-lg">
            {show('lessons') && results.lessons.length > 0 && (
              <Section title={L('Lessons', 'Leçons')}>
                <V c="bg-surface-container-lowest rounded-xl shadow-sm">
                  {results.lessons.map(({ l, u }, i) => (
                    <Row key={l.id} first={i === 0} title={`${lessonNumber(u.id, l)}. ${l.title}`} sub={`${where(u)}: ${u.short}`} onPress={() => navigation.navigate('Lesson', { lessonId: l.id, unitId: u.id })} />
                  ))}
                </V>
              </Section>
            )}
            {show('models') && results.models.length > 0 && (
              <Section title={L('3D models', 'Modèles 3D')}>
                <V c="bg-surface-container-lowest rounded-xl shadow-sm">
                  {results.models.map((u, i) => (
                    <Row
                      key={u.id}
                      first={i === 0}
                      title={(lang === 'fr' && u.vr.fr?.title) || u.vr.title}
                      sub={`${where(u)}. ${u.vr.parts.map((p) => (lang === 'fr' && p.fr?.name) || p.name).join(', ')}`}
                      onPress={() => navigation.navigate('Specimen', { unitId: u.id })}
                    />
                  ))}
                </V>
              </Section>
            )}
            {show('questions') && results.questions.length > 0 && (
              <Section title={L('Practice questions', 'Questions d’entraînement')}>
                <V c="bg-surface-container-lowest rounded-xl shadow-sm">
                  {results.questions.map((b, i) => (
                    <Row key={b.key} first={i === 0} title={b.q} sub={`${L('Answer', 'Réponse')}: ${b.a[0]}. ${where(unitById(b.unit))}`} onPress={() => navigation.navigate('Quiz', { unitId: b.unit })} />
                  ))}
                </V>
              </Section>
            )}
            {show('labs') && results.labs.length > 0 && (
              <Section title={L('Practicals', 'TP')}>
                <V c="bg-surface-container-lowest rounded-xl shadow-sm">
                  {results.labs.map((l, i) => (
                    <Row key={l.id} first={i === 0} title={l.title} sub={`${subjectName(l.subject, lang)}. ${l.desc}`} onPress={() => navigation.navigate('LabRun', { labId: l.id })} />
                  ))}
                </V>
              </Section>
            )}
          </V>
        )}
      </V>
    </Screen>
  );
}
