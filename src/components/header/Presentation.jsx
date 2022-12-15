import React from 'react'
import { Link } from 'react-router-dom'


const Presentation = () => {
  return (
    <div className=' dark:bg-wallpepercolor bg-white flex items-center justify-center h-screen duration-300 '>
      <div data-aos="fade-right" className="flex flex-col justify-center items-center gap-6 p-3 max-w-screen-xl">
      <span className="text-2xl lg:text-[2vw] font-mono text-wallpepercolor dark:text-first">Hola yo soy</span>
      <h1 className="sm:text-7xl text-4xl lg:text-[6vw] dark:text-white font-sans font-bold text-center whitespace-nowrap text-black">Daniel Ramos Martínez</h1>
      <h2 className="sm:text-6xl text-2xl text-center font-sans font-semibold text-black dark:text-[#8892B0]">Desarrollador web frontend</h2>
      <span className="text-lg text-center text-wallpepercolor  dark:text-[#8892B0] lg:text-[2vw] font-sans  font-medium sm:w-3/4 lg:leading-[4vw]">Te invito a navegar en mi portafolio donde podrás encontrar información acerca de mí, proyectos y como contactarme</span>
      <Link to='/sobre_mi' className="p-4 bg-wallpepercolor  dark:bg-secondary border-none   text-white tracking-wider text-xl duration-150  hover:shadow-lg hover:shadow-rose-500/50 font-familyOne font-bold">Vamos a navegar</Link>
      </div>
    </div>
  )
}

export default Presentation
