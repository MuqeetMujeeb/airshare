import { useState } from 'react';
import { supabase } from '../../lib/supabase';

export default function CTA() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // 'idle' | 'loading' | 'success' | 'error'
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;

    setStatus('loading');
    setErrorMessage('');

    try {
      const { error } = await supabase.auth.signInWithOtp({
        email,
        options: {
          shouldCreateUser: true,
        }
      });

      if (error) throw error;
      
      setStatus('success');
      setEmail('');
    } catch (error) {
      console.error('Waitlist error:', error.message);
      setStatus('error');
      setErrorMessage(error.message || 'Something went wrong. Please try again.');
    }
  };

  return (
    <section id="get-access" className="py-32 bg-slate-900 px-6 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-sky-500/20 blur-[120px] rounded-full" />
      </div>
      <div className="max-w-3xl mx-auto text-center relative z-10">
        <h2 className="text-4xl md:text-6xl font-serif text-white mb-6">Ready to skip the transfer?</h2>
        <p className="text-xl text-slate-300 mb-10 max-w-xl mx-auto">Join the waitlist and be the first to experience zero-wait workflows.</p>
        
        {status === 'success' ? (
          <div className="p-6 bg-green-500/10 border border-green-500/20 rounded-2xl max-w-md mx-auto">
            <h3 className="text-xl font-semibold text-green-400 mb-2">You're on the list!</h3>
            <p className="text-green-200/80">Check your email for a confirmation link.</p>
          </div>
        ) : (
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto items-start" onSubmit={handleSubmit}>
            <div className="flex-1 w-full text-left">
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email" 
                disabled={status === 'loading'}
                className="w-full px-6 py-4 rounded-full bg-white/10 border border-white/20 text-white placeholder:text-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-all font-medium disabled:opacity-50" 
                required 
              />
              {status === 'error' && (
                <p className="text-red-400 text-sm mt-2 ml-4 relative">{errorMessage}</p>
              )}
            </div>
            <button 
              type="submit" 
              disabled={status === 'loading'}
              className="px-8 py-4 bg-sky-500 text-white rounded-full font-semibold hover:bg-sky-400 transition-colors shadow-lg shadow-sky-500/20 whitespace-nowrap disabled:opacity-70 flex items-center justify-center w-full sm:w-auto h-[58px]"
            >
              {status === 'loading' ? 'Joining...' : 'Join Waitlist'}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
