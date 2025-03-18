import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container, Section } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ArrowRight, CheckCircle } from 'lucide-react';

export default function LaserPrinter() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const printers = [
    {
      name: "MetalMaster Pro X500",
      description: "High-powered laser metal printer with 500 x 500 x 500 mm build volume, ideal for industrial production.",
      image: "https://images.unsplash.com/photo-1616690710400-a16d146927c5?q=80&w=2067",
      features: [
        "500W fiber laser for rapid melting",
        "Multi-laser option available",
        "Integrated powder management system",
        "Advanced monitoring and quality control"
      ],
      price: "Starting at $450,000"
    },
    {
      name: "MetalMaster Advanced 350",
      description: "Mid-range laser-based metal printer with exceptional surface quality and reliability.",
      image: "https://images.unsplash.com/photo-1570222094114-d054a817e56b?q=80&w=2070",
      features: [
        "350 x 350 x 400 mm build volume",
        "300W precision laser system",
        "Integrated filtration and recycling",
        "Compatible with all standard metal powders"
      ],
      price: "Starting at $275,000"
    },
    {
      name: "MetalMaster Entry 200",
      description: "Entry-level direct metal laser sintering system for research and small production runs.",
      image: "https://images.unsplash.com/photo-1637604984830-30056b22e385?q=80&w=2070",
      features: [
        "200 x 200 x 200 mm build volume",
        "200W laser system",
        "User-friendly interface",
        "Lower operating costs with modular design"
      ],
      price: "Starting at $180,000"
    }
  ];

  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="pt-40 pb-16 md:pt-48 md:pb-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-busybee-50/90 via-busybee-50/40 to-white -z-10"></div>
        
        <Container>
          <div className="max-w-3xl animate-slide-in">
            <Link to="/printers/metal" className="text-busybee-500 flex items-center mb-4 hover:underline">
              <ArrowRight className="mr-2 h-4 w-4 rotate-180" />
              Back to Metal Printers
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              Laser Metal 3D Printers
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              Experience precision metal manufacturing with our advanced laser-based 3D printing solutions, offering exceptional detail and superior mechanical properties.
            </p>
          </div>
        </Container>
      </section>

      {/* Technology Overview */}
      <Section className="bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold">
              Direct Metal Laser Sintering Technology
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Our laser metal 3D printers utilize advanced DMLS technology to create complex metal parts with exceptional mechanical properties and surface finish.
            </p>

            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4">Key Benefits</h3>
              <ul className="space-y-3">
                {[
                  "Superior part density and mechanical properties",
                  "High precision and surface quality",
                  "Wide range of compatible metal alloys",
                  "Complex internal geometries possible",
                  "Ideal for aerospace and medical applications"
                ].map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-busybee-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="relative animate-fade-in">
            <div className="aspect-w-4 aspect-h-3 rounded-lg overflow-hidden shadow-medium">
              <img 
                src="https://images.unsplash.com/photo-1632571401005-458e9d244591?q=80&w=1971" 
                alt="Laser Metal 3D Printing Technology" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-busybee-50 rounded-lg -z-10"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-busybee-100 rounded-lg -z-10"></div>
          </div>
        </div>
      </Section>

      {/* Products Section */}
      <Section className="bg-secondary">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Our Laser Metal Printers</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            Choose from our range of industrial-grade laser metal 3D printers, each designed for specific production needs.
          </p>
        </div>

        {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {printers.map((printer, index) => (
            <div 
              key={index}
              className="bg-card border border-border rounded-lg overflow-hidden shadow-soft transition-all duration-300 hover:shadow-medium hover:-translate-y-1 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="aspect-w-16 aspect-h-9 w-full relative overflow-hidden">
                <img
                  src={printer.image}
                  alt={printer.name}
                  className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold">{printer.name}</h3>
                <p className="mt-2 text-muted-foreground">{printer.description}</p>
                
                <div className="mt-4">
                  <h4 className="text-sm font-semibold text-busybee-600 mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {printer.features.map((feature, i) => (
                      <li key={i} className="text-sm flex items-start">
                        <span className="text-busybee-500 mr-2">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mt-4 pt-4 border-t border-border flex justify-between items-center">
                  <span className="text-sm font-medium">{printer.price}</span>
                  <Button variant="outline" size="sm">
                    Request Quote
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div> */}
      </Section>

      {/* Call to Action */}
      <Section className="bg-busybee-50/30">
        <div className="text-center max-w-3xl mx-auto animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold">
            Ready to Transform Your Metal Manufacturing?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Connect with our experts to find the perfect laser metal 3D printer for your specific requirements.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Button to="/expert-contact" size="lg" className="shadow-soft">
              Talk to our Expert
            </Button>
            <Button to="#" variant="outline" size="lg">
              Download Specifications <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </Section>

      <Footer />
    </>
  );
}