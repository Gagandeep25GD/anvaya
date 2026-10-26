/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f4f6f8',
          100: '#e1e7ec',
          200: '#c5d2d9',
          300: '#9fb4be',
          400: '#75909d',
          500: '#557482',
          600: '#425b67',
          700: '#364a54',
          800: '#2e3d45',
          900: '#1b2328',
          950: '#0d1215',
        },
        accent: {
          coral: '#ff5c35',
          amber: '#ffb703',
          teal: '#219ebc',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Outfit', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
