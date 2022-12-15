import React from 'react'
import {GoLocation} from 'react-icons/go'
import {AiFillPhone, AiOutlineUser, AiOutlineMail, AiFillHeart} from 'react-icons/ai'
import {BsFillPatchCheckFill} from 'react-icons/bs'
import {BiMessageRoundedDots} from 'react-icons/bi'
import {IoMdRepeat} from 'react-icons/io'
import perfil from '../../image/perfil.jpg'


const About = () => {
  return (
    <div className="w-full h-auto dark:bg-wallpepercolor bg-white sm:h-full duration-150">
      <div className="w-full h-40 bg-post bg-cover bg-bottom dark:bg-dark dark:bg-top lg:h-56">
      </div>

        <div className="w-full sm:h-full">
          <div className=" w-full p-2 flex flex-col sm:flex-row sm:gap-3 sm:justify-center sm:max-w-max sm:h-full">
            <div className=" w-full rounded-lg p-2  bg-white shadow-[0_35px_60px_-15px_rgba(0,0,0,0.7)] flex flex-col gap-2  justify-center items-center -translate-y-10 dark:bg-wallpepercolor sm:items-start sm:justify-start sm:w-[40%] sm:max-h-max  sm:fixed sm:left-[8%] lg:static lg:w-[25%] lg:ml-20 lg:p-4 lg:gap-3 lg:-translate-y-28">
              <div className="sm:w-full sm:flex sm:justify-center">
                <img className="w-56 h-56 rounded-full lg:w-44 lg:h-44" src={perfil} />
              </div>
              <div className="w-full text-center relative">
                  <BsFillPatchCheckFill className="absolute right-4 top-[20%] text-2xl lg:text-2xl text-light dark:text-secondary"/>
                  <h2 className="text-[10vw] font-semibold dark:text-white sm:text-[3vw] lg:text-left lg:text-[2.5vw] ">Daniel Ramos</h2>
                <span className="text-[6vw] dark:text-white sm:text-[2vw]">Frontend Jr React</span>
              </div>
              <div>
                <h2 className="text-xl lg:text-2xl dark:text-white">Infomación básica</h2>
              </div>
              <div className="w-full p-3 flex flex-col gap-5">
                <div className="flex justify-between w-full">
                  <GoLocation className="text-3xl text-light dark:text-secondary lg:text-[2vw]" />
                  <span className="text-xl font-medium dark:text-white lg:text-[1.1vw]">Oaxaca, Valles Centrales 71405</span>
                </div>
                <div className="w-full flex justify-between">
                  <AiFillPhone className="text-3xl text-light dark:text-secondary lg:text-[2vw]" />
                  <span className="text-xl font-medium dark:text-white lg:text-[1.2vw]">+52 951 153 1133</span>
                </div>
                <div className="w-full flex justify-between">
                  <AiOutlineUser className="text-3xl text-light dark:text-secondary lg:text-[2vw]" />
                  <span className="text-xl font-medium dark:text-white lg:text-[1.2vw]">20 años</span>
                </div>
                <div className="w-full flex justify-between">
                  <AiOutlineMail className="text-3xl text-light dark:text-secondary lg:text-[2vw]" />
                  <span className="text-xl font-medium dark:text-white lg:text-[1.2vw]">ramosperca015@gmail.com</span>
                </div>
              </div>
            </div>

            <div className="w-full flex flex-col gap-3 sm:w-2/4  sm:max-w-max sm:ml-[50%] lg:ml-0 lg:w-[50%] lg:items-center">
            <div data-aos="fade-up" className="shadow-[#00000071] w-full rounded-lg shadow-lg p-2 sm:p-0 lg:w-4/5 ">
              <div className="w-full flex flex-col justify-center gap-4 sm:flex-row ">
                <div className="w-full flex flex-col justify-center items-center lg:justify-start lg:items-start">
                  <img src={perfil} className="w-56 h-56 rounded-full sm:rounded-none sm:w-56 sm:h-full lg:w-36" />
                </div>
                <div className="flex justify-between flex-col">
                  <div className="w-full relative">
                      <span className="text-[10vw] text-left w-full dark:text-white sm:text-[3vw] lg:text-[1.5vw]">Frontend React</span>
                      <BsFillPatchCheckFill className="absolute right-10 text-2xl top-5 text-black dark:text-secondary sm:w-[2vw] sm:top-1 sm:left-2/4" />
                  </div>
                  <span className="text-[5vw] dark:text-white sm:text-[1.7vw] lg:text-[1vw]">Trabajo en soluciones de frontend con react, usando herramientas como axios para peticiones asincronas, hooks, react-router, redux, talwindcss entre otras</span>
                  <div className="flex items-center gap-6 dark:text-white">
                    <BiMessageRoundedDots className="text-2xl" />
                    <IoMdRepeat className="text-2xl" />
                    <button className="focus:text-red-700 hover:scale-125 duration-150">
                    <AiFillHeart className="text-2xl" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div data-aos="fade-up" className="shadow-[#00000071] w-full rounded-lg shadow-lg p-2 sm:p-0 lg:w-4/5 ">
              <div className="w-full flex flex-col justify-center gap-4 sm:flex-row ">
                <div className="w-full flex flex-col justify-center items-center lg:justify-start lg:items-start">
                  <img src={perfil} className="w-56 h-56 rounded-full sm:rounded-none sm:w-56 sm:h-full lg:w-36" />
                </div>
                <div className="flex justify-between flex-col">
                  <div className="w-full relative">
                      <span className="text-[10vw] text-left w-full dark:text-white sm:text-[3vw] lg:text-[1.5vw]">Frontend React</span>
                      <BsFillPatchCheckFill className="absolute right-10 text-2xl top-5 text-white dark:text-secondary sm:w-[2vw] sm:top-1 sm:left-2/4" />
                  </div>
                  <span className="text-[5vw] dark:text-white sm:text-[1.7vw] lg:text-[1vw]">Lorem ipsum dolor sit amet consectetur ad perferendis, quae quam eos saepe eaque excepturi eius vitae cum dolore quos!</span>
                  <div className="flex items-center gap-6 dark:text-white">
                    <BiMessageRoundedDots className="text-2xl" />
                    <IoMdRepeat className="text-2xl" />
                    <button className="focus:text-red-700 hover:scale-125 duration-150">
                    <AiFillHeart className="text-2xl" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="shadow-[#00000071] w-full rounded-lg shadow-lg p-2 sm:p-0 lg:w-4/5 ">
              <div className="w-full flex flex-col justify-center gap-4 sm:flex-row ">
                <div className="w-full flex flex-col justify-center items-center lg:justify-start lg:items-start">
                  <img src={perfil} className="w-56 h-56 rounded-full sm:rounded-none sm:w-56 sm:h-full lg:w-36" />
                </div>
                <div className="flex justify-between flex-col">
                  <div className="w-full relative">
                      <span className="text-[10vw] text-left w-full dark:text-white sm:text-[3vw] lg:text-[1.5vw]">Frontend React</span>
                      <BsFillPatchCheckFill className="absolute right-10 top-5 text-2xl text-white dark:text-secondary sm:w-[2vw] sm:top-1 sm:left-2/4" />
                  </div>
                  <span className="text-[5vw] dark:text-white sm:text-[1.7vw] lg:text-[1vw]">Lorem ipsum dolor sit amet consectetur ad perferendis, quae quam eos saepe eaque excepturi eius vitae cum dolore quos!</span>
                  <div className="flex items-center gap-6 dark:text-white">
                    <BiMessageRoundedDots className="text-2xl" />
                    <IoMdRepeat className="text-2xl" />
                    <button className="focus:text-red-700 hover:scale-125 duration-150">
                    <AiFillHeart className="text-2xl" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div data-aos="zoom-out" className="hidden bg-white dark:bg-wallpepercolor lg:w-[25%] lg:block lg:rounded-lg lg:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.7)] lg:h-[90%] lg:mr-4">
            <div className="w-full bg-cuarto h-52 bg-center bg-cover">
            </div>
            <div className="   p-5 dark:bg-wallpepercolor">
              <h2 className="dark:text-white">Contactame</h2>
              <p className="dark:text-white">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus illo exercitationem quaerat dolorem inventore in autem rem odio cupiditate, qui quo distinctio soluta eligendi veniam repellendus amet rerum quis! Nobis.</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default About