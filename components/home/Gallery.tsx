'use client'

import { useState, useCallback, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'
import { useLanguage } from '@/lib/i18n'

// Gallery images from public/gallery/ folder
const GALLERY_IMAGES = [
  '/gallery/gallery-1.jpg',
  '/gallery/gallery-2.jpg',
  '/gallery/gallery-3.jpg',
  '/gallery/gallery-4.jpg',
  '/gallery/gallery-5.jpg',
  '/gallery/LandMax-Gallery-index.jpg',
  '/gallery/LandMax-Gallery-index2.jpg',
]

const Gallery: React.FC = () => {
  const { t } = useLanguage()
  const images = GALLERY_IMAGES
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(0)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const total = images.length

  const startAutoplay = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current)
    if (total <= 1) return
    timerRef.current = setInterval(() => {
      setDirection(1)
      setCurrent(prev => (prev + 1) % total)
    }, 5000)
  }, [total])

  useEffect(() => {
    startAutoplay()
    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
    }
  }, [startAutoplay])

  const go = useCallback(
    (dir: 1 | -1) => {
      if (total <= 1) return
      setDirection(dir)
      setCurrent(prev => (prev + dir + total) % total)
      startAutoplay()
    },
    [total, startAutoplay],
  )

  const variants = {
    enter: (d: number) => ({ x: d > 0 ? '100%' : '-100%', opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (d: number) => ({ x: d > 0 ? '-100%' : '100%', opacity: 0 }),
  }

  if (images.length === 0) return null

  return (
    <section className="py-16 md:py-24 bg-[#0a0a0a]">
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-10 md:mb-14">
          <span className="text-white/50 uppercase tracking-[0.3em] md:tracking-[0.5em] text-[10px] font-bold mb-3 block">
            {t('gallery.sectionLabel')}
          </span>
          <h2 className="serif text-3xl sm:text-4xl lg:text-5xl mb-4">
            {t('gallery.heading')}
          </h2>
        </div>

        {/* Slider */}
        <div className="relative">
          {/* Slides */}
          <div className="relative aspect-[16/9] md:aspect-[21/9] overflow-hidden bg-black/40 border border-white/10">
            <AnimatePresence initial={false} custom={direction} mode="popLayout">
              <motion.div
                key={current}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5, ease: 'easeInOut' }}
                className="absolute inset-0"
              >
                <Image
                  src={images[current]}
                  alt={`Gallery photo ${current + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 80vw"
                  priority={current === 0}
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Arrow buttons */}
          <button
            onClick={() => go(-1)}
            aria-label={t('gallery.prev')}
            className="absolute left-3 md:left-5 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-black/60 border border-white/20 text-white hover:bg-brand hover:border-brand transition-colors duration-200"
          >
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
          </button>
          <button
            onClick={() => go(1)}
            aria-label={t('gallery.next')}
            className="absolute right-3 md:right-5 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-black/60 border border-white/20 text-white hover:bg-brand hover:border-brand transition-colors duration-200"
          >
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
          </button>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setDirection(i > current ? 1 : -1)
                  setCurrent(i)
                  startAutoplay()
                }}
                aria-label={`Slide ${i + 1}`}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  i === current
                    ? 'bg-brand w-6'
                    : 'bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Gallery
