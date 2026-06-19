import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Users, MapPin, ArrowRight } from 'lucide-react';
import BackgroundSystem from '../components/layout/BackgroundSystem';

const EVENT_CATEGORIES = ['All', 'Robotics', 'Coding', 'AI & Machine Learning'];

const EVENTS_DATA = [
  {
    id: 1,
    title: "Summer Intensive 2026: Robot Build Lab",
    category: "Robotics",
    date: "July 10 - July 24, 2026",
    age: "8-12 years",
    location: "Downtown Innovation Center",
    image: "/hero_new.png",
    color: "primary"
  },
  {
    id: 2,
    title: "Intro to Python & Game Dev",
    category: "Coding",
    date: "August 5 - August 15, 2026",
    age: "10-14 years",
    location: "Virtual Classroom",
    image: "/curriculum_coding.png",
    color: "secondary"
  },
  {
    id: 3,
    title: "AI Ethics & Prompt Engineering",
    category: "AI & Machine Learning",
    date: "September 1 - September 14, 2026",
    age: "12-16 years",
    location: "Virtual Classroom",
    image: "/curriculum_robotics.png",
    color: "accent"
  },
  {
    id: 4,
    title: "Weekend Robot Dog Workshop",
    category: "Robotics",
    date: "October 10, 2026",
    age: "8-14 years",
    location: "Downtown Innovation Center",
    image: "/curriculum_robotics.png",
    color: "yellow-accent"
  }
];

const Events = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredEvents = EVENTS_DATA.filter(event => 
    activeCategory === 'All' || event.category === activeCategory
  );

  return (
    <div className="min-h-screen relative pt-32 pb-24">
      <BackgroundSystem />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-jakarta font-bold mb-6">
            Upcoming <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Workshops & Events</span>
          </h1>
          <p className="text-xl text-text/70">
            Find the perfect learning experience for your child. Filter by topic and register today!
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {EVENT_CATEGORIES.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full font-bold text-sm transition-all ${
                activeCategory === category 
                  ? 'bg-text text-white shadow-lg scale-105'
                  : 'bg-white text-text/60 hover:bg-gray-50 shadow-sm'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredEvents.map(event => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={event.id}
                className="bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100 group flex flex-col sm:flex-row h-full"
              >
                <div className="sm:w-2/5 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10" />
                  <img 
                    src={event.image} 
                    alt={event.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute bottom-4 left-4 z-20">
                    <span className={`bg-${event.color} text-white px-3 py-1 rounded-full text-xs font-bold`}>
                      {event.category}
                    </span>
                  </div>
                </div>

                <div className="p-8 sm:w-3/5 flex flex-col justify-center">
                  <h3 className="text-2xl font-bold font-jakarta mb-4">{event.title}</h3>
                  
                  <div className="space-y-3 mb-8 text-sm font-semibold text-text/70">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-primary" /> {event.date}
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-secondary" /> {event.age}
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-accent" /> {event.location}
                    </div>
                  </div>

                  <a 
                    href="/register"
                    className="mt-auto inline-flex items-center gap-2 text-primary font-bold hover:gap-4 transition-all"
                  >
                    Register Now <ArrowRight className="w-5 h-5" />
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>
    </div>
  );
};

export default Events;
