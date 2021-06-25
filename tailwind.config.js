module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Noto Sans', 'sans-serif']
      },
      colors: {
        'dark-blue': '#120F13',
        'dark-gray': '#252329',
        'md-gray': '#3C393F',
        'light-gray': '#828282',
        'extralight-gray': '#E0E0E0',
        'accent-blue': '#2F80ED',
        'danger-red': '#EB5757'
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
