import { Compass, Wallet, Puzzle } from "lucide-react";
import { Reveal } from "@/components/Reveal";

const APPROACH_CARDS = [
  {
    icon: Compass,
    title: "Industry-Specific Frameworks",
    description: "Our campaigns start from a proprietary freight blueprint built exclusively for brokers, 3PL, and warehousing brands. We understand your buyers, operations, and sales cycle—removing costly trial and error from day one.",
  },
  {
    icon: Wallet,
    title: "Full-Funnel Precision",
    description: "We track every dollar through the entire funnel, giving you transparent cost per lead, cost per booked call, and ROI insights. You'll always know what's working, when to scale, and why.",
  },
  {
    icon: Puzzle,
    title: "Scalable Team, Seamless Systems",
    description: "Instead of hiring and training staff, you gain an instant team of freight specialists—strategists, copywriters, and data analysts—delivering faster execution, stronger performance, and effortless scalability as you grow.",
  },
];

export function ServicesCarouselSection() {
  return (
    <section
      id="our-approach"
      className="relative py-20 lg:py-28 overflow-hidden"
      style={{ background: "var(--anchor-section-gradient)" }}
      aria-labelledby="approach-heading"
    >
      <div className="container relative z-10 mx-auto px-4 max-w-6xl">
        <Reveal>
          <div className="text-center mb-14">
            <h2
              id="approach-heading"
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-[hsl(var(--anchor-fg))] tracking-tight mb-4"
            >
              Our Proven{" "}
              <span className="text-[#63cc53]">Freight Marketing</span>
              {" "}Approach
            </h2>
            <p className="text-lg text-[hsl(var(--anchor-muted))] max-w-2xl mx-auto leading-relaxed">
              We execute a freight-only marketing system refined through years of work with freight brokers, 3PLs, carriers, and warehousing companies. Our industry-tested frameworks eliminate guesswork and deliver predictable, scalable growth.
            </p>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {APPROACH_CARDS.map((card, index) => {
            const Icon = card.icon;
            return (
              <Reveal key={card.title} delay={index * 80}>
                <div
                  className="h-full rounded-xl bg-white p-6 md:p-8 shadow-[var(--card-shadow)] border-0 transition-shadow duration-300 hover:shadow-[var(--card-hover-shadow)]"
                >
                  <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-amber-500/20 text-amber-600 mb-4">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-anchor mb-2">
                    {index + 1}. {card.title}
                  </h3>
                  <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
