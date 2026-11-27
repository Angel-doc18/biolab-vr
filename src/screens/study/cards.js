// What the study chat shows: files shared, the questions found in them, worked
// solutions (read aloud step by step), notes explained, revision quizzes and
// their marking, and the status line while the AI works.
import { useEffect, useRef, useState } from 'react';
import { ActivityIndicator } from 'react-native';
import { C, Ic, Input, P, T, V } from '../../ui/kit';
import { Cta } from '../../ui/chrome';
import ListenButton from '../../ui/ListenButton';
import FunctionGraph from '../../ui/FunctionGraph';
import { explain, stopTalking, subscribe } from '../../lib/talk';

const FILE_ICON = { image: 'image', pdf: 'picture_as_pdf', docx: 'description', text: 'notes' };

export function FileChips({ files, L }) {
  if (!files?.length) return null;
  return (
    <V c="flex-row flex-wrap gap-1.5">
      {files.map((f) => (
        <V key={f.id} c="flex-row items-center gap-1.5 h-8 px-2.5 rounded-full bg-surface-container-low">
          <Ic n={FILE_ICON[f.kind] || 'attach_file'} s={16} c="primary-container" />
          <T c="font-label-sm text-label-sm text-on-surface" numberOfLines={1} style={{ maxWidth: 180 }}>
            {f.name}
            {f.pages ? `, ${f.pages} ${L('pages', 'pages')}` : ''}
          </T>
        </V>
      ))}
    </V>
  );
}

// The status line while the AI works: the words change as it goes, so a long
// task never looks frozen.
export function Working({ steps, L }) {
  const [i, setI] = useState(0);
  const [long, setLong] = useState(false);
  useEffect(() => {
    const t = setInterval(() => setI((x) => Math.min(x + 1, steps.length - 1)), 3800);
    const l = setTimeout(() => setLong(true), 22000);
    return () => (clearInterval(t), clearTimeout(l));
  }, [steps]);
  return (
    <V c="flex-row items-center gap-2.5 py-space-sm">
      <ActivityIndicator size="small" color={C['primary-container']} />
      <V c="flex-1">
        <T c="font-body-md text-body-md text-on-surface">{steps[i]}</T>
        {long && <T c="font-body-sm text-body-sm text-on-surface-variant">{L('This one is taking a little longer. Keep the app open, it will be done very soon.', 'Cela prend un peu plus de temps. Gardez l’application ouverte, ce sera prêt très bientôt.')}</T>}
      </V>
    </V>
  );
}

export function UserBubble({ body, L }) {
  return (
    <V c="self-end max-w-[86%] gap-1.5 items-end">
      <FileChips files={body.files} L={L} />
      {!!body.text && (
        <V c="px-space-md py-2.5 rounded-2xl rounded-br-md bg-primary-container">
          <T c="font-body-md text-body-md text-on-primary" style={{ lineHeight: 22 }}>
            {body.text}
          </T>
        </V>
      )}
    </V>
  );
}

export function AiText({ body }) {
  return (
    <T c="font-body-md text-body-md text-on-surface" style={{ lineHeight: 23 }} selectable>
      {body.text}
    </T>
  );
}

