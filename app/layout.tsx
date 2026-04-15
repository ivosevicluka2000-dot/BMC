import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin', 'latin-ext'] })

export const metadata: Metadata = {
  title: 'Website Suspended',
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="sr" className="scroll-smooth">
      <body className={`${inter.className} bg-[#0B0B0D] text-[#F5F5F7] antialiased`} suppressHydrationWarning>
        <div className="min-h-screen flex items-center justify-center px-6">
          <div className="max-w-2xl w-full text-center space-y-10">
            <div className="space-y-4">
              <div className="inline-block px-4 py-1.5 rounded-full border border-red-500/30 bg-red-500/10 text-red-400 text-xs uppercase tracking-widest font-semibold mb-4">
                Website Suspended
              </div>
              <p className="text-white/80 text-lg leading-relaxed">
                This website has been used for an extended period without payment for its development. The agreed amount remains overdue, and this matter is still unresolved.
              </p>
            </div>

            <div className="w-16 h-px bg-white/10 mx-auto" />

            <div className="space-y-4">
              <div className="inline-block px-4 py-1.5 rounded-full border border-red-500/30 bg-red-500/10 text-red-400 text-xs uppercase tracking-widest font-semibold mb-4">
                Veb-sajt suspendovan
              </div>
              <p className="text-white/80 text-lg leading-relaxed">
                Ovaj veb-sajt je korišćen duži vremenski period bez plaćanja za njegov razvoj. Dogovoreni iznos je i dalje neizmiren i ovo pitanje još uvek nije rešeno.
              </p>
            </div>
          </div>
        </div>
      </body>
    </html>
  )
}
