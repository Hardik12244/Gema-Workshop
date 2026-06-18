import { motion } from 'framer-motion';
import { BrainCircuit, Rocket, Blocks, Trophy } from 'lucide-react';

const WorkshopHighlights = () => {
  const highlights = [
    {
      icon: <BrainCircuit className="w-8 h-8 text-primary" />,
      title: "Real AI Tools",
      description: "Kids learn to use actual AI models, not just block coding simulations.",
      color: "bg-primary/10 border-primary/20",
      delay: 0
    },
    {
      icon: <Rocket className="w-8 h-8 text-secondary" />,
      title: "Launch Ready",
      description: "Every student builds a working prototype they can take home.",
      color: "bg-secondary/10 border-secondary/20",
      delay: 0.1
    },
    {
      icon: <Blocks className="w-8 h-8 text-pink-accent" />,
      title: "Premium Kits",
      description: "We provide state-of-the-art robotics kits for the best learning experience.",
      color: "bg-pink-accent/10 border-pink-accent/20",
      delay: 0.2
    },
    {
      icon: <Trophy className="w-8 h-8 text-yellow-accent" />,
      title: "Competition Prep",
      description: "Prepares kids for national robotics challenges and hackathons.",
      color: "bg-yellow-accent/10 border-yellow-accent/20",
      delay: 0.3
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl mb-6"
          >
            Not Your Average Summer Camp
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-text/70"
          >
            We've redesigned tech education from the ground up to be engaging, challenging, and incredibly fun.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: item.delay }}
              whileHover={{ y: -10, scale: 1.02 }}
              className={`glassmorphism rounded-3xl p-8 border ${item.color} shadow-lg hover:shadow-xl transition-all`}
            >
              <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center mb-6 shadow-sm">
                {item.icon}
              </div>
              <h3 className="text-2xl font-jakarta font-bold mb-3">{item.title}</h3>
              <p className="text-text/70 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkshopHighlights;
