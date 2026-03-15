'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useLanguage } from '@/lib/i18n'

const brands = [
  { name: 'TGB', logo: '/brands/tgb.jpeg' },
  { name: 'Dayun', logo: '/brands/dayun.jpeg' },
  { name: 'Gusite', logo: '/brands/gusite.jpeg' },
]

export default function BrandRepresentative() {
  const { t } = useLanguage()

  return (
    <section className="py-16 sm:py-20 bg-[#0B0B0D] border-b border-[#1A1A1F]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-[#8A8A95] uppercase tracking-[0.3em] text-[10px] font-bold mb-4 block">
            {t('brands.sectionLabel')}
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#F5F5F7] mb-3 uppercase tracking-wide">
            {t('brands.heading')}
          </h2>
          <p className="text-[#8A8A95] text-sm sm:text-base mb-10 sm:mb-14">
            {t('brands.subtitle')}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10">
            {brands.map((brand, index) => (
              <motion.div
                key={brand.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="w-48 h-28 sm:w-56 sm:h-32 rounded-xl bg-[#1A1A1F] border border-[#2A2A33] flex items-center justify-center hover:border-[#E10600]/50 transition-colors duration-300 p-4"
              >
                <Image
                  src={brand.logo}
                  alt={`${brand.name} logo`}
                  width={200}
                  height={70}
                  className="w-full h-full object-contain"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
