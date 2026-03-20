import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import Hls from 'hls.js';

export default function CTAFooter() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const videoSrc = "https://stream.mux.com/8wrHPCX2dC3msyYU9ObwqNdm00u3ViXvOSHUMRYSEe5Q.m3u8";

  useEffect(() => {
    let hls: Hls | null = null;
    if (videoRef.current) {
      if (Hls.isSupported()) {
        hls = new Hls();
        hls.loadSource(videoSrc);
        hls.attachMedia(videoRef.current);
      } else if (videoRef.current.canPlayType('application/vnd.apple.mpegurl')) {
        videoRef.current.src = videoSrc;
      }
    }
    return () => {
      if (hls) {
        hls.destroy();
      }
    };
  }, [videoSrc]);

  return (
    <section className="relative py-24 px-6 md:px-16 lg:px-24 bg-black overflow-hidden flex flex-col items-center justify-center">
      {/* Background HLS Video */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-50"
        autoPlay
        loop
        muted
        playsInline
      />

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
          Let's start your success story
        </h2>

        <p
          className="text-white/60 font-light text-xl mb-12 max-w-2xl mx-auto"
          style={{ fontFamily: "'Barlow', sans-serif" }}
        >
          Have a project in mind? We'd love to hear about it. Drop us a line and let's explore how we can help you achieve your goals.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 max-w-2xl mx-auto">
          <div className="liquid-glass rounded-2xl p-6 text-center">
            <div className="text-white/40 text-sm mb-2">Email</div>
            <a href="mailto:contact@sovereignsites.in" className="text-xl text-white hover:text-white/80 transition-colors">
              contact@sovereignsites.in
            </a>
          </div>
          <div className="liquid-glass rounded-2xl p-6 text-center">
            <div className="text-white/40 text-sm mb-2">WhatsApp</div>
            <a href="https://wa.me/919329441312" target="_blank" rel="noopener noreferrer" className="text-xl text-white hover:text-white/80 transition-colors">
              +91 9329441312
            </a>
          </div>
        </div>

        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="https://wa.me/919329441312"
          target="_blank"
          rel="noopener noreferrer"
          className="liquid-glass-strong rounded-full px-10 py-5 inline-flex items-center justify-center gap-2 bg-white text-black font-semibold text-lg hover:bg-white/90 transition-all mx-auto"
        >
          Get Started on WhatsApp
          <ArrowUpRight size={20} />
        </motion.a>

        {/* Footer Links */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 pt-16 border-t border-white/10 flex flex-wrap justify-center gap-8 text-sm"
        >
          <div className="text-white/40">© 2026 Sovereign Sites. All rights reserved.</div>
          <div className="flex gap-8">
            <a href="#" className="text-white/60 hover:text-white transition-colors">
              Services
            </a>
            <a href="#" className="text-white/60 hover:text-white transition-colors">
              About
            </a>
            <a href="#" className="text-white/60 hover:text-white transition-colors">
              Contact
            </a>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
