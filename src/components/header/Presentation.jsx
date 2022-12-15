import Clock from "../layout/Clock"
import { AiOutlineFacebook, AiOutlineMail} from 'react-icons/ai'
import {BsInstagram} from 'react-icons/bs'
import '../../index.css'


const Presentation = () => {

  return (
    <div className=' dark:bg-wallpepercolor bg-white flex items-center justify-center h-screen duration-300 '>
      <div data-aos="fade-right" className="flex flex-col justify-center items-center gap-1 p-3 max-w-screen-xl">
      <div className="absolute flex gap-4 top-5 right-9">
        <BsInstagram className="text-2xl text-wallpepercolor dark:text-white" />
        <AiOutlineFacebook className="text-2xl text-wallpepercolor dark:text-white" />
        <AiOutlineMail className="text-2xl text-wallpepercolor dark:text-white" />
      </div>
      <div className="hidden lg:block lg:w-56 lg:absolute lg:bg-wallpepercolor lg:dark:bg-secondary lg:right-0 lg:drop-shadow-2xl lg:shadow-lg">
      <Clock />
      </div>
      <span className=" text-2xl lg:text-[2vw] text-center sm:mr-auto font-mono text-wallpepercolor dark:text-first">hola yo soy</span>
      <h1 className="line sm:text-9xl text-6xl  lg:text-[14vw] text-transparent bg-clip-text bg-gradient-to-r  dark:from-secondary dark:to-red-700 from-wallpepercolor to-black font-sans font-black text-center tracking-widest text-wallpepercolor">DANIEL</h1>
      <div className="flex w-full justify-center items-center gap-4 mt-10">
        <div className="w-full h-[1px] dark:bg-secondary bg-wallpepercolor"/>
        <span className="text-2xl text-[#111010b4] dark:text-first font-mono">ramosperca015@gmail.com</span>
        <div className="w-full h-[1px] dark:bg-secondary bg-wallpepercolor" />
      </div>
      </div>
    </div>
  )
}

export default Presentation
