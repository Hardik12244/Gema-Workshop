import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      text: "My son used to spend all weekend playing games. Now he spends it programming the robot he built here. The transformation is incredible.",
      author: "Sarah M.",
      role: "Parent of 10yo",
      rating: 5
    },
    {
      text: "I was worried it would be too advanced, but the instructors break it down perfectly. The smile on her face when her robot first moved was priceless.",
      author: "David L.",
      role: "Parent of 8yo",
      rating: 5
    },
    {
      text: "The best investment we've made in our child's education. The premium kits and the modern curriculum are exactly what we were looking for.",
      author: "Emily R.",
      role: "Parent of 12yo",
      rating: 5
    }
  ];

  return (
    <section className="py-24 bg-[hsl(var(--background))] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl mb-6">Loved by Parents & Kids</h2>
          <p className="text-xl text-text/70">Join hundreds of families who have already discovered the joy of building the future together.</p>
        </div>

        <div className="flex overflow-x-auto gap-6 pb-8 snap-x px-4 sm:px-0">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="min-w-[320px] md:min-w-[400px] bg-white p-8 rounded-3xl shadow-sm border border-gray-100 snap-center"
            >
              <div className="flex gap-1 mb-6 text-yellow-accent">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <p className="text-lg text-text/80 font-medium mb-8 leading-relaxed">
                "{testimonial.text}"
              </p>
              <div>
                <p className="font-jakarta font-bold">{testimonial.author}</p>
                <p className="text-text/50 text-sm">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
