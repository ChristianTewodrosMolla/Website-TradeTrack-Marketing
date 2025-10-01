import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.svg";

const Header = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-background border-b border-border backdrop-blur-sm bg-background/95">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img src={logo} alt="TradeTrack Marketing" className="h-12 md:h-14" />
          </div>
          
          <nav className="hidden md:flex items-center gap-8">
            <button 
              onClick={() => scrollToSection('about')}
              className="text-primary hover:text-accent transition-colors font-medium"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="text-primary hover:text-accent transition-colors font-medium"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('case-studies')}
              className="text-primary hover:text-accent transition-colors font-medium"
            >
              Case Studies
            </button>
            <Button 
              variant="default" 
              size="sm"
              onClick={() => scrollToSection('contact')}
              className="bg-accent hover:bg-accent/90 text-accent-foreground"
            >
              Contact
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
