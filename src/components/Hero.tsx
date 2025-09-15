import { Mic, Target, Rocket, Star, Users, Award } from 'lucide-react';
import { useModal } from '../context/ModalContext';

const Hero = () => {
  const { openModal } = useModal();


  const features = [
    { icon: Mic, title: 'Public Speaking', desc: 'Master the art of confident communication' },
    { icon: Target, title: 'Goal Setting', desc: 'Define and achieve your career objectives' },
    { icon: Rocket, title: 'Leadership', desc: 'Develop executive presence early' },
  ];

  

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-green-400/20 to-blue-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-yellow-400/10 to-red-400/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Subtle Dot Pattern Overlay */}
      <div className="absolute inset-0" style={{
        backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.05) 1px, transparent 0)',
        backgroundSize: '20px 20px'
      }}></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-12">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600/20 to-green-600/20 backdrop-blur-sm border border-white/10 rounded-full px-6 py-2 mb-6">
            <Star className="w-5 h-5 text-yellow-400" />
            <span className="text-white text-sm font-medium">Transform Your Teen's Future</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-6xl font-black mb-6">
            <span className="bg-gradient-to-r from-white via-purple-200 to-green-400 bg-clip-text text-transparent">
              TEENS PUBLIC SPEAKING AND
            </span>
            <br />
            <span className="bg-gradient-to-r from-green-400 via-purple-200 to-white bg-clip-text text-transparent">
            CAREER MENTORSHIP BOOTCAMP
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
          The Power of Voice, The Path to Purpose – A 2-Week Journey to Launch Your Teen into Leadership and Greatness.
          </p>

          
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left: Mentor Profile */}
          <div className="space-y-8">
            <div className="relative">
              {/* Profile Card */}
              <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-2xl">
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  <div className="relative">
                    <div className=" rounded-2xl overflow-hidden border-4 border-purple-500 shadow-xl">
                      <img
                        src="https://ik.imagekit.io/candy28/gg.jpeg?updatedAt=1757866544670"
                        alt="Gamaliel Gerishom"
                        className="w-70 h-150 object-cover"
                      />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-green-500 to-purple-500 rounded-full flex items-center justify-center">
                      <Award className="w-4 h-4 text-white" />
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-3xl font-bold text-white mb-2">Gamaliel Gerishom</h3>
                    <p className="text-purple-200 mb-4 text-lg">Expert Mentor & Speaker</p>
                    
                    {/* Company Logos */}
                    <div className="flex flex-col gap-4 mb-4">
                    <img
                        src="https://ik.imagekit.io/candy28/Screenshot%202025-09-14%20at%2020.48.20.png?updatedAt=1757872360516"
                        alt="Gamaliel's Company Logo"
                        className="h-25 w-25 rounded-lg object-contain opacity-80"
                      />
                      <img
                        src="https://ik.imagekit.io/candy28/Screenshot%202025-07-16%20at%2014.55.02.png?updatedAt=1757872508173"
                        alt="Gamaliel's Company Logo"
                        className="h-25 w-25 rounded-lg object-contain opacity-80"
                      />
                      
                    </div>
                  </div>
                </div>

                {/* Quote */}
                <blockquote className="mt-6 p-6 bg-gradient-to-r from-purple-600/20 to-green-600/20 rounded-2xl border-l-4 border-green-400">
                  <p className="text-white italic text-lg leading-relaxed mb-3">
                    "Great communicators become great leaders because they move hearts, shape minds, and inspire action."
                  </p>
                  <cite className="text-green-300 font-semibold">~ Gamaliel Gerishom</cite>
                </blockquote>
              </div>
            </div>
          </div>

          {/* Right: Features & CTA */}
          <div className="space-y-8">
            <div className="text-white space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                Equip Your Teen with Excellent communication and 
                <span className="block bg-gradient-to-r from-green-400 to-purple-400 bg-clip-text text-transparent">
                launch him/her into an inspirational leadership journey
                </span>
              </h2>
              
              <p className="text-lg text-gray-300 leading-relaxed">
                This intensive 2-week bootcamp transforms teenagers into confident speakers and future leaders. 
                Through hands-on training and mentorship, we build the foundation for lifelong success.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid gap-4">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 group">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-green-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                      <p className="text-gray-400">{feature.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-r from-purple-600/20 to-green-600/20 backdrop-blur-xl border border-white/20 rounded-3xl p-8">
              <div className="text-center space-y-4">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <Users className="w-5 h-5 text-green-400" />
                  <span className="text-green-400 font-semibold">Limited Spots Available</span>
                </div>
                
                <button
                  onClick={openModal}
                  className="w-full bg-gradient-to-r from-green-500 to-purple-600 hover:from-green-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-2xl text-lg shadow-2xl shadow-purple-500/25 hover:shadow-purple-500/40 transform hover:-translate-y-1 transition-all duration-300 border border-white/20"
                >
                  Enroll Your Teen Today
                </button>
                
                <p className="text-gray-400 text-sm">
                  🎯 2-week program • 🚀 Expert mentorship • ⭐ Proven results
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-6 py-3">
            <div className="flex -space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full border-2 border-white"></div>
              <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-blue-500 rounded-full border-2 border-white"></div>
              <div className="w-8 h-8 bg-gradient-to-r from-yellow-500 to-red-500 rounded-full border-2 border-white"></div>
            </div>
            <span className="text-white text-sm">Join 500+ successful teen speakers</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;