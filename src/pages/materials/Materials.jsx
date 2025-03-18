import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container, Section } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ArrowRight } from 'lucide-react';

// Import images
import metalPowdersImg from '../../assets/metal_powders.jpeg';
import engineeringResinsImg from '../../assets/resin_bottles.jpeg';

export default function Materials() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const materialTypes = [
    {
      title: "Metal Powders",
      description: "High-quality metal powders optimized for various 3D printing technologies including titanium, aluminum, steel, and specialty alloys.",
      image: metalPowdersImg,
      link: "/materials/metal-powder",
      features: [
        "Premium atomized powders",
        "Strict quality control",
        "Wide range of alloys",
        "Optimized for specific printers"
      ]
    },
    {
      title: "Engineering Resins",
      description: "Advanced photopolymer resins for SLA and DLP printing, offering diverse mechanical properties and applications.",
      image: engineeringResinsImg,
      link: "/materials/resin",
      features: [
        "High detail resolution",
        "Various mechanical properties",
        "Specialty formulations",
        "Industry-specific solutions"
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
              3D Printing Materials
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              Premium quality materials engineered for optimal performance across our range of 3D printing technologies.
            </p>
          </div>
        </Container>
      </section>

      {/* Materials Section */}
      <Section>
        <div className="space-y-16">
          {materialTypes.map((material, index) => (
            <div 
              key={index}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            >
              <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-medium">
                  <img
                    src={material.image}
                    alt={material.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              <div>
                <h2 className="text-3xl font-bold">{material.title}</h2>
                <p className="mt-4 text-lg text-muted-foreground">
                  {material.description}
                </p>
                
                <div className="mt-6">
                  <h3 className="text-lg font-semibold mb-3">Key Features:</h3>
                  <ul className="space-y-2">
                    {material.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-busybee-500 mr-2">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link to={material.link}>
                  <Button className="mt-8 group">
                    Explore {material.title}
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
            Need Help Selecting Materials?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Our material experts can help you choose the perfect materials for your specific application requirements.
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