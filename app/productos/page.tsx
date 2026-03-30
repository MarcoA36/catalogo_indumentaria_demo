"use client"

import { useState } from "react"
import { Search, X } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ProductCard } from "@/components/product-card"
import { ProductModal } from "@/components/product-modal"
import { products, categories, type Product } from "@/lib/products"

export default function ProductosPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("Todos")
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory === "Todos" || product.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background pt-20">
        {/* Header */}
        <section className="border-b border-border bg-secondary/30 px-4 py-12 md:py-16">
          <div className="mx-auto max-w-6xl">
            <h1 className="text-center text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Nuestro Catalogo
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-center text-muted-foreground">
              Explora toda nuestra coleccion de ropa urbana, deportiva, interior y calzado
            </p>

            {/* Search */}
            <div className="mx-auto mt-8 max-w-md">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Buscar productos..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full rounded-lg border border-border bg-card py-3 pl-12 pr-10 text-foreground placeholder:text-muted-foreground focus:border-foreground focus:outline-none focus:ring-1 focus:ring-foreground"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                  >
                    <X className="h-5 w-5" />
                  </button>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Products */}
        <section className="px-4 py-12 md:py-16">
          <div className="mx-auto max-w-6xl">
            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`rounded-lg px-4 py-2 text-sm font-medium transition-all ${
                    selectedCategory === category
                      ? "bg-foreground text-background"
                      : "bg-secondary text-muted-foreground hover:bg-secondary hover:text-foreground"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Results count */}
            <p className="mt-8 text-center text-sm text-muted-foreground">
              Mostrando {filteredProducts.length} {filteredProducts.length === 1 ? "producto" : "productos"}
              {selectedCategory !== "Todos" && ` en ${selectedCategory}`}
              {searchQuery && ` para "${searchQuery}"`}
            </p>

            {/* Products Grid */}
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
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
                <button
                  onClick={() => {
                    setSearchQuery("")
                    setSelectedCategory("Todos")
                  }}
                  className="mt-4 text-sm font-medium text-foreground underline underline-offset-4 hover:text-muted-foreground"
                >
                  Ver todos los productos
                </button>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />

      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </>
  )
}
