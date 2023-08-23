/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        "textSecondary": '#9CA3AF'
      }
    },
    fontFamily: {
      'questrial': ['questrial'],
    }
  },
  plugins: [],
}

