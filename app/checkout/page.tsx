"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { mockProducts } from "@/lib/utils"
import { Bitcoin, Check, CreditCard, Loader2 } from "lucide-react"

// Mock cart items from previous page
const cartItems = [
  {
    product: mockProducts[0],
    quantity: 1,
  },
  {
    product: mockProducts[2],
    quantity: 1,
  },
]

export default function CheckoutPage() {
  const [paymentMethod, setPaymentMethod] = useState("bitcoin")
  const [isProcessing, setIsProcessing] = useState(false)
  const [isComplete, setIsComplete] = useState(false)

  const subtotal = cartItems.reduce((total, item) => total + item.product.price * item.quantity, 0)
  const fees = subtotal * 0.05 // 5% fee
  const total = subtotal + fees

  const handleCheckout = () => {
    setIsProcessing(true)
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false)
      setIsComplete(true)
    }, 3000)
  }

  if (isComplete) {
    return (
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1 flex items-center justify-center py-12">
          <div className="container max-w-md px-4 text-center">
            <div className="mb-6 flex justify-center">
              <div className="rounded-full bg-green-500/20 p-3">
                <Check className="h-8 w-8 text-green-500" />
              </div>
            </div>
            <h1 className="text-2xl font-bold mb-2">Payment Successful!</h1>
            <p className="text-muted-foreground mb-6">
              Your order has been processed and your digital products are now available.
            </p>
            <div className="rounded-md border p-4 bg-secondary/30 mb-6">
              <h2 className="font-medium mb-2">Order #VR-58291</h2>
              <p className="text-sm text-muted-foreground mb-2">Date: {new Date().toLocaleDateString()}</p>
              <p className="text-sm text-muted-foreground">Total: ${total.toFixed(2)}</p>
            </div>
            <div className="space-y-4">
              <Button asChild className="w-full">
                <Link href="/account/purchases">View My Purchases</Link>
              </Button>
              <Button variant="outline" asChild className="w-full">
                <Link href="/">Continue Shopping</Link>
              </Button>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <div className="container px-4 py-8">
          <h1 className="text-3xl font-bold mb-8">Checkout</h1>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="md:col-span-2">
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle>Order Summary</CardTitle>
                  <CardDescription>Review your items before payment</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {cartItems.map((item, index) => (
                      <div key={index} className="flex items-center space-x-4">
                        <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-md border">
                          <Image
                            src={item.product.image || "/placeholder.svg"}
                            alt={item.product.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="flex-1 space-y-1">
                          <p className="font-medium">{item.product.title}</p>
                          <p className="text-sm text-muted-foreground">Qty: {item.quantity}</p>
                        </div>
                        <p className="font-medium">${(item.product.price * item.quantity).toFixed(2)}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Payment Method</CardTitle>
                  <CardDescription>Choose how you want to pay</CardDescription>
                </CardHeader>
                <CardContent>
                  <Tabs defaultValue="crypto" className="w-full">
                    <TabsList className="grid w-full grid-cols-2">
                      <TabsTrigger value="crypto">Cryptocurrency</TabsTrigger>
                      <TabsTrigger value="card" disabled>
                        Credit Card (Coming Soon)
                      </TabsTrigger>
                    </TabsList>
                    <TabsContent value="crypto" className="space-y-4">
                      <div className="rounded-md border p-4 mt-4">
                        <RadioGroup
                          defaultValue="bitcoin"
                          value={paymentMethod}
                          onValueChange={setPaymentMethod}
                          className="space-y-3"
                        >
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="bitcoin" id="bitcoin" />
                            <Label htmlFor="bitcoin" className="flex items-center">
                              <Bitcoin className="mr-2 h-4 w-4" />
                              Bitcoin (BTC)
                            </Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="usdt" id="usdt" />
                            <Label htmlFor="usdt" className="flex items-center">
                              <CreditCard className="mr-2 h-4 w-4" />
                              USDT (TRC20)
                            </Label>
                          </div>
                        </RadioGroup>
                      </div>

                      {paymentMethod === "bitcoin" && (
                        <div className="rounded-md border p-4 space-y-4">
                          <div className="text-center">
                            <p className="font-medium mb-2">Send exactly</p>
                            <p className="text-2xl font-bold">0.00124 BTC</p>
                            <p className="text-sm text-muted-foreground">(${total.toFixed(2)} USD)</p>
                          </div>
                          <div className="flex justify-center">
                            <div className="relative h-48 w-48 border-4 border-white">
                              <Image
                                src="/placeholder.svg?height=200&width=200&text=BTC+QR+Code"
                                alt="Bitcoin QR Code"
                                fill
                                className="object-cover"
                              />
                            </div>
                          </div>
                          <div className="space-y-2">
                            <p className="text-sm font-medium">Bitcoin Address:</p>
                            <div className="flex items-center space-x-2">
                              <Input
                                value="bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh"
                                readOnly
                                className="font-mono text-xs"
                              />
                              <Button variant="outline" size="sm">
                                Copy
                              </Button>
                            </div>
                          </div>
                          <div className="rounded-md bg-yellow-500/10 p-3 text-sm text-yellow-500">
                            <p>
                              <strong>Important:</strong> Send only BTC to this address. Payment will be confirmed after
                              1 network confirmation.
                            </p>
                          </div>
                        </div>
                      )}

                      {paymentMethod === "usdt" && (
                        <div className="rounded-md border p-4 space-y-4">
                          <div className="text-center">
                            <p className="font-medium mb-2">Send exactly</p>
                            <p className="text-2xl font-bold">48.98 USDT</p>
                            <p className="text-sm text-muted-foreground">(${total.toFixed(2)} USD)</p>
                          </div>
                          <div className="flex justify-center">
                            <div className="relative h-48 w-48 border-4 border-white">
                              <Image
                                src="/placeholder.svg?height=200&width=200&text=USDT+QR+Code"
                                alt="USDT QR Code"
                                fill
                                className="object-cover"
                              />
                            </div>
                          </div>
                          <div className="space-y-2">
                            <p className="text-sm font-medium">USDT Address (TRC20):</p>
                            <div className="flex items-center space-x-2">
                              <Input
                                value="TJYeasdfghjkl7890qwertyuiopzxcvbnm123"
                                readOnly
                                className="font-mono text-xs"
                              />
                              <Button variant="outline" size="sm">
                                Copy
                              </Button>
                            </div>
                          </div>
                          <div className="rounded-md bg-yellow-500/10 p-3 text-sm text-yellow-500">
                            <p>
                              <strong>Important:</strong> Send only USDT (TRC20) to this address. Payment will be
                              confirmed after network confirmation.
                            </p>
                          </div>
                        </div>
                      )}
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>
            </div>

            <div>
              <Card className="sticky top-20">
                <CardHeader>
                  <CardTitle>Order Total</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Processing Fee (5%)</span>
                    <span>${fees.toFixed(2)}</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between font-medium">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" onClick={handleCheckout} disabled={isProcessing}>
                    {isProcessing ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Processing...
                      </>
                    ) : (
                      "Complete Payment"
                    )}
                  </Button>
                </CardFooter>
              </Card>

              <div className="mt-4 rounded-lg border p-4">
                <h3 className="text-sm font-medium">Secure Checkout</h3>
                <p className="mt-2 text-xs text-muted-foreground">
                  All transactions are secure and encrypted. Your personal information is never shared with sellers. If
                  you don't receive your product, you're eligible for a full refund.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
