import { ShoppingBag, MapPin, Clock, Phone, Instagram, MessageCircle } from "lucide-react"

export function Footer() {
  return (
    <footer id="contacto" className="bg-foreground px-4 py-16">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2">
              <ShoppingBag className="h-6 w-6 text-background" />
              <span className="text-lg font-semibold text-background">Moda Local</span>
            </div>
            <p className="mt-4 max-w-sm text-pretty text-sm leading-relaxed text-background/70">
              Tu tienda de ropa de confianza en Zona Norte. Ropa urbana, deportiva, 
              interior y calzado. Stock y productos por encargo con la mejor calidad.
            </p>
            <div className="mt-6 flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-background/10 text-background transition-colors hover:bg-background/20"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://wa.me/5491123456789"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-background/10 text-background transition-colors hover:bg-background/20"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Info */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-background">
              Contacto
            </h3>
            <ul className="space-y-3 text-sm text-background/70">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
                <span>Zona Norte, Buenos Aires</span>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="mt-0.5 h-4 w-4 shrink-0" />
                <span>+54 11 2345-6789</span>
              </li>
              <li className="flex items-start gap-2">
                <Clock className="mt-0.5 h-4 w-4 shrink-0" />
                <span>Lun a Sab: 10 a 20hs</span>
              </li>
            </ul>
          </div>

          {/* Links */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-background">
              Links
            </h3>
            <ul className="space-y-3 text-sm text-background/70">
              <li>
                <a href="#products" className="transition-colors hover:text-background">
                  Productos
                </a>
              </li>
              <li>
                <a href="#nosotros" className="transition-colors hover:text-background">
                  Sobre Nosotros
                </a>
              </li>
              <li>
                <a href="https://wa.me/5491123456789" className="transition-colors hover:text-background">
                  Consultas por WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-background/10 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left">
            <p className="text-sm text-background/50">
              Moda Local - Zona Norte, Buenos Aires
            </p>
            <p className="text-sm text-background/50">
              Envios y retiro en local. Cambios disponibles.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
