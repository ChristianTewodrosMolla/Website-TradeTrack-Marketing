import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Twitter, Linkedin, Instagram } from "lucide-react";
import { useEffect } from "react";

const Contact = () => {
  useEffect(() => {
    // Load Calendly CSS if not already loaded
    if (!document.querySelector('link[href*="calendly.com/assets/external/widget.css"]')) {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = 'https://assets.calendly.com/assets/external/widget.css';
      document.head.appendChild(link);
    }

    // Load Calendly script if not already loaded
    if (!document.querySelector('script[src*="calendly.com/assets/external/widget.js"]')) {
      const script = document.createElement('script');
      script.src = 'https://assets.calendly.com/assets/external/widget.js';
      script.async = true;
      document.head.appendChild(script);
    }
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
                Contact Us
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Get in touch with our freight marketing specialists.
              </p>
            </div>
            
            {/* Calendly Embed */}
            <div className="bg-gray-50 p-8 border border-gray-200 rounded-lg mb-8">
              <div className="max-w-5xl mx-auto rounded-2xl overflow-hidden">
                <div 
                  className="calendly-inline-widget h-[520px] lg:h-[560px]"
                  data-url="https://calendly.com/christiantewodros-tradetrackmarketing/tradetrack-marketing-onboarding"
                  style={{
                    minWidth: '320px',
                    minHeight: '520px'
                  }}
                ></div>
              </div>
              <div className="text-center mt-4">
                <a 
                  href="https://calendly.com/christiantewodros-tradetrackmarketing/tradetrack-marketing-onboarding"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-accent transition-colors"
                >
                  Having trouble? Open the scheduler in a new tab.
                </a>
              </div>
            </div>

            {/* SMS Consent Text */}
            <div className="bg-background/60 backdrop-blur-sm rounded-lg p-6 border border-border mb-8">
              <p className="text-sm text-muted-foreground text-center">
                By submitting this form, you consent to receive text messages from Tradetrack Logistics related to your request. Message frequency may vary. Message & data rates may apply. Reply STOP to opt out at any time.
              </p>
            </div>

            {/* Privacy Policy and Terms Links */}
            <div className="text-center mb-8">
              <p className="text-sm text-muted-foreground mb-2">
                <a 
                  href="/privacy-policy" 
                  className="text-accent hover:text-accent/80 transition-colors underline"
                >
                  Privacy Policy
                </a>
                {' • '}
                <a 
                  href="/terms-of-service" 
                  className="text-accent hover:text-accent/80 transition-colors underline"
                >
                  Terms & Conditions
                </a>
              </p>
            </div>
            
            <div className="text-center mb-8">
              <div className="mb-4">
                <a 
                  href="mailto:contact@tradetrackmarketing.com"
                  className="text-xl font-semibold text-accent hover:text-accent/80 transition-colors"
                >
                  contact@tradetrackmarketing.com
                </a>
              </div>
              
              <div className="flex items-center justify-center gap-6">
                <a 
                  href="https://twitter.com/TradeTrackHQ" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-accent transition-colors"
                  aria-label="Visit our X (Twitter)"
                >
                  <Twitter className="w-6 h-6" />
                </a>
                <a 
                  href="https://www.linkedin.com/company/tradetrack-marketing" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-accent transition-colors"
                  aria-label="Visit our LinkedIn"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
                <a 
                  href="https://www.instagram.com/tradetrackmarketing" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-accent transition-colors"
                  aria-label="Visit our Instagram"
                >
                  <Instagram className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;

