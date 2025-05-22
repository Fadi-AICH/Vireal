import { cn } from "@/lib/utils"
import Link from "next/link"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { ShoppingCart, Star } from "lucide-react"

export interface ProductCardProps {
  id: string
  title: string
  image: string
  price: number
  category: string
  rating: number
  seller: string
  deliveryTime: string
  featured?: boolean
}

export function ProductCard({
  id,
  title,
  image,
  price,
  category,
  rating,
  seller,
  deliveryTime,
  featured = false,
}: ProductCardProps) {
  return (
    <Card
      className={cn(
        "overflow-hidden transition-all duration-300 group hover:shadow-lg hover:shadow-indigo-500/10 hover:border-indigo-500/50 bg-black/20 backdrop-blur-sm border-indigo-900/30",
        featured && "border-purple-500/30 ring-1 ring-purple-500/20",
      )}
    >
      <Link href={`/product/${id}`} scroll={true}>
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <Badge className="absolute top-2 right-2 bg-indigo-600 hover:bg-indigo-700">{category}</Badge>
          {featured && (
            <div className="absolute top-2 left-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs px-2 py-1 rounded-md">
              Featured
            </div>
          )}
        </div>
      </Link>
      <CardContent className="p-4">
        <div className="space-y-2">
          <Link href={`/product/${id}`} className="block" scroll={true}>
            <h3 className="font-medium line-clamp-2 group-hover:text-indigo-400 transition-colors">{title}</h3>
          </Link>
          <div className="flex items-center justify-between">
            <p className="font-bold text-lg text-purple-400">${price.toFixed(2)}</p>
            <div className="flex items-center text-amber-500">
              <Star className="h-4 w-4 fill-current" />
              <span className="ml-1 text-xs">{rating.toFixed(1)}</span>
            </div>
          </div>
          <div className="flex flex-col space-y-1 text-xs text-muted-foreground">
            <p>
              Seller: <span className="text-indigo-400">{seller}</span>
            </p>
            <p>
              Delivery: <span className="text-green-400">{deliveryTime}</span>
            </p>
          </div>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button
          className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700"
          size="sm"
          asChild
        >
          <Link href={`/product/${id}`} scroll={true}>
            <ShoppingCart className="mr-2 h-4 w-4" />
            View Product
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
