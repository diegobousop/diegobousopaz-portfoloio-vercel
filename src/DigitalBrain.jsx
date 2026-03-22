import { useState } from "react";
import Header from "./components/Header";

// En desarrollo usa localhost:5175, en producción usa /brain/
const DIGITAL_BRAIN_URL = import.meta.env.DEV ? 'http://localhost:5175' : '/brain/';

const DigitalBrain = () => {
  const [activeSection, setActiveSection] = useState("DigitalBrain");
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="min-h-screen bg-black flex flex-col">
      {/* Header */}
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />

      {/* Loading indicator */}
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-black z-10 mt-16">
          <div className="text-center">
            <div className="w-12 h-12 border-4 border-[#FE4F51] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-white text-lg font-['Syncopate']">Cargando Digital Brain...</p>
          </div>
        </div>
      )}

      {/* Iframe con Digital Brain */}
      <iframe
        src={DIGITAL_BRAIN_URL}
        title="Digital Brain"
        className="flex-1 w-full border-0"
        style={{ minHeight: "calc(100vh - 64px)" }}
        onLoad={() => setIsLoading(false)}
        onError={() => setIsLoading(false)}
      />

      {/* Botón flotante de ayuda */}
      <div className="fixed bottom-6 right-6 z-50">
        <a
          href="https://github.com/Alvaro-pg/digital-brain-app"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 bg-[#FE4F51]/20 border border-[#FE4F51]/40 rounded-full text-[#FE4F51] text-sm font-semibold hover:bg-[#FE4F51]/30 transition-all"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
          Ver código
        </a>
      </div>
    </div>
  );
};

export default DigitalBrain;
