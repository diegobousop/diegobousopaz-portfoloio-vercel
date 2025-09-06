import React, { useState, useEffect } from 'react';

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
    <header className="flex justify-between items-center py-4 px-50 lg:px-64 sticky top-0 z-50  backdrop-blur-md border-b border-gray-700  ">

        <button onClick={toggleMobileMenu} className="text-3xl p-2 md:hidden">
          <img src="/icons/menu.png" alt="Menú" className="ml-6 w-6 h-6" />
        </button>


  {/* Nombre solo visible en móvil al hacer scroll, absolutamente centrado */}
  <span className={`md:hidden transition-opacity duration-300 font-bold text-l text-gray-400 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 ${showName ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>Diego Bouso Paz</span>
  <a className="p-2 text-gray-400 font-bold hidden md:inline">Portafolio</a>


        <nav className="flex space-x-6 hidden md:flex items-center">
          <a
            href="/"
            className={`text-base tracking-wider transition-colors duration-500 z-50 ${activeSection === "Inicio" ? "text-yellow-500 underline" : "text-white hover:text-yellow-500"}`}
            onClick={() => setActiveSection && setActiveSection("Inicio")}
          >
            Inicio
          </a>
          <a
            href="/contact"
            className={`text-base tracking-wider transition-colors duration-500 z-50 ${activeSection === "Contact" ? "text-yellow-500 underline" : "text-white hover:text-yellow-500"}`}
            onClick={() => setActiveSection && setActiveSection("Contact")}
          >
            Contacto
          </a>
          <a
            href="/projects"
            className={`text-base tracking-wider transition-colors duration-500 z-50 ${activeSection === "Projects" ? "text-yellow-500 underline" : "text-white hover:text-yellow-500"}`}
            onClick={() => setActiveSection && setActiveSection("Projects")}
          >
            Proyectos
          </a>
        </nav>

        


        {/*Mobile menu*/}
        <div id='mobileMenu' className="hidden fixed top-16 bottom-0 right-0 left-0 p-5 md:hidden z-40   bg-transparent backdrop-blur-md  ">
          
          <div className="h-0 w-[40rem] absolute top-[6.5%] right-[30%] shadow-[0_0_700px_40px_#81339F] -z-10">
          </div>
          <nav className="flex flex-col gap-6 items-center">
            <a
              href="/"
              className={`block text-base tracking-wider transition-colors duration-500 z-50 ${activeSection === "Inicio" ? "text-yellow-500 underline" : "text-white hover:text-yellow-500"}`}
              onClick={() => { setActiveSection && setActiveSection("Inicio"); toggleMobileMenu(); }}
            >
              Inicio
            </a>
            <a
              href="/contact"
              className={`block text-base tracking-wider transition-colors duration-500 z-50 ${activeSection === "Contact" ? "text-yellow-500 underline" : "text-white hover:text-yellow-500"}`}
              onClick={() => { setActiveSection && setActiveSection("Contact"); toggleMobileMenu(); }}
            >
              Contacto
            </a>
            <a
              href="/projects"
              className={`block text-base tracking-wider transition-colors duration-500 z-50 ${activeSection === "Projects" ? "text-yellow-500 underline" : "text-white hover:text-yellow-500"}`}
              onClick={() => { setActiveSection && setActiveSection("Projects"); toggleMobileMenu(); }}
            >
              Proyectos
            </a>
          </nav>

        </div>

    </header>
  )
}

export default Header