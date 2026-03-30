"use client"

import { Search, MapPin, Truck, RefreshCw } from "lucide-react"
import { Button } from "@/components/ui/button"

interface HeroSectionProps {
  searchQuery: string
  onSearchChange: (query: string) => void
}

export function HeroSection({ searchQuery, onSearchChange }: HeroSectionProps) {
  return (
    <section className="relative overflow-hidden bg-background px-4 py-16 md:py-24">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
        }} />
      </div>
      
      <div className="relative mx-auto max-w-4xl text-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm text-muted-foreground">
          <MapPin className="h-4 w-4" />
          <span>Zona Norte, Buenos Aires</span>
        </div>
        
        <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
          Ropa con estilo,{" "}
          <span className="text-accent">calidad real</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg text-muted-foreground md:text-xl">
          Urbano, deportivo, interior y calzado. Seleccion cuidada con materiales que duran. 
          Stock disponible y productos por encargo.
        </p>
        
        {/* Search */}
        <div className="mx-auto mt-10 max-w-lg">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              placeholder="Buscar productos..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="w-full rounded-lg border border-border bg-card px-12 py-4 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
            />
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button 
            size="lg" 
            className="w-full px-8 sm:w-auto"
            onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Ver catalogo
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="w-full px-8 sm:w-auto"
            onClick={() => document.getElementById('nosotros')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Conocenos
          </Button>
        </div>

        {/* Trust badges */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground md:gap-10">
          <div className="flex items-center gap-2">
            <Truck className="h-5 w-5" />
            <span>Envios a domicilio</span>
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
    </section>
  )
}
