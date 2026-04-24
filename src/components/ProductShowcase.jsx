import { Section } from './Section';

const showcaseItems = [
  {
    label: 'App Interface',
    desc: 'Main dashboard with your digitized wardrobe',
    placeholder: '/images/app-dashboard.jpg',
  },
  {
    label: 'Outfit Generator',
    desc: 'AI-generated outfit combinations',
    placeholder: '/images/outfit-generator.jpg',
  },
  {
    label: 'Size Predictor',
    desc: 'Perfect fit from a single photo',
    placeholder: '/images/size-predictor.jpg',
  },
  {
    label: 'Style Aesthetics',
    desc: 'Old Money, Quiet Luxury, Minimalist',
    placeholder: '/images/style-aesthetics.jpg',
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
            style={{ '--signal-color': '#fde047', minHeight: '16rem' }}
          >
            <div className="relative -mx-4 -mt-4 aspect-[4/3] w-[calc(100%+2rem)] overflow-hidden rounded-xl border border-white/10 bg-white/5">
              {/* TODO: Replace with your project image */}
              <img
                src={item.placeholder}
                alt={item.label}
                className="h-full w-full object-cover opacity-80"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.parentElement.classList.add('flex', 'items-center', 'justify-center');
                }}
              />
              {/* Placeholder overlay when image is missing */}
              <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center gap-2 text-white/30">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="opacity-50"
                >
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                  <circle cx="8.5" cy="8.5" r="1.5" />
                  <polyline points="21 15 16 10 5 21" />
                </svg>
                <span className="text-xs font-medium uppercase tracking-wider">
                  Insert: {item.label}
                </span>
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
