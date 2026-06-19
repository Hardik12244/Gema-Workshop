import { Bot, Mail, Phone, MapPin, Link as LinkIcon, MessageCircle, Image, Video } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-text text-white/80 pt-20 pb-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2 group inline-block">
              <div className="bg-white/10 p-2 rounded-xl group-hover:bg-white/20 transition-colors">
                <Bot className="w-8 h-8 text-primary" />
              </div>
              <span className="font-jakarta font-extrabold text-2xl tracking-tight text-white">
                Robo<span className="text-primary">Minds</span>
              </span>
            </Link>
            <p className="text-white/60 leading-relaxed max-w-sm">
              Empowering the next generation of innovators with hands-on AI and robotics education that sparks creativity and builds future-proof skills.
            </p>
            <div className="flex items-center space-x-4">
              {[
                { Icon: LinkIcon, url: '/contact' },
                { Icon: MessageCircle, url: '/contact' },
                { Icon: Image, url: '/blog' },
                { Icon: Video, url: '/#projects' }
              ].map(({ Icon, url }, i) => (
                <Link key={i} to={url} className="bg-white/5 p-2 rounded-full hover:bg-primary hover:text-white transition-all">
                  <Icon className="w-5 h-5" />
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-jakarta font-bold text-white text-lg mb-6">Quick Links</h3>
            <ul className="space-y-4">
              {['Home', 'Curriculum', 'Projects', 'Instructors', 'Pricing'].map((item) => (
                <li key={item}>
                  <a href={item === 'Home' ? '/' : `/#${item.toLowerCase()}`} className="hover:text-primary transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-jakarta font-bold text-white text-lg mb-6">Legal</h3>
            <ul className="space-y-4">
              {['Terms of Service', 'Privacy Policy', 'Cookie Policy', 'Refund Policy'].map((item) => (
                <li key={item}>
                  <Link to="/legal" className="hover:text-primary transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-jakarta font-bold text-white text-lg mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <span>123 Innovation Drive,<br />Tech District, CA 94043</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <span>hello@robominds.edu</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-white/40">
            &copy; {new Date().getFullYear()} RoboMinds Education. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm text-white/40">
            <span>Built for the future.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
