import { ArrowUpRight } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Navbar() {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 10], [1, 0]);
  const y = useTransform(scrollY, [0, 10], [0, -150]);

  return (
    <motion.nav
      style={{ opacity, y }}
      className="fixed top-2 left-0 right-0 z-50 px-4 md:px-6 pointer-events-none"
    >
      <div className="flex items-center justify-between w-full pointer-events-auto">
        {/* Logo */}
        <div className="flex-shrink-0">
          <img
            src="/images/logo.png"
            alt="Sovereign Logo"
            className="h-28 w-auto object-contain"
          />
        </div>

        {/* Center Navigation Pill */}
        <div className="hidden md:flex items-center gap-1 liquid-glass rounded-full px-6 py-2 font-heading scale-90">
          {['Home', 'Services', 'About', 'Contact'].map((link) => (
            <button
              key={link}
              className="text-xs font-medium text-foreground/90 hover:text-foreground px-3 py-1.5 transition-colors"
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
          className="liquid-glass-strong rounded-full px-5 py-2 flex items-center gap-2 bg-white text-black font-medium text-base hover:bg-white/90 transition-all font-heading tracking-tight"
        >
          Start a Project
          <ArrowUpRight size={14} />
        </a>
      </div>
    </motion.nav>
  );
}
