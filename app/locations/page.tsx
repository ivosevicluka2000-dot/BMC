'use client'

import { useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import dynamic from 'next/dynamic'
import { MapPin, Phone, Clock, X, ChevronLeft, ChevronRight, Navigation } from 'lucide-react'
import Header from '@/components/home/Header'
import Footer from '@/components/home/Footer'

// Dynamically import Map component to avoid SSR issues with Leaflet
const MapComponent = dynamic(() => import('@/components/MapComponent'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full bg-[#1A1A1F] flex items-center justify-center">
      <div className="text-[#8A8A95]">Loading map...</div>
    </div>
  ),
})

type LocationType = 'all' | 'shop' | 'repair'

interface Location {
  id: number
  name: string
  type: 'shop' | 'repair'
  address: string
  city: string
  phone: string
  hours: string
  lat: number
  lng: number
  images: string[]
  description: string
}

const locations: Location[] = [
  {
    id: 1,
    name: 'BMC Flagship Store',
    type: 'shop',
    address: 'Knez Mihailova 25',
    city: 'Belgrade, Serbia',
    phone: '+381 11 123 4567',
    hours: 'Mon-Sat: 9:00 - 20:00',
    lat: 44.8176,
    lng: 20.4633,
    images: [
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1558980394-4c7c9299fe96?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?q=80&w=800&auto=format&fit=crop',
    ],
    description: 'Our flagship store featuring the complete range of gear, accessories, and apparel.',
  },
  {
    id: 2,
    name: 'BMC Service Center',
    type: 'repair',
    address: 'Bulevar Oslobođenja 78',
    city: 'Belgrade, Serbia',
    phone: '+381 11 234 5678',
    hours: 'Mon-Fri: 8:00 - 18:00, Sat: 9:00 - 14:00',
    lat: 44.7866,
    lng: 20.4489,
    images: [
      'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=800&auto=format&fit=crop',
    ],
    description: 'Full-service repair center with certified technicians and state-of-the-art equipment.',
  },
  {
    id: 3,
    name: 'BMC Novi Sad Shop',
    type: 'shop',
    address: 'Bulevar Cara Lazara 42',
    city: 'Novi Sad, Serbia',
    phone: '+381 21 345 6789',
    hours: 'Mon-Sat: 10:00 - 19:00',
    lat: 45.2671,
    lng: 19.8335,
    images: [
      'https://images.unsplash.com/photo-1558980394-4c7c9299fe96?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1449426468159-d96dbf08f19f?q=80&w=800&auto=format&fit=crop',
    ],
    description: 'Premium motorcycle gear and accessories in the heart of Novi Sad.',
  },
  {
    id: 4,
    name: 'BMC Niš Repair Shop',
    type: 'repair',
    address: 'Voždova 15',
    city: 'Niš, Serbia',
    phone: '+381 18 456 7890',
    hours: 'Mon-Fri: 8:00 - 17:00, Sat: 9:00 - 13:00',
    lat: 43.3209,
    lng: 21.8954,
    images: [
      'https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=800&auto=format&fit=crop',
    ],
    description: 'Expert motorcycle repair and maintenance services in southern Serbia.',
  },
  {
    id: 5,
    name: 'BMC Subotica Shop',
    type: 'shop',
    address: 'Korzo 8',
    city: 'Subotica, Serbia',
    phone: '+381 24 567 8901',
    hours: 'Mon-Sat: 9:00 - 18:00',
    lat: 46.1000,
    lng: 19.6647,
    images: [
      'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1558980394-4c7c9299fe96?q=80&w=800&auto=format&fit=crop',
    ],
    description: 'Your northern Serbia destination for all motorcycle needs.',
  },
  {
    id: 6,
    name: 'BMC Kragujevac Service',
    type: 'repair',
    address: 'Kralja Petra I 55',
    city: 'Kragujevac, Serbia',
    phone: '+381 34 678 9012',
    hours: 'Mon-Fri: 8:00 - 18:00',
    lat: 44.0128,
    lng: 20.9114,
    images: [
      'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=800&auto=format&fit=crop',
    ],
    description: 'Complete motorcycle service center with quick turnaround times.',
  },
]

const filterOptions: { value: LocationType; label: string }[] = [
  { value: 'all', label: 'All Locations' },
  { value: 'shop', label: 'Shops' },
  { value: 'repair', label: 'Repair Shops' },
]

export default function LocationsPage() {
  const [filter, setFilter] = useState<LocationType>('all')
  const [selectedLocationId, setSelectedLocationId] = useState<number | null>(null)
  const [modalLocation, setModalLocation] = useState<Location | null>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const filteredLocations = locations.filter((location) => {
    if (filter === 'all') return true
    return location.type === filter
  })

  const handleLocationSelect = useCallback((id: number) => {
    setSelectedLocationId(id)
    const location = locations.find(loc => loc.id === id)
    if (location) {
      setModalLocation(location)
      setCurrentImageIndex(0)
    }
  }, [])

  const handleListClick = useCallback((location: Location) => {
    setSelectedLocationId(location.id)
    setModalLocation(location)
    setCurrentImageIndex(0)
  }, [])

  const nextImage = () => {
    if (modalLocation) {
      setCurrentImageIndex((prev) =>
        prev === modalLocation.images.length - 1 ? 0 : prev + 1
      )
    }
  }

  const prevImage = () => {
    if (modalLocation) {
      setCurrentImageIndex((prev) =>
        prev === 0 ? modalLocation.images.length - 1 : prev - 1
      )
    }
  }

  const closeModal = () => {
    setModalLocation(null)
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#0B0B0D] pt-20">
        <section className="relative py-8 sm:py-12">
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-8"
            >
              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
                Our <span className="text-[#E10600]">Locations</span>
              </h1>
              <p className="text-[#8A8A95] text-lg max-w-2xl mx-auto">
                Find a Balkan Moto Center near you. Visit our shops or service centers across Serbia.
              </p>
            </motion.div>

            {/* Filter Tabs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex justify-center mb-8"
            >
              <div className="inline-flex p-1 bg-[#1A1A1F] rounded-xl border border-[#2A2A33]">
                {filterOptions.map((option) => (
                  <button
                    key={option.value}
                    onClick={() => setFilter(option.value)}
                    className={`px-4 sm:px-6 py-2.5 text-sm font-medium rounded-lg transition-all duration-300 ${
                      filter === option.value
                        ? 'bg-[#E10600] text-white shadow-lg'
                        : 'text-[#8A8A95] hover:text-[#F5F5F7]'
                    }`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Main Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid lg:grid-cols-[380px_1fr] gap-6"
            >
              {/* Locations List */}
              <div className="order-2 lg:order-1 max-h-[600px] overflow-y-auto pr-2 space-y-3 scrollbar-thin scrollbar-thumb-[#2A2A33] scrollbar-track-transparent">
                {filteredLocations.map((location, index) => (
                  <motion.div
                    key={location.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    onClick={() => handleListClick(location)}
                    className={`group relative p-4 rounded-xl cursor-pointer transition-all duration-300 ${
                      selectedLocationId === location.id
                        ? 'bg-[#E10600]/10 border-[#E10600]'
                        : 'bg-[#1A1A1F] border-[#2A2A33] hover:border-[#E10600]/50'
                    } border`}
                  >
                    <div className="flex items-start gap-4">
                      <div
                        className={`flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center ${
                          location.type === 'shop'
                            ? 'bg-blue-500/10 text-blue-400'
                            : 'bg-orange-500/10 text-orange-400'
                        }`}
                      >
                        {location.type === 'shop' ? (
                          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                          </svg>
                        ) : (
                          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-1">
                          <h3 className="text-base font-semibold text-[#F5F5F7] truncate pr-2">
                            {location.name}
                          </h3>
                          <span
                            className={`text-xs px-2 py-0.5 rounded-full ${
                              location.type === 'shop'
                                ? 'bg-blue-500/20 text-blue-400'
                                : 'bg-orange-500/20 text-orange-400'
                            }`}
                          >
                            {location.type === 'shop' ? 'Shop' : 'Repair'}
                          </span>
                        </div>
                        <p className="text-sm text-[#8A8A95] mb-2">
                          {location.address}, {location.city}
                        </p>
                        <div className="flex items-center gap-4 text-xs text-[#8A8A95]">
                          <span className="flex items-center gap-1">
                            <Phone className="w-3 h-3" />
                            {location.phone}
                          </span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Map */}
              <div className="order-1 lg:order-2 relative h-[400px] lg:h-[600px] rounded-2xl overflow-hidden border border-[#2A2A33]">
                <MapComponent
                  locations={filteredLocations.map(loc => ({
                    id: loc.id,
                    name: loc.name,
                    type: loc.type,
                    lat: loc.lat,
                    lng: loc.lng,
                  }))}
                  selectedLocationId={selectedLocationId}
                  onMarkerClick={handleLocationSelect}
                />

                {/* Map Legend */}
                <div className="absolute bottom-4 left-4 p-3 bg-[#0B0B0D]/90 backdrop-blur-sm rounded-xl border border-[#2A2A33] z-[1000]">
                  <div className="flex items-center gap-4 text-xs">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-blue-500" />
                      <span className="text-[#8A8A95]">Shop</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-orange-500" />
                      <span className="text-[#8A8A95]">Repair</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />

      {/* Location Detail Modal */}
      <AnimatePresence>
        {modalLocation && (
          <div
            className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
            role="dialog"
            aria-modal="true"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm z-[9999]"
              onClick={closeModal}
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative z-[10000] w-full max-w-3xl bg-gradient-to-br from-[#1A1A1F] to-[#0B0B0D] border border-[#2A2A33] rounded-2xl overflow-hidden shadow-2xl"
            >
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 z-20 p-2 rounded-lg bg-[#0B0B0D]/80 text-[#8A8A95] hover:text-[#F5F5F7] hover:bg-[#2A2A33] transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Image Carousel */}
              <div className="relative aspect-video">
                <Image
                  src={modalLocation.images[currentImageIndex]}
                  alt={`${modalLocation.name} - Image ${currentImageIndex + 1}`}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0D] via-transparent to-transparent" />

                {/* Navigation Arrows */}
                {modalLocation.images.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-[#0B0B0D]/80 text-[#F5F5F7] hover:bg-[#E10600] transition-colors"
                      aria-label="Previous image"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-[#0B0B0D]/80 text-[#F5F5F7] hover:bg-[#E10600] transition-colors"
                      aria-label="Next image"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </>
                )}

                {/* Image Indicators */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                  {modalLocation.images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        currentImageIndex === index
                          ? 'bg-[#E10600] w-6'
                          : 'bg-white/50 hover:bg-white/80'
                      }`}
                      aria-label={`Go to image ${index + 1}`}
                    />
                  ))}
                </div>

                {/* Type Badge */}
                <div className="absolute top-4 left-4">
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${
                      modalLocation.type === 'shop'
                        ? 'bg-blue-500 text-white'
                        : 'bg-orange-500 text-white'
                    }`}
                  >
                    {modalLocation.type === 'shop' ? 'Shop' : 'Repair Shop'}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h2 className="text-2xl font-bold text-[#F5F5F7] mb-2">
                  {modalLocation.name}
                </h2>
                <p className="text-[#8A8A95] mb-6">
                  {modalLocation.description}
                </p>

                <div className="grid sm:grid-cols-2 gap-4">
                  {/* Address */}
                  <div className="flex items-start gap-3 p-4 rounded-xl bg-[#0B0B0D] border border-[#2A2A33]">
                    <div className="p-2 rounded-lg bg-[#E10600]/10">
                      <MapPin className="w-5 h-5 text-[#E10600]" />
                    </div>
                    <div>
                      <p className="text-xs text-[#8A8A95] mb-1">Address</p>
                      <p className="text-[#F5F5F7] font-medium">
                        {modalLocation.address}
                      </p>
                      <p className="text-[#8A8A95] text-sm">
                        {modalLocation.city}
                      </p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start gap-3 p-4 rounded-xl bg-[#0B0B0D] border border-[#2A2A33]">
                    <div className="p-2 rounded-lg bg-[#E10600]/10">
                      <Phone className="w-5 h-5 text-[#E10600]" />
                    </div>
                    <div>
                      <p className="text-xs text-[#8A8A95] mb-1">Phone</p>
                      <a
                        href={`tel:${modalLocation.phone.replace(/\s/g, '')}`}
                        className="text-[#F5F5F7] font-medium hover:text-[#E10600] transition-colors"
                      >
                        {modalLocation.phone}
                      </a>
                    </div>
                  </div>

                  {/* Working Hours */}
                  <div className="flex items-start gap-3 p-4 rounded-xl bg-[#0B0B0D] border border-[#2A2A33]">
                    <div className="p-2 rounded-lg bg-[#E10600]/10">
                      <Clock className="w-5 h-5 text-[#E10600]" />
                    </div>
                    <div>
                      <p className="text-xs text-[#8A8A95] mb-1">Working Hours</p>
                      <p className="text-[#F5F5F7] font-medium">
                        {modalLocation.hours}
                      </p>
                    </div>
                  </div>

                  {/* Directions */}
                  <a
                    href={`https://www.google.com/maps/dir/?api=1&destination=${modalLocation.lat},${modalLocation.lng}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 p-4 rounded-xl bg-[#E10600] text-white font-medium hover:bg-[#ff2a2a] transition-colors"
                  >
                    <Navigation className="w-5 h-5" />
                    Get Directions
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  )
}
