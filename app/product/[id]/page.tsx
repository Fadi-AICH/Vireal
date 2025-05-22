import Image from "next/image"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { mockProducts } from "@/lib/utils"
import { Bitcoin, Clock, CreditCard, ShoppingCart, Star, User } from "lucide-react"

interface ProductPageProps {
  params: {
    id: string
  }
}

export default function ProductPage({ params }: ProductPageProps) {
  const { id } = params
  const product = mockProducts.find((p) => p.id === id)

  if (!product) {
    return <div>Product not found</div>
  }

  const relatedProducts = mockProducts.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 4)

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <div className="container px-4 py-8">
          <div className="mb-4">
            <Link
              href={`/category/${product.category.toLowerCase()}`}
              className="text-sm text-muted-foreground hover:text-primary"
            >
              {product.category}
            </Link>
            <h1 className="text-2xl font-bold mt-2 md:text-3xl">{product.title}</h1>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg border">
              <Image src={product.image || "/placeholder.svg"} alt={product.title} fill className="object-cover" />
            </div>

            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Badge variant="outline">{product.category}</Badge>
                  <div className="flex items-center text-amber-500">
                    <Star className="h-4 w-4 fill-current" />
                    <span className="ml-1 text-sm">{product.rating.toFixed(1)}</span>
                  </div>
                </div>
                <p className="text-3xl font-bold">${product.price.toFixed(2)}</p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center text-sm">
                  <User className="mr-2 h-4 w-4 text-muted-foreground" />
                  <span>Seller: </span>
                  <Link href="#" className="ml-1 font-medium hover:text-primary">
                    {product.seller}
                  </Link>
                </div>
                <div className="flex items-center text-sm">
                  <Clock className="mr-2 h-4 w-4 text-muted-foreground" />
                  <span>Delivery: {product.deliveryTime}</span>
                </div>
              </div>

              <div className="space-y-4 border-t border-border pt-4">
                <h3 className="font-medium">Payment Methods</h3>
                <div className="flex space-x-4">
                  <div className="flex items-center space-x-2 rounded-md border border-border p-2">
                    <Bitcoin className="h-5 w-5" />
                    <span className="text-sm">Bitcoin</span>
                  </div>
                  <div className="flex items-center space-x-2 rounded-md border border-border p-2">
                    <CreditCard className="h-5 w-5" />
                    <span className="text-sm">USDT</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <Button size="lg" className="w-full" asChild>
                  <Link href="/cart">
                    <ShoppingCart className="mr-2 h-5 w-5" />
                    Add to Cart
                  </Link>
                </Button>
                <Button variant="outline" size="lg" className="w-full" asChild>
                  <Link href="/checkout">Buy Now</Link>
                </Button>
              </div>

              <div className="rounded-md bg-secondary/30 p-4 text-sm">
                <p className="font-medium">Secure Purchase</p>
                <p className="mt-1 text-muted-foreground">
                  All transactions are secure and encrypted. If you don't receive your product, you're eligible for a
                  full refund.
                </p>
              </div>
            </div>
          </div>

          <Tabs defaultValue="description" className="mt-12">
            <TabsList className="grid w-full grid-cols-3 md:w-auto">
              <TabsTrigger value="description">Description</TabsTrigger>
              <TabsTrigger value="details">Details</TabsTrigger>
              <TabsTrigger value="reviews">Reviews</TabsTrigger>
            </TabsList>
            <TabsContent value="description" className="mt-4 space-y-4">
              <h3 className="text-lg font-medium">Product Description</h3>
              <p className="text-muted-foreground">
                This is a detailed description of the {product.title}. The product includes all features and benefits as
                advertised. Please read the details tab for more specific information about this product.
              </p>
            </TabsContent>
            <TabsContent value="details" className="mt-4 space-y-4">
              <h3 className="text-lg font-medium">Product Details</h3>
              <ul className="list-disc pl-5 text-muted-foreground space-y-2">
                <li>Category: {product.category}</li>
                <li>Delivery Method: Digital (Instant)</li>
                <li>Format: Account credentials / License key</li>
                <li>Support: 30 days after purchase</li>
                <li>Warranty: Replacement guarantee if not working</li>
              </ul>
            </TabsContent>
            <TabsContent value="reviews" className="mt-4 space-y-4">
              <h3 className="text-lg font-medium">Customer Reviews</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="text-center">
                    <p className="text-3xl font-bold">{product.rating.toFixed(1)}</p>
                    <div className="flex">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < Math.floor(product.rating) ? "fill-amber-500 text-amber-500" : "text-muted-foreground"
                          }`}
                        />
                      ))}
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">Based on 24 reviews</p>
                  </div>
                  <div className="flex-1">
                    {[5, 4, 3, 2, 1].map((star) => (
                      <div key={star} className="flex items-center space-x-2">
                        <span className="text-xs">{star} star</span>
                        <div className="h-2 flex-1 rounded-full bg-secondary">
                          <div
                            className="h-2 rounded-full bg-amber-500"
                            style={{
                              width: `${star === 5 ? 70 : star === 4 ? 20 : star === 3 ? 5 : star === 2 ? 3 : 2}%`,
                            }}
                          ></div>
                        </div>
                        <span className="text-xs text-muted-foreground">
                          {star === 5 ? 17 : star === 4 ? 5 : star === 3 ? 1 : star === 2 ? 1 : 0}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  {[
                    {
                      name: "John D.",
                      date: "2 days ago",
                      rating: 5,
                      comment: "Excellent product, fast delivery, and worked perfectly. Will buy again!",
                    },
                    {
                      name: "Maria S.",
                      date: "1 week ago",
                      rating: 4,
                      comment: "Good value for money. Delivery was quick but the instructions could be clearer.",
                    },
                    {
                      name: "Alex T.",
                      date: "2 weeks ago",
                      rating: 5,
                      comment: "This is my third purchase from this seller. Always reliable and professional.",
                    },
                  ].map((review, index) => (
                    <Card key={index}>
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <div className="h-8 w-8 rounded-full bg-secondary flex items-center justify-center">
                              <User className="h-4 w-4" />
                            </div>
                            <div>
                              <p className="font-medium">{review.name}</p>
                              <p className="text-xs text-muted-foreground">{review.date}</p>
                            </div>
                          </div>
                          <div className="flex">
                            {Array.from({ length: 5 }).map((_, i) => (
                              <Star
                                key={i}
                                className={`h-4 w-4 ${
                                  i < review.rating ? "fill-amber-500 text-amber-500" : "text-muted-foreground"
                                }`}
                              />
                            ))}
                          </div>
                        </div>
                        <p className="mt-4 text-sm text-muted-foreground">{review.comment}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>
          </Tabs>

          {relatedProducts.length > 0 && (
            <div className="mt-16">
              <h2 className="text-2xl font-bold mb-6">Related Products</h2>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {relatedProducts.map((product) => (
                  <Link key={product.id} href={`/product/${product.id}`}>
                    <Card className="overflow-hidden transition-all hover:shadow-md">
                      <div className="relative aspect-[4/3] overflow-hidden">
                        <Image
                          src={product.image || "/placeholder.svg"}
                          alt={product.title}
                          fill
                          className="object-cover transition-transform hover:scale-105"
                        />
                      </div>
                      <CardContent className="p-4">
                        <h3 className="font-medium line-clamp-2">{product.title}</h3>
                        <div className="flex items-center justify-between mt-2">
                          <p className="font-bold">${product.price.toFixed(2)}</p>
                          <div className="flex items-center text-amber-500">
                            <Star className="h-4 w-4 fill-current" />
                            <span className="ml-1 text-xs">{product.rating.toFixed(1)}</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  )
}
