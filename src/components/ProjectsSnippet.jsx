import React from 'react'

import TecnologiaCard from './TecnologiaCard'
import ecosDoSurImage from '../assets/image.png'

const ProjectsSnippet = () => {
  return (
    <div className='w-full max-w-[80%] lg:max-w-[100%]'>
        <h2 className="text-2xl sm:text-4xl font-bold text-gray-400 text-center mt-20 mb-14">Proyectos</h2>
        

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full mx-auto mt-8">
          <a href="projects" className="block group">
            <div className="bg-gradient-to-t from-transparent via-transparent to-transparent rounded-2xl border border-gray-700 hover:border-yellow-600 transition-colors duration-300 flex flex-col items-center justify-start">
                <div className="w-full h-48 overflow-hidden rounded-t-2xl border-b border-gray-700">
                  <img src={ecosDoSurImage} alt="Ecos do Sur App" className="w-full h-full object-cover object-top" />
                </div>
                <div className='p-6 pb-0 bg-[rgb(22,24,36)] rounded-2xl border border-gray-700'>
                  <div className='flex flex-row justify-center items-center'>
                      <h2 className="text-xl sm:text-2xl lg:text-3xl text-yellow-500 text-center first-line:font-bold mb-2">Ecos do Sur App</h2>
                      <img src="/icons/goto.png" alt="Ver proyecto" className="w-6 h-6 inline-block mb-1 ml-4" />
                  </div>
                  
                  <h2 className="text-sm sm:text-base text-gray-400 text-center font-bold mb-4">Trabajo de Fin de Grado — App Móvil Multiplataforma</h2>
                  <p className="text-sm sm:text-base text-gray-300 text-left mb-10">Aplicación móvil multiplataforma con chatbot integrado, desarrollada en colaboración con la ONG Ecos do Sur. Destinada a personas potencialmente víctimas de discriminación y agresiones.</p>
                </div>
            </div>
          </a>

          <a href="projects" className="block group">
            <div className="bg-gradient-to-t from-transparent via-transparent to-transparent rounded-2xl border border-gray-700 hover:border-yellow-600 transition-colors duration-300 flex flex-col items-center justify-start h-full">
                <img src="/icons/digitalbrain.png" alt="Digital Brain" className="p-10 my-5 w-[50%] h-auto rounded-2xl  shadow-lg" />
                <div className='p-6 pb-0 bg-[rgb(22,24,36)] rounded-2xl border border-gray-700'>
                  <div className='flex flex-row justify-center items-center'>
                      <h2 className="text-xl sm:text-2xl lg:text-3xl text-yellow-500 text-center first-line:font-bold mb-2">Digital Brain</h2>
                      <img src="/icons/goto.png" alt="Ver proyecto" className="w-6 h-6 inline-block mb-1 ml-4" />
                  </div>
                  
                  <h2 className="text-sm sm:text-base text-gray-400 text-center font-bold mb-4">Proyecto en equipo de 4 — HackUDC 2026</h2>
                  <p className="text-sm sm:text-base text-gray-300 text-left mb-10">Sistema de gestión de conocimiento personal — un "segundo cerebro" — diseñado para capturar, organizar y transformar información dispersa en conocimiento estructurado.</p>
                </div>
            </div>
          </a>

          <a href="projects" className="block group">
            <div className="bg-gradient-to-t from-transparent via-transparent to-transparent rounded-2xl border border-gray-700 hover:border-yellow-600 transition-colors duration-300 flex flex-col items-center justify-start h-full">
                <img src="/icons/bigchef-banner.png" alt="Big Chef" className="w-auto h-auto rounded-2xl border border-gray-700 shadow-lg" />
                <div className='p-6 pb-0 bg-[rgb(22,24,36)] rounded-2xl border border-gray-700'>
                  <div className='flex flex-row justify-center items-center'>
                    <h2 className="text-xl sm:text-2xl lg:text-3xl text-yellow-500 text-center first-line:font-bold mb-2">Big Chef</h2>
                    <img src="/icons/goto.png" alt="Ver proyecto" className="w-6 h-6 inline-block mb-1 ml-4" />
                  </div>
                  <h2 className="text-sm sm:text-base text-gray-400 text-center font-bold mb-4">Proyecto Personal en Progreso - React Native</h2>
                  <p className="text-sm sm:text-base text-gray-300 text-left mb-10">Una aplicación de cocina que permite a los usuarios crear, guardar y compartir comidas fácilmente. Entre sus objetivos está fomentar la cocina y la alimentación saludable.</p>
                </div>
            </div>
          </a>

          <a href="projects" className="block group">
            <div className="bg-gradient-to-t from-transparent via-transparent to-transparent rounded-2xl border border-gray-700 hover:border-yellow-600 transition-colors duration-300 flex flex-col items-center justify-start h-full">
                <img src="/icons/fantasyrift-banner.png" alt="Fantasy Rift" className="w-full h-auto rounded-2xl border border-gray-700 shadow-lg" />
                <div className='p-6 pb-0 bg-[rgb(22,24,36)] rounded-2xl border border-gray-700'>
                  <div className='flex flex-row justify-center items-center'>
                      <h2 className="text-xl sm:text-2xl lg:text-3xl text-yellow-500 text-center first-line:font-bold mb-2">Fantasy Rift</h2>
                      <img src="/icons/goto.png" alt="Ver proyecto" className="w-6 h-6 inline-block mb-1 ml-4" />
                  </div>
                  
                  <h2 className="text-sm sm:text-base text-gray-400 text-center font-bold mb-4">Proyecto en grupo de 6 en Universidad - Spring Boot</h2>
                  <p className="text-sm sm:text-base text-gray-300 text-left mb-10">Juego hecho en una aplicación web que lleva las ligas fantasy al mundo de los eSports. Cada usuario puede crear su propia liga e invitar a sus amigos.</p>
                </div>
            </div>
          </a>

          <a href="projects" className="block group">
            <div className="bg-gradient-to-t from-transparent via-transparent to-transparent rounded-2xl border border-gray-700 hover:border-yellow-600 transition-colors duration-300 flex flex-col items-center justify-start h-full">
                <img src="/icons/beachandvoley.png" alt="Beach and Voley" className="w-full h-auto rounded-2xl border border-gray-700 shadow-lg" />
                <div className='p-6 pb-0 bg-[rgb(22,24,36)] rounded-2xl border border-gray-700'>
                  <div className='flex flex-row justify-center items-center'>
                      <h2 className="text-xl sm:text-2xl lg:text-3xl text-yellow-500 text-center first-line:font-bold mb-2">Beach and Voley</h2>
                      <img src="/icons/goto.png" alt="Ver proyecto" className="w-6 h-6 inline-block mb-1 ml-4" />
                  </div>
                  
                  <h2 className="text-sm sm:text-base text-gray-400 text-center font-bold mb-4">Proyecto en solitario - Fullstack</h2>
                  <p className="text-sm sm:text-base text-gray-300 text-left mb-10">Aplicación web que simula un sitio real de compra de productos relacionados con el voley playa. Cuenta con carrito de compras y sistema de cuentas.</p>
                </div>
            </div>
          </a>

          <a href="projects" className="block group">
            <div className="bg-gradient-to-t from-transparent via-transparent to-transparent rounded-2xl border border-gray-700 hover:border-yellow-600 transition-colors duration-300 flex flex-col items-center justify-start h-full">
                <img src="/icons/gymtonic.png" alt="Gym Tonic" className="w-full h-auto rounded-2xl border border-gray-700 shadow-lg" />
                <div className='p-6 pb-0 bg-[rgb(22,24,36)] rounded-2xl border border-gray-700'>
                  <div className='flex flex-row justify-center items-center'>
                      <h2 className="text-xl sm:text-2xl lg:text-3xl text-yellow-500 text-center first-line:font-bold mb-2">Gym Tonic</h2>
                      <img src="/icons/goto.png" alt="Ver proyecto" className="w-6 h-6 inline-block mb-1 ml-4" />
                  </div>
                  
                  <h2 className="text-sm sm:text-base text-gray-400 text-center font-bold mb-4">Proyecto en grupo - Fullstack</h2>
                  <p className="text-sm sm:text-base text-gray-300 text-left mb-10">Aplicación que eleva tu entrenamiento físico y seguimiento de rutinas al siguiente nivel.</p>
                </div>
            </div>
          </a>
        
        
        </div>

    </div>
  )
}

export default ProjectsSnippet