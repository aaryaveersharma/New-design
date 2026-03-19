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
          <div className="w-12 h-12 rounded-full bg-white/10 liquid-glass flex items-center justify-center">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-white/40 to-white/10"></div>
          </div>
        </div>

        {/* Center Navigation Pill */}
        <div className="hidden md:flex items-center gap-1 liquid-glass rounded-full px-8 py-3">
          {navLinks.map((link) => (
            <button
              key={link}
              className="text-sm font-medium text-foreground/90 hover:text-foreground px-4 py-2 transition-colors"
            >
              {link}
            </button>
          ))}
        </div>

        {/* Get Started Button */}
        <button className="liquid-glass-strong rounded-full px-6 py-3 flex items-center gap-2 bg-white text-black font-medium text-sm hover:bg-white/90 transition-all">
          Get Started
          <ArrowUpRight size={16} />
        </button>
      </div>
    </motion.nav>
  );
}
