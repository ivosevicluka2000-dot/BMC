'use client';

import React, { useEffect } from 'react';
import { Product } from '../data/products';

interface ProductModalProps {
  product: Product;
  onClose: () => void;
}

const ProductModal: React.FC<ProductModalProps> = ({ product, onClose }) => {
  const [selectedImage, setSelectedImage] = React.useState(0);
  const [selectedSize, setSelectedSize] = React.useState<string | null>(null);
  const [selectedColor, setSelectedColor] = React.useState<string | null>(null);

  // Close modal on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleEscape);
    document.body.style.overflow = 'hidden';
    
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);

  // Set default selections
  useEffect(() => {
    if (product.sizes && product.sizes.length > 0) {
      setSelectedSize(product.sizes[0]);
    }
    if (product.colors && product.colors.length > 0) {
      setSelectedColor(product.colors[0]);
    }
  }, [product]);

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/90 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto bg-[#0a0a0a] border border-white/10">
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center bg-black/50 hover:bg-black border border-white/20 transition-colors"
        >
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Image Gallery */}
          <div className="p-4 sm:p-6 lg:p-8">
            {/* Main Image */}
            <div className="aspect-square bg-zinc-900 overflow-hidden mb-4">
              <img 
                src={`${product.images[selectedImage].split('?')[0]}?auto=format&fit=crop&q=80&w=800`}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Thumbnail Gallery */}
            {product.images.length > 1 && (
              <div className="flex gap-2 overflow-x-auto pb-2">
                {product.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImage(idx)}
                    className={`flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 overflow-hidden border-2 transition-colors ${
                      selectedImage === idx ? 'border-brand' : 'border-white/10 hover:border-white/30'
                    }`}
                  >
                    <img 
                      src={`${img.split('?')[0]}?auto=format&fit=crop&q=60&w=100`}
                      alt={`${product.name} view ${idx + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Details */}
          <div className="p-4 sm:p-6 lg:p-8 lg:border-l border-white/10">
            {/* Tags */}
            {product.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-4">
                {product.tags.map(tag => (
                  <span 
                    key={tag} 
                    className="bg-brand text-white px-2 py-1 text-[9px] font-bold uppercase tracking-wider"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}

            {/* Category */}
            <span className="text-white/50 text-xs uppercase tracking-[0.2em] block mb-2">
              {product.category}
            </span>

            {/* Name & Price */}
            <h2 className="serif text-2xl sm:text-3xl lg:text-4xl text-white mb-2">
              {product.name}
            </h2>
            <div className="flex items-center gap-4 mb-6">
              <span className="text-brand text-xl sm:text-2xl font-bold">
                €{product.priceEur}
              </span>
              <span className={`px-2 py-1 text-[10px] font-bold uppercase tracking-wider border ${
                product.availability === 'In Stock' 
                  ? 'border-green-500/50 text-green-400' 
                  : product.availability === 'Low Stock'
                  ? 'border-yellow-500/50 text-yellow-400'
                  : product.availability === 'Sold Out'
                  ? 'border-red-500/50 text-red-400'
                  : 'border-white/30 text-white/60'
              }`}>
                {product.availability}
              </span>
            </div>

            {/* Description */}
            <p className="text-white/70 text-sm sm:text-base leading-relaxed mb-6">
              {product.fullDesc || product.shortDesc}
            </p>

            {/* Size Selection */}
            {product.sizes && product.sizes.length > 0 && (
              <div className="mb-6">
                <label className="text-white/50 text-xs uppercase tracking-[0.2em] block mb-3">
                  Size
                </label>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map(size => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-4 py-3 min-w-[48px] text-xs font-bold uppercase tracking-wider border transition-all ${
                        selectedSize === size 
                          ? 'bg-brand border-brand text-white' 
                          : 'border-white/20 text-white/60 hover:border-white/40 hover:text-white'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Color Selection */}
            {product.colors && product.colors.length > 0 && (
              <div className="mb-6">
                <label className="text-white/50 text-xs uppercase tracking-[0.2em] block mb-3">
                  Color: <span className="text-white">{selectedColor}</span>
                </label>
                <div className="flex flex-wrap gap-2">
                  {product.colors.map(color => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`px-4 py-3 text-xs font-bold uppercase tracking-wider border transition-all ${
                        selectedColor === color 
                          ? 'bg-white/10 border-white text-white' 
                          : 'border-white/20 text-white/60 hover:border-white/40 hover:text-white'
                      }`}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Specs */}
            {product.specs && product.specs.length > 0 && (
              <div className="mb-6 pt-6 border-t border-white/10">
                <label className="text-white/50 text-xs uppercase tracking-[0.2em] block mb-4">
                  Specifications
                </label>
                <div className="space-y-3">
                  {product.specs.map(spec => (
                    <div key={spec.label} className="flex justify-between text-sm">
                      <span className="text-white/50">{spec.label}</span>
                      <span className="text-white/80">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-3 pt-6 border-t border-white/10">
              <button 
                className={`flex-1 py-4 text-xs font-bold uppercase tracking-widest transition-all ${
                  product.availability === 'Sold Out'
                    ? 'bg-white/10 text-white/40 cursor-not-allowed'
                    : 'bg-brand text-white hover:bg-white hover:text-black active:scale-[0.98]'
                }`}
                disabled={product.availability === 'Sold Out'}
              >
                {product.availability === 'Sold Out' ? 'Sold Out' : 
                 product.availability === 'Pre-Order' ? 'Pre-Order Now' : 
                 'Add to Cart'}
              </button>
              <button className="px-6 py-4 border border-white/30 text-white/80 text-xs font-bold uppercase tracking-widest hover:bg-white/10 transition-colors">
                <svg className="w-4 h-4 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
