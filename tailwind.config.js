/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        tray: {
          DEFAULT: '#0F1713', // dissection tray — deep bottle-green black
          raised: '#16221C',
          line: '#26362C'
        },
        tag: {
          DEFAULT: '#DED2AE', // specimen tag / parchment label
          dim: '#B7AD8E'
        },
        system: {
          circulatory: '#B23A3A',
          respiratory: '#2F8F8A',
          digestive: '#C98A2E',
          nervous: '#6C4F9E',
          excretory: '#3E7CB1',
          reproductive: '#B15A8C',
          cellular: '#4C7A3D',
          genetics: '#3B4C8C',
          ecology: '#3D6B35',
          skeletal: '#B8AD8A'
        }
      },
      fontFamily: {
        // System font stacks only — no Google Fonts CDN dependency, so
        // there's nothing extra to precache and nothing that can fail
        // to load the first time a student opens the app offline.
        display: ['"Iowan Old Style"', '"Palatino Linotype"', 'Palatino', 'Georgia', 'serif'],
        body: ['"Inter"', '-apple-system', 'system-ui', '"Segoe UI"', 'Roboto', 'sans-serif']
      }
    }
  },
  plugins: []
}
