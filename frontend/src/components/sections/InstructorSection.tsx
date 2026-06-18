import { motion } from 'framer-motion';
import { Globe, Mail, Link2 } from 'lucide-react';

const InstructorSection = () => {
  const instructors = [
    {
      name: "Dr. Sarah Chen",
      role: "Lead Robotics Instructor",
      bio: "Former NASA JPL engineer. Passionate about bringing aerospace robotics concepts to kids.",
      image: "https://i.pravatar.cc/300?img=47"
    },
    {
      name: "Mark Johnson",
      role: "AI Curriculum Director",
      bio: "Stanford CS grad. Developed AI literacy programs for over 50 schools nationwide.",
      image: "https://i.pravatar.cc/300?img=11"
    },
    {
      name: "Elena Rodriguez",
      role: "Hardware Specialist",
      bio: "Hardware hacker and maker. Loves teaching kids how to solder and build circuits.",
      image: "https://i.pravatar.cc/300?img=5"
    }
  ];

  return (
    <section className="py-24 bg-white" id="instructors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl mb-6"
          >
            Learn from the Best
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-text/70"
          >
            Our instructors aren't just teachers; they're industry professionals who are passionate about passing the torch.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {instructors.map((instructor, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group text-center"
            >
              <div className="relative w-48 h-48 mx-auto mb-6">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-accent blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <img 
                  src={instructor.image} 
                  alt={instructor.name} 
                  className="relative w-full h-full object-cover rounded-full border-4 border-white shadow-xl"
                />
              </div>
              <h3 className="text-2xl font-jakarta font-bold mb-1">{instructor.name}</h3>
              <p className="text-primary font-medium mb-4">{instructor.role}</p>
              <p className="text-text/70 mb-6">{instructor.bio}</p>
              <div className="flex justify-center space-x-4">
                <a href="#" className="text-text/40 hover:text-primary transition-colors"><Globe className="w-5 h-5" /></a>
                <a href="#" className="text-text/40 hover:text-text transition-colors"><Mail className="w-5 h-5" /></a>
                <a href="#" className="text-text/40 hover:text-secondary transition-colors"><Link2 className="w-5 h-5" /></a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstructorSection;
