// How the study chat shows each message, like ChatGPT or Claude: the
// person's messages in a bubble on the right, the AI's answers as plain text
// across the screen (no cards), with small actions under each answer: copy,
// listen, download as PDF (and, for a teacher's test, give it to a class).
import { useEffect, useRef, useState } from 'react';
import { ActivityIndicator, Image } from 'react-native';
import * as Clipboard from 'expo-clipboard';
import { Ic, P, T, V } from '../../ui/kit';
import FunctionGraph from '../../ui/FunctionGraph';
import { explain, stopTalking, subscribe } from '../../lib/talk';

const INK = '#1f2a37';
const BODY = 'font-body-md text-body-md text-on-surface';
const LINE = { lineHeight: 24 };
const FILE_ICON = { image: 'image', pdf: 'picture_as_pdf', docx: 'description', text: 'description' };

// ---------- the voice ----------
// What is read aloud for a solution, in order: what it asks, the ideas behind
// it, each step (its explanation and reason), then the answer.
export const solutionParts = (sol, lang) => [
  sol.interpretation || '',
  ...(sol.concepts || []).map((c) => `${c.name}. ${c.explanation}`),
  ...(sol.steps || []).map((s) => [s.say || s.board, s.why].filter(Boolean).join(' ')),
  sol.answer ? `${lang === 'fr' ? 'Donc la réponse est :' : 'So the answer is:'} ${sol.answer}` : '',
];
const stepPart = (sol, i) => 1 + (sol.concepts || []).length + i;

// Which message is being read now, and which part of it.
export function useTalk(id) {
  const [st, setSt] = useState({ id: null, index: -1, playing: false });
  useEffect(() => subscribe(setSt), []);
  return { playing: st.id === id && st.playing, part: st.id === id ? st.index : -1 };
}

// Text written as it is said (on a call): it starts when its part starts and
// is finished in about the time the voice takes to say it.
function Written({ text, writing, ms = 2500, c = BODY, style }) {
  const [n, setN] = useState(writing ? 0 : String(text || '').length);
  useEffect(() => {
    const len = String(text || '').length;
    if (!writing) {
      setN(len);
      return undefined;
    }
    setN(0);
    const ticks = Math.max(20, Math.round(ms / 40));
    const per = Math.max(1, Math.ceil(len / ticks));
    const t = setInterval(() => setN((x) => (x + per >= len ? (clearInterval(t), len) : x + per)), 40);
    return () => clearInterval(t);
  }, [text, writing, ms]);
  return (
    <T c={c} style={style} selectable>
      {String(text || '').slice(0, n)}
    </T>
  );
}
const sayMs = (t) => Math.min(9000, Math.max(1400, String(t || '').length * 55));

// ---------- small pieces ----------
function H({ children }) {
  return (
    <T c="font-label-lg text-label-lg text-on-surface" style={{ fontWeight: '700', marginTop: 4 }}>
      {children}
    </T>
  );
}
function Para({ children, c = BODY, style }) {
  return (
    <T c={c} style={[LINE, style]} selectable>
      {children}
    </T>
  );
}
function Bullets({ items, numbered }) {
  return (items || []).map((t, i) => (
    <V key={i} c="flex-row gap-2 pl-1">
      <T c={BODY} style={[LINE, { minWidth: 16 }]}>
        {numbered ? `${i + 1}.` : '•'}
      </T>
      <T c={`${BODY} flex-1`} style={LINE} selectable>
        {t}
      </T>
    </V>
  ));
}
// Working on the board: a soft block like a code block in ChatGPT.
function Board({ children, now }) {
  return (
    <V c={`rounded-xl px-space-sm py-2 ${now ? '' : 'bg-surface-container-low'}`} style={now ? { backgroundColor: '#e6ecfa' } : null}>
      {children}
    </V>
  );
}

