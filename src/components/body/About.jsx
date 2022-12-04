import React from 'react'
import {AiOutlineMessage, AiFillGithub, AiFillLinkedin, AiFillHtml5, AiOutlineLaptop, AiOutlineAntDesign, AiOutlineDatabase} from 'react-icons/ai'
import perfil from '../../image/perfil.jpg'
import {DiCss3, DiJavascript1, DiReact, DiNodejsSmall} from 'react-icons/di'
import {SiRedux, SiPostgresql, SiSequelize, SiExpress} from 'react-icons/si'
import { Link } from 'react-router-dom'


const About = () => {
  return (
    <div className="w-full bg-white flex flex-col flex-wrap justify-center items-center sm:h-screen gap-2 p-2 dark:bg-wallpepercolor  font-sans font-semibold duration-200">
      <div className="sm:w-3/4 flex justify-center items-center  w-full  sm:h-full gap-5 flex-col sm:flex-row">
        <div data-aos="fade-up" data-aos-duration="1000" className="sm:w-3/5 w-4/5 relative sm:h-full  dark:bg-[rgb(10,25,47)] bg-white h-full rounded-lg shadow-lg shadow-black">
          <div className="w-full h-1/4 flex flex-col  justify-center items-center dark:bg-secondary bg-wallpepercolor  rounded-t-lg">
            <img className="rounded-full w-2/5 h-auto sm:absolute top-5 translate-y-20 sm:translate-y-0" src={perfil}/>
          </div>
          <div className='w-full flex flex-col justify-center gap-1 sm:gap-5 items-center p-3 h-1/2 mt-20'>
            <h2 className="text-3xl text-wallpepercolor text-center dark:text-secondary">Daniel Ramos</h2>
            <span className="text-2xl dark:text-white text-wallpepercolor">Frontend Developer React</span>
            <span className="text-lg text-center text-wallpepercolor dark:text-[#8892B0]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae quam culpa magnam ut sed pariatur dolo</span>
            <div className="flex w-full justify-evenly">
            <AiFillGithub className="text-5xl text-wallpepercolor dark:text-secondary" />
            <AiFillLinkedin className="text-5xl text-wallpepercolor dark:text-secondary" />
            <AiOutlineMessage className="text-5xl text-wallpepercolor dark:text-secondary" />
          </div>
          <div className="w-full flex justify-evenly mt-5">
            <button className="p-2  rounded-md border-2 border-wallpepercolor dark:border-secondary dark:hover:bg-secondary hover:bg-wallpepercolor duration-150 text-wallpepercolor dark:text-white hover:text-white">Descargar CV</button>
            <Link to='/contacto' className="p-2 dark:bg-secondary bg-wallpepercolor rounded-md text-white">Contactarme</Link>
          </div>
        </div>
        </div>
        <div data-aos="fade-left" data-aos-anchor="#example-anchor" data-aos-offset="600" data-aos-duration="600" className=" sm:w-4/5 sm:h-full w-4/5 p-2 overflow-y-auto flex flex-col-reverse rounded-lg justify-around gap-3 bg-wallpepercolor">
          <div className=" flex flex-wrap justify-center">
            <div className="w-56 flex flex-col gap-2">
            <AiOutlineLaptop className="text-4xl" />
            <h3 className="text-white text-2xl">FrontendDeveloper</h3>
            <span className="text-white">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam cumque perspiciatis consequatur nostrum h</span>
            </div>
            <div className="w-56 flex flex-col gap-2">
            <AiOutlineLaptop className="text-4xl" />
            <h3 className="text-white text-2xl">Maquetador Web</h3>
            <span className="text-white">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam cumque perspiciatis consequatur nostrum h</span>
            </div>
            <div className="w-56 flex flex-col gap-2">
            <AiOutlineLaptop className="text-4xl" />
            <h3 className="text-white text-2xl">Backend Developer</h3>
            <span className="text-white">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam cumque perspiciatis consequatur nostrum h</span>
            </div>
            <div className="w-56 flex flex-col gap-2">
            <AiOutlineLaptop className="text-4xl" />
            <h3 className="text-white text-2xl">FullStack</h3>
            <span className="text-white">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam cumque perspiciatis consequatur nostrum h</span>
            </div>
          </div>
          <div className=" flex justify-center flex-wrap gap-4  rounded-lg">
            <AiFillHtml5 className="text-7xl text-orange-500" />
            <DiCss3 className="text-7xl text-blue-800" />
            <DiJavascript1  className="text-7xl text-yellow-400"/>
            <DiReact className="text-7xl text-blue-500 " />
            <SiRedux className="text-7xl text-violet-800" />
            <DiNodejsSmall className="text-7xl text-green-700" />
            <SiPostgresql  className="text-7xl text-blue-900"/>
            <SiSequelize className="text-7xl text-blue-900" />
            <SiExpress className="text-7xl text-green-700" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
