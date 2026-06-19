import { motion } from 'framer-motion';
import { Gamepad2, Tv, BatteryWarning, Brain, Rocket, Cpu, Lightbulb, TrendingUp, ArrowRight } from 'lucide-react';

const StudentTransformation = () => {
  const beforePoints = [
    { icon: <Tv className="w-5 h-5" />, text: "Passive Screen Time" },
    { icon: <Gamepad2 className="w-5 h-5" />, text: "Endless Gaming" },
    { icon: <BatteryWarning className="w-5 h-5" />, text: "Consumer Mindset" },
    { icon: <Brain className="w-5 h-5" />, text: "No Technical Skills" },
  ];

  const afterPoints = [
    { icon: <Rocket className="w-5 h-5" />, text: "Builds Real Robots" },
    { icon: <Cpu className="w-5 h-5" />, text: "Creates AI Projects" },
    { icon: <Lightbulb className="w-5 h-5" />, text: "Problem Solving" },
    { icon: <TrendingUp className="w-5 h-5" />, text: "Builder Mindset" },
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-jakarta font-extrabold text-text mb-6">
            The Transformation <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-pink-accent">Journey</span>
          </h2>
          <p className="text-xl text-text-secondary font-medium">
            We don't just teach coding. We fundamentally shift how your child interacts with technology.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Arrow bridging the gap on Desktop */}
          <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 bg-white p-4 rounded-full shadow-2xl border-4 border-gray-50">
            <motion.div
              animate={{ x: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <ArrowRight className="w-10 h-10 text-primary" />
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
            {/* Before Card */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white/60 backdrop-blur-md rounded-[2rem] p-8 md:p-12 border border-gray-200 shadow-lg relative overflow-hidden group"
            >
              <div className="absolute top-0 left-0 w-full h-2 bg-gray-300" />
              <h3 className="text-2xl font-bold text-text-secondary mb-8 flex items-center gap-3">
                <span className="bg-gray-100 p-2 rounded-xl text-gray-500">Before</span>
                The Standard Path
              </h3>
              
              <ul className="space-y-6">
                {beforePoints.map((point, idx) => (
                  <motion.li 
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-center gap-4 text-lg text-text/70 font-medium"
                  >
                    <div className="bg-gray-100 p-3 rounded-full text-gray-500">
                      {point.icon}
                    </div>
                    {point.text}
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* After Card */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-[2rem] p-8 md:p-12 border border-white shadow-2xl relative overflow-hidden group hover:shadow-primary/20 transition-shadow duration-500"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary to-accent" />
              
              <h3 className="text-3xl font-jakarta font-extrabold text-text mb-8 flex items-center gap-3 relative z-10">
                <span className="bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm uppercase tracking-wider">After 4 Weeks</span>
              </h3>
              
              <ul className="space-y-6 relative z-10">
                {afterPoints.map((point, idx) => (
                  <motion.li 
                    key={idx}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + (idx * 0.1) }}
                    className="flex items-center gap-4 text-lg font-bold text-text group-hover:translate-x-2 transition-transform duration-300"
                  >
                    <div className="bg-primary/10 p-3 rounded-full text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300 shadow-inner">
                      {point.icon}
                    </div>
                    {point.text}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudentTransformation;
