import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Navbar() {
  const navLinks = ['Home', 'Services', 'Work', 'Process', 'Pricing'];

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4"
    >
      <div className="flex items-center justify-between w-full max-w-7xl">
        {/* Logo */}
        <div className="flex-shrink-0">
          <img
            src="/images/logo.png"
            alt="Sovereign Logo"
            className="h-14 w-auto object-contain"
          />
        </div>

        {/* Center Navigation Pill */}
        <div className="hidden md:flex items-center gap-1 liquid-glass rounded-full px-8 py-3 font-body">
          {['Home', 'Services', 'About', 'Contact'].map((link) => (
            <button
              key={link}
              className="text-sm font-medium text-foreground/90 hover:text-foreground px-4 py-2 transition-colors"
            >
              {link}
            </button>
          ))}
        </div>

        {/* Get Started Button */}
        <a
          href="https://wa.me/919329441312"
          target="_blank"
          rel="noopener noreferrer"
          className="liquid-glass-strong rounded-full px-4 py-2 flex items-center gap-2 bg-white text-black font-medium text-xs hover:bg-white/90 transition-all font-body uppercase tracking-wider"
        >
          Start a Project
          <ArrowUpRight size={12} />
        </a>
      </div>
    </motion.nav>
  );
}
