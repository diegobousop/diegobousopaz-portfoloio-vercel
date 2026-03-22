import Header from "./components/Header"
import GraphBackground from "./components/GraphBackground"
import LandingOverlay from "./components/LandingOverlay"
import PortfolioCreator from "./components/PortfolioCreator"
import { getSortedPortfolios } from "./data/portfoliosData"
import { generateEmptyPortfolioGraph } from "./data/emptyPortfolioGraph"
import { Toaster } from "react-hot-toast"

import { useState, useCallback, useEffect, useRef } from "react"

const HomePage = () => {
  const [activeSection, setActiveSection] = useState("Inicio")
  const [viewMode, setViewMode] = useState("default")
  const [overlayOpacity, setOverlayOpacity] = useState(1)
  const [showPortfolioCreator, setShowPortfolioCreator] = useState(false)
  const [isLightTheme, setIsLightTheme] = useState(false)
  const graphRef = useRef(null)
  
  // Estado dinámico de portfolios
  const [portfolios, setPortfolios] = useState(() => getSortedPortfolios())
  const [currentPortfolioIndex, setCurrentPortfolioIndex] = useState(
    portfolios.findIndex(p => p.isCurrent) || 0
  )
  const currentPortfolio = portfolios[currentPortfolioIndex]

  // Bloquear scroll en el body para la página del grafo
  useEffect(() => {
    document.body.classList.add('no-scroll')
    return () => {
      document.body.classList.remove('no-scroll')
    }
  }, [])

  const handleExplore = useCallback(() => {
    setViewMode("graph")
  }, [])

  const handleBackToDefault = useCallback(() => {
    setViewMode("default")
    setOverlayOpacity(1)
  }, [])

  // Abrir el creador de portfolios
  const handleOpenPortfolioCreator = useCallback(() => {
    setShowPortfolioCreator(true)
  }, [])

  // Guardar el nuevo portfolio creado
  const handleSaveNewPortfolio = useCallback((portfolioData) => {
    // Añadir graphData vacío si no existe
    const newPortfolio = {
      ...portfolioData,
      graphData: portfolioData.graphData || generateEmptyPortfolioGraph(),
      priority: 100,
      isCurrent: false,
    };
    
    // Insertar después del portfolio actual
    const newPortfolios = [...portfolios];
    newPortfolios.splice(currentPortfolioIndex + 1, 0, newPortfolio);
    setPortfolios(newPortfolios);
    
    // Navegar al nuevo portfolio
    setCurrentPortfolioIndex(currentPortfolioIndex + 1);
    setShowPortfolioCreator(false);
  }, [portfolios, currentPortfolioIndex]);

  // Actualizar datos del portfolio actual (desde el embudo de archivos)
  const handleUpdatePortfolio = useCallback((updateData) => {
    setPortfolios(prev => {
      const updated = [...prev];
      const current = { ...updated[currentPortfolioIndex] };
      
      // Actualizar graphData si viene
      if (updateData.graphData) {
        // Merge con el grafo existente o reemplazar
        current.graphData = {
          nodes: [
            ...(current.graphData?.nodes || []),
            ...updateData.graphData.nodes.filter(n => n.id !== 'central')
          ],
          edges: [
            ...(current.graphData?.edges || []),
            ...updateData.graphData.edges
          ],
          categories: updateData.graphData.categories || current.graphData?.categories
        };
        // Evitar nodos duplicados
        const seenIds = new Set();
        current.graphData.nodes = current.graphData.nodes.filter(n => {
          if (seenIds.has(n.id)) return false;
          seenIds.add(n.id);
          return true;
        });
      }
      
      // Actualizar otros datos
      if (updateData.highlights) {
        current.highlights = [...(current.highlights || []), ...updateData.highlights];
        // Eliminar duplicados
        current.highlights = [...new Set(current.highlights)];
      }
      if (updateData.stack) {
        current.stack = [...(current.stack || []), ...updateData.stack];
      }
      if (updateData.bio && !current.bio) {
        current.bio = updateData.bio;
      }
      
      updated[currentPortfolioIndex] = current;
      return updated;
    });
  }, [currentPortfolioIndex]);

  // Resetear el grafo del portfolio actual
  const handleResetGraph = useCallback(() => {
    setPortfolios(prev => {
      const updated = [...prev];
      const current = { ...updated[currentPortfolioIndex] };
      
      // Regenerar grafo vacío
      current.graphData = generateEmptyPortfolioGraph();
      current.graphData.nodes[0].name = current.name || 'Tu Portal';
      
      // Limpiar highlights generados
      current.highlights = [];
      
      updated[currentPortfolioIndex] = current;
      return updated;
    });
  }, [currentPortfolioIndex]);

  // Modo grafo fullscreen interactivo
  if (viewMode === "graph") {
    return (
      <div className="graph-root">
        <GraphBackground 
          ref={graphRef}
          interactive={true} 
          graphData={currentPortfolio.graphData} 
          themeColor={currentPortfolio.themeColor}
          isLightTheme={isLightTheme}
        />
        <div className="landing-header-wrapper">
          <Header activeSection={activeSection} setActiveSection={setActiveSection} />
        </div>
        
        {/* Controles del grafo */}
        <div className="fixed top-16 right-16 z-50 flex items-center gap-3">
          {/* Botón Sacudir */}
          <button
            onClick={() => graphRef.current?.shake()}
            className="p-3.5 bg-black/70 border border-white/20 rounded-full hover:bg-white/10 hover:border-white/40 transition-all shadow-lg backdrop-blur-sm group"
            aria-label="Sacudir nodos"
            title="¡Sacudir!"
          >
            <svg 
              width="22" 
              height="22" 
              viewBox="0 0 24 24" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              className="transition-transform group-hover:rotate-12"
              style={{ fill: currentPortfolio.themeColor }}
            >
              <path d="M17.5 2.5L23 8L17.5 13.5L16.09 12.09L19.17 9H15C11.69 9 9 11.69 9 15V16H7V15C7 10.58 10.58 7 15 7H19.17L16.09 3.91L17.5 2.5ZM6.5 21.5L1 16L6.5 10.5L7.91 11.91L4.83 15H9C12.31 15 15 12.31 15 9V8H17V9C17 13.42 13.42 17 9 17H4.83L7.91 20.09L6.5 21.5Z"/>
            </svg>
          </button>
          
          {/* Botón Explotar */}
          <button
            onClick={() => graphRef.current?.explode()}
            className="p-3.5 bg-black/70 border border-white/20 rounded-full hover:bg-white/10 hover:border-white/40 transition-all shadow-lg backdrop-blur-sm group"
            aria-label="Explotar nodos"
            title="¡Explotar!"
          >
            <svg 
              width="22" 
              height="22" 
              viewBox="0 0 24 24" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              className="transition-transform group-hover:scale-125"
              style={{ fill: currentPortfolio.themeColor }}
            >
              <path d="M11 2L13 7L18 6L15 10L20 12L15 14L18 18L13 17L11 22L9 17L4 18L7 14L2 12L7 10L4 6L9 7L11 2ZM11 8.5L10 11L7.5 10.5L9 12L7.5 13.5L10 13L11 15.5L12 13L14.5 13.5L13 12L14.5 10.5L12 11L11 8.5Z"/>
            </svg>
          </button>
          
          {/* Separador */}
          <div className="w-px h-8 bg-white/20"></div>
          
          {/* Botón Zoom Out */}
          <button
            onClick={() => graphRef.current?.zoomOut()}
            className="p-3.5 bg-black/70 border border-white/20 rounded-full hover:bg-white/10 hover:border-white/40 transition-all shadow-lg backdrop-blur-sm"
            aria-label="Alejar"
            title="Alejar"
          >
            <svg 
              width="22" 
              height="22" 
              viewBox="0 0 24 24" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              style={{ fill: currentPortfolio.themeColor }}
            >
              <path d="M15.5 14H14.71L14.43 13.73C15.41 12.59 16 11.11 16 9.5C16 5.91 13.09 3 9.5 3C5.91 3 3 5.91 3 9.5C3 13.09 5.91 16 9.5 16C11.11 16 12.59 15.41 13.73 14.43L14 14.71V15.5L19 20.49L20.49 19L15.5 14ZM9.5 14C7.01 14 5 11.99 5 9.5C5 7.01 7.01 5 9.5 5C11.99 5 14 7.01 14 9.5C14 11.99 11.99 14 9.5 14ZM7 9H12V10H7V9Z"/>
            </svg>
          </button>
          
          {/* Botón Zoom In */}
          <button
            onClick={() => graphRef.current?.zoomIn()}
            className="p-3.5 bg-black/70 border border-white/20 rounded-full hover:bg-white/10 hover:border-white/40 transition-all shadow-lg backdrop-blur-sm"
            aria-label="Acercar"
            title="Acercar"
          >
            <svg 
              width="22" 
              height="22" 
              viewBox="0 0 24 24" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              style={{ fill: currentPortfolio.themeColor }}
            >
              <path d="M15.5 14H14.71L14.43 13.73C15.41 12.59 16 11.11 16 9.5C16 5.91 13.09 3 9.5 3C5.91 3 3 5.91 3 9.5C3 13.09 5.91 16 9.5 16C11.11 16 12.59 15.41 13.73 14.43L14 14.71V15.5L19 20.49L20.49 19L15.5 14ZM9.5 14C7.01 14 5 11.99 5 9.5C5 7.01 7.01 5 9.5 5C11.99 5 14 7.01 14 9.5C14 11.99 11.99 14 9.5 14ZM12 10H10V12H9V10H7V9H9V7H10V9H12V10Z"/>
            </svg>
          </button>
          
          {/* Separador */}
          <div className="w-px h-8 bg-white/20"></div>
          
          {/* Botón Volver */}
          <button
            onClick={handleBackToDefault}
            className="p-4 bg-black/70 border border-white/20 rounded-full hover:bg-white/10 hover:border-white/40 transition-all shadow-lg backdrop-blur-sm"
            aria-label="Volver al inicio"
            title="Volver al inicio"
          >
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
          </button>
        </div>
      </div>
    )
  }

  // Modo default: landing fijo + portfolio scrollable dentro del overlay
  return (
    <>
      {/* Toaster para notificaciones */}
      <Toaster 
        position="top-center"
        toastOptions={{
          style: {
            background: '#1a1a2e',
            color: '#fff',
            border: '1px solid rgba(255,255,255,0.1)',
          },
        }}
      />

      {/* Capa fija: grafo de fondo */}
      <GraphBackground 
        interactive={false} 
        graphData={currentPortfolio.graphData} 
        themeColor={currentPortfolio.themeColor}
        isLightTheme={isLightTheme}
      />

      {/* Header fijo con z-index alto */}
      <div className="landing-header-wrapper">
        <Header activeSection={activeSection} setActiveSection={setActiveSection} />
      </div>

      {/* Landing overlay scrollable + contenido del portfolio */}
      <LandingOverlay
        onExplore={handleExplore}
        onBackToDefault={handleBackToDefault}
        viewMode={viewMode}
        overlayOpacity={overlayOpacity}
        setOverlayOpacity={setOverlayOpacity}
        currentPortfolioIndex={currentPortfolioIndex}
        setCurrentPortfolioIndex={setCurrentPortfolioIndex}
        portfolios={portfolios}
        onCreateNewPortfolio={handleOpenPortfolioCreator}
        onUpdatePortfolio={handleUpdatePortfolio}
        onResetGraph={handleResetGraph}
        isLightTheme={isLightTheme}
        onToggleTheme={() => setIsLightTheme(prev => !prev)}
      />

      {/* Modal de creación de portfolio */}
      {showPortfolioCreator && (
        <PortfolioCreator
          onSave={handleSaveNewPortfolio}
          onCancel={() => setShowPortfolioCreator(false)}
          themeColor={currentPortfolio.themeColor}
        />
      )}
    </>
  )
}

export default HomePage