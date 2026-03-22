import { useState, useRef, useEffect } from 'react';
import toast from 'react-hot-toast';
import FunnelIcon from './FunnelIcon';
import { API_BASE_URL } from '../config/api';

// Contraseña para acceder al embudo (en producción usar env var o backend auth)
const ACCESS_PASSWORD = 'diego2026';

const FunnelDropButton = ({ 
  themeColor = '#FE4F51', 
  portfolioName = 'Tu Portal',
  onUpdatePortfolio,
  onResetGraph,
  requireAuth = true // Solo requerir auth para Diego
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [passwordInput, setPasswordInput] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [files, setFiles] = useState([]);
  const [textPrompt, setTextPrompt] = useState(''); // Nuevo: prompt de texto
  const [isDragging, setIsDragging] = useState(false);
  const [isFunnelAnimating, setIsFunnelAnimating] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [processingStatus, setProcessingStatus] = useState('');
  const [processedItems, setProcessedItems] = useState([]); // Historial de items procesados
  const fileInputRef = useRef(null);
  const panelRef = useRef(null);
  const passwordInputRef = useRef(null);

  // Verificar si el portfolio es de Diego (requiere auth)
  const isDiegoPortfolio = portfolioName.toLowerCase().includes('diego');

  // Cerrar panel al hacer clic fuera
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (panelRef.current && !panelRef.current.contains(event.target) && isExpanded && !isProcessing) {
        setIsExpanded(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isExpanded, isProcessing]);

  // Focus en password input al expandir
  useEffect(() => {
    if (isExpanded && !isAuthenticated && requireAuth && isDiegoPortfolio) {
      setTimeout(() => passwordInputRef.current?.focus(), 100);
    }
  }, [isExpanded, isAuthenticated, requireAuth, isDiegoPortfolio]);

  const handleAuthenticate = (e) => {
    e.preventDefault();
    if (passwordInput === ACCESS_PASSWORD) {
      setIsAuthenticated(true);
      setPasswordInput('');
      toast.success('Acceso concedido');
    } else {
      toast.error('Contraseña incorrecta');
      setPasswordInput('');
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (!requireAuth || !isDiegoPortfolio || isAuthenticated) {
      setIsDragging(true);
    }
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    
    if (requireAuth && isDiegoPortfolio && !isAuthenticated) {
      setIsExpanded(true);
      return;
    }
    
    const droppedFiles = Array.from(e.dataTransfer.files);
    if (droppedFiles.length > 0) {
      setFiles(prev => [...prev, ...droppedFiles]);
      setIsFunnelAnimating(true);
      setTimeout(() => setIsFunnelAnimating(false), 700);
      setIsExpanded(true);
    }
  };

  const handleFileSelect = (e) => {
    const selectedFiles = Array.from(e.target.files);
    if (selectedFiles.length > 0) {
      setFiles(prev => [...prev, ...selectedFiles]);
      setIsFunnelAnimating(true);
      setTimeout(() => setIsFunnelAnimating(false), 700);
    }
  };

  const removeFile = (index) => {
    setFiles(prev => prev.filter((_, i) => i !== index));
  };

  const removeProcessedItem = (index) => {
    setProcessedItems(prev => prev.filter((_, i) => i !== index));
  };

  const formatFileSize = (bytes) => {
    if (bytes < 1024) return bytes + ' B';
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB';
    return (bytes / (1024 * 1024)).toFixed(1) + ' MB';
  };

  const getFileIcon = (fileName) => {
    const ext = fileName.split('.').pop().toLowerCase();
    if (['pdf'].includes(ext)) {
      return (
        <svg className="w-4 h-4 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      );
    } else if (['jpg', 'jpeg', 'png', 'gif', 'webp'].includes(ext)) {
      return (
        <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      );
    }
    return (
      <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    );
  };

  const handleProcess = async () => {
    // Permitir procesar si hay archivos O texto
    if (files.length === 0 && !textPrompt.trim()) return;

    setIsProcessing(true);
    setProcessingStatus('Analizando contenido...');

    try {
      const formData = new FormData();
      formData.append('name', portfolioName);
      
      // Construir prompt combinado
      let combinedPrompt = `Analiza el siguiente contenido para actualizar el portfolio de ${portfolioName}. 
        Extrae información relevante: 
        - Habilidades y tecnologías
        - Proyectos o trabajos mencionados
        - Experiencia profesional
        - Conceptos clave
        Genera nodos y conexiones para visualizar en un grafo de conocimiento.`;
      
      // Si hay texto, añadirlo al prompt
      if (textPrompt.trim()) {
        combinedPrompt += `\n\nINFORMACIÓN ADICIONAL DEL USUARIO:\n${textPrompt.trim()}`;
      }
      
      formData.append('prompt', combinedPrompt);
      
      // Añadir archivos si hay
      files.forEach(file => {
        formData.append('files', file);
      });

      const response = await fetch(`${API_BASE_URL}/portfolio/analyze-and-graph`, {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
        setProcessingStatus('Actualizando portfolio...');
        
        // Guardar items procesados en historial
        const newProcessed = [];
        
        files.forEach(f => {
          newProcessed.push({
            type: 'file',
            name: f.name,
            size: f.size,
            processedAt: new Date().toISOString(),
          });
        });
        
        if (textPrompt.trim()) {
          newProcessed.push({
            type: 'text',
            name: textPrompt.trim().substring(0, 50) + (textPrompt.length > 50 ? '...' : ''),
            processedAt: new Date().toISOString(),
          });
        }
        
        setProcessedItems(prev => [...prev, ...newProcessed]);
        
        // Actualizar el portfolio con los nuevos datos
        if (onUpdatePortfolio && data) {
          onUpdatePortfolio({
            graphData: data.graphData,
            highlights: data.highlights,
            stack: data.stack,
            bio: data.bio,
          });
        }
        
        setFiles([]);
        setTextPrompt('');
        
        const itemCount = files.length + (textPrompt.trim() ? 1 : 0);
        toast.success(`¡${itemCount} elemento${itemCount > 1 ? 's' : ''} procesado${itemCount > 1 ? 's' : ''}!`);
      } else {
        throw new Error('Error al procesar contenido');
      }
    } catch (error) {
      console.error('Error procesando contenido:', error);
      toast.error('Error al procesar. ¿Está el servidor activo?');
    } finally {
      setIsProcessing(false);
      setProcessingStatus('');
    }
  };

  const handleReset = () => {
    setFiles([]);
    setTextPrompt('');
    setProcessedItems([]);
    if (onResetGraph) {
      onResetGraph();
      toast.success('Grafo reseteado');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setIsExpanded(false);
    toast.success('Sesión cerrada');
  };

  const totalItems = files.length + processedItems.length + (textPrompt.trim() ? 1 : 0);
  const canProcess = files.length > 0 || textPrompt.trim();
  const needsAuth = requireAuth && isDiegoPortfolio && !isAuthenticated;

  return (
    <div 
      ref={panelRef}
      className="fixed right-6 bottom-6 z-50"
    >
      {/* Panel expandido */}
      {isExpanded && (
        <div 
          className="absolute right-0 bottom-full mb-3 w-80 bg-black/95 border border-white/20 rounded-2xl shadow-2xl overflow-hidden"
          style={{ borderColor: `${themeColor}40` }}
        >
          {/* Pantalla de autenticación */}
          {needsAuth ? (
            <div className="p-6">
              <div className="flex flex-col items-center mb-6">
                <div 
                  className="w-16 h-16 rounded-full flex items-center justify-center mb-4"
                  style={{ backgroundColor: `${themeColor}20` }}
                >
                  <svg className="w-8 h-8" style={{ color: themeColor }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 
                  className="text-white text-sm font-bold uppercase tracking-wider"
                  style={{ fontFamily: 'Syncopate, sans-serif' }}
                >
                  Acceso protegido
                </h3>
                <p className="text-gray-400 text-xs text-center mt-2">
                  Este embudo requiere contraseña para modificar el portfolio de Diego
                </p>
              </div>
              
              <form onSubmit={handleAuthenticate}>
                <div className="relative mb-4">
                  <input
                    ref={passwordInputRef}
                    type={showPassword ? 'text' : 'password'}
                    value={passwordInput}
                    onChange={(e) => setPasswordInput(e.target.value)}
                    placeholder="Contraseña"
                    className="w-full bg-white/5 border border-white/20 rounded-xl px-4 py-3 pr-10 text-white placeholder-gray-500 focus:outline-none focus:border-white/40 transition-colors"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                  >
                    {showPassword ? (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                      </svg>
                    ) : (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    )}
                  </button>
                </div>
                
                <button
                  type="submit"
                  className="w-full py-3 rounded-xl text-white text-sm font-bold transition-all hover:scale-105"
                  style={{ 
                    backgroundColor: themeColor,
                    boxShadow: `0 4px 20px ${themeColor}40`
                  }}
                >
                  Acceder
                </button>
              </form>
              
              <button 
                onClick={() => setIsExpanded(false)}
                className="w-full mt-3 py-2 text-gray-400 text-xs hover:text-white transition-colors"
              >
                Cancelar
              </button>
            </div>
          ) : (
            <>
              {/* Header del panel */}
              <div className="p-4 border-b border-white/10">
                <div className="flex items-center justify-between">
                  <h3 
                    className="text-white text-sm font-bold uppercase tracking-wider"
                    style={{ fontFamily: 'Syncopate, sans-serif' }}
                  >
                    Embudo
                  </h3>
                  <div className="flex items-center gap-2">
                    {processedItems.length > 0 && (
                      <button
                        onClick={handleReset}
                        className="text-xs px-2 py-1 rounded bg-red-500/20 text-red-400 hover:bg-red-500/30 transition-colors"
                      >
                        Reset
                      </button>
                    )}
                    {isDiegoPortfolio && (
                      <button
                        onClick={handleLogout}
                        className="text-xs px-2 py-1 rounded bg-white/10 text-gray-400 hover:text-white transition-colors"
                        title="Cerrar sesión"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                        </svg>
                      </button>
                    )}
                    <button 
                      onClick={() => setIsExpanded(false)}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>

              {/* Input de texto para prompts */}
              <div className="px-4 pt-4">
                <label className="text-xs text-gray-500 mb-2 block uppercase tracking-wider">
                  Añadir con texto
                </label>
                <textarea
                  value={textPrompt}
                  onChange={(e) => setTextPrompt(e.target.value)}
                  placeholder="Ej: Añade que sé Python avanzado, he trabajado en proyectos de IA, y tengo experiencia con React Native..."
                  className="w-full bg-white/5 border border-white/20 rounded-xl px-3 py-2 text-white text-xs placeholder-gray-500 focus:outline-none focus:border-white/40 transition-colors resize-none"
                  rows={3}
                />
              </div>

              {/* Área de drop */}
              <div
                onClick={() => fileInputRef.current?.click()}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
                className={`m-4 border-2 border-dashed rounded-xl p-4 cursor-pointer transition-all duration-300 flex flex-col items-center justify-center
                  ${isDragging 
                    ? 'border-white bg-white/10 scale-105' 
                    : 'border-gray-600 hover:border-gray-400 bg-white/5'
                  }`}
              >
                <FunnelIcon 
                  size={50} 
                  isAnimating={isFunnelAnimating} 
                  isDragging={isDragging} 
                  color={themeColor}
                />
                <p className="text-gray-400 text-xs text-center mt-2">
                  {files.length > 0 ? `${files.length} archivo${files.length > 1 ? 's' : ''}` : 'O arrastra archivos aquí'}
                </p>
                <input
                  ref={fileInputRef}
                  type="file"
                  multiple
                  accept=".pdf,.txt,.md,.jpg,.jpeg,.png,.webp"
                  onChange={handleFileSelect}
                  className="hidden"
                />
              </div>

              {/* Lista de archivos pendientes */}
              {files.length > 0 && (
                <div className="px-4 pb-2">
                  <p className="text-xs text-gray-500 mb-2 uppercase tracking-wider">Archivos ({files.length})</p>
                  <div className="space-y-2 max-h-24 overflow-y-auto">
                    {files.map((file, index) => (
                      <div 
                        key={index}
                        className="flex items-center justify-between p-2 bg-white/5 rounded-lg group"
                      >
                        <div className="flex items-center gap-2 overflow-hidden">
                          {getFileIcon(file.name)}
                          <span className="text-white text-xs truncate">{file.name}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-gray-500 text-xs">{formatFileSize(file.size)}</span>
                          <button 
                            onClick={() => removeFile(index)}
                            className="text-gray-600 hover:text-red-400 opacity-0 group-hover:opacity-100 transition-opacity"
                          >
                            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Lista de items procesados */}
              {processedItems.length > 0 && (
                <div className="px-4 pb-2">
                  <p className="text-xs text-gray-500 mb-2 uppercase tracking-wider">Procesados ({processedItems.length})</p>
                  <div className="space-y-2 max-h-20 overflow-y-auto">
                    {processedItems.map((item, index) => (
                      <div 
                        key={index}
                        className="flex items-center justify-between p-2 bg-green-500/10 border border-green-500/20 rounded-lg group"
                      >
                        <div className="flex items-center gap-2 overflow-hidden">
                          {item.type === 'text' ? (
                            <svg className="w-4 h-4 text-purple-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                            </svg>
                          ) : (
                            <svg className="w-4 h-4 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          )}
                          <span className="text-green-300 text-xs truncate">{item.name}</span>
                        </div>
                        <button 
                          onClick={() => removeProcessedItem(index)}
                          className="text-gray-600 hover:text-red-400 opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Botón de procesar */}
              <div className="p-4 border-t border-white/10">
                {isProcessing ? (
                  <div className="flex items-center justify-center gap-3 py-2">
                    <div className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                    <span className="text-white text-xs">{processingStatus}</span>
                  </div>
                ) : (
                  <button
                    onClick={handleProcess}
                    disabled={!canProcess}
                    className={`w-full py-3 rounded-xl text-sm font-bold transition-all ${
                      canProcess
                        ? 'text-white hover:scale-105'
                        : 'bg-gray-700 text-gray-500 cursor-not-allowed'
                    }`}
                    style={canProcess ? { 
                      backgroundColor: themeColor,
                      boxShadow: `0 4px 20px ${themeColor}40`
                    } : {}}
                  >
                    Procesar y actualizar
                  </button>
                )}
              </div>
            </>
          )}
        </div>
      )}

      {/* Botón principal del embudo */}
      <div
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={(e) => {
          e.stopPropagation();
          setIsExpanded(!isExpanded);
        }}
        className={`relative cursor-pointer p-3 rounded-full bg-black/60 border transition-all hover:scale-105 group ${
          isDragging ? 'scale-110 border-white' : 'border-white/20'
        }`}
        style={{
          borderColor: isDragging ? themeColor : undefined,
          boxShadow: isDragging ? `0 0 20px ${themeColor}60` : undefined
        }}
      >
        <FunnelIcon 
          size={40} 
          isAnimating={isFunnelAnimating} 
          isDragging={isDragging} 
          color={themeColor}
        />
        
        {/* Badge de archivos */}
        {totalItems > 0 && (
          <div 
            className="absolute -top-1 -right-1 w-5 h-5 rounded-full flex items-center justify-center text-white text-xs font-bold"
            style={{ backgroundColor: themeColor }}
          >
            {totalItems}
          </div>
        )}
        
        {/* Indicador de bloqueo */}
        {needsAuth && (
          <div className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-yellow-500 flex items-center justify-center">
            <svg className="w-2.5 h-2.5 text-black" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 1a5 5 0 00-5 5v3H6a2 2 0 00-2 2v9a2 2 0 002 2h12a2 2 0 002-2v-9a2 2 0 00-2-2h-1V6a5 5 0 00-5-5zm3 8H9V6a3 3 0 116 0v3z" />
            </svg>
          </div>
        )}

        {/* Tooltip */}
        <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          <div className="bg-black/90 text-white text-xs px-3 py-2 rounded-lg whitespace-nowrap border border-white/10">
            {needsAuth ? 'Embudo protegido' : 'Añadir contenido al portfolio'}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FunnelDropButton;
