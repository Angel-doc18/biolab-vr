// A database with the interface of Cloudflare D1, kept in one SQLite file, so
// the API's queries run unchanged on Klass8's own server.
import { DatabaseSync } from 'node:sqlite';

// D1 turns booleans into 1 and 0; SQLite has no boolean type.
const value = (v) => (v === undefined ? null : typeof v === 'boolean' ? Number(v) : v instanceof ArrayBuffer ? new Uint8Array(v) : v);
// Statements that give rows back (the others report how many rows they changed).
const gives = (sql) => /^\s*(select|with|pragma|explain|values)\b/i.test(sql) || /\breturning\b/i.test(sql);
// SQLite rows have no prototype; D1 rows are plain objects.
const row = (r) => (r ? { ...r } : null);

class Statement {
  constructor(db, sql, params = []) {
    this.db = db;
    this.sql = sql;
    this.params = params;
  }

  bind(...params) {
    return new Statement(this.db, this.sql, params.map(value));
  }

  // Runs now and answers like D1's all() and run(); batch() uses it inside a transaction.
  execute() {
    const st = this.db.statement(this.sql);
    if (gives(this.sql)) {
      const results = st.all(...this.params).map(row);
      return { success: true, results, meta: { changes: 0, rows_read: results.length } };
    }
    const r = st.run(...this.params);
    return { success: true, results: [], meta: { changes: Number(r.changes), last_row_id: Number(r.lastInsertRowid) } };
  }

  async first(column) {
    const r = row(this.db.statement(this.sql).get(...this.params));
    if (!r) return null;
    return column ? (r[column] ?? null) : r;
  }

  async all() {
    return this.execute();
  }

  async run() {
    return this.execute();
  }

  async raw() {
    return this.execute().results.map((r) => Object.values(r));
  }
}

export class D1 {
  constructor(file) {
    this.sqlite = new DatabaseSync(file);
    this.sqlite.exec('PRAGMA journal_mode = WAL; PRAGMA synchronous = NORMAL; PRAGMA busy_timeout = 5000; PRAGMA foreign_keys = ON;');
    this.cache = new Map();
  }

  statement(sql) {
    let st = this.cache.get(sql);
    if (!st) {
      st = this.sqlite.prepare(sql);
      if (this.cache.size > 500) this.cache.clear();
      this.cache.set(sql, st);
    }
    return st;
  }

  prepare(sql) {
    return new Statement(this, sql);
  }

  // All or nothing, as in D1.
  async batch(statements) {
    this.sqlite.exec('BEGIN');
    try {
      const out = statements.map((s) => s.execute());
      this.sqlite.exec('COMMIT');
      return out;
    } catch (e) {
      this.sqlite.exec('ROLLBACK');
      throw e;
    }
  }

  async exec(sql) {
    this.sqlite.exec(sql);
    return { count: 1, duration: 0 };
  }
}
