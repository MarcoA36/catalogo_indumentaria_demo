import { Heart, Sparkles, Shield, Users } from "lucide-react"

export function AboutSection() {
  return (
    <section id="nosotros" className="bg-secondary px-4 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 md:grid-cols-2 md:items-center md:gap-16">
          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden rounded-lg">
              <img
                src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=600&h=750&fit=crop"
                alt="Tienda de ropa"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 hidden rounded-lg bg-card p-6 shadow-lg md:block">
              <p className="text-3xl font-bold text-foreground">+500</p>
              <p className="text-sm text-muted-foreground">Clientes satisfechos</p>
            </div>
          </div>

          {/* Content */}
          <div>
            <span className="mb-4 inline-block text-sm font-medium uppercase tracking-wider text-muted-foreground">
              Sobre Nosotros
            </span>
            <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Emprendiendo con pasion por la moda
            </h2>
            <div className="mt-6 space-y-4 text-muted-foreground">
              <p className="text-pretty leading-relaxed">
                Soy Luciana, y hace 3 años decidi emprender con lo que mas me gusta: la ropa. 
                Lo que empezo como un hobby vendiendo por Instagram, hoy es mi forma de vida.
              </p>
              <p className="text-pretty leading-relaxed">
                Me preocupo personalmente por cada producto que ofrezco. Antes de sumar algo 
                nuevo al catalogo, lo pruebo yo misma. Busco proveedores que garanticen 
                calidad y materiales que realmente duren. No vendo nada que yo no usaria.
              </p>
              <p className="text-pretty leading-relaxed">
                Me encanta conocer a mis clientes, ayudarles a encontrar lo que buscan 
                y que vuelvan contentos. Eso para mi vale mas que cualquier otra cosa.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent/20">
                  <Heart className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Seleccion cuidada</h3>
                  <p className="mt-1 text-sm text-muted-foreground">Cada prenda elegida con criterio</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent/20">
                  <Sparkles className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Calidad real</h3>
                  <p className="mt-1 text-sm text-muted-foreground">Materiales que duran</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent/20">
                  <Shield className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Compra segura</h3>
                  <p className="mt-1 text-sm text-muted-foreground">Cambios sin vueltas</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent/20">
                  <Users className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Trato personal</h3>
                  <p className="mt-1 text-sm text-muted-foreground">Te asesoro en todo</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
