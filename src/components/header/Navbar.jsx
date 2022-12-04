import React from 'react'
import { useState } from 'react'
import {BsFillArrowLeftSquareFill, BsMoonFill} from 'react-icons/bs';
import {CiLight} from 'react-icons/ci'
import {AiOutlineMessage, AiOutlineHome, AiOutlineUser, AiOutlineCodeSandbox,  AiOutlineContacts, AiFillGithub, AiFillLinkedin, AiOutlineSafetyCertificate} from 'react-icons/ai'
import { Link } from 'react-router-dom';
const Navbar = () => {
    
    const [open, setOpen] = useState(false)
    const [icon, setIcon] = useState(false)

    const changeLightMode = () => {
      document.documentElement.classList.toggle('dark')
      setIcon(!icon)
    }

  return (
    <div className={`h-screen z-10 bg-white dark:bg-wallpepercolor fixed flex shadow-lg shadow-black items-center duration-200 ${open ? "w-60" : "sm:w-20"} ${!open && "w-0"}`}>
      <div className="absolute top-1 left-full p-2" onClick={() => setOpen(!open)}>
        <BsFillArrowLeftSquareFill className={` cursor-pointer dark:text-white text-wallpepercolor text-3xl  duration-300 ${!open && "rotate-180"}`} />
      </div>
      <div className={`flex flex-col gap-4 w-full  p-4 relative ${!open && "sm:items-center"}`}>
        <Link to='/' className="flex items-center justify-between hover:bg-wallpepercolor hover:text-white  dark:hover:bg-secondary p-1 rounded-lg duration-300 cursor-pointer">
            <AiOutlineHome className="text-3xl dark:text-white  " />
            <span className={`w-1/2 dark:text-white hover:text-white text-wallpepercolor dark:hover:text-black ${!open && "hidden"}`}>Home</span>
        </Link>
        <Link to='/sobre_mi' className="flex items-center justify-between hover:bg-wallpepercolor hover:text-white  dark:hover:bg-secondary p-1 rounded-lg duration-300 cursor-pointer">
            <AiOutlineUser className="text-3xl dark:text-white  " />
            <span className={`w-1/2 dark:text-white hover:text-white text-wallpepercolor dark:hover:text-black ${!open && "hidden"}`}>Sobre mi</span>
        </Link>
        <Link to='/proyectos' className="flex items-center justify-between hover:bg-wallpepercolor hover:text-white  dark:hover:bg-secondary p-1 rounded-lg duration-300 cursor-pointer">
            <AiOutlineCodeSandbox className="text-3xl dark:text-white  " />
            <span className={`w-1/2 dark:text-white hover:text-white text-wallpepercolor dark:hover:text-black ${!open && "hidden"}`}>proyectos</span>
        </Link>
        <Link to='/certificado' className="flex items-center justify-between hover:bg-wallpepercolor hover:text-white  dark:hover:bg-secondary p-1 rounded-lg duration-300 cursor-pointer">
            <AiOutlineSafetyCertificate className="text-3xl dark:text-white  " />
            <span className={`w-1/2 dark:text-white hover:text-white text-wallpepercolor dark:hover:text-black ${!open && "hidden"}`}>certificados</span>
        </Link>
        <Link to='/contacto' className="flex items-center justify-between hover:bg-wallpepercolor hover:text-white  dark:hover:bg-secondary p-1 rounded-lg duration-300 cursor-pointer">
            <AiOutlineContacts className="text-3xl dark:text-white  " />
            <span className={`w-1/2 dark:text-white hover:text-white text-wallpepercolor dark:hover:text-black ${!open && "hidden"}`}>contacto</span>
        </Link>
        <a href='https://github.com/Daniel1264' target='blank' className="flex items-center justify-between hover:bg-wallpepercolor hover:text-white  dark:hover:bg-secondary p-1 rounded-lg duration-300 cursor-pointer">
            <AiFillGithub className="text-3xl dark:text-white  " />
            <span className={`w-1/2 dark:text-white hover:text-white text-wallpepercolor dark:hover:text-black ${!open && "hidden"}`}>GitHub</span>
        </a>
        <a href='https://www.linkedin.com/in/daniel-ramos-1ab664223/' target='blank' className="flex items-center justify-between hover:bg-wallpepercolor hover:text-white  dark:hover:bg-secondary p-1 rounded-lg duration-300 cursor-pointer">
            <AiFillLinkedin className="text-3xl dark:text-white  " />
            <span className={`w-1/2 dark:text-white hover:text-white text-wallpepercolor dark:hover:text-black ${!open && "hidden"}`}>GitHub</span>
        </a>
        <a href='https://api.whatsapp.com/send?phone=529511531133' target='blank' className="flex items-center justify-between hover:bg-wallpepercolor hover:text-white  dark:hover:bg-secondary p-1 rounded-lg duration-300 cursor-pointer">
            <AiOutlineMessage className="text-3xl dark:text-white  " />
            <span className={`w-1/2 dark:text-white hover:text-white text-wallpepercolor dark:hover:text-black ${!open && "hidden"}`}>WatsApp</span>
        </a>
        <button onClick={changeLightMode} className=" flex items-center justify-between hover:bg-wallpepercolor hover:text-white  dark:hover:bg-secondary p-1 rounded-lg duration-300 cursor-pointer">
        {!icon ? <BsMoonFill className=" text-3xl dark:text-white" /> : <CiLight className="text-3xl dark:text-white" />}
            <span className={`w-1/2  text-left dark:text-white hover:text-white text-wallpepercolor dark:hover:text-black ${!open && "hidden"}`}>{icon ? 'light' : 'dark'}</span>
        </button>
      </div>
    </div>
  )
}
//  https://api.whatsapp.com/send?phone=529511531133
export default Navbar
