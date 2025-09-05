import React from 'react'

const ProjectBeachAndVoley = () => {
		return (
			<div id="beachandvoley" className="bg-gradient-to-t from-transparent via-transparent to-transparent rounded-2xl border border-gray-700 shadow-lg max-w-3xl mx-auto mt-16 p-8 flex flex-col items-center">
			<img src="/icons/beachandvoley.png" alt="Beach and Voley" className="w-full h-auto rounded-2xl border border-gray-700 shadow-lg mb-8" />
			<h2 className="text-4xl text-yellow-500 font-bold text-left w-full mb-4">Beach and Voley</h2>
			<h3 className="text-xl text-gray-400 font-bold text-left w-full mb-6">Proyecto en solitario - Fullstack</h3>
			<p className="text-gray-300 text-left w-full mb-10">
                Aplicación web que simula un sitio real de compra de productos relacionados con el voley playa. Cuenta con carrito de compras, sistema de cuentas y otras funcionalidades otras de usuario
			</p>
			<div className="flex flex-row items-center w-full mb-6">
				<span className="text-base text-gray-400 mr-4">Tecnologías:</span>
				<span className="px-3 py-1 rounded-full bg-green-500/20 text-green-500 font-semibold border border-green-500 mr-2">Spring Boot</span>
				<span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-500 font-semibold border border-blue-500 mr-2">Thymeleaf</span>
				<span className="px-3 py-1 rounded-full bg-yellow-700/20 text-yellow-700 font-semibold border border-yellow-700 mr-2">MySQL</span>
			<span className="px-3 py-1 rounded-full bg-yellow-500/20 text-yellow-500 font-semibold border border-yellow-500 mr-2">Javascript</span>
			<span className="px-3 py-1 rounded-full bg-blue-400/20 text-blue-400 font-semibold border border-blue-400 mr-2">CSS</span>
			<span className="px-3 py-1 rounded-full bg-pink-500/20 text-pink-500 font-semibold border border-pink-500">HTML</span>
			</div>

            <div className="flex flex-row items-center w-full mb-6">
			    <span className="px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-500 font-semibold border border-indigo-500 mr-2">Bootstrap</span>
			</div>

			<div className="flex flex-row items-center w-full">
				<span className="text-base text-gray-400 mr-4">Estado:</span>
				<span className="px-3 py-1 rounded-full bg-green-500/20 text-green-500 font-semibold border border-green-500">Finalizado</span>
			</div>
		</div>
	)
}

export default ProjectBeachAndVoley
