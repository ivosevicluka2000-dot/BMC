'use client'

import { motion } from 'framer-motion'
import { 
  Droplets, 
  Gauge, 
  CircleDot, 
  Zap, 
  Sparkles, 
  Package 
} from 'lucide-react'
import { ComponentType } from 'react'

interface Service {
  icon: ComponentType<{ className?: string }>
  name: string
  description: string
}

const services: Service[] = [
  {
    icon: Droplets,
    name: 'Maintenance & Oil Service',
    description: 'Regular oil changes and comprehensive maintenance to keep your engine running at peak performance.',
  },
  {
    icon: Gauge,
    name: 'Diagnostics',
    description: 'Advanced computer diagnostics to identify and resolve any issues with precision and accuracy.',
  },
  {
    icon: CircleDot,
    name: 'Tire & Brake Service',
    description: 'Professional tire mounting, balancing, and brake system service for maximum safety on the road.',
  },
  {
    icon: Zap,
    name: 'Performance Upgrades',
    description: 'Custom tuning, exhaust systems, and performance parts to unlock your bike\'s full potential.',
  },
  {
    icon: Sparkles,
    name: 'Detailing',
    description: 'Premium detailing services to keep your motorcycle looking showroom fresh.',
  },
  {
    icon: Package,
    name: 'Parts & Accessories',
    description: 'Wide selection of OEM and aftermarket parts, gear, and accessories for every rider.',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
}

export default function Services() {
  return (
    <section
      id="services"
      className="relative py-20 sm:py-28 lg:py-32 bg-[#0B0B0D]"
      aria-labelledby="services-heading"
    >
      {/* Background gradient accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#E10600]/5 rounded-full blur-[120px] pointer-events-none" />
      
      {/* Subtle top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#2A2A33] to-transparent" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2
            id="services-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4"
          >
            Our{' '}
            <span className="text-[#E10600]">Services</span>
          </h2>
          <p className="text-[#8A8A95] text-base sm:text-lg max-w-2xl mx-auto">
            From routine maintenance to performance upgrades, we've got everything 
            your motorcycle needs under one roof.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={containerVariants}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
        >
          {services.map((service, index) => (
            <motion.article
              key={index}
              variants={cardVariants}
              className="group relative p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-[#1A1A1F] to-[#0B0B0D] border border-[#2A2A33] hover:border-[#E10600] transition-all duration-500 hover:shadow-[0_0_40px_rgba(225,6,0,0.1)] hover:-translate-y-1"
            >
              {/* Glass overlay */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/[0.02] to-transparent pointer-events-none" />
              
              {/* Glow effect on hover */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-[#E10600]/5 to-transparent pointer-events-none" />

              <div className="relative">
                {/* Icon */}
                <div className="mb-5 inline-flex p-3 rounded-xl bg-[#2A2A33]/50 border border-[#2A2A33] group-hover:border-[#E10600]/30 group-hover:bg-[#E10600]/10 transition-all duration-300">
                  <service.icon 
                    className="w-6 h-6 text-[#8A8A95] group-hover:text-[#E10600] transition-colors duration-300" 
                    aria-hidden="true" 
                  />
                </div>

                {/* Content */}
                <h3 className="text-lg sm:text-xl font-semibold text-[#F5F5F7] mb-2 group-hover:text-white transition-colors duration-300">
                  {service.name}
                </h3>
                <p className="text-[#8A8A95] text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
