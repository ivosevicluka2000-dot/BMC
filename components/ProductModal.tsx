'use client';

import React, { useEffect, useCallback } from 'react';
import { Product, ProductVariant, getCategoryGroup } from '../data/products';
import { useLanguage, translateAvailability, getLocalizedProductText } from '@/lib/i18n';

interface ProductModalProps {
  product: Product;
  onClose: () => void;
}

const ProductModal: React.FC<ProductModalProps> = ({ product, onClose }) => {
  const { locale, t } = useLanguage();
  const localizedText = getLocalizedProductText(product, locale);
  const [selectedImage, setSelectedImage] = React.useState(0);
  const [selectedSize, setSelectedSize] = React.useState<string | null>(null);
  const [selectedColor, setSelectedColor] = React.useState<string | null>(null);
  const [selectedVariant, setSelectedVariant] = React.useState<number>(0);

  const isRich = getCategoryGroup(product.category) === 'Products';

  const handleEscape = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    },
    [onClose],
  );

  useEffect(() => {
    document.addEventListener('keydown', handleEscape);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [handleEscape]);

  useEffect(() => {
    if (product.sizes?.length) setSelectedSize(product.sizes[0]);
    if (product.colors?.length) setSelectedColor(product.colors[0]);
    setSelectedImage(0);
    setSelectedVariant(0);
  }, [product]);

  // Helper: resolve a spec value based on selected variant overrides
  const getSpecValue = (label: string, baseValue: string): string => {
    if (!product.variants?.length) return baseValue;
    const variant = product.variants[selectedVariant];
    return variant?.specOverrides?.[label] ?? baseValue;
  };

  /* ─── Rich / Product Modal ─── */
  if (isRich) {
    return (
      <div className="fixed inset-0 z-[9999]">
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/95 backdrop-blur-md"
          onClick={onClose}
        />

        {/* Scroll wrapper */}
        <div className="relative h-full overflow-y-auto">
          {/* Close */}
          <button
            onClick={onClose}
            className="fixed top-4 right-4 sm:top-6 sm:right-6 z-[10000] w-11 h-11 flex items-center justify-center bg-black/70 hover:bg-brand border border-white/20 hover:border-brand transition-all duration-200"
          >
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-10 py-8 sm:py-12 lg:py-16">
            {/* ── Hero: Image + Info ── */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14">
              {/* Left – Image gallery */}
              <div>
                <div className="aspect-[4/3] bg-zinc-900 overflow-hidden mb-4">
                  <img
                    src={`${product.images[selectedImage].split('?')[0]}?auto=format&fit=crop&q=85&w=1000`}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                {product.images.length > 1 && (
                  <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
                    {product.images.map((img, idx) => (
                      <button
                        key={idx}
                        onClick={() => setSelectedImage(idx)}
                        className={`flex-shrink-0 w-20 h-20 sm:w-24 sm:h-24 overflow-hidden border-2 transition-colors ${
                          selectedImage === idx
                            ? 'border-brand'
                            : 'border-white/10 hover:border-white/30'
                        }`}
                      >
                        <img
                          src={`${img.split('?')[0]}?auto=format&fit=crop&q=60&w=120`}
                          alt={`${product.name} view ${idx + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Right – Core info */}
              <div className="flex flex-col justify-center">
                {/* Tags */}
                {product.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {product.tags.map(tag => (
                      <span key={tag} className="bg-brand text-white px-2 py-1 text-[9px] font-bold uppercase tracking-wider">
                        {tag}
                      </span>
                    ))}
                  </div>
                )}

                {/* Category */}
                <span className="text-white/50 text-xs uppercase tracking-[0.2em] block mb-2">
                  {product.category}
                </span>

                {/* Name */}
                <h2 className="serif text-3xl sm:text-4xl lg:text-5xl text-white mb-3 leading-tight">
                  {product.name}
                </h2>

                {/* Price */}
                {product.priceEur > 0 && (
                  <div className="mb-4">
                    <span className="text-white text-3xl sm:text-4xl font-bold">
                      €{product.priceEur.toLocaleString('en-US')}
                    </span>
                  </div>
                )}

                {/* Availability */}
                <div className="flex items-center gap-4 mb-6">
                  <span
                    className={`px-2 py-1 text-[10px] font-bold uppercase tracking-wider border ${
                      product.availability === 'In Stock'
                        ? 'border-green-500/50 text-green-400'
                        : product.availability === 'Low Stock'
                        ? 'border-yellow-500/50 text-yellow-400'
                        : product.availability === 'Sold Out'
                        ? 'border-red-500/50 text-red-400'
                        : 'border-white/30 text-white/60'
                    }`}
                  >
                    {translateAvailability(product.availability, t)}
                  </span>
                </div>

                {/* Tagline */}
                {localizedText.tagline && (
                  <p className="text-white/90 text-lg sm:text-xl font-semibold uppercase tracking-wide mb-4">
                    {localizedText.tagline}
                  </p>
                )}

                {/* Variant / Model selector */}
                {product.variants && product.variants.length > 0 && (
                  <div className="mb-6">
                    <label className="text-white/50 text-xs uppercase tracking-[0.2em] block mb-3">
                      {t('productModal.selectModel')} <span className="text-white">{product.variants[selectedVariant].name}</span>
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {product.variants.map((v, idx) => (
                        <button
                          key={v.name}
                          onClick={() => setSelectedVariant(idx)}
                          className={`px-5 py-3 text-xs font-bold uppercase tracking-wider border transition-all ${
                            selectedVariant === idx
                              ? 'bg-brand/20 border-brand text-white'
                              : 'border-white/20 text-white/60 hover:border-white/40 hover:text-white'
                          }`}
                        >
                          {v.name}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Highlight stats row */}
                {product.highlightStats && product.highlightStats.length > 0 && (
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
                    {product.highlightStats.map(stat => (
                      <div key={stat.label} className="border border-white/10 bg-white/[0.03] p-4 text-center">
                        <span className="block text-brand text-2xl sm:text-3xl font-bold leading-none mb-1">
                          {stat.value}
                        </span>
                        <span className="block text-white/40 text-[10px] uppercase tracking-widest">{stat.unit}</span>
                        <span className="block text-white/60 text-xs mt-1">{stat.label}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Color selection */}
                {product.colors && product.colors.length > 0 && (
                  <div className="mb-6">
                    <label className="text-white/50 text-xs uppercase tracking-[0.2em] block mb-3">
                      {t('productModal.selectColor')} <span className="text-white">{selectedColor}</span>
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {product.colors.map(color => (
                        <button
                          key={color}
                          onClick={() => setSelectedColor(color)}
                          className={`px-5 py-3 text-xs font-bold uppercase tracking-wider border transition-all ${
                            selectedColor === color
                              ? 'bg-brand/20 border-brand text-white'
                              : 'border-white/20 text-white/60 hover:border-white/40 hover:text-white'
                          }`}
                        >
                          {color}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Size selection */}
                {product.sizes && product.sizes.length > 0 && (
                  <div className="mb-6">
                    <label className="text-white/50 text-xs uppercase tracking-[0.2em] block mb-3">
                      {t('productModal.size')} <span className="text-white">{selectedSize}</span>
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
              </div>
            </div>

            {/* ── Description ── */}
            {(localizedText.fullDesc || localizedText.shortDesc) && (
              <div className="mt-12 sm:mt-16 max-w-4xl">
                <div className="w-12 h-[2px] bg-brand mb-6" />
                <p className="text-white/80 text-base sm:text-lg leading-relaxed whitespace-pre-line">
                  {localizedText.fullDesc || localizedText.shortDesc}
                </p>
              </div>
            )}

            {/* ── Key Features ── */}
            {localizedText.keyFeatures && localizedText.keyFeatures.length > 0 && (
              <div className="mt-12 sm:mt-16">
                <h3 className="serif text-2xl sm:text-3xl text-white mb-8">{t('productModal.keyFeatures')}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {localizedText.keyFeatures.map((feat, i) => (
                    <div key={i} className="border border-white/10 bg-white/[0.02] p-6 sm:p-8">
                      <div className="flex items-start gap-4">
                        <span className="text-brand text-xs font-bold mt-1">{String(i + 1).padStart(2, '0')}</span>
                        <div>
                          <h4 className="text-white font-semibold text-base sm:text-lg mb-2">{feat.title}</h4>
                          <p className="text-white/60 text-sm leading-relaxed">{feat.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* ── Specifications ── */}
            {product.specs && product.specs.length > 0 && (
              <div className="mt-12 sm:mt-16">
                <h3 className="serif text-2xl sm:text-3xl text-white mb-8">{t('productModal.specifications')}</h3>

                {/* Variant tabs inside specs */}
                {product.variants && product.variants.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-6">
                    {product.variants.map((v, idx) => (
                      <button
                        key={v.name}
                        onClick={() => setSelectedVariant(idx)}
                        className={`px-4 py-2 text-[11px] font-bold uppercase tracking-wider border transition-all ${
                          selectedVariant === idx
                            ? 'bg-brand/20 border-brand text-white'
                            : 'border-white/20 text-white/60 hover:border-white/40 hover:text-white'
                        }`}
                      >
                        {v.name}
                      </button>
                    ))}
                  </div>
                )}

                <div className="border border-white/10 overflow-hidden">
                  {product.specs.map((spec, i) => (
                    <div
                      key={spec.label}
                      className={`flex justify-between items-center px-5 sm:px-6 py-3.5 sm:py-4 text-sm ${
                        i % 2 === 0 ? 'bg-white/[0.02]' : 'bg-transparent'
                      } ${i < product.specs!.length - 1 ? 'border-b border-white/5' : ''}`}
                    >
                      <span className="text-white/50 min-w-[40%]">{spec.label}</span>
                      <span className="text-white/90 text-right">{getSpecValue(spec.label, spec.value)}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* ── CTA ── */}
            <div className="mt-12 sm:mt-16 max-w-2xl mx-auto">
              <div className="bg-white/5 border border-white/10 p-6 sm:p-8 text-center">
                <p className="text-white/70 text-sm sm:text-base italic">
                  {t('productModal.ctaText')}
                </p>
                <p className="text-white/40 text-xs mt-3 uppercase tracking-widest">
                  {t('productModal.ctaSubtext')}
                </p>
              </div>
            </div>

            {/* Bottom spacer */}
            <div className="h-8 sm:h-12" />
          </div>
        </div>
      </div>
    );
  }

  /* ─── Simple / Accessory Modal ─── */
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/90 backdrop-blur-sm" onClick={onClose} />

      <div className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto bg-[#0a0a0a] border border-white/10">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center bg-black/50 hover:bg-black border border-white/20 transition-colors"
        >
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="p-4 sm:p-6 lg:p-8">
            <div className="aspect-square bg-zinc-900 overflow-hidden mb-4">
              <img
                src={`${product.images[selectedImage].split('?')[0]}?auto=format&fit=crop&q=80&w=800`}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
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

          <div className="p-4 sm:p-6 lg:p-8 lg:border-l border-white/10">
            {product.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-4">
                {product.tags.map(tag => (
                  <span key={tag} className="bg-brand text-white px-2 py-1 text-[9px] font-bold uppercase tracking-wider">
                    {tag}
                  </span>
                ))}
              </div>
            )}

            <span className="text-white/50 text-xs uppercase tracking-[0.2em] block mb-2">{product.category}</span>

            <h2 className="serif text-2xl sm:text-3xl lg:text-4xl text-white mb-2">{product.name}</h2>

            {product.priceEur > 0 && (
              <div className="mb-4">
                <span className="text-white text-2xl sm:text-3xl font-bold">
                  €{product.priceEur.toLocaleString('en-US')}
                </span>
              </div>
            )}

            <div className="flex items-center gap-4 mb-6">
              <span
                className={`px-2 py-1 text-[10px] font-bold uppercase tracking-wider border ${
                  product.availability === 'In Stock'
                    ? 'border-green-500/50 text-green-400'
                    : product.availability === 'Low Stock'
                    ? 'border-yellow-500/50 text-yellow-400'
                    : product.availability === 'Sold Out'
                    ? 'border-red-500/50 text-red-400'
                    : 'border-white/30 text-white/60'
                }`}
              >
                {translateAvailability(product.availability, t)}
              </span>
            </div>

            {(localizedText.fullDesc || localizedText.shortDesc) && (
              <p className="text-white/70 text-sm sm:text-base leading-relaxed mb-6">
                {localizedText.fullDesc || localizedText.shortDesc}
              </p>
            )}

            {product.sizes && product.sizes.length > 0 && (
              <div className="mb-6">
                <label className="text-white/50 text-xs uppercase tracking-[0.2em] block mb-3">{t('productModal.size')}</label>
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

            {product.colors && product.colors.length > 0 && (
              <div className="mb-6">
                <label className="text-white/50 text-xs uppercase tracking-[0.2em] block mb-3">
                  {t('productModal.color')} <span className="text-white">{selectedColor}</span>
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

            {product.specs && product.specs.length > 0 && (
              <div className="mb-6 pt-6 border-t border-white/10">
                <label className="text-white/50 text-xs uppercase tracking-[0.2em] block mb-4">{t('productModal.specifications')}</label>
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

            <div className="flex flex-col gap-3 pt-6 border-t border-white/10">
              <div className="bg-white/5 border border-white/10 p-4 text-center">
                <p className="text-white/70 text-sm italic">{t('productModal.ctaText')}</p>
                <p className="text-white/40 text-xs mt-2 uppercase tracking-widest">
                  {t('productModal.ctaSubtext')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
