import { motion } from 'framer-motion';
import { Globe, Link2, Mail, Medal, Rocket, Briefcase, GraduationCap } from 'lucide-react';

const InstructorSection = () => {
  return (
    <section className="py-32 bg-white relative overflow-hidden" id="instructors">
      {/* Background accents */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-1/3 h-[500px] bg-secondary/10 blur-[150px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-1/3 h-[500px] bg-primary/10 blur-[150px] rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-jakarta font-extrabold text-text mb-6 tracking-tight"
          >
            Mentored by <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Industry Leaders.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-text-secondary font-medium"
          >
            Not just teachers. We are active builders, engineers, and founders who want to pass the torch.
          </motion.p>
        </div>

        {/* Founder Card - Editorial Layout */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[hsl(var(--background))] rounded-[3rem] p-8 md:p-12 shadow-2xl border border-gray-100 relative overflow-hidden group"
        >
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-pink-accent/5 to-transparent pointer-events-none" />
          
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
            
            {/* Left: Premium Photo & Socials */}
            <div className="w-full lg:w-1/3 flex flex-col items-center">
              <div className="relative w-64 h-64 md:w-80 md:h-80 mb-8">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary via-accent to-pink-accent blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500" />
                <img 
                  src="https://i.pravatar.cc/500?img=68" 
                  alt="Founder & Lead Instructor" 
                  className="relative w-full h-full object-cover rounded-full border-8 border-white shadow-2xl z-10 grayscale-[20%] group-hover:grayscale-0 transition-all duration-500"
                />
                
                {/* Floating status */}
                <div className="absolute -bottom-4 right-4 bg-white px-4 py-2 rounded-full shadow-lg border border-gray-100 z-20 flex items-center gap-2">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-success"></span>
                  </span>
                  <span className="text-sm font-bold text-text">Accepting Students</span>
                </div>
              </div>

              <div className="flex justify-center gap-4 w-full">
                <a href="#" className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm border border-gray-100 hover:shadow-md hover:text-primary transition-all hover:-translate-y-1"><Link2 className="w-5 h-5" /></a>
                <a href="#" className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm border border-gray-100 hover:shadow-md hover:text-text transition-all hover:-translate-y-1"><Globe className="w-5 h-5" /></a>
                <a href="#" className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm border border-gray-100 hover:shadow-md hover:text-secondary transition-all hover:-translate-y-1"><Mail className="w-5 h-5" /></a>
              </div>
            </div>

            {/* Right: Rich Bio & Stats */}
            <div className="w-full lg:w-2/3">
              <div className="mb-2">
                <span className="text-primary font-bold tracking-widest uppercase text-sm">Lead Architect & Founder</span>
              </div>
              <h3 className="text-4xl md:text-5xl font-jakarta font-extrabold text-text mb-6">Dr. Alexander Chen</h3>
              
              <p className="text-xl text-text-secondary leading-relaxed mb-10">
                Former NASA JPL Robotics Engineer turned EdTech founder. Alexander has spent the last 10 years building autonomous rovers and is now dedicated to distilling complex engineering into playful, powerful curriculum for the next generation.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm flex gap-4 items-start">
                  <div className="bg-primary/10 p-3 rounded-2xl text-primary mt-1">
                    <Briefcase className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-jakarta font-bold text-lg mb-1">NASA JPL</h4>
                    <p className="text-text-secondary text-sm font-medium">8 Years Lead Eng.</p>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm flex gap-4 items-start">
                  <div className="bg-secondary/10 p-3 rounded-2xl text-secondary mt-1">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-jakarta font-bold text-lg mb-1">Stanford CS</h4>
                    <p className="text-text-secondary text-sm font-medium">Ph.D in Machine Learning</p>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm flex gap-4 items-start">
                  <div className="bg-pink-accent/10 p-3 rounded-2xl text-pink-accent mt-1">
                    <Rocket className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-jakarta font-bold text-lg mb-1">Y-Combinator</h4>
                    <p className="text-text-secondary text-sm font-medium">S24 EdTech Alum</p>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm flex gap-4 items-start">
                  <div className="bg-yellow-accent/20 p-3 rounded-2xl text-yellow-accent mt-1">
                    <Medal className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-jakarta font-bold text-lg mb-1">5,000+ Students</h4>
                    <p className="text-text-secondary text-sm font-medium">Mentored globally</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default InstructorSection;
