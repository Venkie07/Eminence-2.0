import { useState, useEffect } from 'react';
// import { Menu, X, Instagram, Mail, Phone } from 'lucide-react';
import { Menu, X} from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/#about' },
    { name: 'Events', href: '/#events' },
    { name: 'Schedule', href: '/#schedule' },
    { name: 'Venue', href: '/#venue' },
    { name: 'Register', href: '/#register-cta' },
    { name: 'Contact', href: '/#contact' },
  ];

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    if (href.startsWith('/#')) {
      const id = href.replace('/#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || !isHomePage ? 'bg-white/90 backdrop-blur-md shadow-md py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link 
          to="/" 
          className={`font-orbitron font-black text-2xl tracking-tighter ${
            isScrolled || !isHomePage ? 'text-darkAccent' : 'text-white drop-shadow-lg'
          }`}
        >
          EMINENCE <span className="text-neonPurple italic">2.0</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              onClick={() => handleNavClick(link.href)}
              className={`font-medium text-sm uppercase tracking-widest hover:text-neonPurple transition-colors ${
                isScrolled || !isHomePage ? 'text-darkAccent' : 'text-white'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/#events"
            onClick={() => handleNavClick('/#events')}
            className="btn-neon !px-6 !py-2 text-xs"
          >
            Join Now
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className={`lg:hidden ${isScrolled || !isHomePage ? 'text-darkAccent' : 'text-white'}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-2xl py-8 px-6 flex flex-col space-y-6 items-center border-t border-lightGray"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-darkAccent font-orbitron font-bold text-lg uppercase hover:text-neonPurple transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/#events"
              onClick={() => handleNavClick('/#events')}
              className="btn-neon w-full text-center"
            >
              Register Now
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
