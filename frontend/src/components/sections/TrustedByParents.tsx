import { motion } from 'framer-motion';

const TrustedByParents = () => {
  // We mock the logos with text for now, but these would ideally be SVGs of known schools/companies
  const logos = [
    "Stanford Alumni", "Google Parents", "Meta Families", "Local School District", "Montessori Academy",
    "Stanford Alumni", "Google Parents", "Meta Families", "Local School District", "Montessori Academy"
  ];

  return (
    <section className="py-12 border-y border-gray-100 bg-white/40 backdrop-blur-sm overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <p className="text-center text-sm font-semibold text-text/50 uppercase tracking-widest">
          Trusted by parents from top organizations
        </p>
      </div>
      
      <div className="relative flex overflow-x-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[hsl(var(--background))] to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[hsl(var(--background))] to-transparent z-10" />
        
        <motion.div 
          className="flex whitespace-nowrap items-center gap-16"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          {logos.map((logo, index) => (
            <span key={index} className="text-xl font-jakarta font-bold text-text/30 mix-blend-multiply px-8">
              {logo}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TrustedByParents;
