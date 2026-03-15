'use client'

import { createContext, useContext, useState, useEffect, useCallback, ReactNode } from 'react'
import sr, { TranslationKey } from './translations/sr'
import en from './translations/en'

export type Locale = 'sr' | 'en'

const translations: Record<Locale, Record<TranslationKey, string>> = { sr, en }

interface LanguageContextType {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: (key: TranslationKey) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

const STORAGE_KEY = 'bmc-locale'

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>('sr')
  const [mounted, setMounted] = useState(false)

  // Initialize from localStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY) as Locale | null
      if (stored === 'en' || stored === 'sr') {
        setLocaleState(stored)
      }
    } catch {
      // localStorage not available
    }
    setMounted(true)
  }, [])

  // Update html lang attribute and localStorage when locale changes
  useEffect(() => {
    if (!mounted) return
    document.documentElement.lang = locale
    try {
      localStorage.setItem(STORAGE_KEY, locale)
    } catch {
      // localStorage not available
    }
  }, [locale, mounted])

  const setLocale = useCallback((newLocale: Locale) => {
    setLocaleState(newLocale)
  }, [])

  const t = useCallback(
    (key: TranslationKey): string => {
      return translations[locale][key] || translations['sr'][key] || key
    },
    [locale]
  )

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage(): LanguageContextType {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}

// Helper to translate availability status
export function translateAvailability(
  availability: string,
  t: (key: TranslationKey) => string
): string {
  const map: Record<string, TranslationKey> = {
    'In Stock': 'availability.inStock',
    'Low Stock': 'availability.lowStock',
    'Pre-Order': 'availability.preOrder',
    'Sold Out': 'availability.soldOut',
  }
  return map[availability] ? t(map[availability]) : availability
}

// Helper to translate location categories
export function translateLocationCategory(
  category: string,
  t: (key: TranslationKey) => string
): string {
  const map: Record<string, TranslationKey> = {
    'Official Dealer': 'locCategory.officialDealer',
    'Partner Store': 'locCategory.partnerStore',
    'Full Service': 'locCategory.fullService',
    'Customization': 'locCategory.customization',
    'Emergency Repair': 'locCategory.emergencyRepair',
    'Performance': 'locCategory.performance',
    'Restoration': 'locCategory.restoration',
    'Tire Service': 'locCategory.tireService',
  }
  return map[category] ? t(map[category]) : category
}

// Helper to translate location descriptions
export function translateLocationDescription(
  locationId: string,
  t: (key: TranslationKey) => string
): string | null {
  const map: Record<string, TranslationKey> = {
    'shop-1': 'loc.shop1.desc',
    'shop-2': 'loc.shop2.desc',
    'shop-3': 'loc.shop3.desc',
    'shop-4': 'loc.shop4.desc',
  }
  return map[locationId] ? t(map[locationId]) : null
}

// Helper to translate product group names
export function translateGroup(
  group: string,
  t: (key: TranslationKey) => string
): string {
  const map: Record<string, TranslationKey> = {
    'All': 'products.all',
    'Products': 'products.productsGroup',
    'Accessories': 'products.accessoriesGroup',
  }
  return map[group] ? t(map[group]) : group
}

// ── Product text localization ──────────────────────────────
import { productTranslationsSr } from '@/data/product-translations-sr'

export interface LocalizedProductText {
  shortDesc: string
  fullDesc: string
  tagline?: string
  keyFeatures?: { title: string; description: string }[]
}

/**
 * Returns localized text for a product.
 * If locale is 'sr' and a Serbian translation exists, use it; otherwise fall back to original English.
 */
export function getLocalizedProductText(
  product: { id: string; shortDesc: string; fullDesc: string; tagline?: string; keyFeatures?: { title: string; description: string }[] },
  locale: 'sr' | 'en'
): LocalizedProductText {
  if (locale === 'sr') {
    const sr = productTranslationsSr[product.id]
    if (sr) {
      return {
        shortDesc: sr.shortDesc ?? product.shortDesc,
        fullDesc: sr.fullDesc ?? product.fullDesc,
        tagline: sr.tagline ?? product.tagline,
        keyFeatures: sr.keyFeatures ?? product.keyFeatures,
      }
    }
  }
  return {
    shortDesc: product.shortDesc,
    fullDesc: product.fullDesc,
    tagline: product.tagline,
    keyFeatures: product.keyFeatures,
  }
}
