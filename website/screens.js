// The four app screens shown inside the phones on the home and features pages.
// Each one is the inside of a .phone: status bar, the screen itself, the app's
// tab bar, and two small notes that sit beside the phone on wide screens.
const svg = (d, extra = '') => `<svg viewBox="0 0 24 24" aria-hidden="true"${extra}>${d}</svg>`;
const stroke = (d) => svg(`<path d="${d}" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`);

const icon = {
  back: stroke('M15 5l-7 7 7 7'),
  home: stroke('M4 11 12 4l8 7v8a1 1 0 0 1-1 1h-4v-6h-6v6H5a1 1 0 0 1-1-1z'),
  learn: stroke('M4 5.5A1.5 1.5 0 0 1 5.5 4H11v16H5.5A1.5 1.5 0 0 1 4 18.5zM20 5.5A1.5 1.5 0 0 0 18.5 4H13v16h5.5a1.5 1.5 0 0 0 1.5-1.5z'),
  lab: stroke('M9 3h6M10 3v6l-5 9a2 2 0 0 0 1.7 3h10.6a2 2 0 0 0 1.7-3l-5-9V3M7.5 15h9'),
  exams: stroke('M12 21a8 8 0 1 0 0-16 8 8 0 0 0 0 16zM12 9v4l2.5 1.5M10 2h4'),
  me: stroke('M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM4 21a8 8 0 0 1 16 0'),
  camera: stroke('M4 8h3l1.5-2h7L17 8h3v11H4zM12 16.2a3.2 3.2 0 1 0 0-6.4 3.2 3.2 0 0 0 0 6.4z'),
  upload: stroke('M12 16V5m-5 5 5-5 5 5M5 19h14'),
  shield: stroke('M12 3 5 6v5c0 4.4 3 8.3 7 9.5 4-1.2 7-5.1 7-9.5V6zM9 12l2 2 4-4'),
  send: stroke('M5 12h13M13 6l6 6-6 6'),
  speaker: stroke('M5 9v6h3l5 4V5L8 9zM16.5 8.5a5 5 0 0 1 0 7M19 6a8.5 8.5 0 0 1 0 12'),
  clock: stroke('M12 21a8 8 0 1 0 0-16 8 8 0 0 0 0 16zM12 9v4l2.5 1.5'),
  check: stroke('m5 12.5 4.5 4.5L19 7.5'),
  cross: stroke('M7 7l10 10M17 7 7 17'),
  pen: stroke('M4 20h4L19 9l-4-4L4 16zM13.5 6.5l4 4'),
  list: stroke('M9 6h11M9 12h11M9 18h11M4.5 6h.01M4.5 12h.01M4.5 18h.01'),
  play: svg('<path d="M8 5.5v13l11-6.5z" fill="currentColor"/>'),
};

const status = `<div class="st" aria-hidden="true"><b>9:41</b><i class="st__island"></i><span class="st__icons">
  <svg viewBox="0 0 18 12"><rect x="0" y="8" width="3" height="4" rx="1"/><rect x="5" y="5.5" width="3" height="6.5" rx="1"/><rect x="10" y="3" width="3" height="9" rx="1"/><rect x="15" y="0" width="3" height="12" rx="1"/></svg>
  <svg viewBox="0 0 16 12"><path d="M8 11.5 5.6 9a3.4 3.4 0 0 1 4.8 0zM3.4 6.8a6.5 6.5 0 0 1 9.2 0l-1.4 1.4a4.5 4.5 0 0 0-6.4 0zM1.2 4.6a9.6 9.6 0 0 1 13.6 0l-1.4 1.4a7.6 7.6 0 0 0-10.8 0z"/></svg>
  <svg viewBox="0 0 27 12"><rect x="0.5" y="0.5" width="22" height="11" rx="3.2" fill="none" stroke="currentColor" opacity="0.45"/><rect x="2.5" y="2.5" width="16" height="7" rx="1.8"/><rect x="24" y="4" width="2" height="4" rx="1" opacity="0.45"/></svg>
</span></div>`;

const tabbar = (on) => `<nav class="tb" aria-hidden="true">${[
  ['home', 'Home'],
  ['learn', 'Learn'],
  ['lab', 'Lab'],
  ['exams', 'Exams'],
  ['me', 'Me'],
].map(([k, label]) => `<span class="tb__i${k === on ? ' is-on' : ''}">${icon[k]}<small>${label}</small></span>`).join('')}</nav><i class="home-bar" aria-hidden="true"></i>`;

const head = (title, meta, extra = '') => `<div class="sh"><span class="sh__back">${icon.back}</span><div class="sh__t"><small>${meta}</small><b>${title}</b></div>${extra}</div>`;

const notes = (a, b) => `<div class="note note--a" aria-hidden="true"><span class="note__i">${a[0]}</span><span>${a[1]}</span></div>
<div class="note note--b" aria-hidden="true"><span class="note__i">${b[0]}</span><span>${b[1]}</span></div>`;

