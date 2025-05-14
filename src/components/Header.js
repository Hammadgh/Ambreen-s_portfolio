"use client";

import { useState, useEffect } from 'react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("about");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active link based on scroll position
      const sections = ["about", "approach", "services", "faq", "contact"];
      const currentPos = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && currentPos >= element.offsetTop && currentPos < element.offsetTop + element.offsetHeight) {
          setActiveLink(section);
          break;
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div className="top-booking-bar bg-primary shadow-sm animate-fade-in">
        <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
          <span className="font-light text-cream-white mb-2 sm:mb-0">Ready to begin your journey?</span>
          <a href="#contact" className="text-cream-white hover:text-white transition-colors duration-300 font-medium flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-dark hover:bg-opacity-90 transform hover:translate-x-1 w-auto">
            Book a session today 
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>
      
      <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'py-3 bg-cream-white shadow-lg' : 'py-4 sm:py-5 bg-cream-white bg-opacity-95 backdrop-blur-sm shadow-md'}`}>
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex flex-col">
            <a href="#" className="logo-emblem-elegant text-primary hover:text-primary-dark transition-colors duration-300 text-xl sm:text-2xl">
              <span className="font-serif inline-block">A</span><span className="font-serif tracking-wide">mbreen </span>
              <span className="font-serif inline-block ml-1">R</span><span className="font-serif tracking-wide">ashid </span>
              <span className="font-serif inline-block ml-1">K</span><span className="font-serif tracking-wide">han</span>
            </a>
            <p className="text-text-light text-xs tracking-wider mt-0.5 sm:mt-1 font-light italic">Clinical Psychologist</p>
          </div>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden p-2 rounded-md text-primary focus:outline-none hover:bg-accent transition-colors" 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-6 w-6" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
          
          {/* Desktop menu */}
          <nav className="hidden md:flex items-center">
            <div className="mr-6 flex space-x-8">
              <a 
                href="#about" 
                className={`nav-link font-medium relative px-1 py-2 text-sm ${activeLink === "about" ? "text-primary" : "text-foreground hover:text-primary"} transition-colors duration-300`}
              >
                About
                <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-primary scale-x-0 transition-transform duration-300 ${activeLink === "about" ? "scale-x-100" : ""}`}></span>
              </a>
              <a 
                href="#approach" 
                className={`nav-link font-medium relative px-1 py-2 text-sm ${activeLink === "approach" ? "text-primary" : "text-foreground hover:text-primary"} transition-colors duration-300`}
              >
                Approach
                <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-primary scale-x-0 transition-transform duration-300 ${activeLink === "approach" ? "scale-x-100" : ""}`}></span>
              </a>
              <a 
                href="#services" 
                className={`nav-link font-medium relative px-1 py-2 text-sm ${activeLink === "services" ? "text-primary" : "text-foreground hover:text-primary"} transition-colors duration-300`}
              >
                Services
                <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-primary scale-x-0 transition-transform duration-300 ${activeLink === "services" ? "scale-x-100" : ""}`}></span>
              </a>
              <a 
                href="#faq" 
                className={`nav-link font-medium relative px-1 py-2 text-sm ${activeLink === "faq" ? "text-primary" : "text-foreground hover:text-primary"} transition-colors duration-300`}
              >
                FAQ
                <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-primary scale-x-0 transition-transform duration-300 ${activeLink === "faq" ? "scale-x-100" : ""}`}></span>
              </a>
              <a 
                href="#contact" 
                className={`nav-link font-medium relative px-1 py-2 text-sm ${activeLink === "contact" ? "text-primary" : "text-foreground hover:text-primary"} transition-colors duration-300`}
              >
                Contact
                <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-primary scale-x-0 transition-transform duration-300 ${activeLink === "contact" ? "scale-x-100" : ""}`}></span>
              </a>
            </div>
            <a href="#contact" className="btn-primary py-2.5 px-6 rounded-md shadow-md hover:shadow-xl font-medium text-xs tracking-wider border border-transparent hover:border-white/20 transition-all duration-300">BOOK NOW</a>
          </nav>
        </div>
        
        {/* Mobile menu dropdown */}
        <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
          <div className="px-4 pt-3 pb-5 bg-cream-white shadow-md space-y-2 animate-slide-up rounded-b-lg">
            <a href="#about" className={`block py-2.5 px-4 rounded-md transition-colors ${activeLink === "about" ? "bg-accent text-primary font-medium" : "hover:bg-accent"}`} onClick={() => setIsMobileMenuOpen(false)}>
              About
            </a>
            <a href="#approach" className={`block py-2.5 px-4 rounded-md transition-colors ${activeLink === "approach" ? "bg-accent text-primary font-medium" : "hover:bg-accent"}`} onClick={() => setIsMobileMenuOpen(false)}>
              Approach
            </a>
            <a href="#services" className={`block py-2.5 px-4 rounded-md transition-colors ${activeLink === "services" ? "bg-accent text-primary font-medium" : "hover:bg-accent"}`} onClick={() => setIsMobileMenuOpen(false)}>
              Services
            </a>
            <a href="#faq" className={`block py-2.5 px-4 rounded-md transition-colors ${activeLink === "faq" ? "bg-accent text-primary font-medium" : "hover:bg-accent"}`} onClick={() => setIsMobileMenuOpen(false)}>
              FAQ
            </a>
            <a href="#contact" className={`block py-2.5 px-4 rounded-md transition-colors ${activeLink === "contact" ? "bg-accent text-primary font-medium" : "hover:bg-accent"}`} onClick={() => setIsMobileMenuOpen(false)}>
              Contact
            </a>
            <a href="#contact" className="block py-3 px-5 mt-4 bg-primary text-white rounded-md text-center hover:bg-primary-dark transition-colors shadow-md font-medium flex items-center justify-center" onClick={() => setIsMobileMenuOpen(false)}>
              Book a Session
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2">
                <path d="M5 12h14"></path>
                <path d="M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>
      </header>
    </>
  );
} 