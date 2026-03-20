import { ArrowUpRight, Menu, X } from 'lucide-react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 10], [1, 0]);
  const y = useTransform(scrollY, [0, 10], [0, -150]);

  const toggleMenu = () => setIsOpen(!isOpen);

  // Close menu on scroll
  useEffect(() => {
    return scrollY.on('change', (latest) => {
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
        style={{ opacity: isOpen ? 1 : opacity, y: isOpen ? 0 : y }}
        className="fixed top-8 left-0 right-0 z-[60] flex justify-center px-4 pointer-events-none"
      >
        <div className="flex items-center justify-between w-full max-w-7xl px-8 py-2 rounded-full bg-black/60 backdrop-blur-xl border border-white/10 shadow-2xl pointer-events-auto liquid-glass">
          {/* Logo */}
          <div className="flex-shrink-0 cursor-pointer pl-2" onClick={() => scrollToSection('home')}>
            <img
              src="/images/logo.png"
              alt="Sovereign Logo"
              className="h-18 md:h-24 w-auto object-contain"
            />
          </div>

          {/* Right Action Area */}
          <div className="flex items-center gap-4 pr-1">
            <button
              onClick={toggleMenu}
              className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 transition-all text-white flex items-center justify-center"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
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
                className="text-3xl text-white/60 hover:text-white text-left transition-colors italic"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="text-3xl text-white/60 hover:text-white text-left transition-colors italic"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-3xl text-white/60 hover:text-white text-left transition-colors italic"
              >
                About Us
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-3xl text-white/60 hover:text-white text-left transition-colors italic"
              >
                Contact
              </button>

              <div className="h-px bg-white/10 my-4" />

              <a
                href="https://wa.me/919329441312"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl px-8 py-6 flex items-center justify-between bg-white text-black font-semibold text-2xl hover:bg-white/90 transition-all shadow-xl"
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
