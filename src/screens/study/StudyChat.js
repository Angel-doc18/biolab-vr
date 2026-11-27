// The study chat: one conversation that does everything, like ChatGPT or
// Claude. The person writes, or adds photos and documents, and the AI works
// out what is wanted: it solves and explains questions step by step (a whole
// paper, one after another, without being asked again), explains notes,
// summarises, makes revision questions and marks the answers, and for
// teachers writes lesson notes, lesson plans and tests. Files sent with no
// instruction get a question back first. Past chats are in the side panel.
import { useCallback, useEffect, useRef, useState } from 'react';
import { ActivityIndicator, Image, Modal, Pressable, ScrollView, StyleSheet, useWindowDimensions } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Ic, Input, P, T, V } from '../../ui/kit';
import { Cta, ErrorNote, Screen, useToast } from '../../ui/chrome';
import { useApp } from '../../state/store';
import { useL, useLang } from '../../i18n';
import { del, get, patch, post } from '../../api/client';
import { pickStudyDocuments, pickStudyPhotos } from '../../lib/studyFiles';
import { shareStudyPdf } from '../../lib/studyPdf';
import { explain, interrupt, isTalking, pausedNow, reply, stopTalking } from '../../lib/talk';
import { AssistantMessage, Thinking, UserMessage, solutionParts } from './messages';
import { CallBar, useCall } from './call';

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const FILE_ICON = { image: 'image', pdf: 'picture_as_pdf', docx: 'description', text: 'description' };
const when = (t, L) => {
  const d = new Date(t);
  return new Date().toDateString() === d.toDateString() ? d.toTimeString().slice(0, 5) : d.toLocaleDateString(L('en-GB', 'fr-FR'), { day: 'numeric', month: 'short' });
};

// What was being explained when the person cut in, for the AI's answer.
const contextOf = (m, part) => {
  if (!m) return undefined;
  if (m.kind !== 'solution') return String(m.body?.text || m.body?.title || '').slice(0, 2000);
  const sol = m.body;
  const k = part - 1 - (sol.concepts || []).length;
  const st = k >= 0 ? sol.steps[k] : null;
  return `Question: ${sol.question}\n${st ? `Step ${k + 1} on the board: ${st.board}${st.why ? `\nReason given: ${st.why}` : ''}` : 'The beginning of the solution (what the question asks and the ideas behind it).'}`;
};

