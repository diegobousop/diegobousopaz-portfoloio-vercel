const GenericIntroduction = ({ data }) => {
  const themeColor = data.themeColor || '#FE4F51';
  
  return (
    <section className="w-full py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 
          className="text-3xl md:text-4xl text-white mb-6 lowercase"
          style={{ fontFamily: 'Syncopate, sans-serif', fontWeight: '700' }}
        >
          sobre mí
        </h2>
        <p className="text-gray-300 text-lg leading-relaxed mb-6">
          {data.bio}
        </p>
        {data.highlights && (
          <div className="flex flex-wrap gap-3 mt-8">
            {data.highlights.map((highlight, idx) => (
              <span 
                key={idx}
                className="px-4 py-2 rounded-full text-sm"
                style={{
                  backgroundColor: `${themeColor}1A`,
                  border: `1px solid ${themeColor}4D`,
                  color: themeColor
                }}
              >
                {highlight}
              </span>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default GenericIntroduction;
