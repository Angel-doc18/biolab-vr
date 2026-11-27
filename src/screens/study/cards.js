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

// ---------- one solution, taught on the board ----------
const BOARD = '#fbfaf5';
const INK = '#1f2a37';

// What is read aloud, in order: what it asks, the ideas behind it, each step
// (its explanation and the reason), then the answer. stepPart(sol, i) is the
// index of step i in that list (so "Explain again" can start there).
export const solutionParts = (sol, lang) => [
  sol.interpretation || '',
  ...(sol.concepts || []).map((c) => `${c.name}. ${c.explanation}`),
  ...sol.steps.map((s) => [s.say || s.board, s.why].filter(Boolean).join(' ')),
  sol.answer ? `${lang === 'fr' ? 'Donc la réponse est :' : 'So the answer is:'} ${sol.answer}` : '',
];
const stepPart = (sol, i) => 1 + (sol.concepts || []).length + i;

// Text appearing as if written, at the pace of the voice: it starts when its
// part of the explanation starts and is finished in about the time the
// teacher takes to say it (ms), like a teacher writing while talking.
function Written({ text, writing, ms = 2500, c = 'font-body-lg text-body-lg', style }) {
  const [n, setN] = useState(writing ? 0 : text.length);
  useEffect(() => {
    if (!writing) {
      setN(text.length);
      return undefined;
    }
    setN(0);
    const ticks = Math.max(20, Math.round(ms / 40));
    const per = Math.max(1, Math.ceil(text.length / ticks));
    const t = setInterval(() => setN((x) => (x + per >= text.length ? (clearInterval(t), text.length) : x + per)), 40);
    return () => clearInterval(t);
  }, [text, writing, ms]);
  return (
    <T c={c} style={style} selectable>
      {text.slice(0, n)}
    </T>
  );
}
// About how long the voice takes to say a text: the writing keeps pace.
const sayMs = (t) => Math.min(9000, Math.max(1400, String(t || '').length * 55));

// Follows the shared voice (lib/talk): which part of this solution is being
// read now, and whether it was paused for a question.
function useTalk(id) {
  const [st, setSt] = useState({ id: null, index: -1, playing: false, pausedId: null, pausedIndex: -1 });
  useEffect(() => subscribe(setSt), []);
  return { playing: st.id === id && st.playing, part: st.id === id ? st.index : -1, paused: st.pausedId === id };
}

function Label({ children }) {
  return (
    <T c="font-label-md text-label-md text-primary-container" style={{ fontWeight: '700' }}>
      {children}
    </T>
  );
}

// One question asked about a step, and the answer, under that step.
function StepAsk({ ask, L }) {
  return (
    <V c="gap-1 pl-space-sm border-l-2 border-primary-container">
      <T c="font-body-sm text-body-sm text-on-surface" style={{ fontWeight: '700' }}>
        {ask.q}
      </T>
      {ask.a ? (
        <T c="font-body-sm text-body-sm text-on-surface" style={{ lineHeight: 20 }} selectable>
          {ask.a}
        </T>
      ) : (
        <T c="font-body-sm text-body-sm text-on-surface-variant">{L('Thinking...', 'Réflexion...')}</T>
      )}
    </V>
  );
}

// live: this solution is being taught now (it arrived with Read aloud on), so
// the board starts empty and each part is written while it is explained. A
// solution opened later, or with Read aloud off, shows everything at once.
export function Solution({ id, body, L, lang, teacher, asks = [], onAsk, live = false, onFollow }) {
  const [showQ, setShowQ] = useState(false);
  const [ideasOpen, setIdeasOpen] = useState(true);
  const [asking, setAsking] = useState(null); // the step being asked about
  const [draft, setDraft] = useState('');
  const v = useTalk(id);
  const parts = solutionParts(body, lang);
  const last = parts.length - 1; // the answer
  // How much of the board is written: parts 0 .. shown-1, or all of it.
  const [shown, setShown] = useState(live ? 0 : Infinity);
  useEffect(() => {
    if (v.playing && v.part >= 0) setShown((s) => (s === Infinity ? s : Math.max(s, v.part + 1)));
  }, [v.playing, v.part]);
  useEffect(() => {
    if (shown !== Infinity && shown > last) setShown(Infinity); // the answer was reached: all of it stays
  }, [shown, last]);
  const sees = (part) => part < shown;
  const all = shown === Infinity;
  const playFrom = (from) => explain(id, parts, { lang, from });
  // "Explain it to me": the board is written again from the start, as it is explained.
  const startOver = () => {
    setShown(0);
    playFrom(0);
  };
  const toggle = () => (v.playing ? stopTalking() : all ? startOver() : playFrom(Math.max(0, shown - 1)));
  const concepts = body.concepts || [];
  const conceptAt = v.playing ? v.part - 1 : -1;
  const stepAt = v.playing ? v.part - stepPart(body, 0) : -1;
  const stopped = !all && !v.playing && shown > 0; // stopped in the middle
  const waiting = !all && !v.playing && shown === 0; // queued after another one
  const send = (i) => {
    const q = draft.trim();
    if (q.length < 2) return;
    setDraft('');
    setAsking(null);
    onAsk?.(i, q);
  };
  const anyStep = body.steps.some((_, i) => sees(stepPart(body, i)));
  // Where each part sits in the card, so the screen follows the writing.
  const at = useRef({ body: 0, steps: 0, rows: {}, answer: 0 });
  useEffect(() => {
    if (!v.playing || !onFollow) return undefined;
    const t = setTimeout(() => {
      const a = at.current;
      const k = v.part - stepPart(body, 0);
      const y = v.part === last ? a.body + a.answer : k >= 0 && a.rows[k] != null ? a.body + a.steps + a.rows[k] : 0;
      onFollow(y);
    }, 120);
    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [v.playing, v.part]);
  return (
    <V c="rounded-2xl border border-surface-container overflow-hidden" style={{ backgroundColor: BOARD }}>
      {/* the question */}
      <P c="p-space-md gap-1 bg-surface-container-low" onPress={() => setShowQ((x) => !x)}>
        <V c="flex-row items-center gap-2">
          <T c="font-label-md text-label-md text-primary-container flex-1" style={{ fontWeight: '700' }}>
            {body.label ? `${L('Question', 'Question')} ${body.label}` : L('Your question', 'Votre question')}
          </T>
          {body.checked && (
            <V c="flex-row items-center gap-1">
              <Ic n="verified" s={15} c="secondary" fill />
              <T c="font-label-sm text-label-sm text-secondary" style={{ fontWeight: '700' }}>
                {L('Checked by an examiner', 'Vérifiée par un correcteur')}
              </T>
            </V>
          )}
        </V>
        <T c="font-body-sm text-body-sm text-on-surface" numberOfLines={showQ ? undefined : 3} style={{ lineHeight: 19 }}>
          {body.question}
        </T>
      </P>

      <V c="p-space-md gap-space-md" onLayout={(e) => (at.current.body = e.nativeEvent.layout.y)}>
        <V c="flex-row items-center flex-wrap gap-x-space-md gap-y-2">
          <ListenButton size="sm" label={stopped ? L('Continue explaining', 'Continuer l’explication') : L('Explain it to me', 'Expliquez-moi')} stopLabel={L('Stop', 'Arrêter')} playing={v.playing} onPress={toggle} />
          {(stopped || waiting) && (
            <P onPress={() => setShown(Infinity)} hitSlop={6}>
              <T c="font-label-md text-label-md text-primary-container" style={{ fontWeight: '700' }}>{L('Show the whole solution', 'Voir toute la solution')}</T>
            </P>
          )}
          {v.paused && <T c="font-label-sm text-label-sm text-on-surface-variant">{L('Paused for your question', 'En pause pour votre question')}</T>}
        </V>
        {waiting && <T c="font-body-sm text-body-sm text-on-surface-variant">{L('Your teacher explains this one next, writing it on the board as they go.', 'Votre professeur explique celle-ci ensuite, en l’écrivant au tableau.')}</T>}

        {!!body.interpretation && sees(0) && (
          <V c={`gap-1 rounded-lg ${v.playing && v.part === 0 ? 'bg-surface-container-low p-space-sm' : ''}`}>
            <Label>{L('What the question asks', 'Ce que demande la question')}</Label>
            <Written text={body.interpretation} writing={v.playing && v.part === 0} ms={sayMs(parts[0])} c="font-body-md text-body-md text-on-surface" style={{ lineHeight: 23 }} />
          </V>
        )}

        {/* the theory behind it, written as it is explained */}
        {!!concepts.length && sees(1) && (
          <V c="gap-space-xs">
            <P c="flex-row items-center justify-between" onPress={() => setIdeasOpen((x) => !x)} hitSlop={6}>
              <Label>{L('The ideas behind it', 'Les notions en jeu')}</Label>
              <Ic n={ideasOpen ? 'expand_less' : 'expand_more'} s={20} c="primary-container" />
            </P>
            {ideasOpen &&
              concepts.map((c, i) =>
                !sees(1 + i) ? null : (
                  <V key={i} c={`gap-0.5 rounded-xl p-space-sm border ${conceptAt === i ? 'border-primary-container bg-surface-container-low' : 'border-surface-container bg-surface-container-lowest'}`}>
                    <T c="font-label-lg text-label-lg text-on-surface" style={{ fontWeight: '700' }}>
                      {c.name}
                    </T>
                    <Written text={c.explanation} writing={conceptAt === i} ms={sayMs(parts[1 + i])} c="font-body-sm text-body-sm text-on-surface" style={{ lineHeight: 21 }} />
                  </V>
                )
              )}
          </V>
        )}

        {/* the board: each step written while it is explained, with its reason */}
        {anyStep && (
          <V c="gap-space-sm" onLayout={(e) => (at.current.steps = e.nativeEvent.layout.y)}>
            <Label>{L('On the board', 'Au tableau')}</Label>
            {body.steps.map((s, i) => {
              if (!sees(stepPart(body, i))) return null;
              const now = stepAt === i;
              const mine = asks.filter((a) => a.step === i);
              return (
                <V key={i} c={`flex-row gap-space-sm rounded-xl ${now ? 'bg-surface-container-low' : ''}`} style={{ padding: now ? 6 : 0 }} onLayout={(e) => (at.current.rows[i] = e.nativeEvent.layout.y)}>
                  <P c={`w-8 h-8 rounded-full items-center justify-center ${now ? 'bg-primary-container' : 'border border-outline-variant'}`} onPress={() => playFrom(stepPart(body, i))} accessibilityLabel={`${L('Explain step', 'Expliquer l’étape')} ${i + 1}`}>
                    <T c={`font-label-md text-label-md ${now ? 'text-on-primary' : 'text-on-surface'}`} style={{ fontWeight: '700' }}>
                      {i + 1}
                    </T>
                  </P>
                  <V c="flex-1 gap-1">
                    <Written text={s.board} writing={now} ms={sayMs(parts[stepPart(body, i)]) * 0.75} style={{ color: INK, lineHeight: 28, fontWeight: '600' }} />
                    {!!s.why && (!now || all) && (
                      <T c="font-body-sm text-body-sm text-primary-container" style={{ lineHeight: 20, fontWeight: '600' }}>
                        {L('Because', 'Parce que')}: {s.why.replace(/^because[:,]?\s*/i, '')}
                      </T>
                    )}
                    {!!s.say && (!now || all) && (
                      <T c="font-body-sm text-body-sm text-on-surface-variant" style={{ lineHeight: 20 }}>
                        {s.say}
                      </T>
                    )}
                    {now && <T c="font-body-sm text-body-sm text-on-surface-variant" style={{ fontStyle: 'italic' }}>{L('Explaining this step...', 'Explication de cette étape...')}</T>}
                    {!!s.graph && (
                      <V c="rounded-lg border border-surface-container p-1 gap-1 bg-surface-container-lowest">
                        {!!s.graph.title && <T c="font-label-md text-label-md text-on-surface px-1 pt-1">{s.graph.title}</T>}
                        <FunctionGraph graph={s.graph} />
                      </V>
                    )}
                    {mine.map((a, k) => (
                      <StepAsk key={k} ask={a} L={L} />
                    ))}
                    {!now && (
                      <V c="flex-row gap-space-md">
                        <P onPress={() => playFrom(stepPart(body, i))} hitSlop={6}>
                          <T c="font-label-md text-label-md text-primary-container">{L('Explain again', 'Réexpliquer')}</T>
                        </P>
                        {!!onAsk && (
                          <P onPress={() => setAsking(asking === i ? null : i)} hitSlop={6}>
                            <T c="font-label-md text-label-md text-primary-container">{asking === i ? L('Close', 'Fermer') : L('Ask about this step', 'Question sur cette étape')}</T>
                          </P>
                        )}
                      </V>
                    )}
                    {asking === i && (
                      <V c="flex-row items-end gap-space-xs">
                        <Input
                          c="flex-1 min-h-[44px] max-h-[110px] bg-surface-container-lowest border border-outline-variant px-3 py-2.5 rounded-xl text-body-md"
                          placeholder={L('What is not clear in this step?', 'Qu’est-ce qui n’est pas clair ?')}
                          value={draft}
                          onChangeText={setDraft}
                          multiline
                          maxLength={600}
                        />
                        <P c={`w-11 h-11 rounded-xl items-center justify-center ${draft.trim() ? 'bg-primary-container' : 'bg-surface-container'}`} onPress={() => send(i)} disabled={!draft.trim()}>
                          <Ic n="arrow_upward" s={20} c={draft.trim() ? 'on-primary' : 'outline'} />
                        </P>
                      </V>
                    )}
                  </V>
                </V>
              );
            })}
          </V>
        )}

        {/* the answer and what goes with it, once the explanation reaches it */}
        {(all || (v.playing && v.part === last)) && (
          <V c="rounded-xl border-2 border-primary-container px-space-md py-space-sm bg-surface-container-lowest" onLayout={(e) => (at.current.answer = e.nativeEvent.layout.y)}>
            <Label>{L('Answer', 'Réponse')}</Label>
            <Written text={body.answer} writing={v.playing && v.part === last} ms={sayMs(parts[last])} c="font-headline-sm text-headline-sm text-on-surface" style={{ fontWeight: '700' }} />
          </V>
        )}
        {all && <Extras body={body} L={L} teacher={teacher} />}
      </V>
    </V>
  );
}

// Mistakes to avoid, real life, the check, the marking guide and a practice
// question: shown once the board is complete.
function Extras({ body, L, teacher }) {
  return (
    <>
      {!!body.mistakes?.length && (
        <V c="gap-1">
          <Label>{L('Mistakes to avoid', 'Erreurs à éviter')}</Label>
          {body.mistakes.map((m, i) => (
            <V key={i} c="flex-row gap-2">
              <Ic n="error" s={16} c="error" />
              <T c="font-body-sm text-body-sm text-on-surface flex-1" style={{ lineHeight: 20 }}>
                {m}
              </T>
            </V>
          ))}
        </V>
      )}
      {!!body.realLife && (
        <V c="gap-1">
          <Label>{L('In real life', 'Dans la vie courante')}</Label>
          <T c="font-body-sm text-body-sm text-on-surface" style={{ lineHeight: 20 }}>
            {body.realLife}
          </T>
        </V>
      )}
      {!!body.check && (
        <T c="font-body-sm text-body-sm text-on-surface-variant" style={{ lineHeight: 20 }}>
          {L('Check', 'Vérification')}: {body.check.replace(/^check[:,]?\s*/i, '')}
        </T>
      )}
      {teacher && !!body.markingGuide?.length && (
        <V c="gap-1">
          <Label>{L('Marking guide', 'Guide de correction')}</Label>
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
          <Label>{L('Try one yourself', 'À vous')}</Label>
          <T c="font-body-sm text-body-sm text-on-surface" style={{ lineHeight: 20 }}>
            {body.similar}
          </T>
        </V>
      )}
    </>
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

export function Quiz({ body, marks, busyN, onMark, onGive, L }) {
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
      {!!onGive && <Cta variant="dark" icon={null} lead="send" h="h-11" label={L('Give to a class', 'Donner à une classe')} onPress={onGive} />}
    </V>
  );
}

// ---------- for teachers: lesson notes, lesson plans, summaries ----------
// The AI sometimes numbers its own headings ("1. ...") and starts every
// objective with "By the end of the lesson, students should be able to".
const plainHeading = (h) => String(h || '').replace(/^\s*(\d+|[ivx]+)[.)]\s+/i, '');
const objective = (o) => {
  const t = String(o || '').replace(/^\s*by the end of (the|this) lesson,?\s*(the )?(students|learners) (should|will) be able to:?\s*/i, '');
  return t.charAt(0).toUpperCase() + t.slice(1);
};
function Bullets({ items, numbered }) {
  return items.map((t, i) => (
    <V key={i} c="flex-row gap-2 pl-1">
      <T c="font-body-sm text-body-sm text-primary-container" style={{ fontWeight: '700', minWidth: 14 }}>
        {numbered ? `${i + 1}.` : '•'}
      </T>
      <T c="font-body-sm text-body-sm text-on-surface flex-1" style={{ lineHeight: 20 }} selectable>
        {t}
      </T>
    </V>
  ));
}

function Head({ kicker, title, sub }) {
  return (
    <V c="gap-0.5">
      <T c="font-label-md text-label-md text-primary-container" style={{ fontWeight: '700' }}>
        {kicker}
      </T>
      <T c="font-headline-sm text-headline-sm text-on-surface" style={{ fontWeight: '700' }}>
        {title}
      </T>
      {!!sub && <T c="font-body-sm text-body-sm text-on-surface-variant">{sub}</T>}
    </V>
  );
}

function QA({ items, L }) {
  const [open, setOpen] = useState(false);
  return (
    <V c="gap-1.5">
      {items.map((x, i) => (
        <V key={i} c="gap-0.5">
          <T c="font-body-sm text-body-sm text-on-surface" style={{ lineHeight: 20, fontWeight: '600' }}>
            {i + 1}. {x.question}
          </T>
          {open && (
            <T c="font-body-sm text-body-sm text-secondary" style={{ lineHeight: 20 }}>
              {x.answer}
            </T>
          )}
        </V>
      ))}
      <P c="self-start" onPress={() => setOpen((v) => !v)} hitSlop={6}>
        <T c="font-label-md text-label-md text-primary-container" style={{ fontWeight: '700' }}>
          {open ? L('Hide the answers', 'Masquer les réponses') : L('Show the answers', 'Voir les réponses')}
        </T>
      </P>
    </V>
  );
}

export function LessonNotesCard({ body, L }) {
  return (
    <V c="rounded-2xl border border-surface-container bg-surface-container-lowest p-space-md gap-space-md">
      <Head kicker={L('Lesson notes', 'Notes de cours')} title={body.title} />
      {!!body.objectives?.length && (
        <V c="gap-1">
          <Label>{L('By the end of the lesson, students can', 'À la fin du cours, les élèves savent')}</Label>
          <Bullets items={body.objectives.map(objective)} numbered />
        </V>
      )}
      {!!body.introduction && (
        <T c="font-body-md text-body-md text-on-surface" style={{ lineHeight: 23 }}>
          {body.introduction}
        </T>
      )}
      {body.sections.map((s, i) => (
        <V key={i} c="gap-1">
          <T c="font-label-lg text-label-lg text-on-surface" style={{ fontWeight: '700' }}>
            {i + 1}. {plainHeading(s.heading)}
          </T>
          <T c="font-body-md text-body-md text-on-surface" style={{ lineHeight: 23 }} selectable>
            {s.content}
          </T>
          {!!s.keyPoints?.length && <Bullets items={s.keyPoints} />}
          {!!s.example && (
            <V c="rounded-lg bg-surface-container-low px-space-sm py-2">
              <T c="font-body-sm text-body-sm text-on-surface" style={{ lineHeight: 20 }}>
                {L('Example', 'Exemple')}: {s.example}
              </T>
            </V>
          )}
        </V>
      ))}
      {!!body.diagrams?.length && (
        <V c="gap-1">
          <Label>{L('Diagrams to draw on the board', 'Schémas à faire au tableau')}</Label>
          {body.diagrams.map((d, i) => (
            <V key={i} c="rounded-lg border border-surface-container p-space-sm gap-0.5">
              <T c="font-body-sm text-body-sm text-on-surface" style={{ fontWeight: '700' }}>
                {d.title}
              </T>
              <T c="font-body-sm text-body-sm text-on-surface-variant" style={{ lineHeight: 20 }}>
                {d.description}
              </T>
            </V>
          ))}
        </V>
      )}
      {!!body.summary && (
        <V c="gap-1">
          <Label>{L('Summary', 'Résumé')}</Label>
          <T c="font-body-md text-body-md text-on-surface" style={{ lineHeight: 23 }}>
            {body.summary}
          </T>
        </V>
      )}
      {!!body.exercises?.length && (
        <V c="gap-1">
          <Label>{L('Exercises', 'Exercices')}</Label>
          <QA items={body.exercises} L={L} />
        </V>
      )}
    </V>
  );
}

export function LessonPlanCard({ body, L }) {
  return (
    <V c="rounded-2xl border border-surface-container bg-surface-container-lowest p-space-md gap-space-md">
      <Head kicker={L('Lesson plan', 'Fiche de préparation')} title={body.title} sub={`${body.minutes} ${L('minutes', 'minutes')}`} />
      <V c="gap-1">
        <Label>{L('By the end of the lesson, students should be able to', 'À la fin du cours, les élèves devront savoir')}</Label>
        <Bullets items={body.objectives.map(objective)} numbered />
      </V>
      {!!body.prerequisites && (
        <V c="gap-1">
          <Label>{L('Prerequisites', 'Prérequis')}</Label>
          <T c="font-body-sm text-body-sm text-on-surface" style={{ lineHeight: 20 }}>
            {body.prerequisites}
          </T>
        </V>
      )}
      {!!body.materials?.length && (
        <V c="gap-1">
          <Label>{L('Teaching aids', 'Matériel didactique')}</Label>
          <Bullets items={body.materials} />
        </V>
      )}
      <V c="gap-space-sm">
        <Label>{L('The lesson, stage by stage', 'Le déroulement')}</Label>
        {body.stages.map((st, i) => (
          <V key={i} c="rounded-xl border border-surface-container p-space-sm gap-1">
            <V c="flex-row items-center justify-between">
              <T c="font-label-lg text-label-lg text-on-surface" style={{ fontWeight: '700' }}>
                {st.name}
              </T>
              <T c="font-label-md text-label-md text-primary-container" style={{ fontWeight: '700' }}>
                {st.minutes} min
              </T>
            </V>
            <T c="font-body-sm text-body-sm text-on-surface" style={{ lineHeight: 20 }}>
              <T c="font-body-sm text-body-sm text-on-surface" style={{ fontWeight: '700' }}>
                {L('Teacher', 'Enseignant')}:{' '}
              </T>
              {st.teacher}
            </T>
            {!!st.students && (
              <T c="font-body-sm text-body-sm text-on-surface" style={{ lineHeight: 20 }}>
                <T c="font-body-sm text-body-sm text-on-surface" style={{ fontWeight: '700' }}>
                  {L('Students', 'Élèves')}:{' '}
                </T>
                {st.students}
              </T>
            )}
            {!!st.notes && (
              <T c="font-body-sm text-body-sm text-on-surface-variant" style={{ lineHeight: 20 }}>
                {st.notes}
              </T>
            )}
          </V>
        ))}
      </V>
      {!!body.evaluation?.length && (
        <V c="gap-1">
          <Label>{L('Evaluation', 'Évaluation')}</Label>
          <QA items={body.evaluation} L={L} />
        </V>
      )}
      {!!body.homework && (
        <V c="gap-1">
          <Label>{L('Homework', 'Devoir')}</Label>
          <T c="font-body-sm text-body-sm text-on-surface" style={{ lineHeight: 20 }}>
            {body.homework}
          </T>
        </V>
      )}
      {!!body.boardSummary && (
        <V c="rounded-xl p-space-sm gap-1" style={{ backgroundColor: BOARD }}>
          <Label>{L('Board summary', 'Résumé au tableau')}</Label>
          <T c="font-body-md text-body-md" style={{ color: INK, lineHeight: 24, fontWeight: '600' }} selectable>
            {body.boardSummary}
          </T>
        </V>
      )}
    </V>
  );
}

export function SummaryCard({ body, L }) {
  return (
    <V c="rounded-2xl border border-surface-container bg-surface-container-lowest p-space-md gap-space-md">
      <Head kicker={L('Summary', 'Résumé')} title={body.title} />
      <T c="font-body-md text-body-md text-on-surface" style={{ lineHeight: 23 }} selectable>
        {body.summary}
      </T>
      <V c="gap-1">
        <Label>{L('Key points', 'Points clés')}</Label>
        <Bullets items={body.keyPoints} />
      </V>
      {!!body.keyTerms?.length && (
        <V c="gap-1">
          <Label>{L('Key terms', 'Termes clés')}</Label>
          {body.keyTerms.map((k, i) => (
            <T key={i} c="font-body-sm text-body-sm text-on-surface" style={{ lineHeight: 20 }}>
              <T c="font-body-sm text-body-sm text-on-surface" style={{ fontWeight: '700' }}>
                {k.term}:{' '}
              </T>
              {k.meaning}
            </T>
          ))}
        </V>
      )}
      {!!body.examFocus?.length && (
        <V c="gap-1">
          <Label>{L('What examiners ask', 'Ce que demandent les examinateurs')}</Label>
          <Bullets items={body.examFocus} />
        </V>
      )}
    </V>
  );
}
