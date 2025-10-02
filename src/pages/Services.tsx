import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Search, Users, Linkedin, Zap, Globe, Award } from "lucide-react";
import { Helmet } from "react-helmet-async";

const services = [
  {
    name: "Google Ads",
    href: "/services/google-ads",
    description: "Capture high-intent shippers actively searching for freight services in your lanes. Proven Google Ads campaigns with consistent ROI.",
    icon: Search
  },
  {
    name: "Facebook & Instagram Ads",
    href: "/services/social-ads",
    description: "Recruit CDL drivers and owner-operators at scale with targeted social media campaigns and proven ad funnels.",
    icon: Users
  },
  {
    name: "LinkedIn Campaigns",
    href: "/services/linkedin",
    description: "Reach logistics decision-makers and build enterprise relationships with compliant LinkedIn campaigns.",
    icon: Linkedin
  },
  {
    name: "CRM Automation (GoHighLevel)",
    href: "/services/crm-automation",
    description: "Replace manual calls and emails with automated SMS/email follow-ups, load updates, and driver funnels.",
    icon: Zap
  },
  {
    name: "Websites & Funnels",
    href: "/services/websites-funnels",
    description: "Upgrade outdated DOT pages into professional, trust-rich websites and landing pages with modern design.",
    icon: Globe
  },
  {
    name: "Brand Positioning",
    href: "/services/brand-positioning",
    description: "Differentiate with industry-specific messaging and credibility assets to win larger accounts.",
    icon: Award
  }
];

const Services = () => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Services | TradeTrack Marketing</title>
        <meta name="description" content="Comprehensive digital marketing solutions for freight brokers, carriers, and 3PLs. Google Ads, social media marketing, LinkedIn campaigns, CRM automation, websites, and brand positioning." />
        <link rel="canonical" href="https://tradetrackmarketing.com/services" />
        <meta property="og:title" content="Services | TradeTrack Marketing" />
        <meta property="og:description" content="Comprehensive digital marketing solutions for freight brokers, carriers, and 3PLs. Google Ads, social media marketing, LinkedIn campaigns, CRM automation, websites, and brand positioning." />
        <meta property="og:url" content="https://tradetrackmarketing.com/services" />
        <meta name="twitter:title" content="Services | TradeTrack Marketing" />
        <meta name="twitter:description" content="Comprehensive digital marketing solutions for freight brokers, carriers, and 3PLs. Google Ads, social media marketing, LinkedIn campaigns, CRM automation, websites, and brand positioning." />
      </Helmet>
      
      <Header />
      <main className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Hero Section */}
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
                Our Services
              </h1>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Comprehensive digital marketing solutions for freight brokers, carriers, and 3PLs. 
                Built exclusively for the U.S. logistics industry.
              </p>
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {services.map((service) => {
                const IconComponent = service.icon;
                return (
                  <Card 
                    key={service.href}
                    className="hover:shadow-lg transition-shadow duration-300 border-border h-full"
                  >
                    <CardHeader>
                      <div className="flex items-center gap-3 mb-3">
                        <div className="p-2 rounded-lg bg-primary/10">
                          <IconComponent className="w-6 h-6 text-primary" />
                        </div>
                        <CardTitle className="text-xl">{service.name}</CardTitle>
                      </div>
                      <CardDescription className="text-muted-foreground leading-relaxed">
                        {service.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <a 
                        href={service.href}
                        className="inline-flex items-center text-sm font-medium text-accent hover:text-accent/80 transition-colors group"
                      >
                        Learn more
                        <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </a>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* CTA Section */}
            <div className="text-center bg-card p-8 rounded-xl border border-border">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Book a free strategy session to discuss your specific needs and see which services are the best fit for your freight business.
              </p>
              <a 
                href="/#schedule"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium bg-accent hover:bg-accent/90 text-accent-foreground rounded-lg transition-colors"
              >
                Get Free Strategy Session
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Services;

