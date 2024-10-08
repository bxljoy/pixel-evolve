"use client";

import { Button } from '@/components/ui/button';

const CTA = () => {
  return (
    <section id="contact" className="py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">Ready to Evolve Your Digital Presence?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Let's discuss how PixelEvolve can transform your business with our cutting-edge SAAS solutions and custom software development.
        </p>
        <Button 
          size="lg" 
          variant="secondary"
          onClick={() => window.open('mailto:contact@pixelevolve.com', '_blank')}
        >
          Get in Touch
        </Button>
      </div>
    </section>
  );
};

export default CTA;