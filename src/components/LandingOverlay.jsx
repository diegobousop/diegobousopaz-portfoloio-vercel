import Experience from './Experience';
import Footer from './Footer';
import StackTechnologico from './StackTechnologico';
import Introduction from './Introduction';
import ProjectsSnippet from './ProjectsSnippet';
import GenericIntroduction from './generic/GenericIntroduction';
import GenericExperience from './generic/GenericExperience';
import GenericProjects from './generic/GenericProjects';
import GenericStack from './generic/GenericStack';
import GenericFooter from './generic/GenericFooter';
import FunnelDropButton from './FunnelDropButton';
import { useRef, useEffect } from 'react';

const LandingOverlay = ({ 
  onExplore, 
  onBackToDefault,
  viewMode,
  overlayOpacity, 
  setOverlayOpacity,
  currentPortfolioIndex,
  setCurrentPortfolioIndex,
  portfolios,
  onCreateNewPortfolio,
  onUpdatePortfolio,
  onResetGraph,
  isLightTheme,
  onToggleTheme
}) => {
  const containerRef = useRef(null);
  
  const currentIndex = currentPortfolioIndex;
  const setCurrentIndex = setCurrentPortfolioIndex;
  
  const currentPortfolio = portfolios[currentIndex];
  const hasPrev = currentIndex > 0;
  const hasNext = currentIndex < portfolios.length - 1;
  
  const handlePrevPortfolio = () => {
    if (hasPrev) setCurrentIndex(currentIndex - 1);
  };
  
  const handleNextPortfolio = () => {
    if (hasNext) setCurrentIndex(currentIndex + 1);
  };

  // Manejar el fade del overlay basado en scroll interno
  useEffect(() => {
    const container = containerRef.current;
    if (!container || !setOverlayOpacity) return;

    const handleScroll = () => {
      const scrollY = container.scrollTop;
      const fadeEnd = window.innerHeight * 0.6;
      const opacity = Math.max(0, 1 - scrollY / fadeEnd);
      setOverlayOpacity(opacity);
    };

    container.addEventListener('scroll', handleScroll, { passive: true });
    return () => container.removeEventListener('scroll', handleScroll);
  }, [setOverlayOpacity]);

  const handleScrollToPortfolio = () => {
    const container = containerRef.current;
    if (container) {
      container.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
    }
  };

  return (
    <div ref={containerRef} className="landing-overlay-container">
      {/* Botón navegación izquierda */}
      {hasPrev && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            handlePrevPortfolio();
          }}
          className="fixed left-6 top-1/2 -translate-y-1/2 z-50 group"
          aria-label="Portfolio anterior"
        >
          <div 
            className="flex items-center gap-3 px-4 py-3 rounded-full bg-black/60 border border-white/10 transition-all hover:scale-105"
            style={{
              '--hover-bg': `${portfolios[currentIndex - 1]?.themeColor}15`,
              '--hover-border': `${portfolios[currentIndex - 1]?.themeColor}66`,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = `${portfolios[currentIndex - 1]?.themeColor}15`;
              e.currentTarget.style.borderColor = `${portfolios[currentIndex - 1]?.themeColor}66`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(0,0,0,0.6)';
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
            }}
          >
            <svg 
              className="w-5 h-5 text-white/60 transition-colors flex-shrink-0 group-hover:text-current" 
              style={{ '--hover-color': portfolios[currentIndex - 1]?.themeColor }}
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <div className="text-left">
              <p className="text-white/90 text-[15px] font-semibold truncate max-w-[200px] leading-tight">
                {portfolios[currentIndex - 1]?.name}
              </p>
              <p 
                className="text-[12px] truncate max-w-[200px] leading-tight lowercase"
                style={{ 
                  fontFamily: 'Syncopate, sans-serif',
                  color: `${portfolios[currentIndex - 1]?.themeColor}B3`
                }}
              >
                {portfolios[currentIndex - 1]?.title}
              </p>
            </div>
          </div>
        </button>
      )}

      {/* Botón navegación derecha */}
      {/* {hasNext && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            handleNextPortfolio();
          }}
          className="fixed right-6 top-1/2 -translate-y-1/2 z-50 group"
          aria-label="Portfolio siguiente"
        >
          <div 
            className="flex items-center gap-3 px-4 py-3 rounded-full bg-black/60 border border-white/10 transition-all hover:scale-105"
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = `${portfolios[currentIndex + 1]?.themeColor}15`;
              e.currentTarget.style.borderColor = `${portfolios[currentIndex + 1]?.themeColor}66`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(0,0,0,0.6)';
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
            }}
          >
            <div className="text-right">
              <p className="text-white/90 text-[15px] font-semibold truncate max-w-[200px] leading-tight">
                {portfolios[currentIndex + 1]?.name}
              </p>
              <p 
                className="text-[12px] truncate max-w-[200px] leading-tight lowercase"
                style={{ 
                  fontFamily: 'Syncopate, sans-serif',
                  color: `${portfolios[currentIndex + 1]?.themeColor}B3`
                }}
              >
                {portfolios[currentIndex + 1]?.title}
              </p>
            </div>
            <svg 
              className="w-5 h-5 text-white/60 transition-colors flex-shrink-0" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </button>
      )} */}

      {/* Botón crear portal - centrado, arriba de la navegación */}
     {/*  <button
        onClick={(e) => {
          e.stopPropagation();
          onCreateNewPortfolio();
        }}
        className="fixed right-6 top-[calc(50%-140px)] z-50 flex items-center gap-2 px-4 py-2.5 bg-black/60 border border-white/20 rounded-full text-white text-sm font-medium hover:bg-[#FE4F51]/10 hover:border-[#FE4F51]/40 transition-all group"
      >
        <svg className="w-4 h-4 text-[#FE4F51] group-hover:rotate-90 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
        </svg>
        <span>Crea tu portal</span>
      </button> */}

      {/* Botón embudo para análisis de archivos */}
      {/* <FunnelDropButton
        themeColor={currentPortfolio.themeColor}
        portfolioName={currentPortfolio.name}
        onUpdatePortfolio={onUpdatePortfolio}
        onResetGraph={onResetGraph}
      /> */}

      {/* Botón fijo para ir al grafo / volver al inicio */}
      <div className="fixed top-16 right-16 z-50 flex items-center gap-3">
        {/* Botón tema claro/oscuro */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onToggleTheme();
          }}
          className="p-4 bg-black/70 border border-white/20 rounded-full hover:bg-white/10 hover:border-white/40 transition-all group shadow-lg backdrop-blur-sm"
          aria-label={isLightTheme ? 'Cambiar a tema oscuro' : 'Cambiar a tema claro'}
          title={isLightTheme ? 'Tema oscuro' : 'Tema claro'}
        >
          {isLightTheme ? (
            /* Icono luna */
            <svg 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              className="transition-colors"
              style={{ fill: currentPortfolio.themeColor }}
            >
              <path d="M12 3C7.03 3 3 7.03 3 12C3 16.97 7.03 21 12 21C16.97 21 21 16.97 21 12C21 11.54 20.96 11.08 20.9 10.64C19.92 12.01 18.32 12.9 16.5 12.9C13.52 12.9 11.1 10.48 11.1 7.5C11.1 5.68 11.99 4.08 13.36 3.1C12.92 3.04 12.46 3 12 3Z"/>
            </svg>
          ) : (
            /* Icono sol */
            <svg 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              className="transition-colors"
              style={{ fill: currentPortfolio.themeColor }}
            >
              <path d="M12 7C9.24 7 7 9.24 7 12C7 14.76 9.24 17 12 17C14.76 17 17 14.76 17 12C17 9.24 14.76 7 12 7ZM12 15C10.34 15 9 13.66 9 12C9 10.34 10.34 9 12 9C13.66 9 15 10.34 15 12C15 13.66 13.66 15 12 15ZM12 2L14.39 5.42C13.65 5.15 12.84 5 12 5C11.16 5 10.35 5.15 9.61 5.42L12 2ZM12 22L9.61 18.58C10.35 18.85 11.16 19 12 19C12.84 19 13.65 18.85 14.39 18.58L12 22ZM2 12L5.42 9.61C5.15 10.35 5 11.16 5 12C5 12.84 5.15 13.65 5.42 14.39L2 12ZM22 12L18.58 14.39C18.85 13.65 19 12.84 19 12C19 11.16 18.85 10.35 18.58 9.61L22 12ZM4.93 4.93L7.76 7.76C7.23 8.55 6.85 9.45 6.68 10.42L4.93 4.93ZM19.07 4.93L17.32 10.42C17.15 9.45 16.77 8.55 16.24 7.76L19.07 4.93ZM4.93 19.07L6.68 13.58C6.85 14.55 7.23 15.45 7.76 16.24L4.93 19.07ZM19.07 19.07L16.24 16.24C16.77 15.45 17.15 14.55 17.32 13.58L19.07 19.07Z"/>
            </svg>
          )}
        </button>

        {/* Botón ir al grafo / volver al inicio */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            if (viewMode === 'graph') {
              onBackToDefault();
            } else {
              onExplore();
            }
          }}
          className="p-4 bg-black/70 border border-white/20 rounded-full hover:bg-white/10 hover:border-white/40 transition-all group shadow-lg backdrop-blur-sm"
          style={{
            '--theme-color': currentPortfolio.themeColor
          }}
          aria-label={viewMode === 'graph' ? 'Volver al inicio' : 'Explorar grafo'}
          title={viewMode === 'graph' ? 'Volver al inicio' : 'Explorar grafo'}
        >
          {viewMode === 'graph' ? (
            /* Icono maximizar (flechas hacia afuera) */
            <svg 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              className="transition-colors"
              style={{ fill: currentPortfolio.themeColor }}
            >
              <path d="M4 4V10H6V7.41L9.29 10.71L10.71 9.29L7.41 6H10V4H4ZM14 4V6H16.59L13.29 9.29L14.71 10.71L18 7.41V10H20V4H14ZM9.29 13.29L6 16.59V14H4V20H10V18H7.41L10.71 14.71L9.29 13.29ZM14.71 13.29L13.29 14.71L16.59 18H14V20H20V14H18V16.59L14.71 13.29Z"/>
            </svg>
          ) : (
            /* Icono minimizar (flechas hacia adentro) */
            <svg 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              className="transition-colors"
              style={{ fill: currentPortfolio.themeColor }}
            >
              <path d="M4.71004 3.29001L3.29004 4.71001L6.29004 7.71001L4.00004 10H10V4.00001L7.71004 6.29001L4.71004 3.29001ZM16.29 6.29001L14 4.00001V10H20L17.71 7.71001L20.71 4.71001L19.29 3.29001L16.29 6.29001ZM20 14H14V20L16.29 17.71L19.29 20.71L20.71 19.29L17.71 16.29L20 14ZM6.29004 16.29L3.29004 19.29L4.71004 20.71L7.71004 17.71L10 20V14H4.00004L6.29004 16.29Z"/>
            </svg>
          )}
        </button>
      </div>

      

      {/* Sección hero del landing */}
      <div
        className="landing-overlay"
        style={{ opacity: overlayOpacity, pointerEvents: overlayOpacity < 0.1 ? 'none' : 'auto' }}
      >
        <div className="landing-overlay-inner">
          <div className="landing-overlay-content">
            <h1 className="landing-name">{currentPortfolio.name}</h1>
            <h2 
              className="landing-title"
              style={{ color: currentPortfolio.themeColor }}
            >
              {currentPortfolio.title}
            </h2>
            <p className="landing-subtitle">
              {currentPortfolio.subtitle || 'Diseñando nuevas tecnologías para el futuro'}
            </p>

            <div className="landing-buttons">
              <button
                className="landing-explore-btn"
                onClick={(e) => {
                  e.stopPropagation();
                  onExplore();
                }}
                style={{
                  '--theme-color': currentPortfolio.themeColor
                }}
              >
                <span className="landing-explore-btn-text">Explorar mi universo</span>
                <svg
                  className="landing-explore-btn-icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M7 17L17 7M17 7H7M17 7V17" />
                </svg>
              </button>
            </div>

            <p className="landing-hint">
              o haz clic en cualquier lugar vacío para explorar el grafo
            </p>
          </div>

          {/* Indicador de scroll */}
          <div
            className="landing-scroll-indicator"
            onClick={(e) => {
              e.stopPropagation();
              handleScrollToPortfolio();
            }}
          >
            <span>Desliza para ver más</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="landing-scroll-arrow">
              <path d="M7 10l5 5 5-5" />
            </svg>
          </div>
        </div>
      </div>

      {/* Contenido del portfolio */}
      <main id="portfolio-content" className="portfolio-content" onClick={onExplore}>
        <div className="z-10 relative md:px-12 xl:px-72 justify-center items-center flex flex-col" onClick={(e) => e.stopPropagation()}>
          {currentPortfolio.useCustomComponents ? (
            // Componentes originales de Diego Bouso
            <>
              <Introduction />
              <Experience />
              <ProjectsSnippet />
              <StackTechnologico />
              <Footer />
            </>
          ) : (
            // Componentes genéricos para otros usuarios
            <>
              <GenericIntroduction data={currentPortfolio} />
              <GenericExperience data={currentPortfolio} />
              <GenericProjects data={currentPortfolio} />
              <GenericStack data={currentPortfolio} />
              <GenericFooter data={currentPortfolio} />
            </>
          )}
        </div>
      </main>
    </div>
  );
};

export default LandingOverlay;
