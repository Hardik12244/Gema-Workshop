import { motion } from 'framer-motion';
import BackgroundSystem from '../components/layout/BackgroundSystem';

const Legal = () => {
  return (
    <div className="relative pt-24 pb-32">
      <BackgroundSystem />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white/80 backdrop-blur-xl p-8 md:p-12 rounded-3xl border border-white/40 shadow-xl"
        >
          <h1 className="text-4xl font-extrabold text-text mb-8">Legal & Policies</h1>
          <div className="space-y-8 text-text/70 leading-relaxed">
            <section>
              <h2 className="text-2xl font-bold text-text mb-4">1. Terms of Service</h2>
              <p>Welcome to RoboMinds. By accessing our platform and participating in our workshops, you agree to abide by these terms. Our content is designed for educational purposes and is protected by copyright laws.</p>
            </section>
            <section>
              <h2 className="text-2xl font-bold text-text mb-4">2. Privacy Policy</h2>
              <p>We take your privacy seriously. We only collect necessary information to provide our services and ensure a safe learning environment for our students. We do not sell your personal data to third parties.</p>
            </section>
            <section>
              <h2 className="text-2xl font-bold text-text mb-4">3. Cookie Policy</h2>
              <p>Our website uses cookies to enhance your browsing experience, analyze site traffic, and serve targeted advertisements. You can manage your cookie preferences through your browser settings.</p>
            </section>
            <section>
              <h2 className="text-2xl font-bold text-text mb-4">4. Refund Policy</h2>
              <p>We offer a 100% money-back guarantee within the first 14 days of any workshop subscription if you or your child are not completely satisfied with the learning experience.</p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Legal;
