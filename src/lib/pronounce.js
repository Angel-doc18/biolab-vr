// Rewrites science text the way a teacher reads it aloud: formulae letter by
// letter, ions with their charge, units, symbols and abbreviations in words.
// Every voice in the app speaks through this, so they all say things the same way.

const ELEMENTS = new Set(
  'H He Li Be B C N O F Ne Na Mg Al Si P S Cl Ar K Ca Sc Ti V Cr Mn Fe Co Ni Cu Zn Ga Ge As Se Br Kr Rb Sr Ag Cd Sn Sb I Xe Cs Ba W Pt Au Hg Pb Bi Ra U'.split(' ')
);
// Capital-only formulae that are also ordinary words or abbreviations are only
// read as formulae when they are in this list.
const CAPS_FORMULAE = new Set(['KOH', 'CO', 'NO', 'OH', 'HF', 'HI', 'KI', 'KF', 'NH']);
// Two-letter symbols that are never ordinary words, read as letters even alone.
const LONE_SYMBOLS = new Set('Fe Cu Zn Mg Na Ca Pb Ag Cl Br Hg Mn Cr Ni Ba Li Sr Au Pt Ar Ne Kr Xe Si Al Rb Cs Sn Cd'.split(' '));

const SUB = '₀₁₂₃₄₅₆₇₈₉';
const SUP = '⁰¹²³⁴⁵⁶⁷⁸⁹';
// ¹ ² ³ sit outside the other superscript digits in Unicode, hence [⁰¹²³⁴-⁹].
const digitsOf = (s) => s.replace(/[₀-₉]/g, (c) => String(SUB.indexOf(c))).replace(/[⁰¹²³⁴-⁹]/g, (c) => String(SUP.indexOf(c)));
const esc = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

const W = {
  en: {
    plus: 'plus',
    minus: 'minus',
    gives: 'gives',
    equilibrium: 'is in equilibrium with',
    times: 'times',
    power: 'to the power',
    over: 'over',
    or: 'or',
    to: 'to',
    equals: 'equals',
    about: 'about',
    pm: 'plus or minus',
    lt: 'less than',
    gt: 'greater than',
    le: 'less than or equal to',
    ge: 'greater than or equal to',
    percent: 'percent',
    degrees: 'degrees',
    squared: 'squared',
    cubed: 'cubed',
    divided: 'divided by',
    delta: 'delta',
    in: 'in',
    states: { aq: 'aqueous', s: 'solid', l: 'liquid', g: 'gas' },
    roman: { I: 'one', II: 'two', III: 'three', IV: 'four', V: 'five', VI: 'six', VII: 'seven', VIII: 'eight', 0: 'zero' },
    group: 'Group',
  },
  fr: {
    plus: 'plus',
    minus: 'moins',
    gives: 'donne',
    equilibrium: 'est en équilibre avec',
    times: 'fois',
    power: 'puissance',
    over: 'sur',
    or: 'ou',
    to: 'à',
    equals: 'égale',
    about: 'environ',
    pm: 'plus ou moins',
    lt: 'inférieur à',
    gt: 'supérieur à',
    le: 'inférieur ou égal à',
    ge: 'supérieur ou égal à',
    percent: 'pour cent',
    degrees: 'degrés',
    squared: 'au carré',
    cubed: 'au cube',
    divided: 'divisé par',
    delta: 'delta',
    in: 'en',
    states: { aq: 'aqueux', s: 'solide', l: 'liquide', g: 'gaz' },
    roman: { I: 'un', II: 'deux', III: 'trois', IV: 'quatre', V: 'cinq', VI: 'six', VII: 'sept', VIII: 'huit', 0: 'zéro' },
    group: 'Groupe',
  },
};

