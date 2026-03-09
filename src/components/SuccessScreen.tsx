import { motion } from 'framer-motion';
import { CheckCircle, Home } from 'lucide-react';
import { Link } from 'react-router-dom';

const SuccessScreen = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="glass-card p-12 md:p-16 text-center max-w-[600px] w-full border-2 border-neonPurple/20"
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: 'spring', damping: 12, delay: 0.2 }}
        className="w-24 h-24 rounded-full bg-neonPurple/10 flex items-center justify-center text-neonPurple mx-auto mb-10"
      >
        <CheckCircle size={56} strokeWidth={1.5} />
      </motion.div>

      <h2 className="text-4xl font-black font-orbitron uppercase italic tracking-tighter mb-4">
        Registration <span className="neon-text">Successful!</span>
      </h2>
      
      <p className="text-gray-500 font-inter mb-10 leading-relaxed">
        Thank you for registering for Eminence 2.0. Further details regarding the event timeline and rules will be shared via email shortly.
      </p>

      <div className="space-y-4">
        <Link
          to="/"
          className="btn-neon w-full flex items-center justify-center gap-3"
        >
          <Home size={18} />
          Back to Home
        </Link>
        <p className="text-[10px] uppercase font-bold text-gray-400 tracking-[0.3em] pt-4">
          Wait for our confirmation email
        </p>
      </div>
    </motion.div>
  );
};

export default SuccessScreen;
