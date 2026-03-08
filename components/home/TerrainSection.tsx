'use client'

import { motion } from 'framer-motion'
import { Hammer, TreePine, Mountain } from 'lucide-react'
import { useLanguage } from '@/lib/i18n'
import { TranslationKey } from '@/lib/i18n/translations/sr'

const terrainCards: {
  icon: typeof Hammer
  titleKey: TranslationKey
  descKey: TranslationKey
  gradient: string
}[] = [
  {
    icon: Hammer,
    titleKey: 'terrain.working',
    descKey: 'terrain.workingDesc',
    gradient: 'from-amber-500/20 to-transparent',
  },
  {
    icon: TreePine,
    titleKey: 'terrain.recreation',
    descKey: 'terrain.recreationDesc',
    gradient: 'from-emerald-500/20 to-transparent',
  },
  {
    icon: Mountain,
    titleKey: 'terrain.adventure',
    descKey: 'terrain.adventureDesc',
    gradient: 'from-brand/20 to-transparent',
  },
]

const TerrainSection: React.FC = () => {
  const { t } = useLanguage()

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-[#0B0B0D] relative overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white to-transparent" />

      <div className="max-w-screen-2xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-14 md:mb-20">
          <span className="text-white/50 uppercase tracking-[0.3em] md:tracking-[0.5em] text-[10px] font-bold mb-3 md:mb-4 block">
            {t('terrain.sectionLabel')}
          </span>
          <h2 className="serif text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extralight tracking-tight">
            {t('terrain.heading')}
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {terrainCards.map((card, index) => (
            <motion.div
              key={card.titleKey}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="group relative border border-white/10 bg-white/[0.02] hover:border-white/20 hover:bg-white/[0.04] transition-all duration-500 overflow-hidden"
            >
              {/* Gradient accent */}
              <div
                className={`absolute inset-0 bg-gradient-to-b ${card.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />

              <div className="relative z-10 p-8 md:p-10 lg:p-12 flex flex-col items-center text-center">
                <card.icon className="w-10 h-10 md:w-12 md:h-12 text-white/30 group-hover:text-white/70 mb-6 transition-colors duration-500" />

                <h3 className="text-white text-xl md:text-2xl font-bold uppercase tracking-wider mb-3">
                  {t(card.titleKey)}
                </h3>

                <div className="w-8 h-px bg-brand mb-4 group-hover:w-12 transition-all duration-500" />

                <p className="text-white/50 text-sm md:text-base leading-relaxed font-light">
                  {t(card.descKey)}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TerrainSection
