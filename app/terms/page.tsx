import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function TermsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <div className="container px-4 py-12">
          <div className="mx-auto max-w-3xl">
            <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>
            <div className="prose prose-invert max-w-none">
              <p>Last updated: {new Date().toLocaleDateString()}</p>

              <h2>1. Introduction</h2>
              <p>
                Welcome to VIREAL ("we," "our," or "us"). By accessing or using our website, services, applications, or
                products, you agree to be bound by these Terms of Service ("Terms").
              </p>

              <h2>2. Eligibility</h2>
              <p>
                You must be at least 18 years old to use our services. By using our services, you represent and warrant
                that you are at least 18 years old and have the legal capacity to enter into these Terms.
              </p>

              <h2>3. Account Registration</h2>
              <p>
                To access certain features of our services, you may need to register for an account. You agree to
                provide accurate, current, and complete information during the registration process and to update such
                information to keep it accurate, current, and complete.
              </p>

              <h2>4. User Conduct</h2>
              <p>You agree not to:</p>
              <ul>
                <li>Use our services for any illegal purpose</li>
                <li>Violate any applicable laws or regulations</li>
                <li>Infringe the intellectual property rights of others</li>
                <li>Interfere with or disrupt our services</li>
                <li>Attempt to gain unauthorized access to our services</li>
                <li>Use our services to transmit harmful code or malware</li>
              </ul>

              <h2>5. Digital Products</h2>
              <p>
                VIREAL is a marketplace for digital products. We do not own or create the products sold on our platform.
                We provide a platform for sellers to list and sell their digital products to buyers.
              </p>

              <h2>6. Payments and Fees</h2>
              <p>
                All payments are processed through our secure payment system. We charge a 5% commission on each sale.
                Payment processing fees may apply depending on the payment method used.
              </p>

              <h2>7. Refunds</h2>
              <p>
                If you are not satisfied with your purchase, you may request a refund within 24 hours of purchase.
                Refund requests will be evaluated on a case-by-case basis.
              </p>

              <h2>8. Intellectual Property</h2>
              <p>
                All content on our website, including text, graphics, logos, and software, is the property of VIREAL or
                its content suppliers and is protected by copyright laws.
              </p>

              <h2>9. Limitation of Liability</h2>
              <p>
                To the maximum extent permitted by law, VIREAL shall not be liable for any indirect, incidental,
                special, consequential, or punitive damages, or any loss of profits or revenues.
              </p>

              <h2>10. Changes to Terms</h2>
              <p>
                We reserve the right to modify these Terms at any time. We will provide notice of any material changes
                by posting the new Terms on our website.
              </p>

              <h2>11. Contact Us</h2>
              <p>
                If you have any questions about these Terms, please contact us at{" "}
                <a href="mailto:legal@vireal.com" className="text-primary hover:underline">
                  legal@vireal.com
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