// ---------- the person's messages ----------
export function UserMessage({ body, L }) {
  const files = body.files || [];
  return (
    <V c="items-end gap-1.5 pl-space-xl">
      {!!files.length && (
        <V c="flex-row flex-wrap justify-end gap-1.5">
          {files.map((f) =>
            f.preview ? (
              <Image key={f.id || f.name} source={{ uri: f.preview }} style={{ width: 72, height: 72, borderRadius: 12 }} />
            ) : (
              <V key={f.id || f.name} c="flex-row items-center gap-1.5 px-2.5 py-2 rounded-xl bg-surface-container-low" style={{ maxWidth: 220 }}>
                <Ic n={FILE_ICON[f.kind] || 'description'} s={18} c="primary-container" />
                <T c="font-label-md text-label-md text-on-surface" numberOfLines={1} style={{ flexShrink: 1 }}>
                  {f.name}
                </T>
              </V>
            )
          )}
        </V>
      )}
      {!!body.text && body.text !== '…' && (
        <V c="rounded-3xl bg-surface-container-low px-space-md py-2.5" style={{ maxWidth: '100%' }}>
          <T c={BODY} style={LINE} selectable>
            {body.text}
          </T>
        </V>
      )}
      {!body.text && !files.length && <T c="font-body-sm text-body-sm text-on-surface-variant">{L('(empty)', '(vide)')}</T>}
    </V>
  );
}

// ---------- the AI's answers ----------
function TextAnswer({ body }) {
  // short paragraphs, and lines starting with "- " or "1." as lists
  const blocks = String(body.text || '').split(/\n{2,}/);
  return blocks.map((b, i) => {
    const lines = b.split('\n');
    if (lines.every((l) => /^\s*([-•]|\d+[.)])\s+/.test(l))) {
      return <Bullets key={i} items={lines.map((l) => l.replace(/^\s*([-•]|\d+[.)])\s+/, ''))} numbered={/^\s*\d/.test(lines[0])} />;
    }
    return <Para key={i}>{b}</Para>;
  });
}

