import React, { useRef, useState, useEffect } from 'react'

const ProjectEcosDoSur = () => {
  const slides = ['/es-01.png', '/es-02.png', '/es-03.png', '/es-04.png']
  const trackRef = useRef(null)
  const [index, setIndex] = useState(0)
  const autoplayRef = useRef(null)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    if (!trackRef.current) return
    let mounted = true
    import('gsap').then((module) => {
      if (!mounted) return
      const gsap = module.default || module
      gsap.to(trackRef.current, {
        xPercent: -index * 100,
        duration: 0.8,
        ease: 'power3.out',
      })
    }).catch(() => {})
    return () => { mounted = false }
  }, [index])

  useEffect(() => {
    const play = () => setIndex((i) => (i + 1) % slides.length)
    if (!paused) autoplayRef.current = setInterval(play, 4500)
    return () => clearInterval(autoplayRef.current)
  }, [paused])

  const prev = () => setIndex((i) => (i - 1 + slides.length) % slides.length)
  const next = () => setIndex((i) => (i + 1) % slides.length)

  // Modal
  const [modalSrc, setModalSrc] = useState(null)
  const modalRef = useRef(null)
  const modalImgRef = useRef(null)

  const openModal = (src) => {
    setModalSrc(src)
    requestAnimationFrame(() => {
      if (modalRef.current && modalImgRef.current) {
        import('gsap').then((module) => {
          const gsap = module.default || module
          gsap.killTweensOf([modalRef.current, modalImgRef.current])
          gsap.fromTo(modalRef.current, { opacity: 0 }, { opacity: 1, duration: 0.25 })
          gsap.fromTo(modalImgRef.current, { scale: 0.95, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.35, ease: 'power3.out' })
        }).catch(() => {})
      }
    })
  }

  const closeModal = () => {
    if (modalRef.current && modalImgRef.current) {
      import('gsap').then((module) => {
        const gsap = module.default || module
        gsap.to(modalImgRef.current, { scale: 0.96, opacity: 0, duration: 0.2 })
        gsap.to(modalRef.current, { opacity: 0, duration: 0.22, onComplete: () => setModalSrc(null) })
      }).catch(() => setModalSrc(null))
    } else {
      setModalSrc(null)
    }
  }

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') closeModal() }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <div id="ecosdosur" className="bg-gradient-to-t from-transparent via-transparent to-transparent rounded-2xl border border-gray-700 shadow-lg max-w-3xl mx-auto mt-16 p-8 flex flex-col items-center">
      {/* Carousel de capturas */}
      <div
        className="gym-carousel w-full relative mb-8"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div className="carousel-viewport ecos-carousel-viewport overflow-hidden rounded-2xl border border-gray-700">
          <div className="carousel-track flex" ref={trackRef}>
            {slides.map((src, i) => (
              <div key={src} className="carousel-slide w-full flex-shrink-0 flex-grow-0 p-4 flex items-center justify-center">
                <img
                  src={src}
                  alt={`Ecos ${i + 1}`}
                  className="w-full h-auto rounded-xl shadow-2xl object-contain cursor-zoom-in"
                  onClick={() => openModal(src)}
                />
              </div>
            ))}
          </div>
        </div>

        <button aria-label="Anterior" className="carousel-nav left-3" onClick={prev}>‹</button>
        <button aria-label="Siguiente" className="carousel-nav right-3" onClick={next}>›</button>

        <div className="carousel-dots mt-4 flex gap-2 justify-center">
          {slides.map((_, i) => (
            <button
              key={i}
              aria-label={`Ir a ${i + 1}`}
              className={`w-3 h-3 rounded-full ${i === index ? 'bg-yellow-500' : 'bg-white/20'}`}
              onClick={() => setIndex(i)}
            />
          ))}
        </div>
      </div>

      <h2 className="text-4xl text-yellow-500 font-bold text-left w-full mb-4">Ecos do Sur App</h2>
      <h3 className="text-xl text-gray-400 font-bold text-left w-full mb-6">Trabajo de Fin de Grado — Aplicación Móvil Multiplataforma</h3>

      <p className="text-gray-300 text-left w-full mb-10">
        Aplicación móvil multiplataforma con chatbot integrado, desarrollada en colaboración con la ONG Ecos do Sur.
        Destinada a personas potencialmente víctimas de discriminación, agresiones y violencias con base racista y xenófoba.
        Utiliza árboles de decisión para garantizar respuestas verificadas y controladas, en lugar de LLMs.
      </p>

      <p className="text-gray-300 text-left w-full mb-10">
        Incluye sistema de autenticación con JWT, soporte multilingüe (Español, Gallego, Inglés),
        modo claro/oscuro con accesibilidad, panel de administración, historial de chats por categorías
        y asistencia en situaciones de urgencia. Código abierto bajo licencia GPL-3.0.
      </p>

      {/* Tecnologías Frontend */}
      <div className="flex flex-row flex-wrap items-center w-full mb-4">
        <span className="text-base text-gray-400 mr-4">Frontend:</span>
        <span className="px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-400 font-semibold border border-cyan-400 mr-2 mb-2">React Native</span>
        <span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 font-semibold border border-blue-400 mr-2 mb-2">Expo</span>
        <span className="px-3 py-1 rounded-full bg-blue-700/20 text-blue-300 font-semibold border border-blue-300 mr-2 mb-2">TypeScript</span>
        <span className="px-3 py-1 rounded-full bg-teal-500/20 text-teal-400 font-semibold border border-teal-400 mr-2 mb-2">NativeWind</span>
        <span className="px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-400 font-semibold border border-indigo-400 mb-2">Expo Router</span>
      </div>

      {/* Modal / Lightbox */}
      {modalSrc && (
        <div
          ref={modalRef}
          className="image-modal fixed inset-0 z-50 bg-black/70 flex items-center justify-center"
          onClick={(e) => { if (e.target === modalRef.current) closeModal() }}
        >
          <div className="image-modal-inner max-w-[80%] max-h-[80%] p-4">
            <button
              aria-label="Cerrar"
              onClick={closeModal}
              className="absolute top-6 right-6 z-60 text-white text-2xl bg-black/40 w-10 h-10 rounded-full flex items-center justify-center"
            >
              ×
            </button>
            <img ref={modalImgRef} src={modalSrc} alt="Ecos detalle" className="w-full h-full max-h-[72vh] object-contain rounded-lg shadow-2xl" />
          </div>
        </div>
      )}

      {/* Tecnologías Backend */}
      <div className="flex flex-row flex-wrap items-center w-full mb-6">
        <span className="text-base text-gray-400 mr-4">Backend:</span>
        <span className="px-3 py-1 rounded-full bg-purple-500/20 text-purple-400 font-semibold border border-purple-400 mr-2 mb-2">Elixir</span>
        <span className="px-3 py-1 rounded-full bg-red-500/20 text-red-400 font-semibold border border-red-400 mr-2 mb-2">CouchDB</span>
        <span className="px-3 py-1 rounded-full bg-yellow-500/20 text-yellow-400 font-semibold border border-yellow-400 mr-2 mb-2">JWT</span>
        <span className="px-3 py-1 rounded-full bg-green-500/20 text-green-400 font-semibold border border-green-400 mb-2">REST API</span>
      </div>

      {/* Plataformas */}
      <div className="flex flex-row flex-wrap items-center w-full mb-6">
        <span className="text-base text-gray-400 mr-4">Plataformas:</span>
        <span className="px-3 py-1 rounded-full bg-green-600/20 text-green-500 font-semibold border border-green-500 mr-2 mb-2">Android</span>
        <span className="px-3 py-1 rounded-full bg-gray-400/20 text-gray-300 font-semibold border border-gray-300 mb-2">iOS</span>
      </div>

      <div className="flex flex-row items-center w-full mb-6">
        <span className="text-base text-gray-400 mr-4">Estado:</span>
        <span className="px-3 py-1 rounded-full bg-green-500/20 text-green-500 font-semibold border border-green-500">Finalizado — v1.3.0</span>
      </div>

      {/* Enlace al repositorio */}
      <div className="flex flex-row items-center w-full">
        <span className="text-base text-gray-400 mr-4">Repositorio:</span>
        <a
          href="https://github.com/diegobousop/2025-Ecos-do-Sur-App"
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
          href="https://github.com/diegobousop/2025-Ecos-do-Sur-App"
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

export default ProjectEcosDoSur
