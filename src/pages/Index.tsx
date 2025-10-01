import Hero from "@/components/Hero";
import Problems from "@/components/Problems";
import Solutions from "@/components/Solutions";
import Proof from "@/components/Proof";
import WhoWeServe from "@/components/WhoWeServe";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
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
