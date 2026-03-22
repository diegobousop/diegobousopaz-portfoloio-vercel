const GenericExperience = ({ data }) => {
  const themeColor = data.themeColor || '#FE4F51';
  
  return (
    <section className="w-full py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 
          className="text-3xl md:text-4xl text-white mb-10 lowercase"
          style={{ fontFamily: 'Syncopate, sans-serif', fontWeight: '700' }}
        >
          experiencia
        </h2>
        <div className="space-y-8">
          {data.jobs?.map((job, idx) => (
            <div 
              key={idx}
              className="relative pl-8 transition-colors group"
              style={{ borderLeft: `2px solid ${themeColor}4D` }}
              onMouseEnter={(e) => e.currentTarget.style.borderLeftColor = themeColor}
              onMouseLeave={(e) => e.currentTarget.style.borderLeftColor = `${themeColor}4D`}
            >
              <div 
                className="absolute -left-[9px] top-0 w-4 h-4 rounded-full border-4 border-black" 
                style={{ backgroundColor: themeColor }}
              />
              <div className="pb-8">
                <span className="text-sm font-medium" style={{ color: themeColor }}>
                  {job.period}
                </span>
                <h3 className="text-white text-xl font-semibold mt-1">
                  {job.position}
                </h3>
                <p className="text-gray-400 text-sm mt-1">
                  {job.company}
                </p>
                <p className="text-gray-300 mt-3">
                  {job.description}
                </p>
                {job.technologies && (
                  <div className="flex flex-wrap gap-2 mt-4">
                    {job.technologies.map((tech, techIdx) => (
                      <span 
                        key={techIdx}
                        className="px-3 py-1 bg-white/5 border border-white/10 rounded-md text-gray-400 text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GenericExperience;
