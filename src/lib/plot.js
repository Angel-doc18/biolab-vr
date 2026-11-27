// A small, safe reader for the formulas the AI writes for graphs ("2*x^2 - 3x
// + 1", "sin(x)", "sqrt(x+4)"): no eval, only numbers, x, pi, e, + - * / ^,
// brackets and a few functions. compile(expr) returns f(x) or null.
const FUNCS = {
  sin: Math.sin,
  cos: Math.cos,
  tan: Math.tan,
  sqrt: Math.sqrt,
  abs: Math.abs,
  exp: Math.exp,
  ln: Math.log,
  log: Math.log10,
  asin: Math.asin,
  acos: Math.acos,
  atan: Math.atan,
};

function tokens(src) {
  const out = [];
  const s = String(src).replace(/\s+/g, '').replace(/×/g, '*').replace(/÷/g, '/').replace(/−/g, '-').replace(/²/g, '^2').replace(/³/g, '^3').replace(/π/g, 'pi');
  let i = 0;
  while (i < s.length) {
    const c = s[i];
    if (/[0-9.]/.test(c)) {
      let j = i;
      while (j < s.length && /[0-9.]/.test(s[j])) j++;
      out.push({ t: 'n', v: parseFloat(s.slice(i, j)) });
      i = j;
    } else if (/[a-z]/i.test(c)) {
      let j = i;
      while (j < s.length && /[a-z]/i.test(s[j])) j++;
      const w = s.slice(i, j).toLowerCase();
      // "2xsin" style runs: split known pieces
      let k = 0;
      while (k < w.length) {
        const f = Object.keys(FUNCS).sort((a, b) => b.length - a.length).find((n) => w.startsWith(n, k));
        if (f) {
          out.push({ t: 'f', v: f });
          k += f.length;
        } else if (w.startsWith('pi', k)) {
          out.push({ t: 'n', v: Math.PI });
          k += 2;
        } else if (w[k] === 'x') {
          out.push({ t: 'x' });
          k += 1;
        } else if (w[k] === 'e') {
          out.push({ t: 'n', v: Math.E });
          k += 1;
        } else throw new Error(`unknown "${w.slice(k)}"`);
      }
      i = j;
    } else if ('+-*/^()'.includes(c)) {
      out.push({ t: c });
      i++;
    } else throw new Error(`bad "${c}"`);
  }
  return out;
}

export function compile(expr) {
  try {
    const tk = tokens(expr);
    let p = 0;
    const peek = () => tk[p];
    const eat = (t) => (tk[p] && tk[p].t === t ? tk[p++] : null);
    const starts = (k) => k && (k.t === 'n' || k.t === 'x' || k.t === 'f' || k.t === '(');
    function expr0() {
      let a = term();
      for (;;) {
        if (eat('+')) {
          const b = term(), l = a;
          a = (x) => l(x) + b(x);
        } else if (eat('-')) {
          const b = term(), l = a;
          a = (x) => l(x) - b(x);
        } else return a;
      }
    }
    function term() {
      let a = unary();
      for (;;) {
        if (eat('*')) {
          const b = unary(), l = a;
          a = (x) => l(x) * b(x);
        } else if (eat('/')) {
          const b = unary(), l = a;
          a = (x) => l(x) / b(x);
        } else if (starts(peek())) {
          const b = power(), l = a; // implicit: 2x, 3(x+1), 2sin(x)
          a = (x) => l(x) * b(x);
        } else return a;
      }
    }
    function unary() {
      if (eat('-')) {
        const a = unary();
        return (x) => -a(x);
      }
      if (eat('+')) return unary();
      return power();
    }
    function power() {
      const base = primary();
      if (eat('^')) {
        const e = unary();
        return (x) => Math.pow(base(x), e(x));
      }
      return base;
    }
    function primary() {
      const k = tk[p++];
      if (!k) throw new Error('end');
      if (k.t === 'n') return () => k.v;
      if (k.t === 'x') return (x) => x;
      if (k.t === '(') {
        const a = expr0();
        if (!eat(')')) throw new Error(')');
        return a;
      }
      if (k.t === 'f') {
        const fn = FUNCS[k.v];
        const arg = eat('(') ? (() => { const a = expr0(); if (!eat(')')) throw new Error(')'); return a; })() : power();
        return (x) => fn(arg(x));
      }
      throw new Error(`unexpected ${k.t}`);
    }
    const f = expr0();
    if (p !== tk.length) throw new Error('trailing');
    f(1); // throws now rather than while drawing
    return f;
  } catch {
    return null;
  }
}
