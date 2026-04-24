import { Section } from './Section';

const flawCards = [
  'Users abandon wardrobe apps before they finish uploading item 20.',
  'Static inventory lists do not generate actionable outfit recommendations.',
  'No existing platform combines digitization, styling, and sizing in one flow.',
  'Size guides rely on measurements users do not know and will not take.',
];

const flawCols = ['#fef9c3', '#fef08a', '#fde047', '#eab308'];
const flawSpans = ['col-span-2 lg:col-span-2', 'col-span-1 lg:col-span-1', 'col-span-1 lg:col-span-1', 'col-span-2 lg:col-span-4'];

export function FlawsSection() {
  return (
    <Section
      title={<>Why Current Solutions Fail</>}
      subtitle="Existing wardrobe apps create work for the user instead of creating value from the wardrobe."
      contentClassName="flex flex-col gap-10"
      glow
    >
      <p className="-mt-4 max-w-[42ch] font-heading text-2xl font-medium leading-snug tracking-tight text-white/60 sm:text-3xl">
        &ldquo;Organizing clothes without styling them is just a spreadsheet with pictures.&rdquo;
      </p>
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        {flawCards.map((text, i) => {
          const wide = i === 3;
          return (
            <article
              key={text}
              className={`signal-card glass-item ${flawSpans[i]} ${wide ? 'flex flex-row items-center justify-between gap-8' : 'flex flex-col justify-between gap-6'}`}
              style={{ '--signal-color': flawCols[i], minHeight: wide ? '7rem' : '16rem' }}
            >
              <p className="shrink-0 eyebrow-label" style={{ color: flawCols[i] }}>
                Flaw 0{i + 1}
              </p>
              <p className={`font-medium leading-snug text-white/90 ${wide ? 'text-xl max-w-[60ch]' : 'text-lg'}`}>
                {text}
              </p>
            </article>
          );
        })}
      </div>
    </Section>
  );
}
