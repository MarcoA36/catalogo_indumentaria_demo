import { MessageCircle, Instagram } from "lucide-react"
import { Button } from "@/components/ui/button"

export function FinalCtaSection() {
  const handleWhatsApp = () => {
    const message = "Hola! Quiero ver mas productos o hacer una consulta"
    const whatsappUrl = `https://wa.me/5491112345678?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <section className="bg-foreground px-4 py-20 md:py-28">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-balance text-3xl font-bold tracking-tight text-background md:text-4xl">
          Tenes alguna consulta?
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-pretty text-lg text-background/70">
          Escribinos por WhatsApp o seguinos en Instagram para ver las novedades y ofertas
        </p>
        
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button
            onClick={handleWhatsApp}
            size="lg"
            className="w-full gap-2 bg-background text-foreground hover:bg-background/90 sm:w-auto"
          >
            <MessageCircle className="h-5 w-5" />
            Escribinos por WhatsApp
          </Button>
          <Button
            onClick={() => window.open("https://instagram.com/tu_tienda", "_blank")}
            size="lg"
            variant="outline"
            className="w-full gap-2 border-background/30 bg-transparent text-background hover:bg-background/10 sm:w-auto"
          >
            <Instagram className="h-5 w-5" />
            Seguinos en Instagram
          </Button>
        </div>
      </div>
    </section>
  )
}
