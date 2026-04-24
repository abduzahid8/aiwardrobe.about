import { Section } from './Section';

const contactLinks = [
  { label: 'Phone', value: '+998 90 167 50 04', href: 'tel:+998901675004', color: '#fef9c3' },
  { label: 'Email', value: 'info@aiwardrobe.app', href: 'mailto:info@aiwardrobe.app', color: '#fef08a' },
  { label: 'Founders', value: 'Open to investors & partners', href: 'mailto:info@aiwardrobe.app?subject=Partnership', color: '#fde047' },
];

export function ContactSection() {
  return (
    <Section
      id="contact"
      eyebrow="Get in Touch"
      title={<>Let&apos;s Connect</>}
      subtitle="For investor inquiries, partnership proposals, or early access questions — reach out directly."
      contentClassName="flex flex-col gap-10"
    >
      <p className="-mt-4 max-w-[42ch] font-heading text-2xl font-medium leading-snug tracking-tight text-white/60 sm:text-3xl">
        &ldquo;We respond to every serious message within 24 hours.&rdquo;
      </p>
      <address className="not-italic">
        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {contactLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="signal-card glass-item flex flex-col justify-between gap-8 no-underline"
                style={{ '--signal-color': link.color, minHeight: '13rem' }}
              >
                <p className="eyebrow-label" style={{ color: link.color }}>
                  {link.label}
                </p>
                <span className="flex items-end justify-between gap-2">
                  <span className="text-lg font-medium leading-snug text-white/90">{link.value}</span>
                  <span
                    className="shrink-0 text-xl font-light transition-transform duration-200 group-hover:translate-x-1"
                    style={{ color: link.color }}
                  >
                    &rarr;
                  </span>
                </span>
              </a>
            </li>
          ))}
        </ul>
      </address>
    </Section>
  );
}