// A solution: what the question asks, the ideas behind it, the working step
// by step with the reasons, the answer, then mistakes to avoid and more. On a
// call (live) it is written as it is explained; otherwise all of it is there.
function SolutionAnswer({ id, body, L, lang, teacher, live, onFollow }) {
  const v = useTalk(id);
  const parts = solutionParts(body, lang);
  const last = parts.length - 1;
  const [shown, setShown] = useState(live ? 0 : Infinity);
  useEffect(() => {
    if (v.playing && v.part >= 0) setShown((s) => (s === Infinity ? s : Math.max(s, v.part + 1)));
  }, [v.playing, v.part]);
  useEffect(() => {
    if (shown !== Infinity && shown > last) setShown(Infinity);
  }, [shown, last]);
  // stopped before the end: everything shows
  useEffect(() => {
    if (!v.playing && shown !== Infinity && shown > 0) {
      const t = setTimeout(() => setShown(Infinity), 600);
      return () => clearTimeout(t);
    }
    return undefined;
  }, [v.playing, shown]);
  const sees = (p) => p < shown;
  const all = shown === Infinity;
  const writing = (p) => v.playing && v.part === p && !all;
  const concepts = body.concepts || [];
  // keep the part being explained in view
  const at = useRef({});
  useEffect(() => {
    if (!v.playing || !onFollow) return undefined;
    const t = setTimeout(() => at.current[v.part] != null && onFollow(at.current[v.part]), 120);
    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [v.playing, v.part]);
  const mark = (p) => ({ onLayout: (e) => (at.current[p] = e.nativeEvent.layout.y) });

  if (live && shown === 0 && !v.playing) {
    return (
      <V c="gap-1">
        {!!body.label && <H>{`${L('Question', 'Question')} ${body.label}`}</H>}
        <Para c="font-body-md text-body-md text-on-surface-variant">{body.question}</Para>
        <T c="font-body-sm text-body-sm text-on-surface-variant" style={{ fontStyle: 'italic' }}>
          {L('I will explain this one next.', 'J’explique celle-ci juste après.')}
        </T>
      </V>
    );
  }
  return (
    <V c="gap-space-sm">
      <V c="border-l-4 border-primary-container pl-space-sm gap-0.5">
        <T c="font-label-md text-label-md text-primary-container" style={{ fontWeight: '700' }}>
          {body.label ? `${L('Question', 'Question')} ${body.label}` : L('Question', 'Question')}
          {body.checked ? `  ·  ${L('checked', 'vérifiée')}` : ''}
        </T>
        <Para>{body.question}</Para>
      </V>

      {!!body.interpretation && sees(0) && (
        <V c="gap-0.5" {...mark(0)}>
          <H>{L('What the question asks', 'Ce que demande la question')}</H>
          <Written text={body.interpretation} writing={writing(0)} ms={sayMs(parts[0])} style={LINE} />
        </V>
      )}

      {!!concepts.length && sees(1) && (
        <V c="gap-1">
          <H>{L('The ideas behind it', 'Les notions en jeu')}</H>
          {concepts.map((c, i) =>
            !sees(1 + i) ? null : (
              <V key={i} c="gap-0.5" {...mark(1 + i)}>
                <T c={BODY} style={[LINE, { fontWeight: '700' }]}>
                  {c.name}
                </T>
                <Written text={c.explanation} writing={writing(1 + i)} ms={sayMs(parts[1 + i])} style={LINE} />
              </V>
            )
          )}
        </V>
      )}

      {(body.steps || []).some((_, i) => sees(stepPart(body, i))) && (
        <V c="gap-space-sm">
          <H>{L('Working', 'Résolution')}</H>
          {body.steps.map((s, i) => {
            const p = stepPart(body, i);
            if (!sees(p)) return null;
            const now = v.playing && v.part === p;
            return (
              <V key={i} c="gap-1" {...mark(p)}>
                <T c="font-label-md text-label-md text-on-surface-variant" style={{ fontWeight: '700' }}>
                  {L('Step', 'Étape')} {i + 1}
                </T>
                <Board now={now}>
                  <Written text={s.board} writing={writing(p)} ms={sayMs(parts[p]) * 0.75} c="font-body-lg text-body-lg" style={{ color: INK, lineHeight: 28, fontWeight: '600' }} />
                </Board>
                {!!s.why && (!writing(p) || all) && (
                  <Para c="font-body-md text-body-md text-primary-container" style={{ fontWeight: '600' }}>
                    {L('Because', 'Parce que')} {s.why.replace(/^because[:,]?\s*/i, '')}
                  </Para>
                )}
                {!!s.say && (!writing(p) || all) && <Para c="font-body-md text-body-md text-on-surface-variant">{s.say}</Para>}
                {!!s.graph && (
                  <V c="rounded-xl border border-surface-container p-1 bg-surface-container-lowest">
                    {!!s.graph.title && <T c="font-label-md text-label-md text-on-surface px-1 pt-1">{s.graph.title}</T>}
                    <FunctionGraph graph={s.graph} />
                  </V>
                )}
              </V>
            );
          })}
        </V>
      )}

      {(all || (v.playing && v.part === last)) && !!body.answer && (
        <V c="rounded-xl px-space-md py-space-sm gap-0.5" style={{ backgroundColor: '#fff6e0', borderLeftWidth: 4, borderLeftColor: '#FBAC02' }} {...mark(last)}>
          <T c="font-label-md text-label-md text-on-surface" style={{ fontWeight: '700' }}>
            {L('Answer', 'Réponse')}
          </T>
          <Written text={body.answer} writing={writing(last)} ms={sayMs(parts[last])} c="font-body-lg text-body-lg text-on-surface" style={{ lineHeight: 26, fontWeight: '700' }} />
        </V>
      )}

      {all && (
        <>
          {!!body.mistakes?.length && (
            <V c="gap-0.5">
              <H>{L('Mistakes to avoid', 'Erreurs à éviter')}</H>
              <Bullets items={body.mistakes} />
            </V>
          )}
          {!!body.realLife && (
            <V c="gap-0.5">
              <H>{L('In real life', 'Dans la vie courante')}</H>
              <Para>{body.realLife}</Para>
            </V>
          )}
          {!!body.check && <Para c="font-body-md text-body-md text-on-surface-variant">{`${L('Check', 'Vérification')}: ${body.check.replace(/^check[:,]?\s*/i, '')}`}</Para>}
          {teacher && !!body.markingGuide?.length && (
            <V c="gap-0.5">
              <H>{L('Marking guide', 'Guide de correction')}</H>
              {body.markingGuide.map((p, i) => (
                <V key={i} c="flex-row gap-2">
                  <T c={`${BODY} flex-1`} style={LINE}>
                    {p.point}
                  </T>
                  <T c={BODY} style={[LINE, { fontWeight: '700' }]}>
                    {p.marks}
                  </T>
                </V>
              ))}
            </V>
          )}
          {!!body.similar && (
            <V c="gap-0.5">
              <H>{L('Try one yourself', 'À vous')}</H>
              <Para>{body.similar}</Para>
            </V>
          )}
        </>
      )}
    </V>
  );
}

// The questions found in a paper, before they are solved one by one.
function QuestionsAnswer({ body, solved, running, onContinue, L }) {
  const left = body.questions.filter((q) => !solved.has(q.n)).length;
  return (
    <V c="gap-1">
      <Para>
        {L(`I found ${body.questions.length} question${body.questions.length === 1 ? '' : 's'}${body.title ? ` in ${body.title}` : ''}. I solve and explain each one below.`, `J’ai trouvé ${body.questions.length} question${body.questions.length === 1 ? '' : 's'}${body.title ? ` dans ${body.title}` : ''}. Je les résous et les explique une par une ci-dessous.`)}
      </Para>
      {body.questions.map((q) => (
        <T key={q.n} c="font-body-sm text-body-sm text-on-surface-variant" numberOfLines={1}>
          {q.label || q.n}. {q.text}
        </T>
      ))}
      {left > 0 && !running && !!onContinue && (
        <P c="self-start py-1" onPress={onContinue} hitSlop={6}>
          <T c="font-label-lg text-label-lg text-primary-container" style={{ fontWeight: '700' }}>
            {L(`Continue: solve the ${left} left`, `Continuer : résoudre les ${left} restantes`)}
          </T>
        </P>
      )}
    </V>
  );
}

function NotesAnswer({ body, L }) {
  return (
    <V c="gap-space-sm">
      <T c="font-headline-sm text-headline-sm text-on-surface" style={{ fontWeight: '700' }}>
        {body.title}
      </T>
      {!!body.summary && <Para>{body.summary}</Para>}
      {(body.sections || []).map((s, i) => (
        <V key={i} c="gap-0.5">
          <H>{s.heading}</H>
          <Para>{s.explanation}</Para>
          <Bullets items={s.keyPoints} />
          {!!s.example && <Para c="font-body-md text-body-md text-on-surface-variant">{`${L('Example', 'Exemple')}: ${s.example}`}</Para>}
        </V>
      ))}
      {!!body.keyTerms?.length && (
        <V c="gap-0.5">
          <H>{L('Key terms', 'Termes clés')}</H>
          {body.keyTerms.map((k, i) => (
            <Para key={i}>
              <T c={BODY} style={{ fontWeight: '700' }}>{`${k.term}: `}</T>
              {k.meaning}
            </Para>
          ))}
        </V>
      )}
      {!!body.examTips?.length && (
        <V c="gap-0.5">
          <H>{L('Exam tips', 'Conseils d’examen')}</H>
          <Bullets items={body.examTips} />
        </V>
      )}
      {!!body.teaching?.length && (
        <V c="gap-0.5">
          <H>{L('Teaching these notes', 'Enseigner ces notes')}</H>
          <Bullets items={body.teaching} />
        </V>
      )}
    </V>
  );
}

// Revision questions or a test: the questions, then (for a teacher, or once
// marked) the answers and the marking scheme.
function QuizAnswer({ body, teacher, marked, L }) {
  const [open, setOpen] = useState(false);
  const showAnswers = open || marked;
  return (
    <V c="gap-space-sm">
      <T c="font-headline-sm text-headline-sm text-on-surface" style={{ fontWeight: '700' }}>
        {body.title}
      </T>
      {body.questions.map((q) => (
        <V key={q.n} c="gap-0.5">
          <Para style={{ fontWeight: '600' }}>
            {q.n}. {q.text}
            {q.type === 'structured' ? <T c="font-body-sm text-body-sm text-on-surface-variant">{`  (${q.marks} ${L('marks', 'points')})`}</T> : null}
          </Para>
          {q.type === 'mcq' && q.options.map((o) => <Para key={o}>{`    ${o}`}</Para>)}
        </V>
      ))}
      {!marked && !teacher && (
        <Para c="font-body-md text-body-md text-on-surface-variant">
          {L('Reply with your answers, for example "1 B, 2 A" and your written answers, or send a photo of them. I will mark them.', 'Répondez avec vos réponses, par exemple « 1 B, 2 A » et vos réponses écrites, ou envoyez-en une photo. Je les corrige.')}
        </Para>
      )}
      {(teacher || marked) && (
        <P c="self-start py-1" onPress={() => setOpen((x) => !x)} hitSlop={6}>
          <T c="font-label-lg text-label-lg text-primary-container" style={{ fontWeight: '700' }}>
            {showAnswers && !marked ? L('Hide the answers and marking scheme', 'Masquer les réponses et le barème') : marked ? L('Answers and marking scheme', 'Réponses et barème') : L('Show the answers and marking scheme', 'Voir les réponses et le barème')}
          </T>
        </P>
      )}
      {showAnswers &&
        body.questions.map((q) => (
          <V key={q.n} c="gap-0.5">
            {q.type === 'mcq' ? (
              <Para>
                <T c={BODY} style={{ fontWeight: '700' }}>{`${q.n}. ${q.answer}. `}</T>
                {q.explanation}
              </Para>
            ) : (
              <>
                <Para style={{ fontWeight: '700' }}>{`${q.n}.`}</Para>
                {q.scheme.map((p, i) => (
                  <V key={i} c="flex-row gap-2 pl-space-sm">
                    <T c={`${BODY} flex-1`} style={LINE}>
                      {p.point}
                    </T>
                    <T c={BODY} style={[LINE, { fontWeight: '700' }]}>
                      {p.marks}
                    </T>
                  </V>
                ))}
                {!!q.modelAnswer && <Para c="font-body-md text-body-md text-on-surface-variant">{`${L('Model answer', 'Réponse modèle')}: ${q.modelAnswer}`}</Para>}
              </>
            )}
          </V>
        ))}
    </V>
  );
}

// Answers to a quiz, marked: the score, then each question.
function MarkedAllAnswer({ body, L }) {
  const fmt = (x) => (Number.isInteger(x) ? String(x) : Number(x).toFixed(1));
  return (
    <V c="gap-space-sm">
      <T c="font-headline-sm text-headline-sm text-on-surface" style={{ fontWeight: '700' }}>
        {L('Your score', 'Votre note')}: {fmt(body.got)} / {fmt(body.total)} ({body.score}%)
      </T>
      {body.marks.map((m) => (
        <V key={m.n} c="gap-0.5">
          <V c="flex-row items-center gap-1.5">
            <Ic n={m.awarded >= m.total ? 'check_circle' : m.awarded > 0 ? 'adjust' : 'cancel'} s={18} c={m.awarded >= m.total ? 'secondary' : m.awarded > 0 ? 'primary-container' : 'error'} fill={m.awarded >= m.total} />
            <T c={BODY} style={{ fontWeight: '700' }}>
              {m.n}. {fmt(m.awarded)}/{fmt(m.total)}
            </T>
          </V>
          {m.type === 'mcq' ? (
            <Para>{m.answer ? `${L('You chose', 'Vous avez choisi')} ${m.answer}. ${m.answer === m.correct ? L('Correct.', 'Correct.') : `${L('The answer is', 'La réponse est')} ${m.correct}.`} ${m.explanation || ''}` : `${L('Not answered. The answer is', 'Sans réponse. La réponse est')} ${m.correct}. ${m.explanation || ''}`}</Para>
          ) : (
            <>
              {!!m.answer && <Para c="font-body-md text-body-md text-on-surface-variant">{`${L('Your answer', 'Votre réponse')}: ${m.answer}`}</Para>}
              {!!m.feedback && <Para>{m.feedback}</Para>}
            </>
          )}
        </V>
      ))}
    </V>
  );
}

// One structured answer marked (older chats).
function MarkedAnswer({ body, L }) {
  return (
    <V c="gap-0.5">
      <T c={BODY} style={{ fontWeight: '700' }}>
        {L('Question', 'Question')} {body.n}: {body.awarded} / {body.total}
      </T>
      {!!body.feedback && <Para>{body.feedback}</Para>}
      {(body.criteria || []).map((c, i) => (
        <Para key={i} c="font-body-sm text-body-sm text-on-surface-variant">{`${c.point} (${c.awarded}/${c.max})${c.comment ? `: ${c.comment}` : ''}`}</Para>
      ))}
    </V>
  );
}

const plainHeading = (h) => String(h || '').replace(/^\s*(\d+|[ivx]+)[.)]\s+/i, '');
const objective = (o) => {
  const t = String(o || '').replace(/^\s*by the end of (the|this) lesson,?\s*(the )?(students|learners) (should|will) be able to:?\s*/i, '');
  return t.charAt(0).toUpperCase() + t.slice(1);
};

