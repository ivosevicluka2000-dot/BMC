'use client'

import { motion } from 'framer-motion'
import { Wrench, Shield, Cog, Fuel, Gauge, Settings } from 'lucide-react'
import { useLanguage } from '@/lib/i18n'
import { TranslationKey } from '@/lib/i18n/translations/sr'

const serviceKeys: { icon: typeof Wrench; titleKey: TranslationKey; descKey: TranslationKey }[] = [
  { icon: Wrench, titleKey: 'services.fullService', descKey: 'services.fullServiceDesc' },
  { icon: Shield, titleKey: 'services.diagnostics', descKey: 'services.diagnosticsDesc' },
  { icon: Cog, titleKey: 'services.customParts', descKey: 'services.customPartsDesc' },
  { icon: Fuel, titleKey: 'services.performance', descKey: 'services.performanceDesc' },
  { icon: Gauge, titleKey: 'services.inspection', descKey: 'services.inspectionDesc' },
  { icon: Settings, titleKey: 'services.restoration', descKey: 'services.restorationDesc' },
]

const Services: React.FC = () => {
  const { t } = useLanguage()

  return (
    <section id="services" className="py-16 md:py-24 lg:py-32 bg-[#0a0a0a]">
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-12 md:mb-16">
          <span className="text-white/50 uppercase tracking-[0.3em] md:tracking-[0.5em] text-[10px] font-bold mb-3 md:mb-4 block">
            {t('services.sectionLabel')}
          </span>
          <h2 className="serif text-3xl sm:text-4xl lg:text-5xl mb-4 md:mb-6">{t('services.heading')}</h2>
          <p className="text-white/60 text-sm max-w-xl mx-auto leading-relaxed">
            {t('services.description')}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {serviceKeys.map((service, index) => (
            <motion.div
              key={service.titleKey}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group p-6 md:p-8 border border-white/10 bg-white/[0.02] hover:border-brand/30 hover:bg-white/[0.04] transition-all duration-300"
            >
              <service.icon className="w-8 h-8 text-brand mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-white text-lg font-bold uppercase tracking-wider mb-3">
                {t(service.titleKey)}
              </h3>
              <p className="text-white/50 text-sm leading-relaxed">
                {t(service.descKey)}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