// ---------- the questions found ----------
export function QuestionSet({ body, solved, busyN, onSolve, onSolveAll, running, L }) {
  const [open, setOpen] = useState(false);
  const shown = open ? body.questions : body.questions.slice(0, 4);
  const done = body.questions.filter((q) => solved.has(q.n)).length;
  return (
    <V c="rounded-2xl border border-surface-container bg-surface-container-lowest overflow-hidden">
      <V c="p-space-md gap-1 bg-surface-container-low">
        <T c="font-label-md text-label-md text-primary-container" style={{ fontWeight: '700' }}>
          {body.questions.length} {body.questions.length === 1 ? L('question found', 'question trouvée') : L('questions found', 'questions trouvées')}
          {done ? `, ${done} ${L('solved', 'résolues')}` : ''}
        </T>
        <T c="font-headline-sm text-headline-sm text-on-surface" style={{ fontWeight: '700' }}>
          {body.title || L('Your questions', 'Vos questions')}
        </T>
      </V>
      {shown.map((q) => (
        <V key={q.n} c="px-space-md py-space-sm border-t border-surface-container flex-row items-start gap-space-sm">
          <V c={`w-7 h-7 rounded-full items-center justify-center ${solved.has(q.n) ? 'bg-secondary' : 'bg-surface-container-high'}`}>
            {solved.has(q.n) ? <Ic n="check" s={16} c="on-secondary" /> : <T c="font-label-sm text-label-sm text-on-surface" style={{ fontWeight: '700' }}>{q.label || q.n}</T>}
          </V>
          <V c="flex-1 gap-0.5">
            <T c="font-body-sm text-body-sm text-on-surface" numberOfLines={3} style={{ lineHeight: 19 }}>
              {q.text}
            </T>
            <T c="font-label-sm text-label-sm text-on-surface-variant">
              {q.type === 'mcq' ? L('Multiple choice', 'QCM') : L('Structured', 'Question structurée')}
              {q.marks ? `, ${q.marks} ${L('marks', 'points')}` : ''}
            </T>
          </V>
          {!solved.has(q.n) && (
            <P c="h-9 px-3 rounded-full bg-surface-container-low items-center justify-center" onPress={() => onSolve(q.n)} disabled={running} accessibilityRole="button">
              {busyN === q.n ? <ActivityIndicator size="small" color={C['primary-container']} /> : <T c="font-label-md text-label-md text-primary-container" style={{ fontWeight: '700' }}>{L('Solve', 'Résoudre')}</T>}
            </P>
          )}
        </V>
      ))}
      {body.questions.length > 4 && (
        <P c="px-space-md py-space-sm border-t border-surface-container" onPress={() => setOpen((x) => !x)}>
          <T c="font-label-md text-label-md text-primary-container" style={{ fontWeight: '700' }}>
            {open ? L('Show fewer', 'Voir moins') : `${L('Show all', 'Tout voir')} ${body.questions.length}`}
          </T>
        </P>
      )}
      {done < body.questions.length && (
        <V c="p-space-md border-t border-surface-container flex-row gap-space-xs">
          <V c="flex-1">
            <Cta variant="dark" icon={null} h="h-11" label={L('Solve one by one', 'Résoudre une par une')} disabled={running} onPress={() => onSolve(body.questions.find((q) => !solved.has(q.n)).n)} />
          </V>
          <V c="flex-1">
            <Cta variant="soft" icon={null} h="h-11" label={running ? L('Solving...', 'Résolution...') : L('Solve all', 'Tout résoudre')} disabled={running} onPress={onSolveAll} />
          </V>
        </V>
      )}
    </V>
  );
}

// ---------- one solution ----------
// The parts read aloud for a solution: what it asks, each step, the answer.
export const solutionParts = (sol, lang) => [sol.interpretation, ...sol.steps.map((s) => s.say || s.board), sol.answer ? `${lang === 'fr' ? 'Donc la réponse est :' : 'So the answer is:'} ${sol.answer}` : null].filter(Boolean);

// Follows the shared voice (lib/talk): which step of this solution is being
// read now, and whether it was paused for a question.
function useTalk(id, sol) {
  const [st, setSt] = useState({ id: null, index: -1, playing: false, pausedId: null, pausedIndex: -1 });
  useEffect(() => subscribe(setSt), []);
  const offset = sol.interpretation ? 1 : 0;
  return {
    playing: st.id === id && st.playing,
    cursor: st.id === id ? st.index - offset : -1,
    paused: st.pausedId === id,
  };
}

