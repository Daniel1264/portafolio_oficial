import React from 'react'
import {FcCommandLine, FcGraduationCap, FcMultipleDevices,  FcLinux} from 'react-icons/fc'
import {SiVirtualbox} from 'react-icons/si'

const Certificate = () => {

  return (
    <div className="w-full h-full  bg-white dark:bg-wallpepercolor p-4 min-h-screen">
      <div className="w-full p-5 h-full m-auto flex justify-center items-center gap-10 flex-wrap sm:ml-10 ">
        

        <a href='https://certificates.academlo.com/en/verify/08125827091851?ref=email' target='blank'>
          <div className="w-[340px] h-auto p-3 hover:scale-110 duration-300 dark:bg-wallpepercolor drop-shadow-2xl shadow-xl shadow-slate-400 dark:shadow-xl dark:shadow-slate-900">
            <div className='w-full h-auto'>
              <FcCommandLine className="text-9xl m-auto" />
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="text-4xl text-wallpepercolor font-bold dark:text-secondary">Front-End with React</h2>
              <span className="text-xl text-wallpepercolor font-medium dark:text-white">En este módulo trabajamos con react.js una librería de JavaScript que nos permite crear interfaces web usando herramientas como hooks, axios, customHooks, react-router, redux entre otras</span>
              <div>
                <FcGraduationCap className="text-6xl ml-auto" />
              </div>
            </div>
          </div>
        </a>

        <a href='https://certificates.academlo.com/en/verify/44248802758901?ref=email' target='blank'>
          <div className="w-[340px] h-auto p-3 hover:scale-110 duration-300 dark:bg-wallpepercolor drop-shadow-2xl shadow-xl shadow-slate-400 dark:shadow-xl dark:shadow-slate-900">
            <div className='w-full h-auto'>
              <FcMultipleDevices className="text-9xl m-auto" />
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="text-4xl text-wallpepercolor font-bold dark:text-secondary">Fundamentos</h2>
              <span className="text-xl text-wallpepercolor font-medium dark:text-white">En este módulo trabajamos con los fundamentos web, iniciando con JavaScript básico, después trabajando la parte semántica de una web con HTML5 para después trabajar los estilos con CSS y finalmente manejar git para control de versiones y GitHub con netfly para el despliegue de nuestra web</span>
              <div>
                <FcGraduationCap className="text-6xl ml-auto" />
              </div>
            </div>
          </div>
        </a>

        <a href='https://drive.google.com/file/d/1BNfgsLe-CRw1-TW_xXL0F9uP888xqye7/view?usp=share_link' target='blank'>
          <div className="w-[340px] h-auto p-3 hover:scale-110 duration-300 dark:bg-wallpepercolor drop-shadow-2xl shadow-xl shadow-slate-400 dark:shadow-xl dark:shadow-slate-900">
            <div className='w-full h-1/2'>
              <FcLinux className="text-9xl m-auto" />
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="text-4xl text-wallpepercolor font-bold dark:text-secondary">GNU/Linux</h2>
              <span className="text-xl text-wallpepercolor font-medium dark:text-white">En este curso trabajé con los comandos de una distribución de debian la cual es kali linux, manejando la terminal, rutas entre carpetas, actualización e instalación de paquetes, instalación de programas, etc.</span>
              <div>
                <FcGraduationCap className="text-6xl ml-auto" />
              </div>
            </div>
          </div>
        </a>

        <a href='https://drive.google.com/file/d/1VHO3r_fFttyNpt9298eslSg0xrU4chek/view?usp=share_link' target='blank'>
          <div className="w-[340px] h-auto p-3 hover:scale-110 duration-300 dark:bg-wallpepercolor drop-shadow-2xl shadow-xl shadow-slate-400 dark:shadow-xl dark:shadow-slate-900">
            <div className='w-full h-1/2'>
              <SiVirtualbox className="text-9xl m-auto dark:text-blue-600" />
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="text-4xl text-wallpepercolor font-bold dark:text-secondary">Maquina Virtual </h2>
              <span className="text-xl text-wallpepercolor font-medium dark:text-white">En este curso trabajé instalando diferentes distros basadas en debian como ubuntu, mint, kali linux, parrotOS entre otras.</span>
              <div>
                <FcGraduationCap className="text-6xl ml-auto" />
              </div>
            </div>
          </div>
        </a>

      </div>
    </div>
  )
}

export default Certificate
