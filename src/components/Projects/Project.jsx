import React, { useState } from 'react'

const images = [
  "/icons/bigchef-banner.png",
  "/icons/bigchef-icon-v2.png",
  "/icons/chef.png"
]

const Project = () => {
  const [current, setCurrent] = useState(0)

  const prevImage = () => setCurrent((current - 1 + images.length) % images.length)
  const nextImage = () => setCurrent((current + 1) % images.length)

  return (
    <div className="bg-gradient-to-t from-transparent via-transparent to-transparent rounded-2xl border border-gray-700 shadow-lg max-w-3xl mx-auto mt-16 p-8 flex flex-col items-center">
      <div className="relative w-full h-auto flex items-center justify-center mb-8">
        <img src={images[current]} alt="Big Chef" className="w-full h-full object-cover rounded-2xl border border-gray-700 shadow-lg transition-all duration-500" />
        
      </div>
      <h2 className="text-4xl text-yellow-500 font-bold text-left w-full mb-4">Big Chef</h2>
      <h3 className="text-xl text-gray-400 font-bold text-left w-full mb-6">Proyecto Personal en Progreso - React Native</h3>
      <p className="text-gray-300 text-left w-full mb-10">
        Una aplicación de cocina que permite a los usuarios crear, guardar y compartir comidas fácilmente. Entre sus objetivos está fomentar la cocina y la alimentación saludable. Incluye funcionalidades como búsqueda de recetas, perfil de usuario, favoritos y recomendaciones personalizadas.
      </p>
      <p className="text-gray-300 text-left w-full mb-10">
        Lleva 1 mes de desarrollo y se espera que vea la luz este año, en Google Play Store en una primera versión.
      </p>
      <div className="flex flex-row items-center w-full mb-6">
        <span className="text-base text-gray-400 mr-4">Tecnologías:</span>

  <span className="px-3 py-1 rounded-full bg-green-500/20 text-green-500 font-semibold border border-green-500 mr-2">Android</span>
  <span className="px-3 py-1 rounded-full bg-purple-500/20 text-purple-500 font-semibold border border-purple-500 mr-2">iOS</span>
  <span className="px-3 py-1 rounded-full bg-yellow-500/20 text-yellow-500 font-semibold border border-yellow-500 mr-2">React Native</span>
  <span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-500 font-semibold border border-blue-500 mr-2">Expo</span>
  <span className="px-3 py-1 rounded-full bg-orange-500/20 text-orange-500 font-semibold border border-orange-500 mr-2">Firebase</span>
  <span className="px-3 py-1 rounded-full bg-cyan-400/20 text-cyan-400 font-semibold border border-cyan-400">TailwindCSS</span>
      </div>
      <div className="flex flex-row items-center w-full">
        <span className="text-base text-gray-400 mr-4">Estado:</span>
        <span className="px-3 py-1 rounded-full bg-green-500/20 text-green-500 font-semibold border border-green-500">En desarrollo</span>
      </div>

      {/* Barra divisoria elegante */}
      <div className="w-full my-10 flex items-center">
        <div className="flex-grow h-0.5 bg-gradient-to-r from-gray-700 via-gray-600 to-gray-700 rounded-full shadow-lg"></div>
      </div>

      {/* Grid de 4 cards de pantallas */}
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-4">
        {[1,2,3,4].map((i) => (
          <div key={i} className="bg-gray-800/80 border border-gray-700 rounded-xl shadow-lg pb-2 flex flex-col items-center">
            <img
              src={`/icons/bigchef-pantalla${i}.png`}
              alt={`Pantalla ${i} Big Chef`}
              className="w-full h-full object-cover rounded-lg mb-2 border border-gray-600"
            />
            <span className="text-gray-300 text-sm font-medium">Pantalla {i}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Project