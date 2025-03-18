import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Container, Section } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ArrowRight } from "lucide-react";

// Import images
import metalPrintersImg from "../../assets/metal_printer.jpeg";
import polymerPrintersImg from "../../assets/polymer_printer.jpeg";
import otherPrintersImg from "../../assets/other_printers.jpeg";

export default function Printers() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const printerCategories = [
    {
      title: "Metal 3D Printers",
      description: "Advanced metal 3D printing solutions including laser-based, electron beam, binder jetting, and lithography technologies for producing high-quality metal parts.",
      image: metalPrintersImg,
      link: "/printers/metal",
      features: [
        "Multiple technologies for different applications",
        "Industrial-grade production capabilities",
        "High precision and material properties",
        "Various metal powder compatibility"
      ]
    },
    {
      title: "Polymer 3D Printers",
      description: "Versatile polymer printing technologies including SLA, SLS, and FDM for prototyping, production parts, and specialized applications.",
      image: polymerPrintersImg,
      link: "/printers/polymer",
      features: [
        "Multiple printing technologies",
        "Wide range of materials",
        "From desktop to industrial scale",
        "High detail to functional parts"
      ]
    },
    {
      title: "Other 3D Printers",
      description: "Specialized 3D printing solutions for unique materials and applications, including ceramic, sand, food, and bioprinting systems.",
      image: otherPrintersImg,
      link: "/printers/other",
      features: [
        "Ceramic printing capabilities",
        "Sand printing for casting",
        "Food-safe printing systems",
        "Bioprinting solutions"
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
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              3D Printers
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              Discover our comprehensive range of 3D printing solutions designed for various materials, applications, and industries.
            </p>
          </div>
        </Container>
      </section>

      {/* Categories Section */}
      <Section>
        <div className="space-y-16">
          {printerCategories.map((category, index) => (
            <div 
              key={index}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            >
              <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-medium">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              <div>
                <h2 className="text-3xl font-bold">{category.title}</h2>
                <p className="mt-4 text-lg text-muted-foreground">
                  {category.description}
                </p>
                
                <div className="mt-6">
                  <h3 className="text-lg font-semibold mb-3">Key Features:</h3>
                  <ul className="space-y-2">
                    {category.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-busybee-500 mr-2">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link to={category.link}>
                  <Button className="mt-8 group">
                    Explore {category.title}
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Footer />
    </>
  );
}