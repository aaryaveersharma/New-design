import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function CTAFooter() {
  return (
    <section className="relative min-h-screen py-32 px-6 md:px-16 lg:px-24 bg-black overflow-hidden flex flex-col items-center justify-center">
      {/* Background HLS Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        autoPlay
        loop
        muted
        playsInline
      >
        <source
          src="https://stream.mux.com/8wrHPCX2dC3msyYU9ObwqNdm00u3ViXvOSHUMRYSEe5Q.m3u8"
          type="application/x-mpegURL"
        />
      </video>

      {/* Top Gradient Fade */}
      <div
        className="absolute top-0 left-0 right-0 z-[1] pointer-events-none"
        style={{
          height: '200px',
          background: 'linear-gradient(to bottom, black, transparent)',
        }}
      ></div>

      {/* Bottom Gradient Fade */}
      <div
        className="absolute bottom-0 left-0 right-0 z-[1] pointer-events-none"
        style={{
          height: '200px',
          background: 'linear-gradient(to top, black, transparent)',
        }}
      ></div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="relative z-10 text-center max-w-5xl mx-auto"
      >
        <h2
          className="text-5xl md:text-6xl lg:text-7xl italic text-white mb-8"
          style={{ fontFamily: "'Instrument Serif', serif" }}
        >
          Your next website starts here.
        </h2>

        <p
          className="text-white/60 font-light text-xl mb-12 max-w-2xl mx-auto"
          style={{ fontFamily: "'Barlow', sans-serif" }}
        >
          Join hundreds of brands that have transformed their digital presence. Let's build something extraordinary together.
        </p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="liquid-glass-strong rounded-full px-10 py-5 flex items-center justify-center gap-2 bg-white text-black font-semibold text-lg hover:bg-white/90 transition-all mx-auto"
        >
          Start Your Project
          <ArrowUpRight size={20} />
        </motion.button>

        {/* Footer Links */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 pt-16 border-t border-white/10 flex flex-wrap justify-center gap-8 text-sm"
        >
          <a href="#" className="text-white/60 hover:text-white transition-colors">
            Privacy
          </a>
          <a href="#" className="text-white/60 hover:text-white transition-colors">
            Terms
          </a>
          <a href="#" className="text-white/60 hover:text-white transition-colors">
            Contact
          </a>
          <a href="#" className="text-white/60 hover:text-white transition-colors">
            Twitter
          </a>
          <a href="#" className="text-white/60 hover:text-white transition-colors">
            LinkedIn
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
