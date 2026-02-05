import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Balkan Moto Center | Premium Motorcycle Service',
  description: 'Premium motorcycle service, trusted parts, and rider community. Your trusted partner for all motorcycle needs.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-[#0B0B0D] text-[#F5F5F7] antialiased`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  )
}
