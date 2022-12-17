import React from 'react'
import {FcCommandLine, FcGraduationCap, FcMultipleDevices, FcAcceptDatabase, FcLinux} from 'react-icons/fc'
import {SiVirtualbox} from 'react-icons/si'

const Certificate = () => {

  return (
    <div className="w-full  bg-white dark:bg-wallpepercolor p-4 ">
      <div className="w-full p-5 h-full m-auto flex justify-center items-center gap-10 flex-wrap sm:ml-10 lg:ml-0">
        

        <a href='https://certificates.academlo.com/en/verify/08125827091851?ref=email' target='blank'>
          <div className="w-96 h-max p-3 hover:scale-110 duration-300 dark:bg-wallpepercolor drop-shadow-2xl shadow-xl shadow-slate-400 dark:shadow-xl dark:shadow-slate-900">
            <div className='w-full h-1/2'>
              <FcCommandLine className="text-9xl m-auto" />
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="text-4xl text-wallpepercolor font-bold dark:text-secondary">Front-End with React</h2>
              <span className="text-xl text-wallpepercolor font-medium dark:text-white">En este modulo trabajamos con react.js una libreria de javascript que nos permite crear interfaces web usando herramientas como hooks, axios, customHooks, react-router, redux entre otras </span>
              <div>
                <FcGraduationCap className="text-6xl ml-auto" />
              </div>
            </div>
          </div>
        </a>

        <a href='https://certificates.academlo.com/en/verify/44248802758901?ref=email' target='blank'>
          <div className="w-96 h-max p-3 hover:scale-110 duration-300 dark:bg-wallpepercolor drop-shadow-2xl shadow-xl shadow-slate-400 dark:shadow-xl dark:shadow-slate-900">
            <div className='w-full h-1/2'>
              <FcMultipleDevices className="text-9xl m-auto" />
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="text-4xl text-wallpepercolor font-bold dark:text-secondary">Fundamentos</h2>
              <span className="text-xl text-wallpepercolor font-medium dark:text-white">En este modulo trabajamos con los fundamentos web, iniciando con javascript basico, despues trabajando la parte semantica de una web con HTML5 para despues trabajar los estilos con CSS y finalmente manejar git para control de versiones y github con netfly para el despliegue de nuestra web</span>
              <div>
                <FcGraduationCap className="text-6xl ml-auto" />
              </div>
            </div>
          </div>
        </a>

        <div className="w-96 h-max p-3 hover:scale-110 duration-300 dark:bg-wallpepercolor drop-shadow-2xl shadow-xl shadow-slate-400 dark:shadow-xl dark:shadow-slate-900">
          <div className='w-full h-1/2'>
            <FcAcceptDatabase className="text-9xl m-auto" />
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="text-4xl text-wallpepercolor font-bold dark:text-secondary">Backend Node.js</h2>
            <span className="text-xl text-wallpepercolor font-medium dark:text-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae veritatis iusto, ea vitae repellat expedita laudantium ad nostrum eligendi dolorem labore, ipsam eos consectetur ratione perspiciatis rerum laboriosam temporibus enim.</span>
            <div>
              <FcGraduationCap className="text-6xl ml-auto" />
            </div>
          </div>
        </div>

        <a href='https://drive.google.com/file/d/1BNfgsLe-CRw1-TW_xXL0F9uP888xqye7/view?usp=share_link' target='blank'>
          <div className="w-96 h-max p-3 hover:scale-110 duration-300 dark:bg-wallpepercolor drop-shadow-2xl shadow-xl shadow-slate-400 dark:shadow-xl dark:shadow-slate-900">
            <div className='w-full h-1/2'>
              <FcLinux className="text-9xl m-auto" />
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="text-4xl text-wallpepercolor font-bold dark:text-secondary">GNU/Linux</h2>
              <span className="text-xl text-wallpepercolor font-medium dark:text-white">En este modulo trabajamos con los fundamentos web, iniciando con javascript basico, despues trabajando la parte semantica de una web con HTML5 para despues trabajar los estilos con CSS y finalmente manejar git para control de versiones y github con netfly para el despliegue de nuestra web</span>
              <div>
                <FcGraduationCap className="text-6xl ml-auto" />
              </div>
            </div>
          </div>
        </a>

        <a href='https://drive.google.com/file/d/1VHO3r_fFttyNpt9298eslSg0xrU4chek/view?usp=share_link' target='blank'>
          <div className="w-96 h-max p-3 hover:scale-110 duration-300 dark:bg-wallpepercolor drop-shadow-2xl shadow-xl shadow-slate-400 dark:shadow-xl dark:shadow-slate-900">
            <div className='w-full h-1/2'>
              <SiVirtualbox className="text-9xl m-auto dark:text-blue-600" />
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="text-4xl text-wallpepercolor font-bold dark:text-secondary">Maquina Virtual </h2>
              <span className="text-xl text-wallpepercolor font-medium dark:text-white">En este modulo trabajamos con los fundamentos web, iniciando con javascript basico, despues trabajando la parte semantica de una web con HTML5 para despues trabajar los estilos con CSS y finalmente manejar git para control de versiones y github con netfly para el despliegue de nuestra web</span>
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
