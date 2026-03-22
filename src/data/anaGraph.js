// Datos del portfolio de Ana Martínez - Diseñadora UX/UI

export const categories = [
  'Centro',      // 0 - Ana
  'Categoría',   // 1 - Categorías principales
  'Diseño',      // 2
  'Research',    // 3
  'Herramienta', // 4
  'Proyecto',    // 5
  'Experiencia', // 6
  'Formación',   // 7
  'Aprendiendo', // 8
  'Concepto',    // 9
];

export const nodes = [
  // === CENTRO ===
  { name: 'Ana Martínez', value: 8000, category: 0 },

  // === CATEGORÍAS ===
  { name: 'Diseño', value: 4000, category: 1 },
  { name: 'Research', value: 3000, category: 1 },
  { name: 'Herramientas', value: 2500, category: 1 },
  { name: 'Proyectos', value: 3500, category: 1 },
  { name: 'Experiencia', value: 2000, category: 1 },
  { name: 'Formación', value: 1800, category: 1 },
  { name: 'Aprendiendo', value: 1200, category: 1 },

  // === DISEÑO ===
  { name: 'UI Design', value: 3000, category: 2 },
  { name: 'UX Design', value: 3000, category: 2 },
  { name: 'Design Systems', value: 2500, category: 2 },
  { name: 'Prototyping', value: 2000, category: 2 },
  { name: 'Wireframing', value: 1800, category: 2 },
  { name: 'Visual Design', value: 1500, category: 2 },

  // === RESEARCH ===
  { name: 'User Research', value: 2500, category: 3 },
  { name: 'Usability Testing', value: 2000, category: 3 },
  { name: 'A/B Testing', value: 1500, category: 3 },
  { name: 'User Personas', value: 1200, category: 3 },
  { name: 'Journey Mapping', value: 1000, category: 3 },
  { name: 'Accessibility', value: 1800, category: 3 },

  // === HERRAMIENTAS ===
  { name: 'Figma', value: 3000, category: 4 },
  { name: 'Sketch', value: 2000, category: 4 },
  { name: 'Adobe XD', value: 1800, category: 4 },
  { name: 'Framer', value: 1500, category: 4 },
  { name: 'Principle', value: 1200, category: 4 },
  { name: 'InVision', value: 1000, category: 4 },
  { name: 'Miro', value: 1200, category: 4 },
  { name: 'Notion', value: 800, category: 4 },

  // === PROYECTOS ===
  { name: 'EcoTrack App', value: 1600, category: 5 },
  { name: 'Bankly Redesign', value: 1400, category: 5 },
  { name: 'FoodieConnect', value: 1200, category: 5 },
  { name: 'MindfulSpace', value: 1000, category: 5 },

  // === EXPERIENCIA ===
  { name: 'Innovatech Solutions', value: 1500, category: 6 },
  { name: 'Lead UX Designer', value: 1200, category: 6 },
  { name: 'DigitalCraft Agency', value: 1000, category: 6 },
  { name: 'Senior UI Designer', value: 800, category: 6 },

  // === FORMACIÓN ===
  { name: 'Diseño Gráfico', value: 1500, category: 7 },
  { name: 'UX Certification', value: 1200, category: 7 },
  { name: 'Google UX Design', value: 1000, category: 7 },

  // === APRENDIENDO ===
  { name: 'Motion Design', value: 1000, category: 8 },
  { name: '3D Design', value: 800, category: 8 },
  { name: 'AI in Design', value: 700, category: 8 },

  // === CONCEPTOS ===
  { name: 'Color Theory', value: 600, category: 9 },
  { name: 'Typography', value: 600, category: 9 },
  { name: 'Grid Systems', value: 500, category: 9 },
  { name: 'Microinteractions', value: 500, category: 9 },
  { name: 'Heuristics', value: 400, category: 9 },
  { name: 'WCAG', value: 400, category: 9 },
];

export const edges = [
  // Centro a categorías
  { source: 0, target: 1 },
  { source: 0, target: 2 },
  { source: 0, target: 3 },
  { source: 0, target: 4 },
  { source: 0, target: 5 },
  { source: 0, target: 6 },
  { source: 0, target: 7 },

  // Diseño a skills
  { source: 1, target: 8 },
  { source: 1, target: 9 },
  { source: 1, target: 10 },
  { source: 1, target: 11 },
  { source: 1, target: 12 },
  { source: 1, target: 13 },

  // Research a skills
  { source: 2, target: 14 },
  { source: 2, target: 15 },
  { source: 2, target: 16 },
  { source: 2, target: 17 },
  { source: 2, target: 18 },
  { source: 2, target: 19 },

  // Herramientas
  { source: 3, target: 20 },
  { source: 3, target: 21 },
  { source: 3, target: 22 },
  { source: 3, target: 23 },
  { source: 3, target: 24 },
  { source: 3, target: 25 },
  { source: 3, target: 26 },
  { source: 3, target: 27 },

  // Proyectos
  { source: 4, target: 28 },
  { source: 4, target: 29 },
  { source: 4, target: 30 },
  { source: 4, target: 31 },

  // Experiencia
  { source: 5, target: 32 },
  { source: 5, target: 33 },
  { source: 5, target: 34 },
  { source: 5, target: 35 },

  // Formación
  { source: 6, target: 36 },
  { source: 6, target: 37 },
  { source: 6, target: 38 },

  // Aprendiendo
  { source: 7, target: 39 },
  { source: 7, target: 40 },
  { source: 7, target: 41 },

  // Conceptos conectados a diseño
  { source: 8, target: 42 },
  { source: 8, target: 43 },
  { source: 8, target: 44 },
  { source: 11, target: 45 },
  { source: 19, target: 46 },
  { source: 19, target: 47 },

  // Conexiones entre herramientas relacionadas
  { source: 20, target: 21 },
  { source: 20, target: 22 },
  { source: 23, target: 24 },
];
