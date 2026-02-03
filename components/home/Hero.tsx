'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Shield, Wrench, Users } from 'lucide-react'

const trustBadges = [
  { icon: Shield, label: 'Certified Service' },
  { icon: Wrench, label: 'OEM Parts' },
  { icon: Users, label: 'Rider Community' },
]

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section
      className="relative min-h-screen lg:min-h-[85vh] flex items-center justify-center overflow-hidden"
      aria-label="Hero section"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-image.jpg"
          alt="Motorcycle background"
          fill
          priority
          className="object-cover object-top"
          sizes="100vw"
        />
        {/* Dark overlay with gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B0B0D]/80 via-[#0B0B0D]/70 to-[#0B0B0D]" />
        {/* Subtle noise texture overlay */}
        <div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGQ9Ik0wIDBoMzAwdjMwMEgweiIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMDUiLz48L3N2Zz4=')]" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          {/* Main Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4 sm:mb-6">
            <span className="bg-gradient-to-r from-white via-[#F5F5F7] to-[#8A8A95] bg-clip-text text-transparent">
              Balkan Moto Center
            </span>
          </h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="text-lg sm:text-xl md:text-2xl text-[#8A8A95] font-light mb-8 sm:mb-10 max-w-2xl mx-auto"
          >
            Premium service. Trusted parts. Rider community.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 sm:mb-16"
          >
            {/* Primary CTA */}
            <button
              onClick={() => scrollToSection('footer')}
              className="group relative w-full sm:w-auto px-8 py-4 bg-[#E10600] text-white font-semibold rounded-xl overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(225,6,0,0.4)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E10600] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B0B0D]"
              aria-label="Show our location"
            >
              <span className="relative z-10">Show location</span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#E10600] to-[#ff2a2a] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>

            {/* Secondary CTA */}
            <button
              onClick={() => scrollToSection('footer')}
              className="group w-full sm:w-auto px-8 py-4 bg-transparent text-[#F5F5F7] font-semibold rounded-xl border border-[#2A2A33] hover:border-[#8A8A95] transition-all duration-300 hover:bg-[#1A1A1F]/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8A8A95] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B0B0D]"
              aria-label="Contact us"
            >
              Contact us
            </button>
          </motion.div>

          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10"
          >
            {trustBadges.map((badge, index) => (
              <div
                key={index}
                className="flex items-center gap-3 text-[#8A8A95]"
              >
                <div className="p-2 rounded-lg bg-[#1A1A1F]/80 border border-[#2A2A33]">
                  <badge.icon className="w-5 h-5 text-[#E10600]" aria-hidden="true" />
                </div>
                <span className="text-sm font-medium">{badge.label}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="w-6 h-10 rounded-full border-2 border-[#2A2A33] flex justify-center pt-2"
        >
          <div className="w-1.5 h-3 bg-[#8A8A95] rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  )
}
