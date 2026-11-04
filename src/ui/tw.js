// Design tokens, with the utility class names of the approved Stitch design.
// The colours follow the Klass8 logo: navy #043480 primaries, navy-tinted
// neutrals and the logo amber as the accent (tertiary).
import { create } from 'twrnc';

export const C = {
  'tertiary-fixed-dim': '#ffba20',
  'primary-fixed': '#dbe4ff',
  'surface-container-lowest': '#ffffff',
  outline: '#727889',
  'on-tertiary-container': '#2b1c00',
  'inverse-surface': '#1b2a4a',
  'on-secondary-container': '#006f64',
  'on-tertiary-fixed-variant': '#5c3e00',
  'surface-tint': '#1c4ea3',
  'on-error-container': '#93000a',
  primary: '#043480',
  'surface-container-highest': '#d2dbf0',
  'on-primary': '#ffffff',
  'on-secondary': '#ffffff',
  background: '#f8f9ff',
  'on-background': '#0d1b3a',
  surface: '#f8f9ff',
  'tertiary-container': '#f5a800',
  'surface-bright': '#f8f9ff',
  'on-primary-container': '#dbe4ff',
  'on-primary-fixed': '#00174b',
  'surface-dim': '#d3dbee',
  'inverse-on-surface': '#eaf0ff',
  'tertiary-fixed': '#ffdf9e',
  'inverse-primary': '#b3c6ff',
  'error-container': '#ffdad6',
  tertiary: '#7a5200',
  'surface-container': '#e5ebf8',
  'surface-container-low': '#eef2fc',
  'on-surface': '#0d1b3a',
  'primary-container': '#1c4ea3',
  'on-secondary-fixed': '#00201c',
  'surface-variant': '#dde3f2',
  'on-tertiary': '#ffffff',
  'on-secondary-fixed-variant': '#005048',
  'on-tertiary-fixed': '#261a00',
  'outline-variant': '#c3c8d6',
  'secondary-fixed-dim': '#4fdbc8',
  secondary: '#006b5f',
  'on-error': '#ffffff',
  'secondary-container': '#6df5e1',
  'secondary-fixed': '#71f8e4',
  'on-surface-variant': '#434a5d',
  error: '#ba1a1a',
  'surface-container-high': '#dce3f4',
  'on-primary-fixed-variant': '#0d3a8c',
  'primary-fixed-dim': '#b3c6ff',
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
