'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import Link from 'next/link'
import { useLanguage, Locale } from '@/lib/i18n'
import { TranslationKey } from '@/lib/i18n/translations/sr'

const navLinks: { key: TranslationKey; href: string }[] = [
  { key: 'nav.home', href: '/' },
  { key: 'nav.about', href: '/#about' },
  { key: 'nav.shop', href: '/shop' },
  { key: 'nav.locations', href: '/locations' },
  { key: 'nav.contact', href: '/contact' },
]

function LanguageToggle() {
  const { locale, setLocale } = useLanguage()

  return (
    <div className="flex items-center bg-[#1A1A1F] rounded-lg border border-[#2A2A33] overflow-hidden">
      <button
        onClick={() => setLocale('sr')}
        className={`px-3 py-1.5 text-xs font-bold tracking-wider transition-all duration-200 ${
          locale === 'sr'
            ? 'bg-[#E10600] text-white'
            : 'text-[#8A8A95] hover:text-[#F5F5F7]'
        }`}
        aria-label="Srpski jezik"
      >
        SR
      </button>
      <button
        onClick={() => setLocale('en')}
        className={`px-3 py-1.5 text-xs font-bold tracking-wider transition-all duration-200 ${
          locale === 'en'
            ? 'bg-[#E10600] text-white'
            : 'text-[#8A8A95] hover:text-[#F5F5F7]'
        }`}
        aria-label="English language"
      >
        EN
      </button>
    </div>
  )
}

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { t } = useLanguage()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMobileMenuOpen])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0B0B0D]/90 backdrop-blur-lg border-b border-[#2A2A33]/50'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E10600] rounded-lg"
          >
            <img
              src="/download-removebg-preview.png"
              alt="BMC Logo"
              className="h-20 sm:h-24 w-auto"
              style={{ filter: 'drop-shadow(0 0 8px rgba(255,255,255,0.7)) drop-shadow(0 0 20px rgba(255,255,255,0.5)) drop-shadow(0 0 40px rgba(255,255,255,0.3))' }}
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.key}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-[#8A8A95] hover:text-[#F5F5F7] transition-colors rounded-lg hover:bg-[#1A1A1F] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E10600]"
              >
                {t(link.key)}
              </Link>
            ))}
            <div className="ml-2">
              <LanguageToggle />
            </div>
            <Link
              href="/contact"
              className="ml-3 px-5 py-2.5 text-sm font-semibold text-white bg-[#E10600] rounded-lg hover:bg-[#ff2a2a] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E10600] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B0B0D]"
            >
              {t('nav.getInTouch')}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-3 -mr-2 rounded-lg text-[#8A8A95] hover:text-[#F5F5F7] hover:bg-[#1A1A1F] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E10600] min-w-[44px] min-h-[44px] flex items-center justify-center"
            aria-label={isMobileMenuOpen ? t('nav.closeMenu') : t('nav.openMenu')}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-[#0B0B0D]/95 backdrop-blur-lg border-b border-[#2A2A33]"
          >
            <div className="max-w-6xl mx-auto px-4 py-4 space-y-1">
              {/* Language Toggle - Mobile */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0 }}
                className="flex justify-center pb-2"
              >
                <LanguageToggle />
              </motion.div>

              {navLinks.map((link, index) => (
                <motion.div
                  key={link.key}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: (index + 1) * 0.05 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block px-4 py-3.5 text-base font-medium text-[#8A8A95] hover:text-[#F5F5F7] hover:bg-[#1A1A1F] active:bg-[#2A2A33] rounded-lg transition-colors min-h-[44px] flex items-center"
                  >
                    {t(link.key)}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: (navLinks.length + 1) * 0.05 }}
                className="pt-2"
              >
                <Link
                  href="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block w-full px-4 py-3.5 text-center text-base font-semibold text-white bg-[#E10600] rounded-lg hover:bg-[#ff2a2a] active:bg-[#c00500] transition-colors min-h-[48px] flex items-center justify-center"
                >
                  {t('nav.getInTouch')}
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
