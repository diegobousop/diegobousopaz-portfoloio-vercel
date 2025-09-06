import React from 'react'

import TecnologiaCard from './TecnologiaCard'
///          className="text-3xl font-bold mt-5 bg-gradient-to-r from-yellow-200 to-yellow-500 bg-clip-text text-transparent"

const StackTechnologico = () => {
  return (
    <div className='mb-40 max-w-[80%] lg:max-w-[100%] w-full'>
        <h2 className="text-4xl font-bold text-gray-400 text-center mt-20 mb-14">Stack</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full w-full mx-auto mt-8">
        <div className="bg-gradient-to-r from-transparent via-transparent to-[#2e1435] rounded-2xl p-6 border border-gray-700 flex flex-col items-center">
            
            <h2 className="text-3xl text-gray-400 font-bold text-center mb-10">Frontend</h2>
            <div className="grid grid-cols-3 gap-4 mt-5">
                <div className="flex items-center justify-center h-16">
                    <TecnologiaCard nombre="HTML" icono="/icons/html.png" shadowColor='#E44D26' />
                </div>
                <div className="flex items-center justify-center h-16">
                    <TecnologiaCard nombre="CSS" icono="/icons/css.png" shadowColor='#264DE4' />
                </div>
                <div className="flex items-center justify-center h-16 mb-16">
                    <TecnologiaCard nombre="Javascript" icono="/icons/js.png" shadowColor='#F7DF1E' />
                </div>
                <div className="flex items-center justify-center h-16">
                    <TecnologiaCard nombre="TailwindCSS" icono="/icons/tailwind.png" shadowColor='#06B6D4' />
                </div>
                <div className="flex items-center justify-center h-16">
                    <TecnologiaCard nombre="React" icono="/icons/react.png" shadowColor='#61DAFB' />
                </div>
                <div className="flex items-center justify-center h-16 mb-12">
                    <TecnologiaCard nombre="Figma" icono="/icons/figma.png" shadowColor='#F24E1E' />
                </div>
            {/* ...más tecnologías... */}
            </div>
        </div>
        <div className="bg-gradient-to-r from-transparent via-transparent to-[#153144] rounded-2xl p-6 border border-gray-700 flex flex-col items-center">
            <h2 className="text-3xl text-gray-400 text-center mb-10 font-bold">Backend</h2>
            <div className="grid grid-cols-3 gap-4 mt-5">

                <div className="flex items-center justify-center h-16">
                    <TecnologiaCard nombre="Spring Boot" icono="/icons/springboot.png" shadowColor='#6DB33F' />
                </div>
                <div className="flex items-center justify-center h-16 mb-16">
                    <TecnologiaCard nombre="Java" icono="/icons/java.png" shadowColor='#F89820'/>
                </div>
                <div className="flex items-center justify-center h-16">
                    <TecnologiaCard nombre="PostgreSQL" icono="/icons/postgresql.png" shadowColor='#336791' />
                </div>
                
                <div className="flex items-center justify-center h-16">
                    <TecnologiaCard nombre="MySQL" icono="/icons/mysql.png" shadowColor='#4479A1' />
                </div>

            </div>
        </div>
        <div className="bg-gradient-to-r from-transparent via-transparent to-[#3d2f0a] rounded-2xl p-6 border border-gray-700 flex flex-col items-center">
            <h2 className="text-3xl text-gray-400 text-center mb-10 font-bold">Aprendiendo</h2>
            <div className="grid grid-cols-3 gap-4 mt-5">
                
                <div className="flex items-center justify-center h-16">
                    <TecnologiaCard nombre="React Native" icono="/icons/react.png" shadowColor='#61DAFB' />
                </div>
                <div className="flex items-center justify-center h-16 mb-16">
                    <TecnologiaCard nombre="Typescript" icono="/icons/ts.png" shadowColor='#2F74C0' />
                </div>
                <div className="flex items-center justify-center h-16 mb-16">
                    <TecnologiaCard nombre="Docker" icono="/icons/docker.png" shadowColor='#2496ED' />
                </div>
            {/* ...más tecnologías... */}
            </div>
        </div>

        <div className="bg-gradient-to-r from-transparent via-[#0E111E] to-[#0a3d1b] rounded-2xl p-6 border border-gray-700 flex flex-col items-center">
            <h2 className="text-3xl text-gray-400 text-center mb-10 font-bold">Herramientas</h2>
            <div className="grid grid-cols-3 gap-4 mt-5 min-w-[90%]">
                
                <div className="flex items-center justify-center h-16">
                    <TecnologiaCard nombre="GitHub" icono="/icons/github.png" shadowColor='#FDFDFD' />
                </div>
                <div className="flex items-center justify-center h-16">
                    <TecnologiaCard nombre="GitLab" icono="/icons/gitlab.png" shadowColor='#FCA121' />
                </div>
                <div className="flex items-center justify-center h-16 mb-16">
                    <TecnologiaCard nombre="Copilot" icono="/icons/copilot.png" shadowColor='#FDFDFD' />
                </div>
                <div className="flex items-center justify-center h-16 mb-16">
                    <TecnologiaCard nombre="Postman" icono="/icons/postman.png" shadowColor='#FCA121' />
                </div>
                <div className="flex items-center justify-center h-16 mb-16">
                    <TecnologiaCard nombre="VSCode" icono="/icons/vsc.png" shadowColor='#2F74C0' />
                </div>
                <div className="flex items-center justify-center h-16 mb-16">
                    <TecnologiaCard nombre="Photoshop" icono="/icons/photoshop.png" shadowColor='#29A0B1' />
                </div>
            {/* ...más tecnologías... */}
            </div>
        </div>
        
        </div>

    </div>
  )
}

export default StackTechnologico