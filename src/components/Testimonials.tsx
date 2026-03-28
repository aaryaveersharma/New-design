import { motion } from 'framer-motion';

const testimonials = [
  {
    quote: 'A complete rebuild in five days. The results speak for themselves—our conversion rate has never been higher.',
    name: 'Sarah Chen',
    role: 'CEO, Luminary',
  },
  {
    quote: 'Conversions up 4x in the first month. This is what happens when AI meets design excellence.',
    name: 'Marcus Webb',
    role: 'Head of Growth, Arcline',
  },
  {
    quote: 'They didn\'t just design our site—they understood our brand and elevated it beyond what we imagined.',
    name: 'Elena Voss',
    role: 'Brand Director, Helix',
  },
];

export default function Testimonials() {
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
          <h2
            className="text-4xl md:text-5xl lg:text-6xl text-white font-serif italic"
          >
            Don't take our word for it.
          </h2>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="liquid-glass rounded-2xl p-8"
            >
              <p
                className="text-white/80 font-light text-sm italic mb-6 font-body"
              >
                "{testimonial.quote}"
              </p>
              <div className="font-heading">
                <p className="text-white font-medium text-sm">
                  {testimonial.name}
                </p>
                <p className="text-white/50 font-light text-xs">
                  {testimonial.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
