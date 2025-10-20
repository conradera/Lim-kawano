/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./pages/**/*.html", "./js/**/*.js"],
  theme: {
    extend: {
      colors: {
        'primary-blue': '#14394d',
        'primary-tan': '#cc9955',
        'light-blue': '#7da3b7',
        'light-tan': '#dcaa66',
        'off-white': '#fefff8',
        'cream': '#faf4eb',
        'dark-gray': '#2a2a2a',
        'medium-gray': '#586972',
        'navy': '#1e3a5f',
        'gold': '#d4af37',
        'teal': '#2c7a7b',
        'coral': '#ff6b6b',
        'slate': '#334155',
      },
      fontFamily: {
        'notable': ['Notable', 'sans-serif']
      }
    }
  },
  plugins: []
}
