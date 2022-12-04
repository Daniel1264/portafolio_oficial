import React from 'react'
import { Link } from 'react-router-dom'


const Presentation = () => {
  return (
    <div className=' dark:bg-wallpepercolor bg-white flex items-center justify-center h-screen duration-300'>
      <div className='w-[2px] h-full dark:bg-white none sm:absolute right-12'/>
      <div data-aos="fade-right" className="flex flex-col justify-center items-center gap-6 p-3">
      <span className="text-2xl font-mono text-wallpepercolor dark:text-first">Hola yo soy</span>
      <h1 className="sm:text-7xl text-4xl dark:text-white font-sans font-bold text-center whitespace-nowrap text-black">Daniel Ramos Martinez</h1>
      <h2 className="sm:text-6xl text-2xl text-center font-sans font-semibold text-black dark:text-[#8892B0]">Desarrollador web frontend</h2>
      <span className="text-lg text-center text-black dark:text-[#8892B0] font-sans  font-medium sm:w-3/4">Te invito a navegar en mi portafolio donde podras encontrar informacion acerca de mi, proyectos y como contactarme</span>
      <Link to='/sobre_mi' className="p-4 bg-wallpepercolor dark:bg-secondary border-none   text-white tracking-wider text-xl duration-150  hover:shadow-lg hover:shadow-rose-500/50 font-familyOne font-bold">Vamos a navegar</Link>
      </div>
    </div>
  )
}

export default Presentation
