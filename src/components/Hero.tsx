import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp } from "lucide-react";
import { useState } from "react";
import CalendlyModal from "@/components/CalendlyModal";
import logo from "@/assets/logo.png";

const Hero = () => {
  const [isCalendlyModalOpen, setIsCalendlyModalOpen] = useState(false);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]"></div>
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <div className="bg-white rounded-2xl p-8 md:p-12 border border-border/50 shadow-lg">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-[#3b5a73] mb-6 leading-tight">
              Scale Your Freight Brokerage with{" "}
              <span className="text-[#63cc53]">High-ROI Digital Marketing</span>
            </h1>
            
            <p className="text-lg md:text-xl lg:text-2xl text-[#3b5a73]/90 mb-8 max-w-3xl mx-auto">
              Generate quality shipper leads at $50-$100 CPL. Recruit CDL drivers at $20-$50 CPL. 
              Built exclusively for freight brokers, carriers, and 3PLs in the U.S. logistics industry.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button 
                variant="hero" 
                size="lg" 
                className="text-lg px-8 py-6 h-auto bg-[#63cc53] hover:bg-[#63cc53]/90 text-white"
                onClick={() => setIsCalendlyModalOpen(true)}
              >
                Get Your Free Strategy Session
                <ArrowRight className="ml-2" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="text-lg px-8 py-6 h-auto border-[#3b5a73] text-[#3b5a73] hover:bg-[#3b5a73]/10"
                onClick={() => {
                  window.location.href = '/case-studies';
                }}
              >
                View Case Studies
              </Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="bg-background/60 backdrop-blur-sm rounded-lg p-6 border border-border">
                <div className="flex items-center justify-center mb-2">
                  <TrendingUp className="w-8 h-8 text-[#63cc53]" />
                </div>
                <div className="text-3xl font-bold text-[#3b5a73] mb-1">3-5×</div>
                <div className="text-[#3b5a73]/80">Average ROI on Google Ads</div>
              </div>
              
              <div className="bg-background/60 backdrop-blur-sm rounded-lg p-6 border border-border">
                <div className="flex items-center justify-center mb-2">
                  <TrendingUp className="w-8 h-8 text-[#63cc53]" />
                </div>
                <div className="text-3xl font-bold text-[#3b5a73] mb-1">$50-$100</div>
                <div className="text-[#3b5a73]/80">Typical CPL for Shipper Leads</div>
              </div>
              
              <div className="bg-background/60 backdrop-blur-sm rounded-lg p-6 border border-border">
                <div className="flex items-center justify-center mb-2">
                  <TrendingUp className="w-8 h-8 text-[#63cc53]" />
                </div>
                <div className="text-3xl font-bold text-[#3b5a73] mb-1">20-40</div>
                <div className="text-[#3b5a73]/80">Monthly Leads from $1.5K Budget</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Calendly Modal */}
      <CalendlyModal 
        isOpen={isCalendlyModalOpen} 
        onClose={() => setIsCalendlyModalOpen(false)} 
      />
    </section>
  );
};

export default Hero;