function QA({ items, L }) {
  const [open, setOpen] = useState(false);
  return (
    <V c="gap-1">
      {items.map((x, i) => (
        <V key={i} c="gap-0.5">
          <Para style={{ fontWeight: '600' }}>{`${i + 1}. ${x.question}`}</Para>
          {open && <Para c="font-body-md text-body-md text-on-surface-variant">{x.answer}</Para>}
        </V>
      ))}
      <P c="self-start py-1" onPress={() => setOpen((v) => !v)} hitSlop={6}>
        <T c="font-label-lg text-label-lg text-primary-container" style={{ fontWeight: '700' }}>
          {open ? L('Hide the answers', 'Masquer les réponses') : L('Show the answers', 'Voir les réponses')}
        </T>
      </P>
    </V>
  );
}

function LessonNotesAnswer({ body, L }) {
  return (
    <V c="gap-space-sm">
      <T c="font-headline-sm text-headline-sm text-on-surface" style={{ fontWeight: '700' }}>
        {body.title}
      </T>
      {!!body.objectives?.length && (
        <V c="gap-0.5">
          <H>{L('By the end of the lesson, students can', 'À la fin du cours, les élèves savent')}</H>
          <Bullets items={body.objectives.map(objective)} numbered />
        </V>
      )}
      {!!body.introduction && <Para>{body.introduction}</Para>}
      {body.sections.map((s, i) => (
        <V key={i} c="gap-0.5">
          <H>{`${i + 1}. ${plainHeading(s.heading)}`}</H>
          <Para>{s.content}</Para>
          <Bullets items={s.keyPoints} />
          {!!s.example && <Para c="font-body-md text-body-md text-on-surface-variant">{`${L('Example', 'Exemple')}: ${s.example}`}</Para>}
        </V>
      ))}
      {!!body.diagrams?.length && (
        <V c="gap-0.5">
          <H>{L('Diagrams to draw on the board', 'Schémas à faire au tableau')}</H>
          {body.diagrams.map((d, i) => (
            <Para key={i}>
              <T c={BODY} style={{ fontWeight: '700' }}>{`${d.title}: `}</T>
              {d.description}
            </Para>
          ))}
        </V>
      )}
      {!!body.summary && (
        <V c="gap-0.5">
          <H>{L('Summary', 'Résumé')}</H>
          <Para>{body.summary}</Para>
        </V>
      )}
      {!!body.exercises?.length && (
        <V c="gap-0.5">
          <H>{L('Exercises', 'Exercices')}</H>
          <QA items={body.exercises} L={L} />
        </V>
      )}
    </V>
  );
}

