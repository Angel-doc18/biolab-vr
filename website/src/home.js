// The Klass8 home page: a lesson read aloud, a question solved on the board, a
// diagram explained part by part, the 3D heart, real questions and the
// syllabus. Every example is real Klass8 content (website/build.js) and the
// voice is the app's tutor voice.
const $ = (sel, el = document) => el.querySelector(sel);
const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]);
const el = (tag, attrs = {}, html = '') => {
  const e = document.createElement(tag);
  for (const [k, v] of Object.entries(attrs)) e.setAttribute(k, v);
  if (html) e.innerHTML = html;
  return e;
};
const wait = (ms) => new Promise((r) => setTimeout(r, ms));

// ---------- one voice for the whole page ----------
// Only one example speaks at a time: starting one stops the one before.
const voice = {
  audio: new Audio(),
  owner: null,
  run: 0,
  pending: null,
  start(owner) {
    if (this.owner && this.owner !== owner) this.owner.halted();
    this.stopAudio();
    this.owner = owner;
    this.run += 1;
    return this.run;
  },
  live(run) {
    return run === this.run;
  },
  stopAudio() {
    this.audio.pause();
    if (this.pending) this.pending(false);
    this.pending = null;
  },
  halt(owner) {
    if (this.owner !== owner) return;
    this.run += 1;
    this.stopAudio();
    this.owner = null;
  },
  // Says one clip; true when it played to the end, false when stopped.
  say(src, run, next) {
    return new Promise((resolve) => {
      if (!this.live(run)) return resolve(false);
      const a = this.audio;
      let settled = false;
      const done = (ok) => {
        if (settled) return;
        settled = true;
        a.onended = a.onerror = null;
        this.pending = null;
        resolve(ok && this.live(run));
      };
      this.pending = done;
      a.onended = () => done(true);
      // A clip that cannot be played: pause briefly and carry on, so the text still moves.
      a.onerror = () => wait(1500).then(() => done(true));
      a.src = src;
      a.play().catch((e) => {
        if (!this.live(run)) return done(false);
        // The browser would not let it play: back to the play button.
        if (e?.name === 'NotAllowedError') {
          done(false);
          this.owner?.halted();
          this.owner = null;
          return;
        }
        wait(1500).then(() => done(true));
      });
      if (next) fetch(next, { cache: 'force-cache' }).catch(() => {});
    });
  },
};

const setPlaying = (box, on) => box.classList.toggle('playing', on);

function tabs(container, names, onPick) {
  container.innerHTML = '';
  const buttons = names.map((name, i) => {
    const b = el('button', { type: 'button', role: 'tab', 'aria-selected': String(i === 0) }, esc(name));
    b.addEventListener('click', () => {
      buttons.forEach((x) => x.setAttribute('aria-selected', String(x === b)));
      onPick(i);
    });
    container.append(b);
    return b;
  });
  return buttons;
}

const placeLine = (x) => `<span class="pill">${esc(x.form || 'All classes')}</span>${esc(x.subject)}`;

// ---------- a lesson read aloud ----------
function reader(readers) {
  const box = $('[data-reader]');
  const text = $('[data-reader-text]');
  const status = $('[data-reader-status]');
  const bar = $('[data-reader-bar]');
  const title = $('[data-reader-title]');
  let lesson = null;
  let items = [];
  let pos = 0;
  let current = null;

  const owner = {
    halted() {
      setPlaying(box, false);
      if (pos > 0) status.textContent = 'Paused. Press play to carry on.';
    },
  };
  const mark = (node) => {
    if (current) current.classList.remove('said');
    current = node;
    if (node) {
      node.classList.add('said');
      if (node !== title) {
        const top = node.offsetTop - text.offsetTop - text.clientHeight / 3;
        text.scrollTo({ top: Math.max(0, top), behavior: reduceMotion ? 'auto' : 'smooth' });
      }
    }
  };

  function show(i) {
    voice.halt(owner);
    setPlaying(box, false);
    lesson = readers[i];
    pos = 0;
    mark(null);
    $('[data-reader-place]').innerHTML = `${placeLine(lesson)}, lesson ${esc(lesson.n)}, ${lesson.minutes} minutes`;
    title.textContent = lesson.title;
    text.innerHTML = '';
    items = [{ node: title, clip: lesson.head, para: 0 }];
    lesson.paragraphs.forEach((sentences, p) => {
      const para = el('p');
      sentences.forEach((s, k) => {
        const span = el('span', {}, s.html);
        const index = items.length;
        span.addEventListener('click', () => play(index));
        para.append(span);
        if (k < sentences.length - 1) para.append(' ');
        items.push({ node: span, clip: s.clip, para: p + 1 });
      });
      text.append(para);
    });
    text.scrollTop = 0;
    bar.style.width = '0';
    status.textContent = 'Press play to hear the tutor read this lesson.';
  }

  async function play(from = pos) {
    const run = voice.start(owner);
    setPlaying(box, true);
    pos = from >= items.length ? 0 : from;
    const paras = lesson.paragraphs.length;
    while (pos < items.length) {
      const item = items[pos];
      mark(item.node);
      status.textContent = item.para ? `Reading paragraph ${item.para} of ${paras}` : 'Reading the title';
      bar.style.width = `${Math.round((pos / items.length) * 100)}%`;
      const ok = await voice.say(item.clip, run, items[pos + 1]?.clip);
      if (!ok) return;
      pos += 1;
    }
    voice.halt(owner);
    setPlaying(box, false);
    mark(null);
    pos = 0;
    bar.style.width = '100%';
    status.textContent = 'Finished. Choose another subject above, or play it again.';
  }

  tabs($('[data-reader-tabs]'), readers.map((r) => r.tab), show);
  show(0);
  $('[data-reader-play]').addEventListener('click', () => (box.classList.contains('playing') ? (voice.halt(owner), owner.halted()) : play()));
  $('[data-play-reader]').addEventListener('click', () => {
    if (matchMedia('(max-width: 960px)').matches) box.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' });
    play();
  });
}

