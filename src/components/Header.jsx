import React, { useState, useEffect } from 'react';
import portalLogo from '../assets/logos/portal.png';

const Header = ({ activeSection = "Inicio", setActiveSection }) => {
  // Simple function to toggle the mobile menu

  const [showName, setShowName] = useState(false);

  const toggleMobileMenu = () => {
      const mobileMenu = document.getElementById('mobileMenu');
      //if it has the hidden, remove it otherwise add it

      if(mobileMenu.classList.contains('hidden')){
        mobileMenu.classList.remove('hidden');
      } else {
        mobileMenu.classList.add('hidden');
      }
  }

  useEffect(() => {
    const handleScroll = () => {
      // Cambia 80 por la altura de tu Hero si quieres más precisión
      if (window.scrollY > 80) {
        setShowName(true);
      } else {
        setShowName(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="flex justify-center items-center py-4 px-8 sticky top-0 z-50 bg-black/70 border-b border-gray-700" style={{ fontFamily: "'Syncopate', sans-serif" }}>

        <button onClick={toggleMobileMenu} className="text-3xl p-2 md:hidden absolute left-4">
          <img src="/icons/menu.png" alt="Menú" className="w-6 h-6" />
        </button>


  {/* Nombre solo visible en móvil al hacer scroll, absolutamente centrado */}
  <span className={`md:hidden transition-opacity duration-300 font-bold text-l text-gray-400 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 ${showName ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>Diego Bouso Paz</span>

        {/* Logo a la izquierda */}
        <img src={portalLogo} alt="Logo" className="w-28 h-auto absolute left-8 hidden md:block" />

        <nav className="hidden md:flex items-center space-x-8">
          <a
            href="/"
            className={`text-sm uppercase tracking-widest transition-colors duration-500 z-50 ${activeSection === "Inicio" ? "text-[#FE4F51]" : "text-white hover:text-[#FE4F51]"}`}
            onClick={() => setActiveSection && setActiveSection("Inicio")}
          >
            Inicio
          </a>
          <a
            href="/contact"
            className={`text-sm uppercase tracking-widest transition-colors duration-500 z-50 ${activeSection === "Contact" ? "text-[#FE4F51]" : "text-white hover:text-[#FE4F51]"}`}
            onClick={() => setActiveSection && setActiveSection("Contact")}
          >
            Contacto
          </a>
          <a
            href="/projects"
            className={`text-sm uppercase tracking-widest transition-colors duration-500 z-50 ${activeSection === "Projects" ? "text-[#FE4F51]" : "text-white hover:text-[#FE4F51]"}`}
            onClick={() => setActiveSection && setActiveSection("Projects")}
          >
            Proyectos
          </a>
        </nav>

        


        {/*Mobile menu*/}
        <div id='mobileMenu' className="hidden fixed top-16 bottom-0 right-0 left-0 p-5 md:hidden z-40 bg-black/80" style={{ fontFamily: "'Syncopate', sans-serif" }}>
          
          <nav className="flex flex-col gap-6 items-center">
            <a
              href="/"
              className={`block text-sm uppercase tracking-widest transition-colors duration-500 z-50 ${activeSection === "Inicio" ? "text-[#FE4F51]" : "text-white hover:text-[#FE4F51]"}`}
              onClick={() => { setActiveSection && setActiveSection("Inicio"); toggleMobileMenu(); }}
            >
              Inicio
            </a>
            <a
              href="/contact"
              className={`block text-sm uppercase tracking-widest transition-colors duration-500 z-50 ${activeSection === "Contact" ? "text-[#FE4F51]" : "text-white hover:text-[#FE4F51]"}`}
              onClick={() => { setActiveSection && setActiveSection("Contact"); toggleMobileMenu(); }}
            >
              Contacto
            </a>
            <a
              href="/projects"
              className={`block text-sm uppercase tracking-widest transition-colors duration-500 z-50 ${activeSection === "Projects" ? "text-[#FE4F51]" : "text-white hover:text-[#FE4F51]"}`}
              onClick={() => { setActiveSection && setActiveSection("Projects"); toggleMobileMenu(); }}
            >
              Proyectos
            </a>
           
          </nav>

        </div>

    </header>
  );
};

export default Header;