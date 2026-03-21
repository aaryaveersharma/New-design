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
            className="text-5xl md:text-6xl lg:text-7xl text-white mb-4 flex flex-col font-heading font-bold"
          >
            <span>Let's start your</span>
            <span className="italic font-normal font-serif">success story</span>
          </h2>

          <p
            className="text-white/50 font-medium text-lg md:text-xl mb-12 max-w-xl font-body"
          >
            Have a project in mind? We'd love to hear about it. Drop us a line and let's explore how we can help you achieve your goals.
          </p>

          <div className="flex flex-col gap-10 mb-16">
            <div className="flex items-center gap-6 group">
              <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center group-hover:bg-white/90 transition-colors duration-300">
                <Mail size={24} className="text-black" />
              </div>
              <div className="flex flex-col font-heading">
                <span className="text-white/40 text-sm font-medium uppercase tracking-wider mb-1">Email</span>
                <a
                  href="mailto:contact@sovereignsites.in"
                  className="text-xl md:text-2xl text-white font-bold"
                >
                  contact@sovereignsites.in
                </a>
              </div>
            </div>

            <div className="flex items-center gap-6 group">
              <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center group-hover:bg-white/90 transition-colors duration-300">
                <Phone size={24} className="text-black" />
              </div>
              <div className="flex flex-col font-heading">
                <span className="text-white/40 text-sm font-medium uppercase tracking-wider mb-1">WhatsApp</span>
                <a
                  href="https://wa.me/919329441312"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl md:text-2xl text-white font-bold"
                >
                  +91 9329441312
                </a>
              </div>
            </div>

            <div className="flex items-center gap-6 group">
              <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center group-hover:bg-white/90 transition-colors duration-300">
                <MapPin size={24} className="text-black" />
              </div>
              <div className="flex flex-col font-heading">
                <span className="text-white/40 text-sm font-medium uppercase tracking-wider mb-1">Location</span>
                <span
                  className="text-xl md:text-2xl text-white font-bold"
                >
                  Raipur, Chhattisgarh, IN
                </span>
              </div>
            </div>
          </div>

          <motion.a
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            href="https://wa.me/919329441312"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full max-w-lg rounded-2xl px-6 py-5 flex items-center justify-between bg-white text-black font-bold text-xl hover:bg-white/90 transition-all shadow-2xl whitespace-nowrap font-heading"
          >
            <div className="flex items-center gap-4">
              <svg
                viewBox="0 0 24 24"
                width="28"
                height="28"
                fill="currentColor"
                className="text-black"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.937 3.659 1.435 5.705 1.435h.008c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              <span>Get Started on WhatsApp</span>
            </div>
            <ArrowUpRight size={28} />
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
