import Header from "@/components/Header";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
                Privacy Policy
              </h1>
              <p className="text-lg text-muted-foreground">
                Effective date: October 1, 2025
              </p>
            </div>

            <div className="prose prose-lg max-w-none">
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-6">Who we are</h2>
                <p className="text-muted-foreground">
                  TradeTrack Marketing ("we," "us," "our") provides digital marketing and automation services for U.S. freight brokers, carriers, and 3PLs. This policy explains what we collect, how we use it, and the choices you have.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-6">Information we collect</h2>
                
                <h3 className="text-xl font-semibold text-foreground mb-3">You provide directly</h3>
                <p className="text-muted-foreground mb-4">
                  Contact details submitted on our site (name, email, phone, company, role, lane/region notes, message).
                </p>
                <p className="text-muted-foreground mb-4">
                  Calendar bookings (via Calendly) and any answers you add in scheduling forms.
                </p>
                <p className="text-muted-foreground mb-6">
                  Emails, SMS replies, or other communications with us.
                </p>

                <h3 className="text-xl font-semibold text-foreground mb-3">Collected automatically</h3>
                <p className="text-muted-foreground mb-4">
                  Usage data and device info (IP address, browser, pages viewed, time on page, referring/exit pages).
                </p>
                <p className="text-muted-foreground mb-6">
                  Cookies and similar technologies for analytics, conversion tracking, and site functionality.
                </p>

                <h3 className="text-xl font-semibold text-foreground mb-3">From third parties (when you opt in)</h3>
                <p className="text-muted-foreground mb-4">
                  CRM/marketing platforms (e.g., GoHighLevel) we use to manage forms, pipelines, and email/SMS.
                </p>
                <p className="text-muted-foreground mb-4">
                  Ad platforms (e.g., Google Ads) and analytics services that help measure performance.
                </p>
                <p className="text-muted-foreground">
                  Payment or invoicing tools if you become a client (billing contact info and transaction metadata—no full card details are stored on our servers).
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-6">How we use your information</h2>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                  <li>To respond to inquiries, schedule calls, and provide proposals.</li>
                  <li>To run and optimize campaigns, build reports, and improve site and service performance.</li>
                  <li>To send service updates, marketing emails/SMS (only if you've opted in; you can opt out anytime).</li>
                  <li>To protect our services, prevent abuse, and comply with legal obligations.</li>
                </ul>
                <p className="text-muted-foreground">
                  <strong>Legal bases (where required)</strong><br />
                  We rely on consent (e.g., marketing), contract (to provide services you request), and legitimate interest (e.g., security, analytics).
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-6">Cookies & tracking</h2>
                <p className="text-muted-foreground">
                  We use cookies and pixels for site functionality, analytics, and ad measurement. You can control cookies in your browser settings. Some features may not function without them.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-6">Sharing your information</h2>
                <p className="text-muted-foreground mb-4">
                  We do not sell your personal information. We share limited data with:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                  <li>Service providers (e.g., hosting, CRM/automation, analytics, calendar, communications) under contracts that require confidentiality and appropriate safeguards.</li>
                  <li>Legal and safety purposes if required by law or to protect rights, property, or safety.</li>
                  <li>Business transfers (e.g., merger, acquisition), where your information would remain protected under this policy or a successor policy with similar protections.</li>
                </ul>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-6">Data retention</h2>
                <p className="text-muted-foreground">
                  We keep personal information only as long as needed for the purposes above, to comply with legal/contractual obligations, or to resolve disputes. If you request deletion, we will honor it unless we must retain data for legal reasons.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-6">Your choices & rights</h2>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                  <li><strong>Access, update, delete:</strong> Email us to request a copy, correction, or deletion of your data.</li>
                  <li><strong>Opt out:</strong> Unsubscribe links are included in marketing emails; reply STOP to opt out of SMS.</li>
                  <li><strong>Do Not Track/Global Privacy Control:</strong> We honor applicable browser or platform-level signals where required by law.</li>
                </ul>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-6">Security</h2>
                <p className="text-muted-foreground">
                  We use reasonable technical and organizational measures to protect your information. No system is 100% secure, so please use strong, unique passwords and be cautious with links and attachments.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-6">Children</h2>
                <p className="text-muted-foreground">
                  Our services are intended for business users. We do not knowingly collect personal information from children under 13.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-6">International transfers</h2>
                <p className="text-muted-foreground">
                  If we transfer data across borders, we do so under appropriate safeguards allowed by applicable law.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-6">Changes to this policy</h2>
                <p className="text-muted-foreground">
                  We may update this policy from time to time. The "Effective date" will always reflect the latest version.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-6">Contact us</h2>
                <p className="text-muted-foreground mb-2">
                  <strong>TradeTrack Marketing</strong>
                </p>
                <p className="text-muted-foreground mb-2">
                  Email: contact@tradetrackmarketing.com
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

export default PrivacyPolicy;