// ---------- a question solved on the board ----------
function board(boards) {
  const box = $('.boardbox');
  const status = $('[data-board-status]');
  const steps = $('[data-board-steps]');
  const q = $('[data-board-q]');
  let item = null;
  let rows = [];
  let next = 0;
  let asked = false;

  const owner = {
    halted() {
      setPlaying(box, false);
      if (next > 0 && next < rows.length) status.textContent = 'Paused. Press play to carry on.';
    },
  };

  function show(i) {
    voice.halt(owner);
    setPlaying(box, false);
    item = boards[i];
    next = 0;
    asked = false;
    $('[data-board-place]').innerHTML = `${placeLine(item)}, from the lesson “${esc(item.lesson)}”`;
    q.innerHTML = `<span>${esc(item.q)}</span>`;
    steps.innerHTML = '';
    rows = item.steps.map((s, k) => {
      const li = el('li', { class: 'step', hidden: '' });
      const n = el('button', { class: 'step__n', type: 'button', 'aria-label': `Hear step ${k + 1} again` }, String(k + 1));
      const body = el('div');
      const written = el('div', { class: 'step__board' });
      const say = el('p', { class: 'step__say', hidden: '' }, esc(s.say));
      body.append(written, say);
      li.append(n, body);
      n.addEventListener('click', () => replay(k));
      steps.append(li);
      return { li, written, say, step: s };
    });
    status.textContent = 'Press play to watch the tutor solve it.';
  }

  // Writes a step on the board, a few letters at a time.
  async function write(row, run) {
    const t = row.step.board;
    if (reduceMotion) {
      row.written.textContent = t;
      return;
    }
    const total = Math.min(1600, t.length * 32);
    const start = performance.now();
    while (voice.live(run)) {
      const n = Math.min(t.length, Math.ceil(((performance.now() - start) / total) * t.length));
      row.written.innerHTML = `${esc(t.slice(0, n))}${n < t.length ? '<span class="caret"></span>' : ''}`;
      if (n >= t.length) return;
      await wait(30);
    }
    row.written.textContent = t;
  }

  const focus = (k) => rows.forEach((r, j) => r.li.classList.toggle('step--now', j === k));

  async function play() {
    if (next >= rows.length) show(boards.indexOf(item));
    const run = voice.start(owner);
    setPlaying(box, true);
    if (!asked) {
      q.firstChild.classList.add('said');
      status.textContent = 'Reading the question';
      const ok = await voice.say(item.ask, run, rows[0]?.step.clip);
      q.firstChild.classList.remove('said');
      if (!ok) return;
      asked = true;
    }
    while (next < rows.length) {
      const row = rows[next];
      row.li.hidden = false;
      focus(next);
      status.textContent = `Step ${next + 1} of ${rows.length}`;
      const [ok] = await Promise.all([voice.say(row.step.clip, run, rows[next + 1]?.step.clip), write(row, run)]);
      row.say.hidden = false;
      if (!ok) return;
      next += 1;
    }
    voice.halt(owner);
    setPlaying(box, false);
    focus(-1);
    status.textContent = 'Solved. Tap a step number to hear it again.';
  }

  async function replay(k) {
    const run = voice.start(owner);
    setPlaying(box, true);
    focus(k);
    status.textContent = `Step ${k + 1} again`;
    await voice.say(rows[k].step.clip, run);
    if (!voice.live(run)) return;
    voice.halt(owner);
    setPlaying(box, false);
    focus(-1);
    status.textContent = next >= rows.length ? 'Solved. Tap a step number to hear it again.' : 'Press play to carry on.';
  }

  tabs($('[data-board-tabs]'), boards.map((b) => b.tab), show);
  show(0);
  $('[data-board-play]').addEventListener('click', () => (box.classList.contains('playing') ? (voice.halt(owner), owner.halted()) : play()));
  $('[data-board-restart]').addEventListener('click', () => show(boards.indexOf(item)));
}

