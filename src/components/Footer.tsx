import { Instagram, Mail, MapPin } from 'lucide-react';
// import { Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-darkAccent text-white pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <h3 className="font-orbitron font-bold text-2xl">
              EMINENCE <span className="text-neonPurple italic">2.0</span>
            </h3>
            <p className="text-gray-400 max-w-xs text-sm leading-relaxed">
              Empowering the next generation of entrepreneurs through awareness, funding, and pitching excellence.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/sairam.startupindia?igsh=a2JjcHR2dmIwcTFj" target="_blank" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-neonPurple transition-all">
                <Instagram size={20} />
              </a>
              <a href="mailto:sairam_startupindia@sairam.edu.in" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-neonPurple transition-all">
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-orbitron font-bold text-lg mb-6 uppercase tracking-wider text-neonPink">Quick Links</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About Eminence</a></li>
              <li><a href="#events" className="hover:text-white transition-colors">Events</a></li>
              <li><a href="#schedule" className="hover:text-white transition-colors">Event Schedule</a></li>
            </ul>
          </div>

          {/* <div>
            <h4 className="font-orbitron font-bold text-lg mb-6 uppercase tracking-wider text-neonPink">Resources</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Startup India</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Govt Schemes</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Funding Guide</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Registration FAQ</a></li>
            </ul>
          </div> */}

          <div>
            <h4 className="font-orbitron font-bold text-lg mb-6 uppercase tracking-wider text-neonPink">Institution</h4>
            <div className="space-y-4 text-sm text-gray-400">
              <p className="flex items-start">
                <MapPin size={18} className="mr-3 text-neonPurple shrink-0" />
                Sri Sairam Institutions,<br />Chennai - 600044
              </p>
              {/* <p className="flex items-center">
                <Phone size={18} className="mr-3 text-neonPurple shrink-0" />
                +91 98765 43210
              </p>
              <p className="flex items-center">
                <Mail size={18} className="mr-3 text-neonPurple shrink-0" />
                eminence@sairam.edu.in
              </p> */}
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 uppercase tracking-widest gap-4">
          <p>© 2026 EMINENCE 2.0. All Rights Reserved.</p>
          <p></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
