import { ProductCard } from "@/components/product-card"

interface FeaturedProductsProps {
  products: any[]
  title: string
}

export function FeaturedProducts({ products, title }: FeaturedProductsProps) {
  return (
    <section className="py-16">
      <div className="container px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-3">{title}</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              title={product.title}
              image={product.image}
              price={product.price}
              category={product.category}
              rating={product.rating}
              seller={product.seller}
              deliveryTime={product.deliveryTime}
              featured={product.featured}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
