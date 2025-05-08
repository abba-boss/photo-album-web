import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import AlbumsSection from "@/components/albums-section"
import UploadSection from "@/components/upload-section"
import ExploreSection from "@/components/explore-section"
import FavoritesSection from "@/components/favorites-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <AlbumsSection />
      <UploadSection />
      <ExploreSection />
      <FavoritesSection />
      <ContactSection />
      <Footer />
    </div>
  )
}
