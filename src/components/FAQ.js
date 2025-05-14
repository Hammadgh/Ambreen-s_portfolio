"use client";

import { useState } from 'react';

export default function FAQ() {
  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const faqs = [
    {
      question: "What is psychotherapy?",
      answer: "Psychotherapy is a collaborative treatment based on the relationship between an individual and a psychologist. A psychologist provides a supportive environment that allows you to talk openly with someone who is objective, neutral, and nonjudgmental. Together, you and your psychologist will identify and work through the issues that are causing emotional distress and make positive changes in your life."
    },
    {
      question: "How do I know if therapy is right for me?",
      answer: "Therapy can be beneficial for anyone facing challenges in their life, experiencing emotional distress, or seeking personal growth. If you're dealing with persistent feelings of sadness or anxiety, struggling with relationships, recovering from trauma, or simply wanting to understand yourself better, therapy might be helpful. The best way to determine if therapy is right for you is to schedule an initial consultation."
    },
    {
      question: "How long does each therapy session last?",
      answer: "Standard therapy sessions are 50 minutes long, which is considered a therapeutic hour. This allows me to take notes and prepare for the next client. However, I also offer extended sessions of 75 or 90 minutes for certain therapeutic approaches or situations where more time might be beneficial."
    },
    {
      question: "How many therapy sessions will I need?",
      answer: "The duration of therapy varies widely depending on your specific situation, goals, and the type of therapy approach used. Some people might see improvement after just a few sessions, while others benefit from longer-term therapy. We'll regularly review your progress together and adjust our approach as needed. My goal is to provide the support you need for as long as it's helpful."
    },
    {
      question: "Is what I share in therapy confidential?",
      answer: "Confidentiality is a fundamental part of psychotherapy. What you share in our sessions will be kept private and confidential, with a few important exceptions: if there is a risk of harm to yourself or others, suspected abuse of children or vulnerable adults, or if legally required by a court order. I'll discuss these limits to confidentiality with you in our first session."
    },
    {
      question: "What approach do you use in therapy?",
      answer: "I use an integrative approach that draws from several evidence-based therapy methods, including cognitive-behavioral therapy (CBT), psychodynamic therapy, and mindfulness practices. This allows me to tailor the treatment to your specific needs, goals, and preferences. My approach is compassionate, collaborative, and focused on helping you develop practical skills while also exploring deeper patterns that influence your thoughts, feelings, and behaviors."
    }
  ];

  return (
    <section id="faq" className="section bg-background py-20">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center mb-16 animate-fade-in">Frequently Asked Questions</h2>
        
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`mb-6 border-b border-border-light pb-4 animate-slide-up delay-${index * 100} transition-all duration-300 ${openFAQ === index ? 'pb-6' : ''}`}
            >
              <button 
                className="w-full flex justify-between items-center text-left focus:outline-none group"
                onClick={() => toggleFAQ(index)}
                aria-expanded={openFAQ === index}
              >
                <h3 className="text-xl font-serif font-medium text-foreground pr-8 leading-normal">
                  {faq.question}
                </h3>
                <span className={`transform transition-transform duration-300 text-primary ${openFAQ === index ? 'rotate-180' : ''}`}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </button>
              <div 
                className={`mt-2 overflow-hidden transition-all duration-300 ${openFAQ === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <p className="text-text-light">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-14 animate-slide-up delay-400">
          <p className="mb-6 text-text-light max-w-2xl mx-auto">
            Have a question that&apos;s not addressed here? I&apos;m happy to help.
          </p>
          <a href="#contact" className="btn-primary">Contact Me</a>
        </div>
      </div>
    </section>
  );
} 