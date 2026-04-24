import { useState } from 'react';

export function EmailCollection() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle, submitting, success, error
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    setMessage('');

    try {
      // Using Formspree for email collection
      // Replace 'YOUR_FORMSPREE_FORM_ID' with your actual Formspree form ID
      const response = await fetch('https://formspree.io/f/YOUR_FORMSPREE_FORM_ID', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setStatus('success');
        setMessage('Thank you! We\'ll be in touch soon.');
        setEmail('');
      } else {
        setStatus('error');
        setMessage('Something went wrong. Please try again.');
      }
    } catch (error) {
      setStatus('error');
      setMessage('Something went wrong. Please try again.');
    }
  };

  return (
    <div className="signal-card glass-item p-8">
      <h3 className="mb-2 text-xl font-semibold text-white">
        Get Early Access
      </h3>
      <p className="mb-6 text-white/70">
        Be the first to know when we launch. No spam, just updates.
      </p>
      
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div className="flex flex-col sm:flex-row gap-3">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            disabled={status === 'submitting' || status === 'success'}
            className="flex-1 rounded-lg bg-white/10 px-4 py-3 text-white placeholder-white/50 backdrop-blur-sm transition-colors focus:bg-white/20 focus:outline-none disabled:opacity-50"
          />
          <button
            type="submit"
            disabled={status === 'submitting' || status === 'success' || !email}
            className="rounded-lg bg-gradient-to-r from-yellow-400 to-orange-500 px-6 py-3 font-semibold text-black transition-all hover:from-yellow-500 hover:to-orange-600 disabled:opacity-50 disabled:hover:from-yellow-400 disabled:hover:to-orange-500"
          >
            {status === 'submitting' ? 'Sending...' : status === 'success' ? 'Subscribed!' : 'Join Waitlist'}
          </button>
        </div>
        
        {message && (
          <p className={`text-sm ${status === 'success' ? 'text-green-400' : 'text-red-400'}`}>
            {message}
          </p>
        )}
      </form>

      {status === 'idle' && (
        <p className="mt-4 text-xs text-white/50">
          🔒 We respect your privacy. Unsubscribe anytime.
        </p>
      )}
    </div>
  );
}
