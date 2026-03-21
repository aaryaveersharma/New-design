import { ArrowUpRight, Mail, Phone, MapPin } from 'lucide-react';
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
    <section id="contact" className="relative py-24 px-6 md:px-16 lg:px-24 bg-black overflow-hidden flex flex-col items-start">
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
      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col items-start md:pl-12 lg:pl-24">
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-left w-full"
        >
          <div className="text-white font-bold text-sm tracking-[0.2em] mb-6 uppercase">Get In Touch</div>

          <h2
            className="text-5xl md:text-6xl lg:text-7xl text-white mb-4 flex flex-col"
            style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700 }}
          >
            <span>Let's start your</span>
            <span className="italic font-normal" style={{ fontFamily: "'Instrument Serif', serif" }}>success story</span>
          </h2>

          <p
            className="text-white/50 font-medium text-lg md:text-xl mb-12 max-w-xl"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            Have a project in mind? We'd love to hear about it. Drop us a line and let's explore how we can help you achieve your goals.
          </p>

          <div className="flex flex-col gap-10 mb-16">
            <div className="flex items-center gap-6 group">
              <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center group-hover:bg-white/90 transition-colors duration-300">
                <Mail size={24} className="text-black" />
              </div>
              <div className="flex flex-col">
                <span className="text-white/40 text-sm font-medium uppercase tracking-wider mb-1">Email</span>
                <a
                  href="mailto:contact@sovereignsites.in"
                  className="text-xl md:text-2xl text-white font-bold"
                  style={{ fontFamily: "'Syne', sans-serif" }}
                >
                  contact@sovereignsites.in
                </a>
              </div>
            </div>

            <div className="flex items-center gap-6 group">
              <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center group-hover:bg-white/90 transition-colors duration-300">
                <Phone size={24} className="text-black" />
              </div>
              <div className="flex flex-col">
                <span className="text-white/40 text-sm font-medium uppercase tracking-wider mb-1">WhatsApp</span>
                <a
                  href="https://wa.me/919329441312"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl md:text-2xl text-white font-bold"
                  style={{ fontFamily: "'Syne', sans-serif" }}
                >
                  +91 9329441312
                </a>
              </div>
            </div>

            <div className="flex items-center gap-6 group">
              <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center group-hover:bg-white/90 transition-colors duration-300">
                <MapPin size={24} className="text-black" />
              </div>
              <div className="flex flex-col">
                <span className="text-white/40 text-sm font-medium uppercase tracking-wider mb-1">Location</span>
                <span
                  className="text-xl md:text-2xl text-white font-bold"
                  style={{ fontFamily: "'Syne', sans-serif" }}
                >
                  Raipur, Chhattisgarh, IN
                </span>
              </div>
            </div>
          </div>

          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://wa.me/919329441312"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-2xl px-12 py-5 inline-flex items-center justify-center gap-3 bg-white text-black font-bold text-xl hover:bg-white/90 transition-all shadow-xl"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            <Phone size={22} />
            Get Started on WhatsApp
          </motion.a>
        </motion.div>

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
      </div>
    </section>
  );
}
