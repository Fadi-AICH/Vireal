"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Loader2, CheckCircle, Copy, Download } from "lucide-react"

interface AutoDeliveryProps {
  productId: string
  orderId: string
  productName: string
}

export function AutoDelivery({ productId, orderId, productName }: AutoDeliveryProps) {
  const [isLoading, setIsLoading] = useState(false)
  const [isDelivered, setIsDelivered] = useState(false)
  const [productKey, setProductKey] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)

  const handleDelivery = async () => {
    setIsLoading(true)
    setError(null)

    try {
      const response = await fetch("/api/delivery", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ productId, orderId }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || "Failed to deliver product")
      }

      setProductKey(data.key)
      setIsDelivered(true)
    } catch (err) {
      setError(err instanceof Error ? err.message : "An unknown error occurred")
    } finally {
      setIsLoading(false)
    }
  }

  const copyToClipboard = () => {
    if (productKey) {
      navigator.clipboard.writeText(productKey)
    }
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Product Delivery</CardTitle>
        <CardDescription>Access your digital product instantly</CardDescription>
      </CardHeader>
      <CardContent>
        {!isDelivered ? (
          <div className="text-center py-6">
            <p className="mb-6">Click the button below to receive your {productName} instantly.</p>
            {error && <p className="text-destructive mb-4">{error}</p>}
            <Button onClick={handleDelivery} disabled={isLoading} className="w-full">
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Processing...
                </>
              ) : (
                <>
                  <Download className="mr-2 h-4 w-4" />
                  Deliver Product
                </>
              )}
            </Button>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="flex items-center justify-center py-4">
              <div className="rounded-full bg-green-500/20 p-3">
                <CheckCircle className="h-8 w-8 text-green-500" />
              </div>
            </div>
            <div className="text-center">
              <h3 className="font-medium mb-2">Product Delivered Successfully!</h3>
              <p className="text-sm text-muted-foreground mb-4">Your product key is ready to use</p>
            </div>
            <div className="rounded-md bg-secondary p-4">
              <div className="flex items-center justify-between">
                <code className="text-sm font-mono">{productKey}</code>
                <Button variant="ghost" size="sm" onClick={copyToClipboard}>
                  <Copy className="h-4 w-4" />
                </Button>
              </div>
            </div>
            <div className="rounded-md bg-blue-500/10 p-4 text-sm text-blue-500">
              <p>
                <strong>Instructions:</strong> Use this key to activate your product. For detailed instructions, please
                check your email or the product documentation.
              </p>
            </div>
          </div>
        )}
      </CardContent>
      <CardFooter className="flex justify-between">
        <p className="text-xs text-muted-foreground">Order #{orderId}</p>
        {isDelivered && (
          <Button variant="outline" size="sm" onClick={copyToClipboard}>
            <Copy className="mr-2 h-4 w-4" />
            Copy Key
          </Button>
        )}
      </CardFooter>
    </Card>
  )
}
