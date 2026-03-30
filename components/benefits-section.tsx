import { Truck, RefreshCw, Clock, ShoppingBag } from "lucide-react"

const benefits = [
  {
    icon: ShoppingBag,
    title: "Stock + Por encargo",
    description: "Productos en stock para llevar ya, y mas opciones por encargo en 4-5 dias.",
  },
  {
    icon: Truck,
    title: "Envios y retiro",
    description: "Envios a toda la zona y retiro en local. Vos elegis lo que te convenga.",
  },
  {
    icon: RefreshCw,
    title: "Cambios sin drama",
    description: "Si no te queda bien, lo cambiamos. Queremos que estes contento.",
  },
  {
    icon: Clock,
    title: "Respuesta rapida",
    description: "Te respondemos por WhatsApp en el dia. Nada de esperar dias.",
  },
]

export function BenefitsSection() {
  return (
    <section className="bg-card px-4 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <span className="mb-4 inline-block text-sm font-medium uppercase tracking-wider text-muted-foreground">
            Nuestras ventajas
          </span>
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Por que comprar aca
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-pretty text-muted-foreground">
            Un emprendimiento local con la comodidad de comprar online
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group rounded-xl border border-border bg-background p-6 transition-all hover:border-foreground/20 hover:shadow-sm"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-secondary">
                <benefit.icon className="h-6 w-6 text-foreground" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-foreground">
                {benefit.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
