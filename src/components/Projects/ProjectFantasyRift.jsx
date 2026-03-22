import React from 'react'

const ProjectFantasyRift = () => {
  return (
    <div id="fantasyrift" className="bg-gradient-to-t from-transparent via-transparent to-transparent rounded-2xl border border-gray-700 shadow-lg max-w-3xl mx-auto mt-16 p-8 flex flex-col items-center">
      <img src="/icons/fantasyrift-banner.png" alt="Fantasy Rift" className="w-full h-auto rounded-2xl border border-gray-700 shadow-lg mb-8" />
      <h2 className="text-4xl text-yellow-500 font-bold text-left w-full mb-4">Fantasy Rift</h2>
      <h3 className="text-xl text-gray-400 font-bold text-left w-full mb-6">Proyecto en grupo de 6 en Universidad - React y Spring Boot</h3>
      <p className="text-gray-300 text-left w-full mb-10">
        Juego de liga Fantasy de League of Legends. Cada usuario puede crear su propia liga de eSports
         e invitar a sus amigos para vivir la experiencia de tener su propio equipo profesional.
          Incluye gestión de equipos, ligas privadas, estadísticas en tiempo real y sistema de puntuación
           basado en el rendimiento de jugadores reales.
      </p>
      <p className="text-gray-300 text-left w-full mb-10">
        Proyecto de finales de carrera, desarrollado en 4 meses por un equipo de 6 personas. Mi rol fue el desarrollo en backend mayoritariamente.
      </p>
      <div className="flex flex-row items-center w-full mb-6">
        <span className="text-base text-gray-400 mr-4">Tecnologías:</span>
        <span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-500 font-semibold border border-blue-500 mr-2">React</span>
        <span className="px-3 py-1 rounded-full bg-green-500/20 text-green-500 font-semibold border border-green-500 mr-2">Spring Boot</span>
        <span className="px-3 py-1 rounded-full bg-blue-700/20 text-blue-700 font-semibold border border-blue-700">H2 Database</span>
      </div>
      <div className="flex flex-row items-center w-full">
        <span className="text-base text-gray-400 mr-4">Estado:</span>
        <span className="px-3 py-1 rounded-full bg-green-500/20 text-green-500 font-semibold border border-green-500">Finalizado</span>
      </div>
    </div>
  )
}

export default ProjectFantasyRift
