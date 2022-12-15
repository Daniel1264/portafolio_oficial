import React from 'react'
import {FiArrowRightCircle} from 'react-icons/fi'
import { useState } from 'react'

const Certificate = () => {

  const [showInformation, setShowInformation] = useState(false)

  const handleClick = () => {
    setShowInformation(!showInformation)
  }
  return (
    <div className="w-full bg-white dark:bg-wallpepercolor h-screen">
      <div className="w-4/5 h-full m-auto flex justify-center items-center gap-5 flex-wrap ">
        <div onClick={handleClick}  className="w-96 h-96 bg-certificado bg-cover bg-center relative overflow-hidden">
          <div className={`flex flex-col justify-center items-center  w-full h-full absolute bg-secondary duration-100 ${showInformation ? 'scale-100 rounded-none' : 'scale-0 rounded-full'}`}>
            <h2 className="text-3xl text-center text-white">Desarrollo frontend con react.js</h2>
          </div>
        </div>
        <div onClick={handleClick}  className="w-96 h-96 bg-certificado bg-cover bg-center relative overflow-hidden">
          <div className={`flex flex-col justify-center items-center  w-full h-full absolute bg-secondary duration-100 ${showInformation ? 'scale-100 rounded-none' : 'scale-0 rounded-full'}`}>
            <h2 className="text-3xl text-center text-white">Desarrollo frontend con react.js</h2>
          </div>
        </div>
        <div onClick={handleClick}  className="w-96 h-96 bg-certificado bg-cover bg-center relative overflow-hidden">
          <div className={`flex flex-col justify-center items-center  w-full h-full absolute bg-secondary duration-100 ${showInformation ? 'scale-100 rounded-none' : 'scale-0 rounded-full'}`}>
            <h2 className="text-3xl text-center text-white">Desarrollo frontend con react.js</h2>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Certificate
