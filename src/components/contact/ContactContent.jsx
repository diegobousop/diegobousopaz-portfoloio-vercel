import React from 'react'

const ContactContent = () => {
  return (
    <div className="mt-20 mb-2">
      <div className="bg-gradient-to-t from-transparent via-transparent to-transparent rounded-2xl border border-gray-700 hover:border-yellow-600 transition-colors duration-300 flex flex-col items-center justify-start max-w-xl mx-auto p-8">
        <div className="flex flex-col items-center w-full mb-8">
          <span className="text-lg text-gray-400 mb-2">Correo electrónico:</span>
          <a href="mailto:diego.bouso@udc.es" className="text-xl text-yellow-500 font-semibold mb-4 hover:underline">diego.bouso@udc.es</a>
        </div>
        <div className="flex flex-col items-center w-full">
          <span className="text-lg text-gray-400 mb-2">Currículum:</span>
          <a
            href="/Diego_Bouso_CV.pdf"
            download
            className="px-6 py-2 rounded-full bg-yellow-500/20 text-yellow-500 font-semibold border border-yellow-500 shadow hover:bg-yellow-500 hover:text-white transition-colors duration-300"
          >
            Descargar CV
          </a>
        </div>
      </div>
    </div>
  );
}

export default ContactContent