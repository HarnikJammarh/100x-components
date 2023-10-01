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
        '24': '24px',
        '56': '3.5rem',
        '58': '3.625rem',
        '72': '4.5rem',
        '334': '20.875rem',
        '348': '348px',
        '426': '26.625rem',
        '434': '27.125rem',
        '442': '27.625rem',
        '482': '30.125rem',
        '512': '512px',
        '598': '37.375rem',
      },

      height: {
        '24': '24px',
        '58': '3.625rem',
        '3': '0.1875rem',
        '36': '2.25rem',
        '39': '39px',
        '355': '355px',
      },

      padding: {
        '2': '0.125rem',
        '6': '0.375rem',
        '8': '0.5rem',
        '10': '10px',
        '12': '0.75rem',
        '15': '0.9375rem',
        '16': '1rem',
        '20': '1.25rem',
        '24': '1.5rem',
        '36': '2.25rem',
        '80': '5rem',
        '93': '5.8125rem',
        '247': '247px',
      },

      spacing: {
        '10': '0.625rem',
        '160': '10rem',
        '15': '15px',
        '16': '1rem',
        '12': '0.75rem',
        '20': '20px',
      },

      borderRadius: {
        '4': '0.25rem',
        '16': '16px',
        '65': '4.0625rem',
        '30': '1.875rem',
        '9999': '624.9375rem',
        '200': '12.5rem',
        '99999': '6249.938rem',
      },
      
      boxShadow: {
        '3xl': '0px 8px 16px 0px rgba(0, 0, 0, 0.25)',
      },

      backdropBlur: {
        23: '23.668209075927734px',
      },

      borderColor: {
        'color': 'var(--stroke, rgba(29, 155, 240, 0.24))',
      },

      borderWidth: {
        '1': '1px',
      }
    },
  },
  plugins: [],
}

