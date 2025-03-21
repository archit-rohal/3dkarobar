// import React, { useState, useEffect } from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import { Button } from '@/components/ui/Button';
// import { Container } from '@/components/ui/Container';
// import { cn } from '@/lib/utils';
// import { Logo } from '../ui/Logo';

// // Navigation data structure
// const navigation = [
//   {
//     name: '3D PRINTERS',
//     url: '#',
//     dropdown: [
//       {
//         name: 'Metal 3D Printers',
//         url: '/printers/metal',
//       },
//       {
//         name: 'Polymer 3D Printers',
//         url: 'printers/polymer',
//       },
//       {
//         name: 'Other 3D Printers',
//         url: '/printers/other',
//       }
//     ]
//   },
//   {
//     name: 'MATERIALS',
//     url: '#',
//     dropdown: [
//       {
//         name: 'Metal Powder',
//         url: '/materials/metal-powder',
//       },
//       {
//         name: 'Resin',
//         url: '/materials/resin',
//       }
//     ]
//   },
//   {
//     name: 'MANUFACTURING SERVICES',
//     url: '#',
//     dropdown: [
//       {
//         name: 'Medical Implant',
//         url: '/manufacturing-services/MedicalImplants',
//       },
//       {
//         name: 'Medical Devices',
//         url: '/manufacturing-services/MedicalDevices',
//       },
//       {
//         name: 'Multi-Material Production',
//         url: '/manufacturing-services/MultiMaterials',
//       }
//     ]
//   },
//   {
//     name: 'ABOUT US',
//     url: '/about',
//   },
//   {
//     name: 'CONTACT',
//     url: '/contact',
//   }
// ];

