import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Twitter, Linkedin, Instagram } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Contact Us
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Get in touch with our freight marketing specialists.
            </p>
            
            <div className="mb-8">
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
      </main>
      <Footer />
    </div>
  );
};

export default Contact;

