/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        perfil: "url('/src/image/perfil.jpg')",
        certificado: "url('/src/image/react.png')",
        fundamentos: "url('/src/image/fundamentos.png')",
        cobao: "url('/src/image/cobao.png')"
      },
      screens: {
        sm: '850px'
      },
      colors: {
        first: '#5DEDCD',
        wallpepercolor: '#030713',
        secondary: '#C70039'
      },
      fontFamily: {
        familyOne: 'sans-serif'
      }
    },
  },
  plugins: [],
}
