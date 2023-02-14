/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/index.html",
"./public/index.js"],
  theme: {
    extend: {
      fontFamily: {
        'Merriweather': ['Merriweather','serif']
      },
      backgroundImage: {
        'airplane': "url('./img/Airplane.jpg')",
      },
    },
  },
  plugins: [],
}
