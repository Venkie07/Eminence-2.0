import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative min-h-[100vh] flex items-center justify-center overflow-hidden bg-grid">
      {/* Background Glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neonPurple/20 rounded-full blur-[120px] -z-10 animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neonPink/20 rounded-full blur-[120px] -z-10 animate-pulse" style={{ animationDelay: '1s' }} />

      <div className="container mx-auto px-6 text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <p className="font-orbitron text-neonPurple font-bold tracking-[0.5em] text-sm md:text-base uppercase mb-2">
            Sri Sairam Institutions Presents
          </p>

          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black font-orbitron tracking-tighter leading-none mb-4">
            <span className="relative inline-block glitch-effect neon-text italic">
              EMINENCE 2.0
            </span>
          </h1>

          <p className="text-xl md:text-2xl font-inter text-darkAccent font-bold font-orbitron  tracking-wide max-w-2xl mx-auto">
            The Venture Vault
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-10">
            <motion.a
              href="#events"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-neon w-full sm:w-auto text-center"
            >
              Explore Events
            </motion.a>
            <motion.a
              href="#register-cta"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-outline w-full sm:w-auto text-center"
            >
              Register Now
            </motion.a>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-gray-400">Scroll</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-neonPurple to-transparent" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
