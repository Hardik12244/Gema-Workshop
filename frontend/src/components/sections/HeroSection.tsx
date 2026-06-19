import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Star, Users, Award, PlayCircle, CheckCircle2, X, ChevronRight, Rocket, ShieldCheck, GraduationCap, Cpu } from 'lucide-react';

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
            className="max-w-2xl relative z-20"
          >
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 backdrop-blur-md shadow-sm border border-gray-200 text-primary-dark font-bold text-sm mb-8">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-success"></span>
              </span>
              Summer 2026 Batch Filling Fast
            </motion.div>
            
            <motion.h1 variants={itemVariants} className="text-6xl md:text-7xl lg:text-[84px] font-jakarta font-extrabold tracking-tight leading-[1.05] mb-8 text-text">
              Build Robots.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Create AI.</span><br />
              Shape The Future.
            </motion.h1>
            
            <motion.p variants={itemVariants} className="text-xl md:text-2xl text-text-secondary font-medium mb-10 leading-relaxed max-w-xl">
              Watch your child transform from a technology consumer into a technology creator. Premium hands-on learning for ages 8-14.
            </motion.p>
            
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-5 mb-12">
              <a 
                href="/register"
                className="magnetic-button bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center gap-2 shadow-xl shadow-primary/40 group"
              >
                Reserve Seat <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="#curriculum"
                className="magnetic-button bg-white hover:bg-gray-50 text-text px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center gap-2 shadow-lg shadow-gray-200/50 border border-gray-100"
              >
                Explore Curriculum <ChevronRight className="w-5 h-5 text-primary" />
              </a>
            </motion.div>
            
            <motion.div variants={itemVariants} className="grid grid-cols-2 gap-4 text-sm font-semibold text-text-secondary">
              <div className="flex items-center gap-2">
                <div className="bg-primary/10 p-1.5 rounded-md"><GraduationCap className="w-4 h-4 text-primary" /></div>
                4 Week Program
              </div>
              <div className="flex items-center gap-2">
                <div className="bg-success/10 p-1.5 rounded-md"><Users className="w-4 h-4 text-success" /></div>
                Live Mentorship
              </div>
              <div className="flex items-center gap-2">
                <div className="bg-pink-accent/10 p-1.5 rounded-md"><Rocket className="w-4 h-4 text-pink-accent" /></div>
                Real Projects
              </div>
              <div className="flex items-center gap-2">
                <div className="bg-yellow-accent/20 p-1.5 rounded-md"><ShieldCheck className="w-4 h-4 text-yellow-accent" /></div>
                Certificate Included
              </div>
            </motion.div>
          </motion.div>

          {/* Right Image & Floating Elements - Premium Layout */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative lg:h-[700px] flex items-center justify-center"
          >
            {/* Glowing Backdrop */}
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 via-secondary/20 to-pink-accent/20 rounded-full blur-[100px] z-0" />

            {/* Main Centerpiece Image */}
            <div className="relative w-[85%] aspect-[4/5] md:aspect-[3/4] lg:h-[80%] rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white/80 backdrop-blur-sm z-10 hover:shadow-primary/20 transition-shadow duration-500">
              <img 
                src="/hero_new.png" 
                alt="Enthusiastic kids building a glowing robot" 
                className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              
              <button 
                onClick={() => setIsVideoOpen(true)}
                className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-md px-6 py-3 rounded-full flex items-center gap-3 font-bold text-text hover:bg-white transition-colors shadow-xl hover:scale-105 active:scale-95"
              >
                <PlayCircle className="w-6 h-6 text-primary" />
                See them in action
              </button>
            </div>

            {/* Floating Component 1: Code Snippet */}
            <motion.div 
              variants={floatingBadgeVariants}
              initial="initial"
              animate="animate"
              className="absolute -left-12 top-[15%] bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-xl z-20 border border-white max-w-[200px]"
            >
              <div className="flex items-center gap-2 mb-2 pb-2 border-b border-gray-100">
                <Cpu className="w-4 h-4 text-accent" />
                <span className="text-xs font-bold text-text">AI.init()</span>
              </div>
              <div className="space-y-1.5">
                <div className="w-full h-2 bg-gray-200 rounded-full"></div>
                <div className="w-3/4 h-2 bg-primary/40 rounded-full"></div>
                <div className="w-5/6 h-2 bg-gray-200 rounded-full"></div>
              </div>
            </motion.div>

            {/* Floating Component 2: Project Certificate Mini */}
            <motion.div 
              variants={floatingBadgeVariants}
              initial="initial"
              animate="animate"
              style={{ animationDelay: '1.5s' }}
              className="absolute -right-8 top-[30%] bg-gradient-to-br from-white to-gray-50 p-5 rounded-2xl shadow-2xl z-20 border border-white"
            >
              <div className="flex items-center gap-3">
                <div className="bg-yellow-accent/20 p-3 rounded-full text-yellow-accent">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-jakarta font-extrabold text-text leading-tight">Master<br/>Builder</p>
                  <p className="text-[10px] font-bold text-success uppercase tracking-wider mt-1">Certified</p>
                </div>
              </div>
            </motion.div>

            {/* Floating Component 3: Parent Rating */}
            <motion.div 
              variants={floatingBadgeVariants}
              initial="initial"
              animate="animate"
              style={{ animationDelay: '3s' }}
              className="absolute -left-4 bottom-[20%] glassmorphism px-5 py-4 rounded-2xl flex flex-col gap-1 shadow-xl z-20 border border-white"
            >
              <div className="flex gap-1 mb-1">
                {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 fill-yellow-accent text-yellow-accent" />)}
              </div>
              <p className="font-jakarta font-bold text-sm text-text">"Best summer ever."</p>
              <p className="text-xs font-medium text-text-secondary">— Sarah, Parent</p>
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
