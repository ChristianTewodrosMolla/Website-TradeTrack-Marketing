import { Search, Users, Linkedin, Zap, Globe, Award } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const solutions = [
  {
    icon: Search,
    title: "Google Ads (Search)",
    description: "Capture high-intent shippers searching for freight services in your lanes. Google Ads consistently delivers strong ROI for brokers, with typical CPLs in the $50–$100 range. With long-term optimization, CPLs can sometimes fall into the $25–$40 range.",
    results: ["Predictable shipper leads month after month", "Even one new shipper can mean tens of thousands in revenue"]
  },
  {
    icon: Users,
    title: "Facebook & Instagram Ads",
    description: "Recruit CDL drivers and owner-operators at scale. Highlight pay, home time, and benefits to build a steady driver pipeline.",
    results: ["Driver CPLs typically $20–$50", "Long-term campaigns reduce recruiting costs over time"]
  },
  {
    icon: Linkedin,
    title: "LinkedIn Campaigns",
    description: "Target B2B decision-makers like logistics managers, supply chain directors, and distributors who need reliable capacity.",
    results: ["Direct access to enterprise buyers", "Build trust and long-term shipper relationships"]
  },
  {
    icon: Zap,
    title: "CRM Automation (GoHighLevel)",
    description: "Replace manual calls and emails with automated SMS/email follow-ups, load updates, and driver funnels.",
    results: ["24/7 lead nurturing and updates", "Close deals faster with less manual work"]
  },
  {
    icon: Globe,
    title: "Websites & Funnels",
    description: "Upgrade outdated DOT pages into professional, trust-rich websites and landing pages with VSLs, testimonials, and compliance badges.",
    results: ["Mobile-responsive modern design", "Build shipper trust and credibility"]
  },
  {
    icon: Award,
    title: "Brand Positioning",
    description: "Stand out with compliance badges, testimonials, reviews, and industry-specific messaging tailored to freight.",
    results: ["Differentiate from competitors", "Win credibility with larger contracts"]
  }
];

const Solutions = () => {
  return (
    <section id="services" className="py-20 bg-[var(--section-gradient)]">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Marketing Systems Built for Freight
          </h2>
          <p className="text-lg text-muted-foreground">
            We don't do generic marketing. Every campaign, funnel, and automation is designed specifically for freight brokers, carriers, and 3PLs. These systems have been tested in the freight industry and deliver consistent, measurable results.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {solutions.map((solution, index) => (
            <Card 
              key={index}
              className="hover:shadow-[var(--card-hover-shadow)] transition-all duration-300 border-border"
            >
              <CardHeader>
                <div className="bg-primary/10 p-3 rounded-lg w-fit mb-4">
                  <solution.icon className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-xl mb-2">{solution.title}</CardTitle>
                <CardDescription className="text-base">{solution.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {solution.results.map((result, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <div className="bg-accent w-1.5 h-1.5 rounded-full mt-2 shrink-0"></div>
                      <p className="text-sm text-muted-foreground">{result}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="max-w-3xl mx-auto text-center mt-12">
          <p className="text-muted-foreground text-base italic">
            These are proven systems built for freight. Actual outcomes will vary by region, budget, and market — but the process itself is designed to create reliable, measurable growth.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Solutions;
