import React from 'react';
import Image from 'next/image';

export default function About() {
  return (
    <section id="about" className="section bg-cream-white">
      <div className="container">
        <h2 className="section-title animate-fade-in">About Me</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mt-12">
          {/* Left column with image - 5 columns wide on large screens */}
          <div className="lg:col-span-5 animate-slide-right flex flex-col items-center lg:items-start">
            <div className="about-image mx-auto lg:mx-0" style={{ maxWidth: '90%' }}>
              <Image 
                src="/pshycologist.jpg" 
                alt="Ambreen Rashid Khan, Clinical Psychologist" 
                width={500}
                height={667}
                className="w-full h-auto object-cover object-top"
                style={{ aspectRatio: '3/4' }}
                priority
              />
            </div>
          </div>
          
          {/* Right column with text - 7 columns wide on large screens */}
          <div className="lg:col-span-7 animate-slide-left flex flex-col justify-center">
            <div className="text-lg space-y-6">
              <p className="animate-fade-in delay-100">
                I&apos;m Ambreen Rashid Khan, a clinical psychologist dedicated to providing compassionate, 
                evidence-based therapy that honors your unique experiences and challenges.
              </p>
              
              <p className="animate-fade-in delay-200">
                My approach is warm, collaborative, and rooted in understanding each person as a whole—their 
                strengths, values, and the context of their lives. I believe that therapy is not just about 
                addressing problems but about fostering growth, resilience, and meaningful change.
              </p>
              
              <p className="animate-fade-in delay-300">
                Throughout my career, I have worked with individuals from diverse backgrounds facing a wide range of 
                challenges, including anxiety, depression, relationship difficulties, trauma, and life transitions. 
                This experience has deepened my appreciation for human resilience and the many paths to healing.
              </p>
              
              <div className="mt-8 p-6 bg-white rounded-lg shadow-sm hover-card animate-fade-in delay-400">
                <h3 className="text-xl mb-4 highlight-text">Specialized Areas</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Anxiety & Depression
                      </li>
                      <li className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Relationship Issues
                      </li>
                      <li className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Trauma & PTSD
                      </li>
                    </ul>
                  </div>
                  <div>
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Life Transitions
                      </li>
                      <li className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Cultural Identity
                      </li>
                      <li className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Self-Esteem
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <a href="#approach" className="btn-primary">Learn About My Approach</a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Centered credentials section */}
        <div className="mt-20 max-w-4xl mx-auto animate-fade-in delay-300">
          <div className="bg-gradient-to-br from-primary/10 to-accent/80 p-7 rounded-lg shadow-md border border-primary/20 credentials-card relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-10 -mt-10"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-primary/5 rounded-full -ml-8 -mb-8"></div>
            
            <h3 className="text-2xl mb-6 font-semibold text-primary relative z-10 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 mr-3 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.121 5.879l-3-3-9.121 9.121-1.121 4.121 4.121-1.121 9.121-9.121zM18.878 5.879l1.414 1.414" />
              </svg>
              Professional Credentials
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 relative z-10">
              <div className="flex items-start p-3 rounded-md bg-white/60 backdrop-blur-sm shadow-sm transition-transform hover:translate-x-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <span className="font-medium block">DClinPsy, Clinical Psychology</span>
                  <span className="text-sm text-gray-600">University of Oxford</span>
                </div>
              </div>
              <div className="flex items-start p-3 rounded-md bg-white/60 backdrop-blur-sm shadow-sm transition-transform hover:translate-x-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <span className="font-medium block">MSc in Cognitive Behavioral Therapy</span>
                  <span className="text-sm text-gray-600">Kings College London</span>
                </div>
              </div>
              <div className="flex items-start p-3 rounded-md bg-white/60 backdrop-blur-sm shadow-sm transition-transform hover:translate-x-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <span className="font-medium block">Member, British Psychological Society</span>
                  <span className="text-sm text-gray-600">Chartered Psychologist Status</span>
                </div>
              </div>
              <div className="flex items-start p-3 rounded-md bg-white/60 backdrop-blur-sm shadow-sm transition-transform hover:translate-x-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <span className="font-medium block">15+ years of clinical experience</span>
                  <span className="text-sm text-gray-600">Private practice & NHS settings</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 