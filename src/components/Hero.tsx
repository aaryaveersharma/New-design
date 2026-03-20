import { ArrowUpRight, Play } from 'lucide-react';
import { motion } from 'framer-motion';
import BlurText from '@/components/BlurText';

export default function Hero() {
  return (
    <section className="relative overflow-visible h-screen bg-black">
      {/* Background Video */}
      <video
        className="absolute top-1/5 w-full h-auto object-contain z-0"
        autoPlay
        loop
        muted
        playsInline
        poster="/images/hero_bg.jpeg"
      >
        <source
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260307_083826_e938b29f-a43a-41ec-a153-3d4730578ab8.mp4"
          type="video/mp4"
        />
      </video>

      {/* Overlay - Light Darkening */}
      <div className="absolute inset-0 bg-black/5 z-0"></div>

      {/* Bottom Gradient Fade */}
      <div
        className="absolute bottom-0 left-0 right-0 z-[1] pointer-events-none"
        style={{
          height: '300px',
          background: 'linear-gradient(to bottom, transparent, black)',
        }}
      ></div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center pt-20 px-4 text-center">
        {/* Main Heading with BlurText */}
        <div className="max-w-4xl mx-auto mb-6">
          <h1
            className="text-6xl md:text-8xl lg:text-[7rem] italic text-white tracking-[-4px] leading-[0.9] text-center"
            style={{ fontFamily: "'Instrument Serif', serif" }}
          >
            <motion.span
              initial={{ opacity: 0, filter: 'blur(10px)' }}
              animate={{ opacity: 1, filter: 'blur(0px)' }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="block"
            >
              Building websites
            </motion.span>
            <motion.span
              initial={{ opacity: 0, filter: 'blur(10px)' }}
              animate={{ opacity: 1, filter: 'blur(0px)' }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="block"
            >
              That convert
            </motion.span>
          </h1>
        </div>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, filter: 'blur(10px)' }}
          animate={{ opacity: 1, filter: 'blur(0px)' }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="max-w-2xl text-white/60 font-body font-light text-lg mb-12"
        >
          High-performance digital experiences engineered for growth. We transform ambitious businesses into market leaders through strategic design and development.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.1 }}
          className="flex flex-col sm:flex-row gap-4 font-body"
        >
          <a
            href="https://wa.me/919329441312"
            target="_blank"
            rel="noopener noreferrer"
            className="liquid-glass-strong rounded-full px-8 py-4 flex items-center justify-center gap-2 bg-white text-black font-medium hover:bg-white/90 transition-all"
          >
            Start Your Project
            <ArrowUpRight size={18} />
          </a>
          <a
            href="https://wa.me/919329441312"
            target="_blank"
            rel="noopener noreferrer"
            className="liquid-glass rounded-full px-8 py-4 flex items-center justify-center gap-2 text-white font-medium hover:bg-white/5 transition-all"
          >
            View Our Services
            <ArrowUpRight size={18} />
          </a>
        </motion.div>

        {/* Partners Bar at Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.3 }}
          className="mt-auto pb-8 pt-16 text-center"
        >
          <div className="liquid-glass rounded-full px-6 py-2 inline-block mb-6">
            <span className="text-xs text-white/70 font-body uppercase tracking-widest">What we do</span>
          </div>
          <div className="grid grid-cols-4 gap-x-12 gap-y-4 max-w-4xl mx-auto px-4">
            {[
              'Frontend', 'Backend', 'API', 'Optimization',
              'Hosting', 'Domain', 'CSS', 'JavaScript',
              'Framework', 'Database', 'Deployment', 'Git'
            ].map((skill) => (
              <div key={skill} className="text-xl md:text-2xl italic text-white text-center" style={{ fontFamily: "'Instrument Serif', serif" }}>
                {skill}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
