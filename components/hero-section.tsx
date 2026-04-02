"use client"

import { useRouter } from "next/navigation"
import { useEffect } from "react"
import { Search, MapPin, Truck, RefreshCw } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

interface HeroSectionProps {
  searchQuery: string
  onSearchChange: (query: string) => void
}

export function HeroSection({ searchQuery, onSearchChange }: HeroSectionProps) {
  const router = useRouter()

  useEffect(() => {
    if (!searchQuery) return

    const timeout = setTimeout(() => {
      router.push(`/productos?search=${encodeURIComponent(searchQuery)}`)
    }, 500)

    return () => clearTimeout(timeout)
  }, [searchQuery, router])

  const handleSearch = () => {
    if (searchQuery.trim() !== "") {
      router.push(`/productos?search=${encodeURIComponent(searchQuery)}`)
    } else {
      router.push("/productos")
    }
  }

  return (
    <section className="relative h-[95vh] w-full overflow-hidden">

      {/* 🖼️ Imagen de fondo */}
<Image
  // src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04"
  src="/imagen-ropa.webp"
  alt="Ropa"
  fill
  priority
  quality={80}
  sizes="100vw"
  className="object-cover"
/>

      {/* 🌑 Overlay oscuro */}
      <div className="absolute inset-0 bg-black/60" />

      {/* 📦 Contenido */}
      <div className="relative z-10 flex h-full items-center justify-center px-4">
        <div className="max-w-4xl text-center text-white">

          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm backdrop-blur">
            <MapPin className="h-4 w-4" />
            <span>Zona Norte, Buenos Aires</span>
          </div>

          <h1 className="text-4xl font-bold leading-tight md:text-6xl">
            Vestite con estilo,
            <br />
            <span className="text-orange-400">destacate de verdad</span>
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-lg text-white/80">
            Urbano, deportivo, interior y calzado.
          </p>
{/* 🔍 Search */}
<div className="mx-auto mt-10 w-full max-w-md">
  <div className="relative">
    <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-black/70" />
    <input
      type="text"
      placeholder="Buscar productos..."
      value={searchQuery}
      onChange={(e) => onSearchChange(e.target.value)}
      onKeyDown={(e) => {
        if (e.key === "Enter") handleSearch()
      }}
      className="w-full rounded-lg bg-white/90 px-12 py-3 text-black placeholder:text-gray-500 focus:outline-none"
    />
  </div>
</div>

{/* 🎯 Botones */}
<div className="mt-2 mt-md-6 flex flex-col items-center justify-center gap-1 gap-md-3 sm:flex-row sm:gap-4">
  <Button
    size="lg"
    className="w-full sm:w-auto px-6 py-3 cursor-pointer"
    onClick={handleSearch}
  >
    Ver catálogo
  </Button>

  <Button
    variant="outline"
    size="lg"
    className="w-full sm:w-auto px-6 py-3 border-white text-black hover:bg-white hover:text-black cursor-pointer"
    onClick={() =>
      document.getElementById("nosotros")?.scrollIntoView({ behavior: "smooth" })
    }
  >
    Conocenos
  </Button>
</div>

{/*           
          <div className="mx-auto mt-10 max-w-lg">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-black/70" />
              <input
                type="text"
                placeholder="Buscar productos..."
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") handleSearch()
                }}
                className="w-full rounded-lg bg-white/90 px-12 py-4 text-black placeholder:text-gray-500 focus:outline-none"
              />
            </div>
          </div>

        
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" className="w-full sm:w-auto px-8" onClick={handleSearch}>
              Ver catálogo
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="w-full sm:w-auto px-8 border-white text-black hover:bg-white hover:text-black"
              onClick={() =>
                document.getElementById("nosotros")?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Conocenos
            </Button>
          </div> */}

          {/* 🚚 Beneficios */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-sm text-white/80">
            <div className="flex items-center gap-2">
              <Truck className="h-5 w-5" />
              <span>Envíos a domicilio</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-5 w-5" />
              <span>Retiro en local</span>
            </div>
            <div className="flex items-center gap-2">
              <RefreshCw className="h-5 w-5" />
              <span>Cambios disponibles</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}