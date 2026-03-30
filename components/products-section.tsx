"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { ProductCard } from "./product-card"
import { ProductModal } from "./product-modal"
import type { Product } from "@/lib/products"
import { Button } from "@/components/ui/button"

interface ProductsSectionProps {
  products: Product[]
}

export function ProductsSection({ products }: ProductsSectionProps) {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
  const router = useRouter()

  // 👇 solo ofertas / destacados
  const featuredProducts = products
    .filter((product) => product.isOffer)
    .slice(0, 8)

  return (
    <section id="products" className="bg-secondary/50 px-4 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        
        {/* Header */}
        <div className="text-center">
          <span className="mb-4 inline-block text-sm font-medium uppercase tracking-wider text-muted-foreground">
            Ofertas
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Productos Destacados
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Algunos de nuestros productos en oferta. Mirá todo el catálogo completo.
          </p>
        </div>

        {/* Productos */}
        <div className="mt-12 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
          {featuredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onClick={() => setSelectedProduct(product)}
            />
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <Button
            size="lg"
            onClick={() => router.push("/productos")}
          >
            Ver catálogo completo
          </Button>
        </div>
      </div>

      {/* Modal */}
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </section>
  )
}