export function Solution({ id, body, L, lang, teacher }) {
  const [showQ, setShowQ] = useState(false);
  const v = useTalk(id, body);
  const toggle = () => (v.playing ? stopTalking() : explain(id, solutionParts(body, lang), { lang }));
  return (
    <V c="rounded-2xl border border-surface-container bg-surface-container-lowest overflow-hidden">
      <P c="p-space-md gap-1 bg-surface-container-low" onPress={() => setShowQ((x) => !x)}>
        <V c="flex-row items-center gap-2">
          <T c="font-label-md text-label-md text-primary-container flex-1" style={{ fontWeight: '700' }}>
            {body.label ? `${L('Question', 'Question')} ${body.label}` : L('Your question', 'Votre question')}
          </T>
          {body.checked && (
            <V c="flex-row items-center gap-1">
              <Ic n="verified" s={15} c="secondary" fill />
              <T c="font-label-sm text-label-sm text-secondary" style={{ fontWeight: '700' }}>
                {L('Checked', 'Vérifiée')}
              </T>
            </V>
          )}
        </V>
        <T c="font-body-sm text-body-sm text-on-surface" numberOfLines={showQ ? undefined : 3} style={{ lineHeight: 19 }}>
          {body.question}
        </T>
      </P>
      <V c="p-space-md gap-space-sm">
        {!!body.interpretation && (
          <V c="gap-0.5">
            <T c="font-label-sm text-label-sm text-on-surface-variant" style={{ fontWeight: '700' }}>
              {L('What it asks', 'Ce que ça demande')}
            </T>
            <T c="font-body-md text-body-md text-on-surface" style={{ lineHeight: 22 }}>
              {body.interpretation}
            </T>
          </V>
        )}
        <V c="flex-row items-center flex-wrap gap-2">
          <ListenButton size="sm" label={L('Explain it to me', 'Expliquez-moi')} stopLabel={L('Stop', 'Arrêter')} playing={v.playing} onPress={toggle} />
          {v.paused && (
            <T c="font-label-sm text-label-sm text-on-surface-variant">{L('Paused for your question', 'En pause pour votre question')}</T>
          )}
        </V>
        {body.steps.map((s, i) => (
          <V key={i} c="flex-row gap-space-sm">
            <V c={`w-6 h-6 rounded-full items-center justify-center mt-0.5 ${v.cursor === i ? 'bg-tertiary' : 'bg-primary-container'}`}>
              <T c="font-label-sm text-label-sm text-on-primary" style={{ fontWeight: '700' }}>
                {i + 1}
              </T>
            </V>
            <V c="flex-1 gap-1">
              <V c={`px-3 py-2 rounded-lg ${v.cursor === i ? 'bg-surface-container' : 'bg-surface-container-low'}`}>
                <T c="font-body-md text-body-md text-on-surface" style={{ lineHeight: 23, fontFamily: 'monospace' }} selectable>
                  {s.board}
                </T>
              </V>
              {!!s.say && (
                <T c="font-body-sm text-body-sm text-on-surface-variant" style={{ lineHeight: 20 }}>
                  {s.say}
                </T>
              )}
              {!!s.graph && (
                <V c="rounded-lg border border-surface-container p-1 gap-1">
                  {!!s.graph.title && <T c="font-label-md text-label-md text-on-surface px-1 pt-1">{s.graph.title}</T>}
                  <FunctionGraph graph={s.graph} />
                </V>
              )}
            </V>
          </V>
        ))}
        <V c="rounded-xl border-2 border-primary-container px-space-md py-space-sm">
          <T c="font-label-sm text-label-sm text-primary-container" style={{ fontWeight: '700' }}>
            {L('Answer', 'Réponse')}
          </T>
          <T c="font-headline-sm text-headline-sm text-on-surface" style={{ fontWeight: '700' }} selectable>
            {body.answer}
          </T>
        </V>
        {!!body.check && (
          <T c="font-body-sm text-body-sm text-on-surface-variant" style={{ lineHeight: 20 }}>
            {body.check}
          </T>
        )}
        {teacher && !!body.markingGuide?.length && (
          <V c="gap-1">
            <T c="font-label-sm text-label-sm text-on-surface-variant" style={{ fontWeight: '700' }}>
              {L('Marking guide', 'Guide de correction')}
            </T>
            {body.markingGuide.map((p, i) => (
              <V key={i} c="flex-row gap-2">
                <T c="font-body-sm text-body-sm text-on-surface flex-1">{p.point}</T>
                <T c="font-label-md text-label-md text-primary-container" style={{ fontWeight: '700' }}>
                  {p.marks}
                </T>
              </V>
            ))}
          </V>
        )}
        {!!body.similar && (
          <V c="rounded-lg bg-surface-container-low p-space-sm gap-0.5">
            <T c="font-label-sm text-label-sm text-on-surface-variant" style={{ fontWeight: '700' }}>
              {L('Try one yourself', 'À vous')}
            </T>
            <T c="font-body-sm text-body-sm text-on-surface" style={{ lineHeight: 20 }}>
              {body.similar}
            </T>
          </V>
        )}
      </V>
    </V>
  );
}

