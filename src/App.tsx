import { useState, useEffect } from 'react';
import { Navbar, Footer, Hero, About, EventsSection, Schedule, Venue, RegisterCTA, Contact, RegisterForm, SuccessScreen } from './components/index';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const LandingPage = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
  >
    <Hero />
    <About />
    <EventsSection />
    <Schedule />
    <Venue />
    <RegisterCTA />
    <Contact />
  </motion.div>
);

const RegisterPage = ({ title, description }: { title: string; description: string }) => {
  const [isSuccess, setIsSuccess] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen pt-32 pb-24 bg-grid relative flex flex-col items-center px-6"
    >
      {!isSuccess ? (
        <>
          <div className="text-center max-w-3xl mb-12 space-y-4">
            <h1 className="text-4xl md:text-5xl font-black font-orbitron uppercase italic tracking-tight">{title}</h1>
            <p className="text-gray-500 font-inter leading-relaxed">{description}</p>
            <div className="h-1.5 w-24 bg-neon-gradient rounded-full mx-auto" />
          </div>
          <RegisterForm eventTitle={title} onSuccess={() => setIsSuccess(true)} />
        </>
      ) : (
        <SuccessScreen />
      )}
    </motion.div>
  );
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route 
                path="/register/scale-strike" 
                element={
                  <RegisterPage 
                    title="Scale & Strike" 
                    description="A creative pitching challenge where teams compete head-to-head by presenting solutions for given problem statements." 
                  />
                } 
              />
              <Route 
                path="/register/convince-us" 
                element={
                  <RegisterPage 
                    title="Convince Us" 
                    description="A startup investment simulation where teams pitch business ideas before a simulated investor panel." 
                  />
                } 
              />
              <Route 
                path="/register/conquer-corporate" 
                element={
                  <RegisterPage 
                    title="Conquer the Corporate" 
                    description="A corporate puzzle challenge where teams analyze documents such as financial reports and news articles to solve clues." 
                  />
                } 
              />
            </Routes>
          </AnimatePresence>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
