import { CheckCircle } from 'lucide-react';

const features = [
  'Cutting-edge technology stack',
  'Scalable architecture',
  'Customizable solutions',
  'Seamless integration',
  'Robust security measures',
  '24/7 expert support',
];

const Features = () => {
  return (
    <section id="features" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-foreground">Why Choose PixelEvolve?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center space-x-4">
              <CheckCircle className="w-6 h-6 text-primary" />
              <span className="text-lg text-foreground">{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;