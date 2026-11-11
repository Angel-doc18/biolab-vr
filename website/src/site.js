// Klass8 website behaviour: the header, the menu, the hero photographs, motion
// on scroll, the feature and level tabs, the tutor's voice and the contact form.
(() => {
  window.K8 = true; // the page's fallback shows everything if this never runs
  const root = document.documentElement;
  const still = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (still) root.classList.add('no-motion');

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
    const close = () => {
      hd.classList.remove('is-open');
      menu.setAttribute('aria-expanded', 'false');
    };
    menu.addEventListener('click', () => {
      const open = !hd.classList.contains('is-open');
      hd.classList.toggle('is-open', open);
      menu.setAttribute('aria-expanded', String(open));
    });
    hd.querySelectorAll('.hd__nav a').forEach((a) => a.addEventListener('click', close));
    document.addEventListener('keydown', (e) => e.key === 'Escape' && close());
  }

  // ---------- the page the visitor is on ----------
  const here = location.pathname.replace(/\.html$/, '').replace(/\/$/, '') || '/';
  document.querySelectorAll('.hd__nav a').forEach((a) => {
    const to = a.getAttribute('href').replace(/\/$/, '') || '/';
    if (to === here) a.setAttribute('aria-current', 'page');
  });

  // ---------- hero photographs ----------
  const hero = document.querySelector('.hero');
  const slides = [...document.querySelectorAll('.hero__slide')];
  const bars = [...document.querySelectorAll('.hero__bar')];
  const pause = document.querySelector('.hero__pause');
  if (hero && slides.length > 1) {
    let i = 0;
    let timer = null;
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
    bars.forEach((b, k) => b.addEventListener('click', () => (show(k), timer && play())));
    pause?.addEventListener('click', () => (timer ? stop() : play()));
    show(0);
    still ? stop() : play();
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
  if (!still && drift.length) {
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
    audio.addEventListener('play', () => btn.classList.add('is-playing'));
    btn.addEventListener('click', () => {
      if (!audio.paused) return audio.pause();
      if (current && current !== audio) current.pause();
      current = audio;
      audio.currentTime = 0;
      audio.play().catch(() => {});
    });
  });

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
