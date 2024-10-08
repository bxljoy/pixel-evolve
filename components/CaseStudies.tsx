import Image from 'next/image';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const caseStudies = [
  {
    title: "E-commerce Platform Overhaul",
    client: "ShopEase Inc.",
    description: "Redesigned and optimized the entire e-commerce platform, resulting in a 150% increase in sales and 40% improvement in page load times.",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    tags: ["E-commerce", "Performance Optimization", "UX Design"]
  },
  {
    title: "AI-Powered Customer Service Bot",
    client: "TechSupport Co.",
    description: "Developed an AI chatbot that handles 70% of customer inquiries, reducing response times by 80% and improving customer satisfaction scores.",
    image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1506&q=80",
    tags: ["AI", "Customer Service", "Chatbot"]
  },
  {
    title: "Cloud Migration & Optimization",
    client: "DataSecure Solutions",
    description: "Successfully migrated on-premise infrastructure to the cloud, resulting in 40% cost savings and 99.99% uptime for critical systems.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80",
    tags: ["Cloud Migration", "Infrastructure", "Cost Optimization"]
  }
];

const CaseStudies = () => {
  return (
    <section id="case-studies" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-foreground">Our Success Stories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <Card key={index} className="overflow-hidden">
              <Image
                src={study.image}
                alt={study.title}
                width={400}
                height={200}
                className="w-full h-48 object-cover"
              />
              <CardHeader>
                <CardTitle>{study.title}</CardTitle>
                <CardDescription>{study.client}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm mb-4">{study.description}</p>
                <div className="flex flex-wrap gap-2">
                  {study.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary">{tag}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;