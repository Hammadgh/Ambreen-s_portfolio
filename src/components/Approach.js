export default function Approach() {
  return (
    <section id="approach" className="py-16 bg-[#00D8D8]/10">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center mb-10 animate-fade-in">
          <h2 className="section-title text-3xl mb-3">How I Work</h2>
          <p className="text-center text-text-light text-sm md:text-base">
            Everyone&apos;s journey is different. That&apos;s why I tailor sessions to your unique needs, 
            using a blend of evidence-based approaches to support your healing and growth.
          </p>
        </div>
        
        <div className="flex flex-wrap -mx-3">
          {/* Cognitive Behavioral Therapy */}
          <div className="w-full md:w-1/2 lg:w-1/4 px-3 mb-6 animate-fade-in">
            <div className="bg-white rounded-lg shadow-sm p-5 h-full border-t-2 border-[#009C9D] hover:shadow-md transition-shadow">
              <div className="flex items-center mb-3">
                <div className="w-10 h-10 rounded-full bg-[#009C9D] flex items-center justify-center flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-lg ml-3 font-medium text-[#009C9D]">CBT</h3>
              </div>
              <p className="text-sm text-gray-600">
                Identify and change unhelpful thought patterns and behaviors that maintain distress, developing practical strategies for daily functioning.
              </p>
            </div>
          </div>
          
          {/* Trauma-Informed Approaches */}
          <div className="w-full md:w-1/2 lg:w-1/4 px-3 mb-6 animate-fade-in delay-100">
            <div className="bg-white rounded-lg shadow-sm p-5 h-full border-t-2 border-[#009C9D] hover:shadow-md transition-shadow">
              <div className="flex items-center mb-3">
                <div className="w-10 h-10 rounded-full bg-[#009C9D] flex items-center justify-center flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-lg ml-3 font-medium text-[#009C9D]">Trauma-Informed</h3>
              </div>
              <p className="text-sm text-gray-600">
                Navigate past traumatic experiences safely, processing difficult memories and emotions while building resilience and stability.
              </p>
            </div>
          </div>
          
          {/* Mindfulness-Based Strategies */}
          <div className="w-full md:w-1/2 lg:w-1/4 px-3 mb-6 animate-fade-in delay-200">
            <div className="bg-white rounded-lg shadow-sm p-5 h-full border-t-2 border-[#009C9D] hover:shadow-md transition-shadow">
              <div className="flex items-center mb-3">
                <div className="w-10 h-10 rounded-full bg-[#009C9D] flex items-center justify-center flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                  </svg>
                </div>
                <h3 className="text-lg ml-3 font-medium text-[#009C9D]">Mindfulness</h3>
              </div>
              <p className="text-sm text-gray-600">
                Learn to be present in the moment, developing awareness of thoughts and feelings without judgment, reducing stress.
              </p>
            </div>
          </div>
          
          {/* Relational & Insight-Oriented Work */}
          <div className="w-full md:w-1/2 lg:w-1/4 px-3 mb-6 animate-fade-in delay-300">
            <div className="bg-white rounded-lg shadow-sm p-5 h-full border-t-2 border-[#009C9D] hover:shadow-md transition-shadow">
              <div className="flex items-center mb-3">
                <div className="w-10 h-10 rounded-full bg-[#009C9D] flex items-center justify-center flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h3 className="text-lg ml-3 font-medium text-[#009C9D]">Relational</h3>
              </div>
              <p className="text-sm text-gray-600">
                Explore patterns in your relationships and gain deeper understanding of yourself, developing more fulfilling connections.
              </p>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-8">
          <div className="inline-block bg-white px-6 py-3 rounded-lg shadow-sm border border-[#03C0C1]/20">
            <p className="text-sm text-gray-700">
              <span className="text-[#009C9D] font-medium">My approach is flexible</span> - we&apos;ll use the techniques that work best for <span className="italic">your</span> unique situation
            </p>
          </div>
        </div>
      </div>
    </section>
  );
} 