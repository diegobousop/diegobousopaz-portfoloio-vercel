import React, { useEffect, useState } from "react"

import SocialNetworkIcon from "./SocialNetworkIcon"

const Hero = () => {
  const [tuEmail, setTuEmail] = useState('');
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!tuEmail || !tuEmail.includes('@')) {
        setToast({ show: true, message: 'Email inválido', type: 'error' });
        return;
    }

    fetch('http://localhost:5000/api/email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email: tuEmail })
    })
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          setToast({ show: true, message: '¡Email enviado correctamente!', type: 'success' });
          setTuEmail('');
        } else {
          setToast({ show: true, message: data.error || 'Error al enviar email', type: 'error' });
        }
      })
      .catch(() => {
        setToast({ show: true, message: 'Error de red', type: 'error' });
      });
  }

  useEffect(() => {
    console.log(tuEmail)
    if (toast.show) {
      const timer = setTimeout(() => setToast({ ...toast, show: false }), 2500);
      return () => clearTimeout(timer);
    }
  }, [toast.show]);

  return (
  <main className="flex  flex-col lg:flex-row items-center justify-center mt-20 mb-12 lg:mb-52 ">
      {/* Toast */}
      {toast.show && (
        <div className={`fixed top-6 left-1/2 -translate-x-1/2 px-6 py-3 rounded-full shadow-lg z-50 text-white font-semibold transition bg-gradient-to-r ${toast.type === 'success' ? 'from-green-400 to-green-600' : 'from-red-400 to-red-600'}`}>
          {toast.message}
        </div>
      )}

      <div className="text-center justify-center inline-block px-8 py-6 rounded-xl"
      >
        <h1 className="mt-8 text-4xl lg:text-6xl font-bold text-gray-400">Diego Bouso Paz</h1>

        <h1 
          className="text-3xl lg:text-4xl leading-relaxed font-bold mt-5 bg-gradient-to-r from-yellow-200 to-yellow-500 bg-clip-text text-transparent "
          style={{
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundImage: 'linear-gradient(90deg, #FE4F51 0%, #FF7043 70%)'
          }}
        >
          Ingeniero de Software
        </h1>
        <h1 className="text-m lg:text-xl font-light text-gray-300 mt-5">Siempre aprendiendo sobre nuevas tecnologías para aplicar la solución adecuada en el momento adecuado.</h1>

        
            

      
      
      </div>


     

      
    </main>
  )
}

export default Hero