import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function FAQPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <div className="container px-4 py-12">
          <div className="mx-auto max-w-3xl">
            <h1 className="text-3xl font-bold mb-2 text-center">Frequently Asked Questions</h1>
            <p className="text-muted-foreground mb-8 text-center">
              Find answers to the most common questions about VIREAL
            </p>

            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>How does VIREAL work?</AccordionTrigger>
                <AccordionContent>
                  VIREAL is a digital marketplace where you can buy and sell digital products like game keys, streaming
                  accounts, software licenses, and more. Sellers list their products, and buyers can purchase them
                  instantly. Once payment is confirmed, the digital product is automatically delivered to the buyer.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Is VIREAL secure?</AccordionTrigger>
                <AccordionContent>
                  Yes, VIREAL uses industry-standard encryption and security practices to protect your data and
                  transactions. We never store your payment information, and all transactions are processed through
                  secure payment gateways. Additionally, we have a buyer protection program to ensure you receive the
                  product you paid for.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>How do I receive my digital products?</AccordionTrigger>
                <AccordionContent>
                  After completing your purchase, you'll receive your digital product instantly through our
                  auto-delivery system. You can access your purchases in your account dashboard under "My Purchases."
                  From there, you can view and download your product keys, access credentials, or digital files.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>What payment methods do you accept?</AccordionTrigger>
                <AccordionContent>
                  VIREAL currently accepts cryptocurrency payments including Bitcoin (BTC) and USDT. We're working on
                  adding more payment methods in the future.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger>What if I don't receive my product?</AccordionTrigger>
                <AccordionContent>
                  If you don't receive your product after payment, please contact our support team immediately. We have
                  a 100% satisfaction guarantee, and we'll either resolve the issue or provide a full refund.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-6">
                <AccordionTrigger>How do I become a seller on VIREAL?</AccordionTrigger>
                <AccordionContent>
                  To become a seller, create an account and navigate to the "Seller Dashboard" section. You'll need to
                  complete your seller profile, verify your identity, and agree to our seller terms. Once approved, you
                  can start listing your digital products for sale.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-7">
                <AccordionTrigger>What are the fees for sellers?</AccordionTrigger>
                <AccordionContent>
                  VIREAL charges a 5% commission on each sale. There are no listing fees or monthly subscription fees.
                  Payment processing fees may apply depending on the payment method used by the buyer.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-8">
                <AccordionTrigger>How long does it take to get paid as a seller?</AccordionTrigger>
                <AccordionContent>
                  Seller funds are held for 7 days after a sale to ensure buyer satisfaction. After this period, the
                  funds are available for withdrawal to your cryptocurrency wallet. Withdrawals are processed within 24
                  hours.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-9">
                <AccordionTrigger>Are there any prohibited items?</AccordionTrigger>
                <AccordionContent>
                  Yes, VIREAL prohibits the sale of illegal items, stolen goods, personal information, hacked accounts,
                  and any products that violate intellectual property rights or terms of service of the original
                  provider. Please review our Terms of Service for a complete list of prohibited items.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-10">
                <AccordionTrigger>How do I contact support?</AccordionTrigger>
                <AccordionContent>
                  You can contact our support team through the "Contact" page on our website, by emailing
                  support@vireal.com, or through the live chat feature available on our platform. Our support team is
                  available Monday to Friday, 9 AM - 5 PM EST.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
