import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';

const Venue = () => {
  const venues = [
    { name: "SSR Hall / VRR Hall", details: "Main Auditorium - 1st Floor" },
    { name: "Alpha Hall", details: "Innovation Center - 2nd Floor" },
    { name: "Beta Hall", details: "Business Hub - Ground Floor" },
    { name: "Apple Hall", details: "Tech Block - 3rd Floor" },
    { name: "Steve Jobs Hall", details: "Entrepreneur Block - 4th Floor" }
  ];

  return (
    <section id="venue" className="py-24 bg-lightGray/30 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="text-4xl md:text-5xl font-black uppercase italic tracking-tight"
          >
            Event <span className="neon-text">Venues</span>
          </motion.h2>
          <div className="h-1.5 w-24 bg-neon-gradient rounded-full mx-auto" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {venues.map((venue, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="glass-card p-8 flex flex-col items-center text-center group cursor-default"
            >
              <div className="w-16 h-16 rounded-2xl bg-white shadow-soft flex items-center justify-center mb-6 group-hover:bg-neonPurple group-hover:text-white transition-colors duration-300">
                <MapPin size={32} />
              </div>
              <h4 className="font-orbitron font-bold text-darkAccent text-lg mb-2">{venue.name}</h4>
              <p className="text-xs text-gray-500 uppercase tracking-widest">{venue.details}</p>
            </motion.div>
          ))}
        </div>

        {/* Location Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-16 p-8 rounded-3xl border border-neonPurple/20 bg-neonPurple/[0.02] flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="flex items-center gap-6">
            <div className="w-12 h-12 rounded-full bg-neonPurple flex items-center justify-center text-white shrink-0">
              <MapPin size={24} />
            </div>

            <div>
              <p className="font-inter font-bold text-darkAccent">
                Sri Sairam Institutions
              </p>
              <p className="text-sm text-gray-500">
                Sai Leo Nagar, West Tambaram, Chennai, Tamil Nadu 600044
              </p>
            </div>
          </div>

          <a 
            href="https://www.google.com/maps/search/?api=1&query=Sri+Sairam+Institute+of+Technology"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-neon lg:hidden flex items-center gap-2"
          >
            <span>View Location</span>
            <MapPin size={18} />
          </a>

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.1750647706767!2d80.05065757484117!3d12.960647087353703!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52f51f638ddfbb%3A0xf3aef7ec7c8979ba!2sSri%20Sairam%20Institute%20of%20Technology!5e0!3m2!1sen!2sin!4v1773041200891!5m2!1sen!2sin"
            width="850"
            height="400"
            className="rounded-xl border border-neonPurple/30 hidden lg:block"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </motion.div>
      </div>
    </section>
  );
};

export default Venue;
