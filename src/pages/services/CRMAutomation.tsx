import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServiceMedia from "@/components/ServiceMedia";
import { Zap, Target, TrendingUp, CheckCircle, ArrowRight, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet-async";

const CRMAutomation = () => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>CRM Automation for Brokers (GoHighLevel) | TradeTrack</title>
        <meta name="description" content="Automated follow-ups, lead nurturing, and pipeline visibility tailored to freight." />
        <link rel="canonical" href="https://tradetrackmarketing.com/services/crm-automation" />
        <meta property="og:title" content="CRM Automation for Brokers (GoHighLevel) | TradeTrack" />
        <meta property="og:description" content="Automated follow-ups, lead nurturing, and pipeline visibility tailored to freight." />
        <meta property="og:url" content="https://tradetrackmarketing.com/services/crm-automation" />
        <meta name="twitter:title" content="CRM Automation for Brokers (GoHighLevel) | TradeTrack" />
        <meta name="twitter:description" content="Automated follow-ups, lead nurturing, and pipeline visibility tailored to freight." />
      </Helmet>
      <Header />
      <main className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
                CRM Automation for Brokers (GoHighLevel)
              </h1>
            </div>

            <ServiceMedia
              imageSrc="/images/services/crm-automation-pipeline.jpg"
              alt="CRM pipeline dashboard showing automated workflow stages"
              caption="Automated pipelines and follow-ups reduce manual work."
              side="right"
            >
              <p className="text-lg text-muted-foreground">
                Replace manual calls and emails with automated SMS/email follow-ups, load updates, and driver funnels. Close deals faster with less manual work using GoHighLevel automation.
              </p>
            </ServiceMedia>

            <div className="prose prose-lg max-w-none">
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-6">Who it's for</h2>
                <p className="text-muted-foreground mb-4">
                  Freight brokers, carriers, and 3PLs looking to automate their sales and operations processes. Ideal for businesses that:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Spend too much time on manual follow-ups and administrative tasks</li>
                  <li>Want to nurture leads 24/7 without constant manual intervention</li>
                  <li>Need better pipeline visibility and lead tracking</li>
                  <li>Want to scale operations without proportionally increasing staff</li>
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
                      <h3 className="text-xl font-semibold">1. Lead Capture</h3>
                    </div>
                    <p className="text-muted-foreground">Automatically capture leads from your website, ads, and other sources into your GoHighLevel CRM.</p>
                  </div>
                  
                  <div className="bg-card p-6 rounded-lg border border-border">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="bg-primary/10 p-2 rounded-lg">
                        <Zap className="w-5 h-5 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold">2. Automated Sequences</h3>
                    </div>
                    <p className="text-muted-foreground">Set up automated email and SMS sequences that nurture leads based on their behavior and stage in the sales process.</p>
                  </div>
                  
                  <div className="bg-card p-6 rounded-lg border border-border">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="bg-primary/10 p-2 rounded-lg">
                        <TrendingUp className="w-5 h-5 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold">3. Pipeline Management</h3>
                    </div>
                    <p className="text-muted-foreground">Track leads through your sales pipeline with automated reminders, follow-ups, and task assignments.</p>
                  </div>
                  
                  <div className="bg-card p-6 rounded-lg border border-border">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="bg-primary/10 p-2 rounded-lg">
                        <CheckCircle className="w-5 h-5 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold">4. Performance Tracking</h3>
                    </div>
                    <p className="text-muted-foreground">Monitor conversion rates, response times, and revenue attribution to optimize your automation workflows.</p>
                  </div>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-6">What you can expect</h2>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>24/7 lead nurturing and updates without manual intervention</li>
                  <li>Close deals faster with automated follow-up sequences</li>
                  <li>Better lead tracking and pipeline visibility</li>
                  <li>Reduced administrative workload and manual tasks</li>
                  <li>Improved response times and customer communication</li>
                </ul>
              </section>

              <section id="case-study" className="mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-6">Case Study</h2>
                <div className="bg-card p-6 rounded-lg border border-border">
                  <p className="text-muted-foreground mb-4">
                    Automated CRM systems with instant SMS/email follow-ups have doubled conversion rates compared to manual outreach. In freight, automation prevents lost leads and accelerates shipper response.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Source: <a href="https://www.freightwaves.com/news" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-accent/80 transition-colors">FreightWaves</a>
                  </p>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-6">Frequently Asked Questions</h2>
                <div className="space-y-6">
                  <div className="bg-card p-6 rounded-lg border border-border">
                    <h3 className="text-lg font-semibold mb-2">What is GoHighLevel and why do you use it?</h3>
                    <p className="text-muted-foreground">GoHighLevel is an all-in-one CRM and marketing automation platform that's perfect for freight businesses. It combines lead capture, email/SMS marketing, and CRM functionality in one system.</p>
                  </div>
                  
                  <div className="bg-card p-6 rounded-lg border border-border">
                    <h3 className="text-lg font-semibold mb-2">How long does it take to set up automation?</h3>
                    <p className="text-muted-foreground">Initial setup typically takes 2-4 weeks, including system configuration, sequence creation, and team training. Ongoing optimization continues based on performance data.</p>
                  </div>
                  
                  <div className="bg-card p-6 rounded-lg border border-border">
                    <h3 className="text-lg font-semibold mb-2">Do you provide training for my team?</h3>
                    <p className="text-muted-foreground">Yes, we provide comprehensive training for your team on using GoHighLevel, including best practices for freight industry automation and lead management.</p>
                  </div>
                  
                  <div className="bg-card p-6 rounded-lg border border-border">
                    <h3 className="text-lg font-semibold mb-2">Can automation replace my sales team?</h3>
                    <p className="text-muted-foreground">Automation enhances your sales team by handling routine tasks and nurturing, allowing your team to focus on high-value activities like closing deals and building relationships.</p>
                  </div>
                </div>
              </section>

              <section className="mb-12 text-center">
                <h2 className="text-3xl font-bold text-foreground mb-6">Ready to Automate Your Sales Process?</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Book a free strategy session to discuss your current processes and see how GoHighLevel automation can streamline your operations.
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
                    href="/services/google-ads" 
                    className="text-accent hover:text-accent/80 transition-colors font-medium"
                  >
                    Google Ads →
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

export default CRMAutomation;
