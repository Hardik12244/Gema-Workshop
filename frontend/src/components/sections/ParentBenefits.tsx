import { motion } from 'framer-motion';
import { Heart, Activity, ShieldCheck, Clock } from 'lucide-react';

const ParentBenefits = () => {
  const benefits = [
    { icon: <Heart className="w-6 h-6 text-pink-accent" />, title: "Quality Bonding Time", desc: "Work on projects together at home." },
    { icon: <Activity className="w-6 h-6 text-primary" />, title: "Track Progress", desc: "Weekly updates on what they've built." },
    { icon: <ShieldCheck className="w-6 h-6 text-success" />, title: "Safe Environment", desc: "Vetted instructors and secure locations." },
    { icon: <Clock className="w-6 h-6 text-secondary" />, title: "Flexible Scheduling", desc: "Weekend and after-school slots available." }
  ];

  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 bg-pink-accent/20 blur-3xl rounded-full -translate-x-10 -translate-y-10" />
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-square">
              <img 
                src="/parent_child_learning.png" 
                alt="Parent and child learning together" 
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl mb-6">Designed with Parents in Mind</h2>
            <p className="text-xl text-text/70 mb-12">
              We know you're busy. That's why we've made the entire process seamless, from registration to seeing the final project.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {benefits.map((item, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-2xl">
                  <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center mb-4">
                    {item.icon}
                  </div>
                  <h3 className="font-jakarta font-bold text-lg mb-2">{item.title}</h3>
                  <p className="text-text/70 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ParentBenefits;