export default function StudyChat({ navigation, route }) {
  const { user } = useApp();
  const L = useL();
  const lang = useLang();
  const insets = useSafeAreaInsets();
  const { width } = useWindowDimensions();
  const tab = route.name === 'Study'; // the Study / Assistant tab itself
  const teacher = user?.role === 'teacher';
  const parent = user?.role === 'parent';
  const [chat, setChat] = useState(null); // { id, title }
  const [messages, setMessages] = useState([]);
  const [attached, setAttached] = useState([]); // uploaded, sent with the next message
  const [text, setText] = useState('');
  const [working, setWorking] = useState(null); // status lines while the AI works
  const [running, setRunning] = useState(false); // solving a paper, question after question
  const [error, setError] = useState(null);
  const [sheet, setSheet] = useState(null); // 'attach' | 'more' | 'rename' | 'pdf' | 'give' | 'history'
  const [title, setTitle] = useState('');
  const [chats, setChats] = useState(null);
  const [give, setGive] = useState(null);
  const [toast, showToast] = useToast();
  const scroll = useRef(null);
  const input = useRef(null);
  const stopAll = useRef(false);
  const previews = useRef({}); // file id -> photo shown in the person's message
  const listY = useRef(0);
  const cardY = useRef({});
  // the call: answers waiting to be spoken, solutions written as they are said
  const [liveIds, setLiveIds] = useState(() => new Set());
  const queue = useRef([]);
  const solving = useRef(false);
  const chatRef = useRef(null);
  const messagesRef = useRef([]);
  useEffect(() => {
    chatRef.current = chat;
  }, [chat]);
  useEffect(() => {
    messagesRef.current = messages;
  }, [messages]);

  const toEnd = () => setTimeout(() => scroll.current?.scrollToEnd({ animated: true }), 80);
  const follow = (id, y) => scroll.current?.scrollTo({ y: Math.max(0, listY.current + (cardY.current[id] || 0) + y - 110), animated: true });

  // ---------- which chat ----------
  const open = useCallback(async (id) => {
    endCallRef.current?.();
    stopTalking();
    stopAll.current = true;
    setError(null);
    setAttached([]);
    setSheet(null);
    if (!id) {
      setChat(null);
      setMessages([]);
      return;
    }
    try {
      const r = await get(`/v1/study/chats/${id}`);
      setChat(r.chat);
      setMessages(r.messages);
      toEnd();
    } catch (e) {
      setError(e);
    }
  }, []);

  // Opened on a given chat, or with something to start (from Home).
  useEffect(() => {
    const p = route.params || {};
    if (p.chatId) open(p.chatId);
    else if (p.intent) {
      open(null);
      const draft = {
        lesson_notes: L('Write lesson notes on ', 'Rédigez des notes de cours sur '),
        lesson_plan: L('Write a 40 minute lesson plan on ', 'Rédigez une fiche de préparation de 40 minutes sur '),
      }[p.intent];
      if (draft) setText(draft);
      if (['solve', 'notes', 'quiz'].includes(p.intent)) setTimeout(() => setSheet('attach'), 350);
      else setTimeout(() => input.current?.focus(), 400);
    }
    if (p.chatId || p.intent) navigation.setParams({ chatId: undefined, intent: undefined });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [route.params?.chatId, route.params?.intent]);
  // Leaving the chat stops the voice and the call.
  useEffect(() => () => (endCallRef.current?.(), stopTalking()), []);

  const ensureChat = async () => {
    if (chatRef.current?.id) return chatRef.current.id;
    const r = await post('/v1/study/chats', {});
    chatRef.current = r.chat;
    setChat(r.chat);
    return r.chat.id;
  };

  // ---------- talking to the AI ----------
  // One request, with its status line, and one quiet retry when every AI key
  // is briefly busy. local: the person's message, shown at once.
  const run = async (steps, body, local, { quiet = false } = {}) => {
    setError(null);
    setWorking(steps);
    if (local) setMessages((m) => [...m, { id: `local-${Date.now()}`, role: 'user', kind: 'text', body: local }]);
    toEnd();
    try {
      const id = await ensureChat();
      let r;
      try {
        r = await post(`/v1/study/chats/${id}/ask`, body, { timeout: 175000 });
      } catch (e) {
        if (e.code !== 'ai_busy') throw e;
        setWorking([L('Many people are studying right now. Trying again...', 'Beaucoup de monde étudie en ce moment. Nouvel essai...')]);
        await sleep(8000);
        r = await post(`/v1/study/chats/${id}/ask`, body, { timeout: 175000 });
      }
      const fresh = r.messages.filter((x) => x.role === 'assistant');
      const onCall = callRef.current?.active() && !quiet;
      // on a call, solutions start empty and are written as they are explained
      if (onCall && fresh.some((x) => x.kind === 'solution')) setLiveIds((s) => new Set([...s, ...fresh.filter((x) => x.kind === 'solution').map((x) => x.id)]));
      setMessages((m) => [...m.filter((x) => !String(x.id).startsWith('local-')), ...r.messages]);
      toEnd();
      if (onCall) {
        // a paper's questions: they are solved next, so it does not listen yet
        if (fresh.some((x) => x.kind === 'questions')) solving.current = true;
        queue.current.push(...fresh);
        playNext();
      }
      return r.messages;
    } catch (e) {
      setMessages((m) => m.filter((x) => !String(x.id).startsWith('local-')));
      setError(e);
      return null;
    } finally {
      setWorking(null);
    }
  };

  const S = {
    files: [L('Reading your files...', 'Lecture de vos fichiers...'), L('Studying the questions...', 'Étude des questions...'), L('Working on it...', 'Je m’en occupe...'), L('Almost there...', 'Presque fini...')],
    text: [L('Thinking...', 'Réflexion...'), L('Working it out step by step...', 'Résolution étape par étape...'), L('Checking the working...', 'Vérification...'), L('Almost there...', 'Presque fini...')],
    solve: (n, of) => [
      `${L('Question', 'Question')} ${n} ${L('of', 'sur')} ${of}: ${L('reading it...', 'lecture...')}`,
      L('Working it out step by step...', 'Résolution étape par étape...'),
      L('Checking the working...', 'Vérification...'),
    ],
    upload: [L('Adding your file...', 'Ajout du fichier...'), L('Reading it...', 'Lecture...')],
  };

  // A paper's questions, solved and explained one after another at once.
  const solveSet = async (set, done = new Set()) => {
    stopAll.current = false;
    solving.current = true;
    setRunning(true);
    const list = set.questions.filter((q) => !done.has(q.n));
    for (let i = 0; i < list.length; i += 1) {
      if (stopAll.current) break;
      const q = list[i];
      const k = set.questions.indexOf(q);
      const r = await run(S.solve(k + 1, set.questions.length), { action: 'solve', setId: set.setId, n: q.n });
      if (!r) break;
    }
    solving.current = false;
    setRunning(false);
    playNext(); // on a call: when all is said, it listens again
  };
  const solvedOf = (setId) => new Set(messages.filter((m) => m.kind === 'solution' && m.body.setId === setId).map((m) => m.body.n));

  const send = async () => {
    const t = text.trim();
    if ((!t && !attached.length) || working || running) return;
    const files = attached;
    setAttached([]);
    setText('');
    const local = { text: t, files: files.map((f) => ({ id: f.id, name: f.name, kind: f.kind, preview: previews.current[f.id] })) };
    const r = await run(files.length ? S.files : S.text, { action: 'auto', text: t || undefined, fileIds: files.map((f) => f.id) }, local);
    const set = r?.find((m) => m.kind === 'questions');
    if (set) await solveSet(set.body);
  };

  // ---------- the call ----------
  // What is said aloud for each answer.
  const speechOf = (m) => {
    const b = m.body || {};
    switch (m.kind) {
      case 'solution':
        return solutionParts(b, lang);
      case 'text':
        return String(b.text || '').split(/\n{2,}/);
      case 'questions':
        return [L(`I found ${b.questions.length} questions. I will solve and explain them one by one.`, `J’ai trouvé ${b.questions.length} questions. Je vais les résoudre et les expliquer une par une.`)];
      case 'quiz':
        return teacher
          ? [L(`Here is the test: ${b.questions.length} questions with the marking scheme, on your screen.`, `Voici le devoir : ${b.questions.length} questions avec le barème, à l’écran.`)]
          : [b.title, ...b.questions.map((q) => (q.type === 'mcq' ? `${q.n}. ${q.text} ${q.options.join('. ')}` : `${q.n}. ${q.text}`)), L('Answer when you are ready, and I will mark your answers.', 'Répondez quand vous êtes prêt, et je corrigerai vos réponses.')];
      case 'marked_all':
        return [
          L(`You scored ${b.got} out of ${b.total}.`, `Vous avez ${b.got} sur ${b.total}.`),
          ...b.marks.filter((x) => x.awarded < x.total).map((x) => (x.type === 'mcq' ? `${L('Question', 'Question')} ${x.n}: ${L('the answer is', 'la réponse est')} ${x.correct}. ${x.explanation || ''}` : `${L('Question', 'Question')} ${x.n}: ${x.feedback || ''}`)),
        ];
      case 'notes':
      case 'lessonNotes':
      case 'lessonPlan':
      case 'summary':
        return [`${b.title}.`, String(b.summary || b.introduction || '').slice(0, 700), L('All of it is on your screen, and you can download it as a PDF.', 'Tout est à l’écran, et vous pouvez le télécharger en PDF.')];
      default:
        return [];
    }
  };
  // The next answer is spoken; when nothing is left, it listens again.
  const playNext = () => {
    const c = callRef.current;
    if (!c?.active() || isTalking()) return;
    const m = queue.current.shift();
    if (!m) {
      if (!solving.current && !['listening', 'thinking'].includes(c.phaseNow())) c.listen();
      return;
    }
    const parts = speechOf(m).map((x) => String(x || '').trim()).filter(Boolean);
    if (!parts.length) return playNext();
    c.speaking();
    explain(m.id, parts, { lang, onEnd: playNext });
  };
  // What the person said on the call.
  const onHeard = async (said) => {
    const paused = pausedNow();
    if (paused) {
      // a question in the middle of an explanation: answered, then back to it
      const m = messagesRef.current.find((x) => x.id === paused.id);
      const r = await run(S.text, { action: 'chat', text: said, context: contextOf(m, paused.index), spoken: true }, { text: said }, { quiet: true });
      const ans = r?.filter((x) => x.role === 'assistant' && x.kind === 'text').pop();
      if (ans && callRef.current?.active()) {
        callRef.current.speaking();
        reply(ans.body.text, { lang, onEnd: playNext });
      } else playNext();
      return;
    }
    const r = await run(S.text, { action: 'auto', text: said, spoken: true }, { text: said });
    if (!r) return callRef.current?.listen();
    const set = r.find((m) => m.kind === 'questions');
    if (set) solveSet(set.body);
  };
  const call = useCall({ onHeard, onError: setError });
  const callRef = useRef(null);
  callRef.current = { ...call, phaseNow: () => call.phaseNow() };
  const endCall = () => {
    call.end();
    stopTalking();
    queue.current = [];
    setLiveIds(new Set());
  };
  const endCallRef = useRef(null);
  endCallRef.current = endCall;
  const startCall = async () => {
    stopTalking();
    setError(null);
    queue.current = [];
    await call.start();
  };
  // A tap on the call bar: cut in while the AI speaks, or send now while listening.
  const tapCall = () => {
    if (call.phase === 'speaking') {
      interrupt();
      call.listen();
    } else if (call.phase === 'listening') call.finish(true);
  };

  // ---------- adding files ----------
  const addFiles = async (how) => {
    setSheet(null);
    setError(null);
    try {
      const picked = how === 'doc' ? await pickStudyDocuments() : await pickStudyPhotos(how);
      if (!picked.length) return;
      setWorking(S.upload);
      const id = await ensureChat();
      for (const f of picked) {
        const r = await post(`/v1/study/chats/${id}/files`, { name: f.name, mime: f.mime, base64: f.base64 }, { timeout: 120000 });
        if (f.uri && r.file.kind === 'image') previews.current[r.file.id] = f.uri;
        setAttached((a) => [...a, r.file]);
        if (r.file.scanned) showToast(L('This PDF is a scan: if it cannot be read, send photos of the pages instead.', 'Ce PDF est une image : s’il ne peut pas être lu, envoyez plutôt des photos des pages.'), 'info');
      }
      setTimeout(() => input.current?.focus(), 200);
    } catch (e) {
      setError(e);
    } finally {
      setWorking(null);
    }
  };

  // ---------- the chat's own actions ----------
  const pdfOf = async (list, name, variant = 'full') => {
    setSheet(null);
    try {
      await shareStudyPdf({ title: name || chat?.title || L('Study', 'Étude'), messages: list, who: user?.name, lang, variant });
    } catch (e) {
      setError(e);
    }
  };
  const pdfOne = (m) => pdfOf([m], m.kind === 'solution' ? `${chat?.title || L('Question', 'Question')}${m.body.label ? ` ${m.body.label}` : ''}` : m.body.title || chat?.title);
  const rename = async () => {
    try {
      const r = await patch(`/v1/study/chats/${chat.id}`, { title });
      setChat((c) => ({ ...c, title: r.chat.title }));
      setSheet(null);
    } catch (e) {
      setError(e);
    }
  };
  const remove = async () => {
    try {
      if (chat?.id) await del(`/v1/study/chats/${chat.id}`);
      setSheet(null);
      open(null);
    } catch (e) {
      setError(e);
    }
  };
  const showHistory = async () => {
    setSheet('history');
    try {
      setChats((await get('/v1/study/chats')).chats);
    } catch (e) {
      setChats([]);
      setError(e);
    }
  };

  // giving a test to a class (teachers)
  const openGive = async (quiz) => {
    setGive({ quiz, classes: null, classId: null, days: 7, sending: false });
    setSheet('give');
    try {
      const r = await get('/v1/classes');
      setGive((g) => g && { ...g, classes: r.items, classId: r.items[0]?.id || null });
    } catch (e) {
      setSheet(null);
      setError(e);
    }
  };
  const sendTest = async () => {
    const cls = give.classes.find((c) => c.id === give.classId);
    setGive((g) => ({ ...g, sending: true }));
    try {
      const r = await post(`/v1/classes/${give.classId}/tests`, { chatId: chat.id, quizId: give.quiz.quizId, dueInDays: give.days });
      setSheet(null);
      setGive(null);
      showToast(L(`Sent to ${cls.name}: ${r.students} ${r.students === 1 ? 'student' : 'students'}`, `Envoyé à ${cls.name} : ${r.students} élève${r.students === 1 ? '' : 's'}`));
    } catch (e) {
      setGive((g) => ({ ...g, sending: false }));
      showToast(e.message, 'error');
    }
  };

  const hasWork = messages.some((m) => ['solution', 'notes', 'quiz', 'lessonNotes', 'lessonPlan', 'summary'].includes(m.kind));
  const hasQuestions = messages.some((m) => ['solution', 'quiz'].includes(m.kind));
  const markedQuiz = (quizId) => messages.some((m) => m.kind === 'marked_all' && m.body.quizId === quizId);
  const busy = !!working || running;

  // ---------- the screen ----------
  const header = (
    <V style={{ paddingTop: insets.top, backgroundColor: '#ffffff', borderBottomWidth: StyleSheet.hairlineWidth, borderBottomColor: '#e3e8f0' }}>
      <V c="h-14 px-1 flex-row items-center">
        <P c="w-11 h-11 items-center justify-center rounded-xl" onPress={tab ? showHistory : () => navigation.goBack()} accessibilityLabel={tab ? L('Your chats', 'Vos discussions') : L('Back', 'Retour')}>
          <Ic n={tab ? 'menu' : 'arrow_back'} s={24} c="on-surface" />
        </P>
        <V c="flex-1 px-1">
          <T c="font-label-lg text-label-lg text-on-surface" style={{ fontWeight: '700' }} numberOfLines={1}>
            {chat?.title && chat.title !== 'New chat' ? chat.title : teacher || parent ? L('Assistant', 'Assistant') : L('Study', 'Étude')}
          </T>
        </V>
        {!tab && (
          <P c="w-11 h-11 items-center justify-center rounded-xl" onPress={showHistory} accessibilityLabel={L('Your chats', 'Vos discussions')}>
            <Ic n="history" s={23} c="on-surface" />
          </P>
        )}
        <P c="w-11 h-11 items-center justify-center rounded-xl" onPress={() => open(null)} accessibilityLabel={L('New chat', 'Nouvelle discussion')}>
          <Ic n="edit_square" s={22} c="on-surface" />
        </P>
        {!!chat?.id && (
          <P c="w-11 h-11 items-center justify-center rounded-xl" onPress={() => setSheet('more')} accessibilityLabel={L('More', 'Plus')}>
            <Ic n="more_vert" s={23} c="on-surface" />
          </P>
        )}
      </V>
    </V>
  );

  const composer = (
    <V c="px-space-sm pt-1.5" style={{ paddingBottom: 8, backgroundColor: '#ffffff' }}>
      <V c="rounded-3xl border border-surface-container bg-surface-container-lowest px-1.5 py-1.5 gap-1.5" style={{ shadowColor: '#0f172a', shadowOpacity: 0.06, shadowRadius: 10, shadowOffset: { width: 0, height: 2 }, elevation: 2 }}>
        {!!attached.length && (
          <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ gap: 8, paddingHorizontal: 4, paddingTop: 2 }}>
            {attached.map((f) => (
              <V key={f.id}>
                {previews.current[f.id] ? (
                  <Image source={{ uri: previews.current[f.id] }} style={{ width: 60, height: 60, borderRadius: 12 }} />
                ) : (
                  <V c="h-[60px] flex-row items-center gap-1.5 px-2.5 rounded-xl bg-surface-container-low" style={{ maxWidth: 200 }}>
                    <Ic n={FILE_ICON[f.kind] || 'description'} s={20} c="primary-container" />
                    <T c="font-label-md text-label-md text-on-surface" numberOfLines={2} style={{ flexShrink: 1 }}>
                      {f.name}
                    </T>
                  </V>
                )}
                <P c="w-6 h-6 rounded-full items-center justify-center" style={{ position: 'absolute', top: -4, right: -4, backgroundColor: '#1f2a37' }} onPress={() => setAttached((a) => a.filter((x) => x.id !== f.id))} accessibilityLabel={L('Remove', 'Retirer')} hitSlop={6}>
                  <Ic n="close" s={14} c="on-primary" />
                </P>
              </V>
            ))}
          </ScrollView>
        )}
        <V c="flex-row items-end gap-1">
          <P c="w-10 h-10 rounded-full items-center justify-center" onPress={() => setSheet('attach')} disabled={busy} accessibilityRole="button" accessibilityLabel={L('Add a photo or a document', 'Ajouter une photo ou un document')}>
            <Ic n="add" s={26} c="on-surface" />
          </P>
          <Input
            ref={input}
            c="flex-1 py-2.5 text-body-md font-body-md text-on-surface"
            placeholder={attached.length ? L('Say what to do with it, or just send', 'Dites quoi en faire, ou envoyez') : L('Ask anything', 'Demandez ce que vous voulez')}
            value={text}
            onChangeText={setText}
            multiline
            maxLength={8000}
            style={{ maxHeight: 140, minHeight: 40 }}
          />
          {text.trim() || attached.length ? (
            <P c={`w-10 h-10 rounded-full items-center justify-center ${busy ? 'bg-surface-container' : 'bg-primary-container'}`} onPress={send} disabled={busy} accessibilityRole="button" accessibilityLabel={L('Send', 'Envoyer')}>
              <Ic n="arrow_upward" s={22} c={busy ? 'outline' : 'on-primary'} />
            </P>
          ) : (
            // nothing typed: a voice call with the AI
            <P c={`w-10 h-10 rounded-full items-center justify-center ${busy ? 'bg-surface-container' : 'bg-primary-container'}`} onPress={startCall} disabled={busy} accessibilityRole="button" accessibilityLabel={L('Talk with the AI by voice', 'Parler avec l’IA')}>
              <Ic n="graphic_eq" s={22} c={busy ? 'outline' : 'on-primary'} />
            </P>
          )}
        </V>
      </V>
    </V>
  );

  return (
    <V c="flex-1" style={{ backgroundColor: '#ffffff' }}>
      <Screen keyboard scrollRef={scroll} header={header} footer={call.phase === 'off' ? composer : <CallBar phase={call.phase} level={call.level} onTap={tapCall} onEnd={endCall} L={L} />}>
        <V c="gap-space-lg pt-space-md pb-space-lg" onLayout={(e) => (listY.current = e.nativeEvent.layout.y)}>
          {!messages.length && !working && (
            <V c="pt-space-xl gap-space-sm items-center">
              <T c="font-headline-md text-headline-md text-on-surface text-center" style={{ fontWeight: '700' }}>
                {teacher ? L('What are we preparing today?', 'Que préparons-nous aujourd’hui ?') : parent ? L('How can I help with homework?', 'Comment puis-je aider pour les devoirs ?') : L('What are we studying today?', 'Qu’étudions-nous aujourd’hui ?')}
              </T>
              <T c="font-body-md text-body-md text-on-surface-variant text-center" style={{ lineHeight: 22, maxWidth: 420 }}>
                {teacher
                  ? L('Ask anything, or add a past paper or your notes with +. I solve and explain questions with a marking guide, explain and summarise notes, and write tests, lesson notes and lesson plans.', 'Demandez ce que vous voulez, ou ajoutez une épreuve ou vos notes avec +. Je résous et explique les questions avec un guide de correction, j’explique et je résume des notes, et je rédige devoirs, notes de cours et fiches de préparation.')
                  : L('Ask anything, or add a photo or a document with +. I solve and explain questions step by step, explain your notes, and make revision questions and mark them.', 'Demandez ce que vous voulez, ou ajoutez une photo ou un document avec +. Je résous et explique les questions étape par étape, j’explique vos notes, et je fais des questions de révision que je corrige.')}
              </T>
            </V>
          )}

          {messages.map((m) => {
            if (m.body?.stepOf) return null; // asked about a step (older chats)
            if (m.role === 'user') return <UserMessage key={m.id} body={{ ...m.body, files: (m.body.files || []).map((f) => ({ ...f, preview: f.preview || previews.current[f.id] })) }} L={L} />;
            return (
              <V key={m.id} onLayout={(e) => (cardY.current[m.id] = e.nativeEvent.layout.y)}>
                <AssistantMessage
                  m={m}
                  L={L}
                  lang={lang}
                  teacher={teacher}
                  live={liveIds.has(m.id)}
                  solved={m.kind === 'questions' ? solvedOf(m.body.setId) : null}
                  running={busy}
                  onContinue={m.kind === 'questions' ? () => solveSet(m.body, solvedOf(m.body.setId)) : undefined}
                  quizMarked={m.kind === 'quiz' ? markedQuiz(m.body.quizId) : false}
                  onPdf={pdfOne}
                  onGive={teacher && m.kind === 'quiz' ? () => openGive(m.body) : undefined}
                  onCopied={() => showToast(L('Copied', 'Copié'))}
                  onFollow={(y) => follow(m.id, y)}
                />
              </V>
            );
          })}

          {!!working && <Thinking steps={working} />}
          {running && (
            <P c="self-start py-1" onPress={() => (stopAll.current = true)} hitSlop={8}>
              <T c="font-label-md text-label-md text-error" style={{ fontWeight: '700' }}>
                {L('Stop after this question', 'Arrêter après cette question')}
              </T>
            </P>
          )}
          <ErrorNote error={error} />
        </V>
      </Screen>

      <Sheet visible={sheet === 'attach'} onClose={() => setSheet(null)} insets={insets}>
        <SheetRow icon="photo_camera" title={L('Take a photo', 'Prendre une photo')} sub={L('Of a page, a question or your notes', 'D’une page, d’une question ou de vos notes')} onPress={() => addFiles('camera')} />
        <SheetRow icon="photo_library" title={L('Choose photos', 'Choisir des photos')} sub={L('Up to 10 pages at once', 'Jusqu’à 10 pages à la fois')} onPress={() => addFiles('library')} />
        <SheetRow icon="upload_file" title={L('Upload a document', 'Envoyer un document')} sub={L('PDF, Word (.docx) or text, up to 5 MB', 'PDF, Word (.docx) ou texte, jusqu’à 5 Mo')} onPress={() => addFiles('doc')} />
      </Sheet>

      <Sheet visible={sheet === 'more'} onClose={() => setSheet(null)} insets={insets}>
        {hasWork && <SheetRow icon="download" title={L('Download the whole chat as PDF', 'Télécharger toute la discussion en PDF')} sub={L('Every question with its solution, notes and tests', 'Chaque question avec sa solution, notes et devoirs')} onPress={() => (teacher && hasQuestions ? setSheet('pdf') : pdfOf(messages))} />}
        <SheetRow icon="edit" title={L('Rename', 'Renommer')} onPress={() => (setTitle(chat?.title || ''), setSheet('rename'))} />
        <SheetRow icon="delete" title={L('Delete this chat', 'Supprimer cette discussion')} danger onPress={remove} />
      </Sheet>

      <Sheet visible={sheet === 'pdf'} onClose={() => setSheet(null)} insets={insets}>
        <T c="font-headline-sm text-headline-sm text-on-surface" style={{ fontWeight: '700' }}>{L('Download as PDF', 'Télécharger en PDF')}</T>
        <SheetRow icon="article" title={L('Everything', 'Tout')} sub={L('The questions with the full solving and explanations', 'Les questions avec toute la résolution et les explications')} onPress={() => pdfOf(messages, null, 'full')} />
        <SheetRow icon="fact_check" title={L('The marking guide only', 'Le guide de correction seul')} sub={L('Each question with its answer and marks', 'Chaque question avec sa réponse et ses points')} onPress={() => pdfOf(messages, null, 'guide')} />
        <SheetRow icon="assignment" title={L('The questions for students', 'Les questions pour les élèves')} sub={L('No answers: to print or share with the class', 'Sans réponses : à imprimer ou partager')} onPress={() => pdfOf(messages, null, 'test')} />
      </Sheet>

      <Sheet visible={sheet === 'rename'} onClose={() => setSheet(null)} insets={insets}>
        <T c="font-headline-sm text-headline-sm text-on-surface" style={{ fontWeight: '700' }}>{L('Rename this chat', 'Renommer la discussion')}</T>
        <Input c="h-12 px-3 rounded-xl bg-surface-container-low text-body-md" value={title} onChangeText={setTitle} maxLength={60} autoFocus />
        <Cta variant="dark" icon={null} label={L('Save', 'Enregistrer')} onPress={rename} />
      </Sheet>

      <Sheet visible={sheet === 'give'} onClose={() => (setSheet(null), setGive(null))} insets={insets}>
        <T c="font-headline-sm text-headline-sm text-on-surface" style={{ fontWeight: '700' }}>{L('Give this test to a class', 'Donner ce devoir à une classe')}</T>
        {!give?.classes ? (
          <ActivityIndicator style={{ marginVertical: 16 }} />
        ) : !give.classes.length ? (
          <>
            <T c="font-body-md text-body-md text-on-surface-variant" style={{ lineHeight: 22 }}>{L('You have no class yet. Create one, share its code with your students, then give them the test.', 'Vous n’avez pas encore de classe. Créez-en une, partagez son code, puis donnez-leur le devoir.')}</T>
            <Cta variant="dark" icon={null} label={L('Create a class', 'Créer une classe')} onPress={() => (setSheet(null), setGive(null), navigation.navigate('CreateClass', { fromPortal: true }))} />
          </>
        ) : (
          <>
            {give.classes.map((c) => (
              <P key={c.id} c={`flex-row items-center gap-space-sm px-space-sm py-2.5 rounded-xl border ${give.classId === c.id ? 'border-primary-container bg-surface-container-low' : 'border-surface-container'}`} onPress={() => setGive((g) => ({ ...g, classId: c.id }))} accessibilityRole="radio" accessibilityState={{ selected: give.classId === c.id }}>
                <Ic n={give.classId === c.id ? 'radio_button_checked' : 'radio_button_unchecked'} s={20} c={give.classId === c.id ? 'primary-container' : 'outline'} />
                <V c="flex-1">
                  <T c="font-label-lg text-label-lg text-on-surface" style={{ fontWeight: '700' }}>{c.name}</T>
                  <T c="font-body-sm text-body-sm text-on-surface-variant">{c.students} {c.students === 1 ? L('student', 'élève') : L('students', 'élèves')}</T>
                </V>
              </P>
            ))}
            <V c="flex-row items-center gap-1.5 pt-space-xs">
              <T c="font-label-md text-label-md text-on-surface-variant">{L('Hand in within', 'À rendre sous')}</T>
              {[3, 7, 14].map((n) => (
                <P key={n} c={`h-9 px-3 rounded-full border items-center justify-center ${give.days === n ? 'bg-primary-container border-primary-container' : 'border-surface-container'}`} onPress={() => setGive((g) => ({ ...g, days: n }))} accessibilityRole="radio" accessibilityState={{ selected: give.days === n }}>
                  <T c={`font-label-md text-label-md ${give.days === n ? 'text-on-primary' : 'text-on-surface'}`} style={{ fontWeight: '700' }}>
                    {n} {L('days', 'jours')}
                  </T>
                </P>
              ))}
            </V>
            <Cta variant="dark" icon={null} label={give.sending ? L('Sending...', 'Envoi...') : L('Send to the class', 'Envoyer à la classe')} disabled={give.sending || !give.classId} onPress={sendTest} />
          </>
        )}
      </Sheet>

      {/* the chats, in a panel from the left, like ChatGPT */}
      <Modal visible={sheet === 'history'} transparent animationType="fade" onRequestClose={() => setSheet(null)}>
        <V c="flex-1 flex-row">
          <V c="bg-surface-container-lowest" style={{ width: Math.min(360, width * 0.84), paddingTop: insets.top + 8, paddingBottom: insets.bottom + 8 }}>
            <V c="px-space-md pb-space-sm gap-space-sm">
              <T c="font-headline-sm text-headline-sm text-on-surface" style={{ fontWeight: '700' }}>
                {L('Your chats', 'Vos discussions')}
              </T>
              <P c="h-11 rounded-xl bg-surface-container-low flex-row items-center gap-2 px-space-sm" onPress={() => open(null)}>
                <Ic n="edit_square" s={20} c="primary-container" />
                <T c="font-label-lg text-label-lg text-on-surface" style={{ fontWeight: '700' }}>
                  {L('New chat', 'Nouvelle discussion')}
                </T>
              </P>
            </V>
            <ScrollView contentContainerStyle={{ paddingHorizontal: 8, paddingBottom: 16 }}>
              {chats === null && <ActivityIndicator style={{ marginTop: 16 }} />}
              {chats?.length === 0 && (
                <T c="font-body-md text-body-md text-on-surface-variant px-space-sm pt-space-sm">{L('Your chats will be kept here.', 'Vos discussions seront gardées ici.')}</T>
              )}
              {(chats || []).map((c) => (
                <P key={c.id} c={`px-space-sm py-2.5 rounded-xl flex-row items-center gap-2 ${chat?.id === c.id ? 'bg-surface-container-low' : ''}`} onPress={() => open(c.id)}>
                  <T c="font-body-md text-body-md text-on-surface flex-1" numberOfLines={1}>
                    {c.title}
                  </T>
                  <T c="font-label-sm text-label-sm text-on-surface-variant">{when(c.updatedAt, L)}</T>
                </P>
              ))}
            </ScrollView>
          </V>
          <Pressable style={{ flex: 1, backgroundColor: 'rgba(15,23,42,0.4)' }} onPress={() => setSheet(null)} accessibilityLabel={L('Close', 'Fermer')} />
        </V>
      </Modal>
      {toast}
    </V>
  );
}

