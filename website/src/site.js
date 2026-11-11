// The site's few behaviours: the header turning solid on scroll, the menu on
// small screens, the hero photographs, the tutor's voice and the contact form.
(() => {
  const hd = document.querySelector('[data-hd]');
  const solid = () => hd && hd.classList.toggle('is-solid', window.scrollY > 24 || document.body.classList.contains('solid-top'));
  solid();
  window.addEventListener('scroll', solid, { passive: true });

  // Menu on small screens.
  const menu = document.querySelector('[data-menu]');
  if (menu && hd) {
    menu.addEventListener('click', () => {
      const open = !hd.classList.contains('is-open');
      hd.classList.toggle('is-open', open);
      menu.setAttribute('aria-expanded', String(open));
      document.body.style.overflow = open ? 'hidden' : '';
    });
    hd.querySelectorAll('.hd__nav a').forEach((a) =>
      a.addEventListener('click', () => {
        hd.classList.remove('is-open');
        menu.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      })
    );
  }

  // The page the visitor is on, in the menu.
  const here = location.pathname.replace(/\.html$/, '').replace(/\/$/, '') || '/';
  document.querySelectorAll('.hd__nav a').forEach((a) => {
    const to = a.getAttribute('href').replace(/\/$/, '') || '/';
    if (to === here) a.setAttribute('aria-current', 'page');
  });

  // Hero photographs: one after another, with a pause button.
  const slides = [...document.querySelectorAll('.hero__slide')];
  const dots = [...document.querySelectorAll('.hero__dot')];
  const pause = document.querySelector('.hero__pause');
  if (slides.length > 1) {
    let i = 0;
    let timer = null;
    const still = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const show = (n) => {
      i = (n + slides.length) % slides.length;
      slides.forEach((s, k) => s.classList.toggle('is-on', k === i));
      dots.forEach((d, k) => {
        d.classList.toggle('is-on', k === i);
        d.setAttribute('aria-current', k === i ? 'true' : 'false');
      });
    };
    const play = () => {
      clearInterval(timer);
      timer = setInterval(() => show(i + 1), 6500);
      pause && (pause.setAttribute('aria-label', 'Pause the photographs'), (pause.dataset.state = 'playing'));
    };
    const stop = () => {
      clearInterval(timer);
      timer = null;
      pause && (pause.setAttribute('aria-label', 'Play the photographs'), (pause.dataset.state = 'paused'));
    };
    dots.forEach((d, k) => d.addEventListener('click', () => (show(k), timer && play())));
    pause && pause.addEventListener('click', () => (timer ? stop() : play()));
    show(0);
    if (!still) play();
    else stop();
  }

  // The tutor's voice: one clip at a time.
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

  // Contact form: sent to Klass8's server.
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