function LessonPlanAnswer({ body, L }) {
  return (
    <V c="gap-space-sm">
      <T c="font-headline-sm text-headline-sm text-on-surface" style={{ fontWeight: '700' }}>
        {body.title}
      </T>
      <T c="font-body-sm text-body-sm text-on-surface-variant">{`${L('Lesson plan', 'Fiche de préparation')}, ${body.minutes} ${L('minutes', 'minutes')}`}</T>
      <V c="gap-0.5">
        <H>{L('By the end of the lesson, students should be able to', 'À la fin du cours, les élèves devront savoir')}</H>
        <Bullets items={body.objectives.map(objective)} numbered />
      </V>
      {!!body.prerequisites && (
        <V c="gap-0.5">
          <H>{L('Prerequisites', 'Prérequis')}</H>
          <Para>{body.prerequisites}</Para>
        </V>
      )}
      {!!body.materials?.length && (
        <V c="gap-0.5">
          <H>{L('Teaching aids', 'Matériel didactique')}</H>
          <Bullets items={body.materials} />
        </V>
      )}
      <H>{L('The lesson, stage by stage', 'Le déroulement')}</H>
      {body.stages.map((st, i) => (
        <V key={i} c="gap-0.5">
          <T c={BODY} style={[LINE, { fontWeight: '700' }]}>{`${st.name} (${st.minutes} min)`}</T>
          <Para>
            <T c={BODY} style={{ fontWeight: '600' }}>{`${L('Teacher', 'Enseignant')}: `}</T>
            {st.teacher}
          </Para>
          {!!st.students && (
            <Para>
              <T c={BODY} style={{ fontWeight: '600' }}>{`${L('Students', 'Élèves')}: `}</T>
              {st.students}
            </Para>
          )}
          {!!st.notes && <Para c="font-body-md text-body-md text-on-surface-variant">{st.notes}</Para>}
        </V>
      ))}
      {!!body.evaluation?.length && (
        <V c="gap-0.5">
          <H>{L('Evaluation', 'Évaluation')}</H>
          <QA items={body.evaluation} L={L} />
        </V>
      )}
      {!!body.homework && (
        <V c="gap-0.5">
          <H>{L('Homework', 'Devoir')}</H>
          <Para>{body.homework}</Para>
        </V>
      )}
      {!!body.boardSummary && (
        <V c="gap-0.5">
          <H>{L('Board summary', 'Résumé au tableau')}</H>
          <Board>
            <T c="font-body-md text-body-md" style={{ color: INK, lineHeight: 24, fontWeight: '600' }} selectable>
              {body.boardSummary}
            </T>
          </Board>
        </V>
      )}
    </V>
  );
}

