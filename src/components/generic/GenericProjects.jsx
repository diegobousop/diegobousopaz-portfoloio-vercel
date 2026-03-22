const GenericProjects = ({ data }) => {
  const themeColor = data.themeColor || '#FE4F51';
  
  return (
    <section className="w-full py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 
          className="text-3xl md:text-4xl text-white mb-10 lowercase"
          style={{ fontFamily: 'Syncopate, sans-serif', fontWeight: '700' }}
        >
          proyectos
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {data.projects?.map((project, idx) => (
            <div 
              key={idx}
              className="group relative bg-white/5 border border-white/10 rounded-2xl overflow-hidden transition-all"
              style={{ '--hover-border': `${themeColor}80` }}
              onMouseEnter={(e) => e.currentTarget.style.borderColor = `${themeColor}80`}
              onMouseLeave={(e) => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'}
            >
              {/* Project image placeholder */}
              <div 
                className="h-48 flex items-center justify-center"
                style={{ background: `linear-gradient(to bottom right, ${themeColor}33, #8B5CF633)` }}
              >
                <span className="text-6xl opacity-50">{project.emoji || '🚀'}</span>
              </div>
              
              <div className="p-6">
                <h3 
                  className="text-white text-xl font-semibold transition-colors"
                  style={{ '--hover-color': themeColor }}
                >
                  <span className="group-hover:text-inherit" style={{ color: 'inherit' }}>
                    {project.name}
                  </span>
                </h3>
                <p className="text-gray-400 text-sm mt-2 line-clamp-3">
                  {project.description}
                </p>
                
                {project.technologies && (
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.technologies.slice(0, 4).map((tech, techIdx) => (
                      <span 
                        key={techIdx}
                        className="px-2 py-1 rounded text-xs"
                        style={{ 
                          backgroundColor: `${themeColor}1A`,
                          color: themeColor 
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
                
                {project.link && (
                  <a 
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-4 text-sm hover:underline"
                    style={{ color: themeColor }}
                  >
                    Ver proyecto
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GenericProjects;
