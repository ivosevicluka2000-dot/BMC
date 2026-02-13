'use client'

import { motion } from 'framer-motion'
import { products } from '@/data/products'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

// Select 3 featured products - prioritize bestsellers
const getFeaturedProducts = () => {
  const bestsellers = products.filter(p => 
    p.tags.some(t => t.toLowerCase().includes('bestseller')) && 
    p.availability !== 'Sold Out'
  )
  
  // If we have 3+ bestsellers, use them
  if (bestsellers.length >= 3) {
    return bestsellers.slice(0, 3)
  }
  
  // Otherwise fill with other in-stock products
  const others = products.filter(p => 
    !p.tags.some(t => t.toLowerCase().includes('bestseller')) &&
    p.availability !== 'Sold Out'
  )
  
  return [...bestsellers, ...others].slice(0, 3)
}

const badges = [
  { label: 'Top Seller', className: 'bg-amber-500 text-black' },
  { label: 'Fan Favorite', className: 'bg-brand text-white' },
  { label: 'Club Pick', className: 'bg-white text-black' }
]

const ShopPreview: React.FC = () => {
  const featuredProducts = getFeaturedProducts()

  return (
    <section id="shop-preview" className="py-16 md:py-24 lg:py-32 bg-[#0a0a0a]">
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="text-white/50 uppercase tracking-[0.3em] md:tracking-[0.5em] text-[10px] font-bold mb-3 md:mb-4 block">
            Official Merch
          </span>
          <h2 className="serif text-3xl sm:text-4xl lg:text-5xl mb-4 md:mb-6">Club Shop</h2>
          <p className="text-white/60 text-sm max-w-xl mx-auto leading-relaxed">
            Gear up with official Balkan Moto Club merchandise. Premium quality apparel and accessories for true riders.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {featuredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-white/[0.02] border border-white/10 hover:border-brand/30 hover:bg-white/[0.04] transition-all duration-300 overflow-hidden"
            >
              {/* Badge */}
              <div className="absolute top-4 left-4 z-10">
                <span className={`px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider ${badges[index].className}`}>
                  {badges[index].label}
                </span>
              </div>

              {/* Product Image */}
              <div className="relative aspect-square overflow-hidden bg-black/50">
                <Image
                  src={product.images[0]}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>

              {/* Product Info */}
              <div className="p-5 md:p-6">
                <span className="text-white/40 text-[10px] uppercase tracking-widest mb-2 block">
                  {product.category}
                </span>
                <h3 className="text-white text-lg font-bold uppercase tracking-wider mb-2 group-hover:text-brand transition-colors">
                  {product.name}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed mb-4 line-clamp-2">
                  {product.shortDesc}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-brand font-bold text-xl">
                    €{product.priceEur}
                  </span>
                  <span className="text-white/30 text-xs uppercase tracking-wider">
                    {product.availability}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12 md:mt-16"
        >
          <Link
            href="/shop"
            className="inline-flex items-center gap-3 bg-brand text-white px-8 md:px-10 py-4 text-sm font-bold uppercase tracking-[0.15em] md:tracking-widest hover:bg-white hover:text-black transition-colors duration-300 active:scale-95"
          >
            Shop All Products
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default ShopPreview
