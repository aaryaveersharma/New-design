import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function HowItWorks() {
  return (
    <section className="relative min-h-screen py-32 px-6 md:px-16 lg:px-24 bg-black overflow-hidden">
      {/* Background HLS Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        autoPlay
        loop
        muted
        playsInline
      >
        <source
          src="https://stream.mux.com/9JXDljEVWYwWu01PUkAemafDugK89o01BR6zqJ3aS9u00A.m3u8"
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
      <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center justify-center min-h-[500px]">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="liquid-glass rounded-full px-4 py-2 mb-8 inline-flex items-center gap-2"
        >
          <span className="text-sm text-white/80">How It Works</span>
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl lg:text-6xl italic text-white mb-6"
          style={{ fontFamily: "'Instrument Serif', serif" }}
        >
          You dream it. We ship it.
        </motion.h2>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-white/60 font-light text-lg mb-12 max-w-2xl"
          style={{ fontFamily: "'Barlow', sans-serif" }}
        >
          Share your vision. Our AI handles the rest—wireframes, design, code, launch. All in days, not quarters.
        </motion.p>

        {/* Button */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="liquid-glass-strong rounded-full px-8 py-4 flex items-center justify-center gap-2 bg-white text-black font-medium hover:bg-white/90 transition-all"
        >
          Get Started
          <ArrowUpRight size={18} />
        </motion.button>
      </div>
    </section>
  );
}
