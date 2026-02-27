import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { LanguageProvider } from '@/lib/i18n'

const inter = Inter({ subsets: ['latin', 'latin-ext'] })

export const metadata: Metadata = {
  title: 'Balkan Moto Centar | Vrhunski servis motocikala',
  description: 'Vrhunski servis motocikala, provereni delovi i zajednica vozača. Vaš pouzdani partner za sve potrebe u vezi sa motociklima.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="sr" className="scroll-smooth">
      <body className={`${inter.className} bg-[#0B0B0D] text-[#F5F5F7] antialiased`} suppressHydrationWarning>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  )
}
