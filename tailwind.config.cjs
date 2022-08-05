/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx, ts,tsx}"],
  theme: {
    colors: {
      'dark-green': '#3F826D',
      'skin': '#F2D0A4',
      'light': '#F7F7FF',
      'dark-red': '#C03221',
      'dark-gray': '#434343',
    },
    plugins: [],
    purge: {
      enabled: true,
      content: [
          './**/*.html'
      ]
    },
    extend: {
      backgroundImage: {
        'red-car': "url('/src/assets/car.jpg')"
      },
      fontFamily: {
        alma: ['Alma-Mono', 'cursive', 'script']
      }
    },
  },
}