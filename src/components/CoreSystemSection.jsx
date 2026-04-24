import { Section } from './Section';

const coreLayers = [
  'Computer vision closet digitization',
  'Aesthetic-aware outfit engine',
  'Single-photo size prediction',
  'Brand-integrated fit database',
  'Viral sharing & licensing layer',
];

export function CoreSystemSection() {
  const layerColors = ['#fef9c3', '#fef08a', '#fde047', '#eab308', '#ca8a04'];
  return (
    <Section
      eyebrow="System Architecture"
      title={<>Core System</>}
      subtitle="Five interlocked layers that transform a closet into a personal styling engine."
      contentClassName="flex flex-col gap-10"
      glow
    >
      <p className="-mt-4 max-w-[48ch] font-heading text-2xl font-medium leading-snug tracking-tight text-white/60 sm:text-3xl">
        &ldquo;Structure isn&apos;t a constraint — it&apos;s the only thing that makes freedom possible.&rdquo;
      </p>
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-5">
        {coreLayers.map((layer, i) => (
          <article
            key={layer}
            className="signal-card glass-item flex flex-col justify-between gap-6"
            style={{ '--signal-color': layerColors[i], minHeight: '16rem' }}
          >
            <p className="text-lg font-medium leading-snug text-white/90">{layer}</p>
            <p className="eyebrow-label" style={{ color: layerColors[i] }}>
              Layer 0{i + 1}
            </p>
          </article>
        ))}
      </div>
    </Section>
  );
}
