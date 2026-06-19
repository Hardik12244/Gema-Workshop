import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Trophy } from 'lucide-react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      quote: "My son used to spend all weekend playing games. Now he spends it programming the robot he built here. The transformation is absolutely incredible.",
      parentName: "Sarah M.",
      childName: "Leo",
      age: 10,
      achievement: "Built a fully autonomous maze-solving rover.",
      parentImage: "https://i.pravatar.cc/300?img=44",
      childImage: "https://i.pravatar.cc/300?img=11",
      rating: 5,
      color: "from-primary to-accent"
    },
    {
      quote: "I was worried it would be too advanced, but the instructors break it down perfectly. The smile on her face when her robot first moved was priceless.",
      parentName: "David L.",
      childName: "Emma",
      age: 8,
      achievement: "Programmed a voice-controlled LED display.",
      parentImage: "https://i.pravatar.cc/300?img=60",
      childImage: "https://i.pravatar.cc/300?img=5",
      rating: 5,
      color: "from-secondary to-success"
    },
    {
      quote: "The best investment we've made in our child's education. The premium kits and the modern curriculum are exactly what we were looking for to prepare him.",
      parentName: "Emily R.",
      childName: "James",
      age: 12,
      achievement: "Integrated OpenAI API into a smart speaker.",
      parentImage: "https://i.pravatar.cc/300?img=49",
      childImage: "https://i.pravatar.cc/300?img=12",
      rating: 5,
      color: "from-pink-accent to-yellow-accent"
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-32 relative bg-[hsl(var(--background))] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-jakarta font-extrabold text-text mb-6 tracking-tight"
          >
            Loved by <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-primary">Families.</span>
          </motion.h2>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Controls */}
          <div className="absolute top-1/2 -translate-y-1/2 -left-4 md:-left-12 z-20">
            <button onClick={prevSlide} className="w-12 h-12 bg-white rounded-full shadow-lg border border-gray-100 flex items-center justify-center hover:scale-110 hover:text-primary transition-all">
              <ChevronLeft className="w-6 h-6" />
            </button>
          </div>
          <div className="absolute top-1/2 -translate-y-1/2 -right-4 md:-right-12 z-20">
            <button onClick={nextSlide} className="w-12 h-12 bg-white rounded-full shadow-lg border border-gray-100 flex items-center justify-center hover:scale-110 hover:text-primary transition-all">
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          <div className="relative h-auto md:h-[500px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50, scale: 0.95 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -50, scale: 0.95 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="absolute inset-0 bg-white rounded-[3rem] shadow-2xl border border-gray-100 overflow-hidden flex flex-col md:flex-row h-full"
              >
                {/* Left Content */}
                <div className="w-full md:w-3/5 p-10 md:p-16 flex flex-col justify-center relative">
                  <div className="absolute top-8 left-16 text-9xl text-gray-100 font-serif leading-none select-none pointer-events-none -translate-y-4">"</div>
                  
                  <div className="flex gap-1 mb-8 relative z-10 text-yellow-accent">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <Star key={i} className="w-6 h-6 fill-current" />
                    ))}
                  </div>

                  <p className="text-2xl md:text-3xl font-jakarta font-bold text-text mb-10 leading-snug relative z-10">
                    {testimonials[currentIndex].quote}
                  </p>

                  <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 relative z-10">
                    <div className="flex items-center gap-3 text-success font-bold mb-2">
                      <Trophy className="w-5 h-5" /> Post-Workshop Achievement:
                    </div>
                    <p className="text-text-secondary font-medium">{testimonials[currentIndex].achievement}</p>
                  </div>
                </div>

                {/* Right Visual Collage */}
                <div className={`w-full md:w-2/5 relative min-h-[300px] md:min-h-full bg-gradient-to-br ${testimonials[currentIndex].color} flex items-center justify-center p-8`}>
                  <div className="absolute inset-0 bg-black/10 mix-blend-overlay" />
                  
                  {/* Photo Collage */}
                  <div className="relative w-full aspect-square max-w-[300px]">
                    {/* Parent Photo */}
                    <motion.div 
                      initial={{ opacity: 0, y: 20, rotate: -10 }}
                      animate={{ opacity: 1, y: 0, rotate: -5 }}
                      transition={{ delay: 0.2 }}
                      className="absolute top-0 left-0 w-2/3 aspect-square bg-white p-2 rounded-2xl shadow-xl z-10"
                    >
                      <img src={testimonials[currentIndex].parentImage} className="w-full h-full object-cover rounded-xl grayscale-[20%]" alt="Parent" />
                      <div className="absolute -bottom-4 -left-4 bg-white px-4 py-2 rounded-xl shadow-lg border border-gray-100 font-bold text-sm">
                        {testimonials[currentIndex].parentName}
                      </div>
                    </motion.div>

                    {/* Child Photo */}
                    <motion.div 
                      initial={{ opacity: 0, y: -20, rotate: 10 }}
                      animate={{ opacity: 1, y: 0, rotate: 5 }}
                      transition={{ delay: 0.3 }}
                      className="absolute bottom-0 right-0 w-2/3 aspect-square bg-white p-2 rounded-2xl shadow-xl z-20"
                    >
                      <img src={testimonials[currentIndex].childImage} className="w-full h-full object-cover rounded-xl" alt="Child" />
                      <div className="absolute -top-4 -right-4 bg-white px-4 py-2 rounded-xl shadow-lg border border-gray-100 font-bold text-sm">
                        {testimonials[currentIndex].childName}, {testimonials[currentIndex].age}
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
            
            {/* Height placeholder for absolute positioning */}
            <div className="h-[750px] md:h-[500px]" />
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-3 mt-10">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`w-3 h-3 rounded-full transition-all ${i === currentIndex ? 'bg-primary w-8' : 'bg-gray-300'}`}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Testimonials;
