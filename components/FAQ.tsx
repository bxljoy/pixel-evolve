"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqItems = [
  {
    question: "What types of SAAS solutions does PixelEvolve offer?",
    answer: "PixelEvolve offers a wide range of SAAS solutions, including customer relationship management (CRM) systems, project management tools, data analytics platforms, and custom-built SAAS applications tailored to specific industry needs."
  },
  {
    question: "How does the custom software development process work?",
    answer: "Our custom software development process involves several stages: requirements gathering, planning, design, development, testing, deployment, and maintenance. We work closely with clients throughout each stage to ensure the final product meets their specific needs and expectations."
  },
  {
    question: "Can PixelEvolve integrate AI into existing software systems?",
    answer: "Yes, PixelEvolve specializes in AI integration. We can enhance your existing software systems with AI capabilities such as machine learning algorithms, natural language processing, and predictive analytics to improve efficiency and decision-making processes."
  },
  {
    question: "What industries does PixelEvolve typically work with?",
    answer: "PixelEvolve has experience working across various industries, including finance, healthcare, e-commerce, education, and manufacturing. Our versatile team can adapt to the unique requirements of different sectors."
  },
  {
    question: "How does PixelEvolve ensure the security of its SAAS solutions?",
    answer: "We prioritize security in all our SAAS solutions by implementing industry-standard encryption, regular security audits, multi-factor authentication, and compliance with relevant data protection regulations such as GDPR and CCPA."
  },
  {
    question: "What kind of support does PixelEvolve provide after project completion?",
    answer: "PixelEvolve offers comprehensive post-project support, including regular maintenance, updates, bug fixes, and 24/7 technical support. We also provide training and documentation to ensure smooth adoption and usage of our solutions."
  }
];

const FAQ = () => {
  return (
    <section id="faq" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-foreground">Frequently Asked Questions</h2>
        <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
          {faqItems.map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left">{item.question}</AccordionTrigger>
              <AccordionContent>{item.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;