import { Section } from './Section';

const problemSignals = [
  'Manual photo uploads take hours and kill onboarding momentum.',
  'Existing apps treat closets as databases, not as a source of style.',
  'Users never know what to wear — decision fatigue is daily and unaddressed.',
  'Online shopping returns are driven by poor fit prediction, not taste.',
];

const blueScale = ['#fef9c3', '#fef08a', '#fde047', '#eab308'];

export function ProblemSection() {
  return (
    <Section
      id="problem"
      eyebrow="Market Gap"
      title={<>The Wardrobe Problem</>}
      subtitle="Digital wardrobes promised convenience. Instead, they delivered friction, incomplete data, and abandoned apps."
      contentClassName="flex flex-col gap-10"
      glow
    >
      <p className="-mt-4 max-w-[42ch] font-heading text-2xl font-medium leading-snug tracking-tight text-white/60 sm:text-3xl">
        &ldquo;Most digital wardrobes fail because they require hours of manual photo uploads.&rdquo;
      </p>
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        {problemSignals.map((text, i) => (
          <article
            key={text}
            className="signal-card glass-item flex flex-col justify-between gap-6"
            style={{ '--signal-color': blueScale[i], minHeight: '14rem' }}
          >
            <p className="eyebrow-label" style={{ color: blueScale[i] }}>
              Signal 0{i + 1}
            </p>
            <p className="text-lg font-medium leading-snug text-white/90">{text}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
