'use client'

import { useState, FormEvent } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Mail, Check, Send, HelpCircle, ChevronDown } from 'lucide-react'
import Header from '@/components/home/Header'
import Footer from '@/components/home/Footer'

const contactEmail = {
  icon: Mail,
  label: 'Email',
  value: 'info@balkanmoto.rs',
  href: 'mailto:info@balkanmoto.rs',
}

const faqs = [
  {
    question: 'How do I become a member of the club?',
    answer: 'Simply fill out the membership form on our website or visit us in person. Membership is open to all motorcycle enthusiasts regardless of the bike they ride.',
  },
  {
    question: 'Do you offer motorcycle servicing?',
    answer: 'Yes! We partner with certified mechanics who offer exclusive discounts to our members. Check out our Locations page for partner shops near you.',
  },
  {
    question: 'When are the group rides organized?',
    answer: 'We organize group rides every weekend, weather permitting. Follow us on social media or check your email for upcoming ride announcements and routes.',
  },
]

interface FormData {
  name: string
  email: string
  phone: string
  subject: string
  message: string
}

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))

    setIsSubmitting(false)
    setShowSuccess(true)
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    })

    setTimeout(() => {
      setShowSuccess(false)
    }, 5000)
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#0B0B0D] pt-20">
        {/* Hero Section */}
        <section className="relative py-16 sm:py-24 overflow-hidden">
          {/* Background gradient */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#E10600]/5 rounded-full blur-[120px] pointer-events-none" />

          <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12 sm:mb-16"
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
                Get in{' '}
                <span className="text-[#E10600]">Touch</span>
              </h1>
              <p className="text-[#8A8A95] text-lg sm:text-xl max-w-2xl mx-auto">
                Have a question or need service? We're here to help. 
                Reach out and let's talk about your motorcycle needs.
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-[#1A1A1F] to-[#0B0B0D] border border-[#2A2A33]"
              >
                {/* Glass overlay */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/[0.02] to-transparent pointer-events-none" />

                <div className="relative">
                  <h2 className="text-2xl font-bold text-[#F5F5F7] mb-6">
                    Send us a Message
                  </h2>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium text-[#F5F5F7] mb-2"
                        >
                          Name *
                        </label>
                        <input
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
                          Email *
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
                    </div>

                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label
                          htmlFor="phone"
                          className="block text-sm font-medium text-[#F5F5F7] mb-2"
                        >
                          Phone
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          value={formData.phone}
                          onChange={(e) =>
                            setFormData({ ...formData, phone: e.target.value })
                          }
                          className="w-full px-4 py-3.5 bg-[#0B0B0D] border border-[#2A2A33] rounded-xl text-[#F5F5F7] placeholder-[#8A8A95] focus:outline-none focus:border-[#E10600] focus:ring-1 focus:ring-[#E10600] transition-colors min-h-[48px] text-base"
                          placeholder="+381 11 123 4567"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="subject"
                          className="block text-sm font-medium text-[#F5F5F7] mb-2"
                        >
                          Subject *
                        </label>
                        <input
                          type="text"
                          id="subject"
                          required
                          value={formData.subject}
                          onChange={(e) =>
                            setFormData({ ...formData, subject: e.target.value })
                          }
                          className="w-full px-4 py-3.5 bg-[#0B0B0D] border border-[#2A2A33] rounded-xl text-[#F5F5F7] placeholder-[#8A8A95] focus:outline-none focus:border-[#E10600] focus:ring-1 focus:ring-[#E10600] transition-colors min-h-[48px] text-base"
                          placeholder="How can we help?"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-[#F5F5F7] mb-2"
                      >
                        Message *
                      </label>
                      <textarea
                        id="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                        className="w-full px-4 py-3.5 bg-[#0B0B0D] border border-[#2A2A33] rounded-xl text-[#F5F5F7] placeholder-[#8A8A95] focus:outline-none focus:border-[#E10600] focus:ring-1 focus:ring-[#E10600] transition-colors resize-none text-base"
                        placeholder="Tell us about your motorcycle or what you need..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="group relative w-full px-6 py-4 bg-[#E10600] text-white font-semibold rounded-xl overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(225,6,0,0.4)] active:bg-[#c00500] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E10600] focus-visible:ring-offset-2 focus-visible:ring-offset-[#1A1A1F] disabled:opacity-50 disabled:cursor-not-allowed min-h-[52px] text-base"
                    >
                      <span className="relative z-10 flex items-center justify-center gap-2">
                        {isSubmitting ? (
                          <>
                            <svg
                              className="animate-spin w-5 h-5"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                            >
                              <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                              />
                              <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                              />
                            </svg>
                            Sending...
                          </>
                        ) : (
                          <>
                            <Send className="w-5 h-5" />
                            Send Message
                          </>
                        )}
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-[#E10600] to-[#ff2a2a] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </button>
                  </form>
                </div>
              </motion.div>

              {/* Contact Info & FAQ */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="space-y-8"
              >
                {/* Email Card */}
                <div>
                  <h2 className="text-2xl font-bold text-[#F5F5F7] mb-4">
                    Contact Information
                  </h2>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="group relative p-5 rounded-xl bg-gradient-to-br from-[#1A1A1F] to-[#0B0B0D] border border-[#2A2A33] hover:border-[#E10600]/30 transition-all duration-300"
                  >
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/[0.02] to-transparent pointer-events-none" />
                    <div className="relative flex items-start gap-4">
                      <div className="flex-shrink-0 p-3 rounded-xl bg-[#E10600]/10 border border-[#E10600]/20 group-hover:bg-[#E10600]/20 transition-colors">
                        <Mail className="w-5 h-5 text-[#E10600]" aria-hidden="true" />
                      </div>
                      <div>
                        <p className="text-sm text-[#8A8A95] mb-1">{contactEmail.label}</p>
                        <a
                          href={contactEmail.href}
                          className="text-[#F5F5F7] font-medium hover:text-[#E10600] transition-colors"
                        >
                          {contactEmail.value}
                        </a>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* FAQ Section */}
                <div>
                  <h2 className="text-2xl font-bold text-[#F5F5F7] mb-4">
                    Frequently Asked Questions
                  </h2>
                  <div className="space-y-3">
                    {faqs.map((faq, index) => (
                      <motion.details
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                        className="group relative rounded-xl bg-gradient-to-br from-[#1A1A1F] to-[#0B0B0D] border border-[#2A2A33] hover:border-[#E10600]/30 transition-all duration-300 overflow-hidden"
                      >
                        <summary className="flex items-center justify-between gap-4 p-5 cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                          <div className="flex items-center gap-3">
                            <div className="flex-shrink-0 p-2 rounded-lg bg-[#E10600]/10 border border-[#E10600]/20">
                              <HelpCircle className="w-4 h-4 text-[#E10600]" aria-hidden="true" />
                            </div>
                            <span className="text-[#F5F5F7] font-medium text-sm sm:text-base">{faq.question}</span>
                          </div>
                          <ChevronDown className="w-5 h-5 text-[#8A8A95] transition-transform duration-300 group-open:rotate-180 flex-shrink-0" />
                        </summary>
                        <div className="px-5 pb-5 pt-0">
                          <p className="text-[#8A8A95] text-sm leading-relaxed pl-11">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.details>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />

      {/* Success Toast */}
      <AnimatePresence>
        {showSuccess && (
          <motion.div
            initial={{ opacity: 0, y: 50, x: '-50%' }}
            animate={{ opacity: 1, y: 0, x: '-50%' }}
            exit={{ opacity: 0, y: 50, x: '-50%' }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-8 left-1/2 z-50 flex items-center gap-3 px-6 py-4 bg-gradient-to-r from-green-600 to-green-500 text-white rounded-xl shadow-lg"
            role="alert"
            aria-live="polite"
          >
            <div className="p-1 bg-white/20 rounded-full">
              <Check className="w-4 h-4" />
            </div>
            <span className="font-medium">
              Message sent! We'll get back to you soon.
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