// ---------- notes explained ----------
export function NotesCard({ body, L }) {
  return (
    <V c="rounded-2xl border border-surface-container bg-surface-container-lowest p-space-md gap-space-md">
      <V c="gap-1">
        <T c="font-label-md text-label-md text-primary-container" style={{ fontWeight: '700' }}>
          {L('Your notes, explained', 'Vos notes expliquées')}
        </T>
        <T c="font-headline-sm text-headline-sm text-on-surface" style={{ fontWeight: '700' }}>
          {body.title}
        </T>
        {!!body.summary && <T c="font-body-md text-body-md text-on-surface-variant" style={{ lineHeight: 22 }}>{body.summary}</T>}
      </V>
      {body.sections.map((s, i) => (
        <V key={i} c="gap-1">
          <T c="font-label-lg text-label-lg text-on-surface" style={{ fontWeight: '700' }}>
            {s.heading}
          </T>
          <T c="font-body-md text-body-md text-on-surface" style={{ lineHeight: 23 }} selectable>
            {s.explanation}
          </T>
          {s.keyPoints.map((k, j) => (
            <V key={j} c="flex-row gap-2 pl-1">
              <T c="font-body-md text-body-md text-primary-container">•</T>
              <T c="font-body-sm text-body-sm text-on-surface flex-1" style={{ lineHeight: 20 }}>
                {k}
              </T>
            </V>
          ))}
          {!!s.example && (
            <V c="rounded-lg bg-surface-container-low px-space-sm py-2">
              <T c="font-body-sm text-body-sm text-on-surface" style={{ lineHeight: 20 }}>
                {L('Example', 'Exemple')}: {s.example}
              </T>
            </V>
          )}
        </V>
      ))}
      {!!body.keyTerms?.length && (
        <V c="gap-1">
          <T c="font-label-sm text-label-sm text-on-surface-variant" style={{ fontWeight: '700' }}>{L('Key terms', 'Termes clés')}</T>
          {body.keyTerms.map((k, i) => (
            <T key={i} c="font-body-sm text-body-sm text-on-surface" style={{ lineHeight: 20 }}>
              <T c="font-body-sm text-body-sm text-on-surface" style={{ fontWeight: '700' }}>{k.term}: </T>
              {k.meaning}
            </T>
          ))}
        </V>
      )}
      {!!body.examTips?.length && (
        <V c="gap-1">
          <T c="font-label-sm text-label-sm text-on-surface-variant" style={{ fontWeight: '700' }}>{L('In the exam', 'À l’examen')}</T>
          {body.examTips.map((t, i) => (
            <T key={i} c="font-body-sm text-body-sm text-on-surface" style={{ lineHeight: 20 }}>
              • {t}
            </T>
          ))}
        </V>
      )}
      {!!body.teaching?.length && (
        <V c="gap-1">
          <T c="font-label-sm text-label-sm text-on-surface-variant" style={{ fontWeight: '700' }}>{L('Teaching these notes', 'Enseigner ces notes')}</T>
          {body.teaching.map((t, i) => (
            <T key={i} c="font-body-sm text-body-sm text-on-surface" style={{ lineHeight: 20 }}>
              • {t}
            </T>
          ))}
        </V>
      )}
    </V>
  );
}

// ---------- revision quiz ----------
function McqItem({ q, L }) {
  const [pick, setPick] = useState(null);
  const letter = (o) => o.trim().charAt(0).toUpperCase();
  return (
    <V c="gap-1.5">
      <T c="font-body-md text-body-md text-on-surface" style={{ lineHeight: 22, fontWeight: '600' }}>
        {q.n}. {q.text}
      </T>
      {q.options.map((o) => {
        const l = letter(o);
        const chosen = pick === l;
        const right = pick && l === q.answer;
        const wrong = chosen && l !== q.answer;
        return (
          <P
            key={o}
            c={`px-space-sm py-2.5 rounded-xl border ${right ? 'border-secondary bg-surface-container-low' : wrong ? 'border-error' : 'border-outline-variant'}`}
            onPress={() => !pick && setPick(l)}
            accessibilityRole="button"
          >
            <V c="flex-row items-center gap-2">
              <T c="font-body-md text-body-md text-on-surface flex-1">{o}</T>
              {right && <Ic n="check_circle" s={18} c="secondary" fill />}
              {wrong && <Ic n="cancel" s={18} c="error" fill />}
            </V>
          </P>
        );
      })}
      {!!pick && (
        <T c={`font-body-sm text-body-sm ${pick === q.answer ? 'text-secondary' : 'text-error'}`} style={{ lineHeight: 20 }}>
          {pick === q.answer ? L('Correct. ', 'Correct. ') : `${L('Not quite: the answer is', 'Pas tout à fait : la réponse est')} ${q.answer}. `}
          <T c="font-body-sm text-body-sm text-on-surface-variant">{q.explanation}</T>
        </T>
      )}
    </V>
  );
}

