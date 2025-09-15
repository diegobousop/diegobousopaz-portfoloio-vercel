import React from 'react'

const GymTonic = () => {
		return (
			<div id="beachandvoley" className="bg-gradient-to-t from-transparent via-transparent to-transparent rounded-2xl border border-gray-700 shadow-lg max-w-3xl mx-auto mt-16 p-8 flex flex-col items-center">
			<img src="/icons/gymtonic.png" alt="Beach and Voley" className="w-full h-auto rounded-2xl border border-gray-700 shadow-lg mb-8" />
			<h2 className="text-4xl text-yellow-500 font-bold text-left w-full mb-4">Gym Tonic</h2>
			<h3 className="text-xl text-gray-400 font-bold text-left w-full mb-6">Proyecto en solitario - Fullstack</h3>
			<p className="text-gray-300 text-left w-full mb-10">
				Mockup web de una aplicación para el entrenamiento físico y seguimiento de rutinas de ejercicio.
			</p>
			<div className="flex flex-row items-center w-full mb-6">
				<span className="text-base text-gray-400 mr-4">Tecnologías:</span>
				<span className="px-3 py-1 rounded-full bg-yellow-500/20 text-yellow-500 font-semibold border border-yellow-500 mr-2">Figma</span>
				<span className="px-3 py-1 rounded-full bg-blue-400/20 text-blue-400 font-semibold border border-blue-400 mr-2">Photoshop</span>
			</div>


			<div className="flex flex-row items-center w-full">
				<span className="text-base text-gray-400 mr-4">Estado:</span>
				<span className="px-3 py-1 rounded-full bg-green-500/20 text-green-500 font-semibold border border-green-500">En progreso</span>
			</div>
		</div>
	)
}

export default GymTonic
