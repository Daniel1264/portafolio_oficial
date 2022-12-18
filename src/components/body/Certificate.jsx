import React from 'react'
import {FcGraduationCap} from 'react-icons/fc'

const Certificate = () => {

  return (
    <div className="w-full h-full  bg-white dark:bg-wallpepercolor p-4 min-h-screen flex justify-center items-center">
      <div className="w-full p-5 h-full m-auto flex justify-center items-center gap-10 flex-wrap sm:ml-10 ">
        

          <div className="w-[350px] sm:w-auto sm:h-auto flex flex-col dark:bg-wallpepercolor drop-shadow-2xl shadow-xl shadow-slate-400 dark:shadow-xl dark:shadow-slate-800 sm:flex-row">
            <div className='w-full h-[300px] sm:w-[250px] sm:h-[250px] bg-academlo bg-cover bg-center'>
            </div>
            <div className="flex flex-col gap-2 w-full p-2 sm:w-[400px]">
              <h2 className="text-2xl text-wallpepercolor font-bold dark:text-secondary">Front-End with React</h2>
              <span className="text-lg text-wallpepercolor font-medium dark:text-white text-center">En este módulo trabajamos con react.js una librería de JavaScript que nos permite crear interfaces web usando herramientas como hooks, axios, customHooks, react-router, redux entre otras <FcGraduationCap className="text-3xl inline-block" />.</span>
                <a href='https://certificates.academlo.com/en/verify/08125827091851?ref=email ' target='blank'>
              <button className="hover:scale-110 m-3 duration-300 relative p-2 tracking-wide text-white bg-wallpepercolor rounded-lg  font-bold dark:text-white dark:bg-secondary sm:m-0">Ver certificado</button>
              </a>
            </div>
          </div>
        

        
          <div className="w-[350px] sm:w-auto sm:h-auto flex flex-col dark:bg-wallpepercolor drop-shadow-2xl shadow-xl shadow-slate-400 dark:shadow-xl dark:shadow-slate-900 sm:flex-row">
            <div className='w-full h-[300px] sm:w-[250px] sm:h-[250px] bg-academlo bg-cover bg-center'>
            </div>
            <div className="flex flex-col w-full gap-2 p-1 sm:w-[400px]">
              <h2 className="text-2xl text-wallpepercolor font-bold dark:text-secondary">Fundamentos</h2>
              <span className="text-base text-wallpepercolor font-medium dark:text-white text-center">En este módulo trabajamos con los fundamentos web, iniciando con JavaScript básico, después trabajando la parte semántica de una web con HTML5 para después trabajar los estilos con CSS y finalmente manejar git para control de versiones y GitHub con netfly para el despliegue de nuestra web<FcGraduationCap className="text-3xl inline-block" /></span>
              <a href='https://certificates.academlo.com/en/verify/44248802758901?ref=email' target='blank'>
                <button className="hover:scale-110 m-3 duration-300 relative p-2 tracking-wide text-white bg-wallpepercolor rounded-lg  font-bold dark:text-white dark:bg-secondary sm:m-0">Ver certificado</button>
              </a>
            </div>
          </div>

          <div className="w-[350px] sm:w-auto sm:h-auto flex flex-col dark:bg-wallpepercolor drop-shadow-2xl shadow-xl shadow-slate-400 dark:shadow-xl dark:shadow-slate-900 sm:flex-row">
            <div className='w-full h-[300px] sm:w-[250px] sm:h-[250px] bg-artistcode bg-cover bg-center'>
            </div>
            <div className="flex flex-col w-full gap-2 p-1 sm:w-[400px]">
              <h2 className="text-2xl text-wallpepercolor font-bold dark:text-secondary">GNU/Linux</h2>
              <span className="text-xl text-wallpepercolor font-medium dark:text-white text-center">En este curso trabajé con los comandos de una distribución de debian la cual es kali linux, manejando la terminal, rutas entre carpetas, actualización e instalación de paquetes, instalación de programas, etc<FcGraduationCap className="text-3xl inline-block" /></span>
              <a href='https://drive.google.com/file/d/1BNfgsLe-CRw1-TW_xXL0F9uP888xqye7/view?usp=share_link' target='blank'>
                <button className="hover:scale-110 duration-300 m-3 relative p-2 tracking-wide text-white bg-wallpepercolor rounded-lg  font-bold dark:text-white dark:bg-secondary sm:m-0">Ver certificado</button>
              </a>
            </div>
          </div>

          <div className="w-[350px] sm:w-auto sm:h-auto flex flex-col dark:bg-wallpepercolor drop-shadow-2xl shadow-xl shadow-slate-400 dark:shadow-xl dark:shadow-slate-900 sm:flex-row">
            <div className='w-full h-[300px] sm:w-[250px] sm:h-[250px] bg-artistcode bg-cover bg-center'>
            </div>
            <div className="flex flex-col w-full gap-2 p-1 sm:w-[400px]">
              <h2 className="text-2xl text-wallpepercolor font-bold dark:text-secondary">Maquina Virtual </h2>
              <span className="text-xl text-wallpepercolor font-medium dark:text-white text-center">En este curso trabajé instalando diferentes distros basadas en debian como ubuntu, mint, kali linux, parrotOS entre otras<FcGraduationCap className="text-3xl inline-block" /></span>
              <a href='https://drive.google.com/file/d/1VHO3r_fFttyNpt9298eslSg0xrU4chek/view?usp=share_link' target='blank'>
                <button className="hover:scale-110 duration-300 m-3 relative p-2 tracking-wide text-white bg-wallpepercolor rounded-lg  font-bold dark:text-white dark:bg-secondary sm:m-0">Ver certificado</button>
              </a>
            </div>
          </div>

      </div>
    </div>
  )
}

export default Certificate
