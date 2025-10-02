import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Helmet } from "react-helmet-async";

const CASES = [
  {
    slug: "google-ads-drayage-60-leads",
    serviceTag: "Google Ads",
    title: "Drayage Broker: ~60 Qualified Shipper Leads/Month",
    summary: "Search campaigns focused on port & drayage terms produced steady, qualified B2B shipper leads on a modest budget.",
    metrics: ["~$25–$30 CPL", "15–16% LP conv. rate", "Consistent monthly volume"],
    link: "/services/google-ads#case-study"
  },
  {
    slug: "google-ads-optimization-cpl-drop",
    serviceTag: "Google Ads",
    title: "Regional Broker: +180% Leads, -39% CPL in 90 Days",
    summary: "Account restructure, aggressive negatives, and message/LP alignment multiplied conversions while cutting cost per lead.",
    metrics: ["+180% leads", "−39% CPL", "3-month turnaround"],
    link: "/services/google-ads#case-study"
  },
  {
    slug: "social-driver-recruiting",
    serviceTag: "Facebook & Instagram",
    title: "Driver Recruiting: Predictable Applicants at Efficient CPL",
    summary: "Targeted social ads by lane and driver profile produced reliable applicant flow with scalable monthly spend.",
    metrics: ["$20–$50 CPL", "Funnel-optimized Apply flow", "Lower cost per hire"],
    link: "/services/social-ads#case-study"
  },
  {
    slug: "linkedin-enterprise-trust",
    serviceTag: "LinkedIn Campaigns",
    title: "Thought Leadership → Enterprise Conversations",
    summary: "Executive content + newsletter built credibility with supply chain managers and generated inbound enterprise conversations.",
    metrics: ["Outbound-to-inbound lift", "High-value pipeline", "Relationship-first motion"],
    link: "/services/linkedin#case-study"
  },
  {
    slug: "crm-automation-followups",
    serviceTag: "CRM Automation",
    title: "Never Miss a Lead: Automated SMS & Email Sequences",
    summary: "Instant routing and sequenced follow-ups increased conversions and shortened time-to-first-call across teams.",
    metrics: ["5–10% LP→Lead", "10–30% Lead→Client", "Zero 'forgotten' leads"],
    link: "/services/crm-automation#case-study"
  },
  {
    slug: "website-funnels-conversion-lift",
    serviceTag: "Websites & Funnels",
    title: "Conversion-Focused Redesign Boosted Quote Requests",
    summary: "Modernized, mobile-first landing pages with compliance badges, testimonials, and clear CTAs improved conversion rates significantly.",
    metrics: ["Faster load", "Trust badges & social proof", "Marked CVR lift"],
    link: "/services/websites-funnels#case-study"
  },
  {
    slug: "brand-positioning-enterprise",
    serviceTag: "Brand Positioning",
    title: "Brand Credibility → Larger Contracts",
    summary: "Clear positioning, professional visuals, and compliance proof points increased win rates with larger shippers.",
    metrics: ["Shorter sales cycles", "Higher average contract", "Greater reply rates"],
    link: "/services/brand-positioning#case-study"
  },
  {
    slug: "multichannel-pipeline",
    serviceTag: "Multi-Channel",
    title: "Multi-Channel Funnel Generated High-Value Pipeline",
    summary: "Search + content + webinars built a pipeline of qualified opportunities while nurturing higher-funnel prospects.",
    metrics: ["Evergreen lead assets", "Qualified inbound", "Sales-ready follow-ups"],
    link: "/services/google-ads#case-study"
  }
];

const CaseStudies = () => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Case Studies | TradeTrack Marketing</title>
        <meta name="description" content="Real results from high-ROI systems for freight brokers, carriers, and 3PLs. See how we grow shipper leads, driver recruiting, and enterprise trust." />
        <link rel="canonical" href="https://tradetrackmarketing.com/case-studies" />
        <meta property="og:title" content="Case Studies | TradeTrack Marketing" />
        <meta property="og:description" content="Real results from high-ROI systems for freight brokers, carriers, and 3PLs. See how we grow shipper leads, driver recruiting, and enterprise trust." />
        <meta property="og:url" content="https://tradetrackmarketing.com/case-studies" />
        <meta name="twitter:title" content="Case Studies | TradeTrack Marketing" />
        <meta name="twitter:description" content="Real results from high-ROI systems for freight brokers, carriers, and 3PLs. See how we grow shipper leads, driver recruiting, and enterprise trust." />
      </Helmet>
      
      <Header />
      <main className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Hero Section */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-accent/10 text-accent mb-4">
                Results & Proof
              </div>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Case Studies
            </h1>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Real outcomes from systems purpose-built for freight brokers, carriers, and 3PLs.
              </p>
            </div>

            {/* Case Studies Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              {CASES.map((caseStudy) => (
                <Card 
                  key={caseStudy.slug}
                  className="hover:shadow-md transition-shadow duration-300 border-border h-full flex flex-col"
                >
                  <CardHeader className="flex-grow">
                    <div className="flex items-center justify-between mb-3">
                      <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary">
                        {caseStudy.serviceTag}
                      </span>
                    </div>
                    <CardTitle className="text-lg mb-3 line-clamp-2">
                      {caseStudy.title}
                    </CardTitle>
                    <CardDescription className="text-sm text-muted-foreground mb-4">
                      {caseStudy.summary}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="mt-auto">
                    <div className="space-y-2 mb-4">
                      {caseStudy.metrics.map((metric, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
                          <span className="text-xs text-muted-foreground">{metric}</span>
                        </div>
                      ))}
                    </div>
                    <a 
                      href={caseStudy.link}
                      className="inline-flex items-center text-sm font-medium text-accent hover:text-accent/80 transition-colors"
                    >
                      View details
                      <ArrowRight className="ml-1 w-3 h-3" />
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* CTA Section */}
            <div className="text-center bg-card p-8 rounded-xl border border-border">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Want results like these?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Book a free strategy session. We'll show you the exact playbook for your lanes, budget, and goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/#schedule"
                  className="inline-flex items-center justify-center px-6 py-3 text-lg font-medium bg-accent hover:bg-accent/90 text-accent-foreground rounded-lg transition-colors"
                >
                  Get Free Strategy
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
                <a 
                  href="/services"
                  className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-primary hover:text-accent transition-colors"
                >
                  See Services
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CaseStudies;