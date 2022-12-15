import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const clock = () => {

    const [time, setTime] = useState()

    useEffect(() => {
        setInterval(() =>{
            let time = new Date().getHours()
            let minuts = new Date().getMinutes()
            let seconds = new Date().getSeconds()
            setTime(`${time}  ${minuts} ${seconds}`)
        },1000)
    })
  return (
    <div className="w-full flex justify-center">
      {
        <h2 className="text-9xl font-medium text-white flex text-center flex-col">{time}</h2>
      }
    </div>
  )
}

export default clock
