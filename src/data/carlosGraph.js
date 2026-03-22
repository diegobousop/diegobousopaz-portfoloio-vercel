// Datos del portfolio de Carlos Rodríguez - Data Scientist

export const categories = [
  'Centro',      // 0 - Carlos
  'Categoría',   // 1 - Categorías principales
  'ML/DL',       // 2
  'Datos',       // 3
  'Herramienta', // 4
  'Proyecto',    // 5
  'Experiencia', // 6
  'Formación',   // 7
  'Aprendiendo', // 8
  'Concepto',    // 9
];

export const nodes = [
  // === CENTRO ===
  { name: 'Carlos Rodríguez', value: 8000, category: 0 },

  // === CATEGORÍAS ===
  { name: 'Machine Learning', value: 4000, category: 1 },
  { name: 'Data Engineering', value: 3000, category: 1 },
  { name: 'Herramientas', value: 2500, category: 1 },
  { name: 'Proyectos', value: 3500, category: 1 },
  { name: 'Experiencia', value: 2000, category: 1 },
  { name: 'Formación', value: 1800, category: 1 },
  { name: 'Aprendiendo', value: 1200, category: 1 },

  // === ML/DL ===
  { name: 'Deep Learning', value: 3000, category: 2 },
  { name: 'NLP', value: 2500, category: 2 },
  { name: 'Computer Vision', value: 2000, category: 2 },
  { name: 'Supervised Learning', value: 1800, category: 2 },
  { name: 'Unsupervised Learning', value: 1500, category: 2 },
  { name: 'Reinforcement Learning', value: 1200, category: 2 },

  // === DATOS ===
  { name: 'Python', value: 3500, category: 3 },
  { name: 'SQL', value: 2500, category: 3 },
  { name: 'Spark', value: 2000, category: 3 },
  { name: 'Pandas', value: 2200, category: 3 },
  { name: 'NumPy', value: 2000, category: 3 },
  { name: 'ETL', value: 1500, category: 3 },

  // === HERRAMIENTAS ===
  { name: 'TensorFlow', value: 2500, category: 4 },
  { name: 'PyTorch', value: 2500, category: 4 },
  { name: 'Scikit-learn', value: 2000, category: 4 },
  { name: 'Jupyter', value: 1800, category: 4 },
  { name: 'Docker', value: 1500, category: 4 },
  { name: 'AWS', value: 1800, category: 4 },
  { name: 'MLflow', value: 1000, category: 4 },
  { name: 'Airflow', value: 1200, category: 4 },

  // === PROYECTOS ===
  { name: 'PredictStock', value: 1600, category: 5 },
  { name: 'SentimentAnalyzer', value: 1400, category: 5 },
  { name: 'FraudDetector', value: 1200, category: 5 },
  { name: 'ImageClassifier', value: 1000, category: 5 },

  // === EXPERIENCIA ===
  { name: 'DataDriven Inc.', value: 1500, category: 6 },
  { name: 'Senior Data Scientist', value: 1200, category: 6 },
  { name: 'AI Solutions Corp', value: 1000, category: 6 },
  { name: 'Data Scientist', value: 800, category: 6 },

  // === FORMACIÓN ===
  { name: 'MSc Data Science', value: 1500, category: 7 },
  { name: 'Ing. Matemáticas', value: 1200, category: 7 },
  { name: 'Deep Learning Specialization', value: 1000, category: 7 },

  // === APRENDIENDO ===
  { name: 'LLMs', value: 1200, category: 8 },
  { name: 'MLOps', value: 1000, category: 8 },
  { name: 'Rust', value: 700, category: 8 },

  // === CONCEPTOS ===
  { name: 'Neural Networks', value: 800, category: 9 },
  { name: 'CNN', value: 700, category: 9 },
  { name: 'RNN/LSTM', value: 700, category: 9 },
  { name: 'Transformers', value: 800, category: 9 },
  { name: 'Feature Engineering', value: 600, category: 9 },
  { name: 'Cross Validation', value: 500, category: 9 },
  { name: 'Gradient Descent', value: 500, category: 9 },
  { name: 'Regularization', value: 400, category: 9 },
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

  // ML/DL a skills
  { source: 1, target: 8 },
  { source: 1, target: 9 },
  { source: 1, target: 10 },
  { source: 1, target: 11 },
  { source: 1, target: 12 },
  { source: 1, target: 13 },

  // Data Engineering
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

  // Conceptos ML
  { source: 8, target: 42 },
  { source: 8, target: 43 },
  { source: 8, target: 44 },
  { source: 8, target: 45 },
  { source: 11, target: 46 },
  { source: 11, target: 47 },
  { source: 8, target: 48 },
  { source: 8, target: 49 },

  // Conexiones entre herramientas relacionadas
  { source: 20, target: 21 },
  { source: 14, target: 17 },
  { source: 14, target: 18 },
  { source: 22, target: 20 },
  { source: 22, target: 21 },

  // Proyectos a conceptos
  { source: 28, target: 44 },
  { source: 29, target: 9 },
  { source: 29, target: 45 },
  { source: 30, target: 46 },
  { source: 31, target: 10 },
  { source: 31, target: 43 },
];
