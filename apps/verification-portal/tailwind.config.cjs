/** @type {import('tailwindcss').Config}*/
const config = {
  content: [
    './src/**/*.{html,js,svelte,ts}',
    './node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}',
  ],

  plugins: [require('flowbite/plugin')],

  darkMode: 'class',

  theme: {
    fontFamily: {
      sans: ['Roboto', 'sans-serif'],
      serif: ['Clearface Serial', 'serif'],
    },
    fontSize: {
      xs: '0.6875rem', // 11px
      sm: '0.8125rem', // 13px
      lg: '0.9375rem', // 15px
      base: '1.125rem', // 18px
      xl: '1.25rem', // 20px
      '2xl': '1.5rem', // 24px
      '3xl': '1.875rem', // 30px
      '4xl': '2.5rem', // 40px
      '5xl': '2.625rem', // 42px
      '6xl': '3.125rem', // 50px
    },

    extend: {
      height: {
        11: '44px',
      },
      colors: {
        //SNI
        'deep-blue': {
          DEFAULT: '#010510',
          700: '#013333',
          800: '#000C15',
          900: '#010510',
        },
        'deep-green': {
          DEFAULT: '#002727',
          300: '#0C1A1A',
          600: '#183C37',
          700: '#071E1B',
          800: '#002727', //dark bg
          900: '#001512',
          950: '#050D0C',
        },
        primary: {
          DEFAULT: '#08FFA6',
          50: '#CBF4D5',
          100: '#AAE6B9', // light bg
          200: '#08FFA6', // accent
          300: '#00C67E',
          400: '#01AC75', // buttons
          500: '#006546', // green-bg
          600: '#00291D',
          700: '#08231D',
          800: '#071A17',
          900: '#001512',
        },
        gray: {
          50: '#FFFFFF',
          100: '#FAFDFE',
          200: '#CECECE',
          300: '#C4C4C4',
          400: '#7D7D7D',
          500: '#B0B0B0',
          600: '#111F29',
          700: '#081620',
          800: '#000C15',
          900: '#010510',
        },
        orange: {
          DEFAULT: '#FFA500',
          400: '#CD5B23',
          500: '#BE4104',
          600: '#772700',
          700: '#5D1E00',
        },
      },
      borderRadius: {
        none: '0',
        sm: '.625rem',
        DEFAULT: '.625rem',
        lg: '1.25rem',
        full: '9999px',
      },
      container: {
        center: true,
        // container size capped at 2xl
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1280px',
          '2xl': '1300px',
        },
      },
    },
  },
};

module.exports = config;
