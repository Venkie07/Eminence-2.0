import { motion } from 'framer-motion';
import { Instagram, Mail, Phone } from 'lucide-react';

const Contact = () => {
  const coordinators = [
    { name: "Aadhitiya S", role: "Event Coordinator", phone: "+91 70104 18021" },
    { name: "Priyanka S", role: "Event Coordinator", phone: "+91 7305920375" },
  ];

  return (
    <section id="contact" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-black uppercase italic tracking-tight">
                Get in <span className="neon-text">Touch</span>
              </h2>
              <div className="h-1.5 w-24 bg-neon-gradient rounded-full" />
              <p className="text-lg text-gray-500 font-inter pt-4 leading-relaxed">
                Have questions or need assistance? Our team is here to help you navigate through the event.
                Feel free to reach out to us.
              </p>
            </div>

            <div className="grid gap-8">
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-lightGray flex items-center justify-center text-neonPurple group-hover:bg-neonPurple group-hover:text-white transition-all duration-300">
                  <Mail size={28} />
                </div>
                <div>
                  <p className="text-[10px] uppercase font-bold text-gray-400 tracking-widest mb-1">Email Address</p>
                  <a href="mailto:sairam_startupindia@sairam.edu.in" className="text-lg md:text-xl font-bold text-darkAccent hover:text-neonPurple transition-colors break-all">
                    sairam_startupindia@sairam.edu.in
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-lightGray flex items-center justify-center text-neonPink group-hover:bg-neonPink group-hover:text-white transition-all duration-300">
                  <Instagram size={28} />
                </div>
                <div>
                  <p className="text-[10px] uppercase font-bold text-gray-400 tracking-widest mb-1">Instagram</p>
                  <a href="https://www.instagram.com/sairam.startupindia?igsh=a2JjcHR2dmIwcTFj" target="_blank" className="text-xl font-bold text-darkAccent hover:text-neonPink transition-colors">
                    @eminence_sairam
                  </a>
                </div>
              </div>

              {/* <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-lightGray flex items-center justify-center text-neonPurple group-hover:bg-neonPurple group-hover:text-white transition-all duration-300">
                  <Users size={28} />
                </div>
                <div>
                  <p className="text-[10px] uppercase font-bold text-gray-400 tracking-widest mb-1">Sponsors</p>
                  <a href="#" className="text-xl font-bold text-darkAccent hover:text-neonPurple transition-colors">
                    Partnership Enquiries
                  </a>
                </div>
              </div> */}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-10 md:p-16 border-2 border-lightGray"
          >
            <h4 className="font-orbitron font-bold text-2xl mb-10 uppercase tracking-tight">
              Event <span className="text-neonPurple">Coordinators</span>
            </h4>

            <div className="space-y-10">
              {coordinators.map((coordinator, index) => (
                <div key={index} className="flex flex-wrap justify-between items-center gap-4 group">
                  <div className="space-y-1">
                    <h5 className="font-bold text-lg text-darkAccent font-inter">{coordinator.name}</h5>
                    <p className="text-xs uppercase font-bold text-gray-400 tracking-wider">{coordinator.role}</p>
                  </div>
                  <a
                    href={`tel:${coordinator.phone.replace(/\s+/g, '')}`}
                    className="flex items-center gap-2 text-neonPurple font-bold group-hover:translate-x-[-10px] transition-transform"
                  >
                    <Phone size={18} />
                    <span className="hidden md:inline">{coordinator.phone}</span>
                  </a>
                </div>
              ))}
            </div>
            <br></br>
            <h4 className="font-orbitron font-bold text-2xl mb-10 uppercase tracking-tight">
              Staff <span className="text-neonPurple">Coordinators</span>
            </h4>
            <div className="space-y-10">
              <div key={0} className="flex flex-wrap justify-between items-center gap-4 group">
                <div className="space-y-1">
                  <h5 className="font-bold text-lg text-darkAccent font-inter">{"Dr. Pachhaiammal Alias Priya M"}</h5>
                  <p className="text-xs uppercase font-bold text-gray-400 tracking-wider">{"IEEE Consumer Technology/Captain"}</p>
                  <p className="text-xs uppercase font-bold text-gray-400 tracking-wider">{"Head of Department/CCE"}</p>
                </div>
                <a
                  href={`tel:${"+91 91717 94972"}`}
                  className="flex items-center gap-2 text-neonPurple font-bold group-hover:translate-x-[-10px] transition-transform"
                ><Phone size={18} />
                    <span className="hidden md:inline">{"+91 91717 94972"}</span></a>
              </div>
            </div>


            <div className="mt-16 p-6 rounded-2xl bg-darkAccent text-white flex items-center justify-between">
              <div>
                <p className="text-[10px] uppercase font-bold text-gray-500 tracking-[0.2em] mb-1">Official HashTag</p>
                <p className="font-orbitron font-bold text-xl">#EMINENCE2026</p>
              </div>
              <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-neonPink animate-ping" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
