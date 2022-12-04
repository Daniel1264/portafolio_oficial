import React from 'react'
import {FiArrowRightCircle} from 'react-icons/fi'

const Certificate = () => {
  return (
    <div className="w-full bg-white dark:bg-wallpepercolor  flex justify-center items-center">
      <div className="w-5/6 h-full flex justify-center items-center flex-col">

        <div data-aos="fade-up" className="flex flex-col h-screen justify-center items-center gap-3">
        <h2 className="font-extrabold text-5xl dark:text-white text-wallpepercolor">Academlo</h2>
        <div className="w-full h-3/4 flex justify-center">
        <div className="relative w-1/2 ">
          <div className="bg-certificado bg-cover bg-center w-full h-full absolute">
            <div className="w-full h-full bg-[#05051a9a] text-white text-5xl hover:bg-transparent duration-200"/>
          </div>
          </div>
          <div className=" flex-col flex justify-center w-2/5">
          <div className="-translate-x-10 flex-col flex gap-5 ">
            <span className="text-wallpepercolor dark:text-white font-mono  text-right block">frontend developer con react</span>
            <h2 className="text-wallpepercolor dark:text-white text-right  font-extrabold text-4xl">Certificado</h2>
            <div className="bg-wallpepercolor dark:bg-white p-2 w-full  relative">
              <span className="text-white dark:text-wallpepercolor  tracking-wide">Lorem ipsum dolor sit, Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex quis optio, voluptatum dolore et neque! Sequi ipsa sint, accusa amet consectetur adipisicing elit. Ea animi, vel la</span>
            </div>
            <div>
              <span className="block text-right w-3/4 ml-auto font-mono   text-wallpepercolor dark:text-white font-extralight">HTML5 CSS JavaScript React Axios Redux Redux React-router</span>
            </div>
            <div className=" flex justify-end">
              <FiArrowRightCircle className='dark:text-white text-wallpepercolor text-4xl animate-bounce' />
            </div>
            </div>
          </div>
        </div>
        </div>

        <div data-aos="fade-up" className="flex flex-col h-screen justify-center items-center gap-3">
        <h2 className="font-extrabold text-5xl dark:text-white text-wallpepercolor">Academlo</h2>
        <div className="w-full h-3/4 flex justify-center">
        <div className="relative w-1/2 ">
          <div className="bg-fundamentos bg-cover bg-center w-full h-full absolute">
            <div className="w-full h-full bg-[#05051a9a] text-white text-5xl hover:bg-transparent duration-200"/>
          </div>
          </div>
          <div className=" flex-col flex justify-center w-2/5">
          <div className="-translate-x-10 flex-col flex gap-5 ">
            <span className="text-wallpepercolor dark:text-white font-mono  text-right block">fundamentos web</span>
            <h2 className="text-wallpepercolor dark:text-white text-right  font-extrabold text-4xl">Certificado</h2>
            <div className="bg-wallpepercolor dark:bg-white p-2 w-full relative">
              <span className="text-white dark:text-wallpepercolor tracking-wide">Lorem ipsum dolor sit, Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex quis optio, voluptatum dolore et neque! Sequi ipsa sint, accusa amet consectetur adipisicing elit. Ea animi, vel la</span>
            </div>
            <div>
              <span className="block text-right w-3/4 ml-auto font-mono  text-wallpepercolor dark:text-white font-extralight">HTML5 CSS JavaScript</span>
            </div>
            <div className='flex justify-end'>
              <FiArrowRightCircle className='dark:text-white text-wallpepercolor text-4xl animate-bounce' />
            </div>
            </div>
          </div>
        </div>
        </div>

        <div data-aos="fade-up" className="flex flex-col h-screen justify-center items-center gap-3">
        <h2 className="font-extrabold text-5xl dark:text-white text-wallpepercolor">Academlo</h2>
        <div className="w-full h-3/4 flex justify-center">
        <div className="relative w-1/2 ">
          <div className="bg-cobao bg-cover bg-center w-full h-full absolute">
            <div className="w-full h-full bg-[#05051a9a] text-white text-5xl hover:bg-transparent duration-200"/>
          </div>
          </div>
          <div className=" flex-col flex justify-center w-2/5">
          <div className="-translate-x-10 flex-col flex gap-5 ">
            <span className="text-wallpepercolor dark:text-white font-mono  text-right block">Certificado bachillerato</span>
            <h2 className="text-wallpepercolor dark:text-white text-right  font-extrabold text-4xl">Certificado</h2>
            <div className="bg-wallpepercolor dark:bg-white p-2 w-full relative">
              <span className="text-white dark:text-wallpepercolor tracking-wide">Lorem ipsum dolor sit, Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex quis optio, voluptatum dolore et neque! Sequi ipsa sint, accusa amet consectetur adipisicing elit. Ea animi, vel la</span>
            </div>
            <div>
              <span className="block text-right w-3/4 ml-auto font-mono  text-wallpepercolor dark:text-white font-extralight">DACO dibujo arquitectonico y de construccion</span>
            </div>
            <div className='flex justify-end'>
              <FiArrowRightCircle className='dark:text-white text-wallpepercolor text-4xl animate-bounce' />
            </div>
            </div>
          </div>
        </div>
        </div>

      </div>
    </div>
  )
}

export default Certificate
