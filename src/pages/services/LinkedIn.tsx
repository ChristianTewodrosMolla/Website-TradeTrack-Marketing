import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServiceMedia from "@/components/ServiceMedia";
import { Linkedin, Target, TrendingUp, CheckCircle, ArrowRight, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet-async";

const LinkedIn = () => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>LinkedIn Campaigns for Shipper Outreach | TradeTrack</title>
        <meta name="description" content="Reach logistics decision-makers and build enterprise relationships with compliant LinkedIn campaigns." />
        <link rel="canonical" href="https://tradetrackmarketing.com/services/linkedin" />
        <meta property="og:title" content="LinkedIn Campaigns for Shipper Outreach | TradeTrack" />
        <meta property="og:description" content="Reach logistics decision-makers and build enterprise relationships with compliant LinkedIn campaigns." />
        <meta property="og:url" content="https://tradetrackmarketing.com/services/linkedin" />
        <meta name="twitter:title" content="LinkedIn Campaigns for Shipper Outreach | TradeTrack" />
        <meta name="twitter:description" content="Reach logistics decision-makers and build enterprise relationships with compliant LinkedIn campaigns." />
      </Helmet>
      <Header />
      <main className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
                LinkedIn Campaigns for B2B Shipper Outreach
              </h1>
            </div>

            <ServiceMedia
              imageSrc="/images/services/linkedin-b2b-outreach.jpg"
              alt="Professional B2B networking interface on laptop screen"
              caption="Outbound messaging and sponsored updates for shipper outreach."
              side="left"
            >
              <p className="text-lg text-muted-foreground">
                Reach logistics decision-makers and build enterprise relationships with compliant LinkedIn campaigns. Target supply chain directors, logistics managers, and procurement professionals.
              </p>
            </ServiceMedia>

            <div className="prose prose-lg max-w-none">
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-6">Who it's for</h2>
                <p className="text-muted-foreground mb-4">
                  Freight brokers, carriers, and 3PLs targeting enterprise shippers and B2B logistics decision-makers. Ideal for businesses that:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Want to reach larger enterprise shippers and manufacturers</li>
                  <li>Are targeting specific industries or company sizes</li>
                  <li>Need to build relationships with logistics decision-makers</li>
                  <li>Want to establish credibility in competitive B2B markets</li>
                </ul>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-6">How it works</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-card p-6 rounded-lg border border-border">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="bg-primary/10 p-2 rounded-lg">
                        <Target className="w-5 h-5 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold">1. Decision-Maker Targeting</h3>
                    </div>
                    <p className="text-muted-foreground">Target supply chain directors, logistics managers, procurement professionals, and other key decision-makers.</p>
                  </div>
                  
                  <div className="bg-card p-6 rounded-lg border border-border">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="bg-primary/10 p-2 rounded-lg">
                        <Linkedin className="w-5 h-5 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold">2. Professional Outreach</h3>
                    </div>
                    <p className="text-muted-foreground">Create compliant LinkedIn campaigns with professional messaging that builds trust and credibility.</p>
                  </div>
                  
                  <div className="bg-card p-6 rounded-lg border border-border">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="bg-primary/10 p-2 rounded-lg">
                        <TrendingUp className="w-5 h-5 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold">3. Relationship Building</h3>
                    </div>
                    <p className="text-muted-foreground">Nurture prospects through multi-touch campaigns that educate and build relationships over time.</p>
                  </div>
                  
                  <div className="bg-card p-6 rounded-lg border border-border">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="bg-primary/10 p-2 rounded-lg">
                        <CheckCircle className="w-5 h-5 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold">4. Lead Qualification</h3>
                    </div>
                    <p className="text-muted-foreground">Qualify and convert LinkedIn connections into meaningful business conversations and opportunities.</p>
                  </div>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-6">What you can expect</h2>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Direct access to enterprise buyers and logistics decision-makers</li>
                  <li>Build trust and long-term shipper relationships</li>
                  <li>Higher-value contracts and recurring business opportunities</li>
                  <li>Professional brand presence in competitive B2B markets</li>
                  <li>Compliant outreach that follows LinkedIn's advertising policies</li>
                </ul>
              </section>

              <section id="case-study" className="mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-6">Case Study</h2>
                <div className="bg-card p-6 rounded-lg border border-border">
                  <p className="text-muted-foreground mb-4">
                    Freight brokers using LinkedIn newsletters and thought leadership content have successfully landed enterprise logistics clients. Even one new account can justify the ad spend due to contract value.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Source: <a href="https://www.logisticsmarketing.com/blog/empathy-key-marketing-logistics-service" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-accent/80 transition-colors">Logistics Marketing Advisors</a>
                  </p>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-6">Frequently Asked Questions</h2>
                <div className="space-y-6">
                  <div className="bg-card p-6 rounded-lg border border-border">
                    <h3 className="text-lg font-semibold mb-2">How long does it take to see results from LinkedIn campaigns?</h3>
                    <p className="text-muted-foreground">B2B relationships take time to develop. Most campaigns start generating connections within 2-4 weeks, with meaningful conversations developing over 2-3 months.</p>
                  </div>
                  
                  <div className="bg-card p-6 rounded-lg border border-border">
                    <h3 className="text-lg font-semibold mb-2">What's the minimum budget for LinkedIn advertising?</h3>
                    <p className="text-muted-foreground">We recommend starting with $3,000-$5,000/month to generate meaningful reach and engagement with enterprise decision-makers.</p>
                  </div>
                  
                  <div className="bg-card p-6 rounded-lg border border-border">
                    <h3 className="text-lg font-semibold mb-2">How do you ensure compliance with LinkedIn's policies?</h3>
                    <p className="text-muted-foreground">We follow LinkedIn's advertising guidelines strictly, using compliant messaging, proper targeting, and professional content that builds relationships rather than spamming.</p>
                  </div>
                  
                  <div className="bg-card p-6 rounded-lg border border-border">
                    <h3 className="text-lg font-semibold mb-2">What industries work best for LinkedIn freight campaigns?</h3>
                    <p className="text-muted-foreground">Manufacturing, retail, automotive, food & beverage, and other industries with complex supply chains and regular freight needs.</p>
                  </div>
                </div>
              </section>

              <section className="mb-12 text-center">
                <h2 className="text-3xl font-bold text-foreground mb-6">Ready to Reach Enterprise Shippers?</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Book a free strategy session to discuss your B2B outreach goals and see how LinkedIn campaigns can help you reach enterprise decision-makers.
                </p>
                <Button 
                  size="lg"
                  onClick={() => {
                    const element = document.getElementById('contact');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="bg-accent hover:bg-accent/90 text-accent-foreground"
                >
                  Book a Freight Marketing Strategy Session
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-6">Related services</h2>
                <div className="flex flex-wrap gap-4">
                  <a 
                    href="/services/brand-positioning" 
                    className="text-accent hover:text-accent/80 transition-colors font-medium"
                  >
                    Brand Positioning →
                  </a>
                  <a 
                    href="/services/websites-funnels" 
                    className="text-accent hover:text-accent/80 transition-colors font-medium"
                  >
                    Websites & Funnels →
                  </a>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default LinkedIn;
