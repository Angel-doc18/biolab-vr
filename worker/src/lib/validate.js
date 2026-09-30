// Strict input validation. Every route reads its body through these helpers so
// unknown fields are ignored and every accepted value has a known type and size.
import { HttpError } from './http.js';

const fail = (field, why) => {
  throw new HttpError(400, `${field} ${why}`, 'invalid_input');
};

export function str(value, field, { min = 0, max = 200, optional = false, pattern } = {}) {
  if (value === undefined || value === null || value === '') {
    if (optional) return null;
    fail(field, 'is required.');
  }
  if (typeof value !== 'string') fail(field, 'must be text.');
  const v = value.trim().replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, '');
  if (v.length < min) fail(field, `must be at least ${min} characters.`);
  if (v.length > max) fail(field, `must be at most ${max} characters.`);
  if (pattern && !pattern.test(v)) fail(field, 'is not in a valid format.');
  return v;
}

export function int(value, field, { min = -Infinity, max = Infinity, optional = false } = {}) {
  if (value === undefined || value === null || value === '') {
    if (optional) return null;
    fail(field, 'is required.');
  }
  const n = Number(value);
  if (!Number.isInteger(n)) fail(field, 'must be a whole number.');
  if (n < min || n > max) fail(field, `must be between ${min} and ${max}.`);
  return n;
}

export function oneOf(value, field, allowed, { optional = false } = {}) {
  if (value === undefined || value === null || value === '') {
    if (optional) return null;
    fail(field, 'is required.');
  }
  if (!allowed.includes(value)) fail(field, `must be one of: ${allowed.join(', ')}.`);
  return value;
}

export function bool(value, field, { optional = false } = {}) {
  if (value === undefined || value === null) {
    if (optional) return null;
    fail(field, 'is required.');
  }
  if (typeof value !== 'boolean') fail(field, 'must be true or false.');
  return value;
}

// Cameroon mobile numbers: 9 digits starting with 6, stored as 2376XXXXXXXX.
export function phone(value, field = 'Phone number', { optional = false } = {}) {
  if (value === undefined || value === null || value === '') {
    if (optional) return null;
    fail(field, 'is required.');
  }
  if (typeof value !== 'string') fail(field, 'must be text.');
  let digits = value.replace(/[^\d]/g, '');
  if (digits.startsWith('00237')) digits = digits.slice(2);
  if (digits.length === 9) digits = `237${digits}`;
  if (!/^2376\d{8}$/.test(digits)) fail(field, 'must be a valid Cameroon mobile number (6XX XX XX XX).');
  return digits;
}

export function email(value, field = 'Email', { optional = true } = {}) {
  const v = str(value, field, { max: 254, optional });
  if (v === null) return null;
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v)) fail(field, 'is not a valid address.');
  return v.toLowerCase();
}

export function password(value) {
  const v = str(value, 'Password', { min: 8, max: 128 });
  if (!/[A-Z]/.test(v) || !/[a-z]/.test(v) || !/\d/.test(v)) {
    fail('Password', 'must contain upper case, lower case and a number.');
  }
  return v;
}
