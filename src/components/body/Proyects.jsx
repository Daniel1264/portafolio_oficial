import fameMovil from '../../image/fame_movil.gif'
import fame from '../../image/fame.gif'
import {AiFillGithub, AiOutlineFacebook, AiFillInstagram, AiFillLinkedin} from 'react-icons/ai'
import {GoLinkExternal} from 'react-icons/go'

const Proyects = () => {
  return (
    <div className="dark:bg-wallpepercolor  w-full h-full">
      <div className="w-full  h-[450px] relative">
        <div className=" absolute w-full h-[450px] bg-[#0000006c] z-10" ></div> 
        <div className='w-full  relative'>
          <img className="w-full object-cover h-[450px]  sm:hidden" src={fameMovil} />
          <img className="hidden  sm:block sm:w-full sm:object-cover  sm:object-right sm:h-[450px]" src={fame} />
          <div className="absolute bottom-0 flex flex-col gap-10 w-full sm:pl-24 z-20">
            <h2 className="text-3xl text-white font-semibold sm:text-4xl lg:text-5xl">Fame App <span className="text-secondary font-bold">No-Country</span></h2> 
            <div className="flex gap-2 flex-wrap">
              <span className="bg-[#0000009f] text-white rounded-lg p-2 sm:text-2xl">Nuevas armas</span>
              <span className="bg-[#0000009f] text-white rounded-lg p-2 sm:text-2xl">Nuwvo nivel</span>
              <span className="bg-[#0000009f] text-white rounded-lg p-2 sm:text-2xl">Mejor pass</span>
            </div>
            <div className="flex gap-4">
              <button className="border-2 border-secondary p-2  text-white sm:text-2xl">Ver mas</button>
              <button className="bg-wallpepercolor p-2  text-white sm:text-2xl">Participar</button>
            </div>
            <div className="flex justify-end w-full items-end gap-2 p-5">
              <AiFillGithub className="text-white text-2xl sm:text-4xl" />
              <GoLinkExternal className="text-white text-2xl sm:text-4xl" />
            </div>
          </div>
        </div>
        {/* content */}

      </div>
        <div>
          <div className="flex justify-end p-2 gap-3">
              <AiOutlineFacebook className="text-wallpepercolor dark:text-white text-3xl" />
              <AiFillInstagram className="text-wallpepercolor dark:text-white text-3xl" />
              <AiFillGithub className="text-wallpepercolor dark:text-white text-3xl" />
              <AiFillLinkedin className="text-wallpepercolor dark:text-white text-3xl" />
          </div>

          {/* separacion */}

          <div className="w-full flex justify-center">
            <div className="w-4/5 h-full p-3 flex flex-wrap justify-center gap-4">
              <div className="w-96 h-48 bg-warzone bg-cover relative hover:scale-105 duration-150 cursor-pointer">
                <div className="absolute w-full h-full bg-[#0505059c]">
                </div>
                <div className="flex justify-center items-center w-full h-full">
                  <h2 className="text-white z-10 text-3xl">TITLE OF GAME</h2>
                </div>
              </div>

              <div className="w-96 h-48 bg-letras bg-cover relative hover:scale-105 duration-150 cursor-pointer">
                <div className="absolute w-full h-full bg-[#0505059c]">
                </div>
                <div className="flex justify-center items-center w-full h-full">
                  <h2 className="text-white z-10 text-3xl">TITLE OF GAME</h2>
                </div>
              </div>

              <div className="w-96 h-48 bg-ninja bg-cover relative hover:scale-105 duration-150 cursor-pointer">
                <div className="absolute w-full h-full bg-[#0505059c]">
                </div>
                <div className="flex justify-center items-center w-full h-full">
                  <h2 className="text-white z-10 text-3xl">TITLE OF GAME</h2>
                </div>
              </div>

              <div className="w-96 h-48 bg-luna bg-cover relative hover:scale-105 duration-150 cursor-pointer">
                <div className="absolute w-full h-full bg-[#0505059c]">
                </div>
                <div className="flex justify-center items-center w-full h-full">
                  <h2 className="text-white z-10 text-3xl">TITLE OF GAME</h2>
                </div>
              </div>

              <div className="w-96 h-48 bg-espada bg-cover relative hover:scale-105 duration-150 cursor-pointer">
                <div className="absolute w-full h-full bg-[#0505059c]">
                </div>
                <div className="flex justify-center items-center w-full h-full">
                  <h2 className="text-white z-10 text-3xl">TITLE OF GAME</h2>
                </div>
              </div>

              <div className="w-96 h-48 bg-gears bg-cover relative hover:scale-105 duration-150 cursor-pointer">
                <div className="absolute w-full h-full bg-[#0505059c]">
                </div>
                <div className="flex justify-center items-center w-full h-full">
                  <h2 className="text-white z-10 text-3xl">TITLE OF GAME</h2>
                </div>
              </div>

            </div>
          </div>
        </div>
    </div>
  )
}

export default Proyects
