import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Bitcoin, CreditCard, Facebook, Instagram, Twitter } from "lucide-react"
import { Logo } from "@/components/logo"

export function Footer() {
  return (
    <footer className="bg-gradient-to-b from-background to-black/90 pt-12 pb-6">
      <div className="container px-4">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="space-y-4">
            <Logo size="lg" />
            <p className="text-sm text-muted-foreground">Every Digital Thing. One Plug.</p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="rounded-full hover:bg-indigo-900/30" asChild>
                <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                  <Facebook className="h-5 w-5" />
                  <span className="sr-only">Facebook</span>
                </Link>
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full hover:bg-indigo-900/30" asChild>
                <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                  <Twitter className="h-5 w-5" />
                  <span className="sr-only">Twitter</span>
                </Link>
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full hover:bg-indigo-900/30" asChild>
                <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                  <Instagram className="h-5 w-5" />
                  <span className="sr-only">Instagram</span>
                </Link>
              </Button>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-medium text-indigo-300">Categories</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/category/games"
                  className="text-muted-foreground hover:text-indigo-400 transition-colors"
                  scroll={true}
                >
                  Games
                </Link>
              </li>
              <li>
                <Link
                  href="/category/streaming"
                  className="text-muted-foreground hover:text-indigo-400 transition-colors"
                  scroll={true}
                >
                  Streaming
                </Link>
              </li>
              <li>
                <Link
                  href="/category/software"
                  className="text-muted-foreground hover:text-indigo-400 transition-colors"
                  scroll={true}
                >
                  Software
                </Link>
              </li>
              <li>
                <Link
                  href="/category/ai-tools"
                  className="text-muted-foreground hover:text-indigo-400 transition-colors"
                  scroll={true}
                >
                  AI Tools
                </Link>
              </li>
              <li>
                <Link
                  href="/category/mystery"
                  className="text-muted-foreground hover:text-indigo-400 transition-colors"
                  scroll={true}
                >
                  Mystery Packs
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-medium text-indigo-300">Support</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/faq"
                  className="text-muted-foreground hover:text-indigo-400 transition-colors"
                  scroll={true}
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-muted-foreground hover:text-indigo-400 transition-colors"
                  scroll={true}
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-muted-foreground hover:text-indigo-400 transition-colors"
                  scroll={true}
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-muted-foreground hover:text-indigo-400 transition-colors"
                  scroll={true}
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-medium text-indigo-300">Newsletter</h3>
            <p className="text-sm text-muted-foreground">
              Subscribe to get updates on new products and special offers.
            </p>
            <div className="flex space-x-2">
              <Input
                placeholder="Your email"
                className="max-w-[180px] bg-black/30 border-indigo-900/50 focus-visible:ring-indigo-500"
              />
              <Button className="bg-indigo-600 hover:bg-indigo-700">Subscribe</Button>
            </div>
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <span>We accept:</span>
              <Bitcoin className="h-4 w-4" />
              <CreditCard className="h-4 w-4" />
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-indigo-900/30 pt-6 text-center text-xs text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} VIREAL. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
