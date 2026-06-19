import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { BrainCircuit, Bot, RadioTower, Rocket, CheckCircle2 } from 'lucide-react';

const Curriculum = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const weeks = [
    {
      title: "Week 1: AI Foundations",
      description: "Dive into the brain of machines. Students learn how AI models are trained and how to use them safely.",
      icon: <BrainCircuit className="w-8 h-8" />,
      color: "from-primary to-primary-dark",
      textColor: "text-primary-dark",
      bgColor: "bg-primary/10",
      deliverables: ["Train a mini neural net", "Build a smart chatbot", "AI ethics & safety"]
    },
    {
      title: "Week 2: Robotics Fundamentals",
      description: "Physical meets digital. Students assemble their first robot chassis and wire up the basic power systems.",
      icon: <Bot className="w-8 h-8" />,
      color: "from-secondary to-secondary-dark",
      textColor: "text-secondary-dark",
      bgColor: "bg-secondary/10",
      deliverables: ["Assemble robot chassis", "Wire motor drivers", "Understand voltage & current"]
    },
    {
      title: "Week 3: Sensors & Automation",
      description: "Giving the robot senses. We add ultrasonic and infrared sensors so the robot can navigate its environment.",
      icon: <RadioTower className="w-8 h-8" />,
      color: "from-pink-accent to-red-500",
      textColor: "text-pink-accent",
      bgColor: "bg-pink-accent/10",
      deliverables: ["Ultrasonic distance coding", "Line following logic", "Autonomous navigation"]
    },
    {
      title: "Week 4: Capstone Project",
      description: "Bringing it all together. Students integrate the AI brain with the robotic body for their final showcase.",
      icon: <Rocket className="w-8 h-8" />,
      color: "from-yellow-accent to-orange-400",
      textColor: "text-yellow-accent",
      bgColor: "bg-yellow-accent/10",
      deliverables: ["AI voice command integration", "Final testing & debugging", "Project presentation"]
    }
  ];

  return (
    <section className="py-32 relative overflow-hidden bg-white" id="curriculum">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={containerRef}>
        
        <div className="text-center max-w-3xl mx-auto mb-24">
          <h2 className="text-5xl md:text-6xl font-jakarta font-extrabold text-text mb-6 tracking-tight">
            The Masterplan
          </h2>
          <p className="text-xl text-text-secondary font-medium">
            A carefully engineered 4-week progression designed to take absolute beginners to confident builders.
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gray-100 rounded-full -translate-x-1/2"></div>
          <motion.div 
            className="absolute left-8 md:left-1/2 top-0 w-1 bg-gradient-to-b from-primary via-pink-accent to-yellow-accent rounded-full -translate-x-1/2 origin-top"
            style={{ height: lineHeight }}
          />

          <div className="space-y-12 md:space-y-24">
            {weeks.map((week, index) => {
              const isEven = index % 2 === 0;

              return (
                <div key={index} className={`relative flex flex-col md:flex-row items-center gap-8 md:gap-16 ${isEven ? 'md:flex-row-reverse' : ''}`}>
                  
                  {/* Center Node */}
                  <div className="absolute left-8 md:left-1/2 top-8 md:top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                    <motion.div 
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true, margin: "-100px" }}
                      className={`w-16 h-16 rounded-full bg-gradient-to-br ${week.color} p-1 shadow-xl`}
                    >
                      <div className="w-full h-full bg-white rounded-full flex items-center justify-center">
                        <div className={`${week.textColor}`}>
                          {week.icon}
                        </div>
                      </div>
                    </motion.div>
                  </div>

                  {/* Empty space for alternating layout */}
                  <div className="hidden md:block w-1/2" />

                  {/* Content Card */}
                  <motion.div 
                    initial={{ opacity: 0, x: isEven ? 50 : -50, y: 20 }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className={`w-full md:w-1/2 pl-24 md:pl-0 ${isEven ? 'md:pr-16 lg:pr-24' : 'md:pl-16 lg:pl-24'}`}
                  >
                    <div className="bg-white p-8 md:p-10 rounded-[2rem] shadow-xl border border-gray-100 hover:shadow-2xl transition-shadow duration-500 group relative overflow-hidden">
                      <div className={`absolute top-0 left-0 w-full h-2 bg-gradient-to-r ${week.color}`} />
                      <div className={`absolute inset-0 bg-gradient-to-br ${week.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                      
                      <div className={`inline-block px-4 py-2 rounded-xl ${week.bgColor} ${week.textColor} font-bold text-sm mb-6`}>
                        Week {index + 1}
                      </div>
                      
                      <h3 className="text-3xl font-jakarta font-extrabold text-text mb-4 group-hover:text-primary transition-colors">
                        {week.title.split(': ')[1]}
                      </h3>
                      
                      <p className="text-lg text-text-secondary mb-8 leading-relaxed">
                        {week.description}
                      </p>

                      <div className="space-y-4">
                        <h4 className="text-sm font-bold text-text uppercase tracking-wider">Key Deliverables</h4>
                        <ul className="space-y-3">
                          {week.deliverables.map((item, i) => (
                            <li key={i} className="flex items-center gap-3 text-text-secondary font-medium">
                              <CheckCircle2 className={`w-5 h-5 ${week.textColor}`} />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.div>

                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Curriculum;
