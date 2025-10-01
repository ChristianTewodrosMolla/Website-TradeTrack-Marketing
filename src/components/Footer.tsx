import logo from "@/assets/logo.svg";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div className="col-span-1 md:col-span-2">
              <img src={logo} alt="Freight Marketing Pro" className="h-12 mb-4" />
              <p className="text-muted-foreground mb-4">
                Digital marketing systems built exclusively for U.S. freight brokers, carriers, and 3PLs. Generate shippers, recruit drivers, scale revenue.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold text-foreground mb-4">Services</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>Google Ads</li>
                <li>Social Media Marketing</li>
                <li>LinkedIn Campaigns</li>
                <li>CRM Automation</li>
                <li>Website Design</li>
                <li>Brand Positioning</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-foreground mb-4">Company</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>About Us</li>
                <li>Case Studies</li>
                <li>Blog</li>
                <li>Contact</li>
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} Freight Marketing Pro. All rights reserved. Built for the freight industry.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
