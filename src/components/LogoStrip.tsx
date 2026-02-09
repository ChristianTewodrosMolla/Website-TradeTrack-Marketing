import { Reveal } from "@/components/Reveal";

const LOGOS = [
  "Freight Brokers",
  "3PLs",
  "Carriers",
  "Warehousing",
  "Forwarders",
  "Fulfillment",
];

export function LogoStrip() {
  return (
    <section className="py-12 lg:py-16 bg-[#f8faf9] border-y border-border/50" aria-labelledby="logo-strip-heading">
      <div className="container mx-auto px-4 max-w-6xl">
        <Reveal>
          <h2
            id="logo-strip-heading"
            className="text-2xl md:text-3xl font-bold text-anchor text-center mb-10 tracking-tight"
          >
            The #1{" "}
            <span className="text-[#63cc53]">Freight Marketing</span>
            {" "}Partner
          </h2>
        </Reveal>
        <Reveal delay={60}>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 lg:gap-16">
            {LOGOS.map((name) => (
              <span
                key={name}
                className="text-muted-foreground font-semibold text-sm md:text-base tracking-wide uppercase opacity-80"
              >
                {name}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
