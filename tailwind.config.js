/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontSize: {
      ss: ['12px'],
      xs: ['14px', { lineHeight: '24px', letterSpacing: '-0.03em' }],
      sm: ['16px', { lineHeight: '28px', letterSpacing: '-0.03em' }],
      lg: ['18px', { lineHeight: '28px', letterSpacing: '-0.03em' }],
      'lg-20': ['20px'],
      xl: ['24px', { lineHeight: '36px', letterSpacing: '-0.03em' }],
      '2xl': ['36px', { lineHeight: '48px', letterSpacing: '-0.032em' }],
      '3xl': ['48px', { lineHeight: '56px', letterSpacing: '-0.032em' }],
      '4xl': ['56px', { lineHeight: '64px', letterSpacing: '-0.032em' }],
      '5xl': ['80px', { lineHeight: '80px', letterSpacing: '-0.032em' }],
    },
    extend: {
      screens: {
        xs: '540px',
        'md-lg': '860px',
      },
      boxShadow: {
        round: 'rgba(0, 0, 0, 0.24) 0px 3px 8px;',
      },
      colors: {
        primary: '#2274A5',
        'primary-50': '#f2f9fd',
        'primary-100': '#e5f0f9',
        'primary-200': '#c5e1f2',
        'primary-300': '#92c9e7',
        'primary-400': '#58add8',
        'primary-500': '#3292c5',
        'primary-700': '#1d5d87',
        'primary-800': '#1c5070',
        'primary-900': '#1c445e',
        secondary: '#FF6663',
        light: '#F8F1FF',
        dark: '#0E131F',
        teal: '#3F6C51',
        gray: '#bdc3c7',
        white: '#ffffff',
      },
      gridTemplateColumns: {
        'col-fit-xs': 'repeat(auto-fit, minmax(7rem, 1fr))',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('@shrutibalasa/tailwind-grid-auto-fit'),
  ],
};
