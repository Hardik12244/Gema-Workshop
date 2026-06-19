import { Link } from 'react-router-dom';
import { Bot, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Events', path: '/events' },
    { name: 'About', path: '/about' },
    { name: 'Blog', path: '/blog' },
    { name: 'Curriculum', path: '/#curriculum' },
    { name: 'Projects', path: '/#projects' },
    { name: 'Pricing', path: '/#pricing' },
    { name: 'FAQ', path: '/#faq' },
    { name: 'Get In Touch', path: '/contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full glassmorphism">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="bg-primary/10 p-2 rounded-xl group-hover:bg-primary/20 transition-colors">
                <Bot className="w-8 h-8 text-primary" />
              </div>
              <span className="font-jakarta font-extrabold text-2xl tracking-tight text-text">
                Robo<span className="text-primary">Minds</span>
              </span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.path}
                className="text-text/70 hover:text-primary font-medium transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Link to="/dashboard" className="text-text/70 hover:text-primary font-medium px-4 py-2 transition-colors">
              Dashboard
            </Link>
            <Link to="/register" className="bg-primary hover:bg-primary/90 text-white px-6 py-2.5 rounded-full font-medium transition-all magnetic-button shadow-primary/25">
              Register Now
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-text p-2">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-100"
          >
            <div className="px-4 pt-2 pb-6 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.path}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-2 text-base font-medium text-text/70 hover:text-primary hover:bg-gray-50 rounded-md"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4 flex flex-col space-y-3">
                <Link
                  to="/dashboard"
                  onClick={() => setIsOpen(false)}
                  className="w-full text-center bg-gray-50 text-text font-medium px-4 py-2.5 rounded-xl border border-gray-200 hover:bg-gray-100"
                >
                  Dashboard
                </Link>
                <Link
                  to="/register"
                  onClick={() => setIsOpen(false)}
                  className="w-full text-center bg-primary text-white px-4 py-2.5 rounded-xl font-medium shadow-md shadow-primary/20 hover:bg-primary/90"
                >
                  Register Now
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
