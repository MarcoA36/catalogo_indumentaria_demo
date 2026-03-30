"use client"

import { useState } from "react"
import { ProductCard } from "./product-card"
import { ProductModal } from "./product-modal"
import type { Product } from "@/lib/products"
import { categories } from "@/lib/products"

interface ProductsSectionProps {
  products: Product[]
  searchQuery: string
}

export function ProductsSection({ products, searchQuery }: ProductsSectionProps) {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
  const [selectedCategory, setSelectedCategory] = useState("Todos")

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory === "Todos" || product.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <section id="products" className="bg-secondary/50 px-4 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <span className="mb-4 inline-block text-sm font-medium uppercase tracking-wider text-muted-foreground">
            Catalogo
          </span>
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Nuestros Productos
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-pretty text-muted-foreground">
            Ropa urbana, deportiva, interior y calzado. Stock disponible y productos por encargo.
          </p>
        </div>

        {/* Category Filter */}
        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`rounded-lg px-4 py-2 text-sm font-medium transition-all ${
                selectedCategory === category
                  ? "bg-foreground text-background"
                  : "bg-card text-muted-foreground hover:bg-card hover:text-foreground"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onClick={() => setSelectedProduct(product)}
            />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="mt-12 rounded-lg border border-border bg-card p-12 text-center">
            <p className="text-muted-foreground">
              No encontramos productos con esa busqueda
            </p>
          </div>
        )}
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
