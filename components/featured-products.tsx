"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { ProductCard } from "./product-card"
import { ProductModal } from "./product-modal"
import type { Product } from "@/lib/products"

interface FeaturedProductsProps {
  products: Product[]
}

export function FeaturedProducts({ products }: FeaturedProductsProps) {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)

  // Show only 8 featured products (prioritize mas-vendido and nuevo tags)
  const featuredProducts = products
    .sort((a, b) => {
      const aScore = a.tags.includes("mas-vendido") ? 2 : a.tags.includes("nuevo") ? 1 : 0
      const bScore = b.tags.includes("mas-vendido") ? 2 : b.tags.includes("nuevo") ? 1 : 0
      return bScore - aScore
    })
    .slice(0, 8)

  return (
    <section id="products" className="bg-secondary/30 px-4 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row md:items-end">
          <div>
            <span className="mb-2 inline-block text-sm font-medium uppercase tracking-wider text-muted-foreground">
              Lo mas buscado
            </span>
            <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Productos Destacados
            </h2>
          </div>
          <Link 
            href="/productos"
            className="group flex items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-muted-foreground"
          >
            Ver todo el catalogo
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featuredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onClick={() => setSelectedProduct(product)}
            />
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Link
            href="/productos"
            className="inline-flex items-center gap-2 rounded-lg bg-foreground px-8 py-3 text-sm font-medium text-background transition-colors hover:bg-foreground/90"
          >
            Ver todos los productos
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>

      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </section>
  )
}
