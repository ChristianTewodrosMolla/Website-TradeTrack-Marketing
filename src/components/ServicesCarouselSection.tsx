import { useState, useCallback, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { Reveal } from "@/components/Reveal";
import { servicesData } from "@/data/servicesData";
import { cn } from "@/lib/utils";

export function ServicesCarouselSection() {
  const [api, setApi] = useState<CarouselApi | null>(null);
  const [current, setCurrent] = useState(0);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mq.matches);
    const handler = () => setPrefersReducedMotion(mq.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  const onSelect = useCallback((api: CarouselApi) => {
    if (!api) return;
    setCurrent(api.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!api) return;
    onSelect(api);
    api.on("select", onSelect);
    return () => api.off("select", onSelect);
  }, [api, onSelect]);

  return (
    <section
      className="relative py-20 lg:py-28 overflow-hidden"
      style={{ background: "var(--anchor-section-gradient)" }}
      aria-labelledby="carousel-heading"
    >
      <div className="container relative z-10 mx-auto px-4 max-w-6xl">
        <Reveal>
          <div className="text-center mb-14">
            <h2
              id="carousel-heading"
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-[hsl(var(--anchor-fg))] tracking-tight mb-4"
            >
              Our proven logistics marketing approach
            </h2>
            <p className="text-lg text-[hsl(var(--anchor-muted))] max-w-2xl mx-auto leading-relaxed">
              We execute a freight-only marketing system refined through years of work with brokers, carriers, and 3PLs. Industry-tested frameworks that deliver predictable, scalable growth.
            </p>
          </div>
        </Reveal>

        <Reveal delay={80}>
          <div className="relative">
            <Carousel
              key={prefersReducedMotion ? "reduced" : "default"}
              setApi={setApi}
              opts={{
                loop: true,
                align: "center",
                duration: prefersReducedMotion ? 0 : 35,
                containScroll: "trimSnaps",
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-2 md:-ml-4">
                {servicesData.map((service, index) => {
                  const Icon = service.icon;
                  return (
                    <CarouselItem
                      key={service.href}
                      className="pl-2 md:pl-4 basis-full sm:basis-[85%] md:basis-[72%] lg:basis-[48%]"
                    >
                      <div
                        className={cn(
                          "h-full rounded-lg bg-white p-6 md:p-8 shadow-[var(--card-shadow)]",
                          "transition-shadow duration-300 hover:shadow-[var(--card-hover-shadow)]",
                          "border-0"
                        )}
                      >
                        <div className="flex items-center gap-3 mb-4">
                          <div className="flex items-center justify-center w-11 h-11 rounded-lg bg-primary/10 text-primary shrink-0">
                            <Icon className="w-5 h-5" />
                          </div>
                          <h3 className="text-xl font-bold text-anchor">
                            {service.name}
                          </h3>
                        </div>
                        <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-6 line-clamp-3">
                          {service.description}
                        </p>
                        <Link
                          to={service.href}
                          className="inline-flex items-center text-sm font-medium text-primary hover:text-primary/80 transition-colors group"
                        >
                          Learn more
                          <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-200" />
                        </Link>
                      </div>
                    </CarouselItem>
                  );
                })}
              </CarouselContent>

              {/* Minimal arrows */}
              <div className="flex items-center justify-center gap-4 mt-10">
                <button
                  type="button"
                  onClick={() => api?.scrollPrev()}
                  disabled={api && !api.canScrollPrev()}
                  className={cn(
                    "p-2 rounded-full text-[hsl(var(--anchor-fg))]/70 hover:text-[hsl(var(--anchor-fg))] hover:bg-white/10 transition-colors duration-200 disabled:opacity-30 disabled:pointer-events-none",
                    "focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-[hsl(var(--anchor-bg))]"
                  )}
                  aria-label="Previous slide"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                {/* Dots */}
                <div className="flex items-center gap-2">
                  {servicesData.map((_, index) => (
                    <button
                      key={index}
                      type="button"
                      onClick={() => api?.scrollTo(index)}
                      className={cn(
                        "rounded-full transition-all duration-300",
                        current === index
                          ? "w-6 h-2 bg-white"
                          : "w-2 h-2 bg-white/40 hover:bg-white/60"
                      )}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>

                <button
                  type="button"
                  onClick={() => api?.scrollNext()}
                  disabled={api && !api.canScrollNext()}
                  className={cn(
                    "p-2 rounded-full text-[hsl(var(--anchor-fg))]/70 hover:text-[hsl(var(--anchor-fg))] hover:bg-white/10 transition-colors duration-200 disabled:opacity-30 disabled:pointer-events-none",
                    "focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-[hsl(var(--anchor-bg))]"
                  )}
                  aria-label="Next slide"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </Carousel>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