function StructuredItem({ q, marked, busy, onMark, L }) {
  const [answer, setAnswer] = useState('');
  const [show, setShow] = useState(false);
  return (
    <V c="gap-1.5">
      <T c="font-body-md text-body-md text-on-surface" style={{ lineHeight: 22, fontWeight: '600' }}>
        {q.n}. {q.text} <T c="font-body-sm text-body-sm text-on-surface-variant">({q.marks} {L('marks', 'points')})</T>
      </T>
      {!marked && (
        <>
          <Input
            c="min-h-[96px] px-3 py-2 rounded-xl bg-surface-container-low text-body-md"
            placeholder={L('Write your answer here', 'Écrivez votre réponse ici')}
            value={answer}
            onChangeText={setAnswer}
            multiline
            textAlignVertical="top"
            maxLength={6000}
          />
          <V c="flex-row gap-space-xs">
            <V c="flex-1">
              <Cta variant="dark" icon={null} h="h-11" label={busy ? L('Marking...', 'Correction...') : L('Mark my answer', 'Corriger ma réponse')} disabled={busy || answer.trim().length < 2} onPress={() => onMark(q.n, answer.trim())} />
            </V>
            <V c="flex-1">
              <Cta variant="soft" icon={null} h="h-11" label={show ? L('Hide the answer', 'Masquer la réponse') : L('Show the answer', 'Voir la réponse')} onPress={() => setShow((x) => !x)} />
            </V>
          </V>
        </>
      )}
      {!!marked && <Marked body={marked} L={L} />}
      {(show || !!marked) && (
        <V c="rounded-lg bg-surface-container-low p-space-sm gap-1">
          <T c="font-label-sm text-label-sm text-on-surface-variant" style={{ fontWeight: '700' }}>{L('Marking scheme', 'Barème')}</T>
          {q.scheme.map((p, i) => (
            <V key={i} c="flex-row gap-2">
              <T c="font-body-sm text-body-sm text-on-surface flex-1">{p.point}</T>
              <T c="font-label-md text-label-md text-primary-container" style={{ fontWeight: '700' }}>{p.marks}</T>
            </V>
          ))}
          {!!q.modelAnswer && (
            <T c="font-body-sm text-body-sm text-on-surface" style={{ lineHeight: 20 }}>
              {L('Model answer', 'Réponse modèle')}: {q.modelAnswer}
            </T>
          )}
        </V>
      )}
    </V>
  );
}

export function Marked({ body, L }) {
  return (
    <V c="rounded-xl border border-surface-container p-space-sm gap-1">
      <T c="font-headline-sm text-headline-sm text-on-surface" style={{ fontWeight: '800' }}>
        {body.awarded} / {body.total} {L('marks', 'points')}
      </T>
      {(body.criteria || []).map((c, i) => (
        <V key={i} c="flex-row gap-2">
          <Ic n={c.awarded > 0 ? 'check' : 'close'} s={16} c={c.awarded > 0 ? 'secondary' : 'error'} />
          <T c="font-body-sm text-body-sm text-on-surface flex-1" style={{ lineHeight: 19 }}>
            {c.point}
            {c.comment ? `: ${c.comment}` : ''}
          </T>
        </V>
      ))}
      {!!body.feedback && <T c="font-body-sm text-body-sm text-on-surface-variant" style={{ lineHeight: 20 }}>{body.feedback}</T>}
    </V>
  );
}

export function Quiz({ body, marks, busyN, onMark, L }) {
  return (
    <V c="rounded-2xl border border-surface-container bg-surface-container-lowest p-space-md gap-space-md">
      <V c="gap-0.5">
        <T c="font-label-md text-label-md text-primary-container" style={{ fontWeight: '700' }}>
          {L('Revision questions', 'Questions de révision')}
        </T>
        <T c="font-headline-sm text-headline-sm text-on-surface" style={{ fontWeight: '700' }}>
          {body.title}
        </T>
      </V>
      {body.questions.map((q) =>
        q.type === 'mcq' ? <McqItem key={q.n} q={q} L={L} /> : <StructuredItem key={q.n} q={q} L={L} marked={marks.get(q.n)} busy={busyN === q.n} onMark={onMark} />
      )}
    </V>
  );
}
