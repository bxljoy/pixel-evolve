import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Briefcase, Users, Zap, Coffee } from 'lucide-react';

const jobOpenings = [
  {
    title: "Senior Full Stack Developer",
    department: "Engineering",
    location: "Remote",
    description: "We're looking for an experienced Full Stack Developer to join our team and help build innovative SAAS solutions."
  },
  {
    title: "UX/UI Designer",
    department: "Design",
    location: "Hybrid",
    description: "Join our design team to create intuitive and beautiful user interfaces for our custom software projects."
  },
  {
    title: "AI Engineer",
    department: "AI & Machine Learning",
    location: "Remote",
    description: "Help integrate cutting-edge AI technologies into our clients' existing systems and new projects."
  },
  {
    title: "Project Manager",
    department: "Operations",
    location: "On-site",
    description: "Lead and coordinate software development projects from inception to successful delivery."
  }
];

const benefits = [
  { icon: Briefcase, title: "Flexible Work", description: "Choose between remote, hybrid, or on-site work options." },
  { icon: Users, title: "Collaborative Culture", description: "Work with a diverse team of talented professionals." },
  { icon: Zap, title: "Cutting-edge Projects", description: "Engage with the latest technologies and innovative solutions." },
  { icon: Coffee, title: "Work-Life Balance", description: "Enjoy flexible hours and generous time-off policies." }
];

export default function CareersPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">Join the PixelEvolve Team</h1>
      
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">Why Work With Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <Card key={index}>
              <CardHeader>
                <benefit.icon className="w-8 h-8 mb-2 text-primary" />
                <CardTitle>{benefit.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{benefit.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-6">Open Positions</h2>
        <div className="space-y-6">
          {jobOpenings.map((job, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{job.title}</CardTitle>
                <CardDescription>{job.department} • {job.location}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">{job.description}</p>
                <Button>Apply Now</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}