import React from 'react'

const ProjectDigitalBrain = () => {
  return (
    <div id="digitalbrain" className="bg-gradient-to-t from-transparent via-transparent to-transparent rounded-2xl border border-gray-700 shadow-lg max-w-3xl mx-auto mt-16 p-8 flex flex-col items-center">
      <img src="/icons/digitalbrain.png" alt="Digital Brain" className="w-[80%] h-auto rounded-2xl  shadow-lg mb-8" />

      <h2 className="text-4xl text-yellow-500 font-bold text-left w-full mb-4">Digital Brain</h2>
      <h3 className="text-xl text-gray-400 font-bold text-left w-full mb-6">Proyecto en equipo de 4 — HackUDC 2026</h3>

      <p className="text-gray-300 text-left w-full mb-10">
        Sistema de gestión de conocimiento personal — un "segundo cerebro" — diseñado para capturar, organizar y
        transformar información dispersa en conocimiento estructurado y reutilizable. Permite captura rápida de texto,
        enlaces, ideas, fragmentos de código y notas de voz en un inbox unificado, con procesamiento inteligente y
        organización posterior sin interrumpir el flujo de trabajo del usuario.
      </p>

      <p className="text-gray-300 text-left w-full mb-10">
        Incluye reconocimiento automático de tipo de contenido, organización por categorías personalizables,
        analíticas visuales interactivas con gráficos y grafos de conocimiento, e ingesta de contenido
        desde YouTube, documentos PDF/DOCX, audio y páginas web. El backend utiliza IA con embeddings y
        búsqueda semántica vectorial (pgvector) para conectar y relacionar tus notas de forma inteligente.
        Desarrollado en 24 horas de hackathon por un equipo de 4 personas.
      </p>

      {/* Tecnologías Frontend */}
      <div className="flex flex-row flex-wrap items-center w-full mb-4">
        <span className="text-base text-gray-400 mr-4">Frontend:</span>
        <span className="px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-400 font-semibold border border-cyan-400 mr-2 mb-2">React 19</span>
        <span className="px-3 py-1 rounded-full bg-purple-500/20 text-purple-400 font-semibold border border-purple-400 mr-2 mb-2">Vite</span>
        <span className="px-3 py-1 rounded-full bg-teal-500/20 text-teal-400 font-semibold border border-teal-400 mr-2 mb-2">TailwindCSS 4</span>
        <span className="px-3 py-1 rounded-full bg-orange-500/20 text-orange-400 font-semibold border border-orange-400 mr-2 mb-2">ECharts</span>
        <span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 font-semibold border border-blue-400 mb-2">React Router</span>
      </div>

      {/* Tecnologías Backend */}
      <div className="flex flex-row flex-wrap items-center w-full mb-6">
        <span className="text-base text-gray-400 mr-4">Backend:</span>
        <span className="px-3 py-1 rounded-full bg-green-500/20 text-green-400 font-semibold border border-green-400 mr-2 mb-2">FastAPI</span>
        <span className="px-3 py-1 rounded-full bg-yellow-500/20 text-yellow-400 font-semibold border border-yellow-400 mr-2 mb-2">Python</span>
        <span className="px-3 py-1 rounded-full bg-blue-700/20 text-blue-300 font-semibold border border-blue-300 mr-2 mb-2">PostgreSQL</span>
        <span className="px-3 py-1 rounded-full bg-red-500/20 text-red-400 font-semibold border border-red-400 mr-2 mb-2">OpenAI</span>
        <span className="px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-400 font-semibold border border-indigo-400 mb-2">pgvector</span>
      </div>

      {/* IA / NLP */}
      <div className="flex flex-row flex-wrap items-center w-full mb-6">
        <span className="text-base text-gray-400 mr-4">IA / NLP:</span>
        <span className="px-3 py-1 rounded-full bg-pink-500/20 text-pink-400 font-semibold border border-pink-400 mr-2 mb-2">Transformers</span>
        <span className="px-3 py-1 rounded-full bg-amber-500/20 text-amber-400 font-semibold border border-amber-400 mr-2 mb-2">Whisper</span>
        <span className="px-3 py-1 rounded-full bg-lime-500/20 text-lime-400 font-semibold border border-lime-400 mb-2">Sentence Transformers</span>
      </div>

      <div className="flex flex-row items-center w-full mb-6">
        <span className="text-base text-gray-400 mr-4">Estado:</span>
        <span className="px-3 py-1 rounded-full bg-green-500/20 text-green-500 font-semibold border border-green-500">Finalizado</span>
      </div>

      {/* Enlace al repositorio */}
      <div className="flex flex-row items-center w-full">
        <span className="text-base text-gray-400 mr-4">Repositorio:</span>
        <a
          href="https://github.com/Alvaro-pg/digital-brain-app"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 rounded-full bg-gray-800 text-white font-semibold border border-gray-600 hover:bg-gray-700 hover:border-gray-500 transition-all duration-300 flex items-center gap-2"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
          </svg>
          GitHub
        </a>

        {/* External site button to emphasize redirect */}
        <a
          href="https://github.com/Alvaro-pg/digital-brain-app"
          target="_blank"
          rel="noopener noreferrer"
          className="ml-3 inline-flex items-center gap-2 px-3 py-2 rounded-full border border-yellow-500 text-yellow-400 bg-transparent hover:bg-yellow-500/10 transition-colors duration-200"
          aria-label="Abrir sitio externo"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M18 13v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3"/>
          </svg>
          Abrir sitio
        </a>
      </div>
    </div>
  )
}

export default ProjectDigitalBrain
