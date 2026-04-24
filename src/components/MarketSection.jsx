import { Section } from './Section';

const marketMetrics = [
  { label: 'TAM', value: '$300B', note: 'Global fashion e-commerce' },
  { label: 'SAM', value: '$45B', note: 'Personal styling & wardrobe tech' },
  { label: 'SOM', value: '$2.5B', note: 'Initial reachable market' },
  { label: 'Revenue Signal', value: '$10M+ ARR', note: 'At 0.5% penetration' },
];

export function MarketSection() {
  const metricColors = ['#fef9c3', '#fef08a', '#fde047', '#eab308'];
  const metricSpans = ['col-span-2 lg:col-span-2', 'col-span-1 lg:col-span-1', 'col-span-1 lg:col-span-1', 'col-span-2 lg:col-span-4'];
  return (
    <Section
      id="market"
      eyebrow="Investor Overview"
      title={<>Market Opportunity</>}
      subtitle="Market sizing focused on reachable adoption logic and clear revenue potential."
      contentClassName="flex flex-col gap-10"
    >
      <div
        className="signal-card glass-item max-w-prose"
        style={{ '--signal-color': '#fef08a' }}
      >
        <p className="eyebrow-label mb-2">Investment Thesis</p>
        <p className="muted-copy">
          If AI-driven wardrobe digitization and styling convert 0.5% of the reachable segment, annual recurring revenue crosses $10M with disciplined retention and brand licensing.
        </p>
      </div>
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        {marketMetrics.map((metric, i) => {
          const wide = i === 3;
          const color = metricColors[i];
          return (
            <article
              key={metric.label}
              className={`signal-card glass-item ${metricSpans[i]} ${wide ? 'flex flex-row items-center justify-between gap-8' : 'flex flex-col justify-between gap-4'}`}
              style={{ '--signal-color': color, minHeight: wide ? '7rem' : '14rem' }}
            >
              <p
                className="font-heading font-bold leading-none tracking-tight"
                style={{ fontSize: wide ? '2.4rem' : '3rem', color }}
              >
                {metric.value}
              </p>
              <div className={wide ? 'text-right' : ''}>
                <p
                  className="font-semibold uppercase tracking-widest"
                  style={{ fontSize: '0.7rem', color, opacity: 0.8 }}
                >
                  {metric.label}
                </p>
                <p className="mt-1 text-sm leading-snug text-white/60">{metric.note}</p>
              </div>
            </article>
          );
        })}
      </div>
    </Section>
  );
}
