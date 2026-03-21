import { motion } from 'framer-motion';
import { Code, Layout, TrendingUp, Sparkles } from 'lucide-react';

const features = [
  {
    icon: Code,
    title: 'Web Development',
    description: 'High-performance websites engineered for conversion. From landing pages to complex web applications.',
    tags: ['React', 'Next.js', 'Custom CMS']
  },
  {
    icon: Layout,
    title: 'UI/UX Design',
    description: 'Strategic design that captures attention and drives action. Every pixel serves a purpose.',
    tags: ['Figma', 'Prototyping', 'User Research']
  },
  {
    icon: TrendingUp,
    title: 'SEO & Growth',
    description: 'Data-driven optimization that puts you in front of your ideal customers organically.',
    tags: ['Technical SEO', 'Content Strategy', 'Analytics']
  },
  {
    icon: Sparkles,
    title: 'Brand Identity',
    description: 'Cohesive visual systems that communicate your value and resonate with your audience.',
    tags: ['Logo Design', 'Brand Guidelines', 'Visual Identity']
  },
];

export default function FeaturesGrid() {
  return (
    <section id="services" className="py-24 px-6 md:px-16 lg:px-24 bg-black">
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
            className="text-4xl md:text-5xl lg:text-6xl italic text-white"
            style={{ fontFamily: "'Instrument Serif', serif" }}
          >
            Services that drive real results
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
                <p className="text-white/60 font-light text-sm mb-4" style={{ fontFamily: "'Syne', sans-serif" }}>
                  {feature.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {feature.tags.map((tag) => (
                    <span key={tag} className="text-[10px] uppercase tracking-wider text-white/40 border border-white/10 rounded-full px-2 py-0.5">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
