import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const Curriculum = () => {
  const weeks = [
    {
      title: "Week 1: Introduction to AI",
      skills: ["Machine Learning basics", "Neural networks concept", "AI safety & ethics"]
    },
    {
      title: "Week 2: Robotics Fundamentals",
      skills: ["Motors & Sensors", "Microcontrollers", "Basic circuits"]
    },
    {
      title: "Week 3: Building Projects",
      skills: ["Assembly techniques", "Block & Text coding", "Debugging hardware"]
    },
    {
      title: "Week 4: Final Project Showcase",
      skills: ["Presentation skills", "Project deployment", "Competition simulation"]
    }
  ];

  return (
    <section className="py-24 bg-gray-50 relative overflow-hidden" id="curriculum">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <h2 className="text-4xl md:text-5xl mb-6">Comprehensive 4-Week Curriculum</h2>
            <p className="text-xl text-text/70 mb-10">
              Designed by educators and engineers to provide a perfect balance of theory and hands-on practice.
            </p>

            <div className="space-y-6">
              {weeks.map((week, index) => (
                <div key={index} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-jakarta font-bold mb-4 text-primary">{week.title}</h3>
                  <div className="flex flex-wrap gap-3">
                    {week.skills.map((skill, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm text-text/80 bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-100">
                        <CheckCircle2 className="w-4 h-4 text-success" />
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2 relative"
          >
            <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full translate-x-10 translate-y-10" />
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/3] lg:aspect-square">
              <img 
                src="/curriculum_kids_coding.png" 
                alt="Children coding together" 
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Curriculum;
