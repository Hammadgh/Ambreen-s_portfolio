"use client";

import { useState, useEffect } from 'react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("about");

  useEffect(() => {
    // Handle scroll events for header styling only
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    
    // Set up intersection observers for each section
    const sections = ["about", "approach", "services", "faq", "contact"];
    const sectionElements = {};
    const observerOptions = {
      threshold: 0.3, // Consider section visible when 30% is in view
      rootMargin: "-100px 0px -70% 0px" // Adjust the detection area (top, right, bottom, left)
    };
    
    // Callback when intersection changes
    const observerCallback = (entries) => {
      entries.forEach(entry => {
        // If the section is intersecting (visible)
        if (entry.isIntersecting) {
          setActiveLink(entry.target.id);
        }
      });
    };
    
    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    // Observe all sections
    sections.forEach(sectionId => {
      const element = document.getElementById(sectionId);
      if (element) {
        observer.observe(element);
        sectionElements[sectionId] = element;
      }
    });
    
    // Initial setting of active section based on initial scroll position
    setTimeout(() => {
      handleScroll();
      
      // Find which section is currently in view on page load
      const scrollPosition = window.scrollY + window.innerHeight * 0.3;
      let initialActiveSection = sections[0];
      
      for (const section of sections) {
        const element = sectionElements[section];
        if (element && scrollPosition >= element.offsetTop) {
          initialActiveSection = section;
        }
      }
      
      setActiveLink(initialActiveSection);
    }, 100);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      // Unobserve all sections
      Object.values(sectionElements).forEach(element => {
        if (element) observer.unobserve(element);
      });
    };
  }, []);

  // Function to handle clicking on navigation links
  const handleNavClick = (sectionId) => {
    setActiveLink(sectionId);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'py-3 bg-cream-white shadow-lg' : 'py-4 sm:py-5 bg-cream-white shadow-md'}`} style={{ backgroundColor: '#FAF8F5' }}>
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex flex-col">
            <div className="logo-container relative flex items-center">
              {/* Decorative element */}
              <div className="absolute -left-3 top-1/2 transform -translate-y-1/2 w-1.5 h-12 rounded-full bg-primary/20 hidden sm:block"></div>
              
              <a href="#" className="logo-emblem text-primary hover:text-primary-dark transition-colors duration-300 text-xl sm:text-2xl font-serif tracking-wide relative overflow-hidden group">
                <span className="relative z-10 inline-block">Ambreen</span>
                <span className="relative z-10 inline-block mx-1 text-primary-dark font-medium">Rashid</span>
                <span className="relative z-10 inline-block">Khan</span>
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-primary/30 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></span>
              </a>
              
              {/* Decorative flourish */}
              <span className="hidden sm:block ml-3 text-primary/40 text-sm">✦</span>
            </div>
            <p className="text-text-light text-xs tracking-wider mt-0.5 sm:mt-1 font-light flex items-center">
              <span className="inline-block">Clinical Psychologist</span>
              <span className="w-1 h-1 rounded-full bg-primary mx-2 opacity-50 hidden sm:inline-block"></span>
              <span className="hidden sm:inline-block text-primary-dark font-medium text-xs">Mental Wellness Expert</span>
            </p>
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
                onClick={() => handleNavClick("about")}
                className={`nav-link font-medium relative px-1 py-2 text-sm ${activeLink === "about" ? "text-primary" : "text-foreground hover:text-primary"} transition-colors duration-300`}
              >
                About
                <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-primary scale-x-0 transition-transform duration-300 ${activeLink === "about" ? "scale-x-100" : ""}`}></span>
              </a>
              <a 
                href="#approach" 
                onClick={() => handleNavClick("approach")}
                className={`nav-link font-medium relative px-1 py-2 text-sm ${activeLink === "approach" ? "text-primary" : "text-foreground hover:text-primary"} transition-colors duration-300`}
              >
                Approach
                <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-primary scale-x-0 transition-transform duration-300 ${activeLink === "approach" ? "scale-x-100" : ""}`}></span>
              </a>
              <a 
                href="#services" 
                onClick={() => handleNavClick("services")}
                className={`nav-link font-medium relative px-1 py-2 text-sm ${activeLink === "services" ? "text-primary" : "text-foreground hover:text-primary"} transition-colors duration-300`}
              >
                Services
                <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-primary scale-x-0 transition-transform duration-300 ${activeLink === "services" ? "scale-x-100" : ""}`}></span>
              </a>
              <a 
                href="#faq" 
                onClick={() => handleNavClick("faq")}
                className={`nav-link font-medium relative px-1 py-2 text-sm ${activeLink === "faq" ? "text-primary" : "text-foreground hover:text-primary"} transition-colors duration-300`}
              >
                FAQ
                <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-primary scale-x-0 transition-transform duration-300 ${activeLink === "faq" ? "scale-x-100" : ""}`}></span>
              </a>
              <a 
                href="#contact" 
                onClick={() => handleNavClick("contact")}
                className={`nav-link font-medium relative px-1 py-2 text-sm ${activeLink === "contact" ? "text-primary" : "text-foreground hover:text-primary"} transition-colors duration-300`}
              >
                Contact
                <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-primary scale-x-0 transition-transform duration-300 ${activeLink === "contact" ? "scale-x-100" : ""}`}></span>
              </a>
            </div>
            <a href="#contact" className="btn-primary py-2.5 px-6 rounded-md shadow-md hover:shadow-xl font-medium text-xs tracking-wider border border-transparent hover:border-white/20 transition-all duration-300">CONTACT ME</a>
          </nav>
        </div>
        
        {/* Mobile menu dropdown */}
        <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
          <div className="px-4 pt-3 pb-5 bg-cream-white shadow-md space-y-2 animate-slide-up rounded-b-lg">
            <a href="#about" className={`block py-2.5 px-4 rounded-md transition-colors ${activeLink === "about" ? "bg-accent text-primary font-medium" : "hover:bg-accent"}`} onClick={() => handleNavClick("about")}>
              About
            </a>
            <a href="#approach" className={`block py-2.5 px-4 rounded-md transition-colors ${activeLink === "approach" ? "bg-accent text-primary font-medium" : "hover:bg-accent"}`} onClick={() => handleNavClick("approach")}>
              Approach
            </a>
            <a href="#services" className={`block py-2.5 px-4 rounded-md transition-colors ${activeLink === "services" ? "bg-accent text-primary font-medium" : "hover:bg-accent"}`} onClick={() => handleNavClick("services")}>
              Services
            </a>
            <a href="#faq" className={`block py-2.5 px-4 rounded-md transition-colors ${activeLink === "faq" ? "bg-accent text-primary font-medium" : "hover:bg-accent"}`} onClick={() => handleNavClick("faq")}>
              FAQ
            </a>
            <a href="#contact" className={`block py-2.5 px-4 rounded-md transition-colors ${activeLink === "contact" ? "bg-accent text-primary font-medium" : "hover:bg-accent"}`} onClick={() => handleNavClick("contact")}>
              Contact
            </a>
            <a href="#contact" className="block py-3 px-5 mt-4 bg-primary text-white rounded-md text-center hover:bg-primary-dark transition-colors shadow-md font-medium flex items-center justify-center" onClick={() => handleNavClick("contact")}>
              Contact Me
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