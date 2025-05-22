import { NextResponse } from "next/server"

// This would typically connect to a database to retrieve product keys
const productKeyDatabase = {
  "netflix-premium-1month": [
    { key: "NF-PREM-1M-12345", used: false },
    { key: "NF-PREM-1M-67890", used: false },
  ],
  "spotify-family-3month": [
    { key: "SP-FAM-3M-12345", used: false },
    { key: "SP-FAM-3M-67890", used: false },
  ],
  "steam-gift-card-50": [
    { key: "STM-GC50-12345", used: false },
    { key: "STM-GC50-67890", used: false },
  ],
  "windows-11-pro-key": [
    { key: "WIN11-PRO-12345", used: false },
    { key: "WIN11-PRO-67890", used: false },
  ],
  "chatgpt-plus-1month": [
    { key: "CGP-PLUS-1M-12345", used: false },
    { key: "CGP-PLUS-1M-67890", used: false },
  ],
}

export async function POST(request: Request) {
  try {
    const { productId, orderId } = await request.json()

    // Validate request
    if (!productId) {
      return NextResponse.json({ success: false, error: "Product ID is required" }, { status: 400 })
    }

    // Check if product exists in database
    if (!productKeyDatabase[productId]) {
      return NextResponse.json({ success: false, error: "Product not found" }, { status: 404 })
    }

    // Find an unused key
    const availableKey = productKeyDatabase[productId].find((item) => !item.used)

    if (!availableKey) {
      return NextResponse.json({ success: false, error: "No keys available for this product" }, { status: 409 })
    }

    // Mark key as used (in a real system, this would update the database)
    availableKey.used = true

    // In a real system, we would also record the order ID and user who received this key

    // Simulate processing delay
    await new Promise((resolve) => setTimeout(resolve, 500))

    // Return the key
    return NextResponse.json({
      success: true,
      key: availableKey.key,
      orderId,
      deliveredAt: new Date().toISOString(),
    })
  } catch (error) {
    console.error("Error in delivery API:", error)
    return NextResponse.json({ success: false, error: "Internal server error" }, { status: 500 })
  }
}
