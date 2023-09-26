/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        neutral: {
          50: '#F9F9F9',
          100: '#F4F4F4',
          200: '#E4E4E4',
          300: '#D3D3D3',
          400: '#A2A2A2',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
          950: '#0A0A0A',
          1000: '#000000',
        },
        'twitterblue': '#1D9BF0',
        'twitterblue_hover': '#1871CA',
        'twitterblue_disabled': '#1E5D87',
        'bluewash': '#75BEEF',
        'buttonstroke':'#546A7A',
        'searchbarfill': '#212327',
        'cardfill': '#16181C',
        'success': '#00BE74',
        'error': '#8B141A',
      },

      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },

      width: {
        '334': '20.875rem',
        
      }
    },
  },
  plugins: [],
}

