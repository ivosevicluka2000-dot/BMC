'use client'

import { useState, FormEvent } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react'
import Header from '@/components/home/Header'
import Footer from '@/components/home/Footer'
import { useLanguage } from '@/lib/i18n'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const { t } = useLanguage()

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000))
    setSubmitted(true)
    setIsSubmitting(false)
  }

  return (
    <main className="min-h-screen bg-[#050505]">
      <Header />
      
      <section className="pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-12 md:mb-16">
            <span className="text-white/50 uppercase tracking-[0.3em] text-[10px] font-bold mb-4 block">
              {t('contact.sectionLabel')}
            </span>
            <h1 className="serif text-4xl sm:text-5xl lg:text-6xl mb-4">{t('contact.heading')}</h1>
            <p className="text-white/60 text-sm max-w-xl mx-auto">
              {t('contact.description')}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-brand mt-1" />
                <div>
                  <h3 className="text-white font-bold uppercase tracking-wider text-sm mb-2">{t('contact.address')}</h3>
                  <p className="text-white/60 text-sm">12 Bulevar Kralja Petra<br />Belgrade, Serbia</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <Phone className="w-5 h-5 text-brand mt-1" />
                <div>
                  <h3 className="text-white font-bold uppercase tracking-wider text-sm mb-2">{t('contact.phone')}</h3>
                  <p className="text-white/60 text-sm">+381 11 123 4567</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <Mail className="w-5 h-5 text-brand mt-1" />
                <div>
                  <h3 className="text-white font-bold uppercase tracking-wider text-sm mb-2">{t('contact.email')}</h3>
                  <p className="text-white/60 text-sm">info@balkanmoto.club</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <Clock className="w-5 h-5 text-brand mt-1" />
                <div>
                  <h3 className="text-white font-bold uppercase tracking-wider text-sm mb-2">{t('contact.hours')}</h3>
                  <p className="text-white/60 text-sm whitespace-pre-line">{t('contact.hoursValue')}</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              {submitted ? (
                <div className="text-center py-12 border border-brand/30 bg-brand/5">
                  <p className="text-brand font-bold uppercase tracking-wider">{t('contact.sent')}</p>
                  <p className="text-white/60 text-sm mt-2">{t('contact.sentDesc')}</p>
                </div>
              ) : (
                <>
                  <input
                    type="text"
                    placeholder={t('contact.yourName')}
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 px-4 py-4 text-white placeholder:text-white/40 text-sm focus:outline-none focus:border-brand/50"
                  />
                  <input
                    type="email"
                    placeholder={t('contact.emailAddress')}
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 px-4 py-4 text-white placeholder:text-white/40 text-sm focus:outline-none focus:border-brand/50"
                  />
                  <input
                    type="tel"
                    placeholder={t('contact.phoneNumber')}
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 px-4 py-4 text-white placeholder:text-white/40 text-sm focus:outline-none focus:border-brand/50"
                  />
                  <textarea
                    placeholder={t('contact.yourMessage')}
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 px-4 py-4 text-white placeholder:text-white/40 text-sm focus:outline-none focus:border-brand/50 resize-none"
                  />
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-brand text-white py-4 font-bold uppercase tracking-wider text-sm hover:bg-white hover:text-black transition-colors duration-300 flex items-center justify-center gap-2 disabled:opacity-50"
                  >
                    <Send className="w-4 h-4" />
                    {isSubmitting ? t('contact.sending') : t('contact.send')}
                  </button>
                </>
              )}
            </motion.form>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
