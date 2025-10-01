import { Badge } from "@/components/ui/badge";
import { CheckCircle2 } from "lucide-react";

const examples = [
  {
    title: "Google Ads for Shippers",
    challenge: "Brokers often struggle to generate consistent shipper leads.",
    solution: "High-intent Google Ads campaigns targeting specific services and regions.",
    outcomes: [
      "20–40 shipper leads/month on modest budgets",
      "CPLs in the $50–$100 range (sometimes lower with long-term optimization)",
      "Even one new shipper can represent tens of thousands in lifetime revenue"
    ]
  },
  {
    title: "Driver Recruiting with Facebook & Instagram",
    challenge: "Carriers face constant driver turnover and empty trucks.",
    solution: "Targeted social ads highlighting pay, home time, and benefits.",
    outcomes: [
      "CPLs for driver leads often between $20–$50",
      "Reduction in recruiting costs over time (seen up to 30–40% in some campaigns)",
      "A steady pipeline of qualified CDL driver applications"
    ]
  },
  {
    title: "Websites, Branding & Automation",
    challenge: "Many small logistics firms rely on outdated websites and manual processes.",
    solution: "Rebuild web presence, add CRM automation, and establish credibility with compliance badges and testimonials.",
    outcomes: [
      "Stronger digital presence that wins shipper trust",
      "Automated follow-ups increasing close rates",
      "Improved ability to secure enterprise contracts"
    ]
  }
];

const Proof = () => {
  return (
    <section id="case-studies" className="py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <Badge variant="secondary" className="mb-4 bg-accent/20 text-accent-foreground border-accent/30">
            Proven Systems
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Proven Systems. Real Results in Freight.
          </h2>
          <p className="text-lg text-primary-foreground/90">
            Our campaigns are built for freight. While every business, lane, and budget is different, these examples show what's possible when the right systems are applied.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {examples.map((example, index) => (
            <div 
              key={index}
              className="bg-primary-foreground/5 backdrop-blur-sm rounded-lg p-8 border border-primary-foreground/20 hover:bg-primary-foreground/10 transition-all duration-300"
            >
              <h3 className="text-2xl font-bold mb-2">{example.title}</h3>
              <div className="mb-6">
                <p className="text-sm text-primary-foreground/70 mb-1 font-semibold">Challenge:</p>
                <p className="text-primary-foreground/90 mb-4">{example.challenge}</p>
                <p className="text-sm text-primary-foreground/70 mb-1 font-semibold">Solution:</p>
                <p className="text-primary-foreground/90">{example.solution}</p>
              </div>
              <div>
                <p className="text-sm text-accent font-semibold mb-3">Possible Outcomes:</p>
                <div className="space-y-2">
                  {example.outcomes.map((outcome, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                      <p className="text-primary-foreground/90">{outcome}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="max-w-3xl mx-auto text-center mt-12">
          <p className="text-primary-foreground/80 text-base italic">
            These outcomes are examples of what's possible with proven systems in freight marketing. Actual results will vary by market, budget, and strategy — but the process we use is designed to create measurable, scalable growth over time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Proof;
