import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";

const About = () => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>About TradeTrack Marketing | Built for the Freight Industry</title>
        <meta name="description" content="Who we serve and how our proven systems generate shippers, drivers, and scalable revenue." />
        <link rel="canonical" href="https://tradetrackmarketing.com/about" />
        
        {/* Open Graph */}
        <meta property="og:title" content="About TradeTrack Marketing | Built for the Freight Industry" />
        <meta property="og:description" content="Who we serve and how our proven systems generate shippers, drivers, and scalable revenue." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://tradetrackmarketing.com/about" />
        <meta property="og:image" content="https://tradetrackmarketing.com/og-default.jpg" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About TradeTrack Marketing | Built for the Freight Industry" />
        <meta name="twitter:description" content="Who we serve and how our proven systems generate shippers, drivers, and scalable revenue." />
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
      </Helmet>
      <Header />
      <main className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
                About TradeTrack Marketing
              </h1>
            </div>

            <div className="prose prose-lg max-w-none">
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-6">Our Story</h2>
                <p className="text-muted-foreground mb-4">
                  TradeTrack Marketing was built for the backbone of American logistics: the independent brokers, carriers, and small 3PLs that keep freight moving every single day. We saw a clear problem in the industry—most brokers were relying on referrals, cold calls, or load boards to survive, but had no modern marketing systems to help them scale.
                </p>
                <p className="text-muted-foreground">
                  Instead of competing with giant 3PLs that have endless resources, smaller brokers needed an edge. That edge wasn't more phone calls—it was smarter marketing. From that belief, TradeTrack Marketing was born.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-6">What We Do</h2>
                <p className="text-muted-foreground mb-6">
                  We specialize exclusively in freight marketing. Every strategy, every campaign, and every automation we build is designed with one goal: to help brokers and carriers grow without wasting time or money.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-card p-6 rounded-lg border border-border">
                    <h3 className="text-xl font-semibold text-foreground mb-3">Generate Shipper Leads</h3>
                    <p className="text-muted-foreground">through high-intent Google Ads campaigns that target real businesses looking to move freight.</p>
                  </div>
                  
                  <div className="bg-card p-6 rounded-lg border border-border">
                    <h3 className="text-xl font-semibold text-foreground mb-3">Recruit Drivers</h3>
                    <p className="text-muted-foreground">with social media funnels on Facebook and Instagram that cut recruiting costs and keep trucks on the road.</p>
                  </div>
                  
                  <div className="bg-card p-6 rounded-lg border border-border">
                    <h3 className="text-xl font-semibold text-foreground mb-3">Automate Processes</h3>
                    <p className="text-muted-foreground">with CRM tools that replace manual follow-ups, save hours each week, and keep prospects from slipping through the cracks.</p>
                  </div>
                  
                  <div className="bg-card p-6 rounded-lg border border-border">
                    <h3 className="text-xl font-semibold text-foreground mb-3">Build Credibility</h3>
                    <p className="text-muted-foreground">through websites, branding, and digital presence that make brokers stand out to shippers who value trust.</p>
                  </div>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-6">Why We Do It</h2>
                <p className="text-muted-foreground mb-4">
                  We believe small and mid-sized freight businesses should have access to the same tools and systems as the largest logistics firms. Our mission is to give brokers the confidence that their marketing will generate results—without the uncertainty of cold calling or waiting on referrals.
                </p>
                <p className="text-muted-foreground mb-6">
                  Freight is a no-nonsense industry, and so is our approach. We don't sell fluff or empty promises. Instead, we build proven systems that help you:
                </p>
                
                <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
                  <li>Get more shippers.</li>
                  <li>Recruit better drivers.</li>
                  <li>Grow revenue with measurable ROI.</li>
                </ul>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-6">Our Promise</h2>
                <p className="text-muted-foreground">
                  At TradeTrack Marketing, we don't just run ads—we build long-term systems. When you partner with us, you're not just getting a marketing vendor. You're getting a growth partner who understands freight, speaks your language, and is invested in helping your brokerage succeed.
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
