import { Search, Users, Linkedin, Zap, Globe, Award } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const solutions = [
  {
    icon: Search,
    title: "Google Ads (Search)",
    description: "Capture high-intent shippers searching for freight services in your lanes. Proven 5-10× ROI with CPLs of $50-$100.",
    results: ["60+ leads/month at $26 CPL", "One new shipper = tens of thousands in revenue"]
  },
  {
    icon: Users,
    title: "Facebook & Instagram Ads",
    description: "Recruit CDL drivers and owner-operators at scale. Highlight pay, home time, and benefits to build your driver pipeline.",
    results: ["$20-$50 CPL for qualified drivers", "39% CPL reduction in 3 months"]
  },
  {
    icon: Linkedin,
    title: "LinkedIn Campaigns",
    description: "Target B2B decision-makers: logistics managers, supply chain directors, and distributors looking for reliable capacity.",
    results: ["Direct access to enterprise buyers", "Build long-term shipper relationships"]
  },
  {
    icon: Zap,
    title: "CRM Automation (GoHighLevel)",
    description: "Instant SMS/email follow-ups, quote pipelines, driver hiring funnels, and real-time load updates. No more manual work.",
    results: ["Automated lead nurturing 24/7", "Close more deals faster"]
  },
  {
    icon: Globe,
    title: "Websites & Funnels",
    description: "Replace outdated DOT pages with professional, trust-rich landing pages, VSLs, and testimonials that convert.",
    results: ["Modern, mobile-responsive design", "Build trust with compliance badges"]
  },
  {
    icon: Award,
    title: "Brand Positioning",
    description: "Establish credibility with compliance badges, client testimonials, reviews, and industry-specific messaging.",
    results: ["Stand out from competitors", "Win enterprise-level contracts"]
  }
];

const Solutions = () => {
  return (
    <section className="py-20 bg-[var(--section-gradient)]">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Marketing Systems Built for Freight
          </h2>
          <p className="text-lg text-muted-foreground">
            We don't do generic marketing. Every campaign, funnel, and automation is designed specifically for freight brokers, carriers, and 3PLs.
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
      </div>
    </section>
  );
};

export default Solutions;
