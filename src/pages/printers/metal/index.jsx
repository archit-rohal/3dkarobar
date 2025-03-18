import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container, Section } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ArrowRight } from 'lucide-react';

// Import images
import laserPrinterImg from '../../../assets/laser_printer.jpeg';
import ebmPrinterImg from '../../../assets/ebm_printer.jpeg';
import binderjetPrinterImg from '../../../assets/binderjet_printer.jpeg';
import lithographyPrinterImg from '../../../assets/lithography_printer.jpeg';
import metalPrintersAdvantages from '../../../assets/metalp_advantages.jpeg';

export default function MetalPrinters() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const printerTypes = [
    {
      title: "Laser Metal 3D Printers",
      description: "Direct Metal Laser Sintering (DMLS) and Selective Laser Melting (SLM) technologies for precise metal parts with complex geometries.",
      image: laserPrinterImg,
      link: "/printers/metal/laser"
    },
    {
      title: "Electron Beam Melting (EBM)",
      description: "High-energy electron beam technology for producing dense metal parts with excellent mechanical properties.",
      image: ebmPrinterImg,
      link: "/printers/metal/ebm"
    },
    {
      title: "Binder Jetting Metal",
      description: "Fast and cost-effective metal 3D printing through selective deposition of binding agents into metal powder.",
      image: binderjetPrinterImg,
      link: "/printers/metal/binderjet"
    },
    {
      title: "Metal Lithography",
      description: "Photopolymerization techniques adapted for metal printing with high detail and smooth surface finish.",
      image: lithographyPrinterImg,
      link: "/printers/metal/lithography"
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
              Metal 3D Printers
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              Industrial-grade metal 3D printing solutions for manufacturing, prototyping, and production applications across multiple industries.
            </p>
          </div>
        </Container>
      </section>

      {/* Technologies Section */}
      <Section>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Our Metal 3D Printing Technologies</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            Choose from our selection of cutting-edge metal 3D printing solutions to match your specific manufacturing requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {printerTypes.map((type, index) => (
            <div 
              key={index} 
              className="bg-card border border-border rounded-lg overflow-hidden shadow-soft transition-all duration-300 hover:shadow-medium hover:-translate-y-1 animate-fade-in" 
              style={{ animationDelay: `${index * 100}ms` }}
            >
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
      
      {/* Features Section */}
      <Section className="bg-secondary">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-in">
            <h2 className="text-3xl md:text-4xl font-bold">
              Metal 3D Printing Advantages
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Discover why industrial metal 3D printing is transforming manufacturing processes worldwide.
            </p>

            <div className="mt-8 grid gap-6">
              {[
                {
                  title: "Complex Geometries",
                  description: "Create intricate designs and internal structures impossible with traditional manufacturing methods."
                },
                {
                  title: "Material Efficiency",
                  description: "Minimize waste by using only the material needed for the part, significantly reducing material costs."
                },
                {
                  title: "Design Freedom",
                  description: "Optimize parts for performance rather than manufacturability constraints."
                },
                {
                  title: "Supply Chain Simplification",
                  description: "Produce on-demand, reducing inventory costs and streamlining the supply chain."
                }
              ].map((feature, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-lg bg-busybee-100 text-busybee-600">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">{feature.title}</h3>
                    <p className="mt-1 text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative animate-fade-in">
            <div className="aspect-w-4 aspect-h-3 rounded-lg overflow-hidden shadow-medium">
              <img
                src={metalPrintersAdvantages}
                alt="metal 3D printing advantages"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-busybee-50 rounded-lg -z-10"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-busybee-100 rounded-lg -z-10"></div>
          </div>
        </div>
      </Section>

      {/* Call to Action Section */}
      <Section className="bg-white">
        <div className="text-center max-w-3xl mx-auto animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold">
            Need Help Selecting the Right Metal 3D Printer?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Our experts can guide you to the perfect solution based on your application, budget, and specifications.
          </p>
          <Button to="/expert-contact" size="lg" className="mt-8 shadow-soft">
            Talk to our Expert
          </Button>
        </div>
      </Section>

      <Footer />
    </>
  );
}