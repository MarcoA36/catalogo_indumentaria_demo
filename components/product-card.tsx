"use client"

import Image from "next/image"
import type { Product } from "@/lib/products"
import { tagLabels, tagColors } from "@/lib/products"

interface ProductCardProps {
  product: Product
  onClick: () => void
}

export function ProductCard({ product, onClick }: ProductCardProps) {
  const formattedPrice = new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS",
    minimumFractionDigits: 0,
  }).format(product.price)

  const displayTags = product.tags.slice(0, 2)

  return (
    <button
      onClick={onClick}
      className="group w-full overflow-hidden rounded-lg border border-border bg-card text-left transition-all duration-300 hover:border-foreground/20 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-ring"
    >
      <div className="relative aspect-[3/4] overflow-hidden bg-secondary">
        <Image
          src={product.images[0]}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
        {displayTags.length > 0 && (
          <div className="absolute left-3 top-3 flex flex-col gap-1.5">
            {displayTags.map((tag) => (
              <span
                key={tag}
                className={`rounded px-2 py-0.5 text-xs font-medium ${tagColors[tag]}`}
              >
                {tagLabels[tag]}
              </span>
            ))}
          </div>
        )}
      </div>
      <div className="p-4">
        <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
          {product.category}
        </p>
        <h3 className="mt-1.5 text-balance font-medium text-foreground">
          {product.name}
        </h3>
        <div className="mt-3 flex items-baseline justify-between">
          <p className="text-lg font-semibold text-foreground">
            {product.priceFrom ? `Desde ${formattedPrice}` : formattedPrice}
          </p>
          {product.isInStock ? (
            <span className="text-xs text-muted-foreground">En stock</span>
          ) : (
            <span className="text-xs text-muted-foreground">Por encargo</span>
          )}
        </div>
      </div>
    </button>
  )
}
