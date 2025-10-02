import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServiceMedia from "@/components/ServiceMedia";
import { Users, Target, TrendingUp, CheckCircle, ArrowRight, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet-async";

const SocialAds = () => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Facebook & Instagram Ads for Driver Recruiting | TradeTrack Marketing</title>
        <meta name="description" content="Recruit CDL drivers and owner-operators at scale with targeted social media campaigns and proven Facebook and Instagram ad funnels." />
        <link rel="canonical" href="https://tradetrackmarketing.com/services/social-ads" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Facebook & Instagram Ads for Driver Recruiting | TradeTrack Marketing" />
        <meta property="og:description" content="Recruit CDL drivers and owner-operators at scale with targeted social media campaigns and proven Facebook and Instagram ad funnels." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://tradetrackmarketing.com/services/social-ads" />
        <meta property="og:image" content="https://tradetrackmarketing.com/og-default.jpg" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Facebook & Instagram Ads for Driver Recruiting | TradeTrack Marketing" />
        <meta name="twitter:description" content="Recruit CDL drivers and owner-operators at scale with targeted social media campaigns and proven Facebook and Instagram ad funnels." />
        <meta name="twitter:image" content="https://tradetrackmarketing.com/og-default.jpg" />
        
        {/* JSON-LD Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "TradeTrack Marketing",
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
            "name": "Facebook & Instagram Ads for Driver Recruiting",
            "description": "Recruit CDL drivers and owner-operators at scale with targeted social media campaigns. Lower CPLs and build a steady driver pipeline with proven Facebook and Instagram ad funnels.",
            "provider": {
              "@type": "Organization",
              "name": "TradeTrack Marketing"
            },
            "areaServed": "US",
            "serviceType": "Social Media Marketing"
          })}
        </script>
      </Helmet>
      <Header />
      <main className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
                Facebook & Instagram Ads for Driver Recruiting
              </h1>
            </div>

            <ServiceMedia
              imageSrc="/images/services/social-ads-manager.jpg"
              alt="Social media ad manager interface showing campaign performance"
              caption="Creative and audience testing for driver recruiting."
              side="right"
            >
              <p className="text-lg text-muted-foreground">
                Recruit CDL drivers and owner-operators at scale with targeted social media campaigns. Lower CPLs and build a steady driver pipeline with proven Facebook and Instagram ad funnels.
              </p>
            </ServiceMedia>

            <div className="prose prose-lg max-w-none">
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-6">Who it's for</h2>
                <p className="text-muted-foreground mb-4">
                  Carriers, fleets, and freight companies struggling with driver turnover and recruiting costs. Ideal for businesses that:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Need to recruit CDL drivers consistently</li>
                  <li>Want to reduce recruiting costs and improve driver quality</li>
                  <li>Are competing for drivers in competitive markets</li>
                  <li>Want to build a pipeline of qualified driver applicants</li>
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
                      <h3 className="text-xl font-semibold">1. Audience Targeting</h3>
                    </div>
                    <p className="text-muted-foreground">Target CDL drivers, owner-operators, and transportation professionals with precise demographics and interests.</p>
                  </div>
                  
                  <div className="bg-card p-6 rounded-lg border border-border">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="bg-primary/10 p-2 rounded-lg">
                        <Users className="w-5 h-5 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold">2. Creative Development</h3>
                    </div>
                    <p className="text-muted-foreground">Create compelling ads highlighting pay, benefits, home time, and company culture that resonates with drivers.</p>
                  </div>
                  
                  <div className="bg-card p-6 rounded-lg border border-border">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="bg-primary/10 p-2 rounded-lg">
                        <TrendingUp className="w-5 h-5 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold">3. Funnel Optimization</h3>
                    </div>
                    <p className="text-muted-foreground">Build multi-step funnels that nurture prospects from interest to application with automated follow-up.</p>
                  </div>
                  
                  <div className="bg-card p-6 rounded-lg border border-border">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="bg-primary/10 p-2 rounded-lg">
                        <CheckCircle className="w-5 h-5 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold">4. Performance Tracking</h3>
                    </div>
                    <p className="text-muted-foreground">Monitor CPL, application rates, and driver quality to continuously improve campaign performance.</p>
                  </div>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-6">What you can expect</h2>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Driver CPLs typically $20-$50, significantly lower than traditional recruiting</li>
                  <li>Steady flow of qualified CDL driver applicants</li>
                  <li>Long-term campaigns that reduce recruiting costs over time</li>
                  <li>Better driver retention through improved targeting and messaging</li>
                  <li>Scalable system that grows with your fleet needs</li>
                </ul>
              </section>

              <section id="case-study" className="mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-6">Case Study</h2>
                <div className="bg-card p-6 rounded-lg border border-border">
                  <p className="text-muted-foreground mb-4">
                    Recruiting campaigns on Facebook and Instagram typically achieve $20–$50 CPL, with optimized funnels bringing this down to $15–$30 per driver applicant.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Source: <a href="https://www.oyova.com/blog/digital-marketing-for-logistics-companies/" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-accent/80 transition-colors">Oyova</a>
                  </p>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-6">Frequently Asked Questions</h2>
                <div className="space-y-6">
                  <div className="bg-card p-6 rounded-lg border border-border">
                    <h3 className="text-lg font-semibold mb-2">How quickly can I start seeing driver applications?</h3>
                    <p className="text-muted-foreground">Most campaigns start generating applications within 1-2 weeks, with optimization improving quality and volume over time.</p>
                  </div>
                  
                  <div className="bg-card p-6 rounded-lg border border-border">
                    <h3 className="text-lg font-semibold mb-2">What's the minimum budget for driver recruiting?</h3>
                    <p className="text-muted-foreground">We recommend starting with $1,500-$3,000/month to generate meaningful driver application volume and data.</p>
                  </div>
                  
                  <div className="bg-card p-6 rounded-lg border border-border">
                    <h3 className="text-lg font-semibold mb-2">Do you create the ad creative and copy?</h3>
                    <p className="text-muted-foreground">Yes, we handle all creative development, including video ads, images, and copy that resonates with CDL drivers.</p>
                  </div>
                  
                  <div className="bg-card p-6 rounded-lg border border-border">
                    <h3 className="text-lg font-semibold mb-2">How do you ensure driver quality?</h3>
                    <p className="text-muted-foreground">We use targeted messaging, qualification questions, and multi-step funnels to attract serious, qualified drivers rather than just applications.</p>
                  </div>
                </div>
              </section>

              <section className="mb-12 text-center">
                <h2 className="text-3xl font-bold text-foreground mb-6">Ready to Build Your Driver Pipeline?</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Book a free strategy session to discuss your driver recruiting challenges and see how social media ads can help.
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
                    href="/services/crm-automation" 
                    className="text-accent hover:text-accent/80 transition-colors font-medium"
                  >
                    CRM Automation →
                  </a>
                  <a 
                    href="/services/brand-positioning" 
                    className="text-accent hover:text-accent/80 transition-colors font-medium"
                  >
                    Brand Positioning →
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

export default SocialAds;
