import { motion } from 'framer-motion';
import { TrendingUp, Globe2, Lightbulb, Target } from 'lucide-react';

const WhyLearnAIToday = () => {
  const stats = [
    { number: "97M", label: "New AI roles by 2026", icon: <TrendingUp className="text-primary w-6 h-6" /> },
    { number: "80%", label: "Jobs will use AI soon", icon: <Globe2 className="text-secondary w-6 h-6" /> },
    { number: "3x", label: "Better problem solving", icon: <Lightbulb className="text-accent w-6 h-6" /> },
    { number: "100%", label: "Future readiness", icon: <Target className="text-success w-6 h-6" /> }
  ];

  return (
    <section className="py-24 bg-[hsl(var(--text))] text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-10" />
      <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-primary/20 to-transparent blur-[100px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl mb-6 text-white"
            >
              Why Learn AI & Robotics <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Today?</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xl text-white/70 mb-8"
            >
              We're entering an era where understanding machines is as fundamental as reading and writing. Early exposure gives your child a compounding advantage in whatever career they choose.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <button className="magnetic-button bg-white text-text hover:bg-gray-100 px-8 py-4 rounded-full font-bold text-lg">
                Read our Research
              </button>
            </motion.div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white/5 border border-white/10 backdrop-blur-md p-6 rounded-3xl text-center hover:bg-white/10 transition-colors"
              >
                <div className="flex justify-center mb-4">
                  <div className="bg-white/10 p-3 rounded-full">
                    {stat.icon}
                  </div>
                </div>
                <h3 className="text-4xl font-jakarta font-extrabold mb-2">{stat.number}</h3>
                <p className="text-sm text-white/60 font-medium uppercase tracking-wider">{stat.label}</p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyLearnAIToday;
