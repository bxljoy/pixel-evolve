import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Features from '@/components/Features';
import CaseStudies from '@/components/CaseStudies';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import CTA from '@/components/CTA';

export default function Home() {
  return (
    <div className="container mx-auto px-4">
      <Hero />
      <Services />
      <Features />
      <CaseStudies />
      <Testimonials />
      <FAQ />
      <CTA />
    </div>
  );
}