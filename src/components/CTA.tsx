import { Mail } from "lucide-react";
import { useEffect } from "react";

const CTA = () => {
  useEffect(() => {
    // Load Calendly CSS
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://assets.calendly.com/assets/external/widget.css';
    document.head.appendChild(link);

    // Load Calendly script
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.head.appendChild(script);

    return () => {
      // Cleanup
      document.head.removeChild(link);
      document.head.removeChild(script);
    };
  }, []);

  return (
    <section id="schedule" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-[#63cc53]">
            Ready to Scale Your Freight Business?
          </h2>
          <p className="text-lg md:text-xl text-[#3b5a73] mb-8">
            Get a free marketing strategy session. We'll analyze your current situation and show you exactly how to generate more shippers and drivers.
          </p>
          
          <div className="bg-gray-50 p-8 border border-gray-200 mb-8">
            <div className="max-w-5xl mx-auto rounded-2xl overflow-hidden">
              {/* Calendly inline widget begin */}
              <div 
                className="calendly-inline-widget h-[520px] lg:h-[560px]"
                data-url="https://calendly.com/christiantewodros-tradetrackmarketing/tradetrack-marketing-onboarding"
                style={{
                  minWidth: '320px',
                  minHeight: '520px'
                }}
              ></div>
              {/* Calendly inline widget end */}
            </div>
            <div className="text-center mt-4">
              <a 
                href="https://calendly.com/christiantewodros-tradetrackmarketing/tradetrack-marketing-onboarding"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-[#3b5a73]/70 hover:text-[#63cc53] transition-colors"
              >
                Having trouble? Open the scheduler in a new tab.
              </a>
            </div>
          </div>
          
          <div className="flex justify-center mb-8">
            <div className="flex items-center justify-center gap-3 bg-gray-50 p-4 rounded-lg border border-gray-200 max-w-md w-full">
              <Mail className="w-5 h-5 text-[#63cc53]" />
              <div className="text-left">
                <p className="text-sm text-[#3b5a73]/70">Email Us</p>
                <a 
                  href="mailto:contact@tradetrackmarketing.com"
                  className="font-semibold text-[#3b5a73] hover:text-[#63cc53] transition-colors"
                >
                  contact@tradetrackmarketing.com
                </a>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <p className="text-sm text-[#3b5a73]/70 mb-3">Follow us on social media</p>
            <div className="flex justify-center gap-4">
              <a 
                href="https://twitter.com/TradeTrackHQ" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#3b5a73] hover:text-[#63cc53] transition-colors text-sm"
              >
                X (Twitter)
              </a>
              <a 
                href="https://www.linkedin.com/company/tradetrack-marketing" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#3b5a73] hover:text-[#63cc53] transition-colors text-sm"
              >
                LinkedIn
              </a>
              <a 
                href="https://www.instagram.com/tradetrackmarketing" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#3b5a73] hover:text-[#63cc53] transition-colors text-sm"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
