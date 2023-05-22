/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width: {
        'input': 'calc(100% / 2 - 20px)'
      },
      flex: {
        'cst': '0 0 auto'
      }
    },
  },
  plugins: [],
}