function SummaryAnswer({ body, L }) {
  return (
    <V c="gap-space-sm">
      <T c="font-headline-sm text-headline-sm text-on-surface" style={{ fontWeight: '700' }}>
        {body.title}
      </T>
      <Para>{body.summary}</Para>
      <H>{L('Key points', 'Points clés')}</H>
      <Bullets items={body.keyPoints} />
      {!!body.keyTerms?.length && (
        <V c="gap-0.5">
          <H>{L('Key terms', 'Termes clés')}</H>
          {body.keyTerms.map((k, i) => (
            <Para key={i}>
              <T c={BODY} style={{ fontWeight: '700' }}>{`${k.term}: `}</T>
              {k.meaning}
            </Para>
          ))}
        </V>
      )}
      {!!body.examFocus?.length && (
        <V c="gap-0.5">
          <H>{L('What examiners ask', 'Ce que demandent les examinateurs')}</H>
          <Bullets items={body.examFocus} />
        </V>
      )}
    </V>
  );
}

// ---------- plain text, for Copy and for Listen ----------
export function plainText(m, L) {
  const b = m.body || {};
  const lines = (a) => (a || []).filter(Boolean).join('\n');
  switch (m.kind) {
    case 'text':
      return b.text || '';
    case 'solution':
      return lines([
        `${L('Question', 'Question')}${b.label ? ` ${b.label}` : ''}: ${b.question}`,
        b.interpretation,
        ...(b.concepts || []).map((c) => `${c.name}: ${c.explanation}`),
        ...(b.steps || []).map((s, i) => `${L('Step', 'Étape')} ${i + 1}: ${s.board}${s.why ? `\n${L('Because', 'Parce que')} ${s.why}` : ''}`),
        `${L('Answer', 'Réponse')}: ${b.answer}`,
      ]);
    case 'notes':
      return lines([b.title, b.summary, ...(b.sections || []).map((s) => `${s.heading}\n${s.explanation}`)]);
    case 'quiz':
      return lines([b.title, ...(b.questions || []).map((q) => `${q.n}. ${q.text}${q.type === 'mcq' ? `\n${q.options.join('\n')}` : ` (${q.marks})`}`)]);
    case 'lessonNotes':
      return lines([b.title, b.introduction, ...(b.sections || []).map((s) => `${plainHeading(s.heading)}\n${s.content}`), b.summary]);
    case 'lessonPlan':
      return lines([b.title, ...(b.objectives || []).map(objective), ...(b.stages || []).map((s) => `${s.name} (${s.minutes} min): ${s.teacher}`), b.boardSummary]);
    case 'summary':
      return lines([b.title, b.summary, ...(b.keyPoints || [])]);
    case 'marked_all':
      return lines([`${b.score}%`, ...(b.marks || []).map((x) => `${x.n}. ${x.awarded}/${x.total} ${x.feedback || ''}`)]);
    default:
      return '';
  }
}

