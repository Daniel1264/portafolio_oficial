/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        light: "url('/src/image/light.jpg')",

        // desing
        perfil: "url('/src/image/perfil.jpg')",
        certificado: "url('/src/image/react.png')",
        fundamentos: "url('/src/image/fundamentos.png')",
        cobao: "url('/src/image/cobao.png')",
        post: "url('/src/image/montañas.jpg')",
        dark: "url('/src/image/calle.gif')",
        cuarto: "url('/src/image/animate.gif')",
        fame: "url('/src/image/fame.jpg')",
        fameMovil: "url('/src/image/fame_movil.gif')",
        backend: "url('/src/image/backend.jpg')",
        frontend: "url('/src/image/notice.jpg')",

      // Proyectos

        wather: "url('/src/image/paraguas.png')",
        letras: "url('/src/image/letras.jpg')",
        rick: "url('/src/image/rick.png')",
        pokemon: "url('/src/image/pokemon.jpg')",
        cafeteria: "url('/src/image/cafeteria.jpg')",
        javascript: "url('/src/image/javascript.jpg')",
        city: "url('/src/image/city.jpg')",

        // bg-style
        vegas: "url('/src/image/nieve.jpg')",
        setup: "url('/src/image/setup.jpg')",
        setupMovil: "url('/src/image/setuplight.jpg')"
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
