import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { servicesData } from "@/data/servicesData";

export function ServicesProductSection() {
  return (
    <section className="section-spacing bg-[#f8faf9]" aria-labelledby="services-product-heading">
      <div className="container mx-auto px-4 max-w-6xl">
        <Reveal>
          <div className="text-center mb-14">
            <h2 id="services-product-heading" className="text-3xl md:text-4xl font-bold text-anchor tracking-tight mb-4">
              Our Systems
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              From paid ads to outbound, SEO, and automation—each system is built exclusively for freight and logistics.
            </p>
          </div>
        </Reveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {servicesData.map((service, index) => {
            const Icon = service.icon;
            return (
              <Reveal key={service.href} delay={index * 50}>
                <div className="rounded-xl bg-white p-6 border border-border shadow-[var(--card-shadow)] hover:shadow-[var(--card-hover-shadow)] transition-shadow duration-300 h-full flex flex-col">
                  <div className="flex items-center justify-center w-11 h-11 rounded-lg bg-primary/10 text-primary mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold text-anchor mb-2">{service.name}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-1 line-clamp-3">
                    {service.description}
                  </p>
                  <Link
                    to={service.href}
                    className="inline-flex items-center text-sm font-medium text-primary hover:text-primary/80 transition-colors group"
                  >
                    View {service.name}
                    <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-200" />
                  </Link>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
