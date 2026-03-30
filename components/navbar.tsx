"use client"

import { useState } from "react"
import { Menu, X, ShoppingBag, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

const navLinks = [
  { name: "Inicio", href: "/" },
  { name: "Productos", href: "/productos" }, // 👈 ahora va a página
  { name: "Nosotros", href: "/#nosotros" },
  { name: "Contacto", href: "/#contacto" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()

const handleNavClick = (href: string) => {
  setIsOpen(false)

  if (href === "#") {
    window.scrollTo({ top: 0, behavior: "smooth" })
    return
  }

  if (href.startsWith("#")) {
    const element = document.querySelector(href)
    element?.scrollIntoView({ behavior: "smooth" })
  } else {
    router.push(href)
  }
}

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        
        {/* Logo */}
        <button onClick={() => handleNavClick("#")} className="flex items-center gap-2">
          <ShoppingBag className="h-6 w-6 text-foreground" />
          <span className="text-lg font-semibold tracking-tight text-foreground">
            Moda Local
          </span>
        </button>

        {/* Desktop nav */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => handleNavClick(link.href)}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.name}
            </button>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Button
            size="sm"
            className="gap-2"
            onClick={() =>
              window.open(
                "https://wa.me/5491123456789?text=Hola! Quiero consultar por un producto",
                "_blank"
              )
            }
          >
            <MessageCircle className="h-4 w-4" />
            WhatsApp
          </Button>
        </div>

        {/* Mobile menu button */}
        <button
          className="rounded-md p-2 text-foreground md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile nav */}
      {isOpen && (
        <div className="border-t border-border bg-background px-4 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.href)}
                className="text-left text-base font-medium text-foreground"
              >
                {link.name}
              </button>
            ))}

            <Button
              className="mt-2 w-full gap-2"
              onClick={() =>
                window.open(
                  "https://wa.me/5491123456789?text=Hola! Quiero consultar por un producto",
                  "_blank"
                )
              }
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}