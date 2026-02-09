import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { servicesData } from "@/data/servicesData";
import { Link } from "react-router-dom";

const CHAPTER_MIN_HEIGHT = "min-h-[72vh]";

function DarkAnchor({
  title,
  children,
  revealDelay = 0,
}: {
  title: string;
  children: React.ReactNode;
  revealDelay?: number;
}) {
  return (
    <section
      className={`${CHAPTER_MIN_HEIGHT} flex flex-col justify-center bg-[hsl(var(--anchor-bg))] text-[hsl(var(--anchor-fg))] py-24 lg:py-28`}
      aria-label={title}
    >
      <div className="container mx-auto px-4 max-w-3xl text-center">
        <Reveal delay={revealDelay}>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-6">
            {title}
          </h2>
        </Reveal>
        <Reveal delay={revealDelay + 80}>
          <div className="text-[hsl(var(--anchor-muted))] text-lg leading-relaxed">
            {children}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function ServiceChapter({
  service,
  index,
}: {
  service: (typeof servicesData)[number];
  index: number;
}) {
  const Icon = service.icon;
  const isEven = index % 2 === 0;
  const bgClass = isEven ? "bg-white" : "bg-[hsl(0_0%_99%)]";

  return (
    <section
      className={`${CHAPTER_MIN_HEIGHT} flex flex-col justify-center py-24 lg:py-28 ${bgClass} transition-colors duration-300`}
      aria-labelledby={`service-${index}-title`}
    >
      <div className="container mx-auto px-4 max-w-3xl">
        <Reveal delay={0}>
          <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary mb-8">
            <Icon className="w-6 h-6" />
          </div>
        </Reveal>
        <Reveal delay={60}>
          <h2
            id={`service-${index}-title`}
            className="text-3xl md:text-4xl font-bold text-foreground tracking-tight mb-6"
          >
            {service.name}
          </h2>
        </Reveal>
        <Reveal delay={120}>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            {service.description}
          </p>
        </Reveal>
        <Reveal delay={180}>
          <ul className="space-y-3 mb-10">
            {service.outcomes.map((outcome, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="bg-primary w-1.5 h-1.5 rounded-full mt-2 shrink-0" />
                <span className="text-muted-foreground leading-relaxed">{outcome}</span>
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal delay={240}>
          <Link
            to={service.href}
            className="inline-flex items-center text-sm font-medium text-primary hover:text-primary/80 transition-colors group"
          >
            Learn more
            <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-200" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

export function ServicesChapters() {
  return (
    <div className="services-chapters">
      {/* Intro: light */}
      <section className={`${CHAPTER_MIN_HEIGHT} flex flex-col justify-center py-24 lg:py-28 bg-white`}>
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <Reveal delay={0}>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight mb-6">
              Our Services
            </h1>
          </Reveal>
          <Reveal delay={80}>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Comprehensive digital marketing solutions for freight brokers, carriers, and 3PLs.
              Built exclusively for the U.S. logistics industry.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Dark anchor: methodology */}
      <DarkAnchor title="How we work" revealDelay={0}>
        We focus on a few proven systems—paid acquisition, automation, and positioning—so you get
        measurable results instead of generic tactics. Every campaign is designed for freight.
      </DarkAnchor>

      {/* Service chapters */}
      {servicesData.map((service, index) => (
        <ServiceChapter key={service.href} service={service} index={index} />
      ))}

      {/* Dark anchor: CTA */}
      <DarkAnchor title="Ready to get started?" revealDelay={0}>
        <p className="mb-8">
          Book a free strategy session to discuss your needs and see which services fit your business.
        </p>
        <a
          href="/#schedule"
          className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium bg-accent hover:bg-accent/90 text-accent-foreground rounded-lg transition-colors duration-200"
        >
          Get free strategy session
          <ArrowRight className="ml-2 w-4 h-4" />
        </a>
      </DarkAnchor>
    </div>
  );
}
