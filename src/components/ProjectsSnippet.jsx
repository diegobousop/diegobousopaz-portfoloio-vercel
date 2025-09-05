import React from 'react'

import TecnologiaCard from './TecnologiaCard'

const ProjectsSnippet = () => {
  return (
    <div className='w-full'>
        <h2 className="text-4xl font-bold text-gray-400 text-center mt-20 mb-14">Proyectos</h2>
        

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full w-full mx-auto mt-8">
          <a href="projects" className="block group">
            <div className="bg-gradient-to-t from-transparent via-transparent to-transparent rounded-2xl border border-gray-700 hover:border-yellow-600 transition-colors duration-300 flex flex-col items-center justify-start h-full">
                <img src="/icons/bigchef-banner.png" alt="Big Chef" className="w-auto h-auto rounded-2xl border border-gray-700 shadow-lg" />
                <div className='p-6 pb-0'>
                  <div className='flex flex-row justify-center items-center'>
                    <h2 className="text-3xl text-yellow-500 text-center first-line:font-bold mb-2">Big Chef</h2>
                    <img src="/icons/goto.png" alt="League of Legends" className="w-6 h-6 inline-block mb-1 ml-4" />
                  </div>
                  <h2 className="text-l text-gray-400 text-center font-bold mb-4">Proyecto Personal en Progreso - React Native</h2>
                  <p className="text-gray-300 text-left mb-10">Una aplicación de cocina que permite a los usuarios crear, guardar y compartir comidas fácilmente. Entre sus objetivos está fomentar la cocina y la alimentación saludable.</p>
                </div>
            </div>
          </a>

          <a href="projects" className="block group">
            <div className="bg-gradient-to-t from-transparent via-transparent to-transparent rounded-2xl border border-gray-700 hover:border-yellow-600 transition-colors duration-300 flex flex-col items-center justify-start h-full">
                <img src="/icons/fantasyrift-banner.png" alt="Fantasy Rift" className="w-full h-auto rounded-2xl border border-gray-700 shadow-lg" />
                <div className='p-6 pb-0'>
                  <div className='flex flex-row justify-center items-center'>
                      <h2 className="text-3xl text-yellow-500 text-center first-line:font-bold mb-2">Fantasy Rift</h2>
                      <img src="/icons/goto.png" alt="League of Legends" className="w-6 h-6 inline-block mb-1 ml-4" />
                  </div>
                  
                  <h2 className="text-l text-gray-400 text-center font-bold mb-4">Proyecto en grupo de 6 en Universidad - Parte de Spring Boot</h2>
                  <p className="text-gray-300 text-left mb-10">Juego hecho en una aplicación web que lleva las ligas fantasy al mundo de los eSports. Cada usuario puede crear su propia liga e invitar a sus amigos para vivir la experiencia de tener su propio equipo profesional.</p>
                </div>
            </div>
          </a>

          <a href="projects" className="block group">
            <div className="bg-gradient-to-t from-transparent via-transparent to-transparent rounded-2xl border border-gray-700 hover:border-yellow-600 transition-colors duration-300 flex flex-col items-center justify-start h-full">
                <img src="/icons/beachandvoley.png" alt="Fantasy Rift" className="w-full h-auto rounded-2xl border border-gray-700 shadow-lg" />
                <div className='p-6 pb-0'>
                  <div className='flex flex-row justify-center items-center'>
                      <h2 className="text-3xl text-yellow-500 text-center first-line:font-bold mb-2">Beach and Voley</h2>
                      <img src="/icons/goto.png" alt="League of Legends" className="w-6 h-6 inline-block mb-1 ml-4" />
                  </div>
                  
                  <h2 className="text-l text-gray-400 text-center font-bold mb-4">Proyecto en solitario - Fullstack</h2>
                  <p className="text-gray-300 text-left mb-10">Aplicación web que simula un sitio real de compra de productos relacionados con el voley playa. Cuenta con carrito de compras, sistema de cuentas y otras funcionalidades otras de usuario</p>
                </div>
            </div>
          </a>
        
        
        </div>

    </div>
  )
}

export default ProjectsSnippet