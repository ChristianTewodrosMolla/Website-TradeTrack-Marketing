import { Truck, Building2, Package } from "lucide-react";

const audiences = [
  {
    icon: Building2,
    title: "Freight Brokers",
    revenue: "$5M–$50M Revenue",
    description: "Lean 1-20 person teams concentrated in major U.S. freight hubs (Midwest, Southeast, Southwest). You need consistent shipper flow and driver capacity.",
    needs: [
      "High-intent shipper leads at $50-$100 CPL",
      "Automated quote pipelines and follow-ups",
      "Professional branding that wins enterprise contracts"
    ]
  },
  {
    icon: Truck,
    title: "Small Carriers",
    fleet: "1–50 Trucks",
    description: "Owner-operators and small fleets needing reliable freight and scalable driver pipelines. You're tired of deadhead miles and inconsistent loads.",
    needs: [
      "Direct access to quality freight in your lanes",
      "Driver recruiting funnels at $20-$50 CPL",
      "Systems to reduce empty miles and maximize revenue"
    ]
  },
  {
    icon: Package,
    title: "Regional 3PLs",
    specialty: "Niche Specialists",
    description: "Smaller logistics firms competing locally or by specialization (drayage, flatbed, reefer, LTL). You need to stand out in a crowded market.",
    needs: [
      "Targeted B2B campaigns on LinkedIn",
      "Compliance-focused branding and website",
      "Automated systems for shipper retention"
    ]
  }
];

const WhoWeServe = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Who We Work With
          </h2>
          <p className="text-lg text-muted-foreground">
            We exclusively serve freight brokers, small carriers, and regional 3PLs. No generic solutions—just marketing built for logistics.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {audiences.map((audience, index) => (
            <div 
              key={index}
              className="bg-card rounded-lg p-8 border border-border hover:shadow-[var(--card-hover-shadow)] transition-all duration-300"
            >
              <div className="bg-primary/10 p-4 rounded-lg w-fit mb-6">
                <audience.icon className="w-8 h-8 text-primary" />
              </div>
              
              <h3 className="text-2xl font-bold text-foreground mb-2">{audience.title}</h3>
              
              <div className="inline-block bg-accent/10 text-accent text-sm font-semibold px-3 py-1 rounded-full mb-4">
                {audience.revenue || audience.fleet || audience.specialty}
              </div>
              
              <p className="text-muted-foreground mb-6">{audience.description}</p>
              
              <div>
                <p className="text-sm font-semibold text-foreground mb-3">What You Get:</p>
                <div className="space-y-2">
                  {audience.needs.map((need, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <div className="bg-accent w-1.5 h-1.5 rounded-full mt-2 shrink-0"></div>
                      <p className="text-sm text-muted-foreground">{need}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoWeServe;
