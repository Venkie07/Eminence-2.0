import { motion } from 'framer-motion';
import EventCard from './EventCard';
import { Rocket, BadgePercent, Cpu } from 'lucide-react';

const EventsSection = () => {
  const events = [
    {
      title: "Scale & Strike",
      description: "A creative pitching challenge where teams compete head-to-head by presenting solutions for given problem statements. Teams pitch ideas and justify why their solution is the best.",
      icon: <Rocket size={48} strokeWidth={1.5} />,
      registerLink: "/register/scale-strike",
      color: "purple" as const
    },
    {
      title: "Convince Us",
      description: "A startup investment simulation where teams pitch business ideas before a simulated investor panel. Teams are ranked based on virtual investment capital they attract.",
      icon: <BadgePercent size={48} strokeWidth={1.5} />,
      registerLink: "/register/convince-us",
      color: "pink" as const
    },
    {
      title: "Conquer the Corporate",
      description: "A corporate puzzle challenge where teams analyze documents such as financial reports and news articles to solve clues and unlock digital vault levels.",
      icon: <Cpu size={48} strokeWidth={1.5} />,
      registerLink: "/register/conquer-corporate",
      color: "purple" as const
    }
  ];

  return (
    <section id="events" className="py-24 bg-lightGray/30 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20 space-y-4">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="font-orbitron text-neonPink font-bold tracking-[0.4em] text-xs uppercase"
          >
            Competitive Excellence
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-black uppercase italic tracking-tight"
          >
            Event <span className="neon-text">Challenges</span>
          </motion.h2>
          <div className="h-1.5 w-24 bg-neon-gradient rounded-full mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {events.map((event, index) => (
            <EventCard key={index} {...event} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
