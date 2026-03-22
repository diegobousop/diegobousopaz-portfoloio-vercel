import React, { useRef, useState, useEffect } from 'react'
import gsap from 'gsap'

const GymTonic = () => {
	const slides = ['/gt-01.png', '/gt-02.png', '/gt-03.png']
	const trackRef = useRef(null)
	const [index, setIndex] = useState(0)
	const autoplayRef = useRef(null)
	const [paused, setPaused] = useState(false)

	useEffect(() => {
		if (!trackRef.current) return
		gsap.to(trackRef.current, {
			xPercent: -index * 100,
			duration: 0.8,
			ease: 'power3.out',
		})
	}, [index])

	useEffect(() => {
		const play = () => setIndex((i) => (i + 1) % slides.length)
		if (!paused) autoplayRef.current = setInterval(play, 4000)
		return () => clearInterval(autoplayRef.current)
	}, [paused])

	const prev = () => setIndex((i) => (i - 1 + slides.length) % slides.length)
	const next = () => setIndex((i) => (i + 1) % slides.length)

	// Modal / lightbox state
	const [modalSrc, setModalSrc] = useState(null)
	const modalRef = useRef(null)
	const modalImgRef = useRef(null)

	const openModal = (src) => {
		setModalSrc(src)
		// animate in after render
		requestAnimationFrame(() => {
			if (modalRef.current && modalImgRef.current) {
				gsap.killTweensOf([modalRef.current, modalImgRef.current])
				gsap.fromTo(modalRef.current, { opacity: 0 }, { opacity: 1, duration: 0.25 })
				gsap.fromTo(modalImgRef.current, { scale: 0.95, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.35, ease: 'power3.out' })
			}
		})
	}

	const closeModal = () => {
		if (modalRef.current && modalImgRef.current) {
			gsap.to(modalImgRef.current, { scale: 0.96, opacity: 0, duration: 0.2 })
			gsap.to(modalRef.current, { opacity: 0, duration: 0.22, onComplete: () => setModalSrc(null) })
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
		<div id="gymtonic" className="bg-gradient-to-t from-transparent via-transparent to-transparent rounded-2xl border border-gray-700 shadow-lg max-w-4xl mx-auto mt-16 p-8 flex flex-col items-center">
			<div className="w-full mb-6">
				<h2 className="text-4xl text-yellow-500 font-bold text-left w-full mb-2">Gym Tonic</h2>
				<h3 className="text-xl text-gray-400 font-bold text-left w-full mb-4">Proyecto en grupo de asignaturas FD y MeD - Fullstack</h3>
			</div>

			<div
				className="gym-carousel w-full relative"
				onMouseEnter={() => setPaused(true)}
				onMouseLeave={() => setPaused(false)}
			>
				<div className="carousel-viewport overflow-hidden rounded-2xl border border-gray-700">
					<div className="carousel-track flex" ref={trackRef}>
						{slides.map((src, i) => (
							<div key={src} className="carousel-slide w-full flex-shrink-0 flex-grow-0 p-4 flex items-center justify-center">
								<img
									src={src}
									alt={`Gym Tonic ${i + 1}`}
									className="w-full h-auto rounded-xl shadow-2xl object-contain cursor-zoom-in"
									onClick={() => openModal(src)}
								/>
							</div>
						))}
					</div>
				</div>

				<button
					aria-label="Anterior"
					className="carousel-nav left-3"
					onClick={prev}
				>
					‹
				</button>
				<button
					aria-label="Siguiente"
					className="carousel-nav right-3"
					onClick={next}
				>
					›
				</button>

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

			<div className="mt-8 w-full">
				<p className="text-gray-300 text-left w-full mb-4">
					Aplicación que eleva tu entrenamiento físico y seguimiento de rutinas al siguiente nivel.
				</p>

				<div className="flex flex-row items-center w-full mb-6">
					<span className="text-base text-gray-400 mr-4">Tecnologías:</span>
					<span className="px-3 py-1 rounded-full bg-sky-500/10 text-sky-400 font-semibold border border-sky-400 mr-2">React</span>
					<span className="px-3 py-1 rounded-full bg-blue-400/10 text-blue-400 font-semibold border border-blue-400 mr-2">TailwindCSS</span>
					<span className="px-3 py-1 rounded-full bg-violet-500/10 text-violet-400 font-semibold border border-violet-400 mr-2">Spring Boot</span>
				</div>

				<div className="flex flex-row items-center w-full">
					<span className="text-base text-gray-400 mr-4">Estado:</span>
					<span className="px-3 py-1 rounded-full bg-green-500/20 text-green-500 font-semibold border border-green-500">Finalizado con nota de 7.6</span>
				</div>
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
						<img ref={modalImgRef} src={modalSrc} alt="Gym Tonic detalle" className="w-full h-full max-h-[72vh] object-contain rounded-lg shadow-2xl" />
					</div>
				</div>
			)}
		</div>
	)
}

export default GymTonic
