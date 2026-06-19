import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "Does my child need prior coding experience?",
      a: "Not at all! Our curriculum is engineered from the ground up for absolute beginners. We begin with intuitive, visual block-based coding and gracefully transition into text-based Python as their confidence grows."
    },
    {
      q: "What age group is this appropriate for?",
      a: "Our core curriculum is meticulously optimized for children aged 8 to 14. We dynamically group students by age and experience level to ensure the pacing is perfect, neither too fast nor too slow."
    },
    {
      q: "Do we need to bring our own laptop?",
      a: "Yes, students should bring a laptop (Windows, Mac, or Chromebook) to interface with the hardware kits. If securing a device is an issue, please contact us—we maintain a limited fleet of loaner machines."
    },
    {
      q: "What happens if we miss a week?",
      a: "No student gets left behind. We provide comprehensive, high-quality video catch-up materials, and our mentors make themselves available 30 minutes before every session to assist with the physical build."
    }
  ];

  return (
    <section className="py-32 bg-white relative overflow-hidden" id="faq">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-gray-50 to-transparent z-0" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-jakarta font-extrabold text-text mb-6 tracking-tight"
          >
            Questions? <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-primary">Answers.</span>
          </motion.h2>
        </div>

        <div className="space-y-6">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`rounded-[2rem] overflow-hidden transition-all duration-500 border ${isOpen ? 'bg-white shadow-2xl border-primary/20 scale-[1.02]' : 'bg-gray-50 border-gray-100 shadow-sm hover:border-gray-200 hover:bg-gray-100/50'}`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full px-8 py-8 text-left flex justify-between items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-2xl"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                  id={`faq-question-${index}`}
                >
                  <span className={`font-jakarta font-extrabold text-xl md:text-2xl pr-8 transition-colors ${isOpen ? 'text-primary' : 'text-text'}`}>
                    {faq.q}
                  </span>
                  <div className={`shrink-0 w-12 h-12 rounded-full flex items-center justify-center transition-colors duration-500 ${isOpen ? 'bg-primary text-white shadow-lg' : 'bg-white text-text shadow-sm border border-gray-100'}`}>
                    {isOpen ? <Minus className="w-6 h-6" aria-hidden="true" /> : <Plus className="w-6 h-6" aria-hidden="true" />}
                  </div>
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                    >
                      <div 
                        id={`faq-answer-${index}`}
                        role="region"
                        aria-labelledby={`faq-question-${index}`}
                        className="px-8 pb-10 pt-2 text-lg text-text-secondary font-medium leading-relaxed"
                      >
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
