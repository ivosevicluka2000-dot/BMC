'use client';

import React, { useEffect, useState } from 'react';
import { Location } from '../data/locations';

interface LocationModalProps {
  location: Location;
  onClose: () => void;
}

const LocationModal: React.FC<LocationModalProps> = ({ location, onClose }) => {
  const [selectedImage, setSelectedImage] = useState(0);

  // Close modal on escape key and lock body scroll
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

  const nextImage = () => {
    setSelectedImage((prev) => (prev + 1) % location.images.length);
  };

  const prevImage = () => {
    setSelectedImage((prev) => (prev - 1 + location.images.length) % location.images.length);
  };

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/95 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal Content - Full Screen */}
      <div className="relative w-full h-full max-w-screen-2xl mx-auto flex flex-col lg:flex-row overflow-hidden">
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-50 w-12 h-12 flex items-center justify-center bg-black/70 hover:bg-black border border-white/30 transition-colors"
        >
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Image Gallery Section */}
        <div className="flex-1 relative flex flex-col bg-zinc-950 h-[50vh] lg:h-full">
          {/* Main Image */}
          <div className="flex-1 relative overflow-hidden">
            <img 
              src={location.images[selectedImage]}
              alt={`${location.name} - Slika ${selectedImage + 1}`}
              className="w-full h-full object-cover"
            />
            
            {/* Navigation Arrows */}
            {location.images.length > 1 && (
              <>
                <button 
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-black/60 hover:bg-black/80 border border-white/20 transition-colors"
                >
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button 
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-black/60 hover:bg-black/80 border border-white/20 transition-colors"
                >
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </>
            )}

            {/* Image Counter */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/70 px-4 py-2 text-white/80 text-sm tracking-widest">
              {selectedImage + 1} / {location.images.length}
            </div>
          </div>

          {/* Thumbnails */}
          {location.images.length > 1 && (
            <div className="flex-none p-4 bg-black/80 flex gap-2 overflow-x-auto">
              {location.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className={`flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 overflow-hidden border-2 transition-colors ${
                    selectedImage === idx ? 'border-brand' : 'border-white/10 hover:border-white/30'
                  }`}
                >
                  <img 
                    src={img}
                    alt={`${location.name} - Thumbnail ${idx + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Details Section */}
        <div className="w-full lg:w-[400px] xl:w-[480px] flex-none bg-[#0a0a0a] border-t lg:border-t-0 lg:border-l border-white/10 p-6 sm:p-8 lg:p-10 overflow-y-auto">
          {/* Category Badge */}
          <div className="mb-6">
            <span className={`inline-block px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest border ${
              location.type === 'shop' 
                ? 'bg-brand/20 border-brand/40 text-brand' 
                : 'bg-white/10 border-white/20 text-white/80'
            }`}>
              {location.type === 'shop' ? 'Prodavnica' : 'Servis'}
            </span>
          </div>

          {/* Name */}
          <h2 className="serif text-3xl sm:text-4xl lg:text-5xl text-white mb-2">{location.name}</h2>
          <p className="text-white/50 text-sm uppercase tracking-widest mb-8">{location.city}</p>

          {/* Details */}
          <div className="space-y-6 mb-10">
            {/* Address */}
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center border border-white/20">
                <svg className="w-5 h-5 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <span className="text-white/40 text-[10px] uppercase tracking-widest block mb-1">Adresa</span>
                <span className="text-white text-sm sm:text-base">{location.address}, {location.city}</span>
              </div>
            </div>

            {/* Working Hours */}
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center border border-white/20">
                <svg className="w-5 h-5 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <span className="text-white/40 text-[10px] uppercase tracking-widest block mb-1">Radno Vreme</span>
                <span className="text-white text-sm sm:text-base">{location.hours}</span>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center border border-white/20">
                <svg className="w-5 h-5 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <span className="text-white/40 text-[10px] uppercase tracking-widest block mb-1">Telefon</span>
                <a 
                  href={`tel:${location.phone}`}
                  className="text-white text-sm sm:text-base hover:text-brand transition-colors"
                >
                  {location.phone}
                </a>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-3">
            <a 
              href={`tel:${location.phone}`}
              className="w-full bg-brand text-white flex items-center justify-center gap-3 py-4 text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Pozovite Nas
            </a>
            <a 
              href={`https://www.google.com/maps/dir/?api=1&destination=${location.lat},${location.lng}`}
              target="_blank"
              rel="noreferrer"
              className="w-full border border-white/30 text-white/80 flex items-center justify-center gap-3 py-4 text-xs font-bold uppercase tracking-widest hover:bg-white/10 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
              </svg>
              Uputstva za Dolazak
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationModal;
