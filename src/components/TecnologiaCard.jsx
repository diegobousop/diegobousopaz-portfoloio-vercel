import React from 'react'


const TecnologiaCard = ({ nombre, icono, shadowColor = '#FE4F51' }) => {
  return (
    <div className="flex flex-col items-center group">
      <img
        src={icono}
        alt={nombre}
        className="w-16 h-auto mb-4 transition-all duration-500"
        style={{
          transitionProperty: 'all',
          filter: undefined,
        }}
        onMouseEnter={e => {
          e.currentTarget.style.filter = `drop-shadow(0 0 12px ${shadowColor})`;
        }}
        onMouseLeave={e => {
          e.currentTarget.style.filter = '';
        }}
      />
      <h3 className="text-xl text-gray-400">{nombre}</h3>
    </div>
  )
}

export default TecnologiaCard   