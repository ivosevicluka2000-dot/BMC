'use client'

import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Facebook, Instagram, Youtube, Twitter } from 'lucide-react'

const socialLinks = [
  { icon: Facebook, label: 'Facebook', href: '#' },
  { icon: Instagram, label: 'Instagram', href: '#' },
  { icon: Youtube, label: 'YouTube', href: '#' },
  { icon: Twitter, label: 'Twitter', href: '#' },
]

const footerLinks = {
  services: [
    { name: 'Maintenance', href: '#services' },
    { name: 'Diagnostics', href: '#services' },
    { name: 'Tire & Brake', href: '#services' },
    { name: 'Performance', href: '#services' },
  ],
  company: [
    { name: 'About Us', href: '#about' },
    { name: 'Membership', href: '#membership' },
    { name: 'Careers', href: '#' },
    { name: 'Partners', href: '#' },
  ],
}

export default function Footer() {
  return (
    <footer
      id="footer"
      className="relative bg-[#0B0B0D] border-t border-[#1A1A1F]"
      aria-label="Site footer"
    >
      {/* Subtle gradient at top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#2A2A33] to-transparent" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8"
        >
          {/* Brand Column */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className="text-xl font-bold text-[#F5F5F7] mb-3">
              Balkan Moto Center
            </h3>
            <p className="text-[#8A8A95] text-sm leading-relaxed mb-6 max-w-xs">
              Your trusted partner for premium motorcycle service, quality parts, 
              and a passionate rider community.
            </p>
            
            {/* Social Links */}
            <div className="flex items-center gap-2 sm:gap-3 -ml-2">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="p-3 sm:p-2.5 rounded-lg bg-[#1A1A1F] border border-[#2A2A33] text-[#8A8A95] hover:text-[#F5F5F7] hover:border-[#E10600] hover:bg-[#E10600]/10 active:bg-[#E10600]/20 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E10600] min-w-[44px] min-h-[44px] flex items-center justify-center"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 sm:w-4 sm:h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="text-sm font-semibold text-[#F5F5F7] uppercase tracking-wider mb-4">
              Services
            </h4>
            <ul className="space-y-1 sm:space-y-3 -ml-3 sm:ml-0">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="block px-3 sm:px-0 py-2 sm:py-0 text-[#8A8A95] text-sm hover:text-[#E10600] active:text-[#E10600] transition-colors focus:outline-none focus-visible:text-[#E10600] min-h-[44px] sm:min-h-0 flex items-center"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-sm font-semibold text-[#F5F5F7] uppercase tracking-wider mb-4">
              Company
            </h4>
            <ul className="space-y-1 sm:space-y-3 -ml-3 sm:ml-0">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="block px-3 sm:px-0 py-2 sm:py-0 text-[#8A8A95] text-sm hover:text-[#E10600] active:text-[#E10600] transition-colors focus:outline-none focus-visible:text-[#E10600] min-h-[44px] sm:min-h-0 flex items-center"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-sm font-semibold text-[#F5F5F7] uppercase tracking-wider mb-4">
              Contact
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#E10600] mt-0.5 flex-shrink-0" aria-hidden="true" />
                <address className="text-[#8A8A95] text-sm not-italic leading-relaxed">
                  123 Moto Boulevard<br />
                  Belgrade, Serbia 11000
                </address>
              </li>
              <li>
                <a
                  href="tel:+381111234567"
                  className="flex items-center gap-3 text-[#8A8A95] text-sm hover:text-[#E10600] active:text-[#E10600] transition-colors focus:outline-none focus-visible:text-[#E10600] py-2 sm:py-0 min-h-[44px] sm:min-h-0"
                >
                  <Phone className="w-4 h-4 text-[#E10600] flex-shrink-0" aria-hidden="true" />
                  +381 11 123 4567
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@balkanmoto.rs"
                  className="flex items-center gap-3 text-[#8A8A95] text-sm hover:text-[#E10600] active:text-[#E10600] transition-colors focus:outline-none focus-visible:text-[#E10600] py-2 sm:py-0 min-h-[44px] sm:min-h-0"
                >
                  <Mail className="w-4 h-4 text-[#E10600] flex-shrink-0" aria-hidden="true" />
                  info@balkanmoto.rs
                </a>
              </li>
            </ul>
          </div>
        </motion.div>

        <div className="mt-12 pt-8 border-t border-[#1A1A1F]">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[#8A8A95] text-xs">
            <p>© {new Date().getFullYear()} Balkan Moto Center. All rights reserved.</p>
            <div className="flex items-center gap-1 sm:gap-6 -mx-3 sm:mx-0">
              <a
                href="#"
                className="px-3 py-2 sm:p-0 hover:text-[#F5F5F7] active:text-[#F5F5F7] transition-colors focus:outline-none focus-visible:text-[#F5F5F7] min-h-[44px] sm:min-h-0 flex items-center"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="px-3 py-2 sm:p-0 hover:text-[#F5F5F7] active:text-[#F5F5F7] transition-colors focus:outline-none focus-visible:text-[#F5F5F7] min-h-[44px] sm:min-h-0 flex items-center"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
