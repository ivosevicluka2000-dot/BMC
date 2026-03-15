'use client'

import { motion } from 'framer-motion'
import { Facebook, Instagram } from 'lucide-react'
import { useLanguage } from '@/lib/i18n'

const socialLinks = [
  {
    icon: Facebook,
    label: 'Facebook',
    handle: 'Balkan MotoCentar',
    href: 'https://www.facebook.com/people/Balkan-MotoCentar/pfbid022qZJyZBqbRW4KprMHUcVDqfxLvt5cpurthdvAsu6SaMcrXRuABQrnsj4a8vmWqSVl/',
  },
  {
    icon: Instagram,
    label: 'Instagram',
    handle: '@balkan_moto_centar',
    href: 'https://www.instagram.com/balkan_moto_centar',
  },
]

export default function SocialSection() {
  const { t } = useLanguage()

  return (
    <section className="relative py-16 sm:py-20 bg-[#0B0B0D]">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#2A2A33] to-transparent" />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#F5F5F7] mb-3">
            {t('social.heading')}
          </h2>
          <p className="text-[#8A8A95] text-sm sm:text-base mb-10 max-w-lg mx-auto">
            {t('social.subtitle')}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group flex items-center gap-4 w-full sm:w-auto px-6 py-4 rounded-xl bg-[#1A1A1F] border border-[#2A2A33] hover:border-[#E10600]/50 hover:bg-[#E10600]/5 transition-all duration-300"
              >
                <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-[#E10600]/10 text-[#E10600] group-hover:bg-[#E10600]/20 transition-colors">
                  <social.icon className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <span className="block text-[#F5F5F7] text-sm font-semibold">{social.label}</span>
                  <span className="block text-[#8A8A95] text-xs">{social.handle}</span>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
