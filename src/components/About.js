import React from 'react';

export default function About() {
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
                  I&apos;m Ambreen Rashid Khan, a clinical psychologist dedicated to providing compassionate, 
                  evidence-based therapy that honors your unique experiences and challenges.
                </p>
                
                <p className="animate-fade-in delay-200">
                  My approach is warm, collaborative, and rooted in understanding each person as a whole—their 
                  strengths, values, and the context of their lives. I believe that therapy is not just about 
                  addressing problems but about fostering growth, resilience, and meaningful change.
                </p>
                
                <div className="mt-3 p-3 bg-gradient-to-r from-primary/5 to-accent/10 rounded-lg hover-card animate-fade-in delay-300">
                  <h3 className="text-lg mb-2 highlight-text font-medium">Specialized Areas</h3>
                  <div className="grid grid-cols-2 gap-1">
                    <div>
                      <ul className="space-y-1 text-sm">
                        <li className="flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          Anxiety & Depression
                        </li>
                        <li className="flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          Relationship Issues
                        </li>
                        <li className="flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          Trauma & PTSD
                        </li>
                      </ul>
                    </div>
                    <div>
                      <ul className="space-y-1 text-sm">
                        <li className="flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          Life Transitions
                        </li>
                        <li className="flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          Cultural Identity
                        </li>
                        <li className="flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          Self-Esteem
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="mt-3">
                  <a href="#approach" className="btn-primary text-sm">Learn About My Approach</a>
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
                    <span className="font-medium block text-sm">DClinPsy, Clinical Psychology</span>
                    <span className="text-xs text-gray-600">University of Oxford</span>
                  </div>
                </div>
                <div className="flex items-start p-2 rounded-md bg-white/60 backdrop-blur-sm shadow-sm transition-all hover:shadow-md hover:bg-white/80">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary mr-1 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-medium block text-sm">MSc in Cognitive Behavioral Therapy</span>
                    <span className="text-xs text-gray-600">Kings College London</span>
                  </div>
                </div>
                <div className="flex items-start p-2 rounded-md bg-white/60 backdrop-blur-sm shadow-sm transition-all hover:shadow-md hover:bg-white/80">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary mr-1 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-medium block text-sm">Member, British Psychological Society</span>
                    <span className="text-xs text-gray-600">Chartered Psychologist Status</span>
                  </div>
                </div>
                <div className="flex items-start p-2 rounded-md bg-white/60 backdrop-blur-sm shadow-sm transition-all hover:shadow-md hover:bg-white/80">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary mr-1 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-medium block text-sm">15+ years of clinical experience</span>
                    <span className="text-xs text-gray-600">Private practice & NHS settings</span>
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