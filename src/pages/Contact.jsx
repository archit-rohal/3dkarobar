import React, { useState, useEffect } from 'react';
import { Container, Section } from '@/components/ui/Container';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/Button';
import { toast } from 'sonner';

export default function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast.success('Your message has been sent!', {
        description: 'Our team will contact you shortly.',
      });
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        message: '',
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="pt-40 pb-16 md:pt-48 md:pb-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-busybee-50/50 to-white -z-10"></div>
        
        <Container>
          <div className="max-w-3xl animate-slide-in">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              Contact Us
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              Have questions or need more information? Our team is here to help.
            </p>
          </div>
        </Container>
      </section>
      
      {/* Contact Form & Info Section */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="animate-slide-in">
            <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="block w-full rounded-md border border-input bg-background px-3 py-2 text-foreground shadow-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-busybee-500"
                    placeholder=""
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="block w-full rounded-md border border-input bg-background px-3 py-2 text-foreground shadow-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-busybee-500"
                    placeholder=""
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-foreground mb-1">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="block w-full rounded-md border border-input bg-background px-3 py-2 text-foreground shadow-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-busybee-500"
                    placeholder=""
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="block w-full rounded-md border border-input bg-background px-3 py-2 text-foreground shadow-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-busybee-500"
                    placeholder=""
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="block w-full rounded-md border border-input bg-background px-3 py-2 text-foreground shadow-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-busybee-500"
                  placeholder="How can we help you?"
                ></textarea>
              </div>
              
              <div>
                <Button 
                  type="submit" 
                  className="w-full sm:w-auto"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </div>
            </form>
          </div>
          
          <div className="animate-slide-in" style={{ animationDelay: '100ms' }}>
            <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
            
            <div className="bg-card border border-border rounded-lg p-6 shadow-soft">
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium">Sales Office</h3>
                  <address className="not-italic mt-2 text-muted-foreground">
                    Abhinav Shukla<br />
                    Email: abhinav.shukla@3dkarobar.com<br />
                    Phone: +43 (677) 61678286<br />
                    <br />
                    Anna-bastel-gasse 1/4/15<br />
                    Seestadt 1220
                    Vienna - Austria
                  </address>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium">Office Address</h3>
                  <address className="not-italic mt-2 text-muted-foreground">
                    Archit Rohal<br />
                    Email: archit.rohal@3dkarobar.com<br />
                    Phone: +91-9354486831<br />
                    <br />
                    Tower A, Highend Paradise<br />
                    Rajnagar Extension<br />
                    Ghaziabad - 201017<br />
                    Uttar Pradesh - India
                  </address>
                </div>

                <div>
                  <h3 className="text-lg font-medium">General Inquiries</h3>
                  <p className="mt-2 text-muted-foreground">
                    <a href="mailto:contact@3dkarobar.com" className="hover:text-busybee-500">
                    contact@3dkarobar.com
                    </a>
                  </p>
                </div>
                
                
              </div>
              
              <div className="mt-8">
                <h3 className="text-lg font-medium mb-4">Connect With Us</h3>
                <div className="flex">
                  <a 
                    href="https://www.linkedin.com/company/3dkarobar/" 
                    className="text-muted-foreground hover:text-busybee-500 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect x="2" y="9" width="4" height="12"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <Button to="/expert-contact" variant="outline" className="w-full">
                Talk to our leading Expert
              </Button>
            </div>
          </div>
        </div>
      </Section>
      
      {/* Map Section (Placeholder) */}
      <Section className="bg-secondary">
        <div className="rounded-lg overflow-hidden border border-border h-96 shadow-soft animate-fade-in">
          <div className="h-full w-full bg-muted flex items-center justify-center">
            <p className="text-muted-foreground">Map placeholder - would integrate Google Maps or similar here</p>
          </div>
        </div>
      </Section>
      
      <Footer />
    </>
  );
}
