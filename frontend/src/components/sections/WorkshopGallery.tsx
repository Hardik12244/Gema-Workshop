import { motion } from 'framer-motion';

const WorkshopGallery = () => {
  return (
    <section className="py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl mb-4">Inside Our Workshops</h2>
            <p className="text-xl text-text/70">A glimpse into the energy, focus, and joy of building the future.</p>
          </div>
          <button className="magnetic-button text-primary font-bold hover:underline">
            View full gallery &rarr;
          </button>
        </div>
      </div>

      <div className="relative flex gap-6 px-4 sm:px-6 lg:px-8 max-w-[1400px] mx-auto overflow-x-auto pb-8 snap-x">
        {/* We use the same high-quality generated image for demonstration, varying object position to simulate multiple photos */}
        <motion.div 
          className="min-w-[80vw] md:min-w-[600px] h-[400px] rounded-3xl overflow-hidden shadow-xl shrink-0 snap-center"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <img src="/gallery_happy_students.png" className="w-full h-full object-cover" alt="Workshop experience 1" />
        </motion.div>
        
        <motion.div 
          className="min-w-[80vw] md:min-w-[400px] h-[400px] rounded-3xl overflow-hidden shadow-xl shrink-0 snap-center"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <img src="/gallery_happy_students.png" className="w-full h-full object-cover object-right" alt="Workshop experience 2" />
        </motion.div>
        
        <motion.div 
          className="min-w-[80vw] md:min-w-[500px] h-[400px] rounded-3xl overflow-hidden shadow-xl shrink-0 snap-center"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <img src="/gallery_happy_students.png" className="w-full h-full object-cover object-left" alt="Workshop experience 3" />
        </motion.div>
      </div>
    </section>
  );
};

export default WorkshopGallery;
