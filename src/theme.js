// Design tokens copied 1:1 from the Stitch design's tailwind.config.
export const C = {
  'primary-container': '#0369a1',
  'surface-tint': '#006399',
  'on-primary': '#ffffff',
  'surface-dim': '#d8dadc',
  'secondary-fixed-dim': '#6bd8cb',
  'on-tertiary-fixed': '#2e1500',
  'on-tertiary-container': '#ffdbbe',
  'secondary-fixed': '#89f5e7',
  'surface-container': '#eceef0',
  background: '#f7f9fb',
  'on-secondary-fixed': '#00201d',
  'surface-container-highest': '#e0e3e5',
  'on-background': '#191c1e',
  'surface-container-lowest': '#ffffff',
  'inverse-on-surface': '#eff1f3',
  'on-secondary-container': '#006f66',
  'secondary-container': '#86f2e4',
  'on-surface-variant': '#40474f',
  error: '#ba1a1a',
  tertiary: '#733f00',
  'surface-container-low': '#f2f4f6',
  'on-secondary': '#ffffff',
  secondary: '#006a61',
  'on-primary-container': '#cbe4ff',
  'on-primary-fixed': '#001d32',
  'tertiary-fixed': '#ffdcc1',
  'on-error-container': '#93000a',
  'on-tertiary-fixed-variant': '#6c3a00',
  'primary-fixed-dim': '#94ccff',
  primary: '#00507d',
  'on-secondary-fixed-variant': '#005049',
  'surface-bright': '#f7f9fb',
  'tertiary-fixed-dim': '#ffb878',
  'inverse-surface': '#2d3133',
  'on-error': '#ffffff',
  'tertiary-container': '#955301',
  'on-tertiary': '#ffffff',
  'surface-variant': '#e0e3e5',
  'primary-fixed': '#cde5ff',
  'error-container': '#ffdad6',
  surface: '#f7f9fb',
  'on-primary-fixed-variant': '#004b74',
  'outline-variant': '#c0c7d1',
  outline: '#707881',
  'inverse-primary': '#94ccff',
  'on-surface': '#191c1e',
  'surface-container-high': '#e6e8ea',
  white: '#ffffff',
};

// Tailwind's `bg-x/40` opacity modifier.
export function alpha(name, a) {
  const hex = (C[name] || name).replace('#', '');
  const n = parseInt(hex, 16);
  return `rgba(${(n >> 16) & 255},${(n >> 8) & 255},${n & 255},${a})`;
}

// spacing tokens
export const S = { xs: 4, sm: 8, md: 16, lg: 24, xl: 36, '2xl': 48 };

// radius: the design overrides lg/xl; 2xl/3xl keep Tailwind defaults.
export const R = { DEFAULT: 4, lg: 8, xl: 12, '2xl': 16, '3xl': 24, full: 9999 };

// Tailwind default shadows
export const SH = {
  sm: '0px 1px 2px 0px rgba(0,0,0,0.05)',
  md: '0px 4px 6px -1px rgba(0,0,0,0.1), 0px 2px 4px -2px rgba(0,0,0,0.1)',
  lg: '0px 10px 15px -3px rgba(0,0,0,0.1), 0px 4px 6px -4px rgba(0,0,0,0.1)',
  inner: 'inset 0px 2px 4px 0px rgba(0,0,0,0.05)',
};

// Type scale [size, lineHeight, letterSpacingEm, weight, family]
const JAK = 'jakarta';
const INTER = 'inter';
export const TYPE = {
  'title-md': [16, 24, -0.005, 600, INTER],
  'label-md': [12, 16, 0.04, 600, INTER],
  'body-md': [15, 24, 0, 400, INTER],
  'headline-lg-mobile': [26, 34, -0.02, 600, JAK],
  'headline-sm': [20, 28, -0.01, 600, JAK],
  'body-sm': [13, 20, 0.005, 400, INTER],
  'display-hero-mobile': [32, 40, -0.02, 700, JAK],
  'body-lg': [18, 28, 0, 400, INTER],
  'headline-md': [24, 32, -0.015, 600, JAK],
  'label-sm': [11, 14, 0.06, 600, INTER],
};

const FAMILY = {
  inter: { 400: 'Inter_400Regular', 500: 'Inter_500Medium', 600: 'Inter_600SemiBold', 700: 'Inter_700Bold' },
  jakarta: { 400: 'PlusJakartaSans_600SemiBold', 500: 'PlusJakartaSans_600SemiBold', 600: 'PlusJakartaSans_600SemiBold', 700: 'PlusJakartaSans_700Bold' },
};

// `font-x text-x` pair, optionally with a size override (e.g. text-[14px]) or weight class.
// `leading` mirrors Tailwind leading-* utilities (tight 1.25, snug 1.375, relaxed 1.625, none 1).
const LEADING = { none: 1, tight: 1.25, snug: 1.375, relaxed: 1.625 };
export function type(variant, { weight, size, family, leading } = {}) {
  const [fs, lh, ls, w, fam] = TYPE[variant];
  const fontSize = size ?? fs;
  // letter-spacing is defined in em on the variant, so it scales with an overridden size.
  let lineHeight = lh;
  if (leading) lineHeight = Math.round(fontSize * LEADING[leading]);
  return {
    fontFamily: FAMILY[family || fam][weight ?? w],
    fontSize,
    lineHeight,
    letterSpacing: fontSize * ls,
  };
}

export const HEADER_H = 80;
export const NAV_H = 64;