// The bars of the voice player: played bars are amber, the rest grey.
const wave = Array.from({ length: 30 }, (_, k) => {
  const h = Math.round(28 + 62 * Math.abs(Math.sin(k * 1.7) * Math.cos(k * 0.45)));
  return `<i style="--h:${h}%;--d:${((k % 6) * 0.11).toFixed(2)}s"${k < 12 ? ' class="on"' : ''}></i>`;
}).join('');

const SCREENS = {
  listen: ({ heart }) => `<div class="phone__screen">${status}
${head('The heart and circulation', 'Biology, Form 4', '<span class="sh__lang">EN</span>')}
<div class="bar-progress" aria-hidden="true"><i style="width: 38%"></i></div>
<div class="scr scr--lesson">
  <span class="kicker">Lesson 3.1 of 8</span>
  <p>Mammals have a <b>double circulation</b>: blood passes through the heart twice for each complete circuit of the body.</p>
  <p><mark class="say">The pulmonary circulation carries blood to the lungs, and the systemic circulation carries it to the rest of the body.</mark></p>
  <ul class="keys" aria-label="Key words"><li>Atrium</li><li>Ventricle</li><li>Vena cava</li></ul>
  <figure class="fig">${heart}<figcaption>Figure 3.2: section through the heart</figcaption></figure>
  <div class="tip"><b>Exam tip</b>Say which side of the heart carries oxygenated blood.</div>
</div>
<div class="pl">
  <span class="pl__btn">${icon.play}</span>
  <div class="pl__wave" aria-hidden="true">${wave}</div>
  <span class="pl__time">0:13</span>
</div>
${tabbar('learn')}</div>
${notes([icon.speaker, 'Read aloud in English or French'], [icon.learn, 'Words light up as they are read'])}`,

  solve: () => `<div class="phone__screen">${status}
${head('Workspace', 'Chemistry, Form 5')}
<div class="scr scr--solve">
  <div class="seg" aria-hidden="true"><span class="is-on">${icon.camera}Snap it</span><span>${icon.upload}Upload</span></div>
  <div class="snap">
    <i class="snap__c snap__c--tl"></i><i class="snap__c snap__c--tr"></i><i class="snap__c snap__c--bl"></i><i class="snap__c snap__c--br"></i>
    <i class="snap__scan" aria-hidden="true"></i>
    <p><b>3.</b> What mass of calcium oxide forms when 25 g of calcium carbonate is heated? (Ca = 40, C = 12, O = 16)</p>
  </div>
  <ol class="sol">
    <li><span>Mr of CaCO₃ = 40 + 12 + 48 = 100</span></li>
    <li><span>Moles = 25 ÷ 100 = 0.25 mol</span></li>
    <li><span>1 mol CaCO₃ gives 1 mol CaO</span></li>
    <li><span>Mass = 0.25 × 56 = <b>14 g</b></span></li>
  </ol>
  <p class="checked">${icon.shield}Checked a second time</p>
  <div class="more-q"><b>Try one like it</b>What mass of magnesium oxide forms when 6 g of magnesium burns in air? (Mg = 24, O = 16)</div>
</div>
<div class="ask" aria-hidden="true"><span>Ask about any step</span><i>${icon.send}</i></div>
${tabbar('home')}</div>
${notes([icon.camera, 'Read from your photo'], [icon.shield, 'Worked again before you see it'])}`,

  mark: () => `<div class="phone__screen">${status}
${head('Mark my working', 'Physics, Form 4')}
<div class="scr scr--mark">
  <div class="score">
    <svg class="ring" viewBox="0 0 64 64" aria-hidden="true"><circle cx="32" cy="32" r="27"/><circle class="ring__on" cx="32" cy="32" r="27" pathLength="100"/></svg>
    <span class="score__n"><b>2</b>/4</span>
    <div class="score__t"><b>2 marks out of 4</b><small>Paper 2, question 3(b)</small></div>
  </div>
  <figure class="sheet" aria-label="The photo of the working">
    <p>v = u + at = 0 + 2.5 × 8 <em class="tk">${icon.check}</em></p>
    <p>v = 20 m/s <em class="tk">${icon.check}</em></p>
    <p>s = ½ × 2.5 × 8 = 10 m <em class="tk tk--no">${icon.cross}</em></p>
  </figure>
  <ul class="rows">
    <li class="r-ok"><span>${icon.check}</span>v = u + at, with the values put in</li>
    <li class="r-ok"><span>${icon.check}</span>v = 20 m/s, with its unit</li>
    <li class="r-no"><span>${icon.cross}</span>The time was not squared in s = ½at²</li>
    <li class="r-no"><span>${icon.cross}</span>s should be 80 m</li>
  </ul>
  <div class="fb"><b>To fix</b>Square the time first: ½ × 2.5 × 8² = 80 m.</div>
  <div class="nav" aria-hidden="true"><span>Model answer</span><span class="is-main">Try it again</span></div>
</div>
${tabbar('exams')}</div>
${notes([icon.pen, 'Answer on paper, then snap it'], [icon.list, 'Every point of the mark scheme'])}`,

  exam: () => `<div class="phone__screen">${status}
${head('Paper 1', 'Biology, Form 5', `<span class="sh__timer">${icon.clock}1:04:37</span>`)}
<div class="qbar" aria-hidden="true"><span>Question 12 of 50</span><i><b style="width: 24%"></b></i></div>
<div class="scr scr--exam">
  <p class="q">Which blood vessel carries oxygenated blood from the lungs to the heart?</p>
  <ul class="opts">
    <li><b>A</b>Pulmonary artery</li>
    <li class="is-right"><b>B</b>Pulmonary vein<span>${icon.check}</span></li>
    <li><b>C</b>Vena cava</li>
    <li><b>D</b>Aorta</li>
  </ul>
  <div class="why"><b>Correct</b>The pulmonary vein is the only vein that carries oxygenated blood.</div>
  <div class="est" aria-hidden="true"><span>So far, 10 of 12 correct</span><b>Grade A</b></div>
  <div class="nav" aria-hidden="true"><span>Previous</span><span class="is-main">Next question</span></div>
</div>
${tabbar('exams')}</div>
${notes([icon.clock, 'Timed like the GCE'], [icon.check, 'The reason behind every answer'])}`,

  pay: ({ priceYear }) => `<div class="phone__screen">${status}
${head('Payment', 'Klass8 platform charges')}
<div class="scr scr--pay">
  <span class="kicker">Your plan</span>
  <div class="plan-pick"><div><b>One year</b><small>365 days of everything</small></div><strong>${priceYear}</strong></div>
  <span class="kicker">Your network</span>
  <div class="net" aria-hidden="true"><span class="is-on"><i class="net__dot net__dot--mtn"></i>MTN Mobile Money</span><span><i class="net__dot net__dot--orange"></i>Orange Money</span></div>
  <span class="kicker">Mobile money number</span>
  <div class="field" aria-hidden="true"><span>+237</span><b>6 7X XX XX XX</b></div>
  <div class="pay-btn" aria-hidden="true">Pay ${priceYear}</div>
  <p class="pay-note">${icon.shield}You approve the payment on your own phone with your PIN. Klass8 never asks for it.</p>
  <p class="pay-by">Payments processed by Fapshi</p>
</div>
${tabbar('me')}</div>
${notes([icon.check, 'Nothing renews automatically'], [icon.shield, 'Your PIN stays on your phone'])}`,

  report: () => `<div class="phone__screen">${status}
${head('Weekly report', 'Brenda, Form 4')}
<div class="scr scr--report">
  <div class="rep-top">
    <div><small>Time revising this week</small><b>5 h 20 min</b><span class="up">1 h more than last week</span></div>
  </div>
  <div class="days" aria-hidden="true">${[['M', 62], ['T', 48], ['W', 80], ['T', 36], ['F', 70], ['S', 100], ['S', 14]].map(([d, h]) => `<span><i style="--h:${h}%"></i><small>${d}</small></span>`).join('')}</div>
  <div class="rep-two"><div><b>3</b><small>topics finished</small></div><div><b>72%</b><small>average score</small></div></div>
  <ul class="done">
    <li><span>The heart and circulation</span><b>80%</b></li>
    <li><span>Blood vessels</span><b>70%</b></li>
    <li><span>Respiration</span><b class="lo">58%</b></li>
  </ul>
  <div class="fb"><b>Worth a word</b>Respiration was the hardest topic this week. Its practice test is ready in the app.</div>
</div>
${tabbar('home')}</div>
${notes([icon.clock, 'A report every week'], [icon.me, 'Free for parents'])}`,

  class: () => `<div class="phone__screen">${status}
${head('Form 4 Biology', '38 students')}
<div class="scr scr--class">
  <div class="seg" aria-hidden="true"><span class="is-on">${icon.list}Topics</span><span>${icon.me}Students</span></div>
  <span class="kicker">Hardest topics this week</span>
  <ul class="bars">
    ${[['Respiration', 48], ['Enzymes', 55], ['Transport in plants', 63], ['The heart and circulation', 81]].map(([t, p]) => `<li><span>${t}</span><b>${p}%</b><i><em style="width:${p}%"${p < 60 ? ' class="lo"' : ''}></em></i></li>`).join('')}
  </ul>
  <div class="setwork"><div><b>Set work</b><small>A 10 question test on Respiration, due Friday</small></div><span class="pay-btn">Set it</span></div>
  <div class="est"><span>Finished last week's work</span><b>31 of 38</b></div>
</div>
${tabbar('learn')}</div>
${notes([icon.list, 'Work set from the syllabus'], [icon.exams, 'Results for every topic'])}`,
};

module.exports = (name, data = {}) => {
  if (!SCREENS[name]) throw new Error(`screens.js: no screen called ${name}`);
  return SCREENS[name](data);
};
