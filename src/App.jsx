import { SiteHeader } from './components/SiteHeader';
import { Hero } from './components/Hero';
import { ProductShowcase } from './components/ProductShowcase';
import { ProblemSection } from './components/ProblemSection';
import { FlawsSection } from './components/FlawsSection';
import { ApproachSection } from './components/ApproachSection';
import { HowItWorksSection } from './components/HowItWorksSection';
import { CoreSystemSection } from './components/CoreSystemSection';
import { MarketSection } from './components/MarketSection';
import { ValidationSection } from './components/ValidationSection';
import { TeamSection } from './components/TeamSection';
import { ContactSection } from './components/ContactSection';
import { FooterCta } from './components/FooterCta';
import { Footer } from './components/Footer';

function App() {
  return (
    <>
      <SiteHeader />
      <Hero />
      <ProductShowcase />
      <ProblemSection />
      <FlawsSection />
      <HowItWorksSection />
      <CoreSystemSection />
      <ApproachSection />
      <MarketSection />
      <ValidationSection />
      <TeamSection />
      <ContactSection />
      <FooterCta />
      <Footer />
    </>
  );
}

export default App;
