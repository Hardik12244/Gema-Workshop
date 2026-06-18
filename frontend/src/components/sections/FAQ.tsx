import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "Does my child need prior coding experience?",
      a: "Not at all! Our curriculum is designed for absolute beginners. We start with block-based coding and gradually introduce text-based concepts as they get comfortable."
    },
    {
      q: "What age group is this appropriate for?",
      a: "Our core workshops are optimized for children aged 8 to 14. We group students by age and experience level to ensure the pacing is right for everyone."
    },
    {
      q: "Do we need to bring our own laptop?",
      a: "Yes, students should bring a laptop (Windows, Mac, or Chromebook) to connect to the robotics kits. If this is an issue, please contact us as we have a limited number of loaner laptops."
    },
    {
      q: "What happens if we miss a week?",
      a: "We provide comprehensive online catch-up materials, and instructors are available 30 minutes before the next class to help students catch up on the physical build."
    }
  ];

  return (
    <section className="py-24 bg-white" id="faq">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-6">Frequently Asked Questions</h2>
          <p className="text-xl text-text/70">Everything you need to know about the workshops.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-50 rounded-2xl overflow-hidden border border-gray-100"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-6 text-left flex justify-between items-center focus:outline-none"
              >
                <span className="font-jakarta font-bold text-lg">{faq.q}</span>
                <ChevronDown 
                  className={`w-5 h-5 text-text/50 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`} 
                />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-6 text-text/70 leading-relaxed">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