function SheetRow({ icon, title, sub, onPress, danger }) {
  return (
    <P c="flex-row items-center gap-space-sm py-space-sm" onPress={onPress} accessibilityRole="button">
      <V c={`w-10 h-10 rounded-xl items-center justify-center ${danger ? 'bg-error-container' : 'bg-surface-container-low'}`}>
        <Ic n={icon} s={22} c={danger ? 'error' : 'primary-container'} />
      </V>
      <V c="flex-1">
        <T c={`font-label-lg text-label-lg ${danger ? 'text-error' : 'text-on-surface'}`} style={{ fontWeight: '700' }}>{title}</T>
        {!!sub && <T c="font-body-sm text-body-sm text-on-surface-variant">{sub}</T>}
      </V>
    </P>
  );
}

function Sheet({ visible, onClose, children, insets }) {
  return (
    <Modal visible={visible} transparent animationType="slide" onRequestClose={onClose}>
      <V c="flex-1 justify-end" style={{ backgroundColor: 'rgba(15,23,42,0.45)' }}>
        {/* tapping outside the sheet closes it */}
        <Pressable style={StyleSheet.absoluteFill} onPress={onClose} accessibilityLabel="Close" />
        <V c="bg-surface-container-lowest rounded-t-3xl p-space-lg gap-space-xs" style={{ paddingBottom: 20 + insets.bottom }}>
          {children}
        </V>
      </V>
    </Modal>
  );
}
