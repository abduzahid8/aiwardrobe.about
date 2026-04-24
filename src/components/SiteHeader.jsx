import { useState, useEffect, useCallback } from 'react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Problem', href: '#problem' },
  { label: 'Product', href: '#how-it-works' },
  { label: 'Approach', href: '#approach' },
  { label: 'Contact', href: '#contact' },
];

export function SiteHeader() {
  const [visible, setVisible] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 120);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = useCallback(() => {
    setMobileOpen(false);
  }, []);

  return (
    <>
      <header className={`site-header ${visible ? 'site-header--visible' : ''}`}>
        <div className="site-container flex items-center justify-between py-4">
          <a href="#home" className="inline-flex items-center">
            <span className="font-heading text-xl font-semibold tracking-tight text-white">
              AIWardrobe
            </span>
          </a>
          <nav aria-label="Primary navigation" className="hidden items-center gap-8 text-sm text-white/72 sm:flex">
            {navLinks.map((link) => (
              <a key={link.label} href={link.href} className="nav-link hover:text-white">
                {link.label}
              </a>
            ))}
          </nav>
          <button
            type="button"
            className="hamburger sm:hidden"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((s) => !s)}
          >
            <span className={`hamburger-line ${mobileOpen ? 'hamburger-line--top-open' : ''}`} />
            <span className={`hamburger-line ${mobileOpen ? 'hamburger-line--mid-open' : ''}`} />
            <span className={`hamburger-line ${mobileOpen ? 'hamburger-line--bot-open' : ''}`} />
          </button>
        </div>
      </header>
      <div
        className={`mobile-drawer-backdrop ${mobileOpen ? 'mobile-drawer-backdrop--open' : ''}`}
        onClick={() => setMobileOpen(false)}
        aria-hidden="true"
      />
      <div className={`mobile-drawer ${mobileOpen ? 'mobile-drawer--open' : ''}`}>
        <div className="p-6">
          <div className="mb-6 flex items-center justify-between">
            <span className="font-heading text-xl font-semibold tracking-tight text-white">
              AIWardrobe
            </span>
            <button
              type="button"
              className="hamburger"
              aria-label="Close menu"
              onClick={() => setMobileOpen(false)}
            >
              <span className="hamburger-line hamburger-line--top-open" />
              <span className="hamburger-line hamburger-line--mid-open" />
              <span className="hamburger-line hamburger-line--bot-open" />
            </button>
          </div>
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="mobile-nav-link" onClick={handleNavClick}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
