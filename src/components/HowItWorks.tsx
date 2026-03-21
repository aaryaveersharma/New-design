import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import Hls from 'hls.js';

export default function HowItWorks() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const videoSrc = "https://stream.mux.com/9JXDljEVWYwWu01PUkAemafDugK89o01BR6zqJ3aS9u00A.m3u8";

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

  const steps = [
    { number: '01', title: 'Discovery', description: 'We dive deep into your business, goals, and target audience to understand what success looks like for you.' },
    { number: '02', title: 'Strategy', description: 'We craft a tailored roadmap that aligns your digital presence with your business objectives.' },
    { number: '03', title: 'Design & Build', description: 'Our team brings the vision to life with pixel-perfect design and clean, performant code.' },
    { number: '04', title: 'Launch & Grow', description: 'We deploy your project and provide ongoing support to ensure continuous improvement.' },
  ];

  return (
    <section className="relative py-24 px-6 md:px-16 lg:px-24 bg-black overflow-hidden">
      {/* Background HLS Video */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-40"
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
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2
            className="text-4xl md:text-5xl lg:text-6xl italic text-white font-serif"
          >
            How We Work
          </h2>
        </motion.div>

        {/* Process Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="liquid-glass rounded-2xl p-8 border border-white/5"
            >
              <div className="text-3xl font-bold text-white/20 mb-4 font-serif">
                {step.number}
              </div>
              <h3
                className="text-xl italic text-white mb-4 font-serif"
              >
                {step.title}
              </h3>
              <p className="text-white/60 font-light text-sm leading-relaxed font-body">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <a
            href="https://wa.me/919329441312"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-2xl px-8 py-4 inline-flex items-center gap-2 bg-white text-black font-bold hover:bg-white/90 transition-all text-xl font-heading"
          >
            Start Your Journey
            <ArrowUpRight size={18} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
