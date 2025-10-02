import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Problems from "@/components/Problems";
import Solutions from "@/components/Solutions";
import Proof from "@/components/Proof";
import WhoWeServe from "@/components/WhoWeServe";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";

const Index = () => {
  const organizationSchema = {
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
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "TradeTrack Marketing",
    "url": "https://tradetrackmarketing.com",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://tradetrackmarketing.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>TradeTrack Marketing | Freight Broker Digital Marketing & Lead Gen</title>
        <meta name="description" content="High-ROI marketing for freight brokers, carriers, and 3PLs. Google Ads, LinkedIn, social recruiting, CRM automation, and conversion-first websites." />
        <link rel="canonical" href="https://tradetrackmarketing.com/" />
        
        {/* Open Graph */}
        <meta property="og:title" content="TradeTrack Marketing | Freight Broker Digital Marketing & Lead Gen" />
        <meta property="og:description" content="High-ROI marketing for freight brokers, carriers, and 3PLs. Google Ads, LinkedIn, social recruiting, CRM automation, and conversion-first websites." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://tradetrackmarketing.com/" />
        <meta property="og:image" content="https://tradetrackmarketing.com/og-default.jpg" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="TradeTrack Marketing | Freight Broker Digital Marketing & Lead Gen" />
        <meta name="twitter:description" content="High-ROI marketing for freight brokers, carriers, and 3PLs. Google Ads, LinkedIn, social recruiting, CRM automation, and conversion-first websites." />
        <meta name="twitter:image" content="https://tradetrackmarketing.com/og-default.jpg" />
        
        {/* JSON-LD Schema */}
        <script type="application/ld+json">
          {JSON.stringify(organizationSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(websiteSchema)}
        </script>
      </Helmet>
      
      <Header />
      <Hero />
      <Problems />
      <Solutions />
      <Proof />
      <WhoWeServe />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
