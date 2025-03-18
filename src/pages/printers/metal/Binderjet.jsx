import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container, Section } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ArrowRight, CheckCircle } from 'lucide-react';

export default function BinderjetPrinter() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const printers = [
    {
      name: "MetalMaster Binder X1000",
      description: "Large-format metal binder jetting system for high-volume production of complex metal parts.",
      image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=2070",
      features: [
        "1000 x 600 x 500 mm build volume",
        "High-speed print head array",
        "Automated powder handling",
        "Advanced thermal processing"
      ],
      price: "Starting at $750,000"
    },
    {
      name: "MetalMaster Binder 600",
      description: "Mid-range binder jetting printer perfect for medium volume production and prototyping.",
      image: "https://images.unsplash.com/photo-1581092335397-9583eb92d232?q=80&w=2070",
      features: [
        "600 x 400 x 400 mm build volume",
        "Dual print head system",
        "Integrated powder recycling",
        "Real-time process monitoring"
      ],
      price: "Starting at $450,000"
    },
    {
      name: "MetalMaster Binder Lab",
      description: "Compact binder jetting system ideal for research, development, and small batch production.",
      image: "https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?q=80&w=2070",
      features: [
        "250 x 250 x 250 mm build volume",
        "Single high-precision print head",
        "Desktop-sized footprint",
        "Educational institution friendly"
      ],
      price: "Starting at $280,000"
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
              Metal Binder Jetting Printers
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              Fast and cost-effective metal 3D printing through selective deposition of binding agents, perfect for high-volume production of complex metal parts.
            </p>
          </div>
        </Container>
      </section>

      {/* Technology Overview */}
      <Section className="bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold">
              Binder Jetting Technology
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Metal binder jetting selectively deposits liquid binding agents onto metal powder layers, creating green parts that are then sintered to achieve full density.
            </p>

            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4">Key Benefits</h3>
              <ul className="space-y-3">
                {[
                  "High production speed and scalability",
                  "Lower cost per part compared to laser-based systems",
                  "Support-free printing process",
                  "Wide range of available materials",
                  "Excellent for complex geometries"
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
                src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=2070" 
                alt="Binder Jetting Technology" 
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
          <h2 className="text-3xl md:text-4xl font-bold">Our Binder Jetting Systems</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            Explore our range of metal binder jetting systems for various production scales.
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
            Scale Your Metal Production
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Learn how metal binder jetting can transform your manufacturing process with higher throughput and lower costs.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Button to="/expert-contact" size="lg" className="shadow-soft">
              Talk to our Expert
            </Button>
            <Button to="#" variant="outline" size="lg">
              Download Binder Jetting Guide <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </Section>

      <Footer />
    </>
  );
}