import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import Hls from 'hls.js';

const stats = [
  { value: '200+', label: 'Sites launched' },
  { value: '98%', label: 'Client satisfaction' },
  { value: '3.2x', label: 'More conversions' },
  { value: '5 days', label: 'Average delivery' },
];

export default function Stats() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const videoSrc = "https://stream.mux.com/NcU3HlHeF7CUL86azTTzpy3Tlb00d6iF3BmCdFslMJYM.m3u8";

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
    <section className="relative py-24 px-6 md:px-16 lg:px-24 bg-black overflow-hidden">
      {/* Background HLS Video - Desaturated */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover z-0"
        style={{ filter: 'saturate(0)' }}
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
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="relative z-10 liquid-glass rounded-3xl p-12 md:p-16 max-w-6xl mx-auto"
      >
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div
                className="text-4xl md:text-5xl lg:text-6xl text-white mb-2 font-heading font-extrabold"
              >
                {stat.value}
              </div>
              <div className="text-white/60 font-light text-sm font-body">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
