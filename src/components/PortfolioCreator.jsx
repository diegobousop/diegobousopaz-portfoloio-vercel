import { useState, useRef } from 'react';
import toast from 'react-hot-toast';
import FunnelIcon from './FunnelIcon';
import { API_BASE_URL } from '../config/api';

// Colores disponibles para portfolios
const THEME_COLORS = [
  { name: 'Coral', value: '#FE4F51' },
  { name: 'Violeta', value: '#8B5CF6' },
  { name: 'Esmeralda', value: '#10B981' },
  { name: 'Azul', value: '#3B82F6' },
  { name: 'Rosa', value: '#EC4899' },
  { name: 'Cyan', value: '#06B6D4' },
  { name: 'Ámbar', value: '#F59E0B' },
];

const PortfolioCreator = ({ onSave, onCancel, themeColor = '#FE4F51' }) => {
  // Campos básicos obligatorios
  const [name, setName] = useState('');
  const [profession, setProfession] = useState('');
  const [subtitle, setSubtitle] = useState('');
  const [selectedColor, setSelectedColor] = useState(themeColor);
  
  // Embudo de archivos
  const [files, setFiles] = useState([]);
  const [isDragging, setIsDragging] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [processingStep, setProcessingStep] = useState('');
  const fileInputRef = useRef(null);

  // Animación del embudo
  const [isFunnelAnimating, setIsFunnelAnimating] = useState(false);

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const droppedFiles = Array.from(e.dataTransfer.files);
    setFiles(prev => [...prev, ...droppedFiles]);
    setIsFunnelAnimating(true);
    setTimeout(() => setIsFunnelAnimating(false), 700);
  };

  const handleFileSelect = (e) => {
    const selectedFiles = Array.from(e.target.files);
    setFiles(prev => [...prev, ...selectedFiles]);
    setIsFunnelAnimating(true);
    setTimeout(() => setIsFunnelAnimating(false), 700);
  };

  const removeFile = (index) => {
    setFiles(prev => prev.filter((_, i) => i !== index));
  };

  const getFileIcon = (fileName) => {
    const ext = fileName.split('.').pop().toLowerCase();
    if (['pdf'].includes(ext)) {
      return (
        <svg className="w-6 h-6 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      );
    } else if (['jpg', 'jpeg', 'png', 'gif', 'webp'].includes(ext)) {
      return (
        <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      );
    } else if (['txt', 'md'].includes(ext)) {
      return (
        <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      );
    }
    return (
      <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    );
  };

  const formatFileSize = (bytes) => {
    if (bytes < 1024) return bytes + ' B';
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB';
    return (bytes / (1024 * 1024)).toFixed(1) + ' MB';
  };

  const handleCreate = async () => {
    if (!name.trim() || !profession.trim()) {
      toast.error('Nombre y profesión son obligatorios');
      return;
    }

    setIsProcessing(true);
    
    try {
      let generatedData = {
        bio: '',
        highlights: [],
        jobs: [],
        projects: [],
        stack: [],
      };

      // Si hay archivos, procesarlos con el brain
      if (files.length > 0) {
        setProcessingStep('Analizando archivos...');
        
        const formData = new FormData();
        formData.append('name', name.trim());
        formData.append('profession', profession.trim());
        formData.append('prompt', `Analiza estos archivos para crear un portfolio profesional para ${name}, que es ${profession}. 
          Extrae: 
          - Una bio profesional (2-3 frases)
          - 3-5 highlights/skills principales
          - Experiencia laboral si la encuentras
          - Proyectos relevantes
          - Stack tecnológico o herramientas que usa`);
        
        files.forEach(file => {
          formData.append('files', file);
        });

        try {
          const response = await fetch(`${API_BASE_URL}/portfolio/generate`, {
            method: 'POST',
            body: formData,
          });

          if (response.ok) {
            generatedData = await response.json();
            setProcessingStep('Portfolio generado!');
          } else {
            console.warn('No se pudo procesar con el brain, usando datos básicos');
          }
        } catch (err) {
          console.warn('Brain no disponible, creando portfolio básico:', err);
        }
      }

      setProcessingStep('Creando portal...');
      
      // Crear el portfolio con los datos
      const portfolioData = {
        id: `portal-${Date.now()}`,
        name: name.trim(),
        title: profession.trim(),
        subtitle: subtitle.trim() || `Experto en ${profession}`,
        themeColor: selectedColor,
        useCustomComponents: false,
        bio: generatedData.bio || `Soy ${name}, ${profession} con pasión por mi trabajo.`,
        highlights: generatedData.highlights || [profession],
        jobs: generatedData.jobs || [],
        projects: generatedData.projects || [],
        stack: generatedData.stack || [],
        social: {},
        isNew: true, // Marcador para saber que es nuevo
      };

      await new Promise(resolve => setTimeout(resolve, 500));
      
      onSave(portfolioData);
      toast.success('¡Portal creado exitosamente!');
      
    } catch (error) {
      console.error('Error creando portfolio:', error);
      toast.error('Error al crear el portal');
    } finally {
      setIsProcessing(false);
      setProcessingStep('');
    }
  };

  const isValid = name.trim() && profession.trim();

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/90" onClick={onCancel} />
      
      {/* Modal */}
      <div 
        className="relative bg-[#0a0a0a] border border-white/10 rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 z-10 flex items-center justify-between p-6 border-b border-white/10 bg-[#0a0a0a]">
          <h2 
            className="text-xl font-bold text-white lowercase"
            style={{ fontFamily: 'Syncopate, sans-serif' }}
          >
            crea tu portal
          </h2>
          <button
            onClick={onCancel}
            className="w-8 h-8 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-all"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        {/* Content */}
        <div className="p-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Columna izquierda: Campos básicos */}
            <div className="space-y-6">
              <div>
                <h3 className="text-sm text-gray-400 mb-4 uppercase tracking-wider" style={{ fontFamily: 'Syncopate, sans-serif' }}>
                  Información básica
                </h3>
                
                {/* Nombre */}
                <div className="mb-4">
                  <label className="block text-xs text-gray-500 mb-2 uppercase tracking-wider">
                    Tu nombre *
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Ej: María García"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-white/30 transition-colors"
                  />
                </div>
                
                {/* Profesión */}
                <div className="mb-4">
                  <label className="block text-xs text-gray-500 mb-2 uppercase tracking-wider">
                    Tu profesión *
                  </label>
                  <input
                    type="text"
                    value={profession}
                    onChange={(e) => setProfession(e.target.value)}
                    placeholder="Ej: Diseñadora UX/UI"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-white/30 transition-colors"
                  />
                </div>
                
                {/* Subtítulo */}
                <div className="mb-4">
                  <label className="block text-xs text-gray-500 mb-2 uppercase tracking-wider">
                    Subtítulo (opcional)
                  </label>
                  <input
                    type="text"
                    value={subtitle}
                    onChange={(e) => setSubtitle(e.target.value)}
                    placeholder="Ej: Creando experiencias digitales memorables"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-white/30 transition-colors"
                  />
                </div>
                
                {/* Color */}
                <div>
                  <label className="block text-xs text-gray-500 mb-2 uppercase tracking-wider">
                    Color del tema
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {THEME_COLORS.map((color) => (
                      <button
                        key={color.value}
                        onClick={() => setSelectedColor(color.value)}
                        className={`w-10 h-10 rounded-full transition-all ${
                          selectedColor === color.value 
                            ? 'ring-2 ring-white ring-offset-2 ring-offset-[#0a0a0a] scale-110' 
                            : 'hover:scale-105'
                        }`}
                        style={{ backgroundColor: color.value }}
                        title={color.name}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Preview del nombre */}
              {name && (
                <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                  <p className="text-xs text-gray-500 mb-2 uppercase tracking-wider">Preview</p>
                  <h4 className="text-2xl text-white font-bold">{name}</h4>
                  <p className="text-lg" style={{ color: selectedColor }}>{profession || 'Tu profesión'}</p>
                  {subtitle && <p className="text-gray-400 text-sm mt-1">{subtitle}</p>}
                </div>
              )}
            </div>

            {/* Columna derecha: Embudo de archivos */}
            <div>
              <h3 className="text-sm text-gray-400 mb-4 uppercase tracking-wider" style={{ fontFamily: 'Syncopate, sans-serif' }}>
                Alimenta el embudo
              </h3>
              <p className="text-xs text-gray-500 mb-4">
                Arrastra tu CV, portfolio, certificados o cualquier documento. El brain analizará todo y creará tu portal automáticamente.
              </p>

              {/* Área de drop */}
              <div
                onClick={() => fileInputRef.current?.click()}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
                className={`border-2 border-dashed rounded-xl h-48 cursor-pointer transition-all duration-300 flex flex-col items-center justify-center
                  ${isDragging 
                    ? 'border-white bg-white/10 scale-105' 
                    : 'border-gray-600 hover:border-gray-400 bg-white/5'
                  }`}
              >
                <FunnelIcon 
                  size={80} 
                  isAnimating={isFunnelAnimating} 
                  isDragging={isDragging} 
                  color={selectedColor}
                  className="mb-3"
                />
                <p className="text-gray-400 text-sm text-center">
                  {files.length > 0 
                    ? `${files.length} archivo${files.length > 1 ? 's' : ''} listo${files.length > 1 ? 's' : ''}`
                    : 'Arrastra archivos aquí'
                  }
                </p>
                <p className="text-gray-600 text-xs mt-1">PDF, TXT, MD, imágenes</p>
                <input
                  ref={fileInputRef}
                  type="file"
                  multiple
                  accept=".pdf,.txt,.md,.jpg,.jpeg,.png,.webp"
                  onChange={handleFileSelect}
                  className="hidden"
                />
              </div>

              {/* Lista de archivos */}
              {files.length > 0 && (
                <div className="mt-4 space-y-2 max-h-40 overflow-y-auto">
                  {files.map((file, index) => (
                    <div 
                      key={index}
                      className="flex items-center justify-between bg-white/5 rounded-lg p-3 group"
                    >
                      <div className="flex items-center gap-3 overflow-hidden">
                        {getFileIcon(file.name)}
                        <div className="overflow-hidden">
                          <p className="text-white text-sm truncate">{file.name}</p>
                          <p className="text-gray-500 text-xs">{formatFileSize(file.size)}</p>
                        </div>
                      </div>
                      <button
                        onClick={() => removeFile(index)}
                        className="text-gray-600 hover:text-red-400 transition-colors opacity-0 group-hover:opacity-100"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>
                  ))}
                </div>
              )}

              {/* Info adicional */}
              <div className="mt-4 p-4 bg-white/5 rounded-xl border border-white/10">
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L9.19 8.63L2 9.24l5.46 4.73L5.82 21L12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2z"/>
                  </svg>
                  <div>
                    <p className="text-white text-sm font-medium">Tip</p>
                    <p className="text-gray-400 text-xs mt-1">
                      Sube tu CV o LinkedIn PDF para que el brain extraiga automáticamente tu experiencia, proyectos y habilidades.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="sticky bottom-0 flex items-center justify-between p-6 border-t border-white/10 bg-[#0a0a0a]">
          <button
            onClick={onCancel}
            className="px-6 py-3 text-gray-400 hover:text-white transition-colors"
          >
            Cancelar
          </button>
          
          {isProcessing ? (
            <div className="flex items-center gap-3 px-6 py-3 bg-white/10 rounded-xl">
              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              <span className="text-white text-sm">{processingStep || 'Procesando...'}</span>
            </div>
          ) : (
            <button
              onClick={handleCreate}
              disabled={!isValid}
              className={`px-8 py-3 rounded-xl font-semibold transition-all ${
                isValid
                  ? 'text-white hover:scale-105'
                  : 'bg-gray-700 text-gray-500 cursor-not-allowed'
              }`}
              style={isValid ? { 
                backgroundColor: selectedColor,
                boxShadow: `0 0 30px ${selectedColor}40`
              } : {}}
            >
              Crear Portal
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default PortfolioCreator;
