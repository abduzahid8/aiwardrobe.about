import { Section } from './Section';

const validationPhases = [
  'MVP focused on 60-second video digitization.',
  'Testing outfit generation accuracy and user satisfaction.',
  'Testing single-photo size prediction against returns data.',
  'Measuring viral sharing rates and organic growth loops.',
  'Operating on a 2–4 week validation loop.',
];

export function ValidationSection() {
  const phaseColors = ['#fef9c3', '#fef08a', '#fde047', '#facc15', '#eab308'];
  return (
    <Section
      eyebrow="Investor Overview"
      title={<>MVP &amp; Validation</>}
      subtitle="Validation is tied to real behavior: digitization accuracy, styling satisfaction, and fit prediction precision."
      contentClassName="flex flex-col gap-10"
    >
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-3">
        {validationPhases.map((phase, i) => (
          <article
            key={phase}
            className="signal-card glass-item flex flex-col justify-between gap-6"
            style={{ '--signal-color': phaseColors[i], minHeight: '13rem' }}
          >
            <div className="flex items-start justify-between">
              <p className="eyebrow-label" style={{ color: phaseColors[i] }}>
                Phase 0{i + 1}
              </p>
              <span className="mt-1.5 h-2 w-2 rounded-full opacity-80" style={{ background: phaseColors[i] }} />
            </div>
            <p className="text-lg font-medium leading-snug text-white/90">{phase}</p>
          </article>
        ))}
        <article
          className="signal-card glass-item flex flex-col justify-between gap-6"
          style={{
            '--signal-color': '#fef08a',
            minHeight: '13rem',
            background: 'linear-gradient(135deg, rgba(103,232,249,0.08) 0%, rgba(8,14,26,0.32) 100%)',
          }}
        >
          <p className="eyebrow-label">Validation Cycle</p>
          <div>
            <p className="font-heading text-5xl font-bold leading-none tracking-tight text-white">
              2&ndash;4<span className="ml-1 text-2xl font-medium text-white/60">wks</span>
            </p>
            <p className="mt-3 text-sm leading-relaxed text-white/65">
              Short loops allow fast model adjustment without losing signal quality.
            </p>
          </div>
        </article>
      </div>
    </Section>
  );
}
