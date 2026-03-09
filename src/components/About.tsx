import { motion } from 'framer-motion';
import { Target, Lightbulb, TrendingUp, Handshake, Users, GraduationCap } from 'lucide-react';

const About = () => {
  const highlights = [
    { icon: <TrendingUp className="text-neonPurple" />, title: "Entrepreneurship", text: "Fostering awareness about startup ecosystems." },
    { icon: <Lightbulb className="text-neonPink" />, title: "Govt Schemes", text: "Insights into Startup India and funding opportunities." },
    { icon: <Target className="text-neonPurple" />, title: "Business Pitching", text: "Mastering the art of high-stakes pitching." },
    { icon: <Handshake className="text-neonPink" />, title: "CSR Awareness", text: "Connecting business with social responsibility." },
    { icon: <GraduationCap className="text-neonPurple" />, title: "Skill Dev", text: "Enhancing communication and leadership." },
    { icon: <Users className="text-neonPink" />, title: "Networking", text: "Connect with mentors and industry experts." },
  ];

  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight italic">
                About <span className="neon-text">Eminence</span>
              </h2>
              <div className="h-1.5 w-24 bg-neon-gradient rounded-full" />
            </div>

            <p className="text-lg text-gray-600 leading-relaxed font-inter">
              Eminence 2.0 is a flagship entrepreneurship festival hosted by Sri Sairam Institutions. We bridge the gap between academic learning and real-world business execution. 
              Our mission is to empower students with knowledge about <strong>Startup India schemes</strong>, <strong>government funding</strong>, and the 
              strategic intricacies of <strong>business pitching</strong>.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 pt-4">
              {highlights.map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ x: 10 }}
                  className="flex items-start gap-4 p-4 rounded-2xl bg-lightGray/50 border border-lightGray/50"
                >
                  <div className="mt-1">{item.icon}</div>
                  <div>
                    <h4 className="font-bold text-darkAccent">{item.title}</h4>
                    <p className="text-sm text-gray-500">{item.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Side Illustration/Graphic */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-square rounded-[3rem] bg-neon-gradient p-1 rotate-3">
              <div className="w-full h-full bg-white rounded-[2.8rem] flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-grid opacity-20" />
                <motion.div
                  animate={{ 
                    y: [0, -20, 0],
                    rotate: [0, 5, 0]
                  }}
                  transition={{ 
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="z-10"
                >
                  <img 
                    src="https://img.freepik.com/free-vector/visionary-technology-concept-illustration_114360-10148.jpg" 
                    alt="Entrepreneurship Illustration" 
                    className="w-full max-w-sm rounded-2xl mix-blend-multiply"
                  />
                </motion.div>
              </div>
            </div>
            {/* Floating Badges */}
            <motion.div 
              animate={{ y: [0, 15, 0] }} 
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -top-6 -right-6 glass-card p-6 shadow-xl"
            >
              <span className="text-neonPurple font-orbitron font-bold text-3xl">PITCH</span>
              <p className="text-[10px] uppercase font-bold text-gray-400">Innovation</p>
            </motion.div>
            <motion.div 
              animate={{ y: [0, -15, 0] }} 
              transition={{ duration: 4, repeat: Infinity, delay: 1 }}
              className="absolute -bottom-6 -left-6 glass-card p-6 shadow-xl"
            >
              <span className="text-neonPink font-orbitron font-bold text-3xl">GROW</span>
              <p className="text-[10px] uppercase font-bold text-gray-400">Scalability</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