// ---------- a diagram explained part by part ----------
function diagram(heart) {
  const box = $('.diagram__side');
  const svg = $('[data-diagram-svg]');
  const status = $('[data-diagram-status]');
  const list = $('[data-diagram-parts]');
  let lang = 'en';
  let now = -1;
  $('[data-diagram-title]').textContent = heart.title;
  svg.innerHTML = heart.plain;

  const owner = {
    halted() {
      setPlaying(box, false);
    },
  };
  const rows = heart.parts.map((p, i) => {
    const li = el('li');
    const b = el('button', { type: 'button' });
    const name = el('span', { class: 'part__name' });
    const say = el('span', { class: 'part__say', hidden: '' });
    b.append(name, say);
    b.addEventListener('click', () => one(i));
    li.append(b);
    list.append(li);
    return { b, name, say, p };
  });
  const label = () =>
    rows.forEach(({ name, say, p }) => {
      name.textContent = lang === 'fr' ? p.fr : p.name;
      say.textContent = lang === 'fr' ? p.sayFr : p.say;
    });
  const light = (i) => {
    now = i;
    svg.innerHTML = i < 0 ? heart.plain : heart.lit[heart.parts[i].label];
    rows.forEach((r, j) => {
      r.b.classList.toggle('part--now', j === i);
      if (j === i) r.say.hidden = false;
    });
    if (i >= 0 && !matchMedia('(max-width: 960px)').matches) rows[i].b.scrollIntoView({ block: 'nearest', behavior: reduceMotion ? 'auto' : 'smooth' });
  };
  const clipOf = (i) => (lang === 'fr' ? heart.parts[i].frClip : heart.parts[i].en);
  const name = (i) => (lang === 'fr' ? heart.parts[i].fr : heart.parts[i].name);

  async function all() {
    const run = voice.start(owner);
    setPlaying(box, true);
    rows.forEach((r) => (r.say.hidden = true));
    light(-1);
    status.textContent = lang === 'fr' ? 'Introduction' : 'Introduction';
    if (!(await voice.say(heart.intro[lang], run, clipOf(0)))) return;
    for (let i = 0; i < rows.length; i++) {
      light(i);
      status.textContent = `${name(i)} (${i + 1} of ${rows.length})`;
      if (!(await voice.say(clipOf(i), run, rows[i + 1] ? clipOf(i + 1) : null))) return;
    }
    voice.halt(owner);
    setPlaying(box, false);
    light(-1);
    status.textContent = lang === 'fr' ? 'Terminé. Touchez une partie pour la réentendre.' : 'Finished. Tap any part to hear it again.';
  }

  async function one(i) {
    const run = voice.start(owner);
    setPlaying(box, true);
    light(i);
    status.textContent = name(i);
    if (!(await voice.say(clipOf(i), run))) return;
    voice.halt(owner);
    setPlaying(box, false);
  }

  document.querySelectorAll('[data-lang]').forEach((b) =>
    b.addEventListener('click', () => {
      lang = b.dataset.lang;
      document.querySelectorAll('[data-lang]').forEach((x) => x.setAttribute('aria-pressed', String(x === b)));
      voice.halt(owner);
      setPlaying(box, false);
      label();
      status.textContent = lang === 'fr' ? 'Appuyez sur lecture pour entendre l’explication du cœur.' : 'Press play to hear the heart explained.';
    }),
  );
  label();
  $('[data-diagram-play]').addEventListener('click', () => (box.classList.contains('playing') ? (voice.halt(owner), owner.halted()) : all()));
  return () => now;
}

