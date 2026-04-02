"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import {
  X,
  ChevronLeft,
  ChevronRight,
  Minus,
  Plus,
  MessageCircle,
  ShoppingBag,
  Clock,
  RefreshCw,
  Package,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Product } from "@/lib/products";
import { tagLabels, tagColors } from "@/lib/products";

interface ProductModalProps {
  product: Product;
  onClose: () => void;
}

export function ProductModal({ product, onClose }: ProductModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedColor, setSelectedColor] = useState(
    product.options?.colors?.[0] || "",
  );
  const [selectedSize, setSelectedSize] = useState(
    product.options?.sizes?.[0] || "",
  );
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  const formattedPrice = new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS",
    minimumFractionDigits: 0,
  }).format(product.price);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % product.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prev) => (prev - 1 + product.images.length) % product.images.length,
    );
  };

  const handleWhatsApp = () => {
    const stockStatus = product.isInStock ? "En stock" : "Por encargo";
    const message = `Hola! Me interesa: ${product.name}${selectedColor ? ` - Color: ${selectedColor}` : ""}${selectedSize ? ` - Talle: ${selectedSize}` : ""} - Cantidad: ${quantity} (${stockStatus})`;
    const whatsappUrl = `https://wa.me/5491112345678?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  const isCombo = product.tags.includes("combo");
  const isPorEncargo = !product.isInStock;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/60 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative max-h-[90vh] w-full max-w-4xl overflow-auto rounded-xl bg-card shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-10 rounded-full bg-card p-2 shadow-md transition-colors hover:bg-muted"
        >
          <X className="h-5 w-5 text-foreground" />
        </button>

        <div className="grid md:grid-cols-2">
          {/* Image Gallery */}
          <div className="relative aspect-square bg-secondary">
            {/* <Image
              src={product.images[currentImageIndex]}
              alt={product.name}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            /> */}
            <Image
              src={product.images[currentImageIndex]}
              alt={product.name}
              fill
              className="object-cover cursor-zoom-in"
              onClick={() => setIsLightboxOpen(true)}
            />

            {/* Tags */}
            <div className="absolute left-3 top-3 flex flex-col gap-1.5">
              {product.tags.map((tag) => (
                <span
                  key={tag}
                  className={`rounded px-2 py-0.5 text-xs font-medium ${tagColors[tag]}`}
                >
                  {tagLabels[tag]}
                </span>
              ))}
            </div>

            {product.images.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-card/90 p-2 shadow-md transition-colors hover:bg-card"
                >
                  <ChevronLeft className="h-5 w-5 text-foreground" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-card/90 p-2 shadow-md transition-colors hover:bg-card"
                >
                  <ChevronRight className="h-5 w-5 text-foreground" />
                </button>

                <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
                  {product.images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`h-2 w-2 rounded-full transition-colors ${
                        index === currentImageIndex
                          ? "bg-foreground"
                          : "bg-card/60"
                      }`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>

          {/* Product Info */}
          <div className="flex flex-col p-6 md:p-8">
            <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
              {product.category}
            </p>
            <h2 className="mt-2 text-2xl font-bold text-foreground md:text-3xl">
              {product.name}
            </h2>

            {/* Combo Items */}
            {isCombo && product.comboItems && (
              <div className="mt-4 rounded-lg border border-border bg-secondary/50 p-3">
                <p className="text-sm font-medium text-foreground">Incluye:</p>
                <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                  {product.comboItems.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <Package className="h-3 w-3" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
              {product.description}
            </p>

            <p className="mt-4 text-2xl font-bold text-foreground md:text-3xl">
              {product.priceFrom ? `Desde ${formattedPrice}` : formattedPrice}
            </p>

            {/* Por Encargo Notice */}
            {isPorEncargo && (
              <div className="mt-4 flex items-center gap-2 rounded-lg bg-secondary p-3">
                <Clock className="h-4 w-4 text-muted-foreground" />
                <p className="text-sm text-muted-foreground">
                  Disponible por encargo (llega en 4-5 dias)
                </p>
              </div>
            )}

            {/* Color Options */}
            {product.options?.colors && (
              <div className="mt-6">
                <p className="text-sm font-medium text-foreground">Color</p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {product.options.colors.map((color) => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`rounded-lg px-3 py-1.5 text-sm transition-all ${
                        selectedColor === color
                          ? "bg-foreground text-background"
                          : "bg-secondary text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Size Options */}
            {product.options?.sizes && (
              <div className="mt-5">
                <p className="text-sm font-medium text-foreground">Talle</p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {product.options.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`rounded-lg px-3 py-1.5 text-sm font-medium transition-all ${
                        selectedSize === size
                          ? "bg-foreground text-background"
                          : "bg-secondary text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity */}
            <div className="mt-5">
              <p className="text-sm font-medium text-foreground">Cantidad</p>
              <div className="mt-2 flex items-center gap-3">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="rounded-lg bg-secondary p-2 transition-colors hover:bg-secondary/80"
                >
                  <Minus className="h-4 w-4 text-foreground" />
                </button>
                <span className="min-w-[2rem] text-center text-lg font-semibold text-foreground">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="rounded-lg bg-secondary p-2 transition-colors hover:bg-secondary/80"
                >
                  <Plus className="h-4 w-4 text-foreground" />
                </button>
              </div>
            </div>

            {/* Trust Message */}
            <div className="mt-5 flex items-center gap-2 text-sm text-muted-foreground">
              <RefreshCw className="h-4 w-4" />
              <span>Cambios disponibles si no te queda bien</span>
            </div>

            {/* CTA */}
            <div className="mt-auto pt-6">
              <Button
                // onClick={handleWhatsApp}
                className="w-full gap-2"
                size="lg"
              >
                {product.isInStock ? (
                  <>
                    <ShoppingBag className="h-5 w-5" />
                    Comprar ahora
                  </>
                ) : (
                  <>
                    <MessageCircle className="h-5 w-5" />
                    Encargar por WhatsApp
                  </>
                )}
              </Button>
            </div>
          </div>
        </div>
      </div>
      {/* {isLightboxOpen && (
  <div
    className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90"
    onClick={() => setIsLightboxOpen(false)}
  >
    <button
      onClick={() => setIsLightboxOpen(false)}
      className="absolute top-4 right-4 z-50 rounded-full bg-white p-2"
    >
      <X className="h-5 w-5 text-black" />
    </button>

    <Image
      src={product.images[currentImageIndex]}
      alt={product.name}
      width={1200}
      height={1200}
      className="object-contain max-h-[90vh]"
    />
  </div>
)} */}
{isLightboxOpen && (
  <div
    className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90"
    onClick={() => setIsLightboxOpen(false)}
  >
    <button
      onClick={(e) => { e.stopPropagation(); setIsLightboxOpen(false); }}
      className="absolute top-4 right-4 z-50 rounded-full bg-white p-2"
    >
      <X className="h-5 w-5 text-black" />
    </button>

    <Image
      src={product.images[currentImageIndex]}
      alt={product.name}
      width={1200}
      height={1200}
      className="object-contain max-h-[90vh]"
    />

    {product.images.length > 1 && (
      <>
        <button
          onClick={(e) => { e.stopPropagation(); prevImage(); }}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-white"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          onClick={(e) => { e.stopPropagation(); nextImage(); }}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-white"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      </>
    )}
  </div>
)}
    </div>
  );
}
