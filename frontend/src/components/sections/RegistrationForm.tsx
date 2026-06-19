import { useState } from 'react';
import { useAuth, SignInButton } from '@clerk/clerk-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { motion } from 'framer-motion';
import { CheckCircle2, Loader2 } from 'lucide-react';

const formSchema = z.object({
  parentName: z.string().min(2, 'Parent name is required'),
  childName: z.string().min(2, 'Child name is required'),
  childAge: z.coerce.number().min(8, 'Minimum age is 8').max(16, 'Maximum age is 16'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Valid phone number is required'),
  workshopId: z.string().min(1, 'Please select a workshop')
});

type FormValues = z.infer<typeof formSchema>;

const RegistrationForm = () => {
  const { getToken, isSignedIn } = useAuth();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      workshopId: 'summer-2026'
    }
  });

  const onSubmit = async (data: FormValues) => {
    if (!isSignedIn) return;
    setIsSubmitting(true);
    try {
      const token = await getToken();
      const response = await fetch('http://localhost:5001/api/registrations', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(data)
      });
      
      if (response.ok) {
        setIsSuccess(true);
      } else {
        // Handle error visually if needed
        console.error("Failed to register");
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-24 bg-gray-50 relative overflow-hidden" id="register">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {isSuccess ? (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white p-12 rounded-[2rem] shadow-xl text-center border-2 border-success/20"
          >
            <div className="w-20 h-20 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="w-10 h-10 text-success" />
            </div>
            <h3 className="text-3xl font-jakarta font-bold mb-4">Registration Received!</h3>
            <p className="text-text/70 text-lg mb-8">
              Thank you for enrolling. We've sent a confirmation email with the next steps and payment details.
            </p>
            <button 
              onClick={() => setIsSuccess(false)}
              className="text-primary font-bold hover:underline"
            >
              Submit another registration
            </button>
          </motion.div>
        ) : (
          <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-xl border border-gray-100 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary via-accent to-pink-accent" />
            
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-jakarta font-bold mb-4">Secure Your Spot</h2>
              <p className="text-text/60">Spots are limited to ensure a 1:5 instructor-to-student ratio.</p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-text mb-2">Parent's Name</label>
                  <input 
                    {...register('parentName')} 
                    className={`w-full px-4 py-3 rounded-xl bg-gray-50 border ${errors.parentName ? 'border-red-500 focus:ring-red-500' : 'border-gray-200 focus:ring-primary'} focus:outline-none focus:ring-2 transition-all`}
                    placeholder="Jane Doe"
                  />
                  {errors.parentName && <p className="text-red-500 text-xs mt-1">{errors.parentName.message}</p>}
                </div>
                <div>
                  <label className="block text-sm font-bold text-text mb-2">Child's Name</label>
                  <input 
                    {...register('childName')} 
                    className={`w-full px-4 py-3 rounded-xl bg-gray-50 border ${errors.childName ? 'border-red-500 focus:ring-red-500' : 'border-gray-200 focus:ring-primary'} focus:outline-none focus:ring-2 transition-all`}
                    placeholder="Alex Doe"
                  />
                  {errors.childName && <p className="text-red-500 text-xs mt-1">{errors.childName.message}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-text mb-2">Child's Age</label>
                  <input 
                    type="number"
                    {...register('childAge', { valueAsNumber: true })} 
                    className={`w-full px-4 py-3 rounded-xl bg-gray-50 border ${errors.childAge ? 'border-red-500 focus:ring-red-500' : 'border-gray-200 focus:ring-primary'} focus:outline-none focus:ring-2 transition-all`}
                    placeholder="10"
                  />
                  {errors.childAge && <p className="text-red-500 text-xs mt-1">{errors.childAge.message}</p>}
                </div>
                <div>
                  <label className="block text-sm font-bold text-text mb-2">Workshop</label>
                  <select 
                    {...register('workshopId')}
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:ring-primary focus:outline-none focus:ring-2 transition-all appearance-none"
                  >
                    <option value="summer-2026">Summer Intensive 2026</option>
                    <option value="fall-2026">Fall Weekend Club 2026</option>
                  </select>
                  {errors.workshopId && <p className="text-red-500 text-xs mt-1">{errors.workshopId.message}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-text mb-2">Email Address</label>
                  <input 
                    type="email"
                    {...register('email')} 
                    className={`w-full px-4 py-3 rounded-xl bg-gray-50 border ${errors.email ? 'border-red-500 focus:ring-red-500' : 'border-gray-200 focus:ring-primary'} focus:outline-none focus:ring-2 transition-all`}
                    placeholder="jane@example.com"
                  />
                  {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                </div>
                <div>
                  <label className="block text-sm font-bold text-text mb-2">Phone Number</label>
                  <input 
                    {...register('phone')} 
                    className={`w-full px-4 py-3 rounded-xl bg-gray-50 border ${errors.phone ? 'border-red-500 focus:ring-red-500' : 'border-gray-200 focus:ring-primary'} focus:outline-none focus:ring-2 transition-all`}
                    placeholder="(555) 123-4567"
                  />
                  {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
                </div>
              </div>

              {isSignedIn ? (
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full magnetic-button bg-primary hover:bg-primary/90 text-white py-4 rounded-xl font-bold text-lg flex justify-center items-center gap-2 mt-4 shadow-lg shadow-primary/30 disabled:opacity-70"
                >
                  {isSubmitting ? <Loader2 className="w-6 h-6 animate-spin" /> : 'Complete Registration'}
                </button>
              ) : (
                <SignInButton mode="modal">
                  <button 
                    type="button" 
                    className="w-full magnetic-button bg-primary hover:bg-primary/90 text-white py-4 rounded-xl font-bold text-lg flex justify-center items-center gap-2 mt-4 shadow-lg shadow-primary/30"
                  >
                    Sign in to Secure Your Spot
                  </button>
                </SignInButton>
              )}
            </form>
          </div>
        )}
      </div>
    </section>
  );
};

export default RegistrationForm;
