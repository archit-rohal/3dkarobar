import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container, Section } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

export default function OtherPrinters() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const specialtyPrinters = [
    {
      title: "Ceramic 3D Printers",
      description: "Specialized printers for creating complex ceramic parts with high precision and technical properties.",
      image: "https://images.unsplash.com/photo-1481277542470-605612bd2d61?q=80&w=2069",
      features: [
        "Advanced material formulations for ceramics",
        "High-temperature firing capability",
        "Exceptional surface finish",
        "Complex geometries impossible with traditional methods"
      ]
    },
    {
      title: "Sand 3D Printers",
      description: "Large-format printers for creating sand molds and cores for metal casting applications.",
      image: "https://images.unsplash.com/photo-1528283648649-33d4f305b3fb?q=80&w=1974",
      features: [
        "Direct production of sand molds",
        "Complex cooling channels and internal geometries",
        "Eliminates need for tooling",
        "Faster turnaround for metal casting"
      ]
    },
    {
      title: "Food 3D Printers",
      description: "Specialized printers for culinary applications, allowing chefs to create intricate food designs.",
      image: "https://images.unsplash.com/photo-1593642634524-b40b5baae6bb?q=80&w=2069",
      features: [
        "Food-safe materials and components",
        "Compatible with various food substances",
        "Intricate design capabilities",
        "Temperature control for different food types"
      ]
    },
    {
      title: "Bio 3D Printers",
      description: "Advanced printers designed for biomedical applications, capable of printing with living cells.",
      image: "https://images.unsplash.com/photo-1576086476234-9998c7231163?q=80&w=2069",
      features: [
        "Cell-compatible printing environment",
        "Multiple material dispensing systems",
        "Sterile printing chamber",
        "High-precision microfluidic control"
      ]
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
              Specialty 3D Printers
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              Discover our range of specialized 3D printing solutions designed for unique materials and applications beyond traditional plastic and metal.
            </p>
          </div>
        </Container>
      </section>

      {/* Main Section */}
      <Section>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Innovative Specialty Printers</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            Expand your manufacturing capabilities with these advanced specialty 3D printing technologies.
          </p>
        </div>

        <div className="space-y-16">
          {specialtyPrinters.map((printer, index) => (
            <div 
              key={index} 
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center animate-fade-in"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className="rounded-lg overflow-hidden shadow-medium">
                  <img
                    src={printer.image}
                    alt={printer.title}
                    className="w-full h-auto object-cover aspect-video"
                  />
                </div>
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">{printer.title}</h3>
                <p className="text-lg text-muted-foreground mb-6">{printer.description}</p>
                
                <div className="space-y-3">
                  <h4 className="text-lg font-semibold">Key Features:</h4>
                  <ul className="space-y-2">
                    {printer.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-busybee-500 mr-2 mt-1">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <Button className="mt-8" variant="outline">
                  Request Information
                </Button>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Industries Section */}
      <Section className="bg-secondary">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Industries Served</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            Our specialty 3D printers provide innovative solutions for various industries with unique manufacturing needs.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              industry: "Healthcare & Biomedical",
              description: "Custom implants, tissue engineering, and anatomical models with biocompatible materials.",
              icon: "⚕️"
            },
            {
              industry: "Dental",
              description: "High-precision dental models, aligners, and prosthetics with certified materials.",
              icon: "🦷"
            },
            {
              industry: "Art & Architecture",
              description: "Complex artistic creations and detailed architectural models with diverse materials.",
              icon: "🎨"
            },
            {
              industry: "Foundry & Metalcasting",
              description: "Sand molds and cores for complex metal parts without traditional tooling.",
              icon: "🔨"
            },
            {
              industry: "Culinary Arts",
              description: "Creative food designs and presentations for high-end culinary experiences.",
              icon: "🍽️"
            },
            {
              industry: "Research & Education",
              description: "Advanced research applications and educational tools for academic institutions.",
              icon: "🔬"
            }
          ].map((item, index) => (
            <div key={index} className="bg-card border border-border rounded-lg p-6 shadow-soft hover:shadow-medium transition-all animate-fade-in"
                 style={{ animationDelay: `${index * 100}ms` }}>
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{item.industry}</h3>
              <p className="text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Call to Action */}
      <Section>
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold">
            Find Your Specialized 3D Printing Solution
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Our experts can help identify the perfect specialty printer for your unique application requirements.
          </p>
          <Button to="/expert-contact" size="lg" className="mt-8 shadow-soft">
            Talk to a Specialist
          </Button>
        </div>
      </Section>

      <Footer />
    </>
  );
}