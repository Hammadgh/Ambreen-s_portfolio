"use client";

import { useCallback } from 'react';

export default function About() {
  // Smooth scroll function
  const scrollToSection = useCallback((sectionId, event) => {
    if (event) event.preventDefault();
    
    const targetSection = document.getElementById(sectionId);
    if (!targetSection) return;
    
    const offset = 80; // Adjust this value based on header height
    const targetPosition = targetSection.offsetTop - offset;
    
    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    });
  }, []);
  
  return (
    <section id="about" className="section bg-cream-white py-10">
      <div className="container max-w-5xl mx-auto">
        <h2 className="section-title text-2xl mb-6 animate-fade-in">About Me</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          {/* About content - Left column */}
          <div className="animate-fade-in delay-100">
            <div className="bg-white p-4 rounded-lg shadow-sm h-full">
              <div className="text-base space-y-3">
                <p className="animate-fade-in delay-100">
                  I, Ambreen Rashid Khan, work with adults, in individual, couples, and group formats, on a wide array of concerns. 
                  Addiction or substance abuse, trauma, depression, relationship problems, anxiety, women&apos;s issues, 
                  Post Traumatic Stress Disorder and grief are examples of the areas I have experience treating.
                </p>
                
                <p className="animate-fade-in delay-200">
                  My clinical approach hinges on a trauma informed model with motivational interviewing techniques. 
                  This allows me to utilize a tailored approach for each person with whom I work. 
                  I cannot help but use humor regularly and hope this helps create a comfortable environment 
                  to encounter some hard truths in our sessions.
                </p>
                
                <div className="mt-5 p-3 bg-gradient-to-r from-primary/5 to-accent/10 rounded-lg hover-card animate-fade-in delay-300">
                  <h3 className="text-lg mb-2 highlight-text font-medium">Your Journey</h3>
                  <p className="text-sm mb-3">
                    Every individual has unique needs and circumstances. Each person&apos;s background, family system, 
                    belief system, personality, and goals differ. And so must their path. Being intentional about 
                    what path you take means accounting for your unique make up, mending your emotional life, 
                    and striving for your better life.
                  </p>
                  <p className="text-sm">
                    People tend toward the path of least resistance, and that means the status quo. 
                    Change is hard, particularly when one has been living the same way for some time. 
                    This is how counseling helps.
                  </p>
                </div>
                
                <div className="mt-3">
                  <a href="#approach" onClick={(e) => scrollToSection('approach', e)} className="btn-primary text-sm">Learn About My Approach</a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Professional Credentials Section - Right column */}
          <div className="animate-fade-in delay-200">
            <div className="bg-gradient-to-br from-primary/10 to-accent/80 p-4 rounded-lg shadow-md border border-primary/20 relative overflow-hidden h-full">
              <div className="absolute top-0 right-0 w-16 h-16 bg-primary/5 rounded-full -mr-6 -mt-6"></div>
              <div className="absolute bottom-0 left-0 w-14 h-14 bg-primary/5 rounded-full -ml-4 -mb-4"></div>
              
              <h3 className="text-lg mb-3 font-semibold text-primary relative z-10 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.121 5.879l-3-3-9.121 9.121-1.121 4.121 4.121-1.121 9.121-9.121zM18.878 5.879l1.414 1.414" />
                </svg>
                Professional Credentials
              </h3>
              
              <div className="space-y-2 relative z-10">
                <div className="flex items-start p-2 rounded-md bg-white/60 backdrop-blur-sm shadow-sm transition-all hover:shadow-md hover:bg-white/80">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary mr-1 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-medium block text-sm">Masters of Science in Clinical Psychology</span>
                    <span className="text-xs text-gray-600">Bahria University, Islamabad, Pakistan</span>
                  </div>
                </div>
                <div className="flex items-start p-2 rounded-md bg-white/60 backdrop-blur-sm shadow-sm transition-all hover:shadow-md hover:bg-white/80">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary mr-1 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-medium block text-sm">Post Magisterial Diploma</span>
                    <span className="text-xs text-gray-600">Institute Of Clinical Psychology, University Of Karachi, Pakistan</span>
                  </div>
                </div>
                <div className="flex items-start p-2 rounded-md bg-white/60 backdrop-blur-sm shadow-sm transition-all hover:shadow-md hover:bg-white/80">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary mr-1 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-medium block text-sm">Master of Science</span>
                    <span className="text-xs text-gray-600">Quaid-i-Azam University, Islamabad, Pakistan</span>
                  </div>
                </div>
                <div className="flex items-start p-2 rounded-md bg-white/60 backdrop-blur-sm shadow-sm transition-all hover:shadow-md hover:bg-white/80">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary mr-1 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-medium block text-sm">15+ years of clinical experience</span>
                    <span className="text-xs text-gray-600">Work experience at prestigious organizations at national level</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 