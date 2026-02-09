import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ServicesChapters } from "@/components/ServicesChapters";
import { Helmet } from "react-helmet-async";

const Services = () => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Services | Tradetrack Logistics</title>
        <meta
          name="description"
          content="Comprehensive digital marketing solutions for freight brokers, carriers, and 3PLs. Google Ads, social media marketing, LinkedIn campaigns, CRM automation, websites, and brand positioning."
        />
        <link rel="canonical" href="https://tradetrackmarketing.com/services" />
        <meta property="og:title" content="Services | Tradetrack Logistics" />
        <meta
          property="og:description"
          content="Comprehensive digital marketing solutions for freight brokers, carriers, and 3PLs. Google Ads, social media marketing, LinkedIn campaigns, CRM automation, websites, and brand positioning."
        />
        <meta property="og:url" content="https://tradetrackmarketing.com/services" />
        <meta name="twitter:title" content="Services | Tradetrack Logistics" />
        <meta
          name="twitter:description"
          content="Comprehensive digital marketing solutions for freight brokers, carriers, and 3PLs. Google Ads, social media marketing, LinkedIn campaigns, CRM automation, websites, and brand positioning."
        />
      </Helmet>

      <Header />
      <main>
        <ServicesChapters />
      </main>
      <Footer />
    </div>
  );
};

export default Services;
