import { motion } from 'framer-motion';
import { Zap, Palette, BarChart3, Shield } from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: 'Days, Not Months',
    description: 'Concept to launch at a pace that redefines fast.',
  },
  {
    icon: Palette,
    title: 'Obsessively Crafted',
    description: 'Every detail considered. Every element refined.',
  },
  {
    icon: BarChart3,
    title: 'Built to Convert',
    description: 'Layouts informed by data. Decisions backed by performance.',
  },
  {
    icon: Shield,
    title: 'Secure by Default',
    description: 'Enterprise-grade protection comes standard.',
  },
];

export default function FeaturesGrid() {
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
            <span className="text-sm text-white/80">Why Us</span>
          </div>
          <h2
            className="text-4xl md:text-5xl lg:text-6xl italic text-white"
            style={{ fontFamily: "'Instrument Serif', serif" }}
          >
            The difference is everything.
          </h2>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="liquid-glass rounded-2xl p-6"
              >
                <div className="liquid-glass-strong rounded-full w-10 h-10 flex items-center justify-center mb-4">
                  <Icon size={20} className="text-white" />
                </div>
                <h3
                  className="text-lg italic text-white mb-2"
                  style={{ fontFamily: "'Instrument Serif', serif" }}
                >
                  {feature.title}
                </h3>
                <p className="text-white/60 font-light text-sm" style={{ fontFamily: "'Barlow', sans-serif" }}>
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
