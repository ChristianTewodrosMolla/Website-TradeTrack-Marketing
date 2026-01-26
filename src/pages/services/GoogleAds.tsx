import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServiceMedia from "@/components/ServiceMedia";
import CalendlyModal from "@/components/CalendlyModal";
import { Search, Target, TrendingUp, Users, CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet-async";
import { useState } from "react";

const GoogleAds = () => {
  const [isCalendlyModalOpen, setIsCalendlyModalOpen] = useState(false);

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Google Ads for Freight Brokers | Tradetrack Logistics</title>
        <meta name="description" content="Generate high-intent shipper leads with proven Google Ads campaigns delivering consistent ROI with CPLs typically in the $50-$100 range." />
        <link rel="canonical" href="https://tradetrackmarketing.com/services/google-ads" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Google Ads for Freight Brokers | Tradetrack Logistics" />
        <meta property="og:description" content="Generate high-intent shipper leads with proven Google Ads campaigns delivering consistent ROI with CPLs typically in the $50-$100 range." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://tradetrackmarketing.com/services/google-ads" />
        <meta property="og:image" content="https://tradetrackmarketing.com/og-default.jpg" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Google Ads for Freight Brokers | Tradetrack Logistics" />
        <meta name="twitter:description" content="Generate high-intent shipper leads with proven Google Ads campaigns delivering consistent ROI with CPLs typically in the $50-$100 range." />
        <meta name="twitter:image" content="https://tradetrackmarketing.com/og-default.jpg" />
        
        {/* JSON-LD Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Tradetrack Logistics",
            "url": "https://tradetrackmarketing.com",
            "logo": "https://tradetrackmarketing.com/logo.png",
            "sameAs": [
              "https://twitter.com/TradeTrackHQ",
              "https://www.linkedin.com/company/tradetrack-marketing",
              "https://www.instagram.com/tradetrackmarketing"
            ]
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Google Ads for Freight Brokers",
            "description": "Capture high-intent shippers actively searching for freight services in your lanes. Our proven Google Ads campaigns deliver consistent ROI with CPLs typically in the $50-$100 range.",
            "provider": {
              "@type": "Organization",
              "name": "Tradetrack Logistics"
            },
            "areaServed": "US",
            "serviceType": "Google Ads"
          })}
        </script>
      </Helmet>
      <Header />
      <main className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
                Google Ads for Freight Brokers
              </h1>
            </div>

            <ServiceMedia
              imageSrc="/images/services/google-ads-dashboard.jpg"
              alt="Analytics dashboard showing lead KPIs for ad campaigns"
              caption="Sample performance dashboard used to monitor search campaigns."
              side="left"
            >
              <p className="text-lg text-muted-foreground">
                Capture high-intent shippers actively searching for freight services in your lanes. Our proven Google Ads campaigns deliver consistent ROI with CPLs typically in the $50-$100 range.
              </p>
            </ServiceMedia>

            <div className="prose prose-lg max-w-none">
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-6">Who it's for</h2>
                <p className="text-muted-foreground mb-4">
                  Freight brokers, carriers, and 3PLs looking to generate consistent shipper leads through search advertising. Ideal for businesses that:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Operate in specific lanes or regions with consistent freight demand</li>
                  <li>Have capacity to handle new shipper relationships</li>
                  <li>Want predictable lead generation month after month</li>
                  <li>Are ready to invest in long-term marketing growth</li>
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
                      <h3 className="text-xl font-semibold">1. Keyword Research</h3>
                    </div>
                    <p className="text-muted-foreground">Identify high-intent search terms your ideal shippers use when looking for freight services.</p>
                  </div>
                  
                  <div className="bg-card p-6 rounded-lg border border-border">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="bg-primary/10 p-2 rounded-lg">
                        <TrendingUp className="w-5 h-5 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold">2. Campaign Setup</h3>
                    </div>
                    <p className="text-muted-foreground">Create targeted search campaigns with freight-specific ad copy and landing pages.</p>
                  </div>
                  
                  <div className="bg-card p-6 rounded-lg border border-border">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="bg-primary/10 p-2 rounded-lg">
                        <Users className="w-5 h-5 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold">3. Lead Capture</h3>
                    </div>
                    <p className="text-muted-foreground">Convert searchers into qualified leads with optimized forms and follow-up sequences.</p>
                  </div>
                  
                  <div className="bg-card p-6 rounded-lg border border-border">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="bg-primary/10 p-2 rounded-lg">
                        <CheckCircle className="w-5 h-5 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold">4. Optimization</h3>
                    </div>
                    <p className="text-muted-foreground">Continuously improve performance based on data and freight industry insights.</p>
                  </div>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-6">What you can expect</h2>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>CPLs typically $50-$100, with potential to reach $25-$40 with optimization</li>
                  <li>Predictable shipper leads month after month</li>
                  <li>High-intent prospects actively seeking freight services</li>
                  <li>Even one new shipper can generate tens of thousands in revenue</li>
                  <li>Long-term campaigns that improve performance over time</li>
                </ul>
              </section>

              <section id="case-study" className="mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-6">Case Study</h2>
                <div className="bg-card p-6 rounded-lg border border-border">
                  <p className="text-muted-foreground mb-4">
                    A container drayage broker generated ~60 B2B leads/month at $26 CPL on a $1,500 budget. Another regional broker improved leads by +182% and cut CPL by 39% in 3 months.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Source: <a href="https://www.denim.com/blog/8-ways-to-market-your-freight-brokerage" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-accent/80 transition-colors">Denim</a>
                  </p>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-6">Frequently Asked Questions</h2>
                <div className="space-y-6">
                  <div className="bg-card p-6 rounded-lg border border-border">
                    <h3 className="text-lg font-semibold mb-2">How long before I see results?</h3>
                    <p className="text-muted-foreground">Most campaigns start generating leads within 2-4 weeks, with optimization improving performance over 3-6 months.</p>
                  </div>
                  
                  <div className="bg-card p-6 rounded-lg border border-border">
                    <h3 className="text-lg font-semibold mb-2">What's the minimum budget?</h3>
                    <p className="text-muted-foreground">We recommend starting with $2,000-$5,000/month in ad spend to generate meaningful data and results.</p>
                  </div>
                  
                  <div className="bg-card p-6 rounded-lg border border-border">
                    <h3 className="text-lg font-semibold mb-2">Do you handle the ad management?</h3>
                    <p className="text-muted-foreground">Yes, we handle all campaign setup, optimization, and management. You focus on converting leads into customers.</p>
                  </div>
                  
                  <div className="bg-card p-6 rounded-lg border border-border">
                    <h3 className="text-lg font-semibold mb-2">What makes your approach different?</h3>
                    <p className="text-muted-foreground">We specialize exclusively in freight marketing, with deep understanding of shipper behavior and industry-specific optimization strategies.</p>
                  </div>
                </div>
              </section>

              <section className="mb-12 text-center">
                <h2 className="text-3xl font-bold text-foreground mb-6">Ready to Generate Consistent Shipper Leads?</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Book a free strategy session to discuss your Google Ads campaign and see how we can help you scale.
                </p>
                <Button 
                  size="lg"
                  onClick={() => setIsCalendlyModalOpen(true)}
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
                    href="/services/websites-funnels" 
                    className="text-accent hover:text-accent/80 transition-colors font-medium"
                  >
                    Websites & Funnels →
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
      
      {/* Calendly Modal */}
      <CalendlyModal 
        isOpen={isCalendlyModalOpen} 
        onClose={() => setIsCalendlyModalOpen(false)} 
      />
    </div>
  );
};

export default GoogleAds;
