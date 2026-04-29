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
              {/* Serbia */}
              <div className="flex items-start gap-4">
                <span className="text-2xl mt-0.5">🇷🇸</span>
                <div>
                  <h3 className="text-white font-bold uppercase tracking-wider text-sm mb-2">{t('contact.serbia')}</h3>
                  <p className="text-white/60 text-sm">BalkanMotoCentar, Atar 100a, Kać 21241</p>
                  <div className="mt-1 space-y-0.5">
                    <p className="text-white/60 text-sm">
                      <a href="tel:+38162644263" className="hover:text-[#E10600] transition-colors">+381 62 644 263</a>
                      <span className="text-white/40"> ({t('contact.management')})</span>
                    </p>
                    <p className="text-white/60 text-sm">
                      <a href="tel:+38162644266" className="hover:text-[#E10600] transition-colors">+381 62 644 266</a>
                      <span className="text-white/40"> ({t('contact.sales')})</span>
                    </p>
                    <p className="text-white/60 text-sm">
                      <a href="tel:+38162644265" className="hover:text-[#E10600] transition-colors">+381 62 644 265</a>
                      <span className="text-white/40"> ({t('contact.sales')})</span>
                    </p>
                    <p className="text-white/60 text-sm">
                      <a href="tel:+38162644269" className="hover:text-[#E10600] transition-colors">+381 62 644 269</a>
                      <span className="text-white/40"> ({t('contact.service')})</span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Bosnia */}
              <div className="flex items-start gap-4">
                <span className="text-2xl mt-0.5">🇧🇦</span>
                <div>
                  <h3 className="text-white font-bold uppercase tracking-wider text-sm mb-2">{t('contact.bosnia')}</h3>
                  <p className="text-white/60 text-sm">Balkan Moto Centar, Prijedor</p>
                  <p className="text-white/60 text-sm mt-1">
                    <a href="tel:+38765006779" className="hover:text-[#E10600] transition-colors">+387 65 006779</a>
                  </p>
                </div>
              </div>

              {/* Macedonia */}
              <div className="flex items-start gap-4">
                <span className="text-2xl mt-0.5">🇲🇰</span>
                <div>
                  <h3 className="text-white font-bold uppercase tracking-wider text-sm mb-2">{t('contact.macedonia')}</h3>
                  <p className="text-white/60 text-sm">MOTO ILINDEN MK, Village of Marino, Str. 500 No.2D, Skopje 1000</p>
                  <div className="mt-1 space-y-0.5">
                    <p className="text-white/60 text-sm">
                      <a href="tel:+38970399277" className="hover:text-[#E10600] transition-colors">+389 70 399277</a>
                    </p>
                    <p className="text-white/60 text-sm">
                      <a href="tel:+38978311199" className="hover:text-[#E10600] transition-colors">+389 78 311199</a>
                      <span className="text-white/40"> ({t('contact.partner')} Moto Ilinden)</span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Montenegro */}
              <div className="flex items-start gap-4">
                <span className="text-2xl mt-0.5">🇲🇪</span>
                <div>
                  <h3 className="text-white font-bold uppercase tracking-wider text-sm mb-2">{t('contact.montenegro')}</h3>
                  <p className="text-white/60 text-sm">Mas trade d.o.o., bb Ilije Plamenca, Podgorica 81000</p>
                  <p className="text-white/60 text-sm mt-1">
                    <a href="tel:+38220230219" className="hover:text-[#E10600] transition-colors">+382 20 230 219</a>
                  </p>
                </div>
              </div>

              {/* Working Hours */}
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
