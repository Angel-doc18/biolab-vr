// One study chat, like ChatGPT or Claude: photos and documents in, then the AI
// finds the questions and solves them one by one (or all), explains notes,
// writes revision questions and marks answers, or simply talks it through.
// Everything is kept, so the student (or teacher) can come back and go on, and
// download it all as a clean PDF.
import { useCallback, useEffect, useRef, useState } from 'react';
import { Modal, Pressable, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Ic, Input, P, T, V } from '../../ui/kit';
import { Cta, ErrorNote, Screen, StackHeader, useToast } from '../../ui/chrome';
import { useApp } from '../../state/store';
import { useL, useLang } from '../../i18n';
import { del, get, patch, post } from '../../api/client';
import { pickStudyDocuments, pickStudyPhotos } from '../../lib/studyFiles';
import { shareStudyPdf } from '../../lib/studyPdf';
import { AiText, FileChips, NotesCard, Quiz, QuestionSet, Solution, UserBubble, Working } from './cards';

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

export default function StudyChat({ navigation, route }) {
  const { user } = useApp();
  const L = useL();
  const lang = useLang();
  const insets = useSafeAreaInsets();
  const teacher = user?.role === 'teacher';
  const [chat, setChat] = useState(route.params?.chatId ? { id: route.params.chatId, title: '' } : null);
  const [messages, setMessages] = useState([]);
  const [attached, setAttached] = useState([]); // files uploaded, not yet used in a message
  const [text, setText] = useState('');
  const [working, setWorking] = useState(null); // status lines while the AI works
  const [busyN, setBusyN] = useState(null);
  const [running, setRunning] = useState(false); // "Solve all" in progress
  const [error, setError] = useState(null);
  const [sheet, setSheet] = useState(null); // 'attach' | 'rename' | 'more'
  const [title, setTitle] = useState('');
  const [toast, showToast] = useToast();
  const scroll = useRef(null);
  const input = useRef(null);
  const stopAll = useRef(false);
  const intent = route.params?.intent;

  const toEnd = () => setTimeout(() => scroll.current?.scrollToEnd({ animated: true }), 80);

  useEffect(() => {
    if (!route.params?.chatId) return;
    get(`/v1/study/chats/${route.params.chatId}`)
      .then((r) => {
        setChat(r.chat);
        setMessages(r.messages);
        toEnd();
      })
      .catch(setError);
  }, [route.params?.chatId]);

  // A new chat opened from a starter: straight to adding the material.
  useEffect(() => {
    if (route.params?.chatId) return;
    if (intent === 'ask') setTimeout(() => input.current?.focus(), 400);
    else if (intent) setSheet('attach');
  }, [intent, route.params?.chatId]);

  const ensureChat = async () => {
    if (chat?.id) return chat.id;
    const r = await post('/v1/study/chats', {});
    setChat(r.chat);
    return r.chat.id;
  };

  // One request to the AI, with the status lines, and one quiet retry when
  // every AI key is briefly busy.
  // local: { text, files } shown at once as the person's message, until the
  // server's saved copy replaces it.
  const run = useCallback(
    async (steps, body, local) => {
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
        setMessages((m) => [...m.filter((x) => !String(x.id).startsWith('local-')), ...r.messages]);
        toEnd();
        return r.messages;
      } catch (e) {
        setMessages((m) => m.filter((x) => !String(x.id).startsWith('local-')));
        setError(e);
        return null;
      } finally {
        setWorking(null);
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [chat?.id]
  );

  const S = {
    read: [L('Reading the document...', 'Lecture du document...'), L('Finding the questions...', 'Recherche des questions...'), L('Putting them in order...', 'Mise en ordre...')],
    solve: (n, of) => [
      of ? `${L('Question', 'Question')} ${n} ${L('of', 'sur')} ${of}: ${L('reading it...', 'lecture...')}` : L('Reading the question...', 'Lecture de la question...'),
      L('Working it out step by step...', 'Résolution étape par étape...'),
      L('Checking the working...', 'Vérification de la résolution...'),
      L('Almost done...', 'Presque terminé...'),
    ],
    notes: [L('Reading your notes...', 'Lecture de vos notes...'), L('Explaining each part...', 'Explication de chaque partie...'), L('Adding examples and exam tips...', 'Ajout d’exemples et de conseils...')],
    quiz: [L('Reading the material...', 'Lecture du contenu...'), L('Writing the questions...', 'Rédaction des questions...'), L('Preparing the marking scheme...', 'Préparation du barème...')],
    mark: [L('Reading your answer...', 'Lecture de votre réponse...'), L('Marking it against the scheme...', 'Correction avec le barème...')],
    chat: [L('Thinking...', 'Réflexion...'), L('Writing the answer...', 'Rédaction de la réponse...')],
    upload: [L('Uploading...', 'Envoi...'), L('Reading the document...', 'Lecture du document...')],
  };

  // ---------- adding material ----------
  const addFiles = async (how) => {
    setSheet(null);
    setError(null);
    try {
      const picked = how === 'doc' ? await pickStudyDocuments() : await pickStudyPhotos(how);
      if (!picked.length) return;
      setWorking(S.upload);
      const id = await ensureChat();
      const added = [];
      for (const f of picked) {
        const r = await post(`/v1/study/chats/${id}/files`, { name: f.name, mime: f.mime, base64: f.base64 }, { timeout: 120000 });
        added.push(r.file);
        if (r.file.scanned) showToast(L('This PDF is a scan: if the AI cannot read it, send photos of the pages instead.', 'Ce PDF est une image : si l’IA ne peut pas le lire, envoyez plutôt des photos des pages.'), 'info');
      }
      setAttached((a) => [...a, ...added]);
      toEnd();
    } catch (e) {
      setError(e);
    } finally {
      setWorking(null);
    }
  };

  // The files just added are used by the next request, then cleared.
  const take = () => {
    const files = attached;
    setAttached([]);
    return { ids: files.map((f) => f.id), files };
  };

  const find = async () => {
    const { ids, files } = take();
    const note = L('Find the questions and solve them with me.', 'Trouvez les questions et résolvons-les ensemble.');
    await run(S.read, { action: 'find', fileIds: ids, note }, { text: note, files });
  };
  const explain = async () => {
    const { ids, files } = take();
    const note = L('Explain these notes to me.', 'Expliquez-moi ces notes.');
    const extra = text.trim();
    setText('');
    await run(S.notes, { action: 'notes', fileIds: ids, note, text: extra || undefined }, { text: note, files });
  };
  const quiz = async () => {
    const { ids, files } = take();
    const note = L('Make revision questions from this.', 'Faites des questions de révision à partir de ceci.');
    const extra = text.trim();
    setText('');
    await run(S.quiz, { action: 'quiz', fileIds: ids, note, text: extra || undefined, mcq: teacher ? 10 : 6, structured: teacher ? 5 : 3 }, { text: note, files });
  };
  const send = async () => {
    const t = text.trim();
    if (!t && !attached.length) return;
    // A typed question in a new "solve" chat with nothing attached: solve it.
    const solveTyped = intent === 'solve' && !attached.length && !messages.length;
    const { ids, files } = take();
    setText('');
    await run(solveTyped ? S.solve() : S.chat, solveTyped ? { action: 'solve_text', text: t } : { action: 'chat', text: t, fileIds: ids }, { text: t, files });
  };

  const solve = async (set, n) => {
    setBusyN(n);
    const k = set.questions.findIndex((q) => q.n === n);
    await run(S.solve(k + 1, set.questions.length), { action: 'solve', setId: set.setId, n });
    setBusyN(null);
  };
  const solveAll = async (set) => {
    setRunning(true);
    stopAll.current = false;
    const done = new Set(messages.filter((m) => m.kind === 'solution' && m.body.setId === set.setId).map((m) => m.body.n));
    for (const q of set.questions) {
      if (stopAll.current) break;
      if (done.has(q.n)) continue;
      setBusyN(q.n);
      const r = await run(S.solve(q.n, set.questions.length), { action: 'solve', setId: set.setId, n: q.n });
      if (!r) break;
    }
    setBusyN(null);
    setRunning(false);
  };
  const mark = async (quizId, n, answer) => {
    setBusyN(`${quizId}:${n}`);
    await run(S.mark, { action: 'mark', quizId, n, answer });
    setBusyN(null);
  };

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
      navigation.goBack();
    } catch (e) {
      setError(e);
    }
  };
  const pdf = async () => {
    setSheet(null);
    try {
      await shareStudyPdf({ title: chat?.title || L('Study notes', 'Notes d’étude'), messages, who: user?.name, lang });
    } catch (e) {
      setError(e);
    }
  };

  // what each set, quiz and solution look like now
  const solvedOf = (setId) => new Set(messages.filter((m) => m.kind === 'solution' && m.body.setId === setId).map((m) => m.body.n));
  const marksOf = (quizId) => new Map(messages.filter((m) => m.kind === 'marked' && m.body.quizId === quizId).map((m) => [m.body.n, m.body]));
  const hasWork = messages.some((m) => ['solution', 'notes', 'quiz'].includes(m.kind));

  const starters = [
    ['photo_camera', L('Solve questions', 'Résoudre des questions'), L('A paper, homework or worksheet', 'Épreuve, devoir ou exercice'), () => setSheet('attach')],
    ['description', L('Explain notes', 'Expliquer des notes'), L('Your notes, made clear', 'Vos notes, rendues claires'), () => setSheet('attach')],
    ['quiz', L('Revision questions', 'Questions de révision'), L('From your notes, marked', 'De vos notes, corrigées'), () => setSheet('attach')],
  ];

  const composer = (
    <V c="px-space-sm pt-space-xs gap-space-xs" style={{ paddingBottom: 8 }}>
      {!!attached.length && (
        <V c="gap-space-xs">
          <FileChips files={attached} L={L} />
          <V c="flex-row flex-wrap gap-1.5">
            <Chip icon="task_alt" label={L('Solve the questions', 'Résoudre les questions')} onPress={find} disabled={!!working} />
            <Chip icon="lightbulb" label={L('Explain these notes', 'Expliquer ces notes')} onPress={explain} disabled={!!working} />
            <Chip icon="quiz" label={L('Revision questions', 'Questions de révision')} onPress={quiz} disabled={!!working} />
          </V>
        </V>
      )}
      <V c="flex-row items-end gap-space-xs">
        <P c="w-11 h-11 rounded-full bg-surface-container-low items-center justify-center" onPress={() => setSheet('attach')} accessibilityRole="button" accessibilityLabel={L('Add a photo or a document', 'Ajouter une photo ou un document')}>
          <Ic n="add" s={24} c="primary-container" />
        </P>
        <V c="flex-1 min-h-[44px] rounded-3xl bg-surface-container-low px-space-md justify-center">
          <Input
            ref={input}
            c="py-2.5 text-body-md font-body-md text-on-surface"
            placeholder={attached.length ? L('Ask about it, or choose above', 'Posez une question, ou choisissez ci-dessus') : teacher ? L('Ask, or add your notes and papers', 'Demandez, ou ajoutez notes et épreuves') : L('Ask anything, or add a photo', 'Demandez, ou ajoutez une photo')}
            value={text}
            onChangeText={setText}
            multiline
            maxLength={8000}
            style={{ maxHeight: 120 }}
          />
        </V>
        <P c={`w-11 h-11 rounded-full items-center justify-center ${text.trim() || attached.length ? 'bg-primary-container' : 'bg-surface-container-high'}`} onPress={send} disabled={!!working || (!text.trim() && !attached.length)} accessibilityRole="button" accessibilityLabel={L('Send', 'Envoyer')}>
          <Ic n="arrow_upward" s={22} c="on-primary" />
        </P>
      </V>
    </V>
  );

  return (
    <V c="flex-1">
      <Screen
        keyboard
        scrollRef={scroll}
        header={
          <StackHeader
            title={chat?.title || L('New chat', 'Nouvelle discussion')}
            subtitle={teacher ? L('Teaching assistant', 'Assistant pédagogique') : L('Study with AI', 'Étudier avec l’IA')}
            avatar={false}
            right={
              <P c="w-11 h-11 items-center justify-center rounded-xl" onPress={() => setSheet('more')} accessibilityLabel={L('More', 'Plus')}>
                <Ic n="more_vert" s={24} c="on-surface" />
              </P>
            }
          />
        }
        footer={composer}
      >
        <V c="gap-space-md pt-space-md pb-space-lg">
          {!messages.length && !working && (
            <V c="gap-space-md pt-space-lg">
              <T c="font-headline-md text-headline-md text-on-surface" style={{ fontWeight: '700' }}>
                {intent === 'solve'
                  ? L('Add the questions: snap a photo or upload the paper.', 'Ajoutez les questions : une photo ou le document.')
                  : intent === 'notes'
                    ? L('Add your notes: photos, a PDF or a Word document.', 'Ajoutez vos notes : photos, PDF ou document Word.')
                    : intent === 'quiz'
                      ? L('Add the notes to make questions from.', 'Ajoutez les notes pour en faire des questions.')
                      : L('What shall we work on?', 'Sur quoi travaillons-nous ?')}
              </T>
              <T c="font-body-md text-body-md text-on-surface-variant" style={{ lineHeight: 22 }}>
                {L('You can add many pages at once, even a whole year of papers. Then I read them, find every question and work through them with you, step by step.', 'Vous pouvez ajouter beaucoup de pages, même une année d’épreuves. Je les lis, trouve chaque question et les résous avec vous, étape par étape.')}
              </T>
              {!intent &&
                starters.map(([icon, t1, t2, go]) => (
                  <P key={t1} c="flex-row items-center gap-space-sm p-space-md rounded-2xl border border-surface-container" onPress={go}>
                    <Ic n={icon} s={22} c="primary-container" />
                    <V c="flex-1">
                      <T c="font-label-lg text-label-lg text-on-surface" style={{ fontWeight: '700' }}>{t1}</T>
                      <T c="font-body-sm text-body-sm text-on-surface-variant">{t2}</T>
                    </V>
                  </P>
                ))}
            </V>
          )}

          {messages.map((m) => {
            if (m.role === 'user') return <UserBubble key={m.id} body={m.body} L={L} />;
            if (m.kind === 'text') return <AiText key={m.id} body={m.body} />;
            if (m.kind === 'questions') return <QuestionSet key={m.id} body={m.body} solved={solvedOf(m.body.setId)} busyN={busyN} running={running || !!working} onSolve={(n) => solve(m.body, n)} onSolveAll={() => solveAll(m.body)} L={L} />;
            if (m.kind === 'solution') return <Solution key={m.id} body={m.body} L={L} lang={lang} teacher={teacher} />;
            if (m.kind === 'notes') return <NotesCard key={m.id} body={m.body} L={L} />;
            if (m.kind === 'quiz') return <Quiz key={m.id} body={m.body} marks={marksOf(m.body.quizId)} busyN={typeof busyN === 'string' && busyN.startsWith(m.body.quizId) ? Number(busyN.split(':')[1]) : null} onMark={(n, a) => mark(m.body.quizId, n, a)} L={L} />;
            return null;
          })}

          {!!working && <Working steps={working} L={L} />}
          {running && (
            <P c="self-start py-1" onPress={() => (stopAll.current = true)} hitSlop={8}>
              <T c="font-label-md text-label-md text-error" style={{ fontWeight: '700' }}>{L('Stop after this question', 'Arrêter après cette question')}</T>
            </P>
          )}
          <ErrorNote error={error} />
          {hasWork && !working && (
            <Cta variant="soft" icon={null} lead="download" h="h-11" label={L('Download as PDF', 'Télécharger en PDF')} onPress={pdf} />
          )}
        </V>
      </Screen>

      <BottomSheet visible={sheet === 'attach'} onClose={() => setSheet(null)} insets={insets}>
        <T c="font-headline-sm text-headline-sm text-on-surface" style={{ fontWeight: '700' }}>{L('Add material', 'Ajouter du contenu')}</T>
        <SheetRow icon="photo_camera" title={L('Take a photo', 'Prendre une photo')} sub={L('Of a page, a question or your notes', 'D’une page, d’une question ou de vos notes')} onPress={() => addFiles('camera')} />
        <SheetRow icon="photo_library" title={L('Choose photos', 'Choisir des photos')} sub={L('Up to 10 pages at once', 'Jusqu’à 10 pages à la fois')} onPress={() => addFiles('library')} />
        <SheetRow icon="upload_file" title={L('Upload a document', 'Envoyer un document')} sub={L('PDF, Word (.docx) or text, up to 5 MB', 'PDF, Word (.docx) ou texte, jusqu’à 5 Mo')} onPress={() => addFiles('doc')} />
      </BottomSheet>

      <BottomSheet visible={sheet === 'more'} onClose={() => setSheet(null)} insets={insets}>
        {hasWork && <SheetRow icon="download" title={L('Download as PDF', 'Télécharger en PDF')} sub={L('Every solution, explanation and quiz', 'Chaque solution, explication et quiz')} onPress={pdf} />}
        {!!chat?.id && <SheetRow icon="edit" title={L('Rename', 'Renommer')} onPress={() => (setTitle(chat.title || ''), setSheet('rename'))} />}
        <SheetRow icon="delete" title={L('Delete this chat', 'Supprimer cette discussion')} danger onPress={remove} />
      </BottomSheet>

      <BottomSheet visible={sheet === 'rename'} onClose={() => setSheet(null)} insets={insets}>
        <T c="font-headline-sm text-headline-sm text-on-surface" style={{ fontWeight: '700' }}>{L('Rename this chat', 'Renommer la discussion')}</T>
        <Input c="h-12 px-3 rounded-xl bg-surface-container-low text-body-md" value={title} onChangeText={setTitle} maxLength={60} autoFocus />
        <Cta variant="dark" icon={null} label={L('Save', 'Enregistrer')} onPress={rename} />
      </BottomSheet>
      {toast}
    </V>
  );
}

function Chip({ icon, label, onPress, disabled }) {
  return (
    <P c="h-9 px-3 rounded-full border border-primary-container flex-row items-center gap-1.5" onPress={onPress} disabled={disabled} accessibilityRole="button">
      <Ic n={icon} s={16} c="primary-container" />
      <T c="font-label-md text-label-md text-primary-container" style={{ fontWeight: '700' }}>{label}</T>
    </P>
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

function BottomSheet({ visible, onClose, children, insets }) {
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
