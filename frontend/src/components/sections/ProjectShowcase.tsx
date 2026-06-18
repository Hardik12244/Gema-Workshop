import { motion } from 'framer-motion';
import { Settings2, Zap, ShieldAlert, Cpu } from 'lucide-react';

const ProjectShowcase = () => {
  const projects = [
    {
      title: "Line Following Robot",
      icon: <Settings2 className="w-6 h-6 text-primary" />,
      image: "/projects_robotics_kits.png", // Re-using the generated image for all to showcase the kits
      description: "Build a robot that uses IR sensors to follow a complex path autonomously.",
      skills: ["IR Sensors", "Motor Control", "PID Logic"]
    },
    {
      title: "Obstacle Avoidance",
      icon: <ShieldAlert className="w-6 h-6 text-secondary" />,
      image: "/projects_robotics_kits.png",
      description: "Program an ultrasonic sensor-equipped robot to navigate mazes without crashing.",
      skills: ["Ultrasonics", "Spatial Logic", "If-Else Statements"]
    },
    {
      title: "Voice Controlled Bot",
      icon: <Zap className="w-6 h-6 text-accent" />,
      image: "/projects_robotics_kits.png",
      description: "Integrate basic AI voice recognition to command the robot verbally.",
      skills: ["Voice APIs", "Bluetooth", "Event Listeners"]
    },
    {
      title: "Smart Home Automation",
      icon: <Cpu className="w-6 h-6 text-pink-accent" />,
      image: "/projects_robotics_kits.png",
      description: "Create a miniature smart room that responds to environmental changes.",
      skills: ["IoT", "Temp Sensors", "Relays"]
    }
  ];

  return (
    <section className="py-24 relative" id="projects">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl mb-6"
          >
            Build Real, Tangible Projects
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-text/70"
          >
            Every concept learned is immediately applied to building physical robots that students can touch, program, and take home.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-2xl transition-all group"
            >
              <div className="h-48 overflow-hidden relative">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 bg-white/20 backdrop-blur-md p-2 rounded-xl">
                  {project.icon}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-jakarta font-bold mb-3 group-hover:text-primary transition-colors">{project.title}</h3>
                <p className="text-text/70 mb-6 text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.skills.map((skill, i) => (
                    <span key={i} className="text-xs font-semibold bg-gray-100 text-text/60 px-2.5 py-1 rounded-md">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectShowcase;
