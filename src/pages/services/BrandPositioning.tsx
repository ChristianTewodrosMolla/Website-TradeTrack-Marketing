import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServiceMedia from "@/components/ServiceMedia";
import { Award, Target, TrendingUp, CheckCircle, ArrowRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet-async";

const BrandPositioning = () => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Brand Positioning for Brokers & 3PLs | TradeTrack</title>
        <meta name="description" content="Differentiate with industry-specific messaging and credibility assets to win larger accounts." />
        <link rel="canonical" href="https://tradetrackmarketing.com/services/brand-positioning" />
        <meta property="og:title" content="Brand Positioning for Brokers & 3PLs | TradeTrack" />
        <meta property="og:description" content="Differentiate with industry-specific messaging and credibility assets to win larger accounts." />
        <meta property="og:url" content="https://tradetrackmarketing.com/services/brand-positioning" />
        <meta name="twitter:title" content="Brand Positioning for Brokers & 3PLs | TradeTrack" />
        <meta name="twitter:description" content="Differentiate with industry-specific messaging and credibility assets to win larger accounts." />
      </Helmet>
      <Header />
      <main className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
                Brand Positioning for Brokers & 3PLs
              </h1>
            </div>

            <ServiceMedia
              imageSrc="/images/services/brand-positioning-moodboard.jpg"
              alt="Brand moodboard with typography palette and design guidelines"
              caption="Positioning assets that differentiate brokers and 3PLs."
              side="right"
            >
              <p className="text-lg text-muted-foreground">
                Differentiate with industry-specific messaging and credibility assets to win larger accounts. Stand out with compliance badges, testimonials, reviews, and freight-focused brand positioning.
              </p>
            </ServiceMedia>

            <div className="prose prose-lg max-w-none">
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-6">Who it's for</h2>
                <p className="text-muted-foreground mb-4">
                  Freight brokers, carriers, and 3PLs competing for larger contracts and enterprise shippers. Ideal for businesses that:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Want to win larger enterprise contracts and shipper accounts</li>
                  <li>Need to differentiate from competitors in crowded markets</li>
                  <li>Want to build credibility and trust with potential shippers</li>
                  <li>Are looking to position themselves as industry leaders</li>
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
                      <h3 className="text-xl font-semibold">1. Brand Audit</h3>
                    </div>
                    <p className="text-muted-foreground">Analyze your current brand positioning, messaging, and competitive landscape in the freight industry.</p>
                  </div>
                  
                  <div className="bg-card p-6 rounded-lg border border-border">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="bg-primary/10 p-2 rounded-lg">
                        <Award className="w-5 h-5 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold">2. Credibility Assets</h3>
                    </div>
                    <p className="text-muted-foreground">Develop compliance badges, testimonials, case studies, and industry certifications that build trust.</p>
                  </div>
                  
                  <div className="bg-card p-6 rounded-lg border border-border">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="bg-primary/10 p-2 rounded-lg">
                        <TrendingUp className="w-5 h-5 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold">3. Messaging Strategy</h3>
                    </div>
                    <p className="text-muted-foreground">Create industry-specific messaging that differentiates your services and resonates with target shippers.</p>
                  </div>
                  
                  <div className="bg-card p-6 rounded-lg border border-border">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="bg-primary/10 p-2 rounded-lg">
                        <CheckCircle className="w-5 h-5 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold">4. Implementation</h3>
                    </div>
                    <p className="text-muted-foreground">Apply new positioning across all marketing materials, websites, and sales presentations.</p>
                  </div>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-6">What you can expect</h2>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Differentiate from competitors with unique positioning</li>
                  <li>Win credibility with larger contracts and enterprise shippers</li>
                  <li>Build trust through compliance badges and testimonials</li>
                  <li>Establish industry leadership and expertise</li>
                  <li>Increase average contract value and shipper retention</li>
                </ul>
              </section>

              <section id="case-study" className="mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-6">Case Study</h2>
                <div className="bg-card p-6 rounded-lg border border-border">
                  <p className="text-muted-foreground mb-4">
                    Carriers and small brokers who invested in branding and consistent online presence reported more direct shipper inquiries, reducing reliance on load boards and winning larger contracts.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Source: <a href="https://www.flockfreight.com/blog" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-accent/80 transition-colors">Flock Freight</a>
                  </p>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-6">Frequently Asked Questions</h2>
                <div className="space-y-6">
                  <div className="bg-card p-6 rounded-lg border border-border">
                    <h3 className="text-lg font-semibold mb-2">How long does brand positioning take?</h3>
                    <p className="text-muted-foreground">Initial brand positioning strategy typically takes 4-6 weeks, with implementation across all materials taking an additional 2-4 weeks.</p>
                  </div>
                  
                  <div className="bg-card p-6 rounded-lg border border-border">
                    <h3 className="text-lg font-semibold mb-2">What credentials and badges are most important for freight?</h3>
                    <p className="text-muted-foreground">DOT compliance, insurance certifications, industry associations, customer testimonials, and safety ratings are most valuable for building shipper trust.</p>
                  </div>
                  
                  <div className="bg-card p-6 rounded-lg border border-border">
                    <h3 className="text-lg font-semibold mb-2">How do you differentiate between similar freight companies?</h3>
                    <p className="text-muted-foreground">We focus on unique value propositions, specialized services, geographic expertise, and customer success stories that set you apart from competitors.</p>
                  </div>
                  
                  <div className="bg-card p-6 rounded-lg border border-border">
                    <h3 className="text-lg font-semibold mb-2">Can you help with ongoing brand management?</h3>
                    <p className="text-muted-foreground">Yes, we provide ongoing brand management, including monitoring competitive positioning and updating messaging as your business evolves.</p>
                  </div>
                </div>
              </section>

              <section className="mb-12 text-center">
                <h2 className="text-3xl font-bold text-foreground mb-6">Ready to Stand Out from Competitors?</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Book a free strategy session to discuss your brand positioning challenges and see how we can help you win larger contracts.
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
                    href="/services/websites-funnels" 
                    className="text-accent hover:text-accent/80 transition-colors font-medium"
                  >
                    Websites & Funnels →
                  </a>
                  <a 
                    href="/services/linkedin" 
                    className="text-accent hover:text-accent/80 transition-colors font-medium"
                  >
                    LinkedIn Campaigns →
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

export default BrandPositioning;
