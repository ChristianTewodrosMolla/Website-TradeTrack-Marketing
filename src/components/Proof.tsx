import { Badge } from "@/components/ui/badge";
import { CheckCircle2 } from "lucide-react";

const caseStudies = [
  {
    client: "Drayage Broker (Midwest)",
    challenge: "Struggling to generate consistent shipper leads in competitive market",
    solution: "Google Ads campaign targeting port drayage and intermodal shippers",
    results: [
      "60+ monthly shipper leads at $26 CPL",
      "5× ROI within first 90 days",
      "3 new high-volume shipper accounts"
    ]
  },
  {
    client: "Regional Carrier (Southeast)",
    challenge: "Constant driver turnover with no recruiting pipeline",
    solution: "Facebook & Instagram ads highlighting pay, benefits, and home time",
    results: [
      "39% reduction in CPL over 3 months",
      "2× increase in qualified driver applications",
      "Filled 15 open driver positions in 60 days"
    ]
  },
  {
    client: "Flatbed 3PL (Texas)",
    challenge: "Outdated website and zero digital presence hurting credibility",
    solution: "Modern website rebuild + Google Ads + CRM automation",
    results: [
      "$1,500/month ad budget generating 40+ leads",
      "Professional branding won 2 enterprise contracts",
      "Automated follow-up increased close rate by 25%"
    ]
  }
];

const Proof = () => {
  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <Badge variant="secondary" className="mb-4 bg-accent/20 text-accent-foreground border-accent/30">
            Proven Results
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Real Freight Businesses. Real ROI.
          </h2>
          <p className="text-lg text-primary-foreground/90">
            We've helped brokers and carriers scale from $5M to $50M+ with campaigns that actually work in freight.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {caseStudies.map((study, index) => (
            <div 
              key={index}
              className="bg-primary-foreground/5 backdrop-blur-sm rounded-lg p-8 border border-primary-foreground/20 hover:bg-primary-foreground/10 transition-all duration-300"
            >
              <h3 className="text-2xl font-bold mb-2">{study.client}</h3>
              <div className="mb-6">
                <p className="text-sm text-primary-foreground/70 mb-1 font-semibold">Challenge:</p>
                <p className="text-primary-foreground/90 mb-4">{study.challenge}</p>
                <p className="text-sm text-primary-foreground/70 mb-1 font-semibold">Solution:</p>
                <p className="text-primary-foreground/90">{study.solution}</p>
              </div>
              <div>
                <p className="text-sm text-accent font-semibold mb-3">Results:</p>
                <div className="space-y-2">
                  {study.results.map((result, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                      <p className="text-primary-foreground/90">{result}</p>
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

export default Proof;
