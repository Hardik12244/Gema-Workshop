import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import BackgroundSystem from '../components/layout/BackgroundSystem';
import { Clock } from 'lucide-react';

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Arts & Crafts', 'Kids\' Activities & Play', 'Schools & Education', 'Parenting'];

  const blogPosts = [
    {
      id: 1,
      title: 'The Ultimate DIY Treasure Hunt Ideas for Kids at Home',
      category: 'Kids\' Activities & Play',
      readTime: '19 min read',
      excerpt: 'Turn your home into an adventure! Discover fun DIY treasure hunt ideas for kids with creative clues and exciting challenges.',
      image: '/blog_robot_building.png',
      delay: 0.1
    },
    {
      id: 2,
      title: 'Essential Skills Kids Need Outside the Classroom',
      category: 'Parenting',
      readTime: '21 min read',
      excerpt: 'Discover the top activities that build essential life skills like leadership, creativity, and resilience in children outside school.',
      image: '/blog_parenting_tech.png',
      delay: 0.2
    },
    {
      id: 3,
      title: 'How Schools are Adapting to the AI Revolution',
      category: 'Schools & Education',
      readTime: '15 min read',
      excerpt: 'A look into modern classrooms and how early exposure to AI and coding is fundamentally shifting the way students learn.',
      image: '/blog_classroom_learning.png',
      delay: 0.3
    }
  ];

  const filteredPosts = activeCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory);

  return (
    <div className="relative pt-20 pb-24">
      <BackgroundSystem />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 pt-12">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-extrabold text-primary mb-6"
          >
            Our Blog
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-text/70 max-w-2xl mx-auto"
          >
            Discover the latest articles, tips, and insights about kids' tech education, robotics, and parenting advice.
          </motion.p>
        </div>

        {/* Categories */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-16"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2.5 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category 
                  ? 'bg-primary text-white shadow-md shadow-primary/30' 
                  : 'bg-white text-text/70 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Blog Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredPosts.map((post) => (
              <motion.article
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={post.id}
                className="bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100 group cursor-pointer hover:-translate-y-2 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 flex flex-col"
              >
                <div className="relative h-56 overflow-hidden">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10" />
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                
                <div className="p-8 flex-grow flex flex-col">
                  <div className="flex justify-between items-center mb-4 text-sm font-medium">
                    <span className="text-text/50">{post.category}</span>
                    <span className="text-text/40 flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {post.readTime}
                    </span>
                  </div>
                  
                  <h2 className="text-2xl font-bold font-jakarta text-text mb-4 group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h2>
                  
                  <p className="text-text/70 leading-relaxed mb-6 line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
};

export default Blog;