// Units written anywhere in the text (compound ones first).
const UNITS_ANYWHERE = [
  ['mol/dm³', 'moles per cubic decimetre', 'moles par décimètre cube'],
  ['mol dm⁻³', 'moles per cubic decimetre', 'moles par décimètre cube'],
  ['g/dm³', 'grams per cubic decimetre', 'grammes par décimètre cube'],
  ['g/cm³', 'grams per cubic centimetre', 'grammes par centimètre cube'],
  ['kg/m³', 'kilograms per cubic metre', 'kilogrammes par mètre cube'],
  ['cm³/s', 'cubic centimetres per second', 'centimètres cubes par seconde'],
  ['cm³/min', 'cubic centimetres per minute', 'centimètres cubes par minute'],
  ['J/(kg °C)', 'joules per kilogram per degree Celsius', 'joules par kilogramme et par degré Celsius'],
  ['J/kg °C', 'joules per kilogram per degree Celsius', 'joules par kilogramme et par degré Celsius'],
  ['J/(kg K)', 'joules per kilogram per kelvin', 'joules par kilogramme et par kelvin'],
  ['J/kg', 'joules per kilogram', 'joules par kilogramme'],
  ['kJ/mol', 'kilojoules per mole', 'kilojoules par mole'],
  ['J/g', 'joules per gram', 'joules par gramme'],
  ['m/s²', 'metres per second squared', 'mètres par seconde au carré'],
  ['m/s', 'metres per second', 'mètres par seconde'],
  ['km/h', 'kilometres per hour', 'kilomètres par heure'],
  ['N/kg', 'newtons per kilogram', 'newtons par kilogramme'],
  ['N/m²', 'newtons per square metre', 'newtons par mètre carré'],
  ['N/m', 'newtons per metre', 'newtons par mètre'],
  ['g/100 g', 'grams per hundred grams', 'grammes pour cent grammes'],
  ['cm³', 'cubic centimetres', 'centimètres cubes'],
  ['dm³', 'cubic decimetres', 'décimètres cubes'],
  ['mm³', 'cubic millimetres', 'millimètres cubes'],
  ['m³', 'cubic metres', 'mètres cubes'],
  ['cm²', 'square centimetres', 'centimètres carrés'],
  ['mm²', 'square millimetres', 'millimètres carrés'],
  ['m²', 'square metres', 'mètres carrés'],
  ['°C', 'degrees Celsius', 'degrés Celsius'],
  ['µm', 'micrometres', 'micromètres'],
  ['μm', 'micrometres', 'micromètres'],
  ['kΩ', 'kilohms', 'kilohms'],
  ['Ω', 'ohms', 'ohms'],
];

// Units read only straight after a number: [symbol, one, many, French one, French many].
const UNITS_AFTER_NUMBER = [
  ['kWh', 'kilowatt hour', 'kilowatt hours', 'kilowattheure', 'kilowattheures'],
  ['mm', 'millimetre', 'millimetres', 'millimètre', 'millimètres'],
  ['cm', 'centimetre', 'centimetres', 'centimètre', 'centimètres'],
  ['dm', 'decimetre', 'decimetres', 'décimètre', 'décimètres'],
  ['km', 'kilometre', 'kilometres', 'kilomètre', 'kilomètres'],
  ['nm', 'nanometre', 'nanometres', 'nanomètre', 'nanomètres'],
  ['kg', 'kilogram', 'kilograms', 'kilogramme', 'kilogrammes'],
  ['mg', 'milligram', 'milligrams', 'milligramme', 'milligrammes'],
  ['ms', 'millisecond', 'milliseconds', 'milliseconde', 'millisecondes'],
  ['min', 'minute', 'minutes', 'minute', 'minutes'],
  ['mins', 'minute', 'minutes', 'minute', 'minutes'],
  ['mol', 'mole', 'moles', 'mole', 'moles'],
  ['ml', 'millilitre', 'millilitres', 'millilitre', 'millilitres'],
  ['mL', 'millilitre', 'millilitres', 'millilitre', 'millilitres'],
  ['mA', 'milliamp', 'milliamps', 'milliampère', 'milliampères'],
  ['mV', 'millivolt', 'millivolts', 'millivolt', 'millivolts'],
  ['kV', 'kilovolt', 'kilovolts', 'kilovolt', 'kilovolts'],
  ['kW', 'kilowatt', 'kilowatts', 'kilowatt', 'kilowatts'],
  ['kJ', 'kilojoule', 'kilojoules', 'kilojoule', 'kilojoules'],
  ['MJ', 'megajoule', 'megajoules', 'mégajoule', 'mégajoules'],
  ['kPa', 'kilopascal', 'kilopascals', 'kilopascal', 'kilopascals'],
  ['Pa', 'pascal', 'pascals', 'pascal', 'pascals'],
  ['kHz', 'kilohertz', 'kilohertz', 'kilohertz', 'kilohertz'],
  ['MHz', 'megahertz', 'megahertz', 'mégahertz', 'mégahertz'],
  ['Hz', 'hertz', 'hertz', 'hertz', 'hertz'],
  ['bpm', 'beat per minute', 'beats per minute', 'battement par minute', 'battements par minute'],
  ['m', 'metre', 'metres', 'mètre', 'mètres'],
  ['g', 'gram', 'grams', 'gramme', 'grammes'],
  ['s', 'second', 'seconds', 'seconde', 'secondes'],
  ['h', 'hour', 'hours', 'heure', 'heures'],
  ['l', 'litre', 'litres', 'litre', 'litres'],
  ['L', 'litre', 'litres', 'litre', 'litres'],
  ['A', 'amp', 'amps', 'ampère', 'ampères'],
  ['V', 'volt', 'volts', 'volt', 'volts'],
  ['W', 'watt', 'watts', 'watt', 'watts'],
  ['J', 'joule', 'joules', 'joule', 'joules'],
  ['N', 'newton', 'newtons', 'newton', 'newtons'],
  ['K', 'kelvin', 'kelvin', 'kelvin', 'kelvins'],
  ['M', 'molar', 'molar', 'molaire', 'molaire'],
];

