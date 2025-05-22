import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"

interface Category {
  id: string
  name: string
  description: string
  image: string
  count: number
}

interface CategorySectionProps {
  categories: Category[]
}

export function CategorySection({ categories }: CategorySectionProps) {
  return (
    <section className="py-16 bg-gradient-to-b from-background to-indigo-950/20">
      <div className="container px-4">
        <div className="flex items-center justify-between mb-10">
          <div>
            <h2 className="text-3xl font-bold mb-2">Browse Categories</h2>
            <p className="text-muted-foreground">Find exactly what you're looking for</p>
          </div>
          <Button
            variant="ghost"
            size="sm"
            className="text-indigo-400 hover:text-indigo-300 hover:bg-indigo-950/30"
            asChild
          >
            <Link href="/categories" className="group" scroll={true}>
              View All
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {categories.map((category, index) => (
            <Link key={category.id} href={`/category/${category.id}`} scroll={true}>
              <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/10 hover:border-indigo-500/50 bg-black/20 backdrop-blur-sm border-indigo-900/30">
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={category.image || "/placeholder.svg"}
                    alt={category.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                    <div className="p-4 w-full">
                      <h3 className="font-medium text-white">{category.name}</h3>
                    </div>
                  </div>
                </div>
                <CardContent className="p-4">
                  <div className="flex justify-between items-center">
                    <p className="text-xs text-muted-foreground">{category.count} products</p>
                    <span className="text-xs text-indigo-400 bg-indigo-950/50 px-2 py-1 rounded-full">Explore</span>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
