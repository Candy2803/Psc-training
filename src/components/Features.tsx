
const Features = () => {
  const features = [
    {
      title: '🎭 Build Stage Presence',
      description: 'Transform nervous energy into magnetic confidence. Learn to command attention and connect with any audience through powerful body language and vocal techniques.'
    },
    {
      title: '💼 Explore Career Paths',
      description: 'Discover exciting career opportunities through company visits and industry insights. Get a head start on your professional journey with real-world exposure.'
    },
    {
      title: '🦁 Lead with Courage',
      description: 'Develop the leadership mindset that sets you apart. Learn to influence, inspire, and lead others through authentic communication and bold decision-making.'
    },
    {
      title: '🎓 Top Career Mentorship',
      description: 'Receive personalized guidance from industry professionals who will help you navigate your path to success with proven strategies and insider knowledge.'
    }
  ];

  return (
    <section className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden py-20">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 right-20 w-64 h-64 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
        <div className="absolute bottom-10 left-20 w-80 h-80 bg-gradient-to-r from-green-400/10 to-blue-400/10 rounded-full blur-3xl animate-pulse delay-1500"></div>
      </div>

      {/* Subtle Dot Pattern Overlay */}
      <div className="absolute inset-0" style={{
        backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.03) 1px, transparent 0)',
        backgroundSize: '20px 20px'
      }}></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-3xl text-center transform hover:-translate-y-3 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20 hover:bg-white/15"
            >
              <h3 className="text-white text-xl font-bold mb-4 group-hover:bg-gradient-to-r group-hover:from-green-400 group-hover:to-purple-400 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                {feature.title}
              </h3>
              <p className="text-gray-300 group-hover:text-white text-xl leading-relaxed transition-colors duration-300">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};



// Export both components
export default Features;