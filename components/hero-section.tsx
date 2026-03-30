// "use client"

// import { useRouter } from "next/navigation"
// import { useEffect } from "react"
// import { Search, MapPin, Truck, RefreshCw } from "lucide-react"
// import { Button } from "@/components/ui/button"

// interface HeroSectionProps {
//   searchQuery: string
//   onSearchChange: (query: string) => void
// }

// export function HeroSection({ searchQuery, onSearchChange }: HeroSectionProps) {
//   const router = useRouter()

//   // 🔥 Redirección automática con delay
//   useEffect(() => {
//     if (!searchQuery) return

//     const timeout = setTimeout(() => {
//       router.push(`/productos?search=${encodeURIComponent(searchQuery)}`)
//     }, 500) // ⏱️ 500ms

//     return () => clearTimeout(timeout)
//   }, [searchQuery, router])

//   const handleSearch = () => {
//     if (searchQuery.trim() !== "") {
//       router.push(`/productos?search=${encodeURIComponent(searchQuery)}`)
//     } else {
//       router.push("/productos")
//     }
//   }

//   return (
//     <section className="relative overflow-hidden bg-background px-4 py-16 md:py-24">
      
//       <div className="relative mx-auto max-w-4xl text-center">
        
//         <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm text-muted-foreground">
//           <MapPin className="h-4 w-4" />
//           <span>Zona Norte, Buenos Aires</span>
//         </div>

//         <h1 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
//           Ropa con estilo,{" "}
//           <span className="text-accent">calidad real</span>
//         </h1>

//         <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl">
//           Urbano, deportivo, interior y calzado.
//         </p>

//         {/* Search */}
//         <div className="mx-auto mt-10 max-w-lg">
//           <div className="relative">
//             <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
//             <input
//               type="text"
//               placeholder="Buscar productos..."
//               value={searchQuery}
//               onChange={(e) => onSearchChange(e.target.value)}
//               onKeyDown={(e) => {
//                 if (e.key === "Enter") handleSearch()
//               }}
//               className="w-full rounded-lg border border-border bg-card px-12 py-4 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
//             />
//           </div>
//         </div>

//         <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
//           <Button size="lg" className="w-full px-8 sm:w-auto" onClick={handleSearch}>
//             Ver catálogo
//           </Button>

//           <Button
//             variant="outline"
//             size="lg"
//             className="w-full px-8 sm:w-auto"
//             onClick={() =>
//               document.getElementById("nosotros")?.scrollIntoView({ behavior: "smooth" })
//             }
//           >
//             Conocenos
//           </Button>
//         </div>

//         <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground md:gap-10">
//           <div className="flex items-center gap-2">
//             <Truck className="h-5 w-5" />
//             <span>Envios a domicilio</span>
//           </div>
//           <div className="flex items-center gap-2">
//             <MapPin className="h-5 w-5" />
//             <span>Retiro en local</span>
//           </div>
//           <div className="flex items-center gap-2">
//             <RefreshCw className="h-5 w-5" />
//             <span>Cambios disponibles</span>
//           </div>
//         </div>

//       </div>
//     </section>
//   )
// }
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
    <section className="relative h-[90vh] w-full overflow-hidden">

      {/* 🖼️ Imagen de fondo */}
<Image
  src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04"
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

          {/* 🎯 Botones */}
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
          </div>

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