import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const DriverRecruitingFunnels = () => {
  useEffect(() => {
    document.title = "Driver Recruiting Funnels for Small Fleets | Tradetrack Logistics";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Stop wasting money on ineffective driver recruiting. Learn Facebook and Instagram ad strategies, landing page optimization, and follow-up systems that deliver qualified CDL drivers.');
    }
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <article className="prose prose-lg max-w-none">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Driver Recruiting Funnels for Small Fleets
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8">
                Stop wasting money on ineffective driver recruiting. This guide covers Facebook and Instagram ad strategies, landing page optimization, and follow-up systems that consistently deliver qualified CDL drivers.
              </p>

              <div className="bg-muted/50 p-6 rounded-lg mb-8">
                <p className="text-sm text-muted-foreground mb-0">
                  <strong>Published:</strong> January 10, 2024 | <strong>Read time:</strong> 12 minutes
                </p>
              </div>

              <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">
                The Problem with Traditional Driver Recruiting
              </h2>
              <p className="text-muted-foreground mb-6">
                Most small fleets rely on job boards and word-of-mouth, resulting in inconsistent applications and high turnover. Digital recruiting funnels provide a systematic approach to building a steady pipeline of qualified drivers.
              </p>

              <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">
                Facebook & Instagram Ad Strategy
              </h2>
              <p className="text-muted-foreground mb-6">
                Target drivers based on location, interests, and demographics. Use carousel ads showcasing your trucks, benefits, and driver testimonials. Video content performs particularly well in the trucking industry.
              </p>

              <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">
                Landing Page Optimization
              </h2>
              <p className="text-muted-foreground mb-6">
                Create dedicated landing pages for each recruiting campaign. Include clear value propositions, application forms, and social proof. Mobile optimization is crucial since many drivers apply from their phones.
              </p>

              <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">
                Follow-Up Automation Systems
              </h2>
              <p className="text-muted-foreground mb-6">
                Implement automated email and SMS sequences to nurture leads. Send application confirmations, company information, and schedule interviews automatically. This reduces manual work and improves response rates.
              </p>

              <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">
                Measuring Recruiting Success
              </h2>
              <p className="text-muted-foreground mb-6">
                Track metrics like cost per application, application-to-hire rate, and driver retention. Aim for CPLs between $20-$50 and hire rates above 15%. These benchmarks indicate healthy recruiting funnel performance.
              </p>

              <div className="bg-accent/10 p-6 rounded-lg mt-8">
                <h3 className="text-xl font-bold text-foreground mb-4">Key Takeaways</h3>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Use targeted social media ads to reach qualified drivers</li>
                  <li>Create mobile-optimized landing pages for applications</li>
                  <li>Implement automated follow-up sequences</li>
                  <li>Track cost per application and hire rates</li>
                  <li>Expect CPLs of $20-$50 with proper optimization</li>
                </ul>
              </div>
            </article>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default DriverRecruitingFunnels;






