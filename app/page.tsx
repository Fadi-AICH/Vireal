"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/hero-section"
import { CategorySection } from "@/components/category-section"
import { FeaturedProducts } from "@/components/featured-products"
import { Testimonials } from "@/components/testimonials"
import { mockCategories, mockProducts, mockTestimonials } from "@/lib/utils"

export default function Home() {
  const featuredProducts = mockProducts.filter((product) => product.featured)
  const newArrivals = [...mockProducts].sort(() => Math.random() - 0.5).slice(0, 4)

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <HeroSection />

        {/* Trending section with gradient background */}
        <section className="py-16 bg-gradient-to-b from-indigo-950/30 to-background">
          <div className="container px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-violet-400">
                Trending Now
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Discover our most popular digital products that everyone's talking about
              </p>
            </div>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {featuredProducts.slice(0, 4).map((product, index) => (
                <div
                  key={product.id}
                  className="relative group overflow-hidden rounded-xl border border-indigo-900/30 bg-black/20 backdrop-blur-sm transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/10 hover:border-indigo-500/50"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="p-6">
                    <div className="mb-4 text-indigo-400">{product.category}</div>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-indigo-300 transition-colors">
                      {product.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 line-clamp-2">{product.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-2xl font-bold text-purple-400">${product.price.toFixed(2)}</span>
                      <span className="text-xs text-indigo-300 bg-indigo-950/50 px-2 py-1 rounded-full">
                        {product.deliveryTime}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CategorySection categories={mockCategories} />
        <FeaturedProducts products={featuredProducts} title="Featured Products" />
        <Testimonials testimonials={mockTestimonials} />
        <FeaturedProducts products={newArrivals} title="New Arrivals" />

        {/* Call to action section */}
        <section className="py-16 bg-gradient-to-b from-background to-indigo-950/30">
          <div className="container px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">Ready to Dive In?</h2>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                Join thousands of satisfied customers who trust VIREAL for their digital product needs. Fast delivery,
                secure payments, and 24/7 support.
              </p>
              <div className="inline-block">
                <a
                  href="/auth/login"
                  className="px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-medium rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  Create Your Account
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
