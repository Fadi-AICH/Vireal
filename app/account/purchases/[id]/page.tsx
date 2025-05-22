"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { mockProducts } from "@/lib/utils"
import { ArrowLeft, ExternalLink } from "lucide-react"
import { AutoDelivery } from "@/components/auto-delivery"

interface PurchaseDetailsPageProps {
  params: {
    id: string
  }
}

export default function PurchaseDetailsPage({ params }: PurchaseDetailsPageProps) {
  const { id } = params
  const [activeTab, setActiveTab] = useState("details")

  // Find the product based on the ID
  const product = mockProducts.find((p) => p.id === id)

  if (!product) {
    return (
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
            <Button asChild>
              <Link href="/account/purchases">Back to Purchases</Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  // Mock order details
  const orderDetails = {
    orderId: `ORD-${Math.floor(Math.random() * 10000)}`,
    date: new Date().toISOString().split("T")[0],
    status: "Delivered",
    paymentMethod: "Bitcoin",
    total: product.price,
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <div className="container px-4 py-8">
          <div className="mb-6">
            <Button variant="ghost" asChild className="mb-4">
              <Link href="/account/purchases">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Purchases
              </Link>
            </Button>
            <h1 className="text-3xl font-bold">Purchase Details</h1>
            <p className="text-muted-foreground">Order #{orderDetails.orderId}</p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="md:col-span-2">
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle>Product Information</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col sm:flex-row gap-6">
                    <div className="relative h-40 w-full sm:h-auto sm:w-40 flex-shrink-0">
                      <Image
                        src={product.image || "/placeholder.svg"}
                        alt={product.title}
                        fill
                        className="object-cover rounded-md"
                      />
                    </div>
                    <div className="flex-1">
                      <h2 className="text-xl font-bold mb-2">{product.title}</h2>
                      <p className="text-muted-foreground mb-4">{product.description}</p>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <p className="text-sm text-muted-foreground">Category</p>
                          <p className="font-medium">{product.category}</p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Price</p>
                          <p className="font-medium">${product.price.toFixed(2)}</p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Seller</p>
                          <p className="font-medium">{product.seller}</p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Delivery</p>
                          <p className="font-medium">{product.deliveryTime}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
                <TabsList>
                  <TabsTrigger value="details">Order Details</TabsTrigger>
                  <TabsTrigger value="delivery">Product Delivery</TabsTrigger>
                  <TabsTrigger value="support">Support</TabsTrigger>
                </TabsList>
                <TabsContent value="details" className="space-y-4">
                  <Card>
                    <CardHeader>
                      <CardTitle>Order Details</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <p className="text-sm text-muted-foreground">Order Date</p>
                          <p className="font-medium">{orderDetails.date}</p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Status</p>
                          <p className="font-medium text-green-500">{orderDetails.status}</p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Payment Method</p>
                          <p className="font-medium">{orderDetails.paymentMethod}</p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Total</p>
                          <p className="font-medium">${orderDetails.total.toFixed(2)}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                <TabsContent value="delivery" className="space-y-4">
                  <AutoDelivery productId={product.id} orderId={orderDetails.orderId} productName={product.title} />
                </TabsContent>
                <TabsContent value="support" className="space-y-4">
                  <Card>
                    <CardHeader>
                      <CardTitle>Support</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <p>
                          If you're experiencing any issues with your purchase, please contact our support team using
                          one of the methods below:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <Button variant="outline" className="w-full" asChild>
                            <Link href="/contact">
                              Contact Support
                              <ExternalLink className="ml-2 h-4 w-4" />
                            </Link>
                          </Button>
                          <Button variant="outline" className="w-full">
                            Live Chat
                          </Button>
                        </div>
                        <div className="rounded-md bg-secondary p-4">
                          <p className="text-sm">
                            <strong>Support Hours:</strong> Monday to Friday, 9 AM - 5 PM EST
                          </p>
                          <p className="text-sm mt-2">
                            <strong>Response Time:</strong> Within 24 hours
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>

            <div>
              <Card className="sticky top-20">
                <CardHeader>
                  <CardTitle>Actions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button className="w-full" onClick={() => setActiveTab("delivery")}>
                    Access Product
                  </Button>
                  <Button variant="outline" className="w-full" asChild>
                    <Link href={`/product/${product.id}`}>View Product Page</Link>
                  </Button>
                  <Button variant="outline" className="w-full">
                    Download Invoice
                  </Button>
                  <Button variant="ghost" className="w-full text-destructive">
                    Report Issue
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
