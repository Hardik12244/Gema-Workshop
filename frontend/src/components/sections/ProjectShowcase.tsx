import { motion } from 'framer-motion';
import { Clock, BarChart, Code2, PlayCircle } from 'lucide-react';

const ProjectShowcase = () => {
  const projects = [
    {
      title: "Line Following Robot",
      subtitle: "Autonomous navigation using infrared sensors.",
      image: "/projects_robotics_kits.png",
      difficulty: "Beginner",
      buildTime: "4 Hours",
      skills: ["C++", "Sensors", "Motor Logic"],
      span: "md:col-span-2",
      theme: "dark"
    },
    {
      title: "Voice Controlled Robot",
      subtitle: "Navigate via speech recognition.",
      image: "/curriculum_coding.png",
      difficulty: "Intermediate",
      buildTime: "8 Hours",
      skills: ["Python", "Audio Processing", "IoT"],
      span: "md:col-span-1",
      theme: "light"
    },
    {
      title: "Obstacle Avoidance Robot",
      subtitle: "Smart ultrasonic pathfinding.",
      image: "/curriculum_robotics.png",
      difficulty: "Intermediate",
      buildTime: "6 Hours",
      skills: ["C++", "Ultrasonic", "Logic Gates"],
      span: "md:col-span-1",
      theme: "light"
    },
    {
      title: "AI Assistant",
      subtitle: "Hardware meets Large Language Models.",
      image: "/hero_new.png",
      difficulty: "Advanced",
      buildTime: "12 Hours",
      skills: ["Python", "OpenAI API", "React UI"],
      span: "md:col-span-2",
      theme: "dark"
    },
    {
      title: "Smart Home Project",
      subtitle: "Automate environmental controls.",
      image: "/gallery_happy_students.png",
      difficulty: "Intermediate",
      buildTime: "10 Hours",
      skills: ["IoT", "WebSockets", "Electronics"],
      span: "md:col-span-3",
      theme: "dark"
    }
  ];

  return (
    <section className="py-32 relative bg-[hsl(var(--background))]" id="projects">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-jakarta font-extrabold text-text mb-6 tracking-tight"
          >
            Built by <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Students.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-text-secondary font-medium"
          >
            No toy blocks. No pseudo-code. Just real engineering, real hardware, and production-ready APIs.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 auto-rows-[450px]">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative rounded-[2.5rem] overflow-hidden group cursor-pointer shadow-xl ${project.span} ${project.theme === 'dark' ? 'bg-gray-900' : 'bg-white border border-gray-200'}`}
            >
              {/* Image Background */}
              <div className="absolute inset-0 w-full h-full">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className={`w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 ${project.theme === 'light' ? 'opacity-80' : 'opacity-60'}`}
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${project.theme === 'dark' ? 'from-gray-900 via-gray-900/60 to-transparent' : 'from-white via-white/80 to-transparent'}`} />
              </div>

              {/* Content */}
              <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-end">
                <div className={`transform transition-transform duration-500 group-hover:-translate-y-4`}>
                  <h3 className={`text-3xl md:text-4xl font-jakarta font-extrabold tracking-tight mb-2 ${project.theme === 'dark' ? 'text-white' : 'text-text'}`}>
                    {project.title}
                  </h3>
                  <p className={`text-lg font-medium mb-6 ${project.theme === 'dark' ? 'text-gray-300' : 'text-text-secondary'}`}>
                    {project.subtitle}
                  </p>

                  {/* Meta Information */}
                  <div className={`flex flex-wrap gap-4 mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100`}>
                    <div className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-bold backdrop-blur-md ${project.theme === 'dark' ? 'bg-white/10 text-white' : 'bg-black/5 text-text'}`}>
                      <BarChart className="w-4 h-4" /> {project.difficulty}
                    </div>
                    <div className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-bold backdrop-blur-md ${project.theme === 'dark' ? 'bg-white/10 text-white' : 'bg-black/5 text-text'}`}>
                      <Clock className="w-4 h-4" /> {project.buildTime}
                    </div>
                  </div>

                  {/* Skills tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.skills.map((skill, i) => (
                      <span key={i} className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-sm font-semibold backdrop-blur-md transition-colors ${project.theme === 'dark' ? 'bg-black/40 text-gray-200 border border-white/10' : 'bg-white/60 text-text-secondary border border-gray-200'}`}>
                        <Code2 className="w-3.5 h-3.5" />
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Hover Play Button */}
                <div className={`absolute top-8 right-8 opacity-0 scale-50 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500 ${project.theme === 'dark' ? 'text-white' : 'text-text'}`}>
                  <PlayCircle className="w-12 h-12 stroke-1" />
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
