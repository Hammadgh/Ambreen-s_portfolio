import React from 'react';

export default function Sessions() {
  return (
    <section id="services" className="section bg-[#03C0C1]/10">
      <div className="container">
        <h2 className="section-title animate-fade-in">Services & Sessions</h2>
        <p className="text-block mb-12 animate-slide-up">
          Finding the right service modality for your needs is important. Here is a brief description of the 
          different service formats I can provide.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          <div className="animate-fade-in delay-100">
            <div className="service-card hover-card">
              <div className="text-[#009C9D] mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 animate-float" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-serif mb-4 highlight-text">Individual Therapy</h3>
              <p className="text-text-light mb-6">
                You are the primary client. Your personal preferences, needs, concerns, goals, hopes, and dreams are our focus.
              </p>
              <ul className="mb-6 space-y-2">
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  50-minute sessions
                </li>
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  In-person or online
                </li>
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Tailored to your needs
                </li>
              </ul>
              <div className="mt-auto">
                <a href="#contact" className="btn-primary">Contact Me</a>
              </div>
            </div>
          </div>
          
          <div className="animate-fade-in delay-200">
            <div className="service-card hover-card">
              <div className="text-[#009C9D] mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 animate-float" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-serif mb-4 highlight-text">Couples Therapy</h3>
              <p className="text-text-light mb-6">
                The relationship is the primary client. How each individual&apos;s personal preferences, needs, concerns, goals, hopes, and dreams affect the relationship is our focus.
              </p>
              <ul className="mb-6 space-y-2">
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  80-minute sessions
                </li>
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Safe, supportive environment
                </li>
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Evidence-based approaches
                </li>
              </ul>
              <div className="mt-auto">
                <a href="#contact" className="btn-primary">Contact Me</a>
              </div>
            </div>
          </div>
          
          <div className="animate-fade-in delay-300">
            <div className="service-card hover-card">
              <div className="text-[#009C9D] mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 animate-float" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-serif mb-4 highlight-text">Group Therapy</h3>
              <p className="text-text-light mb-6">
                The group supports each other in seeking overall life satisfaction. Guidelines are in place that I, as the group facilitator, reinforce. These guidelines create safety as each individual will need to be vulnerable with their peers in order to fully benefit from the group dynamic. The more open each person is the more every person grows.
              </p>
              <ul className="mb-6 space-y-2">
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Shared learning experience
                </li>
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Supportive community
                </li>
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Growth through connection
                </li>
              </ul>
              <div className="mt-auto">
                <a href="#contact" className="btn-primary">Contact Me</a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16 bg-white p-6 rounded-lg shadow-md animate-fade-in delay-300">
          <h3 className="text-xl font-medium text-primary mb-4">Clinical Supervision & Pricing</h3>
          <div className="space-y-4">
            <p className="text-sm">
              Clinical Supervision is available at 5k per session and every session would be between 35 to 40 minutes for supplementary supervision.
            </p>
            <p className="text-sm">
              Because I work for myself and for your well being, I can adjust session rates based on need, as appropriate.
            </p>
            <div className="mt-4 p-4 bg-primary/5 rounded-lg">
              <p className="text-sm italic text-gray-700">
                The process begins with an initial session to get to know each other. Together, we&apos;ll assess the appropriate frequency 
                of meetings for your specific needs and concerns.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 