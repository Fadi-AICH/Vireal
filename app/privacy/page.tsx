import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function PrivacyPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <div className="container px-4 py-12">
          <div className="mx-auto max-w-3xl">
            <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
            <div className="prose prose-invert max-w-none">
              <p>Last updated: {new Date().toLocaleDateString()}</p>

              <h2>1. Introduction</h2>
              <p>
                At VIREAL, we respect your privacy and are committed to protecting your personal data. This Privacy
                Policy explains how we collect, use, and safeguard your information when you use our website and
                services.
              </p>

              <h2>2. Information We Collect</h2>
              <p>We collect the following types of information:</p>
              <ul>
                <li>
                  <strong>Personal Information:</strong> Name, email address, billing address, and payment information.
                </li>
                <li>
                  <strong>Account Information:</strong> Username, password, and account preferences.
                </li>
                <li>
                  <strong>Transaction Information:</strong> Products purchased, payment methods, and transaction
                  history.
                </li>
                <li>
                  <strong>Usage Information:</strong> How you interact with our website, including pages visited and
                  features used.
                </li>
                <li>
                  <strong>Device Information:</strong> IP address, browser type, device type, and operating system.
                </li>
              </ul>

              <h2>3. How We Use Your Information</h2>
              <p>We use your information to:</p>
              <ul>
                <li>Provide and improve our services</li>
                <li>Process transactions and send transaction notifications</li>
                <li>Respond to your inquiries and provide customer support</li>
                <li>Send you updates, marketing communications, and promotional offers</li>
                <li>Detect and prevent fraud and abuse</li>
                <li>Comply with legal obligations</li>
              </ul>

              <h2>4. How We Share Your Information</h2>
              <p>We may share your information with:</p>
              <ul>
                <li>
                  <strong>Service Providers:</strong> Third-party companies that help us operate our website and provide
                  our services.
                </li>
                <li>
                  <strong>Sellers:</strong> When you make a purchase, we share necessary information with the seller to
                  complete the transaction.
                </li>
                <li>
                  <strong>Legal Authorities:</strong> When required by law or to protect our rights and safety.
                </li>
              </ul>

              <h2>5. Data Security</h2>
              <p>
                We implement appropriate security measures to protect your personal information from unauthorized
                access, alteration, disclosure, or destruction.
              </p>

              <h2>6. Your Rights</h2>
              <p>Depending on your location, you may have the right to:</p>
              <ul>
                <li>Access the personal information we hold about you</li>
                <li>Correct inaccurate or incomplete information</li>
                <li>Delete your personal information</li>
                <li>Object to or restrict the processing of your information</li>
                <li>Receive a copy of your information in a structured, machine-readable format</li>
              </ul>

              <h2>7. Cookies and Tracking Technologies</h2>
              <p>
                We use cookies and similar tracking technologies to collect information about your browsing activities
                and to improve your experience on our website.
              </p>

              <h2>8. Children's Privacy</h2>
              <p>
                Our services are not intended for individuals under the age of 18. We do not knowingly collect personal
                information from children.
              </p>

              <h2>9. Changes to This Privacy Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the
                new Privacy Policy on this page.
              </p>

              <h2>10. Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us at{" "}
                <a href="mailto:privacy@vireal.com" className="text-primary hover:underline">
                  privacy@vireal.com
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