const ABBREVIATIONS = {
  en: [
    ['e.g.', 'for example'],
    ['i.e.', 'that is'],
    ['etc.', 'and so on'],
    ['r.t.p.', 'room temperature and pressure'],
    ['s.t.p.', 'standard temperature and pressure'],
    ['b.p.', 'boiling point'],
    ['m.p.', 'melting point'],
    ['p.d.', 'potential difference'],
    ['e.m.f.', 'E M F'],
    ['a.c.', 'A C'],
    ['d.c.', 'D C'],
    ['approx.', 'approximately'],
    ['conc.', 'concentrated'],
    ['dil.', 'dilute'],
    ['Fig.', 'Figure'],
    ['vs.', 'versus'],
    ['vs', 'versus'],
  ],
  fr: [
    ['p. ex.', 'par exemple'],
    ['c.-à-d.', 'c’est-à-dire'],
    ['etc.', 'et cetera'],
    ['conc.', 'concentré'],
    ['dil.', 'dilué'],
    ['Fig.', 'Figure'],
    ['e.g.', 'par exemple'],
  ],
};

// Words spelled letter by letter.
const SPELL = ['pH', 'Rf', 'DNA', 'RNA', 'ATP', 'ADP', 'UV', 'LED', 'LDR', 'IR'];

// One formula or ion, for example H₂O, Ca(OH)₂, Fe³⁺, SO₄²⁻, NaCl, Cu2+.
const FORMULA = /(?<![A-Za-z0-9])((?:[A-Z][a-z]?[0-9₀-₉]*|\((?:[A-Z][a-z]?[0-9₀-₉]*)+\)[0-9₀-₉]*)+)((?:[⁰¹²³⁴-⁹]*[⁺⁻])|(?:\d?[+-](?=$|[\s,.;:)])))?(?![a-z])/g;

function parseFormula(body) {
  const parts = [];
  const re = /\(|\)|[A-Z][a-z]?|[0-9₀-₉]+/g;
  let m;
  let count = 0;
  while ((m = re.exec(body))) {
    const t = m[0];
    if (t === '(' || t === ')') continue;
    if (/^[A-Z]/.test(t)) {
      if (!ELEMENTS.has(t)) return null;
      count += 1;
      parts.push(t.toUpperCase().split('').join(' '));
    } else {
      parts.push(digitsOf(t));
    }
  }
  return { spoken: parts.join(' '), count };
}

