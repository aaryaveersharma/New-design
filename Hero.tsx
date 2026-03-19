import { ArrowUpRight, Play } from 'lucide-react';
import { motion } from 'framer-motion';
import BlurText from './BlurText';

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
      <div className="relative z-10 h-full flex flex-col items-center justify-center pt-32 px-4 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="liquid-glass rounded-full px-4 py-2 mb-8 inline-flex items-center gap-2"
        >
          <div className="w-2 h-2 rounded-full bg-white"></div>
          <span className="text-sm text-white/80">Introducing AI-powered web design.</span>
        </motion.div>

        {/* Main Heading with BlurText */}
        <div className="max-w-5xl mx-auto mb-6">
          <BlurText
            text="The Website Your Brand Deserves"
            className="text-6xl md:text-7xl lg:text-[5.5rem] italic text-white tracking-[-4px]"
            style={{ fontFamily: "'Instrument Serif', serif" }}
            delay={0.2}
          />
        </div>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, filter: 'blur(10px)' }}
          animate={{ opacity: 1, filter: 'blur(0px)' }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="max-w-2xl text-white/60 font-body font-light text-lg mb-12"
        >
          Stunning design. Blazing performance. Built by AI, refined by experts. This is web design, wildly reimagined.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.1 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <button className="liquid-glass-strong rounded-full px-8 py-4 flex items-center justify-center gap-2 bg-white text-black font-medium hover:bg-white/90 transition-all">
            Get Started
            <ArrowUpRight size={18} />
          </button>
          <button className="liquid-glass rounded-full px-8 py-4 flex items-center justify-center gap-2 text-white font-medium hover:bg-white/5 transition-all">
            Watch the Film
            <Play size={18} />
          </button>
        </motion.div>

        {/* Partners Bar at Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.3 }}
          className="mt-auto pb-8 pt-16 text-center"
        >
          <div className="liquid-glass rounded-full px-6 py-2 inline-block mb-6">
            <span className="text-xs text-white/70">Trusted by the teams behind</span>
          </div>
          <div className="flex flex-wrap justify-center gap-12">
            {['Stripe', 'Vercel', 'Linear', 'Notion', 'Figma'].map((partner) => (
              <div key={partner} className="text-2xl md:text-3xl italic text-white" style={{ fontFamily: "'Instrument Serif', serif" }}>
                {partner}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
