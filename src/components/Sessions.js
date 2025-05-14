import React from 'react';
import CalendlyEmbed from './CalendlyEmbed';

export default function Sessions() {
  return (
    <section id="services" className="section bg-accent">
      <div className="container">
        <h2 className="section-title animate-fade-in">Services & Sessions</h2>
        <p className="text-block mb-12 animate-slide-up">
          I offer a range of therapeutic services tailored to meet your individual needs. Whether you&apos;re seeking help with anxiety, 
          depression, relationship challenges, or personal growth, together we&apos;ll find the right approach for you.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          <div className="animate-fade-in delay-100">
            <div className="service-card hover-card">
              <div className="text-primary mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 animate-float" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-serif mb-4 highlight-text">Individual Therapy</h3>
              <p className="text-text-light mb-6">
                One-on-one sessions focused on your specific concerns and goals. We&apos;ll work together to develop insights and strategies for positive change.
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
                <a href="#contact" className="btn-primary">Book a Session</a>
              </div>
            </div>
          </div>
          
          <div className="animate-fade-in delay-200">
            <div className="service-card hover-card">
              <div className="text-primary mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 animate-float" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-serif mb-4 highlight-text">Couples Therapy</h3>
              <p className="text-text-light mb-6">
                Strengthen your relationship by improving communication, resolving conflicts, and deepening understanding between you and your partner.
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
                <a href="#contact" className="btn-primary">Book a Session</a>
              </div>
            </div>
          </div>
          
          <div className="animate-fade-in delay-300">
            <div className="service-card hover-card">
              <div className="text-primary mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 animate-float" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="text-xl font-serif mb-4 highlight-text">Assessment & Consultation</h3>
              <p className="text-text-light mb-6">
                Comprehensive psychological assessments to help understand your challenges better and determine the most effective path forward.
              </p>
              <ul className="mb-6 space-y-2">
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Initial 90-minute assessment
                </li>
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Detailed feedback
                </li>
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Treatment recommendations
                </li>
              </ul>
              <div className="mt-auto">
                <a href="#contact" className="btn-primary">Book a Session</a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-20 animate-slide-up">
          <h3 className="text-2xl text-center mb-8">Schedule Your Session</h3>
          <div className="max-w-4xl mx-auto">
            <CalendlyEmbed />
          </div>
        </div>
      </div>
    </section>
  );
} 