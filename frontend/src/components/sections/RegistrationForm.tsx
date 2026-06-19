import { useState } from 'react';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { motion } from 'framer-motion';
import { CheckCircle2, Loader2 } from 'lucide-react';

const formSchema = z.object({
  parentName: z.string().min(2, 'Parent name is required'),
  childName: z.string().min(2, 'Child name is required'),
  childAge: z.number().min(8, 'Minimum age is 8').max(16, 'Maximum age is 16'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Valid phone number is required'),
  workshopId: z.string().min(1, 'Please select a workshop')
});

type FormValues = z.infer<typeof formSchema>;

const RegistrationForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const { register, handleSubmit, formState } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    mode: 'onChange',
    defaultValues: {
      workshopId: 'summer-2026'
    }
  });

  const { errors } = formState;

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    
    try {
      const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5001';
      // Submit registration directly
      const response = await fetch(`${API_URL}api/registrations`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      if (response.ok) {
        localStorage.setItem('demo_email', data.email);
        localStorage.setItem('demo_name', data.parentName);
        setIsSuccess(true);
      } else {
        console.error("Registration failed");
        alert("Registration failed. Please try again.");
      }
    } catch (error) {
      console.error("Failed to submit registration", error);
      alert("Error submitting registration");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-32 bg-[hsl(var(--background))] relative overflow-hidden" id="register">
      {/* Background Orbs for Glassmorphism effect */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-accent/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {isSuccess ? (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            className="bg-white/80 backdrop-blur-2xl p-16 rounded-[3rem] shadow-2xl border border-white text-center max-w-2xl mx-auto"
          >
            <div className="w-24 h-24 bg-gradient-to-br from-success to-emerald-400 rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg shadow-success/30">
              <CheckCircle2 className="w-12 h-12 text-white" />
            </div>
            <h3 className="text-4xl font-jakarta font-extrabold mb-4 text-text">Welcome to the Future!</h3>
            <p className="text-text-secondary text-xl mb-10 max-w-lg mx-auto leading-relaxed">
              Your seat is officially secured. We've sent a welcome package and receipt to your email.
            </p>
            <button 
              onClick={() => setIsSuccess(false)}
              className="text-primary font-bold hover:text-primary-dark transition-colors flex items-center justify-center gap-2 mx-auto"
            >
              Enroll another student
            </button>
          </motion.div>
        ) : (
          <div className="flex flex-col lg:flex-row bg-white/70 backdrop-blur-xl rounded-[3rem] shadow-2xl border border-white overflow-hidden">
            
            {/* Left Side: Info & Trust */}
            <div className="w-full lg:w-2/5 bg-gray-900 p-10 md:p-12 text-white flex flex-col justify-between relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent pointer-events-none" />
              
              <div className="relative z-10">
                <h3 className="text-3xl font-jakarta font-extrabold mb-2">Secure Checkout</h3>
                <p className="text-gray-400 mb-10">You're seconds away from transforming their summer.</p>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-5 h-5 text-success" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">Premium Kit Included</h4>
                      <p className="text-gray-400 text-sm">₹5,000 value hardware box.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-5 h-5 text-success" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">100% Refundable</h4>
                      <p className="text-gray-400 text-sm">Up to 7 days before start.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative z-10 mt-12">
                <div className="pt-8 border-t border-white/10">
                  <p className="text-gray-400 text-sm font-medium mb-1">Total investment</p>
                  <p className="text-5xl font-jakarta font-extrabold">₹2,999</p>
                </div>
              </div>
            </div>

            {/* Right Side: Form */}
            <div className="w-full lg:w-3/5 p-10 md:p-12 bg-white">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                
                {/* Floating Label Inputs */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="relative pb-5">
                    <input 
                      {...register('parentName')} 
                      className={`peer w-full px-4 pt-6 pb-2 rounded-2xl bg-gray-50 border ${errors.parentName ? 'border-red-500' : 'border-gray-200'} focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder-transparent`}
                      placeholder="Jane Doe"
                      id="parentName"
                    />
                    <label htmlFor="parentName" className="absolute left-4 top-2 text-xs font-bold text-gray-400 peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-placeholder-shown:font-normal peer-focus:top-2 peer-focus:text-xs peer-focus:font-bold peer-focus:text-primary transition-all cursor-text">Parent's Name</label>
                    {errors.parentName && <p className="text-red-500 text-xs mt-1 absolute bottom-0">{errors.parentName.message}</p>}
                  </div>
                  
                  <div className="relative pb-5">
                    <input 
                      {...register('childName')} 
                      className={`peer w-full px-4 pt-6 pb-2 rounded-2xl bg-gray-50 border ${errors.childName ? 'border-red-500' : 'border-gray-200'} focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder-transparent`}
                      placeholder="Alex Doe"
                      id="childName"
                    />
                    <label htmlFor="childName" className="absolute left-4 top-2 text-xs font-bold text-gray-400 peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-placeholder-shown:font-normal peer-focus:top-2 peer-focus:text-xs peer-focus:font-bold peer-focus:text-primary transition-all cursor-text">Child's Name</label>
                    {errors.childName && <p className="text-red-500 text-xs mt-1 absolute bottom-0">{errors.childName.message}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="relative pb-5">
                    <input 
                      type="number"
                      {...register('childAge', { valueAsNumber: true })} 
                      className={`peer w-full px-4 pt-6 pb-2 rounded-2xl bg-gray-50 border ${errors.childAge ? 'border-red-500' : 'border-gray-200'} focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder-transparent`}
                      placeholder="10"
                      id="childAge"
                    />
                    <label htmlFor="childAge" className="absolute left-4 top-2 text-xs font-bold text-gray-400 peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-placeholder-shown:font-normal peer-focus:top-2 peer-focus:text-xs peer-focus:font-bold peer-focus:text-primary transition-all cursor-text">Child's Age</label>
                    {errors.childAge && <p className="text-red-500 text-xs mt-1 absolute bottom-0">{errors.childAge.message}</p>}
                  </div>

                  <div className="relative pb-5">
                    <select 
                      {...register('workshopId')}
                      className={`peer w-full px-4 pt-6 pb-2 rounded-2xl bg-gray-50 border ${errors.workshopId ? 'border-red-500' : 'border-gray-200'} focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all appearance-none text-text`}
                      id="workshopId"
                    >
                      <option value="summer-2026">Summer Intensive 2026</option>
                      <option value="fall-2026">Fall Weekend Club 2026</option>
                    </select>
                    <label htmlFor="workshopId" className="absolute left-4 top-2 text-xs font-bold text-primary transition-all pointer-events-none">Select Batch</label>
                    {errors.workshopId && <p className="text-red-500 text-xs mt-1 absolute bottom-0">{errors.workshopId.message}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="relative pb-5">
                    <input 
                      type="email"
                      {...register('email')} 
                      className={`peer w-full px-4 pt-6 pb-2 rounded-2xl bg-gray-50 border ${errors.email ? 'border-red-500' : 'border-gray-200'} focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder-transparent`}
                      placeholder="jane@example.com"
                      id="email"
                    />
                    <label htmlFor="email" className="absolute left-4 top-2 text-xs font-bold text-gray-400 peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-placeholder-shown:font-normal peer-focus:top-2 peer-focus:text-xs peer-focus:font-bold peer-focus:text-primary transition-all cursor-text">Email Address</label>
                    {errors.email && <p className="text-red-500 text-xs mt-1 absolute bottom-0">{errors.email.message}</p>}
                  </div>
                  
                  <div className="relative pb-5">
                    <input 
                      {...register('phone')} 
                      className={`peer w-full px-4 pt-6 pb-2 rounded-2xl bg-gray-50 border ${errors.phone ? 'border-red-500' : 'border-gray-200'} focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder-transparent`}
                      placeholder="(555) 123-4567"
                      id="phone"
                    />
                    <label htmlFor="phone" className="absolute left-4 top-2 text-xs font-bold text-gray-400 peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-placeholder-shown:font-normal peer-focus:top-2 peer-focus:text-xs peer-focus:font-bold peer-focus:text-primary transition-all cursor-text">Phone Number</label>
                    {errors.phone && <p className="text-red-500 text-xs mt-1 absolute bottom-0">{errors.phone.message}</p>}
                  </div>
                </div>

                <div className="pt-4 mt-2 border-t border-gray-100">
                  <button 
                    type="submit" 
                    disabled={isSubmitting || !formState.isValid}
                    className="w-full bg-gray-900 hover:bg-black text-white py-4 rounded-2xl font-bold text-lg flex justify-center items-center gap-2 shadow-xl shadow-gray-900/20 disabled:opacity-50 disabled:cursor-not-allowed transition-all hover:-translate-y-1"
                  >
                    {isSubmitting ? <Loader2 className="w-6 h-6 animate-spin" /> : 'Register & Pay ₹2,999'}
                  </button>
                  <p className="text-center text-xs text-gray-400 font-medium mt-4 flex items-center justify-center gap-1">
                    Payments are securely simulated for this demo.
                  </p>
                </div>

              </form>
            </div>

          </div>
        )}
      </div>
    </section>
  );
};

export default RegistrationForm;
