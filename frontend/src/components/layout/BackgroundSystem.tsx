import { motion } from 'framer-motion';
import { Cog, Cpu, Network, Sparkles, Binary, Zap, Code2 } from 'lucide-react';

const BackgroundSystem = () => {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none bg-[hsl(var(--background))]">
      {/* Dynamic Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] mask-image-linear-gradient" />

      {/* Glowing Orbs */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.15, 0.1],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] rounded-full bg-primary/30 blur-[120px]"
      />
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.08, 0.12, 0.08],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-[-20%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-secondary/20 blur-[150px]"
      />
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.05, 0.1, 0.05],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 5 }}
        className="absolute top-[40%] left-[60%] w-[30vw] h-[30vw] rounded-full bg-pink-accent/20 blur-[120px]"
      />

      {/* Floating Elements / Tech Doodles (Opacity 3-8%) */}
      <div className="absolute inset-0 opacity-[0.04]">
        <motion.div animate={{ rotate: 360 }} transition={{ duration: 50, repeat: Infinity, ease: "linear" }} className="absolute top-[15%] left-[10%]">
          <Cog size={120} strokeWidth={1} />
        </motion.div>
        
        <motion.div animate={{ y: [0, -30, 0] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }} className="absolute top-[25%] right-[15%]">
          <Network size={160} strokeWidth={1} />
        </motion.div>
        
        <motion.div animate={{ y: [0, 40, 0], rotate: [0, 10, 0] }} transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }} className="absolute bottom-[20%] left-[20%]">
          <Cpu size={180} strokeWidth={1} />
        </motion.div>
        
        <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} className="absolute top-[60%] right-[10%]">
          <Sparkles size={80} strokeWidth={1} />
        </motion.div>

        <motion.div animate={{ rotate: -360 }} transition={{ duration: 60, repeat: Infinity, ease: "linear" }} className="absolute bottom-[10%] right-[30%]">
          <Cog size={80} strokeWidth={1} />
        </motion.div>
        
        <motion.div animate={{ y: [0, -20, 0] }} transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }} className="absolute top-[45%] left-[5%]">
          <Binary size={100} strokeWidth={1} />
        </motion.div>

        <motion.div animate={{ rotate: [0, -15, 0] }} transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }} className="absolute top-[10%] left-[45%]">
          <Zap size={90} strokeWidth={1} />
        </motion.div>
        
        <motion.div animate={{ y: [0, 25, 0] }} transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }} className="absolute bottom-[40%] right-[45%]">
          <Code2 size={110} strokeWidth={1} />
        </motion.div>
      </div>
      
      {/* Blueprint/Circuit paths using SVG and Mathematical formulas */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
        <path d="M 0 200 C 300 200, 400 400, 800 300 S 1200 600, 1600 500" fill="transparent" stroke="currentColor" strokeWidth="2" strokeDasharray="10 10" />
        <path d="M 1600 800 C 1200 800, 1000 600, 600 700 S 200 400, 0 500" fill="transparent" stroke="currentColor" strokeWidth="2" strokeDasharray="5 15" />
        <circle cx="800" cy="300" r="8" fill="currentColor" />
        <circle cx="600" cy="700" r="8" fill="currentColor" />
        
        {/* Math Formulas & Tech Notes */}
        <text x="10%" y="30%" fill="currentColor" fontSize="24" fontFamily="monospace" transform="rotate(-15, 100, 300)">E = mc²</text>
        <text x="75%" y="20%" fill="currentColor" fontSize="20" fontFamily="monospace" transform="rotate(10, 800, 200)">f(x) = ∫e^x dx</text>
        <text x="80%" y="80%" fill="currentColor" fontSize="18" fontFamily="monospace" transform="rotate(-5, 1200, 800)">∇ × E = -∂B/∂t</text>
        <text x="20%" y="75%" fill="currentColor" fontSize="16" fontFamily="monospace" transform="rotate(20, 300, 700)">// Init Servo Motor</text>
      </svg>
    </div>
  );
};

export default BackgroundSystem;
