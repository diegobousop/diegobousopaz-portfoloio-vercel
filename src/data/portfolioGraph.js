// Datos reales del portfolio de Diego Bouso Paz modelados como un grafo de conocimiento
// Cada nodo tiene: name, value (tamaño), category (para colores)

const categories = [
  'Centro',      // 0 - Diego
  'Categoría',   // 1 - Categorías principales
  'Frontend',    // 2
  'Backend',     // 3
  'Herramienta', // 4
  'Proyecto',    // 5
  'Experiencia', // 6
  'Formación',   // 7
  'Aprendiendo', // 8
  'Concepto',    // 9 - Sub-skills / conceptos
];

const nodes = [
  // === CENTRO ===
  { name: 'Diego Bouso Paz', value: 8000, category: 0 },

  // === CATEGORÍAS ===
  { name: 'Frontend', value: 4000, category: 1 },
  { name: 'Backend', value: 3000, category: 1 },
  { name: 'Herramientas', value: 2000, category: 1 },
  { name: 'Proyectos', value: 3500, category: 1 },
  { name: 'Experiencia', value: 1800, category: 1 },
  { name: 'Formación', value: 1800, category: 1 },
  { name: 'Aprendiendo', value: 1200, category: 1 },

  // === FRONTEND TECHS ===
  { name: 'HTML', value: 2500, category: 2 },
  { name: 'CSS', value: 2500, category: 2 },
  { name: 'JavaScript', value: 3500, category: 2 },
  { name: 'React', value: 3000, category: 2 },
  { name: 'TailwindCSS', value: 2000, category: 2 },
  { name: 'Figma', value: 1000, category: 2 },

  // === BACKEND TECHS ===
  { name: 'Java', value: 2500, category: 3 },
  { name: 'Spring Boot', value: 2500, category: 3 },
  { name: 'PostgreSQL', value: 1500, category: 3 },
  { name: 'MySQL', value: 1200, category: 3 },
  { name: 'Thymeleaf', value: 800, category: 3 },
  { name: 'REST API', value: 1500, category: 3 },

  // === HERRAMIENTAS ===
  { name: 'GitHub', value: 1800, category: 4 },
  { name: 'GitLab', value: 1000, category: 4 },
  { name: 'Copilot', value: 800, category: 4 },
  { name: 'Postman', value: 800, category: 4 },
  { name: 'VSCode', value: 1500, category: 4 },
  { name: 'Photoshop', value: 600, category: 4 },
  { name: 'Git', value: 1800, category: 4 },

  // === PROYECTOS ===
  { name: 'Big Chef', value: 1600, category: 5 },
  { name: 'Fantasy Rift', value: 1400, category: 5 },
  { name: 'Beach & Voley', value: 1400, category: 5 },
  { name: 'Gym Tonic', value: 900, category: 5 },
  { name: 'Digital Brain', value: 800, category: 5 },
  { name: 'Ecos do Sur', value: 700, category: 5 },

  // === EXPERIENCIA ===
  { name: 'Nunegal', value: 1200, category: 6 },
  { name: 'Desarrollador Software', value: 800, category: 6 },
  { name: 'Sept 2024 - Nov 2024', value: 400, category: 6 },

  // === FORMACIÓN ===
  { name: 'Ingeniería Informática', value: 1500, category: 7 },
  { name: 'UDC', value: 1200, category: 7 },
  { name: 'Mención Software', value: 800, category: 7 },
  { name: 'A Coruña', value: 600, category: 7 },

  // === APRENDIENDO ===
  { name: 'React Native', value: 1000, category: 8 },
  { name: 'TypeScript', value: 900, category: 8 },
  { name: 'Docker', value: 700, category: 8 },

  // === CONCEPTOS / SUB-SKILLS ===
  // JavaScript sub
  { name: 'ES6+', value: 600, category: 9 },
  { name: 'Async/Await', value: 500, category: 9 },
  { name: 'DOM', value: 500, category: 9 },
  { name: 'npm', value: 500, category: 9 },
  { name: 'Fetch API', value: 400, category: 9 },

  // React sub
  { name: 'Hooks', value: 600, category: 9 },
  { name: 'Components', value: 600, category: 9 },
  { name: 'JSX', value: 500, category: 9 },
  { name: 'State', value: 500, category: 9 },
  { name: 'Props', value: 400, category: 9 },
  { name: 'React Router', value: 500, category: 9 },
  { name: 'Context API', value: 400, category: 9 },

  // CSS sub
  { name: 'Flexbox', value: 500, category: 9 },
  { name: 'Grid', value: 500, category: 9 },
  { name: 'Responsive', value: 600, category: 9 },
  { name: 'Animaciones', value: 400, category: 9 },

  // HTML sub
  { name: 'Semántica', value: 400, category: 9 },
  { name: 'Accesibilidad', value: 400, category: 9 },
  { name: 'SEO', value: 350, category: 9 },

  // Spring Boot sub
  { name: 'MVC', value: 500, category: 9 },
  { name: 'JPA', value: 500, category: 9 },
  { name: 'Security', value: 400, category: 9 },

  // Java sub
  { name: 'OOP', value: 600, category: 9 },
  { name: 'Collections', value: 400, category: 9 },
  { name: 'Streams', value: 350, category: 9 },

  // Git sub
  { name: 'Branches', value: 400, category: 9 },
  { name: 'Pull Requests', value: 400, category: 9 },
  { name: 'CI/CD', value: 350, category: 9 },

  // DB sub
  { name: 'SQL', value: 600, category: 9 },
  { name: 'Relaciones', value: 400, category: 9 },
  { name: 'Migrations', value: 300, category: 9 },

  // General
  { name: 'Galicia', value: 400, category: 7 },
  { name: 'Fullstack', value: 800, category: 9 },
  { name: 'Diseño UI/UX', value: 600, category: 9 },
  { name: 'Vite', value: 500, category: 4 },
  { name: 'Node.js', value: 600, category: 3 },
  { name: 'Express', value: 400, category: 3 },
];

// Edges: [source_name, target_name]
const edgePairs = [
  // Diego → Categorías
  ['Diego Bouso Paz', 'Frontend'],
  ['Diego Bouso Paz', 'Backend'],
  ['Diego Bouso Paz', 'Herramientas'],
  ['Diego Bouso Paz', 'Proyectos'],
  ['Diego Bouso Paz', 'Experiencia'],
  ['Diego Bouso Paz', 'Formación'],
  ['Diego Bouso Paz', 'Aprendiendo'],
  ['Diego Bouso Paz', 'Fullstack'],

  // Frontend → Techs
  ['Frontend', 'HTML'],
  ['Frontend', 'CSS'],
  ['Frontend', 'JavaScript'],
  ['Frontend', 'React'],
  ['Frontend', 'TailwindCSS'],
  ['Frontend', 'Figma'],

  // Backend → Techs
  ['Backend', 'Java'],
  ['Backend', 'Spring Boot'],
  ['Backend', 'PostgreSQL'],
  ['Backend', 'MySQL'],
  ['Backend', 'Thymeleaf'],
  ['Backend', 'REST API'],
  ['Backend', 'Node.js'],
  ['Backend', 'Express'],

  // Herramientas → Tools
  ['Herramientas', 'GitHub'],
  ['Herramientas', 'GitLab'],
  ['Herramientas', 'Copilot'],
  ['Herramientas', 'Postman'],
  ['Herramientas', 'VSCode'],
  ['Herramientas', 'Photoshop'],
  ['Herramientas', 'Git'],
  ['Herramientas', 'Vite'],

  // Proyectos → cada proyecto
  ['Proyectos', 'Big Chef'],
  ['Proyectos', 'Fantasy Rift'],
  ['Proyectos', 'Beach & Voley'],
  ['Proyectos', 'Gym Tonic'],
  ['Proyectos', 'Digital Brain'],
  ['Proyectos', 'Ecos do Sur'],

  // Experiencia →
  ['Experiencia', 'Nunegal'],
  ['Nunegal', 'Desarrollador Software'],
  ['Nunegal', 'Sept 2024 - Nov 2024'],

  // Formación →
  ['Formación', 'Ingeniería Informática'],
  ['Formación', 'UDC'],
  ['UDC', 'A Coruña'],
  ['A Coruña', 'Galicia'],
  ['Ingeniería Informática', 'Mención Software'],

  // Aprendiendo →
  ['Aprendiendo', 'React Native'],
  ['Aprendiendo', 'TypeScript'],
  ['Aprendiendo', 'Docker'],

  // === CROSS CONNECTIONS (proyectos → tecnologías usadas) ===
  // Big Chef
  ['Big Chef', 'React Native'],
  ['Big Chef', 'JavaScript'],
  ['Big Chef', 'Figma'],
  ['Big Chef', 'Diseño UI/UX'],

  // Fantasy Rift
  ['Fantasy Rift', 'Spring Boot'],
  ['Fantasy Rift', 'Java'],
  ['Fantasy Rift', 'PostgreSQL'],
  ['Fantasy Rift', 'JavaScript'],
  ['Fantasy Rift', 'HTML'],
  ['Fantasy Rift', 'CSS'],
  ['Fantasy Rift', 'Thymeleaf'],

  // Beach & Voley
  ['Beach & Voley', 'React'],
  ['Beach & Voley', 'Spring Boot'],
  ['Beach & Voley', 'Java'],
  ['Beach & Voley', 'JavaScript'],
  ['Beach & Voley', 'TailwindCSS'],
  ['Beach & Voley', 'HTML'],
  ['Beach & Voley', 'CSS'],
  ['Beach & Voley', 'PostgreSQL'],
  ['Beach & Voley', 'REST API'],

  // Gym Tonic
  ['Gym Tonic', 'Figma'],
  ['Gym Tonic', 'Diseño UI/UX'],

  // Digital Brain
  ['Digital Brain', 'React'],
  ['Digital Brain', 'JavaScript'],
  ['Digital Brain', 'TailwindCSS'],
  ['Digital Brain', 'Vite'],

  // Ecos do Sur
  ['Ecos do Sur', 'HTML'],
  ['Ecos do Sur', 'CSS'],
  ['Ecos do Sur', 'JavaScript'],

  // Nunegal → tecnologías
  ['Nunegal', 'Spring Boot'],
  ['Nunegal', 'Java'],
  ['Nunegal', 'JavaScript'],
  ['Nunegal', 'Thymeleaf'],
  ['Nunegal', 'PostgreSQL'],

  // === SUB-SKILLS → parent tech ===
  // JavaScript
  ['JavaScript', 'ES6+'],
  ['JavaScript', 'Async/Await'],
  ['JavaScript', 'DOM'],
  ['JavaScript', 'npm'],
  ['JavaScript', 'Fetch API'],

  // React
  ['React', 'Hooks'],
  ['React', 'Components'],
  ['React', 'JSX'],
  ['React', 'State'],
  ['React', 'Props'],
  ['React', 'React Router'],
  ['React', 'Context API'],

  // CSS
  ['CSS', 'Flexbox'],
  ['CSS', 'Grid'],
  ['CSS', 'Responsive'],
  ['CSS', 'Animaciones'],

  // HTML
  ['HTML', 'Semántica'],
  ['HTML', 'Accesibilidad'],
  ['HTML', 'SEO'],

  // Spring Boot
  ['Spring Boot', 'MVC'],
  ['Spring Boot', 'JPA'],
  ['Spring Boot', 'Security'],
  ['Spring Boot', 'REST API'],

  // Java
  ['Java', 'OOP'],
  ['Java', 'Collections'],
  ['Java', 'Streams'],

  // Git
  ['Git', 'Branches'],
  ['Git', 'Pull Requests'],
  ['Git', 'CI/CD'],
  ['Git', 'GitHub'],
  ['Git', 'GitLab'],

  // DB
  ['PostgreSQL', 'SQL'],
  ['MySQL', 'SQL'],
  ['PostgreSQL', 'Relaciones'],
  ['MySQL', 'Relaciones'],
  ['PostgreSQL', 'Migrations'],

  // Node / Express
  ['Node.js', 'Express'],
  ['Node.js', 'npm'],
  ['Express', 'REST API'],

  // React → Vite
  ['React', 'Vite'],

  // Cross: Figma → Diseño UI/UX
  ['Figma', 'Diseño UI/UX'],

  // Fullstack connections
  ['Fullstack', 'Frontend'],
  ['Fullstack', 'Backend'],

  // TypeScript → JavaScript
  ['TypeScript', 'JavaScript'],
  ['TypeScript', 'React'],

  // Responsive → TailwindCSS
  ['Responsive', 'TailwindCSS'],

  // Copilot → VSCode
  ['Copilot', 'VSCode'],
  ['Postman', 'REST API'],
];

// Construir los edges con índices
const nodeNameToIndex = {};
nodes.forEach((node, idx) => {
  nodeNameToIndex[node.name] = idx;
});

const edges = edgePairs
  .filter(([s, t]) => nodeNameToIndex[s] !== undefined && nodeNameToIndex[t] !== undefined)
  .map(([s, t]) => ({
    source: nodeNameToIndex[s],
    target: nodeNameToIndex[t],
  }));

export { nodes, edges, categories };
