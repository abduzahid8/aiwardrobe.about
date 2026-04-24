import { useState, useMemo } from 'react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Problem', href: '#problem' },
  { label: 'Product', href: '#how-it-works' },
  { label: 'Approach', href: '#approach' },
  { label: 'Contact', href: '#contact' },
];

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
const marqueeText = 'AI STYLIST \u00B7 DIGITAL WARDROBE \u00B7 PERFECT FIT \u00B7 OUTFIT GENERATOR \u00B7 OLD MONEY \u00B7 QUIET LUXURY \u00B7 MINIMALIST \u00B7 60 SECOND SCAN \u00B7 ';

export function Hero() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState('idle');
  const [touched, setTouched] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const normalized = useMemo(() => email.trim().toLowerCase(), [email]);
  const valid = emailRegex.test(normalized);
  const showError = touched && email.length > 0 && !valid;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!valid || loading) return;
    setLoading(true);
    setStatus('idle');
    try {
      // Using Formspree for email collection
      const res = await fetch('https://formspree.io/f/xrerjpng', {
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
    <>
      <section id="home" className="hero-editorial relative w-full min-h-screen overflow-hidden">
        <div className="hero-cold-layer hero-cold-layer-a" aria-hidden="true" />
        <div className="hero-cold-layer hero-cold-layer-b" aria-hidden="true" />
        <div className="hero-cold-layer hero-cold-layer-c" aria-hidden="true" />
        <div className="site-container relative flex min-h-screen flex-col">
          <div className="relative flex items-center justify-between py-6 sm:py-8">
            <a href="#home" className="-ml-2 inline-flex items-center sm:-ml-3">
              <span className="font-heading text-xl font-semibold tracking-tight text-white sm:text-2xl">
                AIWardrobe
              </span>
            </a>
            <nav aria-label="Primary navigation" className="hidden items-center gap-10 text-sm text-white/72 sm:flex">
              {navLinks.map((link) => (
                <a key={link.label} href={link.href} className="nav-link hover:text-white">
                  {link.label}
                </a>
              ))}
            </nav>
            <button
              type="button"
              className="hamburger sm:hidden"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileMenuOpen}
              aria-controls="hero-mobile-menu"
              onClick={() => setMobileMenuOpen((s) => !s)}
            >
              <span className={`hamburger-line ${mobileMenuOpen ? 'hamburger-line--top-open' : ''}`} />
              <span className={`hamburger-line ${mobileMenuOpen ? 'hamburger-line--mid-open' : ''}`} />
              <span className={`hamburger-line ${mobileMenuOpen ? 'hamburger-line--bot-open' : ''}`} />
            </button>
            {mobileMenuOpen && (
              <div id="hero-mobile-menu" className="hero-mobile-menu sm:hidden" role="dialog" aria-label="Navigation menu">
                <ul className="flex flex-col gap-1 p-4">
                  {navLinks.map((link) => (
                    <li key={link.label}>
                      <a href={link.href} className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          <div className="flex flex-1 flex-col items-center justify-center pb-10 pt-10 text-center lg:pb-12">
            <div className="mx-auto flex w-full max-w-3xl flex-col items-center">
              <h1 className="ttl-reveal block font-heading text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-[4.8rem]">
                Your AI Personal Stylist
              </h1>
              <p className="ttl-reveal ttl-delay-1 mt-5 max-w-[46ch] text-xl font-medium leading-snug text-white sm:text-2xl">
                Digitize your entire closet in 60 seconds. Get high-end outfits from clothes you already own.
              </p>
              <p className="ttl-reveal ttl-delay-1 mt-3 max-w-[52ch] text-sm leading-relaxed text-white/55 sm:text-base">
                Personal stylists were once a luxury for the elite — we&apos;ve made them an essential for everyone.
              </p>
              <form onSubmit={handleSubmit} className="ttl-reveal ttl-delay-2 mt-8 w-full max-w-[34rem] sm:mt-11">
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
                      onBlur={() => setTouched(true)}
                      className="waitlist-input"
                      aria-label="Email address"
                      aria-describedby="waitlist-status"
                      aria-invalid={showError}
                    />
                    <button type="submit" className="waitlist-button" disabled={!valid || loading}>
                      {loading ? 'Joining...' : 'Join Early Access'}
                    </button>
                  </div>
                  <p id="waitlist-status" className="waitlist-status" aria-live="polite">
                    {showError ? 'Please enter a valid email address.' : null}
                    {!showError && status === 'success' ? "You're on the list." : null}
                    {!showError && status === 'duplicate' ? "You're already on the list." : null}
                    {!showError && status === 'error' ? 'Something went wrong. Please try again.' : null}
                  </p>
                </div>
              </form>
              <p className="ttl-reveal ttl-delay-3 mt-5 text-sm text-white/55">
                No spam. Unsubscribe anytime. Early access — limited availability.
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="marquee-strip" aria-hidden="true">
        <div className="marquee-track">
          <span>{marqueeText}{marqueeText}{marqueeText}{marqueeText}</span>
          <span>{marqueeText}{marqueeText}{marqueeText}{marqueeText}</span>
        </div>
      </div>
    </>
  );
}
