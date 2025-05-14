"use client";

import { useState, useEffect } from 'react';
import Script from 'next/script';

export default function CalendlyEmbed() {
  // Replace this URL with your actual Calendly URL
  const calendlyUrl = "https://calendly.com/ambreenrashidkhan";
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Mark component as running on client
    setIsClient(true);
  }, []);

  if (!isClient) {
    // Return a placeholder during server rendering
    return <div className="calendly-container animate-fade-in">
      <div className="service-card" style={{ minWidth: '320px', height: '700px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        Loading calendar...
      </div>
    </div>;
  }

  return (
    <>
      <Script 
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="lazyOnload"
      />
      <div className="calendly-container animate-fade-in">
        <div 
          className="calendly-inline-widget service-card" 
          data-url={calendlyUrl}
          style={{ minWidth: '320px', height: '700px' }}
        ></div>
      </div>
    </>
  );
} 