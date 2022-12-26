import fameMovil from '../../image/fame_movil.gif'
import fame from '../../image/fame.gif'
import {AiFillGithub, AiOutlineFacebook, AiFillInstagram, AiFillLinkedin} from 'react-icons/ai'
import {GoLinkExternal} from 'react-icons/go'
import {SiAltiumdesigner, SiDatabricks} from 'react-icons/si'

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
              <span className="bg-[#0000009f] text-white rounded-lg p-2 sm:text-2xl">Salud mental</span>
              <span className="bg-[#0000009f] text-white rounded-lg p-2 sm:text-2xl">Programas</span>
              <span className="bg-[#0000009f] text-white rounded-lg p-2 sm:text-2xl">Ejercicios</span>
            </div>
            <div className="flex gap-4">
            <a href='https://fame-app.vercel.app/' target='blank'>
              <button className="border-2 border-secondary p-2  text-white sm:text-2xl hover:scale-105 duration-200">Ver mas</button>
            </a>
            <a href='https://www.nocountry.tech/' target='blank'>
              <button className="bg-wallpepercolor p-2  text-white sm:text-2xl hover:scale-105 duration-200">Participar</button>
            </a>
            </div>
            <div className="flex justify-end w-full items-end gap-2 p-5">
            <a href='https://fame-app.vercel.app/' target='blank'>
              <GoLinkExternal className="text-white text-2xl sm:text-4xl" />
            </a>
            </div>
          </div>
        </div>
        {/* content */}

      </div>

        <div>
          <div className="flex justify-end p-2 gap-3">
              <a href="https://www.facebook.com/profile.php?id=100076319509389" target='blank'>
              <AiOutlineFacebook className="text-wallpepercolor dark:text-white text-3xl" />
              </a>
              <a href="https://www.instagram.com/zilverk19/" target='blank'>
              <AiFillInstagram className="text-wallpepercolor dark:text-white text-3xl" />
              </a>
              <a href='https://github.com/Daniel1264' target='blank'>
              <AiFillGithub className="text-wallpepercolor dark:text-white text-3xl" />
              </a>
              <a href='https://www.linkedin.com/in/daniel-ramos-1ab664223/' target='blank'>
              <AiFillLinkedin className="text-wallpepercolor dark:text-white text-3xl" />
              </a>
          </div>

          <div className="w-full flex flex-wrap justify-center gap-14 items-center">
            <div className="w-[600px] h-[350px] bg-frontend relative bg-cover">
              <div className="bg-[#0000009c] h-full flex flex-col gap-4 relative p-1">
              <span className="text-3xl text-secondary font-semibold">En proceso</span>
                <h2 className="text-white font-medium text-5xl">Consulta Medica</h2>
                <p className="text-2xl text-white w-3/5 sm:w-4/5">Aplicación en proceso de creación y mantenimiento</p>
                <SiAltiumdesigner className="absolute text-9xl sm:text-[12em] right-0 top-10   sm:translate-x-20 text-secondary " />
              </div>
            </div>
            <div className="w-[600px] h-[350px] bg-dark relative bg-cover">
              <div className="bg-[#0000009c] h-full flex flex-col gap-4 relative p-1">
              <span className="text-3xl text-secondary font-semibold">En proceso</span>
                <h2 className="text-white font-medium text-5xl">Red Social</h2>
                <p className="text-2xl text-white w-3/5 sm:w-4/5">Aplicación en proceso de creación y mantenimiento</p>
                <SiDatabricks className="absolute text-9xl sm:text-[12em] right-0 top-10    sm:translate-x-20 text-secondary " />
              </div>
            </div>
          </div>

          {/* separacion */}

          <div className="w-full flex justify-center">
            <div className="w-4/5 h-full p-3 flex flex-wrap justify-center gap-4">

            <a href='https://wonderful-pasca-f7bbad.netlify.app' target='blank'>
              <div className="w-96 h-48 bg-wather bg-cover relative hover:scale-105 duration-150 cursor-pointer">
                <div className="absolute w-full h-full bg-[#0505059c]">
                </div>
                <div className="flex justify-center items-center w-full h-full">
                  <h2 className="text-white z-10 text-4xl font-semibold">WATHER APP</h2>
                </div>
              </div>
            </a>

              <a href='https://delicate-beignet-96ed12.netlify.app' target='blank'>
              <div className="w-96 h-48 bg-letras bg-cover relative hover:scale-105 duration-150 cursor-pointer">
                <div className="absolute w-full h-full bg-[#0505059c]">
                </div>
                <div className="flex justify-center items-center w-full h-full">
                  <h2 className="text-white z-10 text-4xl font-semibold">CRUD</h2>
                </div>
              </div>
              </a>

              <a href='https://stupendous-dragon-1d0cc0.netlify.app' target='blank'>
              <div className="w-96 h-48 bg-rick bg-cover relative hover:scale-105 duration-150 cursor-pointer">
                <div className="absolute w-full h-full bg-[#0505059c]">
                </div>
                <div className="flex justify-center items-center w-full h-full">
                  <h2 className="text-white z-10 text-4xl font-semibold">RICK AND MORTY</h2>
                </div>
              </div>
              </a>

              <a href='https://cerulean-semolina-78b1a3.netlify.app' target='blank'>
              <div className="w-96 h-48 bg-pokemon bg-cover relative hover:scale-105 duration-150 cursor-pointer">
                <div className="absolute w-full h-full bg-[#0505059c]">
                </div>
                <div className="flex justify-center items-center w-full h-full">
                  <h2 className="text-white z-10 text-4xl font-semibold">POKEDEX</h2>
                </div>
              </div>
              </a>

              <a href='https://cheerful-medovik-1c0cde.netlify.app' target='blank'>
              <div className="w-96 h-48 bg-cafeteria bg-cover relative hover:scale-105 duration-150 cursor-pointer">
                <div className="absolute w-full h-full bg-[#0505059c]">
                </div>
                <div className="flex justify-center items-center w-full h-full">
                  <h2 className="text-white z-10 text-4xl font-semibold">PORTAFOLIO</h2>
                </div>
              </div>
              </a>

              <a href='https://github.com/Daniel1264/Api_usuarios' target='blank'>
              <div className="w-96 h-48 bg-javascript bg-cover relative hover:scale-105 duration-150 cursor-pointer">
                <div className="absolute w-full h-full bg-[#0505059c]">
                </div>
                <div className="flex justify-center items-center w-full h-full">
                  <h2 className="text-white z-10 text-4xl font-semibold">CRUD</h2>
                </div>
              </div>
              </a>

              <a href='https://github.com/Daniel1264/chat' target='blank'>
              <div className="w-96 h-48 bg-javascript bg-cover relative hover:scale-105 duration-150 cursor-pointer">
                <div className="absolute w-full h-full bg-[#0505059c]">
                </div>
                <div className="flex justify-center items-center w-full h-full">
                  <h2 className="text-white z-10 text-4xl font-semibold">CHAT-API</h2>
                </div>
              </div>
              </a>

              <a href='https://github.com/Daniel1264/users_protected_routers' target='blank'>
              <div className="w-96 h-48 bg-javascript bg-cover relative hover:scale-105 duration-150 cursor-pointer">
                <div className="absolute w-full h-full bg-[#0505059c]">
                </div>
                <div className="flex justify-center items-center w-full h-full">
                  <h2 className="text-center text-white z-10 text-4xl font-semibold">API-RUTAS-PROTEGIDAS</h2>
                </div>
              </div>
              </a>

              <a href='https://github.com/Daniel1264/redSocial_Api' target='blank'>
              <div className="w-96 h-48 bg-javascript bg-cover relative hover:scale-105 duration-150 cursor-pointer">
                <div className="absolute w-full h-full bg-[#0505059c]">
                </div>
                <div className="flex justify-center items-center w-full h-full">
                  <h2 className="text-center text-white z-10 text-4xl font-semibold">API-RED-SOCIAL</h2>
                </div>
              </div>
              </a>

            </div>
          </div>

        </div>
    </div>
  )
}

export default Proyects
