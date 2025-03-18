import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";
import { Container, Section } from "@/components/ui/Container";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
// Import the images
import metalPrinterImg from "../assets/metalPrinterImg.jpeg";
import materialsImg from "../assets/materials.jpeg";
import manufacturingImg from "../assets/manufacturing.jpeg";
import why_choose_3dkarobar from "../assets/why_choose_3dkarobar.jpeg";

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="pt-40 pb-0 md:pt-48 relative overflow-hidden">
        {/* Enhanced layered background with 3D printing-inspired elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-busybee-50/80 to-white -z-10"></div>
        
        {/* 3D printing-inspired geometric patterns */}
        <div className="absolute top-0 left-0 w-full h-full -z-10">
          {/* Larger primary blur element */}
          <div className="absolute top-1/4 right-1/5 w-80 h-80 bg-busybee-200/40 rounded-full filter blur-3xl"></div>
          
          {/* Secondary glow elements */}
          <div className="absolute bottom-1/4 left-1/5 w-96 h-96 bg-busybee-100/30 rounded-full filter blur-3xl"></div>
          
          {/* Subtle layering effect */}
          <div className="absolute top-2/3 right-1/3 w-48 h-48 bg-busybee-300/20 rounded-full filter blur-2xl"></div>
          
          {/* Technical grid pattern - subtle wireframe suggestion */}
          <div className="absolute inset-0 opacity-5 bg-[linear-gradient(to_right,#6b7280_1px,transparent_1px),linear-gradient(to_bottom,#6b7280_1px,transparent_1px)] bg-[size:24px_24px]"></div>
          
          {/* Small accent dots representing printing points */}
          <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-busybee-400/40 rounded-full"></div>
          <div className="absolute bottom-1/3 right-1/3 w-3 h-3 bg-busybee-500/30 rounded-full"></div>
          <div className="absolute top-2/3 left-2/3 w-5 h-5 bg-busybee-300/30 rounded-full"></div>
        </div>
        
        <Container className="text-center relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold tracking-tight animate-slide-in">
            Advance your manufacturing potential with
            <span className="gradient-text block mt-2 h-20">
              innovative 3D Printing solutions
            </span>
          </h1>

          <p
            className="mt-6 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto animate-slide-in"
            style={{ animationDelay: "100ms" }}
          >
            3Dkarobar delivers precision 3D printers, premium materials and advanced manufacturing services.
          </p>

          <div
            className="mt-10 flex justify-center gap-x-6 animate-slide-in"
            style={{ animationDelay: "200ms" }}
          >
            <Button 
              className="text-lg group transition-all duration-300 hover:scale-[1.03] shadow-soft hover:shadow-medium py-6"
              to="/expert-contact"
            >
              Talk to our Expert
              <ArrowRight className="ml-2 inline-block group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </Container>
      </section>

      {/* Featured Solutions Section */}
      <Section id="solutions" className="bg-white pt-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "3D Printers",
              description:
                "Comprehensive range of metal, polymer, and specialty 3D printing solutions",
              image: metalPrinterImg,
              link: "/printers",
              delay: 0,
            },
            {
              title: "Materials",
              description: "Premium quality materials including metal powders, polymers, and specialized compounds",
              image: materialsImg,
              link: "/materials",
              delay: 100,
            },
            {
              title: "Manufacturing Services",
              description:
                "End-to-end manufacturing solutions for medical, industrial, and specialized applications",
              image: manufacturingImg,
              link: "/manufacturing-services",
              delay: 200,
            },
          ].map((item, index) => (
            <Link
              to={item.link}
              key={index}
              className="block bg-card border border-border rounded-lg overflow-hidden shadow-soft transition-all duration-300 hover:shadow-medium hover:-translate-y-1 animate-fade-in"
              style={{ animationDelay: `${item.delay}ms` }}
            >
              <div className="aspect-w-16 aspect-h-9 w-full h-48 relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="mt-2 text-muted-foreground">{item.description}</p>
                <div className="mt-4 text-busybee-500 flex items-center">
                  Learn more
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      {/* Features Section */}
      <Section className="bg-secondary">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-in">
            <h2 className="text-3xl md:text-4xl font-bold">
              Why Choose 3Dkarobar?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              We provide comprehensive 3D printing solutions to advance your
              manufacturing processes
            </p>

            <div className="mt-8 grid gap-6">
              {[
                {
                  title: "Highly Advanced 3D Printers",
                  description:
                    "Our 3d printers deliver unmatched precision and reliability to advance your manufacturing capabilities.",
                },
                {
                  title: "3D Printing Industry Expertise",
                  description:
                    "Our professionals offer guidance from initial concept to final production, helping you optimize the entire process of your 3D printing journey",
                },
                {
                  title: "Local Service Support",
                  description:
                    "We provide dedicated, on-the-ground assistance to ensure smooth installations, maintenance, and troubleshooting for all your 3D printing needs.",
                },
                {
                  title: "End to end solutions",
                  description:
                    "From printers to materials to support - we've got you covered.",
                },
              ].map((feature, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-lg bg-busybee-100 text-busybee-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">{feature.title}</h3>
                    <p className="mt-1 text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative animate-fade-in">
            <div className="aspect-w-4 aspect-h-3 rounded-lg overflow-hidden shadow-medium">
              <img
                src={why_choose_3dkarobar}
                alt="3D Karobar expertise"
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
            Ready to Transform Your Manufacturing?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Connect with our experts to discover the perfect 3D printing
            solution for your specific needs.
          </p>
          <Button to="/expert-contact" size="lg" className="mt-8 shadow-soft">
            Talk to our Experts
          </Button>
        </div>
      </Section>

      <Footer />
    </>
  );
}