// ---------- the 3D heart ----------
function model(m) {
  const viewer = $('[data-viewer]');
  $('[data-model-credit]').textContent = `3D model: ${m.credit}`;
  $('[data-viewer-size]').textContent = `${(m.bytes / 1e6).toFixed(1)} MB, loaded only when you ask for it.`;
  $('[data-viewer-load]').addEventListener('click', async (e) => {
    e.currentTarget.disabled = true;
    e.currentTarget.textContent = 'Loading the heart';
    await import('https://cdn.jsdelivr.net/npm/@google/model-viewer@3.5.0/dist/model-viewer.min.js');
    const mv = el('model-viewer', {
      src: `/${m.file}`,
      alt: 'A 3D model of the human heart that you can turn and zoom',
      'camera-controls': '',
      'touch-action': 'pan-y',
      'auto-rotate': '',
      'rotation-per-second': '14deg',
      'interaction-prompt': 'none',
      'shadow-intensity': '0.7',
      exposure: '1.05',
      ar: '',
      'ar-modes': 'webxr scene-viewer quick-look',
    });
    for (const p of m.parts) {
      mv.append(el('div', { class: 'hotspot', slot: `hotspot-${p.key}`, 'data-position': p.at.join(' ') }, esc(p.name)));
    }
    mv.append(el('button', { class: 'btn btn--light ar-btn', slot: 'ar-button', type: 'button' }, 'View it on your desk'));
    mv.append(el('p', { class: 'viewer__help' }, 'Drag to turn it. Pinch or scroll to zoom.'));
    mv.addEventListener('load', () => $('[data-viewer-start]')?.remove());
    mv.addEventListener('error', () => {
      const start = $('[data-viewer-start]');
      if (start) start.querySelector('.viewer__note').textContent = 'The model could not be loaded. Check your connection and try again.';
    });
    viewer.append(mv);
  });
}

// ---------- real questions ----------
function quiz(questions) {
  const box = $('[data-quiz]');
  let order = [];
  let i = 0;
  let score = 0;
  const shuffle = (a) => {
    const b = [...a];
    for (let k = b.length - 1; k > 0; k--) {
      const j = Math.floor(Math.random() * (k + 1));
      [b[k], b[j]] = [b[j], b[k]];
    }
    return b;
  };
  function start() {
    order = shuffle(questions.map((_, k) => k));
    i = 0;
    score = 0;
    ask();
  }
  function ask() {
    const q = questions[order[i]];
    const options = shuffle(q.a.map((text, k) => ({ text, right: k === 0 })));
    box.innerHTML = `
      <div class="quiz__top"><span>Question ${i + 1} of ${questions.length}</span><span class="quiz__tag">${esc(q.form || '')} ${esc(q.subject)}</span></div>
      <p class="quiz__q">${esc(q.q)}</p>
      <ul class="options">${options.map((o, k) => `<li><button type="button" data-k="${k}"><span class="letter">${'ABCD'[k]}</span><span>${esc(o.text)}</span></button></li>`).join('')}</ul>`;
    box.querySelectorAll('.options button').forEach((b) =>
      b.addEventListener('click', () => {
        const picked = options[Number(b.dataset.k)];
        if (picked.right) score += 1;
        box.querySelectorAll('.options button').forEach((x) => {
          x.disabled = true;
          const o = options[Number(x.dataset.k)];
          if (o.right) x.classList.add('right');
          else if (x === b) x.classList.add('wrong');
        });
        const right = options.find((o) => o.right).text;
        const why = el('p', { class: 'why' }, `<strong>${picked.right ? 'Correct.' : `Not quite. The answer is ${esc(right)}.`}</strong> ${esc(q.why)}`);
        const foot = el('div', { class: 'quiz__foot' });
        const last = i === questions.length - 1;
        const nextBtn = el('button', { class: 'btn', type: 'button' }, last ? 'See your score' : 'Next question');
        nextBtn.addEventListener('click', () => {
          if (last) end();
          else {
            i += 1;
            ask();
          }
        });
        foot.append(el('span', { class: 'meta' }, `From the topic “${esc(q.topic)}”`), nextBtn);
        box.append(why, foot);
        nextBtn.focus({ preventScroll: true });
      }),
    );
  }
  function end() {
    const words = score === questions.length ? 'Every one right.' : score >= 7 ? 'A strong score.' : score >= 4 ? 'A good start.' : 'Each question you miss shows you what to revise next.';
    box.innerHTML = `<p class="score">${score}/${questions.length}</p><p>${words} In the app, every topic ends with questions like these, and Klass8 keeps track of what you have mastered.</p>`;
    const again = el('button', { class: 'btn btn--quiet', type: 'button' }, 'Try them again');
    again.addEventListener('click', start);
    const get = el('a', { class: 'btn', href: '/download/' }, 'Get the app');
    const row = el('div', { class: 'actions' });
    row.append(get, again);
    box.append(row);
  }
  start();
}

// ---------- the syllabus ----------
function syllabus(data) {
  const classes = $('[data-syllabus-classes]');
  const select = $('[data-syllabus-subject]');
  const terms = $('[data-syllabus-terms]');
  const sum = $('[data-syllabus-sum]');
  let form = 'Form 4';
  let subject = 'biology';
  const SEQ = { 1: [1, 2], 2: [3, 4], 3: [5, 6] };
  const lessons = (n) => `${n} lesson${n === 1 ? '' : 's'}`;
  const topicList = (list) => `<ul class="topics">${list.map((t) => `<li><span>${esc(t.title)}</span><span class="n">${lessons(t.lessons)}</span></li>`).join('')}</ul>`;

  function subjects() {
    const open = data.subjects.filter((s) => s.forms[form]?.length).sort((a, b) => a.name.localeCompare(b.name));
    select.innerHTML = open.map((s) => `<option value="${s.id}">${esc(s.name)}</option>`).join('');
    if (!open.some((s) => s.id === subject)) subject = open.find((s) => s.id === 'biology' || s.id === 'a-biology')?.id || open[0]?.id;
    select.value = subject;
  }
  function render() {
    const s = data.subjects.find((x) => x.id === subject);
    const list = s?.forms[form] || [];
    const total = list.reduce((n, t) => n + t.lessons, 0);
    const level = s?.level === 'A' ? 'Advanced Level' : 'Ordinary Level';
    sum.textContent = `${form} ${s?.name}: ${list.length} topics and ${lessons(total)}${s?.code ? `, for GCE ${level} ${s.code}` : ''}.`;
    const timed = list.some((t) => t.term);
    terms.className = `terms${timed ? '' : ' terms--one'}`;
    if (!timed) {
      terms.innerHTML = `<div class="term"><h3>Topics</h3>${topicList(list)}</div>`;
      return;
    }
    terms.innerHTML = [1, 2, 3]
      .map((term) => {
        const inTerm = list.filter((t) => t.term === term);
        const bySeq = SEQ[term].map((q) => [q, inTerm.filter((t) => t.seq === q)]).filter(([, l]) => l.length);
        const loose = inTerm.filter((t) => !SEQ[term].includes(t.seq));
        return `<div class="term"><h3>Term ${term}</h3>${bySeq.map(([q, l]) => `<div class="seq"><h4>Sequence ${q}</h4>${topicList(l)}</div>`).join('')}${loose.length ? `<div class="seq"><h4>Through the term</h4>${topicList(loose)}</div>` : ''}${inTerm.length ? '' : '<p class="meta">Revision and examinations.</p>'}</div>`;
      })
      .join('');
  }
  const buttons = data.classes.map((c) => {
    const b = el('button', { type: 'button', 'aria-pressed': String(c.id === form) }, esc(c.id));
    b.addEventListener('click', () => {
      form = c.id;
      buttons.forEach((x) => x.setAttribute('aria-pressed', String(x === b)));
      subjects();
      render();
    });
    classes.append(b);
    return b;
  });
  select.addEventListener('change', () => {
    subject = select.value;
    render();
  });
  subjects();
  render();
}

// ---------- the download ----------
async function version() {
  try {
    const v = await (await fetch('/download/version.json', { cache: 'no-cache' })).json();
    const mb = Math.round(v.size / 1e6);
    const hero = $('[data-version]');
    hero.textContent = `Free download for Android phones, version ${v.version.replace(/^v/, '')} (${mb} MB). Use it in English or French.`;
    $('[data-version-plain]').textContent = `Version ${v.version.replace(/^v/, '')}, ${mb} MB.`;
  } catch {
    // The page reads well without the version.
  }
}

async function main() {
  version();
  const home = await (await fetch('/data/home.json')).json();
  reader(home.readers);
  board(home.boards);
  quiz(home.quiz);
  model(home.model);
  // WhatsApp shows *text* in bold.
  $('[data-report]').innerHTML = esc(home.report).replace(/\*(.+?)\*/g, '<strong>$1</strong>');
  fetch('/data/heart.json').then((r) => r.json()).then(diagram);
  fetch('/data/syllabus.json').then((r) => r.json()).then(syllabus);
}
main();
