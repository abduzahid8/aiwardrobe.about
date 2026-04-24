import { Section } from './Section';

const showcaseItems = [
  {
    label: 'App Interface',
    desc: 'Main dashboard with your digitized wardrobe',
    color: '#fde047',
  },
  {
    label: 'Outfit Generator',
    desc: 'AI-generated outfit combinations',
    color: '#fcd34d',
  },
  {
    label: 'Size Predictor',
    desc: 'Perfect fit from a single photo',
    color: '#fbbf24',
  },
  {
    label: 'Style Aesthetics',
    desc: 'Old Money, Quiet Luxury, Minimalist',
    color: '#f59e0b',
  },
];

export function ProductShowcase() {
  return (
    <Section
      id="showcase"
      eyebrow="Product Preview"
      title={<>See AIWardrobe in Action</>}
      subtitle="Screenshots and visual previews of the platform. Replace these with your actual project images."
      contentClassName="flex flex-col gap-10"
      glow
    >
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {showcaseItems.map((item) => (
          <article
            key={item.label}
            className="signal-card glass-item flex flex-col gap-4 overflow-hidden"
            style={{ '--signal-color': item.color, minHeight: '36rem' }}
          >
            <div className="relative -mx-4 -mt-4 aspect-[4/3] w-[calc(100%+2rem)] overflow-hidden rounded-xl border border-white/10" style={{ backgroundColor: `${item.color}20` }}>
              {/* Colored placeholder */}
              <div className="flex h-full w-full items-center justify-center">
                <div className="flex flex-col items-center gap-4 text-center">
                  <div className="rounded-2xl p-8" style={{ backgroundColor: item.color }}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="64"
                      height="64"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      className="text-black"
                    >
                      <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                      <circle cx="8.5" cy="8.5" r="1.5" />
                      <polyline points="21 15 16 10 5 21" />
                    </svg>
                  </div>
                  <span className="text-lg font-semibold uppercase tracking-wider" style={{ color: item.color }}>
                    {item.label}
                  </span>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <p className="eyebrow-label" style={{ color: '#fde047' }}>
                {item.label}
              </p>
              <p className="text-sm leading-relaxed text-white/65">{item.desc}</p>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
