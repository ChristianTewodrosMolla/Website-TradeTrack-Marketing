import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import BlogPage from "./pages/Blog";
import GoogleAdsROI from "./pages/blog/GoogleAdsROI";
import DriverRecruitingFunnels from "./pages/blog/DriverRecruitingFunnels";
import CRMAutomation from "./pages/blog/CRMAutomation";
import Services from "./pages/Services";
import About from "./pages/About";
import CaseStudies from "./pages/CaseStudies";
import Contact from "./pages/Contact";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import NotFound from "./pages/NotFound";
import GoogleAds from "./pages/services/GoogleAds";
import SocialAds from "./pages/services/SocialAds";
import LinkedIn from "./pages/services/LinkedIn";
import CRMAutomationService from "./pages/services/CRMAutomation";
import WebsitesFunnels from "./pages/services/WebsitesFunnels";
import BrandPositioning from "./pages/services/BrandPositioning";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/google-ads-roi-for-freight-brokers" element={<GoogleAdsROI />} />
          <Route path="/blog/driver-recruiting-funnels-for-small-fleets" element={<DriverRecruitingFunnels />} />
          <Route path="/blog/crm-automation-for-freight-brokers" element={<CRMAutomation />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/google-ads" element={<GoogleAds />} />
          <Route path="/services/social-ads" element={<SocialAds />} />
          <Route path="/services/linkedin" element={<LinkedIn />} />
          <Route path="/services/crm-automation" element={<CRMAutomationService />} />
          <Route path="/services/websites-funnels" element={<WebsitesFunnels />} />
          <Route path="/services/brand-positioning" element={<BrandPositioning />} />
          <Route path="/about" element={<About />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
