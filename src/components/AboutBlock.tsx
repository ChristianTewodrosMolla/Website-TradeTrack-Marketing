import { Reveal } from "@/components/Reveal";

export function AboutBlock() {
  return (
    <section id="about" className="section-spacing bg-background" aria-labelledby="about-heading">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <Reveal className="relative rounded-2xl overflow-hidden bg-muted/30 aspect-[4/3] min-h-[280px]">
            <img
              src="/images/services/google-ads-dashboard.jpg"
              alt="Freight marketing dashboard and analytics"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </Reveal>
          <div>
            <Reveal>
              <h2 id="about-heading" className="text-3xl md:text-4xl font-bold text-anchor mb-6 tracking-tight">
                At <strong>TradeTrack</strong>, freight isn’t one of the industries we serve — it’s <em>the only one</em>.
              </h2>
            </Reveal>
            <Reveal delay={60}>
              <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                Every campaign, ad, and outreach sequence we build is engineered exclusively for{" "}
                <strong className="text-foreground">freight brokers, 3PLs, carriers, and warehousing companies</strong>.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                Over years of testing, we’ve built and refined the <strong className="text-foreground">blueprint</strong> — proven frameworks for generating shipper leads, closing fulfillment contracts, and scaling logistics brands without wasted spend or guesswork.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                While generalist marketers and in-house hires are still experimenting, our systems —{" "}
                <strong className="text-foreground">Google Ads, LinkedIn, CRM Automation, Websites, and Brand Positioning</strong> — are already calibrated to your market, your sales cycle, and your buyer psychology. We don’t start from scratch. We start from what works — because this is all we do.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
