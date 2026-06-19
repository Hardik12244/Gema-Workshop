import { motion } from 'framer-motion';
import BackgroundSystem from '../components/layout/BackgroundSystem';
import InstructorSection from '../components/sections/InstructorSection';
import { Target, Heart, Lightbulb } from 'lucide-react';

const About = () => {
  return (
    <div className="relative pt-20">
      <BackgroundSystem />
      
      {/* Hero Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl mb-6"
          >
            Empowering the Next Generation of <span className="text-primary block mt-2">Innovators & Creators</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-text/70 max-w-3xl mx-auto"
          >
            We believe that every child has the potential to build the future. Our mission is to make advanced concepts like AI and Robotics accessible, fun, and engaging for kids everywhere.
          </motion.p>
        </div>
      </section>

      {/* Our Story / Mission */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-10" />
                <img 
                  src="/about_mission.png" 
                  alt="Educator and student" 
                  className="w-full h-[500px] object-cover"
                />
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-4xl mb-4">Our Story</h2>
                <p className="text-lg text-text/70 leading-relaxed">
                  RoboMinds was founded by a group of engineers and educators who noticed a massive gap in traditional education. While the world was rapidly advancing into the age of AI, our classrooms were being left behind. We decided to bridge that gap.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-xl mt-1">
                    <Target className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold font-jakarta mb-2">Our Mission</h3>
                    <p className="text-text/70">To demystify complex technology and turn passive consumers of technology into active creators.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-pink-accent/10 p-3 rounded-xl mt-1">
                    <Heart className="w-6 h-6 text-pink-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold font-jakarta mb-2">Our Values</h3>
                    <p className="text-text/70">We prioritize hands-on learning, inclusivity, and fostering a growth mindset where mistakes are celebrated as learning opportunities.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-yellow-accent/10 p-3 rounded-xl mt-1">
                    <Lightbulb className="w-6 h-6 text-yellow-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold font-jakarta mb-2">Our Vision</h3>
                    <p className="text-text/70">A world where every child is fluent in the language of the future, equipped to solve tomorrow's challenges.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Team */}
      <InstructorSection />
    </div>
  );
};

export default About;
