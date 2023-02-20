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
        primary: colors.zinc,
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
  ],
}
