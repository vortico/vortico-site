const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

module.exports = {
  darkMode: 'class',
  mode: 'jit',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/layouts/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#008080',
          50: '#00DCDC',
          100: '#00D2D2',
          200: '#00BDBD',
          300: '#00A9A9',
          400: '#009494',
          500: '#008080',
          600: '#006C6C',
          700: '#005757',
          800: '#004343',
          900: '#002E2E',
        },
        primary: {
          DEFAULT: '#3F3F46',
          50: '#BDBDC4',
          100: '#AFAFB7',
          200: '#91919C',
          300: '#747481',
          400: '#5A5A64',
          500: '#3F3F46',
          600: '#333339',
          700: '#27272B',
          800: '#1B1B1E',
          900: '#0F0F10',
        },
      },
      maxWidth: {
        '8xl': '90rem',
      },
    },
    fontFamily: {
      serif: ['Montserrat', ...defaultTheme.fontFamily.serif],
      sans: ['Lato', ...defaultTheme.fontFamily.sans],
      mono: ['"Fira Mono"', ...defaultTheme.fontFamily.mono],
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant('supports-backdrop-blur', '@supports (backdrop-filter: blur(0)) or (-webkit-backdrop-filter: blur(0))')
    },
    require('@tailwindcss/forms'),
  ],
}
