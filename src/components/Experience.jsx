import React from 'react'

const Experience = () => {
  return (
    <div className='mb-14 '>
    <h2 className="text-4xl font-bold text-gray-400 text-center mt-20 mb-5">Experiencia</h2>

    {/* Badge centrado */}
    <div className="flex justify-center mb-4">
      <span className="bg-yellow-500/20 text-yellow-500 text-xs font-semibold px-4 py-1 rounded-full border border-yellow-500 shadow-sm tracking-wide mb-1">
        Abierto a propuestas
      </span>
    </div>

    <div className="bg-[rgb(22,24,36)] rounded-2xl p-6 w-[50%] border border-gray-700 w-full">

      <div className="flex flex-row justify-start items-center">
        <img src="/icons/nunegal.png" alt="Empresa" className="w-16 h-auto mr-3 rounded-2xl" />
        <h1 className="text-2xl font-bold text-gray-400">- Desarrollador Software</h1>
      </div>

      <h1 className="text-l font-regular text-gray-500 mt-2 mb-2">Septiembre 2024 - Noviembre 2024</h1>
        
      <div>
        <ul className="list-disc list-inside mt-5 ml-4 text-gray-400 text-base">
          <li>Expandí mis conocimientos en <span className="text-yellow-500 font-bold">Spring Boot</span>.</li>
          <li>Usé <span className="text-yellow-500 font-bold">Thymeleaf</span>, <span className="text-yellow-500 font-bold">Javascript</span> y otras herramientas de frontend.</li>
          <li>Creación de un <span className="text-yellow-500 font-bold">aplicación web</span> en solitario para ventas online.</li>
          <li>Adaptación al desarrollo de un <span className="text-yellow-500 font-bold">proyecto real</span> de la empresa, la actualización del Portal de Empleado de Nunegal.</li>
          <li><span className="text-yellow-500 font-bold">Trabajo en equipo</span> y colaboración con otros departamentos como el de diseño.</li>
        </ul>
      </div>
    </div>
    </div>
  )
}

export default Experience