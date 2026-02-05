'use client'

import { motion } from 'framer-motion'
import { Wrench, Shield, Cog, Fuel, Gauge, Settings } from 'lucide-react'

const services = [
  {
    icon: Wrench,
    title: 'Full Service',
    description: 'Complete maintenance packages for all motorcycle brands and models.'
  },
  {
    icon: Shield,
    title: 'Diagnostics',
    description: 'Advanced electronic diagnostics and fault detection systems.'
  },
  {
    icon: Cog,
    title: 'Custom Parts',
    description: 'OEM and aftermarket parts sourcing with guaranteed authenticity.'
  },
  {
    icon: Fuel,
    title: 'Performance',
    description: 'Engine tuning, exhaust upgrades, and power optimization.'
  },
  {
    icon: Gauge,
    title: 'Inspection',
    description: 'Pre-purchase inspections and technical certification.'
  },
  {
    icon: Settings,
    title: 'Restoration',
    description: 'Classic motorcycle restoration and custom builds.'
  }
]

const Services: React.FC = () => {
  return (
    <section id="services" className="py-16 md:py-24 lg:py-32 bg-[#0a0a0a]">
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-12 md:mb-16">
          <span className="text-white/50 uppercase tracking-[0.3em] md:tracking-[0.5em] text-[10px] font-bold mb-3 md:mb-4 block">
            What We Offer
          </span>
          <h2 className="serif text-3xl sm:text-4xl lg:text-5xl mb-4 md:mb-6">Our Services</h2>
          <p className="text-white/60 text-sm max-w-xl mx-auto leading-relaxed">
            Professional motorcycle services backed by years of expertise and a passion for precision.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group p-6 md:p-8 border border-white/10 bg-white/[0.02] hover:border-brand/30 hover:bg-white/[0.04] transition-all duration-300"
            >
              <service.icon className="w-8 h-8 text-brand mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-white text-lg font-bold uppercase tracking-wider mb-3">
                {service.title}
              </h3>
              <p className="text-white/50 text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
