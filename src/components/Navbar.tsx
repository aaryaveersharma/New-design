import { ArrowUpRight, Menu, X } from 'lucide-react';
import { motion, useScroll, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();

  const toggleMenu = () => setIsOpen(!isOpen);

  // Smart scroll logic: Hide on scroll down, show on scroll up
  useEffect(() => {
    return scrollY.on('change', (latest) => {
      const previous = scrollY.getPrevious() ?? 0;
      if (latest > previous && latest > 150) {
        setHidden(true);
      } else {
        setHidden(false);
      }

      if (latest > 50 && isOpen) {
        setIsOpen(false);
      }
    });
  }, [isOpen, scrollY]);

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <motion.nav
        variants={{
          visible: { y: 0, opacity: 1 },
          hidden: { y: -120, opacity: 0 },
        }}
        animate={hidden && !isOpen ? "hidden" : "visible"}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className="fixed top-6 left-0 right-0 z-[60] flex justify-center px-4 pointer-events-none"
      >
        <div className="flex items-center justify-between w-[95%] max-w-5xl px-6 md:px-10 py-0.5 rounded-full bg-black/60 backdrop-blur-xl border border-white/10 shadow-2xl pointer-events-auto liquid-glass">
          {/* Logo */}
          <div className="flex-shrink-0 cursor-pointer flex items-center py-0.5 -translate-x-4" onClick={() => scrollToSection('home')}>
            <img
              src="/images/logo.png"
              alt="Sovereign Logo"
              className="h-10 md:h-12 w-auto object-contain scale-[3.0] origin-left"
            />
          </div>

          {/* Right Action Area */}
          <div className="flex items-center">
            <button
              onClick={toggleMenu}
              className="transition-all text-white flex items-center justify-center hover:scale-110"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Sliding Menu Card */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed top-28 left-4 right-4 md:left-auto md:right-8 z-50 md:w-96 rounded-3xl bg-black/80 backdrop-blur-2xl border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)] p-8 liquid-glass overflow-hidden"
          >
            <div className="flex flex-col gap-6 font-heading">
              <button
                onClick={() => scrollToSection('home')}
                className="text-2xl font-bold text-white/60 hover:text-white text-left transition-colors"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="text-2xl font-bold text-white/60 hover:text-white text-left transition-colors"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-2xl font-bold text-white/60 hover:text-white text-left transition-colors"
              >
                About Us
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-2xl font-bold text-white/60 hover:text-white text-left transition-colors"
              >
                Contact
              </button>

              <div className="h-px bg-white/10 my-4" />

              <a
                href="https://wa.me/919329441312"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl px-8 py-6 flex items-center justify-between bg-white text-black font-bold text-2xl hover:bg-white/90 transition-all shadow-xl"
              >
                Start a Project
                <ArrowUpRight size={24} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
