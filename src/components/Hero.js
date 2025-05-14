import Image from "next/image";

export default function Hero() {
  return (
    <section className="pt-6 pb-16 sm:py-24 md:py-36 bg-light-accent relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-48 sm:w-64 h-48 sm:h-64 bg-accent rounded-full opacity-30 transform -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-64 sm:w-80 h-64 sm:h-80 bg-accent rounded-full opacity-30 transform translate-x-1/3 translate-y-1/3"></div>
      
      <div className="container relative z-10">
        {/* Mobile-first hero highlights that appear above image on mobile */}
        <div className="md:hidden mb-8 animate-fade-in">
          <div className="text-center">
            <p className="uppercase text-xs tracking-widest text-primary font-medium mb-2 flex items-center justify-center">
              <span className="w-6 h-px bg-primary mr-2"></span>
              Welcome
              <span className="w-6 h-px bg-primary ml-2"></span>
            </p>
            <h1 className="text-2xl font-serif mb-4">Ambreen Rashid Khan</h1>
            <p className="text-sm bg-white/70 backdrop-blur-sm py-2 px-4 rounded-md inline-block shadow-sm">
              Clinical Psychologist <span className="inline-block mx-2 text-primary">•</span> <span className="text-primary font-medium">15+ Years Experience</span>
            </p>
          </div>
          
          <div className="flex justify-center space-x-2 mt-6">
            <div className="bg-white/60 backdrop-blur-sm rounded-md px-3 py-2 flex flex-col items-center shadow-sm w-1/3 animate-fade-in-scale delay-100">
              <span className="text-primary text-lg font-medium">Anxiety</span>
              <span className="text-xs text-gray-600">Treatment</span>
            </div>
            <div className="bg-white/60 backdrop-blur-sm rounded-md px-3 py-2 flex flex-col items-center shadow-sm w-1/3 animate-fade-in-scale delay-200">
              <span className="text-primary text-lg font-medium">Trauma</span>
              <span className="text-xs text-gray-600">Recovery</span>
            </div>
            <div className="bg-white/60 backdrop-blur-sm rounded-md px-3 py-2 flex flex-col items-center shadow-sm w-1/3 animate-fade-in-scale delay-300">
              <span className="text-primary text-lg font-medium">Growth</span>
              <span className="text-xs text-gray-600">Support</span>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row items-center max-w-6xl mx-auto">
          {/* Image column - now comes first on mobile */}
          <div className="w-full sm:w-4/5 md:w-1/2 mb-8 sm:mb-12 md:mb-0 md:pr-16 animate-slide-left mx-auto md:mx-0">
            <div className="aspect-[3/4] overflow-hidden relative rounded-lg shadow-xl">
              <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-primary rounded-lg z-0"></div>
              <Image 
                src="/pshycologist.jpg" 
                alt="Ambreen Rashid Khan - Clinical Psychologist" 
                width={600}
                height={800}
                className="w-full h-full object-cover object-top relative z-10 rounded-lg transform transition-transform duration-500 hover:scale-105"
                priority
              />
              <div className="absolute top-0 left-0 w-full h-full bg-primary opacity-10 rounded-lg z-20"></div>
              
              {/* Quick credentials overlay for mobile only */}
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent p-4 z-30 md:hidden animate-slide-from-bottom">
                <p className="text-white text-xs">
                  <span className="font-medium">Qualifications:</span> DClinPsy, MSc CBT, Member BPS
                </p>
              </div>
            </div>
          </div>
          
          {/* Text column */}
          <div className="w-full md:w-1/2 animate-slide-up md:animate-slide-right">
            <div className="hero-card border-l-4 border-primary px-6 sm:px-8 md:px-10 py-8 sm:py-10">
              <p className="uppercase text-xs sm:text-sm tracking-widest mb-3 sm:mb-4 text-primary font-medium flex items-center">
                <span className="w-6 sm:w-8 h-px bg-primary mr-2 sm:mr-3"></span>
                I&apos;m so glad you&apos;re here
              </p>
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-4 sm:mb-6 leading-tight">
                Empowering Change for a <span className="text-primary">Happy, Authentic Life</span>
              </h2>
              <p className="mb-6 sm:mb-8 text-sm sm:text-base leading-relaxed">
                Are you feeling weighed down by worry, loneliness, or a sense that something just isn&apos;t right? 
                You&apos;re not alone, and it&apos;s okay to ask for help. As a dedicated therapist, I&apos;m here to journey 
                alongside you, guiding you towards genuine happiness and fulfillment.
              </p>
              
              {/* Mobile quick navigation */}
              <div className="grid grid-cols-2 gap-3 mb-6 md:hidden">
                <a href="#about" className="bg-white/70 text-primary font-medium text-center py-2.5 rounded-md text-sm animate-fade-in-scale delay-100 shadow-sm mobile-tap-highlight flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  About Me
                </a>
                <a href="#services" className="bg-white/70 text-primary font-medium text-center py-2.5 rounded-md text-sm animate-fade-in-scale delay-200 shadow-sm mobile-tap-highlight flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                  Services
                </a>
              </div>
              
              <a href="#contact" className="btn-primary group flex items-center justify-center sm:justify-start w-full sm:w-auto mobile-tap-highlight">
                Schedule an Appointment
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2 transform transition-transform duration-300 group-hover:translate-x-1">
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </a>
              
              {/* Mobile floating CTA button */}
              <div className="fixed bottom-6 right-6 z-50 md:hidden animate-fade-in delay-400">
                <a href="#contact" className="bg-primary text-white shadow-lg rounded-full w-14 h-14 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 