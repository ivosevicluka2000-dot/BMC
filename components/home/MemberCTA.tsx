'use client'

import { useState, useEffect, useRef, FormEvent } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Check, Star, Percent, Calendar } from 'lucide-react'

const benefits = [
  { icon: Percent, text: 'Exclusive discounts on parts and services' },
  { icon: Calendar, text: 'Priority booking for maintenance slots' },
  { icon: Star, text: 'Access to members-only events and rides' },
]

interface FormData {
  name: string
  email: string
  bikeModel: string
}

export default function MemberCTA() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [showToast, setShowToast] = useState(false)
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    bikeModel: '',
  })
  const modalRef = useRef<HTMLDivElement>(null)
  const firstInputRef = useRef<HTMLInputElement>(null)

  // Focus trap and escape key handling
  useEffect(() => {
    if (isModalOpen) {
      firstInputRef.current?.focus()
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isModalOpen) {
        setIsModalOpen(false)
      }
    }

    window.addEventListener('keydown', handleEscape)
    return () => {
      window.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = ''
    }
  }, [isModalOpen])

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setIsModalOpen(false)
    setShowToast(true)
    setFormData({ name: '', email: '', bikeModel: '' })

    setTimeout(() => {
      setShowToast(false)
    }, 4000)
  }

  return (
    <section
      id="membership"
      className="relative py-20 sm:py-28 lg:py-32 bg-[#0B0B0D]"
      aria-labelledby="membership-heading"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#E10600]/5 to-transparent pointer-events-none" />
      
      {/* Subtle top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#2A2A33] to-transparent" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#1A1A1F] to-[#0B0B0D] border border-[#2A2A33] p-8 sm:p-12 lg:p-16"
        >
          {/* Decorative gradient orb */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#E10600]/10 rounded-full blur-[150px] pointer-events-none -translate-y-1/2 translate-x-1/4" />
          
          {/* Glass overlay */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/[0.02] to-transparent pointer-events-none" />

          <div className="relative grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Content */}
            <div>
              <h2
                id="membership-heading"
                className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4"
              >
                Become a{' '}
                <span className="text-[#E10600]">Member</span>
              </h2>
              <p className="text-[#8A8A95] text-base sm:text-lg mb-8 max-w-lg">
                Join the Balkan Moto Center community and unlock exclusive benefits designed 
                for passionate riders like you.
              </p>

              {/* Benefits */}
              <ul className="space-y-4 mb-8">
                {benefits.map((benefit, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <div className="flex-shrink-0 p-2 rounded-lg bg-[#E10600]/10 border border-[#E10600]/20">
                      <benefit.icon className="w-4 h-4 text-[#E10600]" aria-hidden="true" />
                    </div>
                    <span className="text-[#F5F5F7] text-sm sm:text-base">
                      {benefit.text}
                    </span>
                  </motion.li>
                ))}
              </ul>

              {/* CTA Button */}
              <button
                onClick={() => setIsModalOpen(true)}
                className="group relative w-full sm:w-auto px-8 py-4 bg-[#E10600] text-white font-semibold rounded-xl overflow-hidden transition-all duration-300 hover:shadow-[0_0_40px_rgba(225,6,0,0.4)] active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E10600] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B0B0D] min-h-[48px]"
                aria-label="Join the club"
              >
                <span className="relative z-10">Join the club</span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#E10600] to-[#ff2a2a] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>
            </div>

            {/* Decorative element */}
            <div className="hidden lg:flex items-center justify-center">
              <div className="relative w-64 h-64">
                <div className="absolute inset-0 rounded-full border border-[#2A2A33] animate-pulse" />
                <div className="absolute inset-4 rounded-full border border-[#E10600]/20" />
                <div className="absolute inset-8 rounded-full border border-[#E10600]/30" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-6xl font-bold text-[#E10600]/80">BMC</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
          >
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
              onClick={() => setIsModalOpen(false)}
            />

            {/* Modal Content */}
            <motion.div
              ref={modalRef}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="relative w-full max-w-md max-h-[90vh] overflow-y-auto bg-gradient-to-br from-[#1A1A1F] to-[#0B0B0D] border border-[#2A2A33] rounded-2xl p-5 sm:p-6 md:p-8 shadow-2xl"
            >
              {/* Close button */}
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-3 right-3 sm:top-4 sm:right-4 p-2.5 rounded-lg text-[#8A8A95] hover:text-[#F5F5F7] hover:bg-[#2A2A33] active:bg-[#3A3A43] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E10600] min-w-[44px] min-h-[44px] flex items-center justify-center"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <h3
                id="modal-title"
                className="text-2xl font-bold text-[#F5F5F7] mb-2"
              >
                Join the Club
              </h3>
              <p className="text-[#8A8A95] text-sm mb-6">
                Fill out the form below to become a member.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-[#F5F5F7] mb-2"
                  >
                    Name
                  </label>
                  <input
                    ref={firstInputRef}
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full px-4 py-3.5 bg-[#0B0B0D] border border-[#2A2A33] rounded-xl text-[#F5F5F7] placeholder-[#8A8A95] focus:outline-none focus:border-[#E10600] focus:ring-1 focus:ring-[#E10600] transition-colors min-h-[48px] text-base"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-[#F5F5F7] mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full px-4 py-3.5 bg-[#0B0B0D] border border-[#2A2A33] rounded-xl text-[#F5F5F7] placeholder-[#8A8A95] focus:outline-none focus:border-[#E10600] focus:ring-1 focus:ring-[#E10600] transition-colors min-h-[48px] text-base"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="bikeModel"
                    className="block text-sm font-medium text-[#F5F5F7] mb-2"
                  >
                    Bike Model
                  </label>
                  <input
                    type="text"
                    id="bikeModel"
                    required
                    value={formData.bikeModel}
                    onChange={(e) =>
                      setFormData({ ...formData, bikeModel: e.target.value })
                    }
                    className="w-full px-4 py-3.5 bg-[#0B0B0D] border border-[#2A2A33] rounded-xl text-[#F5F5F7] placeholder-[#8A8A95] focus:outline-none focus:border-[#E10600] focus:ring-1 focus:ring-[#E10600] transition-colors min-h-[48px] text-base"
                    placeholder="e.g. Yamaha MT-09"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full mt-2 px-6 py-4 bg-[#E10600] text-white font-semibold rounded-xl hover:bg-[#ff2a2a] active:bg-[#c00500] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E10600] focus-visible:ring-offset-2 focus-visible:ring-offset-[#1A1A1F] min-h-[52px] text-base"
                >
                  Submit Application
                </button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Success Toast */}
      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, y: 50, x: '-50%' }}
            animate={{ opacity: 1, y: 0, x: '-50%' }}
            exit={{ opacity: 0, y: 50, x: '-50%' }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-4 sm:bottom-8 left-4 right-4 sm:left-1/2 sm:right-auto z-50 flex items-center gap-3 px-4 sm:px-6 py-3 sm:py-4 bg-gradient-to-r from-green-600 to-green-500 text-white rounded-xl shadow-lg sm:-translate-x-1/2"
            role="alert"
            aria-live="polite"
          >
            <div className="p-1 bg-white/20 rounded-full">
              <Check className="w-4 h-4" />
            </div>
            <span className="font-medium">
              Welcome to the club! We'll be in touch soon.
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