const PDF_KINDS = ['solution', 'notes', 'quiz', 'lessonNotes', 'lessonPlan', 'summary'];

// The small actions under an answer.
function Actions({ m, L, lang, onPdf, onGive, onCopied }) {
  const v = useTalk(m.id);
  const [busy, setBusy] = useState(false);
  const listen = () => {
    if (v.playing) return stopTalking();
    if (m.kind === 'solution') return explain(m.id, solutionParts(m.body, lang), { lang });
    return explain(m.id, plainText(m, L).split(/\n+/).filter(Boolean), { lang });
  };
  const Btn = ({ icon, label, onPress, on }) => (
    <P c="h-9 px-2 rounded-lg flex-row items-center gap-1" onPress={onPress} accessibilityRole="button" accessibilityLabel={label} hitSlop={4}>
      <Ic n={icon} s={19} c={on ? 'primary-container' : 'on-surface-variant'} />
    </P>
  );
  return (
    <V c="flex-row items-center -ml-2">
      <Btn
        icon="content_copy"
        label={L('Copy', 'Copier')}
        onPress={async () => {
          await Clipboard.setStringAsync(plainText(m, L));
          onCopied?.();
        }}
      />
      <Btn icon={v.playing ? 'stop_circle' : 'volume_up'} label={v.playing ? L('Stop', 'Arrêter') : L('Listen', 'Écouter')} onPress={listen} on={v.playing} />
      {PDF_KINDS.includes(m.kind) && (
        <P
          c="h-9 px-2 rounded-lg flex-row items-center gap-1"
          disabled={busy}
          onPress={async () => {
            setBusy(true);
            try {
              await onPdf(m);
            } finally {
              setBusy(false);
            }
          }}
          accessibilityRole="button"
          accessibilityLabel={L('Download as PDF', 'Télécharger en PDF')}
        >
          {busy ? <ActivityIndicator size="small" /> : <Ic n="download" s={19} c="on-surface-variant" />}
          <T c="font-label-md text-label-md text-on-surface-variant">PDF</T>
        </P>
      )}
      {!!onGive && (
        <P c="h-9 px-2 rounded-lg flex-row items-center gap-1" onPress={onGive} accessibilityRole="button">
          <Ic n="send" s={18} c="primary-container" />
          <T c="font-label-md text-label-md text-primary-container" style={{ fontWeight: '700' }}>
            {L('Give to a class', 'Donner à une classe')}
          </T>
        </P>
      )}
    </V>
  );
}

