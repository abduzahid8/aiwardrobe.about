import { Section } from './Section';

const team = [
  {
    role: 'Founder',
    name: 'Dovud Jurayev',
    points: [
      'Product direction and fashion-tech strategy ownership.',
      'MVP execution and validation loop design.',
      'Investor-facing strategic narrative and partnerships.',
    ],
  },
  {
    role: 'Co-Founder',
    name: 'Abduzohid Vakhidjanov',
    points: [
      'Technical architecture and AI engine implementation.',
      'Computer vision and size-prediction model integration.',
      'Operational delivery across product and engineering cycles.',
    ],
  },
];

export function TeamSection() {
  const teamColors = ['#fef9c3', '#fef08a'];
  return (
    <Section
      id="team"
      eyebrow="Founding Team"
      title={<>People Behind AIWardrobe</>}
      subtitle="Execution-focused founding team with product, AI, and validation ownership."
      contentClassName="flex flex-col gap-10"
      glow
    >
      <div className="grid gap-5 lg:grid-cols-2">
        {team.map((member, i) => (
          <article
            key={member.name}
            className="signal-card glass-item flex flex-col gap-8"
            style={{
              '--signal-color': teamColors[i],
              minHeight: '22rem',
              padding: 'clamp(1.4rem, 2.5vw, 2rem)',
            }}
          >
            <div className="flex items-start justify-between">
              <span
                className="font-semibold uppercase tracking-widest leading-none"
                style={{ fontSize: '1.75rem', color: teamColors[i] }}
              >
                0{i + 1}
              </span>
              <span className="eyebrow-label mt-1" style={{ color: teamColors[i] }}>
                {member.role}
              </span>
            </div>
            <h3 className="font-heading text-4xl font-bold tracking-tight text-white leading-none sm:text-5xl">
              {member.name}
            </h3>
            <ul className="mt-auto space-y-2.5 text-sm leading-relaxed text-white/70 sm:text-base">
              {member.points.map((point) => (
                <li key={point} className="flex items-start gap-2.5">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full" style={{ backgroundColor: teamColors[i] }} />
                  {point}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  );
}
