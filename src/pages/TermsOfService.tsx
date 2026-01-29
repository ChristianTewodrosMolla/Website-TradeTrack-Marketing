import Header from "@/components/Header";
import Footer from "@/components/Footer";

const TermsOfService = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Terms of Service
            </h1>
            <p className="text-lg text-muted-foreground">
                Effective Date: October 1, 2025
              </p>
            </div>

            <div className="prose prose-lg max-w-none">
              <section className="mb-12">
                <p className="text-muted-foreground mb-6">
                  Welcome to Tradetrack Logistics ("we," "us," "our"). By using our website, services, or engaging with us in any way, you agree to the following terms and conditions. Please read carefully.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-6">1. Services Provided</h2>
                <p className="text-muted-foreground">
                  Tradetrack Logistics offers digital marketing, advertising, branding, and automation solutions designed for freight brokers, carriers, and 3PLs. Services may include but are not limited to Google Ads management, social media marketing, LinkedIn campaigns, CRM automation, website design, and brand positioning.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-6">2. Eligibility</h2>
                <p className="text-muted-foreground">
                  You must be at least 18 years old and operating as a business entity to use our services.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-6">3. Use of Our Website</h2>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                  <li>You may browse and use the information on our website for personal or business purposes only.</li>
                  <li>You agree not to misuse our site (e.g., attempting to hack, scrape, or copy proprietary content without permission).</li>
                </ul>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-6">4. Client Responsibilities</h2>
                <p className="text-muted-foreground mb-4">
                  When engaging our services, you agree to:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Provide accurate and up-to-date information (including billing details and campaign assets).</li>
                  <li>Comply with all applicable advertising and marketing laws.</li>
                  <li>Maintain responsibility for your own compliance in industries you serve.</li>
                </ul>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-6">5. Fees and Payments</h2>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Service fees will be outlined in separate contracts or invoices.</li>
                  <li>Payment terms (e.g., retainer, ad spend, or performance-based fees) are agreed upon before work begins.</li>
                  <li>Failure to pay invoices on time may result in suspension of services.</li>
                </ul>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-6">6. Results Disclaimer</h2>
                <p className="text-muted-foreground">
                  While we apply industry best practices and proven strategies, marketing outcomes can vary. We do not guarantee a specific number of leads, sales, or revenue. Actual results depend on factors such as market conditions, budget, competition, and your internal sales process.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-6">7. Intellectual Property</h2>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>All content, logos, designs, and materials on our website are owned by Tradetrack Logistics unless otherwise noted.</li>
                  <li>Client-specific campaigns, creatives, and deliverables remain your property after payment in full.</li>
                  <li>We reserve the right to showcase non-confidential results (e.g., performance data, testimonials) in case studies or marketing, unless agreed otherwise in writing.</li>
                </ul>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-6">8. Termination</h2>
                <p className="text-muted-foreground">
                  Either party may terminate services with written notice. Outstanding fees must be paid for work already performed.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-6">9. Limitation of Liability</h2>
                <p className="text-muted-foreground">
                  Tradetrack Logistics will not be liable for indirect, incidental, or consequential damages arising from use of our services. Our maximum liability is limited to the amount you paid for services in the month such liability arose.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-6">10. Privacy</h2>
                <p className="text-muted-foreground">
                  Your use of our services is also governed by our{" "}
                  <a href="/privacy-policy" className="text-[#63cc53] hover:underline">
                    Privacy Policy
                  </a>
                  .
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-6">11. SMS Messaging Terms</h2>
                <p className="text-muted-foreground mb-4">
                  By providing your mobile phone number and opting in to receive SMS messages, you agree to receive text messages from Tradetrack Logistics. Our SMS messaging service is used for transactional and operational purposes only. We do not send promotional messages or engage in cold outreach via SMS without your explicit opt-in consent.
                </p>
                
                <h3 className="text-xl font-semibold text-foreground mb-3">SMS Use Cases</h3>
                <p className="text-muted-foreground mb-4">
                  We use SMS messaging for transactional and operational communications only, including but not limited to:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                  <li>Account alerts and notifications</li>
                  <li>Service reminders and confirmations</li>
                  <li>Appointment scheduling confirmations</li>
                  <li>Operational updates related to your account or services</li>
                </ul>
                <p className="text-muted-foreground mb-4">
                  We do not send promotional messages, marketing content, or engage in cold outreach via SMS unless you have explicitly opted in to receive marketing messages through our contact form or other consent mechanisms.
                </p>

                <h3 className="text-xl font-semibold text-foreground mb-3">Opt-Out Instructions</h3>
                <p className="text-muted-foreground mb-4">
                  You can opt out of SMS messages at any time by replying <strong>STOP</strong> to any message. After you send STOP, you will receive one final confirmation message. For help, reply <strong>HELP</strong>. You can also opt out by contacting our customer support team.
                </p>

                <h3 className="text-xl font-semibold text-foreground mb-3">Message & Data Rates</h3>
                <p className="text-muted-foreground mb-4">
                  <strong>Message and data rates may apply.</strong> Standard message and data rates charged by your mobile carrier will apply to SMS messages sent and received. Tradetrack Logistics is not responsible for any charges incurred as a result of receiving SMS messages.
                </p>

                <h3 className="text-xl font-semibold text-foreground mb-3">Carrier Liability Disclaimer</h3>
                <p className="text-muted-foreground mb-4">
                  <strong>Carriers are not liable for delayed or undelivered messages.</strong> Mobile carriers are not liable for delayed or undelivered messages. Message delivery is subject to effective transmission from your mobile carrier's network. Tradetrack Logistics is not responsible for messages that are delayed, lost, or not delivered due to carrier network issues, device issues, or other factors outside our control.
                </p>

                <h3 className="text-xl font-semibold text-foreground mb-3">Eligibility</h3>
                <p className="text-muted-foreground mb-4">
                  You must be at least 18 years old to receive SMS messages from Tradetrack Logistics. By opting in to SMS messages, you represent that you are at least 18 years of age.
                </p>

                <h3 className="text-xl font-semibold text-foreground mb-3">Customer Support</h3>
                <p className="text-muted-foreground">
                  For questions or issues related to SMS messaging, please contact our customer support team:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 mt-2">
                  <li>Email: contact@tradetrackmarketing.com</li>
                  <li>Phone: +1 (563)-232-5580</li>
                </ul>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-6">12. Changes to Terms</h2>
                <p className="text-muted-foreground">
                  We may update these Terms of Service periodically. The updated version will be posted on this page with a revised "Effective Date."
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-6">13. Contact Us</h2>
                <p className="text-muted-foreground mb-2">
                  For questions about these Terms, contact us at:
                </p>
                <p className="text-muted-foreground mb-2">
                  <strong>Tradetrack Logistics</strong>
                </p>
                <p className="text-muted-foreground mb-2">
                  Email: contact@tradetrackmarketing.com
                </p>
                <p className="text-muted-foreground mb-2">
                  Phone: +1 (563)-232-5580
                </p>
                <p className="text-muted-foreground mb-2">
                  71-75, Shelton Street, Covent Garden, London, WC2H 9JQ, UNITED KINGDOM
                </p>
                <p className="text-muted-foreground">
                  Website: tradetrackmarketing.com
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

export default TermsOfService;

