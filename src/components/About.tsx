import { Lightbulb, Users, BookOpen, Trophy, CheckCircle } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Lightbulb,
      title: "Vision",
      desc: "Empowering teenagers to unlock their voice, define their purpose, and inspire impact in their communities and beyond.",
    },
    {
      icon: Users,
      title: "Community",
      desc: "Your teen joins a supportive network of peers, mentors, and role models dedicated to growth and leadership.",
    },
    {
      icon: BookOpen,
      title: "Learning",
      desc: "We combine practical communication drills, leadership exercises, and mentorship for real-world readiness.",
    },
    {
      icon: Trophy,
      title: "Results",
      desc: "From public speaking competitions to graduation dinners at 5-star venues, the journey ends with confidence and recognition.",
    },
  ];

  const programBenefits = [
    "Learn to speak boldly, clearly, and persuasively before audiences.",
    "Boost self-esteem and confidence in expressing ideas.",
    "Develop clarity in communication to influence and inspire.",
    "Craft a personal leadership brand and discover their authentic voice.",
    "Build critical thinking and problem-solving skills through speech preparation.",
    "Overcome fear of public speaking and turn nervousness into boldness.",
    "Learn career clarity and mentorship insights from top-notch career coaches.",
    "Explore world-class careers through company visits and practical exposure.",
    "Strengthen networking, teamwork, and presentation skills for leadership roles.",
    "Gain certificates, recognition, and real-world confidence that prepares them for life.",
  ];

  return (
    <section
      id="about"
      className="relative bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20 px-6 overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-20 w-72 h-72 bg-gradient-to-r from-green-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-20 w-96 h-96 bg-gradient-to-r from-yellow-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Dot overlay */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.05) 1px, transparent 0)",
          backgroundSize: "20px 20px",
        }}
      ></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
            <span className="bg-gradient-to-r from-green-400 via-purple-200 to-white bg-clip-text text-transparent">
              About the Bootcamp
            </span>
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
            More than just a program — it’s a transformation. Our mentorship
            bootcamp is designed to ignite potential, instill confidence, and
            prepare the next generation of leaders.
          </p>
        </div>

        {/* Highlights */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 text-center hover:bg-white/10 transition-all duration-300 group shadow-lg"
            >
              <div className="w-14 h-14 mx-auto mb-6 bg-gradient-to-r from-purple-500 to-green-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <item.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                {item.title}
              </h3>
              <p className="text-gray-400">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Flagship Initiative */}
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-10 mb-16">
          <h3 className="text-2xl font-bold text-white mb-6">
            Our Flagship Initiative
          </h3>
          <p className="text-gray-300 leading-relaxed mb-6">
            Among our flagship initiatives is the{" "}
            <span className="text-green-300 font-semibold">
              Public Speaking and Career Mentorship Program
            </span>
            , a transformative platform designed to prepare young people for
            future leadership roles. This is not just about public speaking but
            an opportunity to inspire young people to pursue their careers with
            clarity and purpose. They will be trained by top-notch career
            mentors who will guide them in aligning passion with profession
            while equipping them with real-world insights to excel.
          </p>

          <h4 className="text-xl font-bold text-purple-300 mb-4">
            What young people will gain:
          </h4>
          <ul className="space-y-3">
            {programBenefits.map((benefit, i) => (
              <li key={i} className="flex items-start gap-3 text-gray-300">
                <CheckCircle className="w-5 h-5 text-green-400 shrink-0 mt-1" />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Philosophy / Closing Statement */}
        <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
          <p>
            We recognize that in today’s world, the ability to communicate with
            confidence, clarity, and conviction is not optional—it is essential.
            Public speaking sharpens critical thinking, strengthens self-esteem,
            and positions young leaders to move people, shape ideas, and
            influence change. At the same time, career mentorship provides the
            wisdom, direction, and practical pathways necessary for building
            meaningful and impactful futures.
          </p>
          <p>
            When young people learn to express themselves powerfully and pursue
            their careers with clarity, they not only find their voice but also
            discover their place in shaping society. They develop the courage to
            stand before audiences, defend their ideas, chase their dreams, and
            inspire collective action.
          </p>
          <p>
            At{" "}
            <span className="text-green-300 font-semibold">PSC</span>, we
            believe that public speaking and career mentorship together form the
            heartbeat of leadership. Through guided mentorship, exposure to top
            career coaches, and practical speaking experiences, we prepare young
            people to rise with confidence, communicate with authority, and step
            boldly into their God-given destinies.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
