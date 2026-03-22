// Datos mock de portfolios para demostrar la navegación entre usuarios
import * as diegoGraph from './portfolioGraph';
import * as anaGraph from './anaGraph';
import * as carlosGraph from './carlosGraph';

export const mockPortfoliosData = {
  'diego-bouso': {
    id: 'diego-bouso',
    name: 'Diego Bouso Paz',
    title: 'Ingeniero de Software',
    subtitle: 'Diseñando nuevas tecnologías para el futuro',
    priority: 1,
    isCurrent: true,
    useCustomComponents: true, // Usar los componentes originales
    graphData: diegoGraph,
    themeColor: '#FE4F51' // Coral
  },
  
  'ana-martinez': {
    id: 'ana-martinez',
    name: 'Ana Martínez',
    title: 'Diseñadora UX/UI',
    subtitle: 'Creando experiencias digitales memorables',
    priority: 99,
    isCurrent: false,
    useCustomComponents: false,
    graphData: anaGraph,
    themeColor: '#8B5CF6', // Violeta
    
    bio: 'Soy una diseñadora UX/UI apasionada por crear interfaces intuitivas y atractivas. Con más de 5 años de experiencia, he trabajado con startups y grandes empresas para transformar ideas complejas en productos digitales que los usuarios aman.',
    
    highlights: ['Design Systems', 'User Research', 'Prototyping', 'Figma Expert', 'Accessibility'],
    
    jobs: [
      {
        period: '2023 - Presente',
        position: 'Lead UX Designer',
        company: 'Innovatech Solutions',
        description: 'Liderando el equipo de diseño en la creación de productos digitales para clientes Fortune 500. Implementé un sistema de diseño que redujo el tiempo de desarrollo en un 40%.',
        technologies: ['Figma', 'Framer', 'Principle', 'Notion']
      },
      {
        period: '2021 - 2023',
        position: 'Senior UI Designer',
        company: 'DigitalCraft Agency',
        description: 'Diseñé interfaces para más de 20 proyectos de e-commerce y aplicaciones móviles, aumentando las conversiones en un promedio del 25%.',
        technologies: ['Sketch', 'Adobe XD', 'InVision', 'Zeplin']
      },
      {
        period: '2019 - 2021',
        position: 'UX Designer',
        company: 'StartupHub',
        description: 'Creé flujos de usuario y prototipos interactivos para 3 startups en etapa seed, ayudándolas a conseguir financiación.',
        technologies: ['Figma', 'Miro', 'Hotjar', 'Google Analytics']
      }
    ],
    
    projects: [
      {
        name: 'EcoTrack App',
        description: 'Aplicación móvil para rastrear la huella de carbono personal con gamificación integrada.',
        emoji: '🌱',
        technologies: ['Figma', 'Principle', 'User Research'],
        link: '#'
      },
      {
        name: 'Bankly Redesign',
        description: 'Rediseño completo de la app bancaria con enfoque en accesibilidad y simplicidad.',
        emoji: '💳',
        technologies: ['Sketch', 'Protopie', 'A/B Testing'],
        link: '#'
      },
      {
        name: 'FoodieConnect',
        description: 'Plataforma social para amantes de la gastronomía con sistema de recomendaciones.',
        emoji: '🍕',
        technologies: ['Figma', 'Framer', 'Design System'],
        link: '#'
      },
      {
        name: 'MindfulSpace',
        description: 'App de meditación y bienestar con experiencias inmersivas y sonidos relajantes.',
        emoji: '🧘',
        technologies: ['Adobe XD', 'After Effects', 'Sound Design'],
        link: '#'
      }
    ],
    
    stack: [
      {
        name: 'Diseño',
        items: [
          { name: 'Figma' },
          { name: 'Sketch' },
          { name: 'Adobe XD' },
          { name: 'Framer' }
        ]
      },
      {
        name: 'Prototipado',
        items: [
          { name: 'Principle' },
          { name: 'ProtoPie' },
          { name: 'InVision' },
          { name: 'Marvel' }
        ]
      },
      {
        name: 'Research',
        items: [
          { name: 'Hotjar' },
          { name: 'Maze' },
          { name: 'UserTesting' },
          { name: 'Optimal Workshop' }
        ]
      }
    ],
    
    social: {
      github: 'https://github.com',
      linkedin: 'https://linkedin.com',
      email: 'ana@example.com'
    }
  },
  
  'carlos-rodriguez': {
    id: 'carlos-rodriguez',
    name: 'Carlos Rodríguez',
    title: 'Data Scientist',
    subtitle: 'Transformando datos en decisiones inteligentes',
    priority: 100,
    isCurrent: false,
    useCustomComponents: false,
    graphData: carlosGraph,
    themeColor: '#10B981', // Esmeralda
    
    bio: 'Data Scientist con experiencia en machine learning, análisis predictivo y visualización de datos. Me especializo en convertir grandes volúmenes de información en insights accionables que impulsan el crecimiento empresarial.',
    
    highlights: ['Machine Learning', 'Python', 'Deep Learning', 'NLP', 'Big Data'],
    
    jobs: [
      {
        period: '2022 - Presente',
        position: 'Senior Data Scientist',
        company: 'DataDriven Inc.',
        description: 'Desarrollo de modelos de ML para predicción de churn que ahorraron $2M anuales. Lideré la implementación de pipelines de datos en tiempo real.',
        technologies: ['Python', 'TensorFlow', 'Spark', 'AWS']
      },
      {
        period: '2020 - 2022',
        position: 'Data Scientist',
        company: 'AI Solutions Corp',
        description: 'Construí sistemas de recomendación para e-commerce que aumentaron las ventas cruzadas en 35%.',
        technologies: ['Python', 'PyTorch', 'SQL', 'Docker']
      },
      {
        period: '2018 - 2020',
        position: 'Junior Data Analyst',
        company: 'Analytics Pro',
        description: 'Análisis de datos y creación de dashboards para reportes ejecutivos. Automaticé procesos que ahorraron 20 horas semanales.',
        technologies: ['Python', 'R', 'Tableau', 'Excel']
      }
    ],
    
    projects: [
      {
        name: 'PredictStock',
        description: 'Modelo de predicción de precios de acciones usando redes neuronales LSTM.',
        emoji: '📈',
        technologies: ['Python', 'TensorFlow', 'LSTM', 'APIs'],
        link: '#'
      },
      {
        name: 'SentimentAnalyzer',
        description: 'Herramienta de análisis de sentimiento en redes sociales en tiempo real.',
        emoji: '🧠',
        technologies: ['NLP', 'BERT', 'FastAPI', 'React'],
        link: '#'
      },
      {
        name: 'FraudDetector',
        description: 'Sistema de detección de fraude en transacciones financieras con 99.2% de precisión.',
        emoji: '🔒',
        technologies: ['XGBoost', 'Feature Engineering', 'MLOps'],
        link: '#'
      },
      {
        name: 'ImageClassifier',
        description: 'Clasificador de imágenes médicas para detección temprana de enfermedades.',
        emoji: '🏥',
        technologies: ['CNN', 'PyTorch', 'Medical Imaging'],
        link: '#'
      }
    ],
    
    stack: [
      {
        name: 'Lenguajes',
        items: [
          { name: 'Python' },
          { name: 'R' },
          { name: 'SQL' },
          { name: 'Julia' }
        ]
      },
      {
        name: 'ML/DL',
        items: [
          { name: 'TensorFlow' },
          { name: 'PyTorch' },
          { name: 'Scikit-learn' },
          { name: 'Keras' }
        ]
      },
      {
        name: 'Big Data',
        items: [
          { name: 'Spark' },
          { name: 'Hadoop' },
          { name: 'Airflow' },
          { name: 'Kafka' }
        ]
      },
      {
        name: 'Cloud',
        items: [
          { name: 'AWS' },
          { name: 'GCP' },
          { name: 'Azure ML' },
          { name: 'Databricks' }
        ]
      }
    ],
    
    social: {
      github: 'https://github.com',
      linkedin: 'https://linkedin.com',
      email: 'carlos@example.com'
    }
  }
};

// Helper para obtener la lista de portfolios ordenados
export const getSortedPortfolios = () => {
  return Object.values(mockPortfoliosData).sort((a, b) => a.priority - b.priority);
};
