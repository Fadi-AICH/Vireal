import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AlertTriangle, ArrowUpRight, CheckCircle } from "lucide-react"

export default function AdminDashboard() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <div className="container px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold">Admin Dashboard</h1>
            <p className="text-muted-foreground">Manage the VIREAL marketplace</p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 mb-8">
          <Card className="bg-gradient-to-br from-primary/10 to-background">
            <CardHeader className="pb-2">
              <CardDescription>Total Revenue</CardDescription>
              <CardTitle className="text-2xl">$24,892.65</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center text-sm text-muted-foreground">
                <ArrowUpRight className="mr-1 h-4 w-4 text-green-500" />
                <span className="text-green-500">+18.2%</span>
                <span className="ml-1">from last month</span>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-accent/10 to-background">
            <CardHeader className="pb-2">
              <CardDescription>Total Users</CardDescription>
              <CardTitle className="text-2xl">1,248</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center text-sm text-muted-foreground">
                <ArrowUpRight className="mr-1 h-4 w-4 text-green-500" />
                <span className="text-green-500">+12.5%</span>
                <span className="ml-1">from last month</span>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardDescription>Active Products</CardDescription>
              <CardTitle className="text-2xl">356</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center text-sm text-muted-foreground">
                <span>24 pending approval</span>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardDescription>Completed Orders</CardDescription>
              <CardTitle className="text-2xl">892</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center text-sm text-muted-foreground">
                <span>12 pending delivery</span>
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="products" className="space-y-4">
          <TabsList>
            <TabsTrigger value="products">Products</TabsTrigger>
            <TabsTrigger value="users">Users</TabsTrigger>
            <TabsTrigger value="orders">Orders</TabsTrigger>
            <TabsTrigger value="reports">Reports</TabsTrigger>
          </TabsList>
          <TabsContent value="products" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Products Pending Approval</CardTitle>
                <CardDescription>Review and approve new product listings</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="rounded-md border">
                  <div className="grid grid-cols-6 gap-4 p-4 font-medium">
                    <div>Product</div>
                    <div>Category</div>
                    <div>Price</div>
                    <div>Seller</div>
                    <div>Date</div>
                    <div>Actions</div>
                  </div>
                  <div className="divide-y divide-border">
                    {[
                      {
                        name: "Disney+ Premium 1 Month",
                        category: "Streaming",
                        price: "$6.99",
                        seller: "StreamMaster",
                        date: "2023-06-12",
                      },
                      {
                        name: "Office 365 License Key",
                        category: "Software",
                        price: "$29.99",
                        seller: "SoftwareHub",
                        date: "2023-06-11",
                      },
                      {
                        name: "PlayStation Gift Card $20",
                        category: "Games",
                        price: "$18.99",
                        seller: "GameDeals",
                        date: "2023-06-10",
                      },
                      {
                        name: "Midjourney 1 Month Access",
                        category: "AI Tools",
                        price: "$19.99",
                        seller: "AIAccess",
                        date: "2023-06-09",
                      },
                    ].map((product, i) => (
                      <div key={i} className="grid grid-cols-6 gap-4 p-4">
                        <div className="font-medium">{product.name}</div>
                        <div className="text-muted-foreground">{product.category}</div>
                        <div>{product.price}</div>
                        <div className="text-muted-foreground">{product.seller}</div>
                        <div className="text-muted-foreground">{product.date}</div>
                        <div>
                          <div className="flex space-x-2">
                            <Button variant="outline" size="sm" className="text-green-500">
                              <CheckCircle className="mr-1 h-4 w-4" />
                              Approve
                            </Button>
                            <Button variant="outline" size="sm" className="text-destructive">
                              <AlertTriangle className="mr-1 h-4 w-4" />
                              Reject
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
          <TabsContent value="users" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>User Management</CardTitle>
                <CardDescription>View and manage user accounts</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="rounded-md border">
                  <div className="grid grid-cols-5 gap-4 p-4 font-medium">
                    <div>User</div>
                    <div>Role</div>
                    <div>Joined</div>
                    <div>Status</div>
                    <div>Actions</div>
                  </div>
                  <div className="divide-y divide-border">
                    {[
                      {
                        email: "john.doe@example.com",
                        role: "Buyer",
                        joined: "2023-01-15",
                        status: "Active",
                      },
                      {
                        email: "jane.smith@example.com",
                        role: "Seller",
                        joined: "2023-02-20",
                        status: "Active",
                      },
                      {
                        email: "mike.brown@example.com",
                        role: "Buyer",
                        joined: "2023-03-10",
                        status: "Active",
                      },
                      {
                        email: "sarah.wilson@example.com",
                        role: "Seller",
                        joined: "2023-04-05",
                        status: "Suspended",
                      },
                    ].map((user, i) => (
                      <div key={i} className="grid grid-cols-5 gap-4 p-4">
                        <div className="font-medium">{user.email}</div>
                        <div className="text-muted-foreground">{user.role}</div>
                        <div className="text-muted-foreground">{user.joined}</div>
                        <div>
                          <span
                            className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                              user.status === "Active" ? "bg-green-500/10 text-green-500" : "bg-red-500/10 text-red-500"
                            }`}
                          >
                            {user.status}
                          </span>
                        </div>
                        <div>
                          <div className="flex space-x-2">
                            <Button variant="outline" size="sm">
                              View
                            </Button>
                            {user.status === "Active" ? (
                              <Button variant="outline" size="sm" className="text-destructive">
                                Suspend
                              </Button>
                            ) : (
                              <Button variant="outline" size="sm" className="text-green-500">
                                Activate
                              </Button>
                            )}
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
                <CardDescription>View and manage recent orders</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="rounded-md border">
                  <div className="grid grid-cols-6 gap-4 p-4 font-medium">
                    <div>Order ID</div>
                    <div>Product</div>
                    <div>Customer</div>
                    <div>Seller</div>
                    <div>Date</div>
                    <div>Status</div>
                  </div>
                  <div className="divide-y divide-border">
                    {[
                      {
                        id: "#ORD-7245",
                        product: "Netflix Premium 1 Month",
                        customer: "john.doe@example.com",
                        seller: "DigitalKing",
                        date: "2023-06-12",
                        status: "Delivered",
                      },
                      {
                        id: "#ORD-7244",
                        product: "Windows 11 Pro Key",
                        customer: "jane.smith@example.com",
                        seller: "SoftwareHub",
                        date: "2023-06-11",
                        status: "Delivered",
                      },
                      {
                        id: "#ORD-7243",
                        product: "Steam Gift Card $50",
                        customer: "mike.brown@example.com",
                        seller: "GameDeals",
                        date: "2023-06-10",
                        status: "Delivered",
                      },
                      {
                        id: "#ORD-7242",
                        product: "ChatGPT Plus 1 Month",
                        customer: "sarah.wilson@example.com",
                        seller: "AIAccess",
                        date: "2023-06-09",
                        status: "Processing",
                      },
                    ].map((order, i) => (
                      <div key={i} className="grid grid-cols-6 gap-4 p-4">
                        <div className="font-medium">{order.id}</div>
                        <div className="text-muted-foreground">{order.product}</div>
                        <div className="text-muted-foreground">{order.customer}</div>
                        <div className="text-muted-foreground">{order.seller}</div>
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
          <TabsContent value="reports" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Reported Issues</CardTitle>
                <CardDescription>Handle customer reports and disputes</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="rounded-md border">
                  <div className="grid grid-cols-5 gap-4 p-4 font-medium">
                    <div>Report ID</div>
                    <div>Issue</div>
                    <div>Order</div>
                    <div>Date</div>
                    <div>Actions</div>
                  </div>
                  <div className="divide-y divide-border">
                    {[
                      {
                        id: "#REP-245",
                        issue: "Product not working",
                        order: "#ORD-7240",
                        date: "2023-06-08",
                      },
                      {
                        id: "#REP-244",
                        issue: "Wrong product delivered",
                        order: "#ORD-7235",
                        date: "2023-06-07",
                      },
                      {
                        id: "#REP-243",
                        issue: "Account access issues",
                        order: "#ORD-7230",
                        date: "2023-06-06",
                      },
                      {
                        id: "#REP-242",
                        issue: "Refund request",
                        order: "#ORD-7225",
                        date: "2023-06-05",
                      },
                    ].map((report, i) => (
                      <div key={i} className="grid grid-cols-5 gap-4 p-4">
                        <div className="font-medium">{report.id}</div>
                        <div className="text-muted-foreground">{report.issue}</div>
                        <div className="text-muted-foreground">{report.order}</div>
                        <div className="text-muted-foreground">{report.date}</div>
                        <div>
                          <div className="flex space-x-2">
                            <Button variant="outline" size="sm">
                              Review
                            </Button>
                            <Button variant="outline" size="sm" className="text-green-500">
                              Resolve
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
        </Tabs>
      </div>
      <Footer />
    </div>
  )
}
