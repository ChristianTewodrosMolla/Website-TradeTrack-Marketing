import { Calendar, Wallet, MessageSquare, Users } from "lucide-react";
import { Reveal } from "@/components/Reveal";

const VALUES = [
  {
    icon: Calendar,
    title: "Consistency You Can Count On",
    description: "Our SOP-driven workflows and proactive monitoring ensure campaigns stay consistent every week, giving you predictable lead flow without downtime, guesswork, or performance swings.",
  },
  {
    icon: Wallet,
    title: "Financial Clarity & ROI Confidence",
    description: "We track cost per lead, cost per call, and ROI with precision, giving you complete financial visibility so scaling decisions are always data-backed and low-risk.",
  },
  {
    icon: MessageSquare,
    title: "Seamless Communication & Fast Support",
    description: "You get dedicated channels, weekly updates, and direct access to specialists, ensuring fast responses, clear expectations, and no miscommunication slowing down results.",
  },
  {
    icon: Users,
    title: "Built-In Reliability & Redundancy",
    description: "Instead of relying on one internal hire, you gain an entire team—strategy, creative, data, and outreach—ensuring campaigns stay strong regardless of staffing or seasonality.",
  },
];

export function CFOValueSection() {
  return (
    <section className="section-spacing bg-background" aria-labelledby="cfo-heading">
      <div className="container mx-auto px-4 max-w-6xl">
        <Reveal>
          <div className="text-center mb-14">
            <h2 id="cfo-heading" className="text-3xl md:text-4xl lg:text-5xl font-bold text-anchor tracking-tight mb-4">
              Your CFO’s New Best Friend
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Marketing shouldn’t feel unpredictable or expensive. Our freight-only systems give you clear costs, transparent ROI, and dependable performance — helping you scale profitably without the overhead, risk, or trial-and-error of hiring in-house.
            </p>
          </div>
        </Reveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {VALUES.map((item, index) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.title} delay={index * 60}>
                <div className="rounded-xl bg-card p-6 border border-border shadow-[var(--card-shadow)] hover:shadow-[var(--card-hover-shadow)] transition-shadow duration-300">
                  <div className="flex items-center justify-center w-11 h-11 rounded-lg bg-primary/10 text-primary mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-anchor mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