// One message of the AI, with its actions.
export function AssistantMessage({ m, L, lang, teacher, live, solved, running, onContinue, quizMarked, onPdf, onGive, onCopied, onFollow }) {
  const b = m.body || {};
  let content = null;
  if (m.kind === 'text') content = <TextAnswer body={b} />;
  else if (m.kind === 'solution') content = <SolutionAnswer id={m.id} body={b} L={L} lang={lang} teacher={teacher} live={live} onFollow={onFollow} />;
  else if (m.kind === 'questions') content = <QuestionsAnswer body={b} solved={solved} running={running} onContinue={onContinue} L={L} />;
  else if (m.kind === 'notes') content = <NotesAnswer body={b} L={L} />;
  else if (m.kind === 'quiz') content = <QuizAnswer body={b} teacher={teacher} marked={quizMarked} L={L} />;
  else if (m.kind === 'marked_all') content = <MarkedAllAnswer body={b} L={L} />;
  else if (m.kind === 'marked') content = <MarkedAnswer body={b} L={L} />;
  else if (m.kind === 'lessonNotes') content = <LessonNotesAnswer body={b} L={L} />;
  else if (m.kind === 'lessonPlan') content = <LessonPlanAnswer body={b} L={L} />;
  else if (m.kind === 'summary') content = <SummaryAnswer body={b} L={L} />;
  if (!content) return null;
  const local = String(m.id).startsWith('local-');
  return (
    <V c="gap-1">
      {content}
      {!local && m.kind !== 'questions' && <Actions m={m} L={L} lang={lang} onPdf={onPdf} onGive={onGive} onCopied={onCopied} />}
    </V>
  );
}

// What the AI is doing now: one quiet line that changes as it works.
export function Thinking({ steps }) {
  const [i, setI] = useState(0);
  useEffect(() => {
    setI(0);
    const t = setInterval(() => setI((x) => Math.min(x + 1, steps.length - 1)), 4500);
    return () => clearInterval(t);
  }, [steps]);
  return (
    <V c="flex-row items-center gap-2 py-1">
      <ActivityIndicator size="small" color="#02287B" />
      <T c="font-body-md text-body-md text-on-surface-variant">{steps[i]}</T>
    </V>
  );
}
