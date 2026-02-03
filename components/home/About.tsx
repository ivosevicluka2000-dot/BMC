'use client'

import { motion } from 'framer-motion'
import { Activity, Settings, Zap } from 'lucide-react'

const highlights = [
  {
    icon: Activity,
    title: 'Diagnostics',
    description: 'State-of-the-art diagnostic equipment for precise troubleshooting',
  },
  {
    icon: Settings,
    title: 'Maintenance',
    description: 'Regular service and maintenance to keep your ride running smooth',
  },
  {
    icon: Zap,
    title: 'Performance Upgrades',
    description: 'Custom tuning and upgrades to maximize your bike\'s potential',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
}

export default function About() {
  return (
    <section
      id="about"
      className="relative py-20 sm:py-28 lg:py-32 bg-[#0B0B0D]"
      aria-labelledby="about-heading"
    >
      {/* Subtle top gradient */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#2A2A33] to-transparent" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
          className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center"
        >
          {/* Text Content */}
          <motion.div variants={itemVariants}>
            <h2
              id="about-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 tracking-tight"
            >
              About{' '}
              <span className="text-[#E10600]">Us</span>
            </h2>
            
            <div className="space-y-4 text-[#8A8A95] text-base sm:text-lg leading-relaxed">
              <p>
                At Balkan Moto Center, we live and breathe motorcycles. With over a decade of experience 
                in the industry, our team of certified technicians brings unmatched expertise to every 
                service we perform.
              </p>
              <p>
                We're not just a service center—we're a community of riders who understand the passion 
                that drives you. Whether you need routine maintenance, complex repairs, or performance 
                upgrades, we treat every bike as if it were our own.
              </p>
              <p>
                Quality parts, honest advice, and meticulous attention to detail are the foundations 
                of everything we do.
              </p>
            </div>
          </motion.div>

          {/* Highlights Cards */}
          <motion.div
            variants={containerVariants}
            className="grid gap-4"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group relative p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-[#1A1A1F] to-[#0B0B0D] border border-[#2A2A33] hover:border-[#E10600]/30 transition-all duration-500"
              >
                {/* Glass effect overlay */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/[0.02] to-transparent pointer-events-none" />
                
                <div className="relative flex items-start gap-4">
                  <div className="flex-shrink-0 p-3 rounded-xl bg-[#E10600]/10 border border-[#E10600]/20 group-hover:bg-[#E10600]/20 transition-colors duration-300">
                    <item.icon className="w-6 h-6 text-[#E10600]" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#F5F5F7] mb-1">
                      {item.title}
                    </h3>
                    <p className="text-[#8A8A95] text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
