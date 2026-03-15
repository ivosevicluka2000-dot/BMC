import Header from '@/components/home/Header'
import Hero from '@/components/home/Hero'
import BrandRepresentative from '@/components/home/BrandRepresentative'
import About from '@/components/home/About'
import TerrainSection from '@/components/home/TerrainSection'
import ShopPreview from '@/components/home/ShopPreview'
import Gallery from '@/components/home/Gallery'
import MemberCTA from '@/components/home/MemberCTA'
import Footer from '@/components/home/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0B0B0D]">
      <Header />
      <Hero />
      <BrandRepresentative />
      <About />
      <TerrainSection />
      <ShopPreview />
      <Gallery />
      <MemberCTA />
      <Footer />
    </main>
  )
}