function speakFormula(token, body, charge, w) {
  const f = parseFormula(body);
  if (!f) return token;
  const hasDigit = /[0-9₀-₉]/.test(body);
  const hasLower = /[a-z]/.test(body);
  if (!charge && !hasDigit) {
    if (f.count < 2 && !LONE_SYMBOLS.has(body)) return token; // I, He or No alone is usually a word
    if (!hasLower && !CAPS_FORMULAE.has(body)) return token;
  }
  let said = f.spoken;
  if (charge) {
    const n = digitsOf(charge.replace(/[⁺⁻+-]/g, ''));
    const sign = /[⁻-]/.test(charge) ? w.minus : w.plus;
    said += `${n ? ` ${n}` : ''} ${sign}`;
  }
  return ` ${said} `;
}

export function forSpeech(input, lang = 'en') {
  const L = lang === 'fr' ? 'fr' : 'en';
  const w = W[L];
  let s = String(input || '');

  s = s.replace(/\*\*|__|`|#+\s/g, '').replace(/\s*\n+\s*/g, '. ').replace(/\.\s*\./g, '.');

  for (const [abbr, said] of ABBREVIATIONS[L]) {
    s = s.replace(new RegExp(`(^|[\\s(])${esc(abbr)}(?=[\\s,;:)]|$)`, 'g'), `$1${said}`);
  }

  // Oxidation states and group numbers in Roman numerals.
  s = s.replace(/\s?\((I|II|III|IV|V|VI|VII)\)/g, (m, r) => ` ${w.roman[r]}`);
  s = s.replace(/\b(Group|group|Groupe|groupe)\s+(VIII|VII|VI|IV|V|III|II|I|0)\b/g, (m, g, r) => `${g} ${w.roman[r]}`);

  // State symbols after a formula.
  s = s.replace(/\((aq|s|l|g)\)/g, (m, st) => ` ${w.states[st]}`);

  // Standard form: 6 × 10²³, 1.6 × 10⁻¹⁹, 10^23.
  s = s.replace(/(\d)\s*[×x]\s*10\s*([⁻]?[⁰¹²³⁴-⁹]+)/g, (m, a, e) => `${a} ${w.times} 10 ${w.power} ${e.startsWith('⁻') ? `${w.minus} ` : ''}${digitsOf(e.replace('⁻', ''))}`);
  s = s.replace(/10\s*([⁻]?[⁰¹²³⁴-⁹]+)/g, (m, e) => `10 ${w.power} ${e.startsWith('⁻') ? `${w.minus} ` : ''}${digitsOf(e.replace('⁻', ''))}`);
  s = s.replace(/10\^(-?\d+)/g, (m, e) => `10 ${w.power} ${e.startsWith('-') ? `${w.minus} ` : ''}${e.replace('-', '')}`);

  // Axis labels such as "Time / s" or "Volume of gas / cm³".
  s = s.replace(/\s\/\s?(cm³|dm³|°C|Ω|mm|cm|m|s|min|g|kg|N|V|A|J|K|bpm|mA|Hz)(?=$|[\s,.;:)])/g, (m, u) => {
    const row = UNITS_AFTER_NUMBER.find((r) => r[0] === u);
    return ` ${w.in} ${row ? row[L === 'fr' ? 4 : 2] : u}`;
  });

  for (const [u, en, fr] of UNITS_ANYWHERE) s = s.split(u).join(` ${L === 'fr' ? fr : en} `);

  const unitAlt = UNITS_AFTER_NUMBER.map(([u]) => esc(u)).join('|');
  s = s.replace(new RegExp(`(\\d(?:[\\d.,]*\\d)?)\\s?(${unitAlt})(?![A-Za-z0-9²³])`, 'g'), (m, n, u) => {
    const row = UNITS_AFTER_NUMBER.find((r) => r[0] === u);
    const one = n === '1' || (L === 'fr' && /^[01]([.,]\d+)?$/.test(n));
    return `${n} ${L === 'fr' ? row[one ? 3 : 4] : row[one ? 1 : 2]}`;
  });

  // A number written straight before a formula, as in 3CO₂ or 2Fe.
  s = s.replace(/(\d)(?=[A-Z][a-z]?[0-9₀-₉(A-Z])/g, '$1 ');
  s = s.replace(/(\s|^)(\d)(?=(?:Fe|Cu|Zn|Mg|Na|Ca|Al|Pb|Ag|K|H|O|C|N)(?![a-z]))/g, '$1$2 ');

  s = s.replace(FORMULA, (token, body, charge) => speakFormula(token, body, charge, w));

  for (const word of SPELL) s = s.replace(new RegExp(`\\b${word}\\b`, 'g'), ` ${word.toUpperCase().split('').join(' ')} `);

  s = s
    .replace(/\s*⇌\s*/g, ` ${w.equilibrium} `)
    .replace(/\s*(→|->)\s*/g, ` ${w.gives} `)
    .replace(/(\d)\s*[–-]\s*(\d)/g, `$1 ${w.to} $2`)
    .replace(/\s+–\s+/g, ', ')
    .replace(/\s*×\s*/g, ` ${w.times} `)
    .replace(/\s*÷\s*/g, ` ${w.divided} `)
    .replace(/\s*±\s*/g, ` ${w.pm} `)
    .replace(/\s*≈\s*/g, ` ${w.about} `)
    .replace(/\s*≤\s*/g, ` ${w.le} `)
    .replace(/\s*≥\s*/g, ` ${w.ge} `)
    .replace(/\s+<\s+/g, ` ${w.lt} `)
    .replace(/\s+>\s+/g, ` ${w.gt} `)
    .replace(/\s+=\s+/g, ` ${w.equals} `)
    .replace(/\s+\+\s+/g, ` ${w.plus} `)
    .replace(/(\d)\s*%/g, `$1 ${w.percent}`)
    .replace(/Δ\s*/g, `${w.delta} `)
    .replace(/[²]/g, ` ${w.squared}`)
    .replace(/[³]/g, ` ${w.cubed}`)
    .replace(/°/g, ` ${w.degrees}`)
    .replace(/(\d)\s*\/\s*(\d)/g, `$1 ${w.over} $2`)
    .replace(/(\d)\s*\/\s*([A-Za-z])/g, `$1 ${w.over} $2`)
    .replace(/\b([A-Za-z])\s*\/\s*([A-Za-z])\b/g, `$1 ${w.over} $2`)
    .replace(/([A-Za-zÀ-ÿ])\/([A-Za-zÀ-ÿ])/g, `$1 ${w.or} $2`)
    .replace(/[₀-₉⁰¹⁴-⁹]/g, (c) => digitsOf(c))
    .replace(/[⁺]/g, ` ${w.plus}`)
    .replace(/[⁻]/g, ` ${w.minus}`)
    .replace(/λ/g, ' lambda ')
    .replace(/ρ/g, ' rho ')
    .replace(/θ/g, ' theta ')
    .replace(/[“”"]/g, '')
    .replace(/\s+([,.;:!?])/g, '$1')
    .replace(/([,.;:])(?=[^\s\d])/g, '$1 ')
    .replace(/\s{2,}/g, ' ')
    .trim();
  return s;
}

// Splits text into pieces of whole sentences, each short enough for one request.
export function speechChunks(text, max = 360) {
  const sentences = String(text || '').match(/[^.!?;:]+[.!?;:]*\s*/g) || [];
  const out = [];
  let cur = '';
  for (const raw of sentences) {
    let sent = raw.trim();
    while (sent.length > max) {
      const cut = sent.lastIndexOf(',', max) > max / 2 ? sent.lastIndexOf(',', max) + 1 : sent.lastIndexOf(' ', max);
      const at = cut > 0 ? cut : max;
      if (cur) {
        out.push(cur);
        cur = '';
      }
      out.push(sent.slice(0, at).trim());
      sent = sent.slice(at).trim();
    }
    if (!sent) continue;
    if (cur && cur.length + sent.length + 1 > max) {
      out.push(cur);
      cur = sent;
    } else cur = cur ? `${cur} ${sent}` : sent;
  }
  if (cur) out.push(cur);
  return out;
}
