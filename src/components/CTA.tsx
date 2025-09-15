import { useModal } from '../context/ModalContext';

const CTA = () => {
  const { openModal } = useModal();

  return (
    <section className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden py-20 text-center">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-purple-400/15 to-green-400/15 rounded-full blur-3xl animate-pulse"></div>
      </div>

      {/* Subtle Dot Pattern Overlay */}
      <div className="absolute inset-0" style={{
        backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.05) 1px, transparent 0)',
        backgroundSize: '20px 20px'
      }}></div>

      <div className="relative z-10 max-w-4xl mx-auto px-4">
        <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-12 shadow-2xl">
          {/* Date Badge */}
          <div className="inline-block bg-gradient-to-r from-green-500/20 to-purple-600/20 border border-green-400/30 rounded-full px-6 py-2 mb-6">
          <span className="text-green-300 font-semibold text-lg">
        📅 November 10th - 21st • 5 Days a Week<br /> Graduation dinner and public speaking competition on 21st November at a 5 star Hotel
      </span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-white via-purple-200 to-green-400 bg-clip-text text-transparent">
              Invest in Your Teen's Future Today
            </span>
          </h2>
          <p className="text-xl mb-8 leading-relaxed text-gray-300">
            Every great leader started with the courage to speak up. Give your teenager the foundation for a lifetime of influence and impact.
          </p>
          <button 
            onClick={openModal}
            className="bg-gradient-to-r from-green-500 to-purple-600 hover:from-green-600 hover:to-purple-700 text-white px-8 py-4 rounded-2xl text-lg font-bold shadow-2xl shadow-purple-500/25 hover:shadow-purple-500/40 transform hover:-translate-y-1 transition-all duration-300 border border-white/20"
          >
            Reserve Their Spot Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTA;