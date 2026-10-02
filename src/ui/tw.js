// Design tokens, taken verbatim from the Stitch Tailwind config,
// so screens can keep the exact utility classes of the approved design.
import { create } from 'twrnc';

export const C = {
  'tertiary-fixed-dim': '#ffb878',
  'primary-fixed': '#cde5ff',
  'surface-container-lowest': '#ffffff',
  outline: '#707881',
  'on-tertiary-container': '#ffdbbe',
  'inverse-surface': '#163348',
  'on-secondary-container': '#006f64',
  'on-tertiary-fixed-variant': '#6c3a00',
  'surface-tint': '#006399',
  'on-error-container': '#93000a',
  primary: '#00507d',
  'surface-container-highest': '#cce5ff',
  'on-primary': '#ffffff',
  'on-secondary': '#ffffff',
  background: '#f7f9ff',
  'on-background': '#001e31',
  surface: '#f7f9ff',
  'tertiary-container': '#955301',
  'surface-bright': '#f7f9ff',
  'on-primary-container': '#cbe4ff',
  'on-primary-fixed': '#001d32',
  'surface-dim': '#c1ddf9',
  'inverse-on-surface': '#e7f2ff',
  'tertiary-fixed': '#ffdcc1',
  'inverse-primary': '#94ccff',
  'error-container': '#ffdad6',
  tertiary: '#733f00',
  'surface-container': '#e2efff',
  'surface-container-low': '#ecf4ff',
  'on-surface': '#001e31',
  'primary-container': '#0369a1',
  'on-secondary-fixed': '#00201c',
  'surface-variant': '#cce5ff',
  'on-tertiary': '#ffffff',
  'on-secondary-fixed-variant': '#005048',
  'on-tertiary-fixed': '#2e1500',
  'outline-variant': '#c0c7d1',
  'secondary-fixed-dim': '#4fdbc8',
  secondary: '#006b5f',
  'on-error': '#ffffff',
  'secondary-container': '#6df5e1',
  'secondary-fixed': '#71f8e4',
  'on-surface-variant': '#40474f',
  error: '#ba1a1a',
  'surface-container-high': '#d7eaff',
  'on-primary-fixed-variant': '#004b74',
  'primary-fixed-dim': '#94ccff',
};

const type = (size, lh, weight, ls) => [size, { lineHeight: lh, fontWeight: weight, ...(ls ? { letterSpacing: ls } : {}) }];

const tw = create({
  theme: {
    extend: {
      colors: C,
      borderRadius: { DEFAULT: '0.125rem', lg: '0.25rem', xl: '0.5rem', full: '0.75rem' },
      spacing: {
        margin: '1rem',
        gutter: '1rem',
        'gutter-mobile': '0.75rem',
        'space-sm': '0.5rem',
        'space-xs': '0.25rem',
        'space-xl': '2rem',
        'margin-sm': '0.75rem',
        'space-md': '1rem',
        'space-lg': '1.5rem',
      },
      fontFamily: {
        'display-lg': ['Manrope'],
        'headline-lg': ['Manrope'],
        'headline-md': ['Manrope'],
        'headline-sm': ['Manrope'],
        'body-lg': ['Inter'],
        'body-md': ['Inter'],
        'body-sm': ['Inter'],
        'label-lg': ['Inter'],
        'label-md': ['Inter'],
        'label-sm': ['Inter'],
        body: ['Inter'],
      },
      fontSize: {
        'display-lg': type('32px', '40px', '700', '-0.02em'),
        'headline-lg': type('24px', '32px', '700', '-0.01em'),
        'headline-md': type('20px', '28px', '600'),
        'headline-sm': type('16px', '24px', '600'),
        'body-lg': type('16px', '24px', '400'),
        'body-md': type('14px', '20px', '400'),
        'body-sm': type('12px', '16px', '400'),
        'label-lg': type('14px', '20px', '600'),
        'label-md': type('12px', '16px', '600', '0.02em'),
        'label-sm': type('10px', '14px', '700', '0.04em'),
      },
    },
  },
});

export default tw;

// Hex with alpha, for the few places that need a raw colour (SVG, shadows).
export function alpha(hex, a) {
  const h = (C[hex] || hex).replace('#', '');
  const n = parseInt(h, 16);
  return `rgba(${(n >> 16) & 255}, ${(n >> 8) & 255}, ${n & 255}, ${a})`;
}

export const color = (c) => C[c] || c;
