import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp } from "lucide-react";
import { useState } from "react";
import CalendlyModal from "@/components/CalendlyModal";
import { Reveal } from "@/components/Reveal";

const Hero = () => {
  const [isCalendlyModalOpen, setIsCalendlyModalOpen] = useState(false);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]" aria-hidden />

      <div className="container mx-auto px-4 py-24 lg:py-28 relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          <div className="bg-white rounded-lg p-8 md:p-14 shadow-[var(--card-shadow)]">
            <Reveal delay={0}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-anchor mb-6 leading-tight tracking-tight">
                Scale Your Freight Brokerage with{" "}
                <span className="text-[#63cc53]">High-ROI Digital Marketing</span>
              </h1>
            </Reveal>

            <Reveal delay={80}>
              <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed">
                Generate quality shipper leads at $50–$100 CPL. Recruit CDL drivers at $20–$50 CPL.
                Built exclusively for freight brokers, carriers, and 3PLs in the U.S. logistics industry.
              </p>
            </Reveal>

            <Reveal delay={160}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-14">
                <Button
                  variant="hero"
                  size="lg"
                  className="text-lg px-8 py-6 h-auto bg-accent hover:bg-accent/85 text-accent-foreground rounded-lg"
                  onClick={() => setIsCalendlyModalOpen(true)}
                >
                  Get Your Free Strategy Session
                  <ArrowRight className="ml-2" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="text-lg px-8 py-6 h-auto border-primary/30 text-anchor hover:bg-primary/10 rounded-lg"
                  onClick={() => { window.location.href = "/case-studies"; }}
                >
                  View Case Studies
                </Button>
              </div>
            </Reveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {[
                { value: "3–5×", label: "Average ROI on Google Ads" },
                { value: "$50–$100", label: "Typical CPL for Shipper Leads" },
                { value: "20–40", label: "Monthly Leads from $1.5K Budget" },
              ].map((stat, i) => (
                <Reveal key={i} delay={240 + i * 60}>
                  <div className="bg-[#f8faf9] rounded-lg p-6 shadow-[var(--card-shadow)]">
                    <div className="flex items-center justify-center mb-2">
                      <TrendingUp className="w-7 h-7 text-[#63cc53]" />
                    </div>
                    <div className="text-2xl font-bold text-anchor mb-1">{stat.value}</div>
                    <div className="text-muted-foreground text-sm leading-relaxed">{stat.label}</div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>

      <CalendlyModal
        isOpen={isCalendlyModalOpen}
        onClose={() => setIsCalendlyModalOpen(false)}
      />
    </section>
  );
};

export default Hero;
