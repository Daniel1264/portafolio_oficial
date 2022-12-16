import React from 'react'
import emailjs from '@emailjs/browser';
import { useRef } from 'react';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
        if(e.target.name.value && e.target.email.value && e.target.mnd.value) {
            emailjs.sendForm('service_77elxzi', 'template_f41wtrp', form.current, 'gkRD4ZcjR84wlknJe')
              .then((result) => {
                  console.log(result.text);
                  alert('se envio el correo!!')
              }, (error) => {
                  console.log(error.text);
              });
          } else {
            alert('porfavor rellene el campo faltante')
          }
        } 
  return (
    <div className="dark:bg-wallpepercolor bg-white w-full sm:h-screen flex sm:flex-row flex-col p-3 justify-center items-center lg:max-w-screen-xl lg:m-auto">
      <div className="sm:w-3/4 w-full  h-full flex flex-col items-center dark:bg-wallpepercolor bg-white sm:flex-row shadow-lg  gap-2">
        <div className="sm:w-1/2 w-full flex flex-col gap-3 p-3">
            <div>
                <h2 className="sm:text-5xl text-3xl mt-3 text-wallpepercolor dark:text-white font-semibold">Contactame</h2>
            </div>
            <form ref={form} onSubmit={sendEmail} className="flex flex-col justify-between h-full gap-3">
                <div className="flex flex-col">
                    <label htmlFor="name" className="text-wallpepercolor text-xl font-medium dark:text-white">Nombre</label>
                    <input type="text" id="name" placeholder="nombre" className="bg-transparent p-3 duration-300 outline-none border-b-2 dark:border-wallpepercolor dark:text-white dark:focus:border-white" />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="email" className="text-wallpepercolor text-xl font-medium dark:text-white">Correo</label>
                    <input type="email" id="email" placeholder="correo" className="dark:bg-transparent p-3 duration-300 outline-none border-b-2 dark:border-wallpepercolor dark:text-white dark:focus:border-white"  />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="mensaje" className="text-wallpepercolor text-xl font-medium dark:text-white">Mensaje</label>
                    <textarea placeholder="escribe tu mensaje" id="mnd" rows="6" cols="50" className="dark:bg-transparent border-b-2 dark:border-wallpepercolor dark:focus:border-white dark:text-white outline-none"></textarea>
                </div>
                <button className="tracking-wider shadow-2xl m-auto w-full p-2 dark:bg-secondary bg-wallpepercolor text-white hover:scale-105 duration-200">Enviar</button>
            </form>
        </div>
        <div className="sm:w-1/2 w-full h-full p-3 bg-white dark:bg-wallpepercolor flex flex-col justify-evenly overflow-y-auto gap-3">
            <div className="w-full dark:bg-wallpepercolor bg-white shadow-lg  rounded-sm p-3 hover:scale-105 duration-200">
                <h3 className="dark:text-white text-3xl text-wallpepercolor  font-medium">Enviar mensaje por WatsApp</h3>
                <p className="dark:text-white text-wallpepercolor ">Envia un mensaje directo a mi numero para hablar lo mas pronto y agendar llamada.</p>
                <a href='https://api.whatsapp.com/send?phone=529511531133' target='blank' className="text-secondary text-xl cursor-pointer">Enviar mensaje</a>
            </div>
            <div className="w-full dark:bg-wallpepercolor bg-white shadow-xl  rounded-sm p-3 hover:scale-105 duration-200">
                <h3 className="dark:text-white text-3xl text-wallpepercolor font-medium ">Enviar correo personalizado</h3>
                <p className="dark:text-white text-wallpepercolor ">Envia un mensaje con documentos, etc.</p>
                <a href='mailto:ramosperca015@gmail.com' className="text-secondary text-xl cursor-pointer">Enviar correo</a>
            </div>
            <div className="w-full dark:bg-wallpepercolor bg-white shadow-2xl rounded-sm p-3 hover:scale-105 duration-200">
                <h3 className="dark:text-white text-3xl text-wallpepercolor   font-medium">Contactar en Linkendln</h3>
                <p className="dark:text-white text-wallpepercolor ">Recorre mi perfil de Linkendln, obten mas informacion acerca de mi y mi trabajo</p>
                <a href='https://www.linkedin.com/in/daniel-ramos-1ab664223/' target='blank' className="text-secondary text-xl cursor-pointer">Ir</a>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
