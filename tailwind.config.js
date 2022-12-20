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
          50: '#39FFFF',
          100: '#24FFFF',
          200: '#00FAFA',
          300: '#00D2D2',
          400: '#00A9A9',
          500: '#008080',
          600: '#004848',
          700: '#001010',
          800: '#000000',
          900: '#000000',
        },
        primary: colors.zinc,
      },
      maxWidth: {
        '8xl': '90rem',
      },
    },
    fontFamily: {
      serif: ['Montserrat', ...defaultTheme.fontFamily.serif],
      sans: ['"Fira Sans"', ...defaultTheme.fontFamily.sans],
      mono: ['"Fira Mono"', ...defaultTheme.fontFamily.mono],
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant('supports-backdrop-blur', '@supports (backdrop-filter: blur(0)) or (-webkit-backdrop-filter: blur(0))')
    },
  ],
}
