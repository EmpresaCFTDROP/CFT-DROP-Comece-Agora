import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import FeaturesSection from "@/components/features-section"
import HowItWorksSection from "@/components/how-it-works-section"
import UpsellerSection from "@/components/upseller-section"
import CatalogSection from "@/components/catalog-section"
import TiktokShopSection from "@/components/tiktok-shop-section"
import EcommercePlatformsSection from "@/components/ecommerce-platforms-section"
import ProductsSection from "@/components/products-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-dark text-light-dim overflow-x-hidden">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <UpsellerSection />
      <CatalogSection />
      <TiktokShopSection />
      <EcommercePlatformsSection />
      <ProductsSection />
      <ContactSection />
      <Footer />
    </main>
  )
}

