/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx, ts,tsx}"],
  theme: {
    colors: {
      'dark-green': '#231651',
      'skin': '#CA9CE1',
      'light': '#fcf3ff',
      'dark-red': '#383379',
      'dark-gray': '#252627',
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