export type ProductTag = "nuevo" | "mas-vendido" | "liquidacion" | "ultimos-talles" | "por-encargo" | "combo"

export interface Product {
  id: string
  name: string
  price: number
  priceFrom?: boolean
  description: string
  category: string
  images: string[]
  tags: ProductTag[]
  isInStock: boolean
  options?: {
    colors?: string[]
    sizes?: string[]
  }
  comboItems?: string[]
}

export const tagLabels: Record<ProductTag, string> = {
  "nuevo": "Nuevo",
  "mas-vendido": "Mas vendido",
  "liquidacion": "En liquidacion",
  "ultimos-talles": "Ultimos talles",
  "por-encargo": "Por encargo (4-5 dias)",
  "combo": "Combo"
}

export const tagColors: Record<ProductTag, string> = {
  "nuevo": "bg-foreground text-background",
  "mas-vendido": "bg-accent text-accent-foreground",
  "liquidacion": "bg-destructive text-destructive-foreground",
  "ultimos-talles": "bg-muted-foreground text-background",
  "por-encargo": "bg-secondary text-secondary-foreground border border-border",
  "combo": "bg-foreground text-background"
}

export const products: Product[] = [
  // URBANO
  {
    id: "1",
    name: "Remera Oversize Basica",
    price: 18000,
    description: "Remera de algodon premium, corte oversize. Ideal para todos los dias. Se va rapido.",
    category: "Urbano",
    images: [
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=600&h=600&fit=crop"
    ],
    tags: ["mas-vendido"],
    isInStock: true,
    options: {
      colors: ["Blanco", "Negro", "Gris"],
      sizes: ["S", "M", "L", "XL"]
    }
  },
  {
    id: "2",
    name: "Buzo Canguro Unisex",
    price: 35000,
    description: "Buzo con capucha y bolsillo canguro. Muy pedido en invierno. Algodon frisado por dentro.",
    category: "Urbano",
    images: [
      "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1578768079052-aa76e52ff62e?w=600&h=600&fit=crop"
    ],
    tags: ["por-encargo"],
    isInStock: false,
    options: {
      colors: ["Negro", "Gris Melange", "Azul Marino"],
      sizes: ["S", "M", "L", "XL"]
    }
  },
  {
    id: "3",
    name: "Jean Mom Fit Mujer",
    price: 42000,
    description: "Jean tiro alto, corte mom. Muy comodo y favorecedor. Tela con elastano.",
    category: "Urbano",
    images: [
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1584370848010-d7fe6bc767ec?w=600&h=600&fit=crop"
    ],
    tags: ["nuevo"],
    isInStock: true,
    options: {
      colors: ["Celeste", "Azul Oscuro"],
      sizes: ["36", "38", "40", "42", "44"]
    }
  },
  {
    id: "4",
    name: "Campera de Jean Clasica",
    price: 55000,
    description: "Campera de jean rigido, corte clasico. Ideal para entretiempo.",
    category: "Urbano",
    images: [
      "https://images.unsplash.com/photo-1551537482-f2075a1d41f2?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1544022613-e87ca75a784a?w=600&h=600&fit=crop"
    ],
    tags: ["por-encargo"],
    isInStock: false,
    options: {
      colors: ["Azul Clasico", "Negro"],
      sizes: ["S", "M", "L", "XL"]
    }
  },
  {
    id: "17",
    name: "Pantalon Cargo Wide",
    price: 38000,
    description: "Pantalon cargo con bolsillos laterales, corte wide leg. Muy tendencia esta temporada.",
    category: "Urbano",
    images: [
      "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=600&h=600&fit=crop"
    ],
    tags: ["nuevo"],
    isInStock: true,
    options: {
      colors: ["Beige", "Negro", "Verde Militar"],
      sizes: ["S", "M", "L", "XL"]
    }
  },
  {
    id: "18",
    name: "Sweater de Lana Tejido",
    price: 45000,
    description: "Sweater tejido en lana suave. Perfecto para el frio. Hecho a mano.",
    category: "Urbano",
    images: [
      "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=600&h=600&fit=crop"
    ],
    tags: ["por-encargo"],
    isInStock: false,
    options: {
      colors: ["Crudo", "Gris", "Camel"],
      sizes: ["S", "M", "L"]
    }
  },
  {
    id: "19",
    name: "Camisa Lino Oversize",
    price: 32000,
    description: "Camisa de lino fresca y suelta. Ideal para verano. Muy versatil.",
    category: "Urbano",
    images: [
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?w=600&h=600&fit=crop"
    ],
    tags: ["mas-vendido"],
    isInStock: true,
    options: {
      colors: ["Blanco", "Celeste", "Beige"],
      sizes: ["S", "M", "L", "XL"]
    }
  },
  // SPORT
  {
    id: "5",
    name: "Calza Deportiva Mujer",
    price: 22000,
    description: "Calza de suplex con cintura alta. Perfecta para entrenar o usar de diario.",
    category: "Sport",
    images: [
      "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?w=600&h=600&fit=crop"
    ],
    tags: ["mas-vendido"],
    isInStock: true,
    options: {
      colors: ["Negro", "Gris", "Bordo"],
      sizes: ["S", "M", "L", "XL"]
    }
  },
  {
    id: "6",
    name: "Musculosa Dry Fit Hombre",
    price: 15000,
    description: "Musculosa deportiva con tecnologia dry fit. Secado rapido.",
    category: "Sport",
    images: [
      "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1581009146145-b5ef050c149a?w=600&h=600&fit=crop"
    ],
    tags: ["por-encargo"],
    isInStock: false,
    options: {
      colors: ["Blanco", "Negro", "Azul"],
      sizes: ["S", "M", "L", "XL"]
    }
  },
  {
    id: "7",
    name: "Conjunto Deportivo Mujer",
    price: 38000,
    description: "Calza + top deportivo a juego. Combo ideal para el gym. Ahorra comprando el conjunto.",
    category: "Sport",
    images: [
      "https://images.unsplash.com/photo-1518310383802-640c2de311b2?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=600&fit=crop"
    ],
    tags: ["combo", "mas-vendido"],
    isInStock: true,
    comboItems: ["Calza deportiva", "Top deportivo"],
    options: {
      colors: ["Negro", "Rosa Viejo", "Azul Petroleo"],
      sizes: ["S", "M", "L", "XL"]
    }
  },
  {
    id: "8",
    name: "Short Running Hombre",
    price: 18000,
    description: "Short liviano con calza interna. Ideal para correr o entrenar.",
    category: "Sport",
    images: [
      "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1562886877-f12251816e01?w=600&h=600&fit=crop"
    ],
    tags: ["por-encargo"],
    isInStock: false,
    options: {
      colors: ["Negro", "Gris", "Azul"],
      sizes: ["S", "M", "L", "XL"]
    }
  },
  {
    id: "20",
    name: "Remera Deportiva Termica",
    price: 25000,
    description: "Remera termica de compresion. Mantiene el calor corporal. Ideal para entrenar en frio.",
    category: "Sport",
    images: [
      "https://images.unsplash.com/photo-1517466787929-bc90951d0974?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1556906781-9a412961c28c?w=600&h=600&fit=crop"
    ],
    tags: ["nuevo"],
    isInStock: true,
    options: {
      colors: ["Negro", "Gris Oscuro"],
      sizes: ["S", "M", "L", "XL"]
    }
  },
  {
    id: "21",
    name: "Campera Rompeviento",
    price: 42000,
    description: "Campera liviana e impermeable. Perfecta para correr o andar en bici.",
    category: "Sport",
    images: [
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1544441893-675973e31985?w=600&h=600&fit=crop"
    ],
    tags: ["por-encargo"],
    isInStock: false,
    options: {
      colors: ["Negro", "Azul", "Verde"],
      sizes: ["S", "M", "L", "XL"]
    }
  },
  // ROPA INTERIOR
  {
    id: "9",
    name: "Pack x3 Boxers Algodon",
    price: 12000,
    description: "Pack de 3 boxers de algodon premium. Muy comodos y durables.",
    category: "Ropa interior",
    images: [
      "https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1567113463224-37cf03c0b0f4?w=600&h=600&fit=crop"
    ],
    tags: ["liquidacion"],
    isInStock: true,
    options: {
      colors: ["Negro/Gris/Blanco", "Azul/Negro/Gris"],
      sizes: ["S", "M", "L", "XL"]
    }
  },
  {
    id: "10",
    name: "Corpiño Deportivo Sin Costuras",
    price: 9500,
    description: "Corpiño sin costuras, muy comodo. Ideal para usar todo el dia.",
    category: "Ropa interior",
    images: [
      "https://images.unsplash.com/photo-1616677381964-8fb2da0c37fb?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=600&h=600&fit=crop"
    ],
    tags: ["por-encargo"],
    isInStock: false,
    options: {
      colors: ["Nude", "Negro", "Blanco"],
      sizes: ["S", "M", "L", "XL"]
    }
  },
  {
    id: "11",
    name: "Pack x5 Bombachas Algodon",
    price: 8500,
    description: "Pack de 5 bombachas de algodon suave. Colores surtidos.",
    category: "Ropa interior",
    images: [
      "https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1618354691792-d1d42acfd860?w=600&h=600&fit=crop"
    ],
    tags: ["mas-vendido"],
    isInStock: true,
    options: {
      sizes: ["S", "M", "L", "XL"]
    }
  },
  {
    id: "22",
    name: "Pijama Algodon Mujer",
    price: 28000,
    description: "Pijama de algodon suave, pantalon largo y remera manga corta. Super comodo para dormir.",
    category: "Ropa interior",
    images: [
      "https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1617331721458-bd3bd3f9c7f8?w=600&h=600&fit=crop"
    ],
    tags: ["nuevo"],
    isInStock: true,
    options: {
      colors: ["Rosa", "Celeste", "Gris"],
      sizes: ["S", "M", "L", "XL"]
    }
  },
  {
    id: "23",
    name: "Pack x6 Medias Deportivas",
    price: 9000,
    description: "Pack de 6 pares de medias deportivas. Algodon con refuerzo en talon y puntera.",
    category: "Ropa interior",
    images: [
      "https://images.unsplash.com/photo-1586350977771-b3b0abd50c82?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1631006235629-79b443040a6e?w=600&h=600&fit=crop"
    ],
    tags: ["mas-vendido"],
    isInStock: true,
    options: {
      colors: ["Blanco", "Negro", "Surtido"],
      sizes: ["35-38", "39-42", "43-46"]
    }
  },
  // CALZADO
  {
    id: "12",
    name: "Zapatillas Urbanas Blancas",
    price: 48000,
    priceFrom: true,
    description: "Zapatillas urbanas clasicas. Suela de goma antideslizante. Muy pedidas.",
    category: "Calzado",
    images: [
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=600&h=600&fit=crop"
    ],
    tags: ["por-encargo", "mas-vendido"],
    isInStock: false,
    options: {
      colors: ["Blanco", "Negro", "Beige"],
      sizes: ["35", "36", "37", "38", "39", "40", "41", "42", "43", "44"]
    }
  },
  {
    id: "13",
    name: "Ojotas Goma Eva",
    price: 8000,
    description: "Ojotas livianas y comodas. Ideales para la pileta o el verano.",
    category: "Calzado",
    images: [
      "https://images.unsplash.com/photo-1603487742131-4160ec999306?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1582897085656-c636d006a246?w=600&h=600&fit=crop"
    ],
    tags: ["ultimos-talles"],
    isInStock: true,
    options: {
      colors: ["Negro", "Rosa", "Azul"],
      sizes: ["36", "38", "40", "42"]
    }
  },
  {
    id: "14",
    name: "Zapatillas Running",
    price: 65000,
    priceFrom: true,
    description: "Zapatillas para correr con amortiguacion. Varios colores disponibles.",
    category: "Calzado",
    images: [
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=600&h=600&fit=crop"
    ],
    tags: ["por-encargo"],
    isInStock: false,
    options: {
      colors: ["Negro/Rojo", "Gris/Celeste", "Blanco/Negro"],
      sizes: ["35", "36", "37", "38", "39", "40", "41", "42", "43", "44"]
    }
  },
  {
    id: "24",
    name: "Botitas de Cuero Sintetico",
    price: 52000,
    description: "Botitas con cierre lateral, cuero sintetico de calidad. Ideales para otoño/invierno.",
    category: "Calzado",
    images: [
      "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1605812860427-4024433a70fd?w=600&h=600&fit=crop"
    ],
    tags: ["nuevo"],
    isInStock: true,
    options: {
      colors: ["Negro", "Marron"],
      sizes: ["35", "36", "37", "38", "39", "40"]
    }
  },
  {
    id: "25",
    name: "Sandalias Plataforma",
    price: 35000,
    description: "Sandalias con plataforma, tiras cruzadas. Muy comodas para el verano.",
    category: "Calzado",
    images: [
      "https://images.unsplash.com/photo-1562273138-f46be4ebdf33?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=600&h=600&fit=crop"
    ],
    tags: ["por-encargo"],
    isInStock: false,
    options: {
      colors: ["Negro", "Nude", "Blanco"],
      sizes: ["35", "36", "37", "38", "39", "40"]
    }
  },
  // COMBOS / CONJUNTOS
  {
    id: "15",
    name: "Conjunto Dama Urbano",
    price: 52000,
    description: "Remera + jean mom + cinto. El look completo con descuento. Ideal para regalar.",
    category: "Urbano",
    images: [
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=600&h=600&fit=crop"
    ],
    tags: ["combo", "nuevo"],
    isInStock: true,
    comboItems: ["Remera basica", "Jean mom fit", "Cinto eco cuero"],
    options: {
      sizes: ["S", "M", "L", "XL"]
    }
  },
  {
    id: "16",
    name: "Conjunto Hombre Casual",
    price: 58000,
    description: "Remera + bermuda + medias. Comprando junto ahorras. Muy pedido.",
    category: "Urbano",
    images: [
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1506634572416-48cdfe530110?w=600&h=600&fit=crop"
    ],
    tags: ["combo", "por-encargo"],
    isInStock: false,
    comboItems: ["Remera lisa", "Bermuda gabardina", "Pack x3 medias"],
    options: {
      sizes: ["S", "M", "L", "XL"]
    }
  },
  {
    id: "26",
    name: "Look Completo Gym",
    price: 55000,
    description: "Calza + top + campera liviana. Todo lo que necesitas para entrenar. Super oferta.",
    category: "Sport",
    images: [
      "https://images.unsplash.com/photo-1518310383802-640c2de311b2?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600&h=600&fit=crop"
    ],
    tags: ["combo", "mas-vendido"],
    isInStock: true,
    comboItems: ["Calza deportiva", "Top deportivo", "Campera liviana"],
    options: {
      colors: ["Negro", "Gris"],
      sizes: ["S", "M", "L", "XL"]
    }
  }
]

export const categories = ["Todos", ...new Set(products.map(p => p.category))]
