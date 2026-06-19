import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const Pricing = () => {
  return (
    <section className="py-24 bg-gray-50 relative overflow-hidden" id="pricing">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl mb-6">Simple, Transparent Pricing</h2>
          <p className="text-xl text-text/70">Invest in your child's future. Everything included, no hidden fees.</p>
        </div>

        <div className="max-w-lg mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-xl border-2 border-primary relative"
          >
            <div className="absolute top-0 right-0 bg-primary text-white font-bold px-6 py-2 rounded-bl-2xl rounded-tr-[2.2rem]">
              Most Popular
            </div>
            <h3 className="text-3xl font-jakarta font-bold mb-2">Summer Workshop</h3>
            <p className="text-text/60 mb-8">4-week intensive program</p>
            
            <div className="flex items-baseline gap-2 mb-8">
              <span className="text-5xl font-jakarta font-extrabold">₹2,999</span>
              <span className="text-text/60 font-medium">/ student</span>
            </div>

            <ul className="space-y-4 mb-10">
              {[
                "Full access to 4-week curriculum",
                "Premium take-home robotics kit ($150 value)",
                "Small class sizes (max 10 students)",
                "Weekly parent progress reports",
                "Official completion certificate",
                "Lifetime access to online resources"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="bg-success/10 p-1 rounded-full mt-0.5">
                    <Check className="w-4 h-4 text-success" />
                  </div>
                  <span className="text-text/80">{item}</span>
                </li>
              ))}
            </ul>

            <a href="/register" className="w-full magnetic-button block text-center bg-text text-white py-4 rounded-full font-bold text-lg hover:bg-black transition-colors">
              Enroll Now
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
