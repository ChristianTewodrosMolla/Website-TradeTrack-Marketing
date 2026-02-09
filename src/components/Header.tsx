import { Button } from "@/components/ui/button";
import { Twitter, Linkedin, Instagram, Facebook, Menu, ChevronDown, X } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import logo from "@/assets/logo-white.svg";

const Header = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);

  const servicesTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleServicesMouseEnter = () => {
    if (servicesTimeoutRef.current) {
      clearTimeout(servicesTimeoutRef.current);
      servicesTimeoutRef.current = null;
    }
    setIsServicesOpen(true);
  };

  const handleServicesMouseLeave = () => {
    servicesTimeoutRef.current = setTimeout(() => {
      setIsServicesOpen(false);
    }, 150);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      setIsServicesOpen(false);
    }
  };

  useEffect(() => {
    return () => {
      if (servicesTimeoutRef.current) {
        clearTimeout(servicesTimeoutRef.current);
      }
    };
  }, []);

  const servicesItems = [
    { name: "Google Ads", href: "/services/google-ads" },
    { name: "Facebook & Instagram Ads", href: "/services/social-ads" },
    { name: "LinkedIn Campaigns", href: "/services/linkedin" },
    { name: "CRM Automation (GoHighLevel)", href: "/services/crm-automation" },
    { name: "Websites & Funnels", href: "/services/websites-funnels" },
    { name: "Brand Positioning", href: "/services/brand-positioning" }
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur-sm shadow-[0_1px_0_0_hsl(var(--border)_/_0.4)]">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <a href="/" aria-label="Home" className="inline-flex items-center rounded-lg bg-anchor px-3 py-2">
              <img src={logo} alt="TradeTrack Logistics logo — white wordmark with TradeTrack and LOGISTICS" className="h-10 md:h-12 w-auto" />
            </a>
          </div>
          
          <nav className="hidden md:flex items-center gap-8">
            <button 
              onClick={() => scrollToSection('about')}
              className="text-anchor hover:text-primary transition-colors font-medium"
            >
              About
            </button>
            
            {/* Services Dropdown */}
            <div 
              className="relative"
              onMouseEnter={handleServicesMouseEnter}
              onMouseLeave={handleServicesMouseLeave}
            >
              <button 
                className="text-anchor hover:text-primary transition-colors font-medium flex items-center gap-1"
                aria-expanded={isServicesOpen}
                aria-haspopup="menu"
                onKeyDown={handleKeyDown}
              >
                Services
                <ChevronDown className={`w-4 h-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isServicesOpen && (
                <div 
                  className="absolute top-full left-0 mt-2 w-64 bg-white border border-gray-200 rounded-lg shadow-lg py-2 z-50"
                  role="menu"
                >
                  {servicesItems.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      role="menuitem"
                      className="block px-4 py-3 text-sm text-anchor hover:text-primary hover:bg-primary/10 transition-colors"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              )}
            </div>
            
            <a 
              href="/blog"
              className="text-anchor hover:text-primary transition-colors font-medium"
            >
              Blog
            </a>
            <a 
              href="/case-studies"
              className="text-anchor hover:text-primary transition-colors font-medium"
            >
              Case Studies
            </a>
            <div className="flex items-center gap-3">
              <a 
                href="https://twitter.com/TradeTrackHQ" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Follow us on X (Twitter)"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a 
                href="https://www.linkedin.com/company/tradetrack-marketing" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Connect with us on LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a 
                href="https://www.instagram.com/tradetrackmarketing" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Follow us on Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
            <Button
              variant="default"
              size="sm"
              onClick={() => scrollToSection("schedule")}
              className="bg-accent hover:bg-accent/85 text-accent-foreground"
            >
              Get Strategy Session
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-border bg-background">
            <nav className="container mx-auto px-4 py-4 space-y-4">
              <button 
                onClick={() => {
                  scrollToSection('about');
                  setIsMobileMenuOpen(false);
                }}
                className="block w-full text-left text-anchor hover:text-primary transition-colors font-medium"
              >
                About
              </button>
              
              <div>
                <button 
                  onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                  className="flex items-center justify-between w-full text-left text-anchor hover:text-primary transition-colors font-medium mb-2"
                  aria-expanded={isMobileServicesOpen}
                >
                  Services
                  <ChevronDown className={`w-4 h-4 transition-transform ${isMobileServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                {isMobileServicesOpen && (
                  <div className="pl-4 space-y-2">
                    {servicesItems.map((item) => (
                      <a
                        key={item.href}
                        href={item.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
              
              <a 
                href="/blog"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-anchor hover:text-primary transition-colors font-medium"
              >
                Blog
              </a>
              <a 
                href="/case-studies"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-anchor hover:text-primary transition-colors font-medium"
              >
                Case Studies
              </a>
              
              <div className="flex items-center gap-3 pt-4">
                <a 
                  href="https://twitter.com/TradeTrackHQ" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label="Follow us on X (Twitter)"
                >
                  <Twitter className="w-4 h-4" />
                </a>
                <a 
                  href="https://www.linkedin.com/company/tradetrack-marketing" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label="Connect with us on LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a 
                  href="https://www.instagram.com/tradetrackmarketing" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label="Follow us on Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
              </div>
              
              <Button
                variant="default"
                size="sm"
                onClick={() => {
                  scrollToSection("schedule");
                  setIsMobileMenuOpen(false);
                }}
                className="w-full bg-accent hover:bg-accent/85 text-accent-foreground"
              >
                Get Strategy Session
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