// export function Header() {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const location = useLocation();

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 10);
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   return (
//     <header 
//       className={cn(
//         'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out',
//         isScrolled ? 'backdrop-blur-nav py-3' : 'py-5'
//       )}
//     >
//       <Container className="flex items-center">
//         {/* Logo - Left */}
//         <div className="w-[200px]"> {/* Fixed width for logo section */}
//           <Link to="/" className="flex items-center">
//             <div className="h-16">
//               <Logo 
//                 height="400px"
//                 width="auto"
//                 variant="default"
//                 className="h-full w-auto object-contain"
//               />
//             </div>
//           </Link>
//         </div>

//         {/* Navigation - Center */}
//         <nav className="flex-1 flex justify-center">
//           <div className="flex space-x-12"> {/* Increased space between nav items */}
//             {navigation.map((item) => (
//               item.dropdown ? (
//                 <div key={item.name} className="relative dropdown-container group">
//                   <span className="nav-link cursor-pointer font-semibold">
//                     {item.name}
//                   </span>
//                   <div className="dropdown-menu mt-1 min-w-[180px] w-max rounded-md border border-border bg-card shadow-soft animate-fade-in">
//                     <div className="p-4 grid gap-2 whitespace-nowrap">
//                       {item.dropdown.map((category) => (
//                         <div key={category.name}>
//                           <Link 
//                             to={category.url} 
//                             className="font-medium text-lg block py-2 text-foreground hover:text-busybee-500"
//                           >
//                             {category.name}
//                           </Link>
//                         </div>
//                       ))}
//                     </div>
//                   </div>
//                 </div>
//               ) : (
//                 <Link 
//                   key={item.name} 
//                   to={item.url} 
//                   className={cn(
//                     "nav-link font-semibold",
//                     location.pathname === item.url && "text-busybee-500"
//                   )}
//                 >
//                   {item.name}
//                 </Link>
//               )
//             ))}
//           </div>
//         </nav>

//         {/* Actions - Right */}
//         <div className="w-[200px] flex justify-end"> {/* Fixed width for actions section */}
//           <div className="flex items-center space-x-4">
//             <Button to="/expert-contact" variant="default" size="sm" className="animate-pulse-slow">
//               Talk to our Expert
//             </Button>

//             <div className="md:hidden">
//               <Button variant="ghost" size="icon" className="rounded-full" aria-label="Menu">
//                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
//                   <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
//                 </svg>
//               </Button>
//             </div>
//           </div>
//         </div>
//       </Container>
//     </header>
//   );
// }

import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { cn } from '@/lib/utils';
import { Logo } from '../ui/Logo';
import { X } from 'lucide-react';

// Add back the navigation configuration
const navigation = [
  {
    name: '3D PRINTERS',
    url: '#',
    dropdown: [
      {
        name: 'Metal 3D Printers',
        url: '/printers/metal',
      },
      {
        name: 'Polymer 3D Printers',
        url: 'printers/polymer',
      },
      {
        name: 'Other 3D Printers',
        url: '/printers/other',
      }
    ]
  },
  {
    name: 'MATERIALS',
    url: '#',
    dropdown: [
      {
        name: 'Metal Powder',
        url: '/materials/metal-powder',
      },
      {
        name: 'Resin',
        url: '/materials/resin',
      }
    ]
  },
  {
    name: 'MANUFACTURING SERVICES',
    url: '#',
    dropdown: [
      {
        name: 'Medical Implant',
        url: '/manufacturing-services/MedicalImplants',
      },
      {
        name: 'Medical Devices',
        url: '/manufacturing-services/MedicalDevices',
      },
      {
        name: 'Multi-Material Production',
        url: '/manufacturing-services/MultiMaterials',
      }
    ]
  },
  {
    name: 'ABOUT US',
    url: '/about',
  },
  {
    name: 'CONTACT',
    url: '/contact',
  }
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  return (
    <header 
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out',
        isScrolled ? 'backdrop-blur-nav py-3' : 'py-5'
      )}
    >
      <Container className="flex items-center">
        {/* Logo - Left */}
        <div className="w-[140px] md:w-[200px]">
          <Link to="/" className="flex items-center">
            <div className="h-12 md:h-16">
              <Logo 
                height="400px"
                width="auto"
                variant="default"
                className="h-full w-auto object-contain"
              />
            </div>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex flex-1 justify-center">
          <div className="flex space-x-12">
            {navigation.map((item) => (
              item.dropdown ? (
                <div key={item.name} className="relative dropdown-container group">
                  <span className="nav-link cursor-pointer font-semibold">
                    {item.name}
                  </span>
                  <div className="dropdown-menu mt-1 min-w-[180px] w-max rounded-md border border-border bg-card shadow-soft animate-fade-in">
                    <div className="p-4 grid gap-2 whitespace-nowrap">
                      {item.dropdown.map((category) => (
                        <div key={category.name}>
                          <Link 
                            to={category.url} 
                            className="font-medium text-lg block py-2 text-foreground hover:text-busybee-500"
                          >
                            {category.name}
                          </Link>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link 
                  key={item.name} 
                  to={item.url} 
                  className={cn(
                    "nav-link font-semibold",
                    location.pathname === item.url && "text-busybee-500"
                  )}
                >
                  {item.name}
                </Link>
              )
            ))}
          </div>
        </nav>

        {/* Actions */}
        <div className="flex-1 md:w-[200px] flex justify-end">
          <div className="flex items-center space-x-4">
            <Button to="/expert-contact" variant="default" size="sm" className="hidden md:flex animate-pulse-slow">
              Talk to our Expert
            </Button>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </Container>

      {/* Mobile Menu */}
      <div
        className={cn(
          "fixed inset-0 top-[72px] bg-background z-50 transition-transform duration-300 ease-in-out md:hidden",
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="h-full overflow-y-auto pb-20">
          <div className="p-6 space-y-6">
            {navigation.map((item) => (
              <div key={item.name} className="space-y-3">
                {item.dropdown ? (
                  <>
                    <div className="font-semibold text-lg">{item.name}</div>
                    <div className="pl-4 space-y-3">
                      {item.dropdown.map((category) => (
                        <Link
                          key={category.name}
                          to={category.url}
                          className="block text-muted-foreground hover:text-busybee-500"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {category.name}
                        </Link>
                      ))}
                    </div>
                  </>
                ) : (
                  <Link
                    to={item.url}
                    className={cn(
                      "block font-semibold text-lg",
                      location.pathname === item.url && "text-busybee-500"
                    )}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
            
            <div className="pt-6">
              <Button 
                to="/expert-contact" 
                variant="default" 
                className="w-full justify-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Talk to our Expert
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}