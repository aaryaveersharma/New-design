import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export default function FeaturesChess() {
  return (
    <section className="py-24 px-6 md:px-16 lg:px-24 bg-black">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="liquid-glass rounded-full px-4 py-2 mb-6 inline-flex items-center gap-2">
            <span className="text-sm text-white/80">Capabilities</span>
          </div>
          <h2
            className="text-4xl md:text-5xl lg:text-6xl italic text-white"
            style={{ fontFamily: "'Instrument Serif', serif" }}
          >
            Pro features. Zero complexity.
          </h2>
        </motion.div>

        {/* Row 1: Text Left, Image Right */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20"
        >
          <div>
            <h3
              className="text-3xl md:text-4xl italic text-white mb-4"
              style={{ fontFamily: "'Instrument Serif', serif" }}
            >
              Designed to convert. Built to perform.
            </h3>
            <p className="text-white/60 font-light text-lg mb-6" style={{ fontFamily: "'Barlow', sans-serif" }}>
              Every pixel is intentional. Our AI studies what works across thousands of top sites—then builds yours to outperform them all.
            </p>
            <button className="liquid-glass-strong rounded-full px-6 py-3 flex items-center gap-2 text-white font-medium hover:bg-white/10 transition-all">
              Learn more
            </button>
          </div>
          <div className="liquid-glass rounded-2xl overflow-hidden h-80 bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center">
            <div className="text-white/40">Feature Image 1</div>
          </div>
        </motion.div>

        {/* Row 2: Image Left, Text Right */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center lg:flex-row-reverse"
        >
          <div className="liquid-glass rounded-2xl overflow-hidden h-80 bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center lg:order-2">
            <div className="text-white/40">Feature Image 2</div>
          </div>
          <div className="lg:order-1">
            <h3
              className="text-3xl md:text-4xl italic text-white mb-4"
              style={{ fontFamily: "'Instrument Serif', serif" }}
            >
              It gets smarter. Automatically.
            </h3>
            <p className="text-white/60 font-light text-lg mb-6" style={{ fontFamily: "'Barlow', sans-serif" }}>
              Your site evolves on its own. AI monitors every click, scroll, and conversion—then optimizes in real time. No manual updates. Ever.
            </p>
            <button className="liquid-glass-strong rounded-full px-6 py-3 flex items-center gap-2 text-white font-medium hover:bg-white/10 transition-all">
              See how it works
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
