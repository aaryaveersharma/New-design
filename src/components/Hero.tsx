import { ArrowUpRight, Play } from 'lucide-react';
import { motion } from 'framer-motion';
import BlurText from '@/components/BlurText';

export default function Hero() {
  const row1 = ['Frontend', 'Backend', 'API', 'Optimization'];
  const row2 = ['Hosting', 'Domain', 'CSS', 'JavaScript'];
  const row3 = ['Framework', 'Database', 'Deployment', 'Git'];

  return (
    <section id="home" className="relative overflow-visible bg-black">
      {/* Background Video - Only covering top fold content */}
      <div className="absolute top-0 left-0 right-0 h-[750px] z-0 overflow-hidden rounded-b-[4rem]">
        <video
          className="w-full h-full object-cover opacity-60"
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
        <div className="absolute inset-0 bg-black/20"></div>
        {/* Bottom Fade for the video itself */}
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-black to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-start h-[750px] pt-32 px-4 text-center">
        {/* Main Heading with BlurText */}
        <div className="max-w-4xl mx-auto mb-10">
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
          className="max-w-2xl text-white/60 font-heading font-light text-lg mb-8"
        >
          High-performance digital experiences engineered for growth. We transform ambitious businesses into market leaders through strategic design and development.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.1 }}
          className="flex flex-col sm:flex-row gap-4 font-heading"
        >
          <a
            href="https://wa.me/919329441312"
            target="_blank"
            rel="noopener noreferrer"
            className="liquid-glass-strong rounded-full px-8 py-4 flex items-center justify-center gap-2 bg-white text-black font-medium hover:bg-white/90 transition-all text-xl"
          >
            Start Your Project
            <ArrowUpRight size={18} />
          </a>
          <a
            href="https://wa.me/919329441312"
            target="_blank"
            rel="noopener noreferrer"
            className="liquid-glass rounded-full px-8 py-4 flex items-center justify-center gap-2 text-white font-medium hover:bg-white/5 transition-all text-xl"
          >
            View Our Services
            <ArrowUpRight size={18} />
          </a>
        </motion.div>
      </div>

      {/* Skills Marquee Section - Positioned below the video fold */}
      <div className="relative z-10 py-24 px-4 text-center bg-black">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="w-full overflow-hidden"
        >
          <div className="liquid-glass rounded-full px-6 py-2 inline-block mb-10">
            <span className="text-xs text-white/70 font-heading uppercase tracking-widest">What we do</span>
          </div>

          <div className="flex flex-col gap-8 w-full">
            {/* Row 1 - Left */}
            <div className="relative flex whitespace-nowrap overflow-hidden">
              <motion.div
                animate={{ x: ["0%", "-50%"] }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="flex items-center"
              >
                {[...Array(2)].map((_, i) => (
                  <div key={i} className="flex items-center">
                    {row1.map((skill) => (
                      <span key={skill} className="text-4xl md:text-6xl italic text-white/90 px-16" style={{ fontFamily: "'Instrument Serif', serif" }}>
                        {skill}
                      </span>
                    ))}
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Row 2 - Right */}
            <div className="relative flex whitespace-nowrap overflow-hidden">
              <motion.div
                animate={{ x: ["-50%", "0%"] }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="flex items-center"
              >
                {[...Array(2)].map((_, i) => (
                  <div key={i} className="flex items-center">
                    {row2.map((skill) => (
                      <span key={skill} className="text-4xl md:text-6xl italic text-white/90 px-16" style={{ fontFamily: "'Instrument Serif', serif" }}>
                        {skill}
                      </span>
                    ))}
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Row 3 - Left */}
            <div className="relative flex whitespace-nowrap overflow-hidden">
              <motion.div
                animate={{ x: ["0%", "-50%"] }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="flex items-center"
              >
                {[...Array(2)].map((_, i) => (
                  <div key={i} className="flex items-center">
                    {row3.map((skill) => (
                      <span key={skill} className="text-4xl md:text-6xl italic text-white/90 px-16" style={{ fontFamily: "'Instrument Serif', serif" }}>
                        {skill}
                      </span>
                    ))}
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
