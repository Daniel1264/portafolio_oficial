import Clock from "../layout/Clock"
import { AiOutlineFacebook, AiOutlineMail} from 'react-icons/ai'
import {BsInstagram} from 'react-icons/bs'
import '../../index.css'


const Presentation = () => {

  return (
    <div className=' dark:bg-wallpepercolor  flex items-center justify-center h-screen duration-300 '>
      <div className="flex flex-col justify-center items-center  gap-1 p-3 max-w-screen-xl">
      <div className="absolute w-[85%] h-[90%] border-2 border-gray-600 top-5 " />
      <span className="absolute text-5xl  font-extrabold top-0 bg-white  right-5  sm:top-auto sm:bottom-[6%] sm:text-7xl sm:right-16 dark:bg-wallpepercolor"><span className="text-transparent bg-clip-text bg-city bg-center">DR</span></span>
      <div className="absolute flex gap-8 bottom-[5%] left-[6%] bg-white p-2 dark:bg-wallpepercolor">
        <a href="https://www.instagram.com/zilverk19/" target='blank'>
        <BsInstagram className="text-2xl text-wallpepercolor dark:text-secondary hover:scale-125 duration-150" />
        </a>
        <a href="https://www.facebook.com/profile.php?id=100076319509389" target='blank'>
        <AiOutlineFacebook className="text-2xl text-wallpepercolor dark:text-secondary hover:scale-125 duration-150" />
        </a>
        <a href='mailto:ramosperca015@gmail.com'>
        <AiOutlineMail className="text-2xl text-wallpepercolor dark:text-secondary hover:scale-125 duration-150" />
        </a>
      </div>
      <div className="hidden lg:flex lg:justify-between lg:w-44 lg:h-96 lg:absolute lg:right-16 lg:bg-wallpepercolor lg:dark:bg-secondary  lg:top-0 lg:drop-shadow-2xl lg:shadow-lg">
      <Clock />
      <div className="flex flex-col justify-between bg-wallpepercolor dark:bg-secondary p-2">
        <span className=" text-white text-3xl">H</span>
        <span className=" text-white text-3xl">M</span>
        <span className=" text-white text-3xl">S</span>
      </div>
      </div>
      <span data-aos="fade-right"  className=" text-2xl lg:text-[2vw] text-center sm:mr-auto font-mono text-wallpepercolor dark:text-first">hola, yo soy</span>
      <h1 data-aos="fade-right"  className="line sm:text-9xl text-7xl  lg:text-[14vw] text-transparent bg-clip-text bg-gradient-to-r  dark:from-secondary dark:to-red-700 from-wallpepercolor to-black font-sans font-black text-center tracking-widest text-wallpepercolor">DANIEL</h1>
      <div data-aos="fade-right"  className="flex w-full justify-center items-center gap-4 mt-10">
        <div className="w-full h-[1px] dark:bg-secondary bg-wallpepercolor"/>
        <span className="text-[4vw] text-[#111010b4] dark:text-first font-mono sm:text-4xl">ramosperca015@gmail.com</span>
        <div className="w-full h-[1px] dark:bg-secondary bg-wallpepercolor" />
      </div>
      </div>
    </div>
  )
}

export default Presentation
