/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {    
      fontFamily: {
        'sans': ['Poppins', 'sans-serif'],
      },
      colors: {
        primary: '#cde9ef',
        secondary: {
          light: '#C3DCE3',
          DEFAULT: '#2B788B',
        }
      }
    },
  },
  plugins: [],
}
