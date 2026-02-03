'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Search, Filter, X } from 'lucide-react'
import Header from '@/components/home/Header'
import Footer from '@/components/home/Footer'

const categories = [
  'All',
  'Helmets',
  'Jackets',
  'Gloves',
  'Boots',
  'Parts',
  'Accessories',
]

const products = [
  {
    id: 1,
    name: 'Sport Racing Helmet',
    category: 'Helmets',
    price: 299.99,
    image: 'https://images.unsplash.com/photo-1591637333184-19aa84b3e01f?q=80&w=800&auto=format&fit=crop',
    description: 'Full-face helmet with advanced ventilation system',
  },
  {
    id: 2,
    name: 'Modular Touring Helmet',
    category: 'Helmets',
    price: 349.99,
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=800&auto=format&fit=crop',
    description: 'Flip-up helmet perfect for long rides',
  },
  {
    id: 3,
    name: 'Leather Racing Jacket',
    category: 'Jackets',
    price: 459.99,
    image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?q=80&w=800&auto=format&fit=crop',
    description: 'Premium cowhide leather with CE armor',
  },
  {
    id: 4,
    name: 'Textile Adventure Jacket',
    category: 'Jackets',
    price: 279.99,
    image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=800&auto=format&fit=crop',
    description: 'Waterproof touring jacket with thermal liner',
  },
  {
    id: 5,
    name: 'Racing Gloves',
    category: 'Gloves',
    price: 129.99,
    image: 'https://images.unsplash.com/photo-1615486511484-92e172cc4fe0?q=80&w=800&auto=format&fit=crop',
    description: 'Kangaroo leather with carbon knuckle protection',
  },
  {
    id: 6,
    name: 'Winter Touring Gloves',
    category: 'Gloves',
    price: 89.99,
    image: 'https://images.unsplash.com/photo-1584735174914-5a39e4f61418?q=80&w=800&auto=format&fit=crop',
    description: 'Insulated waterproof gloves for cold weather',
  },
  {
    id: 7,
    name: 'Sport Riding Boots',
    category: 'Boots',
    price: 249.99,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=800&auto=format&fit=crop',
    description: 'Reinforced ankle support with toe slider',
  },
  {
    id: 8,
    name: 'Adventure Touring Boots',
    category: 'Boots',
    price: 289.99,
    image: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?q=80&w=800&auto=format&fit=crop',
    description: 'Waterproof boots for on and off-road',
  },
  {
    id: 9,
    name: 'Performance Brake Pads',
    category: 'Parts',
    price: 79.99,
    image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=800&auto=format&fit=crop',
    description: 'Sintered brake pads for improved stopping',
  },
  {
    id: 10,
    name: 'LED Headlight Kit',
    category: 'Parts',
    price: 159.99,
    image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?q=80&w=800&auto=format&fit=crop',
    description: 'High-output LED conversion kit',
  },
  {
    id: 11,
    name: 'Tank Bag',
    category: 'Accessories',
    price: 119.99,
    image: 'https://images.unsplash.com/photo-1553531384-397c80973a0b?q=80&w=800&auto=format&fit=crop',
    description: 'Magnetic mount with rain cover',
  },
  {
    id: 12,
    name: 'Bluetooth Intercom',
    category: 'Accessories',
    price: 199.99,
    image: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?q=80&w=800&auto=format&fit=crop',
    description: 'Rider-to-rider communication up to 1.6km',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: 'easeOut',
    },
  },
}

