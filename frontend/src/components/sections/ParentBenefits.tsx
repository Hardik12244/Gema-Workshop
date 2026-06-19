import { motion } from 'framer-motion';
import { Activity, ShieldCheck, Award, TrendingUp, Lightbulb, UserCheck } from 'lucide-react';

const ParentBenefits = () => {
  const benefits = [
    { 
      icon: <Activity className="w-8 h-8 text-primary" />, 
      title: "Weekly Progress Updates", 
      desc: "Receive detailed video reports showing exactly what your child built and learned each week.",
      color: "from-primary/20 to-primary/5 border-primary/20"
    },
    { 
      icon: <ShieldCheck className="w-8 h-8 text-success" />, 
      title: "Safe Online Learning", 
      desc: "A heavily moderated, secure virtual environment led by verified professional instructors.",
      color: "from-success/20 to-success/5 border-success/20"
    },
    { 
      icon: <UserCheck className="w-8 h-8 text-accent" />, 
      title: "Expert Mentors", 
      desc: "Taught by real engineers who know how to inspire and translate complex topics for kids.",
      color: "from-accent/20 to-accent/5 border-accent/20"
    },
    { 
      icon: <Lightbulb className="w-8 h-8 text-yellow-accent" />, 
      title: "Project Based Learning", 
      desc: "No boring lectures. Every concept is taught by building a physical, working prototype.",
      color: "from-yellow-accent/20 to-yellow-accent/5 border-yellow-accent/20"
    },
    { 
      icon: <Award className="w-8 h-8 text-pink-accent" />, 
      title: "Premium Certificate", 
      desc: "A verifiable certificate of completion to boost their future academic portfolios.",
      color: "from-pink-accent/20 to-pink-accent/5 border-pink-accent/20"
    },
    { 
      icon: <TrendingUp className="w-8 h-8 text-secondary" />, 
      title: "Future Ready Skills", 
      desc: "Equipping them with the exact tools (Python, APIs, AI) they will need in 10 years.",
      color: "from-secondary/20 to-secondary/5 border-secondary/20"
    }
  ];

  return (
    <section className="py-32 relative bg-[hsl(var(--background))] overflow-hidden">
      {/* Decorative Blob */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-pink-accent/10 to-transparent rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-jakarta font-extrabold text-text mb-6 tracking-tight"
          >
            Peace of Mind for <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-accent to-orange-400">Parents.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-text-secondary font-medium"
          >
            We handle the heavy lifting so you can simply enjoy watching them grow.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group relative"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${item.color} rounded-3xl transform rotate-1 group-hover:rotate-2 transition-transform duration-300 opacity-50`} />
              <div className="relative bg-white p-8 rounded-3xl border border-gray-100 shadow-xl h-full flex flex-col">
                <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300 shadow-sm border border-gray-100">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-jakarta font-extrabold text-text mb-4">{item.title}</h3>
                <p className="text-lg text-text-secondary font-medium leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ParentBenefits;
