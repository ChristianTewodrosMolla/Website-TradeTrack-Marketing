import { Button } from "@/components/ui/button";
import { ArrowRight, BarChart3, Users, TrendingUp } from "lucide-react";
import { useState, useEffect } from "react";
import CalendlyModal from "@/components/CalendlyModal";
import { Reveal } from "@/components/Reveal";

const SEGMENTS = ["3PLs", "Forwarders", "Brokers", "Driver Jobs", "Warehousing", "Carriers"];

const Hero = () => {
  const [isCalendlyModalOpen, setIsCalendlyModalOpen] = useState(false);
  const [segmentIndex, setSegmentIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setSegmentIndex((i) => (i + 1) % SEGMENTS.length);
    }, 2200);
    return () => clearInterval(t);
  }, []);

  const scrollToAbout = () => {
    const el = document.getElementById("about");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden bg-white">
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]" aria-hidden />

      <div className="container mx-auto px-4 py-16 lg:py-24 relative z-10">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Copy */}
          <div className="text-center lg:text-left">
            <Reveal delay={0}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-anchor mb-6 leading-tight tracking-tight">
                Capture{" "}
                <span className="text-[#63cc53]">Shipper Demand</span>
                {" "}the Moment It Happens
              </h1>
            </Reveal>

            <Reveal delay={60}>
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 mb-8" aria-live="polite">
                <span className="text-base md:text-lg text-muted-foreground font-medium">For</span>
                <span
                  key={segmentIndex}
                  className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-primary text-primary-foreground shadow-[var(--button-shadow)]"
                >
                  {SEGMENTS[segmentIndex]}
                </span>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                Where Freight Brokers, Carriers, and Fulfillment 3PLs Come to Scale — Proven Systems That Turn Marketing Into Consistent Direct Shipper and Fulfillment Deals.
              </p>
            </Reveal>

            <Reveal delay={180}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button
                  variant="outline"
                  size="lg"
                  className="text-lg px-8 py-6 h-auto border-2 border-primary text-anchor hover:bg-primary/10 rounded-lg font-semibold"
                  onClick={scrollToAbout}
                >
                  About Us
                </Button>
                <Button
                  variant="default"
                  size="lg"
                  className="text-lg px-8 py-6 h-auto bg-accent hover:bg-accent/85 text-accent-foreground rounded-lg font-semibold"
                  onClick={() => setIsCalendlyModalOpen(true)}
                >
                  Book a Call
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </div>
            </Reveal>
          </div>

          {/* Right: Visual (dashboard-style stats card) */}
          <Reveal delay={120} className="flex justify-center lg:justify-end">
            <div className="w-full max-w-md rounded-2xl bg-[#f8faf9] p-6 md:p-8 shadow-[var(--card-shadow)] border border-border/50">
              <div className="grid gap-6">
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground text-sm">Total earnings</span>
                  <span className="text-2xl font-bold text-anchor">$4,745</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10">
                    <Users className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">New customers</p>
                    <p className="text-xl font-semibold text-anchor">476</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-accent/15">
                    <BarChart3 className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Target users</p>
                    <p className="text-xl font-semibold text-anchor">4,250</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10">
                    <TrendingUp className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Daily visitors</p>
                    <p className="text-xl font-semibold text-anchor">Peak Tue</p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
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
