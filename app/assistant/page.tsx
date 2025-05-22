"use client"

import type React from "react"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { ProductCard } from "@/components/product-card"
import { mockProducts } from "@/lib/utils"
import { Bot, Loader2, Search, Sparkles } from "lucide-react"

export default function AIAssistant() {
  const [query, setQuery] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [results, setResults] = useState<any[] | null>(null)
  const [conversation, setConversation] = useState<{ role: "user" | "assistant"; content: string }[]>([
    {
      role: "assistant",
      content: "Hi there! I'm your VIREAL assistant. Tell me what digital products you're looking for today.",
    },
  ])

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (!query.trim()) return

    setIsLoading(true)
    setConversation([...conversation, { role: "user", content: query }])

    // Simulate AI processing
    setTimeout(() => {
      // Simple keyword matching for demo purposes
      const keywords = query.toLowerCase().split(" ")
      const filteredProducts = mockProducts.filter((product) => {
        const titleLower = product.title.toLowerCase()
        const categoryLower = product.category.toLowerCase()
        return keywords.some((keyword) => titleLower.includes(keyword) || categoryLower.includes(keyword))
      })

      const limitedResults = filteredProducts.slice(0, 3)

      // Generate AI response based on results
      let aiResponse = ""
      if (limitedResults.length > 0) {
        aiResponse = `I found ${limitedResults.length} products that might interest you. Take a look!`
      } else {
        aiResponse = "I couldn't find any products matching your request. Could you try different keywords?"
      }

      setConversation([...conversation, { role: "user", content: query }, { role: "assistant", content: aiResponse }])
      setResults(limitedResults.length > 0 ? limitedResults : null)
      setIsLoading(false)
      setQuery("")
    }, 1500)
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <div className="container px-4 py-8">
          <div className="mx-auto max-w-4xl">
            <div className="mb-8 text-center">
              <h1 className="text-3xl font-bold mb-2">AI Shopping Assistant</h1>
              <p className="text-muted-foreground">
                Tell us what you're looking for, and our AI will find the perfect digital products for you.
              </p>
            </div>

            <Card className="mb-8 overflow-hidden border-primary/20 bg-gradient-to-b from-primary/5 to-background">
              <CardContent className="p-6">
                <div className="mb-6 space-y-4">
                  <div className="flex flex-col space-y-4">
                    {conversation.map((message, index) => (
                      <div
                        key={index}
                        className={`flex ${message.role === "assistant" ? "justify-start" : "justify-end"}`}
                      >
                        <div
                          className={`max-w-[80%] rounded-lg px-4 py-2 ${
                            message.role === "assistant"
                              ? "bg-secondary text-secondary-foreground"
                              : "bg-primary text-primary-foreground"
                          }`}
                        >
                          {message.role === "assistant" && (
                            <div className="mb-1 flex items-center">
                              <Bot className="mr-1 h-4 w-4" />
                              <span className="text-xs font-medium">VIREAL Assistant</span>
                            </div>
                          )}
                          <p>{message.content}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <form onSubmit={handleSearch} className="flex space-x-2">
                  <div className="relative flex-1">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                      placeholder="What are you looking for today?"
                      className="pl-8"
                      value={query}
                      onChange={(e) => setQuery(e.target.value)}
                      disabled={isLoading}
                    />
                  </div>
                  <Button type="submit" disabled={isLoading || !query.trim()}>
                    {isLoading ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Searching...
                      </>
                    ) : (
                      <>
                        <Sparkles className="mr-2 h-4 w-4" />
                        Find Products
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {results && results.length > 0 && (
              <div className="space-y-4">
                <h2 className="text-xl font-bold">Recommended Products</h2>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
                  {results.map((product) => (
                    <ProductCard
                      key={product.id}
                      id={product.id}
                      title={product.title}
                      image={product.image}
                      price={product.price}
                      category={product.category}
                      rating={product.rating}
                      seller={product.seller}
                      deliveryTime={product.deliveryTime}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
