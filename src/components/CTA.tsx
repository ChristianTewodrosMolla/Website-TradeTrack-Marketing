import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Phone, Mail } from "lucide-react";

const CTA = () => {
  return (
    <section id="contact" className="py-20 bg-[var(--hero-gradient)] text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to Scale Your Freight Business?
          </h2>
          <p className="text-lg md:text-xl text-primary-foreground/90 mb-8">
            Get a free marketing strategy session. We'll analyze your current situation and show you exactly how to generate more shippers and drivers.
          </p>
          
          <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-8 border border-primary-foreground/20 mb-8">
            <form className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
              <Input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 bg-primary-foreground/20 border-primary-foreground/30 text-primary-foreground placeholder:text-primary-foreground/60 focus:bg-primary-foreground/30"
              />
              <Button variant="hero" size="lg" className="sm:w-auto">
                Get Free Strategy
                <ArrowRight className="ml-2" />
              </Button>
            </form>
            <p className="text-sm text-primary-foreground/70 mt-4">
              No credit card required. Speak with a freight marketing specialist in 24 hours.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-3 bg-primary-foreground/5 p-4 rounded-lg border border-primary-foreground/20">
              <Phone className="w-5 h-5 text-accent" />
              <div className="text-left">
                <p className="text-sm text-primary-foreground/70">Call Us</p>
                <p className="font-semibold">(555) 123-4567</p>
              </div>
            </div>
            
            <div className="flex items-center justify-center gap-3 bg-primary-foreground/5 p-4 rounded-lg border border-primary-foreground/20">
              <Mail className="w-5 h-5 text-accent" />
              <div className="text-left">
                <p className="text-sm text-primary-foreground/70">Email Us</p>
                <p className="font-semibold">hello@freightmarketing.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
