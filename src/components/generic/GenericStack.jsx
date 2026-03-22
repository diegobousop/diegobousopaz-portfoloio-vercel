const GenericStack = ({ data }) => {
  const categories = data.stack || [];
  const themeColor = data.themeColor || '#FE4F51';
  
  return (
    <section className="w-full py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 
          className="text-3xl md:text-4xl text-white mb-10 lowercase"
          style={{ fontFamily: 'Syncopate, sans-serif', fontWeight: '700' }}
        >
          tecnologías
        </h2>
        <div className="space-y-8">
          {categories.map((category, idx) => (
            <div key={idx}>
              <h3 
                className="text-sm font-semibold uppercase tracking-wider mb-4"
                style={{ color: themeColor }}
              >
                {category.name}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.items?.map((tech, techIdx) => (
                  <div 
                    key={techIdx}
                    className="flex items-center gap-3 px-4 py-3 bg-white/5 border border-white/10 rounded-xl transition-all"
                    onMouseEnter={(e) => e.currentTarget.style.borderColor = `${themeColor}80`}
                    onMouseLeave={(e) => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'}
                  >
                    {tech.icon ? (
                      <img src={tech.icon} alt={tech.name} className="w-6 h-6" />
                    ) : (
                      <div 
                        className="w-6 h-6 rounded flex items-center justify-center text-xs font-bold"
                        style={{ 
                          backgroundColor: `${themeColor}33`,
                          color: themeColor 
                        }}
                      >
                        {tech.name.charAt(0)}
                      </div>
                    )}
                    <span className="text-white text-sm">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GenericStack;
