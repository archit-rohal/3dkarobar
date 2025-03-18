import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container, Section } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ArrowRight, CheckCircle } from 'lucide-react';

export default function ManufacturingServices() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const services = [
    {
      title: "Medical Implants",
      description: "Custom medical implants manufactured with biocompatible materials using advanced metal 3D printing technologies.",
      image: "https://images.unsplash.com/photo-1583912268183-a34d41fe464a",
      link: "/manufacturing-services/MedicalImplants",
      features: [
        "FDA-compliant processes",
        "Biocompatible materials",
        "Custom patient solutions",
        "Rapid turnaround"
      ]
    },
    {
      title: "Medical Devices",
      description: "Precision medical devices and instruments manufactured with strict quality control and regulatory compliance.",
      image: "https://images.unsplash.com/photo-1576086213369-97a306d36557",
      link: "/manufacturing-services/MedicalDevices",
      features: [
        "ISO 13485 certified",
        "Clean room facilities",
        "Quality assurance",
        "Design optimization"
      ]
    },
    {
      title: "Dental Brackets",
      description: "High-precision dental brackets and orthodontic components manufactured using advanced 3D printing technologies.",
      image: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99",
      link: "/manufacturing-services/DentalBrackets",
      features: [
        "High precision",
        "Biocompatible materials",
        "Custom solutions",
        "Fast production"
      ]
    },
    {
      title: "Multi-Material Production",
      description: "Advanced manufacturing capabilities combining multiple materials for complex functional parts.",
      image: "https://images.unsplash.com/photo-1581093677620-8cb2c2c5f138",
      link: "/manufacturing-services/MultiMaterials",
      features: [
        "Material combinations",
        "Functional integration",
        "Complex geometries",
        "Design optimization"
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
              Manufacturing Services
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              End-to-end manufacturing solutions leveraging advanced 3D printing technologies for medical, industrial, and specialized applications.
            </p>
          </div>
        </Container>
      </section>

      {/* Services Section */}
      <Section>
        <div className="grid grid-cols-1 gap-16">
          {services.map((service, index) => (
            <div 
              key={index}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            >
              <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-medium">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              <div>
                <h2 className="text-3xl font-bold">{service.title}</h2>
                <p className="mt-4 text-lg text-muted-foreground">
                  {service.description}
                </p>
                
                <div className="mt-6">
                  <h3 className="text-lg font-semibold mb-3">Service Features:</h3>
                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-busybee-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link to={service.link}>
                  <Button className="mt-8 group">
                    Learn More About {service.title}
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Call to Action */}
      <Section className="bg-busybee-50/30">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold">
            Ready to Start Your Manufacturing Project?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Connect with our manufacturing experts to discuss your specific requirements and discover the best solution for your needs.
          </p>
          <Button to="/expert-contact" size="lg" className="mt-8 shadow-soft">
            Discuss Your Project
          </Button>
        </div>
      </Section>

      <Footer />
    </>
  );
}