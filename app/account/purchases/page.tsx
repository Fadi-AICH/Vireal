import Image from "next/image"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { mockProducts } from "@/lib/utils"
import { Download, ExternalLink, User } from "lucide-react"

export default function PurchasesPage() {
  // Mock purchases based on our products
  const purchases = [
    {
      id: "ORD-7245",
      date: "2023-06-12",
      product: mockProducts[0],
      status: "Delivered",
    },
    {
      id: "ORD-7240",
      date: "2023-06-05",
      product: mockProducts[2],
      status: "Delivered",
    },
    {
      id: "ORD-7235",
      date: "2023-05-28",
      product: mockProducts[4],
      status: "Delivered",
    },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <div className="container px-4 py-8">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/4">
              <Card>
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="h-12 w-12 rounded-full bg-secondary flex items-center justify-center">
                      <User className="h-6 w-6" />
                    </div>
                    <div>
                      <CardTitle>John Doe</CardTitle>
                      <CardDescription>john.doe@example.com</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <nav className="space-y-2">
                    <Button variant="ghost" className="w-full justify-start" asChild>
                      <Link href="/account">Account Overview</Link>
                    </Button>
                    <Button variant="ghost" className="w-full justify-start bg-secondary/50" asChild>
                      <Link href="/account/purchases">My Purchases</Link>
                    </Button>
                    <Button variant="ghost" className="w-full justify-start" asChild>
                      <Link href="/account/settings">Settings</Link>
                    </Button>
                    <Button variant="ghost" className="w-full justify-start text-destructive" asChild>
                      <Link href="/auth/login">Sign Out</Link>
                    </Button>
                  </nav>
                </CardContent>
              </Card>
            </div>

            <div className="md:w-3/4">
              <h1 className="text-3xl font-bold mb-6">My Purchases</h1>

              <Tabs defaultValue="all" className="space-y-4">
                <TabsList>
                  <TabsTrigger value="all">All Purchases</TabsTrigger>
                  <TabsTrigger value="active">Active</TabsTrigger>
                  <TabsTrigger value="expired">Expired</TabsTrigger>
                </TabsList>
                <TabsContent value="all" className="space-y-4">
                  {purchases.map((purchase) => (
                    <Card key={purchase.id} className="overflow-hidden">
                      <CardContent className="p-0">
                        <div className="flex flex-col sm:flex-row">
                          <div className="relative h-32 w-full sm:h-auto sm:w-32 flex-shrink-0">
                            <Image
                              src={purchase.product.image || "/placeholder.svg"}
                              alt={purchase.product.title}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div className="flex flex-1 flex-col p-4">
                            <div className="mb-2 flex items-start justify-between">
                              <div>
                                <h3 className="font-medium">{purchase.product.title}</h3>
                                <p className="text-sm text-muted-foreground">Order #{purchase.id}</p>
                              </div>
                              <span
                                className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                                  purchase.status === "Delivered"
                                    ? "bg-green-500/10 text-green-500"
                                    : "bg-blue-500/10 text-blue-500"
                                }`}
                              >
                                {purchase.status}
                              </span>
                            </div>
                            <div className="mt-2 flex items-center text-sm text-muted-foreground">
                              <span>Purchased on {purchase.date}</span>
                              <span className="mx-2">•</span>
                              <span>${purchase.product.price.toFixed(2)}</span>
                            </div>
                            <div className="mt-4 flex space-x-2">
                              <Button size="sm">
                                <Download className="mr-2 h-4 w-4" />
                                Access Product
                              </Button>
                              <Button size="sm" variant="outline">
                                <ExternalLink className="mr-2 h-4 w-4" />
                                View Details
                              </Button>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </TabsContent>
                <TabsContent value="active" className="space-y-4">
                  {purchases
                    .filter((p) => p.status === "Delivered")
                    .map((purchase) => (
                      <Card key={purchase.id} className="overflow-hidden">
                        <CardContent className="p-0">
                          <div className="flex flex-col sm:flex-row">
                            <div className="relative h-32 w-full sm:h-auto sm:w-32 flex-shrink-0">
                              <Image
                                src={purchase.product.image || "/placeholder.svg"}
                                alt={purchase.product.title}
                                fill
                                className="object-cover"
                              />
                            </div>
                            <div className="flex flex-1 flex-col p-4">
                              <div className="mb-2 flex items-start justify-between">
                                <div>
                                  <h3 className="font-medium">{purchase.product.title}</h3>
                                  <p className="text-sm text-muted-foreground">Order #{purchase.id}</p>
                                </div>
                                <span className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium bg-green-500/10 text-green-500">
                                  {purchase.status}
                                </span>
                              </div>
                              <div className="mt-2 flex items-center text-sm text-muted-foreground">
                                <span>Purchased on {purchase.date}</span>
                                <span className="mx-2">•</span>
                                <span>${purchase.product.price.toFixed(2)}</span>
                              </div>
                              <div className="mt-4 flex space-x-2">
                                <Button size="sm">
                                  <Download className="mr-2 h-4 w-4" />
                                  Access Product
                                </Button>
                                <Button size="sm" variant="outline">
                                  <ExternalLink className="mr-2 h-4 w-4" />
                                  View Details
                                </Button>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                </TabsContent>
                <TabsContent value="expired" className="space-y-4">
                  <div className="flex flex-col items-center justify-center py-12 text-center">
                    <p className="text-muted-foreground mb-4">You don't have any expired purchases.</p>
                    <Button asChild>
                      <Link href="/">Browse Products</Link>
                    </Button>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
