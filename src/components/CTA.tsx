import { Mail } from "lucide-react";
import { useEffect } from "react";
import { Reveal } from "@/components/Reveal";

const CTA = () => {
  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://assets.calendly.com/assets/external/widget.css";
    document.head.appendChild(link);

    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(link);
      document.head.removeChild(script);
    };
  }, []);

  return (
    <section id="schedule" className="section-spacing bg-[hsl(0_0%_99%)]">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="max-w-4xl mx-auto text-center">
          <Reveal>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-anchor tracking-tight">
              Ready to Scale Your Freight Business?
            </h2>
          </Reveal>
          <Reveal delay={60}>
            <p className="text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed">
              Get a free marketing strategy session. We'll analyze your current situation and show you exactly how to generate more shippers and drivers.
            </p>
          </Reveal>

          <Reveal delay={120}>
            <div className="bg-card rounded-lg p-6 md:p-8 shadow-[var(--card-shadow)] mb-8">
              <div className="max-w-5xl mx-auto overflow-hidden rounded-lg">
                <div
                  className="calendly-inline-widget h-[520px] lg:h-[560px]"
                  data-url="https://calendly.com/christiantewodros-tradetrackmarketing/tradetrack-marketing-onboarding"
                  style={{ minWidth: "320px", minHeight: "520px" }}
                />
              </div>
              <div className="text-center mt-4">
                <a
                  href="https://calendly.com/christiantewodros-tradetrackmarketing/tradetrack-marketing-onboarding"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Having trouble? Open the scheduler in a new tab.
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal delay={180}>
            <div className="flex justify-center mb-8">
              <div className="flex items-center justify-center gap-3 bg-card p-5 rounded-lg shadow-[var(--card-shadow)] max-w-md w-full">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <div className="text-left">
                  <p className="text-sm text-muted-foreground">Email Us</p>
                  <a
                    href="mailto:contact@tradetrackmarketing.com"
                    className="font-semibold text-foreground hover:text-primary transition-colors"
                  >
                    contact@tradetrackmarketing.com
                  </a>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={220}>
            <div className="text-center">
              <p className="text-sm text-muted-foreground mb-3">Follow us on social media</p>
              <div className="flex justify-center gap-6">
                <a
                  href="https://twitter.com/TradeTrackHQ"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground hover:text-primary transition-colors text-sm"
                >
                  X (Twitter)
                </a>
                <a
                  href="https://www.linkedin.com/company/tradetrack-marketing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground hover:text-primary transition-colors text-sm"
                >
                  LinkedIn
                </a>
                <a
                  href="https://www.instagram.com/tradetrackmarketing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground hover:text-primary transition-colors text-sm"
                >
                  Instagram
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default CTA;
