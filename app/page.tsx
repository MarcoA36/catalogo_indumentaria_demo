"use client"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { ProductsSection } from "@/components/products-section"
import { BenefitsSection } from "@/components/benefits-section"
import { AboutSection } from "@/components/about-section"
import { FinalCtaSection } from "@/components/final-cta-section"
import { Footer } from "@/components/footer"
import { products } from "@/lib/products"

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <HeroSection searchQuery={searchQuery} onSearchChange={setSearchQuery} />
        <ProductsSection products={products} searchQuery={searchQuery} />
        <BenefitsSection />
        <AboutSection />
        <FinalCtaSection />
      </main>
      <Footer />
    </>
  )
}
