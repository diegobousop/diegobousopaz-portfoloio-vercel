import React from 'react'

import SocialNetworkIcon from './SocialNetworkIcon'

const Introduction = () => {
  return (



    <div className='flex flex-col lg:flex-row justify-center items-center mb-14'>

      <div className="mb-14">



      </div>




      <div className="max-w-[80%] lg:max-w-[60%]">
        <div className="flex flex-row justify-center mb-6 ">
                <SocialNetworkIcon icon="/icons/linkedin.png" link="https://www.linkedin.com/in/diego-bouso-paz-248491289/" />
                <SocialNetworkIcon icon="/icons/github.png" link="https://github.com/diegobousop/" />
        </div>
        <div className="bg-[#161824] rounded-2xl p-6 border border-gray-700 ">
            <p className="text-[1.1rem] text-left justify-left text-gray-400 ">
              Hola! Soy un desarrollador de software de Galicia que está finalizando la carrera de <span className="text-yellow-500 font-bold">Ingeniería Informática</span> en A Coruña, en la rama de software.
              Cuento con <span className="text-yellow-500 font-bold">2 años</span> de experienca en desarrollo web y muchos más en el mundo de la informática.
              Me apasiona crear <span className="text-yellow-500 font-bold">servicios atractivos y funcionales</span> que brinden una experiencia excepcional a los usuarios, centrándome en el  <span className="text-yellow-500 font-bold">frontend</span>.
               Además, tengo tanto conocimientos generales como de backend sólidos, lo que conforma un perfil de <span className="text-yellow-500 font-bold">fullstack</span> que me permite comprender y abordar proyectos de manera integral.
            </p>
        </div>
      </div>

    </div>


    
  )
}
/// <span className="text-yellow-500 font-bold">desarrollador de software</span>
export default Introduction