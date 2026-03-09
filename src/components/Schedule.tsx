import { motion } from 'framer-motion';
import { Calendar, Clock } from 'lucide-react';

const Schedule = () => {
  const scheduleData = {
    day1: [
      "Inaugural Session",
      "Startup India Awareness",
      "Government Schemes & Funding",
      "Interactive Student Discussion",
      "Scale & Strike Event",
      "Convince Us Event",
      "Conquer the Corporate Event"
    ],
    day2: [
      "Entrepreneurship Workshop",
      "Student Startup Showcase",
      "Panel Discussion with Student Entrepreneurs",
      "Networking Session"
    ]
  };

  return (
    <section id="schedule" className="py-24 bg-white relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-neonPurple/5 rounded-full -mr-32 -mt-32 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-neonPink/5 rounded-full -ml-32 -mb-32 blur-3xl" />

      <div className="container mx-auto px-6">
        <div className="text-center mb-20 space-y-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-black uppercase italic tracking-tight"
          >
            Event <span className="neon-text">Schedule</span>
          </motion.h2>
          <div className="h-1.5 w-24 bg-neon-gradient rounded-full mx-auto" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Day 1 */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-3 px-6 py-2 bg-neonPurple text-white rounded-full font-orbitron font-bold text-sm uppercase tracking-widest mb-6">
              <Calendar size={18} />
              Day 01
            </div>

            <div className="relative pl-8 border-l-2 border-dashed border-lightGray space-y-12">
              {scheduleData.day1.map((item, index) => (
                <div key={index} className="relative">
                  <div className="absolute -left-[41px] top-0 w-4 h-4 rounded-full bg-white border-4 border-neonPurple" />
                  <div className="glass-card p-6 border-l-4 border-l-neonPurple hover:translate-x-3 transition-transform duration-300">
                    <div className="flex items-center gap-2 text-neonPurple font-bold text-xs uppercase mb-2">
                      <Clock size={14} />
                      Session {index + 1}
                    </div>
                    <h4 className="font-bold text-darkAccent font-inter text-lg">{item}</h4>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Day 2 */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8 lg:mt-0 mt-12"
          >
            <div className="inline-flex items-center gap-3 px-6 py-2 bg-neonPink text-white rounded-full font-orbitron font-bold text-sm uppercase tracking-widest mb-6">
              <Calendar size={18} />
              Day 02
            </div>

            <div className="relative pl-8 border-l-2 border-dashed border-lightGray space-y-12">
              {scheduleData.day2.map((item, index) => (
                <div key={index} className="relative">
                  <div className="absolute -left-[41px] top-0 w-4 h-4 rounded-full bg-white border-4 border-neonPink" />
                  <div className="glass-card p-6 border-l-4 border-l-neonPink hover:translate-x-3 transition-transform duration-300">
                    <div className="flex items-center gap-2 text-neonPink font-bold text-xs uppercase mb-2">
                       <Clock size={14} />
                      Workshop {index + 1}
                    </div>
                    <h4 className="font-bold text-darkAccent font-inter text-lg">{item}</h4>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Schedule;
