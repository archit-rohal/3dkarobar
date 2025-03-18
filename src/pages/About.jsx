
import React, { useEffect } from 'react';
import { Container, Section } from '@/components/ui/Container';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/Button';

export default function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="pt-40 pb-16 md:pt-48 md:pb-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-busybee-50/50 to-white -z-10"></div>
        
        <Container>
          <div className="max-w-3xl animate-slide-in">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              About 3Dkarobar 
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              Pioneering the future of manufacturing through advanced 3D printing technologies and materials.
            </p>
          </div>
        </Container>
      </section>
      
      {/* Our Story Section */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative animate-fade-in">
            <div className="aspect-w-4 aspect-h-3 rounded-lg overflow-hidden shadow-medium">
              <img
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
                alt="Busybee team working together"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-busybee-50 rounded-lg -z-10"></div>
          </div>
          
          <div className="animate-slide-in">
            <h2 className="text-3xl font-bold">Our Story</h2>
            <p className="mt-4 text-muted-foreground">
              Founded in 2024, 3Dkarobar began with an aim: to make advanced manufacturing technologies accessible to businesses of all sizes.
            </p>
            {/* <p className="mt-4 text-muted-foreground">
              Our journey has been defined by continuous innovation and a commitment to excellence. We've pioneered breakthroughs in metal and polymer printing technologies, and developed proprietary materials that set new standards for durability, precision, and performance.
            </p> */}
            <p className="mt-4 text-muted-foreground">
              Today, we serve clients across diverse industries—from automotive to healthcare and consumer goods—helping them leverage the transformative power of 3D printing to solve complex manufacturing challenges.
            </p>
          </div>
        </div>
      </Section>
      
      {/* Mission & Values Section */}
      <Section className="bg-secondary">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl font-bold">Our Mission & Values</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            Guiding principles that drive everything we do
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Innovation",
              description: "We continuously push the boundaries of what's possible in 3D printing, investing heavily in R&D to develop groundbreaking technologies and materials.",
              delay: 0
            },
            {
              title: "Excellence",
              description: "We are committed to delivering the highest quality products and services, exceeding expectations in every aspect of our business.",
              delay: 100
            },
            {
              title: "Sustainability",
              description: "We believe in responsible manufacturing, creating solutions that minimize waste and environmental impact while maximizing resource efficiency.",
              delay: 200
            }
          ].map((value, index) => (
            <div 
              key={index} 
              className="bg-card border border-border rounded-lg p-6 shadow-soft animate-fade-in"
              style={{ animationDelay: `${value.delay}ms` }}
            >
              <h3 className="text-xl font-semibold">{value.title}</h3>
              <p className="mt-2 text-muted-foreground">{value.description}</p>
            </div>
          ))}
        </div>
      </Section>
      
      {/* Leadership Team Section */}
      {/* <Section>
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl font-bold">Our Leadership Team</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            Meet the experts driving innovation at Busybee 3D Hub
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              name: "Sarah Johnson",
              title: "Chief Executive Officer",
              bio: "With over 20 years of experience in advanced manufacturing, Sarah leads our global strategy and operations.",
              image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
              delay: 0
            },
            {
              name: "Michael Chen",
              title: "Chief Technology Officer",
              bio: "A pioneer in 3D printing technologies, Michael oversees our R&D initiatives and product development.",
              image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
              delay: 100
            },
            {
              name: "David Rodriguez",
              title: "Chief Operations Officer",
              bio: "David ensures the seamless execution of our manufacturing processes and supply chain operations.",
              image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
              delay: 200
            }
          ].map((person, index) => (
            <div 
              key={index} 
              className="bg-card border border-border rounded-lg overflow-hidden shadow-soft transition-all duration-300 hover:shadow-medium animate-fade-in"
              style={{ animationDelay: `${person.delay}ms` }}
            >
              <div className="aspect-w-3 aspect-h-4 w-full h-64 relative overflow-hidden">
                <img
                  src={person.image}
                  alt={person.name}
                  className="object-cover w-full h-full object-top"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold">{person.name}</h3>
                <p className="text-sm text-busybee-500">{person.title}</p>
                <p className="mt-2 text-muted-foreground">{person.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>
       */}
      {/* Call to Action Section */}
      <Section className="bg-secondary">
        <div className="text-center max-w-3xl mx-auto animate-fade-in">
          <h2 className="text-3xl font-bold">Ready to Partner with 3Dkarobar?</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Let our experts guide you to the perfect 3D printing solution for your business needs.
          </p>
          <div className="mt-8 flex justify-center gap-x-4">
            <Button to="/expert-contact" size="lg">
              Talk to our Experts
            </Button>
            <Button to="/contact" variant="outline" size="lg">
              Contact Us
            </Button>
          </div>
        </div>
      </Section>
      
      <Footer />
    </>
  );
}
