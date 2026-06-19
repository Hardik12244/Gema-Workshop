
import { useEffect, useState } from 'react';
import { BookOpen, Calendar, Settings } from 'lucide-react';
import BackgroundSystem from '../components/layout/BackgroundSystem';

const Dashboard = () => {
  const [registrations, setRegistrations] = useState([]);
  const [email, setEmail] = useState<string | null>(null);
  const [name, setName] = useState<string | null>(null);

  useEffect(() => {
    const demoEmail = localStorage.getItem('demo_email');
    const demoName = localStorage.getItem('demo_name');
    
    if (demoEmail) setEmail(demoEmail);
    if (demoName) setName(demoName);

    const fetchRegistrations = async () => {
      if (demoEmail) {
        try {
          const API_URL = (import.meta.env.VITE_API_URL || 'http://localhost:5001').replace(/\/$/, '');
          const res = await fetch(`${API_URL}/api/registrations/my-registrations?email=${demoEmail}`);
          if (res.ok) {
            const result = await res.json();
            if (result.success) setRegistrations(result.data);
          }
        } catch (error) {
          console.error("Failed to fetch registrations", error);
        }
      }
    };
    fetchRegistrations();
  }, []);

  if (!email) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
        <h2 className="text-2xl font-bold font-jakarta mb-4">No active session found</h2>
        <p className="text-text/60 mb-6">Please register a student to access the dashboard.</p>
        <a href="/register" className="bg-primary text-white px-6 py-3 rounded-full font-bold shadow-lg hover:-translate-y-1 transition-all">Go to Registration</a>
      </div>
    );
  }

  return (
    <div className="min-h-screen relative py-20">
      <BackgroundSystem />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h1 className="text-4xl font-jakarta font-bold mb-2">Welcome back, {name || 'Parent'}!</h1>
        <p className="text-text/60 mb-10">Manage your child's learning journey.</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className="md:col-span-2 space-y-8">
            <div className="bg-white/80 backdrop-blur-md p-8 rounded-[2rem] shadow-sm border border-gray-100">
              <h2 className="text-2xl font-jakarta font-bold mb-6 flex items-center gap-2">
                <BookOpen className="text-primary w-6 h-6" /> Your Enrollments
              </h2>
              {registrations.length > 0 ? (
                <div className="space-y-4">
                  {registrations.map((reg: any) => (
                    <div key={reg._id} className="bg-gray-50 p-4 rounded-xl border border-gray-100 flex justify-between items-center">
                      <div>
                        <p className="font-bold text-lg">{reg.childName}</p>
                        <p className="text-sm text-text/60">Workshop: {reg.workshopId}</p>
                      </div>
                      <div>
                        <span className="bg-success/10 text-success text-sm font-semibold px-3 py-1 rounded-full">
                          {reg.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12 bg-gray-50 rounded-2xl border border-dashed border-gray-200">
                  <p className="text-text/50 mb-4">No active enrollments found.</p>
                  <button className="text-primary font-bold hover:underline">Browse Workshops</button>
                </div>
              )}
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-primary text-white p-8 rounded-[2rem] shadow-md shadow-primary/20">
              <h2 className="text-xl font-jakarta font-bold mb-4 flex items-center gap-2">
                <Calendar className="w-5 h-5" /> Next Class
              </h2>
              {registrations.length > 0 ? (
                <div>
                  <p className="font-bold text-lg mb-1">Introduction to AI</p>
                  <p className="text-white/80 text-sm mb-4">Saturday, 10:00 AM - 12:00 PM</p>
                  <button className="w-full bg-white text-primary font-bold py-2 rounded-xl text-sm">View Schedule</button>
                </div>
              ) : (
                <p className="text-white/80 text-sm">Enroll in a workshop to see your schedule.</p>
              )}
            </div>

            <div className="bg-white/80 backdrop-blur-md p-8 rounded-[2rem] shadow-sm border border-gray-100">
              <h2 className="text-xl font-jakarta font-bold mb-4 flex items-center gap-2">
                <Settings className="w-5 h-5 text-secondary" /> Account
              </h2>
              <p className="text-sm text-text/70 mb-2">Email: {email}</p>
              <button className="text-sm text-primary font-bold hover:underline">Manage Account</button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Dashboard;
