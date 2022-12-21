import React from 'react'
import {FcGraduationCap} from 'react-icons/fc'

const Certificate = () => {

  return (
    <div className="w-full  h-full  bg-white dark:bg-wallpepercolor min-h-screen flex justify-center items-center">
      <div className="w-[90%] sm:ml-10 h-full min-h-screen  gap-4 flex justify-center flex-wrap p-3">

        <a href='https://certificates.academlo.com/en/verify/08125827091851?ref=email' target='blank'>
          <div data-aos="fade-up" className="w-[400px] h-full min-h-[650px] bg-setupMovil bg-center relative dark:bg-setup">
            <div className=" absolute right-1 bottom-3">
              <h2 className="text-white text-8xl text-right dark:text-secondary">01</h2>
              <span className="text-white text-2xl">Academlo Frontend With React</span>
            </div>
          </div>
        </a>

        <a href='https://certificates.academlo.com/en/verify/44248802758901?ref=email' target='blank'>
          <div data-aos="fade-up" className="w-[400px] h-full min-h-[650px]   bg-setupMovil bg-center relative dark:bg-setup">
            <div className=" absolute right-1 bottom-3">
              <h2 className="text-white text-8xl text-right dark:text-secondary">02</h2>
              <span className="text-white text-2xl">Academlo Fundamentos</span>
            </div>
          </div>
        </a>

        <a href='https://drive.google.com/file/d/1BNfgsLe-CRw1-TW_xXL0F9uP888xqye7/view?usp=share_link' target='blank'>
          <div data-aos="fade-up" className="w-[400px] h-full min-h-[650px]   bg-setupMovil bg-center relative dark:bg-setup">
            <div className=" absolute right-1 bottom-3">
              <h2 className="text-white text-8xl text-right dark:text-secondary">03</h2>
              <span className="text-white text-2xl">ArtistCode Linux</span>
            </div>
          </div>
        </a>

        <a href='https://drive.google.com/file/d/1VHO3r_fFttyNpt9298eslSg0xrU4chek/view?usp=share_link' target='blank'>
          <div data-aos="fade-up" className="w-[400px] h-full min-h-[650px]   bg-setupMovil bg-center relative dark:bg-setup">
            <div className=" absolute right-1 bottom-3">
              <h2 className="text-white text-8xl text-right dark:text-secondary">04</h2>
              <span className="text-white text-2xl">ArtistCode Máquina Virtual</span>
            </div>
          </div>
        </a>


      </div>
    </div>
  )
}

export default Certificate
