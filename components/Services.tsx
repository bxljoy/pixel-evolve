import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Code, Cloud, Cpu, Zap } from 'lucide-react';

const services = [
  {
    title: 'SAAS Solutions',
    description: 'Scalable and efficient software-as-a-service products tailored to your needs.',
    icon: Cloud,
  },
  {
    title: 'Custom Software Development',
    description: 'Bespoke software solutions designed to address your unique business challenges.',
    icon: Code,
  },
  {
    title: 'AI Integration',
    description: 'Harness the power of artificial intelligence to optimize your operations.',
    icon: Cpu,
  },
  {
    title: 'Performance Optimization',
    description: 'Enhance your existing systems for maximum efficiency and speed.',
    icon: Zap,
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-foreground">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="bg-card">
              <CardHeader>
                <service.icon className="w-12 h-12 mb-4 text-primary" />
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;