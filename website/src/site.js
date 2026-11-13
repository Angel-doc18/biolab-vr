// Klass8 website behaviour: the header, the menu, the hero photographs, motion
// on scroll, the feature and level tabs, the tutor's voice and the contact form.
(() => {
  window.K8 = true; // the page's fallback shows everything if this never runs
  const root = document.documentElement;
  const still = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (still) root.classList.add('no-motion');
  // Set in the page head. lite: low-memory phones and data saver get no
  // decorative motion. slow: on 2G or 3G the extra hero photographs are skipped.
  const lite = root.classList.contains('lite');
  const slow = lite || root.classList.contains('slow');

  // ---------- header: white once scrolled, tucked away while reading down ----------
  const hd = document.querySelector('[data-hd]');
  let lastY = window.scrollY;
  const onScroll = () => {
    const y = window.scrollY;
    if (hd) {
      hd.classList.toggle('is-solid', y > 24);
      const down = y > lastY + 4;
      const up = y < lastY - 4;
      if (down && y > 500 && !hd.classList.contains('is-open')) hd.classList.add('is-hidden');
      if (up || y < 200) hd.classList.remove('is-hidden');
    }
    lastY = y;
  };
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  // ---------- menu on small screens ----------
  const menu = document.querySelector('[data-menu]');
  if (menu && hd) {
    const set = (open) => {
      hd.classList.toggle('is-open', open);
      root.classList.toggle('is-locked', open);
      menu.setAttribute('aria-expanded', String(open));
      menu.querySelector('.sr').textContent = open ? 'Close the menu' : 'Menu';
    };
    const close = () => hd.classList.contains('is-open') && set(false);
    menu.addEventListener('click', () => {
      const open = !hd.classList.contains('is-open');
      set(open);
      if (open) hd.querySelector('.hd__nav > a')?.focus({ preventScroll: true });
    });
    hd.querySelectorAll('.hd__nav a').forEach((a) => a.addEventListener('click', close));
    document.addEventListener('keydown', (e) => {
      if (e.key !== 'Escape' || !hd.classList.contains('is-open')) return;
      close();
      menu.focus();
    });
    window.matchMedia('(min-width: 981px)').addEventListener('change', (e) => e.matches && close());
  }

  // ---------- the page the visitor is on ----------
  const here = location.pathname.replace(/\.html$/, '').replace(/\/$/, '') || '/';
  document.querySelectorAll('.hd__nav > a').forEach((a) => {
    const to = a.getAttribute('href').replace(/\/$/, '') || '/';
    if (to === here) a.setAttribute('aria-current', 'page');
  });

  // ---------- hero photographs ----------
  const hero = document.querySelector('.hero');
  const slides = [...document.querySelectorAll('.hero__slide')];
  const bars = [...document.querySelectorAll('.hero__bar')];
  const pause = document.querySelector('.hero__pause');
  if (hero && slides.length > 1 && !slow) {
    let i = 0;
    let timer = null;
    const later = slides.filter((sl) => sl.style.getPropertyValue('--next'));
    const urlOf = (v) => (v.match(/url\(['"]?(.*?)['"]?\)/) || [])[1];
    let loading = null;
    const loadLater = () =>
      loading || (loading = Promise.all(
        later.map((sl) => {
          const big = sl.style.getPropertyValue('--next');
          const small = sl.style.getPropertyValue('--next-s');
          sl.style.setProperty('--img', big);
          sl.style.setProperty('--img-s', small);
          return new Promise((done) => {
            const im = new Image();
            im.onload = im.onerror = done;
            im.src = urlOf(window.matchMedia('(max-width: 700px)').matches ? small : big);
          });
        })
      ));
    const show = (n) => {
      i = (n + slides.length) % slides.length;
      slides.forEach((s, k) => s.classList.toggle('is-on', k === i));
      bars.forEach((b, k) => {
        b.classList.remove('is-on');
        b.classList.toggle('is-done', k < i);
        b.setAttribute('aria-current', k === i ? 'true' : 'false');
      });
      void bars[i]?.offsetWidth; // restart the bar's fill
      bars[i]?.classList.add('is-on');
    };
    const play = () => {
      clearInterval(timer);
      timer = setInterval(() => show(i + 1), 7000);
      hero.classList.remove('is-paused');
      pause?.setAttribute('aria-label', 'Pause the photographs');
    };
    const stop = () => {
      clearInterval(timer);
      timer = null;
      hero.classList.add('is-paused');
      pause?.setAttribute('aria-label', 'Play the photographs');
    };
    bars.forEach((b, k) => b.addEventListener('click', () => loadLater().then(() => (show(k), timer && play()))));
    pause?.addEventListener('click', () => (timer ? stop() : loadLater().then(play)));
    show(0);
    if (still) stop();
    else {
      // Start turning only once the other photographs have arrived.
      const start = () => setTimeout(() => loadLater().then(play), 1200);
      document.readyState === 'complete' ? start() : window.addEventListener('load', start, { once: true });
    }
  }

  // ---------- motion on scroll ----------
  // Children of [data-stagger] come in one after another.
  document.querySelectorAll('[data-stagger]').forEach((group) => {
    [...group.children].forEach((child, k) => {
      if (!child.hasAttribute('data-reveal')) child.setAttribute('data-reveal', group.dataset.stagger || '');
      child.style.setProperty('--delay', `${k * 0.12}s`);
    });
  });
  const reveal = [...document.querySelectorAll('[data-reveal], .photo')];
  if (still || !('IntersectionObserver' in window)) {
    reveal.forEach((el) => el.classList.add('is-in'));
  } else {
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          e.target.classList.add('is-in');
          io.unobserve(e.target);
        }),
      { rootMargin: '0px 0px -10% 0px', threshold: 0.12 }
    );
    reveal.forEach((el) => io.observe(el));
  }

  // Numbers count up when they come into view.
  const counters = [...document.querySelectorAll('[data-count]')];
  const fmt = (n) => Math.round(n).toLocaleString('en-GB');
  const count = (el) => {
    const end = Number(el.dataset.count);
    if (still) return (el.textContent = fmt(end));
    const t0 = performance.now();
    const step = (t) => {
      const p = Math.min(1, (t - t0) / 1800);
      el.textContent = fmt(end * (1 - Math.pow(1 - p, 4)));
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  };
  if ('IntersectionObserver' in window) {
    const co = new IntersectionObserver((entries) => entries.forEach((e) => e.isIntersecting && (count(e.target), co.unobserve(e.target))), { threshold: 0.5 });
    counters.forEach((el) => co.observe(el));
  } else counters.forEach(count);

  // Photographs behind heroes and the closing band drift a little slower than the page.
  const drift = [...document.querySelectorAll('.hero__media, .phero__media, .final__media')];
  const wideMouse = window.matchMedia('(min-width: 901px) and (hover: hover) and (pointer: fine)').matches;
  if (!still && !lite && wideMouse && drift.length) {
    let ticking = false;
    const move = () => {
      ticking = false;
      const vh = window.innerHeight;
      drift.forEach((el) => {
        const box = el.parentElement.getBoundingClientRect();
        if (box.bottom < 0 || box.top > vh) return;
        const shift = (box.top + box.height / 2 - vh / 2) * -0.12;
        el.style.transform = `translate3d(0, ${shift.toFixed(1)}px, 0)`;
      });
    };
    window.addEventListener('scroll', () => (ticking ? null : ((ticking = true), requestAnimationFrame(move))), { passive: true });
    move();
  }

  // ---------- tabs: features beside the phone, subjects by level ----------
  document.querySelectorAll('[data-tabs]').forEach((box) => {
    const tabs = [...box.querySelectorAll('[role="tab"]')];
    const select = (tab) => {
      tabs.forEach((t) => {
        const on = t === tab;
        t.setAttribute('aria-selected', String(on));
        t.tabIndex = on ? 0 : -1;
        const panel = document.getElementById(t.getAttribute('aria-controls'));
        if (!panel) return;
        if (panel.classList.contains('phone')) panel.classList.toggle('is-on', on);
        else panel.hidden = !on;
      });
      const cap = box.querySelector('.show__cap');
      const desc = tab.querySelector('.tab__d');
      if (cap && desc) cap.textContent = desc.textContent;
    };
    // The showcase moves to the next screen every 7 seconds while it is in view,
    // until the visitor chooses a tab themselves.
    let timer = null;
    let chosen = false;
    const halt = () => {
      clearInterval(timer);
      timer = null;
      box.classList.remove('is-auto');
    };
    const timing = (tab) => {
      tabs.forEach((t) => t.classList.remove('is-timing'));
      void tab.offsetWidth; // restart the line under the tab
      tab.classList.add('is-timing');
    };
    const run = () => {
      if (timer || chosen) return;
      box.classList.add('is-auto');
      timing(tabs.find((t) => t.getAttribute('aria-selected') === 'true') || tabs[0]);
      timer = setInterval(() => {
        const k = tabs.findIndex((t) => t.getAttribute('aria-selected') === 'true');
        const next = tabs[(k + 1) % tabs.length];
        select(next);
        timing(next);
      }, 7000);
    };
    if (box.hasAttribute('data-auto') && !still && 'IntersectionObserver' in window) {
      new IntersectionObserver(([e]) => (e.isIntersecting ? run() : halt()), { threshold: 0.35 }).observe(box);
    }
    const choose = () => {
      chosen = true;
      halt();
    };

    tabs.forEach((t, k) => {
      t.addEventListener('click', () => (choose(), select(t)));
      t.addEventListener('keydown', (e) => {
        const d = e.key === 'ArrowDown' || e.key === 'ArrowRight' ? 1 : e.key === 'ArrowUp' || e.key === 'ArrowLeft' ? -1 : 0;
        if (!d) return;
        e.preventDefault();
        choose();
        const next = tabs[(k + d + tabs.length) % tabs.length];
        next.focus();
        select(next);
      });
    });
  });

  // ---------- the tutor's voice: one clip at a time ----------
  // Any voice that starts asks every other one on the page to stop.
  const hush = (except) => document.dispatchEvent(new CustomEvent('k8:voice', { detail: except }));
  let current = null;
  document.querySelectorAll('[data-audio]').forEach((btn) => {
    const audio = new Audio();
    audio.preload = 'none';
    audio.src = btn.dataset.audio;
    const len = btn.querySelector('[data-len]');
    audio.addEventListener('loadedmetadata', () => {
      if (len && isFinite(audio.duration)) len.textContent = `${Math.round(audio.duration)} seconds`;
    });
    const off = () => btn.classList.remove('is-playing');
    audio.addEventListener('ended', off);
    audio.addEventListener('pause', off);
    audio.addEventListener('play', () => (btn.classList.add('is-playing'), hush(audio)));
    document.addEventListener('k8:voice', (e) => e.detail !== audio && !audio.paused && audio.pause());
    btn.addEventListener('click', () => {
      if (!audio.paused) return audio.pause();
      if (current && current !== audio) current.pause();
      current = audio;
      audio.currentTime = 0;
      audio.play().catch(() => {});
    });
  });

  // ---------- home hero: the tutor explains Klass8, in English or in French ----------
  // Each button plays one file; the sentence being said is shown and lit up as
  // a caption, and a ring fills as it goes. The transcript holds every word.
  const speakBox = document.querySelector('[data-speak-box]');
  const tx = document.getElementById('transcript');
  const openTx = () => tx && (tx.showModal ? tx.showModal() : tx.setAttribute('open', ''));
  if (tx) {
    document.querySelectorAll('[data-tx-open]').forEach((b) => b.addEventListener('click', openTx));
    tx.querySelector('[data-tx-close]')?.addEventListener('click', () => tx.close());
    tx.addEventListener('click', (e) => e.target === tx && tx.close()); // a tap outside the box closes it
  }
  if (speakBox) {
    const cap = speakBox.querySelector('[data-speak-cap]');
    const go = speakBox.querySelector('[data-speak-go]');
    // The line above the voices describes Klass8; while the tutor speaks it
    // becomes the caption, and it comes back once the tutor has finished.
    const idle = cap.innerHTML;
    let rest = 0;
    const restore = () => {
      cap.innerHTML = idle;
      cap.classList.remove('is-new');
      void cap.offsetWidth;
      cap.classList.add('is-new');
    };
    const escHtml = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    speakBox.querySelectorAll('.speak__btn').forEach((btn) => {
      const fr = btn.lang === 'fr';
      const cues = JSON.parse(btn.dataset.cues);
      const total = Number(btn.dataset.total);
      const note = btn.querySelector('[data-speak-note]');
      const ring = btn.querySelector('.speak__prog');
      const audio = new Audio();
      audio.preload = 'none';
      let shown = -1;
      let raf = 0;
      const warm = () => {
        if (audio.src) return;
        audio.preload = 'auto';
        audio.src = btn.dataset.src;
      };
      const words = {
        playing: fr ? 'Touchez pour mettre en pause' : 'Tap to pause',
        paused: fr ? 'En pause, touchez pour reprendre' : 'Paused, tap to carry on',
        loading: fr ? 'Chargement…' : 'Loading…',
      };
      const set = (state) => {
        btn.classList.toggle('is-playing', state === 'playing');
        btn.classList.toggle('is-loading', state === 'loading');
        btn.classList.toggle('is-on', state !== 'idle');
        speakBox.classList.toggle('is-paused', state === 'paused');
        note.textContent = words[state] || btn.dataset.note;
      };
      const showCue = () => {
        clearTimeout(rest);
        const t = audio.currentTime;
        let k = 0;
        while (k + 1 < cues.length && cues[k + 1][0] <= t + 0.05) k++;
        if (k === shown) return;
        shown = k;
        const end = k + 1 < cues.length ? cues[k + 1][0] : total;
        cap.innerHTML = `<span class="speak__line" lang="${btn.lang}" style="--d: ${(end - cues[k][0]).toFixed(2)}s">${escHtml(cues[k][1])}</span>`;
        cap.classList.remove('is-new');
        void cap.offsetWidth;
        cap.classList.add('is-new');
      };
      const tick = () => {
        ring.style.strokeDasharray = `${Math.min(100, (audio.currentTime / total) * 100).toFixed(2)} 100`;
        showCue();
        raf = requestAnimationFrame(tick);
      };
      audio.addEventListener('playing', () => {
        set('playing');
        cancelAnimationFrame(raf);
        raf = requestAnimationFrame(tick);
      });
      audio.addEventListener('waiting', () => set('loading'));
      audio.addEventListener('pause', () => {
        cancelAnimationFrame(raf);
        if (!audio.ended) set(audio.currentTime > 0 ? 'paused' : 'idle');
      });
      audio.addEventListener('ended', () => {
        cancelAnimationFrame(raf);
        ring.style.strokeDasharray = '100 100';
        set('idle');
        go?.classList.add('is-ready'); // having heard it, the way in stands out
        setTimeout(() => (ring.style.strokeDasharray = '0 100'), 1500);
        clearTimeout(rest);
        rest = setTimeout(() => (shown = -1, restore()), 2600);
      });
      audio.addEventListener('error', () => {
        if (!audio.src) return;
        cancelAnimationFrame(raf);
        set('idle');
        cap.textContent = fr ? 'Le son ne peut pas être lu ici. Voici ce que dit le tuteur.' : 'The sound cannot play here. Here is what the tutor says.';
        openTx();
      });
      document.addEventListener('k8:voice', (e) => e.detail !== audio && !audio.paused && audio.pause());
      btn.addEventListener('pointerenter', warm, { once: true });
      btn.addEventListener('focus', warm, { once: true });
      btn.addEventListener('click', () => {
        warm();
        if (!audio.paused) return audio.pause();
        hush(audio);
        if (audio.ended) audio.currentTime = 0;
        if (audio.currentTime === 0) shown = -1;
        go?.classList.remove('is-ready');
        set('loading');
        audio.play().catch(() => set(audio.currentTime > 0 ? 'paused' : 'idle'));
      });
    });
  }

  // ---------- the syllabus browser: every topic of a subject, class by class ----------
  const syl = document.querySelector('[data-syllabus]');
  const sylData = document.getElementById('syllabus-data');
  if (syl && sylData) {
    const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    const subjects = JSON.parse(sylData.textContent);
    const pick = syl.querySelector('#syl-subject');
    const formsBox = syl.querySelector('#syl-forms');
    const sum = syl.querySelector('#syl-sum');
    const terms = syl.querySelector('#syl-terms');
    const TERM = ['First term', 'Second term', 'Third term'];
    const LEVEL = { O: 'Ordinary Level', A: 'Advanced Level' };
    pick.innerHTML = ['O', 'A']
      .map((l) => `<optgroup label="${LEVEL[l]}">${subjects.filter((s) => s.level === l).map((s) => `<option value="${s.id}">${esc(s.name)}</option>`).join('')}</optgroup>`)
      .join('');
    let form = null;
    const show = () => {
      const s = subjects.find((x) => x.id === pick.value) || subjects[0];
      const forms = Object.keys(s.forms);
      if (!forms.includes(form)) form = forms.includes('Form 4') ? 'Form 4' : forms.includes('Lower Sixth') ? 'Lower Sixth' : forms[0];
      formsBox.innerHTML = forms.map((f) => `<button type="button" aria-pressed="${f === form}">${esc(f)}</button>`).join('');
      const list = s.forms[form].map((u, i) => ({ title: u[0], term: u[1], lessons: u[2], n: i + 1 }));
      const lessons = list.reduce((n, u) => n + u.lessons, 0);
      sum.innerHTML = `<b>${esc(s.name)}, ${esc(form)}:</b> ${list.length} topics and ${lessons.toLocaleString('en-GB')} lessons.`;
      const termed = list.some((u) => u.term);
      const cols = termed
        ? [1, 2, 3].map((t) => [TERM[t - 1], list.filter((u) => u.term === t)]).concat([['Through the year', list.filter((u) => !u.term)]]).filter((c) => c[1].length)
        : [['Topics in teaching order', list]];
      terms.style.setProperty('--cols', Math.min(cols.length, 3));
      terms.innerHTML = cols
        .map(([h, items]) => `<div class="syl__term"><h3>${h}</h3><ol>${items.map((u) => `<li><span class="syl__n">${u.n}</span><span><b>${esc(u.title)}</b>${u.lessons ? `<small>${u.lessons} lesson${u.lessons > 1 ? 's' : ''}</small>` : ''}</span></li>`).join('')}</ol></div>`)
        .join('');
      terms.classList.remove('is-new');
      void terms.offsetWidth;
      terms.classList.add('is-new');
    };
    const fromHash = (scroll) => {
      const id = location.hash.startsWith('#s-') ? location.hash.slice(3) : '';
      if (!subjects.some((s) => s.id === id)) return false;
      pick.value = id;
      show();
      if (scroll) document.getElementById('syllabus')?.scrollIntoView({ behavior: still ? 'auto' : 'smooth' });
      return true;
    };
    pick.addEventListener('change', show);
    formsBox.addEventListener('click', (e) => {
      const b = e.target.closest('button');
      if (!b) return;
      form = b.textContent;
      show();
    });
    window.addEventListener('hashchange', () => fromHash(true));
    if (!fromHash(true)) {
      pick.value = subjects.some((s) => s.id === 'biology') ? 'biology' : subjects[0].id;
      show();
    }
  }

  // ---------- download page: the version and size of the newest app ----------
  const apkMeta = document.querySelector('[data-apk-meta]');
  if (apkMeta) {
    fetch('/download/version.json', { cache: 'no-store' })
      .then((r) => (r.ok ? r.json() : null))
      .then((v) => {
        if (v && v.version && v.size) apkMeta.textContent = `Version ${String(v.version).replace(/^v/, '')} for Android phones, ${Math.round(v.size / 1048576)} MB`;
      })
      .catch(() => {});
  }

  // ---------- questions page: search every question ----------
  const findInput = document.querySelector('[data-find-input]');
  if (findInput) {
    const none = document.querySelector('[data-find-none]');
    const groups = [...document.querySelectorAll('[data-find-group]')];
    const norm = (s) => s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '');
    findInput.addEventListener('input', () => {
      const words = norm(findInput.value).split(/\s+/).filter(Boolean);
      let shown = 0;
      groups.forEach((g) => {
        let inGroup = 0;
        g.querySelectorAll('details').forEach((d) => {
          const hit = words.every((w) => norm(d.textContent).includes(w));
          d.hidden = !hit;
          if (hit) inGroup++;
          if (words.length && hit) d.open = true;
          if (!words.length) d.open = false;
        });
        g.hidden = !inGroup;
        shown += inGroup;
      });
      none.hidden = shown > 0;
    });
  }

  // ---------- policy pages: show which section is being read ----------
  const tocLinks = [...document.querySelectorAll('.toc a')];
  if (tocLinks.length && 'IntersectionObserver' in window) {
    const heads = tocLinks.map((a) => document.getElementById(a.getAttribute('href').slice(1))).filter(Boolean);
    const mark = (id) => tocLinks.forEach((a) => a.classList.toggle('is-on', a.getAttribute('href') === `#${id}`));
    const seen = new IntersectionObserver(
      (entries) => {
        const top = entries.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
        if (top) mark(top.target.id);
      },
      { rootMargin: '-90px 0px -60% 0px' }
    );
    heads.forEach((h) => seen.observe(h));
    if (heads[0]) mark(heads[0].id);
  }

  // ---------- contact form ----------
  const form = document.querySelector('[data-contact]');
  if (form) {
    const out = form.querySelector('[data-out]');
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const data = Object.fromEntries(new FormData(form));
      const btn = form.querySelector('button[type="submit"]');
      btn.disabled = true;
      out.className = '';
      out.textContent = 'Sending...';
      try {
        const res = await fetch('/v1/contact', { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify(data) });
        const body = await res.json().catch(() => ({}));
        if (!res.ok) throw new Error(body.error || 'The message could not be sent. Try again.');
        form.reset();
        out.className = 'form__done';
        out.textContent = 'Thank you. Your message has reached the Klass8 team, and we will answer you soon.';
      } catch (err) {
        out.className = 'form__err';
        out.textContent = err.message;
      } finally {
        btn.disabled = false;
      }
    });
  }
})();
