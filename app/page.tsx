import Header from '@/components/home/Header'
import Hero from '@/components/home/Hero'
import About from '@/components/home/About'
import Services from '@/components/home/Services'
import ShopPreview from '@/components/home/ShopPreview'
import MemberCTA from '@/components/home/MemberCTA'
import Footer from '@/components/home/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0B0B0D]">
      <Header />
      <Hero />
      <About />
      <Services />
      <ShopPreview />
      <MemberCTA />
      <Footer />
    </main>
  )
}
