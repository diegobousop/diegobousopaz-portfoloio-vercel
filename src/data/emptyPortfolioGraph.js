// Genera datos de grafo vacíos para un nuevo portfolio
export const generateEmptyPortfolioGraph = () => {
  // Categorías base para un nuevo portfolio
  const categories = [
    { name: 'Principal', symbol: 'circle', itemStyle: { color: '#ffffff' } },
    { name: 'Habilidades', symbol: 'circle', itemStyle: { color: '#60a5fa' } },
    { name: 'Proyectos', symbol: 'circle', itemStyle: { color: '#34d399' } },
    { name: 'Experiencia', symbol: 'circle', itemStyle: { color: '#fbbf24' } },
  ];

  // Nodo central
  const nodes = [
    {
      id: 'central',
      name: 'Tu Portal',
      category: 0,
      symbolSize: 50,
      value: 100,
      x: 400,
      y: 300,
      fixed: false
    }
  ];

  // Sin conexiones iniciales
  const edges = [];

  return { nodes, edges, categories };
};

export const nodes = [];
export const edges = [];
export const categories = [
  { name: 'Principal', symbol: 'circle', itemStyle: { color: '#ffffff' } },
  { name: 'Habilidades', symbol: 'circle', itemStyle: { color: '#60a5fa' } },
  { name: 'Proyectos', symbol: 'circle', itemStyle: { color: '#34d399' } },
  { name: 'Experiencia', symbol: 'circle', itemStyle: { color: '#fbbf24' } },
];
