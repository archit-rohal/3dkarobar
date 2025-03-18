import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from '@/components/ui/Container';
import { Logo } from '../ui/Logo';

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-secondary py-12 border-t border-border">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            {/* Add a fixed height container for the logo */}
            <div className="h-16 mb-4"> {/* Adjust h-16 as needed */}
              <Link to="/" className="inline-block h-full">
                <Logo 
                  height={300}
                  width="auto" 
                  variant="colored"
                  className="h-full w-auto object-contain"
                />
              </Link>
            </div>
          </div>
          
          <div>
            <h4 className="font-medium text-foreground mb-4">Products</h4>
            <ul className="space-y-2">
              <li>
                <Link to="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Metal 3D Printers
                </Link>
              </li>
              <li>
                <Link to="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Polymer 3D Printers
                </Link>
              </li>
              <li>
                <Link to="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Other 3D Printers
                </Link>
              </li>
              <li>
                <Link to="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Metal Powder
                </Link>
              </li>
              <li>
                <Link to="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Resin
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium text-foreground mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/expert-contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Talk to Experts
                </Link>
              </li>
              <li>
                <Link to="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium text-foreground mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link to="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-border flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} 3Dkarobar. All rights reserved.
          </p>
          
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link to="#" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="LinkedIn">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </Link>
            <Link to="#" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="Twitter">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
              </svg>
            </Link>
            <Link to="#" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="Facebook">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </Link>
            <Link to="#" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="Instagram">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
