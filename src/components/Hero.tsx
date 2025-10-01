import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp } from "lucide-react";
import logo from "@/assets/logo.svg";

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-secondary/30 via-background to-background">
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]"></div>
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <div className="mb-8 flex justify-center">
            <img src={logo} alt="Freight Marketing Pro" className="h-16 md:h-20" />
          </div>
          
          <div className="bg-gradient-to-br from-secondary/40 to-background/80 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-border/50 shadow-lg">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary mb-6 leading-tight">
              Scale Your Freight Brokerage with{" "}
              <span className="text-accent">High-ROI Digital Marketing</span>
            </h1>
            
            <p className="text-lg md:text-xl lg:text-2xl text-foreground/90 mb-8 max-w-3xl mx-auto">
              Generate quality shipper leads at $50-$100 CPL. Recruit CDL drivers at $20-$50 CPL. 
              Built exclusively for freight brokers, carriers, and 3PLs in the U.S. logistics industry.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button variant="hero" size="lg" className="text-lg px-8 py-6 h-auto">
                Get Your Free Strategy Session
                <ArrowRight className="ml-2" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6 h-auto border-primary hover:bg-primary/10">
                View Case Studies
              </Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="bg-background/60 backdrop-blur-sm rounded-lg p-6 border border-border">
                <div className="flex items-center justify-center mb-2">
                  <TrendingUp className="w-8 h-8 text-accent" />
                </div>
                <div className="text-3xl font-bold text-primary mb-1">5-10×</div>
                <div className="text-foreground/80">Average ROI on Google Ads</div>
              </div>
              
              <div className="bg-background/60 backdrop-blur-sm rounded-lg p-6 border border-border">
                <div className="flex items-center justify-center mb-2">
                  <TrendingUp className="w-8 h-8 text-accent" />
                </div>
                <div className="text-3xl font-bold text-primary mb-1">$26</div>
                <div className="text-foreground/80">Average CPL for Shipper Leads</div>
              </div>
              
              <div className="bg-background/60 backdrop-blur-sm rounded-lg p-6 border border-border">
                <div className="flex items-center justify-center mb-2">
                  <TrendingUp className="w-8 h-8 text-accent" />
                </div>
                <div className="text-3xl font-bold text-primary mb-1">60+</div>
                <div className="text-foreground/80">Monthly Leads from $1.5K Budget</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
