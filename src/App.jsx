import Navbar from "./components/header/Navbar"
import Presentation from "./components/header/Presentation"
import {  Routes, Route } from "react-router-dom"
import About from "./components/body/About"
import Proyects from "./components/body/Proyects"
import Contact from "./components/body/Contact"
import Certificate from "./components/body/Certificate"

function App() {

  return (
    <div className="dark:bg-wallpepercolor w-full  bg-white h-full overflow-hidden">
        <Navbar />
            <Routes>
              <Route path="/" element={<Presentation />} />
              <Route path="/sobre_mi" element={<About />} />
              <Route path="/proyectos" element={<Proyects />} />                                  
              <Route path="/contacto" element={<Contact />} />
              <Route path="/certificado" element={<Certificate />} />
            </Routes>
    </div>
  )
}

export default App
