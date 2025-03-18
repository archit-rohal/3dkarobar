import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container, Section } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ArrowRight } from 'lucide-react';

export default function PolymerPrinters() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const printerTypes = [
    {
      title: "Stereolithography (SLA)",
      description: "High-resolution 3D printing technology using a laser to cure liquid resin into hardened plastic, ideal for detailed prototypes and models.",
      image: "https://images.unsplash.com/photo-1581092335397-9583eb92d232?q=80&w=2070",
      link: "/printers/polymer/sla"
    },
    {
      title: "Selective Laser Sintering (SLS)",
      description: "Powder-based technology that uses a laser to sinter polymer powder particles together, creating strong functional parts without supports.",
      image: "https://images.unsplash.com/photo-1578736641330-3155e606cd40?q=80&w=2070",
      link: "/printers/polymer/sls"
    },
    {
      title: "Fused Deposition Modeling (FDM)",
      description: "The most widely used 3D printing technology that builds parts layer-by-layer by extruding thermoplastic filaments.",
      image: "https://images.unsplash.com/photo-1550052558-11de18b04282?q=80&w=2070",
      link: "/printers/polymer/fdm"
    }
  ];

  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="pt-40 pb-16 md:pt-48 md:pb-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-busybee-50/50 to-white -z-10"></div>
        
        <Container>
          <div className="max-w-3xl animate-slide-in">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              Polymer 3D Printers
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              Advanced polymer printing solutions for prototyping, production, and professional applications with exceptional detail and material versatility.
            </p>
          </div>
        </Container>
      </section>

      {/* Technologies Section */}
      <Section>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Our Polymer 3D Printing Technologies</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            Discover our range of polymer 3D printing technologies designed for different applications and requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {printerTypes.map((type, index) => (
            <div key={index} className="bg-card border border-border rounded-lg overflow-hidden shadow-soft transition-all duration-300 hover:shadow-medium hover:-translate-y-1 animate-fade-in" 
                 style={{ animationDelay: `${index * 100}ms` }}>
              <div className="aspect-w-16 aspect-h-9 w-full relative overflow-hidden">
                <img
                  src={type.image}
                  alt={type.title}
                  className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold">{type.title}</h3>
                <p className="mt-2 text-muted-foreground">{type.description}</p>
                <Link to={type.link}>
                  <Button variant="link" className="mt-4 p-0">
                    Learn more <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Section>
      
      {/* Materials Section */}
      <Section className="bg-secondary">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-in">
            <h2 className="text-3xl md:text-4xl font-bold">
              Polymer Printing Materials
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Our extensive range of polymer materials offers versatile properties for various applications.
            </p>

            <div className="mt-8 grid gap-6">
              {[
                {
                  title: "Engineering Plastics",
                  description: "High-performance materials like Nylon, ABS, and PC offering durability, heat resistance, and mechanical strength."
                },
                {
                  title: "Flexible Materials",
                  description: "TPU, TPE, and other elastomeric materials for applications requiring flexibility and impact resistance."
                },
                {
                  title: "Specialty Resins",
                  description: "Biocompatible, castable, and high-temperature resistant resins for specialized applications."
                },
                {
                  title: "Composite Materials",
                  description: "Carbon fiber, glass fiber, and metal-filled polymers for enhanced mechanical properties."
                }
              ].map((material, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-lg bg-busybee-100 text-busybee-600">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">{material.title}</h3>
                    <p className="mt-1 text-muted-foreground">{material.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative animate-fade-in">
            <div className="aspect-w-4 aspect-h-3 rounded-lg overflow-hidden shadow-medium">
              <img
                src="https://images.unsplash.com/photo-1567633090480-f19f2f67c088?q=80&w=2070"
                alt="3D printed polymer parts"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-busybee-50 rounded-lg -z-10"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-busybee-100 rounded-lg -z-10"></div>
          </div>
        </div>
      </Section>

      {/* Applications Section */}
      <Section>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Common Applications
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: "Product Development",
              description: "Rapid prototyping and iterative design for consumer products, electronics, and more.",
              icon: "💡"
            },
            {
              title: "Healthcare",
              description: "Medical models, surgical guides, and customized prosthetics with biocompatible materials.",
              icon: "🩺"
            },
            {
              title: "Architecture",
              description: "Detailed architectural models with precision and aesthetic quality.",
              icon: "🏛️"
            },
            {
              title: "Education",
              description: "Educational models and classroom tools for enhanced learning experiences.",
              icon: "🎓"
            }
          ].map((app, index) => (
            <div key={index} className="bg-card border border-border rounded-lg p-6 shadow-soft hover:shadow-medium transition-all">
              <div className="text-4xl mb-4">{app.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{app.title}</h3>
              <p className="text-muted-foreground">{app.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Call to Action Section */}
      <Section className="bg-busybee-50/30">
        <div className="text-center max-w-3xl mx-auto animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold">
            Find Your Ideal Polymer 3D Printing Solution
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Speak with our experts to identify the perfect polymer printer and materials for your specific application needs.
          </p>
          <Button to="/expert-contact" size="lg" className="mt-8 shadow-soft">
            Talk to our Polymer Printing Expert
          </Button>
        </div>
      </Section>

      <Footer />
    </>
  );
}