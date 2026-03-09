import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Rocket, Trophy, Target } from 'lucide-react';

const RegisterCTA = () => {
  const ctaLinks = [
    { title: "Scale & Strike", link: "/register/scale-strike", icon: <Rocket size={20} />, color: "purple" },
    { title: "Convince Us", link: "/register/convince-us", icon: <Trophy size={20} />, color: "pink" },
    { title: "Conquer the Corporate", link: "/register/conquer-corporate", icon: <Target size={20} />, color: "purple" }
  ];

  return (
    <section id="register-cta" className="py-24 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 bg-darkAccent -z-10" />
      <div className="absolute top-0 left-0 w-full h-full bg-grid opacity-10 -z-10" />
      <div className="absolute -top-48 -left-48 w-96 h-96 bg-neonPurple/20 rounded-full blur-[120px] -z-10" />
      <div className="absolute -bottom-48 -right-48 w-96 h-96 bg-neonPink/20 rounded-full blur-[120px] -z-10" />

      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto space-y-10"
        >
          <div className="space-y-4">
            <h2 className="text-4xl md:text-6xl font-black text-white font-orbitron uppercase tracking-tighter italic">
              Ready to pitch your <span className="neon-text">Idea?</span>
            </h2>
            <p className="text-lg text-gray-400 font-inter max-w-xl mx-auto">
              Join Eminence 2.0 and showcase your entrepreneurial spirit. Limited slots available for each event!
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-6">
            {ctaLinks.map((cta, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="relative"
              >
                <Link
                  to={cta.link}
                  className={`flex flex-col items-center gap-4 p-8 rounded-3xl border-2 transition-all duration-300 ${
                    cta.color === "purple" 
                      ? "border-neonPurple/30 bg-neonPurple/5 text-white hover:bg-neonPurple hover:border-neonPurple" 
                      : "border-neonPink/30 bg-neonPink/5 text-white hover:bg-neonPink hover:border-neonPink"
                  }`}
                >
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                    {cta.icon}
                  </div>
                  <span className="font-bold font-orbitron text-xs uppercase tracking-widest leading-none">{cta.title}</span>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default RegisterCTA;
