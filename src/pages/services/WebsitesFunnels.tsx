import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServiceMedia from "@/components/ServiceMedia";
import { Globe, Target, TrendingUp, CheckCircle, ArrowRight, Monitor } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet-async";

const WebsitesFunnels = () => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Websites & Funnels for Freight Brokers | TradeTrack</title>
        <meta name="description" content="Modern, trust-building websites and landing pages with testimonials and compliance badges." />
        <link rel="canonical" href="https://tradetrackmarketing.com/services/websites-funnels" />
        <meta property="og:title" content="Websites & Funnels for Freight Brokers | TradeTrack" />
        <meta property="og:description" content="Modern, trust-building websites and landing pages with testimonials and compliance badges." />
        <meta property="og:url" content="https://tradetrackmarketing.com/services/websites-funnels" />
        <meta name="twitter:title" content="Websites & Funnels for Freight Brokers | TradeTrack" />
        <meta name="twitter:description" content="Modern, trust-building websites and landing pages with testimonials and compliance badges." />
      </Helmet>
      <Header />
      <main className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
                Websites & Funnels That Build Shipper Trust
              </h1>
            </div>

            <ServiceMedia
              imageSrc="/images/services/websites-funnels-workstation.jpg"
              alt="Designer workstation with wireframes and landing page on monitor"
              caption="Conversion-focused landing pages and trust signals."
              side="left"
            >
              <p className="text-lg text-muted-foreground">
                Upgrade outdated DOT pages into professional, trust-rich websites and landing pages with VSLs, testimonials, and compliance badges. Build shipper trust and credibility with modern design.
              </p>
            </ServiceMedia>

            <div className="prose prose-lg max-w-none">
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-6">Who it's for</h2>
                <p className="text-muted-foreground mb-4">
                  Freight brokers, carriers, and 3PLs with outdated websites or no online presence. Ideal for businesses that:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Have basic DOT pages that don't build trust with shippers</li>
                  <li>Need professional websites that convert visitors into leads</li>
                  <li>Want to showcase testimonials, compliance badges, and credibility</li>
                  <li>Need landing pages for specific marketing campaigns</li>
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
                      <h3 className="text-xl font-semibold">1. Strategy & Design</h3>
                    </div>
                    <p className="text-muted-foreground">Create modern, mobile-responsive designs that build trust and showcase your freight expertise and compliance.</p>
                  </div>
                  
                  <div className="bg-card p-6 rounded-lg border border-border">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="bg-primary/10 p-2 rounded-lg">
                        <Globe className="w-5 h-5 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold">2. Website Development</h3>
                    </div>
                    <p className="text-muted-foreground">Build professional websites with testimonials, compliance badges, service pages, and lead capture forms.</p>
                  </div>
                  
                  <div className="bg-card p-6 rounded-lg border border-border">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="bg-primary/10 p-2 rounded-lg">
                        <TrendingUp className="w-5 h-5 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold">3. Landing Pages</h3>
                    </div>
                    <p className="text-muted-foreground">Create high-converting landing pages for specific campaigns, services, or target audiences.</p>
                  </div>
                  
                  <div className="bg-card p-6 rounded-lg border border-border">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="bg-primary/10 p-2 rounded-lg">
                        <CheckCircle className="w-5 h-5 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold">4. Optimization</h3>
                    </div>
                    <p className="text-muted-foreground">Optimize for conversions, mobile experience, and search engines to maximize lead generation.</p>
                  </div>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-6">What you can expect</h2>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Mobile-responsive modern design that works on all devices</li>
                  <li>Build shipper trust and credibility with professional presentation</li>
                  <li>Higher conversion rates from website visitors to leads</li>
                  <li>Showcase testimonials, compliance badges, and industry expertise</li>
                  <li>Landing pages optimized for specific marketing campaigns</li>
                </ul>
              </section>

              <section id="case-study" className="mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-6">Case Study</h2>
                <div className="bg-card p-6 rounded-lg border border-border">
                  <p className="text-muted-foreground mb-4">
                    Brokers who updated outdated sites with FMCSA compliance badges, testimonials, and clear CTAs saw a marked increase in conversions and higher shipper trust.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Source: <a href="https://www.greenworldwide.com/freight-talk-blog/" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-accent/80 transition-colors">Green Worldwide</a>
                  </p>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-6">Frequently Asked Questions</h2>
                <div className="space-y-6">
                  <div className="bg-card p-6 rounded-lg border border-border">
                    <h3 className="text-lg font-semibold mb-2">How long does it take to build a new website?</h3>
                    <p className="text-muted-foreground">Most freight broker websites take 4-6 weeks to complete, including design, development, content creation, and testing.</p>
                  </div>
                  
                  <div className="bg-card p-6 rounded-lg border border-border">
                    <h3 className="text-lg font-semibold mb-2">Do you provide content and copywriting?</h3>
                    <p className="text-muted-foreground">Yes, we create freight-specific content, service descriptions, and copy that resonates with shippers and builds trust.</p>
                  </div>
                  
                  <div className="bg-card p-6 rounded-lg border border-border">
                    <h3 className="text-lg font-semibold mb-2">Can you integrate with my existing systems?</h3>
                    <p className="text-muted-foreground">We can integrate with most CRM systems, lead capture tools, and marketing platforms you're already using.</p>
                  </div>
                  
                  <div className="bg-card p-6 rounded-lg border border-border">
                    <h3 className="text-lg font-semibold mb-2">Do you provide ongoing maintenance and updates?</h3>
                    <p className="text-muted-foreground">Yes, we offer ongoing maintenance, updates, and optimization to keep your website performing at its best.</p>
                  </div>
                </div>
              </section>

              <section className="mb-12 text-center">
                <h2 className="text-3xl font-bold text-foreground mb-6">Ready to Build Trust with Shippers?</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Book a free strategy session to discuss your website needs and see how we can help you build credibility with shippers.
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
                    href="/services/crm-automation" 
                    className="text-accent hover:text-accent/80 transition-colors font-medium"
                  >
                    CRM Automation →
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

export default WebsitesFunnels;
