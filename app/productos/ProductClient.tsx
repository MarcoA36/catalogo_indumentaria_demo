"use client"

import { useState, useMemo } from "react"
import { Search, X } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ProductCard } from "@/components/product-card"
import { ProductModal } from "@/components/product-modal"
import { products, categories, type Product } from "@/lib/products"

type Props = {
  searchParams: { [key: string]: string | string[] | undefined }
}

export default function ProductosClient({ searchParams }: Props) {
  // 🔥 manejar string o array correctamente
  const searchFromURL = Array.isArray(searchParams?.search)
    ? searchParams.search[0]
    : searchParams?.search || ""

  const categoryFromURL = Array.isArray(searchParams?.category)
    ? searchParams.category[0]
    : searchParams?.category || "Todos"

  const [searchQuery, setSearchQuery] = useState(searchFromURL)
  const [selectedCategory, setSelectedCategory] = useState(categoryFromURL)
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesSearch =
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase())

      const matchesCategory =
        selectedCategory === "Todos" || product.category === selectedCategory

      return matchesSearch && matchesCategory
    })
  }, [searchQuery, selectedCategory])

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-background">
        {/* Header */}
        <section className="border-b border-border bg-secondary px-4 py-12 md:py-16">
    
          <div className="mx-auto max-w-6xl">
            <h1 className="text-center text-3xl font-bold md:text-4xl">
              Nuestro Catálogo
            </h1>

            {/* Search */}
            <div className="mx-auto mt-8 max-w-md">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2" />

                <input
                  type="text"
                  placeholder="Buscar productos..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full rounded-lg border py-3 pl-12 pr-10"
                />

                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-4 top-1/2 -translate-y-1/2"
                  >
                    <X />
                  </button>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Products */}
        <section className="px-4 py-12">
          <div className="mx-auto max-w-6xl">
            {/* Categorías */}
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg ${
                    selectedCategory === category
                      ? "bg-black text-white"
                      : "bg-gray-200"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Resultados */}
            <p className="mt-6 text-center text-sm">
              Mostrando {filteredProducts.length} productos
            </p>

            {/* Grid */}
            <div className="mt-8 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onClick={() => setSelectedProduct(product)}
                />
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="mt-12 text-center">
                No encontramos productos
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