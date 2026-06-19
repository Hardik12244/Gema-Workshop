import { useEffect, useRef, useState } from 'react';
import { motion, useInView, animate } from 'framer-motion';
import { Users, Star, Calendar, Cpu } from 'lucide-react';

const CountUp = ({ to, duration = 2 }: { to: number, duration?: number }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, to, {
        duration,
        ease: "easeOut",
        onUpdate(value) {
          setCount(Math.floor(value));
        }
      });
      return () => controls.stop();
    }
  }, [isInView, to, duration]);

  return <span ref={ref}>{count}</span>;
};

const TrustedByParents = () => {
  const stats = [
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      value: 500,
      suffix: "+",
      label: "Students Taught",
      color: "from-primary/20 to-primary/5"
    },
    {
      icon: <Star className="w-8 h-8 text-yellow-accent" />,
      value: 95,
      suffix: "%",
      label: "Parent Satisfaction",
      color: "from-yellow-accent/20 to-yellow-accent/5"
    },
    {
      icon: <Calendar className="w-8 h-8 text-success" />,
      value: 4,
      suffix: " Weeks",
      label: "Live Mentorship",
      color: "from-success/20 to-success/5"
    },
    {
      icon: <Cpu className="w-8 h-8 text-pink-accent" />,
      value: 20,
      suffix: "+",
      label: "Projects Built",
      color: "from-pink-accent/20 to-pink-accent/5"
    }
  ];

  return (
    <section className="py-20 bg-white/40 backdrop-blur-sm relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="relative p-[2px] rounded-3xl overflow-hidden group cursor-pointer"
            >
              {/* Animated Gradient Border */}
              <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-50 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="relative bg-white/90 backdrop-blur-xl h-full p-8 rounded-[22px] flex flex-col items-center text-center shadow-sm">
                <div className="mb-4 transform group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
                  {stat.icon}
                </div>
                <h3 className="text-4xl md:text-5xl font-jakarta font-extrabold text-text mb-2 flex items-center">
                  <CountUp to={stat.value} duration={2.5} />
                  {stat.suffix}
                </h3>
                <p className="text-text-secondary font-medium uppercase tracking-wider text-sm">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedByParents;
