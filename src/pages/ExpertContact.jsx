
import React, { useEffect } from 'react';
import { Container, Section } from '@/components/ui/Container';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/Button';
import abhinav_dp from '../assets/abhinav_dp.jpeg';

export default function ExpertContact() {
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
              Talk to Our 3D Printing Expert
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              Get personalized guidance from our team of specialists to find the perfect solution for your needs.
            </p>
          </div>
        </Container>
      </section>
      
      {/* Expert Profile Section */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-1 animate-slide-in">
            <div className="sticky top-24">
              <div className="bg-card border border-border rounded-lg overflow-hidden shadow-soft">
                <div className="aspect-w-1 aspect-h-1 w-full h-64 relative overflow-hidden">
                  <img
                    src={abhinav_dp}
                    alt="Abhinav Shukla"
                    loading='eager'
                    className="object-cover w-full h-full object-center"
                  />
                </div>
                <div className="p-6">
                  <h2 className="text-2xl font-semibold">Abhinav Shukla</h2>
                  <p className="text-busybee-600 font-medium">Co-founder and Business Head</p>
                  
                  <div className="mt-4 space-y-2">
                    <div className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-busybee-500 mr-3 mt-0.5">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                      </svg>
                      <div>
                        <p className="text-sm text-muted-foreground">Phone</p>
                        <a href="tel:+43 677 61678286" className="text-foreground hover:text-busybee-500">
                          +43 (677) 61678286
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-busybee-500 mr-3 mt-0.5">
                        <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                      </svg>
                      <div>
                        <p className="text-sm text-muted-foreground">Email</p>
                        <a href="mailto:abhinav.shukla@3dkarobar.com" className="text-foreground hover:text-busybee-500 break-all">
                         abhinav.shukla@3dkarobar.com 
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-busybee-500 mr-3 mt-0.5">
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                        <rect x="2" y="9" width="4" height="12"></rect>
                        <circle cx="4" cy="4" r="2"></circle>
                      </svg>
                      <div>
                        <p className="text-sm text-muted-foreground">LinkedIn</p>
                        <a href="https://www.linkedin.com/in/abhinav-shukla-18a718135/" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-busybee-500">
                          linkedin.com/in/abhinav-shukla
                        </a>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <Button className="w-full">Schedule a Meeting</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-2 animate-slide-in" style={{ animationDelay: '100ms' }}>
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-semibold">About Abhinav Shukla (Co-founder and Business Head)</h2>
                <div className="mt-4 space-y-4 text-muted-foreground">
                  <p>
                    Abhinav is a leading expert in advanced 3D printing technologies with over 15 years of experience in the field of manufacturing with diversified industry verticals. With industry experience, Abhinav has helped numerous companies implement cutting-edge manufacturing solutions.
                  </p>
                  <p>
                    Specializing in both metal and polymer 3D printing applications, Abhinav provides comprehensive guidance on printer selection, material optimization, and process integration. Their expertise spans across industries including aerospace, automotive, medical, and consumer products.
                  </p>
                  <p>
                    As 3Dkarobar's Senior 3D Printing Consultant, Abhinav works closely with clients to understand their unique requirements and develop tailored solutions that drive innovation and efficiency in their manufacturing processes.
                  </p>
                </div>
              </div>
              
              <div className="bg-busybee-50 p-6 rounded-lg border border-busybee-100">
                <h2 className="text-xl font-semibold text-busybee-700">Ready to revolutionize your manufacturing?</h2>
                <p className="mt-2 text-busybee-600">
                  Contact Abhinav today to schedule a consultation and discover how 3Dkarobar's 3D printing solutions can transform your business.
                </p>
                <div className="mt-4 flex flex-wrap gap-4">
                  <Button>Schedule a Meeting</Button>
                  <Button variant="outline">Send a Message</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
      
      {/* Related Experts Section
      <Section className="bg-secondary">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl font-bold">Meet More Experts</h2>
          <p className="mt-4 text-muted-foreground max-w-3xl mx-auto">
            Our team of specialists is ready to assist you with any aspect of 3D printing
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              name: "Dr. Sarah Lee",
              title: "Materials Specialist",
              image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
              description: "Expert in metal powders and polymer resins for industrial applications.",
              delay: 0
            },
            {
              name: "James Wilson",
              title: "Production Systems Engineer",
              image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
              description: "Specializes in integrating 3D printing into existing manufacturing workflows.",
              delay: 100
            },
            {
              name: "Maria Rodriguez",
              title: "Design for AM Consultant",
              image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
              description: "Helps optimize part designs for successful additive manufacturing.",
              delay: 200
            }
          ].map((expert, index) => (
            <div 
              key={index} 
              className="bg-card border border-border rounded-lg overflow-hidden shadow-soft transition-all duration-300 hover:shadow-medium hover:-translate-y-1 animate-fade-in"
              style={{ animationDelay: `${expert.delay}ms` }}
            >
              <div className="aspect-w-3 aspect-h-4 w-full h-48 relative overflow-hidden">
                <img
                  src={expert.image}
                  alt={expert.name}
                  className="object-cover w-full h-full object-top"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold">{expert.name}</h3>
                <p className="text-sm text-busybee-500">{expert.title}</p>
                <p className="mt-2 text-sm text-muted-foreground">{expert.description}</p>
                <Button variant="link" className="mt-3 p-0">
                  Contact →
                </Button>
              </div>
            </div>
          ))}
        </div>
      </Section> */}
      
      <Footer />
    </>
  );
}
