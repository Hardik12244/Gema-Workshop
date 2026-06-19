import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Star, Users, Award, PlayCircle, CheckCircle2, X } from 'lucide-react';

const HeroSection = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
  };

  const floatingBadgeVariants = {
    initial: { y: 0 },
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut" as const
      }
    }
  };

  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Left Content */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-2xl"
          >
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-6 border border-primary/20">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Summer 2026 Enrollments Open
            </motion.div>
            
            <motion.h1 variants={itemVariants} className="text-5xl md:text-6xl lg:text-[72px] leading-[1.1] mb-6">
              Future-Proof Your Child with <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent">AI & Robotics</span>
            </motion.h1>
            
            <motion.p variants={itemVariants} className="text-xl text-text/70 mb-8 leading-relaxed max-w-xl">
              Turn screen time into skill time. Join our premium hands-on workshops where kids build real robots and learn to code using modern AI tools.
            </motion.p>
            
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 mb-10">
              <a 
                href="/register"
                className="magnetic-button bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center gap-2 shadow-lg shadow-primary/30"
              >
                Claim Your Spot <ArrowRight className="w-5 h-5" />
              </a>
              <button 
                onClick={(e) => { e.preventDefault(); setIsVideoOpen(true); }}
                className="magnetic-button bg-white hover:bg-gray-50 text-text px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center gap-2 shadow-lg shadow-gray-200/50"
              >
                <PlayCircle className="w-5 h-5 text-primary" /> Watch Video
              </button>
            </motion.div>
            
            <motion.div variants={itemVariants} className="flex items-center gap-6 text-sm font-medium text-text/60">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-success" /> No prior coding needed
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-success" /> Ages 8-14 years
              </div>
            </motion.div>
          </motion.div>

          {/* Right Image & Floating Elements */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative lg:h-[600px] flex items-center justify-center"
          >
            {/* Main Image Container */}
            <div className="relative w-full aspect-square md:aspect-[4/3] lg:aspect-auto lg:h-full max-h-[600px] rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent z-10 mix-blend-overlay"></div>
              <img 
                src="/hero_new.png" 
                alt="Enthusiastic kids building a glowing robot" 
                className="w-full h-full object-cover object-center"
              />
            </div>

            {/* Floating Badge 1 */}
            <motion.div 
              variants={floatingBadgeVariants}
              initial="initial"
              animate="animate"
              className="absolute -left-6 top-12 glassmorphism px-6 py-4 rounded-2xl flex items-center gap-4 shadow-xl z-20"
            >
              <div className="bg-yellow-accent/20 p-3 rounded-full text-yellow-accent">
                <Star className="w-6 h-6 fill-current" />
              </div>
              <div>
                <p className="font-jakarta font-extrabold text-2xl text-text">4.9/5</p>
                <p className="text-sm font-medium text-text/60">Parent Rating</p>
              </div>
            </motion.div>

            {/* Floating Badge 2 */}
            <motion.div 
              variants={floatingBadgeVariants}
              initial="initial"
              animate="animate"
              style={{ animationDelay: '1s' }}
              className="absolute -right-8 bottom-24 glassmorphism px-6 py-4 rounded-2xl flex items-center gap-4 shadow-xl z-20"
            >
              <div className="bg-success/20 p-3 rounded-full text-success">
                <Users className="w-6 h-6" />
              </div>
              <div>
                <p className="font-jakarta font-extrabold text-2xl text-text">500+</p>
                <p className="text-sm font-medium text-text/60">Happy Students</p>
              </div>
            </motion.div>

            {/* Floating Badge 3 */}
            <motion.div 
              variants={floatingBadgeVariants}
              initial="initial"
              animate="animate"
              style={{ animationDelay: '2s' }}
              className="absolute left-1/2 -bottom-6 -translate-x-1/2 glassmorphism px-6 py-4 rounded-2xl flex items-center gap-4 shadow-xl z-20"
            >
              <div className="bg-accent/20 p-3 rounded-full text-accent">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <p className="font-jakarta font-extrabold text-text">Project Certificate</p>
                <p className="text-sm font-medium text-text/60">Awarded upon completion</p>
              </div>
            </motion.div>

          </motion.div>

        </div>
      </div>

      <AnimatePresence>
        {isVideoOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsVideoOpen(false)}
              className="absolute inset-0 bg-text/80 backdrop-blur-sm cursor-pointer"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-4xl bg-white rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-video z-10"
            >
              <button 
                onClick={() => setIsVideoOpen(false)}
                className="absolute top-4 right-4 bg-white/50 hover:bg-white p-2 rounded-full backdrop-blur-md z-20 transition-colors"
              >
                <X className="w-6 h-6 text-text" />
              </button>
              
              <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
                <img src="/testimonial_poster.png" alt="Testimonial" className="absolute inset-0 w-full h-full object-cover opacity-60" />
                <div className="relative text-center">
                  <PlayCircle className="w-20 h-20 text-primary mx-auto mb-4 bg-white/90 rounded-full p-2 shadow-xl cursor-pointer hover:scale-110 transition-transform" />
                  <p className="text-xl md:text-2xl font-bold font-jakarta text-text bg-white/90 px-6 py-3 rounded-full backdrop-blur-md shadow-lg">
                    "My child hasn't stopped talking about the robot they built!"
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default HeroSection;
