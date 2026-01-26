import { Twitter, Linkedin, Instagram, Facebook } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div className="col-span-1 md:col-span-2">
              <img src={logo} alt="TradeTrack Logistics" className="h-12 mb-4" />
              <p className="text-muted-foreground mb-4">
                Digital marketing systems built exclusively for U.S. freight brokers, carriers, and 3PLs. Generate shippers, recruit drivers, scale revenue.
              </p>
              <p className="text-muted-foreground mb-4">
                Email: contact@tradetrackmarketing.com
              </p>
              <div className="flex items-center gap-3">
                <a 
                  href="https://twitter.com/TradeTrackHQ" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-accent transition-colors"
                  aria-label="Follow us on X (Twitter)"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a 
                  href="https://www.linkedin.com/company/tradetrack-marketing" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-accent transition-colors"
                  aria-label="Connect with us on LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a 
                  href="https://www.instagram.com/tradetrackmarketing" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-accent transition-colors"
                  aria-label="Follow us on Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold text-foreground mb-4">Services</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="/services/google-ads" className="hover:text-accent transition-colors">Google Ads</a></li>
                <li><a href="/services/social-ads" className="hover:text-accent transition-colors">Social Media Marketing</a></li>
                <li><a href="/services/linkedin" className="hover:text-accent transition-colors">LinkedIn Campaigns</a></li>
                <li><a href="/services/crm-automation" className="hover:text-accent transition-colors">CRM Automation</a></li>
                <li><a href="/services/websites-funnels" className="hover:text-accent transition-colors">Website Design</a></li>
                <li><a href="/services/brand-positioning" className="hover:text-accent transition-colors">Brand Positioning</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-foreground mb-4">Company</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="/about" className="hover:text-accent transition-colors">About Us</a></li>
                <li><a href="/case-studies" className="hover:text-accent transition-colors">Case Studies</a></li>
                <li><a href="/blog" className="hover:text-accent transition-colors">Blog</a></li>
                <li><a href="/contact" className="hover:text-accent transition-colors">Contact</a></li>
                <li><a href="/privacy-policy" className="hover:text-accent transition-colors">Privacy Policy</a></li>
                <li><a href="/terms-of-service" className="hover:text-accent transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} Tradetrack Logistics. All rights reserved. Built for the freight industry.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
