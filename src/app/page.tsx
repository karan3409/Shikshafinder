import { Navigation } from '@/components/navigation';
import { ITHeroSection } from '@/components/hero-section';
import { ProductShowcaseSection } from '@/components/product-showcase-section';
import { ServicesSection } from '@/components/services-section';
import { AboutSection } from '@/components/about-section';
import { PortfolioSection } from '@/components/portfolio-section';
import { ContactSection } from '@/components/contact-section';
import { Footer } from '@/components/footer';

export default function Home() {
  return (
    <div id="home">
      <Navigation />
      <ITHeroSection />
      <ProductShowcaseSection />
      <ServicesSection />
      <AboutSection />
      <PortfolioSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
