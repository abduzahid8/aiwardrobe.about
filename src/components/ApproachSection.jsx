import { Section } from './Section';

const approachSteps = [
  'Proprietary AI digitizes an entire closet from a single 60-second video.',
  'Instant outfit generation across any aesthetic — Old Money, Quiet Luxury, Minimalist.',
  'Precision size prediction from just one photo eliminates fit guesswork.',
  '24/7 fashion advisor using only the clothes you already own.',
  'Viral sharing and brand licensing built into the product architecture.',
];

export function ApproachSection() {
  const stepColors = ['#fef9c3', '#fef08a', '#fde047', '#facc15', '#eab308'];
  return (
    <Section
      id="approach"
      eyebrow="Intervention Model"
      title={<>Our Approach</>}
      subtitle="Behavioral substitution instead of restriction."
      contentClassName="flex flex-col gap-12"
      glow
    >
      <p className="-mt-4 max-w-[38ch] font-heading text-2xl font-medium leading-snug tracking-tight text-white/60 sm:text-3xl">
        &ldquo;Replace the habit loop, do not fight it.&rdquo;
      </p>
      <div className="relative flex flex-col gap-0">
        <div
          className="pointer-events-none absolute left-[1.6rem] top-8 bottom-8 w-px"
          style={{ background: 'linear-gradient(to bottom, #fef9c3 0%, #eab308 100%)', opacity: 0.25 }}
        />
        {approachSteps.map((step, i) => (
          <div key={step} className="relative flex items-start gap-6 py-4">
            <div
              className="relative z-10 mt-1 flex h-[1.25rem] w-[1.25rem] shrink-0 items-center justify-center rounded-full border"
              style={{
                borderColor: stepColors[i],
                background: 'rgba(9,14,26,0.9)',
                boxShadow: `0 0 12px ${stepColors[i]}55`,
              }}
            >
              <div className="h-[6px] w-[6px] rounded-full" style={{ background: stepColors[i] }} />
            </div>
            <article
              className="signal-card glass-item flex flex-1 items-center gap-6 py-5 px-6"
              style={{ '--signal-color': stepColors[i] }}
            >
              <p className="shrink-0 font-semibold uppercase tracking-widest" style={{ fontSize: '1.1rem', color: stepColors[i] }}>
                {String(i + 1).padStart(2, '0')}
              </p>
              <div className="h-8 w-px shrink-0" style={{ background: stepColors[i], opacity: 0.25 }} />
              <p className="text-base leading-relaxed text-white/85">{step}</p>
            </article>
          </div>
        ))}
      </div>
    </Section>
  );
}
