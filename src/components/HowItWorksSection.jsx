import { Section } from './Section';

const howItWorks = [
  { title: 'Video Scan', description: 'Record a 60-second video of your closet. Our AI does the rest.' },
  { title: 'AI Digitization', description: 'Every item is catalogued, categorized, and indexed automatically.' },
  { title: 'Style Profile', description: 'Select your preferred aesthetics and occasion preferences.' },
  { title: 'Outfit Generation', description: 'Get high-end outfit combinations tailored to your wardrobe.' },
  { title: 'Perfect Fit', description: 'Find your exact size across brands from a single photo.' },
];

export function HowItWorksSection() {
  const stepColors = ['#fef9c3', '#fef08a', '#fde047', '#facc15', '#eab308'];
  return (
    <Section
      id="how-it-works"
      eyebrow="App Workflow"
      title={<>How It Works</>}
      subtitle="A clear flow from video scan to styled outfit. No dead ends, no ambiguity."
      contentClassName="flex flex-col gap-10"
      glow
    >
      <p className="-mt-4 max-w-[42ch] font-heading text-2xl font-medium leading-snug tracking-tight text-white/60 sm:text-3xl">
        &ldquo;Five steps. One complete wardrobe. Every time.&rdquo;
      </p>
      <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-2">
        {howItWorks.map((step, i) => (
          <span key={step.title} className="flex items-center gap-2">
            <span
              className="shrink-0 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider"
              style={{
                background: `color-mix(in srgb, ${stepColors[i]} 14%, transparent)`,
                color: stepColors[i],
                border: `1px solid color-mix(in srgb, ${stepColors[i]} 30%, transparent)`,
              }}
            >
              {step.title}
            </span>
            {i < howItWorks.length - 1 && (
              <span className="text-white/20" aria-hidden={true}>
                &rarr;
              </span>
            )}
          </span>
        ))}
      </div>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-5">
        {howItWorks.map((step, i) => (
          <article
            key={step.title}
            className="signal-card glass-item flex flex-col justify-between gap-6"
            style={{ '--signal-color': stepColors[i], minHeight: '13rem' }}
          >
            <p className="eyebrow-label" style={{ color: stepColors[i] }}>
              0{i + 1}
            </p>
            <div className="flex flex-col gap-2">
              <h3 className="font-heading text-base font-semibold uppercase tracking-wider text-white/90">{step.title}</h3>
              <p className="text-sm leading-relaxed text-white/65">{step.description}</p>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
