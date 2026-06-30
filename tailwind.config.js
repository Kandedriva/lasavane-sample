/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        savane: {
          50:  '#fdf8f0',
          100: '#f9edda',
          200: '#f2d7aa',
          300: '#e8bc6e',
          400: '#dfa040',
          500: '#c8852a',
          600: '#a96820',
          700: '#8a501c',
          800: '#6b3d1c',
          900: '#4a2810',
        },
        earth: {
          dark:  '#1a0e00',
          mid:   '#3d2b1f',
          warm:  '#6b4c35',
          light: '#b8895a',
        },
        jungle: {
          dark:  '#0d2b1d',
          mid:   '#1a4a30',
          bright:'#2d7a50',
        },
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans:  ['"Lato"', 'Helvetica Neue', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
