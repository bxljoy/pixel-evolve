import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const testimonials = [
  {
    quote: "PixelEvolve transformed our business with their innovative SAAS solution. We've seen a 200% increase in productivity!",
    author: "Jane Doe",
    role: "CEO, TechCorp",
    avatar: "JD",
  },
  {
    quote: "The custom software developed by PixelEvolve perfectly addressed our unique challenges. Highly recommended!",
    author: "John Smith",
    role: "CTO, InnovateCo",
    avatar: "JS",
  },
  {
    quote: "PixelEvolve's AI integration has given us a competitive edge in our industry. Their expertise is unmatched.",
    author: "Emily Brown",
    role: "Director of Innovation, FutureTech",
    avatar: "EB",
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-foreground">What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-card">
              <CardContent className="pt-6">
                <p className="text-foreground italic mb-4">"{testimonial.quote}"</p>
              </CardContent>
              <CardFooter className="flex items-center space-x-4">
                <Avatar>
                  <AvatarFallback>{testimonial.avatar}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;