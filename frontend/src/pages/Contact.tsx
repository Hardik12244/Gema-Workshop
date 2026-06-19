import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { motion, AnimatePresence } from 'framer-motion';
import BackgroundSystem from '../components/layout/BackgroundSystem';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, Loader2 } from 'lucide-react';

const contactSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Valid phone number is required'),
  message: z.string().min(10, 'Message must be at least 10 characters')
});

type ContactFormData = z.infer<typeof contactSchema>;

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const { register, handleSubmit, formState: { errors, isValid }, reset } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    mode: 'onChange'
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    try {
      const response = await fetch('http://localhost:5001/api/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      if (response.ok) {
        setIsSuccess(true);
        reset();
        setTimeout(() => setIsSuccess(false), 5000);
      } else {
        console.error('Failed to submit enquiry');
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative pt-20 pb-24">
      <BackgroundSystem />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl text-text mb-6"
          >
            Contact Us
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-text/70 max-w-2xl mx-auto"
          >
            We'd love to hear from you! Whether you have a question about our events, need help with a booking, or want to partner with us.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Side - Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-4"
          >
            <div className="bg-white/80 backdrop-blur-xl p-8 rounded-3xl border border-white/40 shadow-xl space-y-8">
              <h2 className="text-2xl font-bold font-jakarta border-b border-gray-100 pb-4">Get In Touch</h2>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="bg-primary/10 p-3 rounded-full h-fit">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold font-jakarta text-lg mb-1">Our Location</h3>
                    <p className="text-text/70">Level 20, Tech Tower,<br />Innovation District, CA</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="bg-primary/10 p-3 rounded-full h-fit">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold font-jakarta text-lg mb-1">Phone</h3>
                    <p className="text-text/70">+1 (555) 278-0945</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="bg-primary/10 p-3 rounded-full h-fit">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold font-jakarta text-lg mb-1">Email</h3>
                    <p className="text-text/70">contact@robominds.edu<br />support@robominds.edu</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="bg-primary/10 p-3 rounded-full h-fit">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold font-jakarta text-lg mb-1">Business Hours</h3>
                    <p className="text-text/70">Monday - Friday: 9am - 6pm<br />Saturday: 10am - 4pm<br />Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-8"
          >
            <div className="bg-white/80 backdrop-blur-xl p-8 md:p-12 rounded-3xl border border-white/40 shadow-xl relative overflow-hidden">
              <h2 className="text-2xl font-bold font-jakarta mb-8">Send Us a Message</h2>
              
              <AnimatePresence>
                {isSuccess && (
                  <motion.div 
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="absolute top-0 left-0 right-0 bg-success text-white p-4 text-center font-medium flex items-center justify-center gap-2 z-10"
                  >
                    <CheckCircle2 className="w-5 h-5" />
                    Message sent successfully! We'll get back to you shortly.
                  </motion.div>
                )}
              </AnimatePresence>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-text/80">Your Name *</label>
                    <input 
                      {...register('name')}
                      className={`w-full px-4 py-3 rounded-xl border bg-white/50 focus:bg-white transition-all outline-none focus:ring-2 ${errors.name ? 'border-red-400 focus:ring-red-400/20' : 'border-gray-200 focus:border-primary focus:ring-primary/20'}`}
                      placeholder="John Doe"
                    />
                    {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-text/80">Your Email *</label>
                    <input 
                      {...register('email')}
                      className={`w-full px-4 py-3 rounded-xl border bg-white/50 focus:bg-white transition-all outline-none focus:ring-2 ${errors.email ? 'border-red-400 focus:ring-red-400/20' : 'border-gray-200 focus:border-primary focus:ring-primary/20'}`}
                      placeholder="john@example.com"
                    />
                    {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-text/80">Phone Number *</label>
                  <input 
                    {...register('phone')}
                    className={`w-full px-4 py-3 rounded-xl border bg-white/50 focus:bg-white transition-all outline-none focus:ring-2 ${errors.phone ? 'border-red-400 focus:ring-red-400/20' : 'border-gray-200 focus:border-primary focus:ring-primary/20'}`}
                    placeholder="(555) 123-4567"
                  />
                  {errors.phone && <p className="text-red-500 text-sm">{errors.phone.message}</p>}
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-text/80">Your Message *</label>
                  <textarea 
                    {...register('message')}
                    rows={5}
                    className={`w-full px-4 py-3 rounded-xl border bg-white/50 focus:bg-white transition-all outline-none focus:ring-2 resize-none ${errors.message ? 'border-red-400 focus:ring-red-400/20' : 'border-gray-200 focus:border-primary focus:ring-primary/20'}`}
                    placeholder="How can we help you?"
                  />
                  {errors.message && <p className="text-red-500 text-sm">{errors.message.message}</p>}
                </div>

                <div className="flex justify-end pt-4">
                  <button 
                    type="submit"
                    disabled={isSubmitting || !isValid}
                    className="magnetic-button bg-primary hover:bg-primary/90 text-white px-8 py-3.5 rounded-xl font-bold flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-primary/30 transition-all"
                  >
                    {isSubmitting ? (
                      <><Loader2 className="w-5 h-5 animate-spin" /> Sending...</>
                    ) : (
                      <><Send className="w-5 h-5" /> Send Message</>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
