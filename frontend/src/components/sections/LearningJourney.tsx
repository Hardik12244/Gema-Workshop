import { motion } from 'framer-motion';
import { useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const LearningJourney = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const steps = [
    { num: "01", title: "Discovery", desc: "Understanding the basics of AI and how machines learn." },
    { num: "02", title: "Mechanics", desc: "Building the physical body of the robot using modular components." },
    { num: "03", title: "Programming", desc: "Writing code to give the robot commands and logic." },
    { num: "04", title: "Integration", desc: "Combining hardware and software to bring the robot to life." }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50" id="curriculum" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl mb-6">The Learning Journey</h2>
          <p className="text-xl text-text/70 max-w-2xl mx-auto">
            A step-by-step approach that transforms beginners into confident creators.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Animated Line */}
          <div className="absolute left-[40px] md:left-1/2 top-0 bottom-0 w-1 bg-gray-100 rounded-full md:-translate-x-1/2" />
          <motion.div 
            className="absolute left-[40px] md:left-1/2 top-0 w-1 bg-gradient-to-b from-primary to-accent rounded-full md:-translate-x-1/2 origin-top"
            style={{ height: lineHeight }}
          />

          <div className="space-y-12 md:space-y-24">
            {steps.map((step, index) => (
              <div key={index} className={`relative flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                {/* Timeline Dot */}
                <div className="absolute left-[40px] md:left-1/2 w-6 h-6 rounded-full bg-white border-4 border-primary z-10 -translate-x-[10px] md:-translate-x-1/2 shadow-[0_0_0_4px_rgba(255,255,255,1)]" />
                
                <div className="w-full md:w-1/2 pl-20 md:pl-0 md:pr-16 flex md:justify-end text-left md:text-right">
                  <motion.div 
                    initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className={`bg-gray-50 p-8 rounded-3xl w-full hover:shadow-xl transition-shadow ${index % 2 === 0 ? 'md:text-left md:ml-16' : ''}`}
                  >
                    <span className="text-5xl font-jakarta font-extrabold text-gray-200 block mb-4">{step.num}</span>
                    <h3 className="text-2xl font-jakarta font-bold mb-3">{step.title}</h3>
                    <p className="text-text/70">{step.desc}</p>
                  </motion.div>
                </div>
                <div className="hidden md:block w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LearningJourney;
