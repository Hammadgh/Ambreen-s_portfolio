export default function Approach() {
  return (
    <section id="approach" className="py-16 bg-[#00D8D8]/10">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center mb-10 animate-fade-in">
          <h2 className="section-title text-3xl mb-3">How I Work</h2>
          <p className="text-center text-text-light text-sm md:text-base">
            My clinical approach hinges on a trauma informed model with motivational interviewing techniques. 
            This allows me to utilize a tailored approach for each person with whom I work.
          </p>
        </div>
        
        {/* My Approach Cards - 4 in a row with icons */}
        <div className="flex flex-wrap -mx-3">
          {/* Trauma-Informed Approach */}
          <div className="w-full md:w-1/2 lg:w-1/4 px-3 mb-6 animate-fade-in">
            <div className="bg-white rounded-lg shadow-sm p-5 h-full border-t-2 border-[#009C9D] hover:shadow-md transition-all hover:translate-y-[-5px]">
              <div className="flex items-center mb-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#009C9D] to-[#03C0C1] flex items-center justify-center flex-shrink-0 shadow-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-lg ml-3 font-medium text-[#009C9D]">Trauma-Informed</h3>
              </div>
              <p className="text-sm text-gray-600">
                I create a safe environment where we can work through past experiences at your own pace.
              </p>
            </div>
          </div>
          
          {/* Motivational Interviewing */}
          <div className="w-full md:w-1/2 lg:w-1/4 px-3 mb-6 animate-fade-in delay-100">
            <div className="bg-white rounded-lg shadow-sm p-5 h-full border-t-2 border-[#009C9D] hover:shadow-md transition-all hover:translate-y-[-5px]">
              <div className="flex items-center mb-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#009C9D] to-[#03C0C1] flex items-center justify-center flex-shrink-0 shadow-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <h3 className="text-lg ml-3 font-medium text-[#009C9D]">Motivational</h3>
              </div>
              <p className="text-sm text-gray-600">
                I help you discover your own reasons for change and develop the confidence to make those changes.
              </p>
            </div>
          </div>
          
          {/* Personalized Approach */}
          <div className="w-full md:w-1/2 lg:w-1/4 px-3 mb-6 animate-fade-in delay-200">
            <div className="bg-white rounded-lg shadow-sm p-5 h-full border-t-2 border-[#009C9D] hover:shadow-md transition-all hover:translate-y-[-5px]">
              <div className="flex items-center mb-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#009C9D] to-[#03C0C1] flex items-center justify-center flex-shrink-0 shadow-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
                  </svg>
                </div>
                <h3 className="text-lg ml-3 font-medium text-[#009C9D]">Tailored</h3>
              </div>
              <p className="text-sm text-gray-600">
                Your therapy will be customized to your specific needs, background, and goals.
              </p>
            </div>
          </div>
          
          {/* Supportive Humor */}
          <div className="w-full md:w-1/2 lg:w-1/4 px-3 mb-6 animate-fade-in delay-300">
            <div className="bg-white rounded-lg shadow-sm p-5 h-full border-t-2 border-[#009C9D] hover:shadow-md transition-all hover:translate-y-[-5px]">
              <div className="flex items-center mb-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#009C9D] to-[#03C0C1] flex items-center justify-center flex-shrink-0 shadow-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg ml-3 font-medium text-[#009C9D]">Humor</h3>
              </div>
              <p className="text-sm text-gray-600">
                I use humor to create a comfortable environment while addressing difficult topics.
              </p>
            </div>
          </div>
        </div>
        
        {/* Process of Counseling - Improved visual design */}
        <div className="max-w-4xl mx-auto mt-16 animate-fade-in delay-300">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-medium text-[#009C9D]">The Process of Counseling</h3>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mt-3"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Step 1 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all">
              <div className="bg-gradient-to-r from-[#009C9D] to-[#03C0C1] py-3 px-4 text-white">
                <div className="flex items-center">
                  <span className="w-7 h-7 rounded-full bg-white text-primary font-bold flex items-center justify-center mr-2">1</span>
                  <h4 className="font-medium">Initial Session</h4>
                </div>
              </div>
              <div className="p-4">
                <p className="text-sm text-gray-700">
                  Meet with me to get to know my style and see if we&apos;re a good fit. This step is all about connection and comfort.
                </p>
              </div>
            </div>
            
            {/* Step 2 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all">
              <div className="bg-gradient-to-r from-[#009C9D] to-[#03C0C1] py-3 px-4 text-white">
                <div className="flex items-center">
                  <span className="w-7 h-7 rounded-full bg-white text-primary font-bold flex items-center justify-center mr-2">2</span>
                  <h4 className="font-medium">Frequency Planning</h4>
                </div>
              </div>
              <div className="p-4">
                <p className="text-sm text-gray-700">
                  Together we&apos;ll assess the appropriate frequency of meetings based on your needs and concerns.
                </p>
              </div>
            </div>
            
            {/* Step 3 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all">
              <div className="bg-gradient-to-r from-[#009C9D] to-[#03C0C1] py-3 px-4 text-white">
                <div className="flex items-center">
                  <span className="w-7 h-7 rounded-full bg-white text-primary font-bold flex items-center justify-center mr-2">3</span>
                  <h4 className="font-medium">Gradual Independence</h4>
                </div>
              </div>
              <div className="p-4">
                <p className="text-sm text-gray-700">
                  We&apos;ll start with more frequent sessions and decrease gradually until you feel confident to continue on your own.
                </p>
              </div>
            </div>
          </div>
          
          {/* Quote */}
          <div className="mt-8 bg-white p-6 rounded-lg shadow-md border-l-4 border-primary">
            <p className="text-sm italic text-gray-700">
              &ldquo;My aim is to put myself out of business. I want you not to need me anymore! Have an idea of how you would like to approach your treatment when you meet with me. How often would you like to meet? What are your major concerns?&rdquo;
            </p>
            <p className="text-right text-sm font-medium text-primary mt-2">- Ambreen Rashid Khan</p>
          </div>
        </div>
      </div>
    </section>
  );
} 