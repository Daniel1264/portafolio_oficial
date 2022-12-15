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
        cobao: "url('/src/image/cobao.png')",
        post: "url('/src/image/montañas.jpg')",
        dark: "url('/src/image/calle.gif')",
        cuarto: "url('/src/image/animate.gif')",
        fame: "url('/src/image/fame.jpg')",
        fameMovil: "url('/src/image/fame_movil.gif')",

      // Proyectos

        warzone: "url('/src/image/warzone.jpg')",
        letras: "url('/src/image/letras.jpg')",
        ninja: "url('/src/image/ninja.jpg')",
        luna: "url('/src/image/luna.png')",
        espada: "url('/src/image/espada.png')",
        gears: "url('/src/image/gears.jpg')"
      },
      screens: {
        sm: '850px',
        lg:'1310px'
      },
      colors: {
        first: '#5DEDCD',
        wallpepercolor: '#030713',
        secondary: '#C70039',
        light: '#2192FF'
      },
      fontFamily: {
        familyOne: 'sans-serif'
      }
    },
  },
  plugins: [],
}
