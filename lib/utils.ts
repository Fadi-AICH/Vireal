import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Update the mockCategories with more realistic images
export const mockCategories = [
  {
    id: "games",
    name: "Games",
    description: "Game keys, gift cards, and in-game items",
    image: "/placeholder.svg?height=300&width=300&text=Games",
    count: 156,
  },
  {
    id: "streaming",
    name: "Streaming",
    description: "Netflix, Spotify, Disney+, and more",
    image: "/placeholder.svg?height=300&width=300&text=Streaming",
    count: 89,
  },
  {
    id: "software",
    name: "Software",
    description: "Windows, Office, Adobe, and more",
    image: "/placeholder.svg?height=300&width=300&text=Software",
    count: 72,
  },
  {
    id: "ai-tools",
    name: "AI Tools",
    description: "ChatGPT, Midjourney, and AI software",
    image: "/placeholder.svg?height=300&width=300&text=AI+Tools",
    count: 43,
  },
  {
    id: "mystery",
    name: "Mystery Packs",
    description: "Surprise digital bundles and packs",
    image: "/placeholder.svg?height=300&width=300&text=Mystery",
    count: 21,
  },
]

// Update the mockProducts with more realistic images
export const mockProducts = [
  {
    id: "netflix-premium-1month",
    title: "Netflix Premium 1 Month Shared Account",
    image: "/placeholder.svg?height=400&width=600&text=Netflix+Premium",
    price: 5.99,
    category: "Streaming",
    rating: 4.8,
    seller: "DigitalKing",
    deliveryTime: "Instant",
    featured: true,
    description: "Access to all Netflix content in 4K Ultra HD with HDR. Share with up to 4 screens simultaneously.",
  },
  {
    id: "spotify-family-3month",
    title: "Spotify Family Plan 3 Months",
    image: "/placeholder.svg?height=400&width=600&text=Spotify+Family",
    price: 12.99,
    category: "Streaming",
    rating: 4.7,
    seller: "StreamMaster",
    deliveryTime: "5 min",
    featured: false,
    description:
      "Premium Spotify access for up to 6 family members living under one roof. Ad-free music listening and offline playback.",
  },
  {
    id: "steam-gift-card-50",
    title: "Steam Gift Card $50",
    image: "/placeholder.svg?height=400&width=600&text=Steam+Gift+Card",
    price: 42.99,
    category: "Games",
    rating: 4.9,
    seller: "GameDeals",
    deliveryTime: "Instant",
    featured: true,
    description: "Add $50 to your Steam Wallet. Buy games, in-game items, hardware, and more on Steam.",
  },
  {
    id: "windows-11-pro-key",
    title: "Windows 11 Pro License Key",
    image: "/placeholder.svg?height=400&width=600&text=Windows+11+Pro",
    price: 24.99,
    category: "Software",
    rating: 4.6,
    seller: "SoftwareHub",
    deliveryTime: "Instant",
    featured: false,
    description: "Genuine Windows 11 Pro activation key. Lifetime license for 1 PC. Includes all Pro features.",
  },
  {
    id: "chatgpt-plus-1month",
    title: "ChatGPT Plus 1 Month Subscription",
    image: "/placeholder.svg?height=400&width=600&text=ChatGPT+Plus",
    price: 15.99,
    category: "AI Tools",
    rating: 4.5,
    seller: "AIAccess",
    deliveryTime: "10 min",
    featured: true,
    description:
      "Priority access to ChatGPT during peak times. Faster response times and access to GPT-4 capabilities.",
  },
  {
    id: "gamer-mystery-pack",
    title: "Gamer Mystery Pack - 5 Random Steam Keys",
    image: "/placeholder.svg?height=400&width=600&text=Mystery+Pack",
    price: 9.99,
    category: "Mystery",
    rating: 4.2,
    seller: "LuckyDrop",
    deliveryTime: "Instant",
    featured: false,
    description:
      "5 random Steam game keys. Games range from indie to AAA titles. Total value guaranteed to exceed purchase price.",
  },
  {
    id: "adobe-cc-1year",
    title: "Adobe Creative Cloud 1 Year License",
    image: "/placeholder.svg?height=400&width=600&text=Adobe+CC",
    price: 149.99,
    category: "Software",
    rating: 4.7,
    seller: "CreativeTools",
    deliveryTime: "1 hour",
    featured: false,
    description:
      "Full access to all Adobe Creative Cloud apps including Photoshop, Illustrator, Premiere Pro, and more for 1 year.",
  },
  {
    id: "crypto-starter-pack",
    title: "Crypto Bro Starter Pack - Tools & Guides",
    image: "/placeholder.svg?height=400&width=600&text=Crypto+Pack",
    price: 29.99,
    category: "Mystery",
    rating: 4.4,
    seller: "CryptoGuru",
    deliveryTime: "Instant",
    featured: false,
    description:
      "Complete package for crypto beginners. Includes trading tools, premium guides, and access to exclusive signals group.",
  },
]

export const mockTestimonials = [
  {
    id: "1",
    name: "Alex Johnson",
    avatar: "/placeholder.svg?height=100&width=100",
    role: "Gamer",
    content:
      "VIREAL is my go-to for game keys. The prices are unbeatable and delivery is always instant. Never had any issues!",
    rating: 5,
  },
  {
    id: "2",
    name: "Sarah Chen",
    avatar: "/placeholder.svg?height=100&width=100",
    role: "Software Developer",
    content:
      "I've been using VIREAL for software licenses for my team. The process is smooth and the customer service is excellent.",
    rating: 4,
  },
  {
    id: "3",
    name: "Michael Rodriguez",
    avatar: "/placeholder.svg?height=100&width=100",
    role: "Content Creator",
    content:
      "The streaming accounts I've purchased have been reliable and the AI tools section is a goldmine for creators like me.",
    rating: 5,
  },
]