export default function ShopPage() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedProduct, setSelectedProduct] = useState<typeof products[0] | null>(null)

  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      selectedCategory === 'All' || product.category === selectedCategory
    const matchesSearch =
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#0B0B0D] pt-20">
        {/* Hero Section */}
        <section className="relative py-12 sm:py-16 overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#E10600]/5 rounded-full blur-[120px] pointer-events-none" />

          <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-10"
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
                Our <span className="text-[#E10600]">Shop</span>
              </h1>
              <p className="text-[#8A8A95] text-lg sm:text-xl max-w-2xl mx-auto">
                Quality gear and parts for every rider. Visit us in store to purchase.
              </p>
            </motion.div>

            {/* Search and Filter */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex flex-col sm:flex-row gap-4 mb-8"
            >
              {/* Search */}
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#8A8A95]" />
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3.5 bg-[#1A1A1F] border border-[#2A2A33] rounded-xl text-[#F5F5F7] placeholder-[#8A8A95] focus:outline-none focus:border-[#E10600] transition-colors min-h-[48px] text-base"
                />
              </div>

              {/* Category Filter */}
              <div className="flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0 scrollbar-hide -mx-4 px-4 sm:mx-0 sm:px-0">
                <Filter className="w-5 h-5 text-[#8A8A95] flex-shrink-0 hidden sm:block" />
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2.5 text-sm font-medium rounded-lg whitespace-nowrap transition-all duration-300 min-h-[44px] active:scale-95 ${
                      selectedCategory === category
                        ? 'bg-[#E10600] text-white'
                        : 'bg-[#1A1A1F] text-[#8A8A95] hover:text-[#F5F5F7] border border-[#2A2A33] hover:border-[#E10600]/30'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Products Grid */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={containerVariants}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6"
            >
              {filteredProducts.map((product) => (
                <motion.article
                  key={product.id}
                  variants={cardVariants}
                  onClick={() => setSelectedProduct(product)}
                  className="group relative rounded-2xl bg-gradient-to-br from-[#1A1A1F] to-[#0B0B0D] border border-[#2A2A33] hover:border-[#E10600]/50 active:border-[#E10600] transition-all duration-300 cursor-pointer overflow-hidden hover:shadow-[0_0_30px_rgba(225,6,0,0.1)] active:scale-[0.98]"
                >
                  {/* Image */}
                  <div className="relative aspect-square overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0D] via-transparent to-transparent opacity-60" />
                  </div>

                  {/* Content */}
                  <div className="p-4">
                    <span className="text-xs font-medium text-[#E10600] uppercase tracking-wider">
                      {product.category}
                    </span>
                    <h3 className="text-base font-semibold text-[#F5F5F7] mt-1 mb-2 group-hover:text-white transition-colors line-clamp-1">
                      {product.name}
                    </h3>
                    <p className="text-[#8A8A95] text-sm line-clamp-2 mb-3">
                      {product.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xl font-bold text-[#F5F5F7]">
                        €{product.price.toFixed(2)}
                      </span>
                      <span className="text-xs text-[#8A8A95] bg-[#2A2A33] px-2 py-1 rounded-md">
                        In Store
                      </span>
                    </div>
                  </div>
                </motion.article>
              ))}
            </motion.div>

            {/* No Results */}
            {filteredProducts.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-16"
              >
                <p className="text-[#8A8A95] text-lg">
                  No products found. Try a different search or category.
                </p>
              </motion.div>
            )}

            {/* Store Notice */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-12 p-6 rounded-2xl bg-gradient-to-br from-[#1A1A1F] to-[#0B0B0D] border border-[#2A2A33] text-center"
            >
              <h3 className="text-lg font-semibold text-[#F5F5F7] mb-2">
                Visit Our Store
              </h3>
              <p className="text-[#8A8A95] text-sm max-w-xl mx-auto">
                All products are available for purchase at our physical location. 
                Contact us for availability and reservations. Prices may vary.
              </p>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />

      {/* Product Modal */}
      {selectedProduct && (
        <div
          className="fixed inset-0 z-50 flex items-end sm:items-center justify-center sm:p-4"
          role="dialog"
          aria-modal="true"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedProduct(null)}
          />

          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            className="relative w-full sm:max-w-2xl max-h-[90vh] sm:max-h-[85vh] overflow-y-auto bg-gradient-to-br from-[#1A1A1F] to-[#0B0B0D] border-t sm:border border-[#2A2A33] sm:rounded-2xl overflow-hidden shadow-2xl"
          >
            {/* Mobile handle */}
            <div className="sm:hidden sticky top-0 z-20 bg-gradient-to-b from-[#1A1A1F] to-transparent pt-3 pb-6">
              <div className="w-12 h-1 bg-[#2A2A33] rounded-full mx-auto" />
            </div>
            
            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute top-3 right-3 sm:top-4 sm:right-4 z-10 p-2.5 rounded-lg bg-[#0B0B0D]/80 text-[#8A8A95] hover:text-[#F5F5F7] hover:bg-[#2A2A33] active:bg-[#3A3A43] transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="grid sm:grid-cols-2">
              {/* Image */}
              <div className="relative aspect-[4/3] sm:aspect-square">
                <Image
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-5 sm:p-6 flex flex-col justify-center">
                <span className="text-xs sm:text-sm font-medium text-[#E10600] uppercase tracking-wider">
                  {selectedProduct.category}
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-[#F5F5F7] mt-2 mb-2 sm:mb-3">
                  {selectedProduct.name}
                </h2>
                <p className="text-[#8A8A95] text-sm sm:text-base mb-4 sm:mb-6">
                  {selectedProduct.description}
                </p>
                <div className="mb-4 sm:mb-6">
                  <span className="text-2xl sm:text-3xl font-bold text-[#F5F5F7]">
                    €{selectedProduct.price.toFixed(2)}
                  </span>
                </div>
                <div className="p-4 rounded-xl bg-[#0B0B0D] border border-[#2A2A33]">
                  <p className="text-xs sm:text-sm text-[#8A8A95]">
                    <span className="text-[#E10600] font-medium">Available in store</span>
                    <br />
                    Visit us or call to reserve this item.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </>
  )
}
