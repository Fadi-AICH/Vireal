import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowUpRight, Package } from "lucide-react"

export default function SellerDashboard() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <div className="container px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold">Seller Dashboard</h1>
            <p className="text-muted-foreground">Manage your products, orders, and earnings</p>
          </div>
          <Button className="mt-4 md:mt-0">
            <Package className="mr-2 h-4 w-4" />
            Add New Product
          </Button>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 mb-8">
          <Card className="bg-gradient-to-br from-primary/10 to-background">
            <CardHeader className="pb-2">
              <CardDescription>Total Sales</CardDescription>
              <CardTitle className="text-2xl">$1,248.42</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center text-sm text-muted-foreground">
                <ArrowUpRight className="mr-1 h-4 w-4 text-green-500" />
                <span className="text-green-500">+12.5%</span>
                <span className="ml-1">from last month</span>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-accent/10 to-background">
            <CardHeader className="pb-2">
              <CardDescription>Products Sold</CardDescription>
              <CardTitle className="text-2xl">48</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center text-sm text-muted-foreground">
                <ArrowUpRight className="mr-1 h-4 w-4 text-green-500" />
                <span className="text-green-500">+8.2%</span>
                <span className="ml-1">from last month</span>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardDescription>Active Products</CardDescription>
              <CardTitle className="text-2xl">12</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center text-sm text-muted-foreground">
                <span>4 pending approval</span>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardDescription>Customers</CardDescription>
              <CardTitle className="text-2xl">36</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center text-sm text-muted-foreground">
                <span>8 returning customers</span>
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="products" className="space-y-4">
          <TabsList>
            <TabsTrigger value="products">Products</TabsTrigger>
            <TabsTrigger value="orders">Orders</TabsTrigger>
            <TabsTrigger value="earnings">Earnings</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>
          <TabsContent value="products" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Your Products</CardTitle>
                <CardDescription>Manage your digital products and listings</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="rounded-md border">
                  <div className="grid grid-cols-5 gap-4 p-4 font-medium">
                    <div>Product</div>
                    <div>Category</div>
                    <div>Price</div>
                    <div>Status</div>
                    <div>Actions</div>
                  </div>
                  <div className="divide-y divide-border">
                    {[
                      {
                        name: "Netflix Premium 1 Month",
                        category: "Streaming",
                        price: "$5.99",
                        status: "Active",
                      },
                      {
                        name: "Windows 11 Pro Key",
                        category: "Software",
                        price: "$24.99",
                        status: "Active",
                      },
                      {
                        name: "Steam Gift Card $50",
                        category: "Games",
                        price: "$42.99",
                        status: "Active",
                      },
                      {
                        name: "ChatGPT Plus 1 Month",
                        category: "AI Tools",
                        price: "$15.99",
                        status: "Pending",
                      },
                    ].map((product, i) => (
                      <div key={i} className="grid grid-cols-5 gap-4 p-4">
                        <div className="font-medium">{product.name}</div>
                        <div className="text-muted-foreground">{product.category}</div>
                        <div>{product.price}</div>
                        <div>
                          <span
                            className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                              product.status === "Active"
                                ? "bg-green-500/10 text-green-500"
                                : "bg-yellow-500/10 text-yellow-500"
                            }`}
                          >
                            {product.status}
                          </span>
                        </div>
                        <div>
                          <div className="flex space-x-2">
                            <Button variant="outline" size="sm">
                              Edit
                            </Button>
                            <Button variant="outline" size="sm" className="text-destructive">
                              Delete
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="orders" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Recent Orders</CardTitle>
                <CardDescription>View and manage your recent orders</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="rounded-md border">
                  <div className="grid grid-cols-5 gap-4 p-4 font-medium">
                    <div>Order ID</div>
                    <div>Product</div>
                    <div>Customer</div>
                    <div>Date</div>
                    <div>Status</div>
                  </div>
                  <div className="divide-y divide-border">
                    {[
                      {
                        id: "#ORD-7245",
                        product: "Netflix Premium 1 Month",
                        customer: "john.doe@example.com",
                        date: "2023-06-12",
                        status: "Delivered",
                      },
                      {
                        id: "#ORD-7244",
                        product: "Windows 11 Pro Key",
                        customer: "jane.smith@example.com",
                        date: "2023-06-11",
                        status: "Delivered",
                      },
                      {
                        id: "#ORD-7243",
                        product: "Steam Gift Card $50",
                        customer: "mike.brown@example.com",
                        date: "2023-06-10",
                        status: "Delivered",
                      },
                      {
                        id: "#ORD-7242",
                        product: "ChatGPT Plus 1 Month",
                        customer: "sarah.wilson@example.com",
                        date: "2023-06-09",
                        status: "Processing",
                      },
                    ].map((order, i) => (
                      <div key={i} className="grid grid-cols-5 gap-4 p-4">
                        <div className="font-medium">{order.id}</div>
                        <div className="text-muted-foreground">{order.product}</div>
                        <div className="text-muted-foreground">{order.customer}</div>
                        <div className="text-muted-foreground">{order.date}</div>
                        <div>
                          <span
                            className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                              order.status === "Delivered"
                                ? "bg-green-500/10 text-green-500"
                                : "bg-blue-500/10 text-blue-500"
                            }`}
                          >
                            {order.status}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="earnings" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Earnings Overview</CardTitle>
                <CardDescription>Track your earnings and payouts</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-8">
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                    <Card>
                      <CardHeader className="pb-2">
                        <CardDescription>Available Balance</CardDescription>
                        <CardTitle className="text-2xl">$842.18</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <Button size="sm">Withdraw</Button>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader className="pb-2">
                        <CardDescription>Pending</CardDescription>
                        <CardTitle className="text-2xl">$156.24</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-xs text-muted-foreground">Available in 7 days</p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader className="pb-2">
                        <CardDescription>Lifetime Earnings</CardDescription>
                        <CardTitle className="text-2xl">$4,892.65</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-xs text-muted-foreground">Since June 2022</p>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="rounded-md border">
                    <div className="grid grid-cols-4 gap-4 p-4 font-medium">
                      <div>Date</div>
                      <div>Type</div>
                      <div>Amount</div>
                      <div>Status</div>
                    </div>
                    <div className="divide-y divide-border">
                      {[
                        {
                          date: "2023-06-01",
                          type: "Payout (BTC)",
                          amount: "$250.00",
                          status: "Completed",
                        },
                        {
                          date: "2023-05-15",
                          type: "Payout (USDT)",
                          amount: "$500.00",
                          status: "Completed",
                        },
                        {
                          date: "2023-05-01",
                          type: "Payout (BTC)",
                          amount: "$300.00",
                          status: "Completed",
                        },
                        {
                          date: "2023-04-15",
                          type: "Payout (USDT)",
                          amount: "$450.00",
                          status: "Completed",
                        },
                      ].map((transaction, i) => (
                        <div key={i} className="grid grid-cols-4 gap-4 p-4">
                          <div className="font-medium">{transaction.date}</div>
                          <div className="text-muted-foreground">{transaction.type}</div>
                          <div>{transaction.amount}</div>
                          <div>
                            <span className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium bg-green-500/10 text-green-500">
                              {transaction.status}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="analytics" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Performance Analytics</CardTitle>
                <CardDescription>Track your sales performance and customer metrics</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-8">
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg">Top Selling Products</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-4">
                          {[
                            { name: "Netflix Premium 1 Month", sales: 24, revenue: "$143.76" },
                            { name: "Windows 11 Pro Key", sales: 18, revenue: "$449.82" },
                            { name: "Steam Gift Card $50", sales: 12, revenue: "$515.88" },
                            { name: "ChatGPT Plus 1 Month", sales: 8, revenue: "$127.92" },
                          ].map((product, i) => (
                            <li key={i} className="flex items-center justify-between">
                              <div>
                                <p className="font-medium">{product.name}</p>
                                <p className="text-sm text-muted-foreground">{product.sales} sales</p>
                              </div>
                              <p className="font-medium">{product.revenue}</p>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg">Customer Demographics</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div>
                            <p className="text-sm font-medium mb-1">Top Countries</p>
                            <div className="space-y-2">
                              {[
                                { country: "United States", percentage: 45 },
                                { country: "United Kingdom", percentage: 20 },
                                { country: "Canada", percentage: 15 },
                                { country: "Australia", percentage: 10 },
                                { country: "Other", percentage: 10 },
                              ].map((country, i) => (
                                <div key={i} className="space-y-1">
                                  <div className="flex items-center justify-between text-xs">
                                    <span>{country.country}</span>
                                    <span>{country.percentage}%</span>
                                  </div>
                                  <div className="h-1.5 w-full rounded-full bg-secondary">
                                    <div
                                      className="h-1.5 rounded-full bg-primary"
                                      style={{ width: `${country.percentage}%` }}
                                    ></div>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
      <Footer />
    </div>
  )
}
