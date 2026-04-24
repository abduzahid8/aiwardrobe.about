const allNavLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Problem', href: '#problem' },
  { label: 'How it works', href: '#how-it-works' },
  { label: 'Approach', href: '#approach' },
  { label: 'Market', href: '#market' },
  { label: 'Team', href: '#team' },
  { label: 'Contact', href: '#contact' },
];

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-white/[0.06]">
      <div className="site-container flex flex-col items-center gap-6 py-10 sm:flex-row sm:justify-between">
        <p className="text-sm text-white/40">
          &copy; {year} AIWardrobe. All rights reserved.
        </p>
        <nav aria-label="Footer navigation" className="flex flex-wrap items-center justify-center gap-6 text-sm text-white/50">
          {allNavLinks.map((link) => (
            <a key={link.label} href={link.href} className="nav-link hover:text-white">
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
