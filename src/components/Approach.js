export default function Approach() {
  return (
    <section id="approach" className="py-24 bg-light-accent">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="section-title">How I Work</h2>
          <p className="text-center max-w-2xl mx-auto">
            Everyone&apos;s journey is different. That&apos;s why I tailor sessions to your unique needs, 
            using a blend of evidence-based approaches to support your healing and growth.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-16 max-w-5xl mx-auto">
          <div className="service-card animate-slide-up">
            <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 className="text-xl mb-4 text-primary">Cognitive Behavioral Therapy (CBT)</h3>
            <p>
              Identify and change unhelpful thought patterns and behaviors that may be maintaining your distress, 
              developing practical strategies to improve your daily functioning.
            </p>
          </div>
          
          <div className="service-card animate-slide-up delay-100">
            <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h3 className="text-xl mb-4 text-primary">Trauma-Informed Approaches</h3>
            <p>
              Navigate past traumatic experiences with methods that help process difficult memories and emotions 
              safely, building resilience and stability.
            </p>
          </div>
          
          <div className="service-card animate-slide-up delay-200">
            <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            </div>
            <h3 className="text-xl mb-4 text-primary">Mindfulness-Based Strategies</h3>
            <p>
              Learn to be present in the moment, developing awareness of your thoughts and feelings 
              without judgment, reducing stress and enhancing well-being.
            </p>
          </div>
          
          <div className="service-card animate-slide-up delay-300">
            <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
            <h3 className="text-xl mb-4 text-primary">Relational & Insight-Oriented Work</h3>
            <p>
              Explore patterns in your relationships and gain deeper understanding of yourself, 
              developing more fulfilling connections with others and with yourself.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
} 