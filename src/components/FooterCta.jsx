import { useState, useMemo } from 'react';
import { useIntersection } from '../hooks/useIntersection';

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

export function FooterCta() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState('idle');
  const { ref, visible } = useIntersection(0.2);

  const normalized = useMemo(() => email.trim().toLowerCase(), [email]);
  const valid = emailRegex.test(normalized);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!valid || loading) return;
    setLoading(true);
    setStatus('idle');
    try {
      const res = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: normalized }),
      });
      if (res.ok) {
        setStatus('success');
        setEmail('');
      } else if (res.status === 409) {
        setStatus('duplicate');
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      ref={ref}
      className="relative overflow-hidden py-28 sm:py-36"
      style={{ background: 'radial-gradient(ellipse at center, rgba(59,130,246,0.15) 0%, transparent 70%)' }}
    >
      <div
        className={`site-container relative text-center transition-all duration-700 ease-out ${visible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'}`}
      >
        <h2 className="mx-auto max-w-[22ch] font-heading text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
          Ready to redefine your wardrobe?
        </h2>
        <p className="mx-auto mt-6 max-w-[52ch] text-base leading-relaxed text-white/65 sm:text-lg">
          Join the waitlist and be among the first to experience AI-powered personal styling built around the clothes you already own.
        </p>
        {status === 'success' || status === 'duplicate' ? (
          <div className="mx-auto mt-10 flex flex-col items-center gap-4" aria-live="polite">
            <p className="text-base font-medium text-white/80">
              {status === 'success' ? "You're on the list — we'll be in touch soon." : "You're already on the list."}
            </p>
            <a
              href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
                'I just joined the AIWardrobe waitlist — an AI personal stylist that digitizes your closet in 60 seconds. Check it out: aiwardrobe.app'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="waitlist-button inline-flex w-auto"
            >
              Share on X
            </a>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mx-auto mt-10 w-full max-w-[34rem]">
            <div className="waitlist-form-shell">
              <div className="waitlist-controls">
                <input
                  type="email"
                  inputMode="email"
                  autoComplete="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setStatus('idle');
                  }}
                  className="waitlist-input"
                  aria-label="Email address"
                />
                <button type="submit" className="waitlist-button" disabled={!valid || loading}>
                  {loading ? 'Joining...' : 'Join Early Access'}
                </button>
              </div>
              <p className="waitlist-status text-center" aria-live="polite">
                {status === 'error' ? 'Something went wrong. Please try again.' : null}
              </p>
            </div>
          </form>
        )}
        <p className="mt-5 text-sm text-white/40">No spam. Unsubscribe anytime.</p>
      </div>
    </section>
  );
}
