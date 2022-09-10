/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily:{
        Poppins:['Poppins']
      },
      animation: {
        moveright: 'moveright .4s linear',
        moveleft: 'moveleft .4s linear',
      },
      keyframes:{
        moveright:{
          'from':{left : '0%'},
          'to':{left: '50%'}
        },
        moveleft:{
          'from':{left : '50%'},
          'to':{left: '0%'}
        },
      }
    },
  },
  plugins: [],
}
