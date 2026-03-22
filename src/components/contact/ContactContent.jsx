import React from 'react'

const ContactContent = () => {
  return (
    <div className="mt-20 mb-2">
      <div className="bg-gradient-to-t from-transparent via-transparent to-transparent
       rounded-2xl border border-gray-700 hover:border-yellow-600 transition-colors
        duration-300 flex flex-col items-center justify-start max-w-xl mx-auto p-8">
        <div className="flex flex-col items-center w-full mb-8">
          <span className="text-lg text-gray-400 mb-2">Correo electrónico:</span>
          <a href="mailto:diego.bouso@udc.es" className="text-xl text-yellow-500 font-semibold mb-4 hover:underline">
            diegoobouso@gmail.es
          </a>
        </div>
        
      </div>
    </div>
  );
}

export default ContactContent