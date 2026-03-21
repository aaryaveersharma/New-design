import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export default function FeaturesChess() {
  return (
    <section id="about" className="py-24 px-6 md:px-16 lg:px-24 bg-black">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2
            className="text-4xl md:text-5xl lg:text-6xl text-white font-serif italic"
          >
            We're not just developers. We're growth partners.
          </h2>
        </motion.div>

        {/* Row 1: Text Left, Image Right */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          <div>
            <p className="text-white/60 font-light text-lg mb-6 font-body">
              Sovereign Sites was founded on a simple belief: every business deserves a digital presence that works as hard as they do. We combine strategic thinking with technical excellence to create websites that don't just look stunning—they deliver measurable results.
            </p>
            <p className="text-white/60 font-light text-lg mb-8 font-body">
              Our team brings together expertise in design, development, and digital strategy. We've helped startups launch, established brands reinvent themselves, and enterprises scale their digital operations.
            </p>
            <a
              href="https://wa.me/919329441312"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl px-8 py-4 inline-flex items-center gap-2 bg-white text-black font-bold hover:bg-white/90 transition-all text-xl font-heading"
            >
              Work With Us
              <ArrowUpRight size={18} />
            </a>
          </div>
          <div className="liquid-glass rounded-2xl overflow-hidden aspect-square md:aspect-video lg:aspect-square bg-gradient-to-br from-white/10 to-white/5">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=800&fit=crop"
              alt="Team collaboration"
              className="w-full h-full object-cover opacity-80"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
