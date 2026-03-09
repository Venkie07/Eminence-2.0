import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface EventCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  registerLink: string;
  color: 'purple' | 'pink';
}

const EventCard = ({ title, description, icon, registerLink, color }: EventCardProps) => {
  const isPurple = color === 'purple';

  return (
    <motion.div
      whileHover={{ y: -15 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="glass-card p-10 flex flex-col items-center text-center group h-full relative overflow-hidden"
    >
      {/* Background Hover Effect */}
      <div 
        className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 -z-10 ${
          isPurple ? 'bg-neonPurple' : 'bg-neonPink'
        }`} 
      />

      <div className={`mb-8 p-6 rounded-3xl bg-lightGray transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6 ${
        isPurple ? 'text-neonPurple' : 'text-neonPink'
      }`}>
        {icon}
      </div>

      <h3 className="text-2xl font-black font-orbitron mb-4 uppercase italic tracking-tight">{title}</h3>
      <p className="text-gray-500 text-sm leading-relaxed mb-8 font-inter flex-grow">
        {description}
      </p>

      <Link
        to={registerLink}
        className={`w-full py-4 rounded-2xl font-bold uppercase tracking-widest text-xs transition-all duration-300 border-2 ${
          isPurple 
            ? 'border-neonPurple text-neonPurple hover:bg-neonPurple hover:text-white hover:shadow-[0_0_20px_rgba(122,0,255,0.4)]' 
            : 'border-neonPink text-neonPink hover:bg-neonPink hover:text-white hover:shadow-[0_0_20px_rgba(255,0,200,0.4)]'
        }`}
      >
        Register for Event
      </Link>
    </motion.div>
  );
};

export default EventCard